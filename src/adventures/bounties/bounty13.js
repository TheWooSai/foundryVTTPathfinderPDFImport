import { BountyBase } from "./base.js";
import { CaptionImage } from "../../core/images.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class Bounty13 extends BountyBase {
  prefix = "bounty-13";
  fullName = "Bounty #13 - The Blackwood Abundance";
  pages = [
    this.TwoColumnWithRightCutout(3, 120),
    this.TwoColumn(4),
    this.TwoColumn(6),
    this.TwoColumnWithRightCutout(7, 550),
    this.TwoColumn(8),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      canonical: {
        name: "bounty13/map1",
        priority: 0,
      },
      nameInfo: {
        x: 116.88,
        y: 680,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 5,
      width: 824,
      height: 1315,
      imageLeft: 57,
      imageRight: 760,
      imageCols: 13,
      imageTop: 12,
      imageBottom: 1307,
      imageRows: 24,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/bounty/maps/bounty13-map1.json",
      journals: [
        {
          x: 1250,
          y: 2050,
          name: "A1.",
        },
        {
          x: 650,
          y: 2750,
          name: "A2.",
        },
        {
          x: 1150,
          y: 1050,
          name: "A3.",
        },
      ],
      tokens: [],
    }),
  ];
  journals = [
    new CaptionImage({
      name: "journal1",
      page: 9,
      width: 449,
      height: 531,
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.V8w4iOwUMPqYnqVE",
      name: {
        page: 6,
        x: 279.7556,
        y: 356.925,
      },
      page: 6,
      width: 450,
      height: 551,
      tokenX: 61,
      tokenY: 154,
      tokenSize: 607,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.Y3wRpLSDZsYcigjX",
      label: "GB",
      forIds: ["NzozMTI6NDQ3"],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.PFB61dvUsakciV0N",
      label: "SM",
      forIds: ["NzozMTI6MTgz"],
    }),
    new ModuleNpc({
      id: "npc4",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.1uVwkGlqYzyWaDMy",
      label: "V",
      forIds: ["Nzo3MjoyNDM"],
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
          id: "Mzo3MjoyMzE",
        },
        {
          id: "NDozMTI6NDk1",
        },
        {
          id: "NDozMTI6Mjc5",
        },
        {
          id: "Njo0MDI6Mzc1",
        },
        {
          id: "Nzo3Mjo1MTk",
        },
        {
          id: "ODo3Mjo0NDc",
        },
        {
          id: "MzozNTE6Mjg0",
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
      source: "NzozNTU6Njc1",
      dest: "Nzo3Mjo1MTk",
    },
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "The Blackwood abundance" &&
        t.fontId === "HangingTree:40" &&
        t.page === 1,
    );
  }
  preprocess(text) {
    this.removeText(text, 3, 250.2108, 627);
    for (let i = 0; i < text.length; i++) {
      text[i].fontId === "GoodOT-Bold:13" &&
        (text[i].text.match(/^[ABCDEFG]\d*\./) ||
          text[i].text.match(/^EVENT/)) &&
        ((text[i].fontId = "HangingTree:20"),
        (text[i].fontName = "HangingTree"),
        (text[i].fontSize = 20));
    }
  }
  finalize(moduleData) {}
}
