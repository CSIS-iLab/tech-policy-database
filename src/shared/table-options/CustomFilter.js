import React from 'react'
import Icon from '../site-config/Icon'

const CustomFilter = (props) => {
  const handleClick = () => {
    props.setFilterModalStatus(true)
  }

  return (
    <div className="table__filter">
      <button className="btn btn--dark btn--icon filter-btn" onClick={handleClick}>
        <Icon icon={'filter2'} />
        Filter
      </button>
      <button className="btn btn--xs btn--icon table__reset">
        <Icon icon={'reset'} />
        Reset all filters
      </button>
    </div>
  )
}

export default CustomFilter
