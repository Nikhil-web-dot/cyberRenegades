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
