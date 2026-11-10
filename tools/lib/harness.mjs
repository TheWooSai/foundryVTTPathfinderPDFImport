import { build } from "esbuild";
import { readFile } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, normalize, resolve } from "node:path";
import { chromium } from "playwright";

const ROOT = resolve(import.meta.dirname, "../..");
const MIME = {
  ".js": "text/javascript",
  ".mjs": "text/javascript",
  ".json": "application/json",
  ".html": "text/html",
  ".png": "image/png",
};

/** Bundle tools/lib/browser-entry.js, which exposes the pipeline on window.pipeline. */
async function bundleEntry() {
  const result = await build({
    entryPoints: [join(ROOT, "tools/lib/browser-entry.js")],
    bundle: true,
    format: "esm",
    write: false,
    target: "es2022",
    logLevel: "error",
    external: ["fs", "http", "https", "url", "canvas", "path2d"],
  });
  return result.outputFiles[0].text;
}

/** Serve dist/ plus the harness page and the PDF at fixed URLs. */
export async function startHarness(pdfPath) {
  const bundle = await bundleEntry();
  const server = createServer(async (req, res) => {
    const path = new URL(req.url, "http://x").pathname;
    try {
      if (path === "/")
        return send(
          res,
          ".html",
          '<!doctype html><script type="module" src="/entry.js"></script>',
        );
      if (path === "/entry.js") return send(res, ".js", bundle);
      if (path === "/test.pdf")
        return send(res, ".pdf", await readFile(pdfPath));
      if (path === "/pdf.worker.min.mjs")
        return send(
          res,
          ".mjs",
          await readFile(
            join(ROOT, "node_modules/pdfjs-dist/build/pdf.worker.min.mjs"),
          ),
        );
      if (path === "/favicon.ico") return send(res, ".png", Buffer.alloc(0));
      const file = normalize(join(ROOT, "public", path));
      if (!file.startsWith(join(ROOT, "public")))
        throw new Error("outside root");
      return send(res, extname(file), await readFile(file));
    } catch {
      res.writeHead(404).end();
    }
  });
  await new Promise((r) => server.listen(0, "127.0.0.1", r));
  const url = `http://127.0.0.1:${server.address().port}/`;
  const browser = await chromium.launch();
  const page = await browser.newPage();
  page.on("pageerror", (e) => console.error("PAGE ERROR:", e.message));
  await page.goto(url);
  await page.waitForFunction(() => window.pipeline !== undefined);
  return {
    page,
    close: async () => {
      await browser.close();
      server.close();
    },
  };
}

function send(res, ext, body) {
  res.writeHead(200, {
    "content-type": MIME[ext] ?? "application/octet-stream",
  });
  res.end(body);
}
