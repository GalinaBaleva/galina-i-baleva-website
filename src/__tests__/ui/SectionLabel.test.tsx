import { render, screen } from '@testing-library/react'
import SectionLabel from '@/components/ui/SectionLabel'

describe('SectionLabel', () => {
  it('renders children', () => {
    render(<SectionLabel>Skills</SectionLabel>)
    expect(screen.getByText('Skills')).toBeInTheDocument()
  })

  it('always has section-label class', () => {
    const { container } = render(<SectionLabel>Test</SectionLabel>)
    expect(container.firstChild).toHaveClass('section-label')
  })

  it('merges extra className without dropping section-label', () => {
    const { container } = render(<SectionLabel className="mt-4">Test</SectionLabel>)
    expect(container.firstChild).toHaveClass('section-label', 'mt-4')
  })
})
