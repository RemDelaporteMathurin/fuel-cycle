import type { HighlightState } from '../types'
import { highlights } from '../data/highlights'

interface Props {
  active: HighlightState
  onChange: (state: HighlightState) => void
}

export function Controls({ active, onChange }: Props) {
  const handleClick = (state: HighlightState) => {
    onChange(state)
    // Update URL hash
    window.history.replaceState(null, '', `#${state}`)
  }

  return (
    <div style={{
      position: 'absolute',
      bottom: 15,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap',
      justifyContent: 'center',
      width: 'max-content',
      maxWidth: 'calc(100% - 20px)'
    }}>
      <button
        onClick={() => handleClick('all')}
        style={{
          padding: '8px 16px',
          border: '2px solid #264653',
          borderRadius: 20,
          background: active === 'all' ? '#264653' : '#fff',
          color: active === 'all' ? '#fff' : '#264653',
          fontSize: 12,
          fontWeight: 600,
          cursor: 'pointer',
        }}
      >
        All
      </button>
      {highlights.map(h => (
        <button
          key={h.id}
          onClick={() => handleClick(h.id)}
          style={{
            padding: '8px 16px',
            border: '2px solid #264653',
            borderRadius: 20,
            background: active === h.id ? '#264653' : '#fff',
            color: active === h.id ? '#fff' : '#264653',
            fontSize: 12,
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          {h.label}
        </button>
      ))}
    </div>
  )
}