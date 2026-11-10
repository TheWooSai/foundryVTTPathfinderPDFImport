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

/**
 * Lowest season accepted. Seasons 2 and 3 matched or beat their definitions in tools/regress.mjs;
 * season 1 covers do not carry the "Scenario #N-NN" text this reads.
 */
const FIRST_AUTO_SEASON = 2;

/**
 * Fallback for PFS scenarios from season 2 on that have no definition. Everything is read
 * from the PDF during the import: layout, maps and their grids, and game aids. Creatures
 * come from the stat blocks. It is checked after every definition, so a hand-made
 * definition always wins.
 */
export class PFSAutoScenario extends PFSAutoLayoutBase {
  prefix = "pfs-auto";
  fullName = "PFS scenario";
  isAutomatic = true;
  /** Lowest season accepted; tests lower it to compare older seasons. */
  firstSeason = FIRST_AUTO_SEASON;
  scenes = [];
  journals = [];

  detect(pdf) {
    const identity = identifyScenario(pdf);
    if (!identity || identity.season < this.firstSeason) return false;
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
    const uncertain = maps.filter((map) => map.grid.uncertain);
    output.additionalMessages += uncertain.length
      ? `<br>Map grids were detected automatically. Check these before play: ${uncertain
          .map(
            (map) =>
              `${map.label?.text.trim() ?? "map"} (page ${map.page}: ${map.grid.reasons.join("; ")})`,
          )
          .join(", ")}.`
      : "<br>Map grids were detected automatically and passed every check. If tokens look the wrong size, adjust the scene grid.";
    return super.extractImageJournals(pdf, moduleData, output);
  }
}
