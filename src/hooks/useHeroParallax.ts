import { useEffect, type RefObject } from 'react'

const DESKTOP_MAX_OFFSET = 22
const MOBILE_MAX_OFFSET = 10
const MOBILE_BREAKPOINT = '(max-width: 767px)'

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function getMaxOffset(): number {
  return window.matchMedia(MOBILE_BREAKPOINT).matches
    ? MOBILE_MAX_OFFSET
    : DESKTOP_MAX_OFFSET
}

function setImageTransform(image: HTMLImageElement, offsetY: number) {
  image.style.transform = `translate3d(0, ${offsetY}px, 0) scale(1.04)`
}

function resetImageTransform(image: HTMLImageElement) {
  image.style.transform = ''
}

export function useHeroParallax(
  imageRef: RefObject<HTMLImageElement | null>,
  enabled: boolean,
) {
  useEffect(() => {
    if (!enabled || prefersReducedMotion()) {
      return
    }

    const image = imageRef.current
    if (!image) {
      return
    }

    const section = image.closest('#hero')
    if (!(section instanceof HTMLElement)) {
      return
    }

    let ticking = false
    let frameId = 0

    const update = () => {
      ticking = false
      const rect = section.getBoundingClientRect()
      const viewportHeight = window.innerHeight

      if (rect.bottom <= 0 || rect.top >= viewportHeight) {
        setImageTransform(image, 0)
        return
      }

      const scrolledPastTop = Math.max(0, -rect.top)
      const scrollRange = Math.max(rect.height, 1)
      const progress = Math.min(scrolledPastTop / scrollRange, 1)
      const offsetY = progress * getMaxOffset()

      setImageTransform(image, offsetY)
    }

    const scheduleUpdate = () => {
      if (ticking) {
        return
      }

      ticking = true
      frameId = requestAnimationFrame(update)
    }

    frameId = requestAnimationFrame(update)

    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate, { passive: true })

    return () => {
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      cancelAnimationFrame(frameId)
      resetImageTransform(image)
    }
  }, [enabled, imageRef])
}
