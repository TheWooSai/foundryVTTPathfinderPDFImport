import { BountyBase } from "./base.js";
import { AdventureImage } from "../../core/images.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class Bounty7 extends BountyBase {
  prefix = "bounty-7";
  fullName = "Bounty #7 - Cleanup Duty";
  pages = [
    this.TwoColumnWithRightCutout(3, 320),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumnWithRightCutout(7, 550),
    this.TwoColumnWithLeftCutout(8, 510),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      canonical: {
        name: "flip-mat/asylum1",
        priority: 0,
      },
      nameInfo: {
        x: 71.5192,
        y: 662.9761,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3),
      page: 6,
      width: 1045,
      height: 1305,
      imageLeft: 37,
      imageRight: 1011,
      imageCols: 22,
      imageTop: 34,
      imageBottom: 1271,
      imageRows: 28,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/bounty/maps/bounty7-map1.json",
      journals: [
        {
          x: 1850,
          y: 2250,
          id: "NTo3MjoyNzk",
          text: "",
        },
        {
          x: 1100,
          y: 2150,
          id: "Nzo3Mjo0OTU",
          text: "",
        },
        {
          x: 1150,
          y: 1550,
          id: "Nzo3MjoxMjM",
          text: "",
        },
      ],
      tokens: [
        {
          id: "npc1",
          x: 2400,
          y: 2200,
        },
        {
          id: "npc3",
          x: 2200,
          y: 1500,
        },
        {
          id: "npc2",
          x: 900,
          y: 1400,
        },
        {
          id: "npc4",
          x: 1500,
          y: 2e3,
        },
        {
          id: "npc4",
          x: 1400,
          y: 2400,
        },
      ],
    }),
  ];
  journals = [
    new AdventureImage({
      name: "journal1",
      page: 9,
      width: 512,
      height: 512,
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid: "Compendium.pf2e.pfs-season-2-bestiary.Actor.9mKcQFcY4Y1g5kJt",
      label: "AOP",
      forIds: ["NTozMTI6NTQz"],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 4,
        x: 278.882,
        y: 428.925,
      },
      page: 8,
      width: 484,
      height: 559,
      tokenX: 49,
      tokenY: 68,
      tokenSize: 475,
      forIds: ["ODo3MjozNTE"],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.9InGpxq5xbbHaL9f",
      label: "SO",
      forIds: ["NTozMTI6MTgz"],
    }),
    new ModuleNpc({
      id: "npc4",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.9InGpxq5xbbHaL9f",
      label: "SO",
      forIds: ["Nzo3MjoyNTU"],
      weak: true,
    }),
    new ModuleNpc({
      id: "npc5",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 4,
        x: 278.882,
        y: 428.925,
      },
      page: 4,
      width: 484,
      height: 559,
      tokenX: 47,
      tokenY: 28,
      tokenSize: 559,
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
          id: "Mzo3MjoyNTU",
        },
        {
          id: "MzozMTI6MjY3",
        },
        {
          id: "NTo3Mjo2ODc",
        },
        {
          id: "NTo3MjoyNzk",
        },
        {
          id: "Nzo3Mjo0OTU",
        },
        {
          id: "Nzo3MjoxMjM",
        },
        {
          id: "ODo3MjoxNDc",
        },
      ],
    },
    {
      name: "Handouts",
      pages: [
        {
          id: "journal1",
        },
      ],
    },
  ];
  combines = [
    {
      source: "NzozNTU6NjY5",
      dest: "Nzo3Mjo0OTU",
    },
    {
      source: "ODo5Mjo2Njg",
      dest: "Nzo3MjoxMjM",
    },
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Cleanup Duty" &&
        t.fontId === "HangingTree:40" &&
        t.page === 1,
    );
  }
  preprocess(text) {
    this.removeText(text, 3, 236.7611, 654.8302);
    this.changeFontId(text, 4, 72, 87, "GoodOT-Bold:9");
    for (let i = 0; i < text.length; i++) {
      text[i].fontId === "GoodOT-Bold:13" &&
        text[i].text.match(/^[ABCDEFG]\d*\./) &&
        ((text[i].fontId = "HangingTree:20"),
        (text[i].fontName = "HangingTree"),
        (text[i].fontSize = 20));
    }
  }
}
