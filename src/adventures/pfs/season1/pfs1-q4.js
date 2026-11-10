import { PFSSeason1Base } from "./base.js";
import { CaptionImage } from "../../../core/images.js";
import { ModuleScene } from "../../../core/module-scene.js";

export class PFS1_Q4 extends PFSSeason1Base {
  prefix = "pfs-q4";
  fullName = "PFS Q4 - Port Peril Pub Crawl";
  pages = [
    this.TwoColumnWithRightCutout(3, 390),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumn(6),
    this.TwoColumnWithRightCutout(7, 0),
    this.TwoColumn(8),
    this.TwoColumn(12),
    this.TwoColumnWithRightCutout(13, 570, "appendix1"),
    this.TwoColumnWithRightCutout(14, 580, "appendix1"),
    this.TwoColumnWithRightCutout(15, 580, "appendix1"),
    this.TwoColumnWithRightCutout(16, 580, "appendix2"),
    this.TwoColumnWithRightCutout(17, 580, "appendix2"),
    this.TwoColumnWithRightCutout(18, 580, "appendix2"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      canonical: {
        name: "flipmat/tavern3",
        priority: 0,
      },
      nameInfo: {
        x: 58.5,
        y: 687.5726,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 9,
      width: 1326,
      height: 1065,
      imageLeft: 11,
      imageRight: 1316,
      imageCols: 24,
      imageTop: 12,
      imageBottom: 1054,
      imageRows: 30,
      rotateCW: 1,
      globalLight: true,
      detailsFile: "/flipmats/maps/tavern3.json",
    }),
    new ModuleScene({
      name: "map2",
      canonical: {
        name: "flipmat/tavern2",
        priority: 0,
      },
      nameInfo: {
        x: 58.5,
        y: 687.5726,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 10,
      width: 1326,
      height: 1065,
      imageLeft: 11,
      imageRight: 1317,
      imageCols: 24,
      imageTop: 11,
      imageBottom: 1054,
      imageRows: 30,
      rotateCW: 1,
      globalLight: true,
      detailsFile: "/flipmats/maps/tavern2.json",
    }),
    new ModuleScene({
      name: "map3",
      canonical: {
        name: "flipmat/tavern1",
        priority: 0,
      },
      nameInfo: {
        x: 58.5,
        y: 683.0726,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 11,
      width: 1326,
      height: 1065,
      imageLeft: 11,
      imageRight: 1316,
      imageCols: 24,
      imageTop: 12,
      imageBottom: 1055,
      imageRows: 30,
      rotateCW: 1,
      globalLight: true,
      detailsFile: "/flipmats/maps/tavern1.json",
    }),
  ];
  journals = [
    new CaptionImage({
      name: "npc1",
      page: 4,
      width: 416,
      height: 416,
    }),
    new CaptionImage({
      name: "npc2",
      page: 19,
      width: 1219,
      height: 1163,
    }),
    new CaptionImage({
      name: "npc3",
      page: 20,
      width: 810,
      height: 1413,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "PATHFINDER SOCIETY QUEST #4" &&
        t.fontId === "GoodOT-CondBold:10" &&
        t.page === 1,
    );
  }
  finalize(moduleData) {}
}
