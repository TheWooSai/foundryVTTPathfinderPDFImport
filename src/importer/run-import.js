import { getAdventureModule } from "../adventures/index.js";
import { parsePdf } from "../pdf/parse-pdf.js";
import { PdfData } from "../pdf/pdf-data.js";
import { AdventureImporter, WATERMARK_ERROR } from "./adventure-importer.js";

const UNSUPPORTED =
  "Could not detect PDF to import. This importer only supports adventures it has been programmed for. See the import dialog for the list.";
const BAD_WATERMARK =
  "Couldn't detect the watermark. This importer only imports officially licensed adventures.";

/**
 * Parse an uploaded PDF (or a saved JSON text dump) and import it.
 * @param {File} file
 * @param {object} env  world, storage, settings, artDb, moduleRoot, pdfjs, progress, notify
 * @returns {Promise<AdventureImporter|undefined>}
 */
export async function runImport(file, env) {
  const { progress, notify } = env;
  let pdf;
  if (file.type === "application/json") {
    pdf = new PdfData({
      textDetails: JSON.parse(await file.text()),
      imageDetails: [],
    });
  } else {
    pdf = await parsePdf(
      new Uint8Array(await file.arrayBuffer()),
      progress,
      env.pdfjs,
    );
  }

  const adventure = env.chooseAdventure
    ? env.chooseAdventure(pdf)
    : getAdventureModule(pdf);
  if (adventure === undefined) {
    progress("failed to detect pdf. cannot proceed.", 1);
    await notify(UNSUPPORTED);
    return undefined;
  }

  const importer = new AdventureImporter(adventure, env);
  try {
    await importer.import(pdf, progress);
    await notify(
      `Your import of ${adventure.fullName} is complete${importer.additionalMessages}`,
    );
  } catch (error) {
    progress(error.message, 1);
    await notify(
      error.message === WATERMARK_ERROR
        ? BAD_WATERMARK
        : `Error: ${error.message}`,
    );
  }
  return importer;
}
