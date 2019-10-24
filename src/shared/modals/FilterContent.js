import React from 'react'
import FilterItem from './FilterItem'

const FilterContent = (props) => {
  const {
    setActiveFilterRows,
    activeFilterRows,
    setActiveFilterColumns,
    activeFilterColumns,
    allRows,
    activeTab,
    filterText
  } = props

  return activeTab === 'Rows' ? (
    <div>
      {allRows
        .filter((row) =>
          row[0][0].toLowerCase().includes(filterText.toLowerCase())
        )
        .map((row, i) => (
          <FilterItem
            key={i}
            name={row[0][0]}
            setActiveFilterItems={setActiveFilterRows}
            activeFilterItems={activeFilterRows}
          />
        ))}
    </div>
  ) : (
    <div>
      {allRows[0]
        .slice(1)
        .filter((data) =>
          data[0].toLowerCase().includes(filterText.toLowerCase())
        )
        .map((data, i) => (
          <FilterItem
            key={i}
            name={data[0]}
            setActiveFilterItems={setActiveFilterColumns}
            activeFilterItems={activeFilterColumns}
          />
        ))}
    </div>
  )
}

export default FilterContent
