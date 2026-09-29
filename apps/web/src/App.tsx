import React, { useEffect, useMemo, useState } from "react";
import { REGISTRY, generate, type GenResult } from "@mfy/artifacts";
import { fetchCatalog } from "./api";
import { TopBar, Footer, Scanline, Toasts, type Toast } from "./bench";
import { Rail, PreviewPane, TreePane, EditorPane, EvidencePanel } from "./surfaces";
import { Palette, HelpModal, GenerateModal, AnalyzeModal, ExportModal, DiscardModal } from "./modals";

export type ViewMode = "rendered" | "source" | "hex" | "structure" | "entropy";
const MODES: ViewMode[] = ["rendered", "source", "hex", "structure", "entropy"];
const LIVE = new Set(["BSC-001", "STG-001", "TXT-001"]);

interface Art {
  id: string; reg: string; name: string; sub: string; cat: string; zone: string;
  preview: string; vector: string; persist: string; cap: string; mech: string;
  status: "live" | "stub"; files: any[]; refs?: string[];
}

export function App() {
  const [arts, setArts] = useState<Art[]>([]);
  const [sel, setSel] = useState("BSC-001");
  const [file, setFile] = useState<string | null>(null);
  const [mode, setMode] = useState<ViewMode>("rendered");
  const [dirty, setDirty] = useState<Record<string, string>>({});
  const [split, setSplit] = useState(55);
  const [showEv, setShowEv] = useState(false);
  const [modal, setModal] = useState<null | "generate" | "analyze" | "export" | "discard" | "help" | "palette">(null);
  const [toasts, setToasts] = useState<Toast[]>([]);

  const paletteAction = (m: string | null) => {
    setModal(null);
    if (m === "evidence") setShowEv(true);
    else if (m) setModal(m as any);
  };

  const toast = (msg: string, kind: "ok" | "red" = "ok") => {
    const id = Date.now() + Math.random();
    setToasts((t) => [...t, { id, msg, kind }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 4200);
  };

  useEffect(() => {
    fetchCatalog().then((c) => setArts(c.artifacts as Art[])).catch(() => setArts(REGISTRY as any));
  }, []);

  const art = useMemo(() => arts.find((a) => a.reg === sel) ?? null, [arts, sel]);
  const bundle: GenResult | null = useMemo(() => {
    if (!sel) return null;
    try { return generate(sel); } catch { return null; }
  }, [sel]);

  const select = (reg: string) => { setSel(reg); setFile(null); setDirty({}); };
  const jumpTo = (reg: string) => { select(reg); setModal(null); toast(`jumped to ${reg}`); };

  // vim-ish keys
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setModal(null); setShowEv(false); return; }
      const inField = (e.target as HTMLElement)?.tagName === "INPUT" || (e.target as HTMLElement)?.tagName === "TEXTAREA";
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); setModal("palette"); return; }
      if (inField) return;
      if (e.key === "?") { setModal("help"); return; }
      if (e.key === "v") { setMode((m) => MODES[(MODES.indexOf(m) + 1) % MODES.length]); return; }
      if (e.key === "e") { setShowEv((s) => !s); return; }
      if (e.key === "g") { setModal("generate"); return; }
      if (e.key === "a") { setModal("analyze"); return; }
      if (e.key === "j" || e.key === "k") {
        const i = arts.findIndex((a) => a.reg === sel);
        const n = e.key === "j" ? i + 1 : i - 1;
        if (arts[n]) { setSel(arts[n].reg); setFile(null); setDirty({}); }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [arts, sel]);

  // split drag
  const onSplit = (e: React.MouseEvent) => {
    e.preventDefault();
    const move = (ev: MouseEvent) => {
      const rect = (e.currentTarget.parentElement as HTMLElement).getBoundingClientRect();
      const y = ((ev.clientY - rect.top) / rect.height) * 100;
      setSplit(Math.min(75, Math.max(30, y)));
    };
    const up = () => { window.removeEventListener("mousemove", move); window.removeEventListener("mouseup", up); };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
  };

  const files = bundle?.files ?? [];
  const selFile = file ?? bundle?.files.find((f) => f.lang !== "json")?.path ?? bundle?.files[0]?.path ?? null;

  return (
    <div className="bench">
      <TopBar art={art} showEv={showEv} dirty={Object.keys(dirty).length > 0}
        onEvidence={() => setShowEv(true)} />
      <div className="main">
        <Rail arts={arts} sel={sel} onPick={select} />

        <div className="center">
          <div className="panel pv" style={{ flex: split }}><PreviewPane art={art} bundle={bundle} mode={mode} file={file} setFile={setFile} onToast={toast} /></div>
          <div className="splitline" onMouseDown={onSplit} />
          <div className="panel tr" style={{ flex: 100 - split }}><TreePane bundle={bundle} file={file} setFile={setFile} dirty={dirty} /></div>
        </div>

        {showEv
          ? <EvidencePanel />
          : (
            <div className="right">
              <EditorPane bundle={bundle} file={file} dirty={dirty} setDirty={setDirty} setFile={setFile} onToast={toast} />
              <div className="actions">
                <button className="act gen" disabled={!art || art.status !== "live"} onClick={() => setModal("generate")}>
                  <b>⚑</b>GENERATE<span>{art?.status === "live" ? " · G" : " · stub"}</span>
                </button>
                <button className="act anl" onClick={() => setModal("analyze")}><b>⌁</b>ANALYZE<span> · A</span></button>
                <button className="act" disabled={!art} onClick={() => setModal("export")}><b>⇩</b>EXPORT<span> · X</span></button>
                <button className="act" disabled={!Object.keys(dirty).length && !art} onClick={() => setModal("discard")}><b>✕</b>DISCARD<span> · D</span></button>
              </div>
            </div>
          )}
      </div>
      <Footer art={art} mode={mode} file={selFile} dirty={Object.keys(dirty).length} n={arts.length}
        live={arts.filter((a) => a.status === "live").length} onHelp={() => setModal("help")} />

      <Scanline />
      <Toasts toasts={toasts} />

      {modal === "palette" && <Palette arts={arts} onPick={select} onAction={paletteAction} />}
      {modal === "help" && <HelpModal onClose={() => setModal(null)} />}
      {modal === "generate" && art && bundle && <GenerateModal art={art} bundle={bundle} onDone={(m) => { toast(m); setModal(null); }} onClose={() => setModal(null)} />}
      {modal === "analyze" && <AnalyzeModal onJump={jumpTo} onToast={toast} onClose={() => setModal(null)} />}
      {modal === "export" && art && bundle && <ExportModal art={art} bundle={bundle} onClose={() => setModal(null)} />}
      {modal === "discard" && <DiscardModal onConfirm={() => { setDirty({}); setModal(null); toast("discarded — editor reset"); }} onClose={() => setModal(null)} />}
    </div>
  );
}

export { LIVE, MODES };
