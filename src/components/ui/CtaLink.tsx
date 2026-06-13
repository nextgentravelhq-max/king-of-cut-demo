import './cta.css'

interface CtaLinkProps {
  href: string
  label: string
  variant?: 'primary' | 'secondary'
  external?: boolean
  className?: string
}

function isBrokenWhatsAppHref(href: string): boolean {
  if (!href.startsWith('https://wa.me/')) return false
  try {
    const phone = new URL(href).pathname.slice(1)
    return phone.replace(/[^0-9]/g, '').length < 10
  } catch {
    return true
  }
}

export function CtaLink({
  href,
  label,
  variant = 'primary',
  external = false,
  className = '',
}: CtaLinkProps) {
  if (!href.trim() || isBrokenWhatsAppHref(href)) {
    return null
  }

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
