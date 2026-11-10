import { BountyBase } from "./base.js";
import { CaptionImage } from "../../core/images.js";
import { ModuleNpc } from "../../core/module-npc.js";
import { ModuleScene } from "../../core/module-scene.js";

export class Bounty3 extends BountyBase {
  prefix = "bounty-3";
  fullName = "Bounty #3 - Shadows and Scarecrows";
  pages = [
    this.TwoColumnWithRightCutout(3, 320),
    this.TwoColumn(4),
    this.TwoColumn(5),
    this.TwoColumnWithRightCutout(7, 500),
    this.OneColumnHandout(9, "handout"),
  ];
  scenes = [
    new ModuleScene({
      name: "map1",
      nameInfo: {
        x: 74.4199,
        y: 667.4414,
      },
      nameFn: (name) => this.sentenceCase(name).substring(3).trim(),
      page: 6,
      width: 1060,
      height: 1325,
      imageLeft: 0,
      imageRight: 1060,
      imageCols: 24,
      imageTop: 0,
      imageBottom: 1325,
      imageRows: 30,
      globalLight: true,
      detailsFile: "/bounty/maps/bounty3-map1.json",
      journals: [],
      tokens: [
        {
          id: "npc2",
          x: 1100,
          y: 1200,
        },
        {
          id: "npc1",
          x: 2400,
          y: 1700,
        },
      ],
    }),
  ];
  journals = [
    new CaptionImage({
      name: "npc1",
      page: 8,
      width: 492,
      height: 567,
    }),
  ];
  npcs = [
    new ModuleNpc({
      id: "npc1",
      actorUuid: "Compendium.pf2e.pfs-season-2-bestiary.Actor.8Eywy3sqfECiULGl",
      label: "K",
      forIds: ["Nzo3Mjo1Nzk"],
    }),
    new ModuleNpc({
      id: "npc2",
      actorUuid: "Compendium.pf2e.pfs-season-2-bestiary.Actor.4DPuCgAisPyphiMN",
      label: "T",
      forIds: ["NTozMTI6MjE5"],
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
          id: "Mzo3MjoxNTk",
        },
        {
          id: "NDo3Mjo1NTU",
        },
        {
          id: "NTo3MjozMTU",
        },
        {
          id: "NTo3MjoxMzU",
        },
        {
          id: "NzozMTI6Mzg3",
        },
      ],
    },
    {
      name: "Handouts",
      pages: [
        {
          id: "npc1",
          name: "Wanted Poster",
        },
        {
          id: "OToyMTM6Njgy",
        },
      ],
    },
  ];
  combines = [
    {
      source: "NzozNDA6NjY4",
      dest: "NTo3MjoxMzU",
    },
  ];
  normalFontIds = this.normalFontIds.concat(["GoodOT:10"]);
  detect(pdf) {
    return pdf.textDetails.some(
      (t) =>
        t.text.trim() === "Shadows and Scarecrows" &&
        t.fontId === "HangingTree:40" &&
        t.page === 1,
    );
  }
  extractDetails(text, moduleData, sectionKey) {
    this.changeFontId(text, 4, 72, 687, "GoodOT-Bold:9");
    return super.extractDetails(text, moduleData, sectionKey);
  }
  finalize(moduleData) {}
}
