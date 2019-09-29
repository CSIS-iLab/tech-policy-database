import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import SearchBar from './SearchBar'
import FilterBar from './FilterBar'
import TableTextResize from './TableTextResize'

const TableOptions = () => {
  const { setFilteredRows, allRows } = useContext(GlobalContext)


  const filterByCategories = (text) => {
    setFilteredRows(allRows.filter((row) =>
      row[0][0].toLowerCase().includes(text.toLowerCase())
    ))
  }

  const filterByLang = (text, subject) => {
    setFilteredRows(allRows.filter((row) => {
      return row
        .slice(1)
        .some((cat) =>
          cat[1][subject].toLowerCase().includes(text.toLowerCase()) || cat[1]['default_lang'].toLowerCase().includes(text.toLowerCase())
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

  const filterByCurated = (curatedCat) => {
    return setFilteredRows(allRows.filter((row) => {
      return curatedCat.includes(row[0][0])
    }))
  }

  return (
    <div className="table__options">
      <SearchBar filterRows={filterRows} />
      <FilterBar filterByCurated={filterByCurated} />
      <TableTextResize />
    </div>
  )
}

export default TableOptions
