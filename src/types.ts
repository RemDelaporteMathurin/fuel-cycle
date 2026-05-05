export type Cycle = 'ofc' | 'ifc'

export type Species = 'tritium' | 'deuterium' | 'impurity'

export interface ComponentDef {
  id: string
  label: string[]
  x: number
  y: number
  width: number
  height: number
  cycle: Cycle
}

export interface FlowPathDef {
  id: string
  d: string
  cycle: Cycle
  dashed?: boolean
  label?: string
  labelPos?: { x: number; y: number }
}

export interface ParticleDef {
  pathId: string
  species: Species
  duration: number
  delay?: number
  size?: number
  opacity?: number
}

export type HighlightState = 'all' | 'breeding' | 'extraction' | 'hx'

export interface HighlightDef {
  id: HighlightState
  label: string
  activeComponents: string[]
  activePaths: string[]
}