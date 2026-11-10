import { PFSSeason3Base } from "./base.js";
import { ModuleNpc } from "../../../core/module-npc.js";
import { ModuleScene } from "../../../core/module-scene.js";

export class PFS3_04 extends PFSSeason3Base {
  prefix = "pfs-3-04";
  fullName = "PFS #3-04 - The Devil-Wrought Disappearance";
  pages = [
    this.TwoColumnWithRightCutout(3, 370),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumn(6),
    this.TwoColumn(8),
    this.TwoColumn(9),
    this.TwoColumnWithRightCutout(11, 520),
    this.TwoColumn(12),
    this.TwoColumn(13),
    this.TwoColumn(15),
    this.TwoColumn(16),
    this.TwoColumnWithRightCutout(17, 560, "appendix1"),
    this.TwoColumnWithRightCutout(18, 520, "appendix1"),
    this.TwoColumnWithRightCutout(19, 0, "appendix1"),
    this.TwoColumnWithRightCutout(20, 0, "appendix1"),
    this.TwoColumnWithRightCutout(21, 520, "appendix1"),
    this.TwoColumn(22, "appendix1"),
    this.TwoColumnWithRightCutout(23, 520, "appendix1"),
    this.TwoColumnWithRightCutout(24, 560, "appendix2"),
    this.TwoColumnWithRightCutout(25, 520, "appendix2"),
    this.TwoColumnWithRightCutout(26, 520, "appendix2"),
    this.TwoColumnWithRightCutout(27, 0, "appendix2"),
    this.TwoColumnWithRightCutout(28, 520, "appendix2"),
    this.TwoColumn(29, "appendix2"),
    this.TwoColumnWithRightCutout(30, 520, "appendix2"),
    this.TwoColumn(31, "appendix2"),
    this.OneColumn(33, "handout"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      canonical: {
        name: "flipmat/tavern4",
        priority: 0,
      },
      nameInfo: {
        x: 82,
        y: 675.5514,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 7,
      width: 958,
      height: 1197,
      imageLeft: 0,
      imageRight: 958,
      imageCols: 24,
      imageTop: 0,
      imageBottom: 1197,
      imageRows: 30,
      offsetX: -1,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/flipmats/maps/tavern4.json",
      journals: [
        {
          x: 750,
          y: 950,
          id: "NjozMTI6MTIz",
        },
      ],
      tokens: [],
    }),
    new ModuleScene({
      name: "map2",
      canonical: {
        name: "flipmat/watch-station1",
        priority: 0,
      },
      nameInfo: {
        x: 82,
        y: 675.5514,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 10,
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
      detailsFile: "/flipmats/maps/watch-station1.json",
      journals: [
        {
          x: 2250,
          y: 2850,
          id: "MTI6NzI6MTcx",
        },
        {
          x: 1700,
          y: 1900,
          id: "MTI6MzEyOjMxNQ",
        },
        {
          x: 1400,
          y: 3100,
          id: "MTM6NzI6NDEx",
        },
        {
          x: 650,
          y: 850,
          id: "OTozMTI6MjMx",
        },
      ],
      tokens: [],
    }),
    new ModuleScene({
      name: "map3",
      canonical: {
        name: "flipmat/watch-station2",
        priority: 0,
      },
      nameInfo: {
        x: 82,
        y: 675.5514,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 14,
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
      detailsFile: "/flipmats/maps/watch-station2.json",
      journals: [
        {
          x: 1100,
          y: 3300,
          id: "MTM6MzEyOjI2Nw",
        },
        {
          x: 2300,
          y: 2300,
          id: "MTU6MzEyOjY4Nw",
        },
        {
          x: 650,
          y: 850,
          id: "MTM6MzEyOjQ4Mw",
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
        x: 272.2885,
        y: 85.932,
      },
      page: 4,
      width: 401,
      height: 964,
      tokenX: 19,
      tokenY: 76,
      tokenSize: 432,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.BYpxg06tP5hI6CzQ",
      name: {
        page: 8,
        x: 278.6864,
        y: 303.9856,
      },
      page: 8,
      width: 551,
      height: 551,
      tokenX: -3,
      tokenY: 110,
      tokenSize: 551,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.AuU3BGEz05Q180yI",
      page: 15,
      width: 681,
      height: 999,
      tokenX: -137,
      tokenY: -57,
      tokenSize: 299,
      forIds: ["MjM6NzI6NDIz", "MTY6NzI6MTQ3"],
    }),
    new ModuleNpc({
      id: "npc4",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.g4hfpuGdtTDq7KZw",
      page: 15,
      width: 681,
      height: 999,
      tokenX: -137,
      tokenY: -57,
      tokenSize: 299,
      forIds: ["MzA6MzEyOjUxOQ", "MTY6MzEyOjY4Nw"],
    }),
    new ModuleNpc({
      id: "npc5",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 16,
        x: 241.7274,
        y: 303.9856,
      },
      page: 16,
      width: 479,
      height: 479,
      tokenX: 44,
      tokenY: 105,
      tokenSize: 563,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc6",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.FIoRPHaHdYUPVKdT",
      label: "B",
      forIds: [
        "MjE6NzI6NjYz",
        "MTM6MzEyOjY2Mw",
        "Mjg6NzI6NjYz",
        "MTM6MzEyOjYwMw",
      ],
    }),
    new ModuleNpc({
      id: "npc7",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.Aktz95gNNzfAiTzk",
      name: {
        page: 19,
        x: 72.0599,
        y: 663,
        sentenceCase: true,
        substring: {
          start: 0,
          end: 10,
        },
      },
      label: "G",
      forIds: [
        "MjM6NzI6NjYz",
        "MTY6NzI6MTgz",
        "MjE6MzEyOjUxOQ",
        "MTk6NzI6NjYz",
        "MTI6MzEyOjQxMQ",
      ],
    }),
    new ModuleNpc({
      id: "npc8",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.FBq4bqtKUBpJUCMU",
      name: {
        page: 19,
        x: 72.0599,
        y: 423,
        sentenceCase: true,
        substring: {
          start: 0,
          end: 16,
        },
      },
      label: "B",
      forIds: [
        "MTk6NzI6NDIz",
        "MjA6NzI6NjYz",
        "MTM6NzI6NTA3",
        "MjY6NzI6NjYz",
        "MTI6MzEyOjM1MQ",
      ],
    }),
    new ModuleNpc({
      id: "npc9",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.RTviEfjYnsXa0wkT",
      label: "HH",
      forIds: [
        "MjA6NzI6MzYz",
        "Mjg6MzEyOjUxOQ",
        "Mjc6NzI6NjYz",
        "MTM6NzI6NDQ3",
      ],
    }),
    new ModuleNpc({
      id: "npc10",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.4okKASZDvBWTSu1U",
      name: {
        page: 23,
        x: 312.0611,
        y: 519,
        substring: {
          start: 0,
          end: 13,
        },
      },
      label: "I",
      forIds: ["MzA6NzI6NjYz", "MTY6NzI6ODc", "MjM6MzEyOjUxOQ"],
    }),
    new ModuleNpc({
      id: "npc11",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.3jkmJgV4zwygUqLy",
      name: {
        page: 18,
        x: 72.0599,
        y: 663,
        substring: {
          start: 0,
          end: 11,
        },
      },
      label: "M",
      forIds: ["MTg6NzI6NjYz", "OTo3Mjo1OTE"],
    }),
    new ModuleNpc({
      id: "npc12",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.dNATu2RQLFYY3hYn",
      name: {
        page: 25,
        x: 312.0611,
        y: 519,
        substring: {
          start: 0,
          end: 17,
        },
      },
      label: "TM",
      forIds: [
        "MjY6MzEyOjUxOQ",
        "Mjc6NzI6NDIz",
        "MjU6MzEyOjUxOQ",
        "OTo3Mjo0NTk",
      ],
    }),
    new ModuleNpc({
      id: "npc13",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.g3UYRJQCwnjdvCm9",
      label: "TI",
      forIds: ["MzE6NzI6Njg3"],
    }),
    new ModuleNpc({
      id: "npc14",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.IE0EM4KDUbI5ZJz0",
      label: "Z",
      forIds: ["MTg6MzEyOjUxOQ", "MjU6NzI6NjYz", "OTo3Mjo1NTU", "OTo3Mjo0OTU"],
    }),
    new ModuleNpc({
      id: "hazard1",
      actorUuid: "Compendium.pf2e.hazards.Actor.BHq5wpQU8hQEke8D",
      label: "HP",
      forIds: ["MjI6NzI6NjYz", "Mjk6NzI6NjYz", "MTU6NzI6NTY3"],
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Scenario #3-04" &&
        t.fontId === "GoodOT-Bold:15" &&
        t.page === 1,
    );
  }
  preprocess(text) {
    this.removeText(text, 3, 233.5711, 654.8302);
    for (let i = 0; i < text.length; i++) {
      text[i].text = text[i].text.replace(/�/, ".");
    }
  }
  finalize(moduleData) {
    this.prependJournal(moduleData, "MTg6MzYzOjY4Nw", "MTg6NzI6Njg3");
    this.prependJournal(moduleData, "MTk6MzYxOjY4Nw", "MTk6NzI6Njg3");
    this.prependJournal(moduleData, "MjA6MzYwOjY4Nw", "MjA6NzI6Njg3");
    this.prependJournal(moduleData, "MjE6MzYxOjY4Nw", "MjE6NzI6Njg3");
    this.prependJournal(moduleData, "MjM6MzYwOjY4Nw", "MjM6NzI6Njg3");
    this.prependJournal(moduleData, "MjU6MzYzOjY4Nw", "MjU6NzI6Njg3");
    this.prependJournal(moduleData, "MjY6MzYxOjY4Nw", "MjY6NzI6Njg3");
    this.prependJournal(moduleData, "Mjc6MzYwOjY4Nw", "Mjc6NzI6Njg3");
    this.prependJournal(moduleData, "Mjg6MzYxOjY4Nw", "Mjg6NzI6Njg3");
    this.prependJournal(moduleData, "MzA6MzYwOjY4Nw", "MzA6NzI6Njg3");
  }
}
