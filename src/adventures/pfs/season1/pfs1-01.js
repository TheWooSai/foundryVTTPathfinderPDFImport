import { PFSSeason1Base } from "./base.js";
import { AdventureImage, CaptionImage } from "../../../core/images.js";
import { ModuleScene } from "../../../core/module-scene.js";

export class PFS1_01 extends PFSSeason1Base {
  prefix = "pfs-1-01";
  fullName = "PFS #1-01 - The Absalom Initiation";
  pages = [
    this.TwoColumnWithRightCutout(3, 270),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumn(6),
    this.TwoColumn(7),
    this.TwoColumn(8),
    this.TwoColumn(9),
    this.TwoColumn(10),
    this.TwoColumnWithRightCutout(11, 550),
    this.TwoColumnWithMap(12, 365),
    this.TwoColumnWithRightCutout(13, 570),
    this.TwoColumn(14),
    this.TwoColumnWithLeftCutout(16, 580),
    this.TwoColumn(17),
    this.TwoColumn(18),
    this.TwoColumn(20),
    this.TwoColumn(21),
    this.TwoColumnWithLeftCutout(22, 475),
    this.TwoColumnWithLeftCutout(24, 355),
    this.TwoColumn(25),
    this.TwoColumn(26),
    this.TwoColumnWithBottomCutout(28, 300, "appendix1"),
    this.TwoColumnWithBottomCutout(29, 260, "appendix1"),
    this.TwoColumn(30, "appendix1"),
    this.TwoColumn(31, "appendix1"),
    this.TwoColumn(32, "appendix1"),
    this.TwoColumn(33, "appendix1"),
    this.TwoColumn(34, "appendix1"),
    this.TwoColumnWithBottomCutout(35, 300, "appendix2"),
    this.TwoColumnWithBottomCutout(36, 260, "appendix2"),
    this.TwoColumn(37, "appendix2"),
    this.TwoColumn(38, "appendix2"),
    this.TwoColumn(39, "appendix2"),
    this.TwoColumn(40, "appendix2"),
    this.TwoColumn(41, "appendix2"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      nameInfo: {
        x: 38.88,
        y: 679.0363,
      },
      nameFn: (name) => name.substring(3).trim(),
      page: 12,
      width: 1124,
      height: 653,
      imageLeft: 11,
      imageTop: 5,
      imageRight: 1066,
      imageBottom: 647,
      imageRows: 14,
      imageCols: 23,
      detailsFile: "/pfs/maps/pfs1-01-map1.json",
      journals: [
        {
          x: 1550,
          y: 1350,
          name: "A1.",
        },
        {
          x: 1550,
          y: 750,
          name: "A2.",
        },
        {
          x: 2550,
          y: 650,
          name: "A3.",
        },
        {
          x: 950,
          y: 650,
          name: "A4.",
        },
      ],
    }),
    new ModuleScene({
      name: "map2",
      nameInfo: {
        x: 60,
        y: 675.0001,
      },
      nameFn: (name) => name.substring(3).trim(),
      page: 15,
      width: 1041,
      height: 1301,
      imageLeft: 173,
      imageRight: 868,
      imageCols: 16,
      imageTop: 88,
      imageBottom: 1214,
      imageRows: 26,
      globalLight: true,
      detailsFile: "/pfs/maps/pfs1-01-map2.json",
      journals: [
        {
          x: 1650,
          y: 1e3,
          name: "B1.",
        },
        {
          x: 1850,
          y: 1050,
          name: "B1.",
        },
        {
          x: 2050,
          y: 1050,
          name: "B1.",
        },
        {
          x: 2250,
          y: 1050,
          name: "B1.",
        },
        {
          x: 2250,
          y: 1350,
          name: "B2.",
        },
        {
          x: 1750,
          y: 2050,
          name: "B3.",
        },
        {
          x: 1250,
          y: 2950,
          name: "B4.",
        },
        {
          x: 2450,
          y: 3250,
          name: "B5.",
        },
      ],
    }),
    new ModuleScene({
      name: "map3",
      nameInfo: {
        x: 60,
        y: 675.0001,
      },
      nameFn: (name) => name.substring(3).trim(),
      page: 19,
      width: 1301,
      height: 1045,
      imageLeft: 10,
      imageRight: 1290,
      imageCols: 24,
      imageTop: 11,
      imageBottom: 1035,
      imageRows: 30,
      rotateCW: 3,
      detailsFile: "/pfs/maps/pfs1-01-map3.json",
      journals: [
        {
          x: 2850,
          y: 2250,
          id: "MTg6NzI6NjAz",
        },
        {
          x: 1650,
          y: 2350,
          id: "MTg6NzI6NDU5",
        },
        {
          x: 1750,
          y: 1450,
          id: "MjA6NzI6NTE5",
        },
        {
          x: 1550,
          y: 1450,
          id: "MjA6MzEyOjYzOQ",
        },
        {
          x: 1650,
          y: 1850,
          id: "MjE6NzI6MzYz",
        },
        {
          x: 1750,
          y: 2750,
          id: "MjE6NzI6Mjc5",
        },
        {
          x: 1850,
          y: 3150,
          id: "MjE6NzI6MjE5",
        },
      ],
    }),
    new ModuleScene({
      name: "map4",
      nameInfo: {
        x: 72,
        y: 675.0001,
      },
      nameFn: (name) => name.substring(3).trim(),
      page: 23,
      width: 996,
      height: 1300,
      imageLeft: 36,
      imageRight: 959,
      imageCols: 22,
      imageTop: 21,
      imageBottom: 1279,
      imageRows: 30,
      rotateCW: 0,
    }),
  ];
  journals = [
    new AdventureImage({
      name: "journal1",
      page: 1,
      width: 1519,
      height: 1673,
    }),
    new AdventureImage({
      name: "journal2",
      page: 3,
      width: 403,
      height: 527,
    }),
    new CaptionImage({
      name: "npc1",
      page: 42,
      width: 951,
      height: 1176,
    }),
    new CaptionImage({
      name: "npc2",
      page: 43,
      width: 924,
      height: 924,
    }),
    new CaptionImage({
      name: "npc3",
      page: 44,
      width: 856,
      height: 856,
    }),
    new CaptionImage({
      name: "npc4",
      page: 45,
      width: 846,
      height: 846,
    }),
    new CaptionImage({
      name: "npc5",
      page: 46,
      width: 892,
      height: 892,
    }),
    new CaptionImage({
      name: "npc6",
      page: 47,
      width: 1152,
      height: 1152,
    }),
    new CaptionImage({
      name: "npc7",
      page: 48,
      width: 1204,
      height: 1504,
    }),
    new CaptionImage({
      name: "npc8",
      page: 49,
      width: 1059,
      height: 1152,
    }),
    new CaptionImage({
      name: "npc9",
      page: 50,
      width: 1504,
      height: 1204,
    }),
    new CaptionImage({
      name: "npc10",
      page: 51,
      width: 1093,
      height: 1430,
    }),
    new CaptionImage({
      name: "npc11",
      page: 52,
      width: 1199,
      height: 1200,
    }),
    new CaptionImage({
      name: "npc12",
      page: 53,
      width: 953,
      height: 953,
    }),
    new CaptionImage({
      name: "npc13",
      page: 54,
      width: 927,
      height: 927,
    }),
    new CaptionImage({
      name: "npc14",
      page: 55,
      width: 1123,
      height: 1123,
    }),
    new CaptionImage({
      name: "npc15",
      page: 56,
      width: 1050,
      height: 1200,
    }),
    new CaptionImage({
      name: "npc16",
      page: 57,
      width: 948,
      height: 1200,
    }),
    new CaptionImage({
      name: "npc17",
      page: 58,
      width: 961,
      height: 1201,
    }),
    new CaptionImage({
      name: "npc18",
      page: 59,
      width: 938,
      height: 1267,
    }),
    new CaptionImage({
      name: "npc19",
      page: 60,
      width: 1108,
      height: 1017,
    }),
    new CaptionImage({
      name: "npc20",
      page: 61,
      width: 855,
      height: 1180,
    }),
    new CaptionImage({
      name: "npc21",
      page: 62,
      width: 1582,
      height: 1885,
    }),
    new CaptionImage({
      name: "npc22",
      page: 63,
      width: 1465,
      height: 1739,
    }),
    new CaptionImage({
      name: "npc23",
      page: 64,
      width: 962,
      height: 1200,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "PATHFINDER SOCIETY SCENARIO #1\u201301" &&
        t.fontId === "GoodOT-CondBold:10" &&
        t.page === 1,
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    const i = text.findIndex(
      (t) => t.page === 3 && t.x === 269.5874 && t.y === 687.5622,
    );
    if (i !== -1) {
      text[i].fontId = "Sabon-Roman:9";
      text.splice(
        i,
        0,
        this.getFakeText("Introduction", "GoodOT-Bold:12", 3, 72, 680),
      );
    }
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
