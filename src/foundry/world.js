import { DEFAULT_LEVEL_ID } from "../constants.js";
import legacyNames from "../../data/legacy-names.json";
import {
  chooseCompendiumMatch,
  compactName,
} from "../importer/statblock-actor.js";
import {
  buildSceneData,
  readSceneArt,
  withAdjustedDelta,
} from "./scene-data.js";

const levelId = () => Scene.metadata.defaultLevelId ?? DEFAULT_LEVEL_ID;

const lazy = (build) => {
  let value;
  return () => (value ??= build());
};

const renameMap = (table) =>
  new Map(
    Object.entries(table).map(([k, v]) => [compactName(k), compactName(v)]),
  );
const spellRenames = lazy(() => renameMap(legacyNames.spells));
const conditionRenames = lazy(() => renameMap(legacyNames.conditions));
const currentName = (name, renames) => {
  const key = compactName(name);
  return renames.get(key) ?? key;
};

const spellIndex = lazy(
  () =>
    new Map(
      game.packs
        .get("pf2e.spells-srd")
        .index.map((e) => [compactName(e.name), e]),
    ),
);
const INDEX_FIELDS = [
  "system.details.level.value",
  "system.attributes.hp.max",
  "system.attributes.ac.value",
];
const actorIndex = lazy(async () => {
  const packs = [...game.packs].filter(
    (pack) =>
      pack.metadata.packageName === "pf2e" && pack.documentName === "Actor",
  );
  const lists = await Promise.all(
    packs.map(async (pack) =>
      (await pack.getIndex({ fields: INDEX_FIELDS })).map((entry) => ({
        uuid: entry.uuid ?? `Compendium.${pack.collection}.Actor.${entry._id}`,
        compact: compactName(entry.name),
        type: entry.type,
        level: entry.system?.details?.level?.value,
        hp: entry.system?.attributes?.hp?.max ?? null,
        ac: entry.system?.attributes?.ac?.value ?? null,
        pack: pack.metadata.name,
      })),
    ),
  );
  return lists.flat();
});

/** Every Document write the importer performs. Tests substitute this object. */
export const foundryWorld = {
  scenes: () => game.scenes.contents,
  sceneArt: readSceneArt,

  async createFolder(data) {
    const [folder] = await Folder.createDocuments([data]);
    return folder;
  },

  async createJournalEntry(data) {
    const [entry] = await JournalEntry.createDocuments([data]);
    return entry;
  },

  /** Compendium actor as plain data ready for world creation, or null if the UUID is dead. */
  async actorDataFromUuid(uuid) {
    const document = await fromUuid(uuid);
    return document ? game.actors.fromCompendium(document) : null;
  },

  /**
   * The source fields PF2e sets for an elite or weak NPC, calculated by PF2e's own
   * `applyAdjustment` on a temporary copy. Returns null for actor types without adjustments.
   */
  async computeAdjustment(actorData, adjustment) {
    const copy = new CONFIG.Actor.documentClass(
      foundry.utils.deepClone(actorData),
    );
    if (typeof copy.applyAdjustment !== "function") return null;
    // PF2e before 8.7 always calls update(), which a temporary copy cannot do.
    copy.update = async (changes) => copy.updateSource(changes);
    await copy.applyAdjustment(adjustment);
    return { adjustment, hpValue: copy._source.system.attributes.hp.value };
  },

  /** The PF2e compendium creature for a printed stat block, or null. */
  async findCompendiumCreature(names, printed) {
    const wanted = new Set(names.map(compactName));
    const entries = (await actorIndex()).filter((entry) =>
      wanted.has(entry.compact),
    );
    return chooseCompendiumMatch(entries, printed);
  },

  /** Compendium spell as source data for embedding, or null. Handles remaster renames. */
  async findSpellData(name) {
    const entry = spellIndex().get(currentName(name, spellRenames()));
    if (!entry) return null;
    const document = await game.packs
      .get("pf2e.spells-srd")
      .getDocument(entry._id);
    return document?.toObject() ?? null;
  },

  /** Current UUID for a legacy compendium link, or null. */
  resolveLegacyLink(packId, name) {
    const pack = game.packs.get(packId);
    if (!pack) return null;
    const renames =
      packId === "pf2e.conditionitems" ? conditionRenames() : new Map();
    const wanted = currentName(name, renames);
    const entry = pack.index.find((e) => compactName(e.name) === wanted);
    return entry ? `Compendium.${packId}.Item.${entry._id}` : null;
  },

  /** Valid PF2e identifiers used to validate parsed stat-block values. */
  vocabulary() {
    const keys = (record) => new Set(Object.keys(record ?? {}));
    const {
      immunityTypes,
      weaknessTypes,
      resistanceTypes,
      senses,
      languages,
      creatureTraits,
    } = CONFIG.PF2E;
    return {
      immunities: keys(immunityTypes),
      weaknesses: keys(weaknessTypes),
      resistances: keys(resistanceTypes),
      senses: keys(senses),
      languages: keys(languages),
      creatureTraits: keys(creatureTraits),
    };
  },

  randomId: () => foundry.utils.randomID(),

  /** Create a world Actor built from a parsed stat block. */
  async createActorFromSource(source) {
    const [actor] = await CONFIG.Actor.documentClass.createDocuments([source]);
    return actor;
  },

  compendiumArt: (key) => game.compendiumArt.get(key),
  mergeObject: (target, source, options) =>
    foundry.utils.mergeObject(target, source, options),

  /** Create a world Actor from compendium-sourced data. */
  async createActor(data) {
    const [actor] = await CONFIG.Actor.documentClass.createDocuments([data], {
      fromCompendium: true,
    });
    return actor;
  },

  async createScene(spec) {
    const [scene] = await Scene.createDocuments([
      buildSceneData(spec, { levelId: levelId(), authorId: game.user.id }),
    ]);
    return scene;
  },

  async createTokens(scene, placements) {
    const tokens = [];
    for (const { actor, x, y, adjustment } of placements) {
      const token = await actor.getTokenDocument(
        { x, y, hidden: true },
        { parent: scene },
      );
      const data = token.toObject();
      const fields = adjustment
        ? await this.computeAdjustment(actor.toObject(), adjustment)
        : null;
      tokens.push(
        fields && !data.actorLink ? withAdjustedDelta(data, fields) : data,
      );
    }
    await scene.createEmbeddedDocuments("Token", tokens);
  },

  async replaceSceneMap(scene, spec) {
    const level = scene.initialLevel ?? scene.firstLevel;
    await level.update({ "background.src": spec.image.src });
    await scene.update({
      width: spec.width,
      height: spec.height,
      shiftX: spec.image.offsetX,
      shiftY: spec.image.offsetY,
    });
    await this.refreshThumbnail(scene);
  },

  async refreshThumbnail(scene) {
    const { thumb } = await scene.createThumbnail();
    await scene.update({ thumb }, { diff: false });
  },

  activateScene: (scene) => scene.activate(),
};
