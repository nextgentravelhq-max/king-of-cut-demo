import type { ThemeConfig } from '../config/businessConfig.types.ts'

const COLOR_VARIABLE_MAP = {
  primary: '--color-primary',
  primaryHover: '--color-primary-hover',
  secondary: '--color-secondary',
  background: '--color-background',
  surface: '--color-surface',
  text: '--color-text',
  textHeading: '--color-text-heading',
  border: '--color-border',
} as const

export function applyTheme(theme: ThemeConfig): void {
  const root = document.documentElement

  for (const [key, cssVariable] of Object.entries(COLOR_VARIABLE_MAP)) {
    const color = theme.colors[key as keyof typeof COLOR_VARIABLE_MAP]
    root.style.setProperty(cssVariable, color)
  }
}
