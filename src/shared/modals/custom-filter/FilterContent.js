import React from 'react'
import FilterItem from './FilterItem'

const FilterContent = (props) => {
  const { setCheckedItems, checkedItems, displayedItems } = props

  return (
    <div>
      {displayedItems.map((item, i) => (
        <FilterItem
          key={i}
          name={item}
          setCheckedItems={setCheckedItems}
          checkedItems={checkedItems}
        />
      ))}
    </div>
  )
}

export default FilterContent
