# Nymerix — Digital Solutions Agency

> **Precision in every pixel.** A modern technology consulting website built with Next.js 14, TypeScript, and Tailwind CSS v4.

[![Live Site](https://img.shields.io/badge/Live%20Site-black--and--yellow.netlify.app-FACC15?style=for-the-badge&logo=netlify&logoColor=black)](https://black-and-yellow.netlify.app/)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

---

## 🌐 Live Preview

**[→ black-and-yellow.netlify.app](https://black-and-yellow.netlify.app/)**

[![Nymerix Preview](https://img.shields.io/website?url=https%3A%2F%2Fblack-and-yellow.netlify.app&style=flat-square&label=Status&up_message=Online&down_message=Offline)](https://black-and-yellow.netlify.app/)

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — bento grid, expertise overview, CTA |
| `/ui-ux-design` | UI/UX Design services with bento cards |
| `/cloud-solutions` | Cloud Architecture & Microsoft 365 / Copilot |
| `/it-strategy` | IT Strategy Roadmap consulting |
| `/careers` | Careers & open positions |

---

## Tech Stack

- **Framework** — [Next.js 16](https://nextjs.org/) (App Router)
- **Language** — TypeScript 5
- **Styling** — Tailwind CSS v4 with `@theme` design tokens
- **Fonts** — Inter (Google Fonts, Cyrillic subset)
- **Deployment** — Netlify with `@netlify/plugin-nextjs`

---

## Project Structure

```
nymerix-web/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Home
│   │   ├── ui-ux-design/
│   │   ├── cloud-solutions/
│   │   ├── it-strategy/
│   │   ├── careers/
│   │   ├── layout.tsx
│   │   └── globals.css
│   └── components/
│       ├── Header.tsx
│       ├── Footer.tsx
│       ├── HeroSection.tsx       # Shared hero with background image
│       ├── CTABand.tsx           # Rounded yellow CTA card
│       ├── QuoteBand.tsx         # Dark quote section
│       ├── NumberedExpertise.tsx # Numbered items with image
│       ├── Container.tsx         # Max-width layout wrapper
│       └── ScrollToTop.tsx       # Floating scroll-to-top button
├── public/
│   ├── mountain.jpg              # Hero background
│   ├── screen2.png               # Feature card background
│   └── img.png                   # Copilot section image
└── netlify.toml
```

---

## Design System

| Token | Value | Usage |
|---|---|---|
| `brand-yellow` | `#FACC15` | Accent, CTAs, highlights |
| `brand-charcoal` | `#1A1A1A` | Dark backgrounds, text |
| `surface` | `#FAFAFA` | Page background |
| `rounded-3xl` | `24px` | Card border radius |

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/Niko5886/Black-and-yellow.git
cd Black-and-yellow/nymerix-web

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

```bash
# Production build
npm run build
npm run start
```

---

## Deployment

The project deploys automatically to Netlify on every push to `master`.

Configuration lives in [`netlify.toml`](./netlify.toml):

```toml
[build]
  base    = "nymerix-web"
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

---

## License

Private project — all rights reserved © Nymerix.
