import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import SearchBar from './SearchBar'
import FilterBar from './FilterBar'
import TableTextResize from './TableTextResize'

const TableOptions = () => {
  const {
    setFilteredRows,
    allRows,
    searchText,
    setSearchText,
    filterSubject,
    setFilterSubject,
    curatedCat,
    setCuratedCat
  } = useContext(GlobalContext)

  const filterByCategories = (rows, text) => {
    return rows.filter((row) =>
      row[0][0].toLowerCase().includes(text.toLowerCase())
    )
  }

  const filterByLang = (rows, text, subject) => {
    return rows.filter((row) => {
      return row
        .slice(1)
        .some(
          (cat) => {
            return cat[1][subject].toLowerCase().includes(text.toLowerCase()) ||
              (cat[1]['default_lang'].toLowerCase().includes(text.toLowerCase()) && cat[1][subject] === '')
          }

        )
    })
  }

  // Filters by search term and subject (i.e. abbreviated language)
  const filterBySearch = (rows, text, subject) => {
    switch (subject) {
      case 'categories':
        return filterByCategories(rows, text)
      case 'abbreviated_lang':
        return filterByLang(rows, text, subject)
      case 'original_lang':
        return filterByLang(rows, text, subject)
      default:
        return []
    }
  }

  // Filters categories by their selected curated groupings
  const filterByCurated = (rows, curated) => {
    return rows.filter((row) => {
      return curated === row[1][1].category || curated === ''
    })
  }

  // Serves as the master filter that combines filterRows and filterByCurated 
  const handleFilter = (text, subject, curated) => {
    setFilteredRows(
      filterByCurated(filterBySearch(allRows, text, subject), curated)
    )
  }

  return (
    <div className="table__options">
      <SearchBar
        handleFilter={handleFilter}
        searchText={searchText}
        setSearchText={setSearchText}
        filterSubject={filterSubject}
        setFilterSubject={setFilterSubject}
        curatedCat={curatedCat}
      />
      <FilterBar
        handleFilter={handleFilter}
        curatedCat={curatedCat}
        setCuratedCat={setCuratedCat}
        searchText={searchText}
        filterSubject={filterSubject}
      />
      <TableTextResize />
    </div>
  )
}

export default TableOptions
