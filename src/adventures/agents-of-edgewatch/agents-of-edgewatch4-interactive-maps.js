import { AgentsOfEdgewatchBase } from "./base.js";
import { ModuleScene } from "../../core/module-scene.js";

export class AgentsOfEdgewatch4InteractiveMaps extends AgentsOfEdgewatchBase {
  prefix = "agents-of-edgewatch4";
  fullName =
    "Agents of Edgewatch - Assault on Hunting Lodge Seven (Interactive Maps)";
  pages = [];
  scenes = [
    new ModuleScene({
      name: "map1a.hq",
      canonical: {
        name: "aoe4/map1a",
        priority: 1,
      },
      nameInfo: {
        x: 0,
        y: 24.3319,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 2317,
      height: 1545,
      imageLeft: 34,
      imageRight: 2300,
      imageCols: 60,
      imageTop: 24,
      imageBottom: 1534,
      imageRows: 40,
      cropLeft: 0,
      cropRight: 1160,
      cropTop: 0,
      cropBottom: 1545,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
    }),
    new ModuleScene({
      name: "map1b.hq",
      canonical: {
        name: "aoe4/map1b",
        priority: 1,
      },
      nameInfo: {
        x: 237,
        y: 24.3319,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 2317,
      height: 1545,
      imageLeft: 34,
      imageRight: 2300,
      imageCols: 60,
      imageTop: 24,
      imageBottom: 1534,
      imageRows: 40,
      cropLeft: 1171,
      cropRight: 2317,
      cropTop: 0,
      cropBottom: 1545,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
    }),
    new ModuleScene({
      name: "map2.hq",
      canonical: {
        name: "aoe4/map2",
        priority: 1,
      },
      nameInfo: {
        x: 16,
        y: 758.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 3,
      width: 2418,
      height: 2946,
      imageLeft: 434,
      imageRight: 2215,
      imageCols: 24,
      imageTop: 218,
      imageBottom: 2815,
      imageRows: 35,
      offsetX: 0,
      offsetY: -3,
      globalLight: true,
    }),
    new ModuleScene({
      name: "map3.hq",
      canonical: {
        name: "aoe4/map3",
        priority: 1,
      },
      nameInfo: {
        x: 0,
        y: 620.8319,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 4,
      width: 2322,
      height: 2936,
      imageLeft: 16,
      imageRight: 2307,
      imageCols: 40,
      imageTop: 30,
      imageBottom: 2892,
      imageRows: 50,
      offsetX: 0,
      offsetY: -3,
      globalLight: true,
    }),
    new ModuleScene({
      name: "map4.hq",
      canonical: {
        name: "aoe4/map4",
        priority: 1,
      },
      nameInfo: {
        x: 0,
        y: 251.168,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 5,
      width: 2418,
      height: 2944,
      imageLeft: 12,
      imageRight: 2385,
      imageCols: 56,
      imageTop: 15,
      imageBottom: 2896,
      imageRows: 68,
      offsetX: 0,
      offsetY: -4,
      globalLight: true,
    }),
  ];
  journals = [];
  detect(pdf) {
    return (
      pdf.textDetails.some(
        (t) => t.text.trim() === "Lodge Seven" && t.fontId === "Gin-Regular:40",
      ) &&
      pdf.textDetails.some(
        (t) =>
          t.text.trim() === "INTERACTIVE MAPS" && t.fontName === "Dax-Bold",
      )
    );
  }
}
