import React, { useState, useContext, useEffect } from 'react'
import { GlobalContext } from '../../../context/GlobalContext'
import ModalHeader from '../ModalHeader'
import FilterSearch from './FilterSearch'
import FilterContent from './FilterContent'
import FilterSelect from './FilterSelect'
import '../Modal.css'
import Icon from '../../site-config/Icon'
import FilterTabs from './FilterTabs'
import FilterFooter from './FilterFooter'

const FilterModal = () => {
  const [activeTab, setActiveTab] = useState('Rows')
  const [checkedRows, setCheckedRows] = useState([])
  const [displayedRows, setDisplayedRows] = useState([])
  const [checkedColumns, setCheckedColumns] = useState([])
  const [displayedColumns, setDisplayedColumns] = useState([])
  const [checkedCollections, setCheckedCollections] = useState([])

  const {
    filterModalStatus,
    setFilterModalStatus,
    allRows,
    setFilteredRows,
    allHeaders,
    setFilteredHeaders,
    collections
  } = useContext(GlobalContext)

  // Exits custom filter modal
  const onClose = () => {
    setFilterModalStatus(false)
  }

  const setCheckedFilters = () => {
    setCheckedRows(allRows.map((row) => row[0][0]))
    setCheckedColumns(allHeaders.slice(1).map((header) => header.name))
  }

  const setDisplayedFilters = () => {
    setDisplayedRows(allRows.map((row) => row[0][0]))
    setDisplayedColumns(allHeaders.slice(1).map((header) => header.name))
  }

  useEffect(() => {
    setCheckedFilters()
    setDisplayedFilters()
  }, [allRows, allHeaders])

  const handleApply = () => {
    setFilteredHeaders(
      allHeaders.filter(
        (h) => h.name === 'Categories' || checkedColumns.includes(h.name)
      )
    )
    setFilteredRows(
      sortRows(
        [
          ...allRows.filter((row) => checkedRows.includes(row[0][0])),
          ...allRows.filter((row) =>
            checkedCollections.includes(row[1][1].category)
          )
        ].map((row) => {
          return row.filter(
            (r) => checkedColumns.includes(r[0]) || typeof r[1] === 'string'
          )
        })
      )
    )
    // let divider = document.getElementsByClassName('divider')[0]
    // divider.style.setProperty('--column-count', allHeaders.length)
  }

  // Sorts by collections and adds divider when at least one category is present
  const sortRows = (rows) => {
    return collections.reduce((acc, collection) => {
      if (rows.find((r) => r[1][1].category === collection) !== undefined) {
        acc.push([collection])
      }
      acc = [...acc, ...rows.filter((row) => row[1][1].category === collection)]
      return acc
    }, [])
  }

  const handleResetFilters = () => {
    setCheckedRows([])
    setCheckedColumns([])
  }

  const handleSearchFilter = (text, tab) => {
    tab === 'Rows'
      ? setDisplayedRows(
          allRows
            .filter((row) =>
              row[0][0].toLowerCase().includes(text.toLowerCase())
            )
            .map((row) => row[0][0])
        )
      : setDisplayedColumns(
          allHeaders
            .slice(1)
            .filter((header) =>
              header.name.toLowerCase().includes(text.toLowerCase())
            )
            .map((header) => header.name)
        )
  }

  return filterModalStatus ? (
    <div className="modal">
      <ModalHeader title={'Filter'} onClose={onClose} />
      <div className="modal__content">
        <FilterTabs
          setActiveTab={setActiveTab}
          handleSearchFilter={handleSearchFilter}
        />
        <FilterSearch
          handleSearchFilter={handleSearchFilter}
          maxColumns={allHeaders.slice(1).length}
          collections={collections}
          allRows={allRows}
          activeTab={activeTab}
          displayedColumns={displayedColumns}
          displayedRows={displayedRows}
          checkedCollections={checkedColumns}
          setCheckedCollections={setCheckedCollections}
        />
        <FilterSelect
          setCheckedFilters={setCheckedFilters}
          checkedRows={checkedRows}
          checkedColumns={checkedColumns}
          activeTab={activeTab}
        />

        <FilterContent
          activeTab={activeTab}
          checkedRows={checkedRows}
          setCheckedRows={setCheckedRows}
          displayedRows={displayedRows}
          displayedColumns={displayedColumns}
          checkedColumns={checkedColumns}
          setCheckedColumns={setCheckedColumns}
        />
      </div>
      <FilterFooter
        checkedRows={checkedRows}
        checkedColumns={checkedColumns}
        handleResetFilters={handleResetFilters}
        handleApply={handleApply}
      />
    </div>
  ) : null
}

export default FilterModal
