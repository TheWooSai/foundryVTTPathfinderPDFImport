import { PFSSeason3Base } from "./base.js";
import { LabelImage } from "../../../core/images.js";
import { ModuleNpc } from "../../../core/module-npc.js";
import { ModuleScene } from "../../../core/module-scene.js";

export class PFS3_01 extends PFSSeason3Base {
  prefix = "pfs-3-01";
  fullName = "PFS #3-01 - Intro: Year of Shattered Sanctuaries";
  pages = [
    this.TwoColumnWithRightCutout(3, 280),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumn(6),
    this.TwoColumn(7),
    this.TwoColumn(8),
    this.TwoColumn(10),
    this.TwoColumn(12),
    this.TwoColumn(14),
    this.TwoColumn(15),
    this.TwoColumn(16),
    this.TwoColumnWithRightCutout(17, 520, "appendix1"),
    this.TwoColumnWithRightCutout(18, 520, "appendix1"),
    this.TwoColumn(19, "appendix1"),
    this.TwoColumnWithRightCutout(20, 500, "appendix1"),
    this.TwoColumn(21, "appendix1"),
    this.TwoColumnWithRightCutout(22, 520, "appendix2"),
    this.TwoColumnWithRightCutout(23, 510, "appendix2"),
    this.TwoColumn(24, "appendix2"),
    this.TwoColumnWithRightCutout(25, 500, "appendix2"),
    this.TwoColumn(26, "appendix2"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      canonical: {
        name: "flipmat/city-sites1",
        priority: 0,
      },
      nameInfo: {
        x: 72,
        y: 685.5514,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 9,
      width: 1060,
      height: 1325,
      imageLeft: 0,
      imageRight: 1060,
      imageCols: 24,
      imageTop: 0,
      imageBottom: 1325,
      imageRows: 30,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/flipmats/maps/city-sites1.json",
    }),
    new ModuleScene({
      name: "map2",
      canonical: {
        name: "flipmat/city-sites2",
        priority: 0,
      },
      nameInfo: {
        x: 72,
        y: 684.0514,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 11,
      width: 1060,
      height: 1325,
      imageLeft: 0,
      imageRight: 1060,
      imageCols: 24,
      imageTop: 0,
      imageBottom: 1325,
      imageRows: 30,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/flipmats/maps/city-sites2.json",
    }),
    new ModuleScene({
      name: "map3",
      canonical: {
        name: "flipmat/tavern1",
        priority: 0,
      },
      nameInfo: {
        x: 72,
        y: 684.0514,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 13,
      width: 1060,
      height: 1325,
      imageLeft: 0,
      imageRight: 1060,
      imageCols: 24,
      imageTop: 0,
      imageBottom: 1325,
      imageRows: 30,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/flipmats/maps/tavern1.json",
    }),
  ];
  journals = [
    new LabelImage({
      name: "journal1",
      page: 27,
      width: 428,
      height: 642,
      label: "Mjc6MTA4OjM5OA",
    }),
    new LabelImage({
      name: "journal2",
      page: 27,
      width: 517,
      height: 686,
      label: "Mjc6NDIzOjM5OA",
    }),
    new LabelImage({
      name: "journal3",
      page: 27,
      width: 523,
      height: 698,
      label: "Mjc6MTM3OjM3Nw",
    }),
    new LabelImage({
      name: "journal4",
      page: 27,
      width: 599,
      height: 798,
      label: "Mjc6Mzk3OjM3Nw",
    }),
    new LabelImage({
      name: "journal5",
      page: 28,
      width: 502,
      height: 621,
      label: "Mjg6OTM6NDAw",
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "hazard1",
      actorUuid: "Compendium.pf2e.hazards.Actor.v2xIxZ9ZZ6fJyATF",
      label: "PL",
    }),
    new ModuleNpc({
      id: "hazard2",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.pnZ9aFB0mdYdU7Zj",
      label: "SDR",
    }),
    new ModuleNpc({
      id: "hazard3",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.L2BPCPQ4fRMviF2d",
      label: "SDR",
    }),
    new ModuleNpc({
      id: "hazard4",
      actorUuid: "Compendium.pf2e.hazards.Actor.491qhVbjsHnOuMZW",
      label: "ELR",
    }),
    new ModuleNpc({
      id: "npc1",
      name: {
        page: 27,
        x: 107.6671,
        y: 397.962,
      },
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.BoXCGLACP9vuIZkZ",
      page: 27,
      width: 428,
      height: 642,
      tokenX: -77,
      tokenY: 63,
      tokenSize: 362,
    }),
    new ModuleNpc({
      id: "npc2",
      name: {
        page: 27,
        x: 422.5951,
        y: 397.962,
      },
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      page: 27,
      width: 517,
      height: 686,
      tokenX: -191,
      tokenY: -35,
      tokenSize: 182,
    }),
    new ModuleNpc({
      id: "npc3",
      name: {
        page: 27,
        x: 136.9831,
        y: 376.962,
      },
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      page: 27,
      width: 523,
      height: 698,
      tokenX: -155,
      tokenY: -25,
      tokenSize: 194,
    }),
    new ModuleNpc({
      id: "npc4",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.9auIrnhXBCHnO5Ww",
      page: 27,
      width: 599,
      height: 798,
      tokenX: 154,
      tokenY: -1,
      tokenSize: 798,
    }),
    new ModuleNpc({
      id: "npc5",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.RCCGR5wlfGNPkkBy",
      label: "FF",
    }),
    new ModuleNpc({
      id: "npc6",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.oOl4UOYKpGeS3Ep7",
      page: 28,
      width: 502,
      height: 621,
      tokenX: -124,
      tokenY: -16,
      tokenSize: 201,
    }),
    new ModuleNpc({
      id: "npc7",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.k9fM0vufbdsDPQul",
      label: "FM",
    }),
    new ModuleNpc({
      id: "npc8",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.xNn7kUg4GxyqCupT",
      label: "EF",
    }),
    new ModuleNpc({
      id: "npc9",
      actorUuid: "Compendium.pf2e.pathfinder-bestiary.Actor.HpD0BTfid3hnUEWj",
      label: "BS",
    }),
    new ModuleNpc({
      id: "npc10",
      name: {
        page: 20,
        x: 72.0599,
        y: 663,
      },
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.WQdWybW4owJWdEnQ",
      label: "FS",
    }),
    new ModuleNpc({
      id: "npc11",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.xN5J9S485LxFZMkL",
      label: "CR",
    }),
    new ModuleNpc({
      id: "npc12",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.vdXh2dETJ21UlgUg",
      label: "FF",
    }),
    new ModuleNpc({
      id: "npc13",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.xYByANF8t6zhxt4p",
      label: "VOAS",
    }),
    new ModuleNpc({
      id: "npc14",
      actorUuid: "Compendium.pf2e.pfs-season-3-bestiary.Actor.bW7iJLqP4AOvkMeu",
      label: "VOAE",
    }),
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Scenario #3-01" &&
        t.fontId === "GoodOT-Bold:15" &&
        t.page === 1,
    );
  }
  preprocess(text) {
    this.removeText(text, 3, 247.6608, 654.8302);
  }
  finalize(moduleData) {}
}
