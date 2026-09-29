const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 5000

app.use(
  cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true,
  })
)

app.use(express.json())

// In-memory store
// Replace with MongoDB for production persistence.
const contacts = []

// ================================
// Health Check
// ================================
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    service: 'Rakshak K9 API',
    timestamp: new Date().toISOString(),
  })
})

// ================================
// Stats
// ================================
app.get('/api/stats', (req, res) => {
  res.json({
    stations: 7349,
    trackKm: 67956,
    passengersPerDay: '13M+',
    alertLatencyMs: 1800,
    uptime: '99.97%',
  })
})

// ================================
// Contact / Enquiry
// ================================
app.post('/api/contact', (req, res) => {
  const { name, org, email, message } = req.body

  if (!name || !org || !email || !message) {
    return res.status(400).json({
      error: 'All fields are required.',
    })
  }

  const entry = {
    id: contacts.length + 1,
    name,
    org,
    email,
    message,
    submittedAt: new Date().toISOString(),
    status: 'RECEIVED',
  }

  contacts.push(entry)

  console.log(
    `[Rakshak K9] New contact from ${name} <${email}> @ ${org}`
  )

  res.status(201).json({
    success: true,
    message:
      'Your enquiry has been received. RPF HQ will contact you within 2 business days.',
    referenceId: `RK9-${String(entry.id).padStart(5, '0')}`,
  })
})

// ================================
// Contacts
// ================================
app.get('/api/contacts', (req, res) => {
  res.json({
    total: contacts.length,
    contacts,
  })
})

// Export Express app for Vercel
module.exports = app

// Run normally when developing locally
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Rakshak K9 API running on http://localhost:${PORT}`)
  })
}
app.get('/', (req, res) => {
  res.json({
    status: 'OK',
    service: 'Rakshak K9 API',
    message: 'Rakshak K9 backend is running'
  })
})