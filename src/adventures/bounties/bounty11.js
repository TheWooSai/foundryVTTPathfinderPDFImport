import { BountyBase } from "./base.js";
import { CaptionImage } from "../../core/images.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class Bounty11 extends BountyBase {
  prefix = "bounty-11";
  fullName = "Bounty #11 - Forged Facade";
  pages = [
    this.TwoColumnWithRightCutout(3, 310),
    this.TwoColumn(4),
    this.TwoColumn(6),
    this.TwoColumn(7),
    this.TwoColumnWithRightCutout(8, 510),
    this.TwoColumn(9),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      canonical: {
        name: "flipmat/asylum2",
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
      imageLeft: 36,
      imageRight: 1008,
      imageCols: 22,
      imageTop: 34,
      imageBottom: 1271,
      imageRows: 28,
      offsetX: -2,
      offsetY: -1,
      globalLight: true,
      detailsFile: "/flipmats/maps/asylum2.json",
      journals: [
        {
          x: 1700,
          y: 1900,
          name: "A1.",
        },
        {
          x: 2800,
          y: 1900,
          name: "A2.",
        },
        {
          x: 1800,
          y: 3400,
          name: "A3.",
        },
        {
          x: 2400,
          y: 3400,
          name: "A4.",
        },
      ],
      tokens: [
        {
          id: "npc1",
          x: 2200,
          y: 2700,
        },
        {
          id: "npc2",
          x: 2300,
          y: 2900,
        },
        {
          id: "npc2",
          x: 2300,
          y: 2500,
        },
      ],
    }),
  ];
  journals = [
    new CaptionImage({
      name: "journal1",
      page: 10,
      width: 452,
      height: 552,
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.PBb2WprHhEIQE9jN",
      name: {
        page: 8,
        x: 72.0599,
        y: 243,
        sentenceCase: true,
      },
      label: "BC",
      forIds: ["ODo3MjoyNDM"],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.3jkmJgV4zwygUqLy",
      label: "B",
      forIds: ["ODozMTI6Mzk5"],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 6,
        x: 128.8515,
        y: 85.975,
      },
      page: 6,
      width: 771,
      height: 1072,
      tokenX: -135,
      tokenY: 91,
      tokenSize: 428,
      forIds: [],
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
          id: "MzozMTI6MzAz",
        },
        {
          id: "NDozMTI6Njc1",
        },
        {
          id: "Njo3Mjo2ODc",
        },
        {
          id: "NjozMTI6NDU5",
        },
        {
          id: "NjozNDQ6MTM1",
        },
        {
          id: "Nzo3MjozOTk",
        },
        {
          id: "NzozMTI6Njg3",
        },
        {
          id: "OTo3Mjo2NTE",
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
      source: "ODozNDA6NjY5",
      dest: "NzozMTI6Njg3",
    },
  ];
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Forged Facade" &&
        t.fontId === "HangingTree:40" &&
        t.page === 1,
    );
  }
  preprocess(text) {
    this.removeText(text, 3, 245.4605, 654.8302);
    for (let i = 0; i < text.length; i++) {
      text[i].fontId === "GoodOT-Bold:13" &&
        (text[i].text.match(/^[ABCDEFG]\d*\./) ||
          text[i].text.match(/^EVENT/)) &&
        ((text[i].fontId = "HangingTree:20"),
        (text[i].fontName = "HangingTree"),
        (text[i].fontSize = 20));
    }
    this.changeFontId(text, 7, 458.654, 687, "HangingTree:20");
  }
  finalize(moduleData) {}
}
