import React from 'react'
import Icon from '../site-config/Icon'

const FontResize = () => {
  const resize = (size) => {
    let table = document.getElementById('table')
    let val = getComputedStyle(table).getPropertyValue(size)

    table.style.setProperty('--table-font-size', val)

    console.log(getComputedStyle(table).getPropertyValue('--table-font-size'))
    console.log(getComputedStyle(table).getPropertyValue('font-size'))
  }

  return (
    <div className="font__resize">
      <button
        className="btn btn--dark btn--square"
        alt="font size small"
        onClick={() => resize('--font-size--sm')}
      >
        <Icon icon={'font-size'} />
      </button>
      <button
        className="btn btn--dark btn--square"
        alt="font size medium"
        onClick={() => resize('--font-size--md')}
      >
        <Icon icon={'font-size'} />
      </button>
      <button
        className="btn btn--dark btn--square"
        alt="font size large"
        onClick={() => resize('--font-size--lg')}
      >
        <Icon icon={'font-size'} />
      </button>
    </div>
  )
}

export default FontResize
