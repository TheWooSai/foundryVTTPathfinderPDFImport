import { OneShotBase } from "./base.js";
import { CaptionImage } from "../../core/images.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class HeadshotTheRot extends OneShotBase {
  prefix = "headshot-the-rot";
  fullName = "Head-Shot the Rot";
  pages = [
    this.TwoColumnWithRightCutout(3, 560),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumn(6),
    this.TwoColumn(7),
    this.TwoColumn(8),
    this.TwoColumn(9),
    this.TwoColumn(10),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      canonical: {
        name: "headshot-the-rot/map1",
        priority: 0,
      },
      nameInfo: {
        x: 23.25,
        y: 749.3004,
      },
      nameFn: (name) => this.sentenceCase(name),
      page: 14,
      width: 1257,
      height: 1634,
      imageLeft: 16,
      imageRight: 1242,
      imageCols: 32,
      imageTop: 29,
      imageBottom: 1601,
      imageRows: 41,
      offsetX: 0,
      offsetY: 0,
      globalLight: true,
      detailsFile: "/oneshot/maps/headshot-the-rot-map1.json",
      journals: [
        {
          x: 3250,
          y: 4250,
          id: "NDo2OToxNzE",
        },
        {
          x: 2100,
          y: 4050,
          id: "NTozMTE6OTk",
        },
        {
          x: 1400,
          y: 4e3,
          id: "NjozMTE6MjMx",
        },
        {
          x: 1600,
          y: 2400,
          id: "NzozMTE6MTQ3",
        },
        {
          x: 2850,
          y: 2300,
          id: "OTo2OTo0MzU",
        },
        {
          x: 2950,
          y: 3050,
          id: "OTozMTE6NjUx",
        },
        {
          x: 3550,
          y: 4750,
          id: "NTo2OTo1OTE",
        },
      ],
      tokens: [
        {
          id: "npc6",
          x: 3100,
          y: 3700,
        },
        {
          id: "npc6",
          x: 3300,
          y: 3900,
        },
        {
          id: "npc6",
          x: 3300,
          y: 3700,
        },
        {
          id: "npc6",
          x: 3100,
          y: 3800,
        },
        {
          id: "npc6",
          x: 3300,
          y: 3800,
        },
        {
          id: "npc6",
          x: 3200,
          y: 3900,
        },
        {
          id: "npc2",
          x: 3e3,
          y: 4400,
        },
        {
          id: "npc3",
          x: 2100,
          y: 4400,
        },
        {
          id: "npc1",
          x: 1400,
          y: 1700,
        },
        {
          id: "npc4",
          x: 1600,
          y: 1600,
        },
        {
          id: "npc5",
          x: 1700,
          y: 1800,
        },
        {
          id: "npc6",
          x: 1400,
          y: 2e3,
        },
        {
          id: "npc6",
          x: 1600,
          y: 2e3,
        },
        {
          id: "npc6",
          x: 1800,
          y: 2100,
        },
        {
          id: "npc6",
          x: 1700,
          y: 2200,
        },
        {
          id: "npc5",
          x: 3300,
          y: 2700,
        },
        {
          id: "npc5",
          x: 2600,
          y: 3200,
        },
        {
          id: "npc5",
          x: 3600,
          y: 3300,
        },
        {
          id: "npc6",
          x: 3600,
          y: 2700,
        },
        {
          id: "npc6",
          x: 3400,
          y: 3100,
        },
        {
          id: "npc6",
          x: 3e3,
          y: 2700,
        },
        {
          id: "npc6",
          x: 2400,
          y: 2600,
        },
        {
          id: "npc6",
          x: 1900,
          y: 3400,
        },
        {
          id: "npc6",
          x: 2600,
          y: 3600,
        },
      ],
    }),
  ];
  journals = [
    new CaptionImage({
      name: "journal1",
      page: 1,
      width: 1257,
      height: 790,
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.oNR29GreK0AxLucN",
      name: {
        page: 3,
        x: 224.8649,
        y: 118.3414,
        sentenceCase: true,
      },
      page: 3,
      width: 708,
      height: 1153,
      tokenX: -280,
      tokenY: -12,
      tokenSize: 341,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid: "Compendium.pf2e.npc-gallery.Actor.6IADTZHYowxObqAk",
      name: {
        page: 4,
        x: 284.128,
        y: 424.1956,
        sentenceCase: true,
      },
      page: 4,
      width: 500,
      height: 530,
      tokenX: -49,
      tokenY: 66,
      tokenSize: 334,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc3",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.qCKNT6U8O0su578A",
      name: {
        page: 5,
        x: 292.4,
        y: 418.1956,
        sentenceCase: true,
      },
      page: 5,
      width: 636,
      height: 625,
      tokenX: -88,
      tokenY: 38,
      tokenSize: 440,
      forIds: [],
    }),
    new ModuleNpc({
      id: "npc4",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.oNR29GreK0AxLucN",
      label: "H",
      forIds: ["ODo2OToxMjM"],
    }),
    new ModuleNpc({
      id: "npc5",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.aWiTcxAySoYjUP6T",
      label: "PZ",
      forIds: ["ODozMTE6NDIz", "OTozMTE6MjE5"],
    }),
    new ModuleNpc({
      id: "npc6",
      actorUuid:
        "Compendium.pf2e.pathfinder-monster-core.Actor.Xo4IGzw28hivgMmM",
      label: "ZS",
      forIds: ["ODozMTE6MTM1", "NDozNjg6NDEx", "MTA6Njk6NTY3"],
    }),
    new ModuleNpc({
      id: "pc1",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 11,
        x: 121.7558,
        y: 401.1372,
      },
      page: 11,
      width: 506,
      height: 620,
      tokenX: -229,
      tokenY: -2,
      tokenSize: 144,
      forIds: [],
    }),
    new ModuleNpc({
      id: "pc2",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 11,
        x: 354.2359,
        y: 401.1372,
      },
      page: 11,
      width: 537,
      height: 615,
      tokenX: -275,
      tokenY: -13,
      tokenSize: 139,
      forIds: [],
    }),
    new ModuleNpc({
      id: "pc3",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 11,
        x: 147.2455,
        y: 57.232,
      },
      page: 11,
      width: 514,
      height: 470,
      tokenX: -165,
      tokenY: 3,
      tokenSize: 290,
      forIds: [],
    }),
    new ModuleNpc({
      id: "pc4",
      actorUuid: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
      name: {
        page: 11,
        x: 385.0556,
        y: 57.232,
      },
      page: 11,
      width: 498,
      height: 639,
      tokenX: -188,
      tokenY: -6,
      tokenSize: 135,
      forIds: [],
    }),
  ];
  blacklistedFonts = this.blacklistedFonts.concat(["Roadkill-Alternates:18"]);
  headingFontIds = this.headingFontIds.concat([
    "Roadkill-Heavy:20",
    "GoodOT-CondBold:12",
  ]);
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Pathfinder One-Shot: Head-Shot the Rot" &&
        t.fontId === "SabonLTStd-Italic:9" &&
        t.page === 2,
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    if (sectionKey === "") {
      text.shift();
      text.unshift(this.getFakeText("Introduction", "Baldur:19"));
    }
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
