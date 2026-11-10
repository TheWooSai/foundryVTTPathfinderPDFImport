import { StrengthOfThousandsBase } from "./base.js";
import { CaptionImage } from "../../core/images.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class StrengthOfThousands2 extends StrengthOfThousandsBase {
  prefix = "strength-of-thousands-2";
  fullName = "Strength of Thousands - Spoken on the Song Wind";
  pages = [
    this.RightSingleColumnChapterHeadingPageLayout(7),
    this.LeftTwoColumnWithMap(8, 340),
    this.RightTwoColumn(9),
    this.LeftTwoColumn(10),
    this.RightTwoColumnWithRightCutout(11, 550),
    this.LeftTwoColumn(12),
    this.RightTwoColumn(13),
    this.LeftTwoColumn(14),
    this.RightTwoColumn(15),
    this.LeftTwoColumnWithMap(16, 340),
    this.RightTwoColumn(17),
    this.LeftTwoColumn(18),
    this.RightTwoColumn(19),
    this.RightSingleColumnChapterHeadingPageLayout(21),
    this.LeftTwoColumn(22),
    this.RightTwoColumn(23),
    this.LeftTwoColumn(24),
    this.RightTwoColumnWithRightCutout(25, 390),
    this.LeftTwoColumn(26),
    this.RightTwoColumn(27),
    this.LeftTwoColumn(28),
    this.RightTwoColumn(29),
    this.LeftTwoColumn(30),
    this.RightTwoColumn(31),
    this.LeftTwoColumn(32),
    this.RightTwoColumn(33),
    this.LeftTwoColumn(34),
    this.RightTwoColumn(35),
    this.LeftTwoColumn(36),
    this.RightTwoColumn(37),
    this.LeftTwoColumn(38),
    this.RightTwoColumn(39),
    this.LeftTwoColumn(40),
    this.RightTwoColumn(41),
    this.LeftTwoColumnWithMap(42, 340),
    this.RightTwoColumn(43),
    this.LeftTwoColumn(44),
    this.RightTwoColumn(45),
    this.LeftTwoColumn(46),
    this.RightTwoColumnWithRightCutout(47, 490),
    this.LeftTwoColumnWithMap(48, 340),
    this.RightTwoColumn(49),
    this.LeftTwoColumn(50),
    this.RightTwoColumn(51),
    this.LeftTwoColumn(52),
    this.RightTwoColumn(53),
    this.LeftTwoColumn(54),
    this.RightTwoColumn(55),
    this.RightSingleColumnChapterHeadingPageLayout(57),
    this.LeftTwoColumn(58),
    this.RightTwoColumn(59),
    this.LeftTwoColumn(60),
    this.RightTwoColumn(61),
    this.LeftTwoColumn(62),
    this.RightTwoColumn(63),
    this.LeftTwoColumn(64),
    this.RightTwoColumn(65),
    this.LeftTwoColumn(66),
    this.RightTwoColumn(67),
    this.LeftTwoColumn(68),
    this.RightTwoColumn(69),
    this.RightChapterHeadingPageLayout(71),
    this.LeftTwoColumn(72),
    this.RightTwoColumn(73),
    this.LeftTwoColumn(74),
    this.RightTwoColumn(75),
    this.RightChapterHeadingPageLayout(77),
    this.LeftTwoColumn(78),
    this.RightTwoColumn(79),
    this.LeftTwoColumn(80),
    this.RightTwoColumn(81),
    this.LeftSingleColumnWithSidebar(82),
    this.RightSingleColumnWithSidebar(83),
    this.LeftSingleColumnWithSidebar(84),
    this.RightSingleColumnWithSidebar(85),
    this.LeftSingleColumnWithSidebar(86),
    this.RightSingleColumnWithSidebar(87),
    this.LeftSingleColumnWithSidebar(88),
    this.RightSingleColumnWithSidebar(89),
    this.ChapterHeadingPageLayout(90),
    this.RightTwoColumn(91),
    this.ChapterHeadingPageLayout(92),
    this.RightTwoColumn(93),
    this.ChapterHeadingPageLayout(94),
    this.RightTwoColumn(95),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      canonical: {
        name: "sot2/map1",
        priority: 0,
      },
      nameInfo: {
        x: 84.2495,
        y: 731.2601,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 1262,
      height: 1637,
      imageLeft: 0,
      imageRight: 1262,
      imageCols: 10,
      imageTop: 0,
      imageBottom: 1262,
      imageRows: 10,
      gridType: "gridless",
      gridDistance: 1500,
      gridUnits: "ft",
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot2-map1.json",
    }),
    new ModuleScene({
      name: "map2",
      canonical: {
        name: "sot2/map2",
        priority: 0,
      },
      nameInfo: {
        x: 101.8414,
        y: 384.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 8,
      width: 1234,
      height: 841,
      imageLeft: 38,
      imageRight: 1210,
      imageCols: 29,
      imageTop: 54,
      imageBottom: 822,
      imageRows: 19,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot2-map2.json",
      journals: [
        {
          x: 2250,
          y: 1750,
          name: "A1.",
        },
        {
          x: 2100,
          y: 1500,
          name: "A2.",
        },
        {
          x: 1600,
          y: 1500,
          name: "A3.",
        },
        {
          x: 1450,
          y: 1150,
          name: "A4.",
        },
        {
          x: 2050,
          y: 1150,
          name: "A5.",
        },
        {
          x: 2050,
          y: 850,
          name: "A6.",
        },
        {
          x: 1550,
          y: 850,
          name: "A7.",
        },
      ],
      tokens: [
        {
          id: "npc32",
          x: 1300,
          y: 1400,
        },
        {
          id: "npc3",
          x: 1500,
          y: 1400,
        },
        {
          id: "npc33",
          x: 1200,
          y: 1e3,
        },
        {
          id: "npc34",
          x: 2e3,
          y: 700,
        },
        {
          id: "npc35",
          x: 1900,
          y: 700,
        },
      ],
    }),
    new ModuleScene({
      name: "map3",
      canonical: {
        name: "sot2/map3",
        priority: 0,
      },
      nameInfo: {
        x: 101.8414,
        y: 384.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 16,
      width: 1234,
      height: 841,
      imageLeft: 38,
      imageRight: 1217,
      imageCols: 34,
      imageTop: 10,
      imageBottom: 806,
      imageRows: 23,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot2-map3.json",
      journals: [
        {
          x: 1150,
          y: 2550,
          name: "B1.",
        },
        {
          x: 1400,
          y: 1400,
          name: "B2.",
        },
        {
          x: 2350,
          y: 2250,
          name: "B3.",
        },
        {
          x: 2650,
          y: 1250,
          name: "B4.",
        },
        {
          x: 3550,
          y: 1450,
          name: "B5.",
        },
        {
          x: 4050,
          y: 2250,
          name: "B6.",
        },
      ],
      tokens: [
        {
          id: "npc36",
          x: 1400,
          y: 900,
        },
        {
          id: "npc36",
          x: 900,
          y: 1500,
        },
        {
          id: "npc37",
          x: 2200,
          y: 1800,
        },
        {
          id: "npc37",
          x: 2300,
          y: 1900,
        },
        {
          id: "npc37",
          x: 2500,
          y: 2e3,
        },
        {
          id: "npc37",
          x: 2600,
          y: 2e3,
        },
        {
          id: "npc37",
          x: 2500,
          y: 2400,
        },
        {
          id: "npc37",
          x: 2400,
          y: 2400,
        },
        {
          id: "npc38",
          x: 3600,
          y: 1400,
        },
        {
          id: "npc48",
          x: 4e3,
          y: 2100,
        },
      ],
    }),
    new ModuleScene({
      name: "map4",
      canonical: {
        name: "sot2/map4",
        priority: 0,
      },
      nameInfo: {
        x: 205.0457,
        y: 418.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 28,
      width: 592,
      height: 726,
      imageLeft: 101,
      imageRight: 510,
      imageCols: 10,
      imageTop: 96,
      imageBottom: 627,
      imageRows: 13,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot2-map4.json",
      journals: [
        {
          x: 750,
          y: 1750,
          name: "C1.",
        },
        {
          x: 1150,
          y: 1450,
          name: "C2.",
        },
        {
          x: 600,
          y: 1e3,
          name: "C3.",
        },
        {
          x: 1e3,
          y: 1e3,
          name: "C4.",
        },
        {
          x: 1600,
          y: 1e3,
          name: "C5.",
        },
      ],
      tokens: [
        {
          id: "npc26",
          x: 600,
          y: 1700,
        },
        {
          id: "npc8",
          x: 700,
          y: 1800,
        },
        {
          id: "npc9",
          x: 600,
          y: 800,
        },
        {
          id: "npc10",
          x: 1600,
          y: 900,
        },
      ],
    }),
    new ModuleScene({
      name: "map5",
      canonical: {
        name: "sot2/map5",
        priority: 0,
      },
      nameInfo: {
        x: 130.0937,
        y: 388.3319,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 38,
      width: 579,
      height: 775,
      imageLeft: 62,
      imageRight: 541,
      imageCols: 24,
      imageTop: 72,
      imageBottom: 732,
      imageRows: 33,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot2-map5.json",
      journals: [
        {
          x: 3250,
          y: 2750,
          name: "D1.",
        },
        {
          x: 2200,
          y: 1650,
          name: "D2.",
        },
        {
          x: 2100,
          y: 2700,
          name: "D3.",
        },
      ],
      tokens: [
        {
          id: "npc54",
          x: 3e3,
          y: 2800,
        },
        {
          id: "npc54",
          x: 3e3,
          y: 2400,
        },
        {
          id: "npc53",
          x: 2800,
          y: 2400,
        },
        {
          id: "npc53",
          x: 2800,
          y: 2800,
        },
        {
          id: "npc40",
          x: 2100,
          y: 1700,
        },
        {
          id: "npc55",
          x: 2200,
          y: 2600,
        },
      ],
    }),
    new ModuleScene({
      name: "map6",
      canonical: {
        name: "sot2/map6",
        priority: 0,
      },
      nameInfo: {
        x: 101.8414,
        y: 682.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 42,
      width: 1234,
      height: 841,
      imageLeft: 35,
      imageRight: 1228,
      imageCols: 34,
      imageTop: 100,
      imageBottom: 801,
      imageRows: 20,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot2-map6.json",
      journals: [
        {
          x: 1650,
          y: 2250,
          name: "E1.",
        },
        {
          x: 2250,
          y: 2050,
          name: "E2.",
        },
        {
          x: 3e3,
          y: 1250,
          name: "E3.",
        },
        {
          x: 3e3,
          y: 2550,
          name: "E4.",
        },
        {
          x: 3700,
          y: 2e3,
          name: "E5.",
        },
      ],
      tokens: [
        {
          id: "npc41",
          x: 1200,
          y: 1600,
        },
        {
          id: "npc41",
          x: 1400,
          y: 1900,
        },
        {
          id: "npc41",
          x: 1600,
          y: 2200,
        },
        {
          id: "npc41",
          x: 1800,
          y: 2500,
        },
        {
          id: "hazard3",
          x: 2200,
          y: 1900,
        },
        {
          id: "npc56",
          x: 2900,
          y: 1100,
        },
        {
          id: "npc56",
          x: 3e3,
          y: 1400,
        },
        {
          id: "npc23",
          x: 3900,
          y: 2e3,
        },
      ],
    }),
    new ModuleScene({
      name: "map7",
      canonical: {
        name: "sot2/map7",
        priority: 0,
      },
      nameInfo: {
        x: 99,
        y: 690.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 46,
      width: 593,
      height: 788,
      imageLeft: 60,
      imageRight: 512,
      imageCols: 11,
      imageTop: 40,
      imageBottom: 738,
      imageRows: 17,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot2-map7.json",
      journals: [],
      tokens: [
        {
          id: "npc57",
          x: 1200,
          y: 1900,
        },
        {
          id: "npc57",
          x: 1e3,
          y: 2e3,
        },
      ],
    }),
    new ModuleScene({
      name: "map8",
      canonical: {
        name: "sot2/map8",
        priority: 0,
      },
      nameInfo: {
        x: 101.8414,
        y: 390.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 48,
      width: 1234,
      height: 841,
      imageLeft: 24,
      imageRight: 1213,
      imageCols: 49,
      imageTop: 8,
      imageBottom: 809,
      imageRows: 33,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot2-map8.json",
      journals: [
        {
          x: 2800,
          y: 1600,
          name: "F1.",
        },
        {
          x: 3900,
          y: 2900,
          name: "F2.",
        },
        {
          x: 5e3,
          y: 3800,
          name: "F3.",
        },
        {
          x: 5450,
          y: 1700,
          name: "F5.",
        },
        {
          x: 5550,
          y: 2850,
          name: "F4.",
        },
      ],
      tokens: [
        {
          id: "npc27",
          x: 2600,
          y: 1400,
        },
        {
          id: "npc15",
          x: 2500,
          y: 1600,
        },
        {
          id: "npc28",
          x: 2800,
          y: 1500,
        },
        {
          id: "npc16",
          x: 4300,
          y: 2600,
        },
        {
          id: "npc45",
          x: 5200,
          y: 3700,
        },
        {
          id: "npc45",
          x: 5200,
          y: 3800,
        },
        {
          id: "npc45",
          x: 5200,
          y: 3900,
        },
        {
          id: "npc45",
          x: 5100,
          y: 4e3,
        },
        {
          id: "npc17",
          x: 4700,
          y: 3800,
        },
        {
          id: "npc47",
          x: 5400,
          y: 2800,
        },
        {
          id: "npc24",
          x: 5400,
          y: 1500,
        },
        {
          id: "npc29",
          x: 5200,
          y: 1500,
        },
        {
          id: "npc60",
          x: 5600,
          y: 2800,
        },
      ],
    }),
    new ModuleScene({
      name: "map9",
      canonical: {
        name: "sot2/map9",
        priority: 0,
      },
      nameInfo: {
        x: 204.8716,
        y: 395.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 54,
      width: 562,
      height: 743,
      imageLeft: 40,
      imageRight: 467,
      imageCols: 11,
      imageTop: 37,
      imageBottom: 696,
      imageRows: 17,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot2-map9.json",
      journals: [],
      tokens: [
        {
          id: "npc30",
          x: 1300,
          y: 1200,
        },
        {
          id: "npc18",
          x: 1500,
          y: 1300,
        },
      ],
    }),
    new ModuleScene({
      name: "map10",
      canonical: {
        name: "sot2/map10",
        priority: 0,
      },
      nameInfo: {
        x: 666,
        y: 756.3762,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 99,
      width: 1259,
      height: 1637,
      imageLeft: 10,
      imageRight: 1225,
      imageCols: 31,
      imageTop: 140,
      imageBottom: 1629,
      imageRows: 38,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot2-map10.json",
      journals: [
        {
          x: 2500,
          y: 5050,
          name: "G1.",
        },
        {
          x: 2500,
          y: 4350,
          name: "G2.",
        },
        {
          x: 2500,
          y: 3500,
          name: "G3.",
        },
        {
          x: 1800,
          y: 3600,
          name: "G4.",
        },
        {
          x: 1800,
          y: 2900,
          name: "G5.",
        },
        {
          x: 3200,
          y: 3600,
          name: "G6.",
        },
        {
          x: 3200,
          y: 2900,
          name: "G7.",
        },
        {
          x: 2500,
          y: 2400,
          name: "G8.",
        },
        {
          x: 1500,
          y: 2300,
          name: "G9.",
        },
        {
          x: 3500,
          y: 2300,
          name: "G10.",
        },
        {
          x: 2500,
          y: 1500,
          name: "G11.",
        },
      ],
      tokens: [
        {
          id: "npc49",
          x: 2300,
          y: 4900,
        },
        {
          id: "npc49",
          x: 2600,
          y: 4900,
        },
        {
          id: "npc49",
          x: 2700,
          y: 4900,
        },
        {
          id: "hazard1",
          x: 2300,
          y: 4200,
        },
        {
          id: "npc19",
          x: 3200,
          y: 4400,
        },
        {
          id: "npc51",
          x: 2900,
          y: 4300,
        },
        {
          id: "npc51",
          x: 3e3,
          y: 4700,
        },
        {
          id: "hazard4",
          x: 2400,
          y: 3200,
        },
        {
          id: "npc58",
          x: 1600,
          y: 3300,
        },
        {
          id: "npc58",
          x: 1700,
          y: 3800,
        },
        {
          id: "npc42",
          x: 1600,
          y: 2700,
        },
        {
          id: "npc59",
          x: 1900,
          y: 2900,
        },
        {
          id: "npc59",
          x: 1600,
          y: 3100,
        },
        {
          id: "npc44",
          x: 3200,
          y: 3400,
        },
        {
          id: "npc20",
          x: 2400,
          y: 2e3,
        },
        {
          id: "npc31",
          x: 2500,
          y: 1900,
        },
        {
          id: "npc25",
          x: 2400,
          y: 1300,
        },
        {
          id: "npc49",
          x: 2300,
          y: 1400,
        },
        {
          id: "npc50",
          x: 1400,
          y: 2e3,
        },
        {
          id: "npc50",
          x: 1500,
          y: 2400,
        },
        {
          id: "npc21",
          x: 3600,
          y: 2500,
        },
        {
          id: "npc49",
          x: 3600,
          y: 2100,
        },
        {
          id: "npc49",
          x: 3400,
          y: 2400,
        },
        {
          id: "npc51",
          x: 3500,
          y: 1800,
        },
        {
          id: "npc51",
          x: 3400,
          y: 1800,
        },
      ],
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      name: {
        page: 7,
        x: 289.5,
        y: 298.3786,
      },
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      page: 7,
      width: 516,
      height: 484,
      tokenX: -47,
      tokenY: 43,
      tokenSize: 376,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc2",
      name: {
        page: 9,
        x: 274.4001,
        y: 459.2536,
      },
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      page: 9,
      width: 500,
      height: 500,
      tokenX: 20,
      tokenY: 69,
      tokenSize: 556,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc3",
      name: {
        page: 12,
        x: 307.1151,
        y: 99.2536,
      },
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      page: 12,
      width: 659,
      height: 1138,
      tokenX: -207,
      tokenY: -62,
      tokenSize: 326,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc4",
      name: {
        page: 14,
        x: 296.5052,
        y: 432.8161,
      },
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      page: 14,
      width: 527,
      height: 527,
      tokenX: 28,
      tokenY: 67,
      tokenSize: 527,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc5",
      name: {
        page: 22,
        x: 297.3502,
        y: 478.2536,
      },
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      page: 22,
      width: 517,
      height: 500,
      tokenX: 0,
      tokenY: 9,
      tokenSize: 517,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc6",
      name: {
        page: 24,
        x: 308.5652,
        y: 456.8161,
      },
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      page: 24,
      width: 517,
      height: 508,
      tokenX: 24,
      tokenY: 66,
      tokenSize: 517,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc7",
      name: {
        page: 26,
        x: 298.2103,
        y: 423.2536,
      },
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      page: 26,
      width: 556,
      height: 556,
      tokenX: 12,
      tokenY: 77,
      tokenSize: 556,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc8",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.9J0htPG44kLwWFcj",
      page: 30,
      width: 824,
      height: 1119,
      tokenX: -306,
      tokenY: 58,
      tokenSize: 307,
      forIds: ["Mjk6Mjk1OjIwNw"],
    }),
    new ModuleNpc({
      id: "npc9",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.uCmJpDlKY4s9CBiC",
      page: 31,
      width: 857,
      height: 1047,
      tokenX: -316,
      tokenY: -23,
      tokenSize: 347,
      forIds: ["MzA6MzI2OjI0Mw"],
    }),
    new ModuleNpc({
      id: "npc10",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.ooMCMjhvmIsOghH1",
      page: 32,
      width: 750,
      height: 1162,
      tokenX: -245,
      tokenY: -29,
      tokenSize: 378,
      forIds: ["MzE6Mjk1OjY5OQ"],
    }),
    new ModuleNpc({
      id: "npc11",
      name: {
        page: 34,
        x: 284.3205,
        y: 435.7536,
      },
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      page: 34,
      width: 556,
      height: 556,
      tokenX: 17,
      tokenY: 85,
      tokenSize: 556,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc12",
      name: {
        page: 35,
        x: 273.1701,
        y: 437.7536,
      },
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      page: 35,
      width: 556,
      height: 555,
      tokenX: 18,
      tokenY: 85,
      tokenSize: 556,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc13",
      name: {
        page: 37,
        x: 272.3501,
        y: 442.3786,
      },
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      page: 37,
      width: 512,
      height: 510,
      tokenX: 16,
      tokenY: 93,
      tokenSize: 568,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc14",
      name: {
        page: 45,
        x: 247.4757,
        y: 454.3786,
      },
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      page: 45,
      width: 532,
      height: 532,
      tokenX: 22,
      tokenY: 72,
      tokenSize: 532,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc15",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.pjnTEh0NVd1DB6jI",
      page: 49,
      width: 685,
      height: 1028,
      tokenX: -264,
      tokenY: 81,
      tokenSize: 384,
      forIds: ["NDk6Mjk1OjY5OQ"],
    }),
    new ModuleNpc({
      id: "npc16",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.uO8X1xEciIBuiL1C",
      page: 50,
      width: 842,
      height: 696,
      tokenX: -312,
      tokenY: -171,
      tokenSize: 590,
      forIds: ["NTA6MzI2OjY2Mw"],
    }),
    new ModuleNpc({
      id: "npc17",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.l6EuZR6zCdqyCywW",
      page: 51,
      width: 776,
      height: 910,
      tokenX: -113,
      tokenY: 55,
      tokenSize: 490,
      forIds: ["NTE6Njg6MTIz"],
    }),
    new ModuleNpc({
      id: "npc18",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.6pPolNZycfDiOl2I",
      page: 55,
      width: 884,
      height: 1201,
      tokenX: -442,
      tokenY: -71,
      tokenSize: 249,
      forIds: ["NTU6Njg6NTQz"],
    }),
    new ModuleNpc({
      id: "npc19",
      name: {
        page: 60,
        x: 271.0502,
        y: 135.2536,
      },
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.WMeRC4WHogtHXnGG",
      page: 60,
      width: 847,
      height: 1140,
      tokenX: -283,
      tokenY: -208,
      tokenSize: 328,
      forIds: ["NTk6Njg6MTcx"],
    }),
    new ModuleNpc({
      id: "npc20",
      name: {
        page: 63,
        x: 354.0252,
        y: 120.8161,
      },
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.y2w2jjs2O3gP0H5v",
      page: 63,
      width: 689,
      height: 1163,
      tokenX: -261,
      tokenY: -31,
      tokenSize: 267,
      elite: true,
      forIds: ["NjM6Njg6MTgz"],
    }),
    new ModuleNpc({
      id: "npc21",
      name: {
        page: 64,
        x: 202.4002,
        y: 132.8161,
      },
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      page: 64,
      width: 856,
      height: 1100,
      tokenX: -282,
      tokenY: 26,
      tokenSize: 316,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc22",
      name: {
        page: 67,
        x: 301.7854,
        y: 135.2536,
      },
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      page: 67,
      width: 724,
      height: 1125,
      tokenX: -325,
      tokenY: -36,
      tokenSize: 285,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc23",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.bhmO8fRIHvD7b1lk",
      page: 91,
      width: 822,
      height: 1275,
      tokenX: -334,
      tokenY: -77,
      tokenSize: 323,
      forIds: ["OTE6Njg6MzUx", "NDQ6OTk6MTQ3"],
    }),
    new ModuleNpc({
      id: "npc24",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.lCvJquCqvZJVnafy",
      page: 93,
      width: 901,
      height: 1297,
      tokenX: -603,
      tokenY: -245,
      tokenSize: 289,
      forIds: ["OTM6Njg6MzI3", "NTM6Njg6NjUx"],
    }),
    new ModuleNpc({
      id: "npc25",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.j1UkNX6saQfgGZpf",
      page: 95,
      width: 840,
      height: 1258,
      tokenX: -263,
      tokenY: -144,
      tokenSize: 362,
      forIds: ["OTU6Njg6NTY3", "NjY6MzI2Ojk5"],
    }),
    new ModuleNpc({
      id: "npc26",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.1EvapUGyK4aG29Co",
      label: "MtB",
      forIds: ["Mjk6Mjk1OjUwNw"],
    }),
    new ModuleNpc({
      id: "npc27",
      name: {
        page: 49,
        x: 67.5,
        y: 99,
      },
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.M2YAGc36xzy8SAL7",
      label: "H",
      forIds: ["NDk6Njg6OTk"],
    }),
    new ModuleNpc({
      id: "npc28",
      name: {
        page: 49,
        x: 294.75,
        y: 627,
      },
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.oMsOm06HhX1gG0Jz",
      label: "G",
      forIds: ["NDk6Mjk1OjYyNw"],
    }),
    new ModuleNpc({
      id: "npc29",
      name: {
        page: 53,
        x: 67.5,
        y: 603,
      },
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.M2YAGc36xzy8SAL7",
      label: "G",
      forIds: ["NTM6Njg6NjAz"],
    }),
    new ModuleNpc({
      id: "npc30",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.rtEPMrf6yPf8lsHp",
      label: "K",
      forIds: ["NTU6Njg6NDU5"],
    }),
    new ModuleNpc({
      id: "npc31",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.Of7WVNrWgvkwctfE",
      label: "LS",
      forIds: ["NjM6Njg6MTM1"],
    }),
    new ModuleNpc({
      id: "npc32",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.y2w2jjs2O3gP0H5v",
      label: "CS",
      forIds: ["MTI6MzY3OjUwNw"],
    }),
    new ModuleNpc({
      id: "npc33",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.7UBCht1tQfeba2Ih",
      label: "W",
      forIds: ["MTM6Njg6NTU1"],
    }),
    new ModuleNpc({
      id: "npc34",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.pzCgOvNPish9QlTC",
      label: "E",
      forIds: ["MTM6Mjk1OjQ4Mw"],
    }),
    new ModuleNpc({
      id: "npc35",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.AJ5LuNMVPLCydryP",
      label: "G",
      forIds: ["MTM6Mjk1OjQzNQ"],
    }),
    new ModuleNpc({
      id: "npc36",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.JGwKk83oX4gTGlqe",
      label: "T",
      forIds: ["MTY6MzI2OjE1OQ"],
    }),
    new ModuleNpc({
      id: "npc37",
      name: {
        page: 17,
        x: 348.5155,
        y: 142.3786,
      },
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      page: 17,
      width: 780,
      height: 1040,
      tokenX: 246,
      tokenY: 200,
      tokenSize: 1012,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc38",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.mX47c0W9rizbmMBM",
      page: 18,
      width: 872,
      height: 711,
      tokenX: 0,
      tokenY: 81,
      tokenSize: 872,
      forIds: ["MTg6Mzk0OjE5NQ"],
    }),
    new ModuleNpc({
      id: "npc39",
      name: {
        page: 36,
        x: 297.0756,
        y: 99.2536,
      },
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.thDJ5N0wUvI1JOa6",
      page: 36,
      width: 478,
      height: 1453,
      tokenX: -24,
      tokenY: -197,
      tokenSize: 389,
      forIds: ["MzY6OTk6NDU5"],
    }),
    new ModuleNpc({
      id: "npc40",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.VUad8HXC87nC9OrZ",
      page: 40,
      width: 906,
      height: 708,
      tokenX: 0,
      tokenY: 99,
      tokenSize: 906,
      forIds: ["Mzk6Njg6MTM1"],
    }),
    new ModuleNpc({
      id: "npc41",
      name: {
        page: 43,
        x: 360.3705,
        y: 154.3786,
      },
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.E9rT02pPDLq7rARq",
      page: 43,
      width: 836,
      height: 1090,
      tokenX: -103,
      tokenY: 119,
      tokenSize: 558,
      forIds: ["NDI6OTk6MTcx"],
    }),
    new ModuleNpc({
      id: "npc42",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.6RJ0yESu2Bp2KDbw",
      page: 61,
      width: 825,
      height: 901,
      tokenX: -201,
      tokenY: -140,
      tokenSize: 761,
      forIds: ["NjE6Njg6Mzg3"],
    }),
    new ModuleNpc({
      id: "npc43",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.OC9ttUM3xalAJWSM",
      page: 82,
      width: 805,
      height: 850,
      tokenX: 65,
      tokenY: 51,
      tokenSize: 458,
      forIds: ["ODI6MzIzOjQxMQ"],
    }),
    new ModuleNpc({
      id: "npc44",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.0Ve1reLmo36JXnCT",
      page: 83,
      width: 805,
      height: 786,
      tokenX: 42,
      tokenY: 180,
      tokenSize: 581,
      forIds: ["NjI6OTk6OTk", "ODM6Njg6MzM5"],
    }),
    new ModuleNpc({
      id: "npc45",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.ErJQcWKeBm1aZ7Np",
      page: 84,
      width: 859,
      height: 853,
      tokenX: -85,
      tokenY: -113,
      tokenSize: 579,
      forIds: ["ODQ6MjUxOjQzNQ", "NTE6Njg6MTcx"],
    }),
    new ModuleNpc({
      id: "npc46",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.M2YAGc36xzy8SAL7",
      page: 85,
      width: 851,
      height: 1143,
      tokenX: -329,
      tokenY: -65,
      tokenSize: 359,
      forIds: ["ODU6Njg6NjE1"],
    }),
    new ModuleNpc({
      id: "npc47",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.JajzgeWF1H0Ks6ON",
      page: 86,
      width: 890,
      height: 871,
      tokenX: -250,
      tokenY: -19,
      tokenSize: 778,
      forIds: ["ODY6MjUxOjQ5NQ", "NTI6MzI2OjU2Nw"],
    }),
    new ModuleNpc({
      id: "npc48",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.AYHh9p9ZJFM0ELK1",
      page: 87,
      width: 857,
      height: 865,
      tokenX: -203,
      tokenY: 23,
      tokenSize: 641,
      forIds: ["ODc6Njg6NDIz", "MTk6Njg6NDEx"],
    }),
    new ModuleNpc({
      id: "npc49",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.vVjsaFfYREz7bflO",
      page: 88,
      width: 930,
      height: 1079,
      tokenX: -232,
      tokenY: -151,
      tokenSize: 351,
      forIds: [
        "ODg6MzQzOjQ1OQ",
        "Njc6Njg6Njk5",
        "NTg6MzI2Ojk5",
        "NjU6Mjk1OjU3OQ",
      ],
    }),
    new ModuleNpc({
      id: "npc50",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.WMeRC4WHogtHXnGG",
      page: 89,
      width: 878,
      height: 1037,
      tokenX: -190,
      tokenY: -73,
      tokenSize: 393,
      forIds: ["ODk6Njg6NDcx", "NjQ6MzMxOjMxNQ"],
    }),
    new ModuleNpc({
      id: "npc51",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.X3QcYLr2rBcIsJrC",
      label: "AS",
      forIds: ["NTk6Njg6OTk", "NjU6Mjk1OjUzMQ"],
    }),
    new ModuleNpc({
      id: "npc52",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.zpd6b6UPP72ZELCj",
      label: "P",
      forIds: ["MzU6Njg6NTE5"],
    }),
    new ModuleNpc({
      id: "npc53",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.uQBOJfjtzEXvpLQz",
      label: "OJ",
      forIds: ["Mzk6Njg6NTA3"],
    }),
    new ModuleNpc({
      id: "npc54",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.vRAdYovWcy2euwuL",
      label: "SF",
      forIds: ["Mzk6Njg6NDU5"],
    }),
    new ModuleNpc({
      id: "npc55",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.GOQPbXk8HZDypZzd",
      label: "VO",
      forIds: ["Mzk6Mjk1Ojk5"],
    }),
    new ModuleNpc({
      id: "npc56",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.qdelXqVZKfk1MlAB",
      label: "SF",
      forIds: ["NDM6Njg6MTU5"],
    }),
    new ModuleNpc({
      id: "npc57",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.aYDbWuOj66nve8r4",
      label: "JD",
      forIds: ["NDc6Njg6NjYz"],
    }),
    new ModuleNpc({
      id: "npc58",
      name: {
        page: 60,
        x: 326.25,
        y: 483,
      },
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.pzCgOvNPish9QlTC",
      label: "GWC",
      forIds: ["NjA6MzI2OjQ4Mw"],
    }),
    new ModuleNpc({
      id: "npc59",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.peCOXs71JT57JLsn",
      label: "G",
      forIds: ["NjE6Mjk1OjI3OQ"],
    }),
    new ModuleNpc({
      id: "npc60",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.8abNns0wcbPMYpRD",
      label: "GD",
      forIds: ["NTI6MzI2OjUxOQ"],
    }),
    new ModuleNpc({
      id: "npc61",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.U0pKGj1yJemGAXyc",
      name: {
        page: 44,
        x: 99,
        y: 579,
        sentenceCase: true,
      },
      label: "R",
      forIds: ["NDQ6OTk6NTc5"],
    }),
    new ModuleNpc({
      id: "npc62",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-3.Actor.ULfACJrDBnZLNBKj",
      label: "TS",
      forIds: ["MTA6MzI2OjU3OQ"],
    }),
    new ModuleNpc({
      id: "hazard1",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.y2w2jjs2O3gP0H5v",
      label: "SW",
      forIds: ["MTE6Njg6NDM1", "NTk6Njg6NDgz"],
    }),
    new ModuleNpc({
      id: "hazard2",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.iKhMNWK6FB7ICach",
      label: "ACP",
      forIds: ["Mzg6MzI2OjQ1OQ"],
    }),
    new ModuleNpc({
      id: "hazard3",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.otOOVXZU1CdTcLxS",
      label: "BDT",
      forIds: ["NDI6MzI2OjExMQ"],
    }),
    new ModuleNpc({
      id: "hazard4",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.d1zIcvHE3z7k0Rzs",
      label: "EWW",
      forIds: ["NTk6Mjk1OjIxOQ"],
    }),
  ];
  journals = [
    new CaptionImage({
      name: "journal1",
      page: 4,
      width: 1259,
      height: 1636,
    }),
    new CaptionImage({
      name: "journal2",
      page: 6,
      width: 1259,
      height: 1636,
    }),
    new CaptionImage({
      name: "journal3",
      page: 20,
      width: 1259,
      height: 1636,
    }),
    new CaptionImage({
      name: "journal4",
      page: 70,
      width: 1259,
      height: 1636,
    }),
    new CaptionImage({
      name: "journal5",
      page: 76,
      width: 1262,
      height: 1637,
    }),
    new CaptionImage({
      name: "journal6",
      page: 78,
      width: 425,
      height: 425,
    }),
    new CaptionImage({
      name: "journal7",
      page: 79,
      width: 410,
      height: 410,
    }),
    new CaptionImage({
      name: "journal8",
      page: 80,
      width: 511,
      height: 811,
    }),
    new CaptionImage({
      name: "journal9",
      page: 81,
      width: 728,
      height: 1139,
    }),
    new CaptionImage({
      name: "journal10",
      page: 72,
      width: 684,
      height: 1236,
    }),
    new CaptionImage({
      name: "journal11",
      page: 73,
      width: 561,
      height: 1114,
    }),
    new CaptionImage({
      name: "journal12",
      page: 75,
      width: 780,
      height: 1269,
    }),
  ];
  journalPages = [
    {
      name: "Chapter 1",
      pages: [
        {
          id: "NzoyMDE6Njg0",
        },
        {
          id: "NzozNzE6NTQz",
        },
        {
          id: "NzozNzE6MjU1",
        },
        {
          id: "MTE6MzExOjY5OQ",
        },
        {
          id: "OTo2ODoyMTk",
        },
        {
          id: "OToyOTU6Njk5",
        },
        {
          id: "OToyOTU6MjY3",
        },
        {
          id: "MTA6OTk6MjE5",
        },
        {
          id: "MTA6MzI2OjY5OQ",
        },
        {
          id: "MTE6Njg6Njk5",
        },
        {
          id: "MTE6Njg6MTM1",
        },
        {
          id: "MTI6Mzg1OjEyMw",
        },
        {
          id: "MTM6Njg6NDQ3",
        },
        {
          id: "MTM6Njg6MjMx",
        },
        {
          id: "MTM6Mjk1OjI0Mw",
        },
        {
          id: "MTQ6OTk6MTU5",
        },
        {
          id: "MTQ6MzczOjY1MQ",
        },
        {
          id: "MTQ6MzI2OjI1NQ",
        },
        {
          id: "MTU6Mjk1OjQ1OQ",
        },
        {
          id: "MTU6Mjk1OjIzMQ",
        },
        {
          id: "MTY6OTk6MzM5",
        },
        {
          id: "MTY6MzI2OjExMQ",
        },
        {
          id: "MTc6Njg6NDEx",
        },
        {
          id: "MTg6OTk6Njk5",
        },
        {
          id: "MTg6MzI2OjY5OQ",
        },
        {
          id: "MTk6Njg6NjI3",
        },
        {
          id: "MTk6Njg6MzYz",
        },
        {
          id: "MTk6Mjk1OjQ0Nw",
        },
      ],
    },
    {
      name: "Chapter 2",
      pages: [
        {
          id: "MjE6MTk2OjY4Mg",
        },
        {
          id: "MjE6MzcxOjU0Mw",
        },
        {
          id: "MjE6MzcxOjM5OQ",
        },
        {
          id: "MjU6MzExOjY5OQ",
        },
        {
          id: "NDc6MzExOjY5OQ",
        },
        {
          id: "MjI6MzI2OjE1OQ",
        },
        {
          id: "MjM6Mjk1OjYwMw",
        },
        {
          id: "MjQ6OTk6NjI3",
        },
        {
          id: "MjQ6OTk6Mzc1",
        },
        {
          id: "MjU6Njg6NjE1",
        },
        {
          id: "MjU6Njg6NDEx",
        },
        {
          id: "MjU6Mjk1OjEzNQ",
        },
        {
          id: "MjY6OTk6NDU5",
        },
        {
          id: "Mjc6Njg6MjMx",
        },
        {
          id: "Mjc6Mjk1OjYzOQ",
        },
        {
          id: "Mjc6Mjk1OjM2Mw",
        },
        {
          id: "Mjg6OTk6MTQ3",
        },
        {
          id: "Mjk6Njg6NjE1",
        },
        {
          id: "Mjk6Njg6MTIz",
        },
        {
          id: "MzA6MzI2OjYxNQ",
        },
        {
          id: "MzA6MzI2OjQzNQ",
        },
        {
          id: "MzE6Njg6NTMx",
        },
        {
          id: "MzE6Njg6Mzc1",
        },
        {
          id: "MzI6MzI2OjI0Mw",
        },
        {
          id: "MzM6Njg6Njk5",
        },
        {
          id: "MzM6Mjk1OjQ1OQ",
        },
        {
          id: "MzQ6OTk6Mzk5",
        },
        {
          id: "MzQ6MzI2OjY5OQ",
        },
        {
          id: "MzU6Mjk1OjY5OQ",
        },
        {
          id: "MzU6Mjk1OjE5NQ",
        },
        {
          id: "MzY6Mzg4OjE4Mw",
        },
        {
          id: "Mzc6Njg6NjI3",
        },
        {
          id: "Mzc6Mjk1OjQxMQ",
        },
        {
          id: "Mzg6MzI2OjY5OQ",
        },
        {
          id: "Mzg6MzI2OjIzMQ",
        },
        {
          id: "Mzk6Njg6Mjc5",
        },
        {
          id: "Mzk6Mjk1OjM5OQ",
        },
        {
          id: "NDA6OTk6Njk5",
        },
        {
          id: "NDA6OTk6NDgz",
        },
        {
          id: "NDA6NDEwOjEzNQ",
        },
        {
          id: "NDE6Mjk1OjU2Nw",
        },
        {
          id: "NDE6Mjk1OjE5NQ",
        },
        {
          id: "NDI6MzI2OjI5MQ",
        },
        {
          id: "NDM6Njg6NDM1",
        },
        {
          id: "NDM6Njg6MTEx",
        },
        {
          id: "NDQ6OTk6NTMx",
        },
        {
          id: "NDQ6MzI2OjE4Mw",
        },
        {
          id: "NDU6Njg6MzI3",
        },
        {
          id: "NDY6OTk6OTk",
        },
        {
          id: "NDc6Njg6NDQ3",
        },
        {
          id: "NDg6OTk6MTgz",
        },
        {
          id: "NDk6Njg6NDk1",
        },
        {
          id: "NTA6OTk6Njk5",
        },
        {
          id: "NTA6MzQ2OjI3OQ",
        },
        {
          id: "NTI6OTk6NjM5",
        },
        {
          id: "NTI6MzI2OjQ3MQ",
        },
        {
          id: "NTM6Mjk1OjU3OQ",
        },
        {
          id: "NTM6Mjk1OjI5MQ",
        },
        {
          id: "NTQ6MzM0OjYyNw",
        },
      ],
    },
    {
      name: "Chapter 3",
      pages: [
        {
          id: "NTc6MTk1OjY4MQ",
        },
        {
          id: "NTc6MzcxOjU0Mw",
        },
        {
          id: "NTc6MzcxOjM2Mw",
        },
        {
          id: "NTc6Njg6Mjc5",
        },
        {
          id: "NTg6OTk6NTY3",
        },
        {
          id: "NTg6MzI2OjY5OQ",
        },
        {
          id: "NTg6MzI2OjUwNw",
        },
        {
          id: "NTk6Njg6NjUx",
        },
        {
          id: "NTk6MzExOjY5OQ",
        },
        {
          id: "NTk6Mjk1OjQyMw",
        },
        {
          id: "NjA6MzI2OjY5OQ",
        },
        {
          id: "NjA6MzI2OjQzNQ",
        },
        {
          id: "NjI6OTk6NjE1",
        },
        {
          id: "NjI6MzI2OjY5OQ",
        },
        {
          id: "NjI6MzI2OjM4Nw",
        },
        {
          id: "NjM6Mjk1OjY5OQ",
        },
        {
          id: "NjU6Njg6MjU1",
        },
        {
          id: "NjY6OTk6Mzg3",
        },
        {
          id: "Njc6Njg6NjUx",
        },
        {
          id: "Njc6Mjk1OjYzOQ",
        },
        {
          id: "Njg6MzI2OjMxNQ",
        },
        {
          id: "Njk6Mjk1OjI0Mw",
        },
      ],
    },
    {
      name: "Back Matter",
      pages: [
        {
          id: "NzE6MjAwOjY2OA",
        },
        {
          id: "NzE6Njg6MTk1",
        },
        {
          id: "NzI6MzI2OjM3NQ",
        },
        {
          id: "NzQ6OTk6MTEx",
        },
        {
          id: "Nzc6MTQ5OjY2OA",
        },
        {
          id: "Nzc6Njg6NTA3",
        },
        {
          id: "Nzc6Mjk1OjQyMw",
        },
        {
          id: "ODA6OTk6Njk5",
        },
        {
          id: "ODE6Njg6Njk5",
        },
        {
          id: "ODI6MjUxOjY4Nw",
        },
        {
          id: "ODM6Njg6Njg3",
        },
        {
          id: "ODQ6MjUxOjY4Nw",
        },
        {
          id: "ODQ6MjUxOjQ5NQ",
        },
        {
          id: "ODU6Njg6Njk5",
        },
        {
          id: "ODY6MjUxOjY4Nw",
        },
        {
          id: "ODc6Njg6Njg3",
        },
        {
          id: "ODg6MjUxOjY4Nw",
        },
        {
          id: "ODg6MjUxOjU3OQ",
        },
        {
          id: "ODk6Njg6Njk5",
        },
        {
          id: "OTA6MTI4OjY2NA",
        },
        {
          id: "OTE6Njg6NTMx",
        },
        {
          id: "OTI6MTk4OjY2NA",
        },
        {
          id: "OTM6Njg6NTY3",
        },
        {
          id: "OTQ6MTkyOjY2NA",
        },
        {
          id: "OTQ6MzI2OjIwNw",
        },
        {
          id: "ODI6MTQyOjY2Mw",
        },
        {
          id: "ODM6MzcxOjY2Mw",
        },
        {
          id: "ODQ6MTEzOjY2Mw",
        },
        {
          id: "ODU6MzcxOjY2Mw",
        },
        {
          id: "ODY6MTE2OjY2Mw",
        },
        {
          id: "ODc6MzcxOjY2Mw",
        },
        {
          id: "ODg6MTQ2OjY2Mw",
        },
        {
          id: "ODk6MzcxOjY2Mw",
        },
      ],
    },
    {
      name: "Handouts",
      pages: [
        {
          id: "journal1",
        },
        {
          id: "journal2",
        },
        {
          id: "journal3",
        },
        {
          id: "journal4",
        },
        {
          id: "journal5",
        },
        {
          id: "journal6",
        },
        {
          id: "journal7",
        },
        {
          id: "journal8",
        },
        {
          id: "journal9",
        },
        {
          id: "journal10",
        },
        {
          id: "journal11",
        },
        {
          id: "journal12",
        },
      ],
    },
  ];
  combines = [];
  detect(pdf) {
    return (
      pdf.textDetails.some(
        (t) => t.text.trim() === "Spoken on" && t.fontId === "Gin-Regular:40",
      ) &&
      !pdf.textDetails.some(
        (t) =>
          t.text.trim() === "INTERACTIVE MAPS" && t.fontName === "Dax-Bold",
      )
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    this.markStartOfLine(text, 82, 335.5, 387);
    this.markStartOfLine(text, 82, 338.5, 375);
    this.markStartOfLine(text, 82, 340.5, 351);
    this.markStartOfLine(text, 82, 340.5, 339);
    this.markStartOfLine(text, 82, 356.5, 315);
    this.markStartOfLine(text, 82, 379.5, 291);
    this.markStartOfLine(text, 82, 367.5, 279);
    this.markStartOfLine(text, 82, 319.5, 267);
    this.markStartOfLine(text, 82, 315.5, 255);
    this.markStartOfLine(text, 82, 310.5, 243);
    this.markIndented(text, 82, 270.5, 159);
    this.markIndented(text, 82, 281.5, 207);
    this.markIndented(text, 82, 298.5, 183);
    this.markStartOfLine(text, 82, 304.5, 135);
    this.markStartOfLine(text, 84, 300.5, 303);
    this.markStartOfLine(text, 84, 280.5, 267);
    this.markStartOfLine(text, 84, 291.5, 255);
    this.markStartOfLine(text, 84, 354.5, 231);
    this.markStartOfLine(text, 84, 356.5, 195);
    this.markStartOfLine(text, 84, 361.5001, 123);
    this.markStartOfLine(text, 84, 370.5001, 99);
    this.markStartOfLine(text, 86, 370.5001, 279);
    this.markIndented(text, 86, 408.5001, 159);
    this.markIndented(text, 86, 392.5001, 135);
    this.markStartOfLine(text, 88, 326.5, 435);
    this.markStartOfLine(text, 88, 316.5, 423);
    this.markStartOfLine(text, 88, 304.5, 411);
    this.markStartOfLine(text, 88, 291.5, 399);
    this.markStartOfLine(text, 88, 278.5, 387);
    this.markStartOfLine(text, 88, 267.5, 375);
    this.markStartOfLine(text, 88, 281.5, 363);
    this.markStartOfLine(text, 88, 289.5, 351);
    this.markStartOfLine(text, 88, 291.5, 339);
    this.markStartOfLine(text, 88, 384.5, 267);
    this.markStartOfLine(text, 88, 387.5, 255);
    this.markStartOfLine(text, 88, 382.5, 231);
    this.markStartOfLine(text, 88, 318.5, 207);
    this.markStartOfLine(text, 88, 287.5, 183);
    this.markStartOfLine(text, 88, 301.5, 111);
    this.markStartOfLine(text, 91, 316.75, 591);
    this.markStartOfLine(text, 93, 300.75, 627);
    this.markStartOfLine(text, 93, 367.75, 567);
    this.changeColor(text, 60, 326.3099, 435, "#3d6b37");
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
