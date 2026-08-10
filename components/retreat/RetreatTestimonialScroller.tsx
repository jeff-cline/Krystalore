'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'

import type { VideoTestimonial } from '@/data/retreat-testimonials'

/**
 * Four-across scrolling wall of retreat testimonial videos.
 * Auto-advances one card at a time and pauses on hover/focus. Thumbnails and
 * titles come straight from YouTube — nothing about the testimonials is
 * paraphrased here. Clicking a card plays it inline.
 */
export default function RetreatTestimonialScroller({ videos }: { videos: VideoTestimonial[] }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [playing, setPlaying] = useState<string | null>(null)
  const [paused, setPaused] = useState(false)

  const scrollBy = useCallback((dir: 1 | -1) => {
    const el = trackRef.current
    if (!el) return
    const card = el.firstElementChild as HTMLElement | null
    const step = card ? card.offsetWidth + 24 : el.clientWidth / 4
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8
    if (dir === 1 && atEnd) el.scrollTo({ left: 0, behavior: 'smooth' })
    else el.scrollBy({ left: step * dir, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    if (paused || playing) return
    const t = setInterval(() => scrollBy(1), 3500)
    return () => clearInterval(t)
  }, [paused, playing, scrollBy])

  if (!videos.length) return null

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {videos.map((v) => (
          <article
            key={v.id}
            className="snap-start shrink-0 w-[85%] sm:w-[46%] lg:w-[calc(25%-18px)] bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100"
          >
            <div className="relative bg-black" style={{ aspectRatio: '16 / 9' }}>
              {playing === v.id ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0&modestbranding=1`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setPlaying(v.id)}
                  aria-label={`Play: ${v.title}`}
                  className="group absolute inset-0 w-full h-full"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                    alt={v.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex items-center justify-center w-14 h-14 rounded-full bg-white/95 text-[#2a7fa0] shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <Play className="w-6 h-6 ml-0.5" />
                    </span>
                  </span>
                </button>
              )}
            </div>
            <div className="p-5">
              {v.who && (
                <p className="text-[#f3498c] font-black tracking-widest uppercase text-xs mb-1">{v.who}</p>
              )}
              <h3 className="font-bold text-gray-900 leading-snug">{v.title}</h3>
            </div>
          </article>
        ))}
      </div>

      <button
        type="button"
        onClick={() => scrollBy(-1)}
        aria-label="Previous testimonials"
        className="hidden md:flex absolute -left-4 top-1/3 -translate-y-1/2 items-center justify-center w-11 h-11 rounded-full bg-white shadow-lg border border-gray-200 text-[#2a7fa0] hover:bg-[#41a7c9] hover:text-white transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        type="button"
        onClick={() => scrollBy(1)}
        aria-label="More testimonials"
        className="hidden md:flex absolute -right-4 top-1/3 -translate-y-1/2 items-center justify-center w-11 h-11 rounded-full bg-white shadow-lg border border-gray-200 text-[#2a7fa0] hover:bg-[#41a7c9] hover:text-white transition-colors"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  )
}
