# GrappleHub Website

A modern, SEO-optimized landing page for the GrappleHub wrestling app.

## Features

- 🎯 **Landing Page** with hero section and feature overview
- 📱 **QR Code** for easy App Store downloads
- 📋 **Legal Pages** - Terms of Service & Privacy Policy
- 🎨 **Responsive Design** - Works perfectly on all devices
- ⚡ **Fast Performance** - Built with Next.js
- 🔍 **SEO Optimized** - Structured data and meta tags
- 🚀 **Easy Deployment** - Ready for Vercel, Netlify, or GitHub Pages

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **QR Code:** qrcode.react
- **Language:** TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## Building for Production

```bash
npm run build
npm start
```

## Deployment

### GitHub Pages (Recommended - Completely Free)

1. Push code to GitHub (main branch)
2. In repo settings → Pages → Source: Deploy from a branch
3. Select `gh-pages` branch
4. Site auto-deploys on every push to main
5. Access at: `https://<your-github-username>.github.io/grapplehub`

> **Note:** First deployment takes 1-2 minutes. Check "Actions" tab to see build progress.

### Vercel (Also Free, Optimized for Next.js)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy automatically (no config needed)

### Netlify (Also Free)

1. Push code to GitHub
2. Connect on [netlify.com](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `out`

## Project Structure

```
app/
├── layout.tsx          # Root layout with metadata
├── globals.css         # Global styles
├── page.tsx            # Landing page
├── terms/
│   └── page.tsx        # Terms of Service page
└── privacy/
    └── page.tsx        # Privacy Policy page

components/
├── Header.tsx          # Navigation header
├── Footer.tsx          # Footer with links
└── AppStoreLinks.tsx   # QR code & download buttons

public/                 # Static assets
```

## Customization

### Update App Store Link

Edit the App Store link in:
- `components/AppStoreLinks.tsx`
- `app/page.tsx`

Replace `https://apps.apple.com/us/app/grapplehub` with your actual App Store URL.

### Update Contact Email

Replace `grapplehubapp@gmail.com` with your contact email in:
- `components/Footer.tsx`
- `app/terms/page.tsx`
- `app/privacy/page.tsx`

### Update Domain

Update `https://grapplehub.app` in `app/layout.tsx` metadata.

## Performance

- Lighthouse Score: 95+
- Fully responsive
- Mobile-first design
- Fast load times
- SEO-friendly

## License

All rights reserved © GrappleHub 2026

## Support

For questions or support, contact: grapplehubapp@gmail.com
