# Component API & Implementation Notes

This document describes recommended component APIs, patterns and lightweight implementation notes for developers working in this repository.

Principles
- Keep components presentational; push logic into hooks (`useAuth`, `useProject`, etc.).
- Use `React.Suspense` for non-critical data fetching; show skeletons while loading.
- Use Context sparingly (permitted: `auth`, `theme`), prefer prop-drilling for small islands or local state.
- Prefer small dependencies; prefer vanilla CSS variables + small utility classes. Avoid heavy UI frameworks.
- Persist cookie/privacy preferences to `localStorage['cookiePrefs']` (demo already implemented).

Component API conventions
- Presentational component:
  - Props: simple JS values and callbacks
  - No data fetching inside; accept data via props
  - Stateless if possible; otherwise minimal UI state

- Hooks:
  - `useAuth()` — reads/writes auth state, provides `user`, `role`, `login()`, `logout()`
  - `useProject(id)` — returns a Suspense resource for project data: `const resource = useProject(id); const project = resource.read()`

Suspense & Skeletons
- For non-blocking areas (side panels, dashboards), wrap data components in `<Suspense fallback={<SkeletonCard/>}>`.
- Skeleton components should mimic final layout (title row, small blocks) and be purely presentational.

Accessibility
- All dynamic components (modals, slide-overs, toasts) must use appropriate ARIA roles and keyboard handling (Escape to close).
- Error messages should use `role="alert"` and inputs should use `aria-invalid` when validation fails.

Styling
- Use CSS custom properties in `src/styles/tokens.css` for colors, spacing, radii and shadows.
- Component styles should be small, scoped classes (e.g., `.ui-card`, `.list-row`) and use tokens.

Examples
- `Quick` Suspense usage:

```jsx
import React, { Suspense } from 'react'
import { useProject } from '../src/hooks/useProject'
import SkeletonCard from '../src/components/ui/SkeletonCard'

function ProjectSummary({id}){
  const resource = useProject(id)
  const project = resource.read() // may suspend
  return <div>{project.name}</div>
}

export default function Page(){
  return (
    <Suspense fallback={<SkeletonCard/>}>
      <ProjectSummary id="42" />
    </Suspense>
  )
}
```

Where to add new components
- Add small presentational components under `src/components/ui/` and export them through `src/components/ui/index.js`.

Testing
- Keep components small and testable. Prefer unit tests for hooks and simple render tests for presentational components.

Notes
- This repository uses a minimal design-system tokens file at `src/styles/tokens.css` — use those tokens rather than hard-coded colors.
