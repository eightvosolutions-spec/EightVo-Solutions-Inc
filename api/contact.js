// Vercel Serverless function: api/contact.js
// Adapted from server/contact.js — prefer BREVO_API_KEY, fallback to SMTP.

// Basic in-memory rate limiter (module-level). This is per-process
// and will not be globally enforced across multiple serverless instances.
// For production, prefer Upstash/Redis-backed limiting.
// Default: 2 requests per 5 minutes (300 seconds)
const RATE_LIMIT_WINDOW = parseInt(process.env.RATE_LIMIT_WINDOW || '300', 10) * 1000 // ms
const RATE_LIMIT_MAX = parseInt(process.env.RATE_LIMIT_MAX || '2', 10)
const _rateMap = new Map()

module.exports = async (req, res) => {
  // rate limit check
  try {
    const rawIp = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || req.socket.remoteAddress || ''
    const ip = (Array.isArray(rawIp) ? rawIp[0] : String(rawIp)).split(',')[0].trim()
    if (ip) {
      const now = Date.now()
      const windowStart = now - RATE_LIMIT_WINDOW
      const hits = (_rateMap.get(ip) || []).filter(ts => ts > windowStart)
      if (hits.length >= RATE_LIMIT_MAX) {
        res.status(429).json({ error: 'Too many requests — please try again later.' })
        return
      }
      hits.push(now)
      _rateMap.set(ip, hits)
    }
  } catch (e) {
    console.error('Rate limit check failed', e)
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, message } = req.body || {}
  if (!name || !email || !message) return res.status(400).json({ error: 'Missing required fields' })

  // Prefer Brevo (Sendinblue) Transactional API when available
  if (process.env.BREVO_API_KEY) {
    try {
      const SibApiV3Sdk = require('sib-api-v3-sdk')
      const defaultClient = SibApiV3Sdk.ApiClient.instance
      const apiKey = defaultClient.authentications['api-key']
      apiKey.apiKey = process.env.BREVO_API_KEY

      const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi()
      const from = process.env.BREVO_FROM || process.env.CONTACT_TO
      const to = process.env.CONTACT_TO || from
      if (!from || !to) return res.status(500).json({ error: 'Email sender/recipient not configured' })

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
      console.error('Brevo error', err)
      const msg = (err && err.message) ? err.message : 'Failed to send email via Brevo'
      return res.status(500).json({ error: msg })
    }
  }

  // SMTP fallback (nodemailer)
  try {
    const nodemailer = require('nodemailer')
    const host = process.env.SMTP_HOST || process.env.BREVO_SMTP_HOST || 'smtp-relay.sendinblue.com'
    const port = parseInt(process.env.SMTP_PORT || process.env.BREVO_SMTP_PORT || '587', 10)
    const secure = (process.env.SMTP_SECURE === 'true') || false
    const user = process.env.SMTP_USER || process.env.BREVO_SMTP_USER || 'apikey'
    const pass = process.env.SMTP_PASS || process.env.BREVO_SMTP_PASS
    const to = process.env.CONTACT_TO || user
    const from = process.env.BREVO_FROM || process.env.SMTP_FROM || user || process.env.CONTACT_TO

    if (!host || !user || !pass) return res.status(500).json({ error: 'Email server not configured' })

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
}
