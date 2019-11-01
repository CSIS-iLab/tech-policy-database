import React from 'react'
import Icon from '../site-config/Icon'

const CustomFilter = (props) => {
  const handleClick = () => {
    props.setFilterModalStatus(true)
  }

  return (
    <div className="table__filter">
      <button className="filter-btn" onClick={handleClick}>
        <Icon icon={'filter2'} />
        Filter
      </button>
    </div>
  )
}

export default CustomFilter
