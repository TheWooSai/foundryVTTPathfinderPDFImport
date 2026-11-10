import { PFSSeason1Base } from "./base.js";
import { AdventureImage, CaptionImage } from "../../../core/images.js";
import { ModuleScene } from "../../../core/module-scene.js";

export class PFS1_15 extends PFSSeason1Base {
  prefix = "pfs-1-15";
  fullName = "PFS #1-15 - The Blooming Catastrophe";
  pages = [
    this.TwoColumnWithRightCutout(3, 360),
    this.TwoColumnWithLeftCutout(4, 460),
    this.TwoColumn(5),
    this.TwoColumn(6),
    this.TwoColumn(7),
    this.TwoColumn(9),
    this.TwoColumn(10),
    this.TwoColumnWithLeftCutout(11, 560),
    this.TwoColumn(13),
    this.TwoColumnWithMap(14, 330),
    this.TwoColumn(15),
    this.TwoColumn(16),
    this.TwoColumn(17),
    this.TwoColumn(18),
    this.TwoColumn(19, "appendix1"),
    this.TwoColumn(20, "appendix1"),
    this.TwoColumnWithRightCutout(21, 0, "appendix1"),
    this.TwoColumnWithRightCutout(22, 550, "appendix1"),
    this.TwoColumn(23, "appendix1"),
    this.TwoColumnWithRightCutout(24, 560, "appendix2"),
    this.TwoColumn(25, "appendix2"),
    this.TwoColumnWithRightCutout(26, 580, "appendix2"),
    this.TwoColumnWithRightCutout(27, 520, "appendix2"),
    this.TwoColumn(28, "appendix2"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      nameInfo: {
        x: 72,
        y: 675,
      },
      nameFn: (name) => this.sentenceCase(name).substr(3),
      page: 8,
      width: 1305,
      height: 1048,
      imageLeft: 10,
      imageRight: 1294,
      imageCols: 24,
      imageTop: 10,
      imageBottom: 1037,
      imageRows: 30,
      rotateCW: 3,
      globalLight: true,
    }),
    new ModuleScene({
      name: "map2",
      nameInfo: {
        x: 72,
        y: 675,
      },
      nameFn: (name) => this.sentenceCase(name).substr(3),
      page: 12,
      width: 1305,
      height: 1049,
      imageLeft: 10,
      imageRight: 1294,
      imageCols: 24,
      imageTop: 10,
      imageBottom: 1038,
      imageRows: 30,
      rotateCW: 3,
      globalLight: true,
    }),
    new ModuleScene({
      name: "map3",
      nameInfo: {
        x: 43.9282,
        y: 675,
      },
      nameFn: (name) => this.sentenceCase(name).substr(3),
      page: 14,
      width: 1105,
      height: 744,
      imageLeft: 39,
      imageRight: 1068,
      imageCols: 22,
      imageTop: 20,
      imageBottom: 720,
      imageRows: 15,
      globalLight: true,
    }),
  ];
  journals = [
    new AdventureImage({
      name: "journal1",
      page: 3,
      width: 437,
      height: 299,
    }),
    new CaptionImage({
      name: "npc1",
      page: 29,
      width: 1238,
      height: 1259,
    }),
    new CaptionImage({
      name: "npc2",
      page: 30,
      width: 1022,
      height: 1322,
    }),
    new CaptionImage({
      name: "npc3",
      page: 31,
      width: 1261,
      height: 1303,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "PATHFINDER SOCIETY SCENARIO #1\u201315" &&
        t.fontId === "GoodOT-CondBold:10" &&
        t.page === 1,
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    for (const i in text) {
      const t = text[i];
      if ((t.page === 21 || t.page === 26) && t.fontId === "GoodOT:8.5") {
        text[i].fontId = "GoodOT:9";
      }
    }
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
