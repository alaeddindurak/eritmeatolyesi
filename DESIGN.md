# Design Guidelines

Current design tokens and rules. The tokens live in one place, `src/app/globals.css` (`@theme` block plus the light-theme override). When a new design arrives, replace the values there; components use token names, not raw colors.

## Brand

Eritme Atölyesi: "3D Tasarım & Yeni Nesil Üretim", "Katman katman yükselen fikirler." The Instagram logo is a dark round badge with a neon cyan glow, so the site is **dark by default** with a cyan accent. The logo file itself has not been added yet; a text logo ("S3D" badge + name) is used until `siteConfig.logo` is set (`src/data/site.ts`).

## Colors

| Token | Dark (default) | Light | Use |
|---|---|---|---|
| `brand` | `#22C3F5` | `#0877A8` | Accent: buttons, links, highlights |
| `brand-hover` | `#5FD6F8` | `#065F85` | Hover of brand buttons |
| `brand-soft` | `#0C2A3A` | `#E1F4FC` | Tint behind icons, badges, active nav item |
| `brand-ink` | `#7FDCFB` | `#065F85` | Text drawn on `brand-soft` |
| `on-brand` | `#04111F` | `#FFFFFF` | Text drawn on `brand` (e.g. button label) |
| `surface` | `#060B14` | `#F4F8FC` | Page background |
| `card` | `#0D1626` | `#FFFFFF` | Card background |
| `line` | `#1C2A44` | `#D5E1EE` | Borders and dividers |
| `ink` | `#E6EDF7` | `#0F1B2D` | Body text |
| `title` | `#F4F8FF` | `#07111F` | Headings |
| `muted` | `#8FA3C0` | `#4A5B73` | Secondary text |
| `chip` | `#14213A` | `#E8EFF7` | Neutral badge background |
| `footer` | `#03060C` | `#03060C` | Footer background (dark in both themes) |

Rules: do not use fixed colors such as `bg-white` or `text-slate-*` in components (they would not follow the theme), except the footer text which sits on the always-dark footer. Text on a `brand` background uses `text-on-brand` (dark text in dark mode, because the bright cyan would not have enough contrast with white).

## Theme switch

A sun/moon button in the header switches themes. The choice is saved in the browser (`localStorage`, key `theme`). Unlike the portfolio site, the **default is dark** (not the system setting). The switch sets `<html data-theme="light|dark">`; an inline script in `<head>` (`src/lib/theme.ts`) applies it before the first paint.

## Layout and responsiveness

- Mobile-first. Breakpoints: `sm` 640px, `md` 768px (navigation switches from hamburger to inline links), `lg` 1024px.
- Page width is capped by `Container` (`max-w-6xl`).
- Work grid: 1 column, then 2 (`sm`), then 3 (`lg`). Work covers and the 3D viewer are square (1:1).

## Components

- `ui/`: `Container`, `Card`, `Badge`, `Button` (a styled link), `SectionTitle` (h1), `SectionHeading` (h2), `SocialIcon`.
- `layout/`: `Header` (with mobile menu), `Footer`, `ThemeToggle`, `BrandLogo`.
- `sections/`: `Hero`, `FeaturedWorks`, `WorkCard`, `WorkPreview`, `WorkViewer` (3D), `GalleryGrid` (filter), `ContactCards`.

## 3D viewer

`WorkViewer` wraps `<model-viewer>`: drag to rotate, scroll / pinch to zoom, slow auto-rotate, built-in neutral lighting (no external file). Works without a model show a photo instead. Keep each `.glb` under about 10 MB.

## Accessibility

Visible focus ring on all interactive elements, `aria-label` / `aria-expanded` on the hamburger button, `aria-current="page"` on the active link (also on a work's detail page), `aria-pressed` on the gallery filter, a text alternative (`alt`) for every 3D model, decorative icons hidden from screen readers, reduced-motion respected for smooth scrolling.

## Motion

Not added yet. Planned as a later step: references will be reviewed first, then adapted (new libraries need approval, see `LIBRARY.md`).
