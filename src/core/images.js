import { Journal } from "../model/actor-data.js";

export class AdventureImage {
  name;
  page;
  width;
  height;
  index;
  constructor({ name, page, width, height, index }) {
    this.name = name;
    this.page = page;
    this.width = width;
    this.height = height;
    this.index = index ?? 0;
  }
  async prepare(parsedPdf, output) {
    const pdfImages = parsedPdf.imageDetails.filter(
        (x) =>
          x.page === this.page &&
          x.width === this.width &&
          x.height === this.height,
      ),
      pdfImage =
        pdfImages.length > this.index ? pdfImages[this.index] : undefined;
    if (pdfImage !== undefined) {
      const finalPath = await output.emitImage(
        "",
        `${this.name}.webp`,
        await pdfImage.getImageCanvas(),
      );
      return new Journal(this.name, "", finalPath, this.name);
    }
  }
}

export class CaptionImage {
  name;
  page;
  width;
  height;
  constructor({ name, page, width, height }) {
    this.name = name;
    this.page = page;
    this.width = width;
    this.height = height;
  }
  async prepare(parsedPdf, output) {
    const pdfImage = parsedPdf.imageDetails.find(
      (x) =>
        x.page === this.page &&
        x.width === this.width &&
        x.height === this.height,
    );
    if (pdfImage === undefined) {
      console.log("PF2e PDF Import | failed finding image");
      return;
    }
    const canvas = await pdfImage.getImageCanvas(),
      finalPath = await output.emitImage("", `${this.name}.webp`, canvas),
      captions = parsedPdf.textDetails.filter((x) => {
        if (x.page !== this.page) {
          return false;
        }
        if (
          [
            "CaslonAntique:12",
            "Taroca:12",
            "RomicStd-Bold:12",
            "ColiseumBold:14",
            "CBGBFontSolid:12",
            "FMBolyar:12",
            "ErasmusMedium:14",
            "Masoch-Dirach:14",
            "HangingTree:17",
          ].includes(x.fontId) ||
          (x.fontId === "AlembicBeta-RegularOne:14" && x.color === "#5e0000")
        ) {
          return true;
        }
      });
    let caption = this.name;
    if (captions.length > 0) {
      caption = captions[0].text;
    }
    return new Journal(caption, "", finalPath, this.name);
  }
}

export class LabelImage {
  name;
  page;
  width;
  height;
  label;
  constructor({ name, page, width, height, label }) {
    this.name = name;
    this.page = page;
    this.width = width;
    this.height = height;
    this.label = label;
  }
  async prepare(parsedPdf, output) {
    var _a;
    const pdfImage = parsedPdf.imageDetails.find(
      (x) =>
        x.page === this.page &&
        x.width === this.width &&
        x.height === this.height,
    );
    if (pdfImage === undefined) {
      console.log("PF2e PDF Import | failed finding image");
      return;
    }
    const canvas = await pdfImage.getImageCanvas(),
      finalPath = await output.emitImage("", `${this.name}.webp`, canvas),
      caption =
        ((_a = parsedPdf.textDetails.find((x) => x.id === this.label)) == null
          ? undefined
          : _a.text) ?? this.name;
    return new Journal(caption, "", finalPath, this.name);
  }
}
