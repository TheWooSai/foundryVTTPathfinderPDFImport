import { PFSSeason2Base } from "./base.js";
import { CaptionImage } from "../../../core/images.js";
import { ModuleScene } from "../../../core/module-scene.js";

export class PFS2_02 extends PFSSeason2Base {
  prefix = "pfs-2-02";
  fullName = "PFS #2-02 - Mountains of Sea and Sky";
  pages = [
    this.TwoColumnWithRightCutout(3, 320),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumn(7),
    this.TwoColumnWithRightCutout(8, 400),
    this.TwoColumn(9),
    this.TwoColumn(10),
    this.TwoColumn(11),
    this.TwoColumn(12),
    this.TwoColumn(13),
    this.TwoColumn(15),
    this.TwoColumn(17),
    this.TwoColumn(18),
    this.TwoColumnWithRightCutout(19, 0, "appendix1"),
    this.TwoColumnWithRightCutout(20, 0, "appendix1"),
    this.TwoColumnWithRightCutout(21, 0, "appendix1"),
    this.TwoColumnWithRightCutout(22, 0, "appendix1"),
    this.TwoColumnWithRightCutout(23, 0, "appendix2"),
    this.TwoColumnWithRightCutout(24, 0, "appendix2"),
    this.TwoColumnWithRightCutout(25, 0, "appendix2"),
    this.TwoColumnWithRightCutout(26, 0, "appendix2"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      nameInfo: {
        x: 72,
        y: 674.3508,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 6,
      width: 1046,
      height: 1304,
      imageLeft: 6,
      imageRight: 1040,
      imageCols: 24,
      imageTop: 7,
      imageBottom: 1299,
      imageRows: 30,
      globalLight: true,
    }),
    new ModuleScene({
      name: "map2",
      nameInfo: {
        x: 72,
        y: 674.1846,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 14,
      width: 1041,
      height: 1301,
      imageLeft: 1,
      imageRight: 1041,
      imageCols: 24,
      imageTop: 1,
      imageBottom: 1301,
      imageRows: 30,
      globalLight: true,
    }),
    new ModuleScene({
      name: "map3",
      nameInfo: {
        x: 72,
        y: 674.3508,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 16,
      width: 1041,
      height: 1301,
      imageLeft: 1,
      imageRight: 1041,
      imageCols: 24,
      imageTop: 1,
      imageBottom: 1301,
      imageRows: 30,
      globalLight: true,
    }),
  ];
  journals = [
    new CaptionImage({
      name: "npc1",
      page: 7,
      width: 609,
      height: 1171,
    }),
    new CaptionImage({
      name: "npc2",
      page: 11,
      width: 609,
      height: 940,
    }),
    new CaptionImage({
      name: "npc3",
      page: 18,
      width: 633,
      height: 949,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Scenario #2-02" &&
        t.fontId === "GoodOT-Bold:15" &&
        t.page === 1,
    );
  }
  finalize(moduleData) {}
}
