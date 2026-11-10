import { PFSSeason1Base } from "./base.js";
import { CaptionImage } from "../../../core/images.js";
import { ModuleScene, ModuleSceneTiled } from "../../../core/module-scene.js";

export class PFS1_02 extends PFSSeason1Base {
  prefix = "pfs-1-02";
  fullName = "PFS #1-02 - The Mosquito Witch";
  pages = [
    this.TwoColumnWithRightCutout(3, 340),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumn(6),
    this.TwoColumn(7),
    this.TwoColumn(9),
    this.TwoColumn(10),
    this.TwoColumn(11),
    this.TwoColumn(12),
    this.TwoColumnWithRightCutout(13, 440),
    this.TwoColumn(14),
    this.TwoColumnWithRightCutout(15, 545),
    this.TwoColumnWithMap(16, 219),
    this.TwoColumnWithRightCutout(17, 560),
    this.TwoColumnWithLeftCutout(19, 460),
    this.TwoColumn(20, "appendix 1"),
    this.TwoColumn(21, "appendix 1"),
    this.TwoColumn(22, "appendix 2"),
    this.TwoColumn(23, "appendix 2"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      nameInfo: {
        x: 92.88,
        y: 678.8557,
      },
      nameFn: (name) => this.sentenceCase(name).substr(3),
      page: 8,
      width: 1300,
      height: 906,
      imageLeft: 9,
      imageRight: 1292,
      imageCols: 27,
      imageTop: 9,
      imageBottom: 898,
      imageRows: 39,
      globalLight: true,
      rotateCW: 1,
      journals: [
        {
          x: 1050,
          y: 3650,
          name: "A1.",
        },
        {
          x: 1850,
          y: 3250,
          name: "A2.",
        },
        {
          x: 1350,
          y: 2550,
          name: "A3.",
        },
        {
          x: 1050,
          y: 1850,
          name: "A4.",
        },
        {
          x: 1650,
          y: 1550,
          name: "A5.",
        },
        {
          x: 2550,
          y: 1850,
          name: "A6.",
        },
        {
          x: 2950,
          y: 2650,
          name: "A7.",
        },
        {
          x: 2750,
          y: 3350,
          name: "A8.",
        },
        {
          x: 3050,
          y: 4050,
          name: "A9.",
        },
        {
          x: 2950,
          y: 4650,
          name: "A10.",
        },
        {
          x: 2550,
          y: 4650,
          name: "A11.",
        },
      ],
    }),
    new ModuleSceneTiled({
      name: "map2",
      nameInfo: {
        x: 77.5,
        y: 679.0363,
      },
      nameFn: (name) => this.sentenceCase(name).substr(3),
      page: 16,
      width: 484,
      height: 480,
      imageLeft: 20,
      imageRight: 465,
      imageCols: 6,
      imageTop: 19,
      imageBottom: 460,
      imageRows: 6,
      numTileCols: 2,
      numTileRows: 2,
      tileRotations: [
        [0, 0],
        [0, 0],
      ],
      tilePositions: [
        [0, 0],
        [1, 0],
        [0, 1],
        [1, 1],
      ],
    }),
    new ModuleScene({
      name: "map3",
      nameInfo: {
        x: 55.5,
        y: 679.0363,
      },
      nameFn: (name) => this.sentenceCase(name).substr(3),
      page: 18,
      width: 1045,
      height: 1301,
      imageLeft: 10,
      imageRight: 1034,
      imageCols: 24,
      imageTop: 10,
      imageBottom: 1290,
      imageRows: 30,
      offsetX: 1,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/flipmats/maps/cavernous-lair1.json",
    }),
  ];
  journals = [
    new CaptionImage({
      name: "npc1",
      page: 24,
      width: 1046,
      height: 1224,
    }),
    new CaptionImage({
      name: "npc2",
      page: 25,
      width: 1275,
      height: 1650,
    }),
    new CaptionImage({
      name: "npc3",
      page: 26,
      width: 1221,
      height: 1623,
    }),
    new CaptionImage({
      name: "npc4",
      page: 27,
      width: 1350,
      height: 1650,
    }),
    new CaptionImage({
      name: "npc5",
      page: 28,
      width: 1232,
      height: 1221,
    }),
    new CaptionImage({
      name: "npc6",
      page: 29,
      width: 1044,
      height: 1210,
    }),
    new CaptionImage({
      name: "npc7",
      page: 30,
      width: 1100,
      height: 1556,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "PATHFINDER SOCIETY SCENARIO #1\u201302" &&
        t.fontId === "GoodOT-CondBold:10" &&
        t.page === 1,
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    for (let i = 0; i < text.length; i++) {
      [7, 9].includes(text[i].page) &&
        text[i].fontId === "SabonLTStd-Bold:9" &&
        text[i].text.startsWith("A") &&
        ((text[i].fontId = "GoodOT-Bold:12"),
        (text[i].fontName = "GoodOT-Bold"),
        (text[i].fontSize = 12));
    }
    if (sectionKey === "") {
      text.shift();
      text.unshift(this.getFakeText("Adventure Summary", "GoodOT-Bold:12"));
    }
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
