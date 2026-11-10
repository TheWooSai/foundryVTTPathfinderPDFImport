import { PFSAutoLayoutBase } from "../auto-layout-base.js";
import { LabelImage } from "../../../core/images.js";
import { ModuleScene } from "../../../core/module-scene.js";

/** Drafted by tools/draft-pfs-scenario.mjs. Creatures come from the PDF's stat blocks. */
export class PFS7_05 extends PFSAutoLayoutBase {
  prefix = "pfs-7-05";
  fullName = "PFS #7-05 - Battle of the Thorns";
  scenes = [
    new ModuleScene({
      name: "map1",
      page: 11,
      width: 1355,
      height: 1088,
      imageLeft: 6,
      imageRight: 1352,
      imageCols: 30,
      imageTop: 4,
      imageBottom: 1081,
      imageRows: 24,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      nameInfo: { x: 52.2956, y: 673.5 },
      nameFn: (name) => this.sentenceCase(name),
    }),
    new ModuleScene({
      name: "map2",
      page: 12,
      width: 1355,
      height: 1088,
      imageLeft: 2,
      imageRight: 1348,
      imageCols: 30,
      imageTop: 9,
      imageBottom: 1086,
      imageRows: 24,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      nameInfo: { x: 52.2956, y: 673.5 },
      nameFn: (name) => this.sentenceCase(name),
    }),
  ];
  journals = [];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.page === 1 && /^Scenario #\s*7\s*[–-]\s*0?5$/.test(t.text.trim()),
    );
  }
}
