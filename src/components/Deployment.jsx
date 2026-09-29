import styles from './Deployment.module.css'

const checks = [
  {
    title: 'Autonomous 24/7 patrol',
    desc: 'No human fatigue — continuous vigilance across all shifts without operator intervention.',
  },
  {
    title: 'Offline resilience',
    desc: 'When network unavailable, evidence is AES-encrypted and stored to on-board SD card, auto-uploaded when connectivity restores.',
  },
  {
    title: 'Court-admissible evidence',
    desc: 'All findings committed to blockchain with CID — tamper-proof chain-of-custody for legal proceedings.',
  },
  {
    title: 'Rapid RPF response',
    desc: 'Real-time alert with GPS coordinates and evidence snapshot dispatched to nearest RPF unit within 2 seconds.',
  },
  {
    title: 'On-site chemical analysis',
    desc: 'Fluorescent quenching black-box test provides preliminary explosive/narcotic confirmation without lab time.',
  },
]

const miniStats = [
  { val: '7,349', key: 'Stations Covered' },
  { val: '67,956 km', key: 'Track Monitored' },
  { val: '13M+', key: 'Passengers / Day' },
  { val: '0%', key: 'Tampering Risk' },
]

export default function Deployment() {
  return (
    <section className={`section-pad ${styles.deploy}`} id="deployment">
      <div className="container">
        <div className={styles.inner}>
          {/* Visual card */}
          <div className={`${styles.visualCol} fade-up`}>
            <div className={styles.bigCard}>
              <div className={styles.bigCardBg} />
              <div className={styles.bigNum}>7,349</div>
              <div className={styles.bigLabel}>Railway Stations Covered</div>
              <div className={styles.miniGrid}>
                {miniStats.map((m, i) => (
                  <div key={i} className={styles.miniCard}>
                    <span className={styles.miniVal}>{m.val}</span>
                    <span className={styles.miniKey}>{m.key}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Badge row */}
            <div className={styles.badges}>
              <span className={styles.badge}>🇮🇳 Govt. of India</span>
              <span className={styles.badge}>🔒 AES-256 Encrypted</span>
              <span className={styles.badge}>⛓️ Blockchain-verified</span>
            </div>
          </div>

          {/* Content */}
          <div className={`${styles.contentCol} fade-up`}>
            <div className="section-label">RPF Deployment</div>
            <h2 className="section-heading">Guarding India's Railways</h2>
            <div className="divider" />
            <p className="section-sub" style={{ marginBottom: 32 }}>
              Rakshak K9 units are deployed by the Railway Protection Force at
              high-traffic junctions, sensitive corridors, and border-adjacent railway zones.
            </p>

            <ul className={styles.checkList}>
              {checks.map((c, i) => (
                <li key={i} className={styles.checkItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <div>
                    <strong className={styles.checkTitle}>{c.title}</strong>
                    <p className={styles.checkDesc}>{c.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
