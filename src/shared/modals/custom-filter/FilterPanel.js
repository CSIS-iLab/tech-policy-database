import React, { useState } from 'react'
import CollectionsFilter from './CollectionsFilter'
import Icon from '../../site-config/Icon'

const FilterPanel = (props) => {
  const [collectionsMenu, setCollectionsMenu] = useState(false)
  const [modalSearchText, setModalSearchText] = useState('')

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
    setModalSearchText(e.target.value)
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

  const handleClear = () => {
    setModalSearchText('')
    handleSearchFilter('', title)
  }

  const renderClass = () => {
    let closeClass =
      modalSearchText.length > 0 ? '' : ' search__button-close--hidden'
    return 'btn search__button-close modal-search__button-close' + closeClass
  }

  return (
    <fieldset className="modal-search">
      <legend>Search available results</legend>
      <div className="search modal-search__wrapper">
        <div className="search__input modal-search__input">
          <Icon icon={'search'} />
          <input
            className="search__input-field modal-search__input-field"
            id="search-input"
            placeholder="Search"
            onChange={handleInput}
            value={modalSearchText}
          />
          <button className={renderClass()} onClick={handleClear}>
            <Icon icon={'close-circle'} />
          </button>
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
      </div>
    </fieldset>
  )
}

export default FilterPanel
