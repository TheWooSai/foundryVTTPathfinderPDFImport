import { PFSSeason2Base } from "./base.js";
import { AdventureImage, CaptionImage } from "../../../core/images.js";
import { ModuleScene } from "../../../core/module-scene.js";

export class PFS2_24 extends PFSSeason2Base {
  prefix = "pfs-2-24";
  fullName = "PFS #2-24 - Breaking the Storm: Parting Clouds";
  pages = [
    this.TwoColumnWithRightCutout(3, 320),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumn(6),
    this.TwoColumn(7),
    this.TwoColumn(8),
    this.TwoColumn(10),
    this.TwoColumnWithMap(11, 360),
    this.TwoColumn(12),
    this.TwoColumn(13),
    this.TwoColumnWithRightCutout(14, 460, "appendix1"),
    this.TwoColumnWithRightCutout(15, 540, "appendix1"),
    this.TwoColumnWithRightCutout(16, 420, "appendix1"),
    this.TwoColumnWithRightCutout(17, 0, "appendix1"),
    this.TwoColumnWithRightCutout(18, 460, "appendix2"),
    this.TwoColumnWithRightCutout(19, 500, "appendix2"),
    this.TwoColumnWithRightCutout(20, 420, "appendix2"),
    this.TwoColumnWithRightCutout(21, 0, "appendix2"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      canonical: {
        name: "flipmat/bigger-forest",
        priority: 0,
      },
      nameInfo: {
        x: 85.5,
        y: 679.7139,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 9,
      width: 1300,
      height: 929,
      imageLeft: 7,
      imageRight: 1292,
      imageCols: 27,
      imageTop: 9,
      imageBottom: 920,
      imageRows: 38,
      rotateCW: 3,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/flipmats/maps/bigger-forest.json",
    }),
    new ModuleScene({
      name: "map2",
      canonical: {
        name: "pfs2-24/map2",
        priority: 0,
      },
      nameInfo: {
        x: 68,
        y: 679.7139,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 11,
      width: 1013,
      height: 675,
      imageLeft: 28,
      imageRight: 990,
      imageCols: 34,
      imageTop: 32,
      imageBottom: 656,
      imageRows: 22,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
    }),
  ];
  journals = [
    new CaptionImage({
      name: "journal1",
      page: 3,
      width: 403,
      height: 503,
    }),
    new CaptionImage({
      name: "npc1",
      page: 12,
      width: 921,
      height: 614,
    }),
    new AdventureImage({
      name: "npc2",
      page: 22,
      width: 211,
      height: 608,
    }),
    new AdventureImage({
      name: "npc3",
      page: 22,
      width: 427,
      height: 584,
    }),
    new AdventureImage({
      name: "npc4",
      page: 22,
      width: 633,
      height: 674,
    }),
    new AdventureImage({
      name: "npc5",
      page: 22,
      width: 599,
      height: 680,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Scenario #2-24" &&
        t.fontId === "GoodOT-Bold:15" &&
        t.page === 1,
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    this.removeText(text, 3, 227.6313, 654.8302);
    for (let i = 0; i < text.length; i++) {
      (text[i].fontName === "JubileeMedium" ||
        text[i].fontName === "JubileeLight") &&
        text[i].fontSize < 6 &&
        text.splice(i--, 1);
    }
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
