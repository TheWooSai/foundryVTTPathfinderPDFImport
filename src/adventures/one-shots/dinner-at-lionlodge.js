import { OneShotBase } from "./base.js";
import { CaptionImage } from "../../core/images.js";
import { ModuleScene } from "../../core/module-scene.js";

export class DinnerAtLionlodge extends OneShotBase {
  prefix = "dinner-at-lionlodge";
  fullName = "Dinner at Lionlodge";
  pages = [
    this.TwoColumn(3),
    this.TwoColumn(4),
    this.TwoColumnWithRightCutout(5, 520),
    this.TwoColumn(6),
    this.TwoColumn(7),
    this.TwoColumnWithLeftCutout(8, 430),
    this.TwoColumn(9),
    this.TwoColumn(10),
    this.TwoColumn(11),
    this.TwoColumn(12),
    this.TwoColumn(13),
    this.TwoColumn(14),
    this.TwoColumn(15),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      canonical: {
        name: "dinner-at-lionlodge/map1",
        priority: 0,
      },
      nameInfo: {
        x: 23.25,
        y: 753.0992,
        page: 18,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 19,
      width: 1257,
      height: 1636,
      imageLeft: 43,
      imageRight: 1216,
      imageCols: 29,
      imageTop: 25,
      imageBottom: 1572,
      imageRows: 22,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/oneshot/maps/dinner-at-lionlodge-map1.json",
      rotateCW: 3,
      journals: [
        {
          x: 1150,
          y: 1650,
          name: "A1.",
        },
        {
          x: 1450,
          y: 1650,
          name: "A2.",
        },
        {
          x: 1850,
          y: 1150,
          name: "A3.",
        },
        {
          x: 1450,
          y: 1050,
          name: "A4.",
        },
        {
          x: 1450,
          y: 2150,
          name: "A5.",
        },
        {
          x: 1650,
          y: 2150,
          name: "A5.",
        },
        {
          x: 1850,
          y: 2150,
          name: "A5.",
        },
        {
          x: 2050,
          y: 2150,
          name: "A5.",
        },
        {
          x: 2750,
          y: 950,
          name: "A6.",
        },
        {
          x: 3100,
          y: 2400,
          name: "A7.",
        },
        {
          x: 2850,
          y: 2e3,
          name: "A8.",
        },
        {
          x: 1850,
          y: 2350,
          name: "A9.",
        },
        {
          x: 2450,
          y: 1650,
          name: "A10.",
        },
      ],
    }),
  ];
  journals = [
    new CaptionImage({
      name: "journal1",
      page: 1,
      width: 1257,
      height: 792,
    }),
    new CaptionImage({
      name: "npc1",
      page: 13,
      width: 633,
      height: 949,
    }),
    new CaptionImage({
      name: "npc2",
      page: 16,
      width: 412,
      height: 618,
    }),
    new CaptionImage({
      name: "npc3",
      page: 16,
      width: 431,
      height: 615,
    }),
    new CaptionImage({
      name: "npc4",
      page: 16,
      width: 602,
      height: 620,
    }),
    new CaptionImage({
      name: "npc5",
      page: 16,
      width: 493,
      height: 668,
    }),
    new CaptionImage({
      name: "npc6",
      page: 17,
      width: 575,
      height: 528,
    }),
  ];
  blacklistedFonts = this.blacklistedFonts.concat(["ArnoPro-Regular:15"]);
  headingFontIds = this.headingFontIds.concat([
    "ArnoPro-SmbdCaption:20",
    "GoodOT-CondBold:12",
    "GoodOT-CondBold:13",
  ]);
  subheadingFontIds = this.subheadingFontIds.concat(["GoodOT-CondBold:16"]);
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Pathfinder One-Shot: Dinner at Lionlodge" &&
        t.fontId === "SabonLTStd-Italic:9" &&
        t.page === 2,
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    if (sectionKey === "") {
      text.shift();
      text.unshift(this.getFakeText("Introduction", "Baldur:19"));
    }
    this.markIndented(text, 11, 69, 135);
    this.markIndented(text, 11, 69, 123);
    for (let i = 0; i < text.length; i++) {
      text[i].fontId === "GoodOT-CondBold:16" &&
        text[i].text.match(/^[ABCDEFG]\d*\./) &&
        ((text[i].fontId = "ArnoPro-SmbdCaption:20"),
        (text[i].fontName = "ArnoPro-SmbdCaption"),
        (text[i].fontSize = 20));
    }
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
