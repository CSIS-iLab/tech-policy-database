import React from 'react'
import categoryNames from '../../json/curated_categories.json'

const FilterBar = (props) => {
  const { setCuratedCat, handleFilter, searchText, filterSubject } = props

  const getCategoryNames = () => {
    return Object.keys(categoryNames)
      .map((name) => categoryNames[name][name])
  }

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
        {(getCategoryNames()).map((name, i) => (
          <option key={i}>{name}</option>
        ))}
      </select>
    </div>
  )
}

export default FilterBar
