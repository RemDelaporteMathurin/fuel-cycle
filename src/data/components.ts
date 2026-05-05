import type { ComponentDef } from '../types'

export const components: ComponentDef[] = [
  // OFC
  {
    id: 'tes',
    label: ['Tritium Extraction', 'System (TES)'],
    x: 310, y: 70, width: 150, height: 50,
    cycle: 'ofc',
  },
  {
    id: 'hx-primary',
    label: ['Heat Exchanger', '(primary - salt)'],
    x: 520, y: 70, width: 140, height: 50,
    cycle: 'ofc',
  },
  {
    id: 'hx-secondary',
    label: ['Secondary Coolant', '(water / He)'],
    x: 730, y: 70, width: 140, height: 50,
    cycle: 'ofc',
  },

  // IFC
  {
    id: 'storage',
    label: ['Storage &', 'Management'],
    x: 480, y: 270, width: 150, height: 45,
    cycle: 'ifc',
  },
  {
    id: 'injection',
    label: ['Injection System'],
    x: 420, y: 355, width: 130, height: 40,
    cycle: 'ifc',
  },
  {
    id: 'exhaust',
    label: ['Exhaust Pumping'],
    x: 420, y: 500, width: 140, height: 45,
    cycle: 'ifc',
  },
  {
    id: 'fuel-cleanup',
    label: ['Fuel Cleanup'],
    x: 650, y: 500, width: 150, height: 45,
    cycle: 'ifc',
  },
  {
    id: 'iss',
    label: ['Isotope Separation', 'System (ISS)'],
    x: 650, y: 370, width: 150, height: 45,
    cycle: 'ifc',
  },
]