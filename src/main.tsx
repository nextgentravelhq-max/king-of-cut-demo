import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { businessConfig } from './config/businessConfig.ts'
import { BusinessConfigProvider } from './hooks/useBusinessConfig.tsx'
import { applyTheme } from './theme/applyTheme.ts'
import './theme/global.css'
import App from './App.tsx'

applyTheme(businessConfig.theme)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BusinessConfigProvider>
      <App />
    </BusinessConfigProvider>
  </StrictMode>,
)
