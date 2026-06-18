'use client'

import { useEffect } from 'react'

function parseMailto(href: string) {
  try {
    const raw = href.replace(/^mailto:/i, '')
    const [toPart, query = ''] = raw.split('?')
    const params = new URLSearchParams(query)
    return {
      to: decodeURIComponent(toPart || ''),
      subject: params.get('subject') || 'Website email CTA',
      body: params.get('body') || '',
    }
  } catch {
    return { to: '', subject: 'Website email CTA', body: '' }
  }
}

export default function MailtoLeadCapture() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const anchor = (event.target as Element | null)?.closest?.('a[href^="mailto:"]') as HTMLAnchorElement | null
      if (!anchor) return

      const href = anchor.getAttribute('href') || ''
      const { subject, body } = parseMailto(href)

      const name = window.prompt('Before your email app opens, what is your name?')?.trim()
      if (!name) return
      const email = window.prompt('What email should Krystalore use to reply?')?.trim()
      if (!email) return
      const phone = window.prompt('Best phone number? (optional)')?.trim() || ''
      const note = window.prompt('What can Krystalore help you with? (optional)')?.trim() || ''

      event.preventDefault()

      const message = [
        note,
        body ? `Original CTA body:\n${body}` : '',
        `CTA subject: ${subject}`,
        `Page: ${window.location.href}`,
        `Original mailto: ${href}`,
      ].filter(Boolean).join('\n\n')

      fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          subject: 'Other',
          message,
        }),
        keepalive: true,
      }).catch(() => {
        // Keep original behavior even if the additive CRM/email copy fails.
      }).finally(() => {
        window.location.href = href
      })
    }

    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [])

  return null
}
