import { PFSSeason2Base } from "./base.js";
import { CaptionImage } from "../../../core/images.js";
import { ModuleScene } from "../../../core/module-scene.js";

export class PFS2_15 extends PFSSeason2Base {
  prefix = "pfs-2-15";
  fullName = "PFS #2-15 - A Dirge for Sarkoris";
  pages = [
    this.TwoColumnWithRightCutout(3, 303),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumn(6),
    this.TwoColumn(8),
    this.TwoColumn(9),
    this.TwoColumn(11),
    this.TwoColumn(13),
    this.TwoColumn(14),
    this.TwoColumnWithRightCutout(15, 0, "appendix1"),
    this.TwoColumn(16, "appendix1"),
    this.TwoColumnWithRightCutout(17, 440, "appendix1"),
    this.TwoColumn(18, "appendix1"),
    this.TwoColumnWithRightCutout(19, 450, "appendix1"),
    this.TwoColumnWithRightCutout(20, 0, "appendix2"),
    this.TwoColumn(21, "appendix2"),
    this.TwoColumnWithRightCutout(22, 440, "appendix2"),
    this.TwoColumn(23, "appendix2"),
    this.TwoColumnWithRightCutout(24, 450, "appendix2"),
    this.OneColumn(27, "handout"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      canonical: {
        name: "flipmat/ambush1",
        priority: 0,
      },
      nameInfo: {
        x: 110.1779,
        y: 742.558,
      },
      nameFn: (name) => this.sentenceCase(name).substring(2).trim(),
      page: 7,
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
      name: "map2",
      canonical: {
        name: "flipmat/cavernous-lair1",
        priority: 0,
      },
      nameInfo: {
        x: 72,
        y: 678.9169,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
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
      name: "map3",
      canonical: {
        name: "flipmat/cavernous-lair2",
        priority: 0,
      },
      nameInfo: {
        x: 72,
        y: 678.9169,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 12,
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
      detailsFile: "/flipmats/maps/cavernous-lair1.json",
      journals: [
        {
          x: 1750,
          y: 3750,
          name: "C1.",
        },
        {
          x: 2650,
          y: 2650,
          name: "C2.",
        },
        {
          x: 1600,
          y: 3e3,
          name: "C3.",
        },
        {
          x: 2500,
          y: 1900,
          name: "C4.",
        },
        {
          x: 2500,
          y: 1200,
          name: "C5.",
        },
        {
          x: 950,
          y: 1200,
          name: "C6.",
        },
      ],
    }),
  ];
  journals = [
    new CaptionImage({
      name: "npc1",
      page: 4,
      width: 759,
      height: 981,
    }),
    new CaptionImage({
      name: "npc2",
      page: 5,
      width: 465,
      height: 434,
    }),
    new CaptionImage({
      name: "npc3",
      page: 6,
      width: 465,
      height: 469,
    }),
    new CaptionImage({
      name: "npc4",
      page: 8,
      width: 761,
      height: 1034,
    }),
    new CaptionImage({
      name: "npc5",
      page: 13,
      width: 759,
      height: 1110,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Scenario #2-15" &&
        t.fontId === "GoodOT-Bold:15" &&
        t.page === 1,
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    this.removeText(text, 3, 213.7313, 654.8302);
    this.changeFontId(text, 21, 247.0363, 363, "GoodOT-Bold:9");
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
