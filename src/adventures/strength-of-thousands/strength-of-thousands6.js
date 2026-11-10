import { StrengthOfThousandsBase } from "./base.js";
import { AdventureImage, LabelImage } from "../../core/images.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class StrengthOfThousands6 extends StrengthOfThousandsBase {
  prefix = "strength-of-thousands-6";
  fullName = "Strength of Thousands - Shadows of the Ancients";
  pages = [
    this.RightSingleColumnWithSidebar(7),
    this.LeftTwoColumn(8),
    this.RightTwoColumnWithRightCutout(9, 490),
    this.LeftTwoColumn(10),
    this.RightTwoColumn(11),
    this.LeftTwoColumnWithMap(12, 340),
    this.RightTwoColumn(13),
    this.LeftTwoColumn(14),
    this.RightTwoColumn(15),
    this.RightTwoColumnWithRightCutout(17, 420),
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
    this.RightSingleColumnWithSidebar(29),
    this.LeftTwoColumnWithMap(30, 350),
    this.RightTwoColumn(31),
    this.RightTwoColumnWithRightCutout(33, 480),
    this.LeftTwoColumn(34),
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
    this.RightTwoColumnWithMap(45, 350),
    this.RightSingleColumnWithSidebar(47),
    this.LeftTwoColumn(48),
    this.RightTwoColumn(49),
    this.RightTwoColumn(51),
    this.LeftTwoColumn(52),
    this.RightTwoColumn(53),
    this.LeftTwoColumn(54),
    this.RightTwoColumn(55),
    this.LeftTwoColumn(56),
    this.RightTwoColumn(57),
    this.LeftTwoColumn(58),
    this.RightTwoColumn(59),
    this.LeftTwoColumn(60),
    this.RightTwoColumnWithMap(61, 350),
    this.RightChapterHeadingPageLayout(63),
    this.LeftTwoColumn(64),
    this.RightTwoColumn(65),
    this.LeftTwoColumn(66),
    this.RightTwoColumn(67),
    this.RightChapterHeadingPageLayout(69),
    this.LeftTwoColumn(70),
    this.RightTwoColumn(71),
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
  ];
  scenes = [
    new ModuleScene({
      name: "map1a",
      canonical: {
        name: "sot6/map1a",
        priority: 0,
      },
      nameInfo: {
        x: 684,
        y: 738.6962,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 1261,
      height: 1637,
      imageLeft: 17,
      imageRight: 1202,
      imageCols: 48,
      imageTop: 7,
      imageBottom: 797,
      imageRows: 32,
      cropLeft: 0,
      cropRight: 1261,
      cropTop: 0,
      cropBottom: 814,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot6-map1a.json",
      journals: [
        {
          x: 1150,
          y: 950,
          id: "NTY6MzI2OjE4Mw",
        },
        {
          x: 1150,
          y: 1250,
          id: "NTg6OTk6NDgz",
        },
        {
          x: 1150,
          y: 1500,
          id: "NTg6MzI2OjYzOQ",
        },
        {
          x: 1150,
          y: 1850,
          id: "NTg6MzI2OjQzNQ",
        },
        {
          x: 1150,
          y: 2150,
          id: "NTg6MzI2OjE3MQ",
        },
      ],
      tokens: [
        {
          id: "npc24",
          x: 900,
          y: 1200,
        },
        {
          id: "npc24",
          x: 900,
          y: 1100,
        },
        {
          id: "npc24",
          x: 1e3,
          y: 1100,
        },
        {
          id: "npc24",
          x: 1e3,
          y: 1200,
        },
        {
          id: "npc29",
          x: 500,
          y: 900,
        },
        {
          id: "npc14",
          x: 1e3,
          y: 1400,
        },
        {
          id: "npc25",
          x: 800,
          y: 1400,
        },
        {
          id: "npc25",
          x: 900,
          y: 1400,
        },
        {
          id: "npc14",
          x: 1e3,
          y: 1900,
        },
        {
          id: "npc24",
          x: 900,
          y: 1800,
        },
        {
          id: "npc24",
          x: 1e3,
          y: 1800,
        },
        {
          id: "npc24",
          x: 900,
          y: 1700,
        },
        {
          id: "npc24",
          x: 1e3,
          y: 1700,
        },
        {
          id: "npc29",
          x: 100,
          y: 1600,
        },
        {
          id: "npc29",
          x: 500,
          y: 1600,
        },
      ],
    }),
    new ModuleScene({
      name: "map1b",
      canonical: {
        name: "sot6/map1b",
        priority: 0,
      },
      nameInfo: {
        x: 684,
        y: 363.36,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 1261,
      height: 1637,
      imageLeft: 18,
      imageRight: 1222,
      imageCols: 28,
      imageTop: 863,
      imageBottom: 1594,
      imageRows: 17,
      cropLeft: 0,
      cropRight: 1261,
      cropTop: 835,
      cropBottom: 1637,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot6-map1b.json",
      journals: [
        {
          x: 750,
          y: 550,
          id: "NTk6Njg6MjQz",
        },
      ],
      tokens: [
        {
          id: "npc30",
          x: 1200,
          y: 1e3,
        },
        {
          id: "npc32",
          x: 2600,
          y: 600,
        },
        {
          id: "npc31",
          x: 1500,
          y: 500,
        },
      ],
    }),
    new ModuleScene({
      name: "map2",
      canonical: {
        name: "sot6/map2",
        priority: 0,
      },
      nameInfo: {
        x: 99,
        y: 388.3319,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 12,
      width: 1232,
      height: 841,
      imageLeft: 39,
      imageRight: 1196,
      imageCols: 33,
      imageTop: 8,
      imageBottom: 814,
      imageRows: 23,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot6-map2.json",
      journals: [
        {
          x: 950,
          y: 650,
          id: "MTI6MzI2OjE5NQ",
        },
        {
          x: 2250,
          y: 1500,
          id: "MTM6Mjk1OjQ4Mw",
        },
        {
          x: 2200,
          y: 1200,
          id: "MTQ6OTk6Mjc5",
        },
        {
          x: 3350,
          y: 850,
          id: "MTU6Njg6Njk5",
        },
        {
          x: 3350,
          y: 1650,
          id: "MTU6Njg6NTMx",
        },
        {
          x: 3350,
          y: 2450,
          id: "MTc6Njg6NjE1",
        },
        {
          x: 950,
          y: 750,
          id: "MTM6Mjk1OjY5OQ",
        },
      ],
      tokens: [
        {
          id: "npc36",
          x: 3100,
          y: 2400,
        },
      ],
    }),
    new ModuleScene({
      name: "map3a",
      canonical: {
        name: "sot6/map3a",
        priority: 0,
      },
      nameInfo: {
        x: 382,
        y: 738.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 16,
      width: 1216,
      height: 1636,
      imageLeft: 11,
      imageRight: 1188,
      imageCols: 51,
      imageTop: 27,
      imageBottom: 949,
      imageRows: 40,
      cropLeft: 0,
      cropRight: 1216,
      cropTop: 0,
      cropBottom: 1017,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot6-map3a.json",
      journals: [
        {
          x: 1450,
          y: 1350,
          id: "MTc6Mjk1OjE5NQ",
        },
        {
          x: 2250,
          y: 1950,
          id: "MTg6OTk6MjA3",
        },
        {
          x: 1450,
          y: 1450,
          id: "MTg6OTk6NDk1",
        },
        {
          x: 3650,
          y: 2350,
          id: "MTk6Njg6Mzk5",
        },
        {
          x: 5200,
          y: 2300,
          id: "MTk6Mjk1OjU0Mw",
        },
        {
          x: 5500,
          y: 4700,
          id: "MjE6Mjk1OjM2Mw",
        },
        {
          x: 3600,
          y: 4800,
          id: "MjM6Njg6NjI3",
        },
      ],
      tokens: [
        {
          id: "npc39",
          x: 2400,
          y: 1500,
        },
        {
          id: "npc39",
          x: 2400,
          y: 2500,
        },
        {
          id: "npc23",
          x: 3500,
          y: 2200,
        },
        {
          id: "npc2",
          x: 5100,
          y: 3400,
        },
        {
          id: "npc44",
          x: 6e3,
          y: 3e3,
        },
        {
          id: "npc3",
          x: 5300,
          y: 4800,
        },
        {
          id: "npc4",
          x: 5300,
          y: 4400,
        },
        {
          id: "npc42",
          x: 3e3,
          y: 4800,
        },
        {
          id: "npc4",
          x: 3300,
          y: 4500,
        },
        {
          id: "npc4",
          x: 3300,
          y: 4700,
        },
      ],
    }),
    new ModuleScene({
      name: "map3b",
      canonical: {
        name: "sot6/map3b",
        priority: 0,
      },
      nameInfo: {
        x: 71,
        y: 279,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 16,
      width: 1216,
      height: 1636,
      imageLeft: 127,
      imageRight: 1118,
      imageCols: 43,
      imageTop: 1093,
      imageBottom: 1462,
      imageRows: 16,
      cropLeft: 0,
      cropRight: 600,
      cropTop: 1032,
      cropBottom: 1636,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot6-map3b.json",
      journals: [
        {
          x: 750,
          y: 850,
          id: "MTc6Mjk1OjE5NQ",
        },
        {
          x: 2050,
          y: 1550,
          id: "MjQ6MzI2OjI5MQ",
        },
        {
          x: 750,
          y: 950,
          id: "MTg6OTk6NDk1",
        },
      ],
      tokens: [],
    }),
    new ModuleScene({
      name: "map3c",
      canonical: {
        name: "sot6/map3c",
        priority: 0,
      },
      nameInfo: {
        x: 364,
        y: 279,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 16,
      width: 1216,
      height: 1636,
      imageLeft: 127,
      imageRight: 1118,
      imageCols: 43,
      imageTop: 1093,
      imageBottom: 1462,
      imageRows: 16,
      cropLeft: 600,
      cropRight: 1216,
      cropTop: 1032,
      cropBottom: 1636,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot6-map3c.json",
      journals: [
        {
          x: 750,
          y: 750,
          id: "MTc6Mjk1OjE5NQ",
        },
        {
          x: 750,
          y: 850,
          id: "MTg6OTk6NDk1",
        },
        {
          x: 2200,
          y: 2200,
          id: "Mjc6Mjk1OjY1MQ",
        },
        {
          x: 2200,
          y: 1300,
          id: "MjU6Njg6NTA3",
        },
      ],
      tokens: [
        {
          id: "npc5",
          x: 1900,
          y: 1200,
        },
        {
          id: "npc6",
          x: 2300,
          y: 1300,
        },
        {
          id: "npc27",
          x: 2100,
          y: 1500,
        },
      ],
    }),
    new ModuleScene({
      name: "map4",
      canonical: {
        name: "sot6/map4",
        priority: 0,
      },
      nameInfo: {
        x: 423.75,
        y: 375,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 30,
      width: 1232,
      height: 841,
      imageLeft: 0,
      imageRight: 1232,
      imageCols: 10,
      imageTop: 0,
      imageBottom: 1232,
      imageRows: 10,
      offsetX: 0,
      offsetY: 0,
      gridType: "gridless",
      globalLight: true,
      detailsFile: "/sot/maps/sot6-map4.json",
      journals: [
        {
          x: 744.73,
          y: 654.38,
          id: "MzM6Njg6Njk5",
        },
        {
          x: 437.25,
          y: 640.36,
          id: "MzU6Mjk1OjU0Mw",
        },
        {
          x: 454.07,
          y: 445.97,
          id: "Mzc6Mjk1OjM1MQ",
        },
        {
          x: 839.12,
          y: 502.05,
          id: "NDA6MzI2OjQxMQ",
        },
        {
          x: 1077.44,
          y: 568.4,
          id: "NDQ6OTk6NTA3",
        },
      ],
      tokens: [],
    }),
    new ModuleScene({
      name: "map6a",
      canonical: {
        name: "sot6/map6a",
        priority: 0,
      },
      nameInfo: {
        x: 45,
        y: 577.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 32,
      width: 1216,
      height: 1611,
      imageLeft: 11,
      imageRight: 1190,
      imageCols: 31,
      imageTop: 7,
      imageBottom: 1602,
      imageRows: 42,
      cropLeft: 0,
      cropRight: 464,
      cropTop: 0,
      cropBottom: 456,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot6-map6a.json",
      journals: [
        {
          x: 1200,
          y: 1200,
          id: "MzM6Njg6NTc5",
        },
        {
          x: 700,
          y: 700,
          id: "MzM6Mjk1OjQyMw",
        },
        {
          x: 350,
          y: 350,
          id: "MzM6Njg6Njk5",
        },
      ],
      tokens: [
        {
          id: "npc17",
          x: 800,
          y: 1300,
        },
        {
          id: "npc17",
          x: 1100,
          y: 600,
        },
        {
          id: "npc16",
          x: 700,
          y: 1e3,
        },
        {
          id: "npc16",
          x: 1200,
          y: 1400,
        },
        {
          id: "npc16",
          x: 1400,
          y: 1100,
        },
        {
          id: "npc16",
          x: 1400,
          y: 900,
        },
      ],
    }),
    new ModuleScene({
      name: "map6b",
      canonical: {
        name: "sot6/map6b",
        priority: 0,
      },
      nameInfo: {
        x: 256,
        y: 562.6681,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 32,
      width: 1216,
      height: 1611,
      imageLeft: 11,
      imageRight: 1190,
      imageCols: 31,
      imageTop: 7,
      imageBottom: 1602,
      imageRows: 42,
      cropLeft: 476,
      cropRight: 1216,
      cropTop: 0,
      cropBottom: 456,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot6-map6b.json",
      journals: [
        {
          x: 1850,
          y: 950,
          id: "MzU6Mjk1OjM2Mw",
        },
        {
          x: 1450,
          y: 850,
          id: "MzY6MzI2OjM3NQ",
        },
        {
          x: 750,
          y: 750,
          id: "Mzc6Njg6MzI3",
        },
        {
          x: 550,
          y: 450,
          id: "MzU6Mjk1OjU0Mw",
        },
      ],
      tokens: [
        {
          id: "npc18",
          x: 900,
          y: 700,
        },
        {
          id: "npc18",
          x: 700,
          y: 800,
        },
        {
          id: "npc18",
          x: 1e3,
          y: 600,
        },
        {
          id: "npc17",
          x: 2100,
          y: 800,
        },
        {
          id: "npc16",
          x: 1900,
          y: 800,
        },
        {
          id: "npc16",
          x: 2e3,
          y: 1100,
        },
        {
          id: "npc16",
          x: 1800,
          y: 1300,
        },
        {
          id: "npc16",
          x: 1500,
          y: 1100,
        },
      ],
    }),
    new ModuleScene({
      name: "map6c",
      canonical: {
        name: "sot6/map6c",
        priority: 0,
      },
      nameInfo: {
        x: 59,
        y: 330.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 32,
      width: 1216,
      height: 1611,
      imageLeft: 11,
      imageRight: 1190,
      imageCols: 31,
      imageTop: 7,
      imageBottom: 1602,
      imageRows: 42,
      cropLeft: 0,
      cropRight: 1216,
      cropTop: 469,
      cropBottom: 951,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot6-map6c.json",
      journals: [
        {
          x: 750,
          y: 450,
          id: "Mzc6Mjk1OjM1MQ",
        },
        {
          x: 1550,
          y: 550,
          id: "Mzg6OTk6NDcx",
        },
        {
          x: 1950,
          y: 1150,
          id: "Mzk6Njg6NTQz",
        },
        {
          x: 2200,
          y: 750,
          id: "Mzk6Mjk1OjU0Mw",
        },
        {
          x: 3500,
          y: 1e3,
          id: "NDA6OTk6NjYz",
        },
      ],
      tokens: [
        {
          id: "npc40",
          x: 2e3,
          y: 1200,
        },
        {
          id: "npc40",
          x: 1800,
          y: 1200,
        },
        {
          id: "npc40",
          x: 1800,
          y: 1e3,
        },
        {
          id: "npc40",
          x: 2e3,
          y: 1e3,
        },
        {
          id: "npc10",
          x: 3300,
          y: 800,
        },
      ],
    }),
    new ModuleScene({
      name: "map6d",
      canonical: {
        name: "sot6/map6d",
        priority: 0,
      },
      nameInfo: {
        x: 266,
        y: 291,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 32,
      width: 1216,
      height: 1611,
      imageLeft: 11,
      imageRight: 1190,
      imageCols: 31,
      imageTop: 7,
      imageBottom: 1602,
      imageRows: 42,
      cropLeft: 0,
      cropRight: 766,
      cropTop: 964,
      cropBottom: 1611,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot6-map6d.json",
      journals: [
        {
          x: 550,
          y: 550,
          id: "NDA6MzI2OjQxMQ",
        },
        {
          x: 550,
          y: 650,
          id: "NDE6Njg6Njk5",
        },
        {
          x: 1050,
          y: 1650,
          id: "NDE6Njg6Mjc5",
        },
        {
          x: 1750,
          y: 1550,
          id: "NDE6Mjk1OjY2Mw",
        },
        {
          x: 1700,
          y: 1300,
          id: "NDI6OTk6NjUx",
        },
        {
          x: 1150,
          y: 750,
          id: "NDM6Njg6NjM5",
        },
      ],
      tokens: [
        {
          id: "npc16",
          x: 600,
          y: 500,
        },
        {
          id: "npc16",
          x: 1100,
          y: 800,
        },
        {
          id: "npc16",
          x: 1300,
          y: 500,
        },
        {
          id: "npc16",
          x: 1200,
          y: 600,
        },
        {
          id: "npc16",
          x: 900,
          y: 800,
        },
        {
          id: "npc16",
          x: 700,
          y: 700,
        },
        {
          id: "npc41",
          x: 900,
          y: 500,
        },
        {
          id: "npc11",
          x: 1300,
          y: 1e3,
        },
        {
          id: "npc11",
          x: 1e3,
          y: 1e3,
        },
        {
          id: "npc11",
          x: 1100,
          y: 1e3,
        },
        {
          id: "npc11",
          x: 1500,
          y: 700,
        },
        {
          id: "npc12",
          x: 1600,
          y: 900,
        },
        {
          id: "npc12",
          x: 1100,
          y: 1100,
        },
        {
          id: "npc34",
          x: 1900,
          y: 1400,
        },
      ],
    }),
    new ModuleScene({
      name: "map6e",
      canonical: {
        name: "sot6/map6e",
        priority: 0,
      },
      nameInfo: {
        x: 402,
        y: 291,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 32,
      width: 1216,
      height: 1611,
      imageLeft: 11,
      imageRight: 1190,
      imageCols: 31,
      imageTop: 7,
      imageBottom: 1602,
      imageRows: 42,
      cropLeft: 778,
      cropRight: 1216,
      cropTop: 964,
      cropBottom: 1611,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot6-map6e.json",
      journals: [
        {
          x: 250,
          y: 550,
          id: "NDQ6OTk6NTA3",
        },
        {
          x: 750,
          y: 1250,
          id: "NDQ6OTk6Mzc1",
        },
        {
          x: 1250,
          y: 850,
          id: "NDQ6MzI2OjQxMQ",
        },
      ],
      tokens: [
        {
          id: "npc43",
          x: 1100,
          y: 1e3,
        },
      ],
    }),
    new ModuleScene({
      name: "map5a",
      canonical: {
        name: "sot6/map5a",
        priority: 0,
      },
      nameInfo: {
        x: 202,
        y: 405.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 50,
      width: 1216,
      height: 1611,
      imageLeft: 26,
      imageRight: 1207,
      imageCols: 39,
      imageTop: 17,
      imageBottom: 1591,
      imageRows: 52,
      cropLeft: 0,
      cropRight: 596,
      cropTop: 0,
      cropBottom: 800,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot6-map5a.json",
      journals: [
        {
          x: 450,
          y: 750,
          id: "NDk6Mjk1OjI3OQ",
        },
        {
          x: 650,
          y: 2550,
          id: "NDk6Mjk1OjExMQ",
        },
        {
          x: 750,
          y: 1350,
          id: "NTE6Mjk1OjYxNQ",
        },
        {
          x: 1800,
          y: 2350,
          id: "NTE6Mjk1OjQ5NQ",
        },
        {
          x: 1750,
          y: 1400,
          id: "NTI6OTk6Njk5",
        },
      ],
      tokens: [
        {
          id: "npc25",
          x: 1400,
          y: 2900,
        },
        {
          id: "npc25",
          x: 1900,
          y: 2700,
        },
        {
          id: "npc25",
          x: 1300,
          y: 2e3,
        },
        {
          id: "npc25",
          x: 2100,
          y: 1700,
        },
      ],
    }),
    new ModuleScene({
      name: "map5b",
      canonical: {
        name: "sot6/map5b",
        priority: 0,
      },
      nameInfo: {
        x: 319,
        y: 393.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 50,
      width: 1216,
      height: 1611,
      imageLeft: 26,
      imageRight: 1207,
      imageCols: 39,
      imageTop: 17,
      imageBottom: 1591,
      imageRows: 52,
      cropLeft: 609,
      cropRight: 1216,
      cropTop: 0,
      cropBottom: 800,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot6-map5b.json",
      journals: [
        {
          x: 650,
          y: 750,
          id: "NTI6OTk6NDM1",
        },
        {
          x: 1450,
          y: 850,
          id: "NTI6OTk6MTIz",
        },
        {
          x: 850,
          y: 2050,
          id: "NTM6Njg6MzE1",
        },
        {
          x: 2150,
          y: 1750,
          id: "NTM6Mjk1OjY1MQ",
        },
      ],
      tokens: [
        {
          id: "npc24",
          x: 900,
          y: 1800,
        },
        {
          id: "npc24",
          x: 700,
          y: 1800,
        },
        {
          id: "npc24",
          x: 700,
          y: 2200,
        },
        {
          id: "npc24",
          x: 900,
          y: 2300,
        },
        {
          id: "npc24",
          x: 1900,
          y: 1500,
        },
        {
          id: "npc24",
          x: 2200,
          y: 1500,
        },
        {
          id: "npc24",
          x: 2100,
          y: 1800,
        },
        {
          id: "npc38",
          x: 1500,
          y: 1e3,
        },
        {
          id: "npc38",
          x: 1200,
          y: 900,
        },
        {
          id: "npc14",
          x: 1400,
          y: 1100,
        },
      ],
    }),
    new ModuleScene({
      name: "map5c",
      canonical: {
        name: "sot6/map5c",
        priority: 0,
      },
      nameInfo: {
        x: 202,
        y: 366.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 50,
      width: 1216,
      height: 1611,
      imageLeft: 26,
      imageRight: 1207,
      imageCols: 39,
      imageTop: 17,
      imageBottom: 1591,
      imageRows: 52,
      cropLeft: 0,
      cropRight: 596,
      cropTop: 812,
      cropBottom: 1611,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot6-map5c.json",
      journals: [
        {
          x: 450,
          y: 850,
          id: "NTQ6OTk6NDQ3",
        },
        {
          x: 1350,
          y: 1100,
          id: "NTQ6OTk6MjY3",
        },
        {
          x: 1350,
          y: 2e3,
          id: "NTQ6MzI2OjM3NQ",
        },
      ],
      tokens: [
        {
          id: "npc14",
          x: 1e3,
          y: 1300,
        },
        {
          id: "npc14",
          x: 1200,
          y: 1300,
        },
        {
          id: "npc14",
          x: 1500,
          y: 1200,
        },
        {
          id: "npc15",
          x: 900,
          y: 2500,
        },
        {
          id: "npc15",
          x: 1600,
          y: 2200,
        },
      ],
    }),
    new ModuleScene({
      name: "map5d",
      canonical: {
        name: "sot6/map5d",
        priority: 0,
      },
      nameInfo: {
        x: 319,
        y: 366.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 50,
      width: 1216,
      height: 1611,
      imageLeft: 26,
      imageRight: 1207,
      imageCols: 39,
      imageTop: 17,
      imageBottom: 1591,
      imageRows: 52,
      cropLeft: 609,
      cropRight: 1216,
      cropTop: 812,
      cropBottom: 1611,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot6-map5d.json",
      journals: [
        {
          x: 650,
          y: 850,
          id: "NTU6Njg6MTgz",
        },
        {
          x: 950,
          y: 2050,
          id: "NTY6OTk6NjI3",
        },
        {
          x: 1650,
          y: 1750,
          id: "NTY6OTk6MTgz",
        },
        {
          x: 1300,
          y: 1500,
          id: "NTY6MzI2OjQ0Nw",
        },
        {
          x: 2e3,
          y: 1500,
          id: "NTY6MzI2OjQ0Nw",
        },
        {
          x: 1650,
          y: 2200,
          id: "NTY6MzI2OjQ0Nw",
        },
      ],
      tokens: [
        {
          id: "npc21",
          x: 1200,
          y: 1400,
        },
        {
          id: "npc21",
          x: 1600,
          y: 2100,
        },
        {
          id: "npc21",
          x: 1900,
          y: 1400,
        },
        {
          id: "npc37",
          x: 700,
          y: 1500,
        },
        {
          id: "npc37",
          x: 800,
          y: 2e3,
        },
      ],
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 10,
        x: 301.4002,
        y: 430.8161,
      },
      page: 10,
      width: 374,
      height: 520,
      tokenX: 122,
      tokenY: 82,
      tokenSize: 548,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.9dsDwOspNTaUGoem",
      page: 20,
      width: 940,
      height: 1267,
      tokenX: -411,
      tokenY: -73,
      tokenSize: 399,
      forIds: ["MjA6MzYzOjYwMw"],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.NVeGEMmia7sVq7uj",
      page: 23,
      width: 726,
      height: 1289,
      tokenX: -100,
      tokenY: -64,
      tokenSize: 393,
      forIds: ["MjI6OTk6MjE5"],
    }),
    new ModuleNpc({
      id: "npc4",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.DHzm2QFsaGTGgReI",
      page: 24,
      width: 928,
      height: 1334,
      tokenX: -212,
      tokenY: -100,
      tokenSize: 578,
      forIds: ["MjI6MzI2Ojk5", "MjQ6MzQ3OjQxMQ"],
    }),
    new ModuleNpc({
      id: "npc5",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.yBIeXuLhBROG84Ca",
      page: 25,
      width: 663,
      height: 884,
      tokenX: 19,
      tokenY: 88,
      tokenSize: 548,
      forIds: ["MjU6Mjk1OjY5OQ"],
    }),
    new ModuleNpc({
      id: "npc6",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.BsXzS2fooPorzqsV",
      page: 26,
      width: 788,
      height: 1050,
      tokenX: -216,
      tokenY: 35,
      tokenSize: 406,
      forIds: ["MjY6OTk6NjM5"],
    }),
    new ModuleNpc({
      id: "npc7",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 34,
        x: 290.7652,
        y: 444.8161,
      },
      page: 34,
      width: 607,
      height: 607,
      tokenX: 24,
      tokenY: 81,
      tokenSize: 663,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc8",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 36,
        x: 150.6805,
        y: 147.2536,
      },
      page: 36,
      width: 778,
      height: 1162,
      tokenX: -242,
      tokenY: -21,
      tokenSize: 490,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc9",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 38,
        x: 281.2951,
        y: 462.8161,
      },
      page: 38,
      width: 593,
      height: 593,
      tokenX: -42,
      tokenY: 8,
      tokenSize: 593,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc10",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.xfcFXLbadD3KdlHW",
      name: {
        page: 40,
        x: 264.0356,
        y: 99.2536,
      },
      page: 40,
      width: 719,
      height: 909,
      tokenX: 41,
      tokenY: -23,
      tokenSize: 769,
      forIds: ["NDA6MzI2OjYyNw"],
    }),
    new ModuleNpc({
      id: "npc11",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.ju9lwJqoqLLPJswc",
      page: 41,
      width: 703,
      height: 911,
      tokenX: 104,
      tokenY: 0,
      tokenSize: 911,
      forIds: ["NzQ6MzU5OjE4Mw", "NDI6MzI2OjQ1OQ"],
    }),
    new ModuleNpc({
      id: "npc12",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.CXtkMa5cGeAD8uvm",
      page: 42,
      width: 814,
      height: 861,
      tokenX: 24,
      tokenY: 0,
      tokenSize: 861,
      forIds: ["NDI6MzI2OjQxMQ"],
    }),
    new ModuleNpc({
      id: "npc13",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 52,
        x: 304.6501,
        y: 418.3786,
      },
      page: 52,
      width: 612,
      height: 612,
      tokenX: 23,
      tokenY: 75,
      tokenSize: 640,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc14",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.lcxS04lmWsTMn0Te",
      page: 53,
      width: 757,
      height: 965,
      tokenX: -161,
      tokenY: 38,
      tokenSize: 573,
      forIds: [
        "NTI6MzI2OjE4Mw",
        "NTg6MzI2OjUzMQ",
        "NTg6MzI2OjMxNQ",
        "NTQ6MzI2OjQyMw",
      ],
    }),
    new ModuleNpc({
      id: "npc15",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.EYAcaqkQajIbvtLB",
      page: 55,
      width: 859,
      height: 1347,
      tokenX: -75,
      tokenY: -134,
      tokenSize: 647,
      forIds: ["NTQ6MzI2OjEzNQ"],
    }),
    new ModuleNpc({
      id: "npc16",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.jDNrRPE2hTOssJcl",
      page: 74,
      width: 814,
      height: 636,
      tokenX: -73,
      tokenY: 112,
      tokenSize: 814,
      forIds: [
        "NzQ6MzI2OjY5OQ",
        "MzM6Mjk1OjQ3MQ",
        "MzY6MzM4OjQ3MQ",
        "NDM6Mjk1OjQ0Nw",
      ],
    }),
    new ModuleNpc({
      id: "npc17",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.UOXavVdqiOPyB6xa",
      page: 75,
      width: 842,
      height: 861,
      tokenX: -120,
      tokenY: 138,
      tokenSize: 861,
      forIds: ["NzU6Njg6MjA3", "MzY6MzQyOjUxOQ", "MzM6Njg6OTk"],
    }),
    new ModuleNpc({
      id: "npc18",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.eY9eS7CIFXKxyq3q",
      page: 82,
      width: 774,
      height: 1e3,
      tokenX: -179,
      tokenY: 60,
      tokenSize: 468,
      forIds: ["ODI6MjUxOjYxNQ", "Mzc6Mjk1OjU3OQ"],
    }),
    new ModuleNpc({
      id: "npc19",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.BkBwYuqaYBbIsp1b",
      page: 83,
      width: 834,
      height: 962,
      tokenX: -308,
      tokenY: 69,
      tokenSize: 514,
      forIds: ["ODM6Njg6NjI3"],
    }),
    new ModuleNpc({
      id: "npc20",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.vTETJgwDLVK6bKQt",
      page: 84,
      width: 868,
      height: 771,
      tokenX: 24,
      tokenY: 191,
      tokenSize: 952,
      forIds: ["ODQ6MjUxOjU1NQ", "MTQ6OTk6MzI3"],
    }),
    new ModuleNpc({
      id: "npc21",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.eWCArhCIUv1SvIyD",
      page: 85,
      width: 887,
      height: 844,
      tokenX: -23,
      tokenY: 172,
      tokenSize: 971,
      forIds: ["ODU6Njg6NjAz", "NTY6MzI2OjIzMQ"],
    }),
    new ModuleNpc({
      id: "npc22",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.BUzNkswA1EOAtL0z",
      page: 86,
      width: 873,
      height: 932,
      tokenX: -391,
      tokenY: 82,
      tokenSize: 512,
      forIds: ["ODY6MjUxOjU0Mw"],
    }),
    new ModuleNpc({
      id: "npc23",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.T4e7jLh98B40c55m",
      page: 87,
      width: 815,
      height: 951,
      tokenX: 138,
      tokenY: 148,
      tokenSize: 1091,
      forIds: ["ODc6Njg6NTkx", "MTk6Mjk1OjYzOQ"],
    }),
    new ModuleNpc({
      id: "npc24",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.NfDN83AupuDwk33L",
      page: 88,
      width: 699,
      height: 853,
      tokenX: -61,
      tokenY: 116,
      tokenSize: 517,
      forIds: [
        "ODg6MjUxOjUzMQ",
        "NTQ6OTk6NjI3",
        "NTg6OTk6NDEx",
        "NTg6MzI2OjI2Nw",
        "NTM6Mjk1OjY5OQ",
      ],
    }),
    new ModuleNpc({
      id: "npc25",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.sxOuLaNH5VNsRFZf",
      page: 89,
      width: 736,
      height: 963,
      tokenX: -214,
      tokenY: 50,
      tokenSize: 515,
      forIds: ["ODk6Njg6NDU5", "NTg6MzI2OjQ4Mw", "NTE6Mjk1OjE1OQ"],
    }),
    new ModuleNpc({
      id: "npc26",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.4AQPyk3UaGjqmmXx",
      page: 91,
      width: 941,
      height: 1260,
      tokenX: -210,
      tokenY: 42,
      tokenSize: 504,
      forIds: ["OTA6MzI2OjE3MQ", "NDQ6MzI2OjUwNw"],
    }),
    new ModuleNpc({
      id: "npc27",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.yqZqz9sMK8LNolIB",
      page: 93,
      width: 876,
      height: 1181,
      tokenX: -37,
      tokenY: 49,
      tokenSize: 481,
      forIds: ["OTM6Njg6MzYz", "MjY6MzI2OjI1NQ"],
    }),
    new ModuleNpc({
      id: "npc28",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.BUzNkswA1EOAtL0z",
      name: {
        page: 31,
        x: 67.5,
        y: 183,
      },
      label: "S",
      forIds: ["MzE6Njg6MTgz"],
    }),
    new ModuleNpc({
      id: "npc29",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.vMy0FZGQnFwgHWtd",
      label: "AAS",
      forIds: ["NTg6OTk6MzYz", "NTg6MzI2OjIxOQ"],
    }),
    new ModuleNpc({
      id: "npc30",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.wz2788pDzWe52BBE",
      label: "AoH",
      forIds: ["NjA6OTk6NTc5"],
    }),
    new ModuleNpc({
      id: "npc31",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.9FsNuksdQSYN7Cpu",
      label: "AoI",
      forIds: ["NjA6MzI2OjU0Mw"],
    }),
    new ModuleNpc({
      id: "npc32",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.t5ir38Oait0lziq2",
      label: "AoI",
      forIds: ["NjA6OTk6NDM1"],
    }),
    new ModuleNpc({
      id: "npc33",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.DxV2vH17H789bJ6y",
      label: "A",
      forIds: ["NDQ6MzI2OjQ1OQ"],
    }),
    new ModuleNpc({
      id: "npc34",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.3IPLvfez8DzwwNqm",
      label: "T",
      forIds: ["NDI6OTk6Njk5"],
    }),
    new ModuleNpc({
      id: "npc35",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.BkBwYuqaYBbIsp1b",
      name: {
        page: 31,
        x: 67.5,
        y: 135,
      },
      label: "CCT",
      forIds: ["MzE6Njg6MTM1"],
    }),
    new ModuleNpc({
      id: "npc36",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.cPX0NmB242FqSRxa",
      name: {
        page: 17,
        x: 67.5,
        y: 159,
      },
      label: "G",
      forIds: ["MTc6Njg6MTU5"],
    }),
    new ModuleNpc({
      id: "npc37",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.q6PegBHxW3orhjyw",
      label: "IAB",
      forIds: ["NTE6Njg6NTA3", "NTY6OTk6MzAz"],
    }),
    new ModuleNpc({
      id: "npc38",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.GBBVBEAsznP8A5gv",
      label: "L",
      forIds: ["NTI6MzI2OjIzMQ"],
    }),
    new ModuleNpc({
      id: "npc39",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.ryvb9GPRLh3Qz3xZ",
      label: "LAG",
      forIds: ["MTg6MzI2OjQ4Mw"],
    }),
    new ModuleNpc({
      id: "npc40",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.yaDZ0N6t8vOxbqLy",
      label: "M",
      forIds: ["Mzk6Njg6MjU1"],
    }),
    new ModuleNpc({
      id: "npc41",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.MAy066x8JPjIRWyW",
      label: "RQ",
      forIds: ["NDM6Mjk1OjMxNQ"],
    }),
    new ModuleNpc({
      id: "npc42",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.BBY1kxjWhzLDtF8c",
      label: "SW",
      forIds: ["MjM6Njg6MTk1"],
    }),
    new ModuleNpc({
      id: "npc43",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.k0HUy6WdbZUNfG8X",
      label: "TL",
      forIds: ["NDU6Mjk1OjI5MQ"],
    }),
    new ModuleNpc({
      id: "npc44",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.xFzKEbOTulrhOsF4",
      label: "TG",
      forIds: ["MjE6Njg6Mjkx"],
    }),
    new ModuleNpc({
      id: "npc45",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.JRn1QlBUtlU7xjYR",
      label: "VP",
      forIds: ["MTM6Mjk1OjE3MQ"],
    }),
  ];
  journals = [
    new AdventureImage({
      name: "journal1",
      page: 1,
      width: 1259,
      height: 704,
    }),
    new AdventureImage({
      name: "journal2",
      page: 1,
      width: 1261,
      height: 692,
    }),
    new AdventureImage({
      name: "journal3",
      page: 3,
      width: 834,
      height: 411,
    }),
    new AdventureImage({
      name: "journal4",
      page: 4,
      width: 1260,
      height: 1636,
    }),
    new LabelImage({
      name: "journal5",
      page: 9,
      width: 464,
      height: 464,
      label: "OToyMzc6NDgx",
    }),
    new AdventureImage({
      name: "journal6",
      page: 45,
      width: 1259,
      height: 851,
    }),
    new LabelImage({
      name: "journal7",
      page: 57,
      width: 725,
      height: 907,
      label: "NTc6MzIzOjEwNg",
    }),
    new AdventureImage({
      name: "journal8",
      page: 61,
      width: 1259,
      height: 851,
    }),
    new AdventureImage({
      name: "journal9",
      page: 62,
      width: 1259,
      height: 1636,
    }),
    new AdventureImage({
      name: "journal10",
      page: 64,
      width: 532,
      height: 532,
    }),
    new LabelImage({
      name: "journal11",
      page: 66,
      width: 765,
      height: 1370,
      label: "NjY6MTMwOjE4MQ",
    }),
    new LabelImage({
      name: "journal12",
      page: 67,
      width: 803,
      height: 1364,
      label: "Njc6MzkyOjEyMw",
    }),
    new AdventureImage({
      name: "journal13",
      page: 68,
      width: 1259,
      height: 1636,
    }),
    new AdventureImage({
      name: "journal14",
      page: 71,
      width: 936,
      height: 1298,
    }),
    new AdventureImage({
      name: "journal15",
      page: 72,
      width: 768,
      height: 954,
    }),
    new AdventureImage({
      name: "journal16",
      page: 76,
      width: 1259,
      height: 1636,
    }),
    new LabelImage({
      name: "journal17",
      page: 78,
      width: 501,
      height: 501,
      label: "Nzg6MjcxOjM5Mw",
    }),
    new LabelImage({
      name: "journal18",
      page: 79,
      width: 415,
      height: 415,
      label: "Nzk6MjU1OjU1OQ",
    }),
    new LabelImage({
      name: "journal19",
      page: 79,
      width: 408,
      height: 408,
      label: "Nzk6MjQzOjI5MQ",
    }),
    new LabelImage({
      name: "journal20",
      page: 81,
      width: 851,
      height: 1228,
      label: "ODE6NDI5OjExMQ",
    }),
  ];
  journalPages = [
    {
      name: "Chapter 1",
      pages: [
        {
          id: "NzoxMzg6NjQ5",
        },
        {
          id: "NzozNzE6NTQz",
        },
        {
          id: "NzozNzE6MzI3",
        },
        {
          id: "OTozMTE6Njk5",
        },
        {
          id: "MTc6MzExOjY5OQ",
        },
        {
          id: "Nzo2ODoyNDM",
        },
        {
          id: "OToyOTU6MzAz",
        },
        {
          id: "MTI6MzI2OjE5NQ",
        },
        {
          id: "MTM6Mjk1OjY5OQ",
        },
        {
          id: "MTM6Mjk1OjQ4Mw",
        },
        {
          id: "MTQ6OTk6Mjc5",
        },
        {
          id: "MTU6Njg6Njk5",
        },
        {
          id: "MTU6Njg6NTMx",
        },
        {
          id: "MTc6Njg6NjE1",
        },
        {
          id: "MTc6Mjk1OjE5NQ",
        },
        {
          id: "MTg6OTk6NDk1",
        },
        {
          id: "MTg6OTk6MjA3",
        },
        {
          id: "MTk6Njg6Mzk5",
        },
        {
          id: "MTk6Mjk1OjU0Mw",
        },
        {
          id: "MjE6Mjk1OjM2Mw",
        },
        {
          id: "MjM6Njg6NjI3",
        },
        {
          id: "MjQ6MzI2OjI5MQ",
        },
        {
          id: "MjU6Njg6NTA3",
        },
        {
          id: "Mjc6Mjk1OjY1MQ",
        },
      ],
    },
    {
      name: "Chapter 2",
      pages: [
        {
          id: "Mjk6MTk2OjY4Mg",
        },
        {
          id: "Mjk6MzcxOjU0Mw",
        },
        {
          id: "Mjk6MzcxOjMxNQ",
        },
        {
          id: "MzM6MzExOjY5OQ",
        },
        {
          id: "MzA6OTk6MzM5",
        },
        {
          id: "MzA6MzI2OjE3MQ",
        },
        {
          id: "MzE6Mjk1OjY2Mw",
        },
        {
          id: "MzM6Njg6Njk5",
        },
        {
          id: "MzM6Njg6NTc5",
        },
        {
          id: "MzM6Mjk1OjQyMw",
        },
        {
          id: "MzQ6MzI2OjE5NQ",
        },
        {
          id: "MzU6Njg6NDQ3",
        },
        {
          id: "MzU6Mjk1OjU0Mw",
        },
        {
          id: "MzU6Mjk1OjM2Mw",
        },
        {
          id: "MzY6MzI2OjM3NQ",
        },
        {
          id: "Mzc6Njg6MzI3",
        },
        {
          id: "Mzc6Mjk1OjM1MQ",
        },
        {
          id: "Mzg6OTk6NDcx",
        },
        {
          id: "Mzk6Njg6NTQz",
        },
        {
          id: "Mzk6Mjk1OjU0Mw",
        },
        {
          id: "NDA6OTk6NjYz",
        },
        {
          id: "NDA6MzI2OjQxMQ",
        },
        {
          id: "NDE6Njg6Njk5",
        },
        {
          id: "NDE6Njg6Mjc5",
        },
        {
          id: "NDE6Mjk1OjY2Mw",
        },
        {
          id: "NDI6OTk6NjUx",
        },
        {
          id: "NDM6Njg6NjM5",
        },
        {
          id: "NDQ6OTk6NTA3",
        },
        {
          id: "NDQ6OTk6Mzc1",
        },
        {
          id: "NDQ6MzI2OjQxMQ",
        },
      ],
    },
    {
      name: "Chapter 3",
      pages: [
        {
          id: "NDc6MTkxOjY4MQ",
        },
        {
          id: "NDc6MzcxOjU0Mw",
        },
        {
          id: "NDc6MzcxOjIxOQ",
        },
        {
          id: "NDc6Njg6Mzg3",
        },
        {
          id: "NDg6OTk6NTU1",
        },
        {
          id: "NDg6MzI2OjYxNQ",
        },
        {
          id: "NDg6MzI2OjEyMw",
        },
        {
          id: "NDk6Njg6MjU1",
        },
        {
          id: "NDk6Mjk1OjI3OQ",
        },
        {
          id: "NDk6Mjk1OjExMQ",
        },
        {
          id: "NTE6Mjk1OjYxNQ",
        },
        {
          id: "NTE6Mjk1OjQ5NQ",
        },
        {
          id: "NTI6OTk6Njk5",
        },
        {
          id: "NTI6OTk6NDM1",
        },
        {
          id: "NTI6OTk6MTIz",
        },
        {
          id: "NTM6Njg6MzE1",
        },
        {
          id: "NTM6Mjk1OjY1MQ",
        },
        {
          id: "NTQ6OTk6NTc5",
        },
        {
          id: "NTQ6OTk6NDQ3",
        },
        {
          id: "NTQ6OTk6MjY3",
        },
        {
          id: "NTQ6MzI2OjM3NQ",
        },
        {
          id: "NTU6Njg6MTgz",
        },
        {
          id: "NTY6OTk6NjI3",
        },
        {
          id: "NTY6OTk6MTgz",
        },
        {
          id: "NTY6MzI2OjQ0Nw",
        },
        {
          id: "NTY6MzI2OjE4Mw",
        },
        {
          id: "NTg6OTk6NDgz",
        },
        {
          id: "NTg6MzI2OjYzOQ",
        },
        {
          id: "NTg6MzI2OjQzNQ",
        },
        {
          id: "NTg6MzI2OjE3MQ",
        },
        {
          id: "NTk6Njg6MjQz",
        },
        {
          id: "NjA6MzI2OjQ0Nw",
        },
        {
          id: "NjE6Njg6MzAz",
        },
      ],
    },
    {
      name: "Back Matter",
      pages: [
        {
          id: "NjM6OTE6NjQx",
        },
        {
          id: "NjM6Njg6MzM5",
        },
        {
          id: "NjM6Njg6MjU1",
        },
        {
          id: "NjQ6OTk6Njk5",
        },
        {
          id: "NjQ6OTk6MTgz",
        },
        {
          id: "NjU6Njg6Njk5",
        },
        {
          id: "NjU6Njg6MjQz",
        },
        {
          id: "NjU6Njg6MTk1",
        },
        {
          id: "NjU6Mjk1OjI1NQ",
        },
        {
          id: "NjY6MzUwOjQ5NQ",
        },
        {
          id: "Njc6Njg6NDk1",
        },
        {
          id: "Njk6Njk6NjQx",
        },
        {
          id: "Njk6Njg6MjMx",
        },
        {
          id: "Njk6Mjk1OjQ3MQ",
        },
        {
          id: "Njk6Mjk1OjMwMw",
        },
        {
          id: "Njk6Mjk1Ojk5",
        },
        {
          id: "NzA6OTk6NTMx",
        },
        {
          id: "NzA6OTk6Mzg3",
        },
        {
          id: "NzA6OTk6MTgz",
        },
        {
          id: "NzA6MzI2OjU1NQ",
        },
        {
          id: "NzA6MzI2OjM4Nw",
        },
        {
          id: "NzE6Njg6NTA3",
        },
        {
          id: "NzE6Mjk1OjY5OQ",
        },
        {
          id: "NzI6OTk6MjU1",
        },
        {
          id: "NzI6MzI2OjY5OQ",
        },
        {
          id: "NzM6Njg6Njk5",
        },
        {
          id: "NzM6Njg6NTMx",
        },
        {
          id: "NzM6Njg6MjA3",
        },
        {
          id: "NzM6Mjk1OjQ0Nw",
        },
        {
          id: "NzQ6OTk6Njk5",
        },
        {
          id: "NzQ6OTk6NDQ3",
        },
        {
          id: "NzQ6MzI2OjI5MQ",
        },
        {
          id: "NzU6Njg6Mzg3",
        },
        {
          id: "Nzc6MTQ5OjY2OA",
        },
        {
          id: "Nzc6Mjk1OjIzMQ",
        },
        {
          id: "Nzc6Mjk1OjE1OQ",
        },
        {
          id: "Nzg6OTk6MjE5",
        },
        {
          id: "Nzk6Njg6NjUx",
        },
        {
          id: "Nzk6MzMzOjQxMQ",
        },
        {
          id: "ODA6OTk6NTE5",
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
          id: "ODQ6MjUxOjYzOQ",
        },
        {
          id: "ODQ6Mzk3OjI3OQ",
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
          id: "ODk6Njg6NTE5",
        },
        {
          id: "OTA6MTQxOjY2Ng",
        },
        {
          id: "OTA6MzI2OjQ0Nw",
        },
        {
          id: "OTI6NzU6NjY2",
        },
        {
          id: "OTI6MzI2OjM2Mw",
        },
        {
          id: "ODI6MTM0OjY2Mw",
        },
        {
          id: "ODM6MzcxOjY2Mw",
        },
        {
          id: "ODQ6MTMyOjY2Mw",
        },
        {
          id: "ODU6MzcxOjY2Mw",
        },
        {
          id: "ODY6MTA3OjY2Mw",
        },
        {
          id: "ODc6MzcxOjY2Mw",
        },
        {
          id: "ODg6MTE5OjY2Mw",
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
  combines = [];
  detect(pdf) {
    return (
      pdf.textDetails.some(
        (t) =>
          t.text.trim() === "STRENGTH OF THOUSANDS: SHADOWS OF THE ANCIENTS" &&
          t.fontId === "Gin-Regular:12",
      ) &&
      !pdf.textDetails.some(
        (t) =>
          t.text.trim() === "INTERACTIVE MAPS" && t.fontName === "Dax-Bold",
      )
    );
  }
  preprocess(text) {}
  extractDetails(text, moduleData, sectionKey) {
    this.markStartOfLine(text, 10, 333.25, 675);
    this.markStartOfLine(text, 10, 376.25, 603);
    this.markStartOfLine(text, 10, 399.25, 483);
    this.markStartOfLine(text, 20, 429.25, 99);
    this.markStartOfLine(text, 24, 377.25, 615);
    this.markStartOfLine(text, 24, 392.25, 531);
    this.markStartOfLine(text, 26, 379.2499, 363);
    this.markIndented(text, 34, 371.25, 423);
    this.markStartOfLine(text, 36, 342.25, 519);
    this.markStartOfLine(text, 36, 338.25, 471);
    this.markIndented(text, 36, 338.25, 423);
    this.markIndented(text, 40, 360.25, 243);
    this.markIndented(text, 40, 359.25, 147);
    this.markStartOfLine(text, 42, 426.25, 387);
    this.markStartOfLine(text, 42, 425.25, 363);
    this.markStartOfLine(text, 42, 414.25, 351);
    this.markStartOfLine(text, 42, 370.25, 327);
    this.markStartOfLine(text, 42, 373.25, 315);
    this.markStartOfLine(text, 42, 401.2499, 303);
    this.markStartOfLine(text, 42, 404.2499, 291);
    this.markStartOfLine(text, 42, 405.2499, 279);
    this.markStartOfLine(text, 42, 414.2499, 135);
    this.markIndented(text, 52, 398.25, 507);
    this.markIndented(text, 72, 356.25, 327);
    this.markIndented(text, 72, 356.25, 507);
    this.markIndented(text, 72, 350.25, 663);
    this.markStartOfLine(text, 74, 331.25, 159);
    this.markStartOfLine(text, 74, 328.25, 147);
    this.markStartOfLine(text, 74, 367.25, 123);
    this.markStartOfLine(text, 74, 377.25, 111);
    this.markStartOfLine(text, 74, 381.25, 99);
    this.markStartOfLine(text, 74, 381.25, 87);
    this.markStartOfLine(text, 78, 361.25, 459);
    this.markStartOfLine(text, 78, 363.25, 447);
    this.markStartOfLine(text, 78, 366.25, 435);
    this.markStartOfLine(text, 78, 370.25, 411);
    this.markStartOfLine(text, 78, 370.25, 399);
    this.markStartOfLine(text, 78, 369, 375);
    this.markStartOfLine(text, 82, 331.5, 459);
    this.markStartOfLine(text, 82, 333.5, 411);
    this.markStartOfLine(text, 82, 328.5, 399);
    this.markStartOfLine(text, 82, 322.5, 375);
    this.markIndented(text, 82, 320.5, 339);
    this.markIndented(text, 82, 318.5, 315);
    this.markIndented(text, 82, 334.5, 291);
    this.markIndented(text, 82, 345.5, 231);
    this.markStartOfLine(text, 82, 333.5, 195);
    this.markStartOfLine(text, 82, 321.5, 171);
    this.markIndented(text, 82, 250.5, 495);
    this.markStartOfLine(text, 84, 407.4999, 339);
    this.markStartOfLine(text, 86, 294.5, 411);
    this.markStartOfLine(text, 86, 344.5, 387);
    this.markStartOfLine(text, 86, 356.5, 363);
    this.markStartOfLine(text, 86, 367.5, 303);
    this.markStartOfLine(text, 86, 355.5, 195);
    this.markStartOfLine(text, 86, 361.5, 147);
    this.markStartOfLine(text, 88, 291.5, 399);
    this.markStartOfLine(text, 88, 296.5, 375);
    this.markStartOfLine(text, 88, 297.5, 363);
    this.markStartOfLine(text, 88, 297.5, 351);
    this.markStartOfLine(text, 88, 284.5, 315);
    this.markStartOfLine(text, 88, 278.5, 303);
    this.markStartOfLine(text, 88, 265.5, 279);
    this.markStartOfLine(text, 88, 296.5, 159);
    this.markStartOfLine(text, 88, 341.5, 87);
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
