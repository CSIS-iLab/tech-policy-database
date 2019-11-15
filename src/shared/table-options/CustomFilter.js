import React from 'react'
import Icon from '../site-config/Icon'

const CustomFilter = (props) => {
  const {
    setFilterModalStatus,
    setFilteredRows,
    setFilteredHeaders,
    isFiltered,
    setIsFiltered,
    allRows,
    allHeaders
  } = props

  const handleClick = () => {
    setFilterModalStatus(true)
  }

  const handleResetFilters = () => {
    setFilteredRows(allRows)
    setFilteredHeaders(allHeaders)
    setIsFiltered(false)
  }

  const renderClass = () => {
    return isFiltered
      ? 'btn btn--dark btn--icon filter__button js-isActive'
      : 'btn btn--dark btn--icon filter__button'
  }

  return (
    <div className="table__filter">
      <button className={renderClass()} onClick={handleClick}>
        <Icon icon={'filter2'} />
        Filter
      </button>
      {isFiltered ? (
        <button
          className="btn btn--xs btn--icon btn--transparent-dark filter__reset"
          onClick={handleResetFilters}
        >
          <Icon icon={'reset'} />
          Reset all filters
        </button>
      ) : null}
    </div>
  )
}

export default CustomFilter
