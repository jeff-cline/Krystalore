// Super Hostess — concierge experiences Krystalore adds to any retreat center, hotel,
// villa, or Airbnb. Each experience is individually bookable. Images feature Krystalore
// as the host; swap freely — they're just paths.

// `focus` sets the CSS object-position for the card image — use it when a photo's
// subject sits away from centre and the 4:3 crop would cut them off.
export type Experience = { title: string; blurb: string; image: string; focus?: string }
export type Group = { key: string; label: string; eyebrow: string; items: Experience[] }

export const GROUPS: Group[] = [
  {
    key: 'signature',
    label: 'Signature Experiences',
    eyebrow: 'Add to any stay',
    items: [
      { title: 'Retreat & Event Host', image: '/images/retreat/retreat-group-06.jpg',
        blurb: 'From welcome to farewell, Krystalore runs the room. As your on-site host and emcee she sets the tone, keeps the energy high, and choreographs every moment so your guests feel seen and completely taken care of — while you get to enjoy your own event.' },
      { title: 'Beach Picnic', image: '/images/corporate-retreat/colibri-resort.jpg',
        blurb: 'A curated beachfront picnic — linens, local flavors, and a slow-down-and-savor pace set to the sound of the waves. Perfect as a welcome gathering, a celebration, or simply a beautiful reason to bring your people to the sea.' },
      // Portrait shot (EXIF-rotated) in a landscape card, so a centred crop cuts her head off.
      { title: 'Fitness — Training & Group Exercise', image: '/images/go9/fitness-outdoor.jpg', focus: '50% 0%',
        blurb: 'High-energy, all-levels training led by a 28-time marathoner and certified coach. Whether it is a sunrise group workout or a private session, every class is scaled to your crowd so everyone leaves stronger, sweatier, and smiling.' },
      { title: 'Stretch & Meditation', image: '/images/go9/meditation.webp',
        blurb: 'A guided stretch and meditation session to reset the nervous system — mobility, breathwork, and stillness. Offered for the whole group or one-on-one, it is the exhale your itinerary has been missing.' },
      { title: 'Rainforest Adventure Tour', image: '/images/corporate-retreat/fitness-retreat-costa-rica.jpg',
        blurb: 'Step into the canopy on a guided rainforest excursion — birdsong, hanging bridges, and the kind of awe that resets your whole system. A safe, small-group adventure with Krystalore setting the pace and holding the space.' },
      { title: 'Waterfall Adventure Tour', image: '/images/corporate-retreat/highres-retreat.jpg',
        blurb: 'Chase a hidden waterfall on a guided trek that rewards every step with a cool, roaring plunge pool. Adventure, photos, and a shared story your group will still be telling months later.' },
      { title: 'Catamaran Tour', image: '/images/go9/group-sunset.jpg',
        blurb: 'Set sail on a private catamaran — open water, sun on the deck, a swim stop in turquoise coves, and sunset on the way home. The signature "we actually did this" moment of any trip.' },
      { title: 'Somatic Healing Session', image: '/images/go9/community-hands.jpg',
        blurb: 'Trauma-informed somatic work that moves stored stress out of the body — breath, gentle movement, and nervous-system regulation guided by a certified somatic coach. Deep, safe, and quietly transformational.' },
      { title: 'Nature Healing Session', image: '/images/corporate-retreat/aajpz-retreat.jpg',
        blurb: 'A grounding session in the open air — forest bathing, barefoot connection, and guided presence that lets nature do the healing. Science-backed calm for overstimulated minds.' },
    ],
  },
  {
    key: 'teams',
    label: 'For Teams & Businesses',
    eyebrow: 'Off-sites & corporate retreats',
    items: [
      { title: 'Team Building Exercise', image: '/images/go9/corporate.jpg',
        blurb: 'Purpose-built challenges that turn a group of coworkers into a team that trusts each other. Facilitated by a Pentagon-curriculum author who has trained 200,000+ people — no cringey icebreakers, just real cohesion.' },
      { title: 'Communication Workshop', image: '/images/go9/keynote.jpg',
        blurb: 'A hands-on workshop that upgrades how your team actually talks to each other — listening, feedback, and the hard conversations. Practical tools your people use the very next day.' },
      { title: 'Emotional Intelligence Workshop', image: '/images/go9/coaching.jpg',
        blurb: 'A trauma-informed EI session on self-awareness, regulation, and reading the room — the human skills that separate good teams from great ones. Grounded in the Four Lenses framework.' },
      { title: 'Business Building', image: '/images/go9/planner.jpg',
        blurb: 'A working session to sharpen the model, the offer, and the growth plan — strategy from someone who has delivered $4M+ in federal programs and built ventures from zero. Clarity you can execute.' },
      { title: 'Strategic Mapping', image: '/images/corporate-retreat/highres-portrait.jpg',
        blurb: 'Map the next 90 days and the next three years on one wall — priorities, dependencies, and the critical path. Everyone leaves knowing exactly what matters and who owns it.' },
      { title: 'Goal Setting', image: '/images/go9/speaking-event.jpg',
        blurb: 'Turn vague ambition into a concrete, accountable plan — outcomes, milestones, and the metrics that prove progress. Run it for individuals or the whole team.' },
      { title: 'Vision Board Workshop', image: '/images/super-hostess/vision-board-workshop.jpg',
        blurb: 'A guided vision board experience that gets your team or guests clear on what they are building — creative, reflective, and surprisingly strategic. They leave inspired and aligned.' },
    ],
  },
  {
    key: 'brides',
    label: 'For Brides & Bridal Parties',
    eyebrow: 'For the bride & her crew',
    items: [
      // She's low in the frame doing push-ups, so anchor the crop to the bottom.
      { title: 'Bridal Boot Camp', image: '/images/super-hostess/bridal-boot-camp.jpg', focus: '50% 100%',
        blurb: 'A themed, all-levels boot camp for the bride and her crew — sweat, laughs, and that pre-wedding glow, styled to match her colors and vibe. The most fun she will have getting ready.' },
      { title: 'HERO Fitness', image: '/images/go9/fitness.jpg',
        blurb: "Krystalore's signature HERO fitness — a bold, empowering workout that leaves the bridal party feeling strong, confident, and unstoppable. Bring the group; leave as warriors." },
      { title: 'Bachelorette Outings', image: '/images/go9/group-sunset-dresses.webp',
        blurb: 'A custom bachelorette experience — beach, boat, brunch, or all three — hosted and handled end to end so the maid of honor can finally relax. Themed to the bride, memorable for everyone.' },
    ],
  },
]

export const ALL_EXPERIENCES = GROUPS.flatMap((g) => g.items.map((i) => i.title))
