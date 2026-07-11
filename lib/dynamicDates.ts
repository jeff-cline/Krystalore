import prisma from '@/lib/db'
import { DYNAMIC_DATE_REGISTRY, REGISTRY_BY_SLUG } from '@/lib/dynamicDatesRegistry'

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
  time?: string         // optional separately-editable time line
  heroImage: string     // optional hero image override (path or uploadthing url)
  socialImage?: string  // og:image for link shares (falls back to heroImage)
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
    time: c.time || '',
    heroImage: c.heroImage || '',
    socialImage: c.socialImage || '',
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

// Field-level merge: a non-empty DB value overrides; anything the admin hasn't set
// falls back to the registry default. So editing one field never blanks the rest.
function mergeRegistry(db: DynamicDate | null, reg?: DynamicDate): DynamicDate | null {
  if (!db && !reg) return null
  if (!db) return reg!
  if (!reg) return db
  const s = (a?: string, b?: string) => (a && a.trim() ? a : (b || ''))
  return {
    slug: db.slug,
    label: db.label || reg.label,
    pageUrl: db.pageUrl || reg.pageUrl,
    title: s(db.title, reg.title),
    description: s(db.description, reg.description),
    date: s(db.date, reg.date),
    time: s(db.time, reg.time),
    heroImage: s(db.heroImage, reg.heroImage),
    socialImage: db.socialImage || reg.socialImage || '',
    cta: db.cta && (db.cta.enabled || db.cta.title || db.cta.link) ? db.cta : reg.cta || db.cta,
    updatedAt: db.updatedAt,
  }
}

export async function getDynamicDate(slug: string): Promise<DynamicDate | null> {
  let db: DynamicDate | null = null
  try {
    const row = await prisma.dashboardItem.findFirst({ where: { type: TYPE, title: slug } })
    db = row ? fromRow(row as any) : null
  } catch { /* DB unavailable — fall back to registry */ }
  return mergeRegistry(db, REGISTRY_BY_SLUG.get(slug))
}

// Every registered page shows up pre-populated; DB overrides replace the default.
export async function listDynamicDates(search?: string): Promise<DynamicDate[]> {
  let dbBySlug = new Map<string, DynamicDate>()
  try {
    const rows = await prisma.dashboardItem.findMany({ where: { type: TYPE }, orderBy: { updatedAt: 'desc' } })
    dbBySlug = new Map(rows.map((r) => { const d = fromRow(r as any); return [d.slug, d] }))
  } catch { /* DB unavailable — show registry only */ }

  const merged: DynamicDate[] = DYNAMIC_DATE_REGISTRY.map((r) => mergeRegistry(dbBySlug.get(r.slug) || null, r) as DynamicDate)
  Array.from(dbBySlug.values()).forEach((d) => { if (!REGISTRY_BY_SLUG.has(d.slug)) merged.push(d) }) // DB-only extras

  const q = (search || '').trim().toLowerCase()
  const items = q ? merged.filter((d) => [d.slug, d.label, d.pageUrl, d.title].join(' ').toLowerCase().includes(q)) : merged
  return items
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
    time: input.time || '',
    heroImage: input.heroImage || '',
    socialImage: input.socialImage || '',
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
