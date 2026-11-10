import assert from "node:assert/strict";
import { test } from "node:test";
import { joinPath } from "../src/platform/path.js";
import { parseDataPath } from "../src/foundry/storage.js";
import { migrateWall } from "../tools/migrate-legacy-walls.mjs";

test("joinPath normalizes", () => {
  assert.equal(joinPath("./base/", "adv", "map.webp"), "base/adv/map.webp");
  assert.equal(
    joinPath("/modules/x", "/pfs/maps/a.json"),
    "/modules/x/pfs/maps/a.json",
  );
  assert.equal(joinPath("a/./b", "../c"), "a/c");
  assert.equal(joinPath("base", "", "f"), "base/f");
});

test("parseDataPath understands sources and S3 buckets", () => {
  assert.deepEqual(parseDataPath("images/x"), {
    source: "data",
    path: "images/x",
  });
  assert.deepEqual(parseDataPath("[s3:bucket] images/x"), {
    source: "s3",
    bucket: "bucket",
    path: "images/x",
  });
});

test("legacy walls convert to current enumerations", () => {
  assert.deepEqual(
    migrateWall({ c: [0, 0, 1, 1], move: 1, sense: 2, door: 0, ds: 0 }),
    {
      c: [0, 0, 1, 1],
      move: 20,
      sight: 10,
      light: 10,
      sound: 10,
      door: 0,
      ds: 0,
    },
  );
  const modern = { c: [0, 0, 1, 1], move: 20, sight: 20 };
  assert.equal(migrateWall(modern), modern);
});
