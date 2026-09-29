/* Indian Railways Official SVG Logo Component */
export default function IRLogo({ size = 60 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Indian Railways Logo"
    >
      {/* White background circle */}
      <circle cx="100" cy="100" r="98" fill="white" />

      {/* Outer gold ring */}
      <circle cx="100" cy="100" r="96" fill="none" stroke="#F5A623" strokeWidth="4" />

      {/* Blue fill */}
      <circle cx="100" cy="100" r="90" fill="#003F87" />

      {/* Ashoka Chakra spokes */}
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i * 360) / 24
        const rad = (angle * Math.PI) / 180
        const x1 = 100 + 14 * Math.cos(rad)
        const y1 = 100 + 14 * Math.sin(rad)
        const x2 = 100 + 70 * Math.cos(rad)
        const y2 = 100 + 70 * Math.sin(rad)
        return (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="rgba(245,166,35,0.5)" strokeWidth="1.5" />
        )
      })}

      {/* Outer Ashoka rim circle */}
      <circle cx="100" cy="100" r="70" fill="none" stroke="#F5A623" strokeWidth="2" opacity="0.6" />
      <circle cx="100" cy="100" r="14" fill="#F5A623" />
      <circle cx="100" cy="100" r="7" fill="#003F87" />

      {/* Train track bar */}
      <rect x="36" y="138" width="128" height="14" rx="4" fill="#F5A623" />

      {/* IR lettering */}
      <text x="100" y="128" textAnchor="middle"
        fontFamily="Arial, sans-serif" fontSize="22" fontWeight="900"
        fill="white" letterSpacing="5">IR</text>

      {/* Wheel circles */}
      <circle cx="58" cy="160" r="11" fill="none" stroke="#F5A623" strokeWidth="3" />
      <circle cx="100" cy="160" r="11" fill="none" stroke="#F5A623" strokeWidth="3" />
      <circle cx="142" cy="160" r="11" fill="none" stroke="#F5A623" strokeWidth="3" />
      <circle cx="58" cy="160" r="4" fill="#F5A623" />
      <circle cx="100" cy="160" r="4" fill="#F5A623" />
      <circle cx="142" cy="160" r="4" fill="#F5A623" />
    </svg>
  )
}
