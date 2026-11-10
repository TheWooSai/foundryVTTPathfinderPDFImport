import { PFSIntroBase } from "./base.js";
import { CaptionImage } from "../../../core/images.js";
import { ModuleNpc } from "../../../core/module-npc.js";
import { ModuleScene } from "../../../core/module-scene.js";

export class PFS_Intro2 extends PFSIntroBase {
  prefix = "pfs-intro-2";
  fullName = "PFS Intro #2 - United in Purpose";
  blacklistedFonts = this.blacklistedFonts.concat([
    "GoodOT-Bold:8.5564",
    "Taroca:16.0432",
  ]);
  pages = [
    this.TwoColumnWithRightCutout(3, 330),
    this.TwoColumnWithRightCutout(4, 560),
    this.TwoColumn(5),
    this.TwoColumn(6),
    this.TwoColumn(7),
    this.TwoColumn(9),
    this.TwoColumn(10),
    this.TwoColumn(12),
    this.TwoColumn(13),
    this.TwoColumn(14),
    this.TwoColumn(15),
    this.TwoColumn(17),
    this.TwoColumn(18),
    this.TwoColumn(19),
    this.TwoColumn(21),
    this.TwoColumn(22),
    this.TwoColumn(23, "appendix1"),
    this.TwoColumnWithRightCutout(24, 480, "appendix1"),
    this.TwoColumnWithRightCutout(25, 550, "appendix1"),
    this.TwoColumnWithRightCutout(26, 0, "appendix1"),
    this.TwoColumnWithRightCutout(27, 0, "appendix1"),
    this.TwoColumnWithRightCutout(28, 0, "appendix1"),
    this.TwoColumnWithRightCutout(29, 0, "appendix1"),
    this.TwoColumn(30, "appendix1"),
    this.TwoColumn(31, "appendix1"),
    this.TwoColumn(32, "appendix1"),
    this.TwoColumnWithRightCutout(33, 0, "appendix1"),
    this.TwoColumnWithRightCutout(34, 0, "appendix1"),
    this.TwoColumnWithRightCutout(35, 0, "appendix1"),
    this.TwoColumnWithRightCutout(36, 0, "appendix1"),
    this.TwoColumnWithRightCutout(37, 0, "appendix1"),
    this.TwoColumnWithRightCutout(38, 0, "appendix1"),
    this.TwoColumnWithRightCutout(39, 520, "appendix1"),
    this.TwoColumnWithRightCutout(40, 0, "appendix1"),
    this.TwoColumnWithRightCutout(41, 0, "appendix1"),
    this.TwoColumnWithRightCutout(42, 0, "appendix1"),
    this.TwoColumnWithRightCutout(43, 0, "appendix1"),
    this.TwoColumnWithRightCutout(44, 0, "appendix1"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      canonical: {
        name: "flipmat/haunted-dungeon1",
        priority: 0,
      },
      nameInfo: {
        x: 60.5,
        y: 677.5346,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 8,
      width: 1041,
      height: 1301,
      imageLeft: 0,
      imageRight: 1041,
      imageCols: 24,
      imageTop: 0,
      imageBottom: 1301,
      imageRows: 30,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/flipmats/maps/haunted-dungeon1.json",
      journals: [
        {
          x: 1750,
          y: 2350,
          name: "A.",
        },
      ],
      tokens: [],
    }),
    new ModuleScene({
      name: "map2",
      canonical: {
        name: "flipmat/haunted-dungeon2",
        priority: 0,
      },
      nameInfo: {
        x: 60.875,
        y: 673.0346,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 11,
      width: 1041,
      height: 1301,
      imageLeft: 0,
      imageRight: 1041,
      imageCols: 24,
      imageTop: 0,
      imageBottom: 1301,
      imageRows: 30,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/flipmats/maps/haunted-dungeon2.json",
      journals: [
        {
          x: 1900,
          y: 1700,
          name: "B1.",
        },
        {
          x: 1e3,
          y: 3400,
          name: "B2.",
        },
        {
          x: 900,
          y: 2400,
          name: "B3.",
        },
      ],
      tokens: [],
    }),
    new ModuleScene({
      name: "map3",
      canonical: {
        name: "flipmat/haunted-dungeon3",
        priority: 0,
      },
      nameInfo: {
        x: 60.5,
        y: 678.5346,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 16,
      width: 1041,
      height: 1301,
      imageLeft: 0,
      imageRight: 1041,
      imageCols: 24,
      imageTop: 0,
      imageBottom: 1301,
      imageRows: 30,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/flipmats/maps/haunted-dungeon3.json",
      journals: [
        {
          x: 2100,
          y: 2950,
          name: "C1.",
        },
        {
          x: 2650,
          y: 2400,
          name: "C2.",
        },
        {
          x: 1850,
          y: 1050,
          name: "C3.",
        },
      ],
      tokens: [],
    }),
    new ModuleScene({
      name: "map4",
      canonical: {
        name: "flipmat/haunted-dungeon4",
        priority: 0,
      },
      nameInfo: {
        x: 60.875,
        y: 678.5346,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 20,
      width: 1041,
      height: 1301,
      imageLeft: 0,
      imageRight: 1041,
      imageCols: 24,
      imageTop: 0,
      imageBottom: 1301,
      imageRows: 30,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/flipmats/maps/haunted-dungeon4.json",
      journals: [
        {
          x: 2400,
          y: 1900,
          name: "D1.",
        },
        {
          x: 1450,
          y: 2450,
          name: "D2.",
        },
        {
          x: 1750,
          y: 1450,
          name: "D3.",
        },
      ],
      tokens: [],
    }),
  ];
  journals = [
    new CaptionImage({
      name: "journal1",
      page: 13,
      width: 953,
      height: 777,
    }),
    new CaptionImage({
      name: "journal2",
      page: 17,
      width: 850,
      height: 650,
    }),
    new CaptionImage({
      name: "journal3",
      page: 19,
      width: 520,
      height: 520,
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      name: {
        page: 4,
        x: 255.0294,
        y: 86.2128,
      },
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      page: 4,
      width: 400,
      height: 1109,
      tokenX: -9,
      tokenY: 12,
      tokenSize: 269,
    }),
    new ModuleNpc({
      id: "npc2",
      name: {
        page: 5,
        x: 159.5088,
        y: 87.1,
      },
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      page: 5,
      width: 803,
      height: 1236,
      tokenX: -218,
      tokenY: -44,
      tokenSize: 368,
    }),
    new ModuleNpc({
      id: "npc3",
      name: {
        page: 6,
        x: 272.4515,
        y: 87.1,
      },
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.V8w4iOwUMPqYnqVE",
      page: 6,
      width: 1016,
      height: 1091,
      tokenX: -79,
      tokenY: -21,
      tokenSize: 419,
    }),
    new ModuleNpc({
      id: "npc4",
      name: {
        page: 10,
        x: 225.9245,
        y: 87.1,
      },
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      page: 10,
      width: 820,
      height: 1160,
      tokenX: -201,
      tokenY: -21,
      tokenSize: 348,
    }),
    new ModuleNpc({
      id: "npc5",
      name: {
        page: 15,
        x: 379.2716,
        y: 89,
      },
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      page: 15,
      width: 749,
      height: 1044,
      tokenX: -210,
      tokenY: 29,
      tokenSize: 288,
    }),
    new ModuleNpc({
      id: "npc6",
      name: {
        page: 18,
        x: 254.1736,
        y: 87.1,
      },
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      page: 18,
      width: 790,
      height: 1081,
      tokenX: -255,
      tokenY: 54,
      tokenSize: 297,
    }),
    new ModuleNpc({
      id: "npc7",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.0rhltfBkQtYkCwXd",
      label: "YMT",
    }),
    new ModuleNpc({
      id: "npc8",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.5FGuXfg6Ub2hCBG7",
      label: "YMC",
    }),
    new ModuleNpc({
      id: "npc9",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.sA2dFdRUwiapo69Z",
      label: "GC",
    }),
    new ModuleNpc({
      id: "npc10",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.Ky5eNRvN71O0tY9l",
      label: "GP",
    }),
    new ModuleNpc({
      id: "npc11",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.fLLKuOXwPq1Iq0U4",
      label: "GW",
    }),
    new ModuleNpc({
      id: "npc12",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.httXfBPGseF9csXa",
      label: "BTo",
    }),
    new ModuleNpc({
      id: "npc13",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.4htFfofrXLkbWMRg",
      label: "BTh",
    }),
    new ModuleNpc({
      id: "npc13",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.Z6yCW77f44bEUgLH",
      label: "LB",
    }),
    new ModuleNpc({
      id: "npc14",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.xN5J9S485LxFZMkL",
      label: "CR",
    }),
    new ModuleNpc({
      id: "npc15",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.6sYj9SQRzKywNDOJ",
      label: "IS",
    }),
    new ModuleNpc({
      id: "npc16",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.bKSs8SuSI4wrKPRj",
      label: "AS",
    }),
    new ModuleNpc({
      id: "npc17",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.YhVYGhzNrOFQROui",
      label: "C",
    }),
    new ModuleNpc({
      id: "npc18",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.uGXTQYuRNtgPt1Pp",
      label: "S",
    }),
    new ModuleNpc({
      id: "npc19",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.KH1GkazaI59zftst",
      label: "CH",
    }),
    new ModuleNpc({
      id: "npc20",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.oNR29GreK0AxLucN",
      label: "H",
    }),
    new ModuleNpc({
      id: "npc21",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.aWiTcxAySoYjUP6T",
      label: "PZ",
    }),
    new ModuleNpc({
      id: "npc22",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.WioQ6rOeMRuTOliY",
      label: "ZB",
    }),
    new ModuleNpc({
      id: "npc23",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.DBTbqI9QQRtlJwWh",
      label: "W",
    }),
    new ModuleNpc({
      id: "hazard1",
      actorUuid: "Compendium.pf2e.hazards.Actor.Q8bXKgDm8eguqThB",
      label: "BM",
    }),
    new ModuleNpc({
      id: "hazard2",
      actorUuid:
        "Compendium.pf2e.pfs-introductions-bestiary.Actor.U53RUprcBtfMmkFs",
      label: "SP",
    }),
    new ModuleNpc({
      id: "hazard3",
      actorUuid: "Compendium.pf2e.hazards.Actor.vlMuFskctUvjJe8X",
      label: "SL",
    }),
    new ModuleNpc({
      id: "hazard4",
      actorUuid:
        "Compendium.pf2e.pfs-introductions-bestiary.Actor.ZGX829P4KgPecMsF",
      label: "CA",
    }),
    new ModuleNpc({
      id: "hazard5",
      actorUuid:
        "Compendium.pf2e.pfs-introductions-bestiary.Actor.Ik5g8rEoSnJSf1NC",
      label: "CT",
    }),
    new ModuleNpc({
      id: "hazard6",
      actorUuid:
        "Compendium.pf2e.pfs-introductions-bestiary.Actor.uNUQujgmyavb52Xa",
      label: "ES",
    }),
    new ModuleNpc({
      id: "hazard7",
      actorUuid:
        "Compendium.pf2e.pfs-introductions-bestiary.Actor.GYfIWbgOu5LAsUOg",
      label: "SotR",
    }),
    new ModuleNpc({
      id: "hazard8",
      actorUuid:
        "Compendium.pf2e.pfs-introductions-bestiary.Actor.0B7h7yvceKuI2SFJ",
      label: "BT",
    }),
    new ModuleNpc({
      id: "hazard9",
      actorUuid:
        "Compendium.pf2e.pfs-introductions-bestiary.Actor.O6KTpMxRnrft3j1g",
      label: "BH",
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Intro #2" &&
        t.fontId === "GoodOT-Bold:15" &&
        t.page === 1,
    );
  }
  preprocess(text) {
    this.removeText(text, 3, 240.0611, 654.8302);
  }
  finalize(moduleData) {}
}
