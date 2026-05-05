import type { FlowPathDef } from '../types'

const cycleStrokes: Record<string, string> = {
  ofc: '#506385',
  ifc: '#888',
  recovery: '#e07020',
}

interface Props {
  def: FlowPathDef
  isHighlighted: boolean
  isDimmed: boolean
}

export function FlowPath({ def, isHighlighted, isDimmed }: Props) {
  const stroke = isHighlighted ? '#2085e9' : cycleStrokes[def.cycle]

  return (
    <g style={{
      opacity: isDimmed ? 0.1 : 1,
      transition: 'opacity 0.4s ease',
    }}>
      <path
        d={def.d}
        fill="none"
        stroke={stroke}
        strokeWidth={isHighlighted ? 3 : 2}
        strokeDasharray={def.dashed ? '5 4' : undefined}
        strokeLinecap="round"
        markerEnd={`url(#arrow-${def.cycle})`}
      />
      {def.label && def.labelPos && (
        <text
          x={def.labelPos.x}
          y={def.labelPos.y}
          fontSize={9}
          fill="#666"
          fontWeight={500}
        >
          {def.label}
        </text>
      )}
    </g>
  )
}