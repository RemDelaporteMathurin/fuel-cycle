import type { ParticleDef, Species } from '../types'
import { flowPaths } from '../data/paths'

const speciesColors: Record<Species, string> = {
  tritium: '#1a4848',
  deuterium: '#f7b000',
  impurity: '#ff4444',
}

interface Props {
  def: ParticleDef
  isDimmed: boolean
}

export function Particle({ def, isDimmed }: Props) {
  const path = flowPaths.find(p => p.id === def.pathId)
  if (!path) return null

  return (
    <circle
      r={def.size ?? 3.5}
      fill={speciesColors[def.species]}
      opacity={isDimmed ? 0 : (def.opacity ?? 0.9)}
      style={{ transition: 'opacity 0.4s ease' }}
    >
      <animateMotion
        dur={`${def.duration}s`}
        repeatCount="indefinite"
        begin={def.delay ? `${def.delay}s` : '0s'}
        path={path.d}
      />
    </circle>
  )
}