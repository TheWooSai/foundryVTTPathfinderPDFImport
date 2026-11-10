import { PFSSeason1Base } from "./base.js";
import { AdventureImage, CaptionImage } from "../../../core/images.js";
import { ModuleScene, ModuleSceneTiled } from "../../../core/module-scene.js";

export class PFS1_17 extends PFSSeason1Base {
  prefix = "pfs-1-17";
  fullName = "PFS #1-17 - The Thorned Monarch";
  pages = [
    this.TwoColumnWithRightCutout(3, 330),
    this.TwoColumn(4),
    this.TwoColumnWithLeftCutout(5, 390),
    this.TwoColumn(6),
    this.TwoColumn(8),
    this.TwoColumnWithRightCutout(10, 600),
    this.TwoColumn(11),
    this.TwoColumn(13),
    this.TwoColumn(14),
    this.TwoColumnWithRightCutout(15, 580, "appendix1a"),
    this.TwoColumnWithRightCutout(16, 580, "appendix1b"),
    this.TwoColumnWithRightCutout(17, 580, "appendix1c"),
    this.TwoColumn(18, "appendix1c"),
    this.TwoColumnWithRightCutout(19, 580, "appendix2a"),
    this.TwoColumnWithRightCutout(20, 500, "appendix2a"),
    this.TwoColumnWithRightCutout(21, 580, "appendix2c"),
    this.TwoColumn(22, "appendix2c"),
  ];
  scenes = [
    new ModuleSceneTiled({
      name: "map1",
      nameInfo: {
        x: 102.2126,
        y: 675.2747,
      },
      nameFn: (name) => name.substring(3),
      page: 7,
      width: 438,
      height: 439,
      imageLeft: 0,
      imageTop: 0,
      imageRight: 438,
      imageBottom: 438,
      imageRows: 6,
      imageCols: 6,
      numTileCols: 2,
      numTileRows: 3,
      fillColor: "#000",
      tilePositions: [
        [0, 2],
        [0, 1],
        [0, 0],
        [1, 2],
        [1, 1],
        [1, 0],
      ],
      tileRotations: [
        [2, 0],
        [2, 0],
        [0, 3],
      ],
      detailsFile: "/pfs/maps/pfs1-17-map1.json",
    }),
    new ModuleScene({
      name: "map2",
      nameInfo: {
        x: 72,
        y: 674.5,
      },
      nameFn: (name) => name.substring(3),
      page: 9,
      width: 1305,
      height: 1048,
      imageLeft: 10,
      imageTop: 11,
      imageRight: 1294,
      imageBottom: 1038,
      imageRows: 30,
      imageCols: 24,
      rotateCW: 1,
    }),
    new ModuleScene({
      name: "map3",
      nameInfo: {
        x: 72,
        y: 674.5,
      },
      nameFn: (name) => name.substring(3),
      page: 12,
      width: 1051,
      height: 1303,
      imageLeft: 20,
      imageTop: 22,
      imageRight: 1282,
      imageBottom: 988,
      imageRows: 23,
      imageCols: 30,
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
      width: 845,
      height: 1253,
    }),
    new CaptionImage({
      name: "npc2",
      page: 24,
      width: 1255,
      height: 1242,
    }),
    new CaptionImage({
      name: "npc3",
      page: 25,
      width: 1241,
      height: 1130,
    }),
    new CaptionImage({
      name: "npc4",
      page: 26,
      width: 1001,
      height: 1329,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "PATHFINDER SOCIETY SCENARIO #1\u201317" &&
        t.fontId === "GoodOT-CondBold:10" &&
        t.page === 1,
    );
  }
  finalize(moduleData) {}
}
