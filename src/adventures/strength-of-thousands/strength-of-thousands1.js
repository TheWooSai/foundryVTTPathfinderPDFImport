import { StrengthOfThousandsBase } from "./base.js";
import { CaptionImage } from "../../core/images.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class StrengthOfThousands1 extends StrengthOfThousandsBase {
  prefix = "strength-of-thousands-1";
  fullName = "Strength of Thousands - Kindled Magic";
  pages = [
    this.RightChapterHeadingPageLayout(5),
    this.LeftTwoColumnWithLeftCutout(6, 570),
    this.RightTwoColumnWithMap(7, 320),
    this.RightChapterHeadingPageLayout(11),
    this.LeftTwoColumn(12),
    this.RightTwoColumnWithRightCutout(13, 540),
    this.LeftTwoColumnWithMap(14, 340),
    this.RightTwoColumnWithRightCutout(15, 220),
    this.LeftTwoColumn(16),
    this.RightTwoColumn(17),
    this.LeftTwoColumn(18),
    this.RightTwoColumn(19),
    this.LeftTwoColumn(20),
    this.RightTwoColumnWithRightCutout(21, 550),
    this.LeftTwoColumn(22),
    this.RightTwoColumnWithRightCutout(23, 500),
    this.LeftTwoColumn(24),
    this.RightTwoColumn(25),
    this.LeftTwoColumn(26),
    this.RightTwoColumn(27),
    this.LeftTwoColumn(28),
    this.RightTwoColumn(29),
    this.RightChapterHeadingPageLayout(31),
    this.LeftTwoColumn(32),
    this.RightTwoColumn(33),
    this.LeftTwoColumnWithMap(34, 350),
    this.RightTwoColumnWithRightCutout(35, 330),
    this.LeftTwoColumnWithMap(36, 340),
    this.RightTwoColumn(37),
    this.LeftTwoColumn(38),
    this.RightTwoColumn(39),
    this.LeftTwoColumn(40),
    this.RightTwoColumnWithRightCutout(41, 520),
    this.LeftTwoColumn(42),
    this.RightTwoColumn(43),
    this.LeftTwoColumn(44),
    this.RightTwoColumn(45),
    this.LeftTwoColumn(46),
    this.RightTwoColumn(47),
    this.RightChapterHeadingPageLayout(49),
    this.LeftTwoColumn(50),
    this.RightTwoColumn(51),
    this.LeftTwoColumn(52),
    this.RightTwoColumn(53),
    this.LeftTwoColumn(54),
    this.RightTwoColumn(55),
    this.LeftTwoColumnWithLeftCutout(56, 520),
    this.RightTwoColumn(57),
    this.LeftTwoColumnWithMap(58, 350),
    this.RightTwoColumn(59),
    this.LeftTwoColumn(60),
    this.RightTwoColumn(61),
    this.RightChapterHeadingPageLayout(63),
    this.LeftTwoColumnWithLeftCutout(64, 560),
    this.RightTwoColumn(65),
    this.LeftTwoColumnWithLeftCutout(66, 540),
    this.RightTwoColumnWithRightCutout(67, 520),
    this.RightChapterHeadingPageLayout(69),
    this.LeftTwoColumn(70),
    this.RightTwoColumn(71),
    this.LeftTwoColumn(72),
    this.RightTwoColumn(73),
    this.RightChapterHeadingPageLayout(75),
    this.LeftTwoColumn(76),
    this.RightTwoColumn(77),
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
        name: "sot1/map1",
        priority: 0,
      },
      nameInfo: {
        x: 30.5423,
        y: 739.3101,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 1262,
      height: 1637,
      imageLeft: 0,
      imageRight: 1262,
      imageCols: 10,
      imageTop: 0,
      imageBottom: 1262,
      imageRows: 10,
      offsetX: 0,
      offsetY: 0,
      gridType: "gridless",
      gridDistance: 500,
      globalLight: true,
      detailsFile: "/sot/maps/sot1-map1.json",
    }),
    new ModuleScene({
      name: "map2",
      canonical: {
        name: "sot1/map2",
        priority: 0,
      },
      nameInfo: {
        x: 666,
        y: 54.6962,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 1259,
      height: 1637,
      imageLeft: 10,
      imageRight: 1237,
      imageCols: 39,
      imageTop: 56,
      imageBottom: 1567,
      imageRows: 48,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot1-map2.json",
      journals: [
        {
          x: 1900,
          y: 1600,
          name: "C1.",
        },
        {
          x: 1450,
          y: 2350,
          name: "C2.",
        },
        {
          x: 2e3,
          y: 2700,
          name: "C3.",
        },
        {
          x: 3300,
          y: 2550,
          name: "C4.",
        },
        {
          x: 4500,
          y: 2200,
          name: "C5.",
        },
        {
          x: 4200,
          y: 3100,
          name: "C6.",
        },
        {
          x: 2650,
          y: 2700,
          name: "C7.",
          text: "C7a",
        },
        {
          x: 3850,
          y: 2400,
          name: "C7.",
          text: "C7b",
        },
        {
          x: 1400,
          y: 3500,
          name: "C8.",
        },
        {
          x: 2050,
          y: 4150,
          name: "C9.",
        },
        {
          x: 1400,
          y: 5600,
          name: "C7.",
          text: "C7c",
        },
        {
          x: 2500,
          y: 3300,
          name: "C10.",
        },
        {
          x: 2500,
          y: 4200,
          name: "C11.",
        },
        {
          x: 2450,
          y: 4850,
          name: "C12.",
        },
        {
          x: 3250,
          y: 4150,
          name: "C13.",
        },
        {
          x: 4450,
          y: 4650,
          name: "C14.",
        },
        {
          x: 3500,
          y: 5900,
          name: "C15.",
        },
        {
          x: 4750,
          y: 5800,
          name: "C7.",
          text: "C7d",
        },
      ],
      tokens: [
        {
          id: "npc20",
          x: 1900,
          y: 1800,
        },
        {
          id: "npc20",
          x: 1900,
          y: 1900,
        },
        {
          id: "npc21",
          x: 3300,
          y: 2500,
        },
        {
          id: "npc22",
          x: 4900,
          y: 1400,
        },
        {
          id: "npc22",
          x: 5e3,
          y: 2e3,
        },
        {
          id: "npc20",
          x: 4900,
          y: 2500,
        },
        {
          id: "npc24",
          x: 4200,
          y: 3100,
        },
        {
          id: "npc23",
          x: 4100,
          y: 3e3,
        },
        {
          id: "npc20",
          x: 2100,
          y: 3900,
        },
        {
          id: "npc20",
          x: 2200,
          y: 4300,
        },
        {
          id: "npc20",
          x: 1800,
          y: 4300,
        },
        {
          id: "npc29",
          x: 3100,
          y: 4200,
        },
        {
          id: "npc28",
          x: 3e3,
          y: 4100,
        },
        {
          id: "npc22",
          x: 2300,
          y: 3200,
        },
        {
          id: "npc27",
          x: 2600,
          y: 3200,
        },
        {
          id: "npc25",
          x: 2600,
          y: 3400,
        },
        {
          id: "npc25",
          x: 2500,
          y: 3400,
        },
        {
          id: "npc25",
          x: 2400,
          y: 3400,
        },
        {
          id: "npc26",
          x: 2300,
          y: 3400,
        },
        {
          id: "npc30",
          x: 3e3,
          y: 5500,
        },
        {
          id: "npc27",
          x: 3300,
          y: 5500,
        },
        {
          id: "npc27",
          x: 3450,
          y: 5500,
        },
      ],
    }),
    new ModuleScene({
      name: "map3",
      canonical: {
        name: "sot1/map3",
        priority: 0,
      },
      nameInfo: {
        x: 101.8414,
        y: 384.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 14,
      width: 1228,
      height: 845,
      imageLeft: 8,
      imageRight: 1224,
      imageCols: 72,
      imageTop: 20,
      imageBottom: 831,
      imageRows: 48,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot1-map3.json",
      journals: [
        {
          x: 3950,
          y: 1550,
          name: "A1.",
        },
        {
          x: 5550,
          y: 2950,
          name: "A2.",
        },
        {
          x: 2850,
          y: 3150,
          name: "A3.",
        },
        {
          x: 2850,
          y: 4150,
          name: "A4.",
        },
        {
          x: 3550,
          y: 2650,
          name: "A5.",
        },
        {
          x: 3550,
          y: 3250,
          name: "A6.",
        },
        {
          x: 4650,
          y: 2550,
          name: "A7.",
        },
        {
          x: 4650,
          y: 3250,
          name: "A8.",
        },
        {
          x: 3550,
          y: 4550,
          name: "A9.",
        },
        {
          x: 4250,
          y: 4550,
          name: "A10.",
        },
        {
          x: 5050,
          y: 4550,
          name: "A11.",
        },
        {
          x: 6450,
          y: 2550,
          name: "A12.",
        },
        {
          x: 6450,
          y: 3150,
          name: "A13.",
        },
        {
          x: 6150,
          y: 4250,
          name: "A14.",
        },
        {
          x: 6150,
          y: 4850,
          name: "A14.",
        },
        {
          x: 7150,
          y: 4250,
          name: "A14.",
        },
        {
          x: 7150,
          y: 4850,
          name: "A14.",
        },
        {
          x: 7550,
          y: 3150,
          name: "A14.",
        },
        {
          x: 7550,
          y: 2550,
          name: "A14.",
        },
        {
          x: 8250,
          y: 3150,
          name: "A15.",
        },
        {
          x: 8300,
          y: 3700,
          name: "A16.",
        },
        {
          x: 8250,
          y: 4250,
          name: "A4.",
        },
      ],
      tokens: [
        {
          id: "npc1",
          x: 8400,
          y: 2900,
        },
        {
          id: "npc1",
          x: 8400,
          y: 3e3,
        },
      ],
    }),
    new ModuleScene({
      name: "map4",
      canonical: {
        name: "sot1/map4",
        priority: 0,
      },
      nameInfo: {
        x: 144,
        y: 688.334,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 20,
      width: 637,
      height: 770,
      imageLeft: 219,
      imageRight: 531,
      imageCols: 5,
      imageTop: 96,
      imageBottom: 655,
      imageRows: 9,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot1-map4.json",
      journals: [
        {
          x: 350,
          y: 450,
          name: "STORAGE BARN",
        },
      ],
      tokens: [
        {
          id: "npc4",
          x: 600,
          y: 550,
        },
        {
          id: "npc4",
          x: 500,
          y: 700,
        },
        {
          id: "npc4",
          x: 500,
          y: 1e3,
        },
        {
          id: "npc4",
          x: 600,
          y: 1300,
        },
      ],
    }),
    new ModuleScene({
      name: "map5",
      canonical: {
        name: "sot1/map5",
        priority: 0,
      },
      nameInfo: {
        x: 198,
        y: 736.3319,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 24,
      width: 622,
      height: 783,
      imageLeft: 101,
      imageRight: 571,
      imageCols: 22,
      imageTop: 116,
      imageBottom: 649,
      imageRows: 25,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot1-map5.json",
      journals: [
        {
          x: 950,
          y: 1350,
          name: "SCARLET CAP OIL",
        },
      ],
      tokens: [
        {
          id: "npc5",
          x: 2100,
          y: 2600,
        },
      ],
    }),
    new ModuleScene({
      name: "map6",
      canonical: {
        name: "sot1/map6",
        priority: 0,
      },
      nameInfo: {
        x: 182,
        y: 390.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 28,
      width: 642,
      height: 894,
      imageLeft: 36,
      imageRight: 611,
      imageCols: 17,
      imageTop: 27,
      imageBottom: 843,
      imageRows: 24,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot1-map6.json",
      journals: [],
      tokens: [
        {
          id: "npc6",
          x: 1e3,
          y: 1600,
        },
        {
          id: "npc7",
          x: 1e3,
          y: 1800,
        },
      ],
    }),
    new ModuleScene({
      name: "map7a",
      canonical: {
        name: "sot1/map7a",
        priority: 0,
      },
      nameInfo: {
        x: 62,
        y: 389.334,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 34,
      width: 1209,
      height: 878,
      imageLeft: 83,
      imageRight: 572,
      imageCols: 7,
      imageTop: 153,
      imageBottom: 712,
      imageRows: 8,
      cropLeft: 0,
      cropRight: 598,
      cropTop: 66,
      cropBottom: 878,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot1-map7a.json",
      journals: [],
      tokens: [
        {
          id: "npc47",
          x: 400,
          y: 700,
        },
      ],
    }),
    new ModuleScene({
      name: "map7b",
      canonical: {
        name: "sot1/map7b",
        priority: 0,
      },
      nameInfo: {
        x: 326.25,
        y: 388.3319,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 34,
      width: 1209,
      height: 878,
      imageLeft: 644,
      imageRight: 1182,
      imageCols: 18,
      imageTop: 71,
      imageBottom: 845,
      imageRows: 26,
      cropLeft: 617,
      cropRight: 1209,
      cropTop: 66,
      cropBottom: 878,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot1-map7b.json",
      journals: [],
      tokens: [
        {
          id: "npc14",
          x: 100,
          y: 1100,
        },
        {
          id: "npc15",
          x: 0,
          y: 1400,
        },
        {
          id: "npc14",
          x: 200,
          y: 1400,
        },
        {
          id: "npc15",
          x: 0,
          y: 1700,
        },
        {
          id: "npc15",
          x: 200,
          y: 1700,
        },
        {
          id: "npc15",
          x: 0,
          y: 1900,
        },
        {
          id: "npc16",
          x: 200,
          y: 1900,
        },
      ],
    }),
    new ModuleScene({
      name: "map8",
      canonical: {
        name: "sot1/map8",
        priority: 0,
      },
      nameInfo: {
        x: 101.8414,
        y: 384.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 36,
      width: 1222,
      height: 841,
      imageLeft: 16,
      imageRight: 1208,
      imageCols: 31,
      imageTop: 9,
      imageBottom: 816,
      imageRows: 21,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot1-map8.json",
      journals: [
        {
          x: 2400,
          y: 1150,
          name: "B1.",
        },
        {
          x: 3100,
          y: 1100,
          name: "B2.",
        },
        {
          x: 3200,
          y: 1600,
          name: "B3.",
        },
        {
          x: 3100,
          y: 2150,
          name: "B4.",
        },
        {
          x: 2400,
          y: 2400,
          name: "B5.",
        },
        {
          x: 1700,
          y: 2100,
          name: "B6.",
        },
        {
          x: 1600,
          y: 1600,
          name: "B7.",
        },
        {
          x: 1700,
          y: 1100,
          name: "B8.",
        },
      ],
      tokens: [
        {
          id: "npc9",
          x: 2200,
          y: 1e3,
        },
        {
          id: "npc9",
          x: 2550,
          y: 1e3,
        },
        {
          id: "npc9",
          x: 2550,
          y: 1100,
        },
        {
          id: "npc9",
          x: 2200,
          y: 1100,
        },
        {
          id: "npc10",
          x: 3200,
          y: 1600,
        },
        {
          id: "npc11",
          x: 3100,
          y: 1500,
        },
        {
          id: "npc11",
          x: 2400,
          y: 2400,
        },
        {
          id: "npc11",
          x: 2500,
          y: 2400,
        },
        {
          id: "npc46",
          x: 1700,
          y: 1900,
        },
        {
          id: "npc46",
          x: 1700,
          y: 2200,
        },
        {
          id: "npc46",
          x: 1550,
          y: 2050,
        },
      ],
    }),
    new ModuleScene({
      name: "map9",
      canonical: {
        name: "sot1/map9",
        priority: 0,
      },
      nameInfo: {
        x: 106,
        y: 400.3319,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 46,
      width: 601,
      height: 787,
      imageLeft: 70,
      imageRight: 549,
      imageCols: 21,
      imageTop: 114,
      imageBottom: 708,
      imageRows: 26,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot1-map9.json",
      journals: [],
      tokens: [
        {
          id: "npc17",
          x: 3e3,
          y: 2500,
        },
        {
          id: "npc18",
          x: 3e3,
          y: 2600,
        },
        {
          id: "npc18",
          x: 3100,
          y: 2600,
        },
        {
          id: "npc19",
          x: 3e3,
          y: 2700,
        },
        {
          id: "npc19",
          x: 3100,
          y: 2700,
        },
      ],
    }),
    new ModuleScene({
      name: "map10",
      canonical: {
        name: "sot1/map10",
        priority: 0,
      },
      nameInfo: {
        x: 101.8414,
        y: 384.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 58,
      width: 1221,
      height: 864,
      imageLeft: 8,
      imageRight: 1206,
      imageCols: 38,
      imageTop: 46,
      imageBottom: 836,
      imageRows: 25,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot1-map10.json",
      journals: [],
      tokens: [
        {
          id: "npc31",
          x: 4300,
          y: 700,
        },
        {
          id: "npc31",
          x: 4e3,
          y: 700,
        },
        {
          id: "npc31",
          x: 3700,
          y: 700,
        },
        {
          id: "npc32",
          x: 3600,
          y: 1900,
        },
        {
          id: "npc33",
          x: 4e3,
          y: 1800,
        },
        {
          id: "npc33",
          x: 4e3,
          y: 1900,
        },
        {
          id: "npc33",
          x: 4e3,
          y: 2e3,
        },
      ],
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.TAUFXoZgSrZwQsor",
      uniqueKey: "sot1/npc1",
      page: 17,
      width: 646,
      height: 433,
      tokenX: 102,
      tokenY: 216,
      tokenSize: 842,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc2",
      name: {
        page: 18,
        x: 290.3855,
        y: 457.2536,
      },
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      page: 18,
      width: 504,
      height: 504,
      tokenX: 67,
      tokenY: 69,
      tokenSize: 616,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc3",
      name: {
        page: 19,
        x: 251.9355,
        y: 444.8161,
      },
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      page: 19,
      width: 527,
      height: 527,
      tokenX: 29,
      tokenY: 68,
      tokenSize: 611,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc4",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.gOiaU4B29galdmu2",
      uniqueKey:
        "Compendium.pf2e.pathfinder-monster-core.Actor.aeOzCBpwnUVcpqxI",
      label: "P",
      forIds: ["MjI6OTk6MTU5"],
    }),
    new ModuleNpc({
      id: "npc5",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.QkT3Yr6mdnhVNJE8",
      page: 25,
      width: 580,
      height: 895,
      tokenX: -64,
      tokenY: 65,
      tokenSize: 615,
      forIds: ["MjQ6OTk6Mjkx"],
    }),
    new ModuleNpc({
      id: "npc6",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.zgd9SvS7CyWTHlBs",
      page: 89,
      width: 850,
      height: 1006,
      tokenX: -153,
      tokenY: -16,
      tokenSize: 474,
      forIds: ["ODk6Njg6MzE1", "Mjk6Mjk1OjU0Mw"],
    }),
    new ModuleNpc({
      id: "npc7",
      name: {
        page: 29,
        x: 294.75,
        y: 495,
      },
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.BbIyNJDPkGKLK0Rt",
      label: "H",
      forIds: ["Mjk6Mjk1OjQ5NQ"],
    }),
    new ModuleNpc({
      id: "npc8",
      name: {
        page: 32,
        x: 285.2455,
        y: 463.2536,
      },
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.EuDz8wgZY3nxyBTr",
      page: 32,
      width: 517,
      height: 517,
      tokenX: 39,
      tokenY: 101,
      tokenSize: 601,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc9",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.91gGjbogGut3S3pg",
      page: 84,
      width: 861,
      height: 872,
      tokenX: -257,
      tokenY: -59,
      tokenSize: 424,
      forIds: ["ODQ6MjUxOjQzNQ", "Mzc6Njg6MzUx"],
    }),
    new ModuleNpc({
      id: "npc10",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.rSCb5qmvljAHZ65d",
      page: 38,
      width: 819,
      height: 945,
      tokenX: -13,
      tokenY: -319,
      tokenSize: 693,
      forIds: ["ODY6MjUxOjU1NQ", "Mzc6Mjk1OjIxOQ"],
    }),
    new ModuleNpc({
      id: "npc11",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.z5hb3oj58QKMfGPk",
      page: 86,
      width: 840,
      height: 875,
      tokenX: 64,
      tokenY: -3,
      tokenSize: 931,
      forIds: ["ODY6MjU5OjMwMw", "Mzc6Mjk1OjE3MQ", "Mzg6MzI2OjU2Nw"],
    }),
    new ModuleNpc({
      id: "npc12",
      name: {
        page: 40,
        x: 288.0252,
        y: 475.2536,
      },
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.EuDz8wgZY3nxyBTr",
      page: 40,
      width: 459,
      height: 459,
      tokenX: 48,
      tokenY: 116,
      tokenSize: 599,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc13",
      name: {
        page: 41,
        x: 253.5754,
        y: 262.3786,
      },
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.ko19XnS66DM8Pjr9",
      page: 41,
      width: 479,
      height: 479,
      tokenX: 34,
      tokenY: 91,
      tokenSize: 563,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc14",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.rGZsMD3loampnRRo",
      page: 42,
      width: 795,
      height: 1137,
      tokenX: -202,
      tokenY: -8,
      tokenSize: 437,
      forIds: ["NDI6MzQ5OjI0Mw", "NDM6Njg6NDEx"],
    }),
    new ModuleNpc({
      id: "npc15",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.NufNRseaGG62SrjR",
      page: 43,
      width: 823,
      height: 1098,
      tokenX: -159,
      tokenY: 2,
      tokenSize: 370,
      forIds: ["NDM6Njg6MzYz", "NDQ6MzI2OjYwMw"],
    }),
    new ModuleNpc({
      id: "npc16",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.LZTr8YH6JGRGc8Fz",
      page: 44,
      width: 741,
      height: 1188,
      tokenX: -210,
      tokenY: -19,
      tokenSize: 432,
      forIds: ["NDM6Mjk1OjYwMw"],
    }),
    new ModuleNpc({
      id: "npc17",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.TQyF26t10xdoqPWp",
      page: 47,
      width: 820,
      height: 738,
      tokenX: 40,
      tokenY: 117,
      tokenSize: 932,
      forIds: ["NDc6Mjk1OjY5OQ"],
    }),
    new ModuleNpc({
      id: "npc18",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.E2XL2egIA3QaSDBM",
      label: "FB",
      forIds: ["NDc6Mjk1OjYzOQ"],
    }),
    new ModuleNpc({
      id: "npc19",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.NRBgcu0LkXXp8mtp",
      label: "GC",
      forIds: ["NDc6Mjk1OjU5MQ"],
    }),
    new ModuleNpc({
      id: "npc20",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.U6LMDSZqlzAap72K",
      page: 51,
      width: 712,
      height: 737,
      tokenX: 45,
      tokenY: 144,
      tokenSize: 821,
      forIds: [
        "ODI6MzM5OjIwNw",
        "NTM6Njg6MzI3",
        "NTE6Njg6OTk",
        "NTQ6MzI2OjM5OQ",
      ],
    }),
    new ModuleNpc({
      id: "npc21",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.PHpFRuT0JuxL8xbj",
      label: "GC",
      forIds: ["NTI6MzI2OjQ4Mw"],
    }),
    new ModuleNpc({
      id: "npc22",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.u9QNYbml4fF3htyZ",
      page: 85,
      width: 817,
      height: 711,
      tokenX: -12,
      tokenY: 183,
      tokenSize: 845,
      forIds: ["ODU6Njg6NDk1", "NTU6Njg6MTQ3", "NTM6Njg6Mzc1"],
    }),
    new ModuleNpc({
      id: "npc23",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.V6OBYa51VcehPj22",
      label: "GO",
      forIds: ["NTM6Mjk1OjU3OQ"],
    }),
    new ModuleNpc({
      id: "npc24",
      actorUuid: "Compendium.pf2e.hazards.Actor.Q8bXKgDm8eguqThB",
      label: "BM",
      forIds: ["NTM6Njg6OTk"],
    }),
    new ModuleNpc({
      id: "npc25",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.kkAllKGsVCZVGFpf",
      label: "MF",
      forIds: ["NTU6Mjk1OjY5OQ"],
    }),
    new ModuleNpc({
      id: "npc26",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.c3vJuzMqHptfpi1d",
      page: 55,
      width: 498,
      height: 800,
      tokenX: 185,
      tokenY: 83,
      tokenSize: 856,
      forIds: ["NTU6Mjk1OjY1MQ"],
    }),
    new ModuleNpc({
      id: "npc27",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.lFDYJOIp2knQ0IRY",
      label: "J",
      forIds: ["NTU6Njg6OTk", "NTk6Njg6NDk1"],
    }),
    new ModuleNpc({
      id: "npc28",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.FlnxHvFneYttMJ7y",
      page: 57,
      width: 863,
      height: 773,
      tokenX: -242,
      tokenY: -83,
      tokenSize: 639,
      forIds: ["NTc6Njg6Njk5"],
    }),
    new ModuleNpc({
      id: "npc29",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.CUkPnLXw1H0e5NMe",
      page: 83,
      width: 824,
      height: 1069,
      tokenX: 40,
      tokenY: 69,
      tokenSize: 901,
      forIds: ["ODM6Njg6MzM5", "NTc6Njg6MzI3"],
    }),
    new ModuleNpc({
      id: "npc30",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.caOhluoshxMJwGoE",
      page: 91,
      width: 901,
      height: 1297,
      tokenX: -341,
      tokenY: -16,
      tokenSize: 373,
      forIds: ["OTE6Njg6NTMx", "NTk6Njg6NTQz"],
    }),
    new ModuleNpc({
      id: "npc31",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.gWgMg7cARqOe82O6",
      label: "G",
      forIds: ["NjA6MzI2OjE5NQ"],
    }),
    new ModuleNpc({
      id: "npc32",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.LA5VHAp0urzMEdsH",
      page: 93,
      width: 841,
      height: 1226,
      tokenX: -294,
      tokenY: 11,
      tokenSize: 330,
      forIds: ["OTM6Njg6MjE5", "NjA6MzI2OjE0Nw"],
    }),
    new ModuleNpc({
      id: "npc33",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.zy69GWkQ4xS5y5O3",
      page: 61,
      width: 761,
      height: 1175,
      tokenX: -132,
      tokenY: 74,
      tokenSize: 391,
      forIds: ["ODA6MjUxOjU5MQ", "NjA6MzI2Ojk5"],
    }),
    new ModuleNpc({
      id: "npc34",
      name: {
        page: 69,
        x: 261.1205,
        y: 287.0536,
      },
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      page: 69,
      width: 530,
      height: 530,
      tokenX: 11,
      tokenY: 60,
      tokenSize: 530,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc35",
      name: {
        page: 70,
        x: 304.4453,
        y: 405.9401,
      },
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      page: 70,
      width: 552,
      height: 552,
      tokenX: 29,
      tokenY: 75,
      tokenSize: 552,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc36",
      name: {
        page: 70,
        x: 295.4113,
        y: 130.8161,
      },
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      page: 70,
      width: 500,
      height: 500,
      tokenX: -25,
      tokenY: 65,
      tokenSize: 444,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc37",
      name: {
        page: 71,
        x: 250.8705,
        y: 432.8161,
      },
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      page: 71,
      width: 475,
      height: 475,
      tokenX: 62,
      tokenY: 86,
      tokenSize: 559,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc38",
      name: {
        page: 71,
        x: 254.5306,
        y: 129.8536,
      },
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      page: 71,
      width: 530,
      height: 530,
      tokenX: 4,
      tokenY: 66,
      tokenSize: 530,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc39",
      name: {
        page: 72,
        x: 281.2354,
        y: 432.5281,
      },
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      page: 72,
      width: 539,
      height: 539,
      tokenX: 35,
      tokenY: 71,
      tokenSize: 539,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc40",
      name: {
        page: 72,
        x: 303.2052,
        y: 144.8161,
      },
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      page: 72,
      width: 501,
      height: 501,
      tokenX: -1,
      tokenY: 65,
      tokenSize: 501,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc41",
      name: {
        page: 73,
        x: 250.9503,
        y: 469.3786,
      },
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      page: 73,
      width: 488,
      height: 488,
      tokenX: 21,
      tokenY: 49,
      tokenSize: 544,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc42",
      name: {
        page: 73,
        x: 205.9061,
        y: 166.5416,
      },
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      page: 73,
      width: 523,
      height: 523,
      tokenX: -1,
      tokenY: 54,
      tokenSize: 523,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc43",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.no9k3lpGXgF3uzUV",
      page: 80,
      width: 860,
      height: 861,
      tokenX: -178,
      tokenY: 34,
      tokenSize: 357,
      forIds: ["ODA6MzQwOjE5NQ"],
    }),
    new ModuleNpc({
      id: "npc44",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.0Gnj7jlSf4WLY0lA",
      page: 81,
      width: 754,
      height: 723,
      tokenX: -94,
      tokenY: 111,
      tokenSize: 446,
      forIds: ["ODE6Njg6NDk1"],
    }),
    new ModuleNpc({
      id: "npc45",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.pJiD1DAiCFdVvnys",
      page: 82,
      width: 743,
      height: 1e3,
      tokenX: -46,
      tokenY: 54,
      tokenSize: 804,
      forIds: ["ODI6MjUxOjQ5NQ"],
    }),
    new ModuleNpc({
      id: "npc46",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.TAUFXoZgSrZwQsor",
      page: 87,
      width: 800,
      height: 800,
      tokenX: 42,
      tokenY: 106,
      tokenSize: 884,
      forIds: ["ODc6Njg6NDQ3", "MTc6Njg6Mzc1", "Mzg6MzM0Ojk5"],
    }),
    new ModuleNpc({
      id: "npc47",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.sldauWtSyK4JEiRl",
      label: "CS",
      forIds: ["MzQ6MzI2Ojk5"],
    }),
  ];
  journals = [
    new CaptionImage({
      name: "journal1",
      page: 4,
      width: 1259,
      height: 1636,
    }),
    new CaptionImage({
      name: "journal2",
      page: 6,
      width: 425,
      height: 425,
    }),
    new CaptionImage({
      name: "journal3",
      page: 8,
      width: 1259,
      height: 1636,
    }),
    new CaptionImage({
      name: "journal4",
      page: 62,
      width: 1259,
      height: 1636,
    }),
    new CaptionImage({
      name: "journal5",
      page: 66,
      width: 438,
      height: 584,
    }),
    new CaptionImage({
      name: "journal6",
      page: 67,
      width: 740,
      height: 987,
    }),
    new CaptionImage({
      name: "journal7",
      page: 68,
      width: 1259,
      height: 1636,
    }),
    new CaptionImage({
      name: "journal8",
      page: 74,
      width: 1262,
      height: 1637,
    }),
    new CaptionImage({
      name: "journal9",
      page: 75,
      width: 470,
      height: 437,
    }),
    new CaptionImage({
      name: "journal10",
      page: 76,
      width: 419,
      height: 512,
    }),
    new CaptionImage({
      name: "journal11",
      page: 76,
      width: 420,
      height: 421,
    }),
    new CaptionImage({
      name: "journal12",
      page: 78,
      width: 441,
      height: 371,
    }),
    new CaptionImage({
      name: "journal13",
      page: 79,
      width: 868,
      height: 1157,
    }),
  ];
  journalPages = [
    {
      name: "Introduction",
      pages: [
        {
          id: "NToxNzQ6NjY4",
        },
        {
          id: "NTo2ODozODc",
        },
        {
          id: "NToyOTU6NTQz",
        },
        {
          id: "NToyOTU6MjA3",
        },
        {
          id: "NToyOTU6MTcx",
        },
        {
          id: "Njo5OTo0OTU",
        },
        {
          id: "Njo5OTozMTU",
        },
        {
          id: "Njo5OToxNDc",
        },
        {
          id: "NjozMjY6NTU1",
        },
        {
          id: "NjozOTg6MzI3",
        },
        {
          id: "NjozMjY6MTU5",
        },
      ],
    },
    {
      name: "Chapter 1",
      pages: [
        {
          id: "MTE6MjAxOjY4Mg",
        },
        {
          id: "MTE6Njg6MTcx",
        },
        {
          id: "MTE6MzcxOjU0Mw",
        },
        {
          id: "MTE6MzcxOjI3OQ",
        },
        {
          id: "MTI6OTk6NjUx",
        },
        {
          id: "MTI6OTk6NDIz",
        },
        {
          id: "MTI6MzI2OjEyMw",
        },
        {
          id: "MTM6Njg6MzE1",
        },
        {
          id: "MTQ6OTk6MzM5",
        },
        {
          id: "MTU6Njg6MzUx",
        },
        {
          id: "MTU6Njg6MTM1",
        },
        {
          id: "MTU6Mjk1OjEyMw",
        },
        {
          id: "MTY6OTk6Njk5",
        },
        {
          id: "MTY6OTk6NDcx",
        },
        {
          id: "MTY6OTk6NDEx",
        },
        {
          id: "MTY6OTk6MzI3",
        },
        {
          id: "MTY6OTk6MjMx",
        },
        {
          id: "MTY6OTk6MTU5",
        },
        {
          id: "MTY6MzI2OjY5OQ",
        },
        {
          id: "MTY6MzI2OjU3OQ",
        },
        {
          id: "MTY6MzI2OjQ3MQ",
        },
        {
          id: "MTY6MzI2OjM1MQ",
        },
        {
          id: "MTY6MzI2OjIzMQ",
        },
        {
          id: "MTY6MzI2OjEyMw",
        },
        {
          id: "MTc6Njg6NjYz",
        },
        {
          id: "MTc6Njg6MjY3",
        },
        {
          id: "MTc6Mjk1OjU2Nw",
        },
        {
          id: "MTc6Mjk1OjMyNw",
        },
        {
          id: "MTg6OTk6Njk5",
        },
        {
          id: "MTg6OTk6NTA3",
        },
        {
          id: "MTg6OTk6MTEx",
        },
        {
          id: "MTg6MzI2OjIxOQ",
        },
        {
          id: "MTk6Njg6NjAz",
        },
        {
          id: "MTk6Mjk1OjM2Mw",
        },
        {
          id: "MjE6Njg6Njk5",
        },
        {
          id: "MjE6Mjk1OjM4Nw",
        },
        {
          id: "MjI6MzI2OjU3OQ",
        },
        {
          id: "MjM6Njg6Njk5",
        },
        {
          id: "MjM6Mjk1OjQ4Mw",
        },
        {
          id: "MjQ6MzI2OjI1NQ",
        },
        {
          id: "MjU6Njg6NDgz",
        },
        {
          id: "MjY6OTk6NTY3",
        },
        {
          id: "MjY6MzI2OjYyNw",
        },
        {
          id: "Mjg6OTk6MjMx",
        },
        {
          id: "Mjk6Njg6Njk5",
        },
      ],
    },
    {
      name: "Chapter 2",
      pages: [
        {
          id: "MzE6MTk2OjY4Mg",
        },
        {
          id: "MzE6Njg6MjE5",
        },
        {
          id: "MzE6Njg6MTU5",
        },
        {
          id: "MzE6MzcxOjU0Mw",
        },
        {
          id: "MzE6MzcxOjMwMw",
        },
        {
          id: "MzI6MzI2OjEyMw",
        },
        {
          id: "MzM6Njg6NDgz",
        },
        {
          id: "MzM6Mjk1OjU5MQ",
        },
        {
          id: "MzQ6OTk6MzM5",
        },
        {
          id: "MzU6Njg6NjUx",
        },
        {
          id: "MzU6Njg6NDQ3",
        },
        {
          id: "MzY6MzI2OjIxOQ",
        },
        {
          id: "MzY6MzI2OjExMQ",
        },
        {
          id: "Mzc6Njg6MjA3",
        },
        {
          id: "Mzc6Mjk1OjUwNw",
        },
        {
          id: "Mzg6OTk6Njk5",
        },
        {
          id: "Mzg6OTk6NDcx",
        },
        {
          id: "Mzg6MzI2OjUxOQ",
        },
        {
          id: "Mzk6Njg6NDQ3",
        },
        {
          id: "Mzk6Njg6MTcx",
        },
        {
          id: "Mzk6Mjk1OjY5OQ",
        },
        {
          id: "NDA6MzI2OjIxOQ",
        },
        {
          id: "NDE6Mzg1OjMxNQ",
        },
        {
          id: "NDI6MzI2OjY5OQ",
        },
        {
          id: "NDI6MzU1OjQyMw",
        },
        {
          id: "NDM6Njg6NTY3",
        },
        {
          id: "NDM6Njg6MTM1",
        },
        {
          id: "NDQ6MzI2OjQ0Nw",
        },
        {
          id: "NDQ6MzI2OjMwMw",
        },
        {
          id: "NDU6Njg6NjUx",
        },
        {
          id: "NDU6Njg6NDQ3",
        },
        {
          id: "NDU6Njg6Mjc5",
        },
        {
          id: "NDU6Mjk1OjY5OQ",
        },
        {
          id: "NDU6Mjk1OjQ3MQ",
        },
        {
          id: "NDY6OTk6Mjkx",
        },
        {
          id: "NDY6MzI2OjY5OQ",
        },
      ],
    },
    {
      name: "Chapter 3",
      pages: [
        {
          id: "NDk6MTk1OjY4MQ",
        },
        {
          id: "NDk6MzcxOjU0Mw",
        },
        {
          id: "NDk6MzcxOjI1NQ",
        },
        {
          id: "NTA6OTk6MjQz",
        },
        {
          id: "NTA6MzI2OjUxOQ",
        },
        {
          id: "NTE6Njg6Njk5",
        },
        {
          id: "NTI6OTk6Njk5",
        },
        {
          id: "NTI6OTk6NTU1",
        },
        {
          id: "NTI6OTk6MjU1",
        },
        {
          id: "NTI6MzI2OjE1OQ",
        },
        {
          id: "NTM6Njg6Mjc5",
        },
        {
          id: "NTM6Mjk1OjUzMQ",
        },
        {
          id: "NTM6Mjk1OjExMQ",
        },
        {
          id: "NTQ6OTk6MTEx",
        },
        {
          id: "NTQ6MzI2OjM1MQ",
        },
        {
          id: "NTY6OTk6MzM5",
        },
        {
          id: "NTY6OTk6MTIz",
        },
        {
          id: "NTY6MzI2OjU5MQ",
        },
        {
          id: "NTc6Njg6MjY3",
        },
        {
          id: "NTg6OTk6MzM5",
        },
        {
          id: "NTk6Mjk1OjQ3MQ",
        },
        {
          id: "NTk6Mjk1OjE4Mw",
        },
        {
          id: "NjE6Njg6NjE1",
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
          id: "NDE6MzY2OjU0Mw",
        },
      ],
    },
    {
      name: "Back Matter",
      pages: [
        {
          id: "NjM6MTQ0OjY2OA",
        },
        {
          id: "NjM6Njg6MTEx",
        },
        {
          id: "NjQ6OTk6MzM5",
        },
        {
          id: "NjQ6OTk6MjU1",
        },
        {
          id: "NjQ6MzI2OjU5MQ",
        },
        {
          id: "NjU6Mjk1OjI5MQ",
        },
        {
          id: "NjU6Mjk1OjEyMw",
        },
        {
          id: "NjY6OTk6NTMx",
        },
        {
          id: "NjY6OTk6NDIz",
        },
        {
          id: "NjY6OTk6MjQz",
        },
        {
          id: "NjY6MzI2OjY5OQ",
        },
        {
          id: "NjY6MzI2OjU2Nw",
        },
        {
          id: "NjY6Mzk1OjM2Mw",
        },
        {
          id: "NjY6MzI2OjExMQ",
        },
        {
          id: "Njc6Njg6NjUx",
        },
        {
          id: "Njc6Njg6NTY3",
        },
        {
          id: "Njk6MTIxOjY2OA",
        },
        {
          id: "Njk6Njg6MTU5",
        },
        {
          id: "NzA6OTk6Njk5",
        },
        {
          id: "NzA6MzI2OjY5OQ",
        },
        {
          id: "NzE6Njg6Njk5",
        },
        {
          id: "NzE6Mjk1OjY5OQ",
        },
        {
          id: "NzI6OTk6Njk5",
        },
        {
          id: "NzI6MzI2OjY5OQ",
        },
        {
          id: "NzM6Njg6Njk5",
        },
        {
          id: "NzM6Mjk1OjY5OQ",
        },
        {
          id: "NzU6MTQ5OjY2OA",
        },
        {
          id: "NzU6Njg6Mjkx",
        },
        {
          id: "Nzc6Njg6Mjc5",
        },
        {
          id: "Nzc6Njg6MTQ3",
        },
        {
          id: "Nzc6Mjk1OjQ5NQ",
        },
        {
          id: "Nzc6Mjk1OjE1OQ",
        },
        {
          id: "Nzg6OTk6Mzg3",
        },
        {
          id: "Nzg6OTk6MzM5",
        },
        {
          id: "Nzg6MzI2OjY5OQ",
        },
        {
          id: "Nzg6MzI2OjQzNQ",
        },
        {
          id: "Nzg6MzI2OjEyMw",
        },
        {
          id: "Nzk6Njg6NDM1",
        },
        {
          id: "Nzk6Njg6MTcx",
        },
        {
          id: "ODA6MjUxOjY4Nw",
        },
        {
          id: "ODA6MjUxOjYyNw",
        },
        {
          id: "ODA6MzE0OjI0Mw",
        },
        {
          id: "ODE6Njg6NTMx",
        },
        {
          id: "ODI6MjUxOjY4Nw",
        },
        {
          id: "ODI6MjUxOjU5MQ",
        },
        {
          id: "ODI6MzIyOjMxNQ",
        },
        {
          id: "ODM6Njg6Njg3",
        },
        {
          id: "ODQ6MjUxOjY4Nw",
        },
        {
          id: "ODQ6MjUxOjU2Nw",
        },
        {
          id: "ODU6Njg6NjUx",
        },
        {
          id: "ODY6MjUxOjY4Nw",
        },
        {
          id: "ODY6MjUxOjYxNQ",
        },
        {
          id: "ODY6Mjg5OjM3NQ",
        },
        {
          id: "ODc6Njg6Njg3",
        },
        {
          id: "ODg6MjA0OjY2NA",
        },
        {
          id: "ODk6Njg6NjUx",
        },
        {
          id: "OTA6MTU5OjY2NA",
        },
        {
          id: "OTA6MzI2OjIxOQ",
        },
        {
          id: "OTI6MTkxOjY2NA",
        },
        {
          id: "OTM6Njg6NTE5",
        },
        {
          id: "NjoxMTU6Njk5",
        },
        {
          id: "MTM6MzExOjY5OQ",
        },
        {
          id: "MTU6MzExOjY5OQ",
        },
        {
          id: "MjE6MzExOjY5OQ",
        },
        {
          id: "MjM6MzExOjY5OQ",
        },
        {
          id: "MzU6MzExOjY5OQ",
        },
        {
          id: "NTY6MTE1OjY5OQ",
        },
        {
          id: "NjQ6MTE1OjY5OQ",
        },
        {
          id: "NjY6MTE1OjY5OQ",
        },
        {
          id: "Njc6MzExOjY5OQ",
        },
        {
          id: "ODA6MTc2OjY2Mw",
        },
        {
          id: "ODE6MzcxOjY2Mw",
        },
        {
          id: "ODI6MTgzOjY2Mw",
        },
        {
          id: "ODM6MzcxOjY2Mw",
        },
        {
          id: "ODQ6MTU4OjY2Mw",
        },
        {
          id: "ODU6MzcxOjY2Mw",
        },
        {
          id: "ODY6MTU2OjY2Mw",
        },
        {
          id: "ODc6MzcxOjY2Mw",
        },
      ],
    },
  ];
  combines = [];
  detect(pdf) {
    return (
      pdf.textDetails.some(
        (t) => t.text.trim() === "Kindled" && t.fontId === "Gin-Regular:40",
      ) &&
      !pdf.textDetails.some(
        (t) =>
          t.text.trim() === "INTERACTIVE MAPS" && t.fontName === "Dax-Bold",
      )
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    this.markStartOfLine(text, 42, 343.25, 219);
    this.markStartOfLine(text, 42, 340.25, 207);
    this.markStartOfLine(text, 42, 338.25, 195);
    this.markStartOfLine(text, 42, 333.25, 159);
    this.markStartOfLine(text, 42, 332.25, 147);
    this.markStartOfLine(text, 69, 328.75, 507);
    this.markStartOfLine(text, 69, 338.75, 483);
    this.markStartOfLine(text, 70, 369.25, 639);
    this.markStartOfLine(text, 70, 371.25, 627);
    this.markStartOfLine(text, 70, 373.25, 603);
    this.markStartOfLine(text, 70, 372.25, 567);
    this.markStartOfLine(text, 70, 364.2499, 531);
    this.markStartOfLine(text, 70, 378.2499, 507);
    this.markStartOfLine(text, 71, 328.75, 627);
    this.markStartOfLine(text, 71, 338.75, 615);
    this.markStartOfLine(text, 71, 351.75, 591);
    this.markStartOfLine(text, 71, 354.75, 567);
    this.markStartOfLine(text, 71, 344.75, 531);
    this.markStartOfLine(text, 72, 353.25, 639);
    this.markStartOfLine(text, 72, 361.25, 627);
    this.markStartOfLine(text, 72, 365.25, 603);
    this.markStartOfLine(text, 72, 367.25, 579);
    this.markStartOfLine(text, 72, 348.25, 555);
    this.markStartOfLine(text, 72, 365.2499, 531);
    this.markStartOfLine(text, 73, 312.75, 663);
    this.markStartOfLine(text, 73, 343.75, 627);
    this.markStartOfLine(text, 73, 348.75, 615);
    this.markStartOfLine(text, 73, 344.75, 591);
    this.markStartOfLine(text, 73, 345.75, 579);
    this.markStartOfLine(text, 73, 330.75, 555);
    this.markStartOfLine(text, 73, 343.75, 531);
    this.markStartOfLine(text, 75, 374.75, 495);
    this.markStartOfLine(text, 75, 369.75, 435);
    this.markStartOfLine(text, 75, 369.75, 423);
    this.markStartOfLine(text, 75, 354.75, 387);
    this.markStartOfLine(text, 76, 381.25, 615);
    this.markStartOfLine(text, 76, 365.25, 507);
    this.markStartOfLine(text, 76, 368.25, 495);
    this.markStartOfLine(text, 76, 364.25, 255);
    this.markStartOfLine(text, 80, 282.5001, 387);
    this.markStartOfLine(text, 80, 297.5001, 351);
    this.markStartOfLine(text, 80, 291.5001, 291);
    this.markStartOfLine(text, 80, 350.5001, 171);
    this.markStartOfLine(text, 80, 356.5001, 159);
    this.markStartOfLine(text, 80, 363.5001, 147);
    this.markStartOfLine(text, 80, 379.5001, 111);
    this.markStartOfLine(text, 80, 385.5001, 99);
    this.markStartOfLine(text, 80, 394.5001, 87);
    this.markStartOfLine(text, 80, 403.5001, 75);
    this.markStartOfLine(text, 82, 286.5, 471);
    this.markStartOfLine(text, 82, 295.5, 459);
    this.markStartOfLine(text, 82, 308.5, 447);
    this.markStartOfLine(text, 82, 320.5, 435);
    this.markStartOfLine(text, 82, 320.5, 423);
    this.markStartOfLine(text, 82, 320.5, 411);
    this.markStartOfLine(text, 82, 322.5, 387);
    this.markStartOfLine(text, 82, 323.5, 375);
    this.markStartOfLine(text, 82, 323.5, 351);
    this.markStartOfLine(text, 82, 341.5, 183);
    this.markStartOfLine(text, 82, 329.5, 159);
    this.markStartOfLine(text, 82, 348.5, 147);
    this.markStartOfLine(text, 82, 348.5, 135);
    this.markStartOfLine(text, 82, 329.5, 123);
    this.markStartOfLine(text, 82, 332.5, 111);
    this.markStartOfLine(text, 82, 332.5, 99);
    this.markStartOfLine(text, 82, 329.5, 87);
    this.markStartOfLine(text, 82, 326.5, 75);
    this.markStartOfLine(text, 84, 263.5, 351);
    this.markStartOfLine(text, 84, 264.4999, 339);
    this.markStartOfLine(text, 84, 265.4999, 327);
    this.markStartOfLine(text, 84, 267.4999, 303);
    this.markStartOfLine(text, 84, 339.4999, 279);
    this.markStartOfLine(text, 84, 349.4999, 171);
    this.markStartOfLine(text, 84, 372.4999, 87);
    this.markStartOfLine(text, 86, 330.4999, 279);
    this.markStartOfLine(text, 86, 356.4999, 267);
    this.markStartOfLine(text, 86, 375.4999, 255);
    this.markStartOfLine(text, 86, 382.4999, 243);
    this.markStartOfLine(text, 86, 382.4999, 231);
    this.markStartOfLine(text, 86, 374.4999, 219);
    this.markStartOfLine(text, 86, 395.4999, 147);
    this.markStartOfLine(text, 86, 391.4999, 135);
    this.markStartOfLine(text, 86, 372.4999, 111);
    this.removeText(text, 59, 375.5565, 183);
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
