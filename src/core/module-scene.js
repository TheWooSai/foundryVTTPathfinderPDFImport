import { MODULE_ID } from "../constants.js";
import { createCanvas } from "../platform/canvas.js";
export class ModuleScene {
  name;
  canonical;
  page;
  width;
  height;
  imageIndex;
  imageLeft;
  imageTop;
  imageRight;
  imageBottom;
  imageRows;
  imageCols;
  cropLeft;
  cropTop;
  cropRight;
  cropBottom;
  rotateCW;
  offsetX;
  offsetY;
  gridSize;
  gridType;
  gridDistance;
  gridUnits;
  globalLight;
  darkness;
  journals;
  tokens;
  nameInfo;
  lights;
  paddingPercent;
  nameFn;
  detailsFile;
  gridUncertain;
  constructor(init) {
    Object.assign(this, init);
    if (this.gridType === undefined) {
      this.gridType = "square";
    }
    if (this.globalLight === undefined) {
      this.globalLight = false;
    }
    if (this.cropLeft === undefined) {
      this.cropLeft = 0;
    }
    if (this.cropTop === undefined) {
      this.cropTop = 0;
    }
    if (this.cropRight === undefined) {
      this.cropRight = this.width;
    }
    if (this.cropBottom === undefined) {
      this.cropBottom = this.height;
    }
    if (this.imageIndex === undefined) {
      this.imageIndex = 0;
    }
    if (this.gridSize === undefined) {
      this.gridSize = 100;
    }
    if (this.tokens === undefined) {
      this.tokens = [];
    }
    if (this.paddingPercent === undefined) {
      this.paddingPercent = 0.25;
    }
  }
  get gridTypeNumber() {
    switch (this.gridType) {
      case "hex":
        return 4;
      case "hexeven":
        return 5;
      case "hexcolumn":
        return 2;
      case "square":
        return 1;
      case "gridless":
        return 0;
    }
    return 0;
  }
  emod(a, n) {
    return ((a % n) + n) % n;
  }
  async commonSceneData(moduleData, output) {
    const details = this.detailsFile
      ? await output.fetchJson(this.detailsFile)
      : {};
    return {
      name: this.name,
      darkness: this.darkness ?? (this.globalLight ? 0 : 0.5),
      navigation: false,
      notes: this.generateJournals(moduleData),
      // The source page lets a GM, and the regression tool, trace a scene to its PDF map.
      flags: {
        [MODULE_ID]: {
          page: this.page,
          ...(this.gridUncertain ? { gridUncertain: true } : {}),
          ...(this.detailsFile ? { detailsFile: this.detailsFile } : {}),
        },
      },
      ...details,
    };
  }
  calcFinalSize() {
    const sizeMultiple = this.gridSize / 100;
    let imageWidth = this.imageRight - this.imageLeft,
      imageHeight = this.imageBottom - this.imageTop,
      cropWidth = this.cropRight - this.cropLeft,
      cropHeight = this.cropBottom - this.cropTop;
    if (this.rotateCW !== undefined && this.rotateCW % 2 !== 0) {
      [imageWidth, imageHeight] = [imageHeight, imageWidth];
      [cropWidth, cropHeight] = [cropHeight, cropWidth];
    }
    let left = this.imageLeft - this.cropLeft,
      right = this.cropRight - this.imageRight,
      top = this.imageTop - this.cropTop,
      bottom = this.cropBottom - this.imageBottom;
    switch (this.rotateCW) {
      case 0:
        break;
      case 1:
        [left, top, right, bottom] = [bottom, left, top, right];
        break;
      case 2:
        [left, top, right, bottom] = [right, bottom, left, top];
        break;
      case 3:
        [left, top, right, bottom] = [top, right, bottom, left];
        break;
    }
    if (this.gridType === "hex" || this.gridType === "hexeven") {
      const finalSpacingY = (100 * Math.sqrt(3)) / 2,
        scaleFactorX = (75 * this.imageCols) / imageWidth,
        scaleFactorY = (finalSpacingY * this.imageRows) / imageHeight,
        outputWidth = cropWidth * scaleFactorX,
        outputHeight = cropHeight * scaleFactorY,
        paddingX = Math.ceil((outputWidth * this.paddingPercent) / 100) * 100,
        paddingY = Math.ceil((outputHeight * this.paddingPercent) / 100) * 100;
      let offsetX2 = this.emod(left * scaleFactorX + paddingX, 75 * 2),
        offsetY2 = this.emod(top * scaleFactorY + paddingY, finalSpacingY);
      offsetX2 += (this.offsetX ?? 0) * 100;
      offsetY2 += (this.offsetY ?? 0) * 100;
      return [
        Math.round(sizeMultiple * outputWidth),
        Math.round(sizeMultiple * outputHeight),
        Math.round(sizeMultiple * offsetX2),
        Math.round(sizeMultiple * offsetY2),
      ];
    }
    if (this.gridType === "hexcolumn") {
      const finalSpacingX = (Math.sqrt(3) / 2) * 100,
        finalSpacingY = (100 * 3) / 4,
        scaleFactorX = (finalSpacingX * this.imageCols) / imageWidth,
        scaleFactorY = (finalSpacingY * this.imageRows) / imageHeight,
        outputWidth = cropWidth * scaleFactorX,
        outputHeight = cropHeight * scaleFactorY,
        paddingX = Math.ceil((outputWidth * this.paddingPercent) / 100) * 100,
        paddingY = Math.ceil((outputHeight * this.paddingPercent) / 100) * 100;
      let offsetX2 = this.emod(left * scaleFactorX + paddingX, finalSpacingX),
        offsetY2 = this.emod(top * scaleFactorY + paddingY, finalSpacingY * 2);
      offsetX2 += (this.offsetX ?? 0) * finalSpacingX;
      offsetY2 += (this.offsetY ?? 0) * finalSpacingY;
      return [
        Math.round(sizeMultiple * outputWidth),
        Math.round(sizeMultiple * outputHeight),
        Math.round(sizeMultiple * offsetX2),
        Math.round(sizeMultiple * offsetY2),
      ];
    }
    const preSquareWidth = imageWidth / this.imageCols,
      preSquareHeight = imageHeight / this.imageRows;
    let offsetX = ((left / preSquareWidth) * 100) % 100,
      offsetY = ((top / preSquareHeight) * 100) % 100;
    offsetX += (this.offsetX ?? 0) * 100;
    offsetY += (this.offsetY ?? 0) * 100;
    return [
      Math.round(
        (sizeMultiple * cropWidth * (100 * this.imageCols)) / imageWidth,
      ),
      Math.round(
        (sizeMultiple * cropHeight * (100 * this.imageRows)) / imageHeight,
      ),
      Math.round(sizeMultiple * offsetX),
      Math.round(sizeMultiple * offsetY),
    ];
  }
  generateJournals(moduleData) {
    const ret = [];
    for (const journal of this.journals ?? []) {
      const journalEntry =
        journal.id !== undefined
          ? moduleData.journalEntries.find(
              (j) => j.flags[MODULE_ID].id === journal.id,
            )
          : moduleData.journalEntries.find((j) =>
              j.name.startsWith(journal.name),
            );
      if (journalEntry !== undefined) {
        ret.push({
          flags: {},
          entryId: journalEntry.journalId,
          pageId: journalEntry.journalPageId,
          x: journal.x,
          y: journal.y,
          icon: "icons/svg/book.svg",
          iconSize: 40,
          text: journal.text ?? "",
          fontSize: 48,
          textAnchor: 1,
          textColor: "#FFFFFF",
        });
      }
    }
    return ret;
  }
  async generate(parsedPdf, moduleData, output) {
    const images = parsedPdf.imageDetails.filter(
        (i) =>
          i.page === this.page &&
          i.width === this.width &&
          i.height === this.height,
      ),
      image =
        this.imageIndex < images.length ? images[this.imageIndex] : undefined;
    if (image === undefined) {
      console.log(
        `PF2e PDF Import | Couldn't find image ${this.name} ${this.page} ${this.width} ${this.height}`,
      );
      return;
    }
    const [width, height, offsetX, offsetY] = this.calcFinalSize(),
      [resizeWidth, resizeHeight] = [this.width, this.height],
      canvas = await image.getImageCanvas(
        resizeWidth,
        resizeHeight,
        this.cropLeft,
        this.cropTop,
        this.cropRight,
        this.cropBottom,
        this.rotateCW,
      ),
      finalPath = await output.emitImage("", `${this.name}.webp`, canvas);
    this.updateName(parsedPdf);
    return {
      ...(await this.commonSceneData(moduleData, output)),
      grid: {
        type: this.gridTypeNumber,
        size: this.gridSize,
        color: "#000000",
        alpha: 0.2,
        distance: this.gridDistance,
        units: this.gridUnits,
      },
      image: { src: finalPath, offsetX, offsetY },
      width,
      height,
    };
  }
  updateName(parsedPdf) {
    if (this.nameInfo !== undefined) {
      if (this.nameInfo.page === undefined) {
        this.nameInfo.page = this.page;
      }
      const name = parsedPdf.textDetails.find(
        (text) =>
          text.page === this.nameInfo.page &&
          Math.abs(text.x - this.nameInfo.x) < 1 &&
          Math.abs(text.y - this.nameInfo.y) < 1,
      );
      if (name) {
        this.name = name.text
          .replace("Pathfinder Flip-Mat:", "")
          .replace("Pathfinder Flip-Mat Classics:", "")
          .replace("Pathfinder Flip-Tiles:", "")
          .trim();
        if (this.nameFn !== undefined) {
          this.name = this.nameFn(this.name);
        }
      }
    }
  }
}

export class ModuleSceneTiled extends ModuleScene {
  numTileRows;
  numTileCols;
  tileRotations;
  tilePositions;
  tileOffsets;
  fillColor;
  imageFn;
  constructor(init) {
    super(init);
    Object.assign(this, init);
  }
  calcFinalSize() {
    const imageWidth = this.imageRight - this.imageLeft,
      imageHeight = this.imageBottom - this.imageTop;
    return [
      Math.round((this.width * (100 * this.imageCols)) / imageWidth),
      Math.round((this.height * (100 * this.imageRows)) / imageHeight),
      0,
      0,
    ];
  }
  async generate(parsedPdf, moduleData, output) {
    var _a;
    this.updateName(parsedPdf);
    const canvas = createCanvas(
        this.imageCols * this.numTileCols * 100,
        this.imageRows * this.numTileRows * 100,
      ),
      ctx = canvas.getContext("2d");
    if (this.fillColor !== undefined) {
      ctx.fillStyle = this.fillColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    this.calcFinalSize();
    let i = 0;
    for (const image of parsedPdf.imageDetails) {
      let imageLeft, imageRight, imageTop, imageBottom;
      if (this.imageFn !== undefined) {
        const xx = this.imageFn(image);
        if (xx === undefined) {
          continue;
        }
        imageLeft = xx.imageLeft;
        imageRight = xx.imageRight;
        imageTop = xx.imageTop;
        imageBottom = xx.imageBottom;
      } else {
        if (
          !(
            image.page === this.page &&
            Math.abs(image.width - this.width) <= 5 &&
            Math.abs(image.height - this.height) <= 5
          )
        ) {
          continue;
        }
        imageLeft = this.imageLeft;
        imageRight = this.imageRight;
        imageTop = this.imageTop;
        imageBottom = this.imageBottom;
      }
      let c = Math.floor(i / this.numTileRows),
        r = Math.floor(i % this.numTileRows);
      if (this.tilePositions !== undefined) {
        if (i >= this.tilePositions.length) {
          continue;
        }
        [c, r] = this.tilePositions[i];
      }
      const [offX, offY] = ((_a = this.tileOffsets) == null
          ? undefined
          : _a[i]) ?? [0, 0],
        tileCanvas = await image.getImageCanvas();
      ctx.save();
      ctx.translate(
        (c + offX) * 100 * this.imageCols,
        (r + offY) * 100 * this.imageRows,
      );
      ctx.translate((100 * this.imageCols) / 2, (100 * this.imageRows) / 2);
      ctx.rotate((this.tileRotations[r][c] * Math.PI) / 2);
      ctx.translate((-100 * this.imageCols) / 2, (-100 * this.imageRows) / 2);
      ctx.drawImage(
        tileCanvas,
        imageLeft,
        imageTop,
        imageRight - imageLeft,
        imageBottom - imageTop,
        0,
        0,
        100 * this.imageCols,
        100 * this.imageRows,
      );
      ctx.restore();
      i++;
    }
    const finalPath = await output.emitImage("", `${this.name}.webp`, canvas);
    return {
      ...(await this.commonSceneData(moduleData, output)),
      grid: {
        type: 1,
        size: 100,
        color: "#000000",
        alpha: 0.2,
        distance: this.gridDistance,
        units: this.gridUnits,
      },
      image: { src: finalPath, offsetX: 0, offsetY: 0 },
      width: canvas.width,
      height: canvas.height,
    };
  }
}
