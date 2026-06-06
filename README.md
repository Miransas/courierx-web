# CourierX Web

The marketing site for [CourierX](https://courierx.io) — the open-source, self-hosted transactional email API.

> Live at [courierx.io](https://courierx.io)

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion (animations)
- shadcn/ui + Radix
- IBM Plex Sans + JetBrains Mono

## Quick start

```bash
git clone https://github.com/miransas/courierx-web
cd courierx-web
npm install
npm run dev
```

Open `http://localhost:3000`.

## Design

- Dark base (`#050505`)
- Accent: neon green `#8CFF2E`
- Engineering-focused, Vercel/Linear-inspired

## Related repos

| Repo | Purpose | Status |
|------|---------|--------|
| [courierx-api](https://github.com/miransas/courierx-api) | HTTP API server (Rust) | Public |
| [courierx-worker](https://github.com/miransas/courierx-worker) | Queue consumer (Rust) | Public |
| courierx-console | Dashboard (Next.js) | Private |
| courierx-sdk-js | `@courierx/node` SDK | Planned |
| courierx-docs | docs.courierx.io | Planned |

## License

MIT — see [LICENSE](./LICENSE).

---

Part of [Miransas](https://miransas.com).