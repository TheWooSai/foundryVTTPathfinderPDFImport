import { DEFAULT_LEVEL_ID } from "../constants.js";
import { buildSceneData, readSceneArt } from "./scene-data.js";

const levelId = () => Scene.metadata.defaultLevelId ?? DEFAULT_LEVEL_ID;

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
    for (const { actor, x, y } of placements) {
      const token = await actor.getTokenDocument(
        { x, y, hidden: true },
        { parent: scene },
      );
      tokens.push(token.toObject());
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
