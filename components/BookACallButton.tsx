'use client'

import { Phone, Rocket } from 'lucide-react'

export default function BookACallButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
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
  )
}
