import React from 'react'
import '../table/Table.css'
import Icon from '../site-config/Icon'

const TableTextResize = () => {
  const resize = (size) => {
    let table = document.getElementsByTagName('table')[0]
    table.style.fontSize = size
  }

  return (
    <div className="table__resize">
      <button
        className="resize-btn"
        alt="font size small"
        onClick={() => resize('var(--font-size-1)')}
      >
        <Icon icon={'font_size'} />
      </button>
      <button
        className="resize-btn"
        alt="font size medium"
        onClick={() => resize('var(--font-size-2)')}
      >
        <Icon icon={'font_size'} />
      </button>
      <button
        className="resize-btn"
        alt="font size large"
        onClick={() => resize('var(--font-size-3)')}
      >
        <Icon icon={'font_size'} />
      </button>
    </div>
  )
}

export default TableTextResize
