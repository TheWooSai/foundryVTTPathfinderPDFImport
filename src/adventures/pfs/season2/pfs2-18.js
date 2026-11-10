import { PFSSeason2Base } from "./base.js";
import { CaptionImage } from "../../../core/images.js";
import { ModuleScene } from "../../../core/module-scene.js";

export class PFS2_18 extends PFSSeason2Base {
  prefix = "pfs-2-18";
  fullName = "PFS #2-18 - The Fanciful March of Urwal";
  pages = [
    this.TwoColumnWithRightCutout(3, 310),
    this.TwoColumnWithLeftCutout(4, 400),
    this.TwoColumn(5),
    this.TwoColumn(6),
    this.TwoColumn(7),
    this.TwoColumn(9),
    this.TwoColumn(11),
    this.TwoColumn(12),
    this.TwoColumn(13),
    this.TwoColumn(15),
    this.TwoColumn(16),
    this.TwoColumnWithRightCutout(17, 500, "appendix1"),
    this.TwoColumn(18, "appendix1"),
    this.TwoColumnWithRightCutout(19, 500, "appendix1"),
    this.TwoColumn(20, "appendix1"),
    this.TwoColumnWithRightCutout(21, 460, "appendix1"),
    this.TwoColumnWithRightCutout(22, 500, "appendix2"),
    this.TwoColumn(23, "appendix2"),
    this.TwoColumnWithRightCutout(24, 500, "appendix2"),
    this.TwoColumn(25, "appendix2"),
    this.TwoColumnWithRightCutout(26, 460, "appendix2"),
    this.OneColumn(29, "handout"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      canonical: {
        name: "flipmat-classic/forest",
        priority: 0,
      },
      nameInfo: {
        x: 72,
        y: 688.9169,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3),
      page: 8,
      width: 1041,
      height: 1301,
      imageLeft: 9,
      imageRight: 1032,
      imageCols: 24,
      imageTop: 12,
      imageBottom: 1288,
      imageRows: 30,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/flipmats/maps/forest.json",
    }),
    new ModuleScene({
      name: "map2",
      canonical: {
        name: "flipmat/forest-fire",
        priority: 0,
      },
      nameInfo: {
        x: 72,
        y: 688.9169,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3),
      page: 10,
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
      detailsFile: "/flipmats/maps/forest-fire.json",
    }),
    new ModuleScene({
      name: "map3",
      canonical: {
        name: "flipmat/mythos-dungeon",
        priority: 0,
      },
      nameInfo: {
        x: 72,
        y: 688.9169,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3),
      page: 14,
      width: 1041,
      height: 1301,
      imageLeft: 0,
      imageRight: 1041,
      imageCols: 24,
      imageTop: 0,
      imageBottom: 1301,
      imageRows: 30,
      offsetX: -1,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/flipmats/maps/mythos-dungeon.json",
    }),
  ];
  journals = [
    new CaptionImage({
      name: "npc1",
      page: 5,
      width: 944,
      height: 760,
    }),
    new CaptionImage({
      name: "npc2",
      page: 6,
      width: 448,
      height: 448,
    }),
    new CaptionImage({
      name: "npc3",
      page: 9,
      width: 941,
      height: 1121,
    }),
    new CaptionImage({
      name: "npc4",
      page: 11,
      width: 945,
      height: 1054,
    }),
    new CaptionImage({
      name: "npc5",
      page: 13,
      width: 1020,
      height: 856,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Scenario #2-18" &&
        t.fontId === "GoodOT-Bold:15" &&
        t.page === 1,
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    this.removeText(text, 3, 222.6311, 654.8302);
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
