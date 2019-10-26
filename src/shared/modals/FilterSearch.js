import React, { useState } from 'react'
import CollectionsItem from './CollectionsItem'
import Icon from '../site-config/Icon'

const FilterSearch = (props) => {
  const [collectionsMenu, setCollectionsMenu] = useState(false)

  const {
    allRows,
    handleSearchFilter,
    displayedRows,
    displayedColumns,
    activeTab,
    maxRows,
    maxColumns,
    collections,
    checkedCollections,
    setCheckedCollections
  } = props

  const handleInput = (e) => {
    handleSearchFilter(e.target.value, activeTab)
  }

  const handleClick = () => {
    setCollectionsMenu(!collectionsMenu)
  }

  return (
    <div>
      <span>
        <Icon onClick={null} icon={'search'}></Icon>
      </span>
      <input
        id="search-input"
        placeholder="Search"
        onChange={handleInput}
      ></input>
      <button onClick={handleClick}>
        <Icon onClick={null} icon={'filter2'}></Icon>
        <Icon onClick={null} icon={'arrow_dropdown'}></Icon>
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
      {activeTab === 'Rows' ? (
        <div>
          Showing {displayedRows.length} of {maxRows}
        </div>
      ) : null}
      {activeTab === 'Columns' ? (
        <div>
          Showing {displayedColumns.length} of {maxColumns}
        </div>
      ) : null}
    </div>
  )
}

export default FilterSearch
