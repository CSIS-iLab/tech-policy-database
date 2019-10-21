import React, { useState, useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import FilterContent from './FilterContent'
import './Modal.css'

const FilterModal = () => {
  const [activeTab, setActiveTab] = useState('Rows')
  const [activeFilterRows, setActiveFilterRows] = useState([])
  const [activeFilterColumns, setActiveFilterColumns] = useState([])

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

  const setActiveFilters = () => {
    setActiveFilterRows(allRows.map(row => row[0][0]))
    setActiveFilterColumns(allHeaders.slice(1).map(header => header.name))
  }

  const handleApply = () => {
    setFilteredHeaders(allHeaders.filter(h => h.name === 'Categories' || activeFilterColumns.includes(h.name)))
    setFilteredRows(
      // sortRows(
      allRows
        .filter((row) => activeFilterRows.includes(row[0][0]))
        .map((row) =>
          row.filter((r) =>
            activeFilterColumns.includes(r[0]) || typeof r[1] === 'string'
          )
        )
      // )
    )
    let divider = document.getElementsByClassName('divider')[0]
    console.log(divider)
    divider.style.setProperty('--column-count', allHeaders.length)
  }


  // Sorts by collections and adds divider when at least one category is present
  const sortRows = (rows) => {
    return collections.reduce((acc, collection) => {
      if (rows.find((r) => r[1][1].category === collection) !== undefined) {
        acc.push([collection])
      }
      acc = [...acc, ...rows.filter(row => row[1][1].category === collection)]
      return acc
    }, [])
  }

  useEffect(() => {
    setActiveFilters()
  }, [allRows, allHeaders])

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
          <div onClick={() => setActiveTab('Rows')}>Rows</div>
          <div onClick={() => setActiveTab('Columns')}>Columns</div>
        </div>
        <FilterContent
          allRows={allRows}
          activeTab={activeTab}
          activeFilterRows={activeFilterRows}
          setActiveFilterRows={setActiveFilterRows}
          activeFilterColumns={activeFilterColumns}
          setActiveFilterColumns={setActiveFilterColumns}
        />
      </div>
      <div className="modal__footer">
        <div>Reset All Filters</div>
        <button onClick={handleApply}>Apply</button>
      </div>
    </div>
  ) : null
}

export default FilterModal
