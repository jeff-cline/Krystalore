// Mermaid Experiences — the tropical edition of the Super Hostess menu.
// Everything Krystalore already hosts, reframed for beach and island stays, with the
// mermaid experiences leading. Reuses the Super Hostess groups verbatim so the two
// pages can never drift apart on shared content.

import { GROUPS as BASE_GROUPS, type Group } from '../super-hostess/data'

export type { Experience, Group } from '../super-hostess/data'

const MERMAID: Group = {
  key: 'mermaid',
  label: 'Mermaid Experiences',
  eyebrow: 'The signature tropical add-on',
  items: [
    {
      title: 'Mermaid Photo Shoots',
      image: '/images/mermaids/mermaid-hero.jpg',
      focus: '50% 62%',
      blurb:
        'A styled shoot on the sand with a real silicone tail, shell crown, and treasure — directed start to finish so nobody has to know how to pose. Guests leave with the photos that make the whole trip worth posting.',
    },
    {
      title: 'Mermaid Makeup',
      image: '/images/mermaids/mermaid-makeup.jpg',
      blurb:
        'Iridescent scales, shimmer, pearls, and a crown — mermaid glam applied for the whole group before the shoot or the party. Beach-proof, camera-ready, and genuinely fun to sit for.',
    },
    {
      title: 'Mermaid Training',
      image: '/images/mermaids/mermaid-training.jpg',
      focus: '50% 40%',
      blurb:
        'Learn to actually swim in the tail — monofin technique, dolphin kick, breath control, and safety, taught in shallow water by a certified coach. All levels, all ages, no experience needed.',
    },
    {
      title: 'Mermaid Parties',
      image: '/images/mermaids/mermaid-parties.jpg',
      blurb:
        'The full production for birthdays, bachelorettes, and family beach days — tails, crowns, glam, games, and a hostess who keeps the whole thing moving. Bring the group; leave with the story.',
    },
  ],
}

export const MERMAID_GROUPS: Group[] = [MERMAID, ...BASE_GROUPS]
