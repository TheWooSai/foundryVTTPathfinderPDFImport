import { PFSSeason1Base } from "./base.js";
import { CaptionImage } from "../../../core/images.js";
import { ModuleScene, ModuleSceneTiled } from "../../../core/module-scene.js";

export class PFS1_16 extends PFSSeason1Base {
  prefix = "pfs-1-16";
  fullName = "PFS #1-16 - The Opal of Bhopan";
  pages = [
    this.TwoColumnWithRightCutout(3, 330),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumn(6),
    this.TwoColumn(8),
    this.TwoColumn(9),
    this.TwoColumnWithLeftCutout(10, 412),
    this.TwoColumn(11),
    this.TwoColumn(12),
    this.TwoColumn(13),
    this.TwoColumnWithLeftCutout(14, 185),
    this.TwoColumn(15),
    this.TwoColumn(16),
    this.TwoColumn(17),
    this.TwoColumn(18),
    this.TwoColumnWithMap(20, 380),
    this.TwoColumn(21),
    this.TwoColumnWithRightCutout(22, 490, "appendix1a"),
    this.TwoColumn(23, "appendix1a"),
    this.TwoColumnWithRightCutout(24, 500, "appendix1b"),
    this.TwoColumnWithRightCutout(25, 535, "appendix1c"),
    this.TwoColumn(26, "appendix1c"),
    this.TwoColumnWithRightCutout(27, 500, "appendix1d"),
    this.TwoColumnWithRightCutout(28, 520, "appendix2a"),
    this.TwoColumn(29, "appendix2a"),
    this.TwoColumnWithRightCutout(30, 500, "appendix2b"),
    this.TwoColumnWithRightCutout(31, 535, "appendix2c"),
    this.TwoColumn(32, "appendix2c"),
    this.TwoColumnWithRightCutout(33, 500, "appendix2d"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      nameInfo: {
        x: 72,
        y: 674.5,
      },
      nameFn: (name) => name.substring(3),
      page: 7,
      width: 1305,
      height: 1048,
      imageLeft: 10,
      imageTop: 11,
      imageRight: 1294,
      imageBottom: 1038,
      imageRows: 30,
      imageCols: 24,
      rotateCW: 3,
    }),
    new ModuleSceneTiled({
      name: "map2",
      nameInfo: {
        x: 95.7348,
        y: 677.2938,
      },
      nameFn: (name) => name.substring(3),
      page: 19,
      imageFn: (img) => {
        if (img.page === 19) {
          if (img.width === 298 && img.height === 305) {
            return {
              imageLeft: 4,
              imageTop: 3,
              imageRight: 294,
              imageBottom: 293,
            };
          }
          if (img.width === 456 && img.height === 458) {
            return {
              imageLeft: 11,
              imageTop: 12,
              imageRight: 443,
              imageBottom: 444,
            };
          }
          if (img.width === 319 && img.height === 320) {
            return {
              imageLeft: 8,
              imageTop: 8,
              imageRight: 311,
              imageBottom: 311,
            };
          }
        }
      },
      imageRows: 6,
      imageCols: 6,
      numTileCols: 3,
      numTileRows: 4,
      fillColor: "#000",
      tilePositions: [
        [0, 0],
        [1, 0],
        [2, 0],
        [0, 1],
        [0, 2],
        [0, 3],
        [1, 1],
        [1, 2],
        [1, 3],
        [2, 3],
        [2, 1],
      ],
      tileRotations: [
        [2, 3, 1],
        [3, 3, 1],
        [1, 1, 2],
        [2, 1, 3],
      ],
      detailsFile: "/pfs/maps/pfs1-16-map2.json",
    }),
    new ModuleSceneTiled({
      name: "map3",
      nameInfo: {
        x: 72,
        y: 375,
      },
      nameFn: (name) => name.substring(3),
      imageFn: (img) => {
        if (img.page === 20) {
          if (img.width === 325 && img.height === 325) {
            return {
              imageLeft: 8,
              imageTop: 8,
              imageRight: 317,
              imageBottom: 317,
            };
          }
          if (img.width === 460 && img.height === 461) {
            return {
              imageLeft: 14,
              imageTop: 8,
              imageRight: 446,
              imageBottom: 446,
            };
          }
        }
      },
      page: 20,
      imageRows: 6,
      imageCols: 6,
      numTileCols: 3,
      numTileRows: 2,
      fillColor: "#000",
      tilePositions: [
        [0, 0],
        [0, 1],
        [1, 0],
        [1, 1],
        [2, 0],
        [2, 1],
      ],
      tileRotations: [
        [3, 0, 0],
        [2, 2, 1],
      ],
      detailsFile: "/pfs/maps/pfs1-16-map3.json",
    }),
  ];
  journals = [
    new CaptionImage({
      name: "journal1",
      page: 35,
      width: 1253,
      height: 1288,
    }),
    new CaptionImage({
      name: "npc1",
      page: 11,
      width: 753,
      height: 1131,
    }),
    new CaptionImage({
      name: "npc2",
      page: 13,
      width: 828,
      height: 1190,
    }),
    new CaptionImage({
      name: "npc3",
      page: 34,
      width: 1251,
      height: 1071,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "PATHFINDER SOCIETY SCENARIO #1\u201316" &&
        t.fontId === "GoodOT-CondBold:10" &&
        t.page === 1,
    );
  }
  finalize(moduleData) {}
}
