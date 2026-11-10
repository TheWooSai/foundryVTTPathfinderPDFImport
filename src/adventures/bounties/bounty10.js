import { BountyBase } from "./base.js";
import { CaptionImage } from "../../core/images.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class Bounty10 extends BountyBase {
  prefix = "bounty-10";
  fullName = "Bounty #10 - Hillcross Roundup";
  pages = [
    this.TwoColumnWithRightCutout(3, 260),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumnWithRightCutout(7, 540),
    this.TwoColumn(8),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      canonical: {
        name: "flipmat/ambush-sites4",
        priority: 0,
      },
      nameInfo: {
        x: 72.4808,
        y: 673.1213,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3),
      page: 6,
      width: 1045,
      height: 1305,
      imageLeft: 36,
      imageRight: 1008,
      imageCols: 22,
      imageTop: 34,
      imageBottom: 1271,
      imageRows: 28,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/bounty/maps/bounty10-map1.json",
      journals: [
        {
          x: 627,
          y: 1078,
          id: "NTozMTI6MzAz",
          text: "",
        },
      ],
      tokens: [
        {
          id: "npc2",
          x: 1400,
          y: 2100,
        },
        {
          id: "npc1",
          x: 1550,
          y: 2150,
        },
        {
          id: "npc3",
          x: 1100,
          y: 1600,
        },
      ],
    }),
  ];
  journals = [
    new CaptionImage({
      name: "journal1",
      page: 9,
      width: 452,
      height: 553,
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.uzH85ifDz5GU525p",
      label: "C",
      forIds: ["NzozMTI6NDcx"],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid: "Compendium.pf2e.pfs-season-2-bestiary.Actor.0OnpbW2SdOZXdRgw",
      uniqueKey:
        "Compendium.pf2e.pathfinder-monster-core.Actor.httXfBPGseF9csXa",
      label: "G",
      forIds: ["NzozMTI6Mjkx"],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.qtJ36jlcRQw5sBnr",
      page: 5,
      width: 442,
      height: 474,
      tokenX: 129,
      tokenY: 52,
      tokenSize: 502,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc4",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 4,
        x: 287.9259,
        y: 459.875,
      },
      page: 4,
      width: 439,
      height: 442,
      tokenX: 57,
      tokenY: 74,
      tokenSize: 554,
      forIds: [],
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
          id: "Mzo3MjoxNzE",
        },
        {
          id: "NDo3MjozOTk",
        },
        {
          id: "NTozMTI6MzAz",
        },
        {
          id: "ODo3Mjo0NzE",
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
      source: "NzozNTg6NjY4",
      dest: "NTozMTI6MzAz",
    },
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Hillcross Roundup" &&
        t.fontId === "HangingTree:40" &&
        t.page === 1,
    );
  }
  preprocess(text) {
    this.removeText(text, 3, 251.4707, 654.8302);
  }
  finalize(moduleData) {}
}
