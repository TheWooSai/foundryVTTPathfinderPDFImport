import { QuestForTheFrozenFlameBase } from "./base.js";
import { AdventureImage, LabelImage } from "../../core/images.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class QuestForTheFrozenFlame2 extends QuestForTheFrozenFlameBase {
  prefix = "quest-for-the-frozen-flame2";
  fullName = "The Quest for the Frozen Flame - Lost Mammoth Valley";
  pages = [
    this.ChapterHeadingPageLayout(6),
    this.RightSingleColumnWithSidebar(7),
    this.LeftTwoColumnWithLeftCutout(8, 550),
    this.RightTwoColumn(9),
    this.LeftTwoColumn(10),
    this.RightTwoColumn(11),
    this.LeftTwoColumn(12),
    this.RightTwoColumnWithRightCutout(13, 390),
    this.LeftTwoColumnWithLeftCutout(14, 550),
    this.RightTwoColumn(15),
    this.LeftTwoColumn(16),
    this.RightTwoColumn(17),
    this.LeftTwoColumn(18),
    this.RightTwoColumn(19),
    this.ChapterHeadingPageLayout(20),
    this.RightSingleColumnWithSidebar(21),
    this.LeftTwoColumn(22),
    this.RightTwoColumnWithRightCutout(23, 400),
    this.LeftTwoColumnWithMap(24, 350),
    this.RightTwoColumnWithRightCutout(25, 0),
    this.LeftTwoColumn(26),
    this.RightTwoColumn(27),
    this.LeftTwoColumnWithMap(28, 340),
    this.RightTwoColumn(29),
    this.LeftTwoColumn(30),
    this.RightTwoColumn(31),
    this.LeftTwoColumn(32),
    this.RightTwoColumn(33),
    this.LeftTwoColumn(34),
    this.RightTwoColumnWithRightCutout(35, 0),
    this.LeftTwoColumn(36),
    this.RightTwoColumnWithRightCutout(37, 560),
    this.LeftTwoColumnWithMap(38, 340),
    this.RightTwoColumn(39),
    this.LeftTwoColumn(40),
    this.RightTwoColumn(41),
    this.LeftTwoColumn(42),
    this.RightTwoColumn(43),
    this.LeftTwoColumn(44),
    this.RightTwoColumn(45),
    this.LeftTwoColumnWithLeftCutout(46, 420),
    this.RightTwoColumn(47),
    this.ChapterHeadingPageLayout(48),
    this.RightSingleColumnWithSidebar(49),
    this.LeftTwoColumnWithMap(50, 340),
    this.RightTwoColumn(51),
    this.LeftTwoColumn(52),
    this.RightTwoColumnWithRightCutout(53, 400),
    this.LeftTwoColumn(54),
    this.RightTwoColumn(55),
    this.LeftTwoColumn(56),
    this.RightTwoColumn(57),
    this.LeftTwoColumn(58),
    this.RightTwoColumn(59),
    this.LeftTwoColumn(60),
    this.RightTwoColumn(61),
    this.RightChapterHeadingPageLayout(63),
    this.LeftTwoColumn(64),
    this.RightTwoColumn(65),
    this.LeftTwoColumnWithLeftCutout(66, 700),
    this.RightTwoColumnWithRightCutout(67, 700),
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
      name: "map1",
      canonical: {
        name: "qff2/map1",
        priority: 0,
      },
      nameInfo: {
        x: 451,
        y: 757.36,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 1262,
      height: 1637,
      imageLeft: 39,
      imageRight: 1206,
      imageCols: 36,
      imageTop: 4,
      imageBottom: 1625,
      imageRows: 50,
      offsetX: 0,
      offsetY: 0,
      darkness: 0.2,
      detailsFile: "/qff/maps/qff2-map1.json",
      journals: [
        {
          x: 950,
          y: 1350,
          id: "NzoxNDA6NjE1",
        },
        {
          x: 2150,
          y: 1950,
          id: "Nzo2ODozMzk",
        },
        {
          x: 1950,
          y: 3050,
          id: "ODo5OToxMjM",
        },
        {
          x: 1450,
          y: 1850,
          id: "ODozMjY6NDgz",
        },
        {
          x: 1150,
          y: 2550,
          id: "ODozMjY6MzE1",
        },
        {
          x: 1750,
          y: 2450,
          id: "OTozNTI6NTc5",
        },
        {
          x: 2900,
          y: 1750,
          id: "OToyOTU6Mzc1",
        },
        {
          x: 3050,
          y: 2350,
          id: "OToyOTU6MTEx",
        },
        {
          x: 1850,
          y: 2850,
          id: "MTA6MzI2OjYzOQ",
        },
        {
          x: 4150,
          y: 1950,
          id: "MTA6NDA2OjU1NQ",
        },
        {
          x: 4650,
          y: 2550,
          id: "MTE6Njg6Njk5",
        },
        {
          x: 3550,
          y: 2950,
          id: "MTE6Njg6NTMx",
        },
        {
          x: 3950,
          y: 3050,
          id: "MTE6Njg6MzE1",
        },
        {
          x: 4650,
          y: 3050,
          id: "MTE6Njg6MTk1",
        },
        {
          x: 4500,
          y: 3850,
          id: "MTE6Mjk1OjU2Nw",
        },
        {
          x: 3950,
          y: 3950,
          id: "MTM6Njg6MzE1",
        },
        {
          x: 4650,
          y: 4650,
          id: "MTM6Mjk1OjI1NQ",
        },
        {
          x: 3950,
          y: 3350,
          id: "MTI6OTk6Njk5",
        },
        {
          x: 4450,
          y: 5150,
          id: "MTM6Mjk1OjE4Mw",
        },
        {
          x: 3250,
          y: 5550,
          id: "MTQ6OTk6Mzc1",
        },
        {
          x: 3750,
          y: 5750,
          id: "MTQ6OTk6MTk1",
        },
        {
          x: 2550,
          y: 5250,
          id: "MTQ6MzI2OjEyMw",
        },
        {
          x: 1750,
          y: 4850,
          id: "MTY6MzY4OjM3NQ",
        },
        {
          x: 1150,
          y: 4050,
          id: "MTY6Mzg1OjI2Nw",
        },
        {
          x: 2850,
          y: 3950,
          id: "MTc6Mzg4OjQ5NQ",
        },
        {
          x: 3150,
          y: 3950,
          id: "MTc6Mjk1OjI3OQ",
        },
        {
          x: 2750,
          y: 3250,
          id: "MTg6MzI2OjE1OQ",
        },
        {
          x: 1550,
          y: 5300,
          id: "MTk6Njg6MTcx",
        },
      ],
      tokens: [
        {
          id: "npc68",
          x: 2400,
          y: 1900,
        },
        {
          id: "npc68",
          x: 2200,
          y: 2200,
        },
        {
          id: "hazard4",
          x: 2200,
          y: 2e3,
        },
        {
          id: "hazard3",
          x: 1800,
          y: 3100,
        },
        {
          id: "npc25",
          x: 1300,
          y: 3e3,
        },
        {
          id: "npc25",
          x: 1100,
          y: 3e3,
        },
        {
          id: "hazard8",
          x: 1300,
          y: 2300,
        },
        {
          id: "hazard4",
          x: 2500,
          y: 1800,
        },
        {
          id: "hazard4",
          x: 2700,
          y: 1700,
        },
        {
          id: "hazard4",
          x: 3e3,
          y: 1700,
        },
        {
          id: "hazard4",
          x: 2e3,
          y: 2200,
        },
        {
          id: "hazard4",
          x: 2100,
          y: 2400,
        },
        {
          id: "hazard4",
          x: 2100,
          y: 2700,
        },
        {
          id: "npc1",
          x: 4100,
          y: 2100,
        },
        {
          id: "hazard2",
          x: 3500,
          y: 2800,
        },
        {
          id: "npc42",
          x: 4600,
          y: 5e3,
        },
        {
          id: "npc42",
          x: 4700,
          y: 4900,
        },
        {
          id: "npc42",
          x: 4700,
          y: 5200,
        },
        {
          id: "hazard12",
          x: 3700,
          y: 4100,
        },
        {
          id: "npc2",
          x: 3800,
          y: 3400,
        },
        {
          id: "hazard10",
          x: 3900,
          y: 3200,
        },
        {
          id: "npc42",
          x: 4500,
          y: 5300,
        },
        {
          id: "npc42",
          x: 4500,
          y: 5100,
        },
        {
          id: "npc65",
          x: 3700,
          y: 5600,
        },
        {
          id: "npc65",
          x: 3600,
          y: 5800,
        },
        {
          id: "npc65",
          x: 3800,
          y: 5900,
        },
        {
          id: "npc65",
          x: 3800,
          y: 5700,
        },
        {
          id: "npc3",
          x: 2600,
          y: 5200,
        },
        {
          id: "npc3",
          x: 2300,
          y: 5100,
        },
        {
          id: "hazard1",
          x: 2200,
          y: 5300,
        },
        {
          id: "npc4",
          x: 1100,
          y: 3700,
        },
        {
          id: "npc4",
          x: 1200,
          y: 3600,
        },
        {
          id: "npc4",
          x: 1100,
          y: 3500,
        },
        {
          id: "npc4",
          x: 1e3,
          y: 3600,
        },
        {
          id: "hazard9",
          x: 1100,
          y: 3600,
        },
        {
          id: "npc39",
          x: 2700,
          y: 3400,
        },
        {
          id: "npc39",
          x: 2500,
          y: 3200,
        },
        {
          id: "npc39",
          x: 2600,
          y: 2900,
        },
        {
          id: "npc39",
          x: 2800,
          y: 3200,
        },
        {
          id: "npc69",
          x: 1300,
          y: 5400,
        },
        {
          id: "npc69",
          x: 1400,
          y: 5500,
        },
        {
          id: "npc69",
          x: 1500,
          y: 5500,
        },
        {
          id: "npc69",
          x: 1600,
          y: 5400,
        },
        {
          id: "npc69",
          x: 1600,
          y: 5600,
        },
        {
          id: "npc69",
          x: 1300,
          y: 5600,
        },
      ],
    }),
    new ModuleScene({
      name: "map2",
      canonical: {
        name: "qff2/map2",
        priority: 0,
      },
      nameInfo: {
        x: 57.75,
        y: 735,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 24,
      width: 1261,
      height: 878,
      imageLeft: 45,
      imageRight: 1188,
      imageCols: 9,
      imageTop: 272,
      imageBottom: 689,
      imageRows: 3,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      gridType: "hex",
      gridSize: 400,
      gridDistance: 12,
      gridUnits: "mi",
      detailsFile: "/qff/maps/qff2-map2.json",
      journals: [
        {
          x: 730,
          y: 1696.5433333333335,
          id: "MjQ6OTk6MjU1",
        },
        {
          x: 751.6666666666667,
          y: 1813,
          id: "MjQ6OTk6MjE5",
        },
        {
          x: 878.3333333333335,
          y: 1719.876666666667,
          id: "MjQ6OTk6OTk",
        },
        {
          x: 760.0000000000002,
          y: 2124.8766666666666,
          id: "MjQ6MzI2OjE0Nw",
        },
        {
          x: 813.3333333333335,
          y: 2050.21,
          id: "MjU6Njg6MTk1",
        },
        {
          x: 746.6666666666667,
          y: 2442.876666666667,
          id: "MjU6Njg6MTEx",
        },
        {
          x: 1133.3333333333335,
          y: 1634.5433333333333,
          id: "MjY6MzI2OjYzOQ",
        },
        {
          x: 1205,
          y: 1521.8766666666668,
          id: "Mjc6Njg6NjI3",
        },
        {
          x: 1058.3333333333335,
          y: 1456.8766666666668,
          id: "Mjc6Njg6OTk",
        },
        {
          x: 1150,
          y: 1972.876666666667,
          id: "Mjc6Mjk1OjQxMQ",
        },
        {
          x: 1233.3333333333335,
          y: 1884.7434948471086,
          id: "Mjc6Mjk1OjI3OQ",
        },
        {
          x: 1060,
          y: 2148.21,
          id: "Mjk6Njg6MjY3",
        },
        {
          x: 1166.6666666666665,
          y: 2242.876666666667,
          id: "Mjk6Njg6MTIz",
        },
        {
          x: 1044.9999999999998,
          y: 2334.8766666666666,
          id: "Mjk6Mjk1OjMxNQ",
        },
        {
          x: 1471.6666666666667,
          y: 1706.543333333333,
          id: "MzA6MzI2OjQ0Nw",
        },
        {
          x: 1458.3333333333335,
          y: 1963.543333333333,
          id: "MzE6Njg6NjUx",
        },
        {
          x: 1300,
          y: 2080.21,
          id: "MzE6Njg6NDk1",
        },
        {
          x: 1445,
          y: 2198.5433333333335,
          id: "MzE6Njg6Mzc1",
        },
        {
          x: 1441.6666666666665,
          y: 2439.5433333333335,
          id: "MzE6Mjk1OjMxNQ",
        },
        {
          x: 1715,
          y: 1494.8766666666666,
          id: "MzI6MzI2OjU0Mw",
        },
        {
          x: 1596.6666666666667,
          y: 1873.5433333333335,
          id: "MzM6Njg6NTQz",
        },
        {
          x: 1721.6666666666667,
          y: 1980.21,
          id: "MzM6Njg6NDQ3",
        },
        {
          x: 1728.333333333333,
          y: 1823.21,
          id: "MzM6Mjk1OjY5OQ",
        },
        {
          x: 1820,
          y: 1905.21,
          id: "MzM6Mjk1OjM2Mw",
        },
        {
          x: 1775,
          y: 2126.21,
          id: "MzM6Mjk1OjI3OQ",
        },
        {
          x: 1725,
          y: 2189.543333333333,
          id: "MzQ6MzI2OjU1NQ",
        },
        {
          x: 1945,
          y: 1808.21,
          id: "MzQ6MzI2OjE4Mw",
        },
        {
          x: 2080.0000000000005,
          y: 1687.8766666666668,
          id: "MzU6Njg6MTQ3",
        },
        {
          x: 2091.6666666666665,
          y: 2073.543333333333,
          id: "MzY6MzI2OjYyNw",
        },
        {
          x: 1946.6666666666665,
          y: 2149.8766666666666,
          id: "MzY6MzI2OjUzMQ",
        },
        {
          x: 2296.666666666667,
          y: 1469.8766666666666,
          id: "MzY6MzI2OjI1NQ",
        },
        {
          x: 2211.666666666666,
          y: 2016.876666666667,
          id: "Mzc6Njg6MTgz",
        },
        {
          x: 2323.333333333333,
          y: 1941.5433333333335,
          id: "Mzk6Njg6Njk5",
        },
        {
          x: 2383.333333333333,
          y: 2189.8766666666666,
          id: "NDI6OTk6Njk5",
        },
        {
          x: 2300,
          y: 2301.21,
          id: "NDI6OTk6NjE1",
        },
        {
          x: 2628.333333333333,
          y: 1779.876666666667,
          id: "NDI6MzI2OjQxMQ",
        },
        {
          x: 2674.9999999999995,
          y: 1658.21,
          id: "NDI6MzI2OjE1OQ",
        },
        {
          x: 2543.3333333333335,
          y: 2033.21,
          id: "NDM6Njg6NTU1",
        },
        {
          x: 2658.3333333333335,
          y: 2136.5433333333335,
          id: "NDM6Njg6MjY3",
        },
        {
          x: 2525,
          y: 2371.8766666666666,
          id: "NDM6Njg6MTgz",
        },
        {
          x: 2628.3333333333335,
          y: 2450.21,
          id: "NDM6Mjk1OjQyMw",
        },
        {
          x: 2828.333333333333,
          y: 1618.543333333333,
          id: "NDQ6MzI2OjQ5NQ",
        },
        {
          x: 2958.3333333333335,
          y: 1480.21,
          id: "NDU6Njg6Njk5",
        },
        {
          x: 2983.3333333333335,
          y: 1613.5433333333333,
          id: "NDU6Njg6MzE1",
        },
        {
          x: 2846.666666666667,
          y: 1816.8766666666666,
          id: "NDU6Njg6MTQ3",
        },
        {
          x: 2936.6666666666665,
          y: 1925.21,
          id: "NDU6Mjk1OjQ3MQ",
        },
        {
          x: 2946.6666666666665,
          y: 2186.8766666666666,
          id: "NDU6Mjk1OjE5NQ",
        },
        {
          x: 2865,
          y: 2320.21,
          id: "NDU6Mjk1OjExMQ",
        },
        {
          x: 3130,
          y: 1658.5433333333335,
          id: "NDY6MzI2OjQxMQ",
        },
        {
          x: 3211.6666666666665,
          y: 1846.8766666666666,
          id: "NDc6Njg6MzAz",
        },
        {
          x: 3195,
          y: 2169.8766666666666,
          id: "NDc6Njg6MTQ3",
        },
        {
          x: 3308.3333333333335,
          y: 2008.5433333333335,
          id: "NDc6Mjk1OjE0Nw",
        },
        {
          x: 3325,
          y: 2099.8766666666666,
          id: "NDc6Mjk1Ojk5",
        },
        {
          x: 3138.3333333333335,
          y: 2470.8766666666666,
          id: "NDc6Mjk1OjY5OQ",
        },
      ],
    }),
    new ModuleScene({
      name: "map3a",
      canonical: {
        name: "qff2/map3a",
        priority: 0,
      },
      nameInfo: {
        x: 99,
        y: 702.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 28,
      width: 1190,
      height: 858,
      imageLeft: 18,
      imageRight: 1181,
      imageCols: 39,
      imageTop: 18,
      imageBottom: 853,
      imageRows: 28,
      cropLeft: 0,
      cropRight: 637,
      cropTop: 0,
      cropBottom: 858,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/qff/maps/qff2-map3a.json",
      journals: [
        {
          x: 450,
          y: 850,
          id: "Mjc6Mjk1OjI3OQ",
        },
      ],
      tokens: [
        {
          id: "npc53",
          x: 1300,
          y: 1900,
        },
        {
          id: "npc53",
          x: 1800,
          y: 2e3,
        },
        {
          id: "hazard5",
          x: 1600,
          y: 2e3,
        },
      ],
    }),
    new ModuleScene({
      name: "map3b",
      canonical: {
        name: "qff2/map3b",
        priority: 0,
      },
      nameInfo: {
        x: 358,
        y: 390.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 28,
      width: 1190,
      height: 858,
      imageLeft: 18,
      imageRight: 1181,
      imageCols: 39,
      imageTop: 18,
      imageBottom: 853,
      imageRows: 28,
      cropLeft: 653,
      cropRight: 1190,
      cropTop: 0,
      cropBottom: 858,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/qff/maps/qff2-map3b.json",
      journals: [
        {
          x: 450,
          y: 950,
          id: "Mjk6Mjk1OjMxNQ",
        },
        {
          x: 1800,
          y: 3050,
          id: "Mjk6Mjk1Ojk5",
        },
        {
          x: 1850,
          y: 1550,
          id: "MzA6OTk6NTA3",
        },
      ],
      tokens: [
        {
          id: "npc66",
          x: 1700,
          y: 2800,
        },
        {
          id: "npc66",
          x: 2e3,
          y: 2700,
        },
        {
          id: "npc66",
          x: 1400,
          y: 2600,
        },
        {
          id: "npc56",
          x: 1300,
          y: 1500,
        },
        {
          id: "npc56",
          x: 2e3,
          y: 1300,
        },
      ],
    }),
    new ModuleScene({
      name: "map4a",
      canonical: {
        name: "qff2/map4a",
        priority: 0,
      },
      nameInfo: {
        x: 99,
        y: 389.6681,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 38,
      width: 1259,
      height: 858,
      imageLeft: 4,
      imageRight: 1251,
      imageCols: 43,
      imageTop: 29,
      imageBottom: 840,
      imageRows: 28,
      cropLeft: 0,
      cropRight: 605,
      cropTop: 0,
      cropBottom: 858,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/qff/maps/qff2-map4a.json",
      journals: [
        {
          x: 650,
          y: 1050,
          id: "MzY6MzI2OjI1NQ",
        },
      ],
      tokens: [
        {
          id: "npc32",
          x: 1500,
          y: 2400,
        },
        {
          id: "npc32",
          x: 1400,
          y: 2100,
        },
        {
          id: "hazard7",
          x: 1600,
          y: 2200,
        },
      ],
    }),
    new ModuleScene({
      name: "map4b",
      canonical: {
        name: "qff2/map4b",
        priority: 0,
      },
      nameInfo: {
        x: 308.25,
        y: 389.6681,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 38,
      width: 1259,
      height: 858,
      imageLeft: 4,
      imageRight: 1251,
      imageCols: 43,
      imageTop: 29,
      imageBottom: 840,
      imageRows: 28,
      cropLeft: 618,
      cropRight: 1259,
      cropTop: 0,
      cropBottom: 858,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/qff/maps/qff2-map4b.json",
      journals: [
        {
          x: 650,
          y: 950,
          id: "NTE6Njg6MzM5",
        },
      ],
      tokens: [
        {
          id: "npc18",
          x: 2100,
          y: 3200,
        },
        {
          id: "npc18",
          x: 2e3,
          y: 3300,
        },
        {
          id: "npc18",
          x: 2100,
          y: 3100,
        },
        {
          id: "npc18",
          x: 1900,
          y: 3200,
        },
        {
          id: "npc41",
          x: 1900,
          y: 3300,
        },
        {
          id: "npc71",
          x: 2e3,
          y: 1200,
        },
        {
          id: "npc71",
          x: 1900,
          y: 1100,
        },
      ],
    }),
    new ModuleScene({
      name: "map5",
      canonical: {
        name: "qff2/map5",
        priority: 0,
      },
      nameInfo: {
        x: 126.75,
        y: 390.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 50,
      width: 1150,
      height: 847,
      imageLeft: 21,
      imageRight: 1143,
      imageCols: 41,
      imageTop: 36,
      imageBottom: 830,
      imageRows: 29,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/qff/maps/qff2-map5.json",
      journals: [
        {
          x: 1050,
          y: 850,
          id: "NDc6Mjk1OjE0Nw",
        },
        {
          x: 1050,
          y: 950,
          id: "NDk6Njg6MTcx",
        },
        {
          x: 1450,
          y: 1350,
          id: "NDk6Nzc6MTQ3",
        },
        {
          x: 2150,
          y: 1150,
          id: "NDk6Nzc6MTEx",
        },
        {
          x: 2650,
          y: 1650,
          id: "NTA6MTA4OjMzOQ",
        },
        {
          x: 3650,
          y: 1250,
          id: "NTA6MTA4OjI3OQ",
        },
        {
          x: 1450,
          y: 2550,
          id: "NTA6MTA4OjIxOQ",
        },
        {
          x: 1550,
          y: 3150,
          id: "NTA6MTA4OjEzNQ",
        },
        {
          x: 2500,
          y: 2650,
          id: "NTA6MzM1OjI1NQ",
        },
        {
          x: 2950,
          y: 2750,
          id: "NTA6MzM1OjIwNw",
        },
        {
          x: 3400,
          y: 2250,
          id: "NTA6MzM1OjEyMw",
        },
        {
          x: 3750,
          y: 2250,
          id: "NTE6Nzc6Njk5",
        },
        {
          x: 4250,
          y: 2050,
          id: "NTE6Nzc6NTkx",
        },
        {
          x: 4500,
          y: 2200,
          id: "NTE6Nzc6NTA3",
        },
        {
          x: 4250,
          y: 1500,
          id: "NTE6Nzc6NDQ3",
        },
        {
          x: 4900,
          y: 1500,
          id: "NTE6Nzc6NDIz",
        },
        {
          x: 4250,
          y: 2950,
          id: "NTE6Nzc6NDEx",
        },
        {
          x: 4850,
          y: 3e3,
          id: "NTE6Nzc6Mzc1",
        },
      ],
      tokens: [],
    }),
    new ModuleScene({
      name: "map6a",
      canonical: {
        name: "qff2/map6a",
        priority: 0,
      },
      nameInfo: {
        x: 641,
        y: 757.36,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 99,
      width: 1262,
      height: 1637,
      imageIndex: 1,
      imageLeft: 17,
      imageRight: 1236,
      imageCols: 43,
      imageTop: 11,
      imageBottom: 1600,
      imageRows: 56,
      cropLeft: 0,
      cropRight: 1262,
      cropTop: 0,
      cropBottom: 796,
      offsetX: 0,
      offsetY: 0,
      darkness: 0.25,
      detailsFile: "/qff/maps/qff2-map6a.json",
      journals: [
        {
          x: 2550,
          y: 2250,
          id: "Mzk6Njg6MjU1",
        },
        {
          x: 3750,
          y: 2050,
          id: "Mzk6Mjk1OjM1MQ",
        },
        {
          x: 4750,
          y: 1250,
          id: "NDE6Njg6Mzk5",
        },
        {
          x: 4450,
          y: 1550,
          id: "NDE6Njg6NjUx",
        },
        {
          x: 5150,
          y: 2950,
          id: "Mzk6Njg6MjU1",
        },
        {
          x: 5150,
          y: 2250,
          id: "NDE6Njg6NjUx",
        },
      ],
      tokens: [
        {
          id: "npc18",
          x: 1800,
          y: 1300,
        },
        {
          id: "npc18",
          x: 1900,
          y: 1300,
        },
        {
          id: "npc18",
          x: 2e3,
          y: 1300,
        },
        {
          id: "npc62",
          x: 2900,
          y: 2400,
        },
        {
          id: "npc13",
          x: 4100,
          y: 2200,
        },
        {
          id: "npc14",
          x: 3600,
          y: 2900,
        },
        {
          id: "hazard11",
          x: 3800,
          y: 2900,
        },
      ],
    }),
    new ModuleScene({
      name: "map6b",
      canonical: {
        name: "qff2/map6b",
        priority: 0,
      },
      nameInfo: {
        x: 636,
        y: 376.6262,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 99,
      width: 1262,
      height: 1637,
      imageIndex: 1,
      imageLeft: 17,
      imageRight: 1236,
      imageCols: 43,
      imageTop: 11,
      imageBottom: 1600,
      imageRows: 56,
      cropLeft: 0,
      cropRight: 1262,
      cropTop: 816,
      cropBottom: 1637,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/qff/maps/qff2-map6b.json",
      journals: [
        {
          x: 1800,
          y: 2400,
          id: "NTc6Mjk1OjYxNQ",
        },
        {
          x: 2300,
          y: 2400,
          id: "NTg6MzI2OjYyNw",
        },
        {
          x: 1850,
          y: 3250,
          id: "NTk6Njg6NjYz",
        },
        {
          x: 1950,
          y: 1550,
          id: "NTk6Njg6NTkx",
        },
        {
          x: 3550,
          y: 1850,
          id: "NTk6Mjk1OjY5OQ",
        },
        {
          x: 4750,
          y: 2950,
          id: "NTk6Mjk1OjIxOQ",
        },
        {
          x: 4750,
          y: 1850,
          id: "NjA6MzI2OjM1MQ",
        },
        {
          x: 4050,
          y: 2350,
          id: "NjE6Njg6MTQ3",
        },
        {
          x: 1250,
          y: 950,
          id: "NTc6MTA2OjM4Nw",
        },
      ],
      tokens: [
        {
          id: "npc21",
          x: 1800,
          y: 2100,
        },
        {
          id: "npc21",
          x: 1800,
          y: 2400,
        },
        {
          id: "npc21",
          x: 1800,
          y: 2600,
        },
        {
          id: "npc73",
          x: 2300,
          y: 2900,
        },
        {
          id: "npc73",
          x: 2400,
          y: 1600,
        },
        {
          id: "npc74",
          x: 1700,
          y: 1500,
        },
        {
          id: "npc47",
          x: 3500,
          y: 2100,
        },
        {
          id: "npc47",
          x: 3500,
          y: 2300,
        },
        {
          id: "npc47",
          x: 3500,
          y: 2500,
        },
        {
          id: "npc67",
          x: 4100,
          y: 2700,
        },
        {
          id: "npc67",
          x: 4e3,
          y: 3400,
        },
        {
          id: "npc67",
          x: 5200,
          y: 2700,
        },
        {
          id: "npc67",
          x: 5100,
          y: 3400,
        },
        {
          id: "npc30",
          x: 4700,
          y: 1600,
        },
        {
          id: "npc27",
          x: 4800,
          y: 1900,
        },
        {
          id: "npc28",
          x: 4600,
          y: 1e3,
        },
      ],
    }),
  ];
  journals = [
    new AdventureImage({
      name: "journal1",
      page: 3,
      width: 837,
      height: 412,
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
      width: 1260,
      height: 850,
    }),
    new LabelImage({
      name: "journal4",
      page: 9,
      width: 401,
      height: 401,
      label: "OToyMzQ6NTQ5",
    }),
    new LabelImage({
      name: "journal5",
      page: 17,
      width: 447,
      height: 447,
      label: "MTc6MjI1OjM2Nw",
    }),
    new LabelImage({
      name: "journal6",
      page: 19,
      width: 493,
      height: 493,
      label: "MTk6MTk5OjUzNA",
    }),
    new AdventureImage({
      name: "journal7",
      page: 48,
      width: 1229,
      height: 848,
    }),
    new LabelImage({
      name: "journal8",
      page: 53,
      width: 390,
      height: 510,
      label: "NTM6MjQ3OjM4NQ",
    }),
    new AdventureImage({
      name: "journal9",
      page: 62,
      width: 1261,
      height: 1636,
    }),
    new LabelImage({
      name: "journal10",
      page: 64,
      width: 739,
      height: 1034,
      label: "NjQ6OTk6Njk5",
    }),
    new LabelImage({
      name: "journal11",
      page: 68,
      width: 903,
      height: 1188,
      label: "Njg6OTk6NjI3",
    }),
    new LabelImage({
      name: "journal12",
      page: 69,
      width: 895,
      height: 1251,
      label: "Njk6MzU4OjExOA",
    }),
    new AdventureImage({
      name: "journal13",
      page: 70,
      width: 1259,
      height: 1636,
    }),
    new LabelImage({
      name: "journal14",
      page: 72,
      width: 896,
      height: 885,
      label: "NzI6MjY0Ojk1",
    }),
    new LabelImage({
      name: "journal15",
      page: 75,
      width: 882,
      height: 804,
      label: "NzU6MzMwOjc2",
    }),
    new AdventureImage({
      name: "journal16",
      page: 76,
      width: 1259,
      height: 1636,
    }),
    new LabelImage({
      name: "journal17",
      page: 77,
      width: 454,
      height: 597,
      label: "Nzc6MjQ1OjQwNQ",
    }),
    new LabelImage({
      name: "journal18",
      page: 78,
      width: 899,
      height: 1114,
      label: "Nzg6MjI5OjE0OA",
    }),
    new LabelImage({
      name: "journal19",
      page: 79,
      width: 776,
      height: 1171,
      label: "Nzk6MzIzOjEzMA",
    }),
    new LabelImage({
      name: "journal20",
      page: 80,
      width: 488,
      height: 488,
      label: "ODA6MjU3OjMwMg",
    }),
    new LabelImage({
      name: "journal21",
      page: 81,
      width: 504,
      height: 504,
      label: "ODE6MjQxOjMxNg",
    }),
    new LabelImage({
      name: "journal22",
      page: 82,
      width: 443,
      height: 443,
      label: "ODI6MjYyOjI5OQ",
    }),
    new LabelImage({
      name: "journal23",
      page: 83,
      width: 336,
      height: 336,
      label: "ODM6MjQxOjIwNw",
    }),
    new LabelImage({
      name: "journal24",
      page: 83,
      width: 500,
      height: 500,
      label: "ODM6MjE3OjQ4NQ",
    }),
    new LabelImage({
      name: "journal25",
      page: 86,
      width: 766,
      height: 1113,
      label: "ODY6MjA3OjE0Nw",
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.ovrQ2R9HJJhC1Yij",
      page: 10,
      width: 868,
      height: 1263,
      tokenX: -303,
      tokenY: -146,
      tokenSize: 423,
      forIds: ["ODY6MjUxOjYxNQ", "MTA6MzI3OjIwNw", "NDI6MzI2OjI0Mw"],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.KeOKPlxxBw5m2wly",
      page: 12,
      width: 664,
      height: 842,
      tokenX: -204,
      tokenY: 81,
      tokenSize: 422,
      forIds: ["MTI6MzI2OjQxMQ"],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.VyXYqiIWYpyx9QJm",
      page: 15,
      width: 836,
      height: 1286,
      tokenX: -215,
      tokenY: -6,
      tokenSize: 418,
      forIds: ["MTU6Njg6NDM1"],
    }),
    new ModuleNpc({
      id: "npc4",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.o5apaaqJlL7A48N8",
      page: 16,
      width: 755,
      height: 1007,
      tokenX: 120,
      tokenY: 45,
      tokenSize: 1007,
      forIds: ["MTc6Njg6NTY3"],
    }),
    new ModuleNpc({
      id: "npc5",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 18,
        x: 300.9045,
        y: 430.2971,
      },
      page: 18,
      width: 567,
      height: 544,
      tokenX: 40,
      tokenY: 74,
      tokenSize: 623,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc6",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.fpwpA2JmpbwREa5a",
      page: 22,
      width: 1052,
      height: 1381,
      tokenX: -174,
      tokenY: -381,
      tokenSize: 345,
      forIds: ["MjM6Mjk1OjI1NQ", "MjY6OTk6NTc5"],
    }),
    new ModuleNpc({
      id: "npc7",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.gWgMg7cARqOe82O6",
      uniqueKey:
        "Compendium.pf2e.pathfinder-monster-core.Actor.gWgMg7cARqOe82O6.QFF",
      page: 25,
      width: 846,
      height: 1156,
      tokenX: 10,
      tokenY: -162,
      tokenSize: 792,
      forIds: ["MjU6Njg6NTE5"],
    }),
    new ModuleNpc({
      id: "npc8",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.nkWnoEHWUsBLgNje",
      page: 26,
      width: 1194,
      height: 904,
      tokenX: -27,
      tokenY: -18,
      tokenSize: 886,
      forIds: ["Mjc6Mjk1OjU0Mw"],
    }),
    new ModuleNpc({
      id: "npc9",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 31,
        x: 259.4131,
        y: 447.7971,
      },
      page: 31,
      width: 524,
      height: 524,
      tokenX: 80,
      tokenY: 59,
      tokenSize: 608,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc10",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.Ud6Iy1GolgtwrKQK",
      name: {
        page: 32,
        x: 197.7785,
        y: 101.7971,
      },
      page: 32,
      width: 1016,
      height: 1318,
      tokenX: 151,
      tokenY: 0,
      tokenSize: 1318,
      forIds: ["MzI6MzI2OjE3MQ"],
    }),
    new ModuleNpc({
      id: "npc11",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.lJJ81JBAIuI72Fq2",
      page: 34,
      width: 878,
      height: 961,
      tokenX: -107,
      tokenY: 68,
      tokenSize: 849,
      forIds: ["MzQ6OTk6NTkx"],
    }),
    new ModuleNpc({
      id: "npc12",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.LL3XklJHogUKWDfh",
      page: 35,
      width: 834,
      height: 876,
      tokenX: -129,
      tokenY: 89,
      tokenSize: 624,
      forIds: ["MzU6Njg6NTQz", "MzY6OTk6NDEx"],
    }),
    new ModuleNpc({
      id: "npc13",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.BPZryWdi6LB9N9KC",
      page: 40,
      width: 713,
      height: 950,
      tokenX: 155,
      tokenY: 0,
      tokenSize: 1034,
      forIds: ["NDA6OTk6Njk5"],
    }),
    new ModuleNpc({
      id: "npc14",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.dNATu2RQLFYY3hYn",
      name: {
        page: 41,
        x: 266.6449,
        y: 456.9221,
      },
      page: 41,
      width: 500,
      height: 500,
      tokenX: 68,
      tokenY: 102,
      tokenSize: 640,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc15",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.kOLKFJ4Llso96HiD",
      page: 42,
      width: 792,
      height: 1056,
      tokenX: -180,
      tokenY: 48,
      tokenSize: 412,
      forIds: ["NDE6Njg6MjA3"],
    }),
    new ModuleNpc({
      id: "npc16",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.GNwLVbfFx8EPz7xO",
      name: {
        page: 44,
        x: 111.0776,
        y: 136.2971,
      },
      page: 44,
      width: 868,
      height: 1157,
      tokenX: 55,
      tokenY: 121,
      tokenSize: 1017,
      forIds: ["NDQ6MzI2OjE3MQ", "NDU6Njg6MTk1"],
    }),
    new ModuleNpc({
      id: "npc17",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 47,
        x: 263.9485,
        y: 457.6096,
      },
      page: 47,
      width: 475,
      height: 475,
      tokenX: 92,
      tokenY: 133,
      tokenSize: 643,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc18",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.PsRObxHMe71zJi8d",
      page: 52,
      width: 844,
      height: 1225,
      tokenX: -175,
      tokenY: -76,
      tokenSize: 497,
      forIds: [
        "Mzc6Mjk1OjI3OQ",
        "NDk6Njg6MjE5",
        "Mzk6Mjk1OjYzOQ",
        "NTE6Mjk1OjU3OQ",
      ],
    }),
    new ModuleNpc({
      id: "npc19",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.dPJxDpVcDFDQqwWO",
      page: 55,
      width: 857,
      height: 1187,
      tokenX: -151,
      tokenY: 98,
      tokenSize: 515,
      forIds: ["NTQ6MzI2OjM2Mw"],
    }),
    new ModuleNpc({
      id: "npc20",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.pQMgLVlFeGjScENC",
      page: 56,
      width: 747,
      height: 1106,
      tokenX: -131,
      tokenY: 104,
      tokenSize: 462,
      forIds: ["NTY6MzM2OjI5MQ"],
    }),
    new ModuleNpc({
      id: "npc21",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.ZxKGQpbkXVLI7lab",
      page: 58,
      width: 738,
      height: 1218,
      tokenX: -216,
      tokenY: 24,
      tokenSize: 434,
      forIds: ["NTc6Mjk1OjM2Mw"],
    }),
    new ModuleNpc({
      id: "npc22",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.9LKXjZrmeSjeGseL",
      page: 84,
      width: 871,
      height: 1098,
      tokenX: -25,
      tokenY: 146,
      tokenSize: 790,
      forIds: ["ODQ6MzYwOjMxNQ", "MTk6Njg6NDEx"],
    }),
    new ModuleNpc({
      id: "npc23",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.XxKWVyq21NGiDCaR",
      page: 85,
      width: 894,
      height: 975,
      tokenX: -55,
      tokenY: -44,
      tokenSize: 863,
      forIds: ["ODU6Njg6NTY3"],
    }),
    new ModuleNpc({
      id: "npc24",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.IP3fGAEz3Nw1TzDD",
      page: 87,
      width: 907,
      height: 987,
      tokenX: -160,
      tokenY: 115,
      tokenSize: 819,
      forIds: ["ODc6Njg6NTY3"],
    }),
    new ModuleNpc({
      id: "npc25",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.jNv046Jhoq4yEMey",
      page: 88,
      width: 840,
      height: 1009,
      tokenX: -131,
      tokenY: 119,
      tokenSize: 701,
      forIds: ["OTo2ODo1MTk", "ODg6MjUxOjQ1OQ"],
    }),
    new ModuleNpc({
      id: "npc26",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.9znaKK6OeZnQ03Wc",
      page: 89,
      width: 790,
      height: 948,
      tokenX: -97,
      tokenY: -58,
      tokenSize: 752,
      forIds: ["NTQ6MzI2OjQxMQ", "ODk6Njg6NDEx"],
    }),
    new ModuleNpc({
      id: "npc27",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.TbVMaYNvcXUI5aY8",
      page: 91,
      width: 834,
      height: 1326,
      tokenX: -215,
      tokenY: -170,
      tokenSize: 458,
      forIds: ["OTA6OTk6Mzc1", "NjE6Njg6Mzc1"],
    }),
    new ModuleNpc({
      id: "npc28",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.zXTacktEPpjUlYr3",
      page: 93,
      width: 1078,
      height: 1177,
      tokenX: -166,
      tokenY: 0,
      tokenSize: 953,
      forIds: ["NjE6Njg6Mjc5", "OTI6MzI2OjIxOQ"],
    }),
    new ModuleNpc({
      id: "npc29",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.eF87AWFclYpu1cgD",
      name: {
        page: 26,
        x: 99,
        y: 483,
      },
      label: "AE",
      forIds: ["MjY6OTk6NDgz"],
    }),
    new ModuleNpc({
      id: "npc30",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.RPXXt5bgFCqKibZ3",
      label: "I",
      forIds: ["OTE6Njg6NjUx", "NjE6Njg6MzI3"],
    }),
    new ModuleNpc({
      id: "npc31",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.qtD7Xa8Mgl0Y63os",
      name: {
        page: 34,
        x: 99,
        y: 699,
      },
      label: "C",
      forIds: ["MzQ6OTk6Njk5"],
    }),
    new ModuleNpc({
      id: "npc32",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.6UrgCT8MwC8CeGbu",
      label: "B",
      forIds: ["MzY6MzI2OjEzNQ"],
    }),
    new ModuleNpc({
      id: "npc33",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.3qDYEHtyAobpCg5r",
      name: {
        page: 23,
        x: 294.75,
        y: 207,
      },
      label: "MH",
      forIds: ["MjM6Mjk1OjIwNw"],
    }),
    new ModuleNpc({
      id: "npc34",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.x7Mnb3F4r6JvXD9C",
      name: {
        page: 23,
        x: 67.5,
        y: 327,
      },
      label: "MFH",
      forIds: ["MjM6Njg6MzI3"],
    }),
    new ModuleNpc({
      id: "npc35",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.FBq4bqtKUBpJUCMU",
      name: {
        page: 23,
        x: 67.5,
        y: 423,
        substring: {
          start: 0,
          end: 23,
        },
      },
      label: "B",
      forIds: ["MjM6Njg6NDIz", "MjM6Mjk1OjMwMw"],
    }),
    new ModuleNpc({
      id: "npc36",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.CFBDZzfWCANLJcpF",
      name: {
        page: 23,
        x: 67.5,
        y: 375,
        substring: {
          start: 0,
          end: 24,
        },
      },
      label: "T",
      forIds: ["MjM6Njg6Mzc1"],
    }),
    new ModuleNpc({
      id: "npc37",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.DC9b8mG1KdyXZkLp",
      label: "C",
      forIds: ["MzU6Njg6NTkx"],
    }),
    new ModuleNpc({
      id: "npc38",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.sbVdWfLZ2rdPh9Ec",
      label: "CG",
      forIds: ["NDc6Mjk1OjQzNQ", "NTY6OTk6NjI3"],
    }),
    new ModuleNpc({
      id: "npc39",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.UFKiRCIj9ETec46r",
      label: "B",
      forIds: ["ODQ6MjUxOjU5MQ"],
    }),
    new ModuleNpc({
      id: "npc40",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.haLAebehr7ppMlPn",
      label: "CET",
      forIds: ["MzY6OTk6MzYz"],
    }),
    new ModuleNpc({
      id: "npc41",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.pHaQew7IEmk198Wz",
      label: "E",
      forIds: ["NTE6Mjk1OjUzMQ"],
    }),
    new ModuleNpc({
      id: "npc42",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.cvfIkEF6xmWn2soN",
      label: "G",
      forIds: ["MTQ6OTk6NDU5", "MTM6Njg6MTQ3"],
    }),
    new ModuleNpc({
      id: "npc43",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.LHHgGSs0ELCR4CYK",
      label: "G",
      forIds: ["NDU6Mjk1OjI5MQ"],
    }),
    new ModuleNpc({
      id: "npc44",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.I00S3LWnDJfCn4zv",
      label: "GAS",
      forIds: ["NDM6Njg6NDQ3"],
    }),
    new ModuleNpc({
      id: "npc45",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.6K4RWus85o8iqy0t",
      label: "GB",
      forIds: ["MjY6OTk6NTMx"],
    }),
    new ModuleNpc({
      id: "npc46",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.1Qqu3b4J4aJYEQOX",
      label: "H",
      forIds: ["MzY6MzI2OjMzOQ"],
    }),
    new ModuleNpc({
      id: "npc47",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.tieZOKf2qX7GsL9H",
      label: "IG",
      forIds: ["NTk6Mjk1OjYwMw"],
    }),
    new ModuleNpc({
      id: "npc48",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.XgGeD4fz5m7nQQlN",
      label: "LW",
      forIds: ["MzM6Mjk1OjQxMQ"],
    }),
    new ModuleNpc({
      id: "npc49",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.ZZkuo6mOh0SQWC3T",
      label: "M",
      forIds: ["ODc6Njg6MjQz"],
    }),
    new ModuleNpc({
      id: "npc50",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.1wVVI0Jj7MdZ3uHg",
      label: "M",
      forIds: ["NDI6MzI2OjI5MQ"],
    }),
    new ModuleNpc({
      id: "npc51",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.jQ7zBVDCEhuMOOTl",
      label: "N",
      forIds: ["NDU6Mjk1OjI0Mw"],
    }),
    new ModuleNpc({
      id: "npc52",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.BcSzGmSxCn0uWkxU",
      label: "N",
      forIds: [
        "MzQ6OTk6NDk1",
        "NDI6MzI2OjU5MQ",
        "NTU6Njg6Mzk5",
        "Mzg6OTk6MjE5",
        "NDE6Njg6MjU1",
      ],
    }),
    new ModuleNpc({
      id: "npc53",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.zpd6b6UPP72ZELCj",
      label: "P",
      forIds: ["Mjg6OTk6MTk1"],
    }),
    new ModuleNpc({
      id: "npc54",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.9jF564DF6ylEovna",
      label: "Q",
      forIds: ["MzI6MzI2OjIxOQ"],
    }),
    new ModuleNpc({
      id: "npc55",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.AdZ4EklEmpHViycl",
      name: {
        page: 44,
        x: 99,
        y: 639,
      },
      label: "GL",
      forIds: ["NDQ6OTk6NjM5"],
    }),
    new ModuleNpc({
      id: "npc56",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.aYDbWuOj66nve8r4",
      name: {
        page: 30,
        x: 99,
        y: 147,
      },
      label: "JD",
      forIds: ["MzA6OTk6MTQ3"],
    }),
    new ModuleNpc({
      id: "npc57",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.MNb1Hjd2gKimnfvV",
      label: "R",
      forIds: ["NDM6Mjk1OjE0Nw"],
    }),
    new ModuleNpc({
      id: "npc58",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.tm3Tixb7IDoLdJ5k",
      name: {
        page: 43,
        x: 294.75,
        y: 99,
      },
      label: "TA",
      forIds: ["NDM6Mjk1Ojk5"],
    }),
    new ModuleNpc({
      id: "npc59",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.VotlWUsFKdOrHWF6",
      label: "S",
      forIds: ["MzE6Njg6Njk5"],
    }),
    new ModuleNpc({
      id: "npc60",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.sEgjgitJmwYYa4mV",
      label: "SG",
      forIds: ["NTY6MzI2OjMzOQ"],
    }),
    new ModuleNpc({
      id: "npc61",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.X2vz6CrMaHIso0ha",
      label: "SH",
      forIds: ["Mzc6Mjk1OjMyNw"],
    }),
    new ModuleNpc({
      id: "npc62",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.V4rVnbjJbcOIdC4Z",
      label: "SH",
      forIds: ["Mzk6Mjk1OjU5MQ"],
    }),
    new ModuleNpc({
      id: "npc63",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.3uWNAMSPf0y2Bx0g",
      label: "SWR",
      forIds: ["NTU6Njg6MzUx", "Mzg6OTk6MTcx"],
    }),
    new ModuleNpc({
      id: "npc64",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.trchDxbDR2TiPMxT",
      label: "SG",
      forIds: ["MzQ6OTk6NjM5"],
    }),
    new ModuleNpc({
      id: "npc65",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.6CRUvM2p9csP735v",
      name: {
        page: 14,
        x: 326.25,
        y: 699,
        substring: {
          start: 0,
          end: 14,
        },
      },
      label: "P",
      forIds: ["MTQ6MzI2OjY5OQ"],
    }),
    new ModuleNpc({
      id: "npc66",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.oUCl1KA2s2t18nlU",
      label: "T",
      forIds: ["MzA6OTk6NTU1"],
    }),
    new ModuleNpc({
      id: "npc67",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.nwbgz8PNXaHPU5tg",
      label: "VW",
      forIds: ["NjA6OTk6MjQz"],
    }),
    new ModuleNpc({
      id: "npc68",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.2mg30nJR6P3HJDSd",
      label: "VBS",
      forIds: ["ODo5OTo0NTk"],
    }),
    new ModuleNpc({
      id: "npc69",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.BN5Lb6IsQ9Wyu3rL",
      label: "W",
      forIds: ["MTk6Mjk4OjQzNQ"],
    }),
    new ModuleNpc({
      id: "npc70",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.loYbh3SealeYmxai",
      label: "WR",
      forIds: ["NDI6MzI2OjU0Mw"],
    }),
    new ModuleNpc({
      id: "npc71",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.MNb1Hjd2gKimnfvV",
      name: {
        page: 51,
        x: 294.75,
        y: 483,
      },
      label: "R",
      forIds: ["NTE6Mjk1OjQ4Mw"],
    }),
    new ModuleNpc({
      id: "npc72",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.WioQ6rOeMRuTOliY",
      label: "ZB",
      forIds: ["Mzc6Mjk1OjM3NQ", "NDI6MzI2OjYzOQ", "NDE6Njg6NDQ3"],
    }),
    new ModuleNpc({
      id: "npc73",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.0KrkQLsLX2PPUus7",
      label: "ZM",
      forIds: ["NTg6MzQwOjQ1OQ"],
    }),
    new ModuleNpc({
      id: "npc74",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.3OPUMuBQThM5EXjz",
      name: {
        page: 44,
        x: 99,
        y: 699,
      },
      label: "YWD",
      forIds: ["NDQ6OTk6Njk5"],
    }),
    new ModuleNpc({
      id: "hazard1",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.9bMjxEnzFuJfWyP8",
      label: "AT",
      forIds: ["MTU6Njg6MjA3"],
    }),
    new ModuleNpc({
      id: "hazard2",
      actorUuid: "Compendium.pf2e.hazards.Actor.Q8bXKgDm8eguqThB",
      label: "BM",
      forIds: ["MTE6Njg6NDEx"],
    }),
    new ModuleNpc({
      id: "hazard3",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.Cdr1PAtVs3LKYsMQ",
      label: "C",
      forIds: ["ODozMjY6Njk5"],
    }),
    new ModuleNpc({
      id: "hazard4",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.cgoupvfNv0canswK",
      label: "FS",
      forIds: ["OToyOTU6MTk1", "ODo5OTozMjc"],
    }),
    new ModuleNpc({
      id: "hazard5",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.E0potK8eECcpyLMa",
      label: "FF",
      forIds: ["Mjg6OTk6OTk"],
    }),
    new ModuleNpc({
      id: "hazard6",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.JBRmOWh7Dg2HfvsC",
      label: "FOL",
      forIds: ["MzM6Njg6Mjc5"],
    }),
    new ModuleNpc({
      id: "hazard7",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.XhzGe3CAlugFu8AM",
      label: "FF",
      forIds: ["Mzc6Njg6Njk5"],
    }),
    new ModuleNpc({
      id: "hazard8",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.VQkyrePnLph9yvD8",
      label: "OE",
      forIds: ["OTo2ODo0MTE"],
    }),
    new ModuleNpc({
      id: "hazard9",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.wmcSHQxJRT9RrInC",
      label: "PA",
      forIds: ["MTc6Njg6MTgz"],
    }),
    new ModuleNpc({
      id: "hazard10",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.Sb9xUYxdWyMmkvQL",
      label: "RC",
      forIds: ["MTM6Njg6NDk1"],
    }),
    new ModuleNpc({
      id: "hazard11",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.EsMrRuDoACAxLxno",
      label: "SDC",
      forIds: ["NDA6MzU5OjMwMw"],
    }),
    new ModuleNpc({
      id: "hazard12",
      actorUuid: "Compendium.pf2e.hazards.Actor.gFt2nzQrVgXM9tmJ",
      label: "TS",
      forIds: ["MTM6Mjk1OjM4Nw"],
    }),
  ];
  journalPages = [
    {
      name: "Chapter 1",
      pages: [
        {
          id: "NjoyNDU6MzE5",
        },
        {
          id: "NzozNzE6Njk5",
        },
        {
          id: "ODoxMTU6Njk5",
        },
        {
          id: "MTM6MzExOjY5OQ",
        },
        {
          id: "MTQ6MTE1OjY5OQ",
        },
        {
          id: "NzoxMzM6Njk5",
        },
        {
          id: "NzoxNDA6NjE1",
        },
        {
          id: "Nzo2ODozMzk",
        },
        {
          id: "ODo5OToxMjM",
        },
        {
          id: "ODozMjY6NDgz",
        },
        {
          id: "ODozMjY6MzE1",
        },
        {
          id: "OTozNTI6NTc5",
        },
        {
          id: "OToyOTU6Mzc1",
        },
        {
          id: "OToyOTU6MTEx",
        },
        {
          id: "MTA6MzI2OjYzOQ",
        },
        {
          id: "MTA6NDA2OjU1NQ",
        },
        {
          id: "MTE6Njg6Njk5",
        },
        {
          id: "MTE6Njg6NTMx",
        },
        {
          id: "MTE6Njg6MzE1",
        },
        {
          id: "MTE6Njg6MTk1",
        },
        {
          id: "MTE6Mjk1OjU2Nw",
        },
        {
          id: "MTI6OTk6Njk5",
        },
        {
          id: "MTM6Njg6MzE1",
        },
        {
          id: "MTM6Mjk1OjI1NQ",
        },
        {
          id: "MTM6Mjk1OjE4Mw",
        },
        {
          id: "MTQ6OTk6Mzc1",
        },
        {
          id: "MTQ6OTk6MTk1",
        },
        {
          id: "MTQ6MzI2OjEyMw",
        },
        {
          id: "MTY6MzY4OjM3NQ",
        },
        {
          id: "MTY6Mzg1OjI2Nw",
        },
        {
          id: "MTc6Mzg4OjQ5NQ",
        },
        {
          id: "MTc6Mjk1OjI3OQ",
        },
        {
          id: "MTg6MzI2OjE1OQ",
        },
        {
          id: "MTk6Njg6MTcx",
        },
        {
          id: "MTk6Mjk5OjI5MQ",
        },
      ],
    },
    {
      name: "Chapter 2",
      pages: [
        {
          id: "MjA6MjQ0OjM0MQ",
        },
        {
          id: "MjE6MzcxOjY5OQ",
        },
        {
          id: "MjE6MzcxOjQ4Mw",
        },
        {
          id: "MjM6MzExOjY5OQ",
        },
        {
          id: "MjU6MzExOjY5OQ",
        },
        {
          id: "MzU6MzExOjY5OQ",
        },
        {
          id: "Mzc6MzExOjY5OQ",
        },
        {
          id: "NDY6MTE1OjY5OQ",
        },
        {
          id: "MjE6MTQyOjU3OQ",
        },
        {
          id: "MjE6MTA4OjEzNQ",
        },
        {
          id: "MjM6MTA5OjY5OQ",
        },
        {
          id: "MjM6Njg6NjM5",
        },
        {
          id: "MjM6Njg6Mjc5",
        },
        {
          id: "MjM6Njg6MTcx",
        },
        {
          id: "MjM6MzI0OjE1OQ",
        },
        {
          id: "MjQ6OTk6MjU1",
        },
        {
          id: "MjQ6OTk6MjE5",
        },
        {
          id: "MjQ6OTk6OTk",
        },
        {
          id: "MjQ6MzI2OjE0Nw",
        },
        {
          id: "MjU6Njg6MTk1",
        },
        {
          id: "MjU6Njg6MTEx",
        },
        {
          id: "MjY6MzI2OjYzOQ",
        },
        {
          id: "Mjc6Njg6NjI3",
        },
        {
          id: "Mjc6Njg6OTk",
        },
        {
          id: "Mjc6Mjk1OjQxMQ",
        },
        {
          id: "Mjc6Mjk1OjI3OQ",
        },
        {
          id: "Mjk6Njg6MjY3",
        },
        {
          id: "Mjk6Njg6MTIz",
        },
        {
          id: "Mjk6Mjk1OjMxNQ",
        },
        {
          id: "Mjk6Mjk1Ojk5",
        },
        {
          id: "MzA6OTk6NTA3",
        },
        {
          id: "MzA6MzI2OjQ0Nw",
        },
        {
          id: "MzE6Njg6NjUx",
        },
        {
          id: "MzE6Njg6NDk1",
        },
        {
          id: "MzE6Njg6Mzc1",
        },
        {
          id: "MzE6Mjk1OjMxNQ",
        },
        {
          id: "MzI6MzI2OjU0Mw",
        },
        {
          id: "MzM6Njg6NTQz",
        },
        {
          id: "MzM6Njg6NDQ3",
        },
        {
          id: "MzM6Mjk1OjY5OQ",
        },
        {
          id: "MzM6Mjk1OjM2Mw",
        },
        {
          id: "MzM6Mjk1OjI3OQ",
        },
        {
          id: "MzQ6MzI2OjU1NQ",
        },
        {
          id: "MzQ6MzI2OjE4Mw",
        },
        {
          id: "MzU6Njg6MTQ3",
        },
        {
          id: "MzY6MzI2OjYyNw",
        },
        {
          id: "MzY6MzI2OjUzMQ",
        },
        {
          id: "MzY6MzI2OjI1NQ",
        },
        {
          id: "Mzc6Njg6MTgz",
        },
        {
          id: "Mzk6Njg6Njk5",
        },
        {
          id: "Mzk6Njg6MjU1",
        },
        {
          id: "Mzk6Mjk1OjM1MQ",
        },
        {
          id: "NDE6Njg6NjUx",
        },
        {
          id: "NDE6Njg6Mzk5",
        },
        {
          id: "NDI6OTk6Njk5",
        },
        {
          id: "NDI6OTk6NjE1",
        },
        {
          id: "NDI6MzI2OjQxMQ",
        },
        {
          id: "NDI6MzI2OjE1OQ",
        },
        {
          id: "NDM6Njg6NTU1",
        },
        {
          id: "NDM6Njg6MjY3",
        },
        {
          id: "NDM6Njg6MTgz",
        },
        {
          id: "NDM6Mjk1OjQyMw",
        },
        {
          id: "NDQ6MzI2OjQ5NQ",
        },
        {
          id: "NDU6Njg6Njk5",
        },
        {
          id: "NDU6Njg6MzE1",
        },
        {
          id: "NDU6Njg6MTQ3",
        },
        {
          id: "NDU6Mjk1OjQ3MQ",
        },
        {
          id: "NDU6Mjk1OjE5NQ",
        },
        {
          id: "NDU6Mjk1OjExMQ",
        },
        {
          id: "NDY6MzI2OjQxMQ",
        },
        {
          id: "NDc6Njg6MzAz",
        },
        {
          id: "NDc6Njg6MTQ3",
        },
        {
          id: "NDc6Mjk1OjY5OQ",
        },
        {
          id: "NDc6Mjk1OjE0Nw",
        },
        {
          id: "NDc6Mjk1Ojk5",
        },
      ],
    },
    {
      name: "Chapter 3",
      pages: [
        {
          id: "NDg6MjQ0OjMzMA",
        },
        {
          id: "NDk6MzcxOjY5OQ",
        },
        {
          id: "NTM6MzExOjY5OQ",
        },
        {
          id: "NDg6NDA1OjE0Nw",
        },
        {
          id: "NDk6Njg6MzE1",
        },
        {
          id: "NDk6Nzc6Mjc5",
        },
        {
          id: "NDk6Njg6MTcx",
        },
        {
          id: "NDk6Nzc6MTQ3",
        },
        {
          id: "NDk6Nzc6MTEx",
        },
        {
          id: "NTA6MTA4OjMzOQ",
        },
        {
          id: "NTA6MTA4OjI3OQ",
        },
        {
          id: "NTA6MTA4OjIxOQ",
        },
        {
          id: "NTA6MTA4OjEzNQ",
        },
        {
          id: "NTA6MzM1OjI1NQ",
        },
        {
          id: "NTA6MzM1OjIwNw",
        },
        {
          id: "NTA6MzM1OjEyMw",
        },
        {
          id: "NTE6Nzc6Njk5",
        },
        {
          id: "NTE6Nzc6NTkx",
        },
        {
          id: "NTE6Nzc6NTA3",
        },
        {
          id: "NTE6Nzc6NDQ3",
        },
        {
          id: "NTE6Nzc6NDIz",
        },
        {
          id: "NTE6Nzc6NDEx",
        },
        {
          id: "NTE6Nzc6Mzc1",
        },
        {
          id: "NTE6Njg6MzM5",
        },
        {
          id: "NTE6Nzc6MTIz",
        },
        {
          id: "NTE6Mjk1OjM4Nw",
        },
        {
          id: "NTI6MzI2OjE4Mw",
        },
        {
          id: "NTM6MzU5OjEyMw",
        },
        {
          id: "NTQ6MzI2OjYxNQ",
        },
        {
          id: "NTU6Njg6NTQz",
        },
        {
          id: "NTU6Njg6MzAz",
        },
        {
          id: "NTU6Mjk1OjY2Mw",
        },
        {
          id: "NTY6OTk6NTc5",
        },
        {
          id: "NTc6MTA2OjM4Nw",
        },
        {
          id: "NTc6Mjk1OjYxNQ",
        },
        {
          id: "NTg6MzI2OjYyNw",
        },
        {
          id: "NTk6Njg6NjYz",
        },
        {
          id: "NTk6Njg6NTkx",
        },
        {
          id: "NTk6Mjk1OjY5OQ",
        },
        {
          id: "NTk6Mjk1OjIxOQ",
        },
        {
          id: "NjA6MzI2OjM1MQ",
        },
        {
          id: "NjE6Njg6MTQ3",
        },
        {
          id: "NjE6MzQ4OjYwMw",
        },
      ],
    },
    {
      name: "Back Matter",
      pages: [
        {
          id: "NjM6MTQ2OjY1OA",
        },
        {
          id: "NjM6MTM0OjI5MQ",
        },
        {
          id: "NjM6MzA3OjQ4Mw",
        },
        {
          id: "NjQ6OTk6Njk5",
        },
        {
          id: "NjU6Njg6Njk5",
        },
        {
          id: "NjU6Njg6MjU1",
        },
        {
          id: "NjU6Mjk1OjY5OQ",
        },
        {
          id: "NjU6Mjk1OjMzOQ",
        },
        {
          id: "NjY6OTk6Njk5",
        },
        {
          id: "NjY6OTk6MTk1",
        },
        {
          id: "NjY6MzI2OjY5OQ",
        },
        {
          id: "NjY6MzI2OjYwMw",
        },
        {
          id: "NjY6MzI2OjQ1OQ",
        },
        {
          id: "Njc6Njg6Njk5",
        },
        {
          id: "Njc6Njg6NTMx",
        },
        {
          id: "Njc6Njg6MzE1",
        },
        {
          id: "Njc6Mjk1OjMyNw",
        },
        {
          id: "Njg6OTk6NjI3",
        },
        {
          id: "Njg6Mzc2OjM1MQ",
        },
        {
          id: "Njk6MTM5OjYzOQ",
        },
        {
          id: "NzE6MTUyOjYyOQ",
        },
        {
          id: "NzE6MTM5OjI1NQ",
        },
        {
          id: "NzE6MzA3OjI5MQ",
        },
        {
          id: "NzI6MzYyOjU0Mw",
        },
        {
          id: "NzQ6MTA2OjU0Mw",
        },
        {
          id: "NzQ6OTk6Mjkx",
        },
        {
          id: "NzQ6MzI2OjU0Mw",
        },
        {
          id: "NzQ6MzI2OjQ0Nw",
        },
        {
          id: "NzQ6MzI2OjI3OQ",
        },
        {
          id: "NzU6Njg6NTE5",
        },
        {
          id: "NzU6Njg6NDU5",
        },
        {
          id: "NzU6Njg6MTEx",
        },
        {
          id: "NzU6Mjk1OjU1NQ",
        },
        {
          id: "Nzc6MTYzOjY2NQ",
        },
        {
          id: "Nzg6MTE2OjY5OQ",
        },
        {
          id: "Nzg6OTk6NjM5",
        },
        {
          id: "Nzg6MzQyOjU1NQ",
        },
        {
          id: "Nzk6ODI6Njk5",
        },
        {
          id: "Nzk6Njg6NjI3",
        },
        {
          id: "Nzk6Njg6NTQz",
        },
        {
          id: "ODA6MTAxOjY5OQ",
        },
        {
          id: "ODA6OTk6NjUx",
        },
        {
          id: "ODA6OTk6NTc5",
        },
        {
          id: "ODA6OTk6MjE5",
        },
        {
          id: "ODA6MzYyOjM2Mw",
        },
        {
          id: "ODE6Njg6NTU1",
        },
        {
          id: "ODE6Mjk1OjY2Mw",
        },
        {
          id: "ODE6MzM3OjM4Nw",
        },
        {
          id: "ODE6MzI0OjI5MQ",
        },
        {
          id: "ODI6OTk6Njk5",
        },
        {
          id: "ODI6OTk6Mzk5",
        },
        {
          id: "ODI6OTk6MzI3",
        },
        {
          id: "ODI6OTk6OTk",
        },
        {
          id: "ODI6Mzk0OjQ0Nw",
        },
        {
          id: "ODI6MzI2OjIxOQ",
        },
        {
          id: "ODM6Njg6NjE1",
        },
        {
          id: "ODM6Njg6NTY3",
        },
        {
          id: "ODM6Njg6MTM1",
        },
        {
          id: "ODM6Mjk1OjQ0Nw",
        },
        {
          id: "ODQ6MjUxOjY4Nw",
        },
        {
          id: "ODQ6MjUxOjYyNw",
        },
        {
          id: "ODQ6MzU2OjM3NQ",
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
          id: "ODc6Njg6NjM5",
        },
        {
          id: "ODc6Njg6MzI3",
        },
        {
          id: "ODg6MjUxOjY4Nw",
        },
        {
          id: "ODk6Njg6Njg3",
        },
        {
          id: "OTA6MTc1OjY3NQ",
        },
        {
          id: "OTI6MjMwOjY3NQ",
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
        {
          id: "journal23",
        },
        {
          id: "journal24",
        },
        {
          id: "journal25",
        },
      ],
    },
  ];
  combines = [
    {
      source: "OTI6MTM2Ojk5",
      dest: "OTI6MjMwOjY3NQ",
    },
    {
      source: "OTA6MTM2OjQ1OQ",
      dest: "OTA6MTc1OjY3NQ",
    },
    {
      source: "ODQ6MTIwOjY2Mw",
      dest: "ODQ6MjUxOjYyNw",
    },
    {
      source: "ODU6MzcxOjY2Mw",
      dest: "ODU6Njg6Njg3",
    },
    {
      source: "ODY6MTMyOjY2Mw",
      dest: "ODY6MjUxOjY4Nw",
    },
    {
      source: "ODc6MzcxOjY2Mw",
      dest: "ODc6Njg6Njg3",
    },
    {
      source: "ODg6MTMzOjY2Mw",
      dest: "ODg6MjUxOjY4Nw",
    },
    {
      source: "ODk6MzcxOjY2Mw",
      dest: "ODk6Njg6Njg3",
    },
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "QUEST FOR THE FROZEN FLAME: LOST MAMMOTH VALLEY" &&
        t.fontId === "Gin-Regular:12" &&
        t.page === 1,
    );
  }
  preprocess(text) {
    for (let i = 0; i < text.length; i++) {
      [49, 50, 51].includes(text[i].page) &&
        text[i].fontId === "TimesNewRomanPS-BoldMT:9" &&
        text[i].text.startsWith("C") &&
        text[i].text.trim().endsWith(":") &&
        ((text[i].fontId = "GoodOT-Bold:12"),
        (text[i].fontName = "GoodOT-Bold"),
        (text[i].fontSize = 12),
        (text[i].text = text[i].text.trim()),
        text[i].text.endsWith(":") &&
          (text[i].text = text[i].text.substring(0, text[i].text.length - 1)));
    }
  }
  extractDetails(text, moduleData, sectionKey) {
    this.markStartOfLine(text, 40, 369.25, 279);
    this.markStartOfLine(text, 40, 373.25, 267);
    this.markStartOfLine(text, 40, 368.25, 231);
    this.markStartOfLine(text, 40, 367.25, 195);
    this.markStartOfLine(text, 41, 316.75, 687);
    this.markStartOfLine(text, 41, 345.75, 591);
    this.markStartOfLine(text, 41, 391.75, 519);
    this.markStartOfLine(text, 41, 395.75, 507);
    this.markStartOfLine(text, 41, 394.75, 459);
    this.markStartOfLine(text, 84, 322.5, 291);
    this.markStartOfLine(text, 84, 251.5, 423);
    this.markStartOfLine(text, 84, 308.5, 279);
    this.markStartOfLine(text, 84, 275.5, 267);
    this.markStartOfLine(text, 84, 278.5, 255);
    this.markStartOfLine(text, 84, 278.5, 243);
    this.markStartOfLine(text, 84, 278.5, 231);
    this.markStartOfLine(text, 84, 279.5, 219);
    this.markStartOfLine(text, 84, 276.5, 171);
    this.markStartOfLine(text, 84, 276.5, 159);
    this.markStartOfLine(text, 84, 275.5, 147);
    this.markStartOfLine(text, 84, 273.5, 135);
    this.markStartOfLine(text, 84, 293.5, 99);
    this.markStartOfLine(text, 84, 318.5, 75);
    this.markStartOfLine(text, 86, 269.5001, 531);
    this.markStartOfLine(text, 86, 290.5001, 519);
    this.markStartOfLine(text, 86, 294.5001, 507);
    this.markStartOfLine(text, 86, 301.5001, 471);
    this.markStartOfLine(text, 86, 313.5001, 399);
    this.markStartOfLine(text, 86, 315.5001, 387);
    this.markStartOfLine(text, 86, 315.5001, 363);
    this.markStartOfLine(text, 86, 316.5001, 339);
    this.markStartOfLine(text, 86, 312.5001, 303);
    this.markStartOfLine(text, 86, 314.5001, 291);
    this.markStartOfLine(text, 86, 320.5001, 219);
    this.markStartOfLine(text, 88, 255.5, 423);
    this.markStartOfLine(text, 88, 260.5, 399);
    this.markStartOfLine(text, 88, 268.5, 387);
    this.markStartOfLine(text, 88, 275.5, 375);
    this.markStartOfLine(text, 88, 278.5, 363);
    this.markStartOfLine(text, 88, 277.5, 351);
    this.markStartOfLine(text, 88, 275.5, 327);
    this.markStartOfLine(text, 88, 290.5, 267);
    this.markStartOfLine(text, 88, 278.5, 255);
    this.markStartOfLine(text, 88, 278.5, 243);
    this.markStartOfLine(text, 88, 301.5, 171);
    this.markStartOfLine(text, 88, 365.5, 123);
    return super.extractDetails(text, moduleData, sectionKey);
  }
}
