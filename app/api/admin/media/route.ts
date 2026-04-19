import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/db'
import { getSession } from '@/lib/auth'
import fs from 'fs'
import path from 'path'

export async function GET(req: NextRequest) {
  try {
    const session = await getSession()
    if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const folder = req.nextUrl.searchParams.get('folder')
    const type = req.nextUrl.searchParams.get('type')

    const where: any = {}
    if (folder) where.folder = folder
    if (type) where.type = type

    const items = await prisma.mediaItem.findMany({ where, orderBy: { createdAt: 'desc' }, take: 200 })

    // If no items yet, scan the filesystem to seed
    if (items.length === 0) {
      const seeded = await seedMediaLibrary()
      return NextResponse.json(seeded)
    }

    return NextResponse.json(items)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

async function seedMediaLibrary() {
  const publicDir = path.join(process.cwd(), 'public', 'images')
  const items: any[] = []

  function scanDir(dir: string, folder: string) {
    try {
      const entries = fs.readdirSync(dir)
      for (const entry of entries) {
        const fullPath = path.join(dir, entry)
        const stat = fs.statSync(fullPath)
        if (stat.isDirectory()) {
          scanDir(fullPath, entry)
        } else if (/\.(jpg|jpeg|png|webp|gif|svg|mp4|webm)$/i.test(entry)) {
          const ext = path.extname(entry).toLowerCase()
          const type = ['.mp4', '.webm'].includes(ext) ? 'video' : 'image'
          const url = '/images/' + path.relative(publicDir, fullPath).replace(/\\/g, '/')
          items.push({ url, name: entry, type, folder, size: stat.size })
        }
      }
    } catch {}
  }

  scanDir(publicDir, 'general')

  // Bulk create
  for (const item of items) {
    await prisma.mediaItem.upsert({
      where: { id: item.url }, // Won't match, but we need unique
      update: {},
      create: item,
    }).catch(() => {
      // Ignore dupes
      prisma.mediaItem.create({ data: item }).catch(() => {})
    })
  }

  return items.slice(0, 200)
}

export async function POST(req: NextRequest) {
  try {
    const session = await getSession()
    if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    const role = (session.user as any).role
    if (!['GOD', 'ADMIN'].includes(role)) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

    // Seed from filesystem
    const publicDir = path.join(process.cwd(), 'public', 'images')
    const items: any[] = []

    function scanDir(dir: string, folder: string) {
      try {
        const entries = fs.readdirSync(dir)
        for (const entry of entries) {
          const fullPath = path.join(dir, entry)
          const stat = fs.statSync(fullPath)
          if (stat.isDirectory()) {
            scanDir(fullPath, entry)
          } else if (/\.(jpg|jpeg|png|webp|gif|svg|mp4|webm)$/i.test(entry)) {
            const ext = path.extname(entry).toLowerCase()
            const type = ['.mp4', '.webm'].includes(ext) ? 'video' : 'image'
            const url = '/images/' + path.relative(publicDir, fullPath).replace(/\\/g, '/')
            items.push({ url, name: entry, type, folder, size: stat.size })
          }
        }
      } catch {}
    }

    scanDir(publicDir, 'general')

    let created = 0
    for (const item of items) {
      try {
        await prisma.mediaItem.create({ data: item })
        created++
      } catch {} // Skip dupes
    }

    return NextResponse.json({ seeded: created, total: items.length })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
