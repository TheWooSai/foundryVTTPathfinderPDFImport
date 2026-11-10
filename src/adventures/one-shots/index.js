import { DinnerAtLionlodge } from "./dinner-at-lionlodge.js";
import { HeadshotTheRot } from "./headshot-the-rot.js";
import { MarkOfTheMantis } from "./mark-of-the-mantis.js";
import { SunderedWaves } from "./sundered-waves.js";

export const OneShot = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      DinnerAtLionlodge,
      HeadshotTheRot,
      MarkOfTheMantis,
      SunderedWaves,
    },
    Symbol.toStringTag,
    {
      value: "Module",
    },
  ),
);
