import { BountyBase } from "./base.js";
import { CaptionImage } from "../../core/images.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class Bounty14 extends BountyBase {
  prefix = "bounty-14";
  fullName = "Bounty #14 - The Blackwood Truce";
  pages = [
    this.TwoColumnWithRightCutout(3, 120),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumnWithRightCutout(7, 510),
    this.TwoColumn(8),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      canonical: {
        name: "bounty14/map1",
        priority: 0,
      },
      nameInfo: {
        x: 43.88,
        y: 680,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 6,
      width: 1126,
      height: 1328,
      imageLeft: 102,
      imageRight: 1075,
      imageCols: 22,
      imageTop: 12,
      imageBottom: 1294,
      imageRows: 29,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/bounty/maps/bounty14-map1.json",
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
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.rwRPi6GwXhF34W55",
      page: 7,
      width: 742,
      height: 1051,
      tokenX: -285,
      tokenY: 2,
      tokenSize: 295,
      forIds: ["ODo3Mjo0MjM"],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.e0YvEWJ5zpU946G4",
      label: "CS",
      forIds: ["ODo3MjoxNTk"],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.e9kWyI8plxVuMOe3",
      label: "DM",
      forIds: ["NTo3Mjo2NTE"],
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
          id: "Mzo3MjozNzU",
        },
        {
          id: "NDo3MjoxMjM",
        },
        {
          id: "NDozMTI6NDcx",
        },
        {
          id: "NDozMTI6Mjc5",
        },
        {
          id: "NDozMTI6MjE5",
        },
        {
          id: "NTo3Mjo0MTE",
        },
        {
          id: "NTozMTI6Njc1",
        },
        {
          id: "NzozMTI6MTUw",
        },
        {
          id: "ODozMTI6NTY3",
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
      source: "NzozNTA6Njc1",
      dest: "NTozMTI6Njc1",
    },
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "The Blackwood truce" &&
        t.fontId === "HangingTree:40" &&
        t.page === 1,
    );
  }
  preprocess(text) {
    this.removeText(text, 3, 251.4707, 654.8302);
    this.changeFontId(text, 4, 312.066, 471, "HangingTree:20");
    this.changeFontId(text, 4, 312.066, 279, "HangingTree:20");
    this.changeFontId(text, 4, 312.066, 219, "HangingTree:20");
    this.changeFontId(text, 4, 484.36799999999994, 219, "HangingTree:20");
    this.changeFontId(text, 5, 72.0649, 411, "HangingTree:20");
  }
  finalize(moduleData) {}
}
