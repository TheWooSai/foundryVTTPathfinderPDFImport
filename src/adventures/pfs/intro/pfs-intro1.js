import { PFSIntroBase } from "./base.js";
import { ModuleNpc } from "../../../core/module-npc.js";
import { ModuleScene } from "../../../core/module-scene.js";

export class PFS_Intro1 extends PFSIntroBase {
  prefix = "pfs-intro-1";
  fullName = "PFS Intro #1 - The Second Confirmation";
  pages = [
    this.TwoColumnWithRightCutout(3, 330),
    this.TwoColumnWithRightCutout(4, 520),
    this.TwoColumn(5),
    this.TwoColumn(6),
    this.TwoColumn(7),
    this.TwoColumn(8),
    this.TwoColumn(9),
    this.TwoColumn(11),
    this.TwoColumn(12),
    this.TwoColumn(14),
    this.TwoColumn(15),
    this.TwoColumnWithRightCutout(17, 310),
    this.TwoColumn(18),
    this.TwoColumn(19),
    this.TwoColumn(20, "appendix1"),
    this.TwoColumnWithRightCutout(21, 0, "appendix1"),
    this.TwoColumnWithRightCutout(22, 0, "appendix1"),
    this.TwoColumnWithRightCutout(23, 0, "appendix1"),
    this.TwoColumnWithRightCutout(24, 0, "appendix1"),
    this.TwoColumnWithRightCutout(25, 0, "appendix1"),
    this.TwoColumnWithRightCutout(26, 0, "appendix1"),
    this.TwoColumnWithRightCutout(27, 510, "appendix1"),
    this.TwoColumnWithRightCutout(28, 0, "appendix1"),
    this.TwoColumnWithRightCutout(29, 0, "appendix1"),
    this.TwoColumnWithRightCutout(30, 0, "appendix1"),
    this.TwoColumnWithRightCutout(31, 0, "appendix1"),
    this.TwoColumnWithRightCutout(32, 490, "appendix1"),
    this.TwoColumnWithRightCutout(33, 490, "appendix1"),
    this.TwoColumnWithRightCutout(34, 490, "appendix1"),
    this.TwoColumn(35, "appendix2"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      canonical: {
        name: "flipmat-classic/swamp",
        priority: 0,
      },
      nameInfo: {
        x: 60.875,
        y: 678.5346,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 10,
      width: 1041,
      height: 1301,
      imageLeft: 0,
      imageRight: 1041,
      imageCols: 24,
      imageTop: 0,
      imageBottom: 1301,
      imageRows: 30,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/flipmats/maps/swamp.json",
    }),
    new ModuleScene({
      name: "map2",
      canonical: {
        name: "flipmat-classic/swamp2",
        priority: 0,
      },
      nameInfo: {
        x: 60.875,
        y: 678.5346,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 13,
      width: 1041,
      height: 1299,
      imageLeft: 0,
      imageRight: 1041,
      imageCols: 24,
      imageTop: 0,
      imageBottom: 1299,
      imageRows: 30,
      offsetX: -1,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/flipmats/maps/swamp2.json",
    }),
    new ModuleScene({
      name: "map3",
      canonical: {
        name: "flipmat-classic/ancient-dungeon",
        priority: 0,
      },
      nameInfo: {
        x: 60.875,
        y: 681.7515,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 16,
      width: 1041,
      height: 1301,
      imageLeft: 0,
      imageRight: 1041,
      imageCols: 24,
      imageTop: 0,
      imageBottom: 1301,
      imageRows: 30,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/pfs/maps/pfs-intro1-map3.json",
      journals: [
        {
          x: 1350,
          y: 3050,
          name: "C1.",
        },
        {
          x: 2450,
          y: 3150,
          name: "C2.",
        },
        {
          x: 800,
          y: 1700,
          name: "C3.",
        },
        {
          x: 1450,
          y: 1700,
          name: "C4.",
        },
      ],
      tokens: [],
    }),
  ];
  journals = [];
  npcs = [
    new ModuleNpc({
      id: "hazard1",
      actorUuid:
        "Compendium.pf2e.pfs-introductions-bestiary.Actor.qXaXfqQfW3cp8kbI",
      label: "ASR",
    }),
    new ModuleNpc({
      id: "npc1",
      name: {
        page: 4,
        x: 232.5747,
        y: 87.1,
      },
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      page: 4,
      width: 792,
      height: 1083,
      tokenX: -304,
      tokenY: 47,
      tokenSize: 271,
    }),
    new ModuleNpc({
      id: "npc2",
      name: {
        page: 5,
        x: 119.158,
        y: 87.1,
      },
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      page: 5,
      width: 881,
      height: 1315,
      tokenX: -193,
      tokenY: -78,
      tokenSize: 335,
    }),
    new ModuleNpc({
      id: "npc3",
      name: {
        page: 6,
        x: 345.9154,
        y: 87.1,
      },
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      page: 6,
      width: 923,
      height: 1369,
      tokenX: -251,
      tokenY: -153,
      tokenSize: 277,
    }),
    new ModuleNpc({
      id: "npc4",
      name: {
        page: 11,
        x: 272.4515,
        y: 87.1,
      },
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.V8w4iOwUMPqYnqVE",
      page: 11,
      width: 1016,
      height: 1091,
      tokenX: -88,
      tokenY: -60,
      tokenSize: 363,
    }),
    new ModuleNpc({
      id: "npc5",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.gGdIV6uUHzX23vz6",
      page: 12,
      width: 745,
      height: 1236,
      tokenX: -227,
      tokenY: -68,
      tokenSize: 340,
    }),
    new ModuleNpc({
      id: "npc6",
      actorUuid:
        "Compendium.pf2e.pfs-introductions-bestiary.Actor.RPqISpa2Jq8Jy3dh",
      page: 14,
      width: 757,
      height: 1135,
      tokenX: -150,
      tokenY: 98,
      tokenSize: 603,
    }),
    new ModuleNpc({
      id: "npc7",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.sf42HB8VsWGlYixP",
      label: "BP",
    }),
    new ModuleNpc({
      id: "npc8",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.NQlPvg8SaIb9jzDl",
      label: "F",
    }),
    new ModuleNpc({
      id: "npc9",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.jiLbjz3kic9Uv5b6",
      label: "GF",
    }),
    new ModuleNpc({
      id: "npc10",
      actorUuid:
        "Compendium.pf2e.pfs-introductions-bestiary.Actor.j7hidXUeUNJtQEW4",
      label: "SO",
    }),
    new ModuleNpc({
      id: "npc11",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.LHHgGSs0ELCR4CYK",
      label: "G",
    }),
    new ModuleNpc({
      id: "npc12",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.Z6yCW77f44bEUgLH",
      label: "LB",
    }),
    new ModuleNpc({
      id: "npc12",
      actorUuid:
        "Compendium.pf2e.pfs-introductions-bestiary.Actor.LG0Vg7zBMGFQUkvE",
      uniqueKey: "Compendium.pf2e.pathfinder-bestiary-2.Actor.WqppjHF2Y8yC6veS",
      label: "SSSD",
    }),
    new ModuleNpc({
      id: "npc13",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.WqppjHF2Y8yC6veS",
      label: "SD",
    }),
    new ModuleNpc({
      id: "npc14",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.O69kXMo6shkA606k",
      label: "C",
    }),
    new ModuleNpc({
      id: "npc15",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.lCDygpomjUnutb5b",
      label: "D",
    }),
    new ModuleNpc({
      id: "npc16",
      actorUuid: "Compendium.pf2e.rusthenge-bestiary.Actor.yscVNbJvyotk9NLG",
      label: "D",
    }),
    new ModuleNpc({
      id: "npc17",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.Hwy4YrNVVr7NnsMC",
      label: "M",
    }),
    new ModuleNpc({
      id: "npc18",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.VCYF0NAfPKwTHkK1",
      label: "G",
    }),
    new ModuleNpc({
      id: "npc19",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary-2.Actor.y2LqIPBHv2dA0pjI",
      label: "N",
    }),
    new ModuleNpc({
      id: "npc20",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.vRAdYovWcy2euwuL",
      label: "SF",
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Intro #1" &&
        t.fontId === "GoodOT-Bold:15" &&
        t.page === 1,
    );
  }
  preprocess(text) {
    this.removeText(text, 3, 233.8112, 654.8302);
  }
  finalize(moduleData) {}
}
