// THE SECRET WEAPON — Specialized Divisions (add-on category programs).
// Each mirrors the Politician template Jeff supplied: Small / Medium / Large tiers
// + Crisis Management + The Vault (confidentiality) + Monetization (fundraising
// equivalent) + Exclusive Partnership (first-right-of-refusal) + Ethics + Philosophy.
// Politician content is verbatim from Jeff; Celebrity / Athletes / High-Profile were
// built from research (Jun 2026). Edit freely — content is data, not markup.

export type DivisionTier = {
  name: string
  subtitle: string
  intro: string
  services: string[]
}

export type DivisionSection = {
  intro: string
  items: string[]
  note?: string
}

export type Division = {
  slug: string
  label: string          // button label
  tag: string            // confidential subtitle
  programTitle: string
  programSubtitle: string
  icon: 'star' | 'crown' | 'trophy' | 'shield'
  intro: string          // "We operate behind the scenes…"
  mission: string[]
  tiers: DivisionTier[]
  crisis: DivisionSection
  vault: DivisionSection
  monetization: { title: string } & DivisionSection
  exclusive: { intro: string; items: string[] }
  ethics: { intro: string; items: string[]; note: string }
  philosophy: string[]
}

const VAULT_LOYALTY = (who: string) =>
  `Our loyalty is to the ${who}. We maintain confidentiality while helping align stakeholders toward shared objectives.`

const ETHICS_REQUIRES = [
  'Compliance with all applicable laws',
  'Honest communications',
  'Ethical conduct',
  'Respectful treatment of staff and constituents',
  "Protection of the firm's reputation",
]
const ETHICS_NOTE =
  "Material misconduct, unlawful behavior, or actions that substantially damage the firm's reputation may constitute grounds for immediate termination under the agreement. Any payment obligations that have accrued prior to termination remain due in accordance with the contract."

export const DIVISIONS: Division[] = [
  /* ─────────────────────────  CELEBRITY  ───────────────────────── */
  {
    slug: 'celebrity',
    label: 'Celebrity',
    tag: 'Confidential · Talent & Brand Advisory',
    programTitle: 'The Spotlight Program',
    programSubtitle: 'Strategic Talent Advisory & Career Advancement',
    icon: 'star',
    intro:
      'We operate behind the scenes. Our role is to make the talent more bankable, more protected, more disciplined, and more in command of their own narrative — in every room, every cycle, every headline. We are not the spotlight. We are the hand that aims it.',
    mission: [
      'Build an enduring, ownable brand',
      'Command the narrative',
      'Monetize influence and attention',
      'Protect their reputation',
      'Manage the team and the noise',
      'Convert fame into legacy and wealth',
    ],
    tiers: [
      {
        name: 'Image Foundation',
        subtitle: 'Small Package',
        intro: 'Designed for rising or transitioning talent establishing a serious, ownable brand.',
        services: [
          'Brand strategy and positioning',
          'Narrative and messaging',
          'Talent coaching and presence',
          'Media and interview training',
          'Social media strategy and content calendar',
          'Publicist and press coordination',
          'Appearance and red-carpet preparation',
          'Image and styling direction',
          'Talent-team coordination (agent, manager, legal)',
          'Endorsement readiness',
          'Strategic introductions',
          'Communications guidance',
          'Weekly strategy sessions',
          'Opportunity identification and vetting',
          'Persona and message discipline',
        ],
      },
      {
        name: 'Brand Growth',
        subtitle: 'Medium Package',
        intro: 'Everything in the Image Foundation Package plus:',
        services: [
          'Executive advisor ("Chief Whisperer")',
          'Senior brand strategist',
          'Endorsement and brand-deal cultivation',
          'Major partnership relationship management',
          'Influencer and collaborator engagement',
          'Platform and distribution strategy',
          'Profile and feature placement strategy',
          'Surrogate and team management',
          'Reputation and social-listening monitoring',
          'Fan and community strategy',
          'Crisis-readiness planning',
          'Cause and philanthropic alignment',
          'Leadership and team development',
          'Long-term career-arc roadmap',
        ],
      },
      {
        name: 'Legacy Partnership',
        subtitle: 'Large Package',
        intro: 'Our highest level engagement. We become the trusted strategic advisor across the entire career. Includes everything above plus:',
        services: [
          'Exclusive strategic counsel',
          'Daily executive advisory',
          'A war room for launches, releases, and premieres',
          'High-level partnership and equity-deal strategy',
          'National and global relationship development',
          'Business and venture architecture (brands, products, ventures)',
          'Family advisory',
          'Team and entourage management',
          'Transition planning across mediums (acting, music, business)',
          'National media and narrative strategy',
          'Thought-leadership planning',
          'Voice and ghostwriting oversight',
          'Event strategy',
          'Confidential sounding board',
          'Executive-presence coaching',
          'Long-range legacy and wealth planning',
        ],
      },
    ],
    crisis: {
      intro: 'When circumstances require immediate response, our team shifts into Crisis Operations. Speed is the deciding factor. Examples include:',
      items: [
        'Reputation management',
        'Communications response',
        'Media coordination',
        'Scandal and allegation response',
        'Narrative recovery',
        'Social-media response strategy',
        'Paparazzi and leak containment',
        'Sponsor and partner communications',
        'Team and management coordination',
        'Message discipline',
        'Legal-team coordination (communications only)',
        'Family communications guidance',
        'Rapid-response planning',
        'Public-trust restoration and comeback architecture',
      ],
      note: 'Emergency engagements require dedicated resources and are billed separately according to the Crisis Response Schedule.',
    },
    vault: {
      intro: 'We serve as Switzerland. Everything shared with us remains confidential. We coordinate among:',
      items: ['Managers', 'Agents', 'Publicists', 'Labels and studios', 'Sponsors and brand partners', 'Collaborators', 'Family', 'Security', 'Business partners'],
      note: VAULT_LOYALTY('Talent'),
    },
    monetization: {
      title: 'Monetization & Brand Capital',
      intro: 'We assist with:',
      items: [
        'Endorsement and brand-deal strategy',
        'Partnership and collaboration sourcing',
        'Licensing and product strategy',
        'Equity-over-cash deal structuring',
        'Relationship cultivation',
        'Introduction strategy',
        'Negotiation support',
        'Follow-up systems',
      ],
      note: 'When our introductions directly result in deals or capital commitments, a mutually agreed success fee may apply, as set forth in the engagement agreement and in compliance with all applicable laws and guild rules.',
    },
    exclusive: {
      intro: 'When we help build a winning brand, we seek the opportunity to keep serving that talent as they grow. Accordingly:',
      items: [
        'We receive the first opportunity to provide strategic advisory services for the talent’s subsequent ventures, subject to mutual agreement on terms.',
        'We maintain continuity of institutional knowledge, relationships, messaging, and long-term planning.',
        'Our role is designed to grow alongside the talent’s career.',
      ],
    },
    ethics: { intro: 'We represent talent of integrity. Our engagements require:', items: ETHICS_REQUIRES, note: ETHICS_NOTE },
    philosophy: [
      'Fame moves fast.',
      'Lasting careers require more than visibility.',
      'They require trusted counsel.',
      'Trusted relationships.',
      'Disciplined execution.',
      'A calm voice when the headlines turn.',
      'A long-term strategy.',
      'We are the strategic partner behind the scenes helping talent build influence, protect their name, and turn attention into legacy.',
    ],
  },

  /* ─────────────────────────  HIGH-PROFILE  ───────────────────────── */
  {
    slug: 'high-profile',
    label: 'High Profile',
    tag: 'Confidential · Private Principal Advisory',
    programTitle: 'The Private Principal Program',
    programSubtitle: 'Strategic Advisory for Public Figures, Executives & Families of Means',
    icon: 'crown',
    intro:
      'We operate behind the scenes. Our role is to make the principal more protected, more organized, more connected, and more deliberate — so the name, the wealth, and the family compound instead of leak. We are not the name on the door. We are the chief of staff behind it.',
    mission: [
      'Protect the name and the family',
      'Bring order to complexity',
      'Build and guard the right relationships',
      'Steward reputation and privacy',
      'Align the advisors',
      'Architect a multi-generational legacy',
    ],
    tiers: [
      {
        name: 'Private Foundation',
        subtitle: 'Small Package',
        intro: 'Designed for principals bringing order, privacy, and intention to a high-visibility life.',
        services: [
          'Personal and professional positioning',
          'Reputation and online-presence audit',
          'Privacy and digital-footprint hardening',
          'Advisor and household coordination',
          'Executive calendar and priority management',
          'Relationship and network mapping',
          'Stakeholder management',
          'Strategic introductions',
          'Communications guidance',
          'Media readiness',
          'Opportunity identification and vetting',
          'Weekly strategy sessions',
          'Discreet problem-solving',
        ],
      },
      {
        name: 'Strategic Growth',
        subtitle: 'Medium Package',
        intro: 'Everything in the Private Foundation Package plus:',
        services: [
          'Executive advisor ("Chief Whisperer")',
          'Chief-of-staff function',
          'Family-office and advisor coordination (legal, tax, wealth, security)',
          'Reputation, search, and AI-result monitoring',
          'Philanthropy and foundation strategy',
          'Board and platform positioning',
          'Coalition and relationship development',
          'Government and community affairs guidance',
          'Executive briefing books',
          'Surrogate and representative management',
          'Security and travel coordination liaison',
          'Event and appearance strategy',
          'Succession and next-generation education planning',
          'Long-term legacy roadmap',
        ],
      },
      {
        name: 'Legacy Partnership',
        subtitle: 'Large Package',
        intro: 'Our highest level engagement. We become the trusted strategic advisor across the principal’s public life and the family’s future. Includes everything above plus:',
        services: [
          'Exclusive strategic counsel',
          'Daily executive advisory',
          'A private war room',
          'High-level relationship and capital strategy',
          'National and global network development',
          'Multi-advisor stakeholder architecture',
          'Executive decision support',
          'Family advisory and governance',
          'Next-generation leadership coaching',
          'Transition and succession planning',
          'Philanthropic legacy architecture',
          'National media and narrative strategy',
          'Thought-leadership planning',
          'Speechwriting oversight',
          'Event strategy',
          'Confidential sounding board',
          'Executive-presence coaching',
          'Multi-generational legacy planning',
        ],
      },
    ],
    crisis: {
      intro: 'When circumstances require immediate response, our team shifts into Crisis Operations. Examples include:',
      items: [
        'Reputation management',
        'Communications response',
        'Media coordination',
        'Litigation communications',
        'Narrative recovery',
        'Executive decision support',
        'Social-media response strategy',
        'Stakeholder reassurance',
        'Family communications guidance',
        'Household and staff coordination',
        'Message discipline',
        'Legal-team coordination (communications only)',
        'Privacy-breach and leak response',
        'Rapid-response planning',
        'Public-trust restoration',
      ],
      note: 'Emergency engagements require dedicated resources and are billed separately according to the Crisis Response Schedule.',
    },
    vault: {
      intro: 'We serve as Switzerland. Everything shared with us remains confidential. We coordinate among:',
      items: ['Family', 'Advisors', 'Attorneys', 'Wealth managers', 'Security', 'Household staff', 'Business partners', 'Philanthropic partners'],
      note: VAULT_LOYALTY('Principal'),
    },
    monetization: {
      title: 'Capital & Opportunity',
      intro: 'We assist with:',
      items: [
        'Deal and opportunity strategy',
        'Relationship cultivation',
        'Introduction strategy',
        'Capital and partnership planning',
        'Philanthropic capital strategy',
        'Board and venture introductions',
        'Follow-up systems',
      ],
      note: 'When our introductions directly result in capital commitments, a mutually agreed success fee may apply, as set forth in the engagement agreement and in compliance with all applicable laws.',
    },
    exclusive: {
      intro: 'When we help build a protected, well-ordered operation, we seek the opportunity to keep serving the principal as their world grows. Accordingly:',
      items: [
        'We receive the first opportunity to provide strategic advisory services for the principal’s subsequent ventures and the next generation, subject to mutual agreement on terms.',
        'We maintain continuity of institutional knowledge, relationships, messaging, and long-term planning.',
        'Our role is designed to grow alongside the family’s legacy.',
      ],
    },
    ethics: { intro: 'We represent principals of integrity. Our engagements require:', items: ETHICS_REQUIRES, note: ETHICS_NOTE },
    philosophy: [
      'Visibility invites scrutiny.',
      'Protecting a name requires more than silence.',
      'It requires trusted counsel.',
      'Trusted relationships.',
      'Disciplined execution.',
      'A calm voice during difficult moments.',
      'A long-term strategy.',
      'We are the strategic partner behind the scenes helping principals protect their name, order their world, and build a legacy that lasts generations.',
    ],
  },

  /* ─────────────────────────  PROFESSIONAL ATHLETES  ───────────────────────── */
  {
    slug: 'athletes',
    label: 'Professional Athletes',
    tag: 'Confidential · Athlete Advisory & Brand Advancement',
    programTitle: 'The Franchise Program',
    programSubtitle: 'Strategic Advisory for the Athlete On and Off the Field',
    icon: 'trophy',
    intro:
      'We operate behind the scenes. Our role is to make the athlete more valuable, more protected, more disciplined, and more prepared for the day the jersey comes off. We are not on the field. We are the strategist in the tunnel.',
    mission: [
      'Maximize earning power',
      'Build a brand bigger than the sport',
      'Protect their reputation',
      'Win the money game',
      'Stay ready through injury and transition',
      'Build life and legacy beyond the game',
    ],
    tiers: [
      {
        name: 'Combine Foundation',
        subtitle: 'Small Package',
        intro: 'Designed for rising and early-career athletes — including NIL — building a serious brand and discipline early.',
        services: [
          'Personal brand strategy and positioning',
          'NIL strategy and deal readiness',
          'Social media strategy and content calendar',
          'Media and interview training',
          'Agent and representation coordination',
          'Endorsement readiness',
          'Financial-discipline foundations and advisor introductions',
          'Off-field conduct and image discipline',
          'Family and inner-circle education',
          'Strategic introductions',
          'Communications guidance',
          'Weekly strategy sessions',
          'Appearance and community strategy',
          'Opportunity identification and vetting',
        ],
      },
      {
        name: 'Pro Growth',
        subtitle: 'Medium Package',
        intro: 'Everything in the Combine Foundation Package plus:',
        services: [
          'Executive advisor ("Chief Whisperer")',
          'Senior brand strategist',
          'Endorsement and sponsorship cultivation',
          'Major-partner relationship management',
          'NIL, collective, and licensing strategy',
          'Agent and contract-negotiation coordination',
          'Wealth-team and financial-discipline oversight (planner, CPA introductions)',
          'Media and narrative management',
          'Foundation and charity strategy',
          'Reputation and social-listening monitoring',
          'Injury and comeback communications planning',
          'Leadership and locker-room presence',
          'Long-term career and money roadmap',
        ],
      },
      {
        name: 'Legacy Partnership',
        subtitle: 'Large Package',
        intro: 'Our highest level engagement. We become the trusted strategic advisor across the whole career — and the life after it. Includes everything above plus:',
        services: [
          'Exclusive strategic counsel',
          'Daily executive advisory',
          'A war room for free agency, drafts, and contract years',
          'High-level investment and equity-deal strategy',
          'National and global relationship development',
          'Business and venture architecture (brands, franchises, ventures)',
          'Family advisory',
          'Team and entourage management',
          'Post-career transition planning (broadcasting, ownership, business, coaching)',
          'National media and narrative strategy',
          'Thought-leadership planning',
          'Voice and ghostwriting oversight',
          'Event strategy',
          'Confidential sounding board',
          'Executive-presence coaching',
          'Generational wealth and legacy planning',
        ],
      },
    ],
    crisis: {
      intro: 'When circumstances require immediate response, our team shifts into Crisis Operations. Speed is the deciding factor. Examples include:',
      items: [
        'Reputation management',
        'Off-field incident response',
        'Injury and status communications',
        'Allegation response',
        'Narrative recovery',
        'Social-media response strategy',
        'Trade, release, and contract-dispute communications',
        'Sponsor and team communications',
        'Family communications guidance',
        'Message discipline',
        'Legal-team coordination (communications only)',
        'Rapid-response planning',
        'Public-trust restoration and comeback architecture',
      ],
      note: 'Emergency engagements require dedicated resources and are billed separately according to the Crisis Response Schedule.',
    },
    vault: {
      intro: 'We serve as Switzerland. Everything shared with us remains confidential. We coordinate among:',
      items: ['Agents', 'Financial advisors', 'Teams and front offices', 'Sponsors', 'Collectives', 'Trainers', 'Family', 'Business partners'],
      note: VAULT_LOYALTY('Athlete'),
    },
    monetization: {
      title: 'Monetization & Brand Capital',
      intro: 'We assist with:',
      items: [
        'Endorsement and NIL strategy',
        'Deal and sponsorship sourcing',
        'Licensing and product strategy',
        'Equity-over-cash deal structuring',
        'Investment introductions',
        'Relationship cultivation',
        'Negotiation support',
        'Follow-up systems',
      ],
      note: 'When our introductions directly result in deals or capital commitments, a mutually agreed success fee may apply, as set forth in the engagement agreement and in compliance with all applicable league, NIL, and agent regulations.',
    },
    exclusive: {
      intro: 'When we help build a winning operation, we seek the opportunity to keep serving that athlete through every contract and the career beyond. Accordingly:',
      items: [
        'We receive the first opportunity to provide strategic advisory services for the athlete’s subsequent contracts and post-career ventures, subject to mutual agreement on terms.',
        'We maintain continuity of institutional knowledge, relationships, messaging, and long-term planning.',
        'Our role is designed to grow alongside the athlete’s career and life after the game.',
      ],
    },
    ethics: { intro: 'We represent athletes of integrity. Our engagements require:', items: ETHICS_REQUIRES, note: ETHICS_NOTE },
    philosophy: [
      'The clock on a playing career runs fast.',
      'Winning the money game requires more than talent.',
      'It requires trusted counsel.',
      'Trusted relationships.',
      'Disciplined execution.',
      'A calm voice through injury and adversity.',
      'A long-term strategy.',
      'We are the strategic partner behind the scenes helping athletes build influence, protect their name, and turn a career into a legacy that outlasts the game.',
    ],
  },

  /* ─────────────────────────  POLITICIANS (verbatim from Jeff)  ───────────────────────── */
  {
    slug: 'politicians',
    label: 'Politicians',
    tag: 'Confidential · Executive-Level Political Advisory',
    programTitle: 'Strategic Political Advisory & Campaign Advancement',
    programSubtitle: 'Win Elections · Raise Capital · Build a Legacy',
    icon: 'shield',
    intro:
      'We operate behind the scenes. Our role is to make the candidate more effective, more disciplined, more connected, better funded, and better positioned for every election cycle. We are not the public face. We are the trusted advisor behind the curtain.',
    mission: [
      'Win elections',
      'Raise more capital',
      'Build stronger relationships',
      'Protect their reputation',
      'Manage complexity',
      'Advance from office to office strategically',
      'Build a lasting political legacy',
    ],
    tiers: [
      {
        name: 'Campaign Foundation',
        subtitle: 'Small Package',
        intro: 'Designed for candidates entering local office or preparing their first major campaign.',
        services: [
          'Campaign strategy',
          'Positioning and messaging',
          'Candidate coaching',
          'Speech preparation',
          'Donor strategy',
          'Fundraising roadmap',
          'Executive calendar management',
          'Political relationship mapping',
          'Stakeholder management',
          'Strategic introductions',
          'Communications guidance',
          'Weekly strategy sessions',
          'Opponent research coordination',
          'Campaign organization',
          'Volunteer leadership structure',
          'Staff advisory',
          'Political opportunity identification',
        ],
      },
      {
        name: 'Strategic Growth',
        subtitle: 'Medium Package',
        intro: 'Everything in the Foundation Package plus:',
        services: [
          'Executive advisor ("Chief Whisperer")',
          'Senior political strategist',
          'Donor cultivation program',
          'Major donor relationship management',
          'Coalition development',
          'Influencer engagement',
          'Community leadership outreach',
          'Government affairs strategy',
          'Legislative positioning',
          'Political intelligence',
          'Debate preparation',
          'Interview preparation',
          'Executive briefing books',
          'Surrogate management',
          'Campaign operations consulting',
          'Digital strategy oversight',
          'Reputation monitoring',
          'Fundraising event strategy',
          'PAC relationship guidance',
          'Leadership development',
          'Long-term political roadmap',
        ],
      },
      {
        name: 'Legacy Partnership',
        subtitle: 'Large Package',
        intro: 'Our highest level engagement. We become your trusted strategic advisor throughout your political career. Includes everything above plus:',
        services: [
          'Exclusive strategic counsel',
          'Daily executive advisory',
          'Political war room',
          'High-level donor strategy',
          'National relationship development',
          'Coalition architecture',
          'Government stakeholder management',
          'Executive decision support',
          'Leadership coaching',
          'Family advisory',
          'Cabinet and senior staff advisory',
          'Transition planning',
          'Policy positioning support',
          'National media strategy',
          'Thought leadership planning',
          'Speechwriting oversight',
          'Event strategy',
          'Strategic networking',
          'Confidential sounding board',
          'Executive presence coaching',
          'Long-range career planning',
        ],
      },
    ],
    crisis: {
      intro: 'When circumstances require immediate response, our team shifts into Crisis Operations. Examples include:',
      items: [
        'Reputation management',
        'Communications response',
        'Media coordination',
        'Opposition response',
        'Narrative recovery',
        'Executive decision support',
        'Social media response strategy',
        'Stakeholder reassurance',
        'Donor communications',
        'Internal staff coordination',
        'Message discipline',
        'Legal-team coordination (communications only)',
        'Family communications guidance',
        'Rapid-response planning',
        'Public trust restoration',
      ],
      note: 'Emergency engagements require dedicated resources and are billed separately according to the Crisis Response Schedule.',
    },
    vault: {
      intro: 'We serve as Switzerland. Everything shared with us remains confidential. We coordinate among:',
      items: ['Campaign leadership', 'Donors', 'Advisors', 'Consultants', 'Volunteers', 'Political allies', 'Community leaders', 'Strategic partners'],
      note: VAULT_LOYALTY('Candidate'),
    },
    monetization: {
      title: 'Fundraising Support',
      intro: 'We assist with:',
      items: [
        'Fundraising strategy',
        'Donor research',
        'Relationship cultivation',
        'Introduction strategy',
        'Event planning',
        'Follow-up systems',
        'Capital campaign planning',
        'Finance committee support',
      ],
      note: 'When our introductions directly result in capital commitments, a mutually agreed success fee may apply, as set forth in the engagement agreement and in compliance with all applicable campaign finance laws.',
    },
    exclusive: {
      intro: 'When we help build a winning political operation, we seek the opportunity to continue serving that candidate as they pursue future offices. Accordingly:',
      items: [
        'We receive the first opportunity to provide strategic advisory services for the candidate’s subsequent campaign(s), subject to mutual agreement on terms.',
        'We maintain continuity of institutional knowledge, relationships, messaging, and long-term planning.',
        'Our role is designed to grow alongside the candidate’s public service career.',
      ],
    },
    ethics: { intro: 'We represent leaders of integrity. Our engagements require:', items: ETHICS_REQUIRES, note: ETHICS_NOTE },
    philosophy: [
      'Politics moves quickly.',
      'Winning requires more than advertising.',
      'It requires trusted counsel.',
      'Trusted relationships.',
      'Disciplined execution.',
      'A calm voice during difficult moments.',
      'A long-term strategy.',
      'We are the strategic partner behind the scenes helping leaders build influence, earn trust, and advance their public service mission.',
    ],
  },
]

export function getDivision(slug: string): Division | undefined {
  return DIVISIONS.find((d) => d.slug === slug)
}
