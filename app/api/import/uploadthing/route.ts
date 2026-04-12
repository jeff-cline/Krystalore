import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/db'
import { getSession } from '@/lib/auth'

const UPLOADTHING_API_KEY = process.env.UPLOADTHING_API_KEY ?? ''

interface UploadThingFile {
  id: string
  key: string
  name: string
  status: string
  size: number
  uploadedAt: number
  customId: string | null
}

// Metadata entry from Facebook's live_videos.json export
interface FBVideoMeta {
  timestamp: number
  uri: string       // e.g. "your_facebook_activity/live_videos/AQM...mp4"
  title: string
  description: string
  message: string   // This often has the workout type: "Wacky Wednesday @everyone"
}

// ---- UploadThing pagination ----

async function fetchPage(offset: number): Promise<{ files: UploadThingFile[]; hasMore: boolean }> {
  const res = await fetch('https://api.uploadthing.com/v6/listFiles', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-uploadthing-api-key': UPLOADTHING_API_KEY },
    body: JSON.stringify({ offset }),
  })
  if (!res.ok) throw new Error(`UploadThing API ${res.status}`)
  return res.json()
}

async function getAllFiles(): Promise<UploadThingFile[]> {
  const all: UploadThingFile[] = []
  let offset = 0
  while (true) {
    const { files, hasMore } = await fetchPage(offset)
    all.push(...files)
    if (!hasMore || files.length === 0) break
    offset += files.length
  }
  return all
}

// ---- Facebook metadata loading ----

async function loadFBMetadata(files: UploadThingFile[]): Promise<Map<string, FBVideoMeta>> {
  // Find the live_videos.json file on UploadThing
  const jsonFile = files.find(f => f.name.includes('live_videos.json') && f.status === 'Uploaded')
  if (!jsonFile) {
    console.log('No live_videos.json found on UploadThing')
    return new Map()
  }

  console.log(`Found live_videos.json (${(jsonFile.size / 1024).toFixed(0)} KB), downloading...`)
  const url = `https://utfs.io/f/${jsonFile.key}`
  const res = await fetch(url)
  if (!res.ok) {
    console.error(`Failed to fetch live_videos.json: ${res.status}`)
    return new Map()
  }

  const data: any[] = await res.json()
  console.log(`Loaded ${data.length} Facebook video metadata entries`)

  // Build a map: filename (without path) -> metadata
  const metaMap = new Map<string, FBVideoMeta>()

  for (const entry of data) {
    let uri = ''
    let title = ''
    let description = ''
    let message = ''

    for (const lv of entry.label_values || []) {
      if (lv.label === 'Title' && lv.value) title = lv.value
      if (lv.label === 'Message' && lv.value) message = lv.value
      if (lv.label === 'Video') {
        for (const m of lv.media || []) {
          uri = m.uri || ''
          if (m.description) description = m.description
          if (m.title && !title) title = m.title
        }
      }
    }

    if (uri) {
      // Extract just the filename from the full path
      const filename = uri.split('/').pop() || ''
      metaMap.set(filename, {
        timestamp: entry.timestamp || 0,
        uri,
        title,
        description,
        message,
      })
    }
  }

  console.log(`Built metadata map with ${metaMap.size} entries`)
  return metaMap
}

// ---- Category inference ----

function inferCategoryFromText(text: string): string | null {
  const t = text.toLowerCase()

  if (t.includes('fighter friday') || t.includes('fighter fit friday')) return 'Fighter Friday'
  if (t.includes('fighter thursday')) return 'Fighter Friday' // Close enough
  if (t.includes('monday') && (t.includes('motivator') || t.includes('burpee') || t.includes('mountain climber') || t.includes('mat'))) return 'Monday Motivator'
  if (t.includes('wacky wednesday') || t.includes('wacky wed')) return 'Wacky Wednesday'
  if (t.includes('taco tuesday')) return 'Taco Tuesday'
  if (t.includes('arms') && t.includes('abs')) return 'Arms & Abs'
  if (t.includes('arms and abs') || t.includes('arms & abs')) return 'Arms & Abs'
  if (t.includes('bonus') || t.includes('wash cloth workout')) return 'Bonus Workouts'
  if (t.includes('weighted') || t.includes('pumpkin pump')) return 'Weighted Workouts'
  if (t.includes('health is wealth') || t.includes('bombshell bootcamp')) return 'Health is Wealth'
  if (t.includes('2nd sat') || t.includes('2nd saturday') || t.includes('deck of cards')) return '2nd Saturdays'
  if (t.includes('mindset') || t.includes('transition')) return 'Mindset Lives'
  if (t.includes('tutu thursday')) return 'Bonus Workouts'
  if (t.includes('bootcamp') || t.includes('burnout to freedom')) return 'Health is Wealth'
  if (t.includes('sexy arms')) return 'Arms & Abs'
  if (t.includes('sea legs')) return 'Wacky Wednesday'
  if (t.includes('dance')) return 'Dance Series'
  if (t.includes('holiday')) return 'Holiday Series'

  return null
}

function inferCategoryFromPath(filepath: string): { category: string; isUncategorized: boolean } {
  const path = filepath.toLowerCase()

  if (path.startsWith('categorized/')) {
    const after = filepath.slice('Categorized/'.length)
    const parts = after.split('/')

    if (parts.length > 1) {
      // Has subfolder
      const folder = parts[0]
      const mapped = formatCategoryName(folder)
      return { category: mapped, isUncategorized: false }
    }

    // Root of categorized - infer from filename
    const cat = inferCategoryFromText(parts[0])
    return { category: cat || 'General', isUncategorized: false }
  }

  return { category: 'Uncategorized', isUncategorized: true }
}

function formatCategoryName(folderName: string): string {
  const map: Record<string, string> = {
    'fighter friday': 'Fighter Friday',
    'monday motivator': 'Monday Motivator',
    'wacky wednesday': 'Wacky Wednesday',
    'arms & abs': 'Arms & Abs',
    'bonus workouts': 'Bonus Workouts',
    'weighted workouts': 'Weighted Workouts',
    'health is wealth': 'Health is Wealth',
    '2nd saturdays': '2nd Saturdays',
    'mindset lives': 'Mindset Lives',
    'taco tuesday': 'Taco Tuesday',
    'uploaded to circle': '', // Skip this subfolder name
    'uploaded in circle': '',
  }
  const lower = folderName.toLowerCase()
  if (map[lower] !== undefined) return map[lower] || ''
  return folderName.split(/[-_\s]+/).map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ')
}

function getFileType(filename: string): 'VIDEO' | 'IMAGE' | 'OTHER' {
  const ext = filename.toLowerCase().split('.').pop() || ''
  if (['mp4', 'mov', 'avi', 'mkv', 'webm', 'm4v'].includes(ext)) return 'VIDEO'
  if (['jpg', 'jpeg', 'png', 'webp', 'gif', 'svg'].includes(ext)) return 'IMAGE'
  return 'OTHER'
}

function buildTitle(file: UploadThingFile, meta: FBVideoMeta | undefined): string {
  // Use Facebook message as title if it's descriptive
  if (meta?.message) {
    // Clean up the message: remove @everyone, trim
    let msg = meta.message.replace(/@everyone/gi, '').replace(/\s+/g, ' ').trim()
    if (msg.length > 5 && msg.length < 200) return msg
  }
  if (meta?.title && meta.title.length > 2) return meta.title

  // Fall back to filename-based title from Categorized path
  const parts = file.name.split('/')
  const fn = parts[parts.length - 1]
  const name = fn.replace(/\.[^/.]+$/, '') // Remove extension

  // If it's a recognizable name (from Categorized folder), clean it up
  if (file.name.startsWith('Categorized/')) {
    return name
      .replace(/\d{1,2}[-_]\d{1,2}[-_]\d{2,4}/g, '') // Remove dates
      .replace(/[_-]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim() || name
  }

  // For uncategorized with hash filenames, just use a generic title
  if (name.match(/^AQ[A-Za-z0-9_]{30,}/)) {
    return meta?.message?.replace(/@everyone/gi, '').trim() || 'Untitled Video'
  }

  return name
}

async function ensureCategory(name: string): Promise<string> {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
  let cat = await prisma.category.findUnique({ where: { slug } })
  if (!cat) {
    cat = await prisma.category.create({
      data: {
        name,
        slug,
        description: `${name} workout videos`,
        membershipLevel: name === 'Uncategorized' ? 'FREE' : 'BASIC',
        sortOrder: name === 'Uncategorized' ? 999 : 0,
      },
    })
  }
  return cat.id
}

// ---- Main import handler ----

export async function POST(req: NextRequest) {
  try {
    const session = await getSession()
    if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    const role = (session.user as any).role
    if (!['GOD', 'ADMIN'].includes(role)) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

    console.log('Starting UploadThing import...')

    // Step 1: Fetch all files
    const allFiles = await getAllFiles()
    console.log(`Found ${allFiles.length} files on UploadThing`)

    // Step 2: Load Facebook metadata for matching
    const metaMap = await loadFBMetadata(allFiles)

    // Step 3: Get uploader
    const uploader = await prisma.user.findFirst({ where: { role: 'GOD' } })
    if (!uploader) return NextResponse.json({ error: 'No admin user found' }, { status: 500 })

    const results = { total: allFiles.length, imported: 0, skipped: 0, errors: 0, categorized: 0, categories: new Set<string>() }

    // Step 4: Process each file
    for (const file of allFiles) {
      try {
        if (file.status !== 'Uploaded') { results.skipped++; continue }

        // Skip if already imported
        const existing = await prisma.video.findFirst({ where: { fileKey: file.key } })
        if (existing) { results.skipped++; continue }

        const fileType = getFileType(file.name)
        const fileUrl = `https://utfs.io/f/${file.key}`

        // Extract just the video filename for metadata matching
        const videoFilename = file.name.split('/').pop() || ''
        const meta = metaMap.get(videoFilename)

        // Determine category: path first, then metadata message, then uncategorized
        let { category, isUncategorized } = inferCategoryFromPath(file.name)

        // If uncategorized, try to categorize from Facebook metadata
        if (isUncategorized && meta?.message) {
          const inferred = inferCategoryFromText(meta.message)
          if (inferred) {
            category = inferred
            isUncategorized = false
            results.categorized++
          }
        }

        // Also try the title if message didn't match
        if (isUncategorized && meta?.title) {
          const inferred = inferCategoryFromText(meta.title)
          if (inferred) {
            category = inferred
            isUncategorized = false
            results.categorized++
          }
        }

        results.categories.add(category)
        const categoryId = await ensureCategory(category)

        // Build title
        const title = buildTitle(file, meta)

        // Build description from metadata
        let description = ''
        if (meta?.message) {
          description = meta.message.replace(/@everyone/gi, '').trim()
        }
        if (meta?.description && meta.description !== description) {
          description = description ? `${description}\n\n${meta.description}` : meta.description
        }
        if (!description) {
          description = fileType === 'IMAGE' ? 'Portfolio image' :
                       fileType === 'OTHER' ? 'Resource file' :
                       isUncategorized ? 'Imported video - needs categorization' :
                       `${category} workout video`
        }

        // Determine publish state and timestamps
        const createdDate = meta?.timestamp ? new Date(meta.timestamp * 1000) : new Date(file.uploadedAt)

        await prisma.video.create({
          data: {
            title,
            description,
            category,
            categoryId,
            fileKey: file.key,
            fileUrl,
            fileType,
            fileSize: file.size,
            mimeType: fileType === 'VIDEO' ? 'video/mp4' : fileType === 'IMAGE' ? 'image/jpeg' : 'application/octet-stream',
            originalName: file.name,
            isPublished: fileType === 'VIDEO' || fileType === 'IMAGE', // Publish videos and images
            membershipLevel: isUncategorized || fileType === 'IMAGE' ? 'FREE' : 'BASIC',
            uploaderId: uploader.id,
            createdAt: createdDate,
          },
        })

        results.imported++
      } catch (error) {
        console.error(`Error importing ${file.name}:`, error)
        results.errors++
      }
    }

    console.log('Import completed:', { ...results, categories: Array.from(results.categories) })

    return NextResponse.json({
      success: true,
      message: `Import complete: ${results.imported} imported, ${results.skipped} skipped, ${results.categorized} auto-categorized from metadata, ${results.errors} errors`,
      results: {
        total: results.total,
        imported: results.imported,
        skipped: results.skipped,
        errors: results.errors,
        categorizedFromMetadata: results.categorized,
        categories: Array.from(results.categories),
      },
    })
  } catch (error) {
    console.error('Import error:', error)
    return NextResponse.json({ error: 'Import failed', details: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 })
  }
}
