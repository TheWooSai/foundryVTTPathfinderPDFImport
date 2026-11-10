import { PFSSeason3Base } from "./base.js";
import { ModuleNpc } from "../../../core/module-npc.js";
import { ModuleScene } from "../../../core/module-scene.js";

export class PFS3_08 extends PFSSeason3Base {
  prefix = "pfs-3-08";
  fullName = "PFS #3-08 - Foundation's Price";
  pages = [
    this.TwoColumnWithRightCutout(3, 330),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumnWithRightCutout(6, 430),
    this.TwoColumn(7),
    this.TwoColumn(8),
    this.TwoColumn(9),
    this.TwoColumn(10),
    this.TwoColumn(11),
    this.TwoColumn(12),
    this.TwoColumnWithLeftCutout(14, 370),
    this.TwoColumn(15),
    this.TwoColumn(16),
    this.TwoColumn(17),
    this.TwoColumn(19),
    this.TwoColumnWithRightCutout(20, 480, "appendix1"),
    this.TwoColumnWithRightCutout(21, 520, "appendix1"),
    this.TwoColumnWithRightCutout(22, 0, "appendix1"),
    this.TwoColumnWithRightCutout(23, 500, "appendix2"),
    this.TwoColumnWithRightCutout(24, 520, "appendix2"),
    this.TwoColumnWithRightCutout(25, 0, "appendix2"),
    this.OneColumn(28, "handout1"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      canonical: {
        name: "xxx/map1",
        priority: 0,
      },
      nameInfo: {
        x: 93.75,
        y: 675.5514,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3),
      page: 13,
      width: 900,
      height: 1300,
      imageLeft: 0,
      imageRight: 900,
      imageCols: 27,
      imageTop: 0,
      imageBottom: 1300,
      imageRows: 39,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      journals: [
        {
          x: 750,
          y: 1150,
          id: "MTI6MzEyOjY4Nw",
        },
        {
          x: 2250,
          y: 2950,
          id: "MTI6MzEyOjYxNQ",
        },
        {
          x: 1450,
          y: 2950,
          id: "MTI6MzEyOjQ4Mw",
        },
        {
          x: 1450,
          y: 2050,
          id: "MTI6MzEyOjMwMw",
        },
        {
          x: 1450,
          y: 3750,
          id: "MTQ6NzI6MzYz",
        },
        {
          x: 2950,
          y: 4450,
          id: "MTQ6MzEyOjM4Nw",
        },
        {
          x: 3250,
          y: 4350,
          id: "MTU6NzI6Njg3",
        },
        {
          x: 2850,
          y: 1550,
          id: "MTU6MzEyOjY4Nw",
        },
        {
          x: 3050,
          y: 1250,
          id: "MTY6NzI6Njg3",
        },
      ],
      tokens: [],
    }),
    new ModuleScene({
      name: "map2",
      canonical: {
        name: "xxx/map2",
        priority: 0,
      },
      nameInfo: {
        x: 82,
        y: 675.5514,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3),
      page: 18,
      width: 958,
      height: 1197,
      imageLeft: 0,
      imageRight: 958,
      imageCols: 24,
      imageTop: 0,
      imageBottom: 1197,
      imageRows: 30,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      journals: [
        {
          x: 750,
          y: 900,
          id: "MTc6NzI6MjE5",
        },
      ],
      tokens: [],
    }),
  ];
  journals = [];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 4,
        x: 286.5763,
        y: 86.432,
      },
      page: 4,
      width: 675,
      height: 1076,
      tokenX: -205,
      tokenY: 7,
      tokenSize: 320,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 6,
        x: 283.7833,
        y: 86.432,
      },
      page: 6,
      width: 657,
      height: 587,
      tokenX: -57,
      tokenY: 59,
      tokenSize: 517,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 8,
        x: 280.0734,
        y: 86.39,
      },
      page: 8,
      width: 633,
      height: 633,
      tokenX: 11,
      tokenY: 82,
      tokenSize: 633,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc4",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 11,
        x: 284.1663,
        y: 302.032,
      },
      page: 11,
      width: 615,
      height: 530,
      tokenX: 48,
      tokenY: 95,
      tokenSize: 671,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc5",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.h2vnwOGmGFcKVGYq",
      page: 14,
      width: 1145,
      height: 750,
      tokenX: -229,
      tokenY: 58,
      tokenSize: 389,
      forIds: [
        "MjQ6NzI6NjYz",
        "MTY6NzI6MjA3",
        "MjE6MzEyOjUxOQ",
        "MjM6NzI6NDgz",
        "MTQ6MzEyOjYwMw",
      ],
    }),
    new ModuleNpc({
      id: "npc6",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 15,
        x: 273.5574,
        y: 293.132,
      },
      page: 15,
      width: 1200,
      height: 928,
      tokenX: -74,
      tokenY: 154,
      tokenSize: 1032,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc7",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.WGi99nXZYSv7U92M",
      name: {
        page: 16,
        x: 277.9534,
        y: 339.382,
      },
      page: 16,
      width: 476,
      height: 667,
      tokenX: 96,
      tokenY: 0,
      tokenSize: 667,
      forIds: ["MjE6NzI6MzUx", "MTY6NzI6MjY3"],
    }),
    new ModuleNpc({
      id: "npc8",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.by3YpQPT2mWc0kFE",
      page: 16,
      width: 476,
      height: 667,
      tokenX: 96,
      tokenY: 0,
      tokenSize: 667,
      forIds: ["MjQ6NzI6MzUx", "MTY6NzI6MTcx"],
    }),
    new ModuleNpc({
      id: "npc9",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.KDRlxdIUADWHI6Vr",
      label: "AM",
      forIds: ["MjI6NzI6NjYz", "MTc6MzEyOjI3OQ"],
    }),
    new ModuleNpc({
      id: "npc10",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.FmZ8bz1ItIzxuu1D",
      label: "IRB",
      forIds: ["MjQ6MzEyOjUxOQ"],
    }),
    new ModuleNpc({
      id: "npc11",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.ips7faBeWNAqpByM",
      label: "IRD",
      forIds: ["MjE6NzI6NjYz", "MTY6NzI6MzAz", "MjA6NzI6NDgz", "MTQ6NzI6MTIz"],
    }),
    new ModuleNpc({
      id: "npc12",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.XgGeD4fz5m7nQQlN",
      label: "LW",
      forIds: ["MjU6NzI6NDU5"],
    }),
    new ModuleNpc({
      id: "npc13",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.RZ8sWKkogng0IU8M",
      label: "VtB",
      forIds: ["MjM6MzEyOjQ5NQ", "MTQ6MzEyOjU2Nw"],
    }),
    new ModuleNpc({
      id: "npc14",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.KSKDACF4qh3HJTDo",
      label: "VtF",
      forIds: ["MjA6MzEyOjQ3MQ", "MTQ6NzI6ODc"],
    }),
    new ModuleNpc({
      id: "npc15",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.sAfjpjAS56jtrUbi",
      label: "ZH",
      forIds: ["MjI6NzI6NDQ3", "MjU6NzI6NjYz", "MTc6MzEyOjIxOQ"],
    }),
  ];
  blacklistedFonts = this.blacklistedFonts.concat(["GoodOT-Italic:5.247"]);
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Scenario #3-08" &&
        t.fontId === "GoodOT-Bold:15" &&
        t.page === 1,
    );
  }
  preprocess(text) {
    this.removeText(text, 3, 227.2812, 654.8302);
    for (let i = 0; i < text.length; i++) {
      ((text[i].text = text[i].text.replace(/�/, ".")),
        text[i].fontId === "Osaka:10" &&
          text[i].page === 7 &&
          ((text[i].fontId = "GoodOT:9"),
          (text[i].fontName = "GoodOT"),
          (text[i].fontSize = 9),
          (text[i].text = "\u2022"),
          (text[i].y += 1)));
    }
  }
  extractDetails(text, moduleData, sectionKey) {
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {
    this.prependJournal(moduleData, "MjA6MzYwOjY4Nw", "MjA6NzI6NTA3");
    this.prependJournal(moduleData, "MjE6MzYwOjY4Nw", "MjE6NzI6Njg3");
    this.prependJournal(moduleData, "MjI6MzY0OjY4Nw", "MjI6NzI6Njg3");
    this.prependJournal(moduleData, "MjM6MzYwOjY4Nw", "MjM6NzI6NTA3");
    this.prependJournal(moduleData, "MjQ6MzYwOjY4Nw", "MjQ6NzI6Njg3");
    this.prependJournal(moduleData, "MjU6MzY0OjY3NQ", "MjU6NzI6Njg3");
  }
}
