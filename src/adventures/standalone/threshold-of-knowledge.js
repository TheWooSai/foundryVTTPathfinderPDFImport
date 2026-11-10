import { AdventureBase } from "../../core/adventure-base.js";
import { AdventureImage, LabelImage } from "../../core/images.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class ThresholdOfKnowledge extends AdventureBase {
  prefix = "threshold-of-knowledge";
  fullName = "Threshold of Knowledge";
  blacklistedFonts = ["Times-Italic:8", "HorleyOldStyleMTStd-Bold:13"];
  headingFontIds = [
    "GoodOT-Bold:14",
    "GoodOT-CondBold:12",
    "HorleyOldStyleMTStd-Bold:22",
    "HorleyOldStyleMTStd-Bold:15",
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
    this.TwoColumnWithMap(4, 300),
    this.TwoColumn(5),
    this.TwoColumn(6),
    this.TwoColumn(7),
    this.TwoColumnWithMap(8, 300),
    this.TwoColumn(9),
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
      name: "map1a",
      canonical: {
        name: "tok/map1a",
        priority: 0,
      },
      nameInfo: {
        x: 35,
        y: 738.3362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 1144,
      height: 1525,
      imageLeft: 28,
      imageRight: 1123,
      imageCols: 34,
      imageTop: 27,
      imageBottom: 1507,
      imageRows: 46,
      cropLeft: 0,
      cropRight: 1144,
      cropTop: 0,
      cropBottom: 729,
      offsetX: 0,
      offsetY: 0,
      darkness: 0.75,
      detailsFile: "/standalone/maps/tok-map1a.json",
      journals: [
        {
          x: 1950,
          y: 1250,
          id: "NjozNDA6MTM1",
        },
        {
          x: 3e3,
          y: 2e3,
          id: "NzozMTI6NDM1",
        },
      ],
      tokens: [
        {
          id: "npc4",
          x: 2e3,
          y: 1e3,
        },
        {
          id: "npc4",
          x: 2e3,
          y: 1400,
        },
        {
          id: "npc4",
          x: 1800,
          y: 1400,
        },
        {
          id: "npc4",
          x: 1900,
          y: 1e3,
        },
      ],
    }),
    new ModuleScene({
      name: "map1b",
      canonical: {
        name: "tok/map1b",
        priority: 0,
      },
      nameInfo: {
        x: 35,
        y: 379.8362,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 2,
      width: 1144,
      height: 1525,
      imageLeft: 28,
      imageRight: 1123,
      imageCols: 34,
      imageTop: 27,
      imageBottom: 1507,
      imageRows: 46,
      cropLeft: 0,
      cropRight: 1144,
      cropTop: 741,
      cropBottom: 1525,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/standalone/maps/tok-map1b.json",
      journals: [
        {
          x: 1400,
          y: 1700,
          id: "OTo3Mjo4Nw",
        },
        {
          x: 1050,
          y: 1050,
          id: "OTo3MjoyNDM",
        },
        {
          x: 2e3,
          y: 1700,
          id: "OTozMTI6MTk1",
        },
        {
          x: 3800,
          y: 1100,
          id: "MTA6NzI6MzM5",
        },
        {
          x: 3550,
          y: 2450,
          id: "MTA6MzEyOjY4Nw",
        },
      ],
      tokens: [
        {
          id: "npc7",
          x: 2e3,
          y: 1200,
        },
        {
          id: "npc7",
          x: 1900,
          y: 1200,
        },
        {
          id: "npc5",
          x: 1200,
          y: 2100,
        },
        {
          id: "npc6",
          x: 3400,
          y: 800,
        },
        {
          id: "npc1",
          x: 3300,
          y: 2400,
        },
      ],
    }),
  ];
  journals = [
    new AdventureImage({
      name: "journal1",
      page: 2,
      width: 1259,
      height: 1636,
    }),
    new AdventureImage({
      name: "journal2",
      page: 4,
      width: 1259,
      height: 850,
    }),
    new AdventureImage({
      name: "journal3",
      page: 8,
      width: 1262,
      height: 840,
    }),
    new LabelImage({
      name: "journal4",
      page: 12,
      width: 403,
      height: 280,
      label: "MTI6MjQ1OjQxMw",
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.EYiIQh526d0HLiDu",
      name: {
        page: 11,
        x: 461.0857,
        y: 119.2876,
      },
      page: 11,
      width: 699,
      height: 1205,
      tokenX: -131,
      tokenY: 22,
      tokenSize: 505,
      forIds: ["MTA6MzEyOjQxMQ"],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.H7z7VHzlHlEFev1r",
      label: "BS",
      forIds: ["MTE6NzI6Mjkx"],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 6,
        x: 246.3333,
        y: 123.7876,
      },
      page: 6,
      width: 565,
      height: 1017,
      tokenX: -9,
      tokenY: 41,
      tokenSize: 457,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc4",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.E2XL2egIA3QaSDBM",
      label: "FB",
      forIds: ["Nzo3MjoxNDc"],
    }),
    new ModuleNpc({
      id: "npc5",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.BoXCGLACP9vuIZkZ",
      label: "FL",
      forIds: ["OTozMTI6Mjkx"],
    }),
    new ModuleNpc({
      id: "npc6",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.2rMLYkUR47ZCQMUg",
      label: "C",
      forIds: ["MTA6NzI6MTIz"],
    }),
    new ModuleNpc({
      id: "npc7",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.PXru127aJljwKhSy",
      label: "SDS",
      forIds: ["MTA6NzI6NDgz"],
      weak: true,
    }),
    new ModuleNpc({
      id: "npc8",
      actorUuid: "Compendium.pf2e.paizo-pregens.Actor.QW5TpsCjn70RTFnL",
      page: 13,
      width: 721,
      height: 1103,
      tokenX: -75,
      tokenY: 2,
      tokenSize: 431,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc9",
      actorUuid: "Compendium.pf2e.paizo-pregens.Actor.RrZABs8PNTwLv1ah",
      page: 14,
      width: 768,
      height: 1212,
      tokenX: -217,
      tokenY: -29,
      tokenSize: 316,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc10",
      actorUuid: "Compendium.pf2e.paizo-pregens.Actor.qUSE9OURRD6qNvLZ",
      page: 15,
      width: 635,
      height: 1143,
      tokenX: -186,
      tokenY: -33,
      tokenSize: 415,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc11",
      actorUuid: "Compendium.pf2e.paizo-pregens.Actor.dezjxiDtBdnBiurc",
      page: 16,
      width: 824,
      height: 1130,
      tokenX: -157,
      tokenY: 64,
      tokenSize: 318,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc12",
      actorUuid: "Compendium.pf2e.paizo-pregens.Actor.JiA08mYkxYMA5ZEn",
      page: 17,
      width: 647,
      height: 1078,
      tokenX: -54,
      tokenY: 63,
      tokenSize: 350,
      forIds: [],
    }),
  ];
  journalPages = [
    {
      name: "Adventure Content",
      pages: [
        {
          id: "NDo3MjoyNzk",
        },
        {
          id: "NTo3Mjo2ODc",
        },
        {
          id: "NTozMTI6NTMx",
        },
        {
          id: "Njo3Mjo1MzE",
        },
        {
          id: "NjozMTI6Njg3",
        },
        {
          id: "NjozODM6MzI3",
        },
        {
          id: "NjozNDA6MTM1",
        },
        {
          id: "NzozMTI6Njg3",
        },
        {
          id: "NzozMTI6NDM1",
        },
        {
          id: "OTo3Mjo0NDc",
        },
        {
          id: "OTo3MjoyNDM",
        },
        {
          id: "OTo3Mjo4Nw",
        },
        {
          id: "OTozMTI6MTk1",
        },
        {
          id: "MTA6NzI6MzM5",
        },
        {
          id: "MTA6MzEyOjY4Nw",
        },
        {
          id: "MTA6MzEyOjM2Mw",
        },
        {
          id: "MTE6NzI6NjM5",
        },
        {
          id: "MTE6NzI6MTk1",
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
      ],
    },
    {
      name: "Adventure Toolbox",
      pages: [
        {
          id: "MTI6NzI6Njc1",
        },
        {
          id: "MTI6NzI6NTkx",
        },
        {
          id: "MTI6MzkzOjQ3MQ",
        },
        {
          id: "MTM6NzI6Njc1",
        },
        {
          id: "MTQ6NzI6Njc1",
        },
        {
          id: "MTU6NzI6Njc1",
        },
        {
          id: "MTY6NzI6Njc1",
        },
        {
          id: "MTc6NzI6Njc1",
        },
      ],
    },
  ];
  combines = [];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Threshold of Knowledge" &&
        t.fontId === "HorleyOldStyleMTStd-Bold:14",
    );
  }
  extractDetails(text, moduleData, sectionKey) {
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
