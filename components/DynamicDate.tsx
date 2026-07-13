'use client'

import { useEffect, useState, type ReactNode } from 'react'
import Image from 'next/image'
import { Calendar } from 'lucide-react'

type CTA = { enabled: boolean; title: string; link: string; color: string }
type DD = { title?: string; description?: string; date?: string; time?: string; heroImage?: string; cta?: CTA }

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
  field: 'date' | 'title' | 'description' | 'time'
  fallback: string
  className?: string
}) {
  const dd = useDynamicDate(slug)
  const v = (dd?.[field] as string | undefined) || fallback
  return <span className={className} data-dyn={`${slug}.${field}`}>{v}</span>
}

/**
 * Full dynamic header for a dynamic-date page. The featured image sits ALONE at the
 * top (full width, never any text over it); the dynamic title (H1), description and
 * date render BELOW it, and everything is editable from the Dynamic Dates admin. Pass
 * the current hardcoded values as fallbacks; page-specific extras (CTAs, badges) go in
 * `children` and render under the dynamic text.
 */
export function DynamicHeader({
  slug, fallbackTitle, fallbackDescription, fallbackDate, fallbackImage, eyebrow, alt, imgClassName, layout = 'stacked', children,
}: {
  slug: string
  fallbackTitle: string
  fallbackDescription?: string
  fallbackDate?: string
  fallbackImage: string
  eyebrow?: string
  alt?: string
  imgClassName?: string // override the image fit/crop, e.g. 'object-cover object-top' or 'object-contain'
  layout?: 'stacked' | 'split' // 'stacked' = image on top; 'split' = whole image beside the text
  children?: ReactNode
}) {
  const dd = useDynamicDate(slug)
  const img = dd?.heroImage || fallbackImage
  const title = dd?.title || fallbackTitle
  const desc = (dd?.description ?? fallbackDescription) || ''
  const date = dd?.date || fallbackDate || ''

  const textBlock = (align: 'center' | 'left') => (
    <div className={align === 'center' ? 'text-center' : 'text-center lg:text-left'}>
      {eyebrow ? <p className="text-[#0D9488] font-bold uppercase tracking-widest text-xs md:text-sm mb-4" data-dyn={`${slug}.eyebrow`}>{eyebrow}</p> : null}
      <h1
        className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.05] mb-5"
        style={{ textShadow: '0 0 2px #e07800, 0 0 9px rgba(224,120,0,0.75), 0 0 20px rgba(224,120,0,0.45)' }}
        data-dyn={`${slug}.title`}
      >{title}</h1>
      {desc ? <p className={`text-lg text-gray-600 leading-relaxed mb-6 whitespace-pre-line ${align === 'center' ? 'max-w-2xl mx-auto' : ''}`} data-dyn={`${slug}.description`}>{desc}</p> : null}
      {date ? (
        <p className="inline-flex items-center gap-2 rounded-full bg-[#34c5c5]/15 text-[#0D9488] px-4 py-1.5 text-sm font-bold" data-dyn={`${slug}.date`}>
          <Calendar className="w-4 h-4" /> {date}
        </p>
      ) : null}
      {children ? <div className="mt-8">{children}</div> : null}
    </div>
  )

  // Split: the whole image (never cropped) on one side, the dynamic text adjacent.
  if (layout === 'split') {
    return (
      <section data-dynamic-header={slug} className="bg-gradient-to-b from-[#34c5c5]/10 via-[#F6F8FA] to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="relative w-full aspect-[3/4] max-h-[560px] overflow-hidden rounded-3xl bg-[#F6F8FA] shadow-xl">
              <Image src={img} alt={alt || title} fill priority className={imgClassName || 'object-contain'} sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
            {textBlock('left')}
          </div>
        </div>
      </section>
    )
  }

  // Stacked (default): featured image full-width on top, dynamic text below.
  return (
    <section data-dynamic-header={slug}>
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-[#F6F8FA]">
        <Image src={img} alt={alt || title} fill priority className={imgClassName || 'object-cover'} sizes="100vw" />
      </div>
      <div className="bg-gradient-to-b from-[#34c5c5]/10 via-[#F6F8FA] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          {textBlock('center')}
        </div>
      </div>
    </section>
  )
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
