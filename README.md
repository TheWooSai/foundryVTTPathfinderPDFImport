# Pathfinder PDF Importer for Foundry VTT v14

Imports Pathfinder 2e adventures from PDFs you own into Foundry: journals, scenes with maps, walls and lights, actors with token art. You need the unmodified, watermarked PDF. Nothing is uploaded anywhere except your own Foundry Data folder.

Licensed under [AGPL-3.0-only](LICENSE). Code received under the MIT license keeps its required notice in [LICENSES/](LICENSES/), and other components are listed in [THIRD_PARTY.md](THIRD_PARTY.md).

**Requires** Foundry VTT 14 and the PF2e system 8.3.0 or newer.

If this module saves you time, you can support it on [Ko-fi](https://ko-fi.com/woosai).

## Install

This repository is private, so Foundry cannot fetch the manifest URL by itself.

1. Run `npm ci && npm run build`, or download `module.zip` from a GitHub release.
2. Copy `dist/` (or the unzipped release) to `Data/modules/foundry-pathfinder-pdf-import/`.
3. Enable **Pathfinder PDF Importer** in your world.
4. As GM, open the Settings sidebar and click **Import PDF**.

## Limits

- 197 adventure definitions are included, listed in the import dialog: PFS Seasons 1–3 plus ten Season 4–7 scenarios, adventure paths, bounties, one-shots, standalone adventures and bestiaries. Other PDFs are refused, except PFS scenarios from Season 4 on (see below).
- Creatures named in an adventure definition but gone from PF2e are rebuilt from their printed stat block when the PDF has one, and otherwise named in the chat message when the import finishes. See `data/compendium-remap.json`.
- Printed stat blocks for creatures in no PF2e compendium become world actors. Spells PF2e no longer has are listed in the actor's private notes.
- PFS 3-17 and the Season 4–7 scenarios have maps, journals, game aids and creatures, but no walls, lights or token placement.
- Any other PFS scenario from Season 4 on imports through an automatic fallback that reads the layout, maps and grids from the PDF. Tested on ten scenarios, it measured 21 of 23 map grids correctly, so check each map's grid; the chat message reminds you.

## Development

Needs Node 24. See [CLAUDE.md](CLAUDE.md) for the architecture and how to add an adventure.

```bash
npm ci
npm test                              # unit and data checks
npm run build                         # writes dist/
npx playwright install chromium       # once, for the two commands below
npm run pdf:test -- /path/to/file.pdf # full import into an in-memory world
npm run demo:check -- /path/to/file.pdf  # strict validation on the public v14 demo, read-only
```

PDFs and everything derived from them stay out of git. `*.pdf` and `test-output/` are ignored.
