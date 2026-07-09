'use client'

import { useEffect, useRef, useState } from 'react'
import SectionLabel from '@/components/ui/SectionLabel'
import { useLang } from '@/context/LangContext'

type SkillItem = {
  icon: string
  iconBg: string
  name: string
  desc: string
  level: number
  tags: string[]
}

function SkillCard({ skill }: { skill: SkillItem }) {
  const [barWidth, setBarWidth] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBarWidth(skill.level)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [skill.level])

  return (
    <div
      ref={ref}
      style={{
        background: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius)',
        padding: 28,
        transition: 'border-color .25s, transform .25s, box-shadow .25s',
      }}
      className="hover:-translate-y-1 hover:border-[rgba(0,229,255,.4)] hover:shadow-[0_12px_40px_rgba(0,229,255,.08)]"
    >
      {/* Icon */}
      <div
        style={{
          width: 44, height: 44,
          borderRadius: 10,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 22,
          background: skill.iconBg,
          marginBottom: 16,
        }}
      >
        {skill.icon}
      </div>

      {/* Name */}
      <div
        className="font-heading"
        style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 8 }}
      >
        {skill.name}
      </div>

      {/* Description */}
      <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.65, marginBottom: 18 }}>
        {skill.desc}
      </div>

      {/* Bar */}
      <div style={{ height: 4, background: 'rgba(255,255,255,.06)', borderRadius: 2, overflow: 'hidden' }}>
        <div
          style={{
            height: '100%',
            borderRadius: 2,
            background: 'linear-gradient(90deg, var(--accent), var(--accent2))',
            width: `${barWidth}%`,
            transition: 'width 1.2s cubic-bezier(.4,0,.2,1)',
          }}
        />
      </div>

      {/* Level */}
      <div style={{ fontSize: 10, color: 'var(--muted)', textAlign: 'right', marginTop: 6 }}>
        {skill.level}%
      </div>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 14 }}>
        {skill.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: 10, fontWeight: 600,
              letterSpacing: '.07em', textTransform: 'uppercase',
              color: 'rgba(0,229,255,.75)',
              background: 'rgba(0,229,255,.07)',
              border: '1px solid rgba(0,229,255,.15)',
              padding: '3px 9px', borderRadius: 4,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const { t } = useLang()
  const { skills } = t

  return (
    <section
      id="skills"
      style={{ padding: '100px clamp(24px,8vw,120px)', background: 'var(--bg2)' }}
    >
      <SectionLabel>{skills.label}</SectionLabel>
      <h2 className="section-title">{skills.title}</h2>
      <p className="section-sub">{skills.sub}</p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 20,
        }}
      >
        {skills.items.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  )
}
