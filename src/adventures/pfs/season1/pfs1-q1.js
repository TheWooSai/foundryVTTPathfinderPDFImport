import { PFSSeason1Base } from "./base.js";
import { CaptionImage } from "../../../core/images.js";
import { ModuleScene } from "../../../core/module-scene.js";

export class PFS1_Q1 extends PFSSeason1Base {
  prefix = "pfs-q1";
  fullName = "PFS Q1 - The Sandstone Secret";
  headingFontIds = this.headingFontIds.concat(["GoodOT-Bold:11"]);
  normalFontIds = this.normalFontIds.concat(["SabonLTStd-Roman:9"]);
  pages = [
    this.TwoColumn(3),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumnWithLeftCutout(7, 365),
    this.TwoColumn(8),
    this.TwoColumn(9),
    this.OneColumn(10, "handout"),
    this.TwoColumn(12, "appendix1"),
    this.TwoColumn(13, "appendix1"),
    this.TwoColumn(14, "appendix2"),
    this.TwoColumn(15, "appendix2"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      nameInfo: {
        x: 58.5,
        y: 683.0726,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 6,
      width: 1326,
      height: 1065,
      imageLeft: 11,
      imageRight: 1314,
      imageCols: 30,
      imageTop: 11,
      imageBottom: 1055,
      imageRows: 24,
      globalLight: true,
      detailsFile: "/pfs/maps/pfs1-q1-map1.json",
      journals: [
        {
          x: 2250,
          y: 2750,
          name: "A1.",
        },
        {
          x: 2350,
          y: 1350,
          name: "A2.",
        },
        {
          x: 2950,
          y: 1450,
          name: "A3.",
        },
        {
          x: 3350,
          y: 1150,
          name: "A4.",
        },
        {
          x: 3550,
          y: 2450,
          name: "A5.",
        },
        {
          x: 2950,
          y: 2250,
          name: "A6.",
        },
        {
          x: 3250,
          y: 2850,
          name: "A7.",
        },
      ],
    }),
  ];
  journals = [
    new CaptionImage({
      name: "npc1",
      page: 16,
      width: 979,
      height: 1318,
    }),
    new CaptionImage({
      name: "npc2",
      page: 17,
      width: 979,
      height: 1328,
    }),
    new CaptionImage({
      name: "npc3",
      page: 18,
      width: 1235,
      height: 1409,
    }),
    new CaptionImage({
      name: "npc4",
      page: 19,
      width: 1184,
      height: 1145,
    }),
    new CaptionImage({
      name: "npc5",
      page: 20,
      width: 1203,
      height: 1230,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "PATHFINDER SOCIETY SCENARIO #1A" &&
        t.fontId === "GoodOT-CondBold:10" &&
        t.page === 1,
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    if (sectionKey === "") {
      text.shift();
      text.unshift(this.getFakeText("Adventure Summary", "GoodOT-Bold:12"));
    }
    this.markIndented(text, 4, 347.0012, 651);
    this.markIndented(text, 4, 409.0012, 495);
    this.markIndented(text, 4, 409.0012, 435);
    this.markIndented(text, 5, 356.0012, 567);
    this.markIndented(text, 5, 357.0012, 555);
    this.markIndented(text, 5, 360.0012, 543);
    this.markIndented(text, 5, 375.0012, 531);
    this.markIndented(text, 15, 312.0012, 555);
    this.markIndented(text, 15, 312.0012, 543);
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
