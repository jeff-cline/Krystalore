import { NextRequest, NextResponse } from 'next/server'
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'

const PROGRESS_DIR = join(process.cwd(), 'data', 'user-progress')

function sanitizeEmail(email: string) {
  return email.toLowerCase().replace(/[^a-z0-9@.-]/g, '_')
}

function getUserPath(email: string) {
  return join(PROGRESS_DIR, `${sanitizeEmail(email)}.json`)
}

function ensureDir() {
  if (!existsSync(PROGRESS_DIR)) mkdirSync(PROGRESS_DIR, { recursive: true })
}

// GET: Retrieve user progress
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const email = searchParams.get('email')

  if (!email) {
    return NextResponse.json({ error: 'Email required' }, { status: 400 })
  }

  const path = getUserPath(email)
  if (!existsSync(path)) {
    return NextResponse.json({ email, name: null, assessments: [] })
  }

  const data = JSON.parse(readFileSync(path, 'utf-8'))
  return NextResponse.json(data)
}

// POST: Save new assessment
export async function POST(request: NextRequest) {
  const body = await request.json()
  const { email, name, assessment } = body as {
    email: string
    name?: string
    assessment: {
      quizType: string
      scores: Record<string, number>
      overallScore: number
    }
  }

  if (!email || !assessment) {
    return NextResponse.json({ error: 'Email and assessment required' }, { status: 400 })
  }

  ensureDir()
  const path = getUserPath(email)

  let userData = { email, name: name || null, assessments: [] as Array<Record<string, unknown>> }
  if (existsSync(path)) {
    userData = JSON.parse(readFileSync(path, 'utf-8'))
  }
  if (name) userData.name = name

  // Determine level
  const score = assessment.overallScore
  let level = 'Beginner'
  if (score >= 90) level = 'Master'
  else if (score >= 80) level = 'Elite'
  else if (score >= 70) level = 'Advancing'
  else if (score >= 55) level = 'Rising'

  userData.assessments.push({
    date: new Date().toISOString(),
    quizType: assessment.quizType,
    scores: assessment.scores,
    overallScore: assessment.overallScore,
    level,
  })

  writeFileSync(path, JSON.stringify(userData, null, 2))

  return NextResponse.json({ success: true, level, totalAssessments: userData.assessments.length })
}
