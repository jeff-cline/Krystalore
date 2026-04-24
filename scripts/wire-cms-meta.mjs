#!/usr/bin/env node
/**
 * Codemod: convert `export const metadata = { ... }` in app/<slug>/layout.tsx files
 * into a `defaults` const + `generateMetadata()` that calls getCmsMeta(livePath, defaults).
 *
 * Idempotent: skips files already wired (detected by `from '@/lib/cms-meta'`).
 */
import { promises as fs } from 'fs';
import path from 'path';

const APP_DIR = path.join(process.cwd(), 'app');

async function* walkLayouts(dir) {
  let entries;
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const name = entry.name;
    if (name.startsWith('_') || name.startsWith('.') || name.startsWith('[')) continue;
    const sub = path.join(dir, name);
    const layoutPath = path.join(sub, 'layout.tsx');
    try {
      await fs.access(layoutPath);
      yield layoutPath;
    } catch {}
    yield* walkLayouts(sub);
  }
}

function livePathFor(layoutPath) {
  const rel = path.relative(APP_DIR, layoutPath).replace(/\\/g, '/');
  // e.g. "podcasts/layout.tsx" → "/podcasts"; "auth/login/layout.tsx" → "/auth/login"
  const dir = rel.replace(/\/layout\.tsx$/, '');
  if (!dir) return '/';
  // Strip route groups
  const parts = dir.split('/').filter((p) => !(p.startsWith('(') && p.endsWith(')')));
  return '/' + parts.join('/');
}

async function processFile(layoutPath) {
  const src = await fs.readFile(layoutPath, 'utf8');
  if (src.includes("from '@/lib/cms-meta'") || src.includes('from "@/lib/cms-meta"')) {
    return { skipped: 'already-wired' };
  }
  if (!/export\s+const\s+metadata\s*[:=]/.test(src)) {
    return { skipped: 'no-metadata' };
  }
  if (/export\s+async\s+function\s+generateMetadata/.test(src)) {
    return { skipped: 'has-generateMetadata' };
  }

  const livePath = livePathFor(layoutPath);

  // Rename "export const metadata" → "const defaults"
  let out = src.replace(/export\s+const\s+metadata(\s*:\s*Metadata)?\s*=/, 'const defaults: Metadata =');

  // Add import if missing
  if (!out.includes("from '@/lib/cms-meta'")) {
    // Add after the first existing import, or at top
    const importInsert = `import { getCmsMeta } from '@/lib/cms-meta';\n`;
    if (/^import\s/m.test(out)) {
      out = out.replace(/(^import[^\n]*\n)/, `$1${importInsert}`);
    } else {
      out = importInsert + out;
    }
  }

  // Make sure `import type { Metadata } from 'next'` exists
  if (!/from\s+['"]next['"]/.test(out) || !/Metadata/.test(out.split('\n').slice(0, 10).join('\n'))) {
    if (!/import\s+type\s*\{\s*Metadata\s*\}\s+from\s+['"]next['"]/.test(out)) {
      out = `import type { Metadata } from 'next';\n` + out;
    }
  }

  // Append generateMetadata before the default export if possible, else at end
  const gm = `\nexport async function generateMetadata(): Promise<Metadata> {\n  return getCmsMeta('${livePath}', defaults);\n}\n`;

  if (/export\s+default\s+function/.test(out)) {
    out = out.replace(/(export\s+default\s+function)/, `${gm}\n$1`);
  } else {
    out = out + gm;
  }

  await fs.writeFile(layoutPath, out, 'utf8');
  return { wired: livePath };
}

async function main() {
  const files = [];
  for await (const f of walkLayouts(APP_DIR)) files.push(f);

  let wired = 0;
  let skipped = 0;
  for (const f of files) {
    const res = await processFile(f);
    if (res.wired) {
      wired++;
      console.log(`  wired  ${path.relative(process.cwd(), f)} → ${res.wired}`);
    } else if (res.skipped) {
      skipped++;
    }
  }
  console.log(`\nDone. Wired ${wired}, skipped ${skipped}.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
