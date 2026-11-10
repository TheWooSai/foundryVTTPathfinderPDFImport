import { AgeOfAshesBase } from "./base.js";
import { AdventureImage } from "../../core/images.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class AgeOfAshes3 extends AgeOfAshesBase {
  prefix = "age-of-ashes3";
  fullName = "Age of Ashes - Tomorrow Must Burn";
  pages = [
    this.ChapterHeadingPageLayout(6),
    this.RightSingleColumnWithSidebar(7),
    this.LeftTwoColumn(8),
    this.RightTwoColumnWithRightCutout(9, 330),
    this.LeftTwoColumn(10),
    this.RightTwoColumn(11),
    this.LeftTwoColumn(12),
    this.RightTwoColumn(13),
    this.LeftTwoColumnWithMap(14, 327),
    this.RightTwoColumn(15),
    this.LeftTwoColumn(16),
    this.RightTwoColumn(17),
    this.LeftTwoColumn(18),
    this.RightTwoColumn(19),
    this.LeftTwoColumn(20),
    this.RightTwoColumn(21),
    this.LeftTwoColumnWithMap(22, 327),
    this.RightTwoColumn(23),
    this.LeftTwoColumnWithMap(24, 327),
    this.RightTwoColumn(25),
    this.LeftTwoColumn(26),
    this.RightTwoColumn(27),
    this.ChapterHeadingPageLayout(28),
    this.RightSingleColumnWithSidebar(29),
    this.LeftTwoColumnWithMap(30, 327),
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
    this.RightTwoColumn(47),
    this.ChapterHeadingPageLayout(48),
    this.RightSingleColumnWithSidebar(49),
    this.RightTwoColumn(51),
    this.LeftTwoColumn(52),
    this.RightTwoColumn(53),
    this.LeftTwoColumn(54),
    this.RightTwoColumn(55),
    this.LeftTwoColumn(56),
    this.RightTwoColumn(57),
    this.LeftTwoColumn(58),
    this.RightTwoColumn(59),
    this.RightTwoColumn(73),
    this.LeftTwoColumn(74),
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
    this.LeftTwoColumn(88),
    this.RightTwoColumn(89),
    this.LeftTwoColumn(90),
    this.RightTwoColumn(91),
    this.LeftTwoColumn(92),
    this.RightTwoColumn(93),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      canonical: {
        name: "aoa3/map1",
        priority: 0,
      },
      nameInfo: {
        x: 23.31,
        y: 726.6831,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 1260,
      height: 1637,
      gridType: "gridless",
      imageLeft: 0,
      imageTop: 0,
      imageRight: 1e3,
      imageBottom: 1e3,
      imageRows: 10,
      imageCols: 10,
    }),
    new ModuleScene({
      name: "map2",
      canonical: {
        name: "aoa3/map2",
        priority: 0,
      },
      nameInfo: {
        x: 210,
        y: 535.6681,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 8,
      width: 521,
      height: 714,
      imageLeft: 107,
      imageTop: 137,
      imageRight: 407,
      imageBottom: 586,
      imageRows: 9,
      imageCols: 6,
      detailsFile: "/aoa/maps/aoa3-map2.json",
      journals: [
        {
          x: 950,
          y: 1250,
          id: "ODozMjY6Njk5",
        },
        {
          x: 650,
          y: 650,
          id: "OTo2ODo0NzE",
        },
        {
          x: 1050,
          y: 650,
          id: "MTA6MzI2OjE1OQ",
        },
        {
          x: 150,
          y: 450,
          id: "ODo5OToxNzE",
        },
      ],
      tokens: [
        {
          id: "npc55",
          x: 800,
          y: 1200,
        },
        {
          id: "npc1",
          x: 700,
          y: 800,
        },
        {
          id: "npc52",
          x: 400,
          y: 800,
        },
        {
          id: "npc52",
          x: 800,
          y: 500,
        },
        {
          id: "npc52",
          x: 400,
          y: 500,
        },
      ],
    }),
    new ModuleScene({
      name: "map3",
      canonical: {
        name: "aoa3/map3",
        priority: 0,
      },
      nameInfo: {
        x: 232,
        y: 687,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 14,
      width: 1129,
      height: 1055,
      imageLeft: 79,
      imageRight: 1028,
      imageCols: 23,
      imageTop: 272,
      imageBottom: 765,
      imageRows: 12,
      globalLight: true,
      detailsFile: "/aoa/maps/aoa3-map3.json",
      journals: [
        {
          x: 950,
          y: 1950,
          id: "MTM6Njg6NjI3",
        },
        {
          x: 1950,
          y: 1250,
          id: "MTM6Njg6MjU1",
        },
        {
          x: 1950,
          y: 1950,
          id: "MTQ6OTk6MTU5",
        },
        {
          x: 2950,
          y: 1950,
          id: "MTU6Njg6NDEx",
        },
        {
          x: 550,
          y: 1550,
          id: "MTI6MzI2OjY5OQ",
        },
      ],
      tokens: [
        {
          id: "npc56",
          x: 1900,
          y: 1500,
        },
        {
          id: "npc45",
          x: 1700,
          y: 2e3,
        },
        {
          id: "npc38",
          x: 1800,
          y: 2e3,
          elite: true,
        },
        {
          id: "npc2",
          x: 2700,
          y: 1700,
        },
        {
          id: "npc53",
          x: 2700,
          y: 1900,
        },
        {
          id: "npc22",
          x: 2900,
          y: 1600,
        },
      ],
    }),
    new ModuleScene({
      name: "map4",
      canonical: {
        name: "aoa3/map4",
        priority: 0,
      },
      nameInfo: {
        x: 99,
        y: 753,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 22,
      width: 1259,
      height: 905,
      imageLeft: 7,
      imageRight: 739,
      imageCols: 22,
      imageTop: 22,
      imageBottom: 885,
      imageRows: 26,
      globalLight: true,
      detailsFile: "/aoa/maps/aoa3-map4.json",
      journals: [
        {
          x: 1750,
          y: 2250,
          id: "MTk6Njg6Mjkx",
        },
        {
          x: 2650,
          y: 1950,
          id: "MjA6OTk6NDk1",
        },
        {
          x: 2650,
          y: 2650,
          id: "MjA6MzI2OjIxOQ",
        },
        {
          x: 4050,
          y: 1950,
          id: "MjE6Njg6MjY3",
        },
        {
          x: 4050,
          y: 2750,
          id: "MjE6Mjk1OjExMQ",
        },
        {
          x: 950,
          y: 950,
          id: "MTk6Njg6NjAz",
        },
      ],
      tokens: [
        {
          id: "npc52",
          x: 1400,
          y: 1700,
        },
        {
          id: "npc20",
          x: 1700,
          y: 2e3,
        },
        {
          id: "npc20",
          x: 1800,
          y: 2300,
        },
        {
          id: "npc20",
          x: 1600,
          y: 2300,
        },
        {
          id: "npc4",
          x: 2500,
          y: 2200,
        },
        {
          id: "npc5",
          x: 2700,
          y: 2e3,
        },
        {
          id: "npc5",
          x: 2500,
          y: 2e3,
        },
        {
          id: "npc3",
          x: 3900,
          y: 1800,
        },
        {
          id: "npc3",
          x: 4100,
          y: 2e3,
        },
        {
          id: "npc3",
          x: 4200,
          y: 1800,
        },
        {
          id: "npc3",
          x: 3800,
          y: 2100,
        },
      ],
    }),
    new ModuleScene({
      name: "map5",
      canonical: {
        name: "aoa3/map5",
        priority: 0,
      },
      nameInfo: {
        x: 99,
        y: 753,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 24,
      width: 1259,
      height: 905,
      cropLeft: 0,
      cropTop: 0,
      cropRight: 550,
      cropBottom: 905,
      imageLeft: 25,
      imageRight: 524,
      imageCols: 18,
      imageTop: 3,
      imageBottom: 888,
      imageRows: 32,
      globalLight: true,
      detailsFile: "/aoa/maps/aoa3-map5.json",
      journals: [
        {
          x: 1450,
          y: 1450,
          id: "MjQ6MzI2OjI0Mw",
        },
        {
          x: 1450,
          y: 2050,
          id: "MjU6Njg6MzUx",
        },
        {
          x: 1450,
          y: 3450,
          id: "MjY6MzI2OjY5OQ",
        },
      ],
      tokens: [
        {
          id: "npc6",
          x: 1400,
          y: 1900,
        },
        {
          id: "npc40",
          x: 2100,
          y: 2300,
        },
        {
          id: "npc40",
          x: 500,
          y: 2200,
        },
      ],
    }),
    new ModuleScene({
      name: "map6",
      canonical: {
        name: "aoa3/map6",
        priority: 0,
      },
      nameInfo: {
        x: 285,
        y: 753,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 24,
      width: 1259,
      height: 905,
      cropLeft: 552,
      cropTop: 0,
      cropRight: 1259,
      cropBottom: 905,
      imageLeft: 559,
      imageRight: 1253,
      imageCols: 20,
      imageTop: 8,
      imageBottom: 873,
      imageRows: 25,
      detailsFile: "/aoa/maps/aoa3-map6.json",
      journals: [
        {
          x: 1350,
          y: 1650,
          id: "MjM6Njg6NjI3",
        },
        {
          x: 850,
          y: 2150,
          id: "MjM6Njg6MTk1",
        },
        {
          x: 550,
          y: 1150,
          id: "MjI6OTk6MTgz",
        },
      ],
      tokens: [
        {
          id: "npc46",
          x: 800,
          y: 1600,
        },
        {
          id: "npc46",
          x: 1300,
          y: 2100,
        },
        {
          id: "npc46",
          x: 1200,
          y: 1700,
        },
      ],
    }),
    new ModuleScene({
      name: "map7",
      canonical: {
        name: "aoa3/map7",
        priority: 0,
      },
      nameInfo: {
        x: 99,
        y: 726.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 30,
      width: 1259,
      height: 905,
      imageLeft: 18,
      imageRight: 1244,
      imageCols: 46,
      imageTop: 28,
      imageBottom: 889,
      imageRows: 32,
      globalLight: true,
      detailsFile: "/aoa/maps/aoa3-map7.json",
      journals: [
        {
          x: 2050,
          y: 2350,
          id: "MzE6Mjk1OjE5NQ",
        },
        {
          x: 3550,
          y: 1750,
          id: "MzM6Njg6NTU1",
        },
        {
          x: 2650,
          y: 1950,
          id: "MzM6Njg6Mjkx",
        },
        {
          x: 3250,
          y: 2350,
          id: "MzM6Njg6MTM1",
        },
        {
          x: 4950,
          y: 2450,
          id: "MzQ6OTk6NTQz",
        },
        {
          x: 1250,
          y: 1050,
          id: "MzA6OTk6OTk",
        },
      ],
      tokens: [
        {
          id: "npc8",
          x: 2100,
          y: 2200,
        },
        {
          id: "npc54",
          x: 3300,
          y: 2200,
        },
        {
          id: "npc51",
          x: 4800,
          y: 2600,
        },
        {
          id: "npc21",
          x: 5e3,
          y: 2600,
        },
        {
          id: "npc9",
          x: 4900,
          y: 2700,
        },
      ],
    }),
    new ModuleScene({
      name: "map8a",
      canonical: {
        name: "aoa3/map8a",
        priority: 0,
      },
      nameInfo: {
        x: 99,
        y: 726.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 36,
      width: 1261,
      height: 905,
      cropLeft: 0,
      cropTop: 0,
      cropRight: 778,
      cropBottom: 905,
      imageLeft: 14,
      imageRight: 320,
      imageCols: 10,
      imageTop: 124,
      imageBottom: 434,
      imageRows: 10,
      globalLight: true,
      detailsFile: "/aoa/maps/aoa3-map8a.json",
      journals: [
        {
          x: 1650,
          y: 2050,
          id: "Mzg6MzI2OjYyNw",
        },
        {
          x: 2950,
          y: 2150,
          id: "Mzg6MzI2OjE4Mw",
        },
        {
          x: 2950,
          y: 2750,
          id: "Mzk6Njg6NjYz",
        },
        {
          x: 550,
          y: 1150,
          id: "Mzg6OTk6Njk5",
        },
      ],
      tokens: [
        {
          id: "npc24",
          x: 1600,
          y: 1800,
        },
        {
          id: "npc24",
          x: 1700,
          y: 2300,
        },
        {
          id: "npc36",
          x: 900,
          y: 1700,
        },
        {
          id: "npc47",
          x: 1e3,
          y: 1700,
        },
      ],
    }),
    new ModuleScene({
      name: "map8b",
      canonical: {
        name: "aoa3/map8b",
        priority: 0,
      },
      nameInfo: {
        x: 99,
        y: 726.3362,
      },
      nameFn: (name) => `${this.sentenceCase(name)} Upstairs`,
      page: 36,
      width: 1261,
      height: 905,
      cropLeft: 778,
      cropTop: 0,
      cropRight: 1261,
      cropBottom: 905,
      imageLeft: 822,
      imageRight: 1128,
      imageCols: 10,
      imageTop: 125,
      imageBottom: 434,
      imageRows: 10,
      globalLight: true,
      detailsFile: "/aoa/maps/aoa3-map8b.json",
      journals: [
        {
          x: 1150,
          y: 2750,
          id: "Mzk6Mjk1OjU0Mw",
        },
        {
          x: 1450,
          y: 2250,
          id: "Mzk6Njg6NTE5",
        },
        {
          x: 950,
          y: 2250,
          id: "NDA6OTk6NTE5",
        },
        {
          x: 1150,
          y: 1650,
          id: "NDA6OTk6NDM1",
        },
      ],
      tokens: [
        {
          id: "npc10",
          x: 1400,
          y: 2800,
        },
        {
          id: "npc49",
          x: 1300,
          y: 2100,
        },
        {
          id: "npc49",
          x: 1300,
          y: 2400,
        },
      ],
    }),
    new ModuleScene({
      name: "map10a",
      canonical: {
        name: "aoa3/map10a",
        priority: 0,
      },
      nameInfo: {
        x: 67.5,
        y: 375,
      },
      nameFn: (name) => this.sentenceCase(name).substring(4),
      page: 43,
      width: 600,
      height: 600,
      imageLeft: 143,
      imageRight: 350,
      imageCols: 6,
      imageTop: 143,
      imageBottom: 352,
      imageRows: 6,
      globalLight: true,
      detailsFile: "/aoa/maps/aoa3-map10a.json",
      journals: [
        {
          x: 1350,
          y: 1450,
          id: "NDM6Njg6Mzc1",
          text: "H1b",
        },
        {
          x: 550,
          y: 750,
          id: "NDI6OTk6MzAz",
        },
        {
          x: 550,
          y: 850,
          id: "NDI6MzI2OjI5MQ",
        },
        {
          x: 1350,
          y: 1050,
          id: "NDM6Njg6Mzc1",
          text: "H1a",
        },
      ],
      tokens: [
        {
          id: "npc51",
          x: 1300,
          y: 1300,
        },
        {
          id: "npc12",
          x: 1500,
          y: 1600,
        },
        {
          id: "npc12",
          x: 1100,
          y: 1600,
        },
      ],
    }),
    new ModuleScene({
      name: "map10b",
      canonical: {
        name: "aoa3/map10b",
        priority: 0,
      },
      nameInfo: {
        x: 294.75,
        y: 243,
        page: 43,
      },
      nameFn: (name) => this.sentenceCase(name).substring(4),
      page: 45,
      width: 600,
      height: 600,
      imageLeft: 143,
      imageRight: 350,
      imageCols: 6,
      imageTop: 143,
      imageBottom: 352,
      imageRows: 6,
      globalLight: true,
      detailsFile: "/aoa/maps/aoa3-map10b.json",
      journals: [
        {
          x: 1550,
          y: 1350,
          id: "NDM6Mjk1OjI0Mw",
          text: "H2a",
        },
        {
          x: 1200,
          y: 1e3,
          id: "NDM6Mjk1OjI0Mw",
          text: "H2b",
        },
        {
          x: 950,
          y: 1350,
          id: "NDM6Mjk1OjI0Mw",
          text: "H2c",
        },
        {
          x: 1250,
          y: 1650,
          id: "NDM6Mjk1OjI0Mw",
          text: "H2d",
        },
        {
          x: 450,
          y: 650,
          id: "NDI6OTk6MzAz",
        },
        {
          x: 450,
          y: 750,
          id: "NDI6MzI2OjI5MQ",
        },
      ],
      tokens: [
        {
          id: "npc34",
          x: 1500,
          y: 1e3,
        },
        {
          id: "npc34",
          x: 1500,
          y: 1500,
        },
        {
          id: "npc12",
          x: 1300,
          y: 900,
        },
        {
          id: "npc12",
          x: 1300,
          y: 800,
        },
        {
          id: "npc12",
          x: 1100,
          y: 800,
        },
      ],
    }),
    new ModuleScene({
      name: "map10c",
      canonical: {
        name: "aoa3/map10c",
        priority: 0,
      },
      nameInfo: {
        x: 326.25,
        y: 363,
        page: 44,
      },
      nameFn: (name) => this.sentenceCase(name).substring(4),
      page: 45,
      width: 600,
      height: 600,
      imageIndex: 1,
      imageLeft: 143,
      imageRight: 350,
      imageCols: 6,
      imageTop: 143,
      imageBottom: 352,
      imageRows: 6,
      globalLight: true,
      detailsFile: "/aoa/maps/aoa3-map10c.json",
      journals: [
        {
          x: 1300,
          y: 1500,
          id: "NDQ6MzI2OjM2Mw",
          text: "H3a",
        },
        {
          x: 1100,
          y: 900,
          id: "NDQ6MzI2OjM2Mw",
          text: "H3f",
        },
        {
          x: 1600,
          y: 900,
          id: "NDQ6MzI2OjM2Mw",
          text: "H3d",
        },
        {
          x: 900,
          y: 1300,
          id: "NDQ6MzI2OjM2Mw",
          text: "H3e",
        },
        {
          x: 900,
          y: 1650,
          id: "NDQ6MzI2OjM2Mw",
          text: "H3c",
        },
        {
          x: 1700,
          y: 1350,
          id: "NDQ6MzI2OjM2Mw",
          text: "H3f",
        },
        {
          x: 450,
          y: 650,
          id: "NDI6OTk6MzAz",
        },
        {
          x: 450,
          y: 750,
          id: "NDI6MzI2OjI5MQ",
        },
      ],
      tokens: [
        {
          id: "npc13",
          x: 900,
          y: 1e3,
        },
        {
          id: "npc27",
          x: 1e3,
          y: 800,
        },
        {
          id: "npc3",
          x: 1500,
          y: 800,
        },
        {
          id: "npc3",
          x: 1500,
          y: 1e3,
        },
        {
          id: "npc27",
          x: 1100,
          y: 1e3,
        },
        {
          id: "npc27",
          x: 1e3,
          y: 1e3,
        },
      ],
    }),
    new ModuleScene({
      name: "map11c",
      canonical: {
        name: "aoa3/map11c",
        priority: 0,
      },
      nameInfo: {
        x: 67,
        y: 738.3362,
      },
      nameFn: (name) => `${this.sentenceCase(name)} - S`,
      page: 50,
      width: 1261,
      height: 1636,
      cropLeft: 0,
      cropTop: 1157,
      cropRight: 655,
      cropBottom: 1636,
      imageLeft: 14,
      imageRight: 527,
      imageCols: 20,
      imageTop: 1182,
      imageBottom: 1602,
      imageRows: 16,
      globalLight: true,
      detailsFile: "/aoa/maps/aoa3-map11c.json",
      journals: [
        {
          x: 1450,
          y: 1150,
          id: "NTI6OTk6Mjc5",
        },
        {
          x: 2450,
          y: 1050,
          id: "NTI6OTk6Njk5",
        },
      ],
      tokens: [
        {
          id: "npc51",
          x: 2200,
          y: 1200,
        },
        {
          id: "npc51",
          x: 2100,
          y: 1200,
        },
        {
          id: "npc3",
          x: 2200,
          y: 1300,
        },
        {
          id: "npc3",
          x: 2100,
          y: 1300,
        },
        {
          id: "npc51",
          x: 1700,
          y: 1100,
        },
        {
          id: "npc3",
          x: 1700,
          y: 1400,
        },
        {
          id: "npc3",
          x: 1400,
          y: 1500,
        },
        {
          id: "npc3",
          x: 1200,
          y: 800,
        },
        {
          id: "npc3",
          x: 1200,
          y: 1500,
        },
        {
          id: "npc3",
          x: 1200,
          y: 1e3,
        },
      ],
    }),
    new ModuleScene({
      name: "map11b",
      canonical: {
        name: "aoa3/map11b",
        priority: 0,
      },
      nameInfo: {
        x: 67,
        y: 738.3362,
      },
      nameFn: (name) => `${this.sentenceCase(name)} - W`,
      page: 50,
      width: 1261,
      height: 1636,
      cropLeft: 0,
      cropTop: 501,
      cropRight: 655,
      cropBottom: 1154,
      imageLeft: 168,
      imageRight: 322,
      imageCols: 6,
      imageTop: 578,
      imageBottom: 735,
      imageRows: 6,
      globalLight: true,
      detailsFile: "/aoa/maps/aoa3-map11b.json",
      journals: [
        {
          x: 1550,
          y: 2650,
          id: "NTM6Njg6MjQz",
        },
        {
          x: 1550,
          y: 1250,
          id: "NTI6MzI2OjM5OQ",
        },
        {
          x: 2550,
          y: 1550,
          id: "NTI6MzI2OjY5OQ",
        },
      ],
      tokens: [
        {
          id: "npc39",
          x: 2200,
          y: 1300,
          elite: true,
        },
        {
          id: "npc39",
          x: 2700,
          y: 1600,
          elite: true,
        },
        {
          id: "npc39",
          x: 2200,
          y: 1800,
          elite: true,
        },
        {
          id: "npc39",
          x: 2600,
          y: 2100,
          elite: true,
        },
        {
          id: "npc42",
          x: 1800,
          y: 1400,
        },
        {
          id: "npc42",
          x: 1400,
          y: 1400,
        },
        {
          id: "npc42",
          x: 1200,
          y: 1400,
        },
        {
          id: "npc42",
          x: 1600,
          y: 1400,
        },
        {
          id: "npc44",
          x: 1500,
          y: 2700,
        },
        {
          id: "npc39",
          x: 1800,
          y: 2500,
          elite: true,
        },
        {
          id: "npc39",
          x: 1200,
          y: 2500,
          elite: true,
        },
      ],
    }),
    new ModuleScene({
      name: "map11a",
      canonical: {
        name: "aoa3/map11a",
        priority: 0,
      },
      nameInfo: {
        x: 67,
        y: 738.3362,
      },
      nameFn: (name) => `${this.sentenceCase(name)} - N`,
      page: 50,
      width: 1261,
      height: 1636,
      cropLeft: 0,
      cropTop: 0,
      cropRight: 1261,
      cropBottom: 499,
      imageLeft: 527,
      imageRight: 707,
      imageCols: 7,
      imageTop: 211,
      imageBottom: 369,
      imageRows: 6,
      globalLight: true,
      detailsFile: "/aoa/maps/aoa3-map11a.json",
      journals: [
        {
          x: 2450,
          y: 1850,
          id: "NTQ6MzI2OjMwMw",
        },
        {
          x: 2950,
          y: 1250,
          id: "NTU6Njg6NTc5",
        },
        {
          x: 4050,
          y: 1350,
          id: "NTY6MzI2OjU1NQ",
        },
        {
          x: 5050,
          y: 1350,
          id: "NTY6MzI2OjMxNQ",
        },
      ],
      tokens: [
        {
          id: "npc12",
          x: 2200,
          y: 1600,
        },
        {
          id: "npc12",
          x: 2100,
          y: 1700,
        },
        {
          id: "npc12",
          x: 2600,
          y: 1800,
        },
        {
          id: "npc12",
          x: 2200,
          y: 2e3,
        },
        {
          id: "npc34",
          x: 2200,
          y: 1800,
        },
        {
          id: "npc16",
          x: 2700,
          y: 1100,
        },
        {
          id: "npc43",
          x: 3e3,
          y: 1100,
        },
        {
          id: "npc43",
          x: 2900,
          y: 1100,
        },
        {
          id: "npc30",
          x: 5100,
          y: 1300,
        },
        {
          id: "npc28",
          x: 5100,
          y: 1400,
        },
        {
          id: "npc48",
          x: 5300,
          y: 1200,
        },
      ],
    }),
    new ModuleScene({
      name: "map11d",
      canonical: {
        name: "aoa3/map11d",
        priority: 0,
      },
      nameInfo: {
        x: 67,
        y: 738.3362,
      },
      nameFn: (name) => `${this.sentenceCase(name)} - NE`,
      page: 50,
      width: 1261,
      height: 1636,
      cropLeft: 656,
      cropTop: 501,
      cropRight: 1261,
      cropBottom: 867,
      imageLeft: 682,
      imageRight: 887,
      imageCols: 8,
      imageTop: 604,
      imageBottom: 867,
      imageRows: 10,
      globalLight: true,
      detailsFile: "/aoa/maps/aoa3-map11d.json",
      journals: [
        {
          x: 1350,
          y: 950,
          id: "NTg6MzMyOjYyNw",
        },
      ],
      tokens: [
        {
          id: "npc17",
          x: 1300,
          y: 1300,
        },
        {
          id: "npc17",
          x: 1500,
          y: 500,
        },
      ],
    }),
    new ModuleScene({
      name: "map11e",
      canonical: {
        name: "aoa3/map11e",
        priority: 0,
      },
      nameInfo: {
        x: 67,
        y: 738.3362,
      },
      nameFn: (name) => `${this.sentenceCase(name)} - Overview`,
      page: 50,
      width: 1261,
      height: 1636,
      cropLeft: 656,
      cropTop: 869,
      cropRight: 1261,
      cropBottom: 1636,
      imageLeft: 784,
      imageRight: 1016,
      imageCols: 9 * 8,
      imageTop: 1051,
      imageBottom: 1498,
      imageRows: 17 * 8,
      globalLight: true,
      detailsFile: "/aoa/maps/aoa3-map11e.json",
      journals: [
        {
          x: 12100,
          y: 14300,
          id: "NTE6Njg6NDU5",
        },
        {
          x: 9700,
          y: 8700,
          id: "NTU6Njg6NTc5",
        },
        {
          x: 11300,
          y: 8700,
          id: "NTY6MzI2OjU1NQ",
        },
        {
          x: 12900,
          y: 8700,
          id: "NTY6MzI2OjMxNQ",
        },
        {
          x: 8900,
          y: 9500,
          id: "NTQ6MzI2OjMwMw",
        },
        {
          x: 5700,
          y: 14300,
          id: "NTI6MzI2OjM5OQ",
        },
        {
          x: 5700,
          y: 15900,
          id: "NTM6Njg6MjQz",
        },
        {
          x: 6500,
          y: 14300,
          id: "NTI6MzI2OjY5OQ",
        },
        {
          x: 11300,
          y: 19900,
          id: "NTI6OTk6Mjc5",
        },
        {
          x: 12100,
          y: 19900,
          id: "NTI6OTk6Njk5",
        },
        {
          x: 16100,
          y: 10300,
          id: "NTg6MzMyOjYyNw",
        },
        {
          x: 15300,
          y: 24700,
          id: "NTE6Njg6NjAz",
        },
      ],
      tokens: [
        {
          id: "npc23",
          x: 12200,
          y: 14400,
        },
      ],
    }),
    new ModuleScene({
      name: "map16",
      canonical: {
        name: "aoa3/map16",
        priority: 0,
      },
      nameInfo: {
        x: 47,
        y: 730.8231,
      },
      page: 62,
      width: 1259,
      height: 905,
      gridType: "gridless",
      imageLeft: 0,
      imageTop: 0,
      imageRight: 1e3,
      imageBottom: 1e3,
      imageRows: 10,
      imageCols: 10,
    }),
  ];
  journals = [
    new AdventureImage({
      name: "journal1",
      page: 1,
      width: 1258,
      height: 725,
    }),
    new AdventureImage({
      name: "journal2",
      page: 1,
      width: 1257,
      height: 715,
    }),
    new AdventureImage({
      name: "journal3",
      page: 1,
      width: 874,
      height: 1263,
    }),
    new AdventureImage({
      name: "journal4",
      page: 2,
      width: 588,
      height: 637,
    }),
    new AdventureImage({
      name: "journal5",
      page: 4,
      width: 1261,
      height: 1636,
    }),
    new AdventureImage({
      name: "journal6",
      page: 6,
      width: 1261,
      height: 830,
    }),
    new AdventureImage({
      name: "journal7",
      page: 28,
      width: 1261,
      height: 830,
    }),
    new AdventureImage({
      name: "journal8",
      page: 48,
      width: 1261,
      height: 830,
    }),
    new AdventureImage({
      name: "journal9",
      page: 60,
      width: 1261,
      height: 829,
    }),
    new AdventureImage({
      name: "journal10",
      page: 66,
      width: 1259,
      height: 822,
    }),
    new AdventureImage({
      name: "journal11",
      page: 72,
      width: 1259,
      height: 830,
    }),
    new AdventureImage({
      name: "journal12",
      page: 73,
      width: 432,
      height: 459,
    }),
    new AdventureImage({
      name: "journal13",
      page: 73,
      width: 432,
      height: 453,
    }),
    new AdventureImage({
      name: "journal14",
      page: 74,
      width: 375,
      height: 350,
    }),
    new AdventureImage({
      name: "journal15",
      page: 74,
      width: 459,
      height: 409,
    }),
    new AdventureImage({
      name: "journal16",
      page: 74,
      width: 385,
      height: 426,
    }),
    new AdventureImage({
      name: "journal17",
      page: 2,
      width: 397,
      height: 412,
    }),
    new AdventureImage({
      name: "journal18",
      page: 2,
      width: 397,
      height: 356,
    }),
    new AdventureImage({
      name: "journal19",
      page: 70,
      width: 953,
      height: 1170,
    }),
    new AdventureImage({
      name: "journal20",
      page: 77,
      width: 778,
      height: 849,
    }),
    new AdventureImage({
      name: "journal21",
      page: 91,
      width: 821,
      height: 1222,
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.dlW3UaXVpnzjd6xe",
      page: 10,
      width: 607,
      height: 1084,
      tokenX: -111,
      tokenY: 45,
      tokenSize: 300,
      forIds: ["OToyOTU6MzI3"],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.qouYGPM8mE4KUCTe",
      page: 17,
      width: 778,
      height: 1160,
      tokenX: -248,
      tokenY: 40,
      tokenSize: 320,
      forIds: ["MTY6OTk6NjI3"],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.NwLrwNqwedh95iry",
      page: 19,
      width: 885,
      height: 916,
      tokenX: -213,
      tokenY: 64,
      tokenSize: 468,
      forIds: [
        "MTg6OTk6NTQz",
        "NDc6Njg6Njk5",
        "NTI6OTk6NDEx",
        "MjE6Mjk1OjM3NQ",
        "NTI6OTk6OTk",
        "MjU6Njg6NDk1",
      ],
    }),
    new ModuleNpc({
      id: "npc4",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.KzKQYgiUZ3hJo473",
      page: 21,
      width: 488,
      height: 500,
      tokenX: -40,
      tokenY: 30,
      tokenSize: 528,
      forIds: ["MjA6MzI2OjU2Nw"],
    }),
    new ModuleNpc({
      id: "npc5",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.El7eSPV9aRi98Ufy",
      page: 23,
      width: 856,
      height: 1141,
      tokenX: -237,
      tokenY: -22,
      tokenSize: 329,
      forIds: ["MjA6MzI2OjUwNw"],
    }),
    new ModuleNpc({
      id: "npc6",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.Lx5JiVOGWnzzjCrW",
      name: {
        page: 26,
        x: 110.635,
        y: 120.6081,
      },
      page: 26,
      width: 867,
      height: 1156,
      tokenX: -318,
      tokenY: -38,
      tokenSize: 260,
      forIds: ["MjU6Mjk1OjM5OQ"],
    }),
    new ModuleNpc({
      id: "npc7",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 27,
        x: 236.5432,
        y: 441.1729,
      },
      page: 27,
      width: 440,
      height: 501,
      tokenX: 81,
      tokenY: 98,
      tokenSize: 585,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc8",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 31,
        x: 231.5695,
        y: 437.6729,
      },
      page: 31,
      width: 486,
      height: 532,
      tokenX: 28,
      tokenY: 100,
      tokenSize: 560,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc9",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 35,
        x: 252.6049,
        y: 435.1405,
      },
      page: 35,
      width: 478,
      height: 535,
      tokenX: 68,
      tokenY: 95,
      tokenSize: 619,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc10",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 40,
        x: 298.6488,
        y: 435.1405,
      },
      page: 40,
      width: 434,
      height: 537,
      tokenX: 102,
      tokenY: 93,
      tokenSize: 649,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc11",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 42,
        x: 265.5852,
        y: 393.1729,
      },
      page: 42,
      width: 551,
      height: 616,
      tokenX: 49,
      tokenY: 77,
      tokenSize: 672,
      forIds: ["OTE6Njg6NTMx"],
    }),
    new ModuleNpc({
      id: "npc12",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.nQ2eBOpK71I8D2JC",
      page: 44,
      width: 744,
      height: 1225,
      tokenX: -307,
      tokenY: -95,
      tokenSize: 273,
      forIds: ["NDM6MzA5OjY1MQ", "NDQ6MzI2OjU2Nw", "NTQ6MzI2Ojk5"],
    }),
    new ModuleNpc({
      id: "npc13",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.sQZDwS08l6Agsryq",
      page: 46,
      width: 545,
      height: 1040,
      tokenX: -125,
      tokenY: 47,
      tokenSize: 256,
      forIds: ["NDY6MzI2OjY5OQ"],
    }),
    new ModuleNpc({
      id: "npc14",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 47,
        x: 236.5535,
        y: 436.6729,
      },
      page: 47,
      width: 486,
      height: 551,
      tokenX: 60,
      tokenY: 100,
      tokenSize: 635,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc15",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 49,
        x: 307.7852,
        y: 256.8856,
      },
      page: 49,
      width: 495,
      height: 520,
      tokenX: 73,
      tokenY: 124,
      tokenSize: 632,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc16",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.Ejxngh2tHFseZQHW",
      page: 55,
      width: 614,
      height: 1195,
      tokenX: -79,
      tokenY: 53,
      tokenSize: 467,
      forIds: ["NTY6OTk6NTc5"],
    }),
    new ModuleNpc({
      id: "npc17",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.7WNFNE3SVMRGbBDf",
      page: 58,
      width: 893,
      height: 1434,
      tokenX: -364,
      tokenY: -214,
      tokenSize: 370,
      forIds: ["NTg6MzI2OjE1OQ"],
    }),
    new ModuleNpc({
      id: "npc18",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 63,
        x: 266.5368,
        y: 450.1729,
      },
      page: 63,
      width: 565,
      height: 600,
      tokenX: 18,
      tokenY: 0,
      tokenSize: 600,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc19",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 65,
        x: 268.5867,
        y: 447.1729,
      },
      page: 65,
      width: 459,
      height: 597,
      tokenX: 130,
      tokenY: 22,
      tokenSize: 569,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc20",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.91BSCAJA1Oto2ctf",
      page: 78,
      width: 910,
      height: 950,
      tokenX: -41,
      tokenY: -41,
      tokenSize: 950,
      forIds: ["MTg6OTk6OTk", "MjU6Njg6Mzk5", "MjA6OTk6NTQz"],
    }),
    new ModuleNpc({
      id: "npc21",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.KzKQYgiUZ3hJo473",
      page: 79,
      width: 855,
      height: 1508,
      tokenX: -347,
      tokenY: -212,
      tokenSize: 388,
      forIds: ["Nzk6Njg6NTc5", "MzQ6OTk6MjU1"],
    }),
    new ModuleNpc({
      id: "npc22",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.xjV0TmPNfKR7UcKu",
      page: 80,
      width: 971,
      height: 807,
      tokenX: 63,
      tokenY: -94,
      tokenSize: 663,
      forIds: ["MTY6OTk6MTcx", "ODA6MjUxOjU3OQ"],
    }),
    new ModuleNpc({
      id: "npc23",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.JSKZryHwf0Ggq8KR",
      page: 81,
      width: 778,
      height: 1160,
      tokenX: -369,
      tokenY: 34,
      tokenSize: 292,
      forIds: ["NTE6Mjk1OjQ0Nw", "ODE6Njg6Mzk5"],
    }),
    new ModuleNpc({
      id: "npc24",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.z4rlpEsE2KgzpOCc",
      page: 82,
      width: 941,
      height: 1322,
      tokenX: -307,
      tokenY: -122,
      tokenSize: 314,
      forIds: ["Mzg6MzI2OjMwMw"],
    }),
    new ModuleNpc({
      id: "npc25",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.tHXV7mD747K60656",
      page: 83,
      width: 785,
      height: 1001,
      tokenX: -255,
      tokenY: 10,
      tokenSize: 357,
      forIds: ["ODM6Njg6NjUx"],
    }),
    new ModuleNpc({
      id: "npc26",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.hfA1xQSk1dPVwt00",
      page: 84,
      width: 763,
      height: 860,
      tokenX: 27,
      tokenY: -77,
      tokenSize: 860,
      forIds: ["ODQ6MzQwOjM2Mw"],
    }),
    new ModuleNpc({
      id: "npc27",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.66MUUmu8950MEXFf",
      page: 85,
      width: 722,
      height: 1100,
      tokenX: -232,
      tokenY: -23,
      tokenSize: 344,
      forIds: ["NDc6Njg6NjUx", "ODU6Njg6NDcx"],
    }),
    new ModuleNpc({
      id: "npc28",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.2qAd4TmEu5wexX7U",
      page: 86,
      width: 965,
      height: 1073,
      tokenX: -253,
      tokenY: -49,
      tokenSize: 261,
      forIds: ["NTc6Mjk1OjQ3MQ", "ODY6MjUxOjU3OQ"],
    }),
    new ModuleNpc({
      id: "npc29",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.CmbcgWZgOSDmo2Pm",
      page: 87,
      width: 774,
      height: 1113,
      tokenX: -209,
      tokenY: -106,
      tokenSize: 301,
      forIds: ["ODc6Njg6NjUx"],
    }),
    new ModuleNpc({
      id: "npc30",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.9oNwQuwKGUuG9G9g",
      page: 89,
      width: 921,
      height: 1111,
      tokenX: -276,
      tokenY: 27,
      tokenSize: 411,
      forIds: ["NTc6Mjk1OjUxOQ", "ODk6Njg6NTA3"],
    }),
    new ModuleNpc({
      id: "npc31",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.tGyPrTGSpndXKU88",
      page: 93,
      width: 841,
      height: 942,
      tokenX: -273,
      tokenY: 30,
      tokenSize: 382,
      forIds: ["Mzc6Njg6NTA3", "OTM6Njg6NDEx"],
    }),
    new ModuleNpc({
      id: "npc32",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 99,
        x: 683.9999,
        y: 686.543,
      },
      page: 99,
      width: 397,
      height: 412,
      tokenX: 13,
      tokenY: 59,
      tokenSize: 412,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc33",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 99,
        x: 812.5599,
        y: 513.6921,
      },
      page: 99,
      width: 397,
      height: 356,
      tokenX: 43,
      tokenY: 115,
      tokenSize: 481,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc34",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.Tpuqwt6Af29EMtqX",
      label: "AG",
      forIds: ["NTU6Njg6Njk5", "NDQ6MzI2OjUxOQ"],
    }),
    new ModuleNpc({
      id: "npc36",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.sqXPqmuUYOgxspV3",
      label: "BH",
      forIds: ["Mjk6Njg6Mjkx", "Mzg6MzI2OjI1NQ"],
    }),
    new ModuleNpc({
      id: "npc37",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.91BSCAJA1Oto2ctf",
      label: "BB",
      forIds: ["Nzg6Mjk1OjM4Nw"],
    }),
    new ModuleNpc({
      id: "npc38",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.qRUqoezeEnQ2KdyT",
      label: "N",
      forIds: ["MTU6Njg6NDU5"],
    }),
    new ModuleNpc({
      id: "npc39",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.zT3fSxNatEbrkCzN",
      label: "SG",
      forIds: ["NTQ6MzI2OjUzMQ", "NTI6MzI2OjQ0Nw"],
    }),
    new ModuleNpc({
      id: "npc40",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.qlxVPpwVFw5qIVQM",
      label: "FD",
      forIds: ["MjY6OTk6NTkx"],
    }),
    new ModuleNpc({
      id: "npc41",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.kNmRn3WfiWLsuwoe",
      label: "G",
      forIds: ["Mzc6Njg6NTU1"],
    }),
    new ModuleNpc({
      id: "npc42",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.OJH8y8LqmgbkN8ce",
      label: "GB",
      forIds: ["NTI6MzI2OjE4Mw"],
    }),
    new ModuleNpc({
      id: "npc43",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.5meW7DytYnF7Iq2V",
      label: "GS",
      forIds: ["NTY6OTk6MTk1"],
    }),
    new ModuleNpc({
      id: "npc44",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.mY494hn9sKVD9q8C",
      label: "J",
      forIds: ["NTQ6OTk6NTU1"],
    }),
    new ModuleNpc({
      id: "npc45",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.WQy7HBUcgDLsfVJd",
      label: "NH",
      forIds: ["MTU6Njg6NTA3"],
    }),
    new ModuleNpc({
      id: "npc46",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.f15mNNhOT3aq66VQ",
      label: "K",
      forIds: ["MjM6Njg6MzM5"],
    }),
    new ModuleNpc({
      id: "npc47",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.IdpkEJycZgrkvdSn",
      label: "PB",
      forIds: ["MzA6OTk6MzI3", "Mzg6MzI2OjIxOQ"],
    }),
    new ModuleNpc({
      id: "npc48",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.We1Nq7CrqDQHEZxY",
      label: "QS",
      forIds: ["NTc6Mjk1OjM4Nw"],
    }),
    new ModuleNpc({
      id: "npc49",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.hOXpmWmXU8N3n4Bw",
      label: "RR",
      forIds: ["Mzk6Mjk1OjU5MQ"],
    }),
    new ModuleNpc({
      id: "npc50",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.z4rlpEsE2KgzpOCc",
      label: "RoB",
      forIds: ["ODI6MjY2OjQzNQ"],
    }),
    new ModuleNpc({
      id: "npc51",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.Lx5JiVOGWnzzjCrW",
      label: "STB",
      forIds: [
        "NTI6OTk6MTQ3",
        "NTI6OTk6NDU5",
        "NDM6Mjk1OjY5OQ",
        "MzQ6OTk6MzAz",
      ],
    }),
    new ModuleNpc({
      id: "npc52",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.1lkay2gwgEquq0NF",
      label: "STS",
      forIds: [
        "MTA6MzI2OjY1MQ",
        "MTg6OTk6MTQ3",
        "MjU6Njg6NDQ3",
        "MjA6OTk6NTkx",
      ],
    }),
    new ModuleNpc({
      id: "npc53",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.t6Xh4fHdHi2GP87z",
      label: "AH",
      forIds: ["MTY6OTk6MjE5"],
    }),
    new ModuleNpc({
      id: "npc54",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.Upf2fOZ6QgGG3seI",
      label: "SG",
      forIds: ["MzQ6OTk6NjYz"],
    }),
    new ModuleNpc({
      id: "npc55",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.zdJHl3xMY7n2Lwlf",
      label: "TL",
      forIds: ["ODozMjY6MTU5"],
    }),
    new ModuleNpc({
      id: "npc56",
      actorUuid: "Compendium.pf2e.age-of-ashes-bestiary.Actor.HbgvZUYFJd2VfwmQ",
      label: "ToDD",
      forIds: ["MTM6Mjk1OjQ1OQ"],
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
          id: "ODo5OTo2OTk",
        },
        {
          id: "ODo5OTo2MDM",
        },
        {
          id: "ODo5OToxNzE",
        },
        {
          id: "ODozMjY6Njk5",
        },
        {
          id: "OTo2ODo0NzE",
        },
        {
          id: "MTA6MzI2OjE1OQ",
        },
        {
          id: "MTE6Njg6Njk5",
        },
        {
          id: "MTI6OTk6NjAz",
        },
        {
          id: "MTI6MzI2OjY5OQ",
        },
        {
          id: "MTM6Njg6NjI3",
        },
        {
          id: "MTM6Njg6MjU1",
        },
        {
          id: "MTQ6OTk6MTU5",
        },
        {
          id: "MTU6MzA0OjY4Nw",
        },
        {
          id: "MTU6Njg6NDEx",
        },
        {
          id: "MTY6MzI2OjI3OQ",
        },
        {
          id: "MTc6Njg6MzYz",
        },
        {
          id: "MTc6Njg6MTcx",
        },
        {
          id: "MTk6Njg6NjAz",
        },
        {
          id: "MTk6Njg6Mjkx",
        },
        {
          id: "MjA6OTk6NDk1",
        },
        {
          id: "MjA6MzI2OjIxOQ",
        },
        {
          id: "MjE6Njg6MjY3",
        },
        {
          id: "MjE6Mjk1OjExMQ",
        },
        {
          id: "MjI6OTk6MTgz",
        },
        {
          id: "MjM6Njg6NjI3",
        },
        {
          id: "MjM6Njg6MTk1",
        },
        {
          id: "MjM6Mjk1OjU3OQ",
        },
        {
          id: "MjQ6MzI2OjI0Mw",
        },
        {
          id: "MjU6Njg6MzUx",
        },
        {
          id: "MjY6MzI2OjY5OQ",
        },
        {
          id: "Mjc6MzA0OjY4Nw",
        },
        {
          id: "MjY6MzI2OjE3MQ",
        },
      ],
    },
    {
      name: "Chapter 2",
      pages: [
        {
          id: "Mjg6MjA5OjM1OA",
        },
        {
          id: "Mjk6MzcxOjY5OQ",
        },
        {
          id: "Mjk6Njg6NjM5",
        },
        {
          id: "MzA6OTk6OTk",
        },
        {
          id: "MzA6MzI2OjI0Mw",
        },
        {
          id: "MzE6Njg6MjMx",
        },
        {
          id: "MzE6Mjk1OjE5NQ",
        },
        {
          id: "MzM6Njg6NTU1",
        },
        {
          id: "MzM6Njg6Mjkx",
        },
        {
          id: "MzM6Njg6MTM1",
        },
        {
          id: "MzQ6OTk6NTQz",
        },
        {
          id: "MzU6Njg6MzYz",
        },
        {
          id: "MzY6MzI2OjMyNw",
        },
        {
          id: "Mzg6OTk6Njk5",
        },
        {
          id: "Mzg6MzI2OjYyNw",
        },
        {
          id: "Mzg6MzI2OjE4Mw",
        },
        {
          id: "Mzk6Njg6NjYz",
        },
        {
          id: "Mzk6Njg6NTE5",
        },
        {
          id: "Mzk6Mjk1OjU0Mw",
        },
        {
          id: "NDA6OTk6NTE5",
        },
        {
          id: "NDA6OTk6NDM1",
        },
        {
          id: "NDA6OTk6MjU1",
        },
        {
          id: "NDE6Njg6NDQ3",
        },
        {
          id: "NDE6Mjk1OjQ0Nw",
        },
        {
          id: "NDE6Mjk1OjE1OQ",
        },
        {
          id: "NDI6OTk6MzAz",
        },
        {
          id: "NDI6MzI2OjI5MQ",
        },
        {
          id: "NDM6Njg6Mzc1",
        },
        {
          id: "NDM6Mjk1OjI0Mw",
        },
        {
          id: "NDQ6MzI2OjM2Mw",
        },
        {
          id: "NDc6Njg6MTcx",
        },
      ],
    },
    {
      name: "Chapter 3",
      pages: [
        {
          id: "NDg6MjA5OjM1OQ",
        },
        {
          id: "NDk6MzcxOjY5OQ",
        },
        {
          id: "NDg6OTk6MTU5",
        },
        {
          id: "NDk6Njg6Njk5",
        },
        {
          id: "NDk6Njg6Mzk5",
        },
        {
          id: "NTE6Njg6NjAz",
        },
        {
          id: "NTE6Njg6NDU5",
        },
        {
          id: "NTI6OTk6Njk5",
        },
        {
          id: "NTI6OTk6Mjc5",
        },
        {
          id: "NTI6MzI2OjY5OQ",
        },
        {
          id: "NTI6MzI2OjM5OQ",
        },
        {
          id: "NTM6Njg6MjQz",
        },
        {
          id: "NTQ6MzI2OjMwMw",
        },
        {
          id: "NTU6Njg6NTc5",
        },
        {
          id: "NTY6MzI2OjU1NQ",
        },
        {
          id: "NTY6MzI2OjMxNQ",
        },
        {
          id: "NTg6MzMyOjYyNw",
        },
        {
          id: "NTk6Njg6MzYz",
        },
      ],
    },
    {
      name: "Back Matter",
      pages: [
        {
          id: "NzM6Njg6Njk5",
        },
        {
          id: "NzQ6NDA4OjE3MQ",
        },
        {
          id: "NzU6Njg6Njk5",
        },
        {
          id: "NzU6Mjk1OjQ3MQ",
        },
        {
          id: "NzY6MzI2OjI3OQ",
        },
        {
          id: "Nzc6Njg6Njk5",
        },
        {
          id: "Nzg6MjUxOjY5OQ",
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
          id: "ODI6MjUxOjY5OQ",
        },
        {
          id: "ODM6Njg6Njk5",
        },
        {
          id: "ODQ6MjUxOjY5OQ",
        },
        {
          id: "ODQ6MjUxOjQ3MQ",
        },
        {
          id: "ODU6Njg6NjE1",
        },
        {
          id: "ODY6MjUxOjY5OQ",
        },
        {
          id: "ODc6Njg6Njk5",
        },
        {
          id: "ODg6MjIzOjY3Mw",
        },
        {
          id: "OTA6MTU4OjY3Mw",
        },
        {
          id: "OTI6MTc2OjY3Mw",
        },
      ],
    },
    {
      name: "Handouts",
      pages: [
        {
          id: "OTo0NTU6MzUx",
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
      ],
    },
  ];
  combines = [
    {
      source: "Nzg6MTE4OjY2Mw",
      dest: "Nzg6MjUxOjY5OQ",
    },
    {
      source: "Nzk6MzcxOjY2Mw",
      dest: "Nzk6Njg6Njk5",
    },
    {
      source: "ODA6MTQzOjY2Mw",
      dest: "ODA6MjUxOjY5OQ",
    },
    {
      source: "ODE6MzcxOjY2Mw",
      dest: "ODE6Njg6Njk5",
    },
    {
      source: "ODI6MTM1OjY2Mw",
      dest: "ODI6MjUxOjY5OQ",
    },
    {
      source: "ODM6MzcxOjY2Mw",
      dest: "ODM6Njg6Njk5",
    },
    {
      source: "ODQ6MTMwOjY2Mw",
      dest: "ODQ6MjUxOjY5OQ",
    },
    {
      source: "ODU6MzcxOjY2Mw",
      dest: "ODQ6MjUxOjY5OQ",
    },
    {
      source: "ODY6MTM1OjY2Mw",
      dest: "ODQ6MjUxOjY5OQ",
    },
    {
      source: "ODc6MzcxOjY2Mw",
      dest: "ODQ6MjUxOjY5OQ",
    },
    {
      source: "ODk6Njg6Njk5",
      dest: "ODg6MjIzOjY3Mw",
    },
    {
      source: "OTE6Njg6Njk5",
      dest: "OTA6MTU4OjY3Mw",
    },
    {
      source: "OTM6Njg6NTU1",
      dest: "OTI6MTc2OjY3Mw",
    },
  ];
  headingFontIds = this.headingFontIds.concat(["GoodOT-Bold:12"]);
  normalFontIds = this.normalFontIds.concat(["Castle:10"]);
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "AGE OF ASHES: TOMORROW MUST BURN" &&
        t.fontId === "Gin-Regular:12",
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    this.mergeWithNext(text, 9, 208.438, 471);
    this.mergeWithNext(text, 9, 454.2179, 327);
    this.markStartOfLine(text, 10, 326.25, 435);
    this.markStartOfLine(text, 10, 339.25, 399);
    this.markStartOfLine(text, 10, 349.25, 363);
    this.markStartOfLine(text, 10, 346.25, 351);
    this.markStartOfLine(text, 10, 336.25, 327);
    this.markStartOfLine(text, 10, 333.25, 303);
    this.markStartOfLine(text, 43, 359.75, 627);
    this.markStartOfLine(text, 43, 372.75, 615);
    this.markStartOfLine(text, 43, 382.75, 603);
    this.markStartOfLine(text, 43, 401.75, 567);
    this.markStartOfLine(text, 43, 407.75, 543);
    this.markStartOfLine(text, 43, 356.75, 423);
    this.markStartOfLine(text, 43, 302.75, 399);
    this.changeTextFn(text, 54, 272.2919, 555, (x) =>
      x.replace("LEVEL", "CREATURE"),
    );
    this.changeTextFn(text, 58, 500.77790000000005, 159, (x) =>
      x.replace("LEVEL", "CREATURE"),
    );
    this.changeFontId(text, 75, 67.5, 699, "GoodOT-Bold:14");
    this.changeFontId(text, 75, 294.75, 471, "GoodOT-Bold:14");
    this.changeFontId(text, 76, 326.25, 279, "GoodOT-Bold:14");
    this.changeFontId(text, 77, 67.5, 699, "GoodOT-Bold:14");
    this.changeFontId(text, 9, 455.2107, 351, "GoodOT-Bold:14");
    this.moveToBeginning(text, 9, 455.2107, 351);
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
