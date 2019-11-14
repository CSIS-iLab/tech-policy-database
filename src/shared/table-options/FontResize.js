import React from 'react'
import Icon from '../site-config/Icon'

const FontResize = () => {
  const resize = (size) => {
    let table = document.getElementById('table')
    table.style.setProperty('--table-font-size', 'var(--font-size--' + size + ')')
  }

  return (
    <div className="font__resize">
      <button
        className="btn btn--dark table__options-resize table__options-resize-sm"
        alt="font size small"
        onClick={() => resize('sm')}
      >
        <Icon icon={'font-size'} />
      </button>
      <button
        className="btn btn--dark table__options-resize table__options-resize-md"
        alt="font size medium"
        onClick={() => resize('md')}
      >
        <Icon icon={'font-size'} />
      </button>
      <button
        className="btn btn--dark table__options-resize table__options-resize-lg"
        alt="font size large"
        onClick={() => resize('lg')}
      >
        <Icon icon={'font-size'} />
      </button>
    </div>
  )
}

export default FontResize
