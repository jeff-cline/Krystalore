# Krystalore.com — Rules for Claude

This file is the source of truth for how Claude works on this codebase. It overrides defaults and any conflicting guidance in `BRAND.md` or `README.md`. Read top-to-bottom before making changes.

---

## 🚫 Non-negotiable rules

1. **Krystalore.com is always light. Never dark.**
   - No `bg-black`, `bg-gray-900`, `bg-gray-800`, `bg-[#0a0a0a]`, `bg-[#1B2838]` (Midnight Navy from `BRAND.md` is **deprecated** for public pages — do not use it).
   - No dark hero overlays. No `bg-gradient-to-r from-black/85 ...` over photos.
   - No dark "premium" aesthetic. Light + warm gradient is the brand.
   - Public-facing pages only. Dashboard/admin (`/dashboard/*`, `/admin/*`) may still be dark — that's internal.

2. **"Veterans" — capital V, always.** Brand requirement. Never lowercase "veterans" in copy on this site.

3. **Don't use the legacy `MainLayout` for new public pages.** It's dark. Use this pattern instead:
   ```tsx
   import Header from '@/components/layout/header'
   import Footer from '@/components/layout/Footer'

   return (
     <>
       <Header />
       <main className="min-h-screen bg-white"> {/* light only */}
         {/* sections */}
       </main>
       <Footer />
     </>
   )
   ```

4. **Never commit `.DS_Store` files.** They're created by macOS Finder.

5. **Never modify Git history** (force-push, hard reset, amend pushed commits) without an explicit ask.

---

## 🎨 Color palette (active, light-only)

| Role | Hex | Notes |
|---|---|---|
| Gold (CTA primary) | `#E8A849` | The main accent. CTA gradient start. |
| Orange (CTA partner) | `#e07800` | CTA gradient end. Hover/focus accent. |
| Teal (link / chip) | `#34c5c5` | Eyebrow text, chips, secondary buttons. |
| Deep teal (text accent) | `#0D9488` | Body emphasis, eyebrow headings, hover. |
| Soft gray section bg | `#F6F8FA` | Use to separate sections without going dark. |
| Warm light section bg | `#F4F1EC` | "Morning Mist" — alternate light section bg. |
| Page bg | `white` | Default. |

**Gradients we use:**
- Warm CTA buttons: `bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white`
- Hero section bg: `bg-gradient-to-b from-[#34c5c5]/10 via-[#F6F8FA] to-white`
- Final-CTA section: `bg-gradient-to-br from-[#E8A849] to-[#e07800] text-white`

---

## 🦸 Standard page patterns

### Hero (the only one we use)

Light split layout. Text on one side, a Krystalore photo (or relevant photo) in a rounded card on the other. **Never** a full-bleed photo with text overlaid on a dark gradient.

```tsx
<section className="relative bg-gradient-to-b from-[#34c5c5]/10 via-[#F6F8FA] to-white pt-12 md:pt-20 pb-16 md:pb-24 overflow-hidden">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
      <div>
        <div className="inline-flex items-center gap-2 bg-[#34c5c5]/15 text-[#0D9488] rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-5">
          {/* eyebrow */}
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-5 leading-[1.05]">
          {/* headline */}
        </h1>
        {/* subhead, CTAs */}
      </div>
      <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
        <Image src="..." alt="..." fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
      </div>
    </div>
  </div>
</section>
```

Reference: `app/privatemindset/page.tsx`, `app/vision-board/page.tsx`, `app/coworking/page.tsx`, `app/habittracker/page.tsx`, `app/courses/page.tsx`.

### Card grids
Every card has an image on top (`aspect-[16/10]` or `aspect-square` typical). Reference: `app/courses/page.tsx`.

---

## 🔗 Conventions

### External GHL checkout pages
GoHighLevel-hosted forms live at `krystalorecrews.com/*`. CTAs always:
- Link with `target="_blank" rel="noopener noreferrer"`
- Pattern: `const SOMETHING_CHECKOUT_URL = 'https://www.krystalorecrews.com/...'`

Current mappings:
- Coworking → `krystalorecrews.com/habittracker` (per Jeff, May 2026 — confirm if surprising)
- Habit tracker → `krystalorecrews.com/habittracker`
- Vision Board register → `krystalorecrews.com/masterclass-checkout`

### GET MORE INFO mailto
Course pages and program pages use a mailto CTA, not a form:
```ts
function buildMailto(subject: string) {
  const body = `NAME:\nNumber:\nHow can I help?:`
  return `mailto:krystalore@thecrewscoach.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
```
Subject = page name. Body = `NAME:\nNumber:\nHow can I help?:`. Email = `krystalore@thecrewscoach.com`.

### HER NEXT MISSION
- Krystalore's Veterans nonprofit. Always all-caps in copy: **HER NEXT MISSION**.
- External site: `hernextmission.org`.
- `/nonprofit` 301s to `hernextmission.org` (next.config.js).
- Featured section on home points there with "GET MORE INFO" CTA.

### Vision Board Party
- Quarterly cadence. Use the `getNextEvent()` pattern in `app/vision-board/page.tsx` so dates auto-advance.
- Edit `QUARTERLY_EVENTS` array in that file to add new dates.

### Navigation
- Header has Coaching, **Events**, and Retreats dropdowns.
- Events dropdown: Bombshell, Retreats, Vision Board, Masterclass, Speaking.
- Short slugs (`/bombshell`, `/retreats`, `/speaking`) 301 to real pages via `next.config.js`.

### News / Blog
- The "Blog" link in the header points to `https://news.krystalore.com/` (separate WordPress install). **Not** part of this repo.
- This repo has its own `/app/news/page.tsx` listing old krystalorecrews.com fitness posts — currently not linked from the main nav.
- Diagnosed issues with the WP blog are in `docs/news-subdomain-findings.md`.

---

## 🛠 Tech stack

- **Next.js 15** App Router, TypeScript, Tailwind CSS, Lucide icons, React 19.
- `next.config.js`: `typescript.ignoreBuildErrors: true`, `eslint.ignoreDuringBuilds: true` — unused imports and TS noise won't break the build.
- Image domain is unoptimized; images live in `public/images/`.
- Auth via NextAuth (legacy admin area).

### When adding redirects
Add to `next.config.js` → `redirects()` array. Use `permanent: true` (301) for retired URLs. Examples already in there cover old WordPress and GHL URLs.

---

## 🚀 Deploy

**Pushing to `main` deploys live.** The repo auto-deploys to krystalore.com on push to `origin/main`, so a commit + `git push` is the deploy. Workflow:
1. Claude edits files locally.
2. Claude commits and pushes to `main` when Jeff asks for the change to go live.
3. Smoke-check the affected URL after the deploy finishes (~1–2 min).

Hermes is **deprecated** — Jeff no longer uses the Hermes brief workflow unless he explicitly asks for it (updated Jun 2026, confirmed by Jeff).

Claude still does **not** force-push or modify pushed history without an explicit ask.

---

## 📝 Saving rules learned in conversation

If Jeff says **"remember that …"**, **"always …"**, **"never …"**, or **"save this as a rule"**, write the rule into either:
- This file (`CLAUDE.md`) — for design/code rules that affect the whole site
- `~/.claude/projects/-Users-jeffcline-Desktop-Krystalore-Kastle/memory/feedback_*.md` — for working-preferences and tone

When writing a rule, include **why** so future-Claude can judge edge cases.
