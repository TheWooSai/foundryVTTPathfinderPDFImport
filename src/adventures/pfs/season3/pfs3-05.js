import { PFSSeason3Base } from "./base.js";
import { LabelImage } from "../../../core/images.js";
import { ModuleNpc } from "../../../core/module-npc.js";
import { ModuleScene, ModuleSceneTiled } from "../../../core/module-scene.js";

export class PFS3_05 extends PFSSeason3Base {
  prefix = "pfs-3-05";
  fullName = "PFS #3-05 - Inheritor's Rite";
  pages = [
    this.TwoColumnWithRightCutout(3, 340),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumn(6),
    this.TwoColumnWithRightCutout(7, 570),
    this.TwoColumnWithRightCutout(9, 0),
    this.TwoColumn(10),
    this.TwoColumn(12),
    this.TwoColumn(14),
    this.TwoColumn(15),
    this.TwoColumnWithRightCutout(16, 440, "appendix1"),
    this.TwoColumnWithRightCutout(17, 0, "appendix1"),
    this.TwoColumnWithRightCutout(18, 0, "appendix1"),
    this.TwoColumnWithRightCutout(19, 0, "appendix1"),
    this.TwoColumnWithRightCutout(20, 440, "appendix2"),
    this.TwoColumnWithRightCutout(21, 0, "appendix2"),
    this.TwoColumnWithRightCutout(22, 0, "appendix2"),
    this.TwoColumnWithRightCutout(23, 0, "appendix2"),
    this.OneColumn(25, "handout"),
    this.OneColumn(27, "handout"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      canonical: {
        name: "flipmat/city-sites2",
        priority: 0,
      },
      nameInfo: {
        x: 82,
        y: 675.5514,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 8,
      width: 958,
      height: 1178,
      imageLeft: 0,
      imageRight: 958,
      imageCols: 24,
      imageTop: 41,
      imageBottom: 1158,
      imageRows: 28,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/flipmats/maps/city-sites2.json",
    }),
    new ModuleSceneTiled({
      name: "map2",
      nameInfo: {
        x: 82,
        y: 660.3529,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 11,
      width: 372,
      height: 372,
      imageLeft: 0,
      imageRight: 372,
      imageCols: 6,
      imageTop: 0,
      imageBottom: 372,
      imageRows: 6,
      numTileCols: 3,
      numTileRows: 3,
      fillColor: "#000",
      tileRotations: [
        [2, 0, 3],
        [2, 1, 0],
        [1, 1, 0],
      ],
      tilePositions: [
        [0, 0],
        [0, 1],
        [0, 2],
        [1, 0],
        [1, 1],
        [1, 2],
        [2, 0],
        [2, 1],
        [2, 2],
      ],
    }),
    new ModuleScene({
      name: "map3",
      canonical: {
        name: "flipmat/city-sites3",
        priority: 0,
      },
      nameInfo: {
        x: 82,
        y: 675.5514,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 13,
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
      detailsFile: "/flipmats/maps/city-sites3.json",
    }),
  ];
  journals = [
    new LabelImage({
      name: "journal1",
      page: 26,
      width: 1200,
      height: 1200,
      label: "MjY6MjIxOjY4NQ",
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 3,
        x: 268.2216,
        y: 86.164,
      },
      page: 3,
      width: 395,
      height: 494,
      tokenX: 53,
      tokenY: 35,
      tokenSize: 550,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 5,
        x: 280.8002,
        y: 86.164,
      },
      page: 5,
      width: 684,
      height: 850,
      tokenX: -155,
      tokenY: 66,
      tokenSize: 346,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.mYpAGYbt6cGiTU8p",
      page: 9,
      width: 444,
      height: 853,
      tokenX: -68,
      tokenY: 26,
      tokenSize: 349,
      forIds: ["MTY6NzI6MjQz", "OTo3Mjo1Njc"],
    }),
    new ModuleNpc({
      id: "npc4",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.55uIx8vScaf8JeTY",
      page: 9,
      width: 444,
      height: 853,
      tokenX: -68,
      tokenY: 26,
      tokenSize: 349,
      forIds: ["MjA6NzI6MjU1", "OTo3Mjo0NzE"],
    }),
    new ModuleNpc({
      id: "npc5",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.uOgiYc5VGhSxkLFa",
      page: 12,
      width: 647,
      height: 915,
      tokenX: -105,
      tokenY: 34,
      tokenSize: 411,
      forIds: ["MTc6NzI6NTA3", "MTA6MzEyOjIxOQ"],
    }),
    new ModuleNpc({
      id: "npc6",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.43L2RtbBprItSjPY",
      page: 12,
      width: 647,
      height: 915,
      tokenX: -105,
      tokenY: 34,
      tokenSize: 411,
      forIds: ["MjE6NzI6NDgz", "MTA6MzEyOjEyMw"],
    }),
    new ModuleNpc({
      id: "npc7",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.2N2Nj4W9kWn2fU6P",
      label: "AK",
      forIds: ["MTY6NzI6NDgz", "OTo3Mjo2MDM"],
    }),
    new ModuleNpc({
      id: "npc8",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.RmgJ2iZ20AKxZZjQ",
      label: "AK(",
      forIds: ["MjA6NzI6NDgz", "OTo3Mjo1MDc"],
    }),
    new ModuleNpc({
      id: "npc9",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.HtrdSWlJzDf7dMOO",
      label: "HR",
      forIds: [
        "MTc6NzI6NjYz",
        "MTA6MzEyOjI1NQ",
        "MTk6NzI6NjYz",
        "MTQ6MzEyOjU0Mw",
      ],
    }),
    new ModuleNpc({
      id: "npc10",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.p0RvcmcEe8zfoMkT",
      label: "HR",
      forIds: [
        "MjE6NzI6NjYz",
        "MjM6NzI6NjYz",
        "MTk6NzI6MjU1",
        "MTA6MzEyOjE1OQ",
        "MTQ6MzEyOjQ0Nw",
      ],
    }),
    new ModuleNpc({
      id: "npc11",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.4fhQXAfVGQ0aX8LA",
      label: "MM(",
      forIds: ["MTQ6NzI6NjYz", "MTg6NzI6NjYz"],
    }),
    new ModuleNpc({
      id: "npc12",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.PcKhzFKtzNvtBfdI",
      label: "MM(",
      forIds: ["MjI6NzI6NjYz", "MTQ6NzI6NjAz"],
    }),
    new ModuleNpc({
      id: "npc13",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.qnu2pwoPe5Hh73vB",
      label: "UJ(",
      forIds: ["MTk6NzI6NTA3", "MTQ6MzEyOjUwNw"],
    }),
    new ModuleNpc({
      id: "npc14",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.MQMfOX5h2OgJrhm6",
      label: "UJ(",
      forIds: ["MjM6NzI6NDgz", "MTQ6MzEyOjQxMQ"],
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Scenario #3-05" &&
        t.fontId === "GoodOT-Bold:15" &&
        t.page === 1,
    );
  }
  preprocess(text) {
    this.removeText(text, 3, 236.7611, 654.8302);
    for (let i = 0; i < text.length; i++) {
      text[i].text = text[i].text.replace(/�/, ".");
    }
  }
  extractDetails(text, moduleData, sectionKey) {
    this.changeFontId(text, 19, 278.48, 327, "GoodOT:9");
    this.changeFontId(text, 23, 278.48, 303, "GoodOT:9");
    this.markIndented(text, 4, 312.0012, 111);
    this.markStartOfLine(text, 4, 321.0012, 99);
    this.markStartOfLine(text, 4, 321.0012, 87);
    this.markStartOfLine(text, 4, 321.0012, 75);
    this.markStartOfLine(text, 5, 81, 687);
    this.markStartOfLine(text, 5, 81, 675);
    this.markIndented(text, 5, 72, 663);
    this.markStartOfLine(text, 5, 81, 651);
    this.markStartOfLine(text, 5, 81, 639);
    this.markStartOfLine(text, 5, 81, 627);
    this.markStartOfLine(text, 5, 81, 615);
    this.markStartOfLine(text, 5, 81, 603);
    this.markStartOfLine(text, 5, 81, 591);
    this.markStartOfLine(text, 5, 81, 579);
    this.markIndented(text, 5, 72, 567);
    this.markStartOfLine(text, 5, 81, 555);
    this.markStartOfLine(text, 5, 81, 543);
    this.markStartOfLine(text, 5, 81, 531);
    this.markStartOfLine(text, 5, 81, 519);
    this.markIndented(text, 5, 72, 387);
    this.markStartOfLine(text, 5, 81, 375);
    this.markStartOfLine(text, 5, 81, 363);
    this.markStartOfLine(text, 5, 81, 351);
    this.markStartOfLine(text, 5, 81, 339);
    this.markStartOfLine(text, 5, 81, 327);
    this.markStartOfLine(text, 5, 81, 315);
    this.markStartOfLine(text, 5, 81, 303);
    this.markIndented(text, 5, 72, 291);
    this.markStartOfLine(text, 5, 81, 279);
    this.markStartOfLine(text, 5, 81, 267);
    this.markStartOfLine(text, 5, 81, 255);
    this.markStartOfLine(text, 5, 81, 243);
    this.markStartOfLine(text, 5, 81, 231);
    this.markIndented(text, 5, 72, 219);
    this.markStartOfLine(text, 5, 81, 207);
    this.markStartOfLine(text, 5, 81, 195);
    this.markStartOfLine(text, 5, 81, 183);
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {
    this.prependJournal(moduleData, "MjA6MzYzOjY4Nw", "MjA6NzI6NTA3");
    this.prependJournal(moduleData, "MjE6MzY0OjY4Nw", "MjE6NzI6Njg3");
    this.prependJournal(moduleData, "MjI6MzQxOjY4Nw", "MjI6NzI6Njg3");
    this.prependJournal(moduleData, "MjM6MzYzOjY4Nw", "MjM6NzI6Njg3");
    this.prependJournal(moduleData, "MTY6MzYzOjY4Nw", "MTY6NzI6NTA3");
    this.prependJournal(moduleData, "MTc6MzY0OjY4Nw", "MTc6NzI6Njg3");
    this.prependJournal(moduleData, "MTg6MzQxOjY4Nw", "MTg6NzI6Njg3");
    this.prependJournal(moduleData, "MTk6MzYzOjY4Nw", "MTk6NzI6Njg3");
    this.prependJournal(moduleData, "NzozNDU6Njg3", "Njo3Mjo2MTU");
  }
}
