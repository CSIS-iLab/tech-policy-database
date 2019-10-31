import React from 'react'
import FilterItem from './FilterItem'

const FilterContent = (props) => {
  const {
    setCheckedRows,
    checkedRows,
    setCheckedColumns,
    checkedColumns,
    activeTab,
    displayedRows,
    displayedColumns
  } = props

  return activeTab === 'Rows' ? (
    <ul className="modal__option-list">
      {displayedRows.map((row, i) => (
        <FilterItem
          key={i}
          name={row}
          setCheckedItems={setCheckedRows}
          checkedItems={checkedRows}
        />
      ))}
    </ul>
  ) : (
    <ul className="modal__option-list">
      {displayedColumns.map((data, i) => (
        <FilterItem
          key={i}
          name={data}
          setCheckedItems={setCheckedColumns}
          checkedItems={checkedColumns}
        />
      ))}
    </ul>
  )
}

export default FilterContent
