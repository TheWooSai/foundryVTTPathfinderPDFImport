export function obscureText(str) {
  return str;
}

export function makeContiguousParser(pre, post) {
  return (p) => {
    let current = "";
    const fontId = p.peek().fontId;
    for (; p.anyRemaining() && p.peek().fontId === fontId; ) {
      current += p.consume().text;
    }
    if (current.startsWith(" ")) {
      current = ` ${pre}${current.trimStart()}`;
    } else {
      current = pre + current;
    }
    if (current.endsWith(" ")) {
      current = `${current.trimEnd() + post} `;
    } else {
      current = current + post;
    }
    return current;
  };
}

export class ParserText {
  text;
  i;
  bailCount;
  constructor(text) {
    this.text = text;
    this.i = 0;
    this.bailCount = 0;
  }
  peek() {
    this.bailCount++;
    return this.i < this.text.length ? this.text[this.i] : null;
  }
  consume() {
    this.bailCount = 0;
    return this.i < this.text.length ? this.text[this.i++] : null;
  }
  anyRemaining() {
    return this.bailCount > 1e3
      ? (console.log("PF2e PDF Import | bailed out. we done bad :("), false)
      : this.i < this.text.length;
  }
}

export function makeid() {
  return "0";
}

export function fancify(description, _name = "", _traits = []) {
  return description
    .replace(/’/g, "'")
    .replace(/–/g, "-")
    .replace(
      /<b>Requirements<\/b>([^;]+);/,
      (m, f) =>
        `<p><div data-visibility="gm"><strong>Requirements</strong> ${f.trim()}</div></p>`,
    )
    .replace(
      /<b>Frequency<\/b>([^;]+);/,
      (m, f) =>
        `<p><div data-visibility="gm"><strong>Frequency</strong> ${f.trim()}</div></p>`,
    )
    .replace(
      /<b>Trigger<\/b>([^;]+);/,
      (m, f) =>
        `<p><div data-visibility="gm"><strong>Trigger</strong> ${f.trim()}</div></p>`,
    )
    .replace(
      /<b>Effect<\/b>(.*)/,
      (m, f) => `<hr/><p><strong>Effect</strong> ${f.trim()}</p>`,
    )
    .replace(
      /DC (\d+) basic (\w+) save/,
      (m, dc, savetype) =>
        `@Check[type:${savetype.toLowerCase()}|dc:${dc}|basic:true]`,
    )
    .replace(
      /DC (\d+) (Reflex|Will|Fortitude)/,
      (m, dc, savetype) => `@Check[type:${savetype.toLowerCase()}|dc:${dc}]`,
    )
    .replace(
      /DC (\d+) (\w+) save/,
      (m, dc, savetype) => `@Check[type:${savetype.toLowerCase()}|dc:${dc}]`,
    )
    .replace(
      /(Reflex|Will|Fortitude) DC (\d+)/,
      (m, savetype, dc) => `@Check[type:${savetype.toLowerCase()}|dc:${dc}]`,
    )
    .replace(
      /(Reflex|Will|Fortitude) \(DC (\d+)\)/,
      (m, savetype, dc) => `@Check[type:${savetype.toLowerCase()}|dc:${dc}]`,
    )
    .replace(
      /(Reflex|Will|Fortitude) save \(DC (\d+)\)/,
      (m, savetype, dc) => `@Check[type:${savetype.toLowerCase()}|dc:${dc}]`,
    )
    .replace(
      /DC (\d+) (Perception|Acrobatics|Arcana|Athletics|Crafting|Deception|Diplomacy|Intimidation|Medicine|Nature|Occultism|Performance|Religion|Society|Stealth|Survival|Thievery)/,
      (m, dc, checkType) => `@Check[type:${checkType.toLowerCase()}|dc:${dc}]`,
    )
    .replace(
      /(Perception|Acrobatics|Arcana|Athletics|Crafting|Deception|Diplomacy|Intimidation|Medicine|Nature|Occultism|Performance|Religion|Society|Stealth|Survival|Thievery) DC (\d+)/,
      (m, checkType, dc) => `@Check[type:${checkType.toLowerCase()}|dc:${dc}]`,
    )
    .replace(
      /(Perception|Acrobatics|Arcana|Athletics|Crafting|Deception|Diplomacy|Intimidation|Medicine|Nature|Occultism|Performance|Religion|Society|Stealth|Survival|Thievery) \(DC (\d+)\)/,
      (m, checkType, dc) => `@Check[type:${checkType.toLowerCase()}|dc:${dc}]`,
    )
    .replace(
      /(\w+) Lore DC (\d+)/,
      (m, checkType, dc) => `@Check[type:${checkType.toLowerCase()}|dc:${dc}]`,
    )
    .replace(/DC (\d+) flat check/, (m, dc) => `@Check[type:flat|dc:${dc}]`)
    .replace(
      /\s(\d)d(\d) (rounds|minutes|hours|days)/,
      " [[/r $1d$2 #$3]]{$1d$2 $3}",
    )
    .replace(/\s(\d+) (\w*) damage/, " [[/r {$1}[$2] damage]]{$1 $2}")
    .replace(/(\d+)d(\d+) damage/, "[[/r {$1d$2}]]{$1d$2 damage}")
    .replace(
      /(\d+)d(\d+)\+(\d+) (\w*) damage/,
      "[[/r {$1d$2+$3}[$4]]]{$1d$2+$3 $4 damage}",
    )
    .replace(
      /(\d+)d(\d+) persistent (\w*) damage/,
      "[[/r {$1d$2}[persistent,$3]]]{$1d$2} @Compendium[pf2e.conditionitems.Persistent Damage]{Persistent $3 Damage}",
    )
    .replace(/(\d+)d(\d+) (\w*) damage/, "[[/r {$1d$2}[$3]]]{$1d$2 $3 damage}")
    .replace(/(\d+)d(\d+) (\w+)(\,|\.)/, "[[/r $1d$2 #$3]]{$1d$2 $3}$4")
    .replace(/(\d+)d(\d+)\./, "[[/r $1d$2]]{$1d$2}.")
    .replace(/blinded/, "@Compendium[pf2e.conditionitems.Blinded]{Blinded}")
    .replace(/fatigued/, "@Compendium[pf2e.conditionitems.Fatigued]{Fatigued}")
    .replace(/confused/, "@Compendium[pf2e.conditionitems.Confused]{Confused}")
    .replace(
      /concealed/,
      "@Compendium[pf2e.conditionitems.Concealed]{Concealed}",
    )
    .replace(/dazzled/, "@Compendium[pf2e.conditionitems.Dazzled]{Dazzled}")
    .replace(/deafened/, "@Compendium[pf2e.conditionitems.Deafened]{Deafened}")
    .replace(
      /invisible/,
      "@Compendium[pf2e.conditionitems.Invisible]{Invisible}",
    )
    .replace(
      /flat[ -]footed/,
      "@Compendium[pf2e.conditionitems.Flat-Footed]{Flat-Footed}",
    )
    .replace(
      /immobilized/,
      "@Compendium[pf2e.conditionitems.Immobilized]{Immobilized}",
    )
    .replace(/prone/, "@Compendium[pf2e.conditionitems.Prone]{Prone}")
    .replace(
      /unconscious/,
      "@Compendium[pf2e.conditionitems.Unconscious]{Unconscious}",
    )
    .replace(
      /fascinated/,
      "@Compendium[pf2e.conditionitems.Fascinated]{Fascinated}",
    )
    .replace(
      /paralyzed/,
      "@Compendium[pf2e.conditionitems.Paralyzed]{Paralyzed}",
    )
    .replace(/hidden/, "@Compendium[pf2e.conditionitems.Hidden]{Hidden}")
    .replace(
      /quickened/,
      "@Compendium[pf2e.conditionitems.Quickened]{Quickened}",
    )
    .replace(/fleeing/, "@Compendium[pf2e.conditionitems.Fleeing]{Fleeing}")
    .replace(
      /restrained/,
      "@Compendium[pf2e.conditionitems.Restrained]{Restrained}",
    )
    .replace(/grabbed/, "@Compendium[pf2e.conditionitems.Grabbed]{Grabbed}")
    .replace(
      /clumsy (\d+)/,
      "@Compendium[pf2e.conditionitems.Clumsy]{Clumsy $1}",
    )
    .replace(
      /doomed (\d+)/,
      "@Compendium[pf2e.conditionitems.Doomed]{Doomed $1}",
    )
    .replace(
      /drained (\d+)/,
      "@Compendium[pf2e.conditionitems.Drained]{Drained $1}",
    )
    .replace(
      /enfeebled (\d+)/,
      "@Compendium[pf2e.conditionitems.Enfeebled]{Enfeebled $1}",
    )
    .replace(
      /slowed (\d+)/,
      "@Compendium[pf2e.conditionitems.Slowed]{Slowed $1}",
    )
    .replace(
      /frightened (\d+)/,
      "@Compendium[pf2e.conditionitems.Frightened]{Frightened $1}",
    )
    .replace(
      /sickened (\d+)/,
      "@Compendium[pf2e.conditionitems.Sickened]{Sickened $1}",
    )
    .replace(
      /stunned (\d+)/,
      "@Compendium[pf2e.conditionitems.Stunned]{Stunned $1}",
    )
    .replace(
      /stupefied (\d+)/,
      "@Compendium[pf2e.conditionitems.Stupefied]{Stupefied $1}",
    )
    .replace(
      /quickened (\d+)/,
      "@Compendium[pf2e.conditionitems.Quickened]{Quickened $1}",
    );
}

export function mergeWithNext(text, page, x, y) {
  const i = text.findIndex(
    (t) => t.page === page && Math.abs(t.x - x) < 1 && Math.abs(t.y - y) < 1,
  );
  if (i !== -1) {
    const t = text[i + 1].text;
    text.splice(i + 1, 1);
    text[i].text = text[i].text + t;
  }
}
