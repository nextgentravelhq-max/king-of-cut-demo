import { useBusinessConfig } from '../../hooks/useBusinessConfig.tsx'
import { revealClass, revealStaggerClass } from '../../hooks/useScrollReveal.ts'
import { menuConfig } from '../../config/menuConfig.ts'
import { SectionHeading } from '../ui/SectionHeading.tsx'
import { Container } from '../layout/Container.tsx'
import { Section } from '../layout/Section.tsx'
import './sections.css'

export function ServicesSection() {
  const { sectionHeadings } = useBusinessConfig()
  const { categories } = menuConfig

  const allItems = categories.flatMap((cat) => cat.items)
  if (allItems.length === 0) {
    return null
  }

  const heading = sectionHeadings.services

  return (
    <Section className="services">
      <Container>
        {heading && (
          <SectionHeading
            title={heading.title}
            subtitle={heading.subtitle}
            className={revealClass()}
          />
        )}
        <ul className="services__list">
          {allItems.map((item, index) => (
            <li key={item.id} className={`services__item ${revealStaggerClass(index)}`}>
              <div className="services__row">
                <div className="services__content">
                  <h3 className="services__title">{item.title}</h3>
                  {item.description && (
                    <p className="services__description">{item.description}</p>
                  )}
                </div>
                {item.price && (
                  <span className="services__price">{item.price}</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
