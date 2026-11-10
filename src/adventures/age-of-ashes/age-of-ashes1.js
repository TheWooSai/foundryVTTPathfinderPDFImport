import { AgeOfAshesBase } from "./base.js";
import { AdventureImage, CaptionImage } from "../../core/images.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class AgeOfAshes1 extends AgeOfAshesBase {
  prefix = "age-of-ashes1";
  fullName = "Age of Ashes - Hellknight Hill";
  pages = [
    this.ChapterHeadingPageLayout(6),
    this.RightSingleColumnWithSidebar(7),
    this.LeftTwoColumn(8),
    this.RightTwoColumn(9),
    this.LeftTwoColumnWithMap(10, 327),
    this.RightTwoColumn(11),
    this.LeftTwoColumn(12),
    this.RightTwoColumn(13),
    this.ChapterHeadingPageLayout(14),
    this.RightSingleColumnWithSidebar(15),
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
    this.LeftTwoColumn(30),
    this.RightTwoColumn(31),
    this.ChapterHeadingPageLayout(32),
    this.RightSingleColumnWithSidebar(33),
    this.RightTwoColumn(35),
    this.LeftTwoColumn(36),
    this.RightTwoColumn(37),
    this.LeftTwoColumn(38),
    this.RightTwoColumn(39),
    this.LeftTwoColumn(40),
    this.RightTwoColumn(41),
    this.LeftTwoColumn(42),
    this.RightTwoColumn(43),
    this.LeftTwoColumn(44),
    this.RightTwoColumn(45),
    this.ChapterHeadingPageLayout(46),
    this.RightSingleColumnWithSidebar(47),
    this.LeftTwoColumn(48),
    this.RightTwoColumn(49),
    this.LeftTwoColumnWithMap(50, 327),
    this.RightTwoColumn(51),
    this.LeftTwoColumn(52),
    this.RightTwoColumn(53),
    this.LeftTwoColumn(54),
    this.RightTwoColumn(55),
    this.LeftTwoColumnWithMap(56, 327),
    this.RightTwoColumn(57),
    this.LeftTwoColumn(58),
    this.RightTwoColumn(59),
    this.LeftTwoColumn(60),
    this.RightTwoColumn(61),
    this.LeftTwoColumn(62),
    this.RightTwoColumn(63),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      canonical: {
        name: "aoa1/map1",
        priority: 0,
      },
      nameInfo: {
        x: 250.6006,
        y: 726.6831,
      },
      page: 2,
      width: 1261,
      height: 1637,
      imageLeft: 0,
      imageTop: 0,
      imageRight: 1261,
      imageBottom: 1637,
      imageRows: 47,
      imageCols: 35,
      gridType: "gridless",
    }),
    new ModuleScene({
      name: "map2",
      canonical: {
        name: "aoa1/map2",
        priority: 0,
      },
      nameInfo: {
        x: 99,
        y: 363,
      },
      nameFn: (name) => this.sentenceCase(name.substring(8).trim()),
      page: 10,
      width: 1261,
      height: 905,
      imageLeft: 52,
      imageTop: 92,
      imageRight: 1179,
      imageBottom: 775,
      imageRows: 17,
      imageCols: 28,
      journals: [
        {
          x: 850,
          y: 650,
          id: "MTA6OTk6MTgz",
        },
        {
          x: 850,
          y: 750,
          id: "MTE6Njg6MTU5",
        },
      ],
      tokens: [
        {
          id: "npc45",
          x: 800,
          y: 1800,
        },
        {
          id: "npc30",
          x: 900,
          y: 900,
        },
      ],
    }),
    new ModuleScene({
      name: "map3",
      canonical: {
        name: "aoa1/map3",
        priority: 0,
      },
      nameInfo: {
        x: 109.5,
        y: 39,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 16,
      width: 1261,
      height: 1637,
      imageLeft: 8,
      imageTop: 9,
      imageRight: 1249,
      imageBottom: 1632,
      imageRows: 51,
      imageCols: 39,
      detailsFile: "/aoa/maps/aoa1-map3.json",
      journals: [
        {
          x: 3850,
          y: 3850,
          id: "MTc6Njg6NTU1",
        },
        {
          x: 3550,
          y: 3850,
          id: "MTc6Mjk1OjEyMw",
        },
        {
          x: 3150,
          y: 5050,
          id: "MTg6OTk6NTU1",
        },
        {
          x: 2550,
          y: 5550,
          id: "MTk6Njg6NjI3",
        },
        {
          x: 2550,
          y: 4850,
          id: "MTk6Njg6MjMx",
        },
        {
          x: 2750,
          y: 4750,
          id: "MTk6Njg6OTk",
        },
        {
          x: 2250,
          y: 4950,
          id: "MjA6OTk6MzUx",
        },
        {
          x: 2150,
          y: 5350,
          id: "MjA6OTk6MTcx",
        },
        {
          x: 1750,
          y: 5800,
          id: "MjA6MzQxOjM1MQ",
        },
        {
          x: 1450,
          y: 5250,
          id: "MjM6Mjk1OjE1OQ",
        },
        {
          x: 1750,
          y: 5250,
          id: "MjE6Njg6Mzc1",
        },
        {
          x: 2650,
          y: 3750,
          id: "MjQ6OTk6Mzg3",
        },
        {
          x: 3150,
          y: 2450,
          id: "MjU6Mjk1OjYzOQ",
        },
        {
          x: 2750,
          y: 2850,
          id: "MjY6OTk6NDgz",
        },
        {
          x: 2750,
          y: 2450,
          id: "MjY6OTk6Mjc5",
        },
        {
          x: 2550,
          y: 2050,
          id: "MjY6MzI2OjIzMQ",
        },
        {
          x: 2150,
          y: 2950,
          id: "Mjc6Njg6MjU1",
        },
        {
          x: 2350,
          y: 2550,
          id: "Mjc6Mjk1OjQxMQ",
        },
        {
          x: 1750,
          y: 2550,
          id: "Mjc6Mjk1OjIxOQ",
        },
        {
          x: 2050,
          y: 2150,
          id: "Mjg6OTk6NDgz",
        },
        {
          x: 1950,
          y: 1850,
          id: "Mjg6OTk6Mjc5",
        },
        {
          x: 4450,
          y: 2600,
          id: "Mjg6MzI2OjQzNQ",
        },
      ],
      tokens: [
        {
          id: "npc5",
          x: 4400,
          y: 2400,
        },
        {
          id: "npc35",
          x: 3800,
          y: 3700,
        },
        {
          id: "npc35",
          x: 3900,
          y: 3900,
        },
        {
          id: "npc35",
          x: 3700,
          y: 3900,
        },
        {
          id: "npc22",
          x: 2700,
          y: 3700,
        },
        {
          id: "npc6",
          x: 4400,
          y: 2300,
        },
        {
          id: "npc42",
          x: 1600,
          y: 5800,
        },
        {
          id: "npc38",
          x: 1600,
          y: 5100,
        },
        {
          id: "npc38",
          x: 1800,
          y: 5100,
        },
        {
          id: "npc4",
          x: 1600,
          y: 5200,
        },
        {
          id: "npc3",
          x: 3200,
          y: 5100,
        },
        {
          id: "npc33",
          x: 2e3,
          y: 2800,
        },
        {
          id: "npc33",
          x: 2200,
          y: 2900,
        },
        {
          id: "npc33",
          x: 2e3,
          y: 3e3,
        },
        {
          id: "npc32",
          x: 1400,
          y: 2400,
        },
        {
          id: "npc41",
          x: 2200,
          y: 1700,
        },
        {
          id: "npc41",
          x: 2300,
          y: 1700,
        },
        {
          id: "npc41",
          x: 2300,
          y: 1900,
        },
        {
          id: "npc41",
          x: 2200,
          y: 1900,
        },
        {
          id: "npc46",
          x: 2600,
          y: 2e3,
        },
        {
          id: "npc23",
          x: 2900,
          y: 1800,
        },
        {
          id: "npc23",
          x: 3100,
          y: 1800,
        },
      ],
    }),
    new ModuleScene({
      name: "map4",
      canonical: {
        name: "aoa1/map4",
        priority: 0,
      },
      nameInfo: {
        x: 100,
        y: 42.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 34,
      width: 1261,
      height: 1636,
      imageLeft: 19,
      imageTop: 164,
      imageRight: 1172,
      imageBottom: 1322,
      imageRows: 34,
      imageCols: 34,
      detailsFile: "/aoa/maps/aoa1-map4.json",
      journals: [
        {
          x: 2950,
          y: 3150,
          id: "MzU6Mjk1OjMwMw",
        },
        {
          x: 2950,
          y: 3750,
          id: "MzU6Mjk1OjMwMw",
        },
        {
          x: 2950,
          y: 1850,
          id: "NDE6Njg6NjM5",
        },
        {
          x: 1550,
          y: 4450,
          id: "NDE6Njg6OTk",
        },
        {
          x: 3950,
          y: 4750,
          id: "NDQ6MzI2OjI3OQ",
        },
        {
          x: 4150,
          y: 4450,
          id: "NDU6Mjk1OjYzOQ",
        },
        {
          x: 1550,
          y: 3450,
          id: "MzM6Njg6NTMx",
        },
        {
          x: 3150,
          y: 3450,
          id: "MzU6Njg6Njk5",
        },
        {
          x: 3650,
          y: 3750,
          id: "MzY6OTk6MTM1",
        },
        {
          x: 3650,
          y: 3150,
          id: "MzY6MzI2OjMwMw",
        },
        {
          x: 1650,
          y: 2350,
          id: "Mzc6Mjk1OjY5OQ",
        },
        {
          x: 2100,
          y: 2450,
          id: "Mzg6MzYwOjM2Mw",
        },
        {
          x: 1850,
          y: 1850,
          id: "Mzk6Mjk1OjQ5NQ",
        },
        {
          x: 2550,
          y: 2250,
          id: "NDA6MzI2OjY2Mw",
        },
        {
          x: 2550,
          y: 1850,
          id: "NDA6MzI2OjM2Mw",
        },
        {
          x: 2050,
          y: 4450,
          id: "NDI6OTk6MTk1",
        },
        {
          x: 2450,
          y: 5e3,
          id: "NDM6Njg6MjY3",
        },
        {
          x: 2650,
          y: 4350,
          id: "NDQ6OTk6Njk5",
        },
      ],
      tokens: [
        {
          id: "npc21",
          x: 2e3,
          y: 3300,
        },
        {
          id: "npc21",
          x: 1700,
          y: 3500,
        },
        {
          id: "npc29",
          x: 3300,
          y: 3350,
          elite: true,
        },
        {
          id: "npc7",
          x: 3700,
          y: 3200,
        },
        {
          id: "npc8",
          x: 3700,
          y: 3100,
        },
        {
          id: "npc31",
          x: 3700,
          y: 3600,
        },
        {
          id: "npc11",
          x: 2600,
          y: 4600,
        },
        {
          id: "npc41",
          x: 3200,
          y: 4600,
        },
        {
          id: "npc41",
          x: 2200,
          y: 4600,
        },
        {
          id: "npc41",
          x: 3e3,
          y: 4600,
        },
        {
          id: "npc41",
          x: 2400,
          y: 4600,
        },
        {
          id: "npc41",
          x: 2800,
          y: 4600,
        },
        {
          id: "npc47",
          x: 2600,
          y: 4200,
        },
        {
          id: "npc47",
          x: 2800,
          y: 4400,
        },
        {
          id: "npc9",
          x: 2e3,
          y: 2300,
        },
        {
          id: "npc10",
          x: 2100,
          y: 2300,
        },
        {
          id: "npc10",
          x: 2e3,
          y: 2200,
        },
        {
          id: "npc39",
          x: 1500,
          y: 2400,
        },
        {
          id: "npc39",
          x: 1700,
          y: 2300,
        },
        {
          id: "npc27",
          x: 1900,
          y: 1700,
        },
        {
          id: "npc36",
          x: 2500,
          y: 1900,
        },
        {
          id: "npc36",
          x: 2600,
          y: 1800,
        },
        {
          id: "npc10",
          x: 2400,
          y: 2300,
        },
        {
          id: "npc10",
          x: 2400,
          y: 2200,
        },
        {
          id: "npc10",
          x: 2500,
          y: 2300,
        },
      ],
    }),
    new ModuleScene({
      name: "map5",
      canonical: {
        name: "aoa1/map5",
        priority: 0,
      },
      nameInfo: {
        x: 294.75,
        y: 183,
        page: 49,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 50,
      width: 1259,
      height: 905,
      imageLeft: 29,
      imageTop: 37,
      imageRight: 1243,
      imageBottom: 894,
      imageRows: 24,
      imageCols: 34,
      detailsFile: "/aoa/maps/aoa1-map5.json",
      journals: [
        {
          x: 1150,
          y: 1950,
          id: "NTE6Mjk1OjYwMw",
        },
        {
          x: 1750,
          y: 2150,
          id: "NTE6Mjk1OjQ0Nw",
        },
        {
          x: 2400,
          y: 1400,
          id: "NTI6MzQ3OjU3OQ",
        },
        {
          x: 2350,
          y: 1950,
          id: "NTI6MzQ1OjM2Mw",
        },
        {
          x: 2550,
          y: 2450,
          id: "NTM6Njg6MTU5",
        },
        {
          x: 3050,
          y: 1850,
          id: "NTM6Mjk1OjYxNQ",
        },
        {
          x: 3250,
          y: 1250,
          id: "NTM6Mjk1OjMzOQ",
        },
        {
          x: 3750,
          y: 2050,
          id: "NTQ6MzI2OjY2Mw",
        },
      ],
      tokens: [
        {
          id: "npc28",
          x: 1700,
          y: 2e3,
        },
        {
          id: "npc28",
          x: 1800,
          y: 1800,
        },
        {
          id: "npc28",
          x: 1700,
          y: 1800,
        },
        {
          id: "npc13",
          x: 2300,
          y: 1800,
        },
        {
          id: "npc25",
          x: 3200,
          y: 1100,
        },
        {
          id: "npc43",
          x: 3e3,
          y: 1e3,
        },
        {
          id: "npc28",
          x: 2300,
          y: 1300,
        },
        {
          id: "npc28",
          x: 2500,
          y: 2500,
        },
        {
          id: "npc14",
          x: 3800,
          y: 2100,
        },
        {
          id: "npc40",
          x: 3600,
          y: 2100,
        },
        {
          id: "npc41",
          x: 3600,
          y: 1800,
        },
      ],
    }),
    new ModuleScene({
      name: "map6",
      canonical: {
        name: "aoa1/map6",
        priority: 0,
      },
      nameInfo: {
        x: 99,
        y: 363,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 56,
      width: 1261,
      height: 905,
      imageLeft: 29.5,
      imageTop: 141,
      imageRight: 1202,
      imageBottom: 765,
      imageRows: 20,
      imageCols: 41,
      detailsFile: "/aoa/maps/aoa1-map6.json",
      journals: [
        {
          x: 2050,
          y: 2350,
          id: "NTY6MzI2OjMyNw",
        },
        {
          x: 2950,
          y: 2050,
          id: "NTc6Njg6NDQ3",
        },
        {
          x: 3450,
          y: 1450,
          id: "NTc6Mjk1OjE3MQ",
        },
        {
          x: 4050,
          y: 1650,
          id: "NTk6Njg6NjAz",
        },
        {
          x: 5250,
          y: 1450,
          id: "NTk6Njg6MzM5",
        },
        {
          x: 4450,
          y: 1950,
          id: "NjA6OTk6Njk5",
        },
        {
          x: 3750,
          y: 2950,
          id: "NjE6Njg6MjU1",
        },
        {
          x: 3700,
          y: 2200,
          id: "NjI6MzI2OjMwMw",
        },
      ],
      tokens: [
        {
          id: "npc37",
          x: 1800,
          y: 1900,
        },
        {
          id: "npc37",
          x: 2e3,
          y: 1700,
        },
        {
          id: "npc37",
          x: 2300,
          y: 1700,
        },
        {
          id: "npc37",
          x: 2300,
          y: 1500,
        },
        {
          id: "npc37",
          x: 2200,
          y: 1900,
        },
        {
          id: "npc37",
          x: 2500,
          y: 1700,
        },
        {
          id: "npc18",
          x: 2900,
          y: 1900,
        },
        {
          id: "npc15",
          x: 3400,
          y: 1500,
        },
        {
          id: "npc34",
          x: 4900,
          y: 1300,
        },
        {
          id: "npc16",
          x: 4300,
          y: 2100,
        },
        {
          id: "npc10",
          x: 4500,
          y: 2100,
        },
        {
          id: "npc10",
          x: 4500,
          y: 2e3,
        },
        {
          id: "npc36",
          x: 4400,
          y: 2e3,
        },
        {
          id: "npc36",
          x: 4500,
          y: 1900,
        },
        {
          id: "npc20",
          x: 3600,
          y: 2200,
        },
      ],
    }),
  ];
  journals = [
    new AdventureImage({
      name: "journal1",
      page: 1,
      width: 1258,
      height: 715,
    }),
    new AdventureImage({
      name: "journal2",
      page: 2,
      width: 577,
      height: 636,
    }),
    new AdventureImage({
      name: "journal3",
      page: 3,
      width: 426,
      height: 669,
    }),
    new AdventureImage({
      name: "journal4",
      page: 4,
      width: 1257,
      height: 1636,
    }),
    new AdventureImage({
      name: "journal5",
      page: 5,
      width: 688,
      height: 884,
    }),
    new AdventureImage({
      name: "journal6",
      page: 6,
      width: 1259,
      height: 830,
    }),
    new AdventureImage({
      name: "journal7",
      page: 14,
      width: 1262,
      height: 830,
    }),
    new CaptionImage({
      name: "journal8",
      page: 20,
      width: 253,
      height: 727,
    }),
    new AdventureImage({
      name: "journal9",
      page: 32,
      width: 1259,
      height: 830,
    }),
    new AdventureImage({
      name: "journal10",
      page: 36,
      width: 434,
      height: 561,
    }),
    new AdventureImage({
      name: "journal11",
      page: 46,
      width: 1259,
      height: 830,
    }),
    new CaptionImage({
      name: "journal12",
      page: 67,
      width: 749,
      height: 1055,
    }),
    new AdventureImage({
      name: "journal13",
      page: 74,
      width: 868,
      height: 949,
    }),
    new AdventureImage({
      name: "journal14",
      page: 76,
      width: 440,
      height: 440,
    }),
    new AdventureImage({
      name: "journal15",
      page: 79,
      width: 389,
      height: 487,
    }),
    new AdventureImage({
      name: "journal16",
      page: 79,
      width: 526,
      height: 601,
    }),
    new AdventureImage({
      name: "journal17",
      page: 64,
      width: 1261,
      height: 830,
    }),
    new AdventureImage({
      name: "journal18",
      page: 72,
      width: 1262,
      height: 830,
    }),
    new AdventureImage({
      name: "journal19",
      page: 1,
      width: 1258,
      height: 727,
    }),
    new AdventureImage({
      name: "journal20",
      page: 1,
      width: 1183,
      height: 1637,
    }),
    new AdventureImage({
      name: "journal21",
      page: 83,
      width: 660,
      height: 1033,
    }),
    new AdventureImage({
      name: "journal22",
      page: 85,
      width: 628,
      height: 864,
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 9,
        x: 227.6768,
        y: 449.6387,
      },
      page: 9,
      width: 442,
      height: 505,
      tokenX: 73,
      tokenY: 122,
      tokenSize: 645,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 13,
        x: 243.2606,
        y: 449.6387,
      },
      page: 13,
      width: 442,
      height: 505,
      tokenX: 89,
      tokenY: 113,
      tokenSize: 645,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.4htFfofrXLkbWMRg",
      name: {
        page: 18,
        x: 138.9987,
        y: 118.8905,
      },
      page: 18,
      width: 798,
      height: 998,
      tokenX: -214,
      tokenY: 49,
      tokenSize: 466,
      forIds: ["MTg6MzI2OjIxOQ"],
    }),
    new ModuleNpc({
      id: "npc4",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.YV3wA2Kgjp74l7YJ",
      page: 22,
      width: 701,
      height: 1173,
      tokenX: -136,
      tokenY: -146,
      tokenSize: 249,
      forIds: ["MjE6Mjk1OjMwMw"],
    }),
    new ModuleNpc({
      id: "npc5",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.aaDiR0EIWRQx8wdy",
      page: 29,
      width: 707,
      height: 974,
      tokenX: -167,
      tokenY: -34,
      tokenSize: 414,
      forIds: ["Mjk6Njg6MjY3"],
    }),
    new ModuleNpc({
      id: "npc6",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.fLLKuOXwPq1Iq0U4",
      name: {
        page: 31,
        x: 341.8646,
        y: 153.1728,
      },
      page: 31,
      width: 673,
      height: 927,
      tokenX: -72,
      tokenY: 10,
      tokenSize: 479,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc7",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.QaldZV2p9RpMXzzn",
      name: {
        page: 37,
        x: 293.5492,
        y: 103.0592,
        substring: {
          start: 0,
          end: 3,
        },
      },
      page: 37,
      width: 928,
      height: 782,
      tokenX: -16,
      tokenY: 82,
      tokenSize: 508,
      forIds: ["Mzc6Njg6Mjc5"],
    }),
    new ModuleNpc({
      id: "npc8",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.CJuHwIRCAgTB1SEl",
      name: {
        page: 37,
        x: 293.5492,
        y: 103.0592,
        substring: {
          start: 8,
          end: 12,
        },
      },
      page: 37,
      width: 928,
      height: 782,
      tokenX: -501,
      tokenY: 60,
      tokenSize: 508,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc9",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.EH84J9FedbK3ax50",
      name: {
        page: 38,
        x: 175.5986,
        y: 100.6728,
      },
      page: 38,
      width: 846,
      height: 1023,
      tokenX: -174,
      tokenY: -21,
      tokenSize: 435,
      forIds: ["Mzk6Njg6MzUx"],
    }),
    new ModuleNpc({
      id: "npc10",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.yLhO5vUrPQF42Lh8",
      page: 41,
      width: 878,
      height: 1097,
      tokenX: -201,
      tokenY: 5,
      tokenSize: 397,
      forIds: ["Mzk6Njg6Mjkx", "NDA6MzI2OjQxMQ", "NjE6Njg6MzUx"],
    }),
    new ModuleNpc({
      id: "npc11",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.Aii18rhNPMLW4Pxh",
      page: 43,
      width: 788,
      height: 1227,
      tokenX: -292,
      tokenY: -167,
      tokenSize: 331,
      forIds: ["NDI6MzI2OjM1MQ"],
    }),
    new ModuleNpc({
      id: "npc12",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 49,
        x: 255.2928,
        y: 449.6729,
      },
      page: 49,
      width: 442,
      height: 505,
      tokenX: 39,
      tokenY: 107,
      tokenSize: 561,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc13",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.L4K4V09tQVXj7ZiI",
      page: 52,
      width: 818,
      height: 1144,
      tokenX: -235,
      tokenY: -10,
      tokenSize: 416,
      forIds: ["NTM6Njg6Njk5"],
    }),
    new ModuleNpc({
      id: "npc14",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.UD7EwTQG2Sbl4d8R",
      page: 54,
      width: 442,
      height: 725,
      tokenX: 63,
      tokenY: 45,
      tokenSize: 613,
      forIds: ["NTU6Njg6Njk5"],
    }),
    new ModuleNpc({
      id: "npc15",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.x4mlZseBP5bWcy4H",
      name: {
        page: 59,
        x: 67.5599,
        y: 663,
      },
      page: 58,
      width: 884,
      height: 1211,
      tokenX: -142,
      tokenY: -129,
      tokenSize: 455,
      forIds: ["NTk6Njg6NjYz"],
    }),
    new ModuleNpc({
      id: "npc16",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.SVLUUPOXDINbKyFL",
      page: 61,
      width: 831,
      height: 1065,
      tokenX: -266,
      tokenY: 46,
      tokenSize: 365,
      forIds: ["NjA6MzI2OjEyMw"],
    }),
    new ModuleNpc({
      id: "npc17",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 71,
        x: 229.0432,
        y: 454.8905,
      },
      page: 71,
      width: 496,
      height: 496,
      tokenX: 59,
      tokenY: 102,
      tokenSize: 608,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc18",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.r02b4f1XNq7OihhD",
      page: 81,
      width: 786,
      height: 1084,
      tokenX: -272,
      tokenY: 47,
      tokenSize: 384,
      forIds: ["NTc6Mjk1OjI1NQ"],
    }),
    new ModuleNpc({
      id: "npc19",
      actorUuid: "Compendium.pf2e.lost-omens-bestiary.Actor.aXXvrcggR8EQJOdm",
      page: 86,
      width: 715,
      height: 1175,
      tokenX: -202,
      tokenY: -38,
      tokenSize: 307,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc20",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.MOyYEls8wNGHoe8F",
      page: 88,
      width: 697,
      height: 1124,
      tokenX: -153,
      tokenY: 29,
      tokenSize: 396,
      forIds: ["NjM6Njg6NTkx"],
    }),
    new ModuleNpc({
      id: "npc21",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.rd8Scu1YBSyKFwnk",
      page: 89,
      width: 572,
      height: 908,
      tokenX: -187,
      tokenY: 94,
      tokenSize: 572,
      forIds: ["MzM6Njg6OTk"],
    }),
    new ModuleNpc({
      id: "npc22",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.H0pP1GqpMfX1WEiQ",
      page: 90,
      width: 999,
      height: 670,
      tokenX: -472,
      tokenY: -15,
      tokenSize: 607,
      forIds: ["MjU6Njg6MzYz"],
    }),
    new ModuleNpc({
      id: "npc23",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.xXtGS9uBa9z43X7y",
      page: 91,
      width: 953,
      height: 758,
      tokenX: 44,
      tokenY: -43,
      tokenSize: 533,
      forIds: ["MjU6Mjk1Ojk5"],
    }),
    new ModuleNpc({
      id: "npc24",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.KROWh0CteDFFGsih",
      page: 92,
      width: 652,
      height: 1071,
      tokenX: -79,
      tokenY: 74,
      tokenSize: 399,
      forIds: ["NDM6Mjk1OjY5OQ"],
    }),
    new ModuleNpc({
      id: "npc25",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.Oqj8XIWBb29NZ8QX",
      page: 93,
      width: 917,
      height: 859,
      tokenX: -69,
      tokenY: -213,
      tokenSize: 441,
      forIds: ["NTQ6OTk6Mjc5"],
    }),
    new ModuleNpc({
      id: "npc27",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.6K4RWus85o8iqy0t",
      label: "GB",
      forIds: ["NDA6OTk6NTU1"],
    }),
    new ModuleNpc({
      id: "npc28",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.4vEQ8zRXC51Qo4Mv",
      label: "BBM",
      forIds: ["NTI6OTk6NjYz", "NTI6MzI5OjQxMQ", "NTM6Mjk1OjY2Mw"],
    }),
    new ModuleNpc({
      id: "npc29",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.RizAUQHtPy0YRUyt",
      label: "SD(E",
      forIds: ["MzU6Njg6OTk"],
    }),
    new ModuleNpc({
      id: "npc30",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.k9fM0vufbdsDPQul",
      label: "FM",
      forIds: ["MTE6Mjk1OjM2Mw"],
    }),
    new ModuleNpc({
      id: "npc31",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.TZcDdN5o7s4alZNE",
      label: "GC",
      forIds: ["MzY6MzI2OjQ3MQ"],
    }),
    new ModuleNpc({
      id: "npc32",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.xnpuGO8jEMba9wy5",
      label: "GB",
      forIds: ["Mjg6OTk6NjI3"],
    }),
    new ModuleNpc({
      id: "npc33",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.iIJPJcDT8wlJ8z5M",
      label: "GR",
      forIds: ["Mjc6Mjk1OjUwNw"],
    }),
    new ModuleNpc({
      id: "npc34",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.oHUIqVPBpHAbN3qO",
      label: "GM",
      forIds: ["NTk6Mjk1OjMzOQ"],
    }),
    new ModuleNpc({
      id: "npc35",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.yclRuradTmZbdKFQ",
      label: "GD",
      forIds: ["MTc6Mjk1OjM2Mw"],
    }),
    new ModuleNpc({
      id: "npc36",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.s2TkernjfKVEhlJY",
      label: "BS",
      forIds: ["NDA6MzI2Ojk5", "NjE6Njg6MzAz"],
    }),
    new ModuleNpc({
      id: "npc37",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.A4VgQIHsqJKssQOM",
      label: "HS",
      forIds: ["NTc6Njg6NjE1"],
    }),
    new ModuleNpc({
      id: "npc38",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.yPYQC2bfOYmqcfIB",
      label: "I",
      forIds: ["MjE6Mjk1OjM1MQ"],
    }),
    new ModuleNpc({
      id: "npc39",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.EH84J9FedbK3ax50",
      label: "BW",
      forIds: ["Mzg6OTk6Njk5"],
    }),
    new ModuleNpc({
      id: "npc40",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.FH58AcRBZIfrHKvv",
      label: "SC",
      forIds: ["NTU6Njg6NjUx"],
    }),
    new ModuleNpc({
      id: "npc41",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.trchDxbDR2TiPMxT",
      label: "SG",
      forIds: ["NTU6Njg6NjAz", "Mjg6MzI2OjYwMw", "NDM6Njg6NTc5"],
    }),
    new ModuleNpc({
      id: "npc42",
      actorUuid: "Compendium.pf2e.hazards.Actor.vlMuFskctUvjJe8X",
      label: "SL",
      forIds: ["MjE6Njg6NjAz"],
    }),
    new ModuleNpc({
      id: "npc43",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.NcYbJS5PWBGdNDqh",
      label: "SS",
      forIds: ["NTQ6OTk6MjMx", "MTk6Njg6NDEx"],
    }),
    new ModuleNpc({
      id: "npc44",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.SUQJPKt8N7rxx7Q1",
      label: "SD",
      forIds: ["NDg6MzI2OjE1OQ"],
    }),
    new ModuleNpc({
      id: "npc45",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.u9QIJIpkSgW5VRIG",
      label: "THF",
      forIds: ["MTE6Mjk1OjI0Mw"],
    }),
    new ModuleNpc({
      id: "npc46",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.x7Aa4Tvr9eBaHryF",
      label: "W",
      forIds: ["Mjc6Njg6NjAz"],
    }),
    new ModuleNpc({
      id: "npc47",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.DBTbqI9QQRtlJwWh",
      label: "W",
      forIds: ["NDQ6OTk6MzUx"],
    }),
  ];
  journalPages = [
    {
      name: "Chapter 1",
      pages: [
        {
          id: "NjoyMDk6MzU3",
        },
        {
          id: "NzozNzE6Njk5",
        },
        {
          id: "ODo5OTo2OTk",
        },
        {
          id: "ODo5OTozMjc",
        },
        {
          id: "ODozMjY6MTk1",
        },
        {
          id: "OTo2ODo0OTU",
        },
        {
          id: "MTA6OTk6MTgz",
        },
        {
          id: "MTE6Njg6MTU5",
        },
        {
          id: "MTM6Njg6MjE5",
        },
      ],
    },
    {
      name: "Chapter 2",
      pages: [
        {
          id: "MTQ6MjA5OjM1Nw",
        },
        {
          id: "MTU6MzcxOjY5OQ",
        },
        {
          id: "MTc6Njg6NTU1",
        },
        {
          id: "MTc6Mjk1OjEyMw",
        },
        {
          id: "MTg6OTk6NTU1",
        },
        {
          id: "MTk6Njg6NjI3",
        },
        {
          id: "MTk6Njg6MjMx",
        },
        {
          id: "MTk6MzA0OjY4Nw",
        },
        {
          id: "MTk6Njg6OTk",
        },
        {
          id: "MjA6OTk6MzUx",
        },
        {
          id: "MjA6OTk6MTcx",
        },
        {
          id: "MjA6MzQxOjM1MQ",
        },
        {
          id: "MjE6Njg6Mzc1",
        },
        {
          id: "MjQ6MTA4OjY4Nw",
        },
        {
          id: "MjM6Mjk1OjE1OQ",
        },
        {
          id: "MjQ6OTk6Mzg3",
        },
        {
          id: "MjU6Mjk1OjYzOQ",
        },
        {
          id: "MjY6OTk6NDgz",
        },
        {
          id: "MjY6OTk6Mjc5",
        },
        {
          id: "MjY6MzI2OjIzMQ",
        },
        {
          id: "Mjc6MzA0OjY4Nw",
        },
        {
          id: "Mjc6Njg6MjU1",
        },
        {
          id: "Mjc6Mjk1OjQxMQ",
        },
        {
          id: "Mjc6Mjk1OjIxOQ",
        },
        {
          id: "Mjg6OTk6NDgz",
        },
        {
          id: "Mjg6OTk6Mjc5",
        },
        {
          id: "Mjg6MzI2OjQzNQ",
        },
        {
          id: "Mjk6Mjk1OjU0Mw",
        },
        {
          id: "MzA6MzI2OjQzNQ",
        },
      ],
    },
    {
      name: "Chapter 3",
      pages: [
        {
          id: "MzI6MjA5OjM1Nw",
        },
        {
          id: "MzM6MzcxOjY5OQ",
        },
        {
          id: "MzM6Njg6NjE1",
        },
        {
          id: "MzM6Njg6NTMx",
        },
        {
          id: "MzU6MzA0OjY4Nw",
        },
        {
          id: "MzU6Njg6Njk5",
        },
        {
          id: "MzY6MTA4OjY4Nw",
        },
        {
          id: "MzU6Mjk1OjMwMw",
        },
        {
          id: "MzY6OTk6MTM1",
        },
        {
          id: "MzY6MzI2OjMwMw",
        },
        {
          id: "Mzc6Mjk1OjY5OQ",
        },
        {
          id: "Mzg6MzYwOjM2Mw",
        },
        {
          id: "Mzk6Mjk1OjQ5NQ",
        },
        {
          id: "NDA6MzI2OjY2Mw",
        },
        {
          id: "NDA6MzI2OjM2Mw",
        },
        {
          id: "NDE6Njg6NjM5",
        },
        {
          id: "NDI6MTA4OjY4Nw",
        },
        {
          id: "NDE6Njg6OTk",
        },
        {
          id: "NDI6OTk6MTk1",
        },
        {
          id: "NDM6Njg6MjY3",
        },
        {
          id: "NDQ6OTk6Njk5",
        },
        {
          id: "NDQ6MzI2OjI3OQ",
        },
        {
          id: "NDU6Mjk1OjYzOQ",
        },
      ],
    },
    {
      name: "Chapter 4",
      pages: [
        {
          id: "NDY6MjA5OjM1Nw",
        },
        {
          id: "NDc6MzcxOjY5OQ",
        },
        {
          id: "NDY6OTk6OTk",
        },
        {
          id: "NDc6Njg6NDgz",
        },
        {
          id: "NDg6OTk6NDU5",
        },
        {
          id: "NDg6MzI2OjIxOQ",
        },
        {
          id: "NDk6Njg6MjE5",
        },
        {
          id: "NDk6Mjk1OjE4Mw",
        },
        {
          id: "NTA6MzI2OjIxOQ",
        },
        {
          id: "NTE6Mjk1OjYwMw",
        },
        {
          id: "NTE6Mjk1OjQ0Nw",
        },
        {
          id: "NTI6MzQ3OjU3OQ",
        },
        {
          id: "NTI6MzQ1OjM2Mw",
        },
        {
          id: "NTM6Njg6MTU5",
        },
        {
          id: "NTM6Mjk1OjYxNQ",
        },
        {
          id: "NTM6Mjk1OjMzOQ",
        },
        {
          id: "NTQ6MzI2OjY2Mw",
        },
        {
          id: "NTY6OTk6MzI3",
        },
        {
          id: "NTY6MzI2OjMyNw",
        },
        {
          id: "NTc6Njg6NDQ3",
        },
        {
          id: "NTc6Mjk1OjE3MQ",
        },
        {
          id: "NTk6Njg6NjAz",
        },
        {
          id: "NTk6MzA0OjY4Nw",
        },
        {
          id: "NTk6Njg6MzM5",
        },
        {
          id: "NjA6OTk6Njk5",
        },
        {
          id: "NjE6Njg6MjU1",
        },
        {
          id: "NjI6MzI2OjMwMw",
        },
        {
          id: "NjM6Mjk1OjM3NQ",
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
        {
          id: "journal13",
        },
        {
          id: "journal14",
        },
        {
          id: "journal15",
        },
        {
          id: "journal16",
        },
        {
          id: "journal17",
        },
        {
          id: "journal18",
        },
        {
          id: "journal19",
        },
        {
          id: "journal20",
        },
        {
          id: "journal21",
        },
        {
          id: "journal22",
        },
      ],
    },
  ];
  combines = [];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "HELLKNIGHT HILL" &&
        t.fontId === "RomicStd-Bold:53.3514",
    );
  }
  finalize(moduleData) {}
}
