import { PFSSeason3Base } from "./base.js";
import { LabelImage } from "../../../core/images.js";
import { ModuleNpc } from "../../../core/module-npc.js";
import { ModuleScene } from "../../../core/module-scene.js";

const SEASON3 = "Compendium.pf2e.pfs-season-3-bestiary.Actor";

/** Page 3 title, byline and map caption, which sit inside the text columns. */
const TITLE_RUNS = [
  [100.3985, 690.7246],
  [254.4405, 654.8302],
  [329.25, 457.1],
];

/** Page, width, height and caption id of each Appendix 3 game aid. */
const GAME_AIDS = [
  ["toldrar", 29, 529, 706, "Mjk6MTM3OjM5OA"],
  ["shipwreck", 29, 576, 576, "Mjk6OTg6Mzc3"],
  ["bell", 29, 560, 560, "Mjk6NDE5OjM3Nw"],
  ["monolith", 29, 611, 611, "Mjk6NDAyOjM5OA"],
  ["lantern", 30, 624, 624, "MzA6MTA1OjM5OA"],
  ["voidboil", 30, 540, 540, "MzA6MTM3OjM3Nw"],
  ["captain", 30, 630, 639, "MzA6NDE3OjM3Nw"],
  ["scroll", 30, 569, 569, "MzA6NDExOjM5OA"],
  ["sarnia", 31, 328, 643, "MzE6MTE5OjM5OA"],
  ["hags-hand", 31, 429, 608, "MzE6NDMzOjM5OA"],
];

/** The page 6 "Exploration DCs" sidebar uses fonts the shared parser does not recognize. */
const SIDEBAR6_FONTS = new Set(["GoodOT:9", "GoodOT-Bold:8", "GoodOT-Bold:10"]);

const npc = (id, actorUuid, label, forIds) =>
  new ModuleNpc({
    id,
    actorUuid,
    label,
    tokenX: 0,
    tokenY: 0,
    tokenSize: 280,
    forIds,
  });

export class PFS3_17 extends PFSSeason3Base {
  prefix = "pfs-3-17";
  fullName = "PFS #3-17 - Dreams of a Dustbound Isle";
  pages = [
    this.TwoColumnWithRightCutout(3, 330),
    this.TwoColumnWithRightCutout(4, 465),
    this.TwoColumn(5),
    this.TwoColumnWithRightCutout(6, 365),
    this.TwoColumn(7),
    this.TwoColumnWithRightCutout(9, 545),
    this.TwoColumn(10),
    this.TwoColumn(11),
    this.TwoColumn(12),
    this.TwoColumn(13),
    this.TwoColumn(14),
    this.TwoColumn(15),
    this.TwoColumn(16),
    this.TwoColumn(17),
    this.TwoColumn(18),
    this.TwoColumn(19),
    this.TwoColumnWithRightCutout(20, 478, "appendix1"),
    this.TwoColumnWithRightCutout(21, 535, "appendix1"),
    this.TwoColumnWithRightCutout(22, 530, "appendix1"),
    this.TwoColumn(23, "appendix1"),
    this.TwoColumnWithRightCutout(24, 488, "appendix2"),
    this.TwoColumnWithRightCutout(25, 535, "appendix2"),
    this.TwoColumn(26, "appendix2"),
    this.TwoColumnWithRightCutout(27, 530, "appendix2"),
    this.TwoColumn(28, "appendix2"),
    ...[32, 33, 34].map((page) => this.Handouts(page)),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      page: 8,
      width: 900,
      height: 1300,
      imageLeft: 0,
      imageRight: 900,
      imageCols: 27,
      imageTop: 0,
      imageBottom: 1300,
      imageRows: 39,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      nameInfo: { x: 96, y: 675.6 },
      nameFn: (name) => this.sentenceCase(name),
    }),
  ];
  journals = GAME_AIDS.map(
    ([name, page, width, height, label]) =>
      new LabelImage({ name, page, width, height, label }),
  );
  npcs = [
    npc("waking-nightmare", `${SEASON3}.wun5VzDIMSZCVLuI`, "WN", [
      "MjA6NzI6NDgz",
      "MTE6MzEyOjI0Mw",
    ]),
    npc("waking-terror", `${SEASON3}.yhQALO3emgx8Z5N9`, "WT", [
      "MjQ6NzI6NDcx",
      "MTE6MzEyOjE4Mw",
    ]),
    npc(
      "gibbering-mouther",
      "Compendium.pf2e.pathfinder-bestiary.Actor.dEAneTvoPuQXZoLR",
      "GM",
      ["MjE6NzI6NjYz", "MjU6NzI6NjYz", "MTY6NzI6NjE1", "MTY6NzI6NTU1"],
    ),
    npc(
      "nightmare",
      "Compendium.pf2e.pathfinder-monster-core.Actor.qRUqoezeEnQ2KdyT",
      "N",
      ["MjI6NzI6NTY3", "MTc6MzEyOjIxOQ", "Mjg6NzI6Njg3"],
    ),
    npc("void-boils", `${SEASON3}.qulQzbgDOLz969yg`, "VB", [
      "MjI6MzEyOjUwNw",
      "MTc6MzEyOjE4Mw",
    ]),
    npc("smoldering-nightmare", `${SEASON3}.2wV0Yv8uQpmRs2E5`, "SN", [
      "MjM6NzI6Njg3",
    ]),
    npc(
      "greater-shadow",
      "Compendium.pf2e.pathfinder-monster-core.Actor.5meW7DytYnF7Iq2V",
      "GS",
      ["MjY6NzI6Njg3", "MTY6NzI6NTE5"],
    ),
    npc("shadow", `${SEASON3}.d0kPtsi2DH3V9WJu`, "S", ["MjY6MzEyOjY4Nw"]),
    npc("horrid-nightmare", `${SEASON3}.sfStaEmGGvXWftsn`, "HN", [
      "Mjc6NzI6NTY3",
      "MTc6MzEyOjEyMw",
    ]),
    npc("angry-void-boils", `${SEASON3}.FHsq4Yw458ogI2RQ`, "AV", [
      "Mjc6MzEyOjUxOQ",
      "MTc6MzEyOjg3",
    ]),
  ];
  /** Appendix handout pages: one wide text column. */
  Handouts(pageNum) {
    return (pdf, emit) =>
      this.getAllTextInBoundingBox(
        pdf,
        pageNum,
        70,
        560,
        700,
        40,
        emit,
        "handouts",
      );
  }
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Scenario #3-17" &&
        t.fontId === "GoodOT-Bold:15" &&
        t.page === 1,
    );
  }
  preprocess(text) {
    for (const [x, y] of TITLE_RUNS) this.removeText(text, 3, x, y);
    for (const entry of text) entry.text = entry.text.replace(/�/, ".");
  }
  extractDetails(textItems, moduleData, sectionKey) {
    if (sectionKey === "sidebar6") {
      for (const item of textItems) {
        if (SIDEBAR6_FONTS.has(item.fontId)) item.fontId = "SabonLTStd-Roman:9";
      }
    }
    return super.extractDetails(textItems, moduleData, sectionKey);
  }
}
