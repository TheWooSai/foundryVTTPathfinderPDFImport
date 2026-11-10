import { AbominationVaultsBase } from "./base.js";
import { CaptionImage } from "../../core/images.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class AbominationVaults3 extends AbominationVaultsBase {
  prefix = "abomination-vaults3";
  fullName = "Abomination Vaults - Eyes of Empty Death";
  pages = [
    this.ChapterHeadingPageLayout(6),
    this.RightSingleColumnWithSidebar(7),
    this.LeftTwoColumnWithLeftCutout(8, 450),
    this.RightTwoColumn(9),
    this.LeftTwoColumn(10),
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
    this.LeftTwoColumnWithLeftCutout(34, 490),
    this.RightTwoColumn(35),
    this.LeftTwoColumn(36),
    this.RightTwoColumn(37),
    this.LeftTwoColumn(38),
    this.RightTwoColumn(39),
    this.LeftTwoColumnWithLeftCutout(40, 330),
    this.RightTwoColumnWithRightCutout(41, 510),
    this.LeftTwoColumnWithLeftCutout(42, 520),
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
    this.LeftTwoColumnWithLeftCutout(54, 450),
    this.RightTwoColumn(55),
    this.LeftTwoColumn(56),
    this.RightTwoColumn(57),
    this.LeftTwoColumn(58),
    this.RightTwoColumnWithRightCutout(59, 370),
    this.LeftTwoColumn(60),
    this.RightTwoColumn(61),
    this.RightChapterHeadingPageLayout(63),
    this.LeftTwoColumnWithLeftCutout(64, 480),
    this.RightTwoColumn(65),
    this.LeftTwoColumn(66),
    this.RightTwoColumn(67),
    this.RightChapterHeadingPageLayout(69),
    this.LeftTwoColumnWithLeftCutout(70, 430),
    this.RightTwoColumn(71),
    this.LeftTwoColumnWithLeftCutout(72, 480),
    this.RightTwoColumn(73),
    this.RightChapterHeadingPageLayout(75),
    this.LeftTwoColumnWithTopHandout(76, 560),
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
        name: "av3/map1",
        priority: 0,
      },
      nameInfo: {
        x: 338.56,
        y: 749.694,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 1261,
      height: 1637,
      imageLeft: 65,
      imageRight: 1122,
      imageCols: 38,
      imageTop: 98,
      imageBottom: 1572,
      imageRows: 53,
      offsetX: 11,
      offsetY: 15,
      globalLight: true,
      detailsFile: "/av/maps/av3-map1.json",
      journals: [
        {
          x: 2350,
          y: 3050,
          id: "ODozMjY6Njk5",
        },
        {
          x: 2950,
          y: 3050,
          id: "ODozMjY6NTQz",
        },
        {
          x: 3750,
          y: 3550,
          id: "ODozMjY6MTgz",
        },
        {
          x: 3350,
          y: 3650,
          id: "OTo2ODo0MTE",
        },
        {
          x: 3750,
          y: 3950,
          id: "OTo2ODoyMzE",
        },
        {
          x: 4150,
          y: 4150,
          id: "OToyOTU6NjYz",
        },
        {
          x: 3750,
          y: 4250,
          id: "MTA6OTk6NjYz",
        },
        {
          x: 3150,
          y: 3850,
          id: "MTA6MzI2OjMyNw",
        },
        {
          x: 3250,
          y: 4150,
          id: "MTI6OTk6NTU1",
        },
        {
          x: 3950,
          y: 2950,
          id: "MTI6MzI2OjY5OQ",
        },
        {
          x: 3900,
          y: 2050,
          id: "MTI6MzI2OjQyMw",
        },
        {
          x: 3950,
          y: 900,
          id: "MTM6Njg6Njk5",
        },
        {
          x: 3e3,
          y: 1e3,
          id: "MTQ6OTk6MzE1",
        },
        {
          x: 3350,
          y: 2550,
          id: "MTQ6OTk6MTcx",
        },
        {
          x: 2350,
          y: 950,
          id: "MTQ6MzI2OjQ1OQ",
        },
        {
          x: 2550,
          y: 2250,
          id: "MTU6Njg6NTkx",
        },
        {
          x: 1950,
          y: 1250,
          id: "MTU6Mjk1OjY1MQ",
        },
        {
          x: 1150,
          y: 1950,
          id: "MTU6Mjk1OjE3MQ",
        },
        {
          x: 1850,
          y: 1950,
          id: "MTY6OTk6NTE5",
        },
        {
          x: 1650,
          y: 2200,
          id: "MTc6Njg6NDk1",
        },
        {
          x: 450,
          y: 750,
          id: "MTc6MzM2OjQ0Nw",
        },
        {
          x: 550,
          y: 450,
          id: "MTc6MzM2OjQ0Nw",
        },
        {
          x: 850,
          y: 350,
          id: "MTc6MzM2OjQ0Nw",
        },
        {
          x: 1250,
          y: 350,
          id: "MTc6MzM2OjQ0Nw",
        },
        {
          x: 550,
          y: 1750,
          id: "MTg6OTk6NjE1",
        },
        {
          x: 750,
          y: 2750,
          id: "MTg6OTk6NTA3",
        },
        {
          x: 1150,
          y: 2750,
          id: "MTg6MzI2OjQ0Nw",
        },
        {
          x: 1350,
          y: 2550,
          id: "MTg6NDIxOjE5NQ",
        },
        {
          x: 1450,
          y: 2750,
          id: "MTk6Njg6MzM5",
        },
        {
          x: 650,
          y: 4250,
          id: "MTk6Njg6MTQ3",
        },
        {
          x: 1050,
          y: 4150,
          id: "MTk6Mjk1OjI3OQ",
        },
        {
          x: 1250,
          y: 4650,
          id: "MjA6OTk6Njk5",
        },
        {
          x: 950,
          y: 5050,
          id: "MjA6OTk6NDU5",
        },
        {
          x: 650,
          y: 4950,
          id: "MjA6OTk6MzM5",
        },
        {
          x: 1050,
          y: 5350,
          id: "MjA6OTk6MTgz",
        },
        {
          x: 550,
          y: 5450,
          id: "MjA6MzI2OjQ4Mw",
        },
        {
          x: 1950,
          y: 4950,
          id: "MjA6MzI2OjI1NQ",
        },
        {
          x: 2450,
          y: 4450,
          id: "MjE6Njg6NTE5",
        },
        {
          x: 1950,
          y: 3650,
          id: "MjE6Njg6MjA3",
        },
        {
          x: 1950,
          y: 3250,
          id: "MjE6Mjk1OjQ5NQ",
        },
        {
          x: 1450,
          y: 3350,
          id: "MjE6Mjk1OjIzMQ",
        },
        {
          x: 1150,
          y: 3250,
          id: "MjI6MzI2OjUwNw",
        },
        {
          x: 3350,
          y: 5050,
          id: "MjM6Njg6NjM5",
        },
        {
          x: 3850,
          y: 5050,
          id: "MjM6Njg6MzAz",
        },
        {
          x: 2850,
          y: 5250,
          id: "MjM6Mjk1OjM4Nw",
        },
        {
          x: 3250,
          y: 5350,
          id: "MjM6Mjk1OjE5NQ",
        },
        {
          x: 2750,
          y: 5050,
          id: "MjQ6MzI2OjYzOQ",
        },
        {
          x: 2550,
          y: 5450,
          id: "MjQ6MzI2OjIwNw",
        },
        {
          x: 2050,
          y: 5550,
          id: "MjU6Njg6OTk",
        },
      ],
      tokens: [
        {
          id: "npc6",
          x: 900,
          y: 300,
        },
        {
          id: "npc6",
          x: 600,
          y: 400,
        },
        {
          id: "npc6",
          x: 1100,
          y: 200,
        },
        {
          id: "npc3",
          x: 1800,
          y: 1500,
        },
        {
          id: "npc3",
          x: 1900,
          y: 1500,
        },
        {
          id: "npc3",
          x: 2e3,
          y: 1500,
        },
        {
          id: "npc3",
          x: 1800,
          y: 1400,
        },
        {
          id: "npc4",
          x: 3700,
          y: 300,
        },
        {
          id: "npc3",
          x: 3700,
          y: 1900,
        },
        {
          id: "npc3",
          x: 3700,
          y: 1800,
        },
        {
          id: "npc3",
          x: 3700,
          y: 2e3,
        },
        {
          id: "npc3",
          x: 3700,
          y: 2100,
        },
        {
          id: "npc67",
          x: 2300,
          y: 2500,
        },
        {
          id: "npc67",
          x: 1400,
          y: 1600,
        },
        {
          id: "npc59",
          x: 2600,
          y: 2e3,
        },
        {
          id: "npc42",
          x: 2300,
          y: 1400,
        },
        {
          id: "npc42",
          x: 3400,
          y: 2400,
        },
        {
          id: "npc42",
          x: 3200,
          y: 2400,
        },
        {
          id: "npc5",
          x: 1900,
          y: 1900,
        },
        {
          id: "npc3",
          x: 2e3,
          y: 2e3,
        },
        {
          id: "npc3",
          x: 1800,
          y: 2e3,
        },
        {
          id: "npc54",
          x: 1500,
          y: 2200,
        },
        {
          id: "npc65",
          x: 1100,
          y: 2e3,
        },
        {
          id: "npc48",
          x: 800,
          y: 2700,
        },
        {
          id: "npc3",
          x: 1300,
          y: 2700,
        },
        {
          id: "npc3",
          x: 1200,
          y: 2700,
        },
        {
          id: "npc3",
          x: 1300,
          y: 2800,
        },
        {
          id: "npc3",
          x: 1200,
          y: 2800,
        },
        {
          id: "npc7",
          x: 1300,
          y: 2400,
        },
        {
          id: "npc61",
          x: 1e3,
          y: 3200,
        },
        {
          id: "npc8",
          x: 1300,
          y: 3200,
        },
        {
          id: "npc73",
          x: 2900,
          y: 2800,
        },
        {
          id: "npc73",
          x: 3100,
          y: 2800,
        },
        {
          id: "npc73",
          x: 2900,
          y: 3200,
        },
        {
          id: "npc73",
          x: 3100,
          y: 3200,
        },
        {
          id: "npc26",
          x: 3700,
          y: 2800,
        },
        {
          id: "npc26",
          x: 4100,
          y: 2800,
        },
        {
          id: "npc39",
          x: 3900,
          y: 3400,
        },
        {
          id: "npc39",
          x: 4e3,
          y: 3400,
        },
        {
          id: "npc39",
          x: 3900,
          y: 3500,
        },
        {
          id: "npc39",
          x: 4e3,
          y: 3600,
        },
        {
          id: "npc39",
          x: 3900,
          y: 3600,
        },
        {
          id: "npc39",
          x: 3800,
          y: 3500,
        },
        {
          id: "npc2",
          x: 3e3,
          y: 3800,
        },
        {
          id: "npc63",
          x: 3e3,
          y: 3900,
        },
        {
          id: "npc1",
          x: 4200,
          y: 4200,
        },
        {
          id: "npc39",
          x: 4e3,
          y: 4100,
        },
        {
          id: "npc39",
          x: 4e3,
          y: 4200,
        },
        {
          id: "npc72",
          x: 3700,
          y: 4100,
        },
        {
          id: "npc49",
          x: 3900,
          y: 5200,
        },
        {
          id: "npc49",
          x: 3900,
          y: 5100,
        },
        {
          id: "npc49",
          x: 3900,
          y: 5e3,
        },
        {
          id: "npc49",
          x: 3900,
          y: 4900,
        },
        {
          id: "npc3",
          x: 3100,
          y: 5300,
        },
        {
          id: "npc53",
          x: 2500,
          y: 4200,
        },
        {
          id: "npc9",
          x: 2700,
          y: 4900,
        },
        {
          id: "npc10",
          x: 2700,
          y: 5400,
        },
        {
          id: "npc27",
          x: 2400,
          y: 5500,
        },
        {
          id: "npc27",
          x: 2300,
          y: 5400,
        },
        {
          id: "npc27",
          x: 2500,
          y: 5300,
        },
        {
          id: "npc27",
          x: 2400,
          y: 5300,
        },
        {
          id: "npc46",
          x: 1900,
          y: 5e3,
        },
        {
          id: "npc46",
          x: 1900,
          y: 4600,
        },
        {
          id: "npc38",
          x: 500,
          y: 4e3,
        },
        {
          id: "npc51",
          x: 1e3,
          y: 5200,
        },
        {
          id: "npc47",
          x: 1700,
          y: 3500,
        },
      ],
    }),
    new ModuleScene({
      name: "map2",
      canonical: {
        name: "av3/map2",
        priority: 0,
      },
      nameInfo: {
        x: 99,
        y: 753.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 28,
      width: 1262,
      height: 1637,
      imageLeft: 29,
      imageRight: 1257,
      imageCols: 45,
      imageTop: 108,
      imageBottom: 1608,
      imageRows: 55,
      offsetX: 11,
      offsetY: 14,
      globalLight: true,
      detailsFile: "/av/maps/av3-map2.json",
      journals: [
        {
          x: 3150,
          y: 4050,
          id: "Mjc6Njg6MzE1",
        },
        {
          x: 3750,
          y: 4150,
          id: "Mjc6Njg6MTU5",
        },
        {
          x: 3950,
          y: 3750,
          id: "Mjk6Njg6MzYz",
        },
        {
          x: 2750,
          y: 4550,
          id: "Mjk6Njg6MTQ3",
        },
        {
          x: 2900,
          y: 4550,
          id: "Mjk6Mjk1OjYwMw",
        },
        {
          x: 3100,
          y: 4550,
          id: "Mjk6Mjk1OjMyNw",
        },
        {
          x: 3100,
          y: 4350,
          id: "MzA6MzI2OjU0Mw",
        },
        {
          x: 3100,
          y: 4800,
          id: "MzA6MzI2OjI1NQ",
        },
        {
          x: 3250,
          y: 5050,
          id: "MzA6MzYxOjEyMw",
        },
        {
          x: 3450,
          y: 4700,
          id: "MzE6Njg6NDgz",
        },
        {
          x: 3600,
          y: 4400,
          id: "MzE6Njg6MjE5",
        },
        {
          x: 3950,
          y: 4450,
          id: "MzE6Mjk1OjYxNQ",
        },
        {
          x: 4150,
          y: 4450,
          id: "MzE6Mjk1OjYxNQ",
        },
        {
          x: 4350,
          y: 4450,
          id: "MzE6Mjk1OjYxNQ",
        },
        {
          x: 3950,
          y: 4650,
          id: "MzE6Mjk1OjYxNQ",
        },
        {
          x: 4150,
          y: 4650,
          id: "MzE6Mjk1OjYxNQ",
        },
        {
          x: 4450,
          y: 4650,
          id: "MzE6Mjk1OjM2Mw",
        },
        {
          x: 4250,
          y: 4850,
          id: "MzE6Mjk1OjM2Mw",
        },
        {
          x: 4450,
          y: 4850,
          id: "MzE6Mjk1OjIwNw",
        },
        {
          x: 4350,
          y: 5150,
          id: "MzI6MzI2OjE4Mw",
        },
        {
          x: 4e3,
          y: 4950,
          id: "MzM6Njg6NTkx",
        },
        {
          x: 3700,
          y: 5150,
          id: "MzM6Njg6MzYz",
        },
        {
          x: 3350,
          y: 5350,
          id: "MzQ6MzI2OjE5NQ",
        },
        {
          x: 3700,
          y: 5250,
          id: "MzM6Njg6MTQ3",
        },
        {
          x: 4250,
          y: 5550,
          id: "MzU6Njg6MjE5",
        },
        {
          x: 3700,
          y: 5650,
          id: "MzY6MzI2OjY1MQ",
        },
        {
          x: 1800,
          y: 3150,
          id: "MzY6MzI2OjUwNw",
        },
        {
          x: 2050,
          y: 3200,
          id: "MzY6MzI2OjEyMw",
        },
        {
          x: 2350,
          y: 3300,
          id: "Mzc6Mjk1OjY5OQ",
        },
        {
          x: 2350,
          y: 3450,
          id: "Mzc6Mjk1OjUxOQ",
        },
        {
          x: 2050,
          y: 3350,
          id: "Mzc6Mjk1OjE3MQ",
        },
        {
          x: 2200,
          y: 3500,
          id: "Mzg6OTk6Njk5",
        },
        {
          x: 1950,
          y: 3550,
          id: "Mzk6Njg6MjQz",
        },
        {
          x: 2150,
          y: 2750,
          id: "Mzk6Mjk1OjY5OQ",
        },
        {
          x: 1600,
          y: 3100,
          id: "Mzk6Mjk1OjQ3MQ",
        },
        {
          x: 2750,
          y: 5350,
          id: "NDA6OTk6MzI3",
        },
        {
          x: 2050,
          y: 5450,
          id: "NDA6MzI2OjUzMQ",
        },
        {
          x: 1950,
          y: 4250,
          id: "NDE6Njg6NTMx",
        },
        {
          x: 1250,
          y: 4150,
          id: "NDE6Njg6MzM5",
        },
        {
          x: 750,
          y: 4550,
          id: "NDE6Mjk1OjM5OQ",
        },
        {
          x: 1250,
          y: 4950,
          id: "NDI6MzI2OjY5OQ",
        },
        {
          x: 1050,
          y: 5350,
          id: "NDM6Njg6NjM5",
        },
        {
          x: 850,
          y: 5750,
          id: "NDM6Njg6Mzg3",
        },
        {
          x: 450,
          y: 3550,
          id: "NDQ6OTk6NjYz",
        },
        {
          x: 1050,
          y: 3350,
          id: "NDQ6OTk6NDIz",
        },
        {
          x: 450,
          y: 2450,
          id: "NDQ6OTk6MTgz",
        },
        {
          x: 750,
          y: 2350,
          id: "NDQ6MzM4OjY1MQ",
        },
        {
          x: 350,
          y: 1350,
          id: "NDQ6MzI2OjE3MQ",
        },
        {
          x: 450,
          y: 650,
          id: "NDU6Njg6NTkx",
        },
        {
          x: 1050,
          y: 650,
          id: "NDU6Njg6NDgz",
        },
        {
          x: 1550,
          y: 650,
          id: "NDU6Njg6MjMx",
        },
        {
          x: 2150,
          y: 850,
          id: "NDU6Mjk1OjY5OQ",
        },
        {
          x: 1550,
          y: 1250,
          id: "NDU6Mjk1OjU5MQ",
        },
        {
          x: 3450,
          y: 950,
          id: "NDU6Mjk1OjMzOQ",
        },
        {
          x: 4150,
          y: 650,
          id: "NDU6Mjk1OjE3MQ",
        },
        {
          x: 3850,
          y: 1650,
          id: "NDY6OTk6NjE1",
        },
        {
          x: 3450,
          y: 3150,
          id: "NDY6MzI2OjU5MQ",
        },
        {
          x: 1050,
          y: 1850,
          id: "NDc6Njg6Mjkx",
        },
        {
          x: 1150,
          y: 1950,
          id: "NDc6Mjk1OjQ4Mw",
        },
        {
          x: 1250,
          y: 1750,
          id: "NDc6Mjk1OjE4Mw",
        },
        {
          x: 1350,
          y: 1850,
          id: "NDg6OTk6Njk5",
        },
        {
          x: 1350,
          y: 2050,
          id: "NDg6MzI2OjY1MQ",
        },
        {
          x: 1450,
          y: 2150,
          id: "NDk6Njg6Njk5",
        },
        {
          x: 1550,
          y: 2050,
          id: "NDk6Njg6NTE5",
        },
        {
          x: 1650,
          y: 1750,
          id: "NDk6Mjk1OjMyNw",
        },
        {
          x: 2600,
          y: 850,
          id: "NDk6Mjk1OjE3MQ",
        },
        {
          x: 2600,
          y: 1550,
          id: "NTA6OTk6NTQz",
        },
        {
          x: 2250,
          y: 1250,
          id: "NTE6Njg6MTEx",
        },
        {
          x: 2350,
          y: 1750,
          id: "NTE6Mjk1OjU1NQ",
        },
        {
          x: 2950,
          y: 1150,
          id: "NTE6Mjk1OjMwMw",
        },
      ],
      tokens: [
        {
          id: "npc66",
          x: 900,
          y: 300,
        },
        {
          id: "npc52",
          x: 3900,
          y: 600,
        },
        {
          id: "hazard5",
          x: 4e3,
          y: 1300,
        },
        {
          id: "npc26",
          x: 3e3,
          y: 1200,
        },
        {
          id: "npc26",
          x: 2800,
          y: 1200,
        },
        {
          id: "npc26",
          x: 3e3,
          y: 1e3,
        },
        {
          id: "npc20",
          x: 2500,
          y: 1600,
        },
        {
          id: "hazard3",
          x: 2100,
          y: 1200,
        },
        {
          id: "npc26",
          x: 2300,
          y: 1800,
        },
        {
          id: "npc62",
          x: 1400,
          y: 1200,
        },
        {
          id: "npc19",
          x: 1400,
          y: 1900,
        },
        {
          id: "npc43",
          x: 1100,
          y: 1900,
        },
        {
          id: "hazard2",
          x: 1e3,
          y: 1800,
        },
        {
          id: "npc40",
          x: 700,
          y: 2400,
        },
        {
          id: "npc37",
          x: 1500,
          y: 3e3,
        },
        {
          id: "npc44",
          x: 1e3,
          y: 3100,
        },
        {
          id: "npc44",
          x: 800,
          y: 3100,
        },
        {
          id: "npc30",
          x: 500,
          y: 3500,
        },
        {
          id: "npc30",
          x: 300,
          y: 3400,
        },
        {
          id: "npc30",
          x: 400,
          y: 3500,
        },
        {
          id: "npc18",
          x: 3400,
          y: 2800,
        },
        {
          id: "npc14",
          x: 2100,
          y: 3200,
        },
        {
          id: "npc14",
          x: 1900,
          y: 3200,
        },
        {
          id: "npc14",
          x: 1900,
          y: 3100,
        },
        {
          id: "npc14",
          x: 2400,
          y: 3200,
        },
        {
          id: "npc14",
          x: 2400,
          y: 3300,
        },
        {
          id: "npc23",
          x: 2400,
          y: 3400,
        },
        {
          id: "npc23",
          x: 2300,
          y: 3400,
        },
        {
          id: "npc15",
          x: 2200,
          y: 3500,
        },
        {
          id: "npc41",
          x: 1900,
          y: 3500,
        },
        {
          id: "npc41",
          x: 1700,
          y: 3300,
        },
        {
          id: "npc41",
          x: 1900,
          y: 3700,
        },
        {
          id: "npc41",
          x: 1700,
          y: 3600,
        },
        {
          id: "npc24",
          x: 2100,
          y: 4200,
        },
        {
          id: "npc24",
          x: 1800,
          y: 4300,
        },
        {
          id: "hazard4",
          x: 2e3,
          y: 5e3,
        },
        {
          id: "npc45",
          x: 2100,
          y: 5400,
        },
        {
          id: "npc36",
          x: 2800,
          y: 5200,
        },
        {
          id: "npc36",
          x: 2600,
          y: 5600,
        },
        {
          id: "npc36",
          x: 2600,
          y: 5300,
        },
        {
          id: "npc36",
          x: 2700,
          y: 5e3,
        },
        {
          id: "npc31",
          x: 1300,
          y: 4900,
        },
        {
          id: "npc71",
          x: 1300,
          y: 4800,
        },
        {
          id: "npc71",
          x: 1200,
          y: 4800,
        },
        {
          id: "npc71",
          x: 1200,
          y: 4900,
        },
        {
          id: "npc16",
          x: 1400,
          y: 4800,
        },
        {
          id: "npc30",
          x: 1100,
          y: 5300,
        },
        {
          id: "npc30",
          x: 1200,
          y: 5300,
        },
        {
          id: "npc71",
          x: 1200,
          y: 5200,
        },
        {
          id: "npc71",
          x: 1100,
          y: 5100,
        },
        {
          id: "npc33",
          x: 800,
          y: 5700,
        },
        {
          id: "npc71",
          x: 900,
          y: 5800,
        },
        {
          id: "npc71",
          x: 1e3,
          y: 5700,
        },
        {
          id: "npc72",
          x: 1e3,
          y: 4600,
        },
        {
          id: "npc72",
          x: 1e3,
          y: 4700,
        },
        {
          id: "npc72",
          x: 800,
          y: 4600,
        },
        {
          id: "npc72",
          x: 700,
          y: 4600,
        },
        {
          id: "npc72",
          x: 500,
          y: 4800,
        },
        {
          id: "npc72",
          x: 500,
          y: 4700,
        },
        {
          id: "npc72",
          x: 700,
          y: 5200,
        },
        {
          id: "npc72",
          x: 800,
          y: 5100,
        },
        {
          id: "npc72",
          x: 700,
          y: 5400,
        },
        {
          id: "npc72",
          x: 600,
          y: 5400,
        },
        {
          id: "npc72",
          x: 500,
          y: 5200,
        },
        {
          id: "npc72",
          x: 500,
          y: 5100,
        },
        {
          id: "npc71",
          x: 500,
          y: 4900,
        },
        {
          id: "npc71",
          x: 900,
          y: 5e3,
        },
        {
          id: "npc41",
          x: 800,
          y: 4800,
        },
        {
          id: "npc41",
          x: 600,
          y: 5e3,
        },
        {
          id: "npc17",
          x: 600,
          y: 5300,
        },
        {
          id: "npc17",
          x: 900,
          y: 4600,
        },
        {
          id: "npc30",
          x: 800,
          y: 4700,
        },
        {
          id: "npc30",
          x: 600,
          y: 4700,
        },
        {
          id: "npc64",
          x: 3100,
          y: 4e3,
        },
        {
          id: "npc49",
          x: 3600,
          y: 4e3,
        },
        {
          id: "npc49",
          x: 3600,
          y: 4100,
        },
        {
          id: "npc27",
          x: 3700,
          y: 4e3,
        },
        {
          id: "npc27",
          x: 3800,
          y: 4e3,
        },
        {
          id: "npc27",
          x: 3800,
          y: 4100,
        },
        {
          id: "npc27",
          x: 3700,
          y: 4100,
        },
        {
          id: "npc36",
          x: 3900,
          y: 4e3,
        },
        {
          id: "npc36",
          x: 4100,
          y: 4100,
        },
        {
          id: "npc36",
          x: 4e3,
          y: 3800,
        },
        {
          id: "npc36",
          x: 4100,
          y: 3600,
        },
        {
          id: "npc36",
          x: 4200,
          y: 3300,
        },
        {
          id: "npc36",
          x: 4100,
          y: 3400,
        },
        {
          id: "npc36",
          x: 3600,
          y: 3700,
        },
        {
          id: "npc36",
          x: 3600,
          y: 3500,
        },
        {
          id: "npc27",
          x: 3800,
          y: 3700,
        },
        {
          id: "npc27",
          x: 4e3,
          y: 3700,
        },
        {
          id: "npc27",
          x: 4e3,
          y: 3600,
        },
        {
          id: "npc35",
          x: 2900,
          y: 4500,
        },
        {
          id: "npc70",
          x: 3e3,
          y: 4300,
        },
        {
          id: "npc11",
          x: 3100,
          y: 4600,
        },
        {
          id: "npc49",
          x: 3100,
          y: 4500,
        },
        {
          id: "npc49",
          x: 3e3,
          y: 4400,
        },
        {
          id: "npc55",
          x: 3e3,
          y: 4500,
        },
        {
          id: "npc29",
          x: 3300,
          y: 4600,
        },
        {
          id: "npc29",
          x: 3300,
          y: 4700,
        },
        {
          id: "npc49",
          x: 3200,
          y: 4900,
        },
        {
          id: "npc49",
          x: 3300,
          y: 4900,
        },
        {
          id: "npc49",
          x: 3e3,
          y: 4900,
        },
        {
          id: "npc29",
          x: 3700,
          y: 4300,
        },
        {
          id: "npc29",
          x: 3600,
          y: 4300,
        },
        {
          id: "npc28",
          x: 4e3,
          y: 4400,
        },
        {
          id: "npc28",
          x: 4200,
          y: 4400,
        },
        {
          id: "npc28",
          x: 4e3,
          y: 4600,
        },
        {
          id: "npc28",
          x: 4200,
          y: 4600,
        },
        {
          id: "npc28",
          x: 4400,
          y: 4400,
        },
        {
          id: "npc12",
          x: 4400,
          y: 4700,
        },
        {
          id: "npc28",
          x: 4400,
          y: 5100,
        },
        {
          id: "npc28",
          x: 4200,
          y: 5100,
        },
        {
          id: "npc28",
          x: 4300,
          y: 5400,
        },
        {
          id: "npc28",
          x: 4400,
          y: 5300,
        },
        {
          id: "npc27",
          x: 3900,
          y: 4900,
        },
        {
          id: "npc27",
          x: 4e3,
          y: 5e3,
        },
        {
          id: "npc34",
          x: 3700,
          y: 5e3,
        },
        {
          id: "npc13",
          x: 3400,
          y: 5200,
        },
        {
          id: "npc14",
          x: 3400,
          y: 5400,
        },
      ],
    }),
    new ModuleScene({
      name: "map3",
      canonical: {
        name: "av3/map3",
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
      imageIndex: 1,
      imageLeft: 110,
      imageRight: 1185,
      imageCols: 40,
      imageTop: 110,
      imageBottom: 1507,
      imageRows: 52,
      offsetX: 12,
      offsetY: 15,
      globalLight: true,
      detailsFile: "/av/maps/av3-map3.json",
      journals: [
        {
          x: 2950,
          y: 1350,
          id: "NTI6MzI2OjE0Nw",
        },
        {
          x: 1850,
          y: 1450,
          id: "NTM6Njg6NDcx",
        },
        {
          x: 1350,
          y: 1750,
          id: "NTM6Njg6MTU5",
        },
        {
          x: 1850,
          y: 1950,
          id: "NTQ6OTk6NDEx",
        },
        {
          x: 900,
          y: 1750,
          id: "NTQ6MzI2OjM2Mw",
        },
        {
          x: 850,
          y: 1450,
          id: "NTU6Njg6Njk5",
        },
        {
          x: 1550,
          y: 700,
          id: "NTU6Njg6NDgz",
        },
        {
          x: 450,
          y: 750,
          id: "NTY6OTk6NTQz",
        },
        {
          x: 2950,
          y: 2350,
          id: "NTY6MzI2OjYzOQ",
        },
        {
          x: 1650,
          y: 2250,
          id: "NTY6MzI2OjM5OQ",
        },
        {
          x: 750,
          y: 2250,
          id: "NTc6Njg6Njk5",
        },
        {
          x: 1250,
          y: 2750,
          id: "NTc6Njg6MTgz",
        },
        {
          x: 2450,
          y: 2700,
          id: "NTc6Mjk1OjE3MQ",
        },
        {
          x: 2950,
          y: 2950,
          id: "NTg6OTk6Njk5",
        },
        {
          x: 3950,
          y: 2650,
          id: "NTg6MzI2OjYxNQ",
        },
        {
          x: 3900,
          y: 750,
          id: "NTk6Njg6MTEx",
        },
        {
          x: 3950,
          y: 4050,
          id: "NTk6Mjk1OjE0Nw",
        },
        {
          x: 2950,
          y: 4650,
          id: "NjA6OTk6NDIz",
        },
        {
          x: 650,
          y: 5550,
          id: "NjA6MzI2OjY5OQ",
        },
        {
          x: 1250,
          y: 4050,
          id: "NjA6MzI2OjMzOQ",
        },
      ],
      tokens: [
        {
          id: "npc68",
          x: 400,
          y: 800,
        },
        {
          id: "npc68",
          x: 500,
          y: 800,
        },
        {
          id: "npc68",
          x: 500,
          y: 600,
        },
        {
          id: "npc21",
          x: 1e3,
          y: 800,
        },
        {
          id: "npc21",
          x: 1e3,
          y: 500,
        },
        {
          id: "npc21",
          x: 1900,
          y: 800,
        },
        {
          id: "npc21",
          x: 1900,
          y: 500,
        },
        {
          id: "npc60",
          x: 600,
          y: 1400,
        },
        {
          id: "npc60",
          x: 600,
          y: 1200,
        },
        {
          id: "npc60",
          x: 900,
          y: 1200,
        },
        {
          id: "npc60",
          x: 900,
          y: 1400,
        },
        {
          id: "npc69",
          x: 1600,
          y: 1200,
        },
        {
          id: "npc69",
          x: 1800,
          y: 1100,
        },
        {
          id: "npc69",
          x: 2100,
          y: 1300,
        },
        {
          id: "npc69",
          x: 2100,
          y: 1500,
        },
        {
          id: "npc69",
          x: 1900,
          y: 1700,
        },
        {
          id: "npc69",
          x: 1600,
          y: 1600,
        },
        {
          id: "npc25",
          x: 3700,
          y: 600,
        },
        {
          id: "npc25",
          x: 4100,
          y: 600,
        },
        {
          id: "npc22",
          x: 3700,
          y: 2700,
        },
        {
          id: "npc22",
          x: 3800,
          y: 3e3,
        },
        {
          id: "npc22",
          x: 4e3,
          y: 2800,
        },
        {
          id: "hazard7",
          x: 1400,
          y: 2700,
        },
        {
          id: "hazard6",
          x: 800,
          y: 2200,
        },
        {
          id: "hazard1",
          x: 1800,
          y: 2e3,
        },
        {
          id: "npc58",
          x: 3800,
          y: 4e3,
        },
        {
          id: "npc20",
          x: 2900,
          y: 4900,
        },
        {
          id: "npc57",
          x: 300,
          y: 5200,
        },
        {
          id: "npc32",
          x: 1300,
          y: 4e3,
        },
        {
          id: "npc68",
          x: 1700,
          y: 3600,
        },
        {
          id: "npc68",
          x: 1700,
          y: 4400,
        },
        {
          id: "npc68",
          x: 600,
          y: 4400,
        },
        {
          id: "npc68",
          x: 800,
          y: 3500,
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
      page: 4,
      width: 1261,
      height: 1636,
    }),
    new CaptionImage({
      name: "journal4",
      page: 6,
      width: 1169,
      height: 780,
    }),
    new CaptionImage({
      name: "journal5",
      page: 26,
      width: 1161,
      height: 782,
    }),
    new CaptionImage({
      name: "journal6",
      page: 44,
      width: 476,
      height: 475,
    }),
    new CaptionImage({
      name: "journal7",
      page: 52,
      width: 1157,
      height: 770,
    }),
    new CaptionImage({
      name: "journal8",
      page: 62,
      width: 1262,
      height: 1636,
    }),
    new CaptionImage({
      name: "journal9",
      page: 68,
      width: 1259,
      height: 1636,
    }),
    new CaptionImage({
      name: "journal10",
      page: 74,
      width: 1262,
      height: 1636,
    }),
    new CaptionImage({
      name: "journal11",
      page: 95,
      width: 1294,
      height: 1669,
    }),
    new CaptionImage({
      name: "npc1",
      page: 1,
      width: 1041,
      height: 1606,
    }),
    new CaptionImage({
      name: "npc2",
      page: 10,
      width: 798,
      height: 1170,
    }),
    new CaptionImage({
      name: "npc3",
      page: 11,
      width: 805,
      height: 1273,
    }),
    new CaptionImage({
      name: "npc4",
      page: 12,
      width: 817,
      height: 994,
    }),
    new CaptionImage({
      name: "npc5",
      page: 13,
      width: 780,
      height: 1484,
    }),
    new CaptionImage({
      name: "npc6",
      page: 16,
      width: 724,
      height: 887,
    }),
    new CaptionImage({
      name: "npc7",
      page: 17,
      width: 667,
      height: 1172,
    }),
    new CaptionImage({
      name: "npc8",
      page: 18,
      width: 882,
      height: 885,
    }),
    new CaptionImage({
      name: "npc9",
      page: 22,
      width: 674,
      height: 1386,
    }),
    new CaptionImage({
      name: "npc10",
      page: 24,
      width: 732,
      height: 1308,
    }),
    new CaptionImage({
      name: "npc11",
      page: 25,
      width: 907,
      height: 1221,
    }),
    new CaptionImage({
      name: "npc12",
      page: 30,
      width: 776,
      height: 1036,
    }),
    new CaptionImage({
      name: "npc13",
      page: 32,
      width: 765,
      height: 1178,
    }),
    new CaptionImage({
      name: "npc14",
      page: 35,
      width: 836,
      height: 1334,
    }),
    new CaptionImage({
      name: "npc15",
      page: 36,
      width: 835,
      height: 1110,
    }),
    new CaptionImage({
      name: "npc16",
      page: 38,
      width: 614,
      height: 1138,
    }),
    new CaptionImage({
      name: "npc17",
      page: 42,
      width: 384,
      height: 507,
    }),
    new CaptionImage({
      name: "npc18",
      page: 43,
      width: 620,
      height: 1300,
    }),
    new CaptionImage({
      name: "npc19",
      page: 46,
      width: 1186,
      height: 909,
    }),
    new CaptionImage({
      name: "npc20",
      page: 48,
      width: 752,
      height: 1243,
    }),
    new CaptionImage({
      name: "npc21",
      page: 50,
      width: 868,
      height: 1009,
    }),
    new CaptionImage({
      name: "npc22",
      page: 55,
      width: 998,
      height: 1229,
    }),
    new CaptionImage({
      name: "npc23",
      page: 58,
      width: 903,
      height: 1008,
    }),
    new CaptionImage({
      name: "npc24",
      page: 66,
      width: 918,
      height: 1036,
    }),
    new CaptionImage({
      name: "npc25",
      page: 71,
      width: 886,
      height: 1237,
    }),
    new CaptionImage({
      name: "npc26",
      page: 73,
      width: 728,
      height: 1103,
    }),
    new CaptionImage({
      name: "npc27",
      page: 75,
      width: 501,
      height: 382,
    }),
    new CaptionImage({
      name: "npc28",
      page: 76,
      width: 317,
      height: 355,
    }),
    new CaptionImage({
      name: "npc29",
      page: 77,
      width: 426,
      height: 426,
    }),
    new CaptionImage({
      name: "npc30",
      page: 78,
      width: 426,
      height: 426,
    }),
    new CaptionImage({
      name: "npc31",
      page: 78,
      width: 525,
      height: 525,
    }),
    new CaptionImage({
      name: "npc32",
      page: 79,
      width: 719,
      height: 886,
    }),
    new CaptionImage({
      name: "npc33",
      page: 80,
      width: 843,
      height: 1193,
    }),
    new CaptionImage({
      name: "npc34",
      page: 81,
      width: 745,
      height: 1167,
    }),
    new CaptionImage({
      name: "npc35",
      page: 82,
      width: 1196,
      height: 1207,
    }),
    new CaptionImage({
      name: "npc36",
      page: 83,
      width: 774,
      height: 756,
    }),
    new CaptionImage({
      name: "npc37",
      page: 84,
      width: 830,
      height: 1003,
    }),
    new CaptionImage({
      name: "npc38",
      page: 85,
      width: 870,
      height: 917,
    }),
    new CaptionImage({
      name: "npc39",
      page: 86,
      width: 730,
      height: 1140,
    }),
    new CaptionImage({
      name: "npc40",
      page: 87,
      width: 855,
      height: 1189,
    }),
    new CaptionImage({
      name: "npc41",
      page: 89,
      width: 915,
      height: 1400,
    }),
    new CaptionImage({
      name: "npc42",
      page: 91,
      width: 786,
      height: 1504,
    }),
    new CaptionImage({
      name: "npc43",
      page: 93,
      width: 843,
      height: 1166,
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.qw2pk1zjvgxbeGBO",
      name: {
        page: 10,
        x: 233.0882,
        y: 167.8135,
      },
      page: 10,
      width: 798,
      height: 1170,
      tokenX: -164,
      tokenY: 56,
      tokenSize: 456,
      forIds: ["OToyOTU6NDgz"],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.h0Ztbh36be4rpJCz",
      name: {
        page: 11,
        x: 393.6672,
        y: 176.6736,
      },
      page: 11,
      width: 805,
      height: 1273,
      tokenX: -303,
      tokenY: -6,
      tokenSize: 388,
      forIds: ["MTE6Njg6NTQz"],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.hIWzgjW2E2K6ImPA",
      name: {
        page: 12,
        x: 200.9748,
        y: 143.8135,
      },
      page: 12,
      width: 817,
      height: 994,
      tokenX: -173,
      tokenY: -14,
      tokenSize: 423,
      forIds: [
        "MjQ6MzI2OjY5OQ",
        "MTY6MzI2OjUxOQ",
        "MTI6MzI2OjEyMw",
        "MTU6Mjk1OjI0Mw",
        "MTg6MzI2OjI2Nw",
      ],
    }),
    new ModuleNpc({
      id: "npc4",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.QLyDRZPvMsYGZEeN",
      name: {
        page: 13,
        x: 294.6801,
        y: 131.3997,
      },
      page: 13,
      width: 780,
      height: 1484,
      tokenX: -201,
      tokenY: -198,
      tokenSize: 484,
      forIds: ["MTQ6OTk6NDEx"],
    }),
    new ModuleNpc({
      id: "npc5",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.00s3MhFQ4yOp2rTf",
      page: 16,
      width: 724,
      height: 887,
      tokenX: -188,
      tokenY: -12,
      tokenSize: 430,
      forIds: ["MTY6MzI2OjQ1OQ"],
    }),
    new ModuleNpc({
      id: "npc6",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.jCJUvzs1FaL6PAkq",
      page: 17,
      width: 667,
      height: 1172,
      tokenX: -142,
      tokenY: -72,
      tokenSize: 458,
      forIds: ["MTc6MzMyOjExMQ"],
    }),
    new ModuleNpc({
      id: "npc7",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.h4SZ3U9at7aT0ASv",
      name: {
        page: 18,
        x: 300.76,
        y: 140.6736,
      },
      page: 18,
      width: 882,
      height: 885,
      tokenX: -76,
      tokenY: 70,
      tokenSize: 514,
      forIds: ["MTk6Njg6Mzg3"],
    }),
    new ModuleNpc({
      id: "npc8",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.QCPpQya5TEUuIxQn",
      name: {
        page: 22,
        x: 184.7361,
        y: 146.9534,
      },
      page: 22,
      width: 674,
      height: 1386,
      tokenX: -145,
      tokenY: 96,
      tokenSize: 615,
      forIds: ["MjI6MzI2OjY1MQ"],
    }),
    new ModuleNpc({
      id: "npc9",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.rArZ2y5xqSWeUU0G",
      name: {
        page: 24,
        x: 195.9032,
        y: 160.1335,
      },
      page: 24,
      width: 732,
      height: 1308,
      tokenX: -249,
      tokenY: -38,
      tokenSize: 394,
      forIds: ["MjQ6MzI2OjMzOQ"],
    }),
    new ModuleNpc({
      id: "npc10",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.OqoWbYOyHDGHEeHV",
      name: {
        page: 25,
        x: 326.7151,
        y: 167.8135,
      },
      page: 25,
      width: 907,
      height: 1221,
      tokenX: -120,
      tokenY: 41,
      tokenSize: 421,
      forIds: ["MjU6Njg6MzAz"],
    }),
    new ModuleNpc({
      id: "npc11",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.rArZ2y5xqSWeUU0G",
      name: {
        page: 30,
        x: 266.1863,
        y: 239.8135,
      },
      page: 30,
      width: 776,
      height: 1036,
      tokenX: -168,
      tokenY: 17,
      tokenSize: 293,
      forIds: ["MzA6OTk6NjE1"],
    }),
    new ModuleNpc({
      id: "npc12",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.DawBQWRyrM4cKfGI",
      name: {
        page: 32,
        x: 132.1072,
        y: 119.8135,
      },
      page: 32,
      width: 765,
      height: 1178,
      tokenX: -281,
      tokenY: 25,
      tokenSize: 321,
      forIds: ["MzI6MzI2OjYzOQ"],
    }),
    new ModuleNpc({
      id: "npc13",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.kzHRJGLvjOJk5WU7",
      name: {
        page: 35,
        x: 431.3121,
        y: 170.1924,
      },
      page: 35,
      width: 836,
      height: 1334,
      tokenX: -234,
      tokenY: -74,
      tokenSize: 363,
      forIds: ["MzU6Njg6Njk5"],
    }),
    new ModuleNpc({
      id: "npc14",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.kzHRJGLvjOJk5WU7",
      page: 35,
      width: 836,
      height: 1334,
      tokenX: -234,
      tokenY: -74,
      tokenSize: 363,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc14",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.OloMMRPtTQKF0x16",
      page: 36,
      width: 835,
      height: 1110,
      tokenX: -194,
      tokenY: 50,
      tokenSize: 396,
      forIds: ["Mzc6Mjk1OjU2Nw", "Mzc6Njg6NDU5"],
    }),
    new ModuleNpc({
      id: "npc15",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.3Ll0LCZcmQmb7aV3",
      name: {
        page: 38,
        x: 188.964,
        y: 119.8135,
      },
      page: 38,
      width: 614,
      height: 1138,
      tokenX: -195,
      tokenY: 57,
      tokenSize: 424,
      forIds: ["Mzg6MzI2OjU2Nw"],
    }),
    new ModuleNpc({
      id: "npc16",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.0hnnwyqLfYVIenzd",
      name: {
        page: 42,
        x: 276.4766,
        y: 329.9534,
      },
      page: 42,
      width: 384,
      height: 507,
      tokenX: 15,
      tokenY: 25,
      tokenSize: 450,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc17",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.tZCFmJonHkhGg1Vs",
      page: 43,
      width: 620,
      height: 1300,
      tokenX: -137,
      tokenY: -78,
      tokenSize: 272,
      forIds: ["ODY6MjUxOjYwMw", "NDE6Njg6OTk", "NDI6OTk6MTQ3"],
    }),
    new ModuleNpc({
      id: "npc18",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.irrXrWxJ0LYSUCQB",
      name: {
        page: 46,
        x: 141.5771,
        y: 212.6736,
      },
      page: 46,
      width: 1186,
      height: 909,
      tokenX: -67,
      tokenY: -6,
      tokenSize: 472,
      forIds: ["NDc6Njg6Mzk5"],
    }),
    new ModuleNpc({
      id: "npc19",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.MCgSMT680ic6kr5k",
      name: {
        page: 48,
        x: 134.0823,
        y: 134.9534,
      },
      page: 48,
      width: 752,
      height: 1243,
      tokenX: -290,
      tokenY: 24,
      tokenSize: 415,
      forIds: ["NDg6MzI2OjMwMw"],
    }),
    new ModuleNpc({
      id: "npc20",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.dWOK0nzGWyc5NkNz",
      name: {
        page: 50,
        x: 155.1333,
        y: 146.9534,
      },
      page: 50,
      width: 868,
      height: 1009,
      tokenX: -162,
      tokenY: -60,
      tokenSize: 409,
      forIds: ["NTE6Njg6Njk5", "NjA6OTk6OTk"],
    }),
    new ModuleNpc({
      id: "npc21",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.eoQgRltsgJWa4aeC",
      name: {
        page: 55,
        x: 324.4856,
        y: 158.9534,
      },
      page: 55,
      width: 998,
      height: 1229,
      tokenX: -133,
      tokenY: -63,
      tokenSize: 458,
      forIds: ["NTU6Njg6MTIz"],
    }),
    new ModuleNpc({
      id: "npc22",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.tXfiVIThQlBT6B1H",
      name: {
        page: 58,
        x: 109.0844,
        y: 104.6736,
      },
      page: 58,
      width: 903,
      height: 1008,
      tokenX: -160,
      tokenY: -78,
      tokenSize: 494,
      forIds: ["NTk6Njg6NDgz"],
    }),
    new ModuleNpc({
      id: "npc23",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.ChRgdkplhO1D81Lg",
      page: 80,
      width: 843,
      height: 1193,
      tokenX: -181,
      tokenY: -13,
      tokenSize: 422,
      forIds: ["ODA6MjUxOjYwMw", "Mzc6Mjk1OjIxOQ"],
    }),
    new ModuleNpc({
      id: "npc24",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.czQFet5Qo63IXtHl",
      page: 81,
      width: 745,
      height: 1167,
      tokenX: 102,
      tokenY: 65,
      tokenSize: 996,
      forIds: ["ODE6Njg6MzUx", "NDE6Njg6Mzg3"],
    }),
    new ModuleNpc({
      id: "npc25",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.YHYdZemNHp0fnWca",
      page: 82,
      width: 1196,
      height: 1207,
      tokenX: -127,
      tokenY: -144,
      tokenSize: 493,
      forIds: ["ODI6MzE0OjI5MQ", "NTk6Mjk1OjE5NQ"],
    }),
    new ModuleNpc({
      id: "npc26",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.2TOXR7nKS6xPng2Y",
      page: 83,
      width: 774,
      height: 756,
      tokenX: 66,
      tokenY: 120,
      tokenSize: 774,
      forIds: [
        "ODM6Njg6NTMx",
        "NTE6Mjk1OjM1MQ",
        "MTI6MzI2OjQ3MQ",
        "NTE6Mjk1Ojk5",
      ],
    }),
    new ModuleNpc({
      id: "npc27",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.DawBQWRyrM4cKfGI",
      page: 84,
      width: 830,
      height: 1003,
      tokenX: -242,
      tokenY: -8,
      tokenSize: 403,
      forIds: [
        "ODQ6MjUxOjYwMw",
        "MzM6Njg6NDEx",
        "Mjk6Njg6MjQz",
        "MjU6Njg6MjMx",
        "Mjk6Njg6NTA3",
      ],
    }),
    new ModuleNpc({
      id: "npc28",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.DawBQWRyrM4cKfGI",
      page: 84,
      width: 830,
      height: 1003,
      tokenX: -242,
      tokenY: -8,
      tokenSize: 403,
      forIds: ["MzM6Njg6NjM5", "MzE6Mjk1OjQxMQ"],
      elite: true,
    }),
    new ModuleNpc({
      id: "npc29",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.rArZ2y5xqSWeUU0G",
      page: 85,
      width: 870,
      height: 917,
      tokenX: -181,
      tokenY: 15,
      tokenSize: 374,
      forIds: ["ODU6Njg6NTA3", "MzE6Njg6MjY3", "MzE6Mjk1OjY5OQ"],
    }),
    new ModuleNpc({
      id: "npc30",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.Sbxt8YT0AOFfVCPX",
      page: 86,
      width: 730,
      height: 1140,
      tokenX: -148,
      tokenY: 50,
      tokenSize: 397,
      forIds: [
        "ODY6MjYzOjIxOQ",
        "NDE6Mjk1OjUwNw",
        "NDI6OTk6OTk",
        "NDM6Njg6NDM1",
        "NDQ6OTk6NTQz",
      ],
    }),
    new ModuleNpc({
      id: "npc31",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.OTT7CCkonkfwhJ8Y",
      page: 87,
      width: 855,
      height: 1189,
      tokenX: -363,
      tokenY: 24,
      tokenSize: 389,
      forIds: ["ODc6Njg6NDM1", "NDI6MzI2OjIzMQ"],
    }),
    new ModuleNpc({
      id: "npc32",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.DDJGNAh3rfyIupAb",
      page: 89,
      width: 915,
      height: 1400,
      tokenX: -213,
      tokenY: -187,
      tokenSize: 429,
      forIds: ["ODk6Njg6Njk5", "NjE6Mjk1OjY5OQ"],
    }),
    new ModuleNpc({
      id: "npc33",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.Np787X9Z4aQxOdCg",
      page: 91,
      width: 786,
      height: 1504,
      tokenX: -140,
      tokenY: -240,
      tokenSize: 390,
      forIds: ["OTE6Njg6Njk5", "NDM6Mjk1OjY1MQ"],
    }),
    new ModuleNpc({
      id: "npc34",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.JrowrtDilEG8dN2s",
      page: 93,
      width: 843,
      height: 1166,
      tokenX: -101,
      tokenY: 74,
      tokenSize: 366,
      forIds: ["OTM6Njg6NTY3", "MzM6Njg6MjMx"],
    }),
    new ModuleNpc({
      id: "npc35",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.DawBQWRyrM4cKfGI",
      name: {
        page: 29,
        x: 294.75,
        y: 375,
      },
      label: "DW",
      forIds: ["Mjk6Mjk1OjM3NQ"],
      elite: true,
    }),
    new ModuleNpc({
      id: "npc36",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.FFnsYr2aIfDGnUVS",
      label: "GFL",
      forIds: ["Mjk6Njg6NDU5", "NDA6MzI2OjYzOQ", "Mjk6Njg6MTk1"],
    }),
    new ModuleNpc({
      id: "npc37",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.WKsogmP2X2F68Zdm",
      name: {
        page: 39,
        x: 294.75,
        y: 159,
      },
      label: "D",
      forIds: ["Mzk6Mjk1OjE1OQ"],
    }),
    new ModuleNpc({
      id: "npc38",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.RFCxaIS4OkacCpxD",
      name: {
        page: 19,
        x: 294.75,
        y: 327,
      },
      label: "F",
      forIds: ["MTk6Mjk1OjMyNw"],
      weak: true,
    }),
    new ModuleNpc({
      id: "npc39",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.gWxpeqOQ54Jd4HTG",
      label: "CS",
      forIds: ["OToyOTU6OTk", "OTo2ODo0NTk"],
    }),
    new ModuleNpc({
      id: "npc40",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.1a5faH5CCtFfbQHO",
      label: "C",
      forIds: ["NDQ6MzI2OjQxMQ"],
    }),
    new ModuleNpc({
      id: "npc41",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.NW1Ax1QGE9W4DmiN",
      label: "C",
      forIds: ["NDI6OTk6MTk1", "Mzk6Njg6OTk"],
    }),
    new ModuleNpc({
      id: "npc42",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.aD76W2uEQhFFUrom",
      label: "C",
      forIds: ["MTU6Njg6MTQ3", "MTQ6MzI2OjU3OQ"],
    }),
    new ModuleNpc({
      id: "npc43",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.skz8n8N9GEQY2c90",
      label: "CG",
      forIds: ["NDc6Mjk1OjIzMQ"],
    }),
    new ModuleNpc({
      id: "npc44",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.78Vf1Lk9ph2RGDgL",
      label: "DD",
      forIds: ["ODI6MjUxOjYwMw", "NDQ6OTk6MjMx"],
    }),
    new ModuleNpc({
      id: "npc45",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.oKogG9AwUZ9iBsm3",
      label: "D",
      forIds: ["NDE6Njg6NTc5"],
    }),
    new ModuleNpc({
      id: "npc46",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.55SmPtsUXsridUjJ",
      label: "DBP",
      forIds: ["ODE6Njg6NjE1", "MjE6Njg6NTY3"],
    }),
    new ModuleNpc({
      id: "npc47",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.SUpy8sleRwi2Egsq",
      label: "D",
      forIds: ["MjE6Mjk1OjU0Mw"],
    }),
    new ModuleNpc({
      id: "npc48",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.ZGEf08j9q4fIPDFd",
      label: "DW",
      forIds: ["MTg6MzI2OjQ5NQ"],
    }),
    new ModuleNpc({
      id: "npc49",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.OqoWbYOyHDGHEeHV",
      label: "DH",
      forIds: [
        "ODQ6Mzc3OjI1NQ",
        "Mjk6Njg6NTU1",
        "MzA6OTk6NTY3",
        "MzE6Njg6NTY3",
        "MjM6Mjk1OjQ3MQ",
      ],
    }),
    new ModuleNpc({
      id: "npc50",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.Upf2fOZ6QgGG3seI",
      label: "SG",
      forIds: ["NTQ6MzI2OjE0Nw"],
      elite: true,
    }),
    new ModuleNpc({
      id: "npc51",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.xdIHvCBspeSXRL6A",
      label: "G",
      forIds: ["MjA6MzI2OjU2Nw"],
    }),
    new ModuleNpc({
      id: "npc52",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.Iwk2qT4lVyrvoz3B",
      label: "G",
      forIds: ["NDY6OTk6NjYz"],
    }),
    new ModuleNpc({
      id: "npc53",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.eP4a0FAbus3tNTbc",
      label: "GS",
      forIds: ["MjE6Njg6MzAz"],
    }),
    new ModuleNpc({
      id: "npc54",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.00s3MhFQ4yOp2rTf",
      name: {
        page: 17,
        x: 294.75,
        y: 603,
      },
      label: "ECOB",
      forIds: ["MTc6Mjk1OjYwMw"],
    }),
    new ModuleNpc({
      id: "npc55",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.VBXjZ1jYxdKf64B7",
      name: {
        page: 30,
        x: 99,
        y: 519,
      },
      label: "DR",
      forIds: ["MzA6OTk6NTE5"],
    }),
    new ModuleNpc({
      id: "npc56",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.A4VgQIHsqJKssQOM",
      label: "HS",
      forIds: ["MjM6Mjk1OjI0Mw"],
    }),
    new ModuleNpc({
      id: "npc57",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.FuvlS0DHfooobGiN",
      label: "I",
      forIds: ["NjA6MzI2OjQyMw"],
    }),
    new ModuleNpc({
      id: "npc58",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.kElZCC1zMQVftoi9",
      label: "I",
      forIds: ["NjA6OTk6NDcx"],
    }),
    new ModuleNpc({
      id: "npc59",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.f15mNNhOT3aq66VQ",
      label: "K",
      forIds: ["MTU6Njg6OTk"],
    }),
    new ModuleNpc({
      id: "npc60",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.tlz1pWkPehmFj6YS",
      label: "MS",
      forIds: ["NTU6Njg6NTMx"],
    }),
    new ModuleNpc({
      id: "npc61",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.D2Pe38jYbeBxUaxU",
      label: "N",
      forIds: ["MjI6MzI2Ojk5"],
    }),
    new ModuleNpc({
      id: "npc62",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.2jtRdYo9ey7osDUH",
      label: "O",
      forIds: ["NDU6Mjk1OjM4Nw"],
    }),
    new ModuleNpc({
      id: "npc63",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.V6CX3rQPq8iqQccW",
      label: "O",
      forIds: ["MTE6Njg6OTk"],
    }),
    new ModuleNpc({
      id: "npc64",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.OqoWbYOyHDGHEeHV",
      name: {
        page: 27,
        x: 67.5,
        y: 207,
      },
      label: "DH",
      forIds: ["Mjc6Njg6MjA3"],
    }),
    new ModuleNpc({
      id: "npc65",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.ZXbr1ke1vF0ZFKY3",
      label: "R",
      forIds: ["MTY6OTk6NTY3"],
    }),
    new ModuleNpc({
      id: "npc66",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.xz2NZqSG5YVl17dc",
      label: "S",
      forIds: ["NDU6Njg6Mjc5"],
    }),
    new ModuleNpc({
      id: "npc67",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.V4rVnbjJbcOIdC4Z",
      label: "SH",
      forIds: ["MTU6Mjk1OjY5OQ"],
    }),
    new ModuleNpc({
      id: "npc68",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.2TOXR7nKS6xPng2Y",
      name: {
        page: 56,
        x: 99,
        y: 147,
      },
      label: "DW",
      forIds: ["NjE6Mjk1OjY1MQ", "NTY6OTk6MTQ3"],
      elite: true,
    }),
    new ModuleNpc({
      id: "npc69",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.HNEUSYnInffvGPHK",
      label: "S",
      forIds: ["NTM6Njg6MjMx"],
    }),
    new ModuleNpc({
      id: "npc70",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.rArZ2y5xqSWeUU0G",
      name: {
        page: 30,
        x: 326.25,
        y: 351,
      },
      label: "DS",
      forIds: ["MzA6MzI2OjM1MQ"],
    }),
    new ModuleNpc({
      id: "npc71",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.Jxp6YG8S7st2MZ3p",
      label: "UT",
      forIds: [
        "NDI6OTk6MjQz",
        "NDM6Njg6NDgz",
        "NDM6Mjk1OjY5OQ",
        "NDI6MzI2OjI3OQ",
      ],
    }),
    new ModuleNpc({
      id: "npc72",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.Pmgt9aAtUiLEagD6",
      label: "UW",
      forIds: ["NDI6OTk6Mjkx"],
    }),
    new ModuleNpc({
      id: "npc73",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.KgJq51AeYrENo3Db",
      label: "W",
      forIds: ["ODozMjY6MjU1"],
    }),
    new ModuleNpc({
      id: "hazard1",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.PphyArSCoxkaI6IS",
      label: "BGT",
      forIds: ["NTQ6OTk6MTcx"],
    }),
    new ModuleNpc({
      id: "hazard2",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.neNlIrZOs6zOODoe",
      label: "BT",
      forIds: ["NDc6Mjk1OjY5OQ"],
    }),
    new ModuleNpc({
      id: "hazard3",
      actorUuid: "Compendium.pf2e.hazards.Actor.xkqjwu1ox0pQLOnb",
      label: "BP",
      forIds: ["NTE6Mjk1OjYwMw"],
    }),
    new ModuleNpc({
      id: "hazard4",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.s8Ofcsub5QJJmgA5",
      label: "DF",
      forIds: ["NDA6MzI2OjIzMQ"],
    }),
    new ModuleNpc({
      id: "hazard5",
      actorUuid: "Compendium.pf2e.hazards.Actor.LLPsEKLoVmoPleJS",
      label: "GS",
      forIds: ["NDY6MzI2OjY5OQ"],
    }),
    new ModuleNpc({
      id: "hazard6",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.9BEHjBWRs0st7IVv",
      label: "IoF",
      forIds: ["NTc6Njg6NDgz"],
    }),
    new ModuleNpc({
      id: "hazard7",
      actorUuid:
        "Compendium.pf2e.abomination-vaults-bestiary.Actor.fvijt2whssxJzxCF",
      label: "IoP",
      forIds: ["NTc6Mjk1OjQ5NQ"],
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
          id: "NzozNzE6NDgz",
        },
        {
          id: "ODoxMTU6Njc1",
        },
        {
          id: "NjozMjY6MjA3",
        },
        {
          id: "Nzo2ODo0NTk",
        },
        {
          id: "Nzo2ODozMjc",
        },
        {
          id: "ODo5OTozMjc",
        },
        {
          id: "ODo5OToyMzE",
        },
        {
          id: "ODozMjY6Njk5",
        },
        {
          id: "ODozMjY6NTQz",
        },
        {
          id: "ODozMjY6MTgz",
        },
        {
          id: "OTo2ODo0MTE",
        },
        {
          id: "OTo2ODoyMzE",
        },
        {
          id: "OToyOTU6NjYz",
        },
        {
          id: "MTA6OTk6NjYz",
        },
        {
          id: "MTA6MzI2OjMyNw",
        },
        {
          id: "MTI6OTk6NTU1",
        },
        {
          id: "MTI6MzI2OjY5OQ",
        },
        {
          id: "MTI6MzI2OjQyMw",
        },
        {
          id: "MTM6Njg6Njk5",
        },
        {
          id: "MTQ6OTk6MzE1",
        },
        {
          id: "MTQ6OTk6MTcx",
        },
        {
          id: "MTQ6MzI2OjQ1OQ",
        },
        {
          id: "MTU6Njg6NTkx",
        },
        {
          id: "MTU6Mjk1OjY1MQ",
        },
        {
          id: "MTU6Mjk1OjE3MQ",
        },
        {
          id: "MTY6OTk6NTE5",
        },
        {
          id: "MTc6Njg6NDk1",
        },
        {
          id: "MTc6MzM2OjQ0Nw",
        },
        {
          id: "MTg6OTk6NjE1",
        },
        {
          id: "MTg6OTk6NTA3",
        },
        {
          id: "MTg6MzI2OjQ0Nw",
        },
        {
          id: "MTg6NDIxOjE5NQ",
        },
        {
          id: "MTk6Njg6MzM5",
        },
        {
          id: "MTk6Njg6MTQ3",
        },
        {
          id: "MTk6Mjk1OjI3OQ",
        },
        {
          id: "MjA6OTk6Njk5",
        },
        {
          id: "MjA6OTk6NDU5",
        },
        {
          id: "MjA6OTk6MzM5",
        },
        {
          id: "MjA6OTk6MTgz",
        },
        {
          id: "MjA6MzI2OjQ4Mw",
        },
        {
          id: "MjA6MzI2OjI1NQ",
        },
        {
          id: "MjE6Njg6NTE5",
        },
        {
          id: "MjE6Njg6MjA3",
        },
        {
          id: "MjE6Mjk1OjQ5NQ",
        },
        {
          id: "MjE6Mjk1OjIzMQ",
        },
        {
          id: "MjI6MzI2OjUwNw",
        },
        {
          id: "MjM6Njg6NjM5",
        },
        {
          id: "MjM6Njg6MzAz",
        },
        {
          id: "MjM6Mjk1OjM4Nw",
        },
        {
          id: "MjM6Mjk1OjE5NQ",
        },
        {
          id: "MjQ6MzI2OjYzOQ",
        },
        {
          id: "MjQ6MzI2OjIwNw",
        },
        {
          id: "MjU6Njg6OTk",
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
          id: "Mjc6MzcxOjUxOQ",
        },
        {
          id: "MzQ6MTE1OjY3NQ",
        },
        {
          id: "NDA6MTE1OjY3NQ",
        },
        {
          id: "NDE6MzExOjY3NQ",
        },
        {
          id: "NDI6MTE1OjY3NQ",
        },
        {
          id: "MjY6OTk6MTEx",
        },
        {
          id: "MjY6MzI2OjEyMw",
        },
        {
          id: "Mjc6Njg6NjI3",
        },
        {
          id: "Mjc6Njg6NDQ3",
        },
        {
          id: "Mjc6Njg6MzE1",
        },
        {
          id: "Mjc6Njg6MTU5",
        },
        {
          id: "Mjk6Njg6MzYz",
        },
        {
          id: "Mjk6Njg6MTQ3",
        },
        {
          id: "Mjk6Mjk1OjYwMw",
        },
        {
          id: "Mjk6Mjk1OjMyNw",
        },
        {
          id: "MzA6MzI2OjU0Mw",
        },
        {
          id: "MzA6MzI2OjI1NQ",
        },
        {
          id: "MzA6MzYxOjEyMw",
        },
        {
          id: "MzE6Njg6NDgz",
        },
        {
          id: "MzE6Njg6MjE5",
        },
        {
          id: "MzE6Mjk1OjYxNQ",
        },
        {
          id: "MzE6Mjk1OjM2Mw",
        },
        {
          id: "MzE6Mjk1OjIwNw",
        },
        {
          id: "MzI6MzI2OjE4Mw",
        },
        {
          id: "MzM6Njg6NTkx",
        },
        {
          id: "MzM6Njg6MzYz",
        },
        {
          id: "MzM6Njg6MTQ3",
        },
        {
          id: "MzQ6MzI2OjE5NQ",
        },
        {
          id: "MzU6Njg6MjE5",
        },
        {
          id: "MzY6MzI2OjY1MQ",
        },
        {
          id: "MzY6MzI2OjUwNw",
        },
        {
          id: "MzY6MzI2OjEyMw",
        },
        {
          id: "Mzc6Mjk1OjY5OQ",
        },
        {
          id: "Mzc6Mjk1OjUxOQ",
        },
        {
          id: "Mzc6Mjk1OjE3MQ",
        },
        {
          id: "Mzg6OTk6Njk5",
        },
        {
          id: "Mzk6Njg6MzM5",
        },
        {
          id: "Mzk6Njg6MjQz",
        },
        {
          id: "Mzk6Mjk1OjY5OQ",
        },
        {
          id: "Mzk6Mjk1OjQ3MQ",
        },
        {
          id: "NDA6OTk6MzI3",
        },
        {
          id: "NDA6MzI2OjUzMQ",
        },
        {
          id: "NDE6Njg6NTMx",
        },
        {
          id: "NDE6Njg6MzM5",
        },
        {
          id: "NDE6Mjk1OjM5OQ",
        },
        {
          id: "NDI6MzI2OjY5OQ",
        },
        {
          id: "NDM6Njg6NjM5",
        },
        {
          id: "NDM6Njg6Mzg3",
        },
        {
          id: "NDQ6OTk6NjYz",
        },
        {
          id: "NDQ6OTk6NDIz",
        },
        {
          id: "NDQ6OTk6MTgz",
        },
        {
          id: "NDQ6MzM4OjY1MQ",
        },
        {
          id: "NDQ6MzI2OjE3MQ",
        },
        {
          id: "NDU6Njg6NTkx",
        },
        {
          id: "NDU6Njg6NDgz",
        },
        {
          id: "NDU6Njg6MjMx",
        },
        {
          id: "NDU6Mjk1OjY5OQ",
        },
        {
          id: "NDU6Mjk1OjU5MQ",
        },
        {
          id: "NDU6Mjk1OjMzOQ",
        },
        {
          id: "NDU6Mjk1OjE3MQ",
        },
        {
          id: "NDY6OTk6NjE1",
        },
        {
          id: "NDY6MzI2OjU5MQ",
        },
        {
          id: "NDc6Njg6Mjkx",
        },
        {
          id: "NDc6Mjk1OjQ4Mw",
        },
        {
          id: "NDc6Mjk1OjE4Mw",
        },
        {
          id: "NDg6OTk6Njk5",
        },
        {
          id: "NDg6MzI2OjY1MQ",
        },
        {
          id: "NDk6Njg6Njk5",
        },
        {
          id: "NDk6Njg6NTE5",
        },
        {
          id: "NDk6Mjk1OjMyNw",
        },
        {
          id: "NDk6Mjk1OjE3MQ",
        },
        {
          id: "NTA6OTk6NTQz",
        },
        {
          id: "NTE6Njg6MTEx",
        },
        {
          id: "NTE6Mjk1OjU1NQ",
        },
        {
          id: "NTE6Mjk1OjMwMw",
        },
      ],
    },
    {
      name: "Chapter 3",
      pages: [
        {
          id: "NTI6MjM4OjM1NQ",
        },
        {
          id: "NTM6MzcxOjY5OQ",
        },
        {
          id: "NTI6MzI2OjI3OQ",
        },
        {
          id: "NTQ6MTE1OjY3NQ",
        },
        {
          id: "NTI6MzI2OjE0Nw",
        },
        {
          id: "NTM6Njg6NDcx",
        },
        {
          id: "NTM6Njg6MTU5",
        },
        {
          id: "NTQ6OTk6NDEx",
        },
        {
          id: "NTQ6MzI2OjM2Mw",
        },
        {
          id: "NTU6Njg6Njk5",
        },
        {
          id: "NTU6Njg6NDgz",
        },
        {
          id: "NTY6OTk6NTQz",
        },
        {
          id: "NTY6MzI2OjYzOQ",
        },
        {
          id: "NTY6MzI2OjM5OQ",
        },
        {
          id: "NTc6Njg6Njk5",
        },
        {
          id: "NTc6Njg6MTgz",
        },
        {
          id: "NTc6Mjk1OjE3MQ",
        },
        {
          id: "NTg6OTk6Njk5",
        },
        {
          id: "NTg6MzI2OjYxNQ",
        },
        {
          id: "NTk6Njg6MTEx",
        },
        {
          id: "NTk6Mjk1OjE0Nw",
        },
        {
          id: "NjA6OTk6NDIz",
        },
        {
          id: "NjA6MzI2OjY5OQ",
        },
        {
          id: "NjA6MzI2OjMzOQ",
        },
        {
          id: "NTk6MzExOjY3NQ",
        },
        {
          id: "NjE6Mjk1OjYwMw",
        },
        {
          id: "NjE6Mjk1OjIxOQ",
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
    {
      name: "Back Matter",
      pages: [
        {
          id: "NjM6MTA3OjYxNw",
        },
        {
          id: "NjM6MzcyOjQ3MQ",
        },
        {
          id: "NjQ6MzI2OjY5OQ",
        },
        {
          id: "NjU6Njg6Njk5",
        },
        {
          id: "NjU6Njg6MzAz",
        },
        {
          id: "NjU6Mjk1OjQ3MQ",
        },
        {
          id: "NjU6Mjk1OjE4Mw",
        },
        {
          id: "NjY6OTk6NjE1",
        },
        {
          id: "NjY6MzI2OjQ4Mw",
        },
        {
          id: "Njc6MTE1OjQ1OQ",
        },
        {
          id: "Njc6Njg6Mjc5",
        },
        {
          id: "Njc6Njg6MTU5",
        },
        {
          id: "Njk6NzY6NjQ4",
        },
        {
          id: "Njk6Njg6Mjkx",
        },
        {
          id: "NzA6OTk6NDIz",
        },
        {
          id: "NzE6Njg6Mjc5",
        },
        {
          id: "NzE6Njg6MTgz",
        },
        {
          id: "NzE6Mjk1OjYyNw",
        },
        {
          id: "NzI6OTk6NDEx",
        },
        {
          id: "NzI6OTk6Mjkx",
        },
        {
          id: "NzI6OTk6MTIz",
        },
        {
          id: "NzI6MzI2OjY5OQ",
        },
        {
          id: "NzI6MzI2OjUwNw",
        },
        {
          id: "NzI6MzI2OjM1MQ",
        },
        {
          id: "NzI6MzI2OjE5NQ",
        },
        {
          id: "NzM6Njg6NjM5",
        },
        {
          id: "NzM6Njg6NDgz",
        },
        {
          id: "NzM6Njg6MjQz",
        },
        {
          id: "NzM6Mjk1OjI0Mw",
        },
        {
          id: "NzU6MTMwOjY0OA",
        },
        {
          id: "NzU6Njg6NDQ3",
        },
        {
          id: "NzU6Njg6MTgz",
        },
        {
          id: "NzU6Mzk1OjMzOQ",
        },
        {
          id: "NzU6Mjk1OjE4Mw",
        },
        {
          id: "NzU6Mjk1OjEzNQ",
        },
        {
          id: "NzY6MzI2OjU1NQ",
        },
        {
          id: "NzY6Mzc4OjI5MQ",
        },
        {
          id: "Nzc6Njg6Njk5",
        },
        {
          id: "Nzc6Njg6MTM1",
        },
        {
          id: "Nzk6Njg6Njk5",
        },
        {
          id: "ODA6MjUxOjY5OQ",
        },
        {
          id: "ODE6Njg6Njk5",
        },
        {
          id: "ODE6Njg6NjUx",
        },
        {
          id: "ODE6Njg6Mzk5",
        },
        {
          id: "ODI6MjUxOjY5OQ",
        },
        {
          id: "ODI6MjUxOjY1MQ",
        },
        {
          id: "ODI6MzUyOjMzOQ",
        },
        {
          id: "ODM6Njg6Njk5",
        },
        {
          id: "ODQ6MjUxOjY5OQ",
        },
        {
          id: "ODQ6MjUxOjYzOQ",
        },
        {
          id: "ODQ6MzYzOjMwMw",
        },
        {
          id: "ODU6Njg6NTU1",
        },
        {
          id: "ODY6MjUxOjY5OQ",
        },
        {
          id: "ODY6MjUxOjY1MQ",
        },
        {
          id: "ODY6MjUxOjI2Nw",
        },
        {
          id: "ODc6Njg6NTQz",
        },
        {
          id: "ODg6NzA6NjMw",
        },
        {
          id: "ODg6OTk6Mzk5",
        },
        {
          id: "OTA6MjEwOjYzMA",
        },
        {
          id: "OTA6MzI2OjE4Mw",
        },
        {
          id: "OTI6ODQ6NjMx",
        },
        {
          id: "OTI6MzI2OjE4Mw",
        },
        {
          id: "NjQ6MTE1OjY3NQ",
        },
        {
          id: "NzA6MTE1OjY3NQ",
        },
        {
          id: "NzI6MTE1OjY3NQ",
        },
        {
          id: "NzY6OTk6Njk5",
        },
        {
          id: "ODA6MTEzOjY2Mw",
        },
        {
          id: "ODE6MzcxOjY2Mw",
        },
        {
          id: "ODI6MTUzOjY2Mw",
        },
        {
          id: "ODM6MzcxOjY2Mw",
        },
        {
          id: "ODQ6MTQxOjY2Mw",
        },
        {
          id: "ODU6MzcxOjY2Mw",
        },
        {
          id: "ODY6MTU1OjY2Mw",
        },
        {
          id: "ODc6MzcxOjY2Mw",
        },
      ],
    },
  ];
  combines = [];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "EYES OF EMPTY DEATH" &&
        t.fontId === "DwarvenAxeBB:44",
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    this.markStartOfLine(text, 80, 383.5, 543);
    this.markStartOfLine(text, 80, 392.5, 531);
    this.markStartOfLine(text, 80, 395.5, 519);
    this.markStartOfLine(text, 80, 396.5, 507);
    this.markStartOfLine(text, 80, 320.5, 447);
    this.markStartOfLine(text, 80, 326.5, 375);
    this.markStartOfLine(text, 80, 332.5, 339);
    this.markStartOfLine(text, 80, 347.5, 315);
    this.markStartOfLine(text, 80, 354.5, 303);
    this.markStartOfLine(text, 80, 357.5, 291);
    this.markStartOfLine(text, 80, 252.5, 279);
    this.markStartOfLine(text, 82, 371.4999, 471);
    this.markStartOfLine(text, 82, 380.4999, 459);
    this.markStartOfLine(text, 82, 387.4999, 447);
    this.markStartOfLine(text, 82, 390.4999, 435);
    this.markStartOfLine(text, 82, 390.4999, 387);
    this.markStartOfLine(text, 82, 320.4999, 267);
    this.markStartOfLine(text, 82, 320.4999, 255);
    this.markStartOfLine(text, 82, 318.4999, 243);
    this.markStartOfLine(text, 82, 281.4999, 231);
    this.markStartOfLine(text, 82, 260.4999, 219);
    this.markStartOfLine(text, 84, 314.4999, 459);
    this.markStartOfLine(text, 84, 317.4999, 447);
    this.markStartOfLine(text, 84, 300.4999, 423);
    this.markStartOfLine(text, 84, 306.4999, 411);
    this.markStartOfLine(text, 84, 307.4999, 399);
    this.markStartOfLine(text, 84, 303.5, 375);
    this.markStartOfLine(text, 84, 364.5, 339);
    this.markStartOfLine(text, 84, 375.5, 231);
    this.markStartOfLine(text, 84, 373.5, 219);
    this.markStartOfLine(text, 84, 370.5, 207);
    this.markStartOfLine(text, 84, 365.5, 183);
    this.markStartOfLine(text, 84, 363.5, 171);
    this.markStartOfLine(text, 84, 360.5, 147);
    this.markStartOfLine(text, 84, 359.5, 135);
    this.markStartOfLine(text, 84, 372.5, 111);
    this.markStartOfLine(text, 84, 386.5, 99);
    this.markStartOfLine(text, 86, 273.5, 195);
    this.markStartOfLine(text, 86, 280.5, 183);
    this.markStartOfLine(text, 86, 285.5, 159);
    this.markStartOfLine(text, 86, 285.5, 171);
    this.markStartOfLine(text, 86, 290.5, 147);
    this.markStartOfLine(text, 86, 300.5, 135);
    this.markStartOfLine(text, 86, 312.5, 123);
    this.markStartOfLine(text, 86, 332.5, 99);
    this.markStartOfLine(text, 93, 356.75, 567);
    return super.extractDetails(text, moduleData, sectionKey);
  }
}
