import { MODULE_ID } from "../constants.js";

/**
 * Converts stat blocks parsed from a PDF into PF2e 8.x Actor source data, for creatures
 * that are not in any compendium. Pure functions: Foundry-specific lookups arrive through
 * `context`, so these run in unit tests.
 */

const SKILLS = new Set([
  "acrobatics",
  "arcana",
  "athletics",
  "crafting",
  "deception",
  "diplomacy",
  "intimidation",
  "medicine",
  "nature",
  "occultism",
  "performance",
  "religion",
  "society",
  "stealth",
  "survival",
  "thievery",
]);
const IWR_ALIASES = {
  positive: "vitality",
  negative: "void",
  good: "holy",
  evil: "unholy",
};
const ACTION_TYPES = new Set(["action", "reaction", "free", "passive"]);
const TRADITIONS = ["arcane", "divine", "occult", "primal"];
const ICONS = {
  npc: "systems/pf2e/icons/default-icons/npc.svg",
  hazard: "systems/pf2e/icons/default-icons/hazard.svg",
  equipment: "systems/pf2e/icons/default-icons/equipment.svg",
  spellcastingEntry: "systems/pf2e/icons/default-icons/spellcastingEntry.svg",
};

/** Letters and digits only, without markup or parentheticals: PDF text often loses spaces. */
export function compactName(name) {
  return name
    .toLowerCase()
    .replace(/<[^>]*>/g, "")
    .replace(/^\s*\([^)]*\)\s*/, "")
    .replace(/\s*\(.*\)\s*$/, "")
    .replace(/’/g, "'")
    .replace(/[^a-z0-9]/g, "");
}

export function singularize(name) {
  if (/wolves$/i.test(name)) return name.replace(/ves$/i, "f");
  if (/men$/i.test(name)) return name.replace(/men$/i, "man");
  if (/[^aeiou]ies$/i.test(name)) return name.replace(/ies$/i, "y");
  if (/(ss|us)$/i.test(name)) return name;
  return name.replace(/s$/i, "");
}

/** Names a stat block's creature might go by in a compendium. */
export function creatureNameCandidates(name) {
  const base = name
    .replace(/\s*\(.*?\)\s*/g, " ")
    .replace(/^(elite|weak)\s+/i, "")
    .trim();
  return [...new Set([name.trim(), base, singularize(base)])];
}

/** Two printed stat blocks with the same numbers are one creature. */
export function statBlockKey(parsed) {
  const attributes = parsed.data.attributes;
  const level = parsed.data.details.level?.value ?? parsed.data.details.level;
  const items = parsed.items.map((item) => item.name).join("|");
  return [
    parsed.type,
    parsed.name,
    level,
    attributes.ac?.value,
    attributes.hp?.max,
    items,
  ].join("~");
}

/**
 * Rewrite pre-v10 `@Compendium[pack.Name]{Label}` links. Links that no longer resolve
 * become their plain label.
 */
export function rewriteLegacyLinks(text, resolve) {
  return text.replace(
    /@Compendium\[([^\]]+)\](?:\{([^}]*)\})?/g,
    (_match, target, label) => {
      const [scope, pack, ...rest] = target.split(".");
      const name = rest.join(".");
      const uuid = resolve(`${scope}.${pack}`, name);
      if (!uuid) return label ?? name;
      return `@UUID[${uuid}]${label ? `{${label}}` : ""}`;
    },
  );
}

function parseSpeeds(text) {
  const speeds = { value: 0, otherSpeeds: [], details: "" };
  const extras = [];
  String(text ?? "")
    .split(/[,;]/)
    .map((part) => part.trim())
    .filter(Boolean)
    .forEach((part, index) => {
      const land = part.match(/^(\d+)\s*(?:feet|ft\.?)$/i);
      const other = part.match(
        /^(burrow|climb|fly|swim)\s+(\d+)\s*(?:feet|ft\.?)/i,
      );
      if (land && index === 0) speeds.value = Number(land[1]);
      else if (other)
        speeds.otherSpeeds.push({
          type: other[1].toLowerCase(),
          value: Number(other[2]),
        });
      else extras.push(part);
    });
  speeds.details = extras.join(", ");
  return speeds;
}

function parseSenses(text, vocabulary) {
  const senses = [];
  const details = [];
  for (const raw of String(text ?? "").split(",")) {
    const part = raw.replace(/<[^>]*>/g, "").trim();
    if (!part) continue;
    const acuity = part
      .match(/\((precise|imprecise|vague)\)/i)?.[1]
      ?.toLowerCase();
    const range = part.match(/(\d+)\s*(?:feet|ft\.?)/i)?.[1];
    const type = part
      .replace(/\(.*?\)/g, "")
      .replace(/\d+\s*(?:feet|ft\.?)/i, "")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-");
    if (vocabulary.senses.has(type)) {
      senses.push({
        type,
        ...(acuity ? { acuity } : {}),
        ...(range ? { range: Number(range) } : {}),
      });
    } else {
      details.push(part);
    }
  }
  return { senses, details: details.join(", ") };
}

function splitLanguages(values, custom, vocabulary) {
  const value = [];
  const details = custom ? [custom] : [];
  for (const raw of values ?? []) {
    const slug = raw.trim().toLowerCase();
    if (vocabulary.languages.has(slug)) value.push(slug);
    else details.push(raw.trim());
  }
  return { value, details: details.join(", ") };
}

const normalizeIwr = (type) => {
  const slug = String(type).trim().toLowerCase().replace(/\s+/g, "-");
  return IWR_ALIASES[slug] ?? slug;
};

function convertDefenses(traits, vocabulary, notes) {
  const immunities = [];
  for (const raw of traits.di?.value ?? []) {
    const type = normalizeIwr(raw);
    if (vocabulary.immunities.has(type)) immunities.push({ type });
    else notes.push(`Immune to ${raw}.`);
  }
  if (traits.di?.custom) notes.push(`Immunities: ${traits.di.custom}.`);
  const numeric = (list, allowed, label) => {
    const out = [];
    for (const { type, value, exceptions } of list ?? []) {
      const slug = normalizeIwr(type);
      if (allowed.has(slug)) out.push({ type: slug, value });
      else notes.push(`${label} ${type} ${value}.`);
      if (exceptions) notes.push(`${label} ${type}: ${exceptions}.`);
    }
    return out;
  };
  return {
    immunities,
    weaknesses: numeric(traits.dv, vocabulary.weaknesses, "Weakness"),
    resistances: numeric(traits.dr, vocabulary.resistances, "Resistance"),
  };
}

const publicationFor = (title) => ({ license: "OGL", remaster: false, title });
const baseItemSystem = (context, description = "") => ({
  description: { value: context.rewriteLinks(description) },
  publication: publicationFor(""),
  rules: [],
  slug: null,
});

function convertMelee(item, context) {
  const data = item.data;
  const traits = data.traits?.value ?? [];
  const rangeTrait = traits
    .map((t) => t.match(/^(?:range(?:-increment)?|thrown)-(\d+)$/))
    .find(Boolean);
  const isRanged = data.weaponType?.value === "ranged";
  const damageRolls = {};
  for (const [key, roll] of Object.entries(data.damageRolls ?? {})) {
    damageRolls[key] = {
      damage: roll.damage,
      damageType: normalizeIwr(roll.damageType),
    };
  }
  return {
    _id: context.randomId(),
    name: item.name,
    type: "melee",
    img: item.img,
    system: {
      ...baseItemSystem(context, data.description?.value),
      attack: { value: "" },
      attackEffects: {
        custom: (data.attackEffects?.value ?? []).join(", "),
        value: [],
      },
      bonus: { value: data.bonus?.value ?? 0 },
      damageRolls,
      range: isRanged
        ? { increment: rangeTrait ? Number(rangeTrait[1]) : 10, max: null }
        : null,
      traits: { rarity: "common", value: traits },
    },
  };
}

function convertAction(item, context) {
  const data = item.data;
  const actionType = ACTION_TYPES.has(data.actionType?.value)
    ? data.actionType.value
    : "passive";
  const count = Number.parseInt(data.actions?.value, 10);
  return {
    _id: context.randomId(),
    name: item.name,
    type: "action",
    img: item.img,
    system: {
      ...baseItemSystem(context, data.description?.value),
      actionType: { value: actionType },
      actions: {
        value: actionType === "action" && Number.isFinite(count) ? count : null,
      },
      category: data.actionCategory?.value || null,
      traits: { rarity: "common", value: data.traits?.value ?? [] },
    },
  };
}

function convertEquipment(item, context) {
  return {
    _id: context.randomId(),
    name: item.name,
    type: "equipment",
    img: ICONS.equipment,
    system: {
      ...baseItemSystem(context, item.data.description?.value),
      baseItem: null,
      bulk: { value: 0 },
      containerId: null,
      equipped: { carryType: "worn", invested: null },
      hardness: 0,
      hp: { max: 0, value: 0 },
      level: { value: 0 },
      material: { grade: null, type: null },
      price: { value: {} },
      quantity: item.data.quantity?.value ?? 1,
      size: "med",
      traits: { rarity: "common", value: [] },
      usage: { value: "other" },
    },
  };
}

function convertLore(item, context) {
  return {
    _id: context.randomId(),
    name: item.name,
    type: "lore",
    img: item.img,
    system: {
      ...baseItemSystem(context, item.data.description?.value),
      mod: { value: item.data.mod?.value ?? 0 },
      proficient: { value: 0 },
      traits: {},
    },
  };
}

function convertSpellcasting(item, context, requests) {
  const data = item.data;
  const id = context.randomId();
  const lowerName = item.name.toLowerCase();
  const tradition = TRADITIONS.find((t) => lowerName.includes(t)) ?? "divine";
  const slots = {};
  for (const [slotKey, slot] of Object.entries(data.slots ?? {})) {
    const rank = Number(slotKey.replace("slot", ""));
    const names = Object.values(slot.prepared ?? {});
    if (names.length === 0) continue;
    slots[slotKey] = { max: names.length, prepared: [] };
    for (const name of names)
      requests.push({ entryId: id, slotKey, rank, name });
  }
  return {
    _id: id,
    name: item.name,
    type: "spellcastingEntry",
    img: ICONS.spellcastingEntry,
    system: {
      ...baseItemSystem(context),
      ability: { value: "cha" },
      autoHeightenLevel: { value: null },
      prepared: { flexible: false, value: data.prepared?.value ?? "innate" },
      proficiency: { value: 1 },
      showSlotlessLevels: { value: false },
      slots: data.prepared?.value === "prepared" ? slots : {},
      spelldc: {
        dc: data.spelldc?.dc ?? 0,
        mod: 0,
        value: data.spelldc?.value ?? 0,
      },
      tradition: { value: tradition },
    },
  };
}

function convertItems(parsed, context, skills, requests) {
  const items = [];
  for (const item of parsed.items) {
    if (item.type === "melee") items.push(convertMelee(item, context));
    else if (item.type === "action") items.push(convertAction(item, context));
    else if (item.type === "equipment")
      items.push(convertEquipment(item, context));
    else if (item.type === "spellcastingEntry")
      items.push(convertSpellcasting(item, context, requests));
    else if (item.type === "lore") {
      const slug = item.name.trim().toLowerCase();
      if (SKILLS.has(slug)) skills[slug] = { base: item.data.mod?.value ?? 0 };
      else items.push(convertLore(item, context));
    }
  }
  return items;
}

const displayName = (parsed) =>
  parsed.qty !== undefined ? singularize(parsed.name) : parsed.name;

const flagsFor = (parsed, context) => ({
  [MODULE_ID]: {
    module: context.adventurePrefix,
    id: parsed.id,
    fromStatBlock: true,
  },
});

function convertNpc(parsed, context) {
  const { data } = parsed;
  const { vocabulary } = context;
  const notes = [];
  const skills = {};
  const spellRequests = [];
  const items = convertItems(parsed, context, skills, spellRequests);
  const senses = parseSenses(data.traits.senses?.value, vocabulary);
  const speed = parseSpeeds(data.attributes.speed?.value);
  const defenses = convertDefenses(data.traits, vocabulary, notes);
  const traits = (data.traits.value ?? []).filter(
    (trait) =>
      vocabulary.creatureTraits.size === 0 ||
      vocabulary.creatureTraits.has(trait),
  );
  return {
    spellRequests,
    source: {
      name: displayName(parsed),
      type: "npc",
      img: ICONS.npc,
      flags: flagsFor(parsed, context),
      items,
      system: {
        abilities: Object.fromEntries(
          Object.entries(data.abilities).map(([key, value]) => [
            key,
            { mod: value.mod ?? 0 },
          ]),
        ),
        attributes: {
          ac: {
            details: data.attributes.ac.details ?? "",
            value: data.attributes.ac.value,
          },
          allSaves: { value: data.attributes.allSaves?.value ?? "" },
          hp: {
            details: data.attributes.hp.details ?? "",
            max: data.attributes.hp.max,
            temp: 0,
            value: data.attributes.hp.value,
          },
          speed,
          ...defenses,
        },
        details: {
          blurb: "",
          languages: splitLanguages(
            data.traits.languages?.value,
            data.traits.languages?.custom,
            vocabulary,
          ),
          level: { value: data.details.level.value },
          privateNotes: notes.join(" "),
          publicNotes: "",
          publication: publicationFor(context.adventureTitle),
        },
        initiative: { statistic: "perception" },
        perception: {
          details: senses.details,
          mod: data.attributes.perception.value,
          senses: senses.senses,
        },
        resources: {},
        saves: {
          fortitude: {
            saveDetail: data.saves.fortitude.saveDetail ?? "",
            value: data.saves.fortitude.value,
          },
          reflex: {
            saveDetail: data.saves.reflex.saveDetail ?? "",
            value: data.saves.reflex.value,
          },
          will: {
            saveDetail: data.saves.will.saveDetail ?? "",
            value: data.saves.will.value,
          },
        },
        skills,
        traits: {
          rarity: data.traits.rarity?.value ?? "common",
          size: { value: data.traits.size?.value ?? "med" },
          value: traits,
        },
      },
    },
  };
}

function convertHazard(parsed, context) {
  const { data } = parsed;
  const notes = [];
  const skills = {};
  const spellRequests = [];
  const items = convertItems(parsed, context, skills, spellRequests);
  const defenses = convertDefenses(data.traits, context.vocabulary, notes);
  const text = (value) => context.rewriteLinks(value ?? "");
  return {
    spellRequests,
    source: {
      name: displayName(parsed),
      type: "hazard",
      img: ICONS.hazard,
      flags: flagsFor(parsed, context),
      items,
      system: {
        attributes: {
          ac: { value: data.attributes.ac.value },
          emitsSound: "encounter",
          hardness: data.attributes.hardness ?? 0,
          hasHealth: data.attributes.hasHealth ?? false,
          hp: {
            details: data.attributes.hp.details ?? "",
            max: data.attributes.hp.max ?? 0,
            temp: 0,
            value: data.attributes.hp.value ?? 0,
          },
          stealth: {
            details: data.attributes.stealth.details ?? "",
            value: data.attributes.stealth.value,
          },
          ...defenses,
        },
        creatureType: "",
        details: {
          description: [text(data.details.description), notes.join(" ")]
            .filter(Boolean)
            .join("<p></p>"),
          disable: text(data.details.disable),
          isComplex: data.details.isComplex ?? false,
          level: { value: data.details.level },
          publication: publicationFor(context.adventureTitle),
          reset: text(data.details.reset),
          routine: text(data.details.routine),
        },
        saves: {
          fortitude: { saveDetail: "", value: data.saves.fortitude.value },
          reflex: { saveDetail: "", value: data.saves.reflex.value },
          will: { saveDetail: "", value: data.saves.will.value },
        },
        traits: {
          rarity: "common",
          size: { value: "med" },
          value: data.traits.value ?? [],
        },
      },
    },
  };
}

/** @returns {{source: object, spellRequests: Array<{entryId, slotKey, rank, name}>}} */
export function convertStatBlock(parsed, context) {
  return parsed.type === "hazard"
    ? convertHazard(parsed, context)
    : convertNpc(parsed, context);
}

/**
 * Embed the compendium spells found for a stat block. Spells that could not be found are
 * listed in the creature's notes, so the GM can add them by hand.
 * @returns {string[]} names that could not be found
 */
export function attachSpells(source, requests, findSpellData, randomId) {
  const entries = new Map(
    source.items
      .filter((i) => i.type === "spellcastingEntry")
      .map((i) => [i._id, i]),
  );
  const added = new Map();
  const missing = new Set();
  for (const { entryId, slotKey, rank, name } of requests) {
    const spell = findSpellData(name);
    if (!spell) {
      missing.add(name.replace(/<[^>]*>/g, "").trim());
      continue;
    }
    const key = `${entryId}|${rank}|${spell.name}`;
    let itemId = added.get(key);
    if (!itemId) {
      itemId = randomId();
      added.set(key, itemId);
      const item = foundryClone(spell);
      item._id = itemId;
      item.system.location = {
        value: entryId,
        ...(rank > 0 ? { heightenedLevel: rank } : {}),
      };
      source.items.push(item);
    }
    const entry = entries.get(entryId);
    if (entry.system.prepared.value === "prepared") {
      entry.system.slots[slotKey].prepared.push({ id: itemId });
    }
  }
  if (missing.size > 0) {
    const note = `Spells not found in the compendium: ${[...missing].join(", ")}.`;
    if (source.type === "npc") {
      source.system.details.privateNotes = [
        source.system.details.privateNotes,
        note,
      ]
        .filter(Boolean)
        .join(" ");
    } else {
      source.system.details.description += `<p>${note}</p>`;
    }
  }
  return [...missing];
}

const foundryClone = (value) => JSON.parse(JSON.stringify(value));
