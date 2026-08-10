/**
 * Retreat testimonial videos — Krystalore's "Revive & Thrive Retreat"
 * YouTube playlist (PLY4DtUstl0-t_fuTwmoGzKVLjNB4cwbw9).
 *
 * Titles are the real video titles and thumbnails come straight from YouTube.
 * `who` is only filled in where the video itself names the guest — nothing
 * here is paraphrased or attributed to anyone who didn't say it.
 *
 * Used by /retreat and /pr-retreat via <RetreatTestimonialScroller />.
 */

export type VideoTestimonial = {
  id: string
  title: string
  who?: string
}

export const retreatTestimonials: VideoTestimonial[] = [
  { id: 'qZLf7-hx1Pc', who: 'Jen', title: 'Female Veteran & Military Spouse Testimonial' },
  { id: 'VmEmV0juxGY', who: 'Sarah', title: 'Female Veteran Sponsor Recipient — Revive & Thrive, May 2023' },
  { id: 'jHE6rGalyVM', who: 'Sondra', title: 'Female Veteran Sponsor Recipient — Revive & Thrive, May 2023' },
  { id: 'bfKA7jp0JGQ', title: 'Revive & Thrive Retreat Testimonial' },
  { id: 'ebBQhmerkvo', title: 'Revive & Thrive Retreat Testimonial — thanks Got Our Troops Foundation!' },
  { id: '9qiQCLprldY', title: "Revive & Thrive All-Inclusive Women's Retreat Recap — Costa Rica, Aug 2025" },
  { id: 'QqE5UUqF0Rk', title: 'Costa Rica Revive & Thrive Retreat Meet & Greet — Aug 2025' },
  { id: 'hWOiMG10MoQ', title: 'Revive & Thrive Retreats with Crews Beyond Limits' },
]
