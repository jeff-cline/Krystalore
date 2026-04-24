import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/db'
import { getSession } from '@/lib/auth'

export async function GET(_req: NextRequest, { params }: { params: { slug: string } }) {
  try {
    const session = await getSession()
    if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    const role = (session.user as any).role
    if (!['GOD', 'ADMIN'].includes(role)) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

    const page = await prisma.cmsPage.findUnique({ where: { slug: params.slug } })
    if (!page) return NextResponse.json({ error: 'Not found' }, { status: 404 })
    return NextResponse.json(page)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

/**
 * Patch only the block-overrides portion of a CmsPage. Preserves the rest
 * of the content JSON (e.g. type='nextjs-page', livePath).
 */
export async function PATCH(req: NextRequest, { params }: { params: { slug: string } }) {
  try {
    const session = await getSession()
    if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    const role = (session.user as any).role
    if (!['GOD', 'ADMIN'].includes(role)) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

    const body = await req.json().catch(() => ({}))
    const blocks = body?.blocks
    if (!blocks || typeof blocks !== 'object') {
      return NextResponse.json({ error: 'blocks required' }, { status: 400 })
    }

    const page = await prisma.cmsPage.findUnique({ where: { slug: params.slug } })
    if (!page) return NextResponse.json({ error: 'Not found' }, { status: 404 })

    let existing: any = {}
    try {
      existing = JSON.parse(page.content || '{}')
    } catch {}

    const updated = {
      ...existing,
      blocks: { ...(existing.blocks || {}), ...blocks },
    }

    const saved = await prisma.cmsPage.update({
      where: { slug: params.slug },
      data: { content: JSON.stringify(updated) },
    })

    return NextResponse.json(saved)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
