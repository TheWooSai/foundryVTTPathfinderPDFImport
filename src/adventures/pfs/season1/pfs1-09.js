import { PFSSeason1Base } from "./base.js";
import { AdventureImage, CaptionImage } from "../../../core/images.js";
import { ModuleScene, ModuleSceneTiled } from "../../../core/module-scene.js";

export class PFS1_09 extends PFSSeason1Base {
  prefix = "pfs-1-09";
  fullName = "PFS #1-09 - Star-Crossed Voyages";
  pages = [
    this.TwoColumnWithRightCutout(3, 320),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumn(7),
    this.TwoColumn(8),
    this.TwoColumn(10),
    this.TwoColumnWithMap(11, 245),
    this.TwoColumn(12),
    this.TwoColumnWithLeftCutout(14, 540),
    this.TwoColumn(15),
    this.TwoColumn(17),
    this.TwoColumn(18),
    this.TwoColumn(19),
    this.TwoColumn(20),
    this.TwoColumnWithRightCutout(21, 0, "appendix1"),
    this.TwoColumnWithRightCutout(22, 0, "appendix1"),
    this.TwoColumnWithRightCutout(23, 425, "appendix1"),
    this.TwoColumnWithRightCutout(24, 580, "appendix1"),
    this.TwoColumnWithRightCutout(25, 510, "appendix1"),
    this.TwoColumnWithRightCutout(26, 0, "appendix1"),
    this.TwoColumnWithRightCutout(27, 500, "appendix2"),
    this.TwoColumnWithRightCutout(28, 0, "appendix2"),
    this.TwoColumnWithRightCutout(29, 490, "appendix2"),
    this.TwoColumnWithRightCutout(30, 0, "appendix2"),
    this.TwoColumnWithRightCutout(31, 485, "appendix2"),
    this.TwoColumnWithRightCutout(32, 0, "appendix2"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      nameInfo: {
        x: 57.5,
        y: 675,
      },
      nameFn: (name) => this.sentenceCase(name).substr(3),
      page: 6,
      width: 1106,
      height: 392,
      imageLeft: 46,
      imageRight: 1062,
      imageCols: 22,
      imageTop: 23,
      imageBottom: 347,
      imageRows: 7,
      globalLight: true,
    }),
    new ModuleScene({
      name: "map2",
      nameInfo: {
        x: 61.5,
        y: 675,
      },
      nameFn: (name) => this.sentenceCase(name).substr(3),
      page: 9,
      width: 1301,
      height: 1041,
      imageLeft: 0,
      imageRight: 1301,
      imageCols: 24,
      imageTop: 0,
      imageBottom: 1041,
      imageRows: 30,
      rotateCW: 3,
      globalLight: true,
    }),
    new ModuleSceneTiled({
      name: "map3",
      nameInfo: {
        x: 102.2126,
        y: 667.8873,
      },
      nameFn: (name) => this.sentenceCase(name).substr(3),
      page: 13,
      width: 435,
      height: 435,
      imageLeft: 14,
      imageTop: 18,
      imageRight: 417,
      imageBottom: 420,
      imageRows: 6,
      imageCols: 6,
      numTileCols: 2,
      numTileRows: 3,
      fillColor: "#000",
      tileRotations: [
        [3, 0],
        [3, 1],
        [0, 1],
      ],
      tilePositions: [
        [0, 0],
        [0, 1],
        [1, 1],
        [1, 2],
      ],
    }),
    new ModuleScene({
      name: "map4",
      nameInfo: {
        x: 90.5,
        y: 672.7747,
      },
      nameFn: (name) => this.sentenceCase(name).substr(3),
      page: 16,
      width: 1300,
      height: 906,
      imageLeft: 8,
      imageRight: 1292,
      imageCols: 27,
      imageTop: 8,
      imageBottom: 898,
      imageRows: 39,
      rotateCW: 1,
      globalLight: true,
      detailsFile: "/pfs/maps/pfs1-09-map4.json",
      journals: [
        {
          x: 1450,
          y: 4550,
          id: "MTU6MzEyOjU2Nw",
        },
        {
          x: 2950,
          y: 4450,
          id: "MTc6NzI6Njg3",
        },
        {
          x: 2850,
          y: 2850,
          id: "MTc6NzI6NDgz",
        },
        {
          x: 1650,
          y: 1550,
          id: "MTk6NzI6Njg3",
        },
        {
          x: 2650,
          y: 1450,
          id: "MTk6NzI6MzE1",
        },
      ],
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
      page: 38,
      width: 605,
      height: 1e3,
    }),
    new CaptionImage({
      name: "npc2",
      page: 37,
      width: 1261,
      height: 1636,
    }),
    new CaptionImage({
      name: "npc3",
      page: 39,
      width: 1100,
      height: 1371,
    }),
    new CaptionImage({
      name: "npc4",
      page: 33,
      width: 1250,
      height: 1158,
    }),
    new CaptionImage({
      name: "npc5",
      page: 34,
      width: 992,
      height: 1321,
    }),
    new CaptionImage({
      name: "npc6",
      page: 35,
      width: 1261,
      height: 1539,
    }),
    new CaptionImage({
      name: "npc7",
      page: 36,
      width: 1160,
      height: 1324,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "PATHFINDER SOCIETY SCENARIO #1\u201309" &&
        t.fontId === "GoodOT-CondBold:10" &&
        t.page === 1,
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    let i = text.findIndex(
      (t) =>
        t.page === 27 && Math.abs(t.x - 312) < 1 && Math.abs(t.y - 375) < 1,
    );
    if (i !== -1) {
      text[i].fontId = "GoodOT-Bold:9";
      text[i].fontSize = 9;
    }
    i = text.findIndex(
      (t) =>
        t.page === 27 && Math.abs(t.x - 323) < 1 && Math.abs(t.y - 375) < 1,
    );
    if (i !== -1) {
      text[i].fontId = "GoodOT:9";
      text[i].fontSize = 9;
    }
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
