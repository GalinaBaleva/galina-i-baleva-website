'use client'

import { useState, useEffect } from 'react'
import { LANGS } from '@/lib/types'
import { useLang } from '@/context/LangContext'

export default function Nav() {
  const { lang, setLang, t } = useLang()
  const [menuOpen, setMenuOpen]       = useState(false)
  const [langDropOpen, setLangDropOpen] = useState(false)
  const [active, setActive]           = useState('')

  useEffect(() => {
    if (!langDropOpen) return
    const close = (e: MouseEvent) => {
      const target = e.target as Element
      if (!target.closest('.lang-drop')) setLangDropOpen(false)
    }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [langDropOpen])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between h-16 bg-[rgba(5,7,12,.85)] backdrop-blur-[16px] border-b border-[var(--border)]" style={{ padding: '0 75px' }}>

      {/* Logo */}
      <a
        href="#hero"
        className="font-heading font-bold text-[18px] tracking-[-0.02em] text-white no-underline"
      >
        galina<span className="text-accent">.</span>
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-8 list-none">
        {t.nav.links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={` ${
                active === link.href.slice(1)
                  ? 'text-accent'
                  : 'text-muted hover:text-accent'
              }`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Right: lang switcher + hamburger */}
      <div className="flex items-center gap-3">

        {/* Language switcher — desktop: row of buttons */}
        <div className="hidden md:flex gap-2 bg-white/5 border border-[var(--border)] rounded-lg p-1">
          {LANGS.map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`lang-btn ${lang === l ? 'active' : ''}`}
              data-active={lang === l}
            >
              {l}
            </button>
          ))}
        </div>

        {/* Language switcher — mobile: dropdown */}
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
                  onClick={() => { setLang(l); setLangDropOpen(false) }}
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

      {/* Mobile menu dropdown */}
      <div className={`md:hidden absolute top-16 left-0 right-0 bg-[rgba(5,7,12,.97)] border-b border-[var(--border)] px-6 flex flex-col items-center gap-5 overflow-hidden transition-all duration-300 ${menuOpen ? 'py-6 opacity-100' : 'py-0 opacity-0 pointer-events-none'}`}>
        {t.nav.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-[15px] font-medium text-muted hover:text-accent transition-colors duration-200 no-underline"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
