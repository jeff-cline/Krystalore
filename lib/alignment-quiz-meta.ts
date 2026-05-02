// Shared metadata for the Life Alignment Assessment.
// Used by /alignment to render the quiz, and by /admin/leads to show the
// actual question text for older leads whose stored answers are just raw
// numeric ratings (no enriched { question, section } payload).
//
// Order matches the questions array in /alignment/page.tsx. Indexes are
// zero-based so the first question is at index 0; question id is index + 1.

export const ALIGNMENT_SECTION_NAMES = [
  'Sleep & Rest',
  'Nutrition & Fuel',
  'Hydration',
  'Movement & Daily Activity',
  'Physical Health & Stress Signals',
  'Seasons of Change, Loss & Transition',
  'Core Life Alignment',
] as const

export interface AlignmentQuestionMeta {
  id: number
  section: number
  text: string
}

export const ALIGNMENT_QUESTIONS: AlignmentQuestionMeta[] = [
  { id: 1, section: 0, text: 'On most nights, how much sleep do you usually get?' },
  { id: 2, section: 0, text: 'Once you get into bed, how easy is it for you to fall asleep?' },
  { id: 3, section: 0, text: 'How often do you wake up during the night?' },
  { id: 4, section: 0, text: 'If you wake up during the night, do you usually eat or snack?' },
  { id: 5, section: 1, text: 'Thinking about most meals, how often do you eat mostly fresh, whole foods (fruits, vegetables, eggs, fish, chicken, beans) versus processed or packaged foods (fast food, fried foods, boxed meals, sugary snacks)?' },
  { id: 6, section: 2, text: 'On most days, are you drinking roughly half your body weight in ounces of water (for example, a 160-lb person aiming for about 80 ounces)?' },
  { id: 7, section: 3, text: 'On most weeks, how often do you spend at least 30–60 minutes moving your body on purpose (walking, workouts, stretching, or other activity)?' },
  { id: 8, section: 3, text: 'On average, how many steps do you take in a day?' },
  { id: 9, section: 4, text: 'Have you noticed physical symptoms that affect your energy, focus, or sleep?' },
  { id: 10, section: 4, text: 'In the past few months, have you experienced any of the following? (Select all that apply)' },
  { id: 11, section: 4, text: 'How much do stress or health concerns affect your sleep?' },
  { id: 12, section: 4, text: 'Are you currently using—or considering—support for your health or stress?' },
  { id: 13, section: 4, text: 'Right now, how confident do you feel that your lifestyle supports your long-term health?' },
  { id: 14, section: 5, text: 'Are you currently going through a significant life change or transition?' },
  { id: 15, section: 5, text: 'Have any of the following been part of your experience? (Select all that apply)' },
  { id: 16, section: 5, text: 'During this season, how supported do you feel?' },
  { id: 17, section: 5, text: "Have you given yourself time or space to process what you've been going through?" },
  { id: 18, section: 6, text: 'In your everyday life, how often do you feel calm, grounded, or connected beyond your responsibilities?' },
  { id: 19, section: 6, text: 'Overall, how supported do you feel in your emotional and physical health?' },
  { id: 20, section: 6, text: 'How supported and understood do you feel by the people closest to you?' },
  { id: 21, section: 6, text: 'How well are you able to set and maintain boundaries with coworkers, clients, friends, or extended family?' },
  { id: 22, section: 6, text: 'How often do you make time for things that genuinely bring you enjoyment or lightness—without guilt?' },
  { id: 23, section: 6, text: 'How connected do you feel to a sense of purpose or direction in your life right now?' },
]
