import { useState, useEffect } from 'react'
import { LanguageProvider } from './context/LanguageContext'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import UniquenessSection from './components/UniquenessSection'
import Specifications from './components/Specifications'
import Workflow from './components/Workflow'
import SetupSection from './components/SetupSection'
import SecuresRailway from './components/SecuresRailway'
import TrustSection from './components/TrustSection'
import Gallery from './components/Gallery'
import ContactCTA from './components/ContactCTA'
import Footer from './components/Footer'
import OfficerLoginModal from './components/OfficerLoginModal'

function MainContent() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  // Smooth scroll handler for all internal anchors
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]')
      if (target) {
        const id = target.getAttribute('href')
        if (id && id !== '#') {
          const el = document.querySelector(id)
          if (el) {
            e.preventDefault()
            el.scrollIntoView({ behavior: 'smooth' })
          }
        }
      }
    }
    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])

  return (
    <div className="appWrapper">
      {/* 1. Official Indian Railway Header with Live Telemetry, Language & Font Controls */}
      <Header onLoginClick={() => setIsLoginModalOpen(true)} />

      <main>
        {/* 2. Hero Section: Clean, bold INDIAN RAILWAYS - RAKSHAK-K9 with 3D CAD Rover & Hotspots */}
        <Hero onOpenInspectionModal={() => setIsLoginModalOpen(true)} />

        {/* Key Metrics Quick Band */}
        <Stats />

        {/* 3. Core System Innovations & Uniqueness */}
        <UniquenessSection />

        {/* 4. Specifications Section: Custom Hardware & Subsystems */}
        <Specifications />

        {/* 5. How It Works Section: 16-Step Pipeline & Blueprint Flowchart Modal */}
        <Workflow />

        {/* 6. How It Setup Section: 5-Phase Station Turnkey Deployment */}
        <SetupSection />

        {/* 7. How It Secures Railway Section: 6 Security Pillars */}
        <SecuresRailway />

        {/* 8. How To Trust On It Section: Legal, RDSO & Extreme Weather Certifications */}
        <TrustSection />

        {/* 9. Field Operations & 3D Engineering Model Gallery Section */}
        <Gallery />

        {/* 10. Station Deployment & Emergency Inquiry Form */}
        <ContactCTA />
      </main>

      {/* 11. Official Indian Railway Footer */}
      <Footer />

      {/* RPF Officer Secure Access Console Modal */}
      <OfficerLoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  )
}
