import { PFSAutoLayoutBase } from "../auto-layout-base.js";
import { LabelImage } from "../../../core/images.js";
import { ModuleScene } from "../../../core/module-scene.js";

/** Drafted by tools/draft-pfs-scenario.mjs. Creatures come from the PDF's stat blocks. */
export class PFS5_20 extends PFSAutoLayoutBase {
  prefix = "pfs-5-20";
  fullName = "PFS #5-20 - The Rakshasa’s Court";
  scenes = [
    new ModuleScene({
      name: "map1",
      page: 6,
      width: 1300,
      height: 906,
      imageLeft: 9,
      imageRight: 1294,
      imageCols: 39,
      imageTop: 10,
      imageBottom: 899,
      imageRows: 27,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      nameInfo: { x: 95.95, y: 675.4286 },
      nameFn: (name) => this.sentenceCase(name),
    }),
    new ModuleScene({
      name: "map2",
      page: 9,
      width: 1301,
      height: 1045,
      imageLeft: 8,
      imageRight: 1288,
      imageCols: 30,
      imageTop: 9,
      imageBottom: 1033,
      imageRows: 24,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      nameInfo: { x: 62.95, y: 675.4286 },
      nameFn: (name) => this.sentenceCase(name),
    }),
  ];
  journals = [];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.page === 1 && /^Scenario #\s*5\s*[–-]\s*0?20$/.test(t.text.trim()),
    );
  }
}
