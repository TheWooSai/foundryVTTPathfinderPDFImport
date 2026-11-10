import { PFSSeason2Base } from "./base.js";
import { CaptionImage } from "../../../core/images.js";
import { ModuleScene, ModuleSceneTiled } from "../../../core/module-scene.js";

export class PFS2_16 extends PFSSeason2Base {
  prefix = "pfs-2-16";
  fullName = "PFS #2-16 - Freedom for Wishes";
  normalFontIds = this.normalFontIds.concat(["NexusSerifOT:9"]);
  pages = [
    this.TwoColumnWithRightCutout(3, 310),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumn(7),
    this.TwoColumn(8),
    this.TwoColumn(10),
    this.TwoColumnWithMap(11, 352),
    this.TwoColumn(12),
    this.TwoColumnWithMap(13, 400),
    this.TwoColumnWithRightCutout(14, 490, "appendix1"),
    this.TwoColumnWithRightCutout(15, 460, "appendix1"),
    this.TwoColumnWithRightCutout(16, 0, "appendix1"),
    this.TwoColumnWithRightCutout(17, 490, "appendix1"),
    this.TwoColumnWithRightCutout(18, 450, "appendix1"),
    this.TwoColumn(19, "appendix1"),
    this.TwoColumnWithRightCutout(20, 490, "appendix2"),
    this.TwoColumnWithRightCutout(21, 460, "appendix2"),
    this.TwoColumnWithRightCutout(22, 0, "appendix2"),
    this.TwoColumnWithRightCutout(23, 490, "appendix2"),
    this.TwoColumnWithRightCutout(24, 450, "appendix2"),
    this.TwoColumn(25, "appendix2"),
    this.OneColumn(27, "handout"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      canonical: {
        name: "flipmat/haunted-house1",
        priority: 0,
      },
      nameInfo: {
        x: 72,
        y: 678.9169,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3),
      page: 6,
      width: 1041,
      height: 1301,
      imageLeft: 0,
      imageRight: 1041,
      imageCols: 24,
      imageTop: 0,
      imageBottom: 1301,
      imageRows: 30,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      journals: [
        {
          x: 2150,
          y: 2300,
          name: "A1.",
        },
        {
          x: 1450,
          y: 2300,
          name: "A2.",
        },
        {
          x: 1650,
          y: 2800,
          name: "A3.",
        },
        {
          x: 1700,
          y: 3150,
          name: "A4.",
        },
      ],
      detailsFile: "/flipmats/maps/haunted-house1.json",
    }),
    new ModuleScene({
      name: "map2",
      canonical: {
        name: "flipmat/haunted-house2",
        priority: 0,
      },
      nameInfo: {
        x: 72,
        y: 678.9169,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3),
      page: 9,
      width: 1041,
      height: 1301,
      imageLeft: 0,
      imageRight: 1041,
      imageCols: 30,
      imageTop: 0,
      imageBottom: 1301,
      imageRows: 24,
      rotateCW: 3,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      journals: [
        {
          x: 3100,
          y: 1800,
          name: "B1.",
        },
        {
          x: 3350,
          y: 1800,
          name: "B2.",
        },
      ],
      detailsFile: "/flipmats/maps/haunted-house2.json",
    }),
    new ModuleSceneTiled({
      name: "map3",
      nameInfo: {
        x: 41.5,
        y: 687.0001,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 11,
      width: 352,
      height: 562,
      imageLeft: 0,
      imageRight: 352,
      imageCols: 5,
      imageTop: 0,
      imageBottom: 562,
      imageRows: 8,
      numTileCols: 2,
      numTileRows: 2,
      fillColor: "#000",
      tileRotations: [
        [0, 0],
        [0, 0],
      ],
      tilePositions: [
        [0, 1],
        [0, 0],
        [1, 1],
        [1, 0],
      ],
    }),
    new ModuleSceneTiled({
      name: "map4",
      nameInfo: {
        x: 41.75,
        y: 690.872,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 13,
      width: 188,
      height: 300,
      imageLeft: 0,
      imageRight: 188,
      imageCols: 5,
      imageTop: 0,
      imageBottom: 300,
      imageRows: 8,
      numTileCols: 6,
      numTileRows: 2,
      fillColor: "#000",
      tileRotations: [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ],
      tilePositions: [
        [0, 0],
        [2, 0],
        [3, 0],
        [2, 1],
        [3, 1],
        [1, 0],
        [0, 1],
        [1, 1],
        [4, 0],
        [5, 0],
        [4, 1],
        [5, 1],
      ],
    }),
  ];
  journals = [
    new CaptionImage({
      name: "npc1",
      page: 1,
      width: 841,
      height: 1277,
    }),
    new CaptionImage({
      name: "npc2",
      page: 4,
      width: 804,
      height: 1206,
    }),
    new CaptionImage({
      name: "npc3",
      page: 10,
      width: 900,
      height: 1161,
    }),
    new CaptionImage({
      name: "npc4",
      page: 26,
      width: 504,
      height: 616,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Scenario #2-16" &&
        t.fontId === "GoodOT-Bold:15" &&
        t.page === 1,
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    this.removeText(text, 3, 237.5109, 654.8302);
    this.removeText(text, 8, 312.0012, 687);
    this.removeText(text, 8, 312.0012, 675);
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
