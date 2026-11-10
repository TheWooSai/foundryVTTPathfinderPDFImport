import {
  DEFAULT_BASE_PATH,
  DEFAULT_TOKEN_FRAME,
  MODULE_ID,
} from "../constants.js";
import { tokenArtDb } from "./token-art.js";

const PREMIUM_TOKEN_FRAME = "modules/pf2e-tokens-bestiaries/other/ring256.webp";

const definitions = {
  basePath: {
    name: "Base Path",
    hint: "Where imported images are stored.",
    default: DEFAULT_BASE_PATH,
    type: String,
  },
  alwaysCreateScenes: {
    name: "Always Create Scenes",
    hint: "When importing things like Flip-Mats or Interactive Maps, create the scene even if it updates an existing one.",
    default: false,
    type: Boolean,
  },
  alwaysUseImportedIcons: {
    name: "Always use imported icons",
    hint: "If enabled, ignore art from other modules (such as the Bestiary Token Pack) when creating actors.",
    default: false,
    type: Boolean,
  },
  npctokenframe: {
    name: "Token Frame",
    hint: "Image path for frames around NPCs.",
    default: DEFAULT_TOKEN_FRAME,
    type: String,
  },
  npctokenframebg: {
    name: "Token Frame Background",
    hint: "Image path for the background behind NPC frames.",
    default: "",
    type: String,
  },
};

export function registerSettings() {
  for (const [key, data] of Object.entries(definitions)) {
    game.settings.register(MODULE_ID, key, {
      scope: "world",
      config: true,
      ...data,
    });
  }
}

export const foundrySettings = {
  get: (key) => game.settings.get(MODULE_ID, key),
};

function makeButton(icon, label, onClick) {
  const button = document.createElement("button");
  button.type = "button";
  button.innerHTML = `<i class="${icon}" inert></i> ${label}`;
  button.addEventListener("click", onClick);
  return button;
}

/** Adds the frame presets and art reset below this module's settings. */
export function decorateSettingsConfig(root) {
  const input = (key) => root.querySelector(`[name="${MODULE_ID}.${key}"]`);
  const frame = input("npctokenframe");
  const background = input("npctokenframebg");
  const anchor = background?.closest(".form-group");
  if (!frame || !anchor || root.querySelector(`[data-${MODULE_ID}-controls]`))
    return;

  const setFrames = (frameValue, backgroundValue) => () => {
    frame.value = frameValue;
    background.value = backgroundValue;
  };
  const presets = document.createElement("div");
  presets.className = "form-group";
  presets.setAttribute(`data-${MODULE_ID}-controls`, "");
  presets.append(
    makeButton(
      "fa-solid fa-arrows-rotate",
      "Default Frames",
      setFrames(DEFAULT_TOKEN_FRAME, ""),
    ),
    makeButton(
      "fa-solid fa-circle-dollar",
      "Premium Module Frames",
      setFrames(PREMIUM_TOKEN_FRAME, ""),
    ),
  );
  const reset = document.createElement("div");
  reset.className = "form-group";
  reset.append(
    makeButton("fa-solid fa-trash", "Reset Imported Token Art", () =>
      tokenArtDb.reset(),
    ),
  );
  anchor.after(presets, reset);
}
