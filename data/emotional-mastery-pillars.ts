export type PillarSlug =
  | 'relationships'
  | 'self-worth'
  | 'leadership'
  | 'business'
  | 'parenting'
  | 'health'
  | 'communication'
  | 'purpose'

export interface RelatedQuiz {
  title: string
  slug: string
}

export interface Pillar {
  slug: PillarSlug
  title: string
  subtitle: string
  oneLineTeaser: string
  patternSigns: string[]
  whatItShapes: string[]
  whatChanges: string[]
  relatedQuizzes: RelatedQuiz[]
  ctaTopic: string
  probingQuestions: string[]
  /** Wide hero image at the top of the pillar page; also used as the pillar's thumbnail in cross-link grids. */
  heroImage: string
  /** 4 supporting images interspersed through the pillar page body. */
  bodyImages: string[]
}

export const pillars: Pillar[] = [
  {
    slug: 'relationships',
    title: 'Relationships & Intimacy',
    subtitle:
      "The emotional patterns running underneath your closest connections shape how you love, fight, withdraw, and let people in.",
    oneLineTeaser:
      'Why the same conflict keeps showing up with different people.',
    patternSigns: [
      'You over-give, then quietly resent it.',
      'You shut down or go cold when you feel hurt.',
      'You attract similar relationship dynamics again and again.',
      'You stay too long, or leave too fast, and you know it.',
      "You confuse intensity with love, or peace with boredom.",
    ],
    whatItShapes: [
      'How safe it feels to be honest about what you need.',
      'How you handle distance, conflict, and repair.',
      'The kind of partner you keep choosing.',
      'Your ability to receive love without flinching.',
    ],
    whatChanges: [
      'You can name what you feel before it leaks out sideways.',
      'You stop performing connection and start experiencing it.',
      'You choose people who can meet you, not people who confirm old stories.',
      'You repair faster, because reactivity stops running the room.',
    ],
    relatedQuizzes: [
      { title: 'Relationship Management', slug: 'relationship-management' },
      { title: 'Social Awareness', slug: 'social-awareness' },
      { title: 'Improve Marriage', slug: 'improve-marriage' },
    ],
    ctaTopic: 'Emotional Mastery — Relationships & Intimacy',
    probingQuestions: [
      'What pattern keeps showing up in your closest relationships?',
      'Where do you most often go quiet, defensive, or over-explain?',
      "What would change in your life if your relationships felt safer and more honest?",
    ],
    heroImage: '/images/go9/group-sunset.jpg',
    bodyImages: [
      '/images/go9/community-hands.jpg',
      '/images/go9/group-sunset-dresses.webp',
      '/images/retreat/retreat-01.jpg',
      '/images/blog/stuck-feeling.jpg',
    ],
  },
  {
    slug: 'self-worth',
    title: 'Self-Worth & Self-Trust',
    subtitle:
      "Self-worth is the operating system beneath confidence, boundaries, receiving, and how you treat yourself when no one is watching.",
    oneLineTeaser:
      'The hidden layer beneath confidence, boundaries, and how you receive.',
    patternSigns: [
      'You can advocate for everyone but yourself.',
      "You discount compliments, wins, or care almost reflexively.",
      'You measure your worth by output, productivity, or being needed.',
      'You stay small to keep the peace.',
      'You secretly believe the next achievement will finally make it feel real.',
    ],
    whatItShapes: [
      'The boundaries you set (and the ones you cave on).',
      "What you'll tolerate from partners, family, and clients.",
      'Whether you can receive support, money, love, or rest.',
      'How loud your inner critic is when you slow down.',
    ],
    whatChanges: [
      "You stop outsourcing your worth to anyone's approval.",
      'Rest stops feeling like a betrayal of who you are.',
      'You ask for what you need without 47 layers of apology.',
      'Boundaries become a felt sense, not a performance.',
    ],
    relatedQuizzes: [
      { title: 'Self-Awareness', slug: 'self-awareness' },
      { title: "Women's Confidence", slug: 'womens-confidence' },
      { title: 'Life Alignment', slug: 'life-alignment' },
    ],
    ctaTopic: 'Emotional Mastery — Self-Worth & Self-Trust',
    probingQuestions: [
      'Where do you find yourself shrinking, performing, or proving lately?',
      "What do you have a hard time letting yourself receive?",
      'What would feel different if you trusted yourself the way others trust you?',
    ],
    heroImage: '/images/krystalore/cropped-HighResolution-143-scaled-2.jpg',
    bodyImages: [
      '/images/go9/hero.jpg',
      '/images/krystalore/cropped-LowResolution-172.jpg',
      '/images/krystalore/cropped-KrystalLowResolution-18.jpg',
      '/images/blog/short-term-goals.jpg',
    ],
  },
  {
    slug: 'leadership',
    title: 'Leadership & Visibility',
    subtitle:
      "You can only lead others as far as you've led yourself. Emotional regulation, presence, and a healed relationship with being seen are the real leadership skills.",
    oneLineTeaser:
      'Why visibility, presence, and influence start with regulation.',
    patternSigns: [
      'You can hold the room, but it costs you afterward.',
      'You over-prepare to feel safe being visible.',
      "You absorb your team's emotions and call it empathy.",
      'You communicate from urgency more than from clarity.',
      'You avoid the hard conversation until it becomes a bigger one.',
    ],
    whatItShapes: [
      'How grounded you stay under pressure.',
      'The conversations you avoid (and what that quietly costs).',
      "The kind of culture you create just by being in the room.",
      'Your relationship with being seen, criticized, or celebrated.',
    ],
    whatChanges: [
      'You lead from regulation, not reaction.',
      "Hard conversations stop feeling personal.",
      'Visibility stops feeling like exposure.',
      "Your presence becomes the thing people remember.",
    ],
    relatedQuizzes: [
      { title: 'Emotional Intelligence', slug: 'emotional-intelligence' },
      { title: 'Self-Management', slug: 'self-management' },
      { title: 'Relationship Management', slug: 'relationship-management' },
    ],
    ctaTopic: 'Emotional Mastery — Leadership & Visibility',
    probingQuestions: [
      "What emotional pattern shows up when you're under real pressure?",
      'Where is fear of visibility quietly shaping your decisions?',
      'What would your leadership look like with 30% less reactivity?',
    ],
    heroImage: '/images/krystalore/REM08628.jpg',
    bodyImages: [
      '/images/krystalore/cropped-KrystalCrews-145-scaled-1.jpg',
      '/images/leadership-programs/leadership-event.jpeg',
      '/images/go9/speaking-event.jpg',
      '/images/go9/hero.jpg',
    ],
  },
  {
    slug: 'business',
    title: 'Business & Money',
    subtitle:
      "Your emotional patterns shape your pricing, your sales conversations, your scaling, and your relationship with success itself.",
    oneLineTeaser:
      'The unspoken patterns behind pricing, scaling, and receiving money.',
    patternSigns: [
      'You earn more, then unconsciously sabotage or burn out.',
      'You under-price to stay safe, then resent the work.',
      'You can sell anyone else but flinch at selling yourself.',
      'You hit the same revenue ceiling again and again.',
      'Money conversations make you go quiet, shaky, or apologetic.',
    ],
    whatItShapes: [
      "What you allow yourself to charge and receive.",
      "The kind of clients and offers you keep saying yes to.",
      'How safe success feels in your body.',
      "Whether you can rest in seasons of growth.",
    ],
    whatChanges: [
      'You stop trading your nervous system for revenue.',
      "Receiving money stops feeling like a threat.",
      'You make decisions from clarity, not scarcity.',
      "Your business becomes sustainable for the person living inside it.",
    ],
    relatedQuizzes: [
      { title: 'Scale Your Business', slug: 'scale-your-business' },
      { title: 'Entrepreneur Readiness', slug: 'entrepreneur-readiness' },
      { title: 'Life Alignment', slug: 'life-alignment' },
    ],
    ctaTopic: 'Emotional Mastery — Business & Money',
    probingQuestions: [
      'Where do you feel a ceiling that strategy alone keeps failing to break?',
      'What emotional pattern shows up around money, pricing, or sales?',
      "What would change in your business if success didn't feel unsafe?",
    ],
    heroImage: '/images/go9/planner.jpg',
    bodyImages: [
      '/images/krystalore/REM08628.jpg',
      '/images/blog/level-up.jpg',
      '/images/krystalore/cropped-LowResolution-172.jpg',
      '/images/krystalore/cropped-KrystalCrews-145-scaled-1.jpg',
    ],
  },
  {
    slug: 'parenting',
    title: 'Parenting & Family',
    subtitle:
      "You can't teach what you haven't healed. Your nervous system is the room your children are growing up inside.",
    oneLineTeaser:
      "What you don't heal becomes the inheritance.",
    patternSigns: [
      "You react first, then feel guilty about how you reacted.",
      "You see your old wounds in your kids' faces and don't know what to do with it.",
      'You parent from a script you swore you would never repeat.',
      'You can regulate everyone but yourself.',
      "Your home feels like one more thing you're managing.",
    ],
    whatItShapes: [
      "Your child's developing nervous system.",
      'The repair conversations you can have when things go sideways.',
      "What gets passed down, and what stops with you.",
      'How present you can actually be at home.',
    ],
    whatChanges: [
      'You can regulate yourself before regulating the room.',
      'You repair quickly when you miss the mark.',
      "Your home gets quieter on the inside, not just the outside.",
      'You stop confusing controlling your kids with parenting them.',
    ],
    relatedQuizzes: [
      { title: 'Marriage & Family', slug: 'marriage-family' },
      { title: 'Self-Management', slug: 'self-management' },
      { title: 'Couples Compatibility', slug: 'couples-compatibility' },
    ],
    ctaTopic: 'Emotional Mastery — Parenting & Family',
    probingQuestions: [
      'What pattern from your own childhood keeps showing up in your parenting?',
      'When do you tend to lose your regulation at home?',
      'What would feel different if you could repair instead of react?',
    ],
    heroImage: '/images/krystalore/cropped-KrystalLowResolution-18.jpg',
    bodyImages: [
      '/images/blog/accountability.jpg',
      '/images/blog/stuck-feeling.jpg',
      '/images/retreat/retreat-01.jpg',
      '/images/krystalore/beach-rainbow.png',
    ],
  },
  {
    slug: 'health',
    title: 'Health & Nervous System',
    subtitle:
      "Chronic stress, sleep, energy, and how your body responds to the world are downstream of how your nervous system is wired.",
    oneLineTeaser:
      'Your body has been telling you the truth your strategy keeps ignoring.',
    patternSigns: [
      'You live in low-grade activation and call it being productive.',
      'You crash on weekends and wonder why.',
      "You can't fall asleep, or you can't stay asleep.",
      'You feel tense in your body for no clear reason.',
      'You numb out with food, scrolling, or work and call it relaxing.',
    ],
    whatItShapes: [
      "Your energy, sleep, and recovery.",
      'Your tolerance for stress and conflict.',
      "What your body says yes and no to.",
      "Whether you can actually feel safe in stillness.",
    ],
    whatChanges: [
      'Your baseline shifts from activation to regulation.',
      'You stop white-knuckling your way through the day.',
      "Stress moves through you instead of getting stored.",
      'Rest stops feeling like permission you have to earn.',
    ],
    relatedQuizzes: [
      { title: 'Anxiety', slug: 'anxiety' },
      { title: 'Depression', slug: 'depression' },
      { title: 'Breathwork', slug: 'breathwork' },
    ],
    ctaTopic: 'Emotional Mastery — Health & Nervous System',
    probingQuestions: [
      "What is your body telling you that you've been overriding?",
      'Where does stress most often live in your body?',
      'What would change if rest stopped feeling like a betrayal?',
    ],
    heroImage: '/images/go9/fitness-balcony.jpg',
    bodyImages: [
      '/images/go9/meditation.webp',
      '/images/just-breathe/cover.jpg',
      '/images/go9/fitness.jpg',
      '/images/blog/run-a-race.jpg',
    ],
  },
  {
    slug: 'communication',
    title: 'Communication & Conflict',
    subtitle:
      "How you handle hard conversations — or avoid them — is shaped by what your nervous system learned was safe long before this conversation.",
    oneLineTeaser:
      'Why your hardest conversations keep going the same way.',
    patternSigns: [
      "You replay conversations in your head for hours after they end.",
      'You go silent, then explode, then apologize for exploding.',
      "You over-explain to keep the other person from getting upset.",
      "You agree to things in the moment that you resent later.",
      "You wait until you can't take it anymore, then deliver an ultimatum.",
    ],
    whatItShapes: [
      'The boundaries you set and the ones you abandon.',
      'How trust is built or quietly eroded.',
      "Your team, your marriage, your friendships.",
      'Your willingness to ask for what you actually want.',
    ],
    whatChanges: [
      'You can stay grounded inside a hard conversation.',
      'You stop confusing being kind with being silent.',
      'You say the real thing, sooner.',
      'You can listen without losing yourself.',
    ],
    relatedQuizzes: [
      { title: 'Social Awareness', slug: 'social-awareness' },
      { title: 'Emotional Intelligence', slug: 'emotional-intelligence' },
      { title: 'Relationship Management', slug: 'relationship-management' },
    ],
    ctaTopic: 'Emotional Mastery — Communication & Conflict',
    probingQuestions: [
      'What conversation have you been avoiding, and what is that costing you?',
      'How do you tend to react when someone is upset with you?',
      'What would shift if you could say the real thing without falling apart?',
    ],
    heroImage: '/images/krystalore/cropped-KrystalCrews-145-scaled-1.jpg',
    bodyImages: [
      '/images/blog/accountability.jpg',
      '/images/go9/keynote.jpg',
      '/images/go9/speaking-event.jpg',
      '/images/blog/stuck-feeling.jpg',
    ],
  },
  {
    slug: 'purpose',
    title: 'Purpose & Creativity',
    subtitle:
      "The blocks between you and your purpose are rarely strategic. They are emotional — fear of being seen, fear of finishing, fear of being wrong about who you are.",
    oneLineTeaser:
      "Why your purpose isn't a strategy problem.",
    patternSigns: [
      "You start things, then sabotage them right before they land.",
      'You collect frameworks instead of finishing one.',
      'You feel called to something but freeze when it asks you to be seen.',
      "You measure meaning in productivity.",
      "You wait to feel ready before you'll let yourself begin.",
    ],
    whatItShapes: [
      "Whether you let yourself be known for what you're actually here for.",
      'How long ideas sit on the shelf.',
      'How willing you are to be a beginner in public.',
      "Whether your work feels alive to you or like another performance.",
    ],
    whatChanges: [
      'You finish things you used to flinch from finishing.',
      "Visibility stops feeling like a threat to your identity.",
      "Your work starts to feel like an expression, not an audition.",
      'You let yourself want what you actually want.',
    ],
    relatedQuizzes: [
      { title: 'Life Alignment', slug: 'life-alignment' },
      { title: 'Self-Awareness', slug: 'self-awareness' },
      { title: 'Personality', slug: 'personality' },
    ],
    ctaTopic: 'Emotional Mastery — Purpose & Creativity',
    probingQuestions: [
      'What are you almost ready to start, but keep delaying?',
      'Where does fear of being seen show up in your creative life?',
      "What would you make if you knew you couldn't get it wrong?",
    ],
    heroImage: '/images/krystalore/beach-rainbow.png',
    bodyImages: [
      '/images/retreat/retreat-02.jpg',
      '/images/blog/short-term-goals.jpg',
      '/images/retreat/retreat-06.jpg',
      '/images/go9/group-sunset-dresses.webp',
    ],
  },
]

export function getPillar(slug: string): Pillar | undefined {
  return pillars.find((p) => p.slug === slug)
}
