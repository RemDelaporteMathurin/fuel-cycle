import type { ParticleDef } from '../types'

export const particles: ParticleDef[] = [
  // OFC: Blanket to TES
  { pathId: 'blanket-tes', species: 'tritium', duration: 3, size: 4 },
  { pathId: 'blanket-tes', species: 'salt', duration: 3, delay: 1.2, size: 3.5 },

  // OFC: TES to HX
  { pathId: 'tes-hx', species: 'salt', duration: 2, size: 4 },

  // OFC: HX back to Blanket
  { pathId: 'hx-blanket', species: 'salt', duration: 4, size: 4 },

  // OFC: TES to Storage (pure T)
  { pathId: 'tes-storage', species: 'tritium', duration: 3, size: 4 },

  // Neutrons
  { pathId: 'neutron', species: 'neutron', duration: 1.5, size: 3 },
  { pathId: 'neutron', species: 'neutron', duration: 1.5, delay: 0.7, size: 3 },

  // IFC: Storage to Injection
  { pathId: 'storage-injection', species: 'tritium', duration: 2, size: 3 },
  { pathId: 'storage-injection', species: 'deuterium', duration: 2, delay: 0.8, size: 3 },

  // IFC: Injection to Plasma
  { pathId: 'injection-plasma', species: 'tritium', duration: 2.5, size: 3.5 },
  { pathId: 'injection-plasma', species: 'deuterium', duration: 2.5, delay: 0.6, size: 3.5 },

  // IFC: Plasma to Exhaust
  { pathId: 'plasma-exhaust', species: 'tritium', duration: 3, size: 3 },
  { pathId: 'plasma-exhaust', species: 'deuterium', duration: 3, delay: 0.5, size: 3 },
  { pathId: 'plasma-exhaust', species: 'impurity', duration: 3, delay: 1.2, size: 2.5 },

  // IFC: Exhaust to Fuel Cleanup
  { pathId: 'exhaust-cleanup', species: 'tritium', duration: 1.5, size: 3 },
  { pathId: 'exhaust-cleanup', species: 'impurity', duration: 1.5, delay: 0.5, size: 2.5 },

  // IFC: Fuel Cleanup to ISS
  { pathId: 'cleanup-iss', species: 'tritium', duration: 2.5, size: 3 },
  { pathId: 'cleanup-iss', species: 'deuterium', duration: 2.5, delay: 0.8, size: 3 },

  // IFC: ISS to Storage
  { pathId: 'iss-storage', species: 'tritium', duration: 2.5, size: 3.5 },

  // DIR
  { pathId: 'dir', species: 'tritium', duration: 2, size: 3, opacity: 0.7 },
  { pathId: 'dir', species: 'deuterium', duration: 2, delay: 0.7, size: 3, opacity: 0.7 },

  // HX permeation leaks
  { pathId: 'hx-permeation', species: 'tritium', duration: 1, size: 2, opacity: 0.6 },

  // Secondary coolant
  { pathId: 'secondary-power', species: 'coolant', duration: 3.5, size: 3.5 },
  { pathId: 'secondary-power', species: 'tritium', duration: 3.5, delay: 1, size: 2, opacity: 0.5 },

  // FW permeation
  { pathId: 'fw-permeation', species: 'tritium', duration: 5, size: 2, opacity: 0.5 },

  // Recovery to ISS
  { pathId: 'recovery-iss', species: 'tritium', duration: 3.5, size: 2.5, opacity: 0.7 },
]