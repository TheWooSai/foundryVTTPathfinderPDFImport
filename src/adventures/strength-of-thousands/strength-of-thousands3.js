import { StrengthOfThousandsBase } from "./base.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class StrengthOfThousands3 extends StrengthOfThousandsBase {
  prefix = "strength-of-thousands-3";
  fullName = "Strength of Thousands - Hurricane's Howl";
  pages = [
    this.RightSingleColumnChapterHeadingPageLayout(7),
    this.LeftTwoColumn(8),
    this.RightTwoColumn(9),
    this.LeftTwoColumnWithMap(10, 340),
    this.RightTwoColumn(11),
    this.LeftTwoColumn(12),
    this.RightTwoColumn(13),
    this.LeftTwoColumn(14),
    this.RightTwoColumn(15),
    this.LeftTwoColumn(16),
    this.RightTwoColumnWithRightCutout(17, 560),
    this.RightTwoColumn(19),
    this.LeftTwoColumn(20),
    this.RightTwoColumn(21),
    this.LeftTwoColumn(22),
    this.RightTwoColumn(23),
    this.LeftTwoColumn(24),
    this.RightTwoColumn(25),
    this.RightSingleColumnChapterHeadingPageLayout(27),
    this.LeftTwoColumnWithMap(28, 340),
    this.RightTwoColumn(29),
    this.LeftTwoColumn(30),
    this.RightTwoColumn(31),
    this.LeftTwoColumn(32),
    this.RightTwoColumn(33),
    this.LeftTwoColumnWithMap(34, 340),
    this.RightTwoColumn(35),
    this.LeftTwoColumn(36),
    this.RightTwoColumn(37),
    this.LeftTwoColumn(38),
    this.RightTwoColumn(39),
    this.RightSingleColumnChapterHeadingPageLayout(41),
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
    this.LeftTwoColumn(52),
    this.RightTwoColumn(53),
    this.RightSingleColumnChapterHeadingPageLayout(55),
    this.LeftTwoColumn(56),
    this.RightTwoColumn(57),
    this.LeftTwoColumn(58),
    this.RightTwoColumn(59),
    this.LeftTwoColumnWithMap(60, 340),
    this.RightTwoColumn(61),
    this.LeftTwoColumn(62),
    this.RightTwoColumn(63),
    this.LeftTwoColumnWithMap(64, 340),
    this.RightTwoColumn(65),
    this.LeftTwoColumn(66),
    this.RightTwoColumn(67),
    this.LeftTwoColumn(68),
    this.RightTwoColumn(69),
    this.RightChapterHeadingPageLayout(71),
    this.LeftTwoColumn(72),
    this.RightTwoColumn(73),
    this.LeftTwoColumnWithMap(74, 340),
    this.RightTwoColumn(75),
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
        name: "sot3/map1",
        priority: 0,
      },
      nameInfo: {
        x: 36,
        y: 731.2601,
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
      globalLight: true,
      gridType: "gridless",
      detailsFile: "/sot/maps/sot3-map1.json",
    }),
    new ModuleScene({
      name: "map2a",
      canonical: {
        name: "sot3/map2a",
        priority: 0,
      },
      nameInfo: {
        x: 666,
        y: 756.3762,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 1259,
      height: 1637,
      imageLeft: 20,
      imageRight: 1232,
      imageCols: 45,
      imageTop: 98,
      imageBottom: 1606,
      imageRows: 56,
      cropLeft: 0,
      cropRight: 1259,
      cropTop: 0,
      cropBottom: 822,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot3-map2a.json",
      journals: [
        {
          x: 3500,
          y: 3100,
          name: "C1.",
        },
        {
          x: 3500,
          y: 2400,
          name: "C2.",
        },
        {
          x: 2900,
          y: 2600,
          name: "C3.",
        },
        {
          x: 2800,
          y: 2100,
          name: "C4.",
        },
        {
          x: 2100,
          y: 1400,
          name: "C5.",
        },
        {
          x: 2700,
          y: 1400,
          name: "C6.",
        },
        {
          x: 3500,
          y: 1300,
          name: "C7.",
        },
        {
          x: 4400,
          y: 1400,
          name: "C8.",
        },
        {
          x: 5e3,
          y: 1400,
          name: "C9.",
        },
        {
          x: 4400,
          y: 2100,
          name: "C10.",
        },
        {
          x: 4200,
          y: 2600,
          name: "C11.",
        },
      ],
      tokens: [
        {
          id: "npc25",
          x: 3200,
          y: 3100,
        },
        {
          id: "npc25",
          x: 3500,
          y: 3100,
        },
        {
          id: "npc25",
          x: 3700,
          y: 3100,
        },
        {
          id: "npc16",
          x: 3600,
          y: 2e3,
        },
        {
          id: "npc16",
          x: 3300,
          y: 2e3,
        },
        {
          id: "npc16",
          x: 2800,
          y: 2500,
        },
        {
          id: "npc16",
          x: 2800,
          y: 2700,
        },
        {
          id: "npc25",
          x: 4e3,
          y: 2100,
        },
        {
          id: "npc25",
          x: 4400,
          y: 2100,
        },
        {
          id: "npc25",
          x: 4200,
          y: 2100,
        },
        {
          id: "npc17",
          x: 2800,
          y: 1400,
        },
        {
          id: "npc18",
          x: 3600,
          y: 1400,
        },
        {
          id: "npc25",
          x: 3300,
          y: 1400,
        },
      ],
    }),
    new ModuleScene({
      name: "map2b",
      canonical: {
        name: "sot3/map2b",
        priority: 0,
      },
      nameInfo: {
        x: 666,
        y: 364.6919,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 1259,
      height: 1637,
      imageLeft: 20,
      imageRight: 1232,
      imageCols: 45,
      imageTop: 98,
      imageBottom: 1606,
      imageRows: 56,
      cropLeft: 0,
      cropRight: 1259,
      cropTop: 837,
      cropBottom: 1637,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot3-map2b.json",
      journals: [
        {
          x: 3400,
          y: 2900,
          name: "C12.",
        },
        {
          x: 2700,
          y: 2800,
          name: "C13.",
        },
        {
          x: 2700,
          y: 2300,
          name: "C14.",
        },
        {
          x: 4e3,
          y: 1600,
          name: "C15.",
        },
        {
          x: 2350,
          y: 1250,
          name: "C16.",
        },
        {
          x: 4100,
          y: 2250,
          name: "C17.",
          text: "C17a",
        },
        {
          x: 4100,
          y: 2650,
          name: "C17.",
          text: "C17b",
        },
        {
          x: 4100,
          y: 3050,
          name: "C17.",
          text: "C17c",
        },
        {
          x: 4700,
          y: 2550,
          name: "C18.",
        },
        {
          x: 1250,
          y: 950,
          name: "FEATURES OF THE PRISON",
        },
      ],
      tokens: [
        {
          id: "npc42",
          x: 1800,
          y: 900,
        },
        {
          id: "npc52",
          x: 4300,
          y: 1200,
        },
        {
          id: "npc20",
          x: 2200,
          y: 2100,
        },
        {
          id: "npc20",
          x: 2200,
          y: 2300,
        },
        {
          id: "npc20",
          x: 2700,
          y: 2300,
        },
        {
          id: "npc36",
          x: 2300,
          y: 2600,
        },
        {
          id: "npc29",
          x: 2400,
          y: 2800,
        },
        {
          id: "npc19",
          x: 3400,
          y: 2600,
        },
        {
          id: "npc19",
          x: 3200,
          y: 3e3,
        },
        {
          id: "npc19",
          x: 3200,
          y: 2800,
        },
        {
          id: "npc19",
          x: 3400,
          y: 3e3,
        },
        {
          id: "npc19",
          x: 3400,
          y: 2800,
        },
        {
          id: "npc19",
          x: 3200,
          y: 2600,
        },
      ],
    }),
    new ModuleScene({
      name: "map3a",
      canonical: {
        name: "sot3/map3a",
        priority: 0,
      },
      nameInfo: {
        x: 39.5914,
        y: 579,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 10,
      width: 1210,
      height: 841,
      imageLeft: 5,
      imageRight: 1204,
      imageCols: 67,
      imageTop: 14,
      imageBottom: 818,
      imageRows: 45,
      cropLeft: 0,
      cropRight: 624,
      cropTop: 0,
      cropBottom: 413,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot3-map3a.json",
      journals: [
        {
          x: 950,
          y: 650,
          name: "RUNAWAY EXPERIMENT (LOW 8)",
        },
      ],
      tokens: [
        {
          id: "npc47",
          x: 3800,
          y: 2400,
        },
      ],
    }),
    new ModuleScene({
      name: "map3b",
      canonical: {
        name: "sot3/map3b",
        priority: 0,
      },
      nameInfo: {
        x: 343.5,
        y: 579,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 10,
      width: 1210,
      height: 841,
      imageLeft: 5,
      imageRight: 1204,
      imageCols: 67,
      imageTop: 14,
      imageBottom: 818,
      imageRows: 45,
      cropLeft: 638,
      cropRight: 1210,
      cropTop: 0,
      cropBottom: 413,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot3-map3b.json",
      journals: [
        {
          x: 1050,
          y: 650,
          name: "SPARRING AND STUDY",
        },
      ],
      tokens: [
        {
          id: "npc4",
          x: 2300,
          y: 1200,
        },
      ],
    }),
    new ModuleScene({
      name: "map3c",
      canonical: {
        name: "sot3/map3c",
        priority: 0,
      },
      nameInfo: {
        x: 39.5914,
        y: 544.3319,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 10,
      width: 1210,
      height: 841,
      imageLeft: 5,
      imageRight: 1204,
      imageCols: 67,
      imageTop: 14,
      imageBottom: 818,
      imageRows: 45,
      cropLeft: 0,
      cropRight: 624,
      cropTop: 427,
      cropBottom: 841,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot3-map3c.json",
      journals: [
        {
          x: 1050,
          y: 750,
          name: "MOCKING CRIES (SEVERE 8)",
        },
      ],
      tokens: [
        {
          id: "npc58",
          x: 1700,
          y: 1e3,
        },
        {
          id: "npc58",
          x: 3300,
          y: 700,
        },
        {
          id: "npc58",
          x: 3500,
          y: 2500,
        },
        {
          id: "npc58",
          x: 1200,
          y: 2700,
        },
        {
          id: "npc55",
          x: 2200,
          y: 1600,
        },
      ],
    }),
    new ModuleScene({
      name: "map3d",
      canonical: {
        name: "sot3/map3d",
        priority: 0,
      },
      nameInfo: {
        x: 343.5,
        y: 544.3319,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 10,
      width: 1210,
      height: 841,
      imageLeft: 5,
      imageRight: 1204,
      imageCols: 67,
      imageTop: 14,
      imageBottom: 818,
      imageRows: 45,
      cropLeft: 638,
      cropRight: 1210,
      cropTop: 427,
      cropBottom: 841,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot3-map3d.json",
      journals: [
        {
          x: 950,
          y: 750,
          name: "SHAKING BONES (SEVERE 8)",
        },
      ],
      tokens: [
        {
          id: "npc53",
          x: 2900,
          y: 1800,
        },
        {
          id: "npc49",
          x: 2500,
          y: 1700,
        },
        {
          id: "npc46",
          x: 2400,
          y: 1900,
        },
        {
          id: "npc40",
          x: 2500,
          y: 2e3,
        },
        {
          id: "npc40",
          x: 2300,
          y: 2e3,
        },
        {
          id: "npc40",
          x: 2200,
          y: 1800,
        },
      ],
    }),
    new ModuleScene({
      name: "map4",
      canonical: {
        name: "sot3/map4",
        priority: 0,
      },
      nameInfo: {
        x: 85,
        y: 682.3319,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 18,
      width: 1206,
      height: 1604,
      imageLeft: 14,
      imageRight: 1194,
      imageCols: 34,
      imageTop: 151,
      imageBottom: 1574,
      imageRows: 41,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot3-map4.json",
      journals: [
        {
          x: 3050,
          y: 5350,
          name: "A1.",
        },
        {
          x: 2350,
          y: 3950,
          name: "A2.",
        },
        {
          x: 3300,
          y: 2700,
          name: "A3.",
        },
        {
          x: 3e3,
          y: 3e3,
          name: "A4.",
        },
        {
          x: 1100,
          y: 4300,
          name: "A5.",
        },
        {
          x: 2050,
          y: 2250,
          name: "A6.",
        },
        {
          x: 1600,
          y: 3600,
          name: "A7.",
        },
        {
          x: 1400,
          y: 3200,
          name: "A8.",
        },
      ],
      tokens: [
        {
          id: "npc37",
          x: 2900,
          y: 5100,
        },
        {
          id: "npc8",
          x: 2900,
          y: 5200,
        },
        {
          id: "npc8",
          x: 2900,
          y: 5300,
        },
        {
          id: "npc8",
          x: 3e3,
          y: 5100,
        },
        {
          id: "npc8",
          x: 3100,
          y: 5200,
        },
        {
          id: "npc9",
          x: 1e3,
          y: 4300,
        },
        {
          id: "npc33",
          x: 2200,
          y: 3800,
        },
        {
          id: "npc10",
          x: 1300,
          y: 3200,
        },
        {
          id: "npc54",
          x: 2900,
          y: 3e3,
        },
        {
          id: "npc39",
          x: 2800,
          y: 2900,
        },
        {
          id: "npc39",
          x: 2800,
          y: 3100,
        },
        {
          id: "npc39",
          x: 3200,
          y: 2600,
        },
        {
          id: "npc39",
          x: 3400,
          y: 2700,
        },
        {
          id: "npc39",
          x: 3e3,
          y: 2700,
        },
        {
          id: "npc39",
          x: 3200,
          y: 2500,
        },
        {
          id: "npc39",
          x: 3200,
          y: 2300,
        },
        {
          id: "npc39",
          x: 2900,
          y: 2600,
        },
        {
          id: "npc39",
          x: 3300,
          y: 2900,
        },
        {
          id: "npc39",
          x: 3300,
          y: 2200,
        },
      ],
    }),
    new ModuleScene({
      name: "map5a",
      canonical: {
        name: "sot3/map5a",
        priority: 0,
      },
      nameInfo: {
        x: 48,
        y: 574.6681,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 28,
      width: 1259,
      height: 841,
      imageLeft: 5,
      imageRight: 1239,
      imageCols: 69,
      imageTop: 13,
      imageBottom: 835,
      imageRows: 46,
      cropLeft: 0,
      cropRight: 624,
      cropTop: 0,
      cropBottom: 415,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot3-map5a.json",
      journals: [
        {
          x: 950,
          y: 650,
          name: "AERIAL PREDATOR (MODERATE 9)",
        },
      ],
      tokens: [
        {
          id: "npc59",
          x: 2200,
          y: 1100,
        },
      ],
    }),
    new ModuleScene({
      name: "map5b",
      canonical: {
        name: "sot3/map5b",
        priority: 0,
      },
      nameInfo: {
        x: 317,
        y: 574.6681,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 28,
      width: 1259,
      height: 841,
      imageLeft: 5,
      imageRight: 1239,
      imageCols: 69,
      imageTop: 13,
      imageBottom: 835,
      imageRows: 46,
      cropLeft: 639,
      cropRight: 1259,
      cropTop: 0,
      cropBottom: 415,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot3-map5b.json",
      journals: [
        {
          x: 1050,
          y: 650,
          name: "UNDEAD KNIGHT (MODERATE 9)",
        },
      ],
      tokens: [
        {
          id: "npc11",
          x: 2700,
          y: 1600,
        },
      ],
    }),
    new ModuleScene({
      name: "map5c",
      canonical: {
        name: "sot3/map5c",
        priority: 0,
      },
      nameInfo: {
        x: 48,
        y: 544.3319,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 28,
      width: 1259,
      height: 841,
      imageLeft: 5,
      imageRight: 1239,
      imageCols: 69,
      imageTop: 13,
      imageBottom: 835,
      imageRows: 46,
      cropLeft: 0,
      cropRight: 624,
      cropTop: 430,
      cropBottom: 841,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot3-map5c.json",
      journals: [
        {
          x: 950,
          y: 750,
          name: "CROSSING THE RIVER (MODERATE 9)",
        },
      ],
      tokens: [
        {
          id: "npc15",
          x: 2300,
          y: 1800,
        },
      ],
    }),
    new ModuleScene({
      name: "map5d",
      canonical: {
        name: "sot3/map5d",
        priority: 0,
      },
      nameInfo: {
        x: 317,
        y: 544.3319,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 28,
      width: 1259,
      height: 841,
      imageLeft: 5,
      imageRight: 1239,
      imageCols: 69,
      imageTop: 13,
      imageBottom: 835,
      imageRows: 46,
      cropLeft: 639,
      cropRight: 1259,
      cropTop: 430,
      cropBottom: 841,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot3-map5d.json",
      journals: [
        {
          x: 1050,
          y: 750,
          name: "STRAGGLERS (SEVERE 9)",
        },
      ],
      tokens: [
        {
          id: "npc25",
          x: 2900,
          y: 1700,
        },
        {
          id: "npc25",
          x: 2700,
          y: 1700,
        },
        {
          id: "npc25",
          x: 2700,
          y: 1500,
        },
        {
          id: "npc25",
          x: 2900,
          y: 1500,
        },
      ],
    }),
    new ModuleScene({
      name: "map6",
      canonical: {
        name: "sot3/map6",
        priority: 0,
      },
      nameInfo: {
        x: 99,
        y: 695.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 34,
      width: 1210,
      height: 841,
      imageLeft: 27,
      imageRight: 1192,
      imageCols: 44,
      imageTop: 25,
      imageBottom: 820,
      imageRows: 30,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot3-map6.json",
      journals: [
        {
          x: 2150,
          y: 2250,
          name: "B1.",
        },
        {
          x: 3850,
          y: 1750,
          name: "B2.",
        },
        {
          x: 4050,
          y: 1350,
          name: "B3.",
        },
        {
          x: 4550,
          y: 1750,
          name: "B4.",
        },
        {
          x: 5050,
          y: 1250,
          name: "B5.",
        },
        {
          x: 4550,
          y: 3150,
          name: "B6.",
        },
      ],
      tokens: [
        {
          id: "npc38",
          x: 1400,
          y: 2100,
        },
        {
          id: "npc38",
          x: 1800,
          y: 1700,
        },
        {
          id: "npc38",
          x: 1800,
          y: 2200,
        },
        {
          id: "npc38",
          x: 2300,
          y: 2100,
        },
        {
          id: "npc45",
          x: 4700,
          y: 3200,
        },
        {
          id: "npc14",
          x: 4400,
          y: 3200,
        },
        {
          id: "npc14",
          x: 4400,
          y: 1800,
        },
        {
          id: "npc14",
          x: 4400,
          y: 1500,
        },
        {
          id: "npc41",
          x: 4400,
          y: 1600,
        },
        {
          id: "npc41",
          x: 4500,
          y: 1400,
        },
        {
          id: "npc57",
          x: 3800,
          y: 1300,
        },
        {
          id: "npc14",
          x: 4100,
          y: 1300,
        },
        {
          id: "npc14",
          x: 4200,
          y: 1400,
        },
        {
          id: "npc56",
          x: 4900,
          y: 1500,
        },
        {
          id: "npc14",
          x: 5100,
          y: 1400,
        },
        {
          id: "npc41",
          x: 4700,
          y: 1400,
        },
      ],
    }),
    new ModuleScene({
      name: "map7",
      canonical: {
        name: "sot3/map7",
        priority: 0,
      },
      nameInfo: {
        x: 124,
        y: 389.334,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 60,
      width: 1210,
      height: 841,
      imageLeft: 5,
      imageRight: 1171,
      imageCols: 31,
      imageTop: 31,
      imageBottom: 820,
      imageRows: 21,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot3-map7.json",
      journals: [
        {
          x: 2300,
          y: 1550,
          name: "D1.",
        },
        {
          x: 3450,
          y: 1950,
          name: "D2.",
        },
        {
          x: 3400,
          y: 1500,
          name: "D3.",
        },
        {
          x: 3500,
          y: 1100,
          name: "D4.",
        },
      ],
      tokens: [
        {
          id: "npc25",
          x: 2100,
          y: 1600,
        },
        {
          id: "npc25",
          x: 2200,
          y: 1800,
        },
        {
          id: "npc25",
          x: 2200,
          y: 1300,
        },
        {
          id: "npc25",
          x: 2600,
          y: 1300,
        },
        {
          id: "npc25",
          x: 1900,
          y: 1300,
        },
        {
          id: "npc25",
          x: 2300,
          y: 1200,
        },
        {
          id: "npc50",
          x: 3300,
          y: 1300,
        },
        {
          id: "npc51",
          x: 3500,
          y: 1e3,
        },
      ],
    }),
    new ModuleScene({
      name: "map8",
      canonical: {
        name: "sot3/map8",
        priority: 0,
      },
      nameInfo: {
        x: 110,
        y: 390.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 64,
      width: 1210,
      height: 841,
      imageLeft: 206,
      imageRight: 1189,
      imageCols: 42,
      imageTop: 74,
      imageBottom: 754,
      imageRows: 29,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/sot/maps/sot3-map8.json",
      journals: [
        {
          x: 4300,
          y: 2200,
          name: "E1.",
        },
        {
          x: 4100,
          y: 2500,
          name: "E2.",
        },
        {
          x: 3100,
          y: 1200,
          name: "E3.",
        },
        {
          x: 4600,
          y: 1600,
          name: "E4.",
        },
        {
          x: 5550,
          y: 3350,
          name: "E5.",
        },
        {
          x: 4250,
          y: 3750,
          name: "E6.",
        },
        {
          x: 2650,
          y: 2450,
          name: "E7.",
        },
        {
          x: 2550,
          y: 3350,
          name: "E8.",
        },
      ],
      tokens: [
        {
          id: "npc51",
          x: 2700,
          y: 2300,
        },
        {
          id: "npc18",
          x: 4500,
          y: 3700,
        },
        {
          id: "npc18",
          x: 5600,
          y: 3400,
        },
        {
          id: "npc27",
          x: 5400,
          y: 3200,
        },
        {
          id: "npc51",
          x: 4300,
          y: 2300,
        },
        {
          id: "npc26",
          x: 4600,
          y: 1700,
        },
        {
          id: "npc26",
          x: 4400,
          y: 1700,
        },
        {
          id: "npc25",
          x: 4400,
          y: 1400,
        },
        {
          id: "npc25",
          x: 4600,
          y: 1400,
        },
        {
          id: "npc26",
          x: 3e3,
          y: 1100,
        },
      ],
    }),
    new ModuleScene({
      name: "map9",
      canonical: {
        name: "sot3/map9",
        priority: 0,
      },
      nameInfo: {
        x: 110.5615,
        y: 402.4702,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 74,
      width: 1210,
      height: 841,
      imageLeft: 0,
      imageRight: 1210,
      imageCols: 10,
      imageTop: 0,
      imageBottom: 1210,
      imageRows: 10,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      gridType: "gridless",
      detailsFile: "/sot/maps/sot3-map9.json",
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 8,
        x: 298.9852,
        y: 483.2536,
      },
      page: 8,
      width: 450,
      height: 450,
      tokenX: 18,
      tokenY: 82,
      tokenSize: 506,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 8,
        x: 302.1553,
        y: 204.8161,
      },
      page: 8,
      width: 466,
      height: 466,
      tokenX: -5,
      tokenY: 72,
      tokenSize: 466,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 9,
        x: 272.3402,
        y: 478.3786,
      },
      page: 9,
      width: 466,
      height: 466,
      tokenX: 25,
      tokenY: 65,
      tokenSize: 466,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc4",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.Z6BxAmAcOywNrwPE",
      page: 11,
      width: 935,
      height: 1081,
      tokenX: -370,
      tokenY: 12,
      tokenSize: 297,
      forIds: ["MTE6Njg6NTA3"],
    }),
    new ModuleNpc({
      id: "npc5",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 12,
        x: 301.1052,
        y: 447.2536,
      },
      page: 12,
      width: 402,
      height: 492,
      tokenX: 100,
      tokenY: 114,
      tokenSize: 576,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc6",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 13,
        x: 270.8852,
        y: 459.2536,
      },
      page: 13,
      width: 500,
      height: 495,
      tokenX: 9,
      tokenY: 74,
      tokenSize: 500,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc7",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 16,
        x: 297.7653,
        y: 444.8161,
      },
      page: 16,
      width: 543,
      height: 528,
      tokenX: 14,
      tokenY: 75,
      tokenSize: 543,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc8",
      name: {
        page: 19,
        x: 294.75,
        y: 483,
      },
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.Yl6pxCXAoFECt89L",
      page: 20,
      width: 730,
      height: 1102,
      tokenX: -265,
      tokenY: 49,
      tokenSize: 402,
      forIds: ["MTk6Mjk1OjQ4Mw"],
    }),
    new ModuleNpc({
      id: "npc9",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.QMCaqMDvOrmLftM6",
      page: 22,
      width: 859,
      height: 1225,
      tokenX: -110,
      tokenY: 33,
      tokenSize: 581,
      forIds: ["MjI6MzI2OjYzOQ"],
    }),
    new ModuleNpc({
      id: "npc10",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.a7jc4LYwEzgdCP7H",
      page: 24,
      width: 1261,
      height: 1063,
      tokenX: -573,
      tokenY: 101,
      tokenSize: 645,
      forIds: ["MjQ6MzI2OjY2Mw"],
    }),
    new ModuleNpc({
      id: "npc11",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.r5lXWv7Xd2ur4fmT",
      page: 30,
      width: 966,
      height: 1201,
      tokenX: -122,
      tokenY: -19,
      tokenSize: 473,
      forIds: ["Mjk6Mjk1OjQzNQ", "MzM6Mjk1OjEzNQ"],
    }),
    new ModuleNpc({
      id: "npc12",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.lJUypzAZrt4OQUjv",
      name: {
        page: 31,
        x: 320,
        y: 154.3786,
      },
      page: 31,
      width: 857,
      height: 1245,
      tokenX: -219,
      tokenY: 4,
      tokenSize: 517,
      forIds: ["MzI6OTk6NjYz", "NTk6Mjk1OjI5MQ"],
    }),
    new ModuleNpc({
      id: "npc13",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.np82jquWwQRzRdEp",
      name: {
        page: 32,
        x: 127.8901,
        y: 144.8161,
      },
      page: 32,
      width: 817,
      height: 1135,
      tokenX: -303,
      tokenY: -135,
      tokenSize: 435,
      forIds: ["MzI6MzI2OjY5OQ", "NTk6Mjk1OjE5NQ"],
    }),
    new ModuleNpc({
      id: "npc14",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.X1uJ0zSQ8TdHpBS5",
      page: 37,
      width: 702,
      height: 838,
      tokenX: -34,
      tokenY: 93,
      tokenSize: 502,
      forIds: [
        "Mzc6Njg6Mjkx",
        "Mzg6MzI2OjU3OQ",
        "MzY6OTk6MzYz",
        "MzY6MzI2OjQxMQ",
      ],
    }),
    new ModuleNpc({
      id: "npc15",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.c8kb958djPh4wXj5",
      name: {
        page: 38,
        x: 97,
        y: 120.8161,
      },
      page: 38,
      width: 886,
      height: 721,
      tokenX: 21,
      tokenY: 83,
      tokenSize: 746,
      forIds: ["Mzg6MzY1OjE5NQ"],
      elite: true,
    }),
    new ModuleNpc({
      id: "npc16",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.0WgS1WgvVtJbYU4r",
      page: 45,
      width: 930,
      height: 1201,
      tokenX: -299,
      tokenY: 4,
      tokenSize: 473,
      forIds: ["NDQ6OTk6MjU1", "NDQ6MzI2OjE3MQ"],
    }),
    new ModuleNpc({
      id: "npc17",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.lPZiWjIyk2YdhbOF",
      page: 47,
      width: 871,
      height: 1294,
      tokenX: -256,
      tokenY: -106,
      tokenSize: 314,
      forIds: ["NDY6MzI2OjM1MQ"],
    }),
    new ModuleNpc({
      id: "npc18",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.flVfkZzC1cse78Hn",
      page: 48,
      width: 851,
      height: 1212,
      tokenX: -317,
      tokenY: -57,
      tokenSize: 288,
      forIds: [
        "NDg6OTk6NjAz",
        "Njc6Njg6NDU5",
        "Njg6MzI2OjY1MQ",
        "Njk6Njg6MTk1",
      ],
    }),
    new ModuleNpc({
      id: "npc19",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.SvOEczaYVWrASvSm",
      page: 50,
      width: 889,
      height: 889,
      tokenX: 51,
      tokenY: -85,
      tokenSize: 693,
      forIds: ["NDk6Mjk1OjU5MQ"],
    }),
    new ModuleNpc({
      id: "npc20",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.wemtTy7ikoRXvguh",
      page: 51,
      width: 907,
      height: 1157,
      tokenX: -282,
      tokenY: 14,
      tokenSize: 429,
      forIds: ["NTA6MzI2OjQ3MQ"],
    }),
    new ModuleNpc({
      id: "npc21",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 56,
        x: 285.2554,
        y: 435.2536,
      },
      page: 56,
      width: 550,
      height: 545,
      tokenX: 37,
      tokenY: 100,
      tokenSize: 606,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc22",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 57,
        x: 246.0605,
        y: 456.8161,
      },
      page: 57,
      width: 550,
      height: 550,
      tokenX: 52,
      tokenY: 79,
      tokenSize: 634,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc23",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 58,
        x: 286.3406,
        y: 446.442,
      },
      page: 58,
      width: 533,
      height: 509,
      tokenX: 65,
      tokenY: 132,
      tokenSize: 645,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc24",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 59,
        x: 245.0056,
        y: 442.3786,
      },
      page: 59,
      width: 532,
      height: 527,
      tokenX: 29,
      tokenY: 63,
      tokenSize: 532,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc25",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.vjmhpWfL8hvK2nzO",
      page: 62,
      width: 874,
      height: 1254,
      tokenX: -255,
      tokenY: -90,
      tokenSize: 358,
      forIds: [
        "NDg6MzI2OjYyNw",
        "NjI6OTk6Njk5",
        "NTY6OTk6NDU5",
        "NjY6MzQ3OjQ3MQ",
        "NDM6Mjk1OjE1OQ",
        "NDk6Njg6NDEx",
        "Mzk6Njg6MjU1",
      ],
    }),
    new ModuleNpc({
      id: "npc26",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.wTjcudppfZi0lsJa",
      page: 66,
      width: 865,
      height: 1232,
      tokenX: -266,
      tokenY: -55,
      tokenSize: 280,
      forIds: ["NjU6Mjk1OjE3MQ", "NjU6Mjk1OjY5OQ"],
    }),
    new ModuleNpc({
      id: "npc27",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.drcSWbCIWc7P4lKO",
      name: {
        page: 67,
        x: 321.3556,
        y: 118.3786,
      },
      page: 67,
      width: 824,
      height: 790,
      tokenX: 37,
      tokenY: 132,
      tokenSize: 880,
      forIds: ["ODM6Njg6MzM5", "Njc6Njg6NDEx"],
    }),
    new ModuleNpc({
      id: "npc28",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 73,
        x: 318.2656,
        y: 130.3786,
      },
      page: 73,
      width: 843,
      height: 1200,
      tokenX: -274,
      tokenY: 5,
      tokenSize: 332,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc29",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.xJPpzTfTABmT5C4i",
      page: 82,
      width: 843,
      height: 983,
      tokenX: -126,
      tokenY: -46,
      tokenSize: 535,
      forIds: ["ODI6MjUxOjQ5NQ", "NTA6OTk6NjUx"],
    }),
    new ModuleNpc({
      id: "npc30",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.gS4cbmOHsVy4HGzF",
      page: 83,
      width: 855,
      height: 786,
      tokenX: -29,
      tokenY: 29,
      tokenSize: 771,
      forIds: ["ODM6Njg6NjE1", "ODQ6MjUxOjU0Mw"],
    }),
    new ModuleNpc({
      id: "npc31",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.tvgIPWALeCP3DXOb",
      page: 84,
      width: 840,
      height: 1045,
      tokenX: -119,
      tokenY: 47,
      tokenSize: 373,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc32",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.lJUypzAZrt4OQUjv",
      page: 85,
      width: 886,
      height: 978,
      tokenX: -137,
      tokenY: -70,
      tokenSize: 334,
      forIds: ["ODU6Njc6NDU5", "MzI6OTk6NjE1", "NTk6Mjk1OjI0Mw"],
    }),
    new ModuleNpc({
      id: "npc33",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.gIixylfr1NtCRdcK",
      page: 86,
      width: 782,
      height: 888,
      tokenX: -23,
      tokenY: 82,
      tokenSize: 832,
      forIds: ["ODY6MjUxOjUwNw", "MjA6MzI2OjM2Mw"],
    }),
    new ModuleNpc({
      id: "npc34",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.KJA0II9Qdgx989MA",
      page: 87,
      width: 718,
      height: 1056,
      tokenX: -217,
      tokenY: -30,
      tokenSize: 244,
      forIds: ["ODc6Njg6NTc5", "NTU6Njg6MjMx"],
    }),
    new ModuleNpc({
      id: "npc35",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.YsBSkW3aFwU1bl3w",
      page: 89,
      width: 844,
      height: 1365,
      tokenX: -347,
      tokenY: -164,
      tokenSize: 301,
      forIds: ["ODk6Njg6NTY3", "Njk6Njg6MjQz"],
    }),
    new ModuleNpc({
      id: "npc36",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.SU6Y9fwxjwGgMuJK",
      page: 91,
      width: 861,
      height: 1220,
      tokenX: -263,
      tokenY: -5,
      tokenSize: 352,
      forIds: ["OTE6Njg6Njk5", "NTA6OTk6Njk5"],
    }),
    new ModuleNpc({
      id: "npc37",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.6W8aW2Pw1j8d0Y4g",
      page: 93,
      width: 730,
      height: 991,
      tokenX: -273,
      tokenY: 16,
      tokenSize: 347,
      forIds: ["OTM6Njg6Mjc5", "MTk6Mjk1OjUzMQ"],
    }),
    new ModuleNpc({
      id: "npc38",
      actorUuid: "Compendium.pf2e.lost-omens-bestiary.Actor.As0M3PvmrR2055pk",
      label: "A",
      forIds: ["MzU6Njg6MTcx"],
    }),
    new ModuleNpc({
      id: "npc39",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.hIWzgjW2E2K6ImPA",
      label: "BM",
      forIds: ["MjE6Mjk1OjQ1OQ", "MjA6MzI2Ojk5"],
    }),
    new ModuleNpc({
      id: "npc40",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.dNATu2RQLFYY3hYn",
      label: "GM",
      forIds: ["MTU6Mjk1OjM3NQ"],
    }),
    new ModuleNpc({
      id: "npc41",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.FFnsYr2aIfDGnUVS",
      label: "GFL",
      forIds: ["Mzc6Njg6MjQz", "MzY6MzI2OjM2Mw"],
    }),
    new ModuleNpc({
      id: "npc42",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.Iwk2qT4lVyrvoz3B",
      label: "G",
      forIds: ["NTI6OTk6MjA3"],
    }),
    new ModuleNpc({
      id: "npc43",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.sSa18Ra6zGc4Mp71",
      name: {
        page: 58,
        x: 99,
        y: 135,
        sentenceCase: true,
      },
      label: "GT",
      forIds: ["NTg6OTk6MTM1"],
    }),
    new ModuleNpc({
      id: "npc44",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.V8w4iOwUMPqYnqVE",
      label: "LS",
      forIds: ["MzI6MzI2OjY1MQ"],
    }),
    new ModuleNpc({
      id: "npc45",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.TQtISRsI3FI2ddBR",
      label: "M",
      forIds: ["Mzg6MzI2OjYyNw"],
    }),
    new ModuleNpc({
      id: "npc46",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.HBcKkBXyGaWXZxSs",
      name: {
        page: 15,
        x: 294.75,
        y: 423,
        sentenceCase: true,
      },
      label: "O",
      forIds: ["MTU6Mjk1OjQyMw"],
    }),
    new ModuleNpc({
      id: "npc47",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-3.Actor.QWx9cIVUeP7dMOez",
      label: "R",
      forIds: ["OToyOTU6MjU1"],
    }),
    new ModuleNpc({
      id: "npc49",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.BcSzGmSxCn0uWkxU",
      name: {
        page: 15,
        x: 294.75,
        y: 471,
        sentenceCase: true,
      },
      label: "SM",
      forIds: ["MTU6Mjk1OjQ3MQ"],
    }),
    new ModuleNpc({
      id: "npc50",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.u45PPktoMp5L2vf3",
      name: {
        page: 63,
        x: 67.5,
        y: 579,
        sentenceCase: true,
      },
      label: "SL",
      forIds: ["NjM6Njg6NTc5"],
    }),
    new ModuleNpc({
      id: "npc51",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.5f8EKdudDgYRBmqA",
      label: "SWT",
      forIds: ["NjQ6OTk6MTU5", "Njk6Njg6Njk5"],
    }),
    new ModuleNpc({
      id: "npc52",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.6mdq7UV9gFXAEOpJ",
      name: {
        page: 52,
        x: 99,
        y: 627,
        sentenceCase: true,
      },
      label: "T",
      forIds: ["NTI6OTk6NjI3"],
    }),
    new ModuleNpc({
      id: "npc53",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.SpvzECYhPp7rKLA1",
      label: "TS",
      forIds: ["MTU6Mjk1OjI0Mw"],
    }),
    new ModuleNpc({
      id: "npc54",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.h4SZ3U9at7aT0ASv",
      name: {
        page: 21,
        x: 294.75,
        y: 507,
      },
      label: "V",
      forIds: ["MjE6Mjk1OjUwNw"],
    }),
    new ModuleNpc({
      id: "npc55",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.jR4E2I2tmQ6sd5DR",
      label: "D",
      forIds: ["MTU6Njg6MzM5"],
      weak: true,
    }),
    new ModuleNpc({
      id: "npc56",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.tuuSayyL0A5R6hZh",
      name: {
        page: 37,
        x: 67.5,
        y: 339,
        sentenceCase: true,
      },
      label: "Y",
      forIds: ["Mzc6Njg6MzM5"],
    }),
    new ModuleNpc({
      id: "npc57",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.LBIK0gw2TzcLIDaJ",
      name: {
        page: 35,
        x: 294.75,
        y: 243,
        sentenceCase: true,
      },
      label: "G",
      forIds: ["MzU6Mjk1OjI0Mw"],
    }),
    new ModuleNpc({
      id: "npc58",
      actorUuid: "Compendium.pf2e.lost-omens-bestiary.Actor.hbvxQn0T0m4WoAmZ",
      label: "K",
      forIds: ["MTU6Njg6Mzg3"],
    }),
    new ModuleNpc({
      id: "npc59",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-3.Actor.6OxiStysMq65xKgS",
      label: "K",
      forIds: ["Mjk6Njg6NDcx"],
    }),
    new ModuleNpc({
      id: "npc61",
      actorUuid:
        "Compendium.pf2e.strength-of-thousands-bestiary.Actor.np82jquWwQRzRdEp",
      label: "TSR",
      forIds: ["ODQ6MjUxOjU0Mw", "ODQ6MzQ4OjI1NQ"],
    }),
  ];
  journalPages = [
    {
      name: "Chapter 1",
      pages: [
        {
          id: "NzoyMDE6Njg0",
        },
        {
          id: "NzozNzE6NTQz",
        },
        {
          id: "NzozNzE6MzI3",
        },
        {
          id: "MTc6MzExOjY5OQ",
        },
        {
          id: "ODozNzk6Mjkx",
        },
        {
          id: "ODozNTc6MjA3",
        },
        {
          id: "OTo2ODoxMjM",
        },
        {
          id: "MTA6OTk6MjY3",
        },
        {
          id: "MTE6Mjk1OjU3OQ",
        },
        {
          id: "MTI6OTk6MTM1",
        },
        {
          id: "MTI6MzI2Ojk5",
        },
        {
          id: "MTM6Mjk1OjQxMQ",
        },
        {
          id: "MTQ6OTk6NTU1",
        },
        {
          id: "MTQ6MzI2OjM1MQ",
        },
        {
          id: "MTQ6MzI2OjEzNQ",
        },
        {
          id: "MTU6Njg6MjU1",
        },
        {
          id: "MTY6OTk6Njk5",
        },
        {
          id: "MTc6Njg6Njk5",
        },
        {
          id: "MTc6Njg6MTcx",
        },
        {
          id: "MTc6Mjk1OjM3NQ",
        },
        {
          id: "MjA6MzI2OjY2Mw",
        },
        {
          id: "MjA6MzI2OjIzMQ",
        },
        {
          id: "MjE6Njg6NjUx",
        },
        {
          id: "MjE6Mjk1OjMwMw",
        },
        {
          id: "MjM6Njg6Njk5",
        },
        {
          id: "MjM6Njg6NTU1",
        },
        {
          id: "MjM6Mjk1OjY5OQ",
        },
        {
          id: "MjU6Njg6NDk1",
        },
      ],
    },
    {
      name: "Chapter 2",
      pages: [
        {
          id: "Mjc6MTk2OjY4Mg",
        },
        {
          id: "Mjc6MzcxOjU0Mw",
        },
        {
          id: "Mjc6MzcxOjI2Nw",
        },
        {
          id: "Mjc6Njg6MzI3",
        },
        {
          id: "Mjg6OTk6MjE5",
        },
        {
          id: "Mjg6MzI2OjI2Nw",
        },
        {
          id: "Mjk6Njg6Mzg3",
        },
        {
          id: "MzA6MzM2OjE0Nw",
        },
        {
          id: "MzI6MzI4OjUxOQ",
        },
        {
          id: "MzM6Njg6NDk1",
        },
        {
          id: "MzM6Mjk1OjM5OQ",
        },
        {
          id: "MzQ6OTk6MzM5",
        },
        {
          id: "MzQ6MzI2OjMzOQ",
        },
        {
          id: "MzU6Njg6NTU1",
        },
        {
          id: "MzU6Njg6MTIz",
        },
        {
          id: "MzU6Mjk1OjYzOQ",
        },
        {
          id: "MzY6MzI2OjY1MQ",
        },
        {
          id: "MzY6MzI2OjI3OQ",
        },
        {
          id: "Mzc6Mjk1OjY2Mw",
        },
        {
          id: "Mzg6MzI2OjQ3MQ",
        },
        {
          id: "Mzk6Njg6NjYz",
        },
        {
          id: "Mzk6Njg6NTA3",
        },
      ],
    },
    {
      name: "Chapter 3",
      pages: [
        {
          id: "NDE6MTk1OjY4MQ",
        },
        {
          id: "NDE6MzcxOjU0Mw",
        },
        {
          id: "NDE6MzcxOjI1NQ",
        },
        {
          id: "NDI6OTk6NTQz",
        },
        {
          id: "NDI6MzI2OjYyNw",
        },
        {
          id: "NDI6MzI2OjQyMw",
        },
        {
          id: "NDM6Njg6NTMx",
        },
        {
          id: "NDM6Njg6MTEx",
        },
        {
          id: "NDQ6OTk6Njk5",
        },
        {
          id: "NDQ6MzI2OjQ4Mw",
        },
        {
          id: "NDQ6MzI2OjEyMw",
        },
        {
          id: "NDU6Njg6NTE5",
        },
        {
          id: "NDY6OTk6NjI3",
        },
        {
          id: "NDc6Njg6NjM5",
        },
        {
          id: "NDg6MzI2OjU3OQ",
        },
        {
          id: "NDg6NDEzOjI3OQ",
        },
        {
          id: "NDg6MzgzOjExMQ",
        },
        {
          id: "NDk6Njg6MzYz",
        },
        {
          id: "NDk6Njg6MjQz",
        },
        {
          id: "NDk6Mjk1OjUxOQ",
        },
        {
          id: "NTA6OTk6NTU1",
        },
        {
          id: "NTE6Njg6NjM5",
        },
        {
          id: "NTI6OTk6NTc5",
        },
        {
          id: "NTI6OTk6MTU5",
        },
        {
          id: "NTM6Njg6NTc5",
        },
        {
          id: "NTM6Njg6MzAz",
        },
        {
          id: "NTM6Mjk1OjQ5NQ",
        },
      ],
    },
    {
      name: "Chapter 4",
      pages: [
        {
          id: "NTU6MTk1OjY4MQ",
        },
        {
          id: "NTU6MzcxOjU0Mw",
        },
        {
          id: "NTU6MzcxOjI2Nw",
        },
        {
          id: "NTU6Njg6NDEx",
        },
        {
          id: "NTU6Njg6MTgz",
        },
        {
          id: "NTY6OTk6NDEx",
        },
        {
          id: "NTY6OTk6MTEx",
        },
        {
          id: "NTY6MzI2OjE1OQ",
        },
        {
          id: "NTc6Njg6MzE1",
        },
        {
          id: "NTc6Mjk1OjE5NQ",
        },
        {
          id: "NTg6MzI2OjY5OQ",
        },
        {
          id: "NTk6Njg6Mzc1",
        },
        {
          id: "NTk6MzYwOjUxOQ",
        },
        {
          id: "NjA6OTk6MzM5",
        },
        {
          id: "NjE6Mjk1OjY5OQ",
        },
        {
          id: "NjE6Mjk1OjM3NQ",
        },
        {
          id: "NjI6MzI2OjU1NQ",
        },
        {
          id: "NjI6MzQ2OjM4Nw",
        },
        {
          id: "NjM6Njg6NDk1",
        },
        {
          id: "NjM6Njg6MTIz",
        },
        {
          id: "NjM6Mjk1OjI1NQ",
        },
        {
          id: "NjM6Mjk1OjEyMw",
        },
        {
          id: "NjQ6OTk6MTEx",
        },
        {
          id: "NjU6Njg6Njk5",
        },
        {
          id: "NjU6Mjk1OjY1MQ",
        },
        {
          id: "NjY6MzI2OjM1MQ",
        },
        {
          id: "Njc6Njg6MzYz",
        },
        {
          id: "Njg6MzI2OjQ3MQ",
        },
        {
          id: "Njk6Mjk1OjYzOQ",
        },
        {
          id: "Njk6Mjk1OjM5OQ",
        },
      ],
    },
    {
      name: "Back Matter",
      pages: [
        {
          id: "NzE6MjI3OjY0MQ",
        },
        {
          id: "NzE6Njg6MTk1",
        },
        {
          id: "NzI6OTk6MTM1",
        },
        {
          id: "NzI6MzI2OjYzOQ",
        },
        {
          id: "NzI6MzI2OjQ5NQ",
        },
        {
          id: "NzI6MzI2OjMxNQ",
        },
        {
          id: "NzI6MzI2OjE4Mw",
        },
        {
          id: "NzM6Njg6NTQz",
        },
        {
          id: "NzM6Njg6MzI3",
        },
        {
          id: "NzM6Njg6MTEx",
        },
        {
          id: "NzQ6OTk6MzM5",
        },
        {
          id: "NzQ6OTk6MTcx",
        },
        {
          id: "NzQ6OTk6MTEx",
        },
        {
          id: "NzQ6MzI2OjMzOQ",
        },
        {
          id: "NzQ6MzI2OjI1NQ",
        },
        {
          id: "NzQ6MzI2OjE1OQ",
        },
        {
          id: "NzU6Njg6Njk5",
        },
        {
          id: "NzU6Njg6NjE1",
        },
        {
          id: "NzU6Njg6NTA3",
        },
        {
          id: "NzU6Njg6NDM1",
        },
        {
          id: "NzU6Njg6MzE1",
        },
        {
          id: "NzU6Njg6MTk1",
        },
        {
          id: "NzU6Njg6MTEx",
        },
        {
          id: "NzU6Mjk1OjYzOQ",
        },
        {
          id: "NzU6Mjk1OjU2Nw",
        },
        {
          id: "NzU6Mjk1OjQ3MQ",
        },
        {
          id: "NzU6Mjk1OjI0Mw",
        },
        {
          id: "NzU6Mjk1OjE0Nw",
        },
        {
          id: "Nzc6MTQ5OjY2OA",
        },
        {
          id: "Nzc6Njg6NDcx",
        },
        {
          id: "Nzk6Njg6NjE1",
        },
        {
          id: "Nzk6Njg6NTY3",
        },
        {
          id: "ODA6OTk6NjE1",
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
          id: "ODM6Njg6NjUx",
        },
        {
          id: "ODM6Njg6Mzc1",
        },
        {
          id: "ODQ6MjUxOjY4Nw",
        },
        {
          id: "ODQ6MjUxOjYwMw",
        },
        {
          id: "ODQ6MjUyOjMyNw",
        },
        {
          id: "ODU6Njg6NTE5",
        },
        {
          id: "ODY6MjUxOjY4Nw",
        },
        {
          id: "ODc6Njg6Njg3",
        },
        {
          id: "ODg6MTY4OjY2NA",
        },
        {
          id: "OTA6MTAwOjY2NA",
        },
        {
          id: "OTI6OTk6NjY1",
        },
        {
          id: "ODI6MTQwOjY2Mw",
        },
        {
          id: "ODM6MzcxOjY2Mw",
        },
        {
          id: "ODQ6MTM1OjY2Mw",
        },
        {
          id: "ODU6MzcxOjY2Mw",
        },
        {
          id: "ODY6MTAxOjY2Mw",
        },
        {
          id: "ODc6MzcxOjY2Mw",
        },
      ],
    },
  ];
  combines = [
    {
      source: "OTA6MzI2OjI2Nw",
      dest: "OTA6MTAwOjY2NA",
    },
    {
      source: "ODg6MzI2OjE5NQ",
      dest: "ODg6MTY4OjY2NA",
    },
    {
      source: "OTM6Njg6NTQz",
      dest: "OTI6OTk6NjY1",
    },
  ];
  journals = [];
  detect(pdf) {
    return (
      pdf.textDetails.some(
        (t) =>
          t.text.trim() === "Hurricane\u2019s" && t.fontId === "Gin-Regular:40",
      ) &&
      !pdf.textDetails.some(
        (t) =>
          t.text.trim() === "INTERACTIVE MAPS" && t.fontName === "Dax-Bold",
      )
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    this.markStartOfLine(text, 22, 387.25, 423);
    this.markIndented(text, 22, 407.25, 387);
    this.markStartOfLine(text, 22, 401.25, 327);
    this.markStartOfLine(text, 22, 340.25, 315);
    this.markStartOfLine(text, 22, 331.25, 291);
    this.markStartOfLine(text, 30, 420.2501, 291);
    this.markStartOfLine(text, 38, 365.25, 195);
    this.markStartOfLine(text, 38, 371.25, 171);
    this.markStartOfLine(text, 38, 381.25, 159);
    this.markStartOfLine(text, 50, 404.25, 267);
    this.markStartOfLine(text, 50, 402.25, 255);
    this.markStartOfLine(text, 50, 397.25, 243);
    this.markStartOfLine(text, 50, 391.25, 207);
    this.markStartOfLine(text, 50, 392.25, 183);
    this.markStartOfLine(text, 66, 386.25, 591);
    this.markStartOfLine(text, 66, 412.25, 531);
    this.markStartOfLine(text, 78, 383.25, 543);
    this.markStartOfLine(text, 78, 414.25, 531);
    this.markStartOfLine(text, 78, 419.25, 519);
    this.markStartOfLine(text, 78, 419.25, 507);
    this.markStartOfLine(text, 78, 374.25, 303);
    this.markStartOfLine(text, 78, 365.25, 291);
    this.markStartOfLine(text, 78, 375.3904, 99);
    this.markIndented(text, 80, 350.25, 171);
    this.markIndented(text, 80, 355.25, 159);
    this.markIndented(text, 80, 355.25, 147);
    this.markStartOfLine(text, 82, 289.5, 375);
    this.markStartOfLine(text, 82, 309.5, 363);
    this.markStartOfLine(text, 82, 360.5, 315);
    this.markStartOfLine(text, 82, 373.5, 243);
    this.markStartOfLine(text, 82, 296.5, 231);
    this.markStartOfLine(text, 82, 290.5, 219);
    this.markStartOfLine(text, 82, 289.5, 183);
    this.markStartOfLine(text, 84, 380.5001, 231);
    this.markStartOfLine(text, 84, 380.5001, 219);
    this.markStartOfLine(text, 84, 380.5001, 207);
    this.markStartOfLine(text, 84, 380.5001, 171);
    this.markStartOfLine(text, 84, 363.5001, 147);
    this.markStartOfLine(text, 84, 299.5001, 135);
    this.markStartOfLine(text, 84, 300.5001, 123);
    this.markStartOfLine(text, 84, 299.5001, 111);
    this.markStartOfLine(text, 86, 288.5, 459);
    this.markStartOfLine(text, 86, 290.5, 447);
    this.markStartOfLine(text, 86, 289.5, 435);
    this.markStartOfLine(text, 86, 349.5, 363);
    this.markStartOfLine(text, 86, 350.5, 351);
    this.markStartOfLine(text, 86, 355.5, 291);
    this.markStartOfLine(text, 86, 345.5, 195);
    this.markStartOfLine(text, 86, 292.5, 147);
    this.markStartOfLine(text, 86, 289.5, 135);
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
