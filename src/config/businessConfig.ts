import type { BusinessConfig } from './businessConfig.types.ts'

export const businessConfig: BusinessConfig = {
  identity: {
    name: 'King of Cut',
    tagline: 'Professionelle Dienstleistungen für Ihre Region',
    industry: 'local-business',
    logo: {
      src: '/King of Cut.png',
      alt: 'Firmenlogo',
      width: 48,
    },
  },

  theme: {
    colors: {
      primary: '#1a1a1a',
      primaryHover: '#333333',
      secondary: '#c9a227',
      background: '#faf9f7',
      surface: '#ffffff',
      text: '#4a4a4a',
      textHeading: '#1a1a1a',
      border: '#e5e4e0',
    },
  },

  contact: {
    phone: '030 55591169',
    email: '',
    address: {
      street: 'Kameruner Straße 2',
      zip: '13351',
      city: 'Berlin',
      country: 'Deutschland',
    },
    social: {
      instagram: 'https://www.instagram.com/kingofcutali/',
    },
  },

  whatsapp: {
    enabled: true,
    phone: '',
    defaultMessage: '',
    ctaLabel: '',
  },

  maps: {
    enabled: true,
    embedUrl:
      'https://www.google.com/maps?q=Kameruner+Str.+2,+13351+Berlin&output=embed',
    linkUrl: 'https://maps.google.com/?daddr=Kameruner+Str.+2,+13351+Berlin',
  },

  navigation: [
    { id: 'services', label: 'Leistungen', href: '#services' },
    { id: 'reviews', label: 'Bewertungen', href: '#reviews' },
    { id: 'faq', label: 'FAQ', href: '#faq' },
    { id: 'contact', label: 'Kontakt', href: '#contact' },
  ],

  hero: {
    headline: 'Saubere Fades. Klare Schnitte. Ohne Schnickschnack.',
    subline:
      'King of Cut in Berlin-Wedding. Moderne Haarschnitte, präzise Fades und professionelle Bartpflege in entspannter Atmosphäre.',
    image: '/Hero-Bild2.png',
    trustBar: [
      { id: 'rating', label: 'Bewertung', value: '4,9 ★' },
      { id: 'location', label: 'Standort', value: 'Berlin' },
      { id: 'experience', label: 'Erfahrung', value: 'Seit 2018' },
    ],
    ctaPrimary: {
      label: 'Nachricht per WhatsApp',
      href: '#contact',
      type: 'whatsapp',
    },
    ctaSecondary: {
      label: 'Anrufen',
      href: 'tel:+493055591169',
      type: 'phone',
    },
  },

  services: [
    {
      id: 'service-a',
      title: 'Trocken-Haarschnitt',
      description: '',
      icon: '📋',
      price: '18 €',
    },
    {
      id: 'service-b',
      title: 'Komplettpaket (Haare + Bart + Waschen & Föhnen)',
      description: '',
      icon: '✓',
      price: '30 €',
    },
    {
      id: 'service-c',
      title: 'Haare schneiden, waschen & föhnen',
      description: '',
      icon: '◆',
      price: '20 €',
    },
    {
      id: 'service-d',
      title: 'Bartstyling & Rasur',
      description: '',
      icon: '●',
      price: '15 €',
    },
  ],

  about: {
    title: 'Über uns',
    text: 'King of Cut steht für saubere Schnitte, präzise Fades und entspannte Atmosphäre. Ob klassischer Herrenhaarschnitt, moderner Fade oder Bartpflege – hier wird Wert auf Qualität, sauberes Handwerk und persönliche Beratung gelegt. Faire Preise, klare Ergebnisse und ein Look, der zu dir passt.',
    image: '/Hero-Bild.png',
  },

  reviews: [
    {
      id: 'review-1',
      author: 'Ömer Ö.',
      rating: 5,
      text: 'Richtig guter Friseur. Er schneidet sehr sauber und genau und weiß einfach, was er tut. Hört zu, geht auf Wünsche ein und nimmt sich Zeit, statt schnell irgendwas zu machen. Der Laden ist super sauber, modern und mit Stil eingerichtet, man fühlt sich direkt wohl. Insgesamt einfach ein entspannter Besuch mit top Ergebnis. Kann man auf jeden Fall weiterempfehlen.',
      date: '2026-02-08',
      source: 'Google',
    },
    {
      id: 'review-2',
      author: 'Sami A.',
      rating: 5,
      text: 'Bester Friseur. Sehr professionel und zuvorkommend. Mir wurde was zu trinken angeboten. Der Laden sieht einfach mal mega aus',
      date: '2025-10-03',
      source: 'Google',
    },
    {
      id: 'review-3',
      author: 'Mahayub A.',
      rating: 5,
      text: 'King of Cut ist für mich der beste Friseurladen in Berlin. Die Atmosphäre ist sehr gut und man fühlt sich direkt wohl. Alle sind freundlich, respektvoll und gastfreundlich. Die Arbeit ist sauber und professionell, man ist jedes Mal zufrieden. Einfach ein sehr guter Laden, klare Empfehlung',
      date: '2025-09-18',
      source: 'Google',
    },
  ],

  faq: [
    {
      id: 'faq-1',
      question: 'Wie kann ich Sie am besten erreichen?',
      answer:
        'Am schnellsten per WhatsApp oder Telefon. Alternativ senden Sie uns eine E-Mail — wir melden uns zeitnah.',
    },
    {
      id: 'faq-2',
      question: 'Welche Zahlungsmethoden werden akzeptiert?',
      answer: 'Barzahlung, EC-Karte und kontaktlose Zahlung sind möglich.',
    },
    {
      id: 'faq-3',
      question: 'Gibt es Parkmöglichkeiten vor Ort?',
      answer: 'In der Nähe stehen öffentliche Parkplätze zur Verfügung.',
    },
  ],

  openingHours: {
    schedule: {
      monday: { open: '09:00', close: '20:00' },
      tuesday: { open: '09:00', close: '20:00' },
      wednesday: { open: '09:00', close: '20:00' },
      thursday: { open: '09:00', close: '20:00' },
      friday: { open: '09:00', close: '20:00' },
      saturday: { open: '09:00', close: '20:00' },
      sunday: null,
    },
    note: 'An Feiertagen können abweichende Zeiten gelten. Bitte kurz vorher anfragen.',
  },

  seo: {
    title: 'King of Cut Berlin Wedding | Barbershop & Herrenfriseur',
    description:
      'King of Cut in Berlin-Wedding. Moderne Herrenhaarschnitte, präzise Fades und professionelle Bartpflege. Jetzt Termin per WhatsApp anfragen.',
    keywords: [
      'King of Cut',
      'Barbershop Berlin',
      'Friseur Wedding',
      'Fade Berlin',
      'Herrenfriseur Berlin',
      'Bartpflege Berlin',
    ],
    ogImage: '/og-image.png',
  },

  sections: {
    hero: true,
    services: true,
    about: true,
    reviews: true,
    faq: true,
    openingHours: true,
    contact: true,
    map: true,
  },

  sectionHeadings: {
    services: {
      title: 'Leistungen',
      subtitle: 'Ein Überblick über unsere Angebote — transparent und übersichtlich.',
    },
    about: {
      title: 'Über uns',
      subtitle: 'Barbershop an der Kameruner Straße — kurz vorgestellt.',
    },
    reviews: {
      title: 'Bewertungen',
      subtitle: 'Das sagen unsere Kunden.',
    },
    faq: {
      title: 'Häufige Fragen',
      subtitle: 'Kurz und klar beantwortet.',
    },
    openingHours: {
      title: 'Öffnungszeiten',
      subtitle: 'Wann Sie uns erreichen oder besuchen können.',
    },
    contact: {
      title: 'Kontakt',
      subtitle: 'So erreichen Sie uns am schnellsten.',
    },
    map: {
      title: 'Anfahrt',
      subtitle: 'So finden Sie uns vor Ort.',
    },
  },

  legal: {
    showLegalSections: true,
    showPlaceholders: true,
  },
}
