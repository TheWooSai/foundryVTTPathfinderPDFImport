import { Bestiary1 } from "./bestiary1.js";
import { Bestiary2 } from "./bestiary2.js";
import { Bestiary3 } from "./bestiary3.js";

export const Bestiaries = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      Bestiary1,
      Bestiary2,
      Bestiary3,
    },
    Symbol.toStringTag,
    {
      value: "Module",
    },
  ),
);
