
import type { ArtifactMeta, FileNode } from "@mfy/schema";

export type Category = string;
export type RawArtifact = Omit<ArtifactMeta, "status"> & { status?: "live" | "stub" };

// ── CATEGORIES ───────────────────────────────────────────────────────────────
export const CATS: Category[] = [
  "BROWSER STATE",
  "TRACKING",
  "STEGANOGRAPHY",
  "DOCUMENT",
  "CANARY",
  "HTTP",
  "FINGERPRINT",
  "NETWORK",
  "TEXT",
  "ARCHIVE",
  "MEDIA",
  "SOURCE",
];

// Category sigils — short glyph per category. Rendered in catalog dividers.
export const CAT_SIGIL: Record<Category, string> = {
  "BROWSER STATE": "◈",
  "TRACKING":      "◉",
  "STEGANOGRAPHY": "▣",
  "DOCUMENT":      "▤",
  "CANARY":        "◆",
  "HTTP":          "▣",
  "FINGERPRINT":   "◐",
  "NETWORK":       "◊",
};

// ── ARTIFACT CATALOG (50 entries) ────────────────────────────────────────────
export const ARTIFACTS: RawArtifact[] = [
  // ── BROWSER STATE (10) ──────────────────────────────────────────────────────
  { id:"fav-etag", reg:"BSC-001", name:"favicon.ico", sub:"ETag ghost cookie", cat:"BROWSER STATE", proj:"FFF", zone:"16",
    preview:"ico", vector:"passive", persist:"high", cap:"128 bit", mech:"If-None-Match header",
    files:[
      {n:"server.js",l:"js",id:"etag-srv"},
      {n:"middleware",t:"dir",ch:[{n:"etag.js",l:"js",id:"etag-mw"},{n:"logger.js",l:"js",id:"etag-log"}]},
      {n:"favicon.ico",l:"bin",id:"etag-ico"},
      {n:"dashboard",t:"dir",ch:[{n:"index.html",l:"html",id:"etag-dash"}]},
    ], refs:["Favicon - Counter / Blueprint.txt","Trojan_Horse / OPERATION TROJAN FAVICON.txt"],
    mitigations:["ETag-stripping reverse proxy","Cache-Control: no-store"] },

  { id:"sw-cache", reg:"BSC-002", name:"sw.js", sub:"Cache API write channel", cat:"BROWSER STATE", proj:"BSCA", zone:"16",
    preview:"code", vector:"write", persist:"v.high", cap:"∞", mech:"Cache.put()/match()",
    files:[{n:"sw.js",l:"js",id:"sw-main"},{n:"probe.js",l:"js",id:"sw-probe"},{n:"register.js",l:"js",id:"sw-reg"}],
    refs:["BROWSER STATE CHANNEL ANALYSIS"], mitigations:["SW scope restriction","unregister-on-idle"] },

  { id:"hsts-super", reg:"BSC-003", name:"HSTS beacon", sub:"supercookie write channel", cat:"BROWSER STATE", proj:"BSCA", zone:"16",
    preview:"headers", vector:"passive", persist:"high", cap:"~30 bit", mech:"Strict-Transport-Security",
    files:[{n:"nginx.conf",l:"conf",id:"hsts-nginx"},{n:"probe.html",l:"html",id:"hsts-probe"},{n:"read.js",l:"js",id:"hsts-read"}] },

  { id:"ls-chan", reg:"BSC-004", name:"localStorage", sub:"persistent write channel", cat:"BROWSER STATE", proj:"BSCA", zone:"16",
    preview:"code", vector:"write", persist:"high", cap:"5 MB", mech:"setItem()/getItem()",
    files:[{n:"write.js",l:"js",id:"ls-write"},{n:"read.js",l:"js",id:"ls-read"},{n:"wipe.js",l:"js",id:"ls-wipe"}] },

  { id:"idb-chan", reg:"BSC-005", name:"IndexedDB", sub:"structured data channel", cat:"BROWSER STATE", proj:"BSCA", zone:"16",
    preview:"code", vector:"write", persist:"v.high", cap:"50+ MB", mech:"IDBTransaction",
    files:[{n:"channel.js",l:"js",id:"idb-chan-js"},{n:"schema.js",l:"js",id:"idb-schema"}] },

  { id:"opfs-chan", reg:"BSC-006", name:"OPFS", sub:"origin private file system", cat:"BROWSER STATE", proj:"BSCA", zone:"16",
    preview:"code", vector:"write", persist:"v.high", cap:"∞", mech:"FileSystemFileHandle",
    files:[{n:"opfs.js",l:"js",id:"opfs-js"},{n:"worker.js",l:"js",id:"opfs-worker"}] },

  { id:"sab-chan", reg:"BSC-007", name:"SharedArrayBuffer", sub:"timing side-channel", cat:"BROWSER STATE", proj:"BSCA", zone:"16",
    preview:"code", vector:"passive", persist:"none", cap:"~1 bit/cycle", mech:"Atomics.wait()/notify()",
    files:[{n:"timer.js",l:"js",id:"sab-timer"},{n:"worker.js",l:"js",id:"sab-worker"}] },

  { id:"etag-probe", reg:"BSC-008", name:"ETag probe", sub:"cache fingerprint (read-only)", cat:"BROWSER STATE", proj:"FFF", zone:"16",
    preview:"headers", vector:"passive", persist:"medium", cap:"32–64 bit", mech:"HTTP ETag round-trip",
    files:[{n:"probe.js",l:"js",id:"ep-probe"},{n:"server.js",l:"js",id:"ep-server"}] },

  { id:"bc-chan", reg:"BSC-009", name:"BroadcastChannel", sub:"cross-tab messaging", cat:"BROWSER STATE", proj:"BSCA", zone:"16",
    preview:"code", vector:"write", persist:"session", cap:"postMessage payload", mech:"BroadcastChannel API",
    files:[{n:"channel.js",l:"js",id:"bc-chan"},{n:"listener.js",l:"js",id:"bc-listen"}] },

  { id:"sw-shared", reg:"BSC-010", name:"SharedWorker", sub:"cross-origin shared context", cat:"BROWSER STATE", proj:"BSCA", zone:"16",
    preview:"code", vector:"write", persist:"v.high", cap:"postMessage + port", mech:"SharedWorker port",
    files:[{n:"worker.js",l:"js",id:"sw-shared-js"},{n:"connect.js",l:"js",id:"sw-shared-conn"}] },

  // ── TRACKING (8) ─────────────────────────────────────────────────────────────
  { id:"gif-pixel", reg:"TRK-001", name:".gif pixel", sub:"1×1 tracking beacon", cat:"TRACKING", proj:"GIF", zone:"03",
    preview:"pixel", vector:"passive", persist:"session", cap:"request metadata", mech:"img src / beacon",
    files:[{n:"pixel.py",l:"py",id:"gif-py"},{n:"server.py",l:"py",id:"gif-srv"},{n:"dashboard.html",l:"html",id:"gif-dash"}] },

  { id:"gif-anim", reg:"TRK-002", name:".gif animated", sub:"decoy carrier / tracker", cat:"TRACKING", proj:"GIF", zone:"03",
    preview:"pixel", vector:"passive", persist:"session", cap:"request + referer", mech:"frame timing + headers",
    files:[{n:"gen.py",l:"py",id:"anim-gen"},{n:"embed.py",l:"py",id:"anim-embed"}] },

  { id:"css-beacon", reg:"TRK-003", name:"CSS beacon", sub:"background-image tracker", cat:"TRACKING", proj:"BSCA", zone:"03",
    preview:"code", vector:"passive", persist:"session", cap:"selector match", mech:":visited / url() load",
    files:[{n:"probe.css",l:"css",id:"css-probe"},{n:"server.py",l:"py",id:"css-srv"}] },

  { id:"nav-beacon", reg:"TRK-004", name:"navigator.sendBeacon", sub:"async POST on unload", cat:"TRACKING", proj:"BSCA", zone:"03",
    preview:"code", vector:"write", persist:"session", cap:"64 KB payload", mech:"sendBeacon() API",
    files:[{n:"beacon.js",l:"js",id:"nb-js"},{n:"collect.py",l:"py",id:"nb-collect"}] },

  { id:"ws-beacon", reg:"TRK-005", name:"WebSocket beacon", sub:"bidirectional low-latency tracker", cat:"TRACKING", proj:"BSCA", zone:"03",
    preview:"code", vector:"write", persist:"session", cap:"persistent stream", mech:"WebSocket + ping frames",
    files:[{n:"client.js",l:"js",id:"ws-cli"},{n:"server.js",l:"js",id:"ws-srv"}] },

  { id:"mqtt-track", reg:"TRK-006", name:"MQTT beacon", sub:"pub/sub tracking over MQTT", cat:"TRACKING", proj:"FFF", zone:"03",
    preview:"code", vector:"write", persist:"session", cap:"topic subscriptions", mech:"MQTT publish/subscribe",
    files:[{n:"client.js",l:"js",id:"mqtt-cli"},{n:"broker.py",l:"py",id:"mqtt-broker"}] },

  { id:"res-hints", reg:"TRK-007", name:"Resource Hints", sub:"<link rel=preconnect> beacon", cat:"TRACKING", proj:"BSCA", zone:"03",
    preview:"code", vector:"passive", persist:"session", cap:"DNS lookup + TLS handshake", mech:"preconnect / prefetch",
    files:[{n:"hints.html",l:"html",id:"rh-html"},{n:"probe.js",l:"js",id:"rh-probe"}] },

  { id:"ntp-track", reg:"TRK-008", name:"NTP timing", sub:"clock-skew fingerprint", cat:"TRACKING", proj:"FFF", zone:"03",
    preview:"code", vector:"passive", persist:"high", cap:"~8 entropy bits", mech:"timestamp delta",
    files:[{n:"probe.js",l:"js",id:"ntp-probe"},{n:"server.js",l:"js",id:"ntp-srv"}] },

  // ── STEGANOGRAPHY (10) ───────────────────────────────────────────────────────
  { id:"png-lsb", reg:"STG-001", name:".png LSB", sub:"pixel least-significant-bit channel", cat:"STEGANOGRAPHY", proj:"Stegosaurus", zone:"08",
    preview:"pixel", vector:"write", persist:"high", cap:"~12.5% of pixels", mech:"LSB substitution per channel",
    files:[{n:"embed.ts",l:"ts",id:"png-embed"},{n:"extract.ts",l:"ts",id:"png-extract"},{n:"worker.ts",l:"ts",id:"png-worker"}] },

  { id:"gif-steg", reg:"STG-002", name:".gif stego", sub:"frame-delay covert channel", cat:"STEGANOGRAPHY", proj:"GIF", zone:"08",
    preview:"pixel", vector:"write", persist:"high", cap:"bits per frame delay", mech:"LZW + palette manipulation",
    files:[{n:"engine.py",l:"py",id:"gs-engine"},{n:"parser.py",l:"py",id:"gs-parser"},{n:"chaos.py",l:"py",id:"gs-chaos"}] },

  { id:"woff2-steg", reg:"STG-003", name:".woff2 font", sub:"glyph advance-width channel", cat:"STEGANOGRAPHY", proj:"Stegosaurus", zone:"08",
    preview:"code", vector:"write", persist:"high", cap:"~2 bit/glyph", mech:"hmtx table mutation",
    files:[{n:"font_steg.ts",l:"ts",id:"wf-embed"},{n:"extract.ts",l:"ts",id:"wf-extract"}] },

  { id:"pdf-meta", reg:"STG-004", name:".pdf metadata", sub:"XMP / trailer payload", cat:"STEGANOGRAPHY", proj:"Trojan", zone:"08",
    preview:"code", vector:"write", persist:"high", cap:"arbitrary", mech:"XMP sidecar + PDF stream",
    files:[{n:"inject.py",l:"py",id:"pdf-inject"},{n:"read.py",l:"py",id:"pdf-read"}] },

  { id:"odt-zip", reg:"STG-005", name:".odt ZIP", sub:"archive injection channel", cat:"STEGANOGRAPHY", proj:"Macro", zone:"08",
    preview:"code", vector:"write", persist:"high", cap:"arbitrary", mech:"ZIP extra field / hidden entry",
    files:[{n:"inject_odt.py",l:"py",id:"odt-py"},{n:"extract_odt.py",l:"py",id:"odt-ex"}] },

  { id:"wav-lsb", reg:"STG-006", name:".wav LSB", sub:"audio least-significant-bit", cat:"STEGANOGRAPHY", proj:"Stegosaurus", zone:"08",
    preview:"wave", vector:"write", persist:"high", cap:"~12.5% of samples", mech:"PCM sample LSB",
    files:[{n:"audio_steg.ts",l:"ts",id:"wav-embed"},{n:"extract.ts",l:"ts",id:"wav-ex"}] },

  { id:"webp-lsb", reg:"STG-007", name:".webp LSB", sub:"VP8/VP8L lossless LSB", cat:"STEGANOGRAPHY", proj:"Stegosaurus", zone:"08",
    preview:"pixel", vector:"write", persist:"high", cap:"~12.5% of pixels", mech:"VP8L transform LSB",
    files:[{n:"webp_embed.ts",l:"ts",id:"webp-emb"},{n:"extract.ts",l:"ts",id:"webp-ex"}] },

  { id:"avif-lsb", reg:"STG-008", name:".avif LSB", sub:"AV1 intra-frame LSB", cat:"STEGANOGRAPHY", proj:"Stegosaurus", zone:"08",
    preview:"pixel", vector:"write", persist:"high", cap:"~12.5% of pixels", mech:"AV1 YUV channel LSB",
    files:[{n:"avif_embed.ts",l:"ts",id:"avif-emb"},{n:"extract.ts",l:"ts",id:"avif-ex"}] },

  { id:"bmp-lsb", reg:"STG-009", name:".bmp LSB", sub:"raw pixel buffer LSB", cat:"STEGANOGRAPHY", proj:"Stegosaurus", zone:"08",
    preview:"pixel", vector:"write", persist:"high", cap:"~12.5% of pixels", mech:"BI_RGB pixel array LSB",
    files:[{n:"bmp_embed.ts",l:"ts",id:"bmp-emb"},{n:"extract.ts",l:"ts",id:"bmp-ex"}] },

  { id:"mp3-id3", reg:"STG-010", name:".mp3 ID3", sub:"ID3v2 comment/APIC payload", cat:"STEGANOGRAPHY", proj:"Trojan", zone:"08",
    preview:"wave", vector:"write", persist:"high", cap:"arbitrary", mech:"ID3v2 frame injection",
    files:[{n:"inject.py",l:"py",id:"mp3-inject"},{n:"read.py",l:"py",id:"mp3-read"}] },

  { id:"mp4-meta", reg:"STG-011", name:".mp4 metadata", sub:"mp4 box atom injection", cat:"STEGANOGRAPHY", proj:"Trojan", zone:"08",
    preview:"code", vector:"write", persist:"high", cap:"arbitrary", mech:"udta box + free atom",
    files:[{n:"inject.py",l:"py",id:"mp4-inject"},{n:"read.py",l:"py",id:"mp4-read"}] },

  // ── DOCUMENT TROJAN (8) ──────────────────────────────────────────────────────
  { id:"odt-macro", reg:"DOC-001", name:".odt macro", sub:"LibreOffice Basic payload", cat:"DOCUMENT", proj:"Macro", zone:"11",
    preview:"code", vector:"execute", persist:"v.high", cap:"full shell access", mech:"Shell() + UNO API",
    files:[{n:"Module1.xba",l:"xml",id:"xba-mod"},{n:"manifest.xml",l:"xml",id:"xba-man"},{n:"payload.odt",l:"bin",id:"xba-odt"}] },

  { id:"xba-persist", reg:"DOC-002", name:".xba module", sub:"persistent macro installer", cat:"DOCUMENT", proj:"Macro", zone:"11",
    preview:"code", vector:"write", persist:"v.high", cap:"startup execution", mech:"~/.config/libreoffice/.../Module1.xba",
    files:[{n:"installer.bas",l:"vb",id:"xba-inst"},{n:"beacon.bas",l:"vb",id:"xba-beacon"}] },

  { id:"svg-poly", reg:"DOC-003", name:"SVG polyglot", sub:"XSS + LibreOffice Draw doc", cat:"DOCUMENT", proj:"Favicon-Counter", zone:"11",
    preview:"svg", vector:"execute", persist:"none", cap:"XSS in browser context", mech:"<script> in SVG",
    files:[{n:"payload.svg",l:"xml",id:"svg-pay"},{n:"xss.js",l:"js",id:"svg-xss"}] },

  { id:"docx-ole", reg:"DOC-004", name:".docx OLE", sub:"dropper chain via OLE object", cat:"DOCUMENT", proj:"Trojan", zone:"11",
    preview:"code", vector:"execute", persist:"high", cap:"PE execution", mech:"OLE10Native embedding",
    files:[{n:"dropper.py",l:"py",id:"ole-drop"},{n:"manifest.xml",l:"xml",id:"ole-man"}] },

  { id:"xlsm-c2", reg:"DOC-005", name:".xlsm C2", sub:"spreadsheet command-and-control", cat:"DOCUMENT", proj:"Macro", zone:"11",
    preview:"code", vector:"execute", persist:"medium", cap:"remote shell via cells", mech:"WEBSERVICE() + Shell()",
    files:[{n:"C2Poll.bas",l:"vb",id:"xlsm-bas"},{n:"payload.xlsm",l:"bin",id:"xlsm-bin"}] },

  { id:"html-svg", reg:"DOC-006", name:"HTML SVG", sub:"image + script payload", cat:"DOCUMENT", proj:"Trojan", zone:"11",
    preview:"svg", vector:"execute", persist:"session", cap:"DOM exfil + XSS", mech:"<img src=svg> + onload",
    files:[{n:"host.html",l:"html",id:"hsvg-html"},{n:"payload.svg",l:"xml",id:"hsvg-svg"}] },

  { id:"html-srcset", reg:"DOC-007", name:"HTML srcset", sub:"responsive-image fingerprint", cat:"DOCUMENT", proj:"Trojan", zone:"11",
    preview:"code", vector:"passive", persist:"session", cap:"viewport + DPR", mech:"srcset selection probe",
    files:[{n:"probe.html",l:"html",id:"srcset-html"},{n:"analyze.py",l:"py",id:"srcset-an"}] },

  { id:"html-prefetch", reg:"DOC-008", name:"HTML prefetch", sub:"speculative load tracker", cat:"DOCUMENT", proj:"Trojan", zone:"11",
    preview:"code", vector:"passive", persist:"session", cap:"visited URL set", mech:"<link rel=prefetch>",
    files:[{n:"probe.html",l:"html",id:"pf-html"},{n:"server.js",l:"js",id:"pf-srv"}] },

  // ── CANARY (8) ───────────────────────────────────────────────────────────────
  { id:"url-canary", reg:"CAN-001", name:"URL canary", sub:"click-triggered tracker", cat:"CANARY", proj:"Canary-CC", zone:"07",
    preview:"headers", vector:"passive", persist:"session", cap:"click + IP + UA", mech:"redirect beacon",
    files:[{n:"generate.ts",l:"ts",id:"uc-gen"},{n:"server.ts",l:"ts",id:"uc-srv"},{n:"TokenList.tsx",l:"tsx",id:"uc-ui"}] },

  { id:"dns-canary", reg:"CAN-002", name:"DNS canary", sub:"lookup-triggered detector", cat:"CANARY", proj:"Canary-CC", zone:"07",
    preview:"code", vector:"passive", persist:"session", cap:"DNS resolver + timestamp", mech:"unique subdomain lookup",
    files:[{n:"dns_server.py",l:"py",id:"dc-srv"},{n:"generate.py",l:"py",id:"dc-gen"}] },

  { id:"pdf-canary", reg:"CAN-003", name:".pdf canary", sub:"open-event detector", cat:"CANARY", proj:"Canary-CC", zone:"07",
    preview:"code", vector:"passive", persist:"session", cap:"open + app + IP", mech:"PDF /URI /AA action",
    files:[{n:"inject.py",l:"py",id:"pc-inject"},{n:"serve.py",l:"py",id:"pc-serve"}] },

  { id:"email-canary", reg:"CAN-004", name:"email canary", sub:"read-receipt pixel", cat:"CANARY", proj:"Canary-CC", zone:"07",
    preview:"pixel", vector:"passive", persist:"session", cap:"open + client + IP", mech:"img src in HTML email",
    files:[{n:"compose.py",l:"py",id:"ec-comp"},{n:"pixel.py",l:"py",id:"ec-px"}] },

  { id:"aws-key", reg:"CAN-005", name:"AWS key canary", sub:"fake credentials detector", cat:"CANARY", proj:"Canary-CC", zone:"07",
    preview:"code", vector:"passive", persist:"high", cap:"usage + region + IAM", mech:"CloudTrail + fake keys",
    files:[{n:"gen_keys.py",l:"py",id:"ak-gen"},{n:"trail_watcher.py",l:"py",id:"ak-watch"}] },

  { id:"sql-canary", reg:"CAN-006", name:"SQL canary", sub:"database exfil detector", cat:"CANARY", proj:"Canary-CC", zone:"07",
    preview:"code", vector:"passive", persist:"high", cap:"select + source", mech:"fake row with unique token",
    files:[{n:"seed.sql",l:"conf",id:"sq-seed"},{n:"watcher.py",l:"py",id:"sq-watch"}] },

  { id:"repo-clone", reg:"CAN-007", name:"repo clone canary", sub:"git clone detector", cat:"CANARY", proj:"Canary-CC", zone:"07",
    preview:"code", vector:"passive", persist:"high", cap:"remote + IP", mech:"git config + post-clone hook",
    files:[{n:"hook.sh",l:"conf",id:"rc-hook"},{n:"setup.sh",l:"conf",id:"rc-setup"}] },

  { id:"docx-canary", reg:"CAN-008", name:".docx canary", sub:"open-event detector", cat:"CANARY", proj:"Canary-CC", zone:"07",
    preview:"code", vector:"passive", persist:"session", cap:"open + user + IP", mech:"fieldsLINK + INCLUDEPICTURE",
    files:[{n:"inject.py",l:"py",id:"dcx-inj"},{n:"template.docx",l:"bin",id:"dcx-tpl"}] },

  // ── HTTP (8) ────────────────────────────────────────────────────────────────
  { id:"headers", reg:"HTTP-001", name:"HTTP headers", sub:"CSP / HSTS / ETag / Cookie", cat:"HTTP", proj:"BSCA", zone:"01",
    preview:"headers", vector:"passive", persist:"varies", cap:"metadata exfil", mech:"response header manipulation",
    files:[{n:"nginx.conf",l:"conf",id:"hdr-nginx"},{n:"csp.js",l:"js",id:"hdr-csp"},{n:"analyze.py",l:"py",id:"hdr-an"}] },

  { id:"robots-trap", reg:"HTTP-002", name:"robots.txt", sub:"crawler behavior + trap", cat:"HTTP", proj:"FFF", zone:"01",
    preview:"code", vector:"passive", persist:"none", cap:"crawler fingerprint", mech:"Disallow: honeypot paths",
    files:[{n:"robots.txt",l:"txt",id:"rob-txt"},{n:"trap.js",l:"js",id:"rob-trap"}] },

  { id:"manifest-pwm", reg:"HTTP-003", name:"manifest.json", sub:"PWA config + scope lock", cat:"HTTP", proj:"BSCA", zone:"01",
    preview:"json", vector:"write", persist:"medium", cap:"install vector", mech:"Web App Manifest API",
    files:[{n:"manifest.json",l:"json",id:"mf-json"},{n:"sw.js",l:"js",id:"mf-sw"}] },

  { id:"wellknown", reg:"HTTP-004", name:".well-known", sub:"security / pki-validation", cat:"HTTP", proj:"FFF", zone:"01",
    preview:"code", vector:"passive", persist:"none", cap:"domain validation", mech:"RFC 8615 discovery",
    files:[{n:"security.txt",l:"txt",id:"wk-sec"},{n:"pki-validation",l:"txt",id:"wk-pki"}] },

  { id:"jwt-chan", reg:"HTTP-005", name:"JWT covert channel", sub:"payload-as-covert-channel", cat:"HTTP", proj:"FFF", zone:"01",
    preview:"code", vector:"write", persist:"session", cap:"arbitrary in claims", mech:"custom JWT claims + transport",
    files:[{n:"encode.ts",l:"ts",id:"jwt-enc"},{n:"decode.ts",l:"ts",id:"jwt-dec"}] },

  { id:"csp-report", reg:"HTTP-006", name:"CSP report-uri", sub:"violation beacon collector", cat:"HTTP", proj:"BSCA", zone:"01",
    preview:"headers", vector:"passive", persist:"session", cap:"violation + source", mech:"Content-Security-Policy-Report-Only",
    files:[{n:"policy.js",l:"js",id:"csp-pol"},{n:"collector.py",l:"py",id:"csp-coll"}] },

  { id:"content-type", reg:"HTTP-007", name:"Content-Type sniff", sub:"MIME confusion vector", cat:"HTTP", proj:"FFF", zone:"01",
    preview:"headers", vector:"passive", persist:"none", cap:"browser MIME guess", mech:"X-Content-Type-Options absent",
    files:[{n:"probe.html",l:"html",id:"ct-html"},{n:"analyze.py",l:"py",id:"ct-an"}] },

  { id:"cors-abuse", reg:"HTTP-008", name:"CORS abuse", sub:"credential cross-origin read", cat:"HTTP", proj:"BSCA", zone:"01",
    preview:"headers", vector:"passive", persist:"session", cap:"credential exfil", mech:"Access-Control-Allow-Origin: * + creds",
    files:[{n:"server.js",l:"js",id:"cors-srv"},{n:"probe.html",l:"html",id:"cors-html"}] },

  // ── FINGERPRINT (10) ─────────────────────────────────────────────────────────
  { id:"canvas-fp", reg:"FP-001", name:"canvas 2D", sub:"text rendering hash", cat:"FINGERPRINT", proj:"BSCA", zone:"31",
    preview:"canvas", vector:"passive", persist:"high", cap:"~8 entropy bits", mech:"toDataURL() hash",
    files:[{n:"probe.js",l:"js",id:"cv-probe"},{n:"hash.js",l:"js",id:"cv-hash"},{n:"collect.js",l:"js",id:"cv-coll"}] },

  { id:"webgl-fp", reg:"FP-002", name:"WebGL", sub:"GPU / driver fingerprint", cat:"FINGERPRINT", proj:"BSCA", zone:"31",
    preview:"code", vector:"passive", persist:"high", cap:"~16 entropy bits", mech:"RENDERER + VENDOR strings",
    files:[{n:"webgl_probe.js",l:"js",id:"wg-probe"},{n:"extensions.js",l:"js",id:"wg-ext"}] },

  { id:"audio-fp", reg:"FP-003", name:"audio context", sub:"OfflineAudioContext hash", cat:"FINGERPRINT", proj:"BSCA", zone:"31",
    preview:"wave", vector:"passive", persist:"high", cap:"~8 entropy bits", mech:"oscillator Float32 sum",
    files:[{n:"audio_probe.js",l:"js",id:"au-probe"},{n:"worker.js",l:"js",id:"au-worker"}] },

  { id:"font-fp", reg:"FP-004", name:"font metrics", sub:"character width channel", cat:"FINGERPRINT", proj:"BSCA", zone:"31",
    preview:"code", vector:"passive", persist:"high", cap:"~6 entropy bits", mech:"offsetWidth delta",
    files:[{n:"font_probe.js",l:"js",id:"ft-probe"},{n:"baseline.js",l:"js",id:"ft-base"}] },

  { id:"nav-fp", reg:"FP-005", name:"navigator", sub:"platform / UA / language", cat:"FINGERPRINT", proj:"BSCA", zone:"31",
    preview:"code", vector:"passive", persist:"medium", cap:"~12 entropy bits", mech:"navigator.* properties",
    files:[{n:"nav_probe.js",l:"js",id:"nv-probe"},{n:"parse.js",l:"js",id:"nv-parse"}] },

  { id:"battery-fp", reg:"FP-006", name:"Battery API", sub:"level + charging time", cat:"FINGERPRINT", proj:"BSCA", zone:"31",
    preview:"code", vector:"passive", persist:"session", cap:"~6 entropy bits", mech:"navigator.getBattery()",
    files:[{n:"probe.js",l:"js",id:"bt-probe"}] },

  { id:"sensor-fp", reg:"FP-007", name:"Sensor API", sub:"accelerometer / gyroscope", cat:"FINGERPRINT", proj:"BSCA", zone:"31",
    preview:"wave", vector:"passive", persist:"session", cap:"~8 entropy bits", mech:"DeviceSensorEvent + Sensor API",
    files:[{n:"probe.js",l:"js",id:"sn-probe"},{n:"analyze.js",l:"js",id:"sn-an"}] },

  { id:"pointer-fp", reg:"FP-008", name:"Pointer metrics", sub:"mouse / touch trajectory", cat:"FINGERPRINT", proj:"BSCA", zone:"31",
    preview:"code", vector:"passive", persist:"session", cap:"~10 entropy bits", mech:"pointermove sampling",
    files:[{n:"probe.js",l:"js",id:"pt-probe"}] },

  { id:"timing-fp", reg:"FP-009", name:"Timing API", sub:"performance.now() resolution", cat:"FINGERPRINT", proj:"BSCA", zone:"31",
    preview:"code", vector:"passive", persist:"high", cap:"~4 entropy bits", mech:"performance.now() + Date.now()",
    files:[{n:"probe.js",l:"js",id:"tm-probe"}] },

  { id:"storage-fp", reg:"FP-010", name:"Storage quota", sub:"quota estimation probe", cat:"FINGERPRINT", proj:"BSCA", zone:"31",
    preview:"code", vector:"passive", persist:"high", cap:"~6 entropy bits", mech:"navigator.storage.estimate()",
    files:[{n:"probe.js",l:"js",id:"st-probe"}] },

  // ── NETWORK (8) ──────────────────────────────────────────────────────────────
  { id:"ja3-fp", reg:"NET-001", name:"JA3/JA4", sub:"TLS client fingerprint", cat:"NETWORK", proj:"BSCA", zone:"02",
    preview:"headers", vector:"passive", persist:"high", cap:"~16 entropy bits", mech:"TLS ClientHello hash",
    files:[{n:"nginx_ja3.conf",l:"conf",id:"ja-conf"},{n:"parse_ja3.py",l:"py",id:"ja-py"}] },

  { id:"h2-fp", reg:"NET-002", name:"HTTP/2 SETTINGS", sub:"SETTINGS frame fingerprint", cat:"NETWORK", proj:"BSCA", zone:"02",
    preview:"code", vector:"passive", persist:"high", cap:"~8 entropy bits", mech:"h2 frame parameters",
    files:[{n:"h2_cap.py",l:"py",id:"h2-cap"},{n:"parse.py",l:"py",id:"h2-parse"}] },

  { id:"fav-timing", reg:"NET-003", name:"favicon timing", sub:"cache probe / timing attack", cat:"NETWORK", proj:"FFF", zone:"02",
    preview:"ico", vector:"passive", persist:"none", cap:"cache state bit", mech:"load event timing delta",
    files:[{n:"timing_probe.js",l:"js",id:"ft-probe2"},{n:"probe.html",l:"html",id:"ft-html"}] },

  { id:"webrtc-leak", reg:"NET-004", name:"WebRTC IP leak", sub:"local IP discovery", cat:"NETWORK", proj:"BSCA", zone:"02",
    preview:"code", vector:"passive", persist:"session", cap:"LAN + WAN IP", mech:"RTCPeerConnection ICE candidates",
    files:[{n:"probe.js",l:"js",id:"wr-probe"},{n:"stun.js",l:"js",id:"wr-stun"}] },

  { id:"quic-fp", reg:"NET-005", name:"QUIC fingerprint", sub:"HTTP/3 client fingerprint", cat:"NETWORK", proj:"BSCA", zone:"02",
    preview:"code", vector:"passive", persist:"high", cap:"~12 entropy bits", mech:"QUIC Initial packet parameters",
    files:[{n:"probe.js",l:"js",id:"qu-probe"},{n:"server.py",l:"py",id:"qu-srv"}] },

  { id:"doh-probe", reg:"NET-006", name:"DoH probe", sub:"DNS-over-HTTPS resolver detect", cat:"NETWORK", proj:"FFF", zone:"02",
    preview:"code", vector:"passive", persist:"high", cap:"resolver + DoH provider", mech:"DoH JSON API timing",
    files:[{n:"probe.js",l:"js",id:"doh-probe"},{n:"server.js",l:"js",id:"doh-srv"}] },

  { id:"h3-fp", reg:"NET-007", name:"HTTP/3 fingerprint", sub:"h3 settings + transport params", cat:"NETWORK", proj:"BSCA", zone:"02",
    preview:"code", vector:"passive", persist:"high", cap:"~8 entropy bits", mech:"h3 SETTINGS + QUIC TP",
    files:[{n:"probe.js",l:"js",id:"h3-probe"},{n:"parse.py",l:"py",id:"h3-parse"}] },

  { id:"ntp-net", reg:"NET-008", name:"NTP probe", sub:"clock-skew + latency detect", cat:"NETWORK", proj:"FFF", zone:"02",
    preview:"code", vector:"passive", persist:"high", cap:"clock skew + offset", mech:"NTPv4 packet round-trip",
    files:[{n:"probe.py",l:"py",id:"ntp-net-probe"},{n:"server.py",l:"py",id:"ntp-net-srv"}] },
  // ── TEXT (6) — D-plan: the Stegosaurus Unicode methods, finally housed ────
  { id:"txt-zw", reg:"TXT-001", name:"zero-width", sub:"U+200B/C between cover chars", cat:"TEXT", proj:"STG", zone:"11",
    preview:"text", vector:"write", persist:"v.high", cap:"8 bit / cover char", mech:"ZWSP/ZWNJ runs",
    files:[{n:"encode.ts",l:"ts",id:"zw-enc"},{n:"decode.ts",l:"ts",id:"zw-dec"}], refs:["StegosaurusApp / text.ts"],
    mitigations:["strip U+200B–U+200F on ingest","render-normalize before storage"] },
  { id:"txt-homo", reg:"TXT-002", name:"homoglyph", sub:"Cyrillic/Greek lookalikes", cat:"TEXT", proj:"STG", zone:"11",
    preview:"text", vector:"write", persist:"v.high", cap:"1:1 substitution", mech:"codepoint lookalike map",
    files:[{n:"map.ts",l:"ts",id:"homo-map"},{n:"scan.ts",l:"ts",id:"homo-scan"}] },
  { id:"txt-tag", reg:"TXT-003", name:"tag block", sub:"U+E0000+ invisible metadata", cat:"TEXT", proj:"STG", zone:"11",
    preview:"text", vector:"write", persist:"v.high", cap:"12 bit / tag char", mech:"tag block codepoints",
    files:[{n:"embed.ts",l:"ts",id:"tag-emb"},{n:"strip.ts",l:"ts",id:"tag-strip"}] },
  { id:"txt-conf", reg:"TXT-004", name:"confusable ws", sub:"NBSP/EN-space/EM-space", cat:"TEXT", proj:"STG", zone:"11",
    preview:"text", vector:"write", persist:"v.high", cap:"1 bit / whitespace", mech:"space-type alternation",
    files:[{n:"ws.ts",l:"ts",id:"conf-ws"}] },
  { id:"txt-comb", reg:"TXT-005", name:"combining", sub:"U+0300/0301 overlay", cat:"TEXT", proj:"STG", zone:"11",
    preview:"text", vector:"write", persist:"high", cap:"2 state / base char", mech:"combining diacritic presence",
    files:[{n:"comb.ts",l:"ts",id:"comb-ts"}] },
  { id:"txt-bidi", reg:"TXT-006", name:"bidi override", sub:"U+202A/B/C controls", cat:"TEXT", proj:"STG", zone:"11",
    preview:"text", vector:"execute", persist:"medium", cap:"render-order abuse", mech:"bidi control runs",
    files:[{n:"bidi.ts",l:"ts",id:"bidi-ts"}], refs:["StegosaurusApp / text.ts"] },

  // ── ARCHIVE (4) — D-plan: polyglots and container abuse ────────────────────
  { id:"arc-zip", reg:"ARC-001", name:"ZIP extra field", sub:"arbitrary bytes in 0x5455", cat:"ARCHIVE", proj:"D", zone:"12",
    preview:"hex", vector:"write", persist:"v.high", cap:"unbounded", mech:"extra-field subblocks",
    files:[{n:"inject.py",l:"py",id:"arc-zip-inj"},{n:"walk.py",l:"py",id:"arc-zip-walk"}] },
  { id:"arc-epub", reg:"ARC-002", name:"EPUB zip-in-zip", sub:"nested container channel", cat:"ARCHIVE", proj:"D", zone:"12",
    preview:"hex", vector:"write", persist:"v.high", cap:"unbounded", mech:"nested PK signatures",
    files:[{n:"nest.py",l:"py",id:"arc-epub"}] },
  { id:"arc-tar", reg:"ARC-003", name:"TAR PAX header", sub:"PAX header smuggling", cat:"ARCHIVE", proj:"D", zone:"12",
    preview:"hex", vector:"write", persist:"high", cap:"~1 KB/entry", mech:"pax extended headers",
    files:[{n:"pax.py",l:"py",id:"arc-pax"}] },
  { id:"arc-iso", reg:"ARC-004", name:"ISO 9660", sub:"CD-image hidden track", cat:"ARCHIVE", proj:"D", zone:"12",
    preview:"hex", vector:"write", persist:"v.high", cap:"track-sized", mech:"Joliet/RockRidge dual files",
    files:[{n:"iso.py",l:"py",id:"arc-iso"}] },

  // ── MEDIA (5) — D-plan: metadata channels riding with media ───────────────
  { id:"med-png", reg:"MED-001", name:"PNG text chunks", sub:"tEXt/zTXt/iTXt", cat:"MEDIA", proj:"D", zone:"13",
    preview:"hex", vector:"write", persist:"v.high", cap:"chunk-bounded", mech:"ancillary text chunks",
    files:[{n:"chunks.py",l:"py",id:"med-png-c"}] },
  { id:"med-exif", reg:"MED-002", name:"EXIF UserComment", sub:"EXIF field 0x9286", cat:"MEDIA", proj:"D", zone:"13",
    preview:"headers", vector:"write", persist:"v.high", cap:"~255 B", mech:"EXIF APP1 field",
    files:[{n:"exif.py",l:"py",id:"med-exif"}] },
  { id:"med-id3", reg:"MED-003", name:"MP3 ID3v2", sub:"TXXX user-defined frame", cat:"MEDIA", proj:"D", zone:"13",
    preview:"wave", vector:"write", persist:"v.high", cap:"frame-bounded", mech:"TXXX frames",
    files:[{n:"id3.py",l:"py",id:"med-id3"}] },
  { id:"med-svg", reg:"MED-004", name:"SVG metadata", sub:"RDF-embedded payload", cat:"MEDIA", proj:"D", zone:"13",
    preview:"svg", vector:"write", persist:"v.high", cap:"unbounded", mech:"<metadata> RDF block",
    files:[{n:"rdf.py",l:"py",id:"med-svg-r"}] },
  { id:"med-webp", reg:"MED-005", name:"WebP ICCP", sub:"ICC profile smuggling", cat:"MEDIA", proj:"D", zone:"13",
    preview:"hex", vector:"write", persist:"high", cap:"~16 KB", mech:"ICCP chunk",
    files:[{n:"iccp.py",l:"py",id:"med-iccp"}] },

  // ── SOURCE (5) — D-plan: the code itself as carrier ───────────────────────
  { id:"src-map", reg:"SRC-001", name:"sourcemap", sub:"//# sourceMappingURL=", cat:"SOURCE", proj:"D", zone:"14",
    preview:"code", vector:"write", persist:"medium", cap:"unbounded", mech:"map file sidecar",
    files:[{n:"map.js",l:"js",id:"src-map-js"}] },
  { id:"src-htmlc", reg:"SRC-002", name:"HTML comment", sub:"<!-- … --> storage", cat:"SOURCE", proj:"D", zone:"14",
    preview:"code", vector:"write", persist:"v.high", cap:"unbounded", mech:"comment nodes",
    files:[{n:"cmts.html",l:"html",id:"src-cmt"}] },
  { id:"src-data", reg:"SRC-003", name:"data-* attrs", sub:"semantic smuggling", cat:"SOURCE", proj:"D", zone:"14",
    preview:"code", vector:"write", persist:"high", cap:"attr-bounded", mech:"custom data attributes",
    files:[{n:"attrs.html",l:"html",id:"src-attr"}] },
  { id:"src-cssv", reg:"SRC-004", name:"CSS custom props", sub:"--var exfil", cat:"SOURCE", proj:"D", zone:"14",
    preview:"code", vector:"write", persist:"high", cap:"prop-bounded", mech:"custom property cascade",
    files:[{n:"props.css",l:"css",id:"src-css"}] },
  { id:"src-hooks", reg:"SRC-005", name:"pkg hooks", sub:"postinstall scripts", cat:"SOURCE", proj:"D", zone:"14",
    preview:"code", vector:"execute", persist:"medium", cap:"lifecycle hooks", mech:"npm lifecycle events",
    files:[{n:"hooks.json",l:"json",id:"src-hooks"}],
    mitigations:["audit pre/postinstall","--ignore-scripts"] },

];

// ── INDEX FOR O(1) LOOKUPS ─────────────────────────────────────────────────────
export const ARTIFACT_INDEX = new Map(ARTIFACTS.map(a => [a.id, a]));

export function flattenFiles(nodes: FileNode[] = []): FileNode[] {
  const arr: FileNode[] = [];
  for (const n of nodes) {
    if (n.id) arr.push(n);
    if (n.ch) arr.push(...flattenFiles(n.ch));
  }
  return arr;
}


