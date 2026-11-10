import { PFSSeason1Base } from "./base.js";
import { CaptionImage } from "../../../core/images.js";
import { ModuleScene } from "../../../core/module-scene.js";

export class PFS1_Q3 extends PFSSeason1Base {
  prefix = "pfs-q3";
  fullName = "PFS Q3 - Grehunde's Gorget";
  pages = [
    this.TwoColumn(3),
    this.TwoColumn(4),
    this.TwoColumn(6),
    this.TwoColumn(7),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      nameInfo: {
        x: 58.5,
        y: 683.0726,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 5,
      width: 1326,
      height: 1065,
      rotateCW: 1,
      imageLeft: 11,
      imageTop: 11,
      imageRight: 1315,
      imageBottom: 1054,
      imageRows: 30,
      imageCols: 24,
    }),
  ];
  journals = [
    new CaptionImage({
      name: "journal1",
      page: 6,
      width: 496,
      height: 566,
    }),
    new CaptionImage({
      name: "npc1",
      page: 8,
      width: 1091,
      height: 1636,
    }),
    new CaptionImage({
      name: "npc2",
      page: 9,
      width: 1258,
      height: 1258,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "PATHFINDER SOCIETY QUEST #3" &&
        t.fontId === "GoodOT-CondBold:10" &&
        t.page === 1,
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    if (sectionKey === "") {
      text.shift();
      text.unshift(this.getFakeText("Adventure Summary", "GoodOT-Bold:12"));
    }
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
