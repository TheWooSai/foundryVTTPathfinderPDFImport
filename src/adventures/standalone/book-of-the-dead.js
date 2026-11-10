import { AdventureBase } from "../../core/adventure-base.js";

export class BookOfTheDead extends AdventureBase {
  prefix = "botd";
  fullName = "Book of the Dead";
  pages = [
    this.RightSingleColumnWithSidebar(72),
    this.LeftTwoColumn(73),
    this.RightTwoColumn(74),
    this.LeftOneColumnWithSidebar(75),
    this.RightSingleColumnWithSidebar(76),
    this.LeftOneColumnWithSidebar(77),
    this.RightSingleColumnWithSidebar(78),
    this.LeftOneColumnWithSidebar(79),
    this.RightSingleColumnWithSidebar(80),
    this.LeftOneColumnWithSidebar(81),
    this.RightSingleColumnWithSidebar(82),
    this.LeftOneColumnWithSidebar(83),
    this.RightSingleColumnWithSidebar(84),
    this.LeftOneColumnWithSidebar(85),
    this.RightSingleColumnWithSidebar(86),
    this.LeftOneColumnWithSidebar(87),
    this.RightSingleColumnWithSidebar(88),
    this.LeftOneColumnWithSidebar(89),
    this.RightSingleColumnWithSidebar(90),
    this.LeftOneColumnWithSidebar(91),
    this.RightSingleColumnWithSidebar(92),
    this.LeftOneColumnWithSidebar(93),
    this.RightSingleColumnWithSidebar(94),
    this.LeftOneColumnWithSidebar(95),
    this.RightSingleColumnWithSidebar(96),
    this.LeftOneColumnWithSidebar(97),
    this.RightSingleColumnWithSidebar(98),
    this.LeftOneColumnWithSidebar(101),
    this.RightSingleColumnWithSidebar(102),
    this.LeftOneColumnWithSidebar(105),
    this.RightSingleColumnWithSidebar(106),
    this.LeftOneColumnWithSidebar(107),
    this.RightSingleColumnWithSidebar(108),
    this.LeftOneColumnWithSidebar(111),
    this.RightSingleColumnWithSidebar(112),
    this.LeftOneColumnWithSidebar(113),
    this.RightSingleColumnWithSidebar(114),
    this.LeftOneColumnWithSidebar(115),
    this.RightSingleColumnWithSidebar(116),
    this.LeftOneColumnWithSidebar(117),
    this.RightSingleColumnWithSidebar(118),
    this.LeftOneColumnWithSidebar(121),
    this.RightSingleColumnWithSidebar(122),
    this.LeftOneColumnWithSidebar(123),
    this.RightSingleColumnWithSidebar(124),
    this.LeftOneColumnWithSidebar(125),
    this.RightSingleColumnWithSidebar(126),
    this.LeftOneColumnWithSidebar(127),
    this.RightSingleColumnWithSidebar(128),
    this.LeftOneColumnWithSidebar(131),
    this.RightSingleColumnWithSidebar(132),
    this.LeftOneColumnWithSidebar(133),
    this.RightSingleColumnWithSidebar(134),
    this.LeftOneColumnWithSidebar(135),
    this.RightSingleColumnWithSidebar(136),
    this.LeftOneColumnWithSidebar(137),
    this.RightSingleColumnWithSidebar(138),
    this.LeftOneColumnWithSidebar(139),
    this.RightSingleColumnWithSidebar(140),
    this.LeftOneColumnWithSidebar(141),
    this.RightSingleColumnWithSidebar(142),
    this.LeftOneColumnWithSidebar(143),
    this.RightSingleColumnWithSidebar(144),
    this.LeftOneColumnWithSidebar(145),
    this.RightSingleColumnWithSidebar(146),
    this.LeftOneColumnWithSidebar(147),
    this.RightSingleColumnWithSidebar(148),
    this.LeftOneColumnWithSidebar(149),
    this.RightSingleColumnWithSidebar(150),
    this.LeftOneColumnWithSidebar(151),
    this.RightSingleColumnWithSidebar(152),
    this.LeftOneColumnWithSidebar(153),
    this.RightSingleColumnWithSidebar(154),
    this.LeftOneColumnWithSidebar(157),
    this.RightSingleColumnWithSidebar(158),
    this.LeftOneColumnWithSidebar(159),
    this.RightSingleColumnWithSidebar(160),
    this.LeftOneColumnWithSidebar(161),
    this.RightSingleColumnWithSidebar(162),
    this.LeftOneColumnWithSidebar(163),
    this.RightSingleColumnWithSidebar(164),
    this.LeftOneColumnWithSidebar(165),
    this.RightSingleColumnWithSidebar(166),
    this.LeftOneColumnWithSidebar(169),
    this.RightSingleColumnWithSidebar(170),
    this.LeftOneColumnWithSidebar(171),
    this.RightSingleColumnWithSidebar(172),
    this.LeftOneColumnWithSidebar(173),
    this.RightSingleColumnWithSidebar(174),
  ];
  scenes = [];
  journals = [];
  pageTop = 715;
  pageBottom = 40;
  LeftPageTwoColumn = {
    col1X1: 82,
    col1X2: 310,
    col2X1: 316.25,
    col2X2: 550,
  };
  RightPageTwoColumn = {
    col1X1: 67.5,
    col1X2: 290,
    col2X1: 301.75,
    col2X2: 510,
  };
  LeftPageSingleColumnWithSidebar = {
    x1: 238.1667,
    x2: 520,
    sidebarX1: 75,
    sidebarX2: 230,
  };
  blacklistedFonts = [
    "Times-Italic:8",
    "CrushYourEnemies-ExtraBold:7",
    "CrushYourEnemies-ExtraBold:6.5",
    "GoodOT:5.247",
  ];
  headingFontIds = [
    "GoodOT-Bold:12",
    "GoodOT-CondBold:12",
    "Taroca:28",
    "Taroca:22",
    "Taroca:16",
  ];
  normalFontIds = ["SabonLTStd-Roman:9", "GoodOT:8.5", "Pathfinder-Icons:9"];
  subheadingFontIds = ["Gin-Regular:12", "Gin-Round:12"];
  italicFontIds = [
    "SabonLTStd-Italic:9",
    "GoodOT-Italic:8.5",
    "GoodOT-CondLightItalic:9",
  ];
  boldFontIds = [
    "TimesNewRomanPS-BoldMT:9",
    "TimesNewRomanPSMT:9",
    "SabonLTStd-BoldItalic:11",
    "TimesNewRomanPS-BoldItalicMT:9",
    "GoodOT-Bold:8.5",
    "GoodOT-BoldItalic:9",
    "Times-Bold:9",
  ];
  dropCapFontIds = [];
  paragraphFontIds = this.subheadingFontIds
    .concat(this.normalFontIds)
    .concat(this.italicFontIds)
    .concat(this.boldFontIds);
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Book of the Dead" && t.fontId === "Taroca:34.9399",
    );
  }
  finalize() {}
  ChapterHeadingPageLayout(pageNum) {
    return (pdf, emit) => {
      const pageContent = pdf.textDetails
          .filter(
            (t) =>
              t.page === pageNum &&
              ["GoodOT:9", "SabonLTStd-Roman:9"].includes(t.fontId),
          )
          .map((t) => t.y),
        headingStartY = Math.max(...pageContent) + 25,
        page = this.LeftPageTwoColumn;
      (this.getAllTextInBoundingBox(
        pdf,
        pageNum,
        0,
        520,
        this.pageTop,
        headingStartY,
        emit,
      ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          page.col1X1,
          page.col1X2,
          headingStartY,
          this.pageBottom,
          emit,
        ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          page.col2X1,
          page.col2X2,
          headingStartY,
          this.pageBottom,
          emit,
        ));
    };
  }
  RightChapterHeadingPageLayout(pageNum) {
    return (pdf, emit) => {
      const pageContent = pdf.textDetails
          .filter((t) => t.page === pageNum && t.fontSize > 30)
          .map((t) => t.y),
        headingStartY = Math.min(...pageContent) - 10,
        page = this.RightPageTwoColumn;
      (this.getAllTextInBoundingBox(
        pdf,
        pageNum,
        0,
        520,
        this.pageTop,
        headingStartY,
        emit,
      ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          page.col1X1,
          page.col1X2,
          headingStartY,
          this.pageBottom,
          emit,
        ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          page.col2X1,
          page.col2X2,
          headingStartY,
          this.pageBottom,
          emit,
        ));
    };
  }
  RightSingleColumnChapterHeadingPageLayout(pageNum) {
    return (pdf, emit) => {
      const pageContent = pdf.textDetails
          .filter((t) => t.page === pageNum && t.fontSize > 30)
          .map((t) => t.y),
        headingStartY = Math.min(...pageContent) - 10,
        page = this.RightPageTwoColumn;
      (this.getAllTextInBoundingBox(
        pdf,
        pageNum,
        0,
        520,
        this.pageTop,
        headingStartY,
        emit,
      ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          page.col1X1,
          370,
          headingStartY,
          this.pageBottom,
          emit,
        ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          370,
          510,
          headingStartY,
          this.pageBottom,
          emit,
          `sidebar${pageNum}`,
        ));
    };
  }
  LeftOneColumnWithSidebar(pageNum) {
    return (pdf, emit) => {
      const page = this.LeftPageSingleColumnWithSidebar;
      (this.getAllTextInBoundingBox(
        pdf,
        pageNum,
        page.x1,
        page.x2,
        this.pageTop,
        this.pageBottom,
        emit,
      ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          page.sidebarX1,
          page.sidebarX2,
          this.pageTop,
          this.pageBottom,
          emit,
          `sidebar${pageNum}`,
        ));
    };
  }
  RightSingleColumnWithSidebar(pageNum) {
    return (pdf, emit) => {
      const page = this.RightPageTwoColumn;
      (this.getAllTextInBoundingBox(
        pdf,
        pageNum,
        page.col1X1,
        370,
        this.pageTop,
        this.pageBottom,
        emit,
      ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          370,
          510,
          this.pageTop,
          this.pageBottom,
          emit,
          `sidebar${pageNum}`,
        ));
    };
  }
  RightSingleColumnWithSidebarAndMap(pageNum, handoutBottom) {
    return (pdf, emit) => {
      const page = this.RightPageTwoColumn;
      (this.getAllTextInBoundingBox(
        pdf,
        pageNum,
        page.col1X1,
        370,
        handoutBottom,
        this.pageBottom,
        emit,
      ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          370,
          510,
          this.pageTop,
          this.pageBottom,
          emit,
          `sidebar${pageNum}`,
        ));
    };
  }
  RightSingleColumnWithSidebarAndHandout(pageNum, handoutBottom) {
    return (pdf, emit) => {
      const page = this.RightPageTwoColumn;
      (this.getAllTextInBoundingBox(
        pdf,
        pageNum,
        page.col1X1,
        370,
        700,
        handoutBottom,
        emit,
        `handout${pageNum}`,
      ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          page.col1X1,
          370,
          handoutBottom,
          this.pageBottom,
          emit,
        ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          370,
          510,
          this.pageTop,
          this.pageBottom,
          emit,
          `sidebar${pageNum}`,
        ));
    };
  }
  LeftTwoColumn(pageNum) {
    return (pdf, emit) => {
      const page = this.LeftPageTwoColumn;
      (this.getAllTextInBoundingBox(
        pdf,
        pageNum,
        page.col1X1,
        page.col1X2,
        this.pageTop,
        this.pageBottom,
        emit,
      ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          page.col2X1,
          page.col2X2,
          this.pageTop,
          this.pageBottom,
          emit,
        ));
    };
  }
  RightTwoColumn(pageNum) {
    return (pdf, emit) => {
      const page = this.RightPageTwoColumn;
      (this.getAllTextInBoundingBox(
        pdf,
        pageNum,
        page.col1X1,
        page.col1X2,
        this.pageTop,
        this.pageBottom,
        emit,
      ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          page.col2X1,
          page.col2X2,
          this.pageTop,
          this.pageBottom,
          emit,
        ));
    };
  }
  LeftTwoColumnWithMap(pageNum, sectionTop) {
    return (pdf, emit) => {
      const page = this.LeftPageTwoColumn;
      (this.getAllTextInBoundingBox(
        pdf,
        pageNum,
        page.col1X1,
        page.col1X2,
        sectionTop,
        this.pageBottom,
        emit,
      ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          page.col2X1,
          page.col2X2,
          sectionTop,
          this.pageBottom,
          emit,
        ));
    };
  }
  RightTwoColumnWithMap(pageNum, sectionTop) {
    return (pdf, emit) => {
      const page = this.RightPageTwoColumn;
      (this.getAllTextInBoundingBox(
        pdf,
        pageNum,
        page.col1X1,
        page.col1X2,
        sectionTop,
        this.pageBottom,
        emit,
      ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          page.col2X1,
          page.col2X2,
          sectionTop,
          this.pageBottom,
          emit,
        ));
    };
  }
  LeftTwoColumnWithTopHandout(pageNum, sectionTop) {
    return (pdf, emit) => {
      const page = this.LeftPageTwoColumn;
      (this.getAllTextInBoundingBox(
        pdf,
        pageNum,
        page.col1X1,
        page.col1X2,
        sectionTop,
        this.pageBottom,
        emit,
      ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          page.col2X1,
          page.col2X2,
          sectionTop,
          this.pageBottom,
          emit,
        ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          67.5,
          550,
          this.pageTop,
          sectionTop,
          emit,
          `handout${pageNum}`,
        ));
    };
  }
  LeftTwoColumnWithLeftCutout(pageNum, cutoutPos) {
    return (pdf, emit) => {
      const page = this.LeftPageTwoColumn;
      (this.getAllTextInBoundingBox(
        pdf,
        pageNum,
        108.35,
        320,
        this.pageTop,
        cutoutPos,
        emit,
        `sidebar${pageNum}`,
      ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          page.col1X1,
          page.col1X2,
          cutoutPos,
          this.pageBottom,
          emit,
        ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          page.col2X1,
          page.col2X2,
          this.pageTop,
          this.pageBottom,
          emit,
        ));
    };
  }
  RightTwoColumnWithRightCutout(pageNum, cutoutPos) {
    return (pdf, emit) => {
      const page = this.RightPageTwoColumn;
      (this.getAllTextInBoundingBox(
        pdf,
        pageNum,
        page.col1X1,
        page.col1X2,
        this.pageTop,
        this.pageBottom,
        emit,
      ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          page.col2X1,
          page.col2X2,
          cutoutPos,
          this.pageBottom,
          emit,
        ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          311,
          515,
          this.pageTop,
          cutoutPos,
          emit,
          `sidebar${pageNum}`,
        ));
    };
  }
  RightTwoColumnWithTopHandout(pageNum, sectionTop, section) {
    return (pdf, emit) => {
      const page = this.RightPageTwoColumn;
      (this.getAllTextInBoundingBox(
        pdf,
        pageNum,
        page.col1X1,
        page.col1X2,
        sectionTop,
        this.pageBottom,
        emit,
        section,
      ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          page.col2X1,
          page.col2X2,
          sectionTop,
          this.pageBottom,
          emit,
          section,
        ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          67.5,
          page.col2X2,
          this.pageTop,
          sectionTop,
          emit,
          `handout${pageNum}`,
        ));
    };
  }
  detectPageLayout(pdf, page) {
    const entries = pdf.textDetails.filter((x) => x.page === page),
      leftCol1 =
        entries.filter((x) => Math.abs(x.x - this.LeftPageTwoColumn.col1X1) < 1)
          .length > 5,
      leftCol2 =
        entries.filter((x) => Math.abs(x.x - this.LeftPageTwoColumn.col2X1) < 1)
          .length > 5,
      rightCol1 =
        entries.filter(
          (x) => Math.abs(x.x - this.RightPageTwoColumn.col1X1) < 1,
        ).length > 5,
      rightCol2 =
        entries.filter(
          (x) => Math.abs(x.x - this.RightPageTwoColumn.col2X1) < 1,
        ).length > 5,
      leftOneCol1 =
        entries.filter(
          (x) => Math.abs(x.x - this.LeftPageSingleColumnWithSidebar.x1) < 1,
        ).length > 5;
    entries.filter(
      (x) => Math.abs(x.x - this.LeftPageSingleColumnWithSidebar.sidebarX1) < 1,
    ).length > 5;
    const hasHeading = entries.some(
        (x) =>
          x.fontName === "PresentLTStd-Black" && x.fontSize >= 21 && x.y < 720,
      ),
      topOfText = Math.max(
        ...entries
          .filter(
            (t) => t.fontId === "SabonLTStd-Roman:9" || t.fontId === "GoodOT:9",
          )
          .map((t) => t.y),
      ),
      hasSidebarHeader = entries.some(
        (x) => x.fontId === "GoodOT-CondBold:12" && x.color === "#526568",
      );
    if (rightCol1 && rightCol2) {
      if (!hasHeading) {
        if (hasSidebarHeader) {
          const topLine = Math.max(
            0,
            ...entries
              .filter((t) => Math.abs(t.x - this.RightPageTwoColumn.col2X1) < 1)
              .map((t) => t.y),
          );
          return `this.RightTwoColumnWithRightCutout(${page}, ${Math.ceil(topLine / 10) * 10})`;
        } else {
          return topOfText > 650
            ? `this.RightTwoColumn(${page})`
            : `this.RightTwoColumnWithMap(${page})`;
        }
      }
    } else if (leftCol1 && leftCol2) {
      if (hasHeading) {
        return `this.ChapterHeadingPageLayout(${page})`;
      }
      if (hasSidebarHeader) {
        const topLine = Math.max(
          0,
          ...entries
            .filter((t) => Math.abs(t.x - this.LeftPageTwoColumn.col1X1) < 1)
            .map((t) => t.y),
        );
        return `this.LeftTwoColumnWithLeftCutout(${page}, ${Math.ceil(topLine / 10) * 10})`;
      }
      return topOfText > 650
        ? `this.LeftTwoColumn(${page})`
        : `this.LeftTwoColumnWithMap(${page})`;
    } else if (rightCol1) {
      if (hasHeading) {
        return `this.RightChapterHeadingWithSidebar(${page})`;
      }
      if (hasSidebarHeader) {
        const topLine = Math.max(
          0,
          ...entries
            .filter((t) => Math.abs(t.x - this.RightPageTwoColumn.col2X1) < 1)
            .map((t) => t.y),
        );
        return `this.RightTwoColumnWithRightCutout(${page}, ${Math.ceil(topLine / 10) * 10})`;
      }
      return `this.RightSingleColumnWithSidebar(${page})`;
    } else if (leftCol1) {
      if (hasHeading) {
        return `this.LeftChapterHeadingWithSidebar(${page})`;
      }
      if (hasSidebarHeader) {
        const topLine = Math.max(
          0,
          ...entries
            .filter((t) => Math.abs(t.x - this.LeftPageTwoColumn.col1X1) < 1)
            .map((t) => t.y),
        );
        return `this.LeftTwoColumnWithLeftCutout(${page}, ${Math.ceil(topLine / 10) * 10})`;
      }
      return `this.LeftOneColumnWithSidebar(${page})`;
    } else {
      if (leftOneCol1) {
        return `this.LeftOneColumnWithSidebar(${page})`;
      }
      if (leftCol2 && hasHeading) {
        return `this.LeftTwoColumnWithLeftSidebar(${page})`;
      }
    }
    return "";
  }
  extractDetails(text, moduleData, sectionKey) {
    this.removeText(text, 80, 253.5088, 231);
    this.markStartOfLine(text, 75, 285.1666, 387);
    this.markStartOfLine(text, 75, 289.1666, 375);
    this.markStartOfLine(text, 75, 289.1666, 363);
    this.markStartOfLine(text, 75, 289.1666, 351);
    this.markStartOfLine(text, 75, 288.1666, 339);
    this.markStartOfLine(text, 75, 296.1666, 315);
    this.markStartOfLine(text, 75, 297.1666, 303);
    this.markStartOfLine(text, 75, 292.1666, 279);
    this.markStartOfLine(text, 77, 259.1667, 411);
    this.markStartOfLine(text, 77, 261.1667, 399);
    this.markStartOfLine(text, 77, 265.1667, 387);
    this.markStartOfLine(text, 77, 329.1667, 339);
    this.markStartOfLine(text, 77, 329.1667, 327);
    this.markStartOfLine(text, 77, 315.1667, 303);
    this.markStartOfLine(text, 77, 316.1667, 291);
    this.markStartOfLine(text, 77, 320.1667, 231);
    this.markStartOfLine(text, 77, 287.1667, 147);
    this.markStartOfLine(text, 77, 287.1667, 87);
    this.markStartOfLine(text, 79, 302.1667, 351);
    this.markStartOfLine(text, 79, 316.1667, 339);
    this.markStartOfLine(text, 79, 328.1667, 327);
    this.markStartOfLine(text, 79, 336.1667, 303);
    this.markStartOfLine(text, 81, 245.1667, 279);
    this.markStartOfLine(text, 81, 249.1667, 267);
    this.markStartOfLine(text, 81, 251.1667, 255);
    this.markStartOfLine(text, 81, 259.1667, 243);
    this.markStartOfLine(text, 81, 265.1667, 231);
    this.markStartOfLine(text, 81, 268.1667, 219);
    this.markStartOfLine(text, 81, 271.1667, 195);
    this.markStartOfLine(text, 81, 271.1667, 183);
    this.markStartOfLine(text, 83, 309.1667, 351);
    this.markStartOfLine(text, 83, 317.1667, 339);
    this.markStartOfLine(text, 83, 326.1667, 315);
    this.markStartOfLine(text, 83, 343.1667, 279);
    this.markStartOfLine(text, 83, 350.1667, 267);
    this.markStartOfLine(text, 83, 349.1667, 255);
    this.markStartOfLine(text, 83, 330.1667, 219);
    this.markStartOfLine(text, 83, 305.1667, 147);
    this.markStartOfLine(text, 85, 299.1667, 483);
    this.markStartOfLine(text, 85, 298.1667, 471);
    this.markStartOfLine(text, 85, 293.1667, 447);
    this.markStartOfLine(text, 85, 291.1667, 423);
    this.markStartOfLine(text, 85, 295.1667, 411);
    this.markStartOfLine(text, 85, 297.1667, 399);
    this.markStartOfLine(text, 85, 284.1667, 363);
    this.markStartOfLine(text, 85, 307.1667, 339);
    this.markStartOfLine(text, 85, 319.1667, 327);
    this.markStartOfLine(text, 85, 316.1667, 291);
    this.markStartOfLine(text, 85, 310.1667, 279);
    this.markStartOfLine(text, 85, 317.1667, 255);
    this.markStartOfLine(text, 85, 311.1667, 231);
    this.markStartOfLine(text, 85, 317.1667, 207);
    this.markStartOfLine(text, 85, 309.1667, 135);
    this.markStartOfLine(text, 85, 330.1667, 75);
    this.markStartOfLine(text, 89, 243.1666, 459);
    this.markStartOfLine(text, 89, 250.1666, 435);
    this.markStartOfLine(text, 89, 264.1666, 387);
    this.markStartOfLine(text, 89, 288.1666, 303);
    this.markStartOfLine(text, 89, 297.1666, 291);
    this.markStartOfLine(text, 89, 303.1666, 279);
    this.markStartOfLine(text, 89, 274.1666, 87);
    this.markStartOfLine(text, 89, 280.1666, 75);
    this.markStartOfLine(text, 89, 281.1666, 63);
    this.markStartOfLine(text, 89, 281.1666, 51);
    this.markStartOfLine(text, 91, 283.1667, 483);
    this.markStartOfLine(text, 91, 295.1667, 459);
    this.markStartOfLine(text, 91, 295.1667, 447);
    this.markStartOfLine(text, 91, 295.1667, 435);
    this.markIndented(text, 91, 265.1667, 387);
    this.markIndented(text, 91, 251.1667, 339);
    this.markStartOfLine(text, 91, 254.1667, 327);
    this.markStartOfLine(text, 91, 263.1667, 291);
    this.markStartOfLine(text, 91, 271.1667, 207);
    this.markStartOfLine(text, 93, 250.1667, 471);
    this.markStartOfLine(text, 93, 353.1667, 387);
    this.markStartOfLine(text, 93, 348.1667, 375);
    this.markStartOfLine(text, 93, 295.1667, 351);
    this.markStartOfLine(text, 93, 295.1667, 339);
    this.markStartOfLine(text, 93, 271.1667, 315);
    this.markStartOfLine(text, 93, 311.1667, 135);
    this.markStartOfLine(text, 95, 258.1667, 243);
    this.markStartOfLine(text, 95, 262.1667, 231);
    this.markStartOfLine(text, 95, 271.1667, 207);
    this.markStartOfLine(text, 95, 266.1667, 219);
    this.markStartOfLine(text, 95, 299.1667, 99);
    this.markStartOfLine(text, 97, 393.1667, 219);
    this.markStartOfLine(text, 101, 352.1666, 495);
    this.markStartOfLine(text, 101, 353.1666, 483);
    this.markStartOfLine(text, 101, 354.1666, 423);
    this.markStartOfLine(text, 101, 346.1666, 411);
    this.markStartOfLine(text, 101, 279.1666, 363);
    this.markStartOfLine(text, 101, 250.1666, 219);
    this.markStartOfLine(text, 105, 270.1667, 303);
    this.markStartOfLine(text, 105, 251.1667, 435);
    this.markStartOfLine(text, 105, 244.1667, 423);
    this.markStartOfLine(text, 105, 256.1667, 399);
    this.markStartOfLine(text, 105, 242.1667, 387);
    this.markStartOfLine(text, 107, 320.1666, 543);
    this.markStartOfLine(text, 107, 321.1666, 531);
    this.markStartOfLine(text, 107, 329.1666, 507);
    this.markStartOfLine(text, 107, 333.1666, 483);
    this.markStartOfLine(text, 107, 335.1666, 471);
    this.markStartOfLine(text, 107, 332.1666, 459);
    this.markStartOfLine(text, 107, 300.1666, 423);
    this.markStartOfLine(text, 107, 299.1666, 411);
    this.markStartOfLine(text, 107, 297.1666, 387);
    this.markStartOfLine(text, 107, 296.1666, 363);
    this.markStartOfLine(text, 107, 279.1666, 315);
    this.markStartOfLine(text, 107, 351.1666, 183);
    this.markStartOfLine(text, 113, 302.1666, 363);
    this.markStartOfLine(text, 113, 304.1666, 351);
    this.markStartOfLine(text, 113, 304.1666, 339);
    this.markStartOfLine(text, 113, 303.1666, 315);
    this.markStartOfLine(text, 113, 301.1666, 303);
    this.markStartOfLine(text, 113, 295.1666, 291);
    this.markStartOfLine(text, 113, 287.1666, 279);
    this.markStartOfLine(text, 113, 269.1666, 255);
    this.markStartOfLine(text, 113, 261.1666, 195);
    this.markStartOfLine(text, 113, 276.1666, 147);
    this.markStartOfLine(text, 113, 274.1666, 135);
    this.markStartOfLine(text, 113, 273.1666, 111);
    this.markStartOfLine(text, 115, 410.1666, 255);
    this.markStartOfLine(text, 115, 348.1666, 183);
    this.markStartOfLine(text, 115, 347.1666, 171);
    this.markStartOfLine(text, 115, 327.1666, 147);
    this.markStartOfLine(text, 115, 301.1666, 123);
    this.markStartOfLine(text, 117, 326.1666, 447);
    this.markStartOfLine(text, 117, 324.1666, 435);
    this.markStartOfLine(text, 117, 320.1666, 423);
    this.markStartOfLine(text, 117, 320.1666, 411);
    this.markStartOfLine(text, 117, 314.1666, 399);
    this.markStartOfLine(text, 117, 269.1666, 387);
    this.markStartOfLine(text, 117, 274.1666, 363);
    this.markStartOfLine(text, 117, 260.1666, 327);
    this.markStartOfLine(text, 117, 295.1666, 159);
    this.markStartOfLine(text, 117, 279.1666, 123);
    this.markStartOfLine(text, 121, 258.1667, 279);
    this.markStartOfLine(text, 121, 289.1667, 243);
    this.markStartOfLine(text, 121, 295.1667, 135);
    this.markStartOfLine(text, 125, 316.1666, 327);
    this.markStartOfLine(text, 125, 317.1666, 315);
    this.markStartOfLine(text, 125, 316.1666, 291);
    this.markStartOfLine(text, 125, 314.1666, 279);
    this.markStartOfLine(text, 125, 310.1666, 255);
    this.markStartOfLine(text, 125, 307.1666, 231);
    this.markStartOfLine(text, 127, 291.1668, 327);
    this.markStartOfLine(text, 127, 312.1668, 255);
    this.markStartOfLine(text, 127, 293.1668, 111);
    this.markStartOfLine(text, 127, 293.1668, 99);
    this.markStartOfLine(text, 127, 290.1668, 87);
    this.markStartOfLine(text, 127, 289.1668, 75);
    this.markStartOfLine(text, 127, 288.1668, 63);
    this.markStartOfLine(text, 127, 286.1668, 51);
    this.markStartOfLine(text, 131, 270.1667, 519);
    this.markStartOfLine(text, 131, 263.1666, 507);
    this.markStartOfLine(text, 131, 253.1666, 495);
    this.markStartOfLine(text, 131, 250.1666, 483);
    this.markStartOfLine(text, 131, 250.1667, 471);
    this.markStartOfLine(text, 131, 246.1666, 411);
    this.markStartOfLine(text, 131, 248.1667, 399);
    this.markStartOfLine(text, 131, 248.1667, 387);
    this.markStartOfLine(text, 131, 245.1666, 375);
    this.markStartOfLine(text, 131, 245.1666, 363);
    this.markStartOfLine(text, 133, 276.1666, 219);
    this.markStartOfLine(text, 133, 284.1666, 207);
    this.markStartOfLine(text, 133, 289.1666, 195);
    this.markStartOfLine(text, 133, 287.1666, 171);
    this.markStartOfLine(text, 133, 285.1666, 159);
    this.markStartOfLine(text, 133, 291.1666, 147);
    this.markStartOfLine(text, 133, 304.1666, 123);
    this.markStartOfLine(text, 133, 305.1666, 111);
    this.markStartOfLine(text, 133, 303.1666, 87);
    this.markStartOfLine(text, 133, 294.1666, 63);
    this.markStartOfLine(text, 133, 287.1666, 51);
    this.markStartOfLine(text, 135, 289.1667, 387);
    this.markStartOfLine(text, 135, 291.1667, 375);
    this.markStartOfLine(text, 135, 291.1667, 363);
    this.markStartOfLine(text, 135, 293.1667, 339);
    this.markStartOfLine(text, 135, 292.1667, 327);
    this.markStartOfLine(text, 135, 297.1667, 315);
    this.markStartOfLine(text, 135, 299.1667, 291);
    this.markStartOfLine(text, 135, 321.1667, 219);
    this.markStartOfLine(text, 135, 325.1667, 207);
    this.markStartOfLine(text, 135, 333.1667, 183);
    this.markStartOfLine(text, 135, 333.1667, 159);
    this.markStartOfLine(text, 139, 252.1666, 291);
    this.markStartOfLine(text, 139, 276.1666, 243);
    this.markStartOfLine(text, 139, 276.1666, 231);
    this.markStartOfLine(text, 139, 272.1666, 207);
    this.markStartOfLine(text, 141, 307.1667, 483);
    this.markStartOfLine(text, 141, 311.1667, 495);
    this.markStartOfLine(text, 141, 300.1667, 459);
    this.markStartOfLine(text, 141, 293.1667, 447);
    this.markStartOfLine(text, 141, 287.1667, 435);
    this.markStartOfLine(text, 141, 284.1667, 423);
    this.markStartOfLine(text, 141, 295.1667, 231);
    this.markStartOfLine(text, 141, 277.1667, 123);
    this.markStartOfLine(text, 141, 277.1667, 111);
    this.markStartOfLine(text, 141, 277.1667, 99);
    this.markStartOfLine(text, 143, 301.1667, 183);
    this.markStartOfLine(text, 143, 290.1667, 171);
    this.markStartOfLine(text, 143, 271.1667, 159);
    this.markStartOfLine(text, 143, 271.1667, 147);
    this.markStartOfLine(text, 143, 268.1667, 135);
    this.markStartOfLine(text, 143, 254.1667, 123);
    this.markStartOfLine(text, 143, 255.1668, 87);
    this.markStartOfLine(text, 143, 260.1668, 75);
    this.markStartOfLine(text, 143, 260.1667, 63);
    this.markStartOfLine(text, 149, 323.1667, 387);
    this.markStartOfLine(text, 149, 333.1666, 375);
    this.markStartOfLine(text, 149, 345.1666, 363);
    this.markStartOfLine(text, 149, 354.1666, 351);
    this.markStartOfLine(text, 149, 363.1666, 339);
    this.markStartOfLine(text, 149, 364.1666, 291);
    this.markStartOfLine(text, 149, 358.1666, 279);
    this.markStartOfLine(text, 149, 296.1666, 255);
    this.markStartOfLine(text, 149, 296.1666, 243);
    this.markStartOfLine(text, 149, 264.1666, 147);
    this.markStartOfLine(text, 151, 272.1667, 315);
    this.markStartOfLine(text, 151, 286.1667, 303);
    this.markStartOfLine(text, 151, 292.1667, 291);
    this.markStartOfLine(text, 151, 293.1667, 279);
    this.markIndented(text, 153, 294.1667, 375);
    this.markIndented(text, 153, 321.1667, 339);
    this.markIndented(text, 153, 317.1667, 303);
    this.markIndented(text, 153, 305.1667, 255);
    this.markIndented(text, 153, 281.1667, 231);
    this.markStartOfLine(text, 153, 248.1667, 147);
    this.markStartOfLine(text, 153, 247.1667, 135);
    this.markStartOfLine(text, 153, 248.1667, 111);
    this.markStartOfLine(text, 163, 304.1667, 87);
    this.markStartOfLine(text, 163, 316.1667, 75);
    this.markStartOfLine(text, 163, 326.1667, 63);
    this.markStartOfLine(text, 165, 270.1666, 435);
    this.markStartOfLine(text, 165, 265.1666, 423);
    this.markStartOfLine(text, 165, 275.1666, 411);
    this.markStartOfLine(text, 165, 287.1666, 375);
    this.markStartOfLine(text, 165, 288.1666, 363);
    this.markStartOfLine(text, 165, 279.1666, 351);
    this.markStartOfLine(text, 165, 269.1666, 315);
    this.markStartOfLine(text, 165, 267.1666, 231);
    this.markStartOfLine(text, 165, 256.1666, 183);
    this.markStartOfLine(text, 165, 247.1666, 171);
    this.markStartOfLine(text, 165, 282.1667, 159);
    this.markStartOfLine(text, 165, 323.1667, 123);
    this.markStartOfLine(text, 169, 240.1667, 495);
    this.markStartOfLine(text, 169, 260.1667, 471);
    this.markStartOfLine(text, 169, 265.1667, 423);
    this.markStartOfLine(text, 169, 252.1667, 411);
    this.markStartOfLine(text, 169, 246.1667, 399);
    this.markStartOfLine(text, 169, 249.1667, 375);
    this.markStartOfLine(text, 169, 281.1667, 303);
    this.markStartOfLine(text, 169, 261.1666, 99);
    this.markStartOfLine(text, 169, 261.1666, 87);
    this.markStartOfLine(text, 169, 257.1666, 75);
    this.markStartOfLine(text, 171, 259.1666, 303);
    this.markStartOfLine(text, 171, 264.1666, 291);
    this.markStartOfLine(text, 171, 265.1666, 279);
    this.markStartOfLine(text, 171, 264.1666, 267);
    this.markStartOfLine(text, 171, 260.1666, 255);
    this.markStartOfLine(text, 173, 269.1667, 327);
    this.markStartOfLine(text, 173, 261.1667, 231);
    this.markStartOfLine(text, 173, 246.1667, 75);
    this.markStartOfLine(text, 173, 245.1667, 63);
    this.markStartOfLine(text, 173, 240.1667, 51);
    return super.extractDetails(text, moduleData, sectionKey);
  }
}
