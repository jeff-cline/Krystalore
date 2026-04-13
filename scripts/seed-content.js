const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

// Content templates per category with built-in cross-links and CTAs
const siteLinks = {
  fitness: ['/bombshell-bootcamp', '/six-week-shred', '/health-mastery', '/just-breathe', '/courses', '/shop', '/vault'],
  mindset: ['/just-breathe', '/health-mastery', '/courses/identity-transition', '/blog', '/podcasts', '/quizzes/self-awareness', '/about'],
  leadership: ['/services', '/health-mastery', '/entrepreneur-coaching', '/c-suite-executive-coaching', '/courses', '/blog', '/about'],
  wellness: ['/health-mastery', '/just-breathe', '/bombshell-bootcamp', '/shop', '/blog', '/podcasts', '/courses/somatic-healing'],
  healing: ['/courses/somatic-healing', '/just-breathe', '/health-mastery', '/courses/identity-transition', '/blog', '/contact', '/retreat'],
  nutrition: ['/health-mastery', '/shop', '/six-week-shred', '/bombshell-bootcamp', '/blog', '/courses', '/contact'],
  connection: ['/health-mastery', '/retreat', '/community', '/blog', '/podcasts', '/contact', '/dashboard/community'],
  motivation: ['/monday-motivation', '/just-breathe', '/podcasts', '/bombshell-bootcamp', '/blog', '/health-mastery', '/courses'],
  general: ['/health-mastery', '/just-breathe', '/bombshell-bootcamp', '/blog', '/podcasts', '/courses', '/shop'],
}

function buildContent({ title, topic, category }) {
  const cat = (category || 'general').toLowerCase()
  const links = siteLinks[cat] || siteLinks.general
  const [l1, l2, l3, l4, l5, l6, l7] = links

  return `<h1>${title}</h1>
<p>${topic ? `This post is about <strong>${topic}</strong>.` : 'A deep dive into what matters most.'} Let me share what I've learned — not from theory, but from years of coaching leaders, training athletes, and showing up for myself every single day.</p>

<h2>Why This Matters</h2>
<p>Here's the real talk: most of us know what we <em>should</em> do. We read the books, watch the videos, follow the gurus. But knowing isn't doing. And the gap between intention and action is where most of us get stuck.</p>
<p>If you've been feeling that gap — if you know you're capable of more but something keeps pulling you back — this post is for you.</p>

<h2>The Three-Part Framework</h2>
<p>Every breakthrough I've seen in my clients follows a three-part pattern. It's not complicated. It's not sexy. But it works.</p>

<h3>1. Name It</h3>
<p>You can't change what you don't acknowledge. Get honest about where you are right now. Not where you pretend to be, not where you wish you were — where you actually are.</p>
<p>Try this: take the <a href="/quizzes/self-awareness">Self-Awareness Quiz</a> or spend 10 minutes journaling. Name the truth.</p>

<h3>2. Claim It</h3>
<p>Decide that this matters to you. Not because someone told you it should, but because you genuinely want it. Ownership is everything.</p>
<p>In <a href="${l2}">Health Mastery</a>, I see this shift happen week after week. The moment someone moves from "I should" to "I choose" is the moment transformation becomes inevitable.</p>

<h3>3. Build It</h3>
<p>Now do the work. One small action, repeated daily, for longer than you think. This is where <a href="${l3}">my programs</a> come in — structure for people serious about change.</p>

<h2>What Gets In Your Way</h2>
<p>Let's talk about the real obstacles:</p>
<ul>
<li><strong>Perfectionism:</strong> Waiting for the right moment that never comes.</li>
<li><strong>All-or-nothing thinking:</strong> "If I can't do it perfectly, why try?"</li>
<li><strong>Comparison:</strong> Looking at someone else's middle while judging your own beginning.</li>
<li><strong>Isolation:</strong> Trying to do hard things alone.</li>
</ul>
<p>This is why <a href="${l4}">community matters</a>. You need people around you who are doing the work too.</p>

<h2>Practical Next Steps</h2>
<p>Okay, enough theory. Here's what to do today:</p>
<ol>
<li>Take 5 minutes for a <a href="${l2.includes('health-mastery') ? '/just-breathe' : l5}">guided practice</a></li>
<li>Write down one action you'll take in the next 24 hours</li>
<li>Tell someone your commitment</li>
<li>Read the related posts below to deepen the work</li>
<li>If you're ready for structure, check out <a href="${l1}">this program</a></li>
</ol>

<h2>Frequently Asked Questions</h2>

<h3>How do I know if I'm ready for change?</h3>
<p>If you're asking the question, you're ready. Readiness isn't a feeling — it's a decision. Take the <a href="/quizzes/life-alignment">Life Alignment Quiz</a> to get clarity on where to focus first.</p>

<h3>What if I've failed at this before?</h3>
<p>Past failure isn't prediction. It's information. Every time you've "failed" you learned something about what doesn't work for you. Use that data. Try a different approach — maybe <a href="${l3}">this one</a>.</p>

<h3>How long until I see results?</h3>
<p>Noticeable energy shifts: 2-3 weeks. Visible changes: 6-8 weeks. Deep transformation: 3-6 months. Consistency beats intensity every time.</p>

<h3>Do I need to hire a coach?</h3>
<p>Not always. Start with free resources: <a href="/just-breathe">Just Breathe meditations</a>, <a href="/podcasts">the podcast</a>, and <a href="/blog">this blog</a>. When you're ready for structured support, <a href="${l2}">Health Mastery</a> is where most of my clients thrive.</p>

<h3>Is this for beginners?</h3>
<p>Yes. Everything I teach is scalable. Start where you are. Modify as needed. Progress at your pace.</p>

<h2>Your Next Step</h2>
<p>Reading this was the easy part. Now comes the choice: close this tab and forget about it, or take one real action in the next hour.</p>
<p>Here's what I recommend based on where most people are:</p>
<ul>
<li><strong>If you need momentum:</strong> Start <a href="${l1}">here</a></li>
<li><strong>If you need peace:</strong> Open <a href="/just-breathe">Just Breathe</a></li>
<li><strong>If you need clarity:</strong> Take a <a href="/quizzes">quiz</a></li>
<li><strong>If you need community:</strong> Join <a href="${l2}">Health Mastery</a></li>
<li><strong>If you need to talk:</strong> <a href="/contact">Book a call</a></li>
</ul>

<h2>Keep Reading</h2>
<p>More on this topic:</p>
<ul>
<li><a href="/blog">Browse all blog posts</a></li>
<li><a href="/podcasts">Listen to the podcast</a></li>
<li><a href="${l6}">Explore related programs</a></li>
<li><a href="${l7}">Learn more about my approach</a></li>
</ul>

<p><em>Ready to go deeper? <strong><a href="${l2}">Join Health Mastery Group Coaching</a></strong> — my flagship program combining coaching, fitness, meditation, and community into one transformational experience.</em></p>`
}

async function main() {
  const items = await prisma.contentCalendarItem.findMany({ orderBy: { scheduledFor: 'asc' } })
  console.log('Processing', items.length, 'calendar items')
  
  let author = await prisma.user.findUnique({ where: { email: 'krystalore@thecrewscoach.com' } })
  if (!author) { console.log('No Krystalore user found'); return }
  
  let created = 0, updated = 0
  
  for (const item of items) {
    const content = buildContent({ title: item.title, topic: item.topic, category: item.category })
    const slug = item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    const excerpt = `Real talk on ${item.topic || item.category.toLowerCase()}. A framework, the obstacles, and your next steps.`
    
    if (item.blogPostId) {
      const existing = await prisma.blogPost.findUnique({ where: { id: item.blogPostId } })
      if (existing) {
        // Update existing post only if empty
        if (!existing.content || existing.content.length < 300) {
          await prisma.blogPost.update({
            where: { id: existing.id },
            data: { content, excerpt, readTime: Math.ceil(content.split(/\s+/).length / 200) },
          })
          updated++
        }
      }
    } else {
      // Create draft blog post linked to calendar item
      const existingBySlug = await prisma.blogPost.findUnique({ where: { slug } })
      if (existingBySlug) {
        await prisma.contentCalendarItem.update({ where: { id: item.id }, data: { blogPostId: existingBySlug.id } })
        continue
      }
      const post = await prisma.blogPost.create({
        data: {
          title: item.title,
          slug,
          content,
          excerpt,
          category: item.category,
          authorId: author.id,
          isPublished: false,
          readTime: Math.ceil(content.split(/\s+/).length / 200),
          seoTitle: item.title,
          seoDescription: excerpt,
        },
      })
      await prisma.contentCalendarItem.update({ where: { id: item.id }, data: { blogPostId: post.id } })
      created++
    }
  }
  
  console.log('Created', created, 'drafts, updated', updated, 'posts')
  await prisma.$disconnect()
}

main().catch(e => { console.error(e); process.exit(1) })
