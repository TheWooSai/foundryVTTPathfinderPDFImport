/**
 * Canvas access is routed through here so the PDF pipeline can run outside a
 * browser page if a test supplies its own implementation.
 */
let impl = {
  createCanvas(width, height) {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    return canvas;
  },
  loadImage(src, { crossOrigin } = {}) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      if (crossOrigin) image.crossOrigin = crossOrigin;
      image.onload = () => resolve(image);
      image.onerror = () =>
        reject(new Error(`Failed to load the image "${src}"`));
      image.src = src;
    });
  },
};

export const setCanvasImplementation = (next) => {
  impl = next;
};
export const createCanvas = (width, height) => impl.createCanvas(width, height);
export const loadImage = (src, options) => impl.loadImage(src, options);
