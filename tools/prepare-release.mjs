// Points a built manifest at its own release, so each installed version downloads its own zip
// rather than whatever release is newest. Fails if the tag does not match the module version.
// Usage: node tools/prepare-release.mjs <tag> [dist/module.json]
import { readFile, writeFile } from "node:fs/promises";

const [tag, manifestPath = "dist/module.json"] = process.argv.slice(2);
if (!tag) throw new Error("Usage: prepare-release <tag> [manifest]");

const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
if (tag !== `v${manifest.version}`) {
  console.error(`Tag ${tag} does not match module version ${manifest.version}.`);
  process.exit(1);
}

const releases = `${manifest.url}/releases`;
// The manifest URL stays on "latest" so installed copies can find updates.
manifest.manifest = `${releases}/latest/download/module.json`;
manifest.download = `${releases}/download/${tag}/module.zip`;
await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`download: ${manifest.download}`);
