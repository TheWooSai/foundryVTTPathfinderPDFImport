import { FistsOfTheRubyPhoenixBase } from "./base.js";
import { CaptionImage } from "../../core/images.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class FistsOfTheRubyPhoenix3 extends FistsOfTheRubyPhoenixBase {
  prefix = "fists-of-the-ruby-phoenix-3";
  fullName = "Fists of the Ruby Phoenix - King of the Mountain";
  pages = [
    this.ChapterHeadingPageLayout(6),
    this.RightSingleColumnWithSidebar(7),
    this.LeftTwoColumn(8),
    this.RightTwoColumnWithRightCutout(9, 450),
    this.LeftTwoColumn(10),
    this.RightTwoColumn(11),
    this.LeftTwoColumnWithMap(12, 340),
    this.RightTwoColumn(13),
    this.LeftTwoColumnWithMap(14, 340),
    this.RightTwoColumn(15),
    this.LeftTwoColumn(16),
    this.RightTwoColumn(17),
    this.LeftTwoColumn(18),
    this.RightTwoColumn(19),
    this.LeftTwoColumn(20),
    this.RightTwoColumn(21),
    this.LeftTwoColumn(22),
    this.RightTwoColumnWithRightCutout(23, 450),
    this.LeftTwoColumn(24),
    this.RightTwoColumn(25),
    this.LeftTwoColumnWithMap(26, 340),
    this.RightTwoColumn(27),
    this.LeftTwoColumn(28),
    this.RightTwoColumn(29),
    this.LeftTwoColumn(30),
    this.RightTwoColumn(31),
    this.LeftTwoColumnWithLeftCutout(32, 120),
    this.RightTwoColumn(33),
    this.LeftTwoColumn(34),
    this.RightTwoColumnWithRightCutout(35, 500),
    this.ChapterHeadingPageLayout(36),
    this.RightSingleColumnWithSidebar(37),
    this.LeftTwoColumn(38),
    this.RightTwoColumn(39),
    this.LeftTwoColumnWithMap(40, 340),
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
    this.ChapterHeadingPageLayout(52),
    this.RightSingleColumnWithSidebar(53),
    this.LeftTwoColumn(54),
    this.RightTwoColumn(55),
    this.LeftTwoColumn(56),
    this.RightTwoColumn(57),
    this.LeftTwoColumn(58),
    this.RightTwoColumnWithRightCutout(59, 460),
    this.LeftTwoColumn(60),
    this.RightTwoColumn(61),
    this.RightChapterHeadingPageLayout(63),
    this.LeftTwoColumn(64),
    this.RightTwoColumn(65),
    this.LeftTwoColumn(66),
    this.RightTwoColumnWithRightCutout(69, 190),
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
    this.LeftSingleColumnWithSidebar(88),
    this.RightSingleColumnWithSidebar(89),
    this.ChapterHeadingPageLayout(90),
    this.RightTwoColumn(91),
    this.ChapterHeadingPageLayout(92),
    this.RightTwoColumn(93),
  ];
  scenes = [
    new ModuleScene({
      name: "map1a",
      canonical: {
        name: "forp3/map1a",
        priority: 0,
      },
      nameInfo: {
        x: 24.56,
        y: 749.6941,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 1262,
      height: 1637,
      imageLeft: 12,
      imageRight: 1258,
      imageCols: 92,
      imageTop: 12,
      imageBottom: 1624,
      imageRows: 119,
      cropLeft: 0,
      cropRight: 615,
      cropTop: 0,
      cropBottom: 806,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/forp/maps/forp3-map1a.json",
      journals: [
        {
          x: 1250,
          y: 1550,
          id: "MzA6OTk6MTEx",
        },
      ],
      tokens: [
        {
          id: "npc35",
          x: 2300,
          y: 1500,
        },
        {
          id: "npc35",
          x: 4100,
          y: 2700,
        },
      ],
    }),
    new ModuleScene({
      name: "map1b",
      canonical: {
        name: "forp3/map1b",
        priority: 0,
      },
      nameInfo: {
        x: 318.56,
        y: 749.6941,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 1262,
      height: 1637,
      imageLeft: 12,
      imageRight: 1258,
      imageCols: 92,
      imageTop: 12,
      imageBottom: 1624,
      imageRows: 119,
      cropLeft: 631,
      cropRight: 1258,
      cropTop: 0,
      cropBottom: 806,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/forp/maps/forp3-map1b.json",
      journals: [
        {
          x: 1350,
          y: 1650,
          id: "NDU6MzczOjUwNw",
        },
      ],
      tokens: [
        {
          id: "npc29",
          x: 2e3,
          y: 3200,
        },
        {
          id: "npc29",
          x: 2800,
          y: 3100,
        },
      ],
    }),
    new ModuleScene({
      name: "map1c",
      canonical: {
        name: "forp3/map1c",
        priority: 0,
      },
      nameInfo: {
        x: 24.56,
        y: 360.6962,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 1262,
      height: 1637,
      imageLeft: 12,
      imageRight: 1258,
      imageCols: 92,
      imageTop: 12,
      imageBottom: 1624,
      imageRows: 119,
      cropLeft: 0,
      cropRight: 615,
      cropTop: 831,
      cropBottom: 1624,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/forp/maps/forp3-map1c.json",
      journals: [
        {
          x: 1250,
          y: 1650,
          id: "NDE6Njg6MzAz",
        },
      ],
      tokens: [
        {
          id: "npc13",
          x: 2900,
          y: 3e3,
        },
        {
          id: "npc13",
          x: 3500,
          y: 3600,
        },
        {
          id: "npc13",
          x: 3400,
          y: 4900,
        },
        {
          id: "npc13",
          x: 2200,
          y: 4500,
        },
      ],
    }),
    new ModuleScene({
      name: "map1d",
      canonical: {
        name: "forp3/map1d",
        priority: 0,
      },
      nameInfo: {
        x: 318.56,
        y: 360.6962,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 1262,
      height: 1637,
      imageLeft: 12,
      imageRight: 1258,
      imageCols: 92,
      imageTop: 12,
      imageBottom: 1624,
      imageRows: 119,
      cropLeft: 631,
      cropRight: 1258,
      cropTop: 831,
      cropBottom: 1624,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/forp/maps/forp3-map1d.json",
      journals: [
        {
          x: 1450,
          y: 1750,
          id: "NDA6OTk6MTEx",
        },
      ],
      tokens: [
        {
          id: "npc12",
          x: 1900,
          y: 3300,
          elite: true,
        },
        {
          id: "npc12",
          x: 3500,
          y: 4200,
          elite: true,
        },
      ],
    }),
    new ModuleScene({
      name: "map2",
      canonical: {
        name: "forp3/map2",
        priority: 0,
      },
      nameInfo: {
        x: 83,
        y: 714.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 12,
      width: 1175,
      height: 784,
      imageLeft: 0,
      imageRight: 1175,
      imageCols: 39,
      imageTop: 0,
      imageBottom: 783.33,
      imageRows: 26,
      gridType: "gridless",
      gridDistance: 10,
      gridUnits: "mi",
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/forp/maps/forp3-map2.json",
      journals: [
        {
          x: 3338.58358974359,
          y: 1287.9487179487178,
          name: "A.",
        },
        {
          x: 3393.2758974358976,
          y: 1432.3076923076924,
          name: "B.",
        },
        {
          x: 2445.7887179487175,
          y: 1124.179487179487,
          name: "C.",
        },
        {
          x: 2341.250256410256,
          y: 1903.2051282051282,
          name: "D.",
        },
        {
          x: 3462.2415384615388,
          y: 2053.45641025641,
          name: "E.",
        },
        {
          x: 2492.2415384615388,
          y: 2366.9179487179485,
          name: "F.",
        },
      ],
    }),
    new ModuleScene({
      name: "map3",
      canonical: {
        name: "forp3/map3",
        priority: 0,
      },
      nameInfo: {
        x: 83,
        y: 714.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 14,
      width: 1175,
      height: 784,
      imageLeft: 13,
      imageRight: 1167,
      imageCols: 114,
      imageTop: 12,
      imageBottom: 771,
      imageRows: 75,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/forp/maps/forp3-map3.json",
      journals: [
        {
          x: 3250,
          y: 2550,
          id: "MTM6Njg6Mjc5",
        },
      ],
      tokens: [],
    }),
    new ModuleScene({
      name: "map4",
      canonical: {
        name: "forp3/map4",
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
      imageLeft: 0,
      imageRight: 1500,
      imageCols: 50,
      imageTop: 0,
      imageBottom: 1500,
      imageRows: 50,
      gridType: "gridless",
      gridDistance: 50,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/forp/maps/forp3-map4.json",
      journals: [
        {
          x: 1453.17,
          y: 1568.45,
          id: "MjY6OTk6MzM5",
        },
        {
          x: 1944.08,
          y: 1159.36,
          id: "MjY6MzI2OjE3MQ",
        },
        {
          x: 3716.81,
          y: 1168.45,
          id: "Mjc6Njg6MzE1",
        },
        {
          x: 3641.05,
          y: 1698.76,
          id: "Mjg6OTk6NjAz",
        },
        {
          x: 3565.29,
          y: 2332.09,
          id: "Mjg6MzI2OjE0Nw",
        },
        {
          x: 2934.99,
          y: 2726.03,
          id: "MzA6OTk6NTE5",
        },
      ],
      tokens: [],
    }),
    new ModuleScene({
      name: "map5",
      canonical: {
        name: "forp3/map5",
        priority: 0,
      },
      nameInfo: {
        x: 83,
        y: 714.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 40,
      width: 1175,
      height: 784,
      imageLeft: 0,
      imageRight: 1175 * 2,
      imageCols: 47,
      imageTop: 0,
      imageBottom: 1175 * 2,
      imageRows: 47,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      gridType: "gridless",
      detailsFile: "/forp/maps/forp3-map5.json",
      journals: [
        {
          x: 1172.2222222222222,
          y: 1497.6190476190477,
          id: "NDA6OTk6MTEx",
        },
        {
          x: 1613.4920634920636,
          y: 1096.031746031746,
          id: "NDE6Njg6MzAz",
        },
        {
          x: 1602.3809523809527,
          y: 1416.6666666666667,
          id: "NDQ6MzI2OjI3OQ",
        },
        {
          x: 1836.5079365079368,
          y: 1393.6507936507937,
          id: "NDU6MzczOjUwNw",
        },
        {
          x: 1836.5079365079364,
          y: 1006.3492063492065,
          id: "NDY6MzI2OjY5OQ",
        },
        {
          x: 1838.8888888888891,
          y: 691.2698412698413,
          id: "NDc6Njg6MzYz",
        },
        {
          x: 2247.6190476190477,
          y: 993.6507936507937,
          id: "NDg6OTk6MzAz",
        },
      ],
      tokens: [],
    }),
    new ModuleScene({
      name: "map6",
      canonical: {
        name: "forp3/map6",
        priority: 0,
      },
      nameInfo: {
        x: 83,
        y: 714.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 54,
      width: 647,
      height: 905,
      imageLeft: 28,
      imageRight: 610,
      imageCols: 17,
      imageTop: 9,
      imageBottom: 901,
      imageRows: 26,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/forp/maps/forp3-map6.json",
      journals: [
        {
          x: 1550,
          y: 1700,
          id: "NTc6Mjk1OjY5OQ",
        },
        {
          x: 1850,
          y: 2600,
          id: "NTg6OTk6Njk5",
        },
        {
          x: 1150,
          y: 2900,
          id: "NTg6OTk6NDEx",
        },
        {
          x: 1050,
          y: 2550,
          id: "NTg6OTk6Mjkx",
        },
        {
          x: 1300,
          y: 2550,
          id: "NTg6MzI2OjU5MQ",
        },
      ],
      tokens: [
        {
          id: "npc39",
          x: 1800,
          y: 3e3,
        },
        {
          id: "npc39",
          x: 1800,
          y: 2700,
        },
        {
          id: "npc39",
          x: 1600,
          y: 3e3,
        },
        {
          id: "npc39",
          x: 1600,
          y: 2700,
        },
      ],
    }),
    new ModuleScene({
      name: "map7",
      canonical: {
        name: "forp3/map7",
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
      imageLeft: 31,
      imageRight: 1229,
      imageCols: 31,
      imageTop: 18,
      imageBottom: 1602,
      imageRows: 41,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/forp/maps/forp3-map7.json",
    }),
  ];
  journals = [
    new CaptionImage({
      name: "journal1",
      page: 4,
      width: 1261,
      height: 1636,
    }),
    new CaptionImage({
      name: "journal2",
      page: 6,
      width: 1169,
      height: 780,
    }),
    new CaptionImage({
      name: "journal3",
      page: 36,
      width: 1169,
      height: 780,
    }),
    new CaptionImage({
      name: "journal4",
      page: 52,
      width: 1169,
      height: 779,
    }),
    new CaptionImage({
      name: "journal5",
      page: 62,
      width: 1262,
      height: 1637,
    }),
    new CaptionImage({
      name: "journal6",
      page: 68,
      width: 1262,
      height: 1637,
    }),
    new CaptionImage({
      name: "journal7",
      page: 74,
      width: 1262,
      height: 1636,
    }),
    new CaptionImage({
      name: "journal8",
      page: 15,
      width: 921,
      height: 934,
    }),
    new CaptionImage({
      name: "journal9",
      page: 27,
      width: 872,
      height: 1260,
    }),
    new CaptionImage({
      name: "journal10",
      page: 64,
      width: 617,
      height: 730,
    }),
    new CaptionImage({
      name: "journal11",
      page: 65,
      width: 945,
      height: 1136,
    }),
    new CaptionImage({
      name: "journal12",
      page: 70,
      width: 711,
      height: 1148,
    }),
    new CaptionImage({
      name: "journal13",
      page: 72,
      width: 845,
      height: 1111,
    }),
    new CaptionImage({
      name: "journal14",
      page: 76,
      width: 870,
      height: 1196,
    }),
    new CaptionImage({
      name: "journal15",
      page: 78,
      width: 808,
      height: 1077,
    }),
    new CaptionImage({
      name: "journal16",
      page: 93,
      width: 765,
      height: 1158,
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.tfBczpCPNVnRE8pJ",
      page: 8,
      width: 501,
      height: 500,
      tokenX: 85,
      tokenY: 110,
      tokenSize: 641,
      forIds: ["OTM6Njg6NjM5"],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 10,
        x: 246.5358,
        y: 452.3752,
      },
      page: 10,
      width: 517,
      height: 517,
      tokenX: 54,
      tokenY: 90,
      tokenSize: 601,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.QhFUhlZl1bvUrtPs",
      page: 16,
      width: 817,
      height: 1253,
      tokenX: -465,
      tokenY: -327,
      tokenSize: 357,
      forIds: ["MTU6Mjk0OjUxOQ"],
    }),
    new ModuleNpc({
      id: "npc4",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.f0nafAQA1tSXLqwL",
      name: {
        page: 17,
        x: 273.1073,
        y: 444.8752,
      },
      page: 17,
      width: 526,
      height: 510,
      tokenX: 0,
      tokenY: 8,
      tokenSize: 526,
      forIds: ["MTg6OTk6MzM5"],
    }),
    new ModuleNpc({
      id: "npc5",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.f0nafAQA1tSXLqwL",
      page: 18,
      width: 506,
      height: 530,
      tokenX: 12,
      tokenY: 0,
      tokenSize: 530,
      forIds: ["MTc6Njg6MTIz"],
    }),
    new ModuleNpc({
      id: "npc6",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.zmE4irZj6a2WpB6f",
      page: 19,
      width: 840,
      height: 1244,
      tokenX: -322,
      tokenY: -114,
      tokenSize: 348,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc7",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.HGtyyMucLkYlqZ8i",
      page: 21,
      width: 919,
      height: 1267,
      tokenX: -407,
      tokenY: -204,
      tokenSize: 371,
      forIds: ["MjA6OTk6MTEx"],
    }),
    new ModuleNpc({
      id: "npc8",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.lqHn5wSzxvdllGgH",
      page: 24,
      width: 790,
      height: 1175,
      tokenX: -136,
      tokenY: -7,
      tokenSize: 391,
      forIds: ["MjU6Njg6NDk1"],
    }),
    new ModuleNpc({
      id: "npc9",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.GBBVBEAsznP8A5gv",
      page: 29,
      width: 952,
      height: 1213,
      tokenX: 131,
      tokenY: 0,
      tokenSize: 1213,
      forIds: ["Mjg6MzI2OjYwMw"],
    }),
    new ModuleNpc({
      id: "npc10",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.65LJVPu9DFkF0YNX",
      page: 33,
      width: 549,
      height: 534,
      tokenX: 66,
      tokenY: 87,
      tokenSize: 633,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc11",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.IlDWyCnxA6gS2UZm",
      page: 39,
      width: 565,
      height: 550,
      tokenX: 38,
      tokenY: 81,
      tokenSize: 621,
      forIds: ["OTA6MzI2OjU5MQ", "NTk6Njg6NDM1"],
    }),
    new ModuleNpc({
      id: "npc12",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.KdW5UeZSqeTZZlo5",
      name: {
        page: 41,
        x: 421.7304,
        y: 112.5001,
      },
      page: 41,
      width: 801,
      height: 915,
      tokenX: -225,
      tokenY: 96,
      tokenSize: 663,
      forIds: ["NDE6Njg6NDU5"],
    }),
    new ModuleNpc({
      id: "npc13",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.qF9hjssrMjHuVFYK",
      page: 42,
      width: 976,
      height: 954,
      tokenX: 122,
      tokenY: 219,
      tokenSize: 1144,
      forIds: ["NDE6Mjk1OjUzMQ"],
    }),
    new ModuleNpc({
      id: "npc14",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.7MiWOVxjocxNr0dh",
      page: 44,
      width: 807,
      height: 1075,
      tokenX: -153,
      tokenY: 28,
      tokenSize: 319,
      forIds: ["NDM6Mjk1OjQ5NQ"],
    }),
    new ModuleNpc({
      id: "npc15",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 45,
        x: 267.2737,
        y: 487.5002,
      },
      page: 45,
      width: 488,
      height: 488,
      tokenX: 58,
      tokenY: 144,
      tokenSize: 600,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc16",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 46,
        x: 121.6621,
        y: 126.2502,
      },
      page: 46,
      width: 873,
      height: 1184,
      tokenX: -353,
      tokenY: 33,
      tokenSize: 288,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc17",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.mdOASi6f7CTVH1ys",
      page: 47,
      width: 743,
      height: 1017,
      tokenX: 137,
      tokenY: 0,
      tokenSize: 1017,
      forIds: ["NDY6MzMwOjM4Nw"],
    }),
    new ModuleNpc({
      id: "npc18",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.526cj9mVkwQ9gDn6",
      page: 49,
      width: 858,
      height: 1178,
      tokenX: -250,
      tokenY: 20,
      tokenSize: 366,
      forIds: ["NDk6Njg6Njk5"],
    }),
    new ModuleNpc({
      id: "npc19",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.Y1Px08o90xG5dWTq",
      page: 51,
      width: 826,
      height: 1301,
      tokenX: -162,
      tokenY: -106,
      tokenSize: 433,
      forIds: ["NTA6OTk6OTk"],
    }),
    new ModuleNpc({
      id: "npc20",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.fxukt1qqVaQG9KcY",
      page: 55,
      width: 795,
      height: 1194,
      tokenX: -270,
      tokenY: -76,
      tokenSize: 326,
      forIds: ["NTQ6OTk6MzI3"],
    }),
    new ModuleNpc({
      id: "npc21",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.se8SrwtuaamXIEo5",
      page: 57,
      width: 863,
      height: 1175,
      tokenX: -249,
      tokenY: -187,
      tokenSize: 447,
      forIds: ["NTY6MzI2OjMzOQ"],
    }),
    new ModuleNpc({
      id: "npc22",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.uvBZm8b7Vtzn1U2d",
      page: 60,
      width: 888,
      height: 1328,
      tokenX: -215,
      tokenY: -146,
      tokenSize: 432,
      forIds: ["NjA6OTk6Njk5"],
    }),
    new ModuleNpc({
      id: "npc23",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.d7fBEPfzXSeCZZXE",
      page: 80,
      width: 889,
      height: 1178,
      tokenX: -180,
      tokenY: -147,
      tokenSize: 394,
      forIds: ["ODA6MjUxOjYwMw"],
    }),
    new ModuleNpc({
      id: "npc24",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.80tgHHqfxA5lUfjS",
      page: 81,
      width: 805,
      height: 978,
      tokenX: 80,
      tokenY: 60,
      tokenSize: 1006,
      forIds: ["ODE6Njg6NTQz"],
    }),
    new ModuleNpc({
      id: "npc25",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.htshGim6Q1y75TPt",
      page: 82,
      width: 818,
      height: 874,
      tokenX: -137,
      tokenY: -228,
      tokenSize: 594,
      forIds: ["ODI6MjUxOjU1NQ"],
    }),
    new ModuleNpc({
      id: "npc26",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.TbImjEpxYO5tsJIA",
      page: 83,
      width: 753,
      height: 861,
      tokenX: -339,
      tokenY: 73,
      tokenSize: 469,
      forIds: ["ODM6Njg6NTE5"],
    }),
    new ModuleNpc({
      id: "npc27",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.VEnxFwTAhyO03Yse",
      page: 84,
      width: 1101,
      height: 1146,
      tokenX: -383,
      tokenY: 46,
      tokenSize: 670,
      forIds: ["ODQ6MjUxOjUxOQ"],
    }),
    new ModuleNpc({
      id: "npc28",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.AeWPn9gJMgDg7WTo",
      page: 85,
      width: 921,
      height: 986,
      tokenX: -10,
      tokenY: 0,
      tokenSize: 986,
      forIds: ["ODU6Njg6NjAz"],
    }),
    new ModuleNpc({
      id: "npc29",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.Yg0lmfxyBSggOkUp",
      page: 86,
      width: 936,
      height: 910,
      tokenX: 0,
      tokenY: 13,
      tokenSize: 936,
      forIds: ["ODY6MjUxOjYyNw", "NDY6OTk6Njk5"],
    }),
    new ModuleNpc({
      id: "npc30",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.YHbBs2Jq6ukngOra",
      page: 87,
      width: 671,
      height: 809,
      tokenX: 58,
      tokenY: -141,
      tokenSize: 501,
      forIds: ["Mzg6OTk6OTk", "ODc6Njg6NjAz"],
    }),
    new ModuleNpc({
      id: "npc31",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.6z4xzi3yZuGr1Iv7",
      page: 88,
      width: 910,
      height: 892,
      tokenX: -254,
      tokenY: -46,
      tokenSize: 574,
      forIds: ["ODg6MjUxOjU3OQ"],
    }),
    new ModuleNpc({
      id: "npc32",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.g1ms3xQfS6Ws7KGD",
      page: 89,
      width: 766,
      height: 1084,
      tokenX: 159,
      tokenY: 0,
      tokenSize: 1084,
      forIds: ["ODk6Njg6NTY3"],
    }),
    new ModuleNpc({
      id: "npc34",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.IlDWyCnxA6gS2UZm",
      page: 91,
      width: 805,
      height: 1359,
      tokenX: -164,
      tokenY: -116,
      tokenSize: 435,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc35",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.Wtok8DP7ybbEJ1fB",
      label: "CL",
      forIds: ["MzA6MzI2OjQ3MQ"],
    }),
    new ModuleNpc({
      id: "npc36",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.UbXvVA3ZdSN6pj1j",
      label: "C",
      forIds: ["MjE6Njg6NjI3"],
    }),
    new ModuleNpc({
      id: "npc37",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.8U8K0YEghIErml35",
      label: "CW",
      forIds: ["Mjc6Njg6NTY3"],
    }),
    new ModuleNpc({
      id: "npc38",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.vf59nmtYaF0se9Ui",
      label: "DNP",
      forIds: ["NDM6Njg6NDk1"],
    }),
    new ModuleNpc({
      id: "npc39",
      actorUuid: "Compendium.pf2e.hazards.Actor.8gAoSgBJN8QqzP1R",
      label: "FM",
      forIds: ["NTg6OTk6NDU5"],
    }),
    new ModuleNpc({
      id: "npc40",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.ofYZYIZTkakVj2R0",
      label: "J",
      forIds: ["NDk6Mjk1OjY5OQ"],
    }),
    new ModuleNpc({
      id: "npc41",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.Ezm1FlUk4JXeqPlC",
      label: "RSD",
      forIds: ["MTY6MzQ3OjQ3MQ"],
    }),
    new ModuleNpc({
      id: "npc42",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.qW8stNdPqQwibYQz",
      label: "R",
      forIds: ["NTY6OTk6NjAz"],
    }),
    new ModuleNpc({
      id: "npc43",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.RVaEIyjBl44etuvL",
      label: "SH",
      forIds: ["NTU6Njg6Njk5"],
    }),
    new ModuleNpc({
      id: "npc44",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.IlDWyCnxA6gS2UZm",
      name: {
        page: 59,
        x: 67.5,
        y: 387,
      },
      label: "StS",
      forIds: ["NTk6Njg6Mzg3"],
    }),
    new ModuleNpc({
      id: "npc45",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.R0dyG06kbNYiCqRW",
      label: "WY",
      forIds: ["MTE6Njg6MjU1"],
    }),
    new ModuleNpc({
      id: "npc46",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.wfp1cV5xCdpElkoU",
      label: "Y",
      forIds: ["NTA6MzI2OjIwNw"],
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
          id: "OTozMTE6Njg3",
        },
        {
          id: "MjM6MzExOjY4Nw",
        },
        {
          id: "MzI6MTE1OjY4Nw",
        },
        {
          id: "MzU6MzExOjY4Nw",
        },
        {
          id: "Nzo2ODoyMzE",
        },
        {
          id: "ODozMjY6Mzc1",
        },
        {
          id: "ODozMjY6MjQz",
        },
        {
          id: "OTo2ODoyNzk",
        },
        {
          id: "MTA6OTk6OTk",
        },
        {
          id: "MTA6Mzk3OjQ5NQ",
        },
        {
          id: "MTA6MzI2Ojg3",
        },
        {
          id: "MTE6Njg6NTMx",
        },
        {
          id: "MTE6Njg6OTk",
        },
        {
          id: "MTM6Njg6NDgz",
        },
        {
          id: "MTM6Njg6Mjc5",
        },
        {
          id: "MTM6MzExOjY4Nw",
        },
        {
          id: "MTQ6OTk6MjA3",
        },
        {
          id: "MTU6Njg6MzAz",
        },
        {
          id: "MTc6Njg6NDEx",
        },
        {
          id: "MTg6OTk6MzAz",
        },
        {
          id: "MTg6MzI2OjIzMQ",
        },
        {
          id: "MTk6Njg6Njk5",
        },
        {
          id: "MTk6Mjk1OjY5OQ",
        },
        {
          id: "MjM6Mjk1OjM4Nw",
        },
        {
          id: "MjQ6MzI2OjY5OQ",
        },
        {
          id: "MjY6OTk6MzM5",
        },
        {
          id: "MjY6MzI2OjE3MQ",
        },
        {
          id: "Mjc6Njg6MzE1",
        },
        {
          id: "Mjg6OTk6NjAz",
        },
        {
          id: "Mjg6MzI2OjE0Nw",
        },
        {
          id: "MzA6OTk6NTE5",
        },
        {
          id: "MzA6OTk6MTEx",
        },
        {
          id: "MzA6MzI2OjEzNQ",
        },
        {
          id: "MzE6Njg6NTE5",
        },
        {
          id: "MzE6Njg6MzAz",
        },
        {
          id: "MzE6Mjk1OjY2Mw",
        },
        {
          id: "MzI6MzI2OjIzMQ",
        },
        {
          id: "MzM6MzYxOjYwMw",
        },
        {
          id: "MzQ6OTk6Mzc1",
        },
        {
          id: "MzU6Njg6NjM5",
        },
      ],
    },
    {
      name: "Chapter 2",
      pages: [
        {
          id: "MzY6MjU2OjM2OQ",
        },
        {
          id: "Mzc6MzcxOjY5OQ",
        },
        {
          id: "Mzc6Njg6NDQ3",
        },
        {
          id: "Mzc6Njg6MzM5",
        },
        {
          id: "Mzg6OTk6MTIz",
        },
        {
          id: "Mzg6MzI2OjI5MQ",
        },
        {
          id: "Mzk6Njg6NTQz",
        },
        {
          id: "Mzk6Mjk1OjI0Mw",
        },
        {
          id: "NDA6OTk6MTEx",
        },
        {
          id: "NDE6Njg6MzAz",
        },
        {
          id: "NDI6OTk6NjM5",
        },
        {
          id: "NDQ6MzI2OjI3OQ",
        },
        {
          id: "NDU6MzczOjUwNw",
        },
        {
          id: "NDY6MzI2OjY5OQ",
        },
        {
          id: "NDc6Njg6MzYz",
        },
        {
          id: "NDg6OTk6MzAz",
        },
        {
          id: "NDg6MzI2OjY5OQ",
        },
        {
          id: "NTE6Mjk1OjY5OQ",
        },
      ],
    },
    {
      name: "Chapter 3",
      pages: [
        {
          id: "NTI6MjU3OjM3MQ",
        },
        {
          id: "NTM6MzcxOjY5OQ",
        },
        {
          id: "NTk6MzExOjY4Nw",
        },
        {
          id: "NTM6Njg6NTkx",
        },
        {
          id: "NTc6Mjk1OjY5OQ",
        },
        {
          id: "NTg6OTk6Njk5",
        },
        {
          id: "NTg6OTk6NDEx",
        },
        {
          id: "NTg6OTk6Mjkx",
        },
        {
          id: "NTg6MzI2OjU5MQ",
        },
        {
          id: "NTg6MzI2OjQxMQ",
        },
        {
          id: "NTk6Njg6NjM5",
        },
        {
          id: "NTk6Mjk1OjQ1OQ",
        },
        {
          id: "NjE6Njg6NDM1",
        },
        {
          id: "NjE6Njg6MjA3",
        },
      ],
    },
    {
      name: "Back Matter",
      pages: [
        {
          id: "NjM6MjE1OjY1OQ",
        },
        {
          id: "Njk6ODA6NjQ5",
        },
        {
          id: "Njk6Njg6MzUx",
        },
        {
          id: "NzA6OTk6Njg2",
        },
        {
          id: "NzA6MzI2OjU3OQ",
        },
        {
          id: "NzA6MzI2OjIzMQ",
        },
        {
          id: "NzE6Njg6Njk5",
        },
        {
          id: "NzE6Njg6MTgz",
        },
        {
          id: "NzE6Mjk1OjU5MQ",
        },
        {
          id: "NzI6OTk6Njk5",
        },
        {
          id: "NzI6MzI2OjYwMw",
        },
        {
          id: "NzI6MzI2OjMwMw",
        },
        {
          id: "NzM6Njg6Njk5",
        },
        {
          id: "NzM6Njg6MjE5",
        },
        {
          id: "NzM6Mjk1OjI0Mw",
        },
        {
          id: "NzU6MTMyOjY1OA",
        },
        {
          id: "NzU6Njg6Mzc1",
        },
        {
          id: "NzU6Njg6MTk1",
        },
        {
          id: "NzY6OTk6Njk5",
        },
        {
          id: "Nzc6Njg6Njk5",
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
          id: "ODc6Njg6Njk5",
        },
        {
          id: "ODg6MjUxOjY5OQ",
        },
        {
          id: "ODk6Njg6Njk5",
        },
        {
          id: "OTA6ODg6NjY4",
        },
        {
          id: "OTA6OTk6MjU1",
        },
        {
          id: "OTI6MTM2OjY2Ng",
        },
        {
          id: "OTI6MzI2OjIxOQ",
        },
        {
          id: "Njk6MzExOjUzMQ",
        },
        {
          id: "ODA6MTQxOjY2Mw",
        },
        {
          id: "ODE6MzcxOjY2Mw",
        },
        {
          id: "ODI6MTQwOjY2Mw",
        },
        {
          id: "ODM6MzcxOjY2Mw",
        },
        {
          id: "ODQ6MTIxOjY2Mw",
        },
        {
          id: "ODU6MzcxOjY2Mw",
        },
        {
          id: "ODY6MTQwOjY2Mw",
        },
        {
          id: "ODc6MzcxOjY2Mw",
        },
        {
          id: "ODg6MTYxOjY2Mw",
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
      ],
    },
  ];
  combines = [];
  detect(pdf) {
    return (
      pdf.textDetails.some(
        (t) => t.text.trim() === "King of the" && t.fontId === "Gin-Regular:40",
      ) &&
      !pdf.textDetails.some(
        (t) =>
          t.text.trim() === "INTERACTIVE MAPS" && t.fontName === "Dax-Bold",
      )
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    return super.extractDetails(text, moduleData, sectionKey);
  }
}
