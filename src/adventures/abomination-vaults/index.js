import { AbominationVaults1InteractiveMaps } from "./abomination-vaults1-interactive-maps.js";
import { AbominationVaults1 } from "./abomination-vaults1.js";
import { AbominationVaults2InteractiveMaps } from "./abomination-vaults2-interactive-maps.js";
import { AbominationVaults2 } from "./abomination-vaults2.js";
import { AbominationVaults3InteractiveMaps } from "./abomination-vaults3-interactive-maps.js";
import { AbominationVaults3 } from "./abomination-vaults3.js";

export const AV = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      AbominationVaults1,
      AbominationVaults1InteractiveMaps,
      AbominationVaults2,
      AbominationVaults2InteractiveMaps,
      AbominationVaults3,
      AbominationVaults3InteractiveMaps,
    },
    Symbol.toStringTag,
    {
      value: "Module",
    },
  ),
);
