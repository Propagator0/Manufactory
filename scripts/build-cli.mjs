import { build } from "esbuild";
await build({
  entryPoints: ["apps/cli/src/mnf.ts"],
  bundle: true,
  platform: "node",
  target: "node20",
  format: "esm",
  banner: {
    js: '#!/usr/bin/env node\nimport { createRequire as __cr } from "node:module"; const require = __cr(import.meta.url);',
  },
  outdir: "apps/cli/dist",
  sourcemap: "inline",
  logLevel: "warning",
});
console.log("built apps/cli/dist/mnf.js");
