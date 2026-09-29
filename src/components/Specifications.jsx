import { useState } from 'react'
import styles from './Specifications.module.css'

const specCategories = [
  {
    id: 'chassis',
    name: 'Custom Chassis & Suspension',
    icon: '🚜',
    items: [
      { label: 'Drive Architecture', value: '4-Wheel Drive (4WD) with independent shock-absorber suspension' },
      { label: 'Motors', value: 'High-torque industrial brushless DC gearmotors with regenerative braking' },
      { label: 'Tires & Ground Clearance', value: 'Deep-tread all-terrain pneumatic tires with 140 mm ground clearance' },
      { label: 'Environment Versatility', value: 'Platform concourses, narrow coach aisles & coarse track ballasts' },
      { label: 'Chassis Ingress Protection', value: 'IP67 dust-tight & water immersion resistant up to 1 metre' },
      { label: 'Obstacle Climbing', value: 'Traverses rails, steps up to 180 mm, and ballast slopes up to 35°' },
    ],
  },
  {
    id: 'detachable',
    name: 'Detachable Handheld Unit',
    icon: '🧰',
    items: [
      { label: 'Quick-Release Mechanism', value: 'Pneumatic push-lock latch for sub-10 second uncoupling' },
      { label: 'Close-Range Inspection', value: 'Enables manual sweeping under train berths & luggage racks' },
      { label: 'Independent Power', value: 'Onboard 1-hour lithium backup cell with auto-charge on redock' },
      { label: 'Wireless Link to Rover', value: 'Ultra-low latency Wi-Fi 6 / UWB encrypted video & telemetry link' },
      { label: 'Arm Boom Reach', value: '750 mm articulated reach with 3-axis rotational dexterity' },
      { label: 'Ergonomic Grip', value: 'Textured carbon-fiber handgrip with tactical trigger controls' },
    ],
  },
  {
    id: 'sensors',
    name: 'Sensor Fusion & Radar',
    icon: '🛰️',
    items: [
      { label: 'Autonomous LiDAR-IMU', value: 'Top-mounted 360° LiDAR puck + 9-Axis industrial IMU for SLAM' },
      { label: 'mm Wave Radar', value: 'Arm-tip mounted 77 GHz radar for through-baggage wall penetration' },
      { label: 'Optical Camera', value: 'Forward-facing wide-angle RGB camera with night-vision assist' },
      { label: 'BME688 VOC Sniffer', value: 'Multi-gas environmental VOC & explosive vapor analysis nozzle' },
      { label: 'Thermal Sensor Option', value: 'Long-wave FLIR infrared thermal sensor for human heat detection' },
      { label: 'Navigation Autonomy', value: 'Full path planning in GPS-denied tunnels & underground platforms' },
    ],
  },
  {
    id: 'chemical',
    name: 'On-Board Swab Test Kit (Black Box)',
    icon: '🧪',
    items: [
      { label: 'Location on Robot', value: 'Rear chassis deck sealed black-box chemical reaction chamber' },
      { label: 'Sampling Method', value: 'Automated mechanical swab wand extracts microscopic residue' },
      { label: 'Detection Technology', value: 'Fluorescent quenching optical assay with spectrophotometric sensor' },
      { label: 'Target Compounds', value: 'Nitro-aromatic explosives (TNT, RDX, PETN), nitrates, volatile narcotics' },
      { label: 'Test Duration', value: 'Real-time readout in under 120 seconds — zero lab wait' },
      { label: 'Chamber Decontamination', value: 'Automated UV-C sterilization between consecutive swab samples' },
    ],
  },
  {
    id: 'legal',
    name: 'Detection → Legal Proof Pipeline',
    icon: '⚖️',
    items: [
      { label: 'Evidence Workflow', value: 'Alarm → Onboard Black-Box Test → Blockchain-Backed Record' },
      { label: 'Decentralized Storage', value: 'IPFS via Pinata Gateway for tamper-proof retrievable originals' },
      { label: 'Blockchain Smart Contract', value: 'Cryptographic SHA-256 evidence hash committed to ledger' },
      { label: 'Statutory Admissibility', value: 'Compliant with Section 65B of Indian Evidence Act for court trials' },
      { label: 'Chain of Custody', value: 'Cryptographically signed officer ID, timestamp, and GPS coordinates' },
      { label: 'Audit Trail', value: 'Zero deletion or alteration capability by any entity or admin' },
    ],
  },
  {
    id: 'offline',
    name: 'Offline-First & RailTel 5G',
    icon: '🔒',
    items: [
      { label: 'Offline Resilience', value: 'Logs all evidence and video offline during cellular tunnel drops' },
      { label: 'Storage Security', value: 'AES-256 GCM encrypted onboard industrial 256GB SD blackbox' },
      { label: 'Auto-Sync Mechanism', value: 'Automatic background burst sync the moment connectivity returns' },
      { label: 'Network Backhaul', value: 'RailTel Private 5G APN with dual eSIM fallback to satellite link' },
      { label: 'Battery Runtime', value: 'Up to 8 hours autonomous patrol per hot-swappable LiFePO4 battery' },
      { label: 'Charging Dock', value: 'Platform-mounted wireless magnetic inductive charging depot' },
    ],
  },
]

export default function Specifications() {
  const [activeTab, setActiveTab] = useState('chassis')
  const currentCategory = specCategories.find((c) => c.id === activeTab) || specCategories[0]

  return (
    <section className={styles.specSection} id="specifications">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.subBadge}>RDSO &amp; CUSTOM ROBOTIC ARCHITECTURE</div>
          <h2 className={styles.sectionTitle}>Custom Hardware &amp; Subsystem Specifications</h2>
          <div className={styles.headerDivider}></div>
          <p className={styles.sectionDesc}>
            Engineered exclusively for Indian Railways: showcasing the detachable inspection unit,
            on-board swab test kit, 360° LiDAR-IMU navigation, and tamper-proof blockchain pipeline.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className={styles.tabBar}>
          {specCategories.map((cat) => (
            <button
              key={cat.id}
              className={`${styles.tabBtn} ${activeTab === cat.id ? styles.tabBtnActive : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              <span className={styles.tabIcon}>{cat.icon}</span>
              <span className={styles.tabName}>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Active Tab Spec Table Grid */}
        <div className={styles.specTableCard}>
          <div className={styles.cardTopStrip}>
            <div className={styles.cardHeaderLeft}>
              <span className={styles.categoryIcon}>{currentCategory.icon}</span>
              <h3 className={styles.categoryTitle}>{currentCategory.name}</h3>
            </div>
            <span className={styles.categoryCode}>IR-K9-CUSTOM-V2.4</span>
          </div>

          <div className={styles.specsGrid}>
            {currentCategory.items.map((item, idx) => (
              <div key={idx} className={styles.specItem}>
                <span className={styles.itemKey}>{item.label}</span>
                <span className={styles.itemVal}>{item.value}</span>
              </div>
            ))}
          </div>

          <div className={styles.tableFooter}>
            <span className={styles.stampText}>
              🇮🇳 Custom Design Robotic System (Rakshak K9) • Ministry of Railways &bull; Railway Protection Force
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
