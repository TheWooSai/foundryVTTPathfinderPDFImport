import { AgentsOfEdgewatchBase } from "./base.js";
import { ModuleScene } from "../../core/module-scene.js";

export class AgentsOfEdgewatch6InteractiveMaps extends AgentsOfEdgewatchBase {
  prefix = "agents-of-edgewatch6";
  fullName =
    "Agents of Edgewatch - Ruins of the Radiant Siege (Interactive Maps)";
  pages = [];
  scenes = [
    new ModuleScene({
      name: "map1.hq",
      canonical: {
        name: "aoe6/map1",
        priority: 1,
      },
      nameInfo: {
        x: 189.5,
        y: 21.1638,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 2317,
      height: 1527,
      imageLeft: 108,
      imageRight: 2214,
      imageCols: 46,
      imageTop: 143,
      imageBottom: 1424,
      imageRows: 28,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/aoe/maps/aoe6-map1.json",
    }),
    new ModuleScene({
      name: "map2.hq",
      canonical: {
        name: "aoe6/map2",
        priority: 1,
      },
      nameInfo: {
        x: 14.5,
        y: 619,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 3,
      width: 2313,
      height: 3035,
      imageLeft: 31,
      imageRight: 2120,
      imageCols: 39,
      imageTop: 312,
      imageBottom: 2778,
      imageRows: 46,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/aoe/maps/aoe6-map2.json",
    }),
    new ModuleScene({
      name: "map3.hq",
      canonical: {
        name: "aoe6/map3",
        priority: 1,
      },
      nameInfo: {
        x: 316.3749,
        y: 140.3319,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 4,
      width: 2312,
      height: 1541,
      imageLeft: 139,
      imageRight: 2279,
      imageCols: 52 * 2,
      imageTop: 96,
      imageBottom: 1454,
      imageRows: 33 * 2,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/aoe/maps/aoe6-map3.json",
    }),
  ];
  journals = [];
  detect(pdf) {
    return (
      pdf.textDetails.some(
        (t) => t.text.trim() === "Ruins of" && t.fontId === "Gin-Regular:40",
      ) &&
      pdf.textDetails.some(
        (t) =>
          t.text.trim() === "INTERACTIVE MAPS" && t.fontName === "Dax-Bold",
      )
    );
  }
}
