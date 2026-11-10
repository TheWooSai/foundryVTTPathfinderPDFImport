import assert from "node:assert/strict";
import { test } from "node:test";
import { withAdjustedDelta } from "../src/foundry/scene-data.js";
import {
  AdventureImporter,
  adjustmentOf,
} from "../src/importer/adventure-importer.js";

const actorData = () => ({
  name: "Nightmare",
  flags: {},
  system: {
    traits: { value: ["fiend"] },
    attributes: { adjustment: null, hp: { value: 100 } },
  },
  prototypeToken: { texture: {} },
});

function importer(world) {
  const env = {
    world: {
      actorDataFromUuid: async () => actorData(),
      compendiumArt: () => undefined,
      createActor: async (data) => ({ id: "a1", ...data }),
      scenes: () => [],
      createScene: async () => ({ id: "s1" }),
      refreshThumbnail: async () => {},
      ...world,
    },
    settings: { get: () => false },
    artDb: { getTokenArt: () => undefined, setTokenArt() {} },
  };
  return new AdventureImporter({ prefix: "test", npcs: [] }, env);
}

const details = (flags) => ({
  id: "npc1",
  folder: "f",
  img: "i",
  token: "t",
  npc: {
    uniqueKey: "k",
    isPlaceholderArt: () => true,
    shouldBeReplacedByArt: () => false,
  },
  ...flags,
});

test("adjustmentOf reads definition and token flags", () => {
  assert.equal(adjustmentOf({ elite: true }), "elite");
  assert.equal(adjustmentOf({ weak: true }), "weak");
  assert.equal(adjustmentOf({ elite: false, weak: false }), null);
  assert.equal(adjustmentOf({}), null);
});

test("elite creatures use the PF2e adjustment field and the HP PF2e calculates", async () => {
  const calls = [];
  const run = importer({
    computeAdjustment: async (data, adjustment) => {
      calls.push([data.name, adjustment]);
      return { adjustment, hpValue: 120 };
    },
  });
  const created = await run.importActor("uuid", details({ elite: true }));
  assert.deepEqual(calls, [["Nightmare", "elite"]]);
  assert.equal(created.system.attributes.adjustment, "elite");
  assert.equal(created.system.attributes.hp.value, 120);
  assert.deepEqual(created.system.traits.value, ["fiend"]);
});

test("ordinary creatures are not adjusted", async () => {
  const run = importer({
    computeAdjustment: async () => assert.fail("should not be called"),
  });
  const created = await run.importActor(
    "uuid",
    details({ elite: false, weak: false }),
  );
  assert.equal(created.system.attributes.adjustment, null);
});

test("an actor type without adjustments is reported, not failed", async () => {
  const run = importer({ computeAdjustment: async () => null });
  await run.importActor("uuid", details({ weak: true, name: "Trap" }));
  assert.match(run.additionalMessages, /Trap cannot be made weak/);
});

test("token placements carry their own adjustment", async () => {
  let placements;
  const run = importer({
    createTokens: async (_scene, list) => (placements = list),
  });
  run.npcActors.a = { id: "a" };
  run.npcActors.b = { id: "b" };
  await run.createScene({}, undefined, undefined, [
    { id: "a", x: 1, y: 2, elite: true },
    { id: "b", x: 3, y: 4 },
  ]);
  assert.deepEqual(
    placements.map((p) => p.adjustment),
    ["elite", null],
  );
});

test("a token delta adjusts one token and keeps its other changes", () => {
  const token = {
    x: 1,
    delta: { name: "Boss", system: { attributes: { ac: { value: 3 } } } },
  };
  const result = withAdjustedDelta(token, { adjustment: "weak", hpValue: 80 });
  assert.deepEqual(result.delta, {
    name: "Boss",
    system: {
      attributes: { ac: { value: 3 }, adjustment: "weak", hp: { value: 80 } },
    },
  });
  assert.equal(token.delta.system.attributes.adjustment, undefined);
});
