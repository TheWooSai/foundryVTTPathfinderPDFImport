import { PFSSeason2Base } from "./base.js";
import { CaptionImage } from "../../../core/images.js";
import { ModuleScene } from "../../../core/module-scene.js";

export class PFS2_06 extends PFSSeason2Base {
  prefix = "pfs-2-06";
  fullName = "PFS #2-06 - The Crashing Wave";
  pages = [
    this.TwoColumnWithRightCutout(3, 320),
    this.TwoColumn(4),
    this.TwoColumnWithMap(5, 327),
    this.TwoColumn(6),
    this.TwoColumn(7),
    this.TwoColumn(8),
    this.TwoColumn(9),
    this.TwoColumn(11),
    this.TwoColumn(12),
    this.TwoColumn(15),
    this.TwoColumn(16),
    this.TwoColumn(18),
    this.TwoColumnWithRightCutout(19, 0, "appendix1"),
    this.TwoColumnWithRightCutout(20, 580, "appendix1"),
    this.TwoColumnWithRightCutout(21, 580, "appendix1"),
    this.TwoColumnWithRightCutout(22, 580, "appendix1"),
    this.TwoColumnWithRightCutout(23, 580, "appendix1"),
    this.TwoColumnWithRightCutout(24, 510, "appendix2"),
    this.TwoColumnWithRightCutout(25, 580, "appendix2"),
    this.TwoColumnWithRightCutout(26, 580, "appendix2"),
    this.TwoColumnWithRightCutout(27, 580, "appendix2"),
    this.TwoColumnWithRightCutout(28, 580, "appendix2"),
    this.TwoColumn(29, "appendix2"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      nameInfo: {
        x: 42,
        y: 686.3508,
      },
      nameFn: (name) => this.sentenceCase(name).substring(4),
      page: 5,
      width: 1124,
      height: 750,
      imageLeft: 18,
      imageRight: 1104,
      imageCols: 24,
      imageTop: 11,
      imageBottom: 735,
      imageRows: 16,
      globalLight: true,
    }),
    new ModuleScene({
      name: "map2",
      nameInfo: {
        x: 57.5,
        y: 686.3508,
      },
      nameFn: (name) => this.sentenceCase(name).substring(4),
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
        x: 57.5,
        y: 683.8508,
      },
      nameFn: (name) => this.sentenceCase(name).substring(4),
      page: 13,
      width: 1064,
      height: 1328,
      imageLeft: 0,
      imageRight: 1064,
      imageCols: 27,
      imageTop: 79,
      imageBottom: 1300,
      imageRows: 31,
      globalLight: true,
    }),
    new ModuleScene({
      name: "map4",
      nameInfo: {
        x: 57.5,
        y: 672.3508,
      },
      nameFn: (name) => this.sentenceCase(name).substring(4),
      page: 14,
      width: 1064,
      height: 1328,
      imageLeft: 44,
      imageRight: 1021,
      imageCols: 22,
      imageTop: 46,
      imageBottom: 1286,
      imageRows: 28,
      globalLight: true,
    }),
    new ModuleScene({
      name: "map5",
      nameInfo: {
        x: 57.5,
        y: 686.3508,
      },
      nameFn: (name) => this.sentenceCase(name).substring(4),
      page: 17,
      width: 1064,
      height: 1328,
      imageLeft: 43,
      imageRight: 1019,
      imageCols: 22,
      imageTop: 46,
      imageBottom: 1286,
      imageRows: 28,
      globalLight: true,
    }),
  ];
  journals = [
    new CaptionImage({
      name: "npc1",
      page: 4,
      width: 792,
      height: 1072,
    }),
    new CaptionImage({
      name: "npc2",
      page: 6,
      width: 1017,
      height: 1321,
    }),
    new CaptionImage({
      name: "npc3",
      page: 7,
      width: 816,
      height: 1189,
    }),
    new CaptionImage({
      name: "npc4",
      page: 9,
      width: 1259,
      height: 777,
    }),
    new CaptionImage({
      name: "npc5",
      page: 16,
      width: 945,
      height: 1200,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Scenario #2-06" &&
        t.fontId === "GoodOT-Bold:15" &&
        t.page === 1,
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    const i = text.findIndex((x) => x.text === "[one-action[one-action]");
    if (i !== -1) {
      text[i].text = "[one-action]";
    }
    this.markIndented(text, 28, 72, 327);
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
