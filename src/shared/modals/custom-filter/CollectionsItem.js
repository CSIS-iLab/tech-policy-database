import React from 'react'
import Icon from '../../site-config/Icon'

const CollectionsItem = (props) => {
  const { name, checkedCollections, setCheckedCollections, allRows } = props

  // Toggles collection item's checked status on user input
  const handleChange = () => {
    if (!checkedCollections.includes(name)) {
      setCheckedCollections([...checkedCollections, name])
    } else {
      setCheckedCollections(checkedCollections.filter((col) => col !== name))
    }
  }

  const collectionCount = (name) => {
    return allRows.filter((row) => row[1][1].category === name).length
  }

  return (
    <div className="checkbox__container">
      {/* {checkedCollections.includes(name) ? (
        <Icon onClick={handleClick} icon={'check_filled'} />
      ) : (
        <Icon onClick={handleClick} icon={'check_empty'} /> */}
      

      <input type="checkbox" value={name} name="collections" id={name} onChange={handleChange} checked={checkedCollections.includes(name)}/>
      <label className="checkbox__items" htmlFor={name}>{name}</label>

      <span className="modal__col-count-item">
        {collectionCount(name)}&nbsp;items
      </span>
    </div>
  )
}

export default CollectionsItem
