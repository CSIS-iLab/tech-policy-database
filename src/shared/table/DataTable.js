import React from 'react'
import HeaderCell from './HeaderCell'
import TableCell from './TableCell'

const DataTable = (props) => {
  const renderHeadingRow = (cell, cellIndex) => {
    const { headers, rows } = props

    return (
      <HeaderCell key={cellIndex} content={headers[cellIndex]} rows={rows} />
    )
  }

  const renderRow = (row, rowIndex) => {
    const { rows } = props

    return (
      <tr key={rowIndex} className="table__row">
        {rows[rowIndex].map((cell, cellIndex) => {
          return (
            <TableCell key={cellIndex} content={rows[rowIndex][cellIndex]} />
          )
        })}
      </tr>
    )
  }

  const { headers, rows } = props

  const renderSearchErr = () => {
    return (
      <td className="table__cell table__cell--body" colSpan="11">
        <div>No Results</div>
        <p>
          Sorry we didn't find any results for <span>"keyword"</span> within{' '}
          <span>Group</span>.
        </p>
        <ul>
          <li>Check your spelling and try again</li>
          <li>Try a similar but different term</li>
          <li>Use the dropdown to search another type of data</li>
        </ul>
      </td>
    )
  }

  return (
    <div id="table-container" className="table__container">
      <table id="table" className="table">
        <thead>
          <tr className="table__header-row">{headers.map(renderHeadingRow)}</tr>
        </thead>
        {rows.length > 0 ? (
          <tbody>{rows.map(renderRow)}</tbody>
        ) : (
          <tbody>
            <tr>{renderSearchErr()}</tr>
          </tbody>
        )}
      </table>
    </div>
  )
}

export default DataTable
