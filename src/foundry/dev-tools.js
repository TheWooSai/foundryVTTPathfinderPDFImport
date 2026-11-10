import { readSceneArt } from "./scene-data.js";

/**
 * Authoring helpers, run from the browser console as game.modules.get(id).api.
 * They copy a finished scene's placeables as the JSON stored in public/<adventure>/maps/.
 */
const mapId = (src) =>
  src.split("\\").pop().split("/").pop().split(".").shift();

async function copyResult(scene, text) {
  await navigator.clipboard.writeText(text);
  const id = mapId(readSceneArt(scene).src ?? "");
  ui.notifications.info(
    `Copied data for ${scene.name} (${id}) to the clipboard`,
  );
}

export function extractPlaceables() {
  const scene = game.scenes.active;
  const list = (collection) =>
    collection.map((d) => JSON.stringify(d.toObject()));
  const section = (name, rows) =>
    `"${name}": [\n${rows.map((r) => `    ${r}`).join(",\n")}\n]`;
  const body = [
    section("walls", list(scene.walls)),
    section("lights", list(scene.lights)),
    section("drawings", list(scene.drawings)),
  ].join(",\n");
  return copyResult(scene, `{\n${body}\n}\n`);
}

function journalPlacement(note) {
  const page = game.journal.get(note.entryId).pages.get(note.pageId);
  return {
    x: note.x,
    y: note.y,
    id: page.flags?.[Object.keys(page.flags)[0]]?.id,
    text: note.text,
  };
}

function tokenPlacement(token) {
  const traits = token.actor?.system?.traits?.value;
  return {
    id: token.actor?.flags?.[Object.keys(token.actor.flags)[0]]?.id,
    x: token.x,
    y: token.y,
    ...(traits?.includes("elite")
      ? { elite: true }
      : traits?.includes("weak")
        ? { weak: true }
        : {}),
  };
}

export function extractJournals() {
  const scene = game.scenes.active;
  const rows = (items) =>
    items.map((x) => `    ${JSON.stringify(x)},\n`).join("");
  const text = `journals: [\n${rows(scene.notes.contents.map(journalPlacement))}],\ntokens: [\n${rows(scene.tokens.contents.map(tokenPlacement))}]`;
  return copyResult(scene, text);
}
