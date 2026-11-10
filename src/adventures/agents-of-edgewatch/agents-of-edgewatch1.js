import { AgentsOfEdgewatchBase } from "./base.js";
import { AdventureImage, CaptionImage } from "../../core/images.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class AgentsOfEdgewatch1 extends AgentsOfEdgewatchBase {
  prefix = "agents-of-edgewatch1";
  fullName = "Agents of Edgewatch - Devil at the Dreaming Palace";
  pages = [
    this.ChapterHeadingPageLayout(6),
    this.RightSingleColumnWithSidebar(7),
    this.LeftTwoColumnWithLeftCutout(8, 270),
    this.RightTwoColumn(9),
    this.LeftTwoColumnWithMap(10, 370),
    this.RightTwoColumn(11),
    this.LeftTwoColumn(12),
    this.RightTwoColumn(13),
    this.LeftTwoColumnWithMap(14, 370),
    this.RightTwoColumn(15),
    this.LeftTwoColumn(16),
    this.RightTwoColumn(17),
    this.LeftTwoColumn(18),
    this.RightTwoColumn(19),
    this.LeftTwoColumn(20),
    this.RightTwoColumn(21),
    this.ChapterHeadingPageLayout(22),
    this.RightSingleColumnWithSidebar(23),
    this.LeftTwoColumnWithMap(24, 365),
    this.RightTwoColumnWithRightCutout(25, 235),
    this.LeftTwoColumn(26),
    this.RightTwoColumn(27),
    this.LeftTwoColumn(28),
    this.RightTwoColumn(29),
    this.LeftTwoColumn(30),
    this.RightTwoColumn(31),
    this.ChapterHeadingPageLayout(32),
    this.RightSingleColumnWithSidebar(33),
    this.LeftTwoColumnWithMap(34, 365),
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
    this.LeftTwoColumnWithMap(48, 450),
    this.RightTwoColumn(49),
    this.LeftTwoColumn(50),
    this.RightTwoColumn(51),
    this.LeftTwoColumn(52),
    this.RightTwoColumn(53),
    this.LeftTwoColumnWithMap(54, 500),
    this.RightTwoColumn(55),
    this.LeftTwoColumn(56),
    this.RightTwoColumn(57),
    this.LeftTwoColumnWithTopHandout(58, 580),
    this.RightTwoColumn(59),
    this.LeftTwoColumnWithMap(60, 500),
    this.RightTwoColumn(61),
    this.LeftTwoColumn(62),
    this.RightTwoColumn(63),
    this.LeftTwoColumn(64),
    this.RightTwoColumn(65),
    this.RightTwoColumn(67),
    this.LeftTwoColumnWithMap(68, 365),
    this.RightTwoColumn(69),
    this.LeftTwoColumnWithLeftCutout(70, 300),
    this.RightTwoColumn(71),
    this.LeftTwoColumn(72),
    this.RightTwoColumn(73),
    this.LeftTwoColumn(74),
    this.RightTwoColumnWithMap(75, 425),
    this.RightTwoColumnWithRightCutout(77, 365),
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
        name: "cities/Absalom",
        priority: 1,
      },
      nameInfo: {
        x: 39.6892,
        y: 62.6154,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 1261,
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
        name: "aoe1/map2",
        priority: 0,
      },
      nameInfo: {
        x: 426,
        y: 750.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 10,
      width: 1259,
      height: 830,
      imageLeft: 29,
      imageRight: 1196,
      imageCols: 17,
      imageTop: 15,
      imageBottom: 770,
      imageRows: 11,
      globalLight: true,
      journals: [
        {
          x: 550,
          y: 450,
          id: "ODozMjY6MTcx",
        },
      ],
      tokens: [
        {
          id: "npc61",
          x: 1300,
          y: 1300,
        },
        {
          id: "npc42",
          x: 1300,
          y: 1400,
        },
        {
          id: "npc36",
          x: 1200,
          y: 1400,
        },
        {
          id: "npc71",
          x: 1200,
          y: 1300,
        },
        {
          id: "npc1",
          x: 1300,
          y: 600,
        },
      ],
    }),
    new ModuleScene({
      name: "map3",
      canonical: {
        name: "aoe1/map3",
        priority: 0,
      },
      nameInfo: {
        x: 27,
        y: 750.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 14,
      width: 1259,
      height: 830,
      imageLeft: 16,
      imageRight: 1227,
      imageCols: 30,
      imageTop: 33,
      imageBottom: 800,
      imageRows: 19,
      globalLight: true,
      detailsFile: "/aoe/maps/aoe1-map3.json",
      journals: [
        {
          x: 1150,
          y: 2150,
          id: "MTU6MzQ2OjU3OQ",
        },
        {
          x: 1050,
          y: 1450,
          id: "MTU6Mjk1OjI0Mw",
        },
        {
          x: 950,
          y: 950,
          id: "MTY6OTk6NTMx",
        },
        {
          x: 1850,
          y: 1950,
          id: "MTY6NDE5OjE3MQ",
        },
        {
          x: 1950,
          y: 1350,
          id: "MTc6Njg6NTA3",
        },
        {
          x: 2850,
          y: 1450,
          id: "MTc6Njg6MjY3",
        },
        {
          x: 2850,
          y: 2150,
          id: "MTc6Mjk1OjQ1OQ",
        },
        {
          x: 3450,
          y: 1150,
          id: "MTc6Mjk1OjE4Mw",
        },
        {
          x: 3450,
          y: 1350,
          id: "MTg6OTk6NTA3",
        },
        {
          x: 3750,
          y: 1950,
          id: "MTg6MzQ1OjE1OQ",
        },
        {
          x: 3750,
          y: 2350,
          id: "MTk6Mjk1OjYzOQ",
        },
        {
          x: 3350,
          y: 2450,
          id: "MTk6Mjk1OjIzMQ",
        },
        {
          x: 3050,
          y: 650,
          id: "MjA6OTk6NDIz",
        },
        {
          x: 2450,
          y: 650,
          id: "MjA6MzI2OjYwMw",
        },
        {
          x: 1850,
          y: 950,
          id: "MjE6Njg6Njk5",
        },
        {
          x: 1750,
          y: 450,
          id: "MTU6Njg6Njk5",
        },
        {
          x: 1950,
          y: 450,
          id: "MjE6Mjk1OjQxMQ",
        },
      ],
      tokens: [
        {
          id: "npc38",
          x: 1200,
          y: 2e3,
        },
        {
          id: "npc56",
          x: 800,
          y: 1300,
        },
        {
          id: "npc6",
          x: 1e3,
          y: 1e3,
          elite: true,
        },
        {
          id: "npc68",
          x: 1800,
          y: 1200,
        },
        {
          id: "npc68",
          x: 2e3,
          y: 1200,
        },
        {
          id: "npc39",
          x: 2700,
          y: 1400,
        },
        {
          id: "npc7",
          x: 3500,
          y: 1700,
        },
        {
          id: "npc51",
          x: 3700,
          y: 1500,
        },
        {
          id: "npc67",
          x: 2400,
          y: 800,
        },
      ],
    }),
    new ModuleScene({
      name: "map4",
      canonical: {
        name: "aoe1/map4",
        priority: 0,
      },
      nameInfo: {
        x: 27,
        y: 753.8362,
      },
      nameFn: (name) => this.sentenceCase(name).substring(0, 17),
      page: 24,
      width: 1259,
      height: 828,
      imageLeft: 4,
      imageRight: 1258,
      imageCols: 51,
      imageTop: 3,
      imageBottom: 814,
      imageRows: 33,
      globalLight: true,
      detailsFile: "/aoe/maps/aoe1-map4.json",
      journals: [
        {
          x: 1750,
          y: 2250,
          id: "MjU6Njg6NjM5",
        },
        {
          x: 2550,
          y: 2250,
          id: "MjU6Njg6NDgz",
        },
        {
          x: 3350,
          y: 2250,
          id: "MjY6OTk6NDIz",
        },
        {
          x: 4150,
          y: 2250,
          id: "MjY6MzI2OjU1NQ",
        },
        {
          x: 4850,
          y: 2250,
          id: "Mjc6Njg6NDcx",
        },
        {
          x: 4450,
          y: 2850,
          id: "Mjc6Njg6MTEx",
        },
        {
          x: 5150,
          y: 2950,
          id: "Mjg6OTk6Njk5",
        },
        {
          x: 4450,
          y: 1650,
          id: "Mjg6MzI2OjY5OQ",
        },
        {
          x: 5050,
          y: 1650,
          id: "Mjg6MzI2OjMyNw",
        },
        {
          x: 5750,
          y: 2250,
          id: "Mjk6Njg6NDQ3",
        },
        {
          x: 6050,
          y: 2250,
          id: "MzA6OTk6NDM1",
        },
        {
          x: 2050,
          y: 3450,
          id: "MzA6OTk6MTEx",
        },
      ],
      tokens: [
        {
          id: "npc9",
          x: 1300,
          y: 2200,
        },
        {
          id: "npc44",
          x: 2400,
          y: 2100,
        },
        {
          id: "npc41",
          x: 2600,
          y: 2e3,
        },
        {
          id: "npc44",
          x: 3300,
          y: 2100,
        },
        {
          id: "npc44",
          x: 3300,
          y: 2400,
        },
        {
          id: "npc45",
          x: 4200,
          y: 2500,
        },
        {
          id: "npc40",
          x: 4400,
          y: 2900,
        },
        {
          id: "npc40",
          x: 4500,
          y: 3e3,
        },
        {
          id: "npc40",
          x: 4500,
          y: 2900,
        },
        {
          id: "npc40",
          x: 4550,
          y: 2950,
        },
        {
          id: "npc49",
          x: 5200,
          y: 2700,
        },
        {
          id: "npc47",
          x: 2900,
          y: 3500,
        },
        {
          id: "npc47",
          x: 5700,
          y: 2800,
        },
        {
          id: "npc10",
          x: 5700,
          y: 2300,
        },
        {
          id: "npc47",
          x: 5900,
          y: 2100,
          elite: true,
        },
        {
          id: "npc47",
          x: 5900,
          y: 2500,
          elite: true,
        },
        {
          id: "npc47",
          x: 5900,
          y: 2e3,
          elite: true,
        },
        {
          id: "npc47",
          x: 5900,
          y: 2400,
          elite: true,
        },
        {
          id: "npc47",
          x: 1900,
          y: 3400,
        },
        {
          id: "npc47",
          x: 1900,
          y: 3500,
        },
        {
          id: "npc47",
          x: 1900,
          y: 3600,
        },
        {
          id: "npc11",
          x: 1700,
          y: 3500,
        },
      ],
    }),
    new ModuleScene({
      name: "map5",
      canonical: {
        name: "aoe1/map5",
        priority: 0,
      },
      nameInfo: {
        x: 104,
        y: 406.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 34,
      width: 1259,
      height: 830,
      imageLeft: 26,
      imageRight: 1256,
      imageCols: 31,
      imageTop: 46,
      imageBottom: 800,
      imageRows: 19,
      detailsFile: "/aoe/maps/aoe1-map5.json",
      journals: [
        {
          x: 3650,
          y: 2350,
          id: "MzM6Njg6MTgz",
        },
        {
          x: 3050,
          y: 1850,
          id: "MzQ6OTk6MjU1",
        },
        {
          x: 3050,
          y: 1050,
          id: "MzU6Njg6Njk5",
        },
        {
          x: 2150,
          y: 850,
          id: "MzU6Mjk1OjY5OQ",
        },
        {
          x: 2150,
          y: 2050,
          id: "MzY6OTk6MjU1",
        },
        {
          x: 1650,
          y: 2150,
          id: "MzY6MzI2OjMzOQ",
        },
        {
          x: 1550,
          y: 1450,
          id: "Mzc6Mjk1OjYwMw",
        },
        {
          x: 1050,
          y: 750,
          id: "Mzg6OTk6NTU1",
        },
      ],
      tokens: [
        {
          id: "npc54",
          x: 2900,
          y: 1600,
        },
        {
          id: "npc46",
          x: 2400,
          y: 1e3,
        },
        {
          id: "npc46",
          x: 2400,
          y: 1100,
        },
        {
          id: "npc46",
          x: 2300,
          y: 1100,
        },
        {
          id: "npc13",
          x: 2200,
          y: 800,
        },
        {
          id: "npc14",
          x: 2100,
          y: 900,
        },
        {
          id: "npc72",
          x: 2e3,
          y: 1700,
        },
        {
          id: "npc72",
          x: 2100,
          y: 1800,
        },
        {
          id: "npc70",
          x: 1400,
          y: 2e3,
        },
        {
          id: "npc70",
          x: 1800,
          y: 2100,
        },
        {
          id: "npc15",
          x: 1400,
          y: 1200,
        },
      ],
    }),
    new ModuleScene({
      name: "map6",
      canonical: {
        name: "aoe1/map6",
        priority: 0,
      },
      nameInfo: {
        x: 27,
        y: 496.9181,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 48,
      width: 1259,
      height: 655,
      imageLeft: 33,
      imageRight: 1223,
      imageCols: 34,
      imageTop: 5,
      imageBottom: 635,
      imageRows: 18,
      globalLight: true,
      detailsFile: "/aoe/maps/aoe1-map6.json",
      journals: [
        {
          x: 2650,
          y: 1950,
          id: "NDg6OTk6NDQ3",
        },
        {
          x: 3150,
          y: 2150,
          id: "NDg6MzI2OjE0Nw",
        },
        {
          x: 2650,
          y: 1650,
          id: "NDk6Njg6Mzk5",
        },
        {
          x: 2050,
          y: 1850,
          id: "NDk6Njg6MTM1",
        },
        {
          x: 1750,
          y: 1650,
          id: "NDk6Mzc3OjQ3MQ",
        },
        {
          x: 1550,
          y: 1550,
          id: "NTA6OTk6Njk5",
        },
        {
          x: 1350,
          y: 1550,
          id: "NTA6OTk6MzYz",
        },
        {
          x: 1750,
          y: 1150,
          id: "NTA6MzI2OjMzOQ",
        },
        {
          x: 1350,
          y: 1150,
          id: "NTE6Njg6NjE1",
        },
        {
          x: 1750,
          y: 750,
          id: "NTE6Mjk1OjY5OQ",
        },
        {
          x: 2250,
          y: 1150,
          id: "NTE6Mjk1OjQ1OQ",
        },
        {
          x: 2850,
          y: 1150,
          id: "NTI6OTk6Njk5",
        },
        {
          x: 3150,
          y: 950,
          id: "NTI6OTk6Mzk5",
        },
        {
          x: 3150,
          y: 1150,
          id: "NTA6OTk6Njk5",
        },
        {
          x: 3450,
          y: 1250,
          id: "NTI6OTk6MTM1",
        },
        {
          x: 3750,
          y: 850,
          id: "NTI6MzI2OjYxNQ",
        },
        {
          x: 3050,
          y: 1750,
          id: "NTI6MzI2OjQzNQ",
        },
        {
          x: 3550,
          y: 1750,
          id: "NTM6Njg6NTMx",
        },
      ],
      tokens: [
        {
          id: "npc65",
          x: 3300,
          y: 1900,
        },
        {
          id: "npc66",
          x: 3200,
          y: 1900,
        },
        {
          id: "npc22",
          x: 3e3,
          y: 1900,
        },
        {
          id: "npc60",
          x: 1400,
          y: 1400,
        },
        {
          id: "npc52",
          x: 1400,
          y: 900,
        },
        {
          id: "npc55",
          x: 1500,
          y: 1e3,
        },
        {
          id: "npc34",
          x: 2900,
          y: 2e3,
        },
      ],
    }),
    new ModuleScene({
      name: "map7",
      canonical: {
        name: "aoe1/map7",
        priority: 0,
      },
      nameInfo: {
        x: 27,
        y: 543.5,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 54,
      width: 1259,
      height: 555,
      imageLeft: 137,
      imageRight: 1118,
      imageCols: 28,
      imageTop: 74,
      imageBottom: 424,
      imageRows: 10,
      globalLight: true,
      detailsFile: "/aoe/maps/aoe1-map7.json",
      journals: [
        {
          x: 2550,
          y: 950,
          id: "NTM6Mjk1OjU2Nw",
        },
        {
          x: 3150,
          y: 850,
          id: "NTM6Mjk1OjQ0Nw",
        },
        {
          x: 3150,
          y: 1350,
          id: "NTQ6OTk6MzE1",
        },
        {
          x: 3450,
          y: 1250,
          id: "NTU6Njg6Njk5",
        },
        {
          x: 3350,
          y: 1650,
          id: "NTY6OTk6MzAz",
        },
        {
          x: 3650,
          y: 1650,
          id: "NTY6MzI2OjUwNw",
        },
        {
          x: 3850,
          y: 750,
          id: "NTc6Njg6Njk5",
        },
        {
          x: 2550,
          y: 1350,
          id: "NTg6OTk6Mjc5",
        },
        {
          x: 1950,
          y: 650,
          id: "NTg6MzI2OjI1NQ",
        },
        {
          x: 2050,
          y: 1450,
          id: "NTg6MzI2OjEyMw",
        },
        {
          x: 1650,
          y: 650,
          id: "NTk6Njg6Mjkx",
        },
        {
          x: 1650,
          y: 1050,
          id: "NTk6Mjk1OjIxOQ",
        },
        {
          x: 1250,
          y: 1050,
          id: "NjA6OTk6MTgz",
        },
      ],
      tokens: [
        {
          id: "npc62",
          x: 3700,
          y: 1700,
        },
        {
          id: "npc23",
          x: 3300,
          y: 1200,
        },
        {
          id: "npc58",
          x: 3500,
          y: 1300,
        },
        {
          id: "npc43",
          x: 3200,
          y: 1e3,
        },
        {
          id: "npc39",
          x: 3100,
          y: 1200,
        },
        {
          id: "npc20",
          x: 3800,
          y: 900,
        },
        {
          id: "npc24",
          x: 4e3,
          y: 700,
        },
        {
          id: "npc25",
          x: 4e3,
          y: 750,
        },
        {
          id: "npc35",
          x: 2e3,
          y: 1100,
        },
        {
          id: "npc35",
          x: 2200,
          y: 1100,
        },
        {
          id: "npc63",
          x: 1500,
          y: 800,
        },
        {
          id: "npc53",
          x: 1500,
          y: 600,
        },
      ],
    }),
    new ModuleScene({
      name: "map8",
      canonical: {
        name: "aoe1/map8",
        priority: 0,
      },
      nameInfo: {
        x: 262.75,
        y: 498.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 58,
      width: 374,
      height: 361,
      imageLeft: 115,
      imageRight: 254,
      imageCols: 4,
      imageTop: 130,
      imageBottom: 235,
      imageRows: 3,
      globalLight: true,
      journals: [
        {
          x: 850,
          y: 750,
          id: "NTg6OTk6Mjc5",
        },
      ],
      tokens: [
        {
          id: "npc37",
          x: 900,
          y: 600,
        },
      ],
    }),
    new ModuleScene({
      name: "map9",
      canonical: {
        name: "aoe1/map9",
        priority: 0,
      },
      nameInfo: {
        x: 407.7144,
        y: 547.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 60,
      width: 1259,
      height: 555,
      imageLeft: 137,
      imageRight: 838,
      imageCols: 20,
      imageTop: 102,
      imageBottom: 452,
      imageRows: 10,
      globalLight: true,
      detailsFile: "/aoe/maps/aoe1-map9.json",
      journals: [
        {
          x: 1250,
          y: 950,
          id: "NjE6Njg6NTE5",
        },
        {
          x: 1550,
          y: 1450,
          id: "NjI6OTk6Njk5",
        },
        {
          x: 1850,
          y: 950,
          id: "NjM6Njg6NDU5",
        },
        {
          x: 2050,
          y: 650,
          id: "NjM6Mjk1OjY1MQ",
        },
        {
          x: 2550,
          y: 950,
          id: "NjM6Mjk1OjMyNw",
        },
        {
          x: 2950,
          y: 1150,
          id: "NjQ6OTk6MTcx",
        },
        {
          x: 2550,
          y: 1350,
          id: "NjQ6MzI2OjM2Mw",
        },
      ],
      tokens: [
        {
          id: "npc26",
          x: 1350,
          y: 800,
        },
        {
          id: "npc26",
          x: 1350,
          y: 900,
        },
        {
          id: "npc26",
          x: 1350,
          y: 1e3,
        },
        {
          id: "npc26",
          x: 1100,
          y: 950,
        },
        {
          id: "npc26",
          x: 1100,
          y: 1050,
        },
        {
          id: "npc26",
          x: 1150,
          y: 1150,
        },
        {
          id: "npc27",
          x: 1500,
          y: 1550,
        },
        {
          id: "npc27",
          x: 1700,
          y: 1550,
        },
        {
          id: "npc27",
          x: 1400,
          y: 1550,
        },
        {
          id: "npc27",
          x: 1600,
          y: 1550,
        },
        {
          id: "npc33",
          x: 2200,
          y: 1400,
        },
        {
          id: "npc28",
          x: 2300,
          y: 1500,
        },
        {
          id: "npc69",
          x: 2900,
          y: 600,
        },
        {
          id: "npc69",
          x: 3e3,
          y: 600,
        },
        {
          id: "npc69",
          x: 3200,
          y: 600,
        },
        {
          id: "npc48",
          x: 1600,
          y: 900,
          elite: true,
        },
      ],
    }),
    new ModuleScene({
      name: "map10",
      canonical: {
        name: "aoe/fairgrounds",
        priority: 0,
      },
      nameInfo: {
        x: 22,
        y: 423.3797,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 68,
      width: 1259,
      height: 830,
      gridType: "gridless",
      globalLight: true,
      imageLeft: 0,
      imageTop: 0,
      imageRight: 1e3,
      imageBottom: 1e3,
      imageRows: 10,
      imageCols: 10,
    }),
  ];
  journals = [
    new AdventureImage({
      name: "journal1",
      page: 1,
      width: 1260,
      height: 695,
    }),
    new AdventureImage({
      name: "journal2",
      page: 1,
      width: 1259,
      height: 694,
    }),
    new AdventureImage({
      name: "journal3",
      page: 4,
      width: 1260,
      height: 1636,
    }),
    new AdventureImage({
      name: "journal4",
      page: 6,
      width: 1168,
      height: 779,
    }),
    new AdventureImage({
      name: "journal5",
      page: 22,
      width: 1168,
      height: 779,
    }),
    new AdventureImage({
      name: "journal6",
      page: 32,
      width: 1168,
      height: 779,
    }),
    new AdventureImage({
      name: "journal7",
      page: 46,
      width: 1168,
      height: 779,
    }),
    new AdventureImage({
      name: "journal8",
      page: 66,
      width: 1260,
      height: 1636,
    }),
    new AdventureImage({
      name: "journal9",
      page: 76,
      width: 1260,
      height: 1636,
    }),
    new CaptionImage({
      name: "journal10",
      page: 80,
      width: 444,
      height: 528,
    }),
    new AdventureImage({
      name: "journal11",
      page: 81,
      width: 820,
      height: 1140,
    }),
    new CaptionImage({
      name: "journal12",
      page: 82,
      width: 444,
      height: 562,
    }),
    new CaptionImage({
      name: "journal13",
      page: 82,
      width: 340,
      height: 247,
    }),
    new CaptionImage({
      name: "journal14",
      page: 83,
      width: 371,
      height: 430,
    }),
    new AdventureImage({
      name: "journal15",
      page: 99,
      width: 1261,
      height: 1637,
    }),
    new CaptionImage({
      name: "npc26",
      page: 69,
      width: 780,
      height: 1356,
    }),
    new CaptionImage({
      name: "npc27",
      page: 72,
      width: 725,
      height: 1250,
    }),
    new CaptionImage({
      name: "npc28",
      page: 74,
      width: 598,
      height: 1043,
    }),
    new CaptionImage({
      name: "npc29",
      page: 84,
      width: 796,
      height: 1141,
    }),
    new AdventureImage({
      name: "npc30",
      page: 85,
      width: 785,
      height: 785,
    }),
    new AdventureImage({
      name: "npc31",
      page: 86,
      width: 840,
      height: 825,
    }),
    new AdventureImage({
      name: "npc32",
      page: 87,
      width: 782,
      height: 840,
    }),
    new AdventureImage({
      name: "npc33",
      page: 89,
      width: 840,
      height: 1055,
    }),
    new AdventureImage({
      name: "npc34",
      page: 91,
      width: 786,
      height: 1176,
    }),
    new AdventureImage({
      name: "npc35",
      page: 93,
      width: 786,
      height: 1173,
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.jJ1UTNLiRCoN1O3i",
      page: 9,
      width: 530,
      height: 531,
      tokenX: 74,
      tokenY: 96,
      tokenSize: 643,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 11,
        x: 247.3943,
        y: 460.3741,
      },
      page: 11,
      width: 458,
      height: 497,
      tokenX: 80,
      tokenY: 98,
      tokenSize: 581,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.181ucNY1zpp2Lz3x",
      page: 12,
      width: 846,
      height: 895,
      tokenX: -129,
      tokenY: -81,
      tokenSize: 559,
      forIds: ["MTI6OTk6NTMx"],
    }),
    new ModuleNpc({
      id: "npc4",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.oWASKud0jwlGSfJg",
      page: 12,
      width: 846,
      height: 895,
      tokenX: 6,
      tokenY: -429,
      tokenSize: 475,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc5",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.sn9Pjkr2jlMEqc3E",
      name: {
        page: 15,
        x: 277.2183,
        y: 465.753,
      },
      page: 15,
      width: 425,
      height: 470,
      tokenX: 106,
      tokenY: 89,
      tokenSize: 554,
      forIds: ["MTQ6MzI2OjMxNQ"],
    }),
    new ModuleNpc({
      id: "npc6",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.mEmWRqTRxLUZQYSh",
      name: {
        page: 16,
        x: 170.2618,
        y: 117.753,
      },
      page: 16,
      width: 922,
      height: 1125,
      tokenX: -114,
      tokenY: -21,
      tokenSize: 733,
      forIds: ["MTY6MzI2OjM4Nw"],
    }),
    new ModuleNpc({
      id: "npc7",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.gsn4NsJLwZCQUwgf",
      page: 18,
      width: 511,
      height: 756,
      tokenX: -79,
      tokenY: 45,
      tokenSize: 504,
      forIds: ["MTg6MzI2OjU2Nw"],
    }),
    new ModuleNpc({
      id: "npc8",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 21,
        x: 278.4731,
        y: 465.753,
      },
      page: 21,
      width: 419,
      height: 455,
      tokenX: 73,
      tokenY: 109,
      tokenSize: 567,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc9",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 23,
        x: 352.93,
        y: 197.0408,
      },
      page: 23,
      width: 451,
      height: 507,
      tokenX: 58,
      tokenY: 89,
      tokenSize: 591,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc10",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.4ffoPNBKdEwBmYgL",
      page: 29,
      width: 785,
      height: 1047,
      tokenX: -97,
      tokenY: -26,
      tokenSize: 515,
      forIds: ["Mjk6Mjk1OjYyNw"],
    }),
    new ModuleNpc({
      id: "npc11",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.CJuHwIRCAgTB1SEl",
      name: {
        page: 31,
        x: 274.2743,
        y: 453.753,
      },
      page: 31,
      width: 395,
      height: 467,
      tokenX: 105,
      tokenY: 123,
      tokenSize: 607,
      forIds: ["MzE6Njg6Mzk5"],
    }),
    new ModuleNpc({
      id: "npc12",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.Aktz95gNNzfAiTzk",
      name: {
        page: 33,
        x: 345.4693,
        y: 86.253,
      },
      page: 33,
      width: 501,
      height: 489,
      tokenX: 24,
      tokenY: 97,
      tokenSize: 585,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc13",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.6c5CnrSxMYEgP6Fz",
      page: 35,
      width: 575,
      height: 380,
      tokenX: 15,
      tokenY: 6,
      tokenSize: 407,
      forIds: ["MzY6OTk6Njk5"],
    }),
    new ModuleNpc({
      id: "npc14",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.pE5GxoB1FtXBqnF7",
      page: 35,
      width: 575,
      height: 380,
      tokenX: -198,
      tokenY: 63,
      tokenSize: 351,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc15",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.Bv1s6xJ55HS3Gxgs",
      page: 38,
      width: 874,
      height: 992,
      tokenX: -13,
      tokenY: 157,
      tokenSize: 880,
      forIds: ["Mzc6Mjk1OjMwMw"],
    }),
    new ModuleNpc({
      id: "npc16",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 40,
        x: 200.5222,
        y: 102.9651,
      },
      page: 40,
      width: 828,
      height: 1181,
      tokenX: -220,
      tokenY: 8,
      tokenSize: 369,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc17",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.BuPf7xtqfwCjNOQv",
      name: {
        page: 43,
        x: 249.3764,
        y: 468.5408,
      },
      page: 43,
      width: 628,
      height: 467,
      tokenX: -57,
      tokenY: 130,
      tokenSize: 516,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc18",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 44,
        x: 295.1343,
        y: 452.9651,
      },
      page: 44,
      width: 560,
      height: 505,
      tokenX: -39,
      tokenY: 97,
      tokenSize: 504,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc19",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 45,
        x: 262.0729,
        y: 450.9651,
      },
      page: 45,
      width: 544,
      height: 535,
      tokenX: 46,
      tokenY: 122,
      tokenSize: 628,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc20",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.JZUYQzQtzIwOGYvd",
      page: 49,
      width: 413,
      height: 505,
      tokenX: 99,
      tokenY: 82,
      tokenSize: 589,
      forIds: ["OTM6Njg6Mjc5", "NTc6Mjk1OjY5OQ"],
    }),
    new ModuleNpc({
      id: "npc21",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 50,
        x: 291.2252,
        y: 450.9651,
      },
      page: 50,
      width: 442,
      height: 455,
      tokenX: 51,
      tokenY: 77,
      tokenSize: 539,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc22",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.xN5J9S485LxFZMkL",
      page: 53,
      width: 803,
      height: 697,
      tokenX: 75,
      tokenY: 71,
      tokenSize: 691,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc23",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.yR6p0KVvZ3tPflRt",
      page: 55,
      width: 876,
      height: 1125,
      tokenX: -266,
      tokenY: 86,
      tokenSize: 425,
      forIds: ["NTU6Mjk1OjY2Mw"],
    }),
    new ModuleNpc({
      id: "npc24",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.7ptWlh4t6oHvYOcj",
      name: {
        page: 57,
        x: 330.2502,
        y: 132.5409,
        substring: {
          start: 0,
          end: 10,
        },
      },
      page: 57,
      width: 724,
      height: 949,
      tokenX: -90,
      tokenY: -26,
      tokenSize: 333,
      forIds: ["NTc6Mjk1OjY1MQ"],
    }),
    new ModuleNpc({
      id: "npc25",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.7EpLGBoddL8Vzlha",
      name: {
        page: 57,
        x: 330.2502,
        y: 132.5409,
        substring: {
          start: 15,
          end: 26,
        },
      },
      page: 57,
      width: 724,
      height: 949,
      tokenX: -395,
      tokenY: -30,
      tokenSize: 333,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc26",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.8HTPdiH6yEk0jlNF",
      page: 61,
      width: 838,
      height: 725,
      tokenX: -38,
      tokenY: 85,
      tokenSize: 894,
      forIds: ["NjE6Njg6MTIz"],
    }),
    new ModuleNpc({
      id: "npc27",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.eQc0ADMuHl1JzL8z",
      page: 62,
      width: 780,
      height: 1068,
      tokenX: -71,
      tokenY: 48,
      tokenSize: 620,
      forIds: ["NjI6MzI2OjUwNw"],
    }),
    new ModuleNpc({
      id: "npc28",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.fvOjtzuRNpmpEHXA",
      page: 84,
      width: 796,
      height: 1141,
      tokenX: -85,
      tokenY: 91,
      tokenSize: 637,
      forIds: ["ODQ6MzA0OjQ5NQ", "NjU6Njg6Mjc5"],
    }),
    new ModuleNpc({
      id: "npc29",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-3.Actor.BrGvmcM6jl3xUs4d",
      page: 85,
      width: 785,
      height: 785,
      tokenX: 0,
      tokenY: 0,
      tokenSize: 785,
      forIds: ["ODU6Njg6Mzg3"],
    }),
    new ModuleNpc({
      id: "npc30",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.XDt87cqF85zWnlC8",
      page: 86,
      width: 840,
      height: 825,
      tokenX: 0,
      tokenY: 8,
      tokenSize: 840,
      forIds: ["ODY6MjUxOjQ0Nw"],
    }),
    new ModuleNpc({
      id: "npc31",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.PEjcy9CxelKC3Kp6",
      page: 87,
      width: 782,
      height: 840,
      tokenX: -121,
      tokenY: 32,
      tokenSize: 448,
      forIds: ["ODc6Njg6MzYz"],
    }),
    new ModuleNpc({
      id: "npc32",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.gd0sVQtCHbhP8iHI",
      page: 89,
      width: 840,
      height: 1055,
      tokenX: -191,
      tokenY: -2,
      tokenSize: 355,
      forIds: ["ODk6Njg6MTcx"],
    }),
    new ModuleNpc({
      id: "npc33",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.jJ1UTNLiRCoN1O3i",
      page: 91,
      width: 786,
      height: 1176,
      tokenX: -205,
      tokenY: 27,
      tokenSize: 308,
      forIds: ["NjU6Njg6MzI3", "OTE6Njg6MzE1"],
    }),
    new ModuleNpc({
      id: "npc34",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.JZUYQzQtzIwOGYvd",
      page: 93,
      width: 786,
      height: 1173,
      tokenX: -272,
      tokenY: -104,
      tokenSize: 333,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc35",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.yQ2mosomuAPiLMkU",
      label: "AS",
      forIds: ["NTk6Njg6MzM5"],
    }),
    new ModuleNpc({
      id: "npc36",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.MONwgTbrcZFzr6vC",
      label: "AB",
      forIds: ["MTA6OTk6MTIz"],
    }),
    new ModuleNpc({
      id: "npc37",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.mtRofD6H5BEDHHSm",
      label: "AW",
      forIds: ["NTg6MzI2OjMwMw"],
    }),
    new ModuleNpc({
      id: "npc38",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.MrzlaE7k1PEsd3iQ",
      label: "C",
      forIds: ["MTU6Mjk1OjI5MQ"],
    }),
    new ModuleNpc({
      id: "npc39",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.AJ5LuNMVPLCydryP",
      label: "GV",
      forIds: ["MTc6Mjk1OjUwNw", "NTQ6MzI2Ojk5"],
    }),
    new ModuleNpc({
      id: "npc40",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.HpD0BTfid3hnUEWj",
      label: "BS",
      forIds: ["Mjc6Mjk1OjM4Nw"],
    }),
    new ModuleNpc({
      id: "npc41",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.3LLHyUz0Nabuw46L",
      label: "BF",
      forIds: ["MjY6OTk6Njk5"],
    }),
    new ModuleNpc({
      id: "npc42",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.qY1NrXKmL0y18qoz",
      label: "B",
      forIds: ["MTA6OTk6MzYz"],
    }),
    new ModuleNpc({
      id: "npc43",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.l3AqEkQwRJS8TY7f",
      label: "CD",
      forIds: ["NTQ6MzI2OjQ5NQ"],
    }),
    new ModuleNpc({
      id: "npc44",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.PcHQDmPTztw32PhL",
      label: "KS",
      forIds: ["MjY6MzI2OjYxNQ", "MjU6Mjk1OjE4Mw", "Mjk6Njg6NTQz"],
    }),
    new ModuleNpc({
      id: "npc45",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.xw7S8108irh2D1Uw",
      label: "DB",
      forIds: ["MjY6MzI2OjE5NQ"],
    }),
    new ModuleNpc({
      id: "npc46",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.LHHgGSs0ELCR4CYK",
      label: "G",
      forIds: ["MzU6Njg6MTgz"],
    }),
    new ModuleNpc({
      id: "npc47",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.BIZfjoz8DZt75EDn",
      label: "KW",
      forIds: ["MzA6OTk6NTc5", "MzE6Njg6MzUx", "MzA6OTk6MTU5"],
    }),
    new ModuleNpc({
      id: "npc48",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.uQBOJfjtzEXvpLQz",
      label: "OJ",
      forIds: ["NjM6Mjk1OjY5OQ"],
    }),
    new ModuleNpc({
      id: "npc49",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.CTKAJG7oQaIQWCiB",
      label: "ES",
      forIds: ["Mjg6OTk6MjMx"],
    }),
    new ModuleNpc({
      id: "npc50",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.LAun416if9NFg3X2",
      label: "EB",
      forIds: ["MTI6MzI2OjU2Nw"],
    }),
    new ModuleNpc({
      id: "npc51",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.E2XL2egIA3QaSDBM",
      label: "FB",
      forIds: ["MTg6NDAyOjI1NQ"],
    }),
    new ModuleNpc({
      id: "npc52",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.UkmM3bjBoBld0uzS",
      label: "FG",
      forIds: ["NTE6Njg6NDM1"],
    }),
    new ModuleNpc({
      id: "npc53",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.giVkjJeVZjhbR6eA",
      label: "GT",
      forIds: ["NTk6Mjk1OjYwMw"],
    }),
    new ModuleNpc({
      id: "npc54",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.TZcDdN5o7s4alZNE",
      label: "GC",
      forIds: ["MzQ6MzI2OjE3MQ"],
    }),
    new ModuleNpc({
      id: "npc55",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.ce2SoJ7nRNZ1AoK6",
      label: "HC",
      forIds: ["NTA6MzI2OjE4Mw"],
    }),
    new ModuleNpc({
      id: "npc56",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.X03vq2RWi2jiA6Ri",
      label: "O",
      forIds: ["MTY6OTk6NTc5"],
    }),
    new ModuleNpc({
      id: "npc57",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.FBq4bqtKUBpJUCMU",
      label: "B",
      forIds: ["MTM6Njg6NDM1"],
    }),
    new ModuleNpc({
      id: "npc58",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.lzmGdArS3kjJOqT6",
      label: "LS",
      forIds: ["NTY6OTk6NTMx"],
    }),
    new ModuleNpc({
      id: "npc59",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.A4VgQIHsqJKssQOM",
      label: "HS",
      forIds: ["Mjk6Njg6NDk1"],
    }),
    new ModuleNpc({
      id: "npc60",
      actorUuid:
        "Compendium.pf2e.menace-under-otari-bestiary.Actor.Br1AtKUHe3nbzjnY",
      label: "M",
      forIds: ["NTA6NDIzOjQ1OQ"],
    }),
    new ModuleNpc({
      id: "npc61",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.GWO6vweLGT2J6q62",
      label: "MG",
      forIds: ["OToyOTU6MjY3"],
    }),
    new ModuleNpc({
      id: "npc62",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.fWAjkhQ0y50Eh2BT",
      label: "R",
      forIds: ["NTY6MzI2OjIwNw"],
    }),
    new ModuleNpc({
      id: "npc63",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.1UIJ4oknQ7btkUCb",
      label: "PC",
      forIds: ["NjA6OTk6NDEx"],
    }),
    new ModuleNpc({
      id: "npc64",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.trchDxbDR2TiPMxT",
      label: "SG",
      forIds: ["MTM6Mjk1OjY5OQ"],
    }),
    new ModuleNpc({
      id: "npc65",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.HXiA7x1jWnB1BqUy",
      label: "SR",
      forIds: ["NTM6Njg6MzM5"],
    }),
    new ModuleNpc({
      id: "npc66",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.QHcBauLnHzfwkDBK",
      label: "SR",
      forIds: ["NTI6MzI2OjE4Mw"],
    }),
    new ModuleNpc({
      id: "npc67",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.V1Kr5aiPaTM0mDFu",
      label: "A",
      forIds: ["MjA6MzI2OjE3MQ"],
    }),
    new ModuleNpc({
      id: "npc68",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.tUWchW8dXavTFeBy",
      label: "H",
      forIds: ["MTc6Njg6MzE1"],
    }),
    new ModuleNpc({
      id: "npc69",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.DBTbqI9QQRtlJwWh",
      label: "W",
      forIds: ["NjQ6OTk6NTQz"],
    }),
    new ModuleNpc({
      id: "npc70",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.uFU6dQfcNeKq68YT",
      label: "V",
      forIds: ["Mzc6Njg6NTA3"],
    }),
    new ModuleNpc({
      id: "npc71",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.nTn2szBbqQNdXhOr",
      label: "S",
      forIds: ["MTA6MzI2OjIzMQ"],
    }),
    new ModuleNpc({
      id: "npc72",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.nFMZjWQL6pd9XdqR",
      label: "CC",
      forIds: ["MzY6MzI2OjQ3MQ"],
    }),
  ];
  journalPages = [
    {
      name: "Chapter 1",
      pages: [
        {
          id: "NjoyNTY6MzU2",
        },
        {
          id: "NzozNzE6Njk5",
        },
        {
          id: "NzozNzE6NTQz",
        },
        {
          id: "Nzo2ODo0MjM",
        },
        {
          id: "ODoxMDg6Njk5",
        },
        {
          id: "ODo5OToyNjc",
        },
        {
          id: "ODozMjY6NDIz",
        },
        {
          id: "ODozMjY6MTcx",
        },
        {
          id: "MTE6Njg6MjY3",
        },
        {
          id: "MTE6Mjk1OjM3NQ",
        },
        {
          id: "MTI6MzI2OjI2Nw",
        },
        {
          id: "MTM6Njg6Mjkx",
        },
        {
          id: "MTM6Mjk1OjY1MQ",
        },
        {
          id: "MTU6Njg6Njk5",
        },
        {
          id: "MTU6MzQ2OjU3OQ",
        },
        {
          id: "MTU6Mjk1OjI0Mw",
        },
        {
          id: "MTY6OTk6NTMx",
        },
        {
          id: "MTY6NDE5OjE3MQ",
        },
        {
          id: "MTc6Njg6NTA3",
        },
        {
          id: "MTc6Njg6MjY3",
        },
        {
          id: "MTc6Mjk1OjQ1OQ",
        },
        {
          id: "MTc6Mjk1OjE4Mw",
        },
        {
          id: "MTg6OTk6NTA3",
        },
        {
          id: "MTg6MzQ1OjE1OQ",
        },
        {
          id: "MTk6Mjk1OjYzOQ",
        },
        {
          id: "MTk6Mjk1OjIzMQ",
        },
        {
          id: "MjA6OTk6NDIz",
        },
        {
          id: "MjA6MzI2OjYwMw",
        },
        {
          id: "MjE6Njg6Njk5",
        },
        {
          id: "MjE6Mjk1OjQxMQ",
        },
      ],
    },
    {
      name: "Chapter 2",
      pages: [
        {
          id: "MjI6MjU0OjM1Ng",
        },
        {
          id: "MjM6MzcxOjY5OQ",
        },
        {
          id: "MjM6MzcxOjUxOQ",
        },
        {
          id: "MjM6Njg6NjAz",
        },
        {
          id: "MjU6Njg6NjM5",
        },
        {
          id: "MjU6Njg6NDgz",
        },
        {
          id: "MjY6OTk6NDIz",
        },
        {
          id: "MjY6MzI2OjU1NQ",
        },
        {
          id: "Mjc6Njg6NDcx",
        },
        {
          id: "Mjc6Njg6MTEx",
        },
        {
          id: "Mjg6OTk6Njk5",
        },
        {
          id: "Mjg6MzI2OjY5OQ",
        },
        {
          id: "Mjg6MzI2OjMyNw",
        },
        {
          id: "Mjk6Njg6NDQ3",
        },
        {
          id: "MzA6OTk6NDM1",
        },
        {
          id: "MzA6OTk6MTEx",
        },
        {
          id: "MzE6Njg6MTIz",
        },
        {
          id: "MjU6MzA0OjY5OQ",
        },
      ],
    },
    {
      name: "Chapter 3",
      pages: [
        {
          id: "MzI6MjU0OjM1Ng",
        },
        {
          id: "MzM6MzcxOjY5OQ",
        },
        {
          id: "MzM6MzcxOjUwNw",
        },
        {
          id: "MzM6Njg6Njk5",
        },
        {
          id: "MzM6Njg6Mzg3",
        },
        {
          id: "MzM6Njg6MTgz",
        },
        {
          id: "MzQ6OTk6MjU1",
        },
        {
          id: "MzU6Njg6Njk5",
        },
        {
          id: "MzU6Mjk1OjY5OQ",
        },
        {
          id: "MzY6OTk6MjU1",
        },
        {
          id: "MzY6MzI2OjMzOQ",
        },
        {
          id: "Mzc6Mjk1OjYwMw",
        },
        {
          id: "Mzg6OTk6NTU1",
        },
        {
          id: "Mzg6MzI2OjU2Nw",
        },
        {
          id: "Mzk6Mjk1OjI2Nw",
        },
        {
          id: "NDE6Njg6NDM1",
        },
        {
          id: "NDE6Mjk1OjQ3MQ",
        },
        {
          id: "NDI6OTk6NTA3",
        },
        {
          id: "NDI6MzI2OjQ0Nw",
        },
        {
          id: "NDM6Njg6NDEx",
        },
        {
          id: "NDM6Mjk1OjI0Mw",
        },
        {
          id: "NDQ6Mzc2OjYyNw",
        },
        {
          id: "NDU6Njg6NTA3",
        },
        {
          id: "NDU6Mjk1OjMwMw",
        },
      ],
    },
    {
      name: "Chapter 4",
      pages: [
        {
          id: "NDY6MjU0OjM1Ng",
        },
        {
          id: "NDc6MzcxOjY5OQ",
        },
        {
          id: "NDc6MzcxOjU5MQ",
        },
        {
          id: "NDc6MzcxOjMzOQ",
        },
        {
          id: "NDY6OTk6MTU5",
        },
        {
          id: "NDc6Njg6Njk5",
        },
        {
          id: "NDg6OTk6NDQ3",
        },
        {
          id: "NDg6MzI2OjE0Nw",
        },
        {
          id: "NDk6Njg6Mzk5",
        },
        {
          id: "NDk6Njg6MTM1",
        },
        {
          id: "NDk6Mzc3OjQ3MQ",
        },
        {
          id: "NTA6OTk6Njk5",
        },
        {
          id: "NTA6OTk6MzYz",
        },
        {
          id: "NTA6MzI2OjMzOQ",
        },
        {
          id: "NTE6Njg6NjE1",
        },
        {
          id: "NTE6Mjk1OjY5OQ",
        },
        {
          id: "NTE6Mjk1OjQ1OQ",
        },
        {
          id: "NTI6OTk6Njk5",
        },
        {
          id: "NTI6OTk6Mzk5",
        },
        {
          id: "NTI6OTk6MTM1",
        },
        {
          id: "NTI6MzI2OjYxNQ",
        },
        {
          id: "NTI6MzI2OjQzNQ",
        },
        {
          id: "NTM6Njg6NTMx",
        },
        {
          id: "NTM6Mjk1OjU2Nw",
        },
        {
          id: "NTM6Mjk1OjQ0Nw",
        },
        {
          id: "NTQ6OTk6MzE1",
        },
        {
          id: "NTU6Njg6Njk5",
        },
        {
          id: "NTY6OTk6MzAz",
        },
        {
          id: "NTY6MzI2OjUwNw",
        },
        {
          id: "NTc6Njg6Njk5",
        },
        {
          id: "NTg6OTk6Mjc5",
        },
        {
          id: "NTg6MzI2OjI1NQ",
        },
        {
          id: "NTg6MzI2OjEyMw",
        },
        {
          id: "NTk6Njg6Mjkx",
        },
        {
          id: "NTk6Mjk1OjIxOQ",
        },
        {
          id: "NjA6OTk6MTgz",
        },
        {
          id: "NjE6Njg6NTE5",
        },
        {
          id: "NjI6OTk6Njk5",
        },
        {
          id: "NjM6Njg6NDU5",
        },
        {
          id: "NjM6Mjk1OjY1MQ",
        },
        {
          id: "NjM6Mjk1OjMyNw",
        },
        {
          id: "NjQ6OTk6MTcx",
        },
        {
          id: "NjQ6MzI2OjM2Mw",
        },
        {
          id: "NjU6Mjk1OjM3NQ",
        },
      ],
    },
    {
      name: "Handouts",
      pages: [
        {
          id: "NTg6MTA4OjY4Ngfake",
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
          id: "npc26",
        },
        {
          id: "npc27",
        },
        {
          id: "npc28",
        },
        {
          id: "npc29",
        },
        {
          id: "npc30",
        },
        {
          id: "npc31",
        },
        {
          id: "npc32",
        },
        {
          id: "npc33",
        },
        {
          id: "npc34",
        },
        {
          id: "npc35",
        },
      ],
    },
    {
      name: "New Journal",
      pages: [
        {
          id: "Njc6ODg6NjIx",
        },
        {
          id: "Njc6Njg6MTcx",
        },
        {
          id: "Njk6Njg6MzM5",
        },
        {
          id: "Njk6Mjk1OjY5OQ",
        },
        {
          id: "NzA6OTk6MTU5",
        },
        {
          id: "NzE6Njg6NTkx",
        },
        {
          id: "NzE6Njg6MTU5",
        },
        {
          id: "Nzc6MTAyOjYyMQ",
        },
        {
          id: "Nzc6Njg6NDIz",
        },
        {
          id: "Nzc6Njg6MjQz",
        },
        {
          id: "Nzc6Mjk1OjI3OQ",
        },
        {
          id: "Nzg6OTk6Njk5",
        },
        {
          id: "Nzg6OTk6NjM5",
        },
        {
          id: "Nzg6OTk6NDEx",
        },
        {
          id: "Nzg6OTk6MjE5",
        },
        {
          id: "Nzg6MzI2OjY2Mw",
        },
        {
          id: "Nzg6MzI2OjQ0Nw",
        },
        {
          id: "Nzg6MzI2OjI0Mw",
        },
        {
          id: "Nzk6Njg6Njk5",
        },
        {
          id: "Nzk6Njg6Mzk5",
        },
        {
          id: "ODA6OTk6Njk5",
        },
        {
          id: "ODA6OTk6NjUx",
        },
        {
          id: "ODA6MzI2OjQxMQ",
        },
        {
          id: "ODE6Njg6Njk5",
        },
        {
          id: "ODI6OTk6Njk5",
        },
        {
          id: "ODI6MzI2OjY2Mw",
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
          id: "ODg6MTQxOjYyMg",
        },
        {
          id: "OTA6MTM3OjYyMg",
        },
        {
          id: "OTI6MjYxOjYyMg",
        },
        {
          id: "NzA6MTA4OjY5OQ",
        },
        {
          id: "Nzc6MzA0OjUzMQ",
        },
        {
          id: "ODQ6MTUxOjY2Mw",
        },
        {
          id: "ODU6MzcxOjY2Mw",
        },
        {
          id: "ODY6MTQwOjY2Mw",
        },
        {
          id: "ODc6MzcxOjY2Mw",
        },
      ],
    },
  ];
  combines = [
    {
      source: "OTM6Njg6NDM1",
      dest: "OTI6MjYxOjYyMg",
    },
    {
      source: "OTA6MzI2OjExMQ",
      dest: "OTA6MTM3OjYyMg",
    },
    {
      source: "ODk6Njg6Njk5",
      dest: "ODg6MTQxOjYyMg",
    },
  ];
  normalFontIds = this.normalFontIds.concat(["Basing:16"]);
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "DEVIL AT THE DREAMING PALACE" &&
        t.fontId === "ColiseumBold:38",
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    if (sectionKey === "handout58") {
      const title = this.getFakeText("Handout", "GoodOT-Bold:12");
      title.id = `${text[0].id}fake`;
      text.unshift(title);
      this.markIndented(text, 58, 108, 686);
      this.markIndented(text, 58, 108, 666);
      this.markStartOfLine(text, 58, 108, 646);
      this.markStartOfLine(text, 58, 108, 626);
    }
    this.markStartOfLine(text, 31, 373.75, 675);
    this.markIndented(text, 31, 379.75, 663);
    this.markIndented(text, 31, 357.75, 579);
    this.markStartOfLine(text, 18, 376.25, 411);
    this.markStartOfLine(text, 18, 393.25, 399);
    this.markIndented(text, 18, 414.25, 387);
    this.markStartOfLine(text, 18, 410.25, 375);
    this.markIndented(text, 18, 420.25, 363);
    this.markIndented(text, 18, 420.25, 351);
    this.markIndented(text, 18, 419.25, 339);
    this.markIndented(text, 18, 439.25, 327);
    this.markIndented(text, 18, 440.25, 315);
    this.markIndented(text, 18, 416.25, 303);
    this.markIndented(text, 18, 416.25, 291);
    this.markIndented(text, 18, 413.25, 279);
    this.markStartOfLine(text, 62, 338.25, 363);
    this.markStartOfLine(text, 62, 350.25, 351);
    this.markStartOfLine(text, 62, 364.25, 303);
    this.markStartOfLine(text, 84, 303.5, 495);
    this.markStartOfLine(text, 84, 331.5, 471);
    this.markStartOfLine(text, 84, 326.5, 459);
    this.markStartOfLine(text, 84, 317.5, 447);
    this.markStartOfLine(text, 84, 308.5, 435);
    this.markStartOfLine(text, 84, 303.5, 423);
    this.markStartOfLine(text, 84, 306.5, 411);
    this.markStartOfLine(text, 84, 323.5, 363);
    this.markStartOfLine(text, 84, 352.5, 291);
    this.markStartOfLine(text, 84, 346.5, 255);
    this.markStartOfLine(text, 84, 276.5, 207);
    this.markStartOfLine(text, 84, 274.5, 183);
    this.markStartOfLine(text, 84, 284.5, 171);
    this.markStartOfLine(text, 84, 300.5, 135);
    this.markStartOfLine(text, 84, 310.5, 111);
    this.markStartOfLine(text, 86, 295.5, 375);
    this.markStartOfLine(text, 86, 362.5, 339);
    this.markStartOfLine(text, 86, 341.5, 279);
    this.markStartOfLine(text, 86, 361.5, 231);
    this.markStartOfLine(text, 86, 361.5, 219);
    this.markStartOfLine(text, 86, 356.5, 207);
    this.markStartOfLine(text, 86, 343.5, 171);
    this.markStartOfLine(text, 86, 298.5, 111);
    return super.extractDetails(text, moduleData, sectionKey);
  }
}
