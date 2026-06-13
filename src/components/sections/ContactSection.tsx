import { useBusinessConfig } from '../../hooks/useBusinessConfig.tsx'
import { revealClass } from '../../hooks/useScrollReveal.ts'
import { buildWhatsAppUrl } from '../../utils/buildWhatsAppUrl.ts'
import { isWhatsAppReady } from '../../utils/isWhatsAppReady.ts'
import { CtaLink } from '../ui/CtaLink.tsx'
import { SectionHeading } from '../ui/SectionHeading.tsx'
import { Container } from '../layout/Container.tsx'
import { Section } from '../layout/Section.tsx'
import './sections.css'

export function ContactSection() {
  const { contact, whatsapp, sectionHeadings } = useBusinessConfig()
  const { address } = contact
  const phoneHref = `tel:${contact.phone.replace(/\s/g, '')}`
  const heading = sectionHeadings.contact
  const whatsAppReady = isWhatsAppReady(whatsapp)
  const hasPhone = contact.phone.trim() !== ''

  console.log(
    'DEBUG: hasPhone:', hasPhone,
    'whatsAppReady:', whatsAppReady,
    'shouldShowActions:', whatsAppReady || hasPhone,
    '| raw phone value:', JSON.stringify(contact.phone),
    '| whatsapp config:', JSON.stringify(whatsapp),
  )

  return (
    <Section className="contact contact-zone">
      <Container>
        {heading && <SectionHeading title={heading.title} subtitle={heading.subtitle} />}
        <div className={`contact__body ${revealClass(2)}`}>
          <div className="contact__details">
            <p className="contact__item">
              <a href={phoneHref} className="contact__link">
                {contact.phone}
              </a>
            </p>
            {contact.email.trim() !== '' && (
              <p className="contact__item">
                <a href={`mailto:${contact.email}`} className="contact__link">
                  {contact.email}
                </a>
              </p>
            )}
            <address className="contact__address">
              {address.street}
              <br />
              {address.zip} {address.city}
              <br />
              {address.country}
            </address>
            {(contact.social?.instagram || contact.social?.facebook) && (
              <div className="contact__social">
                {contact.social?.instagram && (
                  <a
                    href={contact.social.instagram}
                    className="contact__social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Folge uns auf Instagram
                  </a>
                )}
                {contact.social?.facebook && (
                  <a
                    href={contact.social.facebook}
                    className="contact__social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                )}
              </div>
            )}
            {/* Hier wird der Container nur gerendert, wenn einer der beiden aktiv ist */}
            {(whatsAppReady || hasPhone) && (
              <div className="contact__actions">
                {whatsAppReady && (
                  <CtaLink
                    href={buildWhatsAppUrl(whatsapp.phone, whatsapp.defaultMessage)}
                    label={whatsapp.ctaLabel?.trim() || 'WhatsApp'}
                    variant="secondary"
                    external
                    className="contact__cta cta--compact"
                  />
                )}
                {hasPhone && (
                  <CtaLink
                    href={phoneHref}
                    label="Anrufen"
                    variant="primary"
                    className="contact__cta cta--compact"
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  )
}