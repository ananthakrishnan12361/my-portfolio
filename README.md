<div align="center">

# Anantha Krishnan S — Portfolio

**Senior Software Engineer · Full Stack Developer · MERN Specialist · AI Enthusiast**

A premium, recruiter-focused portfolio showcasing enterprise development, cloud, realtime systems, Web3, and AR/VR experience.

<br />

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-Hero-000000?style=for-the-badge&logo=threedotjs&logoColor=white)

<br />

[Features](#-features) ·
[Tech Stack](#-tech-stack) ·
[Getting Started](#-getting-started) ·
[Project Structure](#-project-structure) ·
[Deploy](#-deployment)

</div>

---

## Overview

This is a production-ready portfolio website built with **Next.js 15**, **TypeScript**, and **Tailwind CSS 4**. It presents a modern SaaS-inspired experience with glassmorphism, smooth animations, a Three.js hero scene, and fully responsive layouts — designed to attract recruiters and engineering leaders.

> Building scalable enterprise applications, healthcare platforms, AI-powered solutions, Web3 products, and AR/VR communication systems.

| | |
|---|---|
| **Role** | Senior Software Engineer |
| **Experience** | 4+ years |
| **Projects** | 5+ major builds |
| **Certifications** | 15+ |
| **Education** | MCA — Amrita Vishwa Vidyapeetham |

---

## Features

| Section | Highlights |
|---------|------------|
| **Hero** | 3D globe scene, animated stats, resume download, social links |
| **About** | Professional summary, specializations, highlight cards |
| **Technical Expertise** | Full-stack, cloud, Web3, AI & realtime capability cards |
| **Skills** | 60+ technologies with official logos, experience levels, category tabs |
| **Experience** | Vertical timeline with expandable roles and tech badges |
| **Projects** | Carousel for JGDHealth, FU-Capital, Talentely, and more |
| **Certifications** | IBM, Cisco, Google Cloud, Coursera — click-to-expand modals |
| **Education & Achievements** | Academic history and career milestones |
| **Contact** | Validated form with success animation |
| **Theme** | Premium dark mode (default) + light mode toggle |

### Design & UX

- Glassmorphism UI with animated gradients and mouse glow
- Framer Motion transitions across all sections
- Mobile-first responsive navigation with drawer menu
- Dark-mode safe skill icons (light pill for near-black brand logos)
- SEO metadata, OpenGraph tags, and Person schema (JSON-LD)
- Keyboard navigation and screen-reader friendly markup

---

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Framework** | Next.js 15 (App Router), React 19, TypeScript |
| **Styling** | Tailwind CSS 4, CSS variables, glassmorphism |
| **Animation** | Framer Motion |
| **3D** | Three.js, React Three Fiber, Drei |
| **UI** | Radix UI Dialog, CVA, Lucide React |
| **Icons** | Simple Icons (skill logos), React Icons |
| **Theme** | next-themes |
| **Deploy** | Vercel (recommended) |

---

## Getting Started

### Prerequisites

- **Node.js** 20+
- **npm** 9+

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

> **Windows users:** If you see cache or permission errors, use `npm run dev:clean` instead.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run dev:clean` | Stop stale processes, clear `.next` cache, then start dev |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run clean` | Remove the `.next` build cache |

### Troubleshooting (Windows)

```powershell
# If you see EPERM or routes-manifest.json errors:
taskkill /F /IM node.exe
npm run dev:clean
```

---

## Project Structure

```
portfolio/
├── public/
│   ├── Anantha_Krishnan_S_CV.html   # ATS resume (print to PDF)
│   └── Anantha_Krishnan_S_Cover_Letter.txt
├── resume/                          # Source resume files
├── scripts/
│   ├── kill-stale.js           # Stops stale Next.js processes
│   └── clean.js                # Safe .next cache removal
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout, SEO, schema
│   │   ├── page.tsx            # Main page (all sections)
│   │   └── globals.css         # Design tokens & utilities
│   ├── components/             # Section & UI components
│   ├── data/
│   │   └── portfolio.ts        # All content (skills, jobs, projects)
│   └── lib/
│       └── utils.ts
├── AGENTS.md                   # AI agent development guide
├── Enterprise_Portfolio_PRD_Anantha_Krishnan_S.md
└── README.md
```

### Content Management

All portfolio content lives in a single file:

```
src/data/portfolio.ts
```

Update skills, experience, projects, certifications, and education there — no component changes needed for most content updates.

---

## Skills Highlight

<details>
<summary><strong>Cloud & Google Cloud</strong></summary>

Google Cloud Platform · GCP Cloud Storage · BigQuery · VPC Networking · IAM & Security · Dataflow · AWS EC2 · S3 · Amplify

</details>

<details>
<summary><strong>Realtime & Messaging</strong></summary>

Socket.io · Firebase · Firebase Realtime DB · FCM Push Notifications · Kafka · RabbitMQ · WebRTC · Twilio

</details>

<details>
<summary><strong>Full Stack</strong></summary>

React · Next.js · Angular · Node.js · Express · NestJS · Python · Django · MongoDB · PostgreSQL · MySQL · GraphQL · Microservices · Kubernetes

</details>

<details>
<summary><strong>AI & Tools</strong></summary>

ChatGPT · Claude · Cursor · GitHub Copilot · Docker · Linux · CI/CD

</details>

---

## Customization Checklist

Before going live, update these items:

- [ ] LinkedIn and GitHub URLs in `src/components/hero.tsx` and `footer.tsx`
- [ ] Email address across hero, footer, and contact
- [ ] Replace placeholder email, phone, and social URLs in `resume/` files and `hero.tsx`
- [ ] Open `public/Anantha_Krishnan_S_CV.html` in browser → Print → Save as PDF for applications
- [ ] Customize `resume/Anantha_Krishnan_S_Cover_Letter.txt` per job posting
- [ ] Connect contact form in `src/components/contact.tsx` (EmailJS or Resend)
- [ ] Add certification credential IDs and verify URLs in `portfolio.ts`
- [ ] Deploy to Vercel and set custom domain

---

## Deployment

### GitHub Pages (configured)

| Item | Value |
|------|-------|
| **Live URL** | https://ananthakrishnan12361.github.io/my-portfolio/ |
| **Branch** | `gh-pages` (static site) |
| **Workflow** | `.github/workflows/deploy-github-pages.yml` (rebuilds on push to `master`) |

#### One-time setup (required to fix 404)

1. Open: https://github.com/ananthakrishnan12361/my-portfolio/settings/pages  
2. Under **Build and deployment**:
   - **Source:** Deploy from a branch  
   - **Branch:** `gh-pages`  
   - **Folder:** `/ (root)`  
3. Click **Save**  
4. Wait 1–2 minutes, then open: https://ananthakrishnan12361.github.io/my-portfolio/

> Tip: Without this setting, GitHub shows “There isn't a GitHub Pages site here.”

Local production build for Pages:

```powershell
$env:GITHUB_PAGES="true"; npm run build
```

Static files are written to the `out/` folder (and published to `gh-pages`).

### Vercel (optional alternative)

For full Next.js hosting without static export:

1. Import the repo at [vercel.com](https://vercel.com)
2. Framework preset: **Next.js**
3. Deploy (set `GITHUB_PAGES` unset / not `true`)

```bash
npm run build   # Without GITHUB_PAGES=true for Vercel
```

### Environment Variables

```env
# Optional — override canonical site URL
NEXT_PUBLIC_SITE_URL=https://ananthakrishnan12361.github.io/my-portfolio
```

---

## Performance Targets

| Metric | Target | How to measure |
|--------|--------|----------------|
| Lighthouse Performance | 95+ | Production build only (see below) |
| Lighthouse Accessibility | 95+ | |
| Lighthouse SEO | 100 | |
| Core Web Vitals | Green | |

### Optimizations applied

- Removed full `simple-icons` bundle (~5 MB) — icons use lightweight `src/data/skill-icons.ts`
- Lazy-loaded below-fold sections via `next/dynamic`
- Deferred Three.js hero until idle (skipped on mobile & reduced-motion)
- Reduced 3D scene complexity (fewer stars, lower polygon count)
- SEO: `metadataBase`, canonical URL, `robots.txt`, `sitemap.xml`, `manifest`, JSON-LD
- Accessibility: skip link, `aria-live` on contact form, improved contrast, `prefers-reduced-motion`

### Run Lighthouse correctly

Dev mode (`npm run dev`) scores poorly. Always audit the **production** build:

```bash
npm run build
npm run start
```

Then run Lighthouse in Chrome DevTools on `http://localhost:3000` (Incognito, mobile or desktop).

---

## Documentation

| File | Purpose |
|------|---------|
| [README.md](./README.md) | Project overview and setup (this file) |
| [AGENTS.md](./AGENTS.md) | AI agent guide, conventions, and change log |
| [Enterprise_Portfolio_PRD_Anantha_Krishnan_S.md](./Enterprise_Portfolio_PRD_Anantha_Krishnan_S.md) | Full product requirements document |

---

<div align="center">

**Anantha Krishnan S**

Senior Software Engineer · Full Stack · MERN · Cloud · AI · Web3 · AR/VR

Built with Next.js, TypeScript & Tailwind CSS

</div>
