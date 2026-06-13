import { Routes, Route } from 'react-router-dom'
import { Header } from './components/layout/Header.tsx'
import { Footer } from './components/layout/Footer.tsx'
import { PageMeta } from './components/seo/PageMeta.tsx'
import { HomePage } from './pages/HomePage.tsx'
import { ServicesPage } from './pages/ServicesPage.tsx'

function App() {
  return (
    <>
      <PageMeta />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/leistungen" element={<ServicesPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
