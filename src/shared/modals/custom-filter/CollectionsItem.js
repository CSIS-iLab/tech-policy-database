import React from 'react'

const CollectionsItem = (props) => {
  const {
    name,
    checkedCollections,
    setCheckedCollections,
    allRows,
    setDisplayedRows
  } = props

  // Toggles collection item's checked status on user input
  const handleChange = () => {
    if (!checkedCollections.includes(name)) {
      setCheckedCollections([...checkedCollections, name])
      updateRows(isValidCheck)
    } else {
      setCheckedCollections(checkedCollections.filter((col) => col !== name))
      updateRows(isValidUncheck)
    }
  }

  // Helper f(n) that checks condition for adding collection to active filters
  const isValidCheck = (cat) => {
    return name === cat || checkedCollections.includes(cat)
  }

  // Helper f(n) that checks condition for removing collection from active filters
  const isValidUncheck = (cat) => {
    return name !== cat && checkedCollections.includes(cat)
  }

  // Updates displayed rows to reflect change in collection filter
  const updateRows = (valid) => {
    setDisplayedRows(
      allRows.reduce((acc, row) => {
        if (valid(row[1][1].category)) {
          acc.push(row[0][0])
        }
        return acc
      }, [])
    )
  }

  const collectionCount = (name) => {
    return allRows.filter((row) => row[1][1].category === name).length
  }

  return (
    <div className="checkbox__container">
      <input
        type="checkbox"
        value={name}
        name="collections"
        id={name}
        onChange={handleChange}
        checked={checkedCollections.includes(name)}
      />
      <label className="checkbox__items" htmlFor={name}>
        {name}
      </label>

      <span className="modal__col-count-item">
        {collectionCount(name)}&nbsp;items
      </span>
    </div>
  )
}

export default CollectionsItem
