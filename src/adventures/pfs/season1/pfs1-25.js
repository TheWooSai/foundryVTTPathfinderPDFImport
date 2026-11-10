import { PFSSeason1Base } from "./base.js";
import { CaptionImage } from "../../../core/images.js";
import { ModuleScene } from "../../../core/module-scene.js";

export class PFS1_25 extends PFSSeason1Base {
  prefix = "pfs-1-25";
  fullName = "PFS #1-25 - Grim Symphony";
  pages = [
    this.TwoColumnWithRightCutout(3, 340),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumnWithLeftCutout(6, 430),
    this.TwoColumn(8),
    this.TwoColumn(9),
    this.TwoColumn(11),
    this.TwoColumn(12),
    this.TwoColumnWithMap(13, 315),
    this.TwoColumn(14),
    this.TwoColumnWithRightCutout(15, 490, "appendix1"),
    this.TwoColumnWithRightCutout(16, 560, "appendix1"),
    this.TwoColumnWithRightCutout(17, 480, "appendix1"),
    this.TwoColumnWithRightCutout(18, 490, "appendix2"),
    this.TwoColumnWithRightCutout(19, 500, "appendix2"),
    this.TwoColumnWithRightCutout(20, 490, "appendix2"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      nameInfo: {
        x: 90,
        y: 675,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 7,
      width: 901,
      height: 1301,
      imageLeft: 0,
      imageRight: 901,
      imageCols: 27,
      imageTop: 0,
      imageBottom: 1301,
      imageRows: 39,
      globalLight: true,
      detailsFile: "/pfs/maps/pfs1-25-map1.json",
      journals: [
        {
          x: 1350,
          y: 2850,
          name: "A1.",
        },
        {
          x: 3050,
          y: 2850,
          name: "A2.",
        },
        {
          x: 2450,
          y: 1550,
          name: "A3.",
        },
        {
          x: 1450,
          y: 2050,
          name: "A4.",
        },
        {
          x: 1350,
          y: 2350,
          name: "A5.",
        },
        {
          x: 1450,
          y: 3950,
          name: "A6.",
        },
        {
          x: 2650,
          y: 4050,
          name: "A7.",
        },
      ],
    }),
    new ModuleScene({
      name: "map2",
      nameInfo: {
        x: 72,
        y: 679,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 10,
      width: 1040,
      height: 1299,
      imageLeft: 0,
      imageRight: 1040,
      imageCols: 24,
      imageTop: 0,
      imageBottom: 1299,
      imageRows: 30,
      globalLight: true,
      detailsFile: "/pfs/maps/pfs1-25-map2.json",
      journals: [
        {
          x: 2150,
          y: 1450,
          name: "B1.",
        },
        {
          x: 2650,
          y: 1850,
          name: "B2.",
        },
        {
          x: 1750,
          y: 2150,
          name: "B3.",
        },
        {
          x: 2650,
          y: 2450,
          name: "B4.",
        },
        {
          x: 2650,
          y: 3350,
          name: "B5.",
        },
        {
          x: 1450,
          y: 3150,
          name: "B6.",
        },
        {
          x: 1150,
          y: 2450,
          name: "B7.",
        },
        {
          x: 1100,
          y: 950,
          name: "B8.",
        },
      ],
    }),
    new ModuleScene({
      name: "map3",
      nameInfo: {
        x: 43.9282,
        y: 660.7747,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 13,
      width: 1124,
      height: 750,
      imageLeft: 118,
      imageRight: 1015,
      imageCols: 20,
      imageTop: 89,
      imageBottom: 718,
      imageRows: 14,
      globalLight: true,
      journals: [
        {
          x: 1900,
          y: 1800,
          name: "C1.",
        },
        {
          x: 1900,
          y: 1200,
          name: "C2.",
        },
      ],
    }),
  ];
  journals = [
    new CaptionImage({
      name: "npc1",
      page: 21,
      width: 965,
      height: 1200,
    }),
    new CaptionImage({
      name: "npc2",
      page: 22,
      width: 900,
      height: 1350,
    }),
    new CaptionImage({
      name: "npc3",
      page: 23,
      width: 951,
      height: 1189,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "PATHFINDER SOCIETY SCENARIO #1\u201325" &&
        t.fontId === "GoodOT-CondBold:10" &&
        t.page === 1,
    );
  }
  finalize(moduleData) {}
}
