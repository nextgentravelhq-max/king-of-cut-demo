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
    enabled: false,
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
    { id: 'services', label: 'Leistungen', href: '/leistungen' },
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
      source: 'https://www.google.com/search?sa=X&sca_esv=01b16418dc22f4d7&sxsrf=ANbL-n4CENLEkjekH7HhMWZvVc1NJsqFRg:1781320194774&q=King+of+Cut+Rezensionen&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDI2NDOysDQyMjY1NDa3MLIwMNjAyPiKUdw7My9dIT9Nwbm0RCEotSo1rzgzPy81bxErLhkARLcU7U8AAAA&rldimm=12316289223513782800&tbm=lcl&hl=de-DE&ved=2ahUKEwj99MLrnoOVAxUmSvEDHfG2HjAQ9fQKegQISxAG&biw=1920&bih=945&dpr=1#lkt=LocalPoiReviews',
    },
    {
      id: 'review-2',
      author: 'Sami A.',
      rating: 5,
      text: 'Bester Friseur. Sehr professionel und zuvorkommend. Mir wurde was zu trinken angeboten. Der Laden sieht einfach mal mega aus',
      source: 'https://www.google.com/search?sa=X&sca_esv=01b16418dc22f4d7&sxsrf=ANbL-n4CENLEkjekH7HhMWZvVc1NJsqFRg:1781320194774&q=King+of+Cut+Rezensionen&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDI2NDOysDQyMjY1NDa3MLIwMNjAyPiKUdw7My9dIT9Nwbm0RCEotSo1rzgzPy81bxErLhkARLcU7U8AAAA&rldimm=12316289223513782800&tbm=lcl&hl=de-DE&ved=2ahUKEwj99MLrnoOVAxUmSvEDHfG2HjAQ9fQKegQISxAG&biw=1920&bih=945&dpr=1#lkt=LocalPoiReviews',
    },
    {
      id: 'review-3',
      author: 'Mahayub A.',
      rating: 5,
      text: 'King of Cut ist für mich der beste Friseurladen in Berlin. Die Atmosphäre ist sehr gut und man fühlt sich direkt wohl. Alle sind freundlich, respektvoll und gastfreundlich. Die Arbeit ist sauber und professionell, man ist jedes Mal zufrieden. Einfach ein sehr guter Laden, klare Empfehlung',
      source: 'https://www.google.com/search?sa=X&sca_esv=01b16418dc22f4d7&sxsrf=ANbL-n4CENLEkjekH7HhMWZvVc1NJsqFRg:1781320194774&q=King+of+Cut+Rezensionen&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDI2NDOysDQyMjY1NDa3MLIwMNjAyPiKUdw7My9dIT9Nwbm0RCEotSo1rzgzPy81bxErLhkARLcU7U8AAAA&rldimm=12316289223513782800&tbm=lcl&hl=de-DE&ved=2ahUKEwj99MLrnoOVAxUmSvEDHfG2HjAQ9fQKegQISxAG&biw=1920&bih=945&dpr=1#lkt=LocalPoiReviews',
    },
    {
      id: 'review-4',
      author: 'Batuhan Y.',
      rating: 5,
      text: 'Der beste Friseurladen überhaupt, empfehlenswert! Ein wunderschöner Laden mit einem neuen Design. Die Mitarbeiter sind Top, freundlich und sehr sympathisch. Sauberkeit und Hygiene wird hier im Laden groß geschrieben. Im Sommer wird der Laden auch Klimatisiert und damit hat man einen sehr angenehmen Aufenthalt im laden. Kommt vorbei!!!',
      source: 'https://www.google.com/search?sa=X&sca_esv=01b16418dc22f4d7&sxsrf=ANbL-n4CENLEkjekH7HhMWZvVc1NJsqFRg:1781320194774&q=King+of+Cut+Rezensionen&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDI2NDOysDQyMjY1NDa3MLIwMNjAyPiKUdw7My9dIT9Nwbm0RCEotSo1rzgzPy81bxErLhkARLcU7U8AAAA&rldimm=12316289223513782800&tbm=lcl&hl=de-DE&ved=2ahUKEwj99MLrnoOVAxUmSvEDHfG2HjAQ9fQKegQISxAG&biw=1920&bih=945&dpr=1#lkt=LocalPoiReviews',
    },
    {
      id: 'review-5',
      author: 'E G.',
      rating: 5,
      text: 'So lange so einen guten Friseur gesucht. Ich fahre dafür alle zwei Wochen aus Süd-Neukölln hier her. Einfach der zuverlässig beste Friseur der Stadt. Nicht umsonst heißt es KING of Cut',
      source: 'https://www.google.com/search?sa=X&sca_esv=01b16418dc22f4d7&sxsrf=ANbL-n4CENLEkjekH7HhMWZvVc1NJsqFRg:1781320194774&q=King+of+Cut+Rezensionen&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDI2NDOysDQyMjY1NDa3MLIwMNjAyPiKUdw7My9dIT9Nwbm0RCEotSo1rzgzPy81bxErLhkARLcU7U8AAAA&rldimm=12316289223513782800&tbm=lcl&hl=de-DE&ved=2ahUKEwj99MLrnoOVAxUmSvEDHfG2HjAQ9fQKegQISxAG&biw=1920&bih=945&dpr=1#lkt=LocalPoiReviews',
    },
    {
      id: 'review-6',
      author: 'Hassan M.',
      rating: 5,
      text: 'Als langjähriger Kunde von King of Cut kann ich nur Positives berichten. Die Zuverlässigkeit des gesamten Teams ist bemerkenswert; Termine werden stets pünktlich eingehalten. Nach der Renovierung hat sich die Atmosphäre enorm verbessert – der Salon strahlt nun eine einladende und gemütliche Stimmung aus, die zum Verweilen einlädt. Die Friseure sind nicht nur äußerst kompetent, sondern auch freundlich und herzlich. Man fühlt sich sofort wohl und gut aufgehoben. Die Qualität der Haarschnitte und -stylings ist herausragend. Ich verlasse den Salon immer mit einem breiten Lächeln und dem Gefühl, dass ich genau das bekommen habe, was ich mir gewünscht habe. Auch die Beratung ist top & hier wird auf die individuellen Wünsche und Bedürfnisse eingegangen. Ich kann King of Cut nur wärmstens empfehlen!',
      source: 'https://www.google.com/search?sa=X&sca_esv=01b16418dc22f4d7&sxsrf=ANbL-n4CENLEkjekH7HhMWZvVc1NJsqFRg:1781320194774&q=King+of+Cut+Rezensionen&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDI2NDOysDQyMjY1NDa3MLIwMNjAyPiKUdw7My9dIT9Nwbm0RCEotSo1rzgzPy81bxErLhkARLcU7U8AAAA&rldimm=12316289223513782800&tbm=lcl&hl=de-DE&ved=2ahUKEwj99MLrnoOVAxUmSvEDHfG2HjAQ9fQKegQISxAG&biw=1920&bih=945&dpr=1#lkt=LocalPoiReviews',
    },
    {
      id: 'review-7',
      author: 'Fatih Mert S.',
      rating: 5,
      text: 'Ich bin schon seit mehr als 6 Jahren Kunde bei KingofCut und muss sagen das der Service und Umgang mit den Kunden makellos ist. Meine wünsche wurden immer berücksichtigt und makellos umgesetzt. Alle Friseure in dem Laden schneiden perfekt wenn ich jedoch einen empfehlen müsste wäre es Asmer !',
      source: 'https://www.google.com/search?sa=X&sca_esv=01b16418dc22f4d7&sxsrf=ANbL-n4CENLEkjekH7HhMWZvVc1NJsqFRg:1781320194774&q=King+of+Cut+Rezensionen&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDI2NDOysDQyMjY1NDa3MLIwMNjAyPiKUdw7My9dIT9Nwbm0RCEotSo1rzgzPy81bxErLhkARLcU7U8AAAA&rldimm=12316289223513782800&tbm=lcl&hl=de-DE&ved=2ahUKEwj99MLrnoOVAxUmSvEDHfG2HjAQ9fQKegQISxAG&biw=1920&bih=945&dpr=1#lkt=LocalPoiReviews',
    },
    {
      id: 'review-8',
      author: 'Wiam El G.',
      rating: 5,
      text: 'Ich freue mich immer wieder hier zu sein eine super Atmosphäre , nach einem Haarschnitt hier fühlt man sich wie neu geboren ich kann das Lokal nur weiter empfehlen',
      source: 'https://www.google.com/search?sa=X&sca_esv=01b16418dc22f4d7&sxsrf=ANbL-n4CENLEkjekH7HhMWZvVc1NJsqFRg:1781320194774&q=King+of+Cut+Rezensionen&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDI2NDOysDQyMjY1NDa3MLIwMNjAyPiKUdw7My9dIT9Nwbm0RCEotSo1rzgzPy81bxErLhkARLcU7U8AAAA&rldimm=12316289223513782800&tbm=lcl&hl=de-DE&ved=2ahUKEwj99MLrnoOVAxUmSvEDHfG2HjAQ9fQKegQISxAG&biw=1920&bih=945&dpr=1#lkt=LocalPoiReviews',
    },
    {
      id: 'review-9',
      author: 'Ayu WD',
      rating: 5,
      text: 'Er wusste sofort, was ich wollte, ohne lange erklären zu müssen. Sehr professionell, sauber gearbeitet und dabei super nett. Man fühlt sich direkt wohl. War so zufrieden, dass ich ihm am Ende noch 5 € Trinkgeld gegeben habe.',
      source: 'https://www.google.com/search?sa=X&sca_esv=01b16418dc22f4d7&sxsrf=ANbL-n4CENLEkjekH7HhMWZvVc1NJsqFRg:1781320194774&q=King+of+Cut+Rezensionen&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDI2NDOysDQyMjY1NDa3MLIwMNjAyPiKUdw7My9dIT9Nwbm0RCEotSo1rzgzPy81bxErLhkARLcU7U8AAAA&rldimm=12316289223513782800&tbm=lcl&hl=de-DE&ved=2ahUKEwj99MLrnoOVAxUmSvEDHfG2HjAQ9fQKegQISxAG&biw=1920&bih=945&dpr=1#lkt=LocalPoiReviews',
    },
    {
      id: 'review-10',
      author: 'Ihab N.',
      rating: 5,
      text: 'Ich war rundum zufrieden! Der Salon ist modern und sauber, das Team super freundlich und aufmerksam. Mein Haarschnitt ist genau so geworden, wie ich es mir vorgestellt habe & man merkt, dass hier echte Profis am Werk sind. Besonders die Beratung war top. Ich komme auf jeden Fall wieder!',
      source: 'https://www.google.com/search?sa=X&sca_esv=01b16418dc22f4d7&sxsrf=ANbL-n4CENLEkjekH7HhMWZvVc1NJsqFRg:1781320194774&q=King+of+Cut+Rezensionen&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDI2NDOysDQyMjY1NDa3MLIwMNjAyPiKUdw7My9dIT9Nwbm0RCEotSo1rzgzPy81bxErLhkARLcU7U8AAAA&rldimm=12316289223513782800&tbm=lcl&hl=de-DE&ved=2ahUKEwj99MLrnoOVAxUmSvEDHfG2HjAQ9fQKegQISxAG&biw=1920&bih=945&dpr=1#lkt=LocalPoiReviews',
    },
  ],

  faq: [
    {
      id: 'faq-1',
      question: 'Wie kann ich Sie am besten erreichen?',
      answer:
        'Am schnellsten per Telefon. Einfach anrufen und einen Termin vereinbaren.',
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
