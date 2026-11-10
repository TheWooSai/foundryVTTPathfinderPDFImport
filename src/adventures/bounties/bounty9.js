import { BountyBase } from "./base.js";
import { AdventureImage } from "../../core/images.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class Bounty9 extends BountyBase {
  prefix = "bounty-9";
  fullName = "Bounty #9 - Fishing in Anthusis";
  pages = [
    this.TwoColumnWithRightCutout(3, 320),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumnWithLeftCutout(6, 540),
    this.TwoColumn(8),
    this.OneColumn(10, "handout"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      canonical: {
        name: "flipmat/docks",
        priority: 0,
      },
      nameInfo: {
        x: 72,
        y: 680.9006,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3),
      page: 7,
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
      detailsFile: "/bounty/maps/bounty9-map1.json",
      tokens: [
        {
          id: "npc1",
          x: 2300,
          y: 1400,
        },
        {
          id: "npc1",
          x: 2400,
          y: 2e3,
        },
      ],
    }),
  ];
  journals = [
    new AdventureImage({
      name: "journal1",
      page: 9,
      width: 457,
      height: 555,
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid: "Compendium.pf2e.pfs-season-2-bestiary.Actor.zLeePJplf25baqJa",
      page: 9,
      width: 641,
      height: 519,
      tokenX: -90,
      tokenY: 27,
      tokenSize: 501,
      forIds: ["NjozMTI6NDIz"],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 4,
        x: 286.1578,
        y: 459.875,
      },
      page: 4,
      width: 439,
      height: 439,
      tokenX: 39,
      tokenY: 53,
      tokenSize: 495,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 5,
        x: 282.2225,
        y: 474.5324,
      },
      page: 5,
      width: 414,
      height: 414,
      tokenX: 60,
      tokenY: 66,
      tokenSize: 498,
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
          id: "Mzo3MjoxODM",
        },
        {
          id: "NDo3MjoxOTU",
        },
        {
          id: "ODo3MjozMTU",
        },
        {
          id: "MzozNTg6NTQ4",
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
          id: "MTA6MTgxOjY4Mg",
          name: "{MzozNzY6OTk:0:23}",
        },
      ],
    },
  ];
  combines = [
    {
      source: "NjoxMTg6NjY4",
      dest: "NDo3MjoxOTU",
    },
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Fishing in Anthusis" &&
        t.fontId === "HangingTree:40" &&
        t.page === 1,
    );
  }
  preprocess(text) {
    this.removeText(text, 3, 227.2812, 654.8302);
  }
  finalize(moduleData) {}
}
