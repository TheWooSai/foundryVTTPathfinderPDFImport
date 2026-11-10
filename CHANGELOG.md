# Changelog

## 1.3.0

- PFS 2-01, 2-02 and 2-13 read their text with the automatic layout, which captured more text, while keeping their own maps, walls and notes.
- Fixed the title of PFS 1-23, The Star-Crossed Court.
- Each release's manifest now downloads that release's own zip.
- Map grids: every plausible spacing is scored, and the one giving a typical map size (22-42 squares on the long side) wins. All 29 comparable test maps now measure correctly, up from 25 of 27.
- The import names only the maps whose grid is faint or ambiguous, instead of a general warning.
- The automatic fallback now also covers Season 2 and 3 scenarios without a definition.
- Added `npm run pdf:regress`, which compares definitions and the fallback across every PDF in `docs/`. Scenes record their source PDF page.

## 1.2.0

- PFS scenarios from Season 4 on without a definition now import automatically: layout, maps with measured grids, game aids and creatures. The import warns that grids should be checked.
- Added a Ko-fi link to the README.

## 1.1.0

- Added PFS 4-04, 4-07, 4-16, 5-02, 5-14, 5-19, 5-20, 6-15, 7-03 and 7-05, with journals, maps on measured grids, game aids and creatures. No walls or lights.
- Stat blocks the adventure definition does not list now import their PF2e compendium creature, matched by name and level, so Seasons 1 and 2 get actors.
- Fixed lost text: lines in unrecognized fonts, wrapped stat-block sentences and citations are kept, and a bullet in a map label no longer stops the parser mid-section.
- Added the PFS 3-17 handouts.
- Changed the license to AGPL-3.0-only. MIT-licensed code keeps its required notice in `LICENSES/`.
- Elite and weak creatures and tokens now use PF2e's adjustment rules.
- Printed stat blocks for creatures in no PF2e compendium are built as world actors, with attacks, actions, skills, defenses and compendium spells.

## 1.0.0

First release for Foundry v14.

- Scenes use v14 Levels, and darkness moved to the scene environment. Without this, maps were silently lost.
- Replaced the settings hooks, import dialog, file picker and chat message code with v14 APIs.
- Remapped 648 compendium links to current PF2e packs. 52 creatures have no equivalent and are reported at import.
- Converted 1,196 pre-v9 walls in four maps, which v14 rejected.
- Fixed three PFS season 1 scenes pointing at missing map data, and the `offSetY` typo.
- Added PFS 3-17 Dreams of a Dustbound Isle.
- Added a progress bar, reporting of skipped creatures and failed scenes, and support for non-root Foundry URLs.
