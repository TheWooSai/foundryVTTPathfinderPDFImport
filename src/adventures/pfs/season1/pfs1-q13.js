import { PFSSeason1Base } from "./base.js";
import { CaptionImage } from "../../../core/images.js";
import { ModuleSceneTiled } from "../../../core/module-scene.js";

export class PFS1_Q13 extends PFSSeason1Base {
  prefix = "pfs-q13";
  fullName = "PFS Q13 - Falcon's Descent";
  pages = [
    this.TwoColumnWithRightCutout(3, 400),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumn(7),
    this.TwoColumnWithRightCutout(8, 500, "appendix1"),
    this.TwoColumnWithRightCutout(9, 500, "appendix2"),
    this.TwoColumn(10, "appendix2"),
  ];
  scenes = [
    new ModuleSceneTiled({
      name: "map1",
      nameInfo: {
        x: 79.9276,
        y: 675,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 6,
      width: 433,
      height: 433,
      imageLeft: 0,
      imageTop: 0,
      imageRight: 433,
      imageBottom: 433,
      imageRows: 6,
      imageCols: 6,
      numTileCols: 3,
      numTileRows: 4,
      fillColor: "#000",
      tileRotations: [
        [0, 0, 3],
        [0, 3, 3],
        [0, 0, 0],
        [3, 0, 1],
      ],
      tilePositions: [
        [0, 0],
        [1, 0],
        [2, 0],
        [0, 1],
        [1, 1],
        [2, 1],
        [0, 2],
        [1, 2],
        [2, 2],
        [0, 3],
        [1, 3],
        [2, 3],
      ],
      detailsFile: "/pfs/maps/pfs1-q13-map1.json",
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
      page: 11,
      width: 914,
      height: 1371,
    }),
    new CaptionImage({
      name: "npc2",
      page: 12,
      width: 1e3,
      height: 1293,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "PATHFINDER SOCIETY QUEST #13" &&
        t.fontId === "GoodOT-CondBold:10" &&
        t.page === 1,
    );
  }
  finalize(moduleData) {}
}
