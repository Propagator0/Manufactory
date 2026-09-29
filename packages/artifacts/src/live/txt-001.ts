// TXT-001 — zero-width injection (the D-plan's "different shape" proof: text, not binary)
import { zwEncode } from "@mfy/codec";
import { ChannelSpec } from "@mfy/schema";
import type { BundleFileData } from "../index.js";

export const SPEC: ChannelSpec = {
  reg: "TXT-001",
  write: "each payload byte = 8 zero-width chars (U+200B bit 0 / U+200C bit 1) between cover chars",
  persist: ["any (text is state)", "survives copy/paste in most apps"],
  vary: ["none — identical codepoints everywhere"],
  observe: "strip U+200B–U+200F, regroup 8:1, decode UTF-8",
  capacity: "8 b per cover char; cover text length is the ceiling",
};

const COVER = `The quarterly report is attached. Key figures are unchanged from the
prior period; variance remains within the agreed band. Please confirm
receipt so we can close the working file. The field notes follow in
the appendix, with cross-references to the source assemblies.`;

export const PAYLOAD = "TXT-001 · zero-width · round-trip verified";

export function generateFiles(): BundleFileData[] {
  const text = zwEncode(COVER, PAYLOAD);
  const extractor = `// extract.js — strip zero-width, regroup, decode.
// Same codec as the web ANALYZE modal and mnf analyze (trinity).
//   import { zwDecode } from "@mfy/codec";
console.log("extractor for TXT-001 — see @mfy/codec#zwDecode");
`;
  const card = JSON.stringify({
    artifact: "TXT-001", name: "document.txt — zero-width", zone: "11",
    capacity: { shannon: COVER.length * 8, measured: PAYLOAD.length * 8 + 32 }, spec: SPEC,
  }, null, 2);
  const T = new TextEncoder();
  return [
    { path: "document.txt", data: T.encode(text), lang: "txt" },
    { path: "extract.js", data: T.encode(extractor), lang: "js" },
    { path: "card.json", data: T.encode(card), lang: "json" },
  ];
}

export const SHELL: Record<string, string[]> = {
  static: ["cat document.txt  # looks clean; mnf analyze document.txt reads it back"],
  ghost: ["node -e \"console.log('static artifact — no ghost')\""],
  docker: ["docker build -t mfy/txt-001 .", "docker run --rm mfy/txt-001 cat document.txt"],
};
