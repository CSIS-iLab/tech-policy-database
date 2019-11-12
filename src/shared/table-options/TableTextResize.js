import React from 'react'
import Icon from '../site-config/Icon'

const TableTextResize = () => {
  const resize = (size) => {
    let table = document.getElementsByTagName('table')[0]
    table.style.fontSize = size
  }

  return (
    <div className="table__resize">
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
        onClick={() => resize('var(--font-size-2)')}
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

export default TableTextResize
