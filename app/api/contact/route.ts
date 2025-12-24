import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

type Body = {
  name: string
  email: string
  company?: string
  phone?: string
  service?: string
  requirements: string
}

function buildHtmlEmail(data: Body) {
  const { name, email, company, phone, service, requirements } = data
  const safe = (val?: string) => (val ? String(val).replace(/</g, '&lt;').replace(/>/g, '&gt;') : '')
  return `
  <html>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; color: #111827;">
      <div style="max-width:680px;margin:0 auto;padding:24px;border:1px solid #e5e7eb;border-radius:12px;background:#ffffff">
        <h2 style="margin:0 0 8px 0;color:#111827">New contact form submission</h2>
        <p style="margin:0 0 16px 0;color:#6b7280">A visitor submitted the contact form on your site.</p>

        <table style="width:100%;border-collapse:collapse;margin-top:8px">
          <tr>
            <td style="padding:8px;font-weight:600;width:160px">Name</td>
            <td style="padding:8px">${safe(name)}</td>
          </tr>
          <tr style="background:#f9fafb">
            <td style="padding:8px;font-weight:600">Email</td>
            <td style="padding:8px"><a href="mailto:${safe(email)}">${safe(email)}</a></td>
          </tr>
          <tr>
            <td style="padding:8px;font-weight:600">Company</td>
            <td style="padding:8px">${safe(company)}</td>
          </tr>
          <tr style="background:#f9fafb">
            <td style="padding:8px;font-weight:600">Phone</td>
            <td style="padding:8px">${safe(phone)}</td>
          </tr>
          <tr>
            <td style="padding:8px;font-weight:600">Service</td>
            <td style="padding:8px">${safe(service)}</td>
          </tr>
        </table>

        <div style="margin-top:18px;padding:16px;background:#f3f4f6;border-radius:8px">
          <h3 style="margin:0 0 8px 0">Project Requirements</h3>
          <div style="white-space:pre-wrap;color:#374151">${safe(requirements)}</div>
        </div>

        <footer style="margin-top:18px;color:#9ca3af;font-size:13px">SmartGalaxy Labs &middot; <a href="mailto:smartgalaxylabs@gmail.com">smartgalaxylabs@gmail.com</a></footer>
      </div>
    </body>
  </html>
  `
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Body

    if (!body || !body.name || !body.email || !body.requirements) {
      return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 })
    }

    const smtpHost = process.env.SMTP_HOST ?? 'smtp.gmail.com'
    const smtpPort = Number(process.env.SMTP_PORT ?? 465)
    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS

    if (!smtpUser || !smtpPass) {
      return NextResponse.json({ ok: false, error: 'SMTP credentials not configured' }, { status: 500 })
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
    })

    const receivers = (process.env.CONTACT_EMAILS ?? 'smartgalaxylabs@gmail.com,mohitchauhan0226@gmail.com')
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean)

    const info = await transporter.sendMail({
      from: `${body.name} <${smtpUser}>`,
      to: receivers,
      subject: `New contact: ${body.name} — ${body.service ?? 'General Inquiry'}`,
      html: buildHtmlEmail(body),
      replyTo: body.email,
    })

    return NextResponse.json({ ok: true, messageId: info.messageId })
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message ?? String(e) }, { status: 500 })
  }
}
