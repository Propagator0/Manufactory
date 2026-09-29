# MANUFACTORY

Browser artifact forge — one codec, one forensic engine, **three surfaces** (web + api + `mnf`)
that call the *identical* `generate()` / `analyze()` source. Single port, 8787.

Assembly 0.2. Built from `MANUFACTORY-architecture.md` v2 (the D-plan tree is canonical);
catalog data is the 91-artifact registry (Z corpus + the D additions: TEXT / ARCHIVE / MEDIA / SOURCE).

## Quick start

```sh
npm install
npm run build          # web (vite) → api (esbuild) → cli (esbuild)
npm start              # node apps/api/dist/index.js  →  http://localhost:8787
```

Open http://localhost:8787 — the bench warms to **BSC-001** with a live ETag probe already firing.

CLI:

```sh
npm run mnf -- list --cat TEXT
npm run mnf -- show BSC-001
npm run mnf -- generate BSC-001 -o ./out        # 5 files + self round-trip check
npm run mnf -- analyze ./out/favicon.ico        # → FLAG, confidence 5/5, payload extracted
npm run mnf -- serve 8787                       # same app factory as apps/api
```

## The trinity

| surface | what it runs |
|---|---|
| web (React bench) | imports `@mfy/artifacts` directly — in-browser generate + analyze |
| api (Fastify) | same `generate()` / `analyze()` behind `/api/*`, plus the live ghost + evidence chain |
| `mnf` (CLI) | same functions, plus `serve` reusing the api app factory verbatim |

No surface has a special case the others lack. The web GENERATE modal even runs a **trinity
check**: it asks the API for the same artifact and verifies byte-identical output
(`api ico == cli ico bytes: True` in the acceptance run).

## Catalog honesty

**91 artifacts, 12 categories, 3 live** (green LEDs). Live = real codec wired end-to-end:

- **BSC-001** `favicon.ico` — ETag ghost cookie: ico codec writes an alpha-LSB payload
  (sync `MF47` + 16-bit length + UTF-8); the ghost server rotates a 3-bit state into the ETag,
  304s on `If-None-Match`, appends a SHA-256-chained evidence record per hit.
- **STG-001** `report.png` — PNG red-plane LSB, same sync/length framing.
- **TXT-001** `document.txt` — zero-width injection (U+200B/C, 8 bits per cover char);
  proves the contract generalizes beyond binary.

The other 88 are **stub-marked**: registry metadata + corpus sources (file trees, snippet refs,
mitigations) are wired and browseable/editable in the bench; the carrier codec is not.
`docs/ADDING-AN-ARTIFACT.md` is the recipe.

## Acceptance run (2026-09-11)

```
ghost: 200 "a1f3-000b" → If-None-Match → 304 → state=011 → 200 "a1f3-011b"   ✓
evidence chain: GENESIS → 964e08… → dbc989…                                  ✓
mnf analyze out/bsc/favicon.ico  → FLAG α-LSB, 5/5, "BSC-001 · ETag ghost · 47 b state" ✓
mnf analyze out/stg/report.png   → FLAG red-LSB, 5/5, "STG-001 · red-plane LSB · round-trip verified" ✓
mnf analyze out/txt/document.txt → FLAG zero-width, 5/5, "TXT-001 · zero-width · round-trip verified" ✓
/api/analyze (api surface) on CLI-generated ico → same verdict, suggest: BSC-001    ✓
trinity: api zip ico bytes == cli ico bytes                                      ✓
jsdom render: 91 rows, probe, tree, editor, modals, palette, evidence — 0 console errors ✓
```

## Bench keymap

`j/k` catalog · `⏎` open · `V` cycle RENDERED/SOURCE/HEX/STRUCTURE/ENTROPY ·
`⌘K` palette · `G` generate · `A` analyze · `E` evidence · `?` help · `ESC` close

## Repo layout

```
packages/
  schema/      zod types — ArtifactMeta, ChannelSpec (5 questions), Report, Evidence, Bundle
  codec/       isomorphic (browser+node): ico / png / zero-width channels, zip, crc, b64
  forensic/    isomorphic detector arsenal — magic, sync-scans, chi², trailing, entropy, …
  artifacts/   THE CATALOG (91) + generate()/analyze() + live/{bsc-001,stg-001,txt-001}.ts
  design/      tokens (see apps/web/src/styles.css for the working bench chrome)
apps/
  api/         Fastify — /api/*, /ghost/* (live BSC-001), serves the web build
  web/         React + Vite bench
  cli/         mnf
```
