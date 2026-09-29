import React, { useEffect, useState } from "react";

export interface Toast { id: number; msg: string; kind: "ok" | "red" }

export function TopBar(props: {
  art: any; showEv: boolean; dirty: boolean; onEvidence: () => void;
}) {
  const [now, setNow] = useState(new Date());
  useEffect(() => { const t = setInterval(() => setNow(new Date()), 1000); return () => clearInterval(t); }, []);
  const utc = now.toISOString().slice(11, 19);
  return (
    <div className="topbar">
      <div className="wordmark"><span className="seal">M</span>MANUFACTORY <small>· ASSEMBLY 0.2 · BENCH</small></div>
      <div className="crumb">
        {props.showEv ? (
          <>
            <span className="evchip">EVIDENCE</span>
            <span>live hit feed + SHA-256 chain</span>
            <button className="help" style={{ border: "1px solid var(--teal-2)", background: "none", color: "#8fd0c8", borderRadius: 3, fontSize: 8, padding: "1px 6px" }} onClick={props.onEvidence}>CLOSE (ESC)</button>
          </>
        ) : props.art ? (
          <>
            <span className="reg">{props.art.reg}</span>
            <b>{props.art.name}</b>
            <span>· {props.art.sub}</span>
            {props.dirty && <span className="mod">· MODIFIED</span>}
            <span style={{ opacity: .55 }}>zone {props.art.zone}</span>
          </>
        ) : (
          <span>select an artifact · 91 in registry</span>
        )}
      </div>
      <div className="utc">{utc} UTC <span className="blink" /></div>
    </div>
  );
}

export function Footer(props: {
  art: any; mode: string; file: string | null; dirty: number; n: number; live: number; onHelp: () => void;
}) {
  return (
    <div className="footer">
      <button className="help" onClick={props.onHelp}>[ HELP ? ]</button>
      <span className="ctx">{props.art ? `${props.art.cat} / ${props.art.reg}` : "CATALOG"} · mode {props.mode.toUpperCase()}</span>
      <span className="ctx">{props.file ?? "no file"}</span>
      {props.dirty > 0 && <span className="ctx" style={{ color: "var(--amber)" }}>{props.dirty} file(s) modified</span>}
      <span className="agg">{props.n} ARTIFACTS · {props.live} LIVE · trinity: web · api · mnf → @mfy/artifacts</span>
    </div>
  );
}

export function Scanline() { return <div className="scanline" />; }

export function Toasts({ toasts }: { toasts: Toast[] }) {
  return (
    <div className="toasts">
      {toasts.map((t) => <div key={t.id} className={`toast ${t.kind === "red" ? "red" : ""}`}>{t.msg}</div>)}
    </div>
  );
}
