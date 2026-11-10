import { PFSAutoLayoutBase } from "../auto-layout-base.js";
import { LabelImage } from "../../../core/images.js";
import { ModuleScene } from "../../../core/module-scene.js";

/** Drafted by tools/draft-pfs-scenario.mjs. Creatures come from the PDF's stat blocks. */
export class PFS4_16 extends PFSAutoLayoutBase {
  prefix = "pfs-4-16";
  fullName = "PFS #4-16 - Dacilane Academy’s First Great Prank War";
  scenes = [
    new ModuleScene({
      name: "map1",
      // Grid refit by hand at 40.18 px: the drafting tool could not measure this map.
      page: 5,
      width: 1065,
      height: 1420,
      imageLeft: 3,
      imageRight: 1047,
      imageCols: 26,
      imageTop: 20,
      imageBottom: 1386,
      imageRows: 34,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      nameInfo: { x: 54, y: 691.0346 },
      nameFn: (name) => this.sentenceCase(name),
    }),
  ];
  journals = [
    new LabelImage({
      name: "duaro",
      page: 35,
      width: 515,
      height: 344,
      label: "MzU6MTQzOjM3NQ",
    }),
    new LabelImage({
      name: "hari",
      page: 36,
      width: 515,
      height: 344,
      label: "MzY6MTQ5OjM3NQ",
    }),
    new LabelImage({
      name: "domovoi",
      page: 36,
      width: 529,
      height: 684,
      label: "MzY6NDM5OjM3NQ",
    }),
    new LabelImage({
      name: "vim-moneymaker",
      page: 36,
      width: 495,
      height: 594,
      label: "MzY6NDE2OjM5Ng",
    }),
    new LabelImage({
      name: "lurker-in-light",
      page: 37,
      width: 515,
      height: 344,
      label: "Mzc6MTIwOjM3NQ",
    }),
    new LabelImage({
      name: "giant-opossum",
      page: 37,
      width: 544,
      height: 770,
      label: "Mzc6NDIxOjM3NQ",
    }),
    new LabelImage({
      name: "numblekin",
      page: 38,
      width: 515,
      height: 344,
      label: "Mzg6MTMxOjM3NQ",
    }),
    new LabelImage({
      name: "twigjack",
      page: 38,
      width: 645,
      height: 645,
      label: "Mzg6NDQxOjM5Ng",
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.page === 1 && /^Scenario #\s*4\s*[–-]\s*0?16$/.test(t.text.trim()),
    );
  }
}
