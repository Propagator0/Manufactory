// @mfy/api — Fastify. Routes call the same @mfy/artifacts generate/analyze
// that mnf calls. The trinity, made literal.
import Fastify from "fastify";
import cors from "@fastify/cors";
import fstatic from "@fastify/static";
import { existsSync } from "node:fs";
import { createHash } from "node:crypto";
import { appendFileSync, readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { REGISTRY, BY_REG, SPECS, generate, analyze, suggestArtifact, zipStore, b64, fromB64 } from "@mfy/artifacts";

const here = dirname(fileURLToPath(import.meta.url));

export interface AppState {
  evidence: { id: string; reg: string; at: string; src?: string; ua?: string; payload?: Record<string, unknown>; prev: string; hash: string }[];
  ghostState: string;
  lastHitAt: number;
}

export async function createApp(opts: { port?: number } = {}) {
  const app = Fastify({ logger: false });
  const state: AppState = { evidence: [], ghostState: "000", lastHitAt: 0 };
  const DATA = join(here, "..", "data");
  mkdirSync(DATA, { recursive: true });
  const NDJSON = join(DATA, "evidence.ndjson");

  const appendEvidence = (e: Omit<AppState["evidence"][number], "prev" | "hash">) => {
    const prev = state.evidence.length ? state.evidence[state.evidence.length - 1].hash : "GENESIS";
    const hash = createHash("sha256").update(prev + JSON.stringify(e)).digest("hex");
    const rec = { ...e, prev, hash };
    state.evidence.push(rec);
    try { appendFileSync(NDJSON, JSON.stringify(rec) + "\n"); } catch { /* keep going */ }
    return rec;
  };

  await app.register(cors, { origin: true });

  // ── API ───────────────────────────────────────────────────────────────────
  app.get("/api/health", async () => ({ ok: true, at: new Date().toISOString(), evidence: state.evidence.length }));

  app.get("/api/artifacts", async () => ({
    categories: [...new Set(REGISTRY.map((a) => a.cat))],
    artifacts: REGISTRY.map((a) => ({
      id: a.id, reg: a.reg, name: a.name, sub: a.sub, cat: a.cat, zone: a.zone,
      preview: a.preview, vector: a.vector, persist: a.persist, cap: a.cap,
      mech: a.mech, status: a.status, files: a.files,
    })),
  }));

  app.get("/api/artifacts/:reg", async (req) => {
    const a = BY_REG.get(String((req.params as any).reg));
    if (!a) return { error: "unknown reg" };
    return { meta: a, spec: SPECS[a.reg] ?? null };
  });

  app.post("/api/generate/:reg", async (req) => {
    const { runAs = "ghost" } = (req.body as any) ?? {};
    try {
      const res = generate(String((req.params as any).reg), runAs as any);
      const zip = zipStore(res.files.map((f) => ({ path: f.path, data: f.data })));
      return {
        bundle: res.bundle,
        spec: res.spec,
        shell: res.shell,
        zipB64: b64(zip),
        zipSize: zip.length,
      };
    } catch (e: any) {
      return { error: e.message };
    }
  });

  app.post("/api/analyze", async (req) => {
    const { b64: b, name = "dropped.bin" } = (req.body as any) ?? {};
    if (!b) return { error: "no file" };
    const buf = fromB64(String(b));
    if (buf.length > 8 * 1024 * 1024) return { error: "file too large (8 MB cap)" };
    const report = analyze(buf, String(name));
    report.suggest = suggestArtifact(report) ?? undefined;
    return { report };
  });

  app.get("/api/evidence", async () => ({ evidence: state.evidence.slice(-100).reverse() }));

  // ── LIVE BSC-001 GHOST ────────────────────────────────────────────────────
  // The generated artifact, running: same favicon.ico the CLI emits.
  const bsc = generate("BSC-001");
  const ICO = bsc.files.find((f) => f.path === "favicon.ico")!.data;

  app.get("/ghost/favicon.ico", async (req, reply) => {
    const etag = `"a1f3-${state.ghostState}b"`;
    reply.header("ETag", etag);
    reply.header("Cache-Control", "no-store");
    if ((req.headers["if-none-match"] as string) === etag) {
      state.lastHitAt = Date.now();
      return reply.code(304).send();
    }
    state.lastHitAt = Date.now();
    appendEvidence({
      id: `E-${state.evidence.length + 1}`,
      reg: "BSC-001",
      at: new Date().toISOString(),
      src: (req.ip as string),
      ua: (req.headers["user-agent"] as string),
      payload: { etag, bits: 3 },
    });
    return reply.type("image/x-icon").send(Buffer.from(ICO));
  });

  app.get("/ghost/state", async (req, reply) => {
    const u = req.url ?? "";
    const bits = (u.split("state=")[1] || "").slice(0, 3);
    if (/^[01]{3}$/.test(bits)) state.ghostState = bits;
    return reply.type("application/json").send({ state: state.ghostState });
  });

  app.get("/ghost/hit/favicon", async (req) => {
    appendEvidence({
      id: `E-${state.evidence.length + 1}`,
      reg: "BSC-001",
      at: new Date().toISOString(),
      src: req.ip as string,
      ua: (req.headers["user-agent"] as string),
      payload: { route: "/ghost/hit/favicon" },
    });
    return { ok: true };
  });

  app.get("/ghost/dashboard", async (_req, reply) => {
    const html = bsc.files.find((f) => f.path === "dashboard/index.html")!.data;
    return reply.type("text/html").send(Buffer.from(html));
  });

  // ── static web build ──────────────────────────────────────────────────────
  const webDist = join(here, "..", "..", "web", "dist");
  if (existsSync(webDist)) {
    await app.register(fstatic, { root: webDist });
    app.setNotFoundHandler((req, reply) => {
      if (req.url.startsWith("/api/") || req.url.startsWith("/ghost/")) {
        return reply.code(404).send({ error: "not found" });
      }
      return reply.type("text/html").send(readFileSync(join(webDist, "index.html")));
    });
  }

  return { app, state, appendEvidence, port: opts.port ?? 8787 };
}
