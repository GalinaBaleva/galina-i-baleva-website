'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { LANGS } from '@/lib/types'
import { useLang } from '@/context/LangContext'
import { SLUGS, slugToSection } from '@/lib/i18n/slugs'
import type { SectionId } from '@/lib/i18n/slugs'
import type { Lang } from '@/lib/types'

export default function Nav() {
  const { lang, setLang, t } = useLang()
  const router = useRouter()
  const pathname = usePathname()
  const [menuOpen, setMenuOpen]       = useState(false)
  const [langDropOpen, setLangDropOpen] = useState(false)

  // DE urls are at root (/uber-mich), others are prefixed (/bg/za-men)
  const rawSlug = lang === 'DE' ? pathname.split('/')[1] : pathname.split('/')[2]
  const activeSection: SectionId | null = rawSlug ? slugToSection(lang, rawSlug) : null

  function navHref(section: string): string {
    if (lang === 'DE') return `/${SLUGS.DE[section as SectionId]}`
    return `/${lang.toLowerCase()}/${SLUGS[lang][section as SectionId]}`
  }

  function handleLangChange(newLang: Lang) {
    setLang(newLang)
    if (activeSection) {
      const newSlug = SLUGS[newLang][activeSection]
      router.push(newLang === 'DE' ? `/${newSlug}` : `/${newLang.toLowerCase()}/${newSlug}`)
    } else {
      router.push(newLang === 'DE' ? '/' : `/${newLang.toLowerCase()}`)
    }
    setLangDropOpen(false)
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between h-16 bg-[rgba(5,7,12,.85)] backdrop-blur-[16px] border-b border-[var(--border)]"
      style={{ padding: '0 75px' }}
    >
      {/* Logo */}
      <Link
        href={lang === 'DE' ? '/' : `/${lang.toLowerCase()}`}
        className="font-heading font-bold text-[18px] tracking-[-0.02em] text-white no-underline"
      >
        galina<span className="text-accent">.</span>
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-8 list-none">
        {t.nav.links.map((link) => (
          <li key={link.section}>
            <Link
              href={navHref(link.section)}
              className={`transition-colors duration-200 ${
                activeSection === link.section
                  ? 'text-accent'
                  : 'text-muted hover:text-accent'
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Right: lang switcher + hamburger */}
      <div className="flex items-center gap-3">

        {/* Language switcher — desktop */}
        <div className="hidden md:flex gap-2 bg-white/5 border border-[var(--border)] rounded-lg p-1">
          {LANGS.map((l) => (
            <button
              key={l}
              onClick={() => handleLangChange(l)}
              className={`lang-btn ${lang === l ? 'active' : ''}`}
              data-active={lang === l}
            >
              {l}
            </button>
          ))}
        </div>

        {/* Language switcher — mobile dropdown */}
        <div className="relative md:hidden lang-drop">
          <button
            onClick={() => setLangDropOpen((v) => !v)}
            className="flex items-center gap-1.5 lang-btn active px-3 py-1.5"
          >
            {lang}
            <svg
              width="12" height="12" viewBox="0 0 12 12" fill="none"
              className={`transition-transform duration-200 ${langDropOpen ? 'rotate-180' : ''}`}
            >
              <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          {langDropOpen && (
            <div className="absolute right-0 top-full mt-1 flex flex-col bg-[rgba(10,13,22,.97)] border border-[var(--border)] rounded-lg overflow-hidden z-[200]">
              {LANGS.filter((l) => l !== lang).map((l) => (
                <button
                  key={l}
                  onClick={() => handleLangChange(l)}
                  className="lang-btn px-4 py-2 text-left hover:text-accent"
                >
                  {l}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Hamburger — mobile only */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Меню"
          className="md:hidden flex flex-col gap-[5px] bg-transparent border-none p-1 cursor-pointer"
        >
          <span className={`block w-[22px] h-0.5 bg-[var(--text)] rounded-sm transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-[22px] h-0.5 bg-[var(--text)] rounded-sm transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-[22px] h-0.5 bg-[var(--text)] rounded-sm transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden absolute top-16 left-0 right-0 bg-[rgba(5,7,12,.97)] border-b border-[var(--border)] px-6 flex flex-col items-center gap-5 overflow-hidden transition-all duration-300 ${menuOpen ? 'py-6 opacity-100' : 'py-0 opacity-0 pointer-events-none'}`}>
        {t.nav.links.map((link) => (
          <Link
            key={link.section}
            href={navHref(link.section)}
            onClick={() => setMenuOpen(false)}
            className="text-[15px] font-medium text-muted hover:text-accent transition-colors duration-200 no-underline"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
