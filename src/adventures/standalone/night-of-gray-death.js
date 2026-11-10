import { AdventureBase } from "../../core/adventure-base.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class NightOfGrayDeath extends AdventureBase {
  prefix = "night-of-the-gray-death";
  fullName = "Night of the Gray Death";
  blacklistedFonts = [
    "Times-Italic:8",
    "RomicStd-Bold:12",
    "TradeGothicLTStd-BdCn20:12",
    "TradeGothicLTStd-BdCn20:8",
    "Taroca:12",
    "TradeGothicLTStd-BdCn20:11.0714",
    "CBGBFontSolid:12",
    "ErasmusMedium:14",
  ];
  headingFontIds = [
    "GoodOT-News:12",
    "GoodOT:12",
    "GoodOT-CondBold:12",
    "GoodOT-Bold:12",
    "GoodOT-CondBold:14",
    "GoodOT-Cond:13",
    "GoodOT-Bold:14",
    "Aberration:50",
    "Aberration:37",
    "Aberration:33",
    "Aberration:14",
  ];
  normalFontIds = [
    "SabonLTStd-Roman:9",
    "Sabon-Roman:9",
    "GoodOT:8.5",
    "GoodOT:9",
    "Dax-Regular:9",
    "Pathfinder-Icons:9",
    "SabonLTStd-Roman:12",
    "TimesNewRomanPSMT-SC700:6.3",
  ];
  subheadingFontIds = [];
  italicFontIds = [
    "SabonLTStd-Italic:9",
    "Sabon-Italic:9",
    "GoodOT-Italic:8.5",
    "GoodOT-Italic:9",
    "SabonLTStd-Italic:12",
    "TimesNewRomanPS-ItalicMT:9",
    "TimesNewRomanPS-BoldItalicMT:9",
  ];
  boldFontIds = [
    "TimesNewRomanPS-BoldMT:9",
    "TimesNewRomanPSMT:9",
    "Sabon-Bold:9",
    "GoodOT:8.5",
    "GoodOT:8",
    "GoodOT-Bold:8.5",
    "SabonLTStd-Bold:9",
    "Times-Bold:9",
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
    this.RightTwoColumnWithRightCutout(7, 510),
    this.LeftTwoColumn(8),
    this.RightTwoColumn(9),
    this.LeftTwoColumn(10),
    this.LeftTwoColumn(12),
    this.RightTwoColumn(13),
    this.LeftTwoColumnWithLeftCutout(14, 400),
    this.RightTwoColumn(15),
    this.LeftTwoColumn(16),
    this.RightTwoColumn(17),
    this.LeftTwoColumn(18),
    this.RightTwoColumn(19),
    this.LeftTwoColumn(20),
    this.RightTwoColumn(21),
    this.LeftTwoColumn(22),
    this.RightTwoColumn(23),
    this.LeftTwoColumnWithLeftCutout(24, 500),
    this.RightTwoColumn(25),
    this.LeftTwoColumn(26),
    this.RightTwoColumn(27),
    this.ChapterHeadingPageLayout(28),
    this.RightTwoColumnWithRightCutout(29, 510),
    this.LeftTwoColumn(30),
    this.RightTwoColumn(31),
    this.LeftTwoColumn(32),
    this.LeftTwoColumn(34),
    this.RightTwoColumn(35),
    this.LeftTwoColumn(36),
    this.RightTwoColumn(37),
    this.LeftTwoColumn(38),
    this.RightTwoColumn(39),
    this.LeftTwoColumnWithLeftCutout(40, 570),
    this.RightTwoColumn(41),
    this.ChapterHeadingPageLayout(42),
    this.RightTwoColumnWithRightCutout(43, 560),
    this.LeftTwoColumn(44),
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
    this.RightTwoColumnWithRightCutout(57, 500),
    this.RightChapterHeadingPageLayout(59),
    this.RightTwoColumn(61),
    this.LeftTwoColumn(62),
    this.RightTwoColumn(63),
    this.RightChapterHeadingPageLayout(65),
    this.LeftTwoColumn(66),
    this.RightTwoColumn(67),
    this.LeftTwoColumn(68),
    this.RightTwoColumn(69),
    this.LeftTwoColumnWithLeftCutout(70, 580),
    this.RightTwoColumnWithRightCutout(71, 560),
    this.LeftTwoColumn(72),
    this.RightTwoColumnWithRightCutout(73, 450),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      canonical: {
        name: "flipmat/grand-ballroom",
        priority: 0,
      },
      nameInfo: {
        x: 27,
        y: 748.9774,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 1246,
      height: 1551,
      imageLeft: 13,
      imageRight: 1234,
      imageCols: 24,
      imageTop: 13,
      imageBottom: 1539,
      imageRows: 30,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/flipmats/maps/grand-ballroom.json",
    }),
    new ModuleScene({
      name: "map2",
      canonical: {
        name: "flipmat/worm-lair",
        priority: 0,
      },
      nameInfo: {
        x: 643.2435,
        y: 748.9774,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 1246,
      height: 1551,
      imageIndex: 1,
      imageLeft: 13,
      imageRight: 1234,
      imageCols: 24,
      imageTop: 13,
      imageBottom: 1539,
      imageRows: 30,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/flipmats/maps/worm-lair.json",
      journals: [
        {
          x: 1900,
          y: 3600,
          name: "L15.",
        },
        {
          x: 1200,
          y: 2600,
          name: "L16.",
        },
        {
          x: 1900,
          y: 1500,
          name: "L17.",
        },
        {
          x: 2700,
          y: 2600,
          name: "L18.",
        },
      ],
      tokens: [
        {
          id: "npc23",
          x: 1700,
          y: 1e3,
        },
      ],
    }),
    new ModuleScene({
      name: "map3a",
      canonical: {
        name: "notgd/map3a",
        priority: 0,
      },
      nameInfo: {
        x: 21,
        y: 579,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 11,
      width: 1125,
      height: 1549,
      imageLeft: 4,
      imageRight: 1116,
      imageCols: 41,
      imageTop: 12,
      imageBottom: 1531,
      imageRows: 56,
      cropLeft: 0,
      cropRight: 564,
      cropTop: 0,
      cropBottom: 437,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/standalone/maps/notgd-map3a.json",
      journals: [
        {
          x: 750,
          y: 550,
          name: "B.",
        },
      ],
      tokens: [
        {
          id: "npc15",
          x: 800,
          y: 1400,
        },
        {
          id: "npc3",
          x: 800,
          y: 1500,
        },
      ],
    }),
    new ModuleScene({
      name: "map3b",
      canonical: {
        name: "notgd/map3b",
        priority: 0,
      },
      nameInfo: {
        x: 283.1293,
        y: 582.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 11,
      width: 1125,
      height: 1549,
      imageLeft: 4,
      imageRight: 1116,
      imageCols: 41,
      imageTop: 12,
      imageBottom: 1531,
      imageRows: 56,
      cropLeft: 579,
      cropRight: 1125,
      cropTop: 0,
      cropBottom: 437,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/standalone/maps/notgd-map3b.json",
      journals: [
        {
          x: 750,
          y: 550,
          name: "D.",
        },
      ],
      tokens: [
        {
          id: "npc15",
          x: 1200,
          y: 1100,
        },
        {
          id: "npc26",
          x: 1300,
          y: 1150,
        },
      ],
    }),
    new ModuleScene({
      name: "map3c",
      canonical: {
        name: "notgd/map3c",
        priority: 0,
      },
      nameInfo: {
        x: 21,
        y: 550.6681,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 11,
      width: 1125,
      height: 1549,
      imageLeft: 4,
      imageRight: 1116,
      imageCols: 41,
      imageTop: 12,
      imageBottom: 1531,
      imageRows: 56,
      cropLeft: 0,
      cropRight: 406,
      cropTop: 452,
      cropBottom: 820,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/standalone/maps/notgd-map3c.json",
      journals: [
        {
          x: 1350,
          y: 1100,
          name: "C1.",
        },
        {
          x: 850,
          y: 1200,
          name: "C2.",
        },
        {
          x: 1600,
          y: 700,
          name: "C3.",
        },
      ],
      tokens: [
        {
          id: "npc33",
          x: 1800,
          y: 1400,
        },
        {
          id: "npc33",
          x: 1800,
          y: 1500,
        },
      ],
    }),
    new ModuleScene({
      name: "map3d",
      canonical: {
        name: "notgd/map3d",
        priority: 0,
      },
      nameInfo: {
        x: 210.75,
        y: 550.6681,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 11,
      width: 1125,
      height: 1549,
      imageLeft: 4,
      imageRight: 1116,
      imageCols: 41,
      imageTop: 12,
      imageBottom: 1531,
      imageRows: 56,
      cropLeft: 420,
      cropRight: 813,
      cropTop: 452,
      cropBottom: 820,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/standalone/maps/notgd-map3d.json",
      journals: [
        {
          x: 1050,
          y: 1150,
          name: "C4.",
        },
      ],
      tokens: [],
    }),
    new ModuleScene({
      name: "map3e",
      canonical: {
        name: "notgd/map3e",
        priority: 0,
      },
      nameInfo: {
        x: 404.25,
        y: 550.6681,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 11,
      width: 1125,
      height: 1549,
      imageLeft: 4,
      imageRight: 1116,
      imageCols: 41,
      imageTop: 12,
      imageBottom: 1531,
      imageRows: 56,
      cropLeft: 827,
      cropRight: 1125,
      cropTop: 452,
      cropBottom: 820,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/standalone/maps/notgd-map3e.json",
      journals: [
        {
          x: 800,
          y: 1100,
          name: "C5.",
        },
      ],
      tokens: [
        {
          id: "npc4",
          x: 900,
          y: 1100,
        },
        {
          id: "npc29",
          x: 600,
          y: 1500,
        },
      ],
    }),
    new ModuleScene({
      name: "map3f",
      canonical: {
        name: "notgd/map3f",
        priority: 0,
      },
      nameInfo: {
        x: 21,
        y: 366.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 11,
      width: 1125,
      height: 1549,
      imageLeft: 4,
      imageRight: 1116,
      imageCols: 41,
      imageTop: 12,
      imageBottom: 1531,
      imageRows: 56,
      cropLeft: 0,
      cropRight: 538,
      cropTop: 834,
      cropBottom: 1173,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/standalone/maps/notgd-map3f.json",
      journals: [
        {
          x: 550,
          y: 550,
          name: "E.",
        },
      ],
      tokens: [
        {
          id: "npc5",
          x: 1e3,
          y: 1e3,
        },
        {
          id: "npc28",
          x: 2200,
          y: 900,
        },
        {
          id: "npc14",
          x: 2300,
          y: 1100,
        },
        {
          id: "npc14",
          x: 2300,
          y: 1200,
        },
      ],
    }),
    new ModuleScene({
      name: "map3g",
      canonical: {
        name: "notgd/map3g",
        priority: 0,
      },
      nameInfo: {
        x: 21,
        y: 200.6681,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 11,
      width: 1125,
      height: 1549,
      imageLeft: 4,
      imageRight: 1116,
      imageCols: 41,
      imageTop: 12,
      imageBottom: 1531,
      imageRows: 56,
      cropLeft: 0,
      cropRight: 538,
      cropTop: 1185,
      cropBottom: 1549,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/standalone/maps/notgd-map3g.json",
      journals: [
        {
          x: 550,
          y: 550,
          name: "F.",
        },
      ],
      tokens: [
        {
          id: "npc6",
          x: 800,
          y: 1e3,
        },
        {
          id: "npc30",
          x: 800,
          y: 800,
        },
        {
          id: "npc30",
          x: 700,
          y: 900,
        },
        {
          id: "npc30",
          x: 700,
          y: 1200,
        },
        {
          id: "npc30",
          x: 800,
          y: 1300,
        },
      ],
    }),
    new ModuleScene({
      name: "map3h",
      canonical: {
        name: "notgd/map3h",
        priority: 0,
      },
      nameInfo: {
        x: 270,
        y: 366.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 11,
      width: 1125,
      height: 1549,
      imageLeft: 4,
      imageRight: 1116,
      imageCols: 41,
      imageTop: 12,
      imageBottom: 1531,
      imageRows: 56,
      cropLeft: 553,
      cropRight: 1125,
      cropTop: 834,
      cropBottom: 1549,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/standalone/maps/notgd-map3h.json",
      journals: [
        {
          x: 750,
          y: 850,
          name: "I.",
        },
      ],
      tokens: [
        {
          id: "npc35",
          x: 1700,
          y: 1700,
        },
        {
          id: "npc8",
          x: 1400,
          y: 1800,
        },
      ],
    }),
    new ModuleScene({
      name: "map4a",
      canonical: {
        name: "notgd/map4a",
        priority: 0,
      },
      nameInfo: {
        x: 21,
        y: 462.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 33,
      width: 1183,
      height: 1551,
      imageLeft: 10,
      imageRight: 1177,
      imageCols: 30,
      imageTop: 123,
      imageBottom: 1525,
      imageRows: 36,
      cropLeft: 0,
      cropRight: 1183,
      cropTop: 0,
      cropBottom: 699,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/standalone/maps/notgd-map4a.json",
      journals: [
        {
          x: 2500,
          y: 1300,
          name: "J1.",
        },
        {
          x: 2e3,
          y: 1300,
          name: "J2.",
        },
        {
          x: 1500,
          y: 1500,
          name: "J3.",
        },
      ],
      tokens: [
        {
          id: "npc12",
          x: 2450,
          y: 845,
        },
        {
          id: "npc37",
          x: 1900,
          y: 1400,
        },
        {
          id: "npc32",
          x: 1400,
          y: 1800,
        },
        {
          id: "npc32",
          x: 1100,
          y: 800,
        },
        {
          id: "npc32",
          x: 1800,
          y: 800,
        },
      ],
    }),
    new ModuleScene({
      name: "map4b",
      canonical: {
        name: "notgd/map4b",
        priority: 0,
      },
      nameInfo: {
        x: 21,
        y: 66.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 33,
      width: 1183,
      height: 1551,
      imageLeft: 10,
      imageRight: 1177,
      imageCols: 30,
      imageTop: 123,
      imageBottom: 1525,
      imageRows: 36,
      cropLeft: 0,
      cropRight: 1183,
      cropTop: 719,
      cropBottom: 1551,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/standalone/maps/notgd-map4b.json",
      journals: [
        {
          x: 2450,
          y: 2050,
          name: "K1.",
        },
        {
          x: 2400,
          y: 1200,
          name: "K2.",
        },
        {
          x: 1500,
          y: 1200,
          name: "K3.",
        },
      ],
      tokens: [
        {
          id: "npc31",
          x: 2e3,
          y: 2e3,
        },
        {
          id: "npc14",
          x: 1300,
          y: 1e3,
        },
        {
          id: "npc14",
          x: 1300,
          y: 1200,
        },
        {
          id: "npc14",
          x: 1400,
          y: 1e3,
        },
        {
          id: "npc14",
          x: 1300,
          y: 1300,
        },
        {
          id: "npc7",
          x: 1200,
          y: 1200,
        },
      ],
    }),
    new ModuleScene({
      name: "map5",
      canonical: {
        name: "notgd/map5",
        priority: 0,
      },
      nameInfo: {
        x: 21,
        y: 694.6681,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 45,
      width: 1136,
      height: 1548,
      imageLeft: 197,
      imageRight: 910,
      imageCols: 51,
      imageTop: 65,
      imageBottom: 1463,
      imageRows: 26,
      offsetX: 0,
      offsetY: 0,
      rotateCW: 1,
      globalLight: true,
      detailsFile: "/standalone/maps/notgd-map5.json",
      journals: [
        {
          x: 1850,
          y: 2750,
          name: "L1.",
        },
        {
          x: 2100,
          y: 2300,
          name: "L2.",
        },
        {
          x: 2900,
          y: 2400,
          name: "L3.",
        },
        {
          x: 3650,
          y: 2100,
          name: "L4.",
        },
        {
          x: 3e3,
          y: 3100,
          name: "L5.",
        },
        {
          x: 1750,
          y: 3750,
          name: "L6.",
        },
        {
          x: 2100,
          y: 3900,
          name: "L7.",
        },
        {
          x: 3200,
          y: 3800,
          name: "L8.",
        },
        {
          x: 3700,
          y: 4100,
          name: "L9.",
        },
        {
          x: 4200,
          y: 3100,
          name: "L10.",
        },
        {
          x: 5400,
          y: 2400,
          name: "L11.",
        },
        {
          x: 6400,
          y: 2400,
          name: "L12.",
        },
        {
          x: 5700,
          y: 3900,
          name: "L13.",
        },
        {
          x: 4800,
          y: 4200,
          name: "L14.",
        },
      ],
      tokens: [
        {
          id: "npc15",
          x: 1900,
          y: 2200,
        },
        {
          id: "npc15",
          x: 1900,
          y: 2400,
        },
        {
          id: "npc16",
          x: 3600,
          y: 2200,
        },
        {
          id: "npc16",
          x: 3600,
          y: 1900,
        },
        {
          id: "npc17",
          x: 2700,
          y: 3e3,
        },
        {
          id: "npc14",
          x: 2900,
          y: 3e3,
        },
        {
          id: "npc14",
          x: 2800,
          y: 3100,
        },
        {
          id: "npc14",
          x: 2900,
          y: 3100,
        },
        {
          id: "npc14",
          x: 2800,
          y: 3e3,
        },
        {
          id: "npc36",
          x: 2500,
          y: 4200,
        },
        {
          id: "npc26",
          x: 2550,
          y: 4350,
        },
        {
          id: "npc26",
          x: 2450,
          y: 4350,
        },
        {
          id: "npc26",
          x: 2850,
          y: 3800,
        },
        {
          id: "npc26",
          x: 2350,
          y: 4350,
        },
        {
          id: "npc18",
          x: 3700,
          y: 4200,
        },
        {
          id: "npc6",
          x: 3500,
          y: 4200,
        },
        {
          id: "npc6",
          x: 3500,
          y: 3900,
        },
        {
          id: "npc27",
          x: 4e3,
          y: 3e3,
        },
        {
          id: "npc36",
          x: 5500,
          y: 2300,
        },
        {
          id: "npc36",
          x: 5500,
          y: 2400,
        },
        {
          id: "npc19",
          x: 6300,
          y: 2200,
        },
        {
          id: "npc20",
          x: 6300,
          y: 2500,
        },
        {
          id: "npc21",
          x: 5300,
          y: 3800,
        },
      ],
    }),
    new ModuleScene({
      name: "map6",
      canonical: {
        name: "notgd/map6",
        priority: 0,
      },
      nameInfo: {
        x: 107,
        y: 694.6681,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 60,
      width: 1182,
      height: 1551,
      imageLeft: 0,
      imageRight: 1182,
      imageCols: 10,
      imageTop: 0,
      imageBottom: 1182,
      imageRows: 10,
      gridType: "gridless",
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/standalone/maps/notgd-map6.json",
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      name: {
        page: 8,
        x: 277.5547,
        y: 453.0573,
      },
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      page: 8,
      width: 408,
      height: 498,
      tokenX: 79,
      tokenY: 65,
      tokenSize: 554,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc2",
      name: {
        page: 15,
        x: 250.247,
        y: 361.5295,
      },
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      page: 15,
      width: 462,
      height: 565,
      tokenX: 96,
      tokenY: 75,
      tokenSize: 621,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc3",
      name: {
        page: 16,
        x: 161.2386,
        y: 80.0295,
      },
      actorUuid:
        "Compendium.pf2e.night-of-the-gray-death-bestiary.Actor.s7lkV69f0RRHwFEU",
      page: 16,
      width: 738,
      height: 1034,
      tokenX: -202,
      tokenY: 11,
      tokenSize: 334,
      forIds: ["MjE6Njg6MzUx", "MTY6OTk6NjE1"],
    }),
    new ModuleNpc({
      id: "npc4",
      actorUuid:
        "Compendium.pf2e.night-of-the-gray-death-bestiary.Actor.w7Y6zn3wRabuOdNv",
      page: 21,
      width: 886,
      height: 1241,
      tokenX: -245,
      tokenY: -169,
      tokenSize: 345,
      forIds: ["MjA6OTk6Mjkx"],
    }),
    new ModuleNpc({
      id: "npc5",
      name: {
        page: 22,
        x: 286.6074,
        y: 370.5295,
      },
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      page: 22,
      width: 487,
      height: 595,
      tokenX: 41,
      tokenY: 23,
      tokenSize: 539,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc6",
      name: {
        page: 25,
        x: 395.6416,
        y: 79.5295,
      },
      actorUuid:
        "Compendium.pf2e.night-of-the-gray-death-bestiary.Actor.aufhOvDz7EBjbxaQ",
      page: 25,
      width: 810,
      height: 1080,
      tokenX: -237,
      tokenY: -7,
      tokenSize: 268,
      forIds: ["NTA6MzMyOjM2NA", "MjM6Mjk1OjIwNw"],
    }),
    new ModuleNpc({
      id: "npc7",
      name: {
        page: 26,
        x: 277.579,
        y: 368.5295,
      },
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.vfFB2za4zaQnXYIa",
      page: 26,
      width: 426,
      height: 520,
      tokenX: 51,
      tokenY: 63,
      tokenSize: 520,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc8",
      actorUuid:
        "Compendium.pf2e.night-of-the-gray-death-bestiary.Actor.sBA27jit7zaH14tK",
      page: 27,
      width: 426,
      height: 520,
      tokenX: 30,
      tokenY: 63,
      tokenSize: 464,
      forIds: ["Mjc6Mjk1OjM1MQ"],
    }),
    new ModuleNpc({
      id: "npc9",
      name: {
        page: 30,
        x: 282.6709,
        y: 356.5295,
      },
      actorUuid:
        "Compendium.pf2e.night-of-the-gray-death-bestiary.Actor.aufhOvDz7EBjbxaQ",
      page: 30,
      width: 456,
      height: 557,
      tokenX: 2,
      tokenY: 36,
      tokenSize: 501,
      forIds: ["Mzk6Mjk1OjY5OQ"],
    }),
    new ModuleNpc({
      id: "npc10",
      name: {
        page: 31,
        x: 244.4868,
        y: 356.5295,
      },
      actorUuid:
        "Compendium.pf2e.night-of-the-gray-death-bestiary.Actor.aufhOvDz7EBjbxaQ",
      page: 31,
      width: 456,
      height: 557,
      tokenX: 56,
      tokenY: 40,
      tokenSize: 557,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc11",
      name: {
        page: 32,
        x: 139.3509,
        y: 80.5295,
      },
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      page: 32,
      width: 839,
      height: 1126,
      tokenX: -175,
      tokenY: -15,
      tokenSize: 454,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc12",
      actorUuid:
        "Compendium.pf2e.night-of-the-gray-death-bestiary.Actor.dwOxqAJibYABcbW0",
      page: 34,
      width: 738,
      height: 1034,
      tokenX: 2,
      tokenY: 57,
      tokenSize: 670,
      forIds: ["MzQ6MzI2OjY5OQ"],
    }),
    new ModuleNpc({
      id: "npc13",
      name: {
        page: 37,
        x: 246.4649,
        y: 81.0295,
      },
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      page: 37,
      width: 900,
      height: 1200,
      tokenX: -243,
      tokenY: -33,
      tokenSize: 360,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc14",
      actorUuid:
        "Compendium.pf2e.night-of-the-gray-death-bestiary.Actor.7jALXqInrmh428DW",
      page: 39,
      width: 774,
      height: 1122,
      tokenX: -234,
      tokenY: -31,
      tokenSize: 338,
      forIds: ["MjI6MzI2OjI3OQ", "Mzg6MzI2OjI0Mw", "NDc6Mjk1OjUzMQ"],
    }),
    new ModuleNpc({
      id: "npc15",
      actorUuid:
        "Compendium.pf2e.night-of-the-gray-death-bestiary.Actor.s7lkV69f0RRHwFEU",
      page: 44,
      width: 810,
      height: 1066,
      tokenX: -211,
      tokenY: 104,
      tokenSize: 422,
      forIds: ["MjE6Njg6MzUx", "MTY6OTk6NjE1", "NDQ6MzI2OjYzOQ"],
    }),
    new ModuleNpc({
      id: "npc16",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.XKOQ3ll9TGNso0uB",
      page: 46,
      width: 832,
      height: 1145,
      tokenX: -214,
      tokenY: -6,
      tokenSize: 389,
      forIds: ["NDY6MzI2OjE5NQ"],
    }),
    new ModuleNpc({
      id: "npc17",
      name: {
        page: 48,
        x: 135.6369,
        y: 80.5295,
      },
      actorUuid:
        "Compendium.pf2e.night-of-the-gray-death-bestiary.Actor.M2X9UUVefBA8x9gk",
      page: 48,
      width: 765,
      height: 1020,
      tokenX: -201,
      tokenY: 46,
      tokenSize: 348,
      forIds: ["NDc6Mjk1OjYwMw"],
    }),
    new ModuleNpc({
      id: "npc18",
      name: {
        page: 50,
        x: 190.647,
        y: 80.5295,
      },
      actorUuid:
        "Compendium.pf2e.night-of-the-gray-death-bestiary.Actor.vLhDuiBojzeLuWdo",
      page: 50,
      width: 793,
      height: 1057,
      tokenX: -215,
      tokenY: 28,
      tokenSize: 329,
      forIds: ["NDk6Mjk1OjEyMw", "NTM6Njg6MjMx", "NTc6Njg6NDk1"],
    }),
    new ModuleNpc({
      id: "npc19",
      name: {
        page: 52,
        x: 129.931,
        y: 80.5295,
      },
      actorUuid:
        "Compendium.pf2e.night-of-the-gray-death-bestiary.Actor.vLhDuiBojzeLuWdo",
      page: 52,
      width: 837,
      height: 1116,
      tokenX: -268,
      tokenY: 9,
      tokenSize: 332,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc20",
      name: {
        page: 53,
        x: 388.4011,
        y: 80.5295,
      },
      actorUuid:
        "Compendium.pf2e.night-of-the-gray-death-bestiary.Actor.vLhDuiBojzeLuWdo",
      page: 53,
      width: 828,
      height: 1103,
      tokenX: -255,
      tokenY: 50,
      tokenSize: 375,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc21",
      name: {
        page: 54,
        x: 126.7448,
        y: 80.5295,
      },
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.dl5JB5ZgKPcbKEMw",
      page: 54,
      width: 842,
      height: 1025,
      tokenX: -162,
      tokenY: -5,
      tokenSize: 633,
      forIds: ["NTQ6MzU2OjEzNQ"],
    }),
    new ModuleNpc({
      id: "npc22",
      name: {
        page: 63,
        x: 249.0976,
        y: 80.5295,
      },
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      page: 63,
      width: 797,
      height: 1117,
      tokenX: -272,
      tokenY: -19,
      tokenSize: 333,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc23",
      actorUuid:
        "Compendium.pf2e.night-of-the-gray-death-bestiary.Actor.vgWT4zQJkohRkuSI",
      page: 68,
      width: 675,
      height: 769,
      tokenX: 70,
      tokenY: 59,
      tokenSize: 657,
      forIds: ["Njg6OTk6NDU5", "NDE6Mjk1OjQ4Mw", "NTc6Njg6NTQz"],
    }),
    new ModuleNpc({
      id: "npc24",
      actorUuid:
        "Compendium.pf2e.night-of-the-gray-death-bestiary.Actor.H2yR0dc1ztkwvOQl",
      page: 70,
      width: 821,
      height: 940,
      tokenX: 69,
      tokenY: 123,
      tokenSize: 968,
      forIds: ["NzA6MzI2OjY1MQ", "NDE6Njg6NTMx"],
    }),
    new ModuleNpc({
      id: "npc25",
      actorUuid:
        "Compendium.pf2e.night-of-the-gray-death-bestiary.Actor.rxfr3POtEtwqg5F4",
      page: 71,
      width: 882,
      height: 1025,
      tokenX: -247,
      tokenY: -102,
      tokenSize: 269,
      forIds: ["NzE6Njg6NjE1"],
    }),
    new ModuleNpc({
      id: "npc26",
      actorUuid:
        "Compendium.pf2e.night-of-the-gray-death-bestiary.Actor.OVpZhrhP87gQiLGO",
      page: 72,
      width: 675,
      height: 769,
      tokenX: 52,
      tokenY: -5,
      tokenSize: 769,
      forIds: ["NzI6MzI2OjUzMQ", "MjE6Njg6MzAz", "NDk6Njg6MzI3"],
    }),
    new ModuleNpc({
      id: "npc27",
      actorUuid:
        "Compendium.pf2e.night-of-the-gray-death-bestiary.Actor.BWkN2cJBi6LtQJs3",
      page: 9,
      width: 738,
      height: 1034,
      tokenX: -162,
      tokenY: 30,
      tokenSize: 446,
      forIds: ["MTA6MzI2OjUzMQ", "NTI6OTk6NjYz"],
    }),
    new ModuleNpc({
      id: "npc28",
      name: {
        page: 22,
        x: 326.25,
        y: 339,
        sentenceCase: true,
      },
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.y8bxt4vLmHHy1Xys",
      label: "A",
      forIds: ["MjI6MzI2OjMzOQ"],
    }),
    new ModuleNpc({
      id: "npc29",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.FlrIq6SquIYb9REJ",
      label: "X",
      forIds: ["MjA6OTk6MTcx"],
      elite: true,
    }),
    new ModuleNpc({
      id: "npc30",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.pH2yNe16EnoJ8R0i",
      label: "G",
      forIds: ["MjQ6OTk6MTQ3"],
    }),
    new ModuleNpc({
      id: "npc31",
      name: {
        page: 38,
        x: 99,
        y: 267,
        sentenceCase: true,
      },
      actorUuid:
        "Compendium.pf2e.night-of-the-gray-death-bestiary.Actor.rxfr3POtEtwqg5F4",
      page: 71,
      width: 882,
      height: 1025,
      tokenX: -247,
      tokenY: -102,
      tokenSize: 269,
      forIds: ["Mzg6OTk6MjY3"],
    }),
    new ModuleNpc({
      id: "npc32",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.WoICHri7raCYv1wU",
      label: "LD",
      forIds: ["MzU6Mjk1OjIwNw"],
    }),
    new ModuleNpc({
      id: "npc33",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.z9jEyLrsoBMmh9qg",
      label: "M",
      forIds: ["MTg6OTk6ODc"],
    }),
    new ModuleNpc({
      id: "npc34",
      actorUuid:
        "Compendium.pf2e.night-of-the-gray-death-bestiary.Actor.HK51NfMiYq9H1Pbm",
      label: "PT",
      forIds: ["Mzk6Mjk1OjY1MQ"],
    }),
    new ModuleNpc({
      id: "npc35",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-3.Actor.cWlntwaa4HPFEf3u",
      label: "S",
      forIds: ["Mjc6Mjk1OjI2Nw"],
    }),
    new ModuleNpc({
      id: "npc36",
      actorUuid:
        "Compendium.pf2e.night-of-the-gray-death-bestiary.Actor.9TmGRq1HjPwy1CLq",
      label: "T",
      forIds: ["NzM6Njg6Mjc5", "NDk6Njg6Mzc1", "NTI6MzI2OjM5OQ"],
    }),
    new ModuleNpc({
      id: "npc37",
      actorUuid: "Compendium.pf2e.hazards.Actor.J4YChuob7MIPT5Mq",
      label: "VE",
      forIds: ["MzU6Njg6NjAz"],
    }),
  ];
  journals = [];
  journalPages = [
    {
      name: "Chapter 1",
      pages: [
        {
          id: "NjoyMjg6MzQ5",
        },
        {
          id: "NzozNTY6Njk5",
        },
        {
          id: "MTQ6MTQ5OjY5OQ",
        },
        {
          id: "MjQ6MTI0OjY5OQ",
        },
        {
          id: "Nzo2ODo2MTU",
        },
        {
          id: "NzoyOTU6NTA3",
        },
        {
          id: "NzoyOTU6MTcx",
        },
        {
          id: "ODozMjY6MTgz",
        },
        {
          id: "OTo2ODoxOTU",
        },
        {
          id: "MTA6MzI2OjExMQ",
        },
        {
          id: "MTI6OTk6MzAz",
        },
        {
          id: "MTI6MzI2OjMzOQ",
        },
        {
          id: "MTM6Njg6NDQ3",
        },
        {
          id: "MTM6Njg6MTIz",
        },
        {
          id: "MTM6Mjk1OjM4Nw",
        },
        {
          id: "MTQ6OTk6MjA3",
        },
        {
          id: "MTQ6OTk6ODc",
        },
        {
          id: "MTQ6MzI2Ojg3",
        },
        {
          id: "MTU6Njg6MTQ3",
        },
        {
          id: "MTU6MzUzOjQ0Nw",
        },
        {
          id: "MTc6Njg6Njk5",
        },
        {
          id: "MTc6Mjk1OjY2Mw",
        },
        {
          id: "MTc6Mjk1OjU2Nw",
        },
        {
          id: "MTg6MzI2OjUzMQ",
        },
        {
          id: "MTg6MzI2OjE5NQ",
        },
        {
          id: "MTk6Njg6MjU1",
        },
        {
          id: "MTk6Mjk1OjU1NQ",
        },
        {
          id: "MjA6OTk6MTIz",
        },
        {
          id: "MjE6Mjk1OjY1MQ",
        },
        {
          id: "MjM6Njg6MjA3",
        },
        {
          id: "MjQ6MzI2OjQ3MQ",
        },
        {
          id: "MjU6Njg6MzYz",
        },
        {
          id: "MjY6Mzc0OjU1NQ",
        },
      ],
    },
    {
      name: "Chapter 2",
      pages: [
        {
          id: "Mjg6MjI1OjM1MA",
        },
        {
          id: "Mjk6MzU2OjY5OQ",
        },
        {
          id: "NDA6MTUxOjY4Nw",
        },
        {
          id: "Mjg6OTk6MTIz",
        },
        {
          id: "Mjk6Njg6MTEx",
        },
        {
          id: "Mjk6Mjk1OjQyMw",
        },
        {
          id: "MzA6OTk6NjE1",
        },
        {
          id: "MzA6OTk6MzUx",
        },
        {
          id: "MzA6OTk6OTk",
        },
        {
          id: "MzA6MzYzOjU3OQ",
        },
        {
          id: "MzA6MzI2OjE0Nw",
        },
        {
          id: "MzE6Njg6NTMx",
        },
        {
          id: "MzE6Mjk1OjY5OQ",
        },
        {
          id: "MzI6OTk6Njk5",
        },
        {
          id: "MzI6MzI2OjMwMw",
        },
        {
          id: "MzQ6MzI2OjEzNQ",
        },
        {
          id: "MzU6Njg6NTA3",
        },
        {
          id: "MzY6OTk6Njk5",
        },
        {
          id: "Mzc6Njg6NjE1",
        },
        {
          id: "Mzc6Njg6MTU5",
        },
        {
          id: "Mzg6OTk6MTgz",
        },
        {
          id: "Mzg6MzI2OjYwMw",
        },
        {
          id: "Mzk6Njg6NTMx",
        },
        {
          id: "Mzk6Mjk1OjU2Nw",
        },
        {
          id: "NDA6OTk6MTk1",
        },
        {
          id: "NDA6MzI2OjQ0Nw",
        },
        {
          id: "NDE6Njg6Mzg3",
        },
        {
          id: "NDE6Mjk1OjQzNQ",
        },
      ],
    },
    {
      name: "Chapter 3",
      pages: [
        {
          id: "NDI6MjI2OjM0OQ",
        },
        {
          id: "NDM6MzU2OjY5OQ",
        },
        {
          id: "NTc6MzU5OjY4Nw",
        },
        {
          id: "NDI6MzI2OjI0Mw",
        },
        {
          id: "NDM6Njg6MzAz",
        },
        {
          id: "NDM6Mjk1OjM1MQ",
        },
        {
          id: "NDM6Mjk1OjE5NQ",
        },
        {
          id: "NDQ6MzI2OjQyMw",
        },
        {
          id: "NDQ6MzI2Ojk5",
        },
        {
          id: "NDc6Njg6Mzg3",
        },
        {
          id: "NDc6Mjk1OjI2Nw",
        },
        {
          id: "NDg6OTk6Njk5",
        },
        {
          id: "NDg6MzI2OjUxOQ",
        },
        {
          id: "NDk6Njg6MjQz",
        },
        {
          id: "NTA6MzI2OjI1NQ",
        },
        {
          id: "NTI6OTk6NTkx",
        },
        {
          id: "NTI6MzI2OjI2Nw",
        },
        {
          id: "NTM6Njg6MTEx",
        },
        {
          id: "NTU6Mjk1OjY5OQ",
        },
        {
          id: "NTU6Mjk1OjM5OQ",
        },
        {
          id: "NTU6Mjk1OjE5NQ",
        },
        {
          id: "NTY6OTk6NDcx",
        },
        {
          id: "NTc6Njg6MzUx",
        },
        {
          id: "NTc6Mjk1OjM3NQ",
        },
      ],
    },
    {
      name: "Back Matter",
      pages: [
        {
          id: "NTk6NzI6NjU2",
        },
        {
          id: "NTk6Mjk1OjQ1OQ",
        },
        {
          id: "NTk6Mjk1OjExMQ",
        },
        {
          id: "NjI6OTk6NTE5",
        },
        {
          id: "NjU6MTQ4OjY3Ng",
        },
        {
          id: "NjY6OTk6Njk5",
        },
        {
          id: "Njg6OTk6Njk5",
        },
        {
          id: "Njk6MzU0OjY5OQ",
        },
        {
          id: "Njk6MzUyOjQ3MQ",
        },
        {
          id: "NzA6OTk6NTc5",
        },
        {
          id: "NzE6Njg6Njk5",
        },
        {
          id: "NzI6OTk6Njk5",
        },
        {
          id: "NzI6OTk6NTU1",
        },
        {
          id: "NzM6Njg6NDIz",
        },
        {
          id: "NzA6MTU2OjY5OQ",
        },
        {
          id: "NzE6MzYxOjY5OQ",
        },
        {
          id: "NzM6MzYyOjY5OQ",
        },
        {
          id: "NzM6MzU0OjU3OQ",
        },
      ],
    },
  ];
  combines = [];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "NIGHT OF THE GRAY DEATH" &&
        t.fontId === "Gin-Regular:10",
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    for (let i = 0; i < text.length; i++) {
      text[i].fontId === "GoodOT-Bold:12" &&
        text[i].color === "#ffffff" &&
        text.splice(i--, 1);
    }
    for (let i = 0; i < text.length; i++) {
      ((text[i].text = text[i].text.replace(//, ". ")),
        text[i].text === "\u25AB" &&
          ((text[i].text = "\u2022"),
          (text[i].fontId = "GoodOT:8.5"),
          (text[i].fontName = "GoodOT"),
          (text[i].fontSize = 8.5)));
    }
    this.markStartOfLine(text, 34, 335.2499, 255);
    this.markStartOfLine(text, 50, 332.2501, 363.6);
    this.markStartOfLine(text, 70, 330.25, 291);
    this.markStartOfLine(text, 70, 379.25, 243);
    this.markStartOfLine(text, 72, 352.25, 375);
    this.markStartOfLine(text, 72, 349.25, 303);
    this.markStartOfLine(text, 72, 346.25, 291);
    this.markStartOfLine(text, 72, 341.25, 279);
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
