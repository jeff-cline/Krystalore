'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import { ArrowRight, Rocket, TrendingUp, Users, Zap, Trophy, Crown, X, Check, ExternalLink } from 'lucide-react'

const OPTIONS = [
  {
    icon: Rocket, accent: '#0D9488', name: 'Business Boot Camp',
    body: 'The core program — build, launch, and scale with proven frameworks and hands-on coaching from someone who has done it.',
    program: 'Business Boot Camp',
  },
  {
    icon: Trophy, accent: '#E8A849', name: 'World Changers',
    body: 'For mission-driven founders ready to scale impact and income together — a community and system for building something that matters.',
    program: 'World Changers',
  },
  {
    icon: Zap, accent: '#34c5c5', name: 'Activate',
    body: 'Turn your idea into a real, revenue-generating business with the Activate system — strategy, systems, and momentum.',
    program: 'Activate', link: 'https://activate4impact.com',
  },
  {
    icon: TrendingUp, accent: '#e07800', name: 'RocketShip',
    body: 'The proprietary growth engine — predictive demand and done-for-you outreach that fills your pipeline with high-intent buyers.',
    program: 'RocketShip', link: 'https://activate4impact.com/amplify/',
  },
]

export default function BusinessBootcampClient() {
  const [program, setProgram] = useState<string | null>(null) // open modal for this program
  const open = (p: string) => setProgram(p)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* HERO — split so her head isn't cut off */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#34c5c5]/10 via-[#F6F8FA] to-white pt-12 pb-16 md:pt-16 md:pb-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-[#34c5c5]/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#0D9488]">Business Boot Camp</span>
                <h1 className="mt-6 text-4xl font-black leading-[1.05] text-gray-900 md:text-5xl lg:text-6xl">
                  From startup to <span className="bg-gradient-to-r from-[#0D9488] to-[#E8A849] bg-clip-text text-transparent">scale-up.</span>
                </h1>
                <p className="mt-5 text-lg leading-relaxed text-gray-600">
                  Her expertise. Proprietary technology. One partnership. Business Boot Camp is Krystalore Crews as your
                  powerhouse — backed by a white-labeled technology stack most founders can&apos;t access. Choose your path; we build it together.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <button onClick={() => open('Business Boot Camp')} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#E8A849] to-[#e07800] px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition hover:brightness-105">
                    Schedule a Free Consultation <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
                <Image src="/images/go9/corporate.jpg" alt="Krystalore Crews — Business Boot Camp" fill priority className="object-cover" style={{ objectPosition: '22% 18%' }} sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </div>
          </div>
        </section>

        {/* BUSINESS OPTIONS (no pricing) */}
        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#0D9488]">The Full Powerhouse</p>
              <h2 className="mt-2 text-3xl font-black text-gray-900 md:text-4xl">Every option to build & scale</h2>
              <p className="mx-auto mt-3 max-w-2xl text-gray-600">Krystalore&apos;s coaching, powered by proprietary growth technology — white-labeled and done with you.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {OPTIONS.map((o) => (
                <div key={o.name} className="flex flex-col rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition hover:shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: `${o.accent}1A` }}>
                    <o.icon className="h-6 w-6" style={{ color: o.accent }} />
                  </div>
                  <h3 className="mt-5 text-xl font-black text-gray-900">{o.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{o.body}</p>
                  <div className="mt-6 flex flex-col gap-2">
                    <button onClick={() => open(o.program)} className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold uppercase tracking-widest text-white transition hover:brightness-105" style={{ background: o.accent }}>
                      Get Started <ArrowRight className="h-4 w-4" />
                    </button>
                    {o.link && (
                      <a href={o.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-gray-900">
                        Learn More <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THE ADVANTAGE */}
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-center text-3xl font-black text-gray-900 md:text-4xl">The <span className="text-[#E8A849]">Business Boot Camp</span> advantage</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Rocket, title: 'Proven Frameworks', desc: 'Built from real exits, launches, and decades of executive leadership.' },
                { icon: Zap, title: 'Proprietary Tech', desc: 'A white-labeled growth stack — demand, outreach, and automation — done for you.' },
                { icon: Users, title: 'Small Cohorts', desc: 'Intimate groups for personalized attention and deep collaboration.' },
                { icon: Trophy, title: 'Dual Expertise', desc: 'Krystalore (transformation + coaching) meets a proprietary technology partner.' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-2xl bg-white p-6 text-center shadow-sm">
                  <Icon className="mx-auto mb-3 h-10 w-10 text-[#34c5c5]" />
                  <h3 className="mb-2 font-black text-gray-900">{title}</h3>
                  <p className="text-sm text-gray-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THE SECRET WEAPON */}
        <section className="bg-gray-900 py-16 text-center text-white md:py-20">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#E8A849]/15">
              <Crown className="h-7 w-7 text-[#E8A849]" />
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#E8A849]">For the Few</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">You already know what to do next.</h2>
            <p className="mx-auto mt-4 max-w-lg text-white/75">If you made it to this page, you understand what real leverage looks like. The Secret Weapon is the highest level — private, invite-only advisory.</p>
            <Link href="/secret" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#E8A849] to-[#e07800] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition hover:brightness-105">
              Enter The Secret Weapon <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-gradient-to-br from-[#0D9488] to-[#34c5c5] py-16 text-center text-white md:py-20">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black md:text-4xl">Ready to build something that lasts?</h2>
            <p className="mx-auto mt-4 max-w-lg text-white/90">Book a free consultation and let&apos;s map your next 12 months.</p>
            <button onClick={() => open('Business Boot Camp')} className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#0D9488] transition hover:bg-white/90">
              Schedule a Free Consultation <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </section>
      </main>
      <Footer />

      {program && <ConsultModal program={program} onClose={() => setProgram(null)} />}
    </>
  )
}

function ConsultModal({ program, onClose }: { program: string; onClose: () => void }) {
  const [form, setForm] = useState({ firstName: '', lastName: '', city: '', state: '', zip: '', email: '', phone: '', comments: '' })
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const up = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const r = await fetch('/api/business-bootcamp/consult', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ program, ...form }),
      })
      if (r.ok) setDone(true)
    } catch { /* silent */ }
    setSubmitting(false)
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4" onClick={onClose}>
      <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white p-8 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="mb-1 flex items-start justify-between">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#0D9488]">Schedule a Free Consultation</p>
          <button onClick={onClose} aria-label="Close" className="text-gray-400 hover:text-gray-700"><X className="h-5 w-5" /></button>
        </div>

        {done ? (
          <div className="py-8 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#0D9488]/15"><Check className="h-7 w-7 text-[#0D9488]" /></div>
            <h3 className="mt-5 text-2xl font-black text-gray-900">Request received!</h3>
            <p className="mx-auto mt-3 max-w-sm text-gray-600">Thank you — we&apos;ll be in touch to schedule your consultation about <strong>{program}</strong>.</p>
            <button onClick={onClose} className="mt-6 rounded-full bg-gray-900 px-6 py-3 text-sm font-bold uppercase tracking-widest text-white hover:bg-black">Done</button>
          </div>
        ) : (
          <form onSubmit={submit}>
            <h3 className="text-2xl font-black leading-tight text-gray-900">{program}</h3>
            <p className="mt-2 text-sm text-gray-500">Tell us a little about you and we&apos;ll reach out to book your free consultation.</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <Field label="First name *" value={form.firstName} onChange={(v) => up('firstName', v)} required />
              <Field label="Last name *" value={form.lastName} onChange={(v) => up('lastName', v)} required />
              <Field label="City" value={form.city} onChange={(v) => up('city', v)} />
              <Field label="State" value={form.state} onChange={(v) => up('state', v)} />
              <Field label="ZIP" value={form.zip} onChange={(v) => up('zip', v)} />
              <Field label="Phone" type="tel" value={form.phone} onChange={(v) => up('phone', v)} />
            </div>
            <div className="mt-4"><Field label="Email *" type="email" value={form.email} onChange={(v) => up('email', v)} required /></div>
            <label className="mt-4 block">
              <span className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-gray-500">Comments</span>
              <textarea rows={4} value={form.comments} onChange={(e) => up('comments', e.target.value)}
                placeholder="What impact can be made in the next 12 months to change your life, business, and relationships — and how do you see Business Boot Camp being part of that?"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 focus:border-[#0D9488] focus:outline-none focus:ring-1 focus:ring-[#0D9488]" />
            </label>
            <button type="submit" disabled={submitting}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#E8A849] to-[#e07800] px-6 py-4 text-sm font-bold uppercase tracking-widest text-white transition hover:brightness-105 disabled:opacity-60">
              {submitting ? 'Sending…' : <>Request My Consultation <ArrowRight className="h-4 w-4" /></>}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

function Field({ label, value, onChange, type = 'text', required }: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-gray-500">{label}</span>
      <input type={type} value={value} required={required} onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 focus:border-[#0D9488] focus:outline-none focus:ring-1 focus:ring-[#0D9488]" />
    </label>
  )
}
