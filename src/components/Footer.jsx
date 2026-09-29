import IRLogo from './IRLogo'
import styles from './Footer.module.css'

export default function Footer() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className={styles.footerContainer}>
      {/* Emergency Helpline Banner */}
      <div className={styles.emergencyBand}>
        <div className={styles.emergencyInner}>
          <div className={styles.emergencyLeft}>
            <span className={styles.sirenIcon}>🚨</span>
            <div>
              <strong className={styles.emergencyTitle}>INDIAN RAILWAYS 24×7 SECURITY HELPLINE: 139</strong>
              <p className={styles.emergencySub}>For immediate assistance, suspicious object reporting, or passenger safety support</p>
            </div>
          </div>
          <div className={styles.emergencyActions}>
            <a href="tel:139" className={styles.btnCall139}>
              <span>📞</span> Call 139 (Toll Free)
            </a>
            <span className={styles.meriSaheli}>RPF "Meri Saheli" Women Safety Protocol Active</span>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Information */}
      <div className={styles.mainFooter}>
        <div className={styles.footerGrid}>
          {/* Column 1: Ministry Branding */}
          <div className={styles.colBrand}>
            <div className={styles.brandRow}>
              <IRLogo size={52} />
              <div>
                <h3 className={styles.brandTitle}>INDIAN RAILWAYS</h3>
                <span className={styles.brandSub}>MINISTRY OF RAILWAYS • GOVT. OF INDIA</span>
              </div>
            </div>
            <div className={styles.k9Tag}>RAKSHAK-K9 SENTINEL INITIATIVE</div>
            <p className={styles.brandDesc}>
              Rakshak-K9 is an autonomous robotics and artificial intelligence security sentinel
              developed for the Railway Protection Force (RPF) to safeguard national railway corridors,
              ballast tracks, and passenger terminals across India.
            </p>
            <div className={styles.portalBadge}>
              <span>🇮🇳 National Railway Security Infrastructure Portal</span>
            </div>
          </div>

          {/* Column 2: System Sections */}
          <div className={styles.colLinks}>
            <h4 className={styles.colHeading}>System Sections</h4>
            <ul className={styles.linkList}>
              <li><button onClick={() => scrollTo('#home')} className={styles.linkBtn}>Home &amp; Overview</button></li>
              <li><button onClick={() => scrollTo('#uniqueness')} className={styles.linkBtn} style={{ color: '#f5a623' }}>✨ Core System Uniqueness</button></li>
              <li><button onClick={() => scrollTo('#specifications')} className={styles.linkBtn}>Technical Specifications</button></li>
              <li><button onClick={() => scrollTo('#how-it-works')} className={styles.linkBtn}>16-Step Operational Workflow</button></li>
              <li><button onClick={() => scrollTo('#how-it-setup')} className={styles.linkBtn}>Station Setup &amp; Deployment</button></li>
              <li><button onClick={() => scrollTo('#secures-railway')} className={styles.linkBtn}>Railway Security Protocols</button></li>
              <li><button onClick={() => scrollTo('#how-to-trust')} className={styles.linkBtn}>Why Trust It (Certifications)</button></li>
              <li><button onClick={() => scrollTo('#gallery')} className={styles.linkBtn}>Field Operations Gallery</button></li>
            </ul>
          </div>

          {/* Column 3: Indian Railway Entities */}
          <div className={styles.colLinks}>
            <h4 className={styles.colHeading}>Railway Entities</h4>
            <ul className={styles.linkList}>
              <li><a href="https://indianrailways.gov.in" target="_blank" rel="noreferrer" className={styles.linkA}>Ministry of Railways</a></li>
              <li><a href="https://rpf.indianrailways.gov.in" target="_blank" rel="noreferrer" className={styles.linkA}>Railway Protection Force (RPF)</a></li>
              <li><a href="https://rdso.indianrailways.gov.in" target="_blank" rel="noreferrer" className={styles.linkA}>RDSO Lucknow (Research &amp; Standards)</a></li>
              <li><a href="https://www.railtel.in" target="_blank" rel="noreferrer" className={styles.linkA}>RailTel Corporation of India</a></li>
              <li><a href="https://cris.org.in" target="_blank" rel="noreferrer" className={styles.linkA}>CRIS (Railway Information Systems)</a></li>
              <li><a href="https://www.irctc.co.in" target="_blank" rel="noreferrer" className={styles.linkA}>IRCTC Official Portal</a></li>
            </ul>
          </div>

          {/* Column 4: Governance & Legal */}
          <div className={styles.colLinks}>
            <h4 className={styles.colHeading}>Legal &amp; Compliance</h4>
            <ul className={styles.linkList}>
              <li><span className={styles.infoSpan}>Section 65B Indian Evidence Act</span></li>
              <li><span className={styles.infoSpan}>Right to Information (RTI)</span></li>
              <li><span className={styles.infoSpan}>MHA Cybersecurity Guidelines</span></li>
              <li><span className={styles.infoSpan}>Citizen's Security Charter</span></li>
              <li><span className={styles.infoSpan}>RPF Standard Operating Procedure (SOP)</span></li>
              <li><span className={styles.infoSpan}>Data Encryption Standard AES-256</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom National Emblem & Copyright Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.bottomLeft}>
            {/* National Ashoka Chakra SVG */}
            <svg width="32" height="32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="46" fill="none" stroke="#f5a623" strokeWidth="3" />
              <circle cx="50" cy="50" r="8" fill="#f5a623" />
              {Array.from({ length: 24 }).map((_, i) => {
                const a = (i * 15 * Math.PI) / 180
                return (
                  <line
                    key={i}
                    x1={50 + 8 * Math.cos(a)}
                    y1={50 + 8 * Math.sin(a)}
                    x2={50 + 44 * Math.cos(a)}
                    y2={50 + 44 * Math.sin(a)}
                    stroke="#f5a623"
                    strokeWidth="1.6"
                  />
                )
              })}
            </svg>
            <div className={styles.copyText}>
              <span>© 2026 Ministry of Railways, Government of India. All Rights Reserved.</span>
              <span className={styles.disclaimerText}>Designed for Railway Protection Force Security &bull; Indian Railways Rakshak-K9 Initiative</span>
            </div>
          </div>
          <div className={styles.bottomRight}>
            <span className={styles.makeInIndia}>🇮🇳 MAKE IN INDIA &bull; DIGITAL RAILWAYS</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
