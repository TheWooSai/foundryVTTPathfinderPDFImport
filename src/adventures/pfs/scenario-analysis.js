/**
 * Reads a PFS scenario's identity, battle maps and game aids from a parsed PDF. Used at
 * import time by the fallback for scenarios without a definition, and by
 * tools/draft-pfs-scenario.mjs to write definitions.
 */

/** Minimum grid-line strength on both axes for an image to count as a battle map. */
export const MIN_GRID_SCORE = 8;
const SCENARIO = /Scenario #\s*(\d+)\s*[–-]\s*(\d+)/;
const BACK_MATTER = /open game license|gm org play #|chronicle sheet/i;

const visibleText = (pdf) => pdf.textDetails.filter((x) => x.y !== 2);

/** Text repeated on three or more pages is page furniture: running headers and page numbers. */
function furnitureTest(text) {
  const pagesWith = new Map();
  for (const x of text) {
    const key = x.text.trim();
    if (!pagesWith.has(key)) pagesWith.set(key, new Set());
    pagesWith.get(key).add(x.page);
  }
  return {
    pagesWith,
    repeated: (x) => (pagesWith.get(x.text.trim())?.size ?? 0) >= 3,
  };
}

const labelTest = (repeated) => (x) =>
  !repeated(x) &&
  !/^\d+$/.test(x.text.trim()) &&
  x.text.trim().length > 1 &&
  !/paizo\.com/i.test(x.text);

/** @returns {{season: number, number: string, title: string}|null} */
export function identifyScenario(pdf) {
  const text = visibleText(pdf);
  const cover = text.filter((x) => x.page === 1);
  const match = cover.map((x) => x.text.match(SCENARIO)).find(Boolean);
  if (!match) return null;
  const { pagesWith } = furnitureTest(text);

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

  // The title is the large running header on the story pages, or else the largest cover text.
  const header = [...pagesWith]
    .filter(([value, pages]) => pages.size >= 3 && value.length > 3)
    .map(([value]) => text.find((x) => x.page >= 3 && x.text.trim() === value))
    .filter(
      (x) =>
        x &&
        x.fontSize >= 20 &&
        !isBanner(x) &&
        !/pathfinder society|scenario/i.test(x.text),
    )
    .sort((a, b) => b.fontSize - a.fontSize)[0];
  const ignore = /^(second edition|scenario|levels|by\s|year of)/i;
  const coverRuns = cover.filter(
    (x) => !ignore.test(x.text.trim()) && !isBanner(x),
  );
  const coverSize = Math.max(...coverRuns.map((x) => x.fontSize));
  const coverTitle = coverRuns
    .filter((x) => x.fontSize === coverSize)
    .sort((a, b) => b.y - a.y || a.x - b.x)
    .map((x) => x.text.trim())
    .join(" ");
  const title = (header?.text ?? coverTitle).replace(/\s+/g, " ").trim();
  return { season: Number(match[1]), number: match[2].padStart(2, "0"), title };
}

/** Long-side size, in squares, of every correctly measured battle map in the test PDFs: 24-40. */
export const PLAUSIBLE_SQUARES = { min: 22, max: 42 };
const MIN_PERIOD = 20;
const STEP = 0.05;
/** A second plausible spacing this close to the winner's score makes the result uncertain. */
const RUNNER_UP_RATIO = 0.85;
/** Scores below this are weak enough to report, though still above MIN_GRID_SCORE. */
const WEAK_SCORE = 10;

/** Second difference of brightness along one axis: grid lines are thin ridges. */
function ridgeProfile(data, width, height, alongX) {
  const px = (x, y) => {
    const k = (y * width + x) * 4;
    return data[k] + data[k + 1] + data[k + 2];
  };
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
}

/** Mean ridge strength along evenly spaced lines, for every spacing and its best phase. */
function scanSpacings(profile, maxPeriod) {
  const mean = profile.reduce((p, c) => p + c, 0) / profile.length;
  const count = Math.floor((maxPeriod - MIN_PERIOD) / STEP) + 1;
  const score = new Float64Array(count);
  const phase = new Float64Array(count);
  for (let i = 0; i < count; i++) {
    const period = MIN_PERIOD + i * STEP;
    let best = -Infinity;
    for (let ph = 0; ph < period; ph += 0.5) {
      let s = 0;
      let c = 0;
      for (let k = ph; k < profile.length - 1; k += period) {
        s += profile[Math.round(k)] - mean;
        c++;
      }
      s /= c;
      if (s > best) {
        best = s;
        phase[i] = ph;
      }
    }
    score[i] = best;
  }
  return { score, phase, periodAt: (i) => MIN_PERIOD + i * STEP };
}

/**
 * Fit square grid lines to a map image. Every spacing is scored on both axes. Among strong
 * local peaks, the one that gives a typical map size wins: a multiple of the true spacing
 * makes too few squares, a fraction too many. Results that fail that check, or that have a
 * close plausible rival, are marked uncertain so the GM knows which maps to check.
 */
export async function measureGrid(image) {
  const canvas = await image.getImageCanvas();
  const { data, width, height } = canvas
    .getContext("2d")
    .getImageData(0, 0, canvas.width, canvas.height);
  const longSide = Math.max(width, height);
  const maxPeriod = Math.max(MIN_PERIOD + 1, Math.min(150, longSide / 12));
  const x = scanSpacings(ridgeProfile(data, width, height, true), maxPeriod);
  const y = scanSpacings(ridgeProfile(data, width, height, false), maxPeriod);
  const maxX = Math.max(...x.score);
  const maxY = Math.max(...y.score);
  const joint = x.score.map((s, i) => s / maxX + y.score[i] / maxY);
  const best = Math.max(...joint);

  const peaks = [];
  const window = Math.round(0.5 / STEP);
  for (let i = 0; i < joint.length; i++) {
    if (joint[i] < 0.4 * best) continue;
    let isPeak = true;
    for (
      let j = Math.max(0, i - window);
      j <= Math.min(joint.length - 1, i + window);
      j++
    ) {
      if (joint[j] > joint[i]) isPeak = false;
    }
    if (isPeak) peaks.push(i);
  }
  const squares = (i) => longSide / x.periodAt(i);
  const plausible = peaks
    .filter(
      (i) =>
        squares(i) >= PLAUSIBLE_SQUARES.min &&
        squares(i) <= PLAUSIBLE_SQUARES.max,
    )
    .sort((a, b) => joint[b] - joint[a]);

  const reasons = [];
  let chosen;
  if (plausible.length > 0) {
    chosen = plausible[0];
    const rival = plausible.find(
      (i) =>
        Math.abs(x.periodAt(i) / x.periodAt(chosen) - 1) > 0.02 &&
        joint[i] >= RUNNER_UP_RATIO * joint[chosen],
    );
    if (rival !== undefined)
      reasons.push(
        `a ${x.periodAt(rival).toFixed(1)} px grid fits almost as well`,
      );
  } else {
    chosen = peaks.sort((a, b) => joint[b] - joint[a])[0];
    reasons.push(
      `no spacing gives a typical map size (${squares(chosen).toFixed(0)} squares)`,
    );
  }
  const result = {
    period: x.periodAt(chosen),
    x: { phase: x.phase[chosen], score: x.score[chosen] },
    y: { phase: y.phase[chosen], score: y.score[chosen] },
  };
  if (Math.min(result.x.score, result.y.score) < WEAK_SCORE)
    reasons.push("faint grid lines");
  return {
    ...result,
    // Strongest line pattern at any spacing: decides whether the image has a grid at all.
    strength: Math.min(maxX, maxY),
    reasons,
    uncertain: reasons.length > 0,
    phaseAt: (period) => phaseAt(x, y, period),
  };
}

function phaseAt(x, y, period) {
  const i = Math.round((period - MIN_PERIOD) / STEP);
  return { x: x.phase[i], y: y.phase[i] };
}

/** Grid-bearing full-page images, with the printed map name if one is found. */
export async function findBattleMaps(pdf) {
  const text = visibleText(pdf);
  const isLabel = labelTest(furnitureTest(text).repeated);
  const bodyCount = (p) =>
    text.filter((x) => x.page === p && x.y > 40 && x.y < 720).length;
  const backMatter = (p) =>
    text.some((x) => x.page === p && BACK_MATTER.test(x.text));
  const maps = [];
  const pages = [...new Set(pdf.imageDetails.map((i) => i.page))];
  for (const page of pages.filter(
    (p) => p >= 3 && bodyCount(p) < 40 && !backMatter(p),
  )) {
    const image = pdf.imageDetails
      .filter(
        (i) =>
          i.page === page &&
          !i.gstate?.smask &&
          i.width >= 600 &&
          i.height >= 600,
      )
      .sort((a, b) => b.width * b.height - a.width * a.height)[0];
    if (!image) continue;
    const grid = await measureGrid(image);
    if (grid.strength < MIN_GRID_SCORE) continue;
    const label = text
      .filter(
        (x) =>
          x.page === page &&
          x.y < 720 &&
          x.fontSize >= 12 &&
          x.fontSize < 25 &&
          isLabel(x),
      )
      .sort((a, b) => b.fontSize - a.fontSize)[0];
    maps.push({ page, width: image.width, height: image.height, grid, label });
  }
  agreeWithSiblings(maps);
  return maps;
}

/**
 * Maps of identical size in one PDF are usually cut from the same flip-mat. An uncertain map
 * adopts the spacing of a confident sibling; a confident disagreement makes both uncertain.
 */
function agreeWithSiblings(maps) {
  for (const map of maps) {
    const siblings = maps.filter(
      (m) => m !== map && m.width === map.width && m.height === map.height,
    );
    const confident = siblings.find((m) => !m.grid.uncertain);
    if (
      !confident ||
      Math.abs(confident.grid.period / map.grid.period - 1) <= 0.02
    )
      continue;
    if (map.grid.uncertain) {
      const period = confident.grid.period;
      const phase = map.grid.phaseAt(period);
      map.grid = {
        ...map.grid,
        period,
        x: { ...map.grid.x, phase: phase.x },
        y: { ...map.grid.y, phase: phase.y },
        reasons: [`matched a same-size map on page ${confident.page}`],
        uncertain: false,
      };
    } else {
      map.grid.reasons.push(
        `differs from a same-size map on page ${confident.page}`,
      );
      map.grid.uncertain = true;
    }
  }
}

/** ModuleScene settings for a measured map: the grid sets the image's columns and rows. */
export function sceneSettings(map, index) {
  const { grid } = map;
  const cols = Math.floor((map.width - grid.x.phase) / grid.period);
  const rows = Math.floor((map.height - grid.y.phase) / grid.period);
  const left = Math.round(grid.x.phase);
  const top = Math.round(grid.y.phase);
  return {
    name: `map${index + 1}`,
    page: map.page,
    width: map.width,
    height: map.height,
    imageLeft: left,
    imageRight: Math.round(left + cols * grid.period),
    imageCols: cols,
    imageTop: top,
    imageBottom: Math.round(top + rows * grid.period),
    imageRows: rows,
    offsetX: 0,
    offsetY: 0,
    globalLight: true,
    ...(map.grid.uncertain ? { gridUncertain: true } : {}),
    ...(map.label ? { nameInfo: { x: map.label.x, y: map.label.y } } : {}),
  };
}

/** Captioned images on "Game Aids" pages: NPC portraits, items and handouts. */
export function findGameAids(pdf) {
  const text = visibleText(pdf);
  const isLabel = labelTest(furnitureTest(text).repeated);
  const pages = [
    ...new Set(
      text
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
  for (const page of pages) {
    for (const image of pdf.imageDetails.filter(
      (i) =>
        i.page === page &&
        !i.gstate?.smask &&
        i.width >= 250 &&
        i.height >= 250,
    )) {
      const [w, , , h, x0, y0] = image.transform;
      const caption = text
        .filter(
          (x) =>
            x.page === page &&
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
          page,
          width: image.width,
          height: image.height,
          label: caption.id,
          name: caption.text.trim(),
        });
      }
    }
  }
  return aids;
}

export const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
