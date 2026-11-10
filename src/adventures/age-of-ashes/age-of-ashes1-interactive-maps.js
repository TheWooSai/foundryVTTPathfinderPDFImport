import { AgeOfAshesBase } from "./base.js";
import { ModuleScene } from "../../core/module-scene.js";

export class AgeOfAshes1InteractiveMaps extends AgeOfAshesBase {
  prefix = "age-of-ashes1";
  fullName = "Age of Ashes - Hellknight Hill (Interactive Maps)";
  pages = [];
  scenes = [
    new ModuleScene({
      name: "map3.hq",
      canonical: {
        name: "aoa1/map3",
        priority: 1,
      },
      nameInfo: {
        x: 53.125,
        y: 7.8319,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 1280,
      height: 1537,
      imageLeft: 27,
      imageRight: 1269,
      imageCols: 39,
      imageTop: 20,
      imageBottom: 1517,
      imageRows: 47,
      offsetX: 1,
      offsetY: -4,
      globalLight: true,
      detailsFile: "/aoa/maps/aoa1-map3.json",
    }),
    new ModuleScene({
      name: "map4.hq",
      canonical: {
        name: "aoa1/map4",
        priority: 1,
      },
      nameInfo: {
        x: 17.125,
        y: 4.8319,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 3,
      width: 1280,
      height: 1522,
      imageLeft: 35,
      imageRight: 1260,
      imageCols: 36,
      imageTop: 41,
      imageBottom: 1200,
      imageRows: 34,
      offsetX: 1,
      offsetY: -4,
      globalLight: true,
      detailsFile: "/aoa/maps/aoa1-map4.json",
    }),
    new ModuleScene({
      name: "map5.hq",
      canonical: {
        name: "aoa1/map5",
        priority: 1,
      },
      nameInfo: {
        x: 71.25,
        y: 7.8319,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 4,
      width: 1275,
      height: 924,
      imageLeft: 11,
      imageRight: 1259,
      imageCols: 35,
      imageTop: 21,
      imageBottom: 913,
      imageRows: 25,
      offsetX: 1,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/aoa/maps/aoa1-map5.json",
    }),
    new ModuleScene({
      name: "map6.hq",
      canonical: {
        name: "aoa1/map6",
        priority: 1,
      },
      nameInfo: {
        x: 0,
        y: 3.8319,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 5,
      width: 1278,
      height: 924,
      imageLeft: 704,
      imageRight: 1104,
      imageCols: 14,
      imageTop: 317,
      imageBottom: 505,
      imageRows: 6,
      offsetX: 0,
      offsetY: 1,
      globalLight: true,
      detailsFile: "/aoa/maps/aoa1-map6.json",
    }),
  ];
  journals = [];
  detect(pdf) {
    return (
      pdf.textDetails.some(
        (t) => t.text.trim() === "Hellknight" && t.fontId === "Gin-Regular:38",
      ) &&
      pdf.textDetails.some(
        (t) =>
          t.text.trim() === "INTERACTIVE MAPS" && t.fontName === "Dax-Bold",
      )
    );
  }
  preprocess(text) {
    this.mergeWithNext(text, 4, 71.25, 7.8319);
    this.mergeWithNext(text, 4, 71.25, 7.8319);
  }
}
