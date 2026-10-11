# Library Registry

Every third-party package used by this project, why it is here, and its security / compatibility status.

> **Rule:** whenever a package is added, upgraded or removed, update this file in the same change and bump the "Last updated" line.

**Last updated:** 2026-10-12 · **Node.js:** 24 LTS (Next.js requires >= 20.9) · **Package manager:** npm

## Licensing policy (decided by the owner)

This applies to **fonts, icons, animations, 3D tools and animation libraries**, and in general to everything shipped to visitors.

1. **Only free and open-source licenses.** Allowed: MIT, ISC, Apache-2.0, BSD-2/3-Clause, 0BSD, CC0-1.0, SIL OFL 1.1 (fonts), Unlicense. Fonts, icons, models and animations may also be public domain.
2. **No paid, trial or "free for personal use only" assets**, no unlicensed images, fonts or 3D models found online.
3. **Needs a closer look before use:** licenses that require attribution (e.g. CC-BY: the credit must be shown on the site) and copyleft licenses (GPL, LGPL, AGPL, MPL), because they can place obligations on our own code.
4. **Owner approval first.** Before installing or adding any font, icon set, animation, 3D library or animation library, Claude presents it with name, purpose, license, version and a security / compatibility check, and waits for the owner's explicit approval.
5. **Record it here.** Every approved addition gets an entry in the tables below, including its license, in the same change.
6. **The owner's own content** (photos, 3D models, logo) is the owner's responsibility. Works that show third-party characters or brands may need the rights holder's permission for commercial use.

### Current status of these categories

| Category | In use | License | Notes |
|---|---|---|---|
| Font | Geist (via `next/font/google`) | SIL OFL 1.1 | Downloaded at build time and served from our own site; visitors do not contact Google |
| Icons | `lucide-react` (menu, sun, moon, arrows, mail, phone, cube, rotate) | ISC | |
| Icons | Instagram glyph in `SocialIcon.tsx` | Own simple line drawing | No brand artwork copied |
| 3D viewer | `@google/model-viewer` + `three` | Apache-2.0 / MIT | Approved by the owner on 2026-10-12 |
| Placeholder 3D model | `public/models/placeholder-cube.glb` | Created for this project (a plain cube) | No third-party content. To be replaced by the owner's own models |
| Brand logo | `public/logo.png` (the workshop's own logo, provided by the owner) | Owner's own | Also used as the favicon (`src/app/icon.png`) |
| Third-party design: Taxi Sign | `public/photos/taxi-sign.jpg` (cover render) | Model: CC0 (Public Domain), designer **Tade**, source https://makerworld.com/tr/models/677134-taxi-sign (license read on the page on 2026-10-12) | The image is the render shown on the source page, used with the owner's decision; it is labelled "3D önizleme" and the detail page shows designer, source, license and a rights note. The model file itself is not hosted yet |
| Animation | None | n/a | Needs approval first |

## Runtime dependencies (shipped to visitors)

| Package | Version | Purpose | Added | Checks |
|---|---|---|---|---|
| `next` | 16.4.0 | App framework: file-based routing, build, static export for GitHub Pages | 2026-10-12 | Pinned by `create-next-app`; build passes |
| `react`, `react-dom` | 19.3.0 | UI library | 2026-10-12 | Versions required by Next 16.4 |
| `@google/model-viewer` | ^4.4.0 (4.4.0) | Interactive 3D viewer (rotate, zoom) for `.glb` models, used in `WorkViewer.tsx` | 2026-10-12 | Apache-2.0. Depends on `lit` (BSD-3-Clause) and `@monogrid/gainmap-js` (MIT). Peer: `three ^0.183.0`. Loaded only in the browser through a dynamic import. Verified in the browser: renders the model and makes no request to other sites with an uncompressed `.glb` and `environment-image="neutral"` |
| `three` | ~0.183.2 | 3D engine used by `model-viewer` | 2026-10-12 | MIT. **Kept on 0.183.x on purpose:** `model-viewer` 4.4.0 requires `^0.183.0`; the newest `three` (0.186) is outside that range. Revisit when `model-viewer` supports a newer version |
| `lucide-react` | ^1.55.0 | Simple UI icons | 2026-10-12 | ISC. Peer: React 16.5 to 19 |
| `clsx` | ^2.1.1 | Builds class-name strings conditionally | 2026-10-12 | MIT |
| `tailwind-merge` | ^3.7.0 | Resolves conflicting Tailwind classes (inside `cn()`) | 2026-10-12 | MIT; 3.x supports Tailwind 4 |

**Note on compressed models:** if a `.glb` is exported with Draco, KTX2 or Meshopt compression, `model-viewer` downloads the decoder from Google's servers by default. That would send visitors' requests to a third party. Either export without compression (recommended for small models) or host the decoders ourselves; decide together with the owner before using compression.

## Development dependencies (never shipped)

| Package | Version | Purpose | Added | Checks |
|---|---|---|---|---|
| `typescript` | ^5 (5.9.3) | Type checking (`npm run typecheck`) | 2026-10-12 | Kept on 5.x: the latest major (7.x) was not verified against Next 16.4 / typescript-eslint 8 |
| `tailwindcss`, `@tailwindcss/turbopack` | ^4 (4.3.3) | Utility-first CSS and its Turbopack loader | 2026-10-12 | MIT; same version |
| `eslint`, `eslint-config-next` | ^9 (9.39.5), 16.4.0 | Finds bugs and style problems (`npm run lint`) | 2026-10-12 | npm reports ESLint 9.x as deprecated in favor of 10.x; kept because `eslint-config-next` 16.4 targets 9 |
| `prettier`, `prettier-plugin-tailwindcss` | ^3.9.10, ^0.8.1 | Code formatter and Tailwind class sorter | 2026-10-12 | MIT |
| `vitest`, `jsdom`, `@vitejs/plugin-react` | ^5.0.3, ^30.1.2, ^6.1.2 | Unit tests | 2026-10-12 | MIT; Vitest needs Node 22.12+/24 and `@types/node` 24 |
| `@testing-library/react`, `jest-dom`, `user-event` | ^16.3.3, ^7.0.1, ^14.6.7 | Component test helpers | 2026-10-12 | MIT |
| `@types/node`, `@types/react`, `@types/react-dom` | ^24, ^19, ^19 | Type definitions | 2026-10-12 | MIT |

## CI / deployment actions (`.github/workflows/deploy.yml`)

Official GitHub actions, pinned to a major version: `actions/checkout` v4, `actions/setup-node` v4, `actions/configure-pages` v5, `actions/upload-pages-artifact` v3, `actions/deploy-pages` v4. Added 2026-10-12.

## Security audit log

| Date | Command | Result | Decision |
|---|---|---|---|
| 2026-10-12 | `npm audit` | 5 "high" findings, all one chain: `eslint-config-next` -> `@next/eslint-plugin-next` -> `fast-glob` -> `micromatch` -> `braces` (advisory GHSA-vfj7-8cjw-p6xm, denial of service via deeply nested glob patterns). Installing `@google/model-viewer` and `three` added no new findings | **Accepted.** The chain is used only by the linter on our own source files during development; it is not part of the built site and never sees visitor input. No patched `braces` release exists yet, and `npm audit fix --force` would downgrade Next.js to v14. Re-check after each dependency update |

## Compatibility checks performed

- `npm run typecheck`, `npm run lint`, `npm test` (14 tests) and `npm run build` (static export, 10 pages including the work detail pages) pass.
- Browser check of the 3D viewer: the model renders and no request leaves the site.

## Planned (not installed yet)

- Animation / motion library: only after the owner shares the references and approves a specific, free and open-source option (see "Licensing policy").
