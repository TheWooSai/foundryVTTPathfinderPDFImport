import { LostOmensGrandBazaar } from "./lost-omens-grand-bazaar.js";
import { LostOmensMonstersOfMyth } from "./lost-omens-monsters-of-myth.js";

export const LostOmens = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      LostOmensGrandBazaar,
      LostOmensMonstersOfMyth,
    },
    Symbol.toStringTag,
    {
      value: "Module",
    },
  ),
);
