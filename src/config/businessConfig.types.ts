export type Weekday =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday'

export type CtaType = 'phone' | 'whatsapp' | 'link'

export interface LogoConfig {
  src: string
  alt: string
  width?: number
}

export interface ThemeColors {
  primary: string
  primaryHover: string
  secondary: string
  background: string
  surface: string
  text: string
  textHeading: string
  border: string
}

export interface ThemeConfig {
  colors: ThemeColors
}

export interface Address {
  street: string
  zip: string
  city: string
  country: string
}

export interface SocialLinks {
  instagram?: string
  facebook?: string
}

export interface ContactConfig {
  phone: string
  email: string
  address: Address
  social?: SocialLinks
}

export interface WhatsAppConfig {
  enabled: boolean
  phone: string
  defaultMessage: string
  ctaLabel?: string
}

export interface MapsConfig {
  enabled: boolean
  embedUrl: string
  linkUrl?: string
}

export interface NavigationItem {
  id: string
  label: string
  href: string
}

export interface CtaConfig {
  label: string
  href: string
  type: CtaType
}

export interface TrustBarItem {
  id: string
  label: string
  value: string
}

export interface HeroConfig {
  headline: string
  subline: string
  image?: string
  trustBar?: TrustBarItem[]
  ctaPrimary: CtaConfig
  ctaSecondary?: CtaConfig
}

export interface Service {
  id: string
  title: string
  description: string
  icon?: string
  price?: string
}

export interface AboutConfig {
  title: string
  text: string
  image?: string
}

export interface Review {
  id: string
  author: string
  rating: number
  text: string
  date?: string
  source?: string
}

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export interface DaySchedule {
  open: string
  close: string
}

export interface OpeningHoursConfig {
  schedule: Record<Weekday, DaySchedule | null>
  note?: string
}

export interface SeoConfig {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
}

export interface SectionHeadingConfig {
  title: string
  subtitle?: string
}

export interface SectionHeadingsConfig {
  services?: SectionHeadingConfig
  about?: SectionHeadingConfig
  reviews?: SectionHeadingConfig
  faq?: SectionHeadingConfig
  openingHours?: SectionHeadingConfig
  contact?: SectionHeadingConfig
  map?: SectionHeadingConfig
}

export interface SectionsConfig {
  hero: boolean
  services: boolean
  about: boolean
  reviews: boolean
  faq: boolean
  openingHours: boolean
  contact: boolean
  map: boolean
}

export interface IdentityConfig {
  name: string
  tagline: string
  industry: string
  logo: LogoConfig
}

export interface LegalConfig {
  showLegalSections: boolean
  showPlaceholders: boolean
}

export interface BusinessConfig {
  identity: IdentityConfig
  theme: ThemeConfig
  contact: ContactConfig
  whatsapp: WhatsAppConfig
  maps: MapsConfig
  navigation: NavigationItem[]
  hero: HeroConfig
  services: Service[]
  about?: AboutConfig
  reviews: Review[]
  faq: FaqItem[]
  openingHours: OpeningHoursConfig
  seo: SeoConfig
  sections: SectionsConfig
  sectionHeadings: SectionHeadingsConfig
  legal: LegalConfig
}
