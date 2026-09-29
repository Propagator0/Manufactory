// THE CATALOG + the trinity entry point.
// Web (via api), API, and mnf all call generate()/analyze() from this file.
// Rule: no surface has a special case this file doesn't.
import { ARTIFACTS, CATS, CAT_SIGIL, flattenFiles, type RawArtifact } from "./catalog.js";
import { CODE } from "./snippets.js";
import { ArtifactMeta, Bundle, ChannelSpec, Report, RunAs } from "@mfy/schema";
import { runDetectors } from "@mfy/forensic";
import * as bsc001 from "./live/bsc-001.js";
import * as stg001 from "./live/stg-001.js";
import * as txt001 from "./live/txt-001.js";

export { CATS, CAT_SIGIL, flattenFiles, CODE };
export { b64, fromB64, zipStore } from "@mfy/codec";
export type { RawArtifact };

// ── registry ────────────────────────────────────────────────────────────────
export const REGISTRY: ArtifactMeta[] = ARTIFACTS.map((a) => ({ ...a, status: a.status ?? "stub" }));
export const BY_REG = new Map(REGISTRY.map((a) => [a.reg, a]));
export const BY_ID = new Map(REGISTRY.map((a) => [a.id, a]));

const LIVE = new Set(["BSC-001", "STG-001", "TXT-001"]);
REGISTRY.forEach((a) => { if (LIVE.has(a.reg)) a.status = "live"; });

export const SPECS: Record<string, ChannelSpec> = {
  "BSC-001": bsc001.SPEC,
  "STG-001": stg001.SPEC,
  "TXT-001": txt001.SPEC,
};

// ── generate ────────────────────────────────────────────────────────────────
export interface BundleFileData { path: string; data: Uint8Array; lang: string }

export interface GenResult {
  meta: ArtifactMeta;
  spec: ChannelSpec | null;
  files: BundleFileData[];
  bundle: Bundle;
  shell: Record<string, string[]>;
}

function stubFiles(meta: ArtifactMeta): BundleFileData[] {
  const T = new TextEncoder();
  const out: BundleFileData[] = [];
  (function walk(nodes: { n: string; l?: string; id?: string; ch?: never[] }[], parent: string) {
    for (const nd of nodes) {
      const p = parent ? `${parent}/${nd.n}` : nd.n;
      if (nd.t === "dir" || nd.ch) { if (nd.ch) walk(nd.ch, p); continue; }
      if (nd.l === "bin") {
        const ph = new Uint8Array(64);
        ph.set([0x4d, 0x46, 0x59, 0x20], 0); // "MFY " placeholder magic
        out.push({ path: p, data: ph, lang: "bin" });
      } else {
        const body = nd.id && CODE[nd.id]
          ? CODE[nd.id]
          : `// ${meta.reg} · ${nd.n}\n// stub artifact — sources from corpus project ${meta.proj}\n// the codec for this carrier is not wired yet (see docs/ADDING-AN-ARTIFACT.md)\n`;
        out.push({ path: p, data: T.encode(body), lang: nd.l ?? "txt" });
      }
    }
  })(meta.files as never[], "");
  return out;
}

export function generate(reg: string, runAs: RunAs = "ghost"): GenResult {
  const meta = BY_REG.get(reg);
  if (!meta) throw new Error(`unknown artifact: ${reg}`);
  const spec = SPECS[reg] ?? null;
  let files: BundleFileData[];
  let shell: Record<string, string[]>;

  if (reg === "BSC-001") { files = bsc001.generateFiles(); shell = bsc001.SHELL; }
  else if (reg === "STG-001") { files = stg001.generateFiles(); shell = stg001.SHELL; }
  else if (reg === "TXT-001") { files = txt001.generateFiles(); shell = txt001.SHELL; }
  else {
    files = stubFiles(meta);
    const main = files.find((f) => f.lang === "js") ?? files[0];
    shell = {
      static: [main.lang === "js" ? `node ${main.path}` : `# open ${main.path}`],
      ghost: ["# ghost server not wired for this artifact yet"],
      docker: ["# dockerfile not emitted for this artifact yet"],
    };
  }

  const bundle: Bundle = {
    reg, name: meta.name, runAs,
    files: files.map((f) => ({ path: f.path, size: f.data.length, lang: f.lang })),
    shell: shell[runAs] ?? shell.static,
    at: new Date().toISOString(),
  };
  return { meta, spec, files, bundle, shell };
}

// ── analyze ─────────────────────────────────────────────────────────────────
export function analyze(buf: Uint8Array, name: string): Report {
  return runDetectors(buf, name).report;
}

/** JUMP TO ARTIFACT — map a detected file back to its producer. */
export function suggestArtifact(report: Report): string | null {
  if (report.extracted && report.magic === "ico") return "BSC-001";
  if (report.magic === "ico") return "BSC-001";
  if (report.magic === "png") return "STG-001";
  if (report.magic === "text/binary" || report.magic === "html" || report.magic === "xml") return "TXT-001";
  return null;
}
