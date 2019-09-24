import React from 'react'
import HeaderCell from './HeaderCell'
import TableCell from './TableCell'

const DataTable = (props) => {
  const renderHeadingRow = (cell, cellIndex) => {
    const { headers } = props

    return (
      <HeaderCell key={`heading-${cellIndex}`} content={headers[cellIndex]} />
    )
  }

  const renderRow = (row, rowIndex) => {
    const { rows } = props

    return (
      <tr key={`row-${rowIndex}`}>
        {rows[rowIndex].map((cell, cellIndex) => {
          return (
            <TableCell
              key={`${rowIndex}-${cellIndex}`}
              content={rows[rowIndex][cellIndex]}
            />
          )
        })}
      </tr>
    )
  }

  const { headers, rows } = props

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>{headers.map(renderHeadingRow)}</tr>
        </thead>
        <tbody>{rows.map(renderRow)}</tbody>
      </table>
    </div>
  )
}

export default DataTable
