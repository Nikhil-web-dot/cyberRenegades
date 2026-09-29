import styles from './Features.module.css'

const features = [
  {
    icon: '🔍',
    title: '360° Object Detection',
    desc: 'YOLOv8 + OpenCV on full-spectrum 360° RGB camera arrays detect suspicious objects, unattended baggage, and unauthorized personnel in real-time.',
    tag: 'YOLOv8 · OpenCV',
    color: 'blue',
  },
  {
    icon: '📡',
    title: 'Multi-Sensor Verification',
    desc: 'mmWave radar for through-material detection combined with BME688 gas/VOC sensor to verify threats and detect explosive or hazardous chemical signatures.',
    tag: 'mmWave · BME688',
    color: 'red',
  },
  {
    icon: '🗺️',
    title: 'Autonomous Navigation',
    desc: 'LiDAR + IMU + Camera fusion for GPS-denied environments. Follows pre-programmed patrol paths and plans real-time routes to flagged locations.',
    tag: 'LiDAR · IMU · SLAM',
    color: 'gold',
  },
  {
    icon: '🧬',
    title: 'Automated Swab Collection',
    desc: 'Onboard robotic swab collection with fluorescent quenching black-box test for on-site chemical confirmation — no lab required for preliminary results.',
    tag: 'Fluorescent Quenching',
    color: 'teal',
  },
  {
    icon: '⛓️',
    title: 'Blockchain Evidence Ledger',
    desc: 'All evidence (GPS, sensor data, images, test results) is uploaded to IPFS via Pinata and committed to blockchain — creating an immutable, court-admissible record.',
    tag: 'IPFS · Blockchain',
    color: 'purple',
  },
  {
    icon: '🚨',
    title: 'Real-time RPF Alerting',
    desc: 'Instant alert dispatched to Railway Protection Force with GPS coordinates, evidence snapshot, and sensor readings — enabling rapid armed response within seconds.',
    tag: 'Real-time · RPF Integration',
    color: 'red',
  },
]

export default function Features() {
  return (
    <section className={`section-pad ${styles.features}`} id="features">
      <div className="container">
        <div className={`text-center fade-up`} style={{ marginBottom: 60 }}>
          <div className="section-label">Core Capabilities</div>
          <h2 className="section-heading">What Rakshak K9 Does</h2>
          <div className="divider divider-center" />
          <p className="section-sub" style={{ margin: '0 auto' }}>
            A multi-sensor autonomous robot designed for continuous railway surveillance,
            threat detection, chemical analysis, and tamper-proof evidence recording.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((f, i) => (
            <div key={i} className={`${styles.card} ${styles[`card_${f.color}`]} fade-up`}
              style={{ transitionDelay: `${(i % 3) * 0.1}s` }}>
              <div className={`${styles.iconWrap} ${styles[`icon_${f.color}`]}`}>
                {f.icon}
              </div>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.desc}</p>
              <span className={styles.cardTag}>{f.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
