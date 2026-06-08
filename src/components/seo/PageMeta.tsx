import { useEffect } from 'react'
import { useBusinessConfig } from '../../hooks/useBusinessConfig.tsx'

function setMetaTag(
  attribute: 'name' | 'property',
  key: string,
  content: string,
): void {
  const selector = `meta[${attribute}="${key}"]`
  let element = document.querySelector<HTMLMetaElement>(selector)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

function removeMetaTag(attribute: 'name' | 'property', key: string): void {
  document.querySelector(`meta[${attribute}="${key}"]`)?.remove()
}

export function PageMeta() {
  const { seo } = useBusinessConfig()

  useEffect(() => {
    document.title = seo.title
    setMetaTag('name', 'description', seo.description)
    setMetaTag('property', 'og:title', seo.title)
    setMetaTag('property', 'og:description', seo.description)

    if (seo.keywords?.length) {
      setMetaTag('name', 'keywords', seo.keywords.join(', '))
    } else {
      removeMetaTag('name', 'keywords')
    }

    if (seo.ogImage) {
      setMetaTag('property', 'og:image', seo.ogImage)
    } else {
      removeMetaTag('property', 'og:image')
    }
  }, [seo])

  return null
}
