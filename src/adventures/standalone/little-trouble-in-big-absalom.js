import { AdventureBase } from "../../core/adventure-base.js";
import { CaptionImage } from "../../core/images.js";
import { ModuleScene } from "../../core/module-scene.js";

export class LittleTroubleInBigAbsalom extends AdventureBase {
  prefix = "little-trouble-in-big-absalom";
  fullName = "Little Trouble in Big Absalom";
  blacklistedFonts = [
    "Times-Italic:8",
    "TradeGothicLTStd-BdCn20:12",
    "HangingTree-SC700:25",
    "HangingTree-SC700:17.5",
    "GoodOT:5.247",
  ];
  headingFontIds = [
    "GoodOT-Bold:14",
    "GoodOT-CondBold:12",
    "HangingTree:56.9466",
    "HangingTree:18",
    "HangingTree:17",
    "HangingTree-SC700:15",
    "HangingTree-SC700:10.5",
  ];
  subheadingFontIds = [];
  normalFontIds = ["SabonLTStd-Roman:9", "Sabon-Roman:9"];
  italicFontIds = ["SabonLTStd-Italic:9", "GoodOT-Italic:8.5"];
  boldFontIds = [
    "TimesNewRomanPS-BoldMT:9",
    "Sabon-Bold:9",
    "SabonLTStd-Bold:9",
    "Times-Bold:9",
    "GoodOT-Bold:8.5",
  ];
  dropCapFontIds = [];
  paragraphFontIds = this.subheadingFontIds
    .concat(this.normalFontIds)
    .concat(this.italicFontIds)
    .concat(this.boldFontIds);
  pageTop = 700;
  pageBottom = 45;
  PageTwoColumn = {
    col1X1: 72,
    col1X2: 300,
    col2X1: 312,
    col2X2: 550,
  };
  pages = [
    this.TwoColumnWithMap(4, 280),
    this.TwoColumn(5),
    this.TwoColumn(6),
    this.TwoColumn(7),
    this.TwoColumnWithMap(8, 280),
    this.TwoColumnWithRightCutout(9, 580),
    this.TwoColumn(10),
    this.TwoColumn(11),
    this.TwoColumn(12),
    this.TwoColumn(13),
    this.TwoColumn(14),
    this.TwoColumn(15),
    this.TwoColumn(16),
    this.TwoColumn(17),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      nameInfo: {
        x: 54,
        y: 735.7812,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 2,
      width: 1144,
      height: 763,
      imageLeft: 96,
      imageRight: 1042,
      imageCols: 28,
      imageTop: 72,
      imageBottom: 714,
      imageRows: 19,
      globalLight: true,
      detailsFile: "/standalone/maps/littletrouble-map1.json",
      journals: [
        {
          x: 3150,
          y: 1050,
          name: "A1",
        },
        {
          x: 2150,
          y: 1550,
          name: "A2",
        },
        {
          x: 1750,
          y: 1850,
          name: "A3",
        },
        {
          x: 1350,
          y: 1150,
          name: "A4",
        },
        {
          x: 1250,
          y: 1850,
          name: "A5",
        },
        {
          x: 1350,
          y: 2550,
          name: "A6",
        },
        {
          x: 3350,
          y: 2150,
          name: "A7",
        },
      ],
    }),
    new ModuleScene({
      name: "map2",
      nameInfo: {
        x: 54,
        y: 361.4642,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 2,
      width: 1144,
      height: 762,
      imageLeft: 64,
      imageRight: 1102,
      imageCols: 47,
      imageTop: 21,
      imageBottom: 728,
      imageRows: 32,
      globalLight: true,
      journals: [
        {
          x: 2250,
          y: 950,
          name: "B1",
        },
        {
          x: 3650,
          y: 1150,
          name: "B2",
        },
        {
          x: 2850,
          y: 2050,
          name: "B3",
        },
        {
          x: 3550,
          y: 2450,
          name: "B4",
        },
      ],
    }),
  ];
  journals = [
    new CaptionImage({
      name: "journal1",
      page: 1,
      width: 1259,
      height: 1637,
    }),
    new CaptionImage({
      name: "journal2",
      page: 4,
      width: 1259,
      height: 850,
    }),
    new CaptionImage({
      name: "journal3",
      page: 8,
      width: 1259,
      height: 850,
    }),
    new CaptionImage({
      name: "journal4",
      page: 12,
      width: 476,
      height: 576,
    }),
    new CaptionImage({
      name: "npc1",
      page: 7,
      width: 761,
      height: 1099,
    }),
    new CaptionImage({
      name: "npc2",
      page: 11,
      width: 889,
      height: 980,
    }),
    new CaptionImage({
      name: "npc3",
      page: 13,
      width: 736,
      height: 1135,
    }),
    new CaptionImage({
      name: "npc4",
      page: 14,
      width: 728,
      height: 1072,
    }),
    new CaptionImage({
      name: "npc5",
      page: 15,
      width: 711,
      height: 1163,
    }),
    new CaptionImage({
      name: "npc6",
      page: 16,
      width: 715,
      height: 1034,
    }),
    new CaptionImage({
      name: "npc7",
      page: 17,
      width: 827,
      height: 1208,
    }),
  ];
  journalPages = [
    {
      name: "Chapter 1",
      pages: [
        {
          id: "NDo3MjoyNjc",
        },
        {
          id: "NDozMTI6MTcx",
        },
        {
          id: "NTo3MjozODc",
        },
        {
          id: "NTozMTI6MzI3",
        },
        {
          id: "Njo3Mjo1MTk",
        },
        {
          id: "Njo3MjoxNzE",
        },
        {
          id: "NjozMTI6NjM5",
        },
        {
          id: "NjozMTI6NDU5",
        },
        {
          id: "Nzo3Mjo2ODc",
        },
        {
          id: "NzozMTI6Njg3",
        },
      ],
    },
    {
      name: "Chapter 2",
      pages: [
        {
          id: "ODo3MjoyNjc",
        },
        {
          id: "ODozMTI6MTk1",
        },
        {
          id: "OTozMTI6NTE5",
        },
        {
          id: "OTozMTI6MjMx",
        },
        {
          id: "MTA6NzI6NTc5",
        },
        {
          id: "MTA6NzI6MTIz",
        },
        {
          id: "MTA6MzExOjEzNQ",
        },
        {
          id: "MTE6NzI6NDcx",
        },
        {
          id: "MTE6NzI6MTU5",
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
      ],
    },
    {
      name: "Back Matter",
      pages: [
        {
          id: "MTI6NzI6Njg3",
        },
        {
          id: "MTI6NzI6Mzk5",
        },
        {
          id: "MTI6NzI6MzE1",
        },
        {
          id: "MTI6NzI6MTQ3",
        },
        {
          id: "MTI6MzEyOjY4Nw",
        },
        {
          id: "MTI6MzEyOjI1NQ",
        },
        {
          id: "MTM6NzI6Njg3",
        },
        {
          id: "MTQ6NzI6Njg3",
        },
        {
          id: "MTU6NzI6Njg3",
        },
        {
          id: "MTY6NzI6Njg3",
        },
        {
          id: "MTc6NzI6Njg3",
        },
        {
          id: "OTozNzM6Njg3",
        },
      ],
    },
  ];
  combines = [];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Little Trouble in Big Absalom" &&
        t.fontId === "HangingTree:33",
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    for (let i = 0; i < text.length; i++) {
      (text[i].fontId === "HangingTree-SC700:15" &&
        (text[i].text = text[i].text.toLocaleUpperCase()),
        text[i].fontId === "HangingTree-SC700:10.5" &&
          (text[i].text = text[i].text.toLocaleLowerCase()));
    }
    return super.extractDetails(text, moduleData, sectionKey);
  }
  ChapterHeadingPageLayout(pageNum) {
    return (pdf, emit) => {
      const headerBlocks = pdf.textDetails
          .filter((t) => t.page === pageNum && t.fontSize > 30)
          .map((t) => t.y),
        headingStartY = Math.min(...headerBlocks) - 10,
        page = this.PageTwoColumn;
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
  finalize(moduleData) {}
}
