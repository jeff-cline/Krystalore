import prisma from '@/lib/db'

const LEVEL_ORDER = ['FREE', 'BASIC', 'PREMIUM', 'VIP']

export function hasBasicAccess(userLevel: string, requiredLevel: string): boolean {
  return LEVEL_ORDER.indexOf(userLevel) >= LEVEL_ORDER.indexOf(requiredLevel)
}

export async function getUserCategoryAccess(userId: string): Promise<{
  [categoryId: string]: boolean
}> {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      permissionOverrides: {
        include: {
          permissionSet: {
            include: {
              categories: true,
            },
          },
        },
      },
    },
  })

  if (!user) return {}

  // Get all categories
  const categories = await prisma.category.findMany({
    include: {
      permissionSets: {
        where: {
          membershipLevel: user.membershipLevel,
        },
      },
    },
  })

  const access: { [categoryId: string]: boolean } = {}

  categories.forEach((category) => {
    // Check if user has explicit override for this category
    const override = user.permissionOverrides.find((o) =>
      o.permissionSet.categories.some((c) => c.id === category.id)
    )

    if (override) {
      // Use explicit override
      access[category.id] = override.hasAccess
    } else {
      // Use default membership level access
      access[category.id] = hasBasicAccess(user.membershipLevel, category.membershipLevel)
    }
  })

  return access
}

export async function filterCategoriesForUser<T extends { id: string; name: string; membershipLevel: string }>(
  userId: string,
  categories: T[]
): Promise<Array<T & { hasAccess: boolean }>> {
  const userAccess = await getUserCategoryAccess(userId)
  
  return categories.map((category) => ({
    ...category,
    hasAccess: userAccess[category.id] || false,
  }))
}

export async function filterVideosForUser<T extends {
  id: string
  categoryId: string | null
  membershipLevel: string
}>(
  userId: string, 
  videos: T[]
): Promise<Array<T & { hasAccess: boolean }>> {
  const userAccess = await getUserCategoryAccess(userId)
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { membershipLevel: true },
  })

  if (!user) {
    return videos.map(video => ({ ...video, hasAccess: false }))
  }

  return videos.map((video) => {
    let hasAccess = false

    if (video.categoryId) {
      // Use category-based permissions
      hasAccess = userAccess[video.categoryId] || false
    } else {
      // Fall back to basic membership level check
      hasAccess = hasBasicAccess(user.membershipLevel, video.membershipLevel)
    }

    return {
      ...video,
      hasAccess,
    }
  })
}