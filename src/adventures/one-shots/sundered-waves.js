import { OneShotBase } from "./base.js";
import { CaptionImage } from "../../core/images.js";
import { ModuleScene } from "../../core/module-scene.js";

export class SunderedWaves extends OneShotBase {
  prefix = "sundered-waves";
  fullName = "Sundered Waves";
  pages = [
    this.TwoColumn(3),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumn(6),
    this.TwoColumn(7),
    this.TwoColumnWithTopHandout(8, 435),
    this.TwoColumnWithRightCutout(9, 490),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      canonical: {
        name: "sundered-waves/map1",
        priority: 0,
      },
      nameInfo: {
        page: 13,
        x: 23.25,
        y: 748.8074,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 14,
      width: 1222,
      height: 1630,
      imageLeft: 12,
      imageRight: 1208,
      imageCols: 35,
      imageTop: 132,
      imageBottom: 1499,
      imageRows: 40,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/oneshot/maps/sundered-waves-map1.json",
      journals: [
        {
          x: 2850,
          y: 4250,
          name: "A1.",
        },
        {
          x: 2e3,
          y: 3e3,
          name: "A2.",
        },
        {
          x: 1950,
          y: 2550,
          name: "A3.",
        },
        {
          x: 2400,
          y: 1900,
          name: "A4.",
        },
        {
          x: 3300,
          y: 2600,
          name: "A5.",
        },
        {
          x: 3800,
          y: 1600,
          name: "A6.",
        },
      ],
    }),
  ];
  journals = [
    new CaptionImage({
      name: "journal1",
      page: 1,
      width: 1257,
      height: 838,
    }),
    new CaptionImage({
      name: "journal2",
      page: 4,
      width: 469,
      height: 537,
    }),
    new CaptionImage({
      name: "journal3",
      page: 12,
      width: 648,
      height: 792,
    }),
    new CaptionImage({
      name: "npc1",
      page: 10,
      width: 267,
      height: 691,
    }),
    new CaptionImage({
      name: "npc2",
      page: 10,
      width: 422,
      height: 662,
    }),
    new CaptionImage({
      name: "npc3",
      page: 10,
      width: 436,
      height: 632,
    }),
    new CaptionImage({
      name: "npc4",
      page: 10,
      width: 462,
      height: 680,
    }),
    new CaptionImage({
      name: "npc5",
      page: 11,
      width: 481,
      height: 675,
    }),
  ];
  headingFontIds = this.headingFontIds.concat(["GoodOT-CondBold:12"]);
  normalFontIds = this.normalFontIds.concat(["CCWiccanSpecialInt:16"]);
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Pathfinder One-Shot: Sundered Waves" &&
        t.fontId === "SabonLTStd-Italic:9" &&
        t.page === 2,
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    if (sectionKey === "") {
      text[0].text = `A${text[0].text}`;
      text.unshift(this.getFakeText("Introduction", "Baldur:19"));
    }
    this.markIndented(text, 5, 69, 219);
    this.markIndented(text, 5, 69, 183);
    this.markIndented(text, 5, 69, 159);
    this.markIndented(text, 5, 69, 147);
    this.markIndented(text, 5, 311, 159);
    this.markIndented(text, 5, 311, 135);
    this.markIndented(text, 5, 311, 123);
    this.markIndented(text, 5, 311, 111);
    this.markIndented(text, 5, 311, 87);
    this.markIndented(text, 5, 311, 75);
    this.markIndented(text, 5, 311, 63);
    this.markIndented(text, 6, 311, 603);
    this.markIndented(text, 6, 311, 567);
    this.markIndented(text, 6, 311, 543);
    this.markIndented(text, 6, 311, 531);
    this.markIndented(text, 6, 311, 495);
    this.markIndented(text, 6, 311, 471);
    this.markIndented(text, 6, 311, 459);
    this.markIndented(text, 6, 311, 447);
    this.markIndented(text, 8, 311, 75);
    this.markIndented(text, 8, 311, 63);
    this.markIndented(text, 9, 69, 675);
    this.markIndented(text, 9, 69, 663);
    this.markIndented(text, 9, 69, 651);
    this.markIndented(text, 9, 69, 615);
    this.markIndented(text, 9, 69, 591);
    this.markIndented(text, 9, 69, 567);
    this.markIndented(text, 9, 69, 555);
    this.markIndented(text, 9, 69, 543);
    this.markIndented(text, 9, 69, 531);
    this.markIndented(text, 9, 69, 507);
    this.markIndented(text, 9, 69, 495);
    this.markIndented(text, 9, 69, 483);
    this.markIndented(text, 9, 69, 471);
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
