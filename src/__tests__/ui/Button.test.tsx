import { render, screen } from '@testing-library/react'
import Button from '@/components/ui/Button'

describe('Button', () => {
  it('renders a <button> by default', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
  })

  it('renders an <a> when href is provided', () => {
    render(<Button href="/foo">Go</Button>)
    const link = screen.getByRole('link', { name: 'Go' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/foo')
  })

  it('applies btn-primary class by default', () => {
    render(<Button>Primary</Button>)
    expect(screen.getByRole('button')).toHaveClass('btn-primary')
  })

  it('applies btn-outline class for outline variant', () => {
    render(<Button variant="outline">Outline</Button>)
    expect(screen.getByRole('button')).toHaveClass('btn-outline')
  })

  it('merges extra className onto button', () => {
    render(<Button className="extra">X</Button>)
    expect(screen.getByRole('button')).toHaveClass('extra')
  })

  it('merges extra className onto anchor', () => {
    render(<Button href="#" className="extra">X</Button>)
    expect(screen.getByRole('link')).toHaveClass('extra')
  })
})
