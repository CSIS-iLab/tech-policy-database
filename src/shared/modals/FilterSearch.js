import React, { useState } from 'react'

const FilterSearch = (props) => {
  const [collectionsMenu, setCollectionsMenu] = useState(false)

  const {
    handleSearchFilter,
    displayedRows,
    displayedColumns,
    activeTab,
    maxRows,
    maxColumns,
    collections
  } = props

  const handleInput = (e) => {
    handleSearchFilter(e.target.value, activeTab)
  }

  const handleClick = () => {
    setCollectionsMenu(!collectionsMenu)
  }

  return (
    <div>
      <input id="search-input" onChange={handleInput} />
      <button onClick={handleClick}>Light</button>
      {collectionsMenu ? (
        <div>
          {collections.map((c, i) => (
            <div key={i}>{c}</div>
          ))}
        </div>
      ) : null}
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
