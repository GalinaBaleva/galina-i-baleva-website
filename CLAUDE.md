# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this project is

Personal portfolio website for **Galina Baleva** — Full-Stack developer, AI integrator, SEO specialist based in Vienna, Austria. The site is multilingual (DE / RU) and includes a flip business card component.

The codebase is a **fresh Next.js scaffold** — `src/app/page.tsx` and `layout.tsx` are stock Create Next App files. The real work is porting the designs from `_templates/` into React components.

## Stack

Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · App Router

> **Note:** This uses Next.js 16 with breaking changes from older versions. Before writing Next.js-specific code, check `node_modules/next/dist/docs/` for current API conventions.

## Commands

```bash
npm run dev      # start dev server (http://localhost:3000)
npm run build    # production build
npm run start    # serve production build
npm run lint     # ESLint
```

## Structure

```
src/app/          # App Router — layouts, pages, route segments
  globals.css     # Design system: tokens, base styles, reusable CSS classes
  layout.tsx      # Root layout — needs fonts updated (see below)
  page.tsx        # Home page — stock scaffold, replace with portfolio sections
public/           # Static assets served at /
_templates/       # Original HTML reference files (NOT part of the app)
  portfolio.html       # Full portfolio page — source of truth for design
  business-card.html   # Flip business card component
  Снимка CV.png        # Galina's profile photo (copy to public/ when needed)
```

## Pending setup in layout.tsx

`layout.tsx` still loads Geist fonts. Switch to the project fonts:

```tsx
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-heading", weight: ["400","500","600","700"] });
```

Remove the `@import url(...)` from `globals.css` once `next/font` handles loading.

## Design system — globals.css

All tokens and reusable classes live in `src/app/globals.css`. Use these; don't hardcode colors.

**CSS variables (available everywhere):**

| Variable    | Value              | Use                     |
|-------------|-------------------|-------------------------|
| `--accent`  | `#00e5ff`         | Cyan — primary accent   |
| `--accent2` | `#7c4dff`         | Purple — secondary      |
| `--accent3` | `#ff6b6b`         | Red — error / highlight |
| `--bg`      | `#05070c`         | Page background         |
| `--bg2`     | `#0a0d16`         | Surface (Skills/Contact)|
| `--bg3`     | `#0d1020`         | Alt surface (Projects)  |
| `--card`    | `#0f1219`         | Card background         |
| `--border`  | `rgba(0,229,255,.13)` | Subtle cyan border  |
| `--text`    | `#e2e8f0`         | Body text               |
| `--muted`   | `#64748b`         | Secondary text          |
| `--radius`  | `14px`            | Card border radius      |

**Tailwind utilities** (from `@theme`): `bg-accent`, `bg-card`, `text-muted`, `text-accent2`, `font-heading`, etc.

**Reusable CSS classes:**

- `.btn` `.btn-primary` `.btn-outline` — buttons
- `.card-base` — card with hover lift effect
- `.section-label` `.section-title` `.section-sub` — section headings
- `.tag-cyan` `.tag-ghost` `.badge-accent` — inline tags and badges
- `.photo-placeholder` `.photo-ring` `.photo-glow` `.photo-initials` — circular photo with spinning ring
- `.mesh-grid` — subtle cyan grid overlay (Hero background)
- `.blob` — blurred gradient orb (Hero background decoration)
- `.accent-bar` — gradient bottom bar on cards
- `.logo-mark` — square gradient logo badge
- `.social-link` — icon link with hover glow
- `.form-input` — dark form field with cyan focus ring
- `.gradient-text` — cyan→purple gradient text
- `.reveal` / `.reveal.visible` — scroll-triggered fade-in

**Keyframe animations:** `spin` (photo ring), `drift` (blobs), `pulse` (status dot), `fadeUpDown` (scroll hint)

## Page sections (from portfolio.html)

Build in this order, each as a separate React component:

1. **Nav** — fixed top bar, logo, anchor links, BG/DE/RU/EN language switcher, hamburger on mobile
2. **Hero** — full-height, mesh grid + blob background, photo with spinning ring, name, role gradient text, CTA buttons, stats row, scroll hint
3. **About** — two-column: photo (purple ring variant) + bio text + chip highlights
4. **Skills** — grid of cards, each with icon, name, description, animated progress bar, tags
5. **Projects** — grid of cards with thumbnail, tech tags, title, description, Live / Source links
6. **Contact** — two-column: contact info + social links (left), contact form (right)
7. **Footer** — copyright + back-to-top link
8. **BusinessCard** — standalone flip card component (340×210px, hover/click to flip, front + back faces)

## i18n

The templates use a `data-i18n` attribute approach with a JS translation object. In React this becomes a context or hook.

**Supported languages (in nav order):** BG · DE · RU · EN

- **BG (Bulgarian)** — default language, primary version of the site
- **DE (German)** — from the original template
- **RU (Russian)** — from the original template
- **EN (English)** — added

The original templates only contain DE and RU strings. BG and EN translations must be written from scratch following the same key structure. See `_templates/portfolio.html` for all translation keys.

All user-visible strings must exist in all four languages. The `lang` attribute on `<html>` and the active nav button reflect the current language. BG is the default on first load.

## Section backgrounds

Each section uses a different background variable to create depth:
- Hero: `--bg` with mesh-grid overlay + blobs
- About: `--bg`
- Skills: `--bg2`
- Projects: `--bg3`
- Contact: `--bg2`
- Footer: `--bg`
