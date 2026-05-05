import type { FlowPathDef } from '../types'

export const flowPaths: FlowPathDef[] = [
  // OFC
  {
    id: 'blanket-tes',
    d: 'M 200 245 C 200 180, 280 105, 310 105',
    cycle: 'ofc',
    label: 'T in salt',
    labelPos: { x: 230, y: 170 },
  },
  {
    id: 'tes-hx',
    d: 'M 460 95 L 520 95',
    cycle: 'ofc',
  },
  {
    id: 'hx-blanket',
    d: 'M 590 120 C 590 180, 480 200, 350 220 C 280 230, 240 260, 220 280',
    cycle: 'ofc',
  },
  {
    id: 'tes-storage',
    d: 'M 385 130 C 385 200, 490 240, 510 270',
    cycle: 'ofc',
    label: 'pure T',
    labelPos: { x: 420, y: 195 },
  },

  // HX permeation (primary to secondary)
  {
    id: 'hx-permeation',
    d: 'M 660 95 L 730 95',
    cycle: 'ofc',
    dashed: true,
    label: 'permeation',
    labelPos: { x: 662, y: 85 },
  },

  // Secondary coolant out
  {
    id: 'secondary-power',
    d: 'M 820 95 L 900 95',
    cycle: 'hx-secondary',
    label: 'to Power Cycle',
    labelPos: { x: 830, y: 85 },
  },

  // IFC
  {
    id: 'storage-injection',
    d: 'M 530 315 C 510 335, 500 345, 495 355',
    cycle: 'ifc',
  },
  {
    id: 'injection-plasma',
    d: 'M 420 375 C 370 375, 320 378, 270 380',
    cycle: 'ifc',
    label: 'D, T',
    labelPos: { x: 340, y: 365 },
  },
  {
    id: 'plasma-exhaust',
    d: 'M 245 430 C 300 465, 380 495, 420 515',
    cycle: 'ifc',
    label: 'D, T, imp.',
    labelPos: { x: 290, y: 485 },
  },
  {
    id: 'exhaust-cleanup',
    d: 'M 560 522 L 620 522',
    cycle: 'ifc',
  },
  {
    id: 'cleanup-iss',
    d: 'M 745 500 C 760 465, 770 435, 775 415',
    cycle: 'ifc',
  },
  {
    id: 'iss-storage',
    d: 'M 720 375 C 680 345, 650 320, 620 310',
    cycle: 'ifc',
    label: 'T',
    labelPos: { x: 660, y: 335 },
  },
  {
    id: 'dir',
    d: 'M 470 500 C 465 460, 470 425, 480 395',
    cycle: 'ifc',
    dashed: true,
    label: 'DIR',
    labelPos: { x: 448, y: 450 },
  },
]