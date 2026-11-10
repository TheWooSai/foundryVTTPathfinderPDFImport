import { PFSSeason1Base } from "./base.js";
import { CaptionImage } from "../../../core/images.js";
import { ModuleScene } from "../../../core/module-scene.js";

export class PFS1_Q5 extends PFSSeason1Base {
  prefix = "pfs-q5";
  fullName = "PFS Q5 - The Dragon Who Stole Evoking Day";
  pages = [
    this.TwoColumn(3),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumn(6),
    this.TwoColumn(8),
    this.TwoColumnWithRightCutout(9, 510, "appendix1"),
    this.TwoColumnWithRightCutout(10, 460, "appendix2"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      nameInfo: {
        x: 57.75,
        y: 686.3524,
      },
      nameFn: (name) => this.sentenceCase(name).substr(3),
      page: 7,
      width: 1326,
      height: 1065,
      imageLeft: 11,
      imageRight: 1315,
      imageCols: 24,
      imageTop: 12,
      imageBottom: 1055,
      imageRows: 30,
      rotateCW: 3,
      globalLight: true,
    }),
  ];
  journals = [
    new CaptionImage({
      name: "journal1",
      page: 11,
      width: 1137,
      height: 929,
    }),
    new CaptionImage({
      name: "npc1",
      page: 2,
      width: 679,
      height: 558,
    }),
    new CaptionImage({
      name: "npc2",
      page: 4,
      width: 416,
      height: 416,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "PATHFINDER SOCIETY QUEST #5" &&
        t.fontId === "GoodOT-CondBold:10" &&
        t.page === 1,
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    for (const i in text) {
      const t = text[i];
      if (
        t.fontName === "GoodOT" &&
        ((t.page === 9 && Math.abs(t.x - 72) < 1 && t.y < 550) ||
          (t.page === 9 && Math.abs(t.x - 312) < 1 && t.y < 510) ||
          (t.page === 10 && Math.abs(t.x - 72) < 1 && t.y < 550) ||
          (t.page === 10 && Math.abs(t.x - 312) < 1 && t.y < 460))
      ) {
        text[i].isLeftAligned = false;
        text[i].isIndented = true;
      }
    }
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
