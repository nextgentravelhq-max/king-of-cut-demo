import { useEffect } from 'react'

export type RevealDelay = 0 | 1 | 2 | 3

const REVEAL_SELECTOR = '.reveal'
const REVEAL_THRESHOLD = 0.15

export function revealClass(delay: RevealDelay = 0): string {
  return delay === 0 ? 'reveal' : `reveal reveal-delay-${delay}`
}

export function revealStaggerClass(index: number): string {
  const delay = ((index % 3) + 1) as 1 | 2 | 3
  return `reveal reveal-delay-${delay}`
}

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function revealImmediately(elements: Iterable<Element>) {
  for (const element of elements) {
    element.classList.add('reveal--visible')
  }
}

export function useScrollRevealInit() {
  useEffect(() => {
    const elements = document.querySelectorAll(REVEAL_SELECTOR)

    if (elements.length === 0) {
      return
    }

    if (prefersReducedMotion()) {
      revealImmediately(elements)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.intersectionRatio >= REVEAL_THRESHOLD) {
            entry.target.classList.add('reveal--visible')
          } else if (entry.intersectionRatio === 0) {
            entry.target.classList.remove('reveal--visible')
          }
        }
      },
      {
        threshold: [0, REVEAL_THRESHOLD],
        rootMargin: '0px 0px -8% 0px',
      },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])
}
