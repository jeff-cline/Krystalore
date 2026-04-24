# CMS Editable Blocks

Lets admins edit text & images on real Next.js pages without losing the React layout.

## Data flow

1. Admin scans pages: `/admin/pages` → "Sync Site Pages" populates the `CmsPage` table from the filesystem.
2. Admin edits SEO at `/admin/pages` (per-page Edit) — flows through `getCmsMeta()` into each layout's `generateMetadata()`.
3. Admin edits text/image overrides at `/admin/pages/blocks/[slug]` — saved to `CmsPage.content.blocks`.
4. Pages opt in by rendering `<EditableText>` / `<EditableImage>` with a stable `blockId`.

## Wiring a page

The page must be a **server component** (or wrap a small server fragment) so it can `await getPageOverrides()`.

```tsx
// app/podcasts/page.tsx (server component example)
import { getPageOverrides } from '@/lib/cms-content'
import EditableText from '@/components/cms/EditableText'
import EditableImage from '@/components/cms/EditableImage'

export default async function PodcastsPage() {
  const overrides = await getPageOverrides('/podcasts')
  return (
    <section>
      <EditableText
        as="h1"
        blockId="hero-title"
        defaultText="Listen to Krystalore"
        overrides={overrides}
        className="text-5xl font-bold"
      />
      <EditableImage
        blockId="hero-image"
        defaultSrc="/images/podcast/krystal-clear-life.png"
        defaultAlt="The Krystal Clear Life Podcast"
        overrides={overrides}
        className="rounded-2xl"
      />
    </section>
  )
}
```

## For client-component pages

If a page is `'use client'`, split out the parts you want editable into a small server fragment, or pass `overrides` as a prop from a parent server component / layout.

```tsx
// app/foo/layout.tsx — fetch and pass overrides as cookie / context if you want it global
```

## Adding new block IDs

Block IDs are arbitrary strings. Pick stable, semantic ones (`hero-title`, `cta-button-text`). The admin block editor at `/admin/pages/blocks/[slug]` lets you add overrides for any id — they only take effect once the page references that id via `<EditableText>` / `<EditableImage>`.
