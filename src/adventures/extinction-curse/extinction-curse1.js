import { ExtinctionCurseBase } from "./base.js";
import { AdventureImage, CaptionImage } from "../../core/images.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class ExtinctionCurse1 extends ExtinctionCurseBase {
  prefix = "extinction-curse1";
  fullName = "Extinction Curse - The Show Must Go On";
  pages = [
    this.ChapterHeadingPageLayout(6),
    this.RightSingleColumnWithSidebar(7),
    this.LeftTwoColumnWithMap(8, 340),
    this.RightTwoColumn(9),
    this.LeftTwoColumn(10),
    this.RightTwoColumn(11),
    this.LeftTwoColumnWithMap(12, 340),
    this.RightTwoColumn(13),
    this.LeftTwoColumn(14),
    this.RightTwoColumn(15),
    this.LeftTwoColumn(16),
    this.RightTwoColumn(17),
    this.ChapterHeadingPageLayout(18),
    this.RightSingleColumnWithSidebar(19),
    this.LeftTwoColumnWithMap(20, 340),
    this.RightTwoColumn(21),
    this.LeftTwoColumn(22),
    this.RightTwoColumn(23),
    this.LeftTwoColumn(24),
    this.RightTwoColumn(25),
    this.LeftTwoColumnWithMap(26, 340),
    this.RightTwoColumn(27),
    this.LeftTwoColumn(28),
    this.RightTwoColumn(29),
    this.LeftTwoColumn(30),
    this.RightTwoColumn(31),
    this.LeftTwoColumn(32),
    this.RightTwoColumn(33),
    this.ChapterHeadingPageLayout(34),
    this.RightSingleColumnWithSidebar(35),
    this.LeftTwoColumnWithMap(36, 340),
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
    this.RightTwoColumn(47),
    this.ChapterHeadingPageLayout(48),
    this.RightSingleColumnWithSidebar(49),
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
    this.LeftTwoColumn(62),
    this.RightTwoColumn(63),
    this.LeftTwoColumn(64),
    this.RightTwoColumn(65),
    this.LeftTwoColumn(66),
    this.RightTwoColumnWithRightCutout(67, 90),
    this.LeftTwoColumn(68),
    this.RightTwoColumnWithRightCutout(69, 270),
    this.RightTwoColumn(71),
    this.RightChapterHeadingPageLayout(73),
    this.LeftTwoColumn(74),
    this.RightTwoColumn(75),
    this.LeftTwoColumn(76),
    this.RightTwoColumn(77),
    this.LeftTwoColumn(78),
    this.RightTwoColumnWithBottomCutout(79, 235),
    this.LeftTwoColumn(80),
    this.RightTwoColumn(81),
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
      name: "map1",
      canonical: {
        name: "ec1/map1",
        priority: 0,
      },
      nameInfo: {
        x: 16,
        y: 758.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 8,
      width: 1261,
      height: 880,
      imageLeft: 5,
      imageRight: 1239,
      imageCols: 20,
      imageTop: 4,
      imageBottom: 870,
      imageRows: 14,
      globalLight: true,
      gridDistance: 20,
      detailsFile: "/ec/maps/ec1-map1.json",
    }),
    new ModuleScene({
      name: "map2",
      canonical: {
        name: "ec1/map2",
        priority: 0,
      },
      nameInfo: {
        x: 16,
        y: 758.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 12,
      width: 1261,
      height: 880,
      imageLeft: 22,
      imageRight: 1232,
      imageCols: 30,
      imageTop: 33,
      imageBottom: 845,
      imageRows: 20,
      globalLight: true,
      detailsFile: "/ec/maps/ec1-map2.json",
      journals: [
        {
          x: 2250,
          y: 1250,
          id: "MTM6Mjk1OjM4Nw",
        },
        {
          x: 2550,
          y: 1550,
          id: "MTM6Mjk1OjI5MQ",
        },
        {
          x: 1550,
          y: 1250,
          id: "MTQ6MzI2OjY5OQ",
        },
        {
          x: 2050,
          y: 2050,
          id: "MTU6Njg6Njk5",
        },
        {
          x: 1850,
          y: 2350,
          id: "MTU6Njg6MzYz",
        },
        {
          x: 1650,
          y: 2350,
          id: "MTU6Njg6MTEx",
        },
        {
          x: 3450,
          y: 2350,
          id: "MTU6Mjk1OjExMQ",
        },
        {
          x: 2350,
          y: 1450,
          id: "MTY6OTk6NDgz",
        },
        {
          x: 2750,
          y: 2050,
          id: "MTY6MzI2OjE5NQ",
        },
        {
          x: 750,
          y: 550,
          id: "MTM6Njg6MzAz",
        },
      ],
      tokens: [
        {
          id: "npc66",
          x: 1500,
          y: 2200,
        },
        {
          id: "npc66",
          x: 1500,
          y: 2300,
        },
        {
          id: "npc41",
          x: 1900,
          y: 2300,
        },
        {
          id: "npc49",
          x: 2100,
          y: 2100,
        },
        {
          id: "npc64",
          x: 2e3,
          y: 2100,
        },
        {
          id: "npc36",
          x: 3400,
          y: 2200,
        },
        {
          id: "npc27",
          x: 2600,
          y: 1900,
        },
        {
          id: "npc58",
          x: 2500,
          y: 2e3,
        },
        {
          id: "npc48",
          x: 2700,
          y: 1900,
        },
        {
          id: "npc2",
          x: 2600,
          y: 1500,
        },
        {
          id: "npc3",
          x: 2300,
          y: 1500,
        },
        {
          id: "npc3",
          x: 2400,
          y: 1400,
        },
        {
          id: "npc31",
          x: 1500,
          y: 1e3,
        },
      ],
    }),
    new ModuleScene({
      name: "map3a",
      canonical: {
        name: "ec1/map3a",
        priority: 0,
      },
      nameInfo: {
        x: 129,
        y: 758.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 20,
      width: 1261,
      height: 880,
      cropLeft: 0,
      cropRight: 619,
      cropTop: 0,
      cropBottom: 436,
      imageLeft: 7,
      imageRight: 612,
      imageCols: 36,
      imageTop: 3,
      imageBottom: 427,
      imageRows: 25,
      globalLight: true,
      gridDistance: 100,
      detailsFile: "/ec/maps/ec1-map3a.json",
    }),
    new ModuleScene({
      name: "map3b",
      canonical: {
        name: "ec1/map3b",
        priority: 0,
      },
      nameInfo: {
        x: 343.6077,
        y: 758.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 20,
      width: 1261,
      height: 880,
      cropLeft: 623,
      cropRight: 1261,
      cropTop: 0,
      cropBottom: 436,
      imageLeft: 647,
      imageRight: 1247,
      imageCols: 21,
      imageTop: 16,
      imageBottom: 418,
      imageRows: 14,
      globalLight: true,
      detailsFile: "/ec/maps/ec1-map3b.json",
    }),
    new ModuleScene({
      name: "map3c",
      canonical: {
        name: "ec1/map3c",
        priority: 0,
      },
      nameInfo: {
        x: 16,
        y: 553,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 20,
      width: 1261,
      height: 880,
      cropLeft: 0,
      cropRight: 619,
      cropTop: 441,
      cropBottom: 880,
      imageLeft: 6,
      imageRight: 597,
      imageCols: 21,
      imageTop: 450,
      imageBottom: 872,
      imageRows: 15,
      globalLight: true,
      detailsFile: "/ec/maps/ec1-map3c.json",
      journals: [
        {
          x: 1650,
          y: 1350,
          id: "MjI6OTk6MTEx",
        },
        {
          x: 1050,
          y: 1250,
          id: "MjI6MzI2OjI2Nw",
        },
        {
          x: 1050,
          y: 1450,
          id: "MjI6MzI2OjEyMw",
        },
        {
          x: 1050,
          y: 1050,
          id: "MjM6Njg6OTk",
        },
        {
          x: 2150,
          y: 1250,
          id: "MjM6Mjk1OjYzOQ",
        },
      ],
      tokens: [
        {
          id: "npc52",
          x: 2200,
          y: 1100,
        },
        {
          id: "npc52",
          x: 2200,
          y: 1300,
        },
        {
          id: "npc65",
          x: 1400,
          y: 1e3,
        },
        {
          id: "npc29",
          x: 1e3,
          y: 1500,
        },
      ],
    }),
    new ModuleScene({
      name: "map3d",
      canonical: {
        name: "ec1/map3d",
        priority: 0,
      },
      nameInfo: {
        x: 313.5,
        y: 553,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 20,
      width: 1261,
      height: 880,
      cropLeft: 623,
      cropRight: 1261,
      cropTop: 441,
      cropBottom: 880,
      imageLeft: 640,
      imageRight: 1240,
      imageCols: 21,
      imageTop: 453,
      imageBottom: 855,
      imageRows: 14,
      globalLight: true,
      detailsFile: "/ec/maps/ec1-map3d.json",
      journals: [
        {
          x: 1250,
          y: 1150,
          id: "MjM6Mjk1OjIzMQ",
        },
        {
          x: 1750,
          y: 1250,
          id: "MjQ6OTk6NDgz",
        },
        {
          x: 1550,
          y: 850,
          id: "MjU6Njg6NDk1",
        },
        {
          x: 1950,
          y: 850,
          id: "MjU6Njg6NDM1",
        },
        {
          x: 650,
          y: 450,
          id: "MjM6Mjk1OjM5OQ",
        },
      ],
      tokens: [
        {
          id: "npc5",
          x: 1500,
          y: 1200,
        },
        {
          id: "npc6",
          x: 1600,
          y: 1200,
        },
        {
          id: "npc28",
          x: 1200,
          y: 1200,
        },
        {
          id: "npc28",
          x: 1200,
          y: 1e3,
        },
        {
          id: "npc28",
          x: 1200,
          y: 900,
        },
        {
          id: "npc28",
          x: 1200,
          y: 1300,
        },
      ],
    }),
    new ModuleScene({
      name: "map4",
      canonical: {
        name: "ec1/map4",
        priority: 0,
      },
      nameInfo: {
        x: 16,
        y: 758.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 26,
      width: 1261,
      height: 880,
      imageLeft: 36,
      imageRight: 1256,
      imageCols: 31,
      imageTop: 19,
      imageBottom: 847,
      imageRows: 21,
      globalLight: true,
      detailsFile: "/ec/maps/ec1-map4.json",
      journals: [
        {
          x: 3750,
          y: 1150,
          id: "MjY6OTk6MTcx",
        },
        {
          x: 3150,
          y: 1150,
          id: "MjY6MzI2OjI5MQ",
        },
        {
          x: 2550,
          y: 950,
          id: "Mjc6Njg6MTM1",
        },
        {
          x: 2550,
          y: 1450,
          id: "Mjg6OTk6NDU5",
        },
        {
          x: 2350,
          y: 2050,
          id: "Mjg6OTk6MzM5",
        },
        {
          x: 1250,
          y: 2150,
          id: "Mjk6Njg6NjYz",
        },
        {
          x: 850,
          y: 650,
          id: "MjU6Njg6Mzg3",
        },
      ],
      tokens: [
        {
          id: "npc57",
          x: 1100,
          y: 2e3,
        },
        {
          id: "npc56",
          x: 1100,
          y: 2100,
        },
        {
          id: "npc56",
          x: 1200,
          y: 2e3,
        },
        {
          id: "npc20",
          x: 3100,
          y: 1900,
        },
        {
          id: "npc20",
          x: 2800,
          y: 1900,
        },
        {
          id: "npc19",
          x: 2900,
          y: 1e3,
        },
        {
          id: "npc57",
          x: 3e3,
          y: 1200,
        },
      ],
    }),
    new ModuleScene({
      name: "map5a",
      canonical: {
        name: "ec1/map5a",
        priority: 0,
      },
      nameInfo: {
        x: 16,
        y: 758.8362,
      },
      nameFn: (name) => `${this.sentenceCase(name)} - Ground Level`,
      page: 32,
      width: 1261,
      height: 880,
      cropLeft: 0,
      cropRight: 620,
      cropTop: 0,
      cropBottom: 880,
      imageLeft: 12,
      imageRight: 609,
      imageCols: 16,
      imageTop: 9,
      imageBottom: 868,
      imageRows: 23,
      globalLight: true,
      detailsFile: "/ec/maps/ec1-map5a.json",
      journals: [
        {
          x: 1250,
          y: 2550,
          id: "MzI6OTk6MTEx",
        },
        {
          x: 1250,
          y: 1850,
          id: "MzI6MzI2OjEyMw",
        },
        {
          x: 550,
          y: 650,
          id: "MzE6Mjk1OjY5OQ",
        },
      ],
      tokens: [
        {
          id: "npc60",
          x: 1400,
          y: 2300,
        },
        {
          id: "npc40",
          x: 1400,
          y: 1500,
        },
        {
          id: "npc40",
          x: 1500,
          y: 1500,
        },
        {
          id: "npc43",
          x: 1500,
          y: 2100,
        },
        {
          id: "npc43",
          x: 1300,
          y: 2100,
        },
      ],
    }),
    new ModuleScene({
      name: "map5b",
      canonical: {
        name: "ec1/map5b",
        priority: 0,
      },
      nameInfo: {
        x: 16,
        y: 758.8362,
      },
      nameFn: (name) => `${this.sentenceCase(name)} - Loft`,
      page: 32,
      width: 1261,
      height: 880,
      cropLeft: 624,
      cropRight: 1261,
      cropTop: 0,
      cropBottom: 880,
      imageLeft: 652,
      imageRight: 1249,
      imageCols: 16,
      imageTop: 10,
      imageBottom: 868,
      imageRows: 23,
      globalLight: true,
      detailsFile: "/ec/maps/ec1-map5b.json",
      journals: [
        {
          x: 1250,
          y: 1250,
          id: "MzM6Mjk1OjI0Mw",
        },
      ],
      tokens: [],
    }),
    new ModuleScene({
      name: "map6",
      canonical: {
        name: "ec1/map6",
        priority: 0,
      },
      nameInfo: {
        x: 16,
        y: 758.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 36,
      width: 1261,
      height: 880,
      imageLeft: 9,
      imageRight: 1244,
      imageCols: 54,
      imageTop: 16,
      imageBottom: 862,
      imageRows: 37,
      globalLight: true,
      detailsFile: "/ec/maps/ec1-map6.json",
      journals: [
        {
          x: 5950,
          y: 4050,
          id: "MzU6Njg6MTcx",
        },
        {
          x: 5650,
          y: 3050,
          id: "MzY6OTk6MTIz",
        },
        {
          x: 5450,
          y: 4050,
          id: "MzY6MzI2OjMzOQ",
        },
        {
          x: 5450,
          y: 3750,
          id: "Mzg6OTk6Njk5",
        },
        {
          x: 5450,
          y: 4450,
          id: "Mzg6OTk6NTkx",
        },
        {
          x: 5150,
          y: 4350,
          id: "Mzg6OTk6NDcx",
        },
        {
          x: 4950,
          y: 4350,
          id: "Mzg6OTk6NDcx",
        },
        {
          x: 4950,
          y: 3750,
          id: "Mzg6OTk6NDcx",
        },
        {
          x: 5150,
          y: 3750,
          id: "Mzg6OTk6NDcx",
        },
        {
          x: 4550,
          y: 3850,
          id: "Mzg6OTk6MzE1",
        },
        {
          x: 4450,
          y: 4150,
          id: "Mzk6Njg6Njk5",
        },
        {
          x: 4950,
          y: 2850,
          id: "Mzk6Njg6NjI3",
        },
        {
          x: 5950,
          y: 2050,
          id: "Mzk6Mjk1OjYzOQ",
        },
        {
          x: 5150,
          y: 1250,
          id: "Mzk6Mjk1OjIzMQ",
        },
        {
          x: 4750,
          y: 1450,
          id: "NDA6OTk6Njk5",
        },
        {
          x: 3850,
          y: 3650,
          id: "NDE6Njg6NDQ3",
        },
        {
          x: 4250,
          y: 2850,
          id: "NDI6OTk6Njk5",
        },
        {
          x: 4050,
          y: 4050,
          id: "NDI6MzI4OjIwNw",
        },
        {
          x: 4050,
          y: 4350,
          id: "NDI6MzI4OjIwNw",
        },
        {
          x: 3650,
          y: 4050,
          id: "NDI6MzI4OjIwNw",
        },
        {
          x: 2950,
          y: 4350,
          id: "NDM6Njg6NjUx",
        },
        {
          x: 3650,
          y: 4250,
          id: "NDM6Njg6MjMx",
        },
        {
          x: 1950,
          y: 4350,
          id: "NDM6Njg6MTQ3",
        },
        {
          x: 1950,
          y: 4150,
          id: "NDM6Njg6MTQ3",
        },
        {
          x: 1950,
          y: 3950,
          id: "NDM6Njg6MTQ3",
        },
        {
          x: 1950,
          y: 3800,
          id: "NDM6Njg6MTQ3",
        },
        {
          x: 1950,
          y: 3550,
          id: "NDM6Njg6MTQ3",
        },
        {
          x: 1950,
          y: 3350,
          id: "NDM6Njg6MTQ3",
        },
        {
          x: 1950,
          y: 3150,
          id: "NDM6Njg6MTQ3",
        },
        {
          x: 2250,
          y: 2850,
          id: "NDM6Njg6MTQ3",
        },
        {
          x: 2450,
          y: 2850,
          id: "NDM6Njg6MTQ3",
        },
        {
          x: 2650,
          y: 2850,
          id: "NDM6Njg6MTQ3",
        },
        {
          x: 2850,
          y: 2850,
          id: "NDM6Njg6MTQ3",
        },
        {
          x: 3050,
          y: 2850,
          id: "NDM6Njg6MTQ3",
        },
        {
          x: 3350,
          y: 2850,
          id: "NDM6Njg6MTQ3",
        },
        {
          x: 3550,
          y: 2850,
          id: "NDM6Njg6MTQ3",
        },
        {
          x: 3700,
          y: 2850,
          id: "NDM6Njg6MTQ3",
        },
        {
          x: 3950,
          y: 2850,
          id: "NDM6Njg6MTQ3",
        },
        {
          x: 3550,
          y: 3250,
          id: "NDM6Njg6MTQ3",
        },
        {
          x: 3750,
          y: 3250,
          id: "NDM6Njg6MTQ3",
        },
        {
          x: 2350,
          y: 4250,
          id: "NDM6Mjk1OjU1NQ",
        },
        {
          x: 2350,
          y: 3650,
          id: "NDQ6OTk6Njk5",
        },
        {
          x: 4050,
          y: 3250,
          id: "NDQ6MzI2OjY5OQ",
        },
        {
          x: 1950,
          y: 3050,
          id: "NDQ6MzI2OjY5OQ",
        },
        {
          x: 3150,
          y: 2150,
          id: "NDQ6MzI2OjYzOQ",
        },
        {
          x: 2850,
          y: 2250,
          id: "NDQ6MzI2OjQ1OQ",
        },
        {
          x: 2650,
          y: 2250,
          id: "NDQ6MzI2OjQ1OQ",
        },
        {
          x: 2650,
          y: 1950,
          id: "NDQ6MzI2OjQ1OQ",
        },
        {
          x: 2850,
          y: 1950,
          id: "NDQ6MzI2OjQ1OQ",
        },
        {
          x: 3250,
          y: 1950,
          id: "NDQ6MzI2OjQ1OQ",
        },
        {
          x: 3550,
          y: 2050,
          id: "NDQ6MzI2OjQ1OQ",
        },
        {
          x: 3550,
          y: 2350,
          id: "NDQ6MzI2OjQ1OQ",
        },
        {
          x: 2250,
          y: 2050,
          id: "NDQ6MzI2OjE3MQ",
        },
        {
          x: 3950,
          y: 2150,
          id: "NDU6Mjk1OjM2Mw",
        },
        {
          x: 2950,
          y: 3650,
          id: "NDY6MzI2OjU0Mw",
        },
      ],
      tokens: [
        {
          id: "npc59",
          x: 5800,
          y: 3800,
        },
        {
          id: "npc59",
          x: 5900,
          y: 3800,
        },
        {
          id: "npc9",
          x: 5300,
          y: 3800,
        },
        {
          id: "npc9",
          x: 5500,
          y: 3800,
        },
        {
          id: "npc9",
          x: 5500,
          y: 4200,
        },
        {
          id: "npc9",
          x: 4500,
          y: 3600,
        },
        {
          id: "npc9",
          x: 4600,
          y: 3800,
        },
        {
          id: "npc59",
          x: 4500,
          y: 3700,
        },
        {
          id: "npc35",
          x: 4600,
          y: 2700,
        },
        {
          id: "npc47",
          x: 5800,
          y: 1800,
        },
        {
          id: "npc47",
          x: 5800,
          y: 1700,
        },
        {
          id: "npc47",
          x: 6e3,
          y: 1700,
        },
        {
          id: "npc47",
          x: 6e3,
          y: 1800,
        },
        {
          id: "npc10",
          x: 4800,
          y: 1400,
        },
        {
          id: "npc47",
          x: 4600,
          y: 1400,
        },
        {
          id: "npc47",
          x: 4500,
          y: 1300,
        },
        {
          id: "npc12",
          x: 4100,
          y: 1900,
        },
        {
          id: "npc12",
          x: 4e3,
          y: 2400,
        },
        {
          id: "npc30",
          x: 2300,
          y: 2e3,
        },
        {
          id: "npc70",
          x: 2300,
          y: 2200,
        },
        {
          id: "npc32",
          x: 2100,
          y: 2200,
        },
        {
          id: "npc19",
          x: 2300,
          y: 3400,
        },
        {
          id: "npc19",
          x: 2300,
          y: 3800,
        },
        {
          id: "npc9",
          x: 2900,
          y: 3700,
        },
        {
          id: "npc9",
          x: 2900,
          y: 3500,
        },
        {
          id: "npc37",
          x: 2800,
          y: 3700,
        },
        {
          id: "npc37",
          x: 2800,
          y: 3600,
        },
      ],
    }),
    new ModuleScene({
      name: "map7",
      canonical: {
        name: "ec1/map7",
        priority: 0,
      },
      nameInfo: {
        x: 337.084,
        y: 389.3881,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 51,
      width: 786,
      height: 737,
      imageLeft: 77,
      imageRight: 736,
      imageCols: 37,
      imageTop: 60,
      imageBottom: 683,
      imageRows: 35,
      detailsFile: "/ec/maps/ec1-map7.json",
      journals: [
        {
          x: 1850,
          y: 2950,
          id: "NTE6Njg6NjUx",
        },
        {
          x: 3050,
          y: 2950,
          id: "NTE6Njg6MjY3",
        },
        {
          x: 2850,
          y: 2050,
          id: "NTE6Mjk1OjQ3MQ",
        },
        {
          x: 4150,
          y: 2150,
          id: "NTI6MzI2OjQxMQ",
        },
        {
          x: 4150,
          y: 1450,
          id: "NTI6MzY1OjEyMw",
        },
        {
          x: 5050,
          y: 2150,
          id: "NTM6Mjk1OjY1MQ",
        },
        {
          x: 5050,
          y: 2950,
          id: "NTQ6OTk6NDQ3",
        },
        {
          x: 3750,
          y: 4650,
          id: "NTQ6OTk6MjU1",
        },
        {
          x: 3550,
          y: 3e3,
          id: "NTQ6MzI2OjE0Nw",
        },
        {
          x: 1250,
          y: 1250,
          id: "NTA6OTk6NDk1",
        },
      ],
      tokens: [
        {
          id: "npc45",
          x: 1900,
          y: 2800,
        },
        {
          id: "npc45",
          x: 1900,
          y: 3100,
        },
        {
          id: "npc69",
          x: 2900,
          y: 3200,
        },
        {
          id: "npc69",
          x: 2800,
          y: 3100,
        },
        {
          id: "npc69",
          x: 2700,
          y: 3100,
        },
        {
          id: "npc69",
          x: 2900,
          y: 2800,
        },
        {
          id: "npc39",
          x: 3e3,
          y: 3e3,
        },
        {
          id: "npc42",
          x: 3300,
          y: 4600,
        },
        {
          id: "npc61",
          x: 3500,
          y: 4400,
        },
        {
          id: "npc61",
          x: 3900,
          y: 4700,
        },
        {
          id: "npc50",
          x: 5e3,
          y: 2e3,
        },
        {
          id: "npc15",
          x: 5e3,
          y: 2200,
        },
        {
          id: "npc39",
          x: 5100,
          y: 2100,
        },
        {
          id: "npc68",
          x: 3900,
          y: 1300,
        },
        {
          id: "npc68",
          x: 4100,
          y: 1300,
        },
        {
          id: "npc68",
          x: 4400,
          y: 1300,
        },
        {
          id: "npc62",
          x: 4e3,
          y: 1400,
        },
        {
          id: "npc62",
          x: 4300,
          y: 1400,
        },
        {
          id: "npc14",
          x: 2300,
          y: 1600,
        },
        {
          id: "npc14",
          x: 2700,
          y: 1300,
        },
      ],
    }),
    new ModuleScene({
      name: "map8",
      canonical: {
        name: "ec1/map8",
        priority: 0,
      },
      nameInfo: {
        x: 313.216,
        y: 699,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 55,
      width: 586,
      height: 589,
      imageLeft: 63,
      imageRight: 526,
      imageCols: 26,
      imageTop: 72,
      imageBottom: 516,
      imageRows: 25,
      globalLight: false,
      detailsFile: "/ec/maps/ec1-map8.json",
      journals: [
        {
          x: 3350,
          y: 1550,
          id: "NTU6Njg6NTA3",
        },
        {
          x: 2150,
          y: 1450,
          id: "NTU6Mjk1OjI3OQ",
        },
        {
          x: 3350,
          y: 3250,
          id: "NTY6OTk6MjE5",
        },
        {
          x: 2050,
          y: 3650,
          id: "NTY6NDE3OjUzMQ",
        },
        {
          x: 1350,
          y: 2850,
          id: "NTc6Mjk1OjY1MQ",
        },
        {
          x: 2050,
          y: 2550,
          id: "NTg6OTk6MTk1",
        },
      ],
      tokens: [
        {
          id: "npc16",
          x: 2400,
          y: 3600,
        },
        {
          id: "npc32",
          x: 1600,
          y: 3500,
        },
        {
          id: "npc57",
          x: 1650,
          y: 3700,
        },
        {
          id: "npc17",
          x: 1200,
          y: 3e3,
        },
        {
          id: "npc69",
          x: 1100,
          y: 2800,
        },
        {
          id: "npc69",
          x: 1200,
          y: 2100,
        },
        {
          id: "npc57",
          x: 1150,
          y: 2650,
        },
        {
          id: "npc57",
          x: 1300,
          y: 2300,
        },
        {
          id: "npc67",
          x: 2e3,
          y: 1500,
        },
        {
          id: "npc25",
          x: 3500,
          y: 1400,
        },
        {
          id: "npc25",
          x: 3400,
          y: 1600,
        },
        {
          id: "npc25",
          x: 3200,
          y: 1700,
        },
        {
          id: "npc51",
          x: 3100,
          y: 3600,
        },
        {
          id: "npc51",
          x: 3300,
          y: 3600,
        },
        {
          id: "npc51",
          x: 3500,
          y: 3600,
        },
      ],
    }),
    new ModuleScene({
      name: "map9",
      canonical: {
        name: "ec1/map9",
        priority: 0,
      },
      nameInfo: {
        x: 276.5545,
        y: 657.2635,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 58,
      width: 491,
      height: 491,
      imageLeft: 68,
      imageRight: 423,
      imageCols: 20,
      imageTop: 69,
      imageBottom: 423,
      imageRows: 20,
      globalLight: true,
      detailsFile: "/ec/maps/ec1-map9.json",
      journals: [
        {
          x: 1950,
          y: 1450,
          id: "NTg6NDE5OjUxOQ",
        },
      ],
      tokens: [
        {
          id: "npc26",
          x: 2e3,
          y: 1600,
        },
        {
          id: "npc55",
          x: 2500,
          y: 1300,
        },
        {
          id: "npc69",
          x: 2300,
          y: 1900,
        },
        {
          id: "npc69",
          x: 2300,
          y: 2e3,
        },
        {
          id: "npc69",
          x: 2300,
          y: 2100,
        },
        {
          id: "npc69",
          x: 2300,
          y: 1800,
        },
      ],
    }),
  ];
  journals = [
    new AdventureImage({
      name: "journal1",
      page: 2,
      width: 589,
      height: 809,
      index: 0,
    }),
    new AdventureImage({
      name: "journal2",
      page: 2,
      width: 589,
      height: 809,
      index: 1,
    }),
    new AdventureImage({
      name: "journal3",
      page: 2,
      width: 589,
      height: 809,
      index: 2,
    }),
    new AdventureImage({
      name: "journal4",
      page: 2,
      width: 589,
      height: 809,
      index: 3,
    }),
    new AdventureImage({
      name: "journal5",
      page: 2,
      width: 589,
      height: 809,
      index: 4,
    }),
    new AdventureImage({
      name: "journal6",
      page: 2,
      width: 589,
      height: 809,
      index: 5,
    }),
    new AdventureImage({
      name: "journal7",
      page: 4,
      width: 1261,
      height: 1636,
    }),
    new AdventureImage({
      name: "journal8",
      page: 6,
      width: 1259,
      height: 805,
    }),
    new CaptionImage({
      name: "journal9",
      page: 14,
      width: 495,
      height: 569,
    }),
    new AdventureImage({
      name: "journal10",
      page: 18,
      width: 1259,
      height: 805,
    }),
    new AdventureImage({
      name: "journal11",
      page: 34,
      width: 1259,
      height: 805,
    }),
    new AdventureImage({
      name: "journal12",
      page: 48,
      width: 1259,
      height: 805,
    }),
    new AdventureImage({
      name: "journal13",
      page: 50,
      width: 300,
      height: 300,
    }),
    new AdventureImage({
      name: "journal14",
      page: 60,
      width: 1261,
      height: 1636,
    }),
    new AdventureImage({
      name: "journal15",
      page: 64,
      width: 823,
      height: 1151,
    }),
    new AdventureImage({
      name: "journal16",
      page: 66,
      width: 763,
      height: 763,
    }),
    new AdventureImage({
      name: "journal17",
      page: 72,
      width: 1261,
      height: 1636,
    }),
    new AdventureImage({
      name: "journal18",
      page: 76,
      width: 794,
      height: 1025,
    }),
    new AdventureImage({
      name: "journal19",
      page: 77,
      width: 819,
      height: 1440,
    }),
    new AdventureImage({
      name: "journal20",
      page: 79,
      width: 467,
      height: 467,
    }),
    new AdventureImage({
      name: "journal21",
      page: 79,
      width: 576,
      height: 576,
    }),
    new AdventureImage({
      name: "journal22",
      page: 81,
      width: 731,
      height: 1150,
    }),
    new CaptionImage({
      name: "npc16",
      page: 82,
      width: 911,
      height: 869,
    }),
    new CaptionImage({
      name: "npc17",
      page: 83,
      width: 822,
      height: 1230,
    }),
    new CaptionImage({
      name: "npc18",
      page: 84,
      width: 650,
      height: 1147,
    }),
    new CaptionImage({
      name: "npc19",
      page: 85,
      width: 921,
      height: 1103,
    }),
    new CaptionImage({
      name: "npc20",
      page: 86,
      width: 653,
      height: 1235,
    }),
    new CaptionImage({
      name: "npc21",
      page: 87,
      width: 641,
      height: 761,
    }),
    new CaptionImage({
      name: "npc22",
      page: 88,
      width: 908,
      height: 1068,
    }),
    new CaptionImage({
      name: "npc23",
      page: 89,
      width: 840,
      height: 1068,
    }),
    new CaptionImage({
      name: "npc24",
      page: 91,
      width: 878,
      height: 1069,
    }),
    new CaptionImage({
      name: "npc25",
      page: 93,
      width: 867,
      height: 1160,
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 9,
        x: 252.3829,
        y: 430.6814,
      },
      page: 9,
      width: 495,
      height: 535,
      tokenX: 85,
      tokenY: 108,
      tokenSize: 675,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.0fe7PVMIq92fkUJK",
      page: 14,
      width: 495,
      height: 569,
      tokenX: 75,
      tokenY: 31,
      tokenSize: 625,
      forIds: ["MTQ6OTk6NTY3"],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.j1mm6bb3hZ56jSrK",
      page: 17,
      width: 926,
      height: 1159,
      tokenX: -229,
      tokenY: -200,
      tokenSize: 319,
      forIds: ["MTY6MzI2OjMwMw"],
    }),
    new ModuleNpc({
      id: "npc4",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 21,
        x: 253.9828,
        y: 419.3989,
      },
      page: 21,
      width: 478,
      height: 587,
      tokenX: 90,
      tokenY: 81,
      tokenSize: 671,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc5",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.4QgC23j1wzfaCecR",
      page: 25,
      width: 752,
      height: 1052,
      tokenX: -213,
      tokenY: -48,
      tokenSize: 408,
      forIds: ["MjQ6MzI2OjQ5NQ"],
    }),
    new ModuleNpc({
      id: "npc6",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.lM9j6lc5MkBlGfzD",
      page: 25,
      width: 752,
      height: 1052,
      tokenX: 23,
      tokenY: -303,
      tokenSize: 408,
      forIds: ["MjQ6MzI2OjE5NQ"],
    }),
    new ModuleNpc({
      id: "npc7",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 28,
        x: 279.5429,
        y: 404.6359,
      },
      page: 28,
      width: 513,
      height: 604,
      tokenX: 107,
      tokenY: 145,
      tokenSize: 688,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc8",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.16cZVZxsXVRHfuuQ",
      page: 31,
      width: 755,
      height: 1125,
      tokenX: -143,
      tokenY: 51,
      tokenSize: 369,
      forIds: ["MzA6MzI2OjMzOQ"],
    }),
    new ModuleNpc({
      id: "npc9",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.Q3Z0rIINoWYxVSrS",
      page: 37,
      width: 782,
      height: 1031,
      tokenX: -139,
      tokenY: 53,
      tokenSize: 331,
      forIds: [
        "Mzc6Njg6NTc5",
        "Mzg6MzI2OjI1NQ",
        "NDc6Njg6OTk",
        "NDM6Njg6MzUx",
        "NDc6Njg6MTQ3",
      ],
    }),
    new ModuleNpc({
      id: "npc10",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.U6jOmV5RAkj32qOi",
      page: 40,
      width: 871,
      height: 785,
      tokenX: -186,
      tokenY: 55,
      tokenSize: 451,
      forIds: ["NDA6MzI2OjU0Mw"],
    }),
    new ModuleNpc({
      id: "npc11",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 42,
        x: 146.688,
        y: 178.149,
      },
      page: 42,
      width: 858,
      height: 1200,
      tokenX: -205,
      tokenY: -81,
      tokenSize: 444,
      forIds: ["NDE6Njg6MTU5"],
    }),
    new ModuleNpc({
      id: "npc12",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.rxGByemLAAeM4h29",
      page: 46,
      width: 1024,
      height: 1011,
      tokenX: 123,
      tokenY: -31,
      tokenSize: 772,
      forIds: ["NDY6OTk6NjYz"],
    }),
    new ModuleNpc({
      id: "npc13",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 47,
        x: 269.7515,
        y: 80.6436,
      },
      page: 47,
      width: 455,
      height: 1112,
      tokenX: 20,
      tokenY: 76,
      tokenSize: 384,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc14",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.KXNSBeUWLxMfd2Zg",
      page: 52,
      width: 993,
      height: 828,
      tokenX: -465,
      tokenY: -177,
      tokenSize: 489,
      forIds: ["NTI6OTk6Mzc1"],
    }),
    new ModuleNpc({
      id: "npc15",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.Plig7vUF9cEY1VBJ",
      page: 53,
      width: 1213,
      height: 826,
      tokenX: -261,
      tokenY: -89,
      tokenSize: 625,
      forIds: ["NTQ6OTk6NjUx"],
    }),
    new ModuleNpc({
      id: "npc16",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.md1fhwGMwDv4NNwO",
      name: {
        page: 56,
        x: 301.6043,
        y: 438.5905,
      },
      page: 56,
      width: 518,
      height: 528,
      tokenX: 28,
      tokenY: 89,
      tokenSize: 640,
      forIds: ["NTc6Njg6NDM1"],
      weak: true,
    }),
    new ModuleNpc({
      id: "npc17",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.7w1w7VTnIWMBdFux",
      name: {
        page: 57,
        x: 351.6484,
        y: 118.6814,
      },
      page: 57,
      width: 794,
      height: 1200,
      tokenX: -208,
      tokenY: 18,
      tokenSize: 500,
      forIds: ["NTg6OTk6MzM5"],
    }),
    new ModuleNpc({
      id: "npc18",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.SAqbWugp2NcdEtrr",
      page: 82,
      width: 911,
      height: 869,
      tokenX: -142,
      tokenY: 76,
      tokenSize: 519,
      forIds: ["ODI6MjUxOjQ0Nw"],
    }),
    new ModuleNpc({
      id: "npc19",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.zfy0YOxEAMaeHAWI",
      page: 83,
      width: 822,
      height: 1230,
      tokenX: -131,
      tokenY: -15,
      tokenSize: 530,
      forIds: ["ODM6Njg6NTU1", "Mjc6Njg6NDcx", "NDQ6OTk6MzAz"],
    }),
    new ModuleNpc({
      id: "npc20",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.i2fRfiIWOJeZedcx",
      page: 84,
      width: 650,
      height: 1147,
      tokenX: -68,
      tokenY: 47,
      tokenSize: 531,
      forIds: ["ODQ6MjU4OjQ4Mw", "NDE6Mjk1OjM5OQ", "Mjg6MzI2OjE5NQ"],
    }),
    new ModuleNpc({
      id: "npc21",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.gN8VuDZ8b9dp0Ep0",
      page: 85,
      width: 921,
      height: 1103,
      tokenX: 262,
      tokenY: 141,
      tokenSize: 1215,
      forIds: ["ODU6Njg6NjAz"],
    }),
    new ModuleNpc({
      id: "npc22",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-3.Actor.SIE8CcEblKI9VwqO",
      page: 86,
      width: 653,
      height: 1235,
      tokenX: 114,
      tokenY: -159,
      tokenSize: 871,
      forIds: ["ODY6Mjc4OjMxNQ"],
    }),
    new ModuleNpc({
      id: "npc23",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.RIZDryL3Wnk6ucks",
      page: 87,
      width: 641,
      height: 761,
      tokenX: 72,
      tokenY: -37,
      tokenSize: 873,
      forIds: ["ODc6Njg6NDEx"],
    }),
    new ModuleNpc({
      id: "npc24",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.3Fxih1eU4IXABxpy",
      page: 88,
      width: 908,
      height: 1068,
      tokenX: -233,
      tokenY: 62,
      tokenSize: 676,
      forIds: ["ODg6MjUwOjM3NQ", "MzE6Njg6OTk"],
    }),
    new ModuleNpc({
      id: "npc25",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.xWsfcDcgbubVpjow",
      page: 89,
      width: 840,
      height: 1068,
      tokenX: -82,
      tokenY: -150,
      tokenSize: 620,
      forIds: ["ODk6Njg6NDM1", "NTU6Mjk1OjMyNw"],
    }),
    new ModuleNpc({
      id: "npc26",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.BBamjhcpvwXGhlbM",
      page: 91,
      width: 878,
      height: 1069,
      tokenX: -282,
      tokenY: 8,
      tokenSize: 537,
      forIds: ["OTE6Njg6NDM1", "NTk6Njg6NTMx"],
    }),
    new ModuleNpc({
      id: "npc27",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.IacftcXDDMBNcKbY",
      page: 93,
      width: 867,
      height: 1160,
      tokenX: -247,
      tokenY: -238,
      tokenSize: 404,
      forIds: ["OTM6Njg6Mzc1", "MTc6Njg6MTQ3"],
    }),
    new ModuleNpc({
      id: "npc28",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.dP6sDHTZrDcV2I9w",
      label: "AR",
      forIds: ["MTE6Njg6NjUx", "MjQ6OTk6NTMx"],
    }),
    new ModuleNpc({
      id: "npc29",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.KDRlxdIUADWHI6Vr",
      label: "AM",
      forIds: ["MjM6Njg6NDgz"],
    }),
    new ModuleNpc({
      id: "npc30",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.wi94WddixQEID9Jl",
      label: "CP",
      forIds: ["NDI6MzI2OjM1MQ", "NDU6Njg6MzUx"],
    }),
    new ModuleNpc({
      id: "npc31",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.6K4RWus85o8iqy0t",
      label: "GB",
      forIds: ["MTQ6MzI2OjE1OQ"],
    }),
    new ModuleNpc({
      id: "npc32",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.HFAhDmrkxg6YLhdF",
      label: "BW",
      forIds: ["NDU6Njg6MjU1", "NTc6Njg6Mzg3"],
    }),
    new ModuleNpc({
      id: "npc33",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.IyhbcdTVmkV4pSju",
      label: "B",
      forIds: ["MjI6OTk6NjM5"],
    }),
    new ModuleNpc({
      id: "npc34",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.a2FCggU8UCQl6RDx",
      label: "JB",
      forIds: ["MjI6OTk6NTkx"],
    }),
    new ModuleNpc({
      id: "npc35",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.vBUYl8mREwhO2Vst",
      label: "CC",
      forIds: ["Mzk6Njg6MjY3"],
    }),
    new ModuleNpc({
      id: "npc36",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.MrzlaE7k1PEsd3iQ",
      label: "C",
      forIds: ["MTY6OTk6NTkx"],
    }),
    new ModuleNpc({
      id: "npc37",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.EBDDeBHGGZ8xvIM6",
      label: "CL",
      forIds: ["NDc6Mjk1OjY5OQ"],
    }),
    new ModuleNpc({
      id: "npc38",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.NBCqA1NLRlhMuqGl",
      label: "DD",
      forIds: ["MzA6OTk6MTQ3"],
    }),
    new ModuleNpc({
      id: "npc39",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.wNkS1ArFjS6ZsrPS",
      label: "D",
      forIds: ["NTE6Mjk1OjU2Nw", "NTQ6OTk6NTU1"],
    }),
    new ModuleNpc({
      id: "npc40",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.x23aXeWTo026pMui",
      label: "EM",
      forIds: ["MzM6Njg6Mzc1"],
    }),
    new ModuleNpc({
      id: "npc41",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.wQHcJGJ9rSyFQFPB",
      label: "ETT",
      forIds: ["MTU6Njg6Mjkx"],
    }),
    new ModuleNpc({
      id: "npc42",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.TFRt64nosuS3PzmH",
      label: "ES",
      forIds: ["NTQ6MzI2OjMyNw"],
    }),
    new ModuleNpc({
      id: "npc43",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.k9fM0vufbdsDPQul",
      label: "FM",
      forIds: ["MzM6Njg6MzI3"],
    }),
    new ModuleNpc({
      id: "npc44",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.wS2SN0dnQMybLzSA",
      label: "FS",
      forIds: ["ODU6Njg6MzAz"],
    }),
    new ModuleNpc({
      id: "npc45",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.cvfIkEF6xmWn2soN",
      label: "G",
      forIds: ["NTE6Njg6NDU5"],
    }),
    new ModuleNpc({
      id: "npc46",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.TZcDdN5o7s4alZNE",
      label: "GC",
      forIds: ["NTE6Njg6Njk5"],
    }),
    new ModuleNpc({
      id: "npc47",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.LHHgGSs0ELCR4CYK",
      label: "G",
      forIds: ["NDE6Njg6NjAz", "Mzk6Mjk1OjMzOQ"],
    }),
    new ModuleNpc({
      id: "npc48",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.iIJPJcDT8wlJ8z5M",
      label: "GR",
      forIds: ["MTc6Mjk1OjY5OQ"],
    }),
    new ModuleNpc({
      id: "npc49",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.AJ5LuNMVPLCydryP",
      label: "GV",
      forIds: ["MTU6Njg6NDU5"],
    }),
    new ModuleNpc({
      id: "npc50",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.7w1w7VTnIWMBdFux",
      label: "XL",
      forIds: ["NTQ6OTk6Njk5"],
    }),
    new ModuleNpc({
      id: "npc51",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.VCYF0NAfPKwTHkK1",
      label: "G",
      forIds: ["NTY6NDE3OjU3OQ"],
    }),
    new ModuleNpc({
      id: "npc52",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.A4VgQIHsqJKssQOM",
      label: "HS",
      forIds: ["MjM6Mjk1OjQ0Nw"],
    }),
    new ModuleNpc({
      id: "npc53",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.s6Yfy1AgPp4ky7QI",
      label: "J",
      forIds: ["MTE6Mjk1OjM3NQ"],
    }),
    new ModuleNpc({
      id: "npc54",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.s6Yfy1AgPp4ky7QI",
      label: "R",
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc55",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.bGp2t0UteEYu3BGe",
      label: "P",
      forIds: ["NTk6Njg6NDgz"],
    }),
    new ModuleNpc({
      id: "npc56",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.aeOzCBpwnUVcpqxI",
      label: "P",
      forIds: ["Mjk6Njg6MjQz"],
    }),
    new ModuleNpc({
      id: "npc57",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.9jF564DF6ylEovna",
      label: "Q",
      forIds: [
        "Mjc6Njg6NDEx",
        "Mjk6Njg6Mjkx",
        "NTc6Njg6MzM5",
        "NTg6OTk6MjQz",
        "NDM6Njg6Mjc5",
      ],
    }),
    new ModuleNpc({
      id: "npc58",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.6wPW2dvpt86Ou6bL",
      label: "RS",
      forIds: ["MTc6Njg6OTk"],
    }),
    new ModuleNpc({
      id: "npc59",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.tashopA1s2fAbSXA",
      label: "S",
      forIds: ["Mzg6MzI2OjIwNw", "MzY6OTk6MjMx"],
    }),
    new ModuleNpc({
      id: "npc60",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.vRAdYovWcy2euwuL",
      label: "SF",
      forIds: ["MzI6MzI2OjI1NQ"],
    }),
    new ModuleNpc({
      id: "npc61",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.2mg30nJR6P3HJDSd",
      label: "VBS",
      forIds: ["NTQ6MzI2OjI3OQ"],
    }),
    new ModuleNpc({
      id: "npc62",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.ZW8ARUrNdc3zewLM",
      label: "V",
      forIds: ["NTM6Njg6NDM1"],
    }),
    new ModuleNpc({
      id: "npc63",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.JvSCGGnexk7CmVke",
      label: "VV",
      forIds: ["MzE6Njg6NjI3"],
    }),
    new ModuleNpc({
      id: "npc64",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.1uVwkGlqYzyWaDMy",
      label: "V",
      forIds: ["MTU6Njg6NDEx", "MTE6Njg6OTk"],
    }),
    new ModuleNpc({
      id: "npc65",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.h7je8nkscJQ2Ac8j",
      label: "WS",
      forIds: ["MjI6MzI2OjMxNQ"],
    }),
    new ModuleNpc({
      id: "npc66",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.KFf6pJmFmzj7HH9i",
      label: "WM",
      forIds: ["MTU6Mjk1OjMyNw"],
    }),
    new ModuleNpc({
      id: "npc67",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.mqz4MfBwFxlBQeHs",
      label: "IS",
      forIds: ["NTY6OTk6NDEx"],
    }),
    new ModuleNpc({
      id: "npc68",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.S1XgBHtXIOV3JjLy",
      label: "XS",
      forIds: ["NDk6Njg6MTQ3", "NTM6Njg6NDgz"],
    }),
    new ModuleNpc({
      id: "npc69",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.5vBG8a8dnJfmVd3Y",
      label: "XW",
      forIds: ["NTg6OTk6Mjkx", "NDk6Njg6OTk", "NTE6Mjk1OjYxNQ", "NTk6Njg6Mzk5"],
    }),
    new ModuleNpc({
      id: "npc70",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.sAfjpjAS56jtrUbi",
      label: "ZH",
      forIds: ["NDU6Njg6MzAz"],
    }),
  ];
  journalPages = [
    {
      name: "Extinction Curse - The Show Must Go On",
      pages: [],
    },
    {
      name: "Chapter 1",
      pages: [
        {
          id: "NjozODY6MzYx",
        },
        {
          id: "NzozNzE6Njk5",
        },
        {
          id: "NzozNzE6NTMx",
        },
        {
          id: "Nzo2ODozOTk",
        },
        {
          id: "Nzo2ODoxNDc",
        },
        {
          id: "OTo2ODoxNTk",
        },
        {
          id: "OToyOTU6MjMx",
        },
        {
          id: "OToyOTU6MTEx",
        },
        {
          id: "MTA6OTk6NDIz",
        },
        {
          id: "MTA6OTk6MTM1",
        },
        {
          id: "MTA6MzI2OjUxOQ",
        },
        {
          id: "MTA6MzI2OjI5MQ",
        },
        {
          id: "MTE6Njg6MzM5",
        },
        {
          id: "MTE6Mjk1OjY1MQ",
        },
        {
          id: "MTI6OTk6MjU1",
        },
        {
          id: "MTI6OTk6MTIz",
        },
        {
          id: "MTI6MzI2Ojk5",
        },
        {
          id: "MTM6Njg6MzAz",
        },
        {
          id: "MTM6Mjk1OjM4Nw",
        },
        {
          id: "MTM6Mjk1OjI5MQ",
        },
        {
          id: "MTQ6MzI2OjY5OQ",
        },
        {
          id: "MTU6Njg6Njk5",
        },
        {
          id: "MTU6Njg6MzYz",
        },
        {
          id: "MTU6Njg6MTEx",
        },
        {
          id: "MTU6Mjk1OjExMQ",
        },
        {
          id: "MTY6OTk6NDgz",
        },
        {
          id: "MTY6MzI2OjE5NQ",
        },
      ],
    },
    {
      name: "Chapter 2",
      pages: [
        {
          id: "MTg6MzkwOjM2MQ",
        },
        {
          id: "MTk6MzcxOjY5OQ",
        },
        {
          id: "MTk6MzcxOjQ0Nw",
        },
        {
          id: "MTg6MzI2OjI3OQ",
        },
        {
          id: "MjA6OTk6MjQz",
        },
        {
          id: "MjE6Mjk1OjI0Mw",
        },
        {
          id: "MjI6OTk6MzI3",
        },
        {
          id: "MjI6OTk6MTEx",
        },
        {
          id: "MjI6MzI2OjI2Nw",
        },
        {
          id: "MjI6MzI2OjEyMw",
        },
        {
          id: "MjM6Njg6OTk",
        },
        {
          id: "MjM6Mjk1OjYzOQ",
        },
        {
          id: "MjM6Mjk1OjM5OQ",
        },
        {
          id: "MjM6Mjk1OjIzMQ",
        },
        {
          id: "MjQ6OTk6NDgz",
        },
        {
          id: "MjU6Njg6NDk1",
        },
        {
          id: "MjU6Njg6NDM1",
        },
        {
          id: "MjU6Njg6Mzg3",
        },
        {
          id: "MjY6OTk6MTcx",
        },
        {
          id: "MjY6MzI2OjI5MQ",
        },
        {
          id: "Mjc6Njg6MTM1",
        },
        {
          id: "Mjg6OTk6NDU5",
        },
        {
          id: "Mjg6OTk6MzM5",
        },
        {
          id: "Mjk6Njg6NjYz",
        },
        {
          id: "Mjk6Njg6MTU5",
        },
        {
          id: "Mjk6Mjk1OjE4Mw",
        },
        {
          id: "MzE6Njg6Mjc5",
        },
        {
          id: "MzE6Mjk1OjY5OQ",
        },
        {
          id: "MzI6OTk6MTEx",
        },
        {
          id: "MzI6MzI2OjEyMw",
        },
        {
          id: "MzM6Mjk1OjI0Mw",
        },
      ],
    },
    {
      name: "Chapter 3",
      pages: [
        {
          id: "MzQ6MzkwOjM2MQ",
        },
        {
          id: "MzU6MzcxOjY5OQ",
        },
        {
          id: "MzU6MzcxOjQxMQ",
        },
        {
          id: "MzU6Njg6NTY3",
        },
        {
          id: "MzU6Njg6MTcx",
        },
        {
          id: "MzY6OTk6MTIz",
        },
        {
          id: "MzY6MzI2OjMzOQ",
        },
        {
          id: "Mzg6OTk6Njk5",
        },
        {
          id: "Mzg6OTk6NTkx",
        },
        {
          id: "Mzg6OTk6NDcx",
        },
        {
          id: "Mzg6OTk6MzE1",
        },
        {
          id: "Mzk6Njg6Njk5",
        },
        {
          id: "Mzk6Njg6NjI3",
        },
        {
          id: "Mzk6Mjk1OjYzOQ",
        },
        {
          id: "Mzk6Mjk1OjIzMQ",
        },
        {
          id: "NDA6OTk6Njk5",
        },
        {
          id: "NDE6Njg6NDQ3",
        },
        {
          id: "NDI6OTk6Njk5",
        },
        {
          id: "NDI6MzI4OjIwNw",
        },
        {
          id: "NDM6Njg6NjUx",
        },
        {
          id: "NDM6Njg6MjMx",
        },
        {
          id: "NDM6Njg6MTQ3",
        },
        {
          id: "NDM6Mjk1OjU1NQ",
        },
        {
          id: "NDQ6OTk6Njk5",
        },
        {
          id: "NDQ6MzI2OjY5OQ",
        },
        {
          id: "NDQ6MzI2OjYzOQ",
        },
        {
          id: "NDQ6MzI2OjQ1OQ",
        },
        {
          id: "NDQ6MzI2OjE3MQ",
        },
        {
          id: "NDU6Mjk1OjM2Mw",
        },
        {
          id: "NDY6MzI2OjU0Mw",
        },
      ],
    },
    {
      name: "Chapter 4",
      pages: [
        {
          id: "NDg6MzkwOjM2MQ",
        },
        {
          id: "NDk6MzcxOjY5OQ",
        },
        {
          id: "NDk6MzcxOjM3NQ",
        },
        {
          id: "NDk6Njg6MjU1",
        },
        {
          id: "NTA6OTk6NDk1",
        },
        {
          id: "NTA6MzI2OjI5MQ",
        },
        {
          id: "NTE6Njg6NjUx",
        },
        {
          id: "NTE6Njg6MjY3",
        },
        {
          id: "NTE6Mjk1OjQ3MQ",
        },
        {
          id: "NTI6MzI2OjQxMQ",
        },
        {
          id: "NTI6MzY1OjEyMw",
        },
        {
          id: "NTM6Mjk1OjY1MQ",
        },
        {
          id: "NTQ6OTk6NDQ3",
        },
        {
          id: "NTQ6OTk6MjU1",
        },
        {
          id: "NTQ6MzI2OjE0Nw",
        },
        {
          id: "NTU6Njg6NTA3",
        },
        {
          id: "NTU6Mjk1OjI3OQ",
        },
        {
          id: "NTY6OTk6MjE5",
        },
        {
          id: "NTY6NDE3OjUzMQ",
        },
        {
          id: "NTc6Njg6MTU5",
        },
        {
          id: "NTc6Mjk1OjY1MQ",
        },
        {
          id: "NTg6OTk6MTk1",
        },
        {
          id: "NTg6NDE5OjUxOQ",
        },
        {
          id: "NTk6Njg6MzUx",
        },
        {
          id: "NTk6Mjk1OjQ5NQ",
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
        {
          id: "journal18",
        },
        {
          id: "journal19",
        },
        {
          id: "journal20",
        },
        {
          id: "journal21",
        },
        {
          id: "journal22",
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
        {
          id: "npc21",
        },
        {
          id: "npc22",
        },
        {
          id: "npc23",
        },
        {
          id: "npc24",
        },
        {
          id: "npc25",
        },
      ],
    },
    {
      name: "{MzoyMjg6Mzc1:0:18}",
      pages: [
        {
          id: "NjE6MTQ5OjY1NA",
        },
        {
          id: "Njc6MzE5OjY4Nw",
        },
        {
          id: "Njk6MzA0OjY4Nw",
        },
        {
          id: "NjE6Njg6MTk1",
        },
        {
          id: "NjE6Mjk1OjU0Mw",
        },
        {
          id: "NjI6OTk6Njk5",
        },
        {
          id: "NjI6MzI2OjY5OQ",
        },
        {
          id: "NjI6MzI2OjYwMw",
        },
        {
          id: "NjI6MzI2OjIxOQ",
        },
        {
          id: "NjM6Njg6NDcx",
        },
        {
          id: "NjM6Njg6MTU5",
        },
        {
          id: "NjM6Mjk1OjY5OQ",
        },
        {
          id: "NjM6Mjk1OjE3MQ",
        },
        {
          id: "NjQ6MzI2OjU5MQ",
        },
        {
          id: "NjQ6MzI2OjIwNw",
        },
        {
          id: "NjU6Njg6NjAz",
        },
        {
          id: "NjU6Njg6MjA3",
        },
        {
          id: "NjU6Mjk1OjI5MQ",
        },
        {
          id: "Njc6Njg6Mzc1",
        },
        {
          id: "Njg6OTk6Njk5",
        },
        {
          id: "Njg6MzI2OjY5OQ",
        },
        {
          id: "Njk6Njg6Njk5",
        },
        {
          id: "Njk6Njg6NTkx",
        },
        {
          id: "Njk6Njg6NDU5",
        },
        {
          id: "Njk6Mjk1OjIzMQ",
        },
        {
          id: "NzE6Njg6Njk5",
        },
        {
          id: "NzE6Njg6MTQ3",
        },
        {
          id: "NzE6Mjk1OjM4Nw",
        },
      ],
    },
    {
      name: "Adventure Toolbox",
      pages: [
        {
          id: "NzM6MTUwOjY1NA",
        },
        {
          id: "NzM6Njg6MjU1",
        },
        {
          id: "NzQ6OTk6NjE1",
        },
        {
          id: "NzQ6OTk6MzM5",
        },
        {
          id: "NzQ6OTk6MTEx",
        },
        {
          id: "NzQ6MzI2OjQ4Mw",
        },
        {
          id: "NzU6Njg6Njk5",
        },
        {
          id: "NzU6Njg6NjUx",
        },
        {
          id: "NzU6Njg6Mzg3",
        },
        {
          id: "NzU6Njg6MTcx",
        },
        {
          id: "NzU6Mjk1OjYxNQ",
        },
        {
          id: "NzU6Mjk1OjM4Nw",
        },
        {
          id: "NzU6Mjk1OjIzMQ",
        },
        {
          id: "NzY6OTk6Njk5",
        },
        {
          id: "Nzc6Njg6Njk5",
        },
        {
          id: "Nzg6OTk6Njk5",
        },
        {
          id: "Nzg6OTk6Mjkx",
        },
        {
          id: "Nzk6Njg6Njk5",
        },
        {
          id: "ODA6OTk6Njk5",
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
          id: "ODU6Njg6NjUx",
        },
        {
          id: "ODU6Njg6Mzc1",
        },
        {
          id: "ODY6MjUxOjY5OQ",
        },
        {
          id: "ODY6MjUxOjU1NQ",
        },
        {
          id: "ODc6Njg6Njk5",
        },
        {
          id: "ODg6MjUwOjY5OQ",
        },
        {
          id: "ODg6MjUwOjU5MQ",
        },
        {
          id: "ODk6Njg6Njk5",
        },
        {
          id: "OTA6MjEwOjY1OA",
        },
        {
          id: "OTI6MTA0OjY1OA",
        },
      ],
    },
  ];
  combines = [
    {
      source: "OTM6Njg6NjAz",
      dest: "OTI6MTA0OjY1OA",
    },
    {
      source: "OTE6Njg6NTY3",
      dest: "OTA6MjEwOjY1OA",
    },
    {
      source: "ODI6MTI1OjY2Mw",
      dest: "ODI6MjUxOjY5OQ",
    },
    {
      source: "ODM6MzcxOjY2Mw",
      dest: "ODM6Njg6Njk5",
    },
    {
      source: "ODQ6MTM2OjY2Mw",
      dest: "ODQ6MjUxOjY5OQ",
    },
    {
      source: "ODU6MzcxOjY2Mw",
      dest: "ODU6Njg6Mzc1",
    },
    {
      source: "ODY6MTM5OjY2Mw",
      dest: "ODY6MjUxOjY5OQ",
    },
    {
      source: "ODc6MzcxOjY2Mw",
      dest: "ODc6Njg6Njk5",
    },
    {
      source: "ODg6MTE0OjY2Mw",
      dest: "ODg6MjUwOjY5OQ",
    },
    {
      source: "ODk6MzcxOjY2Mw",
      dest: "ODk6Njg6Njk5",
    },
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "EXTINCTION CURSE: THE SHOW MUST GO ON" &&
        t.fontId === "Gin-Regular:12",
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    this.changeTextFn(text, 31, 245.256, 147, (x) =>
      x.replace("LEVEL", "CREATURE"),
    );
    this.changeTextFn(text, 31, 244.536, 99, (x) =>
      x.replace("LEVEL", "CREATURE"),
    );
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
