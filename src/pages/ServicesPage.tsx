import { useScrollRevealInit } from '../hooks/useScrollReveal.ts'
import { ServicesSection } from '../components/sections/ServicesSection.tsx'

export function ServicesPage() {
  useScrollRevealInit()

  return (
    <main>
      <ServicesSection />
    </main>
  )
}
