# Crescendo Secure Solutions — React/Vite

React + Vite implementation of the current Crescendo Secure Solutions UI.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Structure

- `src/App.jsx` — page composition
- `src/data/siteData.js` — navigation, services, industries, stats and process data
- `src/components/` — reusable page sections
- `src/styles.css` — current UI styling and responsive breakpoints
- `public/assets/` — logo and hero image

## Design baseline

Primary colors are intentionally kept as:

- Navy: `#061950`
- Light blue: `#ccd8ff`

Future features should be added as new components/routes/data while keeping this baseline intact.
