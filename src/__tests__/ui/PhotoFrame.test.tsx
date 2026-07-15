import { render, screen } from '@testing-library/react'
import PhotoFrame from '@/components/ui/PhotoFrame'

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} />
  ),
}))

describe('PhotoFrame', () => {
  it('shows GB initials when no src is provided', () => {
    render(<PhotoFrame />)
    expect(screen.getByText('GB')).toBeInTheDocument()
  })

  it('renders an image when src is provided', () => {
    render(<PhotoFrame src="/galina.jpg" alt="Galina" />)
    const img = screen.getByRole('img', { name: 'Galina' })
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', '/galina.jpg')
  })

  it('does not show initials when src is provided', () => {
    render(<PhotoFrame src="/galina.jpg" />)
    expect(screen.queryByText('GB')).not.toBeInTheDocument()
  })

  it('applies photo-ring-fwd class by default', () => {
    const { container } = render(<PhotoFrame />)
    expect(container.querySelector('.photo-ring-fwd')).toBeInTheDocument()
    expect(container.querySelector('.photo-ring-rev')).not.toBeInTheDocument()
  })

  it('applies photo-ring-rev class when reverse is true', () => {
    const { container } = render(<PhotoFrame reverse />)
    expect(container.querySelector('.photo-ring-rev')).toBeInTheDocument()
    expect(container.querySelector('.photo-ring-fwd')).not.toBeInTheDocument()
  })

  it('applies the outer className to the wrapper', () => {
    const { container } = render(<PhotoFrame className="mt-8" />)
    expect(container.firstChild).toHaveClass('mt-8')
  })

  it('sets width and height from the size prop', () => {
    const { container } = render(<PhotoFrame size={200} />)
    const wrapper = container.firstChild as HTMLElement
    expect(wrapper.style.width).toBe('200px')
    expect(wrapper.style.height).toBe('200px')
  })
})
