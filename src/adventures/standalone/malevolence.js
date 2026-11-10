import { AdventureBase } from "../../core/adventure-base.js";
import { CaptionImage } from "../../core/images.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class Malevolence extends AdventureBase {
  prefix = "malevolence";
  fullName = "Malevolence";
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
    "ErasmusExtraBold:50",
    "ErasmusExtraBold:38",
    "ErasmusExtraBold:36",
    "ErasmusExtraBold:30",
    "ErasmusMedium:14",
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
    this.RightTwoColumnWithRightCutout(7, 579),
    this.LeftTwoColumn(8),
    this.RightTwoColumn(9),
    this.LeftTwoColumn(10),
    this.RightTwoColumn(11),
    this.LeftTwoColumnWithLeftCutout(12, 500),
    this.RightTwoColumn(13),
    this.LeftTwoColumn(14),
    this.RightTwoColumnWithMap(15, 370),
    this.LeftTwoColumn(16),
    this.RightTwoColumn(17),
    this.ChapterHeadingPageLayout(18),
    this.RightTwoColumnWithRightCutout(19, 420),
    this.LeftTwoColumn(20),
    this.RightTwoColumn(21),
    this.LeftTwoColumn(22),
    this.RightTwoColumn(23),
    this.LeftTwoColumn(24),
    this.RightTwoColumn(25),
    this.LeftTwoColumn(26),
    this.RightTwoColumnWithMap(27, 360),
    this.LeftTwoColumn(28),
    this.RightTwoColumn(29),
    this.LeftTwoColumn(30),
    this.RightTwoColumnWithRightCutout(31, 390),
    this.LeftTwoColumn(32),
    this.RightTwoColumn(33),
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
    this.ChapterHeadingPageLayout(46),
    this.RightTwoColumn(47),
    this.LeftTwoColumn(48),
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
    this.RightChapterHeadingPageLayout(61),
    this.LeftTwoColumnWithLeftCutout(62, 430),
    this.RightTwoColumn(63),
    this.LeftTwoColumn(64),
    this.RightTwoColumn(65),
    this.LeftTwoColumnWithLeftCutout(66, 490),
    this.RightTwoColumn(67),
    this.LeftTwoColumn(68),
    this.RightTwoColumn(69),
    this.LeftTwoColumn(70),
    this.RightTwoColumn(71),
    this.LeftSingleColumnWithSidebar(72),
    this.RightSingleColumnWithSidebar(73),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      canonical: {
        name: "malevolence/map1",
        priority: 0,
      },
      nameInfo: {
        x: 27,
        y: 748.9774,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 1551,
      height: 1246,
      imageLeft: 13,
      imageRight: 1538,
      imageCols: 30,
      imageTop: 14,
      imageBottom: 1234,
      imageRows: 24,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/standalone/maps/malevolence-map1.json",
      journals: [
        {
          x: 2300,
          y: 2850,
          name: "B1.",
        },
        {
          x: 2300,
          y: 2500,
          name: "B2.",
        },
        {
          x: 1700,
          y: 2700,
          name: "B3.",
        },
        {
          x: 1500,
          y: 2700,
          name: "B3.",
        },
        {
          x: 1300,
          y: 2700,
          name: "B3.",
        },
        {
          x: 1100,
          y: 2700,
          name: "B3.",
        },
        {
          x: 1100,
          y: 2400,
          name: "B3.",
        },
        {
          x: 1100,
          y: 2200,
          name: "B3.",
        },
        {
          x: 1100,
          y: 2050,
          name: "B4.",
        },
        {
          x: 1700,
          y: 2100,
          name: "B5.",
        },
        {
          x: 1450,
          y: 2250,
          name: "B6.",
        },
        {
          x: 1700,
          y: 2350,
          name: "B7.",
        },
        {
          x: 3e3,
          y: 2650,
          name: "B8.",
        },
        {
          x: 3400,
          y: 2650,
          name: "B9.",
        },
        {
          x: 3300,
          y: 2200,
          name: "B10.",
        },
        {
          x: 2300,
          y: 1800,
          name: "B11.",
        },
        {
          x: 1300,
          y: 1800,
          name: "B12.",
        },
        {
          x: 1700,
          y: 1800,
          name: "B13.",
        },
        {
          x: 1400,
          y: 1200,
          name: "B14.",
        },
        {
          x: 1550,
          y: 1500,
          name: "B15.",
        },
        {
          x: 1900,
          y: 1350,
          name: "B16.",
        },
        {
          x: 2900,
          y: 1800,
          name: "B17.",
        },
        {
          x: 2900,
          y: 1300,
          name: "B18.",
        },
        {
          x: 3400,
          y: 1450,
          name: "B19.",
        },
        {
          x: 3300,
          y: 1800,
          name: "B20.",
        },
        {
          x: 3450,
          y: 1150,
          name: "B21.",
        },
        {
          x: 2300,
          y: 1100,
          name: "B22.",
        },
      ],
      tokens: [
        {
          id: "npc4",
          x: 1300,
          y: 2400,
        },
        {
          id: "npc4",
          x: 1500,
          y: 2400,
        },
        {
          id: "npc5",
          x: 1700,
          y: 2200,
        },
        {
          id: "npc3",
          x: 1800,
          y: 2600,
        },
        {
          id: "npc8",
          x: 1400,
          y: 1700,
        },
        {
          id: "npc7",
          x: 1800,
          y: 1700,
        },
        {
          id: "npc7",
          x: 2700,
          y: 1700,
        },
        {
          id: "npc10",
          x: 1800,
          y: 1300,
        },
        {
          id: "npc9",
          x: 1200,
          y: 1100,
        },
        {
          id: "hazard4",
          x: 2100,
          y: 1e3,
        },
        {
          id: "hazard3",
          x: 3e3,
          y: 1100,
        },
        {
          id: "npc6",
          x: 3100,
          y: 2100,
        },
        {
          id: "npc6",
          x: 3400,
          y: 2200,
        },
      ],
    }),
    new ModuleScene({
      name: "map2",
      canonical: {
        name: "malevolence/map2",
        priority: 0,
      },
      nameInfo: {
        x: 20,
        y: 694.6681,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 15,
      width: 1030,
      height: 687,
      imageLeft: 16,
      imageRight: 1012,
      imageCols: 29 * 5,
      imageTop: 83,
      imageBottom: 666,
      imageRows: 17 * 5,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/standalone/maps/malevolence-map2.json",
      journals: [
        {
          x: 12500,
          y: 11950,
          name: "A1.",
        },
        {
          x: 11250,
          y: 1e4,
          name: "A2.",
        },
        {
          x: 11300,
          y: 7750,
          name: "A3.",
        },
        {
          x: 7950,
          y: 9850,
          name: "A4.",
        },
        {
          x: 8050,
          y: 7800,
          name: "A5.",
        },
        {
          x: 11300,
          y: 5400,
          name: "A6.",
        },
        {
          x: 11250,
          y: 4e3,
          name: "A7.",
        },
      ],
      tokens: [
        {
          id: "npc1",
          x: 11300,
          y: 9500,
        },
        {
          id: "npc1",
          x: 11e3,
          y: 9700,
        },
        {
          id: "npc2",
          x: 8e3,
          y: 9700,
        },
      ],
    }),
    new ModuleScene({
      name: "map3",
      canonical: {
        name: "malevolence/map3",
        priority: 0,
      },
      nameInfo: {
        x: 24,
        y: 696.6681,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 49,
      width: 1028,
      height: 1364,
      imageLeft: 70,
      imageRight: 1017,
      imageCols: 32,
      imageTop: 76,
      imageBottom: 1258,
      imageRows: 40,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/standalone/maps/malevolence-map3.json",
      journals: [
        {
          x: 3700,
          y: 1500,
          name: "D1.",
        },
        {
          x: 3700,
          y: 2500,
          name: "D2.",
        },
        {
          x: 3900,
          y: 2300,
          name: "D3.",
        },
        {
          x: 3500,
          y: 2300,
          name: "D4.",
        },
        {
          x: 3700,
          y: 1750,
          name: "D5.",
        },
        {
          x: 3800,
          y: 3100,
          name: "D6.",
        },
        {
          x: 1300,
          y: 3900,
          name: "E1.",
        },
        {
          x: 1900,
          y: 3900,
          name: "E2.",
        },
        {
          x: 1950,
          y: 3e3,
          name: "E3.",
        },
        {
          x: 2700,
          y: 1800,
          name: "E4.",
        },
        {
          x: 1600,
          y: 5100,
          name: "E5.",
        },
        {
          x: 2500,
          y: 5e3,
          name: "E6.",
        },
        {
          x: 2500,
          y: 5500,
          name: "E6.",
          text: "E6A",
        },
        {
          x: 3500,
          y: 5400,
          name: "E6.",
          text: "E6B",
        },
        {
          x: 2500,
          y: 4600,
          name: "E6.",
          text: "E6C",
        },
        {
          x: 3200,
          y: 4600,
          name: "E6.",
          text: "E6D",
        },
        {
          x: 3300,
          y: 4900,
          name: "E7.",
        },
        {
          x: 3250,
          y: 4250,
          name: "E8.",
        },
        {
          x: 2500,
          y: 3750,
          name: "E9.",
        },
      ],
      tokens: [
        {
          id: "npc28",
          x: 2500,
          y: 5500,
        },
        {
          id: "npc28",
          x: 2450,
          y: 5500,
        },
        {
          id: "npc27",
          x: 2600,
          y: 3700,
        },
        {
          id: "npc26",
          x: 1500,
          y: 4900,
        },
        {
          id: "npc23",
          x: 1100,
          y: 3800,
        },
        {
          id: "npc23",
          x: 1400,
          y: 3800,
        },
        {
          id: "npc24",
          x: 2e3,
          y: 3e3,
        },
        {
          id: "npc25",
          x: 2500,
          y: 1600,
        },
        {
          id: "hazard7",
          x: 3700,
          y: 2400,
        },
        {
          id: "npc21",
          x: 3600,
          y: 3200,
        },
        {
          id: "npc19",
          x: 3800,
          y: 2300,
        },
        {
          id: "npc20",
          x: 3350,
          y: 1850,
        },
        {
          id: "npc20",
          x: 4e3,
          y: 1900,
        },
        {
          id: "npc20",
          x: 3800,
          y: 2e3,
        },
        {
          id: "npc20",
          x: 3550,
          y: 2e3,
        },
        {
          id: "npc30",
          x: 3200,
          y: 4100,
        },
      ],
    }),
    new ModuleScene({
      name: "map4",
      canonical: {
        name: "malevolence/map4",
        priority: 0,
      },
      nameInfo: {
        x: 643.2435,
        y: 748.9774,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 75,
      width: 1539,
      height: 1236,
      imageLeft: 13,
      imageRight: 1526,
      imageCols: 30,
      imageTop: 14,
      imageBottom: 1225,
      imageRows: 24,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/standalone/maps/malevolence-map4.json",
      journals: [
        {
          x: 2300,
          y: 2e3,
          name: "C1.",
        },
        {
          x: 2300,
          y: 2650,
          name: "C2.",
        },
        {
          x: 3e3,
          y: 2650,
          name: "C3.",
        },
        {
          x: 3400,
          y: 2650,
          name: "C4.",
        },
        {
          x: 3200,
          y: 2200,
          name: "C5.",
        },
        {
          x: 2850,
          y: 1700,
          name: "C6.",
        },
        {
          x: 2800,
          y: 1150,
          name: "C7.",
        },
        {
          x: 3350,
          y: 1150,
          name: "C9.",
        },
        {
          x: 2300,
          y: 1700,
          name: "C10.",
        },
        {
          x: 3350,
          y: 1450,
          name: "C8.",
        },
        {
          x: 2300,
          y: 1300,
          name: "C11.",
        },
        {
          x: 2300,
          y: 1100,
          name: "C12.",
        },
        {
          x: 1750,
          y: 1700,
          name: "C13.",
        },
        {
          x: 1200,
          y: 2150,
          name: "C14.",
          text: "C14A",
        },
        {
          x: 1600,
          y: 2150,
          name: "C14.",
          text: "C14B",
        },
        {
          x: 1250,
          y: 2600,
          name: "C15.",
        },
        {
          x: 1650,
          y: 2600,
          name: "C16.",
        },
        {
          x: 1500,
          y: 1250,
          name: "C17.",
        },
      ],
      tokens: [
        {
          id: "npc16",
          x: 1100,
          y: 2500,
        },
        {
          id: "hazard6",
          x: 1400,
          y: 2e3,
        },
        {
          id: "npc12",
          x: 3200,
          y: 2600,
        },
        {
          id: "npc12",
          x: 3400,
          y: 2500,
        },
        {
          id: "hazard2",
          x: 3400,
          y: 2700,
        },
        {
          id: "npc11",
          x: 3200,
          y: 2100,
          elite: true,
        },
        {
          id: "npc14",
          x: 2700,
          y: 1500,
          elite: true,
        },
        {
          id: "hazard5",
          x: 2200,
          y: 1500,
        },
        {
          id: "npc17",
          x: 1300,
          y: 1100,
        },
        {
          id: "npc17",
          x: 1500,
          y: 1100,
        },
        {
          id: "npc17",
          x: 1700,
          y: 1100,
        },
        {
          id: "npc17",
          x: 1300,
          y: 1300,
        },
        {
          id: "npc17",
          x: 1500,
          y: 1300,
        },
        {
          id: "npc17",
          x: 1700,
          y: 1300,
        },
        {
          id: "npc18",
          x: 1100,
          y: 1200,
        },
        {
          id: "hazard2",
          x: 2100,
          y: 1e3,
        },
        {
          id: "npc15",
          x: 3400,
          y: 1100,
        },
      ],
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "hazard1",
      actorUuid: "Compendium.pf2e.malevolence-bestiary.Actor.8zR1Gmv6rIlsWsTR",
      label: "XC",
      forIds: ["MTM6Njg6NjAz"],
    }),
    new ModuleNpc({
      id: "hazard2",
      actorUuid: "Compendium.pf2e.malevolence-bestiary.Actor.ZhxhWosYW3tZfDqL",
      label: "XMP",
      forIds: ["MTM6Mjk1OjYyNw", "Mzc6Njg6NDcx", "MzM6Mjk1OjY2Mw"],
    }),
    new ModuleNpc({
      id: "hazard3",
      actorUuid: "Compendium.pf2e.malevolence-bestiary.Actor.fQClrtmAe3AER0w2",
      page: 26,
      width: 745,
      height: 943,
      tokenX: 166,
      tokenY: 41,
      tokenSize: 1064,
      forIds: ["MjY6MzYyOjEzNQ"],
    }),
    new ModuleNpc({
      id: "hazard4",
      actorUuid: "Compendium.pf2e.malevolence-bestiary.Actor.ecdfItOKsZVc4v0L",
      label: "XP",
      forIds: ["Mjk6Njg6MjY3"],
    }),
    new ModuleNpc({
      id: "hazard5",
      actorUuid: "Compendium.pf2e.malevolence-bestiary.Actor.w2EmOacJ2zGfygFu",
      label: "WH",
      forIds: ["MzY6OTk6NTA3"],
    }),
    new ModuleNpc({
      id: "hazard6",
      actorUuid: "Compendium.pf2e.malevolence-bestiary.Actor.Gywa8GSJtDCPSjbt",
      label: "A&H",
      forIds: ["Mzc6Mjk1OjE0Nw"],
    }),
    new ModuleNpc({
      id: "hazard7",
      actorUuid: "Compendium.pf2e.malevolence-bestiary.Actor.etVnNsUFpgeOBFJO",
      label: "CV",
      forIds: ["NDE6Mjk1OjQ1OQ"],
    }),
    new ModuleNpc({
      id: "hazard8",
      actorUuid: "Compendium.pf2e.malevolence-bestiary.Actor.TrX8Op3qZzFvX4Df",
      label: "MoT",
      forIds: ["NDg6OTk6MTEx"],
    }),
    new ModuleNpc({
      id: "npc1",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.sldauWtSyK4JEiRl",
      label: "CS",
      forIds: ["MTQ6MzI2OjE0Nw"],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.dEAneTvoPuQXZoLR",
      label: "GM",
      forIds: ["MTY6MzI2OjY5OQ"],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid:
        "Compendium.pf2e.menace-under-otari-bestiary.Actor.Br1AtKUHe3nbzjnY",
      label: "M",
      forIds: ["MTk6Mjk1OjMzOQ"],
    }),
    new ModuleNpc({
      id: "npc4",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.O69kXMo6shkA606k",
      label: "C",
      forIds: ["MjA6MzI2OjIxOQ"],
    }),
    new ModuleNpc({
      id: "npc5",
      name: {
        page: 21,
        x: 67.5,
        y: 579,
      },
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.O69kXMo6shkA606k",
      page: 20,
      width: 748,
      height: 997,
      tokenX: -160,
      tokenY: 62,
      tokenSize: 504,
      elite: true,
      forIds: ["MjE6Njg6NTc5"],
    }),
    new ModuleNpc({
      id: "npc6",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.NQ6qRvpD9DIwVxt3",
      label: "VM",
      forIds: ["MjI6OTk6NjYz"],
    }),
    new ModuleNpc({
      id: "npc7",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.y2LqIPBHv2dA0pjI",
      label: "N",
      forIds: ["MjI6MzI2OjM2Mw"],
    }),
    new ModuleNpc({
      id: "npc8",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.V96EY8vLy7alnun9",
      label: "M",
      forIds: ["MjM6Njg6NjM5"],
    }),
    new ModuleNpc({
      id: "npc9",
      name: {
        page: 24,
        x: 99,
        y: 495,
      },
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.5KstOkXabrOlZaKR",
      page: 24,
      width: 668,
      height: 824,
      tokenX: 179,
      tokenY: 109,
      tokenSize: 1092,
      forIds: ["MjQ6OTk6NDk1"],
    }),
    new ModuleNpc({
      id: "npc10",
      actorUuid: "Compendium.pf2e.malevolence-bestiary.Actor.YSL27Oq2xFIzrq9u",
      page: 25,
      width: 732,
      height: 1087,
      tokenX: -226,
      tokenY: 43,
      tokenSize: 392,
      forIds: ["MjU6Njg6NDcx"],
    }),
    new ModuleNpc({
      id: "npc11",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.zpd6b6UPP72ZELCj",
      label: "P",
      forIds: ["MzM6Mjk1Ojk5"],
    }),
    new ModuleNpc({
      id: "npc12",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.VotlWUsFKdOrHWF6",
      page: 32,
      width: 668,
      height: 1073,
      tokenX: -126,
      tokenY: 21,
      tokenSize: 476,
      forIds: ["MzM6Njg6MTk1"],
    }),
    new ModuleNpc({
      id: "npc14",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.h7je8nkscJQ2Ac8j",
      label: "WS",
      forIds: ["MzQ6MzI2OjY2Mw"],
    }),
    new ModuleNpc({
      id: "npc15",
      actorUuid: "Compendium.pf2e.malevolence-bestiary.Actor.Wkn2wZbsNSifAnBh",
      page: 35,
      width: 601,
      height: 715,
      tokenX: -34,
      tokenY: 57,
      tokenSize: 448,
      forIds: ["MzU6Njg6Mjkx"],
    }),
    new ModuleNpc({
      id: "npc16",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.KgJq51AeYrENo3Db",
      label: "WoW",
      forIds: ["Mzk6Njg6NTY3"],
    }),
    new ModuleNpc({
      id: "npc17",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.NeKtvaz1jB7D6oti",
      label: "GS",
      forIds: ["NDA6MzI2OjYxNQ"],
    }),
    new ModuleNpc({
      id: "npc18",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.2ooIWWoCK1NCJKwT",
      page: 40,
      width: 792,
      height: 974,
      tokenX: -157,
      tokenY: -111,
      tokenSize: 532,
      forIds: ["NDA6MzI2OjU2Nw"],
    }),
    new ModuleNpc({
      id: "npc19",
      actorUuid: "Compendium.pf2e.malevolence-bestiary.Actor.Y9GX6pST1P9Y3Okh",
      uniqueKey:
        "Compendium.pf2e.pathfinder-monster-core.Actor.5KstOkXabrOlZaKR",
      label: "HN",
      forIds: ["NDI6OTk6MTEx"],
    }),
    new ModuleNpc({
      id: "npc20",
      actorUuid: "Compendium.pf2e.malevolence-bestiary.Actor.x0RGlIHXDN9y0D08",
      uniqueKey:
        "Compendium.pf2e.pathfinder-monster-core.Actor.5KstOkXabrOlZaKR",
      label: "CN",
      forIds: ["NDM6Njg6MTIz"],
    }),
    new ModuleNpc({
      id: "npc21",
      actorUuid: "Compendium.pf2e.malevolence-bestiary.Actor.JMXNSC7M2SRGZbhy",
      page: 44,
      width: 848,
      height: 885,
      tokenX: -87,
      tokenY: -5,
      tokenSize: 756,
      forIds: ["NDQ6MzI2OjYzOQ"],
    }),
    new ModuleNpc({
      id: "npc22",
      actorUuid: "Compendium.pf2e.malevolence-bestiary.Actor.vcFMNQf9vg7r11ca",
      uniqueKey:
        "Compendium.pf2e.pathfinder-monster-core.Actor.Gu0cJHGwPd547OtC",
      label: "XM",
      forIds: ["NDU6Mjk1OjUxOQ"],
    }),
    new ModuleNpc({
      id: "npc23",
      actorUuid: "Compendium.pf2e.malevolence-bestiary.Actor.bEFdPjTLtNboaTg2",
      page: 47,
      width: 718,
      height: 883,
      tokenX: 82,
      tokenY: 18,
      tokenSize: 812,
      forIds: ["NDc6Mjk1OjU5MQ"],
    }),
    new ModuleNpc({
      id: "npc24",
      actorUuid: "Compendium.pf2e.malevolence-bestiary.Actor.1XrwqxEW8rUr8238",
      page: 50,
      width: 891,
      height: 891,
      tokenX: 127,
      tokenY: 141,
      tokenSize: 1064,
      forIds: ["NzM6Njg6NTA3", "NTA6MzI2OjU5MQ"],
    }),
    new ModuleNpc({
      id: "npc25",
      actorUuid: "Compendium.pf2e.malevolence-bestiary.Actor.sdpB7n2LbzVRqrnv",
      page: 51,
      width: 655,
      height: 1237,
      tokenX: -87,
      tokenY: -90,
      tokenSize: 448,
      forIds: ["NTE6Njg6Mjkx"],
    }),
    new ModuleNpc({
      id: "npc26",
      actorUuid: "Compendium.pf2e.malevolence-bestiary.Actor.1wb9Vi3V4GDeOBCt",
      page: 52,
      width: 796,
      height: 961,
      tokenX: -268,
      tokenY: -83,
      tokenSize: 336,
      forIds: ["NTI6Mzc3OjQxMQ"],
    }),
    new ModuleNpc({
      id: "npc27",
      actorUuid: "Compendium.pf2e.malevolence-bestiary.Actor.n3taMFiViyEQ5JAi",
      page: 57,
      width: 761,
      height: 1220,
      tokenX: -260,
      tokenY: -40,
      tokenSize: 392,
      forIds: ["NTY6OTk6NjYz"],
    }),
    new ModuleNpc({
      id: "npc28",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.KH1GkazaI59zftst",
      label: "CH",
      forIds: ["NTM6Mjk1OjE5NQ"],
    }),
    new ModuleNpc({
      id: "npc29",
      actorUuid: "Compendium.pf2e.malevolence-bestiary.Actor.VgBE6ow0CvsQxFkq",
      page: 72,
      width: 701,
      height: 865,
      tokenX: 86,
      tokenY: 38,
      tokenSize: 840,
      forIds: ["NzI6MjUxOjYzOQ"],
    }),
    new ModuleNpc({
      id: "npc30",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.7UBCht1tQfeba2Ih",
      label: "WG",
      forIds: ["NTQ6MzI2OjM2Mw"],
    }),
  ];
  journals = [
    new CaptionImage({
      name: "journal1",
      page: 4,
      width: 1260,
      height: 1636,
    }),
    new CaptionImage({
      name: "journal2",
      page: 6,
      width: 1259,
      height: 753,
    }),
    new CaptionImage({
      name: "journal3",
      page: 8,
      width: 557,
      height: 618,
    }),
    new CaptionImage({
      name: "journal4",
      page: 17,
      width: 819,
      height: 1153,
    }),
    new CaptionImage({
      name: "journal5",
      page: 18,
      width: 1259,
      height: 715,
    }),
    new CaptionImage({
      name: "journal6",
      page: 46,
      width: 1259,
      height: 789,
    }),
    new CaptionImage({
      name: "journal7",
      page: 60,
      width: 1261,
      height: 1636,
    }),
    new CaptionImage({
      name: "journal8",
      page: 69,
      width: 446,
      height: 483,
    }),
    new CaptionImage({
      name: "npc1",
      page: 20,
      width: 748,
      height: 997,
    }),
    new CaptionImage({
      name: "npc2",
      page: 24,
      width: 668,
      height: 824,
    }),
    new CaptionImage({
      name: "npc3",
      page: 25,
      width: 732,
      height: 1087,
    }),
    new CaptionImage({
      name: "npc4",
      page: 26,
      width: 745,
      height: 943,
    }),
    new CaptionImage({
      name: "npc5",
      page: 28,
      width: 700,
      height: 1126,
    }),
    new CaptionImage({
      name: "npc6",
      page: 30,
      width: 543,
      height: 966,
    }),
    new CaptionImage({
      name: "npc7",
      page: 32,
      width: 668,
      height: 1073,
    }),
    new CaptionImage({
      name: "npc8",
      page: 34,
      width: 556,
      height: 1126,
    }),
    new CaptionImage({
      name: "npc9",
      page: 35,
      width: 601,
      height: 715,
    }),
    new CaptionImage({
      name: "npc10",
      page: 40,
      width: 792,
      height: 974,
    }),
    new CaptionImage({
      name: "npc11",
      page: 44,
      width: 848,
      height: 885,
    }),
    new CaptionImage({
      name: "npc12",
      page: 47,
      width: 718,
      height: 883,
    }),
    new CaptionImage({
      name: "npc13",
      page: 50,
      width: 891,
      height: 891,
    }),
    new CaptionImage({
      name: "npc14",
      page: 51,
      width: 655,
      height: 1237,
    }),
    new CaptionImage({
      name: "npc15",
      page: 52,
      width: 796,
      height: 961,
    }),
    new CaptionImage({
      name: "npc16",
      page: 57,
      width: 761,
      height: 1220,
    }),
    new CaptionImage({
      name: "npc17",
      page: 58,
      width: 462,
      height: 1189,
    }),
    new CaptionImage({
      name: "npc18",
      page: 67,
      width: 693,
      height: 984,
    }),
    new CaptionImage({
      name: "npc19",
      page: 68,
      width: 750,
      height: 1092,
    }),
    new CaptionImage({
      name: "npc20",
      page: 73,
      width: 830,
      height: 840,
    }),
  ];
  journalPages = [
    {
      name: "Chapter 1",
      pages: [
        {
          id: "NjoxOTY6MzU1",
        },
        {
          id: "NzoyOTU6OTk",
        },
        {
          id: "ODo5OToyMDc",
        },
        {
          id: "MTE6Mjk1OjU1NQ",
        },
        {
          id: "MTI6OTk6MTQ3",
        },
        {
          id: "MTM6Njg6MTk1",
        },
        {
          id: "MTQ6OTk6MTM1",
        },
        {
          id: "MTQ6MzI2OjQzNQ",
        },
        {
          id: "MTQ6MzI2Ojk5",
        },
        {
          id: "MTU6Mjk1OjI2Nw",
        },
        {
          id: "MTY6MzI2OjQ1OQ",
        },
        {
          id: "MTY6MzI2OjMzOQ",
        },
        {
          id: "MTY6MzI2OjE1OQ",
        },
      ],
    },
    {
      name: "Chapter 2",
      pages: [
        {
          id: "MTg6MjAzOjM1Ng",
        },
        {
          id: "MTk6Njg6NTU1",
        },
        {
          id: "MTk6Njg6NDIz",
        },
        {
          id: "MTk6Mjk1OjI5MQ",
        },
        {
          id: "MTk6Mjk1Ojk5",
        },
        {
          id: "MjA6OTk6NjUx",
        },
        {
          id: "MjA6MzI2OjY5OQ",
        },
        {
          id: "MjA6MzQ0OjE3MQ",
        },
        {
          id: "MjE6Njg6NDU5",
        },
        {
          id: "MjE6Njg6MTEx",
        },
        {
          id: "MjE6Mjk1OjQ5NQ",
        },
        {
          id: "MjI6OTk6NTE5",
        },
        {
          id: "MjI6MzI2OjMxNQ",
        },
        {
          id: "MjM6Njg6NTkx",
        },
        {
          id: "MjM6Njg6MzI3",
        },
        {
          id: "MjQ6MzI2OjU3OQ",
        },
        {
          id: "MjQ6MzI2OjQ3MQ",
        },
        {
          id: "MjY6OTk6Njk5",
        },
        {
          id: "MjY6MzI2OjU1NQ",
        },
        {
          id: "Mjc6Mjk1OjE0Nw",
        },
        {
          id: "Mjg6OTk6NjI3",
        },
        {
          id: "Mjg6MzI2OjY5OQ",
        },
        {
          id: "Mjk6Njg6NTkx",
        },
        {
          id: "Mjk6Mjk1OjExMQ",
        },
        {
          id: "MzA6OTk6NDcx",
        },
        {
          id: "MzI6OTk6Njk5",
        },
        {
          id: "MzI6MzI2OjM4Nw",
        },
        {
          id: "MzM6Mjk1OjUwNw",
        },
        {
          id: "MzQ6OTk6NDgz",
        },
        {
          id: "MzQ6MzI2OjYxNQ",
        },
        {
          id: "MzQ6MzQzOjUwNw",
        },
        {
          id: "MzQ6MzU3OjE1OQ",
        },
        {
          id: "MzU6Mjk1OjYzOQ",
        },
        {
          id: "MzY6MzI2OjI1NQ",
        },
        {
          id: "MzY6MzI2OjE1OQ",
        },
        {
          id: "Mzc6Njg6NDIz",
        },
        {
          id: "Mzc6Mjk1OjYzOQ",
        },
        {
          id: "Mzg6OTk6ODc",
        },
        {
          id: "Mzk6Njg6Mjc5",
        },
        {
          id: "Mzk6Njg6MTcx",
        },
        {
          id: "NDA6MzU4OjQzNQ",
        },
        {
          id: "NDE6Njg6MzYz",
        },
        {
          id: "NDE6Njg6MTk1",
        },
        {
          id: "NDI6OTk6NDgz",
        },
        {
          id: "NDI6MzI2OjM1MQ",
        },
        {
          id: "NDM6Njg6NjYz",
        },
        {
          id: "NDM6Mjk1OjQ1OQ",
        },
        {
          id: "NDU6Njg6Mzk5",
        },
      ],
    },
    {
      name: "Chapter 3",
      pages: [
        {
          id: "NDY6MjAzOjM1Ng",
        },
        {
          id: "NDc6Njg6NDQ3",
        },
        {
          id: "NDg6OTk6NTMx",
        },
        {
          id: "NDg6MzI2OjI0Mw",
        },
        {
          id: "NTA6MzI2OjQyMw",
        },
        {
          id: "NTE6MzI5OjI0Mw",
        },
        {
          id: "NTM6Njg6MjY3",
        },
        {
          id: "NTM6Mjk1OjE0Nw",
        },
        {
          id: "NTQ6OTk6MjE5",
        },
        {
          id: "NTQ6MzI2OjMxNQ",
        },
        {
          id: "NTc6Njg6Mzc1",
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
      ],
    },
    {
      name: "Back Matter",
      pages: [
        {
          id: "NjE6MTA5OjY3NQ",
        },
        {
          id: "NjE6Njg6MjY3",
        },
        {
          id: "NjE6Mjk1OjQ4Mw",
        },
        {
          id: "NjI6OTk6MzM5",
        },
        {
          id: "NzozMzc6Njg3",
        },
        {
          id: "MTI6MTQ5OjY4Nw",
        },
        {
          id: "MTk6MzUzOjY4Nw",
        },
        {
          id: "MzE6MzM4OjY4Nw",
        },
        {
          id: "NjI6MTU0OjY4Nw",
        },
        {
          id: "NjY6MTcyOjY4Nw",
        },
        {
          id: "NzI6MTc2OjY2Mw",
        },
        {
          id: "NzM6MzcxOjY2Mw",
        },
      ],
    },
  ];
  combines = [];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) => t.text.trim() === "MALEVOLENCE" && t.fontId === "Gin-Regular:10",
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    for (let i = 0; i < text.length; i++) {
      text[i].text = text[i].text.replace(/�/, ".");
    }
    this.markStartOfLine(text, 44, 402.25, 159);
    this.markStartOfLine(text, 51, 310.75, 507);
    this.markStartOfLine(text, 51, 310.75, 495);
    this.markStartOfLine(text, 51, 322.75, 471);
    this.markStartOfLine(text, 51, 343.75, 423);
    this.markStartOfLine(text, 51, 420.75, 387);
    this.markStartOfLine(text, 51, 326.75, 279);
    this.markStartOfLine(text, 52, 379.25, 375);
    this.markStartOfLine(text, 52, 369.25, 351);
    this.markStartOfLine(text, 52, 365.25, 339);
    this.markStartOfLine(text, 52, 333.25, 291);
    this.markStartOfLine(text, 52, 345.25, 255);
    this.markStartOfLine(text, 52, 347.25, 219);
    this.markStartOfLine(text, 52, 347.25, 207);
    this.markStartOfLine(text, 52, 343.25, 183);
    this.markStartOfLine(text, 52, 340.25, 171);
    this.markStartOfLine(text, 52, 359.25, 123);
    this.markStartOfLine(text, 72, 307.4999, 375);
    this.markStartOfLine(text, 72, 328.4999, 363);
    this.markStartOfLine(text, 72, 340.4999, 327);
    this.markStartOfLine(text, 72, 342.4999, 315);
    this.markStartOfLine(text, 72, 338.4999, 255);
    this.markStartOfLine(text, 72, 310.4999, 207);
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
