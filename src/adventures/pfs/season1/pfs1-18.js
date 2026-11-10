import { PFSSeason1Base } from "./base.js";
import { AdventureImage, CaptionImage } from "../../../core/images.js";
import { ModuleScene, ModuleSceneTiled } from "../../../core/module-scene.js";

export class PFS1_18 extends PFSSeason1Base {
  prefix = "pfs-1-18";
  fullName = "PFS #1-18 - Lodge of the Living God";
  pages = [
    this.TwoColumnWithRightCutout(3, 370),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumn(6),
    this.TwoColumnWithLeftCutout(8, 330),
    this.TwoColumnWithMap(9, 320),
    this.TwoColumn(10),
    this.TwoColumnWithMap(12, 270),
    this.TwoColumnWithLeftCutout(13, 380),
    this.TwoColumn(14),
    this.TwoColumn(15),
    this.TwoColumn(16),
    this.TwoColumn(17),
    this.TwoColumnWithRightCutout(18, 0, "appendix1"),
    this.TwoColumnWithRightCutout(19, 0, "appendix1"),
    this.TwoColumnWithRightCutout(20, 0, "appendix1"),
    this.TwoColumnWithRightCutout(21, 0, "appendix1"),
    this.TwoColumnWithRightCutout(22, 500, "appendix1"),
    this.TwoColumnWithRightCutout(23, 0, "appendix2"),
    this.TwoColumnWithRightCutout(24, 0, "appendix2"),
    this.TwoColumnWithRightCutout(25, 0, "appendix2"),
    this.TwoColumnWithRightCutout(26, 580, "appendix2"),
    this.TwoColumnWithRightCutout(27, 0, "appendix2"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      nameInfo: {
        x: 72,
        y: 675.2747,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 7,
      width: 1041,
      height: 1301,
      imageLeft: 43,
      imageRight: 998,
      imageCols: 22,
      imageTop: 43,
      imageBottom: 1257,
      imageRows: 28,
      globalLight: true,
      journals: [
        {
          x: 1350,
          y: 1550,
          name: "A1.",
        },
        {
          x: 1150,
          y: 2250,
          name: "A2.",
        },
        {
          x: 2450,
          y: 2150,
          name: "A3.",
        },
        {
          x: 1450,
          y: 2850,
          name: "A4.",
        },
        {
          x: 2350,
          y: 1650,
          name: "A5.",
        },
        {
          x: 2250,
          y: 2650,
          name: "A6.",
        },
        {
          x: 650,
          y: 1750,
          name: "A7.",
        },
      ],
    }),
    new ModuleScene({
      name: "map2",
      nameInfo: {
        x: 72,
        y: 675.2747,
      },
      nameFn: (name) => this.sentenceCase(name).substr(3),
      page: 11,
      width: 1041,
      height: 1301,
      imageLeft: 44,
      imageRight: 997,
      imageCols: 22,
      imageTop: 43,
      imageBottom: 1258,
      imageRows: 28,
      globalLight: true,
      journals: [
        {
          x: 1200,
          y: 3250,
          name: "B1.",
        },
        {
          x: 1350,
          y: 1850,
          name: "B2.",
        },
        {
          x: 1850,
          y: 1850,
          name: "B3.",
        },
        {
          x: 2450,
          y: 2450,
          name: "B4.",
        },
      ],
    }),
    new ModuleSceneTiled({
      name: "map3",
      nameInfo: {
        x: 102.2126,
        y: 675.2747,
      },
      nameFn: (name) => this.sentenceCase(name).substr(3),
      page: 12,
      width: 433,
      height: 433,
      imageLeft: 0,
      imageTop: 0,
      imageRight: 433,
      imageBottom: 433,
      imageRows: 6,
      imageCols: 6,
      numTileCols: 2,
      numTileRows: 2,
      fillColor: "#000",
      tileRotations: [
        [3, 0],
        [1, 0],
      ],
      tilePositions: [
        [0, 1],
        [0, 0],
        [1, 1],
        [1, 0],
      ],
      detailsFile: "/pfs/maps/pfs1-18-map3.json",
    }),
  ];
  journals = [
    new AdventureImage({
      name: "journal1",
      page: 3,
      width: 437,
      height: 299,
    }),
    new AdventureImage({
      name: "journal2",
      page: 9,
      width: 1124,
      height: 750,
    }),
    new CaptionImage({
      name: "npc1",
      page: 29,
      width: 754,
      height: 1197,
    }),
    new CaptionImage({
      name: "npc2",
      page: 30,
      width: 1139,
      height: 1235,
    }),
    new CaptionImage({
      name: "npc3",
      page: 31,
      width: 914,
      height: 1328,
    }),
    new CaptionImage({
      name: "npc4",
      page: 32,
      width: 1023,
      height: 1219,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "PATHFINDER SOCIETY SCENARIO #1\u201318" &&
        t.fontId === "GoodOT-CondBold:10" &&
        t.page === 1,
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    for (const i in text) {
      const t = text[i];
      if ((t.page === 21 || t.page === 26) && t.fontId === "GoodOT:8.5") {
        text[i].fontId = "GoodOT:9";
      }
    }
    for (let i = 0; i < text.length; i++) {
      [6].includes(text[i].page) &&
        text[i].fontId === "TimesNewRomanPS-BoldMT:9" &&
        text[i].text.startsWith("A") &&
        ((text[i].fontId = "GoodOT-Bold:12"),
        (text[i].fontName = "GoodOT-Bold"),
        (text[i].fontSize = 12),
        (text[i].text = text[i].text.trim()),
        text[i].text.endsWith(":") &&
          (text[i].text = text[i].text.substring(0, text[i].text.length - 1)));
    }
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
