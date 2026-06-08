import { useBusinessConfig } from '../../hooks/useBusinessConfig.tsx'
import { Container } from '../layout/Container.tsx'
import './legal.css'

export function PrivacyPolicy() {
  const { identity, contact, legal } = useBusinessConfig()

  return (
    <section id="datenschutz" className="legal">
      <Container>
        <div className="legal__content">
          <h1 className="legal__title">Datenschutz</h1>

          {legal.showPlaceholders && (
            <p className="legal__text">
              Diese Datenschutzerklärung ist ein Platzhalter für {identity.name}. Bitte ergänzen Sie
              hier die vollständigen Informationen zur Verarbeitung personenbezogener Daten.
            </p>
          )}

          <div>
            <h2 className="legal__section-title">Verantwortliche Stelle</h2>
            <p className="legal__text">
              {identity.name}
              <br />
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
          </div>

          {legal.showPlaceholders && (
            <div>
              <h2 className="legal__section-title">Hinweise (Platzhalter)</h2>
              <ul className="legal__list">
                <li>Zweck und Rechtsgrundlage der Datenverarbeitung</li>
                <li>Speicherdauer und betroffene Datenkategorien</li>
                <li>Rechte der betroffenen Personen</li>
                <li>Kontakt für Datenschutzanfragen</li>
              </ul>
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}
