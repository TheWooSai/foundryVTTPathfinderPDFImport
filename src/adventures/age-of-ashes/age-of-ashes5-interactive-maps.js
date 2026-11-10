import { AgeOfAshesBase } from "./base.js";
import { ModuleScene } from "../../core/module-scene.js";

export class AgeOfAshes5InteractiveMaps extends AgeOfAshesBase {
  prefix = "age-of-ashes5";
  fullName = "Age of Ashes - Against the Scarlet Triad (Interactive Maps)";
  pages = [];
  scenes = [
    new ModuleScene({
      name: "map2.hq",
      canonical: {
        name: "aoa5/map2",
        priority: 1,
      },
      nameInfo: {
        x: 0,
        y: 404.528,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 1275,
      height: 924,
      imageLeft: 139,
      imageRight: 1135,
      imageCols: 25,
      imageTop: 67,
      imageBottom: 827,
      imageRows: 19,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/aoa/maps/aoa5-map2.json",
    }),
    new ModuleScene({
      name: "map3.hq",
      canonical: {
        name: "aoa5/map3",
        priority: 1,
      },
      nameInfo: {
        x: 0.26,
        y: 387.694,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 3,
      width: 1275,
      height: 924,
      imageLeft: 0,
      imageRight: 1275,
      imageCols: 10,
      imageTop: 0,
      imageBottom: 1275,
      imageRows: 10,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/aoa/maps/aoa5-map3.json",
    }),
    new ModuleScene({
      name: "map6.hq",
      canonical: {
        name: "aoa5/map6",
        priority: 1,
      },
      nameInfo: {
        x: 0,
        y: 311.528,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 4,
      width: 1137,
      height: 716,
      imageLeft: 36,
      imageRight: 1103,
      imageCols: 30,
      imageTop: 22,
      imageBottom: 698,
      imageRows: 19,
      offsetX: 1,
      offsetY: 1,
      globalLight: true,
      detailsFile: "/aoa/maps/aoa5-map6.json",
    }),
    new ModuleScene({
      name: "map8.hq",
      canonical: {
        name: "aoa5/map8",
        priority: 1,
      },
      nameInfo: {
        x: 0,
        y: 683.6961,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 5,
      width: 1275,
      height: 1578,
      imageLeft: 90,
      imageRight: 498,
      imageCols: 17,
      imageTop: 78,
      imageBottom: 748,
      imageRows: 28,
      cropLeft: 0,
      cropRight: 552,
      cropTop: 0,
      cropBottom: 795,
      offsetX: -1,
      offsetY: -3,
      globalLight: true,
      detailsFile: "/aoa/maps/aoa5-map8.json",
    }),
    new ModuleScene({
      name: "map9.hq",
      canonical: {
        name: "aoa5/map9",
        priority: 1,
      },
      nameInfo: {
        x: 226,
        y: 683.6961,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 5,
      width: 1275,
      height: 1578,
      imageLeft: 545,
      imageRight: 786,
      imageCols: 10,
      imageTop: 102,
      imageBottom: 342,
      imageRows: 10,
      cropLeft: 448,
      cropRight: 840,
      cropTop: 0,
      cropBottom: 381,
      offsetX: 0,
      offsetY: -4,
      globalLight: true,
      detailsFile: "/aoa/maps/aoa5-map9.json",
    }),
    new ModuleScene({
      name: "map10.hq",
      canonical: {
        name: "aoa5/map10",
        priority: 1,
      },
      nameInfo: {
        x: 40,
        y: 298.6961,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 5,
      width: 1275,
      height: 1578,
      imageLeft: 114,
      imageRight: 666,
      imageCols: 23,
      imageTop: 870,
      imageBottom: 1423,
      imageRows: 23,
      cropLeft: 0,
      cropRight: 750,
      cropTop: 810,
      cropBottom: 1578,
      offsetX: -1,
      offsetY: -5,
      globalLight: true,
      detailsFile: "/aoa/maps/aoa5-map10.json",
    }),
    new ModuleScene({
      name: "map11.hq",
      canonical: {
        name: "aoa5/map11",
        priority: 1,
      },
      nameInfo: {
        x: 385,
        y: 697.9567,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 5,
      width: 1275,
      height: 1578,
      imageLeft: 666,
      imageRight: 1195,
      imageCols: 22,
      imageTop: 77,
      imageBottom: 1302,
      imageRows: 51,
      cropLeft: 628,
      cropRight: 1275,
      cropTop: 0,
      cropBottom: 1580,
      offsetX: -4,
      offsetY: -1,
      globalLight: true,
      detailsFile: "/aoa/maps/aoa5-map11.json",
    }),
  ];
  journals = [];
  detect(pdf) {
    return (
      pdf.textDetails.some(
        (t) => t.text.trim() === "Against the" && t.fontId === "Gin-Regular:38",
      ) &&
      pdf.textDetails.some(
        (t) =>
          t.text.trim() === "INTERACTIVE MAPS" && t.fontName === "Dax-Bold",
      )
    );
  }
  preprocess(text) {}
}
