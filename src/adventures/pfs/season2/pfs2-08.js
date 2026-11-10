import { PFSSeason2Base } from "./base.js";
import { CaptionImage } from "../../../core/images.js";
import { ModuleScene } from "../../../core/module-scene.js";

export class PFS2_08 extends PFSSeason2Base {
  prefix = "pfs-2-08";
  fullName = "PFS #2-08 - A Frosty Mug";
  pages = [
    this.TwoColumnWithRightCutout(3, 320),
    this.TwoColumn(4),
    this.TwoColumnWithRightCutout(5, 440),
    this.TwoColumn(6),
    this.TwoColumnWithLeftCutout(8, 510),
    this.TwoColumn(9),
    this.TwoColumnWithMap(11, 327),
    this.TwoColumn(12),
    this.TwoColumn(13),
    this.TwoColumn(14),
    this.TwoColumn(15),
    this.TwoColumn(16),
    this.TwoColumn(18),
    this.TwoColumn(19),
    this.TwoColumnWithRightCutout(20, 0, "appendix1"),
    this.TwoColumnWithRightCutout(21, 0, "appendix1"),
    this.TwoColumnWithRightCutout(22, 570, "appendix1"),
    this.TwoColumnWithRightCutout(23, 0, "appendix2"),
    this.TwoColumnWithRightCutout(24, 0, "appendix2"),
    this.TwoColumnWithRightCutout(25, 0, "appendix2"),
    this.TwoColumn(26, "appendix2"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      nameInfo: {
        x: 57.5,
        y: 686.3508,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 7,
      width: 1064,
      height: 1328,
      imageLeft: 0,
      imageRight: 1064,
      imageCols: 24,
      imageTop: 0,
      imageBottom: 1328,
      imageRows: 30,
      globalLight: true,
    }),
    new ModuleScene({
      name: "map2",
      nameInfo: {
        x: 57.5,
        y: 683.8508,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 10,
      width: 1064,
      height: 1328,
      imageLeft: 0,
      imageRight: 1064,
      imageCols: 24,
      imageTop: 0,
      imageBottom: 1328,
      imageRows: 30,
      globalLight: true,
    }),
    new ModuleScene({
      name: "map3",
      nameInfo: {
        x: 41,
        y: 685.3508,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 11,
      width: 1124,
      height: 750,
      imageLeft: 0,
      imageRight: 1e3,
      imageCols: 10,
      imageTop: 0,
      imageBottom: 1e3,
      imageRows: 10,
      globalLight: true,
      gridType: "gridless",
      journals: [
        {
          x: 1279.11,
          y: 497.91,
          name: "C1.",
        },
        {
          x: 1013.11,
          y: 616.91,
          name: "C2.",
        },
        {
          x: 817.11,
          y: 651.91,
          name: "C3.",
        },
        {
          x: 410.37,
          y: 285.05,
          name: "C4.",
        },
        {
          x: 595.37,
          y: 357.05,
          name: "C5.",
        },
        {
          x: 771.37,
          y: 466.05,
          name: "C6.",
        },
        {
          x: 759.37,
          y: 343.05,
          name: "C7.",
        },
        {
          x: 474,
          y: 616,
          name: "C8.",
        },
      ],
    }),
  ];
  journals = [
    new CaptionImage({
      name: "npc1",
      page: 4,
      width: 787,
      height: 1150,
    }),
    new CaptionImage({
      name: "npc2",
      page: 6,
      width: 547,
      height: 729,
    }),
    new CaptionImage({
      name: "npc3",
      page: 8,
      width: 857,
      height: 1142,
    }),
    new CaptionImage({
      name: "npc4",
      page: 13,
      width: 935,
      height: 1199,
    }),
    new CaptionImage({
      name: "npc5",
      page: 16,
      width: 797,
      height: 1200,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Scenario #2-08" &&
        t.fontId === "GoodOT-Bold:15" &&
        t.page === 1,
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    this.changeFontId(text, 5, 72, 687, "GoodOT-Bold:9");
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
