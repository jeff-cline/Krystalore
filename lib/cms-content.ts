import prisma from '@/lib/db'

export type BlockOverrides = Record<string, { text?: string; src?: string; alt?: string; href?: string }>

function pathToSlug(livePath: string): string {
  if (livePath === '/') return 'home'
  return livePath.replace(/^\/+/, '').replace(/\/+/g, '-').toLowerCase()
}

/**
 * Fetch the override map for a page by its live path. Returns {} if the page
 * row does not exist, is unpublished, or content cannot be parsed.
 *
 * Override map shape:
 *   {
 *     "hero-title": { text: "New headline" },
 *     "hero-image": { src: "/images/new.png", alt: "..." },
 *     "cta-button": { text: "Get started", href: "/signup" },
 *   }
 */
export async function getPageOverrides(livePath: string): Promise<BlockOverrides> {
  const slug = pathToSlug(livePath)
  try {
    const page = await prisma.cmsPage.findUnique({ where: { slug } })
    if (!page || !page.isPublished) return {}
    const data = JSON.parse(page.content || '{}')
    if (data && typeof data === 'object' && data.blocks && typeof data.blocks === 'object') {
      return data.blocks as BlockOverrides
    }
    return {}
  } catch {
    return {}
  }
}

/**
 * Returns just the override for a single block — convenience for templates
 * that resolve overrides per-component server-side before rendering.
 */
export function pickBlock(overrides: BlockOverrides, blockId: string) {
  return overrides[blockId] || {}
}
