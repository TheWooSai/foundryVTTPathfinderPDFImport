# Changelog

## 6.0.0

Rebuilt from pdftofoundry 5.0.0 as readable source for Foundry v14.

- Scenes use v14 Levels, and darkness moved to the scene environment. Without this, maps were silently lost.
- Replaced the settings hooks, import dialog, file picker and chat message code with v14 APIs.
- Remapped 648 compendium links to current PF2e packs. 52 creatures have no equivalent and are reported at import.
- Converted 1,196 pre-v9 walls in four maps, which v14 rejected.
- Fixed three PFS season 1 scenes pointing at missing map data, and the `offSetY` typo.
- Added PFS 3-17 Dreams of a Dustbound Isle.
- Added a progress bar, reporting of skipped creatures and failed scenes, and support for non-root Foundry URLs.
