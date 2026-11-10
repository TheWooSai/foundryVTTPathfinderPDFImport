// Runs inside a live Foundry page. Validates this module against the real v14 classes
// without writing anything: every Document is constructed locally and strictly validated.
import * as pdfjs from "pdfjs-dist";
import { getAllAdventureModules } from "../../src/adventures/index.js";
import { MODULE_ID } from "../../src/constants.js";
import {
  addImportButton,
  openImportDialog,
} from "../../src/foundry/import-dialog.js";
import { buildSceneData, readSceneArt } from "../../src/foundry/scene-data.js";
import { foundryWorld } from "../../src/foundry/world.js";
import { runImport } from "../../src/importer/run-import.js";

const strict = { strict: true };
const id = () => foundry.utils.randomID();

/** Refuse any Document write while the checks run. */
function blockWrites() {
  const socket = game.socket;
  const original = socket.emit;
  socket.emit = function (event, ...args) {
    // Compendium and world reads share this event, with action "get".
    if (event === "modifyDocument" && args[0]?.action !== "get") {
      throw new Error("Write blocked by the check harness");
    }
    return original.call(this, event, ...args);
  };
  return () => {
    socket.emit = original;
  };
}

const sceneFrom = (spec) =>
  new Scene(
    buildSceneData(spec, {
      levelId: Scene.metadata.defaultLevelId,
      authorId: game.user.id,
    }),
    strict,
  );

async function checkMaps(files) {
  const failures = [];
  for (const file of files) {
    const details = await (await fetch(`/modules/${MODULE_ID}/${file}`)).json();
    try {
      sceneFrom({
        name: file,
        width: 4000,
        height: 4000,
        image: { src: "a.webp" },
        ...details,
      });
    } catch (error) {
      failures.push(`${file}: ${error.message.slice(0, 200)}`);
    }
  }
  return { checked: files.length, failures };
}

function checkCompendiumLinks() {
  const missing = [];
  let checked = 0;
  for (const adventure of getAllAdventureModules()) {
    for (const npc of adventure.npcs) {
      const [, scope, pack, , docId] = npc.actorUuid.split(".");
      checked += 1;
      if (!game.packs.get(`${scope}.${pack}`)?.index.has(docId))
        missing.push(npc.actorUuid);
    }
  }
  return { checked, missing: [...new Set(missing)] };
}

async function checkImport() {
  const created = {
    folders: 0,
    journals: 0,
    pages: 0,
    actors: 0,
    scenes: [],
    tokens: 0,
    chat: [],
    uploads: 0,
  };
  const errors = [];
  const attempt = (label, fn) => {
    try {
      return fn();
    } catch (error) {
      errors.push(`${label}: ${error.message.slice(0, 300)}`);
      throw error;
    }
  };
  const world = {
    scenes: () => [],
    sceneArt: readSceneArt,
    createFolder: async (d) =>
      attempt(
        "folder",
        () => (new Folder(d, strict), created.folders++, { id: id() }),
      ),
    createJournalEntry: async (d) =>
      attempt("journal", () => {
        const pages = d.pages.map((p) => ({ ...p, _id: id() }));
        const entry = new JournalEntry({ ...d, pages }, strict);
        created.journals += 1;
        created.pages += entry.pages.size;
        return {
          id: id(),
          pages: { contents: pages.map((p) => ({ id: p._id })) },
        };
      }),
    actorDataFromUuid: foundryWorld.actorDataFromUuid,
    compendiumArt: foundryWorld.compendiumArt,
    mergeObject: foundryWorld.mergeObject,
    createActor: async (d) =>
      attempt("actor", () => {
        const actor = new CONFIG.Actor.documentClass(
          { ...d, _id: id(), folder: null },
          strict,
        );
        created.actors += 1;
        created.lastActor = actor;
        return actor;
      }),
    createScene: async (spec) =>
      attempt("scene", () => {
        const scene = sceneFrom({ ...spec, folder: null });
        created.scenes.push({
          name: scene.name,
          map: scene.initialLevel?.background?.src,
          grid: scene.grid.size,
          size: [scene.width, scene.height],
          darkness: scene.environment.darknessLevel,
        });
        return scene;
      }),
    createTokens: async (scene, placements) => {
      for (const { actor, x, y } of placements) {
        const token = await actor.getTokenDocument(
          { x, y, hidden: true },
          { parent: scene },
        );
        new TokenDocument(token.toObject(), { parent: scene, ...strict });
        created.tokens += 1;
      }
    },
    refreshThumbnail: async () => {},
    activateScene: async () => {},
  };
  const settings = {
    get: (key) =>
      ({
        basePath: "./pathfinder-pdf-import/",
        npctokenframe: `modules/${MODULE_ID}/assets/default-frame-npc.png`,
        npctokenframebg: "",
        alwaysCreateScenes: false,
        alwaysUseImportedIcons: false,
      })[key],
  };
  const artDb = {
    getTokenArt: () => undefined,
    setTokenArt() {},
    ready: async () => {},
    save: async () => {},
  };
  const storage = {
    mkdir: async () => {},
    upload: async (_d, dir, name) => (created.uploads++, `${dir}/${name}`),
  };
  pdfjs.GlobalWorkerOptions.workerSrc = `/modules/${MODULE_ID}/vendor/pdf.worker.min.mjs`;
  const buffer = await (await fetch("/__import-check/test.pdf")).arrayBuffer();
  const importer = await runImport(
    new File([buffer], "test.pdf", { type: "application/pdf" }),
    {
      world,
      storage,
      settings,
      artDb,
      moduleRoot: `/modules/${MODULE_ID}`,
      pdfjs,
      progress: () => {},
      notify: async (content) => {
        new ChatMessage(
          {
            whisper: [game.user.id],
            content,
            style: CONST.CHAT_MESSAGE_STYLES.OTHER,
            speaker: { alias: "x" },
          },
          strict,
        );
        created.chat.push(content);
      },
    },
  );
  // 3-17 places no tokens, so exercise that path directly with an imported actor.
  const tokenScene = sceneFrom({
    name: "t",
    width: 1000,
    height: 1000,
    image: { src: "a.webp" },
  });
  const placed = await created.lastActor.getTokenDocument(
    { x: 100, y: 200, hidden: true },
    { parent: tokenScene },
  );
  new TokenDocument(placed.toObject(), { parent: tokenScene, ...strict });
  const tokenProbe = {
    level: placed._source.level,
    x: placed.x,
    y: placed.y,
    hidden: placed.hidden,
  };
  delete created.lastActor;
  return {
    created,
    tokenProbe,
    errors,
    missing: importer?.missingCreatures?.map((n) => n.id) ?? [],
  };
}

async function checkInterface() {
  const result = {};
  await ui.sidebar.changeTab("settings", "primary");
  const root = document.querySelector("#settings");
  addImportButton(root, true);
  const button = root.querySelector(`[data-${MODULE_ID}-button]`);
  result.buttonPlaced =
    button
      ?.closest("section")
      ?.previousElementSibling?.matches("section.documentation") ?? false;
  button?.closest("section").remove();

  // Foundry loads templates over its socket, so seed the cache from the local build.
  const templatePath = `modules/${MODULE_ID}/templates/import-window.hbs`;
  const templateSource = await (await fetch(`/${templatePath}`)).text();
  Handlebars.registerPartial(templatePath, Handlebars.compile(templateSource));

  openImportDialog();
  await new Promise((r) => setTimeout(r, 2500));
  const dialog = document.getElementById(`${MODULE_ID}-dialog`);
  result.dialogOpen = Boolean(dialog);
  if (dialog) {
    result.fileInput = Boolean(
      dialog.querySelector("input[type=file][name=pdf]"),
    );
    result.nestedForm = dialog.querySelectorAll("form form").length;
    const tabs = () =>
      [...dialog.querySelectorAll(".tab[data-tab]")]
        .filter((t) => t.classList.contains("active"))
        .map((t) => t.dataset.tab);
    result.initialTab = tabs();
    dialog.querySelector('nav [data-tab="pfs"]').click();
    await new Promise((r) => setTimeout(r, 300));
    result.afterClick = tabs();
  }
  return result;
}

window.importCheck = {
  blockWrites,
  checkMaps,
  checkCompendiumLinks,
  checkImport,
  checkInterface,
  info: () => ({
    foundry: game.release.version,
    pf2e: game.system.version,
    role: game.user.role,
  }),
  closeDialog: () =>
    document
      .getElementById(`${MODULE_ID}-dialog`)
      ?.querySelector('[data-action="cancel"]')
      ?.click(),
};
