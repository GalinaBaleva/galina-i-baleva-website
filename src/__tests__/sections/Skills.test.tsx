import { render, screen } from '@testing-library/react'
import Skills from '@/components/sections/Skills'
import { LangProvider } from '@/context/LangContext'
import { bg } from '@/locales/bg'

beforeEach(() => {
  const mockObserver = { observe: jest.fn(), disconnect: jest.fn(), unobserve: jest.fn() }
  global.IntersectionObserver = jest.fn(() => mockObserver) as unknown as typeof IntersectionObserver
})

function renderSkills() {
  return render(
    <LangProvider>
      <Skills />
    </LangProvider>
  )
}

describe('Skills section', () => {
  it('renders the section with id="skills"', () => {
    const { container } = renderSkills()
    expect(container.querySelector('section#skills')).toBeInTheDocument()
  })

  it('renders the section label from BG locale', () => {
    renderSkills()
    expect(screen.getByText(bg.skills.label)).toBeInTheDocument()
  })

  it('renders the section title', () => {
    renderSkills()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(bg.skills.title)
  })

  it('renders the subtitle', () => {
    renderSkills()
    expect(screen.getByText(bg.skills.sub)).toBeInTheDocument()
  })

  it('renders all 6 skill card names', () => {
    renderSkills()
    for (const item of bg.skills.items) {
      expect(screen.getByText(item.name)).toBeInTheDocument()
    }
  })

  it('renders each skill description', () => {
    renderSkills()
    for (const item of bg.skills.items) {
      expect(screen.getByText(item.desc)).toBeInTheDocument()
    }
  })

  it('displays level percentage for each skill', () => {
    renderSkills()
    for (const item of bg.skills.items) {
      expect(screen.getByText(`${item.level}%`)).toBeInTheDocument()
    }
  })

  it('renders tags for each skill', () => {
    renderSkills()
    const allTags = bg.skills.items.flatMap((item) => item.tags)
    for (const tag of allTags) {
      expect(screen.getAllByText(tag).length).toBeGreaterThan(0)
    }
  })
})
