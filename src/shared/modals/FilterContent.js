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
    <div>
      {displayedRows.map((row, i) => (
        <FilterItem
          key={i}
          name={row}
          setCheckedItems={setCheckedRows}
          checkedItems={checkedRows}
        />
      ))}
    </div>
  ) : (
    <div>
      {displayedColumns.map((data, i) => (
        <FilterItem
          key={i}
          name={data}
          setCheckedItems={setCheckedColumns}
          checkedItems={checkedColumns}
        />
      ))}
    </div>
  )
}

export default FilterContent
