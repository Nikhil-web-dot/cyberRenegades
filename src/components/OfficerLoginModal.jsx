import { useState } from 'react'
import IRLogo from './IRLogo'
import styles from './OfficerLoginModal.module.css'

export default function OfficerLoginModal({ isOpen, onClose }) {
  const [badgeId, setBadgeId] = useState('RPF-DL-0742')
  const [pin, setPin] = useState('')
  const [division, setDivision] = useState('NR-Delhi')
  const [loggedIn, setLoggedIn] = useState(false)
  const [loading, setLoading] = useState(false)

  if (!isOpen) return null

  const handleLogin = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setLoggedIn(true)
    }, 900)
  }

  const handleLogout = () => {
    setLoggedIn(false)
    setPin('')
    onClose()
  }

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className={styles.modalHeader}>
          <div className={styles.headerLeft}>
            <IRLogo size={36} />
            <div>
              <h3 className={styles.portalTitle}>RPF SECURE CONSOLE</h3>
              <span className={styles.portalSub}>RAKSHAK-K9 TELEMETRY &amp; DISPATCH</span>
            </div>
          </div>
          <button className={styles.closeBtn} onClick={onClose}>✕</button>
        </div>

        {/* Content */}
        {loggedIn ? (
          <div className={styles.successState}>
            <div className={styles.successIconCircle}>✓</div>
            <h4 className={styles.officerName}>Inspector S. K. Verma (Badge #0742)</h4>
            <span className={styles.clearanceBadge}>SECURITY CLEARANCE: LEVEL 4 GRANTED</span>
            <p className={styles.sessionInfo}>
              Sector: <strong>New Delhi (NDLS) Platform 4</strong> • Patrol Unit: <strong>IR-SS-01 (Iron Hound)</strong>
            </p>

            <div className={styles.controlPanelMini}>
              <div className={styles.statBox}>
                <span className={styles.statKey}>CURRENT WP</span>
                <span className={styles.statVal}>WP 2 / 12</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statKey}>EST. RUNTIME</span>
                <span className={styles.statVal}>6h 40m</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statKey}>RADAR STATUS</span>
                <span className={styles.statVal} style={{ color: '#16a34a' }}>CLEAR</span>
              </div>
            </div>

            <div className={styles.actionBtnRow}>
              <button
                className={styles.btnActionPrimary}
                onClick={() => {
                  alert('Manual Emergency Override Beacon Dispatched to Rakshak-K9 Unit IR-SS-01!')
                }}
              >
                🚨 Trigger Immediate Track Sweep
              </button>
              <button className={styles.btnActionSecondary} onClick={handleLogout}>
                Log Out Session
              </button>
            </div>
          </div>
        ) : (
          <form className={styles.loginForm} onSubmit={handleLogin}>
            <div className={styles.instructionBanner}>
              🔒 Restricted to authorized Railway Protection Force personnel. Unauthorized access is punishable under Railway Act Section 145.
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>RPF Service ID / Badge Number</label>
              <input
                type="text"
                className={styles.inputField}
                required
                value={badgeId}
                onChange={(e) => setBadgeId(e.target.value)}
                placeholder="e.g. RPF-NR-0842"
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Railway Division / Sector</label>
              <select
                className={styles.inputField}
                value={division}
                onChange={(e) => setDivision(e.target.value)}
              >
                <option value="NR-Delhi">Northern Railway • Delhi Division (NDLS)</option>
                <option value="WR-Mumbai">Western Railway • Mumbai Central Division (MMCT)</option>
                <option value="ER-Howrah">Eastern Railway • Howrah Division (HWH)</option>
                <option value="SR-Chennai">Southern Railway • Chennai Central Division (MAS)</option>
                <option value="SCR-Secunderabad">South Central Railway • Secunderabad (SC)</option>
              </select>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Security Cryptographic Key / PIN</label>
              <input
                type="password"
                className={styles.inputField}
                required
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="••••••••"
              />
            </div>

            <button type="submit" className={styles.btnLoginSubmit} disabled={loading}>
              {loading ? 'Authenticating with RailTel HSM...' : 'Authorize Officer Access →'}
            </button>
          </form>
        )}

        <div className={styles.modalFooter}>
          <span>Government of India • Ministry of Railways • Cyber Security Directorate</span>
        </div>
      </div>
    </div>
  )
}
