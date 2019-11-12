import React from 'react'
import Icon from '../site-config/Icon'

const FontResize = () => {
  const resize = () => {
    let table = document.getElementById('table')
    table.style.getPropertyValue("--table-font-size");
    table.style.setProperty("--table-font-size", '14px') 
  }

  return (
    <div className="font__resize">
      <button
        className="btn btn--dark btn--square"
        alt="font size small"
        onClick={() => resize('var(--font-size--sm)')}
      >
        <Icon icon={'font-size'} />
      </button>
      <button
        className="btn btn--dark btn--square"
        alt="font size medium"
        onClick={() => resize('var(--font-size--md)')}
      >
        <Icon icon={'font-size'} />
      </button>
      <button
        className="btn btn--dark btn--square"
        alt="font size large"
        onClick={() => resize('var(--font-size--lg)')}
      >
        <Icon icon={'font-size'} />
      </button>
    </div>
  )
}

export default FontResize
