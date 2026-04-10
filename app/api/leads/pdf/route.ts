import { NextRequest, NextResponse } from 'next/server'
import { quizPdfContent, defaultPdfContent, getScoreRange } from '@/data/quiz-pdf-content'

const BRAND = {
  teal: '#34c5c5',
  gold: '#E8A849',
  coral: '#E07A5F',
  navy: '#1B2838',
  deep: '#37a6a6',
  light: '#84d7d7',
  ice: '#beeaea',
}

const SOCIAL_LINKS = [
  { label: 'Facebook', url: 'https://www.facebook.com/krystalore/' },
  { label: 'Instagram', url: 'https://www.instagram.com/thecrewscoach/' },
  { label: 'TikTok', url: 'https://www.tiktok.com/@thecrewscoach' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/krystalore-crews/' },
  { label: 'YouTube', url: 'https://www.youtube.com/user/krystalore' },
]

type AnswerPayload = {
  question?: string
  answer?: string | number
  type?: string
}

type QuizPostBody = {
  quizSlug?: string
  results?: {
    categories?: Record<string, number>
    overallScore?: number
  }
  quizTitle?: string
  name?: string
  answers?: Record<string, AnswerPayload>
}

function escapeHtml(value: unknown) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function toAbsoluteUrl(origin: string, pathOrUrl: string) {
  if (!pathOrUrl) return pathOrUrl
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl
  return `${origin}${pathOrUrl.startsWith('/') ? '' : '/'}${pathOrUrl}`
}

function socialIcon(name: 'Facebook' | 'Instagram' | 'TikTok' | 'LinkedIn' | 'YouTube') {
  const paths = {
    Facebook:
      'M22.675 0H1.326C.594 0 0 .597 0 1.333v21.333C0 23.403.594 24 1.326 24H12.82V14.708h-3.07v-3.619h3.07v-2.67c0-3.043 1.86-4.707 4.575-4.707 1.301 0 2.419.097 2.744.141v3.183l-1.883.001c-1.476 0-1.76.702-1.76 1.731v2.267h3.518l-.458 3.619h-3.06V24h5.99c.73 0 1.324-.597 1.324-1.333V1.333C24 .597 23.406 0 22.675 0z',
    Instagram:
      'M12 2.16c3.204 0 3.583.012 4.849.07 1.366.062 2.633.343 3.608 1.319.976.976 1.257 2.242 1.319 3.608.059 1.266.07 1.645.07 4.849 0 3.204-.012 3.583-.07 4.849-.062 1.366-.343 2.633-1.319 3.608-.975.976-2.242 1.257-3.608 1.319-1.266.059-1.645.07-4.849.07-3.204 0-3.583-.012-4.849-.07-1.366-.062-2.633-.343-3.608-1.319-.976-.976-1.257-2.242-1.319-3.608-.059-1.266-.07-1.645-.07-4.849 0-3.204.012-3.583.07-4.849.062-1.366.343-2.633 1.319-3.608C5.518 2.543 6.784 2.263 8.15 2.2 9.416 2.142 9.795 2.13 13 2.13zm0 4.838A6.162 6.162 0 1 0 18.162 12 6.169 6.169 0 0 0 12 6.998zm0 10.16A3.998 3.998 0 1 1 15.998 12 4.003 4.003 0 0 1 12 16.16zm5.338-11.846a1.44 1.44 0 1 1-1.44 1.44 1.44 1.44 0 0 1 1.44-1.44z',
    TikTok:
      'M22.54 6.42v3.56a6.58 6.58 0 0 1-4-.11v6.26A6.4 6.4 0 1 1 11.85 0v3.55a2.8 2.8 0 1 0 2.8 2.8V0h3.55v6.55a3.45 3.45 0 0 1 1.72-.34 3.63 3.63 0 0 1 3.42 3.63z',
    LinkedIn:
      'M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.06 20.45H3.56V9h3.5zM5.31 7.45a2.03 2.03 0 1 1 0-4.06 2.03 2.03 0 0 1 0 4.06zM20.44 20.45h-3.5v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66h-3.5V9h3.36v1.56h.05a3.68 3.68 0 0 1 3.31-1.82c3.54 0 4.19 2.33 4.19 5.35z',
    YouTube:
      'M23.5 6.2a3.01 3.01 0 0 0-2.12-2.12C19.8 3.75 12 3.75 12 3.75s-7.8 0-9.38.34A3.01 3.01 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3.01 3.01 0 0 0 2.12 2.12c1.58.34 9.38.34 9.38.34s7.8 0 9.38-.34A3.01 3.01 0 0 0 24 17.8 31.3 31.3 0 0 0 24.5 12a31.3 31.3 0 0 0-.5-5.8zM9.55 15.56V8.44L15.5 12z',
  }
  return `<svg viewBox="0 0 24 24" class="icon"><path d="${paths[name]}" fill="${BRAND.teal}" /></svg>`
}

function buildResponses(answers: Record<string, AnswerPayload> = {}) {
  if (!answers || Object.keys(answers).length === 0) {
    return '<p>No responses captured for this report.</p>'
  }

  return Object.entries(answers)
    .sort(([a], [b]) => Number(a) - Number(b))
    .map(([id, answer]) => {
      const questionText = answer?.question ? answer.question : `Question ${id}`
      const answerValue = answer?.answer ?? 'Not answered'
      const color = typeof answerValue === 'number' ? (Number(answerValue) >= 4 ? BRAND.teal : Number(answerValue) >= 3 ? '#E8A849' : BRAND.coral) : BRAND.navy
      return `
        <div class="qa-item">
          <div class="qa-label">Q${escapeHtml(id)}. ${escapeHtml(questionText)}</div>
          <div class="qa-answer" style="border-color:${color}">
            <span class="qa-badge" style="background:${color}">${answer?.type === 'scale' ? 'Scale' : 'Response'}</span>
            <span>${escapeHtml(answerValue)}</span>
          </div>
        </div>
      `
    })
    .join('')
}

function buildCategoryRows(categories: Record<string, number> = {}) {
  const entries = Object.entries(categories)
  if (entries.length === 0) {
    return '<p>No category data available.</p>'
  }
  return entries
    .map(([name, score]) => {
      const pct = Math.max(0, Math.min(100, Math.round(Number(score) || 0)))
      return `
      <div class="cat-row">
        <div class="cat-top"><span>${escapeHtml(name)}</span><strong>${pct}%</strong></div>
        <div class="meter-wrap"><div class="meter-fill" style="width:${pct}%"></div></div>
      </div>
      `
    })
    .join('')
}

function buildResearchCards(insights: Array<{ title: string; citation: string; body: string }>) {
  return insights
    .map(
      (insight) => `
      <article class="card">
        <h4>${escapeHtml(insight.title)}</h4>
        <p class="citation">${escapeHtml(insight.citation)}</p>
        <p>${escapeHtml(insight.body)}</p>
      </article>
    `
    )
    .join('')
}

function buildActionSteps(steps: Array<{ step: string; timeline: string }>) {
  return steps
    .map(
      (step, index) => `
      <div class="step-item">
        <div class="step-index">${index + 1}</div>
        <div>
          <div class="step-text">${escapeHtml(step.step)}</div>
          <div class="step-timeline">${escapeHtml(step.timeline)}</div>
        </div>
      </div>
    `
    )
    .join('')
}

function buildServiceCards(services: Array<{ name: string; description: string; link: string }>) {
  return services
    .map(
      (service) => `
      <a class="service-card" href="${escapeHtml(service.link)}" target="_blank" rel="noopener noreferrer">
        <div class="service-title">${escapeHtml(service.name)}</div>
        <p>${escapeHtml(service.description)}</p>
      </a>
    `
    )
    .join('')
}

function buildDeepLinks(links: Array<{ label: string; url: string }>) {
  return links
    .map((link) => `<a href="${escapeHtml(link.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(link.label)}</a>`)
    .join('')
}

function pageFooter(page: number) {
  return `
    <div class="brand-footer-line"></div>
    <div class="footer">
      <div>Krystalore Crews | Peace Is Power</div>
      <div>(716) 390-6727</div>
      <div>krystalore.com</div>
      <div class="pnum">${page}</div>
    </div>
  `
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as QuizPostBody
    const {
      results = {},
      name = 'Assessment Taker',
      answers = {},
      quizSlug = '',
    } = body

    const quizContent = quizPdfContent[quizSlug || ''] || defaultPdfContent
    const overallScore = Math.max(0, Math.min(100, Math.round(Number(results.overallScore || 0))))
    const range = getScoreRange(overallScore)
    const date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    const siteUrl = request.nextUrl.origin
    const heroImage = toAbsoluteUrl(siteUrl, quizContent.heroImage)
    const portrait = toAbsoluteUrl(siteUrl, '/images/krystalore/colibri-image-145.jpg')
    const accentImage = toAbsoluteUrl(siteUrl, quizContent.accentImage)
    const categoryRows = buildCategoryRows(results.categories || {})
    const responseRows = buildResponses(answers as Record<string, AnswerPayload>)
    const insights = buildResearchCards(quizContent.researchInsights)
    const actionSteps = buildActionSteps(quizContent.actionSteps)
    const services = buildServiceCards(quizContent.relatedServices)
    const deepLinks = buildDeepLinks(quizContent.deepLinks)

    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(quizContent.title)} Report</title>
  <style>
    @page { size: letter; margin: 0; }
    * { box-sizing: border-box; }
    @media print { html, body { width: 8.5in; height: 11in; } }
    html, body {
      margin: 0;
      padding: 0;
      font-family: 'Helvetica Neue', Arial, sans-serif;
      color: ${BRAND.navy};
      background: white;
    }
    .page { width: 8.5in; height: 11in; padding: 0.5in; position: relative; page-break-before: always; overflow: hidden; }
    .page:first-child { page-break-before: auto; }
    .deck { width: 100%; height: 100%; position: relative; }
    .footer { position: absolute; left: 0.3in; right: 0.3in; bottom: 0.22in; display: grid; grid-template-columns: 1fr 1fr 1fr 0.6in; align-items: center; font-size: 10px; color: #5f6f83; }
    .footer .pnum { text-align: right; color: ${BRAND.teal}; }
    .footer div:nth-child(3), .footer .pnum { text-align: right; }

    .brand-footer-line { border-top: 2px solid ${BRAND.teal}; margin-bottom: 8px; }
    .cover {
      border-radius: 12px;
      padding: 32px 30px 24px;
      height: 100%;
      color: #fff;
      position: relative;
      background: linear-gradient(125deg, #162233 0%, #243858 52%, #11202e 100%);
      overflow: hidden;
    }
    .cover img.hero-bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.28; }
    .logo { height: 52px; width: auto; margin-bottom: 22px; }
    .cover h1 { color: ${BRAND.gold}; font-size: 56px; line-height: 0.95; margin: 0 0 10px; max-width: 5.8in; }
    .cover .subtitle { color: #cde2e3; font-size: 21px; margin: 0 0 26px; }
    .cover .meta { position: absolute; bottom: 1.2in; left: 30px; right: 30px; display: flex; justify-content: space-between; align-items: flex-end; z-index: 2; }
    .cover .meta-box { background: rgba(13, 22, 39, 0.6); border: 1px solid rgba(255,255,255,.2); padding: 12px 14px; border-radius: 10px; }
    .diamond { width: 0; height: 0; border-left: 10px solid transparent; border-right: 10px solid transparent; border-bottom: 18px solid ${BRAND.teal}; position: absolute; }
    .d1 { right: 34px; top: 24px; }
    .d2 { right: 58px; top: 64px; border-bottom-color: ${BRAND.gold}; transform: rotate(180deg); }
    .d3 { left: 34px; bottom: 1.65in; }
    .cover img.hero-overlay { position: absolute; left: 0.22in; right: 0.22in; bottom: 0.56in; height: 4.1in; border-radius: 12px; object-fit: cover; border: 2px solid rgba(255,255,255,.25); }

    .section-title { margin: 4px 0 12px; font-size: 34px; color: ${BRAND.navy}; border-left: 10px solid ${BRAND.teal}; padding-left: 10px; }
    .brand-bar { border-top: 1px solid ${BRAND.teal}; margin: 8px 0 14px; }
    .gauge-wrap { display: grid; grid-template-columns: 2.2fr 2fr; gap: 22px; }
    .gauge {
      width: 3.2in;
      height: 3.2in;
      border: 16px solid #d8f3f3;
      border-top-color: ${BRAND.teal};
      border-right-color: ${BRAND.gold};
      border-bottom-color: ${BRAND.deep};
      border-left-color: ${BRAND.ice};
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .gauge h3 { margin: 0; color: ${BRAND.gold}; font-size: 46px; }
    .gauge p { margin: 4px 0 0; }
    .circle-score { text-align: center; }
    .cat-row { margin-bottom: 12px; }
    .cat-top { display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 6px; }
    .meter-wrap { height: 11px; border-radius: 99px; background: #e4f0f3; border: 1px solid #d0e2e8; }
    .meter-fill { height: 100%; border-radius: 99px; background: linear-gradient(90deg, ${BRAND.teal}, ${BRAND.gold}); }

    .interpretation { margin-top: 10px; background: linear-gradient(150deg, #effbfc, #f8fcfd); border-left: 9px solid ${BRAND.teal}; padding: 12px; border-radius: 8px; line-height: 1.45; font-size: 13px; }
    .mini-portrait { position: absolute; right: .36in; top: 2.3in; width: 1.3in; height: 1.3in; border-radius: 14px; border: 4px solid #eefefe; overflow: hidden; }
    .mini-portrait img { width: 100%; height: 100%; object-fit: cover; }

    .qa-grid { margin-top: 8px; max-height: 7.55in; overflow: hidden; }
    .qa-item { margin-bottom: 8px; padding: 10px; background: #f4fafd; border-radius: 8px; border-left: 4px solid ${BRAND.teal}; }
    .qa-label { font-size: 12px; color: ${BRAND.navy}; font-weight: 600; margin-bottom: 6px; }
    .qa-answer { display: flex; align-items: center; gap: 8px; background: white; border: 1px solid #d9e8ef; border-radius: 8px; padding: 8px; font-size: 12px; color: #2f4154; }
    .qa-badge { color: #fff; border-radius: 12px; font-size: 10px; padding: 4px 9px; text-transform: uppercase; }

    .grid-insights { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .card { border: 1px solid #dbe7ed; border-radius: 10px; padding: 10px; background: #fbfefe; }
    .card h4 { margin: 0; color: #1e3246; font-size: 14px; }
    .card .citation { margin: 5px 0 8px; color: ${BRAND.coral}; font-size: 10px; text-transform: uppercase; }
    .card p { margin: 0; font-size: 11px; line-height: 1.45; color: #3f5468; }

    .quote-block { margin-top: 4px; background: linear-gradient(155deg, #f7fbfb, #f1fbf6); border-left: 12px solid ${BRAND.teal}; padding: 16px; border-radius: 12px; }
    .quote-text { font-size: 25px; line-height: 1.42; color: #253649; font-weight: 500; }
    .bio { margin: 14px 0; color: #405067; font-size: 14px; }

    .step-item { display: grid; grid-template-columns: 36px 1fr; column-gap: 10px; margin-bottom: 9px; }
    .step-index {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: grid;
      place-items: center;
      color: #fff;
      font-weight: 700;
      background: linear-gradient(145deg, ${BRAND.teal}, ${BRAND.deep});
    }
    .step-text { font-size: 12px; color: #2a3e52; }
    .step-timeline { font-size: 10px; text-transform: uppercase; color: ${BRAND.coral}; margin-top: 3px; }
    .service-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px; }
    .service-card { border: 1px solid #cde2e8; border-radius: 8px; text-decoration: none; padding: 10px; color: #22354a; background: #fff; }
    .service-title { font-weight: 700; font-size: 12px; margin-bottom: 4px; }
    .service-card p { margin: 0; font-size: 11px; color: #4a5f73; line-height: 1.4; }
    .service-wrap { margin-top: 12px; }

    .cta-strip { margin-top: 10px; padding: 18px; text-align: center; border-radius: 12px; font-size: 24px; font-weight: 700; background: linear-gradient(135deg, ${BRAND.gold}, #f0bc57); color: ${BRAND.navy}; }
    .cta-strip a { text-decoration: none; color: #1b2838; }
    .deep-links { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 12px; }
    .deep-links a { color: #2b4f67; font-size: 12px; text-decoration: underline; }

    .socials { display: grid; grid-template-columns: repeat(5, auto); gap: 12px; margin-top: 8px; }
    .social-item { display: flex; align-items: center; gap: 6px; color: #1f3348; text-decoration: none; font-size: 11px; }
    .social-diamond { width: 6px; height: 6px; transform: rotate(45deg); background: ${BRAND.gold}; border-radius: 1px; display: inline-block; }
    .social-item .icon { width: 16px; height: 16px; }
    .contact-grid { display: flex; flex-wrap: wrap; gap: 14px; font-size: 12px; color: #526a80; margin-top: 10px; }
    .contact-grid a { color: #2c4f66; text-decoration: none; }
    .qrcode { width: 1.35in; height: 1.35in; border: 1px dashed #a9bdd0; border-radius: 10px; display: grid; align-items: center; justify-items: center; margin: 10px 0; color: #8090a4; font-size: 11px; text-align: center; }
    .disclaimer { margin-top: 8px; font-size: 9px; color: #8a97a6; line-height: 1.4; }
    .mini-accent { position: absolute; width: 11px; height: 11px; background: ${BRAND.teal}; transform: rotate(45deg); border-radius: 2px; }
    .a1 { left: 1.0in; top: 2.0in; }
    .a2 { left: 7.2in; top: 5.9in; }
    .a3 { left: 4.6in; top: 9.5in; }
  </style>
</head>
<body>
  <div class="page">
    <div class="deck cover">
      <img class="hero-bg" src="${heroImage}" alt="${escapeHtml(quizContent.title)}" />
      <div class="cover-body" style="position:relative; z-index:2;">
        <img class="logo" src="https://krystalore.com/wp-content/uploads/2025/10/63d23c1829f84e249e2d8003.png" alt="Krystalore" />
        <div class="mini-accent a1"></div><div class="mini-accent a2"></div><div class="mini-accent a3"></div>
        <h1>${escapeHtml(quizContent.title)}</h1>
        <p class="subtitle">${escapeHtml(quizContent.subtitle)}</p>
        <p>Personal Assessment Results for <strong>${escapeHtml(name)}</strong></p>
        <p>Generated on ${escapeHtml(date)}</p>
      </div>
      <img class="hero-overlay" src="${heroImage}" alt="${escapeHtml(quizContent.title)}" />
      <div class="meta">
        <div class="meta-box">Krystalore Crews Coaching • Transformation Deck</div>
        <div class="meta-box">Date: ${escapeHtml(date)}</div>
      </div>
      <div class="d1 diamond"></div><div class="d2 diamond"></div><div class="d3 diamond"></div>
      ${pageFooter(1)}
    </div>
  </div>

  <div class="page">
    <div class="deck">
      <div class="brand-bar"></div>
      <h2 class="section-title">Your Score Overview</h2>
      <div class="gauge-wrap">
        <div class="gauge"><div class="circle-score"><h3>${overallScore}%</h3><p>Overall Score</p></div></div>
        <div>
          ${categoryRows}
          <div class="interpretation"><strong>What this means:</strong> ${escapeHtml(quizContent.whatThisMeans[range])}</div>
        </div>
      </div>
      <div class="mini-portrait"><img src="${portrait}" alt="Krystalore" /></div>
      ${pageFooter(2)}
    </div>
  </div>

  <div class="page">
    <div class="deck">
      <div class="brand-bar"></div>
      <h2 class="section-title">Your Responses</h2>
      <div class="qa-grid">${responseRows}</div>
      ${pageFooter(3)}
    </div>
  </div>

  <div class="page">
    <div class="deck">
      <div class="brand-bar"></div>
      <h2 class="section-title">The Science Behind Your Results</h2>
      <div class="grid-insights">${insights}</div>
      ${pageFooter(4)}
    </div>
  </div>

  <div class="page">
    <div class="deck">
      <div class="brand-bar"></div>
      <h2 class="section-title">Krystalore's Perspective</h2>
      <div class="quote-block">
        <div class="quote-text">“${escapeHtml(quizContent.krystaloreQuote)}”</div>
      </div>
      <p class="bio">Amazon Best-Selling Author, Keynote Speaker, Certified Life &amp; Somatic Coach</p>
      <p style="font-size: 13px; line-height: 1.5;">${escapeHtml(quizContent.whatThisMeans[range])}</p>
      <div class="mini-portrait" style="top: 6.8in; right:0.95in; left:auto; width:1in; height:1in;"><img src="${portrait}" alt="Krystalore" /></div>
      ${pageFooter(5)}
    </div>
  </div>

  <div class="page">
    <div class="deck">
      <div class="brand-bar"></div>
      <h2 class="section-title">Your Action Plan</h2>
      <div>${actionSteps}</div>
      <h3 style="margin: 10px 0 8px; font-size: 26px;">Related Services</h3>
      <div class="service-wrap">${services}</div>
      ${pageFooter(6)}
    </div>
  </div>

  <div class="page">
    <div class="deck">
      <div class="brand-bar"></div>
      <h2 class="section-title">Next Steps &amp; CTA</h2>
      <div class="cta-strip">Ready to Transform? <a href="${escapeHtml(quizContent.ctaLink)}">${escapeHtml(quizContent.ctaText)}</a></div>
      <div class="service-grid">
        ${quizContent.deepLinks
          .map(
            (link) => `<a href="${escapeHtml(link.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(link.label)}</a>`
          )
          .join('')}
      </div>
      <h3 style="font-size: 28px; margin: 12px 0 8px;">Service Offerings</h3>
      <div class="service-grid">${services}</div>
      <div class="deep-links">${deepLinks}</div>
      ${pageFooter(7)}
    </div>
  </div>

  <div class="page">
    <div class="deck">
      <div class="brand-bar"></div>
      <h2 class="section-title">Connect</h2>
      <p style="font-size: 18px; color: ${BRAND.teal}; font-weight: 700;">Peace Is Power</p>
      <div class="socials">
        ${SOCIAL_LINKS.map(
          (social) => `<a class="social-item" href="${social.url}" target="_blank" rel="noopener noreferrer">${socialIcon(social.label as any)} <span class="social-diamond"></span> ${social.label}</a>`
        ).join('')}
      </div>
      <div class="qrcode">QR CODE\nPLACEHOLDER</div>
      <p style="margin-top: 10px; color: #4d5f72;">Email: krystalore@thecrewscoach.com</p>
      <p style="color: #4d5f72;">Phone: (716) 390-6727</p>
      <p class="disclaimer">This assessment report is educational and for coaching support only. It is not medical, mental health, or crisis care. If you are experiencing serious symptoms, please contact a licensed professional immediately.</p>
      ${pageFooter(8)}
    </div>
  </div>
</body>
</html>
    `

    return NextResponse.json({
      html,
      filename: `${quizContent.title.replace(/[^a-zA-Z0-9]/g, '_')}_Results_${String(name).replace(/[^a-zA-Z0-9]/g, '_')}.pdf`,
    })
  } catch (error) {
    console.error('Error generating PDF:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
