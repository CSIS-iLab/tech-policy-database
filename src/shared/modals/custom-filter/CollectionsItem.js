import React from 'react'
import Icon from '../../site-config/Icon'

const CollectionsItem = (props) => {
  const { name, checkedCollections, setCheckedCollections, allRows } = props

  // Toggles collection item's checked status on user input
  const handleClick = () => {
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
    <div>
      {checkedCollections.includes(name) ? (
        <Icon onClick={handleClick} icon={'check_filled'} />
      ) : (
        <Icon onClick={handleClick} icon={'check_empty'} />
      )}
      <span>{name}</span>
      <span>{collectionCount(name)}&nbsp;items</span>
    </div>
  )
}

export default CollectionsItem
