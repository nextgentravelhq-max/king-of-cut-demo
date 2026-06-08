import { useBusinessConfig } from '../../hooks/useBusinessConfig.tsx'
import { revealClass, revealStaggerClass } from '../../hooks/useScrollReveal.ts'
import { SectionHeading } from '../ui/SectionHeading.tsx'
import { Container } from '../layout/Container.tsx'
import { Section } from '../layout/Section.tsx'
import './sections.css'

export function ServicesSection() {
  const { services, sectionHeadings } = useBusinessConfig()

  if (services.length === 0) {
    return null
  }

  const heading = sectionHeadings.services

  return (
    <Section id="services" className="services section-anchor">
      <Container>
        {heading && (
          <SectionHeading
            title={heading.title}
            subtitle={heading.subtitle}
            className={revealClass()}
          />
        )}
        <ul className="services__list">
          {services.map((service, index) => (
            <li key={service.id} className={`services__item ${revealStaggerClass(index)}`}>
              <div className="services__row">
                <div className="services__content">
                  <h3 className="services__title">{service.title}</h3>
                  {service.description && (
                    <p className="services__description">{service.description}</p>
                  )}
                </div>
                {service.price && (
                  <span className="services__price">{service.price}</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
