import { PFSSeason1Base } from "./base.js";
import { CaptionImage } from "../../../core/images.js";
import { ModuleScene } from "../../../core/module-scene.js";

export class PFS1_24 extends PFSSeason1Base {
  prefix = "pfs-1-24";
  fullName = "PFS #1-24 - Lightning Strikes Stars Fall";
  pages = [
    this.TwoColumnWithRightCutout(3, 340),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumn(6),
    this.TwoColumn(8),
    this.TwoColumn(9),
    this.TwoColumn(11),
    this.TwoColumnWithLeftCutout(12, 520),
    this.TwoColumnWithMap(13, 315),
    this.TwoColumn(14),
    this.TwoColumn(15),
    this.TwoColumnWithRightCutout(16, 490, "appendix1"),
    this.TwoColumnWithRightCutout(17, 550, "appendix1"),
    this.TwoColumnWithRightCutout(18, 440, "appendix1"),
    this.TwoColumn(19, "appendix1"),
    this.TwoColumnWithRightCutout(20, 500, "appendix2"),
    this.TwoColumnWithRightCutout(21, 550, "appendix2"),
    this.TwoColumnWithRightCutout(22, 460, "appendix2"),
    this.TwoColumn(23, "appendix2"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      nameInfo: {
        x: 72,
        y: 675,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 7,
      width: 1306,
      height: 1046,
      imageLeft: 3,
      imageRight: 1302,
      imageCols: 24,
      imageTop: 3,
      imageBottom: 1045,
      imageRows: 30,
      rotateCW: 1,
      globalLight: true,
    }),
    new ModuleScene({
      name: "map2",
      nameInfo: {
        x: 72,
        y: 675,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 10,
      width: 1041,
      height: 1302,
      imageLeft: 11,
      imageRight: 1030,
      imageCols: 24,
      imageTop: 14,
      imageBottom: 1288,
      imageRows: 30,
      rotateCW: 2,
      globalLight: true,
    }),
    new ModuleScene({
      name: "map3",
      nameInfo: {
        x: 43.9282,
        y: 675,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 13,
      width: 1124,
      height: 750,
      imageLeft: 31,
      imageRight: 994,
      imageCols: 26,
      imageTop: 54,
      imageBottom: 684,
      imageRows: 17,
      globalLight: true,
    }),
  ];
  journals = [
    new CaptionImage({
      name: "npc1",
      page: 24,
      width: 1261,
      height: 1200,
    }),
    new CaptionImage({
      name: "npc2",
      page: 25,
      width: 806,
      height: 900,
    }),
    new CaptionImage({
      name: "npc3",
      page: 26,
      width: 911,
      height: 1205,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "PATHFINDER SOCIETY SCENARIO #1\u201324" &&
        t.fontId === "GoodOT-CondBold:10" &&
        t.page === 1,
    );
  }
  finalize(moduleData) {}
}
