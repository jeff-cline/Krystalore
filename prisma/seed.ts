import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const defaultPassword = await bcrypt.hash('ChangeMe123!', 12)

  // God account
  await prisma.user.upsert({
    where: { email: 'jeff.cline@me.com' },
    update: {},
    create: {
      email: 'jeff.cline@me.com',
      name: 'Jeff Cline',
      role: 'GOD',
      membershipLevel: 'VIP',
      hashedPassword: defaultPassword,
    },
  })

  // Admin account
  await prisma.user.upsert({
    where: { email: 'krystalore@crewsbeyondlimitsconsulting.com' },
    update: {},
    create: {
      email: 'krystalore@crewsbeyondlimitsconsulting.com',
      name: 'Krystalore',
      role: 'ADMIN',
      membershipLevel: 'VIP',
      hashedPassword: defaultPassword,
    },
  })

  // Seed categories
  const categories = [
    { name: 'Monday Motivator', slug: 'monday-motivator', description: 'Start your week strong with high-energy motivational workout sessions.', sortOrder: 1, membershipLevel: 'FREE' as const },
    { name: 'Wacky Wednesday', slug: 'wacky-wednesday', description: 'Fun and challenging workouts that will leave you feeling accomplished.', sortOrder: 2, membershipLevel: 'FREE' as const },
    { name: 'Fighter Friday', slug: 'fighter-friday', description: 'Intense full-body workouts designed to push your limits and build strength.', sortOrder: 3, membershipLevel: 'FREE' as const },
    { name: 'Modified Series', slug: 'modified-series', description: 'Joint-friendly modifications for all fitness levels and abilities.', sortOrder: 4, membershipLevel: 'BASIC' as const },
    { name: 'Accelerated Series', slug: 'accelerated-series', description: 'High-intensity training for speed, agility, and athletic performance.', sortOrder: 5, membershipLevel: 'BASIC' as const },
    { name: 'Weighted Series', slug: 'weighted-series', description: 'Strength training with weights for maximum muscle building.', sortOrder: 6, membershipLevel: 'PREMIUM' as const },
    { name: 'Dance Series', slug: 'dance-series', description: 'Fun, energetic dance cardio workouts with various music styles.', sortOrder: 7, membershipLevel: 'BASIC' as const },
    { name: 'Holiday Series', slug: 'holiday-series', description: 'Stay active during the holidays with festive, themed workout routines.', sortOrder: 8, membershipLevel: 'FREE' as const },
    { name: 'Course Content', slug: 'course-content', description: 'Leadership masterclasses and transformational training sessions.', sortOrder: 9, membershipLevel: 'PREMIUM' as const },
    { name: 'Podcast Episodes', slug: 'podcast-episodes', description: 'Audio and video podcast episodes on leadership, fitness, and growth.', sortOrder: 10, membershipLevel: 'FREE' as const },
    { name: 'Live Replays', slug: 'live-replays', description: 'Recordings of live coaching sessions and community events.', sortOrder: 11, membershipLevel: 'BASIC' as const },
  ]

  for (const cat of categories) {
    await prisma.category.upsert({
      where: { slug: cat.slug },
      update: { name: cat.name, description: cat.description, sortOrder: cat.sortOrder, membershipLevel: cat.membershipLevel },
      create: cat,
    })
  }

  console.log('Seed complete: Users and categories created')
  console.log('Default password: ChangeMe123! (change immediately after first login)')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
