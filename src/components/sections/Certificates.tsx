'use client'

import { useRef, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/animations'
import Image from 'next/image'
import SectionLabel from '@/components/ui/SectionLabel'
import { useLang } from '@/context/LangContext'

type Certificate = {
  file: string
  type: 'image' | 'pdf'
  name: string
  issuer: string
  issued: string
  period: string
}

const CERTIFICATES: Certificate[] = [
  { file: '/my_certificates/Galina-Baleva_Node_JS-1.png', type: 'image', name: 'Learn Node.js Course', issuer: 'Codecademy', issued: '05.02.2025', period: '2025' },
  { file: '/my_certificates/Full_Stack_JavaScript_Developer_WIFI_Certifecate-1.png', type: 'image', name: 'Full-Stack JavaScript Developer', issuer: 'WIFI / WKO Wien', issued: '06.06.2025', period: '2024 – 2025 · 149 LE' },
  { file: '/my_certificates/Diplom_KIM_Galina Baleva.jpg', type: 'image', name: 'Diplom AI Management', issuer: 'digitalworld Academy', issued: '29.06.2026', period: '2026 · 165 UE' },
  { file: '/my_certificates/SEO Certificate_page-0001.jpg', type: 'image', name: 'Professional SEO Course', issuer: 'SEOM / Cloxy', issued: '—', period: '—' },  
  { file: '/my_certificates/JavaScript Certificate-3.png', type: 'image', name: 'Programming Fundamentals with JS', issuer: 'Software University', issued: '18.08.2021', period: 'May – Aug 2021' },
  { file: '/my_certificates/JavaScript Certificate-4.png', type: 'image', name: 'Programming Basics', issuer: 'Software University', issued: '31.05.2021', period: 'Apr – May 2021' },
  { file: '/my_certificates/Galina-Baleva-Skill-Path.png', type: 'image', name: 'Learn PHP Skill Path', issuer: 'Codecademy', issued: '03.01.2025', period: '2024 – 2025' },
  { file: '/my_certificates/Galina_Baleva_PHP_ Introduction.png', type: 'image', name: 'Learn PHP: Introduction Course', issuer: 'Codecademy', issued: '31.08.2024', period: '2024' },
  { file: '/my_certificates/Wordpress Certificate_page-0001.jpg', type: 'image', name: 'WordPress Grundkurs', issuer: 'VHS Wien', issued: '23.11.2023', period: '20.11 – 23.11.2023' },
  { file: '/my_certificates/JavaScript Certificate-1.png', type: 'image', name: 'JS Applications', issuer: 'Software University', issued: '12.04.2023', period: 'Feb – Apr 2023' },
  { file: '/my_certificates/JavaScript Certificate-2.png', type: 'image', name: 'JS Advanced', issuer: 'Software University', issued: '06.04.2022', period: 'Jan – Apr 2022' },
]

const CARD_W = 280
const GAP = 20
const UNIT = CARD_W + GAP
const SPEED = 2.5

function MetaRow({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
      <span style={{ fontSize: 11 }}>{icon}</span>
      <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '.07em', textTransform: 'uppercase', color: 'var(--muted)', minWidth: 52 }}>
        {label}
      </span>
      <span style={{ fontSize: 12, color: 'var(--text)' }}>{value}</span>
    </div>
  )
}

function CertCard({ cert, labels }: {
  cert: Certificate
  labels: { issued: string; period: string; issuer: string; view: string }
}) {
  return (
    <div
      style={{
        width: CARD_W,
        flexShrink: 0,
        background: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'border-color .25s, box-shadow .25s',
      }}
      className="hover:border-[rgba(0,229,255,.4)] hover:shadow-[0_12px_40px_rgba(0,229,255,.08)]"
    >
      {/* Thumbnail */}
      <div style={{ position: 'relative', height: 190, background: 'var(--bg3)', flexShrink: 0 }}>
        <Image
          src={cert.file}
          alt={cert.name}
          fill
          sizes="280px"
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* Body */}
      <div style={{ padding: '18px 20px 20px', flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <h3 className="font-heading" style={{ fontSize: 14, fontWeight: 700, color: '#fff', lineHeight: 1.3 }}>
          {cert.name}
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
          <MetaRow icon="🏛️" label={labels.issuer} value={cert.issuer} />
          <MetaRow icon="📅" label={labels.issued} value={cert.issued} />
          <MetaRow icon="📚" label={labels.period} value={cert.period} />
        </div>
        <a
          href={cert.file}
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginTop: 'auto', paddingTop: 10, display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 11, fontWeight: 600, color: 'var(--accent)', textDecoration: 'none', transition: 'opacity .2s' }}
          className="hover:opacity-70"
        >
          {labels.view} ↗
        </a>
      </div>
    </div>
  )
}

function Arrow({ direction }: { direction: 'left' | 'right' }) {
  const isRight = direction === 'right'
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 4,
      animation: `${isRight ? 'fadeRight' : 'fadeLeft'} 2s ease-in-out infinite`,
      pointerEvents: 'none',
    }}>
      <svg
        width="20" height="20" viewBox="0 0 24 24"
        fill="none" stroke="var(--accent)" strokeWidth="2"
        style={{ transform: isRight ? 'none' : 'scaleX(-1)' }}
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
      <span style={{ fontSize: 9, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)' }}>
        {isRight ? '→' : '←'}
      </span>
    </div>
  )
}

export default function Certificates() {
  const { t } = useLang()
  const { certificates } = t
  const sectionRef = useRef<HTMLElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const dirRef = useRef(0)
  const xRef = useRef(-(CARD_W / 2))

  useEffect(() => {
    if (trackRef.current) {
      gsap.set(trackRef.current, { x: xRef.current })
    }

    const tick = () => {
      if (!containerRef.current || !trackRef.current) return
      const containerW = containerRef.current.offsetWidth
      const totalW = CERTIFICATES.length * UNIT - GAP
      const minX = -(totalW - containerW)
      const maxX = 0

      if (dirRef.current !== 0) {
        const next = xRef.current + dirRef.current * SPEED
        const clamped = Math.max(minX, Math.min(maxX, next))
        if (clamped !== xRef.current) {
          xRef.current = clamped
          gsap.set(trackRef.current, { x: clamped })
        }
      }
    }

    gsap.ticker.add(tick)
    return () => gsap.ticker.remove(tick)
  }, [])

  useGSAP(() => {
    gsap.from('.certs-header', {
      scrollTrigger: { trigger: '.certs-header', start: 'top 85%' },
      opacity: 0, y: 30, duration: 0.6, ease: 'power3.out',
    })
    gsap.from('.certs-carousel', {
      scrollTrigger: { trigger: '.certs-carousel', start: 'top 90%' },
      opacity: 0, y: 40, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: sectionRef })

  const PEEK_ZONE = CARD_W / 2 + 40

  return (
    <section
      id="certificates"
      ref={sectionRef}
      style={{ padding: '80px 0 80px', background: 'var(--bg)' }}
    >
      {/* Header stays padded */}
      <div className="certs-header" style={{ padding: '0 clamp(24px,8vw,120px)' }}>
        <SectionLabel>{certificates.label}</SectionLabel>
        <h2 className="section-title">{certificates.title}</h2>
        <p className="section-sub">{certificates.sub}</p>
      </div>

      {/* Carousel — full width, no side padding */}
      <div
        ref={containerRef}
        className="certs-carousel"
        style={{ position: 'relative', overflow: 'hidden', width: '100%' }}
      >
        {/* Track */}
        <div
          ref={trackRef}
          style={{
            display: 'flex',
            gap: GAP,
            paddingTop: 4,
            paddingBottom: 16,
            willChange: 'transform',
          }}
        >
          {CERTIFICATES.map((cert) => (
            <CertCard
              key={cert.file}
              cert={cert}
              labels={{
                issued: certificates.issued,
                period: certificates.period,
                issuer: certificates.issuer,
                view: certificates.view,
              }}
            />
          ))}
        </div>

        {/* Left hover zone */}
        <div
          onMouseEnter={() => { dirRef.current = 1 }}
          onMouseLeave={() => { dirRef.current = 0 }}
          style={{
            position: 'absolute', left: 0, top: 0, bottom: 0,
            width: PEEK_ZONE,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'linear-gradient(to right, var(--bg) 30%, transparent 100%)',
            cursor: 'w-resize',
            zIndex: 10,
          }}
        >
          <Arrow direction="left" />
        </div>

        {/* Right hover zone */}
        <div
          onMouseEnter={() => { dirRef.current = -1 }}
          onMouseLeave={() => { dirRef.current = 0 }}
          style={{
            position: 'absolute', right: 0, top: 0, bottom: 0,
            width: PEEK_ZONE,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'linear-gradient(to left, var(--bg) 30%, transparent 100%)',
            cursor: 'e-resize',
            zIndex: 10,
          }}
        >
          <Arrow direction="right" />
        </div>
      </div>
    </section>
  )
}
