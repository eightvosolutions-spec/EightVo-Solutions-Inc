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

Customize images, content, and text as needed.

Notes for contributors / agents:

- Dev commands: `npm install`, `npm run dev`, `npm run build`, `npm run preview`.
- Routes are now lazy-loaded (see `src/App.jsx`) — pages mount inside a `Suspense` fallback.
- Cookie preferences are stored under `localStorage['cookiePrefs']` as JSON (e.g. `{accepted:true,analytics:false}`).
- `src/utils/useDocumentTitle.js` is provided to set page titles from components.
- Accessibility: the `CookieModal` traps focus, supports `Escape` to close, and marks background content with `aria-hidden` while open.

