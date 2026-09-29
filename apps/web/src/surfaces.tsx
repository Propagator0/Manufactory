import React, { useEffect, useMemo, useRef, useState } from "react";
import type { GenResult } from "@mfy/artifacts";
import { icoDecode, b64 } from "@mfy/codec";
import { ghostProbe, fetchEvidence } from "./api";
import { hexDump, entropyOf, pngChunks, icoTable, textStats, b64ToBytes } from "./utils";
import type { ViewMode } from "./App";

/* ── RAIL (region 2) ─────────────────────────────────────────────────────── */
export function Rail({ arts, sel, onPick }: { arts: any[]; sel: string; onPick: (r: string) => void }) {
  const [q, setQ] = useState("");
  const cats = useMemo(() => {
    const m = new Map<string, any[]>();
    for (const a of arts) {
      if (q && !`${a.reg} ${a.name} ${a.sub} ${a.cat}`.toLowerCase().includes(q.toLowerCase())) continue;
      if (!m.has(a.cat)) m.set(a.cat, []);
      m.get(a.cat)!.push(a);
    }
    return [...m.entries()];
  }, [arts, q]);
  return (
    <div className="panel rail">
      <div className="band">CATALOG <span className="sp">{arts.length} ARTIFACTS · {arts.filter((a) => a.status === "live").length} LIVE</span></div>
      <input className="filter" placeholder="filter reg / name / mech…  (⌘K)" value={q} onChange={(e) => setQ(e.target.value)} />
      <div className="rail-list">
        {cats.map(([cat, list]) => (
          <div key={cat}>
            <div className="cat-head"><span className="sig">◆</span>{cat}<span style={{ marginLeft: "auto" }}>{list.length}</span></div>
            {list.map((a) => (
              <button key={a.reg} className={`art-row ${a.reg === sel ? "on" : ""}`} onClick={() => onPick(a.reg)}>
                <span className="reg">{a.reg}</span>
                <span className="nm">{a.name}</span>
                <span className={`led ${a.status === "live" ? "live" : ""}`} />
              </button>
            ))}
          </div>
        ))}
      </div>
      <div className="rail-foot"><span>j/k · ⏎ navigate</span><span>green = real codec</span></div>
    </div>
  );
}

/* ── PREVIEW (region 3 top) ──────────────────────────────────────────────── */
export function PreviewPane(props: {
  art: any; bundle: GenResult | null; mode: ViewMode; file: string | null;
  setFile: (p: string | null) => void; onToast: (m: string, k?: "ok" | "red") => void;
}) {
  const { art, bundle, mode, file } = props;
  const fileBytes = (p: string): Uint8Array | null => {
    const f = bundle?.files.find((x) => x.path === p);
    return f ? f.data : null;
  };
  const selected = file ?? bundle?.files.find((f) => f.lang !== "json")?.path ?? bundle?.files[0]?.path ?? null;

  return (
    <div className="panel pv">
      <div className="band teal">PREVIEW <span className="sp">V = cycle · {mode.toUpperCase()}</span></div>
      <div className={`pv-body ${mode !== "rendered" ? "mode-teal" : ""}`}>
        {!art ? (
          <div className="metacard">no artifact selected — pick one from the catalog rail.</div>
        ) : (
          <Rendered art={art} bundle={bundle} mode={mode} selected={selected} bytes={fileBytes} onToast={props.onToast} />
        )}
      </div>
    </div>
  );
}

function MetaCard({ art }: { art: any }) {
  return (
    <div className="metacard">
      <div className="row"><span className="k">ARTIFACT</span><span className="big">{art.reg} · {art.name}</span></div>
      <div className="row"><span className="k">SUBTITLE</span><span>{art.sub}</span></div>
      <div className="row"><span className="k">CARRIER</span><span>{art.cat} · zone {art.zone}</span></div>
      <div className="row"><span className="k">VECTOR</span><span>{art.vector}</span></div>
      <div className="row"><span className="k">PERSIST</span><span>{art.persist}</span></div>
      <div className="row"><span className="k">CAPACITY</span><span>{art.cap}</span></div>
      <div className="row"><span className="k">MECHANISM</span><span>{art.mech}</span></div>
      {art.status === "stub" && (
        <div className="row"><span className="k">STATE</span><span style={{ color: "var(--amber)" }}>stub — sources wired from corpus; codec not yet live (see ADDING-AN-ARTIFACT.md)</span></div>
      )}
    </div>
  );
}

function HexView({ buf }: { buf: Uint8Array }) {
  return (
    <div className="hex">
      {hexDump(buf).map((l, i) => (
        <div key={i}><span className="off">{l.off}</span>  {l.hex} <span className="p">{l.p}</span></div>
      ))}
    </div>
  );
}

function GhostProbe() {
  const [probe, setProbe] = useState<null | { status: number; etag: string | null; bits: string | null; micros: number }>(null);
  const [count, setCount] = useState(0);
  const lastEtag = useRef<string | undefined>(undefined);
  useEffect(() => {
    let alive = true;
    const tick = () => {
      ghostProbe(lastEtag.current).then((p) => {
        if (!alive) return;
        lastEtag.current = p.etag ?? undefined;
        setProbe(p); setCount((c) => c + 1);
      });
    };
    tick();
    const t = setInterval(tick, 2500);
    return () => { alive = false; clearInterval(t); };
  }, []);
  return (
    <div className="probe">
      <div><span className="k">PROBES</span><span className="g">{count} same-origin fetches · If-None-Match dance</span></div>
      <div><span className="k">STATUS</span>{probe ? <span className={probe.status === 304 ? "g" : "a"}>{probe.status === 304 ? "304 (oracle — 18 µs delta)" : "200 (fresh state)"}</span> : "…"}</div>
      <div><span className="k">ETag</span><span className="r">{probe?.etag ?? "…"}</span></div>
      <div><span className="k">GHOST STATE</span><span className="a">{probe?.bits ?? "…"}.{probe?.bits === "000" ? "000 — initial" : "flipped"}</span></div>
      <div><span className="k">RTT</span><span>{probe?.micros ?? "…"} µs</span></div>
      <div><span className="k">CHANNEL</span><span>3 b per rotation · state survives hard refresh + restart</span></div>
    </div>
  );
}

function Rendered(props: {
  art: any; bundle: GenResult | null; mode: ViewMode; selected: string | null;
  bytes: (p: string) => Uint8Array | null; onToast: (m: string, k?: "ok" | "red") => void;
}) {
  const { art, bundle, mode, selected } = props;

  if (mode === "source") {
    const buf = selected ? props.bytes(selected) : null;
    if (!buf) return <div className="metacard">no file selected.</div>;
    if (buf[0] === 0x89 || buf[0] === 0x00 || buf[0] === 0x50) return <HexView buf={buf} />;
    return <pre className="minicode" style={{ maxHeight: "100%", whiteSpace: "pre-wrap" }}>{new TextDecoder().decode(buf)}</pre>;
  }
  if (mode === "hex") {
    const buf = selected ? props.bytes(selected) : null;
    return buf ? <HexView buf={buf} /> : <div className="metacard">no file.</div>;
  }
  if (mode === "structure") {
    const buf = selected ? props.bytes(selected) : null;
    if (!buf) return <div className="metacard">no file.</div>;
    const dec = icoDecode(buf);
    if (dec) return (
      <table className="stab"><tr><th>frame</th><th>size</th><th>bits</th><th>bytes</th><th>alpha</th></tr>
        {icoTable(buf)!.map((f, i) => <tr key={i}><td>{i}</td><td>{f.w}×{f.h}</td><td>{f.bits}</td><td>{f.bytes}</td><td>{f.alpha ? "yes — LSB plane" : "no"}</td></tr>)}</table>
    );
    const pc = pngChunks(buf);
    if (pc) return (
      <table className="stab"><tr><th>offset</th><th>type</th><th>length</th></tr>
        {pc.map((c) => <tr key={c.off}><td>0x{c.off.toString(16)}</td><td style={{ color: c.type === "IHDR" || c.type === "IEND" ? "var(--amber)" : "#c4cdc5" }}>{c.type}</td><td>{c.len}</td></tr>)}</table>
    );
    if (buf[0] !== 0x89 && buf[0] !== 0x00 && buf[0] !== 0x50) {
      const t = textStats(new TextDecoder().decode(buf));
      return (
        <table className="stab"><tr><th>field</th><th>value</th></tr>
          <tr><td>chars</td><td>{t.chars}</td></tr><tr><td>lines</td><td>{t.lines}</td></tr>
          <tr><td>zero-width (U+200B/C/D/AD)</td><td style={{ color: t.zw ? "var(--signal)" : "#c4cdc5" }}>{t.zw}  {t.zw ? "← TXT-001 signature" : ""}</td></tr></table>
      );
    }
    return <div className="metacard">no container walker for this format yet — <b>{selected}</b> · {buf.length} bytes.</div>;
  }
  if (mode === "entropy") {
    const buf = selected ? props.bytes(selected) : null;
    if (!buf) return <div className="metacard">no file.</div>;
    const e = entropyOf(buf);
    const top = new Set(e.bars.map((v, i) => [v, i] as const).sort((a, b) => b[0] - a[0]).slice(0, 4).map((x) => x[1]));
    return (
      <div>
        <div className="metacard" style={{ marginBottom: 6 }}>
          <div className="row"><span className="k">SHANNON</span><span className="big" style={{ color: e.shannon > 4 ? "var(--amber)" : undefined }}>{e.shannon.toFixed(3)} bits/byte</span>
            <span style={{ color: "#78868a" }}>({buf.length} bytes)</span></div>
        </div>
        <div className="entropybars">{e.bars.map((v, i) => (
          <i key={i} className={top.has(i) ? "hot" : ""} style={{ height: `${(v / e.max) * 100}%` }} title={`0x${i.toString(16).padStart(2, "0")}: ${v}`} />
        ))}</div>
      </div>
    );
  }

  // rendered (default)
  if (art.preview === "ico") {
    const ico = bundle?.files.find((f) => f.path === "favicon.ico");
    const uri = ico ? `data:image/x-icon;base64,${b64(ico.data)}` : null;
    return (
      <div>
        <div className="mbt">
          <div className="tabs">
            <div className="tab"><span className="f16" />ghost-01 · favicon.ico <span style={{ opacity: .5 }}>×</span></div>
            <span style={{ fontSize: 8, color: "#5f6d6a" }}>chrome mock</span>
          </div>
          <div className="url">http://localhost:8787/ghost/favicon.ico</div>
          <div className="stage">
            {uri && [16, 32, 48].map((s) => (
              <div className="sizebox" key={s}>
                <img src={uri} style={{ width: s, height: s, imageRendering: "pixelated" }} alt={String(s)} />
                <span className="lbl">{s}px</span>
              </div>
            ))}
            <div style={{ fontSize: 9, color: "#78868a", lineHeight: 1.8 }}>
              ico frames: 3 × 32bpp<br />48×48 alpha plane = 2304 b<br />LSB capacity (shannon)<br />
              <b style={{ color: "var(--amber)" }}>{art.status === "live" ? "payload embedded" : "carrier only"}</b>
            </div>
          </div>
        </div>
        {art.status === "live" && <GhostProbe />}
      </div>
    );
  }
  if (art.preview === "code") {
    const f = bundle?.files.find((x) => x.lang === "js" || x.lang === "ts" || x.lang === "py");
    const text = f && f.lang !== "bin" ? new TextDecoder().decode(f.data).split("\n").slice(0, 26).join("\n") : "—";
    return <pre className="minicode">{text}{f && new TextDecoder().decode(f.data).split("\n").length > 26 ? "\n…" : ""}</pre>;
  }
  if (art.preview === "headers") {
    return (
      <div className="minicode" style={{ whiteSpace: "pre-wrap" }}>{`HTTP/1.1 200 OK
Server: ghost-01/${art.reg}
ETag: "a1f3-000b"
Cache-Control: no-store
${art.mech}

# carrier headers per spec — live rotation for BSC-001,
# others render here once their ghost is wired.`}</div>
    );
  }
  if (art.preview === "text") {
    const f = bundle?.files.find((x) => x.lang === "txt");
    return f ? <pre className="minicode" style={{ whiteSpace: "pre-wrap", color: "#e9e6d8" }}>{new TextDecoder().decode(f.data)}</pre> : <MetaCard art={art} />;
  }
  return <MetaCard art={art} />;
}

/* ── TREE (region 3 bottom) ──────────────────────────────────────────────── */
export function TreePane({ bundle, file, setFile, dirty }: {
  bundle: GenResult | null; file: string | null; setFile: (p: string | null) => void; dirty: Record<string, string>;
}) {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const nodes = bundle?.meta.files ?? [];
  const sel = file ?? bundle?.files.find((f) => f.lang !== "json")?.path ?? bundle?.files[0]?.path ?? null;

  const renderNodes = (list: any[], d: number, prefix: string) => (
    list.map((n: any) => {
      const p = prefix ? `${prefix}/${n.n}` : n.n;
      if (n.ch) {
        const o = open[p] !== false;
        return (
          <div key={p}>
            <div className="tnode" style={{ paddingLeft: d * 12 + 4 }} onClick={() => setOpen((s) => ({ ...s, [p]: !o }))}>
              <span className="tw">{o ? "▾" : "▸"}</span>
              <span style={{ color: "#78868a" }}>{n.n}/</span>
              <span className="ln">{n.ch.length}f</span>
            </div>
            {o && renderNodes(n.ch, d + 1, p)}
          </div>
        );
      }
      const isBin = n.l === "bin";
      return (
        <div key={p} className={`tnode ${p === sel ? "sel" : ""}`} style={{ paddingLeft: d * 12 + 18 }} onClick={() => setFile(p)}>
          <span className="dot" style={{ background: isBin ? "var(--amber)" : undefined, boxShadow: isBin ? "0 0 5px rgba(217,164,65,.6)" : undefined }} />
          {n.n}
          {dirty[p] !== undefined && <span className="dot dirty" title="modified" />}
          <span className="ln">{bundle?.files.find((f) => f.path === p)?.data.length ?? 0} b</span>
        </div>
      );
    })
  );

  return (
    <div className="panel tr">
      <div className="band">FILE TREE <span className="sp">{bundle?.files.length ?? 0} FILES · 5-FILE RULE</span></div>
      <div className="tree-body">
        {bundle ? renderNodes(nodes, 0, "") : "—"}
        <div className="tnote">click a file → editor (right) · amber dot = binary · red dot = modified</div>
      </div>
    </div>
  );
}

/* ── EDITOR (region 4 top) ───────────────────────────────────────────────── */
export function EditorPane(props: {
  bundle: GenResult | null; file: string | null; dirty: Record<string, string>;
  setDirty: (d: Record<string, string>) => void; setFile: (p: string | null) => void;
  onToast: (m: string, k?: "ok" | "red") => void;
}) {
  const { bundle, file, dirty, setDirty } = props;
  const sel = file ?? bundle?.files.find((f) => f.lang !== "json")?.path ?? bundle?.files[0]?.path ?? null;
  const f = bundle?.files.find((x) => x.path === sel);
  const isBin = f?.lang === "bin";
  const text = sel && !isBin ? (dirty[sel] ?? (f ? new TextDecoder().decode(f.data) : "")) : "";
  const lines = text.split("\n");
  const preRef = useRef<HTMLPreElement>(null);
  const lnRef = useRef<HTMLDivElement>(null);

  return (
    <div className="panel" style={{ flex: 1 }}>
      <div className="ed-head">
        <span className="fname">{sel ?? "—"}</span>
        {f && <span className="lang">{f.lang}</span>}
        {f && <span style={{ fontSize: 8.5, color: "#9db3af" }}>{f.data.length} b · zone {bundle?.meta.zone}</span>}
        {sel && dirty[sel] !== undefined && <span className="mod">MODIFIED</span>}
      </div>
      {!f ? (
        <div className="ed-empty">NO FILE</div>
      ) : isBin ? (
        <div className="ed-empty" style={{ flexDirection: "column", gap: 8 }}>
          <span style={{ fontSize: 22, color: "var(--amber)" }}>▦</span>
          <span>BINARY CARRIER — view in HEX / STRUCTURE / ENTROPY (V)</span>
          <span style={{ fontSize: 8.5 }}>codec output is deterministic; bytes are canonical</span>
        </div>
      ) : (
        <div className="ed-wrap">
          <div className="lns" ref={lnRef}>{lines.map((_, i) => <div key={i}>{i + 1}</div>)}</div>
          <div className="ed-area">
            <pre aria-hidden>{text}</pre>
            <textarea
              spellCheck={false}
              value={text}
              onChange={(e) => setDirty({ ...dirty, [sel!]: e.target.value })}
              onScroll={(e) => {
                if (lnRef.current) lnRef.current.scrollTop = (e.target as HTMLTextAreaElement).scrollTop;
                if (scrollRef.current) scrollRef.current.scrollTop = (e.target as HTMLTextAreaElement).scrollTop;
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

/* ── EVIDENCE (type D panel — replaces region 4) ─────────────────────────── */
export function EvidencePanel() {
  const [ev, setEv] = useState<any[]>([]);
  useEffect(() => {
    let alive = true;
    const tick = () => fetchEvidence().then((r) => alive && setEv(r.evidence));
    tick();
    const t = setInterval(tick, 2000);
    return () => { alive = false; clearInterval(t); };
  }, []);
  return (
    <div className="panel" style={{ minHeight: 0 }}>
      <div className="band">EVIDENCE <span className="sp">{ev.length} RECORDS · CHAIN HEAD {ev[0] ? ev[0].hash.slice(0, 10) : "GENESIS"}</span></div>
      <div className="evfeed">
        {ev.length === 0 && (
          <div style={{ fontSize: 10, color: "#78868a", lineHeight: 2, padding: 8 }}>
            no records yet — probe the ghost: select <b style={{ color: "var(--signal)" }}>BSC-001</b>, watch the preview,
            or curl <b>/ghost/favicon.ico</b>. every 200 appends a chained record.
          </div>
        )}
        {ev.map((e, i) => (
          <div className="evblock" key={i} style={{ height: 40 + Math.min(40, (e.payload?.bits ?? 3) * 6) }}>
            <div className="h"><b>{e.id}</b><span className="chip">{e.reg}</span><span>{e.at.slice(11, 19)}</span><span style={{ marginLeft: "auto" }}>{e.src}</span></div>
            <div style={{ color: "#aeb9b4" }}>{(e.payload && (e.payload as any).etag) ? `ETag ${e.payload.etag} · ${(e.payload as any).bits} b` : JSON.stringify(e.payload ?? {})} · {e.ua?.slice(0, 40)}</div>
            <div className="chain">prev {e.prev.slice(0, 12)}… → sha256 {e.hash.slice(0, 24)}…</div>
          </div>
        ))}
      </div>
    </div>
  );
}
