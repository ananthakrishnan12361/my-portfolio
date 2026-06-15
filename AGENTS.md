# AGENTS.md — Anantha Krishnan Portfolio

Agent guide for this repository. Documents project structure, conventions, and all files created for the enterprise portfolio website.

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

## Commands

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # ESLint
npm run clean    # Delete .next cache (use before dev if 500 errors)
```

### Fixing 500 / routes-manifest.json errors

Corrupted `.next` cache causes `ENOENT: routes-manifest.json` and vendor-chunk errors. This happens when the dev server is interrupted or build/dev run concurrently.

```bash
npm run clean
npm run dev
```

Or: stop all Node processes, delete `.next`, then `npm run dev`.

## Directory Structure

```
portfolio/
├── AGENTS.md                          # This file
├── Enterprise_Portfolio_PRD_Anantha_Krishnan_S.md
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── .eslintrc.json
├── .gitignore
├── public/
│   └── resume.pdf                     # Placeholder resume for Download CTA
└── src/
    ├── app/
    │   ├── layout.tsx                 # Root layout, SEO, Person schema
    │   ├── page.tsx                   # Home — composes all sections
    │   ├── globals.css                # Design tokens, glass, gradients
    │   └── not-found.tsx              # 404 page
    ├── components/
    │   ├── about.tsx
    │   ├── achievements.tsx             # (in education.tsx)
    │   ├── certifications.tsx
    │   ├── contact.tsx
    │   ├── education.tsx              # Education + Achievements sections
    │   ├── experience.tsx
    │   ├── expertise.tsx
    │   ├── footer.tsx
    │   ├── hero.tsx
    │   ├── hero-scene.tsx             # Three.js canvas (client-only)
    │   ├── mouse-glow.tsx
    │   ├── navbar.tsx
    │   ├── projects.tsx
    │   ├── section-heading.tsx        # SectionHeading + FadeIn
    │   ├── skill-icon.tsx             # SkillIcon + ProviderIcon
    │   ├── skills.tsx
    │   ├── theme-provider.tsx
    │   └── ui/
    │       ├── badge.tsx
    │       ├── button.tsx
    │       └── dialog.tsx
    ├── data/
    │   └── portfolio.ts               # All content: skills, jobs, projects, certs
    └── lib/
        └── utils.ts                   # cn() helper
```

## File Reference

### Config files

| File | Purpose |
|------|---------|
| `package.json` | Dependencies and scripts (`dev`, `build`, `start`, `lint`, `clean`) |
| `tsconfig.json` | TypeScript config, `@/*` path alias → `./src/*` |
| `next.config.ts` | Next.js config; remote images from `cdn.jsdelivr.net` |
| `postcss.config.mjs` | Tailwind CSS 4 PostCSS plugin |
| `.eslintrc.json` | Extends `next/core-web-vitals` |
| `.gitignore` | Ignores `node_modules`, `.next`, env files |

### `src/app/layout.tsx`

- Geist fonts
- `ThemeProvider` (dark default)
- `MouseGlow`, `Navbar`, `Footer` wrappers
- SEO metadata (title, description, keywords, OpenGraph, Twitter)
- JSON-LD Person schema in `<head>`

### `src/app/page.tsx`

Renders sections in order: Hero → About → Expertise → Skills → Experience → Projects → Certifications → Education → Achievements → Contact.

### `src/app/globals.css`

CSS variables for light/dark themes, `.glass`, `.gradient-text`, `.animated-gradient`, `.section-padding`, `.container-max`.

### `src/data/portfolio.ts`

Single source of truth for portfolio content:

- `stats`, `specializations`, `navLinks`
- `skillCategories` — 50+ skills with Simple Icons slugs and experience levels
- `experiences` — 4 job entries with expandable details
- `projects` — 5 featured projects
- `certificationProviders` — 7 providers with modal certification lists
- `education`, `achievements`

**Edit this file** to update resume content without touching components.

### Section components

| Component | Section ID | Notes |
|-----------|------------|-------|
| `hero.tsx` | `#hero` | Dynamic import of `HeroScene` (no SSR). CTAs, stats, social links |
| `about.tsx` | `#about` | Summary, specializations, highlight cards |
| `expertise.tsx` | `#expertise` | 6 technical expertise cards |
| `skills.tsx` | `#skills` | Category tabs, skill grid with logos and levels |
| `experience.tsx` | `#experience` | Vertical timeline, expandable entries |
| `projects.tsx` | `#projects` | Project carousel with tech, highlights, architecture |
| `certifications.tsx` | `#certifications` | Provider cards → Radix Dialog modal |
| `education.tsx` | `#education`, `#achievements` | Education cards + achievement grid |
| `contact.tsx` | `#contact` | Form with simulated submit (wire EmailJS/Resend) |
| `footer.tsx` | — | Links, social icons, copyright |

### Shared components

| Component | Purpose |
|-----------|---------|
| `navbar.tsx` | Fixed header, mobile menu, theme toggle, Hire Me CTA |
| `hero-scene.tsx` | R3F canvas: globe, stars, floating wireframe orbs |
| `mouse-glow.tsx` | Desktop cursor glow effect |
| `section-heading.tsx` | `SectionHeading` + `FadeIn` (Framer Motion) |
| `skill-icon.tsx` | Renders Simple Icons SVG; fallback to letter avatar |
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
5. **Icons** — use Simple Icons slugs in `portfolio.ts`; verify slug exists at [simpleicons.org](https://simpleicons.org).
6. **Styling** — use `cn()` from `@/lib/utils`, design tokens from `globals.css`, `glass` and `gradient-text` classes.
7. **Responsive** — mobile-first; test `sm:`, `md:`, `lg:` breakpoints; navbar has mobile drawer.
8. **Do not** commit `.env` files or secrets.
9. **Accessibility** — semantic HTML, `aria-label` on icon buttons, form labels, keyboard nav.

## Customization Checklist

Before production deploy, update:

- [ ] LinkedIn / GitHub URLs in `hero.tsx` and `footer.tsx`
- [ ] Email in `hero.tsx`, `footer.tsx`, and contact flow
- [ ] `public/resume.pdf` with real resume
- [ ] Contact form in `contact.tsx` (EmailJS or Resend API)
- [ ] Certification credential IDs and verify URLs in `portfolio.ts`
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

## Git History Note

Initial implementation created the full Next.js portfolio from the PRD in a single session. All source files under `src/` and project config were added as part of that build.
