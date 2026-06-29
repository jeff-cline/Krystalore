import './secret.css'
import { SecretGate } from '@/components/secret/gate'
import { SECRET_BODY } from './_body'
import Configurator from './Configurator'
import ApplyForm from './ApplyForm'

// THE SECRET WEAPON — the editorial sales page, restructured, sitting BEHIND the
// crystal lock gate. The configurator (Tailwind island) renders between two .ic-root
// blocks so the scoped editorial reset never touches it. Apply CTAs scroll to #apply.
const [BODY_TOP, BODY_BOTTOM] = SECRET_BODY.split('<!--CONFIGURATOR-->')

export default function SecretPage() {
  return (
    <SecretGate>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=Inter:wght@400;500;600;700&family=Bebas+Neue&display=swap"
        rel="stylesheet"
      />
      <div className="ic-root" dangerouslySetInnerHTML={{ __html: BODY_TOP }} />

      {/* one-pager flyer download */}
      <section className="bg-[#F7F5F2] py-14 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#0D9488]">Take It With You</p>
          <h2 className="mt-2 text-2xl font-medium text-gray-900 md:text-3xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>The Secret Weapon — one-pager</h2>
          <p className="mt-3 text-gray-600">A confidential, single-page brief on the engagement, the tiers, and the divisions.</p>
          <a href="/the-secret-weapon-flyer.pdf" target="_blank" rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#E8A849] to-[#e07800] px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition hover:brightness-105">
            Download the PDF ↓
          </a>
        </div>
      </section>

      <Configurator />
      <div className="ic-root">
        <div dangerouslySetInnerHTML={{ __html: BODY_BOTTOM }} />
        <ApplyForm />
      </div>
    </SecretGate>
  )
}
