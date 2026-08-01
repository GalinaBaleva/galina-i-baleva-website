'use client'

import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/animations'
import SectionLabel from '@/components/ui/SectionLabel'
import { useLang } from '@/context/LangContext'

const EMAIL = 'baleva.i.galina@gmail.com'
const GITHUB = 'https://github.com/GalinaBaleva'
const LINKEDIN = 'https://www.linkedin.com/in/galina-baleva-4a4019bb/'

export default function Contact() {
  const { t } = useLang()
  const { contact, form } = t

  const sectionRef = useRef<HTMLElement>(null)
  const [status] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [fields, setFields] = useState({ name: '', email: '', subject: '', message: '' })

  useGSAP(() => {
    gsap.from('.contact-header', {
      scrollTrigger: { trigger: '.contact-header', start: 'top 85%' },
      opacity: 0, y: 30, duration: 0.6, ease: 'power3.out',
    })
    gsap.from('.contact-info', {
      scrollTrigger: { trigger: '.contact-info', start: 'top 85%' },
      opacity: 0, x: -40, duration: 0.7, ease: 'power3.out',
    })
    gsap.from('.contact-form', {
      scrollTrigger: { trigger: '.contact-form', start: 'top 85%' },
      opacity: 0, x: 40, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: sectionRef })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // TODO: wire up DB + security filters before enabling
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{ padding: '80px clamp(24px,8vw,120px)', background: 'var(--bg2)' }}
    >
      <div className="contact-header">
        <SectionLabel>{contact.label}</SectionLabel>
        <h2 className="section-title">{contact.title}</h2>
      </div>

      <div style={{ display: 'flex', gap: 48, alignItems: 'flex-start', flexWrap: 'wrap' }}>

        {/* Left — info */}
        <div className="contact-info" style={{ flex: '1 1 280px' }}>
          <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.8, marginBottom: 36 }}>
            {contact.desc}
          </p>

          {/* Email */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 24 }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(0,229,255,.08)', border: '1px solid rgba(0,229,255,.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </div>
            <div>
              <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 4 }}>
                {contact.email.label}
              </div>
              <a href={`mailto:${EMAIL}`} style={{ fontSize: 14, color: 'var(--text)', textDecoration: 'none' }}
                 className="hover:text-accent transition-colors">
                {EMAIL}
              </a>
            </div>
          </div>

          {/* Location */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 36 }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(0,229,255,.08)', border: '1px solid rgba(0,229,255,.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
                <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div>
              <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 4 }}>
                {contact.location.label}
              </div>
              <div style={{ fontSize: 14, color: 'var(--text)' }}>{contact.location.value}</div>
            </div>
          </div>

          {/* Social links */}
          <div style={{ display: 'flex', gap: 12 }}>
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 23.2 24 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Right — form */}
        <form className="contact-form" onSubmit={handleSubmit} noValidate
              style={{
                flex: '1.4 1 360px',
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
                background: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: 'clamp(24px, 4vw, 40px)',
                boxShadow: '0 8px 40px rgba(0,229,255,.05)',
              }}>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}
               className="max-sm:grid-cols-1">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <label style={{ fontSize: 10, fontWeight: 600, letterSpacing: '.07em', textTransform: 'uppercase', color: 'var(--muted)' }}>
                {form.name}
              </label>
              <input
                className="form-input"
                type="text"
                placeholder={form.namePlaceholder}
                value={fields.name}
                onChange={e => setFields(f => ({ ...f, name: e.target.value }))}
                required
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <label style={{ fontSize: 10, fontWeight: 600, letterSpacing: '.07em', textTransform: 'uppercase', color: 'var(--muted)' }}>
                {form.email}
              </label>
              <input
                className="form-input"
                type="email"
                placeholder={form.emailPlaceholder}
                value={fields.email}
                onChange={e => setFields(f => ({ ...f, email: e.target.value }))}
                required
              />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <label style={{ fontSize: 10, fontWeight: 600, letterSpacing: '.07em', textTransform: 'uppercase', color: 'var(--muted)' }}>
              {form.subject}
            </label>
            <input
              className="form-input"
              type="text"
              placeholder={form.subjectPlaceholder}
              value={fields.subject}
              onChange={e => setFields(f => ({ ...f, subject: e.target.value }))}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <label style={{ fontSize: 10, fontWeight: 600, letterSpacing: '.07em', textTransform: 'uppercase', color: 'var(--muted)' }}>
              {form.message}
            </label>
            <textarea
              className="form-input"
              placeholder={form.messagePlaceholder}
              rows={5}
              value={fields.message}
              onChange={e => setFields(f => ({ ...f, message: e.target.value }))}
              required
              style={{ resize: 'vertical' }}
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="btn btn-primary"
            style={{ alignSelf: 'flex-start', opacity: status === 'sending' ? 0.6 : 1 }}
          >
            {status === 'sending' ? '…' : form.submit}
          </button>

          {status === 'success' && (
            <p style={{ fontSize: 13, color: 'var(--accent)' }}>{form.success}</p>
          )}
          {status === 'error' && (
            <p style={{ fontSize: 13, color: 'var(--accent3)' }}>{form.error}</p>
          )}
        </form>
      </div>
    </section>
  )
}
