// isomorphic zero-width unicode channel (TXT-001, from Stegosaurus text.ts)
// each payload byte = 8 zero-width chars (U+200B bit 0 / U+200C bit 1)
// hidden immediately BEFORE one visible cover char. visible text = cover, unchanged.
const ZWSP = "\u200b", ZWNJ = "\u200c";

export function zwEncode(cover: string, payload: string): string {
  const enc = new TextEncoder().encode(payload);
  const cps = [...cover];
  const n = Math.min(enc.length, cps.length);
  let out = "";
  for (let i = 0; i < n; i++) {
    const b = enc[i];
    for (let k = 7; k >= 0; k--) out += (b >> k) & 1 ? ZWNJ : ZWSP;
    out += cps[i];
  }
  return out + cps.slice(n).join("");
}

function utf8(bytes: number[]): string | null {
  let end = bytes.length;
  while (end > 0 && (bytes[end - 1] < 32 || bytes[end - 1] > 126)) end--;
  if (!end) return null;
  try { return new TextDecoder().decode(new Uint8Array(bytes.slice(0, end))); }
  catch { return null; }
}

export function zwDecode(text: string): { clean: string; payload: string | null } {
  const bits: number[] = [];
  for (const ch of text) {
    if (ch === ZWSP) bits.push(0);
    else if (ch === ZWNJ) bits.push(1);
  }
  const n = Math.floor(bits.length / 8);
  const bytes: number[] = [];
  for (let i = 0; i < n; i++) {
    let b = 0;
    for (let k = 0; k < 8; k++) b = (b << 1) | bits[i * 8 + k];
    bytes.push(b);
  }
  const clean = [...text].filter((c) => c !== ZWSP && c !== ZWNJ).join("");
  return { clean, payload: bytes.length ? utf8(bytes) : null };
}

export function zwScan(text: string): { count: number; payload: string | null } {
  let count = 0;
  for (const ch of text) {
    if (ch === ZWSP || ch === ZWNJ || ch === "\u200d" || ch === "\u2060") count++;
    else {
      const cp = ch.codePointAt(0)!;
      if (cp >= 0xe0000 && cp <= 0xe007f) count++;
    }
  }
  const d = zwDecode(text);
  return { count, payload: d.payload };
}
