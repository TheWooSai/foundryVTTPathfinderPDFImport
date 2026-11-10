import { createCanvas } from "../platform/canvas.js";
import { LOG_PREFIX } from "../constants.js";
import { download, usedFilenames } from "./download.js";

export class ModuleNpc {
  id;
  name;
  actorUuid;
  uniqueKey;
  priority;
  page;
  width;
  height;
  imageIndex;
  tokenX;
  tokenY;
  tokenSize;
  label;
  elite;
  weak;
  forIds;
  constructor(init) {
    Object.assign(this, init);
    this.imageIndex = this.imageIndex ?? 0;
    this.uniqueKey = this.uniqueKey ?? this.actorUuid;
    this.priority = 0;
    if (this.name !== undefined) {
      this.priority = -1;
    } else {
      if (this.page !== undefined) {
        this.priority = 1;
      }
    }
  }
  canBeArtFor(uniqueKey) {
    return uniqueKey === this.uniqueKey && this.name === undefined;
  }
  shouldBeReplacedByArt(other) {
    return (
      other.uniqueKey === this.uniqueKey &&
      other.priority > this.priority &&
      this.name === undefined
    );
  }
  isPlaceholderArt() {
    return (
      this.page === undefined ||
      this.width === undefined ||
      this.height === undefined
    );
  }
  async generate(parsedPdf, output) {
    let imageCanvas;
    if (
      this.page !== undefined &&
      this.width !== undefined &&
      this.height !== undefined
    ) {
      const images = parsedPdf.imageDetails.filter((i) => {
          var _a;
          return (
            i.page === this.page &&
            i.width === this.width &&
            i.height === this.height &&
            !((_a = i.gstate) != null && _a.smask)
          );
        }),
        image =
          this.imageIndex < images.length ? images[this.imageIndex] : undefined;
      if (image === undefined) {
        console.log(
          `${LOG_PREFIX} Couldn't find image ${this.actorUuid} ${this.page} ${this.width} ${this.height}`,
        );
      } else {
        imageCanvas = image.getImageCanvas();
      }
    }
    if (imageCanvas === undefined) {
      const tempCanvas = createCanvas(280, 280),
        ctx2 = tempCanvas.getContext("2d");
      ctx2.fillStyle = "white";
      ctx2.fillRect(0, 0, 280, 280);
      ctx2.font = "bold 80px sans";
      ctx2.fillStyle = "black";
      ctx2.textAlign = "center";
      ctx2.textBaseline = "middle";
      ctx2.fillText(
        this.label ?? "?",
        tempCanvas.width / 2,
        tempCanvas.height / 2,
      );
      this.tokenX = 0;
      this.tokenY = 0;
      this.tokenSize = 280;
      imageCanvas = tempCanvas;
    }
    const tokenFramePath = output.setting("npctokenframe"),
      frameImage = await download(tokenFramePath),
      tokenFrameBgPath = output.setting("npctokenframebg");
    let frameImageBg;
    try {
      frameImageBg = tokenFrameBgPath
        ? await download(tokenFrameBgPath)
        : undefined;
    } catch (e) {
      console.log(e);
      frameImageBg = undefined;
    }
    const tokenCanvas = createCanvas(280, 280),
      ctx = tokenCanvas.getContext("2d");
    ctx.clearRect(0, 0, tokenCanvas.width, tokenCanvas.height);
    if (frameImageBg !== undefined) {
      ctx.drawImage(frameImageBg, 0, 0, 280, 280);
    }
    ctx.save();
    ctx.beginPath();
    ctx.arc(140, 140, 130, 0, Math.PI * 2);
    ctx.clip();
    const srcCanvas = await imageCanvas;
    ctx.fillStyle = "white";
    if (frameImageBg === undefined) {
      ctx.fillRect(0, 0, 280, 280);
    }
    ctx.drawImage(
      srcCanvas,
      -this.tokenX,
      -this.tokenY,
      this.tokenSize,
      this.tokenSize,
      0,
      0,
      tokenCanvas.width,
      tokenCanvas.height,
    );
    ctx.restore();
    ctx.drawImage(
      frameImage,
      0,
      0,
      frameImage.width,
      frameImage.height,
      0,
      0,
      tokenCanvas.width,
      tokenCanvas.height,
    );
    const actorData = await output.fromUuid(this.actorUuid);
    if (actorData == null) {
      return;
    }
    const actorName =
      this.name !== undefined ? parsedPdf.getText(this.name) : actorData.name;
    let canonicalArt = output.getCanonicalArtForToken(this);
    if (
      canonicalArt === undefined ||
      canonicalArt.actor === undefined ||
      canonicalArt.token === undefined
    ) {
      const slugifiedName = (() => {
          let i = 0;
          for (;;) {
            const slugifiedName2 =
              actorName
                .toLowerCase()
                .replace(/ /g, "-")
                .replace(/[^\w-]+/g, "") + (i === 0 ? "" : `.${i}`);
            if (!usedFilenames.has(slugifiedName2)) {
              return (usedFilenames.add(slugifiedName2), slugifiedName2);
            }
            i++;
          }
        })(),
        tokenFilename = `${slugifiedName}.token.webp`,
        actorFilename = `${slugifiedName}.actor.webp`;
      canonicalArt = {
        token: await output.emitImage("", tokenFilename, tokenCanvas),
        actor: await output.emitImage("", actorFilename, srcCanvas),
      };
    }
    return [
      this.actorUuid,
      {
        id: this.id,
        npc: this,
        img: canonicalArt.actor,
        token: canonicalArt.token,
        name: actorName,
        elite: this.elite ?? false,
        weak: this.weak ?? false,
      },
    ];
  }
}
