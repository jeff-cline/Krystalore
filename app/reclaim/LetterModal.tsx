'use client'

import { useState, useEffect } from 'react'
import { X, Play, ArrowRight } from 'lucide-react'

export const CHECKOUT = 'https://link.elite360.io/payment-link/6aa6a3ea32f95ae35594a57d'

// Swap this for the real video ID when she records it.
const YOUTUBE_ID = ''

const LETTER: string[] = [
  'Hey you,',
  'Maybe you’re normally the strong one.',
  'The capable one. The one who figures it out, takes care of everyone, and keeps moving.',
  'But right now, everything feels important. Everything feels urgent. And you’re not sure what to tackle first.',
  'I see you.',
  'You don’t need another course, complicated system, or list of things you should be doing.',
  'You need some space to breathe, a little structure, and someone beside you.',
  'That’s why I created RISE: Reclaim Your Capacity.',
  'For six weeks, we’ll work together to quiet the noise, figure out what actually needs your attention, release what’s taking up unnecessary energy, and rebuild your confidence one small win at a time.',
]

const LETTER_CLOSE: string[] = [
  'You don’t have to figure everything out today.',
  'Just the next thing.',
  'And you don’t have to do that alone.',
  'One step. One decision. One win at a time.',
]

export default function LetterModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  // lock the page behind the modal, and let Escape close it
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const esc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', esc)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', esc)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[120] flex items-start justify-center overflow-y-auto bg-[#0b3b3a]/70 p-4 py-10 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="A letter to the woman who needs this right now"
    >
      <div
        className="relative w-full max-w-2xl rounded-3xl bg-[#fdfaf4] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 rounded-full bg-white/80 p-2 text-gray-500 shadow-sm transition hover:text-gray-900"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-7 sm:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#0D9488]">A letter to you</p>
          <h2 className="mt-3 text-2xl font-black leading-tight text-[#0b3b3a] sm:text-3xl">
            A Letter to the Woman Who Needs This Right Now <span aria-hidden>💛</span>
          </h2>

          {/* video placeholder — becomes a real embed once YOUTUBE_ID is set */}
          <div className="mt-6 overflow-hidden rounded-2xl border border-[#0D9488]/20 bg-[#0b3b3a]">
            {YOUTUBE_ID ? (
              <div className="relative aspect-video">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube.com/embed/${YOUTUBE_ID}`}
                  title="A message from Krystalore"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="flex aspect-video flex-col items-center justify-center gap-3 text-center text-white/70">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15">
                  <Play className="ml-0.5 h-6 w-6 text-white" />
                </div>
                <p className="text-sm font-semibold text-white/85">Video message from Krystalore</p>
                <p className="text-xs text-white/50">Coming soon</p>
              </div>
            )}
          </div>

          <div className="mt-7 space-y-4 text-[15.5px] leading-relaxed text-[#3d5a58]">
            {LETTER.map((line) => (
              <p key={line}>{line}</p>
            ))}

            <div className="rounded-2xl border-l-4 border-[#0D9488] bg-[#0D9488]/[0.06] px-5 py-4">
              <p>Some days you may have 20%.</p>
              <p className="font-bold text-[#0b3b3a]">We&rsquo;ll make a 20% plan.</p>
              <p className="mt-2">Other days you&rsquo;re ready to run.</p>
              <p className="font-bold text-[#0b3b3a]">We&rsquo;ll run.</p>
            </div>

            <p className="font-bold text-[#0b3b3a]">My promise?</p>
            <p className="text-lg font-semibold italic text-[#0D9488]">
              We move at the speed of your capacity&mdash;not the speed of your fear.
            </p>

            {LETTER_CLOSE.map((line) => (
              <p key={line}>{line}</p>
            ))}

            <p className="font-bold text-[#0b3b3a]">I&rsquo;m with you. <span aria-hidden>💛</span></p>
          </div>

          <div className="mt-7 border-t border-[#0D9488]/15 pt-6">
            <p className="text-sm text-[#6b8583]">Cheers,</p>
            <p
              className="text-4xl text-[#0D9488]"
              style={{ fontFamily: '"Snell Roundhand", "Apple Chancery", "Brush Script MT", cursive' }}
            >
              Krystalore
            </p>
          </div>

          <a
            href={CHECKOUT}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#0D9488] to-[#34c5c5] px-7 py-4 text-sm font-bold uppercase tracking-widest text-white transition hover:brightness-110"
          >
            I&rsquo;m Ready to Rise <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  )
}

export function LetterButton({ className, label }: { className?: string; label?: string }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button onClick={() => setOpen(true)} className={className}>
        {label ?? 'Read her letter to you'}
      </button>
      <LetterModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}
