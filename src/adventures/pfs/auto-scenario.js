import { LabelImage } from "../../core/images.js";
import { ModuleScene } from "../../core/module-scene.js";
import { PFSAutoLayoutBase } from "./auto-layout-base.js";
import {
  findBattleMaps,
  findGameAids,
  identifyScenario,
  sceneSettings,
  slugify,
} from "./scenario-analysis.js";

/** Lowest season whose layout PFSAutoLayoutBase was built and tested on. */
const FIRST_AUTO_SEASON = 4;

/**
 * Fallback for PFS scenarios from season 4 on that have no definition. Everything is read
 * from the PDF during the import: layout, maps and their grids, and game aids. Creatures
 * come from the stat blocks. It is checked after every definition, so a hand-made
 * definition always wins.
 */
export class PFSAutoScenario extends PFSAutoLayoutBase {
  prefix = "pfs-auto";
  fullName = "PFS scenario";
  isAutomatic = true;
  scenes = [];
  journals = [];

  detect(pdf) {
    const identity = identifyScenario(pdf);
    if (!identity || identity.season < FIRST_AUTO_SEASON) return false;
    const id = `${identity.season}-${identity.number}`;
    this.prefix = `pfs-${id}`;
    this.fullName = `PFS #${id} - ${identity.title}`;
    return true;
  }

  async extractImageJournals(pdf, moduleData, output) {
    this.progressFn?.("Measuring map grids", 0);
    const maps = await findBattleMaps(pdf);
    this.scenes = maps.map(
      (map, index) =>
        new ModuleScene({
          ...sceneSettings(map, index),
          ...(map.label ? { nameFn: (name) => this.sentenceCase(name) } : {}),
        }),
    );
    this.journals = findGameAids(pdf).map(
      (aid) =>
        new LabelImage({
          name: slugify(aid.name),
          page: aid.page,
          width: aid.width,
          height: aid.height,
          label: aid.label,
        }),
    );
    output.additionalMessages +=
      "<br>This scenario has no hand-checked definition, so its layout and map grids were detected automatically. Check each map's grid size before play.";
    return super.extractImageJournals(pdf, moduleData, output);
  }
}
