import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import styles from './Robot3DCanvas.module.css'

export default function Robot3DCanvas({ onSelectPart }) {
  const mountRef = useRef(null)
  const [isPatrolling, setIsPatrolling] = useState(true)
  const [armExtended, setArmExtended] = useState(false)
  const [radarScanning, setRadarScanning] = useState(true)
  const [cameraView, setCameraView] = useState('iso') // 'iso', 'side', 'front', 'top'

  // References for animatable parts
  const animRefs = useRef({
    lidarPuck: null,
    wheels: [],
    armGroup: null,
    radarPanel: null,
    laserBeam: null,
    radarWave: null,
    roverGroup: null,
    trackGrid: null,
  })

  useEffect(() => {
    const container = mountRef.current
    if (!container) return

    // Scene
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xf4f7fa)
    scene.fog = new THREE.FogExp2(0xf4f7fa, 0.04)

    // Camera
    const width = container.clientWidth || 580
    const height = container.clientHeight || 420
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100)
    camera.position.set(5.5, 4.2, 6.2)
    camera.lookAt(0, 0.8, 0)

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFShadowMap
    container.innerHTML = ''
    container.appendChild(renderer.domElement)

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2)
    scene.add(ambientLight)

    const mainLight = new THREE.DirectionalLight(0xffffff, 2.0)
    mainLight.position.set(8, 12, 8)
    mainLight.castShadow = true
    mainLight.shadow.mapSize.width = 2048
    mainLight.shadow.mapSize.height = 2048
    mainLight.shadow.bias = -0.0005
    scene.add(mainLight)

    const fillLight = new THREE.DirectionalLight(0x003f87, 0.8) // Indian Railway blue bounce
    fillLight.position.set(-8, 6, -8)
    scene.add(fillLight)

    const accentLight = new THREE.PointLight(0xf5a623, 1.2, 10) // Gold accent light
    accentLight.position.set(0, 4, 2)
    scene.add(accentLight)

    // Ground Grid & Railway Tracks
    const gridHelper = new THREE.GridHelper(24, 24, 0x003f87, 0xd0dbe8)
    gridHelper.position.y = -0.01
    scene.add(gridHelper)

    // Simulated Railway Rails (Broad Gauge 1676mm equivalent in scene units)
    const railMat = new THREE.MeshStandardMaterial({ color: 0x718096, metalness: 0.9, roughness: 0.2 })
    const sleeperMat = new THREE.MeshStandardMaterial({ color: 0x4a3b32, roughness: 0.9 })

    const leftRail = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.12, 24), railMat)
    leftRail.position.set(-1.1, 0.06, 0)
    scene.add(leftRail)

    const rightRail = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.12, 24), railMat)
    rightRail.position.set(1.1, 0.06, 0)
    scene.add(rightRail)

    // Concrete Sleepers
    for (let z = -12; z <= 12; z += 0.8) {
      const sleeper = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.08, 0.28), sleeperMat)
      sleeper.position.set(0, 0.02, z)
      scene.add(sleeper)
    }

    // ─────────────────────────────────────────────────────────────
    // BUILD THE EXACT RAKSHAK-K9 CUSTOM ROVER MODEL IN 3D
    // ─────────────────────────────────────────────────────────────
    const roverGroup = new THREE.Group()
    scene.add(roverGroup)
    animRefs.current.roverGroup = roverGroup

    // Materials
    const darkHullMat = new THREE.MeshStandardMaterial({
      color: 0x374151, // Charcoal gray metal hull
      metalness: 0.7,
      roughness: 0.35,
    })

    const yellowMotorMat = new THREE.MeshStandardMaterial({
      color: 0xeab308, // Yellow brushless DC motors from diagram
      metalness: 0.5,
      roughness: 0.4,
    })

    const rubberTireMat = new THREE.MeshStandardMaterial({
      color: 0x18181b, // Black knobby tire rubber
      roughness: 0.8,
    })

    const orangeLidarMat = new THREE.MeshStandardMaterial({
      color: 0xf97316, // Orange top LiDAR puck
      metalness: 0.6,
      roughness: 0.2,
      emissive: 0x7c2d12,
      emissiveIntensity: 0.3,
    })

    const greenRadarMat = new THREE.MeshStandardMaterial({
      color: 0x16a34a, // Green mmWave radar plate from diagram
      metalness: 0.3,
      roughness: 0.4,
    })

    const blackBoxMat = new THREE.MeshStandardMaterial({
      color: 0x111827, // Rear swab test black box
      roughness: 0.5,
    })

    const boomArmMat = new THREE.MeshStandardMaterial({
      color: 0x475569, // Perforated aluminum boom arm
      metalness: 0.8,
      roughness: 0.3,
    })

    // 1. MAIN CHASSIS HULL
    const hullGeometry = new THREE.BoxGeometry(1.6, 0.55, 2.4)
    const hullMesh = new THREE.Mesh(hullGeometry, darkHullMat)
    hullMesh.position.y = 0.95
    hullMesh.castShadow = true
    hullMesh.receiveShadow = true
    roverGroup.add(hullMesh)

    // Bevelled nose plate
    const noseGeo = new THREE.BoxGeometry(1.4, 0.4, 0.6)
    const noseMesh = new THREE.Mesh(noseGeo, darkHullMat)
    noseMesh.position.set(0, 0.95, 1.4)
    noseMesh.rotation.x = Math.PI * 0.08
    roverGroup.add(noseMesh)

    // Side Brand Name Text Plaque "RAKSHAK-K9"
    const plaqueMat = new THREE.MeshStandardMaterial({ color: 0x003f87, metalness: 0.8, roughness: 0.2 })
    const leftPlaque = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.22, 1.6), plaqueMat)
    leftPlaque.position.set(0.81, 0.95, 0)
    roverGroup.add(leftPlaque)

    const rightPlaque = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.22, 1.6), plaqueMat)
    rightPlaque.position.set(-0.81, 0.95, 0)
    roverGroup.add(rightPlaque)

    // 2. FORWARD RGB OPTICAL CAMERA HEAD
    const camBase = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.14, 0.12, 16), darkHullMat)
    camBase.position.set(0, 1.3, 1.25)
    roverGroup.add(camBase)

    const camHead = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.22, 0.28), darkHullMat)
    camHead.position.set(0, 1.45, 1.25)
    roverGroup.add(camHead)

    const camLens = new THREE.Mesh(
      new THREE.CylinderGeometry(0.07, 0.07, 0.08, 16),
      new THREE.MeshStandardMaterial({ color: 0x0284c7, metalness: 0.9, roughness: 0.1 })
    )
    camLens.rotation.x = Math.PI / 2
    camLens.position.set(0, 1.45, 1.4)
    roverGroup.add(camLens)

    // 3. FRONT NOZZLE BME688 (VOC GAS SNIFFER)
    const bmeSniffer = new THREE.Mesh(
      new THREE.BoxGeometry(0.18, 0.1, 0.18),
      new THREE.MeshStandardMaterial({ color: 0xf5a623, metalness: 0.6 })
    )
    bmeSniffer.position.set(0.4, 1.28, 1.2)
    roverGroup.add(bmeSniffer)

    // 4. REAR DECK: ON-BOARD SWAB TEST KIT (BLACK BOX)
    const blackBox = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.42, 0.75), blackBoxMat)
    blackBox.position.set(0, 1.42, -0.7)
    blackBox.castShadow = true
    roverGroup.add(blackBox)

    // Black box yellow latch & status LED
    const ledMat = new THREE.MeshBasicMaterial({ color: 0x22c55e })
    const statusLed = new THREE.Mesh(new THREE.SphereGeometry(0.03, 8, 8), ledMat)
    statusLed.position.set(0.35, 1.65, -0.65)
    roverGroup.add(statusLed)

    // 5. TOP TURRET WITH LIDAR-IMU
    const turretBase = new THREE.Mesh(new THREE.CylinderGeometry(0.48, 0.52, 0.35, 24), darkHullMat)
    turretBase.position.set(0, 1.4, 0.2)
    roverGroup.add(turretBase)

    // Rotating LiDAR puck
    const lidarGroup = new THREE.Group()
    lidarGroup.position.set(0, 1.7, 0.2)
    roverGroup.add(lidarGroup)
    animRefs.current.lidarPuck = lidarGroup

    const lidarCylinder = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, 0.22, 24), orangeLidarMat)
    lidarGroup.add(lidarCylinder)

    const lidarBlackCap = new THREE.Mesh(new THREE.CylinderGeometry(0.245, 0.245, 0.06, 24), darkHullMat)
    lidarBlackCap.position.y = 0.12
    lidarGroup.add(lidarBlackCap)

    // LiDAR Laser Scanner Cone
    const laserMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.18,
      side: THREE.DoubleSide,
    })
    const laserCone = new THREE.Mesh(new THREE.ConeGeometry(3.5, 6, 32, 1, true), laserMat)
    laserCone.rotation.x = Math.PI
    laserCone.position.set(0, -3, 0)
    lidarGroup.add(laserCone)

    // IMU Box on Turret
    const imuBox = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.16, 0.2), darkHullMat)
    imuBox.position.set(0.28, 1.65, 0.38)
    roverGroup.add(imuBox)

    // 6. ARTICULATED DETACHABLE INSPECTION BOOM ARM
    const armGroup = new THREE.Group()
    armGroup.position.set(0, 1.5, 0.25)
    roverGroup.add(armGroup)
    animRefs.current.armGroup = armGroup

    // Main perforated boom beam
    const boomMesh = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.2, 1.9), boomArmMat)
    boomMesh.position.set(0, 0.3, 0.9)
    boomMesh.rotation.x = -Math.PI * 0.14
    boomMesh.castShadow = true
    armGroup.add(boomMesh)

    // mmWave Radar Panel at Arm Tip
    const radarGroup = new THREE.Group()
    radarGroup.position.set(0, 0.05, 1.85)
    armGroup.add(radarGroup)
    animRefs.current.radarPanel = radarGroup

    const radarMesh = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.42, 0.08), greenRadarMat)
    radarMesh.castShadow = true
    radarGroup.add(radarMesh)

    // Animated Radar Scanning Wave
    const waveMat = new THREE.MeshBasicMaterial({
      color: 0x22c55e,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    })
    const radarWave = new THREE.Mesh(new THREE.RingGeometry(0.2, 1.8, 16), waveMat)
    radarWave.position.set(0, 0, 0.1)
    radarGroup.add(radarWave)
    animRefs.current.radarWave = radarWave

    // 7. 4-WHEEL ALL-TERRAIN SUSPENSION & TIRES WITH YELLOW MOTORS
    const wheelPositions = [
      { x: 1.15, z: 0.95 },   // Front Right
      { x: -1.15, z: 0.95 },  // Front Left
      { x: 1.15, z: -0.95 },  // Rear Right
      { x: -1.15, z: -0.95 }, // Rear Left
    ]

    wheelPositions.forEach((pos, idx) => {
      const suspensionGroup = new THREE.Group()
      suspensionGroup.position.set(pos.x * 0.6, 0.8, pos.z)
      roverGroup.add(suspensionGroup)

      // Spring Shock Absorber
      const spring = new THREE.Mesh(
        new THREE.CylinderGeometry(0.06, 0.06, 0.55, 8),
        new THREE.MeshStandardMaterial({ color: 0x1f2937, metalness: 0.8 })
      )
      spring.rotation.z = pos.x > 0 ? -0.45 : 0.45
      suspensionGroup.add(spring)

      // Yellow Brushless Motor Cylinder
      const motor = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 0.3, 16), yellowMotorMat)
      motor.rotation.z = Math.PI / 2
      motor.position.set(pos.x > 0 ? 0.35 : -0.35, -0.22, 0)
      suspensionGroup.add(motor)

      // Knobby Tire Wheel
      const wheelGroup = new THREE.Group()
      wheelGroup.position.set(pos.x, 0.55, pos.z)
      roverGroup.add(wheelGroup)
      animRefs.current.wheels.push(wheelGroup)

      // Tire Tread Outer Ring
      const tire = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 0.4, 24), rubberTireMat)
      tire.rotation.z = Math.PI / 2
      tire.castShadow = true
      wheelGroup.add(tire)

      // Wheel Rim
      const rim = new THREE.Mesh(
        new THREE.CylinderGeometry(0.32, 0.32, 0.42, 16),
        new THREE.MeshStandardMaterial({ color: 0x374151, metalness: 0.8 })
      )
      rim.rotation.z = Math.PI / 2
      wheelGroup.add(rim)
    })

    // ─────────────────────────────────────────────────────────────
    // INTERACTIVE MOUSE ORBIT CONTROLS
    // ─────────────────────────────────────────────────────────────
    let isDragging = false
    let prevMouseX = 0
    let prevMouseY = 0
    let targetRotationY = 0.4
    let targetRotationX = 0.2
    let currentRotationY = 0.4
    let currentRotationX = 0.2

    const onMouseDown = (e) => {
      isDragging = true
      prevMouseX = e.clientX
      prevMouseY = e.clientY
    }

    const onMouseMove = (e) => {
      if (!isDragging) return
      const deltaX = e.clientX - prevMouseX
      const deltaY = e.clientY - prevMouseY
      targetRotationY += deltaX * 0.008
      targetRotationX += deltaY * 0.006
      targetRotationX = Math.max(-0.2, Math.min(1.1, targetRotationX)) // Clamp elevation
      prevMouseX = e.clientX
      prevMouseY = e.clientY
    }

    const onMouseUp = () => {
      isDragging = false
    }

    // Touch support for mobile devices
    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDragging = true
        prevMouseX = e.touches[0].clientX
        prevMouseY = e.touches[0].clientY
      }
    }

    const onTouchMove = (e) => {
      if (!isDragging || e.touches.length !== 1) return
      const deltaX = e.touches[0].clientX - prevMouseX
      const deltaY = e.touches[0].clientY - prevMouseY
      targetRotationY += deltaX * 0.008
      targetRotationX += deltaY * 0.006
      targetRotationX = Math.max(-0.2, Math.min(1.1, targetRotationX))
      prevMouseX = e.touches[0].clientX
      prevMouseY = e.touches[0].clientY
    }

    const onTouchEnd = () => {
      isDragging = false
    }

    const canvasDom = renderer.domElement
    canvasDom.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    canvasDom.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: true })
    window.addEventListener('touchend', onTouchEnd)

    // ─────────────────────────────────────────────────────────────
    // ANIMATION RENDER LOOP
    // ─────────────────────────────────────────────────────────────
    let clock = new THREE.Clock()
    let animationFrameId

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      const delta = clock.getDelta()
      const time = clock.getElapsedTime()

      // Smooth camera orbit interpolation
      currentRotationY += (targetRotationY - currentRotationY) * 0.08
      currentRotationX += (targetRotationX - currentRotationX) * 0.08

      const distance = 8.5
      camera.position.x = distance * Math.sin(currentRotationY) * Math.cos(currentRotationX)
      camera.position.y = distance * Math.sin(currentRotationX) + 1.2
      camera.position.z = distance * Math.cos(currentRotationY) * Math.cos(currentRotationX)
      camera.lookAt(0, 0.9, 0)

      // LiDAR Puck 360° Rotation
      if (animRefs.current.lidarPuck) {
        animRefs.current.lidarPuck.rotation.y += delta * 4.5 // High-speed scan
      }

      // Wheels Rotation & Rover Float (Simulating patrol travel)
      if (isPatrolling) {
        animRefs.current.wheels.forEach((w) => {
          w.rotation.x += delta * 3.5
        })

        // Slight suspension bounce
        if (animRefs.current.roverGroup) {
          animRefs.current.roverGroup.position.y = Math.sin(time * 6) * 0.03
          animRefs.current.roverGroup.rotation.z = Math.sin(time * 3) * 0.015
        }
      }

      // Articulated Arm Motion
      if (animRefs.current.armGroup) {
        const targetArmAngle = armExtended ? -0.35 : -0.12
        animRefs.current.armGroup.rotation.x += (targetArmAngle - animRefs.current.armGroup.rotation.x) * 0.05
      }

      // mmWave Radar Pulse Expansion
      if (animRefs.current.radarWave && radarScanning) {
        const scale = (time * 2.2) % 2.5 + 0.2
        animRefs.current.radarWave.scale.set(scale, scale, 1)
        animRefs.current.radarWave.material.opacity = Math.max(0, 0.6 - scale * 0.2)
      }

      renderer.render(scene, camera)
    }

    animate()

    // Resize Handler
    const handleResize = () => {
      if (!container) return
      const newW = container.clientWidth
      const newH = container.clientHeight
      camera.aspect = newW / newH
      camera.updateProjectionMatrix()
      renderer.setSize(newW, newH)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      canvasDom.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
      canvasDom.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
      renderer.dispose()
    }
  }, [isPatrolling, armExtended, radarScanning])

  // Camera presets
  const setPresetAngle = (view) => {
    setCameraView(view)
    if (view === 'iso') {
      // Handled in orbit state
    }
  }

  return (
    <div className={styles.canvasWrapper}>
      {/* 3D WebGL Canvas Mount */}
      <div ref={mountRef} className={styles.webglMount} />

      {/* Interactive 3D Control Bar */}
      <div className={styles.controlOverlay}>
        <div className={styles.controlGroup}>
          <button
            className={`${styles.ctrlBtn} ${isPatrolling ? styles.ctrlBtnActive : ''}`}
            onClick={() => setIsPatrolling(!isPatrolling)}
            title="Toggle Driving Wheels & Suspension Oscillation"
          >
            {isPatrolling ? '⏹ Stop Patrol' : '▶ Drive Patrol'}
          </button>

          <button
            className={`${styles.ctrlBtn} ${armExtended ? styles.ctrlBtnActive : ''}`}
            onClick={() => setArmExtended(!armExtended)}
            title="Articulate Inspection Arm Downward"
          >
            {armExtended ? '⬆ Retract Boom' : '⬇ Extend Boom Arm'}
          </button>

          <button
            className={`${styles.ctrlBtn} ${radarScanning ? styles.ctrlBtnActive : ''}`}
            onClick={() => setRadarScanning(!radarScanning)}
            title="Toggle Radar Pulse Emission"
          >
            {radarScanning ? '📡 Radar Pulse: ON' : '📡 Radar: OFF'}
          </button>
        </div>

        <div className={styles.hintTag}>
          <span>👆 Click &amp; Drag to Orbit 3D Model 360°</span>
        </div>
      </div>

      {/* Quick Component Inspect Tags */}
      <div className={styles.specsFloatingPills}>
        <span className={styles.floatPill} onClick={() => onSelectPart?.('arm')}>
          🧰 Detachable Handheld Arm
        </span>
        <span className={styles.floatPill} onClick={() => onSelectPart?.('lidar')}>
          🛰️ LiDAR-IMU Turret
        </span>
        <span className={styles.floatPill} onClick={() => onSelectPart?.('radar')}>
          📡 mmWave Radar Panel
        </span>
        <span className={styles.floatPill} onClick={() => onSelectPart?.('blackbox')}>
          🧪 Rear Swab Black Box
        </span>
        <span className={styles.floatPill} onClick={() => onSelectPart?.('suspension')}>
          🚜 Yellow Motor 4WD
        </span>
      </div>
    </div>
  )
}
