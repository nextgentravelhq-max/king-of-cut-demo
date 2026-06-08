import type { ReactNode } from 'react'
import './layout.css'

interface SectionProps {
  id?: string
  children: ReactNode
  className?: string
}

export function Section({ id, children, className = '' }: SectionProps) {
  const classes = className ? `section ${className}` : 'section'

  return (
    <section id={id} className={classes}>
      {children}
    </section>
  )
}
