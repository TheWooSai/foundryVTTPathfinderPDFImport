import { PFSSeason1Base } from "./base.js";
import { AdventureImage, CaptionImage } from "../../../core/images.js";
import { ModuleScene } from "../../../core/module-scene.js";

export class PFS1_19 extends PFSSeason1Base {
  prefix = "pfs-1-19";
  fullName = "PFS #1-19 - Iolite Squad Alpha";
  pages = [
    this.TwoColumnWithRightCutout(3, 370),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumnWithLeftCutout(6, 0),
    this.TwoColumn(7),
    this.TwoColumn(8),
    this.TwoColumn(10),
    this.TwoColumn(11),
    this.TwoColumn(12),
    this.TwoColumnWithRightCutout(13, 360),
    this.TwoColumn(14),
    this.TwoColumn(15),
    this.TwoColumn(17),
    this.TwoColumnWithRightCutout(18, 500, "appendix1"),
    this.TwoColumnWithRightCutout(19, 570, "appendix1"),
    this.TwoColumnWithRightCutout(20, 500, "appendix2"),
    this.TwoColumnWithRightCutout(21, 570, "appendix2"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      nameInfo: {
        x: 72,
        y: 675.2747,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 9,
      width: 1041,
      height: 1301,
      imageLeft: 0,
      imageRight: 1041,
      imageCols: 24,
      imageTop: 0,
      imageBottom: 1301,
      imageRows: 30,
      globalLight: true,
    }),
    new ModuleScene({
      name: "map2",
      nameInfo: {
        x: 63,
        y: 671.6504,
      },
      nameFn: (name) => this.sentenceCase(name).substr(3),
      page: 16,
      width: 1041,
      height: 1301,
      imageLeft: 0,
      imageRight: 1041,
      imageCols: 24,
      imageTop: 0,
      imageBottom: 1301,
      imageRows: 30,
      globalLight: true,
      detailsFile: "/pfs/maps/pfs1-19-map2.json",
      journals: [
        {
          x: 1750,
          y: 3450,
          name: "B1.",
        },
        {
          x: 1450,
          y: 2250,
          name: "B2.",
        },
        {
          x: 2550,
          y: 1850,
          name: "B3.",
        },
        {
          x: 1850,
          y: 1750,
          name: "B4.",
        },
        {
          x: 1850,
          y: 1100,
          name: "B5.",
        },
      ],
    }),
  ];
  journals = [
    new AdventureImage({
      name: "journal1",
      page: 3,
      width: 437,
      height: 299,
    }),
    new AdventureImage({
      name: "npc1",
      page: 22,
      width: 908,
      height: 1338,
    }),
    new AdventureImage({
      name: "npc2",
      page: 22,
      width: 439,
      height: 481,
    }),
    new AdventureImage({
      name: "npc3",
      page: 22,
      width: 422,
      height: 485,
    }),
    new AdventureImage({
      name: "npc4",
      page: 22,
      width: 439,
      height: 443,
    }),
    new CaptionImage({
      name: "npc5",
      page: 23,
      width: 1261,
      height: 1321,
    }),
    new CaptionImage({
      name: "npc6",
      page: 24,
      width: 1239,
      height: 1042,
    }),
    new CaptionImage({
      name: "npc7",
      page: 25,
      width: 1130,
      height: 1459,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "PATHFINDER SOCIETY SCENARIO #1\u201319" &&
        t.fontId === "GoodOT-CondBold:10" &&
        t.page === 1,
    );
  }
  finalize(moduleData) {}
}
