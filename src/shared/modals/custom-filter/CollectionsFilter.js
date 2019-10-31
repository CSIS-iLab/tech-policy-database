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
      <button className="modal__col-btn" onClick={handleClick}>
        <Icon onClick={null} icon={'filter2'} />
        <Icon onClick={null} icon={'arrow_dropdown'} />
      </button>
      <div className="modal__col-count">{checkedCollections.length}</div>

      {collectionsMenu ? (
        <div className="modal__dropdown">
          <h5 className="modal__subtitle">FILTER BY COLLECTION</h5>
          <ul className="modal__col-list">
            {collections.map((c, i) => (
              <CollectionsItem
                allRows={allRows}
                setCheckedCollections={setCheckedCollections}
                checkedCollections={checkedCollections}
                key={i}
                name={c}
              ></CollectionsItem>
            ))}
          </ul>
        </div>
      ) : null}
    </React.Fragment>
  )
}

export default CollectionsFilter
