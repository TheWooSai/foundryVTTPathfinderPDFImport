import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { test } from "node:test";
import {
  getAdventureModule,
  getAllAdventureModules,
} from "../src/adventures/index.js";

const mapFiles = () =>
  readdirSync("public", { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .flatMap((d) => {
      try {
        return readdirSync(join("public", d.name, "maps")).map((f) =>
          join("public", d.name, "maps", f),
        );
      } catch {
        return [];
      }
    });

test("every stored wall uses values Foundry v14 accepts", () => {
  const files = mapFiles();
  assert.ok(files.length > 480);
  for (const file of files) {
    for (const wall of JSON.parse(readFileSync(file, "utf8")).walls ?? []) {
      assert.equal("sense" in wall, false, file);
      assert.ok([0, 20].includes(wall.move ?? 20), file);
    }
  }
});

test("adventures are named and have well-formed compendium links", () => {
  const adventures = getAllAdventureModules();
  assert.ok(adventures.length > 150);
  // Flip-mat companions deliberately share their adventure's prefix.
  assert.ok(adventures.every((a) => a.prefix && a.fullName));
  for (const adventure of adventures) {
    for (const npc of adventure.npcs) {
      assert.match(
        npc.actorUuid,
        /^Compendium\.pf2e\.[a-z0-9-]+\.Actor\.[A-Za-z0-9]{16}$/,
        npc.actorUuid,
      );
    }
  }
});

test("details files referenced by scenes exist", () => {
  for (const adventure of getAllAdventureModules()) {
    for (const scene of adventure.scenes) {
      if (scene.detailsFile) readFileSync(join("public", scene.detailsFile));
    }
  }
});

test("PFS 3-17 is detected from its cover text", () => {
  const pdf = {
    textDetails: [
      { text: "Scenario #3-17 ", fontId: "GoodOT-Bold:15", page: 1 },
    ],
  };
  assert.equal(getAdventureModule(pdf)?.prefix, "pfs-3-17");
});

test("the remap record keeps every creature that has no remastered equivalent", () => {
  const remap = JSON.parse(readFileSync("data/compendium-remap.json", "utf8"));
  const unresolved = Object.values(remap).filter(
    (r) => r.via === "no-equivalent",
  );
  assert.ok(unresolved.every((r) => r.name));
});

test("season 4-7 scenarios are detected from their cover text", () => {
  const cases = {
    "4-04": "4-04",
    "4-16": "4-16",
    "5-19": "5-19",
    "6-15": "6-15",
    "7–03": "7-03",
    "7-05": "7-05",
  };
  for (const [printed, id] of Object.entries(cases)) {
    const pdf = {
      textDetails: [
        { text: `Scenario #${printed} `, fontId: "GoodOT-Bold:16", page: 1 },
      ],
    };
    assert.equal(getAdventureModule(pdf)?.prefix, `pfs-${id}`, printed);
  }
});
