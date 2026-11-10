import { LOG_PREFIX, MIN_PF2E_VERSION, MODULE_ID } from "../constants.js";
import { createProgressReporter, notifyByChat } from "./feedback.js";
import { foundrySettings } from "./settings.js";
import { foundryStorage } from "./storage.js";
import { tokenArtDb } from "./token-art.js";
import { foundryWorld } from "./world.js";

const TEMPLATE = `modules/${MODULE_ID}/templates/import-window.hbs`;
const moduleRoot = () => foundry.utils.getRoute(`modules/${MODULE_ID}`);

async function loadPdfjs() {
  const pdfjs = await import("pdfjs-dist");
  pdfjs.GlobalWorkerOptions.workerSrc = foundry.utils.getRoute(
    `modules/${MODULE_ID}/vendor/pdf.worker.min.mjs`,
  );
  return pdfjs;
}

export function hasSupportedSystem() {
  if (game.system.id !== "pf2e") {
    ui.notifications.error(
      "The PDF importer requires the Pathfinder 2e game system.",
    );
    return false;
  }
  if (foundry.utils.isNewerVersion(MIN_PF2E_VERSION, game.system.version)) {
    ui.notifications.error(
      `The PDF importer needs PF2e ${MIN_PF2E_VERSION} or newer. You are using ${game.system.version}.`,
    );
    return false;
  }
  return true;
}

async function startImport(file) {
  const { runImport } = await import("../importer/run-import.js");
  return runImport(file, {
    world: foundryWorld,
    storage: foundryStorage,
    settings: foundrySettings,
    artDb: tokenArtDb,
    moduleRoot: moduleRoot(),
    pdfjs: await loadPdfjs(),
    progress: createProgressReporter(),
    notify: notifyByChat,
  });
}

export async function openImportDialog() {
  const version = game.modules.get(MODULE_ID)?.version ?? "dev";
  await foundry.applications.api.DialogV2.wait({
    window: { title: `Import PDF (version ${version})` },
    id: `${MODULE_ID}-dialog`,
    position: { width: 560, height: "auto" },
    content: await foundry.applications.handlebars.renderTemplate(TEMPLATE, {}),
    rejectClose: false,
    render: (_event, dialog) => {
      new foundry.applications.ux.Tabs({
        group: "primary",
        navSelector: "nav[data-group=primary]",
        contentSelector: ".pdf-import-content",
        initial: "summary",
      }).bind(dialog.element);
    },
    buttons: [
      {
        action: "import",
        icon: "fa-solid fa-file-import",
        label: "Import PDF",
        default: true,
        callback: async (_event, button) => {
          const file = button.form.elements.pdf.files[0];
          if (!file)
            return ui.notifications.error("Choose a PDF to import first.");
          startImport(file).catch((error) => {
            console.error(`${LOG_PREFIX} Import failed`, error);
            ui.notifications.error(`PDF import failed: ${error.message}`);
          });
        },
      },
      { action: "cancel", icon: "fa-solid fa-xmark", label: "Cancel" },
    ],
  });
}

/** Adds the GM-only import button to the Settings sidebar. */
export function addImportButton(root, isGM = game.user.isGM) {
  if (!isGM || root.querySelector(`[data-${MODULE_ID}-button]`)) return;
  const section = document.createElement("section");
  section.className = "flexcol";
  const heading = document.createElement("h4");
  heading.className = "divider";
  heading.textContent = "PDF Import";
  const button = document.createElement("button");
  button.type = "button";
  button.setAttribute(`data-${MODULE_ID}-button`, "");
  button.innerHTML = '<i class="fa-solid fa-file-import" inert></i> Import PDF';
  button.addEventListener("click", () => {
    if (hasSupportedSystem()) openImportDialog();
  });
  section.append(heading, button);
  const documentation = root.querySelector("section.documentation");
  if (documentation) documentation.after(section);
  else root.append(section);
}
