// Drafts a PFS scenario definition from a PDF: detection, name, maps with measured grids,
// and game-aid images. Uses the same analysis as the import-time fallback
// (src/adventures/pfs/scenario-analysis.js). Check every map grid before committing.
// Usage: node tools/draft-pfs-scenario.mjs <file.pdf> [--write]
import { mkdir, writeFile } from "node:fs/promises";
import { startHarness } from "./lib/harness.mjs";

const [pdfPath, flag] = process.argv.slice(2);
if (!pdfPath) throw new Error("Usage: draft-pfs-scenario <file.pdf> [--write]");

const { page, close } = await startHarness(pdfPath);
const draft = await page.evaluate(async () => {
  const { load, analysis } = window.pipeline;
  const pdf = await load();
  const maps = await analysis.findBattleMaps(pdf);
  return {
    identity: analysis.identifyScenario(pdf),
    scenes: maps.map((map, i) => ({
      settings: analysis.sceneSettings(map, i),
      period: map.grid.period,
      score: Math.min(map.grid.x.score, map.grid.y.score),
      label: map.label?.text.trim(),
      reasons: map.grid.reasons,
    })),
    aids: analysis
      .findGameAids(pdf)
      .map((aid) => ({ ...aid, slug: analysis.slugify(aid.name) })),
  };
});
await close();
if (!draft.identity) throw new Error("No 'Scenario #N-NN' found on the cover.");

const { season, number, title } = draft.identity;
const id = `${season}-${number}`;
const className = `PFS${season}_${number}`;
const indent = (text, spaces) => text.replace(/\n/g, `\n${" ".repeat(spaces)}`);

const sceneCode = draft.scenes
  .map(({ settings: { gridUncertain, ...settings }, reasons }) => {
    const verify = gridUncertain
      ? `// VERIFY grid: ${reasons.join("; ")}\n`
      : "";
    const body = Object.entries(settings)
      .map(
        ([key, value]) =>
          `${key}: ${JSON.stringify(value).replace(/"(\w+)":/g, "$1: ")},`,
      )
      .join("\n");
    const nameFn = settings.nameInfo
      ? "\nnameFn: (name) => this.sentenceCase(name),"
      : "";
    return `    new ModuleScene({\n      ${indent(verify + body + nameFn, 6)}\n    }),`;
  })
  .join("\n");

const aidCode = draft.aids
  .map(
    (a) =>
      `    new LabelImage({ name: "${a.slug}", page: ${a.page}, width: ${a.width}, height: ${a.height}, label: "${a.label}" }),`,
  )
  .join("\n");

const source = `import { PFSAutoLayoutBase } from "../auto-layout-base.js";
import { LabelImage } from "../../../core/images.js";
import { ModuleScene } from "../../../core/module-scene.js";

/** Drafted by tools/draft-pfs-scenario.mjs. Creatures come from the PDF's stat blocks. */
export class ${className} extends PFSAutoLayoutBase {
  prefix = "pfs-${id}";
  fullName = ${JSON.stringify(`PFS #${id} - ${title}`)};
  scenes = [
${sceneCode}
  ];
  journals = [
${aidCode}
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) => t.page === 1 && /^Scenario #\\s*${season}\\s*[–-]\\s*0?${Number(number)}$/.test(t.text.trim()),
    );
  }
}
`;

const out = `src/adventures/pfs/season${season}/pfs${season}-${number}.js`;
console.log(
  JSON.stringify({
    out,
    title,
    maps: draft.scenes.map((s) => ({
      page: s.settings.page,
      period: s.period.toFixed(2),
      score: s.score.toFixed(1),
      label: s.label,
    })),
    aids: draft.aids.map((a) => a.name),
  }),
);
if (flag === "--write") {
  await mkdir(`src/adventures/pfs/season${season}`, { recursive: true });
  await writeFile(out, source);
}
