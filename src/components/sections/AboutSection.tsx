import { useBusinessConfig } from '../../hooks/useBusinessConfig.tsx'
import { revealClass } from '../../hooks/useScrollReveal.ts'
import { SectionHeading } from '../ui/SectionHeading.tsx'
import { Container } from '../layout/Container.tsx'
import { Section } from '../layout/Section.tsx'
import './sections.css'

export function AboutSection() {
  const { about, sectionHeadings } = useBusinessConfig()

  if (!about) {
    return null
  }

  const heading = sectionHeadings.about ?? { title: about.title }

  const gridClassName = about.image
    ? 'about__grid about__grid--with-image'
    : 'about__grid'

  return (
    <Section id="about" className="about">
      <Container>
        <div className={gridClassName}>
          <div className="about__content">
            <SectionHeading
              title={heading.title}
              subtitle={heading.subtitle}
              className={revealClass()}
            />
            <p className={`about__text ${revealClass(1)}`}>{about.text}</p>
          </div>
          {about.image && (
            <div className={`about__media ${revealClass(2)}`}>
              <img
                src={about.image}
                alt={about.title}
                className="about__image"
                loading="lazy"
              />
            </div>
          )}
        </div>
      </Container>
    </Section>
  )
}
