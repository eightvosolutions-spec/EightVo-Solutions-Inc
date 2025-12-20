# Consulting Company — Starter React Site

This is a small responsive React + Vite starter implementing the pages and components requested:

- Home (leadership comments with photos, news banners)
- Contact Us (form)
- Footer links: Accessibility, Privacy Notice, Cookie Settings, Cookie Policy

Brands shown in footer (bold):
- Eightvo Entertainments
- Eightvo Imports and Exports

Color palette: approximated from YSRCP flag (green/blue/white) — adjust `src/styles.css` variables to refine.

Run locally:

```bash
# from project root
npm install
npm run dev
```

Open `http://localhost:5173` (Vite default) to view.

Files of interest:

- `src/App.jsx` — router + layout
- `src/pages/*` — pages
- `src/components/*` — header, footer, leadership card, news banner, cookie modal
- `src/styles.css` — mobile-first styles
- `api/contact.js` — serverless handler for contact form on Vercel

Customize images, content, and text as needed.

Notes for contributors / agents:

- Dev commands: `npm install`, `npm run dev`, `npm run build`, `npm run preview`.
- Routes are now lazy-loaded (see `src/App.jsx`) — pages mount inside a `Suspense` fallback.
- Cookie preferences are stored under `localStorage['cookiePrefs']` as JSON (e.g. `{accepted:true,analytics:false}`).
- `src/utils/useDocumentTitle.js` is provided to set page titles from components.
- Accessibility: the `CookieModal` traps focus, supports `Escape` to close, and marks background content with `aria-hidden` while open.

## Deploy to Vercel

This project is configured for Vercel static hosting with a serverless contact endpoint (`api/contact.js`).

1. Install the Vercel CLI and log in:

   ```bash
   npm install -g vercel
   vercel login
   ```

2. Set the required environment variables in Vercel (needed for the contact form email delivery). At minimum supply either Brevo (recommended) or SMTP credentials:

   - `BREVO_API_KEY` and `BREVO_FROM` (for Brevo API) **OR**
   - `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` (SMTP fallback)
   - Optional overrides: `CONTACT_TO`, `BREVO_SMTP_*`, `SENDGRID_FROM`

   Using the CLI, run (repeat for each variable):

   ```bash
   vercel env add BREVO_API_KEY
   vercel env add BREVO_FROM
   vercel env add CONTACT_TO
   ```

3. Deploy:

   ```bash
   vercel --prod
   ```

The included `vercel.json` sets the build command (`npm run build`), output directory (`dist`), Node 18 runtime for functions, and an SPA rewrite so client-side routes resolve to `index.html`.

