# BeautyHub Nepal

This repository contains a small static website scaffold for the BeautyHub Nepal homepage.

Files added:

- [index.html](index.html) — homepage
- [styles.css](styles.css) — site styles
- [script.js](script.js) — small interaction (mobile menu)
- [assets/logo.svg](assets/logo.svg) — simple SVG logo

## Preview locally

Open a terminal in the project folder and run a simple HTTP server (PowerShell example):

```powershell
python -m http.server 8000
```

Then open http://localhost:8000 in your browser.

## Next steps

- Replace placeholder contact details with real info.
- Add service pages, images and booking/contact form.

## What's included now

- Individual service pages: `services/hair.html`, `services/skincare.html`, `services/makeup.html`, `services/nails.html`, `services/massage.html`, `services/threading.html`, `services/bridal.html`, `services/spa.html`
- Contact page: `contact.html` with a client-side contact form
- Booking page: `booking.html` with a client-side booking form
- SVG placeholders in `assets/` for service imagery

Services offered (8 total):
- Hair Styling
- Skincare
- Makeup
- Nails & Manicure
- Massage & Wellness
- Threading & Waxing
- Bridal Packages
- Spa Packages

Design features:
- Modern gradient color palette (indigo, pink, teal)
- Smooth hover animations and transitions
- Responsive mobile/desktop layout
- Sticky header with gradient background
- Shadow effects and depth

Note: Forms are client-side only and store submissions in browser `localStorage`. For real bookings/messages, connect the forms to a backend or form service (e.g., Formspree, Netlify Forms, or a simple server endpoint).
