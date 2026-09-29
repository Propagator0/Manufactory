import { z } from "zod";

// ── catalog ─────────────────────────────────────────────────────────────────
export const Vector = z.enum(["passive", "write", "execute", "observe"]);
export const Persist = z.enum(["none", "session", "medium", "high", "v.high"]);
export const PreviewKind = z.enum([
  "ico", "pixel", "canvas", "wave", "headers", "code", "hex", "json", "xml", "svg", "text",
]);

export const FileNode = z.lazy(() =>
  z.object({
    n: z.string(),
    l: z.string().optional(),
    id: z.string().optional(),
    t: z.literal("dir").optional(),
    ch: z.array(FileNode).optional(),
  }),
);

export const ArtifactMeta = z.object({
  id: z.string(),
  reg: z.string(),
  name: z.string(),
  sub: z.string(),
  cat: z.string(),
  proj: z.string(),
  zone: z.string(),
  preview: PreviewKind,
  vector: Vector,
  persist: Persist,
  cap: z.string(),
  mech: z.string(),
  files: z.array(FileNode),
  refs: z.array(z.string()).optional(),
  mitigations: z.array(z.string()).optional(),
  status: z.enum(["live", "stub"]).default("stub"),
});
export type ArtifactMeta = z.infer<typeof ArtifactMeta>;

// ── five-question answers (the grammar, per live artifact) ─────────────────
export const ChannelSpec = z.object({
  reg: z.string(),
  write: z.string(),
  persist: z.array(z.string()),
  vary: z.array(z.string()),
  observe: z.array(z.string()),
  capacity: z.string(),
});
export type ChannelSpec = z.infer<typeof ChannelSpec>;

// ── forensic ────────────────────────────────────────────────────────────────
export const DetectorResult = z.object({
  id: z.string(),
  name: z.string(),
  status: z.enum(["clean", "flag", "na"]),
  note: z.string(),
});
export type DetectorResult = z.infer<typeof DetectorResult>;

export const LsbPlane = z.object({
  plane: z.enum(["alpha", "red"]),
  w: z.number(),
  h: number(),
  bits: z.string(), // base64-packed bit stream, MSB first
});
export type LsbPlane = z.infer<typeof LsbPlane>;

export const Report = z.object({
  file: z.string(),
  size: z.number(),
  magic: z.string(),
  detectors: z.array(DetectorResult),
  verdict: z.string(),
  confidence: z.number().min(1).max(5), // 5 = strong, categorical by design
  lsb: LsbPlane.optional(),
  extracted: z.string().optional(),
  at: z.string(),
});
export type Report = z.infer<typeof Report>;

// ── evidence (chain of custody) ─────────────────────────────────────────────
export const Evidence = z.object({
  id: z.string(),
  reg: z.string(),
  at: z.string(),
  src: z.string().optional(),
  ua: z.string().optional(),
  payload: z.record(z.unknown()).optional(),
  prev: z.string(),
  hash: z.string(),
});
export type Evidence = z.infer<typeof Evidence>;

// ── generate ────────────────────────────────────────────────────────────────
export const BundleFile = z.object({
  path: z.string(),
  size: z.number(),
  lang: z.string(),
});
export type BundleFile = z.infer<typeof BundleFile>;

export const RunAs = z.enum(["static", "ghost", "docker"]);

export const Bundle = z.object({
  reg: z.string(),
  name: z.string(),
  runAs: RunAs,
  files: z.array(BundleFile),
  shell: z.array(z.string()),
  at: z.string(),
});
export type Bundle = z.infer<typeof Bundle>;

export const Job = z.object({
  id: z.string(),
  kind: z.enum(["generate", "analyze"]),
  reg: z.string().optional(),
  at: z.string(),
});
export type Job = z.infer<typeof Job>;
