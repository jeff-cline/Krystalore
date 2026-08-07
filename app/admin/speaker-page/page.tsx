'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import {
  Plus, Trash2, ChevronUp, ChevronDown, Save, RotateCcw, ExternalLink,
  Image as ImageIcon, FileText, HelpCircle, Loader2, Check,
} from 'lucide-react'
import ImagePicker from '@/components/admin/ImagePicker'
import type { SpeakerContent } from '@/lib/speakerContent'
import type { FeatureAsset, SpeakerFeature } from '@/data/speaker-features'
import type { SpeakerVideoCategory, SpeakerVideo } from '@/data/speaker-videos'
import type { StagePhoto } from '@/data/speaker-stage'

/* ── helpers ───────────────────────────────────────────────────────────── */

const ASSET_KINDS: FeatureAsset['kind'][] = ['youtube', 'vimeo', 'video', 'pdf', 'image', 'embed', 'link']

function assetValue(a: FeatureAsset): string {
  return a.kind === 'youtube' || a.kind === 'vimeo' ? a.id : (a as any).url || ''
}
function makeAsset(kind: FeatureAsset['kind'], value: string): FeatureAsset {
  if (kind === 'youtube' || kind === 'vimeo') return { kind, id: value } as FeatureAsset
  return { kind, url: value } as FeatureAsset
}
function slugify(s: string) {
  return s.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || 'item'
}
/** Accepts a full YouTube URL or a bare id and returns the id. */
function youtubeId(v: string) {
  const m = v.match(/(?:v=|youtu\.be\/|embed\/)([A-Za-z0-9_-]{6,})/)
  return m ? m[1] : v.trim()
}

function move<T>(arr: T[], i: number, dir: -1 | 1): T[] {
  const j = i + dir
  if (j < 0 || j >= arr.length) return arr
  const copy = [...arr]
  ;[copy[i], copy[j]] = [copy[j], copy[i]]
  return copy
}

/* ── small UI atoms ────────────────────────────────────────────────────── */

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs font-bold uppercase tracking-wide text-gray-500 mb-1">{label}</span>
      {children}
      {hint && <span className="block text-xs text-gray-400 mt-1">{hint}</span>}
    </label>
  )
}

const input =
  'w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#34c5c5] focus:border-[#34c5c5] outline-none'

function RowTools({ onUp, onDown, onDelete }: { onUp: () => void; onDown: () => void; onDelete: () => void }) {
  return (
    <div className="flex items-center gap-1">
      <button type="button" onClick={onUp} title="Move up" className="p-1.5 rounded hover:bg-gray-200 text-gray-500">
        <ChevronUp className="w-4 h-4" />
      </button>
      <button type="button" onClick={onDown} title="Move down" className="p-1.5 rounded hover:bg-gray-200 text-gray-500">
        <ChevronDown className="w-4 h-4" />
      </button>
      <button type="button" onClick={onDelete} title="Delete" className="p-1.5 rounded hover:bg-red-100 text-red-500">
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  )
}

/* ── page ──────────────────────────────────────────────────────────────── */

export default function SpeakerPageAdmin() {
  const [content, setContent] = useState<SpeakerContent | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [savedAt, setSavedAt] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [picker, setPicker] = useState<null | ((url: string) => void)>(null)

  const load = useCallback(async () => {
    setLoading(true)
    try {
      const r = await fetch('/api/admin/speaker-content', { cache: 'no-store' })
      if (!r.ok) throw new Error((await r.json()).error || `HTTP ${r.status}`)
      setContent((await r.json()).content)
      setError(null)
    } catch (e: any) {
      setError(e.message || 'Could not load')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { load() }, [load])

  async function save() {
    if (!content) return
    setSaving(true); setError(null)
    try {
      const r = await fetch('/api/admin/speaker-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          features: content.features,
          videoCategories: content.videoCategories,
          onStage: content.onStage,
        }),
      })
      if (!r.ok) throw new Error((await r.json()).error || `HTTP ${r.status}`)
      setSavedAt(new Date().toLocaleTimeString())
    } catch (e: any) {
      setError(e.message || 'Save failed')
    } finally {
      setSaving(false)
    }
  }

  async function resetAll() {
    if (!confirm('Reset the Speaker page back to the built-in defaults? Your saved edits will be removed.')) return
    setSaving(true)
    try {
      const r = await fetch('/api/admin/speaker-content', { method: 'DELETE' })
      if (!r.ok) throw new Error((await r.json()).error || `HTTP ${r.status}`)
      setContent((await r.json()).content)
      setSavedAt(new Date().toLocaleTimeString())
    } catch (e: any) {
      setError(e.message || 'Reset failed')
    } finally {
      setSaving(false)
    }
  }

  const set = (patch: Partial<SpeakerContent>) => setContent(c => (c ? { ...c, ...patch } : c))

  if (loading) {
    return (
      <div className="flex items-center gap-2 text-gray-500">
        <Loader2 className="w-5 h-5 animate-spin" /> Loading Speaker page content…
      </div>
    )
  }
  if (!content) {
    return <div className="text-red-600">Could not load content. {error}</div>
  }

  return (
    <div className="max-w-5xl">
      {/* header */}
      <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Speaker Page</h1>
          <p className="text-gray-500 mt-1">
            Everything on the public Speaker page. Changes go live as soon as you press Save.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="/pdf/Speaker-Page-Admin-Guide.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 border-2 border-gray-200 hover:border-[#34c5c5] text-gray-700 font-semibold px-4 py-2 rounded-lg text-sm transition-colors"
          >
            <FileText className="w-4 h-4" /> How-To Guide (PDF)
          </a>
          <Link
            href="/speaker"
            target="_blank"
            className="inline-flex items-center gap-1.5 border-2 border-gray-200 hover:border-[#34c5c5] text-gray-700 font-semibold px-4 py-2 rounded-lg text-sm transition-colors"
          >
            <ExternalLink className="w-4 h-4" /> View Page
          </Link>
          <button
            onClick={save}
            disabled={saving}
            className="inline-flex items-center gap-2 bg-[#34c5c5] hover:bg-[#37a6a6] disabled:opacity-60 text-white font-bold px-6 py-2 rounded-lg transition-colors"
          >
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            Save
          </button>
        </div>
      </div>

      {savedAt && !error && (
        <p className="flex items-center gap-1.5 text-green-700 text-sm mb-4">
          <Check className="w-4 h-4" /> Saved at {savedAt} — refresh the Speaker page to see it live.
        </p>
      )}
      {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

      <div className="flex items-start gap-2 bg-blue-50 border border-blue-200 text-blue-900 rounded-lg p-3 text-sm mb-8">
        <HelpCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
        <p>
          Nothing is published until you press <strong>Save</strong>. If something goes wrong you can always
          press <strong>Reset to defaults</strong> at the bottom to put the page back exactly how it shipped.
        </p>
      </div>

      {/* ── FEATURED APPEARANCES ─────────────────────────────────────── */}
      <Section
        title="Featured Appearances"
        blurb="Shows, podcasts and press. Each card can open a video, a PDF, an image, or an outside link."
        onAdd={() =>
          set({
            features: [
              ...content.features,
              {
                slug: `feature-${content.features.length + 1}`,
                title: '',
                description: '',
                image: '',
                asset: { kind: 'youtube', id: '' },
              } as SpeakerFeature,
            ],
          })
        }
        addLabel="Add appearance"
      >
        {content.features.map((f, i) => {
          const upd = (patch: Partial<SpeakerFeature>) => {
            const next = [...content.features]
            next[i] = { ...next[i], ...patch }
            set({ features: next })
          }
          return (
            <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wide text-gray-400">#{i + 1}</span>
                <RowTools
                  onUp={() => set({ features: move(content.features, i, -1) })}
                  onDown={() => set({ features: move(content.features, i, 1) })}
                  onDelete={() => set({ features: content.features.filter((_, k) => k !== i) })}
                />
              </div>

              <Field label="Title">
                <input
                  className={input}
                  value={f.title}
                  placeholder="How To Show Up In The Messy Middle"
                  onChange={e => upd({ title: e.target.value, slug: f.slug || slugify(e.target.value) })}
                />
              </Field>

              <Field label="Description">
                <textarea className={input} rows={2} value={f.description} onChange={e => upd({ description: e.target.value })} />
              </Field>

              <div className="grid sm:grid-cols-2 gap-3">
                <Field label="Marketing image" hint="Shown on the card. Click Choose to upload or pick one.">
                  <div className="flex gap-2">
                    <input className={input} value={f.image} placeholder="/images/… or https://…" onChange={e => upd({ image: e.target.value })} />
                    <button type="button" onClick={() => setPicker(() => (url: string) => upd({ image: url }))}
                      className="shrink-0 inline-flex items-center gap-1 border border-gray-300 rounded-lg px-3 text-sm hover:bg-gray-100">
                      <ImageIcon className="w-4 h-4" /> Choose
                    </button>
                  </div>
                </Field>

                <Field label="Brand / show name" hint="Optional — e.g. the podcast or network.">
                  <input className={input} value={f.brand?.name || ''} placeholder="Inspired Choices Network"
                    onChange={e => upd({ brand: { ...(f.brand || {}), name: e.target.value } })} />
                </Field>
              </div>

              <Field label="Brand logo" hint="Optional. Shows as a small badge on the card image.">
                <div className="flex gap-2">
                  <input className={input} value={f.brand?.logo || ''} placeholder="/images/logos/…"
                    onChange={e => upd({ brand: { ...(f.brand || { name: '' }), logo: e.target.value } })} />
                  <button type="button"
                    onClick={() => setPicker(() => (url: string) => upd({ brand: { ...(f.brand || { name: '' }), logo: url } }))}
                    className="shrink-0 inline-flex items-center gap-1 border border-gray-300 rounded-lg px-3 text-sm hover:bg-gray-100">
                    <ImageIcon className="w-4 h-4" /> Choose
                  </button>
                </div>
              </Field>

              <div className="grid sm:grid-cols-3 gap-3">
                <Field label="What opens">
                  <select className={input} value={f.asset.kind}
                    onChange={e => upd({ asset: makeAsset(e.target.value as FeatureAsset['kind'], assetValue(f.asset)) })}>
                    {ASSET_KINDS.map(k => <option key={k} value={k}>{k}</option>)}
                  </select>
                </Field>
                <div className="sm:col-span-2">
                  <Field
                    label={f.asset.kind === 'youtube' || f.asset.kind === 'vimeo' ? 'Video ID or URL' : 'File or link URL'}
                    hint={f.asset.kind === 'youtube' ? 'Paste the whole YouTube link — the ID is pulled out for you.' : undefined}
                  >
                    <input className={input} value={assetValue(f.asset)}
                      placeholder={f.asset.kind === 'pdf' ? '/pdf/one-sheet.pdf' : 'https://…'}
                      onChange={e => {
                        const v = f.asset.kind === 'youtube' ? youtubeId(e.target.value) : e.target.value
                        upd({ asset: makeAsset(f.asset.kind, v) })
                      }} />
                  </Field>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <Field label="Button label" hint="Leave blank for the automatic label (Watch Now, Read the PDF…).">
                  <input className={input} value={f.cta || ''} onChange={e => upd({ cta: e.target.value || undefined })} />
                </Field>
                <Field label="Date / episode line" hint="Optional — e.g. “March 2026”.">
                  <input className={input} value={f.date || ''} onChange={e => upd({ date: e.target.value || undefined })} />
                </Field>
              </div>
            </div>
          )
        })}
      </Section>

      {/* ── VIDEO CATEGORIES ─────────────────────────────────────────── */}
      <Section
        title="Video Sections"
        blurb="Resilience & Reinvention, Wellness & Empowerment, Story & Interviews — and any new section you add."
        onAdd={() =>
          set({
            videoCategories: [
              ...content.videoCategories,
              { slug: `section-${content.videoCategories.length + 1}`, name: '', description: '', videos: [] },
            ],
          })
        }
        addLabel="Add video section"
      >
        {content.videoCategories.map((cat, ci) => {
          const updCat = (patch: Partial<SpeakerVideoCategory>) => {
            const next = [...content.videoCategories]
            next[ci] = { ...next[ci], ...patch }
            set({ videoCategories: next })
          }
          return (
            <div key={ci} className="bg-gray-50 border border-gray-200 rounded-xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wide text-gray-400">Section #{ci + 1}</span>
                <RowTools
                  onUp={() => set({ videoCategories: move(content.videoCategories, ci, -1) })}
                  onDown={() => set({ videoCategories: move(content.videoCategories, ci, 1) })}
                  onDelete={() => set({ videoCategories: content.videoCategories.filter((_, k) => k !== ci) })}
                />
              </div>

              <Field label="Section heading">
                <input className={input} value={cat.name} placeholder="Resilience & Reinvention"
                  onChange={e => updCat({ name: e.target.value, slug: cat.slug || slugify(e.target.value) })} />
              </Field>
              <Field label="Section description" hint="Optional line under the heading.">
                <textarea className={input} rows={2} value={cat.description || ''} onChange={e => updCat({ description: e.target.value })} />
              </Field>

              <div className="space-y-2 pt-2">
                <p className="text-xs font-bold uppercase tracking-wide text-gray-500">Videos in this section</p>
                {cat.videos.map((v, vi) => {
                  const updVid = (patch: Partial<SpeakerVideo>) => {
                    const vids = [...cat.videos]
                    vids[vi] = { ...vids[vi], ...patch }
                    updCat({ videos: vids })
                  }
                  return (
                    <div key={vi} className="flex flex-wrap items-end gap-2 bg-white border border-gray-200 rounded-lg p-3">
                      <div className="flex-1 min-w-[220px]">
                        <Field label="Video title">
                          <input className={input} value={v.title} onChange={e => updVid({ title: e.target.value })} />
                        </Field>
                      </div>
                      <div className="flex-1 min-w-[200px]">
                        <Field label="YouTube ID or URL">
                          <input className={input} value={v.id} placeholder="LBXH4_Lk48s"
                            onChange={e => updVid({ id: youtubeId(e.target.value) })} />
                        </Field>
                      </div>
                      <RowTools
                        onUp={() => updCat({ videos: move(cat.videos, vi, -1) })}
                        onDown={() => updCat({ videos: move(cat.videos, vi, 1) })}
                        onDelete={() => updCat({ videos: cat.videos.filter((_, k) => k !== vi) })}
                      />
                    </div>
                  )
                })}
                <button type="button" onClick={() => updCat({ videos: [...cat.videos, { id: '', title: '' }] })}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0D9488] hover:underline">
                  <Plus className="w-4 h-4" /> Add video to this section
                </button>
              </div>
            </div>
          )
        })}
      </Section>

      {/* ── ON STAGE ─────────────────────────────────────────────────── */}
      <Section
        title="On Stage"
        blurb="The photo grid near the bottom of the page."
        onAdd={() => set({ onStage: [...content.onStage, { src: '', alt: '' }] })}
        addLabel="Add photo"
      >
        <div className="grid sm:grid-cols-2 gap-3">
          {content.onStage.map((img, i) => {
            const upd = (patch: Partial<StagePhoto>) => {
              const next = [...content.onStage]
              next[i] = { ...next[i], ...patch }
              set({ onStage: next })
            }
            return (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-3 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wide text-gray-400">#{i + 1}</span>
                  <RowTools
                    onUp={() => set({ onStage: move(content.onStage, i, -1) })}
                    onDown={() => set({ onStage: move(content.onStage, i, 1) })}
                    onDelete={() => set({ onStage: content.onStage.filter((_, k) => k !== i) })}
                  />
                </div>
                {img.src && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={img.src} alt="" className="w-full h-28 object-cover rounded-lg border border-gray-200" />
                )}
                <div className="flex gap-2">
                  <input className={input} value={img.src} placeholder="/images/…" onChange={e => upd({ src: e.target.value })} />
                  <button type="button" onClick={() => setPicker(() => (url: string) => upd({ src: url }))}
                    className="shrink-0 inline-flex items-center gap-1 border border-gray-300 rounded-lg px-3 text-sm hover:bg-gray-100">
                    <ImageIcon className="w-4 h-4" /> Choose
                  </button>
                </div>
                <input className={input} value={img.alt} placeholder="Describe the photo (for accessibility)"
                  onChange={e => upd({ alt: e.target.value })} />
              </div>
            )
          })}
        </div>
      </Section>

      {/* footer actions */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-gray-200 pt-6 mt-10">
        <button onClick={resetAll} disabled={saving}
          className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:bg-red-50 px-4 py-2 rounded-lg transition-colors">
          <RotateCcw className="w-4 h-4" /> Reset to defaults
        </button>
        <button onClick={save} disabled={saving}
          className="inline-flex items-center gap-2 bg-[#34c5c5] hover:bg-[#37a6a6] disabled:opacity-60 text-white font-bold px-8 py-3 rounded-lg transition-colors">
          {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />} Save changes
        </button>
      </div>

      {picker && (
        <ImagePicker
          open
          onClose={() => setPicker(null)}
          onPick={(url: string) => { picker(url); setPicker(null) }}
        />
      )}
    </div>
  )
}

function Section({
  title, blurb, children, onAdd, addLabel,
}: {
  title: string; blurb: string; children: React.ReactNode; onAdd: () => void; addLabel: string
}) {
  return (
    <section className="mb-12">
      <div className="flex flex-wrap items-end justify-between gap-3 mb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          <p className="text-sm text-gray-500">{blurb}</p>
        </div>
        <button type="button" onClick={onAdd}
          className="inline-flex items-center gap-1.5 bg-[#0D9488] hover:bg-[#0b7d73] text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors">
          <Plus className="w-4 h-4" /> {addLabel}
        </button>
      </div>
      <div className="space-y-4">{children}</div>
    </section>
  )
}
