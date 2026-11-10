import { PFSAutoLayoutBase } from "../auto-layout-base.js";
import { LabelImage } from "../../../core/images.js";
import { ModuleScene } from "../../../core/module-scene.js";

/** Drafted by tools/draft-pfs-scenario.mjs. Creatures come from the PDF's stat blocks. */
export class PFS5_19 extends PFSAutoLayoutBase {
  prefix = "pfs-5-19";
  fullName = "PFS #5-19 - Demonic Afterparty";
  scenes = [
    new ModuleScene({
      name: "map1",
      page: 7,
      width: 1204,
      height: 961,
      imageLeft: 4,
      imageRight: 1195,
      imageCols: 30,
      imageTop: 7,
      imageBottom: 960,
      imageRows: 24,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      nameInfo: { x: 78.75, y: 679.5 },
      nameFn: (name) => this.sentenceCase(name),
    }),
  ];
  journals = [];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.page === 1 && /^Scenario #\s*5\s*[–-]\s*0?19$/.test(t.text.trim()),
    );
  }
}
