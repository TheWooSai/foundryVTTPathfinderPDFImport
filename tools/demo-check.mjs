// Validates the module against a live Foundry v14 + PF2e server as a read-only player.
// Nothing is written: Document writes are blocked and files are served from this machine.
// Usage: npm run build && npm run demo:check -- /path/to/test.pdf
import { build } from "esbuild";
import { readFile, readdir, mkdir, writeFile } from "node:fs/promises";
import { extname, join } from "node:path";
import { chromium } from "playwright";
import { MODULE_ID } from "../src/constants.js";

const DEMO = "https://demo.foundryvtt.com";
const pdfPath = process.argv[2];
const MIME = {
  ".js": "text/javascript",
  ".mjs": "text/javascript",
  ".json": "application/json",
  ".hbs": "text/plain",
  ".css": "text/css",
  ".png": "image/png",
};

async function mapFiles() {
  const out = [];
  for (const dir of await readdir("public", { withFileTypes: true })) {
    if (!dir.isDirectory()) continue;
    try {
      for (const f of await readdir(join("public", dir.name, "maps")))
        out.push(`${dir.name}/maps/${f}`);
    } catch {
      /* no maps here */
    }
  }
  return out;
}

const bundled = await build({
  entryPoints: ["tools/lib/demo-entry.js"],
  bundle: true,
  format: "esm",
  write: false,
  target: "es2022",
  logLevel: "error",
  external: ["fs", "http", "https", "url", "canvas", "path2d"],
});

const browser = await chromium.launch({
  args: [
    "--use-gl=angle",
    "--use-angle=swiftshader",
    "--enable-webgl",
    "--ignore-gpu-blocklist",
    "--enable-unsafe-swiftshader",
  ],
});
const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
page.on("pageerror", (e) =>
  console.error("PAGE ERROR:", e.message.slice(0, 300)),
);

await page.route(`${DEMO}/__import-check/**`, async (route) => {
  const path = new URL(route.request().url()).pathname.replace(
    "/__import-check/",
    "",
  );
  if (path === "entry.js")
    return route.fulfill({
      contentType: "text/javascript",
      body: bundled.outputFiles[0].text,
    });
  if (path === "test.pdf" && pdfPath)
    return route.fulfill({
      contentType: "application/pdf",
      body: await readFile(pdfPath),
    });
  return route.fulfill({ status: 404 });
});
await page.route(`${DEMO}/modules/${MODULE_ID}/**`, async (route) => {
  const path = new URL(route.request().url()).pathname.replace(
    `/modules/${MODULE_ID}/`,
    "",
  );
  try {
    return route.fulfill({
      contentType: MIME[extname(path)] ?? "application/octet-stream",
      body: await readFile(join("dist", path)),
    });
  } catch {
    return route.fulfill({ status: 404 });
  }
});

await page.goto(`${DEMO}/join`, {
  waitUntil: "domcontentloaded",
  timeout: 60000,
});
await page.waitForSelector("select[name=userid]", { timeout: 60000 });
await page.waitForTimeout(3000);
const player = await page.evaluate(
  () =>
    [...document.querySelectorAll("select[name=userid] option")]
      .reverse()
      .find((o) => /^Player/.test(o.textContent) && !o.disabled)?.value,
);
if (!player) throw new Error("No free player slot on the demo");
await page.selectOption("select[name=userid]", player);
await page.fill("input[name=password]", "foundry");
await page.click("button[name=join]");
await page.waitForURL(/\/game/, { timeout: 90000 });
await page.waitForFunction(() => globalThis.game?.ready === true, null, {
  timeout: 180000,
});
await page.waitForTimeout(3000);
await page.evaluate(() => import("/__import-check/entry.js"));
await page.waitForFunction(() => window.importCheck !== undefined);

const files = await mapFiles();
const report = await page.evaluate(
  async ({ files, hasPdf }) => {
    const check = window.importCheck;
    const unblock = check.blockWrites();
    const out = { server: check.info() };
    try {
      out.interface = await check.checkInterface();
      out.maps = await check.checkMaps(files);
      out.links = check.checkCompendiumLinks();
      if (hasPdf) out.import = await check.checkImport();
    } catch (error) {
      out.fatal = `${error.message}\n${error.stack}`.slice(0, 1500);
    } finally {
      unblock();
    }
    return out;
  },
  { files, hasPdf: Boolean(pdfPath) },
);

await mkdir("test-output", { recursive: true });
await page.screenshot({ path: "test-output/demo-dialog.png" });
await page.evaluate(() => window.importCheck.closeDialog());
await browser.close();
await writeFile("test-output/demo-check.json", JSON.stringify(report, null, 1));

console.log(
  `Server: Foundry ${report.server.foundry}, PF2e ${report.server.pf2e}, role ${report.server.role}`,
);
console.log("Interface:", JSON.stringify(report.interface));
console.log(
  `Maps: ${report.maps?.checked} checked, ${report.maps?.failures.length} failed`,
);
for (const f of report.maps?.failures.slice(0, 10) ?? []) console.log(`  ${f}`);
console.log(
  `Compendium links: ${report.links?.checked} checked, ${report.links?.missing.length} distinct missing`,
);
if (report.import) console.log("Import:", JSON.stringify(report.import));
if (report.fatal) console.log("FATAL:", report.fatal);
