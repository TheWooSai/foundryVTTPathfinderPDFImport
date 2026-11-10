import { AgeOfAshesBase } from "./base.js";
import { AdventureImage, CaptionImage } from "../../core/images.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class AgeOfAshes5 extends AgeOfAshesBase {
  prefix = "age-of-ashes5";
  fullName = "Age of Ashes - Against the Scarlet Triad";
  pages = [
    this.ChapterHeadingPageLayout(6),
    this.RightSingleColumnWithSidebar(7),
    this.LeftTwoColumnWithMap(8, 327),
    this.RightTwoColumn(9),
    this.LeftTwoColumn(10),
    this.RightTwoColumn(11),
    this.LeftTwoColumnWithMap(12, 327),
    this.RightTwoColumn(13),
    this.LeftTwoColumn(14),
    this.RightTwoColumn(15),
    this.LeftTwoColumn(16),
    this.RightTwoColumn(17),
    this.ChapterHeadingPageLayout(18),
    this.RightSingleColumnWithSidebar(19),
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
    this.LeftTwoColumnWithMap(42, 430),
    this.RightTwoColumn(43),
    this.LeftTwoColumn(44),
    this.RightTwoColumn(45),
    this.LeftTwoColumn(46),
    this.RightTwoColumnWithRightCutout(47, 500),
    this.LeftTwoColumn(48),
    this.RightTwoColumn(49),
    this.LeftTwoColumn(50),
    this.RightTwoColumn(51),
    this.ChapterHeadingPageLayout(52),
    this.RightSingleColumnWithSidebar(53),
    this.LeftTwoColumn(54),
    this.RightTwoColumn(55),
    this.LeftTwoColumn(56),
    this.RightTwoColumn(57),
    this.LeftTwoColumn(58),
    this.RightTwoColumn(59),
    this.LeftTwoColumn(60),
    this.RightTwoColumn(61),
    this.LeftTwoColumn(62),
    this.RightTwoColumn(63),
    this.LeftTwoColumn(64),
    this.RightTwoColumn(65),
    this.LeftSingleColumnWithSidebar(84),
    this.RightSingleColumnWithSidebar(85),
    this.LeftSingleColumnWithSidebar(86),
    this.RightSingleColumnWithSidebar(87),
    this.LeftSingleColumnWithSidebar(88),
    this.RightSingleColumnWithSidebar(89),
    this.LeftSingleColumnWithSidebar(90),
    this.RightSingleColumnWithSidebar(91),
    this.LeftSingleColumnWithSidebar(92),
    this.RightSingleColumnWithSidebar(93),
    this.ChapterHeadingPageLayout(94),
    this.RightTwoColumn(95),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      canonical: {
        name: "aoa5/map1",
        priority: 0,
      },
      nameInfo: {
        x: 23.31,
        y: 726.6831,
      },
      page: 2,
      width: 1262,
      height: 1637,
      gridType: "gridless",
      globalLight: true,
      imageLeft: 0,
      imageTop: 0,
      imageRight: 1e3,
      imageBottom: 1e3,
      imageRows: 10,
      imageCols: 10,
    }),
    new ModuleScene({
      name: "map2",
      canonical: {
        name: "aoa5/map2",
        priority: 0,
      },
      nameInfo: {
        x: 30,
        y: 756.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 8,
      width: 1259,
      height: 905,
      imageLeft: 82,
      imageRight: 1118,
      imageCols: 26,
      imageTop: 89,
      imageBottom: 808,
      imageRows: 18,
      globalLight: true,
      detailsFile: "/aoa/maps/aoa5-map2.json",
      journals: [
        {
          x: 2150,
          y: 1450,
          id: "ODo5OToxMzU",
        },
        {
          x: 3450,
          y: 950,
          id: "OTo2ODo2NTE",
        },
        {
          x: 1450,
          y: 2250,
          id: "OToyOTU6NDU5",
        },
        {
          x: 2250,
          y: 2150,
          id: "OToyOTU6MzYz",
        },
        {
          x: 2850,
          y: 2150,
          id: "OToyOTU6MTcx",
        },
        {
          x: 950,
          y: 950,
          id: "Nzo2ODozNzU",
        },
      ],
      tokens: [
        {
          id: "npc38",
          x: 1700,
          y: 1e3,
          elite: true,
        },
        {
          id: "npc38",
          x: 2400,
          y: 1e3,
          elite: true,
        },
        {
          id: "npc38",
          x: 2400,
          y: 1700,
          elite: true,
        },
        {
          id: "npc38",
          x: 1700,
          y: 1700,
          elite: true,
        },
        {
          id: "npc49",
          x: 3e3,
          y: 2300,
        },
        {
          id: "npc39",
          x: 3500,
          y: 800,
        },
      ],
    }),
    new ModuleScene({
      name: "map3",
      canonical: {
        name: "aoa5/map3",
        priority: 0,
      },
      nameInfo: {
        x: 48,
        y: 747,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 12,
      width: 1259,
      height: 905,
      gridType: "gridless",
      globalLight: true,
      imageLeft: 0,
      imageTop: 0,
      imageRight: 1259,
      imageBottom: 1259,
      imageRows: 10,
      imageCols: 10,
      detailsFile: "/aoa/maps/aoa5-map3.json",
    }),
    new ModuleScene({
      name: "map4",
      canonical: {
        name: "aoa5/map4",
        priority: 0,
      },
      nameInfo: {
        x: 209,
        y: 586.6681,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 25,
      width: 339,
      height: 680,
      globalLight: true,
      imageLeft: 31,
      imageRight: 315,
      imageCols: 8,
      imageTop: 27,
      imageBottom: 667,
      imageRows: 18,
      detailsFile: "/aoa/maps/aoa5-map4.json",
    }),
    new ModuleScene({
      name: "map5",
      canonical: {
        name: "aoa5/map5",
        priority: 0,
      },
      nameInfo: {
        x: 247.25,
        y: 612.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 26,
      width: 326,
      height: 732,
      globalLight: true,
      imageLeft: 38,
      imageRight: 288,
      imageCols: 7,
      imageTop: 51,
      imageBottom: 658,
      imageRows: 17,
      detailsFile: "/aoa/maps/aoa5-map5.json",
    }),
    new ModuleScene({
      name: "map6",
      canonical: {
        name: "aoa5/map6",
        priority: 0,
      },
      nameInfo: {
        x: 25,
        y: 758.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 42,
      width: 1121,
      height: 700,
      globalLight: true,
      imageLeft: 19,
      imageRight: 1087,
      imageCols: 30,
      imageTop: 5,
      imageBottom: 682,
      imageRows: 19,
      detailsFile: "/aoa/maps/aoa5-map6.json",
    }),
    new ModuleScene({
      name: "map7",
      canonical: {
        name: "aoa5/map7",
        priority: 0,
      },
      nameInfo: {
        x: 295.43,
        y: 696.9625,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 45,
      width: 453,
      height: 729,
      globalLight: true,
      imageLeft: 2,
      imageRight: 427,
      imageCols: 12,
      imageTop: 16,
      imageBottom: 656,
      imageRows: 18,
      detailsFile: "/aoa/maps/aoa5-map7.json",
    }),
    new ModuleScene({
      name: "map8",
      canonical: {
        name: "aoa5/map8",
        priority: 0,
      },
      nameInfo: {
        x: 99,
        y: 699,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 54,
      width: 549,
      height: 796,
      globalLight: true,
      imageLeft: 80,
      imageRight: 443,
      imageCols: 17,
      imageTop: 110,
      imageBottom: 707,
      imageRows: 28,
      detailsFile: "/aoa/maps/aoa5-map8.json",
      journals: [
        {
          x: 1750,
          y: 3750,
          id: "NTQ6MzI2OjI1NQ",
        },
        {
          x: 2350,
          y: 3550,
          id: "NTU6Njg6MjU1",
        },
        {
          x: 1350,
          y: 3750,
          id: "NTU6Njg6MjU1",
        },
        {
          x: 1750,
          y: 2550,
          id: "NTU6Njg6MTQ3",
        },
        {
          x: 2250,
          y: 2450,
          id: "NTU6Njg6MTQ3",
        },
        {
          x: 1250,
          y: 2450,
          id: "NTU6Njg6MTQ3",
        },
        {
          x: 2050,
          y: 2150,
          id: "NTU6MzQwOjYwMw",
        },
        {
          x: 2050,
          y: 1750,
          id: "NTU6Mjk1OjMzOQ",
        },
        {
          x: 850,
          y: 2950,
          id: "NTQ6OTk6MzM5",
        },
      ],
      tokens: [
        {
          id: "npc23",
          x: 2100,
          y: 1700,
        },
        {
          id: "npc23",
          x: 2100,
          y: 1600,
        },
        {
          id: "npc23",
          x: 1900,
          y: 1700,
        },
        {
          id: "npc23",
          x: 1900,
          y: 1600,
        },
      ],
    }),
    new ModuleScene({
      name: "map9",
      canonical: {
        name: "aoa5/map9",
        priority: 0,
      },
      nameInfo: {
        x: 249.75,
        y: 582.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 56,
      width: 425,
      height: 467,
      globalLight: true,
      imageLeft: 128,
      imageRight: 321,
      imageCols: 9,
      imageTop: 131,
      imageBottom: 344,
      imageRows: 10,
      detailsFile: "/aoa/maps/aoa5-map9.json",
      journals: [
        {
          x: 1550,
          y: 1450,
          id: "NTY6OTk6MzYz",
        },
        {
          x: 650,
          y: 1250,
          id: "NTQ6OTk6MzM5",
        },
      ],
      tokens: [
        {
          id: "npc25",
          x: 1500,
          y: 1300,
        },
        {
          id: "npc32",
          x: 1200,
          y: 1400,
        },
      ],
    }),
    new ModuleScene({
      name: "map10",
      canonical: {
        name: "aoa5/map10",
        priority: 0,
      },
      nameInfo: {
        x: 99,
        y: 702.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 58,
      width: 732,
      height: 748,
      globalLight: true,
      imageLeft: 101,
      imageRight: 635,
      imageCols: 25,
      imageTop: 114,
      imageBottom: 626,
      imageRows: 24,
      detailsFile: "/aoa/maps/aoa5-map10.json",
      journals: [
        {
          x: 1850,
          y: 1950,
          id: "NTY6MzI2OjE5NQ",
        },
        {
          x: 1550,
          y: 2950,
          id: "NTc6Njg6NDk1",
        },
        {
          x: 2650,
          y: 1550,
          id: "NTc6Mjk1OjYyNw",
        },
        {
          x: 3550,
          y: 1450,
          id: "NTg6Mzk0OjU5MQ",
        },
        {
          x: 3150,
          y: 2450,
          id: "NTg6MzI2OjM1MQ",
        },
        {
          x: 2150,
          y: 3450,
          id: "NTk6Mjk1OjYzOQ",
        },
        {
          x: 2950,
          y: 3350,
          id: "NjA6OTk6NTE5",
        },
        {
          x: 3650,
          y: 3150,
          id: "NjA6OTk6MTU5",
        },
        {
          x: 3050,
          y: 3850,
          id: "NjA6MzI2OjI0Mw",
        },
        {
          x: 950,
          y: 1650,
          id: "NTQ6OTk6MzM5",
        },
      ],
      tokens: [
        {
          id: "npc12",
          x: 1500,
          y: 2e3,
        },
        {
          id: "npc18",
          x: 1800,
          y: 2e3,
          elite: true,
        },
        {
          id: "npc12",
          x: 1800,
          y: 1700,
        },
        {
          id: "npc35",
          x: 1500,
          y: 2700,
        },
        {
          id: "npc35",
          x: 1600,
          y: 2900,
        },
        {
          id: "npc35",
          x: 1600,
          y: 3100,
        },
        {
          id: "npc35",
          x: 1400,
          y: 3e3,
        },
        {
          id: "npc26",
          x: 2e3,
          y: 3700,
        },
        {
          id: "npc26",
          x: 2100,
          y: 3700,
        },
        {
          id: "npc26",
          x: 2200,
          y: 3700,
        },
        {
          id: "npc26",
          x: 2300,
          y: 3700,
        },
        {
          id: "npc37",
          x: 1800,
          y: 3500,
        },
        {
          id: "npc21",
          x: 3e3,
          y: 3400,
        },
        {
          id: "npc12",
          x: 2900,
          y: 3200,
        },
        {
          id: "npc12",
          x: 3200,
          y: 3600,
        },
        {
          id: "npc41",
          x: 3700,
          y: 3100,
        },
        {
          id: "npc43",
          x: 3300,
          y: 2400,
        },
        {
          id: "npc44",
          x: 3400,
          y: 2300,
        },
        {
          id: "npc44",
          x: 3200,
          y: 2500,
        },
        {
          id: "npc42",
          x: 2800,
          y: 1600,
        },
        {
          id: "npc12",
          x: 3400,
          y: 1400,
        },
        {
          id: "npc12",
          x: 3500,
          y: 1500,
        },
        {
          id: "npc12",
          x: 3400,
          y: 1600,
        },
      ],
    }),
    new ModuleScene({
      name: "map11",
      canonical: {
        name: "aoa5/map11",
        priority: 0,
      },
      nameInfo: {
        x: 99,
        y: 690.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 62,
      width: 641,
      height: 1380,
      globalLight: true,
      imageLeft: 103,
      imageRight: 553,
      imageCols: 21,
      imageTop: 97,
      imageBottom: 1187,
      imageRows: 51,
      detailsFile: "/aoa/maps/aoa5-map11.json",
      journals: [
        {
          x: 2850,
          y: 7050,
          id: "NjA6MzI2OjEzNQ",
        },
        {
          x: 3250,
          y: 6450,
          id: "NjE6Njg6Mzk5",
        },
        {
          x: 1950,
          y: 6350,
          id: "NjE6Mjk1OjM5OQ",
        },
        {
          x: 1750,
          y: 5550,
          id: "NjE6Mjk1OjE3MQ",
        },
        {
          x: 2750,
          y: 5550,
          id: "NjI6MzI2OjI2Nw",
        },
        {
          x: 1850,
          y: 4250,
          id: "NjM6Mjk1OjYyNw",
        },
        {
          x: 2950,
          y: 3950,
          id: "NjQ6OTk6MTU5",
        },
        {
          x: 2750,
          y: 2550,
          id: "NjU6Njg6Njk5",
        },
      ],
      tokens: [
        {
          id: "npc36",
          x: 2600,
          y: 7e3,
        },
        {
          id: "npc36",
          x: 2900,
          y: 7e3,
        },
        {
          id: "npc19",
          x: 2700,
          y: 5400,
        },
        {
          id: "npc43",
          x: 1800,
          y: 6400,
        },
        {
          id: "npc44",
          x: 1900,
          y: 6500,
        },
        {
          id: "npc28",
          x: 1700,
          y: 5200,
        },
        {
          id: "npc43",
          x: 2e3,
          y: 4100,
        },
        {
          id: "npc12",
          x: 2e3,
          y: 4200,
        },
        {
          id: "npc24",
          x: 1800,
          y: 4500,
        },
        {
          id: "npc24",
          x: 1200,
          y: 4300,
        },
        {
          id: "npc47",
          x: 700,
          y: 4200,
          elite: true,
        },
        {
          id: "npc45",
          x: 3200,
          y: 3900,
        },
        {
          id: "npc33",
          x: 3100,
          y: 4100,
        },
        {
          id: "npc20",
          x: 3e3,
          y: 2400,
        },
        {
          id: "npc4",
          x: 2600,
          y: 2400,
        },
      ],
    }),
  ];
  journals = [
    new AdventureImage({
      name: "journal1",
      page: 1,
      width: 1258,
      height: 724,
    }),
    new AdventureImage({
      name: "journal2",
      page: 4,
      width: 1261,
      height: 1636,
    }),
    new AdventureImage({
      name: "journal3",
      page: 6,
      width: 1261,
      height: 830,
    }),
    new AdventureImage({
      name: "journal4",
      page: 18,
      width: 1261,
      height: 830,
    }),
    new AdventureImage({
      name: "journal5",
      page: 52,
      width: 1261,
      height: 830,
    }),
    new AdventureImage({
      name: "journal6",
      page: 66,
      width: 1261,
      height: 1636,
    }),
    new AdventureImage({
      name: "journal7",
      page: 68,
      width: 1259,
      height: 830,
    }),
    new AdventureImage({
      name: "journal8",
      page: 72,
      width: 1262,
      height: 1636,
    }),
    new CaptionImage({
      name: "journal9",
      page: 75,
      width: 778,
      height: 1012,
    }),
    new CaptionImage({
      name: "journal10",
      page: 76,
      width: 744,
      height: 945,
    }),
    new AdventureImage({
      name: "journal11",
      page: 78,
      width: 1259,
      height: 1636,
    }),
    new AdventureImage({
      name: "journal12",
      page: 79,
      width: 338,
      height: 364,
    }),
    new AdventureImage({
      name: "journal13",
      page: 79,
      width: 338,
      height: 380,
    }),
    new AdventureImage({
      name: "journal14",
      page: 81,
      width: 724,
      height: 918,
    }),
    new AdventureImage({
      name: "journal15",
      page: 1,
      width: 944,
      height: 1371,
    }),
    new CaptionImage({
      name: "journal16",
      page: 71,
      width: 908,
      height: 1100,
    }),
    new AdventureImage({
      name: "journal17",
      page: 82,
      width: 913,
      height: 686,
    }),
    new AdventureImage({
      name: "journal18",
      page: 83,
      width: 952,
      height: 1168,
    }),
    new AdventureImage({
      name: "journal19",
      page: 95,
      width: 792,
      height: 1246,
    }),
    new AdventureImage({
      name: "journal20",
      page: 99,
      width: 587,
      height: 636,
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.9H11QHnoKz8hHKSM",
      name: {
        page: 11,
        x: 417.3274,
        y: 108.6081,
      },
      page: 11,
      width: 1261,
      height: 1098,
      tokenX: -337,
      tokenY: -155,
      tokenSize: 533,
      forIds: ["MTE6Mjk1OjY5OQ"],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 13,
        x: 254.8271,
        y: 458.8905,
      },
      page: 13,
      width: 454,
      height: 500,
      tokenX: 73,
      tokenY: 83,
      tokenSize: 584,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 16,
        x: 304.1069,
        y: 448.8905,
      },
      page: 16,
      width: 444,
      height: 516,
      tokenX: 126,
      tokenY: 105,
      tokenSize: 628,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc4",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.SVh7cPwyGgmZORVz",
      name: {
        page: 28,
        x: 203.3792,
        y: 106.8905,
      },
      page: 28,
      width: 816,
      height: 1197,
      tokenX: -174,
      tokenY: 12,
      tokenSize: 357,
      forIds: ["NjU6Njg6MjA3"],
    }),
    new ModuleNpc({
      id: "npc5",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 29,
        x: 239.9253,
        y: 429.1729,
      },
      page: 29,
      width: 507,
      height: 563,
      tokenX: 91,
      tokenY: 134,
      tokenSize: 703,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc6",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 30,
        x: 297.9848,
        y: 444.6081,
      },
      page: 30,
      width: 467,
      height: 510,
      tokenX: 93,
      tokenY: 111,
      tokenSize: 622,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc7",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 31,
        x: 266.9286,
        y: 446.1729,
      },
      page: 31,
      width: 510,
      height: 566,
      tokenX: 75,
      tokenY: 84,
      tokenSize: 622,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc8",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.080v247YtmFRxT3l",
      page: 37,
      width: 888,
      height: 1334,
      tokenX: -245,
      tokenY: -48,
      tokenSize: 438,
      forIds: ["MzY6OTk6OTk"],
    }),
    new ModuleNpc({
      id: "npc9",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 38,
        x: 237.1709,
        y: 84.6081,
      },
      page: 38,
      width: 1089,
      height: 1228,
      tokenX: 47,
      tokenY: -92,
      tokenSize: 696,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc10",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.ASc5sT2hU84tp1fx",
      name: {
        page: 39,
        x: 330.6488,
        y: 117.1728,
      },
      page: 39,
      width: 861,
      height: 980,
      tokenX: -127,
      tokenY: 125,
      tokenSize: 532,
      forIds: ["Mzk6Njg6MzAz"],
    }),
    new ModuleNpc({
      id: "npc11",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 41,
        x: 272.8592,
        y: 447.1729,
      },
      page: 41,
      width: 510,
      height: 519,
      tokenX: 115,
      tokenY: 121,
      tokenSize: 659,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc12",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.egTpOr4Wc0L5e0iY",
      page: 44,
      width: 545,
      height: 1089,
      tokenX: -93,
      tokenY: 75,
      tokenSize: 361,
      forIds: [
        "NDM6Njg6MTU5",
        "NTg6MzQ4OjM5OQ",
        "NjQ6OTk6Njk5",
        "NTc6Njg6NTkx",
        "NjA6OTk6MjA3",
      ],
    }),
    new ModuleNpc({
      id: "npc13",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 46,
        x: 294.2087,
        y: 459.6081,
      },
      page: 46,
      width: 466,
      height: 506,
      tokenX: 68,
      tokenY: 86,
      tokenSize: 590,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc14",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.lRqptquQcM6ZcQ4O",
      page: 48,
      width: 799,
      height: 1034,
      tokenX: -356,
      tokenY: 43,
      tokenSize: 306,
      forIds: ["NDk6Njg6MTgz"],
    }),
    new ModuleNpc({
      id: "npc15",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 51,
        x: 441.6787,
        y: 130.8905,
      },
      page: 51,
      width: 780,
      height: 1068,
      tokenX: -120,
      tokenY: 13,
      tokenSize: 340,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc16",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.YIXAcvSyI1C94r9l",
      page: 53,
      width: 826,
      height: 1159,
      tokenX: -267,
      tokenY: 3,
      tokenSize: 319,
      forIds: ["NTM6Njg6NDIz"],
    }),
    new ModuleNpc({
      id: "npc17",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 55,
        x: 267.6666,
        y: 447.1729,
      },
      page: 55,
      width: 485,
      height: 548,
      tokenX: 85,
      tokenY: 80,
      tokenSize: 604,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc18",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.ImueS9YFhV6sxqBP",
      page: 57,
      width: 903,
      height: 1153,
      tokenX: -98,
      tokenY: -172,
      tokenSize: 397,
      forIds: ["NTc6Njg6NTQz"],
    }),
    new ModuleNpc({
      id: "npc19",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.X7zSx8LFh2ZDnOYy",
      page: 64,
      width: 512,
      height: 611,
      tokenX: 50,
      tokenY: 0,
      tokenSize: 611,
      forIds: ["NjM6Njg6NTU1"],
    }),
    new ModuleNpc({
      id: "npc20",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.aiNE06bxKD6jfoLd",
      page: 65,
      width: 497,
      height: 574,
      tokenX: 97,
      tokenY: 106,
      tokenSize: 658,
      forIds: ["OTU6Njg6NjE1", "NjU6Njg6MjU1"],
    }),
    new ModuleNpc({
      id: "npc21",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.n6FQeNsDgKaDIF7b",
      page: 85,
      width: 861,
      height: 1241,
      tokenX: -6,
      tokenY: 70,
      tokenSize: 625,
      forIds: ["ODU6Njg6Mzk5", "NjA6OTk6MjU1", "NDY6NDI2OjUwNw"],
    }),
    new ModuleNpc({
      id: "npc22",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.FP2JGgFA3NmnXf1o",
      page: 86,
      width: 873,
      height: 1150,
      tokenX: -134,
      tokenY: 116,
      tokenSize: 562,
      forIds: ["ODY6MjUxOjYyNw", "MzY6MzI2OjI2Nw"],
    }),
    new ModuleNpc({
      id: "npc23",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.ZRGRAqkDEZbRn8x3",
      page: 87,
      width: 888,
      height: 918,
      tokenX: -265,
      tokenY: -168,
      tokenSize: 358,
      forIds: ["ODc6Njg6NTA3", "NTY6OTk6NDEx"],
    }),
    new ModuleNpc({
      id: "npc24",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.YUZF9WhDmfzma3dE",
      page: 88,
      width: 900,
      height: 1091,
      tokenX: -246,
      tokenY: -176,
      tokenSize: 643,
      forIds: ["ODg6MjUxOjY1MQ", "NjQ6OTk6NjUx"],
    }),
    new ModuleNpc({
      id: "npc25",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.i8C4jqI3VdozylBL",
      page: 89,
      width: 826,
      height: 1365,
      tokenX: -268,
      tokenY: -600,
      tokenSize: 413,
      forIds: ["ODk6Njg6NjM5", "NTY6OTk6OTk"],
    }),
    new ModuleNpc({
      id: "npc26",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.AtiN3EsRpHn5qbuv",
      page: 90,
      width: 816,
      height: 1159,
      tokenX: 150,
      tokenY: 118,
      tokenSize: 991,
      forIds: ["OTA6MjUxOjYyNw", "NTk6Mjk1OjMxNQ"],
    }),
    new ModuleNpc({
      id: "npc27",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.r3yLNfqS00g8sdrT",
      page: 91,
      width: 942,
      height: 787,
      tokenX: 88,
      tokenY: 189,
      tokenSize: 1082,
      forIds: ["OTE6Njg6MzUx", "MzU6Mjk1OjI1NQ"],
    }),
    new ModuleNpc({
      id: "npc28",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.AEa3tvzinib5eaIo",
      page: 92,
      width: 980,
      height: 1066,
      tokenX: -471,
      tokenY: 34,
      tokenSize: 590,
      forIds: ["OTI6Mzk4OjQ4Mw", "NjI6MzI2OjMxNQ"],
    }),
    new ModuleNpc({
      id: "npc29",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.JD6kdfZveObBe1mR",
      page: 93,
      width: 885,
      height: 1005,
      tokenX: -88,
      tokenY: -17,
      tokenSize: 669,
      forIds: ["OTM6Njg6NDgz"],
    }),
    new ModuleNpc({
      id: "npc30",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 99,
        x: 683.9999,
        y: 686.543,
      },
      page: 99,
      width: 397,
      height: 416,
      tokenX: 66,
      tokenY: 98,
      tokenSize: 528,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc31",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 99,
        x: 812.5599,
        y: 513.6921,
      },
      page: 99,
      width: 397,
      height: 356,
      tokenX: 58,
      tokenY: 119,
      tokenSize: 509,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc32",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.DxlauoGqSVDZWBOM",
      label: "ANL",
      forIds: ["NTY6MzI2OjYyNw"],
    }),
    new ModuleNpc({
      id: "npc33",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.keCgklXcy4HZgQIL",
      label: "AG",
      forIds: ["NjQ6NDM0OjQ1OQ"],
    }),
    new ModuleNpc({
      id: "npc34",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.j4BCcTvIMtoUPRzw",
      label: "AE",
      forIds: ["ODQ6MjUxOjUxOQ"],
    }),
    new ModuleNpc({
      id: "npc35",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.YIXAcvSyI1C94r9l",
      name: {
        page: 57,
        x: 67.5599,
        y: 99,
        substring: {
          start: 0,
          end: 16,
        },
      },
      label: "ZG",
      forIds: ["NTc6Njg6OTk"],
    }),
    new ModuleNpc({
      id: "npc36",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.hSSe2FxlXKvjKsEw",
      label: "A",
      forIds: ["NjE6Njg6NDk1"],
    }),
    new ModuleNpc({
      id: "npc37",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.axCgEgk7n1yXpgdp",
      label: "CV",
      forIds: ["NTk6Mjk1OjE4Mw"],
    }),
    new ModuleNpc({
      id: "npc38",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.Upf2fOZ6QgGG3seI",
      label: "SG",
      forIds: ["OTo2ODo2OTk"],
    }),
    new ModuleNpc({
      id: "npc39",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.roRmUbaC9kJC7met",
      label: "EEA",
      forIds: ["OTo2ODo0MzU"],
    }),
    new ModuleNpc({
      id: "npc40",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.C7LvY2Xxzm2xRL1M",
      label: "GS",
      forIds: ["OTE6Njg6NTc5"],
    }),
    new ModuleNpc({
      id: "npc41",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.lDgabn0WtDKbLtfc",
      label: "LW",
      forIds: ["NjA6MzI2OjYyNw"],
    }),
    new ModuleNpc({
      id: "npc42",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.KEbmwWwmpAmIoBcm",
      label: "MST",
      forIds: ["NTg6OTk6MjA3"],
    }),
    new ModuleNpc({
      id: "npc43",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.SVh7cPwyGgmZORVz",
      label: "STB",
      forIds: ["NTk6Njg6Njk5", "NjE6Mjk1OjI2Nw", "NjM6Mjk1Ojk5"],
    }),
    new ModuleNpc({
      id: "npc44",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.gF8Qy1k8gPBEUBAd",
      label: "STM",
      forIds: ["NjE6Mjk1OjIxOQ", "NTk6Njg6MzM5"],
    }),
    new ModuleNpc({
      id: "npc45",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.teabm1YiRAKdUaEQ",
      label: "SST",
      forIds: ["NjQ6MzI2OjMxNQ"],
    }),
    new ModuleNpc({
      id: "npc46",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.n1Mv0Q1MirfjBmfI",
      label: "U",
      forIds: ["MTQ6OTk6MzI3"],
    }),
    new ModuleNpc({
      id: "npc47",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.mQJL411e9Iz8dJoh",
      label: "P",
      forIds: ["NjQ6OTk6NjAz"],
    }),
    new ModuleNpc({
      id: "npc48",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.H7NO4Q7ctHnfGKeJ",
      label: "WW",
      forIds: ["MTc6Njg6NDgz"],
    }),
    new ModuleNpc({
      id: "npc49",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.31kXa1P0LUl38jYG",
      label: "Z",
      forIds: ["MTA6OTk6NDgz"],
    }),
  ];
  journalPages = [
    {
      name: "Age of Ashes - Against the Scarlet Triad",
      pages: [],
    },
    {
      name: "Chapter 1",
      pages: [
        {
          id: "NjoyMTI6MzU3",
        },
        {
          id: "NzozNzE6Njk5",
        },
        {
          id: "Nzo2ODozNzU",
        },
        {
          id: "ODo5OToxMzU",
        },
        {
          id: "OTo2ODo2NTE",
        },
        {
          id: "OToyOTU6NDU5",
        },
        {
          id: "OToyOTU6MzYz",
        },
        {
          id: "OToyOTU6MTcx",
        },
        {
          id: "MTA6OTk6NDM1",
        },
        {
          id: "MTI6OTk6MzI3",
        },
        {
          id: "MTM6Njg6NDQ3",
        },
        {
          id: "MTM6Mjk1OjMwMw",
        },
        {
          id: "MTQ6OTk6MjMx",
        },
        {
          id: "MTQ6MzI2OjE0Nw",
        },
        {
          id: "MTc6Njg6Njk5",
        },
        {
          id: "MTc6Mjk1OjY5OQ",
        },
      ],
    },
    {
      name: "Chapter 2",
      pages: [
        {
          id: "MTg6MjA5OjM1OA",
        },
        {
          id: "MTk6MzcxOjY5OQ",
        },
        {
          id: "MTg6MzI2OjI3OQ",
        },
        {
          id: "MTk6Njg6MTM1",
        },
        {
          id: "MjA6OTk6NTc5",
        },
        {
          id: "MjA6OTk6Mzg3",
        },
        {
          id: "MjA6MzI2OjYzOQ",
        },
        {
          id: "MjA6MzI2OjU2Nw",
        },
        {
          id: "MjA6MzI2OjIxOQ",
        },
        {
          id: "MjE6Njg6NTA3",
        },
        {
          id: "MjE6Mjk1OjEzNQ",
        },
        {
          id: "MjI6OTk6NDQ3",
        },
        {
          id: "MjI6OTk6MzAz",
        },
        {
          id: "MjM6Mjk1OjQ4Mw",
        },
        {
          id: "MjQ6OTk6NDk1",
        },
        {
          id: "MjQ6OTk6MzYz",
        },
        {
          id: "MjU6Mjk1OjY5OQ",
        },
        {
          id: "MjY6MzI2OjE5NQ",
        },
        {
          id: "MzA6OTk6MzAz",
        },
        {
          id: "MzE6MzU3OjU5MQ",
        },
        {
          id: "MzE6Mjk1OjExMQ",
        },
        {
          id: "MzI6MzI2OjIxOQ",
        },
        {
          id: "MzM6Njg6NjUx",
        },
        {
          id: "MzM6Njg6NTE5",
        },
        {
          id: "MzQ6OTk6MzE1",
        },
        {
          id: "MzQ6MzI2OjY2Mw",
        },
        {
          id: "MzQ6MzI2OjU0Mw",
        },
        {
          id: "MzU6Mjk1OjEzNQ",
        },
        {
          id: "MzY6OTk6NTc5",
        },
        {
          id: "Mzc6Njg6NDk1",
        },
        {
          id: "Mzc6Njg6MTU5",
        },
        {
          id: "Mzc6Mjk1OjY5OQ",
        },
        {
          id: "Mzg6MzI2OjE1OQ",
        },
        {
          id: "NDA6OTk6MTIz",
        },
        {
          id: "NDA6MzI2OjIwNw",
        },
        {
          id: "NDE6Njg6NjAz",
        },
        {
          id: "NDE6MzM1OjY1MQ",
        },
        {
          id: "NDI6MzI2OjI1NQ",
        },
        {
          id: "NDM6Mjk1OjI2Nw",
        },
        {
          id: "NDQ6MzI2OjQ3MQ",
        },
        {
          id: "NDQ6MzI2OjE5NQ",
        },
        {
          id: "NDQ6MzI2Ojg3",
        },
        {
          id: "NDY6OTk6Mzg3",
        },
        {
          id: "NDc6MzA0OjY4Nw",
        },
        {
          id: "NDc6Njg6NjUx",
        },
        {
          id: "NDc6Njg6NTQz",
        },
        {
          id: "NDg6OTk6NjE1",
        },
        {
          id: "NDg6MzI2OjExMQ",
        },
        {
          id: "NDk6Mjk1OjUwNw",
        },
        {
          id: "NDk6Mjk1OjI0Mw",
        },
        {
          id: "NTA6OTk6MzAz",
        },
        {
          id: "NTA6MzI2OjU2Nw",
        },
        {
          id: "NTA6MzI2Ojg3",
        },
      ],
    },
    {
      name: "Chapter 3",
      pages: [
        {
          id: "NTI6MjA5OjM1OQ",
        },
        {
          id: "NTM6MzcxOjY5OQ",
        },
        {
          id: "NTM6Njg6NTU1",
        },
        {
          id: "NTQ6OTk6MzM5",
        },
        {
          id: "NTQ6MzM2OjU1NQ",
        },
        {
          id: "NTQ6MzI2OjI1NQ",
        },
        {
          id: "NTU6Njg6MjU1",
        },
        {
          id: "NTU6Njg6MTQ3",
        },
        {
          id: "NTU6MzQwOjYwMw",
        },
        {
          id: "NTU6Mjk1OjMzOQ",
        },
        {
          id: "NTY6OTk6MzYz",
        },
        {
          id: "NTY6MzI2OjE5NQ",
        },
        {
          id: "NTc6Njg6NDk1",
        },
        {
          id: "NTc6Mjk1OjYyNw",
        },
        {
          id: "NTg6Mzk0OjU5MQ",
        },
        {
          id: "NTg6MzI2OjM1MQ",
        },
        {
          id: "NTk6Mjk1OjYzOQ",
        },
        {
          id: "NjA6OTk6NTE5",
        },
        {
          id: "NjA6OTk6MTU5",
        },
        {
          id: "NjA6MzI2OjI0Mw",
        },
        {
          id: "NjA6MzI2OjEzNQ",
        },
        {
          id: "NjE6Njg6Mzk5",
        },
        {
          id: "NjE6Mjk1OjM5OQ",
        },
        {
          id: "NjE6Mjk1OjE3MQ",
        },
        {
          id: "NjI6MzI2OjI2Nw",
        },
        {
          id: "NjM6Mjk1OjYyNw",
        },
        {
          id: "NjQ6OTk6MTU5",
        },
        {
          id: "NjU6Njg6Njk5",
        },
        {
          id: "NjU6MzY3OjU1NQ",
        },
      ],
    },
    {
      name: "Back Matter",
      pages: [
        {
          id: "ODQ6MjUxOjY5OQ",
        },
        {
          id: "ODQ6MjUxOjYxNQ",
        },
        {
          id: "ODU6Njg6NjUx",
        },
        {
          id: "ODY6MjUxOjY5OQ",
        },
        {
          id: "ODc6Njg6Njk5",
        },
        {
          id: "ODg6MjUxOjY5OQ",
        },
        {
          id: "ODk6Njg6Njk5",
        },
        {
          id: "OTA6MjUxOjY5OQ",
        },
        {
          id: "OTE6Njg6Njk5",
        },
        {
          id: "OTE6Njg6NjI3",
        },
        {
          id: "OTE6Njg6Mzk5",
        },
        {
          id: "OTI6MjUxOjY5OQ",
        },
        {
          id: "OTM6Njg6Njk5",
        },
        {
          id: "OTQ6MTcyOjY3Mw",
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
      ],
    },
  ];
  combines = [
    {
      source: "ODQ6MTU3OjY2Mw",
      dest: "ODQ6MjUxOjY5OQ",
    },
    {
      source: "ODU6MzcxOjY2Mw",
      dest: "ODQ6MjUxOjY5OQ",
    },
    {
      source: "ODY6MTQyOjY2Mw",
      dest: "ODY6MjUxOjY5OQ",
    },
    {
      source: "ODc6MzcxOjY2Mw",
      dest: "ODc6Njg6Njk5",
    },
    {
      source: "ODg6MTQ4OjY2Mw",
      dest: "ODg6MjUxOjY5OQ",
    },
    {
      source: "ODk6MzcxOjY2Mw",
      dest: "ODk6Njg6Njk5",
    },
    {
      source: "OTA6MTY3OjY2Mw",
      dest: "OTA6MjUxOjY5OQ",
    },
    {
      source: "OTE6MzcxOjY2Mw",
      dest: "OTE6Njg6Njk5",
    },
    {
      source: "OTI6MTY5OjY2Mw",
      dest: "OTI6MjUxOjY5OQ",
    },
    {
      source: "OTM6MzcxOjY2Mw",
      dest: "OTM6Njg6Njk5",
    },
  ];
  headingFontIds = this.headingFontIds.concat(["GoodOT-Bold:12"]);
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "AGE OF ASHES: AGAINST THE SCARLET TRIAD" &&
        t.fontId === "Gin-Regular:12",
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    for (const t of text) {
      t.fontId === "Sabon-Roman-SC700:9" && (t.fontId = "Sabon-Roman:9");
    }
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
