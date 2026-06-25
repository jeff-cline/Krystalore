'use client'

import { useEffect, useMemo, useState } from 'react'
import { Lock, ArrowRight } from 'lucide-react'

export const SECRET_PASSWORD = 'KRYSTALORE'
export const SECRET_STORAGE_KEY = 'kry_inner_circle_unlocked'

/* Faceted teal diamond — matches the gem in the Krystalore Crews logo. */
export function Gem() {
  return (
    <svg viewBox="0 0 64 64" className="h-auto w-full drop-shadow-[0_2px_6px_rgba(13,148,136,0.25)]" aria-hidden>
      <polygon points="20,8 4,24 32,24" fill="#34c5c5" />
      <polygon points="20,8 32,24 44,8" fill="#6fd9d9" />
      <polygon points="44,8 32,24 60,24" fill="#23b0b0" />
      <polygon points="4,24 32,24 32,61" fill="#0D9488" />
      <polygon points="60,24 32,24 32,61" fill="#076b62" />
      <polygon points="20,8 44,8 60,24 32,61 4,24" fill="none" stroke="#ffffff" strokeOpacity="0.55" strokeWidth="1.1" strokeLinejoin="round" />
      <line x1="4" y1="24" x2="60" y2="24" stroke="#ffffff" strokeOpacity="0.45" strokeWidth="0.9" />
      <line x1="20" y1="8" x2="32" y2="24" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="0.7" />
      <line x1="44" y1="8" x2="32" y2="24" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="0.7" />
      <line x1="32" y1="24" x2="32" y2="61" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="0.6" />
    </svg>
  )
}

function LockGate({ pw, setPw, error, onSubmit }: {
  pw: string; setPw: (v: string) => void; error: boolean; onSubmit: (e: React.FormEvent) => void
}) {
  const crystals = useMemo(
    () => Array.from({ length: 22 }, (_, i) => ({
      left: (i * 37 + (i % 3) * 11) % 100,
      size: 16 + ((i * 9) % 34),
      delay: (i % 11) * 1.1,
      duration: 10 + (i % 7) * 2,
      opacity: 0.4 + (i % 4) * 0.12,
      blur: i % 5 === 0 ? 1.5 : 0,
      spin: i % 2 === 0 ? 200 : -160,
    })),
    [],
  )

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-[#FBFAF8] to-[#F4F1EC] flex items-center justify-center px-4">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        {crystals.map((c, i) => (
          <span
            key={i}
            className="crystal absolute top-[-12%] block"
            style={{
              left: `${c.left}%`,
              width: `${c.size}px`,
              opacity: c.opacity,
              filter: c.blur ? `blur(${c.blur}px)` : undefined,
              animationDelay: `${c.delay}s`,
              animationDuration: `${c.duration}s`,
              ['--spin' as any]: `${c.spin}deg`,
            }}
          >
            <Gem />
          </span>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(52,197,197,0.10),transparent_60%)]" aria-hidden />

      <div className="relative z-10 w-full max-w-md text-center">
        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-[0_20px_60px_-15px_rgba(13,148,136,0.35)] ring-1 ring-[#E8A849]/40">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#34c5c5]/15 to-[#E8A849]/15">
            <Lock className="h-8 w-8 text-[#0D9488]" strokeWidth={1.75} />
          </div>
        </div>

        <p className="mb-3 text-xs font-bold uppercase tracking-[0.4em] text-[#0D9488]">By Invitation Only</p>
        <h1 className="font-serif text-4xl md:text-5xl font-medium leading-tight text-gray-900">
          If you know, you know.
        </h1>
        <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-gray-500">
          A private room behind a single word. Enter it to continue.
        </p>

        <form onSubmit={onSubmit} className="mt-9">
          <div className="rounded-2xl bg-white/80 p-2 shadow-2xl ring-1 ring-gray-200 backdrop-blur">
            <input
              type="password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              placeholder="Enter the word"
              autoFocus
              className="w-full rounded-xl bg-transparent px-5 py-4 text-center text-lg tracking-[0.3em] text-gray-900 placeholder:tracking-normal placeholder:text-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="mt-1 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#E8A849] to-[#e07800] px-6 py-4 text-sm font-bold uppercase tracking-widest text-white transition hover:brightness-105"
            >
              Enter <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          {error && (
            <p className="mt-4 text-sm font-medium text-[#e07800]">
              That isn&apos;t the word. If you were invited, you have it.
            </p>
          )}
        </form>
      </div>

      <style>{`
        @keyframes kry-fall {
          0%   { transform: translateY(-12vh) rotate(0deg); }
          100% { transform: translateY(118vh) rotate(var(--spin, 180deg)); }
        }
        .crystal { animation-name: kry-fall; animation-timing-function: linear; animation-iteration-count: infinite; will-change: transform; }
        @media (prefers-reduced-motion: reduce) { .crystal { animation: none; display: none; } }
      `}</style>
    </main>
  )
}

/** Wraps any /secret content behind the shared crystal lock gate (session-persisted). */
export function SecretGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false)
  const [ready, setReady] = useState(false)
  const [pw, setPw] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SECRET_STORAGE_KEY) === '1') setUnlocked(true)
    } catch { /* ignore */ }
    setReady(true)
  }, [])

  const tryUnlock = (e: React.FormEvent) => {
    e.preventDefault()
    if (pw.trim().toUpperCase() === SECRET_PASSWORD) {
      setUnlocked(true)
      setError(false)
      try { sessionStorage.setItem(SECRET_STORAGE_KEY, '1') } catch { /* ignore */ }
    } else {
      setError(true)
    }
  }

  if (!ready) return <div className="min-h-screen bg-[#FBFAF8]" />
  if (!unlocked) return <LockGate pw={pw} setPw={setPw} error={error} onSubmit={tryUnlock} />
  return <>{children}</>
}
