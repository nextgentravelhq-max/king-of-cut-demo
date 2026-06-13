import type { WhatsAppConfig } from '../config/businessConfig.types.ts'

/**
 * Returns true only when WhatsApp is enabled AND the phone number
 * contains at least 10 digits (ignoring formatting characters like +, spaces, dashes).
 * Treats empty strings, short placeholders, and incomplete numbers as false.
 */
export function isWhatsAppReady(whatsapp: WhatsAppConfig): boolean {
  return (
    whatsapp.enabled &&
    whatsapp.phone.replace(/[^0-9]/g, '').length >= 10
  )
}
