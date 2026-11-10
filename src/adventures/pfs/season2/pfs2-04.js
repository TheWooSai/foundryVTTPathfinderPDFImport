import { PFSSeason2Base } from "./base.js";
import { CaptionImage } from "../../../core/images.js";
import { ModuleScene, ModuleSceneTiled } from "../../../core/module-scene.js";

export class PFS2_04 extends PFSSeason2Base {
  prefix = "pfs-2-04";
  fullName = "PFS #2-04 - Path of Kings";
  pages = [
    this.TwoColumnWithRightCutout(3, 320),
    this.TwoColumn(4),
    this.TwoColumnWithRightCutout(5, 220),
    this.TwoColumn(6),
    this.TwoColumnWithRightCutout(7, 450),
    this.TwoColumn(8),
    this.TwoColumn(9),
    this.TwoColumn(11),
    this.TwoColumn(12),
    this.TwoColumn(15),
    this.TwoColumnWithMap(16, 320),
    this.TwoColumnWithRightCutout(17, 0, "appendix1"),
    this.TwoColumnWithRightCutout(18, 500, "appendix1"),
    this.TwoColumnWithRightCutout(19, 0, "appendix1"),
    this.TwoColumnWithRightCutout(20, 500, "appendix1"),
    this.TwoColumnWithRightCutout(21, 0, "appendix2"),
    this.TwoColumnWithRightCutout(22, 500, "appendix2"),
    this.TwoColumnWithRightCutout(23, 500, "appendix2"),
    this.TwoColumnWithRightCutout(24, 0, "appendix2"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      nameInfo: {
        x: 71.5137,
        y: 684.8508,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 10,
      width: 1064,
      height: 1328,
      imageLeft: 0,
      imageRight: 1064,
      imageCols: 24,
      imageTop: 0,
      imageBottom: 1328,
      imageRows: 30,
      globalLight: true,
    }),
    new ModuleScene({
      name: "map2",
      nameInfo: {
        x: 72,
        y: 687.3508,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 13,
      width: 1064,
      height: 1328,
      imageLeft: 0,
      imageRight: 1064,
      imageCols: 24,
      imageTop: 0,
      imageBottom: 1328,
      imageRows: 30,
      globalLight: true,
    }),
    new ModuleSceneTiled({
      name: "map4",
      nameInfo: {
        x: 124.4412,
        y: 684.8508,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 14,
      width: 414,
      height: 655,
      imageLeft: 5,
      imageRight: 410,
      imageCols: 5,
      imageTop: 4,
      imageBottom: 651,
      imageRows: 8,
      numTileCols: 2,
      numTileRows: 2,
      fillColor: "#fff",
      tileRotations: [
        [2, 0],
        [0, 0],
      ],
      tilePositions: [
        [0, 0],
        [0, 1],
        [1, 0],
        [1, 1],
      ],
    }),
    new ModuleScene({
      name: "map5",
      nameInfo: {
        x: 46.3806,
        y: 677.9169,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 16,
      width: 1124,
      height: 750,
      imageLeft: 4,
      imageRight: 1118,
      imageCols: 33,
      imageTop: 27,
      imageBottom: 737,
      imageRows: 21,
      globalLight: true,
    }),
  ];
  journals = [
    new CaptionImage({
      name: "npc1",
      page: 9,
      width: 924,
      height: 1232,
    }),
    new CaptionImage({
      name: "npc2",
      page: 12,
      width: 515,
      height: 686,
    }),
    new CaptionImage({
      name: "npc3",
      page: 25,
      width: 654,
      height: 660,
    }),
    new CaptionImage({
      name: "npc4",
      page: 25,
      width: 578,
      height: 680,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Scenario #2-04" &&
        t.fontId === "GoodOT-Bold:15" &&
        t.page === 1,
    );
  }
  finalize(moduleData) {}
}
