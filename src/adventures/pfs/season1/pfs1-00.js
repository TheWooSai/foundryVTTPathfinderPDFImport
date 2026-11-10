import { PFSSeason1Base } from "./base.js";
import { CaptionImage } from "../../../core/images.js";
import { ModuleScene } from "../../../core/module-scene.js";

export class PFS1_00 extends PFSSeason1Base {
  prefix = "pfs-1-00";
  fullName = "PFS #1-00 - Origin of the Open Road";
  pages = [
    this.TwoColumnWithRightCutout(3, 360),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumn(7),
    this.TwoColumnWithRightCutout(8, 600),
    this.TwoColumn(9),
    this.TwoColumn(10),
    this.TwoColumnWithLeftCutout(11, 520),
    this.TwoColumnWithLeftCutout(13, 490),
    this.TwoColumnWithRightCutout(14, 380),
    this.TwoColumn(15),
    this.TwoColumn(18, "appendix"),
    this.TwoColumn(19, "appendix"),
    this.TwoColumn(20, "appendix"),
    this.TwoColumn(21, "appendix"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      nameInfo: {
        x: 60.5,
        y: 675.0001,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 6,
      width: 1301,
      height: 1045,
      imageLeft: 96,
      imageRight: 1290,
      imageCols: 20,
      imageTop: 97,
      imageBottom: 950,
      imageRows: 28,
      rotateCW: 3,
      globalLight: true,
      detailsFile: "/pfs/maps/pfs1-00-map1.json",
    }),
    new ModuleScene({
      name: "map2",
      nameInfo: {
        x: 90.5,
        y: 675.0001,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 12,
      width: 1300,
      height: 906,
      imageLeft: 9,
      imageRight: 1292,
      imageCols: 23,
      imageTop: 74,
      imageBottom: 833,
      imageRows: 39,
      rotateCW: 1,
      globalLight: true,
      detailsFile: "/pfs/maps/pfs1-00-map2.json",
      journals: [
        {
          x: 3050,
          y: 1350,
          name: "B1.",
        },
        {
          x: 2550,
          y: 2450,
          name: "B2.",
        },
        {
          x: 1750,
          y: 1650,
          name: "B3.",
        },
        {
          x: 2250,
          y: 3250,
          name: "B4.",
        },
        {
          x: 2150,
          y: 4050,
          name: "B5.",
        },
      ],
    }),
  ];
  journals = [
    new CaptionImage({
      name: "npc1",
      page: 23,
      width: 862,
      height: 1350,
    }),
    new CaptionImage({
      name: "npc2",
      page: 24,
      width: 907,
      height: 1326,
    }),
    new CaptionImage({
      name: "npc3",
      page: 25,
      width: 657,
      height: 1312,
    }),
    new CaptionImage({
      name: "npc4",
      page: 26,
      width: 1050,
      height: 1350,
    }),
    new CaptionImage({
      name: "npc5",
      page: 27,
      width: 923,
      height: 1350,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "PATHFINDER SOCIETY SCENARIO #1\u201300" &&
        t.fontId === "GoodOT-CondBold:10" &&
        t.page === 1,
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    if (sectionKey === "") {
      text.shift();
      text.unshift(this.getFakeText("Adventure Summary", "GoodOT-Bold:12"));
    }
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
