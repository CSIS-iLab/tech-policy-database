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
    collections
  } = props

  return (
    <React.Fragment>
      <button onClick={handleClick}>
        <Icon onClick={null} icon={'filter2'} />
        <Icon onClick={null} icon={'arrow_dropdown'} />
      </button>
      <div className="collection-count">{checkedCollections.length}</div>

      {collectionsMenu ? (
        <div>
          <div>FILTER BY COLLECTION</div>
          {collections.map((c, i) => (
            <CollectionsItem
              allRows={allRows}
              setCheckedCollections={setCheckedCollections}
              checkedCollections={checkedCollections}
              key={i}
              name={c}
            ></CollectionsItem>
          ))}
        </div>
      ) : null}
    </React.Fragment>
  )
}

export default CollectionsFilter
