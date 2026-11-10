import { AgentsOfEdgewatchBase } from "./base.js";
import { AdventureImage, CaptionImage } from "../../core/images.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class AgentsOfEdgewatch2 extends AgentsOfEdgewatchBase {
  prefix = "agents-of-edgewatch2";
  fullName = "Agents of Edgewatch - Sixty Feet Under";
  pages = [
    this.ChapterHeadingPageLayout(6),
    this.RightSingleColumnWithSidebar(7),
    this.LeftTwoColumnWithMap(8, 370),
    this.RightTwoColumn(9),
    this.LeftTwoColumn(10),
    this.RightTwoColumn(11),
    this.LeftTwoColumn(12),
    this.RightTwoColumn(13),
    this.LeftTwoColumn(14),
    this.RightTwoColumn(15),
    this.ChapterHeadingPageLayout(16),
    this.RightSingleColumnWithSidebar(17),
    this.LeftTwoColumnWithMap(18, 370),
    this.RightTwoColumn(19),
    this.ChapterHeadingPageLayout(20),
    this.RightSingleColumnWithSidebar(21),
    this.LeftTwoColumnWithMap(22, 370),
    this.RightTwoColumn(23),
    this.LeftTwoColumn(24),
    this.RightTwoColumn(25),
    this.LeftTwoColumn(26),
    this.RightTwoColumn(27),
    this.LeftTwoColumn(28),
    this.RightTwoColumn(29),
    this.ChapterHeadingPageLayout(30),
    this.RightSingleColumnWithSidebar(31),
    this.LeftTwoColumn(32),
    this.RightTwoColumn(33),
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
    this.LeftTwoColumn(46),
    this.RightTwoColumn(47),
    this.LeftTwoColumn(48),
    this.RightTwoColumn(49),
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
    this.LeftTwoColumn(60),
    this.RightTwoColumn(61),
    this.RightChapterHeadingPageLayout(63),
    this.LeftTwoColumn(64),
    this.RightTwoColumn(65),
    this.LeftTwoColumn(66),
    this.RightTwoColumn(67),
    this.RightChapterHeadingPageLayout(69),
    this.RightTwoColumn(71),
    this.LeftTwoColumn(72),
    this.RightTwoColumn(73),
    this.LeftTwoColumn(74),
    this.RightTwoColumn(75),
    this.RightChapterHeadingPageLayout(77),
    this.LeftTwoColumn(78),
    this.RightTwoColumn(79),
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
        priority: 0,
      },
      nameInfo: {
        x: 39.6895,
        y: 62.6154,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 1261,
      height: 1637,
      imageIndex: 1,
      imageLeft: 0,
      imageRight: 1e3,
      imageCols: 10,
      imageTop: 0,
      imageBottom: 1e3,
      imageRows: 10,
      gridType: "gridless",
      globalLight: true,
    }),
    new ModuleScene({
      name: "map2",
      canonical: {
        name: "cities/Vudra",
        priority: 0,
      },
      nameInfo: {
        x: 71.6534,
        y: 709.6415,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 70,
      width: 1259,
      height: 1636,
      imageLeft: 0,
      imageRight: 1e3,
      imageCols: 10,
      imageTop: 0,
      imageBottom: 1e3,
      imageRows: 10,
      gridType: "gridless",
      globalLight: true,
    }),
    new ModuleScene({
      name: "map3a",
      canonical: {
        name: "aoe2/map3a",
        priority: 0,
      },
      nameInfo: {
        x: 99.6121,
        y: 611.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 8,
      width: 1259,
      height: 830,
      imageLeft: 2,
      imageRight: 480,
      imageCols: 23,
      imageTop: 11,
      imageBottom: 385,
      imageRows: 18,
      cropLeft: 0,
      cropRight: 500,
      cropTop: 0,
      cropBottom: 400,
      globalLight: true,
      detailsFile: "/aoe/maps/aoe2-map3a.json",
      journals: [
        {
          x: 750,
          y: 550,
          id: "ODozMjY6MzYz",
        },
      ],
      tokens: [
        {
          id: "npc64",
          x: 1500,
          y: 1300,
        },
        {
          id: "npc64",
          x: 1700,
          y: 1300,
        },
        {
          id: "npc1",
          x: 1700,
          y: 1600,
        },
      ],
    }),
    new ModuleScene({
      name: "map3b",
      canonical: {
        name: "aoe2/map3b",
        priority: 0,
      },
      nameInfo: {
        x: 130.988,
        y: 570.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 8,
      width: 1259,
      height: 830,
      imageLeft: 2,
      imageRight: 480,
      imageCols: 23,
      imageTop: 469,
      imageBottom: 738,
      imageRows: 13,
      cropLeft: 0,
      cropRight: 500,
      cropTop: 410,
      cropBottom: 830,
      globalLight: true,
      detailsFile: "/aoe/maps/aoe2-map3b.json",
      journals: [
        {
          x: 850,
          y: 850,
          id: "MTA6MzI2OjM5OQ",
        },
      ],
      tokens: [
        {
          id: "npc65",
          x: 1500,
          y: 1600,
        },
        {
          id: "npc65",
          x: 1500,
          y: 1800,
        },
        {
          id: "npc66",
          x: 1200,
          y: 1600,
        },
      ],
    }),
    new ModuleScene({
      name: "map3c",
      canonical: {
        name: "aoe2/map3c",
        priority: 0,
      },
      nameInfo: {
        x: 251.6024,
        y: 410.2929,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 8,
      width: 1259,
      height: 830,
      imageLeft: 522,
      imageRight: 1249,
      imageCols: 35,
      imageTop: 11,
      imageBottom: 822,
      imageRows: 39,
      cropLeft: 507,
      cropRight: 1259,
      cropTop: 0,
      cropBottom: 830,
      globalLight: true,
      detailsFile: "/aoe/maps/aoe2-map3c.json",
      journals: [
        {
          x: 2750,
          y: 4550,
          id: "MTM6MzcwOjQ1OQ",
        },
        {
          x: 2750,
          y: 3850,
          id: "MTQ6OTk6Njk5",
        },
        {
          x: 2450,
          y: 2850,
          id: "MTQ6OTk6MzM5",
        },
        {
          x: 3450,
          y: 3350,
          id: "MTQ6MzI2OjI5MQ",
        },
        {
          x: 2950,
          y: 2250,
          id: "MTU6Njg6MTcx",
        },
        {
          x: 2750,
          y: 1650,
          id: "MTU6Mjk1OjYwMw",
        },
      ],
      tokens: [
        {
          id: "npc44",
          x: 2800,
          y: 4300,
        },
        {
          id: "npc57",
          x: 2900,
          y: 4400,
        },
        {
          id: "npc57",
          x: 2800,
          y: 4400,
        },
        {
          id: "npc44",
          x: 3300,
          y: 4300,
        },
        {
          id: "npc44",
          x: 2300,
          y: 4400,
        },
        {
          id: "npc44",
          x: 2600,
          y: 4400,
        },
        {
          id: "npc42",
          x: 2500,
          y: 3600,
        },
        {
          id: "npc42",
          x: 2800,
          y: 3600,
        },
        {
          id: "npc44",
          x: 2400,
          y: 4e3,
        },
        {
          id: "npc44",
          x: 2700,
          y: 4e3,
        },
        {
          id: "npc6",
          x: 3800,
          y: 3200,
        },
        {
          id: "npc52",
          x: 2400,
          y: 2900,
        },
        {
          id: "npc42",
          x: 2100,
          y: 3200,
        },
        {
          id: "npc42",
          x: 2100,
          y: 3e3,
        },
        {
          id: "npc60",
          x: 2600,
          y: 2600,
        },
        {
          id: "npc42",
          x: 2400,
          y: 1400,
        },
        {
          id: "npc42",
          x: 2400,
          y: 1300,
        },
        {
          id: "npc37",
          x: 2500,
          y: 1100,
        },
      ],
    }),
    new ModuleScene({
      name: "map4",
      canonical: {
        name: "aoe2/map4",
        priority: 0,
      },
      nameInfo: {
        x: 20.25,
        y: 753.8362,
      },
      nameFn: (name) => this.sentenceCase(name).substr(0, 21),
      page: 18,
      width: 1261,
      height: 830,
      imageLeft: 64,
      imageRight: 1254,
      imageCols: 45,
      imageTop: 18,
      imageBottom: 812,
      imageRows: 30,
      globalLight: true,
      detailsFile: "/aoe/maps/aoe2-map4.json",
      journals: [
        {
          x: 5400,
          y: 2300,
          id: "MTY6MzM1OjE3MQ",
        },
        {
          x: 3700,
          y: 2300,
          id: "MTY6MzM1OjEyMw",
        },
        {
          x: 4e3,
          y: 2700,
          id: "MTc6Nzc6Njc1",
        },
        {
          x: 4200,
          y: 2700,
          id: "MTc6Nzc6Njc1",
        },
        {
          x: 4400,
          y: 2700,
          id: "MTc6Nzc6Njc1",
        },
        {
          x: 3250,
          y: 3050,
          id: "MTc6Nzc6NjYz",
        },
        {
          x: 3600,
          y: 2850,
          id: "MTc6Nzc6NjUx",
        },
        {
          x: 3900,
          y: 2900,
          id: "MTc6Nzc6NjUx",
        },
        {
          x: 4100,
          y: 2900,
          id: "MTc6Nzc6NjUx",
        },
        {
          x: 3550,
          y: 3250,
          id: "MTc6Nzc6NTkx",
        },
        {
          x: 3900,
          y: 3200,
          id: "MTc6Nzc6NTQz",
        },
        {
          x: 3e3,
          y: 1400,
          id: "MTc6Nzc6NTMx",
        },
        {
          x: 3550,
          y: 1350,
          id: "MTc6Nzc6NTE5",
        },
        {
          x: 4100,
          y: 1600,
          id: "MTc6Nzc6NDU5",
        },
        {
          x: 3900,
          y: 1800,
          id: "MTc6Nzc6NDk1",
        },
        {
          x: 4350,
          y: 1950,
          id: "MTc6Nzc6NDM1",
        },
        {
          x: 2350,
          y: 450,
          id: "MTk6Njg6MTgz",
        },
        {
          x: 3250,
          y: 450,
          id: "MTk6Njg6NDcx",
        },
        {
          x: 4350,
          y: 450,
          id: "MTg6OTk6Mjkx",
        },
        {
          x: 1950,
          y: 1300,
          id: "MTc6Nzc6NDEx",
        },
        {
          x: 1950,
          y: 2300,
          id: "MTc6Nzc6Mzc1",
        },
        {
          x: 1950,
          y: 3150,
          id: "MTc6Nzc6MzI3",
        },
      ],
      tokens: [
        {
          id: "npc7",
          x: 4200,
          y: 500,
        },
        {
          id: "npc7",
          x: 4300,
          y: 500,
        },
        {
          id: "npc7",
          x: 4400,
          y: 500,
        },
        {
          id: "npc7",
          x: 3100,
          y: 500,
        },
        {
          id: "npc27",
          x: 3200,
          y: 500,
        },
        {
          id: "npc7",
          x: 2200,
          y: 500,
        },
        {
          id: "npc7",
          x: 2300,
          y: 500,
        },
        {
          id: "npc43",
          x: 2400,
          y: 500,
        },
        {
          id: "npc55",
          x: 2100,
          y: 500,
        },
      ],
    }),
    new ModuleScene({
      name: "map5",
      canonical: {
        name: "aoe2/map5",
        priority: 0,
      },
      nameInfo: {
        x: 240.1825,
        y: 534.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 22,
      width: 1259,
      height: 830,
      imageLeft: 147,
      imageRight: 1083,
      imageCols: 24,
      imageTop: 40,
      imageBottom: 701,
      imageRows: 17,
      globalLight: true,
      detailsFile: "/aoe/maps/aoe2-map5.json",
      journals: [
        {
          x: 1250,
          y: 1250,
          id: "MjM6Njg6Njk5",
        },
        {
          x: 1750,
          y: 950,
          id: "MjM6Mjk1OjYzOQ",
        },
        {
          x: 3550,
          y: 950,
          id: "MjQ6OTk6NTkx",
        },
        {
          x: 3450,
          y: 1350,
          id: "MjQ6OTk6MjU1",
        },
        {
          x: 3250,
          y: 950,
          id: "MjQ6MzYzOjU2Nw",
        },
        {
          x: 2950,
          y: 850,
          id: "MjU6Njg6NjUx",
        },
        {
          x: 3050,
          y: 1350,
          id: "MjU6Njg6MjA3",
        },
        {
          x: 1350,
          y: 2250,
          id: "MjU6Mjk1OjM2Mw",
        },
        {
          x: 1350,
          y: 1950,
          id: "MjY6OTk6NDcx",
        },
        {
          x: 1350,
          y: 1850,
          id: "MjY6MzI2OjY5OQ",
        },
        {
          x: 1650,
          y: 1950,
          id: "MjY6MzI2OjMxNQ",
        },
        {
          x: 1950,
          y: 2150,
          id: "MjY6MzI2OjE0Nw",
        },
        {
          x: 1850,
          y: 2350,
          id: "Mjc6Njg6Njk5",
        },
        {
          x: 3250,
          y: 1950,
          id: "Mjc6Njg6MzE1",
        },
        {
          x: 3150,
          y: 2250,
          id: "Mjc6Mjk1OjY2Mw",
        },
        {
          x: 3450,
          y: 2250,
          id: "Mjc6Mjk1OjMxNQ",
        },
        {
          x: 3650,
          y: 2050,
          id: "Mjk6Njg6MzAz",
        },
      ],
      tokens: [
        {
          id: "npc34",
          x: 1900,
          y: 2300,
        },
        {
          id: "npc7",
          x: 1700,
          y: 2200,
          elite: true,
        },
        {
          id: "npc7",
          x: 1700,
          y: 2400,
          elite: true,
        },
        {
          id: "npc49",
          x: 1400,
          y: 2200,
        },
        {
          id: "npc62",
          x: 1e3,
          y: 2300,
        },
        {
          id: "npc51",
          x: 1200,
          y: 1900,
        },
        {
          id: "npc51",
          x: 1200,
          y: 2e3,
        },
        {
          id: "npc50",
          x: 1300,
          y: 1900,
        },
        {
          id: "npc50",
          x: 1e3,
          y: 1900,
        },
        {
          id: "npc9",
          x: 3400,
          y: 2400,
        },
        {
          id: "npc39",
          x: 3500,
          y: 2100,
        },
        {
          id: "npc39",
          x: 3500,
          y: 2300,
        },
        {
          id: "npc7",
          x: 3300,
          y: 2300,
        },
        {
          id: "npc39",
          x: 3100,
          y: 1400,
        },
        {
          id: "npc7",
          x: 2900,
          y: 1300,
        },
        {
          id: "npc7",
          x: 2900,
          y: 1400,
        },
        {
          id: "npc39",
          x: 3e3,
          y: 1400,
        },
        {
          id: "npc7",
          x: 3300,
          y: 1400,
        },
        {
          id: "npc7",
          x: 3500,
          y: 1400,
        },
        {
          id: "npc7",
          x: 3600,
          y: 1300,
        },
        {
          id: "npc8",
          x: 3200,
          y: 800,
        },
        {
          id: "npc30",
          x: 2800,
          y: 800,
        },
        {
          id: "npc30",
          x: 3e3,
          y: 800,
        },
        {
          id: "npc7",
          x: 3400,
          y: 800,
        },
        {
          id: "npc7",
          x: 3500,
          y: 1e3,
        },
      ],
    }),
    new ModuleScene({
      name: "map6",
      canonical: {
        name: "aoe2/map6",
        priority: 0,
      },
      nameInfo: {
        x: 48,
        y: 726.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 34,
      width: 1259,
      height: 1637,
      imageLeft: 26,
      imageRight: 1253,
      imageCols: 52,
      imageTop: 63,
      imageBottom: 1619,
      imageRows: 66,
      globalLight: true,
      detailsFile: "/aoe/maps/aoe2-map6.json",
      journals: [
        {
          x: 2950,
          y: 8050,
          id: "MzU6Njg6NTMx",
        },
        {
          x: 2350,
          y: 7050,
          id: "MzU6Njg6MTU5",
        },
        {
          x: 4650,
          y: 7950,
          id: "MzU6Mjk1OjYwMw",
        },
        {
          x: 4750,
          y: 7150,
          id: "MzY6MzI2OjYzOQ",
        },
        {
          x: 3850,
          y: 7150,
          id: "MzY6MzM5OjEzNQ",
        },
        {
          x: 6050,
          y: 6950,
          id: "Mzg6OTk6Njk5",
        },
        {
          x: 5550,
          y: 6350,
          id: "Mzg6OTk6Mjkx",
        },
        {
          x: 4850,
          y: 6250,
          id: "Mzg6MzI2OjU2Nw",
        },
        {
          x: 4050,
          y: 5650,
          id: "Mzk6Njg6MzAz",
        },
        {
          x: 3500,
          y: 5850,
          id: "Mzk6Mjk1OjUxOQ",
        },
        {
          x: 3650,
          y: 5450,
          id: "NDA6OTk6MTgz",
        },
        {
          x: 4150,
          y: 4550,
          id: "NDA6MzI2OjY5OQ",
        },
        {
          x: 5550,
          y: 4950,
          id: "NDE6Njg6NDcx",
        },
        {
          x: 5550,
          y: 3950,
          id: "NDI6MzI2OjQyMw",
        },
        {
          x: 4650,
          y: 3950,
          id: "NDM6Njg6NjI3",
        },
        {
          x: 4350,
          y: 6650,
          id: "NDQ6MzI2OjU5MQ",
        },
        {
          x: 3150,
          y: 7050,
          id: "NDQ6MzI2OjM3NQ",
        },
        {
          x: 3350,
          y: 6550,
          id: "NDU6Njg6NjI3",
        },
        {
          x: 2950,
          y: 5850,
          id: "NDY6OTk6Njk5",
        },
        {
          x: 2750,
          y: 4950,
          id: "NDY6OTk6MzYz",
        },
        {
          x: 4750,
          y: 5550,
          id: "NDc6Njg6Mzc1",
        },
        {
          x: 5150,
          y: 4750,
          id: "NDg6MzI2OjI1NQ",
        },
        {
          x: 4750,
          y: 4350,
          id: "NDg6Mzg5OjEyMw",
        },
        {
          x: 5950,
          y: 4250,
          id: "NDk6Mjk1OjQxMQ",
        },
        {
          x: 5650,
          y: 3550,
          id: "NDk6Mjk1OjMyNw",
        },
        {
          x: 3850,
          y: 3950,
          id: "NTA6MzI2OjQ4Mw",
        },
        {
          x: 3050,
          y: 4050,
          id: "NTA6MzI2OjEzNQ",
        },
        {
          x: 3550,
          y: 3350,
          id: "NTE6Mjk1OjY5OQ",
        },
        {
          x: 4150,
          y: 3350,
          id: "NTE6Mjk1OjMxNQ",
        },
        {
          x: 4750,
          y: 3250,
          id: "NTI6MzI2OjIzMQ",
        },
        {
          x: 4950,
          y: 2650,
          id: "NTM6Njg6MjY3",
        },
        {
          x: 5350,
          y: 2950,
          id: "NTM6Mjk1OjU3OQ",
        },
        {
          x: 4250,
          y: 2850,
          id: "NTU6Njg6NDgz",
        },
        {
          x: 4650,
          y: 2150,
          id: "NTU6Mjk1OjMxNQ",
        },
        {
          x: 5350,
          y: 2150,
          id: "NTY6MzI2OjUxOQ",
        },
      ],
      tokens: [
        {
          id: "npc10",
          x: 4600,
          y: 7500,
        },
        {
          id: "npc10",
          x: 4600,
          y: 8200,
        },
        {
          id: "npc11",
          x: 3800,
          y: 6500,
        },
        {
          id: "npc63",
          x: 4100,
          y: 6600,
        },
        {
          id: "npc48",
          x: 5800,
          y: 6700,
        },
        {
          id: "npc48",
          x: 5800,
          y: 6800,
        },
        {
          id: "npc48",
          x: 5800,
          y: 6900,
        },
        {
          id: "npc48",
          x: 6100,
          y: 7e3,
        },
        {
          id: "npc48",
          x: 6100,
          y: 6800,
        },
        {
          id: "npc48",
          x: 5800,
          y: 7200,
        },
        {
          id: "npc56",
          x: 4600,
          y: 6300,
        },
        {
          id: "npc56",
          x: 5e3,
          y: 6200,
        },
        {
          id: "npc14",
          x: 3300,
          y: 6400,
        },
        {
          id: "npc59",
          x: 3100,
          y: 7400,
        },
        {
          id: "npc59",
          x: 3e3,
          y: 7300,
        },
        {
          id: "npc59",
          x: 3200,
          y: 7200,
        },
        {
          id: "npc59",
          x: 3400,
          y: 7200,
        },
        {
          id: "npc46",
          x: 3400,
          y: 6600,
          elite: true,
        },
        {
          id: "npc46",
          x: 3500,
          y: 6500,
          elite: true,
        },
        {
          id: "npc46",
          x: 3300,
          y: 6400,
          elite: true,
        },
        {
          id: "npc46",
          x: 3300,
          y: 6500,
          elite: true,
        },
        {
          id: "npc67",
          x: 3300,
          y: 5800,
        },
        {
          id: "npc15",
          x: 2600,
          y: 4900,
        },
        {
          id: "npc35",
          x: 3600,
          y: 4300,
        },
        {
          id: "npc35",
          x: 4400,
          y: 4600,
        },
        {
          id: "npc36",
          x: 4800,
          y: 4300,
        },
        {
          id: "npc36",
          x: 4500,
          y: 4200,
        },
        {
          id: "npc58",
          x: 4700,
          y: 4400,
        },
        {
          id: "npc12",
          x: 5400,
          y: 5e3,
        },
        {
          id: "npc13",
          x: 4500,
          y: 3900,
        },
        {
          id: "npc47",
          x: 5500,
          y: 3300,
          elite: true,
        },
        {
          id: "npc18",
          x: 5600,
          y: 2900,
        },
        {
          id: "npc18",
          x: 5200,
          y: 3200,
        },
        {
          id: "npc45",
          x: 3100,
          y: 3300,
          elite: true,
        },
        {
          id: "npc45",
          x: 3300,
          y: 3600,
          elite: true,
        },
        {
          id: "npc38",
          x: 3300,
          y: 3400,
        },
        {
          id: "npc27",
          x: 3500,
          y: 3100,
        },
        {
          id: "npc33",
          x: 3500,
          y: 2900,
        },
        {
          id: "npc33",
          x: 3300,
          y: 3100,
        },
        {
          id: "npc17",
          x: 4300,
          y: 3300,
        },
        {
          id: "npc17",
          x: 4200,
          y: 3400,
        },
        {
          id: "npc17",
          x: 4100,
          y: 3400,
        },
        {
          id: "npc17",
          x: 4200,
          y: 3200,
        },
        {
          id: "npc17",
          x: 4e3,
          y: 3300,
        },
        {
          id: "npc61",
          x: 4600,
          y: 3300,
        },
        {
          id: "npc43",
          x: 5400,
          y: 2e3,
        },
        {
          id: "npc18",
          x: 4600,
          y: 2e3,
        },
        {
          id: "npc17",
          x: 4800,
          y: 2100,
        },
        {
          id: "npc17",
          x: 4600,
          y: 2200,
        },
        {
          id: "npc17",
          x: 4100,
          y: 2700,
        },
        {
          id: "npc17",
          x: 4e3,
          y: 2600,
        },
        {
          id: "npc17",
          x: 4e3,
          y: 2400,
        },
        {
          id: "npc17",
          x: 4100,
          y: 2300,
        },
      ],
    }),
    new ModuleScene({
      name: "map7",
      canonical: {
        name: "aoe2/map7",
        priority: 0,
      },
      nameInfo: {
        x: 221.5,
        y: 459.5,
      },
      nameFn: (name) => `${this.sentenceCase(name)}Lower Feat`,
      page: 56,
      width: 713,
      height: 722,
      imageLeft: 139,
      imageRight: 610,
      imageCols: 18,
      imageTop: 138,
      imageBottom: 635,
      imageRows: 19,
      globalLight: true,
      detailsFile: "/aoe/maps/aoe2-map7.json",
      journals: [
        {
          x: 2850,
          y: 1350,
          id: "NTc6Njg6NDM1",
        },
        {
          x: 2650,
          y: 2050,
          id: "NTc6Njg6MjQz",
        },
        {
          x: 2050,
          y: 2050,
          id: "NTc6Mjk1OjEzNQ",
        },
        {
          x: 1450,
          y: 2850,
          id: "NTk6Njg6NTE5",
        },
        {
          x: 1250,
          y: 2250,
          id: "NTk6Njg6MTk1",
        },
        {
          x: 1200,
          y: 1700,
          id: "NTk6Mjk1OjUwNw",
        },
        {
          x: 1450,
          y: 1150,
          id: "NjA6Mzc2OjE4Mw",
        },
        {
          x: 2150,
          y: 1450,
          id: "NjE6Njg6MjE5",
        },
      ],
      tokens: [
        {
          id: "npc31",
          x: 1900,
          y: 2100,
        },
        {
          id: "npc25",
          x: 1900,
          y: 1800,
        },
        {
          id: "npc25",
          x: 2e3,
          y: 2300,
        },
        {
          id: "npc25",
          x: 2100,
          y: 1900,
        },
        {
          id: "npc25",
          x: 1900,
          y: 2300,
        },
        {
          id: "npc20",
          x: 1100,
          y: 1700,
        },
        {
          id: "npc27",
          x: 1200,
          y: 1400,
          elite: true,
        },
        {
          id: "npc27",
          x: 1200,
          y: 1700,
          elite: true,
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
      page: 16,
      width: 1168,
      height: 779,
    }),
    new AdventureImage({
      name: "journal4",
      page: 20,
      width: 1168,
      height: 779,
    }),
    new AdventureImage({
      name: "journal5",
      page: 30,
      width: 1168,
      height: 779,
    }),
    new CaptionImage({
      name: "journal6",
      page: 36,
      width: 847,
      height: 1209,
    }),
    new AdventureImage({
      name: "journal7",
      page: 62,
      width: 1260,
      height: 1637,
    }),
    new CaptionImage({
      name: "journal8",
      page: 66,
      width: 367,
      height: 483,
    }),
    new AdventureImage({
      name: "journal9",
      page: 68,
      width: 1260,
      height: 1637,
    }),
    new CaptionImage({
      name: "journal10",
      page: 74,
      width: 636,
      height: 1078,
    }),
    new AdventureImage({
      name: "journal11",
      page: 76,
      width: 1260,
      height: 1636,
    }),
    new AdventureImage({
      name: "journal12",
      page: 77,
      width: 389,
      height: 429,
    }),
    new AdventureImage({
      name: "journal13",
      page: 78,
      width: 305,
      height: 421,
    }),
    new AdventureImage({
      name: "journal14",
      page: 78,
      width: 305,
      height: 425,
    }),
    new AdventureImage({
      name: "journal15",
      page: 79,
      width: 857,
      height: 911,
    }),
    new AdventureImage({
      name: "journal16",
      page: 80,
      width: 820,
      height: 1078,
    }),
    new AdventureImage({
      name: "journal17",
      page: 81,
      width: 962,
      height: 896,
    }),
    new AdventureImage({
      name: "journal18",
      page: 99,
      width: 1261,
      height: 1637,
    }),
    new CaptionImage({
      name: "journal19",
      page: 69,
      width: 437,
      height: 500,
    }),
    new CaptionImage({
      name: "journal20",
      page: 72,
      width: 442,
      height: 513,
    }),
    new CaptionImage({
      name: "journal21",
      page: 73,
      width: 460,
      height: 526,
    }),
    new CaptionImage({
      name: "journal22",
      page: 75,
      width: 460,
      height: 527,
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 9,
        x: 259.6988,
        y: 450.9651,
      },
      page: 9,
      width: 576,
      height: 576,
      tokenX: 87,
      tokenY: 111,
      tokenSize: 660,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 10,
        x: 285.481,
        y: 461.0251,
      },
      page: 10,
      width: 557,
      height: 557,
      tokenX: 53,
      tokenY: 62,
      tokenSize: 641,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 11,
        x: 245.3815,
        y: 453.4651,
      },
      page: 11,
      width: 541,
      height: 545,
      tokenX: 58,
      tokenY: 94,
      tokenSize: 629,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc4",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 12,
        x: 288.8224,
        y: 455.4651,
      },
      page: 12,
      width: 538,
      height: 561,
      tokenX: -21,
      tokenY: 101,
      tokenSize: 645,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc5",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 13,
        x: 277.0856,
        y: 462.5408,
      },
      page: 13,
      width: 561,
      height: 561,
      tokenX: 44,
      tokenY: 81,
      tokenSize: 645,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc6",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.AdZ4EklEmpHViycl",
      page: 15,
      width: 470,
      height: 1139,
      tokenX: -152,
      tokenY: 17,
      tokenSize: 355,
      forIds: ["MTU6Njg6Mzk5"],
    }),
    new ModuleNpc({
      id: "npc7",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.9M1YJxTXqya55HDx",
      page: 23,
      width: 717,
      height: 1183,
      tokenX: -321,
      tokenY: 44,
      tokenSize: 315,
      forIds: [
        "MTk6Njg6Mjc5",
        "MTk6Mjk1OjY2Mw",
        "MjU6Mjk1OjQxMQ",
        "MTg6MzI2OjI0Mw",
        "MjQ6Mzc4OjYxNQ",
        "Mjc6Njg6MzYz",
        "Mjg6MzI2OjQ5NQ",
        "MjQ6OTk6MzAz",
      ],
    }),
    new ModuleNpc({
      id: "npc8",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 24,
        x: 278.7299,
        y: 479.6608,
      },
      page: 24,
      width: 484,
      height: 468,
      tokenX: 58,
      tokenY: 76,
      tokenSize: 540,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc9",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.rM6ix6XTroJod3Vr",
      page: 29,
      width: 910,
      height: 1251,
      tokenX: -247,
      tokenY: 9,
      tokenSize: 383,
      forIds: ["Mjg6OTk6NTMx"],
    }),
    new ModuleNpc({
      id: "npc10",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.MqfZxoxFwzqAXhTP",
      page: 36,
      width: 847,
      height: 1209,
      tokenX: -212,
      tokenY: 4,
      tokenSize: 425,
      forIds: ["MzY6OTk6NjUx"],
    }),
    new ModuleNpc({
      id: "npc11",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.8AdsRaXftoR1beTk",
      page: 37,
      width: 780,
      height: 1222,
      tokenX: -96,
      tokenY: 75,
      tokenSize: 746,
      forIds: ["Mzc6Njg6NDcx"],
    }),
    new ModuleNpc({
      id: "npc12",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.Rinxhe1cRXKEsXuW",
      page: 41,
      width: 822,
      height: 1249,
      tokenX: -273,
      tokenY: -9,
      tokenSize: 325,
      forIds: ["NDI6OTk6NTkx"],
    }),
    new ModuleNpc({
      id: "npc13",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.thDJ5N0wUvI1JOa6",
      name: {
        page: 43,
        x: 257.1017,
        y: 468.4758,
      },
      page: 43,
      width: 537,
      height: 468,
      tokenX: 22,
      tokenY: 150,
      tokenSize: 621,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc14",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.AYNIAAxV7TbIKPI4",
      page: 45,
      width: 988,
      height: 902,
      tokenX: -253,
      tokenY: -260,
      tokenSize: 540,
      forIds: ["NDU6Njg6MjMx"],
    }),
    new ModuleNpc({
      id: "npc15",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.8PRqUfkHLvu9ufGL",
      name: {
        page: 46,
        x: 279.5519,
        y: 470.2908,
      },
      page: 46,
      width: 522,
      height: 468,
      tokenX: 21,
      tokenY: 110,
      tokenSize: 550,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc16",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.N98ug9jQHqeFoK1N",
      name: {
        page: 48,
        x: 134.2893,
        y: 102.9651,
      },
      page: 48,
      width: 824,
      height: 1172,
      tokenX: -332,
      tokenY: -422,
      tokenSize: 360,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc17",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.8PRqUfkHLvu9ufGL",
      page: 52,
      width: 868,
      height: 1151,
      tokenX: -135,
      tokenY: -57,
      tokenSize: 367,
      forIds: ["NTY6OTk6MjA3", "NTI6MzI2OjY5OQ", "NTU6Mjk1OjQ4Mw"],
    }),
    new ModuleNpc({
      id: "npc18",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.y1tw2ohNagqQJ6RV",
      page: 54,
      width: 825,
      height: 1125,
      tokenX: -304,
      tokenY: 12,
      tokenSize: 369,
      forIds: ["NTM6Mjk1OjIzMQ", "NTY6OTk6MjU1"],
    }),
    new ModuleNpc({
      id: "npc19",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 57,
        x: 295.6595,
        y: 473.4531,
      },
      page: 57,
      width: 522,
      height: 537,
      tokenX: 46,
      tokenY: 74,
      tokenSize: 593,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc20",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.ZY3q7AV1qbwWwNl2",
      page: 60,
      width: 666,
      height: 887,
      tokenX: -119,
      tokenY: 44,
      tokenSize: 383,
      forIds: ["NjA6OTk6NjI3"],
    }),
    new ModuleNpc({
      id: "npc21",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.Aktz95gNNzfAiTzk",
      name: {
        page: 64,
        x: 261.1936,
        y: 126.9651,
      },
      page: 64,
      width: 803,
      height: 1201,
      tokenX: -212,
      tokenY: 33,
      tokenSize: 389,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc22",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.Aktz95gNNzfAiTzk",
      name: {
        page: 67,
        x: 308.4824,
        y: 114.9651,
      },
      page: 67,
      width: 758,
      height: 1170,
      tokenX: -254,
      tokenY: 71,
      tokenSize: 330,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc23",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.Xi53GFvTgBApltjp",
      page: 82,
      width: 882,
      height: 888,
      tokenX: 66,
      tokenY: -38,
      tokenSize: 888,
      forIds: ["ODI6Mjg2OjI5MQ"],
    }),
    new ModuleNpc({
      id: "npc24",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.ZL2qLXwomKfBB8Eu",
      page: 83,
      width: 776,
      height: 1058,
      tokenX: -113,
      tokenY: 0,
      tokenSize: 414,
      forIds: ["ODM6Njg6NTY3"],
    }),
    new ModuleNpc({
      id: "npc25",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.SgkV5RtcK72d0HwI",
      page: 84,
      width: 693,
      height: 1100,
      tokenX: -224,
      tokenY: 51,
      tokenSize: 400,
      forIds: ["ODQ6MjUxOjUxOQ", "NTg6MzI2OjQ3MQ"],
    }),
    new ModuleNpc({
      id: "npc26",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.zj2sCM8tQSMG9Qm6",
      page: 85,
      width: 944,
      height: 809,
      tokenX: -520,
      tokenY: -190,
      tokenSize: 384,
      forIds: ["ODU6Njg6NDIz"],
    }),
    new ModuleNpc({
      id: "npc27",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-3.Actor.6AvQH0XXccorLE6d",
      page: 86,
      width: 812,
      height: 1025,
      tokenX: -271,
      tokenY: 68,
      tokenSize: 353,
      forIds: [
        "ODY6MjY3OjQ4Mw",
        "MTk6Njg6MjMx",
        "NjA6OTk6NDk1",
        "NTE6Mjk1OjUzMQ",
      ],
    }),
    new ModuleNpc({
      id: "npc28",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.zrh3MrS68H2gPlVs",
      page: 87,
      width: 702,
      height: 1050,
      tokenX: -203,
      tokenY: 55,
      tokenSize: 350,
      forIds: ["ODc6Njg6NDEx"],
    }),
    new ModuleNpc({
      id: "npc29",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.8jjEOs99Bmo1v0Qc",
      page: 88,
      width: 893,
      height: 1100,
      tokenX: 104,
      tokenY: 0,
      tokenSize: 1100,
      forIds: ["ODg6MjUxOjU2Nw"],
    }),
    new ModuleNpc({
      id: "npc30",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.tm8vQ7gdAe9zVdDg",
      page: 89,
      width: 884,
      height: 937,
      tokenX: 118,
      tokenY: 71,
      tokenSize: 797,
      forIds: ["MjU6Njg6MzAz", "ODk6Njg6NDQ3", "MjU6Njg6MzUx"],
    }),
    new ModuleNpc({
      id: "npc31",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.syUXLdUsEDYgni5R",
      page: 91,
      width: 880,
      height: 1279,
      tokenX: -268,
      tokenY: -52,
      tokenSize: 383,
      forIds: ["OTE6Njg6NTA3", "NTg6MzI2OjUxOQ"],
    }),
    new ModuleNpc({
      id: "npc32",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.oTa25rAxytm03T3X",
      page: 93,
      width: 878,
      height: 1214,
      tokenX: -246,
      tokenY: -34,
      tokenSize: 346,
      forIds: ["OTM6Njg6NDM1"],
    }),
    new ModuleNpc({
      id: "npc33",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.drcSWbCIWc7P4lKO",
      label: "AAS",
      forIds: ["NTE6Mjk1OjQ4Mw"],
    }),
    new ModuleNpc({
      id: "npc34",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.mX47c0W9rizbmMBM",
      label: "B",
      forIds: ["Mjc6Njg6NDEx"],
    }),
    new ModuleNpc({
      id: "npc35",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.saEPHCN5lDiylb5H",
      label: "BP",
      forIds: ["NDA6MzI2OjQ3MQ"],
    }),
    new ModuleNpc({
      id: "npc36",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.5u7luLMeRNJ4en65",
      label: "BSS",
      forIds: ["ODI6MjUxOjU2Nw", "NDk6Njg6MjY3"],
    }),
    new ModuleNpc({
      id: "npc37",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.S8iX8sPaYFFYDoUq",
      label: "B",
      forIds: ["MTU6MzcxOjIxOQ"],
    }),
    new ModuleNpc({
      id: "npc38",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.MQnhyCM9LInNYtl0",
      label: "C",
      forIds: ["NTE6Njg6MjU1"],
    }),
    new ModuleNpc({
      id: "npc39",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.JuCLvgvxYbSRXqON",
      label: "CHI",
      forIds: ["MjU6Mjk1OjY2Mw", "Mjg6MzI2OjY2Mw", "Mjg6MzI2OjU3OQ"],
    }),
    new ModuleNpc({
      id: "npc42",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.sSa18Ra6zGc4Mp71",
      label: "B",
      forIds: ["MTQ6OTk6NDM1", "MTQ6MzI2OjQ0Nw", "MTU6MzU1OjI3OQ"],
    }),
    new ModuleNpc({
      id: "npc43",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.AybkJlxPivzb1cJb",
      label: "D",
      forIds: ["MTk6Mjk1OjYxNQ", "NTc6Njg6NjYz"],
    }),
    new ModuleNpc({
      id: "npc44",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.MNb1Hjd2gKimnfvV",
      label: "R",
      forIds: ["MTQ6OTk6Mzg3", "MTM6Mjk1OjE0Nw"],
    }),
    new ModuleNpc({
      id: "npc45",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.NW1Ax1QGE9W4DmiN",
      label: "C",
      forIds: ["NTE6Njg6MzAz"],
    }),
    new ModuleNpc({
      id: "npc46",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.BoXCGLACP9vuIZkZ",
      label: "FL",
      forIds: ["NDU6Mjk1OjY1MQ"],
    }),
    new ModuleNpc({
      id: "npc47",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.2jtRdYo9ey7osDUH",
      label: "O",
      forIds: ["NTA6OTk6NTE5"],
    }),
    new ModuleNpc({
      id: "npc48",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.FH58AcRBZIfrHKvv",
      label: "SC",
      forIds: ["Mzg6OTk6NDIz"],
    }),
    new ModuleNpc({
      id: "npc49",
      actorUuid: "Compendium.pf2e.hazards.Actor.uEZ4Jv2wNyukJTRL",
      label: "HPT",
      forIds: ["MjY6OTk6NjM5"],
    }),
    new ModuleNpc({
      id: "npc50",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.yS0bUM8R6hb4fIx2",
      label: "W",
      forIds: ["MjY6OTk6OTk"],
    }),
    new ModuleNpc({
      id: "npc51",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.tm3Tixb7IDoLdJ5k",
      label: "TA",
      forIds: ["MjY6OTk6MTQ3"],
    }),
    new ModuleNpc({
      id: "npc52",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.HBcKkBXyGaWXZxSs",
      label: "F",
      forIds: ["MTQ6MzI2OjQ5NQ"],
    }),
    new ModuleNpc({
      id: "npc53",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.T6RsavB4ZZGdlNuA",
      label: "HOTF",
      forIds: ["Mzk6Njg6MTIz"],
    }),
    new ModuleNpc({
      id: "npc54",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.rDYDTCVUa5GS3uTE",
      label: "IMT",
      forIds: ["NTQ6MzI2OjE3MQ"],
    }),
    new ModuleNpc({
      id: "npc55",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.3JEiwAFwkEjCDEYa",
      label: "KH",
      forIds: ["MTk6Mjk1OjU2Nw"],
    }),
    new ModuleNpc({
      id: "npc56",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.ApEn56YEz9xavgug",
      label: "LM",
      forIds: ["Mzg6MzI2OjI1NQ"],
    }),
    new ModuleNpc({
      id: "npc57",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.ECe2DkOgSSqXHBqv",
      label: "RD",
      forIds: ["MTM6Mjk1Ojk5"],
    }),
    new ModuleNpc({
      id: "npc58",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.ySpOZlKUbcxWhKQ6",
      label: "OZ",
      forIds: ["NDk6Njg6MjE5"],
    }),
    new ModuleNpc({
      id: "npc59",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.kPBSSOuR8n8vZHXB",
      label: "O",
      forIds: ["NDQ6MzI2OjEzNQ"],
    }),
    new ModuleNpc({
      id: "npc60",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.httXfBPGseF9csXa",
      label: "BT",
      forIds: ["MTQ6MzI2OjM5OQ"],
    }),
    new ModuleNpc({
      id: "npc61",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.54i6ithgmhDk7Dne",
      label: "RC",
      forIds: ["NTM6Njg6NTkx"],
    }),
    new ModuleNpc({
      id: "npc62",
      actorUuid: "Compendium.pf2e.hazards.Actor.HnPd9Vqh5NHKEdRq",
      label: "SBP",
      forIds: ["MjY6OTk6NTkx"],
    }),
    new ModuleNpc({
      id: "npc63",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.jgMFqFDNUWsrnnBH",
      label: "TS",
      forIds: ["NDQ6MzI2OjQyMw"],
    }),
    new ModuleNpc({
      id: "npc64",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.h7je8nkscJQ2Ac8j",
      label: "WS",
      forIds: ["OTo2ODo1NTU"],
    }),
    new ModuleNpc({
      id: "npc65",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.TFRt64nosuS3PzmH",
      label: "ES",
      forIds: ["MTE6MzQxOjYyNw"],
    }),
    new ModuleNpc({
      id: "npc66",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.cd2IaNGpdmHHZnrN",
      label: "X",
      forIds: ["MTE6MzUxOjU3OQ"],
    }),
    new ModuleNpc({
      id: "npc67",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.ZXbr1ke1vF0ZFKY3",
      label: "R",
      forIds: ["Mzk6Mjk1OjE1OQ"],
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
          id: "NzozNzE6NDM1",
        },
        {
          id: "NjozMjY6Mjc5",
        },
        {
          id: "Nzo2ODo0OTU",
        },
        {
          id: "ODozMjY6MzYz",
        },
        {
          id: "OTo2ODoxMTE",
        },
        {
          id: "OToyOTU6MzUx",
        },
        {
          id: "MTA6MzI2OjM5OQ",
        },
        {
          id: "MTE6Mjk1OjQyMw",
        },
        {
          id: "MTI6OTk6Njk5",
        },
        {
          id: "MTI6OTk6MjMx",
        },
        {
          id: "MTM6Njg6NDEx",
        },
        {
          id: "MTM6MzcwOjQ1OQ",
        },
        {
          id: "MTQ6OTk6Njk5",
        },
        {
          id: "MTQ6OTk6MzM5",
        },
        {
          id: "MTQ6MzI2OjI5MQ",
        },
        {
          id: "MTU6Njg6MTcx",
        },
        {
          id: "MTU6Mjk1OjYwMw",
        },
      ],
    },
    {
      name: "Chapter 2",
      pages: [
        {
          id: "MTY6MjU0OjM1Ng",
        },
        {
          id: "MTc6MzcxOjY5OQ",
        },
        {
          id: "MTc6MzcxOjUzMQ",
        },
        {
          id: "MTY6MzI2OjIwNw",
        },
        {
          id: "MTY6MzM1OjE3MQ",
        },
        {
          id: "MTY6MzM1OjEyMw",
        },
        {
          id: "MTc6Nzc6Njc1",
        },
        {
          id: "MTc6Nzc6NjYz",
        },
        {
          id: "MTc6Nzc6NjUx",
        },
        {
          id: "MTc6Nzc6NTkx",
        },
        {
          id: "MTc6Nzc6NTQz",
        },
        {
          id: "MTc6Nzc6NTMx",
        },
        {
          id: "MTc6Nzc6NTE5",
        },
        {
          id: "MTc6Nzc6NDk1",
        },
        {
          id: "MTc6Nzc6NDU5",
        },
        {
          id: "MTc6Nzc6NDM1",
        },
        {
          id: "MTc6Nzc6NDEx",
        },
        {
          id: "MTc6Nzc6Mzc1",
        },
        {
          id: "MTc6Nzc6MzI3",
        },
        {
          id: "MTc6Njg6MjU1",
        },
        {
          id: "MTg6OTk6Mjkx",
        },
        {
          id: "MTk6Njg6NDcx",
        },
        {
          id: "MTk6Njg6MTgz",
        },
        {
          id: "MTk6Mjk1OjI3OQ",
        },
      ],
    },
    {
      name: "Chapter 3",
      pages: [
        {
          id: "MjA6MjU0OjM1Ng",
        },
        {
          id: "MjE6MzcxOjY5OQ",
        },
        {
          id: "MjE6MzcxOjQ1OQ",
        },
        {
          id: "MjA6OTk6MTM1",
        },
        {
          id: "MjI6OTk6MzYz",
        },
        {
          id: "MjM6Njg6Njk5",
        },
        {
          id: "MjM6Mjk1OjYzOQ",
        },
        {
          id: "MjQ6OTk6NTkx",
        },
        {
          id: "MjQ6OTk6MjU1",
        },
        {
          id: "MjQ6MzYzOjU2Nw",
        },
        {
          id: "MjU6Njg6NjUx",
        },
        {
          id: "MjU6Njg6MjA3",
        },
        {
          id: "MjU6Mjk1OjM2Mw",
        },
        {
          id: "MjY6OTk6NDcx",
        },
        {
          id: "MjY6MzI2OjY5OQ",
        },
        {
          id: "MjY6MzI2OjMxNQ",
        },
        {
          id: "MjY6MzI2OjE0Nw",
        },
        {
          id: "Mjc6Njg6Njk5",
        },
        {
          id: "Mjc6Njg6MzE1",
        },
        {
          id: "Mjc6Mjk1OjY2Mw",
        },
        {
          id: "Mjc6Mjk1OjMxNQ",
        },
        {
          id: "Mjk6Njg6MzAz",
        },
        {
          id: "Mjk6Mjk1OjY5OQ",
        },
      ],
    },
    {
      name: "Chapter 4",
      pages: [
        {
          id: "MzA6MjU0OjM1Ng",
        },
        {
          id: "MzE6MzcxOjY5OQ",
        },
        {
          id: "MzE6MzcxOjQ5NQ",
        },
        {
          id: "MzA6OTk6MTU5",
        },
        {
          id: "MzA6MzI2OjI3OQ",
        },
        {
          id: "MzI6OTk6Njk5",
        },
        {
          id: "MzM6Njg6NjAz",
        },
        {
          id: "MzM6Mjk1OjY1MQ",
        },
        {
          id: "MzU6Njg6NTMx",
        },
        {
          id: "MzU6Njg6MTU5",
        },
        {
          id: "MzU6Mjk1OjYwMw",
        },
        {
          id: "MzY6MzI2OjYzOQ",
        },
        {
          id: "MzY6MzM5OjEzNQ",
        },
        {
          id: "Mzg6OTk6Njk5",
        },
        {
          id: "Mzg6OTk6Mjkx",
        },
        {
          id: "Mzg6MzI2OjU2Nw",
        },
        {
          id: "Mzk6Njg6MzAz",
        },
        {
          id: "Mzk6Mjk1OjUxOQ",
        },
        {
          id: "NDA6OTk6MTgz",
        },
        {
          id: "NDA6MzI2OjY5OQ",
        },
        {
          id: "NDE6Njg6NDcx",
        },
        {
          id: "NDI6MzI2OjQyMw",
        },
        {
          id: "NDM6Njg6NjI3",
        },
        {
          id: "NDQ6OTk6NDM1",
        },
        {
          id: "NDQ6MzI2OjU5MQ",
        },
        {
          id: "NDQ6MzI2OjM3NQ",
        },
        {
          id: "NDU6Njg6NjI3",
        },
        {
          id: "NDY6OTk6Njk5",
        },
        {
          id: "NDY6OTk6MzYz",
        },
        {
          id: "NDc6Njg6Mzc1",
        },
        {
          id: "NDg6MzI2OjI1NQ",
        },
        {
          id: "NDg6Mzg5OjEyMw",
        },
        {
          id: "NDk6Mjk1OjQxMQ",
        },
        {
          id: "NDk6Mjk1OjMyNw",
        },
        {
          id: "NTA6MzI2OjY1MQ",
        },
        {
          id: "NTA6MzI2OjQ4Mw",
        },
        {
          id: "NTA6MzI2OjEzNQ",
        },
        {
          id: "NTE6Mjk1OjY5OQ",
        },
        {
          id: "NTE6Mjk1OjMxNQ",
        },
        {
          id: "NTI6MzI2OjIzMQ",
        },
        {
          id: "NTM6Njg6MjY3",
        },
        {
          id: "NTM6Mjk1OjU3OQ",
        },
        {
          id: "NTU6Njg6NDgz",
        },
        {
          id: "NTU6Mjk1OjMxNQ",
        },
        {
          id: "NTY6MzI2OjUxOQ",
        },
        {
          id: "NTc6Njg6NDM1",
        },
        {
          id: "NTc6Njg6MjQz",
        },
        {
          id: "NTc6Mjk1OjEzNQ",
        },
        {
          id: "NTk6Njg6NTE5",
        },
        {
          id: "NTk6Njg6MTk1",
        },
        {
          id: "NTk6Mjk1OjUwNw",
        },
        {
          id: "NjA6Mzc2OjE4Mw",
        },
        {
          id: "NjE6Njg6MjE5",
        },
        {
          id: "NjE6Mjk1OjQ5NQ",
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
          id: "NjM6OTc6NjIx",
        },
        {
          id: "NjM6Njg6Mjc5",
        },
        {
          id: "NjM6Mjk1OjUzMQ",
        },
        {
          id: "NjM6Mjk1OjEzNQ",
        },
        {
          id: "NjQ6OTk6MzYz",
        },
        {
          id: "NjQ6MzI2OjU5MQ",
        },
        {
          id: "NjU6Njg6NjAz",
        },
        {
          id: "NjU6Njg6MTcx",
        },
        {
          id: "NjU6Mjk1OjMzOQ",
        },
        {
          id: "NjY6OTk6NTY3",
        },
        {
          id: "NjY6OTk6MTU5",
        },
        {
          id: "Njc6Njg6Njk5",
        },
        {
          id: "Njc6Njg6MzE1",
        },
        {
          id: "Njk6MjIwOjY1Mw",
        },
        {
          id: "NzE6Njg6Njk5",
        },
        {
          id: "NzE6Mjk1OjI2Nw",
        },
        {
          id: "NzI6OTk6MTk1",
        },
        {
          id: "NzI6OTk6MTQ3",
        },
        {
          id: "NzI6MzI2OjM1MQ",
        },
        {
          id: "NzM6Njg6NjE1",
        },
        {
          id: "NzM6Njg6MTM1",
        },
        {
          id: "NzM6Mjk1OjI1NQ",
        },
        {
          id: "NzQ6MzI2OjYwMw",
        },
        {
          id: "NzQ6MzI2OjI2Nw",
        },
        {
          id: "NzU6Njg6Mzg3",
        },
        {
          id: "NzU6MzUyOjQ0Nw",
        },
        {
          id: "Nzc6MTAyOjYyMQ",
        },
        {
          id: "Nzg6MzUwOjU2Nw",
        },
        {
          id: "ODA6OTk6Njk5",
        },
        {
          id: "ODE6Njg6OTk",
        },
        {
          id: "ODI6MjUxOjY4Nw",
        },
        {
          id: "ODI6MjUxOjYxNQ",
        },
        {
          id: "ODI6Mjk2OjM1MQ",
        },
        {
          id: "ODM6Njg6Njg3",
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
          id: "OTA6MTM4OjYyMg",
        },
        {
          id: "OTI6MTUxOjYyMg",
        },
        {
          id: "ODI6MTI1OjY2Mw",
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
          id: "ODY6MTcwOjY2Mw",
        },
        {
          id: "ODc6MzcxOjY2Mw",
        },
        {
          id: "ODg6MTQzOjY2Mw",
        },
        {
          id: "ODk6MzcxOjY2Mw",
        },
      ],
    },
  ];
  combines = [
    {
      source: "OTM6Njg6NTY3",
      dest: "OTI6MTUxOjYyMg",
    },
    {
      source: "OTA6MzI2OjUzMQ",
      dest: "OTA6MTM4OjYyMg",
    },
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "SIXTY FEET UNDER" && t.fontId === "ColiseumBold:38",
    );
  }
  preprocess(text) {
    for (let i = 0; i < text.length; i++) {
      [16, 17].includes(text[i].page) &&
        text[i].fontId === "TimesNewRomanPS-BoldMT:9" &&
        text[i].text.startsWith("B") &&
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
    this.markStartOfLine(text, 52, 382.25, 507);
    this.markStartOfLine(text, 52, 364.25, 471);
    this.markStartOfLine(text, 52, 364.25, 471);
    this.markStartOfLine(text, 52, 355.25, 435);
    this.markStartOfLine(text, 82, 287.5, 411);
    this.markStartOfLine(text, 82, 285.5001, 291);
    this.markStartOfLine(text, 82, 318.5001, 267);
    this.markStartOfLine(text, 82, 324.5001, 255);
    this.markStartOfLine(text, 82, 325.5001, 243);
    this.markStartOfLine(text, 82, 342.5001, 231);
    this.markStartOfLine(text, 82, 346.5001, 207);
    this.markStartOfLine(text, 82, 354.5001, 195);
    this.markStartOfLine(text, 82, 375.5001, 183);
    this.markStartOfLine(text, 82, 380.5001, 171);
    this.markStartOfLine(text, 82, 388.5001, 147);
    this.markStartOfLine(text, 82, 387.5001, 87);
    this.markStartOfLine(text, 84, 268.5, 495);
    this.markStartOfLine(text, 84, 274.5, 483);
    this.markStartOfLine(text, 84, 275.5, 471);
    this.markStartOfLine(text, 84, 275.5, 459);
    this.markStartOfLine(text, 84, 273.5, 447);
    this.markStartOfLine(text, 84, 287.5, 423);
    this.markStartOfLine(text, 84, 283.5, 351);
    this.markStartOfLine(text, 84, 274.5, 339);
    this.markStartOfLine(text, 84, 283.5, 315);
    this.markStartOfLine(text, 84, 294.5, 207);
    this.markStartOfLine(text, 86, 266.5, 483);
    this.markStartOfLine(text, 86, 297.5, 459);
    this.markStartOfLine(text, 86, 304.5, 447);
    this.markStartOfLine(text, 86, 317.5, 435);
    this.markStartOfLine(text, 86, 327.5, 423);
    this.markStartOfLine(text, 86, 336.5, 411);
    this.markStartOfLine(text, 86, 350.5, 363);
    this.markStartOfLine(text, 86, 335.5, 219);
    this.markStartOfLine(text, 86, 329.5, 195);
    this.markStartOfLine(text, 86, 350.5, 135);
    this.markStartOfLine(text, 88, 308.5, 543);
    this.markStartOfLine(text, 88, 315.5, 531);
    this.markStartOfLine(text, 88, 315.5, 519);
    this.markStartOfLine(text, 88, 377.5, 495);
    this.markStartOfLine(text, 88, 342.5, 423);
    this.markStartOfLine(text, 88, 346.5, 411);
    this.markStartOfLine(text, 88, 349.5, 399);
    this.markStartOfLine(text, 88, 313.5, 327);
    this.markStartOfLine(text, 88, 312.5, 315);
    this.markStartOfLine(text, 88, 308.5, 303);
    this.markStartOfLine(text, 88, 309.5, 291);
    this.markStartOfLine(text, 88, 309.5, 279);
    this.markStartOfLine(text, 88, 382.5, 243);
    this.markStartOfLine(text, 88, 319.5, 159);
    this.markStartOfLine(text, 88, 339.5001, 75);
    this.changeTextFn(text, 42, 272.016, 591, (x) =>
      x.replace("LEVEL", "CREATURE"),
    );
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
