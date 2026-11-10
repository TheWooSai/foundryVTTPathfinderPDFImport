import { PFSSeason3Base } from "./base.js";
import { LabelImage } from "../../../core/images.js";
import { ModuleNpc } from "../../../core/module-npc.js";
import { ModuleScene } from "../../../core/module-scene.js";

export class PFS3_07 extends PFSSeason3Base {
  prefix = "pfs-3-07";
  fullName = "PFS #3-07 - Locked Lodge";
  pages = [
    this.TwoColumnWithRightCutout(3, 310),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumn(6),
    this.TwoColumnWithRightCutout(7, 520),
    this.TwoColumnWithMap(8, 360),
    this.TwoColumnWithRightCutout(9, 480),
    this.TwoColumn(10),
    this.TwoColumn(11),
    this.TwoColumnWithMap(12, 360),
    this.TwoColumn(13),
    this.TwoColumnWithMap(14, 360),
    this.TwoColumn(15),
    this.TwoColumn(16),
    this.TwoColumn(17),
    this.TwoColumnWithRightCutout(18, 0, "appendix1"),
    this.TwoColumnWithRightCutout(19, 610, "appendix1"),
    this.TwoColumnWithRightCutout(20, 610, "appendix1"),
    this.TwoColumn(21, "appendix1"),
    this.TwoColumnWithRightCutout(22, 0, "appendix2"),
    this.TwoColumnWithRightCutout(23, 610, "appendix2"),
    this.TwoColumnWithRightCutout(24, 610, "appendix2"),
    this.TwoColumn(25, "appendix2"),
    this.OneColumn(27, "handout1"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      canonical: {
        name: "pfs3-07/map1",
        priority: 0,
      },
      nameInfo: {
        x: 96,
        y: 681.3345,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 8,
      width: 1123,
      height: 749,
      imageLeft: 37,
      imageRight: 990,
      imageCols: 49 * 2,
      imageTop: 80,
      imageBottom: 702,
      imageRows: 32 * 2,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/pfs/maps/pfs3-07-map1.json",
      journals: [
        {
          x: 12550,
          y: 6050,
          id: "ODo3MjoyMTk",
        },
        {
          x: 11350,
          y: 6050,
          id: "OTo3Mjo5OQ",
        },
        {
          x: 10250,
          y: 6050,
          id: "MTA6NzI6Mzg3",
        },
        {
          x: 8550,
          y: 6050,
          id: "MTA6MzEyOjU3OQ",
        },
        {
          x: 8600,
          y: 3650,
          id: "MTE6NzI6NDk1",
        },
      ],
      tokens: [],
    }),
    new ModuleScene({
      name: "map2",
      canonical: {
        name: "pfs3-07/map2",
        priority: 0,
      },
      nameInfo: {
        x: 72.619,
        y: 685.5514,
      },
      nameFn: (name) => `${this.sentenceCase(name).substring(3).trim()} Cellar`,
      page: 12,
      width: 1079,
      height: 739,
      imageLeft: 366,
      imageRight: 993,
      imageCols: 24,
      imageTop: 68,
      imageBottom: 676,
      imageRows: 23,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/pfs/maps/pfs3-07-map2.json",
      journals: [
        {
          x: 3e3,
          y: 2750,
          id: "MTE6MzEyOjEzNQ",
        },
        {
          x: 2850,
          y: 2050,
          id: "MTE6MzEyOjUwNw",
        },
        {
          x: 3800,
          y: 2e3,
          id: "MTI6MzEyOjMxNQ",
        },
        {
          x: 3800,
          y: 2900,
          id: "MTM6NzI6NjAz",
        },
        {
          x: 4900,
          y: 2500,
          id: "MTM6MzEyOjE0Nw",
        },
      ],
      tokens: [],
    }),
    new ModuleScene({
      name: "map3",
      canonical: {
        name: "pfs3-07/map3",
        priority: 0,
      },
      nameInfo: {
        x: 72.619,
        y: 685.5514,
      },
      nameFn: (name) =>
        `${this.sentenceCase(name).substring(3).trim()} Basement`,
      page: 14,
      width: 1095,
      height: 730,
      imageLeft: 118,
      imageRight: 836,
      imageCols: 28,
      imageTop: 70,
      imageBottom: 679,
      imageRows: 24,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/pfs/maps/pfs3-07-map3.json",
      journals: [
        {
          x: 3e3,
          y: 2200,
          id: "MTQ6NzI6MjMx",
        },
        {
          x: 1800,
          y: 2200,
          id: "MTU6MzEyOjU3OQ",
        },
        {
          x: 3100,
          y: 1200,
          id: "MTY6NzI6Mjc5",
        },
        {
          x: 3200,
          y: 3100,
          id: "MTY6MzEyOjU3OQ",
        },
      ],
      tokens: [],
    }),
  ];
  journals = [
    new LabelImage({
      name: "journal1",
      page: 9,
      width: 541,
      height: 541,
      label: "OTozNzk6MTA1",
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 5,
        x: 392.2844,
        y: 84.932,
      },
      page: 5,
      width: 755,
      height: 944,
      tokenX: -169,
      tokenY: 32,
      tokenSize: 384,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.39ShWwOPdJq2X5o2",
      name: {
        page: 6,
        x: 145.9534,
        y: 86.432,
      },
      page: 6,
      width: 820,
      height: 1052,
      tokenX: -267,
      tokenY: 69,
      tokenSize: 352,
      forIds: ["MjE6NzI6Njg3", "MTU6NzI6MTQ3"],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.eVVAitAkOGCPzhXJ",
      page: 6,
      width: 820,
      height: 1052,
      tokenX: -267,
      tokenY: 69,
      tokenSize: 352,
      forIds: ["MjU6NzI6Njg3", "MTU6MzEyOjYxNQ"],
    }),
    new ModuleNpc({
      id: "npc4",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 7,
        x: 248.4051,
        y: 156.5614,
      },
      page: 7,
      width: 491,
      height: 491,
      tokenX: 7,
      tokenY: 96,
      tokenSize: 491,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc5",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.fpwpA2JmpbwREa5a",
      label: "AS",
      forIds: ["MjI6NzI6NDgz", "OTo3Mjo0MTE"],
    }),
    new ModuleNpc({
      id: "npc6",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.XYBA4EoyegNciY2P",
      uniqueKey:
        "Compendium.pf2e.pathfinder-monster-core.Actor.RTviEfjYnsXa0wkT",
      label: "EHH(3",
      forIds: ["MjQ6MzEyOjYwMw", "MTU6MzEyOjY4Nw"],
    }),
    new ModuleNpc({
      id: "npc7",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.HOQG0wl3ZtqS2j4v",
      uniqueKey:
        "Compendium.pf2e.pathfinder-monster-core.Actor.RTviEfjYnsXa0wkT",
      label: "WHH(3",
      forIds: ["MjA6MzEyOjMxNQ", "MTU6NzI6MTgz"],
    }),
    new ModuleNpc({
      id: "npc8",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.jItk6GNZ7lmT5zVY",
      label: "HJ(",
      forIds: ["MTk6MzEyOjYwMw", "MTA6MzEyOjg3"],
    }),
    new ModuleNpc({
      id: "npc9",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.dgwmJ8A8sROXAGgf",
      label: "HJ(",
      forIds: ["MTE6NzI6NjI3", "MjM6MzEyOjYwMw"],
    }),
    new ModuleNpc({
      id: "npc10",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.yPYQC2bfOYmqcfIB",
      label: "I",
      forIds: [
        "MjA6NzI6NjYz",
        "MTU6NzI6MjU1",
        "MTk6NzI6NjYz",
        "MTA6MzEyOjEyMw",
      ],
    }),
    new ModuleNpc({
      id: "npc11",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.xkXMKw8GhdI5FNar",
      label: "MB(",
      forIds: ["MjA6MzEyOjYwMw", "MTU6NzI6MjE5"],
    }),
    new ModuleNpc({
      id: "npc12",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.zzbBBSmjvCzJ6lyt",
      label: "MB(",
      forIds: ["MjQ6MzEyOjM2Mw", "MTU6MzEyOjY1MQ"],
    }),
    new ModuleNpc({
      id: "npc13",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.xjJV1G5FBeLV4KPQ",
      label: "T",
      forIds: ["MTg6NzI6NDgz", "OTo3Mjo0NzE"],
    }),
    new ModuleNpc({
      id: "npc14",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.IE0EM4KDUbI5ZJz0",
      label: "Z",
      forIds: ["MjQ6NzI6NjYz", "MTU6NzI6ODc", "MjM6NzI6NjYz", "MTE6NzI6NjYz"],
    }),
  ];
  blacklistedFonts = this.blacklistedFonts.concat(["GoodOT-Italic:5.247"]);
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Scenario #3-07" &&
        t.fontId === "GoodOT-Bold:15" &&
        t.page === 1,
    );
  }
  preprocess(text) {
    this.removeText(text, 3, 236.7611, 654.8302);
    this.moveX(text, 7, 322.4507, 687, 324);
    this.changeFontId(text, 7, 324.0668, 675, "GoodOT:9");
    this.changeFontId(text, 7, 324.0668, 663, "GoodOT:9");
    this.changeFontId(text, 7, 324.0668, 651, "GoodOT:9");
    this.changeFontId(text, 7, 324.0668, 639, "GoodOT:9");
    this.changeFontId(text, 7, 324.0668, 627, "GoodOT:9");
    this.changeFontId(text, 7, 355, 611.4641, "GoodOT-Bold:9");
    this.changeFontId(text, 7, 355, 597.4641, "GoodOT-Bold:9");
    this.changeFontId(text, 7, 355, 583.4641, "GoodOT-Bold:9");
    this.changeFontId(text, 7, 355, 569.4641, "GoodOT-Bold:9");
    this.changeFontId(text, 7, 355, 555.4641, "GoodOT-Bold:9");
    this.changeFontId(text, 7, 383.9758, 611.4641, "GoodOT:9");
    this.changeFontId(text, 7, 385.7198, 597.4641, "GoodOT:9");
    this.changeFontId(text, 7, 382.6477, 583.4641, "GoodOT:9");
    this.changeFontId(text, 7, 385.5197, 569.4641, "GoodOT:9");
    this.changeFontId(text, 7, 383.3998, 555.4641, "GoodOT:9");
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
    this.prependJournal(moduleData, "MTg6MzU2OjY4Nw", "MTg6NzI6NTA3");
    this.prependJournal(moduleData, "MTk6MzU1OjY4Nw", "MTk6NzI6Njg3");
    this.prependJournal(moduleData, "MjA6MzU2OjY4Nw", "MjA6NzI6Njg3");
    this.prependJournal(moduleData, "MjI6MzU2OjY4Nw", "MjI6NzI6NTA3");
    this.prependJournal(moduleData, "MjM6MzU1OjY4Nw", "MjM6NzI6Njg3");
    this.prependJournal(moduleData, "MjQ6MzU2OjY4Nw", "MjQ6NzI6Njg3");
  }
}
