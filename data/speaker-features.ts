/**
 * Featured appearances / press for the /speaker page.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * HOW TO ADD A FEATURE
 * ─────────────────────────────────────────────────────────────────────────
 * Copy one of the blocks in `speakerFeatures` below and edit it. The only
 * required fields are: slug, title, description, image, asset.
 *
 * `asset` is what opens when someone clicks the marketing image or the
 * "Watch Now" button. Every supported asset type:
 *
 *   { kind: 'youtube', id: 'LBXH4_Lk48s' }              → plays inline
 *   { kind: 'vimeo',   id: '123456789' }                → plays inline
 *   { kind: 'video',   url: '/videos/clip.mp4' }        → plays inline
 *   { kind: 'pdf',     url: '/pdfs/one-sheet.pdf' }     → opens in a viewer
 *   { kind: 'image',   url: '/images/press/shot.jpg' }  → opens full-size
 *   { kind: 'embed',   url: 'https://…' }               → any iframe-able page
 *   { kind: 'link',    url: 'https://…' }               → opens in a new tab
 *
 * `extras` adds more clickable assets to the same card (a PDF one-sheet
 * alongside a video, a gallery image, a transcript…). Same asset shapes.
 *
 * Images and PDFs can be local (put the file in /public and reference it as
 * '/images/…' or '/pdfs/…') or any full https:// URL.
 */

export type FeatureAsset =
  | { kind: 'youtube'; id: string }
  | { kind: 'vimeo'; id: string }
  | { kind: 'video'; url: string }
  | { kind: 'pdf'; url: string }
  | { kind: 'image'; url: string }
  | { kind: 'embed'; url: string }
  | { kind: 'link'; url: string }

export type SpeakerFeature = {
  /** URL-safe id, also used as the React key and anchor target */
  slug: string
  title: string
  description: string
  /** Marketing image shown on the card. Local path or full URL. */
  image: string
  imageAlt?: string
  /** Featured brand / show / network the appearance was on */
  brand?: {
    name: string
    /** Logo image — local path or full URL. Omit to show the name as text. */
    logo?: string
    /** Optional link on the logo */
    url?: string
  }
  /** What opens on image click + primary button. */
  asset: FeatureAsset
  /** Extra downloadable / viewable assets shown as secondary buttons. */
  extras?: { label: string; asset: FeatureAsset }[]
  /** Button label. Defaults to a sensible one per asset kind ("Watch Now"). */
  cta?: string
  /**
   * Canonical public URL of the show/episode. Used for the "open in a new
   * tab" affordance and for SEO. Derived automatically for youtube/vimeo.
   */
  watchUrl?: string
  /** Free-text, e.g. 'March 2026' or 'Season 2 · Episode 14' */
  date?: string
  /** Pin to the front of the list */
  featured?: boolean
}

/* ── helpers ───────────────────────────────────────────────────────────── */

/** The URL an asset should point at when opened outside the modal. */
export function assetExternalUrl(asset: FeatureAsset): string {
  switch (asset.kind) {
    case 'youtube':
      return `https://www.youtube.com/watch?v=${asset.id}`
    case 'vimeo':
      return `https://vimeo.com/${asset.id}`
    default:
      return asset.url
  }
}

/** The src used inside the modal for iframe-based assets. */
export function assetEmbedUrl(asset: FeatureAsset): string {
  switch (asset.kind) {
    case 'youtube':
      return `https://www.youtube-nocookie.com/embed/${asset.id}?autoplay=1&rel=0&modestbranding=1`
    case 'vimeo':
      return `https://player.vimeo.com/video/${asset.id}?autoplay=1`
    default:
      return asset.url
  }
}

/** Assets that open in a modal vs. assets that just leave the site. */
export function opensInModal(asset: FeatureAsset): boolean {
  return asset.kind !== 'link'
}

export function defaultCta(asset: FeatureAsset): string {
  switch (asset.kind) {
    case 'youtube':
    case 'vimeo':
    case 'video':
      return 'Watch Now'
    case 'pdf':
      return 'Read the PDF'
    case 'image':
      return 'View Image'
    default:
      return 'View'
  }
}

/* ── the features ──────────────────────────────────────────────────────── */

export const speakerFeatures: SpeakerFeature[] = [
  {
    slug: 'messy-middle',
    title: 'How To Show Up In The Messy Middle',
    description:
      'Krystalore joins the show to talk about resilience in the seasons nobody posts about — how to keep moving when the plan falls apart and the finish line moves.',
    image: 'https://i.ytimg.com/vi/LBXH4_Lk48s/maxresdefault.jpg',
    imageAlt: 'Krystalore Crews speaking about resilience in the messy middle',
    brand: { name: 'Featured Interview' },
    asset: { kind: 'youtube', id: 'LBXH4_Lk48s' },
    date: 'Featured Episode',
    featured: true,
  },
  {
    slug: 'health-healing-empowerment',
    title: 'Health, Healing & Empowerment: How Adversity Helps You Grow',
    description:
      'A conversation on cancer survivorship, rebuilding strength from zero, and turning the hardest chapter into the one that defines your leadership.',
    image: 'https://i.ytimg.com/vi/C1aY5g_iYAs/maxresdefault.jpg',
    imageAlt: 'Krystalore Crews discussing health, healing and empowerment',
    brand: { name: 'Featured Interview' },
    asset: { kind: 'youtube', id: 'C1aY5g_iYAs' },
  },
  {
    slug: 'seasons-of-change',
    title: 'Navigating Seasons of Change',
    description:
      'With Annette Velasquez — on transitions, identity, and what it actually takes to reinvent yourself in public.',
    image: 'https://i.ytimg.com/vi/8njKWQO3QPg/maxresdefault.jpg',
    imageAlt: 'Krystalore Crews on navigating seasons of change',
    brand: { name: 'Featured Interview' },
    asset: { kind: 'youtube', id: '8njKWQO3QPg' },
  },
]
