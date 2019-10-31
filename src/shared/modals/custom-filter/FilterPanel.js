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
      <div className="modal__panel-caption">
        <p>
          Showing {displayedRows.length} of {allRows.length}
        </p>
      </div>
    ) : null
  }

  const renderColumnsCount = () => {
    return activeTab === 'Columns' ? (
      <div className="modal__panel-caption">
        <p>
          Showing {displayedColumns.length} of {maxColumns}
        </p>
      </div>
    ) : null
  }

  return (
    <section className="modal__panel">
      <div className="modal__search">
        <Icon onClick={null} icon={'search'} />
        <input
          className="modal__input"
          id="search-input"
          placeholder="Search"
          onChange={handleInput}
        />
      </div>

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
    </section>
  )
}

export default FilterPanel
