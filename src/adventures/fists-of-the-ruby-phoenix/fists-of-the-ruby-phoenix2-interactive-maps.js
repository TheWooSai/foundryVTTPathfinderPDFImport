import { FistsOfTheRubyPhoenixBase } from "./base.js";
import { ModuleScene } from "../../core/module-scene.js";

export class FistsOfTheRubyPhoenix2InteractiveMaps extends FistsOfTheRubyPhoenixBase {
  prefix = "fists-of-the-ruby-phoenix-2";
  fullName = "Fists of the Ruby Phoenix - Ready? Fight! (Interactive Maps)";
  pages = [];
  scenes = [
    new ModuleScene({
      name: "map1.hq",
      canonical: {
        name: "forp2/map1",
        priority: 1,
      },
      nameInfo: {
        x: 5.19,
        y: 712.4083,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 2560,
      height: 3310,
      imageLeft: 0,
      imageRight: 1e3,
      imageCols: 10,
      imageTop: 0,
      imageBottom: 1e3,
      imageRows: 10,
      gridType: "gridless",
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/forp/maps/forp2-map1.json",
    }),
    new ModuleScene({
      name: "map2.hq",
      canonical: {
        name: "forp2/map2",
        priority: 1,
      },
      nameInfo: {
        x: 0,
        y: 21.1638,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 3,
      width: 2350,
      height: 1567,
      imageLeft: 24,
      imageRight: 2324,
      imageCols: 58,
      imageTop: 34,
      imageBottom: 1543,
      imageRows: 38,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/forp/maps/forp2-map2.json",
    }),
    new ModuleScene({
      name: "map3.hq",
      canonical: {
        name: "forp2/map3",
        priority: 1,
      },
      nameInfo: {
        x: 0,
        y: 21.1638,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 4,
      width: 2350,
      height: 1567,
      imageLeft: 37,
      imageRight: 2308,
      imageCols: 60,
      imageTop: 34,
      imageBottom: 1547,
      imageRows: 40,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/forp/maps/forp2-map3.json",
    }),
    new ModuleScene({
      name: "map4.hq",
      canonical: {
        name: "forp2/map4",
        priority: 1,
      },
      nameInfo: {
        x: 0,
        y: 21.1638,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 5,
      width: 2350,
      height: 1567,
      imageLeft: 37,
      imageRight: 2308,
      imageCols: 60,
      imageTop: 34,
      imageBottom: 1547,
      imageRows: 40,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/forp/maps/forp2-map4.json",
    }),
    new ModuleScene({
      name: "map5.hq",
      canonical: {
        name: "forp2/map5",
        priority: 1,
      },
      nameInfo: {
        x: 0,
        y: 351.5,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 6,
      width: 2350,
      height: 1567,
      imageLeft: 79,
      imageRight: 2300,
      imageCols: 29,
      imageTop: 210,
      imageBottom: 1363,
      imageRows: 15,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/forp/maps/forp2-map5.json",
    }),
    new ModuleScene({
      name: "map6.hq",
      canonical: {
        name: "forp2/map6",
        priority: 1,
      },
      nameInfo: {
        x: 0,
        y: 21.1638,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 7,
      width: 2350,
      height: 1567,
      imageLeft: 38,
      imageRight: 2308,
      imageCols: 60,
      imageTop: 34,
      imageBottom: 1547,
      imageRows: 40,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/forp/maps/forp2-map6.json",
    }),
    new ModuleScene({
      name: "map7.hq",
      canonical: {
        name: "forp2/map7",
        priority: 1,
      },
      nameInfo: {
        x: 0,
        y: 21.1638,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 8,
      width: 2350,
      height: 1567,
      imageLeft: 206,
      imageRight: 2089,
      imageCols: 36,
      imageTop: 118,
      imageBottom: 1478,
      imageRows: 26,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/forp/maps/forp2-map7.json",
    }),
    new ModuleScene({
      name: "map8.hq",
      canonical: {
        name: "forp2/map8",
        priority: 1,
      },
      nameInfo: {
        x: 0,
        y: 21.1638,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 9,
      width: 2560,
      height: 3309,
      imageLeft: 61,
      imageRight: 2535,
      imageCols: 32,
      imageTop: 76,
      imageBottom: 3241,
      imageRows: 41,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/forp/maps/forp2-map8.json",
    }),
  ];
  journals = [];
  detect(pdf) {
    return (
      pdf.textDetails.some(
        (t) => t.text.trim() === "Ready?" && t.fontId === "Gin-Regular:40",
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
