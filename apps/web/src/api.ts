// api client — thin fetch layer over /api + /ghost
import type { ArtifactMeta, ChannelSpec, Evidence } from "@mfy/schema";

export interface CatalogEntry extends Omit<ArtifactMeta, "files"> { files: unknown }

export async function fetchCatalog(): Promise<{ categories: string[]; artifacts: any[] }> {
  const r = await fetch("/api/artifacts");
  return r.json();
}

export async function fetchSpec(reg: string): Promise<{ meta: ArtifactMeta; spec: ChannelSpec | null }> {
  const r = await fetch(`/api/artifacts/${reg}`);
  return r.json();
}

export async function fetchEvidence(): Promise<{ evidence: Evidence[] }> {
  const r = await fetch("/api/evidence");
  return r.json();
}

export interface GhostProbe {
  status: number;
  etag: string | null;
  bits: string | null;
  micros: number;
  at: number;
}

/** The live BSC-001 probe — same-origin fetch, If-None-Match dance, timing delta. */
export async function ghostProbe(lastEtag?: string): Promise<GhostProbe> {
  const t0 = performance.now();
  const res = await fetch("/ghost/favicon.ico", {
    cache: "no-store",
    headers: lastEtag ? { "If-None-Match": lastEtag } : {},
  });
  const micros = Math.round((performance.now() - t0) * 1000);
  const etag = res.headers.get("etag");
  const m = etag?.match(/"a1f3-([01]{3})b"/);
  return { status: res.status, etag, bits: m?.[1] ?? null, micros, at: Date.now() };
}

export async function ghostState(): Promise<{ state: string }> {
  const r = await fetch("/ghost/state");
  return r.json();
}
