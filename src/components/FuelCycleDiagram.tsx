import type { HighlightState } from '../types'
import { components } from '../data/components'
import { flowPaths } from '../data/paths'
import { particles } from '../data/particles'
import { highlights } from '../data/highlights'
import { Device } from './Device'
import { ComponentBox } from './ComponentBox'
import { FlowPath } from './FlowPath'
import { Particle } from './Particle'

interface Props {
  activeState: HighlightState
}

export function FuelCycleDiagram({ activeState }: Props) {
  const activeHighlight = highlights.find(h => h.id === activeState)

  const isComponentHighlighted = (id: string) => {
    if (activeState === 'all') return false
    return activeHighlight?.activeComponents.includes(id) ?? false
  }

  const isComponentDimmed = (id: string) => {
    if (activeState === 'all') return false
    return !activeHighlight?.activeComponents.includes(id)
  }

  const isPathHighlighted = (id: string) => {
    if (activeState === 'all') return false
    return activeHighlight?.activePaths.includes(id) ?? false
  }

  const isPathDimmed = (id: string) => {
    if (activeState === 'all') return false
    return !activeHighlight?.activePaths.includes(id)
  }

  const isParticleDimmed = (pathId: string) => {
    if (activeState === 'all') return false
    return !activeHighlight?.activePaths.includes(pathId)
  }

  return (
    <svg viewBox="0 0 1100 650" width={1100} height={650} xmlns="http://www.w3.org/2000/svg">
      {/* Defs */}
      <defs>
        <radialGradient id="plasma-gradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffb3d9" />
          <stop offset="50%" stopColor="#ff69b4" />
          <stop offset="100%" stopColor="#c2185b" />
        </radialGradient>

        <marker id="arrow-ofc" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0,0 8,3 0,6" fill="#4ecdc4" />
        </marker>
        <marker id="arrow-ifc" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0,0 8,3 0,6" fill="#888" />
        </marker>
        <marker id="arrow-hx-secondary" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0,0 8,3 0,6" fill="#b388ff" />
        </marker>
        <marker id="arrow-recovery" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0,0 8,3 0,6" fill="#e07020" />
        </marker>
      </defs>

      {/* Zone backgrounds */}
      <rect x={60} y={15} width={840} height={200} rx={12} ry={12}
        fill="rgba(38, 70, 83, 0.04)" stroke="rgba(38, 70, 83, 0.15)"
        strokeWidth={1} strokeDasharray="6 3" />
      <text x={75} y={35} fontSize={11} fontWeight={700} letterSpacing={1} fill="#264653" opacity={0.6}>
        OUTER FUEL CYCLE
      </text>

      <rect x={390} y={225} width={500} height={395} rx={12} ry={12}
        fill="rgba(85, 85, 85, 0.03)" stroke="rgba(85, 85, 85, 0.12)"
        strokeWidth={1} strokeDasharray="6 3" />
      <text x={755} y={245} fontSize={11} fontWeight={700} letterSpacing={1} fill="#555" opacity={0.6}>
        INNER FUEL CYCLE
      </text>

      {/* Device */}
      <g style={{
        opacity: activeState === 'all' || activeState === 'breeding' ? 1 : 0.2,
        transition: 'opacity 0.4s ease',
      }}>
        <Device />
      </g>

      {/* Flow paths */}
      {flowPaths.map(path => (
        <FlowPath
          key={path.id}
          def={path}
          isHighlighted={isPathHighlighted(path.id)}
          isDimmed={isPathDimmed(path.id)}
        />
      ))}

      {/* Component boxes */}
      {components.map(comp => (
        <ComponentBox
          key={comp.id}
          def={comp}
          isHighlighted={isComponentHighlighted(comp.id)}
          isDimmed={isComponentDimmed(comp.id)}
        />
      ))}

      {/* Particles */}
      {particles.map((p, i) => (
        <Particle
          key={i}
          def={p}
          isDimmed={isParticleDimmed(p.pathId)}
        />
      ))}


      {/* Legend */}
      <rect x={15} y={560} width={160} height={75} rx={6} ry={6}
        fill="#fff" stroke="#ddd" strokeWidth={1} />
      <text x={30} y={578} fontSize={10} fill="#333" fontWeight={700}>Particle Legend</text>

      <circle cx={30} cy={595} r={4} fill="#00e5ff" />
      <text x={42} y={599} fontSize={9} fill="#444">Tritium (T)</text>

      <circle cx={30} cy={615} r={4} fill="#E9A820" />
      <text x={42} y={619} fontSize={9} fill="#444">Deuterium (D)</text>

      <circle cx={100} cy={595} r={4} fill="#ff4444" />
      <text x={112} y={599} fontSize={9} fill="#444">Impurities</text>
    </svg>
  )
}