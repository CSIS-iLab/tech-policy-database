import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import SearchFilter from './SearchFilter'
import FontResize from './FontResize'
import CustomFilter from './CustomFilter'
import ScrollBar from './ScrollBar'

const TableOptions = () => {
  const {
    setFilteredRows,
    allRows,
    searchText,
    setSearchText,
    filterSubject,
    setFilterSubject,
    setFilterModalStatus,
    sortRows,
    setFrameModalStatus,
    setLangModalStatus
  } = useContext(GlobalContext)

  const filterByCategories = (rows, text) => {
    return rows.filter((row) =>
      row[0][0].toLowerCase().includes(text.toLowerCase())
    )
  }

  const filterByLang = (rows, text, subject) => {
    return rows.filter((row) => {
      return row.slice(1).some((cat) => {
        return (
          cat[1][subject].toLowerCase().includes(text.toLowerCase()) ||
          (cat[1]['default_lang'].toLowerCase().includes(text.toLowerCase()) &&
            cat[1][subject] === '')
        )
      })
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

  // Serves as the master filter that combines filterRows and filterByCurated
  const handleFilter = (text, subject) => {
    setFilteredRows(sortRows(filterBySearch(allRows, text, subject)))
  }

  return (
    <section className="table__options container">
      <SearchFilter
        handleFilter={handleFilter}
        searchText={searchText}
        setSearchText={setSearchText}
        filterSubject={filterSubject}
        setFilterSubject={setFilterSubject}
      />
      <CustomFilter
        setFilterModalStatus={setFilterModalStatus}
        setFrameModalStatus={setFrameModalStatus}
        setLangModalStatus={setLangModalStatus}
      />
      <FontResize />
      <ScrollBar />
    </section>
  )
}

export default TableOptions
