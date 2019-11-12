import React from 'react'
import Icon from '../site-config/Icon'

const FontResize = () => {
  const resize = (size) => {
    let table = document.getElementById('table')
    table.style.fontSize = size
  }

  // --table-font-size: var(--font-size--md)
  return (
    <div className="font__resize">
      <button
        className="btn btn--dark btn--square"
        alt="font size small"
        onClick={() => resize('var(--font-size-1)')}
      >
        <Icon icon={'font-size'} />
      </button>
      <button
        className="btn btn--dark btn--square"
        alt="font size medium"
        onClick={() => resize('var(--font-size-1)')}
      >
        <Icon icon={'font-size'} />
      </button>
      <button
        className="btn btn--dark btn--square"
        alt="font size large"
        onClick={() => resize('var(--font-size-3)')}
      >
        <Icon icon={'font-size'} />
      </button>
    </div>
  )
}

export default FontResize
