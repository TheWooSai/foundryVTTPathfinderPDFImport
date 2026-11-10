import { AdventureBase } from "../../core/adventure-base.js";
import { AdventureImage, CaptionImage } from "../../core/images.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class TheFallOfPlaguestone extends AdventureBase {
  prefix = "fall-of-plaguestone";
  fullName = "The Fall of Plaguestone";
  blacklistedFonts = ["Times-Italic", "CaslonAntique:12"];
  headingFontIds = ["CaslonAntique:30", "CaslonAntique:14", "GoodOT-Bold:12"];
  normalFontIds = ["SabonLTStd-Roman:9", "Sabon-Roman:9"];
  subheadingFontIds = ["GoodOT-News:12", "GoodOT:12"];
  italicFontIds = ["SabonLTStd-Italic:9"];
  boldFontIds = ["TimesNewRomanPS-BoldMT:9", "TimesNewRomanPSMT:9"];
  dropCapFontIds = ["CaslonAntique:42.9367"];
  paragraphFontIds = this.subheadingFontIds
    .concat(this.normalFontIds)
    .concat(this.italicFontIds)
    .concat(this.boldFontIds);
  pageTop = 700;
  pageBottom = 40;
  LeftPageTwoColumn = {
    col1X1: 111,
    col1X2: 320,
    col2X1: 332.25,
    col2X2: 550,
  };
  RightPageTwoColumn = {
    col1X1: 67.5,
    col1X2: 280,
    col2X1: 288.75,
    col2X2: 520,
  };
  pages = [
    this.ChapterHeadingPageLayout(6),
    this.RightTwoColumnWithRightCutout(7, 370),
    this.RightTwoColumn(9),
    this.LeftTwoColumnWithLeftCutout(10, 440),
    this.RightTwoColumn(11),
    this.LeftTwoColumn(12),
    this.RightTwoColumn(13),
    this.LeftTwoColumn(14),
    this.RightTwoColumn(15),
    this.LeftTwoColumn(16),
    this.RightTwoColumn(17),
    this.RightTwoColumn(19),
    this.LeftTwoColumn(20),
    this.RightTwoColumn(21),
    this.LeftTwoColumn(22),
    this.RightTwoColumn(23),
    this.LeftTwoColumnWithMap(24, 460),
    this.RightTwoColumn(25),
    this.ChapterHeadingPageLayout(26),
    this.RightTwoColumn(27),
    this.LeftTwoColumnWithMap(28, 327),
    this.RightTwoColumn(29),
    this.RightTwoColumn(31),
    this.LeftTwoColumn(32),
    this.RightTwoColumn(33),
    this.LeftTwoColumn(34),
    this.RightTwoColumn(35),
    this.LeftTwoColumn(36),
    this.RightTwoColumn(37),
    this.ChapterHeadingPageLayout(38),
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
    this.RightTwoColumn(53),
    this.LeftTwoColumn(54),
    this.RightTwoColumn(55),
    this.LeftTwoColumnWithLeftCutout(56, 260),
    this.RightTwoColumnWithRightCutout(57, 450),
    this.LeftTwoColumn(58),
    this.RightTwoColumn(59),
    this.LeftTwoColumn(60),
    this.RightTwoColumn(61),
    this.LeftTwoColumn(62),
    this.RightTwoColumn(63),
    this.LeftSingleColumnWithSidebar(64),
    this.RightSingleColumnWithSidebar(65),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      nameInfo: {
        x: 28.6835,
        y: 747.6781,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 1166,
      height: 1555,
      imageLeft: 29,
      imageTop: 117,
      imageRight: 999,
      imageBottom: 774,
      imageRows: 19,
      imageCols: 28,
      detailsFile: "/standalone/maps/tfop-map1.json",
      journals: [
        {
          x: 1150,
          y: 2050,
          id: "Mzg6MzMyOjE4Mw",
        },
        {
          x: 2050,
          y: 2350,
          id: "Mzk6Njg6MjY3",
        },
        {
          x: 1850,
          y: 2850,
          id: "Mzk6Mjg5OjU3OQ",
        },
        {
          x: 1450,
          y: 2950,
          id: "NDA6MzMyOjE3MQ",
        },
        {
          x: 2550,
          y: 2450,
          id: "NDE6Njg6MzAz",
        },
        {
          x: 2350,
          y: 2050,
          id: "NDE6Mjg5OjQyMw",
        },
        {
          x: 2950,
          y: 2350,
          id: "NDI6MzMyOjUxOQ",
        },
        {
          x: 2850,
          y: 2750,
          id: "NDI6MzY0OjM1MQ",
        },
        {
          x: 3050,
          y: 2950,
          id: "NDM6Njg6MjMx",
        },
        {
          x: 3650,
          y: 3250,
          id: "NDM6MjkzOjM2Mw",
        },
        {
          x: 3650,
          y: 3050,
          id: "NDQ6MTExOjU1NQ",
        },
        {
          x: 3050,
          y: 2050,
          id: "NDQ6MTExOjEzNQ",
        },
        {
          x: 3450,
          y: 2050,
          id: "NDQ6MzMyOjM5OQ",
        },
        {
          x: 3150,
          y: 1550,
          id: "NDQ6MzMyOjI5MQ",
        },
        {
          x: 1250,
          y: 4150,
          id: "NDU6Mjg5OjQyMw",
        },
        {
          x: 1850,
          y: 4050,
          id: "NDU6Mjg5OjIzMQ",
        },
        {
          x: 1750,
          y: 4650,
          id: "NDY6MzcyOjM4Nw",
        },
        {
          x: 2650,
          y: 4750,
          id: "NDc6Mjg5OjI1NQ",
        },
        {
          x: 3350,
          y: 4950,
          id: "NDg6MTExOjY3NQ",
        },
        {
          x: 3150,
          y: 4250,
          id: "NDg6MzMyOjY3NQ",
        },
      ],
      tokens: [
        {
          id: "npc40",
          x: 1900,
          y: 2100,
        },
        {
          id: "npc40",
          x: 2100,
          y: 2400,
        },
        {
          id: "npc12",
          x: 1700,
          y: 2700,
        },
        {
          id: "npc40",
          x: 1400,
          y: 2700,
        },
        {
          id: "npc40",
          x: 1300,
          y: 2900,
        },
        {
          id: "npc40",
          x: 1500,
          y: 3200,
        },
        {
          id: "npc40",
          x: 1700,
          y: 3300,
        },
        {
          id: "npc40",
          x: 1800,
          y: 3100,
        },
        {
          id: "npc14",
          x: 2950,
          y: 2900,
        },
        {
          id: "npc35",
          x: 3500,
          y: 3300,
        },
        {
          id: "npc46",
          x: 2400,
          y: 2300,
        },
        {
          id: "npc46",
          x: 2600,
          y: 2500,
        },
        {
          id: "npc40",
          x: 2200,
          y: 2e3,
        },
        {
          id: "npc13",
          x: 2300,
          y: 1900,
        },
        {
          id: "npc28",
          x: 2700,
          y: 2e3,
        },
        {
          id: "npc28",
          x: 2600,
          y: 2e3,
        },
        {
          id: "npc24",
          x: 3300,
          y: 1600,
        },
        {
          id: "npc24",
          x: 2800,
          y: 1700,
        },
        {
          id: "npc24",
          x: 3300,
          y: 1400,
        },
        {
          id: "npc24",
          x: 3100,
          y: 1600,
        },
        {
          id: "npc15",
          x: 1800,
          y: 3800,
        },
        {
          id: "npc30",
          x: 1500,
          y: 4800,
        },
        {
          id: "npc24",
          x: 1400,
          y: 5e3,
        },
        {
          id: "npc24",
          x: 2e3,
          y: 5100,
        },
        {
          id: "npc33",
          x: 3500,
          y: 4900,
        },
        {
          id: "npc43",
          x: 3200,
          y: 5200,
        },
        {
          id: "npc16",
          x: 3300,
          y: 4200,
        },
        {
          id: "npc17",
          x: 3400,
          y: 3800,
        },
      ],
    }),
    new ModuleScene({
      name: "map2",
      nameInfo: {
        x: 643.2435,
        y: 748.9774,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 1163,
      height: 1550,
      gridType: "gridless",
      imageLeft: 0,
      imageTop: 0,
      imageRight: 1e3,
      imageBottom: 1500,
      imageRows: 15,
      imageCols: 10,
      globalLight: true,
    }),
    new ModuleScene({
      name: "map3",
      nameInfo: {
        x: 27,
        y: 738.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 8,
      width: 1261,
      height: 1636,
      cropLeft: 0,
      cropTop: 0,
      cropRight: 572,
      cropBottom: 741,
      imageLeft: 8,
      imageTop: 6,
      imageRight: 538,
      imageBottom: 726,
      imageRows: 19,
      imageCols: 14,
      globalLight: true,
      journals: [
        {
          x: 450,
          y: 650,
          id: "Nzo2ODozODc",
        },
      ],
      tokens: [
        {
          id: "npc37",
          x: 700,
          y: 1100,
        },
        {
          id: "npc37",
          x: 800,
          y: 1200,
        },
        {
          id: "npc37",
          x: 700,
          y: 1300,
        },
        {
          id: "npc29",
          x: 600,
          y: 1200,
        },
      ],
    }),
    new ModuleScene({
      name: "map4",
      nameInfo: {
        x: 27,
        y: 402.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 8,
      width: 1261,
      height: 1636,
      cropLeft: 0,
      cropTop: 765,
      cropRight: 572,
      cropBottom: 1267,
      imageLeft: 27,
      imageTop: 801,
      imageRight: 558,
      imageBottom: 1256,
      imageRows: 12,
      imageCols: 14,
      globalLight: true,
      journals: [
        {
          x: 450,
          y: 450,
          id: "MTQ6MzMyOjMwMw",
        },
      ],
      tokens: [
        {
          id: "npc26",
          x: 900,
          y: 900,
        },
        {
          id: "npc26",
          x: 950,
          y: 750,
        },
        {
          id: "npc26",
          x: 1150,
          y: 750,
        },
        {
          id: "npc26",
          x: 1250,
          y: 850,
        },
      ],
    }),
    new ModuleScene({
      name: "map5",
      nameInfo: {
        x: 27,
        y: 150.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 8,
      width: 1261,
      height: 1636,
      cropLeft: 0,
      cropTop: 1293,
      cropRight: 572,
      cropBottom: 1636,
      imageLeft: 22,
      imageTop: 1305,
      imageRight: 553,
      imageBottom: 1609,
      imageRows: 8,
      imageCols: 14,
      globalLight: true,
      journals: [
        {
          x: 450,
          y: 350,
          id: "MTU6Njg6NDgz",
        },
      ],
      tokens: [
        {
          id: "npc47",
          x: 1e3,
          y: 700,
        },
      ],
    }),
    new ModuleScene({
      name: "map6",
      nameInfo: {
        x: 299.8727,
        y: 738.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 8,
      width: 1261,
      height: 1636,
      cropLeft: 598,
      cropTop: 0,
      cropRight: 1261,
      cropBottom: 740,
      imageLeft: 631,
      imageTop: 18,
      imageRight: 1238,
      imageBottom: 701,
      imageRows: 18,
      imageCols: 16,
      globalLight: true,
      journals: [
        {
          x: 550,
          y: 550,
          id: "MTM6Njg6NTkx",
        },
      ],
      tokens: [
        {
          id: "npc25",
          x: 1300,
          y: 1200,
        },
      ],
    }),
    new ModuleScene({
      name: "map7",
      nameInfo: {
        x: 299.8727,
        y: 402.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 8,
      width: 1261,
      height: 1636,
      cropLeft: 598,
      cropTop: 766,
      cropRight: 1261,
      cropBottom: 1636,
      imageLeft: 622,
      imageTop: 785,
      imageRight: 1228,
      imageBottom: 1619,
      imageRows: 22,
      imageCols: 16,
      globalLight: true,
      detailsFile: "/standalone/maps/tfop-map7.json",
      journals: [
        {
          x: 550,
          y: 650,
          id: "MTc6Njg6MjQz",
        },
      ],
      tokens: [
        {
          id: "npc27",
          x: 1400,
          y: 1e3,
        },
      ],
    }),
    new ModuleScene({
      name: "map8",
      nameInfo: {
        x: 45,
        y: 724.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 18,
      width: 1261,
      height: 1636,
      imageLeft: 21,
      imageTop: 21,
      imageRight: 1234,
      imageBottom: 1461,
      imageRows: 38,
      imageCols: 32,
      detailsFile: "/standalone/maps/tfop-map8.json",
      journals: [
        {
          x: 1550,
          y: 2850,
          id: "MTk6Njg6NDcx",
        },
        {
          x: 2050,
          y: 2550,
          id: "MTk6Njg6MzI3",
        },
        {
          x: 1750,
          y: 1850,
          id: "MTk6Mjg5OjM5OQ",
        },
        {
          x: 1650,
          y: 2250,
          id: "MTk6Mjg5OjIwNw",
        },
        {
          x: 1650,
          y: 4250,
          id: "MjA6MzMyOjU2Nw",
        },
        {
          x: 2250,
          y: 4550,
          id: "MjE6Njg6NDM1",
        },
        {
          x: 3150,
          y: 3750,
          id: "MjI6MzMyOjY3NQ",
        },
        {
          x: 3450,
          y: 2550,
          id: "MjM6Njg6NTA3",
        },
        {
          x: 950,
          y: 1650,
          id: "MTc6Mjg5OjI5MQ",
        },
      ],
      tokens: [
        {
          id: "npc32",
          x: 1800,
          y: 2100,
        },
        {
          id: "npc34",
          x: 1600,
          y: 3900,
        },
        {
          id: "npc34",
          x: 1600,
          y: 3800,
        },
        {
          id: "npc34",
          x: 1500,
          y: 3800,
        },
        {
          id: "npc34",
          x: 1500,
          y: 3900,
        },
        {
          id: "npc41",
          x: 2e3,
          y: 4600,
        },
        {
          id: "npc6",
          x: 3300,
          y: 3700,
        },
        {
          id: "npc42",
          x: 3009.5238095238096,
          y: 2347.6190476190477,
        },
        {
          id: "npc42",
          x: 3e3,
          y: 2800,
        },
        {
          id: "npc7",
          x: 3400,
          y: 2200,
        },
      ],
    }),
    new ModuleScene({
      name: "map9",
      nameInfo: {
        x: 44.25,
        y: 738.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 28,
      width: 1262,
      height: 903,
      imageLeft: 44,
      imageTop: 47,
      imageRight: 1239,
      imageBottom: 875,
      imageRows: 18,
      imageCols: 26,
      detailsFile: "/standalone/maps/tfop-map9.json",
      journals: [
        {
          x: 2550,
          y: 1450,
          id: "Mjg6MTExOjE1OQ",
        },
        {
          x: 1150,
          y: 1350,
          id: "Mjk6Njg6NjI3",
        },
        {
          x: 750,
          y: 650,
          id: "Mjc6Mjg5Ojg3",
        },
      ],
      tokens: [
        {
          id: "npc22",
          x: 2200,
          y: 1300,
        },
        {
          id: "npc22",
          x: 2300,
          y: 1400,
        },
        {
          id: "npc22",
          x: 2200,
          y: 1500,
        },
        {
          id: "npc38",
          x: 1e3,
          y: 1300,
        },
        {
          id: "npc38",
          x: 1200,
          y: 1400,
        },
      ],
    }),
    new ModuleScene({
      name: "map10",
      nameInfo: {
        x: 42,
        y: 718.6681,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 30,
      width: 1261,
      height: 1636,
      imageLeft: 27,
      imageTop: 296,
      imageRight: 1108,
      imageBottom: 1632,
      imageRows: 47,
      imageCols: 38,
      detailsFile: "/standalone/maps/tfop-map10.json",
      journals: [
        {
          x: 2150,
          y: 5550,
          id: "MzE6Mjg5OjY3NQ",
        },
        {
          x: 4050,
          y: 5150,
          id: "MzI6MTExOjU2Nw",
        },
        {
          x: 4250,
          y: 6150,
          id: "MzM6Mjg5OjU1NQ",
        },
        {
          x: 4150,
          y: 3250,
          id: "MzQ6MzMyOjU3OQ",
        },
        {
          x: 5150,
          y: 3150,
          id: "MzU6Mjg5OjUwNw",
        },
        {
          x: 2950,
          y: 3550,
          id: "MzU6Mjg5OjI1NQ",
        },
        {
          x: 2750,
          y: 2950,
          id: "MzU6Mjg5Ojk5",
        },
        {
          x: 1750,
          y: 2650,
          id: "Mzc6Njg6MzYz",
        },
        {
          x: 1250,
          y: 1950,
          id: "Mjk6Mjg5OjExMQ",
        },
      ],
      tokens: [
        {
          id: "npc23",
          x: 1700,
          y: 2900,
        },
        {
          id: "npc11",
          x: 2800,
          y: 2900,
        },
        {
          id: "npc39",
          x: 4e3,
          y: 2900,
        },
        {
          id: "npc39",
          x: 4e3,
          y: 2700,
        },
        {
          id: "npc40",
          x: 4100,
          y: 5e3,
        },
        {
          id: "npc40",
          x: 4200,
          y: 5400,
        },
        {
          id: "npc9",
          x: 4200,
          y: 4400,
        },
        {
          id: "npc36",
          x: 4800,
          y: 5e3,
        },
        {
          id: "npc36",
          x: 4800,
          y: 5100,
        },
        {
          id: "npc10",
          x: 4100,
          y: 6300,
        },
        {
          id: "npc44",
          x: 2e3,
          y: 5400,
        },
        {
          id: "npc44",
          x: 2800,
          y: 5600,
        },
        {
          id: "npc44",
          x: 2900,
          y: 4900,
        },
        {
          id: "npc44",
          x: 2600,
          y: 6e3,
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
      width: 1259,
      height: 1636,
    }),
    new AdventureImage({
      name: "journal4",
      page: 6,
      width: 1242,
      height: 740,
    }),
    new CaptionImage({
      name: "journal5",
      page: 15,
      width: 423,
      height: 441,
    }),
    new AdventureImage({
      name: "journal6",
      page: 26,
      width: 1246,
      height: 715,
    }),
    new AdventureImage({
      name: "journal7",
      page: 38,
      width: 1238,
      height: 715,
    }),
    new AdventureImage({
      name: "journal8",
      page: 52,
      width: 1238,
      height: 778,
    }),
    new AdventureImage({
      name: "journal9",
      page: 58,
      width: 249,
      height: 405,
    }),
    new AdventureImage({
      name: "journal10",
      page: 58,
      width: 217,
      height: 374,
    }),
    new AdventureImage({
      name: "journal11",
      page: 60,
      width: 253,
      height: 1320,
    }),
    new CaptionImage({
      name: "journal12",
      page: 55,
      width: 421,
      height: 441,
    }),
    new CaptionImage({
      name: "journal13",
      page: 62,
      width: 886,
      height: 1110,
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 9,
        x: 251.7446,
        y: 450.744,
      },
      page: 9,
      width: 441,
      height: 441,
      tokenX: 26,
      tokenY: 98,
      tokenSize: 525,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 13,
        x: 246.248,
        y: 441.994,
      },
      page: 13,
      width: 441,
      height: 441,
      tokenX: 27,
      tokenY: 48,
      tokenSize: 497,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 14,
        x: 294.6693,
        y: 441.744,
      },
      page: 14,
      width: 423,
      height: 441,
      tokenX: 60,
      tokenY: 94,
      tokenSize: 525,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc4",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 15,
        x: 244.8858,
        y: 151.994,
      },
      page: 15,
      width: 423,
      height: 441,
      imageIndex: 1,
      tokenX: 60,
      tokenY: 107,
      tokenSize: 525,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc5",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 17,
        x: 251.028,
        y: 429.744,
      },
      page: 17,
      width: 441,
      height: 441,
      tokenX: 29,
      tokenY: 50,
      tokenSize: 497,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc6",
      actorUuid:
        "Compendium.pf2e.fall-of-plaguestone-bestiary.Actor.1Nr9cgWHMn8KtiXe",
      name: {
        page: 22,
        x: 82.5531,
        y: 90.7439,
      },
      page: 22,
      width: 836,
      height: 1009,
      tokenX: 60,
      tokenY: 61,
      tokenSize: 925,
      forIds: ["MjI6MzYwOjMxNQ"],
    }),
    new ModuleNpc({
      id: "npc7",
      actorUuid:
        "Compendium.pf2e.fall-of-plaguestone-bestiary.Actor.H4yGpC6VuQpszlUl",
      page: 23,
      width: 563,
      height: 1156,
      tokenX: -76,
      tokenY: 52,
      tokenSize: 428,
      forIds: ["MjM6Mjg5OjY3NQ"],
    }),
    new ModuleNpc({
      id: "npc8",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 27,
        x: 248.2097,
        y: 445.244,
      },
      page: 27,
      width: 449,
      height: 469,
      tokenX: 51,
      tokenY: 54,
      tokenSize: 525,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc9",
      actorUuid:
        "Compendium.pf2e.fall-of-plaguestone-bestiary.Actor.23kCcF391RtapbfJ",
      page: 32,
      width: 879,
      height: 1104,
      tokenX: -197,
      tokenY: -15,
      tokenSize: 572,
      forIds: ["MzI6NDEwOjg3"],
    }),
    new ModuleNpc({
      id: "npc10",
      actorUuid:
        "Compendium.pf2e.fall-of-plaguestone-bestiary.Actor.9dUSCjehW90dZalE",
      page: 34,
      width: 894,
      height: 886,
      tokenX: -260,
      tokenY: -34,
      tokenSize: 586,
      forIds: ["MzM6Mjg5OjIzMQ"],
    }),
    new ModuleNpc({
      id: "npc11",
      actorUuid:
        "Compendium.pf2e.fall-of-plaguestone-bestiary.Actor.h9b23NJBKSACAkWa",
      page: 36,
      width: 842,
      height: 1089,
      tokenX: -287,
      tokenY: 18,
      tokenSize: 361,
      forIds: ["MzY6MTExOjI3OQ"],
    }),
    new ModuleNpc({
      id: "npc12",
      actorUuid:
        "Compendium.pf2e.fall-of-plaguestone-bestiary.Actor.3h9BvfzrIU6fNxch",
      page: 40,
      width: 903,
      height: 1082,
      tokenX: -305,
      tokenY: 16,
      tokenSize: 354,
      forIds: ["NDA6MTExOjU2Nw"],
    }),
    new ModuleNpc({
      id: "npc13",
      actorUuid:
        "Compendium.pf2e.fall-of-plaguestone-bestiary.Actor.mTVzzdrinwHbsvqu",
      page: 42,
      width: 844,
      height: 1128,
      tokenX: -273,
      tokenY: -66,
      tokenSize: 344,
      forIds: ["NDI6MTExOjYyNw"],
    }),
    new ModuleNpc({
      id: "npc14",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.9wNjq9BirBoxyJVH",
      name: {
        page: 43,
        x: 231.8862,
        y: 361.244,
      },
      page: 43,
      width: 600,
      height: 776,
      tokenX: -52,
      tokenY: -52,
      tokenSize: 440,
      forIds: ["NDM6MzA5OjQxMQ"],
    }),
    new ModuleNpc({
      id: "npc15",
      actorUuid:
        "Compendium.pf2e.fall-of-plaguestone-bestiary.Actor.lPHwAyFAeAhHLNnU",
      page: 46,
      width: 984,
      height: 1011,
      tokenX: -200,
      tokenY: -38,
      tokenSize: 535,
      forIds: ["NDY6MzMyOjY3NQ"],
    }),
    new ModuleNpc({
      id: "npc16",
      actorUuid:
        "Compendium.pf2e.fall-of-plaguestone-bestiary.Actor.IU4Gx9vHKMT2KYDq",
      page: 48,
      width: 747,
      height: 834,
      tokenX: 44,
      tokenY: 0,
      tokenSize: 834,
      forIds: ["NDk6Njg6NTA3"],
    }),
    new ModuleNpc({
      id: "npc17",
      actorUuid:
        "Compendium.pf2e.fall-of-plaguestone-bestiary.Actor.Er9kW7JtUX4zf15Q",
      page: 49,
      width: 735,
      height: 1040,
      tokenX: -138,
      tokenY: 35,
      tokenSize: 312,
      forIds: ["NDk6Njg6MTM1"],
    }),
    new ModuleNpc({
      id: "npc18",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 51,
        x: 262.5131,
        y: 439.5951,
      },
      page: 51,
      width: 449,
      height: 469,
      tokenX: 89,
      tokenY: 100,
      tokenSize: 581,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc19",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 53,
        x: 252.4104,
        y: 439.994,
      },
      page: 53,
      width: 441,
      height: 441,
      tokenX: 52,
      tokenY: 102,
      tokenSize: 581,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc20",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 54,
        x: 293.6213,
        y: 439.8221,
      },
      page: 54,
      width: 441,
      height: 441,
      tokenX: 41,
      tokenY: 92,
      tokenSize: 525,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc21",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 55,
        x: 246.9751,
        y: 439.4004,
      },
      page: 55,
      width: 421,
      height: 441,
      tokenX: 34,
      tokenY: 84,
      tokenSize: 525,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc22",
      actorUuid:
        "Compendium.pf2e.fall-of-plaguestone-bestiary.Actor.C7Wb70xpG2PvTslg",
      page: 64,
      width: 740,
      height: 836,
      tokenX: 48,
      tokenY: 0,
      tokenSize: 836,
      forIds: ["NjQ6MjU5OjYzOQ", "Mjk6Njg6Njc1"],
    }),
    new ModuleNpc({
      id: "npc23",
      actorUuid:
        "Compendium.pf2e.fall-of-plaguestone-bestiary.Actor.b2PXIdbqdzlkGkeX",
      page: 65,
      width: 718,
      height: 821,
      tokenX: 52,
      tokenY: 0,
      tokenSize: 821,
      forIds: ["Mzc6Mjg5OjYxNQ", "NjU6Njg6NjE1"],
    }),
    new ModuleNpc({
      id: "npc24",
      actorUuid:
        "Compendium.pf2e.fall-of-plaguestone-bestiary.Actor.yFfT9yPbUzldlhxN",
      label: "AD",
      forIds: ["NTE6Njg6OTk", "NDc6Mjg5OjUzMQ", "NDU6Njg6MzM5"],
    }),
    new ModuleNpc({
      id: "npc25",
      actorUuid:
        "Compendium.pf2e.fall-of-plaguestone-bestiary.Actor.JtBjUnYz859krAVv",
      label: "BS",
      forIds: ["MTM6Njg6MzAz"],
    }),
    new ModuleNpc({
      id: "npc26",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.HpD0BTfid3hnUEWj",
      label: "B",
      forIds: ["MTQ6MzMyOjIzMQ"],
    }),
    new ModuleNpc({
      id: "npc27",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.IyhbcdTVmkV4pSju",
      label: "B",
      forIds: ["MTc6Njg6NjM"],
    }),
    new ModuleNpc({
      id: "npc28",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.H7z7VHzlHlEFev1r",
      label: "BS",
      forIds: ["NDQ6MzMyOjQ0Nw"],
    }),
    new ModuleNpc({
      id: "npc29",
      actorUuid:
        "Compendium.pf2e.fall-of-plaguestone-bestiary.Actor.PFBclNHc78MqYjBB",
      label: "CW",
      forIds: ["NzoyODk6MjY3"],
    }),
    new ModuleNpc({
      id: "npc30",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.xN5J9S485LxFZMkL",
      label: "CR",
      forIds: ["NDc6Mjg5OjU3OQ"],
    }),
    new ModuleNpc({
      id: "npc31",
      actorUuid:
        "Compendium.pf2e.fall-of-plaguestone-bestiary.Actor.BgBTntoz1qQ3h1X5",
      label: "DF",
      forIds: ["MTA6MTExOjk5"],
    }),
    new ModuleNpc({
      id: "npc32",
      actorUuid:
        "Compendium.pf2e.fall-of-plaguestone-bestiary.Actor.rn6KT8OMYUi0EuCN",
      label: "FD",
      forIds: ["MjA6MTExOjYzOQ"],
    }),
    new ModuleNpc({
      id: "npc33",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.xnpuGO8jEMba9wy5",
      label: "GB",
      forIds: ["NDg6MTExOjQ0Nw"],
    }),
    new ModuleNpc({
      id: "npc34",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.KHTYbQgR5hnFZdGL",
      label: "GD",
      forIds: ["MjE6Njg6Njc1"],
    }),
    new ModuleNpc({
      id: "npc35",
      actorUuid:
        "Compendium.pf2e.fall-of-plaguestone-bestiary.Actor.iPEuJ3rnGsrje66q",
      label: "IFT",
      forIds: ["NDM6Mjg5OjExMQ"],
    }),
    new ModuleNpc({
      id: "npc36",
      actorUuid:
        "Compendium.pf2e.fall-of-plaguestone-bestiary.Actor.EhtODTbFdElXSyXX",
      label: "IR",
      forIds: ["MzM6Njg6NDQ3"],
    }),
    new ModuleNpc({
      id: "npc37",
      actorUuid:
        "Compendium.pf2e.fall-of-plaguestone-bestiary.Actor.kZI5UjgXcJjrOIR8",
      label: "MW",
      forIds: ["Nzo2ODoxMjM"],
    }),
    new ModuleNpc({
      id: "npc38",
      actorUuid:
        "Compendium.pf2e.fall-of-plaguestone-bestiary.Actor.WV8sdgARGVUb39WM",
      label: "MW",
      forIds: ["Mjk6Njg6MjA3"],
    }),
    new ModuleNpc({
      id: "npc39",
      actorUuid:
        "Compendium.pf2e.fall-of-plaguestone-bestiary.Actor.X0AJV2Zfj2d6rab5",
      label: "OA",
      forIds: ["MzQ6MzMyOjI3OQ"],
    }),
    new ModuleNpc({
      id: "npc40",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.cDm6PzhO5nXlkGoi",
      label: "OB",
      forIds: [
        "NDI6MTExOjY3NQ",
        "Mzk6Mjg5OjYyNw",
        "MzI6MzQ1OjI5MQ",
        "NDE6Njg6NTA3",
      ],
    }),
    new ModuleNpc({
      id: "npc41",
      actorUuid: "Compendium.pf2e.hazards.Actor.v2xIxZ9ZZ6fJyATF",
      label: "PL",
      forIds: ["MjE6Mjg5OjM4Nw"],
    }),
    new ModuleNpc({
      id: "npc42",
      actorUuid: "Compendium.pf2e.hazards.Actor.vlMuFskctUvjJe8X",
      label: "SL",
      forIds: ["MTk6Njg6MTQ3", "MjQ6MzMyOjM2Mw"],
    }),
    new ModuleNpc({
      id: "npc43",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.2mg30nJR6P3HJDSd",
      label: "VBS",
      forIds: ["NDg6MTExOjM4Nw"],
    }),
    new ModuleNpc({
      id: "npc44",
      actorUuid:
        "Compendium.pf2e.fall-of-plaguestone-bestiary.Actor.wBCpq9pX4NZFXE0T",
      label: "VL",
      forIds: ["NjQ6Mjk1OjMzOQ", "MzE6Mjg5OjM4Nw"],
    }),
    new ModuleNpc({
      id: "npc45",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.N98ug9jQHqeFoK1N",
      label: "GC",
      forIds: ["NjE6Mjg5OjEzNQ"],
    }),
    new ModuleNpc({
      id: "npc46",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.sAfjpjAS56jtrUbi",
      label: "ZH",
      forIds: ["NDE6Mjg5OjQ3MQ"],
    }),
    new ModuleNpc({
      id: "npc47",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.6K4RWus85o8iqy0t",
      label: "GB",
      forIds: ["MTU6Njg6ODc"],
    }),
  ];
  journalPages = [
    {
      name: "Part 1",
      pages: [
        {
          id: "NjoyNzc6Mzg5",
        },
        {
          id: "Nzo2ODozODc",
        },
        {
          id: "OTo2ODoyMDc",
        },
        {
          id: "OToyODk6MzI3",
        },
        {
          id: "OToyODk6OTk",
        },
        {
          id: "MTA6MzMyOjEzNQ",
        },
        {
          id: "MTE6Njg6MTIz",
        },
        {
          id: "MTE6Mjg5OjE3MQ",
        },
        {
          id: "MTI6MTExOjM5OQ",
        },
        {
          id: "MTI6MzMyOjU0Mw",
        },
        {
          id: "MTI6MzMyOjExMQ",
        },
        {
          id: "MTM6Njg6NTkx",
        },
        {
          id: "MTM6Mjg5OjM5OQ",
        },
        {
          id: "MTM6Mjg5OjEzNQ",
        },
        {
          id: "MTQ6MzMyOjMwMw",
        },
        {
          id: "MTQ6MzMyOjE3MQ",
        },
        {
          id: "MTU6Njg6NDgz",
        },
        {
          id: "MTU6MjgzOjY3NQ",
        },
        {
          id: "MTU6MzEyOjQ0Nw",
        },
        {
          id: "MTU6MzQyOjMzOQ",
        },
        {
          id: "MTU6MjgzOjYz",
        },
        {
          id: "MTY6MTExOjMzOQ",
        },
        {
          id: "MTY6MzMyOjQ1OQ",
        },
        {
          id: "MTc6Njg6NTA3",
        },
        {
          id: "MTc6Njg6MzAz",
        },
        {
          id: "MTc6Njg6MjQz",
        },
        {
          id: "MTc6Mjg5OjI5MQ",
        },
        {
          id: "MTk6Njg6NDcx",
        },
        {
          id: "MTk6Njg6MzI3",
        },
        {
          id: "MTk6Mjg5OjM5OQ",
        },
        {
          id: "MTk6Mjg5OjIwNw",
        },
        {
          id: "MjA6MzMyOjU2Nw",
        },
        {
          id: "MjE6Njg6NDM1",
        },
        {
          id: "MjI6MzMyOjY3NQ",
        },
        {
          id: "MjM6Njg6NTA3",
        },
        {
          id: "MjQ6MzMyOjEyMw",
        },
        {
          id: "MjU6Njg6Njc1",
        },
        {
          id: "MjU6Mjk4OjY3NQ",
        },
        {
          id: "MjU6Njg6MTgz",
        },
      ],
    },
    {
      name: "Part 2",
      pages: [
        {
          id: "MjY6Mjc2OjM4OQ",
        },
        {
          id: "MjY6MzMyOjExMQ",
        },
        {
          id: "Mjc6Njg6MjU1",
        },
        {
          id: "Mjc6Mjg5Ojg3",
        },
        {
          id: "Mjg6MTExOjE1OQ",
        },
        {
          id: "Mjk6Njg6NjI3",
        },
        {
          id: "Mjk6Mjg5OjMxNQ",
        },
        {
          id: "Mjk6Mjg5OjExMQ",
        },
        {
          id: "MzE6Njg6NDk1",
        },
        {
          id: "MzE6Mjg5OjY3NQ",
        },
        {
          id: "MzI6MTExOjU2Nw",
        },
        {
          id: "MzM6Mjg5OjU1NQ",
        },
        {
          id: "MzQ6MzMyOjU3OQ",
        },
        {
          id: "MzU6Mjg5OjUwNw",
        },
        {
          id: "MzU6Mjg5OjI1NQ",
        },
        {
          id: "MzU6Mjg5Ojk5",
        },
        {
          id: "Mzc6Njg6MzYz",
        },
        {
          id: "Mzc6Mjg5OjMzOQ",
        },
      ],
    },
    {
      name: "Part 3",
      pages: [
        {
          id: "Mzg6Mjc1OjM4OQ",
        },
        {
          id: "Mzg6MTExOjIzMQ",
        },
        {
          id: "Mzg6MzMyOjE4Mw",
        },
        {
          id: "Mzk6Njg6MjY3",
        },
        {
          id: "Mzk6Mjg5OjU3OQ",
        },
        {
          id: "NDA6MzMyOjE3MQ",
        },
        {
          id: "NDE6Njg6MzAz",
        },
        {
          id: "NDE6Mjg5OjQyMw",
        },
        {
          id: "NDI6MzMyOjUxOQ",
        },
        {
          id: "NDI6MzY0OjM1MQ",
        },
        {
          id: "NDM6Njg6MjMx",
        },
        {
          id: "NDM6MjkzOjM2Mw",
        },
        {
          id: "NDQ6MTExOjU1NQ",
        },
        {
          id: "NDQ6MTExOjEzNQ",
        },
        {
          id: "NDQ6MzMyOjM5OQ",
        },
        {
          id: "NDQ6MzMyOjI5MQ",
        },
        {
          id: "NDU6Mjg5OjQyMw",
        },
        {
          id: "NDU6Mjg5OjIzMQ",
        },
        {
          id: "NDY6MzcyOjM4Nw",
        },
        {
          id: "NDc6Mjg5OjI1NQ",
        },
        {
          id: "NDg6MTExOjY3NQ",
        },
        {
          id: "NDg6MzMyOjY3NQ",
        },
        {
          id: "NTA6MTExOjE0Nw",
        },
        {
          id: "NTA6MzMyOjYzOQ",
        },
        {
          id: "NTA6MzMyOjMwMw",
        },
        {
          id: "NTE6Njg6Njc1",
        },
        {
          id: "NTE6MzI4OjUwNw",
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
      ],
    },
    {
      name: "Back Matter",
      pages: [
        {
          id: "NTM6Njg6NDk1",
        },
        {
          id: "NTM6Njg6MzI3",
        },
        {
          id: "NTQ6MTExOjk5",
        },
        {
          id: "NTY6MTExOjI1NQ",
        },
        {
          id: "NTc6Njg6Njc1",
        },
        {
          id: "NTc6Njg6NDU5",
        },
        {
          id: "NTc6Njg6Mjkx",
        },
        {
          id: "NTc6Njg6MTIz",
        },
        {
          id: "NTc6Mjg5OjM2Mw",
        },
        {
          id: "NTc6Mjg5OjE4Mw",
        },
        {
          id: "NTg6MTExOjY3NQ",
        },
        {
          id: "NTg6MTExOjU3OQ",
        },
        {
          id: "NTg6MzMyOjExMQ",
        },
        {
          id: "NTk6Njg6NzU",
        },
        {
          id: "NTk6Mjg5OjE1OQ",
        },
        {
          id: "NjE6Njg6Njc1",
        },
        {
          id: "NjE6Njg6NDk1",
        },
        {
          id: "NjE6Mjg5OjU0Mw",
        },
        {
          id: "NjI6MTExOjYxNQ",
        },
        {
          id: "NjM6Njg6NjM5",
        },
        {
          id: "NjM6Mjg5OjU3OQ",
        },
        {
          id: "NjQ6MjU5OjY3NQ",
        },
        {
          id: "NjU6MzYzOjYzOQ",
        },
        {
          id: "NjU6Njg6Njc1",
        },
        {
          id: "NzoyOTk6Njc1",
        },
        {
          id: "MTA6MTIxOjY3NQ",
        },
        {
          id: "NTY6MTIwOjY3NQ",
        },
        {
          id: "NTc6Mjk4OjY3NQ",
        },
        {
          id: "NjQ6MTkxOjYzOQ",
        },
        {
          id: "NjQ6MTg4OjQ1OQ",
        },
      ],
    },
  ];
  combines = [];
  detect(pdf) {
    return !!pdf.textDetails.some(
      (t) => t.text.trim() === "THE FALL OF" && t.fontId === "CaslonAntique:30",
    );
  }
  preprocess(text) {
    this.mergeWithNext(text, 2, 28.6835, 747.6781);
    this.mergeWithNext(text, 2, 28.6835, 747.6781);
    this.mergeWithNext(text, 15, 179.4959, 87);
    for (let i = 0; i < text.length; i++) {
      text[i].page === 15 &&
        Math.abs(text[i].x - 283.247) < 1 &&
        (text[i].x = 288.75);
    }
  }
  extractDetails(text, moduleData, sectionKey) {
    return super.extractDetails(text, moduleData, sectionKey);
  }
  ChapterHeadingPageLayout(pageNum) {
    return (pdf, emit) => {
      const headerBlocks = pdf.textDetails
          .filter((t) => t.page === pageNum && t.fontId === "CaslonAntique:30")
          .map((t) => t.y),
        headingStartY = Math.max(...headerBlocks) + 40,
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
        120.85,
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
          298.6,
          page.col2X2,
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
        (x) => x.fontName === "ColiseumBold" && x.fontSize >= 21 && x.y < 720,
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
