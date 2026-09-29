// isomorphic steganalysis — runs identically in browser worker, api, cli
import { icoDecode, icoAlphaBits, extractIcoPayload } from "@mfy/codec";
import { pngDecode, pngRedBits, extractPngPayload } from "@mfy/codec";
import { zwScan } from "@mfy/codec";
import type { Report, DetectorResult, LsbPlane } from "@mfy/schema";
import { b64 } from "@mfy/codec";

// ── magic ──────────────────────────────────────────────────────────────────
export function magic(buf: Uint8Array): string {
  const s = (n: number) => [...buf.subarray(0, n)].map((b) => String.fromCharCode(b)).join("");
  if (buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47) return "png";
  if (buf[0] === 0 && buf[1] === 0 && buf[2] === 1 && buf[3] === 0) return "ico";
  if (s(6) === "GIF87a" || s(6) === "GIF89a") return "gif";
  if (s(2) === "PK") return "zip";
  if (s(4) === "%PDF") return "pdf";
  if (s(4) === "wOF2") return "woff2";
  if (s(4) === "RIFF") return "wav/riff";
  if (s(3) === "ID3") return "mp3";
  const head = s(256).toLowerCase();
  if (head.includes("<svg")) return "svg";
  if (head.startsWith("<?xml")) return "xml";
  if (head.startsWith("<!doctype") || head.startsWith("<html")) return "html";
  return "text/binary";
}

// ── statistics ──────────────────────────────────────────────────────────────
export function shannon(bytes: Uint8Array): number {
  if (!bytes.length) return 0;
  const f = new Uint32Array(256);
  for (const b of bytes) f[b]++;
  let h = 0;
  for (const n of f) if (n) { const p = n / bytes.length; h -= p * Math.log2(p); }
  return h;
}

export function bitsOf(planes: number[][]): number[] {
  return planes.flat();
}

// chi-square test of last-bit balance (df=1). Clean natural data ≈ 50/50.
export function chiSquareLastBit(bits: number[]): { chi2: number; p: string } {
  if (!bits.length) return { chi2: 0, p: "n/a" };
  const ones = bits.reduce((a, b) => a + b, 0);
  const n = bits.length;
  const chi2 = ((ones - (n - ones)) ** 2) / n;
  const p = chi2 < 3.84 ? "p>0.05" : chi2 < 6.63 ? "p<0.05" : chi2 < 10.83 ? "p<0.01" : "p<0.001";
  return { chi2, p };
}

function packBits(bits: number[]): Uint8Array {
  const out = new Uint8Array(Math.ceil(bits.length / 8));
  for (let i = 0; i < bits.length; i++) if (bits[i]) out[i >> 3] |= 0x80 >> (i & 7);
  return out;
}

// ── the arsenal ─────────────────────────────────────────────────────────────
const ARSENAL = [
  { id: "magic", name: "magic-bytes" },
  { id: "trailing", name: "trailing-data" },
  { id: "ico-alpha-lsb", name: "alpha-lsb (ico)" },
  { id: "png-red-lsb", name: "red-lsb (png)" },
  { id: "zero-width", name: "zero-width (txt)" },
  { id: "zip-walk", name: "zip-walk" },
  { id: "woff2-tables", name: "woff2-tables" },
  { id: "svg-scripts", name: "svg-scripts" },
  { id: "pdf-actions", name: "pdf-actions" },
  { id: "exif", name: "exif" },
  { id: "id3", name: "id3" },
  { id: "entropy", name: "entropy" },
];

export function runDetectors(buf: Uint8Array, name: string): { report: Report } {
  const fmt = magic(buf);
  const detectors: DetectorResult[] = [];
  let verdict = "clean";
  let confidence = 1;
  let extracted: string | undefined;
  let lsb: LsbPlane | undefined;

  detectors.push({ id: "magic", name: "magic-bytes", status: "clean", note: `format: ${fmt}` });

  // format-specific
  if (fmt === "ico") {
    try {
      const frames = icoDecode(buf);
      const f = frames.find((x) => x.w === 48) ?? frames[frames.length - 1];
      if (f) {
        const bits = icoAlphaBits(f);
        const payload = extractIcoPayload(buf);
        lsb = { plane: "alpha", w: f.w, h: f.h, bits: b64(packBits(bits)) };
        if (payload !== null) {
          // chi² on the untouched tail only (payload region is biased by design)
          const used = 32 + 16 + payload.length * 8;
          const cs = chiSquareLastBit(bits.slice(used));
          detectors.push({ id: "ico-alpha-lsb", name: "alpha-LSB (ico)", status: "flag",
            note: `sync header MF47 at alpha plane · ${payload.length} B payload · tail χ²=${cs.chi2.toFixed(1)} (${cs.p})` });
          extracted = payload;
          verdict = "stego-carrier — alpha-LSB payload";
          confidence = 5;
        } else {
          const cs = chiSquareLastBit(bits);
          detectors.push({ id: "ico-alpha-lsb", name: "alpha-LSB (ico)", status: "clean",
            note: `no sync header · alpha last-bit ${cs.p} (χ²=${cs.chi2.toFixed(1)})` });
        }
      }
    } catch (e) {
      detectors.push({ id: "ico-alpha-lsb", name: "alpha-lsb (ico)", status: "na", note: "decode failed" });
    }
  } else detectors.push({ id: "ico-alpha-lsb", name: "alpha-lsb (ico)", status: "na", note: "not an ico" });

  if (fmt === "png") {
    const img = pngDecode(buf);
    if (img) {
      const bits = pngRedBits(img);
      const payload = extractPngPayload(buf);
      lsb = { plane: "red", w: img.w, h: img.h, bits: b64(packBits(bits)) };
      if (payload !== null) {
        const used = 32 + 16 + payload.length * 8;
        const cs = chiSquareLastBit(bits.slice(used));
        detectors.push({ id: "png-red-lsb", name: "red-lsb (png)", status: "flag",
          note: `sync header MF47 at red plane · ${payload.length} B payload · tail χ²=${cs.chi2.toFixed(1)} (${cs.p})` });
        extracted = payload;
        verdict = "stego-carrier — red-plane LSB payload";
        confidence = 5;
      } else {
        const cs = chiSquareLastBit(bits);
        detectors.push({ id: "png-red-lsb", name: "red-lsb (png)", status: "clean",
          note: `no sync header · red last-bit ${cs.p} (χ²=${cs.chi2.toFixed(1)})` });
      }
    } else detectors.push({ id: "png-red-lsb", name: "red-lsb (png)", status: "na", note: "decode failed" });
  } else detectors.push({ id: "png-red-lsb", name: "red-lsb (png)", status: "na", note: "not a png" });

  // text channels
  if (["text/binary", "html", "xml"].includes(fmt) || name.toLowerCase().endsWith(".txt")) {
    const text = new TextDecoder().decode(buf);
    const zw = zwScan(text);
    if (zw.count > 8) {
      detectors.push({ id: "zero-width", name: "zero-width (txt)", status: "flag",
        note: `${zw.count} zero-width codepoints` + (zw.payload ? ` · payload recovered` : "") });
      if (zw.payload) { extracted = zw.payload; verdict = "stego-carrier — zero-width text"; confidence = 5; }
    } else {
      detectors.push({ id: "zero-width", name: "zero-width (txt)", status: "clean", note: `${zw.count} zw codepoints` });
    }
  } else detectors.push({ id: "zero-width", name: "zero-width (txt)", status: "na", note: "not text" });

  // structural
  if (fmt === "png") {
    let iend = -1;
    outer: for (let i = 0; i + 8 <= buf.length; i++) {
      if (buf[i] === 0 && buf[i + 1] === 0 && buf[i + 2] === 0 && buf[i + 3] === 0 &&
          buf[i + 4] === 0x49 && buf[i + 5] === 0x45 && buf[i + 6] === 0x4e && buf[i + 7] === 0x44) { iend = i + 8; break outer; }
    }
    const tail = iend >= 0 ? buf.length - (iend + 4) : 0;
    if (tail > 0) {
      detectors.push({ id: "trailing", name: "trailing-data", status: "flag", note: `${tail} bytes after IEND` });
      if (verdict === "clean") { verdict = "trailing data after IEND"; confidence = 3; }
    } else detectors.push({ id: "trailing", name: "trailing-data", status: "clean", note: "no tail" });
  } else if (fmt === "ico") {
    let declared = 6;
    try {
      const dv = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
      const n = dv.getUint16(4, true);
      for (let i = 0; i < n; i++) {
        const size = dv.getUint32(14 + i * 16, true);
        const off = dv.getUint32(18 + i * 16, true);
        declared = Math.max(declared, off + size);
      }
    } catch { declared = buf.length; }
    const tail = buf.length - declared;
    detectors.push({ id: "trailing", name: "trailing-data", status: tail > 0 ? "flag" : "clean",
      note: tail > 0 ? `${tail} bytes beyond last frame` : "no tail" });
    if (tail > 0 && verdict === "clean") { verdict = "trailing data beyond ico frames"; confidence = 3; }
  } else detectors.push({ id: "trailing", name: "trailing-data", status: "na", note: `n/a for ${fmt}` });

  // remaining arsenal (armed, na for our formats)
  for (const d of ARSENAL.slice(5, 8)) {
    const fires = (d.id === "zip-walk" && fmt === "zip") ||
                 (d.id === "woff2-tables" && fmt === "woff2") ||
                 (d.id === "svg-scripts" && fmt === "svg");
    detectors.push({ id: d.id, name: d.name, status: "na", note: fires ? "armed" : "not armed for this format" });
  }
  detectors.push({ id: "exif", name: "exif", status: "na", note: "not armed for this format" });
  detectors.push({ id: "id3", name: "id3", status: "na", note: "not armed for this format" });
  detectors.push({ id: "pdf-actions", name: "pdf-actions", status: "na", note: "not armed for this format" });

  const ent = shannon(buf);
  detectors.push({ id: "entropy", name: "entropy", status: "clean", note: `${ent.toFixed(3)} bits/byte` });

  return {
    report: {
      file: name, size: buf.length, magic: fmt, detectors, verdict,
      confidence: extracted ? Math.max(confidence, 4) : confidence,
      lsb, extracted, at: new Date().toISOString(),
    },
  };
}
