import { AdventureBase } from "../../../core/adventure-base.js";

export class PFSIntroBase extends AdventureBase {
  pageTop = 690;
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
    "TradeGothicLTStd-BdCn20:12",
    "TradeGothicLTStd-BdCn20:10",
  ];
  headingFontIds = [
    "GoodOT-Bold:13",
    "Taroca:12",
    "Taroca:14",
    "Taroca:15",
    "Taroca:16",
  ];
  normalFontIds = [
    "SabonLTStd-Roman:9",
    "Sabon-Roman:9",
    "NexusSerifOT:9",
    "SabonLTStd-Roman:7",
    "Pathfinder-Icons:9",
  ];
  subheadingFontIds = ["SubheadingFont:13"];
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
    "TimesNewRomanPS-BoldItalicMT:9",
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
        page.col1X1,
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
          page.col2X1,
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
          .length > 3,
      col2 =
        entries.filter((x) => Math.abs(x.x - this.PageTwoColumn.col2X1) < 1)
          .length > 3,
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
      ),
      hasSidebarHeader = entries.some(
        (x) =>
          x.fontId === "FMBolyar:12" &&
          (x.text === "Where on Golarion?" || x.text.startsWith("Scaling ")),
      );
    if ((col1 && hasCutoutHeaderCol2) || hasSidebarHeader) {
      const topLine = Math.max(
        0,
        ...entries
          .filter((t) => Math.abs(t.x - this.PageTwoColumn.col2X1) < 1)
          .map((t) => t.y),
      );
      return `this.TwoColumnWithRightCutout(${page}, ${Math.ceil(topLine / 10) * 10})`;
    }
    return col1 && col2 && topOfText < 600
      ? `this.TwoColumnWithMap(${page}, ${topOfText})`
      : col1 || col2
        ? `this.TwoColumn(${page})`
        : "";
  }
  extractDetails(text, moduleData, sectionKey) {
    if (
      sectionKey.indexOf("sidebar") === -1 &&
      sectionKey.indexOf("handout") === -1
    ) {
      text = text.filter((t) => t.fontId !== "Taroca:14");
    }
    for (let i = 0; i < text.length; i++) {
      (text[i].fontId === "GoodOT-CondBold:12" &&
        text[i].color === "#2c2e35" &&
        (text[i].color = "#000000"),
        text[i].fontId === "GoodOT-Bold:13" &&
          (text[i].color === "#a3a4a7" ||
            text[i].text.toUpperCase().startsWith("LEVELS ")) &&
          ((text[i].fontName = "SubheadingFont"),
          (text[i].fontId = "SubheadingFont:13")));
    }
    return super.extractDetails(text, moduleData, sectionKey);
  }
}
