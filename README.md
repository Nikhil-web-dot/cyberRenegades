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
