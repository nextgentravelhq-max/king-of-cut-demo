import { useEffect, useState, type MouseEvent } from 'react'
import { useBusinessConfig } from '../../hooks/useBusinessConfig.tsx'
import { buildWhatsAppUrl } from '../../utils/buildWhatsAppUrl.ts'
import { CtaLink } from '../ui/CtaLink.tsx'
import { Container } from './Container.tsx'
import './layout.css'

const NAV_ID = 'header-nav'

function isInternalHashLink(href: string): boolean {
  return href.startsWith('#') && href.length > 1
}

function clearUrlHash() {
  const { pathname, search } = window.location
  history.replaceState(null, '', `${pathname}${search}`)
}

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function scrollToSection(sectionId: string) {
  const target = document.getElementById(sectionId)
  if (!target) {
    return
  }

  target.scrollIntoView({
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    block: 'start',
  })
}

export function Header() {
  const { identity, navigation, whatsapp, contact, hero } = useBusinessConfig()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const hash = window.location.hash
    if (!isInternalHashLink(hash)) {
      return
    }

    requestAnimationFrame(() => {
      scrollToSection(hash.slice(1))
      setActiveSection(hash)
      clearUrlHash()
    })
  }, [])

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMenuOpen(false)

    if (!isInternalHashLink(href)) {
      return
    }

    event.preventDefault()
    setActiveSection(href)
    clearUrlHash()

    const sectionId = href.slice(1)

    requestAnimationFrame(() => {
      scrollToSection(sectionId)
    })
  }

  const cta = whatsapp.enabled
    ? {
        href: buildWhatsAppUrl(whatsapp.phone, whatsapp.defaultMessage),
        label: hero.ctaPrimary.type === 'whatsapp' ? hero.ctaPrimary.label : 'WhatsApp',
        external: true,
      }
    : {
        href: `tel:${contact.phone.replace(/\s/g, '')}`,
        label: 'Anrufen',
        external: false,
      }

  const renderCta = () => (
    <CtaLink
      href={cta.href}
      label={cta.label}
      variant="primary"
      external={cta.external}
      className="header__cta cta--compact"
    />
  )

  const renderMobileCta = () => {
    const breakAt = cta.label.indexOf(' per ')
    const label =
      breakAt === -1 ? (
        cta.label
      ) : (
        <>
          {cta.label.slice(0, breakAt)}
          <br />
          {cta.label.slice(breakAt + 1)}
        </>
      )

    return (
      <a
        href={cta.href}
        className="header__cta cta cta--primary cta--compact"
        target={cta.external ? '_blank' : undefined}
        rel={cta.external ? 'noopener noreferrer' : undefined}
      >
        {label}
      </a>
    )
  }

  return (
    <header className="header">
      <Container className="header__container">
        <div className="header__inner">
          <div className="header__top">
            <button
              type="button"
              className="header__menu-toggle"
              aria-expanded={isMenuOpen}
              aria-controls={NAV_ID}
              aria-label="Menü"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <span className="header__menu-bar" aria-hidden="true" />
              <span className="header__menu-bar" aria-hidden="true" />
              <span className="header__menu-bar" aria-hidden="true" />
            </button>

            <a
              href="#"
              className={
                identity.logo.src ? 'header__brand header__brand--logo' : 'header__brand'
              }
            >
              {identity.logo.src ? (
                <span className="header__brand-logo-wrap">
                  <img
                    src={identity.logo.src}
                    alt={identity.logo.alt}
                    className="header__brand-logo"
                  />
                </span>
              ) : (
                <span className="header__brand-name">{identity.name}</span>
              )}
            </a>

            <div className="header__mobile-cta">{renderMobileCta()}</div>
          </div>

          <nav
            id={NAV_ID}
            className={`header__nav${isMenuOpen ? ' header__nav--open' : ''}`}
            aria-label="Hauptnavigation"
          >
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={
                  activeSection === item.href
                    ? 'header__nav-link header__nav-link--active'
                    : 'header__nav-link'
                }
                aria-current={activeSection === item.href ? 'page' : undefined}
                onClick={(event) => handleNavClick(event, item.href)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header__desktop-cta">{renderCta()}</div>
        </div>
      </Container>
    </header>
  )
}
