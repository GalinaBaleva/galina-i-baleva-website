import { render, screen } from '@testing-library/react'
import Projects from '@/components/sections/Projects'
import { LangProvider } from '@/context/LangContext'
import { bg } from '@/locales/bg'

function renderProjects() {
  return render(
    <LangProvider>
      <Projects />
    </LangProvider>
  )
}

describe('Projects section', () => {
  it('renders the section with id="projects"', () => {
    const { container } = renderProjects()
    expect(container.querySelector('section#projects')).toBeInTheDocument()
  })

  it('renders the section label from BG locale', () => {
    renderProjects()
    expect(screen.getByText(bg.projects.label)).toBeInTheDocument()
  })

  it('renders the section title', () => {
    renderProjects()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(bg.projects.title)
  })

  it('renders the subtitle', () => {
    renderProjects()
    expect(screen.getByText(bg.projects.sub)).toBeInTheDocument()
  })

  it('renders all 3 project card titles', () => {
    renderProjects()
    for (const item of bg.projects.items) {
      expect(screen.getByRole('heading', { name: item.title })).toBeInTheDocument()
    }
  })

  it('renders each project description', () => {
    renderProjects()
    for (const item of bg.projects.items) {
      expect(screen.getByText(item.desc)).toBeInTheDocument()
    }
  })

  it('renders a "Live Demo" link for each project', () => {
    renderProjects()
    // Cards with live !== '#' show "Live Demo"; those with '#' show '#'
    const liveDemoLinks = screen.getAllByText(/↗/)
    expect(liveDemoLinks).toHaveLength(bg.projects.items.length)
  })

  it('renders a source link for each project', () => {
    renderProjects()
    const sourceLinks = screen.getAllByText(/<>/)
    expect(sourceLinks).toHaveLength(bg.projects.items.length)
  })

  it('project links open in a new tab', () => {
    renderProjects()
    const allLinks = screen.getAllByRole('link')
    const projectLinks = allLinks.filter(
      (l) => l.getAttribute('target') === '_blank'
    )
    // 2 links per card × 3 cards
    expect(projectLinks).toHaveLength(6)
  })

  it('all project links have rel="noopener noreferrer"', () => {
    renderProjects()
    const projectLinks = screen
      .getAllByRole('link')
      .filter((l) => l.getAttribute('target') === '_blank')
    for (const link of projectLinks) {
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    }
  })
})
