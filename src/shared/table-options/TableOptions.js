import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import SearchFilter from './SearchFilter'
import FontResize from './FontResize'
import CustomFilter from './CustomFilter'
import ScrollBar from './ScrollBar'

const TableOptions = () => {
  const {
    setFilteredRows,
    allRows,
    allHeaders,
    setFilteredHeaders,
    isFiltered,
    setIsFiltered,
    searchText,
    setSearchText,
    filterSubject,
    setFilterSubject,
    setFilterModalStatus,
    sortRows,
    setFrameModalStatus,
    setLangModalStatus,
    customFilteredRows
  } = useContext(GlobalContext)

  const [isSticky, setIsSticky] = useState(false)

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
  // Additional filter layer applied when custom filter modal is active
  const handleFilter = (text, subject) => {
    if (isFiltered) {
      setFilteredRows(
        sortRows(filterBySearch(customFilteredRows, text, subject))
      )
    } else {
      setFilteredRows(sortRows(filterBySearch(allRows, text, subject)))
    }
  }

  useEffect(() => {
    const options = document.getElementById('table__options')
    const height = options.getBoundingClientRect().height
    document.documentElement.style.setProperty('--optionsHeight', `${height}px`)

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        ([e]) => setIsSticky(e.intersectionRatio < 1),
        { threshold: [1] }
      )

      observer.observe(options)
    }
  }, [])

  const className = 'table__options container'

  return (
    <section
      id="table__options"
      className={className + (isSticky ? ' table__options--sticky' : '')}
    >
      <div className="table__options-spacer">
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
          setFilteredRows={setFilteredRows}
          allRows={allRows}
          allHeaders={allHeaders}
          setFilteredHeaders={setFilteredHeaders}
          isFiltered={isFiltered}
          setIsFiltered={setIsFiltered}
        />
      </div>
      <div className="table__options-spacer">
        <FontResize />
        <ScrollBar />
      </div>
    </section>
  )
}

export default TableOptions
