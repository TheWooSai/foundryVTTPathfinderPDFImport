import { AbominationVaultsBase } from "./base.js";
import { ModuleScene } from "../../core/module-scene.js";

export class AbominationVaults1InteractiveMaps extends AbominationVaultsBase {
  prefix = "abomination-vaults1";
  fullName = "Abomination Vaults - Ruins of Gauntlight (Interactive Maps)";
  pages = [];
  scenes = [
    new ModuleScene({
      name: "map0.hq",
      canonical: {
        name: "av1/Otari",
        priority: 1,
      },
      nameInfo: {
        x: 190.4427,
        y: 667.9957,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 6,
      width: 2554,
      height: 3309,
      imageLeft: 0,
      imageRight: 1e3,
      imageCols: 10,
      imageTop: 0,
      imageBottom: 1e3,
      imageRows: 10,
      gridType: "gridless",
      globalLight: true,
    }),
    new ModuleScene({
      name: "map1.hq",
      canonical: {
        name: "av1/level1",
        priority: 1,
      },
      nameInfo: {
        x: 413.0463,
        y: 670.1498,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 2550,
      height: 3310,
      imageLeft: 59,
      imageRight: 2535,
      imageCols: 43,
      imageTop: 18,
      imageBottom: 3303,
      imageRows: 57,
      offsetX: 2,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/av/maps/av1-map1.json",
    }),
    new ModuleScene({
      name: "map2.hq",
      canonical: {
        name: "av1/level2",
        priority: 1,
      },
      nameInfo: {
        x: 269.7059,
        y: 703.4919,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 3,
      width: 2555,
      height: 3310,
      imageLeft: 25,
      imageRight: 2549,
      imageCols: 33,
      imageTop: 41,
      imageBottom: 3257,
      imageRows: 42,
      offsetX: 1,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/av/maps/av1-map2.json",
    }),
    new ModuleScene({
      name: "map3.hq",
      canonical: {
        name: "av1/level3",
        priority: 1,
      },
      nameInfo: {
        x: 132,
        y: 739.4957,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 4,
      width: 2551,
      height: 3310,
      imageLeft: 58,
      imageRight: 2508,
      imageCols: 34,
      imageTop: 49,
      imageBottom: 3291,
      imageRows: 45,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/av/maps/av1-map3.json",
    }),
    new ModuleScene({
      name: "map4.hq",
      canonical: {
        name: "av1/level4",
        priority: 1,
      },
      nameInfo: {
        x: 5,
        y: 691.1498,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 5,
      width: 2550,
      height: 3305,
      imageLeft: 121,
      imageRight: 2432,
      imageCols: 31,
      imageTop: 448,
      imageBottom: 3130,
      imageRows: 36,
      offsetX: 0,
      offsetY: 2,
      globalLight: true,
      detailsFile: "/av/maps/av1-map4.json",
    }),
  ];
  journals = [];
  detect(pdf) {
    return (
      pdf.textDetails.some(
        (t) => t.text.trim() === "GAUNTLIGHT" && t.fontId === "Gin-Regular:40",
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
