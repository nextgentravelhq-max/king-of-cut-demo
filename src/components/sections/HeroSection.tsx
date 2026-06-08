import { useRef } from 'react'
import type { ContactConfig, CtaConfig, WhatsAppConfig } from '../../config/businessConfig.types.ts'
import { useBusinessConfig } from '../../hooks/useBusinessConfig.tsx'
import { useHeroParallax } from '../../hooks/useHeroParallax.ts'
import { revealClass } from '../../hooks/useScrollReveal.ts'
import { buildWhatsAppUrl } from '../../utils/buildWhatsAppUrl.ts'
import { CtaLink } from '../ui/CtaLink.tsx'
import { Container } from '../layout/Container.tsx'
import { Section } from '../layout/Section.tsx'
import './sections.css'

function resolveCtaHref(
  cta: CtaConfig,
  whatsapp: WhatsAppConfig,
  contact: ContactConfig,
): string {
  switch (cta.type) {
    case 'whatsapp':
      return whatsapp.enabled
        ? buildWhatsAppUrl(whatsapp.phone, whatsapp.defaultMessage)
        : `tel:${contact.phone.replace(/\s/g, '')}`
    case 'phone':
      return `tel:${contact.phone.replace(/\s/g, '')}`
    case 'link':
      return cta.href
  }
}

function isExternalCta(cta: CtaConfig, whatsapp: WhatsAppConfig): boolean {
  if (cta.type === 'whatsapp' && whatsapp.enabled) return true
  if (cta.type === 'link') return cta.href.startsWith('http')
  return false
}

export function HeroSection() {
  const { identity, hero, contact, whatsapp } = useBusinessConfig()
  const heroImageRef = useRef<HTMLImageElement>(null)

  useHeroParallax(heroImageRef, Boolean(hero.image))

  return (
    <Section id="hero" className="hero">
      <Container>
        <div className="hero__grid">
          <div className={`hero__content ${revealClass()}`}>
            <span className="hero__eyebrow">{identity.tagline}</span>
            <h1 className="hero__headline">{hero.headline}</h1>
            <p className="hero__subline">{hero.subline}</p>
            {hero.trustBar && hero.trustBar.length > 0 && (
              <ul className="hero__trust-bar">
                {hero.trustBar.map((item) => (
                  <li key={item.id} className="hero__trust-item">
                    <span className="hero__trust-label">{item.label}</span>
                    <span className="hero__trust-value">{item.value}</span>
                  </li>
                ))}
              </ul>
            )}
            <div className="hero__actions">
              <CtaLink
                href={resolveCtaHref(hero.ctaPrimary, whatsapp, contact)}
                label={hero.ctaPrimary.label}
                variant="primary"
                external={isExternalCta(hero.ctaPrimary, whatsapp)}
              />
              {hero.ctaSecondary && (
                <CtaLink
                  href={resolveCtaHref(hero.ctaSecondary, whatsapp, contact)}
                  label={hero.ctaSecondary.label}
                  variant="secondary"
                  external={isExternalCta(hero.ctaSecondary, whatsapp)}
                />
              )}
            </div>
          </div>

          {hero.image && (
            <div className={`hero__media ${revealClass(1)}`}>
              <img
                ref={heroImageRef}
                src={hero.image}
                alt={hero.headline}
                className="hero__image hero__image--parallax"
                loading="eager"
              />
            </div>
          )}
        </div>
      </Container>
    </Section>
  )
}
