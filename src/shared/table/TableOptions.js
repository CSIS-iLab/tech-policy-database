import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import SearchBar from './SearchBar'
import FilterBar from './FilterBar'
import TableTextResize from './TableTextResize'

const TableOptions = () => {
  const context = useContext(GlobalContext)

  const filterByCategories = (text) => {
    context.setFilteredRows(context.allRows.filter((row) =>
      row[0][0].toLowerCase().includes(text.toLowerCase())
    ))
  }

  const filterByLang = (text, subject) => {
    context.setFilteredRows(context.allRows.filter((row) => {
      return row
        .slice(1)
        .some((cat) =>
          cat[1][subject].toLowerCase().includes(text.toLowerCase())
        )
    }))
  }

  const filterRows = (text, subject) => {
    switch (subject) {
      case 'categories':
        return filterByCategories(text)
      case 'abbreviated_lang':
        return filterByLang(text, subject)
      case 'original_lang':
        return filterByLang(text, subject)
      default:
        return []
    }
  }

  return (
    <div className="table__options">
      <SearchBar
        filterRows={filterRows}
      />
      <FilterBar />
      <TableTextResize />
    </div>
  )
}

export default TableOptions
