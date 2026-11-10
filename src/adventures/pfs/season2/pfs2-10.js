import { PFSSeason2Base } from "./base.js";
import { AdventureImage, CaptionImage } from "../../../core/images.js";
import { ModuleScene } from "../../../core/module-scene.js";

export class PFS2_10 extends PFSSeason2Base {
  prefix = "pfs-2-10";
  fullName = "PFS #2-10 - In Burning Dawn";
  normalFontIds = this.normalFontIds.concat("BergellPlain:9");
  pages = [
    this.TwoColumnWithRightCutout(3, 425),
    this.TwoColumn(4),
    this.TwoColumn(6),
    this.TwoColumnWithRightCutout(7, 490),
    this.TwoColumn(8),
    this.TwoColumn(9),
    this.TwoColumnWithLeftCutout(10, 320),
    this.TwoColumnWithRightCutout(11, 560),
    this.TwoColumn(12),
    this.TwoColumn(14),
    this.TwoColumnWithRightCutout(16, 560),
    this.TwoColumnWithRightCutout(17, 460, "appendix1"),
    this.TwoColumnWithRightCutout(18, 0, "appendix1"),
    this.TwoColumnWithRightCutout(19, 0, "appendix1"),
    this.TwoColumnWithRightCutout(20, 460, "appendix1"),
    this.TwoColumnWithRightCutout(21, 460, "appendix2"),
    this.TwoColumnWithRightCutout(22, 0, "appendix2"),
    this.TwoColumnWithRightCutout(23, 0, "appendix2"),
    this.TwoColumnWithRightCutout(24, 480, "appendix2"),
    this.OneColumn(27, "handout1"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      nameInfo: {
        x: 57.5,
        y: 686.3508,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 5,
      width: 1064,
      height: 1328,
      imageLeft: 0,
      imageRight: 1064,
      imageCols: 24,
      imageTop: 0,
      imageBottom: 1328,
      imageRows: 30,
      globalLight: true,
    }),
    new ModuleScene({
      name: "map2",
      nameInfo: {
        x: 57.5,
        y: 686.3508,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 13,
      width: 1064,
      height: 1328,
      imageLeft: 0,
      imageRight: 1064,
      imageCols: 24,
      imageTop: 0,
      imageBottom: 1328,
      imageRows: 30,
      globalLight: true,
    }),
    new ModuleScene({
      name: "map3",
      nameInfo: {
        x: 55.225,
        y: 686.3508,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 15,
      width: 1064,
      height: 1328,
      imageLeft: 0,
      imageRight: 1064,
      imageCols: 24,
      imageTop: 0,
      imageBottom: 1328,
      imageRows: 30,
      globalLight: true,
    }),
  ];
  journals = [
    new CaptionImage({
      name: "npc1",
      page: 4,
      width: 470,
      height: 470,
    }),
    new CaptionImage({
      name: "npc2",
      page: 8,
      width: 768,
      height: 1138,
    }),
    new CaptionImage({
      name: "npc3",
      page: 9,
      width: 766,
      height: 1242,
    }),
    new CaptionImage({
      name: "npc4",
      page: 14,
      width: 752,
      height: 1064,
    }),
    new AdventureImage({
      name: "npc5",
      page: 25,
      width: 672,
      height: 727,
    }),
    new AdventureImage({
      name: "npc6",
      page: 26,
      width: 634,
      height: 807,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Scenario #2-10" &&
        t.fontId === "GoodOT-Bold:15" &&
        t.page === 1,
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    this.removeText(text, 3, 233.2607, 654.8302);
    this.changeFontId(text, 27, 197.6423, 685.2574, "FMBolyar:13");
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
