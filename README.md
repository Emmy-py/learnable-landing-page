# Learnable Landing Page — Redesign

A responsive redesign of the landing page for **[Learnable](https://learnable.genesystechhub.com)**, built with **Next.js**.

> This is an independent redesign project, not the official site. The live Learnable platform is at
> **https://learnable.genesystechhub.com**.

## What is Learnable?

Learnable is a 6–9 month, project-based tech training programme run by [Genesys Tech Hub](https://genesystechhub.com) in Enugu, Nigeria. It takes beginners and career switchers and prepares them for real industry work. Interns learn tracks such as Frontend Web Development, Product Design and Data Analytics. They build real projects in teams, get mentorship from industry professionals, and graduate with portfolio-ready work and career support.

## About this redesign

This project rebuilds the Learnable landing page from a Figma design as a fast, fully responsive Next.js site:

- **Home page**: hero with a draggable, curved portrait strip; partner logos; about and stats; programmes carousel; features; how it works; student projects carousel; testimonials; partnership; FAQ accordion; and a call to action.
- **Custom 404 page.**
- **Responsive everywhere**: mobile hamburger menu, swipeable carousels, and layouts that adapt from phone to desktop.

## Built with

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com)
- [DM Sans](https://fonts.google.com/specimen/DM+Sans) via `next/font`

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

- **Vercel**: import the repo and deploy. The defaults work as they are.
- **Cloudflare Pages**: deploy with the OpenNext Cloudflare adapter (`@opennextjs/cloudflare`), or configure a static export.

## Project structure

```
src/
  app/              layout, home page, 404, favicon (favicon.ico)
  components/       navbar, footer, buttons, carousel, FAQ accordion
  components/home/  home page sections
  data/content.ts   all page copy and links
public/images/      images
```

## Credits

- Original platform and brand: [Learnable by Genesys Tech Hub](https://learnable.genesystechhub.com)
- Redesign built by [Emmanuel Ngene](https://github.com/Emmy-py) · [LinkedIn](https://www.linkedin.com/in/emmanuel-ngene-708337263) · [X](https://x.com/_devemmy)
