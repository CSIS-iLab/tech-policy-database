import React, { useState, useContext, useEffect } from 'react'
import { GlobalContext } from '../../../context/GlobalContext'
import { uniq } from 'lodash'
import ModalHeader from '../ModalHeader'
import FilterPanel from './FilterPanel'
import FilterContent from './FilterContent'
import FilterSelect from './FilterSelect'
import '../Modal.css'
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
    collections,
    sortRows
  } = useContext(GlobalContext)

  useEffect(() => {
    setCheckedFilters()
    setDisplayedFilters()
  }, [allRows, allHeaders])

  const onClose = () => {
    setFilterModalStatus(false)
  }

  // Filters display of columns or rows based on search input
  //Argument of tab is passed in place of activeTab to avoid aysnc issues on tab switch
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

  const setDisplayedFilters = () => {
    setDisplayedRows(allRows.map((row) => row[0][0]))
    setDisplayedColumns(allHeaders.slice(1).map((header) => header.name))
  }

  const checkAllRows = () => {
    setCheckedRows(allRows.map((row) => row[0][0]))
  }

  const checkAllColumns = () => {
    setCheckedColumns(allHeaders.slice(1).map((header) => header.name))
  }

  const setCheckedFilters = () => {
    checkAllRows()
    checkAllColumns()
  }

  const handleDeselectAll = () => {
    if (activeTab === 'Rows') {
      setCheckedRows([])
    } else if (activeTab === 'Columns') {
      setCheckedColumns([])
    }
  }

  const handleSelectAll = () => {
    if (activeTab === 'Rows') {
      checkAllRows()
    } else if (activeTab === 'Columns') {
      checkAllColumns()
    }
  }

  const handleApply = () => {
    setFilteredHeaders(
      allHeaders.filter(
        (h) =>
          h.name === 'Categories' ||
          (checkedColumns.includes(h.name) && displayedColumns.includes(h.name))
      )
    )
    setFilteredRows(
      sortRows(
        uniq([
          ...allRows.filter(
            (row) =>
              checkedRows.includes(row[0][0]) &&
              displayedRows.includes(row[0][0])
          ),
          ...allRows.filter((row) =>
            checkedCollections.includes(row[1][1].category)
          )
        ]).map((row) => {
          return row.filter(
            (r) =>
              (checkedColumns.includes(r[0]) &&
                displayedColumns.includes(r[0])) ||
              typeof r[1] === 'string'
          )
        })
      )
    )
    // let divider = document.getElementsByClassName('divider')[0]
    // divider.style.setProperty('--column-count', allHeaders.length)
  }

  const handleResetFilters = () => {
    setCheckedRows([])
    setCheckedColumns([])
  }

  return filterModalStatus ? (
    <div className="modal">
      <ModalHeader title={'Filter'} onClose={onClose} />
      <div className="modal__content">
        <FilterTabs
          setActiveTab={setActiveTab}
          handleSearchFilter={handleSearchFilter}
        />
        <FilterPanel
          handleSearchFilter={handleSearchFilter}
          maxColumns={allHeaders.slice(1).length}
          collections={collections}
          allRows={allRows}
          activeTab={activeTab}
          displayedColumns={displayedColumns}
          displayedRows={displayedRows}
          checkedCollections={checkedCollections}
          setCheckedCollections={setCheckedCollections}
        />
        <FilterSelect
          checkedRows={checkedRows}
          checkedColumns={checkedColumns}
          activeTab={activeTab}
          handleSelectAll={handleSelectAll}
          handleDeselectAll={handleDeselectAll}
          maxRows={allRows.length}
          maxColumns={allHeaders.slice(1).length}
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
