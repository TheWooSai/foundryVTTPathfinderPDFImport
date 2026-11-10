import { PFSSeason1Base } from "./base.js";
import { CaptionImage } from "../../../core/images.js";
import { ModuleSceneTiled } from "../../../core/module-scene.js";

export class PFS1_Q7 extends PFSSeason1Base {
  prefix = "pfs-q7";
  fullName = "PFS Q7 - A Curious Claim";
  pages = [
    this.TwoColumn(3),
    this.TwoColumnWithMap(4, 320),
    this.TwoColumnWithRightCutout(5, 590),
    this.TwoColumnWithRightCutout(6, 590, "appendix1"),
    this.TwoColumnWithRightCutout(7, 590, "appendix2"),
  ];
  scenes = [
    new ModuleSceneTiled({
      name: "map1",
      nameInfo: {
        x: 38.5,
        y: 674.1672,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 4,
      width: 380,
      height: 380,
      imageLeft: 16,
      imageTop: 11,
      imageRight: 364,
      imageBottom: 360,
      imageRows: 6,
      imageCols: 6,
      numTileCols: 3,
      numTileRows: 2,
      tileRotations: [
        [0, 0, 0],
        [2, 1, 2],
      ],
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
      page: 5,
      width: 416,
      height: 416,
    }),
    new CaptionImage({
      name: "npc2",
      page: 8,
      width: 991,
      height: 1359,
    }),
    new CaptionImage({
      name: "npc3",
      page: 9,
      width: 1053,
      height: 1285,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "PATHFINDER SOCIETY QUEST #7" &&
        t.fontId === "GoodOT-CondBold:10" &&
        t.page === 1,
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    for (const i in text) {
      const t = text[i];
      if (
        t.fontName === "GoodOT" &&
        ((t.page === 6 && Math.abs(t.x - 72) < 1 && t.y < 450) ||
          (t.page === 6 && Math.abs(t.x - 312) < 1 && t.y < 570) ||
          (t.page === 7 && Math.abs(t.x - 72) < 1 && t.y < 450) ||
          (t.page === 7 && Math.abs(t.x - 312) < 1 && t.y < 570))
      ) {
        text[i].isLeftAligned = false;
        text[i].isIndented = true;
      }
    }
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
