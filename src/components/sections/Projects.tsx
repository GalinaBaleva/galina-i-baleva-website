'use client'

import SectionLabel from '@/components/ui/SectionLabel'
import { useLang } from '@/context/LangContext'

type TagColor = 'cyan' | 'purple' | 'red'

type ProjectTag = {
  label: string
  color: TagColor
}

type ProjectItem = {
  emoji: string
  thumbGradient: string
  tags: ProjectTag[]
  title: string
  desc: string
  live: string
  code: string
}

const TAG_STYLES: Record<TagColor, React.CSSProperties> = {
  cyan:   { background: 'rgba(0,229,255,.08)',   color: '#67e8f9', border: '1px solid rgba(0,229,255,.2)' },
  purple: { background: 'rgba(124,77,255,.08)',  color: '#a78bfa', border: '1px solid rgba(124,77,255,.2)' },
  red:    { background: 'rgba(255,107,107,.08)', color: '#fca5a5', border: '1px solid rgba(255,107,107,.2)' },
}

const PROJECTS: Omit<ProjectItem, 'title' | 'desc' | 'live' | 'code'>[] = [
  {
    emoji: '🛒',
    thumbGradient: 'linear-gradient(135deg,#0d1a2a,#0a2040)',
    tags: [
      { label: 'Next.js', color: 'cyan' },
      { label: 'Node.js', color: 'purple' },
      { label: 'SEO',     color: 'red' },
    ],
  },
  {
    emoji: '🤖',
    thumbGradient: 'linear-gradient(135deg,#1a0d2a,#200a40)',
    tags: [
      { label: 'OpenAI', color: 'purple' },
      { label: 'React',  color: 'cyan' },
      { label: 'RAG',    color: 'purple' },
    ],
  },
  {
    emoji: '🌐',
    thumbGradient: 'linear-gradient(135deg,#0a1a0d,#0d2a10)',
    tags: [
      { label: 'WordPress', color: 'cyan' },
      { label: 'SEO',       color: 'red' },
      { label: 'Analytics', color: 'purple' },
    ],
  },
]

function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <div
      style={{
        background: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'border-color .25s, transform .25s, box-shadow .25s',
      }}
      className="hover:-translate-y-[5px] hover:border-[rgba(124,77,255,.45)] hover:shadow-[0_14px_48px_rgba(124,77,255,.1)]"
    >
      {/* Thumbnail */}
      <div
        style={{
          height: 180,
          background: project.thumbGradient,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ fontSize: 52, position: 'relative', zIndex: 1 }}>{project.emoji}</div>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, transparent 40%, var(--card) 100%)',
          }}
        />
      </div>

      {/* Body */}
      <div style={{ padding: 24, flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
          {project.tags.map((tag) => (
            <span
              key={tag.label}
              style={{
                fontSize: 10, fontWeight: 600,
                letterSpacing: '.07em', textTransform: 'uppercase',
                padding: '3px 9px', borderRadius: 4,
                ...TAG_STYLES[tag.color],
              }}
            >
              {tag.label}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3
          className="font-heading"
          style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 10 }}
        >
          {project.title}
        </h3>

        {/* Desc */}
        <p style={{ fontSize: 13.5, color: 'var(--muted)', lineHeight: 1.7, flex: 1, marginBottom: 20 }}>
          {project.desc}
        </p>

        {/* Links */}
        <div style={{ display: 'flex', gap: 10 }}>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '8px 16px', borderRadius: 8,
              fontSize: 12, fontWeight: 600, textDecoration: 'none',
              background: 'rgba(124,77,255,.15)',
              color: '#a78bfa',
              border: '1px solid rgba(124,77,255,.3)',
              transition: 'background .2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(124,77,255,.3)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(124,77,255,.15)')}
          >
            ↗ {project.live !== '#' ? 'Live Demo' : project.live}
          </a>
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '8px 16px', borderRadius: 8,
              fontSize: 12, fontWeight: 600, textDecoration: 'none',
              background: 'transparent',
              color: 'var(--muted)',
              border: '1px solid var(--border)',
              transition: 'border-color .2s, color .2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent)'
              e.currentTarget.style.color = 'var(--accent)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.color = 'var(--muted)'
            }}
          >
            {'<>'} {project.code !== '#' ? 'Source' : project.code}
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const { t } = useLang()
  const { projects } = t

  const cards: ProjectItem[] = PROJECTS.map((p, i) => ({
    ...p,
    title: projects.items[i].title,
    desc:  projects.items[i].desc,
    live:  projects.items[i].live,
    code:  projects.items[i].code,
  }))

  return (
    <section
      id="projects"
      style={{ padding: '80px clamp(24px,8vw,120px)', background: 'var(--bg3)' }}
    >
      <SectionLabel>{projects.label}</SectionLabel>
      <h2 className="section-title">{projects.title}</h2>
      <p className="section-sub">{projects.sub}</p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: 24,
        }}
      >
        {cards.map((card) => (
          <ProjectCard key={card.title} project={card} />
        ))}
      </div>
    </section>
  )
}
