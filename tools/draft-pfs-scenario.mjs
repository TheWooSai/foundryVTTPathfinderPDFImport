// Drafts a PFS scenario definition from a PDF: detection, name, maps with measured grids,
// and game-aid images. Review the result before committing it.
// Usage: node tools/draft-pfs-scenario.mjs <file.pdf> [--write]
import { mkdir, writeFile } from "node:fs/promises";
import { startHarness } from "./lib/harness.mjs";

const [pdfPath, flag] = process.argv.slice(2);
if (!pdfPath) throw new Error("Usage: draft-pfs-scenario <file.pdf> [--write]");

/** Minimum grid-line strength on both axes for an image to count as a battle map. */
const MIN_GRID_SCORE = 8;

const { page, close } = await startHarness(pdfPath);
const draft = await page.evaluate(async (minGridScore) => {
  const pdf = await window.pipeline.load();
  const t = pdf.textDetails.filter((x) => x.y !== 2);

  // Text repeated on many pages is page furniture: running headers and page numbers.
  const pagesWith = new Map();
  for (const x of t) {
    const key = x.text.trim();
    if (!pagesWith.has(key)) pagesWith.set(key, new Set());
    pagesWith.get(key).add(x.page);
  }
  const repeated = (x) => (pagesWith.get(x.text.trim())?.size ?? 0) >= 3;
  const isLabel = (x) =>
    !repeated(x) &&
    !/^\d+$/.test(x.text.trim()) &&
    x.text.trim().length > 1 &&
    !/paizo\.com/i.test(x.text);

  const cover = t.filter((x) => x.page === 1);
  const scenarioRun = cover.find((x) =>
    /Scenario #\s*\d+\s*[–-]\s*\d+/.test(x.text),
  );
  const [, season, number] = scenarioRun.text.match(/#\s*(\d+)\s*[–-]\s*(\d+)/);

  // Seasons 4 and 5 print a "Year of ..." banner: the "Year of" line, in some PDFs the
  // season name at the same size, and in others the season name as the cover's largest text.
  const yearOf = cover.find((x) => /^year of/i.test(x.text.trim()));
  const largest = Math.max(...cover.map((x) => x.fontSize));
  const banner = new Set(
    yearOf
      ? cover
          .filter(
            (x) => x.fontSize === yearOf.fontSize || x.fontSize === largest,
          )
          .map((x) => x.text.trim().toLowerCase())
      : [],
  );
  const isBanner = (x) => banner.has(x.text.trim().toLowerCase());

  // The scenario title is the large running header on its story pages.
  const header = [...pagesWith]
    .filter(([text, pages]) => pages.size >= 3 && text.length > 3)
    .map(([text]) => t.find((x) => x.page >= 3 && x.text.trim() === text))
    .filter(
      (x) =>
        x &&
        x.fontSize >= 20 &&
        !isBanner(x) &&
        !/pathfinder society|scenario/i.test(x.text),
    )
    .sort((a, b) => b.fontSize - a.fontSize)[0];
  const ignore = /^(second edition|scenario|levels|by\s|year of)/i;
  const coverTitle = () => {
    const runs = cover.filter(
      (x) => !ignore.test(x.text.trim()) && !isBanner(x),
    );
    const size = Math.max(...runs.map((x) => x.fontSize));
    return runs
      .filter((x) => x.fontSize === size)
      .sort((a, b) => b.y - a.y || a.x - b.x)
      .map((x) => x.text.trim())
      .join(" ");
  };
  const title = (header?.text ?? coverTitle()).replace(/\s+/g, " ").trim();

  const bodyCount = (p) =>
    t.filter((x) => x.page === p && x.y > 40 && x.y < 720).length;
  const backMatter = (p) =>
    t.some(
      (x) =>
        x.page === p &&
        /open game license|gm org play #|chronicle sheet/i.test(x.text),
    );

  async function measureGrid(image) {
    const canvas = await image.getImageCanvas();
    const { data, width, height } = canvas
      .getContext("2d")
      .getImageData(0, 0, canvas.width, canvas.height);
    const px = (x, y) => {
      const k = (y * width + x) * 4;
      return data[k] + data[k + 1] + data[k + 2];
    };
    // Second difference of brightness along each axis: grid lines are thin ridges.
    const profile = (alongX) => {
      const n = alongX ? width : height;
      const m = alongX ? height : width;
      const out = new Float64Array(n);
      for (let i = 1; i < n - 1; i++) {
        let s = 0;
        for (let j = 0; j < m; j += 2) {
          s += alongX
            ? 2 * px(i, j) - px(i - 1, j) - px(i + 1, j)
            : 2 * px(j, i) - px(j, i - 1) - px(j, i + 1);
        }
        out[i] = s / m;
      }
      return out;
    };
    const fit = (a, fixed) => {
      const mean = a.reduce((p, c) => p + c, 0) / a.length;
      let top = { period: 0, phase: 0, score: -Infinity };
      for (let period = fixed ?? 20; period <= (fixed ?? 120); period += 0.05) {
        for (let phase = 0; phase < period; phase += 0.5) {
          let s = 0;
          let c = 0;
          for (let k = phase; k < a.length - 1; k += period) {
            s += a[Math.round(k)] - mean;
            c++;
          }
          s /= c;
          if (s > top.score) top = { period, phase, score: s };
        }
      }
      return top;
    };
    // Lines recur at every multiple of the true spacing, so a multiple scores as well as
    // the spacing itself. Prefer the smallest fraction of the winner that still fits.
    const ratios = [];
    const smallestFit = (a) => {
      const top = fit(a);
      for (let k = 2; k <= 6; k++) {
        if (top.period / k >= 20)
          ratios.push(
            `${k}:${(fit(a, top.period / k).score / top.score).toFixed(2)}`,
          );
      }
      for (let k = 6; k >= 2; k--) {
        const period = top.period / k;
        if (period < 20) continue;
        const candidate = fit(a, period);
        // Measured on these PDFs: the true spacing keeps 0.63-0.98 of the score, a wrong
        // fraction 0.17-0.57. Larger fractions are tried first.
        if (candidate.score >= 0.6 * top.score) return candidate;
      }
      return top;
    };
    const along = profile(true);
    const down = profile(false);
    let x = smallestFit(along);
    let y = smallestFit(down);
    // Squares: if the axes disagree and one spacing is a multiple of the other, the smaller
    // is the grid. Otherwise trust the stronger axis. Either way, refit the other's phase.
    if (Math.abs(x.period - y.period) >= 0.6) {
      const [small, large] = x.period < y.period ? [x, y] : [y, x];
      const ratio = large.period / small.period;
      const isMultiple = Math.abs(ratio - Math.round(ratio)) < 0.03;
      const keep = isMultiple ? small : x.score >= y.score ? x : y;
      if (keep === x) y = fit(down, x.period);
      else x = fit(along, y.period);
    }
    return {
      x,
      y,
      period: (x.period + y.period) / 2,
      ratios: ratios.join(" "),
    };
  }

  const maps = [];
  const imagePages = [...new Set(pdf.imageDetails.map((i) => i.page))];
  for (const p of imagePages.filter(
    (q) => q >= 3 && bodyCount(q) < 40 && !backMatter(q),
  )) {
    const image = pdf.imageDetails
      .filter(
        (i) =>
          i.page === p && !i.gstate?.smask && i.width >= 600 && i.height >= 600,
      )
      .sort((a, b) => b.width * b.height - a.width * a.height)[0];
    if (!image) continue;
    const grid = await measureGrid(image);
    if (Math.min(grid.x.score, grid.y.score) < minGridScore) continue;
    const label = t
      .filter(
        (x) =>
          x.page === p &&
          x.y < 720 &&
          x.fontSize >= 12 &&
          x.fontSize < 25 &&
          isLabel(x),
      )
      .sort((a, b) => b.fontSize - a.fontSize)[0];
    maps.push({
      page: p,
      width: image.width,
      height: image.height,
      grid,
      label: label && { x: label.x, y: label.y, text: label.text.trim() },
    });
  }

  // A real "Game Aids" heading, not a table-of-contents entry on page 2.
  const aidPages = [
    ...new Set(
      t
        .filter(
          (x) =>
            x.page >= 3 &&
            x.fontSize >= 12 &&
            /^(appendix \d+: )?game aids\b/i.test(x.text.trim()),
        )
        .map((x) => x.page),
    ),
  ];
  const aids = [];
  for (const p of aidPages) {
    for (const image of pdf.imageDetails.filter(
      (i) =>
        i.page === p && !i.gstate?.smask && i.width >= 250 && i.height >= 250,
    )) {
      const [w, , , h, x0, y0] = image.transform;
      const caption = t
        .filter(
          (x) =>
            x.page === p &&
            x.x >= x0 - 20 &&
            x.x <= x0 + w &&
            x.y >= y0 - 40 &&
            x.y <= y0 + h &&
            x.fontSize >= 10 &&
            x.color === "#ffffff" &&
            isLabel(x),
        )
        .sort((a, b) => a.y - b.y)[0];
      if (caption && !aids.some((a) => a.label === caption.id)) {
        aids.push({
          page: p,
          width: image.width,
          height: image.height,
          label: caption.id,
          name: caption.text.trim(),
        });
      }
    }
  }
  return { season: Number(season), number, title, maps, aids };
}, MIN_GRID_SCORE);
await close();

const pad = draft.number.padStart(2, "0");
const id = `${draft.season}-${pad}`;
const className = `PFS${draft.season}_${pad}`;
const slug = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const sceneCode = draft.maps
  .map((map, i) => {
    const { grid } = map;
    const cols = Math.floor((map.width - grid.x.phase) / grid.period);
    const rows = Math.floor((map.height - grid.y.phase) / grid.period);
    const left = Math.round(grid.x.phase);
    const top = Math.round(grid.y.phase);
    const name = map.label
      ? `\n      nameInfo: { x: ${map.label.x}, y: ${map.label.y} },\n      nameFn: (name) => this.sentenceCase(name),`
      : "";
    return `    new ModuleScene({
      name: "map${i + 1}",
      page: ${map.page},
      width: ${map.width},
      height: ${map.height},
      imageLeft: ${left},
      imageRight: ${Math.round(left + cols * grid.period)},
      imageCols: ${cols},
      imageTop: ${top},
      imageBottom: ${Math.round(top + rows * grid.period)},
      imageRows: ${rows},
      offsetX: 0,
      offsetY: 0,
      globalLight: true,${name}
    }),`;
  })
  .join("\n");

const aidCode = draft.aids
  .map(
    (a) =>
      `    new LabelImage({ name: "${slug(a.name)}", page: ${a.page}, width: ${a.width}, height: ${a.height}, label: "${a.label}" }),`,
  )
  .join("\n");

const source = `import { PFSAutoLayoutBase } from "../auto-layout-base.js";
import { LabelImage } from "../../../core/images.js";
import { ModuleScene } from "../../../core/module-scene.js";

/** Drafted by tools/draft-pfs-scenario.mjs. Creatures come from the PDF's stat blocks. */
export class ${className} extends PFSAutoLayoutBase {
  prefix = "pfs-${id}";
  fullName = ${JSON.stringify(`PFS #${id} - ${draft.title}`)};
  scenes = [
${sceneCode}
  ];
  journals = [
${aidCode}
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) => t.page === 1 && /^Scenario #\\s*${draft.season}\\s*[–-]\\s*0?${Number(draft.number)}$/.test(t.text.trim()),
    );
  }
}
`;

const out = `src/adventures/pfs/season${draft.season}/pfs${draft.season}-${pad}.js`;
console.log(
  JSON.stringify({
    out,
    title: draft.title,
    maps: draft.maps.map((m) => ({
      page: m.page,
      period: m.grid.period.toFixed(2),
      score: Math.min(m.grid.x.score, m.grid.y.score).toFixed(1),
      ratios: m.grid.ratios,
      label: m.label?.text,
    })),
    aids: draft.aids.map((a) => a.name),
  }),
);
if (flag === "--write") {
  await mkdir(`src/adventures/pfs/season${draft.season}`, { recursive: true });
  await writeFile(out, source);
}
