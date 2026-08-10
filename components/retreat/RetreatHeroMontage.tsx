'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

/**
 * Full-width hero montage for /retreat — cycles every property photo across
 * all three destinations once per second. Images are cross-faded rather than
 * swapped so the change reads as a montage instead of a flicker.
 */
export default function RetreatHeroMontage({ images }: { images: string[] }) {
  const [i, setI] = useState(0)

  useEffect(() => {
    if (images.length < 2) return
    const t = setInterval(() => setI((n) => (n + 1) % images.length), 1000)
    return () => clearInterval(t)
  }, [images.length])

  return (
    <div className="relative w-full h-[38vh] min-h-[260px] md:h-[52vh] md:min-h-[420px] overflow-hidden bg-[#123f3a]">
      {images.map((src, n) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          // Only the first frame is eager — the rest stream in as they cycle.
          priority={n === 0}
          sizes="100vw"
          className={`object-cover transition-opacity duration-700 ease-in-out ${n === i ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}

      {/* keeps the wordmark legible over bright beach frames */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/25" />

      <div className="absolute inset-0 flex items-end justify-center pb-8 md:pb-12">
        <div className="text-center px-4">
          <p className="text-white/90 font-bold tracking-[0.3em] uppercase text-xs md:text-sm drop-shadow">
            Revive &amp; Thrive Retreats
          </p>
          <p className="text-white text-lg md:text-2xl font-semibold drop-shadow mt-2">
            Costa Rica &nbsp;·&nbsp; Puerto Rico &nbsp;·&nbsp; Tennessee
          </p>
        </div>
      </div>
    </div>
  )
}
