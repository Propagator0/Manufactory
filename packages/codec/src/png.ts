// isomorphic PNG reader/writer + red-plane LSB channel (STG-001)
import pako from "pako";
import { SYNC, decodeSyncBits } from "./ico.js";

export interface PngImage { w: number; h: number; rgba: Uint8Array; }

function chunk(type: string, data: Uint8Array): Uint8Array {
  const out = new Uint8Array(12 + data.length);
  const dv = new DataView(out.buffer);
  dv.setUint32(0, data.length);
  out.set(new TextEncoder().encode(type), 4);
  out.set(data, 8);
  // CRC over type+data
  let c = 0 ^ ~0;
  for (let i = 4; i < 8 + data.length; i++) {
    c ^= out[i];
    for (let k = 0; k < 8; k++) c = c & 1 ? (c >>> 1) ^ 0xedb88320 : c >>> 1;
  }
  dv.setUint32(8 + data.length, (~c) >>> 0);
  return out;
}

export function pngEncode(img: PngImage): Uint8Array {
  const ihdr = new Uint8Array(13);
  const dv = new DataView(ihdr.buffer);
  dv.setUint32(0, img.w);
  dv.setUint32(4, img.h);
  ihdr[8] = 8;   // bit depth
  ihdr[9] = 6;   // RGBA
  // scanlines, filter 0
  const raw = new Uint8Array(img.h * (1 + img.w * 4));
  for (let y = 0; y < img.h; y++) {
    raw[y * (1 + img.w * 4)] = 0;
    raw.set(img.rgba.subarray(y * img.w * 4, (y + 1) * img.w * 4), y * (1 + img.w * 4) + 1);
  }
  const idat = new Uint8Array(pako.deflate(raw, { level: 6 }));
  const sig = new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  return concat(sig, chunk("IHDR", ihdr), chunk("IDAT", idat), chunk("IEND", new Uint8Array(0)));
}

export function pngDecode(buf: Uint8Array): PngImage | null {
  try {
    if (buf[0] !== 0x89 || buf[1] !== 0x50) return null;
    let p = 8, w = 0, h = 0;
    let idat: Uint8Array[] = [];
    while (p + 8 <= buf.length) {
      const len = (buf[p] << 24) | (buf[p + 1] << 16) | (buf[p + 2] << 8) | buf[p + 3];
      const type = String.fromCharCode(buf[p + 4], buf[p + 5], buf[p + 6], buf[p + 7]);
      const data = buf.subarray(p + 8, p + 8 + len);
      if (type === "IHDR") {
        w = data[0] << 24 | data[1] << 16 | data[2] << 8 | data[3];
        h = data[4] << 24 | data[5] << 16 | data[6] << 8 | data[7];
      } else if (type === "IDAT") idat.push(new Uint8Array(data));
      else if (type === "IEND") break;
      p += 12 + len;
    }
    if (!w || !h || !idat.length) return null;
    const raw = pako.inflate(concatAll(idat));
    const stride = 1 + w * 4;
    const rgba = new Uint8Array(w * h * 4);
    let prev = new Uint8Array(w * 4);
    for (let y = 0; y < h; y++) {
      const f = raw[y * stride];
      const line = new Uint8Array(raw.subarray(y * stride + 1, y * stride + stride));
      if (f === 0) { /* none */ }
      else if (f === 1) for (let x = 4; x < line.length; x++) line[x] = (line[x] + line[x - 4]) & 255;
      else if (f === 2) for (let x = 0; x < line.length; x++) line[x] = (line[x] + prev[x]) & 255;
      else if (f === 3) for (let x = 0; x < line.length; x++) line[x] = (line[x] + ((x >= 4 ? line[x - 4] : 0) + prev[x]) >> 1) & 255;
      else return null; // paeth: not needed for our own files
      rgba.set(line, y * w * 4);
      prev = line;
    }
    return { w, h, rgba };
  } catch { return null; }
}

export function concat(...parts: Uint8Array[]): Uint8Array {
  return concatAll(parts);
}
export function concatAll(parts: Uint8Array[]): Uint8Array {
  const n = parts.reduce((a, b) => a + b.length, 0);
  const out = new Uint8Array(n);
  let p = 0;
  for (const q of parts) { out.set(q, p); p += q.length; }
  return out;
}

// ── procedural specimen (96×96, paper bg, signal bars, "M") ─────────────────
export function makeSpecPng(payload?: string): PngImage {
  const S = 96;
  const img: PngImage = { w: S, h: S, rgba: new Uint8Array(S * S * 4) };
  const paper = [0xe9, 0xe6, 0xd8], red = [0xd9, 0x36, 0x28], ink = [0x10, 0x15, 0x17], moss = [0x67, 0x68, 0x52];
  const glyph = [
    0,1,0,0,0,1,0,0,
    1,2,1,0,0,1,2,1,
    1,2,0,1,1,0,2,1,
    1,2,0,1,1,0,2,1,
    1,2,0,0,0,0,2,1,
    1,2,0,0,0,0,2,1,
    1,2,0,0,0,0,2,1,
    0,0,0,0,0,0,0,0,
  ];
  for (let y = 0; y < S; y++) {
    for (let x = 0; x < S; x++) {
      const i = (y * S + x) * 4;
      let c = paper;
      if (y >= 60 && y < 66) c = red;                 // signal bar
      else if (y >= 70 && y < 76 && x >= 8 && x < 88) c = x < 44 ? ink : moss;
      const gx = Math.floor((x / S) * 8), gy = Math.floor((y / 32) * 8);
      if (y < 52) { const g = glyph[gy * 8 + gx]; c = g === 1 ? [0x10,0x15,0x17] : g === 2 ? red : paper; }
      img.rgba[i] = c[0]; img.rgba[i + 1] = c[1]; img.rgba[i + 2] = c[2]; img.rgba[i + 3] = 255;
    }
  }
  if (payload !== undefined) embedPngPayload(img, payload);
  return img;
}

export function embedPngPayload(img: PngImage, text: string): number {
  const enc = new TextEncoder().encode(text);
  const bits: number[] = [];
  for (const b of [...SYNC, (enc.length >> 8) & 0xff, enc.length & 0xff, ...enc])
    for (let i = 7; i >= 0; i--) bits.push((b >> i) & 1);
  for (let i = 0; i < bits.length; i++) {
    if (i * 4 >= img.rgba.length) break; // capacity reached
    img.rgba[i * 4] = (img.rgba[i * 4] & 0xfe) | bits[i];
  }
  return bits.length;
}

export function pngRedBits(img: PngImage): number[] {
  const out: number[] = [];
  for (let i = 0; i < img.rgba.length; i += 4) out.push(img.rgba[i] & 1);
  return out;
}

export function extractPngPayload(buf: Uint8Array): string | null {
  const img = pngDecode(buf);
  if (!img) return null;
  return decodeSyncBits(pngRedBits(img));
}
