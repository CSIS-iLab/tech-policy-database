import React from 'react'
import TableOptions from '../table-options/TableOptions'
import DataTable from './DataTable'

const TableContainer = (props) => {
  const { headers, rows } = props

  return (
    <section className="datatable">
      <TableOptions />
      <DataTable headers={headers} rows={rows} />
    </section>
  )
}

export default TableContainer
