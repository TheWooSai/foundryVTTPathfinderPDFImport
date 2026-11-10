import { PFSSeason3Base } from "./base.js";
import { CaptionImage } from "../../../core/images.js";
import { ModuleScene } from "../../../core/module-scene.js";

export class PFS3_02 extends PFSSeason3Base {
  prefix = "pfs-3-02";
  fullName = "PFS #3-02 - The East Hill Haunting";
  pages = [
    this.TwoColumnWithRightCutout(3, 360),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumn(6),
    this.TwoColumn(7),
    this.TwoColumn(9),
    this.TwoColumn(12),
    this.TwoColumn(13),
    this.TwoColumn(14),
    this.TwoColumnWithRightCutout(15, 490, "appendix1"),
    this.TwoColumnWithRightCutout(16, 0, "appendix1"),
    this.TwoColumnWithRightCutout(17, 510, "appendix1"),
    this.TwoColumnWithRightCutout(18, 0, "appendix1"),
    this.TwoColumnWithRightCutout(19, 0, "appendix1"),
    this.TwoColumn(20, "appendix1"),
    this.TwoColumnWithRightCutout(21, 490, "appendix2"),
    this.TwoColumnWithRightCutout(22, 0, "appendix2"),
    this.TwoColumnWithRightCutout(23, 500, "appendix2"),
    this.TwoColumnWithRightCutout(24, 0, "appendix2"),
    this.TwoColumnWithRightCutout(25, 0, "appendix2"),
    this.TwoColumn(26, "appendix2"),
    this.OneColumn(28, "handout"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      canonical: {
        name: "flipmat/ambush-sites3",
        priority: 0,
      },
      nameInfo: {
        x: 82,
        y: 675.5514,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 8,
      width: 1188,
      height: 957,
      imageLeft: 7,
      imageRight: 1179,
      imageCols: 24,
      imageTop: 10,
      imageBottom: 948,
      imageRows: 30,
      rotateCW: 3,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/flipmats/maps/ambush-sites3.json",
    }),
    new ModuleScene({
      name: "map2",
      canonical: {
        name: "flipmat/haunted-house1",
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
      imageLeft: 6,
      imageRight: 1178,
      imageCols: 24,
      imageTop: 10,
      imageBottom: 946,
      imageRows: 30,
      rotateCW: 3,
      offsetX: 1,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/flipmats/maps/haunted-house1.json",
      journals: [
        {
          x: 1500,
          y: 2300,
          name: "B1.",
        },
      ],
      tokens: [],
    }),
    new ModuleScene({
      name: "map3",
      canonical: {
        name: "flipmat/haunted-house2",
        priority: 0,
      },
      nameInfo: {
        x: 82,
        y: 675.5514,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 11,
      width: 1188,
      height: 957,
      imageLeft: 85,
      imageRight: 1061,
      imageCols: 25,
      imageTop: 128,
      imageBottom: 830,
      imageRows: 18,
      offsetX: 0,
      offsetY: 1,
      globalLight: true,
      detailsFile: "/flipmats/maps/haunted-house2.json",
      journals: [
        {
          x: 3100,
          y: 1800,
          name: "B2.",
        },
        {
          x: 3400,
          y: 2e3,
          name: "B3.",
        },
        {
          x: 1600,
          y: 1800,
          name: "B4.",
        },
      ],
      tokens: [],
    }),
  ];
  journals = [
    new CaptionImage({
      name: "journal1",
      page: 3,
      width: 418,
      height: 276,
    }),
    new CaptionImage({
      name: "npc1",
      page: 4,
      width: 390,
      height: 551,
    }),
    new CaptionImage({
      name: "npc2",
      page: 5,
      width: 682,
      height: 944,
    }),
    new CaptionImage({
      name: "npc3",
      page: 9,
      width: 473,
      height: 666,
    }),
    new CaptionImage({
      name: "npc4",
      page: 12,
      width: 601,
      height: 983,
    }),
  ];
  npcs = [];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Scenario #3-02" &&
        t.fontId === "GoodOT-Bold:15" &&
        t.page === 1,
    );
  }
  preprocess(text) {
    this.removeText(text, 3, 251.4707, 654.8302);
  }
  finalize(moduleData) {}
}
