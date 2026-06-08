interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeading({ title, subtitle, className = '' }: SectionHeadingProps) {
  const classes = className ? `section-heading ${className}` : 'section-heading'

  return (
    <header className={classes}>
      <h2 className="section-heading__title">{title}</h2>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </header>
  )
}
