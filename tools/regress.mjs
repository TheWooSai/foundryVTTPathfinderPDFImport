// Regression run over a folder of PDFs (default docs/, git-ignored). For each PDF it imports
// once with the adventure definitions and once through the automatic fallback, then compares
// word coverage, creatures and map grids. Results go to test-output/regress.json.
// Usage: node tools/regress.mjs [folder] [--first-season=N]
import { mkdir, readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { startHarness } from "./lib/harness.mjs";

const args = process.argv.slice(2);
const folder = args.find((a) => !a.startsWith("--")) ?? "docs";
const firstSeason = Number(
  args.find((a) => a.startsWith("--first-season="))?.split("=")[1] ?? 2,
);
const GRID_TOLERANCE = 0.03;

const words = (html) =>
  (html ?? "")
    .replace(/<[^>]+>/g, " ")
    .toLowerCase()
    .match(/[a-z]{3,}/g) ?? [];

function coverage(textDetails, written) {
  const source = new Map();
  for (const t of textDetails) {
    if (t.page < 3 || t.y === 2 || t.y <= 40 || t.y >= 700) continue;
    for (const w of words(t.text)) source.set(w, (source.get(w) ?? 0) + 1);
  }
  const output = new Map();
  const add = (html) =>
    words(html).forEach((w) => output.set(w, (output.get(w) ?? 0) + 1));
  written.journals.forEach((j) => j.pages.forEach((p) => add(p.text?.content)));
  written.actors.forEach((a) => add(JSON.stringify(a)));
  let hit = 0;
  let total = 0;
  for (const [w, n] of source) {
    total += n;
    hit += Math.min(n, output.get(w) ?? 0);
  }
  return total ? Math.round((1000 * hit) / total) / 10 : null;
}

const scenesByPage = (written) =>
  new Map(
    written.scenes.map((s) => [
      s.flags?.["foundry-pathfinder-pdf-import"]?.page,
      { width: s.width, height: s.height, name: s.name, flags: s.flags },
    ]),
  );

const pdfs = (await readdir(folder))
  .filter((f) => f.toLowerCase().endsWith(".pdf"))
  .sort();
const results = [];
for (const file of pdfs) {
  const { page, close } = await startHarness(join(folder, file));
  const run = await page.evaluate(async (season) => {
    const pdf = await window.pipeline.load();
    const textDetails = pdf.textDetails.map(({ page: p, x, y, text }) => ({
      page: p,
      x,
      y,
      text,
    }));
    const curated = await window.pipeline.dryRun();
    const fallback = await window.pipeline.dryRun({
      forceFallback: true,
      firstSeason: season,
    });
    return { textDetails, curated, fallback };
  }, firstSeason);
  await close();

  const summarize = (r) =>
    r.written.chat.length && !/Could not detect/.test(r.written.chat[0])
      ? {
          adventure:
            r.written.chat[0].match(/import of (.*?) is complete/)?.[1] ?? null,
          coverage: coverage(run.textDetails, r.written),
          actors: r.written.actors.length,
          scenes: r.written.scenes.length,
          uncertainMaps: r.written.scenes.filter(
            (s) => s.flags?.["foundry-pathfinder-pdf-import"]?.gridUncertain,
          ).length,
        }
      : null;
  const curated = summarize(run.curated);
  const fallback = summarize(run.fallback);

  // Ground truth for grids: the definition's map from the same PDF page.
  const grids = [];
  if (curated && fallback) {
    const truth = scenesByPage(run.curated.written);
    for (const [p, auto] of scenesByPage(run.fallback.written)) {
      const known = truth.get(p);
      if (!known) continue;
      const ratio = auto.width / known.width;
      grids.push({
        page: p,
        correct: Math.abs(ratio - 1) <= GRID_TOLERANCE,
        ratio: Math.round(ratio * 1000) / 1000,
        uncertain: Boolean(
          auto.flags?.["foundry-pathfinder-pdf-import"]?.gridUncertain,
        ),
      });
    }
  }
  results.push({ file, curated, fallback, grids });
  const g = grids.length
    ? `${grids.filter((x) => x.correct).length}/${grids.length}`
    : "-";
  console.log(
    `${file.slice(0, 26).padEnd(26)} def=${curated ? `${curated.coverage}%` : "none"} fallback=${fallback ? `${fallback.coverage}%` : "refused"} grids=${g} ${grids
      .filter((x) => !x.correct || x.uncertain)
      .map((x) => `p${x.page}:${x.ratio}${x.uncertain ? "?" : ""}`)
      .join(" ")}`,
  );
}

const all = results.flatMap((r) => r.grids);
const wrong = all.filter((x) => !x.correct);
const summary = {
  pdfs: results.length,
  grids: all.length,
  correct: all.length - wrong.length,
  wrongFlagged: wrong.filter((x) => x.uncertain).length,
  correctFlagged: all.filter((x) => x.correct && x.uncertain).length,
};
console.log(JSON.stringify(summary));
await mkdir("test-output", { recursive: true });
await writeFile(
  "test-output/regress.json",
  JSON.stringify({ firstSeason, summary, results }, null, 1),
);
