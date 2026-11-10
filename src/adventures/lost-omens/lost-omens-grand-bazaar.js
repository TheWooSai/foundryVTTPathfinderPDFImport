import { LostOmensBase } from "./base.js";

export class LostOmensGrandBazaar extends LostOmensBase {
  prefix = "lost-omens-grand-bazaar";
  fullName = "Lost Omens - Grand Bazaar";
  noImport = true;
  pages = [
    this.LeftTwoColumnWithMap(5, 370),
    this.RightTwoColumn(6),
    this.LeftTwoColumn(9),
    this.RightTwoColumn(10),
    this.LeftTwoColumn(11),
    this.RightTwoColumnWithMap(12, 480),
    this.LeftTwoColumn(13),
    this.RightTwoColumn(14),
    this.LeftTwoColumn(15),
    this.RightTwoColumn(16),
    this.LeftTwoColumn(17),
    this.RightTwoColumn(18),
    this.LeftTwoColumn(19),
    this.RightTwoColumnWithRightCutout(20, 510),
    this.LeftTwoColumn(21),
    this.RightTwoColumn(22),
    this.LeftTwoColumn(23),
    this.RightTwoColumn(24),
    this.LeftTwoColumn(25),
    this.RightTwoColumn(26),
    this.LeftTwoColumn(27),
    this.RightTwoColumn(28),
    this.LeftTwoColumn(29),
    this.RightTwoColumn(30),
    this.LeftTwoColumn(31),
    this.RightTwoColumn(32),
    this.LeftTwoColumn(33),
    this.RightTwoColumn(34),
    this.LeftTwoColumn(35),
    this.RightTwoColumn(36),
    this.LeftTwoColumn(37),
    this.RightTwoColumn(38),
    this.LeftTwoColumn(39),
    this.RightTwoColumn(40),
    this.LeftTwoColumn(41),
    this.RightTwoColumn(42),
    this.LeftTwoColumn(43),
    this.RightTwoColumn(44),
    this.LeftTwoColumn(45),
    this.RightTwoColumnWithRightCutout(46, 0),
    this.LeftTwoColumn(47),
    this.RightTwoColumn(48),
    this.LeftTwoColumn(49),
    this.RightTwoColumn(50),
    this.LeftTwoColumn(51),
    this.RightTwoColumn(52),
    this.LeftTwoColumn(53),
    this.RightTwoColumn(54),
    this.LeftTwoColumn(55),
    this.RightTwoColumn(56),
    this.LeftTwoColumn(57),
    this.RightTwoColumn(58),
    this.LeftTwoColumn(59),
    this.RightTwoColumn(60),
    this.LeftTwoColumn(61),
    this.RightSingleColumnWithSidebar(62),
    this.LeftSingleColumnWithSidebar(63),
    this.RightSingleColumnWithSidebar(64),
    this.LeftSingleColumnWithSidebar(65),
    this.RightSingleColumnWithSidebar(66),
    this.LeftTwoColumn(67),
    this.RightTwoColumn(68),
    this.RightSingleColumnWithSidebar(70),
    this.LeftTwoColumn(71),
    this.RightTwoColumn(72),
    this.LeftTwoColumn(73),
    this.RightTwoColumn(74),
    this.LeftTwoColumn(75),
    this.RightTwoColumn(76),
    this.LeftTwoColumn(77),
    this.RightSingleColumnWithSidebar(78),
    this.LeftTwoColumn(79),
    this.RightTwoColumn(80),
    this.LeftTwoColumn(81),
    this.RightTwoColumn(82),
    this.LeftTwoColumn(83),
    this.RightTwoColumn(84),
    this.LeftTwoColumn(85),
    this.RightTwoColumn(86),
    this.LeftTwoColumn(87),
    this.RightTwoColumn(88),
    this.LeftTwoColumn(89),
    this.RightTwoColumn(90),
    this.LeftTwoColumn(91),
    this.RightTwoColumn(92),
    this.LeftTwoColumn(93),
    this.RightTwoColumn(94),
    this.LeftTwoColumn(95),
    this.RightTwoColumn(96),
    this.LeftTwoColumn(97),
    this.RightTwoColumn(98),
    this.LeftTwoColumn(99),
    this.RightTwoColumn(100),
    this.LeftTwoColumn(101),
    this.RightTwoColumn(102),
    this.LeftTwoColumn(103),
    this.RightTwoColumn(104),
    this.LeftTwoColumn(105),
    this.RightTwoColumn(106),
    this.LeftTwoColumn(107),
    this.LeftTwoColumn(109),
    this.RightTwoColumn(110),
    this.LeftTwoColumn(111),
    this.RightTwoColumn(112),
    this.LeftTwoColumn(113),
    this.RightTwoColumn(114),
    this.LeftTwoColumn(115),
    this.RightTwoColumn(116),
    this.LeftTwoColumn(117),
    this.RightTwoColumn(118),
    this.LeftTwoColumn(121),
    this.RightTwoColumn(122),
    this.LeftTwoColumn(123),
    this.RightTwoColumn(124),
    this.LeftTwoColumn(125),
    this.RightTwoColumn(126),
    this.LeftTwoColumn(127),
    this.RightTwoColumn(128),
    this.LeftTwoColumn(133),
    this.RightTwoColumn(134),
    this.LeftTwoColumn(135),
  ];
  scenes = [];
  journals = [];
  npcs = [];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.page === 1 && t.text === "Grand Bazaar" && t.fontId === "Taroca:36",
    );
  }
  extractDetails(text, module, sectionKey) {
    this.markStartOfLine(text, 15, 383.003, 543.003);
    this.markStartOfLine(text, 15, 380.00600000000003, 519.0090000000001);
    this.markStartOfLine(text, 15, 380.00600000000003, 519.0090000000001);
    this.markStartOfLine(text, 15, 397.007, 483.0180000000001);
    this.markStartOfLine(text, 15, 397.007, 471.0210000000001);
    this.markStartOfLine(text, 15, 387.008, 459.02400000000006);
    this.markStartOfLine(text, 15, 387.008, 447.02700000000004);
    this.markStartOfLine(text, 15, 350.998, 291.00899999999996);
    this.markStartOfLine(text, 15, 345.00399999999996, 267.01499999999993);
    this.markStartOfLine(text, 15, 322.0089999999999, 219.02699999999987);
    this.markStartOfLine(text, 15, 318.0129999999999, 207.02999999999986);
    return super.extractDetails(text, module, sectionKey);
  }
  finalize() {}
}
