import 'server-only'

import fs from 'fs'
import path from 'path'

export type NormalizedAnswer = {
  question: string
  answer: string | number
  type: 'multiple-choice' | 'scale'
}

type NormalizedAnswers = Record<string, NormalizedAnswer>

type QuestionBank = Record<string, Record<string, string>>

let questionBankCache: QuestionBank | null = null

export function slugifyQuizTitle(title: string): string {
  return String(title || '')
    .toLowerCase()
    .replace(/assessment|screening|readiness/gi, '')
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function unescapeQuestionText(value: string): string {
  return value
    .replace(/\\n/g, ' ')
    .replace(/\\r/g, ' ')
    .replace(/\\t/g, ' ')
    .replace(/\\"/g, '"')
    .replace(/\\'/g, "'")
    .replace(/\\`/g, '`')
    .replace(/\s+/g, ' ')
    .trim()
}

function buildQuestionBank(): QuestionBank {
  const bank: QuestionBank = {}
  const quizzesDir = path.join(process.cwd(), 'app', 'quizzes')

  if (!fs.existsSync(quizzesDir)) {
    return bank
  }

  const quizFolders = fs.readdirSync(quizzesDir, { withFileTypes: true }).filter((entry) => entry.isDirectory())

  for (const folder of quizFolders) {
    const slug = folder.name
    const pagePath = path.join(quizzesDir, slug, 'page.tsx')

    if (!fs.existsSync(pagePath)) continue

    const source = fs.readFileSync(pagePath, 'utf8')
    const questions: Record<string, string> = {}

    const questionRegex = /id:\s*(\d+)[\s\S]*?text:\s*(["'`])([\s\S]*?)\2/g
    let match: RegExpExecArray | null

    while ((match = questionRegex.exec(source)) !== null) {
      const id = match[1]
      const text = unescapeQuestionText(match[3])
      if (id && text) {
        questions[id] = text
      }
    }

    if (Object.keys(questions).length > 0) {
      bank[slug] = questions

      const titleMatch = source.match(/title="([^"]+)"/)
      if (titleMatch?.[1]) {
        const titleSlug = slugifyQuizTitle(titleMatch[1])
        if (titleSlug) {
          bank[titleSlug] = questions
        }
      }
    }
  }

  return bank
}

function getQuestionBank(): QuestionBank {
  if (!questionBankCache) {
    questionBankCache = buildQuestionBank()
  }
  return questionBankCache
}

function normalizeQuestionId(key: string): string {
  const digitMatch = String(key).match(/\d+/)
  return digitMatch?.[0] || String(key)
}

function toAnswerType(value: unknown): 'multiple-choice' | 'scale' {
  if (typeof value === 'number') return 'scale'
  if (typeof value === 'string' && /^\d+(\.\d+)?$/.test(value)) return 'scale'
  return 'multiple-choice'
}

export function normalizeQuizAnswers(
  answersRaw: unknown,
  quizTitle?: string,
  quizSlug?: string
): NormalizedAnswers {
  if (!answersRaw || typeof answersRaw !== 'object') {
    return {}
  }

  const answers = answersRaw as Record<string, unknown>
  const questionBank = getQuestionBank()

  const derivedSlug = quizSlug || slugifyQuizTitle(quizTitle || '')
  const questionsById = questionBank[derivedSlug] || {}

  const normalized: NormalizedAnswers = {}

  for (const [rawKey, rawValue] of Object.entries(answers)) {
    const questionId = normalizeQuestionId(rawKey)

    const isObject = rawValue && typeof rawValue === 'object' && !Array.isArray(rawValue)
    const enriched = isObject ? (rawValue as Record<string, unknown>) : null

    const answerValue = (enriched?.answer as string | number | undefined) ?? (rawValue as string | number)
    const answerType = (enriched?.type as 'multiple-choice' | 'scale' | undefined) ?? toAnswerType(answerValue)

    const questionText =
      (typeof enriched?.question === 'string' && enriched.question.trim()) ||
      questionsById[questionId] ||
      `Question ${questionId}`

    normalized[questionId] = {
      question: questionText,
      answer: answerValue ?? 'Not answered',
      type: answerType,
    }
  }

  return normalized
}
