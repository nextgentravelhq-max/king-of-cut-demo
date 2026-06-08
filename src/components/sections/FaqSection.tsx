import { useBusinessConfig } from '../../hooks/useBusinessConfig.tsx'
import { SectionHeading } from '../ui/SectionHeading.tsx'
import { Container } from '../layout/Container.tsx'
import { Section } from '../layout/Section.tsx'
import './sections.css'

export function FaqSection() {
  const { faq, sectionHeadings } = useBusinessConfig()

  if (faq.length === 0) {
    return null
  }

  const heading = sectionHeadings.faq

  return (
    <Section id="faq" className="faq">
      <Container>
        {heading && <SectionHeading title={heading.title} subtitle={heading.subtitle} />}
        <div className="faq__list">
          {faq.map((item) => (
            <details key={item.id} className="faq__item">
              <summary className="faq__question">
                <span className="faq__question-text">{item.question}</span>
                <span className="faq__icon" aria-hidden="true" />
              </summary>
              <p className="faq__answer">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  )
}
