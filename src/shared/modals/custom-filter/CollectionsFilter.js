import React, { useEffect, useCallback } from 'react'
import CollectionsItem from './CollectionsItem'
import Icon from '../../site-config/Icon'

const CollectionsFilter = (props) => {
  const {
    handleClick,
    checkedCollections,
    setCheckedCollections,
    collectionsMenu,
    setCollectionsMenu,
    allRows,
    collections,
    setDisplayedRows
  } = props

  let countIsHidden = 'modal-collections__count--hidden'
  if (checkedCollections.length) {
    countIsHidden = ''
  }

  let filtersAreVisible = ''
  if (collectionsMenu) {
    filtersAreVisible = 'modal-collections__btn--active'
  }

  const handleClickOutside = useCallback((e) => {
    let collections = document.querySelector('.modal-collections__list')
    let button = document.querySelector('.modal-collections__btn')
    if (e.target === button || collections.contains(e.target)) {
      // inside click
      return
    }
    // outside click
    setCollectionsMenu(!collectionsMenu)
  }, [collectionsMenu, setCollectionsMenu])

  useEffect(() => {
    if (collectionsMenu) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handleClickOutside, collectionsMenu])

  return (
    <React.Fragment>
      <button
        className={`btn btn--white modal-collections__btn ${filtersAreVisible}`}
        aria-label="View suggested filters"
        onClick={handleClick}
      >
        <Icon icon={'filter2'} />
        <Icon icon={'arrow-dropdown'} />
        <span className={`modal-collections__count ${countIsHidden}`}>
          {checkedCollections.length}
        </span>
      </button>

      {collectionsMenu ? (
        <fieldset className="modal-collections__list">
          <legend>Filter by Collection</legend>
          {collections.map((c, i) => (
            <CollectionsItem
              allRows={allRows}
              setCheckedCollections={setCheckedCollections}
              checkedCollections={checkedCollections}
              setDisplayedRows={setDisplayedRows}
              key={i}
              name={c}
            ></CollectionsItem>
          ))}
        </fieldset>
      ) : null}
    </React.Fragment>
  )
}

export default CollectionsFilter
