import { getSpeakerContent } from '@/lib/speakerContent'
import SpeakerPageView from '@/components/speaker/SpeakerPageView'

// Content is edited in Admin → Speaker Page and stored in the database, so the
// page is rendered per-request rather than cached at build time. Everything is
// still server-rendered, so titles and descriptions stay visible to search.
export const dynamic = 'force-dynamic'

export default async function SpeakerPage() {
  const content = await getSpeakerContent()
  return <SpeakerPageView content={content} />
}
