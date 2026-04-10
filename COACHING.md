# COACHING Framework

## Framework Overview

This framework is called **COACHING** — a white-label coaching platform built with Next.js.

- The current **Krystalore** deployment is the demo/flagship instance
- Each deployment allows the coach to connect their own **Google Drive** for video import via the admin panel
- **Quiz → Report → Account creation** is the core onboarding funnel
- **Progress tracking** (Progress & Success) is a key retention feature
- All integrations are **per-deployment** via the Admin > Integrations panel

---

# COACHING Container Architecture

## Overview

This is a **white-label coaching platform** built with Next.js. It can be deployed for any coach by changing the central configuration — no code changes needed for branding, colors, content, or features.

## How It Works

All deployment-specific configuration lives in `lib/coaching-config.ts`:

- **Platform name, tagline, coach name** — displayed in header, footer, homepage
- **Brand colors** — primary (teal), accent (orange), text, headings, backgrounds
- **External site links** — the coach's existing website (top navigation bar)
- **Internal app links** — platform features (bottom navigation bar)
- **Feature flags** — enable/disable: Go Live, Video Vault, Quizzes, Courses, Retreats, etc.
- **Admin accounts** — owner and super-admin access list
- **Community types** — the audience segments (Veterans, Women Leaders, etc.)

## Deploying for a New Coach

1. Fork/clone the repository
2. Edit `lib/coaching-config.ts` with the new coach's branding
3. Replace logo assets in `/public/`
4. Update `tailwind.config.ts` colors if needed (or the config handles inline styles)
5. Configure `data/integrations.json` with the coach's API keys (GoHighLevel, Stripe, Mux, etc.)
6. Deploy

## Integration Settings

Each deployment has its own integration credentials stored in `data/integrations.json` (gitignored). Supported integrations:

- **GoHighLevel** — CRM/marketing automation, contact sync
- **Mux** — Video streaming & live sessions
- **Stripe** — Payments
- **Google Drive** — Content storage
- **Cloudflare Stream** — Video delivery

Admin users configure these via Admin > Integrations in the UI.

## Quiz Content

Quiz content is defined per-quiz in `app/quizzes/[slug]/page.tsx`. Questions, scoring, and categories are all configurable. Quiz results feed into the Personal Progress tracking system.

## Architecture

```
lib/coaching-config.ts     → Central branding/feature config
lib/integrations/          → Integration client libraries
data/integrations.json     → Per-deployment API keys (gitignored)
components/layout/         → Navigation, Sidebar, MainLayout (use config)
app/quizzes/               → Configurable assessment system
app/dashboard/progress/    → Personal Progress tracking
app/admin/integrations/    → Integration settings UI
app/admin/clients/         → Client management & progress viewing
app/api/integrations/      → API routes for integrations
```
