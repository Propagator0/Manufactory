// view helpers — hex dump, entropy, structure, ico frame table
import { icoDecode } from "@mfy/codec";

export function hexDump(buf: Uint8Array, maxLines = 48): { off: string; hex: string; p: string }[] {
  const lines: { off: string; hex: string; p: string }[] = [];
  const n = Math.min(buf.length, maxLines * 16);
  for (let i = 0; i < n; i += 16) {
    let hex = "", p = "";
    for (let j = 0; j < 16 && i + j < n; j++) {
      const b = buf[i + j];
      hex += b.toString(16).padStart(2, "0") + " ";
      p += b >= 0x20 && b < 0x7f ? String.fromCharCode(b) : ".";
    }
    lines.push({ off: i.toString(16).padStart(8, "0"), hex: hex.padEnd(48), p });
  }
  if (buf.length > n) lines.push({ off: "…", hex: `+${(buf.length - n).toString()} more bytes`, p: "" });
  return lines;
}

export function entropyOf(buf: Uint8Array): { bars: number[]; max: number; shannon: number } {
  const freq = new Array(256).fill(0);
  for (const b of buf) freq[b]++;
  let s = 0;
  for (const f of freq) if (f) s -= (f / buf.length) * Math.log2(f / buf.length);
  const max = Math.max(...freq);
  return { bars: freq, max, shannon: s };
}

export function pngChunks(buf: Uint8Array) {
  if (buf.length < 8 || buf[0] !== 0x89) return null;
  const out: { off: number; type: string; len: number }[] = [];
  let off = 8;
  while (off + 8 <= buf.length && out.length < 40) {
    const len = (buf[off] << 24) | (buf[off + 1] << 16) | (buf[off + 2] << 8) | buf[off + 3];
    const type = String.fromCharCode(buf[off + 4], buf[off + 5], buf[off + 6], buf[off + 7]);
    out.push({ off, type, len });
    off += 12 + len;
    if (!/^[A-Za-z]{4}$/.test(type)) break;
  }
  return out;
}

export function icoTable(buf: Uint8Array) {
  let dec;
  try { dec = icoDecode(buf); } catch { return null; }
  if (!dec || !dec.length) return null;
  return dec.map((f) => ({ w: f.w, h: f.h, bits: 32, bytes: f.bgrx.length + f.andMask.length, alpha: true }));
}

export function textStats(text: string) {
  const zw = (text.match(/[\u200B\u200C\u200D\u2060]/g) ?? []).length;
  const lines = text.split("\n").length;
  const zwsp = (text.match(/\u200B/g) ?? []).length;
  const zwnc = (text.match(/\u200C/g) ?? []).length;
  return { chars: text.length, lines, zw, zwsp, zwnc };
}

export function b64ToBytes(b: string): Uint8Array {
  const bin = atob(b);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

export function downloadBlob(name: string, data: BlobPart, type: string) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([data], { type }));
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 4000);
}
