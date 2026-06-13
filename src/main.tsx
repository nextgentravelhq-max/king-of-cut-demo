import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { businessConfig } from './config/businessConfig.ts'

// DEBUG: Hier nur die eine Zeile einfügen
console.log("DEBUG MAIN: Was kommt aus der Config?", businessConfig);

import { BusinessConfigProvider } from './hooks/useBusinessConfig.tsx'
import { applyTheme } from './theme/applyTheme.ts'
import './theme/global.css'
import App from './App.tsx'

applyTheme(businessConfig.theme)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <BusinessConfigProvider>
        <App />
      </BusinessConfigProvider>
    </BrowserRouter>
  </StrictMode>,
)
