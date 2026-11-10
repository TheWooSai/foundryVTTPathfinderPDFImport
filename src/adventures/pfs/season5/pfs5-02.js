import { PFSAutoLayoutBase } from "../auto-layout-base.js";
import { LabelImage } from "../../../core/images.js";
import { ModuleScene } from "../../../core/module-scene.js";

/** Drafted by tools/draft-pfs-scenario.mjs. Creatures come from the PDF's stat blocks. */
export class PFS5_02 extends PFSAutoLayoutBase {
  prefix = "pfs-5-02";
  fullName = "PFS #5-02 - The Blackwood Lost";
  scenes = [
    new ModuleScene({
      name: "map1",
      page: 19,
      width: 1314,
      height: 1057,
      imageLeft: 44,
      imageRight: 1310,
      imageCols: 29,
      imageTop: 3,
      imageBottom: 1051,
      imageRows: 24,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      nameInfo: { x: 59.5, y: 679.5 },
      nameFn: (name) => this.sentenceCase(name),
    }),
  ];
  journals = [];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.page === 1 && /^Scenario #\s*5\s*[–-]\s*0?2$/.test(t.text.trim()),
    );
  }
}
