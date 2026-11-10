import { PFSSeason3Base } from "./base.js";
import { LabelImage } from "../../../core/images.js";
import { ModuleNpc } from "../../../core/module-npc.js";
import { ModuleScene, ModuleSceneTiled } from "../../../core/module-scene.js";

export class PFS3_10 extends PFSSeason3Base {
  prefix = "pfs-3-10";
  fullName = "PFS #3-10 - Delve the Pallid Depths";
  pages = [
    this.TwoColumnWithRightCutout(3, 320),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumnWithMap(6, 510),
    this.TwoColumn(8),
    this.TwoColumn(9),
    this.TwoColumn(10),
    this.TwoColumn(11),
    this.TwoColumn(12),
    this.TwoColumnWithMap(13, 310),
    this.TwoColumn(14),
    this.TwoColumn(15),
    this.TwoColumnWithRightCutout(16, 510, "appendix1"),
    this.TwoColumnWithRightCutout(17, 0, "appendix1"),
    this.TwoColumnWithRightCutout(18, 0, "appendix1"),
    this.TwoColumn(19, "appendix1"),
    this.TwoColumnWithRightCutout(20, 0, "appendix1"),
    this.TwoColumnWithRightCutout(21, 510, "appendix2"),
    this.TwoColumnWithRightCutout(22, 0, "appendix2"),
    this.TwoColumnWithRightCutout(23, 0, "appendix2"),
    this.TwoColumn(24, "appendix2"),
    this.TwoColumnWithRightCutout(25, 0, "appendix2"),
    this.OneColumn(27, "handout1"),
    this.OneColumn(28, "handout2"),
    this.OneColumn(29, "handout3"),
  ];
  scenes = [
    new ModuleSceneTiled({
      name: "map1",
      nameInfo: {
        x: 72,
        y: 675.5514,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 6,
      width: 271,
      height: 271,
      imageLeft: 0,
      imageRight: 271,
      imageCols: 6,
      imageTop: 0,
      imageBottom: 271,
      imageRows: 6,
      numTileCols: 4,
      numTileRows: 1,
      fillColor: "#000",
      tileRotations: [[3, 3, 1, 3]],
      tilePositions: [
        [0, 0],
        [1, 0],
        [2, 0],
        [3, 0],
      ],
      journals: [
        {
          x: 650,
          y: 250,
          id: "NTozMTI6OTk",
        },
      ],
      tokens: [],
    }),
    new ModuleScene({
      name: "map2",
      canonical: {
        name: "flipmat/dungeon1",
        priority: 0,
      },
      nameInfo: {
        x: 82,
        y: 684.5514,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 7,
      width: 958,
      height: 1196,
      imageLeft: 0,
      imageRight: 958,
      imageCols: 24,
      imageTop: 0,
      imageBottom: 1196,
      imageRows: 30,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/flipmats/maps/dungeon1.json",
      journals: [
        {
          x: 1300,
          y: 1600,
          id: "ODo3Mjo0MzU",
        },
        {
          x: 1200,
          y: 1200,
          id: "ODo3MjoxMjM",
        },
        {
          x: 850,
          y: 1950,
          id: "ODozMTI6MzE1",
        },
        {
          x: 1500,
          y: 1950,
          id: "ODozMTI6MzE1",
        },
        {
          x: 900,
          y: 2500,
          id: "ODozMTI6MzE1",
        },
        {
          x: 2e3,
          y: 2200,
          id: "OTo3Mjo1NTU",
        },
        {
          x: 1450,
          y: 2600,
          id: "ODozMTI6MzE1",
        },
        {
          x: 2600,
          y: 2400,
          id: "OTo3Mjo5OQ",
        },
        {
          x: 2e3,
          y: 3050,
          id: "OTozMTI6MTk1",
        },
        {
          x: 1e3,
          y: 3400,
          id: "MTA6MzEyOjM2Mw",
        },
        {
          x: 2700,
          y: 3e3,
          id: "MTA6MzEyOjI3OQ",
        },
        {
          x: 2750,
          y: 1600,
          id: "MTA6MzEyOjI0Mw",
        },
        {
          x: 600,
          y: 850,
          id: "NjozMTI6MTk1",
        },
      ],
      tokens: [],
    }),
    new ModuleSceneTiled({
      name: "map3",
      nameInfo: {
        x: 72,
        y: 682.5514,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 13,
      width: 251,
      height: 251,
      imageLeft: 0,
      imageRight: 251,
      imageCols: 6,
      imageTop: 0,
      imageBottom: 251,
      imageRows: 6,
      numTileCols: 4,
      numTileRows: 3,
      fillColor: "#000",
      tileRotations: [
        [0, 2, 2, 3],
        [1, 1, 2, 3],
        [0, 1, 0, 3],
      ],
      tilePositions: [
        [1, 0],
        [2, 0],
        [3, 0],
        [0, 1],
        [1, 1],
        [2, 1],
        [3, 1],
        [1, 2],
        [2, 2],
        [3, 2],
      ],
      journals: [
        {
          x: 650,
          y: 550,
          id: "MTI6NzI6NTQz",
        },
        {
          x: 750,
          y: 1450,
          id: "MTI6MzEyOjU5MQ",
        },
        {
          x: 2100,
          y: 1450,
          id: "MTI6MzI3OjI1NQ",
        },
      ],
      tokens: [],
    }),
  ];
  journals = [
    new LabelImage({
      name: "journal1",
      page: 3,
      width: 501,
      height: 611,
      label: "MzoyNTc6ODY",
    }),
    new LabelImage({
      name: "journal2",
      page: 5,
      width: 443,
      height: 611,
      label: "NToyNjk6Mzg2",
    }),
    new LabelImage({
      name: "journal3",
      page: 10,
      width: 637,
      height: 746,
      label: "MTA6MTA5Ojg2",
    }),
    new LabelImage({
      name: "journal4",
      page: 12,
      width: 679,
      height: 795,
      label: "MTI6MTM0Ojg2",
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.AIO9Hug8KBesUfxI",
      page: 26,
      width: 592,
      height: 693,
      tokenX: -42,
      tokenY: 55,
      tokenSize: 553,
      forIds: [
        "MTg6NzI6NjYz",
        "MTA6NzI6NDcx",
        "MjM6NzI6NjYz",
        "MTA6MzEyOjY2Mw",
      ],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.3bijukcKD8MfoHA9",
      page: 26,
      width: 594,
      height: 695,
      tokenX: -51,
      tokenY: -82,
      tokenSize: 331,
      forIds: [
        "MjA6NzI6NjYz",
        "MTM6MzEyOjEzNQ",
        "MjU6NzI6NjYz",
        "MTM6MzEyOjc1",
      ],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.AIO9Hug8KBesUfxI",
      label: "BBE",
      forIds: ["MjI6NzI6NjYz", "OTozMTI6MzAz"],
    }),
    new ModuleNpc({
      id: "npc4",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.4S77ftUx1zp7JscD",
      label: "BSC",
      forIds: ["MTc6NzI6NDQ3", "OTozMTI6MzYz", "MjI6NzI6NDEx"],
    }),
    new ModuleNpc({
      id: "npc5",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.YwkPGpBPttW2G7Xn",
      label: "BSG",
      forIds: ["MTc6NzI6NjYz", "OTozMTI6Mzk5"],
    }),
    new ModuleNpc({
      id: "npc6",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.vkrKdprKwRpuXHS3",
      label: "CMP",
      forIds: ["MjM6NzI6Mzk5", "MTA6MzEyOjYyNw"],
    }),
    new ModuleNpc({
      id: "npc7",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.KH1GkazaI59zftst",
      label: "CH",
      forIds: ["MjA6NzI6Mzk5"],
    }),
    new ModuleNpc({
      id: "npc8",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.UfiWHXnDg13Gqyyu",
      label: "FS",
      forIds: ["MjU6NzI6Mzk5"],
    }),
    new ModuleNpc({
      id: "npc9",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.xnpuGO8jEMba9wy5",
      label: "GB",
      forIds: ["MjE6NzI6NDgz", "NjozMTI6NDQ3", "MTY6MzEyOjMwMw"],
    }),
    new ModuleNpc({
      id: "npc10",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.Hez7S4Mhvi816fHi",
      label: "USC",
      forIds: ["MjE6NzI6MjY3", "NjozMTI6NDEx"],
    }),
    new ModuleNpc({
      id: "npc11",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.sHl25TefznyV8xC8",
      label: "USG",
      forIds: ["MTY6NzI6NDgz", "Njo3Mjo4Nw"],
    }),
    new ModuleNpc({
      id: "npc12",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.2mg30nJR6P3HJDSd",
      label: "VBS",
      forIds: ["MTY6MzEyOjUwNw", "NjozMTI6NTA3", "MjE6MzEyOjQxMQ"],
    }),
    new ModuleNpc({
      id: "npc13",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.WQUsCm35NNZUlJYy",
      label: "FRT",
      forIds: ["MTk6NzI6NjYz", "MTI6MzEyOjQxMQ"],
    }),
    new ModuleNpc({
      id: "npc14",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.538nxlPKC93GXzZh",
      label: "MP",
      forIds: ["MTg6NzI6NDEx", "MTA6NzI6NDM1"],
    }),
    new ModuleNpc({
      id: "npc15",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.uip49rfJG1KuUlyn",
      label: "RT",
      forIds: ["MTI6MzEyOjM1MQ", "MjQ6NzI6NjYz"],
    }),
  ];
  blacklistedFonts = this.blacklistedFonts.concat([]);
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Scenario #3-10" &&
        t.fontId === "GoodOT-Bold:15" &&
        t.page === 1,
    );
  }
  preprocess(text) {
    this.removeText(text, 3, 242.0306, 654.8302);
    for (let i = 0; i < text.length; i++) {
      ((text[i].text = text[i].text.replace(/�/, ".")),
        text[i].fontId === "Osaka:10" &&
          text[i].page === 29 &&
          ((text[i].fontId = "GoodOT:9"),
          (text[i].fontName = "GoodOT"),
          (text[i].fontSize = 9),
          (text[i].text = "\u2022"),
          (text[i].y += 1)));
    }
  }
  extractDetails(text, moduleData, sectionKey) {
    this.markIndented(text, 28, 98.5, 663);
    this.markIndented(text, 28, 98.5, 591);
    this.markIndented(text, 28, 98.5, 531);
    this.markIndented(text, 28, 98.5, 471);
    this.markIndented(text, 28, 98.5, 399);
    this.markIndented(text, 28, 98.5, 315);
    this.markIndented(text, 28, 107.5, 651);
    this.markIndented(text, 28, 107.5, 579);
    this.markIndented(text, 28, 107.5, 519);
    this.markIndented(text, 28, 107.5, 459);
    this.markIndented(text, 28, 107.5, 435);
    this.markIndented(text, 28, 107.5, 387);
    this.markIndented(text, 28, 107.5, 351);
    this.markIndented(text, 28, 107.5, 303);
    this.markIndented(text, 28, 107.5, 267);
    this.markIndented(text, 28, 107.5, 243);
    this.markIndented(text, 27, 98.5, 663);
    this.markIndented(text, 27, 107.5, 651);
    this.markIndented(text, 27, 98.5, 579);
    this.markIndented(text, 27, 107.5, 567);
    this.markIndented(text, 27, 98.5, 519);
    this.markIndented(text, 27, 107.5, 507);
    this.markIndented(text, 27, 98.5, 459);
    this.markIndented(text, 27, 107.5, 447);
    this.markIndented(text, 27, 98.5, 375);
    this.markIndented(text, 27, 107.5, 363);
    this.markIndented(text, 27, 107.5, 327);
    this.markIndented(text, 27, 98.5, 291);
    this.markIndented(text, 27, 107.5, 279);
    this.markIndented(text, 27, 107.5, 231);
    this.markIndented(text, 27, 107.5, 195);
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {
    this.prependJournal(moduleData, "MTY6MzYzOjY4Nw", "MTY6NzI6NTA3");
    this.prependJournal(moduleData, "MTc6MzYxOjY4Nw", "MTc6NzI6Njg3");
    this.prependJournal(moduleData, "MTg6MzYwOjY4Nw", "MTg6NzI6Njg3");
    this.prependJournal(moduleData, "MjA6MzYwOjY4Nw", "MjA6NzI6Njg3");
    this.prependJournal(moduleData, "MjE6MzYzOjY4Nw", "MjE6NzI6NTA3");
    this.prependJournal(moduleData, "MjI6MzYxOjY4Nw", "MjI6NzI6Njg3");
    this.prependJournal(moduleData, "MjM6MzYwOjY4Nw", "MjM6NzI6Njg3");
    this.prependJournal(moduleData, "MjU6MzYwOjY4Nw", "MjU6NzI6Njg3");
  }
}
