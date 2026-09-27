## Workflow

Work on local branches, not `main`. Name branches `[purpose]/[description-slug]`, e.g.:

- `chore/npm-updates`
- `bug/gh-153-bad-login`
- `feat/gh-173-new-career`

## Cloudflare

Deploys happen automatically via Cloudflare Workers Builds on merge to `main` (see `.github/workflows/ci.yml`). The Cloudflare MCP connector doesn't work in this environment ("invalid address" when opening the page), so don't rely on it. Use the `wrangler` CLI via `npm` instead (e.g. `npx wrangler ...`) for anything that needs direct Cloudflare access.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
