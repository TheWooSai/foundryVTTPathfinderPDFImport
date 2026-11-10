import { MODULE_ID } from "./constants.js";
import { extractJournals, extractPlaceables } from "./foundry/dev-tools.js";
import { addImportButton, openImportDialog } from "./foundry/import-dialog.js";
import {
  decorateSettingsConfig,
  registerSettings,
} from "./foundry/settings.js";
import { tokenArtDb } from "./foundry/token-art.js";

Hooks.once("init", () => {
  registerSettings();
  game.modules.get(MODULE_ID).api = {
    import: openImportDialog,
    resetTokenArt: () => tokenArtDb.reset(),
    extractPlaceables,
    extractJournals,
  };
  tokenArtDb.warmup();
});

Hooks.on("renderSettings", (_app, html) => addImportButton(html));
Hooks.on("renderSettingsConfig", (_app, html) => decorateSettingsConfig(html));
