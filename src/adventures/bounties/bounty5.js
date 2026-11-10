import { BountyBase } from "./base.js";
import { CaptionImage } from "../../core/images.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class Bounty5 extends BountyBase {
  prefix = "bounty-5";
  fullName = "Bounty #5 - Witch's Winter Holiday";
  pages = [
    this.TwoColumnWithRightCutout(3, 310),
    this.TwoColumnWithLeftCutout(4, 190),
    this.TwoColumnWithRightCutout(5, 390),
    this.TwoColumn(6),
    this.TwoColumnWithLeftCutout(8, 550),
    this.TwoColumn(9),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      nameInfo: {
        x: 71.5192,
        y: 668.9414,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 7,
      width: 1061,
      height: 1326,
      imageLeft: 0,
      imageRight: 1061,
      imageCols: 24,
      imageTop: 0,
      imageBottom: 1326,
      imageRows: 30,
      globalLight: true,
    }),
  ];
  journals = [
    new CaptionImage({
      name: "journal1",
      page: 10,
      width: 468,
      height: 535,
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid: "Compendium.pf2e.pfs-season-2-bestiary.Actor.Kklhv0OWqkb6RbIF",
      page: 8,
      width: 824,
      height: 877,
      tokenX: 27,
      tokenY: 0,
      tokenSize: 877,
      forIds: ["ODozMTI6Mzk5"],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.SjTv1ayVrguLsnTX",
      page: 6,
      width: 575,
      height: 769,
      tokenX: 38,
      tokenY: 106,
      tokenSize: 657,
      forIds: [],
    }),
  ];
  journalPages = [
    {
      name: "Adventure Content",
      pages: [
        {
          id: "Mzo3Mjo1Njc",
        },
        {
          id: "MzozNTg6NTQ4",
        },
        {
          id: "Mzo3MjoxMzU",
        },
        {
          id: "NDoxMjg6Njc0",
        },
        {
          id: "NDozMTI6NDM1",
        },
        {
          id: "NjozMTI6MzUx",
        },
        {
          id: "OTo3Mjo2NzU",
        },
        {
          id: "NTozMjU6Njc0",
        },
      ],
    },
    {
      name: "Handouts",
      pages: [
        {
          id: "journal1",
          name: "Wanted Poster",
        },
      ],
    },
  ];
  combines = [
    {
      source: "ODo4Nzo2Njg",
      dest: "NjozMTI6MzUx",
    },
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Witch\u2019s Winter Holiday" &&
        t.fontId === "HangingTree:40" &&
        t.page === 1,
    );
  }
  preprocess(text) {
    this.removeText(text, 3, 242.9209, 654.8302);
  }
  finalize(moduleData) {}
}
