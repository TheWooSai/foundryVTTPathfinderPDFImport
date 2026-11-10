import { AdventureBase } from "../../core/adventure-base.js";

export class StrengthOfThousandsBase extends AdventureBase {
  pageTop = 700;
  pageBottom = 40;
  LeftPageTwoColumn = {
    col1X1: 99,
    col1X2: 320,
    col2X1: 326.25,
    col2X2: 550,
  };
  RightPageTwoColumn = {
    col1X1: 67.5,
    col1X2: 290,
    col2X1: 294.75,
    col2X2: 510,
  };
  blacklistedFonts = [
    "Times-Italic:8",
    "TradeGothicLTStd-BdCn20:12",
    "Attac-Black:10",
    "GoodOT:5.247",
    "SabonLTStd-Roman:5.247",
  ];
  headingFontIds = [
    "GoodOT-Bold:12",
    "GoodOT-CondBold:12",
    "20000dollarbail:50",
    "20000dollarbail:49",
    "20000dollarbail:47",
    "20000dollarbail:46",
    "20000dollarbail:45",
    "20000dollarbail:42",
    "20000dollarbail:41",
    "20000dollarbail:38",
    "20000dollarbail:36",
    "20000dollarbail:32",
    "20000dollarbail:20",
    "20000dollarbail:18",
    "20000dollarbail:16",
    "Attac-Black:14",
    "Attac-Black:22",
  ];
  normalFontIds = ["SabonLTStd-Roman:9", "GoodOT:8.5", "Pathfinder-Icons:9"];
  subheadingFontIds = ["GoodOT-BoldItalic:18", "Attac-BlackItalic:18"];
  italicFontIds = [
    "SabonLTStd-Italic:9",
    "GoodOT-Italic:8.5",
    "GoodOT-CondLightItalic:9",
  ];
  boldFontIds = [
    "TimesNewRomanPS-BoldMT:9",
    "TimesNewRomanPSMT:9",
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
  LeftSingleColumnWithSidebar(pageNum) {
    return (pdf, emit) => {
      (this.getAllTextInBoundingBox(
        pdf,
        pageNum,
        250.5,
        550,
        this.pageTop,
        this.pageBottom,
        emit,
      ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          70,
          240,
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
      hasHeading = entries.some(
        (x) => x.fontName === "ColiseumBold" && x.fontSize >= 21 && x.y < 720,
      ),
      topOfText = Math.max(
        ...entries
          .filter(
            (t) => t.fontId === "SabonLTStd-Roman:9" || t.fontId === "GoodOT:9",
          )
          .map((t) => t.y),
      );
    if (rightCol1 && rightCol2) {
      if (!hasHeading) {
        return topOfText > 650
          ? `this.RightTwoColumn(${page})`
          : `this.RightTwoColumnWithMap(${page})`;
      }
    } else {
      if (leftCol1 && leftCol2) {
        return hasHeading
          ? `this.ChapterHeadingPageLayout(${page})`
          : topOfText > 650
            ? `this.LeftTwoColumn(${page})`
            : `this.LeftTwoColumnWithMap(${page})`;
      }
      if (rightCol1) {
        return hasHeading
          ? `this.RightChapterHeadingWithSidebar(${page})`
          : `this.RightSingleColumnWithSidebar(${page})`;
      }
      if (leftCol1) {
        return hasHeading
          ? `this.LeftChapterHeadingWithSidebar(${page})`
          : `this.LeftOneColumnWithSidebar(${page})`;
      }
      if (leftCol2 && hasHeading) {
        return `this.LeftTwoColumnWithLeftSidebar(${page})`;
      }
    }
    return "";
  }
  extractDetails(text, moduleData, sectionKey) {
    for (let i = 0; i < text.length; i++) {
      text[i].fontName === "FrankenTOHO-SC700" &&
        ((text[i].text = text[i].text.toUpperCase()),
        text[i].fontSize === 18 && (text[i].text = ` ${text[i].text}`));
    }
    return super.extractDetails(text, moduleData, sectionKey);
  }
}
