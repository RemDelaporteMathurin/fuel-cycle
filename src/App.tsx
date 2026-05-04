import { useState } from 'react'
import { FuelCycleDiagram } from './components/FuelCycleDiagram'
import { Controls } from './components/Controls'
import { HighlightState } from './types'

export default function App() {
  const [activeState, setActiveState] = useState<HighlightState>('all')

  return (
    <div style={{ position: 'relative', width: 1100, height: 650 }}>
      <FuelCycleDiagram activeState={activeState} />
      <Controls active={activeState} onChange={setActiveState} />
    </div>
  )
}