import { PFSSeason2Base } from "./base.js";
import { CaptionImage } from "../../../core/images.js";
import { ModuleScene } from "../../../core/module-scene.js";

export class PFS2_09 extends PFSSeason2Base {
  prefix = "pfs-2-09";
  fullName = "PFS #2-09 - The Seven Secrets of Dacilane Academy";
  pages = [
    this.TwoColumnWithRightCutout(3, 300),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumnWithLeftCutout(6, 150),
    this.TwoColumn(8),
    this.TwoColumn(9),
    this.TwoColumn(10),
    this.TwoColumn(11),
    this.TwoColumn(12),
    this.TwoColumn(13),
    this.TwoColumn(14),
    this.TwoColumn(15),
    this.TwoColumn(16, "appendix1"),
    this.TwoColumnWithRightCutout(17, 0, "appendix1"),
    this.TwoColumnWithRightCutout(18, 0, "appendix1"),
    this.TwoColumnWithRightCutout(19, 0, "appendix1"),
    this.TwoColumnWithRightCutout(20, 480, "appendix1"),
    this.TwoColumn(21, "appendix2"),
    this.TwoColumnWithRightCutout(22, 460, "appendix2"),
    this.TwoColumnWithRightCutout(23, 0, "appendix2"),
    this.TwoColumnWithRightCutout(24, 0, "appendix2"),
    this.TwoColumnWithRightCutout(25, 480, "appendix2"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      nameInfo: {
        x: 72,
        y: 686.3508,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 7,
      width: 996,
      height: 1328,
      imageLeft: 155,
      imageRight: 833,
      imageCols: 18,
      imageTop: 205,
      imageBottom: 1146,
      imageRows: 25,
      globalLight: true,
      detailsFile: "/pfs/maps/pfs2-09-map1.json",
      journals: [
        {
          x: 2200,
          y: 1600,
          name: "A1.",
        },
        {
          x: 2200,
          y: 2300,
          name: "A2.",
        },
        {
          x: 1850,
          y: 1950,
          name: "A3\u2013A5.",
        },
        {
          x: 1400,
          y: 2650,
          name: "A3\u2013A5.",
        },
        {
          x: 1850,
          y: 2650,
          name: "A3\u2013A5.",
        },
        {
          x: 1350,
          y: 1850,
          name: "A6.",
        },
        {
          x: 2650,
          y: 2050,
          name: "A7.",
        },
        {
          x: 2500,
          y: 2500,
          name: "A8.",
        },
        {
          x: 2850,
          y: 2550,
          name: "A9.",
        },
        {
          x: 2450,
          y: 2750,
          name: "A10.",
        },
        {
          x: 2550,
          y: 3150,
          name: "A11.",
        },
        {
          x: 1350,
          y: 1550,
          name: "A12.",
        },
        {
          x: 1650,
          y: 3250,
          name: "A13.",
        },
      ],
    }),
  ];
  journals = [
    new CaptionImage({
      name: "npc1",
      page: 4,
      width: 1035,
      height: 1139,
    }),
    new CaptionImage({
      name: "npc2",
      page: 12,
      width: 405,
      height: 467,
    }),
    new CaptionImage({
      name: "npc3",
      page: 14,
      width: 867,
      height: 1138,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Scenario #2-09" &&
        t.fontId === "GoodOT-Bold:15" &&
        t.page === 1,
    );
  }
  preprocess(text) {
    this.removeText(text, 3, 243.8608, 654.8302);
  }
  extractDetails(text, moduleData, sectionKey) {
    this.markIndented(text, 4, 321.0012, 603.0120000000002);
    this.markIndented(text, 4, 412.00019999999995, 519.0330000000005);
    this.markIndented(text, 4, 370.99620000000004, 387.0660000000003);
    this.markIndented(text, 4, 345.9852, 291.0900000000002);
    this.markIndented(text, 4, 403.4772000000001, 99.13800000000002);
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
