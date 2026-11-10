import { AdventureBase } from "../../core/adventure-base.js";

export class BestiaryBase extends AdventureBase {
  pageTop = 750;
  pageBottom = 38;
  LeftPageTwoColumn = {
    col1X1: 72,
    col1X2: 300,
    col2X1: 310.5,
    col2X2: 550,
  };
  RightPageTwoColumn = {
    col1X1: 72,
    col1X2: 300,
    col2X1: 310.5,
    col2X2: 520,
  };
  headingFontIds = this.headingFontIds.concat([
    "GoodOT-CondBold:12",
    "Gin-Regular:12",
  ]);
  normalFontIds = this.normalFontIds.concat(["TimesNewRomanPSMT:8"]);
  LeftChapterHeading(pageNum) {
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
  RightChapterHeading(pageNum) {
    return (pdf, emit) => {
      const pageContent = pdf.textDetails
          .filter(
            (t) => t.page === pageNum && t.fontId === "SabonLTStd-Roman:9",
          )
          .map((t) => t.y),
        headingStartY = Math.max(...pageContent) + 10,
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
  RightChapterHeadingWithSidebar(pageNum) {
    return (pdf, emit) => {
      const pageContent = pdf.textDetails
          .filter(
            (t) => t.page === pageNum && t.fontId === "SabonLTStd-Roman:9",
          )
          .map((t) => t.y),
        headingStartY = Math.max(...pageContent) + 10,
        page = this.RightPageTwoColumn;
      (this.getAllTextInBoundingBox(
        pdf,
        pageNum,
        page.col1X1,
        520,
        this.pageTop,
        headingStartY,
        emit,
      ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          page.col1X1,
          400,
          headingStartY,
          this.pageBottom,
          emit,
        ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          400,
          520,
          headingStartY,
          this.pageBottom,
          emit,
          `sidebar${pageNum}`,
        ));
    };
  }
  RightOneColumnWithSidebar(pageNum) {
    return (pdf, emit) => {
      const page = this.RightPageTwoColumn;
      (this.getAllTextInBoundingBox(
        pdf,
        pageNum,
        page.col1X1,
        390,
        this.pageTop,
        this.pageBottom,
        emit,
      ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          400,
          520,
          this.pageTop,
          this.pageBottom,
          emit,
          `sidebar${pageNum}`,
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
        290,
        sectionTop,
        this.pageBottom,
        emit,
      ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          306,
          520,
          sectionTop,
          this.pageBottom,
          emit,
        ));
    };
  }
  LeftTwoColumnWithMap(pageNum) {
    return (pdf, emit) => {
      const pageContent = pdf.textDetails
          .filter(
            (t) => t.page === pageNum && t.fontId === "SabonLTStd-Roman:9",
          )
          .map((t) => t.y),
        headingStartY = Math.max(...pageContent) + 10,
        page = this.LeftPageTwoColumn;
      (this.getAllTextInBoundingBox(
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
  LeftTwoColumnWithLeftSidebar(pageNum) {
    return (pdf, emit) => {
      const page = this.LeftPageTwoColumn;
      (this.getAllTextInBoundingBox(
        pdf,
        pageNum,
        85.8,
        page.col1X2,
        this.pageTop,
        this.pageBottom,
        emit,
        `sidebar${pageNum}`,
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
  LeftOneColumnWithLeftSidebar(pageNum) {
    return (pdf, emit) => {
      (this.getAllTextInBoundingBox(
        pdf,
        pageNum,
        0,
        210,
        this.pageTop,
        this.pageBottom,
        emit,
        `sidebar${pageNum}`,
      ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          217,
          550,
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
        290,
        this.pageTop,
        this.pageBottom,
        emit,
      ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          306,
          525,
          this.pageTop,
          this.pageBottom,
          emit,
        ));
    };
  }
  RightTwoColumnWithRightSidebar(pageNum) {
    return (pdf, emit) => {
      const page = this.RightPageTwoColumn;
      (this.getAllTextInBoundingBox(
        pdf,
        pageNum,
        page.col1X1,
        290,
        this.pageTop,
        this.pageBottom,
        emit,
      ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          306,
          525,
          this.pageTop,
          this.pageBottom,
          emit,
          `sidebar${pageNum}`,
        ));
    };
  }
  detectPageLayout(pdf, page) {
    const entries = pdf.textDetails.filter((x) => x.page === page),
      leftCol1 =
        entries.filter((x) => Math.abs(x.x - this.LeftPageTwoColumn.col1X1) < 1)
          .length > 3,
      leftCol2 = entries.filter((x) => Math.abs(x.x - 315) < 1).length > 3,
      rightCol1 =
        entries.filter(
          (x) => Math.abs(x.x - this.RightPageTwoColumn.col1X1) < 1,
        ).length > 3,
      rightCol2 = entries.filter((x) => Math.abs(x.x - 306) < 1).length > 3,
      leftLeft1 = entries.filter((x) => Math.abs(x.x - 217) < 1).length > 3,
      hasHeading = entries.some(
        (x) => x.fontName === "Taroca" && x.fontSize >= 21 && x.y < 720,
      ),
      topOfText = Math.max(
        ...entries
          .filter(
            (t) => t.fontId === "SabonLTStd-Roman:9" || t.fontId === "GoodOT:9",
          )
          .map((t) => t.y),
      );
    return rightCol1 && rightCol2
      ? hasHeading
        ? `this.RightChapterHeading(${page})`
        : topOfText > 650
          ? `this.RightTwoColumn(${page})`
          : `this.RightTwoColumnWithMap(${page})`
      : leftCol1 && leftCol2
        ? hasHeading
          ? `this.LeftChapterHeading(${page})`
          : topOfText > 650
            ? `this.LeftTwoColumn(${page})`
            : `this.LeftTwoColumnWithMap(${page})`
        : rightCol1
          ? hasHeading
            ? `this.RightChapterHeadingWithSidebar(${page})`
            : `this.RightOneColumnWithSidebar(${page})`
          : leftCol1
            ? hasHeading
              ? `this.LeftChapterHeadingWithSidebar(${page})`
              : `this.LeftOneColumnWithSidebar(${page})`
            : leftCol2 && hasHeading
              ? `this.LeftTwoColumnWithLeftSidebar(${page})`
              : leftLeft1
                ? `this.LeftOneColumnWithLeftSidebar(${page})`
                : "";
  }
}
