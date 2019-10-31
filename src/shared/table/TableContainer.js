import React from 'react'
import TableOptions from '../table-options/TableOptions'
import DataTable from './DataTable'

const TableContainer = (props) => {
  return (
    <main className="table">
      <TableOptions />
      <DataTable headers={props.headers} rows={props.rows} />
    </main>
  )
}

export default TableContainer
