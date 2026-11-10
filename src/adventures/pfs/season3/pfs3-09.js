import { PFSSeason3Base } from "./base.js";
import { LabelImage } from "../../../core/images.js";
import { ModuleNpc } from "../../../core/module-npc.js";
import { ModuleSceneTiled } from "../../../core/module-scene.js";

export class PFS3_09 extends PFSSeason3Base {
  prefix = "pfs-3-09";
  fullName = "PFS #3-09 - The Secluded Siege";
  pages = [
    this.TwoColumnWithRightCutout(3, 320),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumn(6),
    this.TwoColumnWithMap(7, 310),
    this.TwoColumn(8),
    this.TwoColumn(9),
    this.TwoColumn(10),
    this.TwoColumnWithMap(11, 420),
    this.TwoColumn(12),
    this.TwoColumn(13),
    this.TwoColumn(15),
    this.TwoColumnWithRightCutout(16, 610, "appendix1"),
    this.TwoColumn(17, "appendix1"),
    this.TwoColumnWithRightCutout(18, 610, "appendix1"),
    this.TwoColumnWithRightCutout(19, 520, "appendix1"),
    this.TwoColumn(20, "appendix1"),
    this.TwoColumnWithRightCutout(21, 610, "appendix2"),
    this.TwoColumnWithRightCutout(22, 610, "appendix2"),
    this.TwoColumnWithRightCutout(23, 520, "appendix2"),
    this.TwoColumn(24, "appendix2"),
    this.OneColumn(26, "handout1"),
  ];
  scenes = [
    new ModuleSceneTiled({
      name: "map1",
      nameInfo: {
        x: 60.75,
        y: 678.897,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 7,
      width: 261,
      height: 261,
      imageLeft: 0,
      imageRight: 261,
      imageCols: 6,
      imageTop: 0,
      imageBottom: 261,
      imageRows: 6,
      numTileCols: 4,
      numTileRows: 3,
      fillColor: "#000",
      tileRotations: [
        [3, 3, 0, 3],
        [1, 0, 0, 0],
        [2, 1, 1, 0],
      ],
      tilePositions: [
        [0, 1],
        [3, 0],
        [3, 1],
        [1, 0],
        [1, 2],
        [1, 1],
        [2, 1],
        [0, 0],
        [2, 0],
        [0, 2],
        [2, 2],
      ],
      tileOffsets: {
        1: [0, 0.5],
        2: [0, 0.5],
      },
    }),
    new ModuleSceneTiled({
      name: "map2",
      nameInfo: {
        x: 51,
        y: 682.5514,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 11,
      width: 272,
      height: 272,
      imageLeft: 0,
      imageRight: 272,
      imageCols: 6,
      imageTop: 0,
      imageBottom: 272,
      imageRows: 6,
      numTileCols: 4,
      numTileRows: 2,
      fillColor: "#000",
      tileRotations: [
        [1, 1, 3, 3],
        [1, 1, 0, 0],
      ],
      tilePositions: [
        [0, 0],
        [2, 1],
        [2, 0],
        [0, 1],
        [1, 0],
        [1, 1],
        [3, 0],
        [3, 1],
      ],
    }),
    new ModuleSceneTiled({
      name: "map3",
      nameInfo: {
        x: 125.25,
        y: 681.3345,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 14,
      width: 261,
      height: 261,
      imageLeft: 0,
      imageRight: 261,
      imageCols: 6,
      imageTop: 0,
      imageBottom: 261,
      imageRows: 6,
      numTileCols: 3,
      numTileRows: 5,
      fillColor: "#000",
      tileRotations: [
        [2, 0, 3],
        [2, 0, 1],
        [0, 0, 0],
        [2, 0, 0],
        [1, 0, 0],
      ],
      tilePositions: [
        [2, 1],
        [1, 1],
        [1, 2],
        [2, 2],
        [1, 3],
        [0, 1],
        [1, 4],
        [0, 2],
        [0, 3],
        [2, 3],
        [1, 0],
        [2, 0],
        [0, 4],
        [2, 4],
        [0, 0],
      ],
    }),
  ];
  journals = [
    new LabelImage({
      name: "journal1",
      page: 12,
      width: 816,
      height: 766,
      label: "MTI6MTQwOjg2",
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 4,
        x: 268.1969,
        y: 84.932,
      },
      page: 4,
      width: 734,
      height: 1011,
      tokenX: -187,
      tokenY: 15,
      tokenSize: 423,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 5,
        x: 352.3909,
        y: 84.932,
      },
      page: 5,
      width: 859,
      height: 1219,
      tokenX: -386,
      tokenY: -40,
      tokenSize: 323,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.kTsUEbM3JkhT5VZM",
      page: 6,
      width: 425,
      height: 1134,
      tokenX: -42,
      tokenY: -75,
      tokenSize: 294,
      forIds: ["MTY6NzI6NDcx", "ODo3Mjo2NjM", "MjE6NzI6NDcx", "ODo3Mjo1Njc"],
    }),
    new ModuleNpc({
      id: "npc4",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.sMNqIHHxcVBXG08h",
      label: "CW",
      forIds: [
        "MjE6MzEyOjYwMw",
        "MjI6MzEyOjYwMw",
        "ODo3Mjo1MzE",
        "MTE6MzEyOjE3MQ",
      ],
    }),
    new ModuleNpc({
      id: "npc5",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.Eyf5gaIlI4X2HCos",
      label: "CS(",
      forIds: ["MTg6NzI6NjUx", "MTE6MzEyOjIzMQ"],
    }),
    new ModuleNpc({
      id: "npc6",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.WRVcJ6z2q2oDxTO7",
      label: "CS(",
      forIds: ["MjI6NzI6NjUx", "MTE6MzEyOjEzNQ"],
    }),
    new ModuleNpc({
      id: "npc7",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.LHEI3E4THLsz0rr0",
      label: "EZH",
      forIds: ["MjQ6NzI6Njg3", "MTM6MzEyOjM1MQ"],
    }),
    new ModuleNpc({
      id: "npc8",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.DOG6jdFk7JmBDEBg",
      label: "FST",
      forIds: ["MjM6MzEyOjUxOQ", "MTM6MzEyOjQyMw"],
    }),
    new ModuleNpc({
      id: "npc9",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.VC7rtYR4hLxwg7WZ",
      label: "G",
      forIds: ["MTc6NzI6Njg3", "MTg6MzEyOjYwMw", "MTE6MzEyOjI2Nw"],
    }),
    new ModuleNpc({
      id: "npc10",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.vwV33OVSDH6fsdPI",
      label: "MG(3",
      forIds: [
        "MTk6MzEyOjUxOQ",
        "MjM6NzI6NjYz",
        "MTM6MzEyOjQ4Mw",
        "MTM6MzEyOjM4Nw",
      ],
    }),
    new ModuleNpc({
      id: "npc11",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.WQYzPF4cN4msA8lw",
      label: "ST",
      forIds: ["MTk6NzI6NDgz", "MTM6MzEyOjUxOQ"],
    }),
    new ModuleNpc({
      id: "npc12",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.DBTbqI9QQRtlJwWh",
      label: "W",
      forIds: ["MTY6MzEyOjYwMw", "ODo3Mjo2Mjc"],
    }),
    new ModuleNpc({
      id: "npc13",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.WioQ6rOeMRuTOliY",
      label: "ZB",
      forIds: ["MTk6NzI6NjYz", "MTM6MzEyOjU1NQ"],
    }),
    new ModuleNpc({
      id: "npc14",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.EDYKUdYmilw3rgJg",
      label: "ZH",
      forIds: ["MjA6NzI6Njg3"],
    }),
  ];
  blacklistedFonts = this.blacklistedFonts.concat(["GoodOT-Italic:5.247"]);
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Scenario #3-09" &&
        t.fontId === "GoodOT-Bold:15" &&
        t.page === 1,
    );
  }
  preprocess(text) {
    this.removeText(text, 3, 255.5405, 654.8302);
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
    this.prependJournal(moduleData, "MTY6MzYzOjY4Nw", "MTY6NzI6NTA3");
    this.prependJournal(moduleData, "MTg6MzY0OjY4Nw", "MTg6NzI6Njg3");
    this.prependJournal(moduleData, "MTk6MzYzOjY4Nw", "MTk6NzI6Njg3");
    this.prependJournal(moduleData, "MjE6MzYzOjY4Nw", "MjE6NzI6NTA3");
    this.prependJournal(moduleData, "MjI6MzY0OjY4Nw", "MjI6NzI6Njg3");
    this.prependJournal(moduleData, "MjM6MzYzOjY4Nw", "MjM6NzI6Njg3");
  }
}
