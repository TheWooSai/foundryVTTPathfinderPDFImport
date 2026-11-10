import { PFSSeason2Base } from "./base.js";
import { AdventureImage } from "../../../core/images.js";
import { ModuleSceneTiled } from "../../../core/module-scene.js";

export class PFS2_03 extends PFSSeason2Base {
  prefix = "pfs-2-03";
  fullName = "PFS #2-03 - Catastrophe's Spark";
  pages = [
    this.TwoColumnWithRightCutout(3, 320),
    this.TwoColumn(4),
    this.TwoColumnWithMap(5, 315),
    this.TwoColumn(6),
    this.TwoColumnWithLeftCutout(8, 250),
    this.TwoColumn(9),
    this.TwoColumn(10),
    this.TwoColumn(12),
    this.TwoColumn(13),
    this.TwoColumnWithMap(14, 315),
    this.TwoColumn(15),
    this.TwoColumn(16),
    this.TwoColumnWithRightCutout(17, 600),
    this.TwoColumn(18),
    this.TwoColumnWithRightCutout(19, 475, "appendix1"),
    this.TwoColumn(20, "appendix1"),
    this.TwoColumnWithRightCutout(21, 0, "appendix1"),
    this.TwoColumnWithRightCutout(22, 460, "appendix1"),
    this.TwoColumnWithRightCutout(23, 570, "appendix1"),
    this.TwoColumnWithRightCutout(24, 0, "appendix1"),
    this.TwoColumnWithRightCutout(25, 0, "appendix2"),
    this.TwoColumn(26, "appendix2"),
    this.TwoColumnWithRightCutout(27, 0, "appendix2"),
    this.TwoColumnWithRightCutout(28, 450, "appendix2"),
    this.TwoColumn(29, "appendix2"),
    this.TwoColumnWithRightCutout(30, 0, "appendix2"),
  ];
  scenes = [
    new ModuleSceneTiled({
      name: "map1",
      nameInfo: {
        x: 39.9817,
        y: 677.9169,
      },
      nameFn: (name) => this.sentenceCase(name).substr(3),
      page: 5,
      width: 375,
      height: 375,
      imageLeft: 0,
      imageTop: 0,
      imageRight: 375,
      imageBottom: 375,
      imageRows: 6,
      imageCols: 6,
      numTileCols: 3,
      numTileRows: 2,
      fillColor: "#000",
      tileRotations: [
        [1, 3, 1],
        [1, 0, 1],
      ],
      tilePositions: [
        [0, 0],
        [0, 1],
        [1, 0],
        [1, 1],
        [2, 0],
        [2, 1],
      ],
      detailsFile: "/pfs/maps/pfs2-03-map1.json",
    }),
    new ModuleSceneTiled({
      name: "map2",
      nameInfo: {
        x: 70.997,
        y: 677.9169,
      },
      nameFn: (name) => this.sentenceCase(name).substr(3),
      page: 7,
      width: 325,
      height: 325,
      imageLeft: 0,
      imageTop: 0,
      imageRight: 325,
      imageBottom: 325,
      imageRows: 6,
      imageCols: 6,
      numTileCols: 3,
      numTileRows: 4,
      fillColor: "#000",
      tileRotations: [
        [1, 1, 2],
        [2, 0, 0],
        [0, 0, 0],
        [1, 3, 3],
      ],
      tilePositions: [
        [0, 0],
        [0, 3],
        [1, 0],
        [1, 3],
        [0, 1],
        [0, 2],
        [2, 0],
        [2, 3],
        [2, 1],
        [2, 2],
      ],
      detailsFile: "/pfs/maps/pfs2-03-map2.json",
      journals: [
        {
          x: 1400,
          y: 2700,
          name: "B.",
        },
        {
          x: 2050,
          y: 1750,
          name: "B2.",
        },
        {
          x: 750,
          y: 1850,
          name: "B3.",
        },
      ],
    }),
    new ModuleSceneTiled({
      name: "map3",
      nameInfo: {
        x: 77.5818,
        y: 680.259,
      },
      nameFn: (name) => this.sentenceCase(name).substr(3),
      page: 11,
      width: 325,
      height: 325,
      imageLeft: 0,
      imageTop: 0,
      imageRight: 325,
      imageBottom: 325,
      imageRows: 6,
      imageCols: 6,
      numTileCols: 3,
      numTileRows: 4,
      fillColor: "#000",
      tileRotations: [
        [0, 2, 0],
        [0, 0, 0],
        [3, 0, 1],
        [3, 1, 1],
      ],
      tilePositions: [
        [1, 1],
        [0, 3],
        [1, 0],
        [1, 3],
        [0, 2],
        [1, 2],
        [2, 3],
        [2, 2],
      ],
      detailsFile: "/pfs/maps/pfs2-03-map3.json",
      journals: [
        {
          x: 1400,
          y: 1200,
          name: "C.",
        },
        {
          x: 1400,
          y: 2700,
          name: "C2.",
        },
      ],
    }),
    new ModuleSceneTiled({
      name: "map4",
      nameInfo: {
        x: 38.9297,
        y: 680.6754,
      },
      nameFn: (name) => this.sentenceCase(name).substr(3),
      page: 14,
      width: 375,
      height: 375,
      imageLeft: 0,
      imageTop: 0,
      imageRight: 375,
      imageBottom: 375,
      imageRows: 6,
      imageCols: 6,
      numTileCols: 3,
      numTileRows: 2,
      fillColor: "#000",
      tileRotations: [
        [0, 0, 2],
        [3, 1, 1],
      ],
      tilePositions: [
        [0, 1],
        [1, 1],
        [2, 0],
        [2, 1],
      ],
      detailsFile: "/pfs/maps/pfs2-03-map4.json",
      journals: [
        {
          x: 1150,
          y: 1200,
          name: "D.",
        },
        {
          x: 2e3,
          y: 700,
          name: "D2.",
        },
      ],
    }),
  ];
  journals = [
    new AdventureImage({
      name: "journal1",
      page: 16,
      width: 469,
      height: 515,
    }),
    new AdventureImage({
      name: "npc1",
      page: 6,
      width: 1019,
      height: 809,
    }),
    new AdventureImage({
      name: "npc2",
      page: 10,
      width: 993,
      height: 900,
    }),
    new AdventureImage({
      name: "npc3",
      page: 12,
      width: 887,
      height: 580,
    }),
    new AdventureImage({
      name: "npc4",
      page: 13,
      width: 887,
      height: 1245,
    }),
    new AdventureImage({
      name: "npc5",
      page: 15,
      width: 861,
      height: 1249,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Scenario #2-03" &&
        t.fontId === "GoodOT-Bold:15" &&
        t.page === 1,
    );
  }
  finalize(moduleData) {}
}
