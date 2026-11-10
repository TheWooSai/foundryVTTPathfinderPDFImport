import { BeginnersBoxFlipMat } from "./beginners-box-flip-mat.js";
import { BeginnersBox } from "./beginners-box.js";
import { LittleTroubleInBigAbsalom } from "./little-trouble-in-big-absalom.js";
import { Malevolence } from "./malevolence.js";
import { NightOfGrayDeathFlipMat } from "./night-of-gray-death-flip-mat.js";
import { NightOfGrayDeath } from "./night-of-gray-death.js";
import { TheFallOfPlaguestone } from "./the-fall-of-plaguestone.js";
import { TheSlithering } from "./the-slithering.js";
import { ThresholdOfKnowledge } from "./threshold-of-knowledge.js";
import { TroublesInOtariFlipMat } from "./troubles-in-otari-flip-mat.js";
import { TroublesInOtari } from "./troubles-in-otari.js";

export const Standalone = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      BeginnersBox,
      BeginnersBoxFlipMat,
      LittleTroubleInBigAbsalom,
      Malevolence,
      NightOfGrayDeath,
      NightOfGrayDeathFlipMat,
      TheFallOfPlaguestone,
      TheSlithering,
      ThresholdOfKnowledge,
      TroublesInOtari,
      TroublesInOtariFlipMat,
    },
    Symbol.toStringTag,
    {
      value: "Module",
    },
  ),
);
