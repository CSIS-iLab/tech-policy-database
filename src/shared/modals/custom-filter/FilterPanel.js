import React, { useState } from 'react'
import Icon from '../../site-config/Icon'
import CollectionsFilter from './CollectionsFilter'

const FilterPanel = (props) => {
  const [collectionsMenu, setCollectionsMenu] = useState(false)

  const {
    allRows,
    handleSearchFilter,
    maxColumns,
    collections,
    activeTab,
    displayedColumns,
    displayedRows,
    checkedCollections,
    setCheckedCollections
  } = props

  const handleInput = (e) => {
    handleSearchFilter(e.target.value, activeTab)
  }

  const handleClick = () => {
    setCollectionsMenu(!collectionsMenu)
  }

  const renderRowsCount = () => {
    return activeTab === 'Rows' ? (
      <div>
        Showing {displayedRows.length} of {allRows.length}
      </div>
    ) : null
  }

  const renderColumnsCount = () => {
    return activeTab === 'Columns' ? (
      <div>
        Showing {displayedColumns.length} of {maxColumns}
      </div>
    ) : null
  }

  return (
    <div>
      <span>
        <Icon onClick={null} icon={'search'} />
      </span>
      <input id="search-input" placeholder="Search" onChange={handleInput} />

      <CollectionsFilter
        allRows={allRows}
        setCheckedCollections={setCheckedCollections}
        checkedCollections={checkedCollections}
        collections={collections}
        handleClick={handleClick}
        collectionsMenu={collectionsMenu}
      />

      {renderColumnsCount()}
      {renderRowsCount()}
    </div>
  )
}

export default FilterPanel
