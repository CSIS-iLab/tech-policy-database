import React from 'react'
import curatedCategoryNames from '../../json/curated_categories'

const FilterBar = () => {
  const names = Object.keys(curatedCategoryNames).map(
    (name) => curatedCategoryNames[name][name]
  )

  return (
    <div className="table__filter">
      <select>
        {names.map((name, i) => (
          <option key={i}>{name}</option>
        ))}
      </select>
    </div>
  )
}

export default FilterBar
