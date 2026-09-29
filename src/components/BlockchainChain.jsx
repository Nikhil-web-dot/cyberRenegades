import styles from './BlockchainChain.module.css'

const steps = [
  { icon: '📷', title: 'Capture', desc: 'GPS + sensor readings + camera images bundled as Evidence Package', num: '01' },
  { icon: '🧪', title: 'Analyse', desc: 'Black-box fluorescent quenching test confirms or clears the swab sample', num: '02' },
  { icon: '📦', title: 'Package', desc: 'Evidence + test result merged into signed Confirmed Evidence Package', num: '03' },
  { icon: '🌐', title: 'IPFS Upload', desc: 'Package pushed to IPFS via Pinata; unique Content ID (CID) generated', num: '04' },
  { icon: '⛓️', title: 'Blockchain', desc: 'CID committed to blockchain — immutable, timestamped, court-admissible', num: '05' },
]

export default function BlockchainChain() {
  return (
    <section className={`section-pad ${styles.bc}`} id="blockchain">
      <div className="container">
        <div className={`text-center fade-up`} style={{ marginBottom: 60 }}>
          <div className="section-label">Evidence Chain</div>
          <h2 className="section-heading">Tamper-Proof by Design</h2>
          <div className="divider divider-center" />
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Every piece of evidence follows a cryptographically secured pipeline from
            sensor to blockchain — ensuring integrity and legal admissibility.
          </p>
        </div>

        <div className={`${styles.chain} fade-up`}>
          {steps.map((s, i) => (
            <div key={i} className={styles.chainItem}>
              <div className={styles.nodeWrap}>
                <div className={styles.node}>
                  <span className={styles.nodeNum}>{s.num}</span>
                  <span className={styles.nodeIcon}>{s.icon}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className={styles.connector}>
                    <div className={styles.connectorLine} />
                    <span className={styles.connectorArrow}>→</span>
                  </div>
                )}
              </div>
              <div className={styles.stepContent}>
                <h4 className={styles.stepTitle}>{s.title}</h4>
                <p className={styles.stepDesc}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Offline mode notice */}
        <div className={`${styles.offlineNote} fade-up`}>
          <span className={styles.offlineIcon}>💾</span>
          <div>
            <strong className={styles.offlineTitle}>Offline Mode</strong>
            <p className={styles.offlineDesc}>
              When network is unavailable, evidence is AES-encrypted and saved to on-board SD card.
              Once connectivity is restored, the full pipeline automatically resumes — no data is lost.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
