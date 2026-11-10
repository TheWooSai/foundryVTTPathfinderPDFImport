import { FistsOfTheRubyPhoenixBase } from "./base.js";
import { CaptionImage } from "../../core/images.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class FistsOfTheRubyPhoenix2 extends FistsOfTheRubyPhoenixBase {
  prefix = "fists-of-the-ruby-phoenix-2";
  fullName = "Fists of the Ruby Phoenix - Ready? Fight!";
  pages = [
    this.ChapterHeadingPageLayout(6),
    this.RightSingleColumnWithSidebar(7),
    this.LeftTwoColumnWithLeftCutout(8, 180),
    this.RightTwoColumn(9),
    this.LeftTwoColumn(10),
    this.RightTwoColumn(11),
    this.LeftTwoColumn(12),
    this.RightTwoColumn(13),
    this.LeftTwoColumn(14),
    this.RightTwoColumn(15),
    this.LeftTwoColumn(16),
    this.RightTwoColumn(17),
    this.LeftTwoColumnWithMap(18, 340),
    this.RightTwoColumn(19),
    this.LeftTwoColumn(20),
    this.RightTwoColumn(21),
    this.LeftTwoColumn(22),
    this.RightTwoColumn(23),
    this.LeftTwoColumn(24),
    this.RightTwoColumn(25),
    this.LeftTwoColumnWithMap(26, 340),
    this.RightTwoColumn(27),
    this.LeftTwoColumnWithLeftCutout(28, 160),
    this.RightTwoColumn(29),
    this.LeftTwoColumn(30),
    this.RightTwoColumn(31),
    this.ChapterHeadingPageLayout(32),
    this.RightSingleColumnWithSidebar(33),
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
    this.LeftTwoColumn(44),
    this.RightTwoColumn(45),
    this.LeftTwoColumnWithMap(46, 340),
    this.RightTwoColumnWithRightCutout(47, 430),
    this.LeftTwoColumn(48),
    this.RightTwoColumn(49),
    this.LeftTwoColumnWithMap(50, 340),
    this.RightTwoColumn(51),
    this.LeftTwoColumnWithMap(52, 340),
    this.RightTwoColumn(53),
    this.LeftTwoColumnWithMap(54, 340),
    this.RightTwoColumn(55),
    this.ChapterHeadingPageLayout(56),
    this.RightSingleColumnWithSidebar(57),
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
    this.LeftTwoColumn(70),
    this.RightTwoColumn(71),
    this.LeftTwoColumn(72),
    this.RightTwoColumn(73),
    this.RightChapterHeadingPageLayout(75),
    this.LeftTwoColumn(76),
    this.RightTwoColumnWithRightCutout(77, 550),
    this.LeftTwoColumn(78),
    this.RightTwoColumn(79),
    this.LeftSingleColumnWithSidebar(80),
    this.RightSingleColumnWithSidebar(81),
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
        name: "forp2/map1",
        priority: 0,
      },
      nameInfo: {
        x: 36,
        y: 731.1583,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 1262,
      height: 1637,
      imageLeft: 0,
      imageRight: 1e3,
      imageCols: 10,
      imageTop: 0,
      imageBottom: 1e3,
      imageRows: 10,
      gridType: "gridless",
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/forp/maps/forp2-map1.json",
    }),
    new ModuleScene({
      name: "map2",
      canonical: {
        name: "forp2/map2",
        priority: 0,
      },
      nameInfo: {
        x: 83,
        y: 714.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 18,
      width: 1175,
      height: 784,
      imageLeft: 32,
      imageRight: 1123,
      imageCols: 55,
      imageTop: 18,
      imageBottom: 772,
      imageRows: 38,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/forp/maps/forp2-map2.json",
      journals: [
        {
          x: 1650,
          y: 1050,
          id: "MTk6Njg6MjA3",
        },
      ],
      tokens: [
        {
          id: "npc37",
          x: 4100,
          y: 2300,
        },
      ],
    }),
    new ModuleScene({
      name: "map3",
      canonical: {
        name: "forp2/map3",
        priority: 0,
      },
      nameInfo: {
        x: 83,
        y: 714.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 26,
      width: 1175,
      height: 784,
      imageLeft: 19,
      imageRight: 1155,
      imageCols: 60,
      imageTop: 36,
      imageBottom: 755,
      imageRows: 38,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/forp/maps/forp2-map3.json",
    }),
    new ModuleScene({
      name: "map4",
      canonical: {
        name: "forp2/map4",
        priority: 0,
      },
      nameInfo: {
        x: 83,
        y: 714.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 46,
      width: 1175,
      height: 784,
      imageLeft: 19,
      imageRight: 1155,
      imageCols: 60,
      imageTop: 17,
      imageBottom: 774,
      imageRows: 40,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/forp/maps/forp2-map4.json",
    }),
    new ModuleScene({
      name: "map5",
      canonical: {
        name: "forp2/map5",
        priority: 0,
      },
      nameInfo: {
        x: 83,
        y: 714.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 50,
      width: 1175,
      height: 784,
      imageLeft: 36,
      imageRight: 1150,
      imageCols: 29,
      imageTop: 106,
      imageBottom: 683,
      imageRows: 15,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/forp/maps/forp2-map5.json",
    }),
    new ModuleScene({
      name: "map6",
      canonical: {
        name: "forp2/map6",
        priority: 0,
      },
      nameInfo: {
        x: 83,
        y: 714.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 52,
      width: 1175,
      height: 784,
      imageLeft: 19,
      imageRight: 1155,
      imageCols: 60,
      imageTop: 17,
      imageBottom: 774,
      imageRows: 40,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/forp/maps/forp2-map6.json",
    }),
    new ModuleScene({
      name: "map7",
      canonical: {
        name: "forp2/map7",
        priority: 0,
      },
      nameInfo: {
        x: 83,
        y: 714.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 54,
      width: 1175,
      height: 784,
      imageLeft: 103,
      imageRight: 1045,
      imageCols: 36,
      imageTop: 59,
      imageBottom: 740,
      imageRows: 26,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/forp/maps/forp2-map7.json",
    }),
    new ModuleScene({
      name: "map8",
      canonical: {
        name: "forp2/map8",
        priority: 0,
      },
      nameInfo: {
        x: 666,
        y: 749.694,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 99,
      width: 1261,
      height: 1637,
      imageIndex: 0,
      imageLeft: 31,
      imageRight: 1230,
      imageCols: 31,
      imageTop: 56,
      imageBottom: 1603,
      imageRows: 40,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/forp/maps/forp2-map8.json",
    }),
  ];
  journals = [
    new CaptionImage({
      name: "journal1",
      page: 1,
      width: 1259,
      height: 704,
    }),
    new CaptionImage({
      name: "journal2",
      page: 1,
      width: 1261,
      height: 702,
    }),
    new CaptionImage({
      name: "journal3",
      page: 3,
      width: 570,
      height: 334,
    }),
    new CaptionImage({
      name: "journal4",
      page: 4,
      width: 1261,
      height: 1637,
    }),
    new CaptionImage({
      name: "journal5",
      page: 6,
      width: 1169,
      height: 771,
    }),
    new CaptionImage({
      name: "journal6",
      page: 21,
      width: 458,
      height: 458,
    }),
    new CaptionImage({
      name: "journal7",
      page: 32,
      width: 1169,
      height: 771,
    }),
    new CaptionImage({
      name: "journal8",
      page: 33,
      width: 1017,
      height: 550,
    }),
    new CaptionImage({
      name: "journal9",
      page: 56,
      width: 1169,
      height: 771,
    }),
    new CaptionImage({
      name: "journal10",
      page: 62,
      width: 1262,
      height: 1637,
    }),
    new CaptionImage({
      name: "journal11",
      page: 68,
      width: 1261,
      height: 1636,
    }),
    new CaptionImage({
      name: "journal12",
      page: 74,
      width: 1262,
      height: 1636,
    }),
    new CaptionImage({
      name: "journal13",
      page: 76,
      width: 442,
      height: 442,
    }),
    new CaptionImage({
      name: "journal14",
      page: 76,
      width: 482,
      height: 483,
    }),
    new CaptionImage({
      name: "journal15",
      page: 70,
      width: 1028,
      height: 1200,
    }),
    new CaptionImage({
      name: "journal16",
      page: 72,
      width: 1234,
      height: 857,
    }),
    new CaptionImage({
      name: "journal17",
      page: 75,
      width: 792,
      height: 838,
    }),
    new CaptionImage({
      name: "journal18",
      page: 78,
      width: 823,
      height: 1132,
    }),
    new CaptionImage({
      name: "journal19",
      page: 79,
      width: 805,
      height: 1018,
    }),
    new CaptionImage({
      name: "journal20",
      page: 87,
      width: 828,
      height: 1103,
    }),
    new CaptionImage({
      name: "journal21",
      page: 91,
      width: 838,
      height: 1120,
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 10,
        x: 286.9398,
        y: 455.3752,
      },
      page: 10,
      width: 517,
      height: 519,
      tokenX: 72,
      tokenY: 109,
      tokenSize: 631,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 11,
        x: 245.692,
        y: 438.0002,
      },
      page: 11,
      width: 544,
      height: 544,
      tokenX: 67,
      tokenY: 45,
      tokenSize: 628,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 12,
        x: 290.2027,
        y: 441.753,
      },
      page: 12,
      width: 557,
      height: 535,
      tokenX: 55,
      tokenY: 140,
      tokenSize: 669,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc4",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 13,
        x: 255.606,
        y: 426.0002,
      },
      page: 13,
      width: 544,
      height: 544,
      tokenX: 22,
      tokenY: 101,
      tokenSize: 628,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc5",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.eVKjtiQtDaJpk9Ra",
      page: 16,
      width: 954,
      height: 989,
      tokenX: -241,
      tokenY: 89,
      tokenSize: 457,
      forIds: ["MTY6MzI2OjQ4Mw"],
    }),
    new ModuleNpc({
      id: "npc6",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 17,
        x: 207.5233,
        y: 411.796,
      },
      page: 17,
      width: 571,
      height: 571,
      tokenX: -17,
      tokenY: 78,
      tokenSize: 627,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc7",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.9ksOukuecb43zqOd",
      page: 19,
      width: 548,
      height: 548,
      tokenX: 59,
      tokenY: 186,
      tokenSize: 660,
      forIds: ["OTM6Njg6Njk5", "NjE6Mjk1OjY1MQ"],
    }),
    new ModuleNpc({
      id: "npc8",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 20,
        x: 264.4455,
        y: 432.796,
      },
      page: 20,
      width: 563,
      height: 548,
      tokenX: 48,
      tokenY: 133,
      tokenSize: 675,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc9",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.ybPcnDqULaojoU8a",
      page: 22,
      width: 895,
      height: 1119,
      tokenX: -405,
      tokenY: -95,
      tokenSize: 251,
      forIds: ["MTU6Njg6NDcx", "MjM6Njg6NTY3"],
    }),
    new ModuleNpc({
      id: "npc10",
      actorUuid:
        "Compendium.pf2e.book-of-the-dead-bestiary.Actor.L0JAq1IGEsjJwTbl",
      name: {
        page: 23,
        x: 411.53,
        y: 132.2502,
      },
      page: 23,
      width: 803,
      height: 1217,
      tokenX: -186,
      tokenY: -22,
      tokenSize: 349,
      forIds: ["MjM6Njg6Mjc5"],
    }),
    new ModuleNpc({
      id: "npc11",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.6Eh9w3FY129KXm7k",
      page: 25,
      width: 563,
      height: 548,
      tokenX: 30,
      tokenY: 128,
      tokenSize: 647,
      forIds: ["MjU6Njg6NDU5", "NTM6Mjk1OjI0Mw"],
    }),
    new ModuleNpc({
      id: "npc12",
      actorUuid: "Compendium.pf2e.lost-omens-bestiary.Actor.jqcAeid4jcx9Lrjc",
      page: 27,
      width: 1279,
      height: 1279,
      tokenX: -264,
      tokenY: -210,
      tokenSize: 607,
      forIds: ["MjY6OTk6MTQ3"],
    }),
    new ModuleNpc({
      id: "npc13",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 28,
        x: 282.7576,
        y: 405.2502,
      },
      page: 28,
      width: 591,
      height: 575,
      tokenX: 63,
      tokenY: 139,
      tokenSize: 703,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc14",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.7qyR096MhufccSiM",
      page: 30,
      width: 683,
      height: 1246,
      tokenX: -139,
      tokenY: 28,
      tokenSize: 490,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc15",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 34,
        x: 260.5,
        y: 430.9633,
      },
      page: 34,
      width: 571,
      height: 554,
      tokenX: 37,
      tokenY: 155,
      tokenSize: 683,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc16",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.xBSLIoVsZ6I4LOZc",
      name: {
        page: 36,
        x: 129.0109,
        y: 144.2502,
      },
      page: 36,
      width: 761,
      height: 1237,
      tokenX: -204,
      tokenY: 9,
      tokenSize: 397,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc17",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.0N4ugHFs5GYllcMA",
      page: 39,
      width: 740,
      height: 1196,
      tokenX: -306,
      tokenY: -8,
      tokenSize: 440,
      forIds: ["Mzg6MzI2OjE5NQ"],
    }),
    new ModuleNpc({
      id: "npc18",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.xiQIw7iFjOizo3Fm",
      page: 41,
      width: 554,
      height: 768,
      tokenX: 107,
      tokenY: 0,
      tokenSize: 768,
      forIds: ["NDA6MzI2OjI1NQ"],
    }),
    new ModuleNpc({
      id: "npc19",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.zFye7hJzzwgajovA",
      page: 42,
      width: 882,
      height: 1175,
      tokenX: 147,
      tokenY: 0,
      tokenSize: 1175,
      forIds: ["NDM6Njg6NTA3"],
    }),
    new ModuleNpc({
      id: "npc20",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.Lk4LPjGsidzuD6Vy",
      page: 44,
      width: 830,
      height: 1138,
      tokenX: 154,
      tokenY: 0,
      tokenSize: 1138,
      forIds: ["NDQ6MzI2OjU2Nw"],
    }),
    new ModuleNpc({
      id: "npc21",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.cg1kQPO3FBSCFDVt",
      page: 57,
      width: 805,
      height: 1225,
      tokenX: -167,
      tokenY: -8,
      tokenSize: 357,
      forIds: ["NTc6Njg6MTQ3", "ODI6MjgyOjU2Nw", "NjE6Mjk1OjU1NQ"],
    }),
    new ModuleNpc({
      id: "npc22",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.iQ1wsuosURrA6tUI",
      page: 58,
      width: 815,
      height: 1240,
      tokenX: -348,
      tokenY: -357,
      tokenSize: 596,
      forIds: ["NTg6MzM5OjE3MQ"],
    }),
    new ModuleNpc({
      id: "npc23",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.VGJF0jWWnA4ljfZE",
      page: 60,
      width: 1112,
      height: 1398,
      tokenX: 143,
      tokenY: 0,
      tokenSize: 1398,
      forIds: ["NTk6Mjk1Ojk5", "NjE6Mjk1OjYwMw"],
    }),
    new ModuleNpc({
      id: "npc24",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 64,
        x: 273.9146,
        y: 420.2502,
      },
      page: 64,
      width: 585,
      height: 574,
      tokenX: 50,
      tokenY: 130,
      tokenSize: 697,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc25",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 65,
        x: 238.3733,
        y: 420.2502,
      },
      page: 65,
      width: 485,
      height: 576,
      tokenX: 175,
      tokenY: 104,
      tokenSize: 660,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc26",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 67,
        x: 250.1907,
        y: 108.2501,
      },
      page: 67,
      width: 661,
      height: 1265,
      tokenX: -170,
      tokenY: -52,
      tokenSize: 369,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc28",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.EItI5u34FIIuZM9W",
      page: 80,
      width: 709,
      height: 667,
      tokenX: -165,
      tokenY: -37,
      tokenSize: 345,
      forIds: ["ODA6MjUxOjQ1OQ", "MjI6OTk6Njk5"],
    }),
    new ModuleNpc({
      id: "npc29",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.lemXhFkFAUbZGtL6",
      page: 81,
      width: 1001,
      height: 786,
      tokenX: 0,
      tokenY: 108,
      tokenSize: 1001,
      forIds: ["ODE6Njg6NTU1", "MjY6OTk6OTk"],
    }),
    new ModuleNpc({
      id: "npc30",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.cg1kQPO3FBSCFDVt",
      page: 82,
      width: 953,
      height: 1100,
      tokenX: -257,
      tokenY: -27,
      tokenSize: 288,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc31",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.6wRicVhIx07i94s3",
      page: 83,
      width: 820,
      height: 1153,
      tokenX: -241,
      tokenY: 27,
      tokenSize: 313,
      forIds: ["ODM6Njg6NjI3", "NTM6Njg6NjI3"],
    }),
    new ModuleNpc({
      id: "npc32",
      actorUuid: "Compendium.pf2e.lost-omens-bestiary.Actor.0yF82Lo495lKarLS",
      page: 84,
      width: 1101,
      height: 1101,
      tokenX: -461,
      tokenY: -103,
      tokenSize: 401,
      forIds: ["ODQ6MzU1OjQxMQ"],
    }),
    new ModuleNpc({
      id: "npc33",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.k5UjbiYr87NVK7qp",
      page: 85,
      width: 875,
      height: 834,
      tokenX: 0,
      tokenY: 21,
      tokenSize: 875,
      forIds: ["NTk6Njg6OTk", "ODU6Njg6NDQ3", "NTc6Njg6OTk"],
    }),
    new ModuleNpc({
      id: "npc34",
      actorUuid:
        "Compendium.pf2e.book-of-the-dead-bestiary.Actor.L0JAq1IGEsjJwTbl",
      page: 89,
      width: 780,
      height: 1118,
      tokenX: -257,
      tokenY: 23,
      tokenSize: 306,
      forIds: ["ODk6Njg6NTE5"],
    }),
    new ModuleNpc({
      id: "npc35",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.YCfpTifMs2minJrF",
      page: 91,
      width: 838,
      height: 1120,
      tokenX: 141,
      tokenY: 0,
      tokenSize: 1120,
      forIds: ["OTE6Njg6MTcx"],
    }),
    new ModuleNpc({
      id: "npc36",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.9ksOukuecb43zqOd",
      page: 93,
      width: 869,
      height: 1246,
      tokenX: 189,
      tokenY: 0,
      tokenSize: 1246,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc37",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.EDeiF3PNtXUeBU6P",
      label: "AR",
      forIds: ["MTk6Mjk1OjExMQ"],
    }),
    new ModuleNpc({
      id: "npc38",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.koRKlywSbwttifEq",
      label: "A",
      forIds: ["NDI6MzI2OjMwMw"],
    }),
    new ModuleNpc({
      id: "npc39",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.vgMFPC9SoC3eyNSs",
      label: "M",
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc40",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.FwIJpQn1FIpGgvIY",
      label: "AR",
      forIds: ["Mzc6Njg6Mjc5"],
    }),
    new ModuleNpc({
      id: "npc41",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.SF6OlCfNiHvtJQjw",
      label: "BV(1",
      forIds: ["Mzg6OTk6MTU5"],
    }),
    new ModuleNpc({
      id: "npc42",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.zj3s5CUsTjRRiROd",
      label: "CS",
      forIds: ["OTA6MzI2OjIzMQ"],
    }),
    new ModuleNpc({
      id: "npc43",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-3.Actor.Wu6vmegKwR4bgLse",
      label: "D",
      forIds: ["MjI6OTk6NjUx"],
    }),
    new ModuleNpc({
      id: "npc44",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.DxV2vH17H789bJ6y",
      label: "A",
      forIds: ["MjE6Njg6MzI3"],
    }),
    new ModuleNpc({
      id: "npc45",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.BcRxQjtyMNgiEpvb",
      label: "FF",
      forIds: ["NDY6MzI2OjMzOQ"],
    }),
    new ModuleNpc({
      id: "npc46",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.PooDdJo4wmkBvETW",
      label: "FFT",
      forIds: ["NDc6Njg6Njk5"],
    }),
    new ModuleNpc({
      id: "npc47",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.KfpYMKJ1ka9volP6",
      label: "GM",
      forIds: ["Mzc6Njg6NTA3"],
    }),
    new ModuleNpc({
      id: "npc48",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.gGDWBzon2T2mrSqf",
      label: "H",
      forIds: ["NDE6Njg6NDU5"],
    }),
    new ModuleNpc({
      id: "npc49",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.ghAlcSfpO03JLvwG",
      label: "J(1",
      forIds: ["Mjk6Njg6Njk5"],
    }),
    new ModuleNpc({
      id: "npc50",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.PhFDdGFXaaiLe4k4",
      label: "J",
      forIds: ["NDM6Mjk1OjY5OQ"],
    }),
    new ModuleNpc({
      id: "npc51",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.i3dC41mOjfoBxQTk",
      label: "JR",
      forIds: ["NDQ6MzI2OjE0Nw"],
    }),
    new ModuleNpc({
      id: "npc52",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.qV1bsHLfgI8xh0Nr",
      label: "L",
      forIds: ["Mzc6Mjk1OjUxOQ"],
    }),
    new ModuleNpc({
      id: "npc53",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.blm15iXMR3Lbwdom",
      label: "MA",
      forIds: ["NDA6OTk6MjE5"],
    }),
    new ModuleNpc({
      id: "npc54",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.ZoBq423Q9PMa3rDV",
      label: "MX",
      forIds: ["MjU6MzQxOjQ3MQ", "NTM6Mjk1OjE5NQ"],
    }),
    new ModuleNpc({
      id: "npc55",
      actorUuid:
        "Compendium.pf2e.book-of-the-dead-bestiary.Actor.ZSrMFLrb5CzFH5WX",
      label: "PJ",
      forIds: ["ODg6MjUxOjIxOQ"],
    }),
    new ModuleNpc({
      id: "npc56",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.Fwjqlg5gsZwx1FuC",
      label: "QF",
      forIds: ["OTA6MzI2OjU5MQ"],
    }),
    new ModuleNpc({
      id: "npc57",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.9WcpNMJJqF3cLTqT",
      label: "R(1",
      forIds: ["Mzk6Njg6MjU1"],
    }),
    new ModuleNpc({
      id: "npc58",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.4RaeyGxw5EgagDZE",
      label: "SH",
      forIds: ["NDE6Mjk1OjU5MQ"],
    }),
    new ModuleNpc({
      id: "npc59",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.8jNxwdzrSMFyoHJ5",
      label: "ST",
      forIds: ["OTE6Njg6NDU5"],
    }),
    new ModuleNpc({
      id: "npc60",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.aiiUNGDPljyMuFu2",
      label: "ST(1",
      forIds: ["Mzc6Mjk1OjExMQ"],
    }),
    new ModuleNpc({
      id: "npc61",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.1y2FBsV4g80KNac1",
      label: "T(1",
      forIds: ["Mjk6Njg6MTQ3"],
    }),
    new ModuleNpc({
      id: "npc62",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.luPebMfNmwtOZcWR",
      label: "T",
      forIds: ["MzA6NDE5OjQxMQ"],
    }),
    new ModuleNpc({
      id: "npc63",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.7pCof1aDBZ1XlsXO",
      label: "TT(1",
      forIds: ["Mjg6MzcwOjYyNw"],
    }),
    new ModuleNpc({
      id: "npc64",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.TTEcqxuMqzIdkX6q",
      label: "TF",
      forIds: ["NDU6Njg6Mjkx"],
    }),
    new ModuleNpc({
      id: "npc65",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.l2oapyRhfCFRsCHX",
      label: "U",
      forIds: ["NDI6OTk6NjYz"],
    }),
    new ModuleNpc({
      id: "npc66",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.H5koEzKL8qtfX4fK",
      label: "UL",
      forIds: ["NDM6Mjk1OjIzMQ"],
    }),
    new ModuleNpc({
      id: "npc67",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.7qyR096MhufccSiM",
      label: "YtJ(1",
      forIds: ["Mjk6Mjk1OjI3OQ"],
    }),
    new ModuleNpc({
      id: "npc68",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.zmE4irZj6a2WpB6f",
      label: "YM",
      forIds: ["MzY6MzQyOjI2Nw"],
    }),
  ];
  journalPages = [
    {
      name: "Chapter 1",
      pages: [
        {
          id: "NjoyNTk6Mzcx",
        },
        {
          id: "NzozNzE6Njk5",
        },
        {
          id: "NzozNzE6NDM1",
        },
        {
          id: "ODoxMTU6Njg3",
        },
        {
          id: "Mjg6MTE1OjY4Nw",
        },
        {
          id: "Nzo2ODo1OTE",
        },
        {
          id: "ODo5OToxNzE",
        },
        {
          id: "ODozMjY6NDIz",
        },
        {
          id: "OTo2ODo2OTk",
        },
        {
          id: "MTI6OTk6MTU5",
        },
        {
          id: "MTM6Njg6NDgz",
        },
        {
          id: "MTQ6OTk6MzM5",
        },
        {
          id: "MTQ6MzI2OjQ1OQ",
        },
        {
          id: "MTU6Mjk0OjI0Mw",
        },
        {
          id: "MTc6Njg6Mjkx",
        },
        {
          id: "MTk6Njg6MjA3",
        },
        {
          id: "MjA6Mzg5OjU5MQ",
        },
        {
          id: "MjE6Mjk1OjQ5NQ",
        },
        {
          id: "MjI6MzI2OjY5OQ",
        },
        {
          id: "MjI6MzgyOjQ0Nw",
        },
        {
          id: "MjM6Njg6NDEx",
        },
        {
          id: "MjQ6OTk6NDgz",
        },
        {
          id: "MjU6Mjk1OjEyMw",
        },
        {
          id: "MjY6MzI2Ojk5",
        },
        {
          id: "Mjc6Njg6MTEx",
        },
        {
          id: "MzA6MzI2OjY5OQ",
        },
        {
          id: "MzA6NDE3OjM2Mw",
        },
        {
          id: "MzE6Njg6MTIz",
        },
      ],
    },
    {
      name: "Chapter 2",
      pages: [
        {
          id: "MzI6MjU2OjM3MQ",
        },
        {
          id: "MzM6MzcxOjY5OQ",
        },
        {
          id: "NDc6MzExOjY4Nw",
        },
        {
          id: "MzI6OTk6MTcx",
        },
        {
          id: "MzQ6OTk6MzE1",
        },
        {
          id: "MzQ6Mzc4OjU2Nw",
        },
        {
          id: "MzQ6MzI2OjMwMw",
        },
        {
          id: "MzU6Njg6MTk1",
        },
        {
          id: "MzU6Mjk1OjY5OQ",
        },
        {
          id: "MzY6MzQyOjI5MQ",
        },
        {
          id: "Mzc6Mjk1OjEzNQ",
        },
        {
          id: "NDA6OTk6MjQz",
        },
        {
          id: "NDI6MzI2OjMyNw",
        },
        {
          id: "NDM6Mjk1OjMzOQ",
        },
        {
          id: "NDM6Mjk1OjI1NQ",
        },
        {
          id: "NDU6Mjk1OjMyNw",
        },
        {
          id: "NDY6OTk6MzM5",
        },
        {
          id: "NDc6Njg6MzUx",
        },
        {
          id: "NDc6Njg6MjE5",
        },
        {
          id: "NDg6OTk6NTE5",
        },
        {
          id: "NDg6OTk6Mzk5",
        },
        {
          id: "NDg6OTk6MjU1",
        },
        {
          id: "NDg6OTk6MTgz",
        },
        {
          id: "NDg6MzI2OjY5OQ",
        },
        {
          id: "NTA6OTk6MzI3",
        },
        {
          id: "NTA6OTk6MTcx",
        },
        {
          id: "NTA6MzI2OjMzOQ",
        },
        {
          id: "NTI6OTk6MzM5",
        },
        {
          id: "NTI6OTk6MTk1",
        },
        {
          id: "NTI6MzI2OjMzOQ",
        },
        {
          id: "NTM6Njg6NTQz",
        },
        {
          id: "NTM6Njg6Mzk5",
        },
        {
          id: "NTM6Njg6MjMx",
        },
        {
          id: "NTM6Njg6MTEx",
        },
        {
          id: "NTQ6OTk6MTIz",
        },
        {
          id: "NTQ6MzI2OjI1NQ",
        },
        {
          id: "NTQ6MzI2Ojg3",
        },
        {
          id: "NTU6Njg6MzM5",
        },
        {
          id: "NTU6Njg6MjE5",
        },
        {
          id: "NTU6Mjk1OjQzNQ",
        },
      ],
    },
    {
      name: "Chapter 3",
      pages: [
        {
          id: "NTY6MjUzOjM3MQ",
        },
        {
          id: "NTc6MzcxOjY5OQ",
        },
        {
          id: "NTc6Njg6NTU1",
        },
        {
          id: "NTc6Njg6MzYz",
        },
        {
          id: "NTg6MzI2OjY1MQ",
        },
        {
          id: "NTk6Njg6MjQz",
        },
        {
          id: "NTk6Mjk1OjY5OQ",
        },
        {
          id: "NjE6Njg6MjY3",
        },
        {
          id: "NjE6Mjk1OjI5MQ",
        },
      ],
    },
    {
      name: "Back Matter",
      pages: [
        {
          id: "NjM6MjA1OjYyOQ",
        },
        {
          id: "NjM6Njg6MTk1",
        },
        {
          id: "NjQ6OTk6MzYz",
        },
        {
          id: "NjQ6MzI2OjI3OQ",
        },
        {
          id: "NjQ6MzI2Ojk5",
        },
        {
          id: "NjU6Njg6NDcx",
        },
        {
          id: "NjU6Mzk4OjQ1OQ",
        },
        {
          id: "NjU6Mjk1OjIxOQ",
        },
        {
          id: "NjY6OTk6NTMx",
        },
        {
          id: "NjY6OTk6MTcx",
        },
        {
          id: "NjY6MzI2OjQ0Nw",
        },
        {
          id: "Njk6MTE5OjY1OQ",
        },
        {
          id: "NzA6OTk6Njk5",
        },
        {
          id: "NzA6MzU2OjMyNw",
        },
        {
          id: "NzE6Njg6Njk5",
        },
        {
          id: "NzE6Mjk1OjMxNQ",
        },
        {
          id: "NzI6OTk6Njk5",
        },
        {
          id: "NzI6MzI2OjU2Nw",
        },
        {
          id: "NzM6Njg6Njk5",
        },
        {
          id: "NzM6Mjk1OjQ0Nw",
        },
        {
          id: "NzU6MTMyOjY1OA",
        },
        {
          id: "NzY6OTk6Njk5",
        },
        {
          id: "Nzc6Njg6Mjc5",
        },
        {
          id: "Nzg6OTk6Njk5",
        },
        {
          id: "Nzk6Njg6Njk5",
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
          id: "ODY6MjUxOjU2Nw",
        },
        {
          id: "ODY6MjUxOjMwMw",
        },
        {
          id: "ODg6MjUxOjU0Mw",
        },
        {
          id: "ODg6MjUxOjI2Nw",
        },
        {
          id: "ODk6Njg6NTkx",
        },
        {
          id: "OTA6MTk5OjY2Ng",
        },
        {
          id: "OTA6OTk6MzUx",
        },
        {
          id: "OTI6MjQ3OjY2Ng",
        },
        {
          id: "OTI6MzI2OjM2Mw",
        },
        {
          id: "Nzc6MzExOjY4Nw",
        },
        {
          id: "ODA6MTgzOjY2Mw",
        },
        {
          id: "ODE6MzcxOjY2Mw",
        },
        {
          id: "ODI6MTMyOjY2Mw",
        },
        {
          id: "ODM6MzcxOjY2Mw",
        },
        {
          id: "ODQ6MTYwOjY2Mw",
        },
        {
          id: "ODU6MzcxOjY2Mw",
        },
        {
          id: "ODY6MTMyOjY2Mw",
        },
        {
          id: "ODc6MzcxOjY2Mw",
        },
        {
          id: "ODg6MTEwOjY2Mw",
        },
        {
          id: "ODk6MzcxOjY2Mw",
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
  combines = [];
  detect(pdf) {
    return (
      pdf.textDetails.some(
        (t) => t.text.trim() === "Ready?" && t.fontId === "Gin-Regular:40",
      ) &&
      !pdf.textDetails.some(
        (t) =>
          t.text.trim() === "INTERACTIVE MAPS" && t.fontName === "Dax-Bold",
      )
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    this.markStartOfLine(text, 10, 387.25, 579);
    this.markStartOfLine(text, 10, 387.25, 567);
    this.markStartOfLine(text, 10, 385.25, 555);
    this.markStartOfLine(text, 10, 388.25, 519);
    this.markStartOfLine(text, 10, 387.03, 447);
    this.markStartOfLine(text, 11, 327.75, 651);
    this.markStartOfLine(text, 11, 354.75, 591);
    this.markStartOfLine(text, 11, 354.75, 555);
    this.markStartOfLine(text, 16, 450.25, 351);
    this.markStartOfLine(text, 16, 448.25, 339);
    this.markStartOfLine(text, 16, 357.25, 303);
    this.markIndented(text, 20, 99, 279);
    this.markIndented(text, 20, 99, 267);
    this.markIndented(text, 20, 99, 255);
    this.markIndented(text, 20, 99, 243);
    this.markIndented(text, 20, 99, 231);
    this.markIndented(text, 20, 99, 219);
    this.markIndented(text, 20, 99, 207);
    this.markStartOfLine(text, 22, 382.3099, 447);
    this.markStartOfLine(text, 25, 339.75, 435);
    this.markStartOfLine(text, 25, 333.2083, 423);
    this.markStartOfLine(text, 25, 333.2084, 411);
    this.markStartOfLine(text, 25, 312.75, 219);
    this.markStartOfLine(text, 28, 416.25, 591);
    this.markStartOfLine(text, 28, 416.25, 579);
    this.markStartOfLine(text, 28, 416.25, 555);
    this.markStartOfLine(text, 28, 431.25, 519);
    this.markStartOfLine(text, 28, 440.25, 495);
    this.markStartOfLine(text, 28, 440.25, 435);
    this.markStartOfLine(text, 28, 432.25, 423);
    this.markStartOfLine(text, 28, 413.25, 399);
    this.markStartOfLine(text, 28, 373.5548, 387);
    this.markIndented(text, 34, 371.25, 627);
    this.markIndented(text, 34, 379.25, 603);
    this.markIndented(text, 36, 344.25, 507);
    this.markIndented(text, 36, 338.25, 519);
    this.markIndented(text, 36, 343.25, 483);
    this.markStartOfLine(text, 36, 352.25, 231);
    this.markStartOfLine(text, 36, 350.25, 219);
    this.markStartOfLine(text, 41, 335.75, 363);
    this.markStartOfLine(text, 41, 339.75, 351);
    this.markStartOfLine(text, 41, 339.75, 327);
    this.markStartOfLine(text, 41, 390.75, 291);
    this.markStartOfLine(text, 41, 408.75, 255);
    this.markStartOfLine(text, 41, 341.75, 147);
    this.markStartOfLine(text, 42, 366.25, 483);
    this.markStartOfLine(text, 42, 358.2499, 423);
    this.markStartOfLine(text, 42, 333.2499, 255);
    this.markStartOfLine(text, 42, 339.2499, 243);
    this.markStartOfLine(text, 42, 341.2499, 219);
    this.markStartOfLine(text, 44, 378.25, 495);
    this.markStartOfLine(text, 44, 379.25, 483);
    this.markStartOfLine(text, 44, 369.25, 447);
    this.markStartOfLine(text, 44, 366.25, 435);
    this.markStartOfLine(text, 44, 361.25, 423);
    this.markStartOfLine(text, 44, 357.25, 411);
    this.markStartOfLine(text, 44, 353.25, 375);
    this.markStartOfLine(text, 44, 328.25, 315);
    this.markStartOfLine(text, 44, 332.25, 303);
    this.markStartOfLine(text, 44, 350.25, 279);
    this.markStartOfLine(text, 44, 352.25, 255);
    this.markStartOfLine(text, 44, 347.25, 231);
    this.markIndented(text, 46, 326.25, 135);
    this.markIndented(text, 46, 326.25, 123);
    this.markIndented(text, 46, 326.25, 111);
    this.markIndented(text, 46, 326.25, 99);
    this.markIndented(text, 46, 326.25, 87);
    this.markStartOfLine(text, 58, 360.25, 471);
    this.markStartOfLine(text, 58, 365.25, 339);
    this.markIndented(text, 60, 360.25, 483);
    this.markIndented(text, 60, 365.25, 471);
    this.markIndented(text, 60, 370.25, 459);
    this.markStartOfLine(text, 60, 378.25, 447);
    this.markIndented(text, 60, 373.25, 375);
    this.markIndented(text, 60, 375.25, 363);
    this.markIndented(text, 60, 385.25, 351);
    this.markStartOfLine(text, 60, 412.25, 315);
    this.markStartOfLine(text, 60, 420.25, 279);
    this.markStartOfLine(text, 76, 360.2501, 399);
    this.markStartOfLine(text, 76, 365.2501, 387);
    this.markStartOfLine(text, 76, 354.2501, 327);
    this.markStartOfLine(text, 76, 336.2501, 267);
    this.markStartOfLine(text, 76, 345.25, 495);
    this.markStartOfLine(text, 78, 332.25, 219);
    this.markStartOfLine(text, 78, 333.25, 195);
    this.markStartOfLine(text, 82, 287.5, 543);
    this.markStartOfLine(text, 82, 289.5, 531);
    this.markStartOfLine(text, 82, 288.5, 519);
    this.markStartOfLine(text, 82, 283.5, 495);
    this.markStartOfLine(text, 82, 273.5, 483);
    this.markStartOfLine(text, 82, 278.5, 471);
    this.markStartOfLine(text, 82, 281.5, 459);
    this.markStartOfLine(text, 82, 281.5, 447);
    this.markStartOfLine(text, 82, 279.5, 435);
    this.markStartOfLine(text, 82, 276.5, 423);
    this.markStartOfLine(text, 82, 268.5, 399);
    this.markStartOfLine(text, 84, 357.5, 387);
    this.markStartOfLine(text, 84, 360.5, 363);
    this.markStartOfLine(text, 84, 358.5, 375);
    this.markStartOfLine(text, 84, 360.5, 351);
    this.markStartOfLine(text, 84, 360.5, 339);
    this.markStartOfLine(text, 84, 356.5, 327);
    this.markStartOfLine(text, 84, 357.5, 315);
    this.markStartOfLine(text, 84, 355.5, 303);
    this.markIndented(text, 46, 326.25, 279);
    this.markIndented(text, 46, 326.25, 267);
    this.markIndented(text, 47, 67.5, 639);
    this.markIndented(text, 47, 67.5, 627);
    this.markIndented(text, 90, 326.25, 543);
    this.markIndented(text, 90, 326.25, 531);
    this.markIndented(text, 90, 326.25, 171);
    this.markIndented(text, 90, 326.25, 159);
    this.markIndented(text, 91, 67.5, 99);
    this.markIndented(text, 91, 67.5, 87);
    this.markIndented(text, 91, 67.5, 615);
    this.markIndented(text, 91, 67.5, 603);
    this.markIndented(text, 91, 67.5, 591);
    this.markIndented(text, 91, 67.5, 579);
    this.markIndented(text, 91, 67.5, 567);
    this.markIndented(text, 91, 67.5, 555);
    this.markIndented(text, 91, 67.5, 543);
    this.markIndented(text, 91, 67.5, 531);
    this.markIndented(text, 91, 67.5, 519);
    this.markIndented(text, 91, 67.5, 507);
    this.markIndented(text, 91, 67.5, 411);
    return super.extractDetails(text, moduleData, sectionKey);
  }
}
