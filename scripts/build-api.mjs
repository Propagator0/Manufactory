import { build } from "esbuild";
await build({
  entryPoints: ["apps/api/src/index.ts"],
  bundle: true,
  platform: "node",
  target: "node20",
  format: "esm",
  banner: { js: 'import { createRequire as __cr } from "node:module"; const require = __cr(import.meta.url);' },
  outdir: "apps/api/dist",
  sourcemap: "inline",
  logLevel: "warning",
});
console.log("built apps/api/dist/index.js");
