import { ExtinctionCurseBase } from "./base.js";
import { AdventureImage, CaptionImage } from "../../core/images.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class ExtinctionCurse3 extends ExtinctionCurseBase {
  prefix = "extinction-curse3";
  fullName = "Extinction Curse - Life's Long Shadows";
  pages = [
    this.ChapterHeadingPageLayout(6),
    this.RightSingleColumnWithSidebar(7),
    this.LeftTwoColumnWithLeftCutout(8, 210),
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
    this.ChapterHeadingPageLayout(24),
    this.RightSingleColumnWithSidebar(25),
    this.LeftTwoColumnWithLeftCutout(26, 305),
    this.RightTwoColumn(27),
    this.LeftTwoColumnWithMap(28, 340),
    this.RightTwoColumn(29),
    this.LeftTwoColumn(30),
    this.RightTwoColumn(31),
    this.LeftTwoColumn(32),
    this.RightTwoColumn(33),
    this.ChapterHeadingPageLayout(34),
    this.RightSingleColumnWithSidebar(35),
    this.LeftTwoColumn(36),
    this.RightTwoColumnWithRightCutout(37, 305),
    this.LeftTwoColumnWithMap(38, 340),
    this.RightTwoColumn(39),
    this.LeftTwoColumn(40),
    this.RightTwoColumn(41),
    this.ChapterHeadingPageLayout(42),
    this.RightSingleColumnWithSidebar(43),
    this.LeftTwoColumnWithLeftCutout(44, 210),
    this.RightTwoColumn(45),
    this.LeftTwoColumn(46),
    this.RightTwoColumn(47),
    this.LeftTwoColumnWithMap(48, 340),
    this.RightTwoColumn(49),
    this.LeftTwoColumn(50),
    this.RightTwoColumn(51),
    this.LeftTwoColumn(52),
    this.RightTwoColumn(53),
    this.LeftTwoColumn(54),
    this.RightTwoColumn(55),
    this.LeftTwoColumn(56),
    this.RightTwoColumn(57),
    this.RightChapterHeadingPageLayout(59),
    this.LeftTwoColumnWithMap(60, 340),
    this.RightTwoColumn(61),
    this.LeftTwoColumnWithLeftCutout(62, 460),
    this.RightTwoColumn(63),
    this.RightChapterHeadingPageLayout(65),
    this.LeftTwoColumn(66),
    this.RightTwoColumn(67),
    this.LeftTwoColumn(68),
    this.RightTwoColumn(69),
    this.RightChapterHeadingPageLayout(71),
    this.LeftTwoColumn(72),
    this.RightTwoColumnWithRightCutout(73, 450),
    this.LeftSingleColumnWithSidebar(74),
    this.RightTwoColumn(75),
    this.LeftTwoColumn(76),
    this.RightTwoColumn(77),
    this.LeftSingleColumnWithSidebar(78),
    this.RightSingleColumnWithSidebar(79),
    this.LeftSingleColumnWithSidebar(80),
    this.RightSingleColumnWithSidebar(81),
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
        name: "ec3/map1",
        priority: 0,
      },
      nameInfo: {
        x: 16,
        y: 758.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 10,
      width: 1262,
      height: 880,
      imageLeft: 24,
      imageRight: 1249,
      imageCols: 34,
      imageTop: 36,
      imageBottom: 870,
      imageRows: 22,
      globalLight: true,
      detailsFile: "/ec/maps/ec3-map1.json",
      journals: [
        {
          x: 2200,
          y: 2500,
          id: "MTE6Njg6NTA3",
        },
        {
          x: 2200,
          y: 2200,
          id: "MTE6Njg6Mzk5",
        },
        {
          x: 1850,
          y: 2250,
          id: "MTE6Njg6MzAz",
        },
        {
          x: 1900,
          y: 1650,
          id: "MTE6Mjk1OjYzOQ",
        },
        {
          x: 2550,
          y: 2350,
          id: "MTE6Mjk1OjUzMQ",
        },
        {
          x: 2550,
          y: 1950,
          id: "MTE6Mjk1OjQ1OQ",
        },
        {
          x: 2350,
          y: 1450,
          id: "MTE6Mjk1OjM3NQ",
        },
        {
          x: 2450,
          y: 1250,
          id: "MTE6Mjk1OjI3OQ",
        },
        {
          x: 1900,
          y: 1300,
          id: "MTE6Mjk1OjIwNw",
        },
        {
          x: 1750,
          y: 850,
          id: "MTE6Mjk1OjEyMw",
        },
        {
          x: 1200,
          y: 1500,
          id: "MTI6OTk6MTQ3",
        },
        {
          x: 3550,
          y: 1350,
          id: "MTI6MzI2OjYxNQ",
        },
        {
          x: 3950,
          y: 1550,
          id: "MTI6MzY0OjQ5NQ",
        },
        {
          x: 3950,
          y: 1250,
          id: "MTI6MzI2OjM5OQ",
        },
        {
          x: 4050,
          y: 2e3,
          id: "MTI6MzI2OjMwMw",
        },
        {
          x: 4e3,
          y: 2300,
          id: "MTI6MzI2OjI1NQ",
        },
        {
          x: 3700,
          y: 2500,
          id: "MTI6MzI2OjEyMw",
        },
        {
          x: 3400,
          y: 2400,
          id: "MTM6Njg6NjM5",
        },
        {
          x: 3400,
          y: 1700,
          id: "MTM6Njg6NTY3",
        },
        {
          x: 3300,
          y: 1400,
          id: "MTM6Njg6NDEx",
        },
        {
          x: 950,
          y: 650,
          id: "MTA6MzI2OjMzOQ",
        },
      ],
      tokens: [],
    }),
    new ModuleScene({
      name: "map2",
      canonical: {
        name: "ec3/map2",
        priority: 0,
      },
      nameInfo: {
        x: 75,
        y: 694.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 27,
      width: 516,
      height: 656,
      imageLeft: 11,
      imageRight: 500,
      imageCols: 15,
      imageTop: 28,
      imageBottom: 644,
      imageRows: 19,
      globalLight: true,
      detailsFile: "/ec/maps/ec3-map2.json",
      journals: [
        {
          x: 1650,
          y: 1200,
          id: "MjY6OTk6MTEx",
        },
        {
          x: 950,
          y: 1800,
          id: "MjY6MzI2OjU0Mw",
        },
        {
          x: 650,
          y: 1550,
          id: "MjY6MzI2OjMyNw",
        },
        {
          x: 450,
          y: 650,
          id: "MjU6Njg6MjQz",
        },
      ],
      tokens: [
        {
          id: "npc40",
          x: 500,
          y: 1400,
        },
      ],
    }),
    new ModuleScene({
      name: "map3",
      canonical: {
        name: "ec3/map3",
        priority: 0,
      },
      nameInfo: {
        x: 16,
        y: 758.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 28,
      width: 1262,
      height: 880,
      imageLeft: 12,
      imageRight: 1250,
      imageCols: 34,
      imageTop: 24,
      imageBottom: 861,
      imageRows: 23,
      globalLight: true,
      detailsFile: "/ec/maps/ec3-map3.json",
      journals: [
        {
          x: 2050,
          y: 1250,
          id: "Mjg6MzI2OjMwMw",
        },
        {
          x: 1550,
          y: 1800,
          id: "Mjk6Njg6MTEx",
        },
        {
          x: 1500,
          y: 2300,
          id: "MzA6OTk6NjAz",
        },
        {
          x: 1400,
          y: 1200,
          id: "MzE6Njg6NDU5",
        },
        {
          x: 3900,
          y: 1400,
          id: "MzE6Njg6Mzg3",
        },
        {
          x: 3e3,
          y: 1400,
          id: "MzE6Njg6MzE1",
        },
        {
          x: 2800,
          y: 2500,
          id: "MzE6Mjk1OjUzMQ",
        },
        {
          x: 2500,
          y: 1300,
          id: "MzI6OTk6Njk5",
        },
        {
          x: 3800,
          y: 2700,
          id: "MzI6OTk6MTcx",
        },
        {
          x: 950,
          y: 850,
          id: "Mjc6MzIxOjU0Mw",
        },
        {
          x: 950,
          y: 950,
          id: "Mjc6Mjk1Ojk5",
        },
      ],
      tokens: [
        {
          id: "npc8",
          x: 1900,
          y: 1200,
        },
        {
          id: "npc8",
          x: 1900,
          y: 1e3,
        },
        {
          id: "npc8",
          x: 2e3,
          y: 1300,
        },
        {
          id: "npc8",
          x: 2e3,
          y: 900,
        },
        {
          id: "npc8",
          x: 2100,
          y: 1e3,
        },
        {
          id: "npc8",
          x: 2100,
          y: 1200,
        },
        {
          id: "npc9",
          x: 1500,
          y: 2100,
        },
        {
          id: "npc9",
          x: 1300,
          y: 2400,
        },
        {
          id: "npc9",
          x: 1100,
          y: 2400,
        },
        {
          id: "npc9",
          x: 1400,
          y: 2400,
        },
        {
          id: "npc41",
          x: 3100,
          y: 1300,
        },
        {
          id: "npc34",
          x: 2700,
          y: 2600,
        },
        {
          id: "npc10",
          x: 2400,
          y: 900,
        },
        {
          id: "npc10",
          x: 2400,
          y: 1900,
        },
      ],
    }),
    new ModuleScene({
      name: "map4",
      canonical: {
        name: "ec3/map4",
        priority: 0,
      },
      nameInfo: {
        x: 106.5,
        y: 694.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 36,
      width: 516,
      height: 658,
      imageLeft: 6,
      imageRight: 512,
      imageCols: 36,
      imageTop: 13,
      imageBottom: 644,
      imageRows: 45,
      globalLight: true,
      detailsFile: "/ec/maps/ec3-map4.json",
      journals: [],
    }),
    new ModuleScene({
      name: "map5",
      canonical: {
        name: "ec3/map5",
        priority: 0,
      },
      nameInfo: {
        x: 16,
        y: 758.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 38,
      width: 1262,
      height: 880,
      imageLeft: 14,
      imageRight: 1242,
      imageCols: 68,
      imageTop: 5,
      imageBottom: 876,
      imageRows: 49,
      globalLight: true,
      detailsFile: "/ec/maps/ec3-map5.json",
      journals: [
        {
          x: 7950,
          y: 3550,
          id: "Mzc6Mjk1OjMwMw",
        },
        {
          x: 7250,
          y: 3150,
          id: "Mzg6OTk6MjMx",
        },
        {
          x: 6350,
          y: 3550,
          id: "Mzk6Njg6NTMx",
        },
        {
          x: 5750,
          y: 3650,
          id: "Mzk6Njg6Mzk5",
        },
        {
          x: 4850,
          y: 3750,
          id: "NDA6OTk6NjM5",
        },
        {
          x: 2050,
          y: 1750,
          id: "MzY6MzUyOjUwNw",
        },
      ],
      tokens: [
        {
          id: "npc11",
          x: 2600,
          y: 2e3,
        },
        {
          id: "npc11",
          x: 7300,
          y: 4600,
        },
        {
          id: "npc35",
          x: 7300,
          y: 2800,
        },
        {
          id: "npc28",
          x: 7200,
          y: 2900,
        },
        {
          id: "npc8",
          x: 7100,
          y: 3e3,
        },
        {
          id: "npc8",
          x: 7100,
          y: 2900,
        },
        {
          id: "npc12",
          x: 5700,
          y: 3400,
        },
        {
          id: "npc12",
          x: 5700,
          y: 3700,
        },
        {
          id: "npc43",
          x: 4700,
          y: 2900,
        },
      ],
    }),
    new ModuleScene({
      name: "map6",
      canonical: {
        name: "ec3/map6",
        priority: 0,
      },
      nameInfo: {
        x: 106.5,
        y: 694.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 46,
      width: 516,
      height: 655,
      imageLeft: 15,
      imageRight: 509,
      imageCols: 35,
      imageTop: 25,
      imageBottom: 648,
      imageRows: 44,
      globalLight: true,
      detailsFile: "/ec/maps/ec3-map6.json",
      journals: [
        {
          x: 1550,
          y: 3050,
          id: "NDU6Njg6MjMx",
        },
        {
          x: 1650,
          y: 4250,
          id: "NDc6Njg6NTE5",
        },
        {
          x: 3550,
          y: 4150,
          id: "NDc6Njg6MzAz",
        },
        {
          x: 3550,
          y: 3250,
          id: "NDc6Njg6MjA3",
        },
        {
          x: 1150,
          y: 1250,
          id: "NDQ6MzI2OjE0Nw",
        },
      ],
      tokens: [
        {
          id: "npc8",
          x: 1600,
          y: 2600,
        },
        {
          id: "npc8",
          x: 1600,
          y: 2500,
        },
        {
          id: "npc8",
          x: 2100,
          y: 2400,
        },
        {
          id: "npc8",
          x: 2100,
          y: 2300,
        },
        {
          id: "npc8",
          x: 2600,
          y: 2300,
        },
        {
          id: "npc8",
          x: 2300,
          y: 2200,
        },
        {
          id: "npc8",
          x: 1700,
          y: 2400,
        },
        {
          id: "npc8",
          x: 2700,
          y: 2300,
        },
      ],
    }),
    new ModuleScene({
      name: "map7",
      canonical: {
        name: "ec3/map7",
        priority: 0,
      },
      nameInfo: {
        x: 106.5,
        y: 373.5456,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 46,
      width: 516,
      height: 658,
      imageLeft: 3,
      imageRight: 486,
      imageCols: 17,
      imageTop: 8,
      imageBottom: 632,
      imageRows: 22,
      globalLight: true,
      detailsFile: "/ec/maps/ec3-map7.json",
      journals: [
        {
          x: 550,
          y: 650,
          id: "NDc6Mjk1OjI1NQ",
        },
      ],
      tokens: [
        {
          id: "npc23",
          x: 1700,
          y: 2e3,
        },
        {
          id: "npc23",
          x: 1300,
          y: 1e3,
        },
      ],
    }),
    new ModuleScene({
      name: "map8",
      canonical: {
        name: "ec3/map8",
        priority: 0,
      },
      nameInfo: {
        x: 23.25,
        y: 760.0862,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 48,
      width: 636,
      height: 880,
      imageLeft: 17,
      imageRight: 631,
      imageCols: 36,
      imageTop: 10,
      imageBottom: 863,
      imageRows: 50,
      globalLight: true,
      detailsFile: "/ec/maps/ec3-map8.json",
      journals: [
        {
          x: 2150,
          y: 5350,
          id: "NDk6Mjk1OjYyNw",
        },
        {
          x: 2750,
          y: 5650,
          id: "NTA6OTk6MjMx",
        },
        {
          x: 3250,
          y: 5350,
          id: "NTA6MzI2OjY5OQ",
        },
        {
          x: 2700,
          y: 4200,
          id: "NTA6MzI2OjE4Mw",
        },
        {
          x: 2700,
          y: 3400,
          id: "NTE6Njg6MTgz",
        },
        {
          x: 2700,
          y: 3100,
          id: "NTI6MzI2Ojk5",
        },
        {
          x: 950,
          y: 1350,
          id: "NDk6Njg6NTMx",
        },
      ],
      tokens: [
        {
          id: "npc36",
          x: 2300,
          y: 5200,
        },
        {
          id: "npc8",
          x: 2e3,
          y: 5400,
        },
        {
          id: "npc8",
          x: 2200,
          y: 5500,
        },
        {
          id: "npc8",
          x: 2200,
          y: 5400,
        },
        {
          id: "npc8",
          x: 2e3,
          y: 5300,
        },
        {
          id: "npc44",
          x: 3e3,
          y: 5300,
        },
        {
          id: "npc44",
          x: 3300,
          y: 5400,
        },
        {
          id: "npc11",
          x: 2600,
          y: 4200,
          elite: true,
        },
        {
          id: "npc17",
          x: 2400,
          y: 3e3,
        },
        {
          id: "npc30",
          x: 2400,
          y: 3400,
        },
      ],
    }),
    new ModuleScene({
      name: "map9",
      canonical: {
        name: "ec3/map9",
        priority: 0,
      },
      nameInfo: {
        x: 317.25,
        y: 747,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 48,
      width: 647,
      height: 880,
      imageLeft: 14,
      imageRight: 627,
      imageCols: 36,
      imageTop: 10,
      imageBottom: 863,
      imageRows: 50,
      globalLight: true,
      detailsFile: "/ec/maps/ec3-map9.json",
      journals: [
        {
          x: 2050,
          y: 3050,
          id: "NTM6Njg6MTM1",
        },
        {
          x: 2850,
          y: 4450,
          id: "NTQ6OTk6NTY3",
        },
        {
          x: 2850,
          y: 5150,
          id: "NTQ6NDAxOjM1MQ",
        },
        {
          x: 4300,
          y: 4200,
          id: "NTU6Njg6MzM5",
        },
        {
          x: 4e3,
          y: 3300,
          id: "NTU6Mjk1OjQyMw",
        },
        {
          x: 2800,
          y: 3900,
          id: "NTY6MzI2OjU1NQ",
        },
        {
          x: 1050,
          y: 1350,
          id: "NDk6Njg6NTMx",
        },
      ],
      tokens: [
        {
          id: "npc36",
          x: 2800,
          y: 4300,
        },
        {
          id: "npc8",
          x: 3100,
          y: 4600,
        },
        {
          id: "npc8",
          x: 3e3,
          y: 4300,
        },
        {
          id: "npc8",
          x: 2600,
          y: 4600,
        },
        {
          id: "npc8",
          x: 2400,
          y: 4500,
        },
        {
          id: "npc19",
          x: 2500,
          y: 3800,
        },
        {
          id: "npc19",
          x: 2700,
          y: 3500,
        },
        {
          id: "npc19",
          x: 2900,
          y: 3700,
        },
        {
          id: "npc30",
          x: 3900,
          y: 3400,
        },
        {
          id: "npc18",
          x: 1800,
          y: 3100,
        },
        {
          id: "npc18",
          x: 1700,
          y: 3e3,
        },
      ],
    }),
    new ModuleScene({
      name: "map10",
      nameInfo: {
        x: 16,
        y: 755.4952,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 60,
      width: 1262,
      height: 880,
      gridType: "gridless",
      imageLeft: 0,
      imageRight: 1e3,
      imageCols: 10,
      imageTop: 0,
      imageBottom: 1e3,
      imageRows: 10,
      globalLight: true,
    }),
  ];
  journals = [
    new AdventureImage({
      name: "journal1",
      page: 2,
      width: 589,
      height: 809,
      index: 0,
    }),
    new AdventureImage({
      name: "journal2",
      page: 2,
      width: 589,
      height: 809,
      index: 1,
    }),
    new AdventureImage({
      name: "journal3",
      page: 2,
      width: 589,
      height: 809,
      index: 2,
    }),
    new AdventureImage({
      name: "journal4",
      page: 2,
      width: 589,
      height: 809,
      index: 3,
    }),
    new AdventureImage({
      name: "journal5",
      page: 2,
      width: 589,
      height: 809,
      index: 4,
    }),
    new AdventureImage({
      name: "journal6",
      page: 2,
      width: 589,
      height: 809,
      index: 5,
    }),
    new AdventureImage({
      name: "journal7",
      page: 4,
      width: 1262,
      height: 1636,
    }),
    new AdventureImage({
      name: "journal8",
      page: 6,
      width: 1261,
      height: 805,
    }),
    new CaptionImage({
      name: "journal9",
      page: 12,
      width: 462,
      height: 462,
    }),
    new CaptionImage({
      name: "journal10",
      page: 14,
      width: 682,
      height: 570,
    }),
    new AdventureImage({
      name: "journal11",
      page: 24,
      width: 1259,
      height: 805,
    }),
    new AdventureImage({
      name: "journal12",
      page: 34,
      width: 1259,
      height: 805,
    }),
    new AdventureImage({
      name: "journal13",
      page: 42,
      width: 1259,
      height: 805,
    }),
    new AdventureImage({
      name: "journal14",
      page: 58,
      width: 1261,
      height: 1636,
    }),
    new AdventureImage({
      name: "journal15",
      page: 64,
      width: 1261,
      height: 1636,
    }),
    new AdventureImage({
      name: "journal16",
      page: 70,
      width: 1261,
      height: 1636,
    }),
    new AdventureImage({
      name: "journal17",
      page: 71,
      width: 433,
      height: 500,
    }),
    new AdventureImage({
      name: "journal18",
      page: 72,
      width: 942,
      height: 1131,
    }),
    new AdventureImage({
      name: "journal19",
      page: 75,
      width: 736,
      height: 1123,
    }),
    new AdventureImage({
      name: "journal20",
      page: 76,
      width: 692,
      height: 1090,
    }),
    new AdventureImage({
      name: "journal21",
      page: 77,
      width: 799,
      height: 1015,
    }),
    new CaptionImage({
      name: "journal22",
      page: 67,
      width: 853,
      height: 1128,
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 9,
        x: 241.3936,
        y: 126.5904,
      },
      page: 9,
      width: 856,
      height: 1079,
      tokenX: -228,
      tokenY: 33,
      tokenSize: 323,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 16,
        x: 269.4568,
        y: 414.5905,
      },
      page: 16,
      width: 573,
      height: 572,
      tokenX: 68,
      tokenY: 109,
      tokenSize: 713,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 17,
        x: 242.8725,
        y: 414.5905,
      },
      page: 17,
      width: 573,
      height: 573,
      tokenX: 66,
      tokenY: 135,
      tokenSize: 685,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc4",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 18,
        x: 255.3922,
        y: 118.6814,
      },
      page: 18,
      width: 407,
      height: 844,
      tokenX: -5,
      tokenY: 78,
      tokenSize: 340,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc5",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.CNO54boXvXg7xSP6",
      page: 19,
      width: 717,
      height: 1261,
      tokenX: -43,
      tokenY: 32,
      tokenSize: 421,
      forIds: ["MTg6Mzc0OjM2Mw"],
    }),
    new ModuleNpc({
      id: "npc6",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.88VcnxbKPF2QkPiF",
      page: 20,
      width: 853,
      height: 1178,
      tokenX: -218,
      tokenY: 78,
      tokenSize: 394,
      forIds: ["MTk6Njg6NDgz"],
    }),
    new ModuleNpc({
      id: "npc7",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.2Ey2VZ3aQlN4FGHJ",
      page: 22,
      width: 773,
      height: 1035,
      tokenX: -310,
      tokenY: -362,
      tokenSize: 335,
      forIds: ["MjI6MzI2OjQ4Mw"],
    }),
    new ModuleNpc({
      id: "npc8",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.uUcqr8gPQIw5govC",
      page: 29,
      width: 812,
      height: 1187,
      tokenX: -107,
      tokenY: -80,
      tokenSize: 375,
      forIds: [
        "Mzk6Njg6Njk5",
        "Mzc6Njg6OTk",
        "NTA6OTk6MzE1",
        "NTQ6MzI2OjQ4Mw",
        "Mjk6Njg6NTY3",
        "NDY6MzUyOjQ5NQ",
      ],
    }),
    new ModuleNpc({
      id: "npc9",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.fvGqCYfVAI3KXnSl",
      page: 30,
      width: 809,
      height: 1201,
      tokenX: -234,
      tokenY: -117,
      tokenSize: 333,
      forIds: ["MzA6MzI2OjM5OQ"],
    }),
    new ModuleNpc({
      id: "npc10",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.bJUlb2DxT1xyaYAp",
      page: 33,
      width: 759,
      height: 1269,
      tokenX: 65,
      tokenY: 145,
      tokenSize: 737,
      forIds: ["MzI6OTk6Mjc5"],
    }),
    new ModuleNpc({
      id: "npc11",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.Upf2fOZ6QgGG3seI",
      page: 39,
      width: 761,
      height: 1096,
      tokenX: -189,
      tokenY: 23,
      tokenSize: 452,
      forIds: ["NTE6Njg6MjMx", "Mzg6OTk6Mjc5"],
    }),
    new ModuleNpc({
      id: "npc12",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.LN7MXD38Zs2bDoW6",
      page: 40,
      width: 853,
      height: 1054,
      tokenX: -155,
      tokenY: 49,
      tokenSize: 494,
      forIds: ["Mzk6Mjk1OjU5MQ"],
    }),
    new ModuleNpc({
      id: "npc13",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.CQ2682vd4bUtvKQX",
      page: 41,
      width: 696,
      height: 1099,
      tokenX: -244,
      tokenY: 94,
      tokenSize: 455,
      forIds: ["NDE6Njg6MTM1"],
    }),
    new ModuleNpc({
      id: "npc14",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 43,
        x: 260.5778,
        y: 151.5905,
      },
      page: 43,
      width: 573,
      height: 573,
      tokenX: 54,
      tokenY: 115,
      tokenSize: 685,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc15",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 45,
        x: 307.8695,
        y: 106.6814,
      },
      page: 45,
      width: 848,
      height: 1187,
      tokenX: -209,
      tokenY: -14,
      tokenSize: 347,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc16",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 47,
        x: 248.765,
        y: 419.852,
      },
      page: 47,
      width: 573,
      height: 573,
      tokenX: 78,
      tokenY: 122,
      tokenSize: 685,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc17",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.DJyAXPHQy7OUUw00",
      page: 52,
      width: 932,
      height: 1201,
      tokenX: -107,
      tokenY: -5,
      tokenSize: 697,
      forIds: ["NTI6MzI2OjY5OQ"],
    }),
    new ModuleNpc({
      id: "npc18",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.0pw0r1w8vO7aRocN",
      page: 54,
      width: 872,
      height: 950,
      tokenX: -303,
      tokenY: 98,
      tokenSize: 698,
      forIds: ["NTM6Mjk1OjM5OQ"],
    }),
    new ModuleNpc({
      id: "npc19",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.qXC4lGSWxqIhO5tr",
      page: 57,
      width: 865,
      height: 1132,
      tokenX: -278,
      tokenY: -122,
      tokenSize: 572,
      forIds: ["NTc6Njg6NjI3"],
    }),
    new ModuleNpc({
      id: "npc20",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 63,
        x: 334.6419,
        y: 126.5904,
      },
      page: 63,
      width: 805,
      height: 1134,
      tokenX: -200,
      tokenY: 14,
      tokenSize: 406,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc21",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.QZHvPM0Yatn8oxsj",
      page: 78,
      width: 732,
      height: 1165,
      tokenX: -285,
      tokenY: 70,
      tokenSize: 549,
      forIds: ["Nzg6MzQ5OjQ5NQ", "MjE6Mjk1OjMyNw"],
    }),
    new ModuleNpc({
      id: "npc22",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.7p4RWS26W5k6vCkH",
      page: 79,
      width: 767,
      height: 1287,
      tokenX: 251,
      tokenY: 89,
      tokenSize: 1315,
      forIds: ["Nzk6Njg6NTE5"],
    }),
    new ModuleNpc({
      id: "npc23",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.29NHB8DNNAbEk5Va",
      page: 80,
      width: 820,
      height: 854,
      tokenX: 89,
      tokenY: 128,
      tokenSize: 966,
      forIds: ["ODA6MjUxOjUxOQ", "NDg6MzI2OjI3OQ"],
    }),
    new ModuleNpc({
      id: "npc24",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.N8ekzW9snBA2YAKv",
      page: 81,
      width: 851,
      height: 1001,
      tokenX: 213,
      tokenY: -195,
      tokenSize: 917,
      forIds: ["ODE6Njg6NTE5"],
    }),
    new ModuleNpc({
      id: "npc25",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.1vOre5O8t3pQPUp6",
      page: 83,
      width: 709,
      height: 1153,
      tokenX: -199,
      tokenY: -111,
      tokenSize: 537,
      forIds: ["ODI6MjUxOjMwMw"],
    }),
    new ModuleNpc({
      id: "npc26",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.D0laesU2eB1VOZTX",
      page: 84,
      width: 821,
      height: 1048,
      tokenX: -223,
      tokenY: -8,
      tokenSize: 460,
      forIds: ["ODQ6MzA1OjMxNQ", "MjA6MzI2OjI1NQ"],
    }),
    new ModuleNpc({
      id: "npc27",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.OCrQtfKDFpLedE13",
      page: 85,
      width: 797,
      height: 1235,
      tokenX: -120,
      tokenY: -105,
      tokenSize: 479,
      forIds: ["ODU6Njg6NjI3"],
    }),
    new ModuleNpc({
      id: "npc28",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.uPWqYc05YQ0Q4i0g",
      page: 86,
      width: 843,
      height: 1187,
      tokenX: -322,
      tokenY: -94,
      tokenSize: 487,
      forIds: ["ODY6MjUxOjU3OQ", "Mzg6MzI2Ojk5"],
    }),
    new ModuleNpc({
      id: "npc29",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.jxGA1C8xX0WkJGI4",
      page: 87,
      width: 740,
      height: 1185,
      tokenX: -114,
      tokenY: 22,
      tokenSize: 457,
      forIds: ["ODc6Njg6NTE5", "MzY6MzUyOjY5OQ"],
    }),
    new ModuleNpc({
      id: "npc30",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.aIT5S2fKgMZ6pVP2",
      page: 89,
      width: 709,
      height: 937,
      tokenX: -110,
      tokenY: 77,
      tokenSize: 461,
      forIds: ["ODk6Njg6NDQ3", "NTI6MzI2OjI2Nw", "NTY6OTk6Mzk5"],
    }),
    new ModuleNpc({
      id: "npc31",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.qCTU0ywtCOgiUM0q",
      page: 91,
      width: 812,
      height: 1121,
      tokenX: -252,
      tokenY: 75,
      tokenSize: 449,
      forIds: ["OTA6MzI2OjI3OQ", "MjM6Mjk1OjI5MQ"],
    }),
    new ModuleNpc({
      id: "npc32",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.CYXoXHr9BoPInIbe",
      page: 93,
      width: 978,
      height: 1125,
      tokenX: -411,
      tokenY: 65,
      tokenSize: 453,
      forIds: ["OTM6Njg6NjUx", "NTU6Njg6Mzg3"],
    }),
    new ModuleNpc({
      id: "npc33",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.CzxQpB3p0d9hwPeR",
      label: "B",
      forIds: ["MjA6MzI2OjMwMw"],
    }),
    new ModuleNpc({
      id: "npc34",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.4L38nr9t17thMZrB",
      label: "CDT",
      forIds: ["MzE6Mjk1OjM4Nw"],
    }),
    new ModuleNpc({
      id: "npc35",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.skz8n8N9GEQY2c90",
      label: "CG",
      forIds: ["Mzg6MzI2OjE0Nw"],
    }),
    new ModuleNpc({
      id: "npc36",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.uPWqYc05YQ0Q4i0g",
      label: "XS",
      forIds: ["NTA6OTk6MzYz", "NTQ6MzI2OjUzMQ"],
    }),
    new ModuleNpc({
      id: "npc37",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.eP4a0FAbus3tNTbc",
      label: "GS",
      forIds: ["MjI6MzYzOjU3OQ"],
    }),
    new ModuleNpc({
      id: "npc38",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.4ISm82EYQeOndynw",
      name: {
        page: 22,
        x: 346.25,
        y: 531,
        substring: {
          start: 0,
          end: 23,
        },
      },
      label: "GT",
      forIds: ["MjI6MzQ2OjUzMQ"],
    }),
    new ModuleNpc({
      id: "npc39",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.WG4Tk2k9Lm21CEQv",
      label: "GN",
      forIds: ["MjM6Mjk1OjI0Mw"],
    }),
    new ModuleNpc({
      id: "npc40",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.KXY9CRct0VKhiNob",
      label: "RS",
      forIds: ["Mjc6Njg6MjY3"],
    }),
    new ModuleNpc({
      id: "npc41",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.ZXbr1ke1vF0ZFKY3",
      label: "R",
      forIds: ["MzE6Mjk1OjYzOQ"],
    }),
    new ModuleNpc({
      id: "npc42",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.YS8UvVGFgHP2TrY3",
      label: "SH",
      forIds: ["ODU6Njg6MzE1"],
    }),
    new ModuleNpc({
      id: "npc43",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.xz2NZqSG5YVl17dc",
      label: "S",
      forIds: ["NDA6MzgwOjM1MQ"],
    }),
    new ModuleNpc({
      id: "npc44",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.ToteDLIM7jCyHwDH",
      label: "SM",
      forIds: ["NTA6MzI2OjI2Nw"],
    }),
    new ModuleNpc({
      id: "npc45",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.f6uVOvKEkojOf9Ab",
      label: "SD",
      forIds: ["MTc6Mjk1OjIwNw"],
    }),
    new ModuleNpc({
      id: "npc46",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.tpNP1UooPPHMyZye",
      label: "T",
      forIds: ["Mzc6Njg6MTQ3"],
    }),
  ];
  journalPages = [
    {
      name: "Chapter 1",
      pages: [
        {
          id: "NjozODY6MzYx",
        },
        {
          id: "NzozNzE6Njk5",
        },
        {
          id: "NzozNzE6NDgz",
        },
        {
          id: "Nzo2ODozMDM",
        },
        {
          id: "ODozMjY6MzAz",
        },
        {
          id: "MTA6OTk6Mjkx",
        },
        {
          id: "MTA6MzI2OjMzOQ",
        },
        {
          id: "MTE6Njg6NTA3",
        },
        {
          id: "MTE6Njg6Mzk5",
        },
        {
          id: "MTE6Njg6MzAz",
        },
        {
          id: "MTE6Mjk1OjYzOQ",
        },
        {
          id: "MTE6Mjk1OjUzMQ",
        },
        {
          id: "MTE6Mjk1OjQ1OQ",
        },
        {
          id: "MTE6Mjk1OjM3NQ",
        },
        {
          id: "MTE6Mjk1OjI3OQ",
        },
        {
          id: "MTE6Mjk1OjIwNw",
        },
        {
          id: "MTE6Mjk1OjEyMw",
        },
        {
          id: "MTI6OTk6MTQ3",
        },
        {
          id: "MTI6MzI2OjYxNQ",
        },
        {
          id: "MTI6MzY0OjQ5NQ",
        },
        {
          id: "MTI6MzI2OjM5OQ",
        },
        {
          id: "MTI6MzI2OjMwMw",
        },
        {
          id: "MTI6MzI2OjI1NQ",
        },
        {
          id: "MTI6MzI2OjEyMw",
        },
        {
          id: "MTM6Njg6NjM5",
        },
        {
          id: "MTM6Njg6NTY3",
        },
        {
          id: "MTM6Njg6NDEx",
        },
        {
          id: "MTM6Njg6MjE5",
        },
        {
          id: "MTU6Mjk1OjY5OQ",
        },
        {
          id: "MTY6OTk6NTU1",
        },
        {
          id: "MTY6OTk6MTcx",
        },
        {
          id: "MTc6Njg6MzI3",
        },
        {
          id: "MTc6Njg6MTU5",
        },
        {
          id: "MTg6OTk6MzI3",
        },
        {
          id: "MjA6MzI2OjY5OQ",
        },
        {
          id: "MjE6Njg6NjI3",
        },
        {
          id: "MjE6Mjk1OjIxOQ",
        },
        {
          id: "MjM6Njg6MjA3",
        },
        {
          id: "ODoxMDg6Njg3",
        },
      ],
    },
    {
      name: "Chapter 2",
      pages: [
        {
          id: "MjQ6MzkwOjM2MQ",
        },
        {
          id: "MjU6MzcxOjY5OQ",
        },
        {
          id: "MjU6MzcxOjUxOQ",
        },
        {
          id: "MjQ6OTk6MTQ3",
        },
        {
          id: "MjU6Njg6NjAz",
        },
        {
          id: "MjU6Njg6MjQz",
        },
        {
          id: "MjY6OTk6MTEx",
        },
        {
          id: "MjY6MzI2OjU0Mw",
        },
        {
          id: "MjY6MzI2OjMyNw",
        },
        {
          id: "Mjc6MzIxOjU0Mw",
        },
        {
          id: "Mjc6Mjk1Ojk5",
        },
        {
          id: "Mjg6MzI2OjMwMw",
        },
        {
          id: "Mjk6Njg6MTEx",
        },
        {
          id: "MzA6OTk6NjAz",
        },
        {
          id: "MzE6Njg6NDU5",
        },
        {
          id: "MzE6Njg6Mzg3",
        },
        {
          id: "MzE6Njg6MzE1",
        },
        {
          id: "MzE6Mjk1OjUzMQ",
        },
        {
          id: "MzI6OTk6Njk5",
        },
        {
          id: "MzI6OTk6MTcx",
        },
        {
          id: "MzM6Njg6MzYz",
        },
        {
          id: "MjY6MTA4OjY4Nw",
        },
      ],
    },
    {
      name: "Chapter 3",
      pages: [
        {
          id: "MzQ6MzkwOjM2MQ",
        },
        {
          id: "MzU6MzcxOjY5OQ",
        },
        {
          id: "MzU6MzcxOjQyMw",
        },
        {
          id: "MzQ6MzI2OjI3OQ",
        },
        {
          id: "MzU6Njg6NTMx",
        },
        {
          id: "MzY6MzUyOjUwNw",
        },
        {
          id: "Mzc6Njg6MzM5",
        },
        {
          id: "Mzc6Mjk1OjMwMw",
        },
        {
          id: "Mzg6OTk6MjMx",
        },
        {
          id: "Mzk6Njg6NTMx",
        },
        {
          id: "Mzk6Njg6Mzk5",
        },
        {
          id: "NDA6OTk6NjM5",
        },
        {
          id: "NDA6MzI2OjI0Mw",
        },
        {
          id: "NDE6Njg6NjI3",
        },
        {
          id: "Mzc6MzA0OjY4Nw",
        },
      ],
    },
    {
      name: "Chapter 4",
      pages: [
        {
          id: "NDI6MzkwOjM2MQ",
        },
        {
          id: "NDM6MzcxOjY5OQ",
        },
        {
          id: "NDM6MzcxOjQ5NQ",
        },
        {
          id: "NDI6OTk6MTgz",
        },
        {
          id: "NDM6Njg6NDcx",
        },
        {
          id: "NDQ6MzI2OjU1NQ",
        },
        {
          id: "NDQ6MzI2OjE0Nw",
        },
        {
          id: "NDU6Njg6MjMx",
        },
        {
          id: "NDc6Njg6NTE5",
        },
        {
          id: "NDc6Njg6MzAz",
        },
        {
          id: "NDc6Njg6MjA3",
        },
        {
          id: "NDc6Mjk1OjI1NQ",
        },
        {
          id: "NDk6Njg6NTMx",
        },
        {
          id: "NDk6Mjk1OjYyNw",
        },
        {
          id: "NTA6OTk6MjMx",
        },
        {
          id: "NTA6MzI2OjY5OQ",
        },
        {
          id: "NTA6MzI2OjE4Mw",
        },
        {
          id: "NTE6Njg6MTgz",
        },
        {
          id: "NTI6MzI2Ojk5",
        },
        {
          id: "NTM6Njg6NDcx",
        },
        {
          id: "NTM6Njg6MTM1",
        },
        {
          id: "NTQ6OTk6NTY3",
        },
        {
          id: "NTQ6NDAxOjM1MQ",
        },
        {
          id: "NTQ6NDA3OjIxOQ",
        },
        {
          id: "NTU6Njg6MzM5",
        },
        {
          id: "NTU6Mjk1OjQyMw",
        },
        {
          id: "NTY6MzI2OjU1NQ",
        },
        {
          id: "NTc6Njg6MjQz",
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
    {
      name: "Back Matter",
      pages: [
        {
          id: "NTk6MTMxOjY1NA",
        },
        {
          id: "NTk6Mjk1OjQzNQ",
        },
        {
          id: "NTk6Mjk1OjIxOQ",
        },
        {
          id: "NjA6OTk6MjU1",
        },
        {
          id: "NjA6OTk6MTIz",
        },
        {
          id: "NjA6MzI2OjIxOQ",
        },
        {
          id: "NjE6Njg6NjYz",
        },
        {
          id: "NjE6Njg6NTE5",
        },
        {
          id: "NjE6Njg6MzE1",
        },
        {
          id: "NjE6Njg6MTEx",
        },
        {
          id: "NjE6Mjk1OjU1NQ",
        },
        {
          id: "NjE6Mjk1OjM5OQ",
        },
        {
          id: "NjI6OTk6MTQ3",
        },
        {
          id: "NjI6MzI2OjQ0Nw",
        },
        {
          id: "NjI6MzI2OjI3OQ",
        },
        {
          id: "NjM6Njg6Njk5",
        },
        {
          id: "NjM6Njg6NDIz",
        },
        {
          id: "NjM6Njg6MTgz",
        },
        {
          id: "NjU6MTQ4OjYyMw",
        },
        {
          id: "NjU6Mjk1OjE5NQ",
        },
        {
          id: "NjY6OTk6MTcx",
        },
        {
          id: "Njc6Njg6Njk5",
        },
        {
          id: "Njc6Mjk1OjY5OQ",
        },
        {
          id: "Njg6OTk6MjY3",
        },
        {
          id: "Njg6MzI2OjYyNw",
        },
        {
          id: "Njg6MzI2OjI2Nw",
        },
        {
          id: "Njk6Njg6NjUx",
        },
        {
          id: "Njk6MTA2OjMzOQ",
        },
        {
          id: "Njk6Njg6MTcx",
        },
        {
          id: "Njk6Mjk1OjY5OQ",
        },
        {
          id: "NzE6MTUwOjY1NA",
        },
        {
          id: "NzI6OTk6Njk5",
        },
        {
          id: "NzI6MzI2OjYwMw",
        },
        {
          id: "NzI6MzI2OjUwNw",
        },
        {
          id: "NzI6MzkxOjM5OQ",
        },
        {
          id: "NzI6MzI2OjEyMw",
        },
        {
          id: "NzM6Njg6NTQz",
        },
        {
          id: "NzM6Njg6Mzg3",
        },
        {
          id: "NzM6Njg6MjY3",
        },
        {
          id: "NzM6Njg6MjA3",
        },
        {
          id: "NzM6Njg6MTQ3",
        },
        {
          id: "NzM6Mjk1OjM5OQ",
        },
        {
          id: "NzM6Mjk1OjI5MQ",
        },
        {
          id: "NzM6Mjk1OjE5NQ",
        },
        {
          id: "NzQ6MjUxOjY5OQ",
        },
        {
          id: "NzQ6MjU1OjY0MA",
        },
        {
          id: "NzU6NzI6NzAw",
        },
        {
          id: "NzU6NzI6MzUy",
        },
        {
          id: "NzU6NzI6MTQ4",
        },
        {
          id: "NzY6OTk6Njk5",
        },
        {
          id: "Nzc6Njg6Njk5",
        },
        {
          id: "Nzg6MjUxOjY5OQ",
        },
        {
          id: "Nzk6Njg6Njk5",
        },
        {
          id: "ODA6MjUxOjY5OQ",
        },
        {
          id: "ODE6Njg6Njk5",
        },
        {
          id: "ODI6MjUxOjY5OQ",
        },
        {
          id: "ODQ6MjUxOjY5OQ",
        },
        {
          id: "ODQ6MzIwOjQ3MQ",
        },
        {
          id: "ODQ6MzY4OjEyMw",
        },
        {
          id: "ODU6Njg6NDU5",
        },
        {
          id: "ODY6MjUxOjY5OQ",
        },
        {
          id: "ODc6Njg6Njk5",
        },
        {
          id: "ODg6MTI4OjY1OQ",
        },
        {
          id: "OTA6MjQ5OjY1OA",
        },
        {
          id: "OTI6MjE3OjY1OA",
        },
        {
          id: "NDQ6MTA4OjY4Nw",
        },
        {
          id: "NjI6MTA4OjY4Nw",
        },
        {
          id: "NzM6MzAzOjY4Nw",
        },
        {
          id: "NzQ6MjEwOjY5OQ",
        },
        {
          id: "NzQ6MTg3OjYyNw",
        },
        {
          id: "NzQ6MjE1OjU5MQ",
        },
        {
          id: "NzQ6MjA2OjU1NQ",
        },
        {
          id: "NzQ6MTY2OjUxOQ",
        },
        {
          id: "NzQ6MTc0OjQ1OQ",
        },
        {
          id: "NzQ6MTgzOjQyMw",
        },
        {
          id: "NzQ6MjAzOjI5MQ",
        },
        {
          id: "NzQ6MTU2OjI0Mw",
        },
        {
          id: "NzQ6MTc2OjE4Mw",
        },
        {
          id: "Nzg6MTUyOjY2Mw",
        },
        {
          id: "Nzk6MzcxOjY2Mw",
        },
        {
          id: "ODA6MTQzOjY2Mw",
        },
        {
          id: "ODE6MzcxOjY2Mw",
        },
        {
          id: "ODI6MTMzOjY2Mw",
        },
        {
          id: "ODM6MzcxOjY2Mw",
        },
        {
          id: "ODQ6MTg1OjY2Mw",
        },
        {
          id: "ODU6MzcxOjY2Mw",
        },
        {
          id: "ODY6MTI2OjY2Mw",
        },
        {
          id: "ODc6MzcxOjY2Mw",
        },
      ],
    },
  ];
  combines = [
    {
      source: "OTI6MzI2OjI1NQ",
      dest: "OTI6MjE3OjY1OA",
    },
    {
      source: "OTA6MzI2OjU1NQ",
      dest: "OTA6MjQ5OjY1OA",
    },
    {
      source: "ODk6Njg6NjM5",
      dest: "ODg6MTI4OjY1OQ",
    },
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "EXTINCTION CURSE: LIFE\u2019S LONG SHADOWS" &&
        t.fontId === "Gin-Regular:12",
    );
  }
  preprocess(text) {
    this.removeText(text, 68, 268.3426, 555.0356);
    this.removeText(text, 68, 255.071, 543.0356);
    this.removeText(text, 68, 250.4449, 531.0356);
    this.removeText(text, 68, 253.7689, 519.0356);
    this.removeText(text, 68, 277.0907, 507.0356);
    this.removeText(text, 68, 279.5966, 495.0356);
  }
  finalize(moduleData) {}
}
