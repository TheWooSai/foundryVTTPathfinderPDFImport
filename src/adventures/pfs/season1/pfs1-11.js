import { PFSSeason1Base } from "./base.js";
import { AdventureImage, CaptionImage } from "../../../core/images.js";
import { ModuleSceneTiled } from "../../../core/module-scene.js";

export class PFS1_11 extends PFSSeason1Base {
  prefix = "pfs-1-11";
  fullName = "PFS #1-11 - Flames of Rebellion";
  pages = [
    this.TwoColumnWithRightCutout(3, 390),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumn(7),
    this.TwoColumn(8),
    this.TwoColumn(11),
    this.TwoColumn(13),
    this.TwoColumn(14),
    this.TwoColumn(16),
    this.TwoColumn(18),
    this.TwoColumnWithRightCutout(19, 560, "appendix1"),
    this.TwoColumnWithRightCutout(20, 480, "appendix1"),
    this.TwoColumnWithRightCutout(21, 460, "appendix1"),
    this.TwoColumn(22, "appendix1"),
    this.TwoColumn(23, "appendix1"),
    this.TwoColumnWithRightCutout(24, 520, "appendix1"),
    this.TwoColumn(25, "appendix1"),
    this.TwoColumnWithRightCutout(26, 500, "appendix1"),
    this.TwoColumnWithRightCutout(27, 490, "appendix2"),
    this.TwoColumnWithRightCutout(28, 450, "appendix2"),
    this.TwoColumn(29, "appendix2"),
    this.TwoColumnWithRightCutout(30, 500, "appendix2"),
    this.TwoColumn(31, "appendix2"),
    this.TwoColumn(32, "appendix2"),
    this.TwoColumnWithRightCutout(33, 490, "appendix2"),
    this.TwoColumn(34, "appendix2"),
    this.TwoColumnWithRightCutout(35, 370, "appendix2"),
  ];
  scenes = [
    new ModuleSceneTiled({
      name: "map1",
      nameInfo: {
        x: 102.2126,
        y: 675,
      },
      nameFn: (name) => this.sentenceCase(name).substr(3),
      page: 6,
      width: 438,
      height: 438,
      imageLeft: 13,
      imageTop: 13,
      imageRight: 425,
      imageBottom: 425,
      imageRows: 6,
      imageCols: 6,
      numTileCols: 2,
      numTileRows: 3,
      tileRotations: [
        [3, 2],
        [3, 2],
        [0, 3],
      ],
      detailsFile: "/pfs/maps/pfs1-11-map1.json",
    }),
    new ModuleSceneTiled({
      name: "map2",
      nameInfo: {
        x: 101.7318,
        y: 674.8125,
      },
      nameFn: (name) => this.sentenceCase(name).substr(3),
      page: 9,
      width: 438,
      height: 438,
      imageLeft: 13,
      imageTop: 13,
      imageRight: 425,
      imageBottom: 425,
      imageRows: 6,
      imageCols: 6,
      numTileCols: 2,
      numTileRows: 3,
      tileRotations: [
        [2, 3],
        [1, 0],
        [0, 0],
      ],
      detailsFile: "/pfs/maps/pfs1-11-map2.json",
    }),
    new ModuleSceneTiled({
      name: "map3",
      nameInfo: {
        x: 101.7318,
        y: 674.8125,
      },
      nameFn: (name) => this.sentenceCase(name).substr(3),
      page: 10,
      width: 438,
      height: 438,
      imageLeft: 13,
      imageTop: 13,
      imageRight: 425,
      imageBottom: 425,
      imageRows: 6,
      imageCols: 6,
      numTileCols: 2,
      numTileRows: 3,
      tileRotations: [
        [1, 2],
        [2, 0],
        [3, 1],
      ],
      detailsFile: "/pfs/maps/pfs1-11-map3.json",
    }),
    new ModuleSceneTiled({
      name: "map4",
      nameInfo: {
        x: 101.7318,
        y: 674.8125,
      },
      nameFn: (name) => this.sentenceCase(name).substr(3),
      page: 12,
      width: 438,
      height: 438,
      imageLeft: 13,
      imageTop: 13,
      imageRight: 425,
      imageBottom: 425,
      imageRows: 6,
      imageCols: 6,
      numTileCols: 2,
      numTileRows: 3,
      tileRotations: [
        [2, 2],
        [1, 0],
        [1, 3],
      ],
      detailsFile: "/pfs/maps/pfs1-11-map4.json",
    }),
    new ModuleSceneTiled({
      name: "map5",
      nameInfo: {
        x: 101.7318,
        y: 675,
      },
      nameFn: (name) => this.sentenceCase(name).substr(3),
      page: 15,
      width: 438,
      height: 438,
      imageLeft: 13,
      imageTop: 13,
      imageRight: 425,
      imageBottom: 425,
      imageRows: 6,
      imageCols: 6,
      numTileCols: 2,
      numTileRows: 3,
      tileRotations: [
        [3, 2],
        [0, 0],
        [0, 0],
      ],
      detailsFile: "/pfs/maps/pfs1-11-map5.json",
    }),
    new ModuleSceneTiled({
      name: "map6",
      nameInfo: {
        x: 101.7318,
        y: 674.8125,
      },
      nameFn: (name) => this.sentenceCase(name).substr(3),
      page: 17,
      width: 438,
      height: 438,
      imageLeft: 13,
      imageTop: 13,
      imageRight: 425,
      imageBottom: 425,
      imageRows: 6,
      imageCols: 6,
      numTileCols: 1,
      numTileRows: 3,
      tileRotations: [[0], [0], [0]],
      detailsFile: "/pfs/maps/pfs1-11-map6.json",
    }),
  ];
  journals = [
    new AdventureImage({
      name: "journal1",
      page: 3,
      width: 422,
      height: 273,
    }),
    new CaptionImage({
      name: "npc1",
      page: 36,
      width: 1200,
      height: 1143,
    }),
    new CaptionImage({
      name: "npc2",
      page: 37,
      width: 1015,
      height: 1292,
    }),
    new CaptionImage({
      name: "npc3",
      page: 40,
      width: 1241,
      height: 1333,
    }),
    new CaptionImage({
      name: "npc4",
      page: 38,
      width: 1262,
      height: 1008,
    }),
    new CaptionImage({
      name: "npc5",
      page: 39,
      width: 1261,
      height: 1267,
    }),
    new CaptionImage({
      name: "npc6",
      page: 41,
      width: 1089,
      height: 1549,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "PATHFINDER SOCIETY SCENARIO #1\u201311" &&
        t.fontId === "GoodOT-CondBold:10" &&
        t.page === 1,
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    for (const i in text) {
      text[i].fontSize === 8.5 &&
        ((text[i].fontSize = 9),
        (text[i].fontId = `${text[i].fontName}:${text[i].fontSize}`));
    }
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
