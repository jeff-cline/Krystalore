#!/usr/bin/env node
import { readdir, stat, writeFile } from 'fs/promises'
import { join, relative, sep } from 'path'

const ROOT = process.cwd()
const IMAGES_DIR = join(ROOT, 'public', 'images')
const OUT_FILE = join(ROOT, 'public', 'images-manifest.json')

const IMG_EXT = new Set(['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg', '.avif'])
const SKIP_DIRS = new Set(['node_modules', '.git', '.next'])

async function walk(dir, acc = []) {
  let entries
  try {
    entries = await readdir(dir, { withFileTypes: true })
  } catch {
    return acc
  }
  for (const e of entries) {
    if (e.name.startsWith('.')) continue
    if (SKIP_DIRS.has(e.name)) continue
    const full = join(dir, e.name)
    if (e.isDirectory()) {
      await walk(full, acc)
    } else if (e.isFile()) {
      const dot = e.name.lastIndexOf('.')
      const ext = dot >= 0 ? e.name.slice(dot).toLowerCase() : ''
      if (!IMG_EXT.has(ext)) continue
      const rel = relative(join(ROOT, 'public'), full).split(sep).join('/')
      let size = 0
      try { size = (await stat(full)).size } catch {}
      acc.push({ url: '/' + rel, name: e.name, folder: rel.split('/').slice(0, -1).join('/'), size, ext: ext.slice(1) })
    }
  }
  return acc
}

const items = await walk(IMAGES_DIR)
items.sort((a, b) => a.url.localeCompare(b.url))
await writeFile(OUT_FILE, JSON.stringify({ generatedAt: new Date().toISOString(), count: items.length, items }, null, 0))
console.log(`[images-manifest] wrote ${items.length} images → /public/images-manifest.json`)
