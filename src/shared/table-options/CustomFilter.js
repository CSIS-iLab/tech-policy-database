import React from 'react'
import Icon from '../site-config/Icon'

const CustomFilter = (props) => {
  const { handleResetFilters } = props

  const handleClick = () => {
    props.setFilterModalStatus(true)
  }

  return (
    <div className="table__filter">
      <button className="filter-btn btn btn--dark btn--icon" onClick={handleClick}>
        <Icon icon={'filter2'} />
        Filter
      </button>
      <button
        className="btn btn--transparent-light btn--xs btn--icon modal__reset"
        onClick={handleResetFilters}
      >
        <Icon icon={'reset'} />
        Reset all filters
      </button>
    </div>
  )
}

export default CustomFilter
