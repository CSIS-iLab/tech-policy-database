import React from 'react'
import './Table.css'

const TableTextResize = () => {
  const resize = (size) => {
    let table = document.getElementsByTagName('table')[0]
    table.style.fontSize = size
  }

  return (
    <div>
      <input
        type="image"
        src="/letter.png"
        className="letter"
        onClick={() => resize('var(--font-size-1)')}
      />
      <input
        type="image"
        src="/letter.png"
        className="letter"
        onClick={() => resize('var(--font-size-2)')}
      />
      <input
        type="image"
        src="/letter.png"
        className="letter"
        onClick={() => resize('var(--font-size-3)')}
      />
    </div>
  )
}

export default TableTextResize
