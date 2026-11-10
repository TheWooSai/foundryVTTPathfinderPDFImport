import { PFSAutoLayoutBase } from "../auto-layout-base.js";
import { LabelImage } from "../../../core/images.js";
import { ModuleScene } from "../../../core/module-scene.js";

/** Drafted by tools/draft-pfs-scenario.mjs. Creatures come from the PDF's stat blocks. */
export class PFS5_14 extends PFSAutoLayoutBase {
  prefix = "pfs-5-14";
  fullName = "PFS #5-14 - Poisonous Council";
  scenes = [
    new ModuleScene({
      name: "map1",
      page: 7,
      width: 1305,
      height: 1049,
      imageLeft: 41,
      imageRight: 1267,
      imageCols: 28,
      imageTop: 41,
      imageBottom: 1048,
      imageRows: 23,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      nameInfo: { x: 72.95, y: 678.4286 },
      nameFn: (name) => this.sentenceCase(name),
    }),
    new ModuleScene({
      name: "map2",
      page: 13,
      width: 1045,
      height: 1295,
      imageLeft: 19,
      imageRight: 1022,
      imageCols: 24,
      imageTop: 19,
      imageBottom: 1273,
      imageRows: 30,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      nameInfo: { x: 72.95, y: 678.4286 },
      nameFn: (name) => this.sentenceCase(name),
    }),
    new ModuleScene({
      name: "map3",
      page: 19,
      width: 1301,
      height: 1045,
      imageLeft: 12,
      imageRight: 1292,
      imageCols: 30,
      imageTop: 9,
      imageBottom: 1033,
      imageRows: 24,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      nameInfo: { x: 72.95, y: 678.4286 },
      nameFn: (name) => this.sentenceCase(name),
    }),
  ];
  journals = [
    new LabelImage({
      name: "handout-1-gorm-greathammer-s-letter",
      page: 42,
      width: 962,
      height: 431,
      label: "NDI6MTE3OjY2Mw",
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.page === 1 && /^Scenario #\s*5\s*[–-]\s*0?14$/.test(t.text.trim()),
    );
  }
}
