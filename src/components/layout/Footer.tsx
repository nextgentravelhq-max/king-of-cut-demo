import { useBusinessConfig } from '../../hooks/useBusinessConfig.tsx'
import { revealClass } from '../../hooks/useScrollReveal.ts'
import type { Weekday } from '../../config/businessConfig.types.ts'
import { Container } from './Container.tsx'
import {
  FacebookIcon,
  InstagramIcon,
  LocationIcon,
  PhoneIcon,
} from './FooterIcons.tsx'
import './layout.css'

const WEEKDAY_LABELS: Record<Weekday, string> = {
  monday: 'Montag',
  tuesday: 'Dienstag',
  wednesday: 'Mittwoch',
  thursday: 'Donnerstag',
  friday: 'Freitag',
  saturday: 'Samstag',
  sunday: 'Sonntag',
}

const WEEKDAY_ORDER: Weekday[] = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
]

export function Footer() {
  const { identity, contact, openingHours, legal } = useBusinessConfig()
  const { address } = contact
  const year = new Date().getFullYear()
  const phoneHref = `tel:${contact.phone.replace(/\s/g, '')}`

  return (
    <footer className="footer">
      <Container>
        <div className={`footer__grid ${revealClass(1)}`}>
          <div className="footer__column footer__column--brand">
            <a href="#" className="footer__brand">
              {identity.logo.src && (
                <img
                  src={identity.logo.src}
                  alt={identity.logo.alt}
                  className="footer__brand-logo"
                  width={identity.logo.width}
                />
              )}
            </a>
            {identity.tagline && <p className="footer__tagline">{identity.tagline}</p>}
            {(contact.social?.instagram || contact.social?.facebook) && (
              <div className="footer__social">
                {contact.social?.instagram && (
                  <a
                    href={contact.social.instagram}
                    className="footer__social-button"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Folge uns auf Instagram"
                  >
                    <InstagramIcon className="footer__social-icon" />
                  </a>
                )}
                {contact.social?.facebook && (
                  <a
                    href={contact.social.facebook}
                    className="footer__social-button"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <FacebookIcon className="footer__social-icon" />
                  </a>
                )}
              </div>
            )}
          </div>

          <div className="footer__column">
            <h2 className="footer__title">Öffnungszeiten</h2>
            <div>
              {WEEKDAY_ORDER.map((day) => {
                const schedule = openingHours.schedule[day]
                return (
                  <div key={day} className="footer__hours-row">
                    <span>{WEEKDAY_LABELS[day]}</span>
                    <span>
                      {schedule ? `${schedule.open} – ${schedule.close}` : 'Geschlossen'}
                    </span>
                  </div>
                )
              })}
            </div>
            {openingHours.note && (
              <p className="footer__text footer__note">{openingHours.note}</p>
            )}
          </div>

          <div className="footer__column">
            <h2 className="footer__title">Kontakt</h2>
            <ul className="footer__contact-list">
              <li className="footer__contact-item">
                <PhoneIcon className="footer__contact-icon" />
                <a href={phoneHref}>{contact.phone}</a>
              </li>
              {contact.email.trim() !== '' && (
                <li className="footer__contact-item">
                  <span className="footer__contact-icon footer__contact-icon--spacer" aria-hidden="true" />
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </li>
              )}
              <li className="footer__contact-item">
                <LocationIcon className="footer__contact-icon" />
                <span>
                  {address.street}
                  <br />
                  {address.zip} {address.city}
                  <br />
                  {address.country}
                </span>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <h2 className="footer__title">Rechtliches</h2>
            <p className="footer__text">
              {identity.name}
              <br />
              {address.street}
              <br />
              {address.zip} {address.city}
              <br />
              {address.country}
            </p>
          </div>
        </div>

        <div className="footer__legal">
          {legal.showLegalSections && (
            <p className="footer__text footer__legal-links">
              <a href="/impressum.html">Impressum</a>
              <span aria-hidden="true"> · </span>
              <a href="/datenschutz.html">Datenschutz</a>
            </p>
          )}
          <p className="footer__text">
            © {year} {identity.name}. Alle Rechte vorbehalten.
          </p>
        </div>
      </Container>
    </footer>
  )
}
