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
    allHeaders,
    setFrameModalStatus,
    setLangModalStatus
  } = props

  const handleClick = () => {
    setFilterModalStatus(true)
    setFrameModalStatus(false)
    setLangModalStatus(false)
  }

  const handleResetFilters = () => {
    setFilteredRows(allRows)
    setFilteredHeaders(allHeaders)
    setIsFiltered(false)
  }

  const renderClass = () => {
    let filteredClass = isFiltered ? ' js-isActive' : ''
    return 'btn btn--dark btn--icon filter__button' + filteredClass
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
