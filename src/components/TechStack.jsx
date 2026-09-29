import styles from './TechStack.module.css'

const techs = [
  { icon: '🤖', name: 'YOLOv8', detail: 'Real-time object detection' },
  { icon: '👁️', name: 'OpenCV', detail: 'Computer vision pipeline' },
  { icon: '📡', name: 'mmWave Radar', detail: 'Through-material sensing' },
  { icon: '🌡️', name: 'BME688', detail: 'Gas & VOC detection' },
  { icon: '🗺️', name: 'LiDAR + IMU', detail: 'GPS-denied navigation' },
  { icon: '🛰️', name: 'GPS Module', detail: 'Precise location tagging' },
  { icon: '🔗', name: 'IPFS / Pinata', detail: 'Decentralised storage' },
  { icon: '⛓️', name: 'Blockchain', detail: 'Immutable evidence ledger' },
  { icon: '💾', name: 'SD Offline Mode', detail: 'Encrypted local storage' },
  { icon: '🧪', name: 'Fluorescent Quench', detail: 'On-site chemical test' },
  { icon: '📱', name: 'RPF Alert API', detail: 'Real-time force dispatch' },
  { icon: '🔐', name: 'AES Encryption', detail: 'End-to-end data security' },
]

export default function TechStack() {
  return (
    <section className={`section-pad ${styles.tech}`} id="technology">
      <div className="container">
        <div className={`text-center fade-up`} style={{ marginBottom: 60 }}>
          <div className="section-label">Technology Stack</div>
          <h2 className="section-heading">Built on Cutting-Edge Tech</h2>
          <div className="divider divider-center" />
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Rakshak K9 integrates defence-grade hardware with modern AI and
            Web3 infrastructure for an unbreakable security pipeline.
          </p>
        </div>

        <div className={styles.grid}>
          {techs.map((t, i) => (
            <div key={i} className={`${styles.card} fade-up`}
              style={{ transitionDelay: `${(i % 4) * 0.08}s` }}>
              <div className={styles.icon}>{t.icon}</div>
              <div className={styles.name}>{t.name}</div>
              <div className={styles.detail}>{t.detail}</div>
            </div>
          ))}
        </div>

        {/* Architecture banner */}
        <div className={`${styles.archBanner} fade-up`}>
          <div className={styles.archFlow}>
            {['Sensors', '→', 'AI Processing', '→', 'RPF Alert', '→', 'IPFS Upload', '→', 'Blockchain Commit'].map((item, i) => (
              <span key={i} className={item === '→' ? styles.arrow : styles.archStep}>
                {item}
              </span>
            ))}
          </div>
          <p className={styles.archNote}>Complete evidence pipeline from sensor to immutable ledger</p>
        </div>
      </div>
    </section>
  )
}
