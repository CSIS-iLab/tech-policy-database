import React from 'react'

const FilterItem = (props) => {
  const { setCheckedItems, checkedItems, name } = props

  // Toggles checked status of item (row or column based on tab)
  const handleChange = () => {
    if (!checkedItems.includes(name)) {
      setCheckedItems([...checkedItems, name])
    } else {
      setCheckedItems(checkedItems.filter((item) => item !== name))
    }
  }

  return (
    <div className="checkbox__container">   
      <input type="checkbox" value={name} name="categories" id={name} onChange={handleChange} checked={checkedItems.includes(name)} />
      <label className="checkbox__items" htmlFor={name} >{name}</label>
    </div>
  )
}

export default FilterItem
