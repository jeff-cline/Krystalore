import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import prisma from '@/lib/db'
import { getSession } from '@/lib/auth'

// Create a new user / login (admin only)
export async function POST(request: Request) {
  try {
    const session = await getSession()
    if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    const role = (session.user as any).role
    if (!['GOD', 'ADMIN'].includes(role)) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

    const body = await request.json()
    const name = (body?.name || '').trim()
    const email = (body?.email || '').toLowerCase().trim()
    const password = body?.password || ''
    const newRole = body?.role || 'USER'
    const membershipLevel = body?.membershipLevel || 'FREE'

    if (!email || !password) return NextResponse.json({ error: 'Email and password are required.' }, { status: 400 })
    if (password.length < 6) return NextResponse.json({ error: 'Password must be at least 6 characters.' }, { status: 400 })
    if (role !== 'GOD' && newRole === 'GOD') return NextResponse.json({ error: 'Cannot create GOD accounts.' }, { status: 403 })

    const existing = await prisma.user.findUnique({ where: { email } })
    if (existing) return NextResponse.json({ error: 'A user with that email already exists.' }, { status: 409 })

    const hashedPassword = await bcrypt.hash(password, 12)
    const user = await prisma.user.create({
      data: { name: name || null, email, hashedPassword, role: newRole, membershipLevel, emailVerified: new Date() },
      select: { id: true, name: true, email: true, role: true, membershipLevel: true, createdAt: true },
    })
    return NextResponse.json(user, { status: 201 })
  } catch (error) {
    console.error('User create error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET(request: Request) {
  try {
    const session = await getSession()
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const role = (session.user as any).role
    if (!['GOD', 'ADMIN'].includes(role)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const { searchParams } = new URL(request.url)
    const search = searchParams.get('search')
    const membershipLevel = searchParams.get('membershipLevel')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '50')

    const where: any = {}
    
    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } },
      ]
    }

    if (membershipLevel && membershipLevel !== 'ALL') {
      where.membershipLevel = membershipLevel
    }

    const [users, total] = await Promise.all([
      prisma.user.findMany({
        where,
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          membershipLevel: true,
          image: true,
          createdAt: true,
          emailVerified: true,
          _count: {
            select: {
              videos: true,
              permissionOverrides: true,
            },
          },
        },
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.user.count({ where }),
    ])

    return NextResponse.json({
      users,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    })
  } catch (error) {
    console.error('Users fetch error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function PATCH(request: Request) {
  try {
    const session = await getSession()
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const role = (session.user as any).role
    if (!['GOD', 'ADMIN'].includes(role)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const body = await request.json()
    const { id, ...data } = body

    // Prevent non-GOD users from modifying GOD accounts
    if (role !== 'GOD') {
      const targetUser = await prisma.user.findUnique({
        where: { id },
        select: { role: true },
      })

      if (targetUser?.role === 'GOD') {
        return NextResponse.json({ error: 'Cannot modify GOD accounts' }, { status: 403 })
      }

      // Prevent setting role to GOD
      if (data.role === 'GOD') {
        return NextResponse.json({ error: 'Cannot set role to GOD' }, { status: 403 })
      }
    }

    const user = await prisma.user.update({
      where: { id },
      data,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        membershipLevel: true,
        image: true,
        createdAt: true,
        emailVerified: true,
      },
    })

    return NextResponse.json(user)
  } catch (error) {
    console.error('User update error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}