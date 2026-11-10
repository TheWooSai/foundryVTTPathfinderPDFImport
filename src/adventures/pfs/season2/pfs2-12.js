import { PFSSeason2Base } from "./base.js";
import { AdventureImage, CaptionImage } from "../../../core/images.js";
import { ModuleScene } from "../../../core/module-scene.js";

export class PFS2_12 extends PFSSeason2Base {
  prefix = "pfs-2-12";
  fullName = "PFS #2-12 - Snakes in the Grass";
  normalFontIds = this.normalFontIds.concat(["SabonLTStd-Roman:9"]);
  pages = [
    this.TwoColumnWithRightCutout(3, 330),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumnWithLeftCutout(6, 330),
    this.TwoColumn(7),
    this.TwoColumn(8),
    this.TwoColumn(9),
    this.TwoColumn(10),
    this.TwoColumn(11),
    this.TwoColumn(13),
    this.TwoColumn(14),
    this.TwoColumn(15),
    this.TwoColumnWithLeftCutout(16, 440),
    this.TwoColumn(18),
    this.TwoColumn(19),
    this.TwoColumnWithRightCutout(20, 0, "appendix1"),
    this.TwoColumnWithRightCutout(21, 0, "appendix1"),
    this.TwoColumnWithRightCutout(22, 0, "appendix1"),
    this.TwoColumnWithRightCutout(23, 0, "appendix1"),
    this.TwoColumnWithRightCutout(24, 0, "appendix2"),
    this.TwoColumnWithRightCutout(25, 560, "appendix2"),
    this.TwoColumnWithRightCutout(26, 480, "appendix2"),
    this.TwoColumnWithRightCutout(27, 0, "appendix2"),
    this.OneColumn(30, "handout"),
    this.OneColumn(31, "handout"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      canonical: {
        name: "flipmat/forbidden-jungle",
        priority: 0,
      },
      nameInfo: {
        x: 72,
        y: 674.3508,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3),
      page: 12,
      width: 1040,
      height: 1299,
      imageLeft: 0,
      imageRight: 1040,
      imageCols: 24,
      imageTop: 0,
      imageBottom: 1299,
      imageRows: 30,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/pfs/maps/pfs2-12-map1.json",
      journals: [
        {
          x: 2050,
          y: 950,
          name: "B1.",
        },
        {
          x: 2450,
          y: 1850,
          name: "B2.",
        },
        {
          x: 2750,
          y: 2350,
          name: "B3.",
        },
        {
          x: 2650,
          y: 2950,
          name: "B4.",
        },
        {
          x: 1250,
          y: 2850,
          name: "B5.",
        },
        {
          x: 950,
          y: 3250,
          name: "B6.",
        },
        {
          x: 750,
          y: 1250,
          name: "B7.",
        },
      ],
    }),
    new ModuleScene({
      name: "map2",
      canonical: {
        name: "flipmat/twisted-caverns",
        priority: 0,
      },
      nameInfo: {
        x: 191.3282,
        y: 678.497,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3),
      page: 17,
      width: 1040,
      height: 1299,
      imageLeft: 0,
      imageRight: 1040,
      imageCols: 24,
      imageTop: 0,
      imageBottom: 1299,
      imageRows: 30,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/pfs/maps/pfs2-12-map2.json",
      journals: [
        {
          x: 1100,
          y: 850,
          name: "C1.",
        },
        {
          x: 1550,
          y: 1050,
          name: "C2.",
        },
        {
          x: 850,
          y: 1950,
          name: "C2.",
        },
        {
          x: 950,
          y: 2900,
          name: "C2.",
        },
        {
          x: 2900,
          y: 3100,
          name: "C2.",
        },
        {
          x: 2300,
          y: 1600,
          name: "C3.",
        },
        {
          x: 2300,
          y: 2e3,
          name: "C4.",
        },
        {
          x: 2300,
          y: 2700,
          name: "C5.",
        },
        {
          x: 1650,
          y: 2250,
          name: "C6.",
        },
      ],
    }),
  ];
  journals = [
    new CaptionImage({
      name: "npc1",
      page: 4,
      width: 687,
      height: 1006,
    }),
    new CaptionImage({
      name: "npc2",
      page: 8,
      width: 805,
      height: 981,
    }),
    new CaptionImage({
      name: "npc3",
      page: 9,
      width: 700,
      height: 1050,
    }),
    new AdventureImage({
      name: "npc4",
      page: 28,
      width: 679,
      height: 490,
    }),
    new CaptionImage({
      name: "npc5",
      page: 29,
      width: 664,
      height: 473,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Scenario #2-12" &&
        t.fontId === "GoodOT-Bold:15" &&
        t.page === 1,
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    this.removeText(text, 3, 255.5405, 654.8302);
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
