import React, { useMemo, useRef, useState } from "react";
import type { GenResult } from "@mfy/artifacts";
import { zipStore, b64 } from "@mfy/codec";
import { analyze, suggestArtifact } from "@mfy/artifacts";
import { downloadBlob } from "./utils";
import { fetchEvidence } from "./api";

function Shell({ title, onClose, children, foot }: { title: string; onClose: () => void; children: React.ReactNode; foot: React.ReactNode }) {
  return (
    <div className="dim" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal">
        <div className="m-head">{title}<button className="x" onClick={onClose}>×</button></div>
        <div className="m-body">{children}</div>
        <div className="m-foot">{foot}</div>
      </div>
    </div>
  );
}

/* ── K PALETTE ──────────────────────────────────────────────────────────── */
export function Palette({ arts, onPick, onAction }: {
  arts: any[]; onPick: (reg: string) => void; onAction: (m: any) => void;
}) {
  const [q, setQ] = useState("");
  const [i, setI] = useState(0);
  const acts = [
    { k: "generate", d: "open generate modal", run: () => onAction("generate") },
    { k: "analyze", d: "open analyze modal", run: () => onAction("analyze") },
    { k: "evidence", d: "open evidence panel", run: () => onAction("evidence") },
    { k: "help", d: "keymap", run: () => onAction("help") },
  ];
  const items = useMemo(() => {
    const ql = q.toLowerCase();
    const a = arts.filter((x) => !ql || `${x.reg} ${x.name} ${x.sub} ${x.cat}`.toLowerCase().includes(ql))
      .slice(0, 12).map((x) => ({ kind: "artifact", label: `${x.reg}  ${x.name}`, hint: x.cat, run: () => { onPick(x.reg); onAction(null); } }));
    const b = acts.filter((x) => !ql || x.k.includes(ql)).map((x) => ({ kind: "action", label: x.k, hint: x.d, run: x.run }));
    return [...a, ...b];
  }, [arts, q]); // eslint-disable-line
  const sel = items[i];
  return (
    <div className="dim" onMouseDown={(e) => { if (e.target === e.currentTarget) onAction(null); }}>
      <div className="palette">
        <input autoFocus placeholder="type a reg, an artifact, or an action…  (esc closes)" value={q}
          onChange={(e) => { setQ(e.target.value); setI(0); }}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") { e.preventDefault(); setI((x) => Math.min(items.length - 1, x + 1)); }
            if (e.key === "ArrowUp") { e.preventDefault(); setI((x) => Math.max(0, x - 1)); }
            if (e.key === "Enter" && sel) sel.run();
          }} />
        <div className="plist">
          {items.map((it, j) => (
            <div key={j} className={`pitem ${j === i ? "on" : ""}`} onMouseEnter={() => setI(j)} onClick={() => it.run()}>
              <span className="kind">{it.kind}</span>{it.label}<span className="hint">{it.hint}</span>
            </div>
          ))}
          {items.length === 0 && <div className="pitem">no match</div>}
        </div>
      </div>
    </div>
  );
}

/* ── HELP ────────────────────────────────────────────────────────────────── */
export function HelpModal({ onClose }: { onClose: () => void }) {
  const rows: [string, string][] = [
    ["j / k", "prev / next artifact (catalog)"],
    ["⏎ / click", "open artifact (preview warms to it)"],
    ["V", "cycle view: RENDERED · SOURCE · HEX · STRUCTURE · ENTROPY"],
    ["⌘K / ctrl+K", "palette — artifacts + actions"],
    ["G", "generate modal"],
    ["A", "analyze modal (drop a file)"],
    ["E", "evidence panel"],
    ["?", "this overlay"],
    ["ESC", "close modal / evidence"],
  ];
  return (
    <Shell title="MANUFACTORY — KEYMAP" onClose={onClose}
      foot={<button className="mbtn" onClick={onClose}>CLOSE</button>}>
      <div className="kmap"><table>{rows.map(([k, d]) => (
        <tr key={k}><td style={{ width: 130 }}><kbd>{k}</kbd></td><td>{d}</td></tr>))}</table></div>
    </Shell>
  );
}

/* ── GENERATE ────────────────────────────────────────────────────────────── */
export function GenerateModal({ art, bundle, onDone, onClose }: {
  art: any; bundle: GenResult; onDone: (m: string) => void; onClose: () => void;
}) {
  const [runAs, setRunAs] = useState<"static" | "ghost" | "docker">("ghost");
  const [busy, setBusy] = useState(false);
  const go = async () => {
    setBusy(true);
    const zip = zipStore(bundle.files.map((f) => ({ path: f.path, data: f.data })));
    // trinity check: ask the API surface for the same artifact, compare byte counts
    let trinity = "";
    try {
      const r = await fetch(`/api/generate/${art.reg}`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ runAs }) });
      const j = await r.json();
      const ok = j.bundle && j.zipSize === zip.length && j.bundle.files.length === bundle.files.length;
      trinity = ok ? ` · trinity check OK (api ⇄ web, ${j.zipSize} B zip)` : " · trinity check FAILED — investigate";
    } catch { trinity = " · (api offline — local only)"; }
    downloadBlob(`${art.reg.toLowerCase()}-${runAs}.zip`, zip, "application/zip");
    const kb = (zip.length / 1024).toFixed(1);
    onDone(`${art.reg} generated — ${bundle.files.length} files · ${kb} KB zip${trinity}`);
    setBusy(false);
  };
  return (
    <Shell title={`GENERATE — ${art.reg} · ${art.name}`} onClose={onClose}
      foot={<>
        <button className="mbtn" onClick={onClose}>CANCEL</button>
        <button className="mbtn red" onClick={go} disabled={busy}>{busy ? "GENERATING…" : "GENERATE"}</button>
      </>}>
      <div>manifest — {bundle.files.length} files (5-file rule: server · carrier · dashboard · deploy · card)</div>
      <table className="manifest">
        {bundle.files.map((f) => (
          <tr key={f.path}>
            <td><span className="ok">[x]</span>  {f.path}</td>
            <td className="sz">{f.data.length} b</td>
            <td className="sz">{f.lang}</td>
          </tr>
        ))}
      </table>
      <div>run as</div>
      <div className="radios">
        {(["ghost", "static", "docker"] as const).map((m) => (
          <label key={m}><input type="radio" checked={runAs === m} onChange={() => setRunAs(m)} /> {m.toUpperCase()}</label>
        ))}
      </div>
      <div className="shellprev">{(bundle.shell[runAs] ?? []).join("\n")}</div>
    </Shell>
  );
}

/* ── ANALYZE ─────────────────────────────────────────────────────────────── */
const ARMED = ["magic signature", "ico alpha-LSB sync scan", "png red-LSB sync scan", "zero-width scan", "trailing data", "entropy"];

export function AnalyzeModal({ onJump, onToast, onClose }: {
  onJump: (reg: string) => void; onToast: (m: string, k?: "ok" | "red") => void; onClose: () => void;
}) {
  const [hot, setHot] = useState(false);
  const [report, setReport] = useState<null | ReturnType<typeof analyze>>(null);
  const [err, setErr] = useState("");
  const input = useRef<HTMLInputElement>(null);
  const suggest = report ? suggestArtifact(report) : null;

  const load = async (f: File) => {
    const buf = new Uint8Array(await f.arrayBuffer());
    if (buf.length > 8 * 1024 * 1024) { setErr("file too large (8 MB cap)"); return; }
    setReport(analyze(buf, f.name));
    setErr("");
  };

  return (
    <Shell title="ANALYZE — DROP A FILE INTO THE SOCKET" onClose={onClose}
      foot={<>
        <button className="mbtn" onClick={onClose}>CANCEL</button>
        {suggest && <button className="mbtn red" onClick={() => onJump(suggest)}>JUMP TO ARTIFACT → {suggest}</button>}
        {report && !suggest && <button className="mbtn" onClick={() => {
          downloadBlob(`report-${report.file}.json`, JSON.stringify(report, null, 2), "application/json");
          onToast("report exported");
        }}>EXPORT REPORT</button>}
      </>}>
      <div className={`socket ${hot ? "hot" : ""}`} onClick={() => input.current?.click()}
        onDragOver={(e) => { e.preventDefault(); setHot(true); }}
        onDragLeave={() => setHot(false)}
        onDrop={(e) => { e.preventDefault(); setHot(false); const f = e.dataTransfer.files[0]; if (f) load(f); }}>
        <span className="lab">USB SOCKET — ico · png · txt · any</span>
      </div>
      <input ref={input} type="file" style={{ display: "none" }} onChange={(e) => { const f = e.target.files?.[0]; if (f) load(f); }} />
      {err && <div style={{ color: "var(--signal)", fontWeight: 700, marginTop: 12 }}>{err}</div>}
      {!report && (
        <ul className="detlist">
          {ARMED.map((d) => <li key={d}><span className="b" />{d}<span className="note">armed</span></li>)}
          <li><span className="b" />zip-walk · woff2 · svg · exif · id3 · pdf<span className="note">na — phase 3</span></li>
        </ul>
      )}
      {report && <ResultView report={report} />}
    </Shell>
  );
}

function ResultView({ report }: { report: any }) {
  const lsb = report.lsb;
  // lsb.bits is base64 of a packed bit stream (MSB-first) — unpack to per-bit
  let bits: number[] | null = null;
  if (lsb) {
    const raw = atob(lsb.bits);
    bits = Array.from({ length: lsb.w * lsb.h }, (_, i) => (raw.charCodeAt(i >> 3) >> (7 - (i & 7))) & 1);
  }
  const cell = lsb && lsb.w <= 96 ? Math.ceil(230 / lsb.w) : 4;
  return (
    <div>
      <div className={`verdict ${report.verdict === "clean" ? "clean" : "flag"}`}>{report.verdict}</div>
      <div>confidence <span className="dots">{"●●●●●".split("").map((c, i) => (
        <span key={i} className={i < report.confidence ? "on" : "off"}>●</span>))}</span> · {report.magic} · {report.file} · {report.size} b</div>
      <ul className="detlist" style={{ marginTop: 10 }}>
        {report.detectors.map((d: any) => (
          <li key={d.id} className={d.status === "flag" ? "flag" : d.status === "clean" ? "run" : ""}>
            <span className="b" />{d.name}<span className="note">{d.note}</span>
          </li>
        ))}
      </ul>
      {report.extracted && (
        <div style={{ marginTop: 10, background: "#101517", color: "#7fd6a0", borderRadius: 4, padding: "10px 12px", fontSize: 11 }}>
          extracted: “{report.extracted}”
        </div>
      )}
      {lsb && bits && (
        <div style={{ marginTop: 12 }}>
          <div style={{ fontSize: 8.5, letterSpacing: 1, color: "#78868a", marginBottom: 6 }}>
            {lsb.plane.toUpperCase()} LSB HEATMAP · {lsb.w}×{lsb.h}
          </div>
          <div className="heat" style={{ gridTemplateColumns: `repeat(${lsb.w}, ${cell}px)` }}>
            {Array.from({ length: lsb.w * lsb.h }, (_, i) => (
              <i key={i} className={bits[i] ? "bit1" : ""} style={{ width: cell, height: cell }} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ── EXPORT ─────────────────────────────────────────────────────────────── */
export function ExportModal({ art, bundle, onClose }: { art: any; bundle: GenResult; onClose: () => void }) {
  return (
    <Shell title={`EXPORT — ${art.reg}`} onClose={onClose}
      foot={<>
        <button className="mbtn" onClick={onClose}>CLOSE</button>
        <button className="mbtn" onClick={() => downloadBlob(`${art.reg}-manifest.json`, JSON.stringify({ meta: bundle.meta, bundle: bundle.bundle, spec: bundle.spec }, null, 2), "application/json")}>MANIFEST .JSON</button>
        <button className="mbtn red" onClick={() => downloadBlob(`${art.reg.toLowerCase()}.zip`, zipStore(bundle.files.map((f) => ({ path: f.path, data: f.data }))), "application/zip")}>BUNDLE .ZIP</button>
      </>}>
      {bundle.files.length} files · {bundle.files.reduce((s, f) => s + f.data.length, 0)} b total · run-as: ghost / static / docker
    </Shell>
  );
}

/* ── DISCARD ─────────────────────────────────────────────────────────────── */
export function DiscardModal({ onConfirm, onClose }: { onConfirm: () => void; onClose: () => void }) {
  return (
    <Shell title="DISCARD — confirm" onClose={onClose}
      foot={<>
        <button className="mbtn" onClick={onClose}>KEEP</button>
        <button className="mbtn red" onClick={onConfirm}>DISCARD</button>
      </>}>
      throws away uncommitted editor changes for this artifact. the generated bytes themselves are deterministic and never touched.
    </Shell>
  );
}
