import { build } from "esbuild";
import { cp, mkdir, rm } from "node:fs/promises";

const out = "dist";
await rm(out, { recursive: true, force: true });
await mkdir(`${out}/vendor`, { recursive: true });
await cp("public", out, { recursive: true });
await cp(
  "node_modules/pdfjs-dist/build/pdf.worker.min.mjs",
  `${out}/vendor/pdf.worker.min.mjs`,
);
await cp("node_modules/pdfjs-dist/LICENSE", `${out}/vendor/pdfjs-LICENSE`);
await cp("LICENSE", `${out}/LICENSE`);
await cp("LICENSES", `${out}/LICENSES`, { recursive: true });
await build({
  entryPoints: ["src/main.js"],
  outdir: out,
  bundle: true,
  format: "esm",
  splitting: true,
  chunkNames: "chunks/[name]-[hash]",
  target: "es2022",
  sourcemap: true,
  minify: false,
  logLevel: "info",
});
