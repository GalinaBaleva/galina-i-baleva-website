import { render, screen, fireEvent, within } from '@testing-library/react'
import Nav from '@/app/components/Nav'
import { LangProvider, useLang } from '@/context/LangContext'

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
  it('renders the logo link to #hero', () => {
    renderNav()
    const logo = screen.getByRole('link', { name: /galina/i })
    expect(logo).toHaveAttribute('href', '#hero')
  })
})

describe('Nav — desktop links', () => {
  it('renders all 4 nav links from the BG locale', () => {
    renderNav()
    // BG locale labels
    const labels = ['За мен', 'Умения', 'Проекти', 'Контакт']
    for (const label of labels) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThan(0)
    }
  })

  it('nav links point to the correct hrefs', () => {
    renderNav()
    const hrefs = ['#about', '#skills', '#projects', '#contact']
    for (const href of hrefs) {
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

  it('clicking a language button switches the active language', () => {
    // Spy on setLang indirectly: after clicking DE the DE button should be data-active=true
    renderNav()
    const deButtons = screen.getAllByRole('button', { name: 'DE' })
    fireEvent.click(deButtons[0])
    // After switching, DE button(s) should have data-active="true"
    const updatedDe = screen.getAllByRole('button', { name: 'DE' })
    expect(updatedDe.some((b) => b.getAttribute('data-active') === 'true')).toBe(true)
  })
})

describe('Nav — mobile hamburger', () => {
  it('mobile menu is hidden by default', () => {
    const { container } = renderNav()
    const mobileMenu = container.querySelector('.pointer-events-none')
    expect(mobileMenu).toBeInTheDocument()
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
    // menu is open — click the first mobile link
    const mobileLinks = container.querySelectorAll('nav > div a')
    fireEvent.click(mobileLinks[0])
    expect(container.querySelector('.pointer-events-none')).toBeInTheDocument()
  })
})
