import { AdventureBase } from "../../core/adventure-base.js";
import { AdventureImage, CaptionImage } from "../../core/images.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class TheSlithering extends AdventureBase {
  prefix = "the-slithering";
  fullName = "The Slithering";
  blacklistedFonts = [
    "Times-Italic:8",
    "RomicStd-Bold:12",
    "TradeGothicLTStd-BdCn20:12",
    "TradeGothicLTStd-BdCn20:8",
    "Taroca:12",
    "TradeGothicLTStd-BdCn20:11.0714",
    "CBGBFontSolid:12",
  ];
  headingFontIds = [
    "GoodOT-News:12",
    "GoodOT:12",
    "GoodOT-CondBold:12",
    "GoodOT-Bold:12",
    "GoodOT-CondBold:14",
    "GoodOT-Cond:13",
    "GoodOT-Bold:14",
    "Flyerfonts-Filler:36",
    "Flyerfonts-Filler:14",
    "Flyerfonts-Filler:54",
    "Flyerfonts-Filler:60",
  ];
  normalFontIds = [
    "SabonLTStd-Roman:9",
    "Sabon-Roman:9",
    "GoodOT:8.5",
    "GoodOT:9",
    "Dax-Regular:9",
    "Pathfinder-Icons:9",
    "SabonLTStd-Roman:12",
  ];
  subheadingFontIds = [];
  italicFontIds = [
    "SabonLTStd-Italic:9",
    "Sabon-Italic:9",
    "GoodOT-Italic:8.5",
    "GoodOT-Italic:9",
    "SabonLTStd-Italic:12",
    "TimesNewRomanPS-BoldItalicMT:9",
  ];
  boldFontIds = [
    "TimesNewRomanPS-BoldMT:9",
    "TimesNewRomanPSMT:9",
    "Sabon-Bold:9",
    "GoodOT:8.5",
    "GoodOT:8",
    "GoodOT-Bold:8.5",
  ];
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
    this.RightSingleColumnWithSidebar(7),
    this.LeftTwoColumn(8),
    this.RightTwoColumn(9),
    this.LeftTwoColumnWithLeftCutout(10, 270),
    this.RightTwoColumn(11),
    this.LeftTwoColumn(12),
    this.RightTwoColumn(13),
    this.LeftTwoColumn(14),
    this.RightTwoColumn(15),
    this.LeftTwoColumnWithMap(16, 320),
    this.RightTwoColumn(17),
    this.LeftTwoColumn(18),
    this.RightTwoColumn(19),
    this.LeftTwoColumnWithLeftCutout(20, 510),
    this.RightTwoColumn(21),
    this.LeftTwoColumn(22),
    this.RightTwoColumn(23),
    this.LeftTwoColumn(24),
    this.RightTwoColumn(25),
    this.ChapterHeadingPageLayout(26),
    this.RightSingleColumnWithSidebar(27),
    this.LeftTwoColumnWithMap(28, 320),
    this.RightTwoColumn(29),
    this.LeftTwoColumnWithLeftCutout(30, 430),
    this.RightTwoColumn(31),
    this.LeftTwoColumnWithLeftCutout(32, 460),
    this.RightTwoColumn(33),
    this.LeftTwoColumn(34),
    this.RightTwoColumn(35),
    this.LeftTwoColumn(36),
    this.RightTwoColumn(37),
    this.LeftTwoColumn(38),
    this.RightTwoColumn(39),
    this.LeftTwoColumn(40),
    this.RightTwoColumn(41),
    this.ChapterHeadingPageLayout(42),
    this.RightSingleColumnWithSidebar(43),
    this.LeftTwoColumnWithMap(44, 320),
    this.RightTwoColumnWithRightCutout(45, 140),
    this.LeftTwoColumn(46),
    this.RightTwoColumn(47),
    this.LeftTwoColumn(48),
    this.RightTwoColumn(49),
    this.LeftTwoColumn(50),
    this.RightTwoColumn(51),
    this.LeftTwoColumn(52),
    this.RightTwoColumn(53),
    this.RightChapterHeadingPageLayout(55),
    this.RightTwoColumn(57),
    this.LeftTwoColumn(58),
    this.RightTwoColumn(59),
    this.RightChapterHeadingPageLayout(61),
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
      width: 1551,
      height: 1246,
      imageIndex: 0,
      imageLeft: 12,
      imageRight: 1436,
      imageCols: 28,
      imageTop: 115,
      imageBottom: 1132,
      imageRows: 20,
      globalLight: true,
      detailsFile: "/standalone/maps/slithering-map1.json",
      journals: [
        {
          x: 1050,
          y: 1350,
          id: "MjA6OTk6MTIz",
        },
        {
          x: 1150,
          y: 950,
          id: "MjA6MzI2OjU5MQ",
        },
        {
          x: 1250,
          y: 2050,
          id: "MjA6MzI2OjMzOQ",
        },
        {
          x: 1850,
          y: 2050,
          id: "MjE6Njg6MzYz",
        },
        {
          x: 1050,
          y: 2750,
          id: "MjE6Mjk1OjQ4Mw",
        },
        {
          x: 2050,
          y: 2850,
          id: "MjE6Mjk1OjI0Mw",
        },
        {
          x: 2450,
          y: 1250,
          id: "MjI6OTk6MjMx",
        },
        {
          x: 1750,
          y: 1250,
          id: "MjM6Njg6Njk5",
        },
        {
          x: 1650,
          y: 850,
          id: "MjM6Njg6MzI3",
        },
        {
          x: 3250,
          y: 1150,
          id: "MjM6Mjk1OjY1MQ",
        },
        {
          x: 3550,
          y: 1150,
          id: "MjM6Mjk1OjIzMQ",
        },
        {
          x: 3250,
          y: 1550,
          id: "MjM6Mjk1OjE1OQ",
        },
        {
          x: 3050,
          y: 2550,
          id: "MjU6Njg6NDM1",
        },
      ],
      tokens: [
        {
          id: "npc23",
          x: 1400,
          y: 2300,
        },
        {
          id: "npc23",
          x: 1e3,
          y: 2e3,
        },
        {
          id: "npc23",
          x: 1e3,
          y: 2100,
        },
        {
          id: "npc23",
          x: 1e3,
          y: 2200,
        },
        {
          id: "npc23",
          x: 1200,
          y: 2300,
        },
        {
          id: "npc23",
          x: 1300,
          y: 2300,
        },
        {
          id: "npc30",
          x: 1800,
          y: 2700,
        },
        {
          id: "npc30",
          x: 2e3,
          y: 2700,
        },
        {
          id: "npc29",
          x: 1800,
          y: 2800,
        },
        {
          id: "npc21",
          x: 1800,
          y: 1300,
        },
        {
          id: "npc21",
          x: 1900,
          y: 1400,
        },
        {
          id: "npc35",
          x: 1700,
          y: 700,
        },
        {
          id: "npc30",
          x: 2400,
          y: 1100,
        },
        {
          id: "npc24",
          x: 2500,
          y: 1300,
        },
        {
          id: "npc24",
          x: 2400,
          y: 1300,
        },
        {
          id: "npc24",
          x: 2200,
          y: 1300,
        },
        {
          id: "npc24",
          x: 2300,
          y: 1300,
        },
        {
          id: "npc24",
          x: 3200,
          y: 1200,
        },
        {
          id: "npc5",
          x: 3300,
          y: 1500,
        },
        {
          id: "npc24",
          x: 3e3,
          y: 1500,
        },
        {
          id: "npc24",
          x: 3100,
          y: 1500,
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
      width: 1551,
      height: 1246,
      imageIndex: 1,
      imageLeft: 13,
      imageRight: 1538,
      imageCols: 30,
      imageTop: 64,
      imageBottom: 1233,
      imageRows: 23,
      globalLight: true,
      detailsFile: "/standalone/maps/slithering-map2.json",
      journals: [
        {
          x: 2250,
          y: 2650,
          id: "MzA6MzI2OjM1MQ",
        },
        {
          x: 2950,
          y: 2650,
          id: "MzE6Njg6MzI3",
        },
        {
          x: 3450,
          y: 2850,
          id: "MzE6Mjk1OjYwMw",
        },
        {
          x: 3450,
          y: 2250,
          id: "MzI6OTk6MjA3",
        },
        {
          x: 1750,
          y: 2650,
          id: "MzI6MzI2OjYwMw",
        },
        {
          x: 1150,
          y: 2650,
          id: "MzM6Njg6NDQ3",
        },
        {
          x: 1150,
          y: 2150,
          id: "MzQ6OTk6NTMx",
        },
        {
          x: 2250,
          y: 1750,
          id: "MzQ6MzI2OjQ1OQ",
        },
        {
          x: 3150,
          y: 1050,
          id: "MzY6MzI2OjYyNw",
        },
        {
          x: 3550,
          y: 950,
          id: "Mzc6Njg6NjI3",
        },
        {
          x: 3350,
          y: 1750,
          id: "Mzc6Njg6Mzk5",
        },
        {
          x: 2250,
          y: 950,
          id: "Mzc6Mjk1OjMzOQ",
        },
        {
          x: 1750,
          y: 950,
          id: "Mzg6OTk6MTIz",
        },
        {
          x: 1250,
          y: 1050,
          id: "Mzg6MzI2OjQ1OQ",
        },
        {
          x: 1250,
          y: 1650,
          id: "Mzk6Mjk1OjU5MQ",
        },
      ],
      tokens: [
        {
          id: "npc27",
          x: 1300,
          y: 2100,
        },
        {
          id: "npc8",
          x: 1200,
          y: 2500,
        },
        {
          id: "npc20",
          x: 1700,
          y: 2700,
        },
        {
          id: "npc7",
          x: 1600,
          y: 2600,
        },
        {
          id: "npc7",
          x: 1600,
          y: 2700,
        },
        {
          id: "npc18",
          x: 2300,
          y: 2800,
        },
        {
          id: "npc28",
          x: 2800,
          y: 2500,
        },
        {
          id: "npc25",
          x: 3e3,
          y: 2500,
          elite: true,
        },
        {
          id: "npc25",
          x: 3e3,
          y: 2700,
          elite: true,
        },
        {
          id: "npc15",
          x: 3400,
          y: 1600,
        },
        {
          id: "npc7",
          x: 3200,
          y: 1600,
        },
        {
          id: "npc7",
          x: 3200,
          y: 1100,
        },
        {
          id: "npc7",
          x: 3300,
          y: 1100,
        },
        {
          id: "npc7",
          x: 3200,
          y: 1300,
        },
        {
          id: "npc7",
          x: 3500,
          y: 1300,
        },
        {
          id: "npc33",
          x: 1300,
          y: 1e3,
        },
        {
          id: "npc37",
          x: 1200,
          y: 1100,
        },
        {
          id: "npc20",
          x: 1200,
          y: 1400,
        },
        {
          id: "npc20",
          x: 1300,
          y: 1700,
        },
        {
          id: "npc15",
          x: 2300,
          y: 1600,
        },
        {
          id: "npc9",
          x: 2400,
          y: 1300,
        },
        {
          id: "npc7",
          x: 2200,
          y: 1900,
        },
        {
          id: "npc7",
          x: 2e3,
          y: 1800,
        },
      ],
    }),
    new ModuleScene({
      name: "map3",
      nameInfo: {
        x: 12,
        y: 730.6681,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 16,
      width: 1259,
      height: 864,
      imageLeft: 15,
      imageRight: 1240,
      imageCols: 38,
      imageTop: 32,
      imageBottom: 837,
      imageRows: 25,
      globalLight: true,
      detailsFile: "/standalone/maps/slithering-map3.json",
      journals: [
        {
          x: 1750,
          y: 2750,
          id: "MTU6Njg6MzAz",
        },
        {
          x: 1750,
          y: 1850,
          id: "MTU6Njg6MTEx",
        },
        {
          x: 2350,
          y: 1150,
          id: "MTU6Mjk1OjIzMQ",
        },
        {
          x: 2350,
          y: 2150,
          id: "MTc6Njg6MzUx",
        },
        {
          x: 3150,
          y: 2150,
          id: "MTc6Mjk1OjY5OQ",
        },
        {
          x: 3150,
          y: 1150,
          id: "MTg6OTk6NTU1",
        },
        {
          x: 4050,
          y: 2350,
          id: "MTg6OTk6MTIz",
        },
        {
          x: 4050,
          y: 1750,
          id: "MTg6MzI2OjU0Mw",
        },
        {
          x: 4150,
          y: 1150,
          id: "MTg6MzI2OjM4Nw",
        },
        {
          x: 1050,
          y: 750,
          id: "MTU6Njg6NjUx",
        },
      ],
      tokens: [
        {
          id: "npc44",
          x: 1200,
          y: 1300,
        },
        {
          id: "npc31",
          x: 1700,
          y: 1700,
        },
        {
          id: "npc1",
          x: 2200,
          y: 1500,
        },
        {
          id: "npc1",
          x: 2400,
          y: 1500,
        },
        {
          id: "npc16",
          x: 2500,
          y: 1100,
        },
        {
          id: "npc40",
          x: 3100,
          y: 1900,
        },
        {
          id: "npc42",
          x: 4e3,
          y: 1200,
        },
        {
          id: "npc42",
          x: 4100,
          y: 1e3,
        },
      ],
    }),
    new ModuleScene({
      name: "map4a",
      nameInfo: {
        x: 14,
        y: 733.7548,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 28,
      width: 1259,
      height: 864,
      cropLeft: 0,
      cropRight: 396,
      cropTop: 0,
      cropBottom: 864,
      imageLeft: 20,
      imageRight: 1235,
      imageCols: 41,
      imageTop: 9,
      imageBottom: 838,
      imageRows: 28,
      globalLight: true,
      detailsFile: "/standalone/maps/slithering-map4a.json",
      journals: [
        {
          x: 950,
          y: 2550,
          id: "Mjc6Njg6MzE1",
        },
        {
          x: 450,
          y: 850,
          id: "Mjc6Njg6MzE1",
        },
      ],
      tokens: [
        {
          id: "npc43",
          x: 700,
          y: 1500,
        },
        {
          id: "npc43",
          x: 900,
          y: 1700,
        },
        {
          id: "npc43",
          x: 600,
          y: 2e3,
        },
      ],
    }),
    new ModuleScene({
      name: "map4b",
      nameInfo: {
        x: 203.625,
        y: 733.7548,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 28,
      width: 1259,
      height: 864,
      cropLeft: 411,
      cropRight: 782,
      cropTop: 0,
      cropBottom: 864,
      imageLeft: 20,
      imageRight: 1235,
      imageCols: 41,
      imageTop: 9,
      imageBottom: 838,
      imageRows: 28,
      globalLight: true,
      detailsFile: "/standalone/maps/slithering-map4b.json",
      journals: [
        {
          x: 1050,
          y: 1650,
          id: "Mjg6OTk6MTU5",
        },
      ],
      tokens: [
        {
          id: "npc32",
          x: 500,
          y: 2200,
        },
        {
          id: "npc32",
          x: 500,
          y: 3e3,
        },
        {
          id: "npc32",
          x: 1400,
          y: 2600,
        },
      ],
    }),
    new ModuleScene({
      name: "map4c",
      nameInfo: {
        x: 393.25,
        y: 733.7548,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 28,
      width: 1259,
      height: 864,
      cropLeft: 799,
      cropRight: 1259,
      cropTop: 0,
      cropBottom: 864,
      imageLeft: 20,
      imageRight: 1235,
      imageCols: 41,
      imageTop: 9,
      imageBottom: 838,
      imageRows: 28,
      globalLight: true,
      detailsFile: "/standalone/maps/slithering-map4c.json",
      journals: [
        {
          x: 550,
          y: 850,
          id: "Mjk6Njg6NTMx",
        },
      ],
      tokens: [
        {
          id: "npc6",
          x: 1e3,
          y: 2300,
        },
        {
          id: "npc6",
          x: 1200,
          y: 2300,
        },
      ],
    }),
    new ModuleScene({
      name: "map5a",
      nameInfo: {
        x: 13,
        y: 732.7548,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 44,
      width: 1259,
      height: 865,
      cropLeft: 0,
      cropRight: 792,
      cropTop: 0,
      cropBottom: 437,
      imageLeft: 7,
      imageRight: 1239,
      imageCols: 42,
      imageTop: 32,
      imageBottom: 854,
      imageRows: 28,
      globalLight: true,
      detailsFile: "/standalone/maps/slithering-map5a.json",
      journals: [
        {
          x: 750,
          y: 450,
          id: "NDI6OTk6OTk",
        },
      ],
      tokens: [
        {
          id: "npc26",
          x: 2300,
          y: 1e3,
          elite: true,
        },
      ],
    }),
    new ModuleScene({
      name: "map5b",
      nameInfo: {
        x: 13,
        y: 519,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 44,
      width: 1259,
      height: 865,
      cropLeft: 0,
      cropRight: 792,
      cropTop: 454,
      cropBottom: 865,
      imageLeft: 7,
      imageRight: 1239,
      imageCols: 42,
      imageTop: 32,
      imageBottom: 854,
      imageRows: 28,
      globalLight: true,
      detailsFile: "/standalone/maps/slithering-map5b.json",
      journals: [
        {
          x: 750,
          y: 550,
          id: "NDM6Njg6Mzc1",
        },
      ],
      tokens: [
        {
          id: "npc36",
          x: 2e3,
          y: 800,
        },
        {
          id: "npc36",
          x: 2e3,
          y: 1e3,
        },
        {
          id: "npc36",
          x: 1800,
          y: 1100,
        },
      ],
    }),
    new ModuleScene({
      name: "map5c",
      nameInfo: {
        x: 396.8623,
        y: 732.7548,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 44,
      width: 1259,
      height: 865,
      cropLeft: 808,
      cropRight: 1259,
      cropTop: 0,
      cropBottom: 865,
      imageLeft: 7,
      imageRight: 1239,
      imageCols: 42,
      imageTop: 32,
      imageBottom: 854,
      imageRows: 28,
      globalLight: true,
      detailsFile: "/standalone/maps/slithering-map5c.json",
      journals: [
        {
          x: 450,
          y: 850,
          id: "NDM6Njg6NjYz",
        },
      ],
      tokens: [
        {
          id: "npc34",
          x: 800,
          y: 1900,
        },
        {
          id: "npc34",
          x: 800,
          y: 1500,
        },
        {
          id: "npc34",
          x: 1100,
          y: 1200,
        },
      ],
    }),
    new ModuleScene({
      name: "map6",
      nameInfo: {
        x: 46,
        y: 730.6681,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 56,
      width: 1259,
      height: 1636,
      gridType: "gridless",
      imageLeft: 0,
      imageRight: 1e3,
      imageCols: 10,
      imageTop: 0,
      imageBottom: 1e3,
      imageRows: 10,
      globalLight: true,
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
      width: 1259,
      height: 805,
    }),
    new AdventureImage({
      name: "journal3",
      page: 19,
      width: 491,
      height: 513,
    }),
    new AdventureImage({
      name: "journal4",
      page: 26,
      width: 1259,
      height: 805,
    }),
    new AdventureImage({
      name: "journal5",
      page: 42,
      width: 1259,
      height: 807,
    }),
    new AdventureImage({
      name: "journal6",
      page: 54,
      width: 1261,
      height: 1636,
    }),
    new AdventureImage({
      name: "journal7",
      page: 55,
      width: 446,
      height: 430,
    }),
    new AdventureImage({
      name: "journal8",
      page: 60,
      width: 1260,
      height: 1636,
    }),
    new AdventureImage({
      name: "journal9",
      page: 63,
      width: 445,
      height: 629,
    }),
    new AdventureImage({
      name: "journal10",
      page: 63,
      width: 371,
      height: 497,
    }),
    new AdventureImage({
      name: "journal11",
      page: 68,
      width: 1259,
      height: 1636,
    }),
    new AdventureImage({
      name: "journal12",
      page: 68,
      width: 1262,
      height: 715,
    }),
    new CaptionImage({
      name: "journal13",
      page: 59,
      width: 530,
      height: 1140,
    }),
    new CaptionImage({
      name: "journal14",
      page: 62,
      width: 799,
      height: 1281,
    }),
    new CaptionImage({
      name: "npc17",
      page: 64,
      width: 866,
      height: 1033,
    }),
    new CaptionImage({
      name: "npc18",
      page: 65,
      width: 704,
      height: 996,
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 8,
        x: 298.3624,
        y: 456.354,
      },
      page: 8,
      width: 506,
      height: 541,
      tokenX: -7,
      tokenY: 80,
      tokenSize: 457,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 11,
        x: 258.9488,
        y: 454.675,
      },
      page: 11,
      width: 515,
      height: 551,
      tokenX: -3,
      tokenY: 68,
      tokenSize: 495,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 12,
        x: 294.8537,
        y: 454.8221,
      },
      page: 12,
      width: 518,
      height: 518,
      tokenX: 21,
      tokenY: 108,
      tokenSize: 574,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc4",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 14,
        x: 303.1163,
        y: 438.4791,
      },
      page: 14,
      width: 516,
      height: 552,
      tokenX: -51,
      tokenY: 48,
      tokenSize: 468,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc5",
      actorUuid:
        "Compendium.pf2e.the-slithering-bestiary.Actor.6U8P0ITf4gkJfeKD",
      page: 24,
      width: 738,
      height: 1092,
      tokenX: 39,
      tokenY: -51,
      tokenSize: 644,
      forIds: ["MjQ6MzI2OjYzOQ"],
    }),
    new ModuleNpc({
      id: "npc6",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.HNEUSYnInffvGPHK",
      page: 29,
      width: 865,
      height: 1214,
      tokenX: 175,
      tokenY: 0,
      tokenSize: 1214,
      forIds: ["MzA6OTk6NDIz"],
    }),
    new ModuleNpc({
      id: "npc7",
      actorUuid:
        "Compendium.pf2e.the-slithering-bestiary.Actor.TFrOAM5u8Jk8hB69",
      page: 31,
      width: 846,
      height: 1007,
      tokenX: -204,
      tokenY: -50,
      tokenSize: 307,
      forIds: [
        "MzY6OTk6MzUx",
        "MzY6MzI2OjE1OQ",
        "Mzc6Mjk1OjYwMw",
        "MzI6MzI2OjI2Nw",
      ],
    }),
    new ModuleNpc({
      id: "npc8",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.0qaGLx8ads9blcfS",
      page: 33,
      width: 494,
      height: 528,
      tokenX: -51,
      tokenY: 40,
      tokenSize: 444,
      forIds: ["MzM6Mjk1OjE5NQ"],
    }),
    new ModuleNpc({
      id: "npc9",
      actorUuid:
        "Compendium.pf2e.the-slithering-bestiary.Actor.nz6ldwPZm0WWCCYV",
      page: 35,
      width: 861,
      height: 1212,
      tokenX: -276,
      tokenY: 2,
      tokenSize: 372,
      forIds: ["MzU6Njg6MTIz"],
    }),
    new ModuleNpc({
      id: "npc10",
      actorUuid:
        "Compendium.pf2e.the-slithering-bestiary.Actor.PugTH4pasVxBB7Pn",
      page: 41,
      width: 986,
      height: 1451,
      tokenX: -248,
      tokenY: -210,
      tokenSize: 471,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc11",
      actorUuid:
        "Compendium.pf2e.the-slithering-bestiary.Actor.GyBkJWmMHfNQtAFw",
      page: 47,
      width: 884,
      height: 1248,
      tokenX: -222,
      tokenY: -142,
      tokenSize: 408,
      forIds: ["NTA6OTk6Mjc5", "NTM6Mjk1OjU2Nw", "NDY6MzI2OjI3OQ"],
    }),
    new ModuleNpc({
      id: "npc12",
      actorUuid:
        "Compendium.pf2e.the-slithering-bestiary.Actor.Fd9l3UtiMLIRAjhO",
      page: 48,
      width: 923,
      height: 1271,
      tokenX: -234,
      tokenY: -139,
      tokenSize: 431,
      forIds: ["NTA6OTk6MzI3", "NDc6Mjk1OjY5OQ"],
    }),
    new ModuleNpc({
      id: "npc13",
      name: {
        page: 51,
        x: 294.1117,
        y: 273.214,
      },
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.QCPpQya5TEUuIxQn",
      page: 51,
      width: 908,
      height: 1271,
      tokenX: -253,
      tokenY: -71,
      tokenSize: 375,
      forIds: ["NTE6Njg6NDEx"],
    }),
    new ModuleNpc({
      id: "npc14",
      actorUuid:
        "Compendium.pf2e.the-slithering-bestiary.Actor.MQI0uQKurpprJQtT",
      page: 52,
      width: 927,
      height: 1062,
      tokenX: -322,
      tokenY: 82,
      tokenSize: 446,
      forIds: ["NTM6Njg6NjAz"],
    }),
    new ModuleNpc({
      id: "npc15",
      actorUuid:
        "Compendium.pf2e.the-slithering-bestiary.Actor.wgeuaYe2fbGNg42z",
      page: 64,
      width: 866,
      height: 1033,
      tokenX: -39,
      tokenY: 9,
      tokenSize: 445,
      forIds: ["NjQ6MjUxOjU0Mw", "MzU6Njg6MTcx", "Mzc6Mjk1OjY1MQ"],
    }),
    new ModuleNpc({
      id: "npc16",
      actorUuid:
        "Compendium.pf2e.the-slithering-bestiary.Actor.ZXpX1TWooxGkIOuu",
      page: 65,
      width: 704,
      height: 996,
      tokenX: 146,
      tokenY: 0,
      tokenSize: 996,
      forIds: ["NjU6Njg6NTE5", "MTY6OTk6OTk"],
    }),
    new ModuleNpc({
      id: "npc17",
      actorUuid:
        "Compendium.pf2e.the-slithering-bestiary.Actor.idj4GBmsLUNUbk9r",
      label: "AG[",
      forIds: ["NTA6MzI2OjM1MQ"],
    }),
    new ModuleNpc({
      id: "npc18",
      actorUuid:
        "Compendium.pf2e.the-slithering-bestiary.Actor.HFKh5iq1UV06HP4F",
      label: "ART",
      forIds: ["MzE6Njg6NjUx"],
    }),
    new ModuleNpc({
      id: "npc19",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.zjPdqdQGNjO3Kto7",
      label: "A",
      forIds: ["NDY6OTk6MjY3"],
    }),
    new ModuleNpc({
      id: "npc20",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.Ud6Iy1GolgtwrKQK",
      label: "B",
      forIds: ["MzI6MzI2OjMxNQ", "NDA6OTk6NjI3"],
    }),
    new ModuleNpc({
      id: "npc21",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.mX47c0W9rizbmMBM",
      label: "B",
      forIds: ["MjM6Njg6Mzc1"],
    }),
    new ModuleNpc({
      id: "npc22",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.saEPHCN5lDiylb5H",
      label: "BP",
      forIds: ["ODozODA6NjE1"],
    }),
    new ModuleNpc({
      id: "npc23",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.s2TkernjfKVEhlJY",
      label: "BS",
      forIds: ["MjE6Njg6NDU5"],
    }),
    new ModuleNpc({
      id: "npc24",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.EH84J9FedbK3ax50",
      label: "BW",
      forIds: ["MjM6Mjk1OjI3OQ", "MjQ6MzI2OjE1OQ", "MjI6MzI2OjE4Mw"],
    }),
    new ModuleNpc({
      id: "npc25",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.wNkS1ArFjS6ZsrPS",
      label: "D",
      forIds: ["MzE6Mjk1OjY1MQ"],
    }),
    new ModuleNpc({
      id: "npc26",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.zAxKR8XWtQm2rqh4",
      label: "T",
      forIds: ["NDI6MzI2Ojk5"],
    }),
    new ModuleNpc({
      id: "npc27",
      actorUuid:
        "Compendium.pf2e.the-slithering-bestiary.Actor.nVa7a7fBFa3gEEN9",
      label: "FBT",
      forIds: ["MzQ6OTk6MTcx"],
    }),
    new ModuleNpc({
      id: "npc28",
      actorUuid:
        "Compendium.pf2e.the-slithering-bestiary.Actor.wgeuaYe2fbGNg42z",
      name: {
        page: 31,
        x: 294.75,
        y: 699,
      },
      label: "G",
      forIds: ["MzE6Mjk1OjY5OQ"],
    }),
    new ModuleNpc({
      id: "npc29",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.FFnsYr2aIfDGnUVS",
      label: "GFL",
      forIds: ["MjI6OTk6MzUx"],
    }),
    new ModuleNpc({
      id: "npc30",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.F2Xhn4rqPAj55w3O",
      label: "BS",
      forIds: ["MjI6MzI2OjIzMQ", "MjI6OTk6Mzk5"],
    }),
    new ModuleNpc({
      id: "npc31",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.V6OBYa51VcehPj22",
      label: "GO",
      forIds: ["MTU6Mjk1OjMwMw"],
    }),
    new ModuleNpc({
      id: "npc32",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.aYDbWuOj66nve8r4",
      label: "JD",
      forIds: ["Mjk6Njg6NTc5"],
    }),
    new ModuleNpc({
      id: "npc33",
      actorUuid:
        "Compendium.pf2e.the-slithering-bestiary.Actor.TFrOAM5u8Jk8hB69",
      label: "AC",
      forIds: ["Mzk6Njg6MTcx"],
    }),
    new ModuleNpc({
      id: "npc34",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.uQBOJfjtzEXvpLQz",
      label: "OJ",
      forIds: ["MTM6Mjk1OjU1NQ", "NDM6Njg6NDIz"],
    }),
    new ModuleNpc({
      id: "npc35",
      actorUuid: "Compendium.pf2e.hazards.Actor.lVqVDjXnHboMif7F",
      label: "PDG",
      forIds: ["MjM6Mjk1OjY5OQ"],
    }),
    new ModuleNpc({
      id: "npc36",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.fWAjkhQ0y50Eh2BT",
      label: "R",
      forIds: ["NDM6Njg6MTk1"],
    }),
    new ModuleNpc({
      id: "npc37",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.md1fhwGMwDv4NNwO",
      label: "S",
      forIds: ["Mzk6Mjk1OjY5OQ"],
    }),
    new ModuleNpc({
      id: "npc38",
      actorUuid:
        "Compendium.pf2e.the-slithering-bestiary.Actor.ILF7Azqi2TM6ktl9",
      label: "SST",
      forIds: ["NDk6Mjk1OjU5MQ"],
    }),
    new ModuleNpc({
      id: "npc39",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.PFB61dvUsakciV0N",
      label: "SM",
      forIds: ["MTQ6Mzk3OjQ0Nw"],
    }),
    new ModuleNpc({
      id: "npc40",
      actorUuid:
        "Compendium.pf2e.the-slithering-bestiary.Actor.IUAbDA2cbIB4ONlD",
      label: "SSR",
      forIds: ["MTc6Mjk1OjI3OQ"],
    }),
    new ModuleNpc({
      id: "npc41",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.ToteDLIM7jCyHwDH",
      label: "SM",
      forIds: ["NDk6Njg6Mzk5"],
    }),
    new ModuleNpc({
      id: "npc42",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.GOQPbXk8HZDypZzd",
      label: "VO",
      forIds: ["MTk6Njg6NjAz"],
    }),
    new ModuleNpc({
      id: "npc43",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.KgJq51AeYrENo3Db",
      label: "W",
      forIds: ["Mjg6OTk6Mjc5"],
    }),
    new ModuleNpc({
      id: "npc44",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.7UBCht1tQfeba2Ih",
      label: "WG",
      forIds: ["MTU6Mjk1OjM1MQ"],
    }),
    new ModuleNpc({
      id: "npc1",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.sldauWtSyK4JEiRl",
      name: {
        page: 17,
        x: 67.5,
        y: 171,
        substring: {
          start: 0,
          end: 22,
        },
      },
      label: "CS",
      forIds: ["MTc6Njg6MTcx"],
      elite: true,
    }),
  ];
  journalPages = [
    {
      name: "Chapter 1",
      pages: [
        {
          id: "NjoyNTE6MzUz",
        },
        {
          id: "NzozNzE6Njk5",
        },
        {
          id: "NzozNzE6NDQ3",
        },
        {
          id: "MTA6MTUyOjY4Nw",
        },
        {
          id: "MjA6MTUxOjY4Nw",
        },
        {
          id: "Nzo2ODo2NjM",
        },
        {
          id: "Nzo2ODoyNTU",
        },
        {
          id: "ODo5OTo1NTU",
        },
        {
          id: "ODo0MDM6NDQ3",
        },
        {
          id: "OTo2ODoxMTE",
        },
        {
          id: "OTozNjY6Njg3",
        },
        {
          id: "MTA6OTk6MTk1",
        },
        {
          id: "MTA6MzI2OjUwNw",
        },
        {
          id: "MTE6Mjk1OjY5OQ",
        },
        {
          id: "MTI6MzkyOjYyNw",
        },
        {
          id: "MTI6MzI2OjIxOQ",
        },
        {
          id: "MTM6Mjk1OjQ3MQ",
        },
        {
          id: "MTQ6OTk6MTgz",
        },
        {
          id: "MTQ6MzI2OjI1NQ",
        },
        {
          id: "MTU6Njg6NjUx",
        },
        {
          id: "MTU6Njg6MzAz",
        },
        {
          id: "MTU6Njg6MTEx",
        },
        {
          id: "MTU6Mjk1OjIzMQ",
        },
        {
          id: "MTc6Njg6MzUx",
        },
        {
          id: "MTc6Mjk1OjY5OQ",
        },
        {
          id: "MTg6OTk6NTU1",
        },
        {
          id: "MTg6OTk6MTIz",
        },
        {
          id: "MTg6MzI2OjU0Mw",
        },
        {
          id: "MTg6MzI2OjM4Nw",
        },
        {
          id: "MTk6Njg6NDcx",
        },
        {
          id: "MTk6Mjk1OjQzNQ",
        },
        {
          id: "MTk6Mjk1OjE0Nw",
        },
        {
          id: "MjA6OTk6Mjkx",
        },
        {
          id: "MjA6OTk6MTIz",
        },
        {
          id: "MjA6MzI2OjU5MQ",
        },
        {
          id: "MjA6MzI2OjMzOQ",
        },
        {
          id: "MjE6Njg6MzYz",
        },
        {
          id: "MjE6Mjk1OjQ4Mw",
        },
        {
          id: "MjE6Mjk1OjI0Mw",
        },
        {
          id: "MjI6OTk6MjMx",
        },
        {
          id: "MjM6Njg6Njk5",
        },
        {
          id: "MjM6Njg6MzI3",
        },
        {
          id: "MjM6Mjk1OjY1MQ",
        },
        {
          id: "MjM6Mjk1OjIzMQ",
        },
        {
          id: "MjM6Mjk1OjE1OQ",
        },
        {
          id: "MjU6Njg6NDM1",
        },
      ],
    },
    {
      name: "Chapter 2",
      pages: [
        {
          id: "MjY6MjQ3OjM1Ng",
        },
        {
          id: "Mjc6MzcxOjY5OQ",
        },
        {
          id: "Mjc6MzcxOjQ3MQ",
        },
        {
          id: "MzA6MTY5OjY4Nw",
        },
        {
          id: "MzI6MTUzOjY4Nw",
        },
        {
          id: "Mjc6Njg6NTQz",
        },
        {
          id: "Mjc6Njg6MzE1",
        },
        {
          id: "Mjg6OTk6MTU5",
        },
        {
          id: "Mjk6Njg6NTMx",
        },
        {
          id: "MzA6OTk6Mjc5",
        },
        {
          id: "MzA6MzI2OjU0Mw",
        },
        {
          id: "MzA6MzI2OjM1MQ",
        },
        {
          id: "MzE6Njg6MzI3",
        },
        {
          id: "MzE6Mjk1OjYwMw",
        },
        {
          id: "MzI6OTk6MjA3",
        },
        {
          id: "MzI6MzI2OjYwMw",
        },
        {
          id: "MzM6Njg6NDQ3",
        },
        {
          id: "MzQ6OTk6NTMx",
        },
        {
          id: "MzQ6MzI2OjQ1OQ",
        },
        {
          id: "MzY6MzI2OjYyNw",
        },
        {
          id: "Mzc6Njg6NjI3",
        },
        {
          id: "Mzc6Njg6Mzk5",
        },
        {
          id: "Mzc6Mjk1OjMzOQ",
        },
        {
          id: "Mzg6OTk6MTIz",
        },
        {
          id: "Mzg6MzI2OjQ1OQ",
        },
        {
          id: "Mzk6Mjk1OjU5MQ",
        },
        {
          id: "NDA6OTk6NTMx",
        },
        {
          id: "NDE6Njg6Njk5",
        },
      ],
    },
    {
      name: "Chapter 3",
      pages: [
        {
          id: "NDI6MjQ0OjM1Mg",
        },
        {
          id: "NDM6MzcxOjY5OQ",
        },
        {
          id: "NDM6MzcxOjQxMQ",
        },
        {
          id: "NDU6MzU0OjY4Nw",
        },
        {
          id: "NDU6MzUyOjQzNQ",
        },
        {
          id: "NDI6OTk6OTk",
        },
        {
          id: "NDM6Njg6NjYz",
        },
        {
          id: "NDM6Njg6Mzc1",
        },
        {
          id: "NDM6Njg6MTQ3",
        },
        {
          id: "NDQ6MzI2OjIxOQ",
        },
        {
          id: "NDU6Njg6NjE1",
        },
        {
          id: "NDU6Njg6NTMx",
        },
        {
          id: "NDU6Njg6OTk",
        },
        {
          id: "NDY6OTk6NTc5",
        },
        {
          id: "NDY6OTk6NDEx",
        },
        {
          id: "NDY6OTk6MjE5",
        },
        {
          id: "NDc6Njg6NTA3",
        },
        {
          id: "NDg6MzI2OjQ4Mw",
        },
        {
          id: "NDg6MzI2OjE0Nw",
        },
        {
          id: "NDk6Njg6Mjkx",
        },
        {
          id: "NDk6Mjk1OjExMQ",
        },
        {
          id: "NTA6OTk6MTEx",
        },
        {
          id: "NTA6MzI2OjU0Mw",
        },
        {
          id: "NTA6MzI2OjE5NQ",
        },
        {
          id: "NTE6Mjk1OjY2Mw",
        },
        {
          id: "NTI6OTk6Njk5",
        },
        {
          id: "NTM6Mjk1OjI5MQ",
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
          id: "npc17",
        },
        {
          id: "npc18",
        },
      ],
    },
    {
      name: "Back Matter",
      pages: [
        {
          id: "NTU6MjI2OjY3Mw",
        },
        {
          id: "NTU6Mjk1OjI3OQ",
        },
        {
          id: "NTc6Njg6NTc5",
        },
        {
          id: "NTc6Mjk1OjM1MQ",
        },
        {
          id: "NTc6Mjk1OjE1OQ",
        },
        {
          id: "NTg6OTk6Njk5",
        },
        {
          id: "NTk6Njg6MzE1",
        },
        {
          id: "NjE6ODM6NjQ1",
        },
        {
          id: "NjI6MzMxOjU0Mw",
        },
        {
          id: "NjU6Njg6Njk5",
        },
        {
          id: "NjQ6MTI2OjY2Mw",
        },
        {
          id: "NjU6MzcxOjY2Mw",
        },
      ],
    },
  ];
  combines = [];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "THE SLITHERING" && t.fontId === "Gin-Regular:10",
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    text.forEach((x, i) => {
      x.page === 40 &&
        x.text.startsWith("LEVEL") &&
        (text[i].text = x.text.replace("LEVEL", "FEAT"));
    });
    this.removeText(text, 8, 298.3624, 456.354);
    this.removeText(text, 11, 258.9488, 454.675);
    this.removeText(text, 12, 294.8537, 454.8221);
    this.removeText(text, 14, 303.1163, 438.4791);
    this.removeText(text, 19, 233.4664, 469.6041);
    this.removeText(text, 24, 120.3127, 100.8539);
    this.removeText(text, 29, 420.8888, 117.214);
    this.removeText(text, 31, 401.7866, 130.5741);
    this.removeText(text, 33, 267.9618, 451.8539);
    this.removeText(text, 35, 365.3857, 93.214);
    this.removeText(text, 41, 443.703, 147.2159);
    this.removeText(text, 47, 358.7054, 93.214);
    this.removeText(text, 48, 88.6309, 117.1385);
    this.removeText(text, 51, 294.1117, 273.214);
    this.removeText(text, 52, 87.8275, 117.214);
    this.removeText(text, 59, 250.3829, 83.4153);
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
