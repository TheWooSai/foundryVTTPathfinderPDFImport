# Pathfinder PDF Importer for Foundry VTT v14

Imports Pathfinder 2e adventures from PDFs you own into Foundry: journals, scenes with maps, walls and lights, actors with token art. You need the unmodified, watermarked PDF. Nothing is uploaded anywhere except your own Foundry Data folder.

Rebuilt from the MIT-licensed [pdftofoundry](https://github.com/fryguy1013/pdftofoundry) **5.0.0** by Kevin Hjelden. See [THIRD_PARTY.md](THIRD_PARTY.md).

**Requires** Foundry VTT 14 and the PF2e system 8.3.0 or newer.

## Install

This repository is private, so Foundry cannot fetch the manifest URL by itself.

1. Run `npm ci && npm run build`, or download `module.zip` from a GitHub release.
2. Copy `dist/` (or the unzipped release) to `Data/modules/foundry-pathfinder-pdf-import/`.
3. Enable **Pathfinder PDF Importer** in your world.
4. As GM, open the Settings sidebar and click **Import PDF**.

## Limits

- 187 adventure definitions are included, listed in the import dialog. Other PDFs are refused.
- Creatures PF2e removed in its remaster, with no same-named replacement, are skipped and named in the chat message when the import finishes. See `data/compendium-remap.json`.
- PFS 3-17 has its map, journals and game aids, but no walls, lights or token placement.

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

GitHub Actions workflows are in `ci/workflows/` and are not active yet. To enable them, run `gh auth refresh -s workflow`, then `git mv ci/workflows .github/workflows`, and commit and push.

PDFs and everything derived from them stay out of git. `*.pdf` and `test-output/` are ignored.
