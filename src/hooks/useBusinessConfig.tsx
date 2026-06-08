import { createContext, useContext, type ReactNode } from 'react'
import { businessConfig } from '../config/businessConfig.ts'
import type { BusinessConfig } from '../config/businessConfig.types.ts'

const BusinessConfigContext = createContext<BusinessConfig | null>(null)

interface BusinessConfigProviderProps {
  children: ReactNode
  config?: BusinessConfig
}

export function BusinessConfigProvider({
  children,
  config = businessConfig,
}: BusinessConfigProviderProps) {
  return (
    <BusinessConfigContext.Provider value={config}>
      {children}
    </BusinessConfigContext.Provider>
  )
}

export function useBusinessConfig(): BusinessConfig {
  const config = useContext(BusinessConfigContext)

  if (!config) {
    throw new Error('useBusinessConfig must be used within a BusinessConfigProvider')
  }

  return config
}
