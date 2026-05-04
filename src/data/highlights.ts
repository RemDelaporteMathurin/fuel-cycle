import { HighlightDef } from '../types'

export const highlights: HighlightDef[] = [
  {
    id: 'breeding',
    label: 'Breeding',
    activeComponents: ['tes'],
    activePaths: ['neutron', 'blanket-tes'],
  },
  {
    id: 'extraction',
    label: 'Extraction',
    activeComponents: ['tes'],
    activePaths: ['blanket-tes', 'tes-storage', 'tes-hx'],
  },
  {
    id: 'hx',
    label: 'Heat Exchanger',
    activeComponents: ['hx-primary', 'hx-secondary'],
    activePaths: ['tes-hx', 'hx-blanket', 'hx-permeation', 'secondary-power'],
  },
  {
    id: 'diagnostics',
    label: 'Diagnostics & Losses',
    activeComponents: ['recovery'],
    activePaths: ['hx-permeation', 'fw-permeation', 'secondary-power', 'recovery-iss', 'recovery-out'],
  },
]