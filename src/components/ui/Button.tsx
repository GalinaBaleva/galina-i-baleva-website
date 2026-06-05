import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

type BaseProps = {
  variant?: 'primary' | 'outline'
  children: React.ReactNode
  className?: string
}

type AsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: never }

type AsAnchor = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

type ButtonProps = AsButton | AsAnchor

export default function Button({
  variant = 'primary',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const classes = `btn btn-${variant} ${className}`.trim()

  if ('href' in props && props.href !== undefined) {
    const { href, ...rest } = props as AsAnchor
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...(props as AsButton)}>
      {children}
    </button>
  )
}