import prisma from '@/lib/db'
import { getCategories as getFeedFlixCategories } from '@/lib/feedflix'

export interface CategoryMappingResult {
  localCategoryId: string
  localCategoryName: string
  feedflixCategoryId: string
  feedflixCategoryName: string
}

/**
 * Get all current mappings with joined data
 */
export async function getCategoryMappings() {
  return prisma.categoryMapping.findMany({
    include: { localCategory: true },
    orderBy: { createdAt: 'asc' },
  })
}

/**
 * Get a lookup map: feedflixCategoryId -> local Category
 */
export async function getFeedFlixToLocalMap() {
  const mappings = await prisma.categoryMapping.findMany({
    include: { localCategory: true },
  })
  const map: Record<string, { id: string; name: string; membershipLevel: string }> = {}
  for (const m of mappings) {
    map[m.feedflixCategoryId] = {
      id: m.localCategory.id,
      name: m.localCategory.name,
      membershipLevel: m.localCategory.membershipLevel,
    }
  }
  return map
}

/**
 * Create or update a single mapping
 */
export async function upsertCategoryMapping(
  localCategoryId: string,
  feedflixCategoryId: string,
  feedflixCategoryName: string
) {
  return prisma.categoryMapping.upsert({
    where: {
      localCategoryId_feedflixCategoryId: {
        localCategoryId,
        feedflixCategoryId,
      },
    },
    update: { feedflixCategoryName },
    create: { localCategoryId, feedflixCategoryId, feedflixCategoryName },
  })
}

/**
 * Delete a mapping
 */
export async function deleteCategoryMapping(id: string) {
  return prisma.categoryMapping.delete({ where: { id } })
}

/**
 * Auto-sync: match FeedFlix categories to local by name.
 * Creates new local categories for unmatched FeedFlix ones.
 * Returns the number of new mappings created.
 */
export async function autoSyncCategories(): Promise<{ created: number; matched: number; total: number }> {
  const [feedflixCategories, localCategories, existingMappings] = await Promise.all([
    getFeedFlixCategories(),
    prisma.category.findMany(),
    prisma.categoryMapping.findMany(),
  ])

  const existingFeedFlixIds = new Set(existingMappings.map(m => m.feedflixCategoryId))
  let created = 0
  let matched = 0

  for (const ff of feedflixCategories) {
    if (existingFeedFlixIds.has(ff.id)) {
      matched++
      continue
    }

    // Try name match (case-insensitive)
    const localMatch = localCategories.find(
      lc => lc.name.toLowerCase() === ff.name.toLowerCase()
    )

    if (localMatch) {
      await upsertCategoryMapping(localMatch.id, ff.id, ff.name)
      matched++
    } else {
      // Create a new local category for this FeedFlix category
      const slug = ff.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
      const existing = await prisma.category.findUnique({ where: { slug } })
      if (existing) {
        await upsertCategoryMapping(existing.id, ff.id, ff.name)
        matched++
      } else {
        const newCat = await prisma.category.create({
          data: {
            name: ff.name,
            slug,
            description: `Videos from FeedFlix: ${ff.name}`,
            sortOrder: ff.sort_order ?? 99,
            membershipLevel: 'FREE',
          },
        })
        await upsertCategoryMapping(newCat.id, ff.id, ff.name)
        created++
      }
    }
  }

  return { created, matched, total: feedflixCategories.length }
}
