import { BountyBase } from "./base.js";
import { AdventureImage } from "../../core/images.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class Bounty6 extends BountyBase {
  prefix = "bounty-6";
  fullName = "Bounty #6 - The Road from Otari";
  pages = [
    this.TwoColumnWithRightCutout(3, 310),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumnWithRightCutout(7, 550),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      nameInfo: {
        x: 72,
        y: 662.9414,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 6,
      width: 1045,
      height: 1305,
      imageLeft: 1,
      imageRight: 1045,
      imageCols: 24,
      imageTop: 2,
      imageBottom: 1303,
      imageRows: 30,
      globalLight: true,
    }),
  ];
  journals = [
    new AdventureImage({
      name: "journal1",
      page: 8,
      width: 512,
      height: 512,
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.B8dOh27iarR7rZI3",
      page: 5,
      width: 821,
      height: 961,
      tokenX: -77,
      tokenY: 37,
      tokenSize: 513,
      forIds: ["Nzo3MjozMTU"],
    }),
    new ModuleNpc({
      id: "npc1",
      actorUuid: "Compendium.pf2e.pfs-season-2-bestiary.Actor.PIAR4xFEhkWlWg8D",
      label: "HB",
      forIds: ["NTo3MjoxMzU"],
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
          id: "Mzo3MjozMTU",
        },
        {
          id: "NDozMTI6Njc1",
        },
        {
          id: "NTo3MjozOTk",
        },
        {
          id: "NzozMTI6NTQz",
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
      source: "NzozNTg6NjY5",
      dest: "NTo3MjozOTk",
    },
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "The Road from Otari" &&
        t.fontId === "HangingTree:40" &&
        t.page === 1,
    );
  }
  preprocess(text) {
    this.removeText(text, 3, 248.5208, 654.8302);
  }
  finalize(moduleData) {}
}
