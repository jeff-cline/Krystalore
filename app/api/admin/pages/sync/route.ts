import { NextResponse } from 'next/server'
import prisma from '@/lib/db'
import { getSession } from '@/lib/auth'
import { promises as fs } from 'fs'
import path from 'path'

const APP_DIR = path.join(process.cwd(), 'app')

const EXCLUDE_TOP_LEVEL = new Set([
  'api',
  'admin',
  'auth',
  'dashboard',
  'avatars',
  'images',
  'logos',
  'p',
  'co-branded-container',
])

function toSlug(livePath: string): string {
  if (livePath === '/') return 'home'
  return livePath
    .replace(/^\/+/, '')
    .replace(/\/+/g, '-')
    .replace(/[^a-z0-9-]/gi, '-')
    .toLowerCase()
}

function toTitle(livePath: string): string {
  if (livePath === '/') return 'Home'
  const last = livePath.split('/').filter(Boolean).pop() || 'Page'
  return last
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

async function* walkPages(dir: string, urlParts: string[] = []): AsyncGenerator<string> {
  let entries
  try {
    entries = await fs.readdir(dir, { withFileTypes: true })
  } catch {
    return
  }

  const hasPage = entries.some((e) => e.isFile() && e.name === 'page.tsx')
  if (hasPage) {
    const livePath = '/' + urlParts.join('/')
    yield livePath.replace(/\/+/g, '/')
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) continue
    const name = entry.name
    if (name.startsWith('_') || name.startsWith('.')) continue
    // skip dynamic segments like [id] — can't seed without a real value
    if (name.startsWith('[')) continue
    // skip route groups in URL (keep walking, don't add to path)
    if (name.startsWith('(') && name.endsWith(')')) {
      yield* walkPages(path.join(dir, name), urlParts)
      continue
    }
    if (urlParts.length === 0 && EXCLUDE_TOP_LEVEL.has(name)) continue
    yield* walkPages(path.join(dir, name), [...urlParts, name])
  }
}

export async function POST() {
  try {
    const session = await getSession()
    if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    const role = (session.user as any).role
    if (!['GOD', 'ADMIN'].includes(role)) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

    const discovered: string[] = []
    for await (const livePath of walkPages(APP_DIR)) {
      discovered.push(livePath === '' ? '/' : livePath)
    }

    const livePaths = Array.from(new Set(discovered.length ? discovered : ['/']))

    let created = 0
    let updated = 0

    for (const livePath of livePaths) {
      const slug = toSlug(livePath)
      const title = toTitle(livePath)
      const content = JSON.stringify({ type: 'nextjs-page', livePath })

      const existing = await prisma.cmsPage.findUnique({ where: { slug } })
      if (existing) {
        // Only refresh livePath marker if it's a nextjs-page or empty content.
        // Don't overwrite hand-edited CMS pages.
        let isNextjs = false
        try {
          const d = JSON.parse(existing.content || '{}')
          isNextjs = d?.type === 'nextjs-page'
        } catch {}
        if (isNextjs || !existing.content) {
          await prisma.cmsPage.update({
            where: { slug },
            data: { content, title: existing.title || title, isPublished: true },
          })
          updated++
        }
      } else {
        await prisma.cmsPage.create({
          data: {
            title,
            slug,
            content,
            seoTitle: null,
            seoDescription: null,
            coverImage: null,
            isPublished: true,
            isTemplate: false,
            authorId: (session.user as any).id || null,
          },
        })
        created++
      }
    }

    return NextResponse.json({
      ok: true,
      discovered: livePaths.length,
      created,
      updated,
      livePaths,
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
