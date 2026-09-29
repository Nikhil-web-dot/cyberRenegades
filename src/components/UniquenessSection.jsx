import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import styles from './UniquenessSection.module.css'

const innovationsEn = [
  {
    id: 'detachable',
    icon: '🧰',
    title: 'Detachable Inspection Unit',
    tag: 'CLOSE-RANGE FLEXIBILITY',
    highlight: 'Detection module unclips for close-range manual RPF inspection.',
    desc: 'The articulated detection arm and sensor head unclamp from the main robotic rover in under 10 seconds. RPF personnel can manually sweep under train passenger berths, tight AC 3-tier compartments, lavatory service hatches, and overhead luggage racks where full-sized rovers cannot enter.',
    badgeColor: 'blue',
  },
  {
    id: 'blackbox',
    icon: '🧪',
    title: 'On-Board Black-Box Confirmation',
    tag: 'ZERO LAB WAIT',
    highlight: 'Confirms suspected substance on-site—no forensic lab wait.',
    desc: 'Equipped with a sealed reagent chemical chamber directly on the rear deck. Collects suspect residue with its swab arm, administers fluorescent quenching reagent, and provides optical confirmation of explosive or narcotic compounds in minutes rather than days.',
    badgeColor: 'amber',
  },
  {
    id: 'pipeline',
    icon: '⚖️',
    title: 'Detection → Legal Proof Pipeline',
    tag: 'SEAMLESS CONVICTION CHAIN',
    highlight: 'Alarm → black-box confirmation → blockchain-backed evidence.',
    desc: 'Transforms raw sensor triggers into court-admissible proof. The moment a threat is verified, the system bundles radiometric video, GPS vectors, and black-box spectrophotometric curves into a cryptographically sealed digital package with zero manual tampering potential.',
    badgeColor: 'green',
  },
  {
    id: 'tamperproof',
    icon: '🛡️',
    title: 'Tamper-Proof Evidence Vault',
    tag: 'IPFS + BLOCKCHAIN',
    highlight: 'IPFS + blockchain protects evidence integrity while keeping originals retrievable.',
    desc: 'Evidence files are uploaded to decentralized IPFS via Pinata to generate a cryptographic Content ID (CID). The hash is permanently committed to the blockchain ledger, ensuring evidence cannot be deleted or manipulated while remaining instantly accessible to investigating magistrates.',
    badgeColor: 'purple',
  },
  {
    id: 'offline',
    icon: '📶',
    title: 'Offline-First Autonomous Operation',
    tag: 'ZERO JAMMING VULNERABILITY',
    highlight: 'Logs evidence offline and syncs automatically when connectivity returns.',
    desc: 'Railway corridors frequently pass through cellular dead-zones, underground tunnels, and deep cuttings. Rakshak-K9 encrypts all telemetry and evidence packets using AES-256 GCM onto an onboard tamper-resistant industrial SD vault, auto-burst syncing the moment RailTel 5G is restored.',
    badgeColor: 'red',
  },
  {
    id: 'multienv',
    icon: '🚉',
    title: 'One Robot, Multiple Environments',
    tag: 'TRI-ENVIRONMENT CAPABILITY',
    highlight: 'Patrols platforms, train coaches & track ballasts with one versatile unit.',
    desc: 'Engineered with high-traction, high-clearance off-road tires, independent spring shock absorbers, and sealed brushless gearmotors. Seamlessly navigates polished marble station concourses, climbs platform ramps, traverses broad-gauge coarse gravel ballasts, and rolls inside train coach aisles.',
    badgeColor: 'blue',
  },
]

const innovationsHi = [
  {
    id: 'detachable',
    icon: '🧰',
    title: 'डिटैचेबल निरीक्षण यूनिट',
    tag: 'निकट-दूरी लचीलापन',
    highlight: 'डिब्बों व बर्थ के नीचे मैनुअल जांच हेतु अलग होने योग्य मॉड्यूल।',
    desc: 'आर्टिकुलेटेड डिटेक्शन आर्म रोवर से 10 सेकंड में अलग हो जाती है। आरपीएफ जवान ट्रेन की निचली बर्थों, संकरे एसी डिब्बों, लगेज रैक और शौचालय सर्विस हैच की गहनता से हाथों से जांच कर सकते हैं।',
    badgeColor: 'blue',
  },
  {
    id: 'blackbox',
    icon: '🧪',
    title: 'ऑन-बोर्ड ब्लैक-बॉक्स रासायनिक पुष्टि',
    tag: 'शून्य लैब प्रतीक्षा',
    highlight: 'मौके पर ही संदिग्ध रासायनिक व विस्फोटक पदार्थ की पुष्टि।',
    desc: 'रोवर के पिछले हिस्से पर सीलबंद रासायनिक चैंबर लगा है। स्वैब आर्म द्वारा एकत्र नमूने पर फ्लोरोसेंट क्वेंचिंग रीएजेंट डालकर मिनटों में विस्फोटक अथवा वर्जित सामग्री की पुष्टि की जाती है।',
    badgeColor: 'amber',
  },
  {
    id: 'pipeline',
    icon: '⚖️',
    title: 'पहचान → कानूनी साक्ष्य पाइपलाइन',
    tag: 'अकाट्य कानूनी सबूत',
    highlight: 'अलार्म → ब्लैक-बॉक्स पुष्टि → ब्लॉकचेन समर्थित कानूनी सबूत।',
    desc: 'कच्चे सेंसर डेटा को सीधे अदालत में स्वीकार्य डिजिटल साक्ष्य में बदलता है। पुष्टि होते ही वीडियो, जीपीएस लोकेशन और स्पेक्ट्रोफोटोमेट्रिक ग्राफ का एन्क्रिप्टेड पैकेज बिना छेड़छाड़ के तैयार हो जाता है।',
    badgeColor: 'green',
  },
  {
    id: 'tamperproof',
    icon: '🛡️',
    title: 'अकाट्य छेड़छाड़-मुक्त साक्ष्य वॉल्ट',
    tag: 'IPFS + ब्लॉकचेन',
    highlight: 'आईपीएफएस और ब्लॉकचेन साक्ष्य की सत्यता व मूल प्रति सुरक्षित रखते हैं।',
    desc: 'साक्ष्य फाइलों को विकेन्द्रीकृत आईपीएफएस पर अपलोड कर विशिष्ट सीआईडी कोड बनाया जाता है। इसे ब्लॉकचेन पर हमेशा के लिए अंकित किया जाता है, जिससे कोई भी पुलिसकर्मी या बाहरी व्यक्ति इसे मिटा नहीं सकता।',
    badgeColor: 'purple',
  },
  {
    id: 'offline',
    icon: '📶',
    title: 'ऑफलाइन-फर्स्ट स्वायत्त संचालन',
    tag: 'शून्य नेटवर्क रुकावट',
    highlight: 'ऑफलाइन साक्ष्य रिकॉर्ड करता है और नेटवर्क आते ही स्वतः सिंक होता है।',
    desc: 'सुरंगों और दूरदराज के रेलवे ट्रैक पर जहां मोबाइल नेटवर्क शून्य होता है, रक्षक-K9 अंदरूनी 256GB एसडी कार्ड पर एईएस-256 एन्क्रिप्शन से डेटा सुरक्षित रखता है और सिग्नल मिलते ही रेल-टेल 5जी पर भेज देता है।',
    badgeColor: 'red',
  },
  {
    id: 'multienv',
    icon: '🚉',
    title: 'एक रोबोट, बहु-पर्यावरणीय गश्त',
    tag: 'सर्व-क्षेत्रीय गतिशीलता',
    highlight: 'प्लेटफॉर्म, ट्रेन डिब्बे और रेलवे ट्रैक गिट्टी पर एकल रोबोट गश्त।',
    desc: 'उच्च-कर्षण ऑफ-रोड टायर और इंडिपेंडेंट सस्पेंशन के साथ निर्मित। चिकने स्टेशन फर्श, बोगी के संकरे रास्ते और ब्रॉड गेज की नुकीली गिट्टियों पर बिना फंसे निरंतर गश्त करता है।',
    badgeColor: 'blue',
  },
]

// Inline scroll-visibility detector — no separate hook file needed
function useInView(threshold = 0.2) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, isVisible]
}

function InnovationCard({ item }) {
  const [ref, isVisible] = useInView(0.2)

  return (
    <div
      ref={ref}
      className={`${styles.card} ${isVisible ? styles.isVisible : ''}`}
    >
      <div className={styles.cardTop}>
        <div className={styles.iconCircle}>
          <span>{item.icon}</span>
        </div>
        <span className={`${styles.tagPill} ${styles[`tag_${item.badgeColor}`]}`}>
          {item.tag}
        </span>
      </div>

      <h3 className={styles.cardTitle}>{item.title}</h3>
      <div className={styles.highlightBanner}>
        <span className={styles.starIcon}>⚡</span>
        <span className={styles.highlightText}>{item.highlight}</span>
      </div>

      <p className={styles.cardDesc}>{item.desc}</p>
    </div>
  )
}

export default function UniquenessSection() {
  const { lang, t } = useLanguage()
  const list = lang === 'hi' ? innovationsHi : innovationsEn

  return (
    <section className={styles.uniqueSection} id="uniqueness">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.subBadge}>{lang === 'hi' ? 'मुख्य तकनीकी नवाचार' : 'CORE ROBOTIC INNOVATIONS'}</div>
          <h2 className={styles.sectionTitle}>{t.uniquenessSectionTitle}</h2>
          <div className={styles.headerDivider}></div>
          <p className={styles.sectionDesc}>{t.uniquenessSectionSub}</p>
        </div>

        {/* 6 Core Innovations Cards Grid */}
        <div className={styles.grid}>
          {list.map((item) => (
            <InnovationCard key={item.id} item={item} />
          ))}
        </div>

        {/* Custom Engineering Schematic Banner */}
        <div className={styles.schematicBanner}>
          <div className={styles.schematicLeft}>
            <span className={styles.schematicBadge}>CUSTOM DESIGN ROBOTIC PLATFORM</span>
            <h4 className={styles.schematicTitle}>Integrated Hardware &amp; Swab Test Architecture</h4>
            <p className={styles.schematicSub}>
              Featuring an articulated boom arm with mmWave radar, central LiDAR-IMU turret, and rear black-box chemical chamber.
            </p>
          </div>
          <a href="#specifications" className={styles.btnInspectSpecs}>
            Review Detailed CAD Specs →
          </a>
        </div>
      </div>
    </section>
  )
}