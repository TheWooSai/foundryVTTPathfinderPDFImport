import { PFSSeason2Base } from "./base.js";
import { CaptionImage } from "../../../core/images.js";
import { ModuleScene, ModuleSceneTiled } from "../../../core/module-scene.js";

export class PFS2_05 extends PFSSeason2Base {
  prefix = "pfs-2-05";
  fullName = "PFS #2-05 - Balancing the Scales";
  pages = [
    this.TwoColumnWithRightCutout(3, 300),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumn(6),
    this.TwoColumn(7),
    this.TwoColumnWithMap(8, 315),
    this.TwoColumn(9),
    this.TwoColumn(10),
    this.TwoColumnWithMap(11, 315),
    this.TwoColumn(12),
    this.TwoColumn(13),
    this.TwoColumnWithMap(14, 315),
    this.TwoColumn(15),
    this.TwoColumnWithRightCutout(16, 540, "appendix1"),
    this.TwoColumnWithRightCutout(17, 0, "appendix1"),
    this.TwoColumnWithRightCutout(18, 0, "appendix1"),
    this.TwoColumnWithRightCutout(19, 550, "appendix2"),
    this.TwoColumnWithRightCutout(20, 0, "appendix2"),
    this.TwoColumnWithRightCutout(21, 0, "appendix2"),
  ];
  scenes = [
    new ModuleSceneTiled({
      name: "map1",
      nameInfo: {
        x: 38.25,
        y: 678.8054,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 8,
      width: 375,
      height: 375,
      imageLeft: 0,
      imageRight: 375,
      imageCols: 6,
      imageTop: 0,
      imageBottom: 375,
      imageRows: 6,
      numTileCols: 3,
      numTileRows: 2,
      fillColor: "#000",
      tileRotations: [
        [2, 0, 3],
        [1, 1, 3],
      ],
      tilePositions: [
        [0, 0],
        [0, 1],
        [1, 0],
        [1, 1],
        [2, 0],
        [2, 1],
      ],
    }),
    new ModuleScene({
      name: "map2",
      nameInfo: {
        x: 38.5,
        y: 677.9169,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 11,
      width: 1124,
      height: 750,
      imageLeft: 90,
      imageRight: 1044,
      imageCols: 20,
      imageTop: 67,
      imageBottom: 686,
      imageRows: 13,
      globalLight: true,
    }),
    new ModuleScene({
      name: "map3",
      nameInfo: {
        x: 39.5,
        y: 676.9169,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 14,
      width: 1124,
      height: 750,
      imageLeft: 43,
      imageRight: 950,
      imageCols: 19,
      imageTop: 18,
      imageBottom: 735,
      imageRows: 15,
      globalLight: true,
    }),
  ];
  journals = [
    new CaptionImage({
      name: "npc1",
      page: 13,
      width: 854,
      height: 1216,
    }),
    new CaptionImage({
      name: "npc2",
      page: 22,
      width: 507,
      height: 674,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Scenario #2-05" &&
        t.fontId === "GoodOT-Bold:15" &&
        t.page === 1,
    );
  }
  finalize(moduleData) {}
}
