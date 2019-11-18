import React, { useState } from 'react'
import Icon from '../site-config/Icon'

const FontResize = () => {
  const [activeSize, setActiveSize] = useState('sm')

  const resize = (size) => {
    setActiveSize(size)
    let table = document.getElementById('table')
    table.style.setProperty('--table-font-size', 'var(--font-size--' + size + ')')
  }

  const renderClass = (size) => {
    let baseClass = "btn btn--dark btn--square"

    return activeSize === size
      ? baseClass + " js-isActive"
      : baseClass
  }

  return (
    <div className="font__resize">
      <button
        className={renderClass('sm')}
        alt="font size small"
        onClick={() => resize('sm')}
      >
        <Icon icon={'font-size'} />
      </button>
      <button
        className={renderClass('md')}
        alt="font size medium"
        onClick={() => resize('md')}
      >
        <Icon icon={'font-size'} />
      </button>
      <button
        className={renderClass('lg')}
        alt="font size large"
        onClick={() => resize('lg')}
      >
        <Icon icon={'font-size'} />
      </button>
    </div>
  )
}

export default FontResize
