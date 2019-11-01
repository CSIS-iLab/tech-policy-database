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
    <fieldset>
      {displayedRows.map((row, i) => (
        <FilterItem
          key={i}
          name={row}
          setCheckedItems={setCheckedRows}
          checkedItems={checkedRows}
        />
      ))}
   
      </fieldset>
  ) : (
    <fieldset>
      {displayedColumns.map((data, i) => (
        <FilterItem
          key={i}
          name={data}
          setCheckedItems={setCheckedColumns}
          checkedItems={checkedColumns}
        />
      ))}
    </fieldset>
  )
}

export default FilterContent
