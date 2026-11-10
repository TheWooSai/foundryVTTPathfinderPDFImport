import { BountyBase } from "./base.js";
import { AdventureImage } from "../../core/images.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class Bounty1 extends BountyBase {
  prefix = "bounty-1";
  fullName = "Bounty #1 - The Whitefang Wyrm";
  pages = [
    this.TwoColumnWithRightCutout(3, 305),
    this.TwoColumn(4),
    this.TwoColumnWithRightCutout(5, 490),
    this.TwoColumnWithRightCutout(7, 560),
    this.TwoColumn(9),
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
      width: 1303,
      height: 1046,
      imageLeft: 44,
      imageRight: 1264,
      imageCols: 22,
      imageTop: 45,
      imageBottom: 1004,
      imageRows: 28,
      rotateCW: 1,
      globalLight: true,
      detailsFile: "/bounty/maps/bounty1-map1.json",
      journals: [
        {
          x: 650,
          y: 1050,
          id: "NTo3MjozOTk",
          text: "",
        },
      ],
      tokens: [
        {
          id: "npc3",
          x: 2200,
          y: 2700,
        },
        {
          id: "npc3",
          x: 1200,
          y: 3200,
        },
        {
          id: "npc4",
          x: 1700,
          y: 3300,
        },
      ],
    }),
  ];
  journals = [
    new AdventureImage({
      name: "journal1",
      page: 8,
      width: 483,
      height: 643,
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid: "Compendium.pf2e.pfs-season-2-bestiary.Actor.Xgt8hV1WTSxQLv7y",
      label: "CI",
      forIds: ["NDozMTI6NDU5"],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid: "Compendium.pf2e.pfs-season-2-bestiary.Actor.NFKQObG0b0lVsvgS",
      label: "UI",
      forIds: ["NTo3Mjo2Mjc"],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid: "Compendium.pf2e.pfs-season-2-bestiary.Actor.LZiiTvbxfgJ3QfIQ",
      label: "IS",
      forIds: ["Nzo3Mjo0MzU"],
    }),
    new ModuleNpc({
      id: "npc4",
      actorUuid: "Compendium.pf2e.pfs-season-2-bestiary.Actor.Jie7zk3ct2AE92Om",
      label: "S",
      forIds: ["Nzo3MjoxOTU"],
    }),
  ];
  journalPages = [
    {
      name: "Adventure Content",
      pages: [
        {
          id: "Mzo3Mjo1Njc",
        },
        {
          id: "MzozNTg6NTQ4",
        },
        {
          id: "Mzo3MjozODc",
        },
        {
          id: "NDo3MjozMzk",
        },
        {
          id: "NTo3MjozOTk",
        },
        {
          id: "NTozNDI6NjY4",
        },
        {
          id: "NzozMTI6MjE5",
        },
        {
          id: "OTo3Mjo2ODc",
        },
      ],
    },
    {
      name: "Handouts",
      pages: [
        {
          id: "journal1",
          name: "{Mjo3NTo2Nw:9:11:S}{Mzo3Mjo4Nw:20:25}{Mzo3Mjo0MTE:4:9:S}r",
        },
      ],
    },
  ];
  combines = [
    {
      source: "NzozNTg6NjY4",
      dest: "NTo3MjozOTk",
    },
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "The Whitefang Wyrm" &&
        t.fontId === "HangingTree:40" &&
        t.page === 1,
    );
  }
  finalize(moduleData) {}
}
