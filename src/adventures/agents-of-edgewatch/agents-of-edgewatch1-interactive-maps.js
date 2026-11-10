import { AgentsOfEdgewatchBase } from "./base.js";
import { ModuleScene } from "../../core/module-scene.js";

export class AgentsOfEdgewatch1InteractiveMaps extends AgentsOfEdgewatchBase {
  prefix = "agents-of-edgewatch1";
  fullName =
    "Agents of Edgewatch - Devil at the Dreaming Palace (Interactive Maps)";
  pages = [];
  scenes = [
    new ModuleScene({
      name: "map2.hq",
      canonical: {
        name: "aoe1/map2",
        priority: 1,
      },
      nameInfo: {
        x: 0,
        y: 20.3319,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 2550,
      height: 1693,
      imageLeft: 92,
      imageRight: 2424,
      imageCols: 17,
      imageTop: 63,
      imageBottom: 1436,
      imageRows: 10,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
    }),
    new ModuleScene({
      name: "map3.hq",
      canonical: {
        name: "aoe1/map3",
        priority: 1,
      },
      nameInfo: {
        x: 0,
        y: 344.3319,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 3,
      width: 2550,
      height: 1693,
      imageLeft: 65,
      imageRight: 2488,
      imageCols: 30,
      imageTop: 18,
      imageBottom: 1633,
      imageRows: 20,
      offsetX: 0,
      offsetY: 1,
      globalLight: true,
    }),
    new ModuleScene({
      name: "map4.hq",
      canonical: {
        name: "aoe1/map4",
        priority: 1,
      },
      nameInfo: {
        x: 0,
        y: 287.3319,
      },
      nameFn: (name) => this.sentenceCase(name).substring(0, 16).trim(),
      page: 4,
      width: 2550,
      height: 1693,
      imageLeft: 42,
      imageRight: 2498,
      imageCols: 50,
      imageTop: 43,
      imageBottom: 1665,
      imageRows: 33,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
    }),
    new ModuleScene({
      name: "map5.hq",
      canonical: {
        name: "aoe1/map5",
        priority: 1,
      },
      nameInfo: {
        x: 59,
        y: 20.3319,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 5,
      width: 2550,
      height: 1693,
      imageLeft: 6,
      imageRight: 2545,
      imageCols: 32,
      imageTop: 125,
      imageBottom: 1633,
      imageRows: 19,
      offsetX: 2,
      offsetY: 0,
      globalLight: true,
    }),
    new ModuleScene({
      name: "map6.hq",
      canonical: {
        name: "aoe1/map6",
        priority: 1,
      },
      nameInfo: {
        x: 11,
        y: 20.3319,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 6,
      width: 2550,
      height: 1347,
      imageLeft: 28,
      imageRight: 2478,
      imageCols: 35,
      imageTop: 47,
      imageBottom: 1308,
      imageRows: 18,
      offsetX: 2,
      offsetY: 0,
      globalLight: true,
    }),
    new ModuleScene({
      name: "map7.hq",
      canonical: {
        name: "aoe1/map7",
        priority: 1,
      },
      nameInfo: {
        x: 0,
        y: 20.3319,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 7,
      width: 2550,
      height: 1148,
      imageLeft: 308,
      imageRight: 2337,
      imageCols: 29,
      imageTop: 186,
      imageBottom: 1025,
      imageRows: 12,
      offsetX: 2,
      offsetY: 1,
      globalLight: true,
    }),
    new ModuleScene({
      name: "map9.hq",
      canonical: {
        name: "aoe1/map9",
        priority: 1,
      },
      nameInfo: {
        x: 353.2144,
        y: 24.1638,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 8,
      width: 2550,
      height: 1147,
      imageLeft: 308,
      imageRight: 1707,
      imageCols: 20,
      imageTop: 240,
      imageBottom: 942,
      imageRows: 10,
      offsetX: 2,
      offsetY: 2,
      globalLight: true,
    }),
    new ModuleScene({
      name: "map10.hq",
      canonical: {
        name: "aoe/fairgrounds",
        priority: 1,
      },
      nameInfo: {
        x: 3.3,
        y: 23.25,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 9,
      width: 2550,
      height: 1697,
      imageLeft: 0,
      imageRight: 1e3,
      imageCols: 10,
      imageTop: 0,
      imageBottom: 1e3,
      imageRows: 10,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
    }),
  ];
  journals = [];
  detect(pdf) {
    return (
      pdf.textDetails.some(
        (t) =>
          t.text.trim() === "Devil at the" && t.fontId === "Gin-Regular:40",
      ) &&
      pdf.textDetails.some(
        (t) =>
          t.text.trim() === "INTERACTIVE MAPS" && t.fontName === "Dax-Bold",
      )
    );
  }
}
