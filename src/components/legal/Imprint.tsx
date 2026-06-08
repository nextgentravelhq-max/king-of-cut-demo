import { useBusinessConfig } from '../../hooks/useBusinessConfig.tsx'
import { Container } from '../layout/Container.tsx'
import './legal.css'

export function Imprint() {
  const { identity, contact, legal } = useBusinessConfig()
  const { address } = contact

  return (
    <section id="impressum" className="legal">
      <Container>
        <div className="legal__content">
          <h1 className="legal__title">Impressum</h1>

          <div>
            <h2 className="legal__section-title">Anbieter</h2>
            <p className="legal__text">
              {identity.name}
              <br />
              {address.street}
              <br />
              {address.zip} {address.city}
              <br />
              {address.country}
            </p>
          </div>

          <div>
            <h2 className="legal__section-title">Kontakt</h2>
            <p className="legal__text">
              <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
              <br />
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
          </div>

          {legal.showPlaceholders && (
            <p className="legal__text">
              Platzhalter für weitere Pflichtangaben gemäß § 5 TMG (z. B. Vertretungsberechtigte,
              Registereintrag, USt-IdNr.).
            </p>
          )}
        </div>
      </Container>
    </section>
  )
}
