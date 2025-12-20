Server endpoint for contact form

This lightweight Express server exposes `POST /api/contact` and uses `nodemailer` to send
messages via SMTP. It is optional — you can replace it with your own server or a hosted
email/webhook provider.

Required environment variables:
- `SMTP_HOST` - SMTP server host
- `SMTP_PORT` - SMTP port (default 587)
- `SMTP_USER` - SMTP username (also used as default `CONTACT_TO`)
- `SMTP_PASS` - SMTP password
- `CONTACT_TO` - Optional recipient override

Run locally:

```bash
npm install nodemailer express
node server/index.js
```

In development, point your Vite dev server to proxy `/api` to `http://localhost:4000`.

Brevo (Sendinblue) support
-------------------------
If you prefer Brevo (Sendinblue) the server will use it when `BREVO_API_KEY` is present.
Install the SDK:

```bash
npm install sib-api-v3-sdk
```

Example `.env` entries for Brevo:

```
BREVO_API_KEY=your_brevo_api_key
BREVO_FROM=you@yourdomain.com
CONTACT_TO=recipient@example.com
```

On success the endpoint will return `{ ok: true, provider: 'brevo' }`.

Brevo SMTP fallback
--------------------
If you don't have a Brevo API key yet you can use Brevo's SMTP credentials as a fallback.
Set the following env vars (or add them to `.env`) and restart the server:

```
BREVO_SMTP_HOST=smtp-relay.sendinblue.com
BREVO_SMTP_PORT=587
BREVO_SMTP_USER=your_smtp_user
BREVO_SMTP_PASS=your_smtp_password
BREVO_FROM=you@yourdomain.com
CONTACT_TO=recipient@example.com
```

The server will use these SMTP credentials automatically when `BREVO_API_KEY` is not set.
If you prefer Brevo (Sendinblue) the server will use it when `BREVO_API_KEY` is present.
Install the SDK:

```bash
npm install sib-api-v3-sdk
```

Example `.env` entries for Brevo:

```
BREVO_API_KEY=your_brevo_api_key
BREVO_FROM=you@yourdomain.com
CONTACT_TO=recipient@example.com
```

On success the endpoint will return `{ ok: true, provider: 'brevo' }`.
