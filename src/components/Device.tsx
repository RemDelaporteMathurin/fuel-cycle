export function Device() {
  return (
    <g>
      <circle cx={200} cy={380} r={120} fill="rgba(38,70,83,0.3)" stroke="#264653" strokeWidth={3} />
      <circle cx={200} cy={380} r={80} fill="rgba(176,190,197,0.3)" stroke="#607d8b" strokeWidth={2} />
      <circle cx={200} cy={380} r={50} fill="url(#plasma-gradient)" />
      <circle cx={200} cy={380} r={135} fill="none" stroke="#37474f" strokeWidth={4} />

      <text x={200} y={383} textAnchor="middle" fontSize={13} fontWeight={700} fill="#fff">
        PLASMA
      </text>
      <text x={200} y={290} textAnchor="middle" fontSize={9} fontWeight={600} fill="#264653">
        BLANKET
      </text>
      {/* <text x={200} y={305} textAnchor="middle" fontSize={8} fill="#264653">
        (FLiBe/FLiNaK)
      </text> */}
    </g>
  )
}