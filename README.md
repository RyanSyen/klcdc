# KLCDC

Website for KLCDC — built with Next.js. Includes sections for sermons, bible studies, events, sports, English corner, testimonies, and more.

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router) + [React 19](https://react.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/) primitives, [shadcn](https://ui.shadcn.com/)-style components (`components.json`)
- [Framer Motion](https://www.framer.com/motion/) / [react-spring](https://www.react-spring.dev/) for animation, [Embla Carousel](https://www.embla-carousel.com/)
- [Vercel Analytics](https://vercel.com/docs/analytics) & [Speed Insights](https://vercel.com/docs/speed-insights)

## Prerequisites

- [Node.js](https://nodejs.org/) 20 or later (see `.nvmrc`)
- npm (ships with Node)

If you use [nvm](https://github.com/nvm-sh/nvm), run `nvm use` in the project root to pick up the correct version automatically.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/RyanSyen/klcdc.git
   cd klcdc
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   > This repo ships with `legacy-peer-deps=true` in `.npmrc`, so no extra flags are needed.

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command         | Description                              |
| --------------- | ----------------------------------------- |
| `npm run dev`   | Start the local dev server with hot reload |
| `npm run build` | Build the app for production               |
| `npm run start` | Serve the production build locally         |
| `npm run lint`  | Run ESLint                                  |

## Project Structure

```
src/
├── app/            # App Router pages (routes: about, contact, events, sermons, sunday-service, ...)
├── components/     # Shared UI components (navbar, footer, carousel, banner, ui primitives, ...)
├── hooks/          # Custom React hooks
└── lib/            # Utilities and shared logic
public/             # Static assets (images, icons)
scripts/            # Project scripts
```

## Deployment

This project is deployed on [Vercel](https://vercel.com/). Pushing to `main` triggers a production deployment; other branches get preview deployments.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for how to propose changes.
