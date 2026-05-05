import type { FlowPathDef } from '../types'

export const flowPaths: FlowPathDef[] = [
  // OFC
  {
    id: 'blanket-tes',
    d: 'M 200 280 L 200 95 L 310 95',
    cycle: 'ofc',
    label: 'T in breeder',
    labelPos: { x: 205, y: 170 },
  },
  {
    id: 'tes-hx',
    d: 'M 460 95 L 520 95',
    cycle: 'ofc',
  },
  {
    id: 'hx-blanket',
    d: 'M 590 80 L 590 55 L 175 55 L 175 280',
    cycle: 'ofc',
  },
  {
    id: 'tes-storage',
    d: 'M 385 120 L 385 200 L 550 200 L 550 270',
    cycle: 'ofc',
    label: 'extracted T',
    labelPos: { x: 420, y: 195 },
  },

  // HX permeation (primary to secondary)
  {
    id: 'hx-permeation',
    d: 'M 660 95 L 730 95',
    cycle: 'ofc',
    dashed: true,
    label: 'permeation',
    labelPos: { x: 670, y: 85 },
  },

  // Secondary coolant out
  {
    id: 'secondary-power',
    d: 'M 870 95 L 900 95',
    cycle: 'ofc',
    label: 'to Power Cycle',
    labelPos: { x: 902, y: 98 },
  },

  // IFC
  {
    id: 'storage-injection',
    d: 'M 530 315 L 495 355',
    cycle: 'ifc',
  },
  {
    id: 'injection-plasma',
    d: 'M 420 375 L 270 380',
    cycle: 'ifc',
    label: 'D, T',
    labelPos: { x: 340, y: 365 },
  },
  {
    id: 'plasma-exhaust',
    d: 'M 245 430 L 420 515',
    cycle: 'ifc',
    label: 'D, T, imp.',
    labelPos: { x: 300, y: 490 },
  },
  {
    id: 'exhaust-cleanup',
    d: 'M 560 522 L 650 522',
    cycle: 'ifc',
  },
  {
    id: 'cleanup-iss',
    d: 'M 730 500 L 730 415',
    cycle: 'ifc',
  },
  {
    id: 'iss-storage-d',
    d: 'M 710 375 L 710 305 L 630 305',
    cycle: 'ifc',
    label: 'D',
    labelPos: { x: 700, y: 335 },
  },
  {
    id: 'iss-storage-t',
    d: 'M 730 375 L 730 285 L 630 285',
    cycle: 'ifc',
    label: 'T',
    labelPos: { x: 735, y: 335 },
  },
  {
    id: 'dir',
    d: 'M 480 500 L 480 395',
    cycle: 'ifc',
    dashed: true,
    label: 'DIR',
    labelPos: { x: 448, y: 450 },
  },
]