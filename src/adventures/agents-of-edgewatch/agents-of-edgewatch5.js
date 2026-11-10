import { AgentsOfEdgewatchBase } from "./base.js";
import { AdventureImage, CaptionImage } from "../../core/images.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class AgentsOfEdgewatch5 extends AgentsOfEdgewatchBase {
  prefix = "agents-of-edgewatch5";
  fullName = "Agents of Edgewatch - Belly of the Black Whale";
  pages = [
    this.ChapterHeadingPageLayout(6),
    this.RightSingleColumnWithSidebar(7),
    this.LeftTwoColumn(8),
    this.RightTwoColumn(9),
    this.LeftTwoColumnWithLeftCutout(10, 220),
    this.RightTwoColumnWithRightCutout(11, 580),
    this.LeftTwoColumn(12),
    this.RightTwoColumn(13),
    this.LeftTwoColumn(14),
    this.RightTwoColumn(15),
    this.LeftTwoColumn(16),
    this.RightTwoColumn(17),
    this.LeftTwoColumn(18),
    this.RightTwoColumn(19),
    this.LeftTwoColumn(20),
    this.RightTwoColumnWithRightCutout(21, 560),
    this.LeftTwoColumn(22),
    this.RightTwoColumn(23),
    this.LeftTwoColumn(24),
    this.RightTwoColumn(25),
    this.LeftTwoColumnWithMap(26, 340),
    this.RightTwoColumn(27),
    this.LeftTwoColumn(28),
    this.RightTwoColumn(29),
    this.ChapterHeadingPageLayout(30),
    this.RightSingleColumnWithSidebar(31),
    this.LeftTwoColumn(32),
    this.RightTwoColumnWithRightCutout(33, 140),
    this.LeftTwoColumn(34),
    this.RightTwoColumn(35),
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
    this.RightTwoColumnWithRightCutout(47, 570),
    this.LeftTwoColumn(48),
    this.RightTwoColumn(49),
    this.LeftTwoColumn(50),
    this.RightTwoColumn(51),
    this.LeftTwoColumn(52),
    this.RightTwoColumn(53),
    this.ChapterHeadingPageLayout(54),
    this.RightSingleColumnWithSidebarAndMap(55, 280),
    this.LeftTwoColumnWithMap(56, 330),
    this.RightTwoColumn(57),
    this.LeftTwoColumn(58),
    this.RightTwoColumn(59),
    this.LeftTwoColumn(60),
    this.RightTwoColumn(61),
    this.LeftTwoColumn(62),
    this.RightTwoColumn(63),
    this.LeftTwoColumn(64),
    this.RightTwoColumn(65),
    this.RightChapterHeadingPageLayout(73),
    this.LeftTwoColumn(74),
    this.RightTwoColumn(75),
    this.LeftTwoColumn(76),
    this.RightTwoColumn(77),
    this.RightChapterHeadingPageLayout(79),
    this.LeftTwoColumn(80),
    this.RightTwoColumn(81),
    this.LeftTwoColumn(82),
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
        name: "aoe5/map1",
        priority: 0,
      },
      nameInfo: {
        x: 84,
        y: 706.6681,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 18,
      width: 834,
      height: 1042,
      imageLeft: 111,
      imageRight: 726,
      imageCols: 20 * 2,
      imageTop: 146,
      imageBottom: 914,
      imageRows: 25 * 2,
      globalLight: true,
      detailsFile: "/aoe/maps/aoe5-map1.json",
      journals: [
        {
          x: 2e3,
          y: 2500,
          id: "MTc6Mjk1OjM3NQ",
        },
        {
          x: 3e3,
          y: 3500,
          id: "MTc6Mjk1OjMwMw",
        },
        {
          x: 4400,
          y: 4900,
          id: "MTg6OTk6MjY3",
        },
        {
          x: 5e3,
          y: 3300,
          id: "MTk6Njg6NDIz",
        },
        {
          x: 5800,
          y: 4300,
          id: "MTk6Njg6OTk",
        },
        {
          x: 3600,
          y: 5700,
          id: "MTk6Mjk1OjYyNw",
        },
        {
          x: 3800,
          y: 6700,
          id: "MjA6OTk6NTc5",
        },
        {
          x: 5e3,
          y: 6100,
          id: "MjA6Mzg4OjM4Nw",
        },
        {
          x: 5600,
          y: 6100,
          id: "MjE6Njg6Njk5",
        },
        {
          x: 5400,
          y: 6900,
          id: "MjE6Njg6NjAz",
        },
      ],
      tokens: [
        {
          id: "npc38",
          x: 2500,
          y: 2900,
        },
        {
          id: "npc38",
          x: 3200,
          y: 2900,
        },
        {
          id: "npc38",
          x: 3300,
          y: 3300,
        },
        {
          id: "npc38",
          x: 3200,
          y: 3800,
        },
        {
          id: "npc38",
          x: 2600,
          y: 3800,
        },
        {
          id: "npc38",
          x: 2400,
          y: 3400,
        },
        {
          id: "npc6",
          x: 4e3,
          y: 5e3,
        },
        {
          id: "npc6",
          x: 4600,
          y: 5e3,
        },
        {
          id: "npc6",
          x: 4500,
          y: 4800,
        },
        {
          id: "npc6",
          x: 3700,
          y: 4800,
        },
        {
          id: "npc6",
          x: 4600,
          y: 6200,
        },
        {
          id: "npc6",
          x: 4800,
          y: 6300,
        },
        {
          id: "npc6",
          x: 5100,
          y: 6300,
        },
        {
          id: "npc7",
          x: 5200,
          y: 6900,
        },
        {
          id: "npc35",
          x: 3700,
          y: 6400,
        },
      ],
    }),
    new ModuleScene({
      name: "map2",
      canonical: {
        name: "aoe5/map2",
        priority: 0,
      },
      nameInfo: {
        x: 93.25,
        y: 705.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 22,
      width: 668,
      height: 890,
      imageLeft: 60,
      imageRight: 611,
      imageCols: 18,
      imageTop: 58,
      imageBottom: 794,
      imageRows: 24,
      globalLight: true,
      detailsFile: "/aoe/maps/aoe5-map2.json",
      journals: [
        {
          x: 1150,
          y: 2550,
          id: "MjM6Njg6Njk5",
        },
        {
          x: 1550,
          y: 2850,
          id: "MjM6Njg6NTMx",
        },
        {
          x: 2250,
          y: 3150,
          id: "MjM6Mjk1OjUwNw",
        },
        {
          x: 2350,
          y: 2650,
          id: "MjM6Mjk1OjQyMw",
        },
        {
          x: 1650,
          y: 2150,
          id: "MjQ6OTk6Njk5",
        },
        {
          x: 1450,
          y: 1550,
          id: "MjU6Njg6NDQ3",
        },
      ],
      tokens: [
        {
          id: "npc36",
          x: 1400,
          y: 3100,
        },
        {
          id: "npc36",
          x: 2400,
          y: 2700,
        },
        {
          id: "npc36",
          x: 2100,
          y: 2500,
        },
        {
          id: "npc36",
          x: 2300,
          y: 2400,
        },
        {
          id: "npc36",
          x: 2300,
          y: 2900,
        },
        {
          id: "npc36",
          x: 2100,
          y: 2800,
        },
        {
          id: "npc48",
          x: 1400,
          y: 2200,
        },
        {
          id: "npc8",
          x: 1100,
          y: 2100,
        },
        {
          id: "npc42",
          x: 1e3,
          y: 1100,
        },
      ],
    }),
    new ModuleScene({
      name: "map3",
      canonical: {
        name: "aoe5/map3",
        priority: 0,
      },
      nameInfo: {
        x: 99,
        y: 381,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 26,
      width: 1159,
      height: 779,
      imageLeft: 215,
      imageRight: 1058,
      imageCols: 32,
      imageTop: 48,
      imageBottom: 653,
      imageRows: 23,
      globalLight: true,
      detailsFile: "/aoe/maps/aoe5-map3.json",
      journals: [
        {
          x: 4950,
          y: 2550,
          id: "MjU6MzA0OjIxOQ",
        },
        {
          x: 4350,
          y: 2250,
          id: "MjU6MzA0OjE4Mw",
        },
        {
          x: 3500,
          y: 2e3,
          id: "MjU6MzA0OjEzNQ",
        },
        {
          x: 2700,
          y: 1100,
          id: "MjU6MzA0Ojg3",
        },
        {
          x: 3500,
          y: 1100,
          id: "MjU6MzA0Ojc1",
        },
        {
          x: 4300,
          y: 1100,
          id: "MjY6MTA4OjMzOQ",
        },
        {
          x: 4900,
          y: 1700,
          id: "MjY6MTA4OjMyNw",
        },
        {
          x: 4300,
          y: 3e3,
          id: "MjY6MTA4OjMxNQ",
        },
        {
          x: 3500,
          y: 3e3,
          id: "MjY6MTA4OjMwMw",
        },
        {
          x: 2700,
          y: 3e3,
          id: "MjY6MTA4OjI5MQ",
        },
        {
          x: 2100,
          y: 2400,
          id: "MjY6MTA4OjI3OQ",
        },
        {
          x: 2050,
          y: 3050,
          id: "MjY6MTA4OjI2Nw",
        },
        {
          x: 1450,
          y: 1950,
          id: "Mjc6Njg6MjMx",
        },
        {
          x: 1450,
          y: 1850,
          id: "MjY6MzI2OjI2Nw",
        },
        {
          x: 1450,
          y: 1150,
          id: "MjU6Mjk1OjQxMQ",
        },
      ],
      tokens: [
        {
          id: "npc4",
          x: 4200,
          y: 1800,
        },
        {
          id: "npc36",
          x: 4200,
          y: 2e3,
        },
        {
          id: "npc36",
          x: 3400,
          y: 1800,
        },
        {
          id: "npc36",
          x: 3500,
          y: 1800,
        },
        {
          id: "npc36",
          x: 3600,
          y: 1900,
        },
        {
          id: "npc36",
          x: 3600,
          y: 2100,
        },
        {
          id: "npc36",
          x: 3300,
          y: 1900,
        },
        {
          id: "npc36",
          x: 3300,
          y: 2100,
        },
        {
          id: "npc36",
          x: 4300,
          y: 1800,
        },
        {
          id: "npc36",
          x: 4300,
          y: 2e3,
        },
        {
          id: "npc36",
          x: 4400,
          y: 1800,
        },
        {
          id: "npc5",
          x: 2900,
          y: 2500,
        },
        {
          id: "npc9",
          x: 2900,
          y: 2400,
        },
        {
          id: "npc9",
          x: 3100,
          y: 2500,
        },
        {
          id: "npc9",
          x: 3e3,
          y: 2600,
        },
        {
          id: "npc10",
          x: 4e3,
          y: 1400,
        },
        {
          id: "npc36",
          x: 3800,
          y: 1500,
        },
        {
          id: "npc36",
          x: 3800,
          y: 1600,
        },
        {
          id: "npc36",
          x: 3900,
          y: 1600,
        },
        {
          id: "npc36",
          x: 4e3,
          y: 1600,
        },
        {
          id: "npc36",
          x: 4e3,
          y: 1500,
        },
      ],
    }),
    new ModuleScene({
      name: "map4a",
      canonical: {
        name: "aoe5/map4a",
        priority: 0,
      },
      nameInfo: {
        x: 479,
        y: 710.334,
      },
      nameFn: (name) => `${this.sentenceCase(name)} Top Level`,
      page: 36,
      width: 1157,
      height: 1518,
      imageLeft: 13,
      imageRight: 1146,
      imageCols: 44 * 2,
      imageTop: 5,
      imageBottom: 1496,
      imageRows: 58 * 2,
      cropLeft: 0,
      cropRight: 1157,
      cropTop: 0,
      cropBottom: 492,
      globalLight: true,
      detailsFile: "/aoe/maps/aoe5-map4a.json",
      journals: [
        {
          x: 4900,
          y: 1300,
          id: "MzQ6MzI2OjExMQ",
        },
        {
          x: 4100,
          y: 1700,
          id: "MzU6Njg6NTE5",
        },
        {
          x: 3500,
          y: 1700,
          id: "MzU6Njg6MjQz",
        },
        {
          x: 8900,
          y: 2e3,
          id: "Mzg6OTk6MzI3",
        },
        {
          x: 7300,
          y: 2e3,
          id: "Mzg6MzI2OjY5OQ",
        },
        {
          x: 6700,
          y: 2e3,
          id: "Mzk6Njg6MzM5",
        },
        {
          x: 6700,
          y: 3100,
          id: "NDA6OTk6Mjkx",
        },
        {
          x: 8100,
          y: 3700,
          id: "NDA6OTk6MTM1",
        },
        {
          x: 9500,
          y: 3700,
          id: "NDM6Njg6MzYz",
        },
        {
          x: 10100,
          y: 2900,
          id: "NDM6Njg6MjA3",
        },
        {
          x: 4800,
          y: 3400,
          id: "NDQ6MzI2OjE0Nw",
        },
        {
          x: 5600,
          y: 4200,
          id: "NDU6Njg6NjYz",
        },
        {
          x: 3100,
          y: 3400,
          id: "NDI6MzI2OjQ5NQ",
        },
      ],
      tokens: [
        {
          id: "npc13",
          x: 3500,
          y: 1600,
        },
        {
          id: "npc13",
          x: 3400,
          y: 1600,
        },
        {
          id: "npc13",
          x: 3500,
          y: 1700,
        },
        {
          id: "npc13",
          x: 3400,
          y: 1700,
        },
        {
          id: "npc28",
          x: 4e3,
          y: 1500,
        },
        {
          id: "npc13",
          x: 10200,
          y: 2700,
        },
        {
          id: "npc17",
          x: 1e4,
          y: 2700,
        },
        {
          id: "npc17",
          x: 10100,
          y: 2600,
        },
        {
          id: "npc17",
          x: 10200,
          y: 2900,
        },
        {
          id: "npc13",
          x: 10300,
          y: 2800,
        },
        {
          id: "npc13",
          x: 9900,
          y: 2800,
        },
        {
          id: "npc15",
          x: 7400,
          y: 1900,
        },
      ],
    }),
    new ModuleScene({
      name: "map4b",
      canonical: {
        name: "aoe5/map4b",
        priority: 0,
      },
      nameInfo: {
        x: 479,
        y: 710.334,
      },
      nameFn: (name) => `${this.sentenceCase(name)} Middle Level`,
      page: 36,
      width: 1157,
      height: 1518,
      imageLeft: 13,
      imageRight: 1146,
      imageCols: 44 * 2,
      imageTop: 5,
      imageBottom: 1496,
      imageRows: 58 * 2,
      cropLeft: 0,
      cropRight: 1157,
      cropTop: 498,
      cropBottom: 1005,
      globalLight: true,
      detailsFile: "/aoe/maps/aoe5-map4b.json",
      journals: [
        {
          x: 4500,
          y: 1700,
          id: "Mzc6Njg6MTM1",
        },
        {
          x: 4900,
          y: 1500,
          id: "Mzc6Mjk1OjUzMQ",
        },
        {
          x: 8500,
          y: 2100,
          id: "Mzk6Mjk1OjY2Mw",
        },
        {
          x: 5900,
          y: 2700,
          id: "NDA6MzI2OjQxMQ",
        },
        {
          x: 7700,
          y: 3700,
          id: "NDE6Njg6NjI3",
        },
        {
          x: 6900,
          y: 7100,
          id: "NDE6Njg6NTc5",
        },
        {
          x: 2900,
          y: 3100,
          id: "NDI6MzI2OjM1MQ",
        },
        {
          x: 3300,
          y: 3100,
          id: "NDI6MzI2OjI5MQ",
        },
        {
          x: 9300,
          y: 4100,
          id: "NDM6Mjk1OjE4Mw",
        },
        {
          x: 9700,
          y: 3100,
          id: "NDQ6OTk6Njk5",
        },
        {
          x: 10500,
          y: 2900,
          id: "NDQ6OTk6NTc5",
        },
        {
          x: 5300,
          y: 3700,
          id: "NDU6Njg6MTIz",
        },
        {
          x: 5500,
          y: 7900,
          id: "NDY6OTk6NDM1",
        },
      ],
      tokens: [
        {
          id: "npc13",
          x: 3100,
          y: 1500,
        },
        {
          id: "npc13",
          x: 4700,
          y: 1700,
        },
        {
          id: "npc13",
          x: 3100,
          y: 1900,
        },
        {
          id: "npc13",
          x: 3800,
          y: 2e3,
        },
        {
          id: "npc13",
          x: 3700,
          y: 1300,
        },
        {
          id: "npc13",
          x: 4700,
          y: 1400,
        },
        {
          id: "npc14",
          x: 5800,
          y: 2600,
        },
        {
          id: "npc14",
          x: 5900,
          y: 2600,
        },
        {
          id: "npc14",
          x: 5900,
          y: 2700,
        },
        {
          id: "npc14",
          x: 5800,
          y: 2700,
        },
        {
          id: "npc14",
          x: 5700,
          y: 2700,
        },
        {
          id: "npc14",
          x: 5700,
          y: 2600,
        },
        {
          id: "npc56",
          x: 10400,
          y: 2700,
        },
        {
          id: "npc13",
          x: 7300,
          y: 1700,
        },
        {
          id: "npc13",
          x: 7500,
          y: 1700,
        },
        {
          id: "npc13",
          x: 7700,
          y: 1700,
        },
        {
          id: "npc13",
          x: 7900,
          y: 1700,
        },
        {
          id: "npc13",
          x: 8100,
          y: 1700,
        },
        {
          id: "npc13",
          x: 8300,
          y: 1700,
        },
        {
          id: "npc13",
          x: 8300,
          y: 2200,
        },
        {
          id: "npc13",
          x: 8100,
          y: 2200,
        },
        {
          id: "npc13",
          x: 7900,
          y: 2200,
        },
        {
          id: "npc13",
          x: 7700,
          y: 2200,
        },
        {
          id: "npc13",
          x: 7500,
          y: 2200,
        },
        {
          id: "npc13",
          x: 7300,
          y: 2200,
        },
      ],
    }),
    new ModuleScene({
      name: "map4c",
      canonical: {
        name: "aoe5/map4c",
        priority: 0,
      },
      nameInfo: {
        x: 479,
        y: 710.334,
      },
      nameFn: (name) => `${this.sentenceCase(name)} Bottom Level`,
      page: 36,
      width: 1157,
      height: 1518,
      imageLeft: 13,
      imageRight: 1146,
      imageCols: 44 * 2,
      imageTop: 5,
      imageBottom: 1496,
      imageRows: 58 * 2,
      cropLeft: 0,
      cropRight: 1157,
      cropTop: 1012,
      cropBottom: 1518,
      globalLight: true,
      detailsFile: "/aoe/maps/aoe5-map4c.json",
      journals: [
        {
          x: 4100,
          y: 1700,
          id: "Mzg6OTk6NTU1",
        },
        {
          x: 8300,
          y: 2100,
          id: "Mzk6Mjk1OjExMQ",
        },
        {
          x: 9500,
          y: 2100,
          id: "NDA6OTk6NjYz",
        },
        {
          x: 6900,
          y: 3100,
          id: "NDE6Njg6NTc5",
        },
        {
          x: 3100,
          y: 2900,
          id: "NDI6MzI2OjE3MQ",
        },
        {
          x: 9700,
          y: 3500,
          id: "NDQ6MzI2OjU3OQ",
        },
        {
          x: 4500,
          y: 2900,
          id: "NDU6Mjk1OjY5OQ",
        },
        {
          x: 4100,
          y: 2900,
          id: "NDY6OTk6NTE5",
        },
        {
          x: 5500,
          y: 3900,
          id: "NDY6OTk6NDM1",
        },
      ],
      tokens: [
        {
          id: "npc44",
          x: 3e3,
          y: 3e3,
        },
        {
          id: "npc17",
          x: 4400,
          y: 2800,
        },
        {
          id: "npc17",
          x: 4200,
          y: 3e3,
        },
        {
          id: "npc17",
          x: 4700,
          y: 3e3,
        },
        {
          id: "npc17",
          x: 4600,
          y: 3200,
        },
        {
          id: "npc17",
          x: 4300,
          y: 3100,
        },
        {
          id: "npc16",
          x: 6700,
          y: 3e3,
        },
        {
          id: "npc45",
          x: 6900,
          y: 3e3,
        },
        {
          id: "npc46",
          x: 6900,
          y: 3200,
        },
        {
          id: "npc49",
          x: 9800,
          y: 3100,
        },
        {
          id: "npc49",
          x: 9300,
          y: 3400,
        },
      ],
    }),
    new ModuleScene({
      name: "map5",
      canonical: {
        name: "aoe5/map5",
        priority: 0,
      },
      nameInfo: {
        x: 42,
        y: 682.4638,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 51,
      width: 673,
      height: 870,
      imageLeft: 73,
      imageRight: 622,
      imageCols: 18,
      imageTop: 171,
      imageBottom: 750,
      imageRows: 19,
      globalLight: true,
      detailsFile: "/aoe/maps/aoe5-map5.json",
      journals: [
        {
          x: 1750,
          y: 2850,
          id: "NTA6MzI2OjM5OQ",
        },
        {
          x: 1450,
          y: 2550,
          id: "NTE6Njg6MjY3",
        },
        {
          x: 2050,
          y: 1750,
          id: "NTE6MzE3OjMzOQ",
        },
      ],
      tokens: [
        {
          id: "npc47",
          x: 1300,
          y: 2500,
        },
        {
          id: "npc43",
          x: 2e3,
          y: 1800,
        },
        {
          id: "npc40",
          x: 1800,
          y: 2300,
        },
        {
          id: "npc40",
          x: 2200,
          y: 2300,
        },
        {
          id: "npc40",
          x: 1600,
          y: 2e3,
        },
        {
          id: "npc40",
          x: 2500,
          y: 2e3,
        },
        {
          id: "npc21",
          x: 1800,
          y: 1800,
        },
      ],
    }),
    new ModuleScene({
      name: "map6",
      canonical: {
        name: "aoe5/map6",
        priority: 0,
      },
      nameInfo: {
        x: 67.5,
        y: 682.5,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 55,
      width: 676,
      height: 874,
      imageLeft: 98,
      imageRight: 557,
      imageCols: 15,
      imageTop: 140,
      imageBottom: 751,
      imageRows: 20,
      gridDistance: 10,
      globalLight: true,
      detailsFile: "/aoe/maps/aoe5-map6.json",
      journals: [
        {
          x: 1650,
          y: 2950,
          id: "NTQ6MzM1OjIxOQ",
        },
        {
          x: 1650,
          y: 2250,
          id: "NTQ6MzM1OjE3MQ",
        },
        {
          x: 1100,
          y: 2800,
          id: "NTU6Nzc6Mjc5",
        },
        {
          x: 1100,
          y: 2600,
          id: "NTU6Nzc6Mjc5",
        },
        {
          x: 1100,
          y: 2400,
          id: "NTU6Nzc6Mjc5",
        },
        {
          x: 1100,
          y: 2200,
          id: "NTU6Nzc6Mjc5",
        },
        {
          x: 1100,
          y: 2e3,
          id: "NTU6Nzc6Mjc5",
        },
        {
          x: 1100,
          y: 1800,
          id: "NTU6Nzc6Mjc5",
        },
        {
          x: 1100,
          y: 1600,
          id: "NTU6Nzc6Mjc5",
        },
        {
          x: 2200,
          y: 1600,
          id: "NTU6Nzc6Mjc5",
        },
        {
          x: 2200,
          y: 1800,
          id: "NTU6Nzc6Mjc5",
        },
        {
          x: 2200,
          y: 2e3,
          id: "NTU6Nzc6Mjc5",
        },
        {
          x: 2200,
          y: 2200,
          id: "NTU6Nzc6Mjc5",
        },
        {
          x: 2200,
          y: 2400,
          id: "NTU6Nzc6Mjc5",
        },
        {
          x: 2200,
          y: 2600,
          id: "NTU6Nzc6Mjc5",
        },
        {
          x: 2200,
          y: 2800,
          id: "NTU6Nzc6Mjc5",
        },
        {
          x: 1050,
          y: 3050,
          id: "NTU6Nzc6MjQz",
        },
        {
          x: 2250,
          y: 3050,
          id: "NTU6Nzc6MjQz",
        },
        {
          x: 1800,
          y: 1450,
          id: "NTU6Nzc6MjA3",
        },
        {
          x: 1e3,
          y: 1300,
          id: "NTU6Nzc6ODc",
        },
        {
          x: 2300,
          y: 1300,
          id: "NTY6MTA4OjI5MQ",
        },
        {
          x: 450,
          y: 1550,
          id: "NTQ6OTk6MTQ3",
        },
      ],
      tokens: [],
    }),
    new ModuleScene({
      name: "map7a",
      canonical: {
        name: "aoe5/map7a",
        priority: 0,
      },
      nameInfo: {
        x: 63,
        y: 710.3362,
      },
      nameFn: (name) => `${this.sentenceCase(name)} Upper Level`,
      page: 56,
      width: 1159,
      height: 846,
      imageLeft: 92,
      imageRight: 1088,
      imageCols: 40 * 2,
      imageTop: 139,
      imageBottom: 761,
      imageRows: 25 * 2,
      cropLeft: 0,
      cropRight: 603,
      cropTop: 0,
      cropBottom: 846,
      globalLight: true,
      detailsFile: "/aoe/maps/aoe5-map7a.json",
      journals: [
        {
          x: 3900,
          y: 5200,
          id: "NTc6Njg6OTk",
        },
        {
          x: 3300,
          y: 4800,
          id: "NTc6Mjk1OjQ3MQ",
        },
        {
          x: 2300,
          y: 4200,
          id: "NTg6NDAyOjQzNQ",
        },
        {
          x: 3700,
          y: 3200,
          id: "NTg6MzY4OjI1NQ",
        },
        {
          x: 5500,
          y: 3800,
          id: "NTk6Njg6NDIz",
        },
        {
          x: 4500,
          y: 3e3,
          id: "NjA6OTk6NjUx",
        },
        {
          x: 4700,
          y: 5400,
          id: "NjA6OTk6NjE1",
        },
        {
          x: 5300,
          y: 4600,
          id: "NjA6MzM4OjE5NQ",
        },
        {
          x: 5700,
          y: 5400,
          id: "NjE6Njg6NTY3",
        },
        {
          x: 5500,
          y: 6400,
          id: "NjE6Mjk1OjY5OQ",
        },
        {
          x: 5100,
          y: 6200,
          id: "NjE6Mjk1OjU0Mw",
        },
        {
          x: 5900,
          y: 6800,
          id: "NjI6OTk6Njk5",
        },
        {
          x: 3500,
          y: 6e3,
          id: "NjI6OTk6NjYz",
        },
        {
          x: 2300,
          y: 5800,
          id: "NjI6MzI2OjU0Mw",
        },
        {
          x: 2100,
          y: 7800,
          id: "NjM6Njg6NDU5",
        },
        {
          x: 4500,
          y: 7400,
          id: "NjM6Njg6NDEx",
        },
        {
          x: 3100,
          y: 6800,
          id: "NjQ6OTk6NTU1",
        },
      ],
      tokens: [
        {
          id: "npc41",
          x: 3400,
          y: 2900,
        },
        {
          id: "npc41",
          x: 3800,
          y: 3e3,
        },
        {
          id: "npc41",
          x: 3600,
          y: 3300,
        },
        {
          id: "npc52",
          x: 3900,
          y: 3e3,
        },
        {
          id: "npc34",
          x: 3400,
          y: 4700,
        },
        {
          id: "hazard1",
          x: 3700,
          y: 4500,
        },
        {
          id: "hazard1",
          x: 3700,
          y: 4300,
        },
        {
          id: "hazard1",
          x: 3700,
          y: 4700,
        },
        {
          id: "npc39",
          x: 3300,
          y: 4500,
        },
        {
          id: "npc26",
          x: 4700,
          y: 6700,
        },
        {
          id: "npc26",
          x: 3700,
          y: 6700,
        },
        {
          id: "npc26",
          x: 5300,
          y: 7300,
        },
        {
          id: "npc26",
          x: 4700,
          y: 7800,
        },
        {
          id: "npc26",
          x: 3700,
          y: 7800,
        },
        {
          id: "npc50",
          x: 5e3,
          y: 5300,
        },
        {
          id: "npc24",
          x: 5800,
          y: 5600,
        },
        {
          id: "npc24",
          x: 5700,
          y: 5300,
        },
        {
          id: "npc24",
          x: 5800,
          y: 5e3,
        },
        {
          id: "npc24",
          x: 5700,
          y: 6e3,
        },
        {
          id: "npc24",
          x: 5600,
          y: 4700,
        },
        {
          id: "npc23",
          x: 5200,
          y: 2800,
        },
      ],
    }),
    new ModuleScene({
      name: "map7b",
      canonical: {
        name: "aoe5/map7b",
        priority: 0,
      },
      nameInfo: {
        x: 63,
        y: 710.3362,
      },
      nameFn: (name) => `${this.sentenceCase(name)} Lower Level`,
      page: 56,
      width: 1159,
      height: 846,
      imageLeft: 92,
      imageRight: 1088,
      imageCols: 40 * 2,
      imageTop: 139,
      imageBottom: 761,
      imageRows: 25 * 2,
      cropLeft: 607,
      cropRight: 1159,
      cropTop: 0,
      cropBottom: 846,
      globalLight: true,
      detailsFile: "/aoe/maps/aoe5-map7b.json",
      journals: [
        {
          x: 4e3,
          y: 3200,
          id: "NjQ6OTk6MTU5",
        },
        {
          x: 1400,
          y: 7800,
          id: "NjQ6OTk6MTIz",
        },
        {
          x: 5200,
          y: 6800,
          id: "NjQ6OTk6ODc",
        },
        {
          x: 4850,
          y: 5900,
          id: "NjQ6MzI2OjY5OQ",
        },
        {
          x: 2150,
          y: 7200,
          id: "NjQ6MzI2OjY5OQ",
        },
        {
          x: 3600,
          y: 3850,
          id: "NjQ6MzI2OjY5OQ",
        },
        {
          x: 3400,
          y: 5600,
          id: "NjQ6MzI2OjQ1OQ",
        },
        {
          x: 2200,
          y: 3200,
          id: "NjU6Njg6NjYz",
        },
      ],
      tokens: [
        {
          id: "npc27",
          x: 3400,
          y: 5400,
        },
        {
          id: "npc22",
          x: 2200,
          y: 3200,
        },
        {
          id: "npc53",
          x: 2100,
          y: 3200,
        },
        {
          id: "hazard1",
          x: 1800,
          y: 2900,
        },
        {
          id: "hazard1",
          x: 2100,
          y: 2900,
        },
        {
          id: "hazard1",
          x: 2400,
          y: 2900,
        },
        {
          id: "hazard1",
          x: 2800,
          y: 3100,
        },
        {
          id: "hazard1",
          x: 1500,
          y: 3200,
        },
        {
          id: "npc25",
          x: 1600,
          y: 3e3,
        },
        {
          id: "npc25",
          x: 2e3,
          y: 2900,
        },
        {
          id: "npc25",
          x: 2300,
          y: 2900,
        },
        {
          id: "npc25",
          x: 2600,
          y: 2900,
        },
        {
          id: "npc25",
          x: 2800,
          y: 3200,
        },
        {
          id: "npc41",
          x: 1500,
          y: 3100,
        },
        {
          id: "npc41",
          x: 1700,
          y: 2900,
        },
        {
          id: "npc41",
          x: 1900,
          y: 2900,
        },
        {
          id: "npc41",
          x: 2200,
          y: 2900,
        },
        {
          id: "npc41",
          x: 2500,
          y: 2900,
        },
        {
          id: "npc41",
          x: 2700,
          y: 3e3,
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
      height: 766,
    }),
    new CaptionImage({
      name: "journal3",
      page: 20,
      width: 500,
      height: 500,
    }),
    new AdventureImage({
      name: "journal4",
      page: 30,
      width: 1168,
      height: 779,
    }),
    new AdventureImage({
      name: "journal5",
      page: 54,
      width: 1168,
      height: 779,
    }),
    new AdventureImage({
      name: "journal6",
      page: 66,
      width: 1261,
      height: 1636,
    }),
    new AdventureImage({
      name: "journal7",
      page: 72,
      width: 1260,
      height: 1636,
    }),
    new AdventureImage({
      name: "journal8",
      page: 73,
      width: 232,
      height: 232,
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
      width: 416,
      height: 399,
    }),
    new CaptionImage({
      name: "journal11",
      page: 79,
      width: 401,
      height: 401,
    }),
    new CaptionImage({
      name: "journal12",
      page: 80,
      width: 401,
      height: 401,
    }),
    new CaptionImage({
      name: "journal13",
      page: 81,
      width: 423,
      height: 473,
    }),
    new CaptionImage({
      name: "journal14",
      page: 81,
      width: 428,
      height: 428,
    }),
    new CaptionImage({
      name: "journal15",
      page: 82,
      width: 623,
      height: 623,
    }),
    new AdventureImage({
      name: "journal16",
      page: 99,
      width: 1261,
      height: 1637,
    }),
    new CaptionImage({
      name: "npc56",
      page: 69,
      width: 700,
      height: 1275,
    }),
    new CaptionImage({
      name: "npc57",
      page: 71,
      width: 633,
      height: 1081,
    }),
    new CaptionImage({
      name: "npc58",
      page: 75,
      width: 606,
      height: 1130,
    }),
    new CaptionImage({
      name: "npc59",
      page: 91,
      width: 921,
      height: 1297,
    }),
    new CaptionImage({
      name: "npc60",
      page: 93,
      width: 821,
      height: 1135,
    }),
    new CaptionImage({
      name: "npc61",
      page: 100,
      width: 778,
      height: 1387,
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.r3j5KEvULFP3fZS7",
      page: 8,
      width: 426,
      height: 426,
      tokenX: 37,
      tokenY: 93,
      tokenSize: 538,
      forIds: ["OTo2ODo2NjM", "Mjg6MzI2OjI2Nw"],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.E7NEf3kmsY3YjRrz",
      page: 9,
      width: 455,
      height: 455,
      tokenX: 45,
      tokenY: 89,
      tokenSize: 567,
      forIds: ["OTo2ODozMzk", "Mjg6MzI2OjIxOQ"],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.Sq0Kb92nGkqj19Xx",
      page: 11,
      width: 497,
      height: 535,
      tokenX: 96,
      tokenY: 136,
      tokenSize: 675,
      forIds: ["OTE6Njg6NDU5", "MTE6Mjk1OjI0Mw", "Mjg6MzI2OjE3MQ"],
    }),
    new ModuleNpc({
      id: "npc4",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 14,
        x: 276.1786,
        y: 467.5151,
      },
      page: 14,
      width: 457,
      height: 491,
      tokenX: 93,
      tokenY: 80,
      tokenSize: 575,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc5",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 15,
        x: 272.4455,
        y: 457.4651,
      },
      page: 15,
      width: 434,
      height: 492,
      tokenX: 34,
      tokenY: 76,
      tokenSize: 492,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc6",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.wsVW8MdOTeGgGM59",
      page: 19,
      width: 867,
      height: 1062,
      tokenX: -324,
      tokenY: -31,
      tokenSize: 306,
      forIds: ["MjA6MzI2Ojk5", "MTg6MzI2OjE3MQ"],
    }),
    new ModuleNpc({
      id: "npc7",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.07AGJt4ZRjwH85Xp",
      page: 21,
      width: 961,
      height: 950,
      tokenX: -275,
      tokenY: -95,
      tokenSize: 513,
      forIds: ["MjE6Njg6Mjkx"],
    }),
    new ModuleNpc({
      id: "npc8",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.4BXo2a305RHmspMX",
      page: 24,
      width: 727,
      height: 1056,
      tokenX: -347,
      tokenY: 7,
      tokenSize: 300,
      forIds: ["MjQ6MzI2OjM1MQ"],
    }),
    new ModuleNpc({
      id: "npc9",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.pfHOwcITyC4gdCVu",
      page: 28,
      width: 873,
      height: 1209,
      tokenX: -278,
      tokenY: -65,
      tokenSize: 285,
      forIds: ["MTY6MzI2OjQyMw", "Mjg6MzI2OjM2Mw"],
    }),
    new ModuleNpc({
      id: "npc10",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.4TB1eo3O22khMyDU",
      page: 29,
      width: 596,
      height: 1144,
      tokenX: -155,
      tokenY: -1,
      tokenSize: 304,
      forIds: ["Mjk6Njg6MjMx"],
    }),
    new ModuleNpc({
      id: "npc11",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 32,
        x: 284.3185,
        y: 467.5151,
      },
      page: 32,
      width: 455,
      height: 455,
      tokenX: 100,
      tokenY: 154,
      tokenSize: 623,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc12",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.a3pTQfLzsJThQvI9",
      page: 34,
      width: 409,
      height: 409,
      tokenX: 69,
      tokenY: 102,
      tokenSize: 521,
      forIds: ["MzQ6MzI2OjY5OQ"],
    }),
    new ModuleNpc({
      id: "npc13",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.BLRsSDFSMbZHcGDQ",
      page: 35,
      width: 855,
      height: 1305,
      tokenX: -220,
      tokenY: -20,
      tokenSize: 437,
      forIds: [
        "Mzc6Njg6Njk5",
        "NDM6Mjk1OjY2Mw",
        "Mzc6Mjk1OjU5MQ",
        "NDA6MzI2OjE3MQ",
      ],
    }),
    new ModuleNpc({
      id: "npc14",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.d3TzpCuRJF78xHZK",
      page: 35,
      width: 855,
      height: 1305,
      tokenX: -157,
      tokenY: 16,
      tokenSize: 549,
      forIds: ["Mzk6Mjk1OjQxMQ"],
    }),
    new ModuleNpc({
      id: "npc15",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.B4kIfCimsz8wfc0k",
      page: 38,
      width: 535,
      height: 1186,
      tokenX: -110,
      tokenY: 13,
      tokenSize: 346,
      forIds: ["Mzk6Njg6Njk5"],
    }),
    new ModuleNpc({
      id: "npc16",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.vPMmTtvl5UPOcCoa",
      page: 41,
      width: 938,
      height: 1289,
      tokenX: -408,
      tokenY: -89,
      tokenSize: 365,
      forIds: ["NDE6Mjk1OjYzOQ"],
    }),
    new ModuleNpc({
      id: "npc17",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.N1IpUIW2Ry7uBN3G",
      page: 45,
      width: 915,
      height: 1285,
      tokenX: -247,
      tokenY: -326,
      tokenSize: 249,
      forIds: ["NDU6Njg6MzAz", "NDM6Mjk1OjYwMw", "NDY6OTk6NjE1"],
    }),
    new ModuleNpc({
      id: "npc18",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 48,
        x: 288.156,
        y: 456.5408,
      },
      page: 48,
      width: 503,
      height: 526,
      tokenX: -25,
      tokenY: 55,
      tokenSize: 442,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc19",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 49,
        x: 277.5235,
        y: 468.5408,
      },
      page: 49,
      width: 462,
      height: 462,
      tokenX: 47,
      tokenY: 78,
      tokenSize: 546,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc20",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 50,
        x: 288.7317,
        y: 459.753,
      },
      page: 50,
      width: 508,
      height: 508,
      tokenX: 40,
      tokenY: 54,
      tokenSize: 564,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc21",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.M8ONVV7yl4uu0zcz",
      page: 53,
      width: 475,
      height: 475,
      tokenX: -67,
      tokenY: 22,
      tokenSize: 363,
      forIds: ["NTI6MzI2OjU5MQ"],
    }),
    new ModuleNpc({
      id: "npc22",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.BuPf7xtqfwCjNOQv",
      page: 58,
      width: 867,
      height: 1069,
      tokenX: -397,
      tokenY: 43,
      tokenSize: 341,
      forIds: [
        "OTM6Njg6NTkx",
        "NTc6Mjk1Ojk5",
        "NjI6MzI2OjE0Nw",
        "NjU6Njg6MTcx",
      ],
    }),
    new ModuleNpc({
      id: "npc23",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.bgKwwvO0uDGD7XsG",
      name: {
        page: 59,
        x: 397.3813,
        y: 72.5409,
      },
      page: 59,
      width: 1261,
      height: 736,
      tokenX: -322,
      tokenY: -75,
      tokenSize: 589,
      forIds: ["NTk6Mjk1OjM3NQ"],
    }),
    new ModuleNpc({
      id: "npc24",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.2uxm1SxZXaG0ynCp",
      page: 60,
      width: 950,
      height: 1196,
      tokenX: -285,
      tokenY: -17,
      tokenSize: 496,
      forIds: ["NjE6Njg6MzAz"],
    }),
    new ModuleNpc({
      id: "npc25",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.D36nL0YjCVHfjBNw",
      page: 62,
      width: 803,
      height: 1093,
      tokenX: -168,
      tokenY: 17,
      tokenSize: 281,
      forIds: ["NjI6MzI2OjI0Mw", "NjU6Njg6MjY3"],
    }),
    new ModuleNpc({
      id: "npc26",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.94yI4TrNag0jMaYy",
      page: 63,
      width: 951,
      height: 1102,
      tokenX: -382,
      tokenY: -259,
      tokenSize: 346,
      forIds: ["NjM6Mjk1OjY1MQ"],
    }),
    new ModuleNpc({
      id: "npc27",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.HifZEgdCuZearOG2",
      page: 83,
      width: 840,
      height: 970,
      tokenX: -109,
      tokenY: 42,
      tokenSize: 914,
      forIds: ["ODM6Njg6NjE1", "NjQ6MzI2OjI2Nw"],
    }),
    new ModuleNpc({
      id: "npc28",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.nfULZbf8OOUDdrZM",
      page: 84,
      width: 803,
      height: 1160,
      tokenX: -133,
      tokenY: -34,
      tokenSize: 572,
      forIds: ["ODQ6MjUxOjYzOQ", "MzU6Njg6Mjkx", "NDU6Njg6MjQz"],
    }),
    new ModuleNpc({
      id: "npc29",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.oFCgiGFipWeit9sl",
      page: 85,
      width: 843,
      height: 1073,
      tokenX: 115,
      tokenY: 254,
      tokenSize: 1045,
      forIds: [
        "ODU6Njg6NjAz",
        "NDY6MzI2OjQ3MQ",
        "NDY6MzI2OjUxOQ",
        "NDY6MzI2OjQyMw",
      ],
    }),
    new ModuleNpc({
      id: "npc30",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.pTkvg8OITTl6lsJY",
      page: 86,
      width: 784,
      height: 1058,
      tokenX: 103,
      tokenY: -84,
      tokenSize: 946,
      forIds: ["ODY6MjUxOjYxNQ"],
    }),
    new ModuleNpc({
      id: "npc31",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.WDTdWiC9Rdl6rqh8",
      page: 87,
      width: 988,
      height: 1007,
      tokenX: -137,
      tokenY: 38,
      tokenSize: 1007,
      forIds: ["ODc6Njg6NTQz"],
    }),
    new ModuleNpc({
      id: "npc32",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.1bPc2rjR4MghbMwD",
      page: 88,
      width: 688,
      height: 1100,
      tokenX: -291,
      tokenY: -222,
      tokenSize: 400,
      forIds: ["ODg6MjU1OjQxMQ"],
    }),
    new ModuleNpc({
      id: "npc33",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.JmHyHwaPMNKXzBts",
      page: 89,
      width: 698,
      height: 1097,
      tokenX: -224,
      tokenY: 1,
      tokenSize: 285,
      forIds: ["ODk6Njg6NTc5"],
    }),
    new ModuleNpc({
      id: "npc34",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.BuPf7xtqfwCjNOQv",
      page: 93,
      width: 821,
      height: 1135,
      tokenX: -259,
      tokenY: 27,
      tokenSize: 295,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc35",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.3IPLvfez8DzwwNqm",
      label: "T",
      forIds: ["MjA6MzI2OjQ5NQ"],
    }),
    new ModuleNpc({
      id: "npc36",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.y0bIU9FCWHOJxUzG",
      label: "BBG",
      forIds: ["MjM6Njg6MzUx", "MjM6Mjk1OjE5NQ", "Mjg6MzI2OjMxNQ"],
    }),
    new ModuleNpc({
      id: "npc37",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.s2TkernjfKVEhlJY",
      label: "BS",
      forIds: ["Mzg6OTk6NjAz"],
    }),
    new ModuleNpc({
      id: "npc38",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.ka7bXO7HIfBxk8Gy",
      label: "GF",
      forIds: ["MTc6Mjk1Ojk5"],
    }),
    new ModuleNpc({
      id: "npc39",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.82wJQmzPlKttl0sc",
      label: "CA",
      forIds: ["NTg6OTk6NjM5"],
    }),
    new ModuleNpc({
      id: "npc40",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.fV5VIoXMtixmI3Wc",
      label: "CA",
      forIds: ["NTI6OTk6NjM5"],
    }),
    new ModuleNpc({
      id: "npc41",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.w2J6GpuMYM24U4sb",
      label: "CI",
      forIds: ["NTk6Njg6NjE1", "NjU6Njg6MjE5"],
    }),
    new ModuleNpc({
      id: "npc42",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.llSpQyOTaylpqgnW",
      label: "W",
      forIds: ["MjU6Mjk1OjY5OQ", "Mjk6Njg6MTQ3"],
    }),
    new ModuleNpc({
      id: "npc43",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.7FJ3SQuHOUcGjm1x",
      label: "ET",
      forIds: ["NTM6Njg6MzYz"],
    }),
    new ModuleNpc({
      id: "npc44",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.gvCCATlH9mPGWbsp",
      label: "T",
      forIds: ["NDM6Njg6NDk1"],
    }),
    new ModuleNpc({
      id: "npc45",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.3GNq4Vy40vk9zwMQ",
      uniqueKey:
        "Compendium.pf2e.pathfinder-monster-core.Actor.EYiIQh526d0HLiDu",
      label: "G",
      forIds: ["NDI6OTk6MzE1"],
    }),
    new ModuleNpc({
      id: "npc46",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.rXePwiS4iecWNMGU",
      uniqueKey:
        "Compendium.pf2e.pathfinder-monster-core.Actor.EYiIQh526d0HLiDu",
      label: "Gl",
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc47",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.b7AnzEzoMGFpM33z",
      label: "IDV",
      forIds: ["NTE6MzIzOjY5OQ"],
    }),
    new ModuleNpc({
      id: "npc48",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.Wk2T0Wr8Sebo4br5",
      label: "MS",
      forIds: ["MjQ6MzI2OjUzMQ"],
    }),
    new ModuleNpc({
      id: "npc49",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.IGzoFGlVbkit8hnH",
      label: "M",
      forIds: ["NDQ6MzI2OjMxNQ"],
    }),
    new ModuleNpc({
      id: "npc50",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.p4GHJGguGRp5ucHV",
      label: "S",
      forIds: ["NjE6Mjk1OjE0Nw"],
    }),
    new ModuleNpc({
      id: "npc51",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.rsKf8ixrl3yBq1gb",
      label: "SC",
      forIds: ["MTE6Mjk1OjE5NQ", "Mjg6MzQ1OjEyMw"],
    }),
    new ModuleNpc({
      id: "npc52",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.tt5eaS28C4PrHmZD",
      uniqueKey:
        "Compendium.pf2e.pathfinder-monster-core.Actor.3vkQLclK0z4LhAh7",
      label: "TI",
      forIds: ["NTk6Njg6NTQz"],
    }),
    new ModuleNpc({
      id: "npc53",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.LACpbwnVT7m2ZqBi",
      label: "TW",
      forIds: ["NjU6Mjk1OjY5OQ", "MjI6OTk6OTk"],
    }),
    new ModuleNpc({
      id: "npc55",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.QBlBYsxySiBMxf22",
      label: "ZDG",
      forIds: ["MTE6Mjk1OjE0Nw"],
    }),
    new ModuleNpc({
      id: "npc56",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.8eBXEszbl4gOHGdU",
      label: "WS",
      forIds: ["OTM6Njg6NDk1"],
    }),
    new ModuleNpc({
      id: "hazard1",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.azyIfDNNW44jY8YX",
      label: "BL",
      forIds: ["NTc6Mjk1OjIxOQ", "NjU6Njg6MzE1"],
    }),
    new ModuleNpc({
      id: "hazard2",
      actorUuid: "Compendium.pf2e.hazards.Actor.J4YChuob7MIPT5Mq",
      label: "VE",
      forIds: ["NjM6Njg6NTQz"],
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
          id: "NzozNzE6NDQ3",
        },
        {
          id: "Nzo2ODo0OTU",
        },
        {
          id: "Nzo2ODoxNDc",
        },
        {
          id: "OTozNDI6NTMx",
        },
        {
          id: "MTA6MzI2OjY1MQ",
        },
        {
          id: "MTA6MzI2OjE3MQ",
        },
        {
          id: "MTE6Njg6NDQ3",
        },
        {
          id: "MTI6OTk6NDgz",
        },
        {
          id: "MTI6MzI2OjMzOQ",
        },
        {
          id: "MTM6Njg6NjM5",
        },
        {
          id: "MTM6Njg6NDEx",
        },
        {
          id: "MTM6Njg6MTM1",
        },
        {
          id: "MTM6Mjk1OjU0Mw",
        },
        {
          id: "MTQ6MzgxOjY1MQ",
        },
        {
          id: "MTQ6MzI2OjMzOQ",
        },
        {
          id: "MTU6Njg6Mjkx",
        },
        {
          id: "MTU6Mjk1OjE0Nw",
        },
        {
          id: "MTY6OTk6Mjkx",
        },
        {
          id: "MTc6Njg6MTQ3",
        },
        {
          id: "MTc6Mjk1OjM3NQ",
        },
        {
          id: "MTc6Mjk1OjMwMw",
        },
        {
          id: "MTg6OTk6MjY3",
        },
        {
          id: "MTk6Njg6NDIz",
        },
        {
          id: "MTk6Njg6OTk",
        },
        {
          id: "MTk6Mjk1OjYyNw",
        },
        {
          id: "MjA6OTk6NTc5",
        },
        {
          id: "MjA6Mzg4OjM4Nw",
        },
        {
          id: "MjE6Njg6Njk5",
        },
        {
          id: "MjE6Njg6NjAz",
        },
        {
          id: "MjI6MzcyOjU1NQ",
        },
        {
          id: "MjM6Njg6Njk5",
        },
        {
          id: "MjM6Njg6NTMx",
        },
        {
          id: "MjM6Mjk1OjUwNw",
        },
        {
          id: "MjM6Mjk1OjQyMw",
        },
        {
          id: "MjQ6OTk6Njk5",
        },
        {
          id: "MjU6Njg6NDQ3",
        },
        {
          id: "MjU6Mjk1OjU2Nw",
        },
        {
          id: "MjU6Mjk1OjQxMQ",
        },
        {
          id: "MjU6MzA0OjIxOQ",
        },
        {
          id: "MjU6MzA0OjE4Mw",
        },
        {
          id: "MjU6MzA0OjEzNQ",
        },
        {
          id: "MjU6MzA0Ojg3",
        },
        {
          id: "MjU6MzA0Ojc1",
        },
        {
          id: "MjY6MTA4OjMzOQ",
        },
        {
          id: "MjY6MTA4OjMyNw",
        },
        {
          id: "MjY6MTA4OjMxNQ",
        },
        {
          id: "MjY6MTA4OjMwMw",
        },
        {
          id: "MjY6MTA4OjI5MQ",
        },
        {
          id: "MjY6MTA4OjI3OQ",
        },
        {
          id: "MjY6MTA4OjI2Nw",
        },
        {
          id: "MjY6MTA4OjE4Mw",
        },
        {
          id: "MjY6MTA4Ojg3",
        },
        {
          id: "MjY6MzI2OjI2Nw",
        },
        {
          id: "Mjc6Njg6MjMx",
        },
        {
          id: "Mjk6Njg6OTk",
        },
        {
          id: "MTA6MTA4OjY5OQ",
        },
        {
          id: "MTE6MzA0OjY5OQ",
        },
        {
          id: "MjE6MzA0OjY5OQ",
        },
      ],
    },
    {
      name: "Chapter 2",
      pages: [
        {
          id: "MzA6MjU0OjM1Ng",
        },
        {
          id: "MzE6MzcxOjY5OQ",
        },
        {
          id: "MzE6MzcxOjUwNw",
        },
        {
          id: "MzM6MzA0OjY5OQ",
        },
        {
          id: "NDc6MzA0OjY5OQ",
        },
        {
          id: "MzE6Njg6NjI3",
        },
        {
          id: "MzE6Njg6NDM1",
        },
        {
          id: "MzE6Njg6MTU5",
        },
        {
          id: "MzI6OTk6NjAz",
        },
        {
          id: "MzI6OTk6NDU5",
        },
        {
          id: "MzI6OTk6MzUx",
        },
        {
          id: "MzM6Njg6MzM5",
        },
        {
          id: "MzM6Njg6OTk",
        },
        {
          id: "MzQ6OTk6Njk5",
        },
        {
          id: "MzQ6MzI2OjE5NQ",
        },
        {
          id: "MzQ6MzI2OjExMQ",
        },
        {
          id: "MzU6Njg6NTE5",
        },
        {
          id: "MzU6Njg6MjQz",
        },
        {
          id: "Mzc6Njg6MTM1",
        },
        {
          id: "Mzc6Mjk1OjUzMQ",
        },
        {
          id: "Mzg6OTk6NTU1",
        },
        {
          id: "Mzg6OTk6NDIz",
        },
        {
          id: "Mzg6OTk6MzI3",
        },
        {
          id: "Mzg6MzI2OjY5OQ",
        },
        {
          id: "Mzk6Njg6MzM5",
        },
        {
          id: "Mzk6Mjk1OjY2Mw",
        },
        {
          id: "Mzk6Mjk1OjExMQ",
        },
        {
          id: "NDA6OTk6NjYz",
        },
        {
          id: "NDA6OTk6NDEx",
        },
        {
          id: "NDA6OTk6Mjkx",
        },
        {
          id: "NDA6OTk6MTM1",
        },
        {
          id: "NDA6MzI2OjQxMQ",
        },
        {
          id: "NDE6Njg6NjI3",
        },
        {
          id: "NDE6Njg6NTc5",
        },
        {
          id: "NDI6MzI2OjYwMw",
        },
        {
          id: "NDI6MzI2OjQ5NQ",
        },
        {
          id: "NDI6MzI2OjM1MQ",
        },
        {
          id: "NDI6MzI2OjI5MQ",
        },
        {
          id: "NDI6MzI2OjE3MQ",
        },
        {
          id: "NDM6Njg6NDM1",
        },
        {
          id: "NDM6Njg6MzYz",
        },
        {
          id: "NDM6Njg6MjA3",
        },
        {
          id: "NDM6Mjk1OjE4Mw",
        },
        {
          id: "NDQ6OTk6Njk5",
        },
        {
          id: "NDQ6OTk6NTc5",
        },
        {
          id: "NDQ6MzI2OjU3OQ",
        },
        {
          id: "NDQ6MzI2OjI2Nw",
        },
        {
          id: "NDQ6MzI2OjE0Nw",
        },
        {
          id: "NDU6Njg6NjYz",
        },
        {
          id: "NDU6Njg6MTIz",
        },
        {
          id: "NDU6Mjk1OjY5OQ",
        },
        {
          id: "NDY6OTk6NTE5",
        },
        {
          id: "NDY6OTk6NDM1",
        },
        {
          id: "NDY6OTk6Mzg3",
        },
        {
          id: "NDY6MzI2OjMzOQ",
        },
        {
          id: "NDc6Njg6MTIz",
        },
        {
          id: "NDg6OTk6MTgz",
        },
        {
          id: "NDk6Njg6MzUx",
        },
        {
          id: "NTA6Mzc4OjU3OQ",
        },
        {
          id: "NTA6MzI2OjM5OQ",
        },
        {
          id: "NTE6Njg6MjY3",
        },
        {
          id: "NTE6MzE3OjMzOQ",
        },
        {
          id: "NTM6Mjk1OjMzOQ",
        },
      ],
    },
    {
      name: "Chapter 3",
      pages: [
        {
          id: "NTQ6MjU0OjM1Ng",
        },
        {
          id: "NTU6MzcxOjY5OQ",
        },
        {
          id: "NTU6MzcxOjU5MQ",
        },
        {
          id: "NTQ6OTk6MTQ3",
        },
        {
          id: "NTQ6MzM1OjIxOQ",
        },
        {
          id: "NTQ6MzM1OjE3MQ",
        },
        {
          id: "NTU6Nzc6Mjc5",
        },
        {
          id: "NTU6Nzc6MjQz",
        },
        {
          id: "NTU6Nzc6MjA3",
        },
        {
          id: "NTU6Nzc6ODc",
        },
        {
          id: "NTY6MTA4OjI5MQ",
        },
        {
          id: "NTY6OTk6MjA3",
        },
        {
          id: "NTc6Njg6NDk1",
        },
        {
          id: "NTc6Njg6OTk",
        },
        {
          id: "NTc6Mjk1OjQ3MQ",
        },
        {
          id: "NTg6NDAyOjQzNQ",
        },
        {
          id: "NTg6MzY4OjI1NQ",
        },
        {
          id: "NTk6Njg6NDIz",
        },
        {
          id: "NjA6OTk6NjUx",
        },
        {
          id: "NjA6OTk6NjE1",
        },
        {
          id: "NjA6MzM4OjE5NQ",
        },
        {
          id: "NjE6Njg6NTY3",
        },
        {
          id: "NjE6Mjk1OjY5OQ",
        },
        {
          id: "NjE6Mjk1OjU0Mw",
        },
        {
          id: "NjI6OTk6Njk5",
        },
        {
          id: "NjI6OTk6NjYz",
        },
        {
          id: "NjI6MzI2OjU0Mw",
        },
        {
          id: "NjM6Njg6NDU5",
        },
        {
          id: "NjM6Njg6NDEx",
        },
        {
          id: "NjQ6OTk6NTU1",
        },
        {
          id: "NjQ6OTk6MTU5",
        },
        {
          id: "NjQ6OTk6MTIz",
        },
        {
          id: "NjQ6OTk6ODc",
        },
        {
          id: "NjQ6MzI2OjY5OQ",
        },
        {
          id: "NjQ6MzI2OjQ1OQ",
        },
        {
          id: "NjU6Njg6NjYz",
        },
        {
          id: "NjU6Mjk1OjI2Nw",
        },
      ],
    },
    {
      name: "Back Matter",
      pages: [
        {
          id: "NzM6MTk4OjYyMQ",
        },
        {
          id: "NzQ6OTk6MTIz",
        },
        {
          id: "NzQ6MzI2OjM5OQ",
        },
        {
          id: "NzU6Njg6Njk5",
        },
        {
          id: "NzU6Njg6MjY3",
        },
        {
          id: "NzY6OTk6NTY3",
        },
        {
          id: "NzY6OTk6MTQ3",
        },
        {
          id: "NzY6MzI2OjUwNw",
        },
        {
          id: "NzY6MzI2OjIwNw",
        },
        {
          id: "Nzc6MTM2OjMzOQ",
        },
        {
          id: "Nzc6Njg6MTU5",
        },
        {
          id: "Nzc6Mjk1OjY2Mw",
        },
        {
          id: "Nzk6MTAyOjYyMQ",
        },
        {
          id: "ODA6OTk6Njk5",
        },
        {
          id: "ODE6Njg6Njk5",
        },
        {
          id: "ODI6OTk6Njk5",
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
          id: "OTA6MjMxOjYyMg",
        },
        {
          id: "OTI6MjMwOjY1NA",
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
          id: "npc56",
        },
        {
          id: "npc57",
        },
        {
          id: "npc58",
        },
        {
          id: "npc59",
        },
        {
          id: "npc60",
        },
        {
          id: "npc61",
        },
      ],
    },
  ];
  combines = [
    {
      source: "OTI6MzI2OjE0Nw",
      dest: "OTI6MjMwOjY1NA",
    },
    {
      source: "OTE6Njg6Njk5",
      dest: "OTA6MjMxOjYyMg",
    },
    {
      source: "ODM6MzcxOjY2Mw",
      dest: "ODM6Njg6Njg3",
    },
    {
      source: "ODQ6MTQxOjY2Mw",
      dest: "ODQ6MjUxOjY4Nw",
    },
    {
      source: "ODU6MzcxOjY2Mw",
      dest: "ODU6Njg6Njg3",
    },
    {
      source: "ODY6MTM5OjY2Mw",
      dest: "ODY6MjUxOjY4Nw",
    },
    {
      source: "ODc6MzcxOjY2Mw",
      dest: "ODc6Njg6Njg3",
    },
    {
      source: "ODg6MTU0OjY2Mw",
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
        t.text.trim() === "BELLY OF THE BLACK WHALE" &&
        t.fontId === "ColiseumBold:38",
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    this.markStartOfLine(text, 34, 336.25, 663);
    this.markStartOfLine(text, 34, 349.25, 651);
    this.markStartOfLine(text, 34, 382.25, 639);
    this.markStartOfLine(text, 34, 390.25, 603);
    this.markStartOfLine(text, 34, 409.25, 579);
    this.markStartOfLine(text, 34, 381.2499, 483);
    this.markStartOfLine(text, 51, 322.75, 699);
    this.markStartOfLine(text, 51, 322.75, 675);
    this.markStartOfLine(text, 51, 322.75, 663);
    this.markStartOfLine(text, 51, 324.75, 615);
    this.markStartOfLine(text, 51, 324.75, 567);
    this.markStartOfLine(text, 51, 324.75, 555);
    this.markStartOfLine(text, 51, 321.75, 531);
    this.markStartOfLine(text, 51, 321.75, 507);
    this.markStartOfLine(text, 51, 318.75, 423);
    this.markStartOfLine(text, 51, 320.75, 375);
    this.markStartOfLine(text, 84, 348.4999, 387);
    this.markStartOfLine(text, 84, 345.4999, 375);
    this.markStartOfLine(text, 84, 340.4999, 351);
    this.markStartOfLine(text, 84, 321.4999, 291);
    this.markStartOfLine(text, 84, 333.4999, 219);
    this.markStartOfLine(text, 84, 336.4999, 207);
    this.markStartOfLine(text, 84, 336.4999, 183);
    this.markStartOfLine(text, 84, 341.5, 111);
    this.markStartOfLine(text, 84, 339.5, 99);
    this.markStartOfLine(text, 86, 258.5, 531);
    this.markStartOfLine(text, 86, 265.5, 519);
    this.markStartOfLine(text, 86, 268.5, 507);
    this.markStartOfLine(text, 86, 266.5, 483);
    this.markStartOfLine(text, 86, 257.5, 459);
    this.markStartOfLine(text, 86, 258.5, 435);
    this.markStartOfLine(text, 86, 349.5, 351);
    this.markStartOfLine(text, 86, 352.5, 327);
    this.markStartOfLine(text, 88, 254.5, 411);
    this.markStartOfLine(text, 88, 280.5, 387);
    this.markStartOfLine(text, 88, 282.5, 375);
    this.markStartOfLine(text, 88, 283.5, 363);
    this.markStartOfLine(text, 88, 285.5, 339);
    this.markStartOfLine(text, 88, 284.5, 327);
    this.markStartOfLine(text, 88, 289.5, 315);
    this.markStartOfLine(text, 88, 290.5, 291);
    this.markStartOfLine(text, 88, 310.5, 231);
    this.markStartOfLine(text, 88, 313.5, 219);
    this.markStartOfLine(text, 88, 323.5, 195);
    this.markStartOfLine(text, 88, 325.5, 171);
    this.markStartOfLine(text, 93, 305.75, 579);
    this.markStartOfLine(text, 93, 358.75, 507);
    this.markStartOfLine(text, 93, 348.75, 303);
    this.markStartOfLine(text, 93, 345.75, 243);
    this.markStartOfLine(text, 93, 347.75, 159);
    this.markStartOfLine(text, 93, 343.75, 111);
    this.changeFontId(text, 25, 303.75, 219, "GoodOT-News:12");
    this.changeFontId(text, 25, 303.75, 183, "GoodOT-News:12");
    this.changeFontId(text, 25, 303.75, 135, "GoodOT-News:12");
    this.changeFontId(text, 25, 303.75, 87, "GoodOT-News:12");
    this.changeFontId(text, 25, 303.75, 75, "GoodOT-News:12");
    this.changeFontId(text, 26, 108, 339, "GoodOT-News:12");
    this.changeFontId(text, 26, 108, 327, "GoodOT-News:12");
    this.changeFontId(text, 26, 108, 315, "GoodOT-News:12");
    this.changeFontId(text, 26, 108, 303, "GoodOT-News:12");
    this.changeFontId(text, 26, 108, 291, "GoodOT-News:12");
    this.changeFontId(text, 26, 108, 279, "GoodOT-News:12");
    this.changeFontId(text, 26, 108, 267, "GoodOT-News:12");
    this.changeFontId(text, 26, 108, 183, "GoodOT-News:12");
    this.changeFontId(text, 26, 108, 87, "GoodOT-News:12");
    this.changeFontId(text, 54, 335.25, 219, "GoodOT-News:12");
    this.changeFontId(text, 54, 335.25, 171, "GoodOT-News:12");
    this.changeFontId(text, 55, 76.5, 279, "GoodOT-News:12");
    this.changeFontId(text, 55, 76.5, 243, "GoodOT-News:12");
    this.changeFontId(text, 55, 76.5, 207, "GoodOT-News:12");
    this.changeFontId(text, 55, 76.5, 87, "GoodOT-News:12");
    this.changeFontId(text, 56, 108, 291, "GoodOT-News:12");
    this.changeFontId(text, 52, 521.3702, 339, "GoodOT:9");
    this.changeFontId(text, 52, 521.3702, 327, "GoodOT:9");
    this.markStartOfLine(text, 48, 335.25, 87);
    this.markStartOfLine(text, 48, 335.25, 75);
    this.markStartOfLine(text, 49, 76.5, 699);
    this.markStartOfLine(text, 49, 76.5, 687);
    this.markStartOfLine(text, 49, 76.5, 663);
    this.markStartOfLine(text, 49, 76.5, 651);
    this.markStartOfLine(text, 49, 76.5, 639);
    this.markStartOfLine(text, 49, 76.5, 627);
    this.markStartOfLine(text, 49, 76.5, 603);
    this.markStartOfLine(text, 49, 76.5, 591);
    this.markStartOfLine(text, 49, 76.5, 579);
    this.markStartOfLine(text, 49, 76.5, 567);
    this.markStartOfLine(text, 49, 76.5, 555);
    this.markStartOfLine(text, 49, 76.5, 543);
    this.markStartOfLine(text, 49, 76.5, 531);
    this.markStartOfLine(text, 49, 76.5, 519);
    this.markStartOfLine(text, 49, 76.5, 507);
    this.markStartOfLine(text, 49, 76.5, 495);
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
