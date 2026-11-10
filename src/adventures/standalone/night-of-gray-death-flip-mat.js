import { AdventureBase } from "../../core/adventure-base.js";
import { ModuleScene } from "../../core/module-scene.js";

export class NightOfGrayDeathFlipMat extends AdventureBase {
  prefix = "night-of-the-gray-death";
  fullName = "Night of the Gray Death";
  pages = [];
  scenes = [
    new ModuleScene({
      name: "grand-ballroom.hq",
      canonical: {
        name: "flipmat/grand-ballroom",
        priority: 1,
      },
      nameInfo: {
        x: 27.9147,
        y: 2088.384,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 1,
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
      detailsFile: "/flipmats/maps/grand-ballroom.json",
    }),
    new ModuleScene({
      name: "worm-lair.hq",
      canonical: {
        name: "flipmat/worm-lair",
        priority: 1,
      },
      nameInfo: {
        x: 39.9878,
        y: 2088.384,
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
      detailsFile: "/flipmats/maps/worm-lair.json",
    }),
  ];
  journals = [];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Flip-Mat: Grand Ballroom" &&
        t.fontId === "JubileeMedium:12",
    );
  }
  detectPageLayout(pdf, page) {
    return "";
  }
  finalize(moduleData) {}
}
