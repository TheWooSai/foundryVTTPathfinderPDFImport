import { ExtinctionCurseBase } from "./base.js";
import { AdventureImage, CaptionImage } from "../../core/images.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class ExtinctionCurse2 extends ExtinctionCurseBase {
  prefix = "extinction-curse2";
  fullName = "Extinction Curse - Legacy of the Lost God";
  pages = [
    this.ChapterHeadingPageLayout(6),
    this.RightSingleColumnWithSidebar(7),
    this.LeftTwoColumn(8),
    this.RightTwoColumn(9),
    this.LeftTwoColumn(10),
    this.RightTwoColumnWithRightCutout(11, 210),
    this.LeftTwoColumnWithMap(12, 340),
    this.RightTwoColumn(13),
    this.LeftTwoColumn(14),
    this.RightTwoColumn(15),
    this.LeftTwoColumn(16),
    this.RightTwoColumn(17),
    this.LeftTwoColumn(18),
    this.RightTwoColumn(19),
    this.ChapterHeadingPageLayout(20),
    this.RightSingleColumnWithSidebar(21),
    this.LeftTwoColumnWithMap(22, 340),
    this.RightTwoColumn(23),
    this.LeftTwoColumn(24),
    this.RightTwoColumn(25),
    this.LeftTwoColumn(26),
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
    this.LeftTwoColumnWithMap(38, 472),
    this.RightTwoColumn(39),
    this.LeftTwoColumn(40),
    this.RightTwoColumn(41),
    this.LeftTwoColumn(42),
    this.RightTwoColumn(43),
    this.LeftTwoColumnWithLeftCutout(44, 365),
    this.RightTwoColumn(45),
    this.ChapterHeadingPageLayout(46),
    this.RightSingleColumnWithSidebar(47),
    this.RightTwoColumn(49),
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
    this.LeftTwoColumn(60),
    this.RightTwoColumn(61),
    this.RightChapterHeadingPageLayout(63),
    this.LeftTwoColumn(64),
    this.RightTwoColumnWithRightCutout(65, 160),
    this.LeftTwoColumn(66),
    this.RightTwoColumn(67),
    this.RightChapterHeadingPageLayout(69),
    this.LeftTwoColumn(70),
    this.RightTwoColumnWithRightCutout(71, 445),
    this.LeftTwoColumnWithLeftCutout(72, 245),
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
        name: "ec2/map1",
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
      imageLeft: 19,
      imageRight: 1253,
      imageCols: 55,
      imageTop: 3,
      imageBottom: 858,
      imageRows: 38,
      globalLight: false,
      detailsFile: "/ec/maps/ec2-map1.json",
      journals: [
        {
          x: 2250,
          y: 1550,
          id: "MTI6MzI2OjE1OQ",
        },
        {
          x: 2350,
          y: 2350,
          id: "MTM6Njg6NDk1",
        },
        {
          x: 3750,
          y: 1750,
          id: "MTM6Njg6MjU1",
        },
        {
          x: 4750,
          y: 2050,
          id: "MTM6Mjk1OjY2Mw",
        },
        {
          x: 5050,
          y: 1250,
          id: "MTM6Mjk1OjQxMQ",
        },
        {
          x: 5850,
          y: 1950,
          id: "MTQ6MzI2OjY5OQ",
        },
        {
          x: 5650,
          y: 2550,
          id: "MTQ6MzI2OjQ4Mw",
        },
        {
          x: 5550,
          y: 3150,
          id: "MTQ6MzI2OjE0Nw",
        },
        {
          x: 2950,
          y: 3250,
          id: "MTU6Mjk1OjYyNw",
        },
        {
          x: 3450,
          y: 3750,
          id: "MTU6Mjk1OjQ3MQ",
        },
        {
          x: 2550,
          y: 3650,
          id: "MTU6Mjk1OjI1NQ",
        },
        {
          x: 4350,
          y: 4450,
          id: "MTY6OTk6MjU1",
        },
        {
          x: 6450,
          y: 4450,
          id: "MTY6MzI2OjU0Mw",
        },
        {
          x: 6450,
          y: 3850,
          id: "MTY6MzI2OjIwNw",
        },
        {
          x: 1450,
          y: 1150,
          id: "MTE6Njg6NTY3",
        },
        {
          x: 1450,
          y: 1250,
          id: "MTE6Njg6MjA3",
        },
      ],
      tokens: [
        {
          id: "npc38",
          x: 2100,
          y: 2300,
          elite: true,
        },
        {
          id: "npc38",
          x: 2300,
          y: 2100,
          elite: true,
        },
        {
          id: "npc54",
          x: 2400,
          y: 3600,
        },
        {
          id: "npc61",
          x: 2600,
          y: 3400,
          weak: true,
        },
        {
          id: "npc61",
          x: 2400,
          y: 3700,
          weak: true,
        },
        {
          id: "npc31",
          x: 4100,
          y: 4500,
        },
        {
          id: "npc59",
          x: 6400,
          y: 4500,
        },
        {
          id: "npc33",
          x: 6400,
          y: 3900,
        },
        {
          id: "npc33",
          x: 6300,
          y: 3900,
        },
        {
          id: "npc33",
          x: 6300,
          y: 3800,
        },
        {
          id: "npc3",
          x: 5400,
          y: 2900,
        },
        {
          id: "npc36",
          x: 5800,
          y: 2600,
        },
        {
          id: "npc62",
          x: 5800,
          y: 2500,
        },
        {
          id: "npc62",
          x: 5300,
          y: 2500,
        },
        {
          id: "npc62",
          x: 5300,
          y: 2400,
        },
        {
          id: "npc62",
          x: 5200,
          y: 2400,
        },
        {
          id: "npc62",
          x: 5200,
          y: 2500,
        },
        {
          id: "npc62",
          x: 5900,
          y: 2500,
        },
        {
          id: "npc67",
          x: 6200,
          y: 2e3,
        },
      ],
    }),
    new ModuleScene({
      name: "map2",
      canonical: {
        name: "ec2/map2",
        priority: 0,
      },
      nameInfo: {
        x: 16,
        y: 758.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 22,
      width: 1261,
      height: 880,
      imageLeft: 9,
      imageRight: 1147,
      imageCols: 40,
      imageTop: 40,
      imageBottom: 865,
      imageRows: 29,
      globalLight: false,
      detailsFile: "/ec/maps/ec2-map2.json",
      journals: [
        {
          x: 2450,
          y: 2350,
          id: "MjQ6OTk6Njk5",
        },
        {
          x: 3550,
          y: 2250,
          id: "MjQ6MzI2OjQ5NQ",
        },
        {
          x: 3850,
          y: 2950,
          id: "MjY6OTk6NDU5",
        },
        {
          x: 4150,
          y: 1350,
          id: "Mjc6Mjk1OjU2Nw",
        },
        {
          x: 4050,
          y: 1650,
          id: "Mjc6Mjk1OjQyMw",
        },
        {
          x: 4750,
          y: 1550,
          id: "Mjg6MzI2OjM5OQ",
        },
        {
          x: 2850,
          y: 950,
          id: "MzA6OTk6NjE1",
        },
        {
          x: 4450,
          y: 2250,
          id: "MzE6Njg6NDEx",
        },
        {
          x: 4950,
          y: 2850,
          id: "MzI6OTk6NDIz",
        },
        {
          x: 4750,
          y: 3150,
          id: "MzI6MzI2OjUxOQ",
        },
        {
          x: 5050,
          y: 3150,
          id: "MzI6MzI2OjUxOQ",
        },
        {
          x: 4350,
          y: 3050,
          id: "MzI6MzI2OjE4Mw",
        },
      ],
      tokens: [
        {
          id: "npc30",
          x: 2600,
          y: 2e3,
        },
        {
          id: "npc30",
          x: 2400,
          y: 2600,
        },
        {
          id: "npc5",
          x: 3300,
          y: 2300,
        },
        {
          id: "npc66",
          x: 3600,
          y: 2400,
        },
        {
          id: "npc66",
          x: 3700,
          y: 2300,
        },
        {
          id: "npc44",
          x: 4e3,
          y: 2900,
        },
        {
          id: "npc44",
          x: 3900,
          y: 3e3,
        },
        {
          id: "npc44",
          x: 3800,
          y: 3100,
        },
        {
          id: "npc8",
          x: 4200,
          y: 3100,
        },
        {
          id: "npc49",
          x: 5100,
          y: 2900,
        },
        {
          id: "npc7",
          x: 4600,
          y: 2400,
        },
        {
          id: "npc24",
          x: 4400,
          y: 2500,
        },
        {
          id: "npc41",
          x: 4600,
          y: 1600,
        },
        {
          id: "npc24",
          x: 4800,
          y: 1400,
        },
        {
          id: "npc6",
          x: 4600,
          y: 1500,
        },
        {
          id: "npc11",
          x: 4300,
          y: 1500,
        },
        {
          id: "npc65",
          x: 4100,
          y: 1700,
        },
        {
          id: "npc65",
          x: 4100,
          y: 1600,
        },
        {
          id: "npc65",
          x: 4100,
          y: 1500,
        },
        {
          id: "npc42",
          x: 2500,
          y: 800,
        },
        {
          id: "npc39",
          x: 2600,
          y: 800,
        },
        {
          id: "npc39",
          x: 2900,
          y: 800,
        },
      ],
    }),
    new ModuleScene({
      name: "map3",
      canonical: {
        name: "ec2/map3",
        priority: 0,
      },
      nameInfo: {
        x: 16,
        y: 394.6681,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 36,
      width: 1261,
      height: 880,
      imageLeft: 9,
      imageRight: 1147,
      imageCols: 40,
      imageTop: 52,
      imageBottom: 820,
      imageRows: 27,
      globalLight: false,
      detailsFile: "/ec/maps/ec2-map3.json",
      journals: [
        {
          x: 3250,
          y: 3050,
          id: "MzU6Njg6NTQz",
        },
        {
          x: 2850,
          y: 3250,
          id: "MzY6OTk6MTk1",
        },
        {
          x: 3550,
          y: 3250,
          id: "MzY6OTk6MTk1",
        },
        {
          x: 4150,
          y: 3050,
          id: "MzY6OTk6MTIz",
        },
        {
          x: 3400,
          y: 2400,
          id: "Mzc6Mjk1OjU1NQ",
        },
        {
          x: 2800,
          y: 2400,
          id: "Mzc6Mjk1OjQxMQ",
        },
        {
          x: 2850,
          y: 2750,
          id: "Mzc6Mjk1OjI0Mw",
        },
        {
          x: 2400,
          y: 2400,
          id: "Mzc6Mjk1OjE0Nw",
        },
        {
          x: 2e3,
          y: 3e3,
          id: "Mzg6OTk6Mzk5",
        },
        {
          x: 4950,
          y: 3050,
          id: "Mzk6Njg6OTk",
        },
        {
          x: 4950,
          y: 2750,
          id: "Mzk6Njg6OTk",
        },
        {
          x: 4950,
          y: 2450,
          id: "Mzk6Njg6OTk",
        },
        {
          x: 4950,
          y: 3350,
          id: "Mzk6Mjk1OjU5MQ",
        },
        {
          x: 4950,
          y: 2150,
          id: "NDA6OTk6NTMx",
        },
        {
          x: 4750,
          y: 1150,
          id: "NDA6OTk6MTM1",
        },
        {
          x: 4250,
          y: 1950,
          id: "NDA6MzI2OjI0Mw",
        },
        {
          x: 1550,
          y: 2050,
          id: "NDE6Njg6NTc5",
        },
        {
          x: 1750,
          y: 1150,
          id: "NDE6Njg6MzE1",
        },
        {
          x: 2550,
          y: 1750,
          id: "NDI6MzI2OjY2Mw",
        },
        {
          x: 2450,
          y: 1050,
          id: "NDI6MzI2OjExMQ",
        },
        {
          x: 3650,
          y: 1950,
          id: "NDM6Njg6MzYz",
        },
        {
          x: 3450,
          y: 1250,
          id: "NDM6Njg6MTEx",
        },
      ],
      tokens: [
        {
          id: "npc51",
          x: 1800,
          y: 3e3,
        },
        {
          id: "npc28",
          x: 3400,
          y: 2900,
        },
        {
          id: "npc53",
          x: 3200,
          y: 2700,
        },
        {
          id: "npc53",
          x: 3600,
          y: 3e3,
        },
        {
          id: "npc53",
          x: 3200,
          y: 3300,
        },
        {
          id: "npc41",
          x: 4200,
          y: 2900,
        },
        {
          id: "npc5",
          x: 4300,
          y: 3100,
        },
        {
          id: "npc5",
          x: 5100,
          y: 3300,
        },
        {
          id: "npc5",
          x: 4800,
          y: 3300,
        },
        {
          id: "npc63",
          x: 4e3,
          y: 1800,
        },
        {
          id: "npc63",
          x: 4e3,
          y: 2e3,
        },
        {
          id: "npc10",
          x: 2600,
          y: 1600,
        },
        {
          id: "npc10",
          x: 2400,
          y: 1700,
        },
        {
          id: "npc64",
          x: 2500,
          y: 1800,
        },
        {
          id: "npc11",
          x: 3200,
          y: 1100,
        },
        {
          id: "npc57",
          x: 3300,
          y: 900,
        },
        {
          id: "npc5",
          x: 3700,
          y: 1200,
        },
        {
          id: "npc35",
          x: 4700,
          y: 900,
        },
        {
          id: "npc58",
          x: 2400,
          y: 800,
        },
        {
          id: "npc9",
          x: 1500,
          y: 1100,
        },
        {
          id: "npc60",
          x: 1400,
          y: 1e3,
        },
        {
          id: "npc65",
          x: 1900,
          y: 1100,
        },
        {
          id: "npc65",
          x: 2e3,
          y: 1e3,
        },
      ],
    }),
    new ModuleScene({
      name: "map4",
      canonical: {
        name: "ec2/map4",
        priority: 0,
      },
      nameInfo: {
        x: 29,
        y: 747,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 48,
      width: 1261,
      height: 1637,
      imageLeft: 22,
      imageRight: 1255,
      imageCols: 41,
      imageTop: 19,
      imageBottom: 1612,
      imageRows: 53,
      globalLight: true,
      detailsFile: "/ec/maps/ec2-map4.json",
      journals: [
        {
          x: 3050,
          y: 6450,
          id: "NDc6Njg6Mjc5",
        },
        {
          x: 3050,
          y: 5350,
          id: "NDk6Njg6MjQz",
        },
        {
          x: 1950,
          y: 5650,
          id: "NDk6Njg6MTIz",
        },
        {
          x: 4050,
          y: 5650,
          id: "NTA6OTk6NDU5",
        },
        {
          x: 4550,
          y: 4850,
          id: "NTI6OTk6Mjkx",
        },
        {
          x: 3450,
          y: 4750,
          id: "NTM6Njg6MjQz",
        },
        {
          x: 3450,
          y: 3050,
          id: "NTQ6OTk6NTU1",
        },
        {
          x: 3750,
          y: 1950,
          id: "NTU6Njg6Mzc1",
        },
        {
          x: 4750,
          y: 2550,
          id: "NTU6Njg6MjU1",
        },
        {
          x: 2450,
          y: 5050,
          id: "NTU6Mzk1OjE1OQ",
        },
        {
          x: 2050,
          y: 4850,
          id: "NTY6MzI2OjYyNw",
        },
        {
          x: 1750,
          y: 4050,
          id: "NTY6MzI4OjEyMw",
        },
        {
          x: 1950,
          y: 3550,
          id: "NTc6Njg6MzE1",
        },
        {
          x: 1650,
          y: 3250,
          id: "NTc6Mjk1OjU5MQ",
        },
        {
          x: 1750,
          y: 2550,
          id: "NTg6OTk6NjUx",
        },
        {
          x: 2150,
          y: 1950,
          id: "NTk6Njg6NTMx",
        },
        {
          x: 1650,
          y: 1950,
          id: "NjA6OTk6Njk5",
        },
      ],
      tokens: [
        {
          id: "npc12",
          x: 2900,
          y: 6300,
        },
        {
          id: "npc12",
          x: 3e3,
          y: 6300,
        },
        {
          id: "npc48",
          x: 1800,
          y: 5600,
        },
        {
          id: "npc16",
          x: 2200,
          y: 4800,
        },
        {
          id: "npc16",
          x: 2200,
          y: 5100,
        },
        {
          id: "npc43",
          x: 1400,
          y: 3700,
        },
        {
          id: "npc56",
          x: 1900,
          y: 4100,
        },
        {
          id: "npc56",
          x: 1900,
          y: 4300,
        },
        {
          id: "npc25",
          x: 2e3,
          y: 3500,
        },
        {
          id: "npc47",
          x: 1400,
          y: 3e3,
        },
        {
          id: "npc17",
          x: 1900,
          y: 3100,
        },
        {
          id: "npc17",
          x: 1600,
          y: 3e3,
        },
        {
          id: "npc52",
          x: 1600,
          y: 2500,
        },
        {
          id: "npc27",
          x: 1600,
          y: 2e3,
        },
        {
          id: "npc18",
          x: 1700,
          y: 2e3,
        },
        {
          id: "npc1",
          x: 2e3,
          y: 2e3,
        },
        {
          id: "npc12",
          x: 2100,
          y: 2e3,
        },
        {
          id: "npc15",
          x: 3700,
          y: 3200,
        },
        {
          id: "npc45",
          x: 3700,
          y: 3200,
        },
        {
          id: "npc46",
          x: 3500,
          y: 4500,
        },
        {
          id: "npc13",
          x: 4200,
          y: 5800,
        },
        {
          id: "npc50",
          x: 4400,
          y: 5900,
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
      width: 1262,
      height: 1636,
    }),
    new AdventureImage({
      name: "journal8",
      page: 6,
      width: 1261,
      height: 805,
    }),
    new AdventureImage({
      name: "journal9",
      page: 20,
      width: 1259,
      height: 805,
    }),
    new AdventureImage({
      name: "journal10",
      page: 34,
      width: 1259,
      height: 805,
    }),
    new AdventureImage({
      name: "journal11",
      page: 46,
      width: 1259,
      height: 805,
    }),
    new AdventureImage({
      name: "journal12",
      page: 62,
      width: 1261,
      height: 1636,
    }),
    new AdventureImage({
      name: "journal13",
      page: 64,
      width: 1045,
      height: 945,
    }),
    new AdventureImage({
      name: "journal14",
      page: 66,
      width: 605,
      height: 605,
    }),
    new AdventureImage({
      name: "journal15",
      page: 68,
      width: 1261,
      height: 1636,
    }),
    new AdventureImage({
      name: "journal16",
      page: 70,
      width: 732,
      height: 1196,
    }),
    new AdventureImage({
      name: "journal17",
      page: 73,
      width: 865,
      height: 1011,
    }),
    new AdventureImage({
      name: "journal18",
      page: 74,
      width: 1261,
      height: 1636,
    }),
    new AdventureImage({
      name: "journal19",
      page: 76,
      width: 482,
      height: 379,
    }),
    new AdventureImage({
      name: "journal20",
      page: 77,
      width: 596,
      height: 596,
    }),
    new AdventureImage({
      name: "journal21",
      page: 78,
      width: 883,
      height: 1017,
    }),
    new CaptionImage({
      name: "journal22",
      page: 24,
      width: 635,
      height: 912,
    }),
    new CaptionImage({
      name: "journal23",
      page: 39,
      width: 774,
      height: 1024,
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.hz2uoBS8DFOWshko",
      page: 8,
      width: 605,
      height: 1246,
      tokenX: -107,
      tokenY: -45,
      tokenSize: 350,
      forIds: ["NTk6Mjk1OjUzMQ", "OToyOTU6Mzc1"],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.qKHkamxIPbqxEiwp",
      page: 10,
      width: 741,
      height: 1280,
      tokenX: -128,
      tokenY: -65,
      tokenSize: 356,
      forIds: ["MTg6MzI2OjIxOQ", "OToyOTU6MzI3"],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.viTyDNdkTo0JPLb8",
      page: 14,
      width: 816,
      height: 1163,
      tokenX: -250,
      tokenY: -15,
      tokenSize: 547,
      forIds: ["MTU6Njg6MzE1"],
    }),
    new ModuleNpc({
      id: "npc4",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.gZBayD2gJu7iZrud",
      page: 19,
      width: 891,
      height: 1128,
      tokenX: -304,
      tokenY: -9,
      tokenSize: 316,
      forIds: ["MTk6Njg6NDQ3"],
    }),
    new ModuleNpc({
      id: "npc5",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.9cwg4cOgvFqtxIQ1",
      page: 25,
      width: 610,
      height: 1164,
      tokenX: -39,
      tokenY: -171,
      tokenSize: 464,
      forIds: [
        "MjU6Njg6NDM1",
        "Mzc6Njg6Njk5",
        "NDQ6MzI2OjYwMw",
        "NDA6OTk6NTc5",
      ],
    }),
    new ModuleNpc({
      id: "npc6",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.9jF564DF6ylEovna",
      name: {
        page: 28,
        x: 149.4786,
        y: 550.6813,
      },
      page: 28,
      width: 826,
      height: 725,
      tokenX: -185,
      tokenY: -193,
      tokenSize: 210,
      forIds: ["Mjk6Mjk1OjY5OQ"],
    }),
    new ModuleNpc({
      id: "npc7",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.k6mTbQPIlez0QhYg",
      name: {
        page: 30,
        x: 257.9988,
        y: 114.5905,
      },
      page: 30,
      width: 924,
      height: 1065,
      tokenX: -468,
      tokenY: -175,
      tokenSize: 421,
      forIds: ["MzI6OTk6NjYz"],
    }),
    new ModuleNpc({
      id: "npc8",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.XyHk8ChyuOkJuhVZ",
      page: 33,
      width: 765,
      height: 1124,
      tokenX: -208,
      tokenY: 23,
      tokenSize: 312,
      forIds: ["MzM6Njg6OTk"],
    }),
    new ModuleNpc({
      id: "npc9",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.wiNeCuB0DXt2ReAx",
      name: {
        page: 41,
        x: 327.8612,
        y: 103.9104,
      },
      page: 41,
      width: 974,
      height: 1216,
      tokenX: -268,
      tokenY: -236,
      tokenSize: 292,
      forIds: ["NDI6OTk6NTMx"],
    }),
    new ModuleNpc({
      id: "npc10",
      name: {
        page: 43,
        x: 452.7444,
        y: 154.6814,
      },
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.k6mTbQPIlez0QhYg",
      page: 43,
      width: 899,
      height: 1200,
      tokenX: -38,
      tokenY: -93,
      tokenSize: 472,
      forIds: ["NDI6MzI2OjI5MQ"],
    }),
    new ModuleNpc({
      id: "npc11",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.k6mTbQPIlez0QhYg",
      page: 45,
      width: 675,
      height: 1153,
      tokenX: -202,
      tokenY: -13,
      tokenSize: 369,
      forIds: ["NDQ6MzI2OjY5OQ", "Mjg6OTk6NDEx"],
    }),
    new ModuleNpc({
      id: "npc12",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.7YJHi9niIKpFXXrf",
      page: 49,
      width: 719,
      height: 1247,
      tokenX: -58,
      tokenY: 56,
      tokenSize: 323,
      forIds: ["NTk6Mjk1OjEzNQ", "NDk6Njg6NTkx"],
    }),
    new ModuleNpc({
      id: "npc13",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.beb9LqlOBFseROnY",
      page: 51,
      width: 753,
      height: 1094,
      tokenX: -40,
      tokenY: 102,
      tokenSize: 422,
      forIds: ["NTE6Njg6Mjkx"],
    }),
    new ModuleNpc({
      id: "npc14",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 53,
        x: 233.6802,
        y: 128.6359,
      },
      page: 53,
      width: 457,
      height: 1113,
      tokenX: -31,
      tokenY: 36,
      tokenSize: 301,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc15",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.i3kQzeKcSoxkNYJb",
      page: 55,
      width: 666,
      height: 1078,
      tokenX: -136,
      tokenY: 49,
      tokenSize: 350,
      forIds: ["NTQ6MzI2OjUzMQ"],
    }),
    new ModuleNpc({
      id: "npc16",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.0qaGLx8ads9blcfS",
      name: {
        page: 56,
        x: 108.0324,
        y: 80.6359,
      },
      page: 56,
      width: 938,
      height: 1085,
      tokenX: -381,
      tokenY: -69,
      tokenSize: 329,
      forIds: ["NTY6MzI2OjI2Nw"],
    }),
    new ModuleNpc({
      id: "npc17",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.aqW5sp9HPgZgpXxs",
      name: {
        page: 58,
        x: 198.8258,
        y: 138.5905,
      },
      page: 58,
      width: 911,
      height: 1093,
      tokenX: -226,
      tokenY: -6,
      tokenSize: 533,
      forIds: ["NTg6OTk6Njk5"],
    }),
    new ModuleNpc({
      id: "npc18",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.gDMPUL0UiOHrUUd3",
      name: {
        page: 60,
        x: 105.4706,
        y: 151.3213,
      },
      page: 60,
      width: 768,
      height: 1112,
      tokenX: -171,
      tokenY: 64,
      tokenSize: 356,
      forIds: ["NjE6Njg6MzI3"],
    }),
    new ModuleNpc({
      id: "npc19",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.u6b7tlXDXMxmkdLO",
      page: 80,
      width: 477,
      height: 1050,
      tokenX: -72,
      tokenY: 24,
      tokenSize: 322,
      forIds: ["ODA6MjUxOjU1NQ"],
    }),
    new ModuleNpc({
      id: "npc20",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.nFYpYIL5OUCFZCr9",
      page: 81,
      width: 790,
      height: 1056,
      tokenX: -215,
      tokenY: -33,
      tokenSize: 580,
      forIds: ["ODE6Njg6NDgz"],
    }),
    new ModuleNpc({
      id: "npc21",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.x2XcPDPLeCAXITlZ",
      page: 82,
      width: 811,
      height: 1168,
      tokenX: -82,
      tokenY: 187,
      tokenSize: 720,
      forIds: ["ODI6MzIyOjQ3MQ"],
    }),
    new ModuleNpc({
      id: "npc22",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.jaUUH2i5UQZYQqab",
      page: 83,
      width: 773,
      height: 1119,
      tokenX: -240,
      tokenY: -126,
      tokenSize: 503,
      forIds: ["ODM6Njg6NTMx"],
    }),
    new ModuleNpc({
      id: "npc23",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.HbxPY2GSxhRu4rVi",
      page: 85,
      width: 815,
      height: 984,
      tokenX: -361,
      tokenY: 103,
      tokenSize: 592,
      forIds: ["ODU6Njg6MzAz"],
    }),
    new ModuleNpc({
      id: "npc24",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.I31kJb0DRkzTn8iX",
      page: 86,
      width: 817,
      height: 1050,
      tokenX: -397,
      tokenY: -144,
      tokenSize: 518,
      forIds: ["MzI6OTk6NjE1", "Mjk6Njg6OTk", "ODY6MjUxOjUzMQ"],
    }),
    new ModuleNpc({
      id: "npc25",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.TdqGpBasgDOUqmNp",
      page: 87,
      width: 677,
      height: 1117,
      tokenX: 255,
      tokenY: 57,
      tokenSize: 1229,
      forIds: ["ODc6Njg6NDcx", "NTc6Mjk1OjY5OQ"],
    }),
    new ModuleNpc({
      id: "npc26",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.oYstle5FAR800UQT",
      page: 89,
      width: 872,
      height: 1360,
      tokenX: -240,
      tokenY: -133,
      tokenSize: 352,
      forIds: ["ODk6MzYxOjU0Mw", "OToyOTU6NDIz"],
    }),
    new ModuleNpc({
      id: "npc27",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.QMFlW9qrUKWBOF1Q",
      page: 91,
      width: 855,
      height: 1225,
      tokenX: -230,
      tokenY: -100,
      tokenSize: 413,
      forIds: ["OTE6Njg6Njk5", "NjE6Njg6Mzc1"],
    }),
    new ModuleNpc({
      id: "npc28",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.UKBR2GdXIdg66Nqm",
      page: 93,
      width: 807,
      height: 1259,
      tokenX: -182,
      tokenY: 100,
      tokenSize: 419,
      forIds: ["OTM6Njg6MzYz", "MzU6Njg6OTk"],
    }),
    new ModuleNpc({
      id: "npc29",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.pOlP9ZR0eFS57c27",
      label: "ATSD",
      forIds: ["MTg6MzI2OjYwMw"],
    }),
    new ModuleNpc({
      id: "npc30",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.mX47c0W9rizbmMBM",
      label: "B",
      forIds: ["MjQ6MzI2OjU5MQ"],
    }),
    new ModuleNpc({
      id: "npc31",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.saEPHCN5lDiylb5H",
      label: "BP",
      forIds: ["MTY6MzI2OjY5OQ"],
    }),
    new ModuleNpc({
      id: "npc32",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.jCcA2ca8VnnDtVU9",
      label: "B",
      forIds: ["ODA6MjYyOjI1NQ"],
    }),
    new ModuleNpc({
      id: "npc33",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.C1gYuDSwTkTIkAcC",
      label: "RG",
      forIds: ["MTc6Njg6Mjc5"],
    }),
    new ModuleNpc({
      id: "npc34",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.WOeSP1KLzo0qTpZu",
      label: "CV",
      forIds: ["ODU6Njg6NjM5"],
    }),
    new ModuleNpc({
      id: "npc35",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.skz8n8N9GEQY2c90",
      label: "CG",
      forIds: ["NDA6MzI2OjMyNw"],
    }),
    new ModuleNpc({
      id: "npc36",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.AFWmiIBJ7ypgydQD",
      label: "DW",
      forIds: ["MTI6OTk6MTgz", "MTQ6MzI5OjI0Mw"],
    }),
    new ModuleNpc({
      id: "npc37",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.ZG9ZJ5BZrZ9MS3h3",
      label: "EoF",
      forIds: ["MzE6Mjk1OjU3OQ"],
    }),
    new ModuleNpc({
      id: "npc38",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.sldauWtSyK4JEiRl",
      label: "CS",
      forIds: ["MTM6Njg6MzUx"],
    }),
    new ModuleNpc({
      id: "npc39",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.TFRt64nosuS3PzmH",
      label: "ES",
      forIds: ["MzE6Njg6NTU1"],
    }),
    new ModuleNpc({
      id: "npc40",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.qr46S4VDnaUK0GcM",
      label: "FS",
      forIds: ["NDA6OTk6MTgz"],
    }),
    new ModuleNpc({
      id: "npc41",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.wiNeCuB0DXt2ReAx",
      label: "XM",
      forIds: ["MzY6MzI2Ojk5", "Mjk6Njg6NjE1"],
    }),
    new ModuleNpc({
      id: "npc42",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.B18UXeicuV8RF8kP",
      label: "GCC",
      forIds: ["MzA6MzgxOjMxNQ"],
    }),
    new ModuleNpc({
      id: "npc43",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.XDNJSVxOOryeuN44",
      label: "GA",
      forIds: ["NTc6Njg6NDEx"],
    }),
    new ModuleNpc({
      id: "npc44",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.dEAneTvoPuQXZoLR",
      label: "GM",
      forIds: ["MjY6MzI2OjI2Nw"],
    }),
    new ModuleNpc({
      id: "npc45",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.jkp7THTZMc0ivN8Y",
      label: "M",
      forIds: ["NTU6Njg6Njk5"],
    }),
    new ModuleNpc({
      id: "npc46",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.4Abc5gg8ac5ixGx1",
      label: "HW",
      forIds: ["NTM6MzE2OjU1NQ"],
    }),
    new ModuleNpc({
      id: "npc47",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.hNR4xZRsxUkGPI1v",
      label: "D",
      forIds: ["NTc6Mjk1Ojk5"],
    }),
    new ModuleNpc({
      id: "npc48",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.2k0JX3RFTVRf0KS2",
      label: "W",
      forIds: ["NTA6OTk6NTU1"],
    }),
    new ModuleNpc({
      id: "npc49",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.1HYH5BgFGtFxVMpc",
      label: "KSR",
      forIds: ["MzI6OTk6MTM1"],
    }),
    new ModuleNpc({
      id: "npc50",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.qpRJOzx3bJ7rolHp",
      label: "M",
      forIds: ["NTI6OTk6NDk1"],
    }),
    new ModuleNpc({
      id: "npc51",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 39,
        x: 67.5,
        y: 435,
      },
      label: "C",
      forIds: ["Mzk6Njg6NDM1"],
    }),
    new ModuleNpc({
      id: "npc52",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.UNXMz1Q7hinlaxek",
      label: "MoM",
      forIds: ["NTg6MzI2OjUxOQ"],
    }),
    new ModuleNpc({
      id: "npc53",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.zpd6b6UPP72ZELCj",
      label: "P",
      forIds: ["MzY6OTk6MzM5"],
    }),
    new ModuleNpc({
      id: "npc54",
      actorUuid: "Compendium.pf2e.hazards.Actor.C6nFe8SCWJ8FmLOT",
      label: "Q",
      forIds: ["MTU6Mjk1OjE0Nw"],
    }),
    new ModuleNpc({
      id: "npc55",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.fWAjkhQ0y50Eh2BT",
      label: "R",
      forIds: ["MzU6Njg6NTkx"],
    }),
    new ModuleNpc({
      id: "npc56",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.6EgJNAJss45TQqpa",
      label: "S",
      forIds: ["NTc6Njg6MzYz"],
    }),
    new ModuleNpc({
      id: "npc57",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.qtJ36jlcRQw5sBnr",
      label: "S",
      forIds: ["NDQ6MzI2OjY1MQ"],
    }),
    new ModuleNpc({
      id: "npc58",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.ToteDLIM7jCyHwDH",
      label: "SM",
      forIds: ["NDM6Njg6NDU5"],
    }),
    new ModuleNpc({
      id: "npc59",
      actorUuid:
        "Compendium.pf2e.extinction-curse-bestiary.Actor.f42l4cQyhNOLs19j",
      label: "TCT",
      forIds: ["MTY6MzI2OjQyMw"],
    }),
    new ModuleNpc({
      id: "npc60",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.zAxKR8XWtQm2rqh4",
      label: "T",
      forIds: ["NDI6OTk6NDgz"],
    }),
    new ModuleNpc({
      id: "npc61",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.KgJq51AeYrENo3Db",
      label: "W",
      forIds: ["MTY6OTk6NTU1"],
    }),
    new ModuleNpc({
      id: "npc62",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.BN5Lb6IsQ9Wyu3rL",
      label: "W",
      forIds: ["MTI6OTk6MTM1", "MTQ6MzM0OjE5NQ"],
    }),
    new ModuleNpc({
      id: "npc63",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.Gu0cJHGwPd547OtC",
      label: "W",
      forIds: ["NDE6Njg6NjI3"],
    }),
    new ModuleNpc({
      id: "npc64",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.4cPw8hZwW6uvyzvh",
      label: "V",
      forIds: ["NDI6MzI2OjI0Mw"],
    }),
    new ModuleNpc({
      id: "npc65",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.7w1w7VTnIWMBdFux",
      label: "XL",
      forIds: ["NDI6OTk6Mzk5", "Mjg6MzI2OjU2Nw"],
    }),
    new ModuleNpc({
      id: "npc66",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.S1XgBHtXIOV3JjLy",
      label: "XS",
      forIds: ["MjY6OTk6NTU1"],
    }),
    new ModuleNpc({
      id: "npc67",
      actorUuid: "Compendium.pf2e.hazards.Actor.A93flWUsot3FmC7t",
      label: "YM",
      forIds: ["MTQ6MzI2OjU5MQ"],
    }),
  ];
  journalPages = [
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
          id: "NzozNzE6NDQ3",
        },
        {
          id: "ODo5OTo2OTk",
        },
        {
          id: "ODo5OTozMTU",
        },
        {
          id: "OTo2ODozMzk",
        },
        {
          id: "MTE6Njg6NTY3",
        },
        {
          id: "MTE6Njg6MjA3",
        },
        {
          id: "MTI6MzI2OjE1OQ",
        },
        {
          id: "MTM6Njg6NDk1",
        },
        {
          id: "MTM6Njg6MjU1",
        },
        {
          id: "MTM6Mjk1OjY2Mw",
        },
        {
          id: "MTM6Mjk1OjQxMQ",
        },
        {
          id: "MTQ6MzI2OjY5OQ",
        },
        {
          id: "MTQ6MzI2OjQ4Mw",
        },
        {
          id: "MTQ6MzI2OjE0Nw",
        },
        {
          id: "MTU6Mjk1OjYyNw",
        },
        {
          id: "MTU6Mjk1OjQ3MQ",
        },
        {
          id: "MTU6Mjk1OjI1NQ",
        },
        {
          id: "MTY6OTk6MjU1",
        },
        {
          id: "MTY6MzI2OjU0Mw",
        },
        {
          id: "MTY6MzI2OjIwNw",
        },
        {
          id: "MTc6Mjk1OjYzOQ",
        },
        {
          id: "MTc6Mjk1OjMyNw",
        },
        {
          id: "MTc6Mjk1Ojk5",
        },
        {
          id: "MTg6OTk6NTMx",
        },
        {
          id: "MTg6OTk6Mzg3",
        },
        {
          id: "MTE6MzA0OjY4Nw",
        },
      ],
    },
    {
      name: "Chapter 2",
      pages: [
        {
          id: "MjA6MzkwOjM2MQ",
        },
        {
          id: "MjE6MzcxOjY5OQ",
        },
        {
          id: "MjE6MzcxOjUwNw",
        },
        {
          id: "MjA6MzI2OjIzMQ",
        },
        {
          id: "MjE6Njg6Njk5",
        },
        {
          id: "MjE6Njg6NTA3",
        },
        {
          id: "MjI6OTk6MjY3",
        },
        {
          id: "MjM6Njg6Mjc5",
        },
        {
          id: "MjM6Mjk1OjMyNw",
        },
        {
          id: "MjQ6OTk6Njk5",
        },
        {
          id: "MjQ6MzI2OjQ5NQ",
        },
        {
          id: "MjY6OTk6NDU5",
        },
        {
          id: "Mjc6Mjk1OjU2Nw",
        },
        {
          id: "Mjc6Mjk1OjQyMw",
        },
        {
          id: "Mjg6MzI2OjM5OQ",
        },
        {
          id: "MzA6OTk6NjE1",
        },
        {
          id: "MzE6Njg6NDEx",
        },
        {
          id: "MzI6OTk6NDIz",
        },
        {
          id: "MzI6MzI2OjUxOQ",
        },
        {
          id: "MzI6MzI2OjE4Mw",
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
          id: "MzU6MzcxOjQ5NQ",
        },
        {
          id: "MzQ6OTk6OTk",
        },
        {
          id: "MzQ6MzI2OjEzNQ",
        },
        {
          id: "MzU6Njg6NTQz",
        },
        {
          id: "MzY6OTk6MTk1",
        },
        {
          id: "MzY6OTk6MTIz",
        },
        {
          id: "Mzc6Mjk1OjU1NQ",
        },
        {
          id: "Mzc6Mjk1OjQxMQ",
        },
        {
          id: "Mzc6Mjk1OjI0Mw",
        },
        {
          id: "Mzc6Mjk1OjE0Nw",
        },
        {
          id: "Mzg6OTk6Mzk5",
        },
        {
          id: "Mzk6Njg6OTk",
        },
        {
          id: "Mzk6Mjk1OjU5MQ",
        },
        {
          id: "NDA6OTk6NTMx",
        },
        {
          id: "NDA6OTk6MTM1",
        },
        {
          id: "NDA6MzI2OjI0Mw",
        },
        {
          id: "NDE6Njg6NTc5",
        },
        {
          id: "NDE6Njg6MzE1",
        },
        {
          id: "NDI6MzI2OjY2Mw",
        },
        {
          id: "NDI6MzI2OjExMQ",
        },
        {
          id: "NDM6Njg6MzYz",
        },
        {
          id: "NDM6Njg6MTEx",
        },
        {
          id: "NDQ6MzI2OjMyNw",
        },
      ],
    },
    {
      name: "Chapter 4",
      pages: [
        {
          id: "NDY6MzkwOjM2MQ",
        },
        {
          id: "NDc6MzcxOjY5OQ",
        },
        {
          id: "NDc6MzcxOjQ0Nw",
        },
        {
          id: "NDY6MzI2OjE0Nw",
        },
        {
          id: "NDc6Njg6NDgz",
        },
        {
          id: "NDc6Njg6Mjc5",
        },
        {
          id: "NDk6Njg6MjQz",
        },
        {
          id: "NDk6Njg6MTIz",
        },
        {
          id: "NTA6OTk6NDU5",
        },
        {
          id: "NTI6OTk6Mjkx",
        },
        {
          id: "NTM6Njg6MjQz",
        },
        {
          id: "NTQ6OTk6NTU1",
        },
        {
          id: "NTU6Njg6Mzc1",
        },
        {
          id: "NTU6Njg6MjU1",
        },
        {
          id: "NTU6Mzk1OjE1OQ",
        },
        {
          id: "NTY6MzI2OjYyNw",
        },
        {
          id: "NTY6MzI4OjEyMw",
        },
        {
          id: "NTc6Njg6MzE1",
        },
        {
          id: "NTc6Mjk1OjU5MQ",
        },
        {
          id: "NTg6OTk6NjUx",
        },
        {
          id: "NTk6Njg6NTMx",
        },
        {
          id: "NjA6OTk6Njk5",
        },
        {
          id: "NjE6Njg6MTcx",
        },
        {
          id: "NjE6Mjk1OjQ0Nw",
        },
      ],
    },
    {
      name: "Handouts",
      pages: [
        {
          id: "NDQ6MjY1OjM4Nw",
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
          id: "journal23",
        },
      ],
    },
    {
      name: "Back Matter",
      pages: [
        {
          id: "NjM6MTU2OjY1NA",
        },
        {
          id: "NjQ6OTk6Njk5",
        },
        {
          id: "NjU6Njg6NDQ3",
        },
        {
          id: "NjY6OTk6MTk1",
        },
        {
          id: "Njc6Njg6NTkx",
        },
        {
          id: "Njc6Mjk1OjU2Nw",
        },
        {
          id: "Njk6MTUzOjY1NA",
        },
        {
          id: "Njk6Mjk1OjU0Mw",
        },
        {
          id: "NzA6MzI2OjY5OQ",
        },
        {
          id: "NzA6MzI2OjU3OQ",
        },
        {
          id: "NzA6MzQ2OjE5NQ",
        },
        {
          id: "NzE6Njg6NTQz",
        },
        {
          id: "NzE6Njg6Mjkx",
        },
        {
          id: "NzE6Mjk1OjM4Nw",
        },
        {
          id: "NzE6Mjk1Ojk5",
        },
        {
          id: "NzI6OTk6MTIz",
        },
        {
          id: "NzI6MzI2OjY5OQ",
        },
        {
          id: "NzI6MzI2OjM1MQ",
        },
        {
          id: "NzM6Njg6NjUx",
        },
        {
          id: "NzM6Njg6NDM1",
        },
        {
          id: "NzM6Njg6MjQz",
        },
        {
          id: "NzU6MTUwOjY1NA",
        },
        {
          id: "Nzg6OTk6Njk5",
        },
        {
          id: "Nzk6Njg6Njk5",
        },
        {
          id: "ODA6MjUxOjY5OQ",
        },
        {
          id: "ODA6MjUxOjYyNw",
        },
        {
          id: "ODA6MjY1OjMwMw",
        },
        {
          id: "ODE6Njg6NTY3",
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
          id: "ODQ6MjUxOjM2Mw",
        },
        {
          id: "ODU6Njg6Njk5",
        },
        {
          id: "ODU6Njg6MzUx",
        },
        {
          id: "ODY6MjUxOjY5OQ",
        },
        {
          id: "ODc6Njg6Njk5",
        },
        {
          id: "ODg6MTY3OjY3Nw",
        },
        {
          id: "OTA6MTMxOjY1OA",
        },
        {
          id: "OTI6MjIzOjY1OA",
        },
        {
          id: "NjU6MzA0OjY4Nw",
        },
        {
          id: "NzE6MzA0OjY4Nw",
        },
        {
          id: "NzI6MTA4OjY4Nw",
        },
        {
          id: "ODA6MTQ1OjY2Mw",
        },
        {
          id: "ODE6MzcxOjY2Mw",
        },
        {
          id: "ODI6MTUxOjY2Mw",
        },
        {
          id: "ODM6MzcxOjY2Mw",
        },
        {
          id: "ODQ6MTQ3OjY2Mw",
        },
        {
          id: "ODU6MzcxOjY2Mw",
        },
        {
          id: "ODY6MTU3OjY2Mw",
        },
        {
          id: "ODc6MzcxOjY2Mw",
        },
      ],
    },
  ];
  combines = [
    {
      source: "OTM6Njg6Njk5",
      dest: "OTI6MjIzOjY1OA",
    },
    {
      source: "OTA6MzI2OjI3OQ",
      dest: "OTA6MTMxOjY1OA",
    },
    {
      source: "ODk6Njg6MTgz",
      dest: "ODg6MTY3OjY3Nw",
    },
  ];
  normalFontIds = this.normalFontIds.concat(["Beatty:10"]);
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "EXTINCTION CURSE: LEGACY OF THE LOST GOD" &&
        t.fontId === "Gin-Regular:12",
    );
  }
  preprocess(text) {
    for (let i = 0; i < text.length; i++) {
      text[i].page === 44 &&
        Math.abs(text[i].x - 99.75) < 0.25 &&
        (text[i].x += 9);
    }
  }
  extractDetails(text, moduleData, sectionKey) {
    this.changeTextFn(text, 51, 231.51600000000002, 291, (x) =>
      x.replace("LEVEL", "CREATURE"),
    );
    this.markIndented(text, 32, 326.25, 639);
    this.markIndented(text, 32, 326.25, 627);
    this.markIndented(text, 32, 326.25, 615);
    this.markIndented(text, 32, 326.25, 603);
    this.markIndented(text, 32, 326.25, 591);
    this.markIndented(text, 32, 326.25, 579);
    this.markIndented(text, 32, 326.25, 567);
    this.markIndented(text, 32, 326.25, 555);
    this.moveToBeginning(text, 44, 264.9567, 387);
    this.changeFontId(text, 44, 264.9567, 387, "GoodOT-Bold:12");
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
