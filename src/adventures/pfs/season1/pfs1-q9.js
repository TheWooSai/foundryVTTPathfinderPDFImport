import { PFSSeason1Base } from "./base.js";
import { CaptionImage } from "../../../core/images.js";
import { ModuleScene } from "../../../core/module-scene.js";

export class PFS1_Q9 extends PFSSeason1Base {
  prefix = "pfs-q9";
  fullName = "PFS Q9 - Wayfinder Origins";
  pages = [
    this.TwoColumn(3),
    this.TwoColumn(4),
    this.TwoColumnWithRightCutout(5, 435),
    this.TwoColumn(7),
    this.TwoColumnWithRightCutout(8, 447, "appendix1"),
    this.TwoColumn(9, "appendix1"),
    this.TwoColumnWithRightCutout(10, 435, "appendix1"),
    this.TwoColumnWithRightCutout(11, 579, "appendix1"),
    this.TwoColumnWithRightCutout(12, 447, "appendix2"),
    this.TwoColumn(13, "appendix2"),
    this.TwoColumnWithRightCutout(14, 435, "appendix2"),
    this.TwoColumnWithRightCutout(15, 579, "appendix2"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      nameInfo: {
        x: 56.5,
        y: 678.6199,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 6,
      width: 1041,
      height: 1301,
      imageLeft: 0,
      imageRight: 1041,
      imageCols: 24,
      imageTop: 0,
      imageBottom: 1301,
      imageRows: 30,
      globalLight: true,
      detailsFile: "/pfs/maps/pfs1-q9-map1.json",
      journals: [
        {
          x: 1350,
          y: 2350,
          name: "A4.",
        },
        {
          x: 2350,
          y: 2850,
          name: "A1.",
        },
        {
          x: 1950,
          y: 1550,
          name: "A2.",
        },
        {
          x: 1250,
          y: 3150,
          name: "A3.",
        },
      ],
    }),
  ];
  journals = [
    new CaptionImage({
      name: "npc1",
      page: 16,
      width: 540,
      height: 540,
    }),
    new CaptionImage({
      name: "npc2",
      page: 17,
      width: 1056,
      height: 1336,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "PATHFINDER SOCIETY QUEST #9" &&
        t.fontId === "GoodOT-CondBold:10" &&
        t.page === 1,
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    this.markIndented(text, 7, 366.0012, 567);
    this.markIndented(text, 7, 341.0012, 531);
    this.markIndented(text, 7, 378.0012, 495);
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
