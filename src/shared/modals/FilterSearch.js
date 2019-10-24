import React from 'react'

const FilterSearch = (props) => {
  const {
    handleSearchFilter,
    displayedRows,
    displayedColumns,
    activeTab,
    maxRows,
    maxColumns
  } = props

  const handleInput = (e) => {
    handleSearchFilter(e.target.value, activeTab)
  }

  return (
    <div>
      <input id="search-input" onChange={handleInput} />
      <button>Light</button>
      {activeTab === 'Rows' ? (
        <div>
          Showing {displayedRows.length} of {maxRows}
        </div>
      ) : null}
      {activeTab === 'Columns' ? (
        <div>
          Showing {displayedColumns.length} of {maxColumns}
        </div>
      ) : null}
    </div>
  )
}

export default FilterSearch
