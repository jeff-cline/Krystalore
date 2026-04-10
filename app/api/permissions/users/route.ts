import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/db'
import { getSession } from '@/lib/auth'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')

    if (!userId) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 })
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        permissionOverrides: {
          include: {
            permissionSet: {
              include: {
                categories: true,
              },
            },
          },
        },
      },
    })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    // Get all categories with user's effective permissions
    const allCategories = await prisma.category.findMany({
      include: {
        permissionSets: {
          where: {
            membershipLevel: user.membershipLevel,
          },
        },
      },
    })

    // Calculate effective permissions for each category
    const effectivePermissions = allCategories.map((category) => {
      // Check if user has explicit override for this category
      const override = user.permissionOverrides.find((o) =>
        o.permissionSet.categories.some((c) => c.id === category.id)
      )

      let hasAccess = false

      if (override) {
        // Use explicit override
        hasAccess = override.hasAccess
      } else {
        // Use default membership level access
        const levelOrder = ['FREE', 'BASIC', 'PREMIUM', 'VIP']
        const userLevelIndex = levelOrder.indexOf(user.membershipLevel)
        const categoryLevelIndex = levelOrder.indexOf(category.membershipLevel)
        hasAccess = userLevelIndex >= categoryLevelIndex
      }

      return {
        categoryId: category.id,
        categoryName: category.name,
        hasAccess,
        isOverride: !!override,
      }
    })

    return NextResponse.json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        membershipLevel: user.membershipLevel,
      },
      permissions: effectivePermissions,
      overrides: user.permissionOverrides,
    })
  } catch (error) {
    console.error('User permissions fetch error:', error)
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
    const { userId, permissionSetId, hasAccess } = body

    // Create or update permission override
    const override = await prisma.userPermissionOverride.upsert({
      where: {
        userId_permissionSetId: {
          userId,
          permissionSetId,
        },
      },
      update: {
        hasAccess,
      },
      create: {
        userId,
        permissionSetId,
        hasAccess,
      },
    })

    return NextResponse.json(override)
  } catch (error) {
    console.error('User permission override create error:', error)
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
    const userId = searchParams.get('userId')
    const permissionSetId = searchParams.get('permissionSetId')

    if (!userId || !permissionSetId) {
      return NextResponse.json(
        { error: 'User ID and Permission Set ID are required' },
        { status: 400 }
      )
    }

    await prisma.userPermissionOverride.delete({
      where: {
        userId_permissionSetId: {
          userId,
          permissionSetId,
        },
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('User permission override delete error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}