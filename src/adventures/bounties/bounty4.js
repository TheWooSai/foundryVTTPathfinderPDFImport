import { BountyBase } from "./base.js";
import { CaptionImage } from "../../core/images.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class Bounty4 extends BountyBase {
  prefix = "bounty-4";
  fullName = "Bounty #4 - Cat's Cradle";
  pages = [
    this.TwoColumnWithRightCutout(3, 310),
    this.TwoColumnWithLeftCutout(4, 600),
    this.TwoColumnWithLeftCutout(6, 550),
    this.TwoColumnWithRightCutout(7, 520),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      nameInfo: {
        x: 71.5192,
        y: 666.9414,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 5,
      width: 1061,
      height: 1325,
      imageLeft: 8,
      imageRight: 1051,
      imageCols: 24,
      imageTop: 10,
      imageBottom: 1313,
      imageRows: 30,
      globalLight: true,
      journals: [],
      tokens: [
        {
          id: "npc1",
          x: 2100,
          y: 1900,
        },
        {
          id: "npc1",
          x: 2300,
          y: 2e3,
        },
      ],
    }),
  ];
  journals = [
    new CaptionImage({
      name: "journal1",
      page: 8,
      width: 530,
      height: 530,
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.m40M5R7wcm5DSVK2",
      page: 4,
      width: 978,
      height: 864,
      tokenX: -281,
      tokenY: -186,
      tokenSize: 418,
      forIds: ["NDozMTI6NjAz"],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.rdgs2gxTWxkyanD6",
      page: 6,
      width: 890,
      height: 799,
      tokenX: -29,
      tokenY: 61,
      tokenSize: 442,
      forIds: [],
    }),
  ];
  journalPages = [
    {
      name: "Bounty #4 - Cat's Cradle",
      pages: [
        {
          id: "Mzo3Mjo1Njc",
        },
        {
          id: "MzozNTg6NTQ4",
        },
        {
          id: "Mzo3MjoyMTk",
        },
        {
          id: "NDo3Mjo0OTU",
        },
        {
          id: "NDozMTI6Mzg3",
        },
        {
          id: "NzozMTI6NDIz",
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
      source: "NDoxMTg6NjY4",
      dest: "NDo3Mjo0OTU",
    },
    {
      source: "Njo5Nzo2NzQ",
      dest: "NDozMTI6Mzg3",
    },
    {
      source: "NzozNTY6Njc0",
      dest: "NDozMTI6Mzg3",
    },
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Cat\u2019s Cradle" &&
        t.fontId === "HangingTree:40" &&
        t.page === 1,
    );
  }
  finalize(moduleData) {}
}
