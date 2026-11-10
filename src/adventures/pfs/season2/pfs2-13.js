import { PFSSeason2Base } from "./base.js";
import { AdventureImage, CaptionImage } from "../../../core/images.js";
import { ModuleScene, ModuleSceneTiled } from "../../../core/module-scene.js";

export class PFS2_13 extends PFSSeason2Base {
  prefix = "pfs-2-13";
  fullName = "PFS #2-13 - A Gilded Test";
  pages = [
    this.TwoColumnWithRightCutout(3, 310),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumn(6),
    this.TwoColumn(8),
    this.TwoColumn(10),
    this.TwoColumn(11),
    this.TwoColumn(12),
    this.TwoColumn(14),
    this.TwoColumn(15),
    this.TwoColumnWithRightCutout(16, 460, "appendix1"),
    this.TwoColumnWithRightCutout(17, 0, "appendix1"),
    this.TwoColumnWithRightCutout(18, 0, "appendix1"),
    this.TwoColumnWithRightCutout(19, 490, "appendix1"),
    this.TwoColumnWithRightCutout(20, 490, "appendix2"),
    this.TwoColumnWithRightCutout(21, 0, "appendix2"),
    this.TwoColumnWithRightCutout(22, 580, "appendix2"),
    this.TwoColumnWithRightCutout(23, 480, "appendix2"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      canonical: {
        name: "flipmat-classic/slum-quarter",
        priority: 0,
      },
      nameInfo: {
        x: 72,
        y: 677.9169,
      },
      nameFn: (name) => this.sentenceCase(name).substring(8),
      page: 7,
      width: 1041,
      height: 1301,
      imageLeft: 0,
      imageRight: 1041,
      imageCols: 24,
      imageTop: 0,
      imageBottom: 1301,
      imageRows: 30,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/pfs/maps/pfs2-13-map1.json",
    }),
    new ModuleScene({
      name: "map2",
      canonical: {
        name: "flipmat-classic/slum-quarter2",
        priority: 0,
      },
      nameInfo: {
        x: 72,
        y: 676.9169,
      },
      nameFn: (name) => this.sentenceCase(name).substring(8),
      page: 9,
      width: 1041,
      height: 1301,
      imageLeft: 0,
      imageRight: 1041,
      imageCols: 24,
      imageTop: 0,
      imageBottom: 1301,
      imageRows: 30,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/pfs/maps/pfs2-13-map2.json",
    }),
    new ModuleSceneTiled({
      name: "map3",
      nameInfo: {
        x: 53.5,
        y: 678.1235,
      },
      nameFn: (name) => this.sentenceCase(name).substring(8).trim(),
      page: 13,
      width: 225,
      height: 360,
      imageLeft: 0,
      imageRight: 225,
      imageCols: 5,
      imageTop: 0,
      imageBottom: 360,
      imageRows: 8,
      numTileCols: 5,
      numTileRows: 3,
      fillColor: "#000",
      tileRotations: [
        [2, 0, 2, 0, 2],
        [0, 0, 0, 0, 0],
        [2, 0, 0, 0, 0],
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
        [3, 0],
        [3, 1],
        [3, 2],
        [4, 0],
        [4, 1],
        [4, 2],
      ],
      detailsFile: "/pfs/maps/pfs2-13-map3.json",
    }),
  ];
  journals = [
    new CaptionImage({
      name: "npc1",
      page: 4,
      width: 540,
      height: 540,
    }),
    new CaptionImage({
      name: "npc2",
      page: 5,
      width: 497,
      height: 1170,
    }),
    new CaptionImage({
      name: "npc3",
      page: 14,
      width: 1262,
      height: 1080,
    }),
    new AdventureImage({
      name: "npc4",
      page: 24,
      width: 522,
      height: 696,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Scenario #2-13" &&
        t.fontId === "GoodOT-Bold:15" &&
        t.page === 1,
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    this.removeText(text, 3, 231.1512, 654.8302);
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
