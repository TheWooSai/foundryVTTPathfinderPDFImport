import { PFSSeason3Base } from "./season3/base.js";

/** Headings every PFS scenario uses, which identify that scenario's display font. */
const SECTION_TITLE =
  /^(adventure background|getting started|running the adventure|conclusion|reporting notes|primary objectives|appendix \d|where on golarion\??|game aids|handouts?)\b/i;
/** Back matter that is not adventure text. */
const SKIP_PAGE =
  /open game license|gm org play #|chronicle sheet|event reporting form/i;
const APPENDIX = /^appendix (\d+)\b/i;
const GAME_AIDS = /game aids|^handouts?\b/i;
const BODY_FONT_MAX = 10;
const FONT_LISTS = [
  "headingFontIds",
  "subheadingFontIds",
  "normalFontIds",
  "italicFontIds",
  "boldFontIds",
];

const mode = (values) => {
  const counts = new Map();
  for (const v of values) counts.set(v, (counts.get(v) ?? 0) + 1);
  return [...counts].sort((a, b) => b[1] - a[1])[0]?.[0];
};

let season3Fonts;

/**
 * Read a PFS scenario's text layout from the PDF: column positions, the top of the text
 * area, heading fonts and which pages hold adventure text. Used by the automatic fallback
 * and by definitions that keep their own maps, walls and creatures but read text this way
 * because tools/regress.mjs showed it captures more.
 */
export function applyAutoLayout(adventure, text) {
  season3Fonts ??= new PFSSeason3Base();
  for (const list of FONT_LISTS) {
    adventure[list] = [
      ...new Set([...(adventure[list] ?? []), ...season3Fonts[list]]),
    ];
  }
  const body = text.filter(
    (t) => t.page >= 3 && t.y !== 2 && t.y > adventure.pageBottom && t.y < 720,
  );
  detectColumns(adventure, body);
  detectPageTop(adventure, body);
  detectHeadingFonts(adventure, body);
  for (let i = text.length - 1; i >= 0; i--) {
    const t = text[i];
    const isTitle = t.page >= 3 && t.fontSize >= 20;
    const isByline =
      t.page === 3 && t.fontSize >= 14 && /^by\s/i.test(t.text.trim());
    if (isTitle || isByline) text.splice(i, 1);
    else t.text = t.text.replace(/�/, ".");
  }
  adventure.pages = detectPages(adventure, text);
}

function detectColumns(adventure, body) {
  const starts = body
    .filter((t) => t.fontSize <= BODY_FONT_MAX)
    .map((t) => Math.round(t.x));
  const left = mode(starts.filter((x) => x < 200));
  const right = mode(starts.filter((x) => x >= 280 && x < 400));
  if (left === undefined || right === undefined) return;
  const width = right - left - 12;
  adventure.PageTwoColumn = {
    col1X1: left - 1,
    col1X2: left + width,
    col2X1: right - 1,
    col2X2: right + width,
  };
}

function detectPageTop(adventure, body) {
  const tops = new Map();
  for (const t of body) {
    if (t.fontSize > BODY_FONT_MAX) continue;
    tops.set(t.page, Math.max(tops.get(t.page) ?? 0, Math.round(t.y)));
  }
  const top = mode([...tops.values()]);
  if (top) adventure.pageTop = top + 3;
}

function detectHeadingFonts(adventure, body) {
  const fonts = new Set(adventure.headingFontIds);
  for (const t of body) {
    if (t.fontSize >= 12 && SECTION_TITLE.test(t.text.trim()))
      fonts.add(t.fontId);
    const isAreaHeading =
      /^GoodOT-Bold:1[34](\.\d+)?$/.test(t.fontId) && t.color !== "#000000";
    if (isAreaHeading) fonts.add(t.fontId);
  }
  adventure.headingFontIds = [...fonts];
}

function detectPages(adventure, text) {
  const pages = [];
  const last = Math.max(...text.map((t) => t.page));
  let section;
  for (let page = 3; page <= last; page++) {
    const entries = text.filter(
      (t) =>
        t.page === page &&
        t.y !== 2 &&
        t.y > adventure.pageBottom &&
        t.y < adventure.pageTop,
    );
    if (entries.length < 25 || entries.some((t) => SKIP_PAGE.test(t.text)))
      continue;
    const heading = entries.find(
      (t) =>
        t.fontSize >= 12 &&
        (APPENDIX.test(t.text.trim()) || GAME_AIDS.test(t.text.trim())),
    );
    if (heading) {
      const appendix = heading.text.trim().match(APPENDIX);
      section = GAME_AIDS.test(heading.text)
        ? "handouts"
        : `appendix${appendix[1]}`;
    }
    pages.push(adventure.TwoColumn(page, section));
  }
  return pages;
}

/** PFS scenarios whose whole text layout is read from the PDF (season 4 on, and the fallback). */
export class PFSAutoLayoutBase extends PFSSeason3Base {
  separateSectionsAlpha = true;

  preprocess(text) {
    applyAutoLayout(this, text);
  }
}
