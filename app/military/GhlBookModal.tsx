'use client'

import { useEffect, useState } from 'react'
import { CalendarCheck, X } from 'lucide-react'

const FORM_ID = 'FD6ARdYPYwgstLBLy9Uf'
const FORM_SRC = `https://link.elite360.io/widget/form/${FORM_ID}`

/**
 * "Book Now" button that opens the Elite360 (GHL) Leadership Consulting Request
 * form in a popup modal.
 */
export default function GhlBookModal({
  label = 'Book Now',
  variant = 'gold',
  className = '',
}: {
  label?: string
  variant?: 'gold' | 'white' | 'outline'
  className?: string
}) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    // load the GHL embed helper (auto-resize etc.) once the modal opens
    const existing = document.querySelector('script[src="https://link.elite360.io/js/form_embed.js"]')
    if (!existing) {
      const s = document.createElement('script')
      s.src = 'https://link.elite360.io/js/form_embed.js'
      s.async = true
      document.body.appendChild(s)
    }
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [open])

  const styles: Record<string, string> = {
    gold: 'bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white shadow-lg hover:shadow-xl',
    white: 'bg-white text-[#e07800] shadow-lg hover:shadow-xl',
    outline: 'border-2 border-[#34c5c5] text-[#0D9488] hover:bg-[#34c5c5] hover:text-white',
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`inline-flex items-center justify-center gap-2 font-bold px-7 py-4 rounded-xl transition ${styles[variant]} ${className}`}
      >
        <CalendarCheck className="w-5 h-5" /> {label}
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] bg-black/60 flex items-start sm:items-center justify-center p-2 sm:p-4 overflow-y-auto" onClick={() => setOpen(false)}>
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-xl my-4" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute -top-3 -right-3 z-10 w-9 h-9 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900"
            >
              <X className="w-5 h-5" />
            </button>
            <iframe
              src={FORM_SRC}
              title="Leadership Consulting Request Form"
              className="w-full rounded-2xl"
              style={{ height: '80vh', border: 'none' }}
              id={`inline-${FORM_ID}`}
            />
          </div>
        </div>
      )}
    </>
  )
}
