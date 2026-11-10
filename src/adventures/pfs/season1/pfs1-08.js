import { PFSSeason1Base } from "./base.js";
import { AdventureImage, CaptionImage } from "../../../core/images.js";
import { ModuleScene, ModuleSceneTiled } from "../../../core/module-scene.js";

export class PFS1_08 extends PFSSeason1Base {
  prefix = "pfs-1-08";
  fullName = "PFS #1-08 - Revolution on the Riverside";
  pages = [
    this.TwoColumnWithRightCutout(3, 360),
    this.TwoColumn(4),
    this.TwoColumnWithRightCutout(5, 90),
    this.TwoColumn(6),
    this.TwoColumn(7),
    this.TwoColumnWithMap(8, 340),
    this.TwoColumnWithMap(9, 340),
    this.TwoColumn(10),
    this.TwoColumn(11),
    this.TwoColumnWithMap(12, 320),
    this.TwoColumn(13),
    this.TwoColumn(14),
    this.TwoColumnWithMap(15, 390),
    this.TwoColumn(16),
    this.TwoColumnWithRightCutout(18, 520, "appendix1"),
    this.TwoColumn(19, "appendix1"),
    this.TwoColumnWithRightCutout(20, 520, "appendix1"),
    this.TwoColumnWithRightCutout(21, 520, "appendix1"),
    this.TwoColumnWithRightCutout(22, 520, "appendix1"),
    this.TwoColumnWithRightCutout(23, 500, "appendix2"),
    this.TwoColumn(24, "appendix2"),
    this.TwoColumnWithRightCutout(25, 500, "appendix2"),
    this.TwoColumnWithRightCutout(26, 500, "appendix2"),
    this.TwoColumn(27, "appendix2"),
    this.TwoColumnWithRightCutout(28, 500, "appendix2"),
  ];
  scenes = [
    new ModuleSceneTiled({
      name: "map1",
      nameInfo: {
        x: 60.5064,
        y: 677.6182,
      },
      nameFn: (name) => this.sentenceCase(name).substr(3),
      page: 8,
      width: 363,
      height: 567,
      imageLeft: 16,
      imageTop: 15,
      imageRight: 345,
      imageBottom: 546,
      imageRows: 8,
      imageCols: 5,
      numTileCols: 2,
      numTileRows: 2,
      tileRotations: [
        [0, 0],
        [0, 0],
      ],
      tilePositions: [
        [0, 0],
        [1, 0],
        [0, 1],
        [1, 1],
      ],
      globalLight: true,
      detailsFile: "/pfs/maps/pfs1-08-map1.json",
    }),
    new ModuleSceneTiled({
      name: "map2",
      nameInfo: {
        x: 60.2926,
        y: 675.4142,
      },
      nameFn: (name) => this.sentenceCase(name).substr(3),
      page: 9,
      width: 363,
      height: 567,
      imageLeft: 16,
      imageTop: 15,
      imageRight: 345,
      imageBottom: 546,
      imageRows: 8,
      imageCols: 5,
      numTileCols: 2,
      numTileRows: 2,
      tileRotations: [
        [0, 0],
        [0, 0],
      ],
      tilePositions: [
        [0, 0],
        [1, 0],
        [0, 1],
        [1, 1],
      ],
      globalLight: true,
      detailsFile: "/pfs/maps/pfs1-08-map2.json",
    }),
    new ModuleScene({
      name: "map3",
      nameInfo: {
        x: 43.8293,
        y: 675.0001,
      },
      nameFn: (name) => this.sentenceCase(name).substr(3),
      page: 12,
      width: 1123,
      height: 749,
      imageLeft: 8,
      imageRight: 1115,
      imageCols: 24,
      imageTop: 23,
      imageBottom: 715,
      imageRows: 15,
      globalLight: true,
      detailsFile: "/pfs/maps/pfs1-08-map3.json",
    }),
    new ModuleScene({
      name: "map4",
      nameInfo: {
        x: 43.9282,
        y: 677.1182,
      },
      nameFn: (name) => this.sentenceCase(name).substr(3),
      page: 15,
      width: 1125,
      height: 601,
      imageLeft: 41,
      imageRight: 1060,
      imageCols: 26,
      imageTop: 34,
      imageBottom: 583,
      imageRows: 14,
      globalLight: true,
      detailsFile: "/pfs/maps/pfs1-08-map4.json",
    }),
  ];
  journals = [
    new AdventureImage({
      name: "journal1",
      page: 3,
      width: 409,
      height: 278,
    }),
    new CaptionImage({
      name: "npc1",
      page: 4,
      width: 527,
      height: 531,
    }),
    new CaptionImage({
      name: "npc2",
      page: 29,
      width: 981,
      height: 1572,
    }),
    new CaptionImage({
      name: "npc3",
      page: 30,
      width: 1034,
      height: 1636,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "PATHFINDER SOCIETY SCENARIO #1\u201308" &&
        t.fontId === "GoodOT-CondBold:10" &&
        t.page === 1,
    );
  }
  finalize(moduleData) {}
}
