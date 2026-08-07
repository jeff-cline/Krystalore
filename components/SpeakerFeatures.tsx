'use client'

import { useCallback, useEffect, useState } from 'react'
import { Play, FileText, ImageIcon, ExternalLink, X, Download, ArrowUpRight } from 'lucide-react'
import {
  speakerFeatures as defaultFeatures,
  assetEmbedUrl,
  assetExternalUrl,
  opensInModal,
  defaultCta,
  type FeatureAsset,
  type SpeakerFeature,
} from '@/data/speaker-features'

/* ── small helpers ─────────────────────────────────────────────────────── */

function AssetIcon({ asset, className = 'w-5 h-5' }: { asset: FeatureAsset; className?: string }) {
  switch (asset.kind) {
    case 'youtube':
    case 'vimeo':
    case 'video':
      return <Play className={className} />
    case 'pdf':
      return <FileText className={className} />
    case 'image':
      return <ImageIcon className={className} />
    default:
      return <ExternalLink className={className} />
  }
}

/* ── modal viewer — renders whichever asset type it's handed ────────────── */

function AssetViewer({ feature, onClose }: { feature: SpeakerFeature; onClose: () => void }) {
  const { asset } = feature
  const externalUrl = feature.watchUrl || assetExternalUrl(asset)

  // Close on Escape, and lock background scroll while open.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose])

  const isVideo = asset.kind === 'youtube' || asset.kind === 'vimeo' || asset.kind === 'video'

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={feature.title}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[92vh] flex flex-col rounded-2xl bg-white shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* header */}
        <div className="flex items-start justify-between gap-4 px-4 sm:px-6 py-3 border-b border-gray-200 bg-white">
          <div className="min-w-0">
            <h3 className="font-bold text-gray-900 text-base sm:text-lg leading-snug truncate">
              {feature.title}
            </h3>
            {feature.brand?.name && (
              <p className="text-xs text-gray-500 truncate">{feature.brand.name}</p>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="shrink-0 rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* body */}
        <div className="flex-1 min-h-0 bg-black">
          {isVideo && asset.kind === 'video' && (
            <video src={asset.url} controls autoPlay playsInline className="w-full h-full max-h-[70vh] bg-black" />
          )}

          {isVideo && asset.kind !== 'video' && (
            <div className="relative w-full" style={{ aspectRatio: '16 / 9' }}>
              <iframe
                src={assetEmbedUrl(asset)}
                title={feature.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          )}

          {asset.kind === 'image' && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={asset.url}
              alt={feature.imageAlt || feature.title}
              className="w-full max-h-[75vh] object-contain bg-black"
            />
          )}

          {(asset.kind === 'pdf' || asset.kind === 'embed') && (
            <iframe
              src={assetEmbedUrl(asset)}
              title={feature.title}
              className="w-full bg-white"
              style={{ height: 'min(75vh, 900px)' }}
            />
          )}
        </div>

        {/* footer — always give a way out to the real thing (and a PDF fallback
            for iOS Safari, which won't render PDFs in an iframe) */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3 border-t border-gray-200 bg-gray-50">
          <p className="text-xs text-gray-500">
            {asset.kind === 'pdf'
              ? "PDF not displaying? Open it in a new tab."
              : feature.date || ''}
          </p>
          <div className="flex items-center gap-2">
            {asset.kind === 'pdf' && (
              <a
                href={asset.url}
                download
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-700 hover:text-gray-900 px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <Download className="w-4 h-4" /> Download
              </a>
            )}
            <a
              href={externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-white bg-[#34c5c5] hover:bg-[#37a6a6] px-4 py-2 rounded-lg transition-colors"
            >
              Open in new tab <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── card ──────────────────────────────────────────────────────────────── */

function FeatureCard({ feature, onOpen }: { feature: SpeakerFeature; onOpen: (f: SpeakerFeature) => void }) {
  const { asset } = feature
  const cta = feature.cta || defaultCta(asset)
  const modal = opensInModal(asset)
  const externalUrl = feature.watchUrl || assetExternalUrl(asset)

  const activate = () => {
    if (modal) onOpen(feature)
    else window.open(externalUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <article
      id={feature.slug}
      className="group flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#34c5c5]/40 transition-all duration-300"
    >
      {/* marketing image — the whole thing is clickable */}
      <button
        type="button"
        onClick={activate}
        aria-label={`${cta}: ${feature.title}`}
        className="relative block w-full overflow-hidden bg-gray-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#34c5c5]/50"
        style={{ aspectRatio: '16 / 9' }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={feature.image}
          alt={feature.imageAlt || feature.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

        {/* play / asset affordance */}
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex items-center justify-center w-14 h-14 rounded-full bg-white/95 text-[#0D9488] shadow-lg transition-transform duration-300 group-hover:scale-110">
            <AssetIcon asset={asset} className="w-6 h-6 ml-0.5" />
          </span>
        </span>

        {/* brand logo */}
        {feature.brand?.logo && (
          <span className="absolute top-3 left-3 bg-white/95 backdrop-blur rounded-lg px-2.5 py-1.5 shadow-md">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={feature.brand.logo}
              alt={feature.brand.name}
              loading="lazy"
              className="h-6 w-auto object-contain"
            />
          </span>
        )}

        {feature.date && (
          <span className="absolute bottom-3 left-3 text-white text-xs font-semibold tracking-wide drop-shadow">
            {feature.date}
          </span>
        )}
      </button>

      {/* body */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        {feature.brand && !feature.brand.logo && (
          <p className="text-[#0D9488] font-semibold tracking-widest uppercase text-xs mb-2">
            {feature.brand.url ? (
              <a href={feature.brand.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {feature.brand.name}
              </a>
            ) : (
              feature.brand.name
            )}
          </p>
        )}

        <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug mb-2">{feature.title}</h3>
        <p className="text-gray-600 leading-relaxed flex-1">{feature.description}</p>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={activate}
            className="inline-flex items-center gap-2 bg-[#34c5c5] hover:bg-[#37a6a6] text-white font-bold px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all"
          >
            <AssetIcon asset={asset} className="w-4 h-4" />
            {cta}
          </button>

          {feature.extras?.map((extra, i) => (
            <button
              key={i}
              type="button"
              onClick={() =>
                opensInModal(extra.asset)
                  ? onOpen({ ...feature, title: extra.label, asset: extra.asset, extras: undefined })
                  : window.open(assetExternalUrl(extra.asset), '_blank', 'noopener,noreferrer')
              }
              className="inline-flex items-center gap-1.5 border-2 border-gray-200 hover:border-[#34c5c5] text-gray-700 hover:text-[#0D9488] font-semibold text-sm px-4 py-2 rounded-full transition-all"
            >
              <AssetIcon asset={extra.asset} className="w-4 h-4" />
              {extra.label}
            </button>
          ))}
        </div>
      </div>
    </article>
  )
}

/* ── the widget ────────────────────────────────────────────────────────── */

export default function SpeakerFeatures({
  features = defaultFeatures,
  title = 'Featured Appearances',
  subtitle = 'Talks, interviews, and press features — watch, read, and download.',
  className = '',
}: {
  features?: SpeakerFeature[]
  title?: string
  subtitle?: string
  className?: string
}) {
  const [active, setActive] = useState<SpeakerFeature | null>(null)
  const close = useCallback(() => setActive(null), [])

  if (!features.length) return null

  // `featured: true` items float to the front, order otherwise preserved.
  const ordered = [...features].sort((a, b) => Number(!!b.featured) - Number(!!a.featured))

  return (
    <section className={`py-20 md:py-28 bg-gray-50 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          {subtitle && <p className="text-gray-500 text-lg max-w-2xl mx-auto">{subtitle}</p>}
        </div>

        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ordered.map(f => (
            <FeatureCard key={f.slug} feature={f} onOpen={setActive} />
          ))}
        </div>
      </div>

      {active && <AssetViewer feature={active} onClose={close} />}
    </section>
  )
}
