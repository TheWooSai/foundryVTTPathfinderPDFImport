# CLAUDE.md

Foundry VTT v14 module that imports Pathfinder 2e PDFs. Plain ESM JavaScript, bundled by esbuild.

## Rules

- **Provenance:** base only on pdftofoundry 5.0.0 (MIT). Never read from or copy pdftofoundry 5.1.0+, or forks and PRs built on it (CC BY-ND). See `THIRD_PARTY.md`.
- **PDFs never reach git.** That covers extracted text and images too. Use `test-output/` (ignored). Adventure definitions store coordinates and text ids, not Paizo's words.
- Keep the watermark check in `AdventureImporter.verifyWatermark`.
- Record new dependencies in `THIRD_PARTY.md` and pin exact versions.

## Commands

```bash
npm test                              # node:test; no Foundry needed
npm run build                         # dist/ is the installable module
npm run pdf:inspect -- file.pdf       # text.json and images.json in test-output/
npm run pdf:test -- file.pdf          # full import into a fake world, headless Chromium
npm run demo:check -- file.pdf        # real v14 classes on demo.foundryvtt.com
node tools/remap-compendium-uuids.mjs <old-pf2e> <new-pf2e>
```

`demo:check` joins as a player using the password published on the demo's join page. It blocks Document writes and serves module files and the PDF from this machine. The demo gives no GM access, so it cannot test real document creation, uploads or the settings window.

## Architecture

- `src/foundry/` is the only code that touches Foundry globals. `world.js` holds every Document write and `storage.js` every file write. `import-dialog.js` wires them into the importer as an `env` object, which is how tests substitute them.
- `src/foundry/scene-data.js` converts the importer's scene spec to v14 source data. Its offset and Level handling follows Foundry's `Scene#_preCreate`.
- `src/importer/` runs an import. `src/pdf/` turns a PDF into positioned text and images.
- `src/core/` is the adventure framework. `src/adventures/` has one class per product, registered in that folder's `index.js`.
- `public/` is copied into `dist/`, including `<adventure>/maps/*.json` with walls, lights and drawings.
- `main.js` stays small; the adventures load through dynamic import when an import starts.

## Stat-block actors

`src/importer/statblock-actor.js` converts parsed stat blocks to PF2e 8.x source. It only runs for creatures with no compendium match by name (`world.hasCompendiumCreature`). `tools/build-legacy-names.mjs` generates `data/legacy-names.json` from a pre-remaster and a current PF2e checkout. `FORCE_BUILD=1 IMPORT_ONLY=1 npm run demo:check -- file.pdf` converts every stat block against live PF2e and compares its calculated statistics.

## Adding an adventure

1. `npm run pdf:inspect -- file.pdf`, then read `test-output/text.json` and `images.json`.
2. Copy the closest definition in `src/adventures/`. `pfs/season3/pfs3-17.js` is a compact example.
3. Set `detect`, `pages`, `scenes`, `journals` and `npcs`. `forIds` values are the ids of stat-block heading text. Map grids come from `imageCols`/`imageRows`.
4. Add it to the folder's `index.js` and to `public/templates/import-window.hbs`.
5. `npm run pdf:test -- file.pdf`, and fix anything it logs as unknown content.

## After a Foundry or PF2e update

Run `demo:check`, read the release notes, and rerun the remap tool if PF2e moved compendium entries. Update `compatibility` in `public/module.json` only for versions you tested.
