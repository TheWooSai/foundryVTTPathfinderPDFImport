import { AdventureBase } from "../../core/adventure-base.js";
import { ModuleScene } from "../../core/module-scene.js";

export class TroublesInOtariFlipMat extends AdventureBase {
  prefix = "troubles-in-otari";
  fullName = "Troubles in Otari";
  pages = [];
  scenes = [
    new ModuleScene({
      name: "map1.hq",
      canonical: {
        name: "toi/map1",
        priority: 1,
      },
      nameInfo: {
        x: 66.0076,
        y: 2073.9839,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 1,
      width: 4505,
      height: 3605,
      imageLeft: 0,
      imageRight: 4505,
      imageCols: 24,
      imageTop: 0,
      imageBottom: 3605,
      imageRows: 30,
      rotateCW: 3,
      offsetX: -1,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/standalone/maps/toi-map1.json",
    }),
    new ModuleScene({
      name: "map2.hq",
      canonical: {
        name: "toi/map2",
        priority: 1,
      },
      nameInfo: {
        x: 69.8791,
        y: 2073.9839,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 3605,
      height: 4505,
      imageLeft: 0,
      imageRight: 3605,
      imageCols: 24,
      imageTop: 0,
      imageBottom: 4505,
      imageRows: 30,
      offsetX: -1,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/standalone/maps/toi-map2.json",
    }),
  ];
  journals = [];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Flip-Mat: Troubles in Otari" &&
        t.fontId === "JubileeMedium:12",
    );
  }
  detectPageLayout(pdf, page) {
    return "";
  }
  finalize(moduleData) {}
}
