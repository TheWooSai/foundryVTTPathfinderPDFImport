import { PFSSeason2Base } from "./base.js";
import { AdventureImage } from "../../../core/images.js";
import { ModuleScene } from "../../../core/module-scene.js";

export class PFS2_14 extends PFSSeason2Base {
  prefix = "pfs-2-14";
  fullName = "PFS #2-14 - Lost in Flames";
  subheadingFontIds = this.subheadingFontIds.concat(["GoodOT-CondBold:12"]);
  pages = [
    this.TwoColumnWithRightCutout(3, 310),
    this.TwoColumn(4),
    this.TwoColumnWithRightCutout(5, 480),
    this.TwoColumnWithMap(6, 330),
    this.TwoColumnWithRightCutout(7, 260),
    this.TwoColumn(9),
    this.TwoColumn(11),
    this.TwoColumn(12),
    this.TwoColumn(14),
    this.TwoColumnWithRightCutout(15, 0, "appendix1"),
    this.TwoColumnWithRightCutout(16, 480, "appendix1"),
    this.TwoColumnWithRightCutout(17, 500, "appendix1"),
    this.TwoColumnWithRightCutout(18, 0, "appendix2"),
    this.TwoColumnWithRightCutout(19, 480, "appendix2"),
    this.TwoColumn(20, "appendix2"),
    this.TwoColumnWithRightCutout(21, 500, "appendix2"),
    this.TwoColumn(22, "appendix2"),
    this.OneColumn(25, "handout"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      canonical: {
        name: "pfs2-14/map1",
        priority: 0,
      },
      nameInfo: {
        x: 72,
        y: 686.3508,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 6,
      width: 1124,
      height: 750,
      imageLeft: 66,
      imageRight: 1026,
      imageCols: 8,
      imageTop: 139,
      imageBottom: 693,
      imageRows: 4,
      offsetX: 0,
      offsetY: 0,
      gridType: "hex",
      gridDistance: 12,
      gridUnits: "mi",
      globalLight: true,
      detailsFile: "/pfs/maps/pfs2-14-map1.json",
    }),
    new ModuleScene({
      name: "map2",
      canonical: {
        name: "flipmat/ambush-sites1",
        priority: 0,
      },
      nameInfo: {
        x: 72,
        y: 678.9169,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3),
      page: 8,
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
      detailsFile: "/flipmats/maps/ambush-sites1.json",
    }),
    new ModuleScene({
      name: "map3",
      canonical: {
        name: "flipmat/forest-fire",
        priority: 0,
      },
      nameInfo: {
        x: 72,
        y: 678.9169,
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
    }),
    new ModuleScene({
      name: "map4",
      canonical: {
        name: "flipmat/ambush-sites2",
        priority: 0,
      },
      nameInfo: {
        x: 72,
        y: 678.9169,
      },
      nameFn: (name) => this.sentenceCase(name).substring(13),
      page: 13,
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
      detailsFile: "/flipmats/maps/ambush-sites2.json",
    }),
  ];
  journals = [
    new AdventureImage({
      name: "npc1",
      page: 4,
      width: 492,
      height: 492,
    }),
    new AdventureImage({
      name: "npc2",
      page: 4,
      width: 492,
      height: 492,
      index: 1,
    }),
    new AdventureImage({
      name: "npc3",
      page: 11,
      width: 890,
      height: 784,
    }),
    new AdventureImage({
      name: "npc4",
      page: 23,
      width: 661,
      height: 787,
    }),
    new AdventureImage({
      name: "npc5",
      page: 24,
      width: 601,
      height: 978,
    }),
    new AdventureImage({
      name: "npc6",
      page: 24,
      width: 589,
      height: 786,
    }),
    new AdventureImage({
      name: "npc7",
      page: 24,
      width: 653,
      height: 665,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Scenario #2-14" &&
        t.fontId === "GoodOT-Bold:15" &&
        t.page === 1,
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    this.removeText(text, 3, 237.5109, 654.8302);
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
