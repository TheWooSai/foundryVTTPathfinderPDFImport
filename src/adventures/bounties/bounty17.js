import { BountyBase } from "./base.js";
import { LabelImage } from "../../core/images.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class Bounty17 extends BountyBase {
  prefix = "bounty-17";
  fullName = "Bounty #17 - Sodden Stories";
  pages = [
    this.TwoColumnWithRightCutout(3, 280),
    this.TwoColumnWithLeftCutout(4, 540),
    this.TwoColumn(5),
    this.TwoColumnWithRightCutout(6, 540),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      canonical: {
        name: "flipmat/jungle1",
        priority: 0,
      },
      nameInfo: {
        x: 72,
        y: 668.9006,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 7,
      width: 1001,
      height: 1251,
      imageLeft: 0,
      imageRight: 1001,
      imageCols: 24,
      imageTop: 0,
      imageBottom: 1251,
      imageRows: 30,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/flipmats/maps/jungle1.json",
    }),
  ];
  journals = [
    new LabelImage({
      name: "journal1",
      page: 8,
      width: 424,
      height: 519,
      label: "ODoxMDU6NDE3",
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.umiKZDfhNO3mXvEb",
      label: "AGL",
      forIds: ["Njo3MjozMDM"],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 5,
        x: 255.4511,
        y: 85.975,
      },
      page: 5,
      width: 589,
      height: 904,
      tokenX: -87,
      tokenY: 78,
      tokenSize: 400,
      forIds: [],
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
          id: "Mzo3MjoyNTU",
        },
        {
          id: "NDo3MjoxNDc",
        },
        {
          id: "Njo3Mjo2NzU",
        },
        {
          id: "NjozMTI6NDk1",
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
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Sodden Stories" &&
        t.fontId === "HangingTree:40" &&
        t.page === 1,
    );
  }
  preprocess(text) {
    this.removeText(text, 3, 246.0308, 654.8302);
  }
  finalize(moduleData) {
    this.prependJournal(moduleData, "NjozNTg6NjY4", "Njo3Mjo2NzU");
    this.prependJournal(moduleData, "MzozNTg6NTQ4", "Mzo3Mjo1NTU");
    this.prependJournal(moduleData, "NDoxMDk6NjY4", "Mzo3MjoyNTU");
  }
}
