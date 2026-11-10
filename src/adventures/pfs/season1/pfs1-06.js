import { PFSSeason1Base } from "./base.js";
import { AdventureImage, CaptionImage } from "../../../core/images.js";
import { ModuleScene, ModuleSceneTiled } from "../../../core/module-scene.js";

export class PFS1_06 extends PFSSeason1Base {
  prefix = "pfs-1-06";
  fullName = "PFS #1-06 - Lost on the Spirit Road";
  pages = [
    this.TwoColumnWithRightCutout(3, 550),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumn(6),
    this.TwoColumn(8),
    this.TwoColumn(9),
    this.TwoColumn(11),
    this.TwoColumn(12),
    this.TwoColumn(13),
    this.TwoColumn(15),
    this.TwoColumnWithBottomCutout(16, 310, "appendix1"),
    this.TwoColumnWithBottomCutout(17, 465, "appendix1"),
    this.TwoColumnWithRightCutout(18, 520, "appendix2"),
    this.TwoColumnWithRightCutout(19, 485, "appendix2"),
    this.TwoColumnWithRightCutout(20, 520, "appendix2"),
    this.TwoColumnWithRightCutout(21, 480, "appendix3"),
    this.TwoColumnWithRightCutout(22, 485, "appendix3"),
    this.TwoColumnWithRightCutout(23, 475, "appendix3"),
    this.TwoColumnWithRightCutout(24, 0, "appendix4"),
    this.TwoColumnWithRightCutout(25, 520, "appendix4"),
    this.TwoColumnWithRightCutout(26, 520, "appendix4"),
    this.TwoColumnWithRightCutout(27, 475, "appendix5"),
    this.TwoColumnWithRightCutout(28, 475, "appendix5"),
    this.TwoColumnWithRightCutout(29, 460, "appendix5"),
    this.TwoColumnWithRightCutout(30, 520, "appendix6"),
    this.TwoColumnWithRightCutout(31, 420, "appendix6"),
    this.TwoColumnWithRightCutout(32, 520, "appendix6"),
    this.TwoColumnWithRightCutout(33, 460, "appendix7"),
    this.TwoColumnWithRightCutout(34, 320, "appendix7"),
    this.TwoColumnWithRightCutout(35, 475, "appendix7"),
    this.TwoColumnWithRightCutout(36, 570, "appendix8"),
    this.TwoColumnWithRightCutout(37, 500, "appendix8"),
    this.TwoColumnWithRightCutout(38, 485, "appendix8"),
    this.TwoColumnWithRightCutout(39, 485, "appendix9"),
    this.TwoColumnWithRightCutout(40, 450, "appendix9"),
    this.TwoColumnWithRightCutout(41, 420, "appendix9"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      nameInfo: {
        x: 80.1046,
        y: 679.8388,
      },
      nameFn: (name) => name.substring(3).trim(),
      page: 7,
      width: 1044,
      height: 1295,
      imageLeft: 21,
      imageTop: 21,
      imageRight: 1023,
      imageBottom: 1274,
      imageRows: 30,
      imageCols: 24,
    }),
    new ModuleSceneTiled({
      name: "map2",
      nameInfo: {
        x: 60.225,
        y: 675.0001,
      },
      nameFn: (name) => name.substring(3).trim(),
      page: 10,
      width: 265,
      height: 265,
      imageLeft: 8,
      imageTop: 8,
      imageRight: 256,
      imageBottom: 256,
      imageRows: 6,
      imageCols: 6,
      numTileCols: 4,
      numTileRows: 5,
      tileRotations: [
        [3, 3, 3, 2],
        [0, 3, 0, 1],
        [1, 1, 2, 3],
        [1, 3, 0, 0],
        [2, 1, 3, 1],
      ],
    }),
    new ModuleSceneTiled({
      name: "map3",
      nameInfo: {
        x: 60.225,
        y: 675.0001,
      },
      nameFn: (name) => name.substring(3).trim(),
      page: 14,
      width: 265,
      height: 265,
      imageLeft: 8,
      imageTop: 8,
      imageRight: 256,
      imageBottom: 256,
      imageRows: 6,
      imageCols: 6,
      numTileCols: 4,
      numTileRows: 5,
      tileRotations: [
        [1, 0, 0, 1],
        [0, 0, 2, 0],
        [3, 1, 1, 0],
        [0, 0, 2, 0],
        [2, 0, 3, 2],
      ],
    }),
  ];
  journals = [
    new AdventureImage({
      name: "journal1",
      page: 1,
      width: 1261,
      height: 1253,
    }),
    new AdventureImage({
      name: "journal2",
      page: 2,
      width: 820,
      height: 281,
    }),
    new AdventureImage({
      name: "journal3",
      page: 3,
      width: 409,
      height: 278,
    }),
    new CaptionImage({
      name: "npc1",
      page: 4,
      width: 527,
      height: 527,
    }),
    new CaptionImage({
      name: "npc2",
      page: 15,
      width: 592,
      height: 850,
    }),
    new CaptionImage({
      name: "npc3",
      page: 42,
      width: 1206,
      height: 1193,
    }),
    new CaptionImage({
      name: "npc4",
      page: 43,
      width: 1096,
      height: 1636,
    }),
    new CaptionImage({
      name: "npc5",
      page: 44,
      width: 948,
      height: 1149,
    }),
    new CaptionImage({
      name: "npc6",
      page: 45,
      width: 1239,
      height: 749,
    }),
    new CaptionImage({
      name: "npc7",
      page: 46,
      width: 1022,
      height: 1133,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "PATHFINDER SOCIETY SCENARIO #1\u201306" &&
        t.fontId === "GoodOT-CondBold:10" &&
        t.page === 1,
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    this.changeFontId(text, 3, 72, 663, "GoodOT-Bold:12");
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
