import styles from './Stats.module.css'

const stats = [
  { num: '360°', label: 'Visual Coverage', icon: '👁️' },
  { num: '<2s', label: 'Alert Latency', icon: '⚡' },
  { num: '24/7', label: 'Autonomous Patrol', icon: '🤖' },
  { num: '7,349', label: 'Stations Covered', icon: '🚉' },
  { num: '67,956', label: 'KM Track Monitored', icon: '🛤️' },
  { num: '100%', label: 'Tamper-proof Logs', icon: '🔐' },
]

export default function Stats() {
  return (
    <section id="stats" className={styles.stats}>
      <div className="container">
        <div className={styles.grid}>
          {stats.map((s, i) => (
            <div key={i} className={`${styles.card} fade-up`} style={{ transitionDelay: `${i * 0.07}s` }}>
              <span className={styles.icon}>{s.icon}</span>
              <span className={styles.num}>{s.num}</span>
              <span className={styles.label}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
