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
        alt="font size small"
        onClick={() => resize('var(--font-size-1)')}
      >
        <Icon onClick={null} icon={'font_size'}/>
      </button>
      <button
        alt="font size medium"
        onClick={() => resize('var(--font-size-2)')}
      >
        <Icon onClick={null} icon={'font_size'}/>
      </button>
      <button
        alt="font size large"
        onClick={() => resize('var(--font-size-3)')}
      >
        <Icon onClick={null} icon={'font_size'}/>
      </button>
    </div>
  )
}

export default TableTextResize
