import { DEFAULT_LEVEL_ID, MODULE_ID } from "../constants.js";

const DEFAULT_NOTE_ICON = "icons/svg/book.svg";

/**
 * Convert the importer's scene spec to Foundry v14 Scene source data.
 *
 * v14 moved scene art onto an embedded Level. `background` and `darkness` are no longer
 * Scene fields and are silently discarded if sent, so a Scene created the old way has no
 * map. `image.offsetX/Y` become `shiftX/Y` with the same sign, matching the conversion in
 * Foundry's own `Scene#_preCreate`.
 *
 * Pure function: the unit tests exercise it without Foundry.
 */
export function buildSceneData(
  spec,
  { levelId = DEFAULT_LEVEL_ID, authorId } = {},
) {
  const { image, darkness, notes = [], drawings, ...rest } = spec;
  return {
    ...rest,
    levels: [{ _id: levelId, name: "Map", background: { src: image.src } }],
    initialLevel: levelId,
    shiftX: image.offsetX ?? 0,
    shiftY: image.offsetY ?? 0,
    environment: { darknessLevel: darkness ?? 0 },
    notes: notes.map(({ icon, ...note }) => ({
      ...note,
      texture: { src: icon ?? DEFAULT_NOTE_ICON },
      ...(authorId ? { author: authorId } : {}),
    })),
    ...(drawings
      ? {
          drawings: drawings.map((d) =>
            authorId ? { ...d, author: authorId } : d,
          ),
        }
      : {}),
  };
}

/** Fields of a Scene that identify and place its map art. */
export function readSceneArt(scene) {
  const level = scene.initialLevel ?? scene.firstLevel;
  return {
    src: level?.background?.src ?? null,
    width: scene.width,
    height: scene.height,
    offsetX: scene.shiftX ?? 0,
    offsetY: scene.shiftY ?? 0,
  };
}

/** Apply elite/weak fields to one unlinked token, leaving its base actor unchanged. */
export function withAdjustedDelta(tokenData, { adjustment, hpValue }) {
  const delta = tokenData.delta ?? {};
  return {
    ...tokenData,
    delta: {
      ...delta,
      system: {
        ...delta.system,
        attributes: {
          ...delta.system?.attributes,
          adjustment,
          hp: { value: hpValue },
        },
      },
    },
  };
}

export const importFlags = (id) => ({ [MODULE_ID]: { id } });
