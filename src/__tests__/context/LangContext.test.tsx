import { render, screen, fireEvent } from '@testing-library/react'
import { LangProvider, useLang } from '@/context/LangContext'

function Display() {
  const { lang, t } = useLang()
  return <div data-testid="lang">{lang}:{t.hero.badge}</div>
}

function Switcher({ to }: { to: Parameters<ReturnType<typeof useLang>['setLang']>[0] }) {
  const { setLang } = useLang()
  return <button onClick={() => setLang(to)}>switch</button>
}

describe('LangProvider', () => {
  it('defaults to BG', () => {
    render(<LangProvider><Display /></LangProvider>)
    expect(screen.getByTestId('lang').textContent).toMatch(/^BG:/)
  })

  it('switches language and updates t', () => {
    render(
      <LangProvider>
        <Display />
        <Switcher to="EN" />
      </LangProvider>
    )
    fireEvent.click(screen.getByRole('button', { name: 'switch' }))
    const text = screen.getByTestId('lang').textContent!
    expect(text).toMatch(/^EN:/)
    expect(text).toContain('Open to new projects')
  })

  it('provides correct t for each language', () => {
    const langs = ['BG', 'DE', 'RU', 'EN'] as const
    for (const lang of langs) {
      const { unmount } = render(
        <LangProvider>
          <Switcher to={lang} />
          <Display />
        </LangProvider>
      )
      fireEvent.click(screen.getByRole('button', { name: 'switch' }))
      expect(screen.getByTestId('lang').textContent).toMatch(new RegExp(`^${lang}:`))
      unmount()
    }
  })
})

describe('useLang outside provider', () => {
  it('throws a descriptive error', () => {
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {})
    expect(() => render(<Display />)).toThrow('useLang must be used inside LangProvider')
    spy.mockRestore()
  })
})
