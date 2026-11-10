import { PFSSeason1Base } from "./base.js";
import { CaptionImage } from "../../../core/images.js";
import { ModuleScene } from "../../../core/module-scene.js";

export class PFS1_05 extends PFSSeason1Base {
  prefix = "pfs-1-05";
  fullName = "PFS #1-05 - Trailblazer's Bounty";
  pages = [
    this.TwoColumnWithRightCutout(3, 500),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumn(6),
    this.TwoColumn(7),
    this.TwoColumn(9),
    this.TwoColumn(10),
    this.TwoColumn(12),
    this.TwoColumn(15),
    this.TwoColumn(17),
    this.TwoColumn(18),
    this.TwoColumn(19, "appendix1"),
    this.TwoColumnWithLeftCutout(20, 550, "appendix2-a1"),
    this.TwoColumnWithRightCutout(21, 550, "appendix2-a2"),
    this.TwoColumn(22, "appendix2-b1"),
    this.TwoColumn(23, "appendix2-b2"),
    this.TwoColumn(24, "appendix2-c1"),
    this.TwoColumn(25, "appendix2-c2"),
    this.TwoColumn(26, "appendix2-d1"),
    this.TwoColumnWithRightCutout(27, 580, "appendix2-d2"),
    this.TwoColumn(28, "appendix2-e1"),
    this.TwoColumn(29, "appendix5-e2"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      canonical: {
        name: "flipmat/falls-and-rapids",
        priority: 0,
      },
      nameInfo: {
        x: 374.2314,
        y: 82.9903,
      },
      page: 8,
      width: 1313,
      height: 1051,
      rotateCW: 1,
      imageLeft: 0,
      imageTop: 0,
      imageRight: 1313,
      imageBottom: 1051,
      imageRows: 30,
      imageCols: 24,
      globalLight: true,
      journals: [
        {
          x: 750,
          y: 2550,
          name: "A.",
        },
      ],
    }),
    new ModuleScene({
      name: "map2",
      nameInfo: {
        x: 79.6,
        y: 671.4,
      },
      nameFn: (name) => name.substring(3).trim(),
      page: 11,
      width: 975,
      height: 1300,
      imageLeft: 30,
      imageTop: 26,
      imageRight: 963,
      imageBottom: 1271,
      imageRows: 40,
      imageCols: 30,
      globalLight: true,
      journals: [
        {
          x: 1500,
          y: 2050,
          name: "B.",
        },
      ],
    }),
    new ModuleScene({
      name: "map3",
      canonical: {
        name: "flipmat-classic/swamp",
        priority: 0,
      },
      nameInfo: {
        x: 369.9744,
        y: 83.2838,
      },
      page: 13,
      width: 978,
      height: 1301,
      imageLeft: 10,
      imageTop: 13,
      imageRight: 945,
      imageBottom: 1288,
      imageRows: 30,
      imageCols: 22,
      globalLight: true,
      journals: [
        {
          x: 1050,
          y: 3250,
          name: "C.",
        },
      ],
    }),
    new ModuleScene({
      name: "map4",
      canonical: {
        name: "flipmat-classic/swamp2",
        priority: 0,
      },
      nameInfo: {
        x: 369.4937,
        y: 82.4518,
      },
      page: 14,
      width: 1042,
      height: 1302,
      rotateCW: 2,
      imageLeft: 11,
      imageTop: 14,
      imageRight: 1031,
      imageBottom: 1289,
      imageRows: 30,
      imageCols: 24,
      globalLight: true,
      detailsFile: "/flipmats/maps/swamp2.json",
      journals: [
        {
          x: 2400,
          y: 900,
          name: "D.",
        },
      ],
    }),
    new ModuleScene({
      name: "map5",
      canonical: {
        name: "flipmat/wicked-dungeon",
        priority: 0,
      },
      nameInfo: {
        x: 367.1612,
        y: 82.4518,
      },
      page: 16,
      width: 1300,
      height: 1045,
      rotateCW: 3,
      imageLeft: 11,
      imageTop: 14,
      imageRight: 1031,
      imageBottom: 1289,
      imageRows: 24,
      imageCols: 30,
      detailsFile: "/flipmats/maps/wicked-dungeon.json",
      journals: [
        {
          x: 2950,
          y: 2050,
          name: "E1.",
        },
        {
          x: 2650,
          y: 1350,
          name: "E2.",
        },
        {
          x: 1950,
          y: 1650,
          name: "E3.",
        },
        {
          x: 1750,
          y: 2650,
          name: "E4.",
        },
      ],
    }),
  ];
  journals = [
    new CaptionImage({
      name: "journal1",
      page: 30,
      width: 600,
      height: 600,
    }),
    new CaptionImage({
      name: "journal2",
      page: 31,
      width: 600,
      height: 600,
    }),
    new CaptionImage({
      name: "journal3",
      page: 32,
      width: 600,
      height: 600,
    }),
    new CaptionImage({
      name: "journal4",
      page: 33,
      width: 975,
      height: 1378,
    }),
    new CaptionImage({
      name: "journal5",
      page: 34,
      width: 1066,
      height: 1449,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "PATHFINDER SOCIETY SCENARIO #1\u201305" &&
        t.fontId === "GoodOT-CondBold:10" &&
        t.page === 1,
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    const i = text.findIndex(
      (x) => x.fontId === "GoodOT-Bold:12" && x.text === "T",
    );
    if (i !== -1) {
      text.splice(i, 1);
      text[i].text = `T${text[i].text}`;
    }
    if (sectionKey === "") {
      text.shift();
      text.unshift(this.getFakeText("Adventure Summary", "GoodOT-Bold:12"));
    }
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
