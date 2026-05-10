import { ArrowRight, Mail } from 'lucide-react'

export interface MailtoCTAProps {
  /** Button label. Also forms the subject as `${hook}-Emotional Mastery`. */
  hook: string
  /** Used in the email body's "I'm reaching out about: <topic>" line. */
  topic: string
  /** Probing questions rendered as bullets in the body, each followed by a blank line. */
  probingQuestions: string[]
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
}

const MAILTO_TARGET = 'krystalore@thecrewscoach.com'

function buildBody(topic: string, probingQuestions: string[]): string {
  const questionBlock = probingQuestions
    .map((q) => `• ${q}\n  \n`)
    .join('\n')
  return [
    'Hi Krystalore,',
    '',
    `I'm reaching out about: ${topic}`,
    '',
    'A few things on my mind:',
    '',
    questionBlock.trimEnd(),
    '',
    '—',
    '',
    'Contact info:',
    'Name: ',
    'Phone: ',
    'Email: ',
    'Best time to talk: ',
    'Location / Time zone: ',
    'Where you heard about Krystalore: ',
    'Current biggest challenge: ',
    'Goal in next 90 days: ',
    '',
    'Thank you,',
  ].join('\n')
}

export function buildMailtoHref(hook: string, topic: string, probingQuestions: string[]): string {
  const subject = `${hook}-Emotional Mastery`
  const body = buildBody(topic, probingQuestions)
  return `mailto:${MAILTO_TARGET}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

const STYLES: Record<NonNullable<MailtoCTAProps['variant']>, string> = {
  primary:
    'bg-teal hover:bg-[#37a6a6] text-white font-bold py-4 px-8 rounded-xl transition-colors text-lg shadow-lg shadow-teal/30 inline-flex items-center justify-center gap-2',
  secondary:
    'bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-4 px-8 rounded-xl transition-colors inline-flex items-center justify-center gap-2',
  ghost:
    'text-teal hover:text-[#37a6a6] font-semibold inline-flex items-center gap-2',
}

export default function MailtoCTA({
  hook,
  topic,
  probingQuestions,
  variant = 'primary',
  className = '',
}: MailtoCTAProps) {
  const href = buildMailtoHref(hook, topic, probingQuestions)
  const Icon = variant === 'ghost' ? Mail : ArrowRight
  return (
    <a href={href} className={`${STYLES[variant]} ${className}`.trim()}>
      {hook}
      <Icon className="h-5 w-5" />
    </a>
  )
}
