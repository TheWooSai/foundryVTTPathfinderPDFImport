import { PFSSeason1Base } from "./base.js";
import { CaptionImage } from "../../../core/images.js";
import { ModuleScene } from "../../../core/module-scene.js";

export class PFS1_Q12 extends PFSSeason1Base {
  prefix = "pfs-q12";
  fullName = "PFS Q12 - Putrid Seeds";
  pages = [
    this.TwoColumnWithRightCutout(3, 420),
    this.TwoColumn(4),
    this.TwoColumn(6),
    this.TwoColumn(7),
    this.TwoColumnWithRightCutout(8, 360, "appendix1"),
    this.TwoColumnWithRightCutout(9, 380, "appendix2"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      nameInfo: {
        x: 72,
        y: 671.0726,
      },
      nameFn: (name) => this.sentenceCase(name).substr(3),
      page: 5,
      width: 1041,
      height: 1301,
      imageLeft: 0,
      imageRight: 1041,
      imageCols: 24,
      imageTop: 0,
      imageBottom: 1301,
      imageRows: 30,
      globalLight: true,
      detailsFile: "/pfs/maps/pfs1-q12-map1.json",
      journals: [
        {
          x: 2350,
          y: 2050,
          name: "A1.",
        },
        {
          x: 850,
          y: 2650,
          name: "A2.",
        },
        {
          x: 2250,
          y: 3650,
          name: "A3.",
        },
        {
          x: 1850,
          y: 2950,
          name: "A4.",
        },
        {
          x: 1750,
          y: 1350,
          name: "A5.",
        },
      ],
    }),
  ];
  journals = [
    new CaptionImage({
      name: "journal1",
      page: 3,
      width: 409,
      height: 278,
    }),
    new CaptionImage({
      name: "npc1",
      page: 10,
      width: 1017,
      height: 1265,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "PATHFINDER SOCIETY QUEST #12" &&
        t.fontId === "GoodOT-CondBold:10" &&
        t.page === 1,
    );
  }
  finalize(moduleData) {}
}
