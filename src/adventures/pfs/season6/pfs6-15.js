import { PFSAutoLayoutBase } from "../auto-layout-base.js";
import { LabelImage } from "../../../core/images.js";
import { ModuleScene } from "../../../core/module-scene.js";

/** Drafted by tools/draft-pfs-scenario.mjs. Creatures come from the PDF's stat blocks. */
export class PFS6_15 extends PFSAutoLayoutBase {
  prefix = "pfs-6-15";
  fullName = "PFS #6-15 - Lost and Forgotten";
  scenes = [
    new ModuleScene({
      name: "map1",
      // Grid refit by hand at 31.89 px: the drafting tool measured twice the printed spacing.
      page: 13,
      width: 1029,
      height: 830,
      imageLeft: 31,
      imageRight: 1020,
      imageCols: 31,
      imageTop: 1,
      imageBottom: 798,
      imageRows: 25,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      nameInfo: { x: 111.5, y: 674.726 },
      nameFn: (name) => this.sentenceCase(name),
    }),
    new ModuleScene({
      name: "map2",
      page: 19,
      width: 663,
      height: 1063,
      imageLeft: 36,
      imageRight: 656,
      imageCols: 14,
      imageTop: 42,
      imageBottom: 1060,
      imageRows: 23,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      nameInfo: { x: 64.5, y: 675.226 },
      nameFn: (name) => this.sentenceCase(name),
    }),
    new ModuleScene({
      name: "map3",
      page: 30,
      width: 957,
      height: 951,
      imageLeft: 7,
      imageRight: 940,
      imageCols: 24,
      imageTop: 9,
      imageBottom: 942,
      imageRows: 24,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      nameInfo: { x: 169.5522, y: 381.0862 },
      nameFn: (name) => this.sentenceCase(name),
    }),
  ];
  journals = [];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.page === 1 && /^Scenario #\s*6\s*[–-]\s*0?15$/.test(t.text.trim()),
    );
  }
}
