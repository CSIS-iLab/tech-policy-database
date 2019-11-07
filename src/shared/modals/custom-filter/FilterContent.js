import React from 'react'
import FilterItem from './FilterItem'

const FilterContent = (props) => {
  const { title, setCheckedItems, checkedItems, displayedItems } = props

  return (
    <fieldset>
      <legend className="legend">Select the {title} to display</legend>
      {displayedItems.map((item, i) => (
        <FilterItem
          key={i}
          name={item}
          setCheckedItems={setCheckedItems}
          checkedItems={checkedItems}
        />
      ))}
    </fieldset>
  )
}

export default FilterContent
