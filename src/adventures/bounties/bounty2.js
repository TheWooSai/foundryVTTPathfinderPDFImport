import { BountyBase } from "./base.js";
import { CaptionImage } from "../../core/images.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class Bounty2 extends BountyBase {
  prefix = "bounty-2";
  fullName = "Bounty #2 - Blood of the Beautiful";
  pages = [
    this.TwoColumnWithRightCutout(3, 250),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumnWithRightCutout(7, 550),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      nameInfo: {
        x: 72,
        y: 668.9414,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 6,
      width: 1060,
      height: 1325,
      imageLeft: 0,
      imageRight: 1060,
      imageCols: 24,
      imageTop: 0,
      imageBottom: 1325,
      imageRows: 30,
      globalLight: true,
      detailsFile: "/bounty/maps/bounty2-map1.json",
      journals: [
        {
          x: 650,
          y: 850,
          id: "NTo3MjozMDM",
          text: "",
        },
      ],
      tokens: [
        {
          id: "npc2",
          x: 1400,
          y: 2700,
        },
        {
          id: "npc2",
          x: 2e3,
          y: 2400,
        },
        {
          id: "npc2",
          x: 2400,
          y: 2700,
        },
        {
          id: "npc2",
          x: 1600,
          y: 1800,
        },
        {
          id: "npc1",
          x: 2100,
          y: 1400,
        },
      ],
    }),
  ];
  journals = [
    new CaptionImage({
      name: "journal1",
      page: 1,
      width: 1257,
      height: 815,
    }),
    new CaptionImage({
      name: "npc1",
      page: 4,
      width: 779,
      height: 1151,
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.Hl1Nnnda8KSf0Obp",
      page: 5,
      width: 827,
      height: 1061,
      tokenX: 22,
      tokenY: -103,
      tokenSize: 585,
      forIds: ["Nzo3MjoyNzk"],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid: "Compendium.pf2e.pfs-season-2-bestiary.Actor.Y2tEkaZK5j2NySJu",
      label: "S",
      forIds: ["Nzo3Mjo0MTE"],
    }),
  ];
  journalPages = [
    {
      name: "Bounty #2 - Blood of the Beautiful",
      pages: [
        {
          id: "Mzo3Mjo1NTU",
        },
        {
          id: "MzozNTg6NTQ4",
        },
        {
          id: "Mzo3MjozMzk",
        },
        {
          id: "NDo3Mjo2NzU",
        },
        {
          id: "NTo3MjozMDM",
        },
        {
          id: "NzozMTI6Mjc5",
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
        {
          id: "npc1",
          name: "{NDoyNzQ6ODY:0:7}",
        },
      ],
    },
  ];
  combines = [
    {
      source: "NzozNTg6NjY4",
      dest: "NTo3MjozMDM",
    },
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Blood of the Beautiful" &&
        t.fontId === "HangingTree:40" &&
        t.page === 1,
    );
  }
  finalize(moduleData) {}
}
