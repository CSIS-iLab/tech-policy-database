import React from 'react'
import TableOptions from '../table-options/TableOptions'
import DataTable from './DataTable'

const TableContainer = (props) => {
  return (
    <section class="datatable">
      <TableOptions />
      <DataTable headers={props.headers} rows={props.rows} />
    </section>
  )
}

export default TableContainer
