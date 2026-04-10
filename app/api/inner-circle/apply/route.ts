import { NextRequest, NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'
import { pushContactToGHL } from '@/lib/integrations/gohighlevel'
import prisma from '@/lib/db'

const ADMIN_EMAIL = 'krystalore@crewsbeyondlimitsconsulting.com'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    const { circle, fullName, email, profession } = data
    if (!circle || !fullName || !email || !profession) {
      return NextResponse.json({ error: 'Required fields missing.' }, { status: 400 })
    }

    // Store application in database
    let applicationId: string | null = null
    try {
      const application = await prisma.innerCircleApplication.create({
        data: {
          circle,
          fullName,
          email,
          phone: data.phone || null,
          location: data.location || null,
          profession,
          currentSeason: data.currentSeason || null,
          misaligned: data.misaligned || null,
          strongVsStretched: data.strongVsStretched || null,
          previousInvestment: data.previousInvestment || null,
          whyNow: data.whyNow || null,
          coachableScale: data.coachableScale ? parseInt(data.coachableScale) : null,
          commitSixMonths: data.commitSixMonths || null,
          investmentReady: data.investmentReady || null,
          oneYearVision: data.oneYearVision || null,
          whyCircle: data.whyCircle || null,
          agreement: data.agreement || false,
        },
      })
      applicationId = application.id
    } catch (dbErr) {
      console.error('DB save failed for inner circle app (will continue):', dbErr)
    }

    const circleLabel =
      circle === 'womens' ? "Women's Inner Circle" :
      circle === 'mens' ? "Men's Inner Circle" :
      'Both + Co-Ed Leadership Forum'

    // Push to GHL
    try {
      await pushContactToGHL({
        email,
        name: fullName,
        phone: data.phone || undefined,
        tags: ['inner-circle-application', `circle-${circle}`, 'website-lead'],
        customFields: {
          inner_circle_type: circleLabel,
          profession: profession,
          location: data.location || '',
        },
      })
    } catch (ghlErr) {
      console.error('GHL push failed for inner circle app:', ghlErr)
    }

    // Send email notification
    if (process.env.SENDGRID_API_KEY && !process.env.SENDGRID_API_KEY.includes('PLACEHOLDER')) {
      sgMail.setApiKey(process.env.SENDGRID_API_KEY)

      const emailBody = `
New Inner Circle Application

Circle: ${circleLabel}

--- Basic Info ---
Name: ${fullName}
Email: ${email}
Phone: ${data.phone || 'N/A'}
Location: ${data.location || 'N/A'}
Profession: ${profession}

--- Current Season ---
Season: ${data.currentSeason || 'N/A'}
Misaligned: ${data.misaligned || 'N/A'}
Strong vs Stretched: ${data.strongVsStretched || 'N/A'}

--- Growth & Investment ---
Previous Investment: ${data.previousInvestment || 'N/A'}
Why Now: ${data.whyNow || 'N/A'}
Coachable (1-10): ${data.coachableScale || 'N/A'}
6-Month Commit: ${data.commitSixMonths || 'N/A'}
$750/mo Ready: ${data.investmentReady || 'N/A'}

--- Vision ---
One Year Vision: ${data.oneYearVision || 'N/A'}
Why Circle vs 1:1: ${data.whyCircle || 'N/A'}

--- Agreement ---
Agreed: ${data.agreement ? 'Yes' : 'No'}
      `.trim()

      await sgMail.send({
        to: ADMIN_EMAIL,
        from: ADMIN_EMAIL,
        subject: `Inner Circle Application: ${fullName} — ${circleLabel}`,
        text: emailBody,
      })
    } else {
      console.log('SendGrid not configured — logging application:', JSON.stringify(data, null, 2))
    }

    return NextResponse.json({ success: true, applicationId })
  } catch (err) {
    console.error('Inner circle application error:', err)
    return NextResponse.json({ error: 'Failed to process application.' }, { status: 500 })
  }
}
