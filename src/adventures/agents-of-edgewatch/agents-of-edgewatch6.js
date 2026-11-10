import { AgentsOfEdgewatchBase } from "./base.js";
import { AdventureImage, CaptionImage } from "../../core/images.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class AgentsOfEdgewatch6 extends AgentsOfEdgewatchBase {
  prefix = "agents-of-edgewatch6";
  fullName = "Agents of Edgewatch - Ruins of the Radiant Siege";
  pages = [
    this.ChapterHeadingPageLayout(6, "chapter1"),
    this.RightSingleColumnWithSidebar(7, "chapter1"),
    this.LeftTwoColumn(8, "chapter1"),
    this.RightTwoColumnWithMap(9, 560, "chapter1"),
    this.LeftTwoColumn(10, "chapter1"),
    this.RightTwoColumn(11, "chapter1"),
    this.LeftTwoColumnWithMap(12, 360, "chapter1"),
    this.RightTwoColumnWithRightCutout(13, 475, "chapter1"),
    this.LeftTwoColumn(14, "chapter1"),
    this.RightTwoColumn(15, "chapter1"),
    this.LeftTwoColumn(16, "chapter1"),
    this.RightTwoColumn(17, "chapter1"),
    this.LeftTwoColumn(18, "chapter1"),
    this.RightTwoColumn(19, "chapter1"),
    this.LeftTwoColumn(20, "chapter1"),
    this.RightTwoColumn(21, "chapter1"),
    this.ChapterHeadingPageLayout(22, "chapter2"),
    this.RightSingleColumnWithSidebar(23, "chapter2"),
    this.LeftTwoColumn(24, "chapter2"),
    this.RightTwoColumn(25, "chapter2"),
    this.LeftTwoColumn(26, "chapter2"),
    this.RightTwoColumnWithMap(27, 240, "chapter2"),
    this.RightTwoColumn(29, "chapter2"),
    this.LeftTwoColumn(30, "chapter2"),
    this.RightTwoColumnWithMap(31, 570, "chapter2"),
    this.LeftTwoColumn(32, "chapter2"),
    this.RightTwoColumn(33, "chapter2"),
    this.LeftTwoColumn(34, "chapter2"),
    this.RightTwoColumn(35, "chapter2"),
    this.LeftTwoColumnWithLeftCutout(36, 220, "chapter2"),
    this.RightTwoColumnWithRightCutout(37, 440, "chapter2"),
    this.LeftTwoColumn(38, "chapter2"),
    this.RightTwoColumn(39, "chapter2"),
    this.LeftTwoColumn(40, "chapter2"),
    this.RightTwoColumn(41, "chapter2"),
    this.LeftTwoColumn(42, "chapter2"),
    this.RightTwoColumn(43, "chapter2"),
    this.LeftTwoColumn(44, "chapter2"),
    this.RightTwoColumn(45, "chapter2"),
    this.ChapterHeadingPageLayout(46, "chapter3"),
    this.RightSingleColumnWithSidebar(47, "chapter3"),
    this.LeftTwoColumn(48, "chapter3"),
    this.RightTwoColumnWithRightCutout(49, 435, "chapter3"),
    this.LeftTwoColumnWithMap(50, 340, "chapter3"),
    this.RightTwoColumn(51, "chapter3"),
    this.LeftTwoColumn(52, "chapter3"),
    this.RightTwoColumn(53, "chapter3"),
    this.LeftTwoColumn(54, "chapter3"),
    this.RightTwoColumn(55, "chapter3"),
    this.LeftTwoColumn(56, "chapter3"),
    this.RightTwoColumn(57, "chapter3"),
    this.LeftTwoColumn(58, "chapter3"),
    this.RightTwoColumn(59, "chapter3"),
    this.LeftTwoColumn(60, "chapter3"),
    this.RightTwoColumn(61, "chapter3"),
    this.RightChapterHeadingPageLayout(63, "appendix1"),
    this.LeftTwoColumn(64, "appendix1"),
    this.RightTwoColumnWithRightCutout(65, 420, "appendix1"),
    this.LeftTwoColumn(66, "appendix1"),
    this.RightTwoColumn(67, "appendix1"),
    this.RightChapterHeadingPageLayout(69, "appendix1"),
    this.LeftTwoColumnWithMap(70, 360, "appendix1"),
    this.RightTwoColumn(71, "appendix1"),
    this.LeftTwoColumnWithMap(72, 360, "appendix1"),
    this.RightTwoColumn(73, "appendix1"),
    this.RightChapterHeadingPageLayout(75),
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
        name: "aoe6/map1",
        priority: 0,
      },
      nameInfo: {
        x: 266,
        y: 394.7556,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 12,
      width: 1159,
      height: 764,
      imageLeft: 54,
      imageRight: 1085,
      imageCols: 45,
      imageTop: 72,
      imageBottom: 713,
      imageRows: 28,
      globalLight: true,
      detailsFile: "/aoe/maps/aoe6-map1.json",
      journals: [
        {
          x: 4650,
          y: 1950,
          id: "MTA6MzI2OjQyMw",
        },
        {
          x: 4050,
          y: 1750,
          id: "MTA6MzI2OjIwNw",
        },
        {
          x: 5750,
          y: 1550,
          id: "MTI6MzI2OjMxNQ",
        },
        {
          x: 2650,
          y: 2250,
          id: "MTM6Njg6NDQ3",
          text: "A4b",
        },
        {
          x: 2650,
          y: 2650,
          id: "MTM6Njg6NDQ3",
          text: "A4b",
        },
        {
          x: 2650,
          y: 3050,
          id: "MTM6Njg6NDQ3",
          text: "A4b",
        },
        {
          x: 2850,
          y: 2250,
          id: "MTM6Njg6NDQ3",
          text: "A4a",
        },
        {
          x: 3050,
          y: 2050,
          id: "MTM6MzgwOjMzOQ",
        },
        {
          x: 2700,
          y: 1600,
          id: "MTQ6OTk6OTk",
        },
        {
          x: 1700,
          y: 2400,
          id: "MTU6Njg6MTU5",
        },
        {
          x: 2650,
          y: 3800,
          id: "MTY6MzI2OjI3OQ",
        },
        {
          x: 4050,
          y: 3150,
          id: "MTc6Njg6Mjkx",
        },
      ],
      tokens: [
        {
          id: "npc27",
          x: 3500,
          y: 1700,
        },
        {
          id: "npc27",
          x: 3800,
          y: 1900,
        },
        {
          id: "npc27",
          x: 3600,
          y: 2100,
        },
        {
          id: "npc2",
          x: 3700,
          y: 1700,
        },
        {
          id: "npc2",
          x: 3400,
          y: 2e3,
        },
        {
          id: "npc4",
          x: 2600,
          y: 1400,
        },
        {
          id: "npc5",
          x: 2800,
          y: 1500,
        },
        {
          id: "npc5",
          x: 2500,
          y: 1600,
        },
        {
          id: "npc5",
          x: 2400,
          y: 1400,
        },
        {
          id: "npc2",
          x: 1400,
          y: 2200,
        },
        {
          id: "npc2",
          x: 1800,
          y: 2200,
        },
        {
          id: "npc31",
          x: 2500,
          y: 3700,
        },
        {
          id: "npc27",
          x: 2800,
          y: 3700,
        },
        {
          id: "npc27",
          x: 2600,
          y: 3900,
        },
        {
          id: "npc6",
          x: 4300,
          y: 3e3,
        },
        {
          id: "npc2",
          x: 4300,
          y: 2800,
        },
        {
          id: "npc2",
          x: 4300,
          y: 3300,
        },
      ],
    }),
    new ModuleScene({
      name: "map2",
      canonical: {
        name: "aoe6/map2",
        priority: 0,
      },
      nameInfo: {
        x: 68,
        y: 705.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 28,
      width: 1157,
      height: 1518,
      imageLeft: 95,
      imageRight: 1142,
      imageCols: 39,
      imageTop: 156,
      imageBottom: 1390,
      imageRows: 46,
      globalLight: true,
      detailsFile: "/aoe/maps/aoe6-map2.json",
      journals: [
        {
          x: 2950,
          y: 6350,
          id: "Mjk6Njg6MTgz",
        },
        {
          x: 2050,
          y: 5550,
          id: "Mjk6Mjk1OjQ4Mw",
        },
        {
          x: 2950,
          y: 5550,
          id: "MzE6Mjk1OjIxOQ",
        },
        {
          x: 2950,
          y: 5050,
          id: "MzI6OTk6MzM5",
        },
        {
          x: 3650,
          y: 5050,
          id: "MzI6OTk6MTIz",
        },
        {
          x: 5100,
          y: 5800,
          id: "MzI6MzI2OjIwNw",
        },
        {
          x: 5050,
          y: 4250,
          id: "MzM6Njg6MTQ3",
        },
        {
          x: 3750,
          y: 4350,
          id: "MzQ6MzI2OjQzNQ",
        },
        {
          x: 2050,
          y: 4250,
          id: "MzY6OTk6MTEx",
        },
        {
          x: 1550,
          y: 4450,
          id: "Mzc6Njg6NTY3",
        },
        {
          x: 2050,
          y: 3250,
          id: "Mzc6Njg6MTEx",
        },
        {
          x: 1550,
          y: 3950,
          id: "Mzg6MzM1OjU2Nw",
        },
        {
          x: 2550,
          y: 3850,
          id: "Mzk6Njg6MTU5",
        },
        {
          x: 2950,
          y: 3550,
          id: "Mzk6Mjk1OjUwNw",
        },
        {
          x: 3050,
          y: 3750,
          id: "NDA6OTk6NTkx",
        },
        {
          x: 2050,
          y: 2350,
          id: "NDA6OTk6MzUx",
        },
        {
          x: 2850,
          y: 2550,
          id: "NDI6OTk6NjI3",
        },
        {
          x: 3750,
          y: 3150,
          id: "NDI6MzI2OjYwMw",
        },
        {
          x: 3750,
          y: 2350,
          id: "NDM6Njg6MTIz",
        },
        {
          x: 4250,
          y: 2150,
          id: "NDQ6OTk6MTgz",
        },
        {
          x: 4650,
          y: 2650,
          id: "NDQ6MzI2OjUzMQ",
        },
      ],
      tokens: [
        {
          id: "npc37",
          x: 4400,
          y: 5800,
          elite: true,
        },
        {
          id: "npc37",
          x: 4700,
          y: 5900,
          elite: true,
        },
        {
          id: "npc37",
          x: 4400,
          y: 6300,
          elite: true,
        },
        {
          id: "hazard5",
          x: 4200,
          y: 6200,
        },
        {
          id: "hazard3",
          x: 3600,
          y: 5200,
        },
        {
          id: "npc24",
          x: 3200,
          y: 5e3,
        },
        {
          id: "npc24",
          x: 3700,
          y: 4900,
        },
        {
          id: "npc24",
          x: 3700,
          y: 5300,
        },
        {
          id: "npc10",
          x: 1600,
          y: 5200,
        },
        {
          id: "npc10",
          x: 2200,
          y: 5200,
        },
        {
          id: "npc10",
          x: 2100,
          y: 5600,
        },
        {
          id: "hazard5",
          x: 1400,
          y: 5500,
        },
        {
          id: "hazard7",
          x: 2200,
          y: 4400,
        },
        {
          id: "npc31",
          x: 1300,
          y: 4200,
        },
        {
          id: "npc31",
          x: 1300,
          y: 4500,
        },
        {
          id: "npc34",
          x: 1300,
          y: 3800,
          elite: true,
        },
        {
          id: "npc34",
          x: 1300,
          y: 4e3,
          elite: true,
        },
        {
          id: "npc12",
          x: 1700,
          y: 3700,
        },
        {
          id: "npc12",
          x: 1700,
          y: 3900,
        },
        {
          id: "npc12",
          x: 1600,
          y: 4100,
        },
        {
          id: "npc12",
          x: 1400,
          y: 4100,
        },
        {
          id: "npc35",
          x: 1500,
          y: 2500,
        },
        {
          id: "npc35",
          x: 2400,
          y: 1900,
        },
        {
          id: "npc35",
          x: 1500,
          y: 1900,
        },
        {
          id: "npc13",
          x: 1900,
          y: 2200,
        },
        {
          id: "npc15",
          x: 4700,
          y: 2500,
        },
        {
          id: "npc11",
          x: 4700,
          y: 2700,
        },
        {
          id: "npc11",
          x: 4600,
          y: 2400,
        },
        {
          id: "npc11",
          x: 3900,
          y: 4100,
        },
        {
          id: "npc11",
          x: 3600,
          y: 4200,
        },
        {
          id: "npc11",
          x: 3800,
          y: 4500,
        },
        {
          id: "npc40",
          x: 4700,
          y: 3900,
        },
        {
          id: "hazard6",
          x: 4800,
          y: 4300,
        },
      ],
    }),
    new ModuleScene({
      name: "map3",
      canonical: {
        name: "aoe6/map3",
        priority: 0,
      },
      nameInfo: {
        x: 386.3749,
        y: 531.5,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 50,
      width: 1156,
      height: 771,
      imageLeft: 70,
      imageRight: 1058,
      imageCols: 48 * 2,
      imageTop: 48,
      imageBottom: 728,
      imageRows: 33 * 2,
      gridDistance: 10,
      globalLight: true,
      detailsFile: "/aoe/maps/aoe6-map3.json",
      journals: [
        {
          x: 4300,
          y: 4100,
          id: "NDk6Njg6MzM5",
        },
        {
          x: 4200,
          y: 3400,
          id: "NDk6Mjk1OjE1OQ",
        },
        {
          x: 3600,
          y: 3800,
          id: "NTA6OTk6MTEx",
        },
        {
          x: 3800,
          y: 4800,
          id: "NTE6Njg6MzUx",
        },
        {
          x: 4800,
          y: 4600,
          id: "NTI6OTk6NDU5",
        },
        {
          x: 4e3,
          y: 2800,
          id: "NTI6OTk6MTEx",
        },
        {
          x: 4200,
          y: 2400,
          id: "NTI6MzI2OjY5OQ",
        },
        {
          x: 4600,
          y: 2800,
          id: "NTM6Njg6MzM5",
        },
        {
          x: 5400,
          y: 2600,
          id: "NTM6Njg6MTcx",
        },
        {
          x: 4400,
          y: 5600,
          id: "NTQ6MzI2OjQ4Mw",
        },
        {
          x: 4400,
          y: 6900,
          id: "NTQ6MzI2OjEyMw",
        },
        {
          x: 4400,
          y: 7800,
          id: "NTU6Njg6MTEx",
        },
        {
          x: 5200,
          y: 8400,
          id: "NTU6Mjk1OjY2Mw",
        },
        {
          x: 12600,
          y: 4600,
          id: "NTU6Mjk1OjU0Mw",
        },
        {
          x: 7200,
          y: 7600,
          id: "NTc6Njg6NDIz",
        },
        {
          x: 8e3,
          y: 6600,
          id: "NTc6Mjk1OjY5OQ",
        },
        {
          x: 7200,
          y: 8200,
          id: "NTc6Mjk1OjY5OQ",
        },
        {
          x: 8800,
          y: 7200,
          id: "NTc6Mjk1OjUxOQ",
        },
        {
          x: 7800,
          y: 8400,
          id: "NTg6MzI2OjY1MQ",
        },
        {
          x: 7800,
          y: 7200,
          id: "NjA6OTk6Njk5",
        },
        {
          x: 10200,
          y: 7600,
          id: "NjA6OTk6NjI3",
        },
        {
          x: 12400,
          y: 7800,
          id: "NjA6OTk6NDM1",
        },
        {
          x: 7200,
          y: 4200,
          id: "NjA6MzI2OjYzOQ",
        },
        {
          x: 5e3,
          y: 3600,
          id: "NjA6MzI2OjY5OQ",
        },
      ],
      tokens: [
        {
          id: "npc32",
          x: 3500,
          y: 4300,
        },
        {
          id: "npc22",
          x: 7100,
          y: 3900,
        },
        {
          id: "npc33",
          x: 7700,
          y: 4100,
        },
        {
          id: "npc33",
          x: 6900,
          y: 4500,
        },
        {
          id: "npc33",
          x: 6500,
          y: 3700,
        },
        {
          id: "npc33",
          x: 7300,
          y: 3300,
        },
        {
          id: "hazard1",
          x: 3700,
          y: 6700,
        },
        {
          id: "npc19",
          x: 12900,
          y: 4500,
        },
        {
          id: "hazard4",
          x: 13300,
          y: 4900,
        },
        {
          id: "npc18",
          x: 5100,
          y: 2300,
        },
        {
          id: "npc36",
          x: 5500,
          y: 2300,
        },
        {
          id: "npc36",
          x: 5100,
          y: 2500,
        },
        {
          id: "npc36",
          x: 5500,
          y: 2500,
        },
        {
          id: "npc42",
          x: 3900,
          y: 2300,
        },
        {
          id: "npc39",
          x: 4500,
          y: 2300,
        },
        {
          id: "npc39",
          x: 4300,
          y: 2500,
        },
        {
          id: "npc20",
          x: 8700,
          y: 7100,
        },
        {
          id: "npc21",
          x: 7700,
          y: 8100,
        },
        {
          id: "npc25",
          x: 7500,
          y: 8300,
        },
        {
          id: "npc25",
          x: 7700,
          y: 8300,
        },
        {
          id: "npc25",
          x: 7900,
          y: 8100,
        },
        {
          id: "npc25",
          x: 7900,
          y: 8300,
        },
      ],
    }),
    new ModuleScene({
      name: "map4",
      canonical: {
        name: "aoe6/map4",
        priority: 0,
      },
      nameInfo: {
        x: 99,
        y: 395,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 70,
      width: 1159,
      height: 773,
      imageLeft: 17,
      imageRight: 1143,
      imageCols: 62,
      imageTop: 16,
      imageBottom: 760,
      imageRows: 41,
      globalLight: true,
    }),
    new ModuleScene({
      name: "map5",
      canonical: {
        name: "aoe6/map5",
        priority: 0,
      },
      nameInfo: {
        x: 455.2585,
        y: 391.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 72,
      width: 1159,
      height: 772,
      imageLeft: 93,
      imageRight: 1112,
      imageCols: 36,
      imageTop: 53,
      imageBottom: 707,
      imageRows: 23,
      globalLight: true,
    }),
  ];
  journals = [
    new AdventureImage({
      name: "journal1",
      page: 6,
      width: 1168,
      height: 766,
    }),
    new AdventureImage({
      name: "journal2",
      page: 1,
      width: 1259,
      height: 696,
    }),
    new AdventureImage({
      name: "journal3",
      page: 2,
      width: 1261,
      height: 1637,
    }),
    new AdventureImage({
      name: "journal4",
      page: 4,
      width: 1260,
      height: 1636,
    }),
    new AdventureImage({
      name: "journal5",
      page: 22,
      width: 1168,
      height: 779,
    }),
    new CaptionImage({
      name: "journal6",
      page: 36,
      width: 337,
      height: 477,
    }),
    new CaptionImage({
      name: "journal7",
      page: 46,
      width: 1168,
      height: 779,
    }),
    new AdventureImage({
      name: "journal8",
      page: 62,
      width: 1261,
      height: 1636,
    }),
    new AdventureImage({
      name: "journal9",
      page: 68,
      width: 1260,
      height: 1636,
    }),
    new AdventureImage({
      name: "journal10",
      page: 74,
      width: 1260,
      height: 1636,
    }),
    new CaptionImage({
      name: "journal11",
      page: 75,
      width: 271,
      height: 661,
    }),
    new CaptionImage({
      name: "journal12",
      page: 76,
      width: 401,
      height: 566,
    }),
    new CaptionImage({
      name: "journal13",
      page: 26,
      width: 767,
      height: 1265,
    }),
    new CaptionImage({
      name: "journal14",
      page: 64,
      width: 933,
      height: 872,
    }),
    new CaptionImage({
      name: "journal15",
      page: 66,
      width: 843,
      height: 1178,
    }),
    new CaptionImage({
      name: "journal16",
      page: 67,
      width: 803,
      height: 1240,
    }),
    new CaptionImage({
      name: "journal17",
      page: 77,
      width: 882,
      height: 1386,
    }),
    new CaptionImage({
      name: "journal18",
      page: 89,
      width: 757,
      height: 963,
    }),
    new CaptionImage({
      name: "journal19",
      page: 91,
      width: 842,
      height: 1315,
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.Fmsw7P5CF3uHtD5W",
      page: 9,
      width: 1378,
      height: 885,
      tokenX: -395,
      tokenY: -330,
      tokenSize: 454,
      forIds: ["OToyOTU6MjU1", "MTk6Njg6MTM1"],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.qSL6PtsHPekEEEjx",
      page: 11,
      width: 809,
      height: 1216,
      tokenX: 8,
      tokenY: -53,
      tokenSize: 572,
      forIds: ["MTE6Njg6MTgz", "MTY6MzI2OjM2Mw", "MTg6OTk6Njk5"],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 13,
        x: 241.7394,
        y: 294.753,
      },
      page: 13,
      width: 440,
      height: 487,
      tokenX: 103,
      tokenY: 111,
      tokenSize: 599,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc4",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.sUrJ7jxzBiJTbwVo",
      page: 14,
      width: 485,
      height: 541,
      tokenX: 38,
      tokenY: 75,
      tokenSize: 541,
      forIds: ["ODk6Njg6NDEx", "MTQ6MzI2Ojk5"],
    }),
    new ModuleNpc({
      id: "npc5",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.IKfYWE1NLVNLCXZm",
      page: 15,
      width: 837,
      height: 966,
      tokenX: -232,
      tokenY: -17,
      tokenSize: 434,
      forIds: ["MTU6Njg6Njk5"],
    }),
    new ModuleNpc({
      id: "npc6",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.LAamprMlzk7k5auj",
      page: 18,
      width: 732,
      height: 1163,
      tokenX: -90,
      tokenY: -62,
      tokenSize: 351,
      forIds: ["MTc6Mjk1OjYzOQ"],
    }),
    new ModuleNpc({
      id: "npc7",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.vwxNCuBksHYU2Dwf",
      page: 20,
      width: 920,
      height: 1161,
      tokenX: 41,
      tokenY: 44,
      tokenSize: 433,
      forIds: ["MTk6Mjk1Ojk5"],
    }),
    new ModuleNpc({
      id: "npc8",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.cLlOUUpCIAQwUuOP",
      page: 21,
      width: 512,
      height: 543,
      tokenX: 48,
      tokenY: 103,
      tokenSize: 599,
      forIds: ["OTE6Njg6Njk5", "MjE6Njg6MTM1"],
    }),
    new ModuleNpc({
      id: "npc9",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.8LlqjWcqiFq7YMmQ",
      page: 24,
      width: 822,
      height: 1288,
      tokenX: -168,
      tokenY: 74,
      tokenSize: 588,
      forIds: ["MjM6Njg6MzE1"],
    }),
    new ModuleNpc({
      id: "npc10",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.P9Wg0sGcNkemOvm3",
      page: 30,
      width: 1143,
      height: 711,
      tokenX: -164,
      tokenY: 184,
      tokenSize: 863,
      forIds: ["Mjk6Mjk1OjI0Mw"],
    }),
    new ModuleNpc({
      id: "npc11",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.D5UF1i0f1IRcQcNB",
      page: 35,
      width: 905,
      height: 1286,
      tokenX: -319,
      tokenY: 36,
      tokenSize: 334,
      forIds: ["NDU6Njg6MTM1"],
    }),
    new ModuleNpc({
      id: "npc12",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.rGTq4qItRB5H7nEk",
      page: 38,
      width: 755,
      height: 1179,
      tokenX: -222,
      tokenY: -86,
      tokenSize: 283,
      forIds: ["Mzg6MzM2OjIwNw"],
    }),
    new ModuleNpc({
      id: "npc13",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.q61A6EsMnDDtnqxH",
      page: 41,
      width: 982,
      height: 1236,
      tokenX: -389,
      tokenY: -25,
      tokenSize: 368,
      forIds: ["NDE6Njg6NjUx"],
    }),
    new ModuleNpc({
      id: "npc14",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.9Bl1ua3uLqodv47s",
      name: {
        page: 43,
        x: 228.8205,
        y: 470.253,
      },
      page: 43,
      width: 526,
      height: 651,
      tokenX: 63,
      tokenY: 0,
      tokenSize: 623,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc15",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.Z6R8YjgX8Jvt9Ds4",
      page: 45,
      width: 907,
      height: 1311,
      tokenX: -245,
      tokenY: -49,
      tokenSize: 471,
      forIds: ["NDQ6MzI2OjE5NQ"],
    }),
    new ModuleNpc({
      id: "npc16",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.EGQgqBfV80ll3pcf",
      page: 48,
      width: 815,
      height: 1275,
      tokenX: -198,
      tokenY: -82,
      tokenSize: 463,
      forIds: ["NDc6Njg6MTQ3"],
    }),
    new ModuleNpc({
      id: "npc17",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.3If8bjsXeA2413dB",
      name: {
        page: 51,
        x: 325.8661,
        y: 138.9651,
      },
      page: 51,
      width: 861,
      height: 1276,
      tokenX: -241,
      tokenY: 109,
      tokenSize: 380,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc18",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.lgbJbeSeC1f8otvH",
      page: 54,
      width: 928,
      height: 1311,
      tokenX: -191,
      tokenY: -84,
      tokenSize: 527,
      forIds: ["NTM6Mjk1OjUxOQ"],
    }),
    new ModuleNpc({
      id: "npc19",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.JsyO7yBf6YaF4YwF",
      page: 56,
      width: 873,
      height: 1164,
      tokenX: -295,
      tokenY: 18,
      tokenSize: 464,
      forIds: ["NTU6Mjk1OjExMQ"],
    }),
    new ModuleNpc({
      id: "npc20",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.RtWlzHaOrfFdJyJY",
      page: 58,
      width: 903,
      height: 1177,
      tokenX: -201,
      tokenY: 138,
      tokenSize: 505,
      forIds: ["NTc6Mjk1OjI3OQ"],
    }),
    new ModuleNpc({
      id: "npc21",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.gkRxUi9VrbPWOPGC",
      page: 59,
      width: 734,
      height: 1154,
      tokenX: -196,
      tokenY: 57,
      tokenSize: 426,
      forIds: ["NTg6MzU0OjE4Mw"],
    }),
    new ModuleNpc({
      id: "npc22",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.rm0iJOMwruWSE93I",
      page: 93,
      width: 876,
      height: 1354,
      tokenX: -327,
      tokenY: -170,
      tokenSize: 346,
      forIds: ["OTM6Njg6NTY3", "NjE6Njg6NDgz"],
    }),
    new ModuleNpc({
      id: "npc23",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.0UbehYHzOGlNK8Hc",
      page: 78,
      width: 822,
      height: 958,
      tokenX: -70,
      tokenY: -157,
      tokenSize: 818,
      forIds: ["Nzg6MjUxOjYxNQ"],
    }),
    new ModuleNpc({
      id: "npc24",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.QRcIVhQV2vlpADSf",
      page: 79,
      width: 815,
      height: 1062,
      tokenX: -174,
      tokenY: -360,
      tokenSize: 754,
      forIds: ["Nzk6Njg6NTc5"],
    }),
    new ModuleNpc({
      id: "npc25",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.4yd4WNkSclwnNvJL",
      page: 80,
      width: 824,
      height: 1161,
      tokenX: -302,
      tokenY: -51,
      tokenSize: 461,
      forIds: ["NTk6Njg6OTk", "ODA6MjUxOjU2Nw"],
    }),
    new ModuleNpc({
      id: "npc26",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.qUhxXE2yT0qwSJQm",
      page: 81,
      width: 799,
      height: 916,
      tokenX: -17,
      tokenY: -38,
      tokenSize: 384,
      forIds: ["ODE6Njg6NTc5"],
    }),
    new ModuleNpc({
      id: "npc27",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.3If8bjsXeA2413dB",
      page: 82,
      width: 782,
      height: 1008,
      tokenX: -41,
      tokenY: -64,
      tokenSize: 392,
      forIds: ["ODI6MzU0OjQxMQ", "MTc6Njg6NjUx", "MTE6Njg6MjMx"],
    }),
    new ModuleNpc({
      id: "npc28",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.TbkQnciNLvcWCrxo",
      page: 84,
      width: 903,
      height: 1241,
      tokenX: -102,
      tokenY: -121,
      tokenSize: 373,
      forIds: ["ODM6Njc6MTU5"],
    }),
    new ModuleNpc({
      id: "npc29",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.kcvU9CatCyBUJRr2",
      page: 85,
      width: 805,
      height: 1165,
      tokenX: -215,
      tokenY: -412,
      tokenSize: 241,
      forIds: ["ODU6Njg6NTkx"],
    }),
    new ModuleNpc({
      id: "npc30",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.3XbjmNeUtPLzxDge",
      page: 86,
      width: 926,
      height: 1028,
      tokenX: -2,
      tokenY: 28,
      tokenSize: 636,
      forIds: ["ODY6MjUxOjUxOQ"],
    }),
    new ModuleNpc({
      id: "npc31",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.RyXA4wOGY8lenKVw",
      page: 87,
      width: 786,
      height: 1138,
      tokenX: -262,
      tokenY: -59,
      tokenSize: 298,
      forIds: ["ODc6Njg6NDIz", "MTc6Njg6Njk5"],
    }),
    new ModuleNpc({
      id: "npc31",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.keCgklXcy4HZgQIL",
      label: "AG",
      forIds: ["Mzc6Njg6MjMx"],
    }),
    new ModuleNpc({
      id: "npc32",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.AZ6AaYdx2NwLWSwh",
      label: "BP",
      forIds: ["NTE6Mjk1OjY2Mw"],
    }),
    new ModuleNpc({
      id: "npc33",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.hSSe2FxlXKvjKsEw",
      label: "A",
      forIds: ["NjE6Njg6NDM1"],
    }),
    new ModuleNpc({
      id: "npc34",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.smItqlbr0iuDJ8nL",
      label: "L",
      forIds: ["Mzg6MzQwOjI1NQ"],
    }),
    new ModuleNpc({
      id: "npc35",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.tu31BdhnxNknt7kK",
      label: "M",
      forIds: ["NDE6Njg6Njk5"],
    }),
    new ModuleNpc({
      id: "npc36",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.GfJLotTcrZmn6tay",
      label: "P",
      forIds: ["NTQ6MzI2OjY1MQ"],
    }),
    new ModuleNpc({
      id: "npc37",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.qF9hjssrMjHuVFYK",
      label: "RW",
      forIds: ["MzM6Njg6MjY3"],
    }),
    new ModuleNpc({
      id: "npc38",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.3vkQLclK0z4LhAh7",
      label: "S",
      forIds: ["NDk6Njg6NjAz"],
    }),
    new ModuleNpc({
      id: "npc39",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.1UtsScuNjmgwMZRn",
      label: "EP",
      forIds: ["NTI6MzI2OjM2Mw"],
    }),
    new ModuleNpc({
      id: "npc40",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.E279VPhAy1a4ihqI",
      label: "LM",
      forIds: ["MzM6Mjk1OjExMQ"],
    }),
    new ModuleNpc({
      id: "npc41",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.kcvU9CatCyBUJRr2",
      label: "R",
      forIds: ["NDI6MzI2OjY5OQ"],
    }),
    new ModuleNpc({
      id: "npc42",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.zYVxMOCM8Yqnjn6T",
      label: "E",
      forIds: ["NTI6MzI2OjQxMQ"],
    }),
    new ModuleNpc({
      id: "hazard1",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.8VAGXECLAk91hoAv",
      label: "FOO",
      forIds: ["NTU6Njg6NTU1"],
    }),
    new ModuleNpc({
      id: "hazard2",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.k1s8syi5E2FoR3Q3",
      label: "FA",
      forIds: ["Mzk6Mjk1OjI2Nw"],
    }),
    new ModuleNpc({
      id: "hazard3",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.e96H6PLW11NCRK1h",
      label: "GPR",
      forIds: ["MzI6MzI2OjM3NQ"],
    }),
    new ModuleNpc({
      id: "hazard4",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.gFVazlIgCZivKzKF",
      label: "IT",
      forIds: ["NTY6MzQyOjM1MQ"],
    }),
    new ModuleNpc({
      id: "hazard5",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.qy53ECS2agScE7G3",
      label: "KLG",
      forIds: ["MzE6Mjk1OjU2Nw", "MzI6OTk6NTkx"],
    }),
    new ModuleNpc({
      id: "hazard6",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.7Q35HATCilOb1xXX",
      label: "LP",
      forIds: ["MzQ6OTk6MTQ3"],
    }),
    new ModuleNpc({
      id: "hazard7",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.kidMmEzwgoBcHdnR",
      label: "TLFG",
      forIds: ["MzY6MzI2OjI0Mw"],
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
          id: "NzozNzE6Mjkx",
        },
        {
          id: "Nzo2ODo0MTE",
        },
        {
          id: "ODo5OTo2Mzk",
        },
        {
          id: "ODozMjY6NDM1",
        },
        {
          id: "OTo2ODoxODM",
        },
        {
          id: "MTA6OTk6MTcx",
        },
        {
          id: "MTM6MzA0OjY5OQ",
        },
        {
          id: "MTA6MzI2OjQyMw",
        },
        {
          id: "MTA6MzI2OjIwNw",
        },
        {
          id: "MTI6MzI2OjMxNQ",
        },
        {
          id: "MTM6Njg6NDQ3",
        },
        {
          id: "MTM6MzgwOjMzOQ",
        },
        {
          id: "MTQ6OTk6OTk",
        },
        {
          id: "MTU6Njg6MTU5",
        },
        {
          id: "MTY6MzI2OjI3OQ",
        },
        {
          id: "MTc6Njg6Mjkx",
        },
        {
          id: "MTg6MzI2OjUzMQ",
        },
        {
          id: "MTg6MzI2OjMzOQ",
        },
        {
          id: "MTk6Njg6NjAz",
        },
        {
          id: "MTk6Njg6ODc",
        },
        {
          id: "MjE6Njg6NjYz",
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
          id: "MjM6MzcxOjQzNQ",
        },
        {
          id: "MjM6Njg6NjE1",
        },
        {
          id: "MjU6Njg6ODc",
        },
        {
          id: "Mjc6Njg6MTcx",
        },
        {
          id: "Mjk6Njg6NDEx",
        },
        {
          id: "Mjk6Njg6MTgz",
        },
        {
          id: "Mjk6Mjk1OjQ4Mw",
        },
        {
          id: "MzE6Mjk1OjIxOQ",
        },
        {
          id: "MzI6OTk6MzM5",
        },
        {
          id: "MzI6OTk6MTIz",
        },
        {
          id: "MzI6MzI2OjIwNw",
        },
        {
          id: "MzM6Njg6MTQ3",
        },
        {
          id: "MzQ6MzI2OjQzNQ",
        },
        {
          id: "MzY6OTk6MTEx",
        },
        {
          id: "Mzc6Njg6NTY3",
        },
        {
          id: "Mzc6Njg6MTEx",
        },
        {
          id: "Mzg6MzM1OjU2Nw",
        },
        {
          id: "Mzk6Njg6MTU5",
        },
        {
          id: "Mzk6Mjk1OjUwNw",
        },
        {
          id: "NDA6OTk6NTkx",
        },
        {
          id: "NDA6OTk6MzUx",
        },
        {
          id: "NDI6OTk6NjI3",
        },
        {
          id: "NDI6MzI2OjYwMw",
        },
        {
          id: "NDM6Njg6MTIz",
        },
        {
          id: "NDQ6OTk6MTgz",
        },
        {
          id: "NDQ6MzI2OjUzMQ",
        },
        {
          id: "MzY6MTA4OjY5OQ",
        },
        {
          id: "Mzc6MzA0OjY5OQ",
        },
      ],
    },
    {
      name: "Chapter 3",
      pages: [
        {
          id: "NDY6MjU0OjM1Ng",
        },
        {
          id: "NDc6MzcxOjY5OQ",
        },
        {
          id: "NDc6MzcxOjQzNQ",
        },
        {
          id: "NDY6OTk6MTk1",
        },
        {
          id: "NDc6Njg6NTMx",
        },
        {
          id: "NDg6MzY4OjQyMw",
        },
        {
          id: "NDk6Njg6NTE5",
        },
        {
          id: "NDk6MzA0OjY5OQ",
        },
        {
          id: "NDk6Njg6MzM5",
        },
        {
          id: "NDk6Mjk1OjE1OQ",
        },
        {
          id: "NTA6OTk6MTEx",
        },
        {
          id: "NTE6Njg6MzUx",
        },
        {
          id: "NTI6OTk6NDU5",
        },
        {
          id: "NTI6OTk6MTEx",
        },
        {
          id: "NTI6MzI2OjY5OQ",
        },
        {
          id: "NTM6Njg6MzM5",
        },
        {
          id: "NTM6Njg6MTcx",
        },
        {
          id: "NTQ6MzI2OjQ4Mw",
        },
        {
          id: "NTQ6MzI2OjEyMw",
        },
        {
          id: "NTU6Njg6MTEx",
        },
        {
          id: "NTU6Mjk1OjY2Mw",
        },
        {
          id: "NTU6Mjk1OjU0Mw",
        },
        {
          id: "NTc6Njg6NDIz",
        },
        {
          id: "NTc6Mjk1OjY5OQ",
        },
        {
          id: "NTc6Mjk1OjUxOQ",
        },
        {
          id: "NTg6MzI2OjY1MQ",
        },
        {
          id: "NjA6OTk6Njk5",
        },
        {
          id: "NjA6OTk6NjI3",
        },
        {
          id: "NjA6OTk6NDM1",
        },
        {
          id: "NjA6MzI2OjY5OQ",
        },
        {
          id: "NjA6MzI2OjYzOQ",
        },
        {
          id: "NjE6Njg6Mzg3",
        },
      ],
    },
    {
      name: "Back Matter",
      pages: [
        {
          id: "NjM6Njg6NjIx",
        },
        {
          id: "NjM6Njg6Mjkx",
        },
        {
          id: "NjM6Mjk1OjI3OQ",
        },
        {
          id: "NjQ6MzI2OjQ1OQ",
        },
        {
          id: "NjU6Njg6NDQ3",
        },
        {
          id: "Njc6Njg6NjE1",
        },
        {
          id: "Njk6MTU3OjY1Mw",
        },
        {
          id: "NzA6OTk6MzUx",
        },
        {
          id: "NzA6MzI2OjExMQ",
        },
        {
          id: "NzE6Njg6NTA3",
        },
        {
          id: "NzE6Mjk1OjE3MQ",
        },
        {
          id: "NzI6OTk6MzUx",
        },
        {
          id: "NzI6OTk6MTEx",
        },
        {
          id: "NzI6MzI2OjI5MQ",
        },
        {
          id: "NzM6Mjk1OjY5OQ",
        },
        {
          id: "NzM6Mjk1OjEyMw",
        },
        {
          id: "NjU6MzA0OjY4Nw",
        },
        {
          id: "NzU6MTAyOjYyMQ",
        },
        {
          id: "NzU6Mjk1OjUzMQ",
        },
        {
          id: "NzU6Mjk1OjQ5NQ",
        },
        {
          id: "NzY6OTk6NDU5",
        },
        {
          id: "NzY6MzI2OjUwNw",
        },
        {
          id: "NzY6MzI2OjI1NQ",
        },
        {
          id: "Nzc6Njg6NDU5",
        },
        {
          id: "Nzg6MjUxOjY4Nw",
        },
        {
          id: "Nzk6Njg6Njg3",
        },
        {
          id: "ODA6MjUxOjY4Nw",
        },
        {
          id: "ODA6MjUxOjYzOQ",
        },
        {
          id: "ODE6Njg6Njk5",
        },
        {
          id: "ODI6MjUxOjY4Nw",
        },
        {
          id: "ODM6MzcxOjY2Mw",
        },
        {
          id: "ODI6MjUxOjU0Mw",
        },
        {
          id: "ODM6Njg6MjQz",
        },
        {
          id: "ODU6Njg6Njg3",
        },
        {
          id: "ODY6MjUxOjY4Nw",
        },
        {
          id: "ODY6MjUxOjYwMw",
        },
        {
          id: "ODc6Njg6NjE1",
        },
        {
          id: "ODg6MTA3OjYyMg",
        },
        {
          id: "OTA6MjMzOjY1NA",
        },
        {
          id: "OTI6MTYyOjYyMg",
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
      ],
    },
  ];
  combines = [
    {
      source: "OTI6MzI2OjE1OQ",
      dest: "OTI6MTYyOjYyMg",
    },
    {
      source: "OTA6MzI2OjI5MQ",
      dest: "OTA6MjMzOjY1NA",
    },
    {
      source: "ODk6Njg6NTc5",
      dest: "ODg6MTA3OjYyMg",
    },
    {
      source: "Nzg6MTE3OjY2Mw",
      dest: "Nzg6MjUxOjY4Nw",
    },
    {
      source: "Nzk6MzcxOjY2Mw",
      dest: "Nzk6Njg6Njg3",
    },
    {
      source: "ODA6MTQwOjY2Mw",
      dest: "ODA6MjUxOjY4Nw",
    },
    {
      source: "ODE6MzcxOjY2Mw",
      dest: "ODE6Njg6Njk5",
    },
    {
      source: "ODI6MTU4OjY2Mw",
      dest: "ODI6MjUxOjU0Mw",
    },
    {
      source: "ODQ6MTIwOjY2Mw",
      dest: "ODM6Njg6MjQz",
    },
    {
      source: "ODU6MzcxOjY2Mw",
      dest: "ODU6Njg6Njg3",
    },
    {
      source: "ODY6MTM1OjY2Mw",
      dest: "ODY6MjUxOjY4Nw",
    },
    {
      source: "ODc6MzcxOjY2Mw",
      dest: "ODc6Njg6NjE1",
    },
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "RUINS OF THE RADIANT SIEGE" &&
        t.fontId === "ColiseumBold:38",
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    this.markStartOfLine(text, 14, 404.25, 615);
    this.markStartOfLine(text, 24, 411.25, 495);
    this.markStartOfLine(text, 26, 354.25, 447);
    this.markStartOfLine(text, 26, 334.25, 315);
    this.markStartOfLine(text, 26, 344.25, 231);
    this.markStartOfLine(text, 38, 341.25, 459);
    this.markStartOfLine(text, 38, 340.25, 255);
    this.markStartOfLine(text, 38, 336.25, 207);
    this.markStartOfLine(text, 38, 331.25, 159);
    this.markStartOfLine(text, 38, 330.25, 147);
    this.markStartOfLine(text, 38, 330.25, 135);
    this.markStartOfLine(text, 38, 329.25, 123);
    this.markStartOfLine(text, 38, 330.25, 111);
    this.markStartOfLine(text, 38, 330.25, 99);
    this.markStartOfLine(text, 38, 331.25, 87);
    this.markIndented(text, 43, 409.75, 579);
    this.markStartOfLine(text, 48, 351.25, 591);
    this.markStartOfLine(text, 48, 373.25, 555);
    this.markStartOfLine(text, 48, 337.25, 447);
    this.markStartOfLine(text, 48, 368.3099, 423);
    this.markIndented(text, 48, 387.25, 399);
    this.markIndented(text, 48, 419.25, 279);
    this.markStartOfLine(text, 48, 392.25, 387);
    this.markStartOfLine(text, 48, 396.25, 375);
    this.markStartOfLine(text, 48, 397.25, 363);
    this.markStartOfLine(text, 48, 397.25, 351);
    this.markStartOfLine(text, 48, 397.25, 339);
    this.markStartOfLine(text, 48, 396.25, 327);
    this.markStartOfLine(text, 48, 400.25, 315);
    this.markStartOfLine(text, 48, 406.25, 303);
    this.markIndented(text, 48, 370.25, 159);
    this.markIndented(text, 54, 336.25, 459);
    this.markIndented(text, 54, 392.25, 327);
    this.markIndented(text, 54, 385.25, 99);
    this.markStartOfLine(text, 56, 342.25, 351);
    this.markStartOfLine(text, 56, 334.25, 327);
    this.markStartOfLine(text, 56, 327.25, 315);
    this.markStartOfLine(text, 58, 354.25, 183);
    this.markStartOfLine(text, 58, 372.25, 147);
    this.markStartOfLine(text, 58, 396.25, 123);
    this.markStartOfLine(text, 58, 412.25, 99);
    this.markStartOfLine(text, 78, 331.4999, 495);
    this.markStartOfLine(text, 78, 318.4999, 363);
    this.markStartOfLine(text, 78, 330.4999, 351);
    this.markStartOfLine(text, 78, 351.4999, 315);
    this.markStartOfLine(text, 78, 352.4999, 267);
    this.markStartOfLine(text, 78, 388.4999, 159);
    this.markIndented(text, 78, 380.4999, 219);
    this.markIndented(text, 78, 382.4999, 207);
    this.markIndented(text, 78, 381.4999, 195);
    this.markIndented(text, 78, 383.4999, 183);
    this.markStartOfLine(text, 80, 345.5, 495);
    this.markStartOfLine(text, 80, 345.5, 483);
    this.markStartOfLine(text, 80, 341.5, 459);
    this.markStartOfLine(text, 80, 336.5, 435);
    this.markStartOfLine(text, 80, 381.5, 303);
    this.markStartOfLine(text, 80, 382.5, 291);
    this.markStartOfLine(text, 80, 387.5, 255);
    this.markStartOfLine(text, 80, 346.5, 195);
    this.markStartOfLine(text, 80, 304.5, 111);
    this.markStartOfLine(text, 82, 353.5, 411);
    this.markStartOfLine(text, 82, 365.5, 387);
    this.markStartOfLine(text, 82, 369.5, 363);
    this.markStartOfLine(text, 82, 370.5, 339);
    this.markStartOfLine(text, 82, 369.5, 303);
    this.markStartOfLine(text, 82, 368.5, 291);
    this.markStartOfLine(text, 82, 356.5, 171);
    this.markStartOfLine(text, 82, 323.5, 147);
    this.markStartOfLine(text, 82, 319.5, 123);
    this.markStartOfLine(text, 84, 425.5, 387);
    this.markStartOfLine(text, 84, 269.5, 291);
    this.markStartOfLine(text, 84, 302.5, 279);
    this.markStartOfLine(text, 84, 407.5, 195);
    this.markStartOfLine(text, 84, 276.5, 87);
    this.markStartOfLine(text, 86, 334.5, 483);
    this.markStartOfLine(text, 86, 333.5, 459);
    this.markStartOfLine(text, 86, 308.5, 423);
    this.markStartOfLine(text, 86, 303.5, 411);
    this.markStartOfLine(text, 86, 316.5, 363);
    this.markStartOfLine(text, 86, 343.5, 339);
    this.markStartOfLine(text, 86, 338.5, 303);
    this.markStartOfLine(text, 86, 354.5, 207);
    this.markStartOfLine(text, 86, 367.5, 219);
    this.markStartOfLine(text, 86, 377.5, 159);
    this.markStartOfLine(text, 86, 349.5, 99);
    this.changeTextFn(text, 10, 132.3432, 495, (s) =>
      s.replace("magical reach 20 feet", "magical, reach 20 feet"),
    );
    this.changeTextFn(text, 45, 76.5, 567, (s) =>
      s.replace("versatile 10 feet", "versatile p"),
    );
    this.changeFontId(text, 35, 409.8618, 603, "SabonLTStd-Roman:9");
    this.changeText(text, 35, 409.8618, 603, "\u2190");
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
