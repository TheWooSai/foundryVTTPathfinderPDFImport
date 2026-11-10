import { AgeOfAshesBase } from "./base.js";
import { AdventureImage, CaptionImage } from "../../core/images.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class AgeOfAshes6 extends AgeOfAshesBase {
  prefix = "age-of-ashes6";
  fullName = "Age of Ashes - Broken Promises";
  pages = [
    this.ChapterHeadingPageLayout(6),
    this.RightSingleColumnWithSidebar(7),
    this.LeftTwoColumn(8),
    this.RightTwoColumnWithRightCutout(9, 480),
    this.LeftTwoColumn(10),
    this.RightTwoColumn(11),
    this.LeftTwoColumn(12),
    this.RightTwoColumn(13),
    this.LeftTwoColumn(14),
    this.RightTwoColumnWithRightCutout(15, 570),
    this.LeftTwoColumn(16),
    this.RightTwoColumn(17),
    this.LeftTwoColumnWithLeftCutout(18, 320),
    this.RightTwoColumn(19),
    this.LeftTwoColumn(20),
    this.RightTwoColumn(21),
    this.ChapterHeadingPageLayout(22),
    this.RightSingleColumnWithSidebar(23),
    this.LeftTwoColumnWithMap(24, 357),
    this.RightTwoColumn(25),
    this.LeftTwoColumn(26),
    this.RightTwoColumn(27),
    this.LeftTwoColumn(28),
    this.RightTwoColumn(29),
    this.LeftTwoColumn(30),
    this.RightTwoColumn(31),
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
    this.LeftTwoColumn(46),
    this.RightTwoColumnWithRightCutout(47, 200),
    this.LeftTwoColumn(48),
    this.RightTwoColumn(49),
    this.LeftTwoColumn(50),
    this.RightTwoColumn(51),
    this.ChapterHeadingPageLayout(52),
    this.RightSingleColumnWithSidebar(53),
    this.LeftTwoColumnWithLeftCutout(54, 550),
    this.RightTwoColumn(55),
    this.RightTwoColumnWithRightCutout(57, 510),
    this.LeftTwoColumn(58),
    this.RightTwoColumn(59),
    this.LeftTwoColumn(60),
    this.RightTwoColumn(61),
    this.LeftTwoColumn(62),
    this.RightTwoColumn(63),
    this.LeftTwoColumn(64),
    this.RightTwoColumn(65),
    this.LeftTwoColumnWithMap(66, 360),
    this.RightTwoColumn(67),
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
        name: "aoa6/map1",
        priority: 0,
      },
      nameInfo: {
        x: 23.31,
        y: 726.6831,
      },
      page: 2,
      width: 1262,
      height: 1637,
      gridType: "gridless",
      globalLight: true,
      imageLeft: 0,
      imageTop: 0,
      imageRight: 1e3,
      imageBottom: 1e3,
      imageRows: 10,
      imageCols: 10,
      detailsFile: "/aoa/maps/aoa6-map1.json",
    }),
    new ModuleScene({
      name: "map2",
      canonical: {
        name: "aoa6/map2",
        priority: 0,
      },
      nameInfo: {
        x: 112,
        y: 690.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 14,
      width: 572,
      height: 850,
      imageLeft: 11,
      imageRight: 566,
      imageCols: 41,
      imageTop: 14,
      imageBottom: 845,
      imageRows: 61,
      globalLight: true,
      detailsFile: "/aoa/maps/aoa6-map2.json",
    }),
    new ModuleScene({
      name: "map3",
      canonical: {
        name: "aoa6/map3",
        priority: 0,
      },
      nameInfo: {
        x: 112,
        y: 690.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 20,
      width: 576,
      height: 852,
      imageLeft: 58,
      imageRight: 532,
      imageCols: 35,
      imageTop: 14,
      imageBottom: 752,
      imageRows: 54,
      detailsFile: "/aoa/maps/aoa6-map3.json",
      journals: [
        {
          x: 3150,
          y: 4450,
          id: "MTk6Mjk1OjMwMw",
        },
        {
          x: 1550,
          y: 3250,
          id: "MjA6OTk6MTEx",
        },
        {
          x: 4650,
          y: 3350,
          id: "MjE6Njg6Mzc1",
        },
        {
          x: 3150,
          y: 6350,
          id: "MjE6Njg6MTIz",
        },
        {
          x: 1150,
          y: 1650,
          id: "MTk6Njg6Mjkx",
        },
      ],
      tokens: [
        {
          id: "npc2",
          x: 2900,
          y: 4100,
        },
        {
          id: "npc2",
          x: 3300,
          y: 4200,
        },
        {
          id: "npc4",
          x: 1500,
          y: 3400,
        },
      ],
    }),
    new ModuleScene({
      name: "map4",
      canonical: {
        name: "aoa6/map4",
        priority: 0,
      },
      nameInfo: {
        x: 25,
        y: 758.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 24,
      width: 1262,
      height: 855,
      imageLeft: 14,
      imageRight: 1198,
      imageCols: 80,
      imageTop: 103,
      imageBottom: 774,
      imageRows: 45,
      detailsFile: "/aoa/maps/aoa6-map4.json",
      journals: [
        {
          x: 9550,
          y: 2650,
          id: "MjM6Njg6Mjc5",
        },
        {
          x: 9350,
          y: 5950,
          id: "MjQ6OTk6MzUx",
        },
        {
          x: 7150,
          y: 4250,
          id: "MjQ6MzI2OjExMQ",
        },
        {
          x: 3550,
          y: 5350,
          id: "MjY6OTk6NjM5",
        },
        {
          x: 2250,
          y: 1550,
          id: "MjM6Njg6NDU5",
        },
      ],
      tokens: [
        {
          id: "npc5",
          x: 3400,
          y: 5600,
        },
        {
          id: "npc32",
          x: 3300,
          y: 5400,
        },
      ],
    }),
    new ModuleScene({
      name: "map5",
      canonical: {
        name: "aoa6/map5",
        priority: 0,
      },
      nameInfo: {
        x: 156,
        y: 730.6681,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 36,
      width: 850,
      height: 928,
      imageLeft: 45,
      imageRight: 760,
      imageCols: 48,
      imageTop: 97,
      imageBottom: 817,
      imageRows: 48,
      gridDistance: 20,
      globalLight: true,
      detailsFile: "/aoa/maps/aoa6-map5.json",
      journals: [
        {
          x: 4250,
          y: 4750,
          id: "MzY6MzI2OjMwMw",
        },
        {
          x: 2450,
          y: 3950,
          id: "Mzc6Njg6NDgz",
        },
        {
          x: 2850,
          y: 3450,
          id: "Mzc6Njg6MzI3",
        },
        {
          x: 2550,
          y: 2850,
          id: "Mzc6Njg6MTgz",
        },
        {
          x: 3450,
          y: 3250,
          id: "Mzc6Mjk1OjYzOQ",
        },
        {
          x: 3450,
          y: 2750,
          id: "Mzc6Mjk1OjQzNQ",
        },
        {
          x: 3950,
          y: 2450,
          id: "Mzc6Mjk1OjI2Nw",
        },
        {
          x: 3950,
          y: 2750,
          id: "Mzc6Mjk1OjI2Nw",
        },
        {
          x: 3950,
          y: 3050,
          id: "Mzc6Mjk1OjI2Nw",
        },
        {
          x: 4650,
          y: 2450,
          id: "Mzc6Mjk1OjE3MQ",
        },
        {
          x: 4650,
          y: 2750,
          id: "Mzc6Mjk1OjE3MQ",
        },
        {
          x: 4650,
          y: 3050,
          id: "Mzc6Mjk1OjE3MQ",
        },
        {
          x: 5050,
          y: 2650,
          id: "Mzg6OTk6Njk5",
        },
        {
          x: 5150,
          y: 3250,
          id: "Mzg6OTk6NDk1",
        },
        {
          x: 5650,
          y: 3350,
          id: "Mzg6OTk6MzE1",
        },
        {
          x: 6050,
          y: 2850,
          id: "Mzg6OTk6MTIz",
        },
        {
          x: 6050,
          y: 3950,
          id: "Mzg6MzI2OjY2Mw",
        },
        {
          x: 6050,
          y: 5350,
          id: "Mzg6MzI2OjU1NQ",
        },
        {
          x: 5750,
          y: 5850,
          id: "Mzg6MzI2OjM5OQ",
        },
        {
          x: 5950,
          y: 6450,
          id: "Mzg6MzI2OjIzMQ",
        },
        {
          x: 5150,
          y: 6650,
          id: "Mzk6Njg6NjM5",
        },
        {
          x: 5050,
          y: 6250,
          id: "Mzk6Njg6NTMx",
        },
        {
          x: 4650,
          y: 6350,
          id: "Mzk6Njg6NDM1",
        },
        {
          x: 4650,
          y: 6650,
          id: "Mzk6Njg6NDM1",
        },
        {
          x: 4650,
          y: 6950,
          id: "Mzk6Njg6NDM1",
        },
        {
          x: 3950,
          y: 6350,
          id: "Mzk6Njg6MzE1",
        },
        {
          x: 3950,
          y: 6650,
          id: "Mzk6Njg6MzE1",
        },
        {
          x: 3950,
          y: 6950,
          id: "Mzk6Njg6MzE1",
        },
        {
          x: 3650,
          y: 6650,
          id: "Mzk6Njg6MjA3",
        },
        {
          x: 3150,
          y: 5850,
          id: "Mzk6Mjk1OjQ0Nw",
        },
        {
          x: 3150,
          y: 6450,
          id: "Mzk6Mjk1OjY5OQ",
        },
        {
          x: 2550,
          y: 6450,
          id: "Mzk6Mjk1OjU2Nw",
        },
        {
          x: 2250,
          y: 5350,
          id: "Mzk6Mjk1OjMzOQ",
        },
        {
          x: 1650,
          y: 1750,
          id: "MzY6OTk6MTU5",
        },
      ],
      tokens: [
        {
          id: "npc34",
          x: 2700,
          y: 2900,
        },
        {
          id: "npc34",
          x: 2500,
          y: 3e3,
        },
        {
          id: "npc34",
          x: 3500,
          y: 2700,
        },
        {
          id: "npc34",
          x: 3400,
          y: 2800,
        },
        {
          id: "npc34",
          x: 5100,
          y: 2700,
        },
        {
          id: "npc34",
          x: 5e3,
          y: 2800,
        },
        {
          id: "npc34",
          x: 5800,
          y: 3300,
        },
        {
          id: "npc34",
          x: 5600,
          y: 3200,
        },
        {
          id: "npc34",
          x: 6200,
          y: 3900,
        },
        {
          id: "npc34",
          x: 6100,
          y: 3800,
        },
        {
          id: "npc34",
          x: 6e3,
          y: 3800,
        },
        {
          id: "npc34",
          x: 5900,
          y: 3800,
        },
        {
          id: "npc34",
          x: 3900,
          y: 4500,
        },
        {
          id: "npc34",
          x: 4600,
          y: 4800,
        },
      ],
    }),
    new ModuleScene({
      name: "map6",
      canonical: {
        name: "aoa6/map6",
        priority: 0,
      },
      nameInfo: {
        x: 270.4408,
        y: 294.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 40,
      width: 561,
      height: 490,
      imageLeft: 36,
      imageRight: 476,
      imageCols: 23,
      imageTop: 65,
      imageBottom: 434,
      imageRows: 19,
      detailsFile: "/aoa/maps/aoa6-map6.json",
      journals: [
        {
          x: 1250,
          y: 1250,
          id: "NDA6OTk6NTkx",
        },
        {
          x: 3050,
          y: 1250,
          id: "NDA6OTk6MzYz",
        },
        {
          x: 1750,
          y: 2750,
          id: "NDA6MzI2OjQxMQ",
        },
        {
          x: 1750,
          y: 2150,
          id: "NDI6MzI2OjUwNw",
        },
        {
          x: 2250,
          y: 1950,
          id: "NDM6Njg6NjE1",
        },
        {
          x: 850,
          y: 750,
          id: "Mzk6Mjk1OjIwNw",
        },
      ],
      tokens: [
        {
          id: "npc34",
          x: 1200,
          y: 1100,
        },
        {
          id: "npc34",
          x: 1100,
          y: 1300,
        },
        {
          id: "npc34",
          x: 1e3,
          y: 1200,
        },
        {
          id: "npc9",
          x: 1800,
          y: 2600,
        },
        {
          id: "npc29",
          x: 1800,
          y: 2800,
        },
        {
          id: "npc29",
          x: 1600,
          y: 2800,
        },
        {
          id: "npc10",
          x: 1900,
          y: 2300,
        },
        {
          id: "npc10",
          x: 1800,
          y: 2200,
        },
        {
          id: "npc10",
          x: 1800,
          y: 2100,
        },
        {
          id: "npc11",
          x: 2300,
          y: 2e3,
        },
      ],
    }),
    new ModuleScene({
      name: "map7",
      canonical: {
        name: "aoa6/map7",
        priority: 0,
      },
      nameInfo: {
        x: 407.9773,
        y: 486.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 45,
      width: 561,
      height: 502,
      imageLeft: 57,
      imageRight: 475,
      imageCols: 22,
      imageTop: 54,
      imageBottom: 439,
      imageRows: 20,
      detailsFile: "/aoa/maps/aoa6-map7.json",
      journals: [
        {
          x: 1350,
          y: 2550,
          id: "NDU6Njg6NjM5",
        },
        {
          x: 1450,
          y: 1950,
          id: "NDU6Njg6Mzk5",
        },
        {
          x: 1750,
          y: 1050,
          id: "NDU6Njg6MzAz",
        },
        {
          x: 2550,
          y: 1350,
          id: "NDU6Mjk1OjIzMQ",
        },
        {
          x: 3150,
          y: 1250,
          id: "NDU6Mjk1OjExMQ",
        },
        {
          x: 2250,
          y: 1950,
          id: "NDY6OTk6NTU1",
        },
        {
          x: 3050,
          y: 2350,
          id: "NDY6OTk6NDIz",
        },
        {
          x: 2350,
          y: 2650,
          id: "NDY6MzI2OjI3OQ",
        },
        {
          x: 950,
          y: 850,
          id: "NDQ6Mzk1OjI3OQ",
        },
      ],
      tokens: [
        {
          id: "npc20",
          x: 1200,
          y: 1400,
        },
      ],
    }),
    new ModuleScene({
      name: "map8a",
      canonical: {
        name: "aoa6/map8a",
        priority: 0,
      },
      nameInfo: {
        x: 12.0144,
        y: 759.8362,
      },
      nameFn: (name) => `${this.sentenceCase(name)}'s Landing`,
      page: 56,
      width: 1262,
      height: 1637,
      cropLeft: 0,
      cropRight: 616,
      cropTop: 0,
      cropBottom: 536,
      imageLeft: 41,
      imageRight: 602,
      imageCols: 37,
      imageTop: 91,
      imageBottom: 458,
      imageRows: 24,
      globalLight: true,
      detailsFile: "/aoa/maps/aoa6-map8a.json",
      journals: [
        {
          x: 2250,
          y: 2250,
          id: "NTU6Njg6MTk1",
        },
        {
          x: 3850,
          y: 1950,
          id: "NTU6Mjk1OjE0Nw",
        },
      ],
      tokens: [
        {
          id: "npc13",
          x: 3600,
          y: 1900,
        },
      ],
    }),
    new ModuleScene({
      name: "map8b",
      canonical: {
        name: "aoa6/map8b",
        priority: 0,
      },
      nameInfo: {
        x: 12.0144,
        y: 507.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 56,
      width: 1262,
      height: 1637,
      cropLeft: 0,
      cropRight: 616,
      cropTop: 540,
      cropBottom: 1095,
      imageLeft: 41,
      imageRight: 602,
      imageCols: 37,
      imageTop: 543,
      imageBottom: 1093,
      imageRows: 36,
      globalLight: true,
      gridDistance: 10,
      detailsFile: "/aoa/maps/aoa6-map8b.json",
      journals: [
        {
          x: 2050,
          y: 2850,
          id: "NjA6MzI2OjU0Mw",
        },
      ],
      tokens: [
        {
          id: "npc15",
          x: 2900,
          y: 2500,
        },
        {
          id: "npc15",
          x: 3500,
          y: 2200,
        },
        {
          id: "npc15",
          x: 3300,
          y: 3100,
        },
      ],
    }),
    new ModuleScene({
      name: "map8c",
      canonical: {
        name: "aoa6/map8c",
        priority: 0,
      },
      nameInfo: {
        x: 12.0144,
        y: 239.0862,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 56,
      width: 1262,
      height: 1637,
      cropLeft: 0,
      cropRight: 616,
      cropTop: 1097,
      cropBottom: 1637,
      imageLeft: 41,
      imageRight: 602,
      imageCols: 37,
      imageTop: 1105,
      imageBottom: 1625,
      imageRows: 34,
      globalLight: true,
      gridDistance: 10,
      detailsFile: "/aoa/maps/aoa6-map8c.json",
      journals: [
        {
          x: 1750,
          y: 2350,
          id: "NjI6OTk6MzM5",
        },
      ],
      tokens: [
        {
          id: "npc16",
          x: 2900,
          y: 1800,
        },
        {
          id: "npc16",
          x: 2900,
          y: 2500,
        },
      ],
    }),
    new ModuleScene({
      name: "map8d",
      canonical: {
        name: "aoa6/map8d",
        priority: 0,
      },
      nameInfo: {
        x: 305,
        y: 759.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 56,
      width: 1262,
      height: 1637,
      cropLeft: 619,
      cropRight: 1262,
      cropTop: 0,
      cropBottom: 536,
      imageLeft: 621,
      imageRight: 1244,
      imageCols: 41,
      imageTop: 9,
      imageBottom: 528,
      imageRows: 34,
      globalLight: true,
      detailsFile: "/aoa/maps/aoa6-map8d.json",
      journals: [
        {
          x: 2850,
          y: 2250,
          id: "NTg6MzI2OjIzMQ",
        },
      ],
      tokens: [
        {
          id: "npc14",
          x: 3200,
          y: 1700,
        },
        {
          id: "npc30",
          x: 4200,
          y: 2700,
        },
        {
          id: "npc30",
          x: 1900,
          y: 2700,
        },
      ],
    }),
    new ModuleScene({
      name: "map8e",
      canonical: {
        name: "aoa6/map8e",
        priority: 0,
      },
      nameInfo: {
        x: 305,
        y: 507.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 56,
      width: 1262,
      height: 1637,
      cropLeft: 619,
      cropRight: 1262,
      cropTop: 540,
      cropBottom: 1095,
      imageLeft: 633,
      imageRight: 1255,
      imageCols: 41,
      imageTop: 556,
      imageBottom: 1091,
      imageRows: 35,
      globalLight: true,
      detailsFile: "/aoa/maps/aoa6-map8e.json",
      journals: [
        {
          x: 1750,
          y: 2850,
          id: "NjE6Njg6Mjkx",
        },
      ],
      tokens: [
        {
          id: "npc22",
          x: 1300,
          y: 2600,
        },
        {
          id: "npc19",
          x: 3400,
          y: 2400,
        },
        {
          id: "npc19",
          x: 3e3,
          y: 2600,
        },
        {
          id: "npc19",
          x: 3100,
          y: 3100,
        },
        {
          id: "npc19",
          x: 3500,
          y: 3200,
        },
      ],
    }),
    new ModuleScene({
      name: "map8f",
      canonical: {
        name: "aoa6/map8f",
        priority: 0,
      },
      nameInfo: {
        x: 305,
        y: 239.0862,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 56,
      width: 1262,
      height: 1637,
      cropLeft: 619,
      cropRight: 1262,
      cropTop: 1097,
      cropBottom: 1637,
      imageLeft: 648,
      imageRight: 1224,
      imageCols: 38,
      imageTop: 1183,
      imageBottom: 1626,
      imageRows: 29,
      gridDistance: 20,
      globalLight: true,
      detailsFile: "/aoa/maps/aoa6-map8f.json",
      journals: [
        {
          x: 3050,
          y: 2450,
          id: "NjM6Njg6Njk5",
        },
      ],
      tokens: [
        {
          id: "npc17",
          x: 2800,
          y: 1700,
        },
      ],
    }),
    new ModuleScene({
      name: "map9",
      canonical: {
        name: "aoa6/map9",
        priority: 0,
      },
      nameInfo: {
        x: 25,
        y: 758.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 66,
      width: 1262,
      height: 855,
      imageLeft: 7,
      imageRight: 1251,
      imageCols: 84,
      imageTop: 7,
      imageBottom: 843,
      imageRows: 56,
      globalLight: true,
      detailsFile: "/aoa/maps/aoa6-map9.json",
      journals: [
        {
          x: 6650,
          y: 4150,
          id: "NjU6Mjk1OjY1MQ",
        },
      ],
      tokens: [
        {
          id: "npc18",
          x: 6400,
          y: 3200,
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
      page: 4,
      width: 1261,
      height: 1636,
    }),
    new AdventureImage({
      name: "journal3",
      page: 6,
      width: 1261,
      height: 830,
    }),
    new AdventureImage({
      name: "journal4",
      page: 22,
      width: 1259,
      height: 830,
    }),
    new AdventureImage({
      name: "journal5",
      page: 52,
      width: 1259,
      height: 830,
    }),
    new AdventureImage({
      name: "journal6",
      page: 68,
      width: 1262,
      height: 1636,
    }),
    new CaptionImage({
      name: "journal7",
      page: 70,
      width: 920,
      height: 862,
    }),
    new AdventureImage({
      name: "journal8",
      page: 73,
      width: 429,
      height: 230,
    }),
    new AdventureImage({
      name: "journal9",
      page: 74,
      width: 1259,
      height: 1636,
    }),
    new AdventureImage({
      name: "journal10",
      page: 76,
      width: 879,
      height: 1159,
    }),
    new AdventureImage({
      name: "journal11",
      page: 79,
      width: 923,
      height: 928,
    }),
    new AdventureImage({
      name: "journal12",
      page: 1,
      width: 1081,
      height: 1371,
    }),
    new AdventureImage({
      name: "journal13",
      page: 93,
      width: 912,
      height: 1504,
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.l7WhZMoYlQC8lELj",
      page: 10,
      width: 899,
      height: 1210,
      tokenX: 137,
      tokenY: 61,
      tokenSize: 1322,
      forIds: ["OToyOTU6Mjc5"],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.yrU0xi4eKBmcGudo",
      page: 12,
      width: 938,
      height: 1238,
      tokenX: -163,
      tokenY: -73,
      tokenSize: 510,
      forIds: ["MTI6OTk6Njk5", "MjA6OTk6MTU5", "MTM6Mjk1OjQzNQ"],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.F9BHPV16N4eEL0TP",
      page: 16,
      width: 899,
      height: 1299,
      tokenX: -204,
      tokenY: -110,
      tokenSize: 459,
      forIds: ["MTY6MzI2OjY2Mw"],
    }),
    new ModuleNpc({
      id: "npc4",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.hPPdfkiRZ1LUpN2h",
      page: 21,
      width: 820,
      height: 1150,
      tokenX: -249,
      tokenY: 42,
      tokenSize: 338,
      forIds: ["MjA6MzI2OjE0Nw"],
    }),
    new ModuleNpc({
      id: "npc5",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.jZc4PrsX3HCJnkXx",
      page: 89,
      width: 883,
      height: 1251,
      tokenX: -347,
      tokenY: -79,
      tokenSize: 327,
      forIds: ["ODk6Njg6NjAz", "MjY6MzI2OjU1NQ", "NjU6Njg6MTQ3"],
    }),
    new ModuleNpc({
      id: "npc6",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.sUGKrcx7kbHkWnwG",
      name: {
        page: 29,
        x: 327.7387,
        y: 117.1728,
      },
      page: 29,
      width: 903,
      height: 1143,
      tokenX: -281,
      tokenY: 23,
      tokenSize: 415,
      forIds: ["MTg6MTA4OjM4Nw"],
    }),
    new ModuleNpc({
      id: "npc7",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.Afq4Osh3W1k9Bcsh",
      page: 31,
      width: 767,
      height: 1174,
      tokenX: -98,
      tokenY: 101,
      tokenSize: 474,
      forIds: ["MzE6Njg6Njk5"],
    }),
    new ModuleNpc({
      id: "npc8",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.30FX1WFr0RkGeueX",
      page: 91,
      width: 869,
      height: 1291,
      tokenX: -376,
      tokenY: -65,
      tokenSize: 283,
      forIds: ["OTE6Njg6MzI3"],
    }),
    new ModuleNpc({
      id: "npc9",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.lcYcBIFmfKFt8Hcs",
      page: 42,
      width: 770,
      height: 1178,
      tokenX: -275,
      tokenY: 61,
      tokenSize: 310,
      forIds: ["NDE6Mjk1OjU5MQ"],
    }),
    new ModuleNpc({
      id: "npc10",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.5dSVk2y88SLsPPON",
      page: 43,
      width: 745,
      height: 872,
      tokenX: 56,
      tokenY: -14,
      tokenSize: 676,
      forIds: ["NDI6MzI2OjIxOQ"],
    }),
    new ModuleNpc({
      id: "npc11",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 44,
        x: 317.2372,
        y: 108.6081,
      },
      page: 44,
      width: 478,
      height: 1156,
      tokenX: -20,
      tokenY: 60,
      tokenSize: 372,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc12",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.6AN7eagk2WrWc4im",
      page: 49,
      width: 511,
      height: 604,
      tokenX: -2,
      tokenY: 87,
      tokenSize: 632,
      forIds: ["OTI6MzI2OjEzNQ"],
    }),
    new ModuleNpc({
      id: "npc13",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.53lk7ek73j65A09B",
      page: 58,
      width: 867,
      height: 1213,
      tokenX: -230,
      tokenY: 31,
      tokenSize: 401,
      forIds: ["NTg6MzI2OjYzOQ"],
    }),
    new ModuleNpc({
      id: "npc14",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.Ev930dfPpwCR8Zju",
      page: 60,
      width: 744,
      height: 1214,
      tokenX: -108,
      tokenY: -79,
      tokenSize: 402,
      forIds: ["NTk6Mjk1OjUxOQ"],
    }),
    new ModuleNpc({
      id: "npc15",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.X4oeJnv1KcpHFO6i",
      page: 61,
      width: 886,
      height: 1226,
      tokenX: 113,
      tokenY: 131,
      tokenSize: 1226,
      forIds: ["ODM6Njg6NDgz", "NjE6Njg6NDcx"],
    }),
    new ModuleNpc({
      id: "npc16",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.QT2gA8WMaT2cuXr7",
      page: 63,
      width: 809,
      height: 1281,
      tokenX: -188,
      tokenY: -79,
      tokenSize: 441,
      forIds: ["NjI6MzI2OjE3MQ"],
    }),
    new ModuleNpc({
      id: "npc17",
      actorUuid: "Compendium.pf2e.lost-omens-bestiary.Actor.xcnM6RMbA2ROniM7",
      page: 64,
      width: 957,
      height: 1349,
      tokenX: -89,
      tokenY: -29,
      tokenSize: 537,
      forIds: ["ODc6Njg6NDgz", "NjQ6MzI2OjEzNQ"],
    }),
    new ModuleNpc({
      id: "npc18",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.sY47PB9b7nCJjgRq",
      page: 67,
      width: 944,
      height: 1252,
      tokenX: -203,
      tokenY: -339,
      tokenSize: 608,
      forIds: ["NjU6Mjk1OjE0Nw"],
    }),
    new ModuleNpc({
      id: "npc19",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.ZqL6MP4XxDys9dmW",
      page: 80,
      width: 970,
      height: 1261,
      tokenX: -357,
      tokenY: 26,
      tokenSize: 533,
      forIds: ["ODA6MzU1OjUzMQ", "NjI6OTk6NDk1"],
    }),
    new ModuleNpc({
      id: "npc20",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.X6TTBlHIfJZ43OqR",
      page: 81,
      width: 975,
      height: 1137,
      tokenX: -260,
      tokenY: 61,
      tokenSize: 745,
      forIds: ["ODE6Njg6NjM5", "NDU6Mjk1OjMyNw"],
    }),
    new ModuleNpc({
      id: "npc21",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.5r2S6FeE6D1Oh66T",
      page: 82,
      width: 882,
      height: 1141,
      tokenX: -66,
      tokenY: -25,
      tokenSize: 693,
      forIds: ["ODI6MjUxOjUzMQ"],
    }),
    new ModuleNpc({
      id: "npc22",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.Ws6554On4eh2Blq7",
      page: 84,
      width: 822,
      height: 1253,
      tokenX: -171,
      tokenY: -212,
      tokenSize: 385,
      forIds: ["ODQ6MjUxOjYxNQ", "NjI6OTk6NTQz"],
    }),
    new ModuleNpc({
      id: "npc23",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.xPV49ZBCwDdCq5eI",
      page: 85,
      width: 712,
      height: 1038,
      tokenX: -69,
      tokenY: -242,
      tokenSize: 590,
      forIds: ["ODU6Njg6NjM5", "NTU6Mjk1OjE5NQ"],
    }),
    new ModuleNpc({
      id: "npc24",
      actorUuid: "Compendium.pf2e.lost-omens-bestiary.Actor.mkhoMY6pFClaARVg",
      page: 86,
      width: 903,
      height: 1579,
      tokenX: -99,
      tokenY: -375,
      tokenSize: 543,
      forIds: ["ODY6Mjk0OjY1MQ"],
    }),
    new ModuleNpc({
      id: "npc25",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.jZc4PrsX3HCJnkXx",
      name: {
        page: 99,
        x: 683.9999,
        y: 686.543,
      },
      page: 99,
      width: 349,
      height: 416,
      tokenX: 86,
      tokenY: 92,
      tokenSize: 528,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc26",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 99,
        x: 812.5599,
        y: 513.6921,
      },
      page: 99,
      width: 344,
      height: 442,
      tokenX: 57,
      tokenY: 24,
      tokenSize: 442,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc27",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.9vNYtJZiseCEf4wt",
      label: "B",
      forIds: ["MTc6Njg6NTkx"],
    }),
    new ModuleNpc({
      id: "npc28",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.llSpQyOTaylpqgnW",
      label: "W",
      forIds: ["MTE6Njg6MTQ3"],
    }),
    new ModuleNpc({
      id: "npc29",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.Ig1joUmSHSNL6QVU",
      label: "IA",
      forIds: ["NDI6OTk6NjYz"],
    }),
    new ModuleNpc({
      id: "npc30",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.9H11QHnoKz8hHKSM",
      label: "ARD",
      forIds: ["NjA6OTk6Njk5"],
    }),
    new ModuleNpc({
      id: "npc31",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.N8vOjTD2SqS2b9Sy",
      label: "LMOD",
      forIds: ["MTg6OTk6MzE1"],
    }),
    new ModuleNpc({
      id: "npc32",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.kLX36WXp6rjTt71z",
      label: "RB",
      forIds: ["MjY6MzI2OjUwNw", "NjU6Njg6OTk"],
    }),
    new ModuleNpc({
      id: "npc33",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.ImueS9YFhV6sxqBP",
      label: "M",
      forIds: ["MTM6Njg6NjM5"],
    }),
    new ModuleNpc({
      id: "npc34",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.Afq4Osh3W1k9Bcsh",
      name: {
        page: 35,
        x: 67.5599,
        y: 663,
      },
      label: "CG",
      forIds: ["MzU6Njg6NjYz", "NjU6Mjk1OjY5OQ", "NDA6OTk6NDEx"],
      elite: true,
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
          id: "Nzo2ODo5OQ",
        },
        {
          id: "ODo5OTozOTk",
        },
        {
          id: "ODozMjY6MjY3",
        },
        {
          id: "OTozMDQ6Njg3",
        },
        {
          id: "OTo2ODo1MDc",
        },
        {
          id: "MTA6MzkwOjQ0Nw",
        },
        {
          id: "MTA6MzkyOjE4Mw",
        },
        {
          id: "MTE6Njg6NTU1",
        },
        {
          id: "MTE6Mjk1OjM3NQ",
        },
        {
          id: "MTI6Mzc3OjMyNw",
        },
        {
          id: "MTM6Njg6NTQz",
        },
        {
          id: "MTM6Njg6OTk",
        },
        {
          id: "MTM6Mjk1OjMzOQ",
        },
        {
          id: "MTU6MzA0OjY4Nw",
        },
        {
          id: "MTU6Njg6NjI3",
        },
        {
          id: "MTU6Mjk1OjE1OQ",
        },
        {
          id: "MTY6MzM4OjIzMQ",
        },
        {
          id: "MTc6Njg6NDgz",
        },
        {
          id: "MTc6Mjk1OjYyNw",
        },
        {
          id: "MTc6Mjk1OjQ0Nw",
        },
        {
          id: "MTg6MTA4OjY4Nw",
        },
        {
          id: "MTg6MzI2OjIzMQ",
        },
        {
          id: "MTk6Njg6Mjkx",
        },
        {
          id: "MTk6Mjk1OjMwMw",
        },
        {
          id: "MjA6OTk6MTEx",
        },
        {
          id: "MjE6Njg6Mzc1",
        },
        {
          id: "MjE6Njg6MTIz",
        },
      ],
    },
    {
      name: "Chapter 2",
      pages: [
        {
          id: "MjI6MjA5OjM1OA",
        },
        {
          id: "MjM6MzcxOjY5OQ",
        },
        {
          id: "MjM6Njg6NDU5",
        },
        {
          id: "MjM6Njg6Mjc5",
        },
        {
          id: "MjQ6OTk6MzUx",
        },
        {
          id: "MjQ6MzI2OjExMQ",
        },
        {
          id: "MjY6OTk6NjM5",
        },
        {
          id: "Mjg6MTA4OjY4Nw",
        },
        {
          id: "Mjc6Njg6MzYz",
        },
        {
          id: "Mjk6Mjk1OjY5OQ",
        },
        {
          id: "MzA6OTk6Njk5",
        },
        {
          id: "MzA6OTk6MzYz",
        },
        {
          id: "MzA6MzI2OjUxOQ",
        },
        {
          id: "MzE6Njg6OTk",
        },
        {
          id: "MzI6OTk6NjM5",
        },
        {
          id: "MzI6OTk6NDIz",
        },
        {
          id: "MzM6Mjk1OjI2Nw",
        },
        {
          id: "MzM6Mjk1OjE0Nw",
        },
        {
          id: "MzQ6OTk6NTE5",
        },
        {
          id: "MzU6Njg6NjE1",
        },
        {
          id: "MzU6Njg6MzAz",
        },
        {
          id: "MzY6OTk6MTU5",
        },
        {
          id: "MzY6MzI2OjMwMw",
        },
        {
          id: "Mzc6Njg6NDgz",
        },
        {
          id: "Mzc6Njg6MzI3",
        },
        {
          id: "Mzc6Njg6MTgz",
        },
        {
          id: "Mzc6Mjk1OjYzOQ",
        },
        {
          id: "Mzc6Mjk1OjQzNQ",
        },
        {
          id: "Mzc6Mjk1OjI2Nw",
        },
        {
          id: "Mzc6Mjk1OjE3MQ",
        },
        {
          id: "Mzg6OTk6Njk5",
        },
        {
          id: "Mzg6OTk6NDk1",
        },
        {
          id: "Mzg6OTk6MzE1",
        },
        {
          id: "Mzg6OTk6MTIz",
        },
        {
          id: "Mzg6MzI2OjY2Mw",
        },
        {
          id: "Mzg6MzI2OjU1NQ",
        },
        {
          id: "Mzg6MzI2OjM5OQ",
        },
        {
          id: "Mzg6MzI2OjIzMQ",
        },
        {
          id: "Mzk6Njg6NjM5",
        },
        {
          id: "Mzk6Njg6NTMx",
        },
        {
          id: "Mzk6Njg6NDM1",
        },
        {
          id: "Mzk6Njg6MzE1",
        },
        {
          id: "Mzk6Njg6MjA3",
        },
        {
          id: "Mzk6Mjk1OjY5OQ",
        },
        {
          id: "Mzk6Mjk1OjU2Nw",
        },
        {
          id: "Mzk6Mjk1OjQ0Nw",
        },
        {
          id: "Mzk6Mjk1OjMzOQ",
        },
        {
          id: "Mzk6Mjk1OjIwNw",
        },
        {
          id: "NDA6OTk6NTkx",
        },
        {
          id: "NDA6OTk6MzYz",
        },
        {
          id: "NDA6MzI2OjQxMQ",
        },
        {
          id: "NDI6MzI2OjUwNw",
        },
        {
          id: "NDM6Njg6NjE1",
        },
        {
          id: "NDQ6Mzk1OjI3OQ",
        },
        {
          id: "NDU6Njg6NjM5",
        },
        {
          id: "NDU6Njg6Mzk5",
        },
        {
          id: "NDU6Njg6MzAz",
        },
        {
          id: "NDU6Mjk1OjIzMQ",
        },
        {
          id: "NDU6Mjk1OjExMQ",
        },
        {
          id: "NDY6OTk6NTU1",
        },
        {
          id: "NDY6OTk6NDIz",
        },
        {
          id: "NDY6MzI2OjI3OQ",
        },
        {
          id: "NDg6MTA4OjY4Nw",
        },
        {
          id: "NDc6Njg6NDgz",
        },
        {
          id: "NDg6OTk6OTk",
        },
        {
          id: "NDg6MzI2OjE3MQ",
        },
        {
          id: "NTA6OTk6MzE1",
        },
        {
          id: "NTA6MzI2OjQyMw",
        },
        {
          id: "NTE6Njg6Njk5",
        },
        {
          id: "NTE6Njg6MTM1",
        },
      ],
    },
    {
      name: "Chapter 3",
      pages: [
        {
          id: "NTI6MjA5OjM1OQ",
        },
        {
          id: "NTM6MzcxOjY5OQ",
        },
        {
          id: "NTM6Njg6Njk5",
        },
        {
          id: "NTM6Njg6MTM1",
        },
        {
          id: "NTQ6MTA4OjY4Nw",
        },
        {
          id: "NTQ6OTk6OTk",
        },
        {
          id: "NTQ6MzI2OjEyMw",
        },
        {
          id: "NTU6Njg6MzUx",
        },
        {
          id: "NTU6Njg6MTk1",
        },
        {
          id: "NTU6Mjk1OjE0Nw",
        },
        {
          id: "NTc6MzA0OjY4Nw",
        },
        {
          id: "NTg6MzI2OjIzMQ",
        },
        {
          id: "NjA6MzI2OjU0Mw",
        },
        {
          id: "NjE6Njg6Mjkx",
        },
        {
          id: "NjI6OTk6MzM5",
        },
        {
          id: "NjM6Njg6Njk5",
        },
        {
          id: "NjU6Njg6NjM5",
        },
        {
          id: "NjU6Mjk1OjY1MQ",
        },
        {
          id: "Njc6Njg6MjE5",
        },
      ],
    },
    {
      name: "Back Matter",
      pages: [
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
          id: "ODQ6MjUxOjY5OQ",
        },
        {
          id: "ODU6Njg6Njk5",
        },
        {
          id: "ODY6MzIyOjY5OQ",
        },
        {
          id: "ODg6MTE5OjY3Mw",
        },
        {
          id: "OTA6MTQ1OjY3Mw",
        },
        {
          id: "OTI6MjA1OjY3Mw",
        },
      ],
    },
    {
      name: "Handouts",
      pages: [
        {
          id: "NDc6NDU1OjIxOQ",
        },
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
  ];
  combines = [
    {
      source: "ODA6MTMxOjY2Mw",
      dest: "ODA6MjUxOjY5OQ",
    },
    {
      source: "ODE6MzcxOjY2Mw",
      dest: "ODE6Njg6Njk5",
    },
    {
      source: "ODI6MTMwOjY2Mw",
      dest: "ODI6MjUxOjY5OQ",
    },
    {
      source: "ODM6MzcxOjY2Mw",
      dest: "ODI6MjUxOjY5OQ",
    },
    {
      source: "ODQ6MTEzOjY2Mw",
      dest: "ODQ6MjUxOjY5OQ",
    },
    {
      source: "ODU6MzcxOjY2Mw",
      dest: "ODU6Njg6Njk5",
    },
    {
      source: "ODg6MzI2OjI0Mw",
      dest: "ODg6MTE5OjY3Mw",
    },
    {
      source: "OTE6Njg6NDIz",
      dest: "OTA6MTQ1OjY3Mw",
    },
    {
      source: "OTI6MzI2OjMwMw",
      dest: "OTI6MjA1OjY3Mw",
    },
    {
      source: "ODc6MzcxOjY2Mw",
      dest: "ODY6MzIyOjY5OQ",
    },
  ];
  normalFontIds = this.normalFontIds.concat([
    "ExPontoPro-Regular:10",
    "ExPontoPro-Bold:26",
  ]);
  boldFontIds = this.boldFontIds.concat(["ExPontoPro-Bold:10"]);
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "AGE OF ASHES: BROKEN PROMISES" &&
        t.fontId === "Gin-Regular:12",
    );
  }
  preprocess(text) {
    for (let i = 0; i < text.length; i++) {
      text[i].page === 47 &&
        text[i].text.trim() === "\u2022" &&
        (text[i].y += 13);
    }
  }
  extractDetails(text, moduleData, sectionKey) {
    if (sectionKey === "sidebar47") {
      this.changeFontId(text, 47, 455.2107, 219, "GoodOT-Bold:14");
      this.moveToBeginning(text, 47, 455.2107, 219);
    }
    this.changeFontId(text, 82, 250.5, 603, "SubheadingFont:13");
    this.changeFontId(text, 83, 67.5, 567, "SubheadingFont:13");
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
