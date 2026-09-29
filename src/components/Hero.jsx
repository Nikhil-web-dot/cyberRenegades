import { useLanguage } from '../context/LanguageContext'
import styles from './Hero.module.css'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className={styles.heroSection} id="home">
      <div className={styles.heroContainer}>
        {/* Left Column: Official Context & Actions */}
        <div className={styles.heroTextCol}>
          <div className={styles.officialPill}>
            <span className={styles.pillDot}></span>
            <span>{t.heroPill}</span>
          </div>

          <h1 className={styles.mainTitle}>
            <span style={{ color: '#FF9933' }}>INDIAN</span>{' '}
            <span style={{ color: '#0B1F3A' }}>RAILWAYS</span>
            <br />
            <span className={styles.titleHighlight}>RAKSHAK-K9</span>
          </h1>

          <p className={styles.heroTagline}>{t.heroTagline}</p>

          <p className={styles.heroDesc}>{t.heroDesc}</p>

          {/* Key Uniqueness Highlights */}
          <div className={styles.uniquenessList}>
            <div className={styles.uniqueItem}>
              <span className={styles.checkGlow}>✓</span>
              <div>
                <strong>{t.u1Title}</strong>
                <span>{t.u1Desc}</span>
              </div>
            </div>

            <div className={styles.uniqueItem}>
              <span className={styles.checkGlow}>✓</span>
              <div>
                <strong>{t.u2Title}</strong>
                <span>{t.u2Desc}</span>
              </div>
            </div>

            <div className={styles.uniqueItem}>
              <span className={styles.checkGlow}>✓</span>
              <div>
                <strong>{t.u3Title}</strong>
                <span>{t.u3Desc}</span>
              </div>
            </div>

            <div className={styles.uniqueItem}>
              <span className={styles.checkGlow}>✓</span>
              <div>
                <strong>{t.u4Title}</strong>
                <span>{t.u4Desc}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className={styles.ctaRow}>
            <a href="#uniqueness" className={styles.btnPrimary}>
              <span>✨</span> {t.btnExploreUnique}
            </a>
            <a href="#specifications" className={styles.btnSecondary}>
              <span>📋</span> {t.btnHardwareSpecs}
            </a>
            <a href="#how-it-works" className={styles.btnOutline}>
              <span>⚡</span> {t.btnViewWorkflow}
            </a>
          </div>

          {/* Division Deployment Footnote */}
          <div className={styles.divisionFootnote}>
            <span className={styles.railEmblem}>🇮🇳</span>
            <span>Ministry of Railways &bull; Railway Protection Force (RPF) &bull; Custom CAD Model Specification v2.4</span>
          </div>
        </div>

        {/* Right Column: Custom System Image */}
        <div className={styles.heroImageCol}>
          <img
            src="/k9.jpeg"
            alt="Rakshak-K9 Custom Designed System"
            className={styles.userCadImage}
          />
        </div>
      </div>
    </section>
  )
}