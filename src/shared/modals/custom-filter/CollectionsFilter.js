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

  return (
    <React.Fragment>
      <button className="modal__collections-btn" onClick={handleClick}>
        <Icon icon={'filter2'} />
        <Icon icon={'arrow-dropdown'} />
      </button>
      <div className="modal__collections-count">
        {checkedCollections.length}
      </div>

      {collectionsMenu ? (
        <fieldset>
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
