# Learnable Landing Page

A responsive redesign of the Learnable by Genesys landing page, built with Next.js (App Router), TypeScript and Tailwind CSS v4.

## Pages

- `/` — Home: hero with a draggable curved portrait strip, programs and student-work carousels, features, how it works, testimonials, partnership, FAQs and a call to action.
- Any unknown route — custom 404 page.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

## Deploy

- **Vercel:** import the repo; the defaults (framework Next.js, `npm run build`) work as-is.
- **Cloudflare:** deploy with the OpenNext Cloudflare adapter (`@opennextjs/cloudflare`), or use Vercel/Netlify for zero-config hosting.

## Structure

- `src/app` — layout, home page, 404
- `src/components` — shared UI (navbar, footer, buttons, carousel, FAQ accordion)
- `src/components/home` — home page sections
- `src/data/content.ts` — all page copy and links
- `public/images` — images

Built by [Emmanuel Ngene](https://github.com/Emmy-py).
