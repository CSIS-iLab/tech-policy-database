import React from 'react'
import '../table/Table.css'

const TableTextResize = () => {
  const resize = (size) => {
    let table = document.getElementsByTagName('table')[0]
    table.style.fontSize = size
  }

  return (
    <div className="table__resize">
      <input
        type="image"
        alt="font size small"
        src="/letter.png"
        className="letter"
        onClick={() => resize('var(--font-size-1)')}
      />
      <input
        type="image"
        alt="font size medium"
        src="/letter.png"
        className="letter"
        onClick={() => resize('var(--font-size-2)')}
      />
      <input
        type="image"
        alt="font size large"
        src="/letter.png"
        className="letter"
        onClick={() => resize('var(--font-size-3)')}
      />
    </div>
  )
}

export default TableTextResize
