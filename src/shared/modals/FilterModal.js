import React, { useState, useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import FilterSearch from './FilterSearch'
import FilterContent from './FilterContent'
import FilterSelect from './FilterSelect'
import './Modal.css'
import Icon from '../site-config/Icon'

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

  const deselectAll = () => {
    if (activeTab === 'Rows') {
      setCheckedRows([])
    } else if (activeTab === 'Columns') {
      setCheckedColumns([])
    }
  }

  return filterModalStatus ? (
    <div className="modal">
      <div className="modal__header">
        Filter
        <Icon onClick={handleClick} icon={'close'}></Icon>
      </div>
      <div className="modal__content">
        <div>
          <div onClick={() => handleTabSwitch('Columns')}>
            <Icon onClick={null} icon={'columns'}></Icon>
            <span>Columns</span>
          </div>
          <div onClick={() => handleTabSwitch('Rows')}>
            <Icon onClick={null} icon={'rows'}></Icon>
            <span>Rows</span>
          </div>
        </div>
        <FilterSearch
          activeTab={activeTab}
          handleSearchFilter={handleSearchFilter}
          displayedRows={displayedRows}
          displayedColumns={displayedColumns}
          maxRows={allRows.length}
          maxColumns={allHeaders.slice(1).length}
          collections={collections}
          checkedCollections={checkedCollections}
          setCheckedCollections={setCheckedCollections}
          allRows={allRows}
        />
        <FilterSelect
          setCheckedFilters={setCheckedFilters}
          checkedRows={checkedRows}
          checkedColumns={checkedColumns}
          activeTab={activeTab}
          deselectAll={deselectAll}
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
      <div className="modal__footer">
        <div onClick={handleResetFilters}>
          <Icon onClick={null} icon={'reset'}></Icon>
          <span>Reset all filters</span>
        </div>
        {(checkedRows.length > 0 && checkedColumns.length) > 0 ? (
          <button onClick={handleApply}>Apply</button>
        ) : (
          <div>Apply</div>
        )}
        {checkedRows.length === 0 ? (
          <div>
            <div>Please select at least one row</div>
          </div>
        ) : null}
        {checkedColumns.length === 0 ? (
          <div>
            <div>Please select at least one column</div>
          </div>
        ) : null}
      </div>
    </div>
  ) : null
}

export default FilterModal
