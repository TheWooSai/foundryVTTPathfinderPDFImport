import { PFSSeason1Base } from "./base.js";
import { CaptionImage } from "../../../core/images.js";
import { ModuleScene } from "../../../core/module-scene.js";

export class PFS1_07 extends PFSSeason1Base {
  prefix = "pfs-1-07";
  fullName = "PFS #1-07 - Flooded Kings Court";
  pages = [
    this.TwoColumnWithRightCutout(3, 380),
    this.TwoColumn(4),
    this.TwoColumnWithMap(5, 291),
    this.TwoColumnWithLeftCutout(6, 510),
    this.TwoColumn(7),
    this.TwoColumn(8),
    this.TwoColumn(10),
    this.TwoColumn(11),
    this.TwoColumn(13),
    this.TwoColumn(14),
    this.TwoColumn(15),
    this.TwoColumn(16),
    this.TwoColumnWithRightCutout(20, 520, "appendix2"),
    this.TwoColumnWithRightCutout(21, 540, "appendix2"),
    this.TwoColumnWithRightCutout(22, 540, "appendix2"),
    this.TwoColumnWithRightCutout(23, 520, "appendix2"),
    this.TwoColumn(24, "appendix2"),
    this.TwoColumnWithRightCutout(25, 440, "appendix3"),
    this.TwoColumnWithRightCutout(26, 500, "appendix3"),
    this.TwoColumnWithRightCutout(27, 510, "appendix3"),
    this.TwoColumnWithRightCutout(28, 490, "appendix3"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      nameInfo: {
        x: 90.125,
        y: 675.0001,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 9,
      width: 1300,
      height: 906,
      imageLeft: 10,
      imageRight: 1292,
      imageCols: 25,
      imageTop: 8,
      imageBottom: 833,
      imageRows: 39,
      rotateCW: 1,
      globalLight: true,
      detailsFile: "/flipmats/maps/bigger-sewer.json",
      journals: [
        {
          x: 2950,
          y: 4250,
          name: "B1.",
        },
        {
          x: 2350,
          y: 3550,
          name: "B2.",
        },
        {
          x: 3050,
          y: 2750,
          name: "B3.",
        },
        {
          x: 1850,
          y: 4450,
          name: "B4.",
        },
        {
          x: 1050,
          y: 1450,
          name: "B5.",
        },
      ],
    }),
    new ModuleScene({
      name: "map2",
      nameInfo: {
        x: 60,
        y: 681.2501,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 12,
      width: 1302,
      height: 1042,
      imageLeft: 44,
      imageRight: 1214,
      imageCols: 22,
      imageTop: 46,
      imageBottom: 999,
      imageRows: 27,
      rotateCW: 3,
      globalLight: true,
      detailsFile: "/flipmats/maps/mythos-dungeon.json",
      journals: [
        {
          x: 2350,
          y: 2350,
          name: "C1.",
        },
        {
          x: 1550,
          y: 1650,
          name: "C2.",
        },
        {
          x: 2750,
          y: 1100,
          name: "C3.",
        },
        {
          x: 950,
          y: 3050,
          name: "C4.",
        },
      ],
    }),
  ];
  journals = [
    new CaptionImage({
      name: "npc1",
      page: 29,
      width: 1258,
      height: 839,
    }),
    new CaptionImage({
      name: "npc2",
      page: 30,
      width: 1200,
      height: 1200,
    }),
    new CaptionImage({
      name: "npc3",
      page: 31,
      width: 1465,
      height: 1836,
    }),
    new CaptionImage({
      name: "npc4",
      page: 32,
      width: 1167,
      height: 1055,
    }),
    new CaptionImage({
      name: "npc5",
      page: 33,
      width: 1058,
      height: 1305,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "PATHFINDER SOCIETY SCENARIO #1\u201307" &&
        t.fontId === "GoodOT-CondBold:10" &&
        t.page === 1,
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    this.changeFontId(text, 3, 72, 663, "GoodOT-Bold:12");
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
