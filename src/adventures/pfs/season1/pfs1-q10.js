import { PFSSeason1Base } from "./base.js";
import { CaptionImage } from "../../../core/images.js";
import { ModuleSceneTiled } from "../../../core/module-scene.js";

export class PFS1_Q10 extends PFSSeason1Base {
  prefix = "pfs-q10";
  fullName = "PFS Q10 - The Broken Scales";
  pages = [
    this.TwoColumnWithRightCutout(3, 400),
    this.TwoColumn(4),
    this.TwoColumn(6),
    this.TwoColumn(7),
    this.TwoColumnWithRightCutout(8, 580, "appendix1"),
    this.TwoColumnWithRightCutout(9, 580, "appendix2"),
  ];
  scenes = [
    new ModuleSceneTiled({
      name: "map1",
      nameInfo: {
        x: 43.5,
        y: 675.2669,
      },
      nameFn: (name) => name.substring(3).trim(),
      page: 5,
      width: 431,
      height: 431,
      imageLeft: 0,
      imageTop: 0,
      imageRight: 431,
      imageBottom: 431,
      imageRows: 6,
      imageCols: 6,
      numTileCols: 3,
      numTileRows: 3,
      tileRotations: [
        [0, 1, 1],
        [1, 1, 2],
        [1, 1, 0],
      ],
      detailsFile: "/pfs/maps/pfs1-q10-map1.json",
      journals: [
        {
          x: 850,
          y: 650,
          name: "A1.",
        },
        {
          x: 1550,
          y: 850,
          name: "A2.",
        },
        {
          x: 1950,
          y: 750,
          name: "A3.",
        },
        {
          x: 2050,
          y: 1450,
          name: "A4.",
        },
        {
          x: 1450,
          y: 1350,
          name: "A5.",
        },
        {
          x: 850,
          y: 1650,
          name: "A6.",
        },
        {
          x: 750,
          y: 1950,
          name: "A7.",
        },
        {
          x: 1250,
          y: 1850,
          name: "A8.",
        },
        {
          x: 2150,
          y: 1950,
          name: "A9.",
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
      width: 1216,
      height: 1236,
    }),
    new CaptionImage({
      name: "npc2",
      page: 11,
      width: 1261,
      height: 1174,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "PATHFINDER SOCIETY QUEST #10" &&
        t.fontId === "GoodOT-CondBold:10" &&
        t.page === 1,
    );
  }
  finalize(moduleData) {}
}
