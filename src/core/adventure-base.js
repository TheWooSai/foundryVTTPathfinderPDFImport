import { MODULE_ID } from "../constants.js";
import {
  ancestries,
  classes,
  getImmunityEnum,
  getResistanceEnum,
  getTraitEnum,
  getWeaknessEnum,
} from "./enums.js";
import { ParserText, fancify, makeContiguousParser, makeid } from "./text.js";
import {
  ActionItem,
  EquipmentItem,
  FeatItem,
  HazardActor,
  Journal,
  LoreItem,
  MeleeItem,
  NPCActor,
  SpellItem,
  SpellcastingItem,
} from "../model/actor-data.js";

/** Stat-block citation lines, such as "Pathfinder Bestiary 176" or "Variant nightmare (...)". */
const CITATION = /^(<i>)?(Pathfinder|Variant |Page \d+\b)|^\(?<i>Pathfinder/;

/**
 * Keep a stat-block line the parser could not classify. Citations become the creature's
 * source; anything else continues the previous ability, which is where wrapped text belongs.
 */
function keepUnparsedLine(actor, line) {
  const text = line.trim();
  if (!text) return;
  if (CITATION.test(text)) {
    const source = actor.data.details?.source ?? actor.data.source;
    source.value = [source.value, text.replace(/<\/?i>/g, "")]
      .filter(Boolean)
      .join("; ");
    return;
  }
  const last = actor.items.at(-1);
  if (last?.data?.description) {
    last.data.description.value =
      `${last.data.description.value} ${fancify(text)}`.trim();
  } else if (actor.type === "hazard") {
    actor.data.details.description =
      `${actor.data.details.description} ${fancify(text)}`.trim();
  } else {
    actor.data.details.notes =
      `${actor.data.details.notes ?? ""} ${fancify(text)}`.trim();
  }
}

/** Consume consecutive text in one unrecognized font as a paragraph. */
function takeUnrecognizedRun(p) {
  const fontId = p.peek().fontId;
  const parts = [];
  while (p.anyRemaining() && p.peek().fontId === fontId)
    parts.push(p.consume().text);
  const text = parts.join(" ").replace(/\s+/g, " ").trim();
  return text ? `<p>${text}</p>` : "";
}

export class AdventureBase {
  prefix;
  fullName;
  journalPages = [];
  combines = [];
  npcs = [];
  noImport = false;
  progressFn;
  blacklistedFonts = [
    "Times-Italic:8",
    "RomicStd-Bold:12",
    "TradeGothicLTStd-BdCn20:12",
    "TradeGothicLTStd-BdCn20:8",
    "Taroca:12",
    "TradeGothicLTStd-BdCn20:11.0714",
  ];
  headingFontIds = [
    "GoodOT-Bold:14",
    "RomicStd-Bold:14",
    "RomicStd-Bold:32",
    "RomicStd-Bold:33",
    "RomicStd-Bold:38",
    "RomicStd-Bold:40",
    "GoodOT-Bold:11",
    "Taroca:16",
    "Taroca:24",
    "Taroca:23",
    "Taroca:21",
    "Taroca:30",
    "GoodOT-News:12",
    "GoodOT:12",
    "Taroca:24",
    "Taroca:23",
  ];
  subheadingFontIds = [
    "Gin-Regular:12",
    "Gin-Regular:14",
    "Gin-Round:12",
    "SubheadingFont:13",
  ];
  normalFontIds = [
    "SabonLTStd-Roman:9",
    "Sabon-Roman:9",
    "Gin-Regular-SC700:9",
    "SabonLTStd-Roman:8",
  ];
  italicFontIds = ["SabonLTStd-Italic:9", "TimesNewRomanPS-ItalicMT:9"];
  boldFontIds = [
    "TimesNewRomanPS-BoldMT:9",
    "TimesNewRomanPSMT:9",
    "Sabon-Bold:9",
    "SabonLTStd-Bold:9",
    "Times-Bold:9",
  ];
  dropCapFontIds = [];
  paragraphFontIds;
  separateSectionsAlpha = false;
  parseItalic = makeContiguousParser("<i>", "</i>");
  parseBold = makeContiguousParser("<b>", "</b>");
  parseHeading = makeContiguousParser("<h3>", "</h3>");
  finalize(moduleData) {}
  sentenceCase(name) {
    return name
      .split(" ")
      .map((w) =>
        w.length > 1 ? w[0].toUpperCase() + w.substr(1).toLowerCase() : w,
      )
      .join(" ")
      .trim();
  }
  mergeWithNext(text, page, x, y) {
    const i = text.findIndex(
      (t) => t.page === page && Math.abs(t.x - x) < 1 && Math.abs(t.y - y) < 1,
    );
    if (i !== -1) {
      const t = text[i + 1].text;
      text.splice(i + 1, 1);
      text[i].text = text[i].text + t;
    }
  }
  removeText(text, page, x, y) {
    const i = text.findIndex(
      (t) => t.page === page && Math.abs(t.x - x) < 1 && Math.abs(t.y - y) < 1,
    );
    if (i !== -1) {
      text.splice(i, 1);
    }
  }
  moveX(text, page, x, y, newX) {
    const i = text.findIndex(
      (t) => t.page === page && Math.abs(t.x - x) < 1 && Math.abs(t.y - y) < 1,
    );
    if (i !== -1) {
      text[i].x = newX;
    }
  }
  markStartOfLine(text, page, x, y) {
    const i = text.findIndex(
      (t) => t.page === page && Math.abs(t.x - x) < 1 && Math.abs(t.y - y) < 1,
    );
    if (i !== -1) {
      text[i].isLeftAligned = true;
      text[i].isIndented = false;
    }
  }
  markIndented(text, page, x, y) {
    const i = text.findIndex(
      (t) => t.page === page && Math.abs(t.x - x) < 1 && Math.abs(t.y - y) < 1,
    );
    if (i !== -1) {
      text[i].isLeftAligned = false;
      text[i].isIndented = true;
    }
  }
  changeFontId(text, page, x, y, fontId) {
    const i = text.findIndex(
      (t) => t.page === page && Math.abs(t.x - x) < 1 && Math.abs(t.y - y) < 1,
    );
    if (i !== -1) {
      const fontParts = fontId.split(/:/);
      text[i].fontId = fontId;
      text[i].fontName = fontParts[0];
      text[i].fontSize = Number.parseInt(fontParts[1], 10);
    }
  }
  changeColor(text, page, x, y, color) {
    const i = text.findIndex(
      (t) => t.page === page && Math.abs(t.x - x) < 1 && Math.abs(t.y - y) < 1,
    );
    if (i !== -1) {
      text[i].color = color;
    }
  }
  changeText(text, page, x, y, updated) {
    const i = text.findIndex(
      (t) => t.page === page && Math.abs(t.x - x) < 1 && Math.abs(t.y - y) < 1,
    );
    if (i !== -1) {
      text[i].text = updated;
    }
  }
  changeTextFn(text, page, x, y, fn) {
    const i = text.findIndex(
      (t) => t.page === page && Math.abs(t.x - x) < 1 && Math.abs(t.y - y) < 1,
    );
    if (i !== -1) {
      text[i].text = fn(text[i].text);
    }
  }
  moveToBeginning(text, page, x, y) {
    const i = text.findIndex(
      (t) => t.page === page && Math.abs(t.x - x) < 1 && Math.abs(t.y - y) < 1,
    );
    if (i !== -1) {
      const elem = text[i];
      text.splice(i, 1);
      text.splice(0, 0, elem);
    }
  }
  getFakeText(text, fontId, page, x, y) {
    const fontParts = fontId.split(/:/);
    return {
      id: "3:0:0",
      text,
      color: "#000000",
      fontId,
      fontName: fontParts[0],
      fontSize: Number.parseInt(fontParts[1], 10),
      isIndented: false,
      isLeftAligned: true,
      page: 3,
      x: 0,
      y: 0,
    };
  }
  prependJournal(moduleData, sourceId, destId) {
    const sourceIndex = moduleData.journalEntries.findIndex(
        (x) => sourceId === x.flags[MODULE_ID].id,
      ),
      source = moduleData.journalEntries[sourceIndex],
      dest = moduleData.journalEntries.find(
        (x) => destId === x.flags[MODULE_ID].id,
      );
    dest.text.content = `<h4>${source.name}</h4>${source.text.content}<hr/>${dest.text.content}`;
    moduleData.journalEntries.splice(sourceIndex, 1);
  }
  appendJournal(moduleData, sourceId, destId) {
    const sourceIndex = moduleData.journalEntries.findIndex(
        (x) => sourceId === x.flags[MODULE_ID].id,
      ),
      source = moduleData.journalEntries[sourceIndex],
      dest = moduleData.journalEntries.find(
        (x) => destId === x.flags[MODULE_ID].id,
      );
    if (!(!source || !dest)) {
      dest.text.content = `${dest.text.content}<hr/><h4>${source.name}</h4>${source.text.content}`;
      moduleData.journalEntries.splice(sourceIndex, 1);
    }
  }
  getAllTextInBoundingBox(
    pdf,
    pageNum,
    left,
    right,
    top,
    bottom,
    emit,
    section,
  ) {
    const ret = pdf.textDetails.filter(
      (t) =>
        t.page === pageNum &&
        t.x >= left - 1 &&
        t.x < right &&
        t.y > bottom &&
        t.y <= top,
    );
    ret.sort((l, r) => (l.y !== r.y ? r.y - l.y : l.x - r.x));
    let prev = null;
    for (const text of ret) {
      const isDifferentFromPrev =
        prev == null || text.x !== prev[0] || text.y !== prev[1];
      text.isLeftAligned = isDifferentFromPrev && Math.abs(text.x - left) < 1;
      text.isIndented =
        isDifferentFromPrev && Math.abs(text.x - (left + 9)) < 1;
      text.included = true;
      prev = [text.x, text.y];
      emit(section ?? "", text);
    }
    return ret;
  }
  getPage(pdf, emit) {
    for (const text of pdf.textDetails) {
      emit("", text);
    }
  }
  parseIcon(p) {
    return p.consume().text;
  }
  parseLargeCapSubheading(p) {
    let heading = "";
    for (
      ;
      p.anyRemaining() &&
      (p.peek().fontId === "Gin-Regular-SC700:12" ||
        p.peek().fontId === "Gin-Regular-SC700:8.4");

    ) {
      p.peek().fontId === "Gin-Regular-SC700:12"
        ? (heading += p.consume().text.toUpperCase())
        : (heading += p.consume().text.toLowerCase());
    }
    return `<h4>${heading}</h4>`;
  }
  parseParagraph(p) {
    let current = "";
    for (; this.subheadingFontIds.includes(p.peek().fontId); ) {
      current += this.parseHeading(p);
    }
    for (; p.anyRemaining(); ) {
      const peekFont = p.peek().fontId;
      if (this.normalFontIds.includes(peekFont)) {
        current += p.consume().text;
      } else if (this.subheadingFontIds.includes(peekFont)) {
        current += this.parseHeading(p);
      } else if (this.italicFontIds.includes(peekFont)) {
        current += this.parseItalic(p);
      } else if (this.boldFontIds.includes(peekFont)) {
        current += this.parseBold(p);
      } else if (p.peek().text === "\u2019") {
        current += p.consume().text;
      } else {
        break;
      }
      if (
        p.anyRemaining() &&
        (p.peek().isIndented || p.peek().text.startsWith("\u2022"))
      ) {
        break;
      }
    }
    return `<p>${current}</p>`;
  }
  parseBlockquoteParagraph(p) {
    let current = "";
    for (
      ;
      p.anyRemaining() &&
      !(p.peek().fontId === "GoodOT:8.5" && p.peek().text.trim() === "\u2022");

    ) {
      if (
        p.peek().fontId === "GoodOT:9" ||
        p.peek().fontId === "GoodOT:8.5" ||
        p.peek().fontId === "Pathfinder-Icons:9" ||
        p.peek().fontId === "Almagro:9"
      ) {
        current += p.consume().text;
      } else if (p.peek().fontId === "GoodOT-Italic:9") {
        current += this.parseItalic(p);
      } else if (
        p.peek().fontId === "GoodOT-Bold:9" ||
        p.peek().fontId === "GoodOT-Bold:8.5" ||
        p.peek().fontId === "GoodOT-Bold:10"
      ) {
        current += this.parseBold(p);
      } else {
        break;
      }
      if (
        p.anyRemaining() &&
        (p.peek().isIndented || p.peek().text.startsWith("\u2022"))
      ) {
        break;
      }
    }
    return `<p>${current}</p>`;
  }
  parseBlockquote(p, moduleData) {
    let current = "";
    for (; p.anyRemaining(); ) {
      if (
        p.peek().fontId === "GoodOT:8.5" &&
        p.peek().text.trim() === "\u2022"
      ) {
        current += this.parseList(p);
      } else if (
        p.peek().fontId === "GoodOT:9" ||
        p.peek().fontId === "GoodOT:8.5" ||
        p.peek().fontId === "Pathfinder-Icons:9" ||
        p.peek().fontId === "Almagro:9" ||
        p.peek().fontId === "GoodOT-Italic:9" ||
        p.peek().fontId === "GoodOT-Bold:9" ||
        p.peek().fontId === "GoodOT-Bold:8.5" ||
        p.peek().fontId === "GoodOT-Bold:10"
      ) {
        current += this.parseBlockquoteParagraph(p);
      } else if (
        p.peek().fontId === "GoodOT-CondBold:12" &&
        p.peek().color === "#ffffff"
      ) {
        current += this.parseMonsterOrHazard(p, moduleData);
      } else {
        break;
      }
    }
    return `<blockquote>${current}</blockquote>`;
  }
  parseHeadingBlockquote(p) {
    let current = "";
    for (; p.anyRemaining(); ) {
      if (p.peek().fontId === "SabonLTStd-Italic:12") {
        current += p.consume().text;
      } else if (p.peek().fontId === "SabonLTStd-Roman:12") {
        current += this.parseItalic(p);
      } else {
        break;
      }
    }
    return `<blockquote>${current}</blockquote>`;
  }
  parseList(p) {
    let current = "";
    const start = p.i;
    for (
      p.peek().text.trim() === "\u2022" && p.consume(),
        p.anyRemaining() &&
          p.peek().text.trimStart().startsWith("\u2022") &&
          (p.peek().text = p.peek().text.replace("\u2022", ""));
      p.anyRemaining();

    ) {
      const peekFont = p.peek().fontId;
      if (this.normalFontIds.includes(peekFont)) {
        current += p.consume().text;
      } else if (this.subheadingFontIds.includes(peekFont)) {
        current += this.parseHeading(p);
      } else if (this.italicFontIds.includes(peekFont)) {
        current += this.parseItalic(p);
      } else if (this.boldFontIds.includes(peekFont)) {
        current += this.parseBold(p);
      } else {
        break;
      }
      if (
        p.anyRemaining() &&
        (p.peek().isIndented || p.peek().text.startsWith("\u2022"))
      ) {
        break;
      }
    }
    // A bullet in a font the list does not know, such as a map label, must still be consumed,
    // or the caller sees the same text again and the parser gives up on the section.
    if (p.i === start && p.anyRemaining())
      current += p.consume().text.replace("\u2022", "").trim();
    return `<li>${current}</li>`;
  }
  parseAside(p, moduleData) {
    const id = p.peek().id,
      headingFont = p.peek().fontId;
    let heading = p.consume().text;
    for (; p.anyRemaining() && p.peek().fontId === headingFont; ) {
      heading += p.consume().text;
    }
    return new Journal(
      heading,
      this.parseBlockquote(p, moduleData),
      undefined,
      id,
    );
  }
  parseHazardLine(p, endOnIndented = false) {
    const texts = [];
    let isFirstElement = true;
    const fonts = [
      "GoodOT:9",
      "NexusSerifOT:9",
      "Dax-Regular:9",
      "GoodOT-Italic:9",
      "GoodOT-Bold:9",
      "Dax-Bold:9",
      "Pathfinder-Icons:9",
    ];
    for (; p.anyRemaining(); ) {
      if (endOnIndented) {
        if (!isFirstElement && p.peek().isIndented) {
          break;
        }
      } else if (
        !isFirstElement &&
        p.peek().isLeftAligned &&
        ![
          "Critical Success",
          "Success",
          "Failure",
          "Critical Failure",
        ].includes(p.peek().text.trim())
      ) {
        break;
      }
      isFirstElement = false;
      if (fonts.includes(p.peek().fontId)) {
        texts.push(p.consume());
      } else {
        break;
      }
    }
    let current = "";
    for (p = new ParserText(texts); p.anyRemaining(); ) {
      p.peek().fontId === "GoodOT:9" ||
      p.peek().fontId === "NexusSerifOT:9" ||
      p.peek().fontId === "Dax-Regular:9"
        ? (current += p.consume().text)
        : p.peek().fontId === "GoodOT-Italic:9"
          ? (current += this.parseItalic(p))
          : p.peek().fontId === "GoodOT-Bold:9" ||
              p.peek().fontId === "Dax-Bold:9"
            ? (current += this.parseBold(p))
            : p.peek().fontId === "Pathfinder-Icons:9" &&
              (current += this.parseIcon(p));
    }
    return current.replace(/ {2}/g, " ");
  }
  parseAbility(data) {
    return {
      mod: Number.parseInt(data, 10),
    };
  }
  parseSpell(p, moduleData, name, level, tags, qty) {
    const spell = new SpellItem();
    spell.name = name;
    spell.data.level.value = level;
    spell.data.spellCategorie.value = "spell";
    for (let trait of tags) {
      ((trait = trait.toLocaleLowerCase().trim()),
        spell.data.traits.value.push(trait));
    }
    for (; p.anyRemaining(); ) {
      const next = p.peek();
      if (
        ![
          "GoodOT:9",
          "Dax-Regular:9",
          "GoodOT-Italic:9",
          "GoodOT-Bold:9",
        ].includes(next.fontId)
      ) {
        break;
      }
      const line = this.parseHazardLine(p).replace(/[–−]/g, "-");
      let match;
      if ((match = line.match(/^<b>Traditions?<\/b> (.*)$/))) {
        spell.data.traditions.value = match[1]
          .split(",")
          .map((x) => x.toLocaleLowerCase().trim());
      } else if ((match = line.match(/^<b>Cast<\/b> ?\[(.*)\] ?(.*)$/))) {
        switch (match[1]) {
          case "one-action":
            spell.data.time.value = "1";
            break;
          case "two-actions":
            spell.data.time.value = "2";
            break;
          case "three-actions":
            spell.data.time.value = "3";
            break;
          case "reaction":
            spell.data.time.value = "reaction";
            break;
          default:
            console.log(`PF2e PDF Import | unknown cast time: ${match[1]}`);
            break;
        }
        spell.data.components.value = match[2];
      } else if ((match = line.match(/^<b>Cast<\/b> ?(.*) \((.*?)\)$/))) {
        ((spell.data.time.value = match[1]),
          (spell.data.components.value = match[2]));
      } else if ((match = line.match(/^<b>Cast<\/b> ?\((.*?)\) (.*)$/))) {
        ((spell.data.time.value = match[1]),
          (spell.data.components.value = match[2]));
      } else if (
        (match = line.match(/^<b>Range<\/b> ?(.*); <b>Targets<\/b> (.*)/))
      ) {
        ((spell.data.range.value = match[1]),
          (spell.data.target.value = match[2]));
      } else if ((match = line.match(/^<b>Range<\/b> ?(.*)/))) {
        spell.data.range.value = match[1];
      } else if (
        (match = line.match(
          /^<b>Saving ?Throw<\/b> ?(basic)? ?(.*?)(; ?(<b> ?Duration<\/b> (.*)))?$/,
        ))
      ) {
        switch (
          (match[1] === "basic" && (spell.data.save.basic = "basic"), match[2])
        ) {
          case "Fort":
          case "Fortitude":
            spell.data.save.value = "fort";
            break;
          case "Ref":
          case "Reflex":
            spell.data.save.value = "reflex";
            break;
          case "Will":
            spell.data.save.value = "will";
            break;
          default:
            console.log(`PF2e PDF Import | unknown save type: ${match[2]}`);
            break;
        }
        if (match[5]) {
          spell.data.duration.value = match[5];
        }
      } else {
        (match = line.match(/^<b>Duration<\/b> ?(.*)/))
          ? (spell.data.duration.value = match[1])
          : (match = line.match(/^<b>Area<\/b> ?(.*)/))
            ? (spell.data.area.value = match[1])
            : (spell.data.description.value !== "" &&
                line.startsWith("<") &&
                (spell.data.description.value += "<br />"),
              (spell.data.description.value += line));
      }
    }
    spell.data.description.value = fancify(spell.data.description.value);
    moduleData.items.push(spell);
    if (qty !== undefined) {
      name += ` (${qty})`;
    }
    return `<h4>${name} - Spell ${level}</h4>`;
  }
  splitOutsideParens(input, splitChar) {
    const ret = [];
    let numParens = 0,
      current = "";
    for (let i = 0; i < input.length; i++) {
      const c = input[i];
      if (c === splitChar && numParens === 0) {
        ret.push(current.trim());
        current = "";
        continue;
      }
      if (c === "(") {
        numParens += 1;
      } else {
        if (c === ")" && numParens > 0) {
          numParens -= 1;
        }
      }
      current += c;
    }
    current = current.trim();
    if (current) {
      ret.push(current);
    }
    return ret;
  }
  parseSpellcastingEntry(
    name,
    tradition,
    preparation,
    spellDc,
    spellAttack,
    details,
  ) {
    const spellCasting = new SpellcastingItem();
    spellCasting.name = `${tradition} ${preparation} Spells`;
    spellCasting.data.prepared.value =
      preparation === "Prepared"
        ? "prepared"
        : preparation === "Innate"
          ? "innate"
          : "spontaneous";
    spellCasting.data.spelldc.dc = Number.parseInt(spellDc, 10);
    if (spellAttack) {
      spellCasting.data.spelldc.value = Number.parseInt(spellAttack, 10);
    } else {
      spellCasting.data.spelldc.value = spellCasting.data.spelldc.dc - 10;
    }
    const addSpellsForLevel = (spellLevel, spellsStr) => {
      const spells = this.splitOutsideParens(spellsStr, ",");
      for (let spell of spells) {
        spell = spell.trim().replace(/’/g, "'");
        let qty = 1,
          qtyMatch;
        if ((qtyMatch = spell.match(/(.*)\(×(\d+)\)/))) {
          spell = qtyMatch[1].trim();
          qty = Number.parseInt(qtyMatch[2], 10);
        }
        if ((qtyMatch = spell.match(/(.*)\(×(\d+),(.*)\)/))) {
          spell = `${qtyMatch[1].trim()} (${qtyMatch[3].trim()})`;
          qty = Number.parseInt(qtyMatch[2], 10);
        }
        for (let i = 0; i < qty; i++) {
          spellCasting.data.slots[`slot${spellLevel}`].prepared[
            spellCasting.data.slots[`slot${spellLevel}`].max
          ] = spell;
          spellCasting.data.slots[`slot${spellLevel}`].max += 1;
          spellCasting.data.slots[`slot${spellLevel}`].value += 1;
        }
      }
    };
    details = details.replace(/<i>/g, "").replace(/<\/i>/g, "");
    const levels = this.splitOutsideParens(details, ";");
    let foundConstant = false;
    for (const level of levels) {
      let match2;
      if (
        (match2 = level.match(
          /<b>(\d+)(st|nd|rd|th)<\/b> ?\(\d slots?\)(.*)/,
        )) ||
        (match2 = level.match(/<b>(\d+)(st|nd|rd|th)<\/b>(.*)/))
      ) {
        addSpellsForLevel(
          match2[1] ? Number.parseInt(match2[1], 10) : 0,
          match2[3],
        );
      } else {
        if (
          (match2 = level.match(
            /<b>Cantrips ?\(\d+(st|nd|rd|th)\)<\/b>(.*)/,
          )) ||
          (match2 = level.match(/<b>Cantrips<\/b> ?\(\d+(st|nd|rd|th)\)(.*)/))
        ) {
          addSpellsForLevel(0, match2[2]);
        } else {
          if ((match2 = level.match(/<b>Cantrips<\/b> ?(.*)/))) {
            addSpellsForLevel(0, match2[1]);
          } else {
            if (
              (match2 = level.match(
                /<b>Constant ?\((\d+)(st|nd|rd|th)\)<\/b> ?(.*)/,
              ))
            ) {
              foundConstant = true;
              addSpellsForLevel(
                match2[1] ? Number.parseInt(match2[1], 10) : 0,
                match2[3],
              );
            } else {
              if ((match2 = level.match(/<b>Constant<\/b> ?(.*)/))) {
                foundConstant = true;
                addSpellsForLevel(1, match2[1]);
              } else {
                if (
                  foundConstant &&
                  (match2 = level.match(/<b>\((\d+)(st|nd|rd|th)\)<\/b> ?(.*)/))
                ) {
                  addSpellsForLevel(
                    match2[1] ? Number.parseInt(match2[1], 10) : 0,
                    match2[1],
                  );
                } else {
                  console.log(
                    `PF2e PDF Import | unknown spellparts [${name}] ${level}`,
                  );
                }
              }
            }
          }
        }
      }
    }
    return spellCasting;
  }
  parseMonster(p, moduleData, id, name, level, tags, qty) {
    const npc = new NPCActor();
    npc.id = id;
    npc.qty = qty;
    npc.name = name;
    npc.data.details.level.value = level;
    for (let trait of tags) {
      ((trait = trait.toLocaleLowerCase().trim()),
        ["LG", "LN", "LE", "NG", "N", "NE", "CG", "CN", "CE"].includes(
          trait.toLocaleUpperCase(),
        )
          ? (npc.data.details.alignment.value = trait.toLocaleUpperCase())
          : trait === "uncommon"
            ? (npc.data.traits.rarity.value = "uncommon")
            : trait === "rare"
              ? (npc.data.traits.rarity.value = "rare")
              : trait === "unique"
                ? (npc.data.traits.rarity.value = "unique")
                : trait === "tiny"
                  ? (npc.data.traits.size.value = "tiny")
                  : trait === "small"
                    ? (npc.data.traits.size.value = "sm")
                    : trait === "medium"
                      ? (npc.data.traits.size.value = "med")
                      : trait === "large"
                        ? (npc.data.traits.size.value = "lg")
                        : trait === "huge"
                          ? (npc.data.traits.size.value = "huge")
                          : trait === "gargantuan"
                            ? (npc.data.traits.size.value = "grg")
                            : npc.data.traits.value.push(trait));
    }
    let hasSpeed = false;
    for (; p.anyRemaining(); ) {
      const next = p.peek();
      if (
        ![
          "GoodOT:9",
          "Dax-Regular:9",
          "GoodOT-Italic:9",
          "GoodOT-Bold:9",
        ].includes(next.fontId)
      ) {
        break;
      }
      const line = this.parseHazardLine(p)
        .replace(/[\u2012\u2013\u2014\u2015\u2212]/g, "-")
        .replace(/\u00A0/g, " ")
        .replace(/ ?\(page ?\d+\)/g, "")
        .replace(/ ?\(see page ?\d+\)/g, "")
        .trim();
      let match, dmgMatch;
      if (
        (match = line.match(
          /^<b>Perception<\/b> ([+-]?\d+)([^;,]*)([;,] ?(.*))?$/,
        ))
      ) {
        const [_all, perception, perceptionDetails, _extra, senses] = match;
        npc.data.attributes.perception.value = Number.parseInt(perception, 10);
        npc.data.traits.senses.value = senses;
        if (perceptionDetails) {
          console.log(
            `PF2e PDF Import | (${name}) perception details but nowhere to put it: ${perceptionDetails}`,
          );
        }
      } else if (
        (match = line.match(
          /^<b>Senses<\/b> Perception ([+-]?\d+)([^;]*)(; ?(.*))?$/,
        ))
      ) {
        const [_all, perception, perceptionDetails, _extra, senses] = match;
        npc.data.attributes.perception.value = Number.parseInt(perception, 10);
        npc.data.traits.senses.value = senses;
        if (perceptionDetails) {
          console.log(
            `PF2e PDF Import | (${name}) perception details but nowhere to put it: ${perceptionDetails}`,
          );
        }
      } else if ((match = line.match(/^<b>Languages<\/b> (.*)$/))) {
        npc.data.traits.languages.value = match[1]
          .split(",")
          .map((x) => x.toLocaleLowerCase().trim());
      } else if ((match = line.match(/^<b>Skills<\/b> (.*)$/))) {
        const skills = match[1].split(",");
        for (const skill of skills) {
          const skillMatch = skill.trim().match(/(.*) ([+-]\d+)/);
          if (!skillMatch) {
            continue;
          }
          const lore = new LoreItem();
          lore.name = skillMatch[1];
          lore.data.mod.value = Number.parseInt(skillMatch[2], 10);
          npc.items.push(lore);
        }
      } else if ((match = line.match(/^<b>Skills<\/b> (.*)$/))) {
        const skills = match[1].split(",");
        for (const skill of skills) {
          const skillMatch = skill.trim().match(/(.*) ([+-]\d+)/);
          if (!skillMatch) {
            continue;
          }
          const lore = new LoreItem();
          lore.name = skillMatch[1];
          lore.data.mod.value = Number.parseInt(skillMatch[2], 10);
          npc.items.push(lore);
        }
      } else if ((match = line.match(/^<b>Items<\/b> ?(.*)$/))) {
        const cleanItems = match[1].replace(/<i>/g, "").replace(/<\/i>/g, ""),
          items = this.splitOutsideParens(cleanItems, ",");
        for (const item of items) {
          const itemMatch = item.trim().match(/^(.*?)( \((\d+)\))?$/);
          if (!itemMatch) {
            continue;
          }
          const equipmentItem = new EquipmentItem();
          equipmentItem.name = itemMatch[1];
          equipmentItem.data.description.value = "";
          if (itemMatch[3]) {
            equipmentItem.data.quantity.value = Number.parseInt(
              itemMatch[3],
              10,
            );
          }
          npc.items.push(equipmentItem);
        }
      } else if (
        (match = line.match(
          /^<b>Str<\/b> ([+-]?\d+), <b>Dex<\/b> ([+-]?\d+), <b>Con<\/b> ([+-]?\d+), <b>Int<\/b> ([+-]?\d+), <b>(Wis|Will)<\/b> ?([+-]?\d+), (<b>)?Cha(<\/b>)? ?([+-]?\d+)\W*$/,
        ))
      ) {
        ((npc.data.abilities.str = this.parseAbility(match[1])),
          (npc.data.abilities.dex = this.parseAbility(match[2])),
          (npc.data.abilities.con = this.parseAbility(match[3])),
          (npc.data.abilities.int = this.parseAbility(match[4])),
          (npc.data.abilities.wis = this.parseAbility(match[6])),
          (npc.data.abilities.cha = this.parseAbility(match[9])));
      } else if (
        (match = line.match(
          /^<b>AC<\/b> ([+-]?\d+)(, ([^;]+))?( \((.*?)\))?;( construct armor;)? <b>Fort<\/b> ([+-]?\d+)([^,]*), <b>Ref<\/b> ([+-]?\d+)([^,]*), <b>Will<\/b> ([+-]?\d+)/,
        ))
      ) {
        const [
          _all,
          ac,
          _acDetailsSection,
          acDetails,
          acDetails2,
          _acDetails2,
          constructArmor,
          fort,
          fortDetails,
          reflex,
          reflexDetails,
          will,
        ] = match;
        npc.data.attributes.ac.value = Number.parseInt(ac, 10);
        if (acDetails) {
          npc.data.attributes.ac.details += acDetails;
        }
        if (acDetails2) {
          npc.data.attributes.ac.details += acDetails2.trim();
        }
        if (constructArmor) {
          npc.data.attributes.ac.details +=
            (npc.data.attributes.ac.details ? "; " : "") + constructArmor;
        }
        npc.data.saves.fortitude.value = Number.parseInt(fort, 10);
        if (fortDetails) {
          npc.data.saves.fortitude.saveDetail = fortDetails;
        }
        npc.data.saves.reflex.value = Number.parseInt(reflex, 10);
        if (reflexDetails) {
          npc.data.saves.reflex.saveDetail = reflexDetails;
        }
        npc.data.saves.will.value = Number.parseInt(will, 10);
      } else if (
        (match = line.match(
          /^<b>HP<\/b> ([+-]?\d+)[,]?([^;]*)(\((.*?)\))?(; <b>Hardness<\/b> (\d+) ?)?(; ?<b>(Immunities|[Ww]eaknesse?s?|[Rr]esistances?)<\/b> ?(.*?))?(; ?<b>(Immunities|[Ww]eaknesse?s?|[Rr]esistances?)<\/b> ?(.*?))?(; ?<b>(Immunities|[Ww]eaknesse?s?|[Rr]esistances?)<\/b> ?(.*?))?\s*$/,
        ))
      ) {
        const [
            _all,
            hpMatch,
            hpdetails,
            _3,
            _4,
            _hardnessSection,
            hardness,
            _7,
            iwr1,
            iwr1data,
            _10,
            iwr2,
            iwr2data,
            _13,
            iwr3,
            iwr3data,
          ] = match,
          hp = Number.parseInt(hpMatch, 10);
        npc.data.attributes.hp.value = hp;
        npc.data.attributes.hp.max = hp;
        if (hpdetails) {
          npc.data.attributes.hp.details = hpdetails
            .split(/,/)
            .map((x) => x.trim())
            .filter((x) => x.length > 0)
            .join(", ");
        }
        if (hardness) {
          npc.data.attributes.hp.details += `Hardness: ${hardness}`;
        }
        for (const [iwr, iwrdata] of [
          [iwr1, iwr1data],
          [iwr2, iwr2data],
          [iwr3, iwr3data],
        ]) {
          if (!(iwr === undefined || iwrdata === undefined)) {
            if (iwr.toUpperCase().includes("IMMUNITIES")) {
              const customDi = [];
              for (const immunity of this.splitOutsideParens(iwrdata, ",")) {
                const e = getImmunityEnum(immunity, `${name}/${next.page}`);
                if (e) {
                  npc.data.traits.di.value.push(e);
                } else {
                  customDi.push(immunity);
                }
              }
              npc.data.traits.di.custom = customDi.join(", ");
            }
            if (iwr.toUpperCase().includes("WEAK")) {
              for (const weakness of this.splitOutsideParens(iwrdata, ",")) {
                const weakMatch = weakness.match(/([^\d]+) (\d+)(.*)/);
                if (weakMatch) {
                  npc.data.traits.dv.push({
                    type: getWeaknessEnum(
                      weakMatch[1].trim(),
                      `${name}/${next.page}`,
                    ),
                    value: Number.parseInt(weakMatch[2].trim(), 10),
                    exceptions: weakMatch[3].trim(),
                  });
                }
              }
            }
            if (iwr.toUpperCase().includes("RESIST")) {
              for (const resistance of this.splitOutsideParens(iwrdata, ",")) {
                const resMatch = resistance.match(/([^\d]+) (\d+)(.*)/);
                if (resMatch) {
                  npc.data.traits.dr.push({
                    type: getResistanceEnum(
                      resMatch[1].trim(),
                      `${name}/${next.page}`,
                    ),
                    value: Number.parseInt(resMatch[2].trim(), 10),
                    exceptions: resMatch[3].trim(),
                  });
                }
              }
            }
          }
        }
      } else if ((match = line.match(/^<b>Speed<\/b> (.+)$/))) {
        ((npc.data.attributes.speed.value = match[1]), (hasSpeed = true));
      } else if (
        (match = line.match(
          /^<b>(Melee|Ranged)<\/b> ?(\[one-action\])? ?(.*) (\+?\d+)( \((.*?)\))?, (<b>Damage<\/b> ?(.*?))?(<b>Effect<\/b> (.*?))?(; no multiple attack penalty)?( ?\(.+\))?$/,
        ))
      ) {
        const [
            _all,
            meleeRanged,
            _2,
            attackName,
            _4,
            _5,
            traits,
            _7,
            damage,
            _9,
            attackEffects,
            noMap,
            parenthetical,
          ] = match,
          attack = new MeleeItem();
        if (meleeRanged === "Ranged") {
          attack.data.weaponType.value = "ranged";
        }
        attack.name = this.sentenceCase(
          attackName.replace("<i>", "").replace("</i>", ""),
        );
        attack.data.bonus.value = Number.parseInt(match[4], 10);
        if (
          damage &&
          (dmgMatch = damage.match(/^(.*?) (\w+)( plus (.*?))?$/))
        ) {
          attack.data.damageRolls[makeid()] = {
            damage: dmgMatch[1],
            damageType: dmgMatch[2],
          };
          if (dmgMatch[4]) {
            attack.data.attackEffects.value.push(dmgMatch[4]);
          }
        }
        if (traits) {
          for (const trait of traits
            .replace("<i>", "")
            .replace("</i>", "")
            .split(/,/)) {
            const realTrait = getTraitEnum(trait.trim(), name);
            attack.data.traits.value.push(realTrait);
          }
        }
        if (attackEffects) {
          attack.data.attackEffects.value.push(attackEffects.trim());
        }
        if (noMap) {
          attack.data.attackEffects.value.push("no multiple attack penalty");
        }
        if (parenthetical) {
          attack.data.description.value += parenthetical.trim();
        }
        npc.items.push(attack);
      } else if (
        (match = line.match(
          /<b>(.*?)<\/b> ?\[(reaction|free-action)\]( \((.*?)\);? )? ?((.*?; ?)?(<b>Frequency<\/b> .*)?(<b>Requirements<\/b> ?.*?;)?(<b>Trigger<\/b>.*)?<b>Effect ?<\/b>.*)/,
        ))
      ) {
        const [_all, name2, actionType, _3, traitsMatch, rest, _freq] = match,
          reaction = new ActionItem();
        if (actionType === "reaction") {
          reaction.data.actionType.value = "reaction";
          reaction.img = "systems/pf2e/icons/actions/Reaction.webp";
        } else {
          if (actionType === "free-action") {
            reaction.data.actionType.value = "free";
            reaction.img = "systems/pf2e/icons/actions/FreeAction.webp";
          }
        }
        reaction.name = name2;
        reaction.data.actionCategory.value = hasSpeed
          ? "offensive"
          : "defensive";
        if (traitsMatch) {
          const traits = traitsMatch.split(",");
          for (const trait of traits) {
            reaction.data.traits.value.push(trait.trim());
          }
        }
        reaction.data.description.value = fancify(
          rest,
          name2,
          reaction.data.traits.value,
        );
        npc.items.push(reaction);
      } else if (
        (match = line.match(
          /<b>(.*?)<\/b> ?\[(one-action|two-actions|three-actions)\]( \((.*?)\);? )?(.*)/,
        ))
      ) {
        const action = new ActionItem();
        if (match[2] === "one-action") {
          action.data.actionType.value = "action";
          action.data.actions.value = "1";
          action.img = "systems/pf2e/icons/actions/OneAction.webp";
        } else {
          if (match[2] === "two-actions") {
            action.data.actionType.value = "action";
            action.data.actions.value = "2";
            action.img = "systems/pf2e/icons/actions/TwoActions.webp";
          } else {
            if (match[2] === "three-actions") {
              action.data.actionType.value = "action";
              action.data.actions.value = "3";
              action.img = "systems/pf2e/icons/actions/ThreeActions.webp";
            }
          }
        }
        action.name = match[1];
        action.data.actionCategory.value = hasSpeed ? "offensive" : "defensive";
        if (match[4]) {
          const traits = match[4].split(",");
          for (const trait of traits) {
            action.data.traits.value.push(trait.trim());
          }
        }
        action.data.description.value = fancify(
          match[5],
          match[1],
          action.data.traits.value,
        );
        npc.items.push(action);
      } else if (
        (match = line.match(
          /<b>(Arcane|Divine|Primal|Occult) ?(Prepared|Spontaneous|Innate) ?Spells<\/b> DC (\d+)(, attack \+(\d+))?; (.*)$/,
        ))
      ) {
        const spellCasting = this.parseSpellcastingEntry(
          name,
          match[1],
          match[2],
          match[3],
          match[5],
          match[6],
        );
        npc.items.push(spellCasting);
      } else if (
        (match = line.match(
          /<b>(Prepared|Spontaneous|Innate) (Arcane|Divine|Primal|Occult) Spells<\/b> DC (\d+)(, attack \+(\d+))?; (.*)$/,
        ))
      ) {
        const spellCasting = this.parseSpellcastingEntry(
          name,
          match[2],
          match[1],
          match[3],
          match[5],
          match[6],
        );
        npc.items.push(spellCasting);
      } else if ((match = line.match(/<b>(.*?)<\/b>( \((.*?)\);? ?)?(.*)$/))) {
        const passive = new ActionItem();
        passive.data.actionType.value = "passive";
        passive.img = "systems/pf2e/icons/actions/Passive.webp";
        passive.name = match[1].trim();
        passive.data.actionCategory.value = hasSpeed
          ? "offensive"
          : "defensive";
        if (match[3]) {
          const traits = match[3].split(",");
          for (const trait of traits) {
            passive.data.traits.value.push(trait.trim());
          }
        }
        passive.data.description.value = fancify(
          match[4].trim(),
          match[1].trim(),
          passive.data.traits.value,
        );
        npc.items.push(passive);
      } else {
        keepUnparsedLine(npc, line);
      }
    }
    moduleData.actors.push(npc);
    if (qty !== undefined) {
      name += ` (${qty})`;
    }
    return `<h4 data-monster-id="${id}">${name} - Creature ${level}</h4>`;
  }
  parseFeat(p, moduleData, name, level, tags, qty) {
    const feat = new FeatItem();
    if (name.indexOf("[free-action]") !== -1) {
      name = name.replace("[free-action]", "");
      feat.data.actionType.value = "free";
    }
    if (name.indexOf("[reaction]") !== -1) {
      name = name.replace("[reaction]", "");
      feat.data.actionType.value = "reaction";
    }
    if (name.indexOf("[one-action]") !== -1) {
      name = name.replace("[one-action]", "");
      feat.data.actionType.value = "action";
      feat.data.actions.value = "1";
    }
    if (name.indexOf("[two-actions]") !== -1) {
      name = name.replace("[two-actions]", "");
      feat.data.actionType.value = "action";
      feat.data.actions.value = "2";
    }
    if (name.indexOf("[three-actions]") !== -1) {
      name = name.replace("[three-actions]", "");
      feat.data.actionType.value = "action";
      feat.data.actions.value = "3";
    }
    name = name.trim();
    feat.name = name;
    feat.data.level.value = level;
    for (let trait of tags) {
      ((trait = trait.toLocaleLowerCase()), feat.data.traits.value.push(trait));
    }
    if (feat.data.traits.value.some((tag) => ancestries.includes(tag))) {
      feat.data.featType.value = "ancestry";
    } else {
      if (feat.data.traits.value.some((tag) => classes.includes(tag))) {
        feat.data.featType.value = "class";
      } else {
        feat.data.featType.value = "general";
      }
    }
    let heading = "";
    if (p.anyRemaining() && p.peek().text.trim() === "Prerequisites") {
      p.consume();
      feat.data.prerequisites.value = this.parseHazardLine(p).trim();
    }
    if (p.anyRemaining() && p.peek().text.trim() === "Frequency") {
      if (heading !== "") {
        heading += "<br />";
      }
      heading += this.parseHazardLine(p).trim();
    }
    if (p.anyRemaining() && p.peek().text.trim() === "Trigger") {
      if (heading !== "") {
        heading += "<br />";
      }
      heading += this.parseHazardLine(p).trim();
    }
    let current = "";
    for (; p.anyRemaining(); ) {
      const next = p.peek();
      if (
        ![
          "GoodOT:9",
          "Dax-Regular:9",
          "GoodOT-Italic:9",
          "GoodOT-Bold:9",
        ].includes(next.fontId)
      ) {
        break;
      }
      const line = this.parseHazardLine(p, true);
      if (current !== "") {
        current += "<br />";
      }
      current += line;
    }
    if (heading !== "") {
      current = `${heading}<hr>${current}`;
    }
    feat.data.description.value = fancify(current);
    moduleData.items.push(feat);
    return `<h4>${name} - Feat ${level}</h4>`;
  }
  parseHazard(p, moduleData, id, name, level, tags, qty) {
    const hazard = new HazardActor();
    hazard.id = id;
    hazard.name = name;
    hazard.data.details.level = level;
    for (let trait of tags) {
      if (((trait = trait.toLocaleLowerCase()), trait !== "trap")) {
        if (trait === "complex") {
          hazard.data.details.isComplex = true;
          continue;
        }
        hazard.data.traits.value.push(trait);
      }
    }
    for (; p.anyRemaining(); ) {
      const next = p.peek();
      if (
        ![
          "GoodOT:9",
          "Dax-Regular:9",
          "GoodOT-Italic:9",
          "GoodOT-Bold:9",
        ].includes(next.fontId)
      ) {
        break;
      }
      let line = this.parseHazardLine(p);
      line = line.replace(
        "(arcane, conjuration, summon;",
        "(arcane, conjuration, summon);",
      );
      let match, dmgMatch;
      if ((match = line.match(/^<b>Stealth<\/b> ?DC (\d+)( (.*))?$/))) {
        ((hazard.data.attributes.stealth.value =
          Number.parseInt(match[1], 10) - 10),
          (hazard.data.attributes.stealth.details = match[3]));
      } else if ((match = line.match(/^<b>Stealth<\/b> ?(\+\d+) (.*)$/))) {
        ((hazard.data.attributes.stealth.value = Number.parseInt(match[1], 10)),
          (hazard.data.attributes.stealth.details = match[2]));
      } else if ((match = line.match(/^<b>Description<\/b> ?(.*)$/))) {
        hazard.data.details.description = fancify(match[1]);
      } else if ((match = line.match(/^<b>Disable<\/b> ?(.*)$/))) {
        hazard.data.details.disable = match[1];
      } else if ((match = line.match(/^<b>Routine<\/b> ?(.*)$/))) {
        hazard.data.details.routine = match[1];
      } else if ((match = line.match(/^<b>Reset<\/b> ?(.*)$/))) {
        hazard.data.details.reset = match[1];
      } else if (
        (match = line.match(
          /^<b>AC<\/b> ?(\d+); <b>Fort<\/b> ?(\+?\d+),? <b>Ref<\/b> ?(\+?\d+)(,? <b>Will<\/b> ?(\+?\d+))?$/,
        ))
      ) {
        ((hazard.data.attributes.hasHealth = true),
          (hazard.data.attributes.ac.value = Number.parseInt(match[1], 10)),
          (hazard.data.saves.fortitude.value = Number.parseInt(match[2], 10)),
          (hazard.data.saves.reflex.value = Number.parseInt(match[3], 10)),
          match[5] &&
            (hazard.data.saves.will.value = Number.parseInt(match[5], 10)));
      } else if (
        (match = line.match(
          /^(<b>.*?Hardness<\/b> (\d+), )?<b>.*?HP ?<\/b> ?(\d+)( \(BT \d+\))?(.*?)(; <b>Immunities<\/b> ?(.*))?$/,
        ))
      ) {
        hazard.data.attributes.hasHealth = true;
        hazard.data.attributes.hardness =
          Number.parseInt(match[2] ?? "0", 10) ?? 0;
        hazard.data.attributes.hp.value = Number.parseInt(match[3], 10);
        hazard.data.attributes.hp.max = Number.parseInt(match[3], 10);
        if (match[5]) {
          hazard.data.attributes.hp.details = match[5].trim();
        }
        const immunities = (match[7] || "").split(",");
        for (const immunity of immunities) {
          hazard.data.traits.di.value.push(immunity.trim().replace(" ", "-"));
        }
      } else if (
        (match = line.match(
          /^<b>(Melee|Ranged)<\/b>(\[one-action\])? (.*) (\+?\d+)( \((.*?)\))?, (<b>Damage<\/b> ?(.*?))?(<b>Effect<\/b> (.*?))?(; no multiple attack penalty)?$/,
        ))
      ) {
        const attack = new MeleeItem();
        if (match[1] === "Ranged") {
          attack.data.weaponType.value = "ranged";
        }
        attack.name = this.sentenceCase(match[3]);
        attack.data.bonus.value = Number.parseInt(match[4], 10);
        if (
          match[8] &&
          (dmgMatch = match[8].match(/^(.*?) (\w+)( plus (.*?))?$/))
        ) {
          attack.data.damageRolls[makeid()] = {
            damage: dmgMatch[1],
            damageType: dmgMatch[2],
          };
          if (dmgMatch[4]) {
            attack.data.attackEffects.value.push(dmgMatch[4]);
          }
        }
        if (match[10]) {
          attack.data.attackEffects.value.push(match[10].trim());
        }
        if (match[11]) {
          attack.data.attackEffects.value.push("no multiple attack penalty");
        }
        hazard.items.push(attack);
      } else if (
        (match = line.match(
          /<b>(.*?)<\/b> ?\[(reaction|free-action)\]( \((.*?)\);? )?(<b>Trigger<\/b>.*<b>Effect ?<\/b>.*)/,
        ))
      ) {
        const reaction = new ActionItem();
        if (match[2] === "reaction") {
          reaction.data.actionType.value = "reaction";
          reaction.img = "systems/pf2e/icons/actions/Reaction.webp";
        } else {
          if (match[2] === "free-action") {
            reaction.data.actionType.value = "free";
            reaction.img = "systems/pf2e/icons/actions/FreeAction.webp";
          }
        }
        reaction.name = match[1];
        reaction.data.description.value = fancify(match[5]);
        if (match[4]) {
          const traits = match[4].split(",");
          for (const trait of traits) {
            reaction.data.traits.value.push(trait.trim());
          }
        }
        hazard.items.push(reaction);
      } else if ((match = line.match(/<b>(.*?)<\/b>( \((.*?)\);? )?(.*)$/))) {
        const passive = new ActionItem();
        passive.data.actionType.value = "passive";
        passive.img = "systems/pf2e/icons/actions/Passive.webp";
        passive.name = match[1].trim();
        passive.data.description.value = fancify(match[4].trim());
        if (match[3]) {
          const traits = match[3].split(",");
          for (const trait of traits) {
            passive.data.traits.value.push(trait.trim());
          }
        }
        hazard.items.push(passive);
      } else {
        keepUnparsedLine(hazard, line);
      }
    }
    if (name !== "Hazard Name") {
      moduleData.actors.push(hazard);
    }
    if (qty !== undefined) {
      name += ` (${qty})`;
    }
    return `<h4 data-monster-id="${id}">${name} - Hazard ${level}</h4>`;
  }
  parseMonsterReference(p, moduleData, id, name, difficulty, tags, qty) {
    let current = "",
      isFirst = true;
    for (; p.anyRemaining(); ) {
      if (
        !isFirst &&
        p.peek().isLeftAligned &&
        p.peek().fontId === "GoodOT-Bold:9"
      ) {
        current += "<br />";
      }
      if (
        p.peek().fontId === "GoodOT:9" ||
        p.peek().fontId === "GoodOT-CondBold:9"
      ) {
        current += p.consume().text;
      } else if (p.peek().fontId === "Dax-Regular:9") {
        current += p.consume().text;
      } else if (p.peek().fontId === "GoodOT-Italic:9") {
        current += this.parseItalic(p);
      } else if (p.peek().fontId === "GoodOT-Bold:9") {
        current += this.parseBold(p);
      } else if (p.peek().fontId === "Pathfinder-Icons:9") {
        current += this.parseIcon(p);
      } else {
        break;
      }
      isFirst = false;
    }
    if (qty !== undefined) {
      name += ` (${qty})`;
    }
    if (difficulty !== undefined && difficulty.length > 0) {
      name += ` - ${difficulty}`;
    }
    const tagsHtml = tags
      .map(
        (t) =>
          `<span style="border:1px #000000 solid;padding:0.2em">${t}</span>`,
      )
      .join("");
    return `<blockquote><h4 data-monster-id="${id}">${name}</h4>${tagsHtml}<br />${current}</blockquote>`;
  }
  parseMonsterOrHazard(p, moduleData) {
    const nameStartInfo = p.peek();
    let name = p.consume().text;
    for (
      ;
      p.peek() &&
      (p.peek().fontId === "GoodOT-CondBold:12" ||
        p.peek().fontId === "Pathfinder-Icons:12" ||
        p.peek().fontId === "Pathfinder-Icons:13");

    ) {
      name += ` ${p.consume().text}`;
    }
    name = name.replace("\u2013", "-").replace(/ +/g, " ").trim();
    let difficulty = "";
    const match = name.match(
      /^(.*)((HAZARD|CREATURE|ITEM|FEAT|SPELL|OBSTACLE|LEVEL) -?\d+)$/i,
    );
    if (match) {
      name = match[1];
      difficulty = match[2];
    }
    name = this.sentenceCase(name);
    const levelStr = difficulty
        .replace("HAZARD ", "")
        .replace("CREATURE ", "")
        .replace("ITEM ", "")
        .replace("FEAT ", "")
        .replace("SPELL ", "")
        .replace("OBSTACLE ", ""),
      level = Number.parseInt(levelStr, 10) ?? 0;
    let qty;
    const qtyMatch = name.match(/(.*?) \((.*)\)/);
    if (qtyMatch) {
      name = qtyMatch[1];
      qty = qtyMatch[2];
    }
    if (levelStr.includes("LEVEL")) {
      console.log(
        `PF2e PDF Import | ${name} is a ${difficulty} / ${level} || ${nameStartInfo.page} ${nameStartInfo.x} ${nameStartInfo.y}`,
      );
    }
    const tags = [];
    for (; p.anyRemaining() && p.peek().fontId === "GoodOT-CondBold:7"; ) {
      tags.push(p.consume().text);
    }
    return tags.length === 0 && !difficulty.toUpperCase().startsWith("FEAT")
      ? this.parseMonsterReference(
          p,
          moduleData,
          nameStartInfo.id,
          name,
          difficulty,
          tags,
          qty,
        )
      : difficulty.toUpperCase().startsWith("HAZARD")
        ? this.parseHazard(
            p,
            moduleData,
            nameStartInfo.id,
            name,
            level,
            tags,
            qty,
          )
        : difficulty.toUpperCase().startsWith("CREATURE")
          ? this.parseMonster(
              p,
              moduleData,
              nameStartInfo.id,
              name,
              level,
              tags,
              qty,
            )
          : difficulty.toUpperCase().startsWith("FEAT")
            ? this.parseFeat(p, moduleData, name, level, tags, qty)
            : difficulty.toUpperCase().startsWith("SPELL")
              ? this.parseSpell(p, moduleData, name, level, tags, qty)
              : this.parseMonsterReference(
                  p,
                  moduleData,
                  nameStartInfo.id,
                  name,
                  difficulty,
                  tags,
                  undefined,
                );
  }
  *parseSection(p, moduleData) {
    let current = "";
    const id = p.peek().id;
    let name = p.consume().text;
    for (
      p.anyRemaining() &&
      p.peek().fontId === "GoodOT-Bold:14" &&
      (name += `(${p.consume().text})`);
      p.anyRemaining() &&
      this.headingFontIds.includes(p.peek().fontId) &&
      !(
        p.peek().fontId === "GoodOT-CondBold:12" && p.peek().color === "#000000"
      );

    ) {
      const text = p.consume().text;
      if (
        ["TRIVIAL", "LOW", "MODERATE", "SEVERE", "EXTREME", "VARIABLE"].some(
          (x) => text.toUpperCase().startsWith(x),
        )
      ) {
        name += ` (${text})`;
      } else {
        name += text;
      }
    }
    const nameReorderMatch = name.match(/^:CHAPTER([0-9]+)(.*)/);
    for (
      nameReorderMatch &&
        (name = `CHAPTER ${nameReorderMatch[1]}: ${nameReorderMatch[2]}`),
        name = name.trim();
      p.anyRemaining();

    ) {
      const cur = p.peek();
      if (
        (cur.fontId === "GoodOT:9" || cur.fontId === "MyriadPro-Regular:9") &&
        cur.text.trim() === "\u2022"
      ) {
        current += this.parseList(p);
      } else if (cur.text.trim().startsWith("\u2022")) {
        current += this.parseList(p);
      } else if (
        cur.fontId === "GoodOT:9" ||
        cur.fontId === "GoodOT-Bold:9" ||
        cur.fontId === "GoodOT-Italic:9"
      ) {
        current += this.parseBlockquote(p, moduleData);
      } else if (
        cur.fontId === "GoodOT-CondBold:12" &&
        cur.color === "#000000"
      ) {
        current += this.parseMonsterOrHazard(p, moduleData);
      } else if (cur.fontId === "GoodOT-Bold:11") {
        yield this.parseAside(p, moduleData);
      } else if (cur.fontId === "SabonLTStd-Italic:12") {
        current += this.parseHeadingBlockquote(p);
      } else if (
        this.separateSectionsAlpha &&
        cur.fontId === "GoodOT-Bold:12" &&
        !(cur.text.match(/^[ABCDEFG]\d*\./) || cur.text.match(/^Event \d+[:.]/))
      ) {
        current += this.parseHeading(p);
      } else if (this.subheadingFontIds.includes(cur.fontId)) {
        current += this.parseHeading(p);
      } else if (cur.fontId === "Gin-Regular-SC700:12") {
        current += this.parseLargeCapSubheading(p);
      } else if (this.paragraphFontIds.includes(cur.fontId)) {
        current += this.parseParagraph(p);
      } else if (cur.fontId === "GoodOT-CondBold:7") {
        current += `<span style="border:1px #000000 solid;padding:0.2em">${p.consume().text}</span>`;
      } else if (this.dropCapFontIds.includes(cur.fontId)) {
        current = p.consume().text + current;
      } else {
        if (
          this.headingFontIds.includes(cur.fontId) ||
          cur.fontId === "GoodOT-Bold:11"
        )
          break;
        current += takeUnrecognizedRun(p);
      }
    }
    yield new Journal(name, current, undefined, id);
  }
  preprocess(text) {}
  *extractDetails(text, moduleData, sectionKey) {
    this.paragraphFontIds = this.subheadingFontIds
      .concat(this.normalFontIds)
      .concat(this.italicFontIds)
      .concat(this.boldFontIds);
    text = text.filter((t) => !this.blacklistedFonts.includes(t.fontId));
    const p = new ParserText(text);
    for (; p.anyRemaining(); ) {
      const cur = p.peek();
      if (cur.fontId === "GoodOT-Bold:11") {
        yield this.parseAside(p, moduleData);
      } else if (this.headingFontIds.includes(cur.fontId)) {
        for (const journal of this.parseSection(p, moduleData)) {
          yield journal;
        }
      } else {
        const first = p.peek();
        let content = "";
        while (
          p.anyRemaining() &&
          !this.headingFontIds.includes(p.peek().fontId) &&
          p.peek().fontId !== "GoodOT-Bold:11"
        ) {
          content += takeUnrecognizedRun(p);
        }
        yield new Journal(
          `Page ${first.page} (continued)`,
          content,
          undefined,
          first.id,
        );
      }
    }
  }
  async extractImageJournals(parsedPdf, moduleData, output) {
    for (const [i, journal] of this.journals.entries()) {
      this.progressFn(
        `Extracting journal image ${i}`,
        i / this.journals.length,
      );
      const j = await journal.prepare(parsedPdf, output);
      if (j) {
        moduleData.journalEntries.push(j);
      }
    }
  }
}
