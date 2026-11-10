import { AdventureBase } from "../../core/adventure-base.js";
import { ModuleScene } from "../../core/module-scene.js";

export class BeginnersBoxFlipMat extends AdventureBase {
  prefix = "menace-under-otari";
  fullName = "Menace Under Otari Flip Mats";
  pages = [];
  scenes = [
    new ModuleScene({
      name: "map1.hq",
      canonical: {
        name: "beginnersbox/level1",
        priority: 1,
      },
      nameInfo: {
        x: 81.7461,
        y: 2081.384,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 1,
      width: 3605,
      height: 4505,
      imageLeft: 113,
      imageRight: 3331,
      imageCols: 21,
      imageTop: 108,
      imageBottom: 4396,
      imageRows: 28,
      globalLight: true,
    }),
    new ModuleScene({
      name: "map2.hq",
      canonical: {
        name: "beginnersbox/level2",
        priority: 1,
      },
      nameInfo: {
        x: 75.1841,
        y: 2081.384,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 3605,
      height: 4505,
      offsetY: -1,
      imageLeft: 113,
      imageRight: 3486,
      imageCols: 22,
      imageTop: 110,
      imageBottom: 4398,
      imageRows: 28,
      globalLight: true,
    }),
  ];
  journals = [];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Menace under Otari:" &&
        t.fontId === "JubileeMedium:12",
    );
  }
  detectPageLayout(pdf, page) {
    return "";
  }
  finalize(moduleData) {}
}
