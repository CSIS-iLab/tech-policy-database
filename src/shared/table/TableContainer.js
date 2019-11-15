import React from 'react'
import TableOptions from '../table-options/TableOptions'
import DataTable from './DataTable'

const TableContainer = (props) => {
  const { headers, rows, isLoaded } = props

  return isLoaded ? (
    <section className="datatable">
      <TableOptions />
      <DataTable headers={headers} rows={rows} />
    </section>
  ) : (
    <div className="loader">
      <div className="spinner"></div>
    </div>
  )
}

export default TableContainer
