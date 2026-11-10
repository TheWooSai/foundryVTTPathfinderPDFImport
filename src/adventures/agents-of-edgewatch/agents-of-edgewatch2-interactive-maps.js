import { AgentsOfEdgewatchBase } from "./base.js";
import { ModuleScene } from "../../core/module-scene.js";

export class AgentsOfEdgewatch2InteractiveMaps extends AgentsOfEdgewatchBase {
  prefix = "agents-of-edgewatch2";
  fullName = "Agents of Edgewatch - Sixty Feet Under (Interactive Maps)";
  pages = [];
  scenes = [
    new ModuleScene({
      name: "map3a.hq",
      canonical: {
        name: "aoe2/map3a",
        priority: 1,
      },
      nameInfo: {
        x: 0,
        y: 224.5,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 2550,
      height: 1693,
      imageLeft: 36,
      imageRight: 992,
      imageCols: 23,
      imageTop: 13,
      imageBottom: 803,
      imageRows: 19,
      cropLeft: 0,
      cropRight: 1030,
      cropTop: 0,
      cropBottom: 838,
      offsetX: 0,
      offsetY: 2,
      globalLight: true,
    }),
    new ModuleScene({
      name: "map3b.hq",
      canonical: {
        name: "aoe2/map3b",
        priority: 1,
      },
      nameInfo: {
        x: 31.38,
        y: 183.496,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 2550,
      height: 1693,
      imageLeft: 36,
      imageRight: 992,
      imageCols: 23,
      imageTop: 13,
      imageBottom: 803,
      imageRows: 19,
      cropLeft: 0,
      cropRight: 1030,
      cropTop: 851,
      cropBottom: 1693,
      offsetX: 0,
      offsetY: 1,
      globalLight: true,
    }),
    new ModuleScene({
      name: "map3c.hq",
      canonical: {
        name: "aoe2/map3c",
        priority: 1,
      },
      nameInfo: {
        x: 151.99200000000002,
        y: 23.452000000000005,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 2550,
      height: 1693,
      imageLeft: 36,
      imageRight: 992,
      imageCols: 23,
      imageTop: 13,
      imageBottom: 803,
      imageRows: 19,
      cropLeft: 1043,
      cropRight: 2550,
      cropTop: 0,
      cropBottom: 1693,
      offsetX: 1,
      offsetY: 2,
      globalLight: true,
    }),
    new ModuleScene({
      name: "map4.hq",
      canonical: {
        name: "aoe2/map4",
        priority: 1,
      },
      nameInfo: {
        x: 0,
        y: 362.6681,
      },
      nameFn: (name) => this.sentenceCase(name).substring(0, 20).trim(),
      page: 3,
      width: 2555,
      height: 1693,
      imageLeft: 160,
      imageRight: 2540,
      imageCols: 45,
      imageTop: 16,
      imageBottom: 1656,
      imageRows: 31,
      offsetX: 2,
      offsetY: 1,
      globalLight: true,
    }),
    new ModuleScene({
      name: "map5.hq",
      canonical: {
        name: "aoe2/map5",
        priority: 1,
      },
      nameInfo: {
        x: 178.1825,
        y: 139.8319,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 4,
      width: 2550,
      height: 1697,
      imageLeft: 16,
      imageRight: 2199,
      imageCols: 28,
      imageTop: 38,
      imageBottom: 1441,
      imageRows: 18,
      offsetX: 1,
      offsetY: 0,
      globalLight: true,
    }),
    new ModuleScene({
      name: "map6.hq",
      canonical: {
        name: "aoe2/map6",
        priority: 1,
      },
      nameInfo: {
        x: 0,
        y: 701.9124,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 5,
      width: 2555,
      height: 3310,
      imageLeft: 44,
      imageRight: 2542,
      imageCols: 53,
      imageTop: 19,
      imageBottom: 3274,
      imageRows: 69,
      offsetX: 0,
      offsetY: 1,
      globalLight: true,
    }),
    new ModuleScene({
      name: "map7.hq",
      canonical: {
        name: "aoe2/map7",
        priority: 1,
      },
      nameInfo: {
        x: 119.5,
        y: 32.3319,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 6,
      width: 1425,
      height: 1444,
      imageLeft: 277,
      imageRight: 1220,
      imageCols: 18,
      imageTop: 276,
      imageBottom: 1271,
      imageRows: 19,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
    }),
  ];
  journals = [];
  detect(pdf) {
    return (
      pdf.textDetails.some(
        (t) => t.text.trim() === "SIXTY FEET" && t.fontId === "Gin-Regular:40",
      ) &&
      pdf.textDetails.some(
        (t) =>
          t.text.trim() === "INTERACTIVE MAPS" && t.fontName === "Dax-Bold",
      )
    );
  }
}
