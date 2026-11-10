import { PFSSeason3Base } from "./base.js";
import { LabelImage } from "../../../core/images.js";
import { ModuleNpc } from "../../../core/module-npc.js";
import { ModuleScene } from "../../../core/module-scene.js";

export class PFS3_12 extends PFSSeason3Base {
  prefix = "pfs-3-12";
  fullName = "PFS #3-12 - Fury's Toll";
  pages = [
    this.TwoColumnWithRightCutout(3, 330),
    this.TwoColumn(4),
    this.TwoColumn(6),
    this.TwoColumn(7),
    this.TwoColumn(8),
    this.TwoColumn(9),
    this.TwoColumn(10),
    this.TwoColumn(11),
    this.TwoColumn(12),
    this.TwoColumn(13),
    this.TwoColumn(14),
    this.TwoColumn(15),
    this.TwoColumn(16),
    this.TwoColumnWithRightCutout(17, 460, "appendix1"),
    this.TwoColumnWithRightCutout(18, 500, "appendix1"),
    this.TwoColumnWithRightCutout(19, 520, "appendix1"),
    this.TwoColumn(20, "appendix1"),
    this.TwoColumnWithRightCutout(21, 460, "appendix2"),
    this.TwoColumnWithRightCutout(22, 460, "appendix2"),
    this.TwoColumnWithRightCutout(23, 450, "appendix2"),
    this.OneColumn(27),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      canonical: {
        name: "pfs3-12/map1",
        priority: 0,
      },
      nameInfo: {
        x: 82,
        y: 675.5514,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3),
      page: 5,
      width: 975,
      height: 1300,
      imageLeft: 30,
      imageRight: 945,
      imageCols: 22,
      imageTop: 11,
      imageBottom: 1260,
      imageRows: 30,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/pfs/maps/pfs3-12-map1.json",
    }),
  ];
  journals = [
    new LabelImage({
      name: "journal1",
      page: 10,
      width: 744,
      height: 744,
      label: "MTA6NDA1OjExMg",
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.pcSXAn8KbvPDWCWU",
      page: 7,
      width: 744,
      height: 744,
      tokenX: 14,
      tokenY: 29,
      tokenSize: 800,
      forIds: ["MjE6NzI6NDgz", "Nzo3Mjo2MDM"],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.df7a1D5Zbv1yZIYl",
      page: 7,
      width: 744,
      height: 744,
      tokenX: 14,
      tokenY: 29,
      tokenSize: 800,
      forIds: ["MTc6NzI6NDgz", "Nzo3Mjo2NjM"],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 8,
        x: 410.3003,
        y: 87.664,
      },
      page: 8,
      width: 679,
      height: 1084,
      tokenX: -205,
      tokenY: 25,
      tokenSize: 356,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc4",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.IHuTNi8FQt54OpPj",
      page: 9,
      width: 679,
      height: 1012,
      tokenX: -116,
      tokenY: 35,
      tokenSize: 620,
      forIds: ["MjI6NzI6MjMx", "MTA6NzI6Njg3"],
    }),
    new ModuleNpc({
      id: "npc5",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.mZ2bmxg4JcVh1p2k",
      page: 9,
      width: 679,
      height: 1012,
      tokenX: -116,
      tokenY: 35,
      tokenSize: 620,
      forIds: ["MTg6NzI6MjE5", "OTozMTI6MTQ3"],
    }),
    new ModuleNpc({
      id: "npc6",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 11,
        x: 250.4501,
        y: 274.4269,
      },
      page: 11,
      width: 679,
      height: 679,
      tokenX: 34,
      tokenY: 87,
      tokenSize: 735,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc7",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 12,
        x: 257.6808,
        y: 274.4269,
      },
      page: 12,
      width: 679,
      height: 679,
      tokenX: -29,
      tokenY: 109,
      tokenSize: 595,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc8",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 13,
        x: 240.6675,
        y: 274.4269,
      },
      page: 13,
      width: 679,
      height: 679,
      tokenX: -40,
      tokenY: 30,
      tokenSize: 567,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc9a",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.OOHNMq2uOfnp8QCg",
      name: {
        page: 14,
        x: 242.6242,
        y: 88.7954,
      },
      page: 14,
      width: 730,
      height: 1088,
      tokenX: -224,
      tokenY: -49,
      tokenSize: 304,
      forIds: ["MTk6NzI6MzM5", "MTU6MzEyOjE4Mw"],
    }),
    new ModuleNpc({
      id: "npc9b",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.986YKe07u2538RcF",
      name: {
        page: 14,
        x: 242.6242,
        y: 88.7954,
      },
      page: 14,
      width: 730,
      height: 1088,
      forIds: ["MTU6MzEyOjg3", "MjM6NzI6NDIz"],
    }),
    new ModuleNpc({
      id: "npc10",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.9FB0dIfsZSk6bdKt",
      label: "AC",
      forIds: ["MTg6MzEyOjQzNQ", "MjI6MzEyOjM5OQ"],
    }),
    new ModuleNpc({
      id: "npc11",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.3isJhl2RNoYeYSSV",
      label: "ASS",
      forIds: ["MTg6NzI6NjYz", "OTozMTI6MTgz", "MjI6NzI6NjYz", "OTozMTI6ODc"],
    }),
    new ModuleNpc({
      id: "npc12",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.xN5J9S485LxFZMkL",
      label: "CR",
      forIds: ["MjM6NzI6NjYz", "MTU6MzEyOjEyMw"],
    }),
    new ModuleNpc({
      id: "npc15",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.micllXbcz1eBcAoz",
      label: "FW",
      forIds: ["MjA6NzI6Njg3"],
    }),
    new ModuleNpc({
      id: "npc16",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.jMxFlkAbepA47sHb",
      label: "SM",
      forIds: ["MjM6MzEyOjM3NQ"],
    }),
    new ModuleNpc({
      id: "npc17",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.ARw4pyNmuQxoZDke",
      label: "SM",
      forIds: ["MTk6NzI6NjYz", "MTU6MzEyOjIxOQ"],
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
          id: "MzozNjQ6NTY3",
        },
        {
          id: "NDo3Mjo1Nzk",
        },
        {
          id: "NDozMTI6NTY3",
        },
        {
          id: "Njo3Mjo0MzU",
        },
        {
          id: "NjozMTI6NDQ3",
        },
        {
          id: "NzozOTg6MzAz",
        },
        {
          id: "ODo3Mjo2ODc",
        },
        {
          id: "ODo3Mjo0NzE",
        },
        {
          id: "ODo3MjoyNTU",
        },
        {
          id: "ODozMTI6Njg3",
        },
        {
          id: "OTo3Mjo2ODc",
        },
        {
          id: "MTA6NzI6NDQ3",
        },
        {
          id: "MTA6NzI6MzUx",
        },
        {
          id: "MTA6NzI6MjQz",
        },
        {
          id: "MTI6NzI6Njg3",
        },
        {
          id: "MTI6NzI6NDIz",
        },
        {
          id: "MTM6NzI6MjMx",
        },
        {
          id: "MTM6NzI6MTIz",
        },
        {
          id: "MTM6MzEyOjY4Nw",
        },
        {
          id: "MTQ6MzY4OjU2Nw",
        },
        {
          id: "MTY6NzI6Njg3",
        },
        {
          id: "MTY6MzEyOjUwNw",
        },
        {
          id: "MTY6MzEyOjQ0Nw",
        },
        {
          id: "MTY6MzEyOjMxNQ",
        },
      ],
    },
    {
      name: "Appendix",
      pages: [
        {
          id: "MTc6NzI6Njg3",
        },
        {
          id: "MTc6NzI6NTA3",
        },
        {
          id: "MTg6NzI6Njg3",
        },
        {
          id: "MTk6NzI6Njg3",
        },
        {
          id: "MjE6NzI6Njg3",
        },
        {
          id: "MjE6NzI6NTA3",
        },
        {
          id: "MjI6NzI6Njg3",
        },
        {
          id: "MjM6NzI6Njg3",
        },
      ],
    },
    {
      name: "Handouts",
      pages: [
        {
          id: "journal1",
        },
        {
          id: "Mjc6MTUxOjY4NQ",
        },
        {
          id: "Mjc6MTk5OjQ0NQ",
        },
      ],
    },
  ];
  combines = [
    {
      source: "MTc6MzgxOjY4Nw",
      dest: "MTc6NzI6NTA3",
    },
    {
      source: "MTg6MzYwOjY4Nw",
      dest: "MTg6NzI6Njg3",
    },
    {
      source: "MTk6MzgwOjY4Nw",
      dest: "MTk6NzI6Njg3",
    },
    {
      source: "MjE6MzgxOjY4Nw",
      dest: "MjE6NzI6NTA3",
    },
    {
      source: "MjI6MzYwOjY4Nw",
      dest: "MjI6NzI6Njg3",
    },
    {
      source: "MjM6MzgwOjY4Nw",
      dest: "MjM6NzI6Njg3",
    },
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Scenario #3-12" &&
        t.fontId === "GoodOT-Bold:15" &&
        t.page === 1,
    );
  }
  preprocess(text) {
    this.removeText(text, 3, 221.0865, 690.7246);
    this.removeText(text, 3, 235.4011, 654.8302);
    this.removeText(text, 3, 456.2725, 407.3741);
    for (let i = 0; i < text.length; i++) {
      text[i].text = text[i].text.replace(/�/, ".");
    }
  }
  extractDetails(text, moduleData, sectionKey) {
    return super.extractDetails(text, moduleData, sectionKey);
  }
}
