# ADDING AN ARTIFACT (stub → live)

The five-file rule: every live artifact generates exactly a small, canonical bundle —
**server · carrier · dashboard · deploy · card** (names may vary; BSC-001: `server.js`,
`favicon.ico`, `dashboard/index.html`, `Caddyfile`, `card.json`).

## 1. The registry entry already exists

Stubs carry full metadata in `packages/artifacts/src/catalog.ts` (`reg`, `cat`, `zone`,
`preview`, `vector`, `persist`, `cap`, `mech`, `files`, `refs`). Nothing to change there
unless the corpus source moved.

## 2. Write the codec (if the carrier lacks one)

`packages/codec/` must stay **isomorphic** — no node APIs. `btoa`/`atob`/`TextEncoder`/
WebCrypto only. Channels in this family use the shared framing:

```
SYNC "MF47" (32 bits) + big-endian length (16 bits) + UTF-8 payload
```

`decodeSyncBits()` (ico.ts) scans for the header, reads the length, returns the payload or
`null`. The detector trusts a verified extraction over statistics — chi² is reported, not
decisive.

## 3. Implement the live module

`packages/artifacts/src/live/<reg>.ts`:

```ts
export const SPEC: ChannelSpec = {
  reg, write, persist: [...], vary: [...], observe: [...], capacity,
};
export function generateFiles(): BundleFileData[] { /* 5 files, deterministic bytes */ }
export const SHELL: Record<"static"|"ghost"|"docker", string[]> = { ... };
```

Determinism is a contract: the trinity check compares bytes across surfaces. No timestamps,
no randomness, no `Date.now()` in file contents.

## 4. Wire the dispatch

In `packages/artifacts/src/index.ts`:

- `import * as xyz from "./live/xyz.js";`
- add to `SPECS` and to the `generate()` dispatch (and flip the reg into the `LIVE` set).

## 5. Wire the detector

`packages/forensic/src/index.ts` — the format branch must: flag on verified extraction
(confidence 5), report `tail χ²` on the *untouched* region (the payload region is biased by
design), set `lsb` plane bits for the heatmap, and `suggestArtifact()` in
`packages/artifacts/src/index.ts` maps magic → reg for JUMP TO ARTIFACT.

## 6. Prove the round trip

```sh
npm run build
npm run mnf -- generate <REG> -o /tmp/t      # prints its own round-trip check
npm run mnf -- analyze /tmp/t/<carrier>      # must flag 5/5 + extract the payload
```

Plus: drop the carrier into the web ANALYZE socket → same verdict (it runs the same code).

## 7. Preview kind

The bench renders `preview` kinds: `ico` (mock browser + live probe when live), `code`,
`headers`, `text`, `hex`, `json`, `svg`, `wave`, `pixel`, `canvas` (fallback: spec card).
Pick the kind in the registry entry; add a renderer in
`apps/web/src/surfaces.tsx → Rendered` only if a new kind needs bespoke chrome.
