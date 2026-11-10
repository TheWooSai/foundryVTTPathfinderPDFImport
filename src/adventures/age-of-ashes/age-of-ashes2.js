import { AgeOfAshesBase } from "./base.js";
import { AdventureImage } from "../../core/images.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class AgeOfAshes2 extends AgeOfAshesBase {
  prefix = "age-of-ashes2";
  fullName = "Age of Ashes - Cult of Cinders";
  pages = [
    this.ChapterHeadingPageLayout(6),
    this.RightSingleColumnWithSidebar(7),
    this.LeftTwoColumn(8),
    this.RightTwoColumn(9),
    this.LeftTwoColumn(10),
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
    this.ChapterHeadingPageLayout(28),
    this.RightSingleColumnWithSidebar(29),
    this.LeftTwoColumn(30),
    this.RightTwoColumn(31),
    this.LeftTwoColumnWithMap(32, 327),
    this.RightTwoColumn(33),
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
    this.RightTwoColumn(49),
    this.LeftTwoColumn(50),
    this.RightTwoColumn(51),
    this.LeftTwoColumn(52),
    this.RightTwoColumn(53),
    this.LeftTwoColumn(54),
    this.RightTwoColumn(55),
    this.ChapterHeadingPageLayout(56),
    this.RightSingleColumnWithSidebar(57),
    this.LeftTwoColumn(58),
    this.RightTwoColumn(59),
    this.RightTwoColumn(61),
    this.LeftTwoColumn(62),
    this.RightTwoColumn(63),
    this.LeftTwoColumn(64),
    this.RightTwoColumn(65),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      canonical: {
        name: "aoa2/map1",
        priority: 0,
      },
      nameInfo: {
        x: 268.6864,
        y: 726.6831,
      },
      page: 2,
      width: 1261,
      height: 1637,
      imageLeft: 0,
      imageTop: 0,
      imageRight: 1261,
      imageBottom: 1637,
      imageRows: 67,
      imageCols: 52,
      gridType: "gridless",
      globalLight: true,
    }),
    new ModuleScene({
      name: "map2",
      canonical: {
        name: "aoa2/map2",
        priority: 0,
      },
      nameInfo: {
        x: 99,
        y: 363,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 32,
      width: 1259,
      height: 905,
      imageLeft: 58,
      imageRight: 1180,
      imageCols: 10,
      imageTop: 102,
      imageBottom: 879,
      imageRows: 6,
      gridType: "hex",
      gridDistance: 10,
      gridUnits: "mi",
      gridSize: 400,
      globalLight: true,
      detailsFile: "/aoa/maps/aoa2-map2.json",
      journals: [
        {
          x: 1700,
          y: 1213.2,
          id: "MzI6OTk6MTU5",
        },
        {
          x: 1700,
          y: 1561.2,
          id: "MzI6OTk6MTEx",
        },
        {
          x: 1400,
          y: 2425.2,
          id: "MzI6MzI2OjMyNw",
        },
        {
          x: 2e3,
          y: 2773.2,
          id: "MzU6Njg6Njk5",
        },
        {
          x: 2300,
          y: 1213.2,
          id: "MzU6Mjk1OjMxNQ",
        },
        {
          x: 2300,
          y: 1909.2,
          id: "MzY6MzI2OjMxNQ",
        },
        {
          x: 2300,
          y: 2253.2,
          id: "Mzg6OTk6NTMx",
        },
        {
          x: 2600,
          y: 2081.2,
          id: "NDA6OTk6Njk5",
        },
        {
          x: 2900,
          y: 1213.2,
          id: "NDA6OTk6MjE5",
        },
        {
          x: 2900,
          y: 1909.2,
          id: "NDA6MzI2OjEyMw",
        },
        {
          x: 2900,
          y: 2601.2,
          id: "NDM6Njg6MzI3",
        },
        {
          x: 3200,
          y: 2081.2,
          id: "NDQ6OTk6MzUx",
        },
        {
          x: 3200,
          y: 2425.2,
          id: "NDQ6MzI2OjIwNw",
        },
        {
          x: 3500,
          y: 1561.2,
          id: "NDQ6MzI2OjE1OQ",
        },
        {
          x: 3800,
          y: 1733.2,
          id: "NDQ6MzI2OjExMQ",
        },
        {
          x: 3800,
          y: 2773.2,
          id: "NDU6Njg6MjE5",
        },
      ],
      tokens: [],
    }),
    new ModuleScene({
      name: "map3",
      canonical: {
        name: "aoa2/map3",
        priority: 0,
      },
      nameInfo: {
        x: 23,
        y: 534.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 34,
      width: 1259,
      height: 1636,
      cropLeft: 0,
      cropTop: 0,
      cropRight: 607,
      cropBottom: 533,
      imageLeft: 3,
      imageTop: 25,
      imageRight: 573,
      imageBottom: 514,
      imageRows: 15,
      imageCols: 17,
      globalLight: true,
      detailsFile: "/aoa/maps/aoa2-map3.json",
    }),
    new ModuleScene({
      name: "map4",
      canonical: {
        name: "aoa2/map4",
        priority: 0,
      },
      nameInfo: {
        x: 23,
        y: 248.6681,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 34,
      width: 1259,
      height: 1636,
      cropLeft: 0,
      cropTop: 559,
      cropRight: 607,
      cropBottom: 1130,
      imageLeft: 3,
      imageTop: 580,
      imageRight: 573,
      imageBottom: 1104,
      imageRows: 16,
      imageCols: 17,
      globalLight: true,
      detailsFile: "/aoa/maps/aoa2-map4.json",
      journals: [
        {
          x: 550,
          y: 550,
          id: "MzU6Njg6Njk5",
        },
      ],
      tokens: [
        {
          id: "npc41",
          x: 1100,
          y: 800,
        },
        {
          id: "npc41",
          x: 1200,
          y: 1100,
        },
      ],
    }),
    new ModuleScene({
      name: "map5",
      canonical: {
        name: "aoa2/map5",
        priority: 0,
      },
      nameInfo: {
        x: 23,
        y: 10.6681,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 34,
      width: 1259,
      height: 1636,
      cropLeft: 0,
      cropTop: 1157,
      cropRight: 607,
      cropBottom: 1635,
      imageLeft: 3,
      imageTop: 1169,
      imageRight: 573,
      imageBottom: 1627,
      imageRows: 14,
      imageCols: 17,
      globalLight: true,
      detailsFile: "/aoa/maps/aoa2-map5.json",
    }),
    new ModuleScene({
      name: "map6",
      canonical: {
        name: "aoa2/map6",
        priority: 0,
      },
      nameInfo: {
        x: 315,
        y: 534.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 34,
      width: 1259,
      height: 1636,
      cropLeft: 631,
      cropTop: 0,
      cropRight: 1259,
      cropBottom: 533,
      imageLeft: 640,
      imageTop: 25,
      imageRight: 1245,
      imageBottom: 514,
      imageRows: 15,
      imageCols: 18,
      globalLight: true,
      detailsFile: "/aoa/maps/aoa2-map6.json",
    }),
    new ModuleScene({
      name: "map7",
      canonical: {
        name: "aoa2/map7",
        priority: 0,
      },
      nameInfo: {
        x: 315,
        y: 248.6681,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 34,
      width: 1259,
      height: 1636,
      cropLeft: 631,
      cropTop: 559,
      cropRight: 1259,
      cropBottom: 1130,
      imageLeft: 640,
      imageTop: 580,
      imageRight: 1245,
      imageBottom: 1104,
      imageRows: 16,
      imageCols: 18,
      globalLight: true,
      detailsFile: "/aoa/maps/aoa2-map7.json",
      journals: [
        {
          x: 550,
          y: 550,
          id: "NDA6MzI2OjEyMw",
        },
      ],
      tokens: [
        {
          id: "npc13",
          x: 1200,
          y: 1500,
        },
        {
          id: "npc34",
          x: 1300,
          y: 1800,
        },
      ],
    }),
    new ModuleScene({
      name: "map8",
      canonical: {
        name: "aoa2/map8",
        priority: 0,
      },
      nameInfo: {
        x: 315,
        y: 10.6681,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 34,
      width: 1259,
      height: 1636,
      cropLeft: 631,
      cropTop: 1157,
      cropRight: 1259,
      cropBottom: 1635,
      imageLeft: 641,
      imageTop: 1169,
      imageRight: 1245,
      imageBottom: 1627,
      imageRows: 14,
      imageCols: 18,
      globalLight: true,
      detailsFile: "/aoa/maps/aoa2-map8.json",
      journals: [
        {
          x: 550,
          y: 450,
          id: "NDU6Njg6MjE5",
        },
      ],
      tokens: [
        {
          id: "npc25",
          x: 1e3,
          y: 800,
        },
        {
          id: "npc9",
          x: 1500,
          y: 800,
        },
      ],
    }),
    new ModuleScene({
      name: "map9",
      canonical: {
        name: "aoa2/map9",
        priority: 0,
      },
      nameInfo: {
        x: 30,
        y: 738.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 48,
      width: 1261,
      height: 1636,
      imageLeft: 226,
      imageTop: 246,
      imageRight: 463,
      imageBottom: 506,
      imageRows: 11,
      imageCols: 10,
      globalLight: true,
      detailsFile: "/aoa/maps/aoa2-map9.json",
      journals: [
        {
          x: 1850,
          y: 5150,
          id: "NDk6Njg6MTIz",
        },
        {
          x: 2250,
          y: 2600,
          id: "NDk6Mjk1OjU0Mw",
        },
        {
          x: 2400,
          y: 7650,
          id: "NDk6Mjk1OjExMQ",
        },
        {
          x: 5350,
          y: 7650,
          id: "NTE6Njg6Njk5",
        },
        {
          x: 3150,
          y: 7150,
          id: "NTE6Njg6MTU5",
        },
        {
          x: 5350,
          y: 5250,
          id: "NTE6Mjk1OjQyMw",
        },
        {
          x: 5750,
          y: 5250,
          id: "NTI6OTk6Njk5",
        },
        {
          x: 4250,
          y: 2650,
          id: "NTM6Njg6Mjkx",
        },
        {
          x: 5650,
          y: 3450,
          id: "NTQ6OTk6NTQz",
        },
        {
          x: 4050,
          y: 5750,
          id: "NTQ6MzI2OjQ3MQ",
        },
        {
          x: 3850,
          y: 4550,
          id: "NTU6Mjk1OjY5OQ",
        },
        {
          x: 4350,
          y: 7650,
          id: "NTA6MzI2OjYwMw",
        },
      ],
      tokens: [
        {
          id: "npc33",
          x: 2200,
          y: 7700,
        },
        {
          id: "npc36",
          x: 3200,
          y: 6800,
        },
        {
          id: "npc36",
          x: 3e3,
          y: 7200,
        },
        {
          id: "npc36",
          x: 2900,
          y: 6700,
        },
        {
          id: "npc15",
          x: 4500,
          y: 7400,
        },
        {
          id: "npc15",
          x: 4500,
          y: 7500,
        },
        {
          id: "npc15",
          x: 4500,
          y: 7600,
        },
        {
          id: "npc15",
          x: 4500,
          y: 7700,
        },
        {
          id: "npc15",
          x: 4500,
          y: 7800,
        },
        {
          id: "npc15",
          x: 4500,
          y: 7900,
        },
        {
          id: "npc28",
          x: 5e3,
          y: 7400,
        },
        {
          id: "npc28",
          x: 5200,
          y: 7400,
        },
        {
          id: "npc28",
          x: 5500,
          y: 7400,
        },
        {
          id: "npc28",
          x: 5700,
          y: 7400,
        },
        {
          id: "npc28",
          x: 5700,
          y: 7700,
        },
        {
          id: "npc28",
          x: 5500,
          y: 7700,
        },
        {
          id: "npc28",
          x: 5200,
          y: 7700,
        },
        {
          id: "npc16",
          x: 5800,
          y: 5100,
        },
        {
          id: "npc35",
          x: 4500,
          y: 5500,
        },
        {
          id: "npc35",
          x: 4500,
          y: 5200,
        },
        {
          id: "npc35",
          x: 3400,
          y: 5400,
        },
        {
          id: "npc35",
          x: 3700,
          y: 6100,
        },
        {
          id: "npc35",
          x: 4200,
          y: 6600,
        },
        {
          id: "npc35",
          x: 4500,
          y: 6500,
        },
        {
          id: "npc36",
          x: 3700,
          y: 5700,
        },
        {
          id: "npc36",
          x: 4100,
          y: 6e3,
        },
        {
          id: "npc36",
          x: 4400,
          y: 5800,
        },
        {
          id: "npc28",
          x: 4500,
          y: 5400,
        },
        {
          id: "npc28",
          x: 3400,
          y: 5900,
        },
        {
          id: "npc28",
          x: 4100,
          y: 6500,
        },
        {
          id: "npc28",
          x: 4700,
          y: 6200,
        },
        {
          id: "npc9",
          x: 4e3,
          y: 5500,
        },
        {
          id: "npc50",
          x: 3950,
          y: 5500,
        },
        {
          id: "npc50",
          x: 4e3,
          y: 5450,
        },
        {
          id: "npc50",
          x: 4050,
          y: 5450,
        },
        {
          id: "npc50",
          x: 4100,
          y: 5550,
        },
        {
          id: "npc50",
          x: 4100,
          y: 5500,
        },
        {
          id: "npc50",
          x: 4e3,
          y: 5600,
        },
        {
          id: "npc51",
          x: 2e3,
          y: 2300,
        },
        {
          id: "npc32",
          x: 3900,
          y: 2600,
        },
        {
          id: "npc17",
          x: 5300,
          y: 2900,
        },
        {
          id: "npc17",
          x: 5700,
          y: 3300,
        },
        {
          id: "npc17",
          x: 5700,
          y: 3800,
        },
      ],
    }),
    new ModuleScene({
      name: "map10",
      canonical: {
        name: "aoa2/map10",
        priority: 0,
      },
      nameInfo: {
        x: 41,
        y: 738.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 60,
      width: 1261,
      height: 1636,
      imageLeft: 26,
      imageTop: 21,
      imageRight: 1244,
      imageBottom: 1599,
      imageRows: 57,
      imageCols: 44,
      globalLight: true,
      detailsFile: "/aoa/maps/aoa2-map10.json",
      journals: [
        {
          x: 2350,
          y: 6450,
          id: "NTc6Njg6MjQz",
        },
        {
          x: 3350,
          y: 5950,
          id: "NTg6MzI2OjY5OQ",
        },
        {
          x: 4250,
          y: 4350,
          id: "NTg6MzI2OjQyMw",
        },
        {
          x: 2450,
          y: 4350,
          id: "NTg6MzI2OjExMQ",
        },
        {
          x: 3350,
          y: 2750,
          id: "NTk6Njg6Mzc1",
        },
        {
          x: 3250,
          y: 5350,
          id: "NTk6Mjk1OjYzOQ",
        },
        {
          x: 2950,
          y: 5050,
          id: "NjE6Njg6NjE1",
        },
        {
          x: 3150,
          y: 4650,
          id: "NjE6Mjk1OjQzNQ",
        },
        {
          x: 3350,
          y: 3350,
          id: "NjE6Mjk1OjEzNQ",
        },
      ],
      tokens: [
        {
          id: "npc49",
          x: 2e3,
          y: 5900,
        },
        {
          id: "npc38",
          x: 3300,
          y: 5600,
        },
        {
          id: "npc52",
          x: 3300,
          y: 5100,
        },
        {
          id: "npc18",
          x: 3e3,
          y: 4900,
        },
        {
          id: "npc42",
          x: 3400,
          y: 4900,
        },
        {
          id: "npc42",
          x: 3100,
          y: 4900,
        },
        {
          id: "npc37",
          x: 2700,
          y: 4300,
        },
        {
          id: "npc37",
          x: 3800,
          y: 4300,
        },
        {
          id: "npc22",
          x: 3300,
          y: 3900,
        },
        {
          id: "npc18",
          x: 2900,
          y: 3600,
        },
        {
          id: "npc18",
          x: 3700,
          y: 3600,
        },
        {
          id: "npc19",
          x: 3200,
          y: 3700,
        },
        {
          id: "npc40",
          x: 3300,
          y: 3200,
        },
        {
          id: "npc11",
          x: 2400,
          y: 4100,
        },
        {
          id: "npc11",
          x: 2400,
          y: 4500,
        },
        {
          id: "npc15",
          x: 4100,
          y: 4e3,
          elite: true,
        },
        {
          id: "npc15",
          x: 4300,
          y: 4e3,
          elite: true,
        },
        {
          id: "npc15",
          x: 4300,
          y: 4300,
          elite: true,
        },
        {
          id: "npc15",
          x: 4200,
          y: 4600,
          elite: true,
        },
        {
          id: "npc36",
          x: 4100,
          y: 4200,
        },
        {
          id: "npc36",
          x: 4100,
          y: 4400,
        },
        {
          id: "npc44",
          x: 3400,
          y: 2600,
        },
      ],
    }),
  ];
  journals = [
    new AdventureImage({
      name: "journal1",
      page: 1,
      width: 1258,
      height: 731,
    }),
    new AdventureImage({
      name: "journal2",
      page: 1,
      width: 1257,
      height: 715,
    }),
    new AdventureImage({
      name: "journal3",
      page: 2,
      width: 577,
      height: 637,
    }),
    new AdventureImage({
      name: "journal4",
      page: 4,
      width: 1259,
      height: 1636,
    }),
    new AdventureImage({
      name: "journal5",
      page: 6,
      width: 1261,
      height: 830,
    }),
    new AdventureImage({
      name: "journal6",
      page: 11,
      width: 1071,
      height: 1070,
    }),
    new AdventureImage({
      name: "journal7",
      page: 19,
      width: 915,
      height: 1004,
    }),
    new AdventureImage({
      name: "journal8",
      page: 28,
      width: 1261,
      height: 830,
    }),
    new AdventureImage({
      name: "journal9",
      page: 30,
      width: 905,
      height: 1091,
    }),
    new AdventureImage({
      name: "journal10",
      page: 33,
      width: 935,
      height: 1234,
    }),
    new AdventureImage({
      name: "journal11",
      page: 46,
      width: 1261,
      height: 830,
    }),
    new AdventureImage({
      name: "journal12",
      page: 56,
      width: 1261,
      height: 830,
    }),
    new AdventureImage({
      name: "journal13",
      page: 66,
      width: 1259,
      height: 820,
    }),
    new AdventureImage({
      name: "journal14",
      page: 72,
      width: 1259,
      height: 830,
    }),
    new AdventureImage({
      name: "journal15",
      page: 73,
      width: 399,
      height: 476,
    }),
    new AdventureImage({
      name: "journal16",
      page: 74,
      width: 387,
      height: 398,
    }),
    new AdventureImage({
      name: "journal17",
      page: 76,
      width: 757,
      height: 1147,
    }),
    new AdventureImage({
      name: "journal18",
      page: 26,
      width: 520,
      height: 517,
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.r02b4f1XNq7OihhD",
      name: {
        page: 9,
        x: 267.7022,
        y: 449.6387,
      },
      page: 9,
      width: 409,
      height: 500,
      tokenX: 88,
      tokenY: 130,
      tokenSize: 584,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.Pmi71NUPAIE3YMws",
      page: 11,
      width: 1071,
      height: 1070,
      tokenX: -294,
      tokenY: -142,
      tokenSize: 427,
      forIds: ["MTI6OTk6NjI3"],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.kciXaXw31gHA3gZl",
      page: 13,
      width: 863,
      height: 1150,
      tokenX: -286,
      tokenY: -77,
      tokenSize: 254,
      forIds: ["MTM6Njg6MTU5"],
    }),
    new ModuleNpc({
      id: "npc4",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.6KF6TQvLHHpE0uAM",
      name: {
        page: 19,
        x: 388.2087,
        y: 84.6081,
      },
      page: 19,
      width: 915,
      height: 1004,
      tokenX: -295,
      tokenY: -254,
      tokenSize: 444,
      forIds: ["MjA6MzI2OjY1MQ"],
    }),
    new ModuleNpc({
      id: "npc5",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 20,
        x: 233.1727,
        y: 120.6081,
      },
      page: 20,
      width: 928,
      height: 1215,
      tokenX: -356,
      tokenY: -58,
      tokenSize: 319,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc6",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 22,
        x: 290.6909,
        y: 448.6729,
      },
      page: 22,
      width: 392,
      height: 506,
      tokenX: 128,
      tokenY: 130,
      tokenSize: 618,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc7",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 22,
        x: 293.4269,
        y: 166.8905,
      },
      page: 22,
      width: 413,
      height: 513,
      tokenX: 68,
      tokenY: 106,
      tokenSize: 569,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc9",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.zNIjGSxkG8xyDLgR",
      page: 30,
      width: 905,
      height: 1091,
      tokenX: 101,
      tokenY: 57,
      tokenSize: 1063,
      forIds: [
        "MzY6MzI2OjM2Mw",
        "MzA6MzI2OjIzMQ",
        "NDA6OTk6MzUx",
        "NDA6MzI2OjI2Nw",
        "NDU6Njg6MzE1",
        "NDU6Mjk1OjE5NQ",
        "NTU6Njg6MjE5",
        "NDQ6MzI2OjI1NQ",
      ],
    }),
    new ModuleNpc({
      id: "npc10",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.PcHQDmPTztw32PhL",
      name: {
        page: 33,
        x: 306.741,
        y: 105.1728,
      },
      page: 33,
      width: 935,
      height: 1234,
      tokenX: -332,
      tokenY: -109,
      tokenSize: 618,
      forIds: ["MzM6Mjk1OjU2Nw"],
    }),
    new ModuleNpc({
      id: "npc11",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.60aeSJvu09ZM3SPx",
      page: 36,
      width: 1047,
      height: 1229,
      tokenX: -197,
      tokenY: -284,
      tokenSize: 557,
      forIds: ["MzY6OTk6NjM5", "NTk6Njg6NTU1"],
    }),
    new ModuleNpc({
      id: "npc12",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.9SNpsnwlzZjH4DQf",
      name: {
        page: 37,
        x: 453.7718,
        y: 94.8905,
      },
      page: 37,
      width: 801,
      height: 1137,
      tokenX: -212,
      tokenY: 2,
      tokenSize: 325,
      forIds: ["Mzg6OTk6NjUx"],
    }),
    new ModuleNpc({
      id: "npc13",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.UQDxkvqXKg03ESTQ",
      page: 38,
      width: 893,
      height: 1191,
      tokenX: -271,
      tokenY: -85,
      tokenSize: 267,
      forIds: ["Mzk6Njg6NjI3", "NDE6Mjk1OjEzNQ"],
    }),
    new ModuleNpc({
      id: "npc14",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 43,
        x: 269.2812,
        y: 458.0393,
      },
      page: 43,
      width: 412,
      height: 535,
      tokenX: 99,
      tokenY: 91,
      tokenSize: 619,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc15",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.F2Xhn4rqPAj55w3O",
      page: 50,
      width: 892,
      height: 1035,
      tokenX: -155,
      tokenY: -24,
      tokenSize: 559,
      forIds: ["NTA6MzI2OjE3MQ", "NTg6MzI2OjIxOQ", "NTg6OTk6MTQ3"],
    }),
    new ModuleNpc({
      id: "npc16",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.MWQmOXxGcbaMsXDD",
      page: 53,
      width: 932,
      height: 1040,
      tokenX: -190,
      tokenY: -124,
      tokenSize: 452,
      forIds: ["NTI6MzI2OjUwNw"],
    }),
    new ModuleNpc({
      id: "npc17",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.ZtSb3mHZ5sD2uqHd",
      page: 54,
      width: 1086,
      height: 1034,
      tokenX: 54,
      tokenY: -28,
      tokenSize: 890,
      forIds: ["NTQ6MzI2OjY5OQ"],
    }),
    new ModuleNpc({
      id: "npc18",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.T3UVfAfcvAMe9rih",
      page: 62,
      width: 849,
      height: 1264,
      tokenX: -260,
      tokenY: -193,
      tokenSize: 424,
      forIds: ["NjE6Njg6MzUx", "NjM6Njg6MzYz"],
    }),
    new ModuleNpc({
      id: "npc19",
      name: {
        page: 64,
        x: 301.7387,
        y: 429.1729,
      },
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.sUGKrcx7kbHkWnwG",
      page: 64,
      width: 479,
      height: 540,
      tokenX: 62,
      tokenY: 87,
      tokenSize: 624,
      forIds: ["NjM6Njg6MzE1"],
    }),
    new ModuleNpc({
      id: "npc20",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.NwNu2yvMnbvPvpY8",
      page: 68,
      width: 845,
      height: 1209,
      tokenX: -249,
      tokenY: -83,
      tokenSize: 341,
      forIds: ["MTM6Njg6NjI3"],
    }),
    new ModuleNpc({
      id: "npc21",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 71,
        x: 387.1591,
        y: 94.8905,
      },
      page: 71,
      width: 800,
      height: 1117,
      tokenX: -172,
      tokenY: -112,
      tokenSize: 445,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc22",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.oPXRJxxWrY2kz2qf",
      page: 79,
      width: 840,
      height: 1160,
      tokenX: -184,
      tokenY: -94,
      tokenSize: 404,
      forIds: ["NjM6Njg6NDEx"],
    }),
    new ModuleNpc({
      id: "npc23",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.NK49bh04355Lgz5r",
      page: 81,
      width: 631,
      height: 1096,
      tokenX: -183,
      tokenY: 18,
      tokenSize: 340,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc24",
      actorUuid: "Compendium.pf2e.lost-omens-bestiary.Actor.As0M3PvmrR2055pk",
      page: 82,
      width: 861,
      height: 1e3,
      tokenX: -333,
      tokenY: -106,
      tokenSize: 440,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc25",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.jO2fGZayk4R1AzYK",
      page: 83,
      width: 955,
      height: 790,
      tokenX: -224,
      tokenY: 124,
      tokenSize: 703,
      forIds: ["NDU6Mjk1OjMwMw"],
    }),
    new ModuleNpc({
      id: "npc26",
      actorUuid: "Compendium.pf2e.lost-omens-bestiary.Actor.rayMMWNm61ivtxuU",
      page: 84,
      width: 992,
      height: 1071,
      tokenX: -10,
      tokenY: -57,
      tokenSize: 511,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc27",
      actorUuid: "Compendium.pf2e.lost-omens-bestiary.Actor.rrJqsVeBKizuyqRY",
      page: 84,
      width: 992,
      height: 1071,
      tokenX: -435,
      tokenY: -314,
      tokenSize: 371,
      forIds: ["NDU6Njg6NDM1"],
    }),
    new ModuleNpc({
      id: "npc28",
      actorUuid: "Compendium.pf2e.lost-omens-bestiary.Actor.TfEGDGqUk3LpokZZ",
      page: 86,
      width: 803,
      height: 1074,
      tokenX: -140,
      tokenY: 58,
      tokenSize: 598,
      forIds: ["NTU6Njg6NDM1", "NTE6Njg6Mjc5"],
    }),
    new ModuleNpc({
      id: "npc29",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.X2edjYEqAHsdQc6L",
      page: 88,
      width: 967,
      height: 919,
      tokenX: -331,
      tokenY: -69,
      tokenSize: 547,
      forIds: ["NDA6MzI2OjM4Nw"],
    }),
    new ModuleNpc({
      id: "npc30",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-3.Actor.dtkq45qf18bENXBd",
      page: 90,
      width: 694,
      height: 1143,
      tokenX: -129,
      tokenY: 57,
      tokenSize: 387,
      forIds: ["Mzg6OTk6Njk5"],
    }),
    new ModuleNpc({
      id: "npc31",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.YdLf7y2ZHudpjWx9",
      page: 91,
      width: 840,
      height: 1124,
      tokenX: 142,
      tokenY: 0,
      tokenSize: 1012,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc32",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-3.Actor.CYzFHz8ZbU270z9N",
      page: 92,
      width: 1236,
      height: 922,
      tokenX: -44,
      tokenY: 20,
      tokenSize: 620,
      forIds: ["NTM6Mjk1OjU3OQ"],
    }),
    new ModuleNpc({
      id: "npc33",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.Fyzj8WVOlsuTWTTU",
      page: 93,
      width: 794,
      height: 1120,
      tokenX: -361,
      tokenY: -181,
      tokenSize: 364,
      forIds: ["NTA6OTk6NDcx", "NDQ6MzI2OjM3NQ"],
    }),
    new ModuleNpc({
      id: "npc34",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.ajt6K2LyAxhJ8GuP",
      label: "BPB",
      forIds: ["NDI6OTk6NTMx"],
    }),
    new ModuleNpc({
      id: "npc35",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.EH84J9FedbK3ax50",
      label: "BW",
      forIds: ["NTU6Njg6NTU1"],
    }),
    new ModuleNpc({
      id: "npc36",
      actorUuid: "Compendium.pf2e.lost-omens-bestiary.Actor.QUyqY6JiZNkEyTnd",
      label: "CB",
      forIds: ["NTg6MzI2OjE3MQ", "NTE6Mjk1OjUzMQ", "NTU6Njg6NDk1"],
    }),
    new ModuleNpc({
      id: "npc37",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.ScNPruIwcIJNuSHb",
      label: "C",
      forIds: ["NjE6Mjk1OjE4Mw"],
    }),
    new ModuleNpc({
      id: "npc38",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.skz8n8N9GEQY2c90",
      label: "CG",
      forIds: ["NTg6MzI2OjQ3MQ"],
    }),
    new ModuleNpc({
      id: "npc39",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.BudeoAoJ4dOxjj0K",
      label: "DS",
      forIds: ["NTc6Njg6NjI3"],
    }),
    new ModuleNpc({
      id: "npc40",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.h7apR3QSxVZmy2nt",
      label: "DS",
      forIds: ["NjM6Mjk1OjY5OQ"],
    }),
    new ModuleNpc({
      id: "npc41",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.1x0BdpVQLX7o3rrA",
      label: "E",
      forIds: ["MzU6Mjk1OjQ5NQ"],
    }),
    new ModuleNpc({
      id: "npc42",
      actorUuid: "Compendium.pf2e.lost-omens-bestiary.Actor.rVnJUXPgAPCeW1tS",
      label: "E",
      forIds: ["NjE6Mjk1OjQ4Mw"],
    }),
    new ModuleNpc({
      id: "npc43",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.5DwiLZJf6KxpIjDq",
      label: "GA",
      forIds: ["NDA6MzI2OjQzNQ"],
    }),
    new ModuleNpc({
      id: "npc44",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.B7b0alybm5U34nFV",
      label: "NW",
      forIds: ["NTk6Njg6OTk"],
    }),
    new ModuleNpc({
      id: "npc45",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.aYDbWuOj66nve8r4",
      label: "JD",
      forIds: ["NDA6OTk6NDcx"],
    }),
    new ModuleNpc({
      id: "npc46",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.JumkQRD1Cn4TF5XS",
      label: "N",
      forIds: ["NTU6Mjk1OjI3OQ"],
    }),
    new ModuleNpc({
      id: "npc47",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.a4LgD3NrgkiINvru",
      label: "Q",
      forIds: ["NDM6MzcxOjQ4Mw"],
    }),
    new ModuleNpc({
      id: "npc48",
      actorUuid: "Compendium.pf2e.hazards.Actor.7VqibTAEXXX6PIhh",
      label: "SB",
      forIds: ["MzM6Njg6NjYz"],
    }),
    new ModuleNpc({
      id: "npc49",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.xC6v5Ef8mDt05QFK",
      label: "D",
      forIds: ["NTg6OTk6MTk1"],
    }),
    new ModuleNpc({
      id: "npc50",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.ciLdEf6sld8h2a2j",
      label: "V",
      forIds: ["NTU6Njg6Mzc1"],
    }),
    new ModuleNpc({
      id: "npc51",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.4cPw8hZwW6uvyzvh",
      label: "V",
      forIds: ["NDk6Mjk1OjI3OQ"],
    }),
    new ModuleNpc({
      id: "npc52",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.VQiBBu6D2srK6Fmj",
      label: "WotD",
      forIds: ["NTk6Mjk1OjMwMw"],
    }),
  ];
  journalPages = [
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
          id: "ODo5OTo0NTk",
        },
        {
          id: "ODozMjY6NTU1",
        },
        {
          id: "OTo2ODo2MTU",
        },
        {
          id: "MTA6MTA4OjY5OQ",
        },
        {
          id: "OTo2ODoxNzE",
        },
        {
          id: "MTA6MzI2OjQzNQ",
        },
        {
          id: "MTI6OTk6MjMx",
        },
        {
          id: "MTQ6OTk6NTA3",
        },
        {
          id: "MTU6Njg6NjM5",
        },
        {
          id: "MTU6MzA0OjY4Nw",
        },
        {
          id: "MTU6Njg6MjQz",
        },
        {
          id: "MTY6MzI2OjY2Mw",
        },
        {
          id: "MTg6MTA4OjY4Nw",
        },
        {
          id: "MTc6Njg6MjQz",
        },
        {
          id: "MTg6MzI2OjU1NQ",
        },
        {
          id: "MTg6MzI2OjM3NQ",
        },
        {
          id: "MTk6Njg6MTIz",
        },
        {
          id: "MjE6MzA0OjY4Nw",
        },
        {
          id: "MjA6MzkwOjQ3MQ",
        },
        {
          id: "MjI6Mzk2OjE1OQ",
        },
        {
          id: "MjM6Mjk1OjQ0Nw",
        },
        {
          id: "MjM6Mjk1OjMyNw",
        },
        {
          id: "MjQ6MzI2Ojk5",
        },
        {
          id: "MjU6Njg6OTk",
        },
        {
          id: "MjY6OTk6NDQ3",
        },
      ],
    },
    {
      name: "Chapter 2",
      pages: [
        {
          id: "Mjg6MjA5OjM1OA",
        },
        {
          id: "Mjk6MzcxOjY5OQ",
        },
        {
          id: "Mjg6OTk6MTU5",
        },
        {
          id: "Mjk6Njg6MzUx",
        },
        {
          id: "MzA6MzI2OjY1MQ",
        },
        {
          id: "MzE6Mjk1OjU1NQ",
        },
        {
          id: "MzE6Mjk1OjI1NQ",
        },
        {
          id: "MzI6OTk6MTU5",
        },
        {
          id: "MzI6OTk6MTEx",
        },
        {
          id: "MzI6MzI2OjMyNw",
        },
        {
          id: "MzU6Njg6Njk5",
        },
        {
          id: "MzU6Mjk1OjMxNQ",
        },
        {
          id: "MzY6MzI2OjMxNQ",
        },
        {
          id: "Mzg6OTk6NTMx",
        },
        {
          id: "NDA6OTk6Njk5",
        },
        {
          id: "NDA6OTk6MjE5",
        },
        {
          id: "NDA6MzI2OjEyMw",
        },
        {
          id: "NDM6Njg6MzI3",
        },
        {
          id: "NDQ6OTk6MzUx",
        },
        {
          id: "NDQ6MzI2OjIwNw",
        },
        {
          id: "NDQ6MzI2OjE1OQ",
        },
        {
          id: "NDQ6MzI2OjExMQ",
        },
        {
          id: "NDU6Njg6MjE5",
        },
      ],
    },
    {
      name: "Chapter 3",
      pages: [
        {
          id: "NDY6MjA5OjM1OQ",
        },
        {
          id: "NDc6MzcxOjY5OQ",
        },
        {
          id: "NDc6Njg6Njk5",
        },
        {
          id: "NDc6Njg6NDQ3",
        },
        {
          id: "NDk6Njg6NTMx",
        },
        {
          id: "NDk6Njg6MTIz",
        },
        {
          id: "NDk6Mjk1OjU0Mw",
        },
        {
          id: "NDk6Mjk1OjExMQ",
        },
        {
          id: "NTA6MzI2OjYwMw",
        },
        {
          id: "NTE6Njg6Njk5",
        },
        {
          id: "NTE6Njg6MTU5",
        },
        {
          id: "NTE6Mjk1OjQyMw",
        },
        {
          id: "NTI6OTk6Njk5",
        },
        {
          id: "NTM6Njg6Mjkx",
        },
        {
          id: "NTQ6OTk6NTQz",
        },
        {
          id: "NTQ6MzI2OjQ3MQ",
        },
        {
          id: "NTU6Mjk1OjY5OQ",
        },
      ],
    },
    {
      name: "Chapter 4",
      pages: [
        {
          id: "NTY6MjEyOjM1Nw",
        },
        {
          id: "NTc6MzcxOjY5OQ",
        },
        {
          id: "NTY6MzI2OjI3OQ",
        },
        {
          id: "NTY6MzI2OjIxOQ",
        },
        {
          id: "NTc6Njg6MjQz",
        },
        {
          id: "NTg6MzI2OjY5OQ",
        },
        {
          id: "NTg6MzI2OjQyMw",
        },
        {
          id: "NTg6MzI2OjExMQ",
        },
        {
          id: "NTk6Njg6Mzc1",
        },
        {
          id: "NTk6Mjk1OjYzOQ",
        },
        {
          id: "NjE6Njg6NjE1",
        },
        {
          id: "NjE6Mjk1OjQzNQ",
        },
        {
          id: "NjE6Mjk1OjEzNQ",
        },
        {
          id: "NjQ6OTk6Njk5",
        },
        {
          id: "NjQ6Mzk4OjYxNQ",
        },
        {
          id: "NjU6Mjk1OjYyNw",
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
      ],
    },
  ];
  combines = [];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "CULT OF CINDERS" &&
        t.fontId === "RomicStd-Bold:53.3514",
    );
  }
  finalize(moduleData) {}
}
