import { AgentsOfEdgewatchBase } from "./base.js";
import { ModuleScene } from "../../core/module-scene.js";

export class AgentsOfEdgewatch3InteractiveMaps extends AgentsOfEdgewatchBase {
  prefix = "agents-of-edgewatch3";
  fullName = "Agents of Edgewatch - All or Nothing (Interactive Maps)";
  pages = [];
  scenes = [
    new ModuleScene({
      name: "map2a.hq",
      canonical: {
        name: "aoe3/map2a",
        priority: 1,
      },
      nameInfo: {
        x: 0,
        y: 24.3319,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 2559,
      height: 1688,
      imageLeft: 9,
      imageRight: 2553,
      imageCols: 36,
      imageTop: 46,
      imageBottom: 1673,
      imageRows: 23,
      cropLeft: 0,
      cropRight: 1271,
      cropTop: 0,
      cropBottom: 1688,
      offsetX: 1,
      offsetY: 0,
      globalLight: true,
    }),
    new ModuleScene({
      name: "map2b.hq",
      canonical: {
        name: "aoe3/map2b",
        priority: 1,
      },
      nameInfo: {
        x: 290.244,
        y: 24.3319,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 2559,
      height: 1688,
      imageLeft: 9,
      imageRight: 2553,
      imageCols: 36,
      imageTop: 46,
      imageBottom: 1673,
      imageRows: 23,
      cropLeft: 1293,
      cropRight: 2559,
      cropTop: 0,
      cropBottom: 1688,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
    }),
    new ModuleScene({
      name: "map3.hq",
      canonical: {
        name: "aoe3/map3",
        priority: 1,
      },
      nameInfo: {
        x: 0,
        y: 24.3319,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 3,
      width: 2559,
      height: 1697,
      imageLeft: 10,
      imageRight: 2552,
      imageCols: 36,
      imageTop: 25,
      imageBottom: 1648,
      imageRows: 23,
      offsetX: 2,
      offsetY: 2,
      globalLight: true,
    }),
    new ModuleScene({
      name: "map4.hq",
      canonical: {
        name: "aoe3/map4",
        priority: 1,
      },
      nameInfo: {
        x: 3,
        y: 747,
      },
      nameFn: (name) => this.sentenceCase(name).substring(0, 16),
      page: 4,
      width: 2550,
      height: 3309,
      imageLeft: 11,
      imageRight: 2391,
      imageCols: 36 * 2,
      imageTop: 14,
      imageBottom: 3187,
      imageRows: 48 * 2,
      offsetX: 1,
      offsetY: 2,
      globalLight: true,
    }),
    new ModuleScene({
      name: "map5.hq",
      canonical: {
        name: "aoe3/map5",
        priority: 1,
      },
      nameInfo: {
        x: 103.5,
        y: 22.3319,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 5,
      width: 2550,
      height: 1697,
      imageLeft: 60,
      imageRight: 2060,
      imageCols: 34,
      imageTop: 133,
      imageBottom: 1663,
      imageRows: 26,
      offsetX: 1,
      offsetY: 1,
      globalLight: true,
    }),
  ];
  journals = [];
  detect(pdf) {
    return (
      pdf.textDetails.some(
        (t) => t.text.trim() === "All or" && t.fontId === "Gin-Regular:40",
      ) &&
      pdf.textDetails.some(
        (t) =>
          t.text.trim() === "INTERACTIVE MAPS" && t.fontName === "Dax-Bold",
      )
    );
  }
}
