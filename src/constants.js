/** Foundry package id. Must match the folder name under Data/modules. */
export const MODULE_ID = "foundry-pathfinder-pdf-import";
export const LOG_PREFIX = "PF2e PDF Import |";

/** Lowest PF2e system version this module supports (first 8.x used for the v14 port). */
export const MIN_PF2E_VERSION = "8.3.0";

export const DEFAULT_BASE_PATH = "./pathfinder-pdf-import/";
export const DEFAULT_TOKEN_FRAME = `modules/${MODULE_ID}/assets/default-frame-npc.png`;

/** Files written to the root of the Foundry Data folder. */
export const TOKEN_ART_FILE = "pathfinder-pdf-import.json";
export const IMAGE_MAPPING_FILE = "pathfinder-pdf-import-image-mapping.json";

/** Foundry's id for a Scene's first Level (`Scene.metadata.defaultLevelId` in v14). */
export const DEFAULT_LEVEL_ID = "defaultLevel0000";
