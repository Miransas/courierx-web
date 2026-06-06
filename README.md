# CourierX Web

The marketing site for [CourierX](https://courierx.io) — an open-source, self-hosted email API for developers.

> Send transactional emails from your own infrastructure. Drop-in Resend-compatible API, full source code, and a worker you can self-host.

## Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4 + shadcn/ui primitives
- **Animations:** Framer Motion
- **Smooth scroll:** Lenis
- **Fonts:** IBM Plex Sans + JetBrains Mono
- **Deployment:** Vercel

## Local development

```bash
git clone https://github.com/sardorazimov/courierx-web.git
cd courierx-web
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Project structure

```
app/
  layout.tsx          → root layout, fonts, metadata, OG image
  page.tsx            → landing page composition
  opengraph-image.tsx → dynamic OG card (1200x630)
components/
  shared/             → page-level sections (hero, code snippet, pricing, FAQ, etc)
  ui/                 → reusable primitives (button, card, input)
  provider/           → context providers (theme, smooth scroll)
public/
  console-preview.png → console screenshot used in the browser-frame mockup
```

## Other repos in the CourierX project

- [courierx-api](https://github.com/Miransas/courierx-api) — the Rust HTTP API (Axum + SQLx + Postgres)
- [courierx-worker](https://github.com/Miransas/courierx-worker) — the queue consumer that delivers emails
- `courierx-console` — the dashboard (private until launch)

## Brand

CourierX is built under the [Miransas](https://miransas.com) brand by [@sardorazimov](https://github.com/sardorazimov).

## License

MIT — see [LICENSE](./LICENSE)
