import { PFSSeason2Base } from "./base.js";
import { CaptionImage } from "../../../core/images.js";
import { ModuleScene } from "../../../core/module-scene.js";

export class PFS2_17 extends PFSSeason2Base {
  prefix = "pfs-2-17";
  fullName = "PFS #2-17 - Lost Maid of Anactoria";
  pages = [
    this.TwoColumnWithRightCutout(3, 310),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumnWithLeftCutout(6, 400),
    this.TwoColumn(7),
    this.TwoColumn(8),
    this.TwoColumn(9),
    this.TwoColumn(10),
    this.TwoColumn(12),
    this.TwoColumn(13),
    this.TwoColumn(14),
    this.TwoColumn(16),
    this.TwoColumn(18),
    this.TwoColumnWithRightCutout(19, 480, "appendix1"),
    this.TwoColumnWithRightCutout(20, 0, "appendix1"),
    this.TwoColumnWithRightCutout(21, 0, "appendix1"),
    this.TwoColumnWithRightCutout(22, 480, "appendix2"),
    this.TwoColumnWithRightCutout(23, 0, "appendix2"),
    this.TwoColumnWithRightCutout(24, 490, "appendix2"),
    this.OneColumn(27, "handout"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      canonical: {
        name: "flipmat-classic/woodlands",
        priority: 0,
      },
      nameInfo: {
        x: 72,
        y: 688.9169,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3),
      page: 11,
      width: 1041,
      height: 1301,
      imageLeft: 12,
      imageRight: 1031,
      imageCols: 24,
      imageTop: 14,
      imageBottom: 1287,
      imageRows: 30,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/flipmats/maps/woodlands.json",
    }),
    new ModuleScene({
      name: "map2",
      canonical: {
        name: "flipmat-classic/swamp",
        priority: 0,
      },
      nameInfo: {
        x: 72,
        y: 688.9169,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3),
      page: 15,
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
      detailsFile: "/flipmats/maps/swamp.json",
    }),
    new ModuleScene({
      name: "map3",
      canonical: {
        name: "flipmat-classic/swamp2",
        priority: 1,
      },
      nameInfo: {
        x: 72,
        y: 688.9169,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3),
      page: 17,
      width: 1041,
      height: 1299,
      imageLeft: 0,
      imageRight: 1041,
      imageCols: 24,
      imageTop: 0,
      imageBottom: 1299,
      imageRows: 30,
      offsetX: -1,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/flipmats/maps/swamp2.json",
    }),
  ];
  journals = [
    new CaptionImage({
      name: "journal1",
      page: 3,
      width: 927,
      height: 670,
    }),
    new CaptionImage({
      name: "npc1",
      page: 4,
      width: 857,
      height: 1109,
    }),
    new CaptionImage({
      name: "npc2",
      page: 5,
      width: 489,
      height: 489,
    }),
    new CaptionImage({
      name: "npc3",
      page: 8,
      width: 489,
      height: 489,
    }),
    new CaptionImage({
      name: "npc4",
      page: 12,
      width: 840,
      height: 1253,
    }),
    new CaptionImage({
      name: "npc5",
      page: 14,
      width: 696,
      height: 1091,
    }),
    new CaptionImage({
      name: "npc6",
      page: 16,
      width: 489,
      height: 489,
    }),
    new CaptionImage({
      name: "npc7",
      page: 18,
      width: 678,
      height: 1017,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Scenario #2-17" &&
        t.fontId === "GoodOT-Bold:15" &&
        t.page === 1,
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    this.removeText(text, 3, 243.3907, 654.8302);
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
