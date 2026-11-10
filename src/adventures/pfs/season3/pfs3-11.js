import { PFSSeason3Base } from "./base.js";
import { LabelImage } from "../../../core/images.js";
import { ModuleSceneTiled } from "../../../core/module-scene.js";

export class PFS3_11 extends PFSSeason3Base {
  prefix = "pfs-3-11";
  fullName = "PFS #3-11 - No Time for Treason";
  pages = [
    this.TwoColumnWithRightCutout(3, 330),
    this.TwoColumn(4),
    this.TwoColumnWithRightCutout(5, 430),
    this.TwoColumn(6),
    this.TwoColumn(7),
    this.TwoColumn(8),
    this.TwoColumnWithRightCutout(9, 480),
    this.TwoColumnWithMap(10, 390),
    this.TwoColumn(11),
    this.TwoColumnWithRightCutout(12, 360),
    this.TwoColumn(13),
    this.TwoColumn(14),
    this.TwoColumn(15),
    this.TwoColumn(17),
    this.TwoColumn(18),
    this.TwoColumnWithRightCutout(19, 490, "appendix1"),
    this.TwoColumn(20, "appendix1"),
    this.TwoColumnWithRightCutout(21, 510, "appendix1"),
    this.TwoColumnWithRightCutout(22, 490, "appendix2"),
    this.TwoColumn(23, "appendix2"),
    this.TwoColumnWithRightCutout(24, 520, "appendix2"),
    this.TwoColumn(25, "appendix2"),
    this.OneColumn(29, "handout"),
  ];
  scenes = [
    new ModuleSceneTiled({
      name: "map1",
      nameInfo: {
        x: 82,
        y: 675.5514,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 10,
      width: 479,
      height: 479,
      imageLeft: 0,
      imageRight: 479,
      imageCols: 6,
      imageTop: 0,
      imageBottom: 479,
      imageRows: 6,
      numTileCols: 2,
      numTileRows: 1,
      fillColor: "#000",
      tileRotations: [[2, 0]],
      tilePositions: [
        [0, 0],
        [1, 0],
      ],
      detailsFile: "/pfs/maps/pfs3-11-map1.json",
      journals: [
        {
          x: 300,
          y: 150,
          id: "OTo3MjozMTU",
        },
        {
          x: 1e3,
          y: 300,
          id: "OTozMTI6MzYz",
        },
        {
          x: 800,
          y: 500,
          id: "MTE6MzEyOjY4Nw",
        },
        {
          x: 950,
          y: 450,
          id: "MTI6NzI6Mzc1",
        },
      ],
      tokens: [],
    }),
    new ModuleSceneTiled({
      name: "map2",
      nameInfo: {
        x: 114,
        y: 428.1934,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 16,
      width: 319,
      height: 319,
      imageLeft: 0,
      imageRight: 319,
      imageCols: 6,
      imageTop: 0,
      imageBottom: 319,
      imageRows: 6,
      numTileCols: 3,
      numTileRows: 3,
      fillColor: "#000",
      tileRotations: [
        [0, 1, 1],
        [0, 0, 1],
        [0, 3, 3],
      ],
      tilePositions: [
        [0, 0],
        [1, 0],
        [2, 0],
        [0, 1],
        [1, 1],
        [2, 1],
        [0, 2],
        [1, 2],
        [2, 2],
      ],
      journals: [
        {
          x: 450,
          y: 550,
          id: "MTU6NzI6NDU5",
        },
      ],
      tokens: [],
    }),
  ];
  journals = [
    new LabelImage({
      name: "journal1",
      page: 6,
      width: 526,
      height: 526,
      label: "NjoyNTg6MzYy",
    }),
    new LabelImage({
      name: "journal2",
      page: 7,
      width: 526,
      height: 526,
      label: "NzoyNzk6NDA5",
    }),
    new LabelImage({
      name: "journal3",
      page: 7,
      width: 526,
      height: 526,
      label: "NzoyNDI6ODY",
    }),
    new LabelImage({
      name: "journal4",
      page: 11,
      width: 691,
      height: 889,
      label: "MTE6MTMzOjg2",
    }),
    new LabelImage({
      name: "journal5",
      page: 14,
      width: 557,
      height: 557,
      label: "MTQ6MjQ1OjM0Nw",
    }),
    new LabelImage({
      name: "journal6",
      page: 15,
      width: 720,
      height: 933,
      label: "MTU6Mzg3Ojg2",
    }),
    new LabelImage({
      name: "journal7",
      page: 17,
      width: 540,
      height: 540,
      label: "MTc6MjQ1OjI2MA",
    }),
  ];
  npcs = [];
  normalFontIds = this.normalFontIds.concat(["Masoch-Dirach:9"]);
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Scenario #3-11" &&
        t.fontId === "GoodOT-Bold:15" &&
        t.page === 1,
    );
  }
  preprocess(text) {
    this.removeText(text, 3, 243.8608, 654.8302);
    this.removeText(text, 3, 413.3272, 384.0801);
    for (let i = 0; i < text.length; i++) {
      text[i].text = text[i].text.replace(/�/, ".");
    }
  }
  extractDetails(text, moduleData, sectionKey) {
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
