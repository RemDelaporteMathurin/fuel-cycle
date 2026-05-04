export type Cycle = 'ofc' | 'ifc' | 'recovery' | 'hx-secondary';

export type Species = 'tritium' | 'deuterium' | 'impurity' | 'neutron' | 'salt' | 'coolant';

export interface ComponentDef {
  id: string;
  label: string[];          // multi-line label
  x: number;
  y: number;
  width: number;
  height: number;
  cycle: Cycle;
}

export interface FlowPathDef {
  id: string;
  d: string;                // SVG path data
  cycle: Cycle;
  species?: Species[];      // what flows along this path
  dashed?: boolean;
  label?: string;
  labelPos?: { x: number; y: number };
}

export interface ParticleDef {
  pathId: string;           // references a FlowPathDef
  species: Species;
  duration: number;         // seconds
  delay?: number;           // stagger
  size?: number;
  opacity?: number;
}

export type HighlightState = 'all' | 'breeding' | 'extraction' | 'hx' | 'diagnostics';

export interface HighlightDef {
  id: HighlightState;
  label: string;
  activeComponents: string[];    // component ids to highlight
  activePaths: string[];         // path ids to highlight
  infoCard: {
    title: string;
    challenge: string;
    work: string[];
    badges: string[];
    image?: string;
    position: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
  };
}