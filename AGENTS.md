# AGENTS.md — Anantha Krishnan Portfolio

Agent guide for this repository. Documents project structure, conventions, implementation status, and change history.

## Project Overview

Recruiter-focused portfolio for **Anantha Krishnan S** (Senior Software Engineer). Built from `Enterprise_Portfolio_PRD_Anantha_Krishnan_S.md`.

| Item | Value |
|------|-------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion |
| 3D Hero | Three.js + React Three Fiber + Drei |
| Icons | Lucide React, Simple Icons |
| Theme | Dark default, light toggle via `next-themes` |
| Deploy target | Vercel |
| Status | Implemented locally; pending production deploy |

## Commands

```bash
npm run dev        # Start dev server (http://localhost:3000)
npm run dev:clean  # Stop stale processes, clean cache, start dev (recommended on Windows)
npm run build      # Production build
npm run start      # Serve production build
npm run lint       # ESLint
npm run clean      # Delete .next cache (runs preclean first)
```

`preclean` automatically runs before `clean` and executes `scripts/kill-stale.js`.

### Fixing 500 / routes-manifest.json errors

Corrupted `.next` cache causes `ENOENT: routes-manifest.json` and vendor-chunk errors. This happens when the dev server is interrupted or build/dev run concurrently.

```bash
npm run dev:clean
```

### Fixing EPERM: operation not permitted, open '.next\trace'

On Windows, a **stale Node process** locks files in `.next`.

1. Press **Ctrl+C** in every terminal running `npm run dev`.
2. Run:
   ```bash
   npm run dev:clean
   ```
   `scripts/kill-stale.js` stops Next.js listeners on ports 3000–3002 and related `node.exe` processes. `scripts/clean.js` clears read-only flags and retries deletion (renames folder if still locked).

If it still fails, manually run in PowerShell:
```powershell
taskkill /F /IM node.exe
npm run dev:clean
```

## Directory Structure

```
portfolio/
├── AGENTS.md
├── README.md
├── Enterprise_Portfolio_PRD_Anantha_Krishnan_S.md
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── .eslintrc.json
├── .gitignore
├── scripts/
│   ├── kill-stale.js                  # Stops stale Next.js processes (Windows)
│   └── clean.js                       # Removes .next with retries
├── resume/
│   ├── Anantha_Krishnan_S_CV.txt           # ATS plain-text resume
│   ├── Anantha_Krishnan_S_CV.md            # Markdown resume
│   └── Anantha_Krishnan_S_Cover_Letter.txt # Cover letter template
├── public/
│   ├── Anantha_Krishnan_S_CV.html          # Print-to-PDF resume
│   ├── Anantha_Krishnan_S_CV.txt
│   └── Anantha_Krishnan_S_Cover_Letter.txt
└── src/
    ├── app/
    │   ├── layout.tsx
    │   ├── page.tsx
    │   ├── globals.css
    │   └── not-found.tsx
    ├── components/
    │   ├── about.tsx
    │   ├── certifications.tsx
    │   ├── contact.tsx
    │   ├── education.tsx              # Education + Achievements
    │   ├── experience.tsx
    │   ├── expertise.tsx
    │   ├── footer.tsx
    │   ├── hero.tsx
    │   ├── hero-scene.tsx
    │   ├── mouse-glow.tsx
    │   ├── navbar.tsx
    │   ├── projects.tsx
    │   ├── section-heading.tsx
    │   ├── skill-icon.tsx
    │   ├── skills.tsx
    │   ├── theme-provider.tsx
    │   └── ui/
    │       ├── badge.tsx
    │       ├── button.tsx
    │       └── dialog.tsx
    ├── data/
    │   └── portfolio.ts               # Single source of truth for content
    └── lib/
        └── utils.ts
```

## Change Log

| Date | Change |
|------|--------|
| Initial build | Full Next.js 15 portfolio from PRD — all 11 sections, dark/light theme, Three.js hero, SEO |
| Cloud skills | Added Google Cloud Platform, GCP Cloud Storage, BigQuery, VPC Networking, IAM & Security, Dataflow |
| Messaging skills | Added Socket.io, Firebase, Firebase Realtime DB, FCM Notifications |
| Experience | Softzane Solutions — added React.js, Node.js, Express, MongoDB technology badges |
| Hero UI | Disabled "Available for opportunities" availability badge (hidden for now) |
| Navbar UI | Renamed "Hire Me" button to **Contact Me** (links to `#contact`) |
| Skill icons | Dark-mode fix: near-black Simple Icons get `dark:bg-white/95` pill (Next.js, Angular, Express, Socket.io, Kafka, GitHub Copilot, Claude, WebRTC, etc.) |
| Dev tooling | Added `scripts/kill-stale.js`, `scripts/clean.js`, `npm run dev:clean`, `preclean` hook |
| Lighthouse | Removed 5MB `simple-icons` runtime import; lazy sections; deferred 3D; SEO files; a11y fixes — First Load JS ~214 kB (was ~2.3 MB) |
| Skills | Added Python, Django (Backend) and Kubernetes (DevOps); CV/resume updated |

## File Reference

### Config files

| File | Purpose |
|------|---------|
| `package.json` | Dependencies; scripts: `dev`, `dev:clean`, `build`, `start`, `lint`, `preclean`, `clean` |
| `tsconfig.json` | TypeScript config, `@/*` path alias → `./src/*` |
| `next.config.ts` | Next.js config; remote images from `cdn.jsdelivr.net` |
| `postcss.config.mjs` | Tailwind CSS 4 PostCSS plugin |
| `.eslintrc.json` | Extends `next/core-web-vitals` |
| `.gitignore` | Ignores `node_modules`, `.next`, env files |

### `scripts/kill-stale.js`

Windows-focused. Kills processes listening on ports 3000–3002 and `node.exe` processes whose command line includes `next` or `portfolio`. Does **not** kill the current script's own PID.

### `scripts/clean.js`

Removes `.next` with up to 6 retry attempts. Clears read-only attributes on Windows. Falls back to renaming `.next` to `.next.old-<timestamp>` if deletion fails.

### `src/data/portfolio.ts`

Single source of truth for portfolio content:

- `stats`, `specializations`, `navLinks`
- `skillCategories` — 60+ skills across 10 categories:
  - **Cloud:** Google Cloud Platform, GCP Cloud Storage, BigQuery, VPC Networking, IAM & Security, Dataflow, AWS IAM/EC2/S3/Load Balancer/Amplify
  - **Messaging:** Socket.io, Firebase, Firebase Realtime DB, FCM Notifications, Kafka, RabbitMQ
- `experiences` — 4 job entries; Softzane includes React.js, Node.js, Express, MongoDB, HTML, CSS, MySQL
- `projects` — 5 featured projects
- `certificationProviders` — 7 providers with modal certification lists
- `education`, `achievements`

**Edit this file** to update resume content without touching components.

### Section components

| Component | Section ID | Notes |
|-----------|------------|-------|
| `hero.tsx` | `#hero` | Dynamic `HeroScene` import (no SSR). CTAs, stats, social links. **No** availability badge currently |
| `about.tsx` | `#about` | Summary, specializations, highlight cards |
| `expertise.tsx` | `#expertise` | 6 technical expertise cards |
| `skills.tsx` | `#skills` | Category tabs, skill grid with logos and experience levels |
| `experience.tsx` | `#experience` | Vertical timeline, expandable entries, technology badges |
| `projects.tsx` | `#projects` | Project carousel with tech, highlights, architecture |
| `certifications.tsx` | `#certifications` | Provider cards → Radix Dialog modal |
| `education.tsx` | `#education`, `#achievements` | Education cards + achievement grid |
| `contact.tsx` | `#contact` | Form with simulated submit (wire EmailJS/Resend) |
| `footer.tsx` | — | Links, social icons, copyright |

### Shared components

| Component | Purpose |
|-----------|---------|
| `navbar.tsx` | Fixed header, mobile menu, theme toggle, **Contact Me** CTA → `#contact` |
| `hero-scene.tsx` | R3F canvas: globe, stars, floating wireframe orbs |
| `mouse-glow.tsx` | Desktop cursor glow effect |
| `section-heading.tsx` | `SectionHeading` + `FadeIn` (Framer Motion) |
| `skill-icon.tsx` | Simple Icons SVG; luminance check applies `dark:bg-white/95` pill for dark brand colors |
| `theme-provider.tsx` | `next-themes` wrapper |
| `ui/button.tsx` | CVA variants: default, outline, ghost, glass; supports `asChild` |
| `ui/dialog.tsx` | Radix Dialog for certification modals |
| `ui/badge.tsx` | Tech/skill tags |

### `public/resume.pdf`

Minimal placeholder PDF for the Download Resume button. Replace with the real resume.

## Conventions for Agents

1. **Content changes** → edit `src/data/portfolio.ts` first.
2. **New section** → add component in `src/components/`, import in `src/app/page.tsx`, add nav link in `portfolio.ts` `navLinks`.
3. **Client components** — use `"use client"` when using hooks, Framer Motion, Three.js, or browser APIs.
4. **Three.js** — always dynamic-import with `{ ssr: false }` (see `hero.tsx`).
5. **Icons** — skill logos live in `src/data/skill-icons.ts` (not the `simple-icons` package at runtime). To add a slug: update `scripts/generate-icons.js`, run `node scripts/generate-icons.js`. Dark hex colors need the dark-mode pill in `skill-icon.tsx`.
6. **Styling** — use `cn()` from `@/lib/utils`, design tokens from `globals.css`, `glass` and `gradient-text` classes.
7. **Responsive** — mobile-first; test `sm:`, `md:`, `lg:` breakpoints; navbar has mobile drawer.
8. **Do not** commit `.env` files or secrets.
9. **Accessibility** — semantic HTML, `aria-label` on icon buttons, form labels, keyboard nav.
10. **Windows dev** — prefer `npm run dev:clean` over `npm run dev` when cache errors occur.

## Customization Checklist

Before production deploy, update:

- [ ] LinkedIn / GitHub URLs in `hero.tsx` and `footer.tsx`
- [ ] Email in `hero.tsx`, `footer.tsx`, and contact flow
- [ ] `public/resume.pdf` with real resume
- [ ] Contact form in `contact.tsx` (EmailJS or Resend API)
- [ ] Certification credential IDs and verify URLs in `portfolio.ts`
- [ ] Re-enable hero availability badge in `hero.tsx` when actively seeking roles
- [ ] Optional: project screenshots and architecture images

## PRD Section Mapping

| PRD Section | Implementation |
|-------------|----------------|
| Hero | `hero.tsx` + `hero-scene.tsx` |
| About | `about.tsx` |
| Technical Expertise | `expertise.tsx` |
| Skills | `skills.tsx` + `skill-icon.tsx` |
| Experience Timeline | `experience.tsx` |
| Featured Projects | `projects.tsx` |
| Certifications | `certifications.tsx` |
| Education | `education.tsx` |
| Achievements | `Achievements` in `education.tsx` |
| Contact | `contact.tsx` |
| Footer | `footer.tsx` |
| SEO | `layout.tsx` metadata + Person schema |
| Dark/Light mode | `theme-provider.tsx` + `navbar.tsx` toggle |

## Dependencies

**Runtime:** next, react, react-dom, framer-motion, three, @react-three/fiber, @react-three/drei, simple-icons, lucide-react, react-icons, next-themes, @radix-ui/react-dialog, @radix-ui/react-slot, class-variance-authority, clsx, tailwind-merge

**Dev:** typescript, tailwindcss, @tailwindcss/postcss, eslint, eslint-config-next, @types/*
