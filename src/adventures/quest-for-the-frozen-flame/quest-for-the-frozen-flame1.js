import { QuestForTheFrozenFlameBase } from "./base.js";
import { AdventureImage, LabelImage } from "../../core/images.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class QuestForTheFrozenFlame1 extends QuestForTheFrozenFlameBase {
  prefix = "quest-for-the-frozen-flame1";
  fullName = "The Quest for the Frozen Flame - Broken Tusk Moon";
  pages = [
    this.ChapterHeadingPageLayout(4),
    this.RightTwoColumn(5),
    this.LeftTwoColumn(6),
    this.RightTwoColumn(7),
    this.ChapterHeadingPageLayout(10),
    this.RightSingleColumnWithSidebar(11),
    this.LeftTwoColumn(12),
    this.RightTwoColumn(13),
    this.RightTwoColumn(15),
    this.LeftTwoColumn(16),
    this.RightTwoColumn(17),
    this.LeftTwoColumn(18),
    this.RightTwoColumn(19),
    this.LeftTwoColumn(20),
    this.RightTwoColumn(21),
    this.LeftTwoColumn(22),
    this.RightTwoColumnWithRightCutout(23, 150),
    this.LeftTwoColumn(24),
    this.RightTwoColumn(25),
    this.LeftTwoColumn(26),
    this.RightTwoColumn(27),
    this.ChapterHeadingPageLayout(28),
    this.RightSingleColumnWithSidebar(29),
    this.LeftTwoColumn(30),
    this.RightTwoColumnWithRightCutout(31, 520),
    this.LeftTwoColumnWithLeftCutout(32, 380),
    this.RightTwoColumn(33),
    this.LeftTwoColumn(34),
    this.RightTwoColumn(35),
    this.LeftTwoColumnWithLeftCutout(36, 370),
    this.RightTwoColumn(37),
    this.RightTwoColumn(39),
    this.LeftTwoColumn(40),
    this.RightTwoColumn(41),
    this.LeftTwoColumn(42),
    this.RightTwoColumn(43),
    this.LeftTwoColumnWithMap(44, 340),
    this.RightTwoColumn(45),
    this.LeftTwoColumn(46),
    this.RightTwoColumn(47),
    this.LeftTwoColumn(48),
    this.RightTwoColumn(49),
    this.LeftTwoColumn(50),
    this.RightTwoColumn(51),
    this.ChapterHeadingPageLayout(52),
    this.RightSingleColumnWithSidebar(53),
    this.LeftTwoColumn(54),
    this.RightTwoColumnWithRightCutout(55, 390),
    this.LeftTwoColumn(56),
    this.RightTwoColumn(57),
    this.LeftTwoColumn(58),
    this.RightTwoColumn(59),
    this.LeftTwoColumn(60),
    this.RightTwoColumn(61),
    this.LeftTwoColumn(62),
    this.RightTwoColumnWithTopHandout(63, 510),
    this.LeftTwoColumnWithMap(64, 340),
    this.RightTwoColumnWithRightCutout(65, 510),
    this.LeftTwoColumn(66),
    this.RightTwoColumn(67),
    this.RightChapterHeadingPageLayout(69),
    this.LeftTwoColumn(70),
    this.RightTwoColumn(71),
    this.LeftTwoColumn(72),
    this.RightTwoColumnWithRightCutout(73, 280),
    this.LeftTwoColumn(74),
    this.RightTwoColumn(75),
    this.RightChapterHeadingPageLayout(77),
    this.LeftTwoColumn(78),
    this.RightTwoColumn(79),
    this.LeftTwoColumn(80),
    this.RightTwoColumn(81),
    this.LeftTwoColumn(82),
    this.RightTwoColumn(83),
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
        name: "qff1/map1a",
        priority: 0,
      },
      nameInfo: {
        x: 163.3362,
        y: 707.3248,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 1262,
      height: 1637,
      imageLeft: 14,
      imageRight: 1235,
      imageCols: 18,
      imageTop: 133,
      imageBottom: 1494,
      imageRows: 14,
      cropLeft: 0,
      cropRight: 396,
      cropTop: 0,
      cropBottom: 1637,
      offsetX: 0,
      offsetY: 0,
      gridSize: 400,
      gridType: "hex",
      gridDistance: 12,
      gridUnits: "mi",
      rotateCW: 1,
      globalLight: true,
      detailsFile: "/qff/maps/qff1-map1a.json",
      journals: [
        {
          x: 2391.176470588235,
          y: 739.5594117647058,
          id: "Mzk6Njg6NTkx",
        },
        {
          x: 2414.7058823529414,
          y: 913.4082352941176,
          id: "Mzk6Njg6NTE5",
        },
        {
          x: 4100,
          y: 1558.85,
          id: "Mzk6Njg6NDM1",
        },
        {
          x: 7100,
          y: 1212.44,
          id: "Mzk6Mjk1OjI0Mw",
        },
        {
          x: 7400,
          y: 1385.64,
          id: "NDM6MTEzOjEzNQ",
        },
      ],
      tokens: [],
    }),
    new ModuleScene({
      name: "map1b",
      canonical: {
        name: "qff1/map1b",
        priority: 0,
      },
      nameInfo: {
        x: 216,
        y: 704.4087,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 1262,
      height: 1637,
      imageLeft: 14,
      imageRight: 1235,
      imageCols: 18,
      imageTop: 133,
      imageBottom: 1494,
      imageRows: 14,
      cropLeft: 415,
      cropRight: 1234,
      cropTop: 0,
      cropBottom: 1637,
      offsetX: 0,
      offsetY: 0,
      gridSize: 400,
      gridType: "hex",
      gridDistance: 12,
      gridUnits: "mi",
      rotateCW: 1,
      globalLight: true,
      detailsFile: "/qff/maps/qff1-map1b.json",
      journals: [
        {
          x: 2e3,
          y: 1039.23,
          id: "NDM6MTEzOjEzNQ",
        },
        {
          x: 3200,
          y: 2078.46,
          id: "NTU6Mjk1OjI1NQ",
        },
        {
          x: 3800,
          y: 3117.69,
          id: "NTc6Njg6NTA3",
        },
        {
          x: 4400,
          y: 2424.87,
          id: "NjA6OTk6NjYz",
        },
        {
          x: 4400,
          y: 3810.51,
          id: "NTk6Njg6MTk1",
        },
        {
          x: 5900,
          y: 2251.67,
          id: "NjE6Njg6Mjc5",
        },
        {
          x: 7100,
          y: 1212.44,
          id: "NjE6Mjk1OjIzMQ",
        },
        {
          x: 8e3,
          y: 1385.64,
          id: "NjI6MzI2OjY1MQ",
        },
        {
          x: 7700,
          y: 2944.49,
          id: "NjM6Njg6MzE1",
        },
      ],
      tokens: [],
    }),
    new ModuleScene({
      name: "map5a",
      canonical: {
        name: "qff1/map5a",
        priority: 0,
      },
      nameInfo: {
        x: 66,
        y: 574.6681,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 14,
      width: 1199,
      height: 1598,
      imageLeft: 28,
      imageRight: 1183,
      imageCols: 39,
      imageTop: 23,
      imageBottom: 1591,
      imageRows: 53,
      cropLeft: 0,
      cropRight: 701,
      cropTop: 0,
      cropBottom: 429,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      journals: [
        {
          x: 550,
          y: 350,
          id: "MTE6MTAxOjMxNQ",
        },
      ],
      tokens: [],
    }),
    new ModuleScene({
      name: "map5b",
      canonical: {
        name: "qff1/map5b",
        priority: 0,
      },
      nameInfo: {
        x: 66,
        y: 387,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 14,
      width: 1199,
      height: 1598,
      imageLeft: 28,
      imageRight: 1183,
      imageCols: 39,
      imageTop: 23,
      imageBottom: 1591,
      imageRows: 53,
      cropLeft: 0,
      cropRight: 701,
      cropTop: 442,
      cropBottom: 814,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      journals: [
        {
          x: 550,
          y: 450,
          id: "MTY6MzUwOjY5OQ",
        },
      ],
      tokens: [],
    }),
    new ModuleScene({
      name: "map5c",
      canonical: {
        name: "qff1/map5c",
        priority: 0,
      },
      nameInfo: {
        x: 377,
        y: 387,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 14,
      width: 1199,
      height: 1598,
      imageLeft: 28,
      imageRight: 1183,
      imageCols: 39,
      imageTop: 23,
      imageBottom: 1591,
      imageRows: 53,
      cropLeft: 714,
      cropRight: 1199,
      cropTop: 0,
      cropBottom: 814,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      journals: [
        {
          x: 550,
          y: 650,
          id: "MTg6MzUyOjY1MQ",
        },
        {
          x: 550,
          y: 750,
          id: "MTg6MzI2OjUwNw",
        },
        {
          x: 550,
          y: 850,
          id: "MTg6MzI2OjEyMw",
        },
      ],
      tokens: [
        {
          id: "npc30",
          x: 1e3,
          y: 1700,
        },
        {
          id: "npc30",
          x: 900,
          y: 1400,
        },
      ],
    }),
    new ModuleScene({
      name: "map5d",
      canonical: {
        name: "qff1/map5d",
        priority: 0,
      },
      nameInfo: {
        x: 66,
        y: 360.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 14,
      width: 1199,
      height: 1598,
      imageLeft: 28,
      imageRight: 1183,
      imageCols: 39,
      imageTop: 23,
      imageBottom: 1591,
      imageRows: 53,
      cropLeft: 0,
      cropRight: 1199,
      cropTop: 829,
      cropBottom: 1598,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      journals: [
        {
          x: 1050,
          y: 850,
          id: "MTM6MzEwOjM2Mw",
        },
        {
          x: 2950,
          y: 2450,
          id: "MTU6Njg6NTkx",
        },
        {
          x: 1250,
          y: 1750,
          id: "MTU6Njg6MjA3",
        },
        {
          x: 1850,
          y: 1150,
          id: "MTU6Mjk1OjU5MQ",
        },
      ],
      tokens: [
        {
          id: "npc3",
          x: 1700,
          y: 1200,
        },
        {
          id: "npc44",
          x: 1400,
          y: 1800,
        },
      ],
    }),
    new ModuleScene({
      name: "map2a",
      canonical: {
        name: "qff1/map2a",
        priority: 0,
      },
      nameInfo: {
        x: 66,
        y: 529.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 38,
      width: 1194,
      height: 1592,
      imageLeft: 4,
      imageRight: 1183,
      imageCols: 40,
      imageTop: 26,
      imageBottom: 1587,
      imageRows: 53,
      cropLeft: 0,
      cropRight: 588,
      cropTop: 0,
      cropBottom: 518,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/qff/maps/qff1-map2a.json",
      journals: [
        {
          x: 550,
          y: 450,
          id: "MzI6MzI2OjU5MQ",
        },
      ],
      tokens: [
        {
          id: "npc42",
          x: 1e3,
          y: 1050,
        },
        {
          id: "npc42",
          x: 1200,
          y: 1e3,
        },
        {
          id: "npc33",
          x: 1100,
          y: 1e3,
        },
      ],
    }),
    new ModuleScene({
      name: "map2b",
      canonical: {
        name: "qff1/map2b",
        priority: 0,
      },
      nameInfo: {
        x: 331,
        y: 529.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 38,
      width: 1194,
      height: 1592,
      imageLeft: 4,
      imageRight: 1183,
      imageCols: 40,
      imageTop: 26,
      imageBottom: 1587,
      imageRows: 53,
      cropLeft: 601,
      cropRight: 1194,
      cropTop: 0,
      cropBottom: 518,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      journals: [
        {
          x: 650,
          y: 450,
          id: "MzQ6OTk6NjYz",
        },
      ],
      tokens: [
        {
          id: "npc10",
          x: 1400,
          y: 1300,
        },
        {
          id: "npc47",
          x: 1650,
          y: 1100,
        },
        {
          id: "npc47",
          x: 1300,
          y: 1100,
        },
        {
          id: "npc47",
          x: 1800,
          y: 1500,
        },
        {
          id: "npc47",
          x: 1300,
          y: 1600,
        },
      ],
    }),
    new ModuleScene({
      name: "map2c",
      canonical: {
        name: "qff1/map2c",
        priority: 0,
      },
      nameInfo: {
        x: 66,
        y: 274.6681,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 38,
      width: 1194,
      height: 1592,
      imageLeft: 4,
      imageRight: 1183,
      imageCols: 40,
      imageTop: 26,
      imageBottom: 1587,
      imageRows: 53,
      cropLeft: 0,
      cropRight: 588,
      cropTop: 531,
      cropBottom: 1050,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      journals: [
        {
          x: 550,
          y: 550,
          id: "MzY6MzI2OjM4Nw",
        },
      ],
      tokens: [
        {
          id: "npc36",
          x: 2100,
          y: 1600,
        },
        {
          id: "npc36",
          x: 2e3,
          y: 1600,
        },
        {
          id: "npc36",
          x: 2200,
          y: 1600,
        },
        {
          id: "npc37",
          x: 2100,
          y: 1500,
        },
        {
          id: "npc37",
          x: 2200,
          y: 1500,
        },
      ],
    }),
    new ModuleScene({
      name: "map2d",
      canonical: {
        name: "qff1/map2d",
        priority: 0,
      },
      nameInfo: {
        x: 331,
        y: 274.6681,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 38,
      width: 1194,
      height: 1592,
      imageLeft: 4,
      imageRight: 1183,
      imageCols: 40,
      imageTop: 26,
      imageBottom: 1587,
      imageRows: 53,
      cropLeft: 601,
      cropRight: 1194,
      cropTop: 531,
      cropBottom: 1050,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      journals: [
        {
          x: 650,
          y: 550,
          id: "MzU6Njg6NjI3",
        },
      ],
      tokens: [
        {
          id: "npc29",
          x: 1500,
          y: 900,
        },
        {
          id: "npc49",
          x: 1600,
          y: 1100,
        },
        {
          id: "npc5",
          x: 1800,
          y: 1200,
        },
        {
          id: "npc5",
          x: 1700,
          y: 1200,
        },
        {
          id: "npc5",
          x: 1500,
          y: 1200,
        },
      ],
    }),
    new ModuleScene({
      name: "map2e",
      canonical: {
        name: "qff1/map2e",
        priority: 0,
      },
      nameInfo: {
        x: 66,
        y: 246.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 38,
      width: 1194,
      height: 1592,
      imageLeft: 4,
      imageRight: 1183,
      imageCols: 40,
      imageTop: 26,
      imageBottom: 1587,
      imageRows: 53,
      cropLeft: 0,
      cropRight: 588,
      cropTop: 1063,
      cropBottom: 1592,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      journals: [
        {
          x: 550,
          y: 550,
          id: "Mzk6Njg6NDM1",
        },
        {
          x: 1850,
          y: 1550,
          id: "Mzk6Njg6MjY3",
        },
        {
          x: 1550,
          y: 850,
          id: "Mzk6Mjk1OjQ4Mw",
        },
      ],
      tokens: [
        {
          id: "npc40",
          x: 1900,
          y: 1700,
        },
      ],
    }),
    new ModuleScene({
      name: "map2f",
      canonical: {
        name: "qff1/map2f",
        priority: 0,
      },
      nameInfo: {
        x: 331,
        y: 246.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 38,
      width: 1194,
      height: 1592,
      imageLeft: 4,
      imageRight: 1183,
      imageCols: 40,
      imageTop: 26,
      imageBottom: 1587,
      imageRows: 53,
      cropLeft: 601,
      cropRight: 1194,
      cropTop: 1063,
      cropBottom: 1592,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/qff/maps/qff1-map2f.json",
      journals: [
        {
          x: 650,
          y: 550,
          id: "Mzk6Mjk1OjI0Mw",
        },
        {
          x: 1150,
          y: 950,
          id: "NDA6MzI2OjQ4Mw",
        },
        {
          x: 2150,
          y: 850,
          id: "NDI6MzI2OjY5OQ",
        },
      ],
      tokens: [
        {
          id: "npc35",
          x: 2300,
          y: 900,
        },
        {
          id: "npc48",
          x: 1300,
          y: 900,
        },
        {
          id: "npc48",
          x: 1200,
          y: 1100,
        },
        {
          id: "npc48",
          x: 1e3,
          y: 1100,
        },
        {
          id: "npc12",
          x: 1e3,
          y: 800,
        },
      ],
    }),
    new ModuleScene({
      name: "map3",
      canonical: {
        name: "qff1/map3",
        priority: 0,
      },
      nameInfo: {
        x: 99,
        y: 702.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 44,
      width: 1190,
      height: 858,
      imageLeft: 16,
      imageRight: 1108,
      imageCols: 44,
      imageTop: 93,
      imageBottom: 838,
      imageRows: 30,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/qff/maps/qff1-map3.json",
      journals: [
        {
          x: 1150,
          y: 850,
          id: "NDM6MTEzOjEzNQ",
        },
        {
          x: 2150,
          y: 3450,
          id: "NDQ6OTk6MjA3",
        },
        {
          x: 2750,
          y: 3450,
          id: "NDU6Njg6NTA3",
        },
        {
          x: 2550,
          y: 2450,
          id: "NDU6Njg6MTIz",
        },
        {
          x: 3250,
          y: 1650,
          id: "NDY6OTk6NjI3",
        },
        {
          x: 3950,
          y: 2850,
          id: "NDY6MzI2OjM5OQ",
        },
        {
          x: 4750,
          y: 2250,
          id: "NDg6OTk6Njk5",
        },
        {
          x: 5450,
          y: 2050,
          id: "NDk6Njg6MTcx",
        },
        {
          x: 4650,
          y: 1250,
          id: "NDg6MzI2OjU5MQ",
        },
        {
          x: 5450,
          y: 3350,
          id: "NDk6Mjk1OjI0Mw",
        },
        {
          x: 4850,
          y: 3450,
          id: "NTE6Njg6MTgz",
        },
      ],
      tokens: [
        {
          id: "hazard4",
          x: 2100,
          y: 3300,
        },
        {
          id: "npc34",
          x: 2800,
          y: 3500,
        },
        {
          id: "npc34",
          x: 2600,
          y: 3500,
        },
        {
          id: "npc52",
          x: 2500,
          y: 2100,
        },
        {
          id: "npc52",
          x: 2300,
          y: 2200,
        },
        {
          id: "npc52",
          x: 2900,
          y: 2700,
        },
        {
          id: "npc52",
          x: 2800,
          y: 2800,
        },
        {
          id: "npc26",
          x: 3200,
          y: 1400,
        },
        {
          id: "npc14",
          x: 3300,
          y: 1500,
        },
        {
          id: "npc13",
          x: 3800,
          y: 3e3,
        },
        {
          id: "npc34",
          x: 3600,
          y: 2600,
        },
        {
          id: "hazard3",
          x: 4400,
          y: 2200,
        },
        {
          id: "hazard3",
          x: 4500,
          y: 1400,
        },
        {
          id: "hazard3",
          x: 4800,
          y: 1400,
        },
        {
          id: "hazard3",
          x: 4700,
          y: 2e3,
        },
        {
          id: "hazard3",
          x: 5100,
          y: 2100,
        },
        {
          id: "hazard4",
          x: 5500,
          y: 2200,
        },
        {
          id: "npc32",
          x: 5600,
          y: 3300,
        },
      ],
    }),
    new ModuleScene({
      name: "map4",
      canonical: {
        name: "qff1/map4",
        priority: 0,
      },
      nameInfo: {
        x: 99,
        y: 386.6681,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 64,
      width: 1224,
      height: 858,
      imageLeft: 16,
      imageRight: 1207,
      imageCols: 48,
      imageTop: 37,
      imageBottom: 782,
      imageRows: 30,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/qff/maps/qff1-map4.json",
      journals: [
        {
          x: 1250,
          y: 950,
          id: "NjM6Njg6MzE1",
        },
        {
          x: 1750,
          y: 1550,
          id: "NjM6Mjk1OjM3NQ",
        },
        {
          x: 3150,
          y: 3450,
          id: "NjU6Njg6Njk5",
        },
        {
          x: 3950,
          y: 2450,
          id: "NjU6Njg6Mjc5",
        },
        {
          x: 4650,
          y: 3950,
          id: "NjU6Mjk1OjUwNw",
        },
        {
          x: 5450,
          y: 1750,
          id: "NjU6MzcwOjM4Nw",
        },
      ],
      tokens: [
        {
          id: "npc54",
          x: 1600,
          y: 1600,
        },
        {
          id: "npc5",
          x: 3100,
          y: 3200,
        },
        {
          id: "npc5",
          x: 3300,
          y: 3300,
        },
        {
          id: "npc5",
          x: 3100,
          y: 3600,
        },
        {
          id: "npc5",
          x: 2900,
          y: 3500,
        },
        {
          id: "npc7",
          x: 5300,
          y: 1500,
        },
        {
          id: "npc7",
          x: 5600,
          y: 1500,
        },
        {
          id: "npc21",
          x: 5600,
          y: 1700,
        },
        {
          id: "npc21",
          x: 5500,
          y: 1800,
        },
        {
          id: "npc31",
          x: 5600,
          y: 2e3,
        },
      ],
    }),
    new ModuleScene({
      name: "map6a",
      canonical: {
        name: "qff1/map6a",
        priority: 0,
      },
      nameInfo: {
        x: 646,
        y: 757.36,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 1262,
      height: 1637,
      imageIndex: 1,
      imageLeft: 3,
      imageRight: 1239,
      imageCols: 39,
      imageTop: 12,
      imageBottom: 1626,
      imageRows: 51,
      cropLeft: 0,
      cropRight: 631,
      cropTop: 0,
      cropBottom: 543,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      journals: [
        {
          x: 550,
          y: 550,
          id: "NTU6Mjk1OjI1NQ",
        },
      ],
      tokens: [
        {
          id: "npc5",
          x: 1200,
          y: 1700,
        },
        {
          id: "npc5",
          x: 1300,
          y: 1700,
        },
        {
          id: "npc5",
          x: 1100,
          y: 1600,
        },
        {
          id: "npc5",
          x: 1100,
          y: 1500,
        },
        {
          id: "npc17",
          x: 1300,
          y: 1600,
        },
        {
          id: "npc17",
          x: 1300,
          y: 1500,
        },
      ],
    }),
    new ModuleScene({
      name: "map6b",
      canonical: {
        name: "qff1/map6b",
        priority: 0,
      },
      nameInfo: {
        x: 646,
        y: 501.36,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 1262,
      height: 1637,
      imageIndex: 1,
      imageLeft: 3,
      imageRight: 1239,
      imageCols: 39,
      imageTop: 12,
      imageBottom: 1626,
      imageRows: 51,
      cropLeft: 0,
      cropRight: 631,
      cropTop: 556,
      cropBottom: 1082,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      journals: [
        {
          x: 550,
          y: 650,
          id: "NjA6OTk6NjYz",
        },
      ],
      tokens: [],
    }),
    new ModuleScene({
      name: "map6c",
      canonical: {
        name: "qff1/map6c",
        priority: 0,
      },
      nameInfo: {
        x: 934,
        y: 757.36,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 1262,
      height: 1637,
      imageIndex: 1,
      imageLeft: 3,
      imageRight: 1239,
      imageCols: 39,
      imageTop: 12,
      imageBottom: 1626,
      imageRows: 51,
      cropLeft: 645,
      cropRight: 1262,
      cropTop: 0,
      cropBottom: 1082,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/qff/maps/qff1-map6c.json",
      journals: [
        {
          x: 550,
          y: 950,
          id: "NTc6Njg6NTA3",
        },
        {
          x: 1450,
          y: 3350,
          id: "NTc6Njg6MTEx",
        },
        {
          x: 1450,
          y: 2650,
          id: "NTc6Mjk1OjIzMQ",
        },
        {
          x: 1150,
          y: 2150,
          id: "NTg6Mzk1OjM3NQ",
        },
        {
          x: 2050,
          y: 1850,
          id: "NTg6MzQ4OjI2Nw",
        },
      ],
      tokens: [
        {
          id: "npc25",
          x: 1200,
          y: 3300,
        },
        {
          id: "npc18",
          x: 2100,
          y: 1900,
        },
        {
          id: "npc18",
          x: 2100,
          y: 1700,
        },
      ],
    }),
    new ModuleScene({
      name: "map6d",
      canonical: {
        name: "qff1/map6d",
        priority: 0,
      },
      nameInfo: {
        x: 646,
        y: 243.36,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 1262,
      height: 1637,
      imageIndex: 1,
      imageLeft: 3,
      imageRight: 1239,
      imageCols: 39,
      imageTop: 12,
      imageBottom: 1626,
      imageRows: 51,
      cropLeft: 0,
      cropRight: 631,
      cropTop: 1095,
      cropBottom: 1637,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      journals: [
        {
          x: 550,
          y: 650,
          id: "NjE6Njg6Mjc5",
        },
      ],
      tokens: [
        {
          id: "npc7",
          x: 1e3,
          y: 1300,
        },
        {
          id: "npc7",
          x: 1100,
          y: 1300,
        },
        {
          id: "npc5",
          x: 1300,
          y: 1400,
        },
        {
          id: "npc5",
          x: 1400,
          y: 1400,
        },
        {
          id: "npc51",
          x: 1600,
          y: 1500,
        },
      ],
    }),
    new ModuleScene({
      name: "map6e",
      canonical: {
        name: "qff1/map6e",
        priority: 0,
      },
      nameInfo: {
        x: 934,
        y: 243.36,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 1262,
      height: 1637,
      imageIndex: 1,
      imageLeft: 3,
      imageRight: 1239,
      imageCols: 39,
      imageTop: 12,
      imageBottom: 1626,
      imageRows: 51,
      cropLeft: 645,
      cropRight: 1262,
      cropTop: 1095,
      cropBottom: 1637,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      journals: [
        {
          x: 650,
          y: 650,
          id: "NjI6MzI2OjY1MQ",
        },
      ],
      tokens: [
        {
          id: "npc46",
          x: 1800,
          y: 800,
        },
        {
          id: "npc53",
          x: 2e3,
          y: 900,
        },
      ],
    }),
  ];
  journals = [
    new AdventureImage({
      name: "journal1",
      page: 4,
      width: 1260,
      height: 851,
    }),
    new AdventureImage({
      name: "journal2",
      page: 8,
      width: 1261,
      height: 1637,
    }),
    new AdventureImage({
      name: "journal3",
      page: 10,
      width: 1260,
      height: 850,
    }),
    new AdventureImage({
      name: "journal4",
      page: 28,
      width: 1260,
      height: 850,
    }),
    new AdventureImage({
      name: "journal5",
      page: 52,
      width: 1260,
      height: 850,
    }),
    new AdventureImage({
      name: "journal6",
      page: 68,
      width: 1259,
      height: 1636,
    }),
    new LabelImage({
      name: "journal7",
      page: 69,
      width: 525,
      height: 525,
      label: "Njk6MjEzOjIzNQ",
    }),
    new AdventureImage({
      name: "journal8",
      page: 76,
      width: 1259,
      height: 1636,
    }),
    new LabelImage({
      name: "journal9",
      page: 77,
      width: 373,
      height: 373,
      label: "Nzc6MjUyOjEzNA",
    }),
    new LabelImage({
      name: "journal10",
      page: 78,
      width: 541,
      height: 541,
      label: "Nzg6MjkwOjM3Ng",
    }),
    new LabelImage({
      name: "journal11",
      page: 79,
      width: 423,
      height: 347,
      label: "Nzk6MjU1OjQzNA",
    }),
    new LabelImage({
      name: "journal12",
      page: 79,
      width: 479,
      height: 479,
      label: "Nzk6MjI5OjE1NQ",
    }),
    new LabelImage({
      name: "journal13",
      page: 81,
      width: 435,
      height: 435,
      label: "ODE6MjI0OjM3NA",
    }),
    new LabelImage({
      name: "journal14",
      page: 82,
      width: 712,
      height: 712,
      label: "ODI6MjE2Ojgy",
    }),
    new LabelImage({
      name: "journal15",
      page: 83,
      width: 811,
      height: 928,
      label: "ODM6MzM1OjE1MQ",
    }),
    new LabelImage({
      name: "journal16",
      page: 50,
      width: 903,
      height: 1121,
      label: "NTA6MTMxOjExNQ",
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 11,
        x: 338.7669,
        y: 176.2971,
      },
      page: 11,
      width: 569,
      height: 569,
      tokenX: 90,
      tokenY: 97,
      tokenSize: 681,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 13,
        x: 271.3951,
        y: 442.0471,
      },
      page: 13,
      width: 512,
      height: 512,
      tokenX: 60,
      tokenY: 96,
      tokenSize: 624,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.xIvv8vKBa0YsTEzt",
      name: {
        page: 16,
        x: 271.5616,
        y: 349.1817,
      },
      page: 16,
      width: 454,
      height: 454,
      tokenX: 65,
      tokenY: 87,
      tokenSize: 566,
      forIds: ["MTY6OTk6NTU1"],
    }),
    new ModuleNpc({
      id: "npc4",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.r9RTeZGlX8Asicku",
      page: 17,
      width: 570,
      height: 532,
      tokenX: 22,
      tokenY: 97,
      tokenSize: 626,
    }),
    new ModuleNpc({
      id: "npc5",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.koxcnymhEMtf0Uye",
      page: 20,
      width: 777,
      height: 1150,
      tokenX: -142,
      tokenY: 12,
      tokenSize: 450,
      forIds: [
        "Mjc6Njg6MjMx",
        "MTk6Mjk1OjQ0Nw",
        "NjE6Mjk1OjQzNQ",
        "MzY6OTk6MTcx",
        "NTY6MzI2OjU0Mw",
        "NjU6Njg6NDEx",
      ],
    }),
    new ModuleNpc({
      id: "npc6",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 24,
        x: 268.0638,
        y: 454.2971,
      },
      page: 24,
      width: 495,
      height: 495,
      tokenX: 82,
      tokenY: 117,
      tokenSize: 635,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc7",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.F4bNgQx2NLOwSlBR",
      page: 26,
      width: 1030,
      height: 1151,
      tokenX: 61,
      tokenY: 0,
      tokenSize: 1151,
      forIds: [
        "Mjc6Njg6Mjc5",
        "MjU6Mjk1OjE3MQ",
        "NjE6Mjk1OjQ4Mw",
        "NjY6MzI2OjMwMw",
      ],
    }),
    new ModuleNpc({
      id: "npc8",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 30,
        x: 294.9303,
        y: 454.728,
      },
      page: 30,
      width: 511,
      height: 511,
      tokenX: 49,
      tokenY: 82,
      tokenSize: 623,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc9",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 33,
        x: 313.3753,
        y: 106.2971,
      },
      page: 33,
      width: 1121,
      height: 1156,
      tokenX: -152,
      tokenY: 6,
      tokenSize: 624,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc10",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.2p7MEk4SdXfLbzxO",
      name: {
        page: 35,
        x: 340.8751,
        y: 154.2971,
      },
      page: 35,
      width: 847,
      height: 1177,
      tokenX: -79,
      tokenY: 166,
      tokenSize: 785,
      forIds: ["MzQ6MzI2Ojk5"],
    }),
    new ModuleNpc({
      id: "npc11",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 37,
        x: 241.4828,
        y: 446.2313,
      },
      page: 37,
      width: 511,
      height: 511,
      tokenX: 67,
      tokenY: 98,
      tokenSize: 623,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc12",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.xDZMFbTuDu4OFgj8",
      page: 42,
      width: 858,
      height: 1199,
      tokenX: -116,
      tokenY: 38,
      tokenSize: 331,
      forIds: ["NDE6Mjk1OjQzNQ"],
    }),
    new ModuleNpc({
      id: "npc13",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 46,
        x: 282.167,
        y: 452.4747,
      },
      page: 46,
      width: 511,
      height: 511,
      tokenX: 21,
      tokenY: 68,
      tokenSize: 595,
      forIds: ["NDc6Njg6NjAz"],
    }),
    new ModuleNpc({
      id: "npc14",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.B8dOh27iarR7rZI3",
      name: {
        page: 47,
        x: 333.9722,
        y: 93.9187,
      },
      page: 47,
      width: 841,
      height: 751,
      tokenX: -128,
      tokenY: 109,
      tokenSize: 561,
      forIds: ["NDY6OTk6MTM1"],
      elite: true,
    }),
    new ModuleNpc({
      id: "npc15",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.xp9lr0RN2TYqgP5M",
      page: 48,
      width: 924,
      height: 843,
      tokenX: -163,
      tokenY: 56,
      tokenSize: 448,
      forIds: ["NDk6Njg6NTkx"],
    }),
    new ModuleNpc({
      id: "npc16",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 54,
        x: 296.8728,
        y: 454.4055,
      },
      page: 54,
      width: 488,
      height: 488,
      tokenX: 77,
      tokenY: 76,
      tokenSize: 600,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc17",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.O87CB2RiM0WCDz8P",
      page: 56,
      width: 738,
      height: 1150,
      tokenX: -187,
      tokenY: 57,
      tokenSize: 282,
      forIds: ["NTY6MzI2OjQ5NQ"],
    }),
    new ModuleNpc({
      id: "npc18",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.sMNqIHHxcVBXG08h",
      name: {
        page: 58,
        x: 183.0701,
        y: 137.7971,
      },
      page: 58,
      width: 853,
      height: 1041,
      tokenX: -188,
      tokenY: 42,
      tokenSize: 425,
      forIds: ["NTk6Njg6NjE1"],
    }),
    new ModuleNpc({
      id: "npc19",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 60,
        x: 302.2799,
        y: 452.2315,
      },
      page: 60,
      width: 488,
      height: 488,
      tokenX: 75,
      tokenY: 90,
      tokenSize: 600,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc20",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 65,
        x: 272.1996,
        y: 298.0438,
      },
      page: 65,
      width: 432,
      height: 432,
      tokenX: 85,
      tokenY: 72,
      tokenSize: 544,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc21",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.JGvGPeoie5k1fGkv",
      page: 66,
      width: 1064,
      height: 1044,
      tokenX: -362,
      tokenY: -29,
      tokenSize: 392,
      forIds: ["Mjc6Njg6MTgz", "NjY6MzI2OjI1NQ"],
    }),
    new ModuleNpc({
      id: "npc22",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 70,
        x: 231.0125,
        y: 118.2971,
      },
      page: 70,
      width: 824,
      height: 1083,
      tokenX: -251,
      tokenY: 24,
      tokenSize: 355,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc23",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 72,
        x: 214.6877,
        y: 118.9221,
      },
      page: 72,
      width: 980,
      height: 1083,
      tokenX: -409,
      tokenY: 88,
      tokenSize: 411,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc24",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 75,
        x: 342.2813,
        y: 172.9221,
      },
      page: 75,
      width: 715,
      height: 590,
      tokenX: -294,
      tokenY: 123,
      tokenSize: 463,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc25",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.OeJlR7ZSSc0azABd",
      page: 84,
      width: 805,
      height: 740,
      tokenX: 111,
      tokenY: 208,
      tokenSize: 889,
      forIds: ["ODQ6MzQ5OjMzOQ", "NTc6Mjk1OjU0Mw"],
    }),
    new ModuleNpc({
      id: "npc26",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.T0AapaQCmo5pBSQq",
      page: 85,
      width: 694,
      height: 764,
      tokenX: -164,
      tokenY: 114,
      tokenSize: 456,
      forIds: ["ODU6Njg6MzI3", "NDY6OTk6MTgz"],
    }),
    new ModuleNpc({
      id: "npc27",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.8kGAwppxApSa6vyl",
      page: 86,
      width: 805,
      height: 1037,
      tokenX: -144,
      tokenY: 43,
      tokenSize: 449,
      forIds: ["ODY6MzA3OjUxOQ"],
    }),
    new ModuleNpc({
      id: "npc28",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.hh9uR1teglhRRhY8",
      page: 87,
      width: 788,
      height: 893,
      tokenX: -186,
      tokenY: 89,
      tokenSize: 417,
      forIds: ["ODc6Njg6NDgz"],
    }),
    new ModuleNpc({
      id: "npc29",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.EWT9OXxBuKQLQMHj",
      page: 88,
      width: 911,
      height: 949,
      tokenX: -150,
      tokenY: 42,
      tokenSize: 501,
      forIds: ["ODg6MzIwOjMzOQ", "MzY6OTk6MTIz"],
    }),
    new ModuleNpc({
      id: "npc30",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.tgUdk3pTQ6yHHLTH",
      page: 89,
      width: 863,
      height: 703,
      tokenX: 135,
      tokenY: 110,
      tokenSize: 723,
      forIds: ["ODk6Njg6MzM5", "MTk6Njg6MzYz"],
    }),
    new ModuleNpc({
      id: "npc31",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 91,
        x: 356.5223,
        y: 154.2971,
      },
      page: 91,
      width: 1093,
      height: 1201,
      tokenX: -297,
      tokenY: 58,
      tokenSize: 417,
      forIds: ["OTE6Njg6MzUx", "NjY6MzI2OjIwNw"],
    }),
    new ModuleNpc({
      id: "npc32",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 93,
        x: 365.0932,
        y: 135.7971,
      },
      page: 93,
      width: 899,
      height: 1011,
      tokenX: -156,
      tokenY: 133,
      tokenSize: 675,
      forIds: ["OTM6Njg6NTE5", "NTA6Mzc0OjUwNw"],
    }),
    new ModuleNpc({
      id: "npc33",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.bpwaqRoO1wYo15T5",
      name: {
        page: 33,
        x: 67.5,
        y: 651,
      },
      label: "B",
      forIds: ["MzM6Njg6NjUx"],
    }),
    new ModuleNpc({
      id: "npc34",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.B8dOh27iarR7rZI3",
      label: "B",
      forIds: ["NDc6Njg6NTMx", "NDU6Njg6MTcx"],
    }),
    new ModuleNpc({
      id: "npc35",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.MrzlaE7k1PEsd3iQ",
      label: "C",
      forIds: ["NDM6Njg6NjAz"],
    }),
    new ModuleNpc({
      id: "npc36",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.Wv4jaiD6X8negvH2",
      name: {
        page: 37,
        x: 67.5,
        y: 255,
        substring: {
          start: 0,
          end: 16,
        },
      },
      label: "D",
      forIds: ["Mzc6Njg6MjU1"],
    }),
    new ModuleNpc({
      id: "npc37",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.3jkmJgV4zwygUqLy",
      name: {
        page: 37,
        x: 67.5,
        y: 195,
        substring: {
          start: 0,
          end: 13,
        },
      },
      label: "B",
      forIds: ["Mzc6Njg6MTk1"],
    }),
    new ModuleNpc({
      id: "npc38",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.KFf6pJmFmzj7HH9i",
      name: {
        page: 18,
        x: 99,
        y: 327,
      },
      label: "E",
      forIds: ["MTg6OTk6MzI3"],
    }),
    new ModuleNpc({
      id: "npc39",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-3.Actor.IijUBFE1vhvgowhD",
      label: "GP",
      forIds: ["MjE6Mjk1OjQ3MQ"],
    }),
    new ModuleNpc({
      id: "npc40",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.QAa0xdLT9cBxw2zh",
      label: "K",
      forIds: ["Mzk6Mjk1OjYxNQ"],
    }),
    new ModuleNpc({
      id: "npc41",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.1wVVI0Jj7MdZ3uHg",
      label: "M",
      forIds: ["MTI6MzI2OjUwNw"],
    }),
    new ModuleNpc({
      id: "npc42",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.aeOzCBpwnUVcpqxI",
      label: "P",
      forIds: ["MzM6Njg6Njk5"],
    }),
    new ModuleNpc({
      id: "npc43",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.uQBfbNaIHdt0l2QB",
      label: "Q",
      forIds: ["NjE6Njg6NDgz"],
    }),
    new ModuleNpc({
      id: "npc44",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.k5lxeobI0Q3l6rqV",
      label: "RS",
      forIds: ["MTU6Mjk1OjY5OQ"],
    }),
    new ModuleNpc({
      id: "npc45",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.9sGgANyNFCKnu06t",
      label: "T",
      forIds: ["NjE6Njg6NDM1"],
    }),
    new ModuleNpc({
      id: "npc46",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-3.Actor.yCyZlDAaJ6cDYtB7",
      label: "W",
      forIds: ["NjI6MzI2OjE5NQ"],
    }),
    new ModuleNpc({
      id: "npc47",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.fnpv7Dg7QJWSdz6z",
      label: "AB",
      forIds: ["MzQ6MzI2OjM4Nw"],
    }),
    new ModuleNpc({
      id: "npc48",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.2nnCyf8LBxLAWKRE",
      label: "AP",
      forIds: ["NDE6Mjk1OjY1MQ"],
    }),
    new ModuleNpc({
      id: "npc49",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.JGvGPeoie5k1fGkv",
      name: {
        page: 36,
        x: 326.25,
        y: 699,
      },
      label: "BML",
      forIds: ["MzY6MzI2OjY5OQ"],
    }),
    new ModuleNpc({
      id: "npc50",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.hh9uR1teglhRRhY8",
      name: {
        page: 18,
        x: 99,
        y: 279,
      },
      label: "L",
      forIds: ["MTg6OTk6Mjc5"],
    }),
    new ModuleNpc({
      id: "npc51",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.O87CB2RiM0WCDz8P",
      name: {
        page: 61,
        x: 294.75,
        y: 387,
      },
      label: "BMR",
      forIds: ["NjE6Mjk1OjM4Nw"],
    }),
    new ModuleNpc({
      id: "npc52",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.0GArHVfN0VxejVZp",
      uniqueKey: "Compendium.pf2e.pathfinder-bestiary-2.Actor.B8dOh27iarR7rZI3",
      label: "TB",
      forIds: ["NDU6Mjk1OjQzNQ"],
    }),
    new ModuleNpc({
      id: "npc53",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.alPZcKVrHTcMdtIU",
      label: "Y",
      forIds: ["NjI6MzI2OjE0Nw"],
    }),
    new ModuleNpc({
      id: "npc54",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.8kGAwppxApSa6vyl",
      name: {
        page: 64,
        x: 99,
        y: 339,
      },
      label: "K",
      forIds: ["NjQ6OTk6MzM5"],
    }),
    new ModuleNpc({
      id: "hazard1",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.Uhhhh06jUhNkRHKS",
      label: "AST",
      forIds: ["NjI6OTk6MzAz"],
    }),
    new ModuleNpc({
      id: "hazard2",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.HMpKt3b2LfrXa9yV",
      label: "DSW",
      forIds: ["NTk6Mjk1OjQ1OQ"],
    }),
    new ModuleNpc({
      id: "hazard3",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.ZRIxdOd91foyBnHO",
      label: "HoRS",
      forIds: ["NDg6MzI2OjM1MQ", "NDg6OTk6NTQz"],
    }),
    new ModuleNpc({
      id: "hazard4",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.pYjPHCoDHqFL994f",
      label: "PTH",
      forIds: ["NDk6Mjk1OjMzOQ", "NDQ6MzI2OjE0Nw"],
    }),
  ];
  journalPages = [
    {
      name: "Introduction",
      pages: [
        {
          id: "NDoxMTE6MzIy",
        },
        {
          id: "NDozODU6MjE5",
        },
        {
          id: "NTo2ODo2Mzk",
        },
        {
          id: "NTo2ODo1Nzk",
        },
        {
          id: "NToyOTU6NDk1",
        },
        {
          id: "Njo5OTo1NTU",
        },
        {
          id: "NjozMjY6NTY3",
        },
        {
          id: "Nzo2ODo1Njc",
        },
        {
          id: "NzozMjQ6Njk5",
        },
        {
          id: "NzoyOTU6NTA3",
        },
        {
          id: "NzoyOTU6MzYz",
        },
        {
          id: "NzoyOTU6MjA3",
        },
      ],
    },
    {
      name: "Chapter 1",
      pages: [
        {
          id: "MTA6MjQ1OjM0MQ",
        },
        {
          id: "MTE6MzcxOjY5OQ",
        },
        {
          id: "MjM6MzExOjY5OQ",
        },
        {
          id: "MjM6MzExOjQxMQ",
        },
        {
          id: "MTE6MTMzOjY5OQ",
        },
        {
          id: "MTE6MTAxOjMxNQ",
        },
        {
          id: "MTE6Njg6OTk",
        },
        {
          id: "MTI6MzI2OjYzOQ",
        },
        {
          id: "MTI6MzI2OjQxMQ",
        },
        {
          id: "MTI6MzY2OjI5MQ",
        },
        {
          id: "MTM6Njg6MjY3",
        },
        {
          id: "MTM6MzEwOjM2Mw",
        },
        {
          id: "MTU6Njg6NTkx",
        },
        {
          id: "MTU6Njg6MjA3",
        },
        {
          id: "MTU6Mjk1OjU5MQ",
        },
        {
          id: "MTY6OTk6NTA3",
        },
        {
          id: "MTY6MzUwOjY5OQ",
        },
        {
          id: "MTc6Mjk1OjY5OQ",
        },
        {
          id: "MTg6MzUyOjY1MQ",
        },
        {
          id: "MTg6MzI2OjUwNw",
        },
        {
          id: "MTg6MzI2OjEyMw",
        },
        {
          id: "MTk6Mjk1OjYyNw",
        },
        {
          id: "MjA6Mzc3OjMyNw",
        },
        {
          id: "MjA6Mzc1OjI1NQ",
        },
        {
          id: "MjE6Njg6Mzc1",
        },
        {
          id: "MjE6MzE1OjMyNw",
        },
        {
          id: "MjI6MzI2OjQ4Mw",
        },
        {
          id: "MjI6MzI2OjEyMw",
        },
        {
          id: "MjQ6MzkyOjYzOQ",
        },
        {
          id: "MjU6Mjk1OjM3NQ",
        },
        {
          id: "MjY6MzI2OjYxNQ",
        },
        {
          id: "Mjc6Mjk1OjM5OQ",
        },
      ],
    },
    {
      name: "Chapter 2",
      pages: [
        {
          id: "Mjg6MjQ0OjM0MQ",
        },
        {
          id: "Mjk6MzcxOjY5OQ",
        },
        {
          id: "MzE6MzExOjY5OQ",
        },
        {
          id: "MzI6MTE1OjY5OQ",
        },
        {
          id: "MzY6MTE1OjY5OQ",
        },
        {
          id: "Mjk6MTQ0OjU5MQ",
        },
        {
          id: "MzA6OTk6NTA3",
        },
        {
          id: "MzA6MzQ4OjY5OQ",
        },
        {
          id: "MzE6Njg6NjUx",
        },
        {
          id: "MzI6MTEwOjE5NQ",
        },
        {
          id: "MzI6MzI2OjU5MQ",
        },
        {
          id: "MzM6Njg6NDcx",
        },
        {
          id: "MzQ6OTk6NjYz",
        },
        {
          id: "MzU6Njg6NjI3",
        },
        {
          id: "MzY6MzI2OjM4Nw",
        },
        {
          id: "Mzk6MTAwOjY5OQ",
        },
        {
          id: "Mzk6Njg6NTkx",
        },
        {
          id: "Mzk6Njg6NTE5",
        },
        {
          id: "Mzk6Njg6NDM1",
        },
        {
          id: "Mzk6Njg6MjY3",
        },
        {
          id: "Mzk6Mjk1OjQ4Mw",
        },
        {
          id: "Mzk6Mjk1OjI0Mw",
        },
        {
          id: "NDA6MzI2OjQ4Mw",
        },
        {
          id: "NDI6MzI2OjY5OQ",
        },
        {
          id: "NDM6MTEzOjEzNQ",
        },
        {
          id: "NDQ6OTk6MjA3",
        },
        {
          id: "NDU6Njg6NTA3",
        },
        {
          id: "NDU6Njg6MTIz",
        },
        {
          id: "NDY6OTk6NjI3",
        },
        {
          id: "NDY6MzI2OjM5OQ",
        },
        {
          id: "NDg6OTk6Njk5",
        },
        {
          id: "NDg6MzI2OjU5MQ",
        },
        {
          id: "NDk6Njg6MTcx",
        },
        {
          id: "NDk6Mjk1OjI0Mw",
        },
        {
          id: "NTE6Njg6MTgz",
        },
      ],
    },
    {
      name: "Chapter 3",
      pages: [
        {
          id: "NTI6MjQ0OjMzMA",
        },
        {
          id: "NTM6MzcxOjY5OQ",
        },
        {
          id: "NTU6MzExOjY5OQ",
        },
        {
          id: "NTM6MTQ1OjY5OQ",
        },
        {
          id: "NTM6Njg6NDcx",
        },
        {
          id: "NTQ6MzM3OjM2Mw",
        },
        {
          id: "NTQ6MzI2OjI0Mw",
        },
        {
          id: "NTU6Njg6NjAz",
        },
        {
          id: "NTU6Njg6MTU5",
        },
        {
          id: "NTU6MzI4OjM3NQ",
        },
        {
          id: "NTU6Mjk1OjI1NQ",
        },
        {
          id: "NTc6Njg6NTA3",
        },
        {
          id: "NTc6Njg6MTEx",
        },
        {
          id: "NTc6Mjk1OjIzMQ",
        },
        {
          id: "NTg6Mzk1OjM3NQ",
        },
        {
          id: "NTg6MzQ4OjI2Nw",
        },
        {
          id: "NTk6Njg6MTk1",
        },
        {
          id: "NjA6OTk6NjYz",
        },
        {
          id: "NjA6MzI2OjIzMQ",
        },
        {
          id: "NjE6Njg6Mjc5",
        },
        {
          id: "NjE6Mjk1OjIzMQ",
        },
        {
          id: "NjI6MzI2OjY1MQ",
        },
        {
          id: "NjM6Njg6MzE1",
        },
        {
          id: "NjM6Mjk1OjM3NQ",
        },
        {
          id: "NjU6Njg6Njk5",
        },
        {
          id: "NjU6Njg6Mjc5",
        },
        {
          id: "NjU6Mjk1OjUwNw",
        },
        {
          id: "NjU6MzcwOjM4Nw",
        },
        {
          id: "Njc6MzI4OjM2Mw",
        },
        {
          id: "NjU6MzExOjY5OQ",
        },
        {
          id: "NzM6MzExOjY5OQ",
        },
      ],
    },
    {
      name: "Handouts",
      pages: [
        {
          id: "NjM6NDA0OjUyNw",
        },
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
      ],
    },
    {
      name: "Back Matter",
      pages: [
        {
          id: "Njk6MTAwOjY1OA",
        },
        {
          id: "Njk6MTM3OjE0Nw",
        },
        {
          id: "NzA6MzUwOjIzMQ",
        },
        {
          id: "NzE6Njg6NTQz",
        },
        {
          id: "NzE6Mjk1OjY5OQ",
        },
        {
          id: "NzI6MzI2OjY5OQ",
        },
        {
          id: "NzI6MzI2OjI3OQ",
        },
        {
          id: "NzM6Njg6NDk1",
        },
        {
          id: "NzM6Mjk1OjE1OQ",
        },
        {
          id: "NzQ6MTQzOjQxMQ",
        },
        {
          id: "Nzc6MTYzOjY2NQ",
        },
        {
          id: "Nzc6OTE6NDgz",
        },
        {
          id: "Nzc6Njg6Mzc1",
        },
        {
          id: "Nzc6Mjk1OjQ0Nw",
        },
        {
          id: "Nzg6MTQ3OjY5OQ",
        },
        {
          id: "Nzg6OTk6NjAz",
        },
        {
          id: "Nzg6OTk6MzI3",
        },
        {
          id: "Nzg6MzI2OjY1MQ",
        },
        {
          id: "Nzg6MzI2OjMxNQ",
        },
        {
          id: "Nzk6Njg6NTkx",
        },
        {
          id: "Nzk6Njg6MzE1",
        },
        {
          id: "ODA6MTU3OjY5OQ",
        },
        {
          id: "ODA6OTk6NjUx",
        },
        {
          id: "ODA6OTk6NDEx",
        },
        {
          id: "ODA6MzI2OjU5MQ",
        },
        {
          id: "ODE6MTQxOjY5OQ",
        },
        {
          id: "ODE6Njg6NjAz",
        },
        {
          id: "ODE6Njg6NDIz",
        },
        {
          id: "ODE6Mjk1OjY5OQ",
        },
        {
          id: "ODE6Mjk1OjI1NQ",
        },
        {
          id: "ODI6MTc3OjY5OQ",
        },
        {
          id: "ODI6OTk6NjM5",
        },
        {
          id: "ODI6OTk6NDIz",
        },
        {
          id: "ODI6MzI2OjU0Mw",
        },
        {
          id: "ODM6MTEwOjY5OQ",
        },
        {
          id: "ODM6Njg6NjM5",
        },
        {
          id: "ODQ6MjUxOjY4Nw",
        },
        {
          id: "ODU6Njg6Njg3",
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
          id: "ODk6Njg6Njg3",
        },
        {
          id: "OTA6MjM3OjY3Nw",
        },
        {
          id: "OTI6MjI4OjY5OA",
        },
      ],
    },
  ];
  combines = [
    {
      source: "OTI6MzI2OjEyMw",
      dest: "OTI6MjI4OjY5OA",
    },
    {
      source: "OTA6MzI2OjE0Nw",
      dest: "OTA6MjM3OjY3Nw",
    },
    {
      source: "ODQ6MTQzOjY2Mw",
      dest: "ODQ6MjUxOjY4Nw",
    },
    {
      source: "ODU6MzcxOjY2Mw",
      dest: "ODU6Njg6Njg3",
    },
    {
      source: "ODY6MTI2OjY2Mw",
      dest: "ODY6MjUxOjY4Nw",
    },
    {
      source: "ODc6MzcxOjY2Mw",
      dest: "ODc6Njg6Njg3",
    },
    {
      source: "ODg6MTQ5OjY2Mw",
      dest: "ODg6MjUxOjY4Nw",
    },
    {
      source: "ODk6MzcxOjY2Mw",
      dest: "ODk6Njg6Njg3",
    },
  ];
  normalFontIds = this.normalFontIds.concat(["Basing:14"]);
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "QUEST FOR THE FROZEN FLAME: BROKEN TUSK MOON" &&
        t.fontId === "Gin-Regular:12" &&
        t.page === 1,
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    this.moveToBeginning(text, 63, 404.3302, 527.1962);
    return super.extractDetails(text, moduleData, sectionKey);
  }
}
