'use client'

import { useLang } from '@/context/LangContext'

export default function Footer() {
  const { t } = useLang()
  const { footer } = t

  return (
    <footer style={{
      background: 'var(--bg)',
      borderTop: '1px solid var(--border)',
      padding: '28px clamp(24px,8vw,120px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 12,
    }}>
      <p style={{ fontSize: 13, color: 'var(--muted)' }}>{footer.copy}</p>
      <a
        href="#hero"
        style={{
          fontSize: 13,
          color: 'var(--muted)',
          textDecoration: 'none',
          transition: 'color .2s',
        }}
        className="hover:text-accent"
      >
        {footer.top}
      </a>
    </footer>
  )
}
