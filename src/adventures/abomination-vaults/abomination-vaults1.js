import { AbominationVaultsBase } from "./base.js";
import { CaptionImage } from "../../core/images.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class AbominationVaults1 extends AbominationVaultsBase {
  prefix = "abomination-vaults1";
  fullName = "Abomination Vaults - Ruins of Gauntlight";
  pages = [
    this.ChapterHeadingPageLayout(6),
    this.RightSingleColumnWithSidebar(7),
    this.LeftTwoColumn(8),
    this.RightTwoColumnWithRightCutout(9, 450),
    this.LeftTwoColumnWithLeftCutout(10, 400),
    this.RightTwoColumn(11),
    this.LeftTwoColumn(12),
    this.RightTwoColumn(13),
    this.LeftTwoColumnWithLeftCutout(14, 531),
    this.RightTwoColumn(15),
    this.LeftTwoColumn(16),
    this.RightTwoColumn(17),
    this.LeftTwoColumn(18),
    this.RightTwoColumn(19),
    this.ChapterHeadingPageLayout(20),
    this.RightSingleColumnWithSidebar(21),
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
    this.LeftTwoColumn(34),
    this.RightTwoColumn(35),
    this.ChapterHeadingPageLayout(36),
    this.RightSingleColumnWithSidebar(37),
    this.RightTwoColumn(39),
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
    this.LeftTwoColumn(52),
    this.RightTwoColumn(53),
    this.ChapterHeadingPageLayout(54),
    this.RightSingleColumnWithSidebar(55),
    this.LeftTwoColumn(56),
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
    this.RightTwoColumnWithRightCutout(69, 305),
    this.LeftTwoColumnWithLeftCutout(70, 400),
    this.RightTwoColumn(71),
    this.LeftTwoColumn(72),
    this.RightTwoColumn(73),
    this.LeftTwoColumnWithLeftCutout(74, 510),
    this.RightTwoColumn(75),
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
      name: "map0",
      canonical: {
        name: "av1/Otari",
        priority: 0,
      },
      nameInfo: {
        x: 218.2938,
        y: 736.5,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 68,
      width: 1260,
      height: 1636,
      imageLeft: 0,
      imageRight: 1e3,
      imageCols: 10,
      imageTop: 0,
      imageBottom: 1e3,
      imageRows: 10,
      globalLight: true,
    }),
    new ModuleScene({
      name: "map1",
      canonical: {
        name: "av1/level1",
        priority: 0,
      },
      nameInfo: {
        x: 428.6063,
        y: 749.694,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 1259,
      height: 1637,
      imageLeft: 13,
      imageRight: 1252,
      imageCols: 43,
      imageTop: 9,
      imageBottom: 1622,
      imageRows: 56,
      globalLight: true,
      detailsFile: "/av/maps/av1-map1.json",
      journals: [
        {
          x: 2950,
          y: 6450,
          id: "ODo5OToyNTU",
        },
        {
          x: 2950,
          y: 5950,
          id: "ODozMjY6MTIz",
        },
        {
          x: 3650,
          y: 6250,
          id: "OTo2ODo0NTk",
        },
        {
          x: 3350,
          y: 4450,
          id: "OToyOTU6Mjkx",
        },
        {
          x: 2550,
          y: 5150,
          id: "MTA6MzI2OjM5OQ",
        },
        {
          x: 2250,
          y: 5650,
          id: "MTE6Njg6Njk5",
        },
        {
          x: 2350,
          y: 4450,
          id: "MTE6Njg6MjA3",
        },
        {
          x: 4050,
          y: 5150,
          id: "MTI6OTk6NTE5",
        },
        {
          x: 4150,
          y: 5650,
          id: "MTI6MzI2OjU3OQ",
        },
        {
          x: 4450,
          y: 6050,
          id: "MTI6MzI2OjMxNQ",
        },
        {
          x: 3150,
          y: 3650,
          id: "MTQ6MzI2OjUwNw",
        },
        {
          x: 3650,
          y: 3850,
          id: "MTU6Njg6MTM1",
        },
        {
          x: 3750,
          y: 3250,
          id: "MTU6Mjk1OjU3OQ",
        },
        {
          x: 4350,
          y: 3750,
          id: "MTU6Mjk1OjI3OQ",
        },
        {
          x: 4150,
          y: 2450,
          id: "MTY6OTk6Mzg3",
        },
        {
          x: 1950,
          y: 3650,
          id: "MTY6MzI2OjI5MQ",
        },
        {
          x: 1750,
          y: 3450,
          id: "MTY6MzI2OjExMQ",
        },
        {
          x: 2650,
          y: 2550,
          id: "MTc6Njg6MzI3",
        },
        {
          x: 2650,
          y: 1850,
          id: "MTc6Njg6MTEx",
        },
        {
          x: 2350,
          y: 2150,
          id: "MTg6OTk6NDQ3",
        },
        {
          x: 2150,
          y: 2150,
          id: "MTg6OTk6Mjc5",
        },
        {
          x: 1750,
          y: 1950,
          id: "MTg6OTk6MjE5",
        },
        {
          x: 1650,
          y: 2550,
          id: "MTg6MzI2OjUzMQ",
        },
        {
          x: 1250,
          y: 2950,
          id: "MTk6Njg6NDU5",
        },
        {
          x: 1550,
          y: 6450,
          id: "MTk6Njg6MTgz",
        },
      ],
      tokens: [
        {
          id: "npc46",
          x: 3100,
          y: 6300,
        },
        {
          id: "npc46",
          x: 3200,
          y: 6400,
        },
        {
          id: "npc46",
          x: 2800,
          y: 6300,
        },
        {
          id: "npc52",
          x: 3700,
          y: 6300,
        },
        {
          id: "npc33",
          x: 4400,
          y: 5800,
        },
        {
          id: "npc46",
          x: 4700,
          y: 5900,
        },
        {
          id: "npc46",
          x: 4300,
          y: 6200,
        },
        {
          id: "npc2",
          x: 4600,
          y: 6100,
        },
        {
          id: "npc46",
          x: 3900,
          y: 5300,
        },
        {
          id: "npc46",
          x: 4100,
          y: 5100,
        },
        {
          id: "npc46",
          x: 3700,
          y: 5100,
        },
        {
          id: "npc46",
          x: 4e3,
          y: 4900,
        },
        {
          id: "npc38",
          x: 2200,
          y: 5700,
        },
        {
          id: "npc38",
          x: 2e3,
          y: 5700,
        },
        {
          id: "npc1",
          x: 2300,
          y: 5100,
        },
        {
          id: "npc1",
          x: 2400,
          y: 5200,
        },
        {
          id: "hazard5",
          x: 2400,
          y: 4400,
        },
        {
          id: "npc1",
          x: 3300,
          y: 4300,
        },
        {
          id: "npc46",
          x: 3500,
          y: 4200,
        },
        {
          id: "npc46",
          x: 3600,
          y: 4300,
        },
        {
          id: "npc46",
          x: 3500,
          y: 4400,
        },
        {
          id: "npc53",
          x: 1500,
          y: 6600,
        },
        {
          id: "hazard1",
          x: 3100,
          y: 3500,
        },
        {
          id: "npc39",
          x: 4100,
          y: 3600,
        },
        {
          id: "npc25",
          x: 4500,
          y: 2200,
        },
        {
          id: "npc25",
          x: 4500,
          y: 2300,
        },
        {
          id: "npc26",
          x: 1200,
          y: 3e3,
        },
        {
          id: "npc3",
          x: 2500,
          y: 1700,
        },
        {
          id: "npc4",
          x: 1700,
          y: 2600,
          elite: true,
        },
      ],
    }),
    new ModuleScene({
      name: "map2",
      canonical: {
        name: "av1/level2",
        priority: 0,
      },
      nameInfo: {
        x: 296,
        y: 742.3319,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 22,
      width: 1260,
      height: 1636,
      imageLeft: 35,
      imageRight: 1219,
      imageCols: 31,
      imageTop: 12,
      imageBottom: 1619,
      imageRows: 42,
      globalLight: true,
      detailsFile: "/av/maps/av1-map2.json",
      journals: [
        {
          x: 1550,
          y: 1450,
          id: "MjM6Mjk1OjMzOQ",
        },
        {
          x: 1950,
          y: 1450,
          id: "MjM6Mjk1OjMwMw",
        },
        {
          x: 1150,
          y: 1550,
          id: "MjQ6MzcwOjMzOQ",
        },
        {
          x: 1050,
          y: 1250,
          id: "MjQ6MzI2OjE1OQ",
        },
        {
          x: 1050,
          y: 1850,
          id: "MjU6Njg6NTQz",
        },
        {
          x: 3150,
          y: 3750,
          id: "MjY6OTk6NjUx",
        },
        {
          x: 2750,
          y: 3750,
          id: "MjY6OTk6NDcx",
        },
        {
          x: 3050,
          y: 4350,
          id: "MjY6OTk6Mjkx",
        },
        {
          x: 2150,
          y: 4750,
          id: "MjY6MzI2OjU0Mw",
        },
        {
          x: 1850,
          y: 4650,
          id: "MjY6MzI2OjE5NQ",
        },
        {
          x: 1950,
          y: 4950,
          id: "Mjc6Njg6Mzc1",
        },
        {
          x: 1550,
          y: 4450,
          id: "Mjc6Njg6MjY3",
        },
        {
          x: 1550,
          y: 5050,
          id: "Mjg6MzM2OjQ5NQ",
        },
        {
          x: 2250,
          y: 4250,
          id: "Mjg6MzI3OjI1NQ",
        },
        {
          x: 2450,
          y: 3850,
          id: "Mjk6Njg6MjE5",
        },
        {
          x: 1950,
          y: 3950,
          id: "Mjk6MzA0OjU1NQ",
        },
        {
          x: 1750,
          y: 4050,
          id: "Mjk6MzU4OjM5OQ",
        },
        {
          x: 1350,
          y: 3850,
          id: "MzA6OTk6NjAz",
        },
        {
          x: 1450,
          y: 3250,
          id: "MzA6MzI2OjUxOQ",
        },
        {
          x: 1950,
          y: 3050,
          id: "MzE6Njg6NTY3",
        },
        {
          x: 3350,
          y: 3050,
          id: "MzE6Njg6Mzk5",
        },
        {
          x: 3650,
          y: 3750,
          id: "MzE6Njg6MTIz",
        },
        {
          x: 3850,
          y: 3550,
          id: "MzE6Mjk1OjM2Mw",
        },
        {
          x: 3750,
          y: 3150,
          id: "MzE6Mjk1OjExMQ",
        },
        {
          x: 3850,
          y: 2350,
          id: "MzI6OTk6NDU5",
        },
        {
          x: 3750,
          y: 2650,
          id: "MzI6OTk6MjY3",
        },
        {
          x: 3750,
          y: 2050,
          id: "MzI6OTk6MTIz",
        },
        {
          x: 3350,
          y: 2050,
          id: "MzI6MzI2OjI1NQ",
        },
        {
          x: 2950,
          y: 1650,
          id: "MzM6Njg6NDcx",
        },
        {
          x: 3750,
          y: 1550,
          id: "MzQ6OTk6Njk5",
        },
        {
          x: 2350,
          y: 2450,
          id: "MzU6Njg6NjI3",
        },
        {
          x: 1850,
          y: 2650,
          id: "MzU6Njg6MzM5",
        },
        {
          x: 2950,
          y: 2650,
          id: "MzU6Njg6MjU1",
        },
        {
          x: 2950,
          y: 3250,
          id: "MzU6Mjk1OjY5OQ",
        },
        {
          x: 2450,
          y: 3050,
          id: "MzU6Mjk1OjQ5NQ",
        },
      ],
      tokens: [
        {
          id: "npc6",
          x: 1100,
          y: 1800,
        },
        {
          id: "hazard3",
          x: 2818.375,
          y: 1954.625,
        },
        {
          id: "hazard3",
          x: 3081.1684768,
          y: 1948.5206888000005,
        },
        {
          id: "hazard3",
          x: 2812.4184768,
          y: 1654.7706888000005,
        },
        {
          id: "hazard3",
          x: 3053.0434768,
          y: 1420.3956888000005,
        },
        {
          id: "hazard3",
          x: 3259.2934768,
          y: 1695.3956888000005,
        },
        {
          id: "npc11",
          x: 3700,
          y: 1600,
        },
        {
          id: "npc35",
          x: 3900,
          y: 1800,
        },
        {
          id: "npc35",
          x: 3900,
          y: 1300,
        },
        {
          id: "hazard8",
          x: 3600,
          y: 1300,
        },
        {
          id: "hazard8",
          x: 3800,
          y: 1800,
        },
        {
          id: "npc10",
          x: 3800,
          y: 2e3,
        },
        {
          id: "npc50",
          x: 2100,
          y: 2400,
        },
        {
          id: "hazard2",
          x: 1900,
          y: 2900,
        },
        {
          id: "npc28",
          x: 3600,
          y: 3600,
        },
        {
          id: "npc28",
          x: 3600,
          y: 3800,
        },
        {
          id: "npc8",
          x: 2300,
          y: 3700,
        },
        {
          id: "npc9",
          x: 1100,
          y: 3500,
        },
        {
          id: "npc27",
          x: 3100,
          y: 4400,
        },
        {
          id: "npc27",
          x: 3200,
          y: 4300,
        },
        {
          id: "npc27",
          x: 3e3,
          y: 4500,
        },
        {
          id: "npc27",
          x: 3e3,
          y: 4700,
        },
        {
          id: "npc47",
          x: 2200,
          y: 4600,
        },
        {
          id: "npc47",
          x: 2100,
          y: 4800,
        },
        {
          id: "hazard4",
          x: 1700,
          y: 4500,
        },
        {
          id: "hazard4",
          x: 1800,
          y: 4500,
        },
        {
          id: "hazard4",
          x: 1900,
          y: 4500,
        },
        {
          id: "hazard4",
          x: 2e3,
          y: 4500,
        },
        {
          id: "npc41",
          x: 1500,
          y: 5100,
        },
        {
          id: "npc7",
          x: 1700,
          y: 4200,
        },
        {
          id: "npc47",
          x: 1500,
          y: 4300,
        },
      ],
    }),
    new ModuleScene({
      name: "map3",
      canonical: {
        name: "av1/level3",
        priority: 0,
      },
      nameInfo: {
        x: 148,
        y: 754.3319,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 38,
      width: 1259,
      height: 1636,
      imageLeft: 13,
      imageRight: 1237,
      imageCols: 34,
      imageTop: 15,
      imageBottom: 1599,
      imageRows: 44,
      globalLight: true,
      detailsFile: "/av/maps/av1-map3.json",
      journals: [
        {
          x: 1450,
          y: 4950,
          id: "MzY6MzI2OjExMQ",
        },
        {
          x: 1250,
          y: 5550,
          id: "Mzk6Njg6NDEx",
        },
        {
          x: 1650,
          y: 4150,
          id: "Mzk6Njg6MjU1",
        },
        {
          x: 1250,
          y: 4150,
          id: "Mzk6Mjk1OjYwMw",
        },
        {
          x: 1150,
          y: 4050,
          id: "NDA6OTk6NTA3",
        },
        {
          x: 1450,
          y: 3650,
          id: "NDA6OTk6MjMx",
        },
        {
          x: 1250,
          y: 3350,
          id: "NDA6MzI2OjUxOQ",
        },
        {
          x: 1450,
          y: 3050,
          id: "NDA6MzI2OjQ4Mw",
        },
        {
          x: 1150,
          y: 3050,
          id: "NDE6Njg6NDQ3",
        },
        {
          x: 1950,
          y: 3650,
          id: "NDE6Njg6MzAz",
        },
        {
          x: 2450,
          y: 3550,
          id: "NDE6Njg6MjE5",
        },
        {
          x: 2250,
          y: 3350,
          id: "NDI6MzI2OjY5OQ",
        },
        {
          x: 2250,
          y: 3850,
          id: "NDI6MzI2OjU3OQ",
        },
        {
          x: 2050,
          y: 4050,
          id: "NDM6Njg6NDEx",
        },
        {
          x: 2450,
          y: 4550,
          id: "NDM6Njg6MjY3",
        },
        {
          x: 1850,
          y: 4550,
          id: "NDQ6MzI2OjY1MQ",
        },
        {
          x: 2650,
          y: 3450,
          id: "NDQ6MzI2OjQzNQ",
        },
        {
          x: 2850,
          y: 3450,
          id: "NDQ6MzI2OjI5MQ",
        },
        {
          x: 2950,
          y: 3850,
          id: "NDU6Njg6Njk5",
        },
        {
          x: 2650,
          y: 3850,
          id: "NDU6MzM3OjQzNQ",
        },
        {
          x: 2650,
          y: 4050,
          id: "NDU6MzY0OjIxOQ",
        },
        {
          x: 2950,
          y: 4850,
          id: "NDY6OTk6NTU1",
        },
        {
          x: 2850,
          y: 5250,
          id: "NDY6OTk6MzUx",
        },
        {
          x: 2550,
          y: 5150,
          id: "NDY6OTk6MTM1",
        },
        {
          x: 2850,
          y: 3250,
          id: "NDY6MzI2OjM4Nw",
        },
        {
          x: 2050,
          y: 2950,
          id: "NDY6MzI2OjI3OQ",
        },
        {
          x: 1850,
          y: 2850,
          id: "NDc6Njg6NTY3",
        },
        {
          x: 1750,
          y: 2550,
          id: "NDc6Mjk1OjM3NQ",
        },
        {
          x: 1650,
          y: 3150,
          id: "NDc6Mjk1OjI5MQ",
        },
        {
          x: 2750,
          y: 2450,
          id: "NDc6Mjk1OjIxOQ",
        },
        {
          x: 2150,
          y: 2150,
          id: "NDg6OTk6MzUx",
        },
        {
          x: 1450,
          y: 2550,
          id: "NDg6OTk6MTgz",
        },
        {
          x: 3450,
          y: 2950,
          id: "NDk6Njg6Njk5",
        },
        {
          x: 3550,
          y: 1950,
          id: "NDk6Mjk1OjY5OQ",
        },
        {
          x: 2650,
          y: 2050,
          id: "NTA6MzI2OjIzMQ",
        },
        {
          x: 3650,
          y: 3850,
          id: "NTE6Njg6MTIz",
        },
        {
          x: 4050,
          y: 3750,
          id: "NTI6MzQ0OjEyMw",
        },
        {
          x: 3350,
          y: 3850,
          id: "NTM6Njg6MzI3",
        },
        {
          x: 3350,
          y: 4450,
          id: "NTM6MzMwOjY1MQ",
        },
        {
          x: 3650,
          y: 5050,
          id: "NTM6MzUwOjQzNQ",
        },
      ],
      tokens: [
        {
          id: "npc16",
          x: 3400,
          y: 1700,
        },
        {
          id: "npc14",
          x: 3300,
          y: 2900,
        },
        {
          id: "npc37",
          x: 3400,
          y: 2700,
        },
        {
          id: "npc37",
          x: 3600,
          y: 2800,
        },
        {
          id: "npc37",
          x: 3600,
          y: 3100,
        },
        {
          id: "npc37",
          x: 3300,
          y: 3e3,
        },
        {
          id: "npc56",
          x: 2800,
          y: 2400,
        },
        {
          id: "hazard6",
          x: 1400,
          y: 2400,
        },
        {
          id: "npc44",
          x: 1700,
          y: 2800,
        },
        {
          id: "npc13",
          x: 1300,
          y: 3e3,
        },
        {
          id: "npc45",
          x: 1500,
          y: 3600,
        },
        {
          id: "npc42",
          x: 2100,
          y: 3800,
        },
        {
          id: "hazard7",
          x: 1200,
          y: 4e3,
        },
        {
          id: "npc12",
          x: 1300,
          y: 4900,
        },
        {
          id: "npc37",
          x: 2800,
          y: 3500,
        },
        {
          id: "npc37",
          x: 2900,
          y: 3400,
        },
        {
          id: "npc37",
          x: 3e3,
          y: 3400,
        },
        {
          id: "npc15",
          x: 3e3,
          y: 3800,
        },
        {
          id: "npc14",
          x: 2400,
          y: 4400,
        },
        {
          id: "npc37",
          x: 2300,
          y: 4600,
        },
        {
          id: "npc37",
          x: 2500,
          y: 4600,
        },
        {
          id: "npc37",
          x: 2400,
          y: 3800,
        },
        {
          id: "npc37",
          x: 2400,
          y: 3600,
        },
        {
          id: "npc37",
          x: 2400,
          y: 3400,
        },
        {
          id: "npc37",
          x: 2400,
          y: 3200,
        },
        {
          id: "npc14",
          x: 3200,
          y: 3700,
        },
        {
          id: "npc14",
          x: 3400,
          y: 3700,
        },
        {
          id: "npc17",
          x: 3700,
          y: 3700,
        },
        {
          id: "npc14",
          x: 2400,
          y: 5100,
        },
        {
          id: "npc14",
          x: 2500,
          y: 5200,
        },
        {
          id: "npc54",
          x: 2700,
          y: 5200,
        },
        {
          id: "npc54",
          x: 2900,
          y: 5200,
        },
        {
          id: "npc40",
          x: 3800,
          y: 5e3,
        },
      ],
    }),
    new ModuleScene({
      name: "map4",
      canonical: {
        name: "av1/level4",
        priority: 0,
      },
      nameInfo: {
        x: 666,
        y: 749.694,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 1259,
      height: 1637,
      imageIndex: 1,
      imageLeft: 61,
      imageRight: 1252,
      imageCols: 32,
      imageTop: 191,
      imageBottom: 1533,
      imageRows: 36,
      globalLight: true,
      detailsFile: "/av/maps/av1-map4.json",
      journals: [
        {
          x: 1550,
          y: 4250,
          id: "NTQ6OTk6MTM1",
        },
        {
          x: 1150,
          y: 4250,
          id: "NTU6Njg6NTY3",
        },
        {
          x: 1250,
          y: 3750,
          id: "NTU6Njg6Mzc1",
        },
        {
          x: 1850,
          y: 3850,
          id: "NTU6Njg6Mjc5",
        },
        {
          x: 1950,
          y: 3950,
          id: "NTU6Njg6MTgz",
        },
        {
          x: 1950,
          y: 4150,
          id: "NTY6OTk6Njk5",
        },
        {
          x: 1950,
          y: 4450,
          id: "NTY6OTk6NTQz",
        },
        {
          x: 1550,
          y: 4950,
          id: "NTY6OTk6MTEx",
        },
        {
          x: 2350,
          y: 4850,
          id: "NTc6Njg6MTU5",
        },
        {
          x: 1350,
          y: 3450,
          id: "NTg6MzI2OjM2Mw",
        },
        {
          x: 1550,
          y: 2050,
          id: "NTg6MzI2OjExMQ",
        },
        {
          x: 2350,
          y: 3150,
          id: "NTk6Njg6MTIz",
        },
        {
          x: 2350,
          y: 1750,
          id: "NjA6OTk6MTM1",
        },
        {
          x: 3450,
          y: 3550,
          id: "NjE6Njg6Njk5",
        },
        {
          x: 3950,
          y: 2850,
          id: "NjI6MzM1Ojk5",
        },
        {
          x: 4050,
          y: 3750,
          id: "NjM6Njg6NTU1",
        },
        {
          x: 3050,
          y: 4350,
          id: "NjM6Njg6MTk1",
        },
        {
          x: 3650,
          y: 5050,
          id: "NjM6MzcyOjU5MQ",
        },
        {
          x: 3450,
          y: 1550,
          id: "NjQ6OTk6NDcx",
        },
        {
          x: 3450,
          y: 1850,
          id: "NjQ6MzI2OjY5OQ",
        },
        {
          x: 3450,
          y: 2050,
          id: "NjU6Njg6MjU1",
        },
      ],
      tokens: [
        {
          id: "npc26",
          x: 2200,
          y: 1900,
        },
        {
          id: "npc26",
          x: 2300,
          y: 1800,
        },
        {
          id: "npc26",
          x: 2400,
          y: 1900,
        },
        {
          id: "npc26",
          x: 2300,
          y: 2e3,
        },
        {
          id: "npc36",
          x: 2400,
          y: 2e3,
        },
        {
          id: "npc36",
          x: 2250,
          y: 2e3,
        },
        {
          id: "npc36",
          x: 2400,
          y: 1850,
        },
        {
          id: "npc36",
          x: 2250,
          y: 1850,
        },
        {
          id: "npc20",
          x: 1500,
          y: 1800,
        },
        {
          id: "npc30",
          x: 3200,
          y: 2e3,
        },
        {
          id: "npc21",
          x: 3500,
          y: 3500,
        },
        {
          id: "npc43",
          x: 3400,
          y: 3400,
        },
        {
          id: "npc34",
          x: 2100,
          y: 2500,
        },
        {
          id: "npc34",
          x: 2500,
          y: 2500,
        },
        {
          id: "npc29",
          x: 1500,
          y: 3300,
        },
        {
          id: "npc29",
          x: 1300,
          y: 3300,
        },
        {
          id: "npc49",
          x: 1800,
          y: 4400,
        },
        {
          id: "npc25",
          x: 1400,
          y: 4100,
        },
        {
          id: "npc25",
          x: 1600,
          y: 4100,
        },
        {
          id: "npc25",
          x: 1400,
          y: 4300,
        },
        {
          id: "npc25",
          x: 1600,
          y: 4300,
        },
        {
          id: "npc18",
          x: 1500,
          y: 5e3,
        },
        {
          id: "npc55",
          x: 2200,
          y: 4900,
        },
        {
          id: "npc55",
          x: 3500,
          y: 5e3,
        },
        {
          id: "npc26",
          x: 3600,
          y: 4900,
        },
        {
          id: "npc26",
          x: 3600,
          y: 5100,
        },
      ],
    }),
  ];
  journals = [
    new CaptionImage({
      name: "journal1",
      page: 4,
      width: 1262,
      height: 1636,
    }),
    new CaptionImage({
      name: "journal2",
      page: 6,
      width: 1259,
      height: 871,
    }),
    new CaptionImage({
      name: "journal3",
      page: 20,
      width: 1259,
      height: 871,
    }),
    new CaptionImage({
      name: "journal4",
      page: 36,
      width: 1261,
      height: 871,
    }),
    new CaptionImage({
      name: "journal5",
      page: 53,
      width: 600,
      height: 600,
    }),
    new CaptionImage({
      name: "journal6",
      page: 54,
      width: 1261,
      height: 897,
    }),
    new CaptionImage({
      name: "journal7",
      page: 66,
      width: 1261,
      height: 1636,
    }),
    new CaptionImage({
      name: "journal8",
      page: 76,
      width: 1262,
      height: 1636,
    }),
    new CaptionImage({
      name: "journal9",
      page: 80,
      width: 323,
      height: 408,
    }),
    new CaptionImage({
      name: "journal10",
      page: 80,
      width: 395,
      height: 408,
    }),
    new CaptionImage({
      name: "journal11",
      page: 81,
      width: 433,
      height: 432,
    }),
    new CaptionImage({
      name: "journal12",
      page: 85,
      width: 805,
      height: 976,
    }),
    new CaptionImage({
      name: "journal13",
      page: 95,
      width: 1294,
      height: 1669,
    }),
    new CaptionImage({
      name: "npc1",
      page: 11,
      width: 892,
      height: 701,
    }),
    new CaptionImage({
      name: "npc2",
      page: 13,
      width: 781,
      height: 950,
    }),
    new CaptionImage({
      name: "npc3",
      page: 17,
      width: 478,
      height: 753,
    }),
    new CaptionImage({
      name: "npc4",
      page: 19,
      width: 776,
      height: 1035,
    }),
    new CaptionImage({
      name: "npc5",
      page: 24,
      width: 545,
      height: 545,
    }),
    new CaptionImage({
      name: "npc6",
      page: 25,
      width: 830,
      height: 1081,
    }),
    new CaptionImage({
      name: "npc7",
      page: 28,
      width: 742,
      height: 1217,
    }),
    new CaptionImage({
      name: "npc8",
      page: 29,
      width: 494,
      height: 1125,
    }),
    new CaptionImage({
      name: "npc9",
      page: 30,
      width: 953,
      height: 1200,
    }),
    new CaptionImage({
      name: "npc10",
      page: 33,
      width: 797,
      height: 1186,
    }),
    new CaptionImage({
      name: "npc11",
      page: 34,
      width: 826,
      height: 1102,
    }),
    new CaptionImage({
      name: "npc12",
      page: 37,
      width: 586,
      height: 585,
    }),
    new CaptionImage({
      name: "npc13",
      page: 41,
      width: 809,
      height: 1359,
    }),
    new CaptionImage({
      name: "npc14",
      page: 44,
      width: 934,
      height: 1309,
    }),
    new CaptionImage({
      name: "npc15",
      page: 45,
      width: 548,
      height: 950,
    }),
    new CaptionImage({
      name: "npc16",
      page: 50,
      width: 840,
      height: 1370,
    }),
    new CaptionImage({
      name: "npc17",
      page: 52,
      width: 928,
      height: 1303,
    }),
    new CaptionImage({
      name: "npc18",
      page: 57,
      width: 555,
      height: 1470,
    }),
    new CaptionImage({
      name: "npc19",
      page: 58,
      width: 476,
      height: 493,
    }),
    new CaptionImage({
      name: "npc20",
      page: 59,
      width: 758,
      height: 1175,
    }),
    new CaptionImage({
      name: "npc21",
      page: 62,
      width: 903,
      height: 1316,
    }),
    new CaptionImage({
      name: "npc22",
      page: 63,
      width: 468,
      height: 458,
    }),
    new CaptionImage({
      name: "npc23",
      page: 71,
      width: 504,
      height: 504,
    }),
    new CaptionImage({
      name: "npc24",
      page: 73,
      width: 538,
      height: 538,
    }),
    new CaptionImage({
      name: "npc25",
      page: 74,
      width: 407,
      height: 499,
    }),
    new CaptionImage({
      name: "npc26",
      page: 82,
      width: 859,
      height: 1136,
    }),
    new CaptionImage({
      name: "npc27",
      page: 83,
      width: 722,
      height: 1014,
    }),
    new CaptionImage({
      name: "npc28",
      page: 84,
      width: 997,
      height: 1100,
    }),
    new CaptionImage({
      name: "npc29",
      page: 86,
      width: 805,
      height: 1071,
    }),
    new CaptionImage({
      name: "npc30",
      page: 87,
      width: 782,
      height: 1060,
    }),
    new CaptionImage({
      name: "npc31",
      page: 88,
      width: 899,
      height: 761,
    }),
    new CaptionImage({
      name: "npc32",
      page: 89,
      width: 799,
      height: 947,
    }),
    new CaptionImage({
      name: "npc33",
      page: 91,
      width: 908,
      height: 1277,
    }),
    new CaptionImage({
      name: "npc34",
      page: 93,
      width: 763,
      height: 1263,
    }),
    new CaptionImage({
      name: "npc35",
      page: 100,
      width: 778,
      height: 1388,
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.e0Jxg2AHeQSDGNnV",
      name: {
        page: 11,
        x: 372.0717,
        y: 98.9534,
      },
      page: 11,
      width: 892,
      height: 701,
      tokenX: 122,
      tokenY: -95,
      tokenSize: 668,
      forIds: ["MTA6MzI2OjQ0Nw", "MTA6MzI2OjE3MQ"],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.xAfkUwJYq5JLmSrW",
      name: {
        page: 13,
        x: 419.5965,
        y: 128.6736,
      },
      page: 13,
      width: 781,
      height: 950,
      tokenX: -32,
      tokenY: 2,
      tokenSize: 614,
      forIds: ["MTM6Njg6OTk"],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.SjTv1ayVrguLsnTX",
      name: {
        page: 17,
        x: 277.1711,
        y: 88.6736,
      },
      page: 17,
      width: 478,
      height: 753,
      tokenX: 25,
      tokenY: 42,
      tokenSize: 557,
      forIds: ["MTc6MzQ5OjE4Mw"],
    }),
    new ModuleNpc({
      id: "npc4",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.7EpLGBoddL8Vzlha",
      name: {
        page: 19,
        x: 387.4403,
        y: 128.6736,
      },
      page: 19,
      width: 776,
      height: 1035,
      tokenX: -212,
      tokenY: 24,
      tokenSize: 503,
      forIds: ["MTk6Njg6NjYz"],
      elite: true,
    }),
    new ModuleNpc({
      id: "npc5",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 24,
        x: 326.25,
        y: 75,
        substring: {
          start: 0,
          end: 5,
        },
      },
      page: 24,
      width: 545,
      height: 545,
      tokenX: -87,
      tokenY: 31,
      tokenSize: 461,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc6",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.k4fVLtVrgIEg9xij",
      name: {
        page: 25,
        x: 316.5742,
        y: 86.9534,
      },
      page: 25,
      width: 830,
      height: 1081,
      tokenX: -79,
      tokenY: 67,
      tokenSize: 689,
      forIds: ["MjU6Njg6MTk1"],
    }),
    new ModuleNpc({
      id: "npc7",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.lH2rdwiyOPStkQvZ",
      name: {
        page: 28,
        x: 210.0901,
        y: 161.1469,
      },
      page: 28,
      width: 742,
      height: 1217,
      tokenX: -285,
      tokenY: -135,
      tokenSize: 517,
      forIds: ["Mjg6MzI2OjU5MQ"],
    }),
    new ModuleNpc({
      id: "npc8",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.VotlWUsFKdOrHWF6",
      name: {
        page: 29,
        x: 208.9671,
        y: 194.6736,
      },
      page: 29,
      width: 494,
      height: 1125,
      tokenX: -51,
      tokenY: 13,
      tokenSize: 397,
      forIds: ["Mjk6Mjk1OjYwMw"],
    }),
    new ModuleNpc({
      id: "npc9",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.nMC9d7ORMz3cdaHa",
      name: {
        page: 30,
        x: 174.4274,
        y: 128.6736,
      },
      page: 30,
      width: 953,
      height: 1200,
      tokenX: -115,
      tokenY: 98,
      tokenSize: 500,
      forIds: ["MzE6Njg6Njk5"],
    }),
    new ModuleNpc({
      id: "npc10",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.IE0EM4KDUbI5ZJz0",
      name: {
        page: 33,
        x: 371.2223,
        y: 110.9534,
      },
      page: 33,
      width: 797,
      height: 1186,
      tokenX: -253,
      tokenY: -331,
      tokenSize: 486,
      forIds: ["MzI6MzI2OjMwMw"],
    }),
    new ModuleNpc({
      id: "npc11",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.ZMr28tFTA5NUcBTi",
      name: {
        page: 34,
        x: 158.9371,
        y: 140.6736,
      },
      page: 34,
      width: 826,
      height: 1102,
      tokenX: -228,
      tokenY: 11,
      tokenSize: 598,
      forIds: ["MzQ6MzI2OjMxNQ"],
    }),
    new ModuleNpc({
      id: "npc12",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.saEUzIgUtV2AzKhl",
      name: {
        page: 37,
        x: 336.6751,
        y: 371.3363,
      },
      page: 37,
      width: 586,
      height: 585,
      tokenX: -118,
      tokenY: 40,
      tokenSize: 446,
      forIds: ["Mzc6Njg6MjU1"],
    }),
    new ModuleNpc({
      id: "npc13",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.FIoRPHaHdYUPVKdT",
      name: {
        page: 41,
        x: 314.6721,
        y: 164.6736,
      },
      page: 41,
      width: 809,
      height: 1359,
      tokenX: -113,
      tokenY: -114,
      tokenSize: 547,
      forIds: ["NDA6MzI2OjE4Mw"],
    }),
    new ModuleNpc({
      id: "npc14",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.lMCEVxKkQ7XK6Nid",
      name: {
        page: 44,
        x: 142.3954,
        y: 116.6736,
      },
      page: 44,
      width: 934,
      height: 1309,
      tokenX: -248,
      tokenY: -82,
      tokenSize: 497,
      forIds: [
        "NDM6Mjk1OjQ4Mw",
        "NDk6Njg6MTgz",
        "NDY6MzI2OjQzNQ",
        "NTM6Mjk1OjY5OQ",
      ],
    }),
    new ModuleNpc({
      id: "npc15",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.tOL4rWj2oYWZ4ow2",
      name: {
        page: 45,
        x: 230.0983,
        y: 110.9534,
      },
      page: 45,
      width: 548,
      height: 950,
      tokenX: -127,
      tokenY: 4,
      tokenSize: 362,
      forIds: ["NDU6Njg6MjQz"],
    }),
    new ModuleNpc({
      id: "npc16",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.w2N0foudBFcRCaHK",
      name: {
        page: 50,
        x: 102.9392,
        y: 188.6736,
      },
      page: 50,
      width: 840,
      height: 1370,
      tokenX: -240,
      tokenY: -85,
      tokenSize: 446,
      forIds: ["NTA6OTk6Njk5"],
    }),
    new ModuleNpc({
      id: "npc17",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.3H1rBpUQwTcNd6xZ",
      name: {
        page: 52,
        x: 132.5843,
        y: 164.6736,
      },
      page: 52,
      width: 928,
      height: 1303,
      tokenX: -244,
      tokenY: 19,
      tokenSize: 463,
      forIds: ["NTI6OTk6Njk5"],
    }),
    new ModuleNpc({
      id: "npc18",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.ZAXuvUW6kl6v3SuW",
      name: {
        page: 57,
        x: 377.9116,
        y: 128.6736,
      },
      page: 57,
      width: 555,
      height: 1470,
      tokenX: -71,
      tokenY: -313,
      tokenSize: 574,
      forIds: ["NTY6MzI2OjE4Mw"],
    }),
    new ModuleNpc({
      id: "npc19",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 58,
        x: 268.6306,
        y: 433.8135,
      },
      page: 58,
      width: 476,
      height: 493,
      tokenX: -6,
      tokenY: 93,
      tokenSize: 577,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc20",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.66MUUmu8950MEXFf",
      name: {
        page: 59,
        x: 458.2148,
        y: 152.6736,
      },
      page: 59,
      width: 758,
      height: 1175,
      tokenX: -186,
      tokenY: 3,
      tokenSize: 475,
      forIds: ["NTk6Njg6MjE5"],
    }),
    new ModuleNpc({
      id: "npc21",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.EN3mp0sVObP8ou3p",
      name: {
        page: 62,
        x: 212.9004,
        y: 158.9534,
      },
      page: 62,
      width: 903,
      height: 1316,
      tokenX: -210,
      tokenY: -65,
      tokenSize: 448,
      forIds: ["NjE6Mjk1OjI3OQ"],
    }),
    new ModuleNpc({
      id: "npc22",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 71,
        x: 261.3995,
        y: 476.6736,
      },
      page: 71,
      width: 504,
      height: 504,
      tokenX: -22,
      tokenY: 34,
      tokenSize: 504,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc23",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 73,
        x: 258.4505,
        y: 440.6736,
      },
      page: 73,
      width: 538,
      height: 538,
      tokenX: 24,
      tokenY: 88,
      tokenSize: 594,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc24",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 74,
        x: 274.5199,
        y: 320.6736,
      },
      page: 74,
      width: 407,
      height: 499,
      tokenX: 57,
      tokenY: 66,
      tokenSize: 555,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc25",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.HBRz8BVLVN9u9Odp",
      name: {
        page: 84,
        x: 250.5,
        y: 699,
      },
      page: 84,
      width: 997,
      height: 1100,
      tokenX: -249,
      tokenY: -58,
      tokenSize: 484,
      forIds: ["ODQ6MjUxOjYyNw", "MTY6MzI2OjQ5NQ", "NTU6Njg6NjUx"],
    }),
    new ModuleNpc({
      id: "npc26",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.x3eOZvKUginj5Blh",
      name: {
        page: 85,
        x: 67.5,
        y: 699,
      },
      page: 85,
      width: 805,
      height: 976,
      tokenX: -248,
      tokenY: -22,
      tokenSize: 640,
      forIds: [
        "ODU6Njg6NDcx",
        "MTk6Njg6MjMx",
        "NjQ6OTk6NjAz",
        "NjA6MzI2OjI1NQ",
      ],
    }),
    new ModuleNpc({
      id: "npc27",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.KSFGGxU3qxYJzWpe",
      page: 86,
      width: 805,
      height: 1071,
      tokenX: -47,
      tokenY: -120,
      tokenSize: 735,
      forIds: ["ODY6MjUxOjYwMw", "MjY6MzI2OjU5MQ"],
    }),
    new ModuleNpc({
      id: "npc28",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.V73Oqm1EL1KOoXOl",
      page: 87,
      width: 782,
      height: 1060,
      tokenX: -52,
      tokenY: -30,
      tokenSize: 584,
      forIds: ["ODY6MzU1OjI1NQ", "MzE6Mjk1OjQxMQ"],
    }),
    new ModuleNpc({
      id: "npc29",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.Nkz8Z5TrEqRePGlk",
      name: {
        page: 88,
        x: 250.5,
        y: 699,
      },
      page: 88,
      width: 899,
      height: 761,
      tokenX: -59,
      tokenY: -46,
      tokenSize: 619,
      forIds: ["ODg6MjUxOjUzMQ", "MjM6Njg6NDcx", "NTg6MzI2OjE1OQ"],
    }),
    new ModuleNpc({
      id: "npc30",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.ceLvlSQsYNORH8oM",
      name: {
        page: 89,
        x: 67.5,
        y: 699,
      },
      page: 89,
      width: 799,
      height: 947,
      tokenX: 42,
      tokenY: -107,
      tokenSize: 779,
      forIds: ["ODk6Njg6NjE1", "NjU6Njg6MzAz"],
    }),
    new ModuleNpc({
      id: "npc31",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.R0EEgMDKcynpAWoa",
      name: {
        page: 90,
        x: 125.5684,
        y: 630.27,
      },
      page: 91,
      width: 908,
      height: 1277,
      tokenX: -269,
      tokenY: -3,
      tokenSize: 325,
      forIds: ["OTE6Njg6NDQ3"],
    }),
    new ModuleNpc({
      id: "npc32",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.ZDYMKYZVyR8Fqakp",
      name: {
        page: 92,
        x: 138.4388,
        y: 631.25,
      },
      page: 93,
      width: 763,
      height: 1263,
      tokenX: -267,
      tokenY: -24,
      tokenSize: 339,
      forIds: ["OTI6MzI2OjE0Nw"],
    }),
    new ModuleNpc({
      id: "npc33",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.C7LvY2Xxzm2xRL1M",
      label: "BB",
      forIds: ["MTM6Njg6MTk1"],
    }),
    new ModuleNpc({
      id: "npc34",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.sMNqIHHxcVBXG08h",
      label: "CW",
      forIds: ["NjA6OTk6MTgz"],
    }),
    new ModuleNpc({
      id: "npc35",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.4SfnQzORMdmBsp49",
      label: "DS",
      forIds: ["MzQ6MzI2OjI2Nw"],
    }),
    new ModuleNpc({
      id: "npc36",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.KH1GkazaI59zftst",
      label: "CH",
      forIds: ["NjA6MzI2OjIwNw"],
      elite: true,
    }),
    new ModuleNpc({
      id: "npc37",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.LHHgGSs0ELCR4CYK",
      label: "G",
      forIds: [
        "NDQ6MzI2OjY5OQ",
        "NDQ6MzI2Ojk5",
        "NDI6OTk6Mzg3",
        "NDk6Njg6MTM1",
      ],
    }),
    new ModuleNpc({
      id: "npc38",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.DEBxtP23o93Qq1n6",
      label: "GF",
      forIds: ["MTE6Njg6MjU1"],
    }),
    new ModuleNpc({
      id: "npc39",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.BWm17BRQYGMLqtNe",
      label: "GS",
      forIds: ["MTY6OTk6NDM1"],
    }),
    new ModuleNpc({
      id: "npc40",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.dEAneTvoPuQXZoLR",
      label: "GM",
      forIds: ["NTM6Mjk1OjE0Nw"],
    }),
    new ModuleNpc({
      id: "npc41",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.VCYF0NAfPKwTHkK1",
      label: "G",
      forIds: ["Mjg6MzI2OjMwMw"],
    }),
    new ModuleNpc({
      id: "npc42",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.hia81Ut7fEREbhkq",
      label: "JK",
      forIds: ["NDI6MzI2OjIxOQ"],
    }),
    new ModuleNpc({
      id: "npc43",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.xj1Qn0VA4H4aKSjW",
      label: "JW",
      forIds: ["NjI6MzM1OjQ3MQ"],
      uniqueKey:
        "Compendium.pf2e.pathfinder-monster-core.Actor.BN5Lb6IsQ9Wyu3rL",
    }),
    new ModuleNpc({
      id: "npc44",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.73qJxJK8ES4Tbp2k",
      label: "LIL",
      forIds: ["NDc6Mjk1OjYxNQ"],
    }),
    new ModuleNpc({
      id: "npc45",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.vYpuSMLX0yQSDyFn",
      label: "MS",
      forIds: ["NDA6MzI2OjY2Mw"],
    }),
    new ModuleNpc({
      id: "npc46",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.kkAllKGsVCZVGFpf",
      label: "M",
      forIds: [
        "MTM6Njg6MTQ3",
        "ODozMjY6MjMx",
        "MTA6MzI2OjQ5NQ",
        "MTI6MzI2OjYyNw",
      ],
    }),
    new ModuleNpc({
      id: "npc47",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.277uvPqG9RLMQUcO",
      label: "M(V",
      forIds: ["Mjg6MzI2OjU0Mw", "MjY6MzI2OjMyNw"],
      uniqueKey: "Compendium.pf2e.pathfinder-bestiary-2.Actor.DYBZniwR1Ip4inVr",
    }),
    new ModuleNpc({
      id: "npc48",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.lH2rdwiyOPStkQvZ",
      label: "MC",
      forIds: ["ODc6Njg6MzYz"],
    }),
    new ModuleNpc({
      id: "npc49",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.zpd6b6UPP72ZELCj",
      label: "P",
      forIds: ["NTY6OTk6MTU5"],
    }),
    new ModuleNpc({
      id: "npc50",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.sEgjgitJmwYYa4mV",
      label: "SG",
      forIds: ["MzU6Njg6Mzg3"],
    }),
    new ModuleNpc({
      id: "npc51",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.trchDxbDR2TiPMxT",
      label: "SG",
      forIds: ["MjE6Njg6MjA3"],
    }),
    new ModuleNpc({
      id: "npc52",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.tashopA1s2fAbSXA",
      label: "S",
      forIds: ["OToyOTU6NDQ3"],
    }),
    new ModuleNpc({
      id: "npc53",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.NQ6qRvpD9DIwVxt3",
      label: "VM",
      forIds: ["MTk6Mjk1OjU0Mw"],
    }),
    new ModuleNpc({
      id: "npc54",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.GsrqCDf0Dc9PisEt",
      label: "VF",
      forIds: ["NDY6OTk6MTgz"],
      weak: true,
    }),
    new ModuleNpc({
      id: "npc55",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.KgJq51AeYrENo3Db",
      label: "W",
      forIds: ["NTg6OTk6Mjc5", "NjQ6OTk6NjUx"],
    }),
    new ModuleNpc({
      id: "npc56",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.7UBCht1tQfeba2Ih",
      label: "WG",
      forIds: ["NDg6OTk6NDM1"],
    }),
    new ModuleNpc({
      id: "npc57",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.Xo4IGzw28hivgMmM",
      label: "ZS",
      forIds: ["MjE6Njg6MTQ3"],
    }),
    new ModuleNpc({
      id: "hazard1",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.XLTPZ592Z9MXXBlA",
      label: "BoB",
      forIds: ["MTU6Njg6Njk5"],
    }),
    new ModuleNpc({
      id: "hazard2",
      actorUuid: "Compendium.pf2e.hazards.Actor.Q8bXKgDm8eguqThB",
      label: "BM",
      forIds: ["MzE6Njg6NDQ3"],
    }),
    new ModuleNpc({
      id: "hazard3",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.qjuLgWr2VhPcuylI",
      label: "DoT",
      forIds: ["MzM6Njg6MTgz"],
    }),
    new ModuleNpc({
      id: "hazard4",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.6NijRSpkIuQpSxUp",
      label: "SL",
      forIds: ["Mjc6Njg6NTY3"],
    }),
    new ModuleNpc({
      id: "hazard5",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.8VXEF3cnjzcokCTL",
      label: "SS",
      forIds: ["MTE6Mjk1OjYzOQ"],
    }),
    new ModuleNpc({
      id: "hazard6",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.hnYckrT72oIKAuHJ",
      label: "VF",
      forIds: ["NDg6MzI2OjU3OQ"],
    }),
    new ModuleNpc({
      id: "hazard7",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.chOtDyemBuw2yNN2",
      label: "WW",
      forIds: ["Mzk6Mjk1OjMyNw"],
    }),
    new ModuleNpc({
      id: "hazard8",
      actorUuid: "Compendium.pf2e.hazards.Actor.Or0jjL8xS3GyiMq0",
      label: "WLN",
      forIds: ["MzQ6MzI2OjE4Mw"],
    }),
  ];
  journalPages = [
    {
      name: "Chapter 1",
      pages: [
        {
          id: "NjoyNDE6MzU1",
        },
        {
          id: "NzozNzE6Njk5",
        },
        {
          id: "NzozNzE6Mzk5",
        },
        {
          id: "OTozMTA6Njc1",
        },
        {
          id: "MTA6MTE1OjY3NQ",
        },
        {
          id: "MTQ6MTE1OjY3NQ",
        },
        {
          id: "Nzo2ODo1NDM",
        },
        {
          id: "Nzo2ODozMjc",
        },
        {
          id: "ODo5OToyNTU",
        },
        {
          id: "ODozMjY6MTIz",
        },
        {
          id: "OTo2ODo0NTk",
        },
        {
          id: "OToyOTU6Mjkx",
        },
        {
          id: "MTA6MzI2OjM5OQ",
        },
        {
          id: "MTE6Njg6Njk5",
        },
        {
          id: "MTE6Njg6MjA3",
        },
        {
          id: "MTI6OTk6NTE5",
        },
        {
          id: "MTI6MzI2OjU3OQ",
        },
        {
          id: "MTI6MzI2OjMxNQ",
        },
        {
          id: "MTQ6MzI2OjUwNw",
        },
        {
          id: "MTU6Njg6MTM1",
        },
        {
          id: "MTU6Mjk1OjU3OQ",
        },
        {
          id: "MTU6Mjk1OjI3OQ",
        },
        {
          id: "MTY6OTk6Mzg3",
        },
        {
          id: "MTY6MzI2OjI5MQ",
        },
        {
          id: "MTY6MzI2OjExMQ",
        },
        {
          id: "MTc6Njg6MzI3",
        },
        {
          id: "MTc6Njg6MTEx",
        },
        {
          id: "MTg6OTk6NDQ3",
        },
        {
          id: "MTg6OTk6Mjc5",
        },
        {
          id: "MTg6OTk6MjE5",
        },
        {
          id: "MTg6MzI2OjUzMQ",
        },
        {
          id: "MTk6Njg6NDU5",
        },
        {
          id: "MTk6Njg6MTgz",
        },
      ],
    },
    {
      name: "Chapter 2",
      pages: [
        {
          id: "MjA6MjM5OjM1NQ",
        },
        {
          id: "MjE6MzcxOjY5OQ",
        },
        {
          id: "MjE6MzcxOjQ4Mw",
        },
        {
          id: "MjA6OTk6MTQ3",
        },
        {
          id: "MjE6Njg6NTY3",
        },
        {
          id: "MjE6Njg6OTk",
        },
        {
          id: "MjM6Njg6NDIz",
        },
        {
          id: "MjM6Njg6OTk",
        },
        {
          id: "MjM6Mjk1OjMzOQ",
        },
        {
          id: "MjM6Mjk1OjMwMw",
        },
        {
          id: "MjQ6MzcwOjMzOQ",
        },
        {
          id: "MjQ6MzI2OjE1OQ",
        },
        {
          id: "MjU6Njg6NTQz",
        },
        {
          id: "MjY6OTk6NjUx",
        },
        {
          id: "MjY6OTk6NDcx",
        },
        {
          id: "MjY6OTk6Mjkx",
        },
        {
          id: "MjY6MzI2OjU0Mw",
        },
        {
          id: "MjY6MzI2OjE5NQ",
        },
        {
          id: "Mjc6Njg6Mzc1",
        },
        {
          id: "Mjc6Njg6MjY3",
        },
        {
          id: "Mjg6MzM2OjQ5NQ",
        },
        {
          id: "Mjg6MzI3OjI1NQ",
        },
        {
          id: "Mjk6Njg6MjE5",
        },
        {
          id: "Mjk6MzA0OjU1NQ",
        },
        {
          id: "Mjk6MzU4OjM5OQ",
        },
        {
          id: "MzA6OTk6NjAz",
        },
        {
          id: "MzA6MzI2OjUxOQ",
        },
        {
          id: "MzE6Njg6NTY3",
        },
        {
          id: "MzE6Njg6Mzk5",
        },
        {
          id: "MzE6Njg6MTIz",
        },
        {
          id: "MzE6Mjk1OjM2Mw",
        },
        {
          id: "MzE6Mjk1OjExMQ",
        },
        {
          id: "MzI6OTk6NDU5",
        },
        {
          id: "MzI6OTk6MjY3",
        },
        {
          id: "MzI6OTk6MTIz",
        },
        {
          id: "MzI6MzI2OjI1NQ",
        },
        {
          id: "MzM6Njg6NDcx",
        },
        {
          id: "MzQ6OTk6Njk5",
        },
        {
          id: "MzU6Njg6NjI3",
        },
        {
          id: "MzU6Njg6MzM5",
        },
        {
          id: "MzU6Njg6MjU1",
        },
        {
          id: "MzU6Mjk1OjY5OQ",
        },
        {
          id: "MzU6Mjk1OjQ5NQ",
        },
      ],
    },
    {
      name: "Chapter 3",
      pages: [
        {
          id: "MzY6MjM4OjM1NQ",
        },
        {
          id: "Mzc6MzcxOjY5OQ",
        },
        {
          id: "Mzc6MzcxOjMyNw",
        },
        {
          id: "MzY6OTk6MjE5",
        },
        {
          id: "MzY6MzI2OjExMQ",
        },
        {
          id: "Mzk6Njg6NDEx",
        },
        {
          id: "Mzk6Njg6MjU1",
        },
        {
          id: "Mzk6Mjk1OjYwMw",
        },
        {
          id: "NDA6OTk6NTA3",
        },
        {
          id: "NDA6OTk6MjMx",
        },
        {
          id: "NDA6MzI2OjUxOQ",
        },
        {
          id: "NDA6MzI2OjQ4Mw",
        },
        {
          id: "NDE6Njg6NDQ3",
        },
        {
          id: "NDE6Njg6MzAz",
        },
        {
          id: "NDE6Njg6MjE5",
        },
        {
          id: "NDI6MzI2OjY5OQ",
        },
        {
          id: "NDI6MzI2OjU3OQ",
        },
        {
          id: "NDM6Njg6NDEx",
        },
        {
          id: "NDM6Njg6MjY3",
        },
        {
          id: "NDQ6MzI2OjY1MQ",
        },
        {
          id: "NDQ6MzI2OjQzNQ",
        },
        {
          id: "NDQ6MzI2OjI5MQ",
        },
        {
          id: "NDU6Njg6Njk5",
        },
        {
          id: "NDU6MzM3OjQzNQ",
        },
        {
          id: "NDU6MzY0OjIxOQ",
        },
        {
          id: "NDY6OTk6NTU1",
        },
        {
          id: "NDY6OTk6MzUx",
        },
        {
          id: "NDY6OTk6MTM1",
        },
        {
          id: "NDY6MzI2OjM4Nw",
        },
        {
          id: "NDY6MzI2OjI3OQ",
        },
        {
          id: "NDc6Njg6NTY3",
        },
        {
          id: "NDc6Mjk1OjM3NQ",
        },
        {
          id: "NDc6Mjk1OjI5MQ",
        },
        {
          id: "NDc6Mjk1OjIxOQ",
        },
        {
          id: "NDg6OTk6MzUx",
        },
        {
          id: "NDg6OTk6MTgz",
        },
        {
          id: "NDk6Njg6Njk5",
        },
        {
          id: "NDk6Mjk1OjY5OQ",
        },
        {
          id: "NTA6MzI2OjIzMQ",
        },
        {
          id: "NTE6Njg6MTIz",
        },
        {
          id: "NTI6MzQ0OjEyMw",
        },
        {
          id: "NTM6Njg6MzI3",
        },
        {
          id: "NTM6MzMwOjY1MQ",
        },
        {
          id: "NTM6MzUwOjQzNQ",
        },
      ],
    },
    {
      name: "Chapter 4",
      pages: [
        {
          id: "NTQ6MjM4OjM1NQ",
        },
        {
          id: "NTU6MzcxOjY5OQ",
        },
        {
          id: "NTU6MzcxOjM3NQ",
        },
        {
          id: "NTQ6OTk6MjMx",
        },
        {
          id: "NTQ6OTk6MTM1",
        },
        {
          id: "NTU6Njg6NTY3",
        },
        {
          id: "NTU6Njg6Mzc1",
        },
        {
          id: "NTU6Njg6Mjc5",
        },
        {
          id: "NTU6Njg6MTgz",
        },
        {
          id: "NTY6OTk6Njk5",
        },
        {
          id: "NTY6OTk6NTQz",
        },
        {
          id: "NTY6OTk6MTEx",
        },
        {
          id: "NTc6Njg6MTU5",
        },
        {
          id: "NTg6MzI2OjM2Mw",
        },
        {
          id: "NTg6MzI2OjExMQ",
        },
        {
          id: "NTk6Njg6MTIz",
        },
        {
          id: "NjA6OTk6MTM1",
        },
        {
          id: "NjE6Njg6Njk5",
        },
        {
          id: "NjI6MzM1Ojk5",
        },
        {
          id: "NjM6Njg6NTU1",
        },
        {
          id: "NjM6Njg6MTk1",
        },
        {
          id: "NjM6MzcyOjU5MQ",
        },
        {
          id: "NjQ6OTk6NDcx",
        },
        {
          id: "NjQ6MzI2OjY5OQ",
        },
        {
          id: "NjU6Njg6MjU1",
        },
        {
          id: "NjU6Mjk1OjU0Mw",
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
          id: "npc1",
        },
        {
          id: "npc2",
        },
        {
          id: "npc3",
        },
        {
          id: "npc4",
        },
        {
          id: "npc5",
        },
        {
          id: "npc6",
        },
        {
          id: "npc7",
        },
        {
          id: "npc8",
        },
        {
          id: "npc9",
        },
        {
          id: "npc10",
        },
        {
          id: "npc11",
        },
        {
          id: "npc12",
        },
        {
          id: "npc13",
        },
        {
          id: "npc14",
        },
        {
          id: "npc15",
        },
        {
          id: "npc16",
        },
        {
          id: "npc17",
        },
        {
          id: "npc18",
        },
        {
          id: "npc19",
        },
        {
          id: "npc20",
        },
        {
          id: "npc21",
        },
        {
          id: "npc22",
        },
        {
          id: "npc23",
        },
        {
          id: "npc24",
        },
        {
          id: "npc25",
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
      name: "Back Matter",
      pages: [
        {
          id: "Njc6MjA5OjY0OA",
        },
        {
          id: "Njc6Mjk1OjE5NQ",
        },
        {
          id: "Njk6Njg6NTc5",
        },
        {
          id: "Njk6Njg6MzYz",
        },
        {
          id: "NzA6OTk6Mzk5",
        },
        {
          id: "NzA6MzI2OjYzOQ",
        },
        {
          id: "NzA6MzI2OjUwNw",
        },
        {
          id: "NzA6MzI2OjIzMQ",
        },
        {
          id: "NzE6Njg6MjY3",
        },
        {
          id: "NzE6MzUyOjYyNw",
        },
        {
          id: "NzE6Mjk1OjI2Nw",
        },
        {
          id: "NzI6OTk6NTMx",
        },
        {
          id: "NzI6OTk6MTQ3",
        },
        {
          id: "NzI6MzI2OjQxMQ",
        },
        {
          id: "NzM6Njg6Njk5",
        },
        {
          id: "NzM6Njg6MTcx",
        },
        {
          id: "NzM6Mjk1OjM1MQ",
        },
        {
          id: "NzQ6OTk6NTA3",
        },
        {
          id: "NzQ6OTk6MjY3",
        },
        {
          id: "NzQ6MzI2OjY1MQ",
        },
        {
          id: "NzQ6MzkzOjMxNQ",
        },
        {
          id: "NzU6Njg6NjUx",
        },
        {
          id: "NzU6Njg6MTcx",
        },
        {
          id: "NzU6Mjk1OjI0Mw",
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
          id: "ODY6MjUxOjY1MQ",
        },
        {
          id: "ODY6MjUxOjMwMw",
        },
        {
          id: "ODc6Njg6NDEx",
        },
        {
          id: "ODg6MjUxOjY5OQ",
        },
        {
          id: "ODk6Njg6Njk5",
        },
        {
          id: "OTA6MTI2OjYzMA",
        },
        {
          id: "OTA6OTk6Mjc5",
        },
        {
          id: "OTI6MTM4OjYzMQ",
        },
        {
          id: "OTI6MzI2OjQzNQ",
        },
        {
          id: "Njk6MzExOjY3NQ",
        },
        {
          id: "NzA6MTE1OjY3NQ",
        },
        {
          id: "NzQ6MTE1OjY3NQ",
        },
        {
          id: "ODQ6MTM3OjY2Mw",
        },
        {
          id: "ODU6MzcxOjY2Mw",
        },
        {
          id: "ODY6MTQ3OjY2Mw",
        },
        {
          id: "ODc6MzcxOjY2Mw",
        },
        {
          id: "ODg6MTYzOjY2Mw",
        },
        {
          id: "ODk6MzcxOjY2Mw",
        },
      ],
    },
  ];
  combines = [];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "RUINS OF GAUNTLIGHT" &&
        t.fontId === "DwarvenAxeBB:44",
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    this.markStartOfLine(text, 50, 347.25, 663);
    this.markStartOfLine(text, 50, 361.25, 651);
    this.markStartOfLine(text, 50, 371.25, 627);
    this.markStartOfLine(text, 50, 368.25, 603);
    this.markStartOfLine(text, 50, 371.25, 591);
    this.markStartOfLine(text, 50, 357.25, 579);
    this.markStartOfLine(text, 62, 333.25, 435);
    this.markStartOfLine(text, 62, 330.25, 423);
    this.markStartOfLine(text, 62, 328.25, 411);
    this.markStartOfLine(text, 62, 330.25, 399);
    this.markStartOfLine(text, 62, 332.25, 387);
    this.markStartOfLine(text, 62, 335.25, 375);
    this.markStartOfLine(text, 62, 340.25, 363);
    this.markStartOfLine(text, 62, 363.25, 339);
    this.markStartOfLine(text, 84, 321.5, 483);
    this.markStartOfLine(text, 84, 323.5, 459);
    this.markStartOfLine(text, 84, 297.5, 351);
    this.markStartOfLine(text, 84, 281.5, 339);
    this.markStartOfLine(text, 84, 269.5, 327);
    this.markStartOfLine(text, 84, 274.5, 315);
    this.markStartOfLine(text, 84, 278.5, 267);
    this.markStartOfLine(text, 88, 320.5, 339);
    this.markStartOfLine(text, 88, 363.4999, 327);
    this.markStartOfLine(text, 88, 398.4999, 279);
    return super.extractDetails(text, moduleData, sectionKey);
  }
}
