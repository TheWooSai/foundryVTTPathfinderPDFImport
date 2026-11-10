import { PFSSeason2Base } from "./base.js";
import { CaptionImage } from "../../../core/images.js";
import { ModuleScene } from "../../../core/module-scene.js";

export class PFS2_19 extends PFSSeason2Base {
  prefix = "pfs-2-19";
  fullName = "PFS #2-19 - Enter the Pallid Peak";
  pages = [
    this.TwoColumnWithRightCutout(3, 310),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumn(6),
    this.TwoColumn(8),
    this.TwoColumn(9),
    this.TwoColumnWithLeftCutout(10, 460),
    this.TwoColumn(11),
    this.TwoColumn(12),
    this.TwoColumn(13),
    this.TwoColumn(14),
    this.TwoColumnWithRightCutout(15, 490, "appendix1"),
    this.TwoColumnWithRightCutout(16, 0, "appendix1"),
    this.TwoColumnWithRightCutout(17, 440, "appendix1"),
    this.TwoColumnWithRightCutout(18, 480, "appendix1"),
    this.TwoColumnWithRightCutout(19, 0, "appendix2"),
    this.TwoColumnWithRightCutout(20, 0, "appendix2"),
    this.TwoColumnWithRightCutout(21, 430, "appendix2"),
    this.TwoColumnWithRightCutout(22, 440, "appendix2"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      canonical: {
        name: "flipmat/bigger-ancient-dungeon",
        priority: 0,
      },
      nameInfo: {
        x: 94.0417,
        y: 676.9169,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3),
      page: 7,
      width: 898,
      height: 1298,
      imageLeft: 33,
      imageRight: 866,
      imageCols: 25,
      imageTop: 33,
      imageBottom: 1264,
      imageRows: 37,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/flipmats/maps/bigger-ancient-dungeon.json",
      journals: [
        {
          x: 1550,
          y: 1550,
          name: "A1.",
        },
        {
          x: 2250,
          y: 1150,
          name: "A2.",
        },
        {
          x: 2850,
          y: 1150,
          name: "A3.",
        },
        {
          x: 2850,
          y: 2150,
          name: "A4.",
        },
        {
          x: 2250,
          y: 2150,
          name: "A5.",
        },
        {
          x: 1e3,
          y: 1850,
          name: "A6.",
        },
        {
          x: 1500,
          y: 2600,
          name: "A7.",
        },
        {
          x: 950,
          y: 2650,
          name: "A8.",
        },
        {
          x: 1350,
          y: 3550,
          name: "A9.",
        },
        {
          x: 850,
          y: 3950,
          name: "A10.",
        },
        {
          x: 1850,
          y: 4250,
          name: "A11.",
        },
        {
          x: 2850,
          y: 3950,
          name: "A12.",
        },
        {
          x: 2950,
          y: 4450,
          name: "A13.",
        },
      ],
    }),
  ];
  journals = [
    new CaptionImage({
      name: "npc1",
      page: 4,
      width: 448,
      height: 451,
    }),
    new CaptionImage({
      name: "npc2",
      page: 6,
      width: 453,
      height: 453,
    }),
    new CaptionImage({
      name: "npc3",
      page: 8,
      width: 453,
      height: 453,
    }),
    new CaptionImage({
      name: "npc4",
      page: 9,
      width: 425,
      height: 533,
    }),
    new CaptionImage({
      name: "npc5",
      page: 12,
      width: 452,
      height: 517,
    }),
    new CaptionImage({
      name: "npc6",
      page: 13,
      width: 1064,
      height: 950,
    }),
    new CaptionImage({
      name: "npc7",
      page: 14,
      width: 773,
      height: 1065,
    }),
    new CaptionImage({
      name: "npc8",
      page: 24,
      width: 553,
      height: 715,
    }),
    new CaptionImage({
      name: "npc9",
      page: 25,
      width: 505,
      height: 653,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Scenario #2-19" &&
        t.fontId === "GoodOT-Bold:15" &&
        t.page === 1,
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    this.removeText(text, 3, 231.1309, 654.8302);
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
