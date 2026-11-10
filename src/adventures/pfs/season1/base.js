import { AdventureBase } from "../../../core/adventure-base.js";

export class PFSSeason1Base extends AdventureBase {
  pageTop = 700;
  pageBottom = 40;
  PageOneColumn = {
    X1: 81,
    X2: 600,
  };
  PageTwoColumn = {
    col1X1: 72,
    col1X2: 300,
    col2X1: 312,
    col2X2: 550,
  };
  blacklistedFonts = [
    "Times-Italic:8",
    "RomicStd-Bold:12",
    "TradeGothicLTStd-BdCn20:12",
    "TradeGothicLTStd-BdCn20:8",
    "Taroca:12",
    "TradeGothicLTStd-BdCn20:11.0714",
    "CBGBFontSolid:12",
  ];
  headingFontIds = ["Taroca:16", "GoodOT-Bold:12"];
  normalFontIds = ["SabonLTStd-Roman:9", "Sabon-Roman:9", "NexusSerifOT:9"];
  subheadingFontIds = ["GoodOT-News:12", "GoodOT:12"];
  italicFontIds = [
    "SabonLTStd-Italic:9",
    "NexusSerifOT-Italic:9",
    "SabonItalic:9",
    "TimesNewRomanPS-ItalicMT:9",
  ];
  boldFontIds = [
    "TimesNewRomanPS-BoldMT:9",
    "TimesNewRomanPSMT:9",
    "SabonLTStd-Bold:9",
    "GoodOT-Bold:10",
    "Dax-Bold:9",
    "NexusSerifOT-Bold:9",
  ];
  separateSectionsAlpha = true;
  paragraphFontIds = this.subheadingFontIds
    .concat(this.normalFontIds)
    .concat(this.italicFontIds)
    .concat(this.boldFontIds);
  OneColumn(pageNum, section) {
    return (pdf, emit) => {
      const page = this.PageOneColumn;
      this.getAllTextInBoundingBox(
        pdf,
        pageNum,
        page.X1,
        page.X2,
        this.pageTop,
        this.pageBottom,
        emit,
        section,
      );
    };
  }
  TwoColumn(pageNum, section) {
    return (pdf, emit) => {
      const page = this.PageTwoColumn;
      (this.getAllTextInBoundingBox(
        pdf,
        pageNum,
        page.col1X1,
        page.col1X2,
        this.pageTop,
        this.pageBottom,
        emit,
        section,
      ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          page.col2X1,
          page.col2X2,
          this.pageTop,
          this.pageBottom,
          emit,
          section,
        ));
    };
  }
  TwoColumnWithMap(pageNum, sectionTop, section) {
    return (pdf, emit) => {
      const page = this.PageTwoColumn;
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
        ));
    };
  }
  TwoColumnWithTopHandout(pageNum, sectionTop, section) {
    return (pdf, emit) => {
      const page = this.PageTwoColumn;
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
          550,
          this.pageTop,
          sectionTop,
          emit,
          `handout${pageNum}`,
        ));
    };
  }
  TwoColumnWithLeftCutout(pageNum, cutoutPos, section) {
    return (pdf, emit) => {
      const page = this.PageTwoColumn;
      (this.getAllTextInBoundingBox(
        pdf,
        pageNum,
        page.col1X1 + 9,
        page.col1X2,
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
          section,
        ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          page.col2X1,
          page.col2X2,
          this.pageTop,
          this.pageBottom,
          emit,
          section,
        ));
    };
  }
  TwoColumnWithRightCutout(pageNum, cutoutPos, section) {
    return (pdf, emit) => {
      const page = this.PageTwoColumn;
      (this.getAllTextInBoundingBox(
        pdf,
        pageNum,
        page.col1X1,
        page.col1X2,
        this.pageTop,
        this.pageBottom,
        emit,
        section,
      ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          page.col2X1,
          page.col2X2,
          cutoutPos,
          this.pageBottom,
          emit,
          section,
        ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          page.col2X1 + 9,
          page.col2X2,
          this.pageTop,
          cutoutPos,
          emit,
          `sidebar${pageNum}`,
        ));
    };
  }
  TwoColumnWithBottomCutout(pageNum, cutoutPos, section) {
    return (pdf, emit) => {
      const page = this.PageTwoColumn;
      (this.getAllTextInBoundingBox(
        pdf,
        pageNum,
        page.col1X1,
        page.col1X2,
        this.pageTop,
        cutoutPos,
        emit,
        section,
      ),
        this.getAllTextInBoundingBox(
          pdf,
          pageNum,
          page.col2X1,
          page.col2X2,
          this.pageTop,
          cutoutPos,
          emit,
          section,
        ));
    };
  }
  detectPageLayout(pdf, page) {
    const entries = pdf.textDetails.filter((x) => x.page === page),
      col1 =
        entries.filter((x) => Math.abs(x.x - this.PageTwoColumn.col1X1) < 1)
          .length > 5,
      col2 =
        entries.filter((x) => Math.abs(x.x - this.PageTwoColumn.col2X1) < 1)
          .length > 5,
      hasCutoutHeaderCol2 = entries.some(
        (x) => x.fontId === "GoodOT-Bold:11" && x.x > 320,
      );
    entries.some(
      (x) => x.fontName === "ColiseumBold" && x.fontSize >= 21 && x.y < 720,
    );
    const topOfText = Math.max(
      ...entries
        .filter(
          (t) => t.fontId === "SabonLTStd-Roman:9" || t.fontId === "GoodOT:9",
        )
        .map((t) => t.y),
    );
    if (col1 && hasCutoutHeaderCol2) {
      const topLine = Math.max(
        0,
        ...entries.filter((t) => t.x > 300 && t.isLeftAligned).map((t) => t.y),
      );
      return `this.TwoColumnWithRightCutout(${page}, ${topLine})`;
    }
    return col1 && col2 && topOfText < 600
      ? `this.TwoColumnWithMap(${page}, ${topOfText})`
      : col1 && col2
        ? `this.TwoColumn(${page})`
        : "";
  }
}
