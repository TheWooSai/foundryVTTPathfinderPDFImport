import { PFSSeason1Base } from "./base.js";
import { AdventureImage, CaptionImage } from "../../../core/images.js";
import { ModuleScene } from "../../../core/module-scene.js";

export class PFS1_20 extends PFSSeason1Base {
  prefix = "pfs-1-20";
  fullName = "PFS #1-20 - The Lost Legend";
  pages = [
    this.TwoColumnWithRightCutout(3, 360),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumnWithLeftCutout(6, 440),
    this.TwoColumnWithRightCutout(7, 150),
    this.TwoColumn(8),
    this.TwoColumn(10),
    this.TwoColumn(11),
    this.TwoColumn(13),
    this.TwoColumnWithRightCutout(15, 430),
    this.TwoColumn(16),
    this.TwoColumn(17),
    this.TwoColumn(19),
    this.TwoColumnWithRightCutout(20, 500, "appendix1"),
    this.TwoColumn(21, "appendix1"),
    this.TwoColumnWithRightCutout(22, 0, "appendix1"),
    this.TwoColumnWithRightCutout(23, 460, "appendix1"),
    this.TwoColumn(24, "appendix1"),
    this.TwoColumnWithRightCutout(25, 460, "appendix2"),
    this.TwoColumn(26, "appendix2"),
    this.TwoColumn(27, "appendix2"),
    this.TwoColumnWithRightCutout(28, 580, "appendix2"),
    this.TwoColumnWithRightCutout(29, 520, "appendix2"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      nameInfo: {
        x: 72.975,
        y: 675.2747,
      },
      nameFn: (name) => this.sentenceCase(name).substr(3),
      page: 9,
      width: 1041,
      height: 1301,
      imageLeft: 0,
      imageRight: 1041,
      imageCols: 24,
      imageTop: 0,
      imageBottom: 1301,
      imageRows: 30,
      globalLight: true,
    }),
    new ModuleScene({
      name: "map2",
      nameInfo: {
        x: 72,
        y: 675.2747,
      },
      nameFn: (name) => this.sentenceCase(name).substr(3),
      page: 12,
      width: 1041,
      height: 1301,
      imageLeft: 0,
      imageRight: 1041,
      imageCols: 24,
      imageTop: 0,
      imageBottom: 1301,
      imageRows: 30,
      globalLight: true,
    }),
    new ModuleScene({
      name: "map3",
      nameInfo: {
        x: 82.8138,
        y: 675.2747,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 14,
      width: 971,
      height: 1300,
      imageLeft: 0,
      imageRight: 1e3,
      imageCols: 10,
      imageTop: 0,
      imageBottom: 1e3,
      imageRows: 10,
      gridType: "gridless",
      globalLight: true,
      gridDistance: 30,
    }),
    new ModuleScene({
      name: "map4",
      nameInfo: {
        x: 72,
        y: 674.0041,
      },
      nameFn: (name) => this.sentenceCase(name).substr(3),
      page: 18,
      width: 1041,
      height: 1301,
      imageLeft: 0,
      imageRight: 1041,
      imageCols: 24,
      imageTop: 0,
      imageBottom: 1301,
      imageRows: 30,
      globalLight: true,
    }),
  ];
  journals = [
    new AdventureImage({
      name: "journal1",
      page: 3,
      width: 437,
      height: 299,
    }),
    new CaptionImage({
      name: "npc1",
      page: 30,
      width: 1229,
      height: 1397,
    }),
    new CaptionImage({
      name: "npc2",
      page: 31,
      width: 1040,
      height: 1362,
    }),
    new CaptionImage({
      name: "npc3",
      page: 32,
      width: 1004,
      height: 1276,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "PATHFINDER SOCIETY SCENARIO #1\u201320" &&
        t.fontId === "GoodOT-CondBold:10" &&
        t.page === 1,
    );
  }
  finalize(moduleData) {}
}
