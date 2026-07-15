import { render, screen } from '@testing-library/react'
import About from '@/components/sections/About'
import { LangProvider } from '@/context/LangContext'
import { bg } from '@/locales/bg'

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} />
  ),
}))

function renderAbout() {
  return render(
    <LangProvider>
      <About />
    </LangProvider>
  )
}

describe('About section', () => {
  it('renders the section with id="about"', () => {
    const { container } = renderAbout()
    expect(container.querySelector('section#about')).toBeInTheDocument()
  })

  it('renders the section label from BG locale', () => {
    renderAbout()
    expect(screen.getByText(bg.about.label)).toBeInTheDocument()
  })

  it('renders the section title from BG locale', () => {
    renderAbout()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(bg.about.title)
  })

  it('renders all highlight chips', () => {
    renderAbout()
    for (const chip of bg.about.chips) {
      expect(screen.getByText(chip.text)).toBeInTheDocument()
    }
  })

  it('renders the profile photo', () => {
    renderAbout()
    expect(screen.getByRole('img', { name: /galina/i })).toBeInTheDocument()
  })

  it('CTA button links to #contact', () => {
    renderAbout()
    const link = screen.getByRole('link', { name: bg.about.cta1 })
    expect(link).toHaveAttribute('href', '#contact')
  })

  it('CTA button links to #projects', () => {
    renderAbout()
    const link = screen.getByRole('link', { name: bg.about.cta2 })
    expect(link).toHaveAttribute('href', '#projects')
  })
})
