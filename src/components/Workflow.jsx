import { useState } from 'react'
import styles from './Workflow.module.css'

const stepsData = [
  {
    step: 1,
    title: 'Start Surveillance',
    sub: 'Sensor Initialization',
    desc: 'Dual 4K cameras, 360° LiDAR, and spatial digital-twin mapping initialized. Diagnostic system check completes.',
    type: 'process',
    icon: '🚀',
  },
  {
    step: 2,
    title: 'Navigate Route',
    sub: 'Patrol Path & Camera Scans',
    desc: 'Autonomous traversal along platform or rail tracks. If GPS is unavailable/jammed, switches immediately to LiDAR + IMU + Visual SLAM.',
    type: 'process',
    icon: '🧭',
  },
  {
    step: 3,
    title: 'Detect Object',
    sub: '360° RGB + YOLOv8 + OpenCV',
    desc: 'Deep learning pipeline scans 360° field of view for unattended luggage, suspicious parcels, wire cuts, or intruders.',
    type: 'process',
    icon: '🔍',
  },
  {
    step: 4,
    title: 'Suspicious Check 1',
    sub: 'Threat Probability Evaluation',
    desc: 'Neural network confidence threshold check. If NO suspicious object detected, robot loops back to navigate route.',
    type: 'decision',
    icon: '⚖️',
  },
  {
    step: 5,
    title: 'Record GPS & Flag',
    sub: 'Coordinates & Vector Logging',
    desc: 'Stores exact latitude/longitude, track kilometre marker, and timestamp. Flags target in RPF command database.',
    type: 'action',
    icon: '📍',
  },
  {
    step: 6,
    title: 'Move to Target',
    sub: 'Precision Path Planning',
    desc: 'Plans safe trajectory navigating platform crowds or track ballast gravel to approach within 1.5 metres of flagged object.',
    type: 'process',
    icon: '🎯',
  },
  {
    step: 7,
    title: 'Verify & Inspect',
    sub: 'mmWave + BME688 + Thermal',
    desc: 'Close-range multi-sensor fusion: mmWave radar penetrates baggage walls, BME688 sniffs for VOC/explosive vapors, thermal camera inspects heat signature.',
    type: 'process',
    icon: '🔬',
  },
  {
    step: 8,
    title: 'Suspicious Check 2',
    sub: 'Chemical/Vapor Threshold',
    desc: 'If sensor readings indicate harmless item, robot resumes routine patrol. If positive vapor or concealed density is confirmed, escalation begins.',
    type: 'decision',
    icon: '⚠️',
  },
  {
    step: 9,
    title: 'Alert RPF Unit',
    sub: 'Real-Time Emergency Dispatch',
    desc: 'High-priority SOS alert sent to RPF Security Control Room with GPS coordinate pin, live video feed, and initial threat classification.',
    type: 'alert',
    icon: '🚨',
  },
  {
    step: 10,
    title: 'Unconfirmed Evidence Package',
    sub: 'Telemetry & Snapshot Bundle',
    desc: 'Bundles GPS coordinate metadata, sensor logs, high-res images, and thermal radiometric data into an encrypted archive.',
    type: 'data',
    icon: '📦',
  },
  {
    step: 11,
    title: 'Network Check & IPFS Upload',
    sub: 'Pinata Gateway / Offline SD',
    desc: 'Checks RailTel 5G network. If online, pushes package to IPFS via Pinata to get CID. If offline, AES-encrypts directly to tamper-proof onboard SD card.',
    type: 'network',
    icon: '🌐',
  },
  {
    step: 12,
    title: 'Push to Blockchain',
    sub: 'Immutable Ledger Stamping',
    desc: 'Unconfirmed package hash and IPFS CID committed to the blockchain, creating a legally tamper-proof timestamped record.',
    type: 'blockchain',
    icon: '⛓️',
  },
  {
    step: 13,
    title: 'Swab Collection',
    sub: 'Robotic Arm / RPF Officer',
    desc: 'Automated robotic swab collection arm or RPF bomb disposal officer sweeps suspect surface to extract microscopic particulate residue.',
    type: 'swab',
    icon: '🧬',
  },
  {
    step: 14,
    title: 'Apply Fluorescent Reagent',
    sub: 'Chemical Reaction Chamber',
    desc: 'Specialized chemical reagent droplet applied onto the collected swab sample inside the onboard sealed testing chamber.',
    type: 'chemistry',
    icon: '🧪',
  },
  {
    step: 15,
    title: 'Black-Box Test',
    sub: 'Fluorescent Quenching Analysis',
    desc: 'Spectrophotometric sensor analyzes fluorescence change. Quenching occurs if nitro-aromatic explosives or hazardous contraband are present.',
    type: 'test',
    icon: '💡',
  },
  {
    step: 16,
    title: 'Final Evidence & Resume',
    sub: 'Confirmed Ledger Push & Patrol',
    desc: 'Confirmed test results merged into Final Court Evidence Package, pushed to Blockchain & IPFS. Robot resumes patrol loop to keep railways secure.',
    type: 'final',
    icon: '✅',
  },
]

export default function Workflow() {
  const [selectedStep, setSelectedStep] = useState(stepsData[0])
  const [showModal, setShowModal] = useState(false)

  return (
    <section className={styles.workflowSection} id="how-it-works">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.subBadge}>16-STEP AUTONOMOUS SURVEILLANCE PIPELINE</div>
          <h2 className={styles.sectionTitle}>How Rakshak-K9 Works</h2>
          <div className={styles.headerDivider}></div>
          <p className={styles.sectionDesc}>
            From initial broad-gauge patrol to automated robotic swab analysis and immutable blockchain
            chain-of-custody — every second is mathematically accounted for.
          </p>
        </div>

        {/* Action button to view full diagram */}
        <div className={styles.diagramCtaRow}>
          <button className={styles.btnOpenDiagram} onClick={() => setShowModal(true)}>
            <span>📄</span> View Full 16-Step Blueprint Diagram (High-Res)
          </button>
          <span className={styles.orText}>or click any step below to inspect operational protocol:</span>
        </div>

        {/* 16 Steps Interactive Navigation Matrix */}
        <div className={styles.stepsMatrix}>
          {stepsData.map((s) => (
            <button
              key={s.step}
              className={`${styles.stepChip} ${selectedStep.step === s.step ? styles.stepChipActive : ''}`}
              onClick={() => setSelectedStep(s)}
            >
              <span className={styles.stepNum}>{s.step < 10 ? `0${s.step}` : s.step}</span>
              <span className={styles.stepTitleMini}>{s.title}</span>
            </button>
          ))}
        </div>

        {/* Selected Step Detail Panel */}
        <div className={styles.detailCard}>
          <div className={styles.detailTop}>
            <div className={styles.detailLeft}>
              <span className={styles.stepBadgeBig}>STEP {selectedStep.step} OF 16</span>
              <h3 className={styles.detailTitle}>{selectedStep.title}</h3>
              <span className={styles.detailSub}>{selectedStep.sub}</span>
            </div>
            <div className={styles.detailIconWrap}>
              <span className={styles.detailIcon}>{selectedStep.icon}</span>
            </div>
          </div>

          <div className={styles.detailBody}>
            <p className={styles.detailDesc}>{selectedStep.desc}</p>
          </div>

          <div className={styles.detailFooter}>
            <div className={styles.footerStepNav}>
              <button
                className={styles.navStepBtn}
                disabled={selectedStep.step === 1}
                onClick={() => setSelectedStep(stepsData[selectedStep.step - 2])}
              >
                ← Previous Step
              </button>
              <span className={styles.stepCount}>Protocol Stage {selectedStep.step} / 16</span>
              <button
                className={styles.navStepBtn}
                disabled={selectedStep.step === 16}
                onClick={() => setSelectedStep(stepsData[selectedStep.step])}
              >
                Next Step →
              </button>
            </div>
          </div>
        </div>

        {/* Diagram Thumbnail Preview */}
        <div className={styles.thumbnailBanner} onClick={() => setShowModal(true)}>
          <div className={styles.thumbInfo}>
            <span className={styles.thumbBadge}>OFFICIAL RPF ARCHITECTURE</span>
            <h4 className={styles.thumbTitle}>Full 16-Step Surveillance Decision Flowchart</h4>
            <p className={styles.thumbDesc}>Click to enlarge high-resolution operational engineering diagram</p>
          </div>
          <div className={styles.thumbImageWrap}>
            <img src="/workflow.png" alt="Operational Flowchart Thumbnail" className={styles.thumbImg} />
            <span className={styles.zoomPill}>🔍 Click to Enlarge</span>
          </div>
        </div>
      </div>

      {/* Modal for Full Blueprint Diagram */}
      {showModal && (
        <div className={styles.modalOverlay} onClick={() => setShowModal(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <div className={styles.modalHeaderLeft}>
                <span className={styles.modalLogo}>🇮🇳</span>
                <h3 className={styles.modalTitle}>Rakshak-K9 16-Step Operational Surveillance Flowchart</h3>
              </div>
              <button className={styles.modalCloseBtn} onClick={() => setShowModal(false)}>✕ Close</button>
            </div>
            <div className={styles.modalBody}>
              <img
                src="/workflow.png"
                alt="Rakshak K9 Complete 16 Step Workflow Diagram"
                className={styles.modalFullImage}
              />
            </div>
            <div className={styles.modalFooter}>
              <span>Ministry of Railways • RPF Unit 07 Iron Hound • Confidential Technical Flowchart</span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
