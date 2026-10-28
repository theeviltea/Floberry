# FloBerry — site preview

Static preview of the FloBerry Boutique (floberry.ae) Shopify redesign: Home, Collection, Product, Cart and a Content page, desktop and mobile from one codebase. Built with Astro; the layouts mirror the design canvas and the FloBerry Design System (tokens, Hugeicons Stroke Rounded icons, brand pattern).

```sh
npm install
npm run dev            # http://localhost:4321
npm run build          # static site in dist/
npm run build:preview  # relative-path copy in preview/ for artifact hosting
```

Pages

- `/` — Home
- `/collections/red-roses/` — Collection (universal template, filters + mobile drawer)
- `/products/bouquet-of-51-red-roses/` — Product (packing, add-ons, message card, delivery slot, Turbo)
- `/cart/` — Cart
- `/pages/delivery/` — Content page

Notes

- Catalogue data, prices for packing and add-ons are demo values (`src/data/catalog.ts`).
- Square-bracket text (`[Fee]`, `[Opening hours]`, `[Payment methods]`, `[VAT note to confirm]`) is a placeholder waiting for the client.
- Fonts: Libre Caslon Display and Urbanist via @fontsource as stand-ins for the licensed brand fonts.
