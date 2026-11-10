import { PFSSeason1Base } from "./base.js";
import { CaptionImage } from "../../../core/images.js";
import { ModuleScene } from "../../../core/module-scene.js";

export class PFS1_Q8 extends PFSSeason1Base {
  prefix = "pfs-q8";
  fullName = "PFS Q8 - Shadows of the Black Sovereign";
  pages = [
    this.TwoColumnWithRightCutout(3, 390),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumn(7),
    this.TwoColumnWithRightCutout(8, 580, "appendix1"),
    this.TwoColumnWithRightCutout(9, 580, "appendix2"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      nameInfo: {
        x: 72,
        y: 672.7747,
      },
      nameFn: (name) => this.sentenceCase(name).substr(3),
      page: 6,
      width: 1301,
      height: 1045,
      imageLeft: 10,
      imageRight: 1291,
      imageCols: 24,
      imageTop: 11,
      imageBottom: 1035,
      imageRows: 30,
      rotateCW: 3,
      globalLight: true,
      detailsFile: "/pfs/maps/pfs1-q8-map1.json",
    }),
  ];
  journals = [
    new CaptionImage({
      name: "journal1",
      page: 3,
      width: 409,
      height: 278,
    }),
    new CaptionImage({
      name: "npc1",
      page: 10,
      width: 1101,
      height: 1401,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "PATHFINDER SOCIETY QUEST #8" &&
        t.fontId === "GoodOT-CondBold:10" &&
        t.page === 1,
    );
  }
  finalize(moduleData) {}
}
