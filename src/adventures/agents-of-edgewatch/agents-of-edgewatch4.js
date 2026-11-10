import { AgentsOfEdgewatchBase } from "./base.js";
import { AdventureImage, CaptionImage } from "../../core/images.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class AgentsOfEdgewatch4 extends AgentsOfEdgewatchBase {
  prefix = "agents-of-edgewatch4";
  fullName = "Agents of Edgewatch - Assault on Hunting Lodge Seven";
  pages = [
    this.ChapterHeadingPageLayout(6),
    this.RightSingleColumnWithSidebar(7),
    this.LeftTwoColumn(8),
    this.RightTwoColumnWithRightCutout(9, 500),
    this.LeftTwoColumnWithMap(10, 340),
    this.RightTwoColumn(11),
    this.LeftTwoColumn(12),
    this.RightTwoColumnWithRightCutout(13, 352),
    this.LeftTwoColumn(14),
    this.RightTwoColumn(15),
    this.LeftTwoColumn(16),
    this.RightTwoColumn(17),
    this.LeftTwoColumn(18),
    this.RightTwoColumn(19),
    this.LeftTwoColumn(20),
    this.RightTwoColumn(21),
    this.RightTwoColumn(23),
    this.LeftTwoColumn(24),
    this.RightTwoColumn(25),
    this.LeftTwoColumn(26),
    this.RightTwoColumn(27),
    this.LeftTwoColumn(28),
    this.RightTwoColumn(29),
    this.LeftTwoColumn(30),
    this.RightTwoColumn(31),
    this.LeftTwoColumn(32),
    this.RightTwoColumn(33),
    this.ChapterHeadingPageLayout(34),
    this.RightSingleColumnWithSidebar(35),
    this.RightTwoColumn(37),
    this.LeftTwoColumnWithLeftCutout(38, 425),
    this.RightTwoColumnWithRightCutout(39, 0),
    this.LeftTwoColumn(40),
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
    this.ChapterHeadingPageLayout(52),
    this.RightSingleColumnWithSidebarAndHandout(53, 235),
    this.RightTwoColumnWithRightCutout(55, 390),
    this.LeftTwoColumnWithLeftCutout(56, 580),
    this.RightTwoColumn(57),
    this.LeftTwoColumn(58),
    this.RightTwoColumn(59),
    this.LeftTwoColumn(60),
    this.RightTwoColumn(61),
    this.LeftTwoColumn(62),
    this.RightTwoColumn(63),
    this.LeftTwoColumn(64),
    this.RightTwoColumn(65),
    this.RightChapterHeadingPageLayout(67),
    this.LeftTwoColumnWithLeftCutout(68, 510),
    this.RightTwoColumn(69),
    this.LeftTwoColumn(70),
    this.RightTwoColumnWithRightCutout(71, 300),
    this.RightChapterHeadingPageLayout(73),
    this.LeftTwoColumn(74),
    this.RightTwoColumn(75),
    this.LeftTwoColumn(76),
    this.RightTwoColumn(77),
    this.RightChapterHeadingPageLayout(79),
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
      name: "map1a",
      canonical: {
        name: "aoe4/map1a",
        priority: 0,
      },
      nameInfo: {
        x: 99,
        y: 384.5,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 10,
      width: 1159,
      height: 773,
      imageLeft: 18,
      imageRight: 1150,
      imageCols: 60,
      imageTop: 12,
      imageBottom: 768,
      imageRows: 40,
      cropLeft: 0,
      cropRight: 580,
      cropTop: 0,
      cropBottom: 768,
      globalLight: true,
      detailsFile: "/aoe/maps/aoe4-map1a.json",
      journals: [
        {
          x: 2150,
          y: 3550,
          id: "MTA6OTk6MTcx",
        },
        {
          x: 1550,
          y: 3650,
          id: "MTE6Njg6NjUx",
        },
        {
          x: 2850,
          y: 3650,
          id: "MTE6Njg6NjUx",
        },
        {
          x: 2850,
          y: 2150,
          id: "MTE6Njg6NTQz",
        },
        {
          x: 2150,
          y: 2150,
          id: "MTI6OTk6NjI3",
        },
        {
          x: 2150,
          y: 1750,
          id: "MTI6OTk6NDEx",
        },
        {
          x: 2050,
          y: 4950,
          id: "ODo5OTo2MTU",
        },
      ],
      tokens: [
        {
          id: "npc29",
          x: 1e3,
          y: 3400,
        },
        {
          id: "npc29",
          x: 1200,
          y: 3400,
        },
        {
          id: "npc29",
          x: 1e3,
          y: 3500,
        },
        {
          id: "npc29",
          x: 1100,
          y: 3500,
        },
        {
          id: "npc29",
          x: 1100,
          y: 3400,
        },
        {
          id: "npc29",
          x: 1200,
          y: 3500,
        },
        {
          id: "npc29",
          x: 2800,
          y: 4300,
        },
        {
          id: "npc29",
          x: 1600,
          y: 4500,
        },
        {
          id: "npc29",
          x: 1500,
          y: 4300,
        },
        {
          id: "npc36",
          x: 1700,
          y: 4500,
        },
        {
          id: "npc36",
          x: 2500,
          y: 4500,
        },
        {
          id: "npc29",
          x: 2700,
          y: 4500,
        },
        {
          id: "npc2",
          x: 3100,
          y: 1900,
        },
        {
          id: "npc2",
          x: 2700,
          y: 1900,
        },
        {
          id: "npc2",
          x: 3e3,
          y: 1900,
        },
        {
          id: "npc2",
          x: 2700,
          y: 2300,
        },
        {
          id: "npc2",
          x: 3e3,
          y: 2100,
        },
        {
          id: "npc2",
          x: 3100,
          y: 2e3,
        },
        {
          id: "npc28",
          x: 2100,
          y: 1500,
        },
      ],
    }),
    new ModuleScene({
      name: "map1b",
      canonical: {
        name: "aoe4/map1b",
        priority: 0,
      },
      nameInfo: {
        x: 336,
        y: 384.5,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 10,
      width: 1159,
      height: 773,
      imageLeft: 18,
      imageRight: 1150,
      imageCols: 60,
      imageTop: 12,
      imageBottom: 768,
      imageRows: 40,
      cropLeft: 587,
      cropRight: 1150,
      cropTop: 0,
      cropBottom: 768,
      globalLight: true,
      detailsFile: "/aoe/maps/aoe4-map1b.json",
      journals: [
        {
          x: 2350,
          y: 4250,
          id: "MTQ6OTk6MzYz",
        },
        {
          x: 1750,
          y: 4150,
          id: "MTU6Njg6MzE1",
        },
        {
          x: 1550,
          y: 3850,
          id: "MTc6Njg6NjAz",
        },
        {
          x: 2850,
          y: 4050,
          id: "MTc6Njg6NDIz",
        },
        {
          x: 2050,
          y: 3450,
          id: "MTg6OTk6NDU5",
        },
        {
          x: 2350,
          y: 3450,
          id: "MTg6OTk6MzE1",
        },
        {
          x: 2550,
          y: 3450,
          id: "MTg6MzI2OjM4Nw",
        },
        {
          x: 1450,
          y: 3150,
          id: "MTg6MzI2OjMzOQ",
        },
        {
          x: 3150,
          y: 3150,
          id: "MTg6MzI2OjI3OQ",
        },
        {
          x: 1750,
          y: 2550,
          id: "MTg6MzI2OjIxOQ",
        },
        {
          x: 2250,
          y: 2750,
          id: "MTk6Mjk1OjY5OQ",
        },
        {
          x: 2850,
          y: 2650,
          id: "MjA6MzI2OjY5OQ",
        },
        {
          x: 2350,
          y: 2450,
          id: "MjA6MzM3OjEyMw",
        },
        {
          x: 2250,
          y: 2250,
          id: "MjE6Njg6NTMx",
        },
        {
          x: 1450,
          y: 1550,
          id: "MjE6Mjk1OjQzNQ",
        },
        {
          x: 2250,
          y: 1450,
          id: "MjE6Mjk1OjMzOQ",
        },
        {
          x: 3150,
          y: 1550,
          id: "MjE6Mjk1OjE5NQ",
        },
        {
          x: 2250,
          y: 1750,
          id: "MjE6Mjk1OjExMQ",
        },
        {
          x: 950,
          y: 1350,
          id: "MTM6Mjk1OjE1OQ",
        },
        {
          x: 950,
          y: 1450,
          id: "MTM6Mjk1OjI1NQ",
        },
      ],
      tokens: [
        {
          id: "npc46",
          x: 3e3,
          y: 3900,
        },
        {
          id: "npc27",
          x: 2900,
          y: 4200,
        },
        {
          id: "npc27",
          x: 2900,
          y: 4300,
        },
        {
          id: "npc30",
          x: 3100,
          y: 4200,
        },
        {
          id: "npc27",
          x: 2700,
          y: 3800,
        },
        {
          id: "npc30",
          x: 2700,
          y: 4e3,
        },
        {
          id: "npc47",
          x: 2200,
          y: 3400,
        },
        {
          id: "npc47",
          x: 2300,
          y: 3500,
        },
        {
          id: "npc3",
          x: 1600,
          y: 4200,
        },
        {
          id: "npc4",
          x: 1800,
          y: 4200,
        },
        {
          id: "npc5",
          x: 2200,
          y: 2800,
        },
        {
          id: "npc27",
          x: 2200,
          y: 3e3,
        },
        {
          id: "npc37",
          x: 2800,
          y: 2500,
        },
        {
          id: "npc30",
          x: 1900,
          y: 2600,
        },
        {
          id: "npc27",
          x: 2e3,
          y: 2800,
        },
        {
          id: "npc27",
          x: 1900,
          y: 3e3,
        },
        {
          id: "npc27",
          x: 2400,
          y: 2300,
        },
        {
          id: "npc27",
          x: 2500,
          y: 2400,
        },
        {
          id: "npc30",
          x: 2100,
          y: 2300,
        },
        {
          id: "npc27",
          x: 2400,
          y: 1400,
        },
        {
          id: "npc27",
          x: 2300,
          y: 1400,
        },
      ],
    }),
    new ModuleScene({
      name: "map2",
      canonical: {
        name: "aoe4/map2",
        priority: 0,
      },
      nameInfo: {
        x: 74,
        y: 708.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 22,
      width: 1209,
      height: 1545,
      imageLeft: 180,
      imageRight: 1108,
      imageCols: 25,
      imageTop: 181,
      imageBottom: 1480,
      imageRows: 35,
      globalLight: true,
      detailsFile: "/aoe/maps/aoe4-map2.json",
      journals: [
        {
          x: 2650,
          y: 2250,
          id: "MjQ6MzQ1OjI1NQ",
        },
        {
          x: 3550,
          y: 1950,
          id: "MjU6Njg6NDIz",
        },
        {
          x: 2650,
          y: 1750,
          id: "MjY6OTk6NjM5",
        },
        {
          x: 1650,
          y: 2050,
          id: "MjY6OTk6NDIz",
        },
        {
          x: 2650,
          y: 2650,
          id: "Mjc6Njg6NDU5",
        },
        {
          x: 2450,
          y: 3050,
          id: "Mjc6Njg6MzAz",
        },
        {
          x: 3050,
          y: 3050,
          id: "Mjc6Njg6MTIz",
        },
        {
          x: 3650,
          y: 3250,
          id: "Mjc6Mjk1OjExMQ",
        },
        {
          x: 3650,
          y: 4650,
          id: "Mjg6NDAzOjIzMQ",
        },
        {
          x: 2650,
          y: 4150,
          id: "Mjk6Mjk1OjI0Mw",
        },
        {
          x: 3050,
          y: 3750,
          id: "Mjk6Mjk1OjExMQ",
        },
        {
          x: 2450,
          y: 3750,
          id: "MzA6MzI2OjY5OQ",
        },
        {
          x: 1850,
          y: 3550,
          id: "MzA6MzI2OjM5OQ",
        },
        {
          x: 1450,
          y: 4150,
          id: "MzE6Mjk1OjMxNQ",
        },
        {
          x: 2450,
          y: 4650,
          id: "MzI6MzI2OjY5OQ",
        },
        {
          x: 3150,
          y: 4450,
          id: "MzM6Njg6NTE5",
        },
      ],
      tokens: [
        {
          id: "hazard4",
          x: 3300,
          y: 5e3,
        },
        {
          id: "npc11",
          x: 3100,
          y: 4500,
        },
        {
          id: "hazard4",
          x: 2800,
          y: 5e3,
        },
        {
          id: "npc25",
          x: 2400,
          y: 4600,
        },
        {
          id: "hazard4",
          x: 1400,
          y: 4800,
        },
        {
          id: "hazard5",
          x: 1800,
          y: 4800,
        },
        {
          id: "npc29",
          x: 1800,
          y: 3300,
        },
        {
          id: "npc10",
          x: 1700,
          y: 3600,
        },
        {
          id: "npc10",
          x: 1900,
          y: 3600,
        },
        {
          id: "npc34",
          x: 3600,
          y: 3300,
        },
        {
          id: "npc34",
          x: 3600,
          y: 3500,
        },
        {
          id: "npc40",
          x: 3400,
          y: 3300,
        },
        {
          id: "npc23",
          x: 3e3,
          y: 3100,
        },
        {
          id: "npc9",
          x: 2800,
          y: 2900,
        },
        {
          id: "npc9",
          x: 3100,
          y: 3100,
        },
        {
          id: "hazard4",
          x: 3e3,
          y: 2600,
        },
        {
          id: "npc34",
          x: 1700,
          y: 1900,
        },
        {
          id: "npc29",
          x: 1800,
          y: 2100,
        },
        {
          id: "npc38",
          x: 1600,
          y: 2200,
        },
        {
          id: "npc8",
          x: 1400,
          y: 2e3,
        },
        {
          id: "hazard4",
          x: 2600,
          y: 2300,
        },
        {
          id: "npc34",
          x: 3400,
          y: 1800,
        },
        {
          id: "npc38",
          x: 3700,
          y: 1700,
        },
        {
          id: "npc38",
          x: 3600,
          y: 1700,
        },
        {
          id: "npc38",
          x: 3300,
          y: 2300,
        },
        {
          id: "npc38",
          x: 3400,
          y: 2300,
        },
      ],
    }),
    new ModuleScene({
      name: "map3",
      canonical: {
        name: "aoe4/map3",
        priority: 0,
      },
      nameInfo: {
        x: 84.75,
        y: 294.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 36,
      width: 1161,
      height: 1528,
      imageLeft: 36,
      imageRight: 1154,
      imageCols: 39,
      imageTop: 17,
      imageBottom: 1506,
      imageRows: 52,
      globalLight: true,
      detailsFile: "/aoe/maps/aoe4-map3.json",
      journals: [
        {
          x: 3050,
          y: 4150,
          id: "NDA6OTk6MzI3",
        },
        {
          x: 3050,
          y: 3350,
          id: "NDA6MzI2OjY5OQ",
        },
        {
          x: 1750,
          y: 3650,
          id: "NDE6Mjk1OjYzOQ",
        },
        {
          x: 1850,
          y: 2450,
          id: "NDE6Mjk1OjIxOQ",
        },
        {
          x: 3050,
          y: 1950,
          id: "NDI6OTk6NTU1",
        },
        {
          x: 4250,
          y: 2050,
          id: "NDI6MzI2OjMxNQ",
        },
        {
          x: 4650,
          y: 2150,
          id: "NDI6MzI2OjIxOQ",
        },
        {
          x: 4450,
          y: 2750,
          id: "NDI6MzI2OjE0Nw",
        },
        {
          x: 3150,
          y: 2850,
          id: "NDM6Njg6Njk5",
        },
        {
          x: 2450,
          y: 2450,
          id: "NDI6OTk6Mzc1",
        },
        {
          x: 2850,
          y: 2450,
          id: "NDI6OTk6MTQ3",
        },
        {
          x: 3250,
          y: 2450,
          id: "NDI6MzI2OjYzOQ",
        },
        {
          x: 3650,
          y: 2450,
          id: "NDI6MzI2OjQ5NQ",
        },
        {
          x: 3850,
          y: 3350,
          id: "NDM6Njg6NTc5",
        },
        {
          x: 4450,
          y: 3650,
          id: "NDM6Njg6Mzc1",
        },
        {
          x: 1650,
          y: 6250,
          id: "NDM6Njg6MTcx",
        },
        {
          x: 1650,
          y: 5450,
          id: "NDQ6OTk6NjM5",
        },
        {
          x: 3250,
          y: 6350,
          id: "NDk6Njg6Njk5",
        },
        {
          x: 2650,
          y: 6450,
          id: "NDk6Mjk1OjYwMw",
        },
        {
          x: 4250,
          y: 6050,
          id: "NTA6OTk6Mzc1",
        },
        {
          x: 4350,
          y: 5250,
          id: "NTA6MzI2OjM5OQ",
        },
        {
          x: 3150,
          y: 5550,
          id: "NTE6Njg6Mzc1",
        },
        {
          x: 1150,
          y: 1550,
          id: "Mzc6Njg6Mzc1",
        },
        {
          x: 1150,
          y: 1650,
          id: "Mzg6OTk6Mjc5",
        },
      ],
      tokens: [
        {
          id: "hazard2",
          x: 3100,
          y: 3300,
        },
        {
          id: "npc17",
          x: 3100,
          y: 5650,
        },
        {
          id: "npc41",
          x: 4600,
          y: 5300,
        },
        {
          id: "npc41",
          x: 4400,
          y: 5100,
        },
        {
          id: "npc41",
          x: 4200,
          y: 5400,
        },
        {
          id: "npc39",
          x: 4300,
          y: 5900,
        },
        {
          id: "npc14",
          x: 1500,
          y: 6200,
        },
        {
          id: "npc31",
          x: 2400,
          y: 6200,
          elite: true,
        },
      ],
    }),
    new ModuleScene({
      name: "map4",
      canonical: {
        name: "aoe4/map4",
        priority: 0,
      },
      nameInfo: {
        x: 66,
        y: 708.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 54,
      width: 1209,
      height: 1542,
      imageLeft: 6,
      imageRight: 1192,
      imageCols: 56,
      imageTop: 226,
      imageBottom: 1519,
      imageRows: 61,
      globalLight: true,
      detailsFile: "/aoe/maps/aoe4-map4.json",
      journals: [
        {
          x: 4150,
          y: 8350,
          id: "NTU6Mjk1Ojk5",
        },
        {
          x: 2750,
          y: 7250,
          id: "NTY6OTk6MzE1",
        },
        {
          x: 4250,
          y: 7350,
          id: "NTY6MzI2OjQ4Mw",
        },
        {
          x: 5550,
          y: 7850,
          id: "NTc6Njg6NjI3",
        },
        {
          x: 6250,
          y: 6750,
          id: "NTc6Mjk1OjY5OQ",
        },
        {
          x: 5250,
          y: 6250,
          id: "NTg6OTk6MzI3",
        },
        {
          x: 6150,
          y: 5450,
          id: "NTg6MzI2OjU0Mw",
        },
        {
          x: 4850,
          y: 4950,
          id: "NTk6Njg6NjAz",
        },
        {
          x: 3750,
          y: 5850,
          id: "NTk6Mjk1OjY5OQ",
        },
        {
          x: 2550,
          y: 6150,
          id: "NjA6OTk6OTk",
        },
        {
          x: 2350,
          y: 5250,
          id: "NjE6Njg6NDIz",
        },
        {
          x: 2550,
          y: 4150,
          id: "NjE6Mjk1Ojk5",
        },
        {
          x: 3750,
          y: 4350,
          id: "NjI6OTk6NDM1",
        },
        {
          x: 3350,
          y: 3950,
          id: "NjI6OTk6Mjkx",
        },
        {
          x: 3950,
          y: 4050,
          id: "NjI6MzI2OjExMQ",
        },
        {
          x: 4750,
          y: 4250,
          id: "NjM6Njg6MTQ3",
        },
        {
          x: 5450,
          y: 3950,
          id: "NjQ6OTk6Njk5",
        },
        {
          x: 4850,
          y: 3850,
          id: "NjQ6OTk6Mzk5",
        },
        {
          x: 5050,
          y: 2750,
          id: "NjQ6MzI2OjE0Nw",
        },
      ],
      tokens: [
        {
          id: "npc32",
          x: 5600,
          y: 7600,
        },
        {
          id: "hazard3",
          x: 5500,
          y: 6100,
        },
        {
          id: "npc24",
          x: 5200,
          y: 6e3,
        },
        {
          id: "npc44",
          x: 6300,
          y: 4700,
        },
        {
          id: "npc44",
          x: 6300,
          y: 3900,
        },
        {
          id: "npc45",
          x: 5100,
          y: 4700,
        },
        {
          id: "npc42",
          x: 4500,
          y: 4300,
        },
        {
          id: "npc42",
          x: 4900,
          y: 4300,
        },
        {
          id: "npc21",
          x: 4700,
          y: 3700,
        },
        {
          id: "npc20",
          x: 3800,
          y: 3900,
        },
        {
          id: "hazard6",
          x: 3700,
          y: 4200,
        },
        {
          id: "npc33",
          x: 2200,
          y: 5100,
        },
        {
          id: "npc33",
          x: 2400,
          y: 5500,
        },
        {
          id: "npc33",
          x: 2600,
          y: 5400,
        },
        {
          id: "npc43",
          x: 2400,
          y: 6200,
        },
      ],
    }),
  ];
  journals = [
    new AdventureImage({
      name: "journal1",
      page: 4,
      width: 1260,
      height: 1636,
    }),
    new AdventureImage({
      name: "journal2",
      page: 6,
      width: 1168,
      height: 779,
    }),
    new AdventureImage({
      name: "journal3",
      page: 34,
      width: 1168,
      height: 779,
    }),
    new CaptionImage({
      name: "journal4",
      page: 37,
      width: 642,
      height: 454,
    }),
    new CaptionImage({
      name: "journal5",
      page: 41,
      width: 507,
      height: 369,
    }),
    new AdventureImage({
      name: "journal6",
      page: 52,
      width: 1168,
      height: 779,
    }),
    new AdventureImage({
      name: "journal7",
      page: 66,
      width: 1261,
      height: 1636,
    }),
    new AdventureImage({
      name: "journal8",
      page: 72,
      width: 1260,
      height: 1637,
    }),
    new AdventureImage({
      name: "journal9",
      page: 78,
      width: 1260,
      height: 1636,
    }),
    new CaptionImage({
      name: "journal10",
      page: 79,
      width: 411,
      height: 394,
    }),
    new CaptionImage({
      name: "journal11",
      page: 80,
      width: 294,
      height: 466,
    }),
    new CaptionImage({
      name: "journal12",
      page: 80,
      width: 377,
      height: 482,
    }),
    new CaptionImage({
      name: "journal13",
      page: 81,
      width: 301,
      height: 425,
    }),
    new CaptionImage({
      name: "journal14",
      page: 81,
      width: 460,
      height: 343,
    }),
    new AdventureImage({
      name: "journal15",
      page: 83,
      width: 732,
      height: 975,
    }),
    new AdventureImage({
      name: "journal16",
      page: 99,
      width: 1261,
      height: 1637,
    }),
    new CaptionImage({
      name: "npc31",
      page: 69,
      width: 647,
      height: 966,
    }),
    new CaptionImage({
      name: "npc32",
      page: 70,
      width: 580,
      height: 1230,
    }),
    new CaptionImage({
      name: "npc33",
      page: 75,
      width: 765,
      height: 1226,
    }),
    new CaptionImage({
      name: "npc34",
      page: 77,
      width: 895,
      height: 1140,
    }),
    new CaptionImage({
      name: "npc35",
      page: 89,
      width: 892,
      height: 1217,
    }),
    new CaptionImage({
      name: "npc36",
      page: 91,
      width: 839,
      height: 789,
    }),
    new CaptionImage({
      name: "npc37",
      page: 93,
      width: 767,
      height: 1186,
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.8eBXEszbl4gOHGdU",
      page: 8,
      width: 561,
      height: 561,
      tokenX: 18,
      tokenY: 72,
      tokenSize: 560,
      forIds: ["OTM6Njg6NDk1"],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.JFcEtt18SGlb5uxm",
      page: 11,
      width: 633,
      height: 1034,
      tokenX: -157,
      tokenY: 35,
      tokenSize: 334,
      forIds: ["MTE6Njg6Mjkx"],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.LkaB8RH73DY4TO9V",
      name: {
        page: 16,
        x: 280.2795,
        y: 453.0408,
      },
      page: 16,
      width: 496,
      height: 550,
      tokenX: 64,
      tokenY: 47,
      tokenSize: 550,
      forIds: ["MTY6OTk6NTQz"],
    }),
    new ModuleNpc({
      id: "npc4",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.phkvSUK6WXxgJOoC",
      name: {
        page: 17,
        x: 261.8229,
        y: 469.0408,
      },
      page: 17,
      width: 421,
      height: 507,
      tokenX: 52,
      tokenY: 67,
      tokenSize: 507,
      forIds: ["MTY6MzI2OjY5OQ"],
    }),
    new ModuleNpc({
      id: "npc5",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.smItqlbr0iuDJ8nL",
      name: {
        page: 19,
        x: 258.3264,
        y: 453.753,
      },
      page: 19,
      width: 526,
      height: 531,
      tokenX: 8,
      tokenY: 23,
      tokenSize: 531,
      forIds: ["MjA6OTk6Njk5"],
    }),
    new ModuleNpc({
      id: "npc6",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 20,
        x: 264.9094,
        y: 177.753,
      },
      page: 20,
      width: 651,
      height: 1140,
      tokenX: -204,
      tokenY: 19,
      tokenSize: 300,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc7",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.BCMkxoQB4xK4BniG",
      page: 24,
      width: 856,
      height: 1163,
      tokenX: -276,
      tokenY: -32,
      tokenSize: 295,
      forIds: ["MjQ6OTk6NTc5", "NDc6Mjk1OjE3MQ"],
    }),
    new ModuleNpc({
      id: "npc8",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.Q1wybC7rSc4MIF9g",
      name: {
        page: 26,
        x: 305.0341,
        y: 433.7439,
      },
      page: 26,
      width: 574,
      height: 587,
      tokenX: -26,
      tokenY: 62,
      tokenSize: 503,
      forIds: ["MjY6MzI2OjI5MQ"],
    }),
    new ModuleNpc({
      id: "npc9",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.Uhi3wX4KveuMSARt",
      page: 28,
      width: 982,
      height: 814,
      tokenX: -313,
      tokenY: -85,
      tokenSize: 394,
      forIds: ["Mjc6Mjk1OjM2Mw"],
    }),
    new ModuleNpc({
      id: "npc10",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.GYhV5eYNDO1Llbv2",
      page: 30,
      width: 799,
      height: 1211,
      tokenX: -360,
      tokenY: -155,
      tokenSize: 287,
      forIds: ["NDU6Mjk1OjYwMw", "MzE6Njg6MjY3"],
    }),
    new ModuleNpc({
      id: "npc11",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.gIcReNQOZceZBBlw",
      page: 33,
      width: 589,
      height: 589,
      tokenX: 1,
      tokenY: 96,
      tokenSize: 561,
      forIds: ["ODk6Njg6NTY3", "MzM6MzUzOjU5MQ"],
    }),
    new ModuleNpc({
      id: "npc12",
      actorUuid: "Compendium.pf2e.pfs-season-1-bestiary.Actor.K6JYKFI9HLFWf12d",
      name: {
        page: 35,
        x: 299.5415,
        y: 427.753,
      },
      page: 35,
      width: 557,
      height: 550,
      tokenX: 57,
      tokenY: 123,
      tokenSize: 697,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc13",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.xN3FDmrCKWW0psBu",
      page: 39,
      width: 813,
      height: 1005,
      tokenX: -235,
      tokenY: 51,
      tokenSize: 305,
      forIds: ["Mzk6Njg6Njk5"],
    }),
    new ModuleNpc({
      id: "npc14",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 43,
        x: 256.6504,
        y: 456.5408,
      },
      page: 43,
      width: 404,
      height: 571,
      tokenX: 61,
      tokenY: 50,
      tokenSize: 515,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc15",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.H4bY8v6e3drOIoUe",
      page: 46,
      width: 776,
      height: 1180,
      tokenX: -247,
      tokenY: -239,
      tokenSize: 284,
      forIds: ["NDc6Njg6Njk5"],
    }),
    new ModuleNpc({
      id: "npc16",
      actorUuid: "Compendium.pf2e.pfs-season-1-bestiary.Actor.K6JYKFI9HLFWf12d",
      name: {
        page: 47,
        x: 251.0246,
        y: 420.5408,
      },
      page: 47,
      width: 517,
      height: 623,
      tokenX: 65,
      tokenY: 19,
      tokenSize: 651,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc17",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.S35DifoycBwkxaGq",
      page: 51,
      width: 633,
      height: 621,
      tokenX: -136,
      tokenY: -45,
      tokenSize: 549,
      forIds: ["NTE6Mjk1OjI0Mw"],
    }),
    new ModuleNpc({
      id: "npc18",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 57,
        x: 250.9299,
        y: 444.5408,
      },
      page: 57,
      width: 486,
      height: 562,
      tokenX: 11,
      tokenY: 52,
      tokenSize: 506,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc19",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.XKOQ3ll9TGNso0uB",
      name: {
        page: 59,
        x: 381.782,
        y: 114.9651,
      },
      page: 59,
      width: 936,
      height: 961,
      tokenX: -270,
      tokenY: 47,
      tokenSize: 317,
      forIds: ["NjA6OTk6MjY3"],
    }),
    new ModuleNpc({
      id: "npc20",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 63,
        x: 258.309,
        y: 429.753,
      },
      page: 63,
      width: 589,
      height: 675,
      tokenX: 34,
      tokenY: 11,
      tokenSize: 619,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc21",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.WplBGSeB9pK9AULX",
      page: 65,
      width: 525,
      height: 487,
      tokenX: 5,
      tokenY: 69,
      tokenSize: 497,
      forIds: ["OTE6Njg6MzM5", "NjQ6MzI2OjI0Mw"],
    }),
    new ModuleNpc({
      id: "npc22",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.fV5VIoXMtixmI3Wc",
      page: 84,
      width: 619,
      height: 1083,
      tokenX: -203,
      tokenY: 70,
      tokenSize: 327,
      forIds: ["ODQ6MjUxOjYxNQ", "NDU6Njg6Mzk5"],
    }),
    new ModuleNpc({
      id: "npc23",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.u45PPktoMp5L2vf3",
      page: 85,
      width: 855,
      height: 1187,
      tokenX: -251,
      tokenY: -122,
      tokenSize: 319,
      forIds: ["ODU6Njg6NjAz", "Mjc6Mjk1OjQxMQ"],
    }),
    new ModuleNpc({
      id: "npc24",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.1xGAktpj6N2Ugh0r",
      page: 86,
      width: 710,
      height: 958,
      tokenX: -302,
      tokenY: 17,
      tokenSize: 398,
      forIds: ["ODY6MjUxOjU2Nw", "NTg6MzI2OjU5MQ"],
    }),
    new ModuleNpc({
      id: "npc25",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.BoFg19e3N8WiNa3Z",
      page: 87,
      width: 1006,
      height: 1028,
      tokenX: -301,
      tokenY: -340,
      tokenSize: 412,
      forIds: ["ODc6Njg6NjI3", "MzM6Njg6NjM5"],
    }),
    new ModuleNpc({
      id: "npc26",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.phkvSUK6WXxgJOoC",
      label: "AA",
      forIds: ["MjE6Njg6OTk", "NDQ6MzI2OjE3MQ"],
    }),
    new ModuleNpc({
      id: "npc27",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.1G4OdEHRPF8GMHK8",
      label: "AC",
      forIds: [
        "MjE6Mjk1OjI0Mw",
        "MTk6Njg6Mzc1",
        "MjE6Njg6NTc5",
        "MTc6Njg6MTQ3",
        "MTQ6MzI2OjQ4Mw",
        "MjA6OTk6NjE1",
      ],
    }),
    new ModuleNpc({
      id: "npc28",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.DxV2vH17H789bJ6y",
      label: "A",
      forIds: ["MTI6MzI2OjY5OQ"],
    }),
    new ModuleNpc({
      id: "npc29",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.cQMM2Ld0IBM9GcDo",
      label: "NP",
      forIds: [
        "NDc6Njg6OTk",
        "NDU6Mjk1OjY1MQ",
        "ODo5OToyMDc",
        "MTE6Njg6Njk5",
        "MzE6Njg6MzE1",
        "MjY6MzI2OjM4Nw",
      ],
    }),
    new ModuleNpc({
      id: "npc30",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.7LN8clGKJWTpxISR",
      label: "BA",
      forIds: ["MTc6Njg6OTk", "MTU6Njg6Njk5", "MTk6Njg6NDIz", "MjE6Njg6NjI3"],
    }),
    new ModuleNpc({
      id: "npc31",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.pxlZ8QbxMK6b3l5w",
      label: "LS",
      forIds: ["NTA6OTk6NDcx"],
    }),
    new ModuleNpc({
      id: "npc32",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.i8C4jqI3VdozylBL",
      label: "C",
      forIds: ["NTc6Njg6OTk"],
    }),
    new ModuleNpc({
      id: "npc33",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.JnNPdvOXtkGQHyfQ",
      label: "GW",
      forIds: ["NjE6Mjk1OjYxNQ"],
    }),
    new ModuleNpc({
      id: "npc34",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.LkaB8RH73DY4TO9V",
      label: "PoB",
      forIds: [
        "MjY6NDMxOjQ0Nw",
        "Mjg6MzI4OjM4Nw",
        "MjU6Mjk1OjYyNw",
        "NDQ6MzI2OjIxOQ",
      ],
    }),
    new ModuleNpc({
      id: "npc35",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.WoICHri7raCYv1wU",
      label: "LD",
      forIds: ["NDg6MzI2OjY5OQ"],
    }),
    new ModuleNpc({
      id: "npc36",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.bb5Z4z4EHb5LbCLK",
      label: "L",
      forIds: ["ODozMjY6MjY3"],
    }),
    new ModuleNpc({
      id: "npc37",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.RqX0vfUjlycKjGyp",
      label: "CE",
      forIds: ["MjA6MzgyOjQzNQ"],
    }),
    new ModuleNpc({
      id: "npc38",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.S9JJsUNSeeoIClON",
      label: "PE",
      forIds: ["MjY6MzI2OjMzOQ", "MjU6Mjk1OjU3OQ"],
    }),
    new ModuleNpc({
      id: "npc39",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.x26dyZZZRvZpzK2X",
      label: "Q",
      forIds: ["NTA6MzI2OjUxOQ"],
    }),
    new ModuleNpc({
      id: "npc40",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.6wPW2dvpt86Ou6bL",
      label: "RS",
      forIds: ["Mjg6MzU3OjMzOQ"],
    }),
    new ModuleNpc({
      id: "npc41",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.ePJcp2ADOjJYYQ5Q",
      label: "SC",
      forIds: ["NDU6Mjk1OjE4Mw", "NTE6Njg6NTE5"],
    }),
    new ModuleNpc({
      id: "npc42",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.WjZCNuHNKfeeHCQS",
      label: "WTWC",
      forIds: ["NjM6Mjk1OjE1OQ"],
    }),
    new ModuleNpc({
      id: "npc43",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.Ge5Q5I7TTksf7QyN",
      label: "Z",
      forIds: ["NjE6Njg6NjE1"],
    }),
    new ModuleNpc({
      id: "npc44",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.n1Mv0Q1MirfjBmfI",
      label: "U",
      forIds: ["NTk6Njg6Njk5"],
    }),
    new ModuleNpc({
      id: "npc45",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.31kXa1P0LUl38jYG",
      label: "Z",
      forIds: ["NTk6Njg6Mjc5"],
    }),
    new ModuleNpc({
      id: "npc46",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.httXfBPGseF9csXa",
      label: "BT",
      forIds: ["MTc6Njg6MTk1"],
    }),
    new ModuleNpc({
      id: "npc47",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.C1gYuDSwTkTIkAcC",
      label: "RG",
      forIds: ["MTg6MzI2OjQ4Mw"],
    }),
    new ModuleNpc({
      id: "hazard1",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.XTHcALqbg5kgxtPw",
      label: "AFT",
      forIds: ["NDk6Njg6MTU5"],
    }),
    new ModuleNpc({
      id: "hazard2",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.FmiOJ9HEdCBDB89z",
      label: "BCT",
      forIds: ["NDA6MzI2OjE3MQ"],
    }),
    new ModuleNpc({
      id: "hazard3",
      actorUuid:
        "Compendium.pf2e.pathfinder-dark-archive.Actor.6gSbmVKbdUSIluMR",
      label: "DM",
      forIds: ["NTg6OTk6MTM1"],
    }),
    new ModuleNpc({
      id: "hazard4",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.u1cuwAE3xzhYW4Mi",
      label: "FDT",
      forIds: [
        "MjU6Njg6NjAz",
        "Mjc6Njg6MzUx",
        "Mjk6Njg6NTQz",
        "MzI6MzI2OjIwNw",
        "MzI6OTk6OTk",
      ],
    }),
    new ModuleNpc({
      id: "hazard5",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.64TX3n5xufgjqbwK",
      label: "PDS",
      forIds: ["MzI6OTk6NjE1"],
    }),
    new ModuleNpc({
      id: "hazard6",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.jgSS31hwrQ1n4jVF",
      label: "WOT",
      forIds: ["NjI6MzI2OjYzOQ"],
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
          id: "NzozNzE6NDIz",
        },
        {
          id: "OTozMDQ6Njk5",
        },
        {
          id: "Nzo2ODoyNjc",
        },
        {
          id: "ODo5OTo2MTU",
        },
        {
          id: "ODozMjY6MjE5",
        },
        {
          id: "OToyOTU6MzE1",
        },
        {
          id: "MTA6OTk6MTcx",
        },
        {
          id: "MTE6Njg6NjUx",
        },
        {
          id: "MTE6Njg6NTQz",
        },
        {
          id: "MTI6OTk6NjI3",
        },
        {
          id: "MTI6OTk6NDEx",
        },
        {
          id: "MTI6MzI2OjYxNQ",
        },
        {
          id: "MTM6Mjk1OjI1NQ",
        },
        {
          id: "MTM6Mjk1OjE1OQ",
        },
        {
          id: "MTM6MzA0OjY5OQ",
        },
        {
          id: "MTQ6OTk6MzYz",
        },
        {
          id: "MTU6Njg6MzE1",
        },
        {
          id: "MTY6MzI2OjE4Mw",
        },
        {
          id: "MTc6Njg6NjAz",
        },
        {
          id: "MTc6Njg6NDIz",
        },
        {
          id: "MTg6OTk6NDU5",
        },
        {
          id: "MTg6OTk6MzE1",
        },
        {
          id: "MTg6MzI2OjM4Nw",
        },
        {
          id: "MTg6MzI2OjMzOQ",
        },
        {
          id: "MTg6MzI2OjI3OQ",
        },
        {
          id: "MTg6MzI2OjIxOQ",
        },
        {
          id: "MTk6Mjk1OjY5OQ",
        },
        {
          id: "MjA6MzI2OjY5OQ",
        },
        {
          id: "MjA6MzM3OjEyMw",
        },
        {
          id: "MjE6Njg6NTMx",
        },
        {
          id: "MjE6Mjk1OjQzNQ",
        },
        {
          id: "MjE6Mjk1OjMzOQ",
        },
        {
          id: "MjE6Mjk1OjE5NQ",
        },
        {
          id: "MjE6Mjk1OjExMQ",
        },
        {
          id: "MjM6Njg6MjMx",
        },
        {
          id: "MjM6Mjk1OjYwMw",
        },
        {
          id: "MjM6Mjk1OjM4Nw",
        },
        {
          id: "MjQ6MzQ1OjI1NQ",
        },
        {
          id: "MjU6Njg6NDIz",
        },
        {
          id: "MjY6OTk6NjM5",
        },
        {
          id: "MjY6OTk6NDIz",
        },
        {
          id: "Mjc6Njg6NDU5",
        },
        {
          id: "Mjc6Njg6MzAz",
        },
        {
          id: "Mjc6Njg6MTIz",
        },
        {
          id: "Mjc6Mjk1OjExMQ",
        },
        {
          id: "Mjg6NDAzOjIzMQ",
        },
        {
          id: "Mjk6Mjk1OjI0Mw",
        },
        {
          id: "Mjk6Mjk1OjExMQ",
        },
        {
          id: "MzA6MzI2OjY5OQ",
        },
        {
          id: "MzA6MzI2OjM5OQ",
        },
        {
          id: "MzE6Mjk1OjMxNQ",
        },
        {
          id: "MzI6MzI2OjY5OQ",
        },
        {
          id: "MzM6Njg6NTE5",
        },
        {
          id: "MzM6MzU1OjQyMw",
        },
      ],
    },
    {
      name: "Chapter 2",
      pages: [
        {
          id: "MzQ6MjU0OjM1Ng",
        },
        {
          id: "MzU6MzcxOjY5OQ",
        },
        {
          id: "MzU6NDE4OjQzNQ",
        },
        {
          id: "Mzg6MTA4OjY5OQ",
        },
        {
          id: "Mzk6MzA0OjY5OQ",
        },
        {
          id: "Mzc6Njg6Mzc1",
        },
        {
          id: "Mzg6OTk6Mjc5",
        },
        {
          id: "Mzg6MzI2OjUwNw",
        },
        {
          id: "Mzk6Njg6Mjc5",
        },
        {
          id: "NDA6OTk6MzI3",
        },
        {
          id: "NDA6MzI2OjY5OQ",
        },
        {
          id: "NDE6Mjk1OjYzOQ",
        },
        {
          id: "NDE6Mjk1OjIxOQ",
        },
        {
          id: "NDI6OTk6NTU1",
        },
        {
          id: "NDI6OTk6Mzc1",
        },
        {
          id: "NDI6OTk6MTQ3",
        },
        {
          id: "NDI6MzI2OjYzOQ",
        },
        {
          id: "NDI6MzI2OjQ5NQ",
        },
        {
          id: "NDI6MzI2OjMxNQ",
        },
        {
          id: "NDI6MzI2OjIxOQ",
        },
        {
          id: "NDI6MzI2OjE0Nw",
        },
        {
          id: "NDM6Njg6Njk5",
        },
        {
          id: "NDM6Njg6NTc5",
        },
        {
          id: "NDM6Njg6Mzc1",
        },
        {
          id: "NDM6Njg6MTcx",
        },
        {
          id: "NDQ6OTk6NjM5",
        },
        {
          id: "NDQ6OTk6MjU1",
        },
        {
          id: "NDQ6MzI2OjQzNQ",
        },
        {
          id: "NDU6Njg6Njk5",
        },
        {
          id: "NDU6Njg6MjY3",
        },
        {
          id: "NDU6Mjk1OjQ0Nw",
        },
        {
          id: "NDU6Mjk1OjEzNQ",
        },
        {
          id: "NDY6OTk6NjE1",
        },
        {
          id: "NDY6MzI2OjY2Mw",
        },
        {
          id: "NDc6Mjk1OjY5OQ",
        },
        {
          id: "NDc6Mjk1OjEyMw",
        },
        {
          id: "NDg6MzI2OjM5OQ",
        },
        {
          id: "NDg6MzI2OjI1NQ",
        },
        {
          id: "NDk6Njg6Njk5",
        },
        {
          id: "NDk6Mjk1OjYwMw",
        },
        {
          id: "NTA6OTk6Mzc1",
        },
        {
          id: "NTA6MzI2OjM5OQ",
        },
        {
          id: "NTE6Njg6Mzc1",
        },
      ],
    },
    {
      name: "Chapter 3",
      pages: [
        {
          id: "NTI6MjU0OjM1Ng",
        },
        {
          id: "NTM6MzcxOjY5OQ",
        },
        {
          id: "NTM6MzcxOjM3NQ",
        },
        {
          id: "NTU6MzA0OjY5OQ",
        },
        {
          id: "NTI6MzI2OjE1OQ",
        },
        {
          id: "NTU6Mjk1OjM4Nw",
        },
        {
          id: "NTU6Mjk1Ojk5",
        },
        {
          id: "NTY6OTk6MzE1",
        },
        {
          id: "NTY6MzI2OjQ4Mw",
        },
        {
          id: "NTc6Njg6NjI3",
        },
        {
          id: "NTc6Mjk1OjY5OQ",
        },
        {
          id: "NTg6OTk6MzI3",
        },
        {
          id: "NTg6MzI2OjU0Mw",
        },
        {
          id: "NTk6Njg6NjAz",
        },
        {
          id: "NTk6Mjk1OjY5OQ",
        },
        {
          id: "NjA6OTk6OTk",
        },
        {
          id: "NjE6Njg6NDIz",
        },
        {
          id: "NjE6Mjk1Ojk5",
        },
        {
          id: "NjI6OTk6NDM1",
        },
        {
          id: "NjI6OTk6Mjkx",
        },
        {
          id: "NjI6MzI2OjExMQ",
        },
        {
          id: "NjM6Njg6MTQ3",
        },
        {
          id: "NjQ6OTk6Njk5",
        },
        {
          id: "NTY6MTA4OjY5OQ",
        },
        {
          id: "NjQ6OTk6Mzk5",
        },
        {
          id: "NjQ6MzI2OjE0Nw",
        },
        {
          id: "NjU6Mjk1OjE1OQ",
        },
      ],
    },
    {
      name: "Back Matter",
      pages: [
        {
          id: "Njc6MTgyOjY1Mw",
        },
        {
          id: "Njc6Mjk1OjMwMw",
        },
        {
          id: "Njg6OTk6MzE1",
        },
        {
          id: "Njg6MzI2OjY5OQ",
        },
        {
          id: "Njk6Njg6NTU1",
        },
        {
          id: "Njk6Mjk1OjUxOQ",
        },
        {
          id: "Njk6Mzc3OjQxMQ",
        },
        {
          id: "NzA6MzI2OjY5OQ",
        },
        {
          id: "NzA6MzI2OjE4Mw",
        },
        {
          id: "NzE6Njg6MzI3",
        },
        {
          id: "NzM6Nzg6NjIx",
        },
        {
          id: "NzM6Njg6Mjc5",
        },
        {
          id: "NzM6Mjk1OjQ1OQ",
        },
        {
          id: "NzM6Mjk1OjMyNw",
        },
        {
          id: "NzM6Mjk1OjIwNw",
        },
        {
          id: "NzQ6OTk6Njk5",
        },
        {
          id: "NzQ6OTk6NTY3",
        },
        {
          id: "NzQ6OTk6Mzk5",
        },
        {
          id: "NzQ6OTk6MjMx",
        },
        {
          id: "NzQ6OTk6MTIz",
        },
        {
          id: "NzQ6MzI2OjYyNw",
        },
        {
          id: "NzQ6MzI2OjUzMQ",
        },
        {
          id: "NzQ6MzI2OjQxMQ",
        },
        {
          id: "NzQ6MzI2OjMwMw",
        },
        {
          id: "NzQ6MzI2OjE4Mw",
        },
        {
          id: "NzU6Njg6Njk5",
        },
        {
          id: "NzU6Njg6NTY3",
        },
        {
          id: "NzU6Njg6NDcx",
        },
        {
          id: "NzU6Njg6MTEx",
        },
        {
          id: "NzY6OTk6NDcx",
        },
        {
          id: "NzY6OTk6OTk",
        },
        {
          id: "NzY6MzI2OjMwMw",
        },
        {
          id: "Nzc6Njg6NTU1",
        },
        {
          id: "Nzc6Njg6MjE5",
        },
        {
          id: "Nzk6MTAyOjYyMQ",
        },
        {
          id: "ODE6Mjk1OjU3OQ",
        },
        {
          id: "ODI6MzI2OjYyNw",
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
          id: "ODg6MTUzOjYyMg",
        },
        {
          id: "OTA6MTQ2OjYyMg",
        },
        {
          id: "OTI6MTQxOjYyMg",
        },
        {
          id: "Njg6MTA4OjY5OQ",
        },
        {
          id: "NzE6MzA0OjY5OQ",
        },
      ],
    },
    {
      name: "Handouts",
      pages: [
        {
          id: "NTM6MzExOjI2MA",
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
        {
          id: "npc36",
        },
        {
          id: "npc37",
        },
      ],
    },
  ];
  combines = [
    {
      source: "OTI6MzI2OjIwNw",
      dest: "OTI6MTQxOjYyMg",
    },
    {
      source: "OTA6MzI2OjE1OQ",
      dest: "OTA6MTQ2OjYyMg",
    },
    {
      source: "ODg6MzI2OjExMQ",
      dest: "ODg6MTUzOjYyMg",
    },
    {
      source: "ODQ6MTIwOjY2Mw",
      dest: "ODQ6MjUxOjY4Nw",
    },
    {
      source: "ODU6MzcxOjY2Mw",
      dest: "ODU6Njg6Njg3",
    },
    {
      source: "ODY6MTQ4OjY2Mw",
      dest: "ODY6MjUxOjY4Nw",
    },
    {
      source: "ODc6MzcxOjY2Mw",
      dest: "ODc6Njg6Njg3",
    },
  ];
  normalFontIds = this.normalFontIds.concat(["Basing:13"]);
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "ASSAULT ON HUNTING LODGE SEVEN" &&
        t.fontId === "ColiseumBold:38",
    );
  }
  preprocess(text) {}
  extractDetails(text, moduleData, sectionKey) {
    if (sectionKey === "handout53") {
      const t2 = text.pop(),
        t1 = text.pop(),
        title = this.getFakeText(`${t1.text}: ${t2.text}`, "GoodOT-Bold:12");
      title.id = t1.id;
      text.unshift(title);
    }
    this.markStartOfLine(text, 8, 343.25, 687);
    this.markStartOfLine(text, 8, 381.25, 639);
    this.markStartOfLine(text, 8, 409.25, 567);
    this.markStartOfLine(text, 8, 416.25, 555);
    this.markStartOfLine(text, 8, 425.25, 519);
    this.markStartOfLine(text, 8, 413.25, 471);
    this.markStartOfLine(text, 8, 364.25, 435);
    this.markIndented(text, 11, 67.5, 243);
    this.markIndented(text, 11, 67.5, 231);
    this.markStartOfLine(text, 16, 350.25, 663);
    this.markStartOfLine(text, 16, 359.25, 651);
    this.markStartOfLine(text, 16, 365.25, 639);
    this.markStartOfLine(text, 16, 377.25, 591);
    this.markStartOfLine(text, 16, 379.25, 579);
    this.markStartOfLine(text, 16, 382.25, 543);
    this.markIndented(text, 17, 351.75, 615);
    this.markIndented(text, 17, 375.75, 459);
    this.markIndented(text, 19, 359.75, 603);
    this.markStartOfLine(text, 28, 357.25, 339);
    this.markStartOfLine(text, 28, 366.25, 327);
    this.markStartOfLine(text, 28, 377.25, 315);
    this.markStartOfLine(text, 28, 390.25, 303);
    this.markIndented(text, 32, 99, 531);
    this.markStartOfLine(text, 33, 352.75, 591);
    this.markIndented(text, 33, 377.75, 543);
    this.markStartOfLine(text, 33, 354.8099, 423);
    this.markIndented(text, 40, 326.25, 111);
    this.markIndented(text, 47, 327.75, 531);
    this.markIndented(text, 49, 67.5, 111);
    this.markIndented(text, 57, 347.75, 519);
    this.markStartOfLine(text, 84, 276.5, 507);
    this.markStartOfLine(text, 84, 291.5, 291);
    this.markStartOfLine(text, 84, 290.5, 279);
    this.markStartOfLine(text, 86, 255.5001, 459);
    this.markStartOfLine(text, 86, 264.5001, 447);
    this.markStartOfLine(text, 86, 272.5001, 435);
    this.markStartOfLine(text, 86, 283.5001, 411);
    this.markStartOfLine(text, 86, 283.5001, 363);
    this.markStartOfLine(text, 86, 282.5001, 351);
    this.markStartOfLine(text, 86, 282.5001, 351);
    this.markStartOfLine(text, 86, 295.5001, 327);
    this.markStartOfLine(text, 86, 300.5001, 303);
    this.markStartOfLine(text, 86, 289.5001, 207);
    this.markStartOfLine(text, 86, 256.5001, 135);
    this.markStartOfLine(text, 86, 268.5001, 87);
    this.changeFontId(text, 53, 379.5, 291, "GoodOT-Italic:8.5");
    this.changeFontId(text, 7, 374.8945, 183, "GoodOT-Italic:8.5");
    this.changeFontId(text, 7, 370.5, 159, "GoodOT-Italic:8.5");
    this.changeFontId(text, 7, 374.8945, 159, "GoodOT-Italic:8.5");
    this.changeFontId(text, 7, 374.8945, 147, "GoodOT-Italic:8.5");
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
