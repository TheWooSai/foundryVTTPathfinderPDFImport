import { LostOmensBase } from "./base.js";

export class LostOmensMonstersOfMyth extends LostOmensBase {
  prefix = "lost-omens-monsters-of-myth";
  fullName = "Lost Omens - Monsters of Myth";
  noImport = true;
  pages = [
    this.LeftTwoColumn(5),
    this.RightSingleColumnWithSidebar(6),
    this.RightTwoColumn(8),
    this.LeftTwoColumn(9),
    this.RightTwoColumn(10),
    this.LeftTwoColumn(11),
    this.RightSingleColumnWithSidebar(12),
    this.RightTwoColumn(14),
    this.LeftTwoColumn(15),
    this.RightTwoColumn(16),
    this.LeftTwoColumn(17),
    this.RightTwoColumn(18),
    this.RightTwoColumn(20),
    this.LeftTwoColumn(21),
    this.RightTwoColumn(22),
    this.LeftTwoColumn(23),
    this.RightTwoColumnWithRightCutout(24, 540),
    this.RightTwoColumn(26),
    this.LeftTwoColumn(27),
    this.RightTwoColumn(28),
    this.LeftTwoColumn(29),
    this.RightTwoColumnWithRightCutout(30, 300),
    this.RightTwoColumn(32),
    this.LeftTwoColumn(33),
    this.RightTwoColumn(34),
    this.LeftTwoColumn(35),
    this.RightTwoColumn(36),
    this.RightTwoColumn(38),
    this.LeftTwoColumn(39),
    this.RightTwoColumn(40),
    this.LeftTwoColumn(41),
    this.RightTwoColumn(42),
    this.RightTwoColumn(44),
    this.LeftTwoColumn(45),
    this.RightTwoColumn(46),
    this.LeftTwoColumn(47),
    this.RightTwoColumnWithRightCutout(48, 560),
    this.RightTwoColumn(50),
    this.LeftTwoColumn(51),
    this.RightTwoColumnWithRightCutout(52, 400),
    this.LeftTwoColumn(53),
    this.RightTwoColumn(54),
    this.RightTwoColumn(56),
    this.LeftTwoColumn(57),
    this.RightTwoColumn(58),
    this.LeftTwoColumn(59),
    this.RightTwoColumn(60),
    this.RightTwoColumn(62),
    this.LeftTwoColumn(63),
    this.RightTwoColumn(64),
    this.LeftTwoColumn(65),
    this.RightTwoColumn(66),
    this.RightTwoColumn(68),
    this.LeftTwoColumn(69),
    this.RightTwoColumn(70),
    this.LeftTwoColumn(71),
    this.RightTwoColumn(72),
    this.RightTwoColumn(74),
    this.LeftTwoColumn(75),
    this.RightTwoColumn(76),
    this.LeftTwoColumn(77),
    this.RightTwoColumn(78),
    this.RightTwoColumn(80),
    this.LeftTwoColumn(81),
    this.RightTwoColumn(82),
    this.LeftTwoColumn(83),
    this.RightTwoColumn(84),
    this.RightTwoColumn(86),
    this.LeftTwoColumn(87),
    this.RightTwoColumn(88),
    this.LeftTwoColumn(89),
    this.RightTwoColumn(90),
    this.RightTwoColumn(92),
    this.LeftTwoColumn(93),
    this.RightTwoColumn(94),
    this.LeftTwoColumn(95),
    this.RightTwoColumn(96),
    this.RightTwoColumn(98),
    this.LeftTwoColumn(99),
    this.RightTwoColumn(100),
    this.LeftTwoColumn(101),
    this.RightTwoColumn(102),
    this.RightTwoColumn(104),
    this.LeftTwoColumn(105),
    this.RightTwoColumn(106),
    this.LeftTwoColumn(107),
    this.RightTwoColumn(108),
    this.RightTwoColumn(110),
    this.LeftTwoColumn(111),
    this.RightTwoColumn(112),
    this.LeftTwoColumn(113),
    this.RightTwoColumn(114),
    this.RightTwoColumn(116),
    this.LeftTwoColumn(117),
    this.RightTwoColumn(118),
    this.LeftTwoColumn(119),
    this.RightTwoColumn(120),
    this.RightTwoColumn(122),
    this.LeftTwoColumn(123),
    this.RightTwoColumn(124),
    this.LeftTwoColumn(125),
    this.RightTwoColumn(126),
  ];
  scenes = [];
  journals = [];
  npcs = [];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.page === 1 &&
        t.text === "Monsters of Myth" &&
        t.fontId === "Taroca:36",
    );
  }
  extractDetails(text, module, sectionKey) {
    this.markStartOfLine(text, 23, 348, 519);
    this.markStartOfLine(text, 23, 349, 495);
    this.markStartOfLine(text, 23, 374, 387);
    this.markStartOfLine(text, 23, 379, 363);
    this.markStartOfLine(text, 23, 384, 327);
    this.markStartOfLine(text, 23, 396, 291);
    this.markStartOfLine(text, 23, 407, 231);
    this.markIndented(text, 23, 347.0001, 111);
    this.markIndented(text, 23, 370.0001, 87);
    this.markIndented(text, 23, 380.0001, 75);
    this.markIndented(text, 23, 383.0001, 63);
    this.markStartOfLine(text, 29, 388, 447);
    this.markStartOfLine(text, 29, 381, 435);
    this.markStartOfLine(text, 29, 362, 375);
    this.markStartOfLine(text, 29, 371, 351);
    this.markStartOfLine(text, 29, 378, 327);
    this.markStartOfLine(text, 29, 352, 219);
    this.markStartOfLine(text, 47, 344, 303);
    this.markStartOfLine(text, 47, 353, 291);
    this.markStartOfLine(text, 47, 355, 279);
    this.markStartOfLine(text, 47, 375, 255);
    this.markStartOfLine(text, 47, 397, 171);
    this.markStartOfLine(text, 47, 394, 123);
    this.markStartOfLine(text, 47, 394, 111);
    this.markStartOfLine(text, 47, 395, 87);
    this.markStartOfLine(text, 47, 391, 63);
    this.markStartOfLine(text, 53, 362, 375);
    this.markStartOfLine(text, 53, 405, 291);
    this.markStartOfLine(text, 53, 380, 171);
    this.markIndented(text, 54, 319, 579);
    this.markIndented(text, 54, 384, 531);
    this.markIndented(text, 54, 389, 507);
    this.markIndented(text, 54, 400, 459);
    this.markStartOfLine(text, 59, 350, 495);
    this.markStartOfLine(text, 59, 360, 471);
    this.markStartOfLine(text, 59, 359, 447);
    this.markStartOfLine(text, 59, 356, 435);
    this.markStartOfLine(text, 59, 350, 411);
    this.markStartOfLine(text, 59, 370, 351);
    this.markIndented(text, 59, 415, 279);
    this.markIndented(text, 59, 417, 267);
    this.markIndented(text, 59, 397, 219);
    this.markStartOfLine(text, 59, 397, 147);
    this.markStartOfLine(text, 59, 394, 87);
    this.markStartOfLine(text, 65, 368, 171);
    this.markStartOfLine(text, 65, 349, 63);
    this.markStartOfLine(text, 83, 340, 231);
    this.markStartOfLine(text, 83, 356, 207);
    this.markStartOfLine(text, 83, 365, 195);
    this.markStartOfLine(text, 83, 371, 171);
    this.markStartOfLine(text, 83, 374, 159);
    this.markStartOfLine(text, 83, 373, 135);
    this.markStartOfLine(text, 107, 120, 387);
    this.markStartOfLine(text, 107, 124, 375);
    this.markStartOfLine(text, 125, 327, 123);
    this.markStartOfLine(text, 125, 333, 87);
    this.markStartOfLine(text, 125, 325, 351);
    return super.extractDetails(text, module, sectionKey);
  }
  finalize() {}
}
