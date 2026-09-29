// isomorphic ICO reader/writer + alpha-plane LSB channel (BSC-001 / Trojan favicon)
import { crc32 } from "./utils.js";

export interface IcoFrame {
  w: number;
  h: number;
  bgrx: Uint8Array; // w*h*4, BGRA order in BMP
  andMask: Uint8Array;
}

// ── encode ──────────────────────────────────────────────────────────────────
export function icoEncode(frames: IcoFrame[]): Uint8Array {
  const n = frames.length;
  const dirSize = 6 + n * 16;
  const frameSizes = frames.map((f) => 40 + f.bgrx.length + f.andMask.length);
  let offset = dirSize;
  const offsets = frameSizes.map((s) => (offset += s) - s);

  const out = new Uint8Array(offset);
  const dv = new DataView(out.buffer);
  dv.setUint16(0, 0, true);
  dv.setUint16(2, 1, true);
  dv.setUint16(4, n, true);

  frames.forEach((f, i) => {
    const d = 6 + i * 16;
    out[d] = f.w >= 256 ? 0 : f.w;
    out[d + 1] = f.h >= 256 ? 0 : f.h;
    out[d + 2] = 0;
    out[d + 3] = 0;
    dv.setUint16(d + 4, 1, true);
    dv.setUint16(d + 6, 32, true);
    dv.setUint32(d + 8, frameSizes[i], true);
    dv.setUint32(d + 12, offsets[i], true);

    let p = offsets[i];
    dv.setUint32(p, 40, true);            // BITMAPINFOHEADER
    dv.setInt32(p + 4, f.w, true);
    dv.setInt32(p + 8, f.h * 2, true);    // XOR + AND
    dv.setUint16(p + 12, 1, true);
    dv.setUint16(p + 14, 32, true);
    dv.setUint32(p + 20, 0, true);        // BI_RGB
    dv.setUint32(p + 24, f.bgrx.length + f.andMask.length, true);
    p += 40;
    out.set(f.bgrx, p);
    p += f.bgrx.length;
    out.set(f.andMask, p);
  });
  return out;
}

// ── decode ──────────────────────────────────────────────────────────────────
export function icoDecode(buf: Uint8Array): IcoFrame[] {
  if (buf.length < 6) throw new Error("not an ico");
  const dv = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
  if (dv.getUint16(0, true) !== 0 || dv.getUint16(2, true) !== 1) throw new Error("not an ico");
  const n = dv.getUint16(4, true);
  const frames: IcoFrame[] = [];
  for (let i = 0; i < n; i++) {
    const d = 6 + i * 16;
    const w = out_w(buf[d]), h = out_w(buf[d + 1]);
    const bitcount = dv.getUint16(d + 6, true);
    const size = dv.getUint32(d + 8, true);
    const off = dv.getUint32(d + 12, true);
    if (bitcount !== 32) continue;
    const bpp = 4;
    const andRowBytes = Math.ceil(w / 32) * 4;
    const xorLen = w * h * bpp;
    const andLen = andRowBytes * h;
    const bgrx = new Uint8Array(xorLen);
    const andMask = new Uint8Array(andLen);
    const start = off + 40;
    bgrx.set(buf.subarray(start, start + xorLen));
    andMask.set(buf.subarray(start + xorLen, start + xorLen + andLen));
    frames.push({ w, h, bgrx, andMask, });
    void size;
  }
  return frames;
}
function out_w(b: number) { return b === 0 ? 256 : b; }

// ── procedural favicon (deterministic "M" glyph on signal-red) ─────────────
export function makeFaviconFrames(seedPayload?: string): IcoFrame[] {
  const S = 48;
  // 8×8 glyph scaled 6×: 0 = transparent, 1 = cream, 2 = ink
  const glyph = [
    0, 1, 0, 0, 0, 1, 0, 0,
    1, 2, 1, 0, 0, 1, 2, 1,
    1, 2, 0, 1, 1, 0, 2, 1,
    1, 2, 0, 1, 1, 0, 2, 1,
    1, 2, 0, 0, 0, 0, 2, 1,
    1, 2, 0, 0, 0, 0, 2, 1,
    1, 2, 0, 0, 0, 0, 2, 1,
    0, 0, 0, 0, 0, 0, 0, 0,
  ];
  const C = { red: [0x28, 0x36, 0xd9], cream: [0xd8, 0xe6, 0xe9], ink: [0x17, 0x15, 0x10] };

  const build = (size: number): IcoFrame => {
    const bgrx = new Uint8Array(size * size * 4);
    const andMask = new Uint8Array(Math.ceil(size / 32) * 4 * size);
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const gx = Math.floor((x / size) * 8), gy = Math.floor((y / size) * 8);
        const g = glyph[gy * 8 + gx];
        const i = (y * size + x) * 4;
        // edge anti-aliasing: deterministic jitter on boundary pixels
        const edge = (x === 0 || y === 0 || x === size - 1 || y === size - 1);
        let alpha = g === 0 ? (edge ? 0 : 0) : 255;
        if (edge && g !== 0) alpha = 128 + ((x * 7 + y * 13) % 96) - 48; // 80..176
        const col = g === 1 ? C.cream : g === 2 ? C.ink : C.red;
        bgrx[i] = col[2];       // B
        bgrx[i + 1] = col[1];   // G
        bgrx[i + 2] = col[0];   // R
        bgrx[i + 3] = alpha;    // A
        andMask[Math.floor((y * size + x) / 8)] |= alpha === 0 ? 1 << (7 - ((y * size + x) % 8)) : 0;
      }
    }
    return { w: size, h: size, bgrx, andMask };
  };

  const frames = [16, 32, 48].map(build);
  if (seedPayload !== undefined) embedIcoPayload(frames, seedPayload);
  return frames;
}

// ── alpha-LSB channel (48×48 frame) ────────────────────────────────────────
export const SYNC = [0x4d, 0x46, 0x34, 0x37]; // "MF47" sync header, 32 bits

export function embedIcoPayload(frames: IcoFrame[], text: string): number {
  const f = frames.find((x) => x.w === 48 && x.h === 48) ?? frames[frames.length - 1];
  const enc = new TextEncoder().encode(text);
  const bits: number[] = [];
  for (const b of [...SYNC, (enc.length >> 8) & 0xff, enc.length & 0xff, ...enc])
    for (let i = 7; i >= 0; i--) bits.push((b >> i) & 1);
  setIcoAlphaBits(f, bits);
  return bits.length;
}

export function icoAlphaBits(f: IcoFrame): number[] {
  const out: number[] = [];
  for (let i = 3; i < f.bgrx.length; i += 4) out.push(f.bgrx[i] & 1);
  return out;
}

function setIcoAlphaBits(f: IcoFrame, bits: number[]) {
  let i = 3;
  for (const b of bits) {
    if (i >= f.bgrx.length) break;
    f.bgrx[i] = (f.bgrx[i] & 0xfe) | b;
    i += 4;
  }
}

export function extractIcoPayload(buf: Uint8Array): string | null {
  const frames = icoDecode(buf);
  const f = frames.find((x) => x.w === 48 && x.h === 48) ?? frames[frames.length - 1];
  if (!f) return null;
  const bits = icoAlphaBits(f);
  return decodeSyncBits(bits);
}

// sync-scan a bit stream: find SYNC "MF47", read 16-bit length, read that many bytes
export function decodeSyncBits(bits: number[]): string | null {
  const s = SYNC.flatMap((b) => [...Array(8)].map((_, i) => (b >> (7 - i)) & 1));
  let off = -1;
  outer: for (let i = 0; i + s.length + 16 < bits.length; i++) {
    for (let j = 0; j < s.length; j++) if (bits[i + j] !== s[j]) continue outer;
    off = i;
    break;
  }
  if (off < 0) return null;
  let len = 0;
  for (let j = 0; j < 16; j++) len = (len << 1) | bits[off + s.length + j];
  if (len > 1024) return null;
  const bytes: number[] = [];
  for (let i = 0; i < len && off + s.length + 16 + i * 8 + 8 <= bits.length; i++) {
    let b = 0;
    for (let j = 0; j < 8; j++) b = (b << 1) | bits[off + s.length + 16 + i * 8 + j];
    bytes.push(b);
  }
  let end = bytes.length;
  while (end > 0 && (bytes[end - 1] < 32 || bytes[end - 1] > 126)) end--;
  try { return new TextDecoder().decode(new Uint8Array(bytes.slice(0, end))); }
  catch { return null; }
}

export function icoCrc(buf: Uint8Array): number { return crc32(buf); }
