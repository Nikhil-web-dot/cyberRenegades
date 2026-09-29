import { useLanguage } from '../context/LanguageContext'
import styles from './Header.module.css'
import railGif from "../assets/rail.gif";

export default function Header({ onLoginClick }) {
  const { lang, setLang, fontScale, setFontScale, t } = useLanguage()

  return (
    <header className={styles.headerContainer}>
      {/* Topmost Accessibility & Language Bar */}
      <div className={styles.utilityBar}>
        <div className={styles.utilityLeft}>
          <span>🇮🇳 {t.govIndia} &bull; {t.ministryRailways}</span>
        </div>
        <div className={styles.utilityRight}>
          <div className={styles.fontControls}>
            <span className={styles.utilLabel}>{t.fontSize}:</span>
            <button
              className={`${styles.fontBtn} ${fontScale === 90 ? styles.fontBtnActive : ''}`}
              onClick={() => setFontScale(90)}
              title="Small Text"
            >
              A-
            </button>
            <button
              className={`${styles.fontBtn} ${fontScale === 100 ? styles.fontBtnActive : ''}`}
              onClick={() => setFontScale(100)}
              title="Standard Text"
            >
              A
            </button>
            <button
              className={`${styles.fontBtn} ${fontScale === 115 ? styles.fontBtnActive : ''}`}
              onClick={() => setFontScale(115)}
              title="Large Text"
            >
              A+
            </button>
          </div>

          <div className={styles.dividerV} />

          <div className={styles.langSelector}>
            <span className={styles.utilLabel}>Language:</span>
            <button
              className={`${styles.langBtn} ${lang === 'en' ? styles.langBtnActive : ''}`}
              onClick={() => setLang('en')}
            >
              English
            </button>
            <button
              className={`${styles.langBtn} ${lang === 'hi' ? styles.langBtnActive : ''}`}
              onClick={() => setLang('hi')}
            >
              हिन्दी
            </button>
          </div>
        </div>
      </div>

      {/* Top Main Official Strip */}
      <div
        className={styles.topMainStrip}
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        {/* Decorative Ashoka Chakra watermark */}
        <svg
          viewBox="0 0 100 100"
          width="140"
          height="140"
          style={{
            position: 'absolute',
            right: '-10px',
            top: '-30px',
            opacity: 0.05,
            pointerEvents: 'none',
          }}
        >
          <circle cx="50" cy="50" r="45" fill="none" stroke="#000080" strokeWidth="2" />
          {Array.from({ length: 24 }).map((_, i) => {
            const rad = (i * 15 * Math.PI) / 180
            return (
              <line
                key={i}
                x1={50 + 10 * Math.cos(rad)}
                y1={50 + 10 * Math.sin(rad)}
                x2={50 + 45 * Math.cos(rad)}
                y2={50 + 45 * Math.sin(rad)}
                stroke="#000080"
                strokeWidth="1.5"
              />
            )
          })}
        </svg>

        <div className={styles.leftBrand}>
          <div
            className={styles.flagIcon}
            title="Government of India"
            style={{ filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.25))' }}
          >
            <svg viewBox="0 0 900 600" width="38" height="25" style={{ borderRadius: '5px', boxShadow: '0 2px 5px rgba(0,0,0,0.2)' }}>
              <rect width="900" height="200" fill="#FF9933" />
              <rect y="200" width="900" height="200" fill="#FFFFFF" />
              <rect y="400" width="900" height="200" fill="#138808" />
              <circle cx="450" cy="300" r="80" fill="none" stroke="#000080" strokeWidth="12" />
              <circle cx="450" cy="300" r="16" fill="#000080" />
              {Array.from({ length: 24 }).map((_, i) => {
                const rad = (i * 15 * Math.PI) / 180
                return (
                  <line
                    key={i}
                    x1={450 + 16 * Math.cos(rad)}
                    y1={300 + 16 * Math.sin(rad)}
                    x2={450 + 80 * Math.cos(rad)}
                    y2={300 + 80 * Math.sin(rad)}
                    stroke="#000080"
                    strokeWidth="4"
                  />
                )
              })}
            </svg>
          </div>

          <div
            className={styles.irEmblemWrap}
            style={{ filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.25))' }}
          >
            <img
              src={railGif}
              alt="Indian Railways"
              width={46}
              height={46}
              style={{ objectFit: 'contain' }}
            />
          </div>

          <div className={styles.titleBlock}>
            <div className={styles.titleRow}>
              <h1
                className={styles.mainTitle}
                style={{
                  fontSize: '1.65em',
                  letterSpacing: '0.3px',
                  textShadow: '0 1px 2px rgba(0,0,0,0.15)',
                }}
              >
                {t.mainTitle}
              </h1>
            </div>
            <p className={styles.subTitle} style={{ fontSize: '1.05em' }}>{t.subTitle}</p>

            {/* Decorative tricolour underline */}
            <div
              style={{
                marginTop: '6px',
                height: '3px',
                width: '180px',
                borderRadius: '2px',
                background: 'linear-gradient(to right, #FF9933 0%, #FF9933 33%, #FFFFFF 33%, #FFFFFF 66%, #138808 66%, #138808 100%)',
                boxShadow: '0 1px 2px rgba(0,0,0,0.2)',
              }}
            />
          </div>
        </div>

        <div className={styles.rightControls}></div>
      </div>

      {/* Safety Ribbon */}
      <div className={styles.safetyRibbon}>
        <div className={styles.safetyLeft}>
          <span className={styles.safetyBadge}>{t.safetyFirst}</span>
          <span className={styles.safetyTextHindi}>{t.safetyHindi}</span>
          <span className={styles.safetyDivider}>•</span>
          <span className={styles.safetyTextEn}>{t.safetyEn}</span>
        </div>
        <div className={styles.safetyRight}>
          <span className={styles.greenSignalDot}></span>
          <span className={styles.signalText}>
            {t.signalClear} • {t.sectorInfo}
          </span>
        </div>
      </div>

      {/* Primary Clean Navigation Bar */}
      <nav
        className={styles.navBar}
        style={{ borderBottom: '2px solid #FFD700' }}
      >
        <div className={styles.navLinks}>
          <a href="#home" className={styles.navItem}>{t.navHome}</a>
          <a href="#uniqueness" className={styles.navItem} style={{ color: '#ffcc00' }}>{t.navUniqueness}</a>
          <a href="#specifications" className={styles.navItem}>{t.navSpecs}</a>
          <a href="#how-it-works" className={styles.navItem}>{t.navWorks}</a>
          <a href="#how-it-setup" className={styles.navItem}>{t.navSetup}</a>
          <a href="#secures-railway" className={styles.navItem}>{t.navSecures}</a>
          <a href="#how-to-trust" className={styles.navItem}>{t.navTrust}</a>
          <a href="#gallery" className={styles.navItem}>{t.navGallery}</a>
          <a href="#contact" className={styles.navItem}>{t.navContact}</a>
        </div>
        <div className={styles.navHelpline}>
          <span>{t.helplineText}</span>
          <a href="tel:139" className={styles.helplineBadge}>📞 139</a>
        </div>
      </nav>
    </header>
  )
}