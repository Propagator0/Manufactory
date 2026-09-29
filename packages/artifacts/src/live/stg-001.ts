// STG-001 — report.png · red-plane LSB (Stegosaurus lineage)
import { pngEncode, makeSpecPng, embedPngPayload } from "@mfy/codec";
import { ChannelSpec } from "@mfy/schema";
import type { BundleFileData } from "../index.js";

export const SPEC: ChannelSpec = {
  reg: "STG-001",
  write: "LSB of the red channel across all pixels; MF47 sync header + UTF-8 payload; ECC optional",
  persist: ["any (the file is the state)"],
  vary: ["none — identical bytes everywhere"],
  observe: ["red-plane bit dump → sync scan + chi-square last-bit"],
  capacity: "96×96 RGBA = 9216 b at depth 1; measured occupancy = payload length",
};

const EXTRACTOR = `// extractor.js — reads back exactly what generate() wrote (trinity rule: you can
// read everything you write). Same codec as the web ANALYZE modal and mnf analyze.
//   import { extractPngPayload } from "@mfy/codec";
//   const payload = extractPngPayload(fs.readFileSync("report.png"));
console.log("extractor for STG-001 — see @mfy/codec#extractPngPayload");
`;

export const PAYLOAD = "STG-001 · red-plane LSB · round-trip verified";

export function generateFiles(): BundleFileData[] {
  const img = makeSpecPng(PAYLOAD);
  const png = pngEncode(img);
  const card = JSON.stringify({
    artifact: "STG-001", name: "report.png — red-plane LSB", zone: "07",
    capacity: { shannon: 9216, measured: PAYLOAD.length * 8 + 32 }, spec: SPEC,
  }, null, 2);
  const T = new TextEncoder();
  return [
    { path: "report.png", data: png, lang: "bin" },
    { path: "extractor.js", data: T.encode(EXTRACTOR), lang: "js" },
    { path: "card.json", data: T.encode(card), lang: "json" },
  ];
}

export const SHELL: Record<string, string[]> = {
  static: ["open report.png"],
  ghost: ["node -e \"require('http').createServer((q,r)=>r.end('served')).listen(8791)\"  # serve dir"],
  docker: ["docker build -t mfy/stg-001 .", "docker run -d -p 8791:80 mfy/stg-001"],
};
