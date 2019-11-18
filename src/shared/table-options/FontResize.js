import React, { useState } from 'react'
import Icon from '../site-config/Icon'

const FontResize = () => {
  const [activeSize, setActiveSize] = useState('sm')

  const resize = (size) => {
    setActiveSize(size)
    let table = document.getElementById('table')
    table.style.setProperty(
      '--table-font-size',
      'var(--font-size--' + size + ')'
    )
  }

  const renderClass = (size) => {
    let baseClass =
      'btn btn--dark table__options-resize table__options-resize-' + size

    return activeSize === size ? baseClass + ' js-isActive' : baseClass
  }

  return (
    <div className="font__resize">
      <button
        className={renderClass('sm')}
        aria-label="Reset font size to standard size."
        onClick={() => resize('sm')}
      >
        <Icon icon={'font-size'} />
      </button>
      <button
        className={renderClass('md')}
        aria-label="Make font size a little bit larger."
        onClick={() => resize('md')}
      >
        <Icon icon={'font-size'} />
      </button>
      <button
        className={renderClass('lg')}
        aria-label="Make font size larger."
        onClick={() => resize('lg')}
      >
        <Icon icon={'font-size'} />
      </button>
    </div>
  )
}

export default FontResize
