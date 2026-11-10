// Builds data/legacy-names.json: pre-remaster spell and condition names mapped to current names.
// PF2e kept compendium ids when it renamed entries, so matching by id is exact.
// Usage: node tools/build-legacy-names.mjs <old-pf2e-checkout> <new-pf2e-checkout>
import { readFile, readdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";

const [oldRoot, newRoot] = process.argv.slice(2);
if (!newRoot)
  throw new Error(
    "Usage: build-legacy-names <old-pf2e-checkout> <new-pf2e-checkout>",
  );

async function* jsonFiles(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* jsonFiles(path);
    else if (entry.name.endsWith(".json")) yield path;
  }
}

async function names(dir) {
  const byId = new Map();
  for await (const file of jsonFiles(dir)) {
    const doc = JSON.parse(await readFile(file, "utf8"));
    if (doc._id && doc.name) byId.set(doc._id, doc.name);
  }
  return byId;
}

async function renames(oldDir, newDir) {
  const [before, after] = await Promise.all([names(oldDir), names(newDir)]);
  const map = {};
  for (const [id, name] of before) {
    const current = after.get(id);
    if (current && current !== name) map[name.toLowerCase()] = current;
  }
  return Object.fromEntries(Object.entries(map).sort());
}

/** Remaster renames where PF2e issued a new id, so the id comparison cannot find them. */
const RENAMED_WITH_NEW_ID = {
  spells: {
    tanglefoot: "Tangle Vine",
    "meld into stone": "One with Stone",
    "produce flame": "Ignition",
    "mage hand": "Telekinetic Hand",
    "burning hands": "Breathe Fire",
    "know direction": "Know the Way",
    "dancing lights": "Light",
    "obscuring mist": "Mist",
    barkskin: "Oaken Resilience",
    "calm emotions": "Calm",
    "dimension door": "Translocate",
    "magic fang": "Runic Body",
    "ray of frost": "Frostbite",
    "acid splash": "Caustic Blast",
    "shocking grasp": "Thunderstrike",
    "hideous laughter": "Laughing Fit",
    "faerie fire": "Revealing Light",
    "magic weapon": "Runic Weapon",
    "true strike": "Sure Strike",
    "magic aura": "Disguise Magic",
  },
  conditions: { "flat-footed": "Off-Guard" },
};

async function verified(table, dir) {
  const current = new Set((await names(dir)).values());
  const kept = {};
  for (const [legacy, name] of Object.entries(table)) {
    if (current.has(name)) kept[legacy] = name;
    else
      console.warn(`Skipped ${legacy}: "${name}" is not in the target release`);
  }
  return kept;
}

const conditionsDir = existsSync(join(oldRoot, "packs/conditions"))
  ? "packs/conditions"
  : "packs/conditionitems";
const result = {
  spells: await renames(
    join(oldRoot, "packs/spells"),
    join(newRoot, "packs/pf2e/spells"),
  ),
  conditions: await renames(
    join(oldRoot, conditionsDir),
    join(newRoot, "packs/pf2e/conditions"),
  ),
};
Object.assign(
  result.spells,
  await verified(
    RENAMED_WITH_NEW_ID.spells,
    join(newRoot, "packs/pf2e/spells"),
  ),
);
Object.assign(
  result.conditions,
  await verified(
    RENAMED_WITH_NEW_ID.conditions,
    join(newRoot, "packs/pf2e/conditions"),
  ),
);
result.spells = Object.fromEntries(Object.entries(result.spells).sort());
await writeFile(
  "data/legacy-names.json",
  `${JSON.stringify(result, null, 2)}\n`,
);
console.log(
  `spells ${Object.keys(result.spells).length}, conditions ${Object.keys(result.conditions).length}`,
);
