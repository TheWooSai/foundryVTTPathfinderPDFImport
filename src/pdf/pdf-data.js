/** Text runs and images extracted from a PDF, plus the encoded-string helpers adventures use. */
export class PdfData {
  imageDetails;
  textDetails;

  constructor(init) {
    Object.assign(this, init);
  }

  /**
   * Encode text as references into this PDF ("{id:start:end}"). Adventure definitions store
   * these rather than the PDF's words, and they only decode against the same PDF.
   */
  createEncodedStringFromText(text) {
    let result = "";
    let remaining = text;
    while (remaining.length > 0) {
      let matched = false;
      for (let length = remaining.length; length > 0; length--) {
        const candidate = remaining.substring(0, length);
        let best = length === 1 ? candidate : undefined;
        for (const entry of this.textDetails) {
          const start = entry.text
            .toLocaleLowerCase()
            .indexOf(candidate.toLocaleLowerCase());
          if (start === -1) continue;
          const found = entry.text.substring(start, start + length);
          const range = `${entry.id}:${start}:${start + length}`;
          let encoded;
          if (found === candidate) encoded = `{${range}}`;
          else if (this.sentenceCase(found) === candidate)
            encoded = `{${range}:S}`;
          else if (found.toLocaleUpperCase() === candidate)
            encoded = `{${range}:U}`;
          else if (found.toLocaleLowerCase() === candidate)
            encoded = `{${range}:L}`;
          else {
            const upperIndexes = [...Array(candidate.length).keys()].filter(
              (i) => candidate[i] === candidate[i].toLocaleUpperCase(),
            );
            encoded = `{${range}:${upperIndexes.join(",")}}`;
          }
          if (best === undefined || encoded.length < best.length)
            best = encoded;
        }
        if (best) {
          result += best;
          remaining = remaining.substring(length);
          matched = true;
          break;
        }
      }
      if (!matched) break;
    }
    return result;
  }

  decodeEncodedString(encoded) {
    return encoded.replace(
      /\{([^}]*):([^}]*):([^}]*)(:([^}]*))?\}/g,
      (token) => {
        const parts = token.substring(1, token.length - 1).split(":");
        const entry = this.textDetails.find((x) => x.id === parts[0]);
        if (!entry) return "";
        let text = entry.text.substring(Number(parts[1]), Number(parts[2]));
        if (parts.length >= 4) {
          const mode = parts[3];
          if (mode === "L") text = text.toLocaleLowerCase();
          else if (mode === "U") text = text.toLocaleUpperCase();
          else if (mode === "S") text = this.sentenceCase(text);
          else {
            const upper = mode.split(",");
            text = [...Array(text.length).keys()]
              .map((i) =>
                upper.includes(`${i}`) ? text[i].toLocaleUpperCase() : text[i],
              )
              .join("");
          }
        }
        return text;
      },
    );
  }

  sentenceCase(text) {
    return text
      .split(" ")
      .map((w) =>
        w.length > 1 ? w[0].toUpperCase() + w.substr(1).toLowerCase() : w,
      )
      .join(" ")
      .trim();
  }

  getText(ref) {
    const entry = this.textDetails.find(
      (x) =>
        x.page === ref.page &&
        Math.abs(x.x - ref.x) < 1 &&
        Math.abs(x.y - ref.y) < 1,
    );
    if (!entry) return "";
    let text = entry.text;
    if (ref.substring !== undefined)
      text = text.substring(ref.substring.start, ref.substring.end);
    if (ref.sentenceCase === undefined || ref.sentenceCase === true)
      text = this.sentenceCase(text);
    return text;
  }

  getTextById(id) {
    return this.textDetails.find((x) => x.id === id)?.text ?? "";
  }
}
