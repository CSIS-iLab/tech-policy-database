import React from 'react'
import TableOptions from './TableOptions'
import DataTable from './DataTable'

const TableContainer = (props) => {
  return (
    <div className="table">
      <TableOptions />
      <DataTable headers={props.headers} rows={props.rows} />
    </div>
  )
}

export default TableContainer
