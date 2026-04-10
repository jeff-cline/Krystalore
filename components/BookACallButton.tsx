'use client'

import { Phone } from 'lucide-react'

export default function BookACallButton() {
  return (
    <a
      href="/book"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#34c5c5] hover:bg-[#84d7d7] text-white font-semibold px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
    >
      <Phone className="h-5 w-5" />
      Book a Call
    </a>
  )
}
