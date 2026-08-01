import { render, screen, fireEvent } from '@testing-library/react'
import Nav from '@/app/components/Nav'
import { LangProvider } from '@/context/LangContext'

jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: jest.fn(), replace: jest.fn(), back: jest.fn() }),
  usePathname: () => '/',
}))

beforeEach(() => {
  const mockObserver = { observe: jest.fn(), disconnect: jest.fn(), unobserve: jest.fn() }
  global.IntersectionObserver = jest.fn(() => mockObserver) as unknown as typeof IntersectionObserver
})

function renderNav() {
  return render(
    <LangProvider>
      <Nav />
    </LangProvider>
  )
}

describe('Nav — logo', () => {
  it('renders the logo link pointing to /bg for default BG lang', () => {
    renderNav()
    const logo = screen.getByRole('link', { name: /galina/i })
    expect(logo).toHaveAttribute('href', '/bg')
  })
})

describe('Nav — desktop links', () => {
  it('renders all 4 nav links from the BG locale', () => {
    renderNav()
    const labels = ['За мен', 'Умения', 'Сертификати', 'Контакт']
    for (const label of labels) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThan(0)
    }
  })

  it('nav links point to localised BG hrefs', () => {
    renderNav()
    const expectedHrefs = ['/bg/za-men', '/bg/umenya', '/bg/sertifikati', '/bg/kontakt']
    for (const href of expectedHrefs) {
      const links = screen.getAllByRole('link').filter((l) => l.getAttribute('href') === href)
      expect(links.length).toBeGreaterThan(0)
    }
  })
})

describe('Nav — language switcher', () => {
  it('renders a button for each of the four languages', () => {
    renderNav()
    for (const lang of ['BG', 'DE', 'RU', 'EN']) {
      expect(screen.getAllByRole('button', { name: lang }).length).toBeGreaterThan(0)
    }
  })

  it('clicking DE makes it the active language', () => {
    renderNav()
    const deButtons = screen.getAllByRole('button', { name: 'DE' })
    fireEvent.click(deButtons[0])
    const updatedDe = screen.getAllByRole('button', { name: 'DE' })
    expect(updatedDe.some((b) => b.getAttribute('data-active') === 'true')).toBe(true)
  })
})

describe('Nav — mobile hamburger', () => {
  it('mobile menu is hidden by default', () => {
    const { container } = renderNav()
    expect(container.querySelector('.pointer-events-none')).toBeInTheDocument()
  })

  it('toggling the hamburger removes pointer-events-none', () => {
    const { container } = renderNav()
    const hamburger = screen.getByRole('button', { name: /меню/i })
    fireEvent.click(hamburger)
    expect(container.querySelector('.pointer-events-none')).not.toBeInTheDocument()
  })

  it('clicking a mobile link closes the menu', () => {
    const { container } = renderNav()
    const hamburger = screen.getByRole('button', { name: /меню/i })
    fireEvent.click(hamburger)
    const mobileLinks = container.querySelectorAll('nav > div a')
    fireEvent.click(mobileLinks[0])
    expect(container.querySelector('.pointer-events-none')).toBeInTheDocument()
  })
})
