// BSC-001 — favicon.ico · ETag ghost cookie  (the trinity's first artifact)
import { icoEncode, makeFaviconFrames, embedIcoPayload } from "@mfy/codec";
import { ChannelSpec } from "@mfy/schema";
import type { BundleFileData } from "../index.js";

export const SPEC: ChannelSpec = {
  reg: "BSC-001",
  write: "server rotates a 3-bit state into the ETag on /favicon.ico (\"a1f3-<state>b\"); 304 on If-None-Match match",
  persist: ["hard refresh", "tab close", "restart"],
  vary: ["user-agent", "ip", "etag"],
  observe: ["same-origin fetch (If-None-Match)", "cache-timing delta on 304 (~18 µs oracle)"],
  capacity: "3 b per rotation × N rotations; 48×48 alpha plane adds 2304 b LSB capacity",
};

const GHOST_SERVER = `// favicon_rebel.js — BSC-001 ETag ghost cookie server
// emitted by: mnf generate BSC-001   ·   REF: Favicon - Counter / Blueprint.txt
const http   = require("http");
const fs     = require("fs");
const path   = require("path");

const PORT = process.env.PORT || 8790;
let STATE  = process.env.MFY_STATE || "000";        // 3-bit ghost state
const ICO  = fs.readFileSync(path.join(__dirname, "favicon.ico"));
const hits = [];

http.createServer((req, res) => {
  if (req.url === "/favicon.ico") {
    const etag = '"a1f3-" + STATE + "b"';
    res.setHeader("ETag", etag);
    res.setHeader("Cache-Control", "no-store");
    if (req.headers["if-none-match"] === etag) return res.writeHead(304).end();
    hits.push({ t: Date.now(), ua: req.headers["user-agent"], ip: req.socket.remoteAddress });
    res.writeHead(200, { "Content-Type": "image/x-icon" });
    return res.end(Buffer.from(ICO));
  }
  if (req.url.startsWith("/state")) {                // write side (fleet / operator)
    const bits = (req.url.split("state=")[1] || "").slice(0, 3);
    if (/^[01]{3}$/.test(bits)) STATE = bits;
    res.setHeader("Content-Type", "application/json");
    return res.end(JSON.stringify({ state: STATE }));
  }
  if (req.url === "/hits") {
    res.setHeader("Content-Type", "application/json");
    return res.end(JSON.stringify(hits.slice(-100)));
  }
  if (req.url.startsWith("/dashboard")) {
    res.setHeader("Content-Type", "text/html");
    return fs.createReadStream(path.join(__dirname, "dashboard", "index.html")).pipe(res);
  }
  res.writeHead(404).end("ghost");
}).listen(PORT, () => console.log("ghost-01 on :" + PORT + " state=" + STATE));
`;

const DASHBOARD = `<!doctype html>
<html><head><meta charset="utf-8"><title>ghost-01 · dashboard</title>
<style>
 body{background:#101517;color:#e9e6d8;font:12px ui-monospace,monospace;padding:24px}
 h1{font-size:14px;letter-spacing:2px;color:#d93628}
 .row{display:flex;gap:24px;margin:16px 0}
 .k{color:#78868a;font-size:10px}.v{font-size:18px}
 table{border-collapse:collapse;width:100%;font-size:11px}
 td,th{border-bottom:1px solid #22302f;padding:4px 8px;text-align:left;color:#c4cdc5}
</style></head><body>
<h1>◈ GHOST-01 · BSC-001 ETag GHOST</h1>
<div class="row"><div><div class="k">STATE</div><div class="v" id="st">—</div></div>
<div><div class="k">HITS</div><div class="v" id="hn">0</div></div>
<div><div class="k">LAST ETag</div><div class="v" id="et">—</div></div></div>
<table><tr><th>t</th><th>ip</th><th>user-agent</th></tr><tbody id="tb"></tbody></table>
<script>
async function poll(){
  const h = await (await fetch("/hits")).json();
  const s = await (await fetch("/state")).json();
  document.getElementById("hn").textContent = h.length;
  document.getElementById("st").textContent = s.state;
  document.getElementById("et").textContent = '"a1f3-' + s.state + 'b"';
  document.getElementById("tb").innerHTML = h.slice(-8).reverse().map(x =>
    "<tr><td>" + new Date(x.t).toISOString().slice(11,19) + "</td><td>" + x.ip + "</td><td>" +
    (x.ua||"").slice(0,60) + "</td></tr>").join("");
}
setInterval(poll, 1500); poll();
</script></body></html>`;

const CADDY = `# TLS in front of the ghost (prod / fly.io)
:443 {
  tls internal
  reverse_proxy 127.0.0.1:8790
}
`;

export function generateFiles(): BundleFileData[] {
  const frames = makeFaviconFrames();
  const bits = embedIcoPayload(frames, "BSC-001 · ETag ghost · 47 b state");
  const ico = icoEncode(frames);
  const card = JSON.stringify({
    artifact: "BSC-001", name: "favicon.ico — ETag ghost cookie", zone: "16",
    capacity: { shannon: 3 + bits, measured: 3 },
    persist: SPEC.persist, spec: SPEC,
  }, null, 2);
  const T = new TextEncoder();
  return [
    { path: "server.js", data: T.encode(GHOST_SERVER), lang: "js" },
    { path: "favicon.ico", data: ico, lang: "bin" },
    { path: "dashboard/index.html", data: T.encode(DASHBOARD), lang: "html" },
    { path: "Caddyfile", data: T.encode(CADDY), lang: "conf" },
    { path: "card.json", data: T.encode(card), lang: "json" },
  ];
}

export const SHELL: Record<string, string[]> = {
  ghost: ["node server.js"],
  static: ["open dashboard/index.html  # preview only — the channel needs the ghost"],
  docker: ["docker build -t mfy/bsc-001-ghost .", "docker run -d -p 8790:8790 mfy/bsc-001-ghost"],
};
