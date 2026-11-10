import { BountyBase } from "./base.js";
import { AdventureImage } from "../../core/images.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class Bounty18 extends BountyBase {
  prefix = "bounty-18";
  fullName = "Bounty #18 - From Family Lost";
  pages = [
    this.TwoColumnWithRightCutout(3, 280),
    this.TwoColumn(4),
    this.TwoColumn(6),
    this.TwoColumnWithRightCutout(7, 550),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      canonical: {
        name: "flipmat/ghost-town1",
        priority: 0,
      },
      nameInfo: {
        x: 72,
        y: 668.9006,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 5,
      width: 1277,
      height: 1026,
      imageLeft: 11,
      imageRight: 1267,
      imageCols: 24,
      imageTop: 11,
      imageBottom: 1016,
      imageRows: 30,
      offsetX: 0,
      offsetY: 0,
      rotateCW: 1,
      globalLight: true,
      detailsFile: "/flipmats/maps/ghost-town1.json",
      journals: [
        {
          x: 650,
          y: 850,
          id: "NDozMTI6Njg3",
        },
        {
          x: 950,
          y: 1200,
          id: "NDozMTI6NTY3",
        },
        {
          x: 1200,
          y: 2200,
          id: "Njo3MjoyNzk",
        },
        {
          x: 2300,
          y: 2800,
          id: "NjozMTI6Mzg3",
        },
        {
          x: 2e3,
          y: 2200,
          id: "NjozMTI6MTk1",
        },
      ],
      tokens: [],
    }),
  ];
  journals = [
    new AdventureImage({
      name: "journal1",
      page: 8,
      width: 418,
      height: 510,
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.UfiWHXnDg13Gqyyu",
      page: 7,
      width: 363,
      height: 444,
      tokenX: 49,
      tokenY: 17,
      tokenSize: 472,
      forIds: ["Nzo3MjozOTk"],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.iL7qWBOdmhRwjcVG",
      label: "PBS",
      forIds: ["NDozMTI6MjY3"],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.B1ZWz3rJ6VBYVH1U",
      label: "SH",
      forIds: ["Nzo3Mjo2Mjc"],
    }),
    new ModuleNpc({
      id: "npc4",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.SzcyJHMmYgLwtXlQ",
      label: "BCT",
      forIds: ["NjozMTI6Njg3"],
    }),
    new ModuleNpc({
      id: "npc5",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.kBYuJs4je7XBPisk",
      label: "FP",
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
          id: "MzozNTg6NTQ4",
        },
        {
          id: "Mzo3MjoyNzk",
        },
        {
          id: "Mzo3MjoxMzU",
        },
        {
          id: "NDozMTI6Njg3",
        },
        {
          id: "NDozMTI6NTY3",
        },
        {
          id: "Njo3MjoyNzk",
        },
        {
          id: "NjozMTI6Mzg3",
        },
        {
          id: "NjozMTI6MTk1",
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
        },
      ],
    },
  ];
  combines = [];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "From Family Lost" &&
        t.fontId === "HangingTree:40" &&
        t.page === 1,
    );
  }
  preprocess(text) {
    this.removeText(text, 3, 254.0608, 654.8302);
    this.changeTextFn(text, 4, 312.066, 567, (t) => `${t}.`);
    this.changeTextFn(text, 6, 72.0649, 279, (t) => `${t}.`);
    this.changeTextFn(text, 6, 312.0661, 387, (t) => `${t}.`);
    this.changeTextFn(text, 6, 312.0661, 195, (t) => `${t}.`);
    this.changeTextFn(text, 4, 504.362, 567, (t) => ` (${t})`);
    this.changeTextFn(text, 6, 456.8731, 195, (t) => ` (${t})`);
    this.mergeWithNext(text, 4, 312.066, 567);
    this.mergeWithNext(text, 4, 312.066, 567);
    this.mergeWithNext(text, 6, 72.0649, 279);
    this.mergeWithNext(text, 6, 312.0661, 387);
    this.mergeWithNext(text, 6, 312.0661, 195);
    this.mergeWithNext(text, 6, 312.0661, 195);
    for (let i = 0; i < text.length; i++) {
      text[i].fontId === "GoodOT-Bold:13" &&
        (text[i].text.match(/^[ABCDEFG]\d*\./) ||
          text[i].text.match(/^EVENT/)) &&
        ((text[i].fontId = "HangingTree:20"),
        (text[i].fontName = "HangingTree"),
        (text[i].fontSize = 20));
    }
  }
  finalize(moduleData) {
    this.appendJournal(moduleData, "NzozNTQ6NjY5", "NjozMTI6MTk1");
  }
}
