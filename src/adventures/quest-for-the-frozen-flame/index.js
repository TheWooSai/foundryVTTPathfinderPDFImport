import { QuestForTheFrozenFlame1InteractiveMaps } from "./quest-for-the-frozen-flame1-interactive-maps.js";
import { QuestForTheFrozenFlame1 } from "./quest-for-the-frozen-flame1.js";
import { QuestForTheFrozenFlame2InteractiveMaps } from "./quest-for-the-frozen-flame2-interactive-maps.js";
import { QuestForTheFrozenFlame2 } from "./quest-for-the-frozen-flame2.js";
import { QuestForTheFrozenFlame3InteractiveMaps } from "./quest-for-the-frozen-flame3-interactive-maps.js";
import { QuestForTheFrozenFlame3 } from "./quest-for-the-frozen-flame3.js";

export const QFF = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      QuestForTheFrozenFlame1,
      QuestForTheFrozenFlame1InteractiveMaps,
      QuestForTheFrozenFlame2,
      QuestForTheFrozenFlame2InteractiveMaps,
      QuestForTheFrozenFlame3,
      QuestForTheFrozenFlame3InteractiveMaps,
    },
    Symbol.toStringTag,
    {
      value: "Module",
    },
  ),
);
