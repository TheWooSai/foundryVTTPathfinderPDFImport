import { PFSSeason1Base } from "./base.js";
import { CaptionImage } from "../../../core/images.js";
import { ModuleScene } from "../../../core/module-scene.js";

export class PFS1_14 extends PFSSeason1Base {
  prefix = "pfs-1-14";
  fullName = "PFS #1-14 - Lions of Katapesh";
  pages = [
    this.TwoColumnWithRightCutout(3, 380),
    this.TwoColumn(4),
    this.TwoColumnWithRightCutout(5, 370),
    this.TwoColumn(6),
    this.TwoColumn(7),
    this.TwoColumn(8),
    this.TwoColumn(10),
    this.TwoColumnWithLeftCutout(12, 0),
    this.TwoColumn(13),
    this.TwoColumnWithRightCutout(15, 540, "appendix1"),
    this.TwoColumn(16, "appendix1"),
    this.TwoColumnWithRightCutout(17, 480, "appendix1"),
    this.TwoColumnWithRightCutout(18, 540, "appendix1"),
    this.TwoColumn(19, "appendix1"),
    this.TwoColumnWithRightCutout(20, 540, "appendix2"),
    this.TwoColumn(21, "appendix2"),
    this.TwoColumn(22, "appendix2"),
    this.TwoColumnWithRightCutout(23, 480, "appendix2"),
    this.TwoColumnWithRightCutout(24, 440, "appendix2"),
    this.TwoColumn(25, "appendix2"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      nameInfo: {
        x: 72,
        y: 675,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 9,
      width: 1305,
      height: 1052,
      imageLeft: 22,
      imageRight: 1284,
      imageCols: 24,
      imageTop: 21,
      imageBottom: 1031,
      imageRows: 30,
      rotateCW: 3,
      globalLight: true,
    }),
    new ModuleScene({
      name: "map2",
      nameInfo: {
        x: 77.5,
        y: 672.7747,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 11,
      width: 974,
      height: 1299,
      imageLeft: 34,
      imageRight: 963,
      imageCols: 22,
      imageTop: 9,
      imageBottom: 1278,
      imageRows: 30,
      globalLight: true,
    }),
    new ModuleScene({
      name: "map3",
      nameInfo: {
        x: 72,
        y: 675,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 14,
      width: 1053,
      height: 1309,
      imageLeft: 16,
      imageRight: 1039,
      imageCols: 24,
      imageTop: 13,
      imageBottom: 1296,
      imageRows: 30,
      darkness: 0.2,
      detailsFile: "/pfs/maps/pfs1-14-map3.json",
    }),
  ];
  journals = [
    new CaptionImage({
      name: "npc1",
      page: 26,
      width: 915,
      height: 1325,
    }),
    new CaptionImage({
      name: "npc2",
      page: 27,
      width: 1261,
      height: 1304,
    }),
    new CaptionImage({
      name: "npc3",
      page: 28,
      width: 1247,
      height: 1150,
    }),
    new CaptionImage({
      name: "npc4",
      page: 29,
      width: 1020,
      height: 1453,
    }),
    new CaptionImage({
      name: "npc5",
      page: 30,
      width: 1193,
      height: 1450,
    }),
    new CaptionImage({
      name: "npc6",
      page: 31,
      width: 1191,
      height: 1366,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "PATHFINDER SOCIETY SCENARIO #1\u201314" &&
        t.fontId === "GoodOT-CondBold:10" &&
        t.page === 1,
    );
  }
  finalize(moduleData) {}
}
