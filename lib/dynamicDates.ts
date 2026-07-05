import prisma from '@/lib/db'

// Dynamic Dates store — a lightweight CMS for editable dates/titles/CTAs/hero images
// across pages. Persisted in the existing DashboardItem table (type='dynamic-date',
// title=slug, content=JSON) so NO database migration is required.

export type DynamicDateCTA = {
  enabled: boolean
  title: string
  link: string
  color: string // hex
}

export type DynamicDate = {
  slug: string          // unique key (also used in <DynamicDate slug=…/>)
  label: string         // human-friendly name shown in the admin list
  pageUrl: string       // where this dynamic date lives, e.g. /vision-board
  title: string         // H2 title
  description: string    // supporting copy under the title
  date: string          // the date text (kept as typed, so styling/format is preserved)
  heroImage: string     // optional hero image override (path or uploadthing url)
  cta: DynamicDateCTA
  updatedAt?: string
}

const TYPE = 'dynamic-date'

export function emptyCta(): DynamicDateCTA {
  return { enabled: false, title: '', link: '', color: '#E8A849' }
}

function fromRow(row: { title: string; content: unknown; updatedAt?: Date }): DynamicDate {
  const c = (row.content && typeof row.content === 'object' ? row.content : {}) as Record<string, any>
  return {
    slug: row.title,
    label: c.label || row.title,
    pageUrl: c.pageUrl || '',
    title: c.title || '',
    description: c.description || '',
    date: c.date || '',
    heroImage: c.heroImage || '',
    cta: { ...emptyCta(), ...(c.cta || {}) },
    updatedAt: row.updatedAt ? new Date(row.updatedAt).toISOString() : undefined,
  }
}

// DashboardItem requires a userId — attach dynamic-date rows to a system admin.
async function systemUserId(): Promise<string | null> {
  try {
    const u =
      (await prisma.user.findFirst({ where: { role: { in: ['GOD', 'ADMIN'] as any } }, select: { id: true } })) ||
      (await prisma.user.findFirst({ select: { id: true } }))
    return u?.id ?? null
  } catch {
    return null
  }
}

export async function getDynamicDate(slug: string): Promise<DynamicDate | null> {
  try {
    const row = await prisma.dashboardItem.findFirst({ where: { type: TYPE, title: slug } })
    return row ? fromRow(row as any) : null
  } catch {
    return null
  }
}

export async function listDynamicDates(search?: string): Promise<DynamicDate[]> {
  try {
    const rows = await prisma.dashboardItem.findMany({ where: { type: TYPE }, orderBy: { updatedAt: 'desc' } })
    let items = rows.map((r) => fromRow(r as any))
    const q = (search || '').trim().toLowerCase()
    if (q) items = items.filter((d) => [d.slug, d.label, d.pageUrl, d.title].join(' ').toLowerCase().includes(q))
    return items
  } catch {
    return []
  }
}

export async function upsertDynamicDate(input: DynamicDate): Promise<DynamicDate | null> {
  const slug = String(input.slug || '').trim().toLowerCase().replace(/[^a-z0-9-]/g, '-')
  if (!slug) return null
  const content = {
    label: input.label || slug,
    pageUrl: input.pageUrl || '',
    title: input.title || '',
    description: input.description || '',
    date: input.date || '',
    heroImage: input.heroImage || '',
    cta: { ...emptyCta(), ...(input.cta || {}) },
  }
  try {
    const existing = await prisma.dashboardItem.findFirst({ where: { type: TYPE, title: slug }, select: { id: true } })
    if (existing) {
      const row = await prisma.dashboardItem.update({ where: { id: existing.id }, data: { content } })
      return fromRow(row as any)
    }
    const userId = await systemUserId()
    if (!userId) return null
    const row = await prisma.dashboardItem.create({ data: { type: TYPE, title: slug, content, userId } })
    return fromRow(row as any)
  } catch {
    return null
  }
}

export async function deleteDynamicDate(slug: string): Promise<boolean> {
  try {
    await prisma.dashboardItem.deleteMany({ where: { type: TYPE, title: slug } })
    return true
  } catch {
    return false
  }
}
