import { useRef } from 'react'
import { useBusinessConfig } from '../../hooks/useBusinessConfig.tsx'
import { useHeroParallax } from '../../hooks/useHeroParallax.ts'

import { revealClass } from '../../hooks/useScrollReveal.ts'
import { buildWhatsAppUrl } from '../../utils/buildWhatsAppUrl.ts'
import { isWhatsAppReady } from '../../utils/isWhatsAppReady.ts'
import { CtaLink } from '../ui/CtaLink.tsx'
import { Container } from '../layout/Container.tsx'
import { Section } from '../layout/Section.tsx'
import './sections.css'

export function HeroSection() {
  const { identity, hero, contact, whatsapp } = useBusinessConfig()
  const heroImageRef = useRef<HTMLImageElement>(null)

  useHeroParallax(heroImageRef, Boolean(hero.image))

  const whatsAppReady = isWhatsAppReady(whatsapp)
  const hasPhone = contact.phone.trim() !== ''

  const waHref = buildWhatsAppUrl(whatsapp.phone, whatsapp.defaultMessage)
  const waLabel = whatsapp.ctaLabel?.trim() || hero.ctaPrimary.label || 'WhatsApp'
  const phoneHref = `tel:${contact.phone.replace(/\s/g, '')}`
  const phoneLabel = hero.ctaSecondary?.label || 'Anrufen'

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
              {whatsAppReady && (
                <CtaLink
                  href={waHref}
                  label={waLabel}
                  variant="secondary"
                  external
                />
              )}
              {hasPhone && (
                <CtaLink
                  href={phoneHref}
                  label={phoneLabel}
                  variant="primary"
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