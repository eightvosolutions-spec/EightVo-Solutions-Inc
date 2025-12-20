const express = require('express')
const nodemailer = require('nodemailer')

const router = express.Router()

router.post('/contact', async (req, res) => {
  const { name, email, message } = req.body || {}
  if (!name || !email || !message) return res.status(400).json({ error: 'Missing required fields' })

  // If a SendGrid API key is provided, prefer the SendGrid API for sending
  // If a Brevo API key is provided, prefer Brevo (Sendinblue/Brevo) first
  if (process.env.BREVO_API_KEY) {
    try {
      const SibApiV3Sdk = require('sib-api-v3-sdk')
      const defaultClient = SibApiV3Sdk.ApiClient.instance
      const apiKey = defaultClient.authentications['api-key']
      apiKey.apiKey = process.env.BREVO_API_KEY

      const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi()
      const from = process.env.BREVO_FROM || process.env.SENDGRID_FROM || process.env.SMTP_USER || process.env.CONTACT_TO
      const to = process.env.CONTACT_TO || from
      if (!from || !to) {
        console.error('Brevo configured but sender/recipient not set')
        return res.status(500).json({ error: 'Email sender/recipient not configured' })
      }

      const sendSmtpEmail = {
        to: [{ email: to }],
        sender: { email: from },
        subject: `Website contact from ${name}`,
        textContent: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        replyTo: { email }
      }

      await apiInstance.sendTransacEmail(sendSmtpEmail)
      return res.json({ ok: true, provider: 'brevo' })
    } catch (err) {
      // Improved logging to show Brevo API response for debugging (safe to log in dev)
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
      return res.status(500).json({ error: msg })
    }
  }

  // No SendGrid support — prefer Brevo (handled above) then SMTP fallback below

  // Fallback to SMTP via nodemailer
  // Support Brevo SMTP env vars as a convenient fallback: BREVO_SMTP_USER / BREVO_SMTP_PASS
  // Default SMTP host for Brevo (Sendinblue) is smtp-relay.sendinblue.com and port 587
  const host = process.env.SMTP_HOST || process.env.BREVO_SMTP_HOST || 'smtp-relay.sendinblue.com'
  const port = parseInt(process.env.SMTP_PORT || process.env.BREVO_SMTP_PORT || '587', 10)
  const secure = (process.env.SMTP_SECURE === 'true') || (process.env.BREVO_SMTP_SECURE === 'true')
  // Allow using a single SMTP key/password without a username by defaulting to 'apikey'
  // (many providers accept username 'apikey' with the API key as the password)
  const user = process.env.SMTP_USER || process.env.BREVO_SMTP_USER || 'apikey'
  const pass = process.env.SMTP_PASS || process.env.BREVO_SMTP_PASS
  const to = process.env.CONTACT_TO || user
  const from = process.env.BREVO_FROM || process.env.SENDGRID_FROM || user || process.env.CONTACT_TO

  if (!host || !user || !pass) {
    console.error('SMTP not configured')
    return res.status(500).json({ error: 'Email server not configured' })
  }

  try {
    const transporter = nodemailer.createTransport({ host, port, secure, auth: { user, pass } })

    const info = await transporter.sendMail({
      from: `${from}`,
      to,
      replyTo: email,
      subject: `Website contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`
    })

    return res.json({ ok: true, provider: 'smtp', id: info.messageId })
  } catch (err) {
    console.error('sendMail error', err)
    return res.status(500).json({ error: 'Failed to send email' })
  }
})

module.exports = router
