import { ExtinctionCurseBase } from "./base.js";
import { ModuleScene } from "../../core/module-scene.js";

export class ExtinctionCurse2InteractiveMaps extends ExtinctionCurseBase {
  prefix = "extinction-curse2";
  fullName = "Extinction Curse - Legacy of the Lost God (Interactive Maps)";
  pages = [];
  scenes = [
    new ModuleScene({
      name: "map1.hq",
      canonical: {
        name: "ec2/map1",
        priority: 1,
      },
      nameInfo: {
        x: 0,
        y: 391.6681,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 1280,
      height: 899,
      imageLeft: 15,
      imageRight: 1273,
      imageCols: 56,
      imageTop: 22,
      imageBottom: 878,
      imageRows: 38,
      offsetX: 1,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/ec/maps/ec2-map1.json",
    }),
    new ModuleScene({
      name: "map2.hq",
      canonical: {
        name: "ec2/map2",
        priority: 1,
      },
      nameInfo: {
        x: 0,
        y: 391.6639,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 3,
      width: 1280,
      height: 899,
      imageLeft: 28,
      imageRight: 1166,
      imageCols: 40,
      imageTop: 59,
      imageBottom: 884,
      imageRows: 29,
      offsetX: 0,
      offsetY: 1,
      globalLight: true,
      detailsFile: "/ec/maps/ec2-map2.json",
    }),
    new ModuleScene({
      name: "map3.hq",
      canonical: {
        name: "ec2/map3",
        priority: 1,
      },
      nameInfo: {
        x: 0,
        y: 27.5,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 4,
      width: 1280,
      height: 897,
      imageLeft: 28,
      imageRight: 1166,
      imageCols: 40,
      imageTop: 69,
      imageBottom: 837,
      imageRows: 27,
      offsetX: 0,
      offsetY: 1,
      globalLight: true,
      detailsFile: "/ec/maps/ec2-map3.json",
    }),
    new ModuleScene({
      name: "map4.hq",
      canonical: {
        name: "ec2/map4",
        priority: 1,
      },
      nameInfo: {
        x: 0,
        y: 691.385,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 5,
      width: 1175,
      height: 1535,
      imageLeft: 22,
      imageRight: 1156,
      imageCols: 41,
      imageTop: 32,
      imageBottom: 1525,
      imageRows: 54,
      offsetX: 0,
      offsetY: 1,
      globalLight: true,
      detailsFile: "/ec/maps/ec2-map4.json",
    }),
  ];
  journals = [];
  detect(pdf) {
    return (
      pdf.textDetails.some(
        (t) =>
          t.text.trim() === "Legacy of the" && t.fontId === "Gin-Regular:38",
      ) &&
      pdf.textDetails.some(
        (t) =>
          t.text.trim() === "INTERACTIVE MAPS" && t.fontName === "Dax-Bold",
      )
    );
  }
  preprocess(text) {}
}
