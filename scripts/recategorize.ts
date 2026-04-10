import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const UPLOADTHING_API_KEY = process.env.UPLOADTHING_API_KEY
if (!UPLOADTHING_API_KEY) throw new Error('Missing UPLOADTHING_API_KEY')

interface FBVideoMeta {
  timestamp: number
  uri: string
  title: string
  message: string
}

function inferCategory(text: string): string | null {
  const t = text.toLowerCase()
  if (t.includes('fighter friday') || t.includes('fighter fit friday') || t.includes('fighter fairy')) return 'Fighter Friday'
  if (t.includes('fighter thursday')) return 'Fighter Friday'
  if ((t.includes('monday') && (t.includes('motivator') || t.includes('burpee') || t.includes('mountain climber') || t.includes('mat'))) || t.includes('motivator monday')) return 'Monday Motivator'
  if (t.includes('wacky wednesday') || t.includes('wacky wed') || t.includes('sea legs')) return 'Wacky Wednesday'
  if (t.includes('taco tuesday')) return 'Taco Tuesday'
  if (t.includes('tutu thursday')) return 'Bonus Workouts'
  if (t.includes('arms') && t.includes('abs')) return 'Arms & Abs'
  if (t.includes('sexy arms')) return 'Arms & Abs'
  if (t.includes('wash cloth') || t.includes('washcloth')) return 'Bonus Workouts'
  if (t.includes('pumpkin pump')) return 'Weighted Workouts'
  if (t.includes('weighted')) return 'Weighted Workouts'
  if (t.includes('bombshell bootcamp') || t.includes('bootcamp') || t.includes('burnout to freedom')) return 'Health is Wealth'
  if (t.includes('health is wealth')) return 'Health is Wealth'
  if (t.includes('2nd sat') || t.includes('deck of cards')) return '2nd Saturdays'
  if (t.includes('mindset') || t.includes('transition')) return 'Mindset Lives'
  if (t.includes('dance')) return 'Dance Series'
  if (t.includes('holiday')) return 'Holiday Series'
  return null
}

async function loadMetadata(): Promise<Map<string, FBVideoMeta>> {
  // Fetch file list to find live_videos.json
  const res = await fetch('https://api.uploadthing.com/v6/listFiles', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-uploadthing-api-key': UPLOADTHING_API_KEY },
    body: JSON.stringify({ offset: 1500 }),
  })
  const { files } = await res.json()
  const jsonFile = files.find((f: any) => f.name.includes('live_videos.json') && f.status === 'Uploaded')
  if (!jsonFile) { console.log('No live_videos.json found'); return new Map() }

  console.log('Downloading live_videos.json...')
  const data: any[] = await (await fetch(`https://utfs.io/f/${jsonFile.key}`)).json()
  console.log(`Loaded ${data.length} metadata entries`)

  const map = new Map<string, FBVideoMeta>()
  for (const entry of data) {
    let uri = '', title = '', message = ''
    for (const lv of entry.label_values || []) {
      if (lv.label === 'Title' && lv.value) title = lv.value
      if (lv.label === 'Message' && lv.value) message = lv.value
      if (lv.label === 'Video') {
        for (const m of lv.media || []) { uri = m.uri || '' }
      }
    }
    if (uri) {
      const fn = uri.split('/').pop() || ''
      map.set(fn, { timestamp: entry.timestamp || 0, uri, title, message })
    }
  }
  return map
}

async function run() {
  const metaMap = await loadMetadata()
  console.log(`Metadata map: ${metaMap.size} entries`)

  // Get all categories
  const categories = await prisma.category.findMany()
  const catByName = new Map(categories.map(c => [c.name, c]))

  // Also need to create categories that don't exist yet
  async function getCatId(name: string): Promise<string> {
    let cat = catByName.get(name)
    if (!cat) {
      const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
      cat = await prisma.category.upsert({
        where: { slug },
        update: {},
        create: { name, slug, description: `${name} workout videos`, membershipLevel: 'BASIC', sortOrder: 0 },
      })
      catByName.set(name, cat)
    }
    return cat.id
  }

  // Get all videos
  const videos = await prisma.video.findMany({ select: { id: true, originalName: true, title: true, category: true, description: true } })
  console.log(`Processing ${videos.length} videos...`)

  let updated = 0, categorizedFromMeta = 0, categorizedFromPath = 0

  for (const video of videos) {
    if (!video.originalName) continue
    const filename = video.originalName.split('/').pop() || ''
    const meta = metaMap.get(filename)

    let newCategory: string | null = null
    let newTitle: string | null = null
    let newDescription: string | null = null

    // 1. Try path-based categorization (Categorized/ folder)
    if (video.originalName.startsWith('Categorized/')) {
      const after = video.originalName.slice('Categorized/'.length)
      const parts = after.split('/')

      if (parts.length > 1) {
        const folder = parts[0].toLowerCase()
        const folderMap: Record<string, string> = {
          'fighter friday': 'Fighter Friday', 'monday motivator': 'Monday Motivator',
          'wacky wednesday': 'Wacky Wednesday', 'arms & abs': 'Arms & Abs',
          'bonus workouts': 'Bonus Workouts', 'weighted workouts': 'Weighted Workouts',
          'health is wealth': 'Health is Wealth', '2nd saturdays': '2nd Saturdays',
          'mindset lives': 'Mindset Lives', 'taco tuesday': 'Taco Tuesday',
        }
        // Skip "Uploaded to Circle" / "Uploaded in Circle" subfolders
        if (folder !== 'uploaded to circle' && folder !== 'uploaded in circle') {
          newCategory = folderMap[folder] || null
        }
        // If subfolder was Circle, go up one level
        if (!newCategory && parts.length > 2) {
          const parentFolder = parts[0].toLowerCase()
          newCategory = folderMap[parentFolder] || null
        }
      }

      // Infer from filename
      if (!newCategory) {
        newCategory = inferCategory(after)
      }

      // Use clean filename as title
      const cleanName = parts[parts.length - 1].replace(/\.[^/.]+$/, '')
      if (cleanName && !cleanName.match(/^AQ[A-Za-z0-9_]{30,}/)) {
        newTitle = cleanName
      }

      if (newCategory) categorizedFromPath++
    }

    // 2. Try metadata-based categorization
    if (!newCategory && meta?.message) {
      newCategory = inferCategory(meta.message)
      if (newCategory) categorizedFromMeta++
    }
    if (!newCategory && meta?.title) {
      newCategory = inferCategory(meta.title)
      if (newCategory) categorizedFromMeta++
    }

    // 3. Use metadata for title/description
    if (meta?.message) {
      const msg = meta.message.replace(/@everyone/gi, '').replace(/\s+/g, ' ').trim()
      if (msg.length > 3 && msg.length < 200) {
        if (!newTitle || newTitle === 'Untitled Video' || (newTitle?.match(/^AQ[A-Za-z0-9_]{30,}/))) {
          newTitle = msg
        }
        if (!video.description || video.description === 'Imported from UploadThing - needs categorization' || video.description.includes('Imported video')) {
          newDescription = msg
        }
      }
    }

    // 4. Apply updates
    const updateData: any = {}
    if (newCategory && video.category === 'Uncategorized') {
      updateData.category = newCategory
      updateData.categoryId = await getCatId(newCategory)
      updateData.membershipLevel = 'BASIC'
    }
    if (newTitle && (video.title === 'Untitled Video' || video.title?.match(/^AQ[A-Za-z0-9_]{30,}/) || video.title?.match(/^Uncategorized/))) {
      updateData.title = newTitle
    }
    if (newDescription) {
      updateData.description = newDescription
    }

    if (Object.keys(updateData).length > 0) {
      await prisma.video.update({ where: { id: video.id }, data: updateData })
      updated++
    }
  }

  // Print results
  const finalCats = await prisma.category.findMany({ include: { _count: { select: { videos: true } } }, orderBy: { sortOrder: 'asc' } })
  console.log('\n=== RESULTS ===')
  console.log(`Updated: ${updated}`)
  console.log(`Categorized from path: ${categorizedFromPath}`)
  console.log(`Categorized from metadata: ${categorizedFromMeta}`)
  console.log('\nCategory distribution:')
  for (const cat of finalCats) {
    console.log(`  ${cat.name}: ${cat._count.videos}`)
  }
}

run().then(() => prisma.$disconnect()).catch(e => { console.error(e); prisma.$disconnect() })
