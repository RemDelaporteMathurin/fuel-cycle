import { HighlightState } from '../types'
import { highlights } from '../data/highlights'

interface Props {
  active: HighlightState
  onChange: (state: HighlightState) => void
}

export function Controls({ active, onChange }: Props) {
  return (
    <div style={{
      position: 'absolute',
      bottom: 15,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: 10,
    }}>
      <button
        onClick={() => onChange('all')}
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
          onClick={() => onChange(h.id)}
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