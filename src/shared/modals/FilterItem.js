import React from 'react'

const FilterItem = (props) => {
  const { setCheckedItems, checkedItems, name } = props

  const handleClick = () => {
    if (!checkedItems.includes(name)) {
      setCheckedItems([...checkedItems, name])
    } else {
      setCheckedItems(checkedItems.filter((item) => item !== name))
    }
  }

  return (
    <div>
      <input
        type="checkbox"
        checked={checkedItems.includes(name)}
        onClick={handleClick}
        readOnly
      />
      <span>{name}</span>
    </div>
  )
}

export default FilterItem
