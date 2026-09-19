# daleykd.com

Kyle Daley's personal website — career story, notes, and resume, deployed as a static site on Cloudflare Workers.

## Tech stack

- **[Astro](https://astro.build)** — static site generator. Pages and components are `.astro` files with TypeScript in the frontmatter.
- **[React](https://react.dev)** (via `@astrojs/react`) — used for interactive islands: mobile nav, photo lightbox, scroll-to-top, theme toggle.
- **[Tailwind CSS v4](https://tailwindcss.com)** (via `@tailwindcss/vite`) + [`@tailwindcss/typography`](https://github.com/tailwindlabs/tailwindcss-typography) — utility-first styling, with `src/styles/global.css` for global rules.
- **Astro Content Collections** ([src/content.config.ts](src/content.config.ts)) — Markdown notes live in `src/content/notes/` and render through [NoteLayout.astro](src/layouts/NoteLayout.astro).
- **[@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)** and **[@astrojs/rss](https://docs.astro.build/en/guides/rss/)** — sitemap generation and an RSS feed ([src/pages/rss.xml.ts](src/pages/rss.xml.ts)).
- **Cloudflare Workers** (static assets) — hosts the built site; see [wrangler.jsonc](wrangler.jsonc).
- **[Playwright](https://playwright.dev)** — end-to-end tests in `tests/e2e/`.

## Project structure

```text
src/
  components/
    astro/    Header, Footer, ChapterNav, ChapterTOC, NoteCard, BackLink, CTAButton
    react/    MobileNav, PhotoLightbox, ScrollToTop, ThemeToggle
  content/
    notes/    Markdown notes (content collection)
  data/       chapters.ts — career chapter data
  layouts/    BaseLayout, PageLayout, NoteLayout
  lib/        emphasis.ts, readingTime.ts
  pages/      index, about, now, letter, managers, career/, notes/, rss.xml.ts
  styles/     global.css
public/       favicon, resume PDF, images, robots.txt, llms.txt
tests/e2e/    Playwright specs
```

## Commands

| Command             | Action                                             |
| :------------------- | :-------------------------------------------------- |
| `npm install`         | Install dependencies                                |
| `npm run dev`          | Start the Astro dev server at `localhost:4321`      |
| `npm run build`        | Build the production site to `./dist/`              |
| `npm run preview`      | Build, then run it locally via Wrangler             |
| `npm run deploy`       | Build, then deploy to Cloudflare Workers            |
| `npm run astro ...`    | Run Astro CLI commands (e.g. `astro check`)         |
| `npm run test:e2e`     | Run the Playwright end-to-end test suite            |

## Deployment

The site is a static build deployed to Cloudflare Workers (see [wrangler.jsonc](wrangler.jsonc)). `npm run deploy` builds the site with Astro and deploys the `dist/` output via `wrangler deploy`.

## Contributing

See [AGENTS.md](AGENTS.md) / [CLAUDE.md](CLAUDE.md) for AI-assistant development conventions used in this repo, and [Astro's documentation](https://docs.astro.build) for framework reference.
