import { PFSSeason2Base } from "./base.js";
import { AdventureImage, CaptionImage } from "../../../core/images.js";
import { ModuleScene } from "../../../core/module-scene.js";

export class PFS2_11 extends PFSSeason2Base {
  prefix = "pfs-2-11";
  fullName = "PFS #2-11 - The Pathfinder Trials";
  pages = [
    this.TwoColumnWithRightCutout(3, 300),
    this.TwoColumn(4),
    this.TwoColumn(6),
    this.TwoColumnWithBottomCutout(7, 220),
    this.TwoColumn(8),
    this.TwoColumnWithBottomCutout(9, 330),
    this.TwoColumn(10),
    this.TwoColumn(11),
    this.TwoColumn(12),
    this.TwoColumn(14),
    this.TwoColumn(15),
    this.TwoColumn(16),
    this.TwoColumn(18),
    this.TwoColumn(19),
    this.TwoColumnWithRightCutout(20, 580, "appendix1"),
    this.TwoColumnWithRightCutout(21, 0, "appendix1"),
    this.TwoColumnWithRightCutout(22, 0, "appendix1"),
    this.TwoColumnWithRightCutout(23, 0, "appendix1"),
    this.TwoColumnWithRightCutout(24, 0, "appendix1"),
    this.TwoColumnWithRightCutout(25, 0, "appendix1"),
    this.TwoColumnWithRightCutout(26, 0, "appendix1"),
    this.TwoColumnWithRightCutout(27, 0, "appendix1"),
    this.TwoColumnWithRightCutout(28, 0, "appendix1"),
    this.TwoColumnWithRightCutout(29, 0, "appendix1"),
    this.TwoColumnWithRightCutout(30, 0, "appendix1"),
    this.TwoColumnWithRightCutout(31, 0, "appendix1"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      nameInfo: {
        x: 72,
        y: 684.0188,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 5,
      width: 996,
      height: 1245,
      imageLeft: 41,
      imageRight: 913,
      imageCols: 21,
      imageTop: 83,
      imageBottom: 1162,
      imageRows: 26,
      globalLight: true,
      detailsFile: "/pfs/maps/pfs2-11-map1.json",
      journals: [
        {
          x: 1550,
          y: 1350,
          name: "A1.",
        },
        {
          x: 2700,
          y: 2850,
          name: "A2.",
        },
        {
          x: 1100,
          y: 3500,
          name: "A3.",
        },
        {
          x: 2100,
          y: 2300,
          name: "A4.",
        },
        {
          x: 1850,
          y: 2850,
          name: "A5.",
        },
      ],
    }),
    new ModuleScene({
      name: "map2",
      nameInfo: {
        x: 72,
        y: 684.0188,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 13,
      width: 996,
      height: 1245,
      imageLeft: 6,
      imageRight: 988,
      imageCols: 24,
      imageTop: 10,
      imageBottom: 1235,
      imageRows: 30,
      globalLight: true,
    }),
    new ModuleScene({
      name: "map3",
      nameInfo: {
        x: 72,
        y: 684.0188,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 17,
      width: 996,
      height: 1245,
      imageLeft: 0,
      imageRight: 996,
      imageCols: 24,
      imageTop: 0,
      imageBottom: 1245,
      imageRows: 30,
      globalLight: true,
      detailsFile: "/pfs/maps/pfs2-11-map3.json",
      journals: [
        {
          x: 2550,
          y: 1750,
          name: "C1.",
        },
        {
          x: 1050,
          y: 1250,
          name: "C2.",
        },
        {
          x: 1900,
          y: 3150,
          name: "C3.",
        },
        {
          x: 1850,
          y: 1850,
          name: "C4.",
        },
      ],
    }),
  ];
  journals = [
    new CaptionImage({
      name: "journal1",
      page: 1,
      width: 918,
      height: 1140,
    }),
    new CaptionImage({
      name: "npc1",
      page: 4,
      width: 449,
      height: 1077,
    }),
    new CaptionImage({
      name: "npc2",
      page: 6,
      width: 746,
      height: 1021,
    }),
    new CaptionImage({
      name: "npc3",
      page: 8,
      width: 845,
      height: 1179,
    }),
    new CaptionImage({
      name: "npc4",
      page: 12,
      width: 746,
      height: 934,
    }),
    new CaptionImage({
      name: "npc5",
      page: 14,
      width: 893,
      height: 1205,
    }),
    new CaptionImage({
      name: "npc6",
      page: 16,
      width: 892,
      height: 1459,
    }),
    new AdventureImage({
      name: "npc7",
      page: 33,
      width: 623,
      height: 431,
    }),
    new AdventureImage({
      name: "npc8",
      page: 33,
      width: 640,
      height: 625,
    }),
    new AdventureImage({
      name: "npc9",
      page: 33,
      width: 490,
      height: 634,
    }),
    new AdventureImage({
      name: "npc10",
      page: 34,
      width: 435,
      height: 615,
    }),
    new AdventureImage({
      name: "npc11",
      page: 34,
      width: 610,
      height: 474,
    }),
    new AdventureImage({
      name: "npc12",
      page: 34,
      width: 451,
      height: 683,
    }),
    new AdventureImage({
      name: "npc13",
      page: 35,
      width: 613,
      height: 709,
    }),
    new AdventureImage({
      name: "npc14",
      page: 35,
      width: 688,
      height: 420,
    }),
    new AdventureImage({
      name: "npc15",
      page: 35,
      width: 586,
      height: 683,
    }),
    new AdventureImage({
      name: "npc16",
      page: 36,
      width: 666,
      height: 699,
    }),
    new AdventureImage({
      name: "npc17",
      page: 36,
      width: 381,
      height: 624,
    }),
    new AdventureImage({
      name: "npc18",
      page: 36,
      width: 405,
      height: 607,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Scenario #2-11" &&
        t.fontId === "GoodOT-Bold:15" &&
        t.page === 1,
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    this.changeFontId(text, 22, 254.9667, 435, "GoodOT:9");
    this.removeText(text, 16, 72, 411);
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
