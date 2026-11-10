import { PFSSeason2Base } from "./base.js";
import { CaptionImage } from "../../../core/images.js";
import { ModuleSceneTiled } from "../../../core/module-scene.js";

export class PFS2_20 extends PFSSeason2Base {
  prefix = "pfs-2-20";
  fullName = "PFS #2-20 - Breaking the Storm Bastion in Embers";
  pages = [
    this.TwoColumnWithRightCutout(3, 310),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumn(6),
    this.TwoColumn(8),
    this.TwoColumn(9),
    this.TwoColumn(10),
    this.TwoColumn(11),
    this.TwoColumn(13),
    this.TwoColumn(14),
    this.TwoColumnWithRightCutout(15, 500, "appendix1"),
    this.TwoColumnWithRightCutout(16, 480, "appendix1"),
    this.TwoColumnWithRightCutout(17, 490, "appendix1"),
    this.TwoColumnWithRightCutout(18, 500, "appendix2"),
    this.TwoColumnWithRightCutout(19, 460, "appendix2"),
    this.TwoColumnWithRightCutout(20, 500, "appendix2"),
    this.OneColumn(26, "handout1"),
    this.OneColumn(27, "handout2"),
  ];
  scenes = [
    new ModuleSceneTiled({
      name: "map1",
      nameInfo: {
        x: 38.5,
        y: 689.9169,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 7,
      width: 284,
      height: 285,
      imageLeft: 0,
      imageRight: 284,
      imageCols: 6,
      imageTop: 0,
      imageBottom: 285,
      imageRows: 6,
      numTileCols: 4,
      numTileRows: 4,
      fillColor: "#000",
      tileRotations: [
        [0, 0, 0, 2],
        [0, 3, 0, 0],
        [3, 0, 2, 0],
        [3, 3, 0, 3],
      ],
      tilePositions: [
        [0, 0],
        [0, 1],
        [0, 2],
        [0, 3],
        [1, 0],
        [1, 1],
        [1, 2],
        [1, 3],
        [2, 0],
        [2, 1],
        [2, 2],
        [3, 2],
        [2, 3],
        [3, 0],
        [3, 1],
        [3, 3],
      ],
    }),
    new ModuleSceneTiled({
      name: "map2",
      nameInfo: {
        x: 41.5,
        y: 687.0001,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 12,
      width: 375,
      height: 375,
      imageLeft: 0,
      imageRight: 375,
      imageCols: 6,
      imageTop: 0,
      imageBottom: 375,
      imageRows: 6,
      numTileCols: 3,
      numTileRows: 3,
      fillColor: "#000",
      tileRotations: [
        [2, 1, 0],
        [2, 1, 0],
        [3, 3, 3],
      ],
      tilePositions: [
        [0, 0],
        [0, 1],
        [0, 2],
        [1, 0],
        [1, 1],
        [1, 2],
        [2, 0],
        [2, 1],
        [2, 2],
      ],
      detailsFile: "/pfs/maps/pfs2-20-map2.json",
    }),
  ];
  journals = [
    new CaptionImage({
      name: "npc1",
      page: 4,
      width: 382,
      height: 1100,
    }),
    new CaptionImage({
      name: "npc2",
      page: 5,
      width: 448,
      height: 418,
    }),
    new CaptionImage({
      name: "npc3",
      page: 6,
      width: 850,
      height: 1287,
    }),
    new CaptionImage({
      name: "npc4",
      page: 9,
      width: 813,
      height: 1245,
    }),
    new CaptionImage({
      name: "npc5",
      page: 10,
      width: 788,
      height: 1007,
    }),
    new CaptionImage({
      name: "npc6",
      page: 11,
      width: 410,
      height: 451,
    }),
    new CaptionImage({
      name: "npc7",
      page: 13,
      width: 827,
      height: 1204,
    }),
    new CaptionImage({
      name: "npc8",
      page: 21,
      width: 501,
      height: 674,
    }),
    new CaptionImage({
      name: "npc9",
      page: 22,
      width: 636,
      height: 576,
    }),
    new CaptionImage({
      name: "npc10",
      page: 23,
      width: 558,
      height: 656,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Scenario #2-20" &&
        t.fontId === "GoodOT-Bold:15" &&
        t.page === 1,
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    this.removeText(text, 3, 227.6313, 654.8302);
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
