import React from 'react'
import Icon from '../../site-config/Icon'

const FilterItem = (props) => {
  const { setCheckedItems, checkedItems, name } = props

  // Toggles checked status of item (row or column based on tab)
  const handleClick = () => {
    if (!checkedItems.includes(name)) {
      setCheckedItems([...checkedItems, name])
    } else {
      setCheckedItems(checkedItems.filter((item) => item !== name))
    }
  }

  return (
    <div>
      {checkedItems.includes(name) ? (
        <Icon onClick={handleClick} icon={'check_filled'} />
      ) : (
        <Icon onClick={handleClick} icon={'check_empty'} />
      )}
      <span>{name}</span>
    </div>
  )
}

export default FilterItem
