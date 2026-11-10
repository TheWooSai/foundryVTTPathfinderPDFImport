import { PFSSeason2Base } from "./base.js";
import { CaptionImage } from "../../../core/images.js";
import { ModuleScene } from "../../../core/module-scene.js";

export class PFS2_23 extends PFSSeason2Base {
  prefix = "pfs-2-23";
  fullName = "PFS #2-23 - An Agent's Obligation";
  pages = [
    this.TwoColumnWithRightCutout(3, 320),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumnWithLeftCutout(7, 330),
    this.TwoColumn(8),
    this.TwoColumn(10),
    this.TwoColumn(11),
    this.TwoColumn(13),
    this.TwoColumn(14),
    this.TwoColumn(15),
    this.TwoColumnWithRightCutout(16, 500, "appendix1"),
    this.TwoColumnWithRightCutout(17, 510, "appendix1"),
    this.TwoColumn(18, "appendix1"),
    this.TwoColumnWithRightCutout(19, 0, "appendix1"),
    this.TwoColumnWithRightCutout(20, 580, "appendix1"),
    this.TwoColumn(21, "appendix1"),
    this.TwoColumnWithRightCutout(22, 0, "appendix2"),
    this.TwoColumnWithRightCutout(23, 510, "appendix2"),
    this.TwoColumnWithRightCutout(24, 0, "appendix2"),
    this.TwoColumn(25, "appendix2"),
    this.TwoColumnWithRightCutout(26, 430, "appendix2"),
    this.TwoColumn(27, "appendix2"),
    this.OneColumn(29, "handout1"),
    this.OneColumn(30, "handout2"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      canonical: {
        name: "flipmat-classic/red-light-district",
        priority: 0,
      },
      nameInfo: {
        x: 79.5,
        y: 674.3508,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 6,
      width: 1214,
      height: 975,
      imageLeft: 10,
      imageRight: 1204,
      imageCols: 30,
      imageTop: 11,
      imageBottom: 965,
      imageRows: 24,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/flipmats/maps/red-light-district.json",
    }),
    new ModuleScene({
      name: "map2",
      canonical: {
        name: "flipmat-classic/red-light-district",
        priority: 0,
      },
      nameInfo: {
        x: 79.5,
        y: 674.3508,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 9,
      width: 1214,
      height: 975,
      imageLeft: 10,
      imageRight: 1204,
      imageCols: 24,
      imageTop: 11,
      imageBottom: 965,
      imageRows: 30,
      rotateCW: 1,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/flipmats/maps/red-light-district2.json",
      journals: [
        {
          x: 1450,
          y: 2150,
          name: "B1.",
        },
        {
          x: 1350,
          y: 1400,
          name: "B2.",
        },
      ],
    }),
    new ModuleScene({
      name: "map3",
      canonical: {
        name: "flipmat-classic/prison",
        priority: 0,
      },
      nameInfo: {
        x: 79.5,
        y: 674.3508,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 12,
      width: 1214,
      height: 977,
      imageLeft: 20,
      imageRight: 1195,
      imageCols: 24,
      imageTop: 18,
      imageBottom: 958,
      imageRows: 30,
      rotateCW: 1,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/flipmats/maps/prison.json",
      journals: [
        {
          x: 2450,
          y: 3350,
          name: "C1.",
        },
        {
          x: 1700,
          y: 3e3,
          name: "C2.",
        },
        {
          x: 1e3,
          y: 3500,
          name: "C3.",
        },
        {
          x: 2300,
          y: 1400,
          name: "C4.",
        },
      ],
    }),
  ];
  journals = [
    new CaptionImage({
      name: "journal1",
      page: 3,
      width: 403,
      height: 269,
    }),
    new CaptionImage({
      name: "npc1",
      page: 10,
      width: 795,
      height: 1232,
    }),
    new CaptionImage({
      name: "npc2",
      page: 14,
      width: 732,
      height: 1107,
    }),
    new CaptionImage({
      name: "npc3",
      page: 1,
      width: 527,
      height: 1153,
    }),
  ];
  normalFontIds = this.normalFontIds.concat([
    "GoodOT:10",
    "SabonLTStd-Roman:12",
  ]);
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Scenario #2-23" &&
        t.fontId === "GoodOT-Bold:15" &&
        t.page === 1,
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    this.removeText(text, 3, 227.6313, 654.8302);
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
