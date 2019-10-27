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
    setDisplayedRowsAndColumns()
  }, [allRows, allHeaders])

  const onClose = () => {
    setFilterModalStatus(false)
  }

  // Filters display of columns or rows based on search input
  // Argument of tab is passed in place of activeTab to avoid aysnc issues on tab switch
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

  // Sets all rows and columns as displayed
  // Displayed determines whether the row/column is visible on the modal
  const setDisplayedRowsAndColumns = () => {
    setDisplayedRows(allRows.map((row) => row[0][0]))
    setDisplayedColumns(allHeaders.slice(1).map((header) => header.name))
  }

  // Sets all rows as checked
  // Checked determines whether the row is to be filtered out by the custom-filter
  const checkAllRows = () => {
    setCheckedRows(allRows.map((row) => row[0][0]))
  }

  // Sets all columns as checked
  // Checked determines whether the column is to be filtered out by the custom-filter
  const checkAllColumns = () => {
    setCheckedColumns(allHeaders.slice(1).map((header) => header.name))
  }

  const setCheckedFilters = () => {
    checkAllRows()
    checkAllColumns()
  }

  // Sets all rows or columns to unchecked depending on which tab the user is on
  const handleDeselectAll = () => {
    if (activeTab === 'Rows') {
      setCheckedRows([])
    } else if (activeTab === 'Columns') {
      setCheckedColumns([])
    }
  }

  // Sets all rows or columns to checked depending on which tab the user is on
  const handleSelectAll = () => {
    if (activeTab === 'Rows') {
      checkAllRows()
    } else if (activeTab === 'Columns') {
      checkAllColumns()
    }
  }

  // Helper f(n) for applyFilters()
  const applyHeaderFilters = () => {
    setFilteredHeaders(
      allHeaders.filter(
        (h) =>
          h.name === 'Categories' ||
          (checkedColumns.includes(h.name) && displayedColumns.includes(h.name))
      )
    )
  }

  // Helper f(n) for applyFilters()
  const applyRowFilters = () => {
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
  }

  // Filters based on all checked rows, columns, and collections
  // setFilteredHeaders modifies the table to only display columns (eg. frameworks) checked in the custom-filter
  // The first column is always present and cannot be filtered
  // setFilteredRows modifies the table to display rows that are either checked or part of a checked collection (dropdown filter)
  // Filters the result of user input, to remove unused cell data (based on checked colums)
  // Sorts by collections and adds divider when at least one category is present
  const applyFilters = () => {
    applyHeaderFilters()
    applyRowFilters()
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
        applyFilters={applyFilters}
      />
    </div>
  ) : null
}

export default FilterModal