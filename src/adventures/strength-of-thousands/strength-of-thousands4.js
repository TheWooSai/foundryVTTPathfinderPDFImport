import { StrengthOfThousandsBase } from "./base.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class StrengthOfThousands4 extends StrengthOfThousandsBase {
  prefix = "strength-of-thousands-4";
  fullName = "Strength of Thousands - Secrets of the Temple-City";
  pages = [
    this.RightSingleColumnChapterHeadingPageLayout(7),
    this.LeftTwoColumn(8),
    this.RightTwoColumn(9),
    this.LeftTwoColumnWithMap(10, 340),
    this.RightTwoColumn(11),
    this.LeftTwoColumn(12),
    this.RightTwoColumn(13),
    this.LeftTwoColumn(14),
    this.RightTwoColumn(15),
    this.LeftTwoColumn(16),
    this.RightTwoColumn(17),
    this.LeftTwoColumn(18),
    this.RightTwoColumn(19),
    this.LeftTwoColumn(20),
    this.RightTwoColumn(21),
    this.LeftTwoColumn(22),
    this.RightTwoColumn(23),
    this.LeftTwoColumn(24),
    this.RightTwoColumn(25),
    this.LeftTwoColumn(26),
    this.RightTwoColumn(27),
    this.LeftTwoColumn(28),
    this.RightTwoColumn(29),
    this.RightSingleColumnChapterHeadingPageLayout(31),
    this.RightTwoColumn(33),
    this.LeftTwoColumn(34),
    this.RightTwoColumn(35),
    this.LeftTwoColumnWithMap(36, 340),
    this.RightTwoColumn(37),
    this.LeftTwoColumn(38),
    this.RightTwoColumn(39),
    this.LeftTwoColumn(40),
    this.RightTwoColumn(41),
    this.LeftTwoColumn(42),
    this.RightTwoColumn(43),
    this.LeftTwoColumn(44),
    this.RightTwoColumn(45),
    this.LeftTwoColumn(46),
    this.RightTwoColumn(47),
    this.RightSingleColumnChapterHeadingPageLayout(49),
    this.LeftTwoColumnWithMap(50, 340),
    this.RightTwoColumn(51),
    this.LeftTwoColumn(52),
    this.RightTwoColumn(53),
    this.LeftTwoColumn(54),
    this.RightTwoColumnWithMap(55, 340),
    this.RightTwoColumn(57),
    this.LeftTwoColumn(58),
    this.RightTwoColumn(59),
    this.LeftTwoColumn(60),
    this.RightTwoColumn(61),
    this.LeftTwoColumn(62),
    this.RightTwoColumn(63),
    this.RightChapterHeadingPageLayout(65),
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
    this.ChapterHeadingPageLayout(88),
    this.RightTwoColumn(89),
    this.ChapterHeadingPageLayout(90),
    this.RightTwoColumn(91),
    this.ChapterHeadingPageLayout(92),
    this.RightTwoColumn(93),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      canonical: {
        name: "sot4/map1",
        priority: 0,
      },
      nameInfo: {
        x: 52.2791,
        y: 748.9401,
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
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot4-map1.json",
    }),
    new ModuleScene({
      name: "map2",
      canonical: {
        name: "sot4/map2",
        priority: 0,
      },
      nameInfo: {
        x: 678.589,
        y: 748.9401,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 1262,
      height: 1637,
      imageIndex: 1,
      imageLeft: 0,
      imageRight: 1262,
      imageCols: 10,
      imageTop: 0,
      imageBottom: 1262,
      imageRows: 10,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot4-map2.json",
    }),
    new ModuleScene({
      name: "map3",
      canonical: {
        name: "sot4/map3",
        priority: 0,
      },
      nameInfo: {
        x: 441,
        y: 388.3319,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 10,
      width: 1210,
      height: 841,
      imageLeft: 51,
      imageRight: 1182,
      imageCols: 22,
      imageTop: 53,
      imageBottom: 823,
      imageRows: 15,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot4-map3.json",
      journals: [
        {
          x: 650,
          y: 650,
          name: "WELCOME GIFT (MODERATE 12)",
        },
      ],
      tokens: [
        {
          id: "npc3",
          x: 2100,
          y: 600,
        },
        {
          id: "npc4",
          x: 2300,
          y: 700,
        },
        {
          id: "npc47",
          x: 2300,
          y: 900,
        },
      ],
    }),
    new ModuleScene({
      name: "map4",
      canonical: {
        name: "sot4/map4",
        priority: 0,
      },
      nameInfo: {
        x: 310.3229,
        y: 738.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 32,
      width: 1213,
      height: 1609,
      imageLeft: 10,
      imageRight: 1204,
      imageCols: 68,
      imageTop: 15,
      imageBottom: 1401,
      imageRows: 79,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot4-map4.json",
      journals: [
        {
          x: 3300,
          y: 4100,
          name: "A1.",
        },
        {
          x: 2850,
          y: 3850,
          name: "A2.",
        },
        {
          x: 3850,
          y: 3850,
          name: "A2.",
        },
        {
          x: 3300,
          y: 3600,
          name: "A3.",
        },
        {
          x: 3300,
          y: 3200,
          name: "A4.",
        },
        {
          x: 2650,
          y: 3250,
          name: "A5.",
        },
        {
          x: 3950,
          y: 3250,
          name: "A5.",
        },
        {
          x: 2700,
          y: 2800,
          name: "A6.",
        },
        {
          x: 3900,
          y: 2800,
          name: "A6.",
        },
        {
          x: 3300,
          y: 2800,
          name: "A7.",
        },
        {
          x: 3300,
          y: 5200,
          name: "A8.",
        },
        {
          x: 3300,
          y: 6500,
          name: "A9.",
        },
        {
          x: 2600,
          y: 6500,
          name: "A10.",
        },
        {
          x: 2250,
          y: 6500,
          name: "A11.",
        },
        {
          x: 4100,
          y: 6500,
          name: "A12.",
        },
        {
          x: 4450,
          y: 6500,
          name: "A13.",
        },
        {
          x: 3400,
          y: 7900,
          name: "A14.",
        },
        {
          x: 3300,
          y: 9300,
          name: "A15.",
        },
        {
          x: 3300,
          y: 9900,
          name: "A16.",
        },
        {
          x: 7100,
          y: 5400,
          name: "A17.",
        },
        {
          x: 7100,
          y: 6700,
          name: "A18.",
        },
        {
          x: 6250,
          y: 6550,
          name: "A19.",
        },
        {
          x: 7950,
          y: 6550,
          name: "A20.",
        },
        {
          x: 7450,
          y: 7950,
          name: "A21.",
        },
        {
          x: 6450,
          y: 7650,
          name: "A22.",
        },
        {
          x: 7100,
          y: 9600,
          name: "A23.",
        },
      ],
      tokens: [
        {
          id: "npc45",
          x: 3600,
          y: 6e3,
        },
        {
          id: "npc45",
          x: 2800,
          y: 6e3,
        },
        {
          id: "npc45",
          x: 3200,
          y: 6800,
        },
        {
          id: "npc16",
          x: 2500,
          y: 6400,
        },
        {
          id: "npc16",
          x: 2500,
          y: 6300,
        },
        {
          id: "npc16",
          x: 2500,
          y: 6500,
        },
        {
          id: "npc43",
          x: 2400,
          y: 6500,
        },
        {
          id: "npc46",
          x: 4e3,
          y: 6300,
        },
        {
          id: "npc39",
          x: 3500,
          y: 7900,
        },
        {
          id: "npc39",
          x: 3200,
          y: 7800,
        },
        {
          id: "npc50",
          x: 3400,
          y: 9300,
        },
        {
          id: "npc17",
          x: 3400,
          y: 9800,
        },
        {
          id: "npc41",
          x: 5900,
          y: 8100,
        },
        {
          id: "npc41",
          x: 5400,
          y: 7100,
        },
        {
          id: "npc35",
          x: 7500,
          y: 8200,
        },
        {
          id: "npc35",
          x: 7300,
          y: 8200,
        },
        {
          id: "npc35",
          x: 7400,
          y: 8400,
        },
        {
          id: "npc18",
          x: 7200,
          y: 6600,
        },
        {
          id: "npc18",
          x: 6700,
          y: 6400,
        },
        {
          id: "npc48",
          x: 7900,
          y: 6300,
        },
        {
          id: "npc48",
          x: 7800,
          y: 6400,
        },
        {
          id: "npc48",
          x: 7800,
          y: 6800,
        },
      ],
    }),
    new ModuleScene({
      name: "map5a",
      canonical: {
        name: "sot4/map5a",
        priority: 0,
      },
      nameInfo: {
        x: 189.25,
        y: 388.3319,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 50,
      width: 1232,
      height: 841,
      imageLeft: 27,
      imageRight: 1208,
      imageCols: 37,
      imageTop: 7,
      imageBottom: 806,
      imageRows: 25,
      cropLeft: 0,
      cropRight: 624,
      cropTop: 0,
      cropBottom: 841,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot4-map5a.json",
    }),
    new ModuleScene({
      name: "map5b",
      canonical: {
        name: "sot4/map5b",
        priority: 0,
      },
      nameInfo: {
        x: 326.25,
        y: 388.3319,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 50,
      width: 1232,
      height: 841,
      imageLeft: 27,
      imageRight: 1208,
      imageCols: 37,
      imageTop: 7,
      imageBottom: 806,
      imageRows: 25,
      cropLeft: 639,
      cropRight: 1232,
      cropTop: 0,
      cropBottom: 841,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot4-map5b.json",
    }),
    new ModuleScene({
      name: "map6a",
      canonical: {
        name: "sot4/map6a",
        priority: 0,
      },
      nameInfo: {
        x: 45,
        y: 413.6681,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 56,
      width: 1213,
      height: 1605,
      imageLeft: 28,
      imageRight: 1188,
      imageCols: 40,
      imageTop: 56,
      imageBottom: 1592,
      imageRows: 53,
      cropLeft: 0,
      cropRight: 599,
      cropTop: 0,
      cropBottom: 802,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot4-map6a.json",
      journals: [
        {
          x: 650,
          y: 850,
          name: "WALKENA\u2019S FORCES (MODERATE 14)",
        },
      ],
      tokens: [
        {
          id: "npc49",
          x: 1e3,
          y: 1800,
        },
        {
          id: "npc49",
          x: 1200,
          y: 2400,
        },
        {
          id: "npc49",
          x: 1600,
          y: 1600,
        },
        {
          id: "npc49",
          x: 1700,
          y: 2200,
        },
      ],
    }),
    new ModuleScene({
      name: "map6b",
      canonical: {
        name: "sot4/map6b",
        priority: 0,
      },
      nameInfo: {
        x: 326.25,
        y: 413.6681,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 56,
      width: 1213,
      height: 1605,
      imageLeft: 28,
      imageRight: 1188,
      imageCols: 40,
      imageTop: 56,
      imageBottom: 1592,
      imageRows: 53,
      cropLeft: 613,
      cropRight: 1213,
      cropTop: 0,
      cropBottom: 802,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot4-map6b.json",
      journals: [
        {
          x: 750,
          y: 750,
          name: "ATTACK OF THE SUN-SPIRES (MODERATE 14)",
        },
      ],
      tokens: [
        {
          id: "npc21",
          x: 900,
          y: 1e3,
        },
        {
          id: "npc21",
          x: 1900,
          y: 1e3,
        },
        {
          id: "npc21",
          x: 2300,
          y: 900,
        },
      ],
    }),
    new ModuleScene({
      name: "map6c",
      canonical: {
        name: "sot4/map6c",
        priority: 0,
      },
      nameInfo: {
        x: 45,
        y: 354.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 56,
      width: 1213,
      height: 1605,
      imageLeft: 28,
      imageRight: 1188,
      imageCols: 40,
      imageTop: 56,
      imageBottom: 1592,
      imageRows: 53,
      cropLeft: 0,
      cropRight: 599,
      cropTop: 818,
      cropBottom: 1605,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot4-map6c.json",
      journals: [
        {
          x: 600,
          y: 800,
          name: "PIERCING THE WALL (MODERATE 14)",
        },
      ],
      tokens: [
        {
          id: "npc21",
          x: 1100,
          y: 1200,
        },
        {
          id: "npc21",
          x: 1900,
          y: 1300,
        },
        {
          id: "npc49",
          x: 1500,
          y: 1700,
        },
      ],
    }),
    new ModuleScene({
      name: "map6d",
      canonical: {
        name: "sot4/map6d",
        priority: 0,
      },
      nameInfo: {
        x: 326.25,
        y: 354.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 56,
      width: 1213,
      height: 1605,
      imageLeft: 28,
      imageRight: 1188,
      imageCols: 40,
      imageTop: 56,
      imageBottom: 1592,
      imageRows: 53,
      cropLeft: 613,
      cropRight: 1213,
      cropTop: 818,
      cropBottom: 1605,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot4-map6d.json",
      journals: [
        {
          x: 750,
          y: 850,
          name: "BREAKING THE GOLDEN BLADE (SEVERE 14)",
        },
      ],
      tokens: [
        {
          id: "npc11",
          x: 1700,
          y: 1400,
        },
        {
          id: "npc2",
          x: 1900,
          y: 1500,
        },
        {
          id: "npc2",
          x: 1800,
          y: 1500,
        },
        {
          id: "npc2",
          x: 1600,
          y: 1500,
        },
        {
          id: "npc2",
          x: 1500,
          y: 1500,
        },
      ],
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 9,
        x: 268.9502,
        y: 463.8786,
      },
      page: 9,
      width: 503,
      height: 503,
      tokenX: 24,
      tokenY: 74,
      tokenSize: 559,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.OjqCx6nMwDuVLoqA",
      page: 11,
      width: 543,
      height: 1208,
      tokenX: -116,
      tokenY: -77,
      tokenSize: 312,
      forIds: ["MTE6Njg6NDQ3", "Mjc6Njg6MzUx", "NjE6Njg6NDIz"],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.aQH62hiGUoOscc4i",
      page: 12,
      width: 825,
      height: 1101,
      tokenX: -223,
      tokenY: -23,
      tokenSize: 317,
      forIds: ["MTI6MzI2OjU3OQ"],
    }),
    new ModuleNpc({
      id: "npc4",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.1GNNvFjOH3mlJiRF",
      page: 13,
      width: 751,
      height: 1131,
      tokenX: -151,
      tokenY: 30,
      tokenSize: 291,
      forIds: ["MTM6Njg6NTE5"],
    }),
    new ModuleNpc({
      id: "npc5",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.MLCRss7LhVEE0HHy",
      page: 16,
      width: 543,
      height: 531,
      tokenX: 6,
      tokenY: 67,
      tokenSize: 571,
      forIds: ["OTE6Njg6NTU1"],
    }),
    new ModuleNpc({
      id: "npc6",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 18,
        x: 293.2153,
        y: 456.8161,
      },
      page: 18,
      width: 514,
      height: 514,
      tokenX: -7,
      tokenY: 59,
      tokenSize: 514,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc7",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 19,
        x: 257.9555,
        y: 447.2536,
      },
      page: 19,
      width: 630,
      height: 630,
      tokenX: -37,
      tokenY: 55,
      tokenSize: 574,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc8",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 21,
        x: 270.9402,
        y: 432.8161,
      },
      page: 21,
      width: 407,
      height: 550,
      tokenX: 91,
      tokenY: 79,
      tokenSize: 550,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc9",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 22,
        x: 285.6755,
        y: 438.2536,
      },
      page: 22,
      width: 457,
      height: 560,
      tokenX: 62,
      tokenY: 80,
      tokenSize: 560,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc10",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 24,
        x: 302.0101,
        y: 444.6911,
      },
      page: 24,
      width: 401,
      height: 504,
      tokenX: 73,
      tokenY: 54,
      tokenSize: 588,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc11",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.zfo1oFWRg3A2BxTQ",
      page: 25,
      width: 374,
      height: 559,
      tokenX: 144,
      tokenY: 91,
      tokenSize: 643,
      forIds: ["OTM6Njg6Njk5", "NjE6Njg6NDcx"],
    }),
    new ModuleNpc({
      id: "npc12",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 27,
        x: 277.6002,
        y: 436.4237,
      },
      page: 27,
      width: 577,
      height: 577,
      tokenX: 31,
      tokenY: 111,
      tokenSize: 661,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc13",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 29,
        x: 435.8352,
        y: 144.8161,
      },
      page: 29,
      width: 847,
      height: 1235,
      tokenX: -286,
      tokenY: -171,
      tokenSize: 367,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc14",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.rJQx7C5BGqslgr4x",
      page: 33,
      width: 867,
      height: 1104,
      tokenX: -275,
      tokenY: -6,
      tokenSize: 292,
      forIds: ["MzM6Njg6NDk1"],
    }),
    new ModuleNpc({
      id: "npc15",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 35,
        x: 276.6502,
        y: 421.4237,
      },
      page: 35,
      width: 613,
      height: 613,
      tokenX: 24,
      tokenY: 100,
      tokenSize: 669,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc16",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.U6EEfdbaodpYZfU6",
      page: 39,
      width: 738,
      height: 1170,
      tokenX: -136,
      tokenY: -1,
      tokenSize: 386,
      forIds: ["Mzg6MzI2OjE1OQ"],
    }),
    new ModuleNpc({
      id: "npc17",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-3.Actor.d5UfBtz09fOXKSmr",
      name: {
        page: 43,
        x: 315.6404,
        y: 130.3786,
      },
      page: 43,
      width: 851,
      height: 1186,
      tokenX: -323,
      tokenY: -237,
      tokenSize: 346,
      forIds: ["NDM6Njg6NjUx"],
      elite: true,
    }),
    new ModuleNpc({
      id: "npc18",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.5tqXmxNn2WgtZgV4",
      page: 44,
      width: 959,
      height: 840,
      tokenX: -90,
      tokenY: 113,
      tokenSize: 679,
      forIds: ["NDQ6OTk6NDQ3"],
    }),
    new ModuleNpc({
      id: "npc19",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.3vLu5145ORD6vcCJ",
      page: 51,
      width: 671,
      height: 1224,
      tokenX: -161,
      tokenY: -135,
      tokenSize: 384,
      forIds: ["NTE6Njg6MTEx"],
    }),
    new ModuleNpc({
      id: "npc20",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 53,
        x: 258.2954,
        y: 454.2536,
      },
      page: 53,
      width: 534,
      height: 534,
      tokenX: -9,
      tokenY: 114,
      tokenSize: 562,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc21",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.ijo4aRSFVd7Bmzr2",
      page: 58,
      width: 885,
      height: 1033,
      tokenX: -273,
      tokenY: -117,
      tokenSize: 333,
      forIds: ["NjA6MzI2OjY2Mw", "NTk6Mjk1OjE0Nw"],
    }),
    new ModuleNpc({
      id: "npc22",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.tNDYjNXMWk4VoxGm",
      page: 61,
      width: 994,
      height: 1093,
      tokenX: -361,
      tokenY: -148,
      tokenSize: 309,
      forIds: ["NjI6OTk6NDEx"],
    }),
    new ModuleNpc({
      id: "npc23",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.Cj0ra2zasTZCBRjJ",
      page: 63,
      width: 623,
      height: 623,
      tokenX: -105,
      tokenY: -64,
      tokenSize: 371,
      forIds: ["ODg6MzI2OjM5OQ"],
    }),
    new ModuleNpc({
      id: "npc24",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 65,
        x: 269.4054,
        y: 289.4809,
      },
      page: 65,
      width: 439,
      height: 528,
      tokenX: 52,
      tokenY: 79,
      tokenSize: 528,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc25",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 66,
        x: 277.9103,
        y: 471.2536,
      },
      page: 66,
      width: 476,
      height: 517,
      tokenX: 28,
      tokenY: 43,
      tokenSize: 545,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc26",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 66,
        x: 286.8704,
        y: 159.2536,
      },
      page: 66,
      width: 495,
      height: 495,
      tokenX: 23,
      tokenY: 58,
      tokenSize: 523,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc27",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 67,
        x: 281.2502,
        y: 464.4937,
      },
      page: 67,
      width: 366,
      height: 463,
      tokenX: 78,
      tokenY: 86,
      tokenSize: 491,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc28",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 67,
        x: 256,
        y: 171.2536,
      },
      page: 67,
      width: 440,
      height: 440,
      tokenX: 10,
      tokenY: 75,
      tokenSize: 468,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc29",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 68,
        x: 311.0152,
        y: 478.4937,
      },
      page: 68,
      width: 500,
      height: 500,
      tokenX: -9,
      tokenY: 66,
      tokenSize: 500,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc30",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 68,
        x: 306.4652,
        y: 170.4937,
      },
      page: 68,
      width: 433,
      height: 433,
      tokenX: 3,
      tokenY: 36,
      tokenSize: 433,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc31",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 69,
        x: 277.2753,
        y: 460.9873,
      },
      page: 69,
      width: 470,
      height: 491,
      tokenX: 16,
      tokenY: 56,
      tokenSize: 491,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc32",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 69,
        x: 274.4001,
        y: 204.3786,
      },
      page: 69,
      width: 386,
      height: 386,
      tokenX: 36,
      tokenY: 65,
      tokenSize: 442,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc33",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 73,
        x: 368.3205,
        y: 166.3786,
      },
      page: 73,
      width: 888,
      height: 1184,
      tokenX: -107,
      tokenY: -137,
      tokenSize: 372,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc34",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.xJPpzTfTABmT5C4i",
      page: 82,
      width: 843,
      height: 886,
      tokenX: 105,
      tokenY: 143,
      tokenSize: 802,
      forIds: ["ODI6MjUxOjUxOQ"],
    }),
    new ModuleNpc({
      id: "npc35",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.ybYXRItLGKw7oHsO",
      page: 83,
      width: 786,
      height: 857,
      tokenX: -230,
      tokenY: -75,
      tokenSize: 381,
      forIds: ["ODM6Njg6NTkx", "NDU6Mjk1Ojk5"],
    }),
    new ModuleNpc({
      id: "npc36",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.AfubOmkdmPRctnLX",
      page: 84,
      width: 818,
      height: 985,
      tokenX: -217,
      tokenY: 9,
      tokenSize: 313,
      forIds: ["ODQ6MzAyOjE0Nw"],
    }),
    new ModuleNpc({
      id: "npc37",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.qStWCL0wtOuQlqVy",
      page: 85,
      width: 805,
      height: 1143,
      tokenX: -270,
      tokenY: -75,
      tokenSize: 331,
      forIds: ["ODU6Njg6NDIz"],
    }),
    new ModuleNpc({
      id: "npc38",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.tvDUeXGTZWKUHr3V",
      page: 86,
      width: 817,
      height: 1022,
      tokenX: 35,
      tokenY: -117,
      tokenSize: 938,
      forIds: ["ODY6MjUxOjYxNQ", "NTE6Njg6Mzk5"],
    }),
    new ModuleNpc({
      id: "npc39",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.EyRDvDy5hWX7fUFR",
      page: 87,
      width: 843,
      height: 1031,
      tokenX: -292,
      tokenY: 5,
      tokenSize: 387,
      forIds: ["ODc6Njg6NTc5", "NDE6Njg6NDgz"],
    }),
    new ModuleNpc({
      id: "npc41",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.iD3YlM0QzI2SrjD6",
      label: "AW",
      forIds: ["NDY6MzI2OjM5OQ"],
    }),
    new ModuleNpc({
      id: "npc42",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.LwpPOXWeDY2KkL9l",
      label: "D",
      forIds: ["NTA6MzI2OjI2Nw"],
    }),
    new ModuleNpc({
      id: "npc43",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.XqifZ5APrSc8PqhP",
      label: "C",
      forIds: ["Mzk6Njg6NDIz"],
    }),
    new ModuleNpc({
      id: "npc44",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.1kr9leAaxUEsE69J",
      label: "GDG",
      forIds: ["NTI6MzI2OjQ1OQ"],
    }),
    new ModuleNpc({
      id: "npc45",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.t4bHhZBBDUyVzEmf",
      label: "IG",
      forIds: ["Mzc6Mjk1Ojk5"],
    }),
    new ModuleNpc({
      id: "npc46",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-3.Actor.AybyC0n2CWNbXAbK",
      label: "P",
      forIds: ["NDA6MzI2OjU0Mw"],
    }),
    new ModuleNpc({
      id: "npc47",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.0QsSJ1LbSRrmRgHL",
      label: "RSW",
      forIds: ["MTM6Mjk1OjYyNw"],
    }),
    new ModuleNpc({
      id: "npc48",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.ePJcp2ADOjJYYQ5Q",
      label: "SC",
      forIds: ["NDU6Njg6MTk1"],
    }),
    new ModuleNpc({
      id: "npc49",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.mcoOsewoxkLKY5vD",
      label: "SWB",
      forIds: ["NjA6MzI2OjYxNQ", "NTk6Njg6NTE5"],
    }),
    new ModuleNpc({
      id: "npc50",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.qStWCL0wtOuQlqVy",
      name: {
        page: 42,
        x: 99,
        y: 651,
      },
      label: "U",
      forIds: ["NDI6OTk6NjUx"],
    }),
  ];
  journals = [];
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
          id: "NzozNzE6MzYz",
        },
        {
          id: "ODozMjY6Mjc5",
        },
        {
          id: "OTo2ODo5OQ",
        },
        {
          id: "MTE6MzcwOjQzNQ",
        },
        {
          id: "MTQ6OTk6MjY3",
        },
        {
          id: "MTU6Mjk1OjUwNw",
        },
        {
          id: "MTY6OTk6MjE5",
        },
        {
          id: "MTY6MzI2OjM4Nw",
        },
        {
          id: "MTc6Mjk1OjE4Mw",
        },
        {
          id: "MTk6Njg6Mzk5",
        },
        {
          id: "MjA6MzI2OjI3OQ",
        },
        {
          id: "MjI6OTk6MTM1",
        },
        {
          id: "MjQ6OTk6MzUx",
        },
        {
          id: "MjU6MzM0OjUxOQ",
        },
        {
          id: "MjY6MzI2OjU2Nw",
        },
        {
          id: "Mjc6MzI1OjQzNQ",
        },
        {
          id: "Mjg6MzI2OjUwNw",
        },
        {
          id: "Mjk6Njg6MzI3",
        },
      ],
    },
    {
      name: "Chapter 2",
      pages: [
        {
          id: "MzE6MTk2OjY4Mg",
        },
        {
          id: "MzE6MzcxOjU0Mw",
        },
        {
          id: "MzE6MzcxOjM1MQ",
        },
        {
          id: "MzE6Njg6Mjkx",
        },
        {
          id: "MzQ6OTk6NjYz",
        },
        {
          id: "MzQ6MzI2OjQ0Nw",
        },
        {
          id: "MzU6Njg6NjE1",
        },
        {
          id: "MzU6Njg6MTcx",
        },
        {
          id: "MzU6Mzg0OjQ3MQ",
        },
        {
          id: "MzU6Mjk1OjM4Nw",
        },
        {
          id: "MzY6MzI2OjEyMw",
        },
        {
          id: "Mzc6Njg6Njk5",
        },
        {
          id: "Mzc6Njg6Mzc1",
        },
        {
          id: "Mzc6Njg6MzAz",
        },
        {
          id: "Mzc6Mjk1OjY5OQ",
        },
        {
          id: "Mzg6OTk6NDk1",
        },
        {
          id: "NDA6OTk6NTY3",
        },
        {
          id: "NDA6OTk6NDQ3",
        },
        {
          id: "NDA6MzI2OjQzNQ",
        },
        {
          id: "NDA6MzI2OjI5MQ",
        },
        {
          id: "NDE6Njg6NDM1",
        },
        {
          id: "NDI6OTk6NjAz",
        },
        {
          id: "NDM6Njg6MjQz",
        },
        {
          id: "NDM6Njg6MTM1",
        },
        {
          id: "NDQ6Mzg5OjI3OQ",
        },
        {
          id: "NDU6Njg6NDU5",
        },
        {
          id: "NDU6Mjk1OjY5OQ",
        },
        {
          id: "NDY6OTk6Njk5",
        },
        {
          id: "NDY6MzI2OjM1MQ",
        },
        {
          id: "NDc6Mjk1OjM5OQ",
        },
      ],
    },
    {
      name: "Chapter 3",
      pages: [
        {
          id: "NDk6MTk1OjY4MQ",
        },
        {
          id: "NDk6MzcxOjU0Mw",
        },
        {
          id: "NDk6MzcxOjM1MQ",
        },
        {
          id: "NDk6Njg6MjY3",
        },
        {
          id: "NTA6OTk6MjQz",
        },
        {
          id: "NTA6MzI2Ojk5",
        },
        {
          id: "NTE6Njg6MzUx",
        },
        {
          id: "NTI6OTk6MTIz",
        },
        {
          id: "NTM6Njg6NDU5",
        },
        {
          id: "NTQ6MzI2OjUwNw",
        },
        {
          id: "NTU6Mjk1OjExMQ",
        },
        {
          id: "NTc6Njg6NjYz",
        },
        {
          id: "NTc6Njg6MTgz",
        },
        {
          id: "NTc6Mjk1OjI5MQ",
        },
        {
          id: "NTk6Njg6Njk5",
        },
        {
          id: "NTk6Mjk1OjUzMQ",
        },
        {
          id: "NjA6OTk6MTQ3",
        },
        {
          id: "NjA6MzI2OjQxMQ",
        },
        {
          id: "NjE6Njg6OTk",
        },
        {
          id: "NjI6MzI2Ojk5",
        },
      ],
    },
    {
      name: "Back Matter",
      pages: [
        {
          id: "NjU6Nzc6NjY4",
        },
        {
          id: "NjU6Mjk1OjU0Mw",
        },
        {
          id: "NjY6OTk6Njk5",
        },
        {
          id: "NjY6NDIxOjY5OQ",
        },
        {
          id: "Njc6Njg6Njk5",
        },
        {
          id: "Njc6Mjk1OjY5OQ",
        },
        {
          id: "Njg6OTk6Njk5",
        },
        {
          id: "Njg6MzI2OjY5OQ",
        },
        {
          id: "Njk6Njg6Njk5",
        },
        {
          id: "Njk6Mjk1OjY5OQ",
        },
        {
          id: "NzE6MTcyOjY0MQ",
        },
        {
          id: "NzI6OTk6MzYz",
        },
        {
          id: "NzI6MzI2OjQxMQ",
        },
        {
          id: "NzM6Njg6NTE5",
        },
        {
          id: "NzQ6OTk6NDgz",
        },
        {
          id: "NzQ6MzI2OjYwMw",
        },
        {
          id: "NzQ6MzI2OjMxNQ",
        },
        {
          id: "NzU6Njg6NTA3",
        },
        {
          id: "NzU6Mjk1OjU5MQ",
        },
        {
          id: "NzU6MzY5OjM2Mw",
        },
        {
          id: "NzU6Mjk1OjE1OQ",
        },
        {
          id: "Nzc6MTQ5OjY2OA",
        },
        {
          id: "Nzc6Njg6NDU5",
        },
        {
          id: "Nzc6Mjk1OjU0Mw",
        },
        {
          id: "Nzc6Mjk1OjQyMw",
        },
        {
          id: "Nzk6Njg6Njk5",
        },
        {
          id: "ODA6MzI2OjM3NQ",
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
          id: "ODQ6MjUxOjYwMw",
        },
        {
          id: "ODQ6MjgwOjE4Mw",
        },
        {
          id: "ODU6Njg6NDk1",
        },
        {
          id: "ODY6MjUxOjY4Nw",
        },
        {
          id: "ODc6Njg6Njg3",
        },
        {
          id: "ODg6MTg5OjY2NA",
        },
        {
          id: "ODg6MzI2OjU3OQ",
        },
        {
          id: "OTA6MjIwOjY2NA",
        },
        {
          id: "OTA6MzI2OjEyMw",
        },
        {
          id: "OTI6MTg3OjY2NQ",
        },
        {
          id: "OTI6MzI2OjM2Mw",
        },
        {
          id: "ODI6MTQyOjY2Mw",
        },
        {
          id: "ODM6MzcxOjY2Mw",
        },
        {
          id: "ODQ6MTQyOjY2Mw",
        },
        {
          id: "ODU6MzcxOjY2Mw",
        },
        {
          id: "ODY6MTcyOjY2Mw",
        },
        {
          id: "ODc6MzcxOjY2Mw",
        },
      ],
    },
  ];
  combines = [];
  blacklistedFonts = this.blacklistedFonts.concat(["BradleyHandITCTT-Bold:13"]);
  detect(pdf) {
    return (
      pdf.textDetails.some(
        (t) => t.text.trim() === "Secrets" && t.fontId === "Gin-Regular:40",
      ) &&
      !pdf.textDetails.some(
        (t) =>
          t.text.trim() === "INTERACTIVE MAPS" && t.fontName === "Dax-Bold",
      )
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    this.markStartOfLine(text, 22, 337.25, 675);
    this.markIndented(text, 25, 340.75, 507);
    this.markIndented(text, 27, 380.75, 531);
    this.markIndented(text, 27, 306.75, 699);
    this.markStartOfLine(text, 78, 367.2499, 267);
    this.markIndented(text, 78, 365.2499, 195);
    this.markIndented(text, 78, 371.2499, 183);
    this.markIndented(text, 78, 366.4999, 135);
    this.markStartOfLine(text, 82, 288.5, 411);
    this.markStartOfLine(text, 82, 287.5, 399);
    this.markStartOfLine(text, 82, 296.5, 387);
    this.markStartOfLine(text, 82, 345.5, 363);
    this.markStartOfLine(text, 82, 385.5, 315);
    this.markStartOfLine(text, 82, 386.5, 303);
    this.markStartOfLine(text, 82, 385.5, 279);
    this.markStartOfLine(text, 82, 410.5, 255);
    this.markStartOfLine(text, 82, 279.5, 159);
    this.markStartOfLine(text, 82, 348.5, 99);
    this.markStartOfLine(text, 84, 301.5, 447);
    this.markStartOfLine(text, 84, 313.5, 351);
    this.markStartOfLine(text, 84, 319.4999, 123);
    this.markStartOfLine(text, 84, 327.4999, 111);
    this.markStartOfLine(text, 84, 334.4999, 99);
    this.markStartOfLine(text, 84, 343.4999, 75);
    this.markStartOfLine(text, 86, 251.5001, 435);
    this.markStartOfLine(text, 86, 262.5001, 423);
    this.markStartOfLine(text, 86, 282.5001, 399);
    this.markIndented(text, 86, 320.5001, 351);
    this.markIndented(text, 86, 327.5001, 339);
    this.markIndented(text, 86, 334.5001, 327);
    this.markIndented(text, 86, 342.5001, 315);
    this.markStartOfLine(text, 86, 353.5001, 291);
    this.markStartOfLine(text, 86, 357.5001, 279);
    this.markStartOfLine(text, 86, 362.5001, 267);
    this.markStartOfLine(text, 86, 370.5001, 231);
    this.markStartOfLine(text, 86, 374.5001, 207);
    this.markStartOfLine(text, 86, 375.5001, 183);
    this.markStartOfLine(text, 86, 372.5001, 171);
    this.mergeWithNext(text, 13, 125.1954, 147);
    this.changeTextFn(text, 85, 184.76399999999998, 423, (x) =>
      x.replace("LEVEL", "CREATURE"),
    );
    this.changeTextFn(text, 84, 503.41589999999997, 147, (x) =>
      x.replace("LEVEL", "CREATURE"),
    );
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
