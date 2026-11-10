import { ExtinctionCurseBase } from "./base.js";
import { AdventureImage, CaptionImage } from "../../core/images.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class ExtinctionCurse6 extends ExtinctionCurseBase {
  prefix = "extinction-curse6";
  fullName = "Extinction Curse - The Apocalypse Prophet";
  pages = [
    this.ChapterHeadingPageLayout(6),
    this.RightSingleColumnWithSidebar(7),
    this.LeftTwoColumnWithLeftCutout(8, 236),
    this.RightTwoColumn(9),
    this.LeftTwoColumn(10),
    this.RightTwoColumnWithRightCutout(11, 330),
    this.LeftTwoColumnWithMap(12, 340),
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
    this.LeftTwoColumnWithMap(30, 330),
    this.RightTwoColumn(31),
    this.LeftTwoColumn(32),
    this.RightTwoColumn(33),
    this.LeftTwoColumnWithMap(34, 510),
    this.RightTwoColumn(35),
    this.LeftTwoColumn(36),
    this.RightTwoColumn(37),
    this.LeftTwoColumn(38),
    this.RightTwoColumnWithRightCutout(39, 420),
    this.LeftTwoColumn(40),
    this.RightTwoColumn(41),
    this.LeftTwoColumn(42),
    this.RightTwoColumn(43),
    this.LeftTwoColumn(44),
    this.RightTwoColumn(45),
    this.LeftTwoColumn(46),
    this.RightTwoColumn(47),
    this.ChapterHeadingPageLayout(48),
    this.RightSingleColumnWithSidebar(49),
    this.LeftTwoColumn(50),
    this.RightTwoColumn(51),
    this.LeftTwoColumn(52),
    this.RightTwoColumn(53),
    this.LeftTwoColumn(54),
    this.RightTwoColumn(55),
    this.LeftTwoColumn(56),
    this.RightTwoColumn(57),
    this.LeftTwoColumn(58),
    this.RightTwoColumn(59),
    this.RightChapterHeadingPageLayout(61),
    this.LeftTwoColumnWithMap(62, 330),
    this.RightTwoColumnWithRightCutout(63, 245),
    this.LeftTwoColumn(64),
    this.RightTwoColumn(65),
    this.RightChapterHeadingPageLayout(67),
    this.LeftTwoColumn(68),
    this.RightTwoColumn(69),
    this.LeftTwoColumn(70),
    this.RightTwoColumn(71),
    this.RightChapterHeadingPageLayout(73),
    this.LeftTwoColumn(74),
    this.RightTwoColumn(75),
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
        name: "ec6/map1",
        priority: 0,
      },
      nameInfo: {
        x: 213.1201,
        y: 694.6681,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 9,
      width: 626,
      height: 452,
      imageLeft: 7,
      imageRight: 608,
      imageCols: 28,
      imageTop: 21,
      imageBottom: 428,
      imageRows: 19,
      globalLight: true,
      detailsFile: "/ec/maps/ec6-map1.json",
      journals: [
        {
          x: 850,
          y: 650,
          id: "OTo2ODozMzk",
        },
      ],
      tokens: [
        {
          id: "npc29",
          x: 3100,
          y: 2100,
        },
        {
          id: "npc28",
          x: 2600,
          y: 1800,
        },
        {
          id: "npc28",
          x: 2800,
          y: 2100,
        },
        {
          id: "npc28",
          x: 2900,
          y: 1600,
        },
        {
          id: "npc28",
          x: 3100,
          y: 1800,
        },
      ],
    }),
    new ModuleScene({
      name: "map2",
      canonical: {
        name: "ec6/map2",
        priority: 0,
      },
      nameInfo: {
        x: 27,
        y: 750.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 12,
      width: 1259,
      height: 880,
      imageLeft: 21,
      imageRight: 1234,
      imageCols: 32,
      imageTop: 22,
      imageBottom: 855,
      imageRows: 22,
      globalLight: true,
      detailsFile: "/ec/maps/ec6-map2.json",
      journals: [
        {
          x: 2050,
          y: 2550,
          id: "MTM6Mjk1OjE4Mw",
        },
        {
          x: 2700,
          y: 1500,
          id: "MTU6Njg6NDk1",
        },
        {
          x: 3750,
          y: 1150,
          id: "MTU6Njg6MjMx",
        },
        {
          x: 2800,
          y: 1800,
          id: "MTU6Mjk1OjY5OQ",
        },
        {
          x: 2800,
          y: 2100,
          id: "MTU6Mjk1OjU2Nw",
        },
        {
          x: 2400,
          y: 2e3,
          id: "MTc6Njg6Njk5",
        },
        {
          x: 1600,
          y: 1800,
          id: "MTc6Njg6Mzk5",
        },
        {
          x: 1300,
          y: 1200,
          id: "MTc6Mjk1OjY1MQ",
        },
        {
          x: 2100,
          y: 1200,
          id: "MTg6MzI2OjY5OQ",
        },
        {
          x: 3750,
          y: 1850,
          id: "MjA6OTk6NjE1",
        },
        {
          x: 3800,
          y: 2500,
          id: "MjA6MzI2OjM2Mw",
        },
        {
          x: 950,
          y: 750,
          id: "MTA6MzI2OjY4Nw",
        },
      ],
      tokens: [
        {
          id: "npc4",
          x: 1e3,
          y: 2400,
        },
        {
          id: "npc4",
          x: 1700,
          y: 2400,
        },
        {
          id: "npc4",
          x: 2300,
          y: 2500,
        },
        {
          id: "npc4",
          x: 3e3,
          y: 2500,
        },
        {
          id: "npc5",
          x: 1200,
          y: 2e3,
        },
        {
          id: "npc5",
          x: 1300,
          y: 1700,
        },
        {
          id: "npc5",
          x: 1500,
          y: 1600,
        },
        {
          id: "npc5",
          x: 1600,
          y: 1900,
        },
        {
          id: "npc5",
          x: 2300,
          y: 2e3,
        },
        {
          id: "npc5",
          x: 2400,
          y: 2e3,
        },
        {
          id: "npc5",
          x: 2700,
          y: 2e3,
        },
        {
          id: "npc5",
          x: 2800,
          y: 2e3,
        },
        {
          id: "npc7",
          x: 1900,
          y: 1200,
        },
        {
          id: "npc8",
          x: 2e3,
          y: 1100,
        },
        {
          id: "npc34",
          x: 3700,
          y: 1900,
        },
      ],
    }),
    new ModuleScene({
      name: "map3",
      canonical: {
        name: "ec6/map3",
        priority: 0,
      },
      nameInfo: {
        x: 107,
        y: 274.6681,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 22,
      width: 626,
      height: 455,
      imageLeft: 18,
      imageRight: 604,
      imageCols: 27,
      imageTop: 17,
      imageBottom: 450,
      imageRows: 20,
      globalLight: true,
      detailsFile: "/ec/maps/ec6-map3.json",
      journals: [
        {
          x: 850,
          y: 650,
          id: "MjE6Mjk1OjUwNw",
        },
      ],
      tokens: [
        {
          id: "npc9",
          x: 2400,
          y: 2200,
          elite: true,
        },
        {
          id: "npc41",
          x: 2100,
          y: 800,
        },
        {
          id: "npc44",
          x: 2600,
          y: 2400,
        },
      ],
    }),
    new ModuleScene({
      name: "map4",
      canonical: {
        name: "ec6/map4",
        priority: 0,
      },
      nameInfo: {
        x: 244.6201,
        y: 275.1686,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 24,
      width: 626,
      height: 453,
      imageLeft: 3,
      imageRight: 604,
      imageCols: 28,
      imageTop: 6,
      imageBottom: 434,
      imageRows: 20,
      globalLight: true,
      detailsFile: "/ec/maps/ec6-map4.json",
      journals: [
        {
          x: 850,
          y: 650,
          id: "MjQ6OTk6NTkx",
        },
      ],
      tokens: [
        {
          id: "npc42",
          x: 2800,
          y: 1900,
        },
        {
          id: "npc11",
          x: 1700,
          y: 700,
        },
        {
          id: "npc44",
          x: 3200,
          y: 1800,
        },
        {
          id: "npc44",
          x: 3100,
          y: 2100,
        },
      ],
    }),
    new ModuleScene({
      name: "map5",
      canonical: {
        name: "ec6/map5",
        priority: 0,
      },
      nameInfo: {
        x: 244.6201,
        y: 275.1686,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 26,
      width: 626,
      height: 453,
      imageLeft: 22,
      imageRight: 603,
      imageCols: 27,
      imageTop: 23,
      imageBottom: 433,
      imageRows: 19,
      globalLight: true,
      detailsFile: "/ec/maps/ec6-map5.json",
      journals: [
        {
          x: 850,
          y: 650,
          id: "MjY6OTk6MjE5",
        },
      ],
      tokens: [
        {
          id: "npc12",
          x: 2600,
          y: 900,
        },
        {
          id: "npc40",
          x: 2800,
          y: 1e3,
        },
      ],
    }),
    new ModuleScene({
      name: "map6",
      canonical: {
        name: "ec6/map6",
        priority: 0,
      },
      nameInfo: {
        x: 31,
        y: 756.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 30,
      width: 1259,
      height: 905,
      gridType: "gridless",
      imageLeft: 0,
      imageRight: 1e3,
      imageCols: 10,
      imageTop: 0,
      imageBottom: 1e3,
      imageRows: 10,
      globalLight: true,
      detailsFile: "/ec/maps/ec6-map6.json",
    }),
    new ModuleScene({
      name: "map7",
      canonical: {
        name: "ec6/map7",
        priority: 0,
      },
      nameInfo: {
        x: 76,
        y: 694.9183,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 35,
      width: 441,
      height: 405,
      imageLeft: 10,
      imageRight: 426,
      imageCols: 20,
      imageTop: 12,
      imageBottom: 387,
      imageRows: 18,
      globalLight: true,
      detailsFile: "/ec/maps/ec6-map7.json",
      journals: [
        {
          x: 650,
          y: 550,
          id: "MzQ6MzI2OjI1NQ",
        },
      ],
      tokens: [
        {
          id: "npc33",
          x: 1500,
          y: 1200,
        },
        {
          id: "npc33",
          x: 1800,
          y: 1100,
        },
        {
          id: "npc33",
          x: 1800,
          y: 1400,
        },
        {
          id: "npc38",
          x: 1900,
          y: 1500,
        },
        {
          id: "npc38",
          x: 1400,
          y: 1500,
        },
      ],
    }),
    new ModuleScene({
      name: "map8",
      canonical: {
        name: "ec6/map8",
        priority: 0,
      },
      nameInfo: {
        x: 74,
        y: 227.7932,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 37,
      width: 910,
      height: 356,
      imageLeft: 14,
      imageRight: 897,
      imageCols: 42,
      imageTop: 20,
      imageBottom: 336,
      imageRows: 15,
      globalLight: true,
      detailsFile: "/ec/maps/ec6-map8.json",
      journals: [
        {
          x: 1150,
          y: 550,
          id: "Mzc6Njg6Mzg3",
        },
      ],
      tokens: [
        {
          id: "npc43",
          x: 3100,
          y: 1e3,
        },
        {
          id: "npc31",
          x: 3700,
          y: 1100,
        },
      ],
    }),
    new ModuleScene({
      name: "map9",
      canonical: {
        name: "ec6/map9",
        priority: 0,
      },
      nameInfo: {
        x: 303.25,
        y: 250.9183,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 39,
      width: 441,
      height: 405,
      imageLeft: 16,
      imageRight: 432,
      imageCols: 20,
      imageTop: 11,
      imageBottom: 386,
      imageRows: 18,
      globalLight: true,
      detailsFile: "/ec/maps/ec6-map9.json",
      journals: [
        {
          x: 650,
          y: 550,
          id: "Mzk6Njg6Njk5",
        },
      ],
      tokens: [
        {
          id: "npc16",
          x: 1200,
          y: 900,
        },
        {
          id: "npc27",
          x: 800,
          y: 1100,
        },
        {
          id: "npc27",
          x: 900,
          y: 700,
        },
        {
          id: "npc27",
          x: 1300,
          y: 600,
        },
      ],
    }),
    new ModuleScene({
      name: "map10",
      canonical: {
        name: "ec6/map10",
        priority: 0,
      },
      nameInfo: {
        x: 76,
        y: 694.9183,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 41,
      width: 441,
      height: 405,
      imageLeft: 9,
      imageRight: 430,
      imageCols: 19,
      imageTop: 18,
      imageBottom: 394,
      imageRows: 17,
      globalLight: true,
      detailsFile: "/ec/maps/ec6-map10.json",
      journals: [
        {
          x: 550,
          y: 550,
          id: "NDA6MzI2OjY5OQ",
        },
      ],
      tokens: [
        {
          id: "npc17",
          x: 1200,
          y: 500,
          elite: true,
        },
      ],
    }),
    new ModuleScene({
      name: "map11",
      canonical: {
        name: "ec6/map11",
        priority: 0,
      },
      nameInfo: {
        x: 334.75,
        y: 694.9183,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 46,
      width: 441,
      height: 405,
      imageLeft: 9,
      imageRight: 430,
      imageCols: 19,
      imageTop: 20,
      imageBottom: 398,
      imageRows: 17,
      globalLight: true,
      detailsFile: "/ec/maps/ec6-map11.json",
      journals: [
        {
          x: 550,
          y: 550,
          id: "NDU6Mjk1OjE4Mw",
        },
      ],
      tokens: [
        {
          id: "npc21",
          x: 1700,
          y: 800,
        },
        {
          id: "npc28",
          x: 1800,
          y: 1e3,
        },
        {
          id: "npc32",
          x: 1500,
          y: 1300,
        },
        {
          id: "npc28",
          x: 1300,
          y: 1e3,
        },
        {
          id: "npc28",
          x: 900,
          y: 900,
        },
        {
          id: "npc28",
          x: 1e3,
          y: 600,
        },
      ],
    }),
    new ModuleScene({
      name: "map12",
      canonical: {
        name: "ec6/map12",
        priority: 0,
      },
      nameInfo: {
        x: 85,
        y: 317.2502,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 50,
      width: 622,
      height: 631,
      imageLeft: 62,
      imageRight: 566,
      imageCols: 48,
      imageTop: 79,
      imageBottom: 574,
      imageRows: 47,
      globalLight: true,
      detailsFile: "/ec/maps/ec6-map12.json",
      journals: [
        {
          x: 4500,
          y: 6600,
          id: "NDk6Njg6NjAz",
        },
        {
          x: 4500,
          y: 5500,
          id: "NTA6MzQ2OjMxNQ",
        },
        {
          x: 5550,
          y: 4350,
          id: "NTE6Njg6NDM1",
        },
        {
          x: 3300,
          y: 5500,
          id: "NTM6Mjk1OjQ4Mw",
        },
        {
          x: 1550,
          y: 1550,
          id: "NTA6MzI2OjYyNw",
        },
      ],
      tokens: [
        {
          id: "npc27",
          x: 2e3,
          y: 6600,
        },
        {
          id: "npc27",
          x: 6500,
          y: 6600,
        },
        {
          id: "npc27",
          x: 6500,
          y: 2100,
        },
        {
          id: "npc27",
          x: 2e3,
          y: 2100,
        },
        {
          id: "npc39",
          x: 4400,
          y: 5400,
        },
        {
          id: "npc33",
          x: 3100,
          y: 5800,
        },
        {
          id: "npc33",
          x: 3400,
          y: 5700,
        },
        {
          id: "npc33",
          x: 3500,
          y: 5100,
        },
        {
          id: "npc33",
          x: 3200,
          y: 4900,
        },
        {
          id: "npc33",
          x: 3300,
          y: 4600,
        },
        {
          id: "npc33",
          x: 3200,
          y: 3500,
        },
        {
          id: "npc33",
          x: 3100,
          y: 3600,
        },
        {
          id: "npc33",
          x: 3500,
          y: 3500,
        },
        {
          id: "npc33",
          x: 3100,
          y: 4400,
        },
        {
          id: "npc33",
          x: 3500,
          y: 4300,
        },
        {
          id: "npc33",
          x: 3600,
          y: 4300,
        },
        {
          id: "npc33",
          x: 2900,
          y: 3e3,
        },
        {
          id: "npc33",
          x: 3e3,
          y: 3e3,
        },
        {
          id: "npc33",
          x: 3300,
          y: 3e3,
        },
        {
          id: "npc33",
          x: 3400,
          y: 3e3,
        },
        {
          id: "npc33",
          x: 3600,
          y: 5200,
        },
        {
          id: "npc33",
          x: 3400,
          y: 5900,
        },
        {
          id: "npc33",
          x: 3100,
          y: 5900,
        },
        {
          id: "npc22",
          x: 5200,
          y: 3900,
        },
        {
          id: "npc13",
          x: 5700,
          y: 5e3,
        },
        {
          id: "npc13",
          x: 5700,
          y: 5400,
        },
      ],
    }),
    new ModuleScene({
      name: "map13",
      canonical: {
        name: "ec6/map13",
        priority: 0,
      },
      nameInfo: {
        x: 301,
        y: 91.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 55,
      width: 478,
      height: 498,
      imageLeft: 29,
      imageRight: 442,
      imageCols: 37,
      imageTop: 40,
      imageBottom: 466,
      imageRows: 38,
      globalLight: true,
      detailsFile: "/ec/maps/ec6-map13.json",
      journals: [
        {
          x: 3200,
          y: 1700,
          id: "NTA6OTk6Njk5",
        },
        {
          x: 3750,
          y: 2750,
          id: "NTU6Njg6NjM5",
        },
        {
          x: 2650,
          y: 4050,
          id: "NTU6Njg6MTcx",
        },
        {
          x: 3200,
          y: 3400,
          id: "NTc6Njg6Njk5",
        },
        {
          x: 1150,
          y: 1650,
          id: "NTU6Njg6Njk5",
        },
        {
          x: 1150,
          y: 1550,
          id: "NTQ6MzI2OjE4Mw",
        },
      ],
      tokens: [
        {
          id: "npc28",
          x: 2400,
          y: 1600,
        },
        {
          id: "npc28",
          x: 2700,
          y: 1600,
        },
        {
          id: "npc28",
          x: 3400,
          y: 1600,
        },
        {
          id: "npc28",
          x: 3700,
          y: 1600,
        },
        {
          id: "npc28",
          x: 2100,
          y: 1600,
        },
        {
          id: "npc28",
          x: 4e3,
          y: 1600,
        },
        {
          id: "npc29",
          x: 3100,
          y: 2500,
        },
        {
          id: "npc29",
          x: 4e3,
          y: 2300,
        },
        {
          id: "npc28",
          x: 3800,
          y: 3300,
        },
        {
          id: "npc28",
          x: 4e3,
          y: 2700,
        },
        {
          id: "npc24",
          x: 2300,
          y: 3800,
        },
        {
          id: "npc25",
          x: 2800,
          y: 3900,
        },
        {
          id: "npc27",
          x: 2200,
          y: 3500,
        },
        {
          id: "npc27",
          x: 3e3,
          y: 4100,
        },
      ],
    }),
    new ModuleScene({
      name: "map14",
      canonical: {
        name: "ec6/map14",
        priority: 0,
      },
      nameInfo: {
        x: 298,
        y: 591,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 58,
      width: 297,
      height: 296,
      imageLeft: 34,
      imageRight: 264,
      imageCols: 14,
      imageTop: 32,
      imageBottom: 263,
      imageRows: 14,
      globalLight: true,
      detailsFile: "/ec/maps/ec6-map14.json",
      journals: [
        {
          x: 1700,
          y: 1600,
          id: "NTc6Mjk1OjY1MQ",
        },
      ],
      tokens: [
        {
          id: "npc36",
          x: 1300,
          y: 900,
        },
        {
          id: "npc35",
          x: 1600,
          y: 1200,
        },
        {
          id: "npc27",
          x: 1e3,
          y: 500,
        },
        {
          id: "npc27",
          x: 600,
          y: 900,
        },
      ],
    }),
    new ModuleScene({
      name: "map15",
      canonical: {
        name: "ec6/map15",
        priority: 0,
      },
      nameInfo: {
        x: 39,
        y: 753,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 62,
      width: 1261,
      height: 905,
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
      name: "journal7",
      page: 4,
      width: 1261,
      height: 1636,
    }),
    new AdventureImage({
      name: "journal8",
      page: 6,
      width: 1259,
      height: 805,
    }),
    new AdventureImage({
      name: "journal9",
      page: 28,
      width: 1259,
      height: 805,
    }),
    new AdventureImage({
      name: "journal10",
      page: 48,
      width: 1259,
      height: 805,
    }),
    new AdventureImage({
      name: "journal11",
      page: 60,
      width: 1260,
      height: 1636,
    }),
    new AdventureImage({
      name: "journal12",
      page: 66,
      width: 1261,
      height: 1636,
    }),
    new AdventureImage({
      name: "journal13",
      page: 68,
      width: 570,
      height: 570,
    }),
    new AdventureImage({
      name: "journal14",
      page: 69,
      width: 601,
      height: 601,
    }),
    new AdventureImage({
      name: "journal15",
      page: 70,
      width: 600,
      height: 763,
    }),
    new AdventureImage({
      name: "journal16",
      page: 71,
      width: 564,
      height: 564,
      index: 1,
    }),
    new AdventureImage({
      name: "journal17",
      page: 72,
      width: 1261,
      height: 1636,
    }),
    new AdventureImage({
      name: "journal18",
      page: 76,
      width: 534,
      height: 534,
    }),
    new AdventureImage({
      name: "journal19",
      page: 77,
      width: 558,
      height: 558,
      index: 1,
    }),
    new CaptionImage({
      name: "journal20",
      page: 33,
      width: 797,
      height: 936,
    }),
    new CaptionImage({
      name: "journal21",
      page: 35,
      width: 876,
      height: 1246,
    }),
    new CaptionImage({
      name: "journal22",
      page: 36,
      width: 897,
      height: 1338,
    }),
    new CaptionImage({
      name: "journal23",
      page: 38,
      width: 905,
      height: 1317,
    }),
    new CaptionImage({
      name: "journal24",
      page: 47,
      width: 923,
      height: 1346,
    }),
    new CaptionImage({
      name: "journal25",
      page: 59,
      width: 515,
      height: 504,
    }),
    new CaptionImage({
      name: "journal26",
      page: 65,
      width: 803,
      height: 934,
    }),
    new CaptionImage({
      name: "journal27",
      page: 75,
      width: 780,
      height: 1061,
    }),
    new CaptionImage({
      name: "journal28",
      page: 79,
      width: 930,
      height: 1356,
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 7,
        x: 295.8741,
        y: 104.0025,
      },
      page: 7,
      width: 479,
      height: 515,
      tokenX: 34,
      tokenY: 105,
      tokenSize: 627,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 10,
        x: 297.6777,
        y: 426.5905,
      },
      page: 10,
      width: 511,
      height: 549,
      tokenX: 51,
      tokenY: 63,
      tokenSize: 633,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.z9jEyLrsoBMmh9qg",
      name: {
        page: 14,
        x: 112.2324,
        y: 162.5905,
      },
      page: 14,
      width: 818,
      height: 1279,
      tokenX: -281,
      tokenY: 17,
      tokenSize: 327,
      forIds: ["MTM6Mjk1OjMxNQ"],
    }),
    new ModuleNpc({
      id: "npc4",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.Sxip3Rmi0PFpzHNw",
      page: 15,
      width: 743,
      height: 1081,
      tokenX: 162,
      tokenY: 101,
      tokenSize: 941,
      forIds: ["MTQ6MzI2OjI3OQ"],
    }),
    new ModuleNpc({
      id: "npc5",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.DXNDZNHSZxlNXJnk",
      page: 16,
      width: 780,
      height: 1270,
      tokenX: -122,
      tokenY: -27,
      tokenSize: 346,
      forIds: ["MTY6MzI2OjU0Mw", "MTc6Njg6NDQ3", "MTc6Mjk1OjY5OQ"],
    }),
    new ModuleNpc({
      id: "npc6",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.25BUnECSaTWkHqZQ",
      page: 18,
      width: 830,
      height: 778,
      tokenX: -15,
      tokenY: 94,
      tokenSize: 830,
      forIds: ["MTc6Mjk1OjMyNw"],
    }),
    new ModuleNpc({
      id: "npc7",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.vxFQrDnQqUpGpQmK",
      page: 19,
      width: 510,
      height: 555,
      tokenX: 61,
      tokenY: 68,
      tokenSize: 639,
      forIds: ["MTk6Njg6MjQz"],
    }),
    new ModuleNpc({
      id: "npc8",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.XqIKuHK4R6yFOKbs",
      name: {
        page: 20,
        x: 304.0804,
        y: 426.5905,
      },
      page: 20,
      width: 510,
      height: 553,
      tokenX: 26,
      tokenY: 65,
      tokenSize: 609,
      forIds: ["MTk6Mjk1OjExMQ"],
    }),
    new ModuleNpc({
      id: "npc9",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.RDFvGocLW0OuHmlC",
      name: {
        page: 23,
        x: 404.7444,
        y: 102.5904,
      },
      page: 23,
      width: 1009,
      height: 1238,
      tokenX: -413,
      tokenY: -79,
      tokenSize: 706,
      forIds: ["MjI6MzI2OjU3OQ"],
    }),
    new ModuleNpc({
      id: "npc10",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 24,
        x: 301.8535,
        y: 432.5905,
      },
      page: 24,
      width: 510,
      height: 553,
      tokenX: 60,
      tokenY: 80,
      tokenSize: 637,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc11",
      name: {
        page: 25,
        x: 354.4503,
        y: 114.5905,
      },
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.zkl6planCbeCuAdS",
      page: 25,
      width: 1075,
      height: 1076,
      tokenX: -295,
      tokenY: -33,
      tokenSize: 460,
      forIds: ["MjU6Njg6NTE5"],
    }),
    new ModuleNpc({
      id: "npc12",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.M3pYUyhrmylFqS0B",
      page: 27,
      width: 911,
      height: 1222,
      tokenX: -183,
      tokenY: 101,
      tokenSize: 466,
      forIds: ["Mjc6Njg6NjYz"],
    }),
    new ModuleNpc({
      id: "npc13",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.keCgklXcy4HZgQIL",
      page: 31,
      width: 801,
      height: 1182,
      tokenX: -287,
      tokenY: 44,
      tokenSize: 342,
      forIds: ["NTI6MzI2OjE3MQ", "MzE6Njg6Mzg3"],
    }),
    new ModuleNpc({
      id: "npc14",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.synED0IrMbFHimtc",
      page: 32,
      width: 439,
      height: 594,
      tokenX: 115,
      tokenY: 98,
      tokenSize: 706,
      forIds: ["MzM6Njg6NjAz"],
    }),
    new ModuleNpc({
      id: "npc15",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.R3SbxfWLp8xUvXUP",
      page: 34,
      width: 853,
      height: 937,
      tokenX: -250,
      tokenY: 70,
      tokenSize: 489,
      forIds: ["MzQ6OTk6NDQ3"],
    }),
    new ModuleNpc({
      id: "npc16",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.sPuh6Ahatn0Vhn7P",
      page: 40,
      width: 864,
      height: 1182,
      tokenX: 159,
      tokenY: 0,
      tokenSize: 1182,
      forIds: ["Mzk6Mjk1OjM2Mw"],
    }),
    new ModuleNpc({
      id: "npc17",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.k0HUy6WdbZUNfG8X",
      page: 41,
      width: 990,
      height: 1014,
      tokenX: -469,
      tokenY: -197,
      tokenSize: 622,
      forIds: ["NDE6Njg6NDIz"],
    }),
    new ModuleNpc({
      id: "npc18",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.HEeRO5IF4lAGfDqE",
      page: 42,
      width: 836,
      height: 1234,
      tokenX: -220,
      tokenY: 7,
      tokenSize: 478,
      forIds: ["NDI6MzI2OjY1MQ"],
    }),
    new ModuleNpc({
      id: "npc19",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 43,
        x: 361.3481,
        y: 118.6814,
      },
      page: 43,
      width: 734,
      height: 1198,
      tokenX: -73,
      tokenY: -45,
      tokenSize: 470,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc20",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.c0zqasudrwZU3fdw",
      name: {
        page: 44,
        x: 130.3427,
        y: 128.6359,
      },
      page: 44,
      width: 867,
      height: 1095,
      tokenX: -188,
      tokenY: 40,
      tokenSize: 423,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc21",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.5tlPKUZroqzycuzD",
      page: 46,
      width: 843,
      height: 1168,
      tokenX: -226,
      tokenY: -159,
      tokenSize: 412,
      forIds: ["NDY6MzM0OjE0Nw"],
    }),
    new ModuleNpc({
      id: "npc22",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.HLM55InRGOAUkqoH",
      name: {
        page: 52,
        x: 178.8648,
        y: 126.5905,
      },
      page: 52,
      width: 868,
      height: 1171,
      tokenX: -153,
      tokenY: 75,
      tokenSize: 527,
      forIds: ["NTI6MzI2OjIxOQ"],
    }),
    new ModuleNpc({
      id: "npc23",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.YaKW9i3v9nn8Blij",
      name: {
        page: 54,
        x: 285.2944,
        y: 410.136,
      },
      page: 54,
      width: 528,
      height: 610,
      tokenX: 71,
      tokenY: 92,
      tokenSize: 694,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc24",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.9vNYtJZiseCEf4wt",
      name: {
        page: 56,
        x: 388.25,
        y: 375,
      },
      page: 56,
      width: 918,
      height: 1370,
      tokenX: -276,
      tokenY: -347,
      tokenSize: 362,
      forIds: ["NTY6Mzg4OjM3NQ"],
      elite: true,
    }),
    new ModuleNpc({
      id: "npc25",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.ImueS9YFhV6sxqBP",
      name: {
        page: 57,
        x: 323.125,
        y: 234.5904,
      },
      page: 57,
      width: 879,
      height: 1126,
      tokenX: -238,
      tokenY: -8,
      tokenSize: 370,
      forIds: ["NTY6MzcyOjMxNQ"],
      elite: true,
    }),
    new ModuleNpc({
      id: "npc26",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.GuJJJzmjLKbkZUur",
      page: 80,
      width: 901,
      height: 1023,
      tokenX: 156,
      tokenY: 55,
      tokenSize: 1023,
      forIds: ["ODA6MjUxOjU5MQ"],
    }),
    new ModuleNpc({
      id: "npc27",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.i6t819VnEr1ESCAd",
      page: 81,
      width: 1126,
      height: 1170,
      tokenX: -233,
      tokenY: -24,
      tokenSize: 442,
      forIds: [
        "ODE6Njg6NjUx",
        "NTY6MzYzOjI2Nw",
        "NTg6MzI2OjI1NQ",
        "NDA6OTk6NjUx",
        "NDk6Njg6OTk",
      ],
    }),
    new ModuleNpc({
      id: "npc28",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.HCxhltvoCdy3RXlH",
      page: 82,
      width: 1205,
      height: 1125,
      tokenX: -244,
      tokenY: 83,
      tokenSize: 505,
      forIds: [
        "ODI6MjUxOjU5MQ",
        "MzI6OTk6Njk5",
        "NTU6Njg6MjY3",
        "OToyOTU6MTk1",
        "NDc6Njg6Njk5",
        "NTA6OTk6Mzc1",
      ],
    }),
    new ModuleNpc({
      id: "npc29",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.Xva8XyRrsHB6S7e8",
      page: 83,
      width: 861,
      height: 1075,
      tokenX: -246,
      tokenY: -40,
      tokenSize: 599,
      forIds: ["ODM6Njg6NTQz", "OToyOTU6MjQz", "NTU6Njg6MzE1"],
    }),
    new ModuleNpc({
      id: "npc30",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.synED0IrMbFHimtc",
      page: 84,
      width: 742,
      height: 1120,
      tokenX: -161,
      tokenY: 106,
      tokenSize: 448,
      forIds: ["ODQ6MjUxOjU5MQ"],
    }),
    new ModuleNpc({
      id: "npc31",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.Ww4WnWmMJcfqZlCX",
      page: 85,
      width: 805,
      height: 1294,
      tokenX: -435,
      tokenY: -94,
      tokenSize: 370,
      forIds: ["ODU6Njg6Njk5", "Mzg6MzI2OjI0Mw"],
    }),
    new ModuleNpc({
      id: "npc32",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.QcJtBai5JViNFqUC",
      page: 86,
      width: 960,
      height: 888,
      tokenX: 38,
      tokenY: -222,
      tokenSize: 764,
      forIds: ["ODY6MjUxOjUwNw", "NDc6Njg6NjUx", "MzI6OTk6NjUx"],
    }),
    new ModuleNpc({
      id: "npc33",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.YaKW9i3v9nn8Blij",
      page: 87,
      width: 842,
      height: 1115,
      tokenX: -431,
      tokenY: 57,
      tokenSize: 387,
      forIds: ["ODc6Njg6NjM5", "NTQ6MzI2OjY5OQ", "MzY6MzI2OjYyNw"],
    }),
    new ModuleNpc({
      id: "npc34",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.jwcMb71QRhMw94Id",
      page: 89,
      width: 916,
      height: 1221,
      tokenX: -263,
      tokenY: 15,
      tokenSize: 353,
      forIds: ["ODk6Njg6NDcx", "MjA6OTk6OTk"],
    }),
    new ModuleNpc({
      id: "npc35",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.2bu9oGbB7UUTq2sR",
      page: 91,
      width: 851,
      height: 1261,
      tokenX: -212,
      tokenY: 15,
      tokenSize: 393,
      forIds: ["OTE6Njg6NjAz", "NTg6MzI2OjMwMw"],
    }),
    new ModuleNpc({
      id: "npc36",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.fsPWWmIao1eFTAV4",
      page: 93,
      width: 926,
      height: 1267,
      tokenX: -222,
      tokenY: -210,
      tokenSize: 427,
      forIds: ["OTI6MzI2OjI5MQ", "NTg6MzI2OjM1MQ"],
    }),
    new ModuleNpc({
      id: "npc37",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.Rma6WvkTkRW1H0ro",
      label: "AV",
      forIds: ["NDM6Njg6NTY3"],
    }),
    new ModuleNpc({
      id: "npc38",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.hSSe2FxlXKvjKsEw",
      label: "A",
      forIds: ["MzY6MzI2OjU3OQ"],
    }),
    new ModuleNpc({
      id: "npc39",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.1HIqZAGVSR2pAiY6",
      label: "APT",
      forIds: ["NTE6Njg6Njk5"],
    }),
    new ModuleNpc({
      id: "npc40",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.BPznJcLvfkpfeQ2q",
      label: "G",
      forIds: ["Mjc6Njg6MTU5"],
    }),
    new ModuleNpc({
      id: "npc41",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.Np5Z7RMQzvSNnH0h",
      label: "IL",
      forIds: ["MjI6MzI2OjUzMQ"],
    }),
    new ModuleNpc({
      id: "npc42",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.mlktvPVq3mb5DTpP",
      label: "SX",
      forIds: ["MjQ6MzI2OjY5OQ"],
    }),
    new ModuleNpc({
      id: "npc43",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.zPXXUNE3m9VdrF9z",
      label: "TT",
      forIds: ["Mzg6MzI2OjYxNQ"],
    }),
    new ModuleNpc({
      id: "npc44",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.RDFvGocLW0OuHmlC",
      label: "W",
      forIds: ["MjI6MzI2OjQ4Mw", "MjU6Njg6NDQ3"],
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
          id: "Nzo2ODo1NTU",
        },
        {
          id: "Nzo2ODozODc",
        },
        {
          id: "Nzo2ODoyMTk",
        },
        {
          id: "ODozMjY6NTQz",
        },
        {
          id: "ODozMjY6MTIz",
        },
        {
          id: "OTo2ODozMzk",
        },
        {
          id: "MTA6MzI2OjY4Nw",
        },
        {
          id: "MTE6Njg6NTkx",
        },
        {
          id: "MTM6Njg6NjM5",
        },
        {
          id: "MTM6Mjk1OjE4Mw",
        },
        {
          id: "MTU6Njg6NDk1",
        },
        {
          id: "MTU6Njg6MjMx",
        },
        {
          id: "MTU6Mjk1OjY5OQ",
        },
        {
          id: "MTU6Mjk1OjU2Nw",
        },
        {
          id: "MTc6Njg6Njk5",
        },
        {
          id: "MTc6Njg6Mzk5",
        },
        {
          id: "MTc6Mjk1OjY1MQ",
        },
        {
          id: "MTg6MzI2OjY5OQ",
        },
        {
          id: "MjA6OTk6NjE1",
        },
        {
          id: "MjA6MzI2OjM2Mw",
        },
        {
          id: "MjA6MzI2OjE4Mw",
        },
        {
          id: "MjE6Mjk1OjY5OQ",
        },
        {
          id: "MjE6Mjk1OjUwNw",
        },
        {
          id: "MjI6MzI2OjMzOQ",
        },
        {
          id: "MjQ6OTk6NTkx",
        },
        {
          id: "MjY6OTk6MjE5",
        },
        {
          id: "ODoxMDg6Njg3",
        },
        {
          id: "MTE6MzA0OjY4Nw",
        },
      ],
    },
    {
      name: "Chapter 2",
      pages: [
        {
          id: "Mjg6MzkwOjM2MQ",
        },
        {
          id: "Mjk6MzcxOjY5OQ",
        },
        {
          id: "Mjk6MzcxOjQ5NQ",
        },
        {
          id: "Mjk6Njg6Njk5",
        },
        {
          id: "MzE6Njg6NjE1",
        },
        {
          id: "MzE6Njg6Mjc5",
        },
        {
          id: "MzI6OTk6MzYz",
        },
        {
          id: "MzM6Njg6NTU1",
        },
        {
          id: "MzM6Njg6Mzk5",
        },
        {
          id: "MzQ6MzI2OjI1NQ",
        },
        {
          id: "MzY6MzI2OjE4Mw",
        },
        {
          id: "Mzc6Njg6Mzg3",
        },
        {
          id: "Mzk6Njg6Njk5",
        },
        {
          id: "NDA6MzI2OjY5OQ",
        },
        {
          id: "NDE6Njg6Mjc5",
        },
        {
          id: "NDI6MzI2OjMzOQ",
        },
        {
          id: "NDQ6OTk6NjM5",
        },
        {
          id: "NDU6Njg6MTEx",
        },
        {
          id: "NDU6Mjk1OjE4Mw",
        },
        {
          id: "NDc6Njg6MzM5",
        },
        {
          id: "Mzk6MzA0OjY4Nw",
        },
      ],
    },
    {
      name: "Chapter 3",
      pages: [
        {
          id: "NDg6MzkwOjM2MQ",
        },
        {
          id: "NDk6MzcxOjY5OQ",
        },
        {
          id: "NDk6MzcxOjQ4Mw",
        },
        {
          id: "NDg6MzI2OjE3MQ",
        },
        {
          id: "NDk6Njg6NjAz",
        },
        {
          id: "NTA6OTk6Njk5",
        },
        {
          id: "NTA6MzI2OjYyNw",
        },
        {
          id: "NTA6MzI2OjQ3MQ",
        },
        {
          id: "NTA6MzQ2OjMxNQ",
        },
        {
          id: "NTE6Njg6NDM1",
        },
        {
          id: "NTM6Mjk1OjQ4Mw",
        },
        {
          id: "NTQ6MzI2OjE4Mw",
        },
        {
          id: "NTU6Njg6Njk5",
        },
        {
          id: "NTU6Njg6NjM5",
        },
        {
          id: "NTU6Njg6MTcx",
        },
        {
          id: "NTc6Njg6Njk5",
        },
        {
          id: "NTc6Mjk1OjY1MQ",
        },
        {
          id: "NTk6Njg6Mzc1",
        },
        {
          id: "NTk6MzkxOjU2Nw",
        },
      ],
    },
    {
      name: "Back Matter",
      pages: [
        {
          id: "NjE6MTUwOjY1NA",
        },
        {
          id: "NjE6Njg6Mjkx",
        },
        {
          id: "NjE6Mjk1OjE4Mw",
        },
        {
          id: "NjI6MzI2OjE4Mw",
        },
        {
          id: "Njc6MTI1OjY1NA",
        },
        {
          id: "Njc6MzA0OjI5MQ",
        },
        {
          id: "Njg6OTk6Njk5",
        },
        {
          id: "Njg6MzI2OjY5OQ",
        },
        {
          id: "Njg6MzI2OjI0Mw",
        },
        {
          id: "Njk6Njg6Njk5",
        },
        {
          id: "Njk6Mjk1OjY5OQ",
        },
        {
          id: "Njk6MzA2OjM2Mw",
        },
        {
          id: "NzA6OTk6Njk5",
        },
        {
          id: "NzA6OTk6OTk",
        },
        {
          id: "NzA6MzM4OjM2Mw",
        },
        {
          id: "NzE6Njg6Njk5",
        },
        {
          id: "NzE6Mjk1OjYyNw",
        },
        {
          id: "NzE6Mjk1OjI3OQ",
        },
        {
          id: "NzM6MTUwOjY1NA",
        },
        {
          id: "NzM6Njg6NDcx",
        },
        {
          id: "NzM6Njg6MTEx",
        },
        {
          id: "NzQ6OTk6Njk5",
        },
        {
          id: "NzY6OTk6Njk5",
        },
        {
          id: "Nzg6OTk6Njk5",
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
          id: "ODI6MjUxOjYzOQ",
        },
        {
          id: "ODM6Njg6NjAz",
        },
        {
          id: "ODQ6MjUxOjY5OQ",
        },
        {
          id: "ODQ6MjUxOjYzOQ",
        },
        {
          id: "ODQ6MzE1OjEzNQ",
        },
        {
          id: "ODY6MjUxOjY5OQ",
        },
        {
          id: "ODc6Njg6Njk5",
        },
        {
          id: "ODg6MTQwOjY1OA",
        },
        {
          id: "ODg6MzI2OjE0Nw",
        },
        {
          id: "OTA6MjA4OjY2MA",
        },
        {
          id: "OTA6MzI2OjMyNw",
        },
        {
          id: "OTI6MTE5OjY1MQ",
        },
        {
          id: "OTI6Mzc4OjY1MQ",
        },
        {
          id: "OTI6MzI2OjQ1OQ",
        },
        {
          id: "NjM6MzA0OjY4Nw",
        },
        {
          id: "ODA6MTA3OjY2Mw",
        },
        {
          id: "ODE6MzcxOjY2Mw",
        },
        {
          id: "ODI6MTY1OjY2Mw",
        },
        {
          id: "ODM6MzcxOjY2Mw",
        },
        {
          id: "ODQ6MTY0OjY2Mw",
        },
        {
          id: "ODU6MzcxOjY2Mw",
        },
        {
          id: "ODY6MTI0OjY2Mw",
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
        {
          id: "journal26",
        },
        {
          id: "journal27",
        },
        {
          id: "journal28",
        },
      ],
    },
  ];
  combines = [];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "EXTINCTION CURSE: THE APOCALYPSE PROPHET" &&
        t.fontId === "Gin-Regular:12",
    );
  }
  finalize(moduleData) {}
}
