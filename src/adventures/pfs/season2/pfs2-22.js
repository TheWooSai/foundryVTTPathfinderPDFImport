import { PFSSeason2Base } from "./base.js";
import { CaptionImage } from "../../../core/images.js";
import { ModuleScene } from "../../../core/module-scene.js";

export class PFS2_22 extends PFSSeason2Base {
  prefix = "pfs-2-22";
  fullName = "PFS #2-22 - Breaking the Storm: Excising Ruination";
  pages = [
    this.TwoColumnWithRightCutout(3, 310),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumn(6),
    this.TwoColumn(7),
    this.TwoColumn(9),
    this.TwoColumn(10),
    this.TwoColumn(11),
    this.TwoColumn(12),
    this.TwoColumn(13),
    this.TwoColumn(14),
    this.TwoColumn(15),
    this.TwoColumnWithRightCutout(16, 0, "appendix1"),
    this.TwoColumnWithRightCutout(17, 450, "appendix1"),
    this.TwoColumnWithRightCutout(18, 510, "appendix1"),
    this.TwoColumnWithRightCutout(19, 380, "appendix1"),
    this.TwoColumn(20, "appendix1"),
    this.TwoColumnWithRightCutout(21, 0, "appendix2"),
    this.TwoColumnWithRightCutout(22, 460, "appendix2"),
    this.TwoColumnWithRightCutout(23, 490, "appendix2"),
    this.TwoColumn(24, "appendix2"),
    this.TwoColumnWithRightCutout(25, 390, "appendix2"),
    this.TwoColumn(26, "appendix2"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      canonical: {
        name: "pfs2-22/map1",
        priority: 0,
      },
      nameInfo: {
        x: 79.5,
        y: 674.3508,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 8,
      width: 975,
      height: 1300,
      imageLeft: 23,
      imageRight: 952,
      imageCols: 24,
      imageTop: 28,
      imageBottom: 1266,
      imageRows: 32,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/pfs/maps/pfs2-22-map1.json",
      journals: [
        {
          x: 1350,
          y: 2150,
          name: "A1.",
        },
        {
          x: 1050,
          y: 1250,
          name: "A2.",
        },
        {
          x: 1750,
          y: 1650,
          name: "A3.",
        },
        {
          x: 2050,
          y: 1150,
          name: "A4.",
        },
        {
          x: 2600,
          y: 1750,
          name: "A5.",
        },
        {
          x: 2950,
          y: 1450,
          name: "A6.",
        },
        {
          x: 2550,
          y: 3350,
          name: "A7.",
        },
        {
          x: 2050,
          y: 2950,
          name: "A8.",
        },
        {
          x: 2050,
          y: 3750,
          name: "A8.",
        },
        {
          x: 1200,
          y: 3150,
          name: "A9.",
        },
      ],
    }),
  ];
  journals = [
    new CaptionImage({
      name: "journal1",
      page: 3,
      width: 403,
      height: 274,
    }),
    new CaptionImage({
      name: "npc1",
      page: 4,
      width: 739,
      height: 1011,
    }),
    new CaptionImage({
      name: "npc2",
      page: 5,
      width: 448,
      height: 418,
    }),
    new CaptionImage({
      name: "npc3",
      page: 6,
      width: 788,
      height: 957,
    }),
    new CaptionImage({
      name: "npc4",
      page: 9,
      width: 1068,
      height: 1156,
    }),
    new CaptionImage({
      name: "npc5",
      page: 13,
      width: 966,
      height: 1161,
    }),
    new CaptionImage({
      name: "npc6",
      page: 28,
      width: 468,
      height: 579,
    }),
    new CaptionImage({
      name: "npc7",
      page: 28,
      width: 478,
      height: 609,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Scenario #2-22" &&
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
