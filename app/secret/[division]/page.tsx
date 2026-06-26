'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import {
  ArrowLeft, ArrowRight, Check, Star, Crown, Trophy, ShieldCheck,
  AlertTriangle, Lock, TrendingUp, Handshake, Scale, Compass,
} from 'lucide-react'
import { SecretGate } from '@/components/secret/gate'
import { getDivision, type Division } from '@/lib/secretDivisions'
import DivisionAssessment from './DivisionAssessment'

const ICONS = { star: Star, crown: Crown, trophy: Trophy, shield: ShieldCheck }

export default function DivisionPage() {
  const params = useParams()
  const slug = String(params?.division || '')
  const division = getDivision(slug)

  return (
    <SecretGate>
      {division ? <DivisionView d={division} /> : <NotFoundView />}
    </SecretGate>
  )
}

function NotFoundView() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-4 text-center">
      <p className="font-serif text-3xl text-gray-900">This division isn’t available.</p>
      <Link href="/secret" className="mt-6 inline-flex items-center gap-2 text-[#0D9488]">
        <ArrowLeft className="h-4 w-4" /> Back to The Secret Weapon
      </Link>
    </main>
  )
}

function DivisionView({ d }: { d: Division }) {
  const Icon = ICONS[d.icon]
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* minimal bar */}
      <header className="sticky top-0 z-30 border-b border-gray-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/secret" className="flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-[#0D9488]">
            <ArrowLeft className="h-4 w-4" /> The Secret Weapon
          </Link>
          <Image src="/images/krystalore-crews-logo.png" alt="Krystalore Crews" width={130} height={36} className="h-8 w-auto" priority />
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#34c5c5]/10 via-[#F6F8FA] to-white pt-14 pb-16 md:pt-20 md:pb-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-[#E8A849]/40">
            <Icon className="h-7 w-7 text-[#0D9488]" />
          </div>
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#0D9488]">{d.tag}</p>
          <h1 className="mt-4 font-serif text-4xl font-medium leading-tight text-gray-900 md:text-5xl">{d.programTitle}</h1>
          <p className="mt-3 text-base font-medium uppercase tracking-widest text-gray-400">{d.programSubtitle}</p>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-gray-600">{d.intro}</p>
        </div>
      </section>

      {/* ADD-ON ECONOMICS BANNER */}
      <section className="bg-white pb-4">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-br from-[#0D9488] to-[#34c5c5] p-8 text-white shadow-xl md:p-10">
            <div className="flex items-center gap-3">
              <TrendingUp className="h-6 w-6" />
              <h2 className="font-serif text-2xl font-medium">A Specialized Division — Add-On Activation</h2>
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <EconCard icon={TrendingUp} title="Higher Bracket"
                body="Activating a division moves the engagement into a higher bracket — typically 200–300% of the base retainer." />
              <EconCard icon={ShieldCheck} title="Always Prepared"
                body="Every group carries unique, high-stakes scenarios we anticipate. When they activate, we are already ready." />
              <EconCard icon={Handshake} title="First Right of Refusal"
                body="Because we do the hard work up front, partnerships carry a guaranteed first right of refusal to scale with you. That’s the secret sauce." />
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <Block eyebrow="Our Mission" title="We help exceptional clients">
        <ul className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2">
          {d.mission.map((m) => (
            <li key={m} className="flex items-start gap-3 rounded-xl bg-[#F6F8FA] p-4 text-gray-700">
              <Compass className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#0D9488]" /> {m}
            </li>
          ))}
        </ul>
      </Block>

      {/* CRISIS */}
      <Block eyebrow="Crisis Management" title="When the moment turns" icon={AlertTriangle}>
        <p className="mx-auto mb-8 max-w-2xl text-center leading-relaxed text-gray-600">{d.crisis.intro}</p>
        <ChipGrid items={d.crisis.items} />
        {d.crisis.note && <Note>{d.crisis.note}</Note>}
      </Block>

      {/* THE VAULT */}
      <Block eyebrow="The Vault" title="We serve as Switzerland" bg="#F4F1EC" icon={Lock}>
        <p className="mx-auto mb-8 max-w-2xl text-center leading-relaxed text-gray-600">{d.vault.intro}</p>
        <ChipGrid items={d.vault.items} />
        {d.vault.note && <p className="mx-auto mt-8 max-w-2xl text-center font-serif text-xl font-medium text-gray-900">{d.vault.note}</p>}
      </Block>

      {/* MONETIZATION */}
      <Block eyebrow={d.monetization.title} title="Turning relationships into results" icon={TrendingUp}>
        <p className="mx-auto mb-8 max-w-2xl text-center leading-relaxed text-gray-600">{d.monetization.intro}</p>
        <div className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2">
          {d.monetization.items.map((m) => (
            <div key={m} className="flex items-start gap-3 rounded-xl bg-[#F6F8FA] p-4 text-gray-700">
              <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#34c5c5]" /> {m}
            </div>
          ))}
        </div>
        {d.monetization.note && <Note>{d.monetization.note}</Note>}
      </Block>

      {/* EXCLUSIVE PARTNERSHIP */}
      <Block eyebrow="Exclusive Partnership" title="We grow with you" bg="#F6F8FA" icon={Handshake}>
        <p className="mx-auto mb-8 max-w-2xl text-center leading-relaxed text-gray-600">{d.exclusive.intro}</p>
        <ul className="mx-auto max-w-2xl space-y-3">
          {d.exclusive.items.map((m) => (
            <li key={m} className="flex items-start gap-3 rounded-xl bg-white p-5 text-gray-700 shadow-sm ring-1 ring-gray-100">
              <Handshake className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#0D9488]" /> {m}
            </li>
          ))}
        </ul>
      </Block>

      {/* ETHICS */}
      <Block eyebrow="Morals & Ethics" title="Integrity is the entry fee" icon={Scale}>
        <p className="mx-auto mb-8 max-w-2xl text-center leading-relaxed text-gray-600">{d.ethics.intro}</p>
        <ChipGrid items={d.ethics.items} />
        <Note>{d.ethics.note}</Note>
      </Block>

      {/* PHILOSOPHY */}
      <section className="bg-gradient-to-b from-white to-[#F6F8FA] py-16 md:py-24">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#0D9488]">Our Philosophy</p>
          <div className="mt-6 space-y-2">
            {d.philosophy.map((line, i) => (
              <p key={i} className={i === d.philosophy.length - 1
                ? 'mt-6 font-serif text-xl font-medium leading-relaxed text-gray-900'
                : 'font-serif text-2xl font-medium leading-snug text-gray-700'}>
                {line}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* SELF-ASSESSMENT → branded PDF report + lead capture */}
      <DivisionAssessment division={d} />

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#E8A849] to-[#e07800] py-16 text-center text-white md:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-medium md:text-4xl">Inquire about the {d.label} Division</h2>
          <p className="mx-auto mt-4 max-w-lg text-white/90">By application only. Tell us where you are — if it’s a fit, Krystalore will reach out personally.</p>
          <Link href={`/secret?division=${d.slug}#apply`}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#e07800] transition hover:bg-white/90">
            Request an Invitation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <footer className="border-t border-gray-100 bg-white py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-4 text-center">
          <Image src="/images/krystalore-crews-logo.png" alt="Krystalore Crews" width={120} height={33} className="h-7 w-auto opacity-80" />
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} Krystalore Crews · The Secret Weapon · Confidential · By invitation only</p>
        </div>
      </footer>
    </main>
  )
}

/* ── presentational helpers ── */

function EconCard({ icon: I, title, body }: { icon: any; title: string; body: string }) {
  return (
    <div className="rounded-xl bg-white/10 p-5 backdrop-blur">
      <I className="h-5 w-5 text-white/90" />
      <h3 className="mt-3 text-sm font-bold uppercase tracking-widest">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/85">{body}</p>
    </div>
  )
}

function Block({ eyebrow, title, children, bg, icon: I }: {
  eyebrow: string; title: string; children: React.ReactNode; bg?: string; icon?: any
}) {
  return (
    <section className="py-16 md:py-20" style={bg ? { background: bg } : undefined}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          {I && (
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#34c5c5]/12">
              <I className="h-6 w-6 text-[#0D9488]" />
            </div>
          )}
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#0D9488]">{eyebrow}</p>
          <h2 className="mt-3 font-serif text-3xl font-medium text-gray-900 md:text-4xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  )
}

function ChipGrid({ items }: { items: string[] }) {
  return (
    <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-2.5">
      {items.map((it) => (
        <span key={it} className="inline-flex items-center gap-1.5 rounded-full bg-[#34c5c5]/10 px-4 py-2 text-sm font-medium text-[#0D9488]">
          <Check className="h-3.5 w-3.5" /> {it}
        </span>
      ))}
    </div>
  )
}

function Note({ children }: { children: React.ReactNode }) {
  return <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-gray-400">{children}</p>
}
