import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

const FROM_EMAIL = 'krystalore@thecrewscoach.com'
const FROM_NAME = 'Krystalore'

export async function sendPasswordResetEmail(to: string, resetToken: string) {
  const resetUrl = `https://executive.krystalore.com/auth/reset-password?token=${resetToken}`

  const msg = {
    to,
    from: { email: FROM_EMAIL, name: FROM_NAME },
    subject: 'Reset Your Password – Krystalore',
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#f5f5f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f5f5;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #E8A849, #34c5c5);padding:32px 40px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:28px;font-weight:700;letter-spacing:0.5px;">Krystalore</h1>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              <h2 style="margin:0 0 16px;color:#1a1a1a;font-size:22px;font-weight:600;">Reset Your Password</h2>
              <p style="margin:0 0 24px;color:#555;font-size:16px;line-height:1.6;">
                We received a request to reset your password. Click the button below to choose a new one. This link expires in <strong>1 hour</strong>.
              </p>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding:8px 0 32px;">
                    <a href="${resetUrl}" style="display:inline-block;background-color:#E8A849;color:#ffffff;text-decoration:none;font-size:16px;font-weight:600;padding:14px 40px;border-radius:8px;">
                      Reset Password
                    </a>
                  </td>
                </tr>
              </table>
              <p style="margin:0 0 12px;color:#888;font-size:14px;line-height:1.5;">
                If you didn't request this, you can safely ignore this email.
              </p>
              <p style="margin:0;color:#aaa;font-size:12px;line-height:1.5;">
                If the button doesn't work, copy and paste this link:<br>
                <a href="${resetUrl}" style="color:#34c5c5;word-break:break-all;">${resetUrl}</a>
              </p>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background-color:#f9f9f9;padding:24px 40px;text-align:center;border-top:1px solid #eee;">
              <p style="margin:0;color:#aaa;font-size:12px;">
                © ${new Date().getFullYear()} Krystalore. All rights reserved.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
  }

  await sgMail.send(msg)
}
