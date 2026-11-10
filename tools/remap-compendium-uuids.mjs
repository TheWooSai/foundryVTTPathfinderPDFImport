// Repoints adventure definitions at the current PF2e compendiums, by creature identity.
// Old ids come from the PF2e release the definitions were written for; new ids from the target release.
// Usage: node tools/remap-compendium-uuids.mjs <old-pf2e-checkout> <new-pf2e-checkout>
import { readFile, readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const [oldRoot, newRoot] = process.argv.slice(2);
if (!newRoot)
  throw new Error(
    "Usage: remap-compendium-uuids <old-pf2e-checkout> <new-pf2e-checkout>",
  );

const UUID = /Compendium\.pf2e\.([a-z0-9-]+)\.(?:Actor\.)?([A-Za-z0-9]{16})\b/g;
/** Where a remastered creature is most likely to have moved, best first. */
const PREFERRED = [
  "pathfinder-monster-core",
  "pathfinder-monster-core-2",
  "pathfinder-npc-core",
];
const norm = (s) => s.trim().toLocaleLowerCase();

async function* jsonFiles(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* jsonFiles(path);
    else if (entry.name.endsWith(".json")) yield path;
  }
}

async function readPacks(root) {
  const byPack = new Map();
  for (const entry of await readdir(root, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const pack = new Map();
    for await (const file of jsonFiles(join(root, entry.name))) {
      const doc = JSON.parse(await readFile(file, "utf8"));
      if (doc._id && doc.name)
        pack.set(doc._id, { name: doc.name, type: doc.type });
    }
    if (pack.size > 0) byPack.set(entry.name, pack);
  }
  return byPack;
}

const oldPacks = await readPacks(join(oldRoot, "packs"));
const newPacks = await readPacks(join(newRoot, "packs/pf2e"));
const packAliases = { "fall-of-plaguestone-bestiary": "fall-of-plaguestone" };
const lookup = (packs, name) => packs.get(name) ?? packs.get(packAliases[name]);
const reverseAlias = (dir) =>
  Object.entries(packAliases).find(([, v]) => v === dir)?.[0] ?? dir;

const byId = new Map();
const byName = new Map();
for (const [packName, pack] of newPacks) {
  for (const [id, doc] of pack) {
    if (!byId.has(id)) byId.set(id, packName);
    const key = `${doc.type}|${norm(doc.name)}`;
    if (!byName.has(key)) byName.set(key, []);
    byName.get(key).push({ pack: packName, id });
  }
}

function pickByName(type, name, oldPack) {
  const candidates = byName.get(`${type}|${norm(name)}`) ?? [];
  const rank = (c) => {
    if (c.pack === oldPack) return -1;
    const i = PREFERRED.indexOf(c.pack);
    return i === -1 ? PREFERRED.length : i;
  };
  return [...candidates].sort((a, b) => rank(a) - rank(b))[0];
}

function resolve(oldPack, id) {
  if (lookup(newPacks, oldPack)?.has(id))
    return { pack: oldPack, id, via: "unchanged" };
  if (byId.has(id))
    return { pack: reverseAlias(byId.get(id)), id, via: "moved-pack" };
  const old = lookup(oldPacks, oldPack)?.get(id);
  if (!old) return { via: "unknown-old-id" };
  const match = pickByName(old.type, old.name, oldPack);
  return match
    ? {
        pack: reverseAlias(match.pack),
        id: match.id,
        via: "same-name",
        name: old.name,
      }
    : { via: "no-equivalent", name: old.name };
}

async function* sourceFiles(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* sourceFiles(path);
    else if (entry.name.endsWith(".js")) yield path;
  }
}

const report = {};
const counts = {};
for await (const file of sourceFiles("src/adventures")) {
  const source = await readFile(file, "utf8");
  const updated = source.replace(UUID, (match, pack, id) => {
    const result = resolve(pack, id);
    const key = `Compendium.pf2e.${pack}.Actor.${id}`;
    if (!report[key]) {
      report[key] = result;
      counts[result.via] = (counts[result.via] ?? 0) + 1;
    }
    return result.pack
      ? `Compendium.pf2e.${result.pack}.Actor.${result.id}`
      : match;
  });
  if (updated !== source) await writeFile(file, updated);
}

const changes = Object.fromEntries(
  Object.entries(report).filter(([, r]) => r.via !== "unchanged"),
);
await writeFile(
  "data/compendium-remap.json",
  `${JSON.stringify(changes, null, 2)}\n`,
);
console.log(counts);
