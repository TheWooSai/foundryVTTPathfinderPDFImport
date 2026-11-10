import { createCanvas, loadImage } from "../platform/canvas.js";
import { PdfData } from "./pdf-data.js";

const IDENTITY = () => [1, 0, 0, 1, 0, 0];
const BLANK_FILL = "white";

function ensureId(used, build) {
  let n = 0;
  let id;
  while (true) {
    id = build(n);
    if (!used.has(id)) break;
    n += 1;
  }
  used.add(id);
  return id;
}

const encodeId = (id) => btoa(id).replace(/=/g, "");
const toHexColor = (rgb) =>
  "#" + Array.from(rgb, (v) => v.toString(16).padStart(2, "0")).join("");

function fontDetails(page, fontRef) {
  let name = fontRef;
  let matrix = IDENTITY();
  try {
    const font = page.commonObjs.get(fontRef);
    name = font.name;
    if (font.fontMatrix) matrix = font.fontMatrix;
  } catch {
    // Font not resolved yet: fall back to the reference name.
  }
  const plus = fontRef.indexOf("+");
  if (plus !== -1) name = fontRef.substring(plus + 1);
  return [name, matrix];
}

function imagePainter(image) {
  if (image.src !== undefined) {
    return async (ctx) => {
      const loaded = await loadImage(image.src);
      ctx.drawImage(loaded, 0, 0, image.width, image.height);
    };
  }
  if (image.kind === 3) {
    return async (ctx) => {
      const target = ctx.createImageData(image.width, image.height);
      target.data.set(image.data, 0);
      ctx.putImageData(target, 0, 0);
    };
  }
  if (image.kind === 2) {
    return async (ctx) => {
      const target = ctx.createImageData(image.width, image.height);
      for (let s = 0, d = 0; s < image.data.length; s += 3, d += 4) {
        target.data[d] = image.data[s];
        target.data[d + 1] = image.data[s + 1];
        target.data[d + 2] = image.data[s + 2];
        target.data[d + 3] = 255;
      }
      ctx.putImageData(target, 0, 0);
    };
  }
  if (image.bitmap !== undefined) {
    return async (ctx) =>
      ctx.drawImage(image.bitmap, 0, 0, image.width, image.height);
  }
  console.error("Unknown PDF image kind", image.kind);
  return async () => {};
}

function imageCanvasFactory(image) {
  const paint = imagePainter(image);
  const blankCanvas = (width, height) => {
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = BLANK_FILL;
    ctx.fillRect(0, 0, width, height);
    return [canvas, ctx];
  };

  return async (
    width,
    height,
    cropLeft,
    cropTop,
    cropRight,
    cropBottom,
    rotateCW,
  ) => {
    let canvas = createCanvas(image.width, image.height);
    await paint(canvas.getContext("2d"));

    if (
      cropLeft !== undefined &&
      cropTop !== undefined &&
      cropRight !== undefined &&
      cropBottom !== undefined
    ) {
      const cropWidth = cropRight - cropLeft;
      const cropHeight = cropBottom - cropTop;
      const [cropped, ctx] = blankCanvas(cropWidth, cropHeight);
      ctx.drawImage(
        canvas,
        cropLeft,
        cropTop,
        cropWidth,
        cropHeight,
        0,
        0,
        cropWidth,
        cropHeight,
      );
      canvas = cropped;
    }

    if (rotateCW !== undefined && rotateCW !== 0) {
      let outWidth = canvas.width;
      let outHeight = canvas.height;
      if (rotateCW % 2 !== 0) [outWidth, outHeight] = [outHeight, outWidth];
      const [rotated, ctx] = blankCanvas(outWidth, outHeight);
      ctx.save();
      ctx.translate(outWidth / 2, outHeight / 2);
      ctx.rotate((rotateCW * Math.PI) / 2);
      ctx.drawImage(canvas, -canvas.width / 2, -canvas.height / 2);
      ctx.restore();
      canvas = rotated;
    }

    if (
      width !== undefined &&
      height !== undefined &&
      width !== image.width &&
      height !== image.height
    ) {
      const [resized, ctx] = blankCanvas(width, height);
      ctx.drawImage(canvas, 0, 0, resized.width, resized.height);
      canvas = resized;
    }
    return canvas;
  };
}

const initialState = () => ({
  fontName: "",
  baseFontSize: 1,
  currentTextMatrix: IDENTITY(),
  currentTextLineMatrix: IDENTITY(),
  fillRGBColor: "",
  strokeRGBColor: "",
  lineWidth: 0,
  leading: 0,
  charSpacing: 0,
  wordSpacing: 0,
  gstate: {},
  transform: IDENTITY(),
  path: [],
  clip: [],
  fontMatrix: IDENTITY(),
  textContinuation: false,
});

/**
 * Walk a PDF's drawing operators and collect positioned text and images.
 * `page` numbers count printed pages: a page advances only when it carries the
 * licence watermark (at y === 2) or is one of the first pages.
 *
 * @param {Uint8Array} data
 * @param {(message: string, fraction: number) => void} progress
 * @param {typeof import("pdfjs-dist")} pdfjs
 */
export async function parsePdf(data, progress, pdfjs) {
  const { OPS } = pdfjs;
  const doc = await pdfjs.getDocument(data).promise;
  const textDetails = [];
  const imageDetails = [];
  const usedIds = new Set();
  let nextPageNumber = 1;

  for (let pageIndex = 1; pageIndex <= doc.numPages; pageIndex++) {
    progress(`Fetching page ${pageIndex}`, (pageIndex - 1) / doc.numPages);
    const page = await doc.getPage(pageIndex);
    const ops = await page.getOperatorList({ intent: "any" });
    const pageNumber = nextPageNumber;
    let hasWatermark = false;
    const pendingImages = [];
    const stack = [];
    let state = initialState();

    const moveText = (x, y) => {
      state.currentTextLineMatrix[4] += x * state.currentTextLineMatrix[0];
      state.currentTextLineMatrix[5] += y * state.currentTextLineMatrix[3];
      state.currentTextMatrix = [...state.currentTextLineMatrix];
      state.textContinuation = false;
    };

    for (let i = 0; i < ops.fnArray.length; i++) {
      const args = ops.argsArray[i];
      switch (ops.fnArray[i]) {
        case OPS.setTextMatrix:
          state.currentTextLineMatrix = args;
          state.currentTextMatrix = [...state.currentTextLineMatrix];
          break;
        case OPS.setFont:
          [state.fontName, state.baseFontSize] = args;
          [state.fontName, state.fontMatrix] = fontDetails(
            page,
            state.fontName,
          );
          state.fontName = state.fontName.replace(/[^+]+\+/, "");
          break;
        case OPS.showText: {
          const glyphs = args[0];
          const text = glyphs.map((g) => g.unicode).join("");
          const width = glyphs
            .map((g) => g.width ?? 0)
            .reduce((a, b) => a + b, 0);
          const spaces = glyphs
            .map((g) => g.isSpace ?? 0)
            .reduce((a, b) => a + b, 0);
          const c = state.currentTextMatrix[2];
          const d = state.currentTextMatrix[3];
          const fontSize = state.baseFontSize * Math.sqrt(c * c + d * d);
          const fontId = `${state.fontName}:${fontSize}`;
          const x = state.currentTextMatrix[4];
          const y = state.currentTextMatrix[5];
          const id = ensureId(
            usedIds,
            (n) =>
              `${pageNumber}:${Math.round(x)}:${Math.round(y)}${n > 0 ? `:${n}` : ""}`,
          );
          if (y === 2) hasWatermark = true;

          const last = textDetails.at(-1);
          const isRepeat = last !== undefined && last.text === text;
          if (!isRepeat && fontSize > 4) {
            if (
              state.textContinuation &&
              text.trim() === "" &&
              fontId === last?.fontId
            ) {
              last.text = last.text.trimEnd() + text;
            } else if (text.trim() !== "") {
              textDetails.push({
                text,
                fontId,
                fontName: state.fontName,
                fontSize,
                color: state.fillRGBColor,
                isLeftAligned: false,
                isIndented: false,
                page: pageNumber,
                x,
                y,
                id: encodeId(id),
              });
            }
          }
          state.currentTextMatrix[4] +=
            (width * state.fontMatrix[0] +
              text.length * state.charSpacing +
              spaces * state.wordSpacing) *
            state.currentTextMatrix[0];
          state.textContinuation = true;
          break;
        }
        case OPS.moveText:
          moveText(args[0], args[1]);
          break;
        case OPS.setCharSpacing:
          state.charSpacing = args[0];
          break;
        case OPS.setWordSpacing:
          state.wordSpacing = args[0];
          break;
        case OPS.setLeadingMoveText:
          state.leading = -args[1];
          moveText(args[0], args[1]);
          break;
        case OPS.nextLine:
          moveText(0, -state.leading);
          break;
        case OPS.save:
          stack.push(JSON.parse(JSON.stringify(state)));
          break;
        case OPS.restore:
          state = stack.pop();
          break;
        case OPS.paintJpegXObject:
        case OPS.paintImageXObject:
          pendingImages.push({
            image: args[0],
            gstate: state.gstate,
            transform: state.transform,
            clip: state.clip,
          });
          break;
        case OPS.setFillRGBColor:
          state.fillRGBColor = toHexColor(args);
          break;
        case OPS.setStrokeRGBColor:
          state.strokeRGBColor = toHexColor(args);
          break;
        case OPS.setLineWidth:
          state.lineWidth = args[0];
          break;
        case OPS.beginGroup:
          state.gstate = args[0];
          break;
        case OPS.endGroup:
          state.gstate = {};
          break;
        case OPS.transform:
          state.transform = args;
          break;
        case OPS.constructPath:
          state.path = args;
          break;
        case OPS.clip:
          state.clip.push(state.path);
          break;
        default:
          break;
      }
    }

    if (hasWatermark || pageNumber + 3 < 11) nextPageNumber += 1;

    for (const pending of pendingImages) {
      const objs = pending.image.startsWith("g_") ? page.commonObjs : page.objs;
      const image = await new Promise((resolve) =>
        objs.get(pending.image, resolve),
      );
      const id = ensureId(
        usedIds,
        (n) =>
          `${pageNumber}:${JSON.stringify(pending.transform)}${n > 0 ? `:${n}` : ""}`,
      );
      imageDetails.push({
        id: encodeId(id),
        page: pageNumber,
        width: image.width,
        height: image.height,
        transform: pending.transform,
        gstate: pending.gstate,
        clip: pending.clip,
        getImageCanvas: imageCanvasFactory(image),
      });
    }
  }
  return new PdfData({ textDetails, imageDetails });
}
