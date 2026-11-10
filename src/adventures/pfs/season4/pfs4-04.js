import { PFSAutoLayoutBase } from "../auto-layout-base.js";
import { LabelImage } from "../../../core/images.js";
import { ModuleScene } from "../../../core/module-scene.js";

/** Drafted by tools/draft-pfs-scenario.mjs. Creatures come from the PDF's stat blocks. */
export class PFS4_04 extends PFSAutoLayoutBase {
  prefix = "pfs-4-04";
  fullName = "PFS #4-04 - To Seek the Heart of Calamity";
  scenes = [
    new ModuleScene({
      name: "map1",
      page: 9,
      width: 1330,
      height: 1068,
      imageLeft: 41,
      imageRight: 1292,
      imageCols: 28,
      imageTop: 44,
      imageBottom: 1027,
      imageRows: 22,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      nameInfo: { x: 60.5, y: 684.5787 },
      nameFn: (name) => this.sentenceCase(name),
    }),
    new ModuleScene({
      name: "map2",
      page: 13,
      width: 1330,
      height: 1068,
      imageLeft: 41,
      imageRight: 1292,
      imageCols: 28,
      imageTop: 44,
      imageBottom: 1027,
      imageRows: 22,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      nameInfo: { x: 60.5, y: 684.5787 },
      nameFn: (name) => this.sentenceCase(name),
    }),
    new ModuleScene({
      name: "map3",
      page: 15,
      width: 1330,
      height: 1068,
      imageLeft: 3,
      imageRight: 1321,
      imageCols: 30,
      imageTop: 5,
      imageBottom: 1060,
      imageRows: 24,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      nameInfo: { x: 60.5, y: 684.5787 },
      nameFn: (name) => this.sentenceCase(name),
    }),
  ];
  journals = [
    new LabelImage({
      name: "eando-kline",
      page: 28,
      width: 411,
      height: 562,
      label: "Mjg6NDMwOjM5Ng",
    }),
    new LabelImage({
      name: "thuvian-merchant",
      page: 29,
      width: 481,
      height: 641,
      label: "Mjk6MTEyOjM3NQ",
    }),
    new LabelImage({
      name: "pack-camel",
      page: 29,
      width: 706,
      height: 601,
      label: "Mjk6NDMyOjM5Ng",
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.page === 1 && /^Scenario #\s*4\s*[–-]\s*0?4$/.test(t.text.trim()),
    );
  }
}
