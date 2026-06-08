import './cta.css'

interface CtaLinkProps {
  href: string
  label: string
  variant?: 'primary' | 'secondary'
  external?: boolean
  className?: string
}

export function CtaLink({
  href,
  label,
  variant = 'primary',
  external = false,
  className = '',
}: CtaLinkProps) {
  const classes = ['cta', `cta--${variant}`, className].filter(Boolean).join(' ')

  return (
    <a
      href={href}
      className={classes}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      {label}
    </a>
  )
}
