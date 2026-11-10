import { QuestForTheFrozenFlameBase } from "./base.js";
import { AdventureImage, LabelImage } from "../../core/images.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class QuestForTheFrozenFlame3 extends QuestForTheFrozenFlameBase {
  prefix = "quest-for-the-frozen-flame3";
  fullName = "The Quest for the Frozen Flame - Burning Tundra";
  pages = [
    this.ChapterHeadingPageLayout(6),
    this.RightSingleColumnWithSidebar(7),
    this.LeftTwoColumn(8),
    this.RightTwoColumn(9),
    this.LeftTwoColumn(10),
    this.RightTwoColumnWithRightCutout(11, 320),
    this.LeftTwoColumn(12),
    this.RightTwoColumn(13),
    this.LeftTwoColumn(14),
    this.RightTwoColumn(15),
    this.LeftTwoColumn(16),
    this.RightTwoColumn(17),
    this.LeftTwoColumn(18),
    this.RightTwoColumn(19),
    this.LeftTwoColumn(20),
    this.RightTwoColumn(21),
    this.LeftTwoColumnWithMap(22, 340),
    this.RightTwoColumn(23),
    this.LeftTwoColumn(24),
    this.RightTwoColumn(25),
    this.LeftTwoColumn(26),
    this.RightTwoColumn(27),
    this.ChapterHeadingPageLayout(28),
    this.RightSingleColumnWithSidebar(29),
    this.LeftTwoColumnWithMap(30, 340),
    this.RightTwoColumnWithRightCutout(31, 160),
    this.LeftTwoColumn(32),
    this.RightTwoColumn(33),
    this.LeftTwoColumnWithLeftCutout(34, 450),
    this.RightTwoColumn(35),
    this.LeftTwoColumn(36),
    this.RightTwoColumn(37),
    this.LeftTwoColumnWithMap(38, 340),
    this.RightTwoColumn(39),
    this.LeftTwoColumn(40),
    this.RightTwoColumn(41),
    this.LeftTwoColumn(42),
    this.RightTwoColumn(43),
    this.LeftTwoColumn(44),
    this.RightTwoColumn(45),
    this.LeftTwoColumn(46),
    this.RightTwoColumn(47),
    this.ChapterHeadingPageLayout(48),
    this.RightSingleColumnWithSidebar(49),
    this.LeftTwoColumnWithLeftCutout(50, 480),
    this.RightTwoColumn(51),
    this.LeftTwoColumn(52),
    this.RightTwoColumn(53),
    this.LeftTwoColumn(54),
    this.RightTwoColumn(55),
    this.LeftTwoColumn(56),
    this.RightTwoColumn(57),
    this.LeftTwoColumn(58),
    this.RightTwoColumn(59),
    this.LeftTwoColumn(60),
    this.RightTwoColumn(61),
    this.RightChapterHeadingPageLayout(63),
    this.LeftTwoColumn(64),
    this.RightTwoColumn(65),
    this.RightChapterHeadingPageLayout(67),
    this.LeftTwoColumnWithLeftCutout(68, 412),
    this.RightTwoColumn(69),
    this.LeftTwoColumn(70),
    this.RightTwoColumn(71),
    this.LeftTwoColumn(72),
    this.RightTwoColumn(73),
    this.RightChapterHeadingPageLayout(75),
    this.LeftTwoColumn(76),
    this.RightTwoColumn(77),
    this.LeftTwoColumn(78),
    this.RightTwoColumn(79),
    this.LeftTwoColumn(80),
    this.RightTwoColumnWithRightCutout(81, 500),
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
        name: "qff3/map1",
        priority: 0,
      },
      nameInfo: {
        x: 44.6638,
        y: 68.156,
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
      rotateCW: 3,
      detailsFile: "/qff/maps/qff3-map1.json",
    }),
    new ModuleScene({
      name: "map2a",
      canonical: {
        name: "qff3/map2a",
        priority: 0,
      },
      nameInfo: {
        x: 99,
        y: 389.6681,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 22,
      width: 1259,
      height: 858,
      imageLeft: 26,
      imageRight: 1240,
      imageCols: 44,
      imageTop: 12,
      imageBottom: 839,
      imageRows: 30,
      cropLeft: 0,
      cropRight: 484,
      cropTop: 0,
      cropBottom: 858,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/qff/maps/qff3-map2a.json",
      journals: [
        {
          x: 450,
          y: 850,
          id: "MjE6Mjk1OjQxMQ",
        },
      ],
      tokens: [
        {
          id: "npc49",
          x: 1300,
          y: 1600,
        },
        {
          id: "npc49",
          x: 1400,
          y: 2100,
        },
        {
          id: "npc49",
          x: 1400,
          y: 2500,
        },
      ],
    }),
    new ModuleScene({
      name: "map2b",
      canonical: {
        name: "qff3/map2b",
        priority: 0,
      },
      nameInfo: {
        x: 241,
        y: 375,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 22,
      width: 1259,
      height: 858,
      imageLeft: 26,
      imageRight: 1240,
      imageCols: 44,
      imageTop: 12,
      imageBottom: 839,
      imageRows: 30,
      cropLeft: 499,
      cropRight: 819,
      cropTop: 0,
      cropBottom: 858,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/qff/maps/qff3-map2b.json",
      journals: [
        {
          x: 350,
          y: 850,
          id: "MjI6OTk6MzM5",
        },
      ],
      tokens: [
        {
          id: "npc7",
          x: 600,
          y: 2200,
        },
        {
          id: "npc7",
          x: 600,
          y: 2500,
        },
      ],
    }),
    new ModuleScene({
      name: "map2c",
      canonical: {
        name: "qff3/map2c",
        priority: 0,
      },
      nameInfo: {
        x: 408.5,
        y: 726.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 22,
      width: 1259,
      height: 858,
      imageLeft: 26,
      imageRight: 1240,
      imageCols: 44,
      imageTop: 12,
      imageBottom: 839,
      imageRows: 30,
      cropLeft: 833,
      cropRight: 1259,
      cropTop: 0,
      cropBottom: 858,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/qff/maps/qff3-map2c.json",
      journals: [
        {
          x: 550,
          y: 850,
          id: "MjM6Njg6NDk1",
        },
      ],
      tokens: [
        {
          id: "npc39",
          x: 600,
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
      name: "map3",
      canonical: {
        name: "qff3/map3",
        priority: 0,
      },
      nameInfo: {
        x: 30.1458,
        y: 750.0021,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 30,
      width: 1259,
      height: 880,
      imageLeft: 40,
      imageRight: 1190,
      imageCols: 14,
      imageTop: 55,
      imageBottom: 838,
      imageRows: 11,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      gridType: "hexcolumn",
      gridDistance: 12,
      gridUnits: "mi",
      gridSize: 400,
      detailsFile: "/qff/maps/qff3-map3.json",
      journals: [
        {
          x: 2079.21,
          y: 2e3,
          id: "MzY6MzI2OjI2Nw",
        },
        {
          x: 866.21,
          y: 1100,
          id: "MzM6Nzk6MTIz",
        },
        {
          x: 3811.21,
          y: 3200,
          id: "Mzg6OTk6MTgz",
        },
        {
          x: 4677.21,
          y: 1700,
          id: "Mzk6Mjk1OjI3OQ",
        },
        {
          x: 2945.21,
          y: 3500,
          id: "NDI6OTk6Mzk5",
        },
        {
          x: 3811.21,
          y: 3800,
          id: "NDM6Njg6MTM1",
        },
        {
          x: 3811.21,
          y: 4400,
          id: "NDU6MzQ3OjU1NQ",
        },
      ],
      tokens: [],
    }),
    new ModuleScene({
      name: "map4a",
      canonical: {
        name: "qff3/map4a",
        priority: 0,
      },
      nameInfo: {
        x: 99,
        y: 389.6681,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 38,
      width: 1195,
      height: 858,
      imageLeft: 28,
      imageRight: 1187,
      imageCols: 42,
      imageTop: 11,
      imageBottom: 838,
      imageRows: 30,
      cropLeft: 0,
      cropRight: 434,
      cropTop: 0,
      cropBottom: 858,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/qff/maps/qff3-map4a.json",
      journals: [
        {
          x: 450,
          y: 850,
          id: "Mzg6OTk6MTgz",
        },
      ],
      tokens: [
        {
          id: "hazard2",
          x: 1100,
          y: 1800,
        },
        {
          id: "npc13",
          x: 1300,
          y: 1900,
        },
      ],
    }),
    new ModuleScene({
      name: "map4b",
      canonical: {
        name: "qff3/map4b",
        priority: 0,
      },
      nameInfo: {
        x: 252,
        y: 375,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 38,
      width: 1195,
      height: 858,
      imageLeft: 28,
      imageRight: 1187,
      imageCols: 42,
      imageTop: 11,
      imageBottom: 838,
      imageRows: 30,
      cropLeft: 446,
      cropRight: 851,
      cropTop: 0,
      cropBottom: 858,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/qff/maps/qff3-map4b.json",
      journals: [
        {
          x: 450,
          y: 850,
          id: "NDI6OTk6Mzk5",
        },
      ],
      tokens: [
        {
          id: "npc35",
          x: 700,
          y: 1500,
        },
        {
          id: "npc35",
          x: 700,
          y: 2300,
        },
        {
          id: "npc15",
          x: 1300,
          y: 1800,
        },
      ],
    }),
    new ModuleScene({
      name: "map4c",
      canonical: {
        name: "qff3/map4c",
        priority: 0,
      },
      nameInfo: {
        x: 453,
        y: 375,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 38,
      width: 1195,
      height: 858,
      imageLeft: 28,
      imageRight: 1187,
      imageCols: 42,
      imageTop: 11,
      imageBottom: 838,
      imageRows: 30,
      cropLeft: 864,
      cropRight: 1195,
      cropTop: 0,
      cropBottom: 858,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/qff/maps/qff3-map4c.json",
      journals: [
        {
          x: 350,
          y: 850,
          id: "NDU6MzQ3OjU1NQ",
        },
      ],
      tokens: [
        {
          id: "npc17",
          x: 700,
          y: 1100,
        },
      ],
    }),
    new ModuleScene({
      name: "map5",
      canonical: {
        name: "qff3/map5",
        priority: 0,
      },
      nameInfo: {
        x: 641,
        y: 51.0162,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 99,
      width: 1262,
      height: 1637,
      imageIndex: 1,
      imageLeft: 13,
      imageRight: 1224,
      imageCols: 29,
      imageTop: 33,
      imageBottom: 1619,
      imageRows: 38,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/qff/maps/qff3-map5.json",
      journals: [
        {
          x: 650,
          y: 1050,
          id: "NDk6MTI3OjM1MQ",
        },
        {
          x: 650,
          y: 1150,
          id: "NTA6OTk6Mjkx",
        },
        {
          x: 650,
          y: 1250,
          id: "NTA6MzI2OjY2Mw",
        },
        {
          x: 1800,
          y: 2450,
          id: "NTA6MzI2OjM3NQ",
        },
        {
          x: 2150,
          y: 2450,
          id: "NTE6Njg6MjMx",
        },
        {
          x: 1900,
          y: 2200,
          id: "NTE6Njg6MTQ3",
        },
        {
          x: 2450,
          y: 2150,
          id: "NTI6OTk6MzAz",
        },
        {
          x: 1950,
          y: 2750,
          id: "NTI6MzI2OjQxMQ",
        },
        {
          x: 2700,
          y: 2400,
          id: "NTM6Njg6MzI3",
        },
        {
          x: 2150,
          y: 3350,
          id: "NTM6Njg6MjMx",
        },
        {
          x: 2200,
          y: 4100,
          id: "NTM6Mjk1OjY5OQ",
        },
        {
          x: 2550,
          y: 3850,
          id: "NTU6Mjk1OjI5MQ",
        },
        {
          x: 1800,
          y: 4400,
          id: "NTY6OTk6NjM5",
        },
        {
          x: 2600,
          y: 4500,
          id: "NTY6OTk6Mzc1",
        },
        {
          x: 1350,
          y: 3450,
          id: "NTY6OTk6Mjc5",
        },
        {
          x: 2850,
          y: 3500,
          id: "NTY6OTk6MTU5",
        },
        {
          x: 3050,
          y: 2950,
          id: "NTY6MzI2OjUzMQ",
        },
        {
          x: 2150,
          y: 1650,
          id: "NTg6OTk6NDgz",
        },
        {
          x: 1350,
          y: 1350,
          id: "NTg6MzI2OjI3OQ",
        },
        {
          x: 2950,
          y: 1350,
          id: "NjA6OTk6NDU5",
        },
      ],
      tokens: [
        {
          id: "npc42",
          x: 1200,
          y: 1400,
        },
        {
          id: "npc42",
          x: 1300,
          y: 1400,
        },
        {
          id: "npc42",
          x: 1400,
          y: 1400,
        },
        {
          id: "npc24",
          x: 1200,
          y: 1200,
        },
        {
          id: "npc23",
          x: 1900,
          y: 1600,
        },
        {
          id: "npc23",
          x: 2100,
          y: 1400,
        },
        {
          id: "npc23",
          x: 2200,
          y: 1500,
        },
        {
          id: "npc43",
          x: 2100,
          y: 1700,
        },
        {
          id: "npc33",
          x: 3100,
          y: 1300,
        },
        {
          id: "npc25",
          x: 2700,
          y: 1100,
        },
        {
          id: "npc50",
          x: 1700,
          y: 2e3,
        },
        {
          id: "npc50",
          x: 1900,
          y: 2e3,
        },
        {
          id: "npc50",
          x: 2e3,
          y: 2e3,
        },
        {
          id: "npc50",
          x: 2e3,
          y: 2100,
        },
        {
          id: "npc50",
          x: 1900,
          y: 2200,
        },
        {
          id: "npc38",
          x: 1700,
          y: 2100,
        },
        {
          id: "npc19",
          x: 1700,
          y: 2500,
        },
        {
          id: "npc19",
          x: 1700,
          y: 2300,
        },
        {
          id: "hazard3",
          x: 1500,
          y: 2100,
        },
        {
          id: "hazard3",
          x: 1600,
          y: 2700,
        },
        {
          id: "npc20",
          x: 2300,
          y: 2e3,
        },
        {
          id: "hazard1",
          x: 1900,
          y: 2800,
        },
        {
          id: "npc48",
          x: 2100,
          y: 3200,
        },
        {
          id: "npc48",
          x: 2100,
          y: 3400,
        },
        {
          id: "npc48",
          x: 2100,
          y: 3600,
        },
        {
          id: "npc21",
          x: 1900,
          y: 4e3,
        },
        {
          id: "npc21",
          x: 2100,
          y: 3900,
        },
        {
          id: "npc21",
          x: 2300,
          y: 4500,
        },
        {
          id: "npc21",
          x: 2500,
          y: 4200,
        },
        {
          id: "npc22",
          x: 2200,
          y: 4300,
        },
        {
          id: "npc41",
          x: 1700,
          y: 4400,
        },
        {
          id: "npc34",
          x: 3e3,
          y: 2800,
        },
      ],
    }),
  ];
  journals = [
    new AdventureImage({
      name: "journal1",
      page: 3,
      width: 840,
      height: 411,
    }),
    new AdventureImage({
      name: "journal2",
      page: 6,
      width: 1243,
      height: 844,
    }),
    new AdventureImage({
      name: "journal3",
      page: 28,
      width: 1247,
      height: 849,
    }),
    new LabelImage({
      name: "journal4",
      page: 34,
      width: 520,
      height: 305,
      label: "MzQ6MjY5OjMyNg",
    }),
    new LabelImage({
      name: "journal5",
      page: 47,
      width: 709,
      height: 1201,
      label: "NDc6MzU4OjEzOA",
    }),
    new AdventureImage({
      name: "journal6",
      page: 48,
      width: 1246,
      height: 848,
    }),
    new AdventureImage({
      name: "journal7",
      page: 62,
      width: 1261,
      height: 1636,
    }),
    new LabelImage({
      name: "journal8",
      page: 65,
      width: 853,
      height: 1211,
      label: "NjU6MzE2Ojk0",
    }),
    new AdventureImage({
      name: "journal9",
      page: 66,
      width: 1259,
      height: 1636,
    }),
    new LabelImage({
      name: "journal10",
      page: 69,
      width: 550,
      height: 550,
      label: "Njk6MjI5OjQzMQ",
    }),
    new LabelImage({
      name: "journal11",
      page: 71,
      width: 498,
      height: 498,
      label: "NzE6MjQ1OjQzNw",
    }),
    new LabelImage({
      name: "journal12",
      page: 73,
      width: 907,
      height: 1130,
      label: "NzM6MzgzOjExOQ",
    }),
    new AdventureImage({
      name: "journal13",
      page: 74,
      width: 1259,
      height: 1636,
    }),
    new LabelImage({
      name: "journal14",
      page: 76,
      width: 393,
      height: 426,
      label: "NzY6MjQ2OjMxMA",
    }),
    new LabelImage({
      name: "journal15",
      page: 77,
      width: 517,
      height: 380,
      label: "Nzc6MjUyOjM2Mg",
    }),
    new LabelImage({
      name: "journal16",
      page: 79,
      width: 846,
      height: 809,
      label: "Nzk6MzYyOjgy",
    }),
    new LabelImage({
      name: "journal17",
      page: 80,
      width: 997,
      height: 817,
      label: "ODA6MjI5Ojk0",
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.8qtTf1FvvBrcEypA",
      page: 9,
      width: 624,
      height: 1094,
      tokenX: -83,
      tokenY: 78,
      tokenSize: 422,
      forIds: ["OTo2ODo2OTk"],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 10,
        x: 301.6749,
        y: 448.2971,
      },
      page: 10,
      width: 509,
      height: 509,
      tokenX: 49,
      tokenY: 75,
      tokenSize: 621,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.3qDYEHtyAobpCg5r",
      name: {
        page: 13,
        x: 349.8129,
        y: 154.2971,
      },
      page: 13,
      width: 768,
      height: 1139,
      tokenX: -205,
      tokenY: 11,
      tokenSize: 411,
      forIds: ["MTQ6OTk6Mzk5"],
    }),
    new ModuleNpc({
      id: "npc4",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 15,
        x: 244.5054,
        y: 448.9221,
      },
      page: 15,
      width: 448,
      height: 448,
      tokenX: 90,
      tokenY: 103,
      tokenSize: 588,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc5",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 16,
        x: 306.8806,
        y: 458.9221,
      },
      page: 16,
      width: 495,
      height: 495,
      tokenX: 35,
      tokenY: 77,
      tokenSize: 579,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc6",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 18,
        x: 193.6175,
        y: 139.9221,
      },
      page: 18,
      width: 826,
      height: 1128,
      tokenX: -186,
      tokenY: 57,
      tokenSize: 372,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc7",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.EyyCB9QBJKpsap5b",
      page: 23,
      width: 799,
      height: 1212,
      tokenX: -84,
      tokenY: 73,
      tokenSize: 484,
      forIds: ["MjI6OTk6MTEx"],
    }),
    new ModuleNpc({
      id: "npc8",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.893mp411SdYren3H",
      name: {
        page: 24,
        x: 326.25,
        y: 171,
      },
      page: 24,
      width: 787,
      height: 1250,
      tokenX: -93,
      tokenY: -87,
      tokenSize: 466,
      forIds: ["MjQ6MzI2OjE3MQ"],
    }),
    new ModuleNpc({
      id: "npc9",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-3.Actor.an7tww93Y4pQ8HP6",
      name: {
        page: 32,
        x: 172.3487,
        y: 142.2971,
      },
      page: 32,
      width: 753,
      height: 1275,
      tokenX: -116,
      tokenY: -177,
      tokenSize: 435,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc10",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 34,
        x: 269.1073,
        y: 326.3596,
      },
      page: 34,
      width: 520,
      height: 305,
      tokenX: 9,
      tokenY: 126,
      tokenSize: 520,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc11",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.anIBNgbHN3jG4iph",
      page: 35,
      width: 878,
      height: 909,
      tokenX: -157,
      tokenY: 69,
      tokenSize: 965,
      forIds: ["MzU6Njg6Mjkx"],
    }),
    new ModuleNpc({
      id: "npc12",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-3.Actor.Pnw71fJ41j6Wx62M",
      name: {
        page: 37,
        x: 323.4474,
        y: 134.7971,
      },
      page: 37,
      width: 894,
      height: 716,
      tokenX: -119,
      tokenY: 126,
      tokenSize: 642,
      forIds: ["Mzc6Njg6NDQ3"],
    }),
    new ModuleNpc({
      id: "npc13",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.tpNP1UooPPHMyZye",
      name: {
        page: 40,
        x: 117.0362,
        y: 136.2971,
      },
      page: 40,
      width: 769,
      height: 1081,
      tokenX: 126,
      tokenY: 105,
      tokenSize: 1053,
      forIds: ["Mzk6Mjk1OjU1NQ"],
    }),
    new ModuleNpc({
      id: "npc14",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.vQXmk2oNlfVsYK0P",
      name: {
        page: 41,
        x: 316.5975,
        y: 142.9221,
      },
      page: 41,
      width: 905,
      height: 1196,
      tokenX: -332,
      tokenY: 9,
      tokenSize: 440,
      forIds: ["NDA6MzI2OjU2Nw"],
    }),
    new ModuleNpc({
      id: "npc15",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.kxO7gXbpcmY1pi7p",
      page: 43,
      width: 810,
      height: 1111,
      tokenX: -211,
      tokenY: 69,
      tokenSize: 523,
      forIds: ["NDI6MzI2OjY1MQ"],
    }),
    new ModuleNpc({
      id: "npc16",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.rdgs2gxTWxkyanD6",
      name: {
        page: 45,
        x: 238.6178,
        y: 424.2971,
      },
      page: 45,
      width: 552,
      height: 552,
      tokenX: 59,
      tokenY: 81,
      tokenSize: 664,
      forIds: ["NDU6Njg6NTQz"],
    }),
    new ModuleNpc({
      id: "npc17",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-3.Actor.zGtfiKku0td5E0VJ",
      page: 46,
      width: 797,
      height: 1061,
      tokenX: -130,
      tokenY: 26,
      tokenSize: 725,
      forIds: ["NDY6MzI2OjY5OQ"],
    }),
    new ModuleNpc({
      id: "npc18",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 47,
        x: 357.6566,
        y: 137.7971,
      },
      page: 47,
      width: 709,
      height: 1201,
      tokenX: 5,
      tokenY: 91,
      tokenSize: 697,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc19",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.MCgSMT680ic6kr5k",
      name: {
        page: 51,
        x: 335.9055,
        y: 106.9221,
      },
      page: 51,
      width: 765,
      height: 1298,
      tokenX: -127,
      tokenY: -64,
      tokenSize: 430,
      forIds: ["NTA6MzI2Ojk5"],
    }),
    new ModuleNpc({
      id: "npc20",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.BRo0snV2sH6TFuh6",
      name: {
        page: 52,
        x: 99,
        y: 99,
      },
      page: 52,
      width: 561,
      height: 561,
      tokenX: 18,
      tokenY: 58,
      tokenSize: 645,
      forIds: ["NTI6OTk6OTk"],
    }),
    new ModuleNpc({
      id: "npc21",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.vEfQXwx3qetnYcSI",
      page: 53,
      width: 778,
      height: 1319,
      tokenX: -114,
      tokenY: -187,
      tokenSize: 479,
      forIds: ["NTQ6MzI2OjYwMw"],
    }),
    new ModuleNpc({
      id: "npc22",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.hNHljzF0xpUBKiA9",
      page: 54,
      width: 784,
      height: 1336,
      tokenX: -177,
      tokenY: -182,
      tokenSize: 440,
      forIds: ["NTQ6MzM3OjExMQ"],
    }),
    new ModuleNpc({
      id: "npc23",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.QdDoqb0RSy1Mer5Q",
      page: 57,
      width: 932,
      height: 1040,
      tokenX: -158,
      tokenY: -79,
      tokenSize: 564,
      forIds: ["NTg6OTk6MTU5"],
    }),
    new ModuleNpc({
      id: "npc24",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.QC2noL9T0y8Ny5eU",
      page: 59,
      width: 730,
      height: 1219,
      tokenX: -131,
      tokenY: -163,
      tokenSize: 407,
      forIds: ["NTk6Njg6NDEx"],
    }),
    new ModuleNpc({
      id: "npc25",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.ZKxZgklb78PULu10",
      page: 61,
      width: 832,
      height: 1257,
      tokenX: -30,
      tokenY: 54,
      tokenSize: 753,
      forIds: ["NjA6MzI2OjU3OQ"],
    }),
    new ModuleNpc({
      id: "npc26",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 65,
        x: 316.4192,
        y: 94.2971,
      },
      page: 65,
      width: 853,
      height: 1211,
      tokenX: -179,
      tokenY: -89,
      tokenSize: 483,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc27",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.B7O9nFwhHMmCWbQg",
      page: 82,
      width: 659,
      height: 1061,
      tokenX: -145,
      tokenY: 85,
      tokenSize: 417,
      forIds: ["ODI6Mjc3OjQ5NQ"],
    }),
    new ModuleNpc({
      id: "npc28",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.RuVQUpUOLAE2x2tY",
      page: 84,
      width: 769,
      height: 875,
      tokenX: 71,
      tokenY: 42,
      tokenSize: 987,
      forIds: ["ODQ6MzUyOjQxMQ", "Mzc6Njg6NjI3"],
    }),
    new ModuleNpc({
      id: "npc29",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.wuV8k7N1cEJBYNbK",
      page: 85,
      width: 872,
      height: 951,
      tokenX: 67,
      tokenY: 233,
      tokenSize: 867,
      forIds: ["ODU6Njg6NTY3"],
    }),
    new ModuleNpc({
      id: "npc30",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.Z637TaszmZsJTmBZ",
      page: 86,
      width: 630,
      height: 1008,
      tokenX: -118,
      tokenY: 107,
      tokenSize: 504,
      forIds: ["ODY6MjcxOjQ0Nw"],
    }),
    new ModuleNpc({
      id: "npc31",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.HCtfUGao82L0sVBo",
      page: 87,
      width: 909,
      height: 1059,
      tokenX: -4,
      tokenY: 39,
      tokenSize: 947,
      forIds: ["ODc6Njg6NDgz"],
    }),
    new ModuleNpc({
      id: "npc32",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.7yanFrY21w21ZNFP",
      page: 89,
      width: 746,
      height: 1211,
      tokenX: -223,
      tokenY: -163,
      tokenSize: 567,
      forIds: ["ODg6MzI2OjEyMw"],
    }),
    new ModuleNpc({
      id: "npc33",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.UGB689LLMK5Vi0Nc",
      page: 91,
      width: 786,
      height: 1111,
      tokenX: -200,
      tokenY: -54,
      tokenSize: 411,
      forIds: ["OTE6Njg6NjE1", "NjA6MzI2OjYyNw"],
    }),
    new ModuleNpc({
      id: "npc34",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.nBoysLyDYIZaaAHP",
      page: 93,
      width: 696,
      height: 1221,
      tokenX: -98,
      tokenY: -19,
      tokenSize: 493,
      forIds: ["OTM6Njg6Njk5", "NTc6Njg6OTk"],
    }),
    new ModuleNpc({
      id: "npc35",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.cnTAIcjKu01I7eJ0",
      label: "ATT",
      forIds: ["MzM6Mjk1OjYyNw", "NDI6MzI2OjY5OQ"],
    }),
    new ModuleNpc({
      id: "npc36",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-3.Actor.5WAy9PYWu1PuQKXg",
      label: "CSS",
      forIds: ["NTY6MzI2OjYzOQ"],
    }),
    new ModuleNpc({
      id: "npc37",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.wuV8k7N1cEJBYNbK",
      name: {
        page: 15,
        x: 67.5,
        y: 159,
      },
      label: "W",
      forIds: ["MTU6Njg6MTU5"],
      weak: true,
    }),
    new ModuleNpc({
      id: "npc38",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.ZGEf08j9q4fIPDFd",
      label: "DW",
      forIds: ["NTI6OTk6NDcx"],
    }),
    new ModuleNpc({
      id: "npc39",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.VA2L044R2WXupQl4",
      label: "GA",
      forIds: ["MjM6Njg6MTk1"],
    }),
    new ModuleNpc({
      id: "npc40",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.TlYG0Hyxh7gI7Jd8",
      label: "GA",
      forIds: ["MjE6Njg6MTgz"],
    }),
    new ModuleNpc({
      id: "npc41",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.wqiFcGPARy8zmQfd",
      label: "H",
      forIds: ["NTY6OTk6NDIz"],
    }),
    new ModuleNpc({
      id: "npc42",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.vEfQXwx3qetnYcSI",
      name: {
        page: 59,
        x: 67.5,
        y: 471,
        substring: {
          start: 0,
          end: 15,
        },
      },
      label: "BMC",
      forIds: ["NTk6Njg6NDcx"],
      elite: true,
    }),
    new ModuleNpc({
      id: "npc43",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.jQ7zBVDCEhuMOOTl",
      label: "N",
      forIds: ["NTg6MzI2OjMyNw"],
    }),
    new ModuleNpc({
      id: "npc44",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 24,
        x: 326.25,
        y: 99,
      },
      label: "C",
      forIds: ["MjQ6MzI2Ojk5"],
    }),
    new ModuleNpc({
      id: "npc45",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.yAYQeZI1W7XGeoMf",
      label: "RW",
      forIds: ["MTQ6OTk6MzM5"],
    }),
    new ModuleNpc({
      id: "npc46",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.vQXmk2oNlfVsYK0P",
      label: "SHQ",
      forIds: ["ODM6Njg6NTc5"],
    }),
    new ModuleNpc({
      id: "npc47",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.L3PGythRjyCdM322",
      label: "TZP",
      forIds: ["ODY6MjUxOjE0Nw", "Mzc6Njg6NTc5"],
    }),
    new ModuleNpc({
      id: "npc48",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.4cPw8hZwW6uvyzvh",
      label: "V",
      forIds: ["NTM6Njg6OTk"],
    }),
    new ModuleNpc({
      id: "npc49",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.893mp411SdYren3H",
      label: "FG",
      forIds: ["MjE6Mjk1Ojk5"],
      weak: true,
    }),
    new ModuleNpc({
      id: "npc50",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.Gu0cJHGwPd547OtC",
      label: "W",
      forIds: ["NTI6OTk6NTE5"],
    }),
    new ModuleNpc({
      id: "hazard1",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.lXpZF3gFjkXz6Eua",
      label: "HOFD",
      forIds: ["NTI6MzI2OjEzNQ"],
    }),
    new ModuleNpc({
      id: "hazard2",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.5huE8GHx2GRJDBx0",
      label: "SR",
      forIds: ["Mzk6Njg6Mzg3"],
    }),
    new ModuleNpc({
      id: "hazard3",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.tKCrebehC0sHvvE2",
      label: "SA",
      forIds: ["NTE6Njg6NTc5"],
    }),
    new ModuleNpc({
      id: "hazard4",
      actorUuid:
        "Compendium.pf2e.quest-for-the-frozen-flame-bestiary.Actor.kJlIPynpcH61F9Am",
      label: "TP",
      forIds: ["MzY6OTk6Njk5"],
    }),
  ];
  journalPages = [
    {
      name: "Chapter 1",
      pages: [
        {
          id: "NjoyNDU6MzQx",
        },
        {
          id: "NzozNzE6Njk5",
        },
        {
          id: "MTE6MzExOjY5OQ",
        },
        {
          id: "NzoxMzM6NTc5",
        },
        {
          id: "Nzo2ODo0MzU",
        },
        {
          id: "ODo5OTo1NTU",
        },
        {
          id: "ODoxNTQ6MTIz",
        },
        {
          id: "ODozMjY6NjM5",
        },
        {
          id: "MTA6OTk6NTMx",
        },
        {
          id: "MTE6Njg6MjE5",
        },
        {
          id: "MTE6Mjk1Ojk5",
        },
        {
          id: "MTI6MzM0OjI3OQ",
        },
        {
          id: "MTM6Njg6Njk5",
        },
        {
          id: "MTQ6MzI2OjYyNw",
        },
        {
          id: "MTU6Mjk1OjM3NQ",
        },
        {
          id: "MTY6MzI2OjM4Nw",
        },
        {
          id: "MTc6Njg6NDEx",
        },
        {
          id: "MTg6MzI2OjYxNQ",
        },
        {
          id: "MTk6MTA2OjQ5NQ",
        },
        {
          id: "MTk6Mjk1OjM2Mw",
        },
        {
          id: "MjA6OTk6ODc",
        },
        {
          id: "MjA6MzI2OjMzOQ",
        },
        {
          id: "MjE6Njg6Mzk5",
        },
        {
          id: "MjE6Mjk1OjQxMQ",
        },
        {
          id: "MjI6OTk6MzM5",
        },
        {
          id: "MjM6Njg6NDk1",
        },
        {
          id: "MjQ6MzI2OjYxNQ",
        },
        {
          id: "MjU6OTY6NjYz",
        },
        {
          id: "MjU6Mjk1OjY5OQ",
        },
        {
          id: "Mjc6Njg6Njk5",
        },
        {
          id: "Mjc6Njg6MzUx",
        },
      ],
    },
    {
      name: "Chapter 2",
      pages: [
        {
          id: "Mjg6MjQ0OjMyOA",
        },
        {
          id: "Mjk6MzcxOjY5OQ",
        },
        {
          id: "MzE6MzExOjY5OQ",
        },
        {
          id: "Mjk6ODk6Njk5",
        },
        {
          id: "Mjk6Njg6NDgz",
        },
        {
          id: "Mjk6Njg6Mzc1",
        },
        {
          id: "MzA6OTk6MTM1",
        },
        {
          id: "MzA6MzI2OjMzOQ",
        },
        {
          id: "MzE6Njg6NTY3",
        },
        {
          id: "MzE6Njg6MjU1",
        },
        {
          id: "MzE6Mjk1OjE1OQ",
        },
        {
          id: "MzI6MzMwOjUzMQ",
        },
        {
          id: "MzI6MzQxOjMzOQ",
        },
        {
          id: "MzM6Njg6Njk5",
        },
        {
          id: "MzM6Njg6NDQ3",
        },
        {
          id: "MzM6Nzk6MTIz",
        },
        {
          id: "MzY6MzU5OjMxNQ",
        },
        {
          id: "MzY6MzI2OjI2Nw",
        },
        {
          id: "Mzg6OTk6MTgz",
        },
        {
          id: "Mzk6Mjk1OjI3OQ",
        },
        {
          id: "NDI6OTk6Mzk5",
        },
        {
          id: "NDM6Njg6MTM1",
        },
        {
          id: "NDU6MzQ3OjU1NQ",
        },
        {
          id: "NDY6MzUzOjYwMw",
        },
        {
          id: "NDc6MzQwOjY5OQ",
        },
        {
          id: "MzQ6MTE1OjY5OQ",
        },
      ],
    },
    {
      name: "Chapter 3",
      pages: [
        {
          id: "NDg6MjQ0OjMzMA",
        },
        {
          id: "NDk6MzcxOjY5OQ",
        },
        {
          id: "NTA6MTE1OjY5OQ",
        },
        {
          id: "NDk6MTI3OjM1MQ",
        },
        {
          id: "NTA6OTk6Mjkx",
        },
        {
          id: "NTA6MzI2OjY2Mw",
        },
        {
          id: "NTA6MzI2OjM3NQ",
        },
        {
          id: "NTE6Njg6MjMx",
        },
        {
          id: "NTE6Njg6MTQ3",
        },
        {
          id: "NTI6OTk6MzAz",
        },
        {
          id: "NTI6MzI2OjQxMQ",
        },
        {
          id: "NTM6Njg6MzI3",
        },
        {
          id: "NTM6Njg6MjMx",
        },
        {
          id: "NTM6Mjk1OjY5OQ",
        },
        {
          id: "NTU6Mjk1OjI5MQ",
        },
        {
          id: "NTY6OTk6NjM5",
        },
        {
          id: "NTY6OTk6Mzc1",
        },
        {
          id: "NTY6OTk6Mjc5",
        },
        {
          id: "NTY6OTk6MTU5",
        },
        {
          id: "NTY6MzI2OjUzMQ",
        },
        {
          id: "NTg6OTk6NDgz",
        },
        {
          id: "NTg6MzI2OjI3OQ",
        },
        {
          id: "NjA6OTk6NDU5",
        },
        {
          id: "NjE6MTAxOjY5OQ",
        },
      ],
    },
    {
      name: "Back Matter",
      pages: [
        {
          id: "NjE6Njg6NTE5",
        },
        {
          id: "NjM6MTE3OjY1OA",
        },
        {
          id: "NjM6MTA5OjQzNQ",
        },
        {
          id: "NjM6Njg6MzUx",
        },
        {
          id: "NjM6Mjk1OjU0Mw",
        },
        {
          id: "NjQ6MTAzOjY5OQ",
        },
        {
          id: "NjQ6MzQxOjY5OQ",
        },
        {
          id: "NjQ6MzI2OjUwNw",
        },
        {
          id: "NjQ6MzI2OjI0Mw",
        },
        {
          id: "NjU6Njg6NDQ3",
        },
        {
          id: "Njc6MTc3OjY1OA",
        },
        {
          id: "Njg6MTY4OjQxMQ",
        },
        {
          id: "Njk6MTM2OjY5OQ",
        },
        {
          id: "Njk6Njg6NjM5",
        },
        {
          id: "Njk6Njg6MjMx",
        },
        {
          id: "NzA6OTk6NTA3",
        },
        {
          id: "NzA6MTU5OjMzOQ",
        },
        {
          id: "NzE6MzQ1OjI3OQ",
        },
        {
          id: "NzU6MTYzOjY2NQ",
        },
        {
          id: "NzY6MTc4OjI3OQ",
        },
        {
          id: "NzY6OTk6MjMx",
        },
        {
          id: "NzY6MzI2OjYzOQ",
        },
        {
          id: "Nzc6Mjk1OjQ4Mw",
        },
        {
          id: "Nzg6MTIyOjY5OQ",
        },
        {
          id: "Nzg6OTk6NjUx",
        },
        {
          id: "Nzg6OTk6MTcx",
        },
        {
          id: "Nzg6MzI2OjM3NQ",
        },
        {
          id: "Nzk6Njg6Njk5",
        },
        {
          id: "Nzk6Njg6NDQ3",
        },
        {
          id: "ODA6MTMzOjY5OQ",
        },
        {
          id: "ODI6MjUxOjY4Nw",
        },
        {
          id: "ODI6MjUxOjU0Mw",
        },
        {
          id: "ODM6Njg6NjM5",
        },
        {
          id: "ODQ6MjUxOjY4Nw",
        },
        {
          id: "ODU6Njg6Njg3",
        },
        {
          id: "ODY6MjUxOjY4Nw",
        },
        {
          id: "ODY6MjUxOjQ5NQ",
        },
        {
          id: "ODY6MjUxOjIwNw",
        },
        {
          id: "ODc6Njg6NTU1",
        },
        {
          id: "ODg6MjA4OjY3Nw",
        },
        {
          id: "OTA6MjQ0OjY3NQ",
        },
        {
          id: "OTI6MjM3OjY3NQ",
        },
        {
          id: "Njg6MTE1OjY5OQ",
        },
        {
          id: "ODE6MzExOjY5OQ",
        },
        {
          id: "ODI6MTUwOjY2Mw",
        },
        {
          id: "ODM6MzcxOjY2Mw",
        },
        {
          id: "ODQ6MTI2OjY2Mw",
        },
        {
          id: "ODU6MzcxOjY2Mw",
        },
        {
          id: "ODY6MTE2OjY2Mw",
        },
        {
          id: "ODc6MzcxOjY2Mw",
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
      ],
    },
  ];
  combines = [
    {
      source: "OTI6MzI2OjEzNQ",
      dest: "OTI6MjM3OjY3NQ",
    },
    {
      source: "OTE6Njg6Njk5",
      dest: "OTA6MjQ0OjY3NQ",
    },
    {
      source: "ODg6MzI2OjI5MQ",
      dest: "ODg6MjA4OjY3Nw",
    },
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "QUEST FOR THE FROZEN FLAME: BURNING TUNDRA" &&
        t.fontId === "Gin-Regular:12" &&
        t.page === 1,
    );
  }
  preprocess(text) {}
  extractDetails(text, moduleData, sectionKey) {
    this.markIndented(text, 10, 367.25, 639);
    this.markIndented(text, 15, 364.9, 435);
    this.markIndented(text, 18, 386.25, 315);
    this.markStartOfLine(text, 24, 126, 639);
    this.markStartOfLine(text, 24, 170, 615);
    this.markStartOfLine(text, 24, 171, 579);
    this.markStartOfLine(text, 24, 188, 531);
    this.markIndented(text, 24, 353.25, 339);
    this.markStartOfLine(text, 32, 339.3099, 435);
    this.markStartOfLine(text, 32, 341.3099, 339);
    this.markStartOfLine(text, 32, 330.3099, 531);
    this.markIndented(text, 34, 395.25, 435);
    this.markIndented(text, 40, 372.25, 195);
    this.markStartOfLine(text, 45, 346.8099, 555);
    this.markStartOfLine(text, 54, 365.25, 411);
    this.markStartOfLine(text, 54, 377.25, 399);
    this.markStartOfLine(text, 82, 286.5, 471);
    this.markStartOfLine(text, 82, 290.5, 459);
    this.markStartOfLine(text, 82, 298.5, 435);
    this.markStartOfLine(text, 82, 303.5, 411);
    this.markStartOfLine(text, 82, 305.4999, 399);
    this.markStartOfLine(text, 82, 307.4999, 363);
    this.markStartOfLine(text, 82, 307.4999, 351);
    this.markStartOfLine(text, 82, 307.4999, 339);
    this.markStartOfLine(text, 82, 290.4999, 243);
    this.markStartOfLine(text, 82, 285.4999, 231);
    this.markStartOfLine(text, 82, 273.4999, 207);
    this.markStartOfLine(text, 82, 256.4999, 183);
    this.markStartOfLine(text, 84, 350.5, 387);
    this.markStartOfLine(text, 84, 353.5, 375);
    this.markStartOfLine(text, 84, 358.5, 363);
    this.markStartOfLine(text, 84, 360.5, 351);
    this.markStartOfLine(text, 84, 364.5, 327);
    this.markStartOfLine(text, 84, 362.5, 315);
    this.markStartOfLine(text, 84, 356.5, 291);
    this.markStartOfLine(text, 84, 358.5, 231);
    this.markStartOfLine(text, 84, 355.5, 219);
    this.markStartOfLine(text, 84, 349.5, 195);
    this.markStartOfLine(text, 84, 370.5, 171);
    this.markStartOfLine(text, 84, 325.5, 111);
    this.markStartOfLine(text, 86, 265.5, 423);
    this.markStartOfLine(text, 86, 265.5, 411);
    this.markStartOfLine(text, 86, 275.5, 399);
    this.markStartOfLine(text, 86, 281.5, 387);
    this.markStartOfLine(text, 86, 282.5, 375);
    this.markStartOfLine(text, 86, 281.5, 363);
    this.markStartOfLine(text, 86, 262.5, 339);
    this.markStartOfLine(text, 86, 281.5, 315);
    this.markStartOfLine(text, 86, 282.5, 303);
    this.markStartOfLine(text, 86, 282.5, 291);
    return super.extractDetails(text, moduleData, sectionKey);
  }
}
