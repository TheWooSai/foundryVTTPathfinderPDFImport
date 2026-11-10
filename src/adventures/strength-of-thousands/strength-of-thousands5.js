import { StrengthOfThousandsBase } from "./base.js";
import { AdventureImage, LabelImage } from "../../core/images.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class StrengthOfThousands5 extends StrengthOfThousandsBase {
  prefix = "strength-of-thousands-5";
  fullName = "Strength of Thousands - Doorway to the Red Star";
  pages = [
    this.RightSingleColumnChapterHeadingPageLayout(7),
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
    this.RightTwoColumnWithRightCutout(19, 460),
    this.LeftTwoColumn(20),
    this.RightTwoColumn(21),
    this.LeftTwoColumn(22),
    this.RightTwoColumn(23),
    this.LeftTwoColumn(24),
    this.RightTwoColumnWithRightCutout(25, 270),
    this.LeftTwoColumn(26),
    this.RightTwoColumnWithRightCutout(27, 310),
    this.LeftTwoColumn(28),
    this.RightTwoColumn(29),
    this.LeftTwoColumn(30),
    this.RightTwoColumn(31),
    this.LeftTwoColumn(32),
    this.RightTwoColumn(33),
    this.LeftTwoColumn(34),
    this.RightTwoColumn(35),
    this.RightSingleColumnChapterHeadingPageLayout(37),
    this.LeftTwoColumnWithMap(38, 340),
    this.RightTwoColumn(39),
    this.LeftTwoColumnWithLeftCutout(40, 310),
    this.RightTwoColumn(41),
    this.LeftTwoColumn(42),
    this.RightTwoColumn(43),
    this.LeftTwoColumn(44),
    this.RightTwoColumn(45),
    this.LeftTwoColumn(46),
    this.RightTwoColumn(47),
    this.LeftTwoColumn(48),
    this.RightTwoColumn(49),
    this.LeftTwoColumn(50),
    this.RightTwoColumn(51),
    this.LeftTwoColumnWithMap(52, 340),
    this.RightTwoColumn(53),
    this.LeftTwoColumn(54),
    this.RightTwoColumn(55),
    this.RightSingleColumnChapterHeadingPageLayout(57),
    this.LeftTwoColumnWithLeftCutout(58, 390),
    this.RightTwoColumnWithRightCutout(59, 0),
    this.LeftTwoColumnWithMap(60, 340),
    this.RightTwoColumnWithRightCutout(61, 510),
    this.LeftTwoColumn(62),
    this.RightTwoColumn(63),
    this.LeftTwoColumn(64),
    this.RightTwoColumn(65),
    this.LeftTwoColumn(66),
    this.RightTwoColumn(67),
    this.LeftTwoColumn(68),
    this.RightTwoColumn(69),
    this.RightChapterHeadingPageLayout(71),
    this.LeftTwoColumn(72),
    this.RightTwoColumnWithRightCutout(73, 490),
    this.LeftTwoColumn(74),
    this.RightTwoColumn(75),
    this.RightChapterHeadingPageLayout(77),
    this.LeftTwoColumn(78),
    this.RightTwoColumnWithRightCutout(79, 365),
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
    this.LeftSingleColumnWithSidebar(90),
    this.RightSingleColumnWithSidebar(91),
    this.ChapterHeadingPageLayout(92),
    this.RightTwoColumn(93),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      canonical: {
        name: "sot5/map1",
        priority: 0,
      },
      nameInfo: {
        x: 63,
        y: 401.6681,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 10,
      width: 634,
      height: 850,
      imageLeft: 9,
      imageRight: 589,
      imageCols: 19,
      imageTop: 6,
      imageBottom: 798,
      imageRows: 26,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot5-map1.json",
      journals: [
        {
          x: 450,
          y: 750,
          id: "MTA6OTk6MzM5",
        },
      ],
      tokens: [
        {
          id: "npc2",
          x: 1500,
          y: 2200,
          elite: true,
        },
      ],
    }),
    new ModuleScene({
      name: "map2",
      canonical: {
        name: "sot5/map2",
        priority: 0,
      },
      nameInfo: {
        x: 63,
        y: 401.6681,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 12,
      width: 642,
      height: 854,
      imageLeft: 29,
      imageRight: 615,
      imageCols: 19,
      imageTop: 35,
      imageBottom: 806,
      imageRows: 25,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot5-map2.json",
      journals: [
        {
          x: 450,
          y: 750,
          id: "MTI6MzI2OjE0Nw",
        },
      ],
      tokens: [
        {
          id: "npc42",
          x: 1300,
          y: 1700,
        },
      ],
    }),
    new ModuleScene({
      name: "map3",
      canonical: {
        name: "sot5/map3",
        priority: 0,
      },
      nameInfo: {
        x: 63,
        y: 401.6681,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 14,
      width: 642,
      height: 857,
      imageLeft: 9,
      imageRight: 595,
      imageCols: 19,
      imageTop: 35,
      imageBottom: 807,
      imageRows: 25,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot5-map3.json",
      journals: [
        {
          x: 550,
          y: 750,
          id: "MTQ6OTk6MTM1",
        },
      ],
      tokens: [
        {
          id: "npc49",
          x: 1300,
          y: 1500,
        },
        {
          id: "npc41",
          x: 1700,
          y: 1900,
        },
        {
          id: "npc41",
          x: 1500,
          y: 1900,
        },
        {
          id: "npc41",
          x: 1700,
          y: 1700,
        },
        {
          id: "npc41",
          x: 1600,
          y: 1600,
        },
      ],
    }),
    new ModuleScene({
      name: "map4",
      canonical: {
        name: "sot5/map4",
        priority: 0,
      },
      nameInfo: {
        x: 63,
        y: 401.6681,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 16,
      width: 644,
      height: 853,
      imageLeft: 27,
      imageRight: 614,
      imageCols: 19,
      imageTop: 35,
      imageBottom: 806,
      imageRows: 25,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot5-map4.json",
      journals: [
        {
          x: 450,
          y: 750,
          id: "MTU6Mjk1OjIxOQ",
        },
      ],
      tokens: [
        {
          id: "npc53",
          x: 1500,
          y: 2e3,
        },
        {
          id: "npc53",
          x: 1200,
          y: 1600,
        },
        {
          id: "npc53",
          x: 1400,
          y: 2600,
        },
      ],
    }),
    new ModuleScene({
      name: "map5",
      canonical: {
        name: "sot5/map5",
        priority: 0,
      },
      nameInfo: {
        x: 423.75,
        y: 388.3319,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 38,
      width: 1232,
      height: 841,
      imageLeft: 19,
      imageRight: 1127,
      imageCols: 26,
      imageTop: 110,
      imageBottom: 792,
      imageRows: 16,
      offsetX: 0,
      offsetY: 0,
      darkness: 0.4,
      detailsFile: "/sot/maps/sot5-map5.json",
      journals: [
        {
          x: 650,
          y: 550,
          id: "Mzk6Njg6NjUx",
        },
        {
          x: 1300,
          y: 1100,
          id: "Mzk6Njg6NDcx",
        },
        {
          x: 2550,
          y: 1050,
          id: "NDA6MzI2OjU0Mw",
        },
        {
          x: 2350,
          y: 800,
          id: "NDA6MzI2OjMwMw",
        },
        {
          x: 3150,
          y: 750,
          id: "NDE6Njg6NDU5",
        },
        {
          x: 2450,
          y: 1750,
          id: "NDE6Njg6Mjc5",
        },
        {
          x: 1550,
          y: 2150,
          id: "NDI6OTk6Njk5",
        },
        {
          x: 650,
          y: 750,
          id: "NDI6MzI2OjY5OQ",
        },
      ],
      tokens: [
        {
          id: "npc45",
          x: 2100,
          y: 1900,
        },
        {
          id: "npc45",
          x: 2100,
          y: 1600,
        },
        {
          id: "npc45",
          x: 2400,
          y: 1800,
        },
        {
          id: "npc11",
          x: 2300,
          y: 1800,
        },
        {
          id: "npc31",
          x: 2e3,
          y: 1e3,
        },
        {
          id: "npc31",
          x: 2700,
          y: 1e3,
        },
        {
          id: "npc43",
          x: 2300,
          y: 700,
        },
        {
          id: "npc12",
          x: 600,
          y: 800,
        },
        {
          id: "npc40",
          x: 1300,
          y: 1e3,
        },
        {
          id: "npc20",
          x: 1500,
          y: 800,
        },
        {
          id: "npc20",
          x: 1500,
          y: 1100,
        },
        {
          id: "npc20",
          x: 1300,
          y: 1300,
        },
        {
          id: "npc20",
          x: 1100,
          y: 1200,
        },
        {
          id: "npc20",
          x: 1e3,
          y: 1e3,
        },
        {
          id: "npc20",
          x: 1100,
          y: 800,
        },
        {
          id: "npc20",
          x: 1300,
          y: 700,
        },
      ],
    }),
    new ModuleScene({
      name: "map6",
      canonical: {
        name: "sot5/map6",
        priority: 0,
      },
      nameInfo: {
        x: 63,
        y: 401.6681,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 50,
      width: 642,
      height: 843,
      imageLeft: 10,
      imageRight: 596,
      imageCols: 19,
      imageTop: 35,
      imageBottom: 807,
      imageRows: 25,
      offsetX: 0,
      offsetY: 0,
      darkness: 0.4,
      detailsFile: "/sot/maps/sot5-map6.json",
      journals: [
        {
          x: 450,
          y: 850,
          id: "NTA6MzI2OjY5OQ",
        },
      ],
      tokens: [
        {
          id: "npc13",
          x: 1300,
          y: 1500,
        },
        {
          id: "npc13",
          x: 1800,
          y: 2400,
        },
        {
          id: "npc14",
          x: 1600,
          y: 1800,
        },
      ],
    }),
    new ModuleScene({
      name: "map7",
      canonical: {
        name: "sot5/map7",
        priority: 0,
      },
      nameInfo: {
        x: 423.75,
        y: 388.3319,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 52,
      width: 1222,
      height: 837,
      imageLeft: 52,
      imageRight: 1166,
      imageCols: 18,
      imageTop: 18,
      imageBottom: 820,
      imageRows: 13,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot5-map7.json",
      journals: [
        {
          x: 450,
          y: 550,
          id: "NTE6Mjk1OjI3OQ",
        },
        {
          x: 900,
          y: 1300,
          id: "NTE6Mjk1OjIxOQ",
        },
        {
          x: 900,
          y: 850,
          id: "NTM6Njg6NjE1",
        },
        {
          x: 1250,
          y: 1100,
          id: "NTM6Mjk1OjY2Mw",
        },
        {
          x: 1200,
          y: 700,
          id: "NTQ6OTk6NDcx",
        },
        {
          x: 1800,
          y: 700,
          id: "NTQ6OTk6MjQz",
        },
        {
          x: 1700,
          y: 1200,
          id: "NTQ6MzI2OjQ0Nw",
        },
      ],
      tokens: [
        {
          id: "npc28",
          x: 1500,
          y: 900,
        },
        {
          id: "npc28",
          x: 1900,
          y: 900,
        },
        {
          id: "npc28",
          x: 2200,
          y: 800,
        },
        {
          id: "npc28",
          x: 1400,
          y: 500,
        },
        {
          id: "npc54",
          x: 2e3,
          y: 1100,
        },
        {
          id: "npc54",
          x: 2200,
          y: 1e3,
        },
        {
          id: "npc54",
          x: 2200,
          y: 1200,
        },
        {
          id: "npc54",
          x: 2200,
          y: 700,
        },
        {
          id: "npc54",
          x: 1900,
          y: 500,
        },
        {
          id: "npc52",
          x: 2200,
          y: 500,
        },
        {
          id: "npc52",
          x: 2200,
          y: 600,
        },
        {
          id: "npc15",
          x: 600,
          y: 1200,
        },
      ],
    }),
    new ModuleScene({
      name: "map8a",
      canonical: {
        name: "sot5/map8a",
        priority: 0,
      },
      nameInfo: {
        x: 199,
        y: 390.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 60,
      width: 1222,
      height: 840,
      imageLeft: 25,
      imageRight: 1203,
      imageCols: 38,
      imageTop: 33,
      imageBottom: 808,
      imageRows: 25,
      cropLeft: 0,
      cropRight: 625,
      cropTop: 0,
      cropBottom: 840,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot5-map8a.json",
      journals: [
        {
          x: 550,
          y: 750,
          id: "NTg6MzI2OjI2Nw",
        },
      ],
      tokens: [
        {
          id: "npc16",
          x: 1700,
          y: 2e3,
        },
      ],
    }),
    new ModuleScene({
      name: "map8b",
      canonical: {
        name: "sot5/map8b",
        priority: 0,
      },
      nameInfo: {
        x: 332,
        y: 390.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 60,
      width: 1222,
      height: 840,
      imageLeft: 25,
      imageRight: 1203,
      imageCols: 38,
      imageTop: 33,
      imageBottom: 808,
      imageRows: 25,
      cropLeft: 635,
      cropRight: 1222,
      cropTop: 0,
      cropBottom: 840,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot5-map8b.json",
      journals: [
        {
          x: 550,
          y: 950,
          id: "NTk6Njg6NDIz",
        },
      ],
      tokens: [
        {
          id: "npc26",
          x: 900,
          y: 1500,
        },
        {
          id: "npc26",
          x: 600,
          y: 1500,
        },
        {
          id: "npc26",
          x: 700,
          y: 1600,
        },
        {
          id: "npc26",
          x: 700,
          y: 1800,
        },
        {
          id: "npc26",
          x: 800,
          y: 1700,
        },
        {
          id: "npc26",
          x: 800,
          y: 1400,
        },
      ],
    }),
    new ModuleScene({
      name: "map9",
      canonical: {
        name: "sot5/map9",
        priority: 0,
      },
      nameInfo: {
        x: 63,
        y: 401.6681,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 62,
      width: 643,
      height: 850,
      imageLeft: 26,
      imageRight: 612,
      imageCols: 19,
      imageTop: 32,
      imageBottom: 803,
      imageRows: 25,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot5-map9.json",
      journals: [
        {
          x: 650,
          y: 750,
          id: "NjA6OTk6MTk1",
        },
      ],
      tokens: [
        {
          id: "npc23",
          x: 1200,
          y: 2300,
        },
        {
          id: "npc23",
          x: 1300,
          y: 2500,
        },
        {
          id: "npc23",
          x: 1e3,
          y: 2200,
        },
      ],
    }),
    new ModuleScene({
      name: "map10",
      canonical: {
        name: "sot5/map10",
        priority: 0,
      },
      nameInfo: {
        x: 46,
        y: 762.3762,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 1261,
      height: 1637,
      imageLeft: 17,
      imageRight: 1233,
      imageCols: 41,
      imageTop: 21,
      imageBottom: 1623,
      imageRows: 54,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot5-map10.json",
      journals: [
        {
          x: 950,
          y: 1800,
          id: "MjY6OTk6Mzg3",
        },
        {
          x: 4400,
          y: 4e3,
          id: "MjY6MzI2OjY5OQ",
        },
        {
          x: 3400,
          y: 4e3,
          id: "MjY6MzI2OjMyNw",
        },
        {
          x: 2900,
          y: 4e3,
          id: "Mjg6OTk6MTgz",
        },
        {
          x: 2e3,
          y: 3800,
          id: "MzA6MzI2OjYzOQ",
        },
        {
          x: 2500,
          y: 5400,
          id: "MzE6Njg6MTIz",
        },
        {
          x: 2500,
          y: 2800,
          id: "MzE6Mjk1OjYwMw",
        },
        {
          x: 4550,
          y: 1850,
          id: "MzQ6OTk6MzE1",
        },
        {
          x: 4600,
          y: 5900,
          id: "MzI6OTk6MjA3",
        },
      ],
      tokens: [
        {
          id: "npc9",
          x: 4200,
          y: 5800,
        },
        {
          id: "npc50",
          x: 4400,
          y: 5800,
        },
        {
          id: "npc36",
          x: 4600,
          y: 6e3,
        },
        {
          id: "npc46",
          x: 3472.8813559322034,
          y: 3277.966101694916,
        },
        {
          id: "npc46",
          x: 3472.8813559322034,
          y: 4789.830508474576,
        },
        {
          id: "npc7",
          x: 2700,
          y: 3900,
        },
        {
          id: "npc37",
          x: 2900,
          y: 4400,
        },
        {
          id: "npc51",
          x: 1600,
          y: 3400,
        },
        {
          id: "npc38",
          x: 2e3,
          y: 4300,
        },
        {
          id: "npc51",
          x: 2e3,
          y: 3400,
        },
        {
          id: "npc51",
          x: 2300,
          y: 3700,
        },
        {
          id: "npc51",
          x: 1700,
          y: 3700,
        },
        {
          id: "npc51",
          x: 1600,
          y: 3900,
        },
        {
          id: "npc51",
          x: 2100,
          y: 4200,
        },
        {
          id: "npc51",
          x: 2300,
          y: 4400,
        },
        {
          id: "npc51",
          x: 1600,
          y: 4400,
        },
        {
          id: "npc48",
          x: 2300,
          y: 2700,
        },
        {
          id: "npc8",
          x: 2e3,
          y: 2900,
        },
        {
          id: "npc8",
          x: 2800,
          y: 2800,
        },
        {
          id: "npc35",
          x: 4500,
          y: 1500,
        },
        {
          id: "npc10",
          x: 4600,
          y: 1900,
        },
      ],
    }),
    new ModuleScene({
      name: "map11",
      canonical: {
        name: "sot5/map11",
        priority: 0,
      },
      nameInfo: {
        x: 666,
        y: 762.3762,
      },
      nameFn: (name) => this.sentenceCase(name).substring(0, 17),
      page: 99,
      width: 1262,
      height: 1637,
      imageLeft: 22,
      imageRight: 1257,
      imageCols: 41,
      imageTop: 15,
      imageBottom: 1611,
      imageRows: 53,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot5-map11.json",
      journals: [
        {
          x: 2150,
          y: 5500,
          id: "NjI6MzI2OjQ5NQ",
        },
        {
          x: 2150,
          y: 3900,
          id: "NjI6MzI2OjM1MQ",
        },
        {
          x: 2150,
          y: 2450,
          id: "NjM6Njg6Njk5",
        },
        {
          x: 4250,
          y: 3900,
          id: "NjM6Njg6NDEx",
        },
        {
          x: 4500,
          y: 3100,
          id: "NjQ6OTk6MjMx",
        },
        {
          x: 4100,
          y: 2900,
          id: "Njc6Njg6NTc5",
        },
        {
          x: 4300,
          y: 2300,
          id: "Njc6Mjk1OjE0Nw",
        },
        {
          x: 4250,
          y: 5550,
          id: "NjQ6MzI2OjM4Nw",
        },
        {
          x: 950,
          y: 2050,
          id: "NjE6Mjk1OjQxMQ",
        },
      ],
      tokens: [
        {
          id: "npc23",
          x: 2300,
          y: 4100,
        },
        {
          id: "npc23",
          x: 2e3,
          y: 5200,
        },
        {
          id: "npc23",
          x: 2e3,
          y: 3e3,
        },
        {
          id: "npc39",
          x: 2700,
          y: 3300,
        },
        {
          id: "npc39",
          x: 1500,
          y: 4800,
        },
        {
          id: "npc39",
          x: 1600,
          y: 4e3,
        },
        {
          id: "npc39",
          x: 2e3,
          y: 4200,
        },
        {
          id: "npc39",
          x: 2100,
          y: 4200,
        },
        {
          id: "npc39",
          x: 2700,
          y: 4700,
        },
        {
          id: "npc23",
          x: 2500,
          y: 2100,
        },
        {
          id: "npc23",
          x: 1800,
          y: 2100,
        },
        {
          id: "npc34",
          x: 3800,
          y: 4300,
        },
        {
          id: "npc34",
          x: 4700,
          y: 4700,
        },
        {
          id: "npc34",
          x: 3700,
          y: 3700,
        },
        {
          id: "npc34",
          x: 4600,
          y: 3800,
        },
        {
          id: "npc44",
          x: 4300,
          y: 5e3,
        },
        {
          id: "npc44",
          x: 4300,
          y: 4300,
        },
        {
          id: "npc24",
          x: 4e3,
          y: 2900,
        },
        {
          id: "npc23",
          x: 4e3,
          y: 3100,
        },
        {
          id: "npc23",
          x: 4e3,
          y: 2700,
        },
      ],
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 8,
        x: 238.4054,
        y: 123.2536,
      },
      page: 8,
      width: 809,
      height: 1079,
      tokenX: -175,
      tokenY: 49,
      tokenSize: 323,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 11,
        x: 430.9553,
        y: 123.2536,
      },
      page: 11,
      width: 869,
      height: 1130,
      tokenX: -136,
      tokenY: 135,
      tokenSize: 626,
      forIds: ["MTE6Njg6Mzk5"],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 18,
        x: 277.3905,
        y: 456.8161,
      },
      page: 18,
      width: 357,
      height: 490,
      tokenX: 82,
      tokenY: 78,
      tokenSize: 546,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc4",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 20,
        x: 135.2704,
        y: 120.8161,
      },
      page: 20,
      width: 860,
      height: 1161,
      tokenX: -390,
      tokenY: 85,
      tokenSize: 349,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc5",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.LdD9lYH5p8QTpcOV",
      page: 22,
      width: 898,
      height: 1230,
      tokenX: -175,
      tokenY: -57,
      tokenSize: 334,
      forIds: ["MjI6MzU5OjQ5NQ"],
    }),
    new ModuleNpc({
      id: "npc6",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.NJclJai0QoEiR8wC",
      page: 23,
      width: 905,
      height: 1287,
      tokenX: -267,
      tokenY: -106,
      tokenSize: 391,
      forIds: ["MjM6Njg6NTU1"],
    }),
    new ModuleNpc({
      id: "npc7",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.RNMbzphC2QEr5LFt",
      page: 29,
      width: 878,
      height: 1192,
      tokenX: -254,
      tokenY: 37,
      tokenSize: 380,
      forIds: ["Mjk6Njg6NTY3"],
    }),
    new ModuleNpc({
      id: "npc8",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.e0PXAtnDnJo4ggFX",
      page: 32,
      width: 401,
      height: 478,
      tokenX: 34,
      tokenY: 90,
      tokenSize: 562,
      forIds: ["MzI6OTk6MzAz"],
    }),
    new ModuleNpc({
      id: "npc9",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.m842SrbNueOnkFZk",
      page: 33,
      width: 881,
      height: 1410,
      tokenX: -316,
      tokenY: -192,
      tokenSize: 402,
      forIds: ["MzM6Njg6NjE1"],
    }),
    new ModuleNpc({
      id: "npc10",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.9cyXSTXSsqOYXZtB",
      page: 35,
      width: 921,
      height: 1196,
      tokenX: -419,
      tokenY: -94,
      tokenSize: 384,
      forIds: ["MzQ6MzI2OjUwNw"],
    }),
    new ModuleNpc({
      id: "npc11",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.0WFxanYfGdS7DSEK",
      page: 42,
      width: 830,
      height: 1087,
      tokenX: 81,
      tokenY: 110,
      tokenSize: 1031,
      forIds: ["NDE6Mjk1OjE1OQ"],
    }),
    new ModuleNpc({
      id: "npc12",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.oy6o6rJbmpduNyvA",
      page: 43,
      width: 773,
      height: 811,
      tokenX: 42,
      tokenY: 5,
      tokenSize: 699,
      forIds: ["NDI6MzI2OjQ5NQ"],
    }),
    new ModuleNpc({
      id: "npc13",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.YXG0gpzDvHVVsJsO",
      page: 50,
      width: 824,
      height: 936,
      tokenX: 197,
      tokenY: 151,
      tokenSize: 1132,
      forIds: ["NTA6MzI2OjQ5NQ"],
    }),
    new ModuleNpc({
      id: "npc14",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.RJKVH3fxPEiTCwt5",
      name: {
        page: 51,
        x: 258.8403,
        y: 468.8161,
      },
      page: 51,
      width: 495,
      height: 501,
      tokenX: 93,
      tokenY: 72,
      tokenSize: 557,
      forIds: ["NTE6Mjk1OjM2Mw"],
    }),
    new ModuleNpc({
      id: "npc15",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.ip0htomE6BytVw5h",
      page: 53,
      width: 749,
      height: 911,
      tokenX: -120,
      tokenY: 81,
      tokenSize: 407,
      forIds: ["NTI6OTk6MjE5"],
    }),
    new ModuleNpc({
      id: "npc16",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.ip0htomE6BytVw5h",
      name: {
        page: 59,
        x: 308.5856,
        y: 108.8161,
      },
      page: 59,
      width: 792,
      height: 1056,
      tokenX: -168,
      tokenY: 16,
      tokenSize: 412,
      elite: true,
      forIds: ["NTk6Njg6NDcx"],
    }),
    new ModuleNpc({
      id: "npc17",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 66,
        x: 241.25,
        y: 111.2536,
      },
      page: 66,
      width: 741,
      height: 912,
      tokenX: -180,
      tokenY: -32,
      tokenSize: 380,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc18",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-3.Actor.d5UfBtz09fOXKSmr",
      name: {
        page: 69,
        x: 368.8659,
        y: 94.3786,
      },
      page: 69,
      width: 771,
      height: 1028,
      tokenX: -188,
      tokenY: -117,
      tokenSize: 328,
      forIds: ["Njk6Njg6NTY3"],
    }),
    new ModuleNpc({
      id: "npc19",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.wCmTtkeVjPILP7Vl",
      page: 72,
      width: 851,
      height: 1179,
      tokenX: -281,
      tokenY: -29,
      tokenSize: 367,
      forIds: ["ODg6MjUxOjU3OQ"],
    }),
    new ModuleNpc({
      id: "npc20",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.ST4oQnNs5ePZIrZc",
      page: 82,
      width: 882,
      height: 928,
      tokenX: -85,
      tokenY: 170,
      tokenSize: 1012,
      forIds: ["ODI6MjUxOjU2Nw", "NDA6MzI2OjU5MQ"],
    }),
    new ModuleNpc({
      id: "npc21",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.jiCmtwIhbVrG9dB5",
      page: 83,
      width: 753,
      height: 805,
      tokenX: 78,
      tokenY: 160,
      tokenSize: 861,
      forIds: ["ODI6MzM0OjI2Nw"],
    }),
    new ModuleNpc({
      id: "npc22",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.MtaFBwBwpvoTC1PH",
      page: 84,
      width: 887,
      height: 910,
      tokenX: -103,
      tokenY: 41,
      tokenSize: 378,
      forIds: ["ODQ6MjUxOjUzMQ", "NjI6MzI2Ojk5"],
    }),
    new ModuleNpc({
      id: "npc23",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.3oxQdcu3bKHKQCDA",
      page: 85,
      width: 843,
      height: 917,
      tokenX: -87,
      tokenY: -112,
      tokenSize: 497,
      forIds: [
        "ODU6Njg6Njk5",
        "NjM6Njg6NDU5",
        "Njc6Mjk1OjI5MQ",
        "NjE6Njg6NTc5",
        "NjI6MzI2OjE0Nw",
      ],
    }),
    new ModuleNpc({
      id: "npc24",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.i3xyq1muByR02dqa",
      page: 86,
      width: 904,
      height: 1022,
      tokenX: -415,
      tokenY: 13,
      tokenSize: 294,
      forIds: ["ODY6MjUxOjY5OQ", "Njc6Mjk1OjMzOQ"],
    }),
    new ModuleNpc({
      id: "npc25",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.1NcuNcLoCg0AaAYO",
      page: 87,
      width: 776,
      height: 959,
      tokenX: 108,
      tokenY: 77,
      tokenSize: 903,
      forIds: ["ODc6Njg6NjE1", "NTg6MzI2OjMxNQ"],
    }),
    new ModuleNpc({
      id: "npc26",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.OPLok0VMnWsmhF7K",
      page: 88,
      width: 805,
      height: 929,
      tokenX: 26,
      tokenY: 123,
      tokenSize: 593,
      forIds: ["ODg6MzQ2OjMzOQ", "NjA6OTk6MjQz"],
    }),
    new ModuleNpc({
      id: "npc27",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.eKKp33z9z6U8alo9",
      page: 89,
      width: 828,
      height: 925,
      tokenX: -141,
      tokenY: 68,
      tokenSize: 701,
      forIds: ["ODk6Njg6NTQz"],
    }),
    new ModuleNpc({
      id: "npc28",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.hVBzcyoDCdTCM4E6",
      page: 90,
      width: 958,
      height: 1003,
      tokenX: -311,
      tokenY: 7,
      tokenSize: 387,
      forIds: [
        "OTA6MzMyOjM1MQ",
        "NDk6Mjk1OjQyMw",
        "NTQ6MzI2OjU5MQ",
        "NTU6Njg6NTA3",
      ],
    }),
    new ModuleNpc({
      id: "npc29",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.RJKVH3fxPEiTCwt5",
      page: 91,
      width: 931,
      height: 1109,
      tokenX: -381,
      tokenY: -11,
      tokenSize: 325,
      forIds: ["OTE6Njg6NDQ3"],
    }),
    new ModuleNpc({
      id: "npc30",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.waXVDOOvff9GtAbq",
      page: 93,
      width: 878,
      height: 1225,
      tokenX: -364,
      tokenY: 62,
      tokenSize: 357,
      forIds: ["OTI6MzI2OjIzMQ", "Njk6Njg6NjYz"],
    }),
    new ModuleNpc({
      id: "npc31",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.oLfyxHNz8IX06ZcU",
      label: "B",
      forIds: ["NDA6MzI2OjM1MQ"],
    }),
    new ModuleNpc({
      id: "npc32",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.0WFxanYfGdS7DSEK",
      label: "CM",
      forIds: ["ODM6Njg6NDU5"],
    }),
    new ModuleNpc({
      id: "npc33",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.3858pExfJPbMo4Vf",
      label: "C",
      forIds: ["NTM6Njg6MTk1"],
    }),
    new ModuleNpc({
      id: "npc34",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.gegq5VUU7oBwwoWA",
      label: "CA",
      forIds: ["NjM6Mjk1OjMxNQ", "Njk6Njg6NjE1"],
    }),
    new ModuleNpc({
      id: "npc35",
      actorUuid:
        "Compendium.pf2e.pathfinder-dark-archive.Actor.6gSbmVKbdUSIluMR",
      label: "DM",
      forIds: ["MzQ6MzI2OjY5OQ"],
    }),
    new ModuleNpc({
      id: "npc36",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.34ndZHSZRtvqNUxa",
      label: "DD",
      forIds: ["MzQ6OTk6Njk5"],
    }),
    new ModuleNpc({
      id: "npc37",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.LUqXkF5DEEuATH5L",
      label: "EC",
      forIds: ["MzA6OTk6NjE1"],
    }),
    new ModuleNpc({
      id: "npc38",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.YADSROPDxyIPYg5L",
      label: "FC",
      forIds: ["MzE6Njg6MzUx"],
    }),
    new ModuleNpc({
      id: "npc40",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.jiCmtwIhbVrG9dB5",
      label: "FC",
      forIds: ["NDA6MzI2OjYzOQ"],
    }),
    new ModuleNpc({
      id: "npc41",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.pH2yNe16EnoJ8R0i",
      label: "G",
      forIds: ["MTU6Mjk1OjQyMw"],
    }),
    new ModuleNpc({
      id: "npc42",
      actorUuid: "Compendium.pf2e.lost-omens-bestiary.Actor.NvyAvzxxfb8XEQr2",
      label: "G",
      forIds: ["MTM6Mjk1OjY2Mw"],
    }),
    new ModuleNpc({
      id: "npc43",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-3.Actor.V9SxfxUgljJR9xx5",
      label: "HS",
      forIds: ["NDE6Njg6NjI3"],
    }),
    new ModuleNpc({
      id: "npc44",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.y8bxt4vLmHHy1Xys",
      label: "H",
      forIds: ["NjQ6OTk6NDIz"],
    }),
    new ModuleNpc({
      id: "npc45",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.tu31BdhnxNknt7kK",
      label: "M",
      forIds: ["NDE6Mjk1OjIwNw"],
    }),
    new ModuleNpc({
      id: "npc46",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.S35DifoycBwkxaGq",
      label: "D",
      forIds: ["Mjg6OTk6NDU5"],
    }),
    new ModuleNpc({
      id: "npc47",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.Ehtm5k9iBYTvSUcZ",
      label: "P",
      forIds: ["MTI6MzI2OjM2Mw"],
    }),
    new ModuleNpc({
      id: "npc48",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.x26dyZZZRvZpzK2X",
      label: "Q",
      forIds: ["MzI6OTk6MzUx"],
    }),
    new ModuleNpc({
      id: "npc49",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.ufAw6vB7h0iNpgt1",
      label: "RRC",
      forIds: ["MTU6Njg6MTgz"],
    }),
    new ModuleNpc({
      id: "npc50",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.GDEJworKvYKhniBU",
      label: "SE",
      forIds: ["MzM6Njg6MTk1"],
    }),
    new ModuleNpc({
      id: "npc51",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.UXLNinUscHZ22cHD",
      label: "SoT",
      forIds: ["MzA6MzI2OjEyMw"],
    }),
    new ModuleNpc({
      id: "npc52",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.caSI33WvJJlF6qpb",
      label: "TK",
      forIds: ["ODk6Njg6Mjc5", "NTQ6MzI2OjQ5NQ"],
    }),
    new ModuleNpc({
      id: "npc53",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.rEjKVZqLfEC5jdVV",
      label: "VV",
      forIds: ["MTY6MzI2OjM1MQ"],
    }),
    new ModuleNpc({
      id: "npc54",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.C1gYuDSwTkTIkAcC",
      name: {
        page: 54,
        x: 326.25,
        y: 543,
        substring: {
          start: 0,
          end: 15,
        },
      },
      label: "RG",
      forIds: ["NTQ6MzI2OjU0Mw"],
    }),
    new ModuleNpc({
      id: "npc55",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.r3yLNfqS00g8sdrT",
      name: {
        page: 45,
        x: 67.5,
        y: 99,
      },
      label: "DS",
      forIds: ["NDU6Njg6OTk"],
    }),
  ];
  journals = [
    new LabelImage({
      name: "journal1",
      page: 17,
      width: 886,
      height: 1172,
      label: "MTc6Mjk4OjExOA",
    }),
    new LabelImage({
      name: "journal2",
      page: 61,
      width: 897,
      height: 813,
      label: "NjE6NDA1Ojg1",
    }),
    new AdventureImage({
      name: "journal3",
      page: 70,
      width: 1259,
      height: 1636,
    }),
    new LabelImage({
      name: "journal4",
      page: 74,
      width: 814,
      height: 704,
      label: "NzQ6MzAxOjEwOQ",
    }),
    new AdventureImage({
      name: "journal5",
      page: 76,
      width: 1259,
      height: 1636,
    }),
    new LabelImage({
      name: "journal6",
      page: 77,
      width: 544,
      height: 544,
      label: "Nzc6MjU2OjI5OA",
    }),
    new LabelImage({
      name: "journal7",
      page: 78,
      width: 592,
      height: 596,
      label: "Nzg6Mjk3OjM4Mw",
    }),
    new LabelImage({
      name: "journal8",
      page: 79,
      width: 384,
      height: 330,
      label: "Nzk6MjIyOjIxNQ",
    }),
    new LabelImage({
      name: "journal9",
      page: 81,
      width: 1020,
      height: 652,
      label: "ODE6MTU1OjE3MQ",
    }),
  ];
  journalPages = [
    {
      name: "Chapter 1",
      pages: [
        {
          id: "NzoxOTc6Njg0",
        },
        {
          id: "NzozNzE6NTQz",
        },
        {
          id: "NzozNzE6MzM5",
        },
        {
          id: "MTk6MzExOjY5OQ",
        },
        {
          id: "MjU6MzExOjY5OQ",
        },
        {
          id: "Mjc6MzExOjY5OQ",
        },
        {
          id: "Nzo2ODoyMzE",
        },
        {
          id: "ODozMjY6NjYz",
        },
        {
          id: "OTozMTE6Njk5",
        },
        {
          id: "MTA6OTk6MzM5",
        },
        {
          id: "MTE6Mjk1OjY1MQ",
        },
        {
          id: "MTI6MzI2OjE0Nw",
        },
        {
          id: "MTM6Mjk1OjYxNQ",
        },
        {
          id: "MTQ6OTk6MTM1",
        },
        {
          id: "MTU6Mjk1OjIxOQ",
        },
        {
          id: "MTY6MzI2OjEzNQ",
        },
        {
          id: "MTg6MzI2OjY5OQ",
        },
        {
          id: "MTk6Njg6MzUx",
        },
        {
          id: "MjE6Njg6NjE1",
        },
        {
          id: "MjE6Njg6NDEx",
        },
        {
          id: "MjE6Mjk1OjIwNw",
        },
        {
          id: "MjM6Njg6MTk1",
        },
        {
          id: "MjQ6MzI2OjQ1OQ",
        },
        {
          id: "MjY6OTk6Mzg3",
        },
        {
          id: "MjY6MzI2OjY5OQ",
        },
        {
          id: "MjY6MzI2OjMyNw",
        },
        {
          id: "Mjg6OTk6MTgz",
        },
        {
          id: "MzA6MzI2OjYzOQ",
        },
        {
          id: "MzE6Njg6MTIz",
        },
        {
          id: "MzE6Mjk1OjYwMw",
        },
        {
          id: "MzI6OTk6MjA3",
        },
        {
          id: "MzQ6OTk6MzE1",
        },
      ],
    },
    {
      name: "Chapter 2",
      pages: [
        {
          id: "Mzc6MTk2OjY4Mg",
        },
        {
          id: "Mzc6MzcxOjU0Mw",
        },
        {
          id: "Mzc6MzcxOjM3NQ",
        },
        {
          id: "NDA6MTE1OjY5OQ",
        },
        {
          id: "Mzc6Njg6MjY3",
        },
        {
          id: "Mzg6OTk6MTIz",
        },
        {
          id: "Mzk6Njg6NjUx",
        },
        {
          id: "Mzk6Njg6NDcx",
        },
        {
          id: "NDA6MzI2OjU0Mw",
        },
        {
          id: "NDA6MzI2OjMwMw",
        },
        {
          id: "NDE6Njg6NDU5",
        },
        {
          id: "NDE6Njg6Mjc5",
        },
        {
          id: "NDI6OTk6Njk5",
        },
        {
          id: "NDI6MzI2OjY5OQ",
        },
        {
          id: "NDM6Njg6Njk5",
        },
        {
          id: "NDQ6MzI2OjU1NQ",
        },
        {
          id: "NDU6Njg6MzM5",
        },
        {
          id: "NDU6Mjk1OjU5MQ",
        },
        {
          id: "NDY6OTk6NTU1",
        },
        {
          id: "NDY6MzI2OjUzMQ",
        },
        {
          id: "NDc6Mjk1OjY2Mw",
        },
        {
          id: "NDk6Njg6NTE5",
        },
        {
          id: "NDk6Mjk1OjM3NQ",
        },
        {
          id: "NTA6MzI2OjY5OQ",
        },
        {
          id: "NTE6Mjk1OjI3OQ",
        },
        {
          id: "NTE6Mjk1OjIxOQ",
        },
        {
          id: "NTM6Njg6NjE1",
        },
        {
          id: "NTM6Mjk1OjY2Mw",
        },
        {
          id: "NTQ6OTk6NDcx",
        },
        {
          id: "NTQ6OTk6MjQz",
        },
        {
          id: "NTQ6MzI2OjQ0Nw",
        },
        {
          id: "NTU6Njg6NDU5",
        },
      ],
    },
    {
      name: "Chapter 3",
      pages: [
        {
          id: "NTc6MTkxOjY4MQ",
        },
        {
          id: "NTc6MzcxOjU0Mw",
        },
        {
          id: "NTc6MzcxOjI2Nw",
        },
        {
          id: "NTc6Njg6NDM1",
        },
        {
          id: "NTc6Njg6MjMx",
        },
        {
          id: "NTg6OTk6Mjkx",
        },
        {
          id: "NTg6OTk6OTk",
        },
        {
          id: "NTg6MzI2OjI2Nw",
        },
        {
          id: "NTk6Njg6NDIz",
        },
        {
          id: "NjA6OTk6MTk1",
        },
        {
          id: "NjE6Njg6NTMx",
        },
        {
          id: "NjE6Njg6NDEx",
        },
        {
          id: "NjE6Mjk1OjQxMQ",
        },
        {
          id: "NjI6MzI2OjQ5NQ",
        },
        {
          id: "NjI6MzI2OjM1MQ",
        },
        {
          id: "NjM6Njg6Njk5",
        },
        {
          id: "NjM6Njg6NDEx",
        },
        {
          id: "NjQ6OTk6MjMx",
        },
        {
          id: "NjQ6MzI2OjM4Nw",
        },
        {
          id: "Njc6Njg6NTc5",
        },
        {
          id: "Njc6Mjk1OjE0Nw",
        },
        {
          id: "Njg6MTE1OjY5OQ",
        },
        {
          id: "Njk6Njg6MTIz",
        },
      ],
    },
    {
      name: "Back Matter",
      pages: [
        {
          id: "NzE6OTU6NjQx",
        },
        {
          id: "NzE6Njg6MzUx",
        },
        {
          id: "NzI6OTk6Njk5",
        },
        {
          id: "NzI6OTk6NTc5",
        },
        {
          id: "NzI6MzI2OjM1MQ",
        },
        {
          id: "NzM6Njg6Mzc1",
        },
        {
          id: "NzM6Mjk1OjQ4Mw",
        },
        {
          id: "NzQ6OTk6Njk5",
        },
        {
          id: "NzQ6MzI2OjU2Nw",
        },
        {
          id: "NzQ6MzgyOjMwMw",
        },
        {
          id: "NzU6Njg6Mzc1",
        },
        {
          id: "NzU6Mjk1OjY5OQ",
        },
        {
          id: "Nzc6MTQ5OjY2OA",
        },
        {
          id: "Nzc6Njg6NDgz",
        },
        {
          id: "Nzc6Mjk1Ojk5",
        },
        {
          id: "Nzg6MzM0OjMwMw",
        },
        {
          id: "Nzk6Njg6MzI3",
        },
        {
          id: "ODA6MzI2OjQ5NQ",
        },
        {
          id: "ODA6MzI2OjIxOQ",
        },
        {
          id: "ODI6MjUxOjY4Nw",
        },
        {
          id: "ODI6MjUxOjYxNQ",
        },
        {
          id: "ODI6MzIyOjMxNQ",
        },
        {
          id: "ODM6Njg6NTE5",
        },
        {
          id: "ODQ6MjUxOjY4Nw",
        },
        {
          id: "ODQ6MjUxOjU3OQ",
        },
        {
          id: "ODQ6MzQ3OjIxOQ",
        },
        {
          id: "ODU6Njg6MTU5",
        },
        {
          id: "ODc6Njg6Njg3",
        },
        {
          id: "ODg6MjUxOjY4Nw",
        },
        {
          id: "ODg6MjUxOjYzOQ",
        },
        {
          id: "ODg6MzM1OjM5OQ",
        },
        {
          id: "ODk6Njg6Njg3",
        },
        {
          id: "ODk6Njg6NTc5",
        },
        {
          id: "ODk6Njg6Mzg3",
        },
        {
          id: "OTA6MjUxOjY4Nw",
        },
        {
          id: "OTA6MjUxOjUwNw",
        },
        {
          id: "OTE6Njg6NjAz",
        },
        {
          id: "OTI6NjQ6NjY2",
        },
        {
          id: "OTI6MzI2OjMzOQ",
        },
        {
          id: "NTg6MTE1OjY5OQ",
        },
        {
          id: "NTk6MzExOjY5OQ",
        },
        {
          id: "NjE6MzExOjY5OQ",
        },
        {
          id: "NzM6MzExOjY5OQ",
        },
        {
          id: "Nzk6MzExOjY5OQ",
        },
        {
          id: "ODI6MjA0OjY2Mw",
        },
        {
          id: "ODM6MzcxOjY2Mw",
        },
        {
          id: "ODQ6MTE3OjY2Mw",
        },
        {
          id: "ODU6MzcxOjY2Mw",
        },
        {
          id: "ODY6MTc1OjY2Mw",
        },
        {
          id: "ODc6MzcxOjY2Mw",
        },
        {
          id: "ODg6MTIzOjY2Mw",
        },
        {
          id: "ODk6MzcxOjY2Mw",
        },
        {
          id: "OTA6MTM5OjY2Mw",
        },
        {
          id: "OTE6MzcxOjY2Mw",
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
      ],
    },
  ];
  combines = [];
  detect(pdf) {
    return (
      pdf.textDetails.some(
        (t) => t.text.trim() === "Doorway to" && t.fontId === "Gin-Regular:40",
      ) &&
      !pdf.textDetails.some(
        (t) =>
          t.text.trim() === "INTERACTIVE MAPS" && t.fontName === "Dax-Bold",
      )
    );
  }
  preprocess(text) {}
  extractDetails(text, moduleData, sectionKey) {
    this.changeFontId(text, 19, 303.75, 99, "TimesNewRomanPS-BoldMT:9");
    this.changeFontId(text, 20, 335.25, 435, "TimesNewRomanPS-BoldMT:9");
    this.changeTextFn(text, 91, 76.5, 219, (o) => o.replace(";", ","));
    this.markIndented(text, 30, 99, 363);
    this.markIndented(text, 30, 99, 351);
    this.markIndented(text, 30, 99, 339);
    this.markIndented(text, 30, 99, 327);
    this.markIndented(text, 30, 99, 315);
    this.markIndented(text, 30, 99, 303);
    this.markIndented(text, 30, 99, 291);
    this.markIndented(text, 30, 99, 279);
    this.markIndented(text, 30, 99, 267);
    this.markIndented(text, 30, 99, 255);
    this.markIndented(text, 30, 99, 243);
    this.markIndented(text, 30, 99, 231);
    this.markIndented(text, 30, 99, 171);
    this.markIndented(text, 30, 99, 159);
    this.markStartOfLine(text, 8, 396.25, 159);
    this.markStartOfLine(text, 8, 392.25, 147);
    this.markStartOfLine(text, 8, 390.25, 123);
    this.markStartOfLine(text, 22, 339.25, 207);
    this.markStartOfLine(text, 22, 352.25, 171);
    this.markStartOfLine(text, 42, 333.25, 459);
    this.markStartOfLine(text, 42, 348.25, 447);
    this.markStartOfLine(text, 42, 357.25, 435);
    this.markStartOfLine(text, 42, 370.25, 411);
    this.markStartOfLine(text, 42, 374.25, 399);
    this.markStartOfLine(text, 42, 376.25, 387);
    this.markStartOfLine(text, 42, 377.25, 351);
    this.markStartOfLine(text, 42, 355.25, 279);
    this.markStartOfLine(text, 42, 332.25, 243);
    this.markStartOfLine(text, 82, 283.5, 387);
    this.markStartOfLine(text, 82, 291.5, 375);
    this.markStartOfLine(text, 82, 297.5, 363);
    this.markStartOfLine(text, 82, 359.5, 243);
    this.markStartOfLine(text, 82, 361.5, 231);
    this.markStartOfLine(text, 82, 361.5, 219);
    this.markStartOfLine(text, 82, 359.5, 183);
    this.markStartOfLine(text, 82, 358.5, 171);
    this.markStartOfLine(text, 82, 358.5, 111);
    this.markStartOfLine(text, 82, 351.5, 87);
    this.markStartOfLine(text, 82, 340.5, 75);
    this.markStartOfLine(text, 84, 273.5, 303);
    this.markStartOfLine(text, 84, 275.5, 291);
    this.markStartOfLine(text, 84, 294.5001, 279);
    this.markStartOfLine(text, 86, 285.5001, 315);
    this.markIndented(text, 86, 350.5001, 255);
    this.markIndented(text, 86, 368.5001, 219);
    this.markIndented(text, 86, 412.5001, 183);
    this.markIndented(text, 86, 423.5001, 135);
    this.markStartOfLine(text, 88, 295.5, 471);
    this.markStartOfLine(text, 88, 310.5001, 459);
    this.markStartOfLine(text, 88, 316.5001, 315);
    this.markStartOfLine(text, 88, 314.5001, 303);
    this.markStartOfLine(text, 88, 311.5001, 279);
    this.markStartOfLine(text, 88, 348.5001, 255);
    this.markStartOfLine(text, 88, 372.5001, 243);
    this.markStartOfLine(text, 88, 362.5001, 183);
    this.markStartOfLine(text, 88, 330.5001, 171);
    this.markStartOfLine(text, 88, 325.5001, 159);
    this.markStartOfLine(text, 88, 320.5001, 147);
    this.markStartOfLine(text, 88, 315.5001, 135);
    this.markStartOfLine(text, 88, 285.5001, 111);
    this.markStartOfLine(text, 88, 284.5001, 99);
    this.markStartOfLine(text, 88, 290.5001, 75);
    this.markStartOfLine(text, 90, 327.5, 327);
    this.markStartOfLine(text, 90, 314.5, 315);
    this.markStartOfLine(text, 90, 308.5, 303);
    this.markStartOfLine(text, 90, 321.5, 291);
    this.markStartOfLine(text, 90, 325.5, 279);
    this.markStartOfLine(text, 90, 304.5, 219);
    this.markStartOfLine(text, 90, 307.5, 195);
    this.markStartOfLine(text, 90, 308.5, 183);
    this.markStartOfLine(text, 90, 310.5, 171);
    this.markStartOfLine(text, 90, 314.5, 159);
    this.markStartOfLine(text, 90, 321.5, 147);
    this.markStartOfLine(text, 90, 351.5, 135);
    this.markStartOfLine(text, 90, 368.5, 99);
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
