import { PFSAutoLayoutBase } from "../auto-layout-base.js";
import { LabelImage } from "../../../core/images.js";
import { ModuleScene } from "../../../core/module-scene.js";

/** Drafted by tools/draft-pfs-scenario.mjs. Creatures come from the PDF's stat blocks. */
export class PFS4_07 extends PFSAutoLayoutBase {
  prefix = "pfs-4-07";
  fullName = "PFS #4-07 - A Most Wondrous Exchange!";
  scenes = [
    new ModuleScene({
      name: "map1",
      page: 9,
      width: 1175,
      height: 944,
      imageLeft: 7,
      imageRight: 1163,
      imageCols: 30,
      imageTop: 8,
      imageBottom: 933,
      imageRows: 24,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      nameInfo: { x: 82, y: 675.5514 },
      nameFn: (name) => this.sentenceCase(name),
    }),
    new ModuleScene({
      name: "map2",
      page: 15,
      width: 1175,
      height: 944,
      imageLeft: 7,
      imageRight: 1163,
      imageCols: 30,
      imageTop: 8,
      imageBottom: 933,
      imageRows: 24,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      nameInfo: { x: 82, y: 675.5514 },
      nameFn: (name) => this.sentenceCase(name),
    }),
    new ModuleScene({
      name: "map3",
      page: 19,
      width: 1175,
      height: 944,
      imageLeft: 8,
      imageRight: 1164,
      imageCols: 30,
      imageTop: 8,
      imageBottom: 933,
      imageRows: 24,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      nameInfo: { x: 82, y: 675.5514 },
      nameFn: (name) => this.sentenceCase(name),
    }),
  ];
  journals = [
    new LabelImage({
      name: "codebreaker-s-parchment",
      page: 40,
      width: 446,
      height: 594,
      label: "NDA6OTI6Mzc1",
    }),
    new LabelImage({
      name: "shadow-shrouded-phylactery",
      page: 41,
      width: 539,
      height: 757,
      label: "NDE6Mzg2OjM3NQ",
    }),
    new LabelImage({
      name: "erikanesh",
      page: 42,
      width: 539,
      height: 757,
      label: "NDI6MTM1OjM3NQ",
    }),
    new LabelImage({
      name: "abysium-sword",
      page: 43,
      width: 668,
      height: 669,
      label: "NDM6MTIwOjM3NQ",
    }),
    new LabelImage({
      name: "tesyovensku",
      page: 43,
      width: 495,
      height: 660,
      label: "NDM6NDMyOjM3NQ",
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.page === 1 && /^Scenario #\s*4\s*[–-]\s*0?7$/.test(t.text.trim()),
    );
  }
}
