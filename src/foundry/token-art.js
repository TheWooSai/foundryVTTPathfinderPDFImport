import {
  IMAGE_MAPPING_FILE,
  LOG_PREFIX,
  MODULE_ID,
  TOKEN_ART_FILE,
} from "../constants.js";
import { sleep } from "../platform/path.js";
import { foundryStorage } from "./storage.js";

/** Build a Foundry compendium-art mapping: { "pf2e.pack": { actorId: {actor, token} } }. */
export async function generateImageMapping(tokenArt) {
  const { getAllAdventureModules } = await import("../adventures/index.js");
  const byUuid = {};
  for (const adventure of getAllAdventureModules()) {
    for (const npc of adventure.npcs) {
      const art = tokenArt[`${adventure.prefix}/${npc.id}`];
      if (art === undefined || npc.name !== undefined) continue;
      (byUuid[npc.actorUuid] ??= []).push({ npc, art });
    }
  }
  const mapping = {};
  for (const [uuid, entries] of Object.entries(byUuid)) {
    const [first, ...rest] = entries;
    const best = rest.reduce(
      (p, c) => (p.npc.shouldBeReplacedByArt(c.npc) ? c : p),
      first,
    );
    if (!best.art) continue;
    const sections = uuid.split(".");
    const compendium = sections.slice(1, 3).join(".");
    (mapping[compendium] ??= {})[sections.at(-1)] = {
      actor: best.art.actor,
      token: { texture: { src: best.art.token } },
    };
  }
  return mapping;
}

/** Remembers art extracted from each PDF so later imports and compendiums can reuse it. */
export class TokenArtDatabase {
  tokenArt = {};
  loaded = false;

  warmup() {
    this.loading = this.load();
  }

  async ready() {
    await this.loading;
    this.loaded = true;
  }

  async load() {
    const response = await fetch(foundry.utils.getRoute(TOKEN_ART_FILE));
    this.tokenArt = response.ok ? ((await response.json())?.art ?? {}) : {};
  }

  key(adventure, npc) {
    if (!this.loaded) throw new Error("TokenArtDatabase not ready");
    return `${adventure.prefix}/${npc.id}`;
  }

  getTokenArt(adventure, npc) {
    return this.tokenArt[this.key(adventure, npc)];
  }

  setTokenArt(adventure, npc, art) {
    this.tokenArt[this.key(adventure, npc)] = art;
  }

  async save() {
    const write = (value, name) =>
      foundryStorage.upload(
        JSON.stringify(value, null, 4),
        "",
        name,
        "application/json",
      );
    await write({ art: this.tokenArt }, TOKEN_ART_FILE);
    await write(await generateImageMapping(this.tokenArt), IMAGE_MAPPING_FILE);
    await sleep(2000);
    try {
      // Foundry has no public refresh; without this the art appears after a world reload.
      await game.compendiumArt._registerArt();
    } catch (error) {
      console.warn(
        `${LOG_PREFIX} Reload the world to see new compendium art.`,
        error,
      );
    }
  }

  async reset() {
    this.tokenArt = {};
    this.loaded = true;
    await this.save();
  }
}

export const tokenArtDb = new TokenArtDatabase();
export const settingKey = (key) => `${MODULE_ID}.${key}`;
