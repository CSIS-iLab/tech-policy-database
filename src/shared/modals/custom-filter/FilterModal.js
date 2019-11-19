import React, { useState, useContext, useEffect } from 'react'
import { GlobalContext } from '../../../context/GlobalContext'
import ModalHeader from '../ModalHeader'
import FilterTabs from './FilterTabs'
import FilterFooter from './FilterFooter'

const FilterModal = () => {
  const [checkedRows, setCheckedRows] = useState([])
  const [displayedRows, setDisplayedRows] = useState([])
  const [checkedColumns, setCheckedColumns] = useState([])
  const [displayedColumns, setDisplayedColumns] = useState([])
  const [checkedCollections, setCheckedCollections] = useState([])

  const {
    setIsFiltered,
    filterModalStatus,
    setFilterModalStatus,
    allRows,
    setFilteredRows,
    allHeaders,
    setFilteredHeaders,
    collections,
    sortRows,
    setCustomFilteredRows
  } = useContext(GlobalContext)

  // Sets filterModal to default state with all items checked and displayed
  useEffect(() => {
    setCheckedFilters()
    setDisplayedRowsAndColumns()
    // eslint-disable-next-line
  }, [allRows, allHeaders])

  // Condition for resetting displayedRows when no collections are checked
  useEffect(() => {
    if (checkedCollections.length === 0) {
      setDisplayedRows(allRows.map((row) => row[0][0]))
    }
  }, [checkedCollections])

  // Sets initial focus to filterModal upon opening
  useEffect(() => {
    if (filterModalStatus) {
      let filter = document.getElementById('modal--filter')

      filter.focus()
    }
  }, [filterModalStatus])

  const onClose = () => {
    setFilterModalStatus(false)
  }

  // Filters display of columns or rows based on search input
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

  // Sets all rows as unchecked
  const uncheckAllRows = () => {
    setCheckedRows([])
  }

  // Sets all columns as unchecked
  const uncheckAllColumns = () => {
    setCheckedColumns([])
  }

  const handleResetFilters = () => {
    uncheckAllRows()
    uncheckAllColumns()
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
    return allRows
      .filter(
        (row) =>
          checkedRows.includes(row[0][0]) && displayedRows.includes(row[0][0])
      )
      .map((row) => {
        return row.filter(
          (r) =>
            (checkedColumns.includes(r[0]) &&
              displayedColumns.includes(r[0])) ||
            typeof r[1] === 'string'
        )
      })
  }

  // Filters based on all checked rows, columns, and collections
  // setFilteredHeaders modifies the table to only display columns (eg. frameworks) checked in the custom-filter
  // The first column is always present and cannot be filtered
  // setFilteredRows modifies the table to display rows that are either checked or part of a checked collection (dropdown filter)
  // Filters the result of user input, to remove unused cell data (based on checked colums)
  // Sorts by collections and adds divider when at least one category is present
  const applyFilters = () => {
    applyHeaderFilters()
    setCustomFilteredRows(applyRowFilters())
    setFilteredRows(sortRows(applyRowFilters()))
    setIsFiltered(true)
  }

  return filterModalStatus ? (
    <React.Fragment>
      <div className="modal__overlay"></div>
      <aside className="modal modal--filter" id="modal--filter" tabIndex="0">
        <ModalHeader title={'Filter'} onClose={onClose} />
        <section className="modal__content">
          <FilterTabs
            handleSearchFilter={handleSearchFilter}
            displayedRows={displayedRows}
            setCheckedRows={setCheckedRows}
            checkedRows={checkedRows}
            displayedColumns={displayedColumns}
            setCheckedColumns={setCheckedColumns}
            checkedColumns={checkedColumns}
            maxRows={allRows.length}
            maxColumns={allHeaders.slice(1).length}
            checkAllColumns={checkAllColumns}
            checkAllRows={checkAllRows}
            uncheckAllColumns={uncheckAllColumns}
            uncheckAllRows={uncheckAllRows}
            collections={collections}
            allRows={allRows}
            checkedCollections={checkedCollections}
            setCheckedCollections={setCheckedCollections}
            setDisplayedRows={setDisplayedRows}
          />
        </section>
        <FilterFooter
          checkedRows={checkedRows}
          checkedColumns={checkedColumns}
          handleResetFilters={handleResetFilters}
          applyFilters={applyFilters}
        />
      </aside>
    </React.Fragment>
  ) : null
}

export default FilterModal
