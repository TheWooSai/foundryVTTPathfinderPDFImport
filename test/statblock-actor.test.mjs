import assert from "node:assert/strict";
import { test } from "node:test";
import {
  attachSpells,
  compactName,
  convertStatBlock,
  creatureNameCandidates,
  rewriteLegacyLinks,
  singularize,
  statBlockKey,
} from "../src/importer/statblock-actor.js";

let counter = 0;
const context = (overrides = {}) => ({
  adventurePrefix: "pfs-1-14",
  adventureTitle: "PFS #1-14",
  randomId: () => `id${counter++}`,
  rewriteLinks: (text) => text,
  vocabulary: {
    immunities: new Set(["poison"]),
    weaknesses: new Set(["cold-iron", "vitality"]),
    resistances: new Set(["fire"]),
    senses: new Set(["darkvision", "scent"]),
    languages: new Set(["common"]),
    creatureTraits: new Set(["animal"]),
  },
  ...overrides,
});

const npc = () => ({
  id: "heading1",
  qty: "2",
  name: "Cinder Wolves",
  type: "npc",
  data: {
    abilities: {
      str: { mod: 4 },
      dex: { mod: 2 },
      con: { mod: 1 },
      int: { mod: -4 },
      wis: { mod: 2 },
      cha: { mod: 0 },
    },
    saves: {
      fortitude: { value: 9, saveDetail: "" },
      reflex: { value: 11, saveDetail: "" },
      will: { value: 7, saveDetail: "+1 vs fear" },
    },
    attributes: {
      ac: { value: 18, details: "" },
      allSaves: { value: "" },
      hp: { value: 45, max: 45, details: "" },
      perception: { value: 9 },
      speed: { value: "35 feet, climb 10 feet" },
    },
    details: { level: { value: 3 } },
    traits: {
      size: { value: "lg" },
      senses: { value: "darkvision, scent (imprecise) 30 feet, wavesense" },
      value: ["animal", "madeup"],
      languages: { value: ["Common", "Wolfish"], custom: "" },
      di: { value: ["poison", "death-effects"], custom: "" },
      dr: [{ type: "fire", value: 5, exceptions: "" }],
      dv: [{ type: "positive", value: 3, exceptions: "" }],
      rarity: { value: "uncommon" },
    },
  },
  items: [
    { name: "Stealth", type: "lore", data: { mod: { value: 8 } } },
    {
      name: "Forest Lore",
      type: "lore",
      img: "i",
      data: { mod: { value: 5 } },
    },
    {
      name: "Jaws",
      type: "melee",
      img: "m",
      data: {
        weaponType: { value: "melee" },
        bonus: { value: 11 },
        damageRolls: { a: { damage: "1d8+4", damageType: "negative" } },
        traits: { value: ["agile"] },
        attackEffects: { value: ["Knockdown"] },
        description: { value: "" },
      },
    },
    {
      name: "Spit",
      type: "melee",
      img: "m",
      data: {
        weaponType: { value: "ranged" },
        bonus: { value: 8 },
        damageRolls: {},
        traits: { value: ["range-increment-30"] },
        attackEffects: { value: [] },
        description: { value: "" },
      },
    },
    {
      name: "Pounce",
      type: "action",
      img: "a",
      data: {
        actionType: { value: "action" },
        actions: { value: "2" },
        actionCategory: { value: "offensive" },
        traits: { value: [] },
        description: { value: "x" },
      },
    },
    {
      name: "Divine Prepared Spells",
      type: "spellcastingEntry",
      data: {
        prepared: { value: "prepared" },
        spelldc: { dc: 20, value: 12 },
        slots: {
          slot0: { prepared: { 0: "light" } },
          slot1: { prepared: { 0: "heal", 1: "heal" } },
          slot2: { prepared: {} },
        },
      },
    },
    {
      name: "rope",
      type: "equipment",
      data: { quantity: { value: 2 }, description: { value: "" } },
    },
  ],
});

test("names", () => {
  assert.equal(singularize("Cinder Wolves"), "Cinder Wolf");
  assert.equal(singularize("Bandit Scouts"), "Bandit Scout");
  assert.equal(singularize("Harpies"), "Harpy");
  assert.equal(singularize("Grass"), "Grass");
  assert.equal(compactName("</b>Detect Magic (self only)"), "detectmagic");
  assert.equal(compactName("(2nd) see invisibility"), "seeinvisibility");
  assert.deepEqual(creatureNameCandidates("Elite Bandits"), [
    "Elite Bandits",
    "Bandits",
    "Bandit",
  ]);
});

test("printed statistics map to PF2e fields", () => {
  const { source } = convertStatBlock(npc(), context());
  const s = source.system;
  assert.equal(source.name, "Cinder Wolf");
  assert.equal(s.details.level.value, 3);
  assert.equal(s.attributes.ac.value, 18);
  assert.equal(s.attributes.hp.max, 45);
  assert.equal(s.perception.mod, 9);
  assert.equal(s.initiative.statistic, "perception");
  assert.equal(s.saves.will.saveDetail, "+1 vs fear");
  assert.equal(s.abilities.str.mod, 4);
  assert.equal(s.traits.size.value, "lg");
  assert.equal(s.traits.rarity, "uncommon");
  assert.equal("alignment" in s.details, false);
});

test("speeds, senses and languages parse", () => {
  const s = convertStatBlock(npc(), context()).source.system;
  assert.equal(s.attributes.speed.value, 35);
  assert.deepEqual(s.attributes.speed.otherSpeeds, [
    { type: "climb", value: 10 },
  ]);
  assert.deepEqual(s.perception.senses, [
    { type: "darkvision" },
    { type: "scent", acuity: "imprecise", range: 30 },
  ]);
  assert.equal(s.perception.details, "wavesense");
  assert.deepEqual(s.details.languages, {
    value: ["common"],
    details: "Wolfish",
  });
});

test("defenses keep valid types and record the rest", () => {
  const s = convertStatBlock(npc(), context()).source.system;
  assert.deepEqual(s.attributes.immunities, [{ type: "poison" }]);
  assert.deepEqual(s.attributes.resistances, [{ type: "fire", value: 5 }]);
  assert.deepEqual(s.attributes.weaknesses, [{ type: "vitality", value: 3 }]);
  assert.match(s.details.privateNotes, /Immune to death-effects/);
  assert.deepEqual(s.traits.value, ["animal"]);
});

test("skills become statistics, lores stay items", () => {
  const { source } = convertStatBlock(npc(), context());
  assert.deepEqual(source.system.skills, { stealth: { base: 8 } });
  assert.deepEqual(
    source.items.filter((i) => i.type === "lore").map((i) => i.name),
    ["Forest Lore"],
  );
});

test("attacks and actions convert", () => {
  const { source } = convertStatBlock(npc(), context());
  const [jaws, spit] = source.items.filter((i) => i.type === "melee");
  assert.equal(jaws.system.bonus.value, 11);
  assert.deepEqual(jaws.system.damageRolls.a, {
    damage: "1d8+4",
    damageType: "void",
  });
  assert.equal(jaws.system.range, null);
  assert.equal(jaws.system.attackEffects.custom, "Knockdown");
  assert.deepEqual(spit.system.range, { increment: 30, max: null });
  const pounce = source.items.find((i) => i.type === "action");
  assert.deepEqual(pounce.system.actions, { value: 2 });
  assert.equal(pounce.system.category, "offensive");
});

test("spells embed into prepared slots and absent ones are noted", () => {
  const { source, spellRequests } = convertStatBlock(npc(), context());
  const lookup = (name) =>
    name === "heal" ? { name: "Heal", type: "spell", system: {} } : null;
  let n = 0;
  const missing = attachSpells(source, spellRequests, lookup, () => `s${n++}`);
  assert.deepEqual(missing, ["light"]);
  const entry = source.items.find((i) => i.type === "spellcastingEntry");
  assert.deepEqual(entry.system.tradition, { value: "divine" });
  assert.deepEqual(entry.system.slots.slot1.prepared, [
    { id: "s0" },
    { id: "s0" },
  ]);
  assert.equal(entry.system.slots.slot2, undefined);
  const spell = source.items.find((i) => i.type === "spell");
  assert.deepEqual(spell.system.location, {
    value: entry._id,
    heightenedLevel: 1,
  });
  assert.match(
    source.system.details.privateNotes,
    /not found in the compendium: light/,
  );
});

test("hazards convert", () => {
  const hazard = {
    id: "h",
    name: "Pit",
    type: "hazard",
    items: [],
    data: {
      saves: {
        fortitude: { value: 1 },
        reflex: { value: 2 },
        will: { value: 0 },
      },
      attributes: {
        ac: { value: 12 },
        hardness: 3,
        hasHealth: true,
        hp: { value: 9, max: 9, details: "" },
        stealth: { value: 15, details: "(trained)" },
      },
      details: {
        level: 2,
        isComplex: false,
        disable: "d",
        description: "x",
        reset: "r",
        routine: "",
      },
      traits: {
        value: ["trap"],
        di: { value: [], custom: "" },
        dr: [],
        dv: [],
      },
    },
  };
  const { source } = convertStatBlock(hazard, context());
  assert.equal(source.type, "hazard");
  assert.deepEqual(source.system.details.level, { value: 2 });
  assert.equal(source.system.attributes.stealth.value, 15);
});

test("identical printed stat blocks share a key, different numbers do not", () => {
  const a = npc();
  const b = npc();
  assert.equal(statBlockKey(a), statBlockKey(b));
  b.data.attributes.hp.max = 60;
  assert.notEqual(statBlockKey(a), statBlockKey(b));
});

test("legacy links upgrade or fall back to their label", () => {
  const resolve = (_pack, name) =>
    name === "Prone" ? "Compendium.pf2e.conditionitems.Item.abc" : null;
  assert.equal(
    rewriteLegacyLinks(
      "@Compendium[pf2e.conditionitems.Prone]{Prone} and @Compendium[pf2e.conditionitems.Gone]{Gone}",
      resolve,
    ),
    "@UUID[Compendium.pf2e.conditionitems.Item.abc]{Prone} and Gone",
  );
});
