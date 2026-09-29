import { useState } from 'react'
import styles from './Gallery.module.css'

const galleryItems = [
  {
    id: 1,
    title: 'Custom 3D CAD Perspective View (Rakshak K9)',
    category: 'cad',
    src: '/custom_k9_3d.jpg',
    badge: '3D CAD ISOMETRIC',
    desc: 'Photorealistic 3D engineering render showing the custom 4-wheel rover with articulated boom arm, green mmWave radar panel, orange LiDAR turret, and rear swab black box.',
    meta: '3D CAD Specification • Ministry of Railways • Custom Robotic System',
  },
  {
    id: 2,
    title: 'Engineering Subsystem Callout Schematic (Rakshak K9)',
    category: 'cad',
    src: '/custom_design_robot.png',
    badge: 'CUSTOM ROBOTIC CAD',
    desc: 'Engineering schematic highlighting the detachable handheld inspection unit, articulated boom with mmWave radar, top LiDAR-IMU turret, and rear black-box swab test kit.',
    meta: 'Ministry of Railways • RPF Unit 07 Iron Hound • Custom Design Specification',
  },
  {
    id: 3,
    title: 'Platform Patrol at New Delhi Station (NDLS)',
    category: 'platform',
    src: '/rakshak_k9_hero.jpg',
    badge: 'UNIT IR-SS-01',
    desc: 'Rakshak-K9 unit performing routine automated security sweeps along Platform 4 adjacent to the Vande Bharat Express at New Delhi Railway Station.',
    meta: 'Time: 08:42 IST • Sector: NDLS Platform 4 • Status: Line Clear',
  },
  {
    id: 4,
    title: 'Foggy Morning Track Ballast & Rail Joint Inspection',
    category: 'track',
    src: '/rakshak_track_patrol.jpg',
    badge: 'BALLAST LASER SCAN',
    desc: 'Autonomous quad-traversal over coarse railway track ballast stones using forward laser projection to detect fishplate loosening and foreign track obstacles.',
    meta: 'Northern Railway Broad Gauge • Speed: 8 km/h • Dense Fog Clearance',
  },
  {
    id: 5,
    title: 'RPF Central Security Control Room (SCR) Live Telemetry',
    category: 'command',
    src: '/rakshak_command_ctr.jpg',
    badge: 'CCTNS INTEGRATED',
    desc: 'RPF officers monitoring multi-screen video walls displaying live thermal streams, 3D LiDAR point-cloud maps, and real-time alerts from deployed Rakshak-K9 units.',
    meta: 'RailTel Private 5G APN • Latency: 18ms • RPF Directorate General',
  },
  {
    id: 6,
    title: '16-Step Autonomous Surveillance Engineering Blueprint',
    category: 'blueprint',
    src: '/workflow.png',
    badge: 'SYSTEM FLOWCHART',
    desc: 'The official decision-matrix and multi-sensor evidence pipeline from patrol initialization to IPFS/blockchain evidence submission and patrol resumption.',
    meta: 'Confidential RPF Specification • 16 Active Stages • Verified 2026',
  },
]

export default function Gallery() {
  const [filter, setFilter] = useState('all')
  const [activeModalItem, setActiveModalItem] = useState(null)

  const filteredItems = filter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === filter)

  return (
    <section className={styles.gallerySection} id="gallery">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.subBadge}>OPERATIONAL VISUAL EVIDENCE</div>
          <h2 className={styles.sectionTitle}>Field Operations &amp; Deployment Gallery</h2>
          <div className={styles.headerDivider}></div>
          <p className={styles.sectionDesc}>
            High-resolution photographic and engineering documentation of Rakshak-K9 custom units deployed across
            active Indian Railways platforms, tracks, and RPF command centres.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className={styles.filterBar}>
          <button
            className={`${styles.filterBtn} ${filter === 'all' ? styles.filterActive : ''}`}
            onClick={() => setFilter('all')}
          >
            All Operational Views
          </button>
          <button
            className={`${styles.filterBtn} ${filter === 'cad' ? styles.filterActive : ''}`}
            onClick={() => setFilter('cad')}
          >
            📐 Custom CAD Schematic
          </button>
          <button
            className={`${styles.filterBtn} ${filter === 'platform' ? styles.filterActive : ''}`}
            onClick={() => setFilter('platform')}
          >
            🚉 Station Platforms
          </button>
          <button
            className={`${styles.filterBtn} ${filter === 'track' ? styles.filterActive : ''}`}
            onClick={() => setFilter('track')}
          >
            🛤️ Track Ballast Patrol
          </button>
          <button
            className={`${styles.filterBtn} ${filter === 'command' ? styles.filterActive : ''}`}
            onClick={() => setFilter('command')}
          >
            🖥️ RPF Command Room
          </button>
          <button
            className={`${styles.filterBtn} ${filter === 'blueprint' ? styles.filterActive : ''}`}
            onClick={() => setFilter('blueprint')}
          >
            📄 System Blueprint
          </button>
        </div>

        {/* Gallery Grid */}
        <div className={styles.galleryGrid}>
          {filteredItems.map(item => (
            <div
              key={item.id}
              className={styles.galleryCard}
              onClick={() => setActiveModalItem(item)}
            >
              <div className={styles.imageBox}>
                <img src={item.src} alt={item.title} className={styles.cardImg} />
                <span className={styles.cardBadge}>{item.badge}</span>
                <span className={styles.viewPrompt}>🔍 Click to Enlarge</span>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
                <div className={styles.cardMeta}>
                  <span>{item.meta}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Zoom Modal */}
      {activeModalItem && (
        <div className={styles.lightboxOverlay} onClick={() => setActiveModalItem(null)}>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.lightboxHeader}>
              <div>
                <span className={styles.lightboxBadge}>{activeModalItem.badge}</span>
                <h3 className={styles.lightboxTitle}>{activeModalItem.title}</h3>
              </div>
              <button className={styles.lightboxCloseBtn} onClick={() => setActiveModalItem(null)}>
                ✕ Close
              </button>
            </div>
            <div className={styles.lightboxImgWrap}>
              <img src={activeModalItem.src} alt={activeModalItem.title} className={styles.lightboxImg} />
            </div>
            <div className={styles.lightboxFooter}>
              <p className={styles.lightboxDesc}>{activeModalItem.desc}</p>
              <span className={styles.lightboxMeta}>{activeModalItem.meta}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
