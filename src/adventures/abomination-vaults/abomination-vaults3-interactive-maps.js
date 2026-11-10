import { AbominationVaultsBase } from "./base.js";
import { ModuleScene } from "../../core/module-scene.js";

export class AbominationVaults3InteractiveMaps extends AbominationVaultsBase {
  prefix = "abomination-vaults3";
  fullName = "Abomination Vaults - Eyes of Empty Death (Interactive Maps)";
  pages = [];
  scenes = [
    new ModuleScene({
      name: "map1.hq",
      canonical: {
        name: "av3/map1",
        priority: 1,
      },
      nameInfo: {
        x: 297.56,
        y: 721.5259,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 2560,
      height: 3310,
      imageLeft: 167,
      imageRight: 2337,
      imageCols: 39,
      imageTop: 139,
      imageBottom: 3143,
      imageRows: 54,
      offsetX: 12,
      offsetY: 15,
      globalLight: true,
      detailsFile: "/av/maps/av3-map1.json",
    }),
    new ModuleScene({
      name: "map2.hq",
      canonical: {
        name: "av3/map2",
        priority: 1,
      },
      nameInfo: {
        x: 75,
        y: 727,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 3,
      width: 2560,
      height: 3305,
      imageLeft: 41,
      imageRight: 2550,
      imageCols: 46,
      imageTop: 248,
      imageBottom: 3246,
      imageRows: 55,
      offsetX: 11,
      offsetY: 15,
      globalLight: true,
      detailsFile: "/av/maps/av3-map2.json",
    }),
    new ModuleScene({
      name: "map3.hq",
      canonical: {
        name: "av3/map3",
        priority: 1,
      },
      nameInfo: {
        x: 0,
        y: 674.1498,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 4,
      width: 2560,
      height: 3310,
      imageLeft: 167,
      imageRight: 2315,
      imageCols: 40,
      imageTop: 258,
      imageBottom: 3050,
      imageRows: 52,
      offsetX: 12,
      offsetY: 15,
      globalLight: true,
      detailsFile: "/av/maps/av3-map3.json",
    }),
  ];
  journals = [];
  detect(pdf) {
    return (
      pdf.textDetails.some(
        (t) => t.text.trim() === "Eyes of" && t.fontId === "Gin-Regular:40",
      ) &&
      pdf.textDetails.some(
        (t) =>
          t.text.trim() === "INTERACTIVE MAPS" && t.fontName === "Dax-Bold",
      )
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    return super.extractDetails(text, moduleData, sectionKey);
  }
}
