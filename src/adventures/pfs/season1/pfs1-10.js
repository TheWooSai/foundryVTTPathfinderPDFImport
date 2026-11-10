import { PFSSeason1Base } from "./base.js";
import { CaptionImage } from "../../../core/images.js";
import { ModuleScene, ModuleSceneTiled } from "../../../core/module-scene.js";

export class PFS1_10 extends PFSSeason1Base {
  prefix = "pfs-1-10";
  fullName = "PFS #1-10 - Tarnbreakers Trail";
  pages = [
    this.TwoColumnWithRightCutout(3, 400),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumn(6),
    this.TwoColumn(7),
    this.TwoColumn(8),
    this.TwoColumnWithLeftCutout(9, 0),
    this.TwoColumnWithLeftCutout(10, 480),
    this.TwoColumn(11),
    this.TwoColumn(12),
    this.TwoColumn(13),
    this.TwoColumn(16),
    this.TwoColumn(17),
    this.TwoColumn(19),
    this.TwoColumn(20),
    this.TwoColumn(22),
    this.TwoColumn(24),
    this.TwoColumnWithRightCutout(25, 0, "appendix1"),
    this.TwoColumnWithRightCutout(26, 0, "appendix2"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      nameInfo: {
        x: 57.5,
        y: 679.5,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 14,
      width: 1053,
      height: 1314,
      imageLeft: 26,
      imageRight: 1028,
      imageCols: 22,
      imageTop: 25,
      imageBottom: 1299,
      imageRows: 28,
      globalLight: true,
      journals: [
        {
          x: 2250,
          y: 1350,
          name: "A1.",
        },
        {
          x: 2450,
          y: 3250,
          name: "A2.",
        },
      ],
    }),
    new ModuleScene({
      name: "map2",
      nameInfo: {
        x: 57.5,
        y: 679.5,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 15,
      width: 1053,
      height: 1314,
      imageLeft: 25,
      imageRight: 1027,
      imageCols: 22,
      imageTop: 26,
      imageBottom: 1300,
      imageRows: 28,
      globalLight: true,
      journals: [
        {
          x: 2250,
          y: 2250,
          name: "B1.",
        },
        {
          x: 1150,
          y: 950,
          name: "B2.",
        },
        {
          x: 950,
          y: 2450,
          name: "B3.",
        },
      ],
    }),
    new ModuleScene({
      name: "map3",
      nameInfo: {
        x: 57.5,
        y: 675,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 18,
      width: 1053,
      height: 1314,
      imageLeft: 7,
      imageRight: 1045,
      imageCols: 25,
      imageTop: 21,
      imageBottom: 1309,
      imageRows: 31,
      globalLight: true,
      journals: [
        {
          x: 1450,
          y: 1550,
          name: "C1.",
        },
        {
          x: 3050,
          y: 3450,
          name: "C2.",
        },
        {
          x: 2050,
          y: 2950,
          name: "C3.",
        },
      ],
    }),
    new ModuleSceneTiled({
      name: "map4",
      nameInfo: {
        x: 108,
        y: 675,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 21,
      width: 416,
      height: 642,
      imageLeft: 20,
      imageTop: 17,
      imageRight: 397,
      imageBottom: 621,
      imageRows: 8,
      imageCols: 5,
      numTileCols: 2,
      numTileRows: 2,
      tilePositions: [
        [0, 0],
        [1, 0],
        [0, 1],
        [1, 1],
      ],
      tileRotations: [
        [0, 0],
        [0, 0],
      ],
      journals: [
        {
          x: 1250,
          y: 450,
          name: "D1.",
        },
        {
          x: 750,
          y: 1150,
          name: "D2.",
        },
      ],
    }),
    new ModuleScene({
      name: "map5",
      nameInfo: {
        x: 57.3064,
        y: 677.25,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 23,
      width: 1054,
      height: 1315,
      imageLeft: 11,
      imageRight: 1010,
      imageCols: 21,
      imageTop: 37,
      imageBottom: 1272,
      imageRows: 26,
      globalLight: true,
      journals: [
        {
          x: 1550,
          y: 3050,
          name: "E1.",
        },
        {
          x: 1950,
          y: 2650,
          name: "E2.",
        },
        {
          x: 1750,
          y: 1750,
          name: "E3.",
        },
        {
          x: 2450,
          y: 1050,
          name: "E4.",
        },
      ],
    }),
  ];
  journals = [
    new CaptionImage({
      name: "npc1",
      page: 27,
      width: 729,
      height: 1345,
    }),
    new CaptionImage({
      name: "npc2",
      page: 28,
      width: 1207,
      height: 1207,
    }),
    new CaptionImage({
      name: "npc3",
      page: 29,
      width: 1261,
      height: 1466,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "PATHFINDER SOCIETY SCENARIO #1\u201310" &&
        t.fontId === "GoodOT-CondBold:10" &&
        t.page === 1,
    );
  }
  preprocess(text) {
    this.moveX(text, 25, 315.8143, 675, 321);
    this.moveX(text, 26, 315.8143, 675, 321);
  }
  finalize(moduleData) {}
}
