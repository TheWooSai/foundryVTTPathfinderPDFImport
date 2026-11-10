import { PFSSeason1Base } from "./base.js";
import { CaptionImage } from "../../../core/images.js";
import { ModuleSceneTiled } from "../../../core/module-scene.js";

export class PFS1_Q11 extends PFSSeason1Base {
  prefix = "pfs-q11";
  fullName = "PFS Q11 - A Parchment Tree";
  pages = [
    this.TwoColumnWithRightCutout(3, 380),
    this.TwoColumn(4),
    this.TwoColumnWithRightCutout(5, 390),
    this.TwoColumn(6),
    this.TwoColumnWithRightCutout(8, 0, "appendix1"),
    this.TwoColumnWithRightCutout(9, 540, "appendix2"),
  ];
  scenes = [
    new ModuleSceneTiled({
      name: "map1",
      nameInfo: {
        x: 48.5,
        y: 675.2669,
      },
      nameFn: (name) => this.sentenceCase(name).substr(3),
      page: 7,
      width: 431,
      height: 431,
      imageLeft: 0,
      imageTop: 0,
      imageRight: 431,
      imageBottom: 431,
      imageRows: 6,
      imageCols: 6,
      numTileCols: 2,
      numTileRows: 2,
      tileRotations: [
        [1, 1],
        [0, 2],
      ],
      tilePositions: [
        [0, 0],
        [0, 1],
        [1, 0],
        [1, 1],
      ],
    }),
  ];
  journals = [
    new CaptionImage({
      name: "npc1",
      page: 10,
      width: 898,
      height: 1300,
    }),
    new CaptionImage({
      name: "npc2",
      page: 11,
      width: 992,
      height: 1403,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "PATHFINDER SOCIETY QUEST #11" &&
        t.fontId === "GoodOT-CondBold:10" &&
        t.page === 1,
    );
  }
  finalize(moduleData) {}
}
