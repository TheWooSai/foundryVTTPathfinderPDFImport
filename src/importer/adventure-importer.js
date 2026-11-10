import { LOG_PREFIX, MODULE_ID } from "../constants.js";
import { ModuleData } from "../core/module-data.js";
import { joinPath, sleep } from "../platform/path.js";
import { getAllAdventureModules } from "../adventures/index.js";

const WATERMARK_ERROR = "Couldn't detect watermark :(. Please no pirate.";
const JOURNAL_PAGE_FIELDS = ["name", "type", "flags", "text", "src", "sort"];

const pickPageFields = (entry) =>
  Object.fromEntries(
    JOURNAL_PAGE_FIELDS.filter((k) => entry[k] !== undefined).map((k) => [
      k,
      entry[k],
    ]),
  );

/** Runs one adventure's import. All side effects go through `env`. */
export class AdventureImporter {
  additionalMessages = "";
  npcActors = {};
  createdFolders = [];
  missingCreatures = [];

  /** @param {*} adventure @param {{world, storage, settings, artDb, moduleRoot: string}} env */
  constructor(adventure, env) {
    this.adventure = adventure;
    this.env = env;
  }

  setting(key) {
    return this.env.settings.get(key);
  }

  async fetchJson(path) {
    const response = await fetch(joinPath(this.env.moduleRoot, path));
    return response.json();
  }

  fromUuid(uuid) {
    return this.env.world.actorDataFromUuid(uuid);
  }

  async ensureFolderExists(path) {
    if (this.createdFolders.includes(path)) return;
    const segments = path.split("/");
    if (segments.length > 1)
      await this.ensureFolderExists(segments.slice(0, -1).join("/"));
    try {
      await this.env.storage.mkdir(path);
    } catch {
      // The directory usually exists already.
    }
    await sleep(500);
    this.createdFolders.push(path);
  }

  async emitFile(subdirectory, filename, data) {
    const directory = joinPath(
      this.setting("basePath"),
      this.adventure.prefix,
      subdirectory,
    );
    await this.ensureFolderExists(directory);
    await this.env.storage.upload(data, directory, filename);
    return joinPath(directory, filename);
  }

  async emitImage(subdirectory, filename, canvas) {
    if (canvas.toBlob === undefined) {
      return this.emitFile(subdirectory, filename, await canvas.toBuffer());
    }
    const blob = await new Promise((resolve) =>
      canvas.toBlob(resolve, "image/webp"),
    );
    return this.emitFile(subdirectory, filename, blob);
  }

  getCanonicalArtForToken(npc) {
    const { artDb } = this.env;
    return getAllAdventureModules()
      .filter((module) => module.prefix !== this.adventure.prefix)
      .flatMap((module) =>
        module.npcs
          .filter((other) => npc.shouldBeReplacedByArt(other))
          .map((other) => artDb.getTokenArt(module, other))
          .filter((art) => art !== undefined),
      )[0];
  }

  /** Rewrite "monster" headings as links to the imported actors. */
  fixupJournal(entry, actorIds) {
    entry.text.content = entry.text.content.replace(
      /<h4 data-monster-id="(.*?)">([^<>]+)<\/h4>/g,
      (match, monsterId, name) => {
        if (actorIds.has(monsterId))
          return `@UUID[Actor.${actorIds.get(monsterId)}]{${name}}`;
        console.log(
          `${LOG_PREFIX} Couldn't find actor for ${monsterId} : ${name}`,
        );
        return match;
      },
    );
  }

  getCanonicalSceneMapping() {
    const basePath = this.setting("basePath");
    return getAllAdventureModules().flatMap((module) =>
      module.scenes.map((scene) => ({
        path: joinPath(basePath, module.prefix, `${scene.name}.webp`),
        name: scene.canonical?.name,
        priority: scene.canonical?.priority,
      })),
    );
  }

  async createScene(spec, canonicalName, priority, tokens) {
    const { world } = this.env;
    if (canonicalName) {
      const mapping = this.getCanonicalSceneMapping().filter(
        (m) => m.name === canonicalName,
      );
      for (const existing of world.scenes()) {
        const art = world.sceneArt(existing);
        const match = mapping.find((m) => m.path === art.src);
        if (!match) continue;
        if (priority > match.priority) {
          await world.replaceSceneMap(existing, spec);
          if (!this.setting("alwaysCreateScenes")) return undefined;
        } else if (priority < match.priority) {
          spec.image = {
            src: art.src,
            offsetX: art.offsetX,
            offsetY: art.offsetY,
          };
          spec.width = art.width;
          spec.height = art.height;
          priority = match.priority;
        }
      }
    }

    const scene = await world.createScene(spec);
    const placements = (tokens ?? [])
      .filter((token) => this.npcActors[token.id])
      .map((token) => ({
        actor: this.npcActors[token.id],
        x: token.x,
        y: token.y,
      }));
    if (placements.length > 0) await world.createTokens(scene, placements);
    await world.refreshThumbnail(scene);
    return scene;
  }

  async importActor(uuid, details) {
    const { world, artDb } = this.env;
    const canonicalArt = this.getCanonicalArtForToken(details.npc);
    const actor = await this.fromUuid(uuid);
    if (!actor) return null;

    actor.img = canonicalArt !== undefined ? canonicalArt.actor : details.img;
    actor.prototypeToken.texture.src =
      canonicalArt !== undefined ? canonicalArt.token : details.token;
    actor.folder = details.folder;
    if (details.name) {
      actor.name = details.name;
      actor.prototypeToken.name = details.name;
    }
    if (details.elite) actor.system.traits.value.push("elite");
    if (details.weak) actor.system.traits.value.push("weak");
    actor.flags[MODULE_ID] = { module: this.adventure.prefix, id: details.id };

    if (!this.setting("alwaysUseImportedIcons")) {
      const art = world.compendiumArt(details.npc.uniqueKey);
      if (art !== undefined) {
        actor.img = art.actor;
        world.mergeObject(actor.prototypeToken, art.token, {
          inplace: true,
          recursive: true,
        });
      }
    }

    let created = null;
    if (!this.adventure.noImport) {
      created = await world.createActor(actor);
      this.npcActors[details.id] = created;
    }
    if (canonicalArt === undefined && !details.npc.isPlaceholderArt()) {
      artDb.setTokenArt(this.adventure, details, {
        actor: details.img,
        token: details.token,
      });
    }
    return created;
  }

  verifyWatermark(pdf) {
    const line = pdf.textDetails.find((entry) => entry.y === 2);
    if (
      line === undefined ||
      !/paizo\.com( #([0-9]+))?, (.*?) <(.*?@.*?)>, (.*)/.test(line.text)
    ) {
      throw new Error(WATERMARK_ERROR);
    }
  }

  lazyFolder(type, sorting = "m") {
    let folder;
    return async () =>
      (folder ??= await this.env.world.createFolder({
        name: this.adventure.fullName,
        type,
        parent: null,
        sorting,
      }));
  }

  async import(pdf, progress) {
    const { adventure } = this;
    const { artDb, world } = this.env;
    this.verifyWatermark(pdf);
    const moduleData = new ModuleData();

    adventure.progressFn = progress;
    adventure.preprocess(pdf.textDetails);
    await adventure.extractImageJournals(pdf, moduleData, this);

    const sections = {};
    for (const [index, page] of adventure.pages.entries()) {
      progress(`Extracting page ${index}`, index / adventure.pages.length);
      page(pdf, (key, text) => {
        (sections[key] ??= []).push(text);
      });
    }
    for (const key in sections) {
      moduleData.journalEntries.push(
        ...adventure.extractDetails(sections[key], moduleData, key),
      );
    }
    adventure.finalize(moduleData);
    await artDb.ready();

    const sceneFolder = this.lazyFolder("Scene");
    const journalFolder = this.lazyFolder("JournalEntry");
    const actorFolder = this.lazyFolder("Actor", "a");

    for (const combine of adventure.combines) {
      adventure.appendJournal(moduleData, combine.source, combine.dest);
    }

    const actorIds = new Map();
    for (const [index, npc] of adventure.npcs.entries()) {
      progress(`Extracting npc ${index}`, index / adventure.npcs.length);
      const generated = await npc.generate(pdf, this);
      if (generated === undefined) {
        console.error(
          `${LOG_PREFIX} No compendium creature for ${npc.id} (${npc.actorUuid})`,
        );
        this.missingCreatures.push(npc);
        continue;
      }
      const [uuid, details] = generated;
      const actor = await this.importActor(uuid, {
        ...details,
        folder: (await actorFolder()).id,
      });
      if (!actor) {
        if (actor === undefined)
          this.additionalMessages += `<br>Failed importing ${npc.id}`;
        continue;
      }
      for (const id of npc.forIds ?? []) actorIds.set(id, actor.id);
    }

    for (const entry of moduleData.journalEntries)
      this.fixupJournal(entry, actorIds);
    await this.createJournals(pdf, moduleData, journalFolder);

    let sort = 0;
    let firstScene;
    for (const [index, sceneDefinition] of adventure.scenes.entries()) {
      progress(`Extracting scene ${index}`, index / adventure.scenes.length);
      try {
        const spec = await sceneDefinition.generate(pdf, moduleData, this);
        if (spec === undefined) continue;
        sort += 100;
        const scene = await this.createScene(
          { ...spec, sort, folder: (await sceneFolder()).id },
          sceneDefinition.canonical?.name,
          sceneDefinition.canonical?.priority,
          sceneDefinition.tokens,
        );
        firstScene ??= scene;
      } catch (error) {
        console.error(error);
        this.additionalMessages += `<br>Failed to create scene ${sceneDefinition.name}: ${error.message}`;
      }
    }

    await artDb.save();
    this.reportMissingCreatures();
    if (firstScene !== undefined) await world.activateScene(firstScene);
    progress("Complete. Enjoy!", 1);
  }

  async createJournals(pdf, moduleData, journalFolder) {
    const { adventure } = this;
    let remaining = [...moduleData.journalEntries];
    const groups = [];
    for (const group of adventure.journalPages) {
      const pages = group.pages
        .map((ref) => {
          const page = remaining.find((e) => e.flags[MODULE_ID].id === ref.id);
          if (page !== undefined && ref.name)
            page.name = pdf.decodeEncodedString(ref.name);
          return page;
        })
        .filter(Boolean);
      remaining = remaining.filter(
        (e) =>
          !pages.some((p) => p.flags[MODULE_ID].id === e.flags[MODULE_ID].id),
      );
      if (pages.length > 0)
        groups.push({ name: pdf.decodeEncodedString(group.name), pages });
    }
    if (remaining.length > 0)
      groups.push({ name: adventure.fullName, pages: remaining });

    let sort = 0;
    for (const { name, pages } of groups) {
      sort += 100;
      const created = await this.env.world.createJournalEntry({
        name,
        folder: (await journalFolder()).id,
        sort,
        ownership: { default: 0 },
        pages: pages.map(pickPageFields),
      });
      pages.forEach((page, index) => {
        page.journalId = created.id;
        page.journalPageId = created.pages.contents[index].id;
      });
    }
  }

  /** Dead compendium links used to vanish silently; tell the GM which creatures are absent. */
  reportMissingCreatures() {
    if (this.missingCreatures.length === 0) return;
    const ids = this.missingCreatures.map((npc) => npc.id).join(", ");
    this.additionalMessages += `<br>${this.missingCreatures.length} creature(s) are no longer in the PF2e compendiums and were skipped: ${ids}`;
  }
}

export { WATERMARK_ERROR };
