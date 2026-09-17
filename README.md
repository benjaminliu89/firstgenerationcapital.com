# firstgenerationcapital.com

Static site for First Generation Capital, built with [Astro](https://astro.build) + Tailwind and deployed to GitHub Pages for free on every push to `main`.

## Adding or updating an investment

1. Drop the logo in `public/logos/<slug>.png` (transparent PNG or SVG; it is rendered white on dark).
2. Add an entry to `src/data/portfolio.json`:

   ```json
   {
     "name": "Example Co",
     "year": 2026,
     "logo": "/logos/example-co.png",
     "category": "startups",
     "status": "Active",
     "url": "https://example.com"
   }
   ```

   `category` is one of `startups`, `private-equity`, `venture-capital`, `real-estate`, `hedge-funds`.
   `status` is `Active` or `Exited`. `url` is optional (`""` to omit the link).
3. Commit and push (or open a PR). The site rebuilds and deploys in ~1 minute.

Copy, links and categories live in `src/data/site.ts` and `src/pages/index.astro`.

## Local development

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

Requires Node 22+.

## Deployment / DNS

- GitHub → Settings → Pages → Source: **GitHub Actions**; Custom domain: `www.firstgenerationcapital.com`; Enforce HTTPS.
- DNS (GoDaddy): `www` CNAME → `benjaminliu89.github.io`; apex `@` A records → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (and AAAA `2606:50c0:8000::153` … `8003::153`).

`legacy/` contains a static mirror of the previous Webflow site for reference.
