import { BountyBase } from "./base.js";
import { AdventureImage } from "../../core/images.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class Bounty8 extends BountyBase {
  prefix = "bounty-8";
  fullName = "Bounty #8 - The Tireless Path";
  pages = [
    this.TwoColumnWithRightCutout(3, 280),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumnWithRightCutout(7, 0),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      canonical: {
        name: "flipmat-classic/deep-forest",
        priority: 0,
      },
      nameInfo: {
        x: 220.0771,
        y: 675,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3),
      page: 6,
      width: 1045,
      height: 1305,
      imageLeft: 36,
      imageRight: 1009,
      imageCols: 22,
      imageTop: 34,
      imageBottom: 1272,
      imageRows: 28,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/flipmats/maps/deep-forest.json",
      journals: [
        {
          x: 900,
          y: 1050,
          id: "NTozMTI6Njc1",
          text: "",
        },
      ],
      tokens: [
        {
          id: "npc1",
          x: 1500,
          y: 1300,
        },
        {
          id: "npc1",
          x: 1e3,
          y: 1700,
        },
        {
          id: "npc2",
          x: 800,
          y: 1900,
        },
      ],
    }),
  ];
  journals = [
    new AdventureImage({
      name: "journal1",
      page: 8,
      width: 472,
      height: 551,
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.trchDxbDR2TiPMxT",
      page: 7,
      width: 833,
      height: 1115,
      tokenX: -169,
      tokenY: 34,
      tokenSize: 443,
      forIds: ["NTozMTI6NDEx"],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.WioQ6rOeMRuTOliY",
      label: "ZB",
      forIds: ["NTozMTI6MjE5"],
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
          id: "MzozNTg6NTQ4",
        },
        {
          id: "Mzo3MjozOTk",
        },
        {
          id: "NDo3Mjo1MDc",
        },
        {
          id: "NTozMTI6Njc1",
        },
        {
          id: "Nzo3Mjo2MTU",
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
      source: "NzozNTI6NjY4",
      dest: "NTozMTI6Njc1",
    },
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "The Tireless Path" &&
        t.fontId === "HangingTree:40" &&
        t.page === 1,
    );
  }
  preprocess(text) {
    this.removeText(text, 3, 238.6509, 654.8302);
  }
  finalize(moduleData) {}
}
