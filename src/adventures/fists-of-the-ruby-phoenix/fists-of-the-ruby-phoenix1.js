import { FistsOfTheRubyPhoenixBase } from "./base.js";
import { CaptionImage } from "../../core/images.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class FistsOfTheRubyPhoenix1 extends FistsOfTheRubyPhoenixBase {
  prefix = "fists-of-the-ruby-phoenix-1";
  fullName = "Fists of the Ruby Phoenix - Despair on Danger Island";
  pages = [
    this.ChapterHeadingPageLayout(6),
    this.RightSingleColumnWithSidebar(7),
    this.LeftTwoColumn(8),
    this.RightTwoColumn(9),
    this.LeftTwoColumn(10),
    this.RightTwoColumn(11),
    this.LeftTwoColumn(12),
    this.RightTwoColumn(13),
    this.LeftTwoColumn(14),
    this.RightTwoColumn(15),
    this.LeftTwoColumnWithMap(16, 300),
    this.RightTwoColumn(17),
    this.LeftTwoColumn(18),
    this.RightTwoColumn(19),
    this.LeftTwoColumn(20),
    this.RightTwoColumn(21),
    this.LeftTwoColumn(22),
    this.RightTwoColumn(23),
    this.ChapterHeadingPageLayout(24),
    this.RightSingleColumnWithSidebar(25),
    this.LeftTwoColumnWithLeftCutout(26, 460),
    this.RightTwoColumn(27),
    this.LeftTwoColumn(28),
    this.RightTwoColumnWithRightCutout(29, 210),
    this.LeftTwoColumnWithMap(30, 340),
    this.RightTwoColumn(31),
    this.LeftTwoColumnWithMap(32, 340),
    this.RightTwoColumn(33),
    this.LeftTwoColumnWithMap(34, 340),
    this.RightTwoColumn(35),
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
    this.LeftTwoColumnWithMap(46, 340),
    this.RightTwoColumn(47),
    this.LeftTwoColumn(48),
    this.RightTwoColumn(49),
    this.LeftTwoColumn(50),
    this.RightTwoColumn(51),
    this.LeftTwoColumn(52),
    this.RightTwoColumn(53),
    this.LeftTwoColumn(54),
    this.RightTwoColumn(55),
    this.ChapterHeadingPageLayout(56),
    this.RightSingleColumnWithSidebar(57),
    this.LeftTwoColumn(58),
    this.RightTwoColumn(59),
    this.LeftTwoColumn(60),
    this.RightTwoColumn(61),
    this.LeftTwoColumnWithMap(62, 340),
    this.RightTwoColumn(63),
    this.LeftTwoColumn(64),
    this.RightTwoColumn(65),
    this.LeftTwoColumn(66),
    this.RightTwoColumn(67),
    this.RightChapterHeadingPageLayout(69),
    this.LeftTwoColumn(70),
    this.RightTwoColumn(71),
    this.LeftTwoColumnWithLeftCutout(72, 330),
    this.RightTwoColumn(73),
    this.RightChapterHeadingPageLayout(75),
    this.LeftTwoColumn(76),
    this.RightTwoColumn(77),
    this.LeftTwoColumnWithLeftCutout(78, 190),
    this.RightTwoColumn(79),
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
    this.LeftSingleColumnWithSidebar(90),
    this.RightSingleColumnWithSidebar(91),
    this.ChapterHeadingPageLayout(92),
    this.RightSingleColumnWithSidebar(93),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      canonical: {
        name: "forp1/map1",
        priority: 0,
      },
      nameInfo: {
        x: 36,
        y: 749.694,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 1262,
      height: 1637,
      imageLeft: 15,
      imageRight: 1156,
      imageCols: 7,
      imageTop: 140,
      imageBottom: 1526,
      imageRows: 10,
      gridType: "hexcolumn",
      gridDistance: 0.5,
      gridUnits: "mi",
      gridSize: 400,
      offsetX: 0.5,
      offsetY: -1,
      globalLight: true,
      detailsFile: "/forp/maps/forp1-map1.json",
      journals: [
        {
          x: 1614,
          y: 1307.32,
          id: "Mjk6Njg6NDgz",
          text: "C",
        },
        {
          x: 1822.3366666666668,
          y: 1328,
          id: "Mzk6Njg6MzM5",
          text: "J10",
        },
        {
          x: 1847.9266666666665,
          y: 1430.6666666666667,
          id: "MzE6Mjk1OjY5OQ",
          text: "F29",
        },
        {
          x: 2031.6700000000003,
          y: 1473.3333333333333,
          id: "MzA6MzI2OjE3MQ",
          text: "D5",
        },
        {
          x: 2318.2,
          y: 1461.33,
          id: "MzE6Mjk1OjY5OQ",
          text: "F30",
        },
        {
          x: 2295.67,
          y: 1648,
          id: "MzE6Njg6NDcx",
          text: "E",
        },
        {
          x: 1798.59,
          y: 1586.67,
          id: "NDU6MzYxOjM1MQ",
          text: "S",
        },
        {
          x: 1685.26,
          y: 1672,
          id: "MzI6OTk6MzAz",
          text: "G10",
        },
        {
          x: 1372.1833333333334,
          y: 1500,
          id: "MzE6Mjk1OjY5OQ",
          text: "F28",
        },
        {
          x: 1289.8966666666668,
          y: 1601.3333333333335,
          id: "MzE6Mjk1OjY5OQ",
          text: "F25",
        },
        {
          x: 1011.5020689655177,
          y: 1727.5862068965516,
          id: "MzU6Njg6MzE1",
          text: "H8",
        },
        {
          x: 1217.61,
          y: 1812.07,
          id: "Mjk6Njg6NDgz",
          text: "C",
        },
        {
          x: 1342.394827586207,
          y: 1917.2413793103447,
          id: "MzE6Mjk1OjY5OQ",
          text: "F22",
        },
        {
          x: 2176.7358620689656,
          y: 1712.0689655172414,
          id: "Mjk6Njg6NjE1",
          text: "B3",
        },
        {
          x: 2047.4255172413796,
          y: 1651.7241379310342,
          id: "Mzk6Njg6MzM5",
          text: "J9",
        },
        {
          x: 908.7082758620693,
          y: 2001.7241379310344,
          id: "MzY6MzI2OjMwMw",
          text: "I3",
        },
        {
          x: 917.3289655172414,
          y: 2163.793103448276,
          id: "MzE6Mjk1OjY5OQ",
          text: "F20",
        },
        {
          x: 1170.7772413793107,
          y: 2053.448275862069,
          id: "Mzk6Njg6MzM5",
          text: "J8",
        },
        {
          x: 1487.88,
          y: 2058.62,
          id: "MzE6Njg6NDcx",
          text: "E",
        },
        {
          x: 1858.5665517241382,
          y: 2067.241379310345,
          id: "MzE6Mjk1OjY5OQ",
          text: "F23",
        },
        {
          x: 1989.6,
          y: 1986.21,
          id: "Mjk6Njg6NDgz",
          text: "C",
        },
        {
          x: 2393.835517241379,
          y: 1717.2413793103449,
          id: "MzE6Mjk1OjY5OQ",
          text: "F26",
        },
        {
          x: 2486.8,
          y: 1608.62,
          id: "Mjk6Njg6NDgz",
          text: "C",
        },
        {
          x: 2627.390344827586,
          y: 1718.9655172413795,
          id: "MzE6Mjk1OjY5OQ",
          text: "F27",
        },
        {
          x: 2630.8386206896553,
          y: 1848.2758620689654,
          id: "MzY6MzI2OjMwMw",
          text: "I4",
        },
        {
          x: 2444.7734482758624,
          y: 1989.655172413793,
          id: "MzE6Mjk1OjY5OQ",
          text: "F24",
        },
        {
          x: 2676.45,
          y: 1998.28,
          id: "Mjk6Njg6NDgz",
          text: "C",
        },
        {
          x: 2632.5627586206897,
          y: 2265.5172413793102,
          id: "MzU6Njg6MzE1",
          text: "H7",
        },
        {
          x: 924.51,
          y: 2391.38,
          id: "Mjk6Njg6NDgz",
          text: "C",
        },
        {
          x: 1085.36,
          y: 2358.62,
          id: "NDY6OTk6MjA3",
          text: "T",
        },
        {
          x: 1311.22,
          y: 2465.52,
          id: "NDM6Njg6MTQ3",
          text: "P",
        },
        {
          x: 1259.4954518412733,
          y: 2198.2758620689656,
          id: "MzI6OTk6MzAz",
          text: "G9",
        },
        {
          x: 1593.6937931034481,
          y: 2279.310344827586,
          id: "MzA6MzI2OjE3MQ",
          text: "D4",
        },
        {
          x: 1699.15,
          y: 2453.45,
          id: "Mjk6Njg6NDgz",
          text: "C",
        },
        {
          x: 1880.9803448275864,
          y: 2274.137931034483,
          id: "NDA6MzI2OjY1MQ",
          text: "L",
        },
        {
          x: 2049.0079310344827,
          y: 2391.379310344827,
          id: "Mzk6Njg6MzM5",
          text: "J7",
        },
        {
          x: 2161.2195897723077,
          y: 2331.0344827586205,
          id: "Mjk6Njg6NDgz",
          text: "C",
        },
        {
          x: 2290.2455172413797,
          y: 2272.4137931034484,
          id: "MzE6Mjk1OjY5OQ",
          text: "F21",
        },
        {
          x: 2267.8317241379305,
          y: 2427.5862068965516,
          id: "NDI6MzI2OjEyMw",
          text: "O",
        },
        {
          x: 1060.4324137931035,
          y: 2696.551724137931,
          id: "MzE6Mjk1OjY5OQ",
          text: "F17",
        },
        {
          x: 1127.3903448275862,
          y: 2756.896551724138,
          id: "Mjk6Njg6NDgz",
          text: "C",
        },
        {
          x: 1265.3213793103448,
          y: 2832.758620689656,
          id: "MzI6OTk6MzAz",
          text: "G7",
        },
        {
          x: 1439.088921917171,
          y: 2706.896551724138,
          id: "Mzk6Njg6MzM5",
          text: "J6",
        },
        {
          x: 1682.562758620689,
          y: 2646.551724137931,
          id: "MzE6Mjk1OjY5OQ",
          text: "F18",
        },
        {
          x: 2180.8386206896553,
          y: 2581.034482758621,
          id: "MzE6Mjk1OjY5OQ",
          text: "F19",
        },
        {
          x: 2325.5244827586203,
          y: 2641.379310344828,
          id: "MzI6OTk6MzAz",
          text: "G8",
        },
        {
          x: 2654.551379310345,
          y: 2610.344827586207,
          id: "MzU6Njg6MzE1",
          text: "H6",
        },
        {
          x: 963.3137931034485,
          y: 2856.896551724138,
          id: "MzE6Mjk1OjY5OQ",
          text: "F13",
        },
        {
          x: 1499.8041379310343,
          y: 2960.344827586207,
          id: "MzE6Mjk1OjY5OQ",
          text: "F14",
        },
        {
          x: 1929.6172413793101,
          y: 2839.6551724137935,
          id: "MzA6MzI2OjE3MQ",
          text: "D3",
        },
        {
          x: 2283.0655172413794,
          y: 2910.3448275862074,
          id: "MzE6Mjk1OjY5OQ",
          text: "F15",
        },
        {
          x: 2381.7676823205666,
          y: 2944.8275862068967,
          id: "MzE6Njg6NDcx",
          text: "E",
        },
        {
          x: 2707.061724137931,
          y: 2941.3793103448274,
          id: "MzE6Mjk1OjY5OQ",
          text: "F16",
        },
        {
          x: 2922.5789655172416,
          y: 3005.1724137931033,
          id: "Mjk6Njg6NDgz",
          text: "C",
        },
        {
          x: 751.2448275862066,
          y: 3227.5862068965516,
          id: "MzU6Njg6MzE1",
          text: "H4",
        },
        {
          x: 944.9927586206895,
          y: 3096.5517241379307,
          id: "Mjk6Njg6NDgz",
          text: "C",
        },
        {
          x: 1486.5137931034483,
          y: 3136.2068965517237,
          id: "Mzk6Njg6MzM5",
          text: "J4",
        },
        {
          x: 1419.0531034482763,
          y: 3229.310344827586,
          id: "NDM6Njg6OTk",
          text: "Q",
        },
        {
          x: 1686.3720689655174,
          y: 3156.896551724138,
          id: "MzE6Mjk1OjY5OQ",
          text: "F12",
        },
        {
          x: 1623.658620689655,
          y: 3244.8275862068963,
          id: "NDE6Mjk1OjEzNQ",
          text: "N",
        },
        {
          x: 1986.290371084386,
          y: 3122.4137931034484,
          id: "NDQ6OTk6NjE1",
          text: "R",
        },
        {
          x: 2159.5820689655175,
          y: 3213.793103448276,
          id: "Mjk6Njg6NDgz",
          text: "C",
        },
        {
          x: 2397.9382758620686,
          y: 3051.7241379310344,
          id: "Mzk6Njg6MzM5",
          text: "J5",
        },
        {
          x: 2545.930689655172,
          y: 3281.034482758621,
          id: "MzI6OTk6MzAz",
          text: "G6",
        },
        {
          x: 2822.578965517241,
          y: 3200,
          id: "MzU6Njg6MzE1",
          text: "H5",
        },
        {
          x: 2888.0962068965514,
          y: 3560.344827586207,
          id: "MzE6Mjk1OjY5OQ",
          text: "F11",
        },
        {
          x: 2763.958275862069,
          y: 3436.206896551724,
          id: "MzE6Mjk1OjY5OQ",
          text: "F10",
        },
        {
          x: 2669.130689655173,
          y: 3381.0344827586205,
          id: "Mjk6Njg6NDgz",
          text: "C",
        },
        {
          x: 2467.4065517241384,
          y: 3544.8275862068967,
          id: "Mzk6Njg6MzM5",
          text: "J3",
        },
        {
          x: 2470.8548275862067,
          y: 3670.689655172414,
          id: "MzE6Mjk1OjY5OQ",
          text: "F7",
        },
        {
          x: 2281.199655172414,
          y: 3432.7586206896553,
          id: "MzA6MzI2OjE3MQ",
          text: "D2",
        },
        {
          x: 1957.061724137931,
          y: 3400,
          id: "MzE6Mjk1OjY5OQ",
          text: "F9",
        },
        {
          x: 1556.1337931034486,
          y: 3344.8275862068963,
          id: "Mjk6Njg6NDgz",
          text: "C",
        },
        {
          x: 1587.168275862069,
          y: 3470.689655172414,
          id: "MzE6Mjk1OjY5OQ",
          text: "F8",
        },
        {
          x: 1246.7168965517244,
          y: 3501.7241379310344,
          id: "MzA6MzI2OjE3MQ",
          text: "D1",
        },
        {
          x: 944.99275862069,
          y: 3381.034482758621,
          id: "MzI6OTk6MzAz",
          text: "G5",
        },
        {
          x: 949.23724137931,
          y: 3568.965517241379,
          id: "MzU6Njg6MzE1",
          text: "H3",
        },
        {
          x: 1146.918323918904,
          y: 3731.034482758621,
          id: "Mjk6Njg6NjYz",
          text: "A",
        },
        {
          x: 970.8548275862072,
          y: 3808.620689655173,
          id: "Mjk6Njg6NjE1",
          text: "B1",
        },
        {
          x: 1061.3062068965519,
          y: 3839.655172413793,
          id: "MzE6Njg6NDcx",
          text: "E",
        },
        {
          x: 1100.961379310345,
          y: 3912.0689655172414,
          id: "Mjk6Njg6NDgz",
          text: "C",
        },
        {
          x: 1413.1720689655172,
          y: 3844.8275862068963,
          id: "MzI6OTk6MzAz",
          text: "G3",
        },
        {
          x: 1671.7927586206893,
          y: 3670.6896551724135,
          id: "Mzk6Mjk1OjM4Nw",
          text: "K",
        },
        {
          x: 1839.9620689655171,
          y: 3836.206896551724,
          id: "MzE6Mjk1OjY5OQ",
          text: "F6",
        },
        {
          x: 1996.5751724137936,
          y: 3712.068965517241,
          id: "Mjk6Njg6NDgz",
          text: "C",
        },
        {
          x: 2189.0341379310344,
          y: 3896.551724137931,
          id: "MzI6OTk6MzAz",
          text: "G4",
        },
        {
          x: 2828.689310344828,
          y: 3767.241379310345,
          id: "Mjk6Njg6NDgz",
          text: "C",
        },
        {
          x: 2811.306206896552,
          y: 3882.7586206896553,
          id: "MzE6Njg6NDcx",
          text: "E",
        },
        {
          x: 2727.1068965517243,
          y: 4022.4137931034484,
          id: "MzY6MzI2OjMwMw",
          text: "I2",
        },
        {
          x: 2595.788965517241,
          y: 4022.4137931034484,
          id: "MzE6Mjk1OjY5OQ",
          text: "F5",
        },
        {
          x: 2367.406551724138,
          y: 4118.965517241379,
          id: "Mjk6Njg6NDgz",
          text: "C",
        },
        {
          x: 2229.3337931034484,
          y: 4110.3448275862065,
          id: "MzE6Mjk1OjY5OQ",
          text: "F4",
        },
        {
          x: 1890.7582758620692,
          y: 3996.551724137931,
          id: "MzI6OTk6MzAz",
          text: "G2",
        },
        {
          x: 1835.585862068965,
          y: 4234.48275862069,
          id: "Mzk6Njg6MzM5",
          text: "J2",
        },
        {
          x: 2000.961379310345,
          y: 4356.896551724138,
          id: "MzU6Njg6MzE1",
          text: "H2",
        },
        {
          x: 1759.582068965517,
          y: 4284.48275862069,
          id: "MzE6Mjk1OjY5OQ",
          text: "F3",
        },
        {
          x: 1616.4786206896542,
          y: 4324.137931034483,
          id: "Mjk6Njg6NjE1",
          text: "B2",
        },
        {
          x: 1500.1651724137928,
          y: 4072.4137931034484,
          id: "Mjk6Njg6NDgz",
          text: "C",
        },
        {
          x: 1563.1720689655172,
          y: 3987.9310344827586,
          id: "NDA6MzI2OjE3MQ",
          text: "M",
        },
        {
          x: 1198.4410344827593,
          y: 4112.068965517241,
          id: "MzE6Mjk1OjY5OQ",
          text: "F1",
        },
        {
          x: 904.551379310345,
          y: 4168.965517241379,
          id: "MzY6MzI2OjMwMw",
          text: "I1",
        },
        {
          x: 635.4441379310342,
          y: 4651.724137931034,
          id: "MzU6Njg6MzE1",
          text: "H1",
        },
        {
          x: 711.4479310344823,
          y: 4505.172413793103,
          id: "Mzk6Njg6MzM5",
          text: "J1",
        },
        {
          x: 804.551379310345,
          y: 4418.965517241379,
          id: "MzE6Mjk1OjY5OQ",
          text: "F2",
        },
        {
          x: 978.6893103448278,
          y: 4401.724137931034,
          id: "Mjk6Njg6NDgz",
          text: "C",
        },
        {
          x: 1137.31,
          y: 4341.379310344827,
          id: "MzI6OTk6MzAz",
          text: "G1",
        },
      ],
      tokens: [],
    }),
    new ModuleScene({
      name: "map2",
      canonical: {
        name: "forp1/map2",
        priority: 0,
      },
      nameInfo: {
        x: 63.5914,
        y: 714.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 16,
      width: 1175,
      height: 892,
      imageLeft: 17,
      imageRight: 1155,
      imageCols: 60,
      imageTop: 126,
      imageBottom: 882,
      imageRows: 40,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/forp/maps/forp1-map2.json",
      journals: [
        {
          x: 2350,
          y: 3850,
          id: "MTU6Njg6MTcx",
        },
        {
          x: 2950,
          y: 3950,
          id: "MTY6MzI2OjI5MQ",
        },
        {
          x: 3250,
          y: 2950,
          id: "MTc6Mjk1OjY5OQ",
        },
        {
          x: 2850,
          y: 2950,
          id: "MTg6OTk6NjYz",
        },
        {
          x: 3100,
          y: 5e3,
          id: "MTg6OTk6NDU5",
        },
        {
          x: 4250,
          y: 3750,
          id: "MTg6OTk6MTM1",
        },
        {
          x: 4250,
          y: 2650,
          id: "MTg6MzI2OjEyMw",
        },
        {
          x: 4300,
          y: 5100,
          id: "MTk6Mjk1OjYyNw",
        },
        {
          x: 5700,
          y: 3900,
          id: "MjA6MzI2OjU0Mw",
        },
        {
          x: 5650,
          y: 2550,
          id: "MjA6MzI2OjM1MQ",
        },
        {
          x: 5700,
          y: 5300,
          id: "MjE6Njg6NjYz",
        },
        {
          x: 7100,
          y: 3900,
          id: "MjI6OTk6NjM5",
        },
        {
          x: 4350,
          y: 2150,
          id: "MjM6Njg6MTgz",
        },
        {
          x: 6550,
          y: 5150,
          id: "MjM6Mjk1OjU2Nw",
        },
        {
          x: 1700,
          y: 3850,
          id: "MTQ6MzI2OjI5MQ",
          text: "A1a",
        },
        {
          x: 2450,
          y: 3300,
          id: "MTQ6MzI2OjI5MQ",
          text: "A1c",
        },
        {
          x: 2350,
          y: 4550,
          id: "MTQ6MzI2OjI5MQ",
          text: "A1b",
        },
      ],
      tokens: [
        {
          id: "npc53",
          x: 1800,
          y: 3200,
        },
        {
          id: "npc53",
          x: 2400,
          y: 2800,
        },
        {
          id: "npc74",
          x: 2e3,
          y: 4400,
        },
        {
          id: "npc5",
          x: 2450,
          y: 3800,
        },
        {
          id: "npc52",
          x: 2900,
          y: 3800,
        },
        {
          id: "npc52",
          x: 3e3,
          y: 4100,
        },
        {
          id: "npc52",
          x: 3200,
          y: 4100,
        },
        {
          id: "npc52",
          x: 3400,
          y: 3800,
        },
        {
          id: "npc6",
          x: 4200,
          y: 4900,
        },
        {
          id: "npc6",
          x: 4300,
          y: 4900,
        },
        {
          id: "npc62",
          x: 4300,
          y: 5200,
        },
        {
          id: "npc46",
          x: 4400,
          y: 3700,
          elite: true,
        },
        {
          id: "npc46",
          x: 4100,
          y: 3900,
          elite: true,
        },
        {
          id: "npc75",
          x: 4400,
          y: 2600,
        },
        {
          id: "npc69",
          x: 4e3,
          y: 2e3,
        },
        {
          id: "npc67",
          x: 5100,
          y: 2400,
        },
        {
          id: "npc67",
          x: 5300,
          y: 2400,
        },
        {
          id: "npc67",
          x: 5700,
          y: 2400,
        },
        {
          id: "npc67",
          x: 6e3,
          y: 2400,
        },
        {
          id: "npc8",
          x: 7100,
          y: 3700,
        },
        {
          id: "npc44",
          x: 6400,
          y: 4700,
        },
        {
          id: "npc44",
          x: 6400,
          y: 5500,
        },
        {
          id: "npc7",
          x: 5700,
          y: 5200,
        },
      ],
    }),
    new ModuleScene({
      name: "map3a",
      canonical: {
        name: "forp1/map3a",
        priority: 0,
      },
      nameInfo: {
        x: 82,
        y: 712.3319,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 30,
      width: 1175,
      height: 773,
      imageLeft: 25,
      imageRight: 1170,
      imageCols: 35,
      imageTop: 34,
      imageBottom: 755,
      imageRows: 22,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/forp/maps/forp1-map3a.json",
      journals: [
        {
          x: 950,
          y: 750,
          id: "Mjk6Njg6MzAz",
        },
      ],
      tokens: [],
    }),
    new ModuleScene({
      name: "map3b",
      canonical: {
        name: "forp1/map3b",
        priority: 0,
      },
      nameInfo: {
        x: 58,
        y: 717.5862,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 32,
      width: 1175,
      height: 790,
      imageLeft: 25,
      imageRight: 1138,
      imageCols: 34,
      imageTop: 8,
      imageBottom: 761,
      imageRows: 23,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/forp/maps/forp1-map3b.json",
      journals: [
        {
          x: 950,
          y: 750,
          id: "Mjk6Njg6MTQ3",
        },
      ],
      tokens: [],
    }),
    new ModuleScene({
      name: "map4",
      canonical: {
        name: "forp1/map4",
        priority: 0,
      },
      nameInfo: {
        x: 83,
        y: 713.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 34,
      width: 1175,
      height: 776,
      imageLeft: 25,
      imageRight: 1171,
      imageCols: 35,
      imageTop: 2,
      imageBottom: 756,
      imageRows: 23,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/forp/maps/forp1-map4.json",
      journals: [
        {
          x: 950,
          y: 750,
          id: "Mjk6Mjk1Ojk5",
        },
      ],
      tokens: [],
    }),
    new ModuleScene({
      name: "map5",
      canonical: {
        name: "forp1/map5",
        priority: 0,
      },
      nameInfo: {
        x: 86,
        y: 712.3319,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 36,
      width: 1175,
      height: 776,
      imageLeft: 25,
      imageRight: 1172,
      imageCols: 35,
      imageTop: 35,
      imageBottom: 757,
      imageRows: 22,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/forp/maps/forp1-map5.json",
      journals: [
        {
          x: 950,
          y: 750,
          id: "MzA6OTk6MTQ3",
        },
      ],
      tokens: [],
    }),
    new ModuleScene({
      name: "map6a",
      canonical: {
        name: "forp1/map6a",
        priority: 0,
      },
      nameInfo: {
        x: 66,
        y: 640,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 46,
      width: 1175,
      height: 878,
      imageLeft: 9,
      imageRight: 1164,
      imageCols: 44,
      imageTop: 163,
      imageBottom: 847,
      imageRows: 26,
      cropLeft: 0,
      cropRight: 583,
      cropTop: 109,
      cropBottom: 480,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/forp/maps/forp1-map6a.json",
      journals: [
        {
          x: 1e3,
          y: 700,
          id: "MzY6MzI2OjMwMw",
          text: "Ia",
        },
        {
          x: 1700,
          y: 700,
          id: "MzY6MzI2OjMwMw",
          text: "Ib",
        },
        {
          x: 1e3,
          y: 1500,
          id: "MzY6MzI2OjMwMw",
          text: "Ic",
        },
        {
          x: 1700,
          y: 1500,
          id: "MzY6MzI2OjMwMw",
          text: "Id",
        },
        {
          x: 2400,
          y: 1100,
          id: "MzY6MzI2OjMwMw",
          text: "Ie",
        },
      ],
      tokens: [],
    }),
    new ModuleScene({
      name: "map6b",
      canonical: {
        name: "forp1/map6b",
        priority: 0,
      },
      nameInfo: {
        x: 334,
        y: 702.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 46,
      width: 1175,
      height: 878,
      imageLeft: 9,
      imageRight: 1164,
      imageCols: 44,
      imageTop: 163,
      imageBottom: 847,
      imageRows: 26,
      cropLeft: 594,
      cropRight: 1164,
      cropTop: 109,
      cropBottom: 480,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/forp/maps/forp1-map6b.json",
      journals: [
        {
          x: 750,
          y: 450,
          id: "NDE6Mjk1OjEzNQ",
        },
      ],
      tokens: [
        {
          id: "npc64",
          x: 2e3,
          y: 1100,
        },
        {
          id: "npc50",
          x: 1700,
          y: 1100,
        },
        {
          id: "npc50",
          x: 1900,
          y: 1e3,
        },
        {
          id: "npc50",
          x: 2300,
          y: 1100,
        },
        {
          id: "npc50",
          x: 2100,
          y: 1100,
        },
        {
          id: "npc50",
          x: 2200,
          y: 1200,
        },
        {
          id: "npc51",
          x: 1500,
          y: 600,
          elite: true,
        },
        {
          id: "npc51",
          x: 2100,
          y: 500,
          elite: true,
        },
      ],
    }),
    new ModuleScene({
      name: "map6c",
      canonical: {
        name: "forp1/map6c",
        priority: 0,
      },
      nameInfo: {
        x: 66,
        y: 534.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 46,
      width: 1175,
      height: 878,
      imageLeft: 9,
      imageRight: 1164,
      imageCols: 44,
      imageTop: 163,
      imageBottom: 847,
      imageRows: 26,
      cropLeft: 0,
      cropRight: 583,
      cropTop: 492,
      cropBottom: 847,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/forp/maps/forp1-map6c.json",
      journals: [
        {
          x: 650,
          y: 550,
          id: "NDI6MzI2OjEyMw",
        },
      ],
      tokens: [
        {
          id: "npc14",
          x: 1600,
          y: 800,
        },
      ],
    }),
    new ModuleScene({
      name: "map6d",
      canonical: {
        name: "forp1/map6d",
        priority: 0,
      },
      nameInfo: {
        x: 334,
        y: 534.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 46,
      width: 1175,
      height: 878,
      imageLeft: 9,
      imageRight: 1164,
      imageCols: 44,
      imageTop: 163,
      imageBottom: 847,
      imageRows: 26,
      cropLeft: 594,
      cropRight: 1164,
      cropTop: 492,
      cropBottom: 847,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      gridDistance: 10,
      detailsFile: "/forp/maps/forp1-map6d.json",
      journals: [
        {
          x: 950,
          y: 1150,
          id: "NDQ6MTA4OjI1NQ",
        },
        {
          x: 1350,
          y: 1150,
          id: "NDQ6MTA4OjIwNw",
        },
        {
          x: 1350,
          y: 950,
          id: "NDQ6MTA4OjE3MQ",
        },
        {
          x: 1350,
          y: 1450,
          id: "NDQ6MTA4OjE0Nw",
        },
        {
          x: 1450,
          y: 1450,
          id: "NDQ6MTA4OjEyMw",
        },
        {
          x: 1900,
          y: 1600,
          id: "NDQ6MzM1OjQ1OQ",
        },
        {
          x: 1900,
          y: 700,
          id: "NDQ6NDQyOjUzMQ",
        },
        {
          x: 1900,
          y: 1100,
          id: "NDQ6MzM1OjMxNQ",
        },
        {
          x: 2450,
          y: 850,
          id: "NDU6Nzc6NDIz",
        },
        {
          x: 2450,
          y: 1450,
          id: "NDU6Nzc6MzE1",
        },
        {
          x: 2450,
          y: 1150,
          id: "NDU6Nzc6OTk",
        },
        {
          x: 750,
          y: 550,
          id: "NDQ6OTk6NjE1",
        },
      ],
      tokens: [
        {
          id: "npc15",
          x: 2e3,
          y: 1e3,
        },
        {
          id: "npc9",
          x: 1700,
          y: 1e3,
        },
        {
          id: "npc40",
          x: 2500,
          y: 1300,
        },
        {
          id: "npc40",
          x: 2300,
          y: 1400,
        },
      ],
    }),
    new ModuleScene({
      name: "map7",
      canonical: {
        name: "forp1/map7",
        priority: 0,
      },
      nameInfo: {
        x: 83,
        y: 713.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 62,
      width: 1175,
      height: 788,
      imageLeft: 8,
      imageRight: 1164,
      imageCols: 56,
      imageTop: 11,
      imageBottom: 775,
      imageRows: 37,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/forp/maps/forp1-map7.json",
    }),
    new ModuleScene({
      name: "map8",
      canonical: {
        name: "forp1/map8",
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
      imageLeft: 35,
      imageRight: 1225,
      imageCols: 31,
      imageTop: 25,
      imageBottom: 1596,
      imageRows: 41,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/forp/maps/forp1-map8.json",
      journals: [
        {
          x: 950,
          y: 1150,
          id: "MzA6MzI2OjI3OQ",
        },
      ],
      tokens: [],
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
      page: 24,
      width: 1169,
      height: 780,
    }),
    new CaptionImage({
      name: "journal4",
      page: 28,
      width: 414,
      height: 414,
    }),
    new CaptionImage({
      name: "journal5",
      page: 31,
      width: 867,
      height: 1050,
    }),
    new CaptionImage({
      name: "journal6",
      page: 37,
      width: 884,
      height: 936,
    }),
    new CaptionImage({
      name: "journal7",
      page: 44,
      width: 539,
      height: 539,
    }),
    new CaptionImage({
      name: "journal8",
      page: 56,
      width: 1169,
      height: 780,
    }),
    new CaptionImage({
      name: "journal9",
      page: 68,
      width: 1261,
      height: 1636,
    }),
    new CaptionImage({
      name: "journal10",
      page: 74,
      width: 1261,
      height: 1636,
    }),
    new CaptionImage({
      name: "journal11",
      page: 77,
      width: 418,
      height: 418,
    }),
    new CaptionImage({
      name: "journal12",
      page: 77,
      width: 418,
      height: 418,
    }),
    new CaptionImage({
      name: "journal13",
      page: 78,
      width: 376,
      height: 376,
    }),
    new CaptionImage({
      name: "journal14",
      page: 78,
      width: 392,
      height: 392,
    }),
    new CaptionImage({
      name: "npc29",
      page: 76,
      width: 812,
      height: 1120,
    }),
    new CaptionImage({
      name: "npc30",
      page: 80,
      width: 815,
      height: 1153,
    }),
    new CaptionImage({
      name: "npc31",
      page: 81,
      width: 766,
      height: 1278,
    }),
    new CaptionImage({
      name: "npc32",
      page: 82,
      width: 380,
      height: 875,
    }),
    new CaptionImage({
      name: "npc33",
      page: 83,
      width: 474,
      height: 845,
    }),
    new CaptionImage({
      name: "npc34",
      page: 84,
      width: 911,
      height: 1203,
    }),
    new CaptionImage({
      name: "npc35",
      page: 85,
      width: 616,
      height: 1001,
    }),
    new CaptionImage({
      name: "npc36",
      page: 86,
      width: 852,
      height: 1025,
    }),
    new CaptionImage({
      name: "npc37",
      page: 87,
      width: 961,
      height: 618,
    }),
    new CaptionImage({
      name: "npc38",
      page: 88,
      width: 1015,
      height: 767,
    }),
    new CaptionImage({
      name: "npc39",
      page: 89,
      width: 772,
      height: 1127,
    }),
    new CaptionImage({
      name: "npc40",
      page: 90,
      width: 707,
      height: 1003,
    }),
    new CaptionImage({
      name: "npc41",
      page: 91,
      width: 818,
      height: 682,
    }),
    new CaptionImage({
      name: "npc42",
      page: 93,
      width: 892,
      height: 1261,
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 9,
        x: 248.5016,
        y: 424.0001,
      },
      page: 9,
      width: 564,
      height: 564,
      tokenX: 33,
      tokenY: 120,
      tokenSize: 620,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 10,
        x: 292.9779,
        y: 431.3752,
      },
      page: 10,
      width: 564,
      height: 564,
      tokenX: 22,
      tokenY: 113,
      tokenSize: 620,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.qpbFSs0Z68z58T4m",
      page: 12,
      width: 623,
      height: 1229,
      tokenX: -65,
      tokenY: 88,
      tokenSize: 473,
      forIds: ["MTI6MzI2OjMxNQ"],
    }),
    new ModuleNpc({
      id: "npc4",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.J7s3MTb3eZP6u3LT",
      page: 13,
      width: 501,
      height: 484,
      tokenX: 18,
      tokenY: 166,
      tokenSize: 613,
      forIds: ["MTM6MzQ1OjYyNw"],
    }),
    new ModuleNpc({
      id: "npc5",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.yNqeqEULKA536K4r",
      name: {
        page: 15,
        x: 258.1677,
        y: 431.3752,
      },
      page: 15,
      width: 418,
      height: 564,
      tokenX: 55,
      tokenY: 85,
      tokenSize: 564,
      forIds: ["MTY6OTk6MTM1"],
    }),
    new ModuleNpc({
      id: "npc6",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.wpu3AsCPAKMSvDqN",
      name: {
        page: 19,
        x: 345.2491,
        y: 162.2502,
      },
      page: 19,
      width: 794,
      height: 1141,
      tokenX: -120,
      tokenY: 83,
      tokenSize: 525,
      forIds: ["MjA6OTk6NDcx"],
      elite: true,
    }),
    new ModuleNpc({
      id: "npc7",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.Lsa0Q8aU8aPWjFYv",
      page: 21,
      width: 564,
      height: 564,
      tokenX: -39,
      tokenY: 88,
      tokenSize: 648,
      forIds: ["MjE6Mjk1OjQxMQ"],
    }),
    new ModuleNpc({
      id: "npc8",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.IGEht7ysUSZndtgp",
      page: 22,
      width: 757,
      height: 975,
      tokenX: -130,
      tokenY: 107,
      tokenSize: 443,
      forIds: ["MjM6Njg6NjM5"],
    }),
    new ModuleNpc({
      id: "npc10",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.rAsJXFWr1IJatEUm",
      page: 33,
      width: 846,
      height: 671,
      tokenX: -189,
      tokenY: 143,
      tokenSize: 622,
      forIds: ["MzM6Njg6NDM1"],
    }),
    new ModuleNpc({
      id: "npc11",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.ew2WOdIU5njPMzok",
      page: 38,
      width: 849,
      height: 1201,
      tokenX: 182,
      tokenY: 44,
      tokenSize: 977,
      forIds: ["Mzg6MzI2OjU5MQ"],
    }),
    new ModuleNpc({
      id: "npc12",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.gSlkZ86P3QrbM874",
      name: {
        page: 40,
        x: 104.7992,
        y: 154.5002,
      },
      page: 40,
      width: 629,
      height: 1209,
      tokenX: -138,
      tokenY: -7,
      tokenSize: 369,
      forIds: ["NDA6OTk6Njk5"],
    }),
    new ModuleNpc({
      id: "npc13",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.L2OWZ5Afvnmaif83",
      page: 42,
      width: 887,
      height: 1128,
      tokenX: 121,
      tokenY: 0,
      tokenSize: 1128,
      forIds: ["NDE6Njg6NDU5"],
    }),
    new ModuleNpc({
      id: "npc14",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.zNOSSDaaCozimqaS",
      page: 43,
      width: 961,
      height: 712,
      tokenX: -296,
      tokenY: 45,
      tokenSize: 765,
      forIds: ["NDM6Njg6NTU1"],
    }),
    new ModuleNpc({
      id: "npc15",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.gSlkZ86P3QrbM874",
      page: 45,
      width: 614,
      height: 1176,
      tokenX: -66,
      tokenY: 4,
      tokenSize: 420,
      forIds: ["NDU6Njg6NjI3"],
    }),
    new ModuleNpc({
      id: "npc16",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.tu64qeuTiIGHtvgR",
      page: 47,
      width: 873,
      height: 1105,
      tokenX: -176,
      tokenY: 86,
      tokenSize: 433,
      forIds: ["NDg6MzI2OjYwMw"],
    }),
    new ModuleNpc({
      id: "npc17",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.YHSV9DfaqoaSggLi",
      name: {
        page: 49,
        x: 371.6784,
        y: 150.2502,
      },
      page: 49,
      width: 773,
      height: 1263,
      tokenX: -87,
      tokenY: -288,
      tokenSize: 423,
      forIds: ["NDk6Njg6MjY3"],
      weak: true,
    }),
    new ModuleNpc({
      id: "npc18",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.nejHZ9ccKcDXZWQM",
      page: 50,
      width: 568,
      height: 569,
      tokenX: -3,
      tokenY: 119,
      tokenSize: 653,
      forIds: ["NTA6MzI2Ojk5"],
    }),
    new ModuleNpc({
      id: "npc19",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.TEHxsglxWi1i3jSN",
      page: 52,
      width: 796,
      height: 1056,
      tokenX: -252,
      tokenY: 119,
      tokenSize: 608,
      forIds: ["NTE6Mjk1OjM4Nw"],
    }),
    new ModuleNpc({
      id: "npc20",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.XiO3tJlYmuZwOBaA",
      page: 58,
      width: 969,
      height: 1255,
      tokenX: -245,
      tokenY: -44,
      tokenSize: 359,
      forIds: ["NTc6Njg6MTk1"],
    }),
    new ModuleNpc({
      id: "npc21",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 59,
        x: 263.4331,
        y: 410.2502,
      },
      page: 59,
      width: 634,
      height: 634,
      tokenX: 7,
      tokenY: 86,
      tokenSize: 634,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc22",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.HqN4nUnl75foBKLZ",
      page: 60,
      width: 604,
      height: 604,
      tokenX: 49,
      tokenY: 71,
      tokenSize: 688,
      forIds: ["OTM6Njg6Njk5"],
    }),
    new ModuleNpc({
      id: "npc23",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.jnN7fYYndv3oobJJ",
      page: 61,
      width: 828,
      height: 1215,
      tokenX: -266,
      tokenY: 47,
      tokenSize: 375,
      forIds: ["NjI6OTk6MjMx"],
    }),
    new ModuleNpc({
      id: "npc24",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.RKkIczqYUJkij0Oh",
      page: 64,
      width: 756,
      height: 1008,
      tokenX: -186,
      tokenY: 87,
      tokenSize: 392,
      forIds: ["NjU6Mjk1OjY5OQ"],
    }),
    new ModuleNpc({
      id: "npc25",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.XN2uksGMgndh1jSP",
      page: 66,
      width: 734,
      height: 1005,
      tokenX: 136,
      tokenY: 0,
      tokenSize: 1005,
      forIds: ["NjY6MzI2OjM4Nw"],
    }),
    new ModuleNpc({
      id: "npc26",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.blm15iXMR3Lbwdom",
      page: 70,
      width: 800,
      height: 1232,
      tokenX: -251,
      tokenY: 9,
      tokenSize: 364,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc27",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.Q6gjfL2rha7tRS0B",
      page: 72,
      width: 553,
      height: 584,
      tokenX: 16,
      tokenY: 0,
      tokenSize: 584,
      forIds: ["MTM6Njg6NjAz"],
    }),
    new ModuleNpc({
      id: "npc28",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.H5koEzKL8qtfX4fK",
      page: 73,
      width: 510,
      height: 591,
      tokenX: 71,
      tokenY: 39,
      tokenSize: 647,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc29",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.dTcsY3v9lg4BRrsj",
      page: 82,
      width: 380,
      height: 875,
      tokenX: 12,
      tokenY: 35,
      tokenSize: 399,
      forIds: ["ODI6MjUxOjExMQ"],
    }),
    new ModuleNpc({
      id: "npc30",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.yNqeqEULKA536K4r",
      page: 83,
      width: 474,
      height: 845,
      tokenX: -14,
      tokenY: 38,
      tokenSize: 369,
      forIds: ["ODM6Njg6MzAz"],
    }),
    new ModuleNpc({
      id: "npc31",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.CNbPWUHtLgNIeft5",
      page: 84,
      width: 911,
      height: 1203,
      tokenX: 146,
      tokenY: 0,
      tokenSize: 1203,
      forIds: ["NDY6OTk6MzM5", "ODQ6MjUxOjQ5NQ"],
    }),
    new ModuleNpc({
      id: "npc32",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.tBQgipDUVhamBNrZ",
      page: 85,
      width: 616,
      height: 1001,
      tokenX: 193,
      tokenY: 0,
      tokenSize: 1001,
      forIds: ["ODU6Njg6MzAz", "MzU6Njg6NTMx"],
    }),
    new ModuleNpc({
      id: "npc33",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.vjONecsFtSFpjNaN",
      page: 86,
      width: 852,
      height: 1025,
      tokenX: -107,
      tokenY: -323,
      tokenSize: 661,
      forIds: ["ODY6MzU3OjMwMw"],
    }),
    new ModuleNpc({
      id: "npc34",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.RCbSoJ0Kg6ovGnRG",
      page: 87,
      width: 961,
      height: 618,
      tokenX: -381,
      tokenY: 61,
      tokenSize: 513,
      forIds: ["ODc6Njg6NTA3"],
    }),
    new ModuleNpc({
      id: "npc35",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.YVP3pM7jxY9Gyouy",
      page: 88,
      width: 1015,
      height: 767,
      tokenX: 0,
      tokenY: 124,
      tokenSize: 1015,
      forIds: ["ODg6MjUxOjQ0Nw", "MzU6Njg6NDQ3"],
    }),
    new ModuleNpc({
      id: "npc36",
      actorUuid: "Compendium.pf2e.lost-omens-bestiary.Actor.GP61YtH3RvicMTkf",
      page: 89,
      width: 772,
      height: 1127,
      tokenX: 178,
      tokenY: 0,
      tokenSize: 1127,
      forIds: ["NDc6Njg6Njk5", "ODk6Njg6NDgz"],
    }),
    new ModuleNpc({
      id: "npc37",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.sXtwJyM7sWWDQDOU",
      page: 90,
      width: 707,
      height: 1003,
      tokenX: -156,
      tokenY: 99,
      tokenSize: 527,
      forIds: ["OTA6MjUxOjQ4Mw"],
    }),
    new ModuleNpc({
      id: "npc38",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.KHPOm5KHtbMNzcx7",
      page: 91,
      width: 818,
      height: 682,
      tokenX: -380,
      tokenY: -61,
      tokenSize: 566,
      forIds: ["OTE6Njg6NDgz"],
    }),
    new ModuleNpc({
      id: "npc39",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.HqN4nUnl75foBKLZ",
      page: 93,
      width: 892,
      height: 1261,
      tokenX: -194,
      tokenY: 82,
      tokenSize: 477,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc42",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.O9LzsedLTUVFtOix",
      label: "BS",
      forIds: ["MzI6OTk6OTk"],
    }),
    new ModuleNpc({
      id: "npc43",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.WqkV7xd2KOmNQd67",
      label: "BRA",
      forIds: ["MTc6Mjk1OjQxMQ"],
    }),
    new ModuleNpc({
      id: "npc44",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.skz8n8N9GEQY2c90",
      label: "CG",
      forIds: ["MjM6Mjk1OjI3OQ"],
    }),
    new ModuleNpc({
      id: "npc45",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.DW4UFHXzExWwvEuH",
      label: "DR",
      forIds: ["MzI6MzI2OjI3OQ"],
    }),
    new ModuleNpc({
      id: "npc46",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.RA2dkQJANNFjgdSt",
      label: "C",
      forIds: ["MTg6MzI2OjI1NQ"],
    }),
    new ModuleNpc({
      id: "npc47",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.zQraVA7SUjd6qGNh",
      label: "DM",
      forIds: ["MzM6Njg6NTMx"],
    }),
    new ModuleNpc({
      id: "npc51",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.TQtISRsI3FI2ddBR",
      label: "M",
      forIds: ["NDI6MzI2OjM5OQ"],
    }),
    new ModuleNpc({
      id: "npc52",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.TqKFvTmJnhdclCgt",
      label: "GM",
      forIds: ["MTc6Njg6NDgz"],
    }),
    new ModuleNpc({
      id: "npc53",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.eP4a0FAbus3tNTbc",
      label: "GS",
      forIds: ["MTU6Njg6Mjc5"],
    }),
    new ModuleNpc({
      id: "npc54",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.T5KMiSE8W1R8ChbV",
      label: "GS",
      forIds: ["MzQ6OTk6MTcx"],
    }),
    new ModuleNpc({
      id: "npc55",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.hkGMvgL9IOZcAKyc",
      label: "HH",
      forIds: ["NTM6Njg6MTgz"],
    }),
    new ModuleNpc({
      id: "npc56",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.t4bHhZBBDUyVzEmf",
      label: "IG",
      forIds: ["NDQ6NDE4OjU3OQ"],
    }),
    new ModuleNpc({
      id: "npc57",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.PsipHKpczW9FT2Jk",
      name: {
        page: 55,
        x: 294.75,
        y: 495,
        substring: {
          start: 0,
          end: 27,
        },
      },
      label: "PTS",
      forIds: ["NTU6Mjk1OjE5NQ", "NTU6Mjk1OjQ5NQ"],
      elite: true,
    }),
    new ModuleNpc({
      id: "npc58",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.PsipHKpczW9FT2Jk",
      label: "PTS",
      forIds: ["NTQ6MzI2OjM4Nw"],
    }),
    new ModuleNpc({
      id: "npc59",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.vjE1lUpklp4slNbd",
      label: "PTS",
      forIds: ["NTU6Njg6NTQz", "NTU6Mjk1OjEzNQ"],
    }),
    new ModuleNpc({
      id: "npc60",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.4h9jhODg2NwiYsPg",
      label: "PW",
      forIds: ["MzQ6OTk6MzAz"],
    }),
    new ModuleNpc({
      id: "npc61",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.YRyTBciVtCnO7J0Z",
      label: "RG",
      forIds: ["NjQ6MzI2OjU2Nw"],
    }),
    new ModuleNpc({
      id: "npc62",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.sVXMz65SI2rla17T",
      label: "SW",
      forIds: ["MjA6OTk6NDIz"],
    }),
    new ModuleNpc({
      id: "npc63",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.khAJHftnWe21eTm2",
      label: "SH",
      forIds: ["NjU6Mjk1OjEyMw"],
    }),
    new ModuleNpc({
      id: "npc64",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.F2Xhn4rqPAj55w3O",
      label: "BS",
      forIds: ["NDI6MzI2OjM1MQ"],
    }),
    new ModuleNpc({
      id: "npc65",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.Sx7Ob64O0e9aIhpO",
      label: "ST",
      forIds: ["NjU6Njg6NjM5"],
    }),
    new ModuleNpc({
      id: "npc66",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.Upf2fOZ6QgGG3seI",
      label: "SG",
      forIds: ["NTI6MzI2OjE0Nw"],
    }),
    new ModuleNpc({
      id: "npc67",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.jgMFqFDNUWsrnnBH",
      label: "TS",
      forIds: ["MjA6MzI2OjEzNQ"],
    }),
    new ModuleNpc({
      id: "npc68",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.Zp6lrCF3JwpdfKyK",
      label: "TI",
      forIds: ["MzM6Mjk1OjY5OQ"],
    }),
    new ModuleNpc({
      id: "npc69",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.rEjKVZqLfEC5jdVV",
      label: "VV",
      forIds: ["MjM6Mjk1OjY2Mw"],
    }),
    new ModuleNpc({
      id: "npc70",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.ExVmw8bSvUd2wYkI",
      label: "WH",
      forIds: ["NDg6OTk6NTU1"],
    }),
    new ModuleNpc({
      id: "npc71",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.XKOQ3ll9TGNso0uB",
      label: "B",
      forIds: ["Mzk6Njg6NDU5"],
    }),
    new ModuleNpc({
      id: "npc72",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.mwovQpf278O1vdCR",
      label: "WP",
      forIds: ["Mzc6Mjk1OjY5OQ"],
    }),
    new ModuleNpc({
      id: "npc73",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.ka41qAFCgGFBXUPJ",
      label: "WW",
      forIds: ["Mzg6MzI2OjIzMQ"],
    }),
    new ModuleNpc({
      id: "npc74",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.zAxKR8XWtQm2rqh4",
      label: "T",
      forIds: ["MTU6Njg6MjMx"],
    }),
    new ModuleNpc({
      id: "npc75",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.hCHAr6Mp0AxSxj3h",
      label: "WMW",
      forIds: ["MTk6Njg6NDQ3"],
    }),
    new ModuleNpc({
      id: "npc76",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.u3vdt2J02rw8RyRq",
      label: "YtJ(9",
      forIds: ["MTM6Mjk1OjE3MQ"],
    }),
    new ModuleNpc({
      id: "npc77",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.r3yLNfqS00g8sdrT",
      label: "DS",
      forIds: ["MzU6Njg6MzYz"],
    }),
    new ModuleNpc({
      id: "npc9",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.AYQEkPFyTuGlxNg3",
      page: 27,
      width: 878,
      height: 1157,
      tokenX: -166,
      tokenY: -37,
      tokenSize: 373,
      forIds: [
        "Mjc6Njg6NTQz",
        "Mzk6Mjk1OjE0Nw",
        "NjA6OTk6NjE1",
        "NTI6MzU1OjQ3MQ",
        "NDU6Njg6NTY3",
      ],
    }),
    new ModuleNpc({
      id: "npc40",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.AxVNn9nyobosLEAq",
      label: "AW",
      forIds: [
        "MjU6Njg6MzUx",
        "NDU6Njg6MTQ3",
        "NDg6OTk6NjI3",
        "NTA6MzI2OjE0Nw",
        "NTk6Mjk1OjY2Mw",
        "Mzk6Mjk1Ojk5",
      ],
    }),
    new ModuleNpc({
      id: "npc41",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.YHSV9DfaqoaSggLi",
      label: "AS",
      forIds: ["MjY6MzI2OjM5OQ", "NDc6Mjk1OjY5OQ"],
    }),
    new ModuleNpc({
      id: "npc48",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.o8UMCrKWf89xNvSE",
      label: "KA",
      forIds: ["MjY6OTk6Mjkx", "Mzk6Mjk1OjE5NQ", "NTA6OTk6MzI3"],
    }),
    new ModuleNpc({
      id: "npc49",
      actorUuid:
        "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.gSlkZ86P3QrbM874",
      label: "WM",
      forIds: ["MjU6Njg6Njk5", "NjA6OTk6NTU1", "NDk6Njg6NDIz"],
    }),
    new ModuleNpc({
      id: "npc50",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.EH84J9FedbK3ax50",
      label: "BW",
      forIds: ["NDI6MzI2OjI5MQ"],
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
          id: "NzozNzE6NDEx",
        },
        {
          id: "NjozMjY6MTk1",
        },
        {
          id: "ODo5OTo2OTk",
        },
        {
          id: "ODozMjY6Njk5",
        },
        {
          id: "OTo2ODo2OTk",
        },
        {
          id: "OToyOTU6MzUx",
        },
        {
          id: "MTA6OTk6MTIz",
        },
        {
          id: "MTA6MzczOjYxNQ",
        },
        {
          id: "MTA6MzI2OjE3MQ",
        },
        {
          id: "MTE6Njg6MTM1",
        },
        {
          id: "MTE6Mjk1OjM4Nw",
        },
        {
          id: "MTQ6OTk6Mjkx",
        },
        {
          id: "MTQ6MzI2OjI5MQ",
        },
        {
          id: "MTU6Njg6MTcx",
        },
        {
          id: "MTY6MzI2OjI5MQ",
        },
        {
          id: "MTc6Mjk1OjY5OQ",
        },
        {
          id: "MTg6OTk6NjYz",
        },
        {
          id: "MTg6OTk6NDU5",
        },
        {
          id: "MTg6OTk6MTM1",
        },
        {
          id: "MTg6MzI2OjEyMw",
        },
        {
          id: "MTk6Mjk1OjYyNw",
        },
        {
          id: "MjA6MzI2OjU0Mw",
        },
        {
          id: "MjA6MzI2OjM1MQ",
        },
        {
          id: "MjE6Njg6NjYz",
        },
        {
          id: "MjI6OTk6NjM5",
        },
        {
          id: "MjM6Njg6MTgz",
        },
        {
          id: "MjM6Mjk1OjU2Nw",
        },
        {
          id: "MjM6Mjk1OjE5NQ",
        },
      ],
    },
    {
      name: "Chapter 2",
      pages: [
        {
          id: "MjQ6MjU2OjM3MQ",
        },
        {
          id: "MjU6MzcxOjY5OQ",
        },
        {
          id: "MjY6MTE1OjY4Nw",
        },
        {
          id: "Mjk6MzExOjY4Nw",
        },
        {
          id: "MjQ6MzI2OjIzMQ",
        },
        {
          id: "MjQ6MzI2OjEzNQ",
        },
        {
          id: "MjU6Njg6NDEx",
        },
        {
          id: "MjY6OTk6Mzc1",
        },
        {
          id: "MjY6MzI2OjQ3MQ",
        },
        {
          id: "Mjc6Njg6NjM5",
        },
        {
          id: "Mjc6Mjk1OjY1MQ",
        },
        {
          id: "Mjg6OTk6NDk1",
        },
        {
          id: "Mjg6MzI2Ojk5",
        },
        {
          id: "Mjk6Njg6NjYz",
        },
        {
          id: "Mjk6Njg6NjE1",
        },
        {
          id: "Mjk6Njg6NDgz",
        },
        {
          id: "Mjk6Njg6MzAz",
        },
        {
          id: "Mjk6Njg6MTQ3",
        },
        {
          id: "Mjk6Mjk1Ojk5",
        },
        {
          id: "MzA6OTk6MTQ3",
        },
        {
          id: "MzA6MzI2OjI3OQ",
        },
        {
          id: "MzA6MzI2OjE3MQ",
        },
        {
          id: "MzE6Njg6NDcx",
        },
        {
          id: "MzE6Mjk1OjY5OQ",
        },
        {
          id: "MzI6OTk6MzAz",
        },
        {
          id: "MzU6Njg6MzE1",
        },
        {
          id: "MzY6MzI2OjMwMw",
        },
        {
          id: "Mzc6Njg6OTk",
        },
        {
          id: "Mzg6MzI2OjYzOQ",
        },
        {
          id: "Mzg6MzI2OjI3OQ",
        },
        {
          id: "Mzk6Njg6NTA3",
        },
        {
          id: "Mzk6Njg6MzM5",
        },
        {
          id: "Mzk6Mjk1OjM4Nw",
        },
        {
          id: "NDA6MzI2OjY1MQ",
        },
        {
          id: "NDA6MzI2OjE3MQ",
        },
        {
          id: "NDE6MzExOjY4Nw",
        },
        {
          id: "NDE6Mjk1OjEzNQ",
        },
        {
          id: "NDI6MzI2OjEyMw",
        },
        {
          id: "NDM6Njg6MTQ3",
        },
        {
          id: "NDM6Njg6OTk",
        },
        {
          id: "NDQ6OTk6NjE1",
        },
        {
          id: "NDQ6MTA4OjI1NQ",
        },
        {
          id: "NDQ6MTA4OjIwNw",
        },
        {
          id: "NDQ6MTA4OjE3MQ",
        },
        {
          id: "NDQ6MTA4OjE0Nw",
        },
        {
          id: "NDQ6MTA4OjEyMw",
        },
        {
          id: "NDQ6MTA4Ojg3",
        },
        {
          id: "NDQ6NDQyOjUzMQ",
        },
        {
          id: "NDQ6MzM1OjQ1OQ",
        },
        {
          id: "NDQ6MzM1OjMxNQ",
        },
        {
          id: "NDU6Nzc6NDIz",
        },
        {
          id: "NDU6Nzc6MzE1",
        },
        {
          id: "NDU6Nzc6OTk",
        },
        {
          id: "NDU6MzYxOjM1MQ",
        },
        {
          id: "NDY6OTk6MjA3",
        },
        {
          id: "NDc6Njg6NjUx",
        },
        {
          id: "NDc6Njg6MjA3",
        },
        {
          id: "NDc6Mjk1OjYzOQ",
        },
        {
          id: "NDg6OTk6NTA3",
        },
        {
          id: "NDk6Njg6NTE5",
        },
        {
          id: "NDk6Njg6MjA3",
        },
        {
          id: "NDk6Mjk1OjY5OQ",
        },
        {
          id: "NDk6Mjk1OjY1MQ",
        },
        {
          id: "NTA6MzQzOjY2Mw",
        },
        {
          id: "NTE6Njg6MjMx",
        },
        {
          id: "NTI6OTk6NTY3",
        },
        {
          id: "NTI6MzYxOjQxMQ",
        },
        {
          id: "NTM6Njg6NDgz",
        },
        {
          id: "NTM6Njg6NDM1",
        },
        {
          id: "NTM6Mjk1OjM2Mw",
        },
        {
          id: "NTQ6OTk6ODc",
        },
        {
          id: "NTQ6MzI2OjUxOQ",
        },
        {
          id: "NTU6Njg6Njk5",
        },
        {
          id: "NTU6Mjk1OjYzOQ",
        },
        {
          id: "NTU6Mjk1OjQyMw",
        },
      ],
    },
    {
      name: "Chapter 3",
      pages: [
        {
          id: "NTY6MjU3OjM5Ng",
        },
        {
          id: "NTc6MzcxOjY5OQ",
        },
        {
          id: "NzI6MTE1OjY4Nw",
        },
        {
          id: "Nzg6MTE1OjY4Nw",
        },
        {
          id: "NTc6Njg6Njk5",
        },
        {
          id: "NTc6Njg6NTA3",
        },
        {
          id: "NTg6Mzc0OjI3OQ",
        },
        {
          id: "NTk6Njg6MzUx",
        },
        {
          id: "NTk6MzY2OjYwMw",
        },
        {
          id: "NjA6OTk6Mjkx",
        },
        {
          id: "NjA6Mzk3OjUzMQ",
        },
        {
          id: "NjE6Njg6MjE5",
        },
        {
          id: "NjM6Njg6Njk5",
        },
        {
          id: "NjM6Mjk1OjEzNQ",
        },
        {
          id: "NjQ6MzI2OjM1MQ",
        },
        {
          id: "Njc6Njg6MTk1",
        },
        {
          id: "Njc6Mjk1OjM4Nw",
        },
      ],
    },
    {
      name: "Back Matter",
      pages: [
        {
          id: "Njk6MTA0OjY1OQ",
        },
        {
          id: "Njk6Mjk1OjU0Mw",
        },
        {
          id: "NzA6OTk6NjUx",
        },
        {
          id: "NzA6MzI2OjEzNQ",
        },
        {
          id: "NzE6Njg6MTM1",
        },
        {
          id: "NzE6Mjk1OjExMQ",
        },
        {
          id: "NzI6MzI2OjM1MQ",
        },
        {
          id: "NzM6Njg6MTIz",
        },
        {
          id: "NzU6MTMyOjY1OA",
        },
        {
          id: "NzU6Mjk1OjU0Mw",
        },
        {
          id: "NzU6Mjk1OjQ0Nw",
        },
        {
          id: "NzU6Mjk1OjM1MQ",
        },
        {
          id: "NzU6Mjk1OjIwNw",
        },
        {
          id: "NzY6OTk6Njk5",
        },
        {
          id: "Nzc6Njg6Njk5",
        },
        {
          id: "Nzg6MzUxOjY5OQ",
        },
        {
          id: "Nzg6MzcxOjU1NQ",
        },
        {
          id: "Nzk6Njg6Njk5",
        },
        {
          id: "ODA6OTk6Njk5",
        },
        {
          id: "ODE6Njg6Njk5",
        },
        {
          id: "ODI6MjUxOjY5OQ",
        },
        {
          id: "ODI6MjY3OjE5NQ",
        },
        {
          id: "ODM6Njg6NDEx",
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
          id: "ODY6MzMzOjQxMQ",
        },
        {
          id: "ODc6Njg6NjAz",
        },
        {
          id: "ODg6MjUxOjY5OQ",
        },
        {
          id: "ODk6Njg6Njk5",
        },
        {
          id: "OTA6MjUxOjY5OQ",
        },
        {
          id: "OTE6Njg6Njk5",
        },
        {
          id: "OTI6OTk6NjY2",
        },
        {
          id: "ODI6MTM2OjY2Mw",
        },
        {
          id: "ODM6MzcxOjY2Mw",
        },
        {
          id: "ODQ6MTYwOjY2Mw",
        },
        {
          id: "ODU6MzcxOjY2Mw",
        },
        {
          id: "ODY6MTU5OjY2Mw",
        },
        {
          id: "ODc6MzcxOjY2Mw",
        },
        {
          id: "ODg6MTcyOjY2Mw",
        },
        {
          id: "ODk6MzcxOjY2Mw",
        },
        {
          id: "OTA6MTc4OjY2Mw",
        },
        {
          id: "OTE6MzcxOjY2Mw",
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
      ],
    },
  ];
  combines = [
    {
      source: "OTI6MzI2OjI5MQ",
      dest: "OTI6OTk6NjY2",
    },
  ];
  detect(pdf) {
    return (
      pdf.textDetails.some(
        (t) => t.text.trim() === "Despair on" && t.fontId === "Gin-Regular:40",
      ) &&
      !pdf.textDetails.some(
        (t) =>
          t.text.trim() === "INTERACTIVE MAPS" && t.fontName === "Dax-Bold",
      )
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    this.markStartOfLine(text, 13, 344.75, 627);
    this.markStartOfLine(text, 13, 349.75, 579);
    this.markStartOfLine(text, 13, 359.75, 567);
    this.markStartOfLine(text, 13, 364.75, 555);
    this.markStartOfLine(text, 13, 390.75, 459);
    this.markStartOfLine(text, 58, 409.2499, 459);
    this.markStartOfLine(text, 58, 436.2499, 363);
    this.markStartOfLine(text, 84, 275.5, 423);
    this.markStartOfLine(text, 84, 299.5, 411);
    this.markStartOfLine(text, 84, 317.5, 399);
    this.markStartOfLine(text, 84, 333.5, 387);
    this.markStartOfLine(text, 84, 348.5, 375);
    this.markStartOfLine(text, 84, 361.5, 363);
    this.markStartOfLine(text, 86, 351.5, 279);
    this.markStartOfLine(text, 86, 351.5, 267);
    this.markStartOfLine(text, 86, 336.5, 255);
    this.markStartOfLine(text, 86, 330.5, 231);
    this.markStartOfLine(text, 86, 327.5, 219);
    this.markStartOfLine(text, 86, 320.5, 207);
    this.markStartOfLine(text, 86, 299.5, 171);
    this.markStartOfLine(text, 86, 282.5, 135);
    this.markStartOfLine(text, 86, 278.5, 123);
    this.markStartOfLine(text, 86, 274.5, 111);
    this.markStartOfLine(text, 86, 289.5, 99);
    this.markStartOfLine(text, 88, 376.4999, 255);
    this.markStartOfLine(text, 88, 456.4999, 183);
    this.markStartOfLine(text, 88, 295.4999, 111);
    this.markStartOfLine(text, 90, 253.5, 459);
    this.markStartOfLine(text, 90, 255.5, 447);
    this.markStartOfLine(text, 90, 255.5, 435);
    this.markStartOfLine(text, 90, 253.5, 423);
    this.markStartOfLine(text, 90, 251.5, 411);
    this.markStartOfLine(text, 90, 257.5, 399);
    this.markStartOfLine(text, 90, 265.5, 387);
    this.markStartOfLine(text, 90, 271.5, 339);
    this.markStartOfLine(text, 90, 272.5, 351);
    this.markStartOfLine(text, 90, 272.5, 327);
    this.markStartOfLine(text, 90, 282.5, 303);
    this.markStartOfLine(text, 90, 292.5, 219);
    this.markStartOfLine(text, 90, 296.5, 255);
    this.markStartOfLine(text, 90, 288.5, 171);
    this.markStartOfLine(text, 90, 250.5, 99);
    this.markStartOfLine(text, 66, 354.25, 183);
    this.markStartOfLine(text, 66, 362.25, 171);
    this.markStartOfLine(text, 66, 373.25, 147);
    this.changeFontId(text, 17, 274.7791, 363, "GoodOT:9");
    this.changeTextFn(text, 14, 157.499, 291, (t) => ` ${t}`);
    for (let i = 0; i < text.length; i++) {
      [44, 45].includes(text[i].page) &&
        text[i].fontId === "TimesNewRomanPS-BoldMT:9" &&
        text[i].text.startsWith("R") &&
        text[i].text.trim().endsWith(":") &&
        ((text[i].fontId = "GoodOT-Bold:12"),
        (text[i].fontName = "GoodOT-Bold"),
        (text[i].fontSize = 12),
        (text[i].text = text[i].text.trim()),
        text[i].text.endsWith(":") &&
          (text[i].text = text[i].text.substring(0, text[i].text.length - 1)));
    }
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
