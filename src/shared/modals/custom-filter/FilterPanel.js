import React, { useState, useEffect } from 'react'
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
      <p className="modal-search__results">
        Showing {displayedItems.length} of {maxItems} results
      </p>
    )
  }

  return (
    <fieldset className="modal-search">
      <legend>Search available results</legend>
      <div class="modal-search__wrapper">
        <input
          className="modal-search__input"
          id="search-input"
          placeholder="Search"
          onChange={handleInput}
        />
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
      </div>
    </fieldset>
  )
}

export default FilterPanel
