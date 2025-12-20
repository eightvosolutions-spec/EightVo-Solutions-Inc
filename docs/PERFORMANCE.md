# SEO & Performance Notes

Recommendations for public pages and general performance:

- Rendering
  - Prefer server-rendering or pre-rendering for public marketing pages (Vite SSR or prerender) to improve SEO and first contentful paint.
  - Ensure each public page has `meta` tags and Open Graph tags (`og:title`, `og:description`, `og:image`, `twitter:card`).

- Images
  - Lazy-load non-critical images with `loading="lazy"` and include `width` and `height` attributes to avoid layout shift.
  - Serve compressed images (WebP/AVIF where supported) and provide sensible srcset breakpoints.

- Bundling
  - Keep dashboard and heavy editors code-split via dynamic imports (already used with React.lazy for pages).
  - Lazy-load third-party analytics and reduce footprint with opt-in cookie prefs (see localStorage['cookiePrefs']).

- Accessibility & Perf
  - Use skeleton loading placeholders with Suspense to reduce layout jumps.
  - Use CSS tokens and small utility classes to avoid large CSS bundles.

- Lighthouse tips
  - Avoid render-blocking scripts in head; defer or async where possible.
  - Minimize main-thread work on first load; defer non-critical initialization to idle callbacks.
