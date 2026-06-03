# Build Checklist

## Phase 1 — Foundation

- [X] `src/app/globals.css` — replace default styles with CSS custom properties (accent colors, dark backgrounds, font imports from templates)
- [X] `src/app/layout.tsx` — root layout: load Inter + Space Grotesk from `next/font/google`, set `<html lang>`, wrap with `<body>`

## Phase 2 — i18n & Types

- [x] `src/lib/i18n.ts` — copy the `translations` object (DE/RU) from `_templates/portfolio.html` and export it with proper TypeScript types
- [x] `src/lib/types.ts` — shared types: `Lang`, `Project`, `Skill`, etc.

## Phase 3 — Shared UI Components

- [ ] `src/components/ui/Button.tsx` — primary + outline variants
- [ ] `src/components/ui/SectionLabel.tsx` — the small uppercase label with the line before it
- [ ] `src/components/ui/PhotoFrame.tsx` — circular photo with spinning ring + glow (used in Hero and About)

## Phase 4 — Section Components

- [ ] `src/components/sections/Hero.tsx`
- [ ] `src/components/sections/About.tsx`
- [ ] `src/components/sections/Skills.tsx` — includes `SkillCard` with animated bar
- [ ] `src/components/sections/Projects.tsx` — includes `ProjectCard`
- [ ] `src/components/sections/Contact.tsx` — info column + form

## Phase 5 — Layout Chrome

- [ ] `src/components/nav/Navbar.tsx` — fixed nav, language switcher, hamburger (mobile)
- [ ] `src/components/footer/Footer.tsx`

## Phase 6 — Business Card Page

- [ ] `src/components/ui/BusinessCard.tsx` — 3D flip card component (from `_templates/business-card.html`)
- [ ] `src/app/card/page.tsx` — standalone route that renders the business card

## Phase 7 — Home Page Assembly

- [ ] `src/app/page.tsx` — import and stack all sections: `<Navbar>` + `<Hero>` + `<About>` + `<Skills>` + `<Projects>` + `<Contact>` + `<Footer>`

## Phase 8 — Finishing

- [ ] `src/hooks/useScrollReveal.ts` — `IntersectionObserver` hook to replace the `reveal` class logic
- [ ] `src/context/LangContext.tsx` — React context so language state is shared between Navbar and all sections
- [ ] Wire `LangContext` into `layout.tsx` and consume it in every section
- [ ] Add `<head>` metadata (title, description, OG tags) to `layout.tsx`
- [ ] Move `_templates/Снимка CV.png` to `public/photo.png` and use `<Image>` from `next/image` in Hero and About
