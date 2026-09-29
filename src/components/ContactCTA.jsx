import { useState } from 'react'
import styles from './ContactCTA.module.css'

const contacts = [
  {
    icon: '🏛️',
    label: 'Nodal Ministry',
    val: 'Ministry of Railways\nGovernment of India',
    desc: 'Rail Bhavan, Raisina Road, New Delhi 110001',
  },
  {
    icon: '👮',
    label: 'Operating Force',
    val: 'Railway Protection Force (RPF)\nDirectorate General',
    desc: 'Security Directorate, Ministry of Railways',
  },
  {
    icon: '📞',
    label: 'Central Emergency Helpline',
    val: 'Security Helpline: 139\nWomen Passenger Helpline: 182',
    desc: 'Toll-free 24×7 Pan-India Security Dispatch',
  },
]

export default function ContactCTA() {
  const [form, setForm] = useState({ name: '', org: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1000))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.subBadge}>RPF COMMAND DISPATCH</div>
          <h2 className={styles.sectionTitle}>Station Deployment &amp; Emergency Inquiry</h2>
          <div className={styles.headerDivider}></div>
          <p className={styles.sectionDesc}>
            For Railway Zonal Administrations, RPF Divisions, Research Institutions, or Public Security Queries.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Left Cards */}
          <div className={styles.cardsCol}>
            {contacts.map((c, i) => (
              <div key={i} className={styles.contactCard}>
                <div className={styles.cardIconWrap}>{c.icon}</div>
                <div className={styles.cardText}>
                  <span className={styles.cardLabel}>{c.label}</span>
                  <strong className={styles.cardVal}>{c.val}</strong>
                  <p className={styles.cardDesc}>{c.desc}</p>
                </div>
              </div>
            ))}

            <div className={styles.securitySeal}>
              <span className={styles.sealIcon}>🛡️</span>
              <div className={styles.sealText}>
                <strong>OFFICIAL GOVERNMENT SECURITY PORTAL</strong>
                <span>All communication is monitored and logged under Indian Railways Security Directives.</span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className={styles.formCol}>
            {submitted ? (
              <div className={styles.successBox}>
                <div className={styles.successCheck}>✓</div>
                <h3 className={styles.successTitle}>Inquiry Dispatched to RPF HQ</h3>
                <p className={styles.successDesc}>
                  Your deployment request or inquiry has been securely transmitted to the Railway Protection Force
                  Central Command Room at Rail Bhavan. Reference ID: <strong>IR-RPF-2026-0974</strong>.
                </p>
                <button className={styles.btnReset} onClick={() => setSubmitted(false)}>
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form className={styles.inquiryForm} onSubmit={handleSubmit}>
                <div className={styles.formTopBar}>
                  <h3 className={styles.formHeading}>Official Station Deployment Request</h3>
                  <span className={styles.formSub}>Form RPF-K9-DEP-01</span>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label className={styles.label}>Full Name / Officer Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. S. K. Sharma"
                      className={styles.input}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Railway Zone / Division / Org *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Northern Railway (Delhi Div)"
                      className={styles.input}
                      value={form.org}
                      onChange={(e) => setForm({ ...form, org: e.target.value })}
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>Official Contact Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="officer@railways.gov.in"
                    className={styles.input}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>Deployment Scope / Security Requirement *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Specify station name, broad-gauge track sector, number of platforms, or technical inquiry details..."
                    className={styles.textarea}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <button type="submit" className={styles.btnSubmit} disabled={loading}>
                  {loading ? 'Transmitting to Rail Bhavan...' : 'Submit Deployment Request →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
