import React, { useState, useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import FilterSearch from './FilterSearch'
import FilterContent from './FilterContent'
import './Modal.css'

const FilterModal = () => {
  const [activeTab, setActiveTab] = useState('Rows')
  const [checkedRows, setCheckedRows] = useState([])
  const [displayedRows, setDisplayedRows] = useState([])
  const [checkedColumns, setCheckedColumns] = useState([])
  const [displayedColumns, setDisplayedColumns] = useState([])

  const {
    filterModalStatus,
    setFilterModalStatus,
    allRows,
    setFilteredRows,
    allHeaders,
    setFilteredHeaders,
    collections
  } = useContext(GlobalContext)

  const handleClick = () => {
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
        allRows
          .filter((row) => checkedRows.includes(row[0][0]))
          .map((row) =>
            row.filter(
              (r) => checkedColumns.includes(r[0]) || typeof r[1] === 'string'
            )
          )
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

  const handleTabSwitch = (tab) => {
    setActiveTab(tab)
    handleSearchFilter(document.getElementById('search-input').value, tab)
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
      <div className="modal__header">
        Filter
        <span className="modal__close" onClick={handleClick}>
          X
        </span>
      </div>
      <div className="modal__content">
        <div>
          <div onClick={() => handleTabSwitch('Rows')}>Rows</div>
          <div onClick={() => handleTabSwitch('Columns')}>Columns</div>
        </div>
        <FilterSearch
          activeTab={activeTab}
          handleSearchFilter={handleSearchFilter}
          displayedRows={displayedRows}
          displayedColumns={displayedColumns}
          maxRows={allRows.length}
          maxColumns={allHeaders.slice(1).length}
          collections={collections}
        />
        <div onClick={setCheckedFilters}>
          <span>[]</span>
          <span>Select All</span>
        </div>
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
      <div className="modal__footer">
        <div onClick={handleResetFilters}>Reset all filters</div>
        {(checkedRows.length > 0 && checkedColumns.length) > 0 ? (
          <button onClick={handleApply}>Apply</button>
        ) : (
          <div>Apply</div>
        )}
        {checkedRows.length === 0 && activeTab === 'Rows' ? (
          <div>
            <div>Please select at least one row</div>
          </div>
        ) : null}
        {checkedColumns.length === 0 && activeTab === 'Columns' ? (
          <div>
            <div>Please select at least one column</div>
          </div>
        ) : null}
      </div>
    </div>
  ) : null
}

export default FilterModal
