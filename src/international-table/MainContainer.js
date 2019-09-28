import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import Description from './Description'
import ModalContainer from './modals/ModalContainer'
import TableContainer from '../shared/table/TableContainer'

const MainContainer = () => {
  const context = useContext(GlobalContext)

  const filterHeaders = () => {
    return context.allHeaders.filter((header) =>
      header.name.toLowerCase().includes(context.searchText.toLowerCase())
    )
  }

  return (
    <div className="international-container">
      <Description />
      <TableContainer headers={context.allHeaders} rows={context.filteredRows} />
      <ModalContainer headers={context.allHeaders} />
    </div>
  )
}

export default MainContainer
