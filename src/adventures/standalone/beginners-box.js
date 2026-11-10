import { AdventureBase } from "../../core/adventure-base.js";
import { AdventureImage } from "../../core/images.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class BeginnersBox extends AdventureBase {
  prefix = "menace-under-otari";
  fullName = "Menace Under Otari";
  blacklistedFonts = [
    "Times-Italic:8",
    "RomicStd-Bold:12",
    "TradeGothicLTStd-BdCn20:12",
    "TradeGothicLTStd-BdCn20:8",
    "TradeGothicLTStd-BdCn20:11.0714",
    "Taroca:33.6",
    "GoodOT-Bold:12",
  ];
  headingFontIds = [
    "GoodOT-Bold:14",
    "RomicStd-Bold:14",
    "Taroca:21",
    "Taroca:19",
    "Taroca:16",
    "Taroca:12",
  ];
  subheadingFontIds = [
    "Gin-Regular:12",
    "Gin-Regular:14",
    "Gin-Round:12",
    "GoodOT-CondBold:12",
  ];
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
  pageTop = 725;
  pageBottom = 40;
  LeftPageTwoColumn = {
    col1X1: 72,
    col1X2: 310,
    col2X1: 319.5,
    col2X2: 550,
  };
  RightPageTwoColumn = {
    col1X1: 54,
    col1X2: 290,
    col2X1: 301.75,
    col2X2: 510,
  };
  pages = [
    this.LeftTwoColumnWithLeftCutout(4, 171),
    this.RightTwoColumn(5),
    this.LeftTwoColumnWithRightCutout(6, 460),
    this.LeftTwoColumnWithRightCutout(8, 475),
    this.RightTwoColumnWithRightCutout(9, 390),
    this.LeftTwoColumn(10, this.pageTop, 360),
    this.LeftTwoColumnWithRightCutout(10, 100, 360, this.pageBottom),
    this.RightTwoColumnWithRightCutout(11, 480),
    this.LeftTwoColumn(12),
    this.RightTwoColumnWithRightCutout(13, 490),
    this.LeftTwoColumnWithRightCutout(14, 480, this.pageTop, 330),
    this.LeftTwoColumnWithRightCutout(14, 80, 330, this.pageBottom),
    this.RightTwoColumn(15, this.pageTop, 460),
    this.RightTwoColumnWithRightCutout(15, 160, 460, this.pageBottom),
    this.LeftTwoColumnWithRightCutout(16, 480),
    this.RightTwoColumn(17),
    this.RightTwoColumnWithRightCutout(19, 360),
    this.LeftTwoColumn(20, this.pageTop, 485),
    this.LeftTwoColumnWithRightCutout(20, 235, 485, this.pageBottom),
    this.RightTwoColumnWithMap(21, 365),
    this.LeftTwoColumnWithRightCutout(22, 480),
    this.RightTwoColumnWithRightCutout(23, 480),
    this.LeftTwoColumnWithRightCutout(24, 460),
    this.RightTwoColumn(25),
    this.LeftTwoColumnWithRightCutout(26, 450),
    this.RightTwoColumnWithRightCutout(27, 580),
    this.LeftTwoColumnWithRightCutout(28, 100),
    this.RightTwoColumn(29),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      canonical: {
        name: "beginnersbox/level1",
        priority: 0,
      },
      nameInfo: {
        x: 238.1662,
        y: 723,
        page: 6,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 1261,
      height: 1637,
      imageIndex: 2,
      imageLeft: 63,
      imageRight: 1178,
      imageCols: 20,
      imageTop: 95,
      imageBottom: 1543,
      imageRows: 26,
      detailsFile: "/standalone/maps/bb-map1.json",
      journals: [
        {
          x: 1700,
          y: 2900,
          id: "NjoxMDE6Njk0",
        },
        {
          x: 2550,
          y: 3350,
          id: "ODoxMDE6NzE4",
        },
        {
          x: 2450,
          y: 2450,
          id: "OTo4Mzo3MTg",
        },
        {
          x: 1850,
          y: 1850,
          id: "MTA6MTAxOjM0Nw",
        },
        {
          x: 2450,
          y: 1150,
          id: "MTE6ODM6NzE5",
        },
        {
          x: 1650,
          y: 2350,
          id: "MTI6MTAxOjM0Ng",
        },
        {
          x: 850,
          y: 2950,
          id: "MTM6ODM6NzE5",
        },
        {
          x: 750,
          y: 2550,
          id: "MTQ6MTAxOjcxOQ",
        },
        {
          x: 750,
          y: 1950,
          id: "MTQ6MTAxOjMyMg",
        },
        {
          x: 1100,
          y: 1700,
          id: "MTU6ODM6NDU1",
        },
        {
          x: 750,
          y: 950,
          id: "MTY6MTAxOjcxOQ",
        },
      ],
      tokens: [
        {
          id: "npc39",
          x: 2200,
          y: 3200,
        },
        {
          id: "npc39",
          x: 2100,
          y: 3200,
        },
        {
          id: "npc39",
          x: 2e3,
          y: 3100,
        },
        {
          id: "npc39",
          x: 2e3,
          y: 3200,
        },
        {
          id: "npc2",
          x: 900,
          y: 3100,
        },
        {
          id: "npc45",
          x: 2700,
          y: 1800,
        },
        {
          id: "npc2",
          x: 700,
          y: 3100,
        },
        {
          id: "npc2",
          x: 800,
          y: 3100,
        },
        {
          id: "npc2",
          x: 800,
          y: 3e3,
        },
        {
          id: "npc2",
          x: 1300,
          y: 900,
        },
        {
          id: "npc2",
          x: 1400,
          y: 1200,
        },
        {
          id: "npc3",
          x: 1600,
          y: 1100,
        },
        {
          id: "npc52",
          x: 2600,
          y: 1100,
        },
        {
          id: "npc41",
          x: 2400,
          y: 1500,
        },
        {
          id: "npc41",
          x: 2700,
          y: 700,
        },
        {
          id: "npc41",
          x: 2400,
          y: 700,
        },
        {
          id: "npc41",
          x: 2700,
          y: 1500,
        },
      ],
    }),
    new ModuleScene({
      name: "map2",
      canonical: {
        name: "beginnersbox/level2",
        priority: 0,
      },
      nameInfo: {
        x: 206.464,
        y: 717.6073,
        page: 19,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 18,
      width: 1099,
      height: 1433,
      imageLeft: 43,
      imageRight: 1054,
      imageCols: 22,
      imageTop: 34,
      imageBottom: 1411,
      imageRows: 30,
      detailsFile: "/standalone/maps/bb-map2.json",
      journals: [
        {
          x: 1650,
          y: 3350,
          id: "MTk6ODM6NTk5",
        },
        {
          x: 1850,
          y: 2850,
          id: "MjA6MTAxOjcxOQ",
        },
        {
          x: 2450,
          y: 3150,
          id: "MjA6MTAxOjQ3OQ",
        },
        {
          x: 2200,
          y: 2250,
          id: "MjI6MTAxOjcxOQ",
        },
        {
          x: 900,
          y: 3250,
          id: "MjM6ODM6NzE5",
        },
        {
          x: 850,
          y: 2550,
          id: "MjQ6MTAxOjcxOQ",
        },
        {
          x: 950,
          y: 1050,
          id: "MjY6MTAxOjcxOQ",
        },
        {
          x: 2050,
          y: 1250,
          id: "Mjg6MTAxOjM0Nw",
        },
      ],
      tokens: [
        {
          id: "npc32",
          x: 1800,
          y: 3300,
        },
        {
          id: "npc2",
          x: 600,
          y: 2200,
        },
        {
          id: "npc32",
          x: 1400,
          y: 3300,
        },
        {
          id: "npc18",
          x: 2700,
          y: 3500,
        },
        {
          id: "npc4",
          x: 1500,
          y: 1900,
        },
        {
          id: "npc2",
          x: 1500,
          y: 2600,
        },
        {
          id: "npc4",
          x: 1500,
          y: 2700,
        },
        {
          id: "npc2",
          x: 800,
          y: 2200,
        },
        {
          id: "npc32",
          x: 800,
          y: 1300,
        },
        {
          id: "npc5",
          x: 1e3,
          y: 1100,
        },
        {
          id: "npc13",
          x: 2200,
          y: 1200,
        },
        {
          id: "npc51",
          x: 2300,
          y: 2100,
        },
        {
          id: "npc4",
          x: 800,
          y: 2300,
        },
        {
          id: "npc51",
          x: 2400,
          y: 2100,
        },
        {
          id: "npc32",
          x: 600,
          y: 1400,
        },
        {
          id: "npc51",
          x: 2400,
          y: 2200,
        },
      ],
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      name: {
        page: 5,
        x: 255.5726,
        y: 524.0981,
      },
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      page: 5,
      width: 460,
      height: 460,
      tokenX: 16,
      tokenY: 39,
      tokenSize: 460,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid:
        "Compendium.pf2e.menace-under-otari-bestiary.Actor.BIZfjoz8DZt75EDn",
      uniqueKey:
        "Compendium.pf2e.menace-under-otari-bestiary.Actor.BIZfjoz8DZt75EDn.2",
      page: 13,
      width: 841,
      height: 857,
      tokenX: -119,
      tokenY: 72,
      tokenSize: 465,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid:
        "Compendium.pf2e.menace-under-otari-bestiary.Actor.4Axci50gPQArPg7d",
      page: 17,
      width: 1042,
      height: 842,
      tokenX: -281,
      tokenY: -45,
      tokenSize: 510,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc4",
      actorUuid:
        "Compendium.pf2e.menace-under-otari-bestiary.Actor.BIZfjoz8DZt75EDn",
      page: 24,
      width: 853,
      height: 739,
      tokenX: -166,
      tokenY: 94,
      tokenSize: 461,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc5",
      actorUuid:
        "Compendium.pf2e.menace-under-otari-bestiary.Actor.AleeS0IRqT4tUphB",
      page: 26,
      width: 907,
      height: 858,
      tokenX: -183,
      tokenY: 89,
      tokenSize: 487,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc6",
      actorUuid:
        "Compendium.pf2e.menace-under-otari-bestiary.Actor.CFlx1tkRxKC9qAC7",
      page: 59,
      width: 481,
      height: 703,
      tokenX: -98,
      tokenY: 32,
      tokenSize: 311,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc7",
      actorUuid:
        "Compendium.pf2e.menace-under-otari-bestiary.Actor.mX47c0W9rizbmMBM",
      page: 59,
      width: 481,
      height: 703,
      imageIndex: 1,
      tokenX: -133,
      tokenY: -104,
      tokenSize: 367,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc8",
      actorUuid:
        "Compendium.pf2e.menace-under-otari-bestiary.Actor.IyhbcdTVmkV4pSju",
      page: 60,
      width: 481,
      height: 703,
      tokenX: -22,
      tokenY: -44,
      tokenSize: 535,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc9",
      actorUuid:
        "Compendium.pf2e.menace-under-otari-bestiary.Actor.9cBuzDV8seJqhNKJ",
      page: 60,
      width: 481,
      height: 703,
      tokenX: 56,
      tokenY: -31,
      tokenSize: 367,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc10",
      actorUuid:
        "Compendium.pf2e.menace-under-otari-bestiary.Actor.kB7FNn3vosp6cqQg",
      page: 61,
      width: 481,
      height: 703,
      tokenX: 68,
      tokenY: -41,
      tokenSize: 311,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc11",
      actorUuid:
        "Compendium.pf2e.menace-under-otari-bestiary.Actor.NRBgcu0LkXXp8mtp",
      page: 61,
      width: 481,
      height: 699,
      tokenX: 39,
      tokenY: 78,
      tokenSize: 559,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc12",
      actorUuid:
        "Compendium.pf2e.menace-under-otari-bestiary.Actor.AdQVjlOWB6rmBRVp",
      page: 62,
      width: 481,
      height: 703,
      tokenX: -129,
      tokenY: 42,
      tokenSize: 395,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc13",
      actorUuid:
        "Compendium.pf2e.menace-under-otari-bestiary.Actor.WPsgrCUSFCqgDvJi",
      page: 62,
      width: 717,
      height: 794,
      tokenX: -281,
      tokenY: -35,
      tokenSize: 374,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc14",
      actorUuid:
        "Compendium.pf2e.menace-under-otari-bestiary.Actor.sW8koPLrSgHalAnq",
      page: 63,
      width: 481,
      height: 703,
      tokenX: -126,
      tokenY: 39,
      tokenSize: 283,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc15",
      actorUuid:
        "Compendium.pf2e.menace-under-otari-bestiary.Actor.FaBHkmFGuEIqIYM1",
      page: 63,
      width: 481,
      height: 703,
      imageIndex: 1,
      tokenX: -91,
      tokenY: 83,
      tokenSize: 339,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc16",
      actorUuid:
        "Compendium.pf2e.menace-under-otari-bestiary.Actor.xKYIN88ULPFgSZmw",
      page: 64,
      width: 481,
      height: 703,
      tokenX: -90,
      tokenY: 57,
      tokenSize: 283,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc17",
      actorUuid:
        "Compendium.pf2e.menace-under-otari-bestiary.Actor.H7z7VHzlHlEFev1r",
      page: 64,
      width: 481,
      height: 703,
      imageIndex: 1,
      tokenX: 55,
      tokenY: -149,
      tokenSize: 675,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc18",
      actorUuid:
        "Compendium.pf2e.menace-under-otari-bestiary.Actor.xN5J9S485LxFZMkL",
      page: 65,
      width: 481,
      height: 703,
      tokenX: 48,
      tokenY: 49,
      tokenSize: 563,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc19",
      actorUuid:
        "Compendium.pf2e.menace-under-otari-bestiary.Actor.VQPzDz3xnCQGFOGL",
      page: 65,
      width: 481,
      height: 703,
      imageIndex: 1,
      tokenX: 44,
      tokenY: 67,
      tokenSize: 703,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc20",
      actorUuid:
        "Compendium.pf2e.menace-under-otari-bestiary.Actor.sAfjpjAS56jtrUbi",
      page: 66,
      width: 481,
      height: 703,
      tokenX: 54,
      tokenY: -88,
      tokenSize: 703,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc21",
      actorUuid:
        "Compendium.pf2e.menace-under-otari-bestiary.Actor.cvfIkEF6xmWn2soN",
      page: 66,
      width: 481,
      height: 703,
      imageIndex: 1,
      tokenX: -92,
      tokenY: -39,
      tokenSize: 423,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc22",
      actorUuid:
        "Compendium.pf2e.menace-under-otari-bestiary.Actor.N98ug9jQHqeFoK1N",
      page: 67,
      width: 481,
      height: 703,
      tokenX: 59,
      tokenY: 131,
      tokenSize: 563,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc23",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.LHHgGSs0ELCR4CYK",
      page: 67,
      width: 481,
      height: 703,
      imageIndex: 1,
      tokenX: -1,
      tokenY: 5,
      tokenSize: 423,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc24",
      actorUuid:
        "Compendium.pf2e.menace-under-otari-bestiary.Actor.sA2dFdRUwiapo69Z",
      page: 68,
      width: 481,
      height: 703,
      tokenX: 150,
      tokenY: 68,
      tokenSize: 703,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc25",
      actorUuid:
        "Compendium.pf2e.menace-under-otari-bestiary.Actor.Ky5eNRvN71O0tY9l",
      page: 68,
      width: 481,
      height: 703,
      imageIndex: 1,
      tokenX: -50,
      tokenY: -7,
      tokenSize: 395,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc26",
      actorUuid:
        "Compendium.pf2e.menace-under-otari-bestiary.Actor.fLLKuOXwPq1Iq0U4",
      page: 69,
      width: 481,
      height: 703,
      tokenX: -67,
      tokenY: -15,
      tokenSize: 423,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc27",
      actorUuid:
        "Compendium.pf2e.menace-under-otari-bestiary.Actor.aeOzCBpwnUVcpqxI",
      page: 69,
      width: 481,
      height: 703,
      imageIndex: 1,
      tokenX: -34,
      tokenY: 66,
      tokenSize: 423,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc28",
      actorUuid:
        "Compendium.pf2e.menace-under-otari-bestiary.Actor.uBNm3R9wbLTPrM9i",
      page: 70,
      width: 481,
      height: 703,
      tokenX: 25,
      tokenY: -46,
      tokenSize: 367,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc29",
      actorUuid:
        "Compendium.pf2e.menace-under-otari-bestiary.Actor.RTviEfjYnsXa0wkT",
      page: 70,
      width: 481,
      height: 703,
      imageIndex: 1,
      tokenX: -6,
      tokenY: 103,
      tokenSize: 535,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc30",
      actorUuid:
        "Compendium.pf2e.menace-under-otari-bestiary.Actor.NW68bxCLC6oDHxL9",
      page: 71,
      width: 481,
      height: 703,
      tokenX: 14,
      tokenY: 108,
      tokenSize: 451,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc31",
      actorUuid:
        "Compendium.pf2e.menace-under-otari-bestiary.Actor.93hZtLl9pRRfqI05",
      page: 71,
      width: 481,
      height: 703,
      imageIndex: 1,
      tokenX: -41,
      tokenY: 0,
      tokenSize: 423,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc32",
      actorUuid:
        "Compendium.pf2e.menace-under-otari-bestiary.Actor.PcHQDmPTztw32PhL",
      page: 72,
      width: 481,
      height: 703,
      tokenX: -40,
      tokenY: 105,
      tokenSize: 451,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc33",
      actorUuid:
        "Compendium.pf2e.menace-under-otari-bestiary.Actor.Br1AtKUHe3nbzjnY",
      page: 73,
      width: 481,
      height: 703,
      tokenX: -7,
      tokenY: 57,
      tokenSize: 451,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc34",
      actorUuid:
        "Compendium.pf2e.menace-under-otari-bestiary.Actor.Twvzy1yRo6m6dM8D",
      page: 74,
      width: 481,
      height: 703,
      tokenX: 20,
      tokenY: 112,
      tokenSize: 423,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc35",
      actorUuid:
        "Compendium.pf2e.menace-under-otari-bestiary.Actor.9InGpxq5xbbHaL9f",
      page: 74,
      width: 481,
      height: 703,
      imageIndex: 1,
      tokenX: -18,
      tokenY: -120,
      tokenSize: 563,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc36",
      actorUuid:
        "Compendium.pf2e.menace-under-otari-bestiary.Actor.PLZk6zY5iwccPTPS",
      page: 75,
      width: 481,
      height: 703,
      tokenX: -76,
      tokenY: 54,
      tokenSize: 255,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc37",
      actorUuid:
        "Compendium.pf2e.menace-under-otari-bestiary.Actor.YReM6QbqwUz3UTP7",
      page: 75,
      width: 481,
      height: 703,
      imageIndex: 1,
      tokenX: -32,
      tokenY: 48,
      tokenSize: 283,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc38",
      actorUuid:
        "Compendium.pf2e.menace-under-otari-bestiary.Actor.X03vq2RWi2jiA6Ri",
      page: 76,
      width: 481,
      height: 703,
      tokenX: -48,
      tokenY: 78,
      tokenSize: 367,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc39",
      actorUuid:
        "Compendium.pf2e.menace-under-otari-bestiary.Actor.iIJPJcDT8wlJ8z5M",
      page: 77,
      width: 481,
      height: 686,
      tokenX: -67,
      tokenY: 48,
      tokenSize: 546,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc40",
      actorUuid:
        "Compendium.pf2e.menace-under-otari-bestiary.Actor.VotlWUsFKdOrHWF6",
      page: 77,
      width: 481,
      height: 703,
      tokenX: 37,
      tokenY: 25,
      tokenSize: 507,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc41",
      actorUuid:
        "Compendium.pf2e.menace-under-otari-bestiary.Actor.trchDxbDR2TiPMxT",
      page: 78,
      width: 481,
      height: 703,
      tokenX: -51,
      tokenY: 41,
      tokenSize: 395,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc42",
      actorUuid:
        "Compendium.pf2e.menace-under-otari-bestiary.Actor.sEgjgitJmwYYa4mV",
      page: 78,
      width: 481,
      height: 703,
      imageIndex: 1,
      tokenX: -54,
      tokenY: 59,
      tokenSize: 395,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc43",
      actorUuid:
        "Compendium.pf2e.menace-under-otari-bestiary.Actor.AJ5LuNMVPLCydryP",
      page: 79,
      width: 481,
      height: 703,
      tokenX: 38,
      tokenY: 81,
      tokenSize: 507,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc44",
      actorUuid:
        "Compendium.pf2e.menace-under-otari-bestiary.Actor.1uVwkGlqYzyWaDMy",
      page: 79,
      width: 481,
      height: 704,
      tokenX: 81,
      tokenY: 229,
      tokenSize: 704,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc45",
      actorUuid:
        "Compendium.pf2e.menace-under-otari-bestiary.Actor.A4VgQIHsqJKssQOM",
      page: 80,
      width: 481,
      height: 479,
      tokenX: -55,
      tokenY: -23,
      tokenSize: 425,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc46",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.gvCCATlH9mPGWbsp",
      page: 80,
      width: 481,
      height: 703,
      tokenX: -3,
      tokenY: 97,
      tokenSize: 563,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc47",
      actorUuid:
        "Compendium.pf2e.menace-under-otari-bestiary.Actor.ZMr28tFTA5NUcBTi",
      page: 81,
      width: 481,
      height: 703,
      tokenX: -21,
      tokenY: 94,
      tokenSize: 451,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc48",
      actorUuid:
        "Compendium.pf2e.menace-under-otari-bestiary.Actor.DBTbqI9QQRtlJwWh",
      page: 81,
      width: 481,
      height: 703,
      imageIndex: 1,
      tokenX: -86,
      tokenY: 52,
      tokenSize: 311,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc49",
      actorUuid:
        "Compendium.pf2e.menace-under-otari-bestiary.Actor.BN5Lb6IsQ9Wyu3rL",
      page: 82,
      width: 481,
      height: 703,
      tokenX: 158,
      tokenY: 73,
      tokenSize: 703,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc50",
      actorUuid:
        "Compendium.pf2e.menace-under-otari-bestiary.Actor.7w1w7VTnIWMBdFux",
      page: 82,
      width: 481,
      height: 703,
      imageIndex: 1,
      tokenX: -84,
      tokenY: 10,
      tokenSize: 423,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc51",
      actorUuid:
        "Compendium.pf2e.menace-under-otari-bestiary.Actor.5vBG8a8dnJfmVd3Y",
      page: 83,
      width: 481,
      height: 703,
      tokenX: -87,
      tokenY: 19,
      tokenSize: 423,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc52",
      actorUuid:
        "Compendium.pf2e.menace-under-otari-bestiary.Actor.Xo4IGzw28hivgMmM",
      page: 83,
      width: 481,
      height: 703,
      imageIndex: 1,
      tokenX: -83,
      tokenY: 36,
      tokenSize: 367,
      forIds: [],
    }),
  ];
  journals = [
    new AdventureImage({
      name: "journal1",
      page: 4,
      width: 998,
      height: 736,
    }),
    new AdventureImage({
      name: "journal2",
      page: 11,
      width: 425,
      height: 425,
    }),
    new AdventureImage({
      name: "journal3",
      page: 12,
      width: 998,
      height: 736,
    }),
    new AdventureImage({
      name: "journal4",
      page: 21,
      width: 998,
      height: 736,
    }),
    new AdventureImage({
      name: "journal5",
      page: 25,
      width: 450,
      height: 450,
    }),
    new AdventureImage({
      name: "journal6",
      page: 27,
      width: 547,
      height: 547,
    }),
    new AdventureImage({
      name: "journal7",
      page: 28,
      width: 998,
      height: 736,
    }),
    new AdventureImage({
      name: "journal8",
      page: 31,
      width: 998,
      height: 736,
    }),
  ];
  journalPages = [
    {
      name: "First Floor",
      pages: [
        {
          id: "NDo4MjozNDg",
        },
        {
          id: "NDo3MjoxNzE",
        },
        {
          id: "NDozMjA6MjU1",
        },
        {
          id: "NTo1NDo3MjM",
        },
        {
          id: "NTozMDI6NzIz",
        },
        {
          id: "NTozMzQ6MTM1",
        },
        {
          id: "NjoxMDE6Njk0",
        },
        {
          id: "ODoxMDE6NzE4",
        },
        {
          id: "OTo4Mzo3MTg",
        },
        {
          id: "MTA6MTAxOjM0Nw",
        },
        {
          id: "MTE6ODM6NzE5",
        },
        {
          id: "MTI6MTAxOjM0Ng",
        },
        {
          id: "MTM6ODM6NzE5",
        },
        {
          id: "MTQ6MTAxOjcxOQ",
        },
        {
          id: "MTQ6MTAxOjMyMg",
        },
        {
          id: "MTU6ODM6NDU1",
        },
        {
          id: "MTY6MTAxOjcxOQ",
        },
      ],
    },
    {
      name: "Second Floor",
      pages: [
        {
          id: "MTk6ODM6NTk5",
        },
        {
          id: "MjA6MTAxOjcxOQ",
        },
        {
          id: "MjA6MTAxOjQ3OQ",
        },
        {
          id: "MjI6MTAxOjcxOQ",
        },
        {
          id: "MjI6MzUyOjUzMQ",
        },
        {
          id: "MjM6ODM6NzE5",
        },
        {
          id: "MjQ6MTAxOjcxOQ",
        },
        {
          id: "MjY6MTAxOjcxOQ",
        },
        {
          id: "Mjg6MTAxOjM0Nw",
        },
        {
          id: "Mjk6MzMzOjIxOQ",
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
      ],
    },
  ];
  combines = [
    {
      source: "NjozNTI6NTA3",
      dest: "NjoxMDE6Njk0",
    },
    {
      source: "ODozNTI6NTMx",
      dest: "ODoxMDE6NzE4",
    },
    {
      source: "OTozMzQ6NTMx",
      dest: "OTo4Mzo3MTg",
    },
    {
      source: "MTA6MzUyOjE1OQ",
      dest: "MTA6MTAxOjM0Nw",
    },
    {
      source: "MTE6MzM0OjUzMQ",
      dest: "MTE6ODM6NzE5",
    },
    {
      source: "MTM6MzM0OjUzMQ",
      dest: "MTM6ODM6NzE5",
    },
    {
      source: "MTQ6MzUyOjUzMQ",
      dest: "MTQ6MTAxOjcxOQ",
    },
    {
      source: "MTQ6MzUyOjEzNQ",
      dest: "MTQ6MTAxOjMyMg",
    },
    {
      source: "MTY6MzUyOjUzMQ",
      dest: "MTY6MTAxOjcxOQ",
    },
    {
      source: "MTU6MzM0OjI2Nw",
      dest: "MTU6ODM6NDU1",
    },
    {
      source: "MTk6MzM0OjQxMQ",
      dest: "MTk6ODM6NTk5",
    },
    {
      source: "MjA6MzUyOjI5MQ",
      dest: "MjA6MTAxOjQ3OQ",
    },
    {
      source: "MjM6MzM0OjUzMQ",
      dest: "MjM6ODM6NzE5",
    },
    {
      source: "MjQ6MzUyOjUzMQ",
      dest: "MjQ6MTAxOjcxOQ",
    },
    {
      source: "MjY6MzUyOjUzMQ",
      dest: "MjQ6MTAxOjcxOQ",
    },
    {
      source: "MjU6MzM0OjQzNQ",
      dest: "MjQ6MTAxOjcxOQ",
    },
    {
      source: "MjU6MzExOjM1MQ",
      dest: "MjQ6MTAxOjcxOQ",
    },
    {
      source: "Mjc6MzExOjcxMQ",
      dest: "MjY6MTAxOjcxOQ",
    },
    {
      source: "Mjg6MzUyOjE1OQ",
      dest: "Mjg6MTAxOjM0Nw",
    },
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "PATHFINDER BEGINNER BOX GAME MASTER\u2019S GUIDE" &&
        t.fontId === "Taroca:12",
    );
  }
  preprocess(text) {
    for (let i = 0; i < text.length; i++) {
      text[i].fontId === "Taroca:19" && ((text[i].y += 4), (text[i].x += 4));
    }
  }
  extractDetails(text, moduleData, sectionKey) {
    this.removeText(text, 6, 238.1662, 723);
    this.removeText(text, 19, 206.464, 717.6073);
    this.changeFontId(text, 27, 138.825, 255, "GoodOT:9");
    for (let i = 0; i < text.length; i++) {
      if (text[i].fontId === "Taroca:19") {
        const t = text[i].text;
        text.splice(i, 1);
        text[i].text = `${t.trim()}. ${text[i].text.trim()}`;
      }
    }
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
  LeftTwoColumn(pageNum, top, bottom) {
    top = top ?? this.pageTop;
    bottom = bottom ?? this.pageBottom;
    return (pdf, emit) => {
      const page = this.LeftPageTwoColumn;
      (this.getAllTextInBoundingBox(
        pdf,
        pageNum,
        page.col1X1,
        page.col1X2,
        top,
        bottom,
        emit,
      ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          page.col2X1,
          page.col2X2,
          top,
          bottom,
          emit,
        ));
    };
  }
  RightTwoColumn(pageNum, top, bottom) {
    top = top ?? this.pageTop;
    bottom = bottom ?? this.pageBottom;
    return (pdf, emit) => {
      const page = this.RightPageTwoColumn;
      (this.getAllTextInBoundingBox(
        pdf,
        pageNum,
        page.col1X1,
        page.col1X2,
        top,
        bottom,
        emit,
      ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          page.col2X1,
          page.col2X2,
          top,
          bottom,
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
        page.col1X1 + 9,
        page.col1X2,
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
  LeftTwoColumnWithRightCutout(pageNum, cutoutPos, top, bottom) {
    top = top ?? this.pageTop;
    bottom = bottom ?? this.pageBottom;
    return (pdf, emit) => {
      const page = this.LeftPageTwoColumn;
      (this.getAllTextInBoundingBox(
        pdf,
        pageNum,
        page.col1X1,
        page.col1X2,
        top,
        bottom,
        emit,
      ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          page.col2X1,
          page.col2X2,
          cutoutPos,
          bottom,
          emit,
        ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          304.1,
          515,
          top,
          cutoutPos,
          emit,
          `sidebar${pageNum}`,
        ));
    };
  }
  RightTwoColumnWithRightCutout(pageNum, cutoutPos, top, bottom) {
    top = top ?? this.pageTop;
    bottom = bottom ?? this.pageBottom;
    return (pdf, emit) => {
      const page = this.RightPageTwoColumn;
      (this.getAllTextInBoundingBox(
        pdf,
        pageNum,
        page.col1X1,
        page.col1X2,
        top,
        bottom,
        emit,
      ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          page.col2X1,
          page.col2X2,
          cutoutPos,
          bottom,
          emit,
        ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          304.1,
          515,
          top,
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
