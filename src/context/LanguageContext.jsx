import { createContext, useContext, useState, useEffect } from 'react'

const translations = {
  en: {
    // Top strip
    govIndia: 'Government of India',
    ministryRailways: 'Ministry of Railways',
    rpfName: 'Railway Protection Force (RPF)',
    systemSubtitle: 'Rakshak K9 – AI-Powered Autonomous Railway Security Sentinel',
    fontSize: 'Font Size',

    // Header & Badges
    mainTitle: 'INDIAN RAILWAYS - RAKSHAK-K9',
    badgeGov: 'GOVERNMENT OF INDIA',
    badgeUnit: 'RPF UNIT 07 (IRON HOUND)',
    badgeGps: 'GPS LOCKED',
    subTitle: 'MINISTRY OF RAILWAYS • GOVERNMENT OF INDIA • RAILWAY PROTECTION FORCE (RPF)',
    onlineStatus: 'RailTel 5G (Online)',
    offlineStatus: 'Offline (SD Encrypted)',
    battLabel: 'BATT',
    patrolLabel: 'PATROL: WP 2/12',
    officerLogin: 'RPF Officer Login',
    audioOff: 'Audio: OFF',
    audioOn: 'Audio: ON',
    toggleNet: 'Toggle Network',

    // Safety Ribbon
    safetyFirst: 'SAFETY FIRST',
    safetyHindi: 'सुरक्षित यात्रा, सुखद यात्रा',
    safetyEn: 'SAFE TRAVEL TO ALL PEOPLE',
    signalClear: 'RAILWAY SIGNAL: LINE CLEAR',
    sectorInfo: 'SECTOR: NDLS PLATFORM 4 | BROAD GAUGE',

    // Nav
    navHome: 'Home',
    navUniqueness: '✨ System Uniqueness',
    navSpecs: 'Specifications',
    navWorks: 'How It Works',
    navSetup: 'How It Setup',
    navSecures: 'How It Secures Railway',
    navTrust: 'How To Trust On It',
    navGallery: 'Gallery',
    navContact: 'Emergency Contact',
    helplineText: 'RPF Security Helpline:',

    // Hero
    heroPill: 'CUSTOM DESIGN ROBOTIC SYSTEM • RPF UNIT 07',
    heroTagline: 'Custom-Built Autonomous Multi-Environment Surveillance & Chemical Confirmation Robot',
    heroDesc: 'Engineered exclusively for Indian Railways. Combines detachable close-range inspection, on-board black-box chemical confirmation, and court-admissible blockchain evidence to safeguard platforms, train coaches, and broad-gauge track ballasts.',
    
    // Uniqueness in Hero
    u1Title: 'Detachable Inspection Unit:',
    u1Desc: ' Detection module unclips for close-range manual coach & berth sweeps.',
    u2Title: 'On-Board Black-Box Confirmation:',
    u2Desc: ' Confirms suspected substances on-site via fluorescent quenching — no lab wait.',
    u3Title: 'Detection → Legal Proof:',
    u3Desc: ' Sensor alarm → black-box confirmation → blockchain-backed tamper-proof evidence.',
    u4Title: 'One Robot, Multiple Environments:',
    u4Desc: ' Patrols platforms, train coaches, marshalling yards & track ballasts with one unit.',

    btnExploreUnique: 'System Uniqueness',
    btnHardwareSpecs: 'Hardware Specifications',
    btnViewWorkflow: '16-Step Pipeline',

    // View toggles
    view3D: '🚀 3D CAD Isometric',
    viewSchematic: '📐 CAD Schematic',
    viewField: '🚉 Station Patrol',

    // Section Titles
    uniquenessSectionTitle: 'What Makes Rakshak-K9 Truly Unique',
    uniquenessSectionSub: 'Unlike generic commercial patrol bots, Rakshak-K9 is a purpose-built custom robotic system engineered for the real operational challenges of Indian Railways.',
    specsSectionTitle: 'Custom Hardware & Subsystem Specifications',
    specsSectionSub: 'Engineered exclusively for Indian Railways: showcasing the detachable inspection unit, on-board swab test kit, 360° LiDAR-IMU navigation, and tamper-proof blockchain pipeline.',
    workflowSectionTitle: 'How Rakshak-K9 Works',
    workflowSectionSub: 'A 16-step autonomous surveillance pipeline — from track patrol to automated robotic swab analysis and court-admissible blockchain evidence logs.',
    setupSectionTitle: 'How Rakshak-K9 Is Set Up at Any Railway Station',
    setupSectionSub: 'A structured 6-day turnkey deployment process certified by Indian Railways and RPF with zero disruption to train operations.',
    securesSectionTitle: 'How Rakshak-K9 Secures Indian Railways',
    securesSectionSub: 'Addressing critical physical, chemical, and track-sabotage threats across India\'s 68,000+ route kilometres and 7,300+ stations.',
    trustSectionTitle: 'Why Indian Railways Trusts Rakshak-K9',
    trustSectionSub: 'Built on transparency, statutory RDSO compliance, Section 65B legal admissibility, and harsh all-weather Indian climate endurance.',
    gallerySectionTitle: 'Field Operations & Deployment Gallery',
    gallerySectionSub: 'High-resolution 3D engineering models and live operational documentation across active Indian Railways platforms and tracks.',
    contactSectionTitle: 'Station Deployment & Emergency Inquiry',
    contactSectionSub: 'For Railway Zonal Administrations, RPF Divisions, Research Institutions, or Public Security Inquiries.',

    // Footer
    emergencyHelp: 'INDIAN RAILWAYS 24×7 SECURITY HELPLINE: 139',
    emergencySub: 'For immediate assistance, suspicious object reporting, or passenger security support',
    call139: 'Call 139 (Toll Free)',
    meriSaheli: 'RPF "Meri Saheli" Women Safety Protocol Active',
  },

  hi: {
    // Top strip
    govIndia: 'भारत सरकार',
    ministryRailways: 'रेल मंत्रालय',
    rpfName: 'रेलवे सुरक्षा बल (RPF)',
    systemSubtitle: 'रक्षक K9 – एआई-संचालित स्वायत्त रेलवे सुरक्षा प्रहरी',
    fontSize: 'अक्षर आकार',

    // Header & Badges
    mainTitle: 'भारतीय रेल - रक्षक-K9',
    badgeGov: 'भारत सरकार',
    badgeUnit: 'आरपीएफ यूनिट 07 (आयरन हाउंड)',
    badgeGps: 'जीपीएस लॉक',
    subTitle: 'रेल मंत्रालय • भारत सरकार • रेलवे सुरक्षा बल (RPF)',
    onlineStatus: 'रेल-टेल 5G (ऑनलाइन)',
    offlineStatus: 'ऑफलाइन (एसडी एन्क्रिप्टेड)',
    battLabel: 'बैटरी',
    patrolLabel: 'गश्त: WP 2/12',
    officerLogin: 'आरपीएफ अधिकारी लॉगिन',
    audioOff: 'ऑडियो: बंद',
    audioOn: 'ऑडियो: चालू',
    toggleNet: 'नेटवर्क टॉगल',

    // Safety Ribbon
    safetyFirst: 'सुरक्षा सर्वोपरि',
    safetyHindi: 'सुरक्षित यात्रा, सुखद यात्रा',
    safetyEn: 'सभी यात्रियों की सुरक्षा हमारा संकल्प',
    signalClear: 'रेलवे सिग्नल: लाइन क्लियर',
    sectorInfo: 'सेक्टर: नई दिल्ली प्लेटफॉर्म 4 | ब्रॉड गेज',

    // Nav
    navHome: 'होम',
    navUniqueness: '✨ मुख्य विशेषताएं',
    navSpecs: 'तकनीकी विवरण',
    navWorks: 'कार्यप्रणाली',
    navSetup: 'स्थापना प्रक्रिया',
    navSecures: 'रेल सुरक्षा प्रणाली',
    navTrust: 'विश्वसनीयता व प्रमाणन',
    navGallery: 'गैलरी',
    navContact: 'आपातकालीन संपर्क',
    helplineText: 'आरपीएफ सुरक्षा हेल्पलाइन:',

    // Hero
    heroPill: 'कस्टम डिजाइन रोबोटिक प्रणाली • आरपीएफ यूनिट 07',
    heroTagline: 'कस्टम-निर्मित स्वायत्त बहु-पर्यावरणीय गश्ती एवं रासायनिक पुष्टि रोबोट',
    heroDesc: 'भारतीय रेल के लिए विशेष रूप से विकसित। प्लेटफॉर्म, ट्रेन डिब्बों और पटरियों की सुरक्षा के लिए डिटैचेबल हैंडहेल्ड जांच यूनिट, ऑन-बोर्ड ब्लैक-बॉक्स रासायनिक पुष्टि और ब्लॉकचेन आधारित कानूनी साक्ष्य का संयोजन।',

    // Uniqueness in Hero
    u1Title: 'डिटैचेबल निरीक्षण यूनिट:',
    u1Desc: ' डिब्बों व बर्थ के नीचे त्वरित हैंडहेल्ड जांच हेतु अलग होने योग्य मॉड्यूल।',
    u2Title: 'ऑन-बोर्ड ब्लैक-बॉक्स पुष्टि:',
    u2Desc: ' बिना लैब प्रतीक्षा के फ्लोरोसेंट क्वेंचिंग द्वारा मौके पर संदिग्ध पदार्थ की पुष्टि।',
    u3Title: 'पहचान → कानूनी साक्ष्य:',
    u3Desc: ' सेंसर अलार्म → ब्लैक-बॉक्स पुष्टि → ब्लॉकचेन समर्थित अकाट्य सबूत।',
    u4Title: 'एक रोबोट, बहु-पर्यावरण:',
    u4Desc: ' प्लेटफॉर्म, बोगी और ट्रैक गिट्टी सभी पर समान दक्षता से गश्त।',

    btnExploreUnique: 'मुख्य विशेषताएं देखें',
    btnHardwareSpecs: 'हार्डवेयर विवरण',
    btnViewWorkflow: '16-चरणीय प्रक्रिया',

    // View toggles
    view3D: '🚀 3D सीएडी मॉडल',
    viewSchematic: '📐 सीएडी स्कीमेटिक',
    viewField: '🚉 स्टेशन गश्त',

    // Section Titles
    uniquenessSectionTitle: 'रक्षक-K9 की अद्वितीय विशेषताएं',
    uniquenessSectionSub: 'सामान्य सुरक्षा रोबोटों से अलग, रक्षक-K9 भारतीय रेल और आरपीएफ की वास्तविक जमीनी चुनौतियों के समाधान हेतु बनाया गया कस्टम रोबोटिक सिस्टम है।',
    specsSectionTitle: 'कस्टम हार्डवेयर एवं उप-प्रणाली विवरण',
    specsSectionSub: 'भारतीय रेल हेतु विशेष रूप से तैयार: डिटैचेबल इंस्पेक्शन यूनिट, ऑन-बोर्ड स्वैब किट, 360° LiDAR-IMU नेविगेशन और ब्लॉकचेन साक्ष्य पाइपलाइन।',
    workflowSectionTitle: 'रक्षक-K9 की कार्यप्रणाली',
    workflowSectionSub: '16-चरणीय स्वायत्त निगरानी प्रक्रिया — गश्त से लेकर स्वैब परीक्षण और अदालत में मान्य ब्लॉकचेन साक्ष्य रिकॉर्ड तक।',
    setupSectionTitle: 'रेलवे स्टेशनों पर रक्षक-K9 की स्थापना प्रक्रिया',
    setupSectionSub: 'ट्रेनों के आवागमन को बाधित किए बिना भारतीय रेल और आरपीएफ द्वारा प्रमाणित 6-दिवसीय आसान स्थापना प्रक्रिया।',
    securesSectionTitle: 'रक्षक-K9 किस प्रकार करता है रेल सुरक्षा',
    securesSectionSub: 'भारत के 68,000+ रूट किलोमीटर और 7,300+ स्टेशनों पर ट्रैक तोड़फोड़, लावारिस सामान और सुरक्षा खतरों से 24x7 रक्षा।',
    trustSectionTitle: 'भारतीय रेल क्यों करती है रक्षक-K9 पर भरोसा',
    trustSectionSub: 'आरडीएसओ मानकों का अनुपालन, धारा 65B भारतीय साक्ष्य अधिनियम की मान्यता और कठोर भारतीय मौसम में परीक्षित।',
    gallerySectionTitle: 'क्षेत्रीय परिचालन एवं मॉडल गैलरी',
    gallerySectionSub: 'उच्च-रिज़ॉल्यूशन 3D इंजीनियरिंग मॉडल और भारतीय रेल प्लेटफॉर्मों पर लाइव संचालन की तस्वीरें।',
    contactSectionTitle: 'स्टेशन परिनियोजन एवं आपातकालीन संपर्क',
    contactSectionSub: 'रेलवे जोनल प्रशासन, आरपीएफ मंडल, अनुसंधान संस्थानों और सार्वजनिक सुरक्षा पूछताछ हेतु।',

    // Footer
    emergencyHelp: 'भारतीय रेल 24×7 सुरक्षा हेल्पलाइन: 139',
    emergencySub: 'किसी भी आपातकालीन सहायता, संदिग्ध वस्तु की सूचना या यात्री सुरक्षा सहायता हेतु संपर्क करें',
    call139: '139 डायल करें (टोल फ्री)',
    meriSaheli: 'आरपीएफ "मेरी सहेली" महिला सुरक्षा प्रोटोकॉल सक्रिय',
  },
}

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')
  const [fontScale, setFontScale] = useState(100) // 90%, 100%, 115%

  useEffect(() => {
    document.documentElement.style.fontSize = `${(16 * fontScale) / 100}px`
  }, [fontScale])

  const t = translations[lang] || translations.en

  return (
    <LanguageContext.Provider value={{ lang, setLang, fontScale, setFontScale, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
