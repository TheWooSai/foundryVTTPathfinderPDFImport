import { AdvancedPlayersGuide } from "./advanced-players-guide.js";
import { CoreRulebook } from "./core-rulebook.js";
import { GamemastersGuide } from "./gamemasters-guide.js";
import { BookOfTheDead } from "../standalone/book-of-the-dead.js";

export const Rulebooks = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      AdvancedPlayersGuide,
      BookOfTheDead,
      CoreRulebook,
      GamemastersGuide,
    },
    Symbol.toStringTag,
    {
      value: "Module",
    },
  ),
);
