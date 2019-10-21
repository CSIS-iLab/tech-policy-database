import React from 'react'

const CollectionFilter = (props) => {
  const { setCuratedCat, handleFilter, searchText, filterSubject, collections } = props

  const handleCuratedFilter = (e) => {
    setCuratedCat(e.target.value)
    handleFilter(
      searchText,
      filterSubject,
      e.target.value
    )
  }

  return (
    <div className="table__filter">
      <select onChange={handleCuratedFilter}>
        {(collections).map((name, i) => (
          <option key={i}>{name}</option>
        ))}
      </select>
    </div>
  )
}

export default CollectionFilter
