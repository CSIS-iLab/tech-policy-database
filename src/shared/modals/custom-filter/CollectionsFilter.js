import React from 'react'
import CollectionsItem from './CollectionsItem'
import Icon from '../../site-config/Icon'

const CollectionsFilter = (props) => {
  const {
    handleClick,
    checkedCollections,
    setCheckedCollections,
    collectionsMenu,
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

  return (
    <React.Fragment>
      <button
        className={`btn btn--white btn--square modal-collections__btn ${filtersAreVisible}`}
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
