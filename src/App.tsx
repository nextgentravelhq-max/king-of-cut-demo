import { revealClass, useScrollRevealInit } from './hooks/useScrollReveal.ts'
import { Header } from './components/layout/Header.tsx'
import { Footer } from './components/layout/Footer.tsx'
import { HeroSection } from './components/sections/HeroSection.tsx'
import { ServicesSection } from './components/sections/ServicesSection.tsx'
import { AboutSection } from './components/sections/AboutSection.tsx'
import { ReviewsSection } from './components/sections/ReviewsSection.tsx'
import { FaqSection } from './components/sections/FaqSection.tsx'
import { OpeningHoursSection } from './components/sections/OpeningHoursSection.tsx'
import { ContactSection } from './components/sections/ContactSection.tsx'
import { MapSection } from './components/sections/MapSection.tsx'
import { PageMeta } from './components/seo/PageMeta.tsx'
import { useBusinessConfig } from './hooks/useBusinessConfig.tsx'

function App() {
  useScrollRevealInit()
  const { sections, sectionHeadings } = useBusinessConfig()
  const contactHeading = sectionHeadings.contact
  const mapHeading = sectionHeadings.map

  return (
    <>
      <PageMeta />
      <Header />
      <main>
        {sections.hero && <HeroSection />}
        {sections.services && <ServicesSection />}
        {sections.about && <AboutSection />}
        {sections.reviews && <ReviewsSection />}
        {sections.faq && <FaqSection />}
        {(sections.openingHours || sections.contact || sections.map) && (
          <div id="contact" className="contact-zone-layout section-anchor">
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
      <Footer />
    </>
  )
}

export default App
