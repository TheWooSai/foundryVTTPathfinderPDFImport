import { AbominationVaultsBase } from "./base.js";
import { CaptionImage } from "../../core/images.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class AbominationVaults2 extends AbominationVaultsBase {
  prefix = "abomination-vaults2";
  fullName = "Abomination Vaults - Hands of the Devil";
  pages = [
    this.ChapterHeadingPageLayout(6),
    this.RightSingleColumnWithSidebar(7),
    this.LeftTwoColumn(8),
    this.RightTwoColumn(9),
    this.LeftTwoColumnWithMap(10, 320),
    this.RightTwoColumn(11),
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
    this.LeftTwoColumn(22),
    this.RightTwoColumn(23),
    this.LeftTwoColumn(24),
    this.RightTwoColumn(25),
    this.ChapterHeadingPageLayout(26),
    this.RightSingleColumnWithSidebar(27),
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
    this.ChapterHeadingPageLayout(44),
    this.RightSingleColumnWithSidebar(45),
    this.LeftTwoColumn(46),
    this.RightTwoColumn(47),
    this.LeftTwoColumn(48),
    this.RightTwoColumn(49),
    this.LeftTwoColumn(50),
    this.RightTwoColumn(51),
    this.LeftTwoColumnWithLeftCutout(52, 250),
    this.RightTwoColumn(53),
    this.LeftTwoColumn(54),
    this.RightTwoColumn(55),
    this.LeftTwoColumn(56),
    this.RightTwoColumn(57),
    this.LeftTwoColumn(58),
    this.RightTwoColumn(59),
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
        name: "av2/map1",
        priority: 0,
      },
      nameInfo: {
        x: 400.56,
        y: 749.694,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 1261,
      height: 1637,
      imageLeft: 21,
      imageRight: 1157,
      imageCols: 42,
      imageTop: 166,
      imageBottom: 1491,
      imageRows: 49,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/av/maps/av2-map1.json",
      journals: [
        {
          x: 3350,
          y: 2650,
          id: "MTM6Njg6MTEx",
        },
        {
          x: 2150,
          y: 3150,
          id: "MTM6Mjk1OjM1MQ",
        },
        {
          x: 2050,
          y: 2250,
          id: "MTU6Njg6Njk5",
        },
        {
          x: 1800,
          y: 3800,
          id: "MTU6Njg6MzM5",
        },
        {
          x: 2850,
          y: 3850,
          id: "MTU6Mjk1OjU0Mw",
        },
        {
          x: 2450,
          y: 4950,
          id: "MTU6Mjk1OjMxNQ",
        },
        {
          x: 1650,
          y: 4650,
          id: "MTU6Mjk1OjE5NQ",
        },
        {
          x: 1550,
          y: 5550,
          id: "MTc6Njg6NjI3",
        },
        {
          x: 2450,
          y: 5450,
          id: "MTc6Njg6Mjkx",
        },
        {
          x: 3350,
          y: 5050,
          id: "MTg6OTk6MjE5",
        },
        {
          x: 3950,
          y: 3650,
          id: "MTk6Njg6Njk5",
        },
        {
          x: 4350,
          y: 2750,
          id: "MTk6Njg6Mzc1",
        },
        {
          x: 5150,
          y: 3150,
          id: "MTk6Mjk1OjM4Nw",
        },
        {
          x: 4650,
          y: 3750,
          id: "MjA6OTk6NTA3",
        },
        {
          x: 5350,
          y: 3650,
          id: "MjA6OTk6MzE1",
        },
        {
          x: 5450,
          y: 4250,
          id: "MjA6MzI2OjU5MQ",
        },
        {
          x: 5050,
          y: 3950,
          id: "MjA6MzI2OjM1MQ",
        },
        {
          x: 5050,
          y: 4250,
          id: "MjI6MzI2OjYyNw",
        },
        {
          x: 3750,
          y: 4550,
          id: "MjI6MzI2OjMxNQ",
        },
        {
          x: 3850,
          y: 4950,
          id: "MjI6MzI2OjExMQ",
        },
        {
          x: 3750,
          y: 5450,
          id: "MjM6Mjk1OjQ0Nw",
        },
        {
          x: 4250,
          y: 4550,
          id: "MjM6Mjk1OjE5NQ",
        },
        {
          x: 4550,
          y: 4450,
          id: "MjQ6OTk6NTQz",
        },
        {
          x: 4150,
          y: 4750,
          id: "MjQ6OTk6NTQz",
        },
        {
          x: 4050,
          y: 5150,
          id: "MjQ6OTk6NTQz",
        },
        {
          x: 4350,
          y: 5350,
          id: "MjQ6OTk6NTQz",
        },
        {
          x: 4550,
          y: 5450,
          id: "MjQ6OTk6NTQz",
        },
        {
          x: 4750,
          y: 4950,
          id: "MjQ6MzI2OjYxNQ",
        },
        {
          x: 5150,
          y: 5050,
          id: "MjQ6MzI2OjMyNw",
        },
        {
          x: 3350,
          y: 6050,
          id: "MjU6Njg6MzUx",
        },
      ],
      tokens: [
        {
          id: "npc4",
          x: 1700,
          y: 3e3,
        },
        {
          id: "npc30",
          x: 1600,
          y: 2400,
        },
        {
          id: "npc30",
          x: 1900,
          y: 2400,
        },
        {
          id: "npc30",
          x: 2200,
          y: 2400,
        },
        {
          id: "hazard3",
          x: 2400,
          y: 3100,
        },
        {
          id: "npc8",
          x: 4100,
          y: 4400,
        },
        {
          id: "npc48",
          x: 3100,
          y: 2700,
        },
        {
          id: "npc48",
          x: 3500,
          y: 2700,
        },
        {
          id: "npc46",
          x: 3600,
          y: 3100,
        },
        {
          id: "npc27",
          x: 4100,
          y: 2400,
        },
        {
          id: "npc27",
          x: 4600,
          y: 2400,
        },
        {
          id: "npc53",
          x: 5200,
          y: 2900,
        },
        {
          id: "npc53",
          x: 5200,
          y: 3300,
        },
        {
          id: "npc7",
          x: 5100,
          y: 3900,
        },
        {
          id: "npc9",
          x: 5e3,
          y: 4500,
        },
        {
          id: "hazard4",
          x: 3800,
          y: 4800,
        },
        {
          id: "npc63",
          x: 1700,
          y: 3700,
        },
        {
          id: "npc5",
          x: 1600,
          y: 4700,
        },
        {
          id: "npc6",
          x: 2100,
          y: 5300,
        },
        {
          id: "npc6",
          x: 2800,
          y: 5300,
        },
        {
          id: "npc40",
          x: 3200,
          y: 5500,
        },
        {
          id: "npc40",
          x: 3400,
          y: 5600,
        },
        {
          id: "npc26",
          x: 3200,
          y: 5700,
        },
        {
          id: "npc68",
          x: 3400,
          y: 5700,
        },
      ],
    }),
    new ModuleScene({
      name: "map2",
      canonical: {
        name: "av2/map2",
        priority: 0,
      },
      nameInfo: {
        x: 73.5,
        y: 366.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 10,
      width: 1148,
      height: 900,
      imageLeft: 23,
      imageRight: 1130,
      imageCols: 22,
      imageTop: 28,
      imageBottom: 846,
      imageRows: 16,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/av/maps/av2-map2.json",
      journals: [
        {
          x: 750,
          y: 1150,
          id: "ODozMjY6OTk",
        },
        {
          x: 1550,
          y: 1750,
          id: "OTo2ODo2MDM",
        },
        {
          x: 2350,
          y: 1550,
          id: "OTo2ODoyNDM",
        },
      ],
      tokens: [
        {
          id: "npc61",
          x: 1400,
          y: 1300,
        },
        {
          id: "npc61",
          x: 1400,
          y: 2e3,
        },
        {
          id: "npc32",
          x: 2500,
          y: 1500,
        },
      ],
    }),
    new ModuleScene({
      name: "map3",
      canonical: {
        name: "av2/map3",
        priority: 0,
      },
      nameInfo: {
        x: 148,
        y: 754.3319,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 28,
      width: 1261,
      height: 1637,
      imageLeft: 83,
      imageRight: 1142,
      imageCols: 40,
      imageTop: 147,
      imageBottom: 1524,
      imageRows: 52,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/av/maps/av2-map3.json",
      journals: [
        {
          x: 3350,
          y: 3150,
          id: "Mjc6Njg6NjM5",
        },
        {
          x: 2450,
          y: 3150,
          id: "Mjc6Njg6MTQ3",
        },
        {
          x: 2650,
          y: 2450,
          id: "Mjk6Njg6Njk5",
        },
        {
          x: 4650,
          y: 2350,
          id: "Mjk6Mjk1OjY5OQ",
        },
        {
          x: 5250,
          y: 3950,
          id: "Mjk6Mjk1OjI1NQ",
        },
        {
          x: 1750,
          y: 3650,
          id: "MzA6OTk6Mzg3",
        },
        {
          x: 4150,
          y: 3550,
          id: "MzA6MzI2OjY5OQ",
        },
        {
          x: 4550,
          y: 3850,
          id: "MzA6MzI2OjI3OQ",
        },
        {
          x: 4650,
          y: 4950,
          id: "MzE6Njg6MjU1",
        },
        {
          x: 1850,
          y: 4750,
          id: "MzI6OTk6NDIz",
        },
        {
          x: 3350,
          y: 4750,
          id: "MzI6MzI2OjU5MQ",
        },
        {
          x: 3050,
          y: 3950,
          id: "MzQ6Mzk1OjY5OQ",
        },
        {
          x: 2950,
          y: 3450,
          id: "MzU6Njg6NDU5",
        },
        {
          x: 3450,
          y: 4050,
          id: "MzU6Njg6MzAz",
        },
        {
          x: 3550,
          y: 3750,
          id: "MzU6Njg6MjU1",
        },
        {
          x: 3850,
          y: 3950,
          id: "MzU6Mjk1OjY5OQ",
        },
        {
          x: 3850,
          y: 4550,
          id: "MzY6MzI2OjM1MQ",
        },
        {
          x: 3950,
          y: 4850,
          id: "MzY6MzI2OjE5NQ",
        },
        {
          x: 4050,
          y: 5150,
          id: "Mzk6Njg6Njk5",
        },
        {
          x: 3350,
          y: 5850,
          id: "Mzk6Njg6NTQz",
        },
        {
          x: 2750,
          y: 5550,
          id: "Mzk6Mjk1OjY5OQ",
        },
        {
          x: 2050,
          y: 5450,
          id: "NDA6MzI2OjQyMw",
        },
        {
          x: 4950,
          y: 5750,
          id: "NDE6Mjk1OjM2Mw",
        },
        {
          x: 1750,
          y: 7150,
          id: "NDE6Mjk1OjE0Nw",
        },
        {
          x: 5150,
          y: 6950,
          id: "NDI6MzI2OjY1MQ",
        },
        {
          x: 3350,
          y: 6450,
          id: "NDM6Mjk1OjYxNQ",
        },
      ],
      tokens: [
        {
          id: "npc52",
          x: 2700,
          y: 2100,
        },
        {
          id: "npc62",
          x: 2700,
          y: 2500,
        },
        {
          id: "npc62",
          x: 2900,
          y: 2400,
        },
        {
          id: "npc62",
          x: 2400,
          y: 2200,
        },
        {
          id: "npc50",
          x: 4400,
          y: 2300,
        },
        {
          id: "npc50",
          x: 4e3,
          y: 2300,
        },
        {
          id: "npc57",
          x: 5e3,
          y: 4200,
        },
        {
          id: "npc10",
          x: 4400,
          y: 3800,
        },
        {
          id: "npc13",
          x: 3900,
          y: 3800,
        },
        {
          id: "npc49",
          x: 4100,
          y: 4700,
        },
        {
          id: "npc14",
          x: 4e3,
          y: 4700,
        },
        {
          id: "npc15",
          x: 4100,
          y: 4800,
        },
        {
          id: "npc56",
          x: 4100,
          y: 4900,
        },
        {
          id: "npc11",
          x: 3e3,
          y: 4900,
        },
        {
          id: "npc54",
          x: 3200,
          y: 4400,
        },
        {
          id: "npc54",
          x: 3400,
          y: 4400,
        },
        {
          id: "npc54",
          x: 3300,
          y: 4200,
        },
        {
          id: "npc54",
          x: 3500,
          y: 4100,
        },
        {
          id: "hazard5",
          x: 3600,
          y: 3700,
        },
        {
          id: "npc12",
          x: 3e3,
          y: 3700,
        },
        {
          id: "npc48",
          x: 3300,
          y: 2700,
        },
        {
          id: "npc58",
          x: 3400,
          y: 2700,
        },
        {
          id: "npc55",
          x: 1500,
          y: 3500,
        },
        {
          id: "npc55",
          x: 1500,
          y: 3800,
        },
        {
          id: "npc35",
          x: 1700,
          y: 4500,
        },
        {
          id: "npc16",
          x: 2e3,
          y: 5500,
        },
        {
          id: "npc43",
          x: 2500,
          y: 5400,
        },
        {
          id: "npc43",
          x: 2500,
          y: 5600,
        },
        {
          id: "npc43",
          x: 2800,
          y: 5400,
        },
        {
          id: "npc43",
          x: 2800,
          y: 5600,
        },
        {
          id: "npc60",
          x: 3300,
          y: 5900,
        },
        {
          id: "npc25",
          x: 3400,
          y: 5800,
        },
        {
          id: "npc25",
          x: 3200,
          y: 5800,
        },
        {
          id: "npc31",
          x: 2900,
          y: 6300,
        },
        {
          id: "npc37",
          x: 1800,
          y: 7100,
        },
        {
          id: "npc65",
          x: 1900,
          y: 7e3,
        },
        {
          id: "npc65",
          x: 1900,
          y: 7200,
        },
        {
          id: "npc33",
          x: 5100,
          y: 7100,
        },
        {
          id: "npc42",
          x: 5200,
          y: 6800,
        },
        {
          id: "npc41",
          x: 4600,
          y: 5400,
        },
        {
          id: "npc66",
          x: 3100,
          y: 3700,
        },
        {
          id: "npc67",
          x: 2900,
          y: 3700,
        },
      ],
    }),
    new ModuleScene({
      name: "map4",
      canonical: {
        name: "av2/map4",
        priority: 0,
      },
      nameInfo: {
        x: 666,
        y: 749.694,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 1262,
      height: 1637,
      imageLeft: 120,
      imageRight: 1127,
      imageCols: 30,
      imageTop: 204,
      imageBottom: 1512,
      imageRows: 39,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/av/maps/av2-map4.json",
      journals: [
        {
          x: 2850,
          y: 3650,
          id: "NDU6Njg6MjQz",
        },
        {
          x: 2600,
          y: 3100,
          id: "NDY6MzI2OjY5OQ",
        },
        {
          x: 2850,
          y: 2650,
          id: "NDY6MzMwOjI1NQ",
        },
        {
          x: 2e3,
          y: 2850,
          id: "NDc6Njg6MzAz",
        },
        {
          x: 2e3,
          y: 2050,
          id: "NDc6Mjk1OjE3MQ",
        },
        {
          x: 3800,
          y: 3350,
          id: "NDk6Njg6NjI3",
        },
        {
          x: 3800,
          y: 2700,
          id: "NDk6Njg6MjMx",
        },
        {
          x: 4150,
          y: 3650,
          id: "NDk6Mjk1OjEyMw",
        },
        {
          x: 3750,
          y: 3950,
          id: "NTA6MzI2OjQ1OQ",
        },
        {
          x: 1450,
          y: 3650,
          id: "NTE6Njg6MTIz",
        },
        {
          x: 2e3,
          y: 4600,
          id: "NTQ6OTk6NTQz",
        },
        {
          x: 1350,
          y: 4950,
          id: "NTQ6MzI2OjYxNQ",
        },
        {
          x: 1350,
          y: 4350,
          id: "NTQ6MzI2OjIxOQ",
        },
        {
          x: 1650,
          y: 4850,
          id: "NTQ6MzI2OjE1OQ",
        },
        {
          x: 2050,
          y: 5150,
          id: "NTU6Mjk1OjY5OQ",
        },
        {
          x: 2050,
          y: 5450,
          id: "NTU6Mjk1OjM3NQ",
        },
        {
          x: 3800,
          y: 5e3,
          id: "NTY6MzI2OjU2Nw",
        },
        {
          x: 2850,
          y: 4950,
          id: "NTc6Njg6MjA3",
        },
        {
          x: 2950,
          y: 5250,
          id: "NTg6MzI2OjU5MQ",
        },
        {
          x: 3150,
          y: 5050,
          id: "NTg6MzI2OjM5OQ",
        },
        {
          x: 2850,
          y: 5650,
          id: "NTg6MzI2OjIxOQ",
        },
        {
          x: 2650,
          y: 5650,
          id: "NTk6MzcxOjQ3MQ",
        },
      ],
      tokens: [
        {
          id: "npc24",
          x: 2900,
          y: 5700,
        },
        {
          id: "npc23",
          x: 2800,
          y: 5e3,
        },
        {
          id: "npc45",
          x: 2900,
          y: 5e3,
        },
        {
          id: "npc26",
          x: 2300,
          y: 4900,
        },
        {
          id: "npc26",
          x: 2300,
          y: 5100,
        },
        {
          id: "npc25",
          x: 2200,
          y: 5e3,
        },
        {
          id: "npc25",
          x: 2100,
          y: 5100,
        },
        {
          id: "hazard1",
          x: 2100,
          y: 5400,
        },
        {
          id: "npc64",
          x: 1300,
          y: 4700,
        },
        {
          id: "npc64",
          x: 1300,
          y: 5200,
        },
        {
          id: "npc21",
          x: 1600,
          y: 4700,
        },
        {
          id: "hazard2",
          x: 1900,
          y: 4600,
        },
        {
          id: "npc34",
          x: 1300,
          y: 2800,
        },
        {
          id: "npc39",
          x: 1400,
          y: 3200,
        },
        {
          id: "npc39",
          x: 1300,
          y: 3200,
        },
        {
          id: "npc18",
          x: 2e3,
          y: 2600,
        },
        {
          id: "npc25",
          x: 1900,
          y: 2400,
        },
        {
          id: "npc25",
          x: 1900,
          y: 2600,
        },
        {
          id: "npc25",
          x: 1900,
          y: 2900,
        },
        {
          id: "npc25",
          x: 2e3,
          y: 2900,
        },
        {
          id: "npc38",
          x: 2e3,
          y: 2e3,
        },
        {
          id: "npc19",
          x: 1900,
          y: 2e3,
        },
        {
          id: "npc17",
          x: 2800,
          y: 2300,
        },
        {
          id: "npc48",
          x: 2600,
          y: 2500,
        },
        {
          id: "npc48",
          x: 2800,
          y: 2500,
        },
        {
          id: "npc48",
          x: 3e3,
          y: 2500,
        },
        {
          id: "npc48",
          x: 2600,
          y: 2700,
        },
        {
          id: "npc48",
          x: 2800,
          y: 2700,
        },
        {
          id: "npc48",
          x: 3e3,
          y: 2700,
        },
        {
          id: "npc44",
          x: 3800,
          y: 2600,
        },
        {
          id: "npc44",
          x: 3700,
          y: 2600,
        },
        {
          id: "npc51",
          x: 3700,
          y: 3200,
        },
        {
          id: "npc36",
          x: 4200,
          y: 3600,
        },
        {
          id: "npc20",
          x: 3800,
          y: 3900,
        },
        {
          id: "npc22",
          x: 3600,
          y: 4800,
        },
      ],
    }),
  ];
  journals = [
    new CaptionImage({
      name: "journal1",
      page: 1,
      width: 1258,
      height: 714,
    }),
    new CaptionImage({
      name: "journal2",
      page: 1,
      width: 1258,
      height: 697,
    }),
    new CaptionImage({
      name: "journal3",
      page: 3,
      width: 815,
      height: 397,
    }),
    new CaptionImage({
      name: "journal4",
      page: 4,
      width: 1261,
      height: 1636,
    }),
    new CaptionImage({
      name: "journal5",
      page: 6,
      width: 1198,
      height: 799,
    }),
    new CaptionImage({
      name: "journal6",
      page: 26,
      width: 1161,
      height: 834,
    }),
    new CaptionImage({
      name: "journal7",
      page: 44,
      width: 1157,
      height: 771,
    }),
    new CaptionImage({
      name: "journal8",
      page: 60,
      width: 1261,
      height: 1636,
    }),
    new CaptionImage({
      name: "journal9",
      page: 66,
      width: 1261,
      height: 1637,
    }),
    new CaptionImage({
      name: "journal10",
      page: 72,
      width: 1262,
      height: 1636,
    }),
    new CaptionImage({
      name: "journal11",
      page: 74,
      width: 438,
      height: 438,
    }),
    new CaptionImage({
      name: "journal12",
      page: 74,
      width: 394,
      height: 394,
    }),
    new CaptionImage({
      name: "journal13",
      page: 75,
      width: 471,
      height: 471,
    }),
    new CaptionImage({
      name: "journal14",
      page: 75,
      width: 401,
      height: 387,
    }),
    new CaptionImage({
      name: "journal15",
      page: 95,
      width: 1294,
      height: 1669,
    }),
    new CaptionImage({
      name: "journal16",
      page: 73,
      width: 373,
      height: 374,
    }),
    new CaptionImage({
      name: "journal17",
      page: 73,
      width: 311,
      height: 484,
    }),
    new CaptionImage({
      name: "npc1",
      page: 3,
      width: 426,
      height: 902,
    }),
    new CaptionImage({
      name: "npc2",
      page: 8,
      width: 565,
      height: 565,
    }),
    new CaptionImage({
      name: "npc3",
      page: 11,
      width: 578,
      height: 578,
    }),
    new CaptionImage({
      name: "npc4",
      page: 12,
      width: 500,
      height: 499,
    }),
    new CaptionImage({
      name: "npc5",
      page: 14,
      width: 767,
      height: 1112,
    }),
    new CaptionImage({
      name: "npc6",
      page: 16,
      width: 938,
      height: 1298,
    }),
    new CaptionImage({
      name: "npc7",
      page: 17,
      width: 815,
      height: 1286,
    }),
    new CaptionImage({
      name: "npc8",
      page: 21,
      width: 722,
      height: 1072,
    }),
    new CaptionImage({
      name: "npc9",
      page: 24,
      width: 840,
      height: 1061,
    }),
    new CaptionImage({
      name: "npc10",
      page: 25,
      width: 749,
      height: 1284,
    }),
    new CaptionImage({
      name: "npc11",
      page: 31,
      width: 928,
      height: 1173,
    }),
    new CaptionImage({
      name: "npc12",
      page: 33,
      width: 1030,
      height: 1117,
    }),
    new CaptionImage({
      name: "npc13",
      page: 34,
      width: 530,
      height: 530,
    }),
    new CaptionImage({
      name: "npc14",
      page: 35,
      width: 613,
      height: 1162,
    }),
    new CaptionImage({
      name: "npc15",
      page: 37,
      width: 542,
      height: 1029,
    }),
    new CaptionImage({
      name: "npc16",
      page: 38,
      width: 859,
      height: 1101,
    }),
    new CaptionImage({
      name: "npc17",
      page: 39,
      width: 647,
      height: 1187,
    }),
    new CaptionImage({
      name: "npc18",
      page: 40,
      width: 642,
      height: 1153,
    }),
    new CaptionImage({
      name: "npc19",
      page: 46,
      width: 1055,
      height: 1289,
    }),
    new CaptionImage({
      name: "npc20",
      page: 47,
      width: 664,
      height: 909,
    }),
    new CaptionImage({
      name: "npc21",
      page: 48,
      width: 865,
      height: 1162,
    }),
    new CaptionImage({
      name: "npc22",
      page: 50,
      width: 795,
      height: 1229,
    }),
    new CaptionImage({
      name: "npc23",
      page: 55,
      width: 480,
      height: 618,
    }),
    new CaptionImage({
      name: "npc24",
      page: 56,
      width: 838,
      height: 1078,
    }),
    new CaptionImage({
      name: "npc25",
      page: 57,
      width: 890,
      height: 1286,
    }),
    new CaptionImage({
      name: "npc26",
      page: 59,
      width: 531,
      height: 745,
    }),
    new CaptionImage({
      name: "npc27",
      page: 62,
      width: 832,
      height: 748,
    }),
    new CaptionImage({
      name: "npc28",
      page: 63,
      width: 815,
      height: 543,
    }),
    new CaptionImage({
      name: "npc29",
      page: 65,
      width: 972,
      height: 1178,
    }),
    new CaptionImage({
      name: "npc30",
      page: 69,
      width: 628,
      height: 711,
    }),
    new CaptionImage({
      name: "npc31",
      page: 71,
      width: 667,
      height: 1327,
    }),
    new CaptionImage({
      name: "npc32",
      page: 77,
      width: 430,
      height: 961,
    }),
    new CaptionImage({
      name: "npc33",
      page: 79,
      width: 803,
      height: 1198,
    }),
    new CaptionImage({
      name: "npc34",
      page: 80,
      width: 840,
      height: 950,
    }),
    new CaptionImage({
      name: "npc35",
      page: 81,
      width: 928,
      height: 986,
    }),
    new CaptionImage({
      name: "npc36",
      page: 82,
      width: 586,
      height: 597,
    }),
    new CaptionImage({
      name: "npc37",
      page: 83,
      width: 851,
      height: 905,
    }),
    new CaptionImage({
      name: "npc38",
      page: 84,
      width: 887,
      height: 836,
    }),
    new CaptionImage({
      name: "npc39",
      page: 86,
      width: 984,
      height: 1046,
    }),
    new CaptionImage({
      name: "npc40",
      page: 87,
      width: 935,
      height: 1161,
    }),
    new CaptionImage({
      name: "npc41",
      page: 89,
      width: 751,
      height: 1246,
    }),
    new CaptionImage({
      name: "npc42",
      page: 91,
      width: 839,
      height: 1155,
    }),
    new CaptionImage({
      name: "npc43",
      page: 93,
      width: 838,
      height: 1267,
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 8,
        x: 272.1904,
        y: 450.6736,
      },
      page: 8,
      width: 565,
      height: 565,
      tokenX: -43,
      tokenY: 57,
      tokenSize: 536,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 11,
        x: 246.3478,
        y: 423.3184,
      },
      page: 11,
      width: 578,
      height: 578,
      tokenX: -12,
      tokenY: 81,
      tokenSize: 578,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 12,
        x: 273.7252,
        y: 446.8184,
      },
      page: 12,
      width: 500,
      height: 499,
      tokenX: 5,
      tokenY: 63,
      tokenSize: 500,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc4",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.66MUUmu8950MEXFf",
      name: {
        page: 14,
        x: 209.7421,
        y: 158.9534,
      },
      page: 14,
      width: 767,
      height: 1112,
      tokenX: -179,
      tokenY: 74,
      tokenSize: 626,
      forIds: ["MTQ6MzI2OjM1MQ"],
    }),
    new ModuleNpc({
      id: "npc5",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.OErk9kO3PhYwMXoJ",
      name: {
        page: 16,
        x: 216.2307,
        y: 170.9534,
      },
      page: 16,
      width: 938,
      height: 1298,
      tokenX: -217,
      tokenY: 54,
      tokenSize: 641,
      forIds: ["MTY6Mzc3OjIxOQ"],
    }),
    new ModuleNpc({
      id: "npc6",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.zpd6b6UPP72ZELCj",
      page: 17,
      width: 815,
      height: 1286,
      tokenX: -109,
      tokenY: -156,
      tokenSize: 458,
      forIds: ["MTg6OTk6NTA3"],
    }),
    new ModuleNpc({
      id: "npc7",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.x0NDgH3EMLTLh02r",
      name: {
        page: 21,
        x: 67.5,
        y: 459,
      },
      page: 21,
      width: 722,
      height: 1072,
      tokenX: 44,
      tokenY: 55,
      tokenSize: 586,
      forIds: ["MjE6Njg6NDU5"],
    }),
    new ModuleNpc({
      id: "npc8",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.5iuvJLceeLJPlR8O",
      page: 24,
      width: 840,
      height: 1061,
      tokenX: 127,
      tokenY: 77,
      tokenSize: 1061,
      forIds: ["MjQ6OTk6Njk5"],
    }),
    new ModuleNpc({
      id: "npc9",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.V4rVnbjJbcOIdC4Z",
      page: 25,
      width: 749,
      height: 1284,
      tokenX: -75,
      tokenY: 39,
      tokenSize: 427,
      forIds: ["MjU6Njg6Mzk5"],
    }),
    new ModuleNpc({
      id: "npc10",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.cMpgGvq1fGxh8wI0",
      page: 31,
      width: 928,
      height: 1173,
      tokenX: 39,
      tokenY: 57,
      tokenSize: 745,
      forIds: ["MzE6Njg6MzI3"],
    }),
    new ModuleNpc({
      id: "npc11",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.B7eLG2k7qUo8HU6O",
      name: {
        page: 33,
        x: 400.2312,
        y: 116.6736,
      },
      page: 33,
      width: 1030,
      height: 1117,
      tokenX: -148,
      tokenY: -9,
      tokenSize: 432,
      forIds: ["MzM6Njg6NDcx"],
    }),
    new ModuleNpc({
      id: "npc12",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 34,
        x: 279.1927,
        y: 482.9534,
      },
      page: 34,
      width: 530,
      height: 530,
      tokenX: -57,
      tokenY: 70,
      tokenSize: 530,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc13",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.qoyopMMlRdgPAbXZ",
      page: 35,
      width: 613,
      height: 1162,
      tokenX: -131,
      tokenY: 47,
      tokenSize: 448,
      forIds: ["MzY6OTk6NDU5"],
    }),
    new ModuleNpc({
      id: "npc14",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.VeyuTE1GUJ71oMMn",
      name: {
        page: 37,
        x: 243.584,
        y: 158.9534,
      },
      page: 37,
      width: 542,
      height: 1029,
      tokenX: -34,
      tokenY: -60,
      tokenSize: 515,
      forIds: ["Mzc6Mjk1OjYyNw"],
    }),
    new ModuleNpc({
      id: "npc15",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.HnIyJuqKNOvK7eOJ",
      name: {
        page: 38,
        x: 248.6558,
        y: 143.8135,
      },
      page: 38,
      width: 859,
      height: 1101,
      tokenX: -267,
      tokenY: -121,
      tokenSize: 444,
      forIds: ["Mzg6OTk6Njk5"],
    }),
    new ModuleNpc({
      id: "npc16",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.2K0oJcLauMwyRNZQ",
      name: {
        page: 40,
        x: 208.257,
        y: 146.9534,
      },
      page: 40,
      width: 642,
      height: 1153,
      tokenX: -132,
      tokenY: 50,
      tokenSize: 382,
      forIds: ["NDE6Njg6NTY3"],
    }),
    new ModuleNpc({
      id: "npc17",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.A4MusxxoLxwMVZua",
      name: {
        page: 46,
        x: 81.0401,
        y: 167.8135,
      },
      page: 46,
      width: 1055,
      height: 1289,
      tokenX: -200,
      tokenY: -94,
      tokenSize: 546,
      forIds: ["NDc6Njg6NDEx"],
    }),
    new ModuleNpc({
      id: "npc18",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.uyGxJOnJ1gYwOpy5",
      name: {
        page: 47,
        x: 403.4504,
        y: 416.6736,
      },
      page: 47,
      width: 664,
      height: 909,
      tokenX: -60,
      tokenY: -277,
      tokenSize: 423,
      forIds: ["NDc6Mjk1OjM1MQ"],
    }),
    new ModuleNpc({
      id: "npc19",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.8Iozx4jbIGHxK4yf",
      name: {
        page: 48,
        x: 218.3172,
        y: 140.6736,
      },
      page: 48,
      width: 865,
      height: 1162,
      tokenX: -309,
      tokenY: -34,
      tokenSize: 391,
      forIds: ["NDg6MzI2OjQ5NQ"],
    }),
    new ModuleNpc({
      id: "npc20",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.yPYQC2bfOYmqcfIB",
      name: {
        page: 50,
        x: 140.255,
        y: 200.6736,
      },
      page: 50,
      width: 795,
      height: 1229,
      tokenX: -104,
      tokenY: -205,
      tokenSize: 458,
      forIds: ["NTE6Njg6MTcx"],
    }),
    new ModuleNpc({
      id: "npc21",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.dNATu2RQLFYY3hYn",
      name: {
        page: 55,
        x: 278.1871,
        y: 440.6736,
      },
      page: 55,
      width: 480,
      height: 618,
      tokenX: 59,
      tokenY: 16,
      tokenSize: 475,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc22",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.aIDLQY5mBPyxTjZ2",
      page: 56,
      width: 838,
      height: 1078,
      tokenX: -249,
      tokenY: 68,
      tokenSize: 678,
      forIds: ["NTc6Njg6Mzc1"],
    }),
    new ModuleNpc({
      id: "npc23",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.8AVy2qIK6vh13sSj",
      name: {
        page: 57,
        x: 340.1412,
        y: 128.6736,
      },
      page: 57,
      width: 890,
      height: 1286,
      tokenX: -244,
      tokenY: 17,
      tokenSize: 458,
      forIds: ["NTg6OTk6MTIz"],
    }),
    new ModuleNpc({
      id: "npc24",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.3vn9W5SThovdsEnY",
      name: {
        page: 59,
        x: 262.1132,
        y: 383.8135,
      },
      page: 59,
      width: 531,
      height: 745,
      tokenX: -64,
      tokenY: -117,
      tokenSize: 431,
      forIds: ["NTk6Njg6MjU1"],
    }),
    new ModuleNpc({
      id: "npc25",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.DnAeqlJRZc5N7hve",
      page: 80,
      width: 840,
      height: 950,
      tokenX: -267,
      tokenY: -240,
      tokenSize: 464,
      forIds: [
        "ODA6MjUxOjQ0Nw",
        "Mzk6Njg6MjA3",
        "NTU6Mzg3OjQ5NQ",
        "NDc6Mjk1OjI3OQ",
      ],
    }),
    new ModuleNpc({
      id: "npc26",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.zsgW8hHm3JfZUgwF",
      page: 81,
      width: 928,
      height: 986,
      tokenX: 36,
      tokenY: -80,
      tokenSize: 529,
      forIds: ["ODE6Njg6NTc5", "NTU6MzYxOjU0Mw"],
    }),
    new ModuleNpc({
      id: "npc27",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.BJYrYqkV7PkXgSfk",
      page: 82,
      width: 586,
      height: 597,
      tokenX: -14,
      tokenY: 37,
      tokenSize: 397,
      forIds: ["ODI6MjUxOjU1NQ", "MTk6Mjk1OjYxNQ"],
    }),
    new ModuleNpc({
      id: "npc28",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.T6vOuhM1KV5Fr75F",
      page: 83,
      width: 851,
      height: 905,
      tokenX: -75,
      tokenY: -68,
      tokenSize: 705,
      forIds: ["ODM6Njg6NTE5"],
    }),
    new ModuleNpc({
      id: "npc29",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.v9B0hB5sm4YZxebY",
      page: 84,
      width: 887,
      height: 836,
      tokenX: -56,
      tokenY: 131,
      tokenSize: 687,
      forIds: ["ODQ6MjUxOjUzMQ"],
    }),
    new ModuleNpc({
      id: "npc30",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.qXT1SQDtGqMkVl7Q",
      page: 86,
      width: 984,
      height: 1046,
      tokenX: -142,
      tokenY: -70,
      tokenSize: 703,
      forIds: ["ODY6MjUxOjQ5NQ", "MTU6Njg6Mzg3"],
    }),
    new ModuleNpc({
      id: "npc31",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.mrxDc0fj5t5CvjJQ",
      page: 87,
      width: 935,
      height: 1161,
      tokenX: -102,
      tokenY: 35,
      tokenSize: 847,
      forIds: ["ODc6Njg6NTQz", "NDM6Mjk1OjE1OQ"],
    }),
    new ModuleNpc({
      id: "npc32",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.tYzzLLUv9WBhHhQY",
      page: 89,
      width: 751,
      height: 1246,
      tokenX: -32,
      tokenY: 28,
      tokenSize: 389,
      forIds: ["ODk6Njg6Mzc1", "OToyOTU6NDEx"],
    }),
    new ModuleNpc({
      id: "npc33",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.jE8BEe6pcnGraw2p",
      name: {
        page: 90,
        x: 326.25,
        y: 135,
      },
      page: 91,
      width: 839,
      height: 1155,
      tokenX: -75,
      tokenY: 96,
      tokenSize: 641,
      forIds: ["OTA6MzI2OjEzNQ", "NDI6MzI2OjE4Mw"],
    }),
    new ModuleNpc({
      id: "npc34",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.Mk6Uo4Vt1HkG9EvL",
      name: {
        page: 92,
        x: 326.25,
        y: 231,
      },
      page: 93,
      width: 838,
      height: 1267,
      tokenX: -137,
      tokenY: -123,
      tokenSize: 439,
      forIds: ["OTI6MzI2OjIzMQ", "NTM6Mjk1OjU0Mw"],
    }),
    new ModuleNpc({
      id: "npc35",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.3d3NAcPfvn07mcGN",
      label: "AI",
      forIds: ["MzI6MzI2OjY2Mw"],
    }),
    new ModuleNpc({
      id: "npc36",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.QLyDRZPvMsYGZEeN",
      name: {
        page: 50,
        x: 370.25,
        y: 507,
      },
      label: "G",
      forIds: ["NTA6MzcwOjUwNw"],
    }),
    new ModuleNpc({
      id: "npc37",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.4bznEiwsJvInwZwA",
      label: "B",
      forIds: ["NDI6OTk6MTk1"],
      uniqueKey: "Compendium.pf2e.pathfinder-bestiary.Actor.FIoRPHaHdYUPVKdT",
    }),
    new ModuleNpc({
      id: "npc38",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.vX4SBXIICKfrM4pF",
      label: "B",
      forIds: ["NDg6MzQ2OjMzOQ"],
      uniqueKey: "Compendium.pf2e.pathfinder-bestiary.Actor.FIoRPHaHdYUPVKdT",
    }),
    new ModuleNpc({
      id: "npc39",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.4bznEiwsJvInwZwA",
      label: "B",
      forIds: ["NTM6Mjk1OjQ5NQ"],
      uniqueKey: "Compendium.pf2e.pathfinder-bestiary.Actor.FIoRPHaHdYUPVKdT",
    }),
    new ModuleNpc({
      id: "npc40",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.mX47c0W9rizbmMBM",
      label: "B",
      forIds: ["MTg6MzI2OjMzOQ"],
    }),
    new ModuleNpc({
      id: "npc41",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.xUtl7Nkb6iJpPUMK",
      label: "D",
      forIds: ["MzI6OTk6NDcx"],
    }),
    new ModuleNpc({
      id: "npc42",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.B7eLG2k7qUo8HU6O",
      label: "D",
      forIds: ["NDI6MzI2OjEzNQ"],
    }),
    new ModuleNpc({
      id: "npc43",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.VC7rtYR4hLxwg7WZ",
      label: "G",
      forIds: ["NDA6MzI2OjQ3MQ"],
      elite: true,
    }),
    new ModuleNpc({
      id: "npc44",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.njfwxMPXTPA5AegD",
      label: "E",
      forIds: ["NDk6Mjk1OjE5NQ"],
    }),
    new ModuleNpc({
      id: "npc45",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.TlDmc2ZKeIAJuD5v",
      label: "GCH",
      forIds: ["NTg6MzI2OjY5OQ"],
    }),
    new ModuleNpc({
      id: "npc46",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.dEAneTvoPuQXZoLR",
      label: "GM",
      forIds: ["MTM6Mjk1OjQ0Nw"],
    }),
    new ModuleNpc({
      id: "npc47",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.3F3fPq5hFbej40T2",
      label: "GSS",
      forIds: ["ODI6MjUxOjE4Mw"],
    }),
    new ModuleNpc({
      id: "npc48",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.VCYF0NAfPKwTHkK1",
      label: "G",
      forIds: ["Mjc6Njg6MjQz", "MTM6Mjk1OjM5OQ", "NDc6Njg6MzUx"],
    }),
    new ModuleNpc({
      id: "npc49",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.uWn6DCzthgUt97d7",
      name: {
        page: 37,
        x: 67.5,
        y: 531,
      },
      label: "G",
      forIds: ["Mzc6Njg6NTMx"],
    }),
    new ModuleNpc({
      id: "npc50",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.Bkr0soTDhQq1qjWx",
      label: "H",
      forIds: ["Mjk6Mjk1OjMwMw"],
    }),
    new ModuleNpc({
      id: "npc51",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.xjV0TmPNfKR7UcKu",
      name: {
        page: 49,
        x: 67.5,
        y: 279,
      },
      label: "O",
      forIds: ["NDk6Njg6Mjc5"],
    }),
    new ModuleNpc({
      id: "npc52",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.4Ejgj6p1LAu1RAN3",
      label: "LL",
      forIds: ["Mjk6Njg6NDcx"],
    }),
    new ModuleNpc({
      id: "npc53",
      actorUuid:
        "Compendium.pf2e.menace-under-otari-bestiary.Actor.Br1AtKUHe3nbzjnY",
      label: "M",
      forIds: ["MjA6OTk6NjYz"],
    }),
    new ModuleNpc({
      id: "npc54",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.277uvPqG9RLMQUcO",
      label: "M",
      forIds: ["MzM6Njg6NDIz"],
    }),
    new ModuleNpc({
      id: "npc55",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.uQBOJfjtzEXvpLQz",
      label: "OJ",
      forIds: ["MzA6OTk6MTU5"],
    }),
    new ModuleNpc({
      id: "npc56",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.WR07Z6MjvebSHzI7",
      name: {
        page: 38,
        x: 326.25,
        y: 495,
      },
      label: "R",
      forIds: ["Mzg6MzI2OjQ5NQ"],
    }),
    new ModuleNpc({
      id: "npc57",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.To0MLA0arpkiE6Cz",
      label: "S",
      forIds: ["MzA6OTk6NTA3"],
    }),
    new ModuleNpc({
      id: "npc58",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.qOkxxiM4tNf96CHQ",
      label: "SG",
      forIds: ["Mjc6Njg6MzAz"],
    }),
    new ModuleNpc({
      id: "npc59",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.vS1YISLmSnkNotkL",
      label: "SRW",
      forIds: ["ODU6Njg6NDcx"],
    }),
    new ModuleNpc({
      id: "npc60",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.TiAzR8SnYwhACWbj",
      label: "SR",
      forIds: ["Mzk6Njg6Mjc5"],
    }),
    new ModuleNpc({
      id: "npc61",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.VotlWUsFKdOrHWF6",
      label: "S",
      forIds: ["OTo2ODozMzk"],
    }),
    new ModuleNpc({
      id: "npc62",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.VQPzDz3xnCQGFOGL",
      label: "SH",
      forIds: ["Mjk6Njg6NDIz"],
    }),
    new ModuleNpc({
      id: "npc63",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.HNEUSYnInffvGPHK",
      label: "S",
      forIds: ["MTU6Mjk1OjU5MQ"],
    }),
    new ModuleNpc({
      id: "npc64",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.KgJq51AeYrENo3Db",
      label: "W",
      forIds: ["NTQ6MzI2OjI2Nw"],
    }),
    new ModuleNpc({
      id: "npc65",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.IE0EM4KDUbI5ZJz0",
      label: "Z",
      forIds: ["NDI6OTk6OTk"],
    }),
    new ModuleNpc({
      id: "npc66",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.b6qiHvyx6ymROTBL",
      name: {
        page: 34,
        x: 335.25,
        y: 435,
        substring: {
          start: 0,
          end: 11,
        },
      },
      label: "DGW",
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc67",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.uGXTQYuRNtgPt1Pp",
      name: {
        page: 34,
        x: 335.25,
        y: 99,
        substring: {
          start: 0,
          end: 6,
        },
      },
      label: "S",
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc68",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.Pmgt9aAtUiLEagD6",
      label: "UW",
      forIds: [],
    }),
    new ModuleNpc({
      id: "hazard1",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.knoWZfTiLY7xGwhB",
      label: "PST",
      forIds: ["NTY6OTk6NjYz"],
    }),
    new ModuleNpc({
      id: "hazard2",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.E0FMRiGNCv5n7AVH",
      label: "PLT",
      forIds: ["NTQ6OTk6NDM1"],
    }),
    new ModuleNpc({
      id: "hazard3",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.AdFuuUS7bIVqp5K7",
      label: "RGP",
      forIds: ["MTQ6OTk6NjUx"],
    }),
    new ModuleNpc({
      id: "hazard4",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.VsRKgjKolLsJMd0I",
      label: "SSB",
      forIds: ["MjM6Njg6Mzg3"],
    }),
    new ModuleNpc({
      id: "hazard5",
      actorUuid: "Compendium.pf2e.hazards.Actor.A93flWUsot3FmC7t",
      label: "YM",
      forIds: ["MzU6Njg6MTQ3"],
    }),
  ];
  journalPages = [
    {
      name: "Chapter 1",
      pages: [
        {
          id: "NjoyNDE6MzU1",
        },
        {
          id: "NzozNzE6Njk5",
        },
        {
          id: "NzozNzE6Mzc1",
        },
        {
          id: "Nzo2ODo0NDc",
        },
        {
          id: "Nzo2ODozNTE",
        },
        {
          id: "ODo5OTo0OTU",
        },
        {
          id: "ODozMjY6MjU1",
        },
        {
          id: "ODozMjY6OTk",
        },
        {
          id: "OTo2ODo2MDM",
        },
        {
          id: "OTo2ODoyNDM",
        },
        {
          id: "MTA6MzI2OjE0Nw",
        },
        {
          id: "MTE6Njg6Mjkx",
        },
        {
          id: "MTE6Mjk1OjM1MQ",
        },
        {
          id: "MTE6Mjk1OjEzNQ",
        },
        {
          id: "MTI6MzYyOjY2Mw",
        },
        {
          id: "MTM6Njg6MzYz",
        },
        {
          id: "MTM6Njg6MTEx",
        },
        {
          id: "MTM6Mjk1OjM1MQ",
        },
        {
          id: "MTU6Njg6Njk5",
        },
        {
          id: "MTU6Njg6MzM5",
        },
        {
          id: "MTU6Mjk1OjU0Mw",
        },
        {
          id: "MTU6Mjk1OjMxNQ",
        },
        {
          id: "MTU6Mjk1OjE5NQ",
        },
        {
          id: "MTc6Njg6NjI3",
        },
        {
          id: "MTc6Njg6Mjkx",
        },
        {
          id: "MTg6OTk6MjE5",
        },
        {
          id: "MTk6Njg6Njk5",
        },
        {
          id: "MTk6Njg6Mzc1",
        },
        {
          id: "MTk6Mjk1OjM4Nw",
        },
        {
          id: "MjA6OTk6NTA3",
        },
        {
          id: "MjA6OTk6MzE1",
        },
        {
          id: "MjA6MzI2OjU5MQ",
        },
        {
          id: "MjA6MzI2OjM1MQ",
        },
        {
          id: "MjI6MzI2OjYyNw",
        },
        {
          id: "MjI6MzI2OjMxNQ",
        },
        {
          id: "MjI6MzI2OjExMQ",
        },
        {
          id: "MjM6Mjk1OjQ0Nw",
        },
        {
          id: "MjM6Mjk1OjE5NQ",
        },
        {
          id: "MjQ6OTk6NTQz",
        },
        {
          id: "MjQ6MzI2OjYxNQ",
        },
        {
          id: "MjQ6MzI2OjMyNw",
        },
        {
          id: "MjU6Njg6MzUx",
        },
      ],
    },
    {
      name: "Chapter 2",
      pages: [
        {
          id: "MjY6MjM5OjM1NQ",
        },
        {
          id: "Mjc6MzcxOjY5OQ",
        },
        {
          id: "Mjc6MzcxOjQ1OQ",
        },
        {
          id: "MjY6MzI2OjEzNQ",
        },
        {
          id: "Mjc6Njg6NjM5",
        },
        {
          id: "Mjc6Njg6MTQ3",
        },
        {
          id: "Mjk6Njg6Njk5",
        },
        {
          id: "Mjk6Mjk1OjY5OQ",
        },
        {
          id: "Mjk6Mjk1OjI1NQ",
        },
        {
          id: "MzA6OTk6Mzg3",
        },
        {
          id: "MzA6MzI2OjY5OQ",
        },
        {
          id: "MzA6MzI2OjI3OQ",
        },
        {
          id: "MzE6Njg6MjU1",
        },
        {
          id: "MzI6OTk6NDIz",
        },
        {
          id: "MzI6MzI2OjU5MQ",
        },
        {
          id: "MzQ6Mzk1OjY5OQ",
        },
        {
          id: "MzU6Njg6NDU5",
        },
        {
          id: "MzU6Njg6MzAz",
        },
        {
          id: "MzU6Njg6MjU1",
        },
        {
          id: "MzU6Mjk1OjY5OQ",
        },
        {
          id: "MzY6MzI2OjM1MQ",
        },
        {
          id: "MzY6MzI2OjE5NQ",
        },
        {
          id: "Mzk6Njg6Njk5",
        },
        {
          id: "Mzk6Njg6NTQz",
        },
        {
          id: "Mzk6Mjk1OjY5OQ",
        },
        {
          id: "NDA6MzI2OjQyMw",
        },
        {
          id: "NDE6Mjk1OjM2Mw",
        },
        {
          id: "NDE6Mjk1OjE0Nw",
        },
        {
          id: "NDI6MTE1OjY3NQ",
        },
        {
          id: "NDI6MzI2OjY1MQ",
        },
        {
          id: "NDM6Mjk1OjYxNQ",
        },
      ],
    },
    {
      name: "Chapter 3",
      pages: [
        {
          id: "NDQ6MjM4OjM1NQ",
        },
        {
          id: "NDU6MzcxOjY5OQ",
        },
        {
          id: "NDU6MzcxOjMxNQ",
        },
        {
          id: "NDU6Njg6Mzg3",
        },
        {
          id: "NDU6Njg6MjQz",
        },
        {
          id: "NDY6MzI2OjY5OQ",
        },
        {
          id: "NDY6MzMwOjI1NQ",
        },
        {
          id: "NDc6Njg6MzAz",
        },
        {
          id: "NDc6Mjk1OjE3MQ",
        },
        {
          id: "NDk6Njg6NjI3",
        },
        {
          id: "NDk6Njg6MjMx",
        },
        {
          id: "NDk6Mjk1OjEyMw",
        },
        {
          id: "NTA6MzI2OjQ1OQ",
        },
        {
          id: "NTE6Njg6MTIz",
        },
        {
          id: "NTM6Mjk1OjM5OQ",
        },
        {
          id: "NTQ6OTk6NTQz",
        },
        {
          id: "NTQ6MzI2OjYxNQ",
        },
        {
          id: "NTQ6MzI2OjIxOQ",
        },
        {
          id: "NTQ6MzI2OjE1OQ",
        },
        {
          id: "NTU6Mjk1OjY5OQ",
        },
        {
          id: "NTU6Mjk1OjM3NQ",
        },
        {
          id: "NTY6MzI2OjU2Nw",
        },
        {
          id: "NTc6Njg6MjA3",
        },
        {
          id: "NTg6MzI2OjU5MQ",
        },
        {
          id: "NTg6MzI2OjM5OQ",
        },
        {
          id: "NTg6MzI2OjIxOQ",
        },
        {
          id: "NTk6MzcxOjQ3MQ",
        },
        {
          id: "NTk6Mjk1OjI0Mw",
        },
        {
          id: "NTI6MTE1OjY4Nw",
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
          id: "ODA6MjUxOjYxNQ",
        },
        {
          id: "ODE6Njg6Njk5",
        },
        {
          id: "ODI6MjUxOjY5OQ",
        },
        {
          id: "ODI6MjUxOjYwMw",
        },
        {
          id: "ODI6MzIwOjI2Nw",
        },
        {
          id: "ODM6Njg6NTkx",
        },
        {
          id: "ODQ6MjUxOjY5OQ",
        },
        {
          id: "ODQ6MjUxOjYwMw",
        },
        {
          id: "ODU6Njg6NTY3",
        },
        {
          id: "ODY6MjUxOjY5OQ",
        },
        {
          id: "ODY6MjUxOjYwMw",
        },
        {
          id: "ODc6Njg6Njk5",
        },
        {
          id: "ODg6MTA4OjYzMA",
        },
        {
          id: "OTA6MjM2OjYzMA",
        },
        {
          id: "OTI6MjA2OjYzMQ",
        },
        {
          id: "ODA6MTM1OjY2Mw",
        },
        {
          id: "ODE6MzcxOjY2Mw",
        },
        {
          id: "ODI6MTY5OjY2Mw",
        },
        {
          id: "ODM6MzcxOjY2Mw",
        },
        {
          id: "ODQ6MTM5OjY2Mw",
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
        {
          id: "npc26",
        },
        {
          id: "npc27",
        },
        {
          id: "npc28",
        },
        {
          id: "npc29",
        },
        {
          id: "npc30",
        },
        {
          id: "npc31",
        },
        {
          id: "npc32",
        },
        {
          id: "npc33",
        },
        {
          id: "npc34",
        },
        {
          id: "npc35",
        },
        {
          id: "npc36",
        },
        {
          id: "npc37",
        },
        {
          id: "npc38",
        },
        {
          id: "npc39",
        },
        {
          id: "npc40",
        },
        {
          id: "npc41",
        },
        {
          id: "npc42",
        },
        {
          id: "npc43",
        },
      ],
    },
  ];
  combines = [
    {
      source: "ODk6Njg6NTkx",
      dest: "ODg6MTA4OjYzMA",
    },
    {
      source: "OTA6MzI2OjI0Mw",
      dest: "OTA6MjM2OjYzMA",
    },
    {
      source: "OTI6MzI2OjM2Mw",
      dest: "OTI6MjA2OjYzMQ",
    },
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "HANDS OF THE DEVIL" &&
        t.fontId === "DwarvenAxeBB:44",
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    return super.extractDetails(text, moduleData, sectionKey);
  }
}
