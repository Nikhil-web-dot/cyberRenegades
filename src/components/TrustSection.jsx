import styles from './TrustSection.module.css'

const trustPillars = [
  {
    icon: '📜',
    title: 'Statutory RDSO & BIS Compliance',
    badge: 'GOVERNMENT CERTIFIED',
    desc: 'Designed and manufactured under strict compliance with Research Designs and Standards Organisation (RDSO) specifications and Bureau of Indian Standards (BIS) industrial electronics norms.',
  },
  {
    icon: '⚖️',
    title: 'Court-Admissible Evidence (Section 65B)',
    badge: 'LEGAL TAMPER-PROOF',
    desc: 'Produces automated electronic evidence certificates under Section 65B of the Indian Evidence Act. Every video clip and sensor snapshot has an immutable IPFS Content ID (CID) signed on the blockchain.',
  },
  {
    icon: '🔐',
    title: 'Hardware Security Module (HSM) Vault',
    badge: 'MILITARY ENCRYPTION',
    desc: 'Local SD memory is encrypted with AES-256 GCM using keys physically locked inside a dedicated cryptographic co-processor. No officer or hacker can alter, delete, or spoof records.',
  },
  {
    icon: '🌦️',
    title: 'Extreme Indian Climate Testing',
    badge: 'FIELD PROVEN',
    desc: 'Extensively tested in extreme environments: 0°C winter fog in Punjab and Northern Railway, +50°C dry heat in Rajasthan, and 100% humidity heavy downpours along the Konkan coastal railway.',
  },
  {
    icon: '👮',
    title: 'Strict Human-in-the-Loop RPF Command',
    badge: 'OFFICER CONTROLLED',
    desc: 'Rakshak-K9 does not deploy kinetic force autonomously. It is purely an intelligent sensory sentinel providing situational awareness directly to armed RPF quick-reaction teams.',
  },
  {
    icon: '🔋',
    title: '99.98% High Availability Failover',
    badge: 'MISSION CRITICAL',
    desc: 'Dual redundant battery lines, dual microcontrollers, and offline autonomous navigation guarantee uninterrupted platform security even during complete power or cellular network grid outages.',
  },
]

export default function TrustSection() {
  return (
    <section className={styles.trustSection} id="how-to-trust">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.subBadge}>VERIFIED INTEGRITY &amp; CERTIFICATION</div>
          <h2 className={styles.sectionTitle}>Why Indian Railways Trusts Rakshak-K9</h2>
          <div className={styles.headerDivider}></div>
          <p className={styles.sectionDesc}>
            Built on transparency, rigorous Indian defence engineering, and uncompromising legal compliance.
          </p>
        </div>

        {/* Trust Grid */}
        <div className={styles.grid}>
          {trustPillars.map((p, i) => (
            <div key={i} className={styles.trustCard}>
              <div className={styles.cardTop}>
                <span className={styles.cardIcon}>{p.icon}</span>
                <span className={styles.badge}>{p.badge}</span>
              </div>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardDesc}>{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Trust Badges Strip */}
        <div className={styles.certStrip}>
          <div className={styles.certItem}>
            <span className={styles.certCheck}>✓</span>
            <span>Ministry of Railways Approved</span>
          </div>
          <div className={styles.certItem}>
            <span className={styles.certCheck}>✓</span>
            <span>RDSO Technical Clearance</span>
          </div>
          <div className={styles.certItem}>
            <span className={styles.certCheck}>✓</span>
            <span>RailTel 5G Security Audited</span>
          </div>
          <div className={styles.certItem}>
            <span className={styles.certCheck}>✓</span>
            <span>Make In India Indigenous Initiative</span>
          </div>
        </div>
      </div>
    </section>
  )
}
