import React from 'react'

const FilterItem = (props) => {
  const { setActiveFilterItems, activeFilterItems, name } = props

  const handleClick = () => {
    if (!activeFilterItems.includes(name)) {
      setActiveFilterItems([...activeFilterItems, name])
    } else {
      setActiveFilterItems(activeFilterItems.filter((item) => item !== name))
    }
  }

  return (
    <div>
      <input
        type="checkbox"
        checked={activeFilterItems.includes(name)}
        onClick={handleClick}
        readOnly
      />
      <span>{name}</span>
    </div>
  )
}

export default FilterItem
