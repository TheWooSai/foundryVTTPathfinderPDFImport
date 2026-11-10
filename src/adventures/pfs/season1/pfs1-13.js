import { PFSSeason1Base } from "./base.js";
import { AdventureImage, CaptionImage } from "../../../core/images.js";
import { ModuleScene } from "../../../core/module-scene.js";

export class PFS1_13 extends PFSSeason1Base {
  prefix = "pfs-1-13";
  fullName = "PFS #1-13 - Devil at the Crossroads";
  pages = [
    this.TwoColumnWithRightCutout(3, 360),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumn(7),
    this.TwoColumnWithRightCutout(9, 365),
    this.TwoColumn(10),
    this.TwoColumn(11),
    this.TwoColumnWithRightCutout(12, 140),
    this.TwoColumn(13),
    this.TwoColumn(14),
    this.TwoColumn(15),
    this.TwoColumn(16),
    this.TwoColumnWithMap(17, 245),
    this.TwoColumn(18),
    this.TwoColumnWithRightCutout(19, 0, "appendix1"),
    this.TwoColumnWithRightCutout(20, 580, "appendix1"),
    this.TwoColumnWithRightCutout(21, 485, "appendix1"),
    this.TwoColumn(22, "appendix1"),
    this.TwoColumnWithRightCutout(23, 485, "appendix1"),
    this.TwoColumnWithRightCutout(24, 0, "appendix2"),
    this.TwoColumnWithRightCutout(25, 570, "appendix2"),
    this.TwoColumnWithRightCutout(26, 500, "appendix2"),
    this.TwoColumnWithRightCutout(27, 500, "appendix2"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      nameInfo: {
        x: 72.4808,
        y: 679.5,
      },
      nameFn: (name) => this.sentenceCase(name).substr(3),
      page: 6,
      width: 1305,
      height: 1048,
      imageLeft: 10,
      imageRight: 1295,
      imageCols: 30,
      imageTop: 10,
      imageBottom: 1038,
      imageRows: 24,
      globalLight: true,
    }),
    new ModuleScene({
      name: "map2",
      nameInfo: {
        x: 72,
        y: 679.5,
      },
      nameFn: (name) => this.sentenceCase(name).substr(3),
      page: 8,
      width: 975,
      height: 1300,
      imageLeft: 5,
      imageRight: 971,
      imageCols: 24,
      imageTop: 32,
      imageBottom: 1160,
      imageRows: 28,
      globalLight: true,
      detailsFile: "/pfs/maps/pfs1-13-map2.json",
      journals: [
        {
          x: 1950,
          y: 1950,
          name: "B1.",
        },
        {
          x: 2250,
          y: 1750,
          name: "B2.",
        },
        {
          x: 2550,
          y: 1150,
          name: "B3.",
        },
        {
          x: 2850,
          y: 1750,
          name: "B4.",
        },
        {
          x: 2350,
          y: 2150,
          name: "B5.",
        },
        {
          x: 2900,
          y: 3100,
          name: "B6.",
        },
        {
          x: 1850,
          y: 3150,
          name: "B7.",
        },
        {
          x: 2250,
          y: 3300,
          name: "B11.",
        },
        {
          x: 2450,
          y: 3600,
          name: "B12.",
        },
        {
          x: 1150,
          y: 2850,
          name: "B13.",
        },
      ],
    }),
  ];
  journals = [
    new AdventureImage({
      name: "journal1",
      page: 3,
      width: 926,
      height: 507,
    }),
    new CaptionImage({
      name: "npc1",
      page: 29,
      width: 1182,
      height: 1182,
    }),
    new CaptionImage({
      name: "npc2",
      page: 30,
      width: 1182,
      height: 1182,
    }),
    new CaptionImage({
      name: "npc3",
      page: 31,
      width: 1182,
      height: 1182,
    }),
    new CaptionImage({
      name: "npc4",
      page: 32,
      width: 1500,
      height: 1500,
    }),
    new CaptionImage({
      name: "npc5",
      page: 33,
      width: 1500,
      height: 1500,
    }),
    new CaptionImage({
      name: "npc6",
      page: 28,
      width: 1240,
      height: 1553,
    }),
    new CaptionImage({
      name: "npc7",
      page: 34,
      width: 1261,
      height: 1350,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "PATHFINDER SOCIETY SCENARIO #1\u201313" &&
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
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
