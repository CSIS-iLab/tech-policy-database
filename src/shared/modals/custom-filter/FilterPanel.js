import React, { useState, useEffect } from 'react'
import Icon from '../../site-config/Icon'
import CollectionsFilter from './CollectionsFilter'

const FilterPanel = (props) => {
  const [collectionsMenu, setCollectionsMenu] = useState(false)

  const {
    allRows,
    handleSearchFilter,
    collections,
    checkedCollections,
    setCheckedCollections,
    title,
    maxItems,
    displayedItems,
    setDisplayedRows
  } = props

  const handleInput = (e) => {
    handleSearchFilter(e.target.value, title)
  }

  const handleClick = () => {
    setCollectionsMenu(!collectionsMenu)
  }

  const renderItemsCount = () => {
    return (
      <p>
        Showing {displayedItems.length} of {maxItems} results
      </p>
    )
  }

  return (
    <section className="modal__panel">
      <div className="modal__search">
        <Icon icon={'search'} />
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
        displayedItems={displayedItems}
        setDisplayedRows={setDisplayedRows}
      />

      {renderItemsCount()}
    </section>
  )
}

export default FilterPanel
