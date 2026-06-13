import { useEffect, useState, type MouseEvent } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useBusinessConfig } from '../../hooks/useBusinessConfig.tsx'
import { buildWhatsAppUrl } from '../../utils/buildWhatsAppUrl.ts'
import { isWhatsAppReady } from '../../utils/isWhatsAppReady.ts'
import { CtaLink } from '../ui/CtaLink.tsx'
import { Container } from './Container.tsx'
import './layout.css'

const NAV_ID = 'header-nav'

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

function isRouteLink(href: string): boolean {
  return href.startsWith('/')
}

const HOME_PATH = '/'

export function Header() {
  const { identity, navigation, whatsapp, contact } = useBusinessConfig()
  const location = useLocation()
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  // Scroll to section after navigating home from another page
  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null
    if (location.pathname === HOME_PATH && state?.scrollTo) {
      requestAnimationFrame(() => {
        scrollToSection(state.scrollTo!)
        navigate(HOME_PATH, { replace: true, state: {} })
      })
    }
  }, [location, navigate])

  // Clear active state when leaving the home page
  useEffect(() => {
    if (location.pathname !== HOME_PATH) {
      setActiveSection('')
    }
  }, [location.pathname])

  // Track which section is in the viewport via IntersectionObserver
  useEffect(() => {
    if (location.pathname !== HOME_PATH) {
      return
    }

    const hashSectionIds = navigation
      .filter((item) => item.href.startsWith('#'))
      .map((item) => item.href.slice(1))

    const elements = hashSectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) {
      return
    }

    const visible = new Set<string>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.add(entry.target.id)
          } else {
            visible.delete(entry.target.id)
          }
        }
        // First section in document order wins
        const active = hashSectionIds.find((id) => visible.has(id))
        setActiveSection(active ? `#${active}` : '')
      },
      // Trigger when a section enters/leaves the top ~30% of the viewport
      { rootMargin: '-15% 0px -70% 0px', threshold: 0 },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [location.pathname, navigation])

  const handleHashClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMenuOpen(false)
    event.preventDefault()

    const sectionId = href.slice(1)

    if (location.pathname !== HOME_PATH) {
      navigate(HOME_PATH, { state: { scrollTo: sectionId } })
      return
    }

    // Give instant visual feedback; observer will confirm once scrolling settles
    setActiveSection(href)
    clearUrlHash()
    requestAnimationFrame(() => scrollToSection(sectionId))
  }

  const handleRouteClick = () => {
    setIsMenuOpen(false)
  }

  const isNavActive = (href: string): boolean => {
    if (isRouteLink(href)) {
      return location.pathname === href
    }
    return activeSection === href
  }

  const whatsAppReady = isWhatsAppReady(whatsapp)
  const hasPhone = contact.phone.trim() !== ''

  const waLabel = whatsapp.ctaLabel?.trim() || 'WhatsApp'

  const renderCta = () => {
    if (whatsAppReady) {
      return (
        <CtaLink
          href={buildWhatsAppUrl(whatsapp.phone, whatsapp.defaultMessage)}
          label={waLabel}
          variant="secondary"
          external
          className="header__cta cta--compact"
        />
      )
    }
    if (hasPhone) {
      return (
        <CtaLink
          href={`tel:${contact.phone.replace(/\s/g, '')}`}
          label="Anrufen"
          variant="primary"
          className="header__cta cta--compact"
        />
      )
    }
    return null
  }

  const renderMobileCta = () => {
    if (!whatsAppReady && !hasPhone) return null

    const href = whatsAppReady
      ? buildWhatsAppUrl(whatsapp.phone, whatsapp.defaultMessage)
      : `tel:${contact.phone.replace(/\s/g, '')}`
    const rawLabel = whatsAppReady ? waLabel : 'Anrufen'
    const external = whatsAppReady

    const breakAt = rawLabel.indexOf(' per ')
    const label =
      breakAt === -1 ? (
        rawLabel
      ) : (
        <>
          {rawLabel.slice(0, breakAt)}
          <br />
          {rawLabel.slice(breakAt + 1)}
        </>
      )

    return (
      <a
        href={href}
        className={`header__cta cta ${whatsAppReady ? 'cta--secondary' : 'cta--primary'} cta--compact`}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
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

            <Link
              to="/"
              className={
                identity.logo.src ? 'header__brand header__brand--logo' : 'header__brand'
              }
              onClick={() => {
                if (location.pathname === HOME_PATH) {
                  window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
                }
              }}
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
            </Link>

            <div className="header__mobile-cta">{renderMobileCta()}</div>
          </div>

          <nav
            id={NAV_ID}
            className={`header__nav${isMenuOpen ? ' header__nav--open' : ''}`}
            aria-label="Hauptnavigation"
          >
            {navigation.map((item) =>
              isRouteLink(item.href) ? (
                <Link
                  key={item.id}
                  to={item.href}
                  className={
                    isNavActive(item.href)
                      ? 'header__nav-link header__nav-link--active'
                      : 'header__nav-link'
                  }
                  aria-current={isNavActive(item.href) ? 'page' : undefined}
                  onClick={handleRouteClick}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.id}
                  href={item.href}
                  className={
                    isNavActive(item.href)
                      ? 'header__nav-link header__nav-link--active'
                      : 'header__nav-link'
                  }
                  aria-current={isNavActive(item.href) ? 'page' : undefined}
                  onClick={(event) => handleHashClick(event, item.href)}
                >
                  {item.label}
                </a>
              ),
            )}
          </nav>

          <div className="header__desktop-cta">{renderCta()}</div>
        </div>
      </Container>
    </header>
  )
}
