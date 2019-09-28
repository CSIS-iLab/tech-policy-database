import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import SearchBar from './SearchBar'
import FilterBar from './FilterBar'
import TableTextResize from './TableTextResize'

const TableOptions = () => {
  const context = useContext(GlobalContext)

  return (
    <div className="table__options">
      <SearchBar
        setSearchText={context.setSearchText}
        setFilterSubject={context.setFilterSubject}
      />
      <FilterBar />
      <TableTextResize />
    </div>
  )
}

export default TableOptions
