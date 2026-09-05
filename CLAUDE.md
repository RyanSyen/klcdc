# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install        # .npmrc sets legacy-peer-deps=true, so no extra flags
npm run dev        # dev server on http://localhost:3000
npm run build      # production build — run this before requesting review
npm run lint       # ESLint (next/core-web-vitals)
npm run start      # serve the production build
```

Node 24.x is required (`.nvmrc`, `engines.node`, Volta pin). There is no test framework in this repo — `npm run lint` and `npm run build` are the only checks.

## Architecture

Next.js 15 App Router marketing/content site for a church, deployed on Vercel (push to `main` = production, other branches = previews).

**JavaScript, not TypeScript.** All source is `.js`/`.jsx`. A `tsconfig.json` exists only because Next generates one; `jsconfig.json` is what actually maps `@/*` → `./src/*`. `components.json` has `"tsx": false`, so shadcn additions land as `.jsx`.

**Content is JSON in `public/data/`, not a CMS.** Async server components read it directly off disk:

```js
const file = await fs.readFile("public/data/events.json", "utf8");
```

The path is relative to the **process CWD (project root)**, not the importing file — keep that form when adding new data reads. Consumers: `src/app/events/page.jsx` (events.json), `src/app/sermons/page.jsx` (sermons.json), `src/app/about/page.jsx` (statement_of_faith.json), `src/components/home/upcomingEvents.jsx` (upcoming_events.json). Adding church content usually means editing one of these JSON files plus dropping images under `public/` and referencing them by root-relative path (`/events/…`).

**Server/client split.** Data-reading components are server components; anything animated or interactive is a separate `"use client"` file. The common pattern is a server `page.jsx` that reads JSON and passes already-built JSX into a client presentational component (e.g. `events/page.jsx` → `ui/timeline.jsx`, `sermons/page.jsx` → `sermon-content.jsx`).

**`src/components/ui/`** holds two kinds of primitives that look alike: shadcn/Radix wrappers (`button`, `card`, `tabs`, `sheet`, `tooltip`, `menubar`) and vendored Aceternity components (`timeline`, `apple-cards-carousel`, `card-hover-effect`, `flip-words`, `link-preview`). Both are edited in-place here. Reuse these and the shared components in `src/components/` before adding anything new.

**Styling** is Tailwind v4, configured CSS-first in `src/app/globals.css` (`@theme`, `@utility`, `@custom-variant dark`) — the `tailwind.config.js` that `components.json` points at does not exist and should not be created. Compose class names with `cn()` from `@/lib/utils`.

**Animation** uses Framer Motion with shared variant factories in `src/lib/motion.js` (`textVariant`, `fadeIn`, `zoomIn`, …) and the `SectionWrapper` HOC in `src/components/sectionWrapper.jsx` for scroll-triggered sections.

**External images** must have their hostname added to `images.remotePatterns` in `next.config.mjs` or `next/image` will throw at runtime.

## Conventions

- Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`, `refactor:`), branches off `main`.
- Match the surrounding file's component structure, Tailwind usage, and naming; don't mix unrelated refactors into a feature or fix.
- Delete dead code rather than commenting it out.
