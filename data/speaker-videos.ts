export type SpeakerVideo = {
  id: string
  title: string
  thumbnail?: string
}

export type SpeakerVideoCategory = {
  slug: string
  name: string
  description?: string
  videos: SpeakerVideo[]
}

export const SPEAKER_PLAYLIST_URL =
  'https://www.youtube.com/playlist?list=PLY4DtUstl0-uYuj3-IM9g3LA_57_i1YBw'

export function videoUrl(id: string): string {
  return `https://www.youtube.com/watch?v=${id}&list=PLY4DtUstl0-uYuj3-IM9g3LA_57_i1YBw`
}

export function videoThumbnail(v: SpeakerVideo): string {
  return v.thumbnail || `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`
}

export const speakerVideos: SpeakerVideoCategory[] = []
