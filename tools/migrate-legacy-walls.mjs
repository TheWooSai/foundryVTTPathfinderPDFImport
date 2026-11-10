// One-off data fix: four early map files use pre-v9 wall values, which Foundry v14 rejects.
import { readFile, readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const SENSE = { 0: 0, 1: 20, 2: 10 };
const MOVE = { 0: 0, 1: 20 };
export function migrateWall(wall) {
  if (!("sense" in wall)) return wall;
  const { sense, ...rest } = wall;
  return {
    ...rest,
    move: MOVE[wall.move] ?? wall.move,
    sight: SENSE[sense] ?? sense,
    light: SENSE[sense] ?? sense,
    sound: SENSE[wall.sound ?? sense] ?? 20,
  };
}

if (import.meta.main) {
  let files = 0;
  let walls = 0;
  for (const top of await readdir("public", { withFileTypes: true })) {
    if (!top.isDirectory()) continue;
    const dir = join("public", top.name, "maps");
    let names = [];
    try {
      names = await readdir(dir);
    } catch {
      continue;
    }
    for (const name of names) {
      const path = join(dir, name);
      const data = JSON.parse(await readFile(path, "utf8"));
      const legacy = (data.walls ?? []).filter((w) => "sense" in w).length;
      if (legacy === 0) continue;
      data.walls = data.walls.map(migrateWall);
      await writeFile(path, `${JSON.stringify(data, null, 1)}\n`);
      files += 1;
      walls += legacy;
    }
  }
  console.log(`migrated ${walls} walls in ${files} files`);
}
