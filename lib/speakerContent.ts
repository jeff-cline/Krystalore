import prisma from '@/lib/db'
import { speakerFeatures, type SpeakerFeature } from '@/data/speaker-features'
import { speakerVideos, type SpeakerVideoCategory } from '@/data/speaker-videos'
import { onStagePhotos, type StagePhoto } from '@/data/speaker-stage'

/**
 * Speaker page content store — a small CMS for everything on /speaker that
 * Krystalore needs to edit herself:
 *
 *   • Featured Appearances  (shows / press, with any asset type)
 *   • Video categories      (Resilience & Reinvention, Wellness &
 *                            Empowerment, Story & Interviews, …)
 *   • On Stage              (the photo grid)
 *
 * Persisted in the existing DashboardItem table (type='speaker-content',
 * title='speaker', content=JSON) exactly like the dynamic-dates store, so NO
 * database migration is required.
 *
 * Falls back to the code defaults in /data whenever a section has never been
 * saved or the database is unreachable — the page can never render empty.
 */

export type SpeakerContent = {
  features: SpeakerFeature[]
  videoCategories: SpeakerVideoCategory[]
  onStage: StagePhoto[]
  updatedAt?: string
}

const TYPE = 'speaker-content'
const KEY = 'speaker'

export function defaultSpeakerContent(): SpeakerContent {
  return {
    features: speakerFeatures,
    videoCategories: speakerVideos,
    onStage: onStagePhotos,
  }
}

/** Only replace a section when the saved value is a non-empty array. */
function pick<T>(saved: unknown, fallback: T[]): T[] {
  return Array.isArray(saved) && saved.length > 0 ? (saved as T[]) : fallback
}

// DashboardItem requires a userId — attach the row to a system admin.
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

export async function getSpeakerContent(): Promise<SpeakerContent> {
  const d = defaultSpeakerContent()
  try {
    const row = await prisma.dashboardItem.findFirst({ where: { type: TYPE, title: KEY } })
    if (!row) return d
    const c = (row.content && typeof row.content === 'object' ? row.content : {}) as Record<string, any>
    return {
      features: pick<SpeakerFeature>(c.features, d.features),
      videoCategories: pick<SpeakerVideoCategory>(c.videoCategories, d.videoCategories),
      onStage: pick<StagePhoto>(c.onStage, d.onStage),
      updatedAt: row.updatedAt ? new Date(row.updatedAt).toISOString() : undefined,
    }
  } catch {
    // DB unavailable — render the built-in defaults rather than an empty page.
    return d
  }
}

export async function saveSpeakerContent(input: Partial<SpeakerContent>): Promise<SpeakerContent | null> {
  const current = await getSpeakerContent()
  const content = {
    features: Array.isArray(input.features) ? input.features : current.features,
    videoCategories: Array.isArray(input.videoCategories) ? input.videoCategories : current.videoCategories,
    onStage: Array.isArray(input.onStage) ? input.onStage : current.onStage,
  }
  try {
    const existing = await prisma.dashboardItem.findFirst({ where: { type: TYPE, title: KEY }, select: { id: true } })
    if (existing) {
      const row = await prisma.dashboardItem.update({ where: { id: existing.id }, data: { content } })
      return { ...content, updatedAt: new Date(row.updatedAt).toISOString() }
    }
    const userId = await systemUserId()
    if (!userId) return null
    const row = await prisma.dashboardItem.create({ data: { type: TYPE, title: KEY, content, userId } })
    return { ...content, updatedAt: new Date(row.updatedAt).toISOString() }
  } catch {
    return null
  }
}

/** Delete the saved row so the page reverts to the code defaults. */
export async function resetSpeakerContent(): Promise<boolean> {
  try {
    await prisma.dashboardItem.deleteMany({ where: { type: TYPE, title: KEY } })
    return true
  } catch {
    return false
  }
}
