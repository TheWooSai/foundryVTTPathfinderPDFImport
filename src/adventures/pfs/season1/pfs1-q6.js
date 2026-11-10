import { PFSSeason1Base } from "./base.js";
import { CaptionImage } from "../../../core/images.js";
import { ModuleNpc } from "../../../core/module-npc.js";
import { ModuleScene } from "../../../core/module-scene.js";

export class PFS1_Q6 extends PFSSeason1Base {
  prefix = "pfs-q6";
  fullName = "PFS Q6 - Archaeology in Aspenthar";
  pages = [
    this.TwoColumn(3),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumn(7),
    this.OneColumn(8, "handout"),
    this.TwoColumnWithRightCutout(9, 0, "appendix1"),
    this.TwoColumnWithRightCutout(10, 0, "appendix2"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      nameInfo: {
        x: 57.75,
        y: 686.3524,
      },
      nameFn: (name) => this.sentenceCase(name).substr(3),
      page: 6,
      width: 1326,
      height: 1065,
      imageLeft: 10,
      imageRight: 1315,
      imageCols: 24,
      imageTop: 12,
      imageBottom: 1054,
      imageRows: 30,
      rotateCW: 1,
      globalLight: true,
      detailsFile: "/flipmats/maps/asylum2.json",
      journals: [
        {
          x: 1750,
          y: 1850,
          name: "A1.",
        },
        {
          x: 1750,
          y: 2750,
          name: "A2.",
        },
        {
          x: 2250,
          y: 3350,
          name: "A3.",
        },
      ],
    }),
  ];
  journals = [
    new CaptionImage({
      name: "journal1",
      page: 3,
      width: 409,
      height: 278,
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid: "Compendium.pf2e.pfs-season-1-bestiary.Actor.OtYNhDlyXrVWxeiS",
      page: 11,
      width: 945,
      height: 1336,
      tokenX: -222,
      tokenY: 122,
      tokenSize: 636,
      forIds: ["MTA6NzI6NTQz", "NTozMTI6MjA3"],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid: "Compendium.pf2e.pfs-season-1-bestiary.Actor.pWJUeb0LfCXFSYpE",
      page: 11,
      width: 945,
      height: 1336,
      tokenX: -222,
      tokenY: 122,
      tokenSize: 636,
      forIds: ["OTo3Mjo1NDM", "NTozMTI6Mjc5"],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 4,
        x: 271.9563,
        y: 483,
      },
      page: 12,
      width: 1249,
      height: 1216,
      tokenX: 77,
      tokenY: 156,
      tokenSize: 1445,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc4",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 5,
        x: 267.4685,
        y: 484.8,
      },
      page: 13,
      width: 1249,
      height: 1216,
      tokenX: 98,
      tokenY: 233,
      tokenSize: 1445,
      forIds: [],
    }),
  ];
  journalPages = [
    {
      name: "Adventure Content",
      pages: [
        {
          id: "Mzo3Mjo2NjM",
        },
        {
          id: "Mzo3Mjo2MTU",
        },
        {
          id: "Mzo3Mjo0MTE",
        },
        {
          id: "MzozNzA6NjUx",
        },
        {
          id: "Mzo3MjoxNDc",
        },
        {
          id: "NDozMTI6Njg3",
        },
        {
          id: "NTo3Mjo0NDc",
        },
        {
          id: "NTo3MjoyOTE",
        },
        {
          id: "NTozMTI6Njg3",
        },
        {
          id: "NTozMTI6NDIz",
        },
        {
          id: "NTozMTI6MTU5",
        },
        {
          id: "OTo3Mjo2ODc",
        },
        {
          id: "MTA6NzI6Njg3",
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
          id: "ODoyMjM6Njg1",
        },
      ],
    },
  ];
  combines = [
    {
      source: "OTozNjk6Njc1",
      dest: "OTo3Mjo2ODc",
    },
    {
      source: "MTA6MzY5OjY3NQ",
      dest: "MTA6NzI6Njg3",
    },
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "PATHFINDER SOCIETY QUEST #6" &&
        t.fontId === "GoodOT-CondBold:10" &&
        t.page === 1,
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    for (const i in text) {
      const t = text[i];
      if (
        t.fontName === "GoodOT" &&
        ((t.page === 9 && Math.abs(t.x - 72) < 1 && t.y < 540) ||
          (t.page === 10 && Math.abs(t.x - 72) < 1 && t.y < 540))
      ) {
        text[i].isLeftAligned = false;
        text[i].isIndented = true;
      }
    }
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
