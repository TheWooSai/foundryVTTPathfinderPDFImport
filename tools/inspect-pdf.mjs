// Dump a PDF's parsed text and image inventory to test-output/ (git-ignored) for authoring adventures.
// Usage: npm run pdf:inspect -- /path/to/file.pdf
import { mkdir, writeFile } from "node:fs/promises";
import { startHarness } from "./lib/harness.mjs";

const pdfPath = process.argv[2];
if (!pdfPath) throw new Error("Usage: inspect-pdf <file.pdf>");
const { page, close } = await startHarness(pdfPath);
const result = await page.evaluate(async () => {
  const pdf = await window.pipeline.load();
  window.pdf = pdf;
  const adventure = window.pipeline.getAdventureModule(pdf);
  return {
    detected: adventure?.fullName ?? null,
    textDetails: pdf.textDetails,
    images: pdf.imageDetails.map(
      ({ id, page: p, width, height, transform, gstate }) => ({
        id,
        page: p,
        width,
        height,
        transform,
        smask: Boolean(gstate?.smask),
      }),
    ),
  };
});
await mkdir("test-output", { recursive: true });
await writeFile(
  "test-output/text.json",
  JSON.stringify(result.textDetails, null, 1),
);
await writeFile(
  "test-output/images.json",
  JSON.stringify(result.images, null, 1),
);
const pages = new Set(result.textDetails.map((t) => t.page));
console.log(`Detected: ${result.detected}`);
console.log(
  `Text runs: ${result.textDetails.length}, pages: ${pages.size}, images: ${result.images.length}`,
);
await close();
