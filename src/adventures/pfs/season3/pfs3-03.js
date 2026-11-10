import { PFSSeason3Base } from "./base.js";
import { CaptionImage } from "../../../core/images.js";
import { ModuleScene } from "../../../core/module-scene.js";

export class PFS3_03 extends PFSSeason3Base {
  prefix = "pfs-3-03";
  fullName = "PFS #3-03 - Echoes of Desperation";
  pages = [
    this.TwoColumnWithRightCutout(3, 350),
    this.TwoColumn(4),
    this.TwoColumnWithRightCutout(5, 440),
    this.TwoColumn(7),
    this.TwoColumn(8),
    this.TwoColumn(9),
    this.TwoColumn(11),
    this.TwoColumn(12),
    this.TwoColumn(13),
    this.TwoColumn(15),
    this.TwoColumnWithRightCutout(16, 0, "appendix1"),
    this.TwoColumnWithRightCutout(17, 0, "appendix1"),
    this.TwoColumnWithRightCutout(18, 540, "appendix1"),
    this.TwoColumn(19, "appendix1"),
    this.TwoColumnWithRightCutout(20, 0, "appendix1"),
    this.TwoColumnWithRightCutout(21, 510, "appendix2"),
    this.TwoColumnWithRightCutout(22, 0, "appendix2"),
    this.TwoColumnWithRightCutout(23, 540, "appendix2"),
    this.TwoColumn(24, "appendix2"),
    this.TwoColumnWithRightCutout(25, 490, "appendix2"),
    this.OneColumn(28, "handout"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      canonical: {
        name: "flipmat/shipwrecks1",
        priority: 0,
      },
      nameInfo: {
        x: 82,
        y: 675.5514,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 6,
      width: 958,
      height: 1178,
      imageLeft: 10,
      imageRight: 949,
      imageCols: 24,
      imageTop: 10,
      imageBottom: 1144,
      imageRows: 29,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/flipmats/maps/shipwrecks1.json",
    }),
    new ModuleScene({
      name: "map2",
      canonical: {
        name: "flipmat/forest2",
        priority: 0,
      },
      nameInfo: {
        x: 82,
        y: 675.5514,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 10,
      width: 1188,
      height: 957,
      imageLeft: 10,
      imageRight: 1180,
      imageCols: 30,
      imageTop: 11,
      imageBottom: 947,
      imageRows: 24,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/flipmats/maps/forest2.json",
    }),
    new ModuleScene({
      name: "map3",
      canonical: {
        name: "flipmat/forest3",
        priority: 0,
      },
      nameInfo: {
        x: 82,
        y: 675.5514,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 14,
      width: 1184,
      height: 951,
      imageLeft: 9,
      imageRight: 1175,
      imageCols: 30,
      imageTop: 11,
      imageBottom: 942,
      imageRows: 24,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/flipmats/maps/forest3.json",
    }),
  ];
  journals = [
    new CaptionImage({
      name: "journal1",
      page: 5,
      width: 443,
      height: 721,
    }),
    new CaptionImage({
      name: "npc1",
      page: 4,
      width: 491,
      height: 580,
    }),
    new CaptionImage({
      name: "npc2",
      page: 11,
      width: 675,
      height: 675,
    }),
    new CaptionImage({
      name: "npc3",
      page: 12,
      width: 601,
      height: 601,
    }),
    new CaptionImage({
      name: "npc4",
      page: 13,
      width: 601,
      height: 601,
    }),
  ];
  npcs = [];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Scenario #3-03" &&
        t.fontId === "GoodOT-Bold:15" &&
        t.page === 1,
    );
  }
  preprocess(text) {
    this.removeText(text, 3, 191.3017, 654.8302);
  }
  finalize(moduleData) {}
}
