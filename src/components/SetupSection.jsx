import styles from './SetupSection.module.css'

const setupSteps = [
  {
    step: 'Phase 01',
    title: 'Station & Track 3D LiDAR Survey',
    duration: 'Day 1 - 2',
    icon: '🗺️',
    desc: 'The engineering team performs a millimeter-accurate 3D LiDAR digital twin survey of railway platforms, foot-overbridges (FOBs), blind corners, and broad-gauge ballast track corridors.',
    deliverables: ['Point-Cloud Digital Twin (.las)', 'Restricted Zone Geofencing', 'Dynamic Waypoint Route Map'],
  },
  {
    step: 'Phase 02',
    title: 'Inductive Docking & Fast-Charge Depot Setup',
    duration: 'Day 3',
    icon: '⚡',
    desc: 'Installation of the weather-sealed, IP68 magnetic induction charging pod at designated platform buffers or RPF post perimeter with direct connection to station auxiliary traction power.',
    deliverables: ['Wireless Induction Pad', 'Automated Alignment Markers', 'Surge-Protected Grid Interface'],
  },
  {
    step: 'Phase 03',
    title: 'RailTel Secure 5G Private APN Pairing',
    duration: 'Day 4',
    icon: '📶',
    desc: 'Configuring dedicated, low-latency RailTel private APN encrypted tunnels. Dual eSIM failover routes all video feeds, sensor arrays, and telemetry directly into the secure RPF Intranet.',
    deliverables: ['Encrypted IPsec Tunnel', 'Pinata IPFS Gateway Key', 'Zero-Trust HSM Certificates'],
  },
  {
    step: 'Phase 04',
    title: 'RPF Central Security Control Room (SCR) Sync',
    duration: 'Day 5',
    icon: '🖥️',
    desc: 'Integrating live telemetry, thermal video streams, and instant panic dispatches onto the RPF Division SCR multi-monitor video wall and officer handheld tablets.',
    deliverables: ['CCTNS Crime Database Hook', 'Live 3D Tracking Dashboard', 'Automated SMS / Radio Alerts'],
  },
  {
    step: 'Phase 05',
    title: 'Field Drill & Commissioning Sign-off',
    duration: 'Day 6',
    icon: '📋',
    desc: 'Comprehensive simulated threat tests: unattended bag drop, simulated track ballast obstacle, and swab fluorescent reagent quenching test verified by Senior Divisional Security Commissioner.',
    deliverables: ['Standard Operating Procedure (SOP)', 'Officer Operator Training Certificate', 'Official Commissioning Order'],
  },
]

export default function SetupSection() {
  return (
    <section className={styles.setupSection} id="how-it-setup">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.subBadge}>TURNKEY OPERATIONAL DEPLOYMENT</div>
          <h2 className={styles.sectionTitle}>How Rakshak-K9 Is Set Up at Any Railway Station</h2>
          <div className={styles.headerDivider}></div>
          <p className={styles.sectionDesc}>
            A structured 6-day turnkey deployment process certified by Indian Railways and RPF.
            Zero disruption to train schedules or passenger footfall during setup.
          </p>
        </div>

        {/* Setup Steps Timeline */}
        <div className={styles.timeline}>
          {setupSteps.map((s, index) => (
            <div key={index} className={styles.timelineCard}>
              <div className={styles.phaseHeader}>
                <span className={styles.phasePill}>{s.step}</span>
                <span className={styles.durationPill}>{s.duration}</span>
              </div>

              <div className={styles.cardMain}>
                <div className={styles.iconCircle}>
                  <span>{s.icon}</span>
                </div>
                <div className={styles.textWrap}>
                  <h3 className={styles.stepTitle}>{s.title}</h3>
                  <p className={styles.stepDesc}>{s.desc}</p>

                  <div className={styles.deliverablesList}>
                    <strong className={styles.delivTitle}>Key Deliverables:</strong>
                    <div className={styles.chips}>
                      {s.deliverables.map((d, i) => (
                        <span key={i} className={styles.chip}>✓ {d}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Readiness Summary Banner */}
        <div className={styles.readinessBanner}>
          <div className={styles.readinessLeft}>
            <span className={styles.readyIcon}>🛡️</span>
            <div>
              <h4 className={styles.readyTitle}>Ready for Multi-Platform &amp; Yard Deployment</h4>
              <p className={styles.readyDesc}>
                Available for immediate operational pilot across all 18 Indian Railway Zones.
              </p>
            </div>
          </div>
          <a href="#contact" className={styles.btnRequestSurvey}>
            Request Station Survey →
          </a>
        </div>
      </div>
    </section>
  )
}
