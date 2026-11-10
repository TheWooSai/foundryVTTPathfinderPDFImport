import assert from "node:assert/strict";
import { test } from "node:test";
import { buildSceneData, readSceneArt } from "../src/foundry/scene-data.js";

const spec = () => ({
  name: "Map",
  width: 2700,
  height: 3900,
  darkness: 0.5,
  grid: { type: 1, size: 100 },
  image: { src: "maps/a.webp", offsetX: 12, offsetY: -4 },
  notes: [
    { entryId: "e", x: 1, y: 2, icon: "icons/svg/book.svg", iconSize: 40 },
  ],
  drawings: [{ author: "someoneElse00000", x: 0, y: 0 }],
});

test("art moves to the first Level and the legacy fields are gone", () => {
  const data = buildSceneData(spec(), { levelId: "defaultLevel0000" });
  assert.deepEqual(data.levels, [
    {
      _id: "defaultLevel0000",
      name: "Map",
      background: { src: "maps/a.webp" },
    },
  ]);
  assert.equal(data.initialLevel, "defaultLevel0000");
  for (const legacy of ["background", "darkness", "image"])
    assert.equal(legacy in data, false);
});

test("offsets become shifts with the same sign, as in Foundry's Scene#_preCreate", () => {
  const data = buildSceneData(spec());
  assert.equal(data.shiftX, 12);
  assert.equal(data.shiftY, -4);
});

test("darkness moves to the environment", () => {
  assert.deepEqual(buildSceneData(spec()).environment, { darknessLevel: 0.5 });
});

test("notes use texture.src, and placeables are owned by the importing user", () => {
  const data = buildSceneData(spec(), { authorId: "me00000000000000" });
  assert.deepEqual(data.notes[0].texture, { src: "icons/svg/book.svg" });
  assert.equal("icon" in data.notes[0], false);
  assert.equal(data.notes[0].author, "me00000000000000");
  assert.equal(data.drawings[0].author, "me00000000000000");
});

test("readSceneArt reads the initial Level", () => {
  const art = readSceneArt({
    initialLevel: { background: { src: "x.webp" } },
    width: 10,
    height: 20,
    shiftX: 3,
    shiftY: 4,
  });
  assert.deepEqual(art, {
    src: "x.webp",
    width: 10,
    height: 20,
    offsetX: 3,
    offsetY: 4,
  });
});
