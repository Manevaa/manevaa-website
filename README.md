# Manevaa — Launch Website

"The Taste of Home, Delivered." A React + Vite landing site for Manevaa,
a platform connecting customers with mothers and home chefs who cook
from their own kitchens.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Key things to know

- **Launch date** lives in one place: `src/hooks/useCountdown.js` →
  `LAUNCH_DATE`. Change it there and the countdown, hero copy, and
  Order Now behaviour all update automatically.
- **Images** are placeholders (picsum.photos) wired through
  `src/data/images.js` so real Manevaa photography can be dropped in
  later without touching any component.
- **Home chef profiles** in `src/data/chefs.js` are demo data, clearly
  labelled in the UI, until real chefs are onboarded.
- **Contact form** currently just confirms receipt in the UI
  (`src/components/Contact.jsx`) — there's no backend yet. Hook up a
  real endpoint or service when ready.
- **"Coming soon" interactions** (Order Now, category clicks, Explore
  buttons) all route through a shared toast (`src/hooks/useToast.jsx`)
  so the messaging is consistent and easy to update in one spot.

## Structure

```
src/
├── components/     # one component + matching .css per section
├── data/           # chefs, categories, food times, image map
├── hooks/          # countdown, scroll-reveal, toast
├── assets/         # logo
├── App.jsx
├── main.jsx
└── index.css       # design tokens + shared styles
```

This is a frontend-only launch site. It's structured so customer,
home-chef, delivery, and admin flows (auth, cart, checkout, dashboards)
can be layered in later against a real backend/Firebase without
reworking the current pages.
