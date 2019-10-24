import React from 'react'

const FilterSearch = (props) => {
  const {
    setFilterText,
    activeFilterRows,
    activeFilterColumns,
    activeTab,
    maxRows,
    maxColumns
  } = props

  const handleSearchInput = (e) => {
    setFilterText(e.target.value)
  }

  return (
    <div>
      <input onChange={handleSearchInput} />
      <button>Light</button>
      {activeTab === 'Rows' ? (
        <div>
          Showing {activeFilterRows.length} of {maxRows}
        </div>
      ) : null}
      {activeTab === 'Columns' ? (
        <div>
          Showing {activeFilterColumns.length} of {maxColumns}
        </div>
      ) : null}
    </div>
  )
}

export default FilterSearch
