import { PFSSeason1Base } from "./base.js";
import { CaptionImage } from "../../../core/images.js";
import { ModuleScene } from "../../../core/module-scene.js";

export class PFS1_Q2 extends PFSSeason1Base {
  prefix = "pfs-q2";
  fullName = "PFS Q2 - Unforgiving Fire";
  pages = [
    this.TwoColumnWithRightCutout(3, 380),
    this.TwoColumn(4),
    this.TwoColumn(6),
    this.TwoColumn(7),
    this.TwoColumn(8),
    this.TwoColumn(9),
    this.TwoColumn(10),
    this.TwoColumnWithRightCutout(11, 0),
    this.TwoColumnWithLeftCutout(12, 550, "appendix1"),
    this.TwoColumnWithRightCutout(13, 545, "appendix1"),
    this.TwoColumn(14, "appendix2"),
    this.TwoColumn(15, "appendix2"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      nameInfo: {
        x: 58.5,
        y: 683.0726,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 5,
      width: 1337,
      height: 1070,
      rotateCW: 3,
      imageLeft: 0,
      imageTop: 0,
      imageRight: 1337,
      imageBottom: 1070,
      imageRows: 30,
      imageCols: 24,
      detailsFile: "/pfs/maps/pfs1-q2-map1.json",
      journals: [
        {
          x: 1800,
          y: 2300,
          id: "Njo3Mjo0MjM",
        },
        {
          x: 1750,
          y: 3150,
          id: "Njo3MjoyNzk",
        },
        {
          x: 1850,
          y: 1350,
          id: "Nzo3MjoyNTU",
        },
        {
          x: 2500,
          y: 2050,
          id: "OTo3Mjo1MDc",
        },
        {
          x: 1950,
          y: 3050,
          id: "Nzo3MjoxMjM",
        },
      ],
    }),
  ];
  journals = [
    new CaptionImage({
      name: "npc1",
      page: 4,
      width: 288,
      height: 288,
    }),
    new CaptionImage({
      name: "npc2",
      page: 16,
      width: 838,
      height: 1193,
    }),
    new CaptionImage({
      name: "journal1",
      page: 17,
      width: 1123,
      height: 1370,
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "PATHFINDER SOCIETY QUEST #2" &&
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
