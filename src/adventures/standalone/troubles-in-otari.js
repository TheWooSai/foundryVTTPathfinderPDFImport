import { AdventureBase } from "../../core/adventure-base.js";
import { AdventureImage, CaptionImage } from "../../core/images.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class TroublesInOtari extends AdventureBase {
  prefix = "troubles-in-otari";
  fullName = "Troubles in Otari";
  blacklistedFonts = [
    "Times-Italic:8",
    "RomicStd-Bold:12",
    "TradeGothicLTStd-BdCn20:12",
    "TradeGothicLTStd-BdCn20:8",
    "Taroca:12",
    "TradeGothicLTStd-BdCn20:11.0714",
  ];
  headingFontIds = [
    "GoodOT-Bold:14",
    "RomicStd-Bold:14",
    "GoodOT-CondBold:12",
    "GoodOT-Cond:13",
    "GoodOT-CondBold:14",
    "GoodOT-CondBold:15",
    "AlembicBeta-RegularOne:38",
    "AlembicBeta-RegularOne:14",
    "AlembicBeta-RegularOne:36",
    "AlembicBeta-RegularOne:30",
    "AlembicBeta-RegularOne:52",
  ];
  subheadingFontIds = ["Gin-Regular:12", "Gin-Regular:14", "Gin-Round:12"];
  normalFontIds = [
    "SabonLTStd-Roman:9",
    "Sabon-Roman:9",
    "Gin-Regular-SC700:9",
    "GoodOT:8.5",
  ];
  italicFontIds = [
    "SabonLTStd-Italic:9",
    "TimesNewRomanPS-ItalicMT:9",
    "GoodOT-Italic:8.5",
  ];
  boldFontIds = [
    "TimesNewRomanPS-BoldMT:9",
    "TimesNewRomanPSMT:9",
    "Sabon-Bold:9",
    "SabonLTStd-Bold:9",
    "Times-Bold:9",
    "GoodOT-Bold:8.5",
    "TimesNewRomanPS-BoldItalicMT:9",
  ];
  dropCapFontIds = [];
  paragraphFontIds = this.subheadingFontIds
    .concat(this.normalFontIds)
    .concat(this.italicFontIds)
    .concat(this.boldFontIds);
  pageTop = 700;
  pageBottom = 40;
  LeftPageTwoColumn = {
    col1X1: 99,
    col1X2: 320,
    col2X1: 326.25,
    col2X2: 550,
  };
  RightPageTwoColumn = {
    col1X1: 67.5,
    col1X2: 290,
    col2X1: 294.75,
    col2X2: 510,
  };
  pages = [
    this.ChapterHeadingPageLayout(6),
    this.RightTwoColumn(7),
    this.ChapterHeadingPageLayout(8),
    this.RightTwoColumn(9),
    this.LeftTwoColumnWithLeftCutout(10, 450),
    this.RightTwoColumnWithRightCutout(11, 200),
    this.LeftTwoColumn(12),
    this.RightTwoColumnWithRightCutout(13, 300),
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
    this.ChapterHeadingPageLayout(24),
    this.RightTwoColumnWithRightCutout(25, 490),
    this.LeftTwoColumn(26),
    this.LeftTwoColumn(28),
    this.RightTwoColumn(29),
    this.LeftTwoColumn(30),
    this.RightTwoColumn(31),
    this.LeftTwoColumn(32),
    this.RightTwoColumn(33),
    this.LeftTwoColumn(34),
    this.RightTwoColumn(35),
    this.LeftTwoColumn(36),
    this.RightTwoColumn(37),
    this.LeftTwoColumn(38),
    this.RightTwoColumn(39),
    this.ChapterHeadingPageLayout(40),
    this.RightTwoColumnWithMap(41, 425),
    this.LeftTwoColumn(42),
    this.RightTwoColumn(43),
    this.LeftTwoColumnWithLeftCutout(44, 390),
    this.RightTwoColumnWithRightCutout(45, 370),
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
    this.RightChapterHeadingPageLayout(57),
    this.LeftTwoColumn(58),
    this.RightTwoColumn(59),
    this.LeftTwoColumn(60),
    this.RightTwoColumn(61),
    this.LeftTwoColumn(62),
    this.RightTwoColumn(63),
    this.LeftTwoColumn(64),
    this.RightTwoColumn(65),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      canonical: {
        name: "toi/map1",
        priority: 0,
      },
      nameInfo: {
        x: 28.6835,
        y: 747.6781,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 1551,
      height: 1246,
      imageLeft: 12,
      imageRight: 1538,
      imageCols: 24,
      imageTop: 14,
      imageBottom: 1234,
      imageRows: 30,
      rotateCW: 3,
      globalLight: true,
      detailsFile: "/standalone/maps/toi-map1.json",
      journals: [
        {
          x: 2700,
          y: 3050,
          id: "MTQ6MzI2OjY5OQ",
        },
        {
          x: 2450,
          y: 1350,
          id: "MTQ6MzI2OjM4Nw",
        },
        {
          x: 1050,
          y: 3450,
          id: "MTU6Njg6NjAz",
        },
        {
          x: 1650,
          y: 3450,
          id: "MTU6Mjk1OjU2Nw",
        },
        {
          x: 1950,
          y: 1650,
          id: "MTU6Mjk1OjQ4Mw",
        },
        {
          x: 1500,
          y: 1300,
          id: "MTY6MzI2OjY2Mw",
        },
        {
          x: 1950,
          y: 2250,
          id: "MTc6Njg6NTMx",
        },
        {
          x: 1950,
          y: 1950,
          id: "MTc6Njg6NDEx",
        },
        {
          x: 1650,
          y: 2050,
          id: "MTc6Mjk1OjY2Mw",
        },
        {
          x: 1950,
          y: 2650,
          id: "MTc6Mjk1OjQ0Nw",
        },
        {
          x: 1550,
          y: 2750,
          id: "MTg6MzI2OjUwNw",
        },
        {
          x: 1450,
          y: 2250,
          id: "MTk6Njg6MjY3",
        },
        {
          x: 1150,
          y: 2750,
          id: "MjA6OTk6NTMx",
        },
        {
          x: 1150,
          y: 2550,
          id: "MjA6OTk6MTgz",
        },
        {
          x: 1150,
          y: 2350,
          id: "MjA6MzI2OjQ5NQ",
        },
        {
          x: 1150,
          y: 1750,
          id: "MjE6Mjk1OjY5OQ",
        },
        {
          x: 1150,
          y: 2050,
          id: "MjM6Mjk1OjY2Mw",
        },
        {
          x: 1650,
          y: 1850,
          id: "MjM6Mjk1OjY2Mw",
        },
      ],
      tokens: [
        {
          id: "npc5",
          x: 1400,
          y: 1200,
        },
        {
          id: "npc5",
          x: 1200,
          y: 1200,
        },
        {
          id: "npc5",
          x: 1300,
          y: 1300,
        },
        {
          id: "npc5",
          x: 1700,
          y: 1200,
        },
        {
          id: "npc5",
          x: 1800,
          y: 1300,
        },
        {
          id: "npc5",
          x: 1500,
          y: 1100,
        },
        {
          id: "npc3",
          x: 2400,
          y: 1300,
        },
        {
          id: "npc3",
          x: 2500,
          y: 1300,
        },
        {
          id: "npc3",
          x: 2500,
          y: 1200,
        },
        {
          id: "npc3",
          x: 2400,
          y: 1200,
        },
        {
          id: "hazard1",
          x: 1800,
          y: 1500,
        },
        {
          id: "npc8",
          x: 1100,
          y: 1700,
        },
        {
          id: "hazard6",
          x: 1500,
          y: 2400,
        },
        {
          id: "npc6",
          x: 1400,
          y: 2200,
        },
        {
          id: "npc15",
          x: 1100,
          y: 2300,
        },
        {
          id: "npc6",
          x: 1400,
          y: 2800,
        },
        {
          id: "npc6",
          x: 1700,
          y: 2800,
        },
        {
          id: "npc7",
          x: 1600,
          y: 2900,
        },
        {
          id: "npc6",
          x: 2e3,
          y: 2600,
        },
        {
          id: "npc6",
          x: 2e3,
          y: 2800,
        },
        {
          id: "npc4",
          x: 900,
          y: 3300,
        },
        {
          id: "npc4",
          x: 1100,
          y: 3500,
        },
      ],
    }),
    new ModuleScene({
      name: "map2",
      canonical: {
        name: "toi/map2",
        priority: 0,
      },
      nameInfo: {
        x: 643.2435,
        y: 748.9774,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 1250,
      height: 1555,
      imageLeft: 114,
      imageRight: 1136,
      imageCols: 20,
      imageTop: 113,
      imageBottom: 1544,
      imageRows: 28,
      globalLight: true,
      detailsFile: "/standalone/maps/toi-map2.json",
      journals: [
        {
          x: 1850,
          y: 2750,
          id: "NDU6Njg6MTcx",
        },
        {
          x: 1250,
          y: 2950,
          id: "NDY6OTk6MzAz",
        },
        {
          x: 2450,
          y: 2950,
          id: "NDg6OTk6Njk5",
        },
        {
          x: 1850,
          y: 2150,
          id: "NDg6MzI2OjExMQ",
        },
        {
          x: 1150,
          y: 1650,
          id: "NDk6Mjk1OjQzNQ",
        },
        {
          x: 2750,
          y: 2150,
          id: "NTA6MzI2OjQxMQ",
        },
        {
          x: 2750,
          y: 1250,
          id: "NTI6OTk6NjYz",
        },
        {
          x: 1950,
          y: 1350,
          id: "NTI6MzI2OjEzNQ",
        },
      ],
      tokens: [
        {
          id: "npc24",
          x: 1e3,
          y: 1600,
        },
        {
          id: "npc24",
          x: 1e3,
          y: 1800,
        },
        {
          id: "npc20",
          x: 1700,
          y: 1e3,
        },
        {
          id: "npc14",
          x: 2e3,
          y: 900,
        },
        {
          id: "npc31",
          x: 1800,
          y: 1200,
        },
        {
          id: "npc13",
          x: 2500,
          y: 1200,
        },
        {
          id: "npc18",
          x: 2800,
          y: 1300,
        },
        {
          id: "npc22",
          x: 2500,
          y: 1900,
        },
        {
          id: "npc12",
          x: 2800,
          y: 2200,
        },
        {
          id: "npc35",
          x: 1600,
          y: 1900,
        },
        {
          id: "npc35",
          x: 2e3,
          y: 1900,
        },
        {
          id: "npc31",
          x: 2400,
          y: 2700,
        },
        {
          id: "npc31",
          x: 2800,
          y: 2700,
        },
        {
          id: "npc31",
          x: 2800,
          y: 3100,
        },
        {
          id: "npc31",
          x: 2400,
          y: 3100,
        },
        {
          id: "hazard4",
          x: 1800,
          y: 3100,
        },
        {
          id: "npc27",
          x: 900,
          y: 2900,
        },
        {
          id: "npc11",
          x: 1e3,
          y: 2800,
        },
        {
          id: "npc11",
          x: 1300,
          y: 2800,
        },
        {
          id: "npc11",
          x: 1300,
          y: 3100,
        },
        {
          id: "npc11",
          x: 1e3,
          y: 3100,
        },
      ],
    }),
    new ModuleScene({
      name: "map3a",
      nameInfo: {
        x: 161.0647,
        y: 694.6681,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 27,
      width: 1028,
      height: 1364,
      imageLeft: 12,
      imageRight: 1014,
      imageCols: 42,
      imageTop: 22,
      imageBottom: 1357,
      imageRows: 56,
      cropLeft: 0,
      cropRight: 461,
      cropTop: 0,
      cropBottom: 327,
      globalLight: true,
      journals: [
        {
          x: 1250,
          y: 1250,
          id: "MjY6OTk6NTE5",
        },
      ],
      tokens: [
        {
          id: "npc23",
          x: 1300,
          y: 800,
        },
        {
          id: "npc39",
          x: 1400,
          y: 800,
        },
        {
          id: "npc39",
          x: 1200,
          y: 800,
        },
      ],
    }),
    new ModuleScene({
      name: "map3b",
      nameInfo: {
        x: 18,
        y: 534.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 27,
      width: 1028,
      height: 1364,
      imageLeft: 12,
      imageRight: 1014,
      imageCols: 42,
      imageTop: 22,
      imageBottom: 1357,
      imageRows: 56,
      cropLeft: 0,
      cropRight: 461,
      cropTop: 337,
      cropBottom: 684,
      globalLight: true,
      journals: [
        {
          x: 1550,
          y: 650,
          id: "MjY6MzI2OjI2Nw",
        },
        {
          x: 1150,
          y: 950,
          id: "MjY6MzI2OjIwNw",
        },
        {
          x: 1850,
          y: 1450,
          id: "Mjg6OTk6MTIz",
        },
      ],
      tokens: [
        {
          id: "npc17",
          x: 800,
          y: 800,
        },
        {
          id: "npc26",
          x: 1900,
          y: 1400,
        },
        {
          id: "npc11",
          x: 1800,
          y: 1300,
        },
        {
          id: "npc11",
          x: 1800,
          y: 1500,
        },
      ],
    }),
    new ModuleScene({
      name: "map3c",
      nameInfo: {
        x: 18,
        y: 366.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 27,
      width: 1028,
      height: 1364,
      imageLeft: 12,
      imageRight: 1014,
      imageCols: 42,
      imageTop: 22,
      imageBottom: 1357,
      imageRows: 56,
      cropLeft: 0,
      cropRight: 461,
      cropTop: 694,
      cropBottom: 1357,
      globalLight: true,
      detailsFile: "/standalone/maps/toi-map3c.json",
      journals: [
        {
          x: 1250,
          y: 2950,
          id: "MzQ6MzI2OjM5OQ",
        },
        {
          x: 1750,
          y: 2350,
          id: "MzY6OTk6NTE5",
        },
        {
          x: 1950,
          y: 1550,
          id: "MzY6MzI2OjYxNQ",
        },
        {
          x: 1850,
          y: 1050,
          id: "Mzc6Njg6MjQz",
        },
      ],
      tokens: [
        {
          id: "npc28",
          x: 900,
          y: 2700,
        },
        {
          id: "npc29",
          x: 1100,
          y: 2700,
        },
        {
          id: "npc22",
          x: 1900,
          y: 1600,
        },
        {
          id: "npc4",
          x: 1500,
          y: 1400,
        },
        {
          id: "npc30",
          x: 1700,
          y: 900,
        },
        {
          id: "npc36",
          x: 1700,
          y: 1200,
        },
        {
          id: "npc36",
          x: 1900,
          y: 1200,
        },
      ],
    }),
    new ModuleScene({
      name: "map3d",
      nameInfo: {
        x: 246,
        y: 694.6681,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 27,
      width: 1028,
      height: 1364,
      imageLeft: 12,
      imageRight: 1014,
      imageCols: 42,
      imageTop: 22,
      imageBottom: 1357,
      imageRows: 56,
      cropLeft: 470,
      cropRight: 1014,
      cropTop: 0,
      cropBottom: 684,
      globalLight: true,
      detailsFile: "/standalone/maps/toi-map3d.json",
      journals: [
        {
          x: 1150,
          y: 2550,
          id: "Mjk6Mjk1OjE1OQ",
        },
        {
          x: 1350,
          y: 1550,
          id: "MzA6MzI2OjY5OQ",
        },
        {
          x: 2450,
          y: 1650,
          id: "MzE6Njg6NjM5",
        },
      ],
      tokens: [
        {
          id: "npc38",
          x: 1400,
          y: 2500,
        },
        {
          id: "npc36",
          x: 800,
          y: 2700,
        },
        {
          id: "npc36",
          x: 1400,
          y: 2700,
        },
        {
          id: "npc36",
          x: 1400,
          y: 2300,
        },
        {
          id: "npc36",
          x: 800,
          y: 2400,
        },
        {
          id: "hazard2",
          x: 1300,
          y: 1600,
        },
        {
          id: "npc25",
          x: 2400,
          y: 2e3,
        },
        {
          id: "npc40",
          x: 2100,
          y: 1900,
        },
        {
          id: "npc40",
          x: 2600,
          y: 1900,
        },
      ],
    }),
    new ModuleScene({
      name: "map3e",
      nameInfo: {
        x: 355.5,
        y: 501.6681,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 27,
      width: 1028,
      height: 1364,
      imageLeft: 12,
      imageRight: 1014,
      imageCols: 42,
      imageTop: 22,
      imageBottom: 1357,
      imageRows: 56,
      cropLeft: 708,
      cropRight: 1014,
      cropTop: 409,
      cropBottom: 876,
      globalLight: true,
      journals: [
        {
          x: 1150,
          y: 1550,
          id: "MzE6Mjk1OjI0Mw",
        },
      ],
      tokens: [
        {
          id: "npc9",
          x: 1e3,
          y: 2200,
        },
        {
          id: "npc23",
          x: 900,
          y: 2300,
        },
        {
          id: "npc23",
          x: 1100,
          y: 2300,
        },
      ],
    }),
    new ModuleScene({
      name: "map3f",
      nameInfo: {
        x: 240,
        y: 366.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 27,
      width: 1028,
      height: 1364,
      imageLeft: 12,
      imageRight: 1014,
      imageCols: 42,
      imageTop: 22,
      imageBottom: 1357,
      imageRows: 56,
      cropLeft: 470,
      cropRight: 700,
      cropTop: 694,
      cropBottom: 947,
      globalLight: true,
      detailsFile: "/standalone/maps/toi-map3f.json",
      journals: [
        {
          x: 750,
          y: 850,
          id: "MzI6MzI2OjEyMw",
        },
      ],
      tokens: [
        {
          id: "hazard5",
          x: 800,
          y: 1e3,
        },
        {
          id: "npc16",
          x: 800,
          y: 700,
        },
        {
          id: "npc16",
          x: 900,
          y: 800,
        },
      ],
    }),
    new ModuleScene({
      name: "map3g",
      nameInfo: {
        x: 240,
        y: 234.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 27,
      width: 1028,
      height: 1364,
      imageLeft: 12,
      imageRight: 1014,
      imageCols: 42,
      imageTop: 22,
      imageBottom: 1357,
      imageRows: 56,
      cropLeft: 470,
      cropRight: 1014,
      cropTop: 886,
      cropBottom: 1357,
      globalLight: true,
      detailsFile: "/standalone/maps/toi-map3g.json",
      journals: [
        {
          x: 1650,
          y: 1450,
          id: "Mzg6OTk6NDk1",
        },
      ],
      tokens: [
        {
          id: "npc10",
          x: 1800,
          y: 1300,
        },
        {
          id: "npc32",
          x: 2e3,
          y: 1400,
        },
        {
          id: "npc19",
          x: 2e3,
          y: 1600,
        },
        {
          id: "npc19",
          x: 2100,
          y: 1700,
        },
        {
          id: "npc19",
          x: 2e3,
          y: 1700,
        },
      ],
    }),
  ];
  journals = [
    new AdventureImage({
      name: "journal1",
      page: 1,
      width: 1261,
      height: 1636,
    }),
    new AdventureImage({
      name: "journal2",
      page: 1,
      width: 1261,
      height: 715,
    }),
    new AdventureImage({
      name: "journal3",
      page: 4,
      width: 1260,
      height: 1636,
    }),
    new AdventureImage({
      name: "journal4",
      page: 8,
      width: 1259,
      height: 753,
    }),
    new AdventureImage({
      name: "journal5",
      page: 24,
      width: 1259,
      height: 715,
    }),
    new AdventureImage({
      name: "journal6",
      page: 40,
      width: 1259,
      height: 789,
    }),
    new AdventureImage({
      name: "journal7",
      page: 41,
      width: 909,
      height: 550,
    }),
    new AdventureImage({
      name: "journal8",
      page: 56,
      width: 1260,
      height: 1636,
    }),
    new CaptionImage({
      name: "journal9",
      page: 62,
      width: 421,
      height: 424,
    }),
    new CaptionImage({
      name: "journal10",
      page: 62,
      width: 420,
      height: 461,
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 9,
        x: 225.3422,
        y: 399.7832,
      },
      page: 9,
      width: 533,
      height: 533,
      tokenX: 26,
      tokenY: 72,
      tokenSize: 589,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.2rMLYkUR47ZCQMUg",
      page: 12,
      width: 862,
      height: 912,
      tokenX: 46,
      tokenY: -224,
      tokenSize: 800,
      forIds: ["MTM6Mjk1OjI0Mw"],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.NRBgcu0LkXXp8mtp",
      page: 14,
      width: 914,
      height: 973,
      tokenX: -93,
      tokenY: 129,
      tokenSize: 1085,
      forIds: ["MTQ6MzkyOjEzNQ"],
    }),
    new ModuleNpc({
      id: "npc4",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.9InGpxq5xbbHaL9f",
      page: 15,
      width: 803,
      height: 1038,
      tokenX: -133,
      tokenY: -153,
      tokenSize: 730,
      forIds: ["Mzc6Njg6NDQ3", "MTU6Njg6MjU1"],
    }),
    new ModuleNpc({
      id: "npc5",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.iIJPJcDT8wlJ8z5M",
      page: 17,
      width: 946,
      height: 745,
      tokenX: -238,
      tokenY: 110,
      tokenSize: 750,
      forIds: ["MTY6MzI2OjE0Nw"],
    }),
    new ModuleNpc({
      id: "npc6",
      actorUuid:
        "Compendium.pf2e.menace-under-otari-bestiary.Actor.A4VgQIHsqJKssQOM",
      page: 18,
      width: 1014,
      height: 859,
      tokenX: -25,
      tokenY: -55,
      tokenSize: 790,
      forIds: ["MjA6OTk6NjI3", "MTg6OTk6NTE5", "MTk6Njg6NjYz"],
    }),
    new ModuleNpc({
      id: "npc7",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.ZMr28tFTA5NUcBTi",
      page: 19,
      width: 856,
      height: 1202,
      tokenX: -51,
      tokenY: -30,
      tokenSize: 838,
      forIds: ["MTk6Njg6NjE1"],
    }),
    new ModuleNpc({
      id: "npc8",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.N98ug9jQHqeFoK1N",
      name: {
        page: 23,
        x: 253.0738,
        y: 86.3829,
      },
      page: 23,
      width: 671,
      height: 1200,
      tokenX: -141,
      tokenY: 13,
      tokenSize: 444,
      forIds: ["MjI6MzI2OjI1NQ"],
    }),
    new ModuleNpc({
      id: "npc9",
      actorUuid:
        "Compendium.pf2e.troubles-in-otari-bestiary.Actor.5iOgKbhW9zVnV1cr",
      page: 33,
      width: 990,
      height: 1320,
      tokenX: -298,
      tokenY: -224,
      tokenSize: 396,
      forIds: ["MzI6MzI2OjYwMw"],
    }),
    new ModuleNpc({
      id: "npc10",
      actorUuid:
        "Compendium.pf2e.troubles-in-otari-bestiary.Actor.6Ut7YjjLZADMU7NY",
      page: 39,
      width: 674,
      height: 851,
      tokenX: -161,
      tokenY: 63,
      tokenSize: 487,
      forIds: ["Mzg6MzI2OjIxOQ"],
    }),
    new ModuleNpc({
      id: "npc11",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.PcHQDmPTztw32PhL",
      page: 47,
      width: 853,
      height: 1063,
      tokenX: -137,
      tokenY: -67,
      tokenSize: 615,
      forIds: ["Mjg6MzI2OjE4Mw", "NDc6Njg6NTQz"],
    }),
    new ModuleNpc({
      id: "npc12",
      actorUuid:
        "Compendium.pf2e.menace-under-otari-bestiary.Actor.Br1AtKUHe3nbzjnY",
      name: {
        page: 51,
        x: 439.4021,
        y: 86.3229,
      },
      page: 51,
      width: 840,
      height: 883,
      tokenX: -165,
      tokenY: -14,
      tokenSize: 743,
      forIds: ["NTE6Njg6NDcx"],
    }),
    new ModuleNpc({
      id: "npc13",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.gvCCATlH9mPGWbsp",
      name: {
        page: 53,
        x: 441.0823,
        y: 86.3229,
      },
      page: 53,
      width: 909,
      height: 1265,
      tokenX: -152,
      tokenY: -71,
      tokenSize: 761,
      forIds: ["NTI6MzI2OjQ0Nw"],
    }),
    new ModuleNpc({
      id: "npc14",
      actorUuid:
        "Compendium.pf2e.troubles-in-otari-bestiary.Actor.4GZsTkvuYADpcdmV",
      page: 63,
      width: 817,
      height: 1147,
      tokenX: 132,
      tokenY: -231,
      tokenSize: 755,
      forIds: ["NjM6Njg6MzE1", "NTU6Njg6Njk5"],
    }),
    new ModuleNpc({
      id: "npc15",
      actorUuid:
        "Compendium.pf2e.troubles-in-otari-bestiary.Actor.l7wng1EXY7np8Hcu",
      page: 64,
      width: 880,
      height: 1237,
      tokenX: 41,
      tokenY: -534,
      tokenSize: 537,
      forIds: ["NjQ6MzcyOjQyMw", "MjE6Njg6MTU5"],
    }),
    new ModuleNpc({
      id: "npc16",
      actorUuid:
        "Compendium.pf2e.troubles-in-otari-bestiary.Actor.TIX9yDasefwJ4PxI",
      page: 65,
      width: 898,
      height: 1197,
      tokenX: -169,
      tokenY: -8,
      tokenSize: 553,
      forIds: ["NjU6Njg6MzAz", "MzQ6OTk6Njk5"],
    }),
    new ModuleNpc({
      id: "npc17",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.mX47c0W9rizbmMBM",
      label: "B",
      forIds: ["Mjg6OTk6NjAz"],
    }),
    new ModuleNpc({
      id: "npc18",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.IyhbcdTVmkV4pSju",
      label: "B",
      forIds: ["MTA6MzI2OjE0Nw", "NTI6MzI2OjQ5NQ"],
    }),
    new ModuleNpc({
      id: "npc19",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.xN5J9S485LxFZMkL",
      label: "CR",
      forIds: ["Mzk6Njg6OTk"],
    }),
    new ModuleNpc({
      id: "npc20",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.4htFfofrXLkbWMRg",
      label: "BT",
      forIds: ["NTQ6MzI2OjE0Nw"],
    }),
    new ModuleNpc({
      id: "npc22",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.cvfIkEF6xmWn2soN",
      label: "G",
      forIds: ["Mzc6Njg6NjYz", "NTE6Njg6NTE5"],
    }),
    new ModuleNpc({
      id: "npc23",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.RTviEfjYnsXa0wkT",
      label: "HH",
      forIds: ["MjY6OTk6MjU1", "MzI6MzI2OjMzOQ"],
    }),
    new ModuleNpc({
      id: "npc24",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.uBNm3R9wbLTPrM9i",
      label: "H",
      forIds: ["NTA6OTk6MjQz"],
    }),
    new ModuleNpc({
      id: "npc25",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.VotlWUsFKdOrHWF6",
      label: "S",
      forIds: ["MzE6Njg6MzYz"],
    }),
    new ModuleNpc({
      id: "npc26",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.QaldZV2p9RpMXzzn",
      label: "GKDM",
      forIds: ["Mjg6MzI2OjQ0Nw"],
    }),
    new ModuleNpc({
      id: "npc27",
      actorUuid:
        "Compendium.pf2e.troubles-in-otari-bestiary.Actor.fhItdltCmcAZkvcI",
      label: "KT",
      forIds: ["NDc6Njg6Mjc5"],
    }),
    new ModuleNpc({
      id: "npc28",
      actorUuid:
        "Compendium.pf2e.troubles-in-otari-bestiary.Actor.PhLxqnAIhCovfcXy",
      label: "KL",
      forIds: ["MzU6Njg6MTIz"],
    }),
    new ModuleNpc({
      id: "npc29",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.kB7FNn3vosp6cqQg",
      label: "L",
      forIds: ["MzU6Mjk1OjMyNw"],
    }),
    new ModuleNpc({
      id: "npc30",
      actorUuid:
        "Compendium.pf2e.troubles-in-otari-bestiary.Actor.lTVgdXuSv2B0yVVW",
      label: "ML",
      forIds: ["Mzc6Mjk1OjM4Nw"],
    }),
    new ModuleNpc({
      id: "npc31",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.Twvzy1yRo6m6dM8D",
      label: "OW",
      forIds: ["NTQ6MzI2Ojk5", "NDg6MzI2OjM4Nw"],
    }),
    new ModuleNpc({
      id: "npc32",
      actorUuid:
        "Compendium.pf2e.troubles-in-otari-bestiary.Actor.m4jitI3J1QkjJq3H",
      label: "OL",
      forIds: ["Mzk6Njg6NTMx"],
    }),
    new ModuleNpc({
      id: "npc33",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.XLqbEDjmGpIc4XoY",
      label: "OC",
      forIds: ["NDM6Njg6NTA3"],
    }),
    new ModuleNpc({
      id: "npc34",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.cDm6PzhO5nXlkGoi",
      label: "OS",
      forIds: ["NDI6MzI2OjExMQ"],
    }),
    new ModuleNpc({
      id: "npc35",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.X03vq2RWi2jiA6Ri",
      label: "O",
      forIds: ["NDk6Njg6MTU5"],
    }),
    new ModuleNpc({
      id: "npc36",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.trchDxbDR2TiPMxT",
      label: "SG",
      forIds: ["Mzg6OTk6NjYz", "MzA6OTk6MjU1"],
    }),
    new ModuleNpc({
      id: "npc37",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.1uVwkGlqYzyWaDMy",
      label: "V",
      forIds: ["MzQ6OTk6NjUx"],
    }),
    new ModuleNpc({
      id: "npc38",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.DBTbqI9QQRtlJwWh",
      label: "W",
      forIds: ["MzA6OTk6NTQz"],
    }),
    new ModuleNpc({
      id: "npc39",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.BN5Lb6IsQ9Wyu3rL",
      label: "W",
      forIds: ["MjY6MzI2OjYzOQ"],
    }),
    new ModuleNpc({
      id: "npc40",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.Xo4IGzw28hivgMmM",
      label: "ZS",
      forIds: ["MzE6Mjk1OjYxNQ"],
    }),
    new ModuleNpc({
      id: "hazard1",
      actorUuid:
        "Compendium.pf2e.troubles-in-otari-bestiary.Actor.0Fvulq5Zv4BQPvYV",
      label: "CP",
      forIds: ["MTY6OTk6NDIz"],
    }),
    new ModuleNpc({
      id: "hazard2",
      actorUuid:
        "Compendium.pf2e.troubles-in-otari-bestiary.Actor.vg6fEjWSj4jilXRn",
      label: "MST",
      forIds: ["MzA6MzI2OjQxMQ"],
    }),
    new ModuleNpc({
      id: "hazard3",
      actorUuid:
        "Compendium.pf2e.troubles-in-otari-bestiary.Actor.hv50ovLKV6lu49dF",
      label: "NT",
      forIds: ["NDM6Mjk1OjI2Nw"],
    }),
    new ModuleNpc({
      id: "hazard4",
      actorUuid:
        "Compendium.pf2e.troubles-in-otari-bestiary.Actor.aqDFxmLMx6cOnGlx",
      label: "ToF",
      forIds: ["NDY6OTk6Njk5"],
    }),
    new ModuleNpc({
      id: "hazard5",
      actorUuid:
        "Compendium.pf2e.troubles-in-otari-bestiary.Actor.NeFSJTGROSgGIKNd",
      label: "VU",
      forIds: ["MzM6MzcyOjU1NQ"],
    }),
    new ModuleNpc({
      id: "hazard6",
      actorUuid:
        "Compendium.pf2e.troubles-in-otari-bestiary.Actor.b8Wgun7T7sh7NVrd",
      label: "WLN",
      forIds: ["MTk6Mjk1OjY5OQ"],
    }),
  ];
  journalPages = [
    {
      name: "Introduction",
      pages: [
        {
          id: "NjoxODI6MzQy",
        },
        {
          id: "NjozMjY6MTIz",
        },
        {
          id: "Nzo2ODoyMzE",
        },
        {
          id: "NzoyOTU6NjM5",
        },
      ],
    },
    {
      name: "Chapter 1",
      pages: [
        {
          id: "ODoyMjM6MzU4",
        },
        {
          id: "ODozMjY6Mjc5",
        },
        {
          id: "MTA6OTk6NDQ3",
        },
        {
          id: "MTA6MzI2OjU5MQ",
        },
        {
          id: "MTE6Njg6NDU5",
        },
        {
          id: "MTI6OTk6NjE1",
        },
        {
          id: "MTI6MzI2OjYxNQ",
        },
        {
          id: "MTI6MzMzOjIwNw",
        },
        {
          id: "MTQ6MzI2OjY5OQ",
        },
        {
          id: "MTQ6MzI2OjM4Nw",
        },
        {
          id: "MTU6Njg6NjAz",
        },
        {
          id: "MTU6Mjk1OjU2Nw",
        },
        {
          id: "MTU6Mjk1OjQ4Mw",
        },
        {
          id: "MTY6MzI2OjY2Mw",
        },
        {
          id: "MTc6Njg6NTMx",
        },
        {
          id: "MTc6Njg6NDEx",
        },
        {
          id: "MTc6Mjk1OjY2Mw",
        },
        {
          id: "MTc6Mjk1OjQ0Nw",
        },
        {
          id: "MTg6MzI2OjUwNw",
        },
        {
          id: "MTk6Njg6MjY3",
        },
        {
          id: "MjA6OTk6NTMx",
        },
        {
          id: "MjA6OTk6MTgz",
        },
        {
          id: "MjA6MzI2OjQ5NQ",
        },
        {
          id: "MjE6Mjk1OjY5OQ",
        },
        {
          id: "MjM6Mjk1OjY2Mw",
        },
        {
          id: "MjM6MzY1OjM3NQ",
        },
      ],
    },
    {
      name: "Chapter 2",
      pages: [
        {
          id: "MjQ6MjE4OjM1OA",
        },
        {
          id: "MjU6Njg6NTY3",
        },
        {
          id: "MjU6Mjk1OjI1NQ",
        },
        {
          id: "MjY6OTk6NTE5",
        },
        {
          id: "MjY6MzI2OjI2Nw",
        },
        {
          id: "MjY6MzI2OjIwNw",
        },
        {
          id: "Mjg6OTk6MTIz",
        },
        {
          id: "Mjk6Njg6MzM5",
        },
        {
          id: "Mjk6Mjk1OjMzOQ",
        },
        {
          id: "Mjk6Mjk1OjE1OQ",
        },
        {
          id: "MzA6MzI2OjY5OQ",
        },
        {
          id: "MzE6Njg6NjM5",
        },
        {
          id: "MzE6Mjk1OjI0Mw",
        },
        {
          id: "MzI6MzI2OjEyMw",
        },
        {
          id: "MzQ6OTk6MjU1",
        },
        {
          id: "MzQ6MzI2OjU1NQ",
        },
        {
          id: "MzQ6MzI2OjM5OQ",
        },
        {
          id: "MzY6OTk6NTE5",
        },
        {
          id: "MzY6MzI2OjYxNQ",
        },
        {
          id: "Mzc6Njg6MjQz",
        },
        {
          id: "Mzg6OTk6NDk1",
        },
        {
          id: "Mzk6Mjk1OjQ3MQ",
        },
      ],
    },
    {
      name: "Chapter 3",
      pages: [
        {
          id: "NDA6MjE5OjM1OA",
        },
        {
          id: "NDE6Njg6MjA3",
        },
        {
          id: "NDI6OTk6MzE1",
        },
        {
          id: "NDI6MzI2OjU2Nw",
        },
        {
          id: "NDM6Njg6MTU5",
        },
        {
          id: "NDQ6OTk6Mjc5",
        },
        {
          id: "NDQ6MzI2OjE3MQ",
        },
        {
          id: "NDU6Njg6MTcx",
        },
        {
          id: "NDY6OTk6MzAz",
        },
        {
          id: "NDg6OTk6Njk5",
        },
        {
          id: "NDg6MzI2OjExMQ",
        },
        {
          id: "NDk6Mjk1OjQzNQ",
        },
        {
          id: "NTA6MzI2OjQxMQ",
        },
        {
          id: "NTI6OTk6NjYz",
        },
        {
          id: "NTI6MzI2OjEzNQ",
        },
        {
          id: "NTU6Njg6Mjc5",
        },
        {
          id: "NTU6Mjk1OjQxMQ",
        },
      ],
    },
    {
      name: "Adventure Toolbox",
      pages: [
        {
          id: "NTc6MTI1OjY3Ng",
        },
        {
          id: "NTc6Njg6MzUx",
        },
        {
          id: "NTc6Njg6MTU5",
        },
        {
          id: "NTc6Mjk1OjQ0Nw",
        },
        {
          id: "NTc6Mjk1OjM2Mw",
        },
        {
          id: "NTc6Mjk1OjIwNw",
        },
        {
          id: "NTg6OTk6Njk5",
        },
        {
          id: "NTg6OTk6NjUx",
        },
        {
          id: "NTg6MTY0OjU5MQ",
        },
        {
          id: "NTg6MzI2OjYwMw",
        },
        {
          id: "NTg6MzI2OjUzMQ",
        },
        {
          id: "NTg6MzI2OjMyNw",
        },
        {
          id: "NTk6Njg6Njk5",
        },
        {
          id: "NTk6Njg6NjM5",
        },
        {
          id: "NTk6Njg6NTc5",
        },
        {
          id: "NTk6Njg6NDQ3",
        },
        {
          id: "NTk6Njg6MzUx",
        },
        {
          id: "NjA6OTk6Njk5",
        },
        {
          id: "NjA6OTk6NjM5",
        },
        {
          id: "NjA6MzI2OjY2Mw",
        },
        {
          id: "NjA6MzI2OjUzMQ",
        },
        {
          id: "NjA6MzI2OjQxMQ",
        },
        {
          id: "NjA6MzI2OjMyNw",
        },
        {
          id: "NjE6Njg6Njk5",
        },
        {
          id: "NjE6Njg6NjUx",
        },
        {
          id: "NjE6Njg6NTkx",
        },
        {
          id: "NjE6Njg6NDQ3",
        },
        {
          id: "NjE6Njg6MzE1",
        },
        {
          id: "NjE6Njg6MjMx",
        },
        {
          id: "NjI6OTk6Njk5",
        },
        {
          id: "NjM6Njg6Njk5",
        },
        {
          id: "NjQ6OTk6Njk5",
        },
        {
          id: "NjU6Njg6Njk5",
        },
        {
          id: "MTA6MTcyOjY4Nw",
        },
        {
          id: "MTE6MzY0OjY4Nw",
        },
        {
          id: "MTE6MzQ0OjQzNQ",
        },
        {
          id: "MTM6MzUzOjY4Nw",
        },
        {
          id: "MjU6MzUwOjY4Nw",
        },
        {
          id: "NDQ6MTY1OjY4Nw",
        },
        {
          id: "NDU6MzYwOjY4Nw",
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
      ],
    },
  ];
  combines = [];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Troubles in Otari" &&
        t.fontId === "AlembicBeta-RegularOne:17",
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    text = text.filter(
      (x) =>
        !(x.fontId === "AlembicBeta-RegularOne:14" && x.color === "#5e0000"),
    );
    for (let i = 0; i < text.length; i++) {
      text[i].text = text[i].text.replace(/�/, ".");
    }
    this.markStartOfLine(text, 9, 371.75, 543);
    this.markStartOfLine(text, 9, 392.75, 423);
    this.markIndented(text, 12, 381.25, 411);
    this.markIndented(text, 12, 380.25, 303);
    this.markStartOfLine(text, 14, 430.25, 219);
    this.markStartOfLine(text, 14, 392.25, 135);
    this.markStartOfLine(text, 14, 378.25, 111);
    this.markStartOfLine(text, 14, 364.25, 99);
    this.markStartOfLine(text, 14, 350.25, 87);
    this.markStartOfLine(text, 14, 327.25, 75);
    this.markStartOfLine(text, 23, 364.75, 375);
    this.markIndented(text, 23, 342.75, 567);
    this.markIndented(text, 23, 357.75, 99);
    this.markStartOfLine(text, 33, 371.75, 555);
    this.markStartOfLine(text, 33, 367.75, 531);
    this.markStartOfLine(text, 33, 364.75, 519);
    this.markStartOfLine(text, 33, 352.75, 483);
    this.markStartOfLine(text, 33, 362.75, 447);
    this.markStartOfLine(text, 33, 374.75, 435);
    this.markStartOfLine(text, 33, 380.75, 423);
    this.markStartOfLine(text, 33, 386.75, 387);
    this.markStartOfLine(text, 33, 390.75, 267);
    this.markIndented(text, 33, 400.75, 219);
    this.markStartOfLine(text, 58, 371.25, 255);
    this.markStartOfLine(text, 58, 391.25, 195);
    this.markStartOfLine(text, 58, 368.25, 111);
    this.markIndented(text, 62, 405.25, 135);
    this.markStartOfLine(text, 64, 372.25, 423);
    this.markStartOfLine(text, 64, 370.25, 399);
    this.markStartOfLine(text, 64, 362.25, 387);
    this.markStartOfLine(text, 64, 362.25, 375);
    this.markStartOfLine(text, 64, 346.25, 351);
    this.markStartOfLine(text, 64, 345.25, 339);
    this.markStartOfLine(text, 64, 336.25, 327);
    return super.extractDetails(text, moduleData, sectionKey);
  }
  ChapterHeadingPageLayout(pageNum) {
    return (pdf, emit) => {
      const headerBlocks = pdf.textDetails
          .filter((t) => t.page === pageNum && t.fontSize > 30)
          .map((t) => t.y),
        headingStartY = Math.min(...headerBlocks) - 10,
        page = this.LeftPageTwoColumn;
      (this.getAllTextInBoundingBox(
        pdf,
        pageNum,
        0,
        520,
        this.pageTop,
        headingStartY,
        emit,
      ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          page.col1X1,
          page.col1X2,
          headingStartY,
          this.pageBottom,
          emit,
        ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          page.col2X1,
          page.col2X2,
          headingStartY,
          this.pageBottom,
          emit,
        ));
    };
  }
  RightChapterHeadingPageLayout(pageNum) {
    return (pdf, emit) => {
      const pageContent = pdf.textDetails
          .filter((t) => t.page === pageNum && t.fontSize > 30)
          .map((t) => t.y),
        headingStartY = Math.min(...pageContent) - 10,
        page = this.RightPageTwoColumn;
      (this.getAllTextInBoundingBox(
        pdf,
        pageNum,
        0,
        520,
        this.pageTop,
        headingStartY,
        emit,
      ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          page.col1X1,
          page.col1X2,
          headingStartY,
          this.pageBottom,
          emit,
        ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          page.col2X1,
          page.col2X2,
          headingStartY,
          this.pageBottom,
          emit,
        ));
    };
  }
  LeftSingleColumnWithSidebar(pageNum) {
    return (pdf, emit) => {
      (this.getAllTextInBoundingBox(
        pdf,
        pageNum,
        250.5,
        550,
        this.pageTop,
        this.pageBottom,
        emit,
      ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          70,
          240,
          this.pageTop,
          this.pageBottom,
          emit,
          `sidebar${pageNum}`,
        ));
    };
  }
  RightSingleColumnWithSidebar(pageNum) {
    return (pdf, emit) => {
      const page = this.RightPageTwoColumn;
      (this.getAllTextInBoundingBox(
        pdf,
        pageNum,
        page.col1X1,
        370,
        this.pageTop,
        this.pageBottom,
        emit,
      ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          370,
          510,
          this.pageTop,
          this.pageBottom,
          emit,
          `sidebar${pageNum}`,
        ));
    };
  }
  RightSingleColumnWithSidebarAndMap(pageNum, handoutBottom) {
    return (pdf, emit) => {
      const page = this.RightPageTwoColumn;
      (this.getAllTextInBoundingBox(
        pdf,
        pageNum,
        page.col1X1,
        370,
        handoutBottom,
        this.pageBottom,
        emit,
      ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          370,
          510,
          this.pageTop,
          this.pageBottom,
          emit,
          `sidebar${pageNum}`,
        ));
    };
  }
  RightSingleColumnWithSidebarAndHandout(pageNum, handoutBottom) {
    return (pdf, emit) => {
      const page = this.RightPageTwoColumn;
      (this.getAllTextInBoundingBox(
        pdf,
        pageNum,
        page.col1X1,
        370,
        700,
        handoutBottom,
        emit,
        `handout${pageNum}`,
      ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          page.col1X1,
          370,
          handoutBottom,
          this.pageBottom,
          emit,
        ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          370,
          510,
          this.pageTop,
          this.pageBottom,
          emit,
          `sidebar${pageNum}`,
        ));
    };
  }
  LeftTwoColumn(pageNum) {
    return (pdf, emit) => {
      const page = this.LeftPageTwoColumn;
      (this.getAllTextInBoundingBox(
        pdf,
        pageNum,
        page.col1X1,
        page.col1X2,
        this.pageTop,
        this.pageBottom,
        emit,
      ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          page.col2X1,
          page.col2X2,
          this.pageTop,
          this.pageBottom,
          emit,
        ));
    };
  }
  RightTwoColumn(pageNum) {
    return (pdf, emit) => {
      const page = this.RightPageTwoColumn;
      (this.getAllTextInBoundingBox(
        pdf,
        pageNum,
        page.col1X1,
        page.col1X2,
        this.pageTop,
        this.pageBottom,
        emit,
      ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          page.col2X1,
          page.col2X2,
          this.pageTop,
          this.pageBottom,
          emit,
        ));
    };
  }
  LeftTwoColumnWithMap(pageNum, sectionTop) {
    return (pdf, emit) => {
      const page = this.LeftPageTwoColumn;
      (this.getAllTextInBoundingBox(
        pdf,
        pageNum,
        page.col1X1,
        page.col1X2,
        sectionTop,
        this.pageBottom,
        emit,
      ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          page.col2X1,
          page.col2X2,
          sectionTop,
          this.pageBottom,
          emit,
        ));
    };
  }
  RightTwoColumnWithMap(pageNum, sectionTop) {
    return (pdf, emit) => {
      const page = this.RightPageTwoColumn;
      (this.getAllTextInBoundingBox(
        pdf,
        pageNum,
        page.col1X1,
        page.col1X2,
        sectionTop,
        this.pageBottom,
        emit,
      ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          page.col2X1,
          page.col2X2,
          sectionTop,
          this.pageBottom,
          emit,
        ));
    };
  }
  LeftTwoColumnWithTopHandout(pageNum, sectionTop) {
    return (pdf, emit) => {
      const page = this.LeftPageTwoColumn;
      (this.getAllTextInBoundingBox(
        pdf,
        pageNum,
        page.col1X1,
        page.col1X2,
        sectionTop,
        this.pageBottom,
        emit,
      ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          page.col2X1,
          page.col2X2,
          sectionTop,
          this.pageBottom,
          emit,
        ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          67.5,
          550,
          this.pageTop,
          sectionTop,
          emit,
          `handout${pageNum}`,
        ));
    };
  }
  LeftTwoColumnWithLeftCutout(pageNum, cutoutPos) {
    return (pdf, emit) => {
      const page = this.LeftPageTwoColumn;
      (this.getAllTextInBoundingBox(
        pdf,
        pageNum,
        108.35,
        320,
        this.pageTop,
        cutoutPos,
        emit,
        `sidebar${pageNum}`,
      ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          page.col1X1,
          page.col1X2,
          cutoutPos,
          this.pageBottom,
          emit,
        ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          page.col2X1,
          page.col2X2,
          this.pageTop,
          this.pageBottom,
          emit,
        ));
    };
  }
  RightTwoColumnWithRightCutout(pageNum, cutoutPos) {
    return (pdf, emit) => {
      const page = this.RightPageTwoColumn;
      (this.getAllTextInBoundingBox(
        pdf,
        pageNum,
        page.col1X1,
        page.col1X2,
        this.pageTop,
        this.pageBottom,
        emit,
      ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          page.col2X1,
          page.col2X2,
          cutoutPos,
          this.pageBottom,
          emit,
        ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          304.1,
          515,
          this.pageTop,
          cutoutPos,
          emit,
          `sidebar${pageNum}`,
        ));
    };
  }
  RightTwoColumnWithBottomCutout(pageNum, cutoutPos) {
    return (pdf, emit) => {
      const page = this.RightPageTwoColumn;
      (this.getAllTextInBoundingBox(
        pdf,
        pageNum,
        page.col1X1,
        page.col1X2,
        this.pageTop,
        cutoutPos,
        emit,
      ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          page.col2X1,
          page.col2X2,
          this.pageTop,
          cutoutPos,
          emit,
        ));
    };
  }
  detectPageLayout(pdf, page) {
    const entries = pdf.textDetails.filter((x) => x.page === page),
      leftCol1 =
        entries.filter((x) => Math.abs(x.x - this.LeftPageTwoColumn.col1X1) < 1)
          .length > 5,
      leftCol2 =
        entries.filter((x) => Math.abs(x.x - this.LeftPageTwoColumn.col2X1) < 1)
          .length > 5,
      rightCol1 =
        entries.filter(
          (x) => Math.abs(x.x - this.RightPageTwoColumn.col1X1) < 1,
        ).length > 5,
      rightCol2 =
        entries.filter(
          (x) => Math.abs(x.x - this.RightPageTwoColumn.col2X1) < 1,
        ).length > 5,
      hasHeading = entries.some(
        (x) =>
          x.fontName === "AlembicBeta-RegularOne" &&
          x.fontSize >= 21 &&
          x.y < 720,
      ),
      topOfText = Math.max(
        ...entries
          .filter(
            (t) => t.fontId === "SabonLTStd-Roman:9" || t.fontId === "GoodOT:9",
          )
          .map((t) => t.y),
      );
    if (rightCol1 && rightCol2) {
      if (!hasHeading) {
        return topOfText > 650
          ? `this.RightTwoColumn(${page})`
          : `this.RightTwoColumnWithMap(${page})`;
      }
    } else {
      if (leftCol1 && leftCol2) {
        return hasHeading
          ? `this.ChapterHeadingPageLayout(${page})`
          : topOfText > 650
            ? `this.LeftTwoColumn(${page})`
            : `this.LeftTwoColumnWithMap(${page})`;
      }
      if (rightCol1) {
        return hasHeading
          ? `this.RightChapterHeadingWithSidebar(${page})`
          : `this.RightSingleColumnWithSidebar(${page})`;
      }
      if (leftCol1) {
        return hasHeading
          ? `this.LeftChapterHeadingWithSidebar(${page})`
          : `this.LeftOneColumnWithSidebar(${page})`;
      }
      if (leftCol2 && hasHeading) {
        return `this.LeftTwoColumnWithLeftSidebar(${page})`;
      }
    }
    return "";
  }
  finalize(moduleData) {}
}
