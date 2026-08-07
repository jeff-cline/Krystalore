'use client'

import { Phone, Rocket } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function BookACallButton() {
  const pathname = usePathname()
  // Hide the floating CTA stack on the invite-only /secret page.
  if (pathname?.startsWith('/secret')) return null

  return (
    <>
      {/* ---------- DESKTOP / TABLET — floating stack, bottom-right (unchanged) ---------- */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-50 flex-col items-end gap-2">
        {/* START — interactive deck */}
        <a
          href="/start"
          className="flex items-center gap-2 bg-gradient-to-r from-[#E8A849] to-[#e07800] hover:brightness-110 text-white font-semibold px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
        >
          <Rocket className="h-5 w-5" />
          Start
        </a>

        {/* BOOK A CALL */}
        <a
          href="/book"
          className="flex items-center gap-2 bg-[#34c5c5] hover:bg-[#84d7d7] text-white font-semibold px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
        >
          <Phone className="h-5 w-5" />
          Book a Call
        </a>

        {/* NEW · Voice Analyzer */}
        <a
          href="/voice"
          className="flex items-center gap-2 bg-white/95 backdrop-blur text-[#0D9488] font-bold text-sm px-4 py-2 rounded-full shadow-lg hover:shadow-xl ring-1 ring-[#34c5c5]/40 transition-all"
        >
          <span className="bg-[#e07800] text-white text-[9px] font-black px-1.5 py-0.5 rounded-full tracking-wide">NEW</span>
          <img src="/favicon-192x192.png" alt="" className="h-5 w-5" />
          Voice Analyzer
        </a>
      </div>

      {/* ---------- MOBILE — single locked bar pinned to the bottom of the screen ---------- */}
      {/* Full-width row so nothing overlaps page content or steals taps from in-page buttons. */}
      <div
        className="sm:hidden fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white/95 backdrop-blur shadow-[0_-2px_10px_rgba(0,0,0,0.08)] px-2 pt-2"
        style={{ paddingBottom: 'calc(0.5rem + env(safe-area-inset-bottom))' }}
      >
        <div className="flex items-center justify-center gap-1">
          {/* START */}
          <a
            href="/start"
            className="flex items-center justify-center gap-1 whitespace-nowrap bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white font-semibold text-[11px] px-2.5 py-2.5 rounded-full shadow-md active:brightness-110 transition-all"
          >
            <Rocket className="h-4 w-4 shrink-0" />
            Start
          </a>

          {/* BOOK A CALL */}
          <a
            href="/book"
            className="flex items-center justify-center gap-1 whitespace-nowrap bg-[#34c5c5] text-white font-semibold text-[11px] px-2.5 py-2.5 rounded-full shadow-md active:bg-[#84d7d7] transition-all"
          >
            <Phone className="h-4 w-4 shrink-0" />
            Book a Call
          </a>

          {/* NEW · Voice Analyzer */}
          <a
            href="/voice"
            className="relative flex items-center justify-center gap-1 whitespace-nowrap bg-white text-[#0D9488] font-bold text-[11px] px-2.5 py-2.5 rounded-full shadow-md ring-1 ring-[#34c5c5]/40 transition-all"
          >
            <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 bg-[#e07800] text-white text-[8px] font-black px-1.5 py-px rounded-full tracking-wide shadow">
              NEW
            </span>
            <img src="/favicon-192x192.png" alt="" className="h-4 w-4 shrink-0" />
            Voice Analyzer
          </a>
        </div>
      </div>

      {/* Mobile spacer — sits in normal flow at the end of the document so page content
          (and any in-page buttons) can scroll fully clear of the fixed bar above. */}
      <div
        className="sm:hidden"
        aria-hidden="true"
        style={{ height: 'calc(3.5rem + env(safe-area-inset-bottom))' }}
      />
    </>
  )
}
