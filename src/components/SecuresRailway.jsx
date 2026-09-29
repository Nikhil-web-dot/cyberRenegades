import styles from './SecuresRailway.module.css'

const securityPillars = [
  {
    icon: '🛤️',
    title: 'Track Sabotage & Fishplate Monitoring',
    subtitle: 'Vande Bharat & High-Speed Corridor Defense',
    desc: 'Equipped with ground-facing structured laser scanners, Rakshak-K9 continuously scans rail joints, fishplates, elastic rail clips (ERCs), and track fasteners for deliberate loosening, tampering, or foreign metallic obstacles.',
    stats: 'Detects rail gaps > 2mm at 8 km/h ballast speed',
    tag: 'Anti-Derailment Shield',
  },
  {
    icon: '🧳',
    title: 'Unattended Baggage & IED Sniffing',
    subtitle: 'High-Footfall Station Platform Security',
    desc: 'Real-time YOLOv8 neural network tracks every piece of luggage. If baggage is left stationary with no owner within 3 meters for over 90 seconds, the robot approaches, activates its BME688 explosive vapor sniffer, and cordons the area.',
    stats: 'Vapor threshold alarm triggered in < 45 seconds',
    tag: 'Explosive Vapor Countermeasure',
  },
  {
    icon: '🌙',
    title: 'Night Perimeter & Loco Shed Vigilance',
    subtitle: 'Zero-Visibility Anti-Trespass Patrol',
    desc: 'During late night hours, Rakshak-K9 patrols marshalling yards, signal relay rooms, and locomotive maintenance sheds. Long-wave thermal imaging spots human heat signatures in total darkness, thwarting copper wire theft and sabotage.',
    stats: 'Thermal human detection up to 180 meters in zero light',
    tag: 'Critical Asset Defense',
  },
  {
    icon: '👥',
    title: 'Women & Child Passenger Safety',
    subtitle: 'Night Platform Escort & SOS Intercom',
    desc: 'Patrols dimly lit platform ends and waiting halls during night train arrivals. Features a two-way emergency SOS panic button and loudspeaker, connecting passenger directly to on-duty female RPF sub-inspectors.',
    stats: 'Instant 2-way audio broadcast to RPF Control',
    tag: 'RPF Meri Saheli Support',
  },
  {
    icon: '⚠️',
    title: 'Obstacle Detection & Kavach Integration',
    subtitle: 'Track Clearance Ahead of Express Trains',
    desc: 'Communicates with the Indian Railways Kavach automatic train protection (ATP) telemetry network. Detects cattle, fallen trees, or unauthorized vehicles on railway level crossings and alerts the approaching loco pilot.',
    stats: 'Instant line-clear telemetry forwarded to signal cabin',
    tag: 'ATP Telemetry Interlock',
  },
  {
    icon: '🔒',
    title: 'Court-Admissible Evidence Preservation',
    subtitle: 'Section 65B Indian Evidence Act Compliance',
    desc: 'Every incident video clip, sensor reading, and blackbox fluorescent test result is hashed and signed with a cryptographic hardware key, preventing any police or external evidence tampering before court trials.',
    stats: 'Cryptographically sealed & verified on IPFS + Ledger',
    tag: 'Tamper-Proof Legal Chain',
  },
]

export default function SecuresRailway() {
  return (
    <section className={styles.securesSection} id="secures-railway">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.subBadge}>NATIONAL RAILWAY SHIELD</div>
          <h2 className={styles.sectionTitle}>How Rakshak-K9 Secures Indian Railways</h2>
          <div className={styles.headerDivider}></div>
          <p className={styles.sectionDesc}>
            Addressing the most critical physical, chemical, and cyber threats across India's
            68,000+ route kilometres and 7,300+ railway stations.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className={styles.grid}>
          {securityPillars.map((p, i) => (
            <div key={i} className={styles.pillarCard}>
              <div className={styles.cardHeader}>
                <div className={styles.iconCircle}>
                  <span>{p.icon}</span>
                </div>
                <span className={styles.tagPill}>{p.tag}</span>
              </div>

              <h3 className={styles.pillarTitle}>{p.title}</h3>
              <span className={styles.pillarSub}>{p.subtitle}</span>

              <p className={styles.pillarDesc}>{p.desc}</p>

              <div className={styles.statsStrip}>
                <span className={styles.statsLabel}>BENCHMARK:</span>
                <span className={styles.statsVal}>{p.stats}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Safety First Commitment Band */}
        <div className={styles.safetyBand}>
          <div className={styles.bandLeft}>
            <span className={styles.bandIcon}>🇮🇳</span>
            <div>
              <strong className={styles.bandTitle}>Zero-Accident, Zero-Sabotage Vision</strong>
              <p className={styles.bandDesc}>
                Empowering the Railway Protection Force with cutting-edge indigenous robotics for passenger peace of mind.
              </p>
            </div>
          </div>
          <span className={styles.bandQuote}>"सेवा और निष्ठा" — Service and Devotion</span>
        </div>
      </div>
    </section>
  )
}
