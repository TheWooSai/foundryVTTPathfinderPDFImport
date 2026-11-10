import { PFSSeason1Base } from "./base.js";
import { AdventureImage, CaptionImage } from "../../../core/images.js";
import { ModuleScene } from "../../../core/module-scene.js";

export class PFS1_22 extends PFSSeason1Base {
  prefix = "pfs-1-22";
  fullName = "PFS #1-22 - Doom of Cassomir";
  pages = [
    this.TwoColumnWithRightCutout(3, 390),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumn(6),
    this.TwoColumn(7),
    this.TwoColumnWithMap(8, 250),
    this.TwoColumn(9),
    this.TwoColumn(10),
    this.TwoColumn(11),
    this.TwoColumn(13),
    this.TwoColumn(14),
    this.TwoColumn(16),
    this.TwoColumnWithRightCutout(17, 580, "appendix1"),
    this.TwoColumnWithRightCutout(18, 580, "appendix1"),
    this.TwoColumnWithRightCutout(19, 560, "appendix1"),
    this.TwoColumnWithRightCutout(20, 580, "appendix2"),
    this.TwoColumnWithRightCutout(21, 580, "appendix2"),
    this.TwoColumnWithRightCutout(22, 560, "appendix2"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      nameInfo: {
        x: 50.25,
        y: 667.8873,
      },
      nameFn: (name) => this.sentenceCase(name).substr(3),
      page: 8,
      width: 900,
      height: 1124,
      imageLeft: 0,
      imageRight: 900,
      imageCols: 24,
      imageTop: 0,
      imageBottom: 1124,
      imageRows: 30,
      globalLight: true,
      detailsFile: "/pfs/maps/pfs1-22-map1.json",
    }),
    new ModuleScene({
      name: "map2",
      nameInfo: {
        x: 72,
        y: 672.7747,
      },
      nameFn: (name) => this.sentenceCase(name).substr(3),
      page: 12,
      width: 1301,
      height: 1045,
      imageLeft: 11,
      imageRight: 1292,
      imageCols: 24,
      imageTop: 11,
      imageBottom: 1035,
      imageRows: 30,
      globalLight: true,
      rotateCW: 1,
      detailsFile: "/pfs/maps/pfs1-22-map2.json",
    }),
    new ModuleScene({
      name: "map3",
      nameInfo: {
        x: 72,
        y: 671.7747,
      },
      nameFn: (name) => this.sentenceCase(name).substr(3),
      page: 15,
      width: 1301,
      height: 1045,
      imageLeft: 10,
      imageRight: 1291,
      imageCols: 24,
      imageTop: 10,
      imageBottom: 1035,
      imageRows: 30,
      globalLight: true,
      rotateCW: 1,
      detailsFile: "/pfs/maps/pfs1-22-map3.json",
      journals: [
        {
          x: 1e3,
          y: 2300,
          name: "C1.",
        },
        {
          x: 1800,
          y: 2300,
          name: "C2.",
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
    new CaptionImage({
      name: "npc1",
      page: 23,
      width: 1569,
      height: 1702,
    }),
    new CaptionImage({
      name: "npc2",
      page: 24,
      width: 1e3,
      height: 1400,
    }),
    new CaptionImage({
      name: "npc3",
      page: 25,
      width: 1242,
      height: 979,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "PATHFINDER SOCIETY SCENARIO #1\u201322" &&
        t.fontId === "GoodOT-CondBold:10" &&
        t.page === 1,
    );
  }
  finalize(moduleData) {}
}
