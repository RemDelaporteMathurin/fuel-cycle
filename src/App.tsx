import { useState, useEffect } from 'react'
import { FuelCycleDiagram } from './components/FuelCycleDiagram'
import { Controls } from './components/Controls'
import type { HighlightState } from './types'

const validStates: HighlightState[] = ['all', 'breeding', 'extraction', 'hx']

function getInitialState(): HighlightState {
  const hash = window.location.hash.replace('#', '')
  if (validStates.includes(hash as HighlightState)) {
    return hash as HighlightState
  }
  return 'all'
}

export default function App() {
  const [activeState, setActiveState] = useState<HighlightState>(getInitialState)

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (validStates.includes(hash as HighlightState)) {
        setActiveState(hash as HighlightState)
      }
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 1100, aspectRatio: '1100 / 650', margin: '0 auto' }}>
      <FuelCycleDiagram activeState={activeState} />
      <Controls active={activeState} onChange={setActiveState} />
    </div>
  )
}