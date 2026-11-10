import { PFSAutoLayoutBase } from "../auto-layout-base.js";
import { LabelImage } from "../../../core/images.js";
import { ModuleScene } from "../../../core/module-scene.js";

/** Drafted by tools/draft-pfs-scenario.mjs. Creatures come from the PDF's stat blocks. */
export class PFS7_03 extends PFSAutoLayoutBase {
  prefix = "pfs-7-03";
  fullName = "PFS #7-03 - A Foot in the Door";
  scenes = [
    new ModuleScene({
      name: "map1",
      page: 7,
      width: 1355,
      height: 953,
      imageLeft: 34,
      imageRight: 1351,
      imageCols: 38,
      imageTop: 7,
      imageBottom: 943,
      imageRows: 27,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      nameInfo: { x: 84.2956, y: 673.5 },
      nameFn: (name) => this.sentenceCase(name),
    }),
    new ModuleScene({
      name: "map2",
      page: 11,
      width: 1355,
      height: 1088,
      imageLeft: 5,
      imageRight: 1351,
      imageCols: 30,
      imageTop: 6,
      imageBottom: 1083,
      imageRows: 24,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      nameInfo: { x: 52.2956, y: 673.5 },
      nameFn: (name) => this.sentenceCase(name),
    }),
    new ModuleScene({
      name: "map3",
      page: 13,
      width: 1355,
      height: 1088,
      imageLeft: 5,
      imageRight: 1351,
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
      name: "map4",
      page: 17,
      width: 1355,
      height: 953,
      imageLeft: 3,
      imageRight: 1354,
      imageCols: 39,
      imageTop: 10,
      imageBottom: 946,
      imageRows: 27,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      nameInfo: { x: 85.2956, y: 673.5 },
      nameFn: (name) => this.sentenceCase(name),
    }),
  ];
  journals = [];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.page === 1 && /^Scenario #\s*7\s*[–-]\s*0?3$/.test(t.text.trim()),
    );
  }
}
