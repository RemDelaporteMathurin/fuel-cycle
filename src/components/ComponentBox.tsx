import { ComponentDef } from '../types'

const cycleColors: Record<string, { fill: string; stroke: string }> = {
  ofc: { fill: '#264653', stroke: '#1a3540' },
  ifc: { fill: '#555', stroke: '#333' },
  'hx-secondary': { fill: '#7c4dff', stroke: '#5a2dcc' },
}

interface Props {
  def: ComponentDef
  isHighlighted: boolean
  isDimmed: boolean
}

export function ComponentBox({ def, isHighlighted, isDimmed }: Props) {
  const colors = cycleColors[def.cycle]

  return (
    <g style={{
      opacity: isDimmed ? 0.15 : 1,
      transition: 'opacity 0.4s ease',
    }}>
      <rect
        x={def.x}
        y={def.y}
        width={def.width}
        height={def.height}
        rx={6}
        ry={6}
        fill={colors.fill}
        stroke={isHighlighted ? '#E9A820' : colors.stroke}
        strokeWidth={isHighlighted ? 3 : 2}
        filter={isHighlighted ? 'drop-shadow(0 0 6px rgba(233,168,32,0.6))' : 'none'}
      />
      {def.label.map((line, i) => (
        <text
          key={i}
          x={def.x + def.width / 2}
          y={def.y + def.height / 2 + (i - (def.label.length - 1) / 2) * 13}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#fff"
          fontSize={11}
          fontWeight={600}
        >
          {line}
        </text>
      ))}
    </g>
  )
}