import prisma from '@/lib/db'

// Shared key/value store for the Command Center (/command). The whole board —
// buckets, links, contacts, groups — was previously kept in each visitor's
// localStorage, so Krystalore, Darlin and Jeff each saw a different board on
// their own device. This persists one shared copy in the existing DashboardItem
// table (type='command-center', title=<key>, content=JSON) so NO migration is
// needed and everyone with the password sees the identical board.

const TYPE = 'command-center'

// DashboardItem requires a userId — attach shared rows to a system admin.
async function systemUserId(): Promise<string | null> {
  try {
    const u =
      (await prisma.user.findFirst({ where: { role: { in: ['GOD', 'ADMIN'] as any } }, select: { id: true } })) ||
      (await prisma.user.findFirst({ select: { id: true } }))
    return u?.id ?? null
  } catch {
    return null
  }
}

export async function getBlob(key: string): Promise<any | null> {
  try {
    const row = await prisma.dashboardItem.findFirst({ where: { type: TYPE, title: key } })
    if (!row) return null
    return (row as any).content ?? null
  } catch {
    return null
  }
}

// Emails that currently have a saved personal board ('user:<email>' rows).
export async function listUserBoardEmails(): Promise<string[]> {
  try {
    const rows = await prisma.dashboardItem.findMany({
      where: { type: TYPE, title: { startsWith: 'user:' } },
      select: { title: true },
    })
    return rows.map((r) => r.title.slice(5)).filter(Boolean)
  } catch {
    return []
  }
}

export async function setBlob(key: string, data: any): Promise<boolean> {
  try {
    const existing = await prisma.dashboardItem.findFirst({ where: { type: TYPE, title: key }, select: { id: true } })
    if (existing) {
      await prisma.dashboardItem.update({ where: { id: existing.id }, data: { content: data } })
      return true
    }
    const userId = await systemUserId()
    if (!userId) return false
    await prisma.dashboardItem.create({ data: { type: TYPE, title: key, content: data, userId } })
    return true
  } catch {
    return false
  }
}
