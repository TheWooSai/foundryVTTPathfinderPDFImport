import { PFSSeason2Base } from "./base.js";
import { CaptionImage } from "../../../core/images.js";
import { ModuleScene, ModuleSceneTiled } from "../../../core/module-scene.js";

export class PFS2_07 extends PFSSeason2Base {
  prefix = "pfs-2-07";
  fullName = "PFS #2-07 - The Blakros Deception";
  pages = [
    this.TwoColumnWithRightCutout(3, 280),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumn(6),
    this.TwoColumn(8),
    this.TwoColumn(9),
    this.TwoColumn(10),
    this.TwoColumn(11),
    this.TwoColumn(12),
    this.TwoColumn(14),
    this.TwoColumnWithRightCutout(15, 0, "appendix1"),
    this.TwoColumnWithRightCutout(16, 460, "appendix1"),
    this.TwoColumnWithRightCutout(17, 0, "appendix1"),
    this.TwoColumnWithRightCutout(18, 480, "appendix1"),
    this.TwoColumnWithRightCutout(19, 0, "appendix2"),
    this.TwoColumnWithRightCutout(20, 460, "appendix2"),
    this.TwoColumnWithRightCutout(21, 0, "appendix2"),
    this.TwoColumnWithRightCutout(22, 490, "appendix2"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      nameInfo: {
        x: 57.5,
        y: 684.3508,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 7,
      width: 1064,
      height: 1328,
      imageLeft: 1,
      imageRight: 1064,
      imageCols: 24,
      imageTop: 0,
      imageBottom: 1328,
      imageRows: 30,
      globalLight: true,
      detailsFile: "/pfs/maps/pfs2-07-map1.json",
    }),
    new ModuleSceneTiled({
      name: "map2",
      nameInfo: {
        x: 103.4388,
        y: 682.1339,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 13,
      width: 434,
      height: 434,
      imageLeft: 0,
      imageRight: 434,
      imageCols: 6,
      imageTop: 0,
      imageBottom: 434,
      imageRows: 6,
      numTileCols: 2,
      numTileRows: 3,
      fillColor: "#000",
      tileRotations: [
        [1, 0],
        [2, 0],
        [1, 0],
      ],
      tilePositions: [
        [1, 0],
        [0, 0],
        [1, 1],
        [0, 1],
        [1, 2],
        [0, 2],
      ],
      detailsFile: "/pfs/maps/pfs2-07-map2.json",
    }),
  ];
  journals = [
    new CaptionImage({
      name: "npc1",
      page: 8,
      width: 719,
      height: 1079,
    }),
    new CaptionImage({
      name: "npc2",
      page: 9,
      width: 898,
      height: 1138,
    }),
    new CaptionImage({
      name: "npc3",
      page: 10,
      width: 773,
      height: 1200,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Scenario #2-07" &&
        t.fontId === "GoodOT-Bold:15" &&
        t.page === 1,
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    this.changeFontId(text, 9, 81, 687, "GoodOT-Bold:9");
    this.markIndented(text, 12, 72, 687);
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
