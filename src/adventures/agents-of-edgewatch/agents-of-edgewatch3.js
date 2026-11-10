import { AgentsOfEdgewatchBase } from "./base.js";
import { AdventureImage, CaptionImage } from "../../core/images.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class AgentsOfEdgewatch3 extends AgentsOfEdgewatchBase {
  prefix = "agents-of-edgewatch3";
  fullName = "Agents of Edgewatch - All or Nothing";
  pages = [
    this.ChapterHeadingPageLayout(6),
    this.RightSingleColumnWithSidebar(7),
    this.LeftTwoColumn(8),
    this.RightTwoColumn(9),
    this.LeftTwoColumn(10),
    this.RightTwoColumn(11),
    this.LeftTwoColumnWithMap(12, 365),
    this.RightTwoColumn(13),
    this.LeftTwoColumn(14),
    this.RightTwoColumnWithRightCutout(15, 600),
    this.LeftTwoColumn(16),
    this.RightTwoColumn(17),
    this.LeftTwoColumnWithMap(18, 365),
    this.RightTwoColumn(19),
    this.LeftTwoColumn(20),
    this.RightTwoColumn(21),
    this.LeftTwoColumn(22),
    this.RightTwoColumn(23),
    this.ChapterHeadingPageLayout(24),
    this.RightSingleColumnWithSidebar(25),
    this.LeftTwoColumn(26),
    this.RightTwoColumn(27),
    this.RightTwoColumn(29),
    this.LeftTwoColumn(30),
    this.RightTwoColumn(31),
    this.LeftTwoColumnWithLeftCutout(32, 595),
    this.RightTwoColumn(33),
    this.LeftTwoColumn(34),
    this.RightTwoColumn(35),
    this.LeftTwoColumnWithLeftCutout(36, 260),
    this.RightTwoColumn(37),
    this.LeftTwoColumn(38),
    this.RightTwoColumn(39),
    this.LeftTwoColumn(40),
    this.RightTwoColumn(41),
    this.LeftTwoColumn(42),
    this.RightTwoColumn(43),
    this.LeftTwoColumn(44),
    this.RightTwoColumnWithRightCutout(45, 560),
    this.ChapterHeadingPageLayout(46),
    this.RightSingleColumnWithSidebar(47),
    this.LeftTwoColumnWithLeftCutout(48, 600),
    this.RightTwoColumn(49),
    this.LeftTwoColumnWithLeftCutout(50, 200),
    this.RightTwoColumn(51),
    this.LeftTwoColumn(52),
    this.RightTwoColumn(53),
    this.LeftTwoColumnWithMap(54, 365),
    this.RightTwoColumn(55),
    this.LeftTwoColumn(56),
    this.RightTwoColumn(57),
    this.LeftTwoColumn(58),
    this.RightTwoColumn(59),
    this.LeftTwoColumn(60),
    this.RightTwoColumn(61),
    this.RightChapterHeadingPageLayout(63),
    this.RightTwoColumn(65),
    this.LeftTwoColumn(66),
    this.RightTwoColumn(67),
    this.LeftTwoColumn(68),
    this.RightTwoColumn(69),
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
      name: "map2a",
      canonical: {
        name: "aoe3/map2a",
        priority: 0,
      },
      nameInfo: {
        x: 22.7534,
        y: 754.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 12,
      width: 1261,
      height: 828,
      imageLeft: 21,
      imageRight: 1257,
      imageCols: 35,
      imageTop: 7,
      imageBottom: 821,
      imageRows: 23,
      cropLeft: 0,
      cropRight: 617,
      cropTop: 0,
      cropBottom: 821,
      globalLight: true,
      detailsFile: "/aoe/maps/aoe3-map2a.json",
      journals: [
        {
          x: 1250,
          y: 1850,
          id: "MTI6OTk6MzYz",
        },
      ],
      tokens: [
        {
          id: "npc2",
          x: 600,
          y: 1300,
        },
        {
          id: "npc2",
          x: 600,
          y: 1500,
        },
        {
          id: "npc5",
          x: 2e3,
          y: 1300,
        },
        {
          id: "npc5",
          x: 2e3,
          y: 1500,
        },
      ],
    }),
    new ModuleScene({
      name: "map2b",
      canonical: {
        name: "aoe3/map2b",
        priority: 0,
      },
      nameInfo: {
        x: 313,
        y: 754.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 12,
      width: 1261,
      height: 828,
      imageLeft: 21,
      imageRight: 1257,
      imageCols: 35,
      imageTop: 7,
      imageBottom: 821,
      imageRows: 23,
      cropLeft: 628,
      cropRight: 1261,
      cropTop: 0,
      cropBottom: 821,
      globalLight: true,
      detailsFile: "/aoe/maps/aoe3-map2b.json",
      journals: [
        {
          x: 1950,
          y: 1050,
          id: "MTQ6OTk6NTE5",
        },
        {
          x: 1050,
          y: 1400,
          id: "MTQ6OTk6NTE5",
        },
      ],
      tokens: [
        {
          id: "npc34",
          x: 700,
          y: 1700,
        },
      ],
    }),
    new ModuleScene({
      name: "map3",
      canonical: {
        name: "aoe3/map3",
        priority: 0,
      },
      nameInfo: {
        x: 22.7534,
        y: 415.5,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 18,
      width: 1261,
      height: 830,
      imageLeft: 21,
      imageRight: 1222,
      imageCols: 34,
      imageTop: 30,
      imageBottom: 806,
      imageRows: 22,
      globalLight: true,
      detailsFile: "/aoe/maps/aoe3-map3.json",
      journals: [
        {
          x: 3450,
          y: 1650,
          id: "MTc6Mjk1OjY5OQ",
        },
        {
          x: 2750,
          y: 2250,
          id: "MTc6Mjk1OjExMQ",
        },
        {
          x: 2750,
          y: 1750,
          id: "MTg6OTk6MTU5",
        },
        {
          x: 2650,
          y: 1150,
          id: "MTk6Njg6MTIz",
        },
        {
          x: 1850,
          y: 1350,
          id: "MTk6Mjk1OjQ5NQ",
        },
        {
          x: 1650,
          y: 2350,
          id: "MjA6Mzc4OjM4Nw",
        },
        {
          x: 2550,
          y: 1850,
          id: "MjE6Njg6NjAz",
        },
        {
          x: 2350,
          y: 2250,
          id: "MjE6Mjk1OjYyNw",
        },
      ],
      tokens: [
        {
          id: "npc21",
          x: 3300,
          y: 800,
        },
        {
          id: "npc5",
          x: 3e3,
          y: 1200,
        },
        {
          id: "npc5",
          x: 3100,
          y: 1300,
        },
        {
          id: "npc33",
          x: 2700,
          y: 1500,
        },
        {
          id: "npc33",
          x: 2600,
          y: 1700,
        },
        {
          id: "npc5",
          x: 2400,
          y: 1500,
        },
        {
          id: "npc5",
          x: 2300,
          y: 1800,
        },
        {
          id: "npc33",
          x: 1400,
          y: 1600,
        },
        {
          id: "npc33",
          x: 1900,
          y: 1100,
        },
        {
          id: "npc30",
          x: 2300,
          y: 700,
        },
        {
          id: "npc6",
          x: 2100,
          y: 2300,
        },
        {
          id: "npc5",
          x: 2500,
          y: 2200,
          elite: true,
        },
        {
          id: "npc5",
          x: 2500,
          y: 2300,
          elite: true,
        },
      ],
    }),
    new ModuleScene({
      name: "map4",
      canonical: {
        name: "aoe3/map4",
        priority: 0,
      },
      nameInfo: {
        x: 15,
        y: 761.8362,
      },
      nameFn: (name) => this.sentenceCase(name).substr(0, 16),
      page: 28,
      width: 1259,
      height: 1636,
      imageLeft: 23,
      imageRight: 1180,
      imageCols: 35 * 2,
      imageTop: 21,
      imageBottom: 1542,
      imageRows: 46 * 2,
      globalLight: true,
      detailsFile: "/aoe/maps/aoe3-map4.json",
      journals: [
        {
          x: 3e3,
          y: 6900,
          id: "Mjk6Nzc6NTc5",
        },
        {
          x: 5200,
          y: 3500,
          id: "Mjk6Nzc6Mzk5",
        },
        {
          x: 4800,
          y: 7300,
          id: "Mjk6Mzk5OjUwNw",
        },
        {
          x: 7300,
          y: 5400,
          id: "Mjk6MzA0OjM2Mw",
        },
        {
          x: 8300,
          y: 4600,
          id: "Mjk6MzA0OjEzNQ",
        },
        {
          x: 8300,
          y: 5800,
          id: "MzA6MzM1OjY3NQ",
        },
        {
          x: 8300,
          y: 4e3,
          id: "MzA6MzM1OjUwNw",
        },
        {
          x: 8900,
          y: 4e3,
          id: "MzA6MzUyOjQyMw",
        },
        {
          x: 8300,
          y: 3200,
          id: "MzA6MzU1OjMwMw",
        },
        {
          x: 6700,
          y: 3400,
          id: "MzA6NDQwOjE0Nw",
        },
        {
          x: 3400,
          y: 3700,
          id: "MzE6Nzc6NTY3",
        },
        {
          x: 4900,
          y: 4400,
          id: "MzE6Nzc6MzYz",
        },
        {
          x: 3700,
          y: 4100,
          id: "MzE6Nzc6MjMx",
        },
        {
          x: 3800,
          y: 3800,
          id: "MzE6Nzc6MTEx",
        },
        {
          x: 3e3,
          y: 4100,
          id: "MzE6Nzc6MTEx",
        },
        {
          x: 3200,
          y: 10300,
          id: "MzE6Nzc6NTY3",
        },
        {
          x: 3500,
          y: 10500,
          id: "MzE6MzA0OjYwMw",
        },
        {
          x: 4300,
          y: 11100,
          id: "MzE6MzA0OjM3NQ",
        },
        {
          x: 3500,
          y: 12e3,
          id: "MzE6MzA0OjIxOQ",
        },
        {
          x: 3900,
          y: 11600,
          id: "MzE6MzA0OjEyMw",
        },
        {
          x: 7700,
          y: 11e3,
          id: "MzI6MTA4OjQyMw",
        },
        {
          x: 7e3,
          y: 10100,
          id: "MzE6Nzc6NTY3",
        },
        {
          x: 6500,
          y: 9200,
          id: "MzI6MzM1OjY5OQ",
        },
        {
          x: 8200,
          y: 9700,
          id: "MzI6MzM1OjU5MQ",
        },
        {
          x: 7100,
          y: 11e3,
          id: "MzI6MzM1OjUzMQ",
        },
        {
          x: 8900,
          y: 11800,
          id: "MzI6MzM1OjIxOQ",
        },
        {
          x: 7100,
          y: 11800,
          id: "MzI6MzM1OjE3MQ",
        },
        {
          x: 4e3,
          y: 9300,
          id: "MzI6MzM1OjEyMw",
        },
        {
          x: 3500,
          y: 9e3,
          id: "MzM6Nzc6NjYz",
        },
        {
          x: 4100,
          y: 8600,
          id: "MzM6Nzc6Mjc5",
        },
        {
          x: 4300,
          y: 9300,
          id: "MzM6Nzc6MTEx",
        },
      ],
      tokens: [],
    }),
    new ModuleScene({
      name: "map5",
      canonical: {
        name: "aoe3/map5",
        priority: 0,
      },
      nameInfo: {
        x: 180,
        y: 414.9181,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 54,
      width: 1259,
      height: 830,
      imageLeft: 14,
      imageRight: 1014,
      imageCols: 34,
      imageTop: 49,
      imageBottom: 813,
      imageRows: 26,
      globalLight: true,
      detailsFile: "/aoe/maps/aoe3-map5.json",
      journals: [
        {
          x: 1650,
          y: 3250,
          id: "NTM6Mjk1OjMxNQ",
        },
        {
          x: 1850,
          y: 2550,
          id: "NTM6Mjk1OjE0Nw",
        },
        {
          x: 2050,
          y: 3250,
          id: "NTQ6OTk6MjE5",
        },
        {
          x: 2050,
          y: 1850,
          id: "NTU6Njg6MzYz",
        },
        {
          x: 2650,
          y: 900,
          id: "NTU6Njg6MTgz",
        },
        {
          x: 3150,
          y: 1650,
          id: "NTY6MzI2OjYxNQ",
        },
        {
          x: 3750,
          y: 1550,
          id: "NTY6MzI2OjUzMQ",
        },
        {
          x: 3350,
          y: 2050,
          id: "NTY6MzI2OjQ3MQ",
        },
        {
          x: 3350,
          y: 2750,
          id: "NTY6MzY0OjM2Mw",
        },
        {
          x: 4150,
          y: 2650,
          id: "NTY6Mzg4OjE3MQ",
        },
        {
          x: 4350,
          y: 1950,
          id: "NTc6Mjk1OjQyMw",
        },
        {
          x: 4350,
          y: 1150,
          id: "NTg6MzUxOjM3NQ",
        },
      ],
      tokens: [
        {
          id: "npc16",
          x: 2e3,
          y: 3300,
        },
        {
          id: "npc16",
          x: 2100,
          y: 3200,
        },
        {
          id: "npc18",
          x: 4200,
          y: 2700,
        },
        {
          id: "npc18",
          x: 4300,
          y: 2600,
        },
        {
          id: "npc18",
          x: 3900,
          y: 2500,
        },
        {
          id: "npc18",
          x: 4100,
          y: 2400,
        },
        {
          id: "npc27",
          x: 4100,
          y: 1700,
        },
        {
          id: "npc27",
          x: 4100,
          y: 1900,
        },
        {
          id: "npc18",
          x: 4500,
          y: 1100,
        },
        {
          id: "npc18",
          x: 4400,
          y: 1e3,
        },
        {
          id: "npc19",
          x: 4200,
          y: 1100,
        },
        {
          id: "npc17",
          x: 1800,
          y: 1e3,
        },
        {
          id: "npc17",
          x: 2400,
          y: 1e3,
        },
        {
          id: "npc17",
          x: 3200,
          y: 1e3,
        },
      ],
    }),
    new ModuleScene({
      name: "map6",
      canonical: {
        name: "aoe3/map6",
        priority: 0,
      },
      nameInfo: {
        x: 53.2921,
        y: 50.1133,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 64,
      width: 1259,
      height: 1636,
      imageLeft: 0,
      imageRight: 1e3,
      imageCols: 20,
      imageTop: 0,
      imageBottom: 1e3,
      imageRows: 20,
      globalLight: true,
      gridType: "gridless",
      gridDistance: 50,
      gridUnits: "ft",
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
    new CaptionImage({
      name: "journal3",
      page: 40,
      width: 470,
      height: 470,
    }),
    new AdventureImage({
      name: "journal4",
      page: 46,
      width: 1168,
      height: 779,
    }),
    new CaptionImage({
      name: "journal5",
      page: 60,
      width: 360,
      height: 490,
    }),
    new AdventureImage({
      name: "journal6",
      page: 70,
      width: 1260,
      height: 1636,
    }),
    new CaptionImage({
      name: "journal7",
      page: 73,
      width: 353,
      height: 580,
    }),
    new AdventureImage({
      name: "journal8",
      page: 76,
      width: 1260,
      height: 1636,
    }),
    new AdventureImage({
      name: "journal9",
      page: 78,
      width: 659,
      height: 658,
    }),
    new CaptionImage({
      name: "journal10",
      page: 80,
      width: 405,
      height: 565,
    }),
    new AdventureImage({
      name: "journal11",
      page: 81,
      width: 695,
      height: 1016,
    }),
    new AdventureImage({
      name: "journal12",
      page: 99,
      width: 1261,
      height: 1637,
    }),
    new CaptionImage({
      name: "journal13",
      page: 27,
      width: 864,
      height: 883,
    }),
    new CaptionImage({
      name: "journal14",
      page: 34,
      width: 793,
      height: 1036,
    }),
    new CaptionImage({
      name: "journal15",
      page: 66,
      width: 620,
      height: 1003,
    }),
    new CaptionImage({
      name: "journal16",
      page: 68,
      width: 595,
      height: 1036,
    }),
    new CaptionImage({
      name: "journal17",
      page: 72,
      width: 862,
      height: 1047,
    }),
    new CaptionImage({
      name: "journal18",
      page: 74,
      width: 701,
      height: 1246,
    }),
    new CaptionImage({
      name: "journal19",
      page: 89,
      width: 836,
      height: 1154,
    }),
    new CaptionImage({
      name: "journal20",
      page: 91,
      width: 471,
      height: 1226,
    }),
    new CaptionImage({
      name: "journal21",
      page: 93,
      width: 905,
      height: 1281,
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid: "Compendium.pf2e.pfs-season-1-bestiary.Actor.K6JYKFI9HLFWf12d",
      name: {
        page: 8,
        x: 284.8777,
        y: 429.753,
      },
      page: 8,
      width: 611,
      height: 610,
      tokenX: 15,
      tokenY: -15,
      tokenSize: 611,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.5pBr5aWUb7yGCqN7",
      page: 13,
      width: 810,
      height: 1114,
      tokenX: -201,
      tokenY: -49,
      tokenSize: 330,
      forIds: ["MTI6OTk6MTQ3"],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 14,
        x: 299.8126,
        y: 444.5408,
      },
      page: 14,
      width: 515,
      height: 533,
      tokenX: 78,
      tokenY: 104,
      tokenSize: 645,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc4",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.t9m4ikMZsDwo9TQ1",
      page: 16,
      width: 475,
      height: 526,
      tokenX: 110,
      tokenY: 119,
      tokenSize: 638,
      forIds: ["OTM6Njg6Mzk5"],
    }),
    new ModuleNpc({
      id: "npc5",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.xkkj0TW6BKNT3Bg4",
      page: 20,
      width: 556,
      height: 1143,
      tokenX: -158,
      tokenY: -63,
      tokenSize: 303,
      forIds: ["MTI6OTk6OTk", "MjM6Njg6Njk5", "MjA6OTk6NDU5", "MTc6Mjk1OjIwNw"],
    }),
    new ModuleNpc({
      id: "npc6",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.TIaZIUb9Mq9B4Mf2",
      page: 22,
      width: 764,
      height: 1160,
      tokenX: -269,
      tokenY: 3,
      tokenSize: 320,
      forIds: ["MjM6Njg6NjM5"],
    }),
    new ModuleNpc({
      id: "npc7",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.eqwAdGsAk5JZKxUY",
      page: 26,
      width: 461,
      height: 541,
      tokenX: 114,
      tokenY: 94,
      tokenSize: 625,
      forIds: ["OTE6Mjk1OjYzOQ"],
    }),
    new ModuleNpc({
      id: "npc8",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 29,
        x: 256.897,
        y: 439.2555,
      },
      page: 29,
      width: 510,
      height: 509,
      tokenX: 86,
      tokenY: 105,
      tokenSize: 650,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc9",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 30,
        x: 157.9015,
        y: 138.9651,
      },
      page: 30,
      width: 907,
      height: 1003,
      tokenX: -198,
      tokenY: 112,
      tokenSize: 527,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc10",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 33,
        x: 261.5347,
        y: 443.903,
      },
      page: 33,
      width: 548,
      height: 548,
      tokenX: 75,
      tokenY: 82,
      tokenSize: 660,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc11",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 39,
        x: 258.3983,
        y: 470.753,
      },
      page: 39,
      width: 482,
      height: 483,
      tokenX: 72,
      tokenY: 105,
      tokenSize: 623,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc12",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.2qAd4TmEu5wexX7U",
      page: 43,
      width: 869,
      height: 1337,
      tokenX: -349,
      tokenY: -231,
      tokenSize: 245,
      forIds: ["NDI6MzI2OjQ1OQ"],
    }),
    new ModuleNpc({
      id: "npc13",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.CLntGVs7cAIL9Trk",
      page: 44,
      width: 980,
      height: 1100,
      tokenX: -298,
      tokenY: 48,
      tokenSize: 428,
      forIds: ["NDU6Njg6NDEx"],
    }),
    new ModuleNpc({
      id: "npc14",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 49,
        x: 267.5926,
        y: 462.9651,
      },
      page: 49,
      width: 490,
      height: 489,
      tokenX: 64,
      tokenY: 117,
      tokenSize: 630,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc15",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.3qDYEHtyAobpCg5r",
      name: {
        page: 51,
        x: 281.0728,
        y: 455.9651,
      },
      page: 51,
      width: 490,
      height: 490,
      tokenX: 58,
      tokenY: 97,
      tokenSize: 602,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc16",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.pK1tlsgkmzkaaCe5",
      page: 55,
      width: 871,
      height: 910,
      tokenX: -425,
      tokenY: 1,
      tokenSize: 350,
      forIds: ["NTQ6MzI2OjExMQ"],
    }),
    new ModuleNpc({
      id: "npc17",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.R427CMT90S7fv7MY",
      page: 56,
      width: 964,
      height: 1029,
      tokenX: -183,
      tokenY: -15,
      tokenSize: 525,
      forIds: ["NTY6MzI2OjY2Mw"],
    }),
    new ModuleNpc({
      id: "npc18",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.DKReNCapWWubM3pm",
      page: 58,
      width: 788,
      height: 1378,
      tokenX: -233,
      tokenY: -220,
      tokenSize: 426,
      forIds: ["NTk6Njg6MzUx", "NjA6OTk6MTQ3", "NTc6Njg6NDgz"],
    }),
    new ModuleNpc({
      id: "npc19",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.HF0ymYmKC6KydPQ1",
      page: 59,
      width: 465,
      height: 573,
      tokenX: 94,
      tokenY: 136,
      tokenSize: 685,
      forIds: ["ODk6Njg6NTQz", "NTk6Njg6MzAz"],
    }),
    new ModuleNpc({
      id: "npc20",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.aDgVmO3afhIgXQSN",
      page: 61,
      width: 913,
      height: 971,
      tokenX: -241,
      tokenY: 60,
      tokenSize: 383,
      forIds: ["NDg6MzI2OjQxMQ"],
    }),
    new ModuleNpc({
      id: "npc21",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.7bMhDg4DNqoPlRsF",
      page: 82,
      width: 681,
      height: 1062,
      tokenX: -195,
      tokenY: -181,
      tokenSize: 390,
      forIds: ["MTc6Mjk1OjE1OQ", "ODI6MjUxOjQ5NQ"],
    }),
    new ModuleNpc({
      id: "npc22",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.WXwvWHRpwK17YABQ",
      page: 83,
      width: 988,
      height: 1159,
      tokenX: 121,
      tokenY: -161,
      tokenSize: 907,
      forIds: ["ODM6Njg6NDk1"],
    }),
    new ModuleNpc({
      id: "npc23",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.1eMDYXXf2leLTYHV",
      page: 84,
      width: 1086,
      height: 966,
      tokenX: 42,
      tokenY: -142,
      tokenSize: 582,
      forIds: ["ODQ6MjUxOjU3OQ", "NTE6MzM3OjYyNw"],
    }),
    new ModuleNpc({
      id: "npc24",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.10fEM7T48FUZRo6l",
      page: 85,
      width: 813,
      height: 1038,
      tokenX: -296,
      tokenY: 47,
      tokenSize: 394,
      forIds: ["ODU6Njg6NDk1"],
    }),
    new ModuleNpc({
      id: "npc25",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.aDgVmO3afhIgXQSN",
      name: {
        page: 61,
        x: 320.5573,
        y: 108.5409,
      },
      page: 86,
      width: 1005,
      height: 1011,
      tokenX: -285,
      tokenY: 94,
      tokenSize: 507,
      forIds: ["ODY6MzIwOjM4Nw", "NjA6OTk6OTk"],
    }),
    new ModuleNpc({
      id: "npc26",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.ai7Q9vBHHAGj7uFE",
      page: 87,
      width: 719,
      height: 1049,
      tokenX: -91,
      tokenY: 51,
      tokenSize: 293,
      forIds: ["ODc6Njg6NDM1", "NDU6Njg6NDU5", "NDE6Njg6NTY3"],
    }),
    new ModuleNpc({
      id: "npc27",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.ukL9sApDCIWsVL64",
      label: "BTT",
      forIds: ["NTg6MzI2OjYxNQ"],
    }),
    new ModuleNpc({
      id: "npc28",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.aqW5sp9HPgZgpXxs",
      label: "HG",
      forIds: ["NjA6OTk6MTk1"],
    }),
    new ModuleNpc({
      id: "npc29",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.0ti3f4fdcB5D2bLB",
      label: "CB",
      forIds: ["MjY6MzI2OjExMQ", "NDE6Mjk1OjIxOQ"],
    }),
    new ModuleNpc({
      id: "npc30",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.9vt9Dr2a8MkkD83z",
      label: "C",
      forIds: ["MjA6OTk6MzM5"],
    }),
    new ModuleNpc({
      id: "npc31",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.hzThZ50RRdfTYTKc",
      label: "CPB",
      forIds: ["NjA6MzI2OjU3OQ"],
    }),
    new ModuleNpc({
      id: "npc32",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.8GQ7dq7s9CetOlkg",
      label: "GT",
      forIds: ["MTA6OTk6NDcx"],
    }),
    new ModuleNpc({
      id: "npc33",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.JdMqHbaTwtOHVE7Y",
      label: "DSC",
      forIds: ["MjA6OTk6Mzk5", "MTk6Njg6Njk5"],
    }),
    new ModuleNpc({
      id: "npc34",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.faZ3sXbvs51DFvrM",
      label: "M",
      forIds: ["MTQ6MzI2OjQyMw"],
    }),
    new ModuleNpc({
      id: "npc35",
      actorUuid:
        "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.rAUaIxp3QFgT3bzl",
      label: "NS",
      forIds: ["MjE6Njg6NDIz"],
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
          id: "NzozNzE6MzI3",
        },
        {
          id: "Nzo2ODo2MDM",
        },
        {
          id: "ODo5OTo2OTk",
        },
        {
          id: "ODo5OToyOTE",
        },
        {
          id: "OToyOTU6NTA3",
        },
        {
          id: "OToyOTU6MzUx",
        },
        {
          id: "MTA6OTk6NTMx",
        },
        {
          id: "MTA6MzI2OjQ1OQ",
        },
        {
          id: "MTE6Njg6Njk5",
        },
        {
          id: "MTI6OTk6MzYz",
        },
        {
          id: "MTM6Njg6Njk5",
        },
        {
          id: "MTM6MzkyOjM2Mw",
        },
        {
          id: "MTQ6OTk6NTE5",
        },
        {
          id: "MTQ6MzI2OjIxOQ",
        },
        {
          id: "MTU6MzA0OjY5OQ",
        },
        {
          id: "MTY6OTk6NjYz",
        },
        {
          id: "MTc6Njg6NDgz",
        },
        {
          id: "MTc6Mjk1OjY5OQ",
        },
        {
          id: "MTc6Mjk1OjExMQ",
        },
        {
          id: "MTg6OTk6MTU5",
        },
        {
          id: "MTk6Njg6MTIz",
        },
        {
          id: "MTk6Mjk1OjQ5NQ",
        },
        {
          id: "MjA6Mzc4OjM4Nw",
        },
        {
          id: "MjE6Njg6NjAz",
        },
        {
          id: "MjE6Mjk1OjYyNw",
        },
        {
          id: "MjM6Mjk1OjY5OQ",
        },
      ],
    },
    {
      name: "Chapter 2",
      pages: [
        {
          id: "MjQ6MjU0OjM1Ng",
        },
        {
          id: "MjU6MzcxOjY5OQ",
        },
        {
          id: "MjU6MzcxOjMzOQ",
        },
        {
          id: "NDU6MzA0OjY5OQ",
        },
        {
          id: "MjU6Njg6MjQz",
        },
        {
          id: "MzI6MTA4OjY5OQ",
        },
        {
          id: "MzY6MTA4OjY5OQ",
        },
        {
          id: "MjY6OTk6Njk5",
        },
        {
          id: "Mjk6Njg6NjYz",
        },
        {
          id: "Mjk6Nzc6NTc5",
        },
        {
          id: "Mjk6Nzc6Mzk5",
        },
        {
          id: "Mjk6Mzk5OjUwNw",
        },
        {
          id: "Mjk6MzA0OjM2Mw",
        },
        {
          id: "Mjk6MzA0OjEzNQ",
        },
        {
          id: "MzA6MzM1OjY3NQ",
        },
        {
          id: "MzA6MzM1OjUwNw",
        },
        {
          id: "MzA6MzUyOjQyMw",
        },
        {
          id: "MzA6MzU1OjMwMw",
        },
        {
          id: "MzA6NDQwOjE0Nw",
        },
        {
          id: "MzE6Nzc6NTY3",
        },
        {
          id: "MzE6Nzc6MzYz",
        },
        {
          id: "MzE6Nzc6MjMx",
        },
        {
          id: "MzE6Nzc6MTEx",
        },
        {
          id: "MzE6MzA0OjYwMw",
        },
        {
          id: "MzE6MzA0OjM3NQ",
        },
        {
          id: "MzE6MzA0OjIxOQ",
        },
        {
          id: "MzE6MzA0OjEyMw",
        },
        {
          id: "MzI6MTA4OjQyMw",
        },
        {
          id: "MzI6MzM1OjY5OQ",
        },
        {
          id: "MzI6MzM1OjU5MQ",
        },
        {
          id: "MzI6MzM1OjUzMQ",
        },
        {
          id: "MzI6MzM1OjIxOQ",
        },
        {
          id: "MzI6MzM1OjE3MQ",
        },
        {
          id: "MzI6MzM1OjEyMw",
        },
        {
          id: "MzM6Nzc6NjYz",
        },
        {
          id: "MzM6Nzc6Mjc5",
        },
        {
          id: "MzM6Nzc6MTEx",
        },
        {
          id: "MzM6Mjk1OjY2Mw",
        },
        {
          id: "MzQ6MzI2OjI5MQ",
        },
        {
          id: "MzQ6MzUwOjEzNQ",
        },
        {
          id: "MzY6MzI2OjY1MQ",
        },
        {
          id: "Mzc6Njg6NDEx",
        },
        {
          id: "Mzg6OTk6NDM1",
        },
        {
          id: "Mzk6Njg6NDM1",
        },
        {
          id: "Mzk6Mjk1OjE5NQ",
        },
        {
          id: "NDA6OTk6Njk5",
        },
        {
          id: "NDE6Njg6MjQz",
        },
        {
          id: "NDE6Mjk1OjUzMQ",
        },
        {
          id: "NDM6Mjk1OjY5OQ",
        },
        {
          id: "NDQ6OTk6NTc5",
        },
        {
          id: "NDU6Mjk1OjEzNQ",
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
          id: "NDc6MzcxOjM5OQ",
        },
        {
          id: "NDc6Njg6NDgz",
        },
        {
          id: "NDc6Njg6MTcx",
        },
        {
          id: "NDg6OTk6NTY3",
        },
        {
          id: "NDk6Njg6MjY3",
        },
        {
          id: "NDk6Mjk1OjE3MQ",
        },
        {
          id: "NTA6MzI2OjQ0Nw",
        },
        {
          id: "NTE6Njg6MzYz",
        },
        {
          id: "NTI6OTk6Mzg3",
        },
        {
          id: "NTI6OTk6MjA3",
        },
        {
          id: "NTI6MzI2OjM3NQ",
        },
        {
          id: "NTI6MzI2OjI1NQ",
        },
        {
          id: "NTM6Njg6MzI3",
        },
        {
          id: "NTM6Mjk1OjYxNQ",
        },
        {
          id: "NTM6Mjk1OjMxNQ",
        },
        {
          id: "NTM6Mjk1OjE0Nw",
        },
        {
          id: "NTQ6OTk6MjE5",
        },
        {
          id: "NTU6Njg6MzYz",
        },
        {
          id: "NTU6Njg6MTgz",
        },
        {
          id: "NTY6MzI2OjYxNQ",
        },
        {
          id: "NTY6MzI2OjUzMQ",
        },
        {
          id: "NTY6MzI2OjQ3MQ",
        },
        {
          id: "NTY6MzY0OjM2Mw",
        },
        {
          id: "NTY6Mzg4OjE3MQ",
        },
        {
          id: "NTc6Mjk1OjQyMw",
        },
        {
          id: "NTg6MzUxOjM3NQ",
        },
        {
          id: "NTk6Mjk1OjIxOQ",
        },
        {
          id: "NjE6Njg6NDcx",
        },
      ],
    },
    {
      name: "Back Matter",
      pages: [
        {
          id: "NjM6NzY6NjIx",
        },
        {
          id: "NjM6Mjk1OjQ3MQ",
        },
        {
          id: "NjM6Mjk1OjMyNw",
        },
        {
          id: "NjM6Mjk1OjIxOQ",
        },
        {
          id: "NjU6Mjk1OjY1MQ",
        },
        {
          id: "NjU6Mjk1OjUwNw",
        },
        {
          id: "NjU6Mjk1OjMxNQ",
        },
        {
          id: "NjU6Mjk1OjI0Mw",
        },
        {
          id: "NjU6Mjk1OjE0Nw",
        },
        {
          id: "NjY6OTk6NTU1",
        },
        {
          id: "NjY6MzI2OjYxNQ",
        },
        {
          id: "Njc6Njg6NTc5",
        },
        {
          id: "Njc6Mjk1OjY5OQ",
        },
        {
          id: "Njc6Mjk1OjQ1OQ",
        },
        {
          id: "Njc6Mjk1OjMzOQ",
        },
        {
          id: "Njg6MzI2OjM3NQ",
        },
        {
          id: "Njg6MzI2OjE0Nw",
        },
        {
          id: "Njk6Njg6Njk5",
        },
        {
          id: "Njk6Mjk1OjYzOQ",
        },
        {
          id: "Njk6Mjk1OjM5OQ",
        },
        {
          id: "Nzc6MTAyOjYyMQ",
        },
        {
          id: "Nzc6Njg6NDU5",
        },
        {
          id: "Nzg6OTk6Njk5",
        },
        {
          id: "Nzg6OTk6NDgz",
        },
        {
          id: "Nzg6MzM3OjE3MQ",
        },
        {
          id: "Nzk6ODU6MTEy",
        },
        {
          id: "Nzk6Mjk1OjY5OQ",
        },
        {
          id: "ODA6OTk6Njk5",
        },
        {
          id: "ODA6OTk6NjM5",
        },
        {
          id: "ODA6OTk6Mjkx",
        },
        {
          id: "ODA6Mzg1OjU0Mw",
        },
        {
          id: "ODE6Njg6Njk5",
        },
        {
          id: "ODI6MjUxOjY4Nw",
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
          id: "ODg6MTUzOjYyMg",
        },
        {
          id: "OTA6MTk1OjYyMg",
        },
        {
          id: "OTI6MTU1OjYyMg",
        },
        {
          id: "NDg6MTA4OjY5OQ",
        },
        {
          id: "NTA6MTA4OjY5OQ",
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
  ];
  combines = [
    {
      source: "OTM6Njg6Njk5",
      dest: "OTI6MTU1OjYyMg",
    },
    {
      source: "OTE6Njg6NjM5",
      dest: "OTA6MTk1OjYyMg",
    },
    {
      source: "ODg6MzI2OjI0Mw",
      dest: "ODg6MTUzOjYyMg",
    },
    {
      source: "ODI6MTU4OjY2Mw",
      dest: "ODI6MjUxOjY4Nw",
    },
    {
      source: "ODM6MzcxOjY2Mw",
      dest: "ODM6Njg6Njg3",
    },
    {
      source: "ODU6MzcxOjY2Mw",
      dest: "ODU6Njg6Njg3",
    },
    {
      source: "ODY6MTY1OjY2Mw",
      dest: "ODY6MjUxOjY4Nw",
    },
    {
      source: "ODc6MzcxOjY2Mw",
      dest: "ODc6Njg6Njg3",
    },
    {
      source: "ODQ6MTM2OjY2Mw",
      dest: "ODQ6MjUxOjY4Nw",
    },
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "ALL OR NOTHING" && t.fontId === "ColiseumBold:38",
    );
  }
  preprocess(text) {
    for (let i = 0; i < text.length; i++) {
      [29, 30, 31, 32, 33].includes(text[i].page) &&
        text[i].fontId === "TimesNewRomanPS-BoldMT:9" &&
        text[i].text.startsWith("D") &&
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
    this.markStartOfLine(text, 82, 267.5, 459);
    this.markStartOfLine(text, 82, 266.5, 447);
    this.markStartOfLine(text, 82, 284.5, 411);
    this.markStartOfLine(text, 82, 290.5, 399);
    this.markStartOfLine(text, 82, 299.5, 387);
    this.markStartOfLine(text, 82, 301.5, 375);
    this.markStartOfLine(text, 82, 302.5, 363);
    this.markStartOfLine(text, 82, 297.5, 339);
    this.markStartOfLine(text, 82, 297.5, 327);
    this.markStartOfLine(text, 82, 295.5, 303);
    this.markStartOfLine(text, 82, 309.5, 243);
    this.markStartOfLine(text, 82, 268.5, 159);
    this.markStartOfLine(text, 82, 298.5, 87);
    this.markStartOfLine(text, 84, 275.5, 423);
    this.markStartOfLine(text, 84, 344.5, 375);
    this.markStartOfLine(text, 84, 361.5, 363);
    this.markStartOfLine(text, 84, 368.5, 351);
    this.markStartOfLine(text, 84, 389.5, 327);
    this.markStartOfLine(text, 84, 394.5, 303);
    this.markStartOfLine(text, 84, 319.5, 183);
    this.markStartOfLine(text, 84, 299.5, 159);
    this.markStartOfLine(text, 86, 319.5, 363);
    this.markStartOfLine(text, 86, 315.5, 351);
    this.markStartOfLine(text, 86, 313.5, 339);
    this.markStartOfLine(text, 86, 338.5, 315);
    this.markStartOfLine(text, 86, 340.5, 303);
    this.markStartOfLine(text, 86, 345.5, 291);
    this.markStartOfLine(text, 86, 367.5, 267);
    this.markStartOfLine(text, 86, 368.5, 255);
    this.markStartOfLine(text, 86, 363.5, 231);
    this.markStartOfLine(text, 86, 356.5, 219);
    this.markStartOfLine(text, 86, 356.5, 207);
    this.markStartOfLine(text, 86, 304.5, 183);
    this.markStartOfLine(text, 86, 272.5, 147);
    this.markStartOfLine(text, 86, 456.5, 75);
    this.markStartOfLine(text, 91, 304.75, 615);
    this.markStartOfLine(text, 91, 310.75, 603);
    this.markStartOfLine(text, 91, 309.75, 579);
    this.markStartOfLine(text, 91, 321.75, 543);
    this.markStartOfLine(text, 91, 338.75, 531);
    this.markStartOfLine(text, 91, 353.75, 495);
    this.markStartOfLine(text, 91, 355.75, 483);
    this.markStartOfLine(text, 91, 357.75, 471);
    this.markStartOfLine(text, 91, 359.75, 459);
    this.markStartOfLine(text, 91, 366.75, 423);
    this.markStartOfLine(text, 91, 330.75, 387);
    this.markStartOfLine(text, 91, 369.75, 219);
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
