import { PFSSeason1Base } from "./base.js";
import { AdventureImage, CaptionImage } from "../../../core/images.js";
import { ModuleScene } from "../../../core/module-scene.js";

export class PFS1_03 extends PFSSeason1Base {
  prefix = "pfs-1-03";
  fullName = "PFS #1-03 - Escaping the Grave";
  pages = [
    this.TwoColumnWithRightCutout(3, 340),
    this.TwoColumnWithLeftCutout(4, 340),
    this.TwoColumnWithRightCutout(5, 0),
    this.TwoColumn(6),
    this.TwoColumnWithRightCutout(7, 570),
    this.TwoColumnWithRightCutout(9, 475),
    this.TwoColumnWithLeftCutout(10, 560),
    this.TwoColumnWithLeftCutout(11, 280),
    this.TwoColumn(12),
    this.TwoColumn(13),
    this.TwoColumnWithMap(15, 365),
    this.TwoColumn(16),
    this.TwoColumn(17),
    this.TwoColumnWithRightCutout(18, 550),
    this.TwoColumn(19),
    this.TwoColumnWithRightCutout(20, 440),
    this.TwoColumn(21),
    this.OneColumn(22, "handout1"),
    this.OneColumn(23, "handout2"),
    this.OneColumn(24, "handout2"),
    this.OneColumn(25, "reference"),
    this.TwoColumn(26, "appendix1"),
    this.TwoColumn(27, "appendix1"),
    this.TwoColumn(28, "appendix1"),
    this.TwoColumn(29, "appendix1"),
    this.TwoColumn(30, "appendix2"),
    this.TwoColumn(31, "appendix2"),
    this.TwoColumn(32, "appendix2"),
    this.TwoColumn(33, "appendix2"),
  ];
  PageOneColumn = {
    X1: 87.5 - 9,
    X2: 600,
  };
  scenes = [
    new ModuleScene({
      name: "map1",
      nameInfo: {
        x: 57.75,
        y: 679.2999,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 8,
      width: 1048,
      height: 1300,
      imageLeft: 20,
      imageRight: 1028,
      imageCols: 24,
      imageTop: 21,
      imageBottom: 1280,
      imageRows: 30,
      rotateCW: 2,
      globalLight: true,
      detailsFile: "/pfs/maps/pfs1-03-map1.json",
      journals: [
        {
          x: 2150,
          y: 2350,
          id: "NzozMTI6MTU5",
        },
        {
          x: 1250,
          y: 1450,
          id: "MTA6MzEyOjIzMQ",
        },
        {
          x: 1950,
          y: 1250,
          id: "MTE6MzEyOjQ1OQ",
        },
        {
          x: 2850,
          y: 1550,
          id: "MTI6NzI6NjAz",
        },
        {
          x: 1050,
          y: 2450,
          id: "MTI6NzI6Mzk5",
        },
        {
          x: 1550,
          y: 3350,
          id: "MTI6NzI6MTcx",
        },
        {
          x: 2850,
          y: 3350,
          id: "MTM6NzI6NjAz",
        },
      ],
    }),
    new ModuleScene({
      name: "map2",
      nameInfo: {
        x: 56.88,
        y: 679.0363,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 14,
      width: 1301,
      height: 1045,
      imageLeft: 11,
      imageRight: 1289,
      imageCols: 24,
      imageTop: 12,
      imageBottom: 1033,
      imageRows: 30,
      rotateCW: 3,
      globalLight: true,
      detailsFile: "/pfs/maps/pfs1-03-map2.json",
      journals: [
        {
          x: 2250,
          y: 1850,
          id: "MTM6MzEyOjI0Mw",
        },
        {
          x: 2250,
          y: 2250,
          id: "MTU6NzI6MTEx",
        },
        {
          x: 1650,
          y: 2350,
          id: "MTU6MzEyOjI2Nw",
        },
        {
          x: 2250,
          y: 2750,
          id: "MTM6MzEyOjI0Mw",
        },
        {
          x: 1750,
          y: 1550,
          id: "MTY6NzI6NTY3",
        },
        {
          x: 1750,
          y: 2850,
          id: "MTY6MzEyOjYxNQ",
        },
        {
          x: 1750,
          y: 3150,
          id: "MTc6NzI6MjE5",
        },
        {
          x: 1050,
          y: 1550,
          id: "MTc6MzEyOjE1OQ",
        },
      ],
    }),
    new ModuleScene({
      name: "map3",
      nameInfo: {
        x: 56.88,
        y: 679.0363,
      },
      nameFn: (name) =>
        `${this.sentenceCase(name).substring(3).trim()} Upstairs`,
      page: 15,
      width: 662,
      height: 1045,
      imageLeft: 97,
      imageRight: 523,
      imageCols: 10,
      imageTop: 139,
      imageBottom: 907,
      imageRows: 18,
      globalLight: true,
      detailsFile: "/pfs/maps/pfs1-03-map3.json",
      journals: [
        {
          x: 850,
          y: 1950,
          id: "MTg6NzI6Njg3",
        },
        {
          x: 1550,
          y: 1850,
          id: "MTg6NzI6NTE5",
        },
        {
          x: 1450,
          y: 1150,
          id: "MTk6NzI6NDU5",
        },
        {
          x: 1450,
          y: 1450,
          id: "MTk6NzI6NDU5",
        },
        {
          x: 1450,
          y: 2350,
          id: "MTk6NzI6NDU5",
        },
        {
          x: 1450,
          y: 2650,
          id: "MTk6NzI6NDU5",
        },
      ],
    }),
  ];
  journals = [
    new AdventureImage({
      name: "journal1",
      page: 3,
      width: 911,
      height: 673,
    }),
    new CaptionImage({
      name: "npc1",
      page: 34,
      width: 1185,
      height: 1313,
    }),
    new CaptionImage({
      name: "npc2",
      page: 35,
      width: 1141,
      height: 1427,
    }),
    new CaptionImage({
      name: "npc3",
      page: 36,
      width: 1246,
      height: 1055,
    }),
    new CaptionImage({
      name: "npc4",
      page: 37,
      width: 1229,
      height: 1163,
    }),
    new CaptionImage({
      name: "npc5",
      page: 38,
      width: 1161,
      height: 1492,
    }),
    new CaptionImage({
      name: "npc6",
      page: 39,
      width: 1202,
      height: 1321,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "PATHFINDER SOCIETY SCENARIO #1\u201303" &&
        t.fontId === "GoodOT-CondBold:10" &&
        t.page === 1,
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    if (sectionKey === "") {
      text.shift();
      text.unshift(this.getFakeText("Adventure Summary", "GoodOT-Bold:12"));
    }
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
