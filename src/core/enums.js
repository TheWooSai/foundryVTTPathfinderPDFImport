export const MAGIC_SCHOOLS = [
  "abjuration",
  "conjuration",
  "divination",
  "enchantment",
  "evocation",
  "illusion",
  "necromancy",
  "transmutation",
];

export const physicalDamageTypes = [
  "bludgeoning",
  "piercing",
  "slashing",
  "bleed",
];

export const lifeEnergyDamageTypes = ["positive", "negative"];

export const energyDamageTypes = [
  "acid",
  "cold",
  "electricity",
  "fire",
  "sonic",
  "force",
  ...lifeEnergyDamageTypes,
];

export const alignmentDamageTypes = ["chaotic", "lawful", "good", "evil"];

export const DAMAGE_TYPES = new Set([
  ...physicalDamageTypes,
  ...energyDamageTypes,
  ...alignmentDamageTypes,
  "mental",
  "poison",
  "untyped",
]);

export const DAMAGE_CATEGORIES = new Set([
  "adamantine",
  "alignment",
  "coldiron",
  "darkwood",
  "energy",
  "ghostTouch",
  "mithral",
  "orichalcum",
  "physical",
  "precision",
  "salt",
  "salt-water",
  "silver",
  "warpglass",
]);

export const DAMAGE_TRAITS = new Set([
  "air",
  "earth",
  "light",
  "magical",
  "unarmed",
  "water",
]);

export const ATTACK_TYPES = new Set([
  "area-damage",
  "nonlethal-attacks",
  "persistent-damage",
  "precision",
  "vorpal",
  "weapons",
]);

export const CONDITION_SLUGS = new Set([
  "blinded",
  "broken",
  "clumsy",
  "concealed",
  "confused",
  "controlled",
  "dazzled",
  "deafened",
  "doomed",
  "drained",
  "dying",
  "encumbered",
  "enfeebled",
  "fascinated",
  "fatigued",
  "flat-footed",
  "fleeing",
  "friendly",
  "frightened",
  "grabbed",
  "helpful",
  "hidden",
  "hostile",
  "immobilized",
  "indifferent",
  "invisible",
  "observed",
  "paralyzed",
  "persistent-damage",
  "petrified",
  "prone",
  "quickened",
  "restrained",
  "sickened",
  "slowed",
  "stunned",
  "stupefied",
  "unconscious",
  "undetected",
  "unfriendly",
  "unnoticed",
  "wounded",
]);

export const IMMUNITY_TYPES = new Set([
  ...CONDITION_SLUGS,
  ...DAMAGE_CATEGORIES,
  ...DAMAGE_TRAITS,
  ...DAMAGE_TYPES,
  ...MAGIC_SCHOOLS,
  "area-damage",
  "auditory",
  "confusion",
  "critical-hits",
  "curse",
  "detection",
  "death-effects",
  "disease",
  "emotion",
  "fear-effects",
  "healing",
  "inhaled",
  "magic",
  "nonlethal-attacks",
  "nonmagical-attacks",
  "object-immunities",
  "olfactory",
  "polymorph",
  "possession",
  "precision",
  "scrying",
  "sleep",
  "spellDeflection",
  "swarm-attacks",
  "swarm-mind",
  "trip",
  "visual",
]);

export const WEAKNESS_TYPES = new Set([
  ...ATTACK_TYPES,
  ...DAMAGE_CATEGORIES,
  ...DAMAGE_TRAITS,
  ...DAMAGE_TYPES,
  "area-damage",
  "axe",
  "critical-hits",
  "emotion",
  "precision",
  "splash-damage",
  "vampire-weaknesses",
  "vorpal",
  "vorpal-fear",
  "vulnerable-to-sunlight",
]);

export const RESISTANCE_TYPES = new Set([
  ...ATTACK_TYPES,
  ...DAMAGE_TRAITS,
  ...DAMAGE_TYPES,
  ...DAMAGE_CATEGORIES,
  "all",
  "area-damage",
  "critical-hits",
  "protean anatomy",
]);

export const remaps = {
  "all damage": "all",
  "all physical": "physical",
  "area damage": "area-damage",
  "cold iron": "coldiron",
  "critical hits": "critical-hits",
  curses: "curse",
  death: "death-effects",
  "death effects": "death-effects",
  diseased: "disease",
  electric: "electricity",
  "emotion effects": "emotion",
  "fear effects": "fear-effects",
  fear: "fear-effects",
  "flat-footed": "flat-footed",
  "flat footed": "flat-footed",
  "ghost touch": "ghostTouch",
  magic: "magical",
  "magic (see below)": "magical",
  nonlethal: "nonlethal-attacks",
  "nonlethal attacks": "nonlethal-attacks",
  "object immunities": "object-immunities",
  paralyze: "paralyzed",
  "persistent damage": "persistent-damage",
  "precision damage": "precision",
  "protean anatomy": "protean anatomy",
  "salt water": "salt-water",
  "sneak attack": "precision-damage",
  "splash damage": "splash-damage",
  "swarm attacks": "swarm-attacks",
  "swarm mind": "swarm-mind",
  "swarm mind (page 306)": "swarm-mind",
  unconsciousness: "unconscious",
  "vampire weaknesses": "vampire-weaknesses",
  "vorpal fear": "vorpal-fear",
};

export function getImmunityEnum(data, name) {
  data = data.toLocaleLowerCase();
  if (remaps[data]) {
    data = remaps[data];
  }
  if (!IMMUNITY_TYPES.has(data)) {
    console.log(`PF2e PDF Import | unknown immunity (${name}) '${data}'`);
    return;
  }
  return data;
}

export function getResistanceEnum(data, name) {
  data = data.toLocaleLowerCase();
  if (remaps[data]) {
    data = remaps[data];
  }
  if (!RESISTANCE_TYPES.has(data)) {
    console.log(`PF2e PDF Import | unknown resistance (${name}) '${data}'`);
    return;
  }
  return data;
}

export function getWeaknessEnum(data, name) {
  data = data.toLocaleLowerCase();
  if (remaps[data]) {
    data = remaps[data];
  }
  if (!WEAKNESS_TYPES.has(data)) {
    console.log(`PF2e PDF Import | unknown weakness (${name}) '${data}'`);
    return;
  }
  return data;
}

export function getTraitEnum(data, name) {
  const mapping = {
    acid: "acid",
    air: "air",
    agile: "agile",
    alchemical: "alchemical",
    arcane: "arcane",
    auditory: "auditory",
    backstabber: "backstabber",
    backswing: "backswing",
    bomb: "bomb",
    brutal: "brutal",
    chaotic: "chaotic",
    cold: "cold",
    "cold iron": "coldiron",
    concealable: "concealable",
    concentrate: "concentrate",
    concussive: "concussive",
    consumable: "consumable",
    "deadly 1d6": "deadly-d6",
    "deadly d6": "deadly-d6",
    "deadly 1d8": "deadly-d8",
    "deadly d8": "deadly-d8",
    "deadly 2d8": "deadly-d8",
    "deadly 3d8": "deadly-d8",
    "deadly 1d10": "deadly-d10",
    "deadly 4d10": "deadly-d10",
    "deadly d10": "deadly-d10",
    "deadly 2d10": "deadly-d10",
    "deadly 3d10": "deadly-3d10",
    "deadly d12": "deadly-d12",
    "deadly 1d12": "deadly-d12",
    "deadly 2d12": "deadly-d12",
    "deadly 3d12": "deadly-d12",
    death: "death",
    disarm: "disarm",
    divine: "divine",
    dwarf: "dwarf",
    electricity: "electricity",
    enchantment: "enchantment",
    evil: "evil",
    evocation: "evocation",
    "fatal d8": "fatal-d8",
    "fatal d10": "fatal-d10",
    "fatal d12": "fatal-d12",
    "fatal 1d12": "fatal-d12",
    finesse: "finesse",
    fire: "fire",
    force: "force",
    forceful: "forceful",
    "forceful +1": "forceful",
    "forceful +2": "forceful",
    "free-hand": "free-hand",
    goblin: "goblin",
    good: "good",
    grapple: "grapple",
    illusion: "illusion",
    "jousting d6": "jousting-d6",
    kickback: "kickback",
    lawful: "lawful",
    light: "light",
    magic: "magical",
    magical: "magical",
    mental: "mental",
    monk: "monk",
    necromancy: "necromancy",
    negative: "negative",
    nonlethal: "nonlethal",
    occult: "occult",
    orc: "orc",
    parry: "parry",
    poison: "poison",
    positive: "positive",
    primal: "primal",
    propulsive: "propulsive",
    "range 10 feet": "range-increment-10",
    "range increment 10 feet": "range-increment-10",
    "range increment 15 feet": "range-increment-15",
    "range 20 feet": "range-increment-20",
    "range increment 20 feet": "range-increment-20",
    "range 30 feet": "range-increment-30",
    "range increment 30 feet": "range-increment-30",
    "range increment 40 feet": "range-increment-40",
    "range 40 feet": "range-increment-40",
    "range increment 50 feet": "range-increment-50",
    "range 50 feet": "range-increment-50",
    "range 60 feet": "range-increment-60",
    "range increment 60 feet": "range-increment-60",
    "range increment 70 feet": "range-increment-70",
    "range increment 80 feet": "range-increment-80",
    "range increment 90 feet": "range-increment-90",
    "range 100 feet": "range-increment-100",
    "range increment 100 feet": "range-increment-100",
    "range increment 120 feet": "range-increment-120",
    "range 120 feet": "range-increment-120",
    "range increment 120": "range-increment-120",
    "range increment 180 feet": "range-increment-180",
    "range increment 200 feet": "range-increment-200",
    "range 200 feet": "range-increment-200",
    reach: "reach",
    "reach 10 feet": "reach-10",
    "reach 15 feet": "reach-15",
    "reach 20 feet": "reach-20",
    "reach 25 feet": "reach-25",
    "reach 30 feet": "reach-30",
    "reach 40 feet": "reach-40",
    "reach 60 feet": "reach-60",
    "reload 0": "reload-0",
    "reload 1": "reload-1",
    "reload 2": "reload-2",
    repeating: "repeating",
    shove: "shove",
    sonic: "sonic",
    splash: "splash",
    sweep: "sweep",
    tengu: "tengu",
    "thrown 10 ft.": "thrown-10",
    "thrown 10 feet": "thrown-10",
    "thrown 20 feet": "thrown-20",
    "thrown 30 feet": "thrown-30",
    "thrown 40 feet": "thrown-40",
    trip: "trip",
    twin: "twin",
    "two - hand d8": "two-hand-d8",
    "two-hand d8": "two-hand-d8",
    "two-handed d8": "two-hand-d8",
    "two-handed 3d8": "two-hand-d8",
    "two-hand d10": "two-hand-d10",
    "two-hand 2d10": "two-hand-d10",
    "two-hand 3d10": "two-hand-d10",
    "two-hand d12": "two-hand-d12",
    unarmed: "unarmed",
    uncommon: "uncommon",
    "versatile b": "versatile-b",
    "versatile s": "versatile-s",
    versatiles: "versatile-s",
    "versatile p": "versatile-p",
    volley: "volley-30",
    "volley 30 feet": "volley-30",
    "volley 30 ft.": "volley-30",
    "volley 35 feet": "volley-50",
    water: "water",
  };
  data = data.toLocaleLowerCase().replace("\u2011", "-");
  return Object.hasOwn(mapping, data)
    ? mapping[data]
    : (console.log(`PF2e PDF Import | unknown trait (${name}) '${data}'`),
      data);
}

export const ancestries = [
  "dwarf",
  "elf",
  "gnome",
  "goblin",
  "halfelf",
  "halfling",
  "halforc",
  "human",
  "hobgoblin",
  "leshy",
  "lizardfolk",
  "aasimar",
  "catfolk",
  "changeling",
  "dhampir",
  "duskwalker",
  "geniekin",
  "kobold",
  "orc",
  "ratfolk",
  "shoony",
  "tengu",
  "tiefling",
];

export const classes = [
  "alchemist",
  "barbarian",
  "bard",
  "champion",
  "cleric",
  "druid",
  "fighter",
  "investigator",
  "monk",
  "oracle",
  "ranger",
  "rogue",
  "sorcerer",
  "swashbuckler",
  "witch",
  "wizard",
];
