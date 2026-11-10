import { ExtinctionCurseBase } from "./base.js";
import { AdventureImage, CaptionImage } from "../../core/images.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class ExtinctionCurse5 extends ExtinctionCurseBase {
  prefix = "extinction-curse5";
  fullName = "Extinction Curse - Lord of the Black Sands";
  pages = [
    this.ChapterHeadingPageLayout(6),
    this.RightSingleColumnWithSidebar(7),
    this.LeftTwoColumn(8),
    this.RightTwoColumn(9),
    this.LeftTwoColumnWithMap(10, 380),
    this.RightTwoColumn(11),
    this.LeftTwoColumn(12),
    this.RightTwoColumn(13),
    this.LeftTwoColumnWithLeftCutout(14, 70),
    this.RightTwoColumnWithRightCutout(15, 520),
    this.LeftTwoColumn(16),
    this.RightTwoColumnWithMap(17, 360),
    this.LeftTwoColumn(18),
    this.RightTwoColumn(19),
    this.LeftTwoColumnWithLeftCutout(20, 560),
    this.RightTwoColumn(21),
    this.LeftTwoColumn(22),
    this.RightTwoColumn(23),
    this.LeftTwoColumn(24),
    this.RightTwoColumn(25),
    this.ChapterHeadingPageLayout(26),
    this.RightSingleColumnWithSidebar(27),
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
    this.LeftTwoColumn(42),
    this.RightTwoColumn(43),
    this.ChapterHeadingPageLayout(44),
    this.RightSingleColumnWithSidebar(45),
    this.LeftTwoColumnWithLeftCutout(46, 320),
    this.RightTwoColumn(47),
    this.LeftTwoColumn(48),
    this.RightTwoColumn(49),
    this.LeftTwoColumn(50),
    this.RightTwoColumn(51),
    this.LeftTwoColumnWithMap(52, 340),
    this.RightTwoColumn(53),
    this.LeftTwoColumn(54),
    this.RightTwoColumn(55),
    this.LeftTwoColumn(56),
    this.RightTwoColumn(57),
    this.LeftTwoColumn(58),
    this.RightTwoColumn(59),
    this.LeftTwoColumn(60),
    this.RightTwoColumn(61),
    this.RightChapterHeadingPageLayout(63),
    this.RightTwoColumnWithRightCutout(65, 340),
    this.LeftTwoColumn(66),
    this.RightTwoColumn(67),
    this.RightChapterHeadingPageLayout(69),
    this.LeftTwoColumnWithMap(70, 510),
    this.RightTwoColumnWithMap(71, 510),
    this.LeftTwoColumnWithMap(72, 510),
    this.RightTwoColumnWithMap(73, 510),
    this.RightChapterHeadingPageLayout(75),
    this.LeftTwoColumn(76),
    this.RightTwoColumn(77),
    this.LeftTwoColumn(78),
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
        name: "ec5/map1",
        priority: 0,
      },
      nameInfo: {
        x: 16,
        y: 758.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 10,
      width: 1261,
      height: 805,
      gridType: "gridless",
      imageLeft: 0,
      imageRight: 1e3,
      imageCols: 10,
      imageTop: 0,
      imageBottom: 1e3,
      imageRows: 10,
      globalLight: true,
      detailsFile: "/ec/maps/ec5-map1.json",
    }),
    new ModuleScene({
      name: "map2",
      canonical: {
        name: "ec5/map2",
        priority: 0,
      },
      nameInfo: {
        x: 75,
        y: 694.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 11,
      width: 635,
      height: 803,
      imageLeft: 75,
      imageRight: 569,
      imageCols: 20,
      imageTop: 23,
      imageBottom: 789,
      imageRows: 31,
      globalLight: true,
      detailsFile: "/ec/maps/ec5-map2.json",
      journals: [
        {
          x: 1750,
          y: 1850,
          id: "MTA6MzI2OjI3OQ",
        },
        {
          x: 2350,
          y: 3150,
          id: "MTE6Mzc4OjY5OQ",
        },
        {
          x: 1250,
          y: 3550,
          id: "MTI6MzI2OjY5OQ",
        },
        {
          x: 650,
          y: 850,
          id: "MTA6OTk6Mzc1",
        },
      ],
      tokens: [
        {
          id: "npc43",
          x: 2200,
          y: 1200,
          elite: true,
        },
        {
          id: "npc43",
          x: 2e3,
          y: 1400,
          elite: true,
        },
        {
          id: "npc43",
          x: 2100,
          y: 1300,
          elite: true,
        },
        {
          id: "npc3",
          x: 2e3,
          y: 3e3,
          weak: true,
        },
        {
          id: "npc41",
          x: 1300,
          y: 3500,
        },
      ],
    }),
    new ModuleScene({
      name: "map3a",
      canonical: {
        name: "ec5/map3a",
        priority: 0,
      },
      nameInfo: {
        x: 186,
        y: 758.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 14,
      width: 645,
      height: 1636,
      cropLeft: 0,
      cropRight: 645,
      cropTop: 0,
      cropBottom: 825,
      imageLeft: 39,
      imageRight: 618,
      imageCols: 22,
      imageTop: 10,
      imageBottom: 747,
      imageRows: 28,
      globalLight: true,
      detailsFile: "/ec/maps/ec5-map3a.json",
      journals: [
        {
          x: 1150,
          y: 1850,
          id: "MTM6Njg6MzI3",
        },
        {
          x: 2550,
          y: 1450,
          id: "MTM6Mjk1OjU1NQ",
        },
        {
          x: 2250,
          y: 2850,
          id: "MTQ6MzI2OjQzNQ",
        },
        {
          x: 750,
          y: 950,
          id: "MTM6Njg6NjYz",
        },
        {
          x: 750,
          y: 850,
          id: "MTI6MzMwOjEyMw",
        },
      ],
      tokens: [
        {
          id: "npc53",
          x: 900,
          y: 2e3,
        },
        {
          id: "npc53",
          x: 1100,
          y: 2800,
        },
        {
          id: "npc44",
          x: 2400,
          y: 2400,
        },
        {
          id: "npc44",
          x: 2e3,
          y: 2800,
        },
        {
          id: "npc44",
          x: 2200,
          y: 2900,
        },
        {
          id: "npc44",
          x: 2500,
          y: 3100,
        },
        {
          id: "npc44",
          x: 2500,
          y: 2100,
        },
      ],
    }),
    new ModuleScene({
      name: "map3b",
      canonical: {
        name: "ec5/map3b",
        priority: 0,
      },
      nameInfo: {
        x: 186,
        y: 366.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 14,
      width: 645,
      height: 1636,
      cropLeft: 0,
      cropRight: 645,
      cropTop: 830,
      cropBottom: 1636,
      imageLeft: 17,
      imageRight: 637,
      imageCols: 24,
      imageTop: 842,
      imageBottom: 1616,
      imageRows: 30,
      globalLight: true,
      detailsFile: "/ec/maps/ec5-map3b.json",
      journals: [
        {
          x: 1750,
          y: 1950,
          id: "MTU6Njg6MzAz",
        },
        {
          x: 2250,
          y: 2650,
          id: "MTY6OTk6MzUx",
        },
        {
          x: 2050,
          y: 3650,
          id: "MTY6MzI2OjI1NQ",
        },
        {
          x: 750,
          y: 1750,
          id: "MTU6Njg6NDgz",
        },
        {
          x: 750,
          y: 1650,
          id: "MTQ6MzI2OjExMQ",
        },
      ],
      tokens: [
        {
          id: "npc40",
          x: 1700,
          y: 2e3,
        },
        {
          id: "npc47",
          x: 2e3,
          y: 2700,
        },
        {
          id: "npc47",
          x: 2300,
          y: 2800,
        },
        {
          id: "npc47",
          x: 2400,
          y: 2600,
        },
        {
          id: "npc47",
          x: 2600,
          y: 2500,
        },
      ],
    }),
    new ModuleScene({
      name: "map4",
      canonical: {
        name: "ec5/map4",
        priority: 0,
      },
      nameInfo: {
        x: 75,
        y: 694.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 17,
      width: 910,
      height: 705,
      imageLeft: 20,
      imageRight: 900,
      imageCols: 43,
      imageTop: 10,
      imageBottom: 686,
      imageRows: 33,
      globalLight: true,
      detailsFile: "/ec/maps/ec5-map4.json",
      journals: [],
    }),
    new ModuleScene({
      name: "map5a",
      canonical: {
        name: "ec5/map5a",
        priority: 0,
      },
      nameInfo: {
        x: 15.75,
        y: 758.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 28,
      width: 1261,
      height: 1637,
      cropLeft: 17,
      cropRight: 389,
      cropTop: 8,
      cropBottom: 515,
      imageLeft: 17,
      imageRight: 389,
      imageCols: 28,
      imageTop: 8,
      imageBottom: 515,
      imageRows: 38,
      globalLight: true,
      detailsFile: "/ec/maps/ec5-map5a.json",
      journals: [
        {
          x: 850,
          y: 1150,
          id: "MzA6MzI2OjE1OQ",
        },
      ],
      tokens: [
        {
          id: "npc7",
          x: 2200,
          y: 4200,
        },
      ],
    }),
    new ModuleScene({
      name: "map5b",
      canonical: {
        name: "ec5/map5b",
        priority: 0,
      },
      nameInfo: {
        x: 203,
        y: 758.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 28,
      width: 1261,
      height: 1637,
      cropLeft: 405,
      cropRight: 818,
      cropTop: 10,
      cropBottom: 517,
      imageLeft: 405,
      imageRight: 818,
      imageCols: 31,
      imageTop: 10,
      imageBottom: 517,
      imageRows: 38,
      globalLight: true,
      detailsFile: "/ec/maps/ec5-map5b.json",
      journals: [
        {
          x: 950,
          y: 1150,
          id: "MzA6OTk6NTY3",
        },
      ],
      tokens: [
        {
          id: "npc39",
          x: 2200,
          y: 2900,
        },
      ],
    }),
    new ModuleScene({
      name: "map5c",
      canonical: {
        name: "ec5/map5c",
        priority: 0,
      },
      nameInfo: {
        x: 406,
        y: 758.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 28,
      width: 1261,
      height: 1637,
      cropLeft: 842,
      cropRight: 1253,
      cropTop: 9,
      cropBottom: 516,
      imageLeft: 842,
      imageRight: 1253,
      imageCols: 31,
      imageTop: 9,
      imageBottom: 516,
      imageRows: 38,
      globalLight: true,
      detailsFile: "/ec/maps/ec5-map5c.json",
      journals: [
        {
          x: 850,
          y: 1150,
          id: "Mjc6Njg6MjE5",
        },
      ],
      tokens: [
        {
          id: "npc45",
          x: 2400,
          y: 3100,
        },
      ],
    }),
    new ModuleScene({
      name: "map5d",
      canonical: {
        name: "ec5/map5d",
        priority: 0,
      },
      nameInfo: {
        x: 15.75,
        y: 513.5862,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 28,
      width: 1261,
      height: 1637,
      cropLeft: 3,
      cropRight: 656,
      cropTop: 530,
      cropBottom: 1156,
      imageLeft: 3,
      imageRight: 656,
      imageCols: 49,
      imageTop: 542,
      imageBottom: 1156,
      imageRows: 46,
      globalLight: true,
      detailsFile: "/ec/maps/ec5-map5d.json",
      journals: [
        {
          x: 6e3,
          y: 3500,
          id: "MzI6MzI2OjI2Nw",
        },
        {
          x: 3400,
          y: 3700,
          id: "MzM6Njg6NDM1",
        },
        {
          x: 1450,
          y: 1150,
          id: "MzI6OTk6MTgz",
        },
        {
          x: 1450,
          y: 1250,
          id: "MzI6MzI2OjQyMw",
        },
      ],
      tokens: [
        {
          id: "npc48",
          x: 5800,
          y: 3300,
        },
        {
          id: "npc48",
          x: 5800,
          y: 3600,
        },
        {
          id: "npc27",
          x: 3e3,
          y: 3400,
        },
        {
          id: "npc27",
          x: 3600,
          y: 3400,
        },
      ],
    }),
    new ModuleScene({
      name: "map5e",
      canonical: {
        name: "ec5/map5e",
        priority: 0,
      },
      nameInfo: {
        x: 332.25,
        y: 513.5862,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 28,
      width: 1261,
      height: 1637,
      cropLeft: 683,
      cropRight: 1255,
      cropTop: 541,
      cropBottom: 1156,
      imageLeft: 683,
      imageRight: 1255,
      imageCols: 43,
      imageTop: 541,
      imageBottom: 1156,
      imageRows: 46,
      globalLight: true,
      detailsFile: "/ec/maps/ec5-map5e.json",
      journals: [
        {
          x: 4100,
          y: 2600,
          id: "NDA6OTk6MjU1",
        },
        {
          x: 4850,
          y: 4250,
          id: "NDA6MzI2OjMyNw",
        },
        {
          x: 3950,
          y: 4250,
          id: "NDI6OTk6NTE5",
        },
        {
          x: 3200,
          y: 4300,
          id: "NDI6OTk6NDEx",
        },
        {
          x: 2250,
          y: 4450,
          id: "NDI6OTk6MTIz",
        },
        {
          x: 2150,
          y: 2650,
          id: "NDI6MzI2OjMyNw",
        },
        {
          x: 1150,
          y: 1450,
          id: "MzI6OTk6MTgz",
        },
        {
          x: 1150,
          y: 1550,
          id: "MzI6MzI2OjQyMw",
        },
      ],
      tokens: [
        {
          id: "npc11",
          x: 4800,
          y: 3900,
        },
        {
          id: "npc42",
          x: 1900,
          y: 4100,
        },
        {
          id: "npc42",
          x: 2300,
          y: 4100,
        },
        {
          id: "npc42",
          x: 2300,
          y: 4600,
        },
        {
          id: "npc42",
          x: 1900,
          y: 4600,
        },
        {
          id: "npc35",
          x: 2200,
          y: 2100,
        },
        {
          id: "npc42",
          x: 1800,
          y: 2e3,
        },
        {
          id: "npc10",
          x: 2500,
          y: 3100,
        },
        {
          id: "npc10",
          x: 1700,
          y: 3200,
        },
        {
          id: "npc10",
          x: 1600,
          y: 2700,
        },
        {
          id: "npc10",
          x: 2600,
          y: 2300,
        },
        {
          id: "npc37",
          x: 3300,
          y: 2e3,
        },
        {
          id: "npc37",
          x: 4400,
          y: 2800,
        },
      ],
    }),
    new ModuleScene({
      name: "map5f",
      canonical: {
        name: "ec5/map5f",
        priority: 0,
      },
      nameInfo: {
        x: 10.75,
        y: 199.6681,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 28,
      width: 1261,
      height: 1637,
      cropLeft: 4,
      cropRight: 284,
      cropTop: 1182,
      cropBottom: 1622,
      imageLeft: 4,
      imageRight: 284,
      imageCols: 21,
      imageTop: 1182,
      imageBottom: 1622,
      imageRows: 33,
      globalLight: true,
      detailsFile: "/ec/maps/ec5-map5f.json",
      journals: [
        {
          x: 1600,
          y: 2600,
          id: "MzM6Mjk1OjEyMw",
        },
      ],
      tokens: [
        {
          id: "npc31",
          x: 1300,
          y: 2500,
        },
      ],
    }),
    new ModuleScene({
      name: "map5g",
      canonical: {
        name: "ec5/map5g",
        priority: 0,
      },
      nameInfo: {
        x: 166.5,
        y: 199.6681,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 28,
      width: 1261,
      height: 1637,
      cropLeft: 310,
      cropRight: 710,
      cropTop: 1182,
      cropBottom: 1623,
      imageLeft: 310,
      imageRight: 710,
      imageCols: 30,
      imageTop: 1182,
      imageBottom: 1623,
      imageRows: 33,
      globalLight: true,
      detailsFile: "/ec/maps/ec5-map5g.json",
      journals: [
        {
          x: 2850,
          y: 2550,
          id: "MzQ6OTk6MTU5",
        },
        {
          x: 1950,
          y: 3150,
          id: "MzU6Njg6MjU1",
        },
        {
          x: 1950,
          y: 1950,
          id: "MzY6OTk6NTY3",
        },
      ],
      tokens: [
        {
          id: "npc54",
          x: 1600,
          y: 2e3,
        },
        {
          id: "npc54",
          x: 2200,
          y: 2e3,
        },
        {
          id: "npc8",
          x: 2500,
          y: 1900,
        },
        {
          id: "npc8",
          x: 2400,
          y: 2400,
        },
        {
          id: "npc8",
          x: 2800,
          y: 3200,
        },
        {
          id: "npc8",
          x: 2500,
          y: 1800,
        },
        {
          id: "npc8",
          x: 2800,
          y: 3300,
        },
        {
          id: "npc8",
          x: 2400,
          y: 2700,
        },
      ],
    }),
    new ModuleScene({
      name: "map5h",
      canonical: {
        name: "ec5/map5h",
        priority: 0,
      },
      nameInfo: {
        x: 371.25,
        y: 206.5862,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 28,
      width: 1261,
      height: 1637,
      cropLeft: 737,
      cropRight: 1256,
      cropTop: 1182,
      cropBottom: 1636,
      imageLeft: 737,
      imageRight: 1256,
      imageCols: 39,
      imageTop: 1182,
      imageBottom: 1636,
      imageRows: 34,
      globalLight: true,
      detailsFile: "/ec/maps/ec5-map5h.json",
      journals: [
        {
          x: 2450,
          y: 1550,
          id: "MzY6MzI2OjI1NQ",
        },
        {
          x: 2450,
          y: 3450,
          id: "Mzc6Njg6NjE1",
        },
        {
          x: 2750,
          y: 2650,
          id: "Mzg6MzI2OjYxNQ",
        },
        {
          x: 3950,
          y: 2550,
          id: "Mzk6Mjk1OjY5OQ",
        },
      ],
      tokens: [
        {
          id: "npc9",
          x: 2500,
          y: 3300,
        },
        {
          id: "npc10",
          x: 2900,
          y: 3400,
        },
        {
          id: "npc10",
          x: 2300,
          y: 3800,
        },
        {
          id: "npc10",
          x: 1700,
          y: 3500,
        },
      ],
    }),
    new ModuleScene({
      name: "map6",
      canonical: {
        name: "ec5/map6",
        priority: 0,
      },
      nameInfo: {
        x: 16.5,
        y: 758.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 52,
      width: 1260,
      height: 880,
      imageLeft: 69,
      imageRight: 1179,
      imageCols: 44,
      imageTop: 140,
      imageBottom: 821,
      imageRows: 27,
      globalLight: true,
      detailsFile: "/ec/maps/ec5-map6.json",
      journals: [
        {
          x: 2e3,
          y: 2200,
          id: "NTM6Njg6NDU5",
        },
        {
          x: 3250,
          y: 2050,
          id: "NTU6Njg6NjE1",
        },
        {
          x: 4400,
          y: 2100,
          id: "NTY6OTk6NDIz",
        },
        {
          x: 5500,
          y: 1900,
          id: "NTc6Njg6NTQz",
        },
        {
          x: 2e3,
          y: 3600,
          id: "NTg6MzI2OjQ1OQ",
        },
        {
          x: 3500,
          y: 3400,
          id: "NTk6Njg6NjAz",
        },
        {
          x: 5200,
          y: 3300,
          id: "NTk6Mjk1OjY1MQ",
        },
        {
          x: 1350,
          y: 1150,
          id: "NTI6MzI2OjI5MQ",
        },
        {
          x: 1350,
          y: 1250,
          id: "NTM6Njg6Njk5",
        },
      ],
      tokens: [
        {
          id: "npc16",
          x: 2100,
          y: 1900,
        },
        {
          id: "npc16",
          x: 1800,
          y: 1900,
        },
        {
          id: "npc16",
          x: 1800,
          y: 2200,
        },
        {
          id: "npc16",
          x: 2100,
          y: 2200,
        },
        {
          id: "npc17",
          x: 3100,
          y: 1900,
        },
        {
          id: "npc17",
          x: 3600,
          y: 2100,
        },
        {
          id: "npc46",
          x: 4200,
          y: 2100,
        },
        {
          id: "npc19",
          x: 5300,
          y: 1700,
        },
        {
          id: "npc19",
          x: 5600,
          y: 1900,
        },
        {
          id: "npc38",
          x: 1900,
          y: 3200,
        },
        {
          id: "npc20",
          x: 3300,
          y: 3200,
        },
        {
          id: "npc16",
          x: 3600,
          y: 3400,
        },
        {
          id: "npc16",
          x: 3500,
          y: 3400,
        },
        {
          id: "npc33",
          x: 5300,
          y: 3100,
        },
        {
          id: "npc21",
          x: 4800,
          y: 3e3,
        },
        {
          id: "npc21",
          x: 5300,
          y: 2800,
        },
      ],
    }),
    new ModuleScene({
      name: "map7",
      canonical: {
        name: "ec5/map7",
        priority: 0,
      },
      nameInfo: {
        x: 23,
        y: 755.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 64,
      width: 1261,
      height: 1636,
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
      width: 1261,
      height: 1637,
    }),
    new AdventureImage({
      name: "journal8",
      page: 6,
      width: 1259,
      height: 805,
    }),
    new CaptionImage({
      name: "journal9",
      page: 15,
      width: 839,
      height: 1221,
    }),
    new AdventureImage({
      name: "journal10",
      page: 26,
      width: 1259,
      height: 805,
    }),
    new AdventureImage({
      name: "journal11",
      page: 44,
      width: 1259,
      height: 805,
    }),
    new AdventureImage({
      name: "journal12",
      page: 45,
      width: 564,
      height: 543,
    }),
    new AdventureImage({
      name: "journal13",
      page: 62,
      width: 1261,
      height: 1637,
    }),
    new AdventureImage({
      name: "journal14",
      page: 68,
      width: 1261,
      height: 1636,
    }),
    new AdventureImage({
      name: "journal15",
      page: 74,
      width: 1261,
      height: 1636,
    }),
    new AdventureImage({
      name: "journal16",
      page: 77,
      width: 453,
      height: 450,
    }),
    new AdventureImage({
      name: "journal17",
      page: 78,
      width: 646,
      height: 646,
    }),
    new CaptionImage({
      name: "journal18",
      page: 70,
      width: 369,
      height: 369,
    }),
    new CaptionImage({
      name: "journal19",
      page: 71,
      width: 404,
      height: 404,
    }),
    new CaptionImage({
      name: "journal20",
      page: 72,
      width: 425,
      height: 425,
    }),
    new CaptionImage({
      name: "journal21",
      page: 73,
      width: 400,
      height: 400,
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 8,
        x: 296.0868,
        y: 416.636,
      },
      page: 8,
      width: 564,
      height: 543,
      tokenX: 39,
      tokenY: 108,
      tokenSize: 648,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 9,
        x: 256.6392,
        y: 428.2538,
      },
      page: 9,
      width: 569,
      height: 569,
      tokenX: 61,
      tokenY: 109,
      tokenSize: 681,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.PpAOxz6ayvkn0fMK",
      name: {
        page: 12,
        x: 129.061,
        y: 126.5905,
      },
      page: 12,
      width: 873,
      height: 1235,
      tokenX: -295,
      tokenY: 25,
      tokenSize: 339,
      forIds: ["MTE6Mjk1Ojk5"],
    }),
    new ModuleNpc({
      id: "npc4",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.PYvtflsrA9ITevEq",
      page: 19,
      width: 903,
      height: 910,
      tokenX: -99,
      tokenY: -116,
      tokenSize: 490,
      forIds: [
        "ODQ6Mjc1OjE3MQ",
        "MjM6Mjk1OjMxNQ",
        "NDg6OTk6NDgz",
        "MTk6Mjk1OjY5OQ",
      ],
    }),
    new ModuleNpc({
      id: "npc5",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 23,
        x: 262.3127,
        y: 431.159,
      },
      page: 23,
      width: 580,
      height: 580,
      tokenX: 54,
      tokenY: 109,
      tokenSize: 692,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc6",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.PYvtflsrA9ITevEq",
      name: {
        page: 25,
        x: 444.3752,
        y: 117.5981,
      },
      page: 25,
      width: 856,
      height: 1164,
      tokenX: -142,
      tokenY: 121,
      tokenSize: 520,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc7",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.B9fl34W1jENDoYqc",
      name: {
        page: 31,
        x: 375.3828,
        y: 102.5905,
      },
      page: 31,
      width: 1180,
      height: 838,
      tokenX: -422,
      tokenY: 65,
      tokenSize: 704,
      forIds: ["MzE6Njg6MjQz"],
    }),
    new ModuleNpc({
      id: "npc8",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.Ffj8PyKkBkYNV6pd",
      page: 35,
      width: 930,
      height: 1117,
      tokenX: -143,
      tokenY: 18,
      tokenSize: 501,
      forIds: ["MzQ6MzI2OjM1MQ"],
    }),
    new ModuleNpc({
      id: "npc9",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.G2ICeUU6br5Xem3P",
      page: 38,
      width: 903,
      height: 1161,
      tokenX: -309,
      tokenY: 80,
      tokenSize: 349,
      forIds: ["Mzc6Njg6MjU1"],
    }),
    new ModuleNpc({
      id: "npc10",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.18Y3yoYcEGoLcmDy",
      page: 39,
      width: 818,
      height: 1111,
      tokenX: -280,
      tokenY: 83,
      tokenSize: 411,
      forIds: ["Mzc6Mjk1OjIzMQ", "NDM6Mjk1OjE1OQ"],
    }),
    new ModuleNpc({
      id: "npc11",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.YZcw33uhsPHWKcHM",
      page: 41,
      width: 903,
      height: 1253,
      tokenX: -271,
      tokenY: 42,
      tokenSize: 357,
      forIds: ["NDE6Njg6NDgz"],
    }),
    new ModuleNpc({
      id: "npc12",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 47,
        x: 239.9557,
        y: 406.6814,
      },
      page: 47,
      width: 605,
      height: 638,
      tokenX: 78,
      tokenY: 164,
      tokenSize: 778,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc13",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 49,
        x: 239.9533,
        y: 390.1814,
      },
      page: 49,
      width: 606,
      height: 646,
      tokenX: 55,
      tokenY: 173,
      tokenSize: 758,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc14",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 50,
        x: 266.5065,
        y: 418.6814,
      },
      page: 50,
      width: 600,
      height: 600,
      tokenX: 20,
      tokenY: 98,
      tokenSize: 684,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc15",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 51,
        x: 452.265,
        y: 210.5905,
      },
      page: 51,
      width: 766,
      height: 1219,
      tokenX: -38,
      tokenY: 23,
      tokenSize: 379,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc16",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.S5pcyiSXhMKrMjcC",
      page: 53,
      width: 798,
      height: 1353,
      tokenX: -28,
      tokenY: -178,
      tokenSize: 373,
      forIds: ["NTk6Njg6OTk", "NTQ6MzI2OjY1MQ"],
    }),
    new ModuleNpc({
      id: "npc17",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.J3mRwgqkOlOi44Xv",
      page: 54,
      width: 770,
      height: 1210,
      tokenX: -303,
      tokenY: -83,
      tokenSize: 314,
      forIds: ["NTU6Njg6MzI3"],
    }),
    new ModuleNpc({
      id: "npc18",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.BsnU2Hf4a3MuXVPn",
      page: 55,
      width: 606,
      height: 1120,
      tokenX: -138,
      tokenY: -135,
      tokenSize: 448,
      forIds: ["NTY6OTk6NTkx"],
    }),
    new ModuleNpc({
      id: "npc19",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.0VzVpqN3Yp0IY3C1",
      page: 57,
      width: 867,
      height: 1161,
      tokenX: -417,
      tokenY: 49,
      tokenSize: 321,
      forIds: ["NTg6OTk6MTgz"],
    }),
    new ModuleNpc({
      id: "npc20",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.ImueS9YFhV6sxqBP",
      name: {
        page: 59,
        x: 348.7595,
        y: 82.6814,
      },
      page: 59,
      width: 851,
      height: 1273,
      tokenX: -262,
      tokenY: -135,
      tokenSize: 321,
      forIds: ["NTk6Njg6MTQ3"],
    }),
    new ModuleNpc({
      id: "npc21",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.n1Mv0Q1MirfjBmfI",
      name: {
        page: 61,
        x: 310.0698,
        y: 78.5905,
      },
      page: 61,
      width: 803,
      height: 1261,
      tokenX: -214,
      tokenY: -101,
      tokenSize: 421,
      forIds: ["NjA6MzI2OjM2Mw"],
      elite: true,
    }),
    new ModuleNpc({
      id: "npc22",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 66,
        x: 270.2734,
        y: 437.886,
      },
      page: 66,
      width: 567,
      height: 600,
      tokenX: 58,
      tokenY: 120,
      tokenSize: 684,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc23",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 67,
        x: 237.4597,
        y: 128.6359,
      },
      page: 67,
      width: 564,
      height: 600,
      tokenX: 69,
      tokenY: 125,
      tokenSize: 684,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc24",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.B9fl34W1jENDoYqc",
      page: 79,
      width: 953,
      height: 970,
      tokenX: -50,
      tokenY: 197,
      tokenSize: 970,
      forIds: ["Nzk6Njg6NTc5"],
    }),
    new ModuleNpc({
      id: "npc25",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.B2jQKaAXO7LofE7L",
      page: 80,
      width: 764,
      height: 1078,
      tokenX: -188,
      tokenY: 67,
      tokenSize: 406,
      forIds: ["ODA6MjUxOjU0Mw"],
    }),
    new ModuleNpc({
      id: "npc26",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.PpAOxz6ayvkn0fMK",
      page: 81,
      width: 872,
      height: 1030,
      tokenX: -71,
      tokenY: 105,
      tokenSize: 470,
      forIds: ["ODE6Njg6NjE1"],
    }),
    new ModuleNpc({
      id: "npc27",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.JRvLtSt9cda4pc8z",
      page: 82,
      width: 919,
      height: 1123,
      tokenX: -377,
      tokenY: 115,
      tokenSize: 507,
      forIds: ["ODI6MjUxOjU3OQ", "MzM6Mjk1OjIzMQ"],
    }),
    new ModuleNpc({
      id: "npc28",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.aqcDvkIaKwJdMEAO",
      page: 83,
      width: 800,
      height: 1034,
      tokenX: 51,
      tokenY: 63,
      tokenSize: 1034,
      forIds: ["ODM6Njg6NjM5", "MTg6MzI2OjQ4Mw"],
    }),
    new ModuleNpc({
      id: "npc29",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.IRon2oG76IG28Z4m",
      page: 84,
      width: 655,
      height: 1101,
      tokenX: -186,
      tokenY: 11,
      tokenSize: 429,
      forIds: ["ODQ6MjgwOjU0Mw"],
    }),
    new ModuleNpc({
      id: "npc30",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.5G8Iokror8QtBhbx",
      page: 85,
      width: 703,
      height: 1123,
      tokenX: -184,
      tokenY: -38,
      tokenSize: 395,
      forIds: ["ODU6Njg6Mzk5", "MjA6MzI2OjY5OQ", "MjM6Mjk1OjM2Mw"],
    }),
    new ModuleNpc({
      id: "npc31",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.Z3VrS25uw9vD2sek",
      page: 86,
      width: 699,
      height: 1035,
      tokenX: -24,
      tokenY: 160,
      tokenSize: 895,
      forIds: ["ODY6MjUxOjU1NQ", "MzQ6OTk6MjU1"],
    }),
    new ModuleNpc({
      id: "npc32",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.4lJiW36oO2iG7jCB",
      page: 87,
      width: 915,
      height: 1154,
      tokenX: -402,
      tokenY: -112,
      tokenSize: 566,
      forIds: ["ODc6Njg6NjAz"],
    }),
    new ModuleNpc({
      id: "npc33",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.NgmbMRekIHiA44lg",
      page: 89,
      width: 824,
      height: 1285,
      tokenX: -158,
      tokenY: 4,
      tokenSize: 417,
      forIds: ["ODg6MzI2OjMyNw", "NjA6MzI2OjQxMQ"],
    }),
    new ModuleNpc({
      id: "npc34",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.bpTQfx4UixMV3Fja",
      page: 91,
      width: 919,
      height: 1289,
      tokenX: -394,
      tokenY: -66,
      tokenSize: 393,
      forIds: ["OTA6MzI2OjMxNQ", "MjM6Mjk1OjQxMQ"],
    }),
    new ModuleNpc({
      id: "npc35",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.RbrUXZyhqbsglVrr",
      page: 93,
      width: 774,
      height: 1062,
      tokenX: -228,
      tokenY: 55,
      tokenSize: 446,
      forIds: ["OTM6Njg6NjAz", "NDM6Mjk1OjI1NQ"],
    }),
    new ModuleNpc({
      id: "npc36",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.hSSe2FxlXKvjKsEw",
      label: "A",
      forIds: ["MjA6OTk6OTk"],
    }),
    new ModuleNpc({
      id: "npc37",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.iD3YlM0QzI2SrjD6",
      label: "AW",
      forIds: ["NDA6MzI2OjM3NQ"],
    }),
    new ModuleNpc({
      id: "npc38",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.zkl6planCbeCuAdS",
      name: {
        page: 59,
        x: 67.5,
        y: 651,
      },
      label: "S",
      forIds: ["NTk6Njg6NjUx"],
    }),
    new ModuleNpc({
      id: "npc39",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.8U8K0YEghIErml35",
      label: "CW",
      forIds: ["MzA6MzI2OjQzNQ"],
    }),
    new ModuleNpc({
      id: "npc40",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.V4LPaPABVm9YYqdH",
      label: "CGT",
      forIds: ["MTY6OTk6Njk5"],
    }),
    new ModuleNpc({
      id: "npc41",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.VQPzDz3xnCQGFOGL",
      label: "SH",
      forIds: ["MTI6MzgzOjQ0Nw"],
    }),
    new ModuleNpc({
      id: "npc42",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.yqH59ltUd0f3kLLL",
      label: "DBG",
      forIds: ["NDM6Mjk1OjIwNw", "NDI6MzI2OjU0Mw"],
    }),
    new ModuleNpc({
      id: "npc43",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.1a5faH5CCtFfbQHO",
      label: "C",
      forIds: ["MTE6Njg6MTQ3"],
    }),
    new ModuleNpc({
      id: "npc44",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.Iwk2qT4lVyrvoz3B",
      label: "G",
      forIds: ["NDg6OTk6Mzg3", "MTQ6MzI2OjI0Mw"],
    }),
    new ModuleNpc({
      id: "npc45",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.CknWKRO1xUHBL5Km",
      label: "HoS",
      forIds: ["Mjk6Mjk1OjU0Mw"],
    }),
    new ModuleNpc({
      id: "npc46",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.MLYkh9pZpjBI1wpN",
      label: "IDM",
      forIds: ["NTY6MzI2OjU1NQ"],
    }),
    new ModuleNpc({
      id: "npc47",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.FuvlS0DHfooobGiN",
      label: "I",
      forIds: ["MTY6MzI2OjQxMQ"],
    }),
    new ModuleNpc({
      id: "npc48",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.WoICHri7raCYv1wU",
      label: "LD",
      forIds: ["MzM6Njg6NDgz"],
    }),
    new ModuleNpc({
      id: "npc49",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.IGzoFGlVbkit8hnH",
      label: "M",
      forIds: ["NDg6OTk6Mjkx"],
    }),
    new ModuleNpc({
      id: "npc50",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.4h9jhODg2NwiYsPg",
      label: "PW",
      forIds: ["MTg6OTk6NDEx"],
    }),
    new ModuleNpc({
      id: "npc51",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.C0ZmzdUNtEdXdGcL",
      label: "S",
      forIds: ["MTk6Mjk1OjY1MQ"],
    }),
    new ModuleNpc({
      id: "npc52",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.llSpQyOTaylpqgnW",
      label: "W",
      forIds: ["MTc6Njg6MTcx"],
    }),
    new ModuleNpc({
      id: "npc53",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.jW55DX3sJU2uTNrM",
      label: "W",
      forIds: ["MTM6Mjk1OjY5OQ"],
    }),
    new ModuleNpc({
      id: "npc54",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.nJBpLZFgEuF7uZAZ",
      label: "WC",
      forIds: ["MzY6MzI2OjY5OQ"],
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
          id: "NzozNzE6Mzk5",
        },
        {
          id: "NjozMjY6MTk1",
        },
        {
          id: "Nzo2ODo0NzE",
        },
        {
          id: "Nzo2ODoyMDc",
        },
        {
          id: "ODo5OTo0OTU",
        },
        {
          id: "OToyOTU6MjU1",
        },
        {
          id: "MTA6OTk6Mzc1",
        },
        {
          id: "MTA6OTk6MjU1",
        },
        {
          id: "MTA6MzI2OjI3OQ",
        },
        {
          id: "MTE6Mzc4OjY5OQ",
        },
        {
          id: "MTI6MzI2OjY5OQ",
        },
        {
          id: "MTI6MzMwOjEyMw",
        },
        {
          id: "MTM6Njg6NjYz",
        },
        {
          id: "MTM6Njg6MzI3",
        },
        {
          id: "MTM6Mjk1OjU1NQ",
        },
        {
          id: "MTQ6MzI2OjQzNQ",
        },
        {
          id: "MTQ6MzI2OjExMQ",
        },
        {
          id: "MTU6Njg6NDgz",
        },
        {
          id: "MTU6Njg6MzAz",
        },
        {
          id: "MTY6OTk6MzUx",
        },
        {
          id: "MTY6MzI2OjI1NQ",
        },
        {
          id: "MTc6Mjk1OjMwMw",
        },
        {
          id: "MTg6OTk6Njk5",
        },
        {
          id: "MTg6OTk6MzYz",
        },
        {
          id: "MTg6MzI2Ojk5",
        },
        {
          id: "MTk6Njg6NDcx",
        },
        {
          id: "MjA6OTk6NTE5",
        },
        {
          id: "MjA6MzI2OjI5MQ",
        },
        {
          id: "MjE6Njg6NTQz",
        },
        {
          id: "MjI6MzI2OjQ4Mw",
        },
        {
          id: "MjM6Mjk1OjIzMQ",
        },
        {
          id: "MjQ6MzI2OjQ1OQ",
        },
        {
          id: "MTU6MzA0OjY4Nw",
        },
        {
          id: "MjA6MTA4OjY4Nw",
        },
      ],
    },
    {
      name: "Chapter 2",
      pages: [
        {
          id: "MjY6MzkwOjM2MQ",
        },
        {
          id: "Mjc6MzcxOjY5OQ",
        },
        {
          id: "Mjc6MzcxOjQ5NQ",
        },
        {
          id: "MjY6OTk6MTU5",
        },
        {
          id: "Mjc6Njg6MzM5",
        },
        {
          id: "Mjc6Njg6MjE5",
        },
        {
          id: "MzA6OTk6NTY3",
        },
        {
          id: "MzA6MzI2OjE1OQ",
        },
        {
          id: "MzI6OTk6MTgz",
        },
        {
          id: "MzI6MzI2OjQyMw",
        },
        {
          id: "MzI6MzI2OjI2Nw",
        },
        {
          id: "MzM6Njg6NDM1",
        },
        {
          id: "MzM6Mjk1OjEyMw",
        },
        {
          id: "MzQ6OTk6MTU5",
        },
        {
          id: "MzU6Njg6MjU1",
        },
        {
          id: "MzY6OTk6NTY3",
        },
        {
          id: "MzY6MzI2OjI1NQ",
        },
        {
          id: "Mzc6Njg6NjE1",
        },
        {
          id: "Mzg6MzI2OjYxNQ",
        },
        {
          id: "Mzk6Mjk1OjY5OQ",
        },
        {
          id: "NDA6OTk6MjU1",
        },
        {
          id: "NDA6MzI2OjMyNw",
        },
        {
          id: "NDI6OTk6NTE5",
        },
        {
          id: "NDI6OTk6NDEx",
        },
        {
          id: "NDI6OTk6MTIz",
        },
        {
          id: "NDI6MzI2OjMyNw",
        },
      ],
    },
    {
      name: "Chapter 3",
      pages: [
        {
          id: "NDQ6MzkwOjM2MQ",
        },
        {
          id: "NDU6MzcxOjY5OQ",
        },
        {
          id: "NDU6NDExOjQ4Mw",
        },
        {
          id: "NDU6Njg6NTE5",
        },
        {
          id: "NDY6OTk6MzE1",
        },
        {
          id: "NDc6Njg6Njk5",
        },
        {
          id: "NDc6Njg6NTY3",
        },
        {
          id: "NDc6Njg6MTk1",
        },
        {
          id: "NDc6Mjk1OjMzOQ",
        },
        {
          id: "NDg6OTk6Njk5",
        },
        {
          id: "NDg6OTk6MTQ3",
        },
        {
          id: "NDg6MzI2OjYwMw",
        },
        {
          id: "NDg6MzI2OjEyMw",
        },
        {
          id: "NDk6Mjk1OjM2Mw",
        },
        {
          id: "NTA6MzI2OjM4Nw",
        },
        {
          id: "NTI6MzI2OjI5MQ",
        },
        {
          id: "NTM6Njg6Njk5",
        },
        {
          id: "NTM6Njg6NDU5",
        },
        {
          id: "NTU6Njg6NjE1",
        },
        {
          id: "NTY6OTk6NDIz",
        },
        {
          id: "NTc6Njg6NTQz",
        },
        {
          id: "NTg6MzI2OjQ1OQ",
        },
        {
          id: "NTk6Njg6NjAz",
        },
        {
          id: "NTk6Mjk1OjY1MQ",
        },
        {
          id: "NjA6MzI2OjIxOQ",
        },
        {
          id: "NjE6Njg6NDEx",
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
      ],
    },
    {
      name: "Back Matter",
      pages: [
        {
          id: "NjM6MTkzOjY1NA",
        },
        {
          id: "NjM6Njg6MjY3",
        },
        {
          id: "NjM6Mjk1OjE3MQ",
        },
        {
          id: "NjU6Mjk1OjI2Nw",
        },
        {
          id: "NjY6OTk6Njk5",
        },
        {
          id: "NjY6MzI2OjM3NQ",
        },
        {
          id: "Njc6Njg6MzYz",
        },
        {
          id: "Njk6MTMyOjY1NA",
        },
        {
          id: "Njk6Mjk1OjU0Mw",
        },
        {
          id: "NzU6MTUwOjY1NA",
        },
        {
          id: "NzU6Njg6MTEx",
        },
        {
          id: "Nzc6Njc6Njk5",
        },
        {
          id: "Nzg6OTk6Njk5",
        },
        {
          id: "Nzk6Njg6Njk5",
        },
        {
          id: "ODA6MjUxOjY5OQ",
        },
        {
          id: "ODA6MjUxOjYwMw",
        },
        {
          id: "ODE6Njg6Njk5",
        },
        {
          id: "ODI6MjUxOjY5OQ",
        },
        {
          id: "ODM6Njg6Njk5",
        },
        {
          id: "ODQ6MjUxOjY5OQ",
        },
        {
          id: "ODQ6MjUxOjU5MQ",
        },
        {
          id: "ODQ6MjcyOjIzMQ",
        },
        {
          id: "ODU6Njg6NDQ3",
        },
        {
          id: "ODY6MjUxOjY5OQ",
        },
        {
          id: "ODc6Njg6Njk5",
        },
        {
          id: "ODg6MTU3OjY1OA",
        },
        {
          id: "ODg6OTk6OTk",
        },
        {
          id: "OTA6MTg2OjY3OQ",
        },
        {
          id: "OTA6MzI2OjQ4Mw",
        },
        {
          id: "OTI6MjE3OjY1OA",
        },
        {
          id: "OTI6MzI2OjEzNQ",
        },
        {
          id: "NDY6MTA4OjY4Nw",
        },
        {
          id: "NjU6MzA0OjY4Nw",
        },
        {
          id: "Nzk6MzcxOjY2Mw",
        },
        {
          id: "ODA6MTE5OjY2Mw",
        },
        {
          id: "ODE6MzcxOjY2Mw",
        },
        {
          id: "ODI6MTY3OjY2Mw",
        },
        {
          id: "ODM6MzcxOjY2Mw",
        },
        {
          id: "ODQ6MTAxOjY2Mw",
        },
        {
          id: "ODU6MzcxOjY2Mw",
        },
        {
          id: "ODY6MTczOjY2Mw",
        },
        {
          id: "ODc6MzcxOjY2Mw",
        },
      ],
    },
  ];
  combines = [];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "EXTINCTION CURSE: LORD OF THE BLACK SANDS" &&
        t.fontId === "Gin-Regular:12",
    );
  }
  finalize(moduleData) {}
}
