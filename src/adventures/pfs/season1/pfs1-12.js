import { PFSSeason1Base } from "./base.js";
import { CaptionImage } from "../../../core/images.js";
import { ModuleScene } from "../../../core/module-scene.js";

export class PFS1_12 extends PFSSeason1Base {
  prefix = "pfs-1-12";
  fullName = "PFS #1-12 - The Burden of Envy";
  pages = [
    this.TwoColumnWithRightCutout(3, 365),
    this.TwoColumn(4),
    this.TwoColumnWithRightCutout(5, 570),
    this.TwoColumn(6),
    this.TwoColumn(7),
    this.TwoColumn(8),
    this.TwoColumn(9),
    this.TwoColumn(10),
    this.TwoColumn(11),
    this.TwoColumn(12),
    this.TwoColumn(13),
    this.TwoColumn(14),
    this.TwoColumn(15),
    this.TwoColumn(16),
    this.TwoColumn(17),
    this.TwoColumn(18),
    this.TwoColumn(19),
    this.TwoColumn(20),
    this.TwoColumnWithRightCutout(21, 560, "appendix1"),
    this.TwoColumnWithRightCutout(22, 500, "appendix1"),
    this.TwoColumnWithRightCutout(23, 540, "appendix2a"),
    this.TwoColumnWithRightCutout(24, 530, "appendix2b"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      nameInfo: {
        x: 102.2126,
        y: 684.7747,
      },
      nameFn: (name) => name.substring(3).trim(),
      page: 7,
      width: 1323,
      height: 867,
      imageLeft: 0,
      imageTop: 0,
      imageRight: 1e3,
      imageBottom: 1e3,
      imageRows: 10,
      imageCols: 10,
      rotateCW: 3,
      journals: [
        {
          x: 950,
          y: 650,
          name: "A1.",
        },
        {
          x: 550,
          y: 550,
          name: "A2.",
        },
        {
          x: 850,
          y: 1550,
          name: "A3.",
        },
        {
          x: 900,
          y: 800,
          name: "A4.",
        },
        {
          x: 750,
          y: 1050,
          name: "A5.",
        },
        {
          x: 950,
          y: 1350,
          name: "A6.",
        },
        {
          x: 550,
          y: 850,
          name: "A7.",
        },
        {
          x: 750,
          y: 1550,
          name: "A8.",
        },
      ],
    }),
    new ModuleScene({
      name: "map2",
      nameInfo: {
        x: 72,
        y: 675,
      },
      nameFn: (name) => name.substring(3).trim(),
      page: 14,
      width: 1305,
      height: 1048,
      imageLeft: 10,
      imageTop: 11,
      imageRight: 1294,
      imageBottom: 1038,
      imageRows: 24,
      imageCols: 30,
    }),
    new ModuleScene({
      name: "map3",
      nameInfo: {
        x: 72,
        y: 672.7747,
      },
      nameFn: (name) => name.substring(3).trim(),
      page: 16,
      width: 1049,
      height: 1305,
      imageLeft: 12,
      imageTop: 14,
      imageRight: 994,
      imageBottom: 1292,
      imageRows: 30,
      imageCols: 23,
    }),
    new ModuleScene({
      name: "map4",
      nameInfo: {
        x: 72,
        y: 672.7747,
      },
      nameFn: (name) => name.substring(3).trim(),
      page: 17,
      width: 1301,
      height: 1045,
      imageLeft: 10,
      imageTop: 11,
      imageRight: 1290,
      imageBottom: 1035,
      imageRows: 30,
      imageCols: 24,
      rotateCW: 1,
    }),
  ];
  journals = [
    new CaptionImage({
      name: "journal1",
      page: 1,
      width: 1217,
      height: 1308,
    }),
    new CaptionImage({
      name: "npc1",
      page: 4,
      width: 432,
      height: 413,
    }),
    new CaptionImage({
      name: "npc2",
      page: 25,
      width: 1182,
      height: 1182,
    }),
    new CaptionImage({
      name: "npc3",
      page: 26,
      width: 1182,
      height: 1182,
    }),
    new CaptionImage({
      name: "npc4",
      page: 27,
      width: 1182,
      height: 1182,
    }),
    new CaptionImage({
      name: "npc5",
      page: 28,
      width: 1182,
      height: 1182,
    }),
    new CaptionImage({
      name: "npc6",
      page: 29,
      width: 1259,
      height: 1259,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "PATHFINDER SOCIETY SCENARIO #1\u201312" &&
        t.fontId === "GoodOT-CondBold:10" &&
        t.page === 1,
    );
  }
  finalize(moduleData) {}
}
