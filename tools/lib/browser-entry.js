import * as pdfjs from "pdfjs-dist";
import {
  getAdventureModule,
  getAllAdventureModules,
} from "../../src/adventures/index.js";
import { parsePdf } from "../../src/pdf/parse-pdf.js";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

async function load() {
  const data = new Uint8Array(await (await fetch("/test.pdf")).arrayBuffer());
  return parsePdf(data, () => {}, pdfjs);
}

window.pipeline = {
  pdfjs,
  load,
  parsePdf,
  getAdventureModule,
  getAllAdventureModules,
};

/** Runs a complete import against an in-memory world and returns everything it would have written. */
async function dryRun() {
  const { runImport } = await import("../../src/importer/run-import.js");
  const { buildSceneData } = await import("../../src/foundry/scene-data.js");
  const log = [];
  for (const level of ["log", "warn", "error"]) {
    const original = console[level].bind(console);
    console[level] = (...args) => {
      log.push(`${level}: ${args.join(" ")}`);
      original(...args);
    };
  }
  const written = {
    folders: [],
    journals: [],
    actors: [],
    scenes: [],
    tokens: [],
    uploads: [],
    chat: [],
  };
  let nextId = 1;
  const id = () => `id${String(nextId++).padStart(14, "0")}`;
  const world = {
    scenes: () => [],
    sceneArt: () => ({}),
    createFolder: async (d) => (written.folders.push(d), { ...d, id: id() }),
    createJournalEntry: async (d) => {
      written.journals.push(d);
      return {
        id: id(),
        pages: { contents: d.pages.map(() => ({ id: id() })) },
      };
    },
    actorDataFromUuid: async (uuid) => ({
      name: uuid.split(".").pop(),
      flags: {},
      system: { traits: { value: [] } },
      prototypeToken: { texture: {} },
    }),
    computeAdjustment: async (_d, adjustment) => ({ adjustment, hpValue: 1 }),
    findCompendiumCreature: async () => null,
    findSpellData: async (name) => ({ name, type: "spell", system: {} }),
    resolveLegacyLink: () => null,
    vocabulary: () => ({
      immunities: new Set(),
      weaknesses: new Set(),
      resistances: new Set(),
      senses: new Set(),
      languages: new Set(),
      creatureTraits: new Set(),
    }),
    randomId: id,
    createActorFromSource: async (d) => (
      written.actors.push(d),
      { ...d, id: id() }
    ),
    compendiumArt: () => undefined,
    mergeObject: Object.assign,
    createActor: async (d) => (written.actors.push(d), { ...d, id: id() }),
    createScene: async (spec) => {
      written.scenes.push(
        buildSceneData(spec, { authorId: "author0000000000" }),
      );
      return { id: id() };
    },
    createTokens: async (_s, p) => written.tokens.push(...p),
    refreshThumbnail: async () => {},
    activateScene: async () => {},
  };
  const settings = {
    get: (k) =>
      ({
        basePath: "./pathfinder-pdf-import/",
        npctokenframe: "/assets/default-frame-npc.png",
        npctokenframebg: "",
        alwaysCreateScenes: false,
        alwaysUseImportedIcons: false,
      })[k],
  };
  const artDb = {
    getTokenArt: () => undefined,
    setTokenArt() {},
    ready: async () => {},
    save: async () => {},
  };
  const storage = {
    mkdir: async () => {},
    upload: async (data, dir, name) => (
      written.uploads.push(`${dir}/${name}:${data.size}`),
      `${dir}/${name}`
    ),
  };
  const response = await fetch("/test.pdf");
  const file = new File([await response.arrayBuffer()], "test.pdf", {
    type: "application/pdf",
  });
  const progress = [];
  await runImport(file, {
    world,
    storage,
    settings,
    artDb,
    moduleRoot: "/",
    pdfjs,
    progress: (m) => progress.push(m),
    notify: async (m) => written.chat.push(m),
  });
  return { written, log, last: progress.at(-1) };
}
window.pipeline.dryRun = dryRun;
