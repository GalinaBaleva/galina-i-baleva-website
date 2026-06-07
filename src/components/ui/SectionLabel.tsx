type Props = {
  children: React.ReactNode
  className?: string
}

export default function SectionLabel({ children, className = '' }: Props) {
  return (
    <p className={`section-label ${className}`.trim()}>
      {children}
    </p>
  )
}