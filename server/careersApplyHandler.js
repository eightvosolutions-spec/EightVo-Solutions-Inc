const nodemailer = require('nodemailer')

function validate(fields, file) {
  const { name, email, phone, jobTitle } = fields || {}
  if (!name || !email || !phone || !jobTitle) return 'Missing required fields'
  if (!file) return 'A resume file is required'
  return null
}

function buildEmailBody({ name, email, phone, jobTitle, jobSlug, coverNote }) {
  return [
    'New job application via eightvosolutions.com',
    '',
    `Role: ${jobTitle}${jobSlug ? ` (${jobSlug})` : ''}`,
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    '',
    coverNote ? `Note from applicant:\n${coverNote}` : 'No additional note provided.'
  ].join('\n')
}

// Reuses the exact same email configuration (Brevo API, or SMTP fallback)
// and CONTACT_TO recipient as the contact form — see contactHandler.js.
async function sendWithBrevo({ name, email, phone, jobTitle, jobSlug, coverNote }, file) {
  const SibApiV3Sdk = require('sib-api-v3-sdk')
  const defaultClient = SibApiV3Sdk.ApiClient.instance
  const apiKey = defaultClient.authentications['api-key']
  apiKey.apiKey = process.env.BREVO_API_KEY

  const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi()
  const from = process.env.BREVO_FROM || process.env.SENDGRID_FROM || process.env.SMTP_USER || process.env.CONTACT_TO
  const to = process.env.CONTACT_TO || from
  if (!from || !to) {
    console.error('Brevo configured but sender/recipient not set')
    return { status: 500, body: { error: 'Email sender/recipient not configured' } }
  }

  const sendSmtpEmail = {
    to: [{ email: to }],
    sender: { email: from },
    subject: `Job application: ${jobTitle} — ${name}`,
    textContent: buildEmailBody({ name, email, phone, jobTitle, jobSlug, coverNote }),
    replyTo: { email },
    attachment: [{ content: file.buffer.toString('base64'), name: file.filename }]
  }

  await apiInstance.sendTransacEmail(sendSmtpEmail)
  return { status: 200, body: { ok: true, provider: 'brevo' } }
}

async function sendWithSmtp({ name, email, phone, jobTitle, jobSlug, coverNote }, file) {
  const host = process.env.SMTP_HOST || process.env.BREVO_SMTP_HOST || 'smtp-relay.sendinblue.com'
  const port = parseInt(process.env.SMTP_PORT || process.env.BREVO_SMTP_PORT || '587', 10)
  const secure = (process.env.SMTP_SECURE === 'true') || (process.env.BREVO_SMTP_SECURE === 'true')
  const user = process.env.SMTP_USER || process.env.BREVO_SMTP_USER || 'apikey'
  const pass = process.env.SMTP_PASS || process.env.BREVO_SMTP_PASS
  const to = process.env.CONTACT_TO || user
  const from = process.env.BREVO_FROM || process.env.SENDGRID_FROM || user || process.env.CONTACT_TO

  if (!host || !user || !pass) {
    console.error('SMTP not configured')
    return { status: 500, body: { error: 'Email server not configured' } }
  }

  const transporter = nodemailer.createTransport({ host, port, secure, auth: { user, pass } })
  const info = await transporter.sendMail({
    from: `${from}`,
    to,
    replyTo: email,
    subject: `Job application: ${jobTitle} — ${name}`,
    text: buildEmailBody({ name, email, phone, jobTitle, jobSlug, coverNote }),
    attachments: [{ filename: file.filename, content: file.buffer }]
  })

  return { status: 200, body: { ok: true, provider: 'smtp', id: info.messageId } }
}

async function processApplication(fields, file) {
  const error = validate(fields, file)
  if (error) return { status: 400, body: { error } }

  const { name, email, phone, jobTitle, jobSlug, coverNote } = fields
  const payload = { name, email, phone, jobTitle, jobSlug, coverNote }

  if (process.env.BREVO_API_KEY) {
    try {
      return await sendWithBrevo(payload, file)
    } catch (err) {
      console.error('Brevo error', err)
      if (err && err.response) {
        try {
          console.error('Brevo response status:', err.response.status)
          console.error('Brevo response body:', err.response.body || err.response.text || err.response)
        } catch (e) {
          console.error('Failed to read Brevo error response', e)
        }
      }
      const msg = (err && err.message) ? err.message : 'Failed to send email via Brevo'
      return { status: 500, body: { error: msg } }
    }
  }

  try {
    return await sendWithSmtp(payload, file)
  } catch (err) {
    console.error('sendMail error', err)
    return { status: 500, body: { error: 'Failed to send email' } }
  }
}

module.exports = { processApplication }
