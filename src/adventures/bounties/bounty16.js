import { BountyBase } from "./base.js";
import { LabelImage } from "../../core/images.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class Bounty16 extends BountyBase {
  prefix = "bounty-16";
  fullName = "Bounty #16 - Boom Town Betrayal";
  pages = [
    this.TwoColumnWithRightCutout(3, 310),
    this.TwoColumnWithRightCutout(4, 500),
    this.TwoColumnWithRightCutout(6, 570),
    this.TwoColumn(7),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      canonical: {
        name: "flipmat/city-sites4",
        priority: 0,
      },
      nameInfo: {
        x: 58.5,
        y: 680.9006,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 5,
      width: 1068,
      height: 1328,
      imageLeft: 0,
      imageRight: 1068,
      imageCols: 24,
      imageTop: 37,
      imageBottom: 1283,
      imageRows: 28,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/flipmats/maps/city-sites4.json",
    }),
  ];
  journals = [
    new LabelImage({
      name: "journal1",
      page: 8,
      width: 370,
      height: 452,
      label: "ODo1OTo0MTc",
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.IP4wercLl66JDCaG",
      page: 6,
      width: 560,
      height: 877,
      tokenX: -103,
      tokenY: 33,
      tokenSize: 261,
      forIds: ["NjozMTI6NTY3"],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.h65eZJq6Iie69zLD",
      label: "BBA",
      forIds: ["Njo3MjozMzk"],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid: "Compendium.pf2e.hazards.Actor.BHq5wpQU8hQEke8D",
      label: "HP",
      forIds: ["NDozMTI6MTIz"],
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
          id: "Mzo3MjoyNzk",
        },
        {
          id: "NDo3Mjo0MTE",
        },
        {
          id: "NDozMTI6Mzg3",
        },
        {
          id: "Nzo3Mjo2ODc",
        },
      ],
    },
    {
      name: "Handouts",
      pages: [
        {
          id: "journal1",
        },
      ],
    },
  ];
  combines = [];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Boom Town Betrayal" &&
        t.fontId === "HangingTree:40" &&
        t.page === 1,
    );
  }
  preprocess(text) {
    this.removeText(text, 3, 246.0308, 654.8302);
  }
  finalize(moduleData) {
    this.prependJournal(moduleData, "NjozNTI6NjY4", "NDozMTI6Mzg3");
    this.prependJournal(moduleData, "NDozNDM6NjY4", "NDo3Mjo0MTE");
    this.prependJournal(moduleData, "MzozNTg6NTQ4", "Mzo3Mjo1NTU");
  }
}
