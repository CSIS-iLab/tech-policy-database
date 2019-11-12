import React from 'react'
import Icon from '../site-config/Icon'

const CustomFilter = (props) => {
  const handleClick = () => {
    props.setFilterModalStatus(true)
  }

  return (
    <div className="table__filter">
      <button className="btn btn--dark btn--icon filter__button" onClick={handleClick}>
        <Icon icon={'filter2'} />
        Filter
      </button>
      <button className="btn btn--xs btn--icon btn--transparent-dark filter__reset">
        <Icon icon={'reset'} />
        Reset all filters
      </button>
    </div>
  )
}

export default CustomFilter
