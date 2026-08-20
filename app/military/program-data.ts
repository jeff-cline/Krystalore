// Mission-Ready Leadership — the seven-day system.
//
// Each day is sold and delivered standalone: a unit can book Day 3 alone and get a
// complete, self-contained workshop. Run in sequence they compound, because each day
// assumes the previous one's vocabulary without depending on it.
//
// Pricing is uniform by design — $2,497 per day, 1 to 8 hours, 2 to 200 participants —
// so a unit picks days by need, not by budget line.

export const DAY_RATE = 2497

// Shown wherever a price appears, keyed off an asterisk on the figure itself.
export const PRICING_NOTE =
  'Day rate is $2,497. Whether it\'s one hour, four hours, six hours, or eight hours, travel and lodging and expenses are additional.'
export const GROUP_RANGE = '2 to 200 participants'
export const DURATION = '1 to 8 hours'

export type Module = { title: string; body: string }

export type Day = {
  slug: string
  day: number
  keyword: string          // the term as it appears on /military
  image: string            // 4:3 sources sit in 4:3 frames, so nobody gets cropped
  title: string
  tagline: string
  summary: string
  standalone: string       // why this day works on its own
  forWho: string[]
  modules: Module[]
  takeaways: string[]
}

export const DAYS: Day[] = [
  {
    slug: 'emotional-intelligence',
    day: 1,
    image: '/images/military/classroom-white-jacket.jpg',
    keyword: 'Emotional Intelligence',
    title: 'Emotional Intelligence',
    tagline: 'Lead yourself before you lead anyone else.',
    summary:
      'Rank gives you authority. Self-awareness gives you influence. This day builds the four capabilities that separate leaders people follow from leaders people merely obey — knowing what you feel, managing what you do with it, reading the room accurately, and using all three to move people.',
    standalone:
      'Booked on its own, this is the highest-leverage single day in the system. Every other day gets easier once a team shares a vocabulary for what is actually happening in the room.',
    forWho: [
      'Newly promoted NCOs and officers leading former peers',
      'Leaders whose technical reputation outpaces their people skills',
      'Teams where tension is obvious but nobody names it',
    ],
    modules: [
      { title: 'The Self-Awareness Audit', body: 'Where your reactions come from, and the specific situations that reliably hijack your judgment. Participants leave with a written map of their own triggers.' },
      { title: 'Regulation Under Load', body: 'What happens physiologically when you are activated, why willpower fails there, and the techniques that actually work in the moment — not after the fact.' },
      { title: 'Reading the Room', body: 'Accurate social awareness without mind-reading. Reading tone, posture, and silence, and checking your read before you act on it.' },
      { title: 'Relationship Management', body: 'Turning awareness into influence — repair after friction, giving feedback that lands, and building trust deliberately rather than hoping it accumulates.' },
      { title: 'The Blind-Spot Exchange', body: 'A structured peer exercise where leaders hear how they are actually experienced. Handled carefully, this is the moment the day turns.' },
    ],
    takeaways: [
      'A personal trigger map naming the situations that compromise your judgment',
      'Three regulation techniques usable in real time, in uniform, in front of your team',
      'A vocabulary your unit can share for naming friction before it escalates',
      'One relationship you commit to repairing, with a concrete first move',
    ],
  },
  {
    slug: 'resilience',
    day: 2,
    image: '/images/military/field-team.jpg',
    keyword: 'Resilience',
    title: 'Resilience',
    tagline: 'Recover faster. Sustain longer. Break less.',
    summary:
      'Resilience is not endurance and it is not toughness. It is the speed at which a person returns to baseline after load. This day treats it as a trainable capacity with mechanics — stress, recovery, meaning, and connection — rather than a character trait people either have or lack.',
    standalone:
      'Works on its own for units coming off a hard deployment cycle, a loss, or a sustained high-tempo period. No prior day required.',
    forWho: [
      'Units operating at high tempo with no recovery rhythm',
      'Leaders carrying their team’s stress on top of their own',
      'Teams that have absorbed a significant loss or setback',
    ],
    modules: [
      { title: 'Stress Is Not the Enemy', body: 'The difference between load that builds capacity and load that erodes it, and how to tell which one your unit is under right now.' },
      { title: 'The Recovery Deficit', body: 'Why high performers under-recover, what that costs downstream, and how to build recovery into a schedule that will not slow down for it.' },
      { title: 'Cognitive Flexibility', body: 'Reframing without denial. Practical work on the interpretations that make a hard situation heavier than it needs to be.' },
      { title: 'Meaning and Mission', body: 'Why purpose is the strongest predictor of who sustains under sustained pressure, and how leaders keep it visible when the work is grinding.' },
      { title: 'Connection as Armor', body: 'The protective effect of genuine peer relationships, and why isolation is the reliable precursor to breakdown.' },
    ],
    takeaways: [
      'A personal recovery protocol that fits an actual duty schedule',
      'Early-warning indicators for yourself and for the people you lead',
      'A reframing method for the interpretations that compound stress',
      'A unit-level plan to protect connection during high-tempo periods',
    ],
  },
  {
    slug: 'communication',
    day: 3,
    image: '/images/military/roundtable.jpg',
    keyword: 'Communication',
    title: 'Communication',
    tagline: 'The conversations most leaders avoid are the ones that decide everything.',
    summary:
      'Most unit dysfunction traces back to a conversation someone did not have. This day is almost entirely practice — hard conversations, clear direction, real feedback, and the listening that makes any of it work. Participants talk more than the facilitator does.',
    standalone:
      'The most immediately applicable single day. Participants use what they practice within a week, usually within a day.',
    forWho: [
      'Leaders avoiding a specific conversation they know they owe someone',
      'Units where direction is given but not understood',
      'Teams where feedback only happens at evaluation time',
    ],
    modules: [
      { title: 'Listening That Changes the Outcome', body: 'Active listening as a leadership tool rather than a courtesy — and the specific habits that make people stop telling you things.' },
      { title: 'Clear Direction Under Pressure', body: 'Giving orders and intent that survive contact with a stressed, distracted, or skeptical audience.' },
      { title: 'The Hard Conversation', body: 'A repeatable structure for confrontation that preserves the relationship: open, evidence, impact, ask, agreement. Practised in pairs, with observers.' },
      { title: 'Feedback That Lands', body: 'Why most feedback fails on delivery rather than content, and how to give it so it is heard as investment instead of attack.' },
      { title: 'Conflict Without Casualties', body: 'De-escalation, finding the actual disagreement underneath the stated one, and closing a conflict so it stays closed.' },
    ],
    takeaways: [
      'A rehearsed structure for the specific hard conversation you are currently avoiding',
      'A feedback model you can use the same afternoon',
      'De-escalation language that works with someone who outranks you',
      'A listening practice that surfaces problems while they are still small',
    ],
  },
  {
    slug: 'whole-person-leadership',
    day: 4,
    image: '/images/military/small-group.jpg',
    keyword: 'Whole-Person Leadership',
    title: 'Whole-Person Leadership',
    tagline: 'You cannot lead half a person. They bring all of it to work.',
    summary:
      'People do not leave their finances, their marriage, their health, or their grief at the gate. This day equips leaders to lead the whole human being in front of them — with genuine care and clear boundaries, and without becoming an untrained counselor.',
    standalone:
      'Particularly effective for first-line supervisors who are closest to their people’s lives and least prepared for what that surfaces.',
    forWho: [
      'First-line supervisors and flight-level leadership',
      'Leaders who feel responsible for problems they are not equipped to solve',
      'Units where personal issues are quietly degrading readiness',
    ],
    modules: [
      { title: 'The Whole-Person Model', body: 'The domains that determine whether someone shows up capable — physical, mental, social, spiritual, financial — and how a deficit in one shows up as a performance problem in another.' },
      { title: 'Care Without Overstepping', body: 'The line between supportive leader and untrained counselor. How to ask, what to do with the answer, and when to hand off.' },
      { title: 'Referral and Resources', body: 'Knowing the systems that exist, and removing the friction and stigma between your people and the help they have already earned.' },
      { title: 'Leading Through Personal Crisis', body: 'What a unit needs from its leader when a member is in genuine trouble, and how to hold the mission and the person at the same time.' },
      { title: 'Boundaries That Protect Both of You', body: 'Sustainable compassion — how to care at depth for years without burning out or taking on what is not yours to carry.' },
    ],
    takeaways: [
      'A whole-person check-in you can run in ten minutes without it feeling clinical',
      'Clear language for the limits of your role, so care does not become liability',
      'A working map of referral resources and how to warm-hand-off to them',
      'A boundary practice that makes long-term compassion survivable',
    ],
  },
  {
    slug: 'human-performance',
    day: 5,
    image: '/images/military/discussion.jpg',
    keyword: 'Human Performance',
    title: 'Human Performance',
    tagline: 'Readiness is physiological before it is anything else.',
    summary:
      'Sleep, load, fuel, and recovery are not wellness topics — they are the inputs that determine whether a leader can think clearly at hour fourteen. This day treats the body as mission equipment and gives leaders the levers that actually move cognitive and physical output.',
    standalone:
      'The most concrete day in the system, and often the easiest sell to a skeptical audience because the results are measurable.',
    forWho: [
      'Units with shift work, alert cycles, or chronic sleep disruption',
      'Leaders making high-consequence decisions while depleted',
      'Anyone responsible for sustaining output across a long cycle',
    ],
    modules: [
      { title: 'Sleep as a Weapon System', body: 'What sleep debt does to judgment, reaction time, and emotional control — and the countermeasures available when eight hours is not on offer.' },
      { title: 'Load, Adaptation, Overtraining', body: 'The dose-response curve applied to work as well as training. Recognising the point where more effort produces less output.' },
      { title: 'Fueling for Cognitive Output', body: 'Practical nutrition for people eating on a duty schedule, aimed at stable attention rather than physique.' },
      { title: 'Movement for Leaders', body: 'The minimum effective dose of physical training for stress tolerance and decision quality, built by a 28-time marathoner and 50-mile ultra finisher.' },
      { title: 'Building a Performance Culture', body: 'Making recovery a unit norm instead of a personal indulgence, and leading it by visible example.' },
    ],
    takeaways: [
      'A personal readiness protocol built around your real schedule',
      'Countermeasures for the nights you will not get enough sleep',
      'A simple metric set to track whether your unit is adapting or eroding',
      'A concrete change to your unit’s rhythm you can implement this month',
    ],
  },
  {
    slug: 'team-development',
    day: 6,
    image: '/images/military/workshop-tables.jpg',
    keyword: 'Team Development',
    title: 'Team Development',
    tagline: 'Trust is built on purpose, or not at all.',
    summary:
      'Groups do not become teams by spending time together. This day covers the mechanics — psychological safety, role clarity, accountability, and the deliberate work of taking a group through the stages every team has to pass through to become effective.',
    standalone:
      'Best delivered to an intact team rather than a mixed audience, because the work is done on the actual relationships in the room.',
    forWho: [
      'Intact teams, flights, sections, and shops',
      'Newly formed or heavily rotated units',
      'Teams that are technically strong but do not trust each other',
    ],
    modules: [
      { title: 'The Stages Every Team Passes Through', body: 'Forming, storming, norming, performing — where your team actually is, and what a leader must do differently at each stage.' },
      { title: 'Psychological Safety', body: 'The single strongest predictor of team performance. What builds it, what destroys it in one sentence, and how to measure it honestly.' },
      { title: 'Role Clarity and Ownership', body: 'Most friction that looks interpersonal is structural. Removing the ambiguity that manufactures conflict.' },
      { title: 'Accountability Without Fear', body: 'Holding a standard in a way that raises performance instead of driving problems underground.' },
      { title: 'The Team Charter', body: 'A facilitated session where the team writes down how it will operate — standards, communication norms, and how it will handle failure.' },
    ],
    takeaways: [
      'An honest read on where your team sits developmentally',
      'A written team charter the group built and therefore owns',
      'A psychological-safety practice you can run at every shift change',
      'A method for holding standards that does not cost you candor',
    ],
  },
  {
    slug: 'leadership-psychology',
    day: 7,
    image: '/images/military/briefing-stage.jpg',
    keyword: 'Leadership Psychology',
    title: 'Leadership Psychology',
    tagline: 'Why people do what they do — and what that means for how you lead.',
    summary:
      'The capstone. Motivation, influence, decision-making under uncertainty, and the cognitive biases that quietly degrade command judgment. This day turns the practical skills of the previous six into a model a leader can reason from when the situation is one nobody trained them for.',
    standalone:
      'Works alone for experienced leaders who want the theory underneath instincts they have already developed.',
    forWho: [
      'Senior NCOs and field-grade officers',
      'Leaders preparing for command or a significant step up',
      'Anyone who has the instincts but wants the model behind them',
    ],
    modules: [
      { title: 'What Actually Motivates People', body: 'Autonomy, mastery, and purpose against the reality of a rank structure — and what to do when you cannot offer more money or a promotion.' },
      { title: 'Influence Without Authority', body: 'Moving peers, superiors, and adjacent units when you have no positional power over any of them.' },
      { title: 'Decision-Making Under Uncertainty', body: 'How judgment degrades under time pressure, fatigue, and incomplete information, and the structures that protect it.' },
      { title: 'Cognitive Bias in Command', body: 'Confirmation bias, sunk cost, and authority gradient — the failures that show up in every mishap investigation, and how to design against them.' },
      { title: 'Your Leadership Philosophy', body: 'Participants write the document they will lead from: what they stand for, what they will not tolerate, and how their people can expect to be treated.' },
    ],
    takeaways: [
      'A written leadership philosophy you can hand to your team',
      'A decision protocol for the calls you make while depleted',
      'A bias checklist for high-consequence decisions',
      'A working model of motivation that survives a rank structure',
    ],
  },
]

// ── Express: the one-day introductions ───────────────────────────────────────
// Two ways in. Both stand alone, and both are designed to make the seven-day
// system an obvious next step rather than a hard sell.

export type Express = {
  slug: string
  image: string
  badge: string
  title: string
  subtitle: string
  price: number
  duration: string
  group: string
  summary: string
  covers: string[]
  modules: Module[]
  takeaway: string
}

export const EXPRESS: Express[] = [
  {
    slug: 'full-day',
    image: '/images/military/briefing-stage.jpg',
    badge: 'Express · Full Day',
    title: 'Full-Day Mission-Ready Leadership Workshop',
    subtitle: 'Pick your topics. One day. Immediately applicable.',
    price: DAY_RATE,
    duration: DURATION,
    group: GROUP_RANGE,
    summary:
      'A single immersive day built from the seven-day curriculum, scoped to what your unit needs most. Choose the topics, and the day is customized around them — the same material, compressed into one sitting, with the practical exercises kept and the theory trimmed.',
    covers: DAYS.map((d) => d.keyword),
    modules: [
      { title: 'Built around your topics', body: 'Choose from all seven disciplines. The curriculum is assembled after a scoping call, not pulled off a shelf.' },
      { title: 'Scaled to your schedule', body: 'Anywhere from a one-hour block to a full eight-hour day, with the exercises adjusted to fit rather than cut.' },
      { title: 'Scaled to your group', body: 'Two people or two hundred. Small groups go deeper; large groups get more structure.' },
      { title: 'Interactive, not a slide deck', body: 'Participants practise, discuss, and leave with something written. Nobody watches PowerPoint for a day.' },
    ],
    takeaway:
      'A unit that shares a vocabulary and a set of practical tools by the end of a single duty day — and a clear read on which of the seven days to book next.',
  },
  {
    slug: 'resilient-relationships',
    image: '/images/military/classroom-white-jacket.jpg',
    badge: 'Express · One Hour',
    title: 'Resilient Relationships: Communicate, Connect and Thrive',
    subtitle: 'One hour. The four skills that hold relationships together under pressure.',
    price: DAY_RATE,
    duration: '1 hour',
    group: GROUP_RANGE,
    summary:
      'Participants learn how emotional intelligence and healthy communication strengthen relationships during pressure, conflict, and change. The course addresses triggers, active listening, boundaries, and constructive conversations.',
    covers: ['Emotional Intelligence', 'Relationships', 'Communication', 'Resilience'],
    modules: [
      { title: 'Triggers', body: 'Recognising what sets you off before it costs you the conversation, and what to do in the seconds you have.' },
      { title: 'Active Listening', body: 'Listening so the other person can tell you the real problem — the skill that prevents most conflicts from forming.' },
      { title: 'Boundaries', body: 'Holding a limit clearly and without hostility, so the relationship survives the limit.' },
      { title: 'Constructive Conversations', body: 'A structure for raising something hard that keeps the connection intact while still saying the thing.' },
    ],
    takeaway:
      'Tools to navigate challenging conversations without sacrificing connection, respect, or emotional well-being.',
  },
]
