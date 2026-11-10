import { BountyBase } from "./base.js";
import { CaptionImage } from "../../core/images.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class Bounty15 extends BountyBase {
  prefix = "bounty-15";
  fullName = "Bounty #15 - Treasure off the Coast";
  pages = [
    this.TwoColumnWithRightCutout(3, 310),
    this.TwoColumn(4),
    this.TwoColumnWithRightCutout(5, 590),
    this.TwoColumn(6),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      canonical: {
        name: "flipmat/shipwrecks1",
        priority: 0,
      },
      nameInfo: {
        x: 54.7891,
        y: 682.9006,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 7,
      width: 1068,
      height: 1327,
      imageLeft: 12,
      imageRight: 1057,
      imageCols: 24,
      imageTop: 11,
      imageBottom: 1318,
      imageRows: 30,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/flipmats/maps/shipwrecks1.json",
    }),
  ];
  journals = [
    new CaptionImage({
      name: "journal1",
      page: 8,
      width: 412,
      height: 503,
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.sC4B1pjGrKFXhjOQ",
      page: 5,
      width: 712,
      height: 805,
      tokenX: -30,
      tokenY: 66,
      tokenSize: 581,
      forIds: ["NTo3MjozMjc"],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.ChuQ39tv0plbsfVJ",
      page: 6,
      width: 729,
      height: 827,
      tokenX: -205,
      tokenY: -92,
      tokenSize: 379,
      forIds: ["Njo3Mjo2ODc"],
    }),
  ];
  journalPages = [
    {
      name: "Adventure Content",
      pages: [
        {
          id: "Mzo3Mjo1NTU",
        },
        {
          id: "Mzo3MjoyMzE",
        },
        {
          id: "NDo3MjoyMDc",
        },
        {
          id: "NDozMTI6NDU5",
        },
        {
          id: "NTo3Mjo2ODc",
        },
        {
          id: "Njo3MjoxMzU",
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
  combines = [];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Treasure off the Coast" &&
        t.fontId === "HangingTree:40" &&
        t.page === 1,
    );
  }
  preprocess(text) {
    this.removeText(text, 3, 246.0308, 654.8302);
    this.changeFontId(text, 4, 312.066, 459, "HangingTree:18");
    this.changeFontId(text, 5, 72.0649, 687, "HangingTree:18");
    this.changeFontId(text, 5, 83.4789, 687, "HangingTree:18");
    this.changeFontId(text, 5, 175.9069, 687, "HangingTree:18");
    this.changeFontId(text, 5, 237.1614, 687, "HangingTree:18");
    this.changeTextFn(text, 5, 175.9069, 687, (t) => `${t} `);
  }
  finalize(moduleData) {
    this.prependJournal(moduleData, "NTozNTg6Njgw", "NTo3Mjo2ODc");
    this.prependJournal(moduleData, "MzozNTg6NTYw", "Mzo3Mjo1NTU");
  }
}
