import React from 'react'
import Icon from '../../site-config/Icon'

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
      {/* {checkedItems.includes(name) ? (
        <Icon onClick={handleClick} icon={'check-filled'} />
      ) : (
        <Icon onClick={handleClick} icon={'check-empty'} />
      )} */}
      <input type="checkbox" value={name} name="categories" id={name} onChange={handleChange} />
      <label className="checkbox__items" htmlFor={name} >{name}</label>

      {/* <span >{name}</span> */}
    </div>
  )
}

export default FilterItem
