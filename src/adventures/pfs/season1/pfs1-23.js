import { PFSSeason1Base } from "./base.js";
import { AdventureImage, CaptionImage } from "../../../core/images.js";
import { ModuleScene } from "../../../core/module-scene.js";

export class PFS1_23 extends PFSSeason1Base {
  prefix = "pfs-1-23";
  fullName = "PFS #1-23 - The Star-Crossed Court";
  pages = [
    this.TwoColumnWithRightCutout(3, 363),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumn(6),
    this.TwoColumn(8),
    this.TwoColumn(9),
    this.TwoColumnWithLeftCutout(10, 200),
    this.TwoColumn(11),
    this.TwoColumnWithMap(12, 315),
    this.TwoColumn(13),
    this.TwoColumn(14),
    this.TwoColumn(15),
    this.TwoColumn(16),
    this.TwoColumn(17),
    this.TwoColumnWithRightCutout(18, 0, "appendix1"),
    this.TwoColumnWithRightCutout(19, 459, "appendix1"),
    this.TwoColumn(20, "appendix1"),
    this.TwoColumnWithRightCutout(21, 0, "appendix2"),
    this.TwoColumnWithRightCutout(22, 471, "appendix2"),
    this.TwoColumn(23, "appendix2"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      nameInfo: {
        x: 72,
        y: 675,
      },
      nameFn: (name) => this.sentenceCase(name).substr(3),
      page: 7,
      width: 1301,
      height: 1041,
      imageLeft: 1,
      imageRight: 1302,
      imageCols: 24,
      imageTop: 1,
      imageBottom: 1042,
      imageRows: 30,
      rotateCW: 3,
      globalLight: true,
    }),
    new ModuleScene({
      name: "map2",
      nameInfo: {
        x: 43.9282,
        y: 672.7747,
      },
      nameFn: (name) => this.sentenceCase(name).substr(3),
      page: 12,
      width: 1124,
      height: 750,
      imageLeft: 30,
      imageRight: 1101,
      imageCols: 24,
      imageTop: 16,
      imageBottom: 731,
      imageRows: 16,
      globalLight: true,
      detailsFile: "/pfs/maps/pfs1-23-map2.json",
    }),
  ];
  journals = [
    new AdventureImage({
      name: "journal1",
      page: 3,
      width: 437,
      height: 298,
    }),
    new CaptionImage({
      name: "npc1",
      page: 24,
      width: 867,
      height: 1300,
    }),
    new CaptionImage({
      name: "npc2",
      page: 25,
      width: 1261,
      height: 1631,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "PATHFINDER SOCIETY SCENARIO #1\u201323" &&
        t.fontId === "GoodOT-CondBold:10" &&
        t.page === 1,
    );
  }
  finalize(moduleData) {}
}
