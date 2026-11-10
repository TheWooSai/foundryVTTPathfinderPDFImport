import { PFSSeason1Base } from "./base.js";
import { CaptionImage } from "../../../core/images.js";
import { ModuleScene } from "../../../core/module-scene.js";

export class PFS1_04 extends PFSSeason1Base {
  prefix = "pfs-1-04";
  fullName = "PFS #1-04 - Bandits of Immenwood";
  pages = [
    this.TwoColumnWithRightCutout(3, 370),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumnWithLeftCutout(6, 70),
    this.TwoColumn(7),
    this.TwoColumnWithLeftCutout(8, 200),
    this.TwoColumn(10),
    this.TwoColumn(12),
    this.TwoColumnWithMap(13, 315),
    this.TwoColumn(15),
    this.TwoColumnWithRightCutout(18, 570, "appendix1"),
    this.TwoColumnWithLeftCutout(19, 580, "appendix1"),
    this.TwoColumnWithRightCutout(20, 540, "appendix1"),
    this.TwoColumnWithLeftCutout(21, 520, "appendix1"),
    this.TwoColumnWithRightCutout(22, 580, "appendix1"),
    this.TwoColumnWithLeftCutout(23, 510, "appendix1"),
    this.TwoColumnWithRightCutout(24, 570, "appendix2"),
    this.TwoColumnWithLeftCutout(25, 520, "appendix2"),
    this.TwoColumnWithRightCutout(26, 520, "appendix2"),
    this.TwoColumnWithLeftCutout(27, 520, "appendix2"),
    this.TwoColumnWithRightCutout(28, 580, "appendix2"),
    this.TwoColumnWithLeftCutout(29, 520, "appendix2"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      nameInfo: {
        x: 57.2692,
        y: 679.1533,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 9,
      width: 1300,
      height: 1044,
      imageLeft: 10,
      imageRight: 1289,
      imageCols: 24,
      imageTop: 11,
      imageBottom: 1034,
      imageRows: 30,
      rotateCW: 3,
      globalLight: true,
      detailsFile: "/flipmats/maps/tavern1.json",
    }),
    new ModuleScene({
      name: "map2",
      nameInfo: {
        x: 58.5,
        y: 675.0001,
      },
      nameFn: (name) => this.sentenceCase(name).substring(4).trim(),
      page: 11,
      width: 1303,
      height: 1043,
      imageLeft: 17,
      imageRight: 1289,
      imageCols: 24,
      imageTop: 13,
      imageBottom: 1031,
      imageRows: 30,
      rotateCW: 3,
      globalLight: true,
    }),
    new ModuleScene({
      name: "map3",
      nameInfo: {
        x: 41.25,
        y: 675.0001,
      },
      nameFn: (name) => this.sentenceCase(name).substring(4).trim(),
      page: 13,
      width: 1124,
      height: 750,
      imageLeft: 36,
      imageRight: 1111,
      imageCols: 29,
      imageTop: 7,
      imageBottom: 713,
      imageRows: 19,
      globalLight: true,
    }),
    new ModuleScene({
      name: "map4",
      nameInfo: {
        x: 58.0192,
        y: 674.7501,
      },
      nameFn: (name) => this.sentenceCase(name).substring(4).trim(),
      page: 14,
      width: 1303,
      height: 1043,
      imageLeft: 16,
      imageRight: 1289,
      imageCols: 24,
      imageTop: 11,
      imageBottom: 1032,
      imageRows: 30,
      rotateCW: 3,
      globalLight: true,
    }),
    new ModuleScene({
      name: "map5",
      nameInfo: {
        x: 38.25,
        y: 675.0001,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 16,
      width: 1124,
      height: 750,
      imageLeft: 37,
      imageRight: 1112,
      imageCols: 29,
      imageTop: 18,
      imageBottom: 722,
      imageRows: 19,
      globalLight: true,
    }),
  ];
  journals = [
    new CaptionImage({
      name: "npc1",
      page: 30,
      width: 600,
      height: 600,
    }),
    new CaptionImage({
      name: "npc2",
      page: 31,
      width: 1022,
      height: 1172,
    }),
    new CaptionImage({
      name: "npc3",
      page: 32,
      width: 1238,
      height: 1139,
    }),
    new CaptionImage({
      name: "npc4",
      page: 33,
      width: 1043,
      height: 1392,
    }),
    new CaptionImage({
      name: "npc5",
      page: 34,
      width: 1177,
      height: 1177,
    }),
    new CaptionImage({
      name: "npc6",
      page: 35,
      width: 1251,
      height: 1187,
    }),
    new CaptionImage({
      name: "npc7",
      page: 36,
      width: 927,
      height: 1200,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "PATHFINDER SOCIETY SCENARIO #1\u201304" &&
        t.fontId === "GoodOT-CondBold:10" &&
        t.page === 1,
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    this.changeFontId(text, 3, 72, 663, "GoodOT-Bold:12");
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
