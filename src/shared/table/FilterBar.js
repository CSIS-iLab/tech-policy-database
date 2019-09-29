import React from 'react'
import categories from '../../json/explanations.json'

const FilterBar = (props) => {

  // Formats JSON data to create a list of curated categories with the relevant data appended
  // Variables
  // categories: JSON data
  // catKey: the individual category (i.e. accountability)
  // title: the curated category buckets (i.e. definitions)
  const formatCuratedCategories = () => {
    return Object.keys(categories)
      .map((key) => [key, categories[key]])
      .reduce((acc, catData) => {
        let catKey = catData[1].category
        let title = catData[1].title
        acc[catKey] ? acc[catKey].push(title) : (acc[catKey] = [title])
        return acc
      }, {})
  }

  const handleCuratedFilter = (e) => {
    props.filterByCurated(formatCuratedCategories()[e.target.value])
  }

  return (
    <div className="table__filter">
      <select onChange={handleCuratedFilter}>
        {Object.keys(formatCuratedCategories()).map((name, i) => (
          <option key={i}>{name}</option>
        ))}
      </select>
    </div>
  )
}

export default FilterBar
