import { PFSSeason2Base } from "./base.js";
import { AdventureImage } from "../../../core/images.js";
import { ModuleScene, ModuleSceneTiled } from "../../../core/module-scene.js";

export class PFS2_01 extends PFSSeason2Base {
  prefix = "pfs-2-01";
  fullName = "PFS #2-01 - Citadel of Corruption";
  pages = [
    this.TwoColumnWithRightCutout(3, 315),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumn(6),
    this.TwoColumn(7),
    this.TwoColumnWithMap(8, 279),
    this.TwoColumn(9),
    this.TwoColumn(10),
    this.TwoColumn(12),
    this.TwoColumn(13),
    this.TwoColumnWithRightCutout(14, 570, "appendix1"),
    this.TwoColumnWithRightCutout(15, 0, "appendix1"),
    this.TwoColumnWithRightCutout(16, 0, "appendix1"),
    this.TwoColumnWithRightCutout(17, 0, "appendix1"),
    this.TwoColumnWithRightCutout(18, 570, "appendix2"),
    this.TwoColumnWithRightCutout(19, 0, "appendix2"),
    this.TwoColumnWithRightCutout(20, 0, "appendix2"),
    this.TwoColumnWithRightCutout(21, 0, "appendix2"),
  ];
  scenes = [
    new ModuleSceneTiled({
      name: "map1",
      nameInfo: {
        x: 46.3806,
        y: 674.3508,
      },
      nameFn: (name) => this.sentenceCase(name).substr(4),
      page: 8,
      width: 281,
      height: 281,
      imageLeft: 0,
      imageTop: 0,
      imageRight: 281,
      imageBottom: 281,
      imageRows: 6,
      imageCols: 6,
      numTileCols: 4,
      numTileRows: 3,
      globalLight: true,
      fillColor: "#000",
      tileRotations: [
        [0, 2, 1, 1],
        [0, 0, 0, 2],
        [0, 3, 3, 2],
      ],
      tilePositions: [
        [0, 0],
        [1, 0],
        [2, 0],
        [3, 0],
        [0, 1],
        [1, 1],
        [2, 1],
        [3, 1],
        [0, 2],
        [1, 2],
        [2, 2],
        [3, 2],
      ],
    }),
    new ModuleSceneTiled({
      name: "map2",
      nameInfo: {
        x: 39.5,
        y: 682.1339,
      },
      nameFn: (name) => this.sentenceCase(name).substr(3),
      page: 11,
      width: 227,
      height: 227,
      imageLeft: 0,
      imageTop: 0,
      imageRight: 227,
      imageBottom: 227,
      imageRows: 6,
      imageCols: 6,
      numTileCols: 5,
      numTileRows: 5,
      fillColor: "#000",
      tileRotations: [
        [0, 1, 3, 0, 0],
        [1, 3, 0, 0, 0],
        [0, 2, 2, 3, 0],
        [0, 2, 0, 0, 3],
        [0, 1, 1, 0, 0],
      ],
      tilePositions: [
        [0, 0],
        [1, 0],
        [2, 0],
        [0, 1],
        [1, 1],
        [2, 1],
        [1, 2],
        [1, 3],
        [1, 4],
        [2, 2],
        [2, 3],
        [2, 4],
        [3, 2],
        [3, 3],
        [4, 3],
        [3, 4],
      ],
      detailsFile: "/pfs/maps/pfs2-01-map2.json",
      journals: [
        {
          x: 1100,
          y: 1100,
          name: "B1.",
        },
        {
          x: 2300,
          y: 1700,
          name: "B2.",
        },
        {
          x: 2300,
          y: 2900,
          name: "B3.",
        },
        {
          x: 3450,
          y: 2900,
          name: "B4.",
        },
      ],
    }),
    new ModuleScene({
      name: "map3",
      nameInfo: {
        x: 312.0011,
        y: 351,
        page: 6,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 25,
      width: 975,
      height: 1300,
      imageLeft: 0,
      imageRight: 1e3,
      imageCols: 10,
      imageTop: 0,
      imageBottom: 1e3,
      imageRows: 10,
      gridType: "gridless",
      globalLight: true,
      journals: [
        {
          x: 708.71,
          y: 1325.51,
          name: "A1.",
        },
        {
          x: 463.71,
          y: 1394.51,
          name: "A2.",
        },
        {
          x: 1123.71,
          y: 1221.51,
          name: "A3.",
        },
        {
          x: 957.71,
          y: 1066.51,
          name: "A4.",
        },
        {
          x: 646.71,
          y: 1170.51,
          name: "A5.",
        },
        {
          x: 682.71,
          y: 1013.51,
          name: "A6.",
        },
        {
          x: 507.71,
          y: 698.51,
          name: "A7.",
        },
        {
          x: 1062.71,
          y: 756.51,
          name: "A8.",
        },
        {
          x: 1148.71,
          y: 642.51,
          name: "A9.",
        },
      ],
    }),
  ];
  journals = [
    new AdventureImage({
      name: "npc1",
      page: 22,
      width: 481,
      height: 481,
    }),
    new AdventureImage({
      name: "npc2",
      page: 22,
      width: 560,
      height: 560,
    }),
    new AdventureImage({
      name: "npc3",
      page: 22,
      width: 497,
      height: 615,
    }),
    new AdventureImage({
      name: "npc4",
      page: 22,
      width: 552,
      height: 552,
    }),
    new AdventureImage({
      name: "npc5",
      page: 23,
      width: 470,
      height: 705,
    }),
    new AdventureImage({
      name: "npc6",
      page: 23,
      width: 431,
      height: 350,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Scenario #2-01" &&
        t.fontId === "GoodOT-Bold:15" &&
        t.page === 1,
    );
  }
  finalize(moduleData) {}
}
