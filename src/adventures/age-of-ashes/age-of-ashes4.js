import { AgeOfAshesBase } from "./base.js";
import { AdventureImage, CaptionImage } from "../../core/images.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class AgeOfAshes4 extends AgeOfAshesBase {
  prefix = "age-of-ashes4";
  fullName = "Age of Ashes - Fires of the Haunted City";
  pages = [
    this.ChapterHeadingPageLayout(6),
    this.RightSingleColumnWithSidebar(7),
    this.LeftTwoColumn(8),
    this.RightTwoColumn(9),
    this.LeftTwoColumnWithMap(10, 327),
    this.RightTwoColumn(11),
    this.LeftTwoColumn(12),
    this.RightTwoColumn(13),
    this.LeftTwoColumn(14),
    this.RightTwoColumn(15),
    this.LeftTwoColumn(16),
    this.RightTwoColumn(17),
    this.ChapterHeadingPageLayout(18),
    this.RightSingleColumnWithSidebar(19),
    this.LeftTwoColumn(20),
    this.RightTwoColumn(21),
    this.LeftTwoColumnWithMap(22, 327),
    this.RightTwoColumn(23),
    this.LeftTwoColumn(24),
    this.RightTwoColumn(25),
    this.LeftTwoColumn(26),
    this.RightTwoColumn(27),
    this.LeftTwoColumn(28),
    this.RightTwoColumn(29),
    this.LeftTwoColumn(30),
    this.RightTwoColumnWithRightCutout(31, 390),
    this.LeftTwoColumnWithMap(32, 327),
    this.RightTwoColumn(33),
    this.LeftTwoColumn(34),
    this.RightTwoColumn(35),
    this.ChapterHeadingPageLayout(36),
    this.RightSingleColumnWithSidebar(37),
    this.LeftTwoColumnWithMap(38, 327),
    this.RightTwoColumn(39),
    this.LeftTwoColumn(40),
    this.RightTwoColumn(41),
    this.LeftTwoColumn(42),
    this.RightTwoColumn(43),
    this.LeftTwoColumn(44),
    this.RightTwoColumn(45),
    this.LeftTwoColumnWithMap(46, 327),
    this.RightTwoColumn(47),
    this.LeftTwoColumnWithMap(48, 327),
    this.RightTwoColumn(49),
    this.RightTwoColumnWithRightCutout(51, 545),
    this.LeftTwoColumn(52),
    this.RightTwoColumn(53),
    this.LeftTwoColumn(54),
    this.RightTwoColumn(55),
    this.LeftTwoColumn(56),
    this.RightTwoColumn(57),
    this.LeftTwoColumn(58),
    this.RightTwoColumn(59),
    this.RightTwoColumn(75),
    this.LeftTwoColumn(76),
    this.RightTwoColumn(77),
    this.LeftSingleColumnWithSidebar(78),
    this.RightSingleColumnWithSidebar(79),
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
        name: "aoa4/map1",
        priority: 0,
      },
      nameInfo: {
        x: 20,
        y: 726.6831,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 1261,
      height: 1637,
      gridType: "gridless",
      globalLight: true,
      imageLeft: 0,
      imageTop: 0,
      imageRight: 1e3,
      imageBottom: 1e3,
      imageRows: 10,
      imageCols: 10,
    }),
    new ModuleScene({
      name: "map2a",
      canonical: {
        name: "aoa4/map2a",
        priority: 0,
      },
      nameInfo: {
        x: 28.3333,
        y: 759.1696,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 10,
      width: 1259,
      height: 905,
      cropLeft: 0,
      cropRight: 456,
      cropTop: 0,
      cropBottom: 360,
      imageLeft: 101,
      imageRight: 334,
      imageCols: 7,
      imageTop: 103,
      imageBottom: 268,
      imageRows: 5,
      globalLight: true,
      detailsFile: "/aoa/maps/aoa4-map2a.json",
      journals: [
        {
          x: 1150,
          y: 850,
          id: "OTo2ODo2OTk",
        },
      ],
      tokens: [
        {
          id: "npc50",
          x: 1e3,
          y: 600,
        },
      ],
    }),
    new ModuleScene({
      name: "map2b",
      canonical: {
        name: "aoa4/map2b",
        priority: 0,
      },
      nameInfo: {
        x: 224.3333,
        y: 759.1696,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 10,
      width: 1259,
      height: 905,
      cropLeft: 456,
      cropRight: 1259,
      cropTop: 0,
      cropBottom: 360,
      imageLeft: 507,
      imageRight: 1238,
      imageCols: 22 * 2,
      imageTop: 63,
      imageBottom: 295,
      imageRows: 7 * 2,
      globalLight: true,
      detailsFile: "/aoa/maps/aoa4-map2b.json",
      journals: [
        {
          x: 2300,
          y: 2e3,
          id: "MTI6OTk6NTE5",
        },
        {
          x: 5100,
          y: 1600,
          id: "MTI6MzI2OjE4Mw",
        },
        {
          x: 1500,
          y: 800,
          id: "MTI6OTk6NjI3",
        },
      ],
      tokens: [
        {
          id: "npc15",
          x: 2e3,
          y: 1300,
        },
        {
          id: "npc15",
          x: 2200,
          y: 2100,
        },
        {
          id: "npc47",
          x: 1400,
          y: 2300,
        },
        {
          id: "npc33",
          x: 4600,
          y: 1100,
        },
      ],
    }),
    new ModuleScene({
      name: "map2c",
      canonical: {
        name: "aoa4/map2c",
        priority: 0,
      },
      nameInfo: {
        x: 432.75,
        y: 598.6681,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 10,
      width: 1259,
      height: 905,
      cropLeft: 0,
      cropRight: 1259,
      cropTop: 361,
      cropBottom: 905,
      imageLeft: 48,
      imageRight: 1245,
      imageCols: 36,
      imageTop: 381,
      imageBottom: 880,
      imageRows: 15,
      detailsFile: "/aoa/maps/aoa4-map2c.json",
      journals: [
        {
          x: 2050,
          y: 1250,
          id: "MTM6Mjk1OjY5OQ",
        },
        {
          x: 3350,
          y: 1250,
          id: "MTM6MzY5OjE5NQ",
        },
        {
          x: 2750,
          y: 950,
          id: "MTQ6MzI2OjYxNQ",
        },
        {
          x: 2750,
          y: 1550,
          id: "MTU6Mjk1OjYzOQ",
        },
        {
          x: 4050,
          y: 1250,
          id: "MTU6Mjk1OjI0Mw",
        },
      ],
      tokens: [
        {
          id: "npc17",
          x: 2100,
          y: 1e3,
        },
        {
          id: "npc43",
          x: 2200,
          y: 1400,
        },
        {
          id: "npc43",
          x: 1900,
          y: 1400,
        },
        {
          id: "npc42",
          x: 2500,
          y: 1700,
        },
        {
          id: "npc2",
          x: 2800,
          y: 900,
        },
        {
          id: "npc43",
          x: 3400,
          y: 900,
        },
        {
          id: "npc43",
          x: 3500,
          y: 1100,
        },
        {
          id: "npc43",
          x: 3400,
          y: 1400,
        },
        {
          id: "npc30",
          x: 3100,
          y: 1200,
        },
        {
          id: "npc3",
          x: 3900,
          y: 1e3,
        },
        {
          id: "npc43",
          x: 4e3,
          y: 1200,
        },
        {
          id: "npc43",
          x: 3900,
          y: 1400,
        },
        {
          id: "npc43",
          x: 3800,
          y: 1200,
        },
      ],
    }),
    new ModuleScene({
      name: "map3a",
      canonical: {
        name: "aoa4/map3a",
        priority: 0,
      },
      nameInfo: {
        x: 31,
        y: 585.6681,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 22,
      width: 1259,
      height: 905,
      cropLeft: 0,
      cropRight: 740,
      cropTop: 0,
      cropBottom: 426,
      imageLeft: 19,
      imageRight: 726,
      imageCols: 14,
      imageTop: 27,
      imageBottom: 381,
      imageRows: 7,
      detailsFile: "/aoa/maps/aoa4-map3a.json",
      journals: [
        {
          x: 450,
          y: 350,
          id: "MzA6OTk6NTc5",
        },
        {
          x: 1500,
          y: 600,
          id: "MzE6MzA0OjY4Nw",
          text: "C1",
        },
        {
          x: 1300,
          y: 400,
          id: "MzE6MzA0OjY4Nw",
          text: "C2",
        },
        {
          x: 1250,
          y: 850,
          id: "MzE6MzA0OjY4Nw",
          text: "C3",
        },
        {
          x: 1050,
          y: 600,
          id: "MzE6MzA0OjY4Nw",
          text: "C4",
        },
        {
          x: 650,
          y: 650,
          id: "MzE6MzA0OjY4Nw",
          text: "C5",
        },
      ],
      tokens: [
        {
          id: "npc31",
          x: 1500,
          y: 400,
        },
        {
          id: "npc31",
          x: 1500,
          y: 700,
        },
        {
          id: "npc31",
          x: 1100,
          y: 700,
        },
        {
          id: "npc31",
          x: 1300,
          y: 900,
        },
      ],
    }),
    new ModuleScene({
      name: "map3b",
      canonical: {
        name: "aoa4/map3b",
        priority: 0,
      },
      nameInfo: {
        x: 364,
        y: 585.6681,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 22,
      width: 1259,
      height: 905,
      cropLeft: 742,
      cropRight: 1259,
      cropTop: 0,
      cropBottom: 426,
      imageLeft: 762,
      imageRight: 1246,
      imageCols: 13,
      imageTop: 39,
      imageBottom: 413,
      imageRows: 10,
      globalLight: true,
      detailsFile: "/aoa/maps/aoa4-map3b.json",
    }),
    new ModuleScene({
      name: "map3c",
      canonical: {
        name: "aoa4/map3c",
        priority: 0,
      },
      nameInfo: {
        x: 31,
        y: 562.6681,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 22,
      width: 1259,
      height: 905,
      cropLeft: 0,
      cropRight: 381,
      cropTop: 428,
      cropBottom: 905,
      imageLeft: 38,
      imageRight: 375,
      imageCols: 9,
      imageTop: 456,
      imageBottom: 868,
      imageRows: 11,
      globalLight: true,
      detailsFile: "/aoa/maps/aoa4-map3c.json",
    }),
    new ModuleScene({
      name: "map3d",
      canonical: {
        name: "aoa4/map3d",
        priority: 0,
      },
      nameInfo: {
        x: 192,
        y: 358.3329,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 22,
      width: 1259,
      height: 905,
      cropLeft: 382,
      cropRight: 1259,
      cropTop: 428,
      cropBottom: 905,
      imageLeft: 421,
      imageRight: 1242,
      imageCols: 22,
      imageTop: 456,
      imageBottom: 868,
      imageRows: 11,
      detailsFile: "/aoa/maps/aoa4-map3d.json",
    }),
    new ModuleScene({
      name: "map4",
      canonical: {
        name: "aoa4/map4",
        priority: 0,
      },
      nameInfo: {
        x: 106,
        y: 363,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 32,
      width: 1259,
      height: 905,
      imageLeft: 54,
      imageRight: 1239,
      imageCols: 29,
      imageTop: 102,
      imageBottom: 880,
      imageRows: 19,
      detailsFile: "/aoa/maps/aoa4-map4.json",
      journals: [
        {
          x: 3050,
          y: 1050,
          id: "MzM6Njg6Njk5",
        },
        {
          x: 2950,
          y: 1750,
          id: "MzM6Njg6Mzk5",
        },
        {
          x: 3350,
          y: 1650,
          id: "MzQ6OTk6NDU5",
        },
        {
          x: 2850,
          y: 2150,
          id: "MzQ6OTk6MzI3",
        },
        {
          x: 2350,
          y: 1350,
          id: "MzQ6MzI2OjYwMw",
        },
        {
          x: 1250,
          y: 2250,
          id: "MzU6Mjk1OjU1NQ",
        },
        {
          x: 950,
          y: 850,
          id: "MzI6OTk6ODc",
        },
      ],
      tokens: [
        {
          id: "npc34",
          x: 2700,
          y: 800,
          elite: true,
        },
        {
          id: "npc34",
          x: 3300,
          y: 800,
          elite: true,
        },
        {
          id: "npc46",
          x: 3e3,
          y: 1700,
        },
        {
          id: "npc49",
          x: 2900,
          y: 1800,
        },
        {
          id: "npc8",
          x: 2100,
          y: 1200,
        },
      ],
    }),
    new ModuleScene({
      name: "map5a",
      canonical: {
        name: "aoa4/map5a",
        priority: 0,
      },
      nameInfo: {
        x: 30,
        y: 755.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 38,
      width: 1259,
      height: 905,
      cropLeft: 0,
      cropRight: 372,
      cropTop: 0,
      cropBottom: 905,
      imageLeft: 11,
      imageRight: 364,
      imageCols: 8,
      imageTop: 30,
      imageBottom: 870,
      imageRows: 19,
      detailsFile: "/aoa/maps/aoa4-map5a.json",
      journals: [
        {
          x: 650,
          y: 1750,
          id: "Mzg6OTk6MTIz",
        },
        {
          x: 350,
          y: 1200,
          id: "Mzg6OTk6MjY3",
        },
      ],
      tokens: [
        {
          id: "npc49",
          x: 700,
          y: 1600,
        },
        {
          id: "npc49",
          x: 600,
          y: 1800,
        },
        {
          id: "npc49",
          x: 700,
          y: 1800,
        },
        {
          id: "npc49",
          x: 800,
          y: 1600,
        },
      ],
    }),
    new ModuleScene({
      name: "map5b",
      canonical: {
        name: "aoa4/map5b",
        priority: 0,
      },
      nameInfo: {
        x: 30,
        y: 755.8362,
      },
      nameFn: (name) => `${this.sentenceCase(name)} Main Level`,
      page: 38,
      width: 1259,
      height: 905,
      cropLeft: 379,
      cropRight: 1259,
      cropTop: 0,
      cropBottom: 905,
      imageLeft: 426,
      imageRight: 1225,
      imageCols: 18,
      imageTop: 30,
      imageBottom: 870,
      imageRows: 19,
      detailsFile: "/aoa/maps/aoa4-map5b.json",
      journals: [
        {
          x: 750,
          y: 1750,
          id: "Mzk6Njg6Njk5",
        },
        {
          x: 1150,
          y: 1750,
          id: "Mzk6Njg6NTA3",
        },
        {
          x: 1750,
          y: 1750,
          id: "Mzk6Njg6Mzg3",
        },
        {
          x: 1850,
          y: 1350,
          id: "Mzk6Mjk1OjYzOQ",
        },
        {
          x: 1350,
          y: 1350,
          id: "Mzk6Mjk1OjQ5NQ",
        },
        {
          x: 750,
          y: 1450,
          id: "NDA6MzY0OjQ3MQ",
        },
        {
          x: 650,
          y: 1050,
          id: "Mzg6OTk6MjY3",
        },
      ],
      tokens: [
        {
          id: "npc49",
          x: 1700,
          y: 2e3,
        },
        {
          id: "npc49",
          x: 1700,
          y: 1800,
        },
        {
          id: "npc49",
          x: 1500,
          y: 1800,
        },
        {
          id: "npc49",
          x: 1500,
          y: 2e3,
        },
        {
          id: "npc49",
          x: 1700,
          y: 1500,
        },
        {
          id: "npc49",
          x: 1900,
          y: 1500,
        },
        {
          id: "npc9",
          x: 1300,
          y: 1400,
        },
      ],
    }),
    new ModuleScene({
      name: "map6a",
      canonical: {
        name: "aoa4/map6a",
        priority: 0,
      },
      nameInfo: {
        x: 30,
        y: 755.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 46,
      width: 1259,
      height: 905,
      cropLeft: 0,
      cropRight: 656,
      cropTop: 0,
      cropBottom: 905,
      imageLeft: 27,
      imageRight: 632,
      imageCols: 16,
      imageTop: 4,
      imageBottom: 872,
      imageRows: 23,
      globalLight: true,
      detailsFile: "/aoa/maps/aoa4-map6a.json",
      journals: [
        {
          x: 1250,
          y: 2350,
          id: "NDU6Njg6MzE1",
        },
        {
          x: 1250,
          y: 1250,
          id: "NDU6Mjk1OjY5OQ",
        },
        {
          x: 450,
          y: 1150,
          id: "NDU6Njg6NTMx",
        },
      ],
      tokens: [
        {
          id: "npc48",
          x: 1e3,
          y: 1400,
        },
        {
          id: "npc48",
          x: 1200,
          y: 1400,
        },
        {
          id: "npc48",
          x: 1100,
          y: 1300,
        },
        {
          id: "npc48",
          x: 1100,
          y: 1100,
        },
        {
          id: "npc23",
          x: 1100,
          y: 2200,
        },
      ],
    }),
    new ModuleScene({
      name: "map6b",
      canonical: {
        name: "aoa4/map6b",
        priority: 0,
      },
      nameInfo: {
        x: 322.75,
        y: 630.6681,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 46,
      width: 1259,
      height: 905,
      cropLeft: 665,
      cropRight: 1259,
      cropTop: 0,
      cropBottom: 335,
      imageLeft: 676,
      imageRight: 1243,
      imageCols: 23,
      imageTop: 16,
      imageBottom: 287,
      imageRows: 11,
      globalLight: true,
      detailsFile: "/aoa/maps/aoa4-map6b.json",
      journals: [
        {
          x: 2050,
          y: 550,
          id: "NDI6MzI2OjMzOQ",
        },
      ],
      tokens: [
        {
          id: "npc10",
          x: 2500,
          y: 900,
        },
        {
          id: "npc41",
          x: 2300,
          y: 800,
        },
        {
          id: "npc41",
          x: 2400,
          y: 800,
        },
        {
          id: "npc41",
          x: 2300,
          y: 1100,
        },
        {
          id: "npc41",
          x: 2400,
          y: 1100,
        },
      ],
    }),
    new ModuleScene({
      name: "map6c",
      canonical: {
        name: "aoa4/map6c",
        priority: 0,
      },
      nameInfo: {
        x: 30,
        y: 755.8362,
      },
      nameFn: (name) => `${this.sentenceCase(name)} Upper`,
      page: 46,
      width: 1259,
      height: 905,
      cropLeft: 665,
      cropRight: 1259,
      cropTop: 340,
      cropBottom: 905,
      imageLeft: 677,
      imageRight: 1244,
      imageCols: 15,
      imageTop: 357,
      imageBottom: 884,
      imageRows: 14,
      globalLight: true,
      detailsFile: "/aoa/maps/aoa4-map6c.json",
      journals: [
        {
          x: 950,
          y: 850,
          id: "NDY6OTk6MTEx",
        },
      ],
      tokens: [],
    }),
    new ModuleScene({
      name: "map7",
      canonical: {
        name: "aoa4/map7",
        priority: 0,
      },
      nameInfo: {
        x: 30,
        y: 755.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 48,
      width: 1259,
      height: 905,
      imageLeft: 21,
      imageRight: 1237,
      imageCols: 30,
      imageTop: 34,
      imageBottom: 883,
      imageRows: 21,
      detailsFile: "/aoa/maps/aoa4-map7.json",
      journals: [
        {
          x: 1750,
          y: 950,
          id: "NDc6Njg6Mzg3",
        },
        {
          x: 1850,
          y: 2100,
          id: "NDc6Mjk1OjE0Nw",
        },
        {
          x: 3050,
          y: 1350,
          id: "NDg6OTk6MTgz",
        },
        {
          x: 2750,
          y: 2350,
          id: "NDk6Mjk1OjQxMQ",
        },
        {
          x: 850,
          y: 850,
          id: "NDY6MzI2OjEzNQ",
        },
      ],
      tokens: [
        {
          id: "npc35",
          x: 1400,
          y: 800,
        },
        {
          id: "npc35",
          x: 1500,
          y: 1200,
        },
        {
          id: "npc36",
          x: 2900,
          y: 1400,
        },
        {
          id: "npc22",
          x: 3100,
          y: 1400,
        },
      ],
    }),
    new ModuleScene({
      name: "map8a",
      canonical: {
        name: "aoa4/map8a",
        priority: 0,
      },
      nameInfo: {
        x: 23,
        y: 760.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 50,
      width: 1262,
      height: 1637,
      cropLeft: 0,
      cropRight: 638,
      cropTop: 0,
      cropBottom: 1637,
      imageLeft: 31,
      imageRight: 628,
      imageCols: 17,
      imageTop: 23,
      imageBottom: 1600,
      imageRows: 45,
      detailsFile: "/aoa/maps/aoa4-map8a.json",
      journals: [
        {
          x: 1250,
          y: 4750,
          id: "NTE6Njg6MTk1",
        },
        {
          x: 1250,
          y: 3350,
          id: "NTE6Mjk1OjEyMw",
        },
        {
          x: 850,
          y: 3550,
          id: "NTI6MzI2OjIwNw",
        },
        {
          x: 1650,
          y: 3050,
          id: "NTM6Njg6NDEx",
        },
        {
          x: 1250,
          y: 2650,
          id: "NTM6Njg6OTk",
        },
        {
          x: 1350,
          y: 1650,
          id: "NTM6Mjk1OjU1NQ",
        },
        {
          x: 350,
          y: 1750,
          id: "NTE6Njg6NDU5",
        },
        {
          x: 750,
          y: 3050,
          id: "NTI6MzI2OjIwNw",
          text: "H3a",
        },
        {
          x: 950,
          y: 3050,
          id: "NTI6MzI2OjIwNw",
          text: "H3b",
        },
        {
          x: 1850,
          y: 3450,
          id: "NTM6Njg6NDEx",
          text: "H4b",
        },
        {
          x: 1850,
          y: 3750,
          id: "NTM6Njg6NDEx",
          text: "H4a",
        },
      ],
      tokens: [
        {
          id: "npc32",
          x: 1200,
          y: 4100,
          elite: true,
        },
        {
          id: "npc11",
          x: 1100,
          y: 3200,
        },
        {
          id: "npc11",
          x: 1400,
          y: 3200,
        },
        {
          id: "npc11",
          x: 1700,
          y: 3300,
        },
        {
          id: "npc11",
          x: 1800,
          y: 3300,
        },
        {
          id: "npc11",
          x: 1900,
          y: 3300,
        },
        {
          id: "npc38",
          x: 1e3,
          y: 1700,
        },
        {
          id: "npc38",
          x: 1300,
          y: 1700,
        },
      ],
    }),
    new ModuleScene({
      name: "map8b",
      canonical: {
        name: "aoa4/map8b",
        priority: 0,
      },
      nameInfo: {
        x: 23,
        y: 760.8362,
      },
      nameFn: (name) => `${this.sentenceCase(name)} Upper`,
      page: 50,
      width: 1262,
      height: 1637,
      cropLeft: 632,
      cropRight: 1262,
      cropTop: 0,
      cropBottom: 999,
      imageLeft: 707,
      imageRight: 1198,
      imageCols: 14,
      imageTop: 164,
      imageBottom: 934,
      imageRows: 22,
      detailsFile: "/aoa/maps/aoa4-map8b.json",
      journals: [
        {
          x: 1050,
          y: 2850,
          id: "NTQ6OTk6MjA3",
        },
        {
          x: 850,
          y: 2150,
          id: "NTQ6OTk6NDIz",
        },
        {
          x: 1850,
          y: 2150,
          id: "NTQ6MzI2OjU3OQ",
        },
        {
          x: 1750,
          y: 2850,
          id: "NTQ6MzI2OjI5MQ",
        },
        {
          x: 1350,
          y: 1450,
          id: "NTU6Njg6OTk",
        },
        {
          x: 650,
          y: 1450,
          id: "NTE6Njg6NDU5",
        },
      ],
      tokens: [
        {
          id: "npc51",
          x: 700,
          y: 2800,
        },
        {
          id: "npc12",
          x: 1700,
          y: 3e3,
        },
        {
          id: "npc49",
          x: 1600,
          y: 1300,
        },
        {
          id: "npc49",
          x: 1600,
          y: 1400,
        },
        {
          id: "npc49",
          x: 1100,
          y: 1400,
        },
        {
          id: "npc49",
          x: 1100,
          y: 1300,
        },
      ],
    }),
    new ModuleScene({
      name: "map8c",
      canonical: {
        name: "aoa4/map8c",
        priority: 0,
      },
      nameInfo: {
        x: 23,
        y: 760.8362,
      },
      nameFn: (name) => `${this.sentenceCase(name)} Forge`,
      page: 50,
      width: 1262,
      height: 1637,
      cropLeft: 632,
      cropRight: 1262,
      cropTop: 1002,
      cropBottom: 1637,
      imageLeft: 822,
      imageRight: 1103,
      imageCols: 8,
      imageTop: 1076,
      imageBottom: 1531,
      imageRows: 13,
      detailsFile: "/aoa/maps/aoa4-map8c.json",
      journals: [
        {
          x: 1450,
          y: 1050,
          id: "NTY6OTk6MzYz",
        },
      ],
      tokens: [
        {
          id: "npc13",
          x: 1400,
          y: 1100,
        },
        {
          id: "npc44",
          x: 1100,
          y: 700,
        },
        {
          id: "npc44",
          x: 1100,
          y: 1400,
        },
      ],
    }),
    new ModuleScene({
      name: "map9",
      canonical: {
        name: "aoa4/map9",
        priority: 0,
      },
      nameInfo: {
        x: 30,
        y: 755.8362,
      },
      nameFn: (name) => `${this.sentenceCase(name)} Forge`,
      page: 58,
      width: 1259,
      height: 905,
      imageLeft: 22,
      imageRight: 1242,
      imageCols: 39,
      imageTop: 26,
      imageBottom: 870,
      imageRows: 27,
      globalLight: true,
      detailsFile: "/aoa/maps/aoa4-map9.json",
      journals: [
        {
          x: 1750,
          y: 1350,
          id: "NTc6Njg6NTU1",
        },
        {
          x: 1950,
          y: 1950,
          id: "NTc6Njg6MjU1",
        },
        {
          x: 2850,
          y: 2150,
          id: "NTg6OTk6MTM1",
        },
        {
          x: 3950,
          y: 2350,
          id: "NTg6MzI2OjE3MQ",
        },
      ],
      tokens: [
        {
          id: "npc20",
          x: 1900,
          y: 1300,
        },
        {
          id: "npc20",
          x: 1900,
          y: 1400,
        },
        {
          id: "npc20",
          x: 1700,
          y: 1600,
        },
        {
          id: "npc20",
          x: 1600,
          y: 1600,
        },
        {
          id: "npc45",
          x: 1900,
          y: 1900,
        },
        {
          id: "npc14",
          x: 2600,
          y: 1300,
          elite: true,
        },
        {
          id: "npc14",
          x: 2400,
          y: 1600,
          elite: true,
        },
        {
          id: "npc14",
          x: 2400,
          y: 1900,
          elite: true,
        },
        {
          id: "npc14",
          x: 2400,
          y: 2300,
          elite: true,
        },
        {
          id: "npc26",
          x: 4200,
          y: 2700,
        },
        {
          id: "npc14",
          x: 3900,
          y: 1900,
        },
        {
          id: "npc14",
          x: 3800,
          y: 2400,
        },
      ],
    }),
  ];
  journals = [
    new AdventureImage({
      name: "journal1",
      page: 1,
      width: 1258,
      height: 724,
    }),
    new AdventureImage({
      name: "journal2",
      page: 18,
      width: 1259,
      height: 830,
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
      width: 1259,
      height: 830,
    }),
    new AdventureImage({
      name: "journal5",
      page: 36,
      width: 1261,
      height: 830,
    }),
    new AdventureImage({
      name: "journal6",
      page: 60,
      width: 1262,
      height: 1636,
    }),
    new AdventureImage({
      name: "journal7",
      page: 62,
      width: 1261,
      height: 830,
    }),
    new AdventureImage({
      name: "journal8",
      page: 61,
      width: 173,
      height: 156,
    }),
    new AdventureImage({
      name: "journal9",
      page: 74,
      width: 1259,
      height: 830,
    }),
    new AdventureImage({
      name: "journal10",
      page: 75,
      width: 638,
      height: 677,
    }),
    new AdventureImage({
      name: "journal11",
      page: 76,
      width: 384,
      height: 434,
    }),
    new AdventureImage({
      name: "journal12",
      page: 77,
      width: 739,
      height: 1203,
    }),
    new AdventureImage({
      name: "journal13",
      page: 99,
      width: 588,
      height: 637,
    }),
    new CaptionImage({
      name: "journal14",
      page: 71,
      width: 1137,
      height: 1377,
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.Fe1lYhCUY4UO4Plw",
      page: 9,
      width: 867,
      height: 1152,
      tokenX: -327,
      tokenY: 40,
      tokenSize: 312,
      forIds: ["MTA6MzI2OjI1NQ"],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.VC7rtYR4hLxwg7WZ",
      name: {
        page: 13,
        x: 247.5851,
        y: 153.5558,
      },
      page: 13,
      width: 424,
      height: 780,
      tokenX: 49,
      tokenY: 55,
      tokenSize: 360,
      forIds: ["MTU6Njg6OTk"],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.CJVRPFTKuJroiD5C",
      page: 16,
      width: 997,
      height: 1075,
      tokenX: -342,
      tokenY: -44,
      tokenSize: 459,
      forIds: ["MTY6OTk6NjE1"],
    }),
    new ModuleNpc({
      id: "npc4",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 17,
        x: 252.1778,
        y: 437.6729,
      },
      page: 17,
      width: 491,
      height: 537,
      tokenX: 53,
      tokenY: 60,
      tokenSize: 593,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc5",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 23,
        x: 236.0754,
        y: 458.6405,
      },
      page: 23,
      width: 491,
      height: 537,
      tokenX: 78,
      tokenY: 82,
      tokenSize: 621,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc6",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 26,
        x: 297.9387,
        y: 435.6081,
      },
      page: 26,
      width: 629,
      height: 667,
      tokenX: 24,
      tokenY: 67,
      tokenSize: 695,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc7",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.PUPnGG406PanzIvL",
      name: {
        page: 27,
        x: 278.0349,
        y: 129.1728,
      },
      page: 27,
      width: 895,
      height: 986,
      tokenX: 38,
      tokenY: 100,
      tokenSize: 1042,
      forIds: ["Mjc6Njg6Mzc1"],
    }),
    new ModuleNpc({
      id: "npc8",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.xrxjjjRMKzwsYbGm",
      page: 35,
      width: 995,
      height: 1059,
      tokenX: -166,
      tokenY: -18,
      tokenSize: 527,
      forIds: ["MzQ6MzI2OjMzOQ"],
    }),
    new ModuleNpc({
      id: "npc9",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.XNso2IMnhnfHcMCn",
      page: 40,
      width: 914,
      height: 1114,
      tokenX: -219,
      tokenY: 72,
      tokenSize: 358,
      forIds: ["Mzk6Mjk1OjE1OQ"],
    }),
    new ModuleNpc({
      id: "npc10",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.C4PD4p4I9byZ8yp6",
      page: 44,
      width: 1002,
      height: 1131,
      tokenX: -318,
      tokenY: -212,
      tokenSize: 487,
      forIds: ["NDQ6MzI2OjU1NQ"],
    }),
    new ModuleNpc({
      id: "npc11",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.2FbG5nLE91b6BNiB",
      page: 52,
      width: 874,
      height: 953,
      tokenX: -274,
      tokenY: 72,
      tokenSize: 421,
      forIds: ["NTM6Njg6MTQ3", "NTI6OTk6NTU1"],
    }),
    new ModuleNpc({
      id: "npc12",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.ja9KowUPZjhwhJ1x",
      page: 55,
      width: 815,
      height: 978,
      tokenX: -208,
      tokenY: -55,
      tokenSize: 418,
      forIds: ["NTU6Njg6NDU5"],
    }),
    new ModuleNpc({
      id: "npc13",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.XHJC4G6bfPiVXGKE",
      page: 56,
      width: 521,
      height: 563,
      tokenX: 86,
      tokenY: 85,
      tokenSize: 619,
      forIds: ["OTE6Njg6NTkx", "NTY6MzI2OjQyMw"],
    }),
    new ModuleNpc({
      id: "npc14",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.yYicb7uJH4EaBO4v",
      name: {
        page: 57,
        x: 335.1412,
        y: 118.8905,
      },
      page: 57,
      width: 1562,
      height: 1929,
      tokenX: -139,
      tokenY: -128,
      tokenSize: 1089,
      forIds: ["NTk6Njg6Mzg3", "NTg6MzI2OjIxOQ"],
    }),
    new ModuleNpc({
      id: "npc15",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.WouSA1UsIzvBTOix",
      page: 78,
      width: 855,
      height: 948,
      tokenX: 53,
      tokenY: 223,
      tokenSize: 976,
      forIds: ["Nzg6MjUxOjYxNQ", "MTI6OTk6OTk"],
    }),
    new ModuleNpc({
      id: "npc16",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.NrMgYvnIHFxeFEhX",
      page: 79,
      width: 806,
      height: 1074,
      tokenX: -6,
      tokenY: 180,
      tokenSize: 822,
      forIds: ["Nzk6Njg6NTY3", "NTg6OTk6MTgz"],
    }),
    new ModuleNpc({
      id: "npc17",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.5jFR05QRixpOChRy",
      page: 80,
      width: 716,
      height: 905,
      tokenX: 166,
      tokenY: -23,
      tokenSize: 905,
      forIds: ["ODA6MzQwOjU1NQ", "MTM6Mzc2OjI5MQ"],
    }),
    new ModuleNpc({
      id: "npc18",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.WKsogmP2X2F68Zdm",
      page: 81,
      width: 746,
      height: 1103,
      tokenX: -276,
      tokenY: 52,
      tokenSize: 487,
      forIds: ["ODE6Njg6NjM5", "NDE6Njg6MjA3"],
    }),
    new ModuleNpc({
      id: "npc19",
      actorUuid: "Compendium.pf2e.lost-omens-bestiary.Actor.7QxDDSEmJaohqaXh",
      page: 83,
      width: 783,
      height: 1028,
      tokenX: -21,
      tokenY: 94,
      tokenSize: 440,
      forIds: ["ODM6Njg6NTY3"],
    }),
    new ModuleNpc({
      id: "npc20",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.scPhFbBqlmD2fQHa",
      page: 84,
      width: 784,
      height: 1159,
      tokenX: -226,
      tokenY: 77,
      tokenSize: 459,
      forIds: ["ODQ6MjU0OjUwNw", "NTc6Njg6MzAz"],
    }),
    new ModuleNpc({
      id: "npc21",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.tr3qlFJVHqloE9zI",
      page: 85,
      width: 828,
      height: 1120,
      tokenX: -242,
      tokenY: -163,
      tokenSize: 504,
      forIds: ["ODU6Njg6NjM5"],
    }),
    new ModuleNpc({
      id: "npc22",
      actorUuid:
        "Compendium.pf2e.book-of-the-dead-bestiary.Actor.XrSjNpkJkBO6ysRG",
      page: 86,
      width: 861,
      height: 1166,
      tokenX: -6,
      tokenY: -64,
      tokenSize: 494,
      forIds: ["ODY6MjUxOjUzMQ", "NDk6Mjk1OjYyNw"],
    }),
    new ModuleNpc({
      id: "npc23",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.595MAHwB4JWtzLAA",
      page: 87,
      width: 757,
      height: 1056,
      tokenX: 36,
      tokenY: 5,
      tokenSize: 748,
      forIds: ["ODc6Njg6NTc5", "NDU6Njg6MTQ3"],
    }),
    new ModuleNpc({
      id: "npc24",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.qemmmfu7exswGMGZ",
      page: 89,
      width: 628,
      height: 1028,
      tokenX: -39,
      tokenY: 3,
      tokenSize: 440,
      forIds: ["ODk6MzQxOjQ1OQ"],
    }),
    new ModuleNpc({
      id: "npc25",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.XHJC4G6bfPiVXGKE",
      page: 91,
      width: 897,
      height: 1298,
      tokenX: -231,
      tokenY: -22,
      tokenSize: 430,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc26",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.dTikLHqGfiSYemuZ",
      page: 93,
      width: 992,
      height: 1174,
      tokenX: -255,
      tokenY: 128,
      tokenSize: 558,
      forIds: ["OTM6Njg6NDEx", "NTk6Njg6NDM1"],
    }),
    new ModuleNpc({
      id: "npc27",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 99,
        x: 683.9999,
        y: 686.543,
      },
      page: 99,
      width: 393,
      height: 394,
      tokenX: 35,
      tokenY: 39,
      tokenSize: 422,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc28",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 99,
        x: 812.5599,
        y: 513.6921,
      },
      page: 99,
      width: 359,
      height: 356,
      tokenX: 35,
      tokenY: 42,
      tokenSize: 387,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc29",
      actorUuid: "Compendium.pf2e.lost-omens-bestiary.Actor.wc3uAlMMFQhlmTT9",
      label: "AMD",
      forIds: ["ODI6MjUxOjI3OQ"],
    }),
    new ModuleNpc({
      id: "npc30",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.z3zWW4jLADAei1uo",
      label: "AW",
      forIds: ["MTQ6OTk6MzYz"],
    }),
    new ModuleNpc({
      id: "npc31",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.w1Pqv0YmG4MevpQc",
      label: "CG",
      forIds: ["Mjk6Mjk1OjI3OQ", "MzA6MzI2OjM1MQ"],
    }),
    new ModuleNpc({
      id: "npc32",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.IGzoFGlVbkit8hnH",
      label: "M",
      forIds: ["NTE6Mjk1OjE3MQ"],
    }),
    new ModuleNpc({
      id: "npc33",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.4h9jhODg2NwiYsPg",
      label: "PW",
      forIds: ["MTM6Njg6NDk1"],
    }),
    new ModuleNpc({
      id: "npc34",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.Upf2fOZ6QgGG3seI",
      label: "SG",
      forIds: ["MzM6Njg6NDQ3"],
    }),
    new ModuleNpc({
      id: "npc35",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.L7IJO5z82nEN9IjM",
      label: "LISG",
      forIds: ["NDc6Mjk1OjY5OQ"],
    }),
    new ModuleNpc({
      id: "npc36",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.dG5DBgrxlaimsWOS",
      label: "F",
      forIds: ["NDg6MzI2OjE0Nw"],
    }),
    new ModuleNpc({
      id: "npc37",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.LN7MXD38Zs2bDoW6",
      label: "GM",
      forIds: ["NDE6Mjk1OjI1NQ"],
    }),
    new ModuleNpc({
      id: "npc38",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.BRo0snV2sH6TFuh6",
      label: "G",
      forIds: ["NTQ6OTk6NTQz"],
    }),
    new ModuleNpc({
      id: "npc39",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.Iwk2qT4lVyrvoz3B",
      label: "G",
      forIds: ["NDE6Mjk1Ojk5"],
    }),
    new ModuleNpc({
      id: "npc40",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.eP4a0FAbus3tNTbc",
      label: "GS",
      forIds: ["NDE6Mjk1OjU1NQ"],
    }),
    new ModuleNpc({
      id: "npc41",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.MCgSMT680ic6kr5k",
      label: "G",
      forIds: ["NDU6Njg6NTc5"],
    }),
    new ModuleNpc({
      id: "npc42",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.702acAJ1OPRBjcni",
      label: "G",
      forIds: ["MTU6Mjk1OjM1MQ"],
    }),
    new ModuleNpc({
      id: "npc43",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.QLyDRZPvMsYGZEeN",
      label: "G",
      forIds: [
        "MTM6Mzc2OjI0Mw",
        "MTQ6OTk6NTQz",
        "MTY6MzI2OjQ1OQ",
        "NDI6OTk6NTA3",
      ],
    }),
    new ModuleNpc({
      id: "npc44",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.t4bHhZBBDUyVzEmf",
      label: "IG",
      forIds: ["NTY6MzI2OjM3NQ"],
    }),
    new ModuleNpc({
      id: "npc46",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.MFTMMXiwvW1aqOzs",
      label: "K",
      forIds: ["MzM6Njg6MTM1"],
    }),
    new ModuleNpc({
      id: "npc47",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.QoS5lEJqji2h490F",
      label: "LCP",
      forIds: ["MTI6MzI2OjU5MQ"],
    }),
    new ModuleNpc({
      id: "npc48",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.U2QGjhcg5QFFkHwv",
      label: "SP",
      forIds: ["NDU6Mjk1OjU0Mw"],
    }),
    new ModuleNpc({
      id: "npc49",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.mYJ6NNthl702Pz2s",
      label: "STA",
      forIds: [
        "Mzg6MzI2Ojk5",
        "NTY6OTk6NDEx",
        "Mzk6Njg6MTgz",
        "MzM6Mjk1OjM5OQ",
      ],
    }),
    new ModuleNpc({
      id: "npc50",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.HI2xA7LCpNPkpV03",
      label: "WC",
      forIds: ["MTE6Njg6MTIz"],
    }),
    new ModuleNpc({
      id: "npc51",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.llSpQyOTaylpqgnW",
      label: "W",
      forIds: ["NTQ6MzI2OjYyNw"],
    }),
    new ModuleNpc({
      id: "npc52",
      actorUuid: "Compendium.pf2e.lost-omens-bestiary.Actor.R0IEWkfzEuGAJXJ8",
      label: "YMD",
      forIds: ["ODI6MjUxOjYzOQ"],
    }),
  ];
  journalPages = [
    {
      name: "Chapter 1",
      pages: [
        {
          id: "NjoyMTI6MzU3",
        },
        {
          id: "NzozNzE6Njk5",
        },
        {
          id: "ODo5OTo0MTE",
        },
        {
          id: "ODo5OToxMzU",
        },
        {
          id: "OTo2ODo2OTk",
        },
        {
          id: "MTI6OTk6NjI3",
        },
        {
          id: "MTI6OTk6NTE5",
        },
        {
          id: "MTI6MzI2OjE4Mw",
        },
        {
          id: "MTM6Njg6NDQ3",
        },
        {
          id: "MTM6Mjk1OjY5OQ",
        },
        {
          id: "MTM6MzY5OjE5NQ",
        },
        {
          id: "MTQ6MzI2OjYxNQ",
        },
        {
          id: "MTU6Mjk1OjYzOQ",
        },
        {
          id: "MTU6Mjk1OjI0Mw",
        },
        {
          id: "MTY6MzI2OjMwMw",
        },
      ],
    },
    {
      name: "Chapter 2",
      pages: [
        {
          id: "MTg6MjA5OjM1OA",
        },
        {
          id: "MTk6MzcxOjY5OQ",
        },
        {
          id: "MTg6MzI2OjE3MQ",
        },
        {
          id: "MTk6Njg6ODc",
        },
        {
          id: "MjM6Njg6MTM1",
        },
        {
          id: "MjM6MzQ1OjYxNQ",
        },
        {
          id: "MjQ6OTk6NDcx",
        },
        {
          id: "MjU6Njg6NjE1",
        },
        {
          id: "MjU6Njg6MTcx",
        },
        {
          id: "MjY6MzI2OjIwNw",
        },
        {
          id: "Mjc6Njg6MjE5",
        },
        {
          id: "Mjk6Njg6Mjkx",
        },
        {
          id: "MzA6OTk6NTc5",
        },
        {
          id: "MzE6MzA0OjY4Nw",
        },
        {
          id: "MzE6Njg6NDEx",
        },
        {
          id: "MzE6Mjk1OjM1MQ",
        },
        {
          id: "MzI6OTk6ODc",
        },
        {
          id: "MzM6Njg6Njk5",
        },
        {
          id: "MzM6Njg6Mzk5",
        },
        {
          id: "MzQ6OTk6NDU5",
        },
        {
          id: "MzQ6OTk6MzI3",
        },
        {
          id: "MzQ6MzI2OjYwMw",
        },
        {
          id: "MzU6Mjk1OjU1NQ",
        },
      ],
    },
    {
      name: "Chapter 3",
      pages: [
        {
          id: "MzY6MjA5OjM1OQ",
        },
        {
          id: "Mzc6MzcxOjY5OQ",
        },
        {
          id: "MzY6OTk6MTgz",
        },
        {
          id: "MzY6MzI2OjI3OQ",
        },
        {
          id: "MzY6MzI2Ojk5",
        },
        {
          id: "Mzc6Njg6NDEx",
        },
        {
          id: "Mzc6Njg6Mjkx",
        },
        {
          id: "Mzc6Njg6MTM1",
        },
        {
          id: "Mzg6OTk6MjY3",
        },
        {
          id: "Mzg6OTk6MTIz",
        },
        {
          id: "Mzk6Njg6Njk5",
        },
        {
          id: "Mzk6Njg6NTA3",
        },
        {
          id: "Mzk6Njg6Mzg3",
        },
        {
          id: "Mzk6Mjk1OjYzOQ",
        },
        {
          id: "Mzk6Mjk1OjQ5NQ",
        },
        {
          id: "NDA6MzY0OjQ3MQ",
        },
        {
          id: "NDA6MzI2OjE3MQ",
        },
        {
          id: "NDE6Njg6NDQ3",
        },
        {
          id: "NDE6Njg6MTU5",
        },
        {
          id: "NDE6Mjk1OjUwNw",
        },
        {
          id: "NDE6Mjk1OjIwNw",
        },
        {
          id: "NDI6OTk6Njk5",
        },
        {
          id: "NDI6OTk6NDU5",
        },
        {
          id: "NDI6MzI2OjMzOQ",
        },
        {
          id: "NDU6Njg6NTMx",
        },
        {
          id: "NDU6Njg6MzE1",
        },
        {
          id: "NDU6Mjk1OjY5OQ",
        },
        {
          id: "NDY6OTk6MTEx",
        },
        {
          id: "NDY6MzI2OjEzNQ",
        },
        {
          id: "NDc6Njg6Mzg3",
        },
        {
          id: "NDc6Mjk1OjE0Nw",
        },
        {
          id: "NDg6OTk6MTgz",
        },
        {
          id: "NDk6Mjk1OjQxMQ",
        },
        {
          id: "NTE6Njg6NDU5",
        },
        {
          id: "NTE6MzA0OjY4Nw",
        },
        {
          id: "NTE6Njg6MTk1",
        },
        {
          id: "NTE6Mjk1OjEyMw",
        },
        {
          id: "NTI6MzI2OjIwNw",
        },
        {
          id: "NTM6Njg6NDEx",
        },
        {
          id: "NTM6Njg6OTk",
        },
        {
          id: "NTM6Mjk1OjU1NQ",
        },
        {
          id: "NTQ6OTk6NDIz",
        },
        {
          id: "NTQ6OTk6MjA3",
        },
        {
          id: "NTQ6MzI2OjU3OQ",
        },
        {
          id: "NTQ6MzI2OjI5MQ",
        },
        {
          id: "NTU6Njg6OTk",
        },
        {
          id: "NTY6OTk6MzYz",
        },
        {
          id: "NTY6MzI2OjE4Mw",
        },
        {
          id: "NTc6Njg6NTU1",
        },
        {
          id: "NTc6Njg6MjU1",
        },
        {
          id: "NTg6OTk6MTM1",
        },
        {
          id: "NTg6MzI2OjE3MQ",
        },
        {
          id: "NTk6Njg6MTU5",
        },
      ],
    },
    {
      name: "Back Matter",
      pages: [
        {
          id: "NzU6Njg6Njk5",
        },
        {
          id: "NzU6Njg6NjI3",
        },
        {
          id: "NzU6Mjk1OjY5OQ",
        },
        {
          id: "NzU6Mjk1OjE4Mw",
        },
        {
          id: "NzY6MzI2OjY5OQ",
        },
        {
          id: "Nzc6Njg6MTM1",
        },
        {
          id: "Nzg6MjUxOjY5OQ",
        },
        {
          id: "Nzk6Njg6Njk5",
        },
        {
          id: "ODA6Mjg4OjY5OQ",
        },
        {
          id: "ODE6Njg6Njk5",
        },
        {
          id: "ODI6MjUxOjY5OQ",
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
          id: "ODg6MTcxOjY3Mw",
        },
        {
          id: "OTA6OTk6Njcz",
        },
        {
          id: "OTI6MTkxOjY3Mw",
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
      ],
    },
  ];
  combines = [
    {
      source: "Nzg6MTU1OjY2Mw",
      dest: "Nzg6MjUxOjY5OQ",
    },
    {
      source: "ODk6Njg6MjU1",
      dest: "ODg6MTcxOjY3Mw",
    },
    {
      source: "OTE6Njg6Njk5",
      dest: "OTA6OTk6Njcz",
    },
    {
      source: "OTM6Njg6NTMx",
      dest: "OTI6MTkxOjY3Mw",
    },
    {
      source: "Nzk6MzcxOjY2Mw",
      dest: "Nzk6Njg6Njk5",
    },
    {
      source: "ODc6MzcxOjY2Mw",
      dest: "ODc6Njg6Njk5",
    },
    {
      source: "ODU6MzcxOjY2Mw",
      dest: "ODU6Njg6Njk5",
    },
    {
      source: "ODY6MTI5OjY2Mw",
      dest: "ODY6MjUxOjY5OQ",
    },
    {
      source: "ODQ6MTY5OjY2Mw",
      dest: "ODQ6MjUxOjY5OQ",
    },
    {
      source: "ODM6MzcxOjY2Mw",
      dest: "ODI6MjUxOjY5OQ",
    },
    {
      source: "ODI6MTUyOjY2Mw",
      dest: "ODI6MjUxOjY5OQ",
    },
    {
      source: "ODE6MzcxOjY2Mw",
      dest: "ODE6Njg6Njk5",
    },
    {
      source: "ODA6MTYyOjM1MQ",
      dest: "ODA6Mjg4OjY5OQ",
    },
  ];
  blacklistedFonts = this.blacklistedFonts.concat([
    "RomicStd-Bold:10",
    "RomicStd-Bold:10.154271361845714",
  ]);
  dropCapFontIds = this.dropCapFontIds.concat(["RomicStd-Bold:42.6606"]);
  headingFontIds = this.headingFontIds.concat(["RomicStd-Bold:14"]);
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "AGE OF ASHES: FIRES OF THE HAUNTED CITY" &&
        t.fontId === "Gin-Regular:12",
    );
  }
  preprocess(text) {}
  finalize(moduleData) {}
}
