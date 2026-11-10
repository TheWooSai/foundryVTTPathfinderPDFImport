import { PFSSeason3Base } from "./base.js";
import { ModuleNpc } from "../../../core/module-npc.js";
import { ModuleScene } from "../../../core/module-scene.js";

export class PFS3_13 extends PFSSeason3Base {
  prefix = "pfs-3-13";
  fullName = "PFS #3-13 - Guardian's Covenant";
  pages = [
    this.TwoColumnWithRightCutout(3, 330),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumnWithRightCutout(6, 480),
    this.TwoColumn(7),
    this.TwoColumn(8),
    this.TwoColumn(9),
    this.TwoColumn(11),
    this.TwoColumn(13),
    this.TwoColumn(14),
    this.TwoColumn(16),
    this.TwoColumn(17),
    this.TwoColumn(18),
    this.TwoColumn(20),
    this.TwoColumnWithRightCutout(21, 520, "appendix1"),
    this.TwoColumn(22, "appendix1"),
    this.TwoColumnWithRightCutout(23, 520, "appendix1"),
    this.TwoColumnWithRightCutout(24, 520, "appendix1"),
    this.TwoColumnWithRightCutout(25, 580, "appendix1"),
    this.TwoColumn(26, "appendix1"),
    this.TwoColumnWithRightCutout(27, 610, "appendix2"),
    this.TwoColumn(28, "appendix2"),
    this.TwoColumnWithRightCutout(29, 520, "appendix2"),
    this.TwoColumnWithRightCutout(30, 520, "appendix2"),
    this.TwoColumnWithRightCutout(31, 610, "appendix2"),
    this.TwoColumn(32, "appendix2"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      canonical: {
        name: "flipmat-classic/village-square1",
        priority: 0,
      },
      nameInfo: {
        x: 82,
        y: 675.5514,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 10,
      width: 957,
      height: 1186,
      imageLeft: 19,
      imageRight: 939,
      imageCols: 24,
      imageTop: 19,
      imageBottom: 1167,
      imageRows: 30,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/flipmats/maps/village-square1.json",
    }),
    new ModuleScene({
      name: "map2",
      canonical: {
        name: "flipmat/deep-forest",
        priority: 0,
      },
      nameInfo: {
        x: 82,
        y: 675.5514,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 12,
      width: 1193,
      height: 958,
      imageLeft: 9,
      imageRight: 1184,
      imageCols: 24,
      imageTop: 10,
      imageBottom: 949,
      imageRows: 30,
      rotateCW: 3,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/flipmats/maps/deep-forest.json",
    }),
    new ModuleScene({
      name: "map3",
      canonical: {
        name: "flipmat/deep-forest2",
        priority: 0,
      },
      nameInfo: {
        x: 82,
        y: 675.5514,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 15,
      width: 1193,
      height: 958,
      imageLeft: 9,
      imageRight: 1183,
      imageCols: 24,
      imageTop: 10,
      imageBottom: 949,
      imageRows: 30,
      rotateCW: 3,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/flipmats/maps/deep-forest2.json",
    }),
    new ModuleScene({
      name: "map4",
      canonical: {
        name: "flipmat-classic/village-square2",
        priority: 0,
      },
      nameInfo: {
        x: 82,
        y: 675.5514,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 19,
      width: 957,
      height: 1186,
      imageLeft: 19,
      imageRight: 938,
      imageCols: 24,
      imageTop: 19,
      imageBottom: 1167,
      imageRows: 30,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/flipmats/maps/village-square2.json",
    }),
  ];
  journals = [];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 4,
        x: 257.8438,
        y: 86.432,
      },
      page: 4,
      width: 844,
      height: 1126,
      tokenX: -244,
      tokenY: -33,
      tokenSize: 342,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 5,
        x: 248.4361,
        y: 92.664,
      },
      page: 5,
      width: 710,
      height: 1003,
      tokenX: -221,
      tokenY: 27,
      tokenSize: 359,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 5,
        x: 266.3206,
        y: 80.664,
        substring: {
          start: 3,
          end: 8,
        },
      },
      page: 5,
      width: 710,
      height: 1003,
      tokenX: 12,
      tokenY: -524,
      tokenSize: 415,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc4",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 6,
        x: 151.7008,
        y: 86.664,
      },
      page: 6,
      width: 739,
      height: 1028,
      tokenX: -244,
      tokenY: -2,
      tokenSize: 328,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc5",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 14,
        x: 278.0139,
        y: 462.664,
      },
      page: 14,
      width: 457,
      height: 406,
      tokenX: 37,
      tokenY: 71,
      tokenSize: 513,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc6",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 14,
        x: 283.093,
        y: 178.664,
      },
      page: 14,
      width: 575,
      height: 509,
      tokenX: 7,
      tokenY: 92,
      tokenSize: 547,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc7",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 16,
        x: 282.8237,
        y: 122.664,
      },
      page: 16,
      width: 524,
      height: 463,
      tokenX: 46,
      tokenY: 107,
      tokenSize: 608,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc8",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 17,
        x: 281.9581,
        y: 446.164,
      },
      page: 17,
      width: 547,
      height: 483,
      tokenX: -3,
      tokenY: 51,
      tokenSize: 463,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc9",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.gR4cLkgcor3Lp35F",
      label: "BT",
      forIds: ["MjM6MzEyOjUxOQ", "MTE6MzEyOjI5MQ"],
    }),
    new ModuleNpc({
      id: "npc10",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.xN5J9S485LxFZMkL",
      label: "CR",
      forIds: ["Mjc6MzEyOjYwMw", "OTo3MjoyNTU"],
    }),
    new ModuleNpc({
      id: "npc11",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.k9fM0vufbdsDPQul",
      label: "FM",
      forIds: ["MjE6MzEyOjUxOQ", "OTo3MjozNTE"],
    }),
    new ModuleNpc({
      id: "npc12",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.9RI0biNpRaZBU1de",
      label: "FAA",
      forIds: ["OTo3MjozMTU", "MjI6NzI6Njg3"],
    }),
    new ModuleNpc({
      id: "npc13",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.dYcDARPuNmLlGNuG",
      label: "FAA",
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc14",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.4paPYhdN4HHT3Orz",
      label: "FAA",
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc15",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.PhnmHglnmoiIb3Al",
      label: "FAA",
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc16",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.VC7rtYR4hLxwg7WZ",
      label: "G",
      forIds: ["MjY6NzI6Njg3"],
    }),
    new ModuleNpc({
      id: "npc17",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.jaMihaRbFNvKHVUc",
      label: "GS",
      forIds: ["Mjk6MzEyOjUxOQ", "MTE6MzEyOjE5NQ"],
    }),
    new ModuleNpc({
      id: "npc18",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.kB7FNn3vosp6cqQg",
      label: "L",
      forIds: ["MzA6MzEyOjUxOQ"],
    }),
    new ModuleNpc({
      id: "npc19",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.E4aJhHWyFDxgJcy9",
      label: "P",
      forIds: ["MjU6MzEyOjU3OQ", "MTg6MzEyOjQ3MQ"],
    }),
    new ModuleNpc({
      id: "npc20",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.wqJDAf89wSAdG0qy",
      uniqueKey: "Compendium.pf2e.pathfinder-bestiary-2.Actor.E4aJhHWyFDxgJcy9",
      label: "P",
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc21",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.ffzfTw9KfaJopkCx",
      uniqueKey: "Compendium.pf2e.pathfinder-bestiary-2.Actor.E4aJhHWyFDxgJcy9",
      label: "P",
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc22",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.WpdOwEpoWwxrBUpF",
      uniqueKey: "Compendium.pf2e.pathfinder-bestiary-2.Actor.E4aJhHWyFDxgJcy9",
      label: "P",
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc23",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.zpd6b6UPP72ZELCj",
      label: "P",
      forIds: ["Mjg6NzI6Njg3", "OTo3MjoyMTk"],
    }),
    new ModuleNpc({
      id: "npc24",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.Bpprw07yfbxqLdBp",
      uniqueKey:
        "Compendium.pf2e.pathfinder-monster-core.Actor.zpd6b6UPP72ZELCj",
      label: "P",
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc25",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.aeOzCBpwnUVcpqxI",
      label: "P",
      forIds: ["MjQ6MzEyOjUxOQ"],
    }),
    new ModuleNpc({
      id: "npc26",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.LqEHXPTgyVUltvS2",
      uniqueKey: "Compendium.pf2e.pathfinder-bestiary-2.Actor.uGXTQYuRNtgPt1Pp",
      label: "S",
      forIds: ["MjM6NzI6NjUx", "MTE6MzEyOjMyNw"],
    }),
    new ModuleNpc({
      id: "npc27",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.SJoWqX2P5LhJsbYA",
      label: "TW",
      forIds: ["MzE6MzEyOjYwMw", "MTg6MzEyOjQxMQ"],
    }),
    new ModuleNpc({
      id: "npc28",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.gzMCaAr2Bd2gbhrF",
      label: "TW",
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc29",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.BcSac9voqpoDjMTy",
      label: "TW",
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc30",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.hGu2JDWOAHHMLYeH",
      label: "TW",
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc31",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.9sGgANyNFCKnu06t",
      label: "T",
      forIds: ["Mjk6NzI6NjUx", "MTE6MzEyOjIzMQ"],
    }),
    new ModuleNpc({
      id: "npc32",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.dCljcVK6RAc0Y8Z7",
      uniqueKey:
        "Compendium.pf2e.pathfinder-monster-core.Actor.h7je8nkscJQ2Ac8j",
      label: "WS",
      forIds: ["MzI6NzI6Njg3"],
    }),
    new ModuleNpc({
      id: "npc33",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.xShj7KlFATzm397y",
      uniqueKey:
        "Compendium.pf2e.pathfinder-monster-core.Actor.h7je8nkscJQ2Ac8j",
      label: "WS",
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc34",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.JZtLQye4QlfFjrYT",
      uniqueKey:
        "Compendium.pf2e.pathfinder-monster-core.Actor.h7je8nkscJQ2Ac8j",
      label: "WS",
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc35",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.U41mRr07sJywSFYZ",
      uniqueKey: "Compendium.pf2e.pathfinder-bestiary-3.Actor.VVSTEyAnm9OSbfJ5",
      label: "W(3",
      forIds: ["MjQ6NzI6NjUx", "MTQ6NzI6MTQ3"],
    }),
    new ModuleNpc({
      id: "npc36",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.6aGKyGMSHD4fqReA",
      uniqueKey:
        "Compendium.pf2e.pathfinder-monster-core.Actor.yS0bUM8R6hb4fIx2",
      label: "W(3",
      forIds: ["MzA6NzI6NjUx", "MTQ6NzI6ODc"],
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
          id: "MzozNjQ6NTY3",
        },
        {
          id: "NjozODk6Njg3",
        },
        {
          id: "MzozMTI6MTIz",
        },
        {
          id: "NDozMzQ6NTA3",
        },
        {
          id: "NTo3Mjo2Mjc",
        },
        {
          id: "NTozMTI6NjUx",
        },
        {
          id: "Njo3Mjo1OTE",
        },
        {
          id: "NzoxMjU6MjE2",
        },
        {
          id: "ODo3Mjo0OTU",
        },
        {
          id: "ODozNjQ6NTE2",
        },
        {
          id: "OTo3Mjo2ODc",
        },
        {
          id: "OTozMTI6Njg3",
        },
        {
          id: "OTozNjQ6MjUy",
        },
        {
          id: "MTE6MzEyOjY4Nw",
        },
        {
          id: "MTM6NzI6Njg3",
        },
        {
          id: "MTM6MzY0OjY4NA",
        },
        {
          id: "MTQ6NzI6NTU1",
        },
        {
          id: "MTQ6MzU0OjU5MQ",
        },
        {
          id: "MTY6MTI0OjM5Ng",
        },
        {
          id: "MTc6MzEyOjM5OQ",
        },
        {
          id: "MTg6MTI0OjQyMA",
        },
        {
          id: "MTg6NzI6Mjc5",
        },
        {
          id: "MTg6MzEyOjMyNw",
        },
        {
          id: "MTg6MzEyOjEyMw",
        },
        {
          id: "MjA6NzI6NTMx",
        },
      ],
    },
    {
      name: "Appendix 1",
      pages: [
        {
          id: "MjE6NzI6Njg3",
        },
        {
          id: "MjE6NzI6NTA3",
        },
        {
          id: "MjE6NzI6NDM1",
        },
        {
          id: "MjE6NzI6Mzg3",
        },
        {
          id: "MjE6NzI6MzM5",
        },
        {
          id: "MjE6NzI6MjMx",
        },
        {
          id: "MjM6NzI6Njg3",
        },
        {
          id: "MjQ6NzI6Njg3",
        },
        {
          id: "MjU6NzI6Njg3",
        },
        {
          id: "MjU6MTI0OjYzNg",
        },
        {
          id: "MjU6NzI6NTQz",
        },
        {
          id: "MjU6NzI6NDk1",
        },
        {
          id: "MjU6NzI6MzYz",
        },
        {
          id: "MjU6NzI6MjE5",
        },
      ],
    },
    {
      name: "Appendix 2",
      pages: [
        {
          id: "Mjc6NzI6Njg3",
        },
        {
          id: "Mjc6NzI6NTA3",
        },
        {
          id: "Mjc6NzI6NDM1",
        },
        {
          id: "Mjc6NzI6Mzg3",
        },
        {
          id: "Mjc6NzI6MzAz",
        },
        {
          id: "Mjc6NzI6MjA3",
        },
        {
          id: "Mjk6NzI6Njg3",
        },
        {
          id: "MzA6NzI6Njg3",
        },
        {
          id: "MzE6NzI6Njg3",
        },
        {
          id: "MzE6MTI0OjYzNg",
        },
        {
          id: "MzE6NzI6NTQz",
        },
        {
          id: "MzE6NzI6NDgz",
        },
        {
          id: "MzE6NzI6Mzc1",
        },
        {
          id: "MzE6NzI6MjMx",
        },
      ],
    },
  ];
  combines = [
    {
      source: "MjE6MzYzOjY4Nw",
      dest: "MjE6NzI6NTA3",
    },
    {
      source: "MjM6MzY0OjY4Nw",
      dest: "MjM6NzI6Njg3",
    },
    {
      source: "MjQ6MzYzOjY4Nw",
      dest: "MjQ6NzI6Njg3",
    },
    {
      source: "MjU6MzYzOjY4Nw",
      dest: "MjU6NzI6Njg3",
    },
    {
      source: "Mjc6MzYzOjY4Nw",
      dest: "Mjc6NzI6NTA3",
    },
    {
      source: "Mjk6MzY0OjY4Nw",
      dest: "Mjk6NzI6Njg3",
    },
    {
      source: "MzA6MzYzOjY4Nw",
      dest: "MzA6NzI6Njg3",
    },
    {
      source: "MzE6MzYzOjY4Nw",
      dest: "MzE6NzI6Njg3",
    },
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Scenario #3-13" &&
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
