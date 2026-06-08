import { useBusinessConfig } from '../../hooks/useBusinessConfig.tsx'
import { revealClass } from '../../hooks/useScrollReveal.ts'
import { CtaLink } from '../ui/CtaLink.tsx'
import { SectionHeading } from '../ui/SectionHeading.tsx'
import { Container } from '../layout/Container.tsx'
import { Section } from '../layout/Section.tsx'
import './sections.css'

export function MapSection() {
  const { maps, sectionHeadings } = useBusinessConfig()

  if (!maps.enabled || !maps.embedUrl) {
    return null
  }

  const heading = sectionHeadings.map

  return (
    <Section id="map" className="map contact-zone">
      <Container>
        <div className="map__panel">
          {heading && <SectionHeading title={heading.title} subtitle={heading.subtitle} />}
          {maps.linkUrl && (
            <div className={`map__actions ${revealClass(1)}`}>
              <CtaLink
                href={maps.linkUrl}
                label="Route planen"
                variant="secondary"
                external
                className="map__route cta--compact"
              />
            </div>
          )}
          <div className={`map__embed ${revealClass(2)}`}>
            <iframe
              src={maps.embedUrl}
              className="map__iframe"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={maps.linkUrl ?? maps.embedUrl}
            />
          </div>
        </div>
      </Container>
    </Section>
  )
}
