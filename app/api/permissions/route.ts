import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/db'
import { getSession } from '@/lib/auth'

export async function GET() {
  try {
    const permissionSets = await prisma.permissionSet.findMany({
      include: {
        categories: {
          select: { id: true, name: true, slug: true },
        },
        _count: {
          select: { users: true },
        },
      },
      orderBy: { membershipLevel: 'asc' },
    })

    return NextResponse.json(permissionSets)
  } catch (error) {
    console.error('Permission sets fetch error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(request: Request) {
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
    const { name, description, membershipLevel, categoryIds } = body

    const permissionSet = await prisma.permissionSet.create({
      data: {
        name,
        description,
        membershipLevel,
        categories: {
          connect: categoryIds.map((id: string) => ({ id })),
        },
      },
      include: {
        categories: true,
      },
    })

    return NextResponse.json(permissionSet)
  } catch (error) {
    console.error('Permission set create error:', error)
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
    const { id, categoryIds, ...data } = body

    // Update permission set
    const permissionSet = await prisma.permissionSet.update({
      where: { id },
      data: {
        ...data,
        categories: {
          set: categoryIds.map((categoryId: string) => ({ id: categoryId })),
        },
      },
      include: {
        categories: true,
      },
    })

    return NextResponse.json(permissionSet)
  } catch (error) {
    console.error('Permission set update error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
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
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 })
    }

    await prisma.permissionSet.delete({
      where: { id },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Permission set delete error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}