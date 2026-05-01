# Architecture Guidelines

This project is intentionally simple: reusable components, centralized styling, and a clear folder structure.

## Principles

- Keep components small and focused on one responsibility.
- Prefer composition over inheritance and avoid deep abstractions.
- Store reusable values (colors, spacing, radii, typography) in one place.
- Keep page components declarative and move visual primitives to `ui/`.
- Choose clear naming and predictable file placement over clever patterns.

## Folder Structure

- `src/components/pages/`: Route-level pages (`HomePage`, `ProjectsPage`, etc.).
- `src/components/ui/`: Reusable primitives (`CustomCard`, `AppButton`).
- `src/utils/`: Shared constants and utilities (`routes.js`).
- `styles/main.css`: Global CSS, design tokens, layout helpers, and shared classes.
- `assets/`: Static media files.

When adding code, prefer this rule:

- Reused in 2+ places -> move to `src/components/ui/` or `src/utils/`.
- Used only once and route-specific -> keep inside the page component.

## Design System and Tokens

All design tokens live in `styles/main.css` under `:root`:

- Colors (`--color-*`)
- Spacing (`--space-*`)
- Radius and shadows (`--radius-*`, `--shadow-*`)
- Typography (`--font-family-*`)

To update the visual theme, change token values in one file only (`styles/main.css`).

## Component Guidelines

- Expose a small public API via element properties.
- Use sensible defaults to reduce setup work.
- Keep variants explicit (for example `variant="primary"`).
- Avoid route logic inside `ui/` components.
- Ensure components are usable in both desktop and mobile layouts.

## Styling Guidelines

- Use token-driven styles, not hardcoded color literals in components.
- Keep global utility classes minimal and semantic (`container`, `grid-2`, `badge`).
- Do not add per-page token overrides unless there is a strong design reason.

## Developer Experience

- Keep onboarding friction low: predictable files, simple scripts, and readable templates.
- Prefer straightforward refactors over introducing frameworks or build-time complexity.
- Validate changes with `npm run build` before merging.

## Scalability Without Overengineering

- Add new page features as isolated sections/components.
- Promote repeated blocks into `ui/` only when repetition appears.
- Avoid creating generic systems before a real second use case exists.
