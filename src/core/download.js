import { loadImage } from "../platform/canvas.js";

export const usedFilenames = new Set();

export async function download(url) {
  if (!url) {
    url = "icons/svg/mystery-man.svg";
  }
  return loadImage(url, {
    crossOrigin: "use-credentials",
  });
}
