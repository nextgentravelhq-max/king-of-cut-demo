import { useBusinessConfig } from '../../hooks/useBusinessConfig.tsx'
import { buildWhatsAppUrl } from '../../utils/buildWhatsAppUrl.ts'
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

  return (
    <Section id="contact" className="contact contact-zone">
      <Container>
        {heading && <SectionHeading title={heading.title} subtitle={heading.subtitle} />}
        <div className="contact__body">
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
            {(whatsapp.enabled || contact.phone.trim() !== '') && (
              <div className="contact__actions">
                {whatsapp.enabled && (
                  <CtaLink
                    href={buildWhatsAppUrl(whatsapp.phone, whatsapp.defaultMessage)}
                    label={whatsapp.ctaLabel?.trim() || 'WhatsApp'}
                    variant="primary"
                    external
                    className="contact__cta cta--compact"
                  />
                )}
                {contact.phone.trim() !== '' && (
                  <CtaLink
                    href={phoneHref}
                    label="Anrufen"
                    variant="secondary"
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
