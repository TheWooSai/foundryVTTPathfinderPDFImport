import { ExtinctionCurseBase } from "./base.js";
import { AdventureImage, CaptionImage } from "../../core/images.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class ExtinctionCurse4 extends ExtinctionCurseBase {
  prefix = "extinction-curse4";
  fullName = "Extinction Curse - Siege of the Dinosaurs";
  pages = [
    this.ChapterHeadingPageLayout(6),
    this.RightSingleColumnWithSidebar(7),
    this.LeftTwoColumnWithMap(8, 340),
    this.RightTwoColumn(9),
    this.LeftTwoColumnWithLeftCutout(10, 320),
    this.RightTwoColumn(11),
    this.LeftTwoColumn(12),
    this.RightTwoColumn(13),
    this.LeftTwoColumn(14),
    this.RightTwoColumn(15),
    this.LeftTwoColumnWithMap(16, 340),
    this.RightTwoColumn(17),
    this.LeftTwoColumn(18),
    this.RightTwoColumn(19),
    this.LeftTwoColumn(20),
    this.RightTwoColumn(21),
    this.LeftTwoColumn(22),
    this.RightTwoColumn(23),
    this.LeftTwoColumn(24),
    this.RightTwoColumn(25),
    this.ChapterHeadingPageLayout(26),
    this.RightSingleColumnWithSidebar(27),
    this.LeftTwoColumn(28),
    this.RightTwoColumnWithRightCutout(29, 570),
    this.LeftTwoColumn(30),
    this.RightTwoColumn(31),
    this.RightTwoColumnWithRightCutout(33, 340),
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
    this.LeftTwoColumn(46),
    this.RightTwoColumn(47),
    this.LeftTwoColumn(48),
    this.RightTwoColumn(49),
    this.LeftTwoColumn(50),
    this.RightTwoColumn(51),
    this.LeftTwoColumn(52),
    this.RightTwoColumn(53),
    this.LeftTwoColumnWithMap(54, 340),
    this.RightTwoColumn(55),
    this.LeftTwoColumn(56),
    this.RightTwoColumn(57),
    this.LeftTwoColumn(58),
    this.RightTwoColumn(59),
    this.LeftTwoColumn(60),
    this.RightTwoColumn(61),
    this.RightChapterHeadingPageLayout(63),
    this.LeftTwoColumnWithMap(64, 340),
    this.RightTwoColumn(65),
    this.LeftTwoColumn(66),
    this.RightTwoColumn(67),
    this.RightChapterHeadingPageLayout(69),
    this.LeftTwoColumn(70),
    this.RightTwoColumn(71),
    this.LeftTwoColumn(72),
    this.RightTwoColumn(73),
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
      name: "map1a",
      canonical: {
        name: "ec4/map1a",
        priority: 0,
      },
      nameInfo: {
        x: 16,
        y: 758.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 8,
      width: 1259,
      height: 880,
      cropLeft: 0,
      cropRight: 650,
      cropTop: 0,
      cropBottom: 481,
      imageLeft: 7,
      imageRight: 629,
      imageCols: 26,
      imageTop: 2,
      imageBottom: 458,
      imageRows: 18,
      globalLight: true,
      detailsFile: "/ec/maps/ec4-map1a.json",
      journals: [],
    }),
    new ModuleScene({
      name: "map1b",
      canonical: {
        name: "ec4/map1b",
        priority: 0,
      },
      nameInfo: {
        x: 324,
        y: 758.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 8,
      width: 1259,
      height: 880,
      cropLeft: 656,
      cropRight: 1259,
      cropTop: 0,
      cropBottom: 880,
      imageLeft: 677,
      imageRight: 1252,
      imageCols: 24,
      imageTop: 2,
      imageBottom: 863,
      imageRows: 34,
      globalLight: true,
      detailsFile: "/ec/maps/ec4-map1b.json",
      journals: [
        {
          x: 750,
          y: 1050,
          id: "MTM6Mjk1OjY5OQ",
        },
      ],
      tokens: [
        {
          id: "npc3",
          x: 2200,
          y: 1800,
        },
        {
          id: "npc3",
          x: 2400,
          y: 1800,
        },
        {
          id: "npc3",
          x: 1300,
          y: 1400,
        },
        {
          id: "npc3",
          x: 1900,
          y: 1500,
        },
        {
          id: "npc54",
          x: 2400,
          y: 1700,
        },
        {
          id: "npc54",
          x: 1700,
          y: 1400,
        },
        {
          id: "npc54",
          x: 1300,
          y: 1300,
        },
        {
          id: "npc54",
          x: 2e3,
          y: 1700,
        },
      ],
    }),
    new ModuleScene({
      name: "map1c",
      canonical: {
        name: "ec4/map1c",
        priority: 0,
      },
      nameInfo: {
        x: 16,
        y: 534.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 8,
      width: 1259,
      height: 880,
      cropLeft: 0,
      cropRight: 650,
      cropTop: 486,
      cropBottom: 880,
      imageLeft: 7,
      imageRight: 629,
      imageCols: 26,
      imageTop: 508,
      imageBottom: 863,
      imageRows: 14,
      globalLight: true,
      detailsFile: "/ec/maps/ec4-map1c.json",
      journals: [],
    }),
    new ModuleScene({
      name: "map2",
      canonical: {
        name: "ec4/map2",
        priority: 0,
      },
      nameInfo: {
        x: 16,
        y: 758.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 16,
      width: 1259,
      height: 880,
      imageLeft: 16,
      imageRight: 1248,
      imageCols: 50,
      imageTop: 4,
      imageBottom: 868,
      imageRows: 33,
      globalLight: true,
      detailsFile: "/ec/maps/ec4-map2.json",
      journals: [
        {
          x: 3350,
          y: 3850,
          id: "MTc6Njg6MzUx",
        },
        {
          x: 1650,
          y: 3550,
          id: "MTc6Mjk1OjQ3MQ",
        },
        {
          x: 3300,
          y: 3200,
          id: "MTg6MzM2OjIxOQ",
        },
        {
          x: 2550,
          y: 2850,
          id: "MTk6Njg6MTIz",
        },
        {
          x: 2550,
          y: 2550,
          id: "MTk6Njg6MTIz",
        },
        {
          x: 2550,
          y: 2150,
          id: "MTk6Njg6MTIz",
        },
        {
          x: 2550,
          y: 1850,
          id: "MTk6Njg6MTIz",
        },
        {
          x: 2050,
          y: 2350,
          id: "MjA6OTk6MzI3",
        },
        {
          x: 3200,
          y: 2500,
          id: "MjA6MzI2OjMxNQ",
        },
        {
          x: 3600,
          y: 1700,
          id: "MjI6OTk6NjUx",
        },
        {
          x: 3200,
          y: 1700,
          id: "MjI6OTk6NTc5",
        },
        {
          x: 3800,
          y: 2900,
          id: "MjI6OTk6NDU5",
        },
        {
          x: 4e3,
          y: 2900,
          id: "MjI6OTk6NDU5",
        },
        {
          x: 3900,
          y: 2400,
          id: "MjI6OTk6Mzc1",
        },
        {
          x: 2850,
          y: 1250,
          id: "MjI6OTk6MTk1",
        },
        {
          x: 3400,
          y: 1100,
          id: "MjI6OTk6MTk1",
        },
        {
          x: 3950,
          y: 1050,
          id: "MjI6OTk6MTk1",
        },
        {
          x: 4400,
          y: 1300,
          id: "MjI6OTk6MTk1",
        },
        {
          x: 4750,
          y: 1650,
          id: "MjI6OTk6MTk1",
        },
        {
          x: 3650,
          y: 1550,
          id: "MjI6MzI2OjUxOQ",
        },
        {
          x: 5500,
          y: 2600,
          id: "MjI6MzI2OjM5OQ",
        },
        {
          x: 5500,
          y: 3100,
          id: "MjM6Njg6NDgz",
        },
        {
          x: 5400,
          y: 3550,
          id: "MjM6Njg6MzUx",
        },
        {
          x: 1350,
          y: 1050,
          id: "MTY6OTk6MjA3",
        },
      ],
      tokens: [
        {
          id: "npc4",
          x: 3500,
          y: 3700,
        },
        {
          id: "npc4",
          x: 3300,
          y: 3700,
        },
        {
          id: "npc4",
          x: 3200,
          y: 3800,
        },
        {
          id: "npc4",
          x: 3100,
          y: 3900,
        },
        {
          id: "npc4",
          x: 3200,
          y: 3900,
        },
        {
          id: "npc4",
          x: 3300,
          y: 3900,
        },
        {
          id: "npc4",
          x: 3400,
          y: 3800,
        },
        {
          id: "npc4",
          x: 3500,
          y: 3800,
        },
        {
          id: "npc5",
          x: 2e3,
          y: 3800,
        },
        {
          id: "npc42",
          x: 2100,
          y: 2200,
        },
        {
          id: "npc44",
          x: 1800,
          y: 2200,
        },
        {
          id: "npc44",
          x: 2100,
          y: 2400,
        },
        {
          id: "npc6",
          x: 2400,
          y: 1900,
        },
        {
          id: "npc6",
          x: 2500,
          y: 2200,
        },
        {
          id: "npc6",
          x: 2500,
          y: 2400,
        },
        {
          id: "npc6",
          x: 2400,
          y: 2700,
        },
        {
          id: "npc7",
          x: 3e3,
          y: 2400,
        },
        {
          id: "npc7",
          x: 3200,
          y: 2400,
        },
        {
          id: "npc37",
          x: 5500,
          y: 3500,
        },
        {
          id: "npc6",
          x: 5400,
          y: 2800,
        },
        {
          id: "npc6",
          x: 5500,
          y: 2400,
        },
        {
          id: "npc39",
          x: 5600,
          y: 2500,
        },
      ],
    }),
    new ModuleScene({
      name: "map3",
      canonical: {
        name: "ec4/map3",
        priority: 0,
      },
      nameInfo: {
        x: 16,
        y: 760.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 32,
      width: 1261,
      height: 1637,
      imageLeft: 22,
      imageRight: 1194,
      imageCols: 39,
      imageTop: 50,
      imageBottom: 1553,
      imageRows: 50,
      globalLight: true,
      detailsFile: "/ec/maps/ec4-map3.json",
      journals: [
        {
          x: 4900,
          y: 6300,
          id: "MzE6Njg6MjY3",
        },
        {
          x: 4400,
          y: 6300,
          id: "MzE6Njg6MTEx",
        },
        {
          x: 4700,
          y: 5950,
          id: "MzM6Njg6MzE1",
        },
        {
          x: 2800,
          y: 5950,
          id: "MzM6Mjk1OjMzOQ",
        },
        {
          x: 1900,
          y: 5500,
          id: "MzQ6OTk6Njk5",
        },
        {
          x: 3800,
          y: 5400,
          id: "MzQ6MzI2OjY5OQ",
        },
        {
          x: 3300,
          y: 4400,
          id: "MzU6Njg6NDgz",
        },
        {
          x: 2350,
          y: 4150,
          id: "MzU6Njg6MTQ3",
        },
        {
          x: 1550,
          y: 3750,
          id: "MzY6MzI2Ojk5",
        },
        {
          x: 4200,
          y: 3700,
          id: "Mzc6Njg6MzE1",
        },
        {
          x: 2e3,
          y: 3200,
          id: "Mzc6Mjk1OjIwNw",
        },
        {
          x: 2e3,
          y: 1900,
          id: "Mzg6MzI2OjQ3MQ",
        },
        {
          x: 3150,
          y: 1950,
          id: "Mzg6MzI2OjExMQ",
        },
        {
          x: 4200,
          y: 2200,
          id: "NDI6OTk6Mjc5",
        },
        {
          x: 1150,
          y: 1450,
          id: "MzA6MzI2OjE0Nw",
        },
      ],
      tokens: [
        {
          id: "npc45",
          x: 2e3,
          y: 5e3,
        },
        {
          id: "npc45",
          x: 1300,
          y: 5600,
        },
        {
          id: "npc29",
          x: 4600,
          y: 6300,
        },
        {
          id: "npc29",
          x: 4600,
          y: 6200,
        },
        {
          id: "npc29",
          x: 4600,
          y: 6400,
        },
        {
          id: "npc29",
          x: 4600,
          y: 6500,
        },
        {
          id: "npc11",
          x: 4400,
          y: 5e3,
        },
        {
          id: "npc11",
          x: 4400,
          y: 5100,
        },
        {
          id: "npc11",
          x: 4400,
          y: 5200,
        },
        {
          id: "npc11",
          x: 4400,
          y: 5300,
        },
        {
          id: "npc11",
          x: 4400,
          y: 5400,
        },
        {
          id: "npc48",
          x: 4200,
          y: 3600,
        },
        {
          id: "npc12",
          x: 2200,
          y: 4100,
        },
        {
          id: "npc12",
          x: 2300,
          y: 4400,
        },
        {
          id: "npc51",
          x: 1700,
          y: 3700,
        },
        {
          id: "npc51",
          x: 1500,
          y: 3500,
        },
        {
          id: "npc51",
          x: 1300,
          y: 3900,
        },
        {
          id: "npc49",
          x: 2400,
          y: 2400,
        },
        {
          id: "npc35",
          x: 1600,
          y: 2600,
        },
        {
          id: "npc50",
          x: 1900,
          y: 1600,
        },
        {
          id: "npc33",
          x: 3400,
          y: 1900,
        },
        {
          id: "npc13",
          x: 3400,
          y: 2e3,
        },
        {
          id: "npc14",
          x: 3300,
          y: 2100,
        },
        {
          id: "npc15",
          x: 4300,
          y: 2100,
        },
        {
          id: "npc12",
          x: 4300,
          y: 2300,
        },
        {
          id: "npc12",
          x: 4e3,
          y: 2500,
        },
        {
          id: "npc12",
          x: 4e3,
          y: 2300,
        },
      ],
    }),
    new ModuleScene({
      name: "map4",
      canonical: {
        name: "ec4/map4",
        priority: 0,
      },
      nameInfo: {
        x: 299,
        y: 694.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 47,
      width: 441,
      height: 303,
      imageLeft: 6,
      imageRight: 423,
      imageCols: 21 * 2,
      imageTop: 3,
      imageBottom: 280,
      imageRows: 14 * 2,
      globalLight: true,
      detailsFile: "/ec/maps/ec4-map4.json",
      journals: [
        {
          x: 1250,
          y: 850,
          id: "NDc6Njg6MjQz",
        },
      ],
      tokens: [
        {
          id: "npc8",
          x: 3e3,
          y: 2300,
        },
        {
          id: "npc8",
          x: 3e3,
          y: 2400,
        },
        {
          id: "npc8",
          x: 2300,
          y: 3100,
        },
        {
          id: "npc8",
          x: 2700,
          y: 2800,
        },
        {
          id: "npc8",
          x: 2600,
          y: 2700,
        },
        {
          id: "npc8",
          x: 2300,
          y: 3200,
        },
        {
          id: "npc36",
          x: 2200,
          y: 3e3,
        },
        {
          id: "npc36",
          x: 2600,
          y: 2600,
        },
        {
          id: "npc36",
          x: 3e3,
          y: 2200,
        },
      ],
    }),
    new ModuleScene({
      name: "map5",
      canonical: {
        name: "ec4/map5",
        priority: 0,
      },
      nameInfo: {
        x: 104,
        y: 694.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 48,
      width: 438,
      height: 305,
      imageLeft: 20,
      imageRight: 413,
      imageCols: 17 * 2,
      imageTop: 25,
      imageBottom: 279,
      imageRows: 11 * 2,
      globalLight: true,
      detailsFile: "/ec/maps/ec4-map5.json",
      journals: [
        {
          x: 1050,
          y: 850,
          id: "NDc6Mjk1OjMzOQ",
        },
      ],
      tokens: [
        {
          id: "npc52",
          x: 3700,
          y: 2200,
        },
        {
          id: "npc52",
          x: 4e3,
          y: 2e3,
        },
        {
          id: "npc52",
          x: 3900,
          y: 2400,
        },
        {
          id: "npc8",
          x: 2e3,
          y: 2800,
        },
        {
          id: "npc8",
          x: 1400,
          y: 2300,
        },
        {
          id: "npc8",
          x: 1700,
          y: 2600,
        },
        {
          id: "npc16",
          x: 1600,
          y: 2500,
        },
        {
          id: "npc16",
          x: 1400,
          y: 2200,
        },
        {
          id: "npc16",
          x: 1900,
          y: 2700,
        },
      ],
    }),
    new ModuleScene({
      name: "map6",
      canonical: {
        name: "ec4/map6",
        priority: 0,
      },
      nameInfo: {
        x: 333.5,
        y: 693.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 50,
      width: 441,
      height: 653,
      imageLeft: 4,
      imageRight: 421,
      imageCols: 18 * 2,
      imageTop: 4,
      imageBottom: 628,
      imageRows: 27 * 2,
      globalLight: true,
      detailsFile: "/ec/maps/ec4-map6.json",
      journals: [
        {
          x: 1050,
          y: 1650,
          id: "NTA6OTk6MTcx",
        },
      ],
      tokens: [
        {
          id: "npc8",
          x: 1900,
          y: 4900,
        },
        {
          id: "npc16",
          x: 1800,
          y: 4900,
        },
        {
          id: "npc16",
          x: 2200,
          y: 5100,
        },
        {
          id: "npc8",
          x: 2300,
          y: 5100,
        },
        {
          id: "npc55",
          x: 3e3,
          y: 4800,
        },
        {
          id: "npc55",
          x: 3400,
          y: 5400,
        },
        {
          id: "npc55",
          x: 3100,
          y: 5800,
        },
        {
          id: "npc55",
          x: 3500,
          y: 6300,
        },
        {
          id: "npc55",
          x: 2700,
          y: 5400,
        },
      ],
    }),
    new ModuleScene({
      name: "map7",
      canonical: {
        name: "ec4/map7",
        priority: 0,
      },
      nameInfo: {
        x: 332.5,
        y: 693.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 52,
      width: 439,
      height: 730,
      imageLeft: 24,
      imageRight: 413,
      imageCols: 14 * 2,
      imageTop: 28,
      imageBottom: 720,
      imageRows: 25 * 2,
      globalLight: true,
      detailsFile: "/ec/maps/ec4-map7.json",
      journals: [
        {
          x: 850,
          y: 1550,
          id: "NTE6Njg6ODc",
        },
      ],
      tokens: [
        {
          id: "npc24",
          x: 1700,
          y: 5300,
        },
        {
          id: "npc30",
          x: 2900,
          y: 4900,
        },
        {
          id: "npc24",
          x: 2200,
          y: 5300,
        },
        {
          id: "npc30",
          x: 2700,
          y: 5e3,
        },
        {
          id: "npc17",
          x: 2e3,
          y: 5400,
        },
      ],
    }),
    new ModuleScene({
      name: "map8",
      canonical: {
        name: "ec4/map8",
        priority: 0,
      },
      nameInfo: {
        x: 300,
        y: 694.6681,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 53,
      width: 441,
      height: 730,
      imageLeft: 38,
      imageRight: 404,
      imageCols: 11 * 2,
      imageTop: 32,
      imageBottom: 699,
      imageRows: 20 * 2,
      globalLight: true,
      detailsFile: "/ec/maps/ec4-map8.json",
      journals: [
        {
          x: 800,
          y: 1100,
          id: "NTI6MzI2OjI0Mw",
        },
      ],
      tokens: [
        {
          id: "npc46",
          x: 2e3,
          y: 2900,
        },
        {
          id: "npc46",
          x: 1600,
          y: 3100,
        },
        {
          id: "npc46",
          x: 1800,
          y: 2900,
        },
        {
          id: "npc46",
          x: 2200,
          y: 3e3,
        },
        {
          id: "npc46",
          x: 1700,
          y: 3400,
        },
        {
          id: "npc46",
          x: 1900,
          y: 3500,
        },
        {
          id: "npc46",
          x: 2100,
          y: 3400,
        },
        {
          id: "npc46",
          x: 2200,
          y: 3200,
        },
        {
          id: "npc47",
          x: 2700,
          y: 4e3,
        },
        {
          id: "npc47",
          x: 1800,
          y: 4400,
        },
        {
          id: "npc47",
          x: 1400,
          y: 4e3,
        },
        {
          id: "npc47",
          x: 800,
          y: 3100,
        },
        {
          id: "npc47",
          x: 1e3,
          y: 2500,
        },
        {
          id: "npc47",
          x: 1400,
          y: 2100,
        },
        {
          id: "npc47",
          x: 1e3,
          y: 3600,
        },
        {
          id: "npc47",
          x: 1900,
          y: 1900,
        },
        {
          id: "npc47",
          x: 2500,
          y: 2100,
        },
        {
          id: "npc47",
          x: 2900,
          y: 3100,
        },
        {
          id: "npc47",
          x: 2900,
          y: 3700,
        },
        {
          id: "npc47",
          x: 2300,
          y: 4400,
        },
        {
          id: "npc47",
          x: 2900,
          y: 2500,
        },
      ],
    }),
    new ModuleScene({
      name: "map9",
      canonical: {
        name: "ec4/map9",
        priority: 0,
      },
      nameInfo: {
        x: 16,
        y: 758.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 54,
      width: 1259,
      height: 880,
      imageLeft: 12,
      imageRight: 1241,
      imageCols: 41,
      imageTop: 12,
      imageBottom: 872,
      imageRows: 27,
      globalLight: true,
      detailsFile: "/ec/maps/ec4-map9.json",
      journals: [
        {
          x: 1500,
          y: 2900,
          id: "NTU6Njg6NjI3",
        },
        {
          x: 2500,
          y: 2e3,
          id: "NTU6Mjk1OjI2Nw",
        },
        {
          x: 3550,
          y: 2050,
          id: "NTc6Njg6NTMx",
        },
        {
          x: 4750,
          y: 1250,
          id: "NTc6Njg6MTU5",
        },
        {
          x: 4650,
          y: 2650,
          id: "NTg6MzI2Ojg3",
        },
      ],
      tokens: [
        {
          id: "npc30",
          x: 1600,
          y: 2500,
        },
        {
          id: "npc18",
          x: 1700,
          y: 2700,
        },
        {
          id: "npc18",
          x: 1700,
          y: 3e3,
        },
        {
          id: "npc18",
          x: 1300,
          y: 2600,
        },
        {
          id: "npc34",
          x: 2800,
          y: 1900,
        },
        {
          id: "npc18",
          x: 2600,
          y: 2100,
        },
        {
          id: "npc18",
          x: 2800,
          y: 2100,
        },
        {
          id: "npc18",
          x: 3700,
          y: 1900,
        },
        {
          id: "npc18",
          x: 3400,
          y: 1800,
        },
        {
          id: "npc18",
          x: 3400,
          y: 2100,
        },
        {
          id: "npc18",
          x: 3700,
          y: 2200,
        },
        {
          id: "npc32",
          x: 4500,
          y: 1300,
        },
        {
          id: "npc19",
          x: 4800,
          y: 1300,
        },
      ],
    }),
    new ModuleScene({
      name: "map10",
      canonical: {
        name: "ec4/map10",
        priority: 0,
      },
      nameInfo: {
        x: 74,
        y: 693.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 61,
      width: 440,
      height: 730,
      imageLeft: 32,
      imageRight: 419,
      imageCols: 13,
      imageTop: 28,
      imageBottom: 710,
      imageRows: 23,
      globalLight: true,
      detailsFile: "/ec/maps/ec4-map10.json",
      journals: [
        {
          x: 450,
          y: 750,
          id: "NjE6Mjk1OjY5OQ",
        },
      ],
      tokens: [
        {
          id: "npc34",
          x: 900,
          y: 2400,
        },
        {
          id: "npc28",
          x: 1e3,
          y: 2400,
        },
      ],
    }),
    new ModuleScene({
      name: "map11",
      canonical: {
        name: "ec4/map11",
        priority: 0,
      },
      nameInfo: {
        x: 16,
        y: 758.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 64,
      width: 1259,
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
      width: 1261,
      height: 1637,
    }),
    new AdventureImage({
      name: "journal8",
      page: 6,
      width: 1259,
      height: 805,
    }),
    new AdventureImage({
      name: "journal9",
      page: 26,
      width: 1259,
      height: 805,
    }),
    new AdventureImage({
      name: "journal10",
      page: 44,
      width: 1261,
      height: 805,
    }),
    new CaptionImage({
      name: "journal11",
      page: 59,
      width: 793,
      height: 1073,
    }),
    new AdventureImage({
      name: "journal12",
      page: 62,
      width: 1261,
      height: 1637,
    }),
    new AdventureImage({
      name: "journal13",
      page: 68,
      width: 1261,
      height: 1637,
    }),
    new AdventureImage({
      name: "journal14",
      page: 70,
      width: 935,
      height: 978,
    }),
    new AdventureImage({
      name: "journal15",
      page: 73,
      width: 909,
      height: 645,
    }),
    new AdventureImage({
      name: "journal16",
      page: 74,
      width: 1261,
      height: 1636,
    }),
    new CaptionImage({
      name: "journal17",
      page: 34,
      width: 482,
      height: 482,
    }),
    new CaptionImage({
      name: "journal18",
      page: 39,
      width: 851,
      height: 913,
    }),
    new CaptionImage({
      name: "journal19",
      page: 75,
      width: 865,
      height: 1028,
    }),
    new CaptionImage({
      name: "journal20",
      page: 76,
      width: 961,
      height: 1255,
    }),
    new CaptionImage({
      name: "journal21",
      page: 77,
      width: 500,
      height: 501,
    }),
    new CaptionImage({
      name: "journal22",
      page: 78,
      width: 382,
      height: 472,
    }),
    new CaptionImage({
      name: "journal23",
      page: 78,
      width: 521,
      height: 521,
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 9,
        x: 239.119,
        y: 416.636,
      },
      page: 9,
      width: 564,
      height: 543,
      tokenX: 58,
      tokenY: 95,
      tokenSize: 676,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 11,
        x: 242.4855,
        y: 416.636,
      },
      page: 11,
      width: 578,
      height: 577,
      tokenX: 67,
      tokenY: 111,
      tokenSize: 690,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.I6i1uvFI7VCTyVbM",
      page: 13,
      width: 941,
      height: 1201,
      tokenX: -242,
      tokenY: -197,
      tokenSize: 557,
      forIds: ["MjU6Njg6MTQ3", "MTI6MzI2OjQxMQ", "MTQ6OTk6NDU5"],
    }),
    new ModuleNpc({
      id: "npc4",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.C07vwQbz6mKwLRGY",
      page: 17,
      width: 917,
      height: 661,
      tokenX: -53,
      tokenY: 155,
      tokenSize: 749,
      forIds: ["ODA6MjUxOjU5MQ", "MTc6Mjk1OjYzOQ"],
    }),
    new ModuleNpc({
      id: "npc5",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.HHy2GazURA6Cx1ee",
      page: 18,
      width: 894,
      height: 1259,
      tokenX: -278,
      tokenY: -6,
      tokenSize: 391,
      forIds: ["MTg6OTk6NjUx"],
    }),
    new ModuleNpc({
      id: "npc6",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.4eQVYZ7sH7O8mw3R",
      page: 19,
      width: 602,
      height: 1080,
      tokenX: -54,
      tokenY: 99,
      tokenSize: 604,
      forIds: [
        "ODA6MjUxOjM2Mw",
        "MjM6Njg6NjYz",
        "MTk6Njg6MjU1",
        "MjA6OTk6NDM1",
      ],
    }),
    new ModuleNpc({
      id: "npc7",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.igd75rbnUbYBNyYw",
      page: 21,
      width: 895,
      height: 1140,
      tokenX: 36,
      tokenY: -69,
      tokenSize: 972,
      forIds: ["ODE6Njg6NTU1", "MjE6Njg6NTU1"],
    }),
    new ModuleNpc({
      id: "npc8",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.SBz0ylPxEaUhG2aZ",
      page: 25,
      width: 825,
      height: 1586,
      tokenX: -251,
      tokenY: -498,
      tokenSize: 438,
      forIds: [
        "MjU6Njg6NjAz",
        "NDY6MzI2OjI2Nw",
        "NTE6Njg6NjYz",
        "NDc6Njg6NTc5",
        "NDg6OTk6MzE1",
        "NDc6Mjk1OjQ4Mw",
      ],
    }),
    new ModuleNpc({
      id: "npc9",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 30,
        x: 284.7147,
        y: 428.3744,
      },
      page: 30,
      width: 436,
      height: 616,
      tokenX: 147,
      tokenY: 130,
      tokenSize: 728,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc10",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 31,
        x: 235.5518,
        y: 429.3007,
      },
      page: 31,
      width: 453,
      height: 594,
      tokenX: 162,
      tokenY: 157,
      tokenSize: 762,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc11",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.f4H9d0b1vJvxeFqs",
      page: 35,
      width: 759,
      height: 1075,
      tokenX: -120,
      tokenY: 70,
      tokenSize: 403,
      forIds: ["MzQ6MzI2OjI1NQ"],
    }),
    new ModuleNpc({
      id: "npc12",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.wOzDhkm9sd7IygoS",
      page: 36,
      width: 960,
      height: 1244,
      tokenX: -247,
      tokenY: 7,
      tokenSize: 460,
      forIds: ["MzY6MzI2OjY5OQ", "NDM6Njg6NjYz"],
    }),
    new ModuleNpc({
      id: "npc13",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.tPvr9zvUfktMIvYU",
      page: 40,
      width: 892,
      height: 1190,
      tokenX: -259,
      tokenY: 5,
      tokenSize: 350,
      forIds: ["NDE6Njg6NTc5"],
    }),
    new ModuleNpc({
      id: "npc14",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.j31HXlZiUqQrAHSB",
      page: 41,
      width: 773,
      height: 986,
      tokenX: -63,
      tokenY: 70,
      tokenSize: 398,
      forIds: ["NDE6Mjk1OjY5OQ"],
    }),
    new ModuleNpc({
      id: "npc15",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.wBlnbLj8FfgxArQm",
      page: 43,
      width: 868,
      height: 1119,
      tokenX: -221,
      tokenY: 110,
      tokenSize: 447,
      forIds: ["NDI6MzI2OjUxOQ"],
    }),
    new ModuleNpc({
      id: "npc16",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.2XRzA5GZeDk88Y2z",
      page: 49,
      width: 924,
      height: 920,
      tokenX: -194,
      tokenY: -122,
      tokenSize: 756,
      forIds: ["NTE6Njg6NjE1", "NDg6OTk6MjY3"],
    }),
    new ModuleNpc({
      id: "npc17",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.2PxSX2cqEbSFjj3D",
      page: 52,
      width: 824,
      height: 678,
      tokenX: 0,
      tokenY: 73,
      tokenSize: 824,
      forIds: ["NTI6OTk6NjUx"],
    }),
    new ModuleNpc({
      id: "npc18",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.tg5SrKu228LZkoC0",
      page: 56,
      width: 880,
      height: 1285,
      tokenX: -229,
      tokenY: 6,
      tokenSize: 473,
      forIds: ["NTY6Mzg1OjE5NQ", "NTU6Njg6MjE5", "NTc6Njg6Mjkx"],
    }),
    new ModuleNpc({
      id: "npc19",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.otSfn7djr37Bdejj",
      page: 58,
      width: 801,
      height: 1236,
      tokenX: -322,
      tokenY: -97,
      tokenSize: 592,
      forIds: ["NTc6Mjk1OjI0Mw"],
    }),
    new ModuleNpc({
      id: "npc20",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 60,
        x: 311.6334,
        y: 399.9314,
      },
      page: 60,
      width: 453,
      height: 590,
      tokenX: 116,
      tokenY: 103,
      tokenSize: 730,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc21",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 65,
        x: 231.6354,
        y: 128.6359,
      },
      page: 65,
      width: 566,
      height: 714,
      tokenX: 59,
      tokenY: 30,
      tokenSize: 658,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc22",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 66,
        x: 264.8005,
        y: 437.5905,
      },
      page: 66,
      width: 447,
      height: 548,
      tokenX: 82,
      tokenY: 106,
      tokenSize: 632,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc23",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 67,
        x: 234.5782,
        y: 428.636,
      },
      page: 67,
      width: 443,
      height: 589,
      tokenX: 92,
      tokenY: 67,
      tokenSize: 589,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc24",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.aUDIi3Z0N7IhzaT0",
      page: 79,
      width: 913,
      height: 831,
      tokenX: 0,
      tokenY: 41,
      tokenSize: 913,
      forIds: ["Nzk6Njg6NTc5", "NTE6Mjk1Ojk5"],
    }),
    new ModuleNpc({
      id: "npc25",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.igd75rbnUbYBNyYw",
      page: 81,
      width: 955,
      height: 772,
      tokenX: 63,
      tokenY: 192,
      tokenSize: 1039,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc26",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.sQvm52N0E5ulBaaq",
      page: 82,
      width: 725,
      height: 1065,
      tokenX: -83,
      tokenY: 240,
      tokenSize: 645,
      forIds: ["ODI6MjUxOjU5MQ"],
    }),
    new ModuleNpc({
      id: "npc27",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.IVpSJcoRLGgUfqW7",
      page: 83,
      width: 713,
      height: 1049,
      tokenX: 187,
      tokenY: 82,
      tokenSize: 1049,
      forIds: ["ODM6Njg6NjAz"],
    }),
    new ModuleNpc({
      id: "npc28",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.iUA3E379TDoEAXz7",
      page: 84,
      width: 751,
      height: 1294,
      tokenX: -63,
      tokenY: -489,
      tokenSize: 734,
      forIds: ["ODQ6MjUyOjU0Mw", "NjE6Mjk1OjM3NQ"],
    }),
    new ModuleNpc({
      id: "npc29",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.BORxkpaFBSCyB1f1",
      page: 85,
      width: 907,
      height: 711,
      tokenX: -57,
      tokenY: 167,
      tokenSize: 879,
      forIds: ["ODU6Njg6NTQz", "MzE6Mjk1OjMwMw"],
    }),
    new ModuleNpc({
      id: "npc30",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.NITxPebTwserqASe",
      page: 86,
      width: 882,
      height: 1169,
      tokenX: -398,
      tokenY: -176,
      tokenSize: 581,
      forIds: ["ODY6MjUxOjYzOQ", "NTU6Njg6MjY3", "NTI6OTk6Njk5"],
    }),
    new ModuleNpc({
      id: "npc31",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.FZqrluaaz5vhXEZ9",
      page: 87,
      width: 901,
      height: 1088,
      tokenX: -224,
      tokenY: -5,
      tokenSize: 668,
      forIds: ["ODc6Njg6NTE5", "NDY6MzI2OjE3MQ"],
    }),
    new ModuleNpc({
      id: "npc32",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.QFScy7QFB7PIeTEa",
      page: 89,
      width: 776,
      height: 1186,
      tokenX: -14,
      tokenY: 152,
      tokenSize: 850,
      forIds: ["ODk6Njg6NjE1", "NTc6Mjk1OjI5MQ"],
    }),
    new ModuleNpc({
      id: "npc33",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.lh3pcyJlUUtNpWcI",
      page: 91,
      width: 778,
      height: 1214,
      tokenX: -213,
      tokenY: 2,
      tokenSize: 402,
      forIds: ["OTE6Njg6NTU1", "NDA6Mzg0Ojg3"],
    }),
    new ModuleNpc({
      id: "npc34",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.OqThOmNrdW3HVa7k",
      page: 93,
      width: 978,
      height: 1315,
      tokenX: -330,
      tokenY: -352,
      tokenSize: 419,
      forIds: ["NjE6Mjk1OjQ0Nw", "OTI6MzI2OjEzNQ", "NTY6MzU2OjI0Mw"],
    }),
    new ModuleNpc({
      id: "npc35",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.iD3YlM0QzI2SrjD6",
      label: "AW",
      forIds: ["Mzg6MzI2OjU2Nw"],
    }),
    new ModuleNpc({
      id: "npc36",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.wy8Ve0m3wbHMo1U1",
      label: "B",
      forIds: ["NDc6Mjk1OjQzNQ"],
    }),
    new ModuleNpc({
      id: "npc37",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.G2i7CUiYmyl1yjQo",
      label: "BLR",
      forIds: ["MjM6Njg6MTU5"],
    }),
    new ModuleNpc({
      id: "npc38",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.tpNP1UooPPHMyZye",
      name: {
        page: 47,
        x: 67.5,
        y: 531,
        substring: {
          start: 0,
          end: 13,
        },
      },
      label: "T",
      forIds: ["NDc6Njg6NTMx"],
      weak: true,
    }),
    new ModuleNpc({
      id: "npc39",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.1a5faH5CCtFfbQHO",
      label: "C",
      forIds: ["MjM6Njg6NjE1"],
    }),
    new ModuleNpc({
      id: "npc40",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.a4LgD3NrgkiINvru",
      label: "Q",
      forIds: ["MTM6Njg6NDgz"],
    }),
    new ModuleNpc({
      id: "npc41",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.PUPnGG406PanzIvL",
      label: "SS",
      forIds: ["NTA6OTk6NTkx"],
    }),
    new ModuleNpc({
      id: "npc42",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.Z5E6UrUkiVW2UQRO",
      label: "EFT",
      forIds: ["MjA6OTk6MTU5"],
    }),
    new ModuleNpc({
      id: "npc43",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.ka7bXO7HIfBxk8Gy",
      label: "GF",
      forIds: ["OToyOTU6MTcx"],
    }),
    new ModuleNpc({
      id: "npc44",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.pH2yNe16EnoJ8R0i",
      label: "G",
      forIds: ["MjA6MzI2OjQxMQ"],
    }),
    new ModuleNpc({
      id: "npc45",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.702acAJ1OPRBjcni",
      label: "G",
      forIds: ["MzQ6OTk6OTk"],
    }),
    new ModuleNpc({
      id: "npc46",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.QLyDRZPvMsYGZEeN",
      label: "G",
      forIds: ["NTM6Njg6MTQ3"],
    }),
    new ModuleNpc({
      id: "npc47",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.LHHgGSs0ELCR4CYK",
      label: "G",
      forIds: ["NTM6Njg6OTk"],
    }),
    new ModuleNpc({
      id: "npc48",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.1CjTIaMYUvQUkQI2",
      label: "MSR",
      forIds: ["Mzc6Mjk1OjUzMQ"],
    }),
    new ModuleNpc({
      id: "npc49",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.b7ADAguVQLHCauWO",
      label: "PSDT",
      forIds: ["Mzg6OTk6NDIz"],
    }),
    new ModuleNpc({
      id: "npc50",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.x26dyZZZRvZpzK2X",
      label: "Q",
      forIds: ["Mzg6MzI2OjIzMQ"],
    }),
    new ModuleNpc({
      id: "npc51",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.ePJcp2ADOjJYYQ5Q",
      label: "SC",
      forIds: ["Mzc6Njg6MzYz"],
    }),
    new ModuleNpc({
      id: "npc52",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.RVPH12vtOWMuJx0L",
      label: "SBT",
      forIds: ["NDc6Mjk1OjE0Nw"],
    }),
    new ModuleNpc({
      id: "npc53",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.oJJspO9P2vDdtMYd",
      label: "TVM",
      forIds: ["NDk6Njg6NjYz"],
    }),
    new ModuleNpc({
      id: "npc54",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.zAxKR8XWtQm2rqh4",
      label: "T",
      forIds: ["MjU6Njg6OTk", "MTQ6OTk6NDEx"],
    }),
    new ModuleNpc({
      id: "npc55",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.tpNP1UooPPHMyZye",
      label: "T",
      forIds: ["MjU6Njg6MTk1", "NDY6MzI2OjIxOQ", "NTE6Njg6NTY3"],
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
          id: "NzozNzE6MzUx",
        },
        {
          id: "ODo5OToyNjc",
        },
        {
          id: "OToyOTU6Njk5",
        },
        {
          id: "MTA6MzI2OjY5OQ",
        },
        {
          id: "MTE6Mjk1OjIxOQ",
        },
        {
          id: "MTI6OTk6Mzg3",
        },
        {
          id: "MTM6Njg6NDM1",
        },
        {
          id: "MTM6Mjk1OjY5OQ",
        },
        {
          id: "MTQ6MzI2OjYzOQ",
        },
        {
          id: "MTU6Njg6MjQz",
        },
        {
          id: "MTU6Mjk1OjE5NQ",
        },
        {
          id: "MTY6OTk6MjA3",
        },
        {
          id: "MTc6Njg6MzUx",
        },
        {
          id: "MTc6Mjk1OjQ3MQ",
        },
        {
          id: "MTg6MzM2OjIxOQ",
        },
        {
          id: "MTk6Njg6MTIz",
        },
        {
          id: "MjA6OTk6MzI3",
        },
        {
          id: "MjA6MzI2OjMxNQ",
        },
        {
          id: "MjI6OTk6NjUx",
        },
        {
          id: "MjI6OTk6NTc5",
        },
        {
          id: "MjI6OTk6NDU5",
        },
        {
          id: "MjI6OTk6Mzc1",
        },
        {
          id: "MjI6OTk6MTk1",
        },
        {
          id: "MjI6MzI2OjUxOQ",
        },
        {
          id: "MjI6MzI2OjM5OQ",
        },
        {
          id: "MjM6Njg6NDgz",
        },
        {
          id: "MjM6Njg6MzUx",
        },
        {
          id: "MjQ6MzI2OjU3OQ",
        },
        {
          id: "MjQ6MzI2OjMwMw",
        },
        {
          id: "MTA6MTA4OjY4Nw",
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
          id: "Mjc6MzcxOjQ4Mw",
        },
        {
          id: "Mjc6Njg6NjYz",
        },
        {
          id: "Mjg6MzI2OjQyMw",
        },
        {
          id: "Mjk6Njg6MTEx",
        },
        {
          id: "MzA6OTk6NTc5",
        },
        {
          id: "MzA6MzI2OjE0Nw",
        },
        {
          id: "MzE6Njg6MjY3",
        },
        {
          id: "MzE6Njg6MTEx",
        },
        {
          id: "MzE6Mjk1OjEyMw",
        },
        {
          id: "MzM6Njg6MzE1",
        },
        {
          id: "MzM6Mjk1OjMzOQ",
        },
        {
          id: "MzQ6OTk6Njk5",
        },
        {
          id: "MzQ6MzI2OjY5OQ",
        },
        {
          id: "MzU6Njg6NDgz",
        },
        {
          id: "MzU6Njg6MTQ3",
        },
        {
          id: "MzY6MzI2Ojk5",
        },
        {
          id: "Mzc6Njg6MzE1",
        },
        {
          id: "Mzc6Mjk1OjIwNw",
        },
        {
          id: "Mzg6MzI2OjQ3MQ",
        },
        {
          id: "Mzg6MzI2OjExMQ",
        },
        {
          id: "NDI6OTk6Mjc5",
        },
        {
          id: "NDM6Njg6NDM1",
        },
        {
          id: "Mjk6MzA0OjY4Nw",
        },
        {
          id: "MzM6MzA0OjY4Nw",
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
          id: "NDU6MzcxOjMzOQ",
        },
        {
          id: "NDY6OTk6Njk5",
        },
        {
          id: "NDY6OTk6Mjc5",
        },
        {
          id: "NDY6MzI2OjYzOQ",
        },
        {
          id: "NDY6MzI2OjUxOQ",
        },
        {
          id: "NDY6MzI2OjQ1OQ",
        },
        {
          id: "NDY6MzI2OjEyMw",
        },
        {
          id: "NDc6Njg6NDcx",
        },
        {
          id: "NDc6Njg6MjQz",
        },
        {
          id: "NDc6Mjk1OjMzOQ",
        },
        {
          id: "NDg6MzI2OjU2Nw",
        },
        {
          id: "NDk6Njg6MTU5",
        },
        {
          id: "NTA6OTk6MTcx",
        },
        {
          id: "NTE6Njg6ODc",
        },
        {
          id: "NTI6MzI2OjI0Mw",
        },
        {
          id: "NTM6Mjk1OjMzOQ",
        },
        {
          id: "NTQ6OTk6MTQ3",
        },
        {
          id: "NTU6Njg6NjI3",
        },
        {
          id: "NTU6Mjk1OjI2Nw",
        },
        {
          id: "NTc6Njg6NTMx",
        },
        {
          id: "NTc6Njg6MTU5",
        },
        {
          id: "NTg6MzI2Ojg3",
        },
        {
          id: "NTk6Njg6NjE1",
        },
        {
          id: "NTk6Njg6MzUx",
        },
        {
          id: "NjE6Mjk1OjY5OQ",
        },
        {
          id: "NjE6Mjk1OjMyNw",
        },
      ],
    },
    {
      name: "Back Matter",
      pages: [
        {
          id: "NjM6MTQxOjY1NA",
        },
        {
          id: "NjM6Mjk1OjIxOQ",
        },
        {
          id: "NjU6Njg6NDgz",
        },
        {
          id: "NjU6Njg6Mzc1",
        },
        {
          id: "NjU6Njg6MTM1",
        },
        {
          id: "NjU6Mjk1OjM3NQ",
        },
        {
          id: "NjU6MzQ1OjIwNw",
        },
        {
          id: "NjY6OTk6Njk5",
        },
        {
          id: "NjY6OTk6NDIz",
        },
        {
          id: "NjY6OTk6MzAz",
        },
        {
          id: "NjY6OTk6MTU5",
        },
        {
          id: "NjY6MzI2OjY5OQ",
        },
        {
          id: "NjY6Mzc3OjY2Mw",
        },
        {
          id: "NjY6MzY3OjUwNw",
        },
        {
          id: "NjY6MzI2OjM5OQ",
        },
        {
          id: "NjY6MzI2OjI5MQ",
        },
        {
          id: "NjY6MzI2OjE1OQ",
        },
        {
          id: "Njc6Njg6NjI3",
        },
        {
          id: "Njc6Njg6NDcx",
        },
        {
          id: "Njc6Njg6Mzc1",
        },
        {
          id: "Njc6Njg6MjY3",
        },
        {
          id: "Njc6Njg6MTU5",
        },
        {
          id: "Njc6MzI2OjY2Mw",
        },
        {
          id: "Njc6MzgzOjUzMQ",
        },
        {
          id: "Njc6MzQzOjQ0Nw",
        },
        {
          id: "Njc6Mjk1OjI2Nw",
        },
        {
          id: "Njc6Mjk1OjEzNQ",
        },
        {
          id: "Njk6MTI0OjYyMw",
        },
        {
          id: "NzA6OTk6Njk5",
        },
        {
          id: "NzA6MzI2OjM2Mw",
        },
        {
          id: "NzE6Njg6MjMx",
        },
        {
          id: "NzI6OTk6Njk5",
        },
        {
          id: "NzI6MzI2OjY5OQ",
        },
        {
          id: "NzM6Njg6Njk5",
        },
        {
          id: "NzU6MTUwOjY1NA",
        },
        {
          id: "NzU6Njg6NDU5",
        },
        {
          id: "NzU6Njg6MTIz",
        },
        {
          id: "NzY6OTk6NTc5",
        },
        {
          id: "NzY6MzQ3OjQ5NQ",
        },
        {
          id: "Nzc6Mjk1OjQxMQ",
        },
        {
          id: "Nzk6Njg6Njk5",
        },
        {
          id: "Nzk6Njg6NjI3",
        },
        {
          id: "ODA6MjUxOjY5OQ",
        },
        {
          id: "ODA6MjUxOjYyNw",
        },
        {
          id: "ODA6MjUxOjQxMQ",
        },
        {
          id: "ODE6Njg6NjAz",
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
          id: "ODU6Njg6Njk5",
        },
        {
          id: "ODY6MjUxOjY5OQ",
        },
        {
          id: "ODc6Njg6Njk5",
        },
        {
          id: "ODg6MTA3OjY1Mw",
        },
        {
          id: "ODg6MzA5OjY1Mw",
        },
        {
          id: "ODg6Mzk0OjY1Mw",
        },
        {
          id: "ODg6MzI2OjE1OQ",
        },
        {
          id: "OTA6MTU4OjY1OA",
        },
        {
          id: "OTA6MzI2OjM2Mw",
        },
        {
          id: "OTI6OTk6NjU0",
        },
        {
          id: "OTI6NDIyOjY1NA",
        },
        {
          id: "OTI6MzI2OjMwMw",
        },
        {
          id: "Nzk6MzcxOjY2Mw",
        },
        {
          id: "ODA6MTM2OjY2Mw",
        },
        {
          id: "ODE6MzcxOjY2Mw",
        },
        {
          id: "ODI6MTUxOjY2Mw",
        },
        {
          id: "ODM6MzcxOjY2Mw",
        },
        {
          id: "ODQ6MTM4OjY2Mw",
        },
        {
          id: "ODU6MzcxOjY2Mw",
        },
        {
          id: "ODY6MTc2OjY2Mw",
        },
        {
          id: "ODc6MzcxOjY2Mw",
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
      ],
    },
  ];
  combines = [];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "EXTINCTION CURSE: SIEGE OF THE DINOSAURS" &&
        t.fontId === "Gin-Regular:12",
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    text = text.filter((t) => !(t.page === 71 && t.color === "#f15c51"));
    text = text.filter((t) => !(t.page === 72 && t.color === "#f15c51"));
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
