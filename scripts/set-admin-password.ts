/**
 * One-shot script: ensure jeff.cline@me.com exists as GOD admin and set the
 * password to whatever is passed via the ADMIN_PASSWORD env var (or argv[2]).
 *
 * Usage on the Vultr server:
 *   ADMIN_PASSWORD='TEMP!234' npx tsx scripts/set-admin-password.ts
 *   # or
 *   npx tsx scripts/set-admin-password.ts 'TEMP!234'
 *
 * After running, immediately rotate the password from /admin (or via this
 * script with a new value). This script is intended for emergency access
 * resets and is safe to re-run.
 */
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const EMAIL = 'jeff.cline@me.com'

async function main() {
  const password = process.env.ADMIN_PASSWORD || process.argv[2]
  if (!password) {
    console.error('ERROR: pass the new password via ADMIN_PASSWORD env var or argv[2].')
    process.exit(1)
  }
  if (password.length < 6) {
    console.error('ERROR: password must be at least 6 characters.')
    process.exit(1)
  }

  const prisma = new PrismaClient()
  try {
    const hashed = await bcrypt.hash(password, 12)
    const user = await prisma.user.upsert({
      where: { email: EMAIL },
      update: {
        hashedPassword: hashed,
        role: 'GOD',
        membershipLevel: 'VIP',
      },
      create: {
        email: EMAIL,
        name: 'Jeff Cline',
        role: 'GOD',
        membershipLevel: 'VIP',
        hashedPassword: hashed,
      },
    })
    console.log(`OK — ${user.email} (role=${user.role}) password updated.`)
  } finally {
    await prisma.$disconnect()
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
