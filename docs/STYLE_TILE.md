# Visual Style Tile — EightVo Solutions

This one-page reference shows the core design tokens, typography, and small UI examples to use as the source of truth for the app.

## Color Palette
- Primary: `#0B8F6B` (accent)
- Secondary: `#0B79B0`
- Neutral 900 (text): `#0F172A`
- Neutral 500 (muted): `#6B7280`
- Surface: `#FFFFFF`
- Surface-2: `#F8FAFC`
- Success: `#16A34A`
- Warning: `#F59E0B`
- Danger: `#EF4444`

Swatches (use hex in CSS variables):

```css
:root{
  --color-primary: #0B8F6B;
  --color-secondary: #0B79B0;
  --color-text: #0F172A;
  --color-muted: #6B7280;
  --surface: #FFFFFF;
  --surface-2: #F8FAFC;
  --success: #16A34A;
  --warning: #F59E0B;
  --danger: #EF4444;
}
```

## Typography
- Primary: `Inter, system-ui, -apple-system, 'Segoe UI', Roboto`
- Display / accent (optional): `Poppins` or similar for headings (use sparingly)

Scale (rem-based):
- H1: 2rem (32px)
- H2: 1.5rem (24px)
- H3: 1.25rem (20px)
- Body: 1rem (16px)
- Small: 0.875rem (14px)

Example HTML:

```html
<h1 style="font-size:2rem;font-weight:700">Build and deliver products</h1>
<p style="font-size:1rem;color:var(--color-muted)">Short supporting sentence describing value.</p>
```

## Buttons (examples)
- Primary (filled): use for main CTA
- Secondary (outline): use for less-emphasized action
- Ghost (text): small contextual actions

Example markup:

```jsx
<Button variant="primary">Get started</Button>
<Button variant="secondary">Request demo</Button>
<Button variant="ghost">Learn more</Button>
```

## Components (usage)
- Card: use for dashboard tiles and marketing feature cards

```jsx
<Card>
  <h3>Project health</h3>
  <p className="muted">3 active sprints • 12 open issues</p>
</Card>
```

## Motion & Interaction
- Durations: 150–300ms. Use ease-out cubic-bezier(.2,.9,.2,1).
- Hover: translateY(-4px) and raise shadow slightly.
- Focus: 2px ring using `--color-secondary` at reduced opacity.

## Accessibility & Tokens
- Ensure contrast AA at minimum for text on backgrounds.
- Use CSS variables for tokens and prefer rem units for spacing/typography.

---

This file is a living reference. Use `src/styles/components.css` and `src/components/ui/*` for implementation examples in the repo.
