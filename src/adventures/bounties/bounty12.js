import { BountyBase } from "./base.js";
import { LabelImage } from "../../core/images.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class Bounty12 extends BountyBase {
  prefix = "bounty-12";
  fullName = "Bounty #12 - Somewhere Below";
  pages = [
    this.TwoColumnWithRightCutout(3, 300),
    this.TwoColumnWithRightCutout(4, 540),
    this.TwoColumn(6),
    this.TwoColumn(7),
    this.TwoColumnWithRightCutout(8, 560),
    this.TwoColumn(9),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      canonical: {
        name: "flipmat/twisted-caverns",
        priority: 0,
      },
      nameInfo: {
        x: 72,
        y: 673.1213,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 5,
      width: 1045,
      height: 1305,
      imageLeft: 38,
      imageRight: 1010,
      imageCols: 22,
      imageTop: 33,
      imageBottom: 1270,
      imageRows: 28,
      rotateCW: 2,
      offsetX: -1,
      offsetY: -1,
      globalLight: true,
      detailsFile: "/flipmats/maps/twisted-caverns.json",
      journals: [
        {
          x: 2750,
          y: 1e3,
          id: "NDo3MjoyMDc",
          text: "",
        },
        {
          x: 1650,
          y: 1500,
          id: "NjozNjY6Njg3",
          text: "",
        },
        {
          x: 950,
          y: 1350,
          id: "NjozNjY6Njg3",
          text: "",
        },
        {
          x: 2350,
          y: 2750,
          id: "NjozNjY6Njg3",
          text: "",
        },
        {
          x: 1550,
          y: 3450,
          id: "NjozNjY6Njg3",
          text: "",
        },
        {
          x: 1650,
          y: 2250,
          id: "Nzo3Mjo2ODc",
          text: "",
        },
      ],
      tokens: [
        {
          id: "npc7",
          x: 1800,
          y: 1500,
        },
        {
          id: "npc7",
          x: 2100,
          y: 2800,
        },
        {
          id: "npc7",
          x: 700,
          y: 1700,
        },
        {
          id: "npc7",
          x: 1500,
          y: 3600,
        },
      ],
    }),
  ];
  journals = [
    new LabelImage({
      name: "journal1",
      page: 10,
      width: 452,
      height: 553,
      label: "MTA6MTU0OjM5OQ",
    }),
    new LabelImage({
      name: "journal2",
      page: 7,
      width: 741,
      height: 917,
      label: "NzoxMTc6ODY",
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 6,
        x: 282.5981,
        y: 471.875,
      },
      page: 6,
      width: 383,
      height: 468,
      tokenX: -31,
      tokenY: 68,
      tokenSize: 356,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.KH1GkazaI59zftst",
      label: "CH",
      forIds: ["ODozMTI6MzM5"],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core-2.Actor.4SfnQzORMdmBsp49",
      label: "DS",
      forIds: ["Njo3MjozNjM"],
    }),
    new ModuleNpc({
      id: "npc4",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.NRBgcu0LkXXp8mtp",
      label: "GC",
      forIds: ["NDozMTI6MjU1"],
    }),
    new ModuleNpc({
      id: "npc5",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.iIJPJcDT8wlJ8z5M",
      label: "GR",
      forIds: ["Njo3Mjo2NjM"],
    }),
    new ModuleNpc({
      id: "npc6",
      actorUuid: "Compendium.pf2e.pfs-season-2-bestiary.Actor.mfvNh0UBzR1vXHRW",
      label: "HoSD",
      forIds: ["ODo3MjoyMzE"],
    }),
    new ModuleNpc({
      id: "npc7",
      actorUuid: "Compendium.pf2e.hazards.Actor.vTdWEBzJzltMM6r4",
      label: "S",
      forIds: ["NjozMTI6NDM1"],
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
          id: "Mzo3MjoyMDc",
        },
        {
          id: "NDo3Mjo2NzU",
        },
        {
          id: "NDo3MjoyMDc",
        },
        {
          id: "NjozNjY6Njg3",
        },
        {
          id: "Nzo3Mjo2ODc",
        },
        {
          id: "ODo3Mjo1OTE",
        },
        {
          id: "OTo3Mjo2Mzk",
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
          id: "journal2",
        },
      ],
    },
  ];
  combines = [
    {
      source: "NDozNTY6NjY4",
      dest: "NDo3MjoyMDc",
    },
    {
      source: "ODozNTQ6NjY4",
      dest: "ODo3Mjo1OTE",
    },
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Somewhere Below" &&
        t.fontId === "HangingTree:40" &&
        t.page === 1,
    );
  }
  preprocess(text) {
    this.removeText(text, 3, 251.4707, 654.8302);
    for (let i = 0; i < text.length; i++) {
      text[i].fontId === "GoodOT-Bold:13" &&
        (text[i].text.match(/^[ABCDEFG]\d*\./) ||
          text[i].text.match(/^EVENT/)) &&
        ((text[i].fontId = "HangingTree:20"),
        (text[i].fontName = "HangingTree"),
        (text[i].fontSize = 20));
    }
  }
  finalize(moduleData) {}
}
