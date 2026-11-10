import { AbominationVaultsBase } from "./base.js";
import { ModuleScene } from "../../core/module-scene.js";

export class AbominationVaults2InteractiveMaps extends AbominationVaultsBase {
  prefix = "abomination-vaults2";
  fullName = "Abomination Vaults - Hands of the Devil (Interactive Maps)";
  pages = [];
  scenes = [
    new ModuleScene({
      name: "map1.hq",
      canonical: {
        name: "av2/map1",
        priority: 1,
      },
      nameInfo: {
        x: 382.4737,
        y: 556.166,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 3,
      width: 2560,
      height: 3229,
      imageLeft: 25,
      imageRight: 2407,
      imageCols: 44,
      imageTop: 267,
      imageBottom: 2920,
      imageRows: 49,
      offsetX: 1,
      offsetY: -3,
      globalLight: true,
      detailsFile: "/av/maps/av2-map1.json",
    }),
    new ModuleScene({
      name: "map2.hq",
      canonical: {
        name: "av2/map2",
        priority: 1,
      },
      nameInfo: {
        x: 0,
        y: 21.1638,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 2296,
      height: 1800,
      imageLeft: 45,
      imageRight: 2260,
      imageCols: 22,
      imageTop: 261,
      imageBottom: 1690,
      imageRows: 14,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/av/maps/av2-map2.json",
    }),
    new ModuleScene({
      name: "map3.hq",
      canonical: {
        name: "av2/map3",
        priority: 1,
      },
      nameInfo: {
        x: 86,
        y: 687.1638,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 4,
      width: 2559,
      height: 3228,
      imageLeft: 202,
      imageRight: 2372,
      imageCols: 41,
      imageTop: 177,
      imageBottom: 2984,
      imageRows: 53,
      offsetX: 1,
      offsetY: -1,
      globalLight: true,
      detailsFile: "/av/maps/av2-map3.json",
    }),
    new ModuleScene({
      name: "map4.hq",
      canonical: {
        name: "av2/map4",
        priority: 1,
      },
      nameInfo: {
        x: 6.5337,
        y: 707.8165,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 5,
      width: 2560,
      height: 3229,
      imageLeft: 238,
      imageRight: 2251,
      imageCols: 30,
      imageTop: 344,
      imageBottom: 2961,
      imageRows: 39,
      offsetX: 0,
      offsetY: -1,
      globalLight: true,
      detailsFile: "/av/maps/av2-map4.json",
    }),
  ];
  journals = [];
  detect(pdf) {
    return (
      pdf.textDetails.some(
        (t) => t.text.trim() === "Hands of" && t.fontId === "Gin-Regular:40",
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
