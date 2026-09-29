import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import IRLogo from './IRLogo'
import styles from './Navbar.module.css'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Technology', href: '#technology' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Deployment', href: '#deployment' },
  { label: 'Evidence Chain', href: '#blockchain' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Top strip */}
      <div className={styles.topStrip}>
        <span>🇮🇳</span>
        <span>Government of India &nbsp;|&nbsp; Ministry of Railways &nbsp;|&nbsp; Rakshak K9 – AI-Powered Railway Security</span>
        <span>🇮🇳</span>
      </div>

      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={`container ${styles.inner}`}>
          {/* Brand */}
          <a href="#" className={styles.brand} onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
            <IRLogo size={52} />
            <div className={styles.brandText}>
              <span className={styles.brandMain}>Indian Railways</span>
              <span className={styles.brandSub}>Ministry of Railways · Govt. of India</span>
            </div>
            <div className={styles.brandDivider} />
            <span className={styles.k9Label}>RAKSHAK K9</span>
          </a>

          {/* Desktop nav */}
          <nav className={styles.nav}>
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className={styles.navLink}
                onClick={e => handleNavClick(e, link.href)}>
                {link.label}
              </a>
            ))}
            <a href="#contact" className={styles.navCta}
              onClick={e => handleNavClick(e, '#contact')}>
              Contact RPF
            </a>
          </nav>

          {/* Mobile toggle */}
          <button className={styles.menuBtn} onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className={styles.mobileMenu}>
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className={styles.mobileLink}
                onClick={e => handleNavClick(e, link.href)}>
                {link.label}
              </a>
            ))}
            <a href="#contact" className={styles.mobileCta}
              onClick={e => handleNavClick(e, '#contact')}>
              Contact RPF
            </a>
          </div>
        )}
      </header>
    </>
  )
}
