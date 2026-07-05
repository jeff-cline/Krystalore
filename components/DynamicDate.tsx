'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

type CTA = { enabled: boolean; title: string; link: string; color: string }
type DD = { title?: string; description?: string; date?: string; heroImage?: string; cta?: CTA }

// Shared fetch — components render their fallback instantly, then override if an
// admin-managed entry exists. Safe: any error keeps the fallback (page never breaks).
function useDynamicDate(slug: string): DD | null {
  const [data, setData] = useState<DD | null>(null)
  useEffect(() => {
    let ok = true
    fetch(`/api/dynamic-dates/${encodeURIComponent(slug)}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => { if (ok && d && d.slug) setData(d) })
      .catch(() => {})
    return () => { ok = false }
  }, [slug])
  return data
}

/**
 * Editable date block: H2 title/description + H3 styled date + optional CTA button.
 * Pass the CURRENT hardcoded values as fallbacks so nothing changes until it's edited
 * in the admin Dynamic Dates dashboard.
 */
export function DynamicDate({
  slug, title, description, date, cta, className = '',
}: {
  slug: string
  title: string
  description?: string
  date: string
  cta?: CTA
  className?: string
}) {
  const dd = useDynamicDate(slug)
  const t = dd?.title || title
  const d = dd?.description ?? description
  const dt = dd?.date || date
  const c: CTA | undefined = dd?.cta ?? cta

  return (
    <div className={className} data-dynamic-date={slug}>
      <h2 className="text-3xl font-black leading-tight text-gray-900 md:text-4xl">{t}</h2>
      {d ? <p className="mt-3 text-lg leading-relaxed text-gray-600">{d}</p> : null}
      <h3 className="mt-4 text-xl font-bold uppercase tracking-widest text-[#0D9488] md:text-2xl">{dt}</h3>
      {c?.enabled && c.title ? (
        <a href={c.link || '#'} className="mt-6 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition hover:brightness-105"
          style={{ backgroundColor: c.color || '#E8A849' }}>
          {c.title}
        </a>
      ) : null}
    </div>
  )
}

/**
 * Inline text swap that keeps the page's own styling. Use to make a single field
 * (date / title / description) editable without imposing any markup:
 *   <DynamicText slug="masterclass" field="date" fallback="June 13, 2026" />
 */
export function DynamicText({
  slug, field, fallback, className,
}: {
  slug: string
  field: 'date' | 'title' | 'description'
  fallback: string
  className?: string
}) {
  const dd = useDynamicDate(slug)
  const v = (dd?.[field] as string | undefined) || fallback
  return <span className={className} data-dyn={`${slug}.${field}`}>{v}</span>
}

/**
 * Swappable hero image. Drop-in replacement for a next/image hero — pass the current
 * src as fallbackSrc; the admin can swap the hero for this slug without a redeploy.
 */
export function DynamicHero({
  slug, fallbackSrc, alt, className = 'object-cover', sizes, priority,
}: {
  slug: string
  fallbackSrc: string
  alt: string
  className?: string
  sizes?: string
  priority?: boolean
}) {
  const dd = useDynamicDate(slug)
  const src = dd?.heroImage || fallbackSrc
  return <Image src={src} alt={alt} fill className={className} sizes={sizes} priority={priority} />
}
