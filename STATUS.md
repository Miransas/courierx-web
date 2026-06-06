# CourierX — Project Status

> Last updated: Friday, June 6, 2026

This file is a snapshot of where every CourierX repo stands, written for future-me after a 1-2 week break. Open this first when returning to the project.

## ✅ Recently completed

### Landing site (courierx-web)
- Full polish pass: code snippet section, browser-frame console mockup, pricing, FAQ, final CTA, OG meta tags
- All header links fixed (no more 404s on Features/Pricing/Docs/Changelog)
- Lenis smooth scroll integrated
- Ready for Saaspo submission

### Console (courierx-console)
- Foundation built: route structure, sidebar (collapsible), topbar, primitives
- Domains route added
- Overview demo mode with mock data, charts, recent emails — used for landing page screenshot

### API (courierx-api)
- Phase 1 complete: `POST /v1/emails` end-to-end working
- 3-table schema (workspaces, api_keys, emails) with migrations
- Test API key seeded for local dev

### Worker (courierx-worker)
- Phase 1 complete: stdout provider, `FOR UPDATE SKIP LOCKED` polling
- Schema-version check on startup prevents premature crashes
- End-to-end pipeline verified: API queues → worker delivers → row marked sent

## 🟡 In progress / blocked

- **Domain purchase: `courierx.io`** — bank card currently closed for international charges. Will buy when card reactivates.
- **Console real auth** — 3B/3C/3D prompts queued, blocked on API auth endpoints being built first.

## ⏳ Next up (when returning)

1. **Buy `courierx.io`** ($37, Spaceship)
2. **Deploy current landing to courierx.io** via Vercel (DNS via Cloudflare)
3. **Build API auth endpoints:** `POST /auth/register`, `POST /auth/login`, JWT issuance
4. **Console PROMPT 3B:** Mock login + protected route guard
5. **Console PROMPT 3C:** Dashboard wired to real API (Emails list/detail)
6. **Console PROMPT 3D:** API Keys CRUD + Settings
7. **Resend provider integration** — first real outbound email (kills $20/mo Resend bill)
8. **Eventually:** SES provider once bank card reopens

## 🗂 Repo cheatsheet

| Repo                   | Visibility | URL                                                     | State                  |
|------------------------|------------|---------------------------------------------------------|------------------------|
| courierx-web           | Public     | github.com/sardorazimov/courierx-web                    | ✅ Landing complete    |
| courierx-api           | Public     | github.com/Miransas/courierx-api                        | ✅ Phase 1 done        |
| courierx-worker        | Public     | github.com/Miransas/courierx-worker                     | ✅ Phase 1 done        |
| courierx-console       | Private    | github.com/Miransas/courierx-console                    | 🟡 Foundation done     |

## 🔑 Local dev quick-start

```bash
# Terminal 1 — API
cd courierx-api
sqlx migrate run    # if schema not yet applied
cargo run           # localhost:8080

# Terminal 2 — Worker
cd courierx-worker
cargo run           # polls Postgres every 2s

# Terminal 3 — Console
cd courierx-console
npm run dev         # localhost:3000

# Terminal 4 — Landing
cd courierx-web
npm run dev         # localhost:3001 (or whatever's free)
```

DB: `postgres://courierx:courierx@localhost:5432/courierx`

Test API key (dev only, deterministic): `cx_live_test1234567890abcdef0123456789ab`

## 🧠 Decisions baked in (don't relitigate)

- **No Redis** — Postgres-backed queue via FOR UPDATE SKIP LOCKED
- **No competitor-comparison table on landing** — confident-without-attacking positioning
- **No per-product blogs** — single `miransas-blog` for everything (next big project after this)
- **Console private until launch** — go public only when ready for real users
- **Worker doesn't run migrations** — API is sole schema owner
- **Pricing: just Free + Managed (coming soon)** — no inflated three-tier pricing
- **Lenis smooth scroll on landing** — keep it on, don't replace

## 📝 Next big move (after CourierX)

Convert the purchased Next.js 15/16 blog template into `miransas-blog`. Single blog for ALL Miransas products. Likely path: `miransas.com/blog`. Resend/Vercel-style: one company voice, content backlog covers everything from CourierX to Binboi to Vertox.

---

When returning, run through the "Next up" list top-to-bottom. Skip "Domain purchase" if card is still closed and continue with #3 (API auth).
