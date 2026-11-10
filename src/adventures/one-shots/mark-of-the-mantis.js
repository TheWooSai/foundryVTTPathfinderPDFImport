import { OneShotBase } from "./base.js";
import { AdventureImage, LabelImage } from "../../core/images.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class MarkOfTheMantis extends OneShotBase {
  prefix = "mark-of-the-mantis";
  fullName = "Mark of the Mantis";
  pages = [
    this.TwoColumn(3),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumn(6),
    this.TwoColumn(7),
    this.TwoColumn(8),
    this.TwoColumnWithRightCutout(10, 300),
    this.TwoColumn(11),
    this.TwoColumn(12),
    this.TwoColumn(13),
    this.TwoColumn(14),
    this.TwoColumn(15),
    this.TwoColumn(16),
    this.TwoColumn(17),
    this.TwoColumn(19),
    this.TwoColumn(20),
    this.TwoColumn(21),
    this.TwoColumn(22),
    this.OneColumn(23, "handout"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      canonical: {
        name: "mark-of-the-mantis/map1",
        priority: 0,
      },
      nameInfo: {
        x: 85.5,
        y: 671.4511,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 9,
      width: 1349,
      height: 924,
      imageLeft: 70,
      imageRight: 1278,
      imageCols: 22,
      imageTop: 71,
      imageBottom: 852,
      imageRows: 34,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      rotateCW: 1,
      detailsFile: "/oneshot/maps/mark-of-the-mantis-map1.json",
      journals: [
        {
          x: 650,
          y: 950,
          id: "ODozMTE6Mjkx",
        },
        {
          x: 1150,
          y: 3600,
          id: "MTE6MzExOjQ3MQ",
        },
        {
          x: 2850,
          y: 1300,
          id: "MTE6MzExOjE1OQ",
        },
        {
          x: 1500,
          y: 2600,
          id: "MTI6MzExOjI1NQ",
        },
        {
          x: 1400,
          y: 2200,
          id: "MTM6Njk6NTkx",
        },
        {
          x: 1900,
          y: 1900,
          id: "MTM6MzExOjM4Nw",
        },
        {
          x: 1600,
          y: 1800,
          id: "MTQ6MzExOjU5MQ",
        },
        {
          x: 1300,
          y: 1700,
          id: "MTQ6MzcxOjM5OQ",
        },
        {
          x: 1250,
          y: 1850,
          id: "MTQ6MzExOjE5NQ",
        },
        {
          x: 2100,
          y: 3100,
          id: "MTQ6MzExOjEzNQ",
        },
        {
          x: 1800,
          y: 2800,
          id: "MTU6Njk6NDM1",
        },
        {
          x: 1900,
          y: 3150,
          id: "MTU6Njk6MTEx",
        },
        {
          x: 2200,
          y: 3300,
          id: "MTU6MzExOjMxNQ",
        },
        {
          x: 2300,
          y: 3100,
          id: "MTU6MzExOjIzMQ",
        },
        {
          x: 2150,
          y: 2950,
          id: "MTU6MzExOjExMQ",
        },
        {
          x: 2300,
          y: 2600,
          id: "MTY6Njk6NTkx",
        },
        {
          x: 2700,
          y: 4100,
          id: "MTc6MzExOjY4Nw",
        },
      ],
      tokens: [
        {
          id: "npc1",
          x: 2900,
          y: 1100,
        },
        {
          id: "npc8",
          x: 600,
          y: 1700,
        },
        {
          id: "npc8",
          x: 600,
          y: 1800,
        },
        {
          id: "npc8",
          x: 600,
          y: 1900,
        },
        {
          id: "npc8",
          x: 600,
          y: 2e3,
        },
        {
          id: "npc8",
          x: 500,
          y: 1700,
        },
        {
          id: "npc8",
          x: 500,
          y: 1800,
        },
        {
          id: "npc8",
          x: 500,
          y: 1900,
        },
        {
          id: "npc8",
          x: 500,
          y: 2e3,
        },
        {
          id: "npc8",
          x: 400,
          y: 1700,
        },
        {
          id: "npc8",
          x: 400,
          y: 1800,
        },
        {
          id: "npc8",
          x: 400,
          y: 1900,
        },
        {
          id: "npc8",
          x: 400,
          y: 2e3,
        },
        {
          id: "npc3",
          x: 1700,
          y: 2e3,
        },
        {
          id: "npc4",
          x: 2300,
          y: 2600,
        },
      ],
    }),
    new ModuleScene({
      name: "map2",
      canonical: {
        name: "mark-of-the-mantis/map2",
        priority: 0,
      },
      nameInfo: {
        x: 58.5,
        y: 671.4511,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 18,
      width: 1325,
      height: 1065,
      imageLeft: 54,
      imageRight: 1227,
      imageCols: 23,
      imageTop: 55,
      imageBottom: 1055,
      imageRows: 27,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      rotateCW: 3,
      detailsFile: "/oneshot/maps/mark-of-the-mantis-map2.json",
      journals: [
        {
          x: 650,
          y: 800,
          id: "MTc6MzExOjU0Mw",
        },
      ],
      tokens: [
        {
          id: "npc6",
          x: 1100,
          y: 1400,
        },
        {
          id: "npc5",
          x: 900,
          y: 1300,
        },
      ],
    }),
  ];
  journals = [
    new AdventureImage({
      name: "journal1",
      page: 1,
      width: 1262,
      height: 793,
    }),
    new LabelImage({
      name: "journal2",
      page: 14,
      width: 875,
      height: 997,
      label: "MTQ6NzQ6NzA",
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.6XlGTt3RveX49YbC",
      page: 12,
      width: 728,
      height: 1126,
      tokenX: 34,
      tokenY: 16,
      tokenSize: 874,
      forIds: ["MTI6MzExOjYwMw"],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-3.Actor.ULfACJrDBnZLNBKj",
      page: 13,
      width: 653,
      height: 1230,
      tokenX: 39,
      tokenY: -9,
      tokenSize: 502,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid: "Compendium.pf2e.one-shot-bestiary.Actor.Ve1QhQgmE6Ex2Guc",
      page: 14,
      width: 875,
      height: 997,
      tokenX: -242,
      tokenY: 56,
      tokenSize: 409,
      forIds: ["MTM6MzExOjExMQ"],
    }),
    new ModuleNpc({
      id: "npc4",
      actorUuid: "Compendium.pf2e.one-shot-bestiary.Actor.RGcXNLz4TaziTInr",
      page: 16,
      width: 692,
      height: 896,
      tokenX: -212,
      tokenY: 54,
      tokenSize: 560,
      forIds: ["MTY6MzM2OjE5NQ"],
    }),
    new ModuleNpc({
      id: "npc5",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.NW1Ax1QGE9W4DmiN",
      page: 19,
      width: 796,
      height: 1180,
      tokenX: -220,
      tokenY: 85,
      tokenSize: 508,
      forIds: ["MTk6Njk6NjUx"],
    }),
    new ModuleNpc({
      id: "npc6",
      actorUuid: "Compendium.pf2e.one-shot-bestiary.Actor.SoSFKK1TmqMqtnuR",
      page: 20,
      width: 653,
      height: 997,
      tokenX: -222,
      tokenY: 38,
      tokenSize: 297,
      forIds: ["MTk6MzExOjMwMw"],
    }),
    new ModuleNpc({
      id: "npc7",
      actorUuid: "Compendium.pf2e.one-shot-bestiary.Actor.T2lqHFAnZ1u6Z6MD",
      page: 20,
      width: 653,
      height: 997,
      tokenX: -222,
      tokenY: 38,
      tokenSize: 297,
      forIds: ["MjI6MzExOjY4Nw"],
    }),
    new ModuleNpc({
      id: "npc8",
      actorUuid: "Compendium.pf2e.one-shot-bestiary.Actor.pPk3CgAHycfQZno7",
      label: "KG",
      forIds: ["MTE6Njk6MTk1"],
    }),
    new ModuleNpc({
      id: "npc9",
      actorUuid: "Compendium.pf2e.hazards.Actor.d3YklujLpBFC5HfB",
      label: "GC",
      forIds: ["MjE6Njk6NTA3"],
    }),
    new ModuleNpc({
      id: "npc10",
      actorUuid: "Compendium.pf2e.one-shot-bestiary.Actor.8ct9FQL7WuiX4Dve",
      label: "HoD",
      forIds: ["MTU6Njk6Njg3"],
    }),
  ];
  blacklistedFonts = this.blacklistedFonts.concat([
    "AlembicBeta-RegularOne:18",
  ]);
  headingFontIds = this.headingFontIds.concat([
    "AlembicBeta-RegularOne:16",
    "GoodOT-CondBold:12",
  ]);
  normalFontIds = this.normalFontIds.concat([]);
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Pathfinder One-Shot: Mark of the Mantis" &&
        t.fontId === "SabonLTStd-Italic:9" &&
        t.page === 2,
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    this.markIndented(text, 13, 311, 63);
    this.markIndented(text, 15, 69, 639);
    this.markIndented(text, 15, 69, 627);
    this.markIndented(text, 21, 69, 459);
    this.markIndented(text, 21, 69, 447);
    this.removeText(text, 23, 69, 687);
    this.changeFontId(text, 23, 69.0599, 519, "SubheadingFont:13");
    this.markStartOfLine(text, 23, 69, 615);
    this.markStartOfLine(text, 23, 69, 603);
    this.markStartOfLine(text, 23, 69, 591);
    this.markStartOfLine(text, 23, 69, 579);
    this.markStartOfLine(text, 23, 69, 567);
    this.markIndented(text, 23, 78, 555);
    this.markStartOfLine(text, 23, 69, 543);
    this.markStartOfLine(text, 23, 69.0599, 519);
    this.markIndented(text, 23, 69, 507);
    this.markStartOfLine(text, 23, 69, 495);
    this.markStartOfLine(text, 23, 69, 483);
    this.markStartOfLine(text, 23, 69, 471);
    this.markStartOfLine(text, 23, 69, 459);
    this.markStartOfLine(text, 23, 69, 363);
    this.markStartOfLine(text, 23, 69, 351);
    this.markStartOfLine(text, 23, 69, 315);
    this.markStartOfLine(text, 23, 69, 303);
    this.markStartOfLine(text, 23, 69, 291);
    this.markStartOfLine(text, 23, 69, 255);
    this.markStartOfLine(text, 23, 69, 243);
    this.markStartOfLine(text, 23, 69, 207);
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
