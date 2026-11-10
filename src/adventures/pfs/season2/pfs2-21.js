import { PFSSeason2Base } from "./base.js";
import { AdventureImage, CaptionImage } from "../../../core/images.js";
import { ModuleScene, ModuleSceneTiled } from "../../../core/module-scene.js";

export class PFS2_21 extends PFSSeason2Base {
  prefix = "pfs-2-21";
  fullName = "PFS #2-21 - In Pursuit of Water";
  pages = [
    this.TwoColumnWithRightCutout(3, 300),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumn(6),
    this.TwoColumnWithLeftCutout(8, 400),
    this.TwoColumnWithRightCutout(9, 500),
    this.TwoColumn(10),
    this.TwoColumn(11),
    this.TwoColumn(13),
    this.TwoColumn(15),
    this.TwoColumn(16),
    this.TwoColumnWithRightCutout(17, 500, "appendix1"),
    this.TwoColumnWithRightCutout(18, 0, "appendix1"),
    this.TwoColumnWithRightCutout(19, 500, "appendix1"),
    this.TwoColumn(20, "appendix1"),
    this.TwoColumnWithRightCutout(21, 500, "appendix1"),
    this.TwoColumn(22, "appendix1"),
    this.TwoColumnWithRightCutout(23, 0, "appendix2"),
    this.TwoColumnWithRightCutout(24, 0, "appendix2"),
    this.TwoColumn(25, "appendix2"),
    this.TwoColumnWithRightCutout(26, 440, "appendix2"),
    this.TwoColumn(26, "appendix2"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      canonical: {
        name: "flipmat-classic/desert",
        priority: 0,
      },
      nameInfo: {
        x: 60,
        y: 677.9169,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 7,
      width: 1045,
      height: 1305,
      imageLeft: 46,
      imageRight: 999,
      imageCols: 22,
      imageTop: 48,
      imageBottom: 1259,
      imageRows: 28,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/flipmats/maps/desert.json",
    }),
    new ModuleSceneTiled({
      name: "map2",
      nameInfo: {
        x: 43.5,
        y: 677.9169,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 12,
      width: 375,
      height: 375,
      imageLeft: 0,
      imageRight: 375,
      imageCols: 6,
      imageTop: 0,
      imageBottom: 375,
      imageRows: 6,
      numTileCols: 3,
      numTileRows: 3,
      fillColor: "#000",
      tileRotations: [
        [0, 0, 0],
        [2, 2, 3],
        [1, 0, 0],
      ],
      tilePositions: [
        [1, 0],
        [1, 1],
        [1, 2],
        [0, 1],
        [0, 2],
        [2, 1],
        [2, 2],
      ],
    }),
    new ModuleSceneTiled({
      name: "map3",
      nameInfo: {
        x: 39.5,
        y: 677.9169,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 14,
      width: 375,
      height: 375,
      imageLeft: 0,
      imageRight: 375,
      imageCols: 6,
      imageTop: 0,
      imageBottom: 375,
      imageRows: 6,
      numTileCols: 3,
      numTileRows: 3,
      fillColor: "#000",
      tileRotations: [
        [1, 0, 2],
        [2, 0, 0],
        [0, 2, 3],
      ],
      tilePositions: [
        [1, 0],
        [1, 1],
        [1, 2],
        [0, 0],
        [0, 1],
        [0, 2],
        [2, 0],
        [2, 1],
        [2, 2],
      ],
    }),
  ];
  journals = [
    new CaptionImage({
      name: "journal1",
      page: 3,
      width: 928,
      height: 718,
    }),
    new AdventureImage({
      name: "npc1",
      page: 8,
      width: 943,
      height: 1104,
    }),
    new AdventureImage({
      name: "npc2",
      page: 15,
      width: 881,
      height: 1431,
    }),
    new AdventureImage({
      name: "npc3",
      page: 28,
      width: 535,
      height: 536,
    }),
    new AdventureImage({
      name: "npc4",
      page: 28,
      width: 533,
      height: 519,
    }),
    new AdventureImage({
      name: "npc5",
      page: 28,
      width: 618,
      height: 771,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Scenario #2-21" &&
        t.fontId === "GoodOT-Bold:15" &&
        t.page === 1,
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    this.removeText(text, 3, 254.4405, 654.8302);
    for (let i = 0; i < text.length; i++) {
      text[i].text === "\xD7" &&
        text[i].fontId === "GoodOT-CondBold:9" &&
        ((text[i].fontName = "GoodOT"), (text[i].fontId = "GoodOT:9"));
    }
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
