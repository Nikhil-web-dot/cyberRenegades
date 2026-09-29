<<<<<<< HEAD
# 🇮🇳 Rakshak K9 — Indian Railways MERN Stack Website

**Official landing page for the Rakshak K9 AI-powered autonomous surveillance robot**  
*Railway Protection Force · Ministry of Railways · Government of India*

---

## 🚀 Quick Start

### Frontend (React + Vite)
```bash
cd rakshak-k9-react
npm install
npm run dev
```
Opens at → **http://localhost:5173**

### Backend (Express API)
```bash
cd rakshak-k9-react/server
npm install
npm start
```
Runs at → **http://localhost:5000**

---

## 🏗️ Project Structure

```
rakshak-k9-react/
├── public/
│   └── workflow.png          # Rakshak K9 operational workflow diagram
├── src/
│   ├── components/
│   │   ├── IRLogo.jsx        # Indian Railways SVG logo component
│   │   ├── Navbar.jsx        # Sticky header with mobile menu
│   │   ├── Hero.jsx          # Blue/white split hero section
│   │   ├── Stats.jsx         # Key metrics bar
│   │   ├── Features.jsx      # 6-card capability grid
│   │   ├── TechStack.jsx     # 12-chip technology grid
│   │   ├── Workflow.jsx      # 16-step workflow + diagram
│   │   ├── Deployment.jsx    # RPF deployment stats + checklist
│   │   ├── BlockchainChain.jsx  # 5-step evidence pipeline
│   │   ├── ContactCTA.jsx    # Enquiry form + contact cards
│   │   └── Footer.jsx        # Full footer with links
│   ├── App.jsx               # Root component + scroll observer
│   ├── main.jsx              # React entry point
│   └── index.css             # Global CSS variables + utilities
├── server/
│   ├── index.js              # Express API server
│   └── package.json
└── vite.config.js            # Vite + API proxy config
```

---

## 🎨 Design System

| Token | Value | Usage |
|---|---|---|
| `--ir-blue` | `#003F87` | Primary brand blue |
| `--ir-blue-dark` | `#002760` | Headings, header |
| `--ir-blue-pale` | `#EBF2FB` | Backgrounds, chips |
| `--ir-red` | `#C8102E` | CTAs, accents |
| `--ir-gold` | `#F5A623` | Logo, highlights |

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/health` | Server health check |
| GET | `/api/stats` | Deployment statistics |
| POST | `/api/contact` | Submit enquiry form |
| GET | `/api/contacts` | List all contacts |

---

*© 2026 Ministry of Railways, Government of India*
=======
# RAKSHAK-K9
## Autonomous Multi-Sensor Robotic System for Real-Time Detection of Narcotics and Explosives Across Indian Railways

---

# 1. PROJECT OVERVIEW

Rakshak-K9 is a proposed autonomous multi-sensor robotic system developed for Smart India Hackathon 2026 Problem Statement SIH26026:

> Development of Mobile (Quadruped)/Handheld Device/System for Real-Time Detection of Narcotics and Explosives across Indian Railways.

The system is designed to assist railway security personnel by providing mobile screening, intelligent sensor activation, autonomous navigation, suspicious-object detection, controlled verification, and secure digital evidence management.

The core philosophy of Rakshak-K9 is:

> DETECT → VERIFY → PRESERVE → ASSIST

Rakshak-K9 is designed as a decision-support and screening platform. It is not intended to replace trained security personnel.

---

# 2. PROBLEM STATEMENT

Millions of passengers travel through the Indian railway network every day, carrying bags, packages and personal belongings.

Because of the enormous scale of railway operations, it is not practically possible for RPF personnel alone to manually inspect every passenger and every object continuously.

The major challenges are:

- Extremely large passenger volume
- Large number of bags and packages
- Continuous movement of passengers
- Suspicious objects may be concealed
- Manual inspection is difficult to scale
- Railway environments are dynamic
- Network connectivity may not always be available
- Detection alone does not provide a complete evidence trail

Therefore, there is a need for a mobile and intelligent system that can assist RPF personnel by performing initial screening and identifying suspicious cases requiring further attention.

---

# 3. PROPOSED SOLUTION

Rakshak-K9 combines multiple sensing, AI, robotics and cybersecurity technologies into a single platform.

The proposed system consists of:

- Autonomous robotic platform
- RGB camera
- AI-based object detection
- LiDAR
- IMU
- Encoder-based navigation
- mmWave radar
- BME688 VOC sensor
- Detachable handheld inspection unit
- Controlled black-box confirmation module
- IPFS evidence storage
- Blockchain-backed evidence records
- Offline-first data management
- RPF/operator interface

The objective is to provide:

1. Initial detection
2. Targeted sensor activation
3. Multi-sensor screening
4. Additional verification
5. Evidence collection
6. Secure evidence storage
7. Human-assisted final decision

---

# 4. SYSTEM ARCHITECTURE

```text
                         RAKSHAK-K9
                              │
          ┌───────────────────┼───────────────────┐
          │                   │                   │
          ▼                   ▼                   ▼
     RGB CAMERA          LiDAR + IMU        mmWave RADAR
          │                   │                   │
          ▼                   ▼                   ▼
   AI OBJECT             LOCALIZATION       SPATIAL /
   DETECTION              & MAPPING         OBJECT SENSING
          │                   │                   │
          └───────────────────┼───────────────────┘
                              │
                              ▼
                       SENSOR FUSION
                              │
                              ▼
                       AI ANALYSIS
                              │
               ┌──────────────┴──────────────┐
               │                             │
               ▼                             ▼
          NORMAL/CLEAR                  SUSPICIOUS
               │                             │
               ▼                             ▼
        CONTINUE PATROL             TARGETED INSPECTION
                                             │
                         ┌───────────────────┼──────────────────┐
                         │                   │                  │
                         ▼                   ▼                  ▼
                    mmWave              BME688          HANDHELD UNIT
                         │                   │                  │
                         └───────────────────┼──────────────────┘
                                             │
                                             ▼
                                   CONFIRMATION MODULE
                                             │
                                             ▼
                                       EVIDENCE DATA
                                             │
                         ┌───────────────────┴───────────────────┐
                         │                                       │
                         ▼                                       ▼
                    LOCAL STORAGE                            IPFS
                         │                                       │
                         └───────────────────┬───────────────────┘
                                             ▼
                                      BLOCKCHAIN RECORD
                                             │
                                             ▼
                                      SECURE AUDIT TRAIL
                                             │
                                             ▼
                                         RPF USER
>>>>>>> 6220ac0d1af741ac39285f6683ea0f53d45a4634
