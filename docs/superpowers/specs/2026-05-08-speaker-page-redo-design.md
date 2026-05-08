# Speaker Page Redo + Site-Wide OG — Design

**Date:** 2026-05-08
**Status:** Approved (pending video category curation)
**Owner:** Krystalore Crews / Jeff Cline

## Problem

Two coupled problems:

1. **Site-wide share preview is wrong.** Sharing `https://krystalore.com/` currently surfaces the *Road to Resilience* book cover and a generic coaching description. It should represent Krystalore as an international speaker / corporate host / wellness consultant, not just an author.
2. **`/speaker` page is out of date and silently broken.**
   - Content reflects the old "Signature Talks" framing — it doesn't reflect Krystalore's current corporate-experiences positioning, service menu, or pricing.
   - The booking form POSTs to `/api/lead` (singular). Only `/api/leads` (plural) exists, and that endpoint requires quiz fields. Every submission since the form was wired has 500'd silently — no booking requests have reached Krystalore.
   - There is no link to or surfacing of her YouTube video library.
   - There is no notification email to `krystalore@thecrewscoach.com` when someone submits.

## Goals

- Update site-wide Open Graph metadata so any shared krystalore.com URL previews as "Krystalore the speaker."
- Replace the `/speaker` page content with the new corporate-experiences framing supplied by Krystalore (PDF dated 2026-05-08, captured below in §Content Source).
- Surface the YouTube playlist `PLY4DtUstl0-uYuj3-IM9g3LA_57_i1YBw` organized into 3–5 categories with the top 3 videos featured per category and a link to the full playlist for more.
- Fix the booking form so submissions reliably reach Krystalore by email at `krystalore@thecrewscoach.com`, push contacts to GHL, and auto-acknowledge the submitter.
- Reuse all existing speaking photos and the existing CTA buttons (`Book to Speak / Emcee` → `/book`, `Book Leadership Training` → `/corporate-wellness`).

## Non-goals

- No changes to header, footer, or other pages beyond `app/layout.tsx` metadata.
- No changes to the existing photo library — reuse what's already in `/public/images/scraped/` and `/public/images/krystalore/`.
- No automatic YouTube playlist sync. The video data is hand-curated in a TypeScript module; a future ticket can switch to the YouTube Data API if Krystalore wants.
- No replacement of the Speaker Reel video — keep `1nDPdZd21VE` as today.
- No new design system or shared component library work — page uses existing Tailwind tokens and the same Header/Footer/FAQSection components.

## Architecture

### Files Touched

| File | Change | Purpose |
|---|---|---|
| `app/layout.tsx` | Edit | Update site-wide OG metadata: title, description, image |
| `app/speaker/page.tsx` | Rewrite | New content sections, fixed form endpoint, new video section |
| `app/api/speaker-booking/route.ts` | Create | New endpoint: SendGrid notification + GHL push + auto-reply |
| `data/speaker-videos.ts` | Create | Curated video catalog (categories + top 3 videos each) |
| `lib/email/speaker-booking-email.ts` | Create | HTML templates for admin notification and submitter auto-reply |
| `public/og/krystalore-og.jpg` | Create | 1200×630 OG image generated from existing speaking photo |

### Data Flow — Booking Form Submission

```
User submits form on /speaker
  └─> POST /api/speaker-booking
        ├─> SendGrid: notify krystalore@thecrewscoach.com (admin email)
        ├─> SendGrid: auto-reply to submitter
        ├─> GHL: pushContactToGHL with tags ['speaker-booking', 'website-lead', `topic-${topic}`]
        └─> Returns { success: true } regardless of integration failures
              (each integration is best-effort — failures are logged but
               do not surface as user errors; the form never silently drops)
```

Each integration is wrapped in its own try/catch. Failure of any one integration is logged via `console.error` but does not fail the request — the user never sees a 500 because GHL is down or SendGrid throttled. The route returns success once it has accepted the payload and attempted all three deliveries.

### Page Section Order

Hero → Role chips → Stats strip → Top photo strip (kept) → About Krystalore → What Sets Krystalore Apart → Full Service Menu → Signature Topics → Stage Presence → Ideal Clients → On Stage gallery (kept) → Speaker Reel (kept) → Video Library by category (new) → Booking Request Form → FAQ (kept) → Closing CTA (kept).

## Content Source

Content for sections marked "new" comes verbatim from the speaker one-sheet PDF supplied by Krystalore on 2026-05-08:

- **Tagline:** "Creating experiences that energize people, elevate culture, and make teams feel seen — then challenge them to rise."
- **Stats:** 22+ Years of Service · 27 Marathon Finishes · 3 Orgs Founded
- **Role chips:** International Speaker · Corporate Host & Emcee · Retreat Leader · Wellness Consultant · 22-yr USAF Veteran · Nonprofit Founder · Certified Coach · Author · 27x Marathon Finisher · Cancer Survivor
- **About:** 3-paragraph bio (preserved verbatim)
- **What Sets Krystalore Apart:** Pull-quote + 5 cards (Reads Every Room / Thrives Under Pressure / Challenges & Guides / Mission-Driven Results / Lived Resilience)
- **Service Menu (6 cards with starting price + bullets):**
  - Virtual Event Host — $2,500+
  - Live Emcee + Facilitation — $5,000+ (travel billed separately)
  - Leadership & Wellness Workshop — $3,500+ add-on
  - Four Lenses Workshop — Contact for pricing
  - Corporate Fitness & Wellness — Group rates
  - Private Coaching — Contact for pricing
- **Signature Topics (13):** Health is Wealth · Resilience Through Reinvention · Leadership From the Inside Out · The Freedom Formula · Burnout Prevention for High Achievers · Identity Shifts & Life Transitions · The 34-Minute Performance Method · Confidence, Energy & Sustainable Success · EQ for Leaders · Rebuilding After Transition · Veteran Resilience & Reinvention · Somatic Wellness & Psychological Safety · Empowering Teams Through Connection
- **Stage Presence:** 8 bullets (verbatim from PDF)
- **Ideal Clients:** 15 audience types (verbatim from PDF)

## Components & Boundaries

### `app/speaker/page.tsx`

Server component for SEO/JSON-LD; the booking form remains a client component (`'use client'`) extracted as `SpeakerBookingForm`. The video gallery extracted as `SpeakerVideoLibrary` (server component since it just renders static data).

### `data/speaker-videos.ts`

```ts
export type SpeakerVideo = {
  id: string          // 11-char YouTube video ID
  title: string
  thumbnail?: string  // optional override; defaults to https://i.ytimg.com/vi/{id}/hqdefault.jpg
}

export type SpeakerVideoCategory = {
  slug: string        // url-safe; used for anchor IDs
  name: string        // display name
  description?: string
  videos: SpeakerVideo[]  // exactly 3 in production; type allows any length for flexibility
}

export const SPEAKER_PLAYLIST_URL =
  'https://www.youtube.com/playlist?list=PLY4DtUstl0-uYuj3-IM9g3LA_57_i1YBw'

export const speakerVideos: SpeakerVideoCategory[] = [
  // Populated by Krystalore review; categories proposed by Claude after
  // the playlist contents are pasted.
]
```

Categories will be proposed by Claude after Krystalore pastes the playlist titles. Expected count: 3–5 categories. Krystalore approves/edits before this file is committed.

### `app/api/speaker-booking/route.ts`

Mirrors `app/api/inner-circle/apply/route.ts`: validates required fields, then runs three integrations in parallel-friendly try/catch blocks. Required fields: `firstName`, `email`, `phone`. Optional: `organization`, `date`, `budget`, `topic`, `details`.

Tags pushed to GHL:
- Always: `['speaker-booking', 'website-lead']`
- Conditional: `topic-${form.topic}` when topic is set (e.g., `topic-leadership`, `topic-resilience`)

Custom fields pushed to GHL: `speaker_event_date`, `speaker_event_budget`, `speaker_event_topic`, `speaker_event_details`, `speaker_event_organization`.

### `lib/email/speaker-booking-email.ts`

Two functions:

```ts
export function buildAdminNotificationEmail(form: SpeakerBookingForm): {
  to: string
  from: { email: string; name: string }
  subject: string
  text: string  // preferred for ops legibility
  html: string
}

export function buildSubmitterAutoReplyEmail(form: SpeakerBookingForm): {
  to: string
  from: { email: string; name: string }
  subject: string
  html: string
}
```

The admin email goes to `krystalore@thecrewscoach.com` with subject `Speaker Booking Request: {firstName} — {organization or topic}`. The auto-reply uses the same gradient/header style as `lib/email.ts`'s reset-password template for visual consistency.

### `app/layout.tsx` — Open Graph changes

```ts
openGraph: {
  title: 'Krystalore Crews — International Speaker, Corporate Host & Wellness Consultant',
  description: 'Creating experiences that energize people, elevate culture, and make teams feel seen — then challenge them to rise.',
  url: 'https://krystalore.com',
  siteName: 'Krystalore Crews',
  type: 'website',
  locale: 'en_US',
  images: [{ url: '/og/krystalore-og.jpg', width: 1200, height: 630, alt: 'Krystalore Crews on stage' }],
},
twitter: {
  card: 'summary_large_image',
  title: 'Krystalore Crews — International Speaker & Corporate Host',
  description: 'Creating experiences that energize people, elevate culture, and make teams feel seen — then challenge them to rise.',
  images: ['/og/krystalore-og.jpg'],
},
```

The favicon stack is left unchanged unless the existing favicons are out of brand — to be verified before commit. If a refresh is needed, regenerate from the existing logo asset; this is a separate scoped change.

## Error Handling

| Failure mode | User experience | Internal |
|---|---|---|
| SendGrid down / no API key | Form still succeeds. Submitter sees "Request Received." | `console.error` logs the failure. Krystalore eventually notices the lack of email — non-blocking. |
| GHL down | Form still succeeds. | Same — logged, non-blocking. |
| Auto-reply email fails | Form still succeeds. Admin notification still goes through if SendGrid is up. | Logged. Submitter sees in-page success state regardless. |
| All integrations fail | Form still returns success. | All three log errors. Worth wiring a future Slack/observer if this becomes a real issue. |
| Validation failure (missing required field) | Form returns 400. UI shows error state. | Logged for debugging. |
| Required env vars missing locally | Dev sees a `console.warn` at request time; nothing crashes. | `SENDGRID_API_KEY` placeholder check copied from inner-circle pattern. |

## Testing

Manual verification checklist before committing:

- [ ] Submit booking form with all fields → email arrives at `krystalore@thecrewscoach.com`
- [ ] Submit booking form with all fields → submitter receives auto-reply
- [ ] Submit with only required fields (name, email, phone) → still works
- [ ] Verify GHL contact created with `speaker-booking` tag
- [ ] Submit with bad email → form shows validation error, no API call
- [ ] Disable SendGrid temporarily → form still returns success, error logged
- [ ] Curl `https://krystalore.com/speaker` after deploy → check `<meta og:*>` tags
- [ ] Use Facebook/LinkedIn share debugger on `https://krystalore.com/` → confirm new image and description
- [ ] Click each video thumbnail → opens correct YouTube video in new tab
- [ ] Click "View full playlist on YouTube" → opens playlist URL
- [ ] Mobile breakpoint (375w): role chips wrap cleanly; service menu stacks; topic pills wrap
- [ ] Tablet breakpoint (768w): service menu in 2-col grid; topic pills wrap
- [ ] Desktop (1280w): service menu in 3-col grid; ideal clients in 5-col grid
- [ ] Lighthouse: SEO ≥ 95, Best Practices ≥ 90 on /speaker

No new automated tests — this is presentation/static content + an integration endpoint that follows an existing tested pattern (inner-circle/apply).

## Open Items (resolved before implementation)

- **Video categories.** Krystalore to paste the playlist video titles. Claude proposes 3–5 categories with 3 videos each. Krystalore approves before `data/speaker-videos.ts` is committed with real values.
- **OG image source.** Default plan: re-export `/public/images/scraped/speaker-stage.jpg` to 1200×630 with light overlay/text via `sharp`. Krystalore can swap to a different photo before commit.
- **Favicon refresh.** Verify current favicons match brand. If stale, separate small follow-up; not blocking the speaker page work.

## Future Work (out of scope here)

- Auto-sync video library via YouTube Data API + scheduled rebuild.
- A/B test the order of Service Menu vs Signature Topics for conversion.
- Add a structured "Past Engagements / Logos" strip (Buffalo Bills, WNY Heroes, etc.) once Krystalore approves which logos to display.
- Add Schema.org `Service` items to the JSON-LD for each menu tier (helps with rich snippets).
