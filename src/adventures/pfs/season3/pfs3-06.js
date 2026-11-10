import { PFSSeason3Base } from "./base.js";
import { ModuleNpc } from "../../../core/module-npc.js";
import { ModuleScene } from "../../../core/module-scene.js";

export class PFS3_06 extends PFSSeason3Base {
  prefix = "pfs-3-06";
  fullName = "PFS #3-06 - Struck by Shadows";
  pages = [
    this.TwoColumnWithRightCutout(3, 320),
    this.TwoColumnWithRightCutout(4, 580),
    this.TwoColumn(6),
    this.TwoColumn(7),
    this.TwoColumn(8),
    this.TwoColumn(10),
    this.TwoColumn(12),
    this.TwoColumn(13),
    this.TwoColumn(15),
    this.TwoColumn(16),
    this.TwoColumnWithRightCutout(17, 510, "appendix1"),
    this.TwoColumnWithRightCutout(18, 520, "appendix1"),
    this.TwoColumn(19, "appendix1"),
    this.TwoColumnWithRightCutout(20, 520, "appendix1"),
    this.TwoColumnWithRightCutout(21, 520, "appendix1"),
    this.TwoColumn(22, "appendix1"),
    this.TwoColumnWithRightCutout(23, 510, "appendix1"),
    this.TwoColumn(24, "appendix1"),
    this.TwoColumnWithRightCutout(25, 500, "appendix2"),
    this.TwoColumnWithRightCutout(26, 500, "appendix2"),
    this.TwoColumnWithRightCutout(27, 510, "appendix2"),
    this.TwoColumnWithRightCutout(28, 520, "appendix2"),
    this.TwoColumn(29, "appendix2"),
    this.TwoColumnWithRightCutout(30, 500, "appendix2"),
    this.TwoColumn(31, "appendix2"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      canonical: {
        name: "pfs3-06/map1",
        priority: 0,
      },
      nameInfo: {
        x: 82,
        y: 675.5514,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 5,
      width: 958,
      height: 1236,
      imageLeft: 0,
      imageRight: 958,
      imageCols: 24,
      imageTop: 80,
      imageBottom: 1116,
      imageRows: 26,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/pfs/maps/pfs3-06-map1.json",
    }),
    new ModuleScene({
      name: "map2",
      canonical: {
        name: "pfs3-06/map2",
        priority: 0,
      },
      nameInfo: {
        x: 82,
        y: 675.5514,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 9,
      width: 958,
      height: 1236,
      imageLeft: 0,
      imageRight: 958,
      imageCols: 24,
      imageTop: 79,
      imageBottom: 1157,
      imageRows: 27,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/pfs/maps/pfs3-06-map2.json",
    }),
    new ModuleScene({
      name: "map3",
      canonical: {
        name: "flipmat/haunted-dungeon4",
        priority: 0,
      },
      nameInfo: {
        x: 82,
        y: 675.5514,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 11,
      width: 958,
      height: 1236,
      imageLeft: 0,
      imageRight: 958,
      imageCols: 24,
      imageTop: 79,
      imageBottom: 1077,
      imageRows: 25,
      offsetX: 0,
      offsetY: -1,
      globalLight: true,
      detailsFile: "/flipmats/maps/haunted-dungeon4.json",
    }),
    new ModuleScene({
      name: "map4",
      canonical: {
        name: "pfs3-06/map4",
        priority: 0,
      },
      nameInfo: {
        x: 82,
        y: 675.5514,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 14,
      width: 958,
      height: 1236,
      imageLeft: 0,
      imageRight: 958,
      imageCols: 24,
      imageTop: 79,
      imageBottom: 1117,
      imageRows: 26,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/pfs/maps/pfs3-06-map4.json",
    }),
  ];
  journals = [];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 4,
        x: 251.7719,
        y: 87.664,
      },
      page: 4,
      width: 860,
      height: 1142,
      tokenX: -304,
      tokenY: -41,
      tokenSize: 330,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.QvrnfL8u3azh9lBA",
      page: 6,
      width: 753,
      height: 939,
      tokenX: -115,
      tokenY: -117,
      tokenSize: 435,
      forIds: [
        "MjM6NzI6NjYz",
        "MTU6MzEyOjIzMQ",
        "MjA6NzI6NjYz",
        "MTI6NzI6NTc5",
        "MjE6NzI6NjYz",
        "MTM6MzEyOjE1OQ",
        "MTc6NzI6NDgz",
        "NjozMTI6NTA3",
      ],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.CmHz3bQDj6FxEecW",
      page: 6,
      width: 753,
      height: 939,
      tokenX: -115,
      tokenY: -117,
      tokenSize: 435,
      forIds: [
        "MjA6MzEyOjUxOQ",
        "MzA6NzI6NjYz",
        "MTI6NzI6NTQz",
        "MTU6MzEyOjEzNQ",
        "MTc6MzEyOjUwNw",
        "MjE6MzEyOjUxOQ",
        "MjQ6NzI6Njg3",
        "Mjc6NzI6NjYz",
        "MTI6NzI6NDcx",
        "Mjg6NzI6NjYz",
        "MTM6MzEyOjk5",
        "MjU6NzI6NDgz",
        "NjozMTI6NDQ3",
      ],
    }),
    new ModuleNpc({
      id: "npc4",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.RxB7Hj5E3kGcE9Fi",
      page: 6,
      width: 753,
      height: 939,
      tokenX: -115,
      tokenY: -117,
      tokenSize: 435,
      forIds: [
        "Mjc6MzEyOjUwNw",
        "MTI6NzI6NDM1",
        "MjU6MzEyOjQ5NQ",
        "Mjg6MzEyOjUxOQ",
        "MzE6NzI6Njg3",
      ],
    }),
    new ModuleNpc({
      id: "npc5",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 7,
        x: 155.0915,
        y: 97.664,
      },
      page: 7,
      width: 762,
      height: 1070,
      tokenX: -108,
      tokenY: 47,
      tokenSize: 398,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc6",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 8,
        x: 368.2947,
        y: 107.664,
      },
      page: 8,
      width: 791,
      height: 1186,
      tokenX: -212,
      tokenY: -29,
      tokenSize: 402,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc7",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 12,
        x: 381.8209,
        y: 85.7485,
      },
      page: 12,
      width: 786,
      height: 1035,
      tokenX: -231,
      tokenY: 19,
      tokenSize: 363,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc8",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.WB4DMTHCIEBOiitp",
      page: 13,
      width: 762,
      height: 1037,
      tokenX: -187,
      tokenY: -21,
      tokenSize: 309,
      forIds: ["MjM6MzEyOjUwNw", "MTU6MzEyOjE5NQ", "MTU6MzEyOjk5"],
    }),
    new ModuleNpc({
      id: "npc9",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.DTBa5iNcHztFu7oo",
      page: 13,
      width: 762,
      height: 1037,
      tokenX: -187,
      tokenY: -21,
      tokenSize: 309,
      forIds: ["MzA6MzEyOjQ5NQ"],
    }),
    new ModuleNpc({
      id: "npc10",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 15,
        x: 112.1207,
        y: 87.392,
      },
      page: 15,
      width: 771,
      height: 1085,
      tokenX: -215,
      tokenY: -46,
      tokenSize: 301,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc11",
      actorUuid: "Compendium.pf2e.hazards.Actor.491qhVbjsHnOuMZW",
      label: "ELR",
      forIds: ["MjI6NzI6NjYz", "MTU6MzEyOjY2Mw"],
    }),
    new ModuleNpc({
      id: "npc12",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.Z5zTWbeZ0N1XedgS",
      label: "SELR",
      forIds: ["Mjk6NzI6NjYz", "MTU6MzEyOjYwMw"],
    }),
    new ModuleNpc({
      id: "npc13",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.cm09iVg6JGpCu3Rh",
      label: "FS",
      forIds: ["MTk6NzI6Njg3", "MTA6NzI6NTA3"],
    }),
    new ModuleNpc({
      id: "npc14",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.T8rc4C98gf87869G",
      label: "SFS",
      forIds: ["MjY6MzEyOjQ5NQ", "MTA6NzI6NDQ3"],
    }),
    new ModuleNpc({
      id: "npc15",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.WqppjHF2Y8yC6veS",
      label: "SD",
      forIds: ["MTg6NzI6NjYz", "MTA6NzI6ODc"],
    }),
    new ModuleNpc({
      id: "npc16",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.yw5hz4q8vn7S7aUF",
      label: "UD",
      forIds: ["MTg6MzEyOjUxOQ", "MjY6NzI6NjYz", "MTA6MzEyOjY2Mw"],
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Scenario #3-06" &&
        t.fontId === "GoodOT-Bold:15" &&
        t.page === 1,
    );
  }
  preprocess(text) {
    this.removeText(text, 3, 260.8005, 654.8302);
    for (let i = 0; i < text.length; i++) {
      text[i].text = text[i].text.replace(/�/, ".");
    }
  }
  extractDetails(text, moduleData, sectionKey) {
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {
    this.prependJournal(moduleData, "MTc6MzYzOjY4Nw", "MTc6NzI6NTA3");
    this.prependJournal(moduleData, "MTg6MzY0OjY4Nw", "MTg6NzI6Njg3");
    this.prependJournal(moduleData, "MjA6MzYzOjY4Nw", "MjA6NzI6Njg3");
    this.prependJournal(moduleData, "MjE6MzYxOjY4Nw", "MjE6NzI6Njg3");
    this.prependJournal(moduleData, "MjM6MzYwOjY4Nw", "MjM6NzI6Njg3");
    this.prependJournal(moduleData, "MjU6MzYzOjY4Nw", "MjU6NzI6NTA3");
    this.prependJournal(moduleData, "MjY6MzY0OjY4Nw", "MjY6NzI6Njg3");
    this.prependJournal(moduleData, "Mjc6MzYzOjY4Nw", "Mjc6NzI6Njg3");
    this.prependJournal(moduleData, "Mjg6MzYxOjY4Nw", "Mjg6NzI6Njg3");
    this.prependJournal(moduleData, "MzA6MzYwOjY4Nw", "MzA6NzI6Njg3");
  }
}
