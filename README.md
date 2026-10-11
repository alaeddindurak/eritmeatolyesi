# Eritme Atölyesi: 3D Showcase Website

Showcase and promotion site for the 3D workshop `@eritmeatolyesi` (3D prints and 3D models), with an interactive 3D viewer. Built with Next.js (App Router), React, TypeScript and Tailwind CSS, exported as a static site for GitHub Pages.

## Pages

| Route | Content |
|---|---|
| `/` | Brand intro with a spinning 3D piece, featured works |
| `/gallery` | All works as cards, category filter |
| `/gallery/<slug>` | One work: interactive 3D viewer, description, specs, photos |
| `/about` | Story of the workshop |
| `/contact` | Instagram (and e-mail / phone when set) |

## Add or edit content

You normally only edit these files; components just render them:

- `src/data/works.ts`: the showcase items (title, category, texts, photos, optional 3D model)
- `src/data/site.ts`: brand name, texts, logo path, contact details, Instagram link
- `src/data/navigation.ts`: menu items

Items marked `TODO` are placeholders to replace.

**Add a work:** put its photos into `public/photos/` and (optionally) its `.glb` file into `public/models/`, then add an entry to `src/data/works.ts`:

```ts
{
  slug: "my-dragon",            // becomes the address /gallery/my-dragon
  title: "Dragon",
  category: "print",            // "print" or "model"
  summary: "One sentence for the card.",
  description: "Longer text for the detail page.",
  photos: ["/photos/my-dragon-1.jpg"],   // the first photo is the cover
  model: "/models/my-dragon.glb",        // optional 3D model
  material: "PLA",                       // optional
  size: "12 cm",                         // optional
  featured: true,                        // show on the home page
}
```

Keep every `.glb` under about 10 MB and export it without Draco/KTX2 compression (see `LIBRARY.md`).

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server at http://localhost:3000 |
| `npm run build` | Build the static site into `out/` (production build uses the `/eritmeatolyesi` sub-path) |
| `npm run lint` | Check code style and common bugs |
| `npm run typecheck` | Check TypeScript types |
| `npm test` | Run unit tests |
| `npm run format` | Format all files with Prettier |

## Publishing

Pushing to `main` runs `.github/workflows/deploy.yml` (type check, lint, tests, build, then publish to GitHub Pages) at `https://alaeddindurak.github.io/eritmeatolyesi/`. With a custom domain, remove the `basePath` logic in `next.config.ts`.

## More documents

- `LIBRARY.md`: every library, its purpose, version, license and security notes (keep it updated; includes the licensing policy)
- `DESIGN.md`: design tokens and guidelines

## Conventions

Code, identifiers and comments are in English. Only visitor-facing text is Turkish.
