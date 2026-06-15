'use client'

import Link from 'next/link'

// Discreet crystal-logo launcher pinned bottom-left on every page.
// Opens Krystalore's Command Center (/command) — her private directory of all pages.
export default function CommandLauncher() {
  return (
    <Link
      href="/command"
      aria-label="Command Center"
      title="Command Center"
      className="group fixed bottom-4 left-4 z-[60] flex items-center gap-2"
    >
      <span className="w-11 h-11 rounded-full bg-white shadow-lg ring-1 ring-black/10 flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105">
        <img src="/favicon-192x192.png" alt="Krystalore" className="w-7 h-7 object-contain" />
      </span>
      <span className="hidden group-hover:inline-block bg-[#0D9488] text-white text-xs font-bold px-2.5 py-1 rounded-full shadow">
        Command Center
      </span>
    </Link>
  )
}
