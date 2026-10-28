// Builds a self-contained copy of dist/ with relative paths, for hosting the site
// in a sub-folder (the claude.ai preview artifact). Usage: npm run build && node scripts/preview.mjs [outDir]
import { cpSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';

const src = 'dist';
const out = process.argv[2] ?? 'preview';
rmSync(out, { recursive: true, force: true });
cpSync(src, out, { recursive: true });

const walk = (d) => readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : [join(d, f)]));
for (const file of walk(out)) {
  const rel = relative(out, file);
  const depth = rel.split('/').length - 1;
  const up = depth ? '../'.repeat(depth) : '';
  if (file.endsWith('.html')) {
    let s = readFileSync(file, 'utf8');
    // page links "/x/y/" (and "/x/y/#hash") → "<up>x/y/index.html"
    s = s.replace(/href="\/((?:[a-z0-9-]+\/)*)(#[^"]*)?"/g, (_, p, h = '') => `href="${up}${p}index.html${h}"`);
    // remaining root-relative assets: "/img/…", "/assets/…"
    s = s.replace(/(["'(])\/(?=[a-z])/g, `$1${up}`);
    writeFileSync(file, s);
  } else if (file.endsWith('.css')) {
    writeFileSync(file, readFileSync(file, 'utf8').replace(/url\(\//g, 'url(../'));
  }
}
console.log(`preview ready in ${out}/`);
