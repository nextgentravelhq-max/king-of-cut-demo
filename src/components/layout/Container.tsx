import type { ReactNode } from 'react'
import './layout.css'

interface ContainerProps {
  children: ReactNode
  className?: string
}

export function Container({ children, className = '' }: ContainerProps) {
  const classes = className ? `container ${className}` : 'container'

  return <div className={classes}>{children}</div>
}
