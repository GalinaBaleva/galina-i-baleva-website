'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/animations'
import PhotoFrame from '@/components/ui/PhotoFrame'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import { useLang } from '@/context/LangContext'

export default function About() {
  const { t } = useLang()
  const { about } = t

  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.from('.about-header', {
      scrollTrigger: { trigger: '.about-header', start: 'top 85%' },
      opacity: 0,
      y: 20,
      duration: 1,
      ease: 'power2.out',
    })
    gsap.from('.about-photo', {
      scrollTrigger: { trigger: '.about-photo', start: 'top 85%' },
      opacity: 0,
      y: -50,
      duration: 1,
      ease: 'power1.out',
    })
    gsap.from('.about-bio', {
      scrollTrigger: { trigger: '.about-bio', start: 'top 85%' },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef}
      id="about"
      style={{ padding: '80px clamp(24px,8vw,120px)', background: 'var(--bg)' }}
    >
      <div className="about-header">
        <SectionLabel>{about.label}</SectionLabel>
        <h2 className="section-title">{about.title}</h2>
      </div>

      {/* about-inner: grid auto 1fr, gap 64px; mobile: single col centered */}
      <div className="grid grid-cols-1 justify-items-center gap-16 items-center md:grid-cols-[auto_1fr]">

        {/* Photo */}
        <PhotoFrame
          src="/galina.jpg"
          size={260}
          variant="purple"
          className="about-photo"
          reverse
        />

        {/* Bio */}
        <div className="about-bio">
          <p
            className="[&_strong]:text-[var(--text)] [&_strong]:font-semibold"
            style={{ fontSize: '15.5px', color: 'var(--muted)', lineHeight: 1.85, marginBottom: 24 }}
            dangerouslySetInnerHTML={{ __html: about.bio1 }}
          />
          <p
            className="[&_strong]:text-[var(--text)] [&_strong]:font-semibold"
            style={{ fontSize: '15.5px', color: 'var(--muted)', lineHeight: 1.85, marginBottom: 24 }}
            dangerouslySetInnerHTML={{ __html: about.bio2 }}
          />

          {/* Highlights / chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 32 }}>
            {about.chips.map((chip) => (
              <span
                key={chip.text}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '7px 14px',
                  borderRadius: 8,
                  fontSize: 13,
                  fontWeight: 500,
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  color: 'var(--text)',
                }}
              >
                <span style={{ color: 'var(--accent)', fontSize: 15 }}>{chip.icon}</span>
                {chip.text}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Button href="#contact">{about.cta1}</Button>
            <Button href="#projects" variant="outline">{about.cta2}</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
