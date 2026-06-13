import { revealClass, useScrollRevealInit } from '../hooks/useScrollReveal.ts'
import { HeroSection } from '../components/sections/HeroSection.tsx'
import { AboutSection } from '../components/sections/AboutSection.tsx'
import { ReviewsSection } from '../components/sections/ReviewsSection.tsx'
import { FaqSection } from '../components/sections/FaqSection.tsx'
import { OpeningHoursSection } from '../components/sections/OpeningHoursSection.tsx'
import { ContactSection } from '../components/sections/ContactSection.tsx'
import { MapSection } from '../components/sections/MapSection.tsx'
import { useBusinessConfig } from '../hooks/useBusinessConfig.tsx'
import { isWhatsAppReady } from '../utils/isWhatsAppReady.ts'

export function HomePage() {
  useScrollRevealInit()
  const { sections, sectionHeadings, whatsapp, contact } = useBusinessConfig()
  const contactHeading = sectionHeadings.contact
  const mapHeading = sectionHeadings.map
  const whatsAppReady = isWhatsAppReady(whatsapp)
  const hasPhone = contact.phone.trim() !== ''
  const hasActionButtons = whatsAppReady || hasPhone

  return (
    <main>
      {sections.hero && <HeroSection />}
      {sections.about && <AboutSection />}
      {sections.reviews && <ReviewsSection />}
      {sections.faq && <FaqSection />}
      {(sections.openingHours || sections.contact || sections.map) && (
        <div
          id="contact"
          className={`contact-zone-layout section-anchor${hasActionButtons ? '' : ' contact-zone-layout--compact'}`}
        >
          <div className="contact-zone-layout__intro">
            <header
              className={`section-heading contact-zone-layout__heading ${revealClass()}`}
            >
              <h2 className="section-heading__title">
                {contactHeading?.title ?? 'Kontakt'} & {mapHeading?.title ?? 'Anfahrt'}
              </h2>
              {contactHeading?.subtitle && (
                <p className="section-heading__subtitle">{contactHeading.subtitle}</p>
              )}
            </header>
          </div>
          {(sections.openingHours || sections.contact) && (
            <div className="contact-zone-layout__main">
              {sections.openingHours && <OpeningHoursSection />}
              {sections.contact && <ContactSection />}
            </div>
          )}
          {sections.map && <MapSection />}
        </div>
      )}
    </main>
  )
}
