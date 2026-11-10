// Full import of a real PDF into an in-memory world, in headless Chromium. Output stays in test-output/.
// Usage: npm run pdf:test -- /path/to/file.pdf
import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
import { startHarness } from "./lib/harness.mjs";

const pdfPath = process.argv[2];
if (!pdfPath) throw new Error("Usage: pdf-pipeline-test <file.pdf>");
const { page, close } = await startHarness(pdfPath);
const forceFallback = process.env.FALLBACK === "1";
const result = await page.evaluate(
  (options) => window.pipeline.dryRun(options),
  { forceFallback },
);
await close();
await mkdir("test-output", { recursive: true });
await writeFile("test-output/pipeline.json", JSON.stringify(result, null, 1));

const { written, log, last } = result;
const issues = log.filter((l) =>
  /unknown|failed|bailed|Couldn't|Error/i.test(l),
);
console.log(`final progress: ${last}`);
console.log(
  `folders ${written.folders.length}, journals ${written.journals.length} (pages ${written.journals.reduce((n, j) => n + j.pages.length, 0)}), actors ${written.actors.length}, scenes ${written.scenes.length}, uploads ${written.uploads.length}`,
);
console.log(`chat: ${written.chat.join(" | ")}`);
console.log(`issues logged: ${issues.length}`);
for (const issue of issues.slice(0, 40))
  console.log(`  ${issue.slice(0, 200)}`);
assert.ok(written.scenes.length > 0, "no scenes created");
for (const scene of written.scenes) {
  assert.ok(scene.levels[0].background.src, `scene ${scene.name} has no map`);
  assert.equal(scene.background, undefined);
  assert.equal(scene.darkness, undefined);
}
console.log("pipeline assertions passed");
