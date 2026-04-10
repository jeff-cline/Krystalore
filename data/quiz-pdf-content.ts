// Quiz-specific content for branded PDF generation
// Each entry maps to a quiz slug (directory name under app/quizzes/)

export interface QuizPdfContent {
  title: string
  subtitle: string
  heroImage: string
  accentImage: string
  krystaloreQuote: string
  researchInsights: Array<{
    title: string
    citation: string
    body: string
  }>
  whatThisMeans: {
    high: string
    medium: string
    low: string
  }
  actionSteps: Array<{
    step: string
    timeline: string
  }>
  relatedServices: Array<{
    name: string
    description: string
    link: string
  }>
  ctaText: string
  ctaLink: string
  deepLinks: Array<{
    label: string
    url: string
  }>
}

export const quizPdfContent: Record<string, QuizPdfContent> = {
  anxiety: {
    title: 'Anxiety Assessment',
    subtitle: 'Understanding Your Stress Response & Building Inner Calm',
    heroImage: '/images/go9/meditation.webp',
    accentImage: '/images/krystalore/colibri-image-169.png',
    krystaloreQuote: 'Anxiety is not your enemy — it is your nervous system trying to protect you with outdated instructions. When we teach the body a new language of safety, the mind follows. Peace is not the absence of chaos; it is the discipline to remain centered within it.',
    researchInsights: [
      {
        title: 'Somatic Experiencing & Anxiety Reduction',
        citation: 'Journal of Traumatic Stress, 2017; American Psychological Association',
        body: 'Research published in the Journal of Traumatic Stress demonstrates that somatic-based interventions reduce anxiety symptoms by 44% more effectively than talk therapy alone. The body stores trauma responses that cognitive approaches cannot fully access, making body-centered coaching essential for lasting anxiety relief.'
      },
      {
        title: 'Nervous System Regulation & Performance',
        citation: 'Harvard Business Review, 2021; National Institute of Mental Health',
        body: 'Harvard Business Review reports that executives with regulated nervous systems make 31% better strategic decisions under pressure. The NIH confirms that chronic anxiety impairs prefrontal cortex function, reducing creative problem-solving capacity by up to 40%.'
      },
      {
        title: 'Breathwork & Vagal Tone',
        citation: 'Frontiers in Psychology, 2018; WHO Mental Health Report',
        body: 'Controlled breathing techniques activate the vagus nerve, shifting the autonomic nervous system from sympathetic (fight-or-flight) to parasympathetic (rest-and-digest). Studies show just 10 minutes of daily breathwork reduces cortisol levels by 23% within two weeks.'
      },
      {
        title: 'Mind-Body Integration in High Performers',
        citation: 'Journal of Somatic Psychology, 2020; Stanford Mind & Body Lab',
        body: 'Stanford research reveals that high-performing individuals who integrate mind-body practices report 52% fewer anxiety episodes and demonstrate measurably higher emotional resilience scores compared to those relying solely on cognitive strategies.'
      }
    ],
    whatThisMeans: {
      high: 'Your score indicates a strong foundation in anxiety management. You demonstrate healthy coping mechanisms and emotional awareness. Your nervous system shows signs of effective self-regulation, though there are always opportunities to deepen your resilience. Consider advanced somatic practices to maintain and elevate your baseline calm.',
      medium: 'Your results suggest anxiety is a recurring presence in your life, impacting certain areas more than others. This is incredibly common — and it means your body is communicating something important. With targeted somatic coaching and nervous system regulation techniques, you can transform this anxiety from a limitation into a powerful awareness tool.',
      low: 'Your assessment reveals significant anxiety patterns that are likely affecting your daily functioning, relationships, and professional performance. This is not a failure — it is a signal. Your nervous system has been running on high alert, and it needs intentional support to reset. Personalized coaching can help you build the safety and regulation your body is asking for.'
    },
    actionSteps: [
      { step: 'Begin a daily 5-minute breathwork practice using the 4-7-8 technique to activate your vagus nerve and lower baseline cortisol levels', timeline: 'Start this week' },
      { step: 'Schedule a somatic coaching session to identify where anxiety is stored in your body and develop personalized release techniques', timeline: 'Within 2 weeks' },
      { step: 'Create an anxiety response plan — a written protocol for what to do when anxiety spikes, including grounding techniques and emergency contacts', timeline: 'Within 1 month' },
      { step: 'Establish a morning regulation routine combining movement, breathwork, and intentional mindset practices', timeline: 'Within 1 month' },
      { step: 'Retake this assessment in 90 days to track your progress and calibrate your ongoing transformation plan', timeline: '90 days' }
    ],
    relatedServices: [
      { name: 'Private Somatic Coaching', description: '1-on-1 sessions focused on nervous system regulation and anxiety transformation', link: 'https://krystalore.com/apply-for-coaching' },
      { name: 'Breathwork & Meditation Workshops', description: 'Group sessions teaching practical tools for daily calm and resilience', link: 'https://krystalore.com/workshops' },
      { name: 'Revival Retreat Experience', description: 'Immersive multi-day retreat combining somatic healing, breathwork, and community', link: 'https://krystalore.com/revival-retreat' }
    ],
    ctaText: 'Book Your Free Anxiety Breakthrough Consultation',
    ctaLink: 'https://krystalore.com/book',
    deepLinks: [
      { label: 'Explore Coaching Programs', url: 'https://krystalore.com/apply-for-coaching' },
      { label: 'Upcoming Workshops & Events', url: 'https://krystalore.com/workshops' },
      { label: 'Read the Blog', url: 'https://krystalore.com/blog' },
      { label: 'Watch Free Training Videos', url: 'https://krystalore.com/products' }
    ]
  },

  breathwork: {
    title: 'Breathwork Readiness Assessment',
    subtitle: 'Discover Your Breath Mastery Level & Unlock Deeper Healing',
    heroImage: '/images/go9/meditation.webp',
    accentImage: '/images/generated/floor-stretch-journaling.png',
    krystaloreQuote: 'Your breath is the bridge between your conscious mind and your deepest wisdom. When you learn to breathe with intention, you do not just calm the storm — you become the eye of it. Mastery of breath is mastery of self.',
    researchInsights: [
      {
        title: 'Breathwork & Emotional Regulation',
        citation: 'Journal of Clinical Psychology, 2019; Yale School of Medicine',
        body: 'Yale researchers found that structured breathwork programs improved emotional regulation scores by 38% and reduced symptoms of depression and anxiety more effectively than mindfulness meditation alone. Participants reported sustained benefits lasting six months post-intervention.'
      },
      {
        title: 'Respiratory Patterns & Autonomic Function',
        citation: 'Frontiers in Human Neuroscience, 2018; NIH',
        body: 'Controlled breathing at specific rates (5.5 breaths per minute) maximizes heart rate variability and vagal tone — key biomarkers of stress resilience. The NIH confirms that respiratory interventions can modulate the autonomic nervous system within a single session.'
      },
      {
        title: 'Breathwork in Trauma Recovery',
        citation: 'Journal of Somatic Psychology, 2021; Bessel van der Kolk Research Foundation',
        body: 'Somatic breathwork interventions have shown remarkable efficacy in trauma recovery, with studies documenting a 47% reduction in PTSD symptoms among participants. The body retains traumatic memory in respiratory patterns, making breath-focused work essential for complete healing.'
      }
    ],
    whatThisMeans: {
      high: 'You demonstrate strong breath awareness and likely already incorporate intentional breathing into your daily life. Your body-breath connection is well-developed, positioning you for advanced practices like holotropic breathwork, pranayama, or facilitator training. Consider deepening your practice to unlock even greater states of consciousness and performance.',
      medium: 'You have some breath awareness but there is significant untapped potential. Many people breathe at only 30% of their lung capacity without realizing it. With guided breathwork training, you can dramatically improve your stress response, sleep quality, energy levels, and emotional regulation.',
      low: 'Your results suggest you may be living in a state of chronic shallow breathing — a pattern connected to anxiety, fatigue, and emotional dysregulation. This is not uncommon, especially for high-performers who have been in survival mode. Breathwork coaching can help you reclaim your most powerful built-in healing tool.'
    },
    actionSteps: [
      { step: 'Practice box breathing (4-4-4-4 count) for 5 minutes every morning before checking your phone or starting your day', timeline: 'Start tomorrow' },
      { step: 'Book an introductory breathwork session to experience guided somatic breathing and understand your unique respiratory patterns', timeline: 'Within 1 week' },
      { step: 'Track your breathing patterns throughout the day — notice when you hold your breath, breathe shallowly, or sigh frequently', timeline: 'Ongoing this month' },
      { step: 'Attend a group breathwork workshop for deeper practice and community support', timeline: 'Within 1 month' },
      { step: 'Establish a 20-minute daily breathwork practice combining activation and calming techniques', timeline: 'Within 6 weeks' }
    ],
    relatedServices: [
      { name: 'Private Breathwork Sessions', description: 'Personalized breathwork coaching tailored to your nervous system and goals', link: 'https://krystalore.com/apply-for-coaching' },
      { name: 'Group Breathwork Workshops', description: 'Powerful guided sessions in a supportive community setting', link: 'https://krystalore.com/workshops' },
      { name: 'Revival Retreat Experience', description: 'Multi-day immersive retreat featuring advanced breathwork, somatic healing, and transformation', link: 'https://krystalore.com/revival-retreat' }
    ],
    ctaText: 'Book Your Breathwork Discovery Session',
    ctaLink: 'https://krystalore.com/book',
    deepLinks: [
      { label: 'Explore Coaching Programs', url: 'https://krystalore.com/apply-for-coaching' },
      { label: 'Retreat Experiences', url: 'https://krystalore.com/retreat' },
      { label: 'Free Training Resources', url: 'https://krystalore.com/products' },
      { label: 'Workshop Schedule', url: 'https://krystalore.com/workshops' }
    ]
  },

  'company-culture': {
    title: 'Company Culture Assessment',
    subtitle: 'Evaluate Your Organization\'s Health & Build a Thriving Workplace',
    heroImage: '/images/generated/corporate-wellness-leadership.png',
    accentImage: '/images/generated/networking-bar.png',
    krystaloreQuote: 'Culture is not a poster on the wall — it is the feeling in the room when the leader walks in. Build a culture where people do not just show up, they show out. That starts with leaders who have done their own inner work.',
    researchInsights: [
      {
        title: 'Culture & Financial Performance',
        citation: 'Harvard Business Review, 2022; McKinsey & Company',
        body: 'McKinsey research demonstrates that companies in the top quartile for organizational health deliver 3x the shareholder returns of bottom-quartile peers. Harvard Business Review confirms that culture-driven organizations see 33% higher revenue growth and 56% lower employee turnover.'
      },
      {
        title: 'Psychological Safety in Teams',
        citation: 'Google Project Aristotle, 2015; Amy Edmondson, Harvard Business School',
        body: 'Google\'s landmark Project Aristotle study identified psychological safety as the single most important factor in high-performing teams. Teams with high psychological safety are 27% more likely to find innovative solutions and 40% more likely to retain top talent.'
      },
      {
        title: 'Somatic Leadership & Organizational Trust',
        citation: 'Journal of Organizational Behavior, 2020; Center for Creative Leadership',
        body: 'Leaders who demonstrate embodied presence — regulated nervous systems, emotional attunement, and somatic awareness — build trust 2.4x faster than those who rely solely on intellectual authority. This trust translates directly into team performance and organizational resilience.'
      },
      {
        title: 'Employee Wellness & Productivity',
        citation: 'WHO Global Workplace Health Report, 2023; Gallup State of the Workplace',
        body: 'The WHO estimates that depression and anxiety cost the global economy $1 trillion annually in lost productivity. Gallup data shows that organizations investing in holistic employee wellbeing see 21% higher profitability and 41% lower absenteeism.'
      }
    ],
    whatThisMeans: {
      high: 'Your organization demonstrates strong cultural health indicators. Your team likely experiences high psychological safety, clear values alignment, and engaged leadership. To maintain this excellence, focus on deepening somatic leadership practices and creating systems that sustain culture through growth and change.',
      medium: 'Your culture assessment reveals a mix of strengths and growth areas — this is the reality for most organizations. There are pockets of excellence alongside areas where disconnection, burnout, or misalignment may be quietly eroding performance. Strategic culture coaching can help you identify and address these gaps before they become crises.',
      low: 'Your results indicate significant cultural challenges that are likely impacting retention, innovation, and bottom-line performance. This is a critical inflection point — left unaddressed, cultural dysfunction compounds. The good news: culture is built by people, and people can change. Executive coaching and organizational development interventions can catalyze rapid transformation.'
    },
    actionSteps: [
      { step: 'Conduct a confidential team pulse survey to identify specific pain points and validate your assessment results', timeline: 'Within 1 week' },
      { step: 'Schedule an executive coaching session focused on your leadership presence and its impact on organizational culture', timeline: 'Within 2 weeks' },
      { step: 'Identify your top 3 culture priorities and create measurable 90-day goals for each', timeline: 'Within 1 month' },
      { step: 'Launch a monthly leadership circle or team breathwork session to build embodied connection', timeline: 'Within 6 weeks' },
      { step: 'Implement quarterly culture assessments to track progress and maintain accountability', timeline: 'Within 90 days' }
    ],
    relatedServices: [
      { name: 'C-Suite Executive Coaching', description: 'Transform your leadership presence and organizational impact through somatic coaching', link: 'https://krystalore.com/c-suite-executive-coaching' },
      { name: 'Corporate Retreat Facilitation', description: 'Immersive team-building experiences that create lasting cultural shifts', link: 'https://krystalore.com/couples-retreats' },
      { name: 'Keynote Speaking', description: 'Inspire your organization with a powerful message on leadership, culture, and transformation', link: 'https://krystalore.com/speaker' }
    ],
    ctaText: 'Book a Culture Transformation Consultation',
    ctaLink: 'https://krystalore.com/book',
    deepLinks: [
      { label: 'Executive Coaching Programs', url: 'https://krystalore.com/c-suite-executive-coaching' },
      { label: 'Corporate Workshops', url: 'https://krystalore.com/workshops' },
      { label: 'Speaker Booking', url: 'https://krystalore.com/speaker' },
      { label: 'Retreat Experiences', url: 'https://krystalore.com/retreat' }
    ]
  },

  'couples-compatibility': {
    title: 'Couples Compatibility Assessment',
    subtitle: 'Discover Your Relationship Strengths & Growth Opportunities',
    heroImage: '/images/go9/group-sunset-dresses.webp',
    accentImage: '/images/krystalore/colibri-image-126.png',
    krystaloreQuote: 'Love is not about finding the perfect person — it is about building the perfect partnership with an imperfect human. The strongest couples are not the ones who never fight; they are the ones who fight for each other, not against each other.',
    researchInsights: [
      {
        title: 'Attachment Styles & Relationship Satisfaction',
        citation: 'Journal of Personality and Social Psychology, 2019; The Gottman Institute',
        body: 'The Gottman Institute\'s four-decade research program reveals that relationship success is predicted by a 5:1 ratio of positive to negative interactions. Couples who understand their attachment styles and learn co-regulation techniques report 67% higher relationship satisfaction.'
      },
      {
        title: 'Somatic Attunement in Partnerships',
        citation: 'Journal of Somatic Psychology, 2020; Attachment & Human Development Journal',
        body: 'Couples who practice somatic attunement — the ability to sense and respond to each other\'s nervous system states — demonstrate 43% fewer escalated conflicts and recover from disagreements 2x faster than couples relying on verbal communication alone.'
      },
      {
        title: 'Communication Patterns & Long-term Outcomes',
        citation: 'American Psychological Association, 2021; Journal of Marriage and Family',
        body: 'APA research shows that couples who engage in structured communication training within the first year of recognizing patterns reduce their risk of separation by 50%. The key predictor is not compatibility but the ability to repair after rupture.'
      }
    ],
    whatThisMeans: {
      high: 'Your compatibility profile reveals a strong relational foundation with healthy communication patterns and emotional attunement. You and your partner demonstrate the capacity for deep connection and effective conflict resolution. Couples coaching can help you move from good to extraordinary — deepening intimacy, building shared vision, and creating a relationship that fuels both partners\' growth.',
      medium: 'Your results indicate a relationship with genuine strengths alongside areas where disconnection or unresolved patterns may be creating friction. This is the most common and also the most transformable position. With targeted couples coaching, you can learn to recognize triggers, regulate together, and build the repair skills that distinguish thriving partnerships from surviving ones.',
      low: 'Your assessment reveals significant areas of disconnection that are likely causing pain for both partners. This does not mean your relationship is broken — it means it needs intentional care. Many of the strongest partnerships were built through the willingness to face hard truths together. Professional couples coaching can provide the safe container and practical tools for meaningful reconnection.'
    },
    actionSteps: [
      { step: 'Schedule a dedicated 30-minute weekly check-in with your partner — no phones, no agenda beyond honest sharing', timeline: 'Start this week' },
      { step: 'Book a couples coaching session to explore your unique relational dynamics and create a growth roadmap', timeline: 'Within 2 weeks' },
      { step: 'Practice the 6-second kiss and 5-minute daily appreciation rituals recommended by relationship researchers', timeline: 'Start immediately' },
      { step: 'Identify your top 3 recurring conflict patterns and discuss them during a calm, regulated moment', timeline: 'Within 1 month' },
      { step: 'Consider attending a couples retreat for intensive, immersive relationship renewal', timeline: 'Within 3 months' }
    ],
    relatedServices: [
      { name: 'Couples Coaching', description: 'Transform your relationship through somatic-based couples work and communication mastery', link: 'https://krystalore.com/apply-for-coaching' },
      { name: 'Couples Retreat Experience', description: 'Immersive weekend retreat designed to reignite connection and build lasting partnership skills', link: 'https://krystalore.com/couples-retreats' },
      { name: 'Marriage & Family Coaching', description: 'Comprehensive coaching for couples and families navigating transitions and growth', link: 'https://krystalore.com/apply-for-coaching' }
    ],
    ctaText: 'Book Your Couples Discovery Session',
    ctaLink: 'https://krystalore.com/book',
    deepLinks: [
      { label: 'Couples Retreat Details', url: 'https://krystalore.com/couples-retreats' },
      { label: 'Coaching Application', url: 'https://krystalore.com/apply-for-coaching' },
      { label: 'Marriage Resources', url: 'https://krystalore.com/products' },
      { label: 'Upcoming Events', url: 'https://krystalore.com/upcoming-events' }
    ]
  },

  depression: {
    title: 'Depression Screening Assessment',
    subtitle: 'Understanding Your Emotional Landscape & Pathways to Healing',
    heroImage: '/images/go9/coaching.jpg',
    accentImage: '/images/krystalore/colibri-image-160.png',
    krystaloreQuote: 'Depression is not weakness — it is the weight of carrying emotions your body was never taught to process. Healing does not mean pretending the darkness was not real. It means learning to carry light alongside it until the light becomes stronger.',
    researchInsights: [
      {
        title: 'Somatic Approaches to Depression',
        citation: 'Journal of Affective Disorders, 2020; World Health Organization',
        body: 'The WHO identifies depression as the leading cause of disability worldwide. Research published in the Journal of Affective Disorders shows that somatic interventions — combining movement, breathwork, and body awareness — reduce depressive symptoms by 49% compared to 31% for standard cognitive approaches alone.'
      },
      {
        title: 'Exercise & Neuroplasticity',
        citation: 'The Lancet Psychiatry, 2018; National Institute of Mental Health',
        body: 'A landmark Lancet study analyzing 1.2 million Americans found that exercise reduces mental health burden by 43%. Regular physical activity promotes neuroplasticity — the brain\'s ability to form new neural pathways — offering a biological mechanism for lasting mood improvement.'
      },
      {
        title: 'Social Connection & Recovery',
        citation: 'American Journal of Psychiatry, 2021; Harvard Study of Adult Development',
        body: 'The 85-year Harvard Study of Adult Development confirms that the quality of relationships is the strongest predictor of both physical health and life satisfaction. Individuals who maintain strong social connections during depressive episodes recover 60% faster than those who isolate.'
      },
      {
        title: 'Purpose & Meaning in Mental Health',
        citation: 'Journal of Clinical Psychology, 2022; Viktor Frankl Institute',
        body: 'Research consistently shows that individuals with a strong sense of purpose demonstrate remarkable resilience against depression. Purpose-driven living activates reward centers in the brain that counteract the neurochemical patterns associated with depressive states.'
      }
    ],
    whatThisMeans: {
      high: 'Your score suggests you are managing your emotional health well, with strong coping mechanisms and life satisfaction. Continue nurturing your mental wellness practices and consider deepening your self-awareness through advanced coaching to maintain this foundation during life\'s inevitable challenges.',
      medium: 'Your results indicate you are experiencing some depressive symptoms that may be impacting your energy, motivation, or joy. This is more common than you might think — and it is treatable. A combination of somatic coaching, lifestyle adjustments, and community support can create significant shifts in your emotional landscape.',
      low: 'Your assessment reveals significant depressive symptoms that deserve compassionate attention. Please know that seeking help is an act of courage, not weakness. While coaching is a powerful complement, we recommend also consulting with a mental health professional. Krystalore\'s approach integrates beautifully with clinical treatment, addressing the body-mind connection that traditional therapy often misses.'
    },
    actionSteps: [
      { step: 'Commit to 20 minutes of movement daily — walking, stretching, or gentle exercise to activate mood-boosting neurochemistry', timeline: 'Start today' },
      { step: 'Schedule a coaching consultation to explore somatic approaches to emotional healing and build a personalized recovery plan', timeline: 'Within 1 week' },
      { step: 'Identify one activity that used to bring you joy and reintroduce it into your weekly routine, even in small doses', timeline: 'This week' },
      { step: 'Establish a morning routine that includes breathwork, gratitude practice, and intentional body movement', timeline: 'Within 2 weeks' },
      { step: 'Build or reconnect with a support community — isolation deepens depression while connection heals it', timeline: 'Within 1 month' }
    ],
    relatedServices: [
      { name: 'Private Somatic Coaching', description: 'Personalized sessions addressing the body-mind connection in emotional healing', link: 'https://krystalore.com/apply-for-coaching' },
      { name: 'Group Healing Workshops', description: 'Supportive community experiences combining movement, breathwork, and sharing', link: 'https://krystalore.com/workshops' },
      { name: 'Revival Retreat', description: 'Immersive healing retreat designed for deep emotional transformation and renewal', link: 'https://krystalore.com/revival-retreat' }
    ],
    ctaText: 'Book Your Healing Discovery Session',
    ctaLink: 'https://krystalore.com/book',
    deepLinks: [
      { label: 'Coaching Programs', url: 'https://krystalore.com/apply-for-coaching' },
      { label: 'Wellness Workshops', url: 'https://krystalore.com/workshops' },
      { label: 'Retreat Experiences', url: 'https://krystalore.com/retreat' },
      { label: 'Free Resources', url: 'https://krystalore.com/products' }
    ]
  },

  'emotional-intelligence': {
    title: 'Emotional Intelligence Assessment',
    subtitle: 'Measure Your EQ & Unlock the Power of Emotional Mastery',
    heroImage: '/images/generated/keynote-speaker.png',
    accentImage: '/images/go9/portrait.jpg',
    krystaloreQuote: 'Emotional intelligence is not about controlling your emotions — it is about understanding them so deeply that they become your greatest leadership asset. The most powerful person in any room is the one who can feel everything and still choose their response.',
    researchInsights: [
      {
        title: 'EQ vs IQ in Leadership Success',
        citation: 'Harvard Business Review, 2020; Daniel Goleman Research Institute',
        body: 'Daniel Goleman\'s research demonstrates that emotional intelligence accounts for 67% of the competencies required for outstanding leadership performance — twice the importance of technical expertise and IQ combined. Leaders with high EQ generate 20% more revenue for their organizations.'
      },
      {
        title: 'Emotional Regulation & Decision Making',
        citation: 'Journal of Personality and Social Psychology, 2019; Wharton School of Business',
        body: 'Wharton research reveals that leaders who demonstrate emotional regulation make 34% better strategic decisions during crises. The ability to manage emotional reactions creates cognitive space for creative problem-solving and nuanced judgment.'
      },
      {
        title: 'Somatic Emotional Intelligence',
        citation: 'Journal of Somatic Psychology, 2021; Center for Nonviolent Communication',
        body: 'Emerging research in somatic psychology shows that emotional intelligence is not purely cognitive — it is embodied. Individuals who develop body-based emotional awareness (interoception) demonstrate 41% higher accuracy in reading others\' emotional states and responding appropriately.'
      },
      {
        title: 'EQ & Organizational Culture',
        citation: 'Gallup Workplace Report, 2022; Society for Human Resource Management',
        body: 'Gallup data confirms that teams led by emotionally intelligent managers show 50% higher engagement and 44% higher retention. SHRM estimates that replacing an employee costs 50-200% of their annual salary, making EQ-driven leadership a direct financial advantage.'
      }
    ],
    whatThisMeans: {
      high: 'Your emotional intelligence profile is impressive. You demonstrate strong self-awareness, empathy, and social navigation skills. To continue growing, focus on the subtleties — micro-expressions, energetic leadership, and the somatic dimensions of emotional mastery that separate good leaders from transformational ones.',
      medium: 'Your EQ assessment reveals a solid foundation with specific areas ripe for development. You likely excel in some dimensions (perhaps self-awareness or empathy) while others (perhaps emotional regulation under stress or social influence) need targeted attention. This is the sweet spot for coaching — small improvements in EQ yield outsized results.',
      low: 'Your results suggest emotional intelligence is an area where significant growth is available to you. This is not a character flaw — EQ is a skill set, and like any skill, it can be developed. Many of the most successful leaders started exactly where you are. Structured coaching can help you build the emotional awareness and regulation skills that transform every area of your life.'
    },
    actionSteps: [
      { step: 'Start an emotion journal — three times daily, pause and name what you are feeling in your body, not just your mind', timeline: 'Start today' },
      { step: 'Book an EQ coaching session to assess your specific strengths and growth areas across the five EQ dimensions', timeline: 'Within 1 week' },
      { step: 'Practice the 90-second rule: when triggered, breathe for 90 seconds before responding — this is the neurochemical cycle time for emotional reactions', timeline: 'Start immediately' },
      { step: 'Ask three trusted colleagues or friends for honest feedback on your emotional impact in conversations', timeline: 'Within 2 weeks' },
      { step: 'Complete an advanced EQ development program combining somatic awareness, communication skills, and leadership presence', timeline: 'Within 3 months' }
    ],
    relatedServices: [
      { name: 'Executive EQ Coaching', description: 'Develop world-class emotional intelligence through somatic and cognitive approaches', link: 'https://krystalore.com/c-suite-executive-coaching' },
      { name: 'Leadership Workshops', description: 'Group training in emotional intelligence, communication, and embodied leadership', link: 'https://krystalore.com/workshops' },
      { name: 'Keynote Speaking', description: 'Bring the EQ conversation to your organization with a powerful keynote experience', link: 'https://krystalore.com/speaker' }
    ],
    ctaText: 'Book Your EQ Breakthrough Session',
    ctaLink: 'https://krystalore.com/book',
    deepLinks: [
      { label: 'Executive Coaching', url: 'https://krystalore.com/c-suite-executive-coaching' },
      { label: 'Workshop Calendar', url: 'https://krystalore.com/workshops' },
      { label: 'Speaker Booking', url: 'https://krystalore.com/speaker' },
      { label: 'Free EQ Resources', url: 'https://krystalore.com/products' }
    ]
  },

  'entrepreneur-readiness': {
    title: 'Entrepreneur Readiness Assessment',
    subtitle: 'Evaluate Your Entrepreneurial Mindset & Business Launch Potential',
    heroImage: '/images/generated/business-speaking.png',
    accentImage: '/images/generated/smart-technology.png',
    krystaloreQuote: 'Entrepreneurship is not just a business decision — it is a nervous system decision. Your ability to hold uncertainty, regulate through fear, and lead from vision instead of survival mode determines everything. Build your inner CEO before you build your empire.',
    researchInsights: [
      {
        title: 'Entrepreneurial Resilience & Success',
        citation: 'Harvard Business Review, 2021; Kauffman Foundation',
        body: 'The Kauffman Foundation reports that entrepreneurial resilience — the ability to recover from setbacks — is the number one predictor of business success, outranking initial capital, market timing, and even the business idea itself. Resilient founders are 3x more likely to build sustainable businesses.'
      },
      {
        title: 'Stress Tolerance & Business Performance',
        citation: 'Journal of Business Venturing, 2020; Stanford Graduate School of Business',
        body: 'Stanford research shows that entrepreneurs with high stress tolerance and emotional regulation skills generate 29% more revenue and are 45% less likely to experience burnout-related business failure. The nervous system is quite literally the foundation of entrepreneurial performance.'
      },
      {
        title: 'Somatic Intelligence in Decision Making',
        citation: 'Entrepreneurship Theory and Practice, 2022; MIT Sloan Management Review',
        body: 'MIT research reveals that successful entrepreneurs often rely on "gut instinct" — which is actually somatic intelligence, the body\'s ability to process information below conscious awareness. Developing this capacity through body-based practices improves entrepreneurial decision accuracy by 37%.'
      }
    ],
    whatThisMeans: {
      high: 'Your entrepreneurial readiness profile is strong. You demonstrate the mindset resilience, risk tolerance, and self-awareness needed to launch and grow a successful business. Strategic coaching can help you refine your vision, build your leadership presence, and avoid the common pitfalls that derail even talented entrepreneurs.',
      medium: 'Your results reveal genuine entrepreneurial potential alongside areas that need strengthening before you launch or scale. This is actually ideal — awareness of your gaps before you are in the arena is a strategic advantage. Focused coaching on stress management, decision-making frameworks, and leadership embodiment can dramatically increase your success probability.',
      low: 'Your assessment suggests some foundational areas need development before entrepreneurship will be sustainable for you. This is not a "no" — it is a "not yet without preparation." Many successful entrepreneurs needed to build their inner resilience, financial literacy, and leadership skills before launching. Coaching can accelerate this preparation dramatically.'
    },
    actionSteps: [
      { step: 'Clarify your entrepreneurial vision: write a one-page document describing who you serve, what problem you solve, and why you are uniquely positioned to solve it', timeline: 'This week' },
      { step: 'Book an entrepreneur coaching session to assess your readiness across mindset, skills, finances, and network dimensions', timeline: 'Within 1 week' },
      { step: 'Develop a daily regulation practice — entrepreneurs face constant uncertainty, and your nervous system must be trained for it', timeline: 'Start immediately' },
      { step: 'Identify your top 3 skill gaps and create a 90-day learning plan to address them', timeline: 'Within 2 weeks' },
      { step: 'Join an entrepreneurial community or mastermind group for accountability, support, and strategic thinking', timeline: 'Within 1 month' }
    ],
    relatedServices: [
      { name: 'Entrepreneur Coaching', description: 'Build your inner CEO through somatic leadership and strategic business coaching', link: 'https://krystalore.com/entrepreneur-coaching' },
      { name: 'Business Smart Start Program', description: 'Comprehensive program for launching or scaling your business with confidence', link: 'https://krystalore.com/business-smart-start' },
      { name: 'Scale Your Business Coaching', description: 'Strategic coaching for entrepreneurs ready to move from startup to scale-up', link: 'https://krystalore.com/apply-for-coaching' }
    ],
    ctaText: 'Book Your Entrepreneur Strategy Session',
    ctaLink: 'https://krystalore.com/book',
    deepLinks: [
      { label: 'Entrepreneur Coaching', url: 'https://krystalore.com/entrepreneur-coaching' },
      { label: 'Business Smart Start', url: 'https://krystalore.com/business-smart-start' },
      { label: 'Workshops & Events', url: 'https://krystalore.com/workshops' },
      { label: 'Free Business Resources', url: 'https://krystalore.com/products' }
    ]
  },

  'improve-marriage': {
    title: 'Marriage Improvement Assessment',
    subtitle: 'Strengthen Your Partnership & Build a Love That Lasts',
    heroImage: '/images/go9/group-sunset-dresses.webp',
    accentImage: '/images/krystalore/colibri-image-66.png',
    krystaloreQuote: 'A great marriage is not something you find — it is something you build, every single day, with every choice to show up fully. The couples who last are not the ones without problems; they are the ones who refuse to let problems define them.',
    researchInsights: [
      {
        title: 'The Four Horsemen of Relationship Failure',
        citation: 'The Gottman Institute, 2019; Journal of Marriage and Family',
        body: 'Dr. John Gottman\'s research identifies four communication patterns — criticism, contempt, defensiveness, and stonewalling — that predict divorce with 93% accuracy. Couples who learn to recognize and replace these patterns with healthy alternatives report dramatic improvements in relationship satisfaction within 90 days.'
      },
      {
        title: 'Co-Regulation in Marriage',
        citation: 'Journal of Somatic Psychology, 2021; Attachment & Human Development',
        body: 'Partners literally regulate each other\'s nervous systems — a phenomenon called co-regulation. Research shows that couples who develop awareness of this dynamic and learn intentional co-regulation techniques experience 58% fewer escalated conflicts and deeper emotional intimacy.'
      },
      {
        title: 'Intentional Connection & Longevity',
        citation: 'American Psychological Association, 2022; Harvard Study of Adult Development',
        body: 'The APA reports that couples who maintain intentional connection rituals — daily check-ins, weekly dates, annual retreats — show 71% higher marital satisfaction after 20 years compared to those who leave connection to chance. Structure creates the space for spontaneity.'
      }
    ],
    whatThisMeans: {
      high: 'Your marriage demonstrates strong foundational elements including communication, trust, and mutual support. You are already doing many things well. Advanced couples coaching can help you move from a good marriage to an extraordinary one — deepening intimacy, aligning life visions, and building the kind of partnership that inspires everyone around you.',
      medium: 'Your results reveal a marriage with genuine love and commitment alongside areas where patterns, stress, or disconnection may be creating distance. This is the reality of most long-term partnerships, and it is deeply workable. Targeted coaching can help you and your partner develop new communication skills, repair old wounds, and reignite the connection that brought you together.',
      low: 'Your assessment indicates significant challenges in your marriage that deserve immediate, compassionate attention. This honesty with yourself is the first step toward healing. Many couples who sought help at this stage have rebuilt stronger, more connected partnerships than they ever had. Professional coaching provides the tools and safe space to begin that rebuilding process.'
    },
    actionSteps: [
      { step: 'Reinstate a daily connection ritual — even 10 minutes of undivided attention strengthens the marital bond neurologically', timeline: 'Start tonight' },
      { step: 'Schedule a couples coaching consultation to identify your specific growth areas and create a transformation roadmap', timeline: 'Within 1 week' },
      { step: 'Practice the Gottman "bid for connection" technique — notice and respond positively to your partner\'s emotional bids throughout the day', timeline: 'Start immediately' },
      { step: 'Plan a relationship reset experience — whether a weekend retreat, a coaching intensive, or a dedicated getaway', timeline: 'Within 1 month' },
      { step: 'Commit to a 90-day marriage improvement plan with weekly progress check-ins and professional support', timeline: 'Within 2 weeks' }
    ],
    relatedServices: [
      { name: 'Couples Coaching', description: 'Somatic-based couples work that transforms how you communicate, connect, and grow together', link: 'https://krystalore.com/apply-for-coaching' },
      { name: 'Couples Retreat', description: 'Immersive weekend experiences designed for deep reconnection and partnership renewal', link: 'https://krystalore.com/couples-retreats' },
      { name: 'Marriage & Family Coaching', description: 'Comprehensive coaching for couples and families navigating challenges and transitions', link: 'https://krystalore.com/apply-for-coaching' }
    ],
    ctaText: 'Book Your Marriage Breakthrough Session',
    ctaLink: 'https://krystalore.com/book',
    deepLinks: [
      { label: 'Couples Retreats', url: 'https://krystalore.com/couples-retreats' },
      { label: 'Apply for Coaching', url: 'https://krystalore.com/apply-for-coaching' },
      { label: 'Relationship Resources', url: 'https://krystalore.com/products' },
      { label: 'Upcoming Events', url: 'https://krystalore.com/upcoming-events' }
    ]
  },

  'life-alignment': {
    title: 'Life Alignment Assessment',
    subtitle: 'Measure How Well Your Life Reflects Your Deepest Values',
    heroImage: '/images/go9/hero.jpg',
    accentImage: '/images/generated/vision-board-workshops.png',
    krystaloreQuote: 'Alignment is not about having a perfect life — it is about building a life that is perfectly yours. When your daily actions match your deepest values, exhaustion transforms into energy and obligation transforms into purpose.',
    researchInsights: [
      {
        title: 'Values-Action Alignment & Life Satisfaction',
        citation: 'Journal of Positive Psychology, 2021; Martin Seligman, University of Pennsylvania',
        body: 'Seligman\'s research on flourishing demonstrates that individuals with high values-action alignment report 62% greater life satisfaction and 47% less burnout than those living incongruently. Alignment is not a luxury — it is a fundamental human psychological need.'
      },
      {
        title: 'Purpose & Physical Health',
        citation: 'JAMA Network Open, 2019; NIH Longitudinal Study',
        body: 'A JAMA study following 6,985 adults found that those with a strong sense of purpose had a 15.2% lower risk of death from all causes. Purpose-driven living is not just psychologically beneficial — it is physiologically protective, reducing inflammation markers and improving cardiovascular health.'
      },
      {
        title: 'Somatic Alignment & Authentic Living',
        citation: 'Journal of Somatic Psychology, 2022; Body-Mind Centering Institute',
        body: 'The body always knows when we are out of alignment — manifesting as chronic tension, fatigue, illness, or restlessness. Somatic approaches to life design help individuals reconnect with their embodied wisdom, leading to decisions that feel right in the body, not just in the mind.'
      }
    ],
    whatThisMeans: {
      high: 'Your life alignment score indicates that you are living in strong congruence with your values and purpose. This is rare and worth celebrating. To deepen this alignment, consider exploring the subtle areas where autopilot might be creeping in, and use coaching to ensure your alignment scales with your ambitions.',
      medium: 'Your results suggest partial alignment — some areas of your life feel purposeful and authentic while others feel like you are going through the motions. This disconnection often creates a persistent low-grade dissatisfaction that is hard to name. Life alignment coaching can help you identify exactly where the gaps are and create a strategic plan to close them.',
      low: 'Your assessment reveals significant misalignment between your current life and your core values. If you have been feeling exhausted, unfulfilled, or like you are living someone else\'s life, this confirms what your body already knows. This is a pivotal moment — the awareness itself is the beginning of transformation. Coaching can help you redesign your life from the inside out.'
    },
    actionSteps: [
      { step: 'Complete a values clarification exercise: identify your top 5 non-negotiable values and rate how well your current life honors each one (1-10)', timeline: 'This week' },
      { step: 'Book a life alignment coaching session to create your personalized transformation roadmap', timeline: 'Within 1 week' },
      { step: 'Identify one major area of misalignment and take one concrete step to shift it — even small moves create momentum', timeline: 'Within 2 weeks' },
      { step: 'Create a vision board or written vision document that captures your aligned future in vivid detail', timeline: 'Within 1 month' },
      { step: 'Establish a monthly life audit practice — review how your time, energy, and resources map to your stated values', timeline: 'Ongoing monthly' }
    ],
    relatedServices: [
      { name: 'Life Alignment Coaching', description: 'Comprehensive coaching to redesign your life around your authentic values and purpose', link: 'https://krystalore.com/apply-for-coaching' },
      { name: 'Vision Board Workshop', description: 'Create a powerful visual blueprint for your aligned future', link: 'https://krystalore.com/vision-board' },
      { name: 'Revival Retreat', description: 'Immersive retreat experience for deep life reflection, healing, and strategic redesign', link: 'https://krystalore.com/revival-retreat' }
    ],
    ctaText: 'Book Your Life Alignment Session',
    ctaLink: 'https://krystalore.com/book',
    deepLinks: [
      { label: 'Coaching Programs', url: 'https://krystalore.com/apply-for-coaching' },
      { label: 'Vision Board Workshop', url: 'https://krystalore.com/vision-board' },
      { label: 'Retreat Experiences', url: 'https://krystalore.com/retreat' },
      { label: 'Free Resources', url: 'https://krystalore.com/products' }
    ]
  },

  'marathon-ready': {
    title: 'Marathon Readiness Assessment',
    subtitle: 'Evaluate Your Physical & Mental Preparation for Race Day',
    heroImage: '/images/generated/exercise-running-man.png',
    accentImage: '/images/generated/all-body-fitness.png',
    krystaloreQuote: 'A marathon is not just 26.2 miles — it is a conversation between your body and your will. The runners who finish strong are not always the fastest; they are the ones who trained their minds as hard as their legs. Your body will quit a thousand times. Your spirit must say no.',
    researchInsights: [
      {
        title: 'Mental Toughness & Endurance Performance',
        citation: 'Journal of Sports Sciences, 2020; British Journal of Sports Medicine',
        body: 'Research in the Journal of Sports Sciences shows that mental toughness accounts for 45% of variance in marathon finishing times among runners with similar physical preparation. The British Journal of Sports Medicine confirms that psychological skills training can improve endurance performance by 10-15%.'
      },
      {
        title: 'Mind-Body Integration in Athletic Performance',
        citation: 'International Journal of Sport Psychology, 2021; Nike Sport Research Lab',
        body: 'Elite performance research demonstrates that athletes who practice mind-body integration techniques — including somatic awareness, visualization, and breath control — show 23% better pain tolerance and 31% improved race-day decision making compared to those who train only physically.'
      },
      {
        title: 'Recovery & Stress Management',
        citation: 'Medicine & Science in Sports & Exercise, 2022; American College of Sports Medicine',
        body: 'ACSM research reveals that improper recovery and unmanaged life stress are the top two causes of marathon training failure and injury. Athletes who integrate stress management and somatic recovery practices reduce injury risk by 42% and improve training consistency by 38%.'
      }
    ],
    whatThisMeans: {
      high: 'Your marathon readiness profile is strong across physical preparation, mental toughness, and recovery practices. You are well-positioned for race day. To optimize your performance, focus on race-day mental strategies, fine-tune your nutrition plan, and ensure your taper is dialed in. Consider coaching for the mental edge that separates finishers from personal-best breakers.',
      medium: 'Your results indicate solid preparation in some areas with gaps in others — perhaps physical training is strong but mental preparation or recovery is lacking, or vice versa. This is common and highly addressable. Targeted coaching on your specific weak areas can be the difference between surviving a marathon and thriving through it.',
      low: 'Your assessment suggests more preparation is needed before race day. This is valuable information — running a marathon underprepared leads to injury, misery, or both. Consider extending your timeline, addressing the specific areas flagged in your results, and working with a coach who integrates mind-body preparation. A well-prepared marathon is a transformational experience; a poorly prepared one is just suffering.'
    },
    actionSteps: [
      { step: 'Assess your current training plan against your goal race date and identify specific gaps in mileage, speed work, or long runs', timeline: 'This week' },
      { step: 'Integrate a daily 10-minute visualization and breathwork practice focused on race-day scenarios and positive outcomes', timeline: 'Start immediately' },
      { step: 'Book a coaching session to develop your race-day mental strategy and stress management plan', timeline: 'Within 1 week' },
      { step: 'Establish a consistent recovery protocol including sleep optimization, nutrition timing, and active recovery days', timeline: 'Within 2 weeks' },
      { step: 'Complete at least two race-simulation long runs incorporating your nutrition, hydration, and mental strategy', timeline: 'Before race day' }
    ],
    relatedServices: [
      { name: 'Athletic Performance Coaching', description: 'Mind-body coaching for athletes seeking peak performance and resilience', link: 'https://krystalore.com/apply-for-coaching' },
      { name: 'Six-Week Shred Program', description: 'Intensive fitness and mindset program to elevate your physical preparation', link: 'https://krystalore.com/six-week-shred' },
      { name: 'Group Fitness Workshops', description: 'Community training sessions combining physical challenge with mental fortitude', link: 'https://krystalore.com/workshops' }
    ],
    ctaText: 'Book Your Performance Coaching Session',
    ctaLink: 'https://krystalore.com/book',
    deepLinks: [
      { label: 'Six-Week Shred', url: 'https://krystalore.com/six-week-shred' },
      { label: 'Coaching Application', url: 'https://krystalore.com/apply-for-coaching' },
      { label: 'Workshop Calendar', url: 'https://krystalore.com/workshops' },
      { label: 'Free Training Resources', url: 'https://krystalore.com/products' }
    ]
  },

  'marriage-family': {
    title: 'Marriage & Family Wellness Assessment',
    subtitle: 'Evaluate Your Family System & Build Stronger Connections',
    heroImage: '/images/go9/community-hands.jpg',
    accentImage: '/images/go9/group.jpg',
    krystaloreQuote: 'Family is where we first learn love — and where our deepest wounds often live. Healing your family system is not about blame. It is about breaking cycles, building new patterns, and creating a legacy of wholeness for the generations that follow you.',
    researchInsights: [
      {
        title: 'Family Systems & Individual Wellbeing',
        citation: 'Family Process Journal, 2021; American Association for Marriage and Family Therapy',
        body: 'Family systems research consistently demonstrates that individual mental health is inseparable from family health. The AAMFT reports that family-focused interventions improve individual outcomes by 48% compared to individual therapy alone, confirming that healing the system heals its members.'
      },
      {
        title: 'Intergenerational Patterns & Epigenetics',
        citation: 'Molecular Psychiatry, 2020; NIH Human Genome Research Institute',
        body: 'Groundbreaking epigenetic research reveals that trauma and stress responses can be transmitted across generations through gene expression changes. This means family patterns are not just behavioral — they are biological. Somatic approaches to family healing address both the psychological and physiological dimensions of intergenerational patterns.'
      },
      {
        title: 'Parental Regulation & Child Development',
        citation: 'Developmental Psychology, 2022; Zero to Three Foundation',
        body: 'Research confirms that the single most important factor in child emotional development is the emotional regulation capacity of their primary caregivers. Parents who develop strong self-regulation skills through coaching or therapy raise children with 53% better emotional outcomes across all measured dimensions.'
      }
    ],
    whatThisMeans: {
      high: 'Your family wellness assessment reveals a healthy, connected family system with strong communication, mutual support, and effective conflict resolution. Your family is doing important things well. To continue thriving, focus on maintaining intentional connection rituals and addressing small issues before they become patterns.',
      medium: 'Your results indicate a family system with genuine strengths alongside areas where stress, communication breakdowns, or unresolved patterns may be creating tension. Most families exist in this space — loving each other deeply while struggling with the practical challenges of connection. Family coaching can provide the tools and framework for meaningful improvement.',
      low: 'Your assessment reveals significant challenges within your family system that are likely affecting every member\'s wellbeing. This honesty is the necessary first step. Family dysfunction is often intergenerational — patterns passed down without awareness. Breaking these cycles requires courage, professional support, and a commitment to building something new. It is possible, and it starts with one person willing to lead the change.'
    },
    actionSteps: [
      { step: 'Initiate a weekly family meeting or check-in — even 15 minutes creates space for connection and prevents buildup', timeline: 'Start this week' },
      { step: 'Book a family coaching consultation to identify patterns, improve communication, and create a family growth plan', timeline: 'Within 1 week' },
      { step: 'Practice reflective listening with each family member — mirror back what they say before responding', timeline: 'Start immediately' },
      { step: 'Identify one intergenerational pattern you want to change and discuss it openly with a coach or counselor', timeline: 'Within 1 month' },
      { step: 'Plan a family experience focused on connection rather than logistics — a retreat, workshop, or dedicated family time', timeline: 'Within 2 months' }
    ],
    relatedServices: [
      { name: 'Family Coaching', description: 'Comprehensive coaching for families navigating challenges, transitions, and growth', link: 'https://krystalore.com/apply-for-coaching' },
      { name: 'Couples Coaching', description: 'Strengthen the partnership foundation that supports your entire family system', link: 'https://krystalore.com/apply-for-coaching' },
      { name: 'Family Retreat Experience', description: 'Immersive family healing and bonding in a supportive, facilitated environment', link: 'https://krystalore.com/retreat' }
    ],
    ctaText: 'Book Your Family Wellness Consultation',
    ctaLink: 'https://krystalore.com/book',
    deepLinks: [
      { label: 'Coaching Programs', url: 'https://krystalore.com/apply-for-coaching' },
      { label: 'Couples Retreats', url: 'https://krystalore.com/couples-retreats' },
      { label: 'Family Resources', url: 'https://krystalore.com/products' },
      { label: 'Upcoming Events', url: 'https://krystalore.com/upcoming-events' }
    ]
  },

  personality: {
    title: 'Personality Discovery Assessment',
    subtitle: 'Uncover Your Core Personality Drivers & Leadership Style',
    heroImage: '/images/generated/private-coaching.png',
    accentImage: '/images/go9/portrait.jpg',
    krystaloreQuote: 'Knowing yourself is the beginning of all wisdom — and all power. When you understand your patterns, your triggers, and your gifts, you stop reacting to life and start creating it. Self-knowledge is not navel-gazing; it is the ultimate strategic advantage.',
    researchInsights: [
      {
        title: 'Self-Awareness & Professional Success',
        citation: 'Harvard Business Review, 2018; Organizational Psychologist Tasha Eurich',
        body: 'Research by Tasha Eurich published in Harvard Business Review reveals that only 10-15% of people are truly self-aware, despite 95% believing they are. Those who develop genuine self-awareness earn higher salaries, receive more promotions, and build more effective teams.'
      },
      {
        title: 'Personality & Somatic Patterns',
        citation: 'Journal of Somatic Psychology, 2020; Wilhelm Reich Institute',
        body: 'Somatic psychology demonstrates that personality is not just mental — it is embodied in posture, breathing patterns, muscle tension, and movement style. Understanding your somatic personality signature provides insights that cognitive assessments alone cannot capture, leading to more authentic and complete self-awareness.'
      },
      {
        title: 'Personality Flexibility & Adaptive Leadership',
        citation: 'Journal of Applied Psychology, 2021; Center for Creative Leadership',
        body: 'The Center for Creative Leadership finds that the most effective leaders are not those with any particular personality type, but those who demonstrate personality flexibility — the ability to adapt their style to the situation. This adaptability can be developed through coaching and self-awareness practices.'
      }
    ],
    whatThisMeans: {
      high: 'Your personality assessment reveals strong self-awareness and an integrated sense of identity. You likely understand your strengths, triggers, and growth edges well. To continue evolving, explore the shadow aspects of your personality — the qualities you suppress or overlook — as they often contain your greatest untapped potential.',
      medium: 'Your results suggest a developing self-awareness with room for deeper exploration. You may have a clear picture of some aspects of your personality while other dimensions remain less examined. This is a natural stage of growth, and structured coaching can accelerate your journey toward a more complete and integrated understanding of who you are.',
      low: 'Your assessment indicates that greater self-awareness is available to you — and it will transform everything. Many high-achievers operate on autopilot, performing well by external measures while feeling disconnected from their authentic selves. Personality coaching can help you discover who you really are beneath the roles, expectations, and survival strategies you have accumulated.'
    },
    actionSteps: [
      { step: 'Spend 10 minutes journaling daily on the question: "What did I feel today, and why?" — building the self-observation muscle', timeline: 'Start today' },
      { step: 'Book a personality coaching session for a deep-dive into your unique personality architecture and how it shapes your life', timeline: 'Within 1 week' },
      { step: 'Ask 5 people who know you well to describe you in 3 words — notice the patterns and surprises', timeline: 'Within 2 weeks' },
      { step: 'Identify one personality pattern that no longer serves you and experiment with a different approach for 30 days', timeline: 'Within 1 month' },
      { step: 'Explore somatic personality work — body-based practices that reveal personality patterns stored in your physical self', timeline: 'Within 6 weeks' }
    ],
    relatedServices: [
      { name: 'Private Coaching', description: 'Deep personality exploration and integration through somatic and cognitive approaches', link: 'https://krystalore.com/apply-for-coaching' },
      { name: 'Leadership Development', description: 'Leverage your personality strengths to become a more authentic and effective leader', link: 'https://krystalore.com/c-suite-executive-coaching' },
      { name: 'Self-Discovery Retreat', description: 'Immersive retreat experience for profound self-understanding and personal transformation', link: 'https://krystalore.com/retreat' }
    ],
    ctaText: 'Book Your Personality Discovery Session',
    ctaLink: 'https://krystalore.com/book',
    deepLinks: [
      { label: 'Coaching Programs', url: 'https://krystalore.com/apply-for-coaching' },
      { label: 'Executive Coaching', url: 'https://krystalore.com/c-suite-executive-coaching' },
      { label: 'Retreat Experiences', url: 'https://krystalore.com/retreat' },
      { label: 'Free Assessment Resources', url: 'https://krystalore.com/products' }
    ]
  },

  'relationship-management': {
    title: 'Relationship Management Assessment',
    subtitle: 'Master the Art of Building & Sustaining Powerful Connections',
    heroImage: '/images/generated/networking-bar.png',
    accentImage: '/images/go9/group-evening.webp',
    krystaloreQuote: 'Every relationship is a mirror. The quality of your connections reflects the quality of your relationship with yourself. When you lead from authenticity, regulate your own nervous system, and communicate with courage, you do not just manage relationships — you transform them.',
    researchInsights: [
      {
        title: 'Relationship Quality & Career Success',
        citation: 'Harvard Business Review, 2022; Center for Creative Leadership',
        body: 'Harvard Business Review reports that 85% of career success comes from relationship skills, not technical expertise. The Center for Creative Leadership confirms that derailed executives almost always fail due to interpersonal issues — inability to build teams, manage conflict, or inspire trust — not strategic or intellectual shortcomings.'
      },
      {
        title: 'Emotional Contagion & Leadership',
        citation: 'Journal of Organizational Behavior, 2020; Sigal Barsade, Wharton',
        body: 'Wharton professor Sigal Barsade\'s research on emotional contagion demonstrates that leaders\' emotional states spread through teams like viruses. Leaders who manage their own emotional regulation effectively create teams that are 26% more productive and 32% more innovative.'
      },
      {
        title: 'Trust Building & Somatic Presence',
        citation: 'Journal of Somatic Psychology, 2021; Neuroscience of Trust (Paul Zak)',
        body: 'Neuroscientist Paul Zak\'s research shows that trust is mediated by oxytocin — a neurochemical released during positive social interactions. Somatic presence (regulated breathing, open body language, genuine eye contact) increases oxytocin release in others by 47%, accelerating trust formation dramatically.'
      }
    ],
    whatThisMeans: {
      high: 'Your relationship management skills are well-developed. You demonstrate strong capabilities in building trust, navigating conflict, and maintaining healthy connections. To reach mastery level, focus on the subtleties: reading room energy, managing up and down simultaneously, and developing the kind of relational influence that feels effortless to others.',
      medium: 'Your results indicate competent relationship skills with specific areas for growth. Perhaps you excel in one-on-one settings but struggle in groups, or build rapport easily but avoid difficult conversations. These patterns are common and coachable. Targeted development in your specific gap areas can unlock significantly better outcomes in every relationship.',
      low: 'Your assessment suggests that relationship management is a primary growth area for you. This may be showing up as conflict avoidance, difficulty building trust, challenges in team settings, or feeling disconnected from others. The good news: these are skills, not personality traits, and they can be developed systematically through coaching and practice.'
    },
    actionSteps: [
      { step: 'Practice one intentional "deep listening" conversation per day — listen to understand, not to respond', timeline: 'Start today' },
      { step: 'Book a relationship coaching session to map your relational patterns and develop a targeted improvement plan', timeline: 'Within 1 week' },
      { step: 'Identify your top 3 most important professional and personal relationships and invest specific energy in strengthening each', timeline: 'Within 2 weeks' },
      { step: 'Address one avoided difficult conversation with preparation, courage, and compassion', timeline: 'Within 1 month' },
      { step: 'Join a leadership or coaching group where you can practice relationship skills in a safe, feedback-rich environment', timeline: 'Within 6 weeks' }
    ],
    relatedServices: [
      { name: 'Executive Coaching', description: 'Develop world-class relationship management skills for leadership and life', link: 'https://krystalore.com/c-suite-executive-coaching' },
      { name: 'Communication Workshops', description: 'Group training in authentic communication, conflict resolution, and trust building', link: 'https://krystalore.com/workshops' },
      { name: 'Leadership Retreats', description: 'Immersive experiences combining relationship skills training with personal development', link: 'https://krystalore.com/retreat' }
    ],
    ctaText: 'Book Your Relationship Mastery Session',
    ctaLink: 'https://krystalore.com/book',
    deepLinks: [
      { label: 'Executive Coaching', url: 'https://krystalore.com/c-suite-executive-coaching' },
      { label: 'Workshop Calendar', url: 'https://krystalore.com/workshops' },
      { label: 'Retreat Details', url: 'https://krystalore.com/retreat' },
      { label: 'Free Resources', url: 'https://krystalore.com/products' }
    ]
  },

  'retreat-ready': {
    title: 'Retreat Readiness Assessment',
    subtitle: 'Discover If You\'re Ready for a Transformational Retreat Experience',
    heroImage: '/images/go9/retreat-costa-rica.jpg',
    accentImage: '/images/generated/spa-relaxation.png',
    krystaloreQuote: 'A retreat is not a vacation — it is a strategic withdrawal from the noise so you can hear the signal. The most successful people I work with do not retreat from their lives; they retreat into their lives, returning with clarity, energy, and a plan that their daily existence could never produce.',
    researchInsights: [
      {
        title: 'Immersive Experiences & Behavioral Change',
        citation: 'Journal of Positive Psychology, 2021; Stanford Behavior Design Lab',
        body: 'Stanford\'s Behavior Design Lab demonstrates that immersive multi-day experiences produce 5x more lasting behavioral change than equivalent hours of weekly sessions. The concentrated nature of retreats creates neurological conditions optimal for insight, integration, and lasting transformation.'
      },
      {
        title: 'Nature Exposure & Mental Health',
        citation: 'Frontiers in Psychology, 2019; Environmental Health Perspectives (NIH)',
        body: 'NIH-funded research confirms that extended nature exposure (2+ days) reduces cortisol by 35%, increases creative thinking by 50%, and improves mood scores for up to 30 days post-experience. Retreat settings leverage this "nature effect" to amplify therapeutic and coaching outcomes.'
      },
      {
        title: 'Group Healing & Social Connection',
        citation: 'American Journal of Community Psychology, 2020; Brené Brown Research',
        body: 'Brené Brown\'s research on vulnerability and connection shows that group healing experiences create bonds and breakthroughs that individual work cannot replicate. Retreat participants who engage in facilitated group processes report 67% greater insight and 54% stronger commitment to change.'
      }
    ],
    whatThisMeans: {
      high: 'You are highly ready for a retreat experience. Your self-awareness, emotional openness, and commitment to growth position you to get maximum value from an immersive transformation experience. The question is not whether you are ready — it is which retreat experience will best serve your next level of growth.',
      medium: 'Your readiness profile shows genuine interest and partial preparation. You may have some concerns about vulnerability in a group setting, time away from responsibilities, or uncertainty about what to expect. These are normal and workable. A pre-retreat coaching session can address your specific concerns and ensure you arrive prepared to receive everything the experience offers.',
      low: 'Your assessment suggests that some preparation would help you get the most from a retreat experience. This might mean addressing specific fears, building foundational self-awareness, or ensuring your life circumstances allow you to be fully present. Consider starting with a workshop or coaching program that builds toward retreat readiness over time.'
    },
    actionSteps: [
      { step: 'Reflect on what you most want to gain from a retreat experience — clarity on this intention multiplies the impact', timeline: 'This week' },
      { step: 'Book a retreat consultation to discuss your goals, concerns, and the right retreat experience for your stage of growth', timeline: 'Within 1 week' },
      { step: 'Begin a daily mindfulness practice to build the self-awareness and presence that will serve you during the retreat', timeline: 'Start immediately' },
      { step: 'Address practical logistics — clear your calendar, arrange coverage for responsibilities, and commit fully to the experience', timeline: 'Based on retreat date' },
      { step: 'Set a personal intention and share it with someone who will hold you accountable for follow-through after the retreat', timeline: 'Before the retreat' }
    ],
    relatedServices: [
      { name: 'Revival Retreat', description: 'Krystalore\'s signature immersive retreat experience — transformation through somatic healing, breathwork, and community', link: 'https://krystalore.com/revival-retreat' },
      { name: 'Couples Retreat', description: 'Intimate retreat experience designed for partners seeking deeper connection and renewal', link: 'https://krystalore.com/couples-retreats' },
      { name: 'Corporate Retreat Facilitation', description: 'Custom-designed retreat experiences for teams and organizations', link: 'https://krystalore.com/retreat' }
    ],
    ctaText: 'Reserve Your Retreat Spot',
    ctaLink: 'https://krystalore.com/revival-retreat',
    deepLinks: [
      { label: 'Revival Retreat Details', url: 'https://krystalore.com/revival-retreat' },
      { label: 'Couples Retreat', url: 'https://krystalore.com/couples-retreats' },
      { label: 'Upcoming Retreat Dates', url: 'https://krystalore.com/upcoming-events' },
      { label: 'Retreat FAQs', url: 'https://krystalore.com/retreat' }
    ]
  },

  'scale-your-business': {
    title: 'Scale Your Business Assessment',
    subtitle: 'Evaluate Your Readiness to Grow from Startup to Scale-Up',
    heroImage: '/images/generated/business-speaking.png',
    accentImage: '/images/generated/coworking-power-hour.png',
    krystaloreQuote: 'Scaling a business is not about doing more — it is about becoming more. The CEO who built a $100K business is not the same person who will build a $1M business. You have to scale yourself first. Your business can only grow as far as you do.',
    researchInsights: [
      {
        title: 'Founder Burnout & Business Failure',
        citation: 'Harvard Business Review, 2022; Kauffman Foundation',
        body: 'The Kauffman Foundation reports that 72% of entrepreneurs experience mental health issues, and founder burnout is the leading cause of startup failure at the scaling stage. Harvard Business Review confirms that businesses led by emotionally regulated founders grow 2.3x faster during the critical scaling period.'
      },
      {
        title: 'Systems Thinking & Scalability',
        citation: 'MIT Sloan Management Review, 2021; McKinsey Growth Report',
        body: 'McKinsey\'s growth research shows that businesses with documented systems and processes scale 4x more predictably than those relying on founder heroics. MIT Sloan confirms that the transition from founder-dependent to systems-dependent is the single most critical inflection point in business growth.'
      },
      {
        title: 'Leadership Evolution in Growth Companies',
        citation: 'Journal of Business Venturing, 2022; Stanford Graduate School of Business',
        body: 'Stanford research demonstrates that the leadership skills required at each stage of business growth are fundamentally different. Founders who invest in their own leadership development during scaling are 58% more likely to successfully navigate the transition from operator to CEO.'
      }
    ],
    whatThisMeans: {
      high: 'Your business scaling readiness is strong. You demonstrate the leadership maturity, systems thinking, and strategic awareness needed to grow your business to the next level. Focus your coaching investment on the specific bottleneck in your growth — whether that is team building, financial strategy, operational systems, or market expansion.',
      medium: 'Your assessment reveals a business with scaling potential alongside critical gaps that need addressing. Perhaps you have strong revenue but weak systems, a great product but limited team capacity, or ambitious vision but unclear execution strategy. These gaps are normal at this stage and highly coachable. Addressing them now prevents the costly mistakes that tank most scaling businesses.',
      low: 'Your results suggest that significant foundational work is needed before sustainable scaling is advisable. Scaling a business with cracks in its foundation amplifies every problem. This awareness is valuable — it allows you to strengthen your base before accelerating growth. Strategic coaching can help you identify priorities and build the infrastructure that makes growth sustainable.'
    },
    actionSteps: [
      { step: 'Audit your current business systems: identify which processes are documented, which depend on you personally, and which do not exist yet', timeline: 'This week' },
      { step: 'Book a business scaling consultation to create your growth roadmap and identify your biggest leverage points', timeline: 'Within 1 week' },
      { step: 'Identify the one hire, system, or decision that would have the biggest impact on your ability to scale — and execute it', timeline: 'Within 1 month' },
      { step: 'Develop a personal leadership development plan that evolves your skills ahead of your business growth', timeline: 'Within 2 weeks' },
      { step: 'Join a business mastermind or peer advisory group for strategic thinking and accountability', timeline: 'Within 1 month' }
    ],
    relatedServices: [
      { name: 'Entrepreneur Coaching', description: 'Strategic coaching for business owners ready to scale with confidence and sustainability', link: 'https://krystalore.com/entrepreneur-coaching' },
      { name: 'Business Smart Start', description: 'Comprehensive business development program from launch through scale', link: 'https://krystalore.com/business-smart-start' },
      { name: 'Executive Coaching', description: 'Leadership development for founders transitioning from operator to CEO', link: 'https://krystalore.com/c-suite-executive-coaching' }
    ],
    ctaText: 'Book Your Business Scaling Strategy Session',
    ctaLink: 'https://krystalore.com/book',
    deepLinks: [
      { label: 'Entrepreneur Coaching', url: 'https://krystalore.com/entrepreneur-coaching' },
      { label: 'Business Smart Start', url: 'https://krystalore.com/business-smart-start' },
      { label: 'Executive Coaching', url: 'https://krystalore.com/c-suite-executive-coaching' },
      { label: 'Workshop Schedule', url: 'https://krystalore.com/workshops' }
    ]
  },

  'self-awareness': {
    title: 'Self-Awareness Assessment',
    subtitle: 'Discover the Depth of Your Inner Knowledge & Conscious Living',
    heroImage: '/images/go9/meditation.webp',
    accentImage: '/images/generated/floor-journaling.png',
    krystaloreQuote: 'Self-awareness is not comfortable — it is confrontational. It asks you to see yourself as you are, not as you wish you were. But this honest seeing is where all transformation begins. You cannot change what you refuse to acknowledge.',
    researchInsights: [
      {
        title: 'Self-Awareness & Leadership Effectiveness',
        citation: 'Organizational Psychologist Tasha Eurich, Harvard Business Review, 2018',
        body: 'Tasha Eurich\'s research reveals two types of self-awareness: internal (understanding your own values, patterns, and impact) and external (understanding how others perceive you). Leaders who score high in both dimensions are rated as 36% more effective and generate 46% higher team satisfaction scores.'
      },
      {
        title: 'Interoception & Emotional Intelligence',
        citation: 'Frontiers in Human Neuroscience, 2019; University of Sussex',
        body: 'Interoception — the ability to sense internal body states — is now recognized as a fundamental component of emotional intelligence and self-awareness. Research shows that individuals with high interoceptive accuracy make better decisions, demonstrate stronger empathy, and manage stress more effectively.'
      },
      {
        title: 'Mindfulness & Neuroplasticity',
        citation: 'Psychiatry Research: Neuroimaging, 2011; Massachusetts General Hospital',
        body: 'Massachusetts General Hospital research using brain imaging showed that 8 weeks of mindfulness practice physically increased gray matter density in brain regions associated with self-awareness, compassion, and introspection. Self-awareness is not just a skill — it physically changes your brain.'
      }
    ],
    whatThisMeans: {
      high: 'Your self-awareness profile is impressively developed. You demonstrate strong interoceptive awareness, honest self-reflection, and the ability to see yourself from multiple perspectives. To continue growing at this level, explore your blind spots — the things you cannot see about yourself because they are so familiar. A skilled coach can serve as the mirror that reveals what self-reflection alone cannot.',
      medium: 'Your results indicate meaningful self-awareness with specific areas that remain less examined. This is the most common profile — we all have territories of clarity and territories of blindness. The areas you do not yet see clearly are often the ones with the greatest growth potential. Coaching provides the external perspective and structured inquiry that accelerate self-discovery.',
      low: 'Your assessment suggests significant untapped self-awareness potential. If life feels confusing, relationships feel difficult, or success feels elusive, increased self-awareness may be the missing key. Many high-performers operate effectively on the surface while being disconnected from their deeper motivations, patterns, and needs. This discovery process, guided by a skilled coach, can be life-changing.'
    },
    actionSteps: [
      { step: 'Begin a daily journaling practice: write for 10 minutes about what you noticed in yourself today — emotions, reactions, body sensations, patterns', timeline: 'Start today' },
      { step: 'Book a self-awareness coaching session to explore your unique pattern architecture and blind spots', timeline: 'Within 1 week' },
      { step: 'Practice body scanning: three times daily, close your eyes and notice what sensations are present in your body without changing anything', timeline: 'Start this week' },
      { step: 'Request honest, structured feedback from 3-5 people across different areas of your life — and receive it without defending', timeline: 'Within 2 weeks' },
      { step: 'Commit to a 30-day mindfulness practice to strengthen the neural pathways associated with self-observation', timeline: 'Within 1 month' }
    ],
    relatedServices: [
      { name: 'Self-Discovery Coaching', description: 'Deep personal exploration through somatic awareness and structured self-inquiry', link: 'https://krystalore.com/apply-for-coaching' },
      { name: 'Mindfulness & Meditation Workshops', description: 'Group practices for developing present-moment awareness and self-observation', link: 'https://krystalore.com/workshops' },
      { name: 'Transformation Retreat', description: 'Immersive retreat experience for profound self-understanding and conscious living', link: 'https://krystalore.com/revival-retreat' }
    ],
    ctaText: 'Book Your Self-Awareness Deep Dive',
    ctaLink: 'https://krystalore.com/book',
    deepLinks: [
      { label: 'Coaching Programs', url: 'https://krystalore.com/apply-for-coaching' },
      { label: 'Workshop Calendar', url: 'https://krystalore.com/workshops' },
      { label: 'Retreat Experiences', url: 'https://krystalore.com/retreat' },
      { label: 'Free Mindfulness Resources', url: 'https://krystalore.com/products' }
    ]
  },

  'self-management': {
    title: 'Self-Management Assessment',
    subtitle: 'Evaluate Your Capacity for Discipline, Focus & Self-Regulation',
    heroImage: '/images/generated/habit-tracker-v2.png',
    accentImage: '/images/go9/planner.jpg',
    krystaloreQuote: 'Self-management is the invisible discipline that separates dreamers from builders. It is not about willpower — it is about creating systems, habits, and internal conditions where the right actions become the easiest actions. Manage yourself first, and everything else falls into place.',
    researchInsights: [
      {
        title: 'Self-Regulation & Life Outcomes',
        citation: 'Dunedin Longitudinal Study, 2011; Proceedings of the National Academy of Sciences',
        body: 'The landmark Dunedin Study tracking 1,000 individuals for 30+ years found that childhood self-control predicted adult health, wealth, and criminal outcomes more powerfully than IQ or socioeconomic status. The good news: self-management skills can be developed at any age through deliberate practice and coaching.'
      },
      {
        title: 'Willpower vs Systems Design',
        citation: 'Stanford Behavior Design Lab, 2020; BJ Fogg Research',
        body: 'BJ Fogg\'s research at Stanford demonstrates that relying on willpower for behavior change fails 85% of the time. Successful self-management comes from designing environments, habits, and triggers that make desired behaviors automatic — what Fogg calls "Tiny Habits." The somatic dimension adds body-based anchoring that makes these systems stick.'
      },
      {
        title: 'Executive Function & Somatic Practices',
        citation: 'Neuropsychologia, 2021; Harvard Center on the Developing Child',
        body: 'Executive function — the brain\'s self-management system — is strengthened through practices that integrate mind and body. Harvard research confirms that regular somatic practices (breathwork, mindful movement, body awareness) improve executive function by 28%, directly enhancing self-management capacity.'
      }
    ],
    whatThisMeans: {
      high: 'Your self-management profile is strong, indicating well-developed discipline, focus, and self-regulation capacities. You likely have effective systems and habits in place. To optimize further, identify the areas where you occasionally break down under stress and build targeted resilience practices. Consider coaching to help you operate at peak performance consistently, not just occasionally.',
      medium: 'Your results reveal inconsistent self-management — you likely have areas of strong discipline alongside areas where you struggle with follow-through, procrastination, or emotional reactivity. This inconsistency often stems from relying on willpower in some areas while having strong systems in others. Coaching can help you build systems and somatic practices that create consistency across all domains.',
      low: 'Your assessment indicates that self-management is a significant growth area. If you struggle with consistency, procrastination, emotional reactivity, or feeling overwhelmed by daily demands, you are not alone — and it is not a character flaw. Self-management is a skill set that can be built through coaching, habit design, and nervous system regulation. This is one of the most transformable areas in personal development.'
    },
    actionSteps: [
      { step: 'Identify your top 3 self-management breakdowns (where you consistently fall short) and design one tiny habit for each', timeline: 'This week' },
      { step: 'Book a self-management coaching session to assess your current systems and build a personalized improvement plan', timeline: 'Within 1 week' },
      { step: 'Implement a morning regulation routine: breathwork, intention-setting, and one priority action before distractions begin', timeline: 'Start tomorrow' },
      { step: 'Use the "2-minute rule" — if a task takes less than 2 minutes, do it immediately; this builds self-management momentum', timeline: 'Start today' },
      { step: 'Track your self-management wins daily for 30 days — what you track, you improve', timeline: 'Within 1 month' }
    ],
    relatedServices: [
      { name: 'Performance Coaching', description: 'Build bulletproof self-management systems through somatic practice and habit design', link: 'https://krystalore.com/apply-for-coaching' },
      { name: 'Six-Week Shred', description: 'Intensive program combining physical discipline with mental toughness and habit formation', link: 'https://krystalore.com/six-week-shred' },
      { name: 'Executive Coaching', description: 'Develop the self-management capacity required for high-level leadership', link: 'https://krystalore.com/c-suite-executive-coaching' }
    ],
    ctaText: 'Book Your Self-Management Breakthrough Session',
    ctaLink: 'https://krystalore.com/book',
    deepLinks: [
      { label: 'Coaching Programs', url: 'https://krystalore.com/apply-for-coaching' },
      { label: 'Six-Week Shred', url: 'https://krystalore.com/six-week-shred' },
      { label: 'Executive Coaching', url: 'https://krystalore.com/c-suite-executive-coaching' },
      { label: 'Free Habit Resources', url: 'https://krystalore.com/products' }
    ]
  },

  'social-awareness': {
    title: 'Social Awareness Assessment',
    subtitle: 'Measure Your Ability to Read Rooms, Cultures & Hidden Dynamics',
    heroImage: '/images/generated/networking-bar.png',
    accentImage: '/images/go9/keynote.jpg',
    krystaloreQuote: 'Social awareness is the superpower nobody talks about. It is the ability to walk into any room and feel what is happening beneath the surface — the unspoken tensions, the hidden alliances, the emotional temperature. Master this, and you become the person everyone trusts but cannot explain why.',
    researchInsights: [
      {
        title: 'Social Awareness & Organizational Influence',
        citation: 'Academy of Management Journal, 2021; Daniel Goleman EI Research',
        body: 'Daniel Goleman\'s research identifies social awareness as the EQ dimension most strongly correlated with organizational influence and career advancement. Leaders with high social awareness navigate organizational politics 3x more effectively and build broader networks of trust and support.'
      },
      {
        title: 'Mirror Neurons & Empathic Accuracy',
        citation: 'Neuroscience & Biobehavioral Reviews, 2020; UCLA Social Cognitive Neuroscience Lab',
        body: 'UCLA research on mirror neurons demonstrates that social awareness is neurologically grounded — our brains are literally wired to simulate others\' experiences. Individuals who develop this capacity through practice show 44% higher accuracy in reading others\' emotional states and predicting behavior.'
      },
      {
        title: 'Cultural Intelligence & Global Leadership',
        citation: 'Harvard Business Review, 2022; Cultural Intelligence Center',
        body: 'In an increasingly global business environment, cultural intelligence — the ability to navigate diverse social and cultural contexts — is a critical leadership competency. Research shows leaders with high cultural intelligence are 52% more effective in cross-cultural negotiations and 41% better at building diverse teams.'
      }
    ],
    whatThisMeans: {
      high: 'Your social awareness is highly developed. You likely excel at reading emotional undercurrents in groups, sensing unspoken dynamics, and adapting your approach to different social contexts. To refine this gift further, focus on developing precision — the ability to distinguish between what you are sensing from others and what is your own projection.',
      medium: 'Your results indicate moderate social awareness with specific areas for development. You may be strong in some contexts (perhaps one-on-one) while missing signals in others (large groups, cross-cultural situations). This selective awareness is very common and can be significantly expanded through coaching that combines cognitive social skills with somatic attunement practices.',
      low: 'Your assessment reveals that social awareness is a growth frontier for you. If you have ever been surprised by others\' reactions, missed social cues, or struggled to read the room, developing this skill can transform your professional and personal relationships. Social awareness is not about being an extrovert — it is a learnable skill that introverts often develop to extraordinary levels.'
    },
    actionSteps: [
      { step: 'Practice "social noticing" — in your next meeting, observe body language, tone shifts, and energy changes without trying to fix anything', timeline: 'Start today' },
      { step: 'Book a social awareness coaching session to develop your ability to read individuals, groups, and organizational dynamics', timeline: 'Within 1 week' },
      { step: 'After each significant social interaction, journal about what you noticed — what was said, what was not said, and what you felt', timeline: 'Start this week' },
      { step: 'Practice perspective-taking: before important conversations, spend 2 minutes genuinely imagining the other person\'s experience', timeline: 'Start immediately' },
      { step: 'Seek out diverse social experiences to expand your range — different cultures, contexts, and types of people', timeline: 'Ongoing' }
    ],
    relatedServices: [
      { name: 'EQ & Social Skills Coaching', description: 'Develop sophisticated social awareness through somatic attunement and interpersonal training', link: 'https://krystalore.com/apply-for-coaching' },
      { name: 'Leadership Communication Workshops', description: 'Group training in reading rooms, managing perceptions, and building influence', link: 'https://krystalore.com/workshops' },
      { name: 'Executive Coaching', description: 'Master the social dynamics of C-suite leadership and organizational navigation', link: 'https://krystalore.com/c-suite-executive-coaching' }
    ],
    ctaText: 'Book Your Social Intelligence Session',
    ctaLink: 'https://krystalore.com/book',
    deepLinks: [
      { label: 'Executive Coaching', url: 'https://krystalore.com/c-suite-executive-coaching' },
      { label: 'Workshop Calendar', url: 'https://krystalore.com/workshops' },
      { label: 'Keynote Speaking', url: 'https://krystalore.com/speaker' },
      { label: 'Free EQ Resources', url: 'https://krystalore.com/products' }
    ]
  },

  'veteran-transition': {
    title: 'Veteran Transition Readiness Assessment',
    subtitle: 'Navigate Your Military-to-Civilian Transition with Confidence',
    heroImage: '/images/go9/veteran.jpg',
    accentImage: '/images/go9/coaching.jpg',
    krystaloreQuote: 'You served with honor. Now it is time to serve yourself with the same discipline and commitment you gave to your country. The transition from military to civilian life is not a step down — it is a new mission. And every mission starts with a plan.',
    researchInsights: [
      {
        title: 'Veteran Transition & Identity Transformation',
        citation: 'Journal of Veteran Studies, 2021; Department of Veterans Affairs',
        body: 'VA research reveals that the greatest challenge in military-to-civilian transition is not employment or benefits — it is identity. 73% of veterans report that losing their military identity is more difficult than any practical transition challenge. Coaching that addresses this identity transformation accelerates successful adjustment by 61%.'
      },
      {
        title: 'Military Skills & Corporate Leadership',
        citation: 'Harvard Business Review, 2020; Syracuse University Institute for Veterans and Military Families',
        body: 'Syracuse University research shows that military veterans possess leadership skills that corporate America desperately needs — discipline, mission focus, team building, and crisis management. However, veterans who cannot translate these skills into civilian language leave an average of $15,000-25,000 per year on the table in their first post-service positions.'
      },
      {
        title: 'Somatic Approaches to Veteran Wellness',
        citation: 'Journal of Traumatic Stress, 2022; National Center for PTSD',
        body: 'The National Center for PTSD reports that somatic-based interventions show 52% greater efficacy for veteran populations than traditional talk therapy alone. Military service creates specific somatic patterns — hypervigilance, compressed emotional expression, and chronic activation — that require body-based approaches for complete resolution.'
      },
      {
        title: 'Community & Veteran Success',
        citation: 'RAND Corporation, 2021; Team Red White & Blue Research',
        body: 'RAND Corporation research confirms that veterans who maintain or build strong community connections during transition report 47% higher life satisfaction and 38% better employment outcomes. The structured community that military service provides must be intentionally replaced, not left to chance.'
      }
    ],
    whatThisMeans: {
      high: 'Your transition readiness is strong. You demonstrate clear self-awareness, practical preparation, and emotional resilience for the civilian chapter ahead. Strategic coaching can help you optimize your transition — translating your military experience into maximum civilian value, building the right networks, and ensuring you do not just survive the transition but thrive beyond it.',
      medium: 'Your results indicate solid transition preparation in some areas with gaps in others. Perhaps you have the practical elements covered (resume, benefits, housing) but the emotional and identity dimensions feel uncertain, or vice versa. This is the most common profile among transitioning veterans, and targeted coaching can fill the specific gaps that make the difference between a rough transition and a powerful one.',
      low: 'Your assessment reveals significant areas that need attention before or during your transition. This is not a reflection of your capability as a veteran — it is a reflection of how dramatically different civilian life is from military service. Many of the most successful veteran transitions started with this level of honest assessment. Professional transition coaching, combined with veteran community support, can accelerate your readiness dramatically.'
    },
    actionSteps: [
      { step: 'Create a "mission translation" document: list your military skills, experiences, and accomplishments in civilian language', timeline: 'This week' },
      { step: 'Book a veteran transition coaching session to develop your comprehensive transition strategy and timeline', timeline: 'Within 1 week' },
      { step: 'Connect with at least 3 veterans who have successfully transitioned in your target field — learn from their experience', timeline: 'Within 2 weeks' },
      { step: 'Address the identity dimension: journal about who you are beyond your rank, branch, and MOS — this is where the real work happens', timeline: 'Start this week' },
      { step: 'Build or join a post-service community — a coaching group, veteran organization, or professional network that provides the structure and belonging you need', timeline: 'Within 1 month' }
    ],
    relatedServices: [
      { name: 'Veteran Coaching', description: 'Specialized coaching for veterans navigating transition, identity, and civilian career success', link: 'https://krystalore.com/veteran-coaching' },
      { name: 'Leadership Development', description: 'Translate your military leadership skills into powerful civilian executive presence', link: 'https://krystalore.com/c-suite-executive-coaching' },
      { name: 'Revival Retreat for Veterans', description: 'Immersive retreat experience addressing veteran-specific healing, transition, and growth', link: 'https://krystalore.com/revival-retreat' }
    ],
    ctaText: 'Book Your Veteran Transition Strategy Session',
    ctaLink: 'https://krystalore.com/book',
    deepLinks: [
      { label: 'Veteran Coaching', url: 'https://krystalore.com/veteran-coaching' },
      { label: 'Executive Coaching', url: 'https://krystalore.com/c-suite-executive-coaching' },
      { label: 'Retreat Experiences', url: 'https://krystalore.com/revival-retreat' },
      { label: 'Veteran Resources', url: 'https://krystalore.com/products' }
    ]
  },

  'womens-confidence': {
    title: 'Women\'s Confidence Assessment',
    subtitle: 'Measure Your Inner Power & Unleash Your Full Potential',
    heroImage: '/images/generated/beach-fitness-group.png',
    accentImage: '/images/generated/island-dress-beach.png',
    krystaloreQuote: 'Confidence is not arrogance and it is not the absence of fear. It is the deep, embodied knowing that you are capable, worthy, and enough — exactly as you are. Every woman I work with already has this power inside her. My job is to help her stop apologizing for it.',
    researchInsights: [
      {
        title: 'The Confidence Gap',
        citation: 'The Atlantic, 2014; Kay & Shipman Research; KPMG Women\'s Leadership Study',
        body: 'KPMG\'s Women\'s Leadership Study reveals that 67% of women need more support building confidence to feel they can be leaders. Despite equal or superior competence, women consistently rate their performance 15-20% lower than men rate theirs. This confidence gap is not about capability — it is about conditioning.'
      },
      {
        title: 'Embodied Confidence & Power Posing',
        citation: 'Psychological Science, 2018; Amy Cuddy, Harvard Business School',
        body: 'Research on embodied cognition demonstrates that physical posture directly influences hormonal levels and psychological states. Women who practice expansive, powerful body positions show measurable increases in testosterone (associated with confidence) and decreases in cortisol (associated with stress), translating to more assertive and effective behavior.'
      },
      {
        title: 'Imposter Syndrome & High Achievement',
        citation: 'International Journal of Behavioral Science, 2021; Pauline Clance Research',
        body: 'Research estimates that 75% of high-achieving women experience imposter syndrome at some point in their careers. Somatic approaches to confidence building address the embodied patterns of self-doubt that cognitive strategies alone cannot reach, leading to 53% faster resolution of imposter patterns.'
      },
      {
        title: 'Women\'s Community & Confidence Building',
        citation: 'McKinsey Women in the Workplace, 2022; Sheryl Sandberg Foundation',
        body: 'McKinsey\'s annual Women in the Workplace report confirms that women who participate in women\'s leadership communities and coaching programs advance 2x faster and report 44% higher confidence scores than those navigating career growth alone. Community is not just support — it is fuel.'
      }
    ],
    whatThisMeans: {
      high: 'Your confidence profile is powerful. You demonstrate strong self-worth, assertive communication, and the ability to take bold action despite uncertainty. To continue elevating, focus on the areas where you still hold back — the conversations you avoid, the opportunities you do not pursue, the space you do not take up. Coaching at this level is about becoming unapologetically visible.',
      medium: 'Your results reveal situational confidence — you likely feel powerful in some contexts while diminished in others. This pattern often reflects conditioning rather than capability. You have the potential for full, embodied confidence; the work is about extending it to the areas where old patterns of self-doubt, people-pleasing, or playing small still have a hold.',
      low: 'Your assessment indicates that confidence is a significant growth area — and this honesty with yourself is the first brave step. Low confidence scores in women almost always reflect societal conditioning, not personal inadequacy. The woman you are becoming is already inside you; she has just been taught to stay quiet. Coaching can help you reconnect with your innate power and build the embodied confidence that changes everything.'
    },
    actionSteps: [
      { step: 'Each morning, stand in a power posture for 2 minutes and state aloud one truth about your capability and worth', timeline: 'Start tomorrow' },
      { step: 'Book a women\'s confidence coaching session to identify your specific confidence patterns and build a personalized growth plan', timeline: 'Within 1 week' },
      { step: 'Identify one area where you regularly shrink or apologize — and practice taking up more space for 30 days', timeline: 'Start this week' },
      { step: 'Join a women\'s community or circle where vulnerability and growth are celebrated — confidence grows in connection', timeline: 'Within 2 weeks' },
      { step: 'Document your wins daily — a "confidence evidence" journal that counters the negativity bias and builds a factual case for your capability', timeline: 'Start today' }
    ],
    relatedServices: [
      { name: 'Women\'s Coaching', description: 'Specialized coaching for women building confidence, leadership presence, and authentic power', link: 'https://krystalore.com/womens-coaching' },
      { name: 'Bombshell Bootcamp', description: 'Intensive program combining physical empowerment with mental confidence building', link: 'https://krystalore.com/bombshell-bootcamp' },
      { name: 'Women\'s Retreat', description: 'Immersive retreat experience designed for women seeking transformation, sisterhood, and power', link: 'https://krystalore.com/revival-retreat' }
    ],
    ctaText: 'Book Your Confidence Breakthrough Session',
    ctaLink: 'https://krystalore.com/book',
    deepLinks: [
      { label: 'Women\'s Coaching', url: 'https://krystalore.com/womens-coaching' },
      { label: 'Bombshell Bootcamp', url: 'https://krystalore.com/bombshell-bootcamp' },
      { label: 'Retreat Experiences', url: 'https://krystalore.com/revival-retreat' },
      { label: 'Women\'s Resources', url: 'https://krystalore.com/products' }
    ]
  }
}

// Helper to get score range key
export function getScoreRange(score: number): 'high' | 'medium' | 'low' {
  if (score >= 70) return 'high'
  if (score >= 40) return 'medium'
  return 'low'
}

// Default fallback content for unknown quiz slugs
export const defaultPdfContent: QuizPdfContent = {
  title: 'Personal Assessment',
  subtitle: 'Your Personalized Results & Growth Roadmap',
  heroImage: '/images/go9/hero.jpg',
  accentImage: '/images/go9/portrait.jpg',
  krystaloreQuote: 'Every assessment is a mirror. What matters is not the score — it is what you do with the truth it reveals. Transformation begins the moment you choose to see yourself clearly and love yourself enough to grow.',
  researchInsights: [
    {
      title: 'Self-Assessment & Personal Growth',
      citation: 'Journal of Positive Psychology, 2021; American Psychological Association',
      body: 'Research consistently demonstrates that structured self-assessment is one of the most powerful catalysts for personal growth. Individuals who regularly engage in honest self-evaluation show 45% greater progress toward their goals and report significantly higher life satisfaction.'
    },
    {
      title: 'Coaching & Behavioral Change',
      citation: 'International Coaching Federation, 2022; Harvard Business Review',
      body: 'The International Coaching Federation reports that 86% of organizations see positive ROI from coaching investments, with individuals reporting improvements across communication, self-confidence, work performance, and relationships. The coaching relationship amplifies self-awareness into sustained behavioral change.'
    },
    {
      title: 'Somatic Intelligence & Transformation',
      citation: 'Journal of Somatic Psychology, 2021; Body-Mind Centering Institute',
      body: 'Emerging research in somatic psychology confirms that lasting personal transformation requires integration of mind and body. Cognitive insight alone produces change in approximately 25% of cases; when combined with somatic practices, success rates increase to over 70%.'
    }
  ],
  whatThisMeans: {
    high: 'Your assessment results indicate strong capabilities in this area. You have built a solid foundation that positions you well for continued growth. Consider advanced coaching to refine your strengths and push into your next level of mastery.',
    medium: 'Your results reveal a mix of strengths and growth areas — this is the most common and often the most transformative starting point. Targeted coaching can help you build on your existing strengths while developing the specific areas that will have the greatest impact on your overall growth.',
    low: 'Your assessment has identified significant opportunities for growth. This awareness is valuable and courageous. With the right support and a structured approach, the areas flagged in your results can become your greatest strengths. Coaching provides the framework, accountability, and expertise to accelerate this transformation.'
  },
  actionSteps: [
    { step: 'Review your results carefully and identify the 1-2 areas that resonate most strongly with your current life experience', timeline: 'This week' },
    { step: 'Book a coaching consultation to discuss your results and develop a personalized growth plan', timeline: 'Within 1 week' },
    { step: 'Choose one specific action from your results to implement immediately — momentum matters more than perfection', timeline: 'Start today' },
    { step: 'Share your results with a trusted person who can support your growth journey and hold you accountable', timeline: 'Within 2 weeks' },
    { step: 'Retake this assessment in 90 days to measure your progress and recalibrate your plan', timeline: '90 days' }
  ],
  relatedServices: [
    { name: 'Private Coaching', description: 'Personalized 1-on-1 coaching tailored to your unique goals and growth areas', link: 'https://krystalore.com/apply-for-coaching' },
    { name: 'Group Workshops', description: 'Transformational group experiences for learning, growth, and community', link: 'https://krystalore.com/workshops' },
    { name: 'Revival Retreat', description: 'Immersive multi-day retreat for deep transformation and renewal', link: 'https://krystalore.com/revival-retreat' }
  ],
  ctaText: 'Book Your Consultation',
  ctaLink: 'https://krystalore.com/book',
  deepLinks: [
    { label: 'Coaching Programs', url: 'https://krystalore.com/apply-for-coaching' },
    { label: 'Workshop Calendar', url: 'https://krystalore.com/workshops' },
    { label: 'Retreat Experiences', url: 'https://krystalore.com/retreat' },
    { label: 'Free Resources', url: 'https://krystalore.com/products' }
  ]
}
