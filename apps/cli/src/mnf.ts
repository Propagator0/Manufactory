// mnf — the Manufactory CLI. Third surface of the trinity:
// calls the exact same @mfy/artifacts generate()/analyze() as web and api.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, resolve } from "node:path";
import { REGISTRY, BY_REG, SPECS, generate, analyze, suggestArtifact } from "@mfy/artifacts";
import { extractIcoPayload, extractPngPayload, zwDecode } from "@mfy/codec";
// trinity: `mnf serve` boots the exact same app factory as apps/api
import { createApp } from "../../api/src/app.js";

const C = {
  red: (s: string) => `\x1b[31m${s}\x1b[0m`,
  dim: (s: string) => `\x1b[2m${s}\x1b[0m`,
  grn: (s: string) => `\x1b[32m${s}\x1b[0m`,
  amb: (s: string) => `\x1b[33m${s}\x1b[0m`,
  cym: (s: string) => `\x1b[36m${s}\x1b[0m`,
  bld: (s: string) => `\x1b[1m${s}\x1b[0m`,
};

function help() {
  console.log(`
${C.bld("mnf")} — Manufactory CLI · trinity surface 3 of 3

  ${C.cym("mnf list")} [--cat TEXT] [--q foo]     browse the catalog (91 artifacts)
  ${C.cym("mnf show")} <REG>                       artifact card + five-question spec
  ${C.cym("mnf generate")} <REG> [-o DIR]          write the artifact files (default ./out/<reg>)
  ${C.cym("mnf analyze")} <FILE> [--json]          run the full detector arsenal
  ${C.cym("mnf serve")} [PORT]                     run the api + web + ghost on :8787

  examples:
    mnf generate BSC-001 -o ./out          # real ico with alpha-LSB payload + ghost server
    mnf analyze out/bsc-001/favicon.ico    # → flag: stego-carrier, confidence 5/5
    mnf analyze out/txt-001/document.txt   # → flag: zero-width, payload recovered
`);
}

function arg(flags: string[], key: string, def?: string): string | undefined {
  const i = flags.indexOf(key);
  return i >= 0 ? flags[i + 1] : def;
}

async function main() {
  const [cmd, ...flags] = process.argv.slice(2);
  switch (cmd) {
    case undefined: case "help": case "--help": return help();

    case "list": {
      const cat = arg(flags, "--cat");
      const q = (arg(flags, "--q") ?? "").toLowerCase();
      const arts = REGISTRY.filter((a) => (!cat || a.cat === cat) && (!q || `${a.reg} ${a.name} ${a.sub} ${a.mech}`.toLowerCase().includes(q)));
      let last = "";
      for (const a of arts) {
        if (a.cat !== last) { console.log(`\n${C.bld(a.cat)}`); last = a.cat; }
        const live = a.status === "live" ? C.grn("● live ") : C.dim("○ stub ");
        console.log(`  ${live} ${C.red(a.reg.padEnd(8))} ${a.name.padEnd(22)} ${C.dim(a.sub.slice(0, 44))}`);
      }
      console.log(`\n${arts.length} artifacts · ${REGISTRY.length} total · ${REGISTRY.filter((a) => a.status === "live").length} live`);
      return;
    }

    case "show": {
      const a = BY_REG.get(flags[0]);
      if (!a) return console.error(C.red(`unknown reg: ${flags[0]} — try "mnf list"`));
      console.log(`\n${C.bld(`${a.reg} · ${a.name}`)}  ${C.dim(a.sub)}\n`);
      const row = (k: string, v: string) => console.log(`  ${C.dim(k.padEnd(12))} ${v}`);
      row("cat/zone", `${a.cat} · ${a.zone}`);
      row("status", a.status === "live" ? C.grn("LIVE — real codec") : C.amb("stub — corpus sources wired"));
      row("vector", a.vector); row("persist", a.persist);
      row("capacity", a.cap); row("mechanism", a.mech);
      row("files", a.files.map((f: any) => f.n).join(", "));
      const spec = SPECS[a.reg];
      if (spec) {
        console.log(`\n${C.bld("five-question spec")}`);
        console.log(`  ${C.dim("write    ")} ${spec.write}`);
        console.log(`  ${C.dim("persist  ")} ${spec.persist.join(" · ")}`);
        console.log(`  ${C.dim("vary     ")} ${spec.vary.join(" · ")}`);
        console.log(`  ${C.dim("observe  ")} ${spec.observe.join(" · ")}`);
        console.log(`  ${C.dim("capacity ")} ${spec.capacity}`);
      }
      return;
    }

    case "generate": {
      const reg = flags[0];
      const out = resolve(arg(flags, "-o", arg(flags, "--out", `./out/${reg.toLowerCase()}`))!);
      const a = BY_REG.get(reg);
      if (!a) return console.error(C.red(`unknown reg: ${reg}`));
      const res = generate(reg, "ghost");
      mkdirSync(out, { recursive: true });
      for (const f of res.files) {
        const p = join(out, f.path);
        mkdirSync(join(p, ".."), { recursive: true });
        writeFileSync(p, Buffer.from(f.data));
      }
      console.log(`\n${C.bld(`${reg} generated`)} ${C.dim(`(${a.status})`)} → ${out}`);
      for (const f of res.files) console.log(`  ${C.cym(f.path.padEnd(28))} ${String(f.data.length).padStart(7)} b`);
      console.log(`\n${C.dim("run as:")} ${res.shell.ghost.join("  ")}  ${C.dim("(from " + out + ")")}`);
      if (a.status === "live") {
        console.log(`\n${C.grn("◈ round-trip check")}`);
        const ico = res.files.find((f) => f.path === "favicon.ico");
        if (ico) {
          const p = extractIcoPayload(ico.data);
          console.log(`  ico alpha-LSB → ${p ? C.grn("payload recovered: “" + p + "”") : C.red("FAILED")}`);
        }
        const png = res.files.find((f) => f.path === "report.png");
        if (png) {
          const p = extractPngPayload(png.data);
          console.log(`  png red-LSB   → ${p ? C.grn("payload recovered: “" + p + "”") : C.red("FAILED")}`);
        }
        const txt = res.files.find((f) => f.path === "document.txt");
        if (txt) {
          const p = zwDecode(new TextDecoder().decode(txt.data)).payload;
          console.log(`  zero-width    → ${p ? C.grn("payload recovered: “" + p + "”") : C.red("FAILED")}`);
        }
        console.log(`\n${C.dim("verify with the analyzer:")} ${C.cym(`mnf analyze ${join(out, a.reg === "BSC-001" ? "favicon.ico" : a.reg === "STG-001" ? "report.png" : "document.txt")}`)}`);
      } else {
        console.log(`\n${C.dim("stub artifact — sources only; codec not wired (docs/ADDING-AN-ARTIFACT.md)")}`);
      }
      return;
    }

    case "analyze": {
      const file = flags[0];
      if (!file || !existsSync(file)) return console.error(C.red(`no such file: ${file}`));
      const buf = new Uint8Array(readFileSync(file));
      const r = analyze(buf, file.split("/").pop() ?? file);
      if (arg(flags, "--json")) return console.log(JSON.stringify(r, null, 2));
      console.log(`\n${C.bld(file)}`);
      console.log(`  ${C.dim("format")}  ${r.magic} · ${r.size} b`);
      console.log(`  ${C.dim("verdict")} ${r.verdict === "clean" ? C.grn("clean") : C.red(r.verdict)}`);
      console.log(`  ${C.dim("confidence")} ${"●".repeat(r.confidence)}${"○".repeat(5 - r.confidence)} (${r.confidence}/5)`);
      console.log(`\n  detectors:`);
      for (const d of r.detectors) {
        const tag = d.status === "flag" ? C.red(" FLAG ") : d.status === "clean" ? C.grn(" clean") : C.dim("   na ");
        console.log(`   ${tag} ${d.name.padEnd(18)} ${C.dim(d.note)}`);
      }
      if (r.extracted) console.log(`\n  ${C.bld("extracted payload")} ${C.grn("“" + r.extracted + "”")}`);
      const s = suggestArtifact(r);
      if (s) console.log(`  ${C.dim("producer")}: ${C.cym(s)}`);
      console.log("");
      return;
    }

    case "serve": {
      const port = Number(flags[0] ?? 8787);
      const { app } = await createApp({ port });
      await app.listen({ host: "0.0.0.0", port });
      console.log(`${C.bld("MANUFACTORY")} — bench online on :${port}`);
      console.log(`  web    ${C.cym(`http://localhost:${port}/`)}`);
      console.log(`  ghost  ${C.cym(`http://localhost:${port}/ghost/favicon.ico`)}  (BSC-001, live)`);
      return;
    }

    default:
      console.error(C.red(`unknown command: ${cmd}`)); help();
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
